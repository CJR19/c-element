<template>
  <div
    class="c-select"
    :class="{'is-disabled': disabled }"
    @click="toggleDropdown"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <Tooltip
      placement="bottom-start"
      ref="tooltipRef"
      :popper-options="popperOptions"
      @click-ouside="controlDropdown(false)"
      manual
    >
      <Input 
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="filteredPlaceHolder"
        ref="inputRef"
        :readonly="!filterable || !isDropdownShow"
        @input="onFilter"
      >
        <template #suffix>
          <Icon icon="circle-xmark" v-if="showClearIcon" class="c-input__clear" @click.stop="onClear"/>
          <Icon icon="angle-down" v-else class="header-angle" :class="{'is-active': isDropdownShow}"/>
        </template>
      </Input>
      <template #content>
        <ul class="c-select__menu">
          <template v-for="(item, index) in filterOptions" :key="index">
            <li 
              class="c-select__menu-item"
              :class="{
                'is-disabled': item.disabled ,
                'is-selected': item.value === states.selectedOption?.value
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode :vNode="renderLabel?renderLabel(item):item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>  
</template>

<script setup lang="ts">
import { ref,reactive,computed,watch } from 'vue'
import type { Ref } from 'vue'
import type { SelectProps, SelectEmits, SelectOption, SelectState } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import RenderVnode from '../Common/RenderVnode'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import type { InputInstance } from '../Input/types'

defineOptions({ name: 'CSelect' })
const findOption = (value: string) => {
  const option = props.options.find((item:SelectOption) => item.value === value)
  return option ? option : null
}
const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const states = reactive<SelectState>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption ? initialOption : null,
  mouseHover: false
})
const isDropdownShow = ref(false)

const popperOptions : any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9]
      }
    },
    {
      name: "sameWidth",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: ({ state }: { state:any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      effect: ({ state }: { state:any }) => {
        state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
      }
    }
    
  ]
}
const filterOptions = ref(props.options)
watch(() => props.options, (val) => {
  filterOptions.value = val
})
const generateFilterOption = (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && typeof props.filterMethod === 'function') {
    filterOptions.value = props.filterMethod(searchValue)
  } else {
    filterOptions.value = props.options.filter((item:SelectOption) => item.label.includes(searchValue))
  }
}
const onFilter = () => {
  generateFilterOption(states.inputValue)
}
const filteredPlaceHolder = computed(() => {
  return (props.filterable && states.selectedOption && isDropdownShow.value) 
  ? states.selectedOption.label : props.placeholder
})
const controlDropdown = (show: boolean) => {
  if (show) {
    if (props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    if (props.filterable) {
      states.inputValue = states.selectedOption? states.selectedOption.label : ''
    }
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const showClearIcon = computed(() => {
  return props.clearable 
    && states.mouseHover
    && states.selectedOption
    && states.inputValue.trim() !== ''
})
const onClear = () => {
  states.selectedOption = null
  states.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
const handleMouseEnter = () => {
  states.mouseHover = true;
}

const handleMouseLeave = () => {
  states.mouseHover = false;
}

const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.selectedOption = e
  states.inputValue = e.label
  emits('change', e.value as string)
  emits('update:modelValue', e.value as string)
  controlDropdown(false)
  inputRef.value.ref.focus()
}
</script>
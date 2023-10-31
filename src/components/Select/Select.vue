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
        @input="debounceOnFilter"
        @keydown="handleKeydown"
      >
        <template #suffix>
          <Icon icon="circle-xmark" v-if="showClearIcon" class="c-input__clear" @click.stop="onClear"/>
          <Icon icon="angle-down" v-else class="header-angle" :class="{'is-active': isDropdownShow}"/>
        </template>
      </Input>
      <template #content>
        <div class="c-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin></Icon>
        </div>
        <div class="c-select__nodata" v-else-if="filterable && filterOptions.length === 0 ">
          no matching data
        </div>
        <ul class="c-select__menu" v-else>
          <template v-for="(item, index) in filterOptions" :key="index">
            <li 
              class="c-select__menu-item"
              :class="{
                'is-disabled': item.disabled ,
                'is-selected': item.value === states.selectedOption?.value,
                'is-highlight': index === states.highlightIndex
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
const props = withDefaults(defineProps<SelectProps>(),{
  options: () => []
}) 
const emits = defineEmits<SelectEmits>()
const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const states = reactive<SelectState>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption ? initialOption : null,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
})
const isDropdownShow = ref(false)
const timeout = computed(() =>{
  return props.remote ? 300 : 0
})

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
const generateFilterOption = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && typeof props.filterMethod === 'function') {
    filterOptions.value = props.filterMethod(searchValue)
  } else if (props.remote && typeof props.remoteMethod === 'function') {
    states.loading = true
    try {
      filterOptions.value = await props.remoteMethod(searchValue)
    } catch (e) {
      console.log(e)
      filterOptions.value = []
    } finally {
      states.loading = false
    }
  } else {
    filterOptions.value = props.options.filter((item:SelectOption) => item.label.includes(searchValue))
  }
}
const onFilter = () => {
  generateFilterOption(states.inputValue)
}
const debounce = (fn: Function, delay: number) => {
  let timer: any = null
  return (...args: any) => {
    if(timer) clearTimeout(timer)
    timer =  setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
const debounceOnFilter = debounce(onFilter, timeout.value)
const filteredPlaceHolder = computed(() => {
  return (props.filterable && states.selectedOption && isDropdownShow.value) 
  ? states.selectedOption.label : props.placeholder
})


const handleKeydown = (e:KeyboardEvent) => {
  switch(e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true)
      } else {
        if (states.highlightIndex > -1 && filterOptions.value[states.highlightIndex]) {
          itemSelect(filterOptions.value[states.highlightIndex])
        } else {
          controlDropdown(false)
        }
      }
      break
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (filterOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === 0) {
          states.highlightIndex = filterOptions.value.length - 1
        } else { 
          states.highlightIndex--      
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if (filterOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === (filterOptions.value.length -1)) {
          states.highlightIndex = 0
        } else { 
          states.highlightIndex++      
        }
      }
      break
    default:
      break;
  }
}

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
    states.highlightIndex = -1
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
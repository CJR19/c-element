<template>
  <div
    class="c-select"
    :class="{'is-disabled': disabled }"
    @click="toggleDropdown"
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
        :placeholder="placeholder"
        ref="inputRef"
        readonly
      >
        <template #suffix>
          <Icon icon="angle-down" class="header-angle" :class="{'is-active': isDropdownShow}"/>
        </template>
      </Input>
      <template #content>
        <ul class="c-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li 
              class="c-select__menu-item"
              :class="{
                'is-disabled': item.disabled ,
                'is-selected': item.value === states.selectedOption?.value
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              {{item.label}}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>  
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import type { Ref } from 'vue'
import type { SelectProps, SelectEmits, SelectOption, SelectState } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
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
  selectedOption: initialOption ? initialOption : null
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

const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
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
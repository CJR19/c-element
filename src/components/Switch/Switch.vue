<template>
  <div 
    class="c-switch"
    :class="{
      [`c-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="switchValue"
  >
    <input
      ref="input"
      class="c-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="c-switch__core">
      <div class="c-switch__core-inner">
        <span v-if="activeText || inactiveText" class="c-switch__core-inner-text">
          {{ checked?activeText:inactiveText }}
        </span>
      </div>
      <div class="c-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,computed,onMounted, watch } from 'vue'
import type { SwitchProps,SwitchEmits } from './types'
defineOptions({ name: 'CSwitch',inheritAttrs:false })
const props = withDefaults(defineProps<SwitchProps>(),{
  activeValue: true,
  inactiveValue: false
})
const emits = defineEmits<SwitchEmits>()

const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement>()
const checked = computed(()=> innerValue.value === props.activeValue )
const switchValue = () => {
  if (props.disabled) return
  const newValue = checked.value?props.inactiveValue:props.activeValue
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}
watch(checked,(val)=>{
  input.value!.checked = val
})
watch(
  () => props.modelValue,
  (newVal) => innerValue.value = newVal
)
onMounted(()=>{
  input.value!.checked = checked.value
})
</script>

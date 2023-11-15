<template>
  <div class="c-tab-panels">
      <slot />
  </div>
</template>
  
<script lang="ts" setup>
import { ref,watch,provide } from 'vue'
import type { TabPanelsProps,TabPanelsEmits,NameType } from './types'
import { TabPanelsContextKey } from './types'

defineOptions({
  name: 'CTabPanels'
})
  
const props = defineProps<TabPanelsProps>()
const emits = defineEmits<TabPanelsEmits>()

const activeName = ref(props.modelValue)

watch(
  ()=>props.modelValue,
  ()=>activeName.value = props.modelValue
)

const toggleActiveName = (name:NameType)=>{
  activeName.value = name
  emits('update:modelValue',activeName.value) 
}

provide(TabPanelsContextKey,{
  activeName
})  

defineExpose({
    goTo: (name:NameType)=>{
      toggleActiveName(name)
    }
})
  
</script>
  
<style>

</style>
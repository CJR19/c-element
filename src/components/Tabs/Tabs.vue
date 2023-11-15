<template>
  <div class="c-tabs">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref,watch,provide } from 'vue'
import type { TabsProps,TabsEmits,NameType } from './types'
import {TabsContextKey} from './types'

defineOptions({
  name: 'CTabs'
})

const props = defineProps<TabsProps>()
const emits = defineEmits<TabsEmits>()

const activeName = ref(props.modelValue)

watch(
  ()=>props.modelValue,
  ()=>activeName.value = props.modelValue
)

const toggleActiveName = (name:NameType)=>{
  activeName.value = name
  emits('update:modelValue',activeName.value)
  console.log(activeName.value)
}

provide(TabsContextKey,{
  activeName,
  toggleActiveName
})

</script>

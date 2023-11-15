<template>
  <div class="c-tab" @click="changeTab(name)">
    <div 
      class="c-tab__content"
      :class="{
        'is-active':activeName === name,
      }"
    >
      <div class="c-tab__label">{{ label }}</div>
    </div>   
    <div class="c-tab__indicator" v-show="activeName===name"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref,watch,inject } from 'vue'
import type { TabProps } from './types'
import { TabsContextKey } from './types'

defineOptions({
  name: 'CTab'
})
const TabsContext = inject(TabsContextKey)
const {activeName,toggleActiveName} = TabsContext!

const changeTab = (name:string | number)=>{
  toggleActiveName(name)
}

const props = withDefaults(defineProps<TabProps>(),{
  name: Math.random().toString(36).split('.')[1]
})



</script>

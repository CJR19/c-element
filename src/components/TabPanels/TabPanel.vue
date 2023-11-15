<template>
    <div class="c-tab-panel" v-if="activeName === name">
      <slot />
    </div>
</template>
  
<script lang="ts" setup>
import { ref, watch, inject } from 'vue'
import type { TabPanelProps } from './types'
import { TabPanelsContextKey } from './types'

defineOptions({
  name: 'CTabPanel'
})
const TabsContext = inject(TabPanelsContextKey)
const { activeName } = TabsContext!



const props = defineProps<TabPanelProps>()



</script>
  
<style>


</style>
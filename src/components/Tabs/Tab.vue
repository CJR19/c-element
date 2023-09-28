<template>
  <div class="c-tab">
    <div class="c-tab__content c-tab__content--active">
      <Icon class="c-tab__icon" :icon="icon" v-if="icon"/>
      <div class="c-tab__label">{{ label }}</div>
    </div>   
    <div class="c-tab__indicator"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref,watch,provide } from 'vue'
import type { TabProps } from './types'
import { TabsContextKey } from './types'
import Icon from '../Icon/Icon.vue';
defineOptions({
  name: 'CTab'
})

const props = withDefaults(defineProps<TabProps>(),{
  name: Math.random().toString(36).split('.')[1]
})



</script>

<script setup lang="ts">
import { ref } from 'vue'
const test = ref(false)
const test2 = ref(false)
</script>
<template>
  正常：<c-switch v-model="test" /> <br/>
  禁用：<c-switch v-model="test2" disabled/>
</template>
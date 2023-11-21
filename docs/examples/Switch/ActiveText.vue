<script setup lang="ts">
import { ref } from 'vue'
const test = ref(false)
</script>
<template>
  <c-switch v-model="test" activeText="ON" inactiveText="OFF"/>
</template>
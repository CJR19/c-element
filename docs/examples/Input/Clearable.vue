<script setup lang="ts">
import { ref } from 'vue'
const test = ref('')
</script>
<template>
  <c-input v-model="test" clearable placeholder="密码文本框，可以切换" showPassword/>
</template>
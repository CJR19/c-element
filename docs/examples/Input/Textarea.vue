<script setup lang="ts">
import { ref } from 'vue'
const test = ref('')
</script>
<template>
  <c-input v-model="test" placeholder="可以是一个 Textarea" type="textarea"></c-input>
</template>
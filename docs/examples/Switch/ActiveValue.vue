<script setup lang="ts">
import { ref } from 'vue'
const test = ref('right')
</script>
<template>
  <c-switch v-model="test" activeValue="right" inactiveValue="wrong"/>
  <h4>model-value: {{test}}</h4>
</template>
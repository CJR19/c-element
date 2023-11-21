<template>
    <c-input v-model="message" disabled placeholder="基础文本框，请输入" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')
</script>

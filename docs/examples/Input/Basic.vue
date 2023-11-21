<template>
    <c-input v-model="message" placeholder="基础文本框，请输入" />
    message:<span>{{ message }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')
</script>

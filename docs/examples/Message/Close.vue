<template>
    <c-button @click="open"> 可关闭消息 </c-button>
</template>
<script setup lang="ts">
import { createMessage } from '@/components/Message'
const open = () => {
    createMessage({ message: 'hello world', showClose: true, duration: 0 })
}
</script>
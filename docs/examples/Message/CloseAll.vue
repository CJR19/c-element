<template>
    <c-button @click="open"> 创建三条消息 </c-button>
    <c-button @click="close"> 全部关闭 </c-button>
</template>
<script setup lang="ts">
import { createMessage, closeAll } from '@/components/Message'
const open = () => {
    createMessage({ message: 'hello world1', duration: 0 })
    createMessage({ message: 'hello world2', duration: 0 })
    createMessage({ message: 'hello world3', duration: 0 })
}
const close = () => {
    closeAll()
}
</script>
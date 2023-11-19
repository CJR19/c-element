<template>
    <c-button type="primary" @click="open"> 创建一条消息 </c-button>
    <c-button @click="open2"> 创建支持 VNode 的消息 </c-button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { createMessage } from '@/components/Message';
const open = () => {
    createMessage({ message: 'hello world' })
}
const open2 = () => {
    createMessage({ message: h('b', 'this is bold') })
}
</script>

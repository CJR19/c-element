
<template>
    <c-button type="success" @click="open('success')"> Success </c-button>
    <c-button type="warning" @click="open('warning')"> warning </c-button>
    <c-button type="danger" @click="open('danger')"> Danger </c-button>
    <c-button type="info" @click="open('info')"> Info </c-button>
</template>
<script setup lang="ts">
import { createMessage } from '@/components/Message'
import type { MessageProps } from '@/components/Message';

const open = (type: MessageProps['type']) => {
    createMessage({ message: 'hello world', type })
}
</script>
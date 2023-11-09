<template>
    <form class="c-form">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import type { FormProps } from './types'
import { FormKey } from './types'
import { provide } from 'vue';
defineOptions({ name: 'CForm' })
const props = defineProps<FormProps>()
provide(FormKey,props)
</script>
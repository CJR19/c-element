<template>
    <div class="c-loading">
        <div class="c-loading-spinner"></div>
        <div class="c-loading-message">
            {{ message }}
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import type { LoadingProps } from './types'
defineOptions({ name: 'CLoading' })
const props = withDefaults(defineProps<LoadingProps>(),{
    message: '加载中...'
})



</script>

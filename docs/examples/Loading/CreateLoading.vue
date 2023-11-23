<template>
    <c-button type="primary" @click="loading">点击调用</c-button>
</template>
    
<script setup lang='ts'>
import { createLoading } from '@/index'

const loading = ()=> {
    const loading = createLoading()
    setTimeout(() => {
        loading.close()
    }, 3000);
}

</script>

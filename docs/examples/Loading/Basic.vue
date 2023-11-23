<template>
    <div class="md-demo-loading shadow-2" v-loading="visiable">
        加载演示
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
const visiable = ref(true)

setTimeout(() => {
    visiable.value = false
}, 3000);
</script>

<style scoped>
.md-demo-loading {
    width: 200px;
    height: 200px;
    background-color: pink;
    color: #fff;
    line-height: 200px;
    text-align: center;
    border-radius: 4px;
}
</style>
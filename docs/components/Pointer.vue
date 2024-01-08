<template>
    <div class="c-pointer" ref="pointer">
        <c-icon :icon="icon"/>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted,onUnmounted, watch, nextTick, watchEffect } from 'vue'
const props = defineProps({
    icon: {
        default: ['fab', 'space-awesome']
    }
})
const color = ref('')

const pointer = ref<HTMLElement>()

let rad = 0
const pointerMove = (e: MouseEvent) => {

    if (!pointer.value) return
    if (Math.abs(e.movementX) + Math.abs(e.movementY) > 3) {
        rad = Math.atan2(e.movementX, -e.movementY)
    }

    pointer.value.style.left = `${e.clientX}px`
    pointer.value.style.top = `${e.clientY}px`
    pointer.value.style.transform = `rotate(${rad}rad)`

        // 检查鼠标下的元素是否有 'cursor: pointer' 样式
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
    const style = window.getComputedStyle(elementUnderCursor as Element)
    if (style.cursor === 'pointer') {
        pointer.value.style.display = 'none'
    } else {
        pointer.value.style.display = 'block'
    }
}
const changeColor = () => {
    color.value = '#409eff'
    setTimeout(() => {
        color.value = ''
    }, 1000) // 1秒后恢复原来的颜色
}
onMounted(() => {
    document.addEventListener('mousemove', pointerMove)
    document.addEventListener('click', changeColor)
    document.body.style.cursor = 'none';
})

onUnmounted(() => {
    document.removeEventListener('mousemove', pointerMove)
    document.body.style.cursor = 'auto';
})


</script>
    
<style lang="scss" scoped>

    .c-pointer {
        z-index: 99;
        font-size: 32px;
        width: fit-content;
        height: fit-content;
        position: fixed;
        margin-left: -16px;
        color: v-bind(color);
        transition: transform 0.1s  ease-in-out, color 0.8s ease-in-out;
    }
</style>
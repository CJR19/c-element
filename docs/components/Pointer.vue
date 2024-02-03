<template>
    <div class="c-pointer" ref="pointer">
        <c-icon class="rocket" :icon="icon" />
        <c-icon class="fire" :icon="['fas', 'fire']" beat-fade />
        <div class="wave">
            <div class="w1"></div>
            <div class="w2"></div>
            <div class="w3"></div>
            <div class="w4"></div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted, onUnmounted, watch, nextTick, watchEffect } from 'vue'
const props = defineProps({
    icon: {
        default: ['fab', 'space-awesome']
    }
})


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

const clickHandle = () => {
    if (!pointer.value) return
    const waveElement = document.querySelector('.wave');
    waveElement!.classList.add('wave-animate');
    waveElement!.addEventListener('animationend', animationEndHandle);
}

const animationEndHandle = () => {
    const waveElement = document.querySelector('.wave');
    waveElement!.classList.remove('wave-animate');
}
onMounted(() => {
    document.addEventListener('mousemove', pointerMove)
    document.addEventListener('click', clickHandle)
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
    position: fixed;
    margin-left: -16px;
    transition: transform 0.1s ease-in-out, color 0.8s ease-in-out;
    pointer-events: none;
    color: #fff;
}

.c-pointer .fire {
    position: absolute;
    font-size: 18px;
    bottom: -18px;
    left: 0;
    right: 0;
    transform: rotate(180deg);
    color: #ff7f00;
}

.wave * {
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s;
    background: rgba(255, 255, 255, 0.3);
}

.wave-animate * {
    animation: wave 0.8s linear;
}

@keyframes wave {
    0% {
        width: 50px;
        height: 50px;
        opacity: 0.3;
    }

    100% {
        width: 250px;
        height: 250px;
        opacity: 0;
    }
}

.w1 {
    animation-delay: 0.2s;
}

.w2 {
    animation-delay: 0.4s;
}

.w3 {
    animation-delay: 0.6s;
}

.w4 {
    animation-delay: 0.8s;
}</style>
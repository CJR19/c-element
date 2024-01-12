<template>
    <div class="c-typed">
        <div ref="typedRef"></div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted,onUnmounted} from 'vue'
import Typed from 'typed.js'
const typedRef = ref<HTMLElement>()

let typed:any = null

onMounted(() => {
    typed = new Typed(typedRef.value, {
        strings: [
            "Hello! I'm CJr.", 
            "I'm a Front-end developer.",
            'Welcome To My Blog!',        
        ],
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    })
})

onUnmounted(() => {
    if (typed) {
        typed.destroy()
        typed = null
    }
})

</script>
    
<style lang="scss" scoped>
.c-typed {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: absolute;
    color: #fff;
    font-size: 38px;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
}
</style>
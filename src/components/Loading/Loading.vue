<template>
    <Transition :name="transitionName" @afterLeave="destoryCompoent">
        <div v-show="visiable" class="c-loading" :class="{ 'is-fullscreen': fullscreen }">
            <div class="c-loading-spinner"></div>
            <p class="c-loading-message">
                {{ message }}
            </p>
        </div>
    </Transition>
</template>
    
<script setup lang='ts'>
import type { LoadingProps } from './types'
import { ref, onMounted } from 'vue';
defineOptions({ name: 'CLoading' })
const props = withDefaults(defineProps<LoadingProps>(), {
    message: '加载中...',
    lock: true,
    transitionName: 'fade'
})

const visiable = ref(false)

function destoryCompoent() {
    props.close()
}

onMounted(() => {
    visiable.value = true
})


</script>

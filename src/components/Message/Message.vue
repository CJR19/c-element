<template>
    <div 
        class="c-message"
        v-show="visible"
        :class="{
            [`c-message--${type}`]: type,
            'is-close': showClose
        }"
    >
        <div class="c-message__content">
            <slot>
                <RenderVnod :vNode="message" v-if="message" />
            </slot>
        </div>
        <div class="c-message__close" v-if="showClose">
            <Icon @click="visible=false" icon="xmark" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted,watch } from 'vue'
import type { MessageProps } from './types'
import RenderVnod from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';
import { getLastInstance } from './method';
defineOptions({ name: 'CMessage' })
const props = withDefaults(defineProps<MessageProps>(),{
    type: 'info',
    duration: 3000
})
const visible = ref(false)
const prevInstance = getLastInstance()
console.log(prevInstance)
function startTimer() {
    if (props.duration === 0) return
    setTimeout(() => {
        visible.value = false
    }, props.duration)
}

watch(visible,(newVal)=>{
    if (!newVal) {
        props.onDestory()
    }
})

onMounted(()=>{

    visible.value = true
    startTimer()
})
</script>

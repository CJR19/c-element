<template>
    <Transition 
        :name="transitionName"
        @enter="updateHeight"
        @afterLeave="destoryCompoent"
    >
        <div 
            class="c-message"
            v-show="visible"
            :class="{
                [`c-message--${type}`]: type,
                'is-close': showClose
            }"
            ref="messageRef"
            :style="OffsetStyle"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
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
    </Transition>

</template>

<script setup lang="ts">
import { ref,onMounted,watch,nextTick,computed } from 'vue'
import type { MessageProps } from './types'
import RenderVnod from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';
import { getLastBottomOffset } from './method';
import useEventListener from "@/hooks/useEventListener"
defineOptions({ name: 'CMessage' })
const props = withDefaults(defineProps<MessageProps>(),{
    type: 'info',
    duration: 3000,
    offset: 20,
    transitionName: 'fade-up'
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
// 计算偏移高度
const height = ref(0)
const lastOffset = computed(()=> getLastBottomOffset(props.id))
const topOffset = computed(()=> props.offset + lastOffset.value)
const bottomOffset = computed(()=> height.value + topOffset.value)
const OffsetStyle = computed(()=> ({
    top: topOffset.value + 'px',
    zIndex: props.zIndex
}))
let timer: any
function startTimer() {
    if (props.duration === 0) return
    timer = setTimeout(() => {
        visible.value = false
    }, props.duration)
}
function clearTimer() {
    clearTimeout(timer)
}
function keydown(e:Event) {
    const event = e as KeyboardEvent
    if (event.code === 'Escape') {
        visible.value = false
    }
}
useEventListener(document,'keydown',keydown)

function destoryCompoent() {
    props.onDestory()
}

function updateHeight() {
    height.value = messageRef.value?.getBoundingClientRect().height || 0
}

onMounted(()=>{
    visible.value = true
    startTimer()
})
defineExpose({
    bottomOffset,
    visible
})
</script>

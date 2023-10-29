<template>
    <div class="c-tooltip" v-on="outEvents" ref="container">
        <div 
            class="c-tooltip__trigger" 
            ref="triggerNode" 
            v-on="events"
        >
            <slot />
        </div>
        <Transition :name="transition">
            <div v-if="isOpen"  v-on="popperEvents" class="c-tooltip__popper" ref="popperNode">
                <slot name="content">
                    {{ content }}
                </slot>
                <div id="arrow" data-popper-arrow></div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipEmits,TooltipInstance } from './types';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core';
import { ref, watch,reactive,onUnmounted, computed } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
defineOptions({
    name: 'CTooltip'
})

const props = withDefaults(defineProps<TooltipProps>(),{
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    openDelay: 0,
    closeDelay: 80
})

const emits = defineEmits<TooltipEmits>()

const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const container = ref<HTMLElement>()
let poperInstance: null | Instance = null
let events: Record<string,Function> = reactive({})
let outEvents: Record<string,Function> = reactive({})
let popperEvents: Record<string,Function> = reactive({})


const popperOptions = computed(()=>{
    return {
        placement: props.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0,9]
                }
            }
        ],
        ...props.popperOptions,

    }
})

const open = ()=>{
    isOpen.value = true
    emits('visible-change',true)
}
const close = ()=>{
    if (isOpen.value) {
        isOpen.value = false
        emits('visible-change',false)  
    }
}


function debounce(fn:Function,delay:number) {
    let timer: ReturnType<typeof setTimeout> | null = null
    function debounced(this:any,...arg:any[]) {      
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this,arg)
        }, delay)
    }
    debounced.cancel = () =>{
        timer && clearTimeout(timer)
        timer = null
    }
    return debounced
}

const openDebounce = debounce(open,props.openDelay)
const closeDebounce = debounce(close,props.closeDelay)

const openFinal = ()=>{
    closeDebounce.cancel()
    openDebounce()
}
const closeFinal = ()=> {
    openDebounce.cancel()
    closeDebounce()
}

const togglePopper = () => {
    if (isOpen.value) {
        closeFinal()
    } else {
        openFinal()
    }
}

useClickOutside(container,()=>{
    if (props.trigger === 'click' && isOpen.value && !props.manual) {
        closeFinal()
    }
    if (isOpen.value) {
        emits('click-ouside',true)
    }
})

const attachEvents = () => {
    if (props.trigger === 'hover') {
        events['mouseenter'] = openFinal
        outEvents['mouseleave'] = closeFinal
      
            popperEvents['mouseenter'] = openFinal
            popperEvents['mouseleave'] = closeFinal
        
    } else if (props.trigger === 'click') {
        events['click'] = togglePopper
    }
}

if (!props.manual) {
    attachEvents()
}

watch(()=>props.manual,(isManual)=>{
    if (isManual) {
        events = {}
        outEvents = {}
    } else {
        attachEvents()
    }
})

watch(()=>props.trigger,(newVal,oldVal)=>{
    if (newVal !== oldVal) {
        events = {}
        outEvents = {}
        attachEvents()
    }
})

watch(isOpen,(newValue)=>{
    if (newValue) {
        if (triggerNode.value && popperNode.value) {
            poperInstance = createPopper(triggerNode.value,popperNode.value,popperOptions.value)
        } else {
            poperInstance?.destroy()
        }
    }
},{ flush: 'post' })

onUnmounted(()=>{
    poperInstance?.destroy()
})

defineExpose<TooltipInstance>({
    'show': openFinal,
    'hide': closeFinal
})
</script>

<style scoped>

</style>
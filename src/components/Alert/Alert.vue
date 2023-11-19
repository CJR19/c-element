<template>
    <Transition name="fade">
        <div 
            v-if="showAlert"
            class="c-alert" 
            :class="{
                [`c-alert--${type}--${effect}`]: type,
                'is-center': center,
            }"
        >
            <Icon 
                v-if="showIcon"
                :icon="iconType[type]" 
                :type="type" 
                class="c-alert__icon" 
                :class="{
                    'is-big':description || $slots.description,
                    [`theme--${effect}`]: effect
                }"
            />
            <div class="c-alert__content">
                <span class="c-alert__title">
                    {{ title }}
                    <slot />
                </span>
                <p class="c-alert__description" v-if="description || $slots.description">
                    {{ description }}
                    <slot name="description"/>
                </p>
            </div>     
            <Icon 
                v-if="closable"
                :icon="['fas', 'xmark']" 
                class="c-alert__close-btn" 
                :class="{
                    [`theme--${effect}`]: effect
                }"
                @click="close"
            />        
        </div>
    </Transition>

</template>

<script setup lang="ts">
import Icon from '@/components/Icon/Icon.vue'
import type { AlertProps } from './types'
import { ref } from 'vue'
defineOptions({
    name: 'CAlert'
})

withDefaults(defineProps<AlertProps>(),{
    type: 'info',
    closable: true,
    effect: 'light'
})

const iconType = {
    success: ['fas', 'circle-check'],
    warning: ['fas', 'circle-exclamation'],
    info: ['fas', 'circle-info'],
    danger: ['fas', 'circle-xmark']
}

const showAlert = ref<boolean>(true)

const close = ()=> {
    showAlert.value = false
}
</script>

<style scoped>

</style>
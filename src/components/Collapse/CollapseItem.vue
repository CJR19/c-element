<template>
    <div
        class="c-collapse-item"
        :class="{
            'is-disabled': disabled
        }"
    >
        <div 
            :id="`item-header-${name}`" 
            class="c-collapse-item__header" 
            :class="{
                'is-disabled': disabled,
                'is-active': isActive
            }"
            @click="handleClick"
        >
            <slot name="title">{{ name }}</slot>
        </div>
        <Transition v-on="transitionEvent">
            <div class="c-collapse-item__warpper"  v-show="isActive">
                <div 
                    class="c-collapse-item__content " 
                    :id="`item-content-${name}`" 
                >
                    <slot/>
                </div>
            </div>

        </Transition>
    </div>
</template>

<script setup lang="ts">
import { inject,computed } from 'vue'
import { CollapseContextKey } from './types'
import type { CollapseItemProps } from './types'

defineOptions({
    name:'CCollapseItem'
})
const props = withDefaults(defineProps<CollapseItemProps>(),{})
const collapseContext = inject(CollapseContextKey)
const isActive = computed(()=>{
    return collapseContext?.activeNames.value.includes(props.name)
})
const handleClick = () => {
    if (props.disabled) { return }
    collapseContext?.handleItemClick(props.name)
}

const transitionEvent : Record<string,(el:HTMLElement)=>void> = {
    beforeEnter(el) {
        el.classList.add("collapse-transition")
        el.style.height = "0"       
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px"
    },

    afterEnter(el) {
      el.classList.remove("collapse-transition")
      el.style.height = ""
    },

    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px"

    },

    leave(el) {
      el.classList.add("collapse-transition")
      el.style.height = '0'
    },

    afterLeave(el) {
      el.classList.remove("collapse-transition")
      el.style.height = ""

    }
}


</script>

<style scoped>

</style>
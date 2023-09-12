<template>
    <div class="c-dropdown">
        <Tooltip
            :trigger="trigger"
            :placement="placement"
            :popper-options="popperOptions"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :manual="manual"
            @visible-change="visibleChange"
            ref="tooltipRef"
        >    
            <slot />
            <template #content>
                <ul class="c-dropdown__menu">
                    <template v-for="item in menuOptions" :key="item.key">
                        <li
                            v-if="item.divided"
                            role="spearator"
                            class="divided-placeholder"
                        ></li>
                        <li 
                            class="c-dropdown__item"
                            @click="itemClick(item)"
                            :class="{
                                'is-disabled': item.disabled,
                                'is-divided' : item.divided
                            }"
                            :id="`dropdown-item-${item.key}`"
                        >
                           <RenderVnode :vNode="item.label" />
                        </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownProps,DropdownEmits,DropDownInstance, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVnode from '../Common/RenderVnode'
import type { TooltipInstance } from '../Tooltip/types'
defineOptions({
    name: 'CDropdown'
})
const props = withDefaults(defineProps<DropdownProps>(), { 
    hideAfterClick: true ,
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    openDelay: 0,
    closeDelay: 0
})
const emit = defineEmits<DropdownEmits>()

const tooltipRef = ref<TooltipInstance | null>(null)

const visibleChange = (e:boolean)=> {
    emit('visible-change',e)
}

const itemClick = (e:MenuOption) => {
    if(e.disabled) {
        return
    }
    emit('select',e)
    if (props.hideAfterClick) {
        tooltipRef.value?.hide()
    }
}

defineExpose<DropDownInstance>({
    show: ()=>tooltipRef.value?.show(),
    hide: ()=>tooltipRef.value?.hide()
})

</script>

<style scoped>

</style>
import type { Placement, Options } from '@popperjs/core'
import type { App } from 'vue';
declare module './Tooltip.vue' {
    interface Tooltip {
        install: (app: App) => void;
    }
}
export interface TooltipProps {
    content?: string,
    trigger?:'hover' | 'click',
    placement: Placement,
    manual?: boolean,
    popperOptions?: Partial<Options>,
    transition?: string,
    openDelay?: number,
    closeDelay?: number
}

export interface TooltipEmits {
    (e: 'visible-change', value: boolean) : void,
    (e: 'click-ouside',value: boolean) : void
}

export interface TooltipInstance {
    show: () => void,
    hide: () => void
}
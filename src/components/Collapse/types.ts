import type { Ref,InjectionKey,App } from "vue"
declare module './Collapse.vue' {
    interface Collapse {
      install: (app: App) => void;
    }
}
declare module './CollapseItem.vue' {
    interface CollapseItem {
      install: (app: App) => void;
    }
}
export type NameType = string | number

export interface CollapseProps {
    modelValue: NameType[],
    /**
     * @type {boolean} 开启手风琴效果
     */
    accordion?: boolean
}

export interface CollapseItemProps {
    name: NameType,
    title?: string,
    disabled?: boolean
}

export interface CollaseContext {
    activeNames: Ref<NameType[]>,
    handleItemClick: (name: NameType) => void
}

export interface CollapseEmits {
    (e: 'update:modelValue',value: NameType[]) : void,
    (e: 'change',value: NameType[]) : void,
}

export const CollapseContextKey: InjectionKey<CollaseContext> = Symbol('collapseContextKey')
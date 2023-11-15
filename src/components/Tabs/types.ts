import type { InjectionKey,Ref } from 'vue' 
import type { App } from 'vue';
declare module './Tab.vue' {
    interface Tab {
        install: (app: App) => void;
    }
}
declare module './Tabs.vue' {
    interface Tabs {
        install: (app: App) => void;
    }
}
export type NameType = string | number

export interface TabsProps {
    modelValue: NameType
}

export interface TabsEmits {
    (e: 'update:modelValue',value: NameType) : void
}

export interface TabsContext {
    activeName: Ref<NameType>,
    toggleActiveName: (name: NameType) => void
}

export const TabsContextKey: InjectionKey<TabsContext> = Symbol('tabsContextKey')

export interface TabProps {
    name?: NameType,
    icon?: string,
    label?: NameType,
}
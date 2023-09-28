import type { InjectionKey,Ref } from 'vue' 

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
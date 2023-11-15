import type { InjectionKey,Ref } from 'vue' 

export type NameType = string | number

export interface TabPanelsProps {
    modelValue: NameType
}

export interface TabPanelsEmits {
    (e: 'update:modelValue',value: NameType) : void
}

export interface TabPanelsContext {
    activeName: Ref<NameType>
}

export const TabPanelsContextKey: InjectionKey<TabPanelsContext> = Symbol('TabPanelsContextKey')

export interface TabPanelProps {
    name: NameType,
}
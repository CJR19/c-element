export type SwitchValueType = boolean | string | number;
import type { App } from 'vue';
declare module './Switch.vue' {
    interface Switch {
        install: (app: App) => void;
    }
}
export interface SwitchProps {
  modelValue: SwitchValueType;
  disabled?: boolean;
  activeText?: string;
  inactiveText?: string;
  activeValue?: SwitchValueType;
  inactiveValue?: SwitchValueType;
  name?: string;
  id?:string;
  size?: 'small' | 'large';
}

export interface SwitchEmits {
  (e: 'update:modelValue', value: SwitchValueType): void;
  (e: 'change', value: SwitchValueType): void;
}
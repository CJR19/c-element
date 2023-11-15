import type { VNode } from 'vue'
import type { App } from 'vue';
declare module './Select.vue' {
    interface Select {
        install: (app: App) => void;
    }
}
export type RenderLabelFunc = (option: SelectOption)=> VNode;
export type CunstomFilterFunc = (val: string) => SelectOption[];
export type CunstomFilterRemoteFunc = (val: string) => Promise<SelectOption[]>;

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue: string;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  renderLabel?: RenderLabelFunc;
  filterable?: boolean;
  filterMethod?: CunstomFilterFunc;
  remote?: boolean;
  remoteMethod?: CunstomFilterRemoteFunc;
}

export interface SelectState {
  inputValue: string;
  selectedOption: SelectOption | null;
  mouseHover: boolean;
  loading: boolean;
  highlightIndex: number;
}


export interface SelectEmits {
  (e:'change', value: string) : void;
  (e:'update:modelValue', value: string) : void;
  (e: 'visible-change', value:boolean): void;
  (e: 'clear'): void;
}

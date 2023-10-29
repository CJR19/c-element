export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
}

export interface SelectState {
  inputValue: string;
  selectedOption: SelectOption | null;
}

export interface SelectEmits {
  (e:'change', value: string) : void;
  (e:'update:modelValue', value: string) : void;
  (e: 'visible-change', value:boolean): void;
}
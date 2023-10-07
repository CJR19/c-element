


export interface InputProps {
    type?: string;
    modelValue: string;
    size?: 'small' | 'medium' | 'large';
    clearable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autocomplete?:string;
    autofocus?:boolean;
    form?:string;
    defaultValue?: string;
    placeholder?: string;
    showPassword?: boolean;
}

export interface InputEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
    (e: 'input', value: string): void;
    (e: 'focus', value: FocusEvent): void;
    (e: 'blur', value: FocusEvent): void;
    (e: 'clear'): void;
}

export interface InputInstance {
    ref: HTMLInputElement | HTMLTextAreaElement
}
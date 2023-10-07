


export interface InputProps {
    type: string;
    modelValue: string;
    size?: 'small' | 'medium' | 'large';
    clearable?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    defaultValue?: string;
    placeholder?: string;
    showPassword?: boolean;
}

export interface InputEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
    (e: 'input', value: string): void;
    (e: 'clear'): void;
    (e: 'focus'): void;
    (e: 'blur'): void;
}

export interface InputInstance {
    ref: HTMLInputElement | HTMLTextAreaElement
}
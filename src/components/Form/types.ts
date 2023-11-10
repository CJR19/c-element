import type { InjectionKey } from 'vue';
import type { RuleItem as BaseRuleItem, ValidateError, ValidateFieldsError } from 'async-validator'
export interface FormItemProps {
    label: string;
    prop: string;
}
export interface RuleItem extends BaseRuleItem {
    trigger?: string;
}
export type FormRules = Record<string, RuleItem[]>
export interface FormProps {
    model: Record<string, any>;
    rules: FormRules;
}

export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void;
    removeField: (field: FormItemContext) => void;
}

export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}

export interface ValidateStatusProp {
    state: 'init' | 'success' | 'error';
    errorMessage: string;
    loading: boolean;
}

export interface FormItemContext {
    validate: (trigger?:string) => Promise<any>;
    prop: string;
    resetField: () => void;
    clearValidate: () => void;
}

export interface FormInstance {
    validate: () => Promise<any>;
    resetFields: (props?: string[]) => void;
    clearValidate: (props?: string[]) => void;
}

export interface FormItemInstance {
    validate: () => Promise<any>;
    resetField: () => void;
    clearValidate: () => void;
    validateStatus: ValidateStatusProp;
}

export const FormKey: InjectionKey<FormContext> = Symbol('FormKey');
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContextKey');
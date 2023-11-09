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
    
}

export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}

export interface FormItemContext {
    validate: (trigger?:string) => any
}

export const FormKey: InjectionKey<FormContext> = Symbol('FormKey');
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContextKey');
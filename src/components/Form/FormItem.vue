<template>
    <div 
        class="c-form-item"
        :class="{
            'is-error': validateStatus.state === 'error',
            'is-success': validateStatus.state === 'success',
            'is-loading': validateStatus.loading
        }"
    >
        <label class="c-form-item__label">
            <slot name="label" :label="label">
                {{ label }}
            </slot>
        </label>
        <div class="c-form-item__content">
            <slot :validate="validate"/>
            <div class="c-form-item__error-msg" v-if="validateStatus.state === 'error'">
                {{ validateStatus.errorMessage }}
            </div>
        </div>
        {{ innerValue }}-{{ itemRules }}
    </div>
</template>

<script setup lang="ts">
import type { FormItemProps,FormValidateFailure,FormItemContext} from './types'
import { inject, computed, reactive,provide,onMounted,onUnmounted } from 'vue'
import { FormKey,FormItemContextKey } from './types';
import Schema from 'async-validator'
defineOptions({ name: 'CFormItem' })
const props = defineProps<FormItemProps>()

const formContext = inject(FormKey)
const validateStatus = reactive({
    state: 'init',
    errorMessage: '',
    loading: false,
})
let initialValue:string | null = null
const innerValue = computed(() => {
    const model = formContext?.model
    const prop = props.prop
    if (model && prop && prop in model) {
        return model[prop]
    } else {
        return null
    }
})

const itemRules = computed(()=>{
    const rules = formContext?.rules
    const prop = props.prop
    if (rules && prop && prop in rules) {
        return rules[prop]
    } else {
        return []
    }
})

const getTriggeredRules = (trigger?: string) => {
    const rules = itemRules.value
    if (rules) {
        return rules.filter((rule) => {
            if (!rule.trigger || !trigger) return true
            return rule.trigger && rule.trigger === trigger
        })
    } else {
        return []
    }
}

const validate = async (trigger?:string) => {
    const modelName = props.prop
    const triggeredRules = getTriggeredRules(trigger)
    if (triggeredRules.length === 0) return true
    if (modelName) {
       const validator = new Schema({
            [modelName]: triggeredRules
       })
       validateStatus.loading = true
       return validator.validate({[modelName]: innerValue.value})
       .then(()=>{
            validateStatus.state = 'success'
       }).catch((e: FormValidateFailure)=>{
            const { errors } = e
            validateStatus.state = 'error'
            validateStatus.errorMessage = (errors && errors[0] && errors[0].message) || '未知错误'
            return Promise.reject(validateStatus)
       }).finally(()=>{
            validateStatus.loading = false
       })
    }
}

const clearValidate = () => {
    validateStatus.state = 'init'
    validateStatus.errorMessage = ''
    validateStatus.loading = false
}

const resetField = () => {
    clearValidate()
    const model = formContext?.model
    if (model && props.prop && props.prop in model) {
        model[props.prop] = initialValue
    }
}

const context: FormItemContext = {
    validate,
    prop: props.prop || '',
    resetField,
    clearValidate
}
provide(FormItemContextKey,context)

onMounted(()=>{
    if (props.prop) {
        formContext?.addField(context)
        initialValue = innerValue.value
    }
})
onUnmounted(()=>{
    formContext?.removeField(context)
})
</script>
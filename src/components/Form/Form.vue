<template>
    <form class="c-form">
        <slot></slot>
        <button @click.prevent="validate">validate All</button>
    </form>
</template>

<script setup lang="ts">
import type { FormProps,FormItemContext, FormContext,FormValidateFailure,FormInstance } from './types'
import type { ValidateFieldsError } from 'async-validator';
import { FormKey } from './types'
import { provide } from 'vue';
defineOptions({ name: 'CForm' })
const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
    fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
    if (field.prop) {
        fields.splice(fields.indexOf(field), 1)
    }
}

const resetFields = (keys:string[] = []) => {
    const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
    filterArr.forEach((field) => {
        field.resetField()
    })
}

const clearValidate = (keys:string[] = []) => {
    const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
    filterArr.forEach((field) => {
        field.clearValidate()
    })
}

const validate = async () => {
    let validationErrors: ValidateFieldsError = {}
    for (const field of fields) {
        try {
            await field.validate('')
        } catch (e) {
            const error = e as FormValidateFailure
            validationErrors = {
                ...validationErrors,
                ...error.fields
            }
        
        }
    }
    if (Object.keys(validationErrors).length === 0) return Promise.resolve(true)
    return Promise.reject(validationErrors)
}
provide(FormKey,{
    ...props,
    addField,
    removeField
})

defineExpose<FormInstance>({
    validate,
    resetFields,
    clearValidate
})
</script>
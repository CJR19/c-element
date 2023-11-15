<template>
    <c-form :model="model" :rules="rules" ref="formRef">
        <c-form-item label="Username" prop="username">
            <c-input v-model="model.username" placeholder="Username" />
        </c-form-item>
        <c-form-item label="Password" prop="password">
            <template #label="{ label }">
                <c-button>{{ label }}</c-button>
            </template>
            <c-input v-model="model.password" placeholder="Password" />
        </c-form-item>
        <c-form-item label="confirmPass" prop="confirmPass">
            <c-input v-model="model.confirmPass" placeholder="confirmPass" />
        </c-form-item>
        <div>
            <c-button type="primary" @click.prevent="submit">Submit</c-button>
            <c-button @click.prevent="reset">Reset</c-button>
            <c-button @click.prevent="clear">Clear</c-button>
        </div>    
    </c-form>
</template>
    
<script setup lang='ts'>
import { reactive,ref } from 'vue'
import { FormRules } from '@/components/Form/types'

const formRef = ref()
const model = reactive({
    username: '',
    password: '',
    confirmPass: '',
    test: ''
})
const rules:FormRules = {
    username: [
        { required: true, message: 'Please input username',type: 'string', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input password',type: 'string', trigger: 'blur' },
        { min: 6, max: 12, message: 'Length should be 6 to 12', type: 'string', trigger: 'blur'}
    ],
    confirmPass: [
        { required: true, message: 'Please input confirmPass',type: 'string', trigger: 'blur' },
        { validator: (rule, value, callback) => {
            if (value !== model.password) {
                callback(new Error('confirmPass should be equal to password'))
            } else {
                callback()
            }
        }, trigger: 'blur' }
    ],
    test: [
        { required: true, message: 'Please input test',type: 'string', trigger: 'blur' }
    ]
}

const submit = async () => {
    try {
        await formRef.value.validate()
        console.log('success')
    } catch (e) {
        console.log('error', e)
    }
}
const reset = () => {
    formRef.value.resetFields()
}
const clear = () => {
    formRef.value.clearValidate()
}
</script>

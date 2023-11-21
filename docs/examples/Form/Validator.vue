<script setup lang="ts">
import { reactive, ref } from 'vue'
const model = reactive({
    email: '',
    password: '',
    confirmPwd: ''
})
const rules = {
    email: [{ type: 'email', required: true, trigger: 'blur' }],
    password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }],
    confirmPwd: [
        { type: 'string', required: true, trigger: 'blur' },
        {
            validator: (rule, value) => value === model.password, trigger: 'blur',
            message: '两个密码必须一致'
        }
    ],
}
const formRef = ref()
const submit = async () => {
    try {
        await formRef.value.validate()
        console.log('passed!')
    } catch (e) {
        console.log('the promise', e)
    }
}
const reset = () => {
    formRef.value.resetFields()
}
</script>

<template>
    <c-form :model="model" :rules="rules" ref="formRef">
        <c-form-item prop="email" label="the email">
            <c-input v-model="model.email" />
        </c-form-item>
        <c-form-item prop="password" label="the password">
            <c-input v-model="model.password" type="password" />
        </c-form-item>
        <c-form-item prop="confirmPwd" label="confirm password">
            <c-input v-model="model.confirmPwd" type="password" />
        </c-form-item>
        <c-form-item>
            <c-button @click.prevent="submit" type="primary">Submit</c-button>
            <c-button @click.prevent="reset">Reset</c-button>
        </c-form-item>
    </c-form>
</template>
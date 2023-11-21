<script setup lang="ts">
import { reactive, ref } from 'vue'

const model = reactive({
    email: '',
    password: '',
    agreement: false,
    zone: ''
})

const options = [
    { label: 'zone 1', value: 'one' },
    { label: 'zone 2', value: 'two' },
    { label: 'zone 3', value: 'three' }
]

const formRef = ref()
const submit = async () => {
    alert('submitted!')
}
const reset = () => {
    formRef.value.resetFields()
}
</script>

<template>
    <Form :model="model" ref="formRef">
        <c-form-item prop="email" label="the email">
            <c-input v-model="model.email" />
        </c-form-item>
        <c-form-item prop="password" label="the password">
            <c-input v-model="model.password" type="password" />
        </c-form-item>
        <c-form-item prop="agreement" label="agreement">
            <c-switch v-model="model.agreement" />
        </c-form-item>
        <c-form-item prop="zone" label="zone">
            <c-select v-model="model.zone" :options="options" />
        </c-form-item>
        <c-form-item>
            <c-button @click.prevent="submit" type="primary">Submit</c-button>
            <c-button @click.prevent="reset">Reset</c-button>
        </c-form-item>
    </Form>
</template>

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
        <c-form-item label="test" prop="test">
            <template #default="{ validate }">
                <input type="text" v-model="model.test" @blur="()=>validate()"/>
            </template>
        </c-form-item>
        <div>
            <c-button type="primary" @click.prevent="submit">Submit</c-button>
            <c-button @click.prevent="reset">Reset</c-button>
            <c-button @click.prevent="clear">Clear</c-button>
        </div>    
        <p>
            form:value
            <pre>{{ model }}</pre>
        </p>
    </c-form>
</template>
    
<script setup lang='ts'>
import CForm from '@/components/Form/Form.vue'
import CFormItem from '@/components/Form/FormItem.vue'
import CInput from '@/components/Input/Input.vue'
import CButton from '@/components/Button/Button.vue'
import { reactive,ref } from 'vue'
import { FormRules } from '@/components/Form/types'

const formRef = ref()
const model = reactive({
    username: '',
    password: '',
    test: ''
})
const rules:FormRules = {
    username: [
        { required: true, message: 'Please input username',type: 'string', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input password',type: 'string', trigger: 'blur' },
        { min: 6, max: 12, message: 'Length should be 6 to 12', type: 'string', trigger: 'input'}
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

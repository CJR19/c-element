<template>
  <div 
    class="c-input"
    :class="{
        [`c-input--${type}`]:type,
        [`c-input--${size}`]:size,
        'is-disabled': disabled,
        'is-prepend': $slots.prepend,
        'is-append': $slots.append,
        'is-prefix': $slots.prefix,
        'is-suffix': $slots.suffix,
        'is-focus': isFoucus
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
        <!-- prepend slot -->
        <div v-if="$slots.prepend" class="c-input__prepend">
            <slot name="prepend" />
        </div>
        <div class="c-input__wrapper">
            <!-- prefix slot-->
            <span v-if="$slots.prefix" class="c-input__prefix">
                <slot name="prefix" />
            </span>
            <input 
                ref="inputRef"
                class="c-input__inner"
                v-bind="attrs"
                :type="showPassword ? (passwordVisible?'text':'password') : type"
                :disabled="disabled"
                :readonly="readonly"
                :autocomplete="autocomplete"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :form="form"
                v-model="innerValue"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
            >
            <!-- suffix slot -->
            <span @click="keepFocus" v-if="$slots.suffix || showClear || showPasswordArea" class="c-input__suffix">
                <slot name="suffix" />
                <Icon
                    icon="circle-xmark"
                    v-if="showClear"
                    class="c-input__clear"    
                    @mousedown.prevent="clear"
                />
                <Icon
                    icon="eye"
                    v-if="showPasswordArea && passwordVisible"
                    class="c-input__password"
                    @click="togglePasswordVisible"
                />
                <Icon
                    icon="eye-slash"
                    v-if="showPasswordArea && !passwordVisible"
                    class="c-input__password"
                    @click="togglePasswordVisible"
                />
            </span>
        </div>
        <!-- append slot -->
        <div v-if="$slots.append" class="c-input__append">
            <slot name="append" />
        </div>
    </template>
    <!-- textarea -->
    <template v-else>
        <textarea
            ref="inputRef"
            class="c-textarea__wrapper"
            v-bind="attrs"
            :disabled="disabled"
            :readonly="readonly"
            :autocomplete="autocomplete"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :form="form"
            v-model="innerValue"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"          
        ></textarea>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { InputProps,InputEmits } from './types';
import { ref,watch, computed, useAttrs,nextTick} from 'vue'
import type { Ref } from 'vue'
import Icon from '../Icon/Icon.vue' 

defineOptions({ name: 'CInput', inheritAttrs: false })

const props = withDefaults(defineProps<InputProps>(),{
    type: 'text',
    autocomplete: 'off'
})
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()
const innerValue = ref(props.modelValue)
const isFoucus = ref(false)
const passwordVisible = ref(false)
const inputRef = ref() as Ref<HTMLInputElement | HTMLTextAreaElement>
const NOOP = () => {}
const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}


const showClear = computed(()=>
    props.clearable && 
    !props.disabled &&
    !props.readonly &&
    !!innerValue.value &&
    isFoucus.value
)

const showPasswordArea = computed(()=>
    props.showPassword &&
    !props.disabled &&
    !!innerValue.value
)

const togglePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value
}

const handleInput = ()=> {
    emits('update:modelValue',innerValue.value)
    emits('input',innerValue.value)
}

const handleChange = () => {
    emits('change',innerValue.value)
}

const handleFocus = (e:FocusEvent)=> {
    isFoucus.value = true
    emits('focus',e)
}
const handleBlur = (e:FocusEvent)=> {
    isFoucus.value = false
    emits('blur',e)
}
const clear = ()=> {
    innerValue.value = ''
    emits('update:modelValue','')
}

watch(
    () => props.modelValue,
    (newValue) => {
        innerValue.value = newValue
    }
)

defineExpose({
    ref: inputRef
})
</script>


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
                class="c-input__inner"
                :type="type"
                :disabled="disabled"
                v-model="innerValue"
                @input="handleInput"
            >
            <!-- suffix slot -->
            <span v-if="$slots.suffix" class="c-input__suffix">
                <slot name="suffix" />
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
            class="c-textarea__wrapper"
            :disabled="disabled"
            v-model="innerValue"
            @input="handleInput"
        ></textarea>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { InputProps,InputEmits } from './types';
import { ref,watch } from 'vue'

defineOptions({ name: 'CInput' })

const props = withDefaults(defineProps<InputProps>(),{
    type: 'text'
})
const emits = defineEmits<InputEmits>()
const innerValue = ref(props.modelValue)

const handleInput = ()=> {
    emits('update:modelValue',innerValue.value)
}

watch(
    () => props.modelValue,
    (newValue) => {
        innerValue.value = newValue
    }
)

</script>


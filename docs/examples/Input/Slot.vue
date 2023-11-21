<template>
    <c-input v-model="test" placeholder="prepend append">
        <template #prepend>Https://</template>
        <template #append>.com</template>
    </c-input>

    <c-input v-model="test" placeholder="prefix suffix">
        <template #prefix>
            <c-icon icon="fa-user" />
        </template>
        <template #suffix>
            <c-icon icon="fa-user" />
        </template>
    </c-input>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const test = ref('')
</script>

<template>
    <div class="md-demo-input">
        <c-input v-model="message" size="large" placeholder="large" />
        <c-input v-model="message" placeholder="normal" />
        <c-input v-model="message" size="small" placeholder="small" />
        <span>message:{{ message }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')
</script>

<style scoped>
.md-demo-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
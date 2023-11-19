<template>
    <c-collapse v-model="openedValue" accordion>
        <c-collapse-item name="a" title="Title A">
            <h1>headline title</h1>
            <div> this is content a aaa </div>
        </c-collapse-item>
        <c-collapse-item name="b" title="Title B">
            <div> this is bbbbb test </div>
        </c-collapse-item>
        <c-collapse-item name="c" title="Disabled Title">
            <div> this is cccc test </div>
        </c-collapse-item>
    </c-collapse>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const openedValue = ref(['a'])
</script>
<template>
    <c-dropdown placement="bottom" trigger="click" :menu-options="menuOptions">
        <c-button type="primary"> 点击触发 下拉菜单 </c-button>
    </c-dropdown>
</template>

<script setup lang="ts">
import { h } from 'vue'
const menuOptions = [
    { key: 1, label: '1111' },
    { key: 2, label: h('b', 'this is bold') },
    { key: 3, label: '333' },
    { key: 4, label: '444' },
]
</script>

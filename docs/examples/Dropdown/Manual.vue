<template>
    <div class="c-ma-sm">
        <c-dropdown placement="top" :menu-options="options" trigger="click" manual ref="tooltipRef">
            <c-button> 菜单容器 </c-button>
        </c-dropdown>
    </div>
    <c-button type="primary" @click="open"> 点击手动触发显示 </c-button>
    <c-button type="danger" @click="close"> 点击手动触发隐藏 </c-button>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
const options = [
    { key: 1, label: h('b', 'this is bold') },
    { key: 2, label: 'item2', disabled: true },
    { key: 3, label: 'item3', divided: true },
    { key: 4, label: 'item4' }
]
const tooltipRef = ref()
const open = () => {
    tooltipRef.value?.show()
}
const close = () => {
    tooltipRef.value?.hide()
}
</script>

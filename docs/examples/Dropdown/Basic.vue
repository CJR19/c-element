<template>
    <div class="basic block">
        <c-dropdown placement="bottom"  :menu-options="menuOptions">
            <c-button type="primary"> Hover 下拉菜单 </c-button>
        </c-dropdown>
    </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
const menuOptions = [
  { key:1,label:'1111' },
  { key:2,label:h('b','this is bold') },
  { key:3,label:'333' },
  { key:4,label:'444' },
]
</script>

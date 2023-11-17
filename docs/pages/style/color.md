---
title: Color Palette
desc: 调色板.
---

# 调色板
c-element开箱即可提供多种颜色选择。 您可以在CSS代码中将它们用作css自定义变量，如果有修改覆盖即可

## 品牌(Brand)颜色

<div class="md-color-brand">
    <div class="md-color-brand__item" style="background: var(--c-color-primary);">主色 primary</div>
    <div class="md-color-brand__item" style="background: var(--c-color-success);">成功 success</div>
    <div class="md-color-brand__item" style="background: var(--c-color-warning);">警告 warning</div>
    <div class="md-color-brand__item" style="background: var(--c-color-info);">信息 info</div>
    <div class="md-color-brand__item" style="background: var(--c-color-danger);">危险 danger</div>
    <div class="md-color-brand__item" style="background: var(--c-color-secondary);">次要 secondary</div>
</div>

<style lang="scss">
.md-color-brand {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    &__item {
        width: 200px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
    }
}

</style>

## 主题颜色列表


<div class="md-color-list">
    <div class="md-color-list__item" v-for="color in colors">
        <div v-for="shade in [ '', '-light-3', '-light-5', '-light-7', '-light-8', '-light-9', '-dark-2', '-dark-4' ]" :style="'background: var(--c-color-' + color + shade + ');'">--c-color-{{ color }}{{ shade }}</div>
    </div>
</div>

<script setup>
const colors =  [
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'secondary'
]    
</script>

<style lang="scss">
.md-color-list {
    display: flex;
    flex-wrap: wrap;
    gap:5px;
    &__item {
        width: 200px;  
        line-height: 40px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
    }
}

</style>

## 使用方式

```vue
// var函数
<div style="background: var(--c-color-primary);">主色 primary</div>
// 覆盖
<style>
    div {
        --c-color-primary: #1d1d1d;
    }
</style>

```
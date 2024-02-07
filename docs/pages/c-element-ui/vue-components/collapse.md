---
title: 'Collapse | C-Element'
description: Collapse 组件的文档
---

# Collapse 折叠面板
通过折叠面板收纳内容区域。

## 基础使用
可同时展开多个面板，面板之间不影响

:::demo description="Basic Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Collapse"
Collapse/Basic
:::

## 手风琴效果
每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。
:::demo description="Theme Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Collapse"
Collapse/Accordion
:::


## Collapse 属性


 Name      | Description   | Type    | Default |
---------- | ------------- | ------- | ------- |
 model-value / v-model      | 当前展开的面板    | `string` (accordion mode) / `array` (non-accordion mode) |  ---- | 
 accordion    | 手风琴模式       | `boolean` | false |

## CollapseItem 属性


 Name      | Description   | Type    | Default |
---------- | ------------- | ------- | ------- |
 name     | 唯一名称    | `string` |  ---- | 
 title    | 标题       | `string` | ---- |
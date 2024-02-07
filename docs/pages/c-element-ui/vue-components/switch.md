---
title: 'Switch | C-Element'
description: Switch 组件的文档
---

# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法
绑定 v-model 到一个 `Boolean` 类型的变量。 可以使用 `--vk-switch-on-color` 属性与 `--vk-switch-off-color` 属性来设置开关的背景色。
:::demo description="Basic Switch" github="https://github.com/CJR19/c-element/tree/main/src/components/Switch"
Switch/Basic
:::

## 禁用状态
设置 `disabled` 属性，接受一个 `boolean`，设置true即可禁用。
:::demo description="Disabled Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Switch"
Switch/Disabled
:::

## 支持自定义 value 类型
你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `boolean` | `string` | `number` 类型的值。
:::demo description="Active Value Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Switch"
Switch/ActiveValue
:::

## 文字描述
使用 active-text 属性与 inactive-text 属性来设置开关的文字描述。
:::demo description="Active Text Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Switch"
Switch/ActiveText
:::


## Switch  属性


| Name              | Description                       | Type      | Default |
|-------------------|-----------------------------------|-----------|---------|
model-value / v-model|	绑定值|	'string' \| 'boolean' \| 'number'	|false
disabled	|是否禁用|	boolean	|false
active-text	|switch 打开时的文字描述|	string	
inactive-text|	switch 的状态为 off 时的文字描述|	'large' | 'small'	
active-value|	switch 状态为 on 时的值	|'string' \| 'boolean' \| 'number'	|true
inactive-value|	switch 状态为 off 时的值|	'string' \| 'boolean' \| 'number'	|false
name|	switch 对应的 name 属性	|string	|
id|	input 的 id|	string	

## 事件


 Name    | Description    | Type       |
-------------------|-----------------------------------|-----------|
change	|switch 状态发生变化时的回调函数	| `(e: 'string' \| 'boolean' \| 'number' ) => void`|



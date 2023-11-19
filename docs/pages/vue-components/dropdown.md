---
title: 'Dropdown | C-Element'
description: Dropdown 组件的文档
---

# Dropdown 下拉菜单
将动作或菜单折叠到下拉菜单中。

## 基础使用
悬停在下拉菜单上以展开更多操作。

:::demo description="Basic Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Dropdown"
Dropdown/Basic
:::

## 触发方式
可以配置点击激活或者悬停激活。
将 `trigger` 属性设置为 `click` 即可， 默认为 `hover`
:::demo description="Trigger Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Dropdown"
Dropdown/Trigger
:::

## 手动打开关闭
将 `manual` 属性设置为 true 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。
:::demo description="Trigger Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Dropdown"
Dropdown/Manual
:::

## Dropdown 属性

 Name              | Description                       | Type      | Default |
-------------------|-----------------------------------|-----------|---------|
 menuOptions       | 菜单选项                          | MenuOption[] | `[]`      |
 placement         | 菜单位置                          | `enum` `'top'`  `'top-start'`  `'top-end'`  `'bottom'`  `'bottom-start'`  `'bottom-end'`  `'left'`  `'left-start'`  `'left-end'`  `'right'`  `'right-start'`  `'right-end'`| `bottom` |
 popper-options    | `popper.js` 参数                     | refer to [popper.js](https://popper.js.org/docs/v2/) doc  | `{}` |
 open-delay        | 出现的延迟时间，毫秒               | `number`  | `0`       |
 close-delay       | 消失的延迟时间，毫秒               | `number`  | `200`     |
 trigger           | 触发方式                          | `enum` `'hover'` \| `'click'` |` hover` |
 manual            | 是否开启手动触发模式               | `boolean` | `false`   |
 transition        | 过渡动画名称                      | `string`  | `''`      |
 hideAfterClick    | 点击以后是否自动隐藏菜单           | `boolean` | `true`    |

## MenuOption
 Name    | Description    | Type          | Default |
-------------------|-----------------------------------|-----------|---------|
 label   | 菜单展示标签    | `string` | `vNode` |
 key     | 菜单选项 Key   | `string` | `number` |
 disabled| 是否禁用       | `boolean`  | `false`   |
 divided | 是否显示分隔符 | `boolean`  | `false`   |

## Events

 Name    | Description    | Type          |
-------------------|-----------------------------------|-----------|
visible-change |	当 tooltip 展示/隐藏时被触发|	boolean
select	|当选择到某一个选项的时候被触发|	MenuOption

## Exposes
 Name    | Description    | Type          |
-------------------|-----------------------------------|-----------|
show	|expose show function|	`Function(event?: Event \| undefined) => void`
hide	|expose hide function|	`Function(event?: Event \| undefined) => void`
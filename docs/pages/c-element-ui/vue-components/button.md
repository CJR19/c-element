---
title: 'Button | C-Element'
description: Button 组件的文档
---

# Button 按钮
常用的操作按钮。

## 基础使用
使用 `type`、`plain`、`round`、`circle` 来定义按钮的样式



:::demo description="Basic Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Button"
Button/Basic
:::

## 禁用状态
使用 disabled 属性来定义按钮是否被禁用
:::demo description="Disabled Button Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Button"
Button/Disabled
:::

## 图标按钮
使用 icon 属性来为按钮添加图标。图标名称请看 fontawesome 官网 https://fontawesome.com/icons
:::demo description="Button Icon Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Button"
Button/Icon
:::

## 加载状态
通过设置 loading 属性为 true 来显示正在加载的状态。
:::demo description="Button Loading Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Button"
Button/Loading
:::


## 不同大小的按钮
通过设置 size 属性为 small | large 来调整图标的大小。
:::demo description="Button Size Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Button"
Button/Size
:::

## 属性

| Name              | Description                                                             | Type                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| size              | button size                                                             | `enum` - `'large'\| 'small'`                                                    | —       |
| type              | button type                                                             | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'`                | —       |
| plain             | determine whether it's a plain button                                   | `boolean`                                                                       | false   |
| round             | determine whether it's a round button                                   | `boolean`                                                                       | false   |
| circle            | determine whether it's a circle button                                  | `boolean`                                                                       | false   |
| loading           | determine whether it's loading                                          | `boolean`                                                                       | false   |
| disabled          | disable the button                                                      | `boolean`                                                                       | false   |
| icon              | icon component                                                          | `string`                                                                        | —       |
| autofocus         | same as native button's `autofocus`                                     | `boolean`                                                                       | false   |
| native-type       | same as native button's `type`                                          | `enum` - `'button'\| 'submit'\| 'reset'`                                        | button  |


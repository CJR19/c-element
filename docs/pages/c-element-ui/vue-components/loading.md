---
title: 'Loading | C-Element'
description: Loading 组件的文档
---

# Loading 加载动画
常用于请求时的加载过渡动画。

## 基础使用
在元素上绑定指令 v-loading ,值为 `boolean`。为 `true` 时在元素上显示加载，为 `false` 关闭

:::demo description="Basic Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Loading"
Loading/Basic
:::

## 函数调用
可以用 `createLoading` 调用显示全屏的loading, `createLoading` 返回 组件实例 ,调用其 close 方法即可关闭 ，配置项 `lock` 为 `true` 时可以禁止滚动，默认为 `true`
:::demo description="createLoading Example" github="https://github.com/CJR19/c-element/tree/main/src/components/Loading"
Loading/CreateLoading
:::



## CraeteLoading  配置项
使用 CraeteLoading 创建加载组件，它接受一个Object，以下是 Object 中的属性列表。

 Name              | Description                       | Type      | Default |
-------------------|-----------------------------------|-----------|---------|
 message	| 消息文字	| `string` 	|"加载中..."  |
| fullscreen| 全屏 | boolean | true |
| lock | 全屏锁定| boolean | true |

## CraeteLoading 方法
调用 CraeteLoading 会返回当前 Loading 的实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。
 Name    | Description    | Type          | 
-------------------|-----------------------------------|-----------|
 close   | 关闭当前的 Loading    | () => void |


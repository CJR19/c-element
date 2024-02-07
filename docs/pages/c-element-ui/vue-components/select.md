---
title: 'Select | C-Element'
description: Select 组件的文档
---

# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容

## 基础用法
适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。
:::demo description="Basic Select" github="https://github.com/CJR19/c-element/tree/main/src/components/Select"
Select/Basic
:::

## 自定义模板
你可以自定义如何来渲染每一个选项, 使用 `renderLabel` 属性，它接受一个回调函数，返回 `vNode` 类型。
适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。
:::demo description="Select RenderLabel" github="https://github.com/CJR19/c-element/tree/main/src/components/Select"
Select/RenderLabel
:::

## 可清空单选
您可以使用清除图标来清除选择。

设置 `clearable` 属性，则可将选择器清空。
:::demo description="Clearable Select" github="https://github.com/CJR19/c-element/tree/main/src/components/Select"
Select/Clearable
:::

## 筛选选项
可以利用筛选功能快速查找选项。

添加 `filterable` 属性即可启用搜索功能。 默认情况下，Select 会找出所有 label 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。
:::demo description="filterable Select" github="https://github.com/CJR19/c-element/tree/main/src/components/Select"
Select/Filterable
:::

## 远程搜索
输入关键字以从远程服务器中查找数据。

服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 `true`，同时传入一个`remote-method`。 remote-method 为一个返回 Promise 的Function，类型为 `(value: string) => Promise<SelectOption[]>` 。
:::demo description="Remote Select" github="https://github.com/CJR19/c-element/tree/main/src/components/Select"
Select/Remote
:::

## Select  属性


| Name              | Description                       | Type      | Default |
|-------------------|-----------------------------------|-----------|---------|
model-value / v-model |	绑定值	 |`string` \| `number`| |	
options |	下拉框选项	 |SelectOption[]|	[]
disabled |	是否禁用	 |boolean	|false
placeholder |	输入框占位文本 |	string|''
clearable |	是否显示清除按钮	 |boolean|	false
filterable |	自定义筛选方法	 |boolean|	false
filter-method |	自定义筛选方法	 |(value: string \| number) => SelectOption[]|	
remote |	其中的选项是否从服务器远程加载 |	boolean|	false
remote-method |	自定义远程筛选方法 |	(value: string \| number) => Promise<SelectOption[]>	|


## SelectOption 属性 
| Name              | Description                       | Type      | Default |
|-------------------|-----------------------------------|-----------|---------|
label|	选项显示的文字|	'string'	|
value|	选项的值|	string \| number	|
disabled|	是否禁用|	boolean|	false|
## 事件


 Name    | Description    | Type       |
-------------------|-----------------------------------|-----------|
change	| 当选择器的输入框失去焦点时触发	|`(e: SelectOption) => void`|
visible-change| 	当下拉框显示或者隐藏时候触发|	`(e: boolean) => void`|
clear	| 在点击由 clearable 属性生成的清空按钮时触发|	`()=>void`|



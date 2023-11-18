---
title: CSS间距类
desc: c-element提供的CSS类列表，用于简化响应式填充和边距的规范。

---

# CSS间距类
CElement提供了CSS类来帮助您为DOM元素或组件提供间距。 所有选项都以c-为前缀，然后细分为类型（T），方向（D）和大小（S）。 有关所有可能的排列，请参见下表。

## 语法
```js
c-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]
    T       D                   S

T - type 类型
  - values: p (padding), m (margin)

D - direction 方向
  - values:
      t (top), r (right), b (bottom), l (left),
      a (all), x (both left & right), y (both top & bottom)

S - size 大小
  - values:
      none,
      auto (ONLY for specific margins: c-ml-*, c-mr-*, c-mx-*),
      xs (extra small),
      sm (small),
      md (medium),
      lg (large),
      xl (extra large)
```

## Examples

```html
<!-- 所有方向小的padding -->
<div class="c-pa-sm">...</div>
<!-- 顶部中margin, 右边小margin -->
<div class="c-mt-md c-mr-sm">...</div>

```
## 排序表

| Prefix | Type | Direction | Size | Example |
|--------|------|-----------|------|---------
| `c-` | `p` (padding) | `t` (top) | `none` | `c-pt-none` |
| `c-` | `p` (padding) | `t` (top) | `xs` (extra small) | `c-pt-xs` |
| `c-` | `p` (padding) | `t` (top) | `sm` (small) | `c-pt-sm` |
| `c-` | `p` (padding) | `t` (top) | `md` (medium) | `c-pt-md` |
| `c-` | `p` (padding) | `t` (top) | `lg` (large) | `c-pt-lg` |
| `c-` | `p` (padding) | `t` (top) | `xl` (extra large) | `c-pt-xl` |
| `c-` | `p` (padding) | `r` (right) | `none` | `c-pr-none` |
| `c-` | `p` (padding) | `r` (right) | `xs` (extra small) | `c-pr-xs` |
| `c-` | `p` (padding) | `r` (right) | `sm` (small) | `c-pr-sm` |
| `c-` | `p` (padding) | `r` (right) | `md` (medium) | `c-pr-md` |
| `c-` | `p` (padding) | `r` (right) | `lg` (large) | `c-pr-lg` |
| `c-` | `p` (padding) | `r` (right) | `xl` (extra large) | `c-pr-xl` |
| `c-` | `p` (padding) | `b` (bottom) | `none` | `c-pb-none` |
| `c-` | `p` (padding) | `b` (bottom) | `xs` (extra small) | `c-pb-xs` |
| `c-` | `p` (padding) | `b` (bottom) | `sm` (small) | `c-pb-sm` |
| `c-` | `p` (padding) | `b` (bottom) | `md` (medium) | `c-pb-md` |
| `c-` | `p` (padding) | `b` (bottom) | `lg` (large) | `c-pb-lg` |
| `c-` | `p` (padding) | `b` (bottom) | `xl` (extra large) | `c-pb-xl` |
| `c-` | `p` (padding) | `l` (left) | `none` | `c-pl-none` |
| `c-` | `p` (padding) | `l` (left) | `xs` (extra small) | `c-pl-xs` |
| `c-` | `p` (padding) | `l` (left) | `sm` (small) | `c-pl-sm` |
| `c-` | `p` (padding) | `l` (left) | `md` (medium) | `c-pl-md` |
| `c-` | `p` (padding) | `l` (left) | `lg` (large) | `c-pl-lg` |
| `c-` | `p` (padding) | `l` (left) | `xl` (extra large) | `c-pl-xl` |
| `c-` | `p` (padding) | `a` (all) | `none` | `c-pa-none` |
| `c-` | `p` (padding) | `a` (all) | `xs` (extra small) | `c-pa-xs` |
| `c-` | `p` (padding) | `a` (all) | `sm` (small) | `c-pa-sm` |
| `c-` | `p` (padding) | `a` (all) | `md` (medium) | `c-pa-md` |
| `c-` | `p` (padding) | `a` (all) | `lg` (large) | `c-pa-lg` |
| `c-` | `p` (padding) | `a` (all) | `xl` (extra large) | `c-pa-xl` |
| `c-` | `p` (padding) | `x` (left & right) | `none` | `c-px-none` |
| `c-` | `p` (padding) | `x` (left & right) | `xs` (extra small) | `c-px-xs` |
| `c-` | `p` (padding) | `x` (left & right) | `sm` (small) | `c-px-sm` |
| `c-` | `p` (padding) | `x` (left & right) | `md` (medium) | `c-px-md` |
| `c-` | `p` (padding) | `x` (left & right) | `lg` (large) | `c-px-lg` |
| `c-` | `p` (padding) | `x` (left & right) | `xl` (extra large) | `c-px-xl` |
| `c-` | `p` (padding) | `y` (top & bottom) | `none` | `c-py-none` |
| `c-` | `p` (padding) | `y` (top & bottom) | `xs` (extra small) | `c-py-xs` |
| `c-` | `p` (padding) | `y` (top & bottom) | `sm` (small) | `c-py-sm` |
| `c-` | `p` (padding) | `y` (top & bottom) | `md` (medium) | `c-py-md` |
| `c-` | `p` (padding) | `y` (top & bottom) | `lg` (large) | `c-py-lg` |
| `c-` | `p` (padding) | `y` (top & bottom) | `xl` (extra large) | `c-py-xl` |
| `c-` | `m` (margin) | `t` (top) | `none` | `c-mt-none` |
| `c-` | `m` (margin) | `t` (top) | `xs` (extra small) | `c-mt-xs` |
| `c-` | `m` (margin) | `t` (top) | `sm` (small) | `c-mt-sm` |
| `c-` | `m` (margin) | `t` (top) | `md` (medium) | `c-mt-md` |
| `c-` | `m` (margin) | `t` (top) | `lg` (large) | `c-mt-lg` |
| `c-` | `m` (margin) | `t` (top) | `xl` (extra large) | `c-mt-xl` |
| `c-` | `m` (margin) | `t` (top) | `auto` | `c-mt-auto` |
| `c-` | `m` (margin) | `r` (right) | `none` | `c-mr-none` |
| `c-` | `m` (margin) | `r` (right) | `xs` (extra small) | `c-mr-xs` |
| `c-` | `m` (margin) | `r` (right) | `sm` (small) | `c-mr-sm` |
| `c-` | `m` (margin) | `r` (right) | `md` (medium) | `c-mr-md` |
| `c-` | `m` (margin) | `r` (right) | `lg` (large) | `c-mr-lg` |
| `c-` | `m` (margin) | `r` (right) | `xl` (extra large) | `c-mr-xl` |
| `c-` | `m` (margin) | `r` (right) | `auto` | `c-mr-auto` |
| `c-` | `m` (margin) | `b` (bottom) | `none` | `c-mb-none` |
| `c-` | `m` (margin) | `b` (bottom) | `xs` (extra small) | `c-mb-xs` |
| `c-` | `m` (margin) | `b` (bottom) | `sm` (small) | `c-mb-sm` |
| `c-` | `m` (margin) | `b` (bottom) | `md` (medium) | `c-mb-md` |
| `c-` | `m` (margin) | `b` (bottom) | `lg` (large) | `c-mb-lg` |
| `c-` | `m` (margin) | `b` (bottom) | `xl` (extra large) | `c-mb-xl` |
| `c-` | `m` (margin) | `b` (bottom) | `auto` | `c-mb-auto` |
| `c-` | `m` (margin) | `l` (left) | `none` | `c-ml-none` |
| `c-` | `m` (margin) | `l` (left) | `xs` (extra small) | `c-ml-xs` |
| `c-` | `m` (margin) | `l` (left) | `sm` (small) | `c-ml-sm` |
| `c-` | `m` (margin) | `l` (left) | `md` (medium) | `c-ml-md` |
| `c-` | `m` (margin) | `l` (left) | `lg` (large) | `c-ml-lg` |
| `c-` | `m` (margin) | `l` (left) | `xl` (extra large) | `c-ml-xl` |
| `c-` | `m` (margin) | `l` (left) | `auto` | `c-ml-auto` |
| `c-` | `m` (margin) | `a` (all) | `none` | `c-ma-none` |
| `c-` | `m` (margin) | `a` (all) | `xs` (extra small) | `c-ma-xs` |
| `c-` | `m` (margin) | `a` (all) | `sm` (small) | `c-ma-sm` |
| `c-` | `m` (margin) | `a` (all) | `md` (medium) | `c-ma-md` |
| `c-` | `m` (margin) | `a` (all) | `lg` (large) | `c-ma-lg` |
| `c-` | `m` (margin) | `a` (all) | `xl` (extra large) | `c-ma-xl` |
| `c-` | `m` (margin) | `x` (left & right) | `none` | `c-mx-none` |
| `c-` | `m` (margin) | `x` (left & right) | `xs` (extra small) | `c-mx-xs` |
| `c-` | `m` (margin) | `x` (left & right) | `sm` (small) | `c-mx-sm` |
| `c-` | `m` (margin) | `x` (left & right) | `md` (medium) | `c-mx-md` |
| `c-` | `m` (margin) | `x` (left & right) | `lg` (large) | `c-mx-lg` |
| `c-` | `m` (margin) | `x` (left & right) | `xl` (extra large) | `c-mx-xl` |
| `c-` | `m` (margin) | `x` (left & right) | `auto` | `c-mx-auto` |
| `c-` | `m` (margin) | `y` (top & bottom) | `none` | `c-my-none` |
| `c-` | `m` (margin) | `y` (top & bottom) | `xs` (extra small) | `c-my-xs` |
| `c-` | `m` (margin) | `y` (top & bottom) | `sm` (small) | `c-my-sm` |
| `c-` | `m` (margin) | `y` (top & bottom) | `md` (medium) | `c-my-md` |
| `c-` | `m` (margin) | `y` (top & bottom) | `lg` (large) | `c-my-lg` |
| `c-` | `m` (margin) | `y` (top & bottom) | `xl` (extra large) | `c-my-xl` |
| `c-` | `m` (margin) | `y` (top & bottom) | `auto` | `c-my-auto` |



## 其他相关
| Class Name | Description |
| --- | --- |
| `no-margin` | Removes any applied margins |
| `no-padding` | Removes any applied padding |

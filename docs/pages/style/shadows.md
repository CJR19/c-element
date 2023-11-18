---
title: 'Button | C-Element'
description: Button 组件的文档
---

# CSS阴影类
简单而有效的方法来添加阴影以创建深度/拔高效果。 阴影符合Material Design规范（24级深度）

## 用法
 类名 | 描述 |
 --- | --- |
 `no-shadow` | 移除任何阴影 |
 `inset-shadow` | 在顶部设置一个插入阴影 |
 `inset-shadow-down` | 在底部设置一个插入阴影 |
 `shadow-1` | 设置1的深度 |
 `shadow-2` | 设置2的深度 |
 `shadow-N` | 其中N是1到24的整数 |
 `shadow-transition` | 在阴影上应用默认的CSS转换效果 |


:::demo description="Standard shadows" github="https://github.com/CJR19/c-element/tree/main/src/styles/shadows.scss"
Style/ShadowsStandard
:::

上面的阴影指向元素的底部。 如果您希望它们指向元素的顶部，请在数字前加上`up`

 类名 | 描述 |
 --- | --- |
 `shadow-up-1` | 设置1的深度 |
 `shadow-up-2` | 设置2的深度 |
 `shadow-up-N` | 其中N是1到24的整数 |
:::demo description="Standard pointing up" github="https://github.com/CJR19/c-element/tree/main/src/styles/shadows.scss"
Style/ShadowsPointingUp
:::

:::demo description="Inset Standard" github="https://github.com/CJR19/c-element/tree/main/src/styles/shadows.scss"
Style/ShadowsInset
:::
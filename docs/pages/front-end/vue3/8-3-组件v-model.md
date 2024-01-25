# 组件 v-model

## 基本用法

v-model 可以在组件上使用以实现双向绑定。

从 **Vue 3.4** 开始，推荐的实现方式是使用 `defineModel()` 宏：

```vue
<!-- Child.vue -->
<script setup>
const model = defineModel()

function update() {
  model.value++
}
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
</template>
```
父组件可以用 v-model 绑定一个值：
```vue
<!-- Parent.vue -->
<Child v-model="count" />
```

`defineModel()` 返回的值是一个 `ref`。它可以像其他 `ref` 一样被访问以及修改，不过它能起到在父组件和当前变量之间的双向绑定的作用：

它的 `.value` 和父组件的 `v-model` 的值同步；
当它被子组件变更了，会触发父组件绑定的值一起更新。
这意味着你也可以用 `v-model` 把这个 `ref` 绑定到一个原生 `input` 元素上，在提供相同的 `v-model` 用法的同时轻松包装原生 `input` 元素：

```vue
<script setup>
const model = defineModel()
</script>

<template>
  <input v-model="model" />
</template>
```

## 底层机制

`defineModel` 是一个便利宏。 编译器将其展开为以下内容
- 一个名为 `modelValue` 的 prop，本地 ref 的值与其同步；
- 一个名为 `update:modelValue` 的事件，当本地 ref 的值发生变更时触发。

在 3.4 版本之前，你一般会按照如下的方式来实现上述相同的子组件：

```vue
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
```
因为 `defineModel` 声明了一个 prop，你可以通过给 `defineModel` 传递选项，来声明底层 prop 的选项：

```js
// 使 v-model 必填
const model = defineModel({ required: true })

// 提供一个默认值
const model = defineModel({ default: 0 })
```
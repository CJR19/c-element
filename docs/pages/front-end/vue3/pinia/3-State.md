# State

在大多数情况下，`state` 都是你的 `store` 的核心。人们通常会先定义能代表他们 APP 的 `state`。在 Pinia 中，`state` 被定义为一个**返回初始状态的函数**。这使得 Pinia 可以同时支持服务端和客户端。

## 访问 `state`
默认情况下，你可以通过 `store` 实例访问 `state`，直接对其进行读写。
```js
const store = useStore()

store.count++
```

## 重置 `state`

- 使用**选项式 API** 时，你可以通过调用 store 的 `$reset()` 方法将 state 重置为初始值。

```js
const store = useStore()

store.$reset()
```

- 在 **Setup Stores** 中，您需要创建自己的 `$reset()` 方法
```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  return { count, $reset }
})
```
## 变更 `state`
除了用 `store.count++` 直接改变 store，你还可以调用 `$patch` 方法。它允许你用一个 `state` 的补丁对象在同一时间更改多个属性：
```js
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
```
不过，用这种语法的话，有些变更真的很难实现或者很耗时：任何集合的修改（例如，向数组中添加、移除一个元素或是做 splice 操作）都需要你创建一个新的集合。因此，$`patch` 方法也接受一个函数来组合这种难以用补丁对象实现的变更
```js
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```
## 替换 `state`
你不能完全替换掉 store 的 state，因为那样会破坏其响应性。但是，你可以 patch 它。
```js
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```
## 订阅 state
你可以通过 store 的 `$subscribe()` 方法侦听 state 及其变化。比起普通的 `watch()`，使用 `$subscribe()` 的好处是 subscriptions 在 patch 后只触发一次
```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})
```

默认情况下，*state subscription* 会被绑定到添加它们的组件上 (如果 store 在组件的 setup() 里面)。这意味着，**当该组件被卸载时，它们将被自动删除**。如果你想在组件卸载后依旧保留它们，请将 `{ detached: true }` 作为第二个参数，以将 *state subscription* 从当前组件中分离
```vue
<script setup>
const someStore = useSomeStore()
// 此订阅器即便在组件卸载之后仍会被保留
someStore.$subscribe(callback, { detached: true })
</script>
```

::: tip

你可以在 pinia 实例上使用 watch() 函数侦听整个 state。

```js
watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```
:::
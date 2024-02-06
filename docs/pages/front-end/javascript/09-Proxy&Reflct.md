# Proxy & Reflect

## Reflect
**Reflect 设计目的**
Reflect对象与Proxy对象一样，都是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个
- 1.将 `Object` 对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到 `Reflect` 对象上。也就是说，从 `Reflect` 对象上可以拿到语言内部的方法。
```js
// Reflect 浏览器自带的对象，包含 13 个函数。
// console.log(Reflect);
let obj = {
  x: 100,
  y: 200,
};

// 普通调用方法
console.log(obj); // obj 的原型上面具有 get 和 set 方法
console.log(obj.x);
console.log(obj["x"]);

// Reflect 调用方法
console.log(Reflect.get(obj, "x"));
```

- 2.修改某些 `Object` 方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`
```js
// 老写法
try {
  Object.defineProperty(null, "name", {});
} catch (e) {
  console.log(e.message);
}

// 新写法
if (Reflect.defineProperty(null, "name", {})) {
  // success
} else {
  console.log("error.");
}

```

- 3.让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了**函数行为**。

```js
// 老写法
console.log("assign" in Object); // true

// 新写法
console.log(Reflect.has(Object, "assign")); // true
```

- 4.`Reflect` 对象的方法与 `Proxy` 对象的方法一一对应，只要是 `Proxy` 对象的方法，就能在 `Reflect` 对象上找到对应的方法。这就让 `Proxy` 对象可以方便地调用对应的 `Reflect` 方法，完成默认行为，作为修改行为的基础。也就是说，不管 `Proxy` 怎么修改默认行为，你总可以在 `Reflect` 上获取默认行为。

```js
const obj = {
  x: 100,
  y: 200,
};
const proxy = new Proxy(obj, {
  set: function (obj, name, value, receiver) {
    let success = Reflect.set(obj, name, value, receiver);
    if (success) {
      console.log(
        "在 " + obj + " 上的属性 " + name + " 被设置值为：" + value
      );
    }
    return success;
  },
});
proxy.x = 1000;

```
上面代码中，`Proxy`方法拦截`target`对象的属性赋值行为。它采用`Reflect.set`方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能（比如这里的打印信息）, 这个额外的功能又叫**代理陷阱**。

再举一个例子：
```js
let obj = { x: 100, y: 200 };
let loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log("get", target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log("delete " + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log("has " + name);
    return Reflect.has(target, name);
  },
});

loggedObj.x; // get {x: 100, y: 200} x
delete loggedObj.y; // delete y
"x" in loggedObj; // has x
```

## Reflect 对象的静态方法

Reflect对象一共有 13 个静态方法。
- `Reflect.get(target, name, receiver)`：
  `Reflect.get`方法查找并返回`target`对象的`name`属性，如果没有该属性，则返回`undefined`。

- `Reflect.set(target, name, value, receiver)`：
  `Reflect.set`方法设置`target`对象的`name`属性等于`value`。

- `Reflect.has(target, name)`：
  `Reflect.has`方法对应`name in obj`里面的`in`运算符。

- `Reflect.deleteProperty(target, name)`：
  `Reflect.deleteProperty`方法等同于`delete obj[name]`，用于删除对象的属性。

- `Reflect.construct(target, args)`：
  `Reflect.construct`方法等同于`new target(...args)`，这提供了一种不使用`new`，来调用构造函数的方法。

- `Reflect.getPrototypeOf(target)`：
  `Reflect.getPrototypeOf`方法用于读取对象的`__proto__`属性，对应`Object.getPrototypeOf(obj)`。

- `Reflect.setPrototypeOf(target, prototype)`：
  `Reflect.setPrototypeOf`方法用于设置目标对象的原型（`prototype`），对应`Object.setPrototypeOf(obj, newProto)`方法。它返回一个**布尔值**，表示是否设置成功。

- `Reflect.apply(target, thisArg, args)`：
  `Reflect.apply`方法等同于`Function.prototype.apply.call(func, thisArg, args)`，用于绑定`this`对象后执行给定函数。

- `Reflect.defineProperty(target, name, desc)`：
  `Reflect.defineProperty`方法基本等同于`Object.defineProperty`，用来为对象定义属性。未来，后者会被逐渐废除，请从现在开始就使用`Reflect.defineProperty`代替它。

- `Reflect.getOwnPropertyDescriptor(target, name)`：
  `Reflect.getOwnPropertyDescriptor`基本等同于`Object.getOwnPropertyDescriptor`，用于得到指定属性的描述对象，将来会替代掉后者。

- `Reflect.isExtensible(target)`：
  `Reflect.isExtensible`方法对应`Object.isExtensible`，返回一个布尔值，表示当前对象是否可扩展。

- `Reflect.preventExtensions(target)`：
  `Reflect.preventExtensions`对应`Object.preventExtensions`方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

- `Reflect.ownKeys(target)`：
  `Reflect.ownKeys`方法用于返回对象的所有属性，基本等同于`Object.getOwnPropertyNames`与`Object.getOwnPropertySymbols`之和。

## Proxy
Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等），等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 就像在目标对象之间的一个代理，任何对目标的操作都要经过代理。代理就可以对外界的操作进行过滤和改写。可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截.

Proxy 是构造函数，它有两个参数 `target` 和 `handler`

- `target` 是用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- `handler` 是一个对象，其属性是当执行一个操作时定义代理的行为函数

```js

let target = {
    count: 1
}

let handler = {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
}

let proxy = new Proxy(target,handler);
proxy.count = 1; // setting count!
++proxy.count; // getting count! setting count!
```

一个技巧是将 `Proxy` 对象，设置到object.proxy属性，从而可以在object对象上调用。
```js
let obj = {};
let handler = {
  get: (target, propKey, receiver) => {
    return Reflect.get(target, propKey, receiver);
  },
  set: (target, propKey, value, receiver) => {
    return Reflect.set(target, propKey, value, receiver);
  },
};
let object = { proxy: new Proxy(obj, handler) };
object.proxy.x = 100;
console.log(object.proxy.x);
```
Proxy 实例也可以作为其他对象的原型对象。
```js
var proxy = new Proxy(
  {},
  {
    get: function (target, propKey) {
      return 35;
    },
  }
);

let obj = Object.create(proxy);
console.log(obj.time); // 35
```
上面代码中，proxy对象是obj对象的原型，obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截。

## Proxy方法
下面是 Proxy 支持的拦截操作一览，一共 13 种。
- `get(target, propKey, receiver)`：
  拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
- `set(target, propKey, value, receiver)`：
  拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
- `has(target, propKey)`：
  拦截`propKey in proxy`的操作，返回一个布尔值。
- `deleteProperty(target, propKey)`：
  拦截`delete proxy[propKey]`的操作，返回一个布尔值。
- `ownKeys(target)`：
  拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
- `getOwnPropertyDescriptor(target, propKey)`：
  拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
- `defineProperty(target, propKey, propDesc)`：
  拦截`Object.defineProperty(proxy, propKey, propDesc)`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
- `preventExtensions(target)`：
  拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
- `getPrototypeOf(target)`：
  拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
- `isExtensible(target)`：
  拦截`Object.isExtensible(proxy)`，返回一个布尔值。
- `setPrototypeOf(target, proto)`：
  拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。
- `apply(target, object, args)`：
  如果目标对象是函数，拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
- `construct(target, args)`：
  拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

## 应用 Reflect 和 Proxy 实现观察者模式
观察者模式是一种设计模式，允许对象在其状态改变时通知多个“观察者”对象。使用`Proxy`和`Reflect`可以以非侵入式的方式实现观察者模式，下面是一个简单的实现示例：
```js
class Observable {
  constructor(target) {
    this.observers = [];
    this.target = target;
    return this.createProxy(target);
  }

  // 订阅
  subscribe(observer) {
    this.observers.push(observer);
  }

  // 取消订阅
  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 通知所有观察者
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer(data));
    }
  }

  // 使用Proxy创建代理
  createProxy(target) {
    const handler = {
      set: (obj, prop, value, receiver) => {
        const result = Reflect.set(obj, prop, value, receiver);
        this.notify({ prop, value }); // 当属性被设置时，通知所有观察者
        return result;
      }
    };
    return new Proxy(target, handler);
  }
}

// 使用示例
const obj = { name: 'CursorBot', age: 1 };
const observable = new Observable(obj);

// 观察者函数
const printChange = (data) => {
  console.log(`Property ${data.prop} changed to ${data.value}`);
};

// 订阅变化
observable.subscribe(printChange);

// 修改属性，观察者会被通知
observable.name = 'AI';
// 控制台输出: Property name changed to AI
```

在这个示例中，Observable 类接受一个目标对象 target，并返回一个Proxy代理。这个代理会拦截对目标对象属性的设置操作。当属性被设置时，Observable实例会通知所有订阅了变化的观察者。
subscribe方法允许观察者订阅变化。
unsubscribe方法允许观察者取消订阅。
notify方法负责在属性变化时通知所有观察者。


这种方式的好处是，你可以对任何对象进行观察，而无需修改其原有的代码结构。通过`Proxy`和`Reflect`，我们能够以一种非常灵活和动态的方式实现观察者模式。
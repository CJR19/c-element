
# Promise 
ECMAScript 6 新增的引用类型 **Promise**，Promise 是 JavaScript 中处理异步操作的一种方式，它代表了一个异步操作的最终完成或失败，以及其结果值。

Promise是一个*有状态的对象*，可能处于如下 3 种状态之一：

**待定（pending）**<br />
**兑现（fulfilled，有时候也称为“解决”，resolved）**<br />
**拒绝（rejected）**<br />

**待定（pending）**是Promise的最初始状态。在待定状态下，Promise可以落定（settled）为代表成功的**兑现fulfilled**状态，或者代表失败的**拒绝（rejected**状态。无论落定为哪种状态都是不可逆的

控制Promise状态的转换是通过调用它的两个函数参数实现的。这两个函数参数通常都命名为 **resolve()**和 **reject()**。调用**resolve()会把状态切换为兑现，调用 reject()会把状态切换为拒绝**
``` js
let p = new Promise((resolve, reject) => { 
 resolve();
 reject(); // 没有效果
}); 
setTimeout(console.log, 0, p); // Promise <resolved>
```
## Promise.resolve()
Promise并非一开始就必须处于待定状态，然后通过执行器函数才能转换为落定状态,通过调用`Promise.resolve()`静态方法，可以实例化一个解决的Promise,这个解决的Promise的值对应着传给 Promise.resolve()的第一个参数
```js
let p1 = new Promise((resolve, reject) => resolve()); 
let p2 = Promise.resolve(3);
setTimeout(console.log, 0, p2); // Promise <fulfilled>: 3 


```

## Promise.reject()
 Promise.resolve()类似，Promise.reject()会实例化一个拒绝的Promise并抛出一个异步错误 **（这个错误不能通过 try/catch 捕获，而只能通过拒绝处理程序捕获）** 这个拒绝的Promise的理由就是传给 Promise.reject()的第一个参数。这个参数也会传给后续的拒绝处理程序
 ```js
 let p = Promise.reject(3); 
setTimeout(console.log, 0, p); // Promise <rejected>: 3 
p.then(null, (e) => setTimeout(console.log, 0, e)); // 3 
```
## Promise.prototype.then()
Promise.prototype.then()是为Promise实例添加处理程序的主要方法。这个 then()方法接收最多两个参数：onResolved 处理程和 onRejected 处理程序。这两个参数都是可选的，如果提供的话，则会在Promise分别进入“兑现”和“拒绝”状态时执行
```js
function onResolved(id) { 
 setTimeout(console.log, 0, id, 'resolved'); 
} 
function onRejected(id) { 
 setTimeout(console.log, 0, id, 'rejected'); 
} 
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000)); 
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000)); 
p1.then(
    () => onResolved('p1'), 
    () => onRejected('p1')
); 
p2.then(
    () => onResolved('p2'), 
    () => onRejected('p2')
 );
 //（3 秒后）
// p1 resolved 
// p2 rejected 
```
Promise.prototype.then()方法返回一个新的Promise实例
```js
let p1 = new Promise(() => {}); 
let p2 = p1.then(); 
setTimeout(console.log, 0, p1); // Promise <pending> 
setTimeout(console.log, 0, p2); // Promise <pending> 
setTimeout(console.log, 0, p1 === p2); // false 
```

## Promise.prototype.catch()
Promise.prototype.catch()方法用于给Promise添加拒绝处理程序。这个方法只接收一个参数：onRejected 处理程序。事实上，这个方法就是一个**语法糖**，调用它就相当于调用 `Promise.prototype.then(null, onRejected)`
```js
let p = Promise.reject(); 
let onRejected = function(e) { 
 setTimeout(console.log, 0, 'rejected'); 
}; 
// 这两种添加拒绝处理程序的方式是一样的：
p.then(null, onRejected); // rejected 
p.catch(onRejected); // rejected 
```
Promise.prototype.catch()返回一个新的Promise实例：
```js
let p1 = new Promise(() => {}); 
let p2 = p1.catch(); 
setTimeout(console.log, 0, p1); // Promise <pending> 
setTimeout(console.log, 0, p2); // Promise <pending> 
setTimeout(console.log, 0, p1 === p2); // false 
```
## Promise.prototype.finally()
Promise.prototype.finally()方法用于给Promise添加 onFinally 处理程序，这个处理程序在Promise转换为解决或拒绝状态时都会执行。这个方法可以避免 onResolved 和 onRejected 处理程序中出现冗余代码。但 onFinally 处理程序没有办法知道Promise的状态是解决还是拒绝，所以这个方法主要用于添加清理代码
```js
let p1 = Promise.resolve(); 
let p2 = Promise.reject(); 
let onFinally = function() { 
 setTimeout(console.log, 0, 'Finally!') 
} 
p1.finally(onFinally); // Finally 
p2.finally(onFinally); // Finally 
```
## Promise.all()和 Promise.race()
Promise 类提供两个将多个Promise实例组合成一个Promise的静态方法：Promise.all()和 Promise.race()。而合成后Promise的行为取决于内部Promise的行为

## Promise.all()
Promise.all()静态方法创建的Promise会在一组Promise**全部解决之后再解决**。这个静态方法接收一个可迭代对象，返回一个新的Promise
``` js
let p1 = Promise.all([ 
 Promise.resolve(), 
 Promise.resolve() 
]); 
```
合成的Promise只会在每个包含的Promise都解决之后才解决
```js
let p = Promise.all([ 
 Promise.resolve(), 
 new Promise((resolve, reject) => setTimeout(resolve, 1000)) 
]); 
setTimeout(console.log, 0, p); // Promise <pending> 
p.then(() => setTimeout(console.log, 0, 'all() resolved!')); 
// all() resolved!（大约 1 秒后）
```
如果至少有一个包含的Promise待定，则合成的Promise也会待定。如果有一个包含的Promise拒绝，则合成的Promise也会拒绝
```js
// 永远待定
let p1 = Promise.all([new Promise(() => {})]); 
setTimeout(console.log, 0, p1); // Promise <pending> 
// 一次拒绝会导致最终期约拒绝
let p2 = Promise.all([ 
 Promise.resolve(), 
 Promise.reject(), 
 Promise.resolve() 
]); 
setTimeout(console.log, 0, p2); // Promise <rejected> 
// Uncaught (in promise) undefined 
```
如果所有Promise都成功解决，则合成Promise的解决值就是所有包含Promise解决值的**数组**，按照迭代器顺序
```js
let p = Promise.all([ 
 Promise.resolve(3), 
 Promise.resolve(), 
 Promise.resolve(4) 
]); 
p.then((values) => setTimeout(console.log, 0, values)); // [3, undefined, 4] 
```
如果有Promise拒绝，则**第一个拒绝**的Promise会将自己的理由作为合成Promise的拒绝理由。之后再拒绝的Promise不会影响最终Promise的拒绝理由
```js
// 虽然只有第一个期约的拒绝理由会进入 
// 拒绝处理程序，第二个期约的拒绝也
// 会被静默处理，不会有错误跑掉
let p = Promise.all([ 
 Promise.reject(3), 
 new Promise((resolve, reject) => setTimeout(reject, 1000)) 
]); 
p.catch((reason) => setTimeout(console.log, 0, reason)); // 3 
```
## Promise.race()
Promise.race()静态方法返回一个包装Promise，是一组集合中**最先解决或拒绝**的Promise的镜像。这个方法接收一个可迭代对象，返回一个新的promise
Promise.race()不会对解决或拒绝的Promise区别对待。无论是解决还是拒绝，只要是第一个落定的Promise，Promise.race()就会包装其解决值或拒绝理由并返回新的Promise
```js
// 解决先发生，超时后的拒绝被忽略
let p1 = Promise.race([ 
 Promise.resolve(3), 
 new Promise((resolve, reject) => setTimeout(reject, 1000)) 
]); 
setTimeout(console.log, 0, p1); // Promise <resolved>: 3 
// 拒绝先发生，超时后的解决被忽略
let p2 = Promise.race([ 
 Promise.reject(4), 
 new Promise((resolve, reject) => setTimeout(resolve, 1000)) 
]); 
setTimeout(console.log, 0, p2); // Promise <rejected>: 4 
// 迭代顺序决定了落定顺序
let p3 = Promise.race([ 
 Promise.resolve(5), 
 Promise.resolve(6), 
 Promise.resolve(7) 
]); 
setTimeout(console.log, 0, p3); // Promise <resolved>: 5 
```
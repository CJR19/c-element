

# this指向
在标准函数中，this 引用的是把函数当成方法调用的上下文对象，这时候通常称其为 this 值
在JavaScript中，this关键字的指向是**动态**的，**取决于函数的调用方式**。

 调用方式    | 示例          | 函数中的this指向 |
 ----------- | ------------- | ---------------- |
 通过`new`调用 | `new method()`  | 新对象           |
 直接调用  | `method()` | 全局对象(浏览器就是window ，node环境就是 global)|
 通过对象调用 | `obj.method()` | 前面的对象|
 call、apply、bind| `method.call(ctx)` | 第一个参数|

**需要注意的是，箭头函数没有自己的this，箭头函数内部的this是继承自外部作用域的。**

## 通过new调用
 当一个函数被作为构造函数使用，通过new关键字调用时，函数内部的this指向新创建的对象。例如：
```js
function Person(name) {
  this.name = name;
}
let john = new Person('John');
console.log(john.name); // 输出 "John"
```

## 直接调用
当一个函数直接被调用（即不通过对象或new关键字），this通常指向全局对象。在浏览器中，全局对象是window，在Node.js中，全局对象是global。例如
```js
window.color = 'red';
function showThis() {
    let color = 'blue'
  console.log(this.color);
}
showThis(); // red
```
## 通过对象调用
当一个函数作为对象的方法被调用时，this指向调用该方法的对象。例如：
```js
let obj = {
  name: 'John',
  showThis: function() {
    console.log(this);
  },
  showThis2: ()=> {
    console.log(this);
  },
};
obj.showThis(); // 输出 {name: "John", showThis: ƒ} 在这个例子中，this指向obj。
obj.showThis2(); // 在浏览器中输出 Window {...}，在Node.js中输出 global {...}
```
## call、apply、bind调用
这些方法都可以改变函数内部this的指向。call和apply会立即执行函数，而bind会返回一个新的函数，等待调用。这三个方法的第一个参数都是要绑定的this。例如：
```js
window.color = 'red'; 
let o = { 
 color: 'blue' 
}; 
function sayColor() { 
 console.log(this.color); 
} 
sayColor(); // red 
sayColor.call(this); // red 
sayColor.call(window); // red 
sayColor.call(o); // blue 

let objectSayColor = sayColor.bind(o); 
objectSayColor(); // blue 
```

# Buffer

## 什么是Buffer?
Buffer是NodeJS全局对象上的一个类, 是一个专门用于存储字节数据的类
NodeJS提供了操作计算机底层API, 而计算机底层只能识别0和1,
所以就提供了一个专门用于存储字节数据的类

## 如何创建一个Buffer对象

- 创建一个指定大小的Buffer
```js
Buffer.alloc(size[, fill[, encoding]])
```
- 根据数组/字符串创建一个Buffer对象
```js
Buffer.from(string[, encoding])
```

## Buffer实例方法

- 将二进制数据转换成字符串
返回: `<string>` 转换后的字符串数据。
`buf.toString()`;

- 往Buffer中写入数据
`string <string>` 要写入 buf 的字符串。
`offset <integer>` 开始写入 string 之前要跳过的字节数。默认值: 0。
`length <integer>` 要写入的字节数。默认值: buf.length - offset。
`encoding <string>` string 的字符编码。默认值: `utf8`。
返回: `<integer>` 已写入的字节数。
```js
buf.write(string[, offset[, length]][, encoding])
```
- 从指定位置截取新Buffer
`start <integer>` 新 Buffer 开始的位置。默认值: 0。
`end <integer>` 新 Buffer 结束的位置（不包含）
```js
buf.slice([start[, end]])
```

## Buffer静态方法

- 检查是否支持某种编码格式
```js
Buffer.isEncoding(encoding)
```
- 检查是否是Buffer类型对象
```js
Buffer.isBuffer(obj)
```

- 获取Buffer实际字节长度
```js
Buffer.byteLength(string[, encoding])
```
注意点: **一个汉字占用三个字节**

- 合并Buffer中的数据
```js
Buffer.concat(list[, totalLength])
```
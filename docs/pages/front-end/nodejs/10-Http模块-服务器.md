# Http模块
## 什么是HTTP模块
通过Nodejs提供的http模块，我们可以快速的构建一个web服务器,
也就是快速实现过去PHP服务器的功能(接收浏览器请求、响应浏览器请求等)

## 创建一个服务器实例对象
```js
let http = require('http')
let server = http.createServer();
```
## 注册请求监听
```js
server.on("request", function (req, res) {
    // end方法的作用: 结束本次请求并且返回数据
    // res.end("www.it666.com");
    // writeHead方法的作用: 告诉浏览器返回的数据是什么类型的, 返回的数据需要用什么字符集来解析
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("Hello world");
});
```
## 指定监听的端口
```js
// server.listen(3000);

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("Hello world");
}).listen(3000);
```
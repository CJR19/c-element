# 路径分发

## 什么是路径分发?
路径分发也称之为路由, 就是根据不同的请求路径返回不同的数据

## 如何根据不同的请求路径返回不同的数据?
通过请求监听方法中的 `request` 对象, 我们可以获取到当前请求的路径
通过判断请求路径的地址就可以实现不同的请求路径返回不同的数据

```js
let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
/*
request对象其实是http.IncomingMessage 类的实例
response对象其实是http.ServerResponse 类的实例
* */
server.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    // console.log(req.url);
    if(req.url.startsWith("/index")){
        // 注意点: 如果通过end方法来返回数据, 那么只会返回一次
        // res.end("首页1");
        // res.end("首页2");
        // 注意点: 如果通过write方法来返回数据, 那么可以返回多次
        //         write方法不具备结束本次请求的功能, 所以还需要手动的调用end方法来结束本次请求
        res.write("首页1");
        res.write("首页2");
        res.end();
    }else if(req.url.startsWith("/login")){
        res.end("登录");
    }else{
        res.end("没有数据");
    }
});
// 3.指定监听的端口
server.listen(3000);
```

## 响应完整页面
拿到用户请求路径之后, 只需要利用fs模块将对应的网页返回即可

```js
let http = require("http");
let path = require("path");
let fs = require("fs");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    /*
    if(req.url.startsWith("/index")){
        // let filePath = path.join(__dirname, "www", "index.html");
        // let filePath = path.join(__dirname, "www", req.url);
        // fs.readFile(filePath, "utf8", function (err, content) {
        //     if(err){
        //         res.end("Server Error");
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else if(req.url.startsWith("/login")){
        // let filePath = path.join(__dirname, "www", req.url);
        // fs.readFile(filePath, "utf8", function (err, content) {
        //     if(err){
        //         res.end("Server Error");
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else{
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("没有数据");
    }
    */
    readFile(req, res);
});
// 3.指定监听的端口
server.listen(3000);

function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    fs.readFile(filePath, "utf8", function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}
```

## 响应静态资源
在给浏览器返回数据的时候,
如果没有指定响应头的信息,
如果没有设置返回数据的类型,
那么浏览器不一定能正确的解析

所以无论返回什么类型的静态资源都需要添加对应的响应头信息

```js
// StaticServer.js
let fs = require("fs");
let mime = require("./mime.json");

function readFile(req, res, rootPath) {
    let filePath = path.join(rootPath, req.url);
    // console.log(filePath);
    /*
    注意点:
    1.加载其它的资源不能写utf8
    2.如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示
    * */
    let extName = path.extname(filePath);
    let type = mime[extName];
    if(type.startsWith("text")){
        type += "; charset=utf-8;";
    }
    res.writeHead(200, {
        "Content-Type": type
    });
    fs.readFile(filePath, function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}

exports.StaticServer = readFile;
```

```js
let http = require("http");
let path = require("path");

let ss = require("./StaticServer.js");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    let rootPath = "C:\\Users\\cjr\\Desktop\\abc";
    ss.StaticServer(req, res, rootPath);
});
// 3.指定监听的端口
server.listen(3000);
```

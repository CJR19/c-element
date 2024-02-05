# 处理POST和GET请求

## 如何拿到`Get`请求传递过来的参数
使用`URL`模块

`url.format(urlObject)`  将路径转换为对象
`url.parse(urlString[, parseQueryString[, slashesDenoteHost]])`  将对象转换为路径
```js
let url = require("url");
let http = require("http");

// let str = "http://root:123456@www.it666.com:80/index.html?name=lnj&age=68#banner";
// let obj = url.parse(str, true);
// console.log(obj);
// console.log(obj.query.name);
// console.log(obj.query.age);

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // console.log(req.url);
    let obj = url.parse(req.url, true);
    res.end(obj.query.name + "----" + obj.query.age);
});
// 3.指定监听的端口
server.listen(3000);
```

## 如何拿到POST请求传递过来的参数

使用 `querystring` 模块

- `querystring.parse(str[, sep[, eq[, options]]])`  将参数转换为对象
- `querystring.stringify(obj[, sep[, eq[, options]]])` 将对象转换为参数
```js
let http = require("http");
let queryString = require("querystring");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // 1.定义变量保存传递过来的参数
    let params = "";
    // 注意点: 在NODEJS中 ,POST请求的参数我们不能一次性拿到, 必须分批获取
    req.on("data", function (chunk) {
        // 每次只能拿到一部分数据
        params += chunk;
    });
    req.on("end", function () {
        // 这里才能拿到完整的数据
        // console.log(params);
        let obj = queryString.parse(params);
        // console.log(obj.userName);
        // console.log(obj.password);
        res.end(obj.userName + "----" + obj.password);
    });
});
// 3.指定监听的端口
server.listen(3000);
```

## 区分post和get请求
```js
let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // console.log(req.method);
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    if(req.method.toLowerCase() === "get"){
        res.end("利用GET请求的方式处理参数");
    }else if(req.method.toLowerCase() === "post"){
        res.end("利用POST请求的方式处理参数");
    }
});
// 3.指定监听的端口
server.listen(3000);
```

## 完整例子
```js

// 1.导入http模块
const http = require('http');
const queryString = require('querystring');

// 2.通过http模块创建服务对象
const server = http.createServer();
// 3.通过服务对象监听用户请求
server.on('request', (req, res)=>{
    console.log('接收到请求');
    // 1.获取请求类型
    let method = req.method.toLowerCase();
    // 2.获取请求路径
    let url = req.url;
    let path = url.split('?')[0];
    // 3.获取请求参数
    let params = '';
    if(method === 'get'){
        // 4.处理请求参数
        params = url.split('?')[1];
        params = queryString.parse(params);
        // 5.处理路由
        if(path === '/login'){
            console.log('处理登录请求', params);
        }else if(path === '/register'){
            console.log('处理注册请求', params);
        }
    }else if(method === 'post'){
        // 4.处理请求参数
        req.on('data', (chuck)=>{
            params += chuck;
        });
        req.on('end', ()=>{
            params = queryString.parse(params);
            // 5.处理路由
            if(path === '/login'){
                console.log('post处理登录请求', params);
            }else if(path === '/register'){
                console.log('post处理注册请求', params);
            }
        });
    }
});
// 4.指定监听的端口号
server.listen(3000);
```
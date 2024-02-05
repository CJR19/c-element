# Node.js包

Node组织了自身的核心模块，也使得第三方文件模块可以有序地编写和使用。但是在第三方模块中，模块与模块之间仍然是散列在各地的，相互之间不能直接引用。而在模块之外，包和NPM则是将模块联系起来的一种机制。JavaScript不似Java或者其他语言那样，具有模块和包结构。Node对模块规范的实现，一定程度上解决了变量依赖、依赖关系等代码组织性问题。包的出现，则是在模块的基础上进一步组织JavaScript代码。CommonJS的包规范的定义其实也十分简单，它由包结构和包描述文件两个部分组成，前者用于组织包中的各种文件，后者则用于描述包的相关信息，以供外部读取分析。

包结构

包实际上是一个存档文件，即一个目录直接打包为.zip或tar.gz格式的文件，安装后解压还原为目录。完全符合CommonJS规范的包目录应该包含如下这些文件。
　1、package.json：包描述文件
　2、bin：用于存放可执行二进制文件的目录
　3、lib：用于存放JavaScript代码的目录
　4、doc：用于存放文档的目录
　5、test：用于存放单元测试用例的代码

## 包描述文件package.json

package.json文件，定义了项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
　有了package.json文件，直接使用npm install或yarn install，就会在当前目录中安装所需要的模块。
　如果一个模块不在package.json文件之中，可以单独安装这个模块，并使用相应的参数，将其写入package.json文件之中。
```bash
 npm install koa --save
 npm install koa --save-dev
```
上面代码表示单独安装koa模块，`--save`参数表示将该模块写入`dependencies`属性，`--save-dev`表示将该模块写入`devDependencies`属性。


**【基本字段】**
```json
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
1、name——包名。规范定义它需要由小写的字母和数字组成，可以包含.、_和-，但不允许出现空格。包名必须是唯一的，以免对外公布时产生重名冲突的误解。除此之外，NPM还建议不要在包名中附带上node或js来重复标识它是JavaScript或Node模块 。
2、version——版本号。一个语义化的版本号，这在http://semver.org/上有详细定义，通常为major.minor.revision格式。该版本号十分重要，常常用于一些版本控制的场合。

**【必需字段】**

 1、`description` —— 包简介。方便别人了解该模块作用，搜索的时候也有用 `"description": "包介绍"`
 2、`keywords` —— 关键词数组，NPM中主要用来做分类搜索。一个好的关键词数组有利于用户快速找到该包。
 3、`maintainers` —— 包维护者列表。每个维护者由name、email和web地址这3个属性组成。
 4、`contributors` —— 贡献者列表。在开源社区中，为开源项目提供代码是经常出现的事情，如果名字能出现在知名项目的contributors列表中，是一件比较有荣誉感的事。列表中的第一个贡献应当是包的作者本人。它的格式与维护者列表相同。
 5、`bugs` —— 一个可以反馈bug的网页地址或邮件地址。
 6、`licenses` —— 当前包所使用的许可证列表，表示这个包可以在哪些许可证下使用。
```json
"licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/napcs/node-livereload/blob/master/LICENSE"
    }
  ]
```
7、`repositories` ——托管源代码的位置列表，表明可以通过哪些方式和地址访问包的源代码。
```json
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/napcs/node-livereload.git"
  }
```
8、`dependencies` ——使用当前包所需要依赖的包列表。这个属性十分重要，NPM会通过这个属性帮助自动加载依赖的包。详细介绍请见npm简单使用。

**【可选字段】**

1、`homepage` ——当前包的网站地址
```json
  "homepage": "https://github.com/napcs/node-livereload#readme"
```
2、os——操作系统支持列表。这些操作系统的取值包括aix、freebsd、linux、macos、solaris、vxworks、windows。如果设置了列表为空，则不对操作系统做任何假设。
3、cpu——CPU架构的支持列表，有效的架构名称有arm、mips、ppc、sparc、x86和x86_64。同os一样，如果列表为空，则不对CPU架构做任何假设。
4、engine——支持的JavaScript引擎列表，有效的引擎取值包括ejs、flusspferd、gpsee、jsc、spidermonkey、narwhal、node和v8。
```json
"engines": {
    "node": ">=0.4.0"
 }
```
5、builtin——标志当前包是否是内建在底层系统的标准组件。
6、directories——包目录说明

"directories": {}

7、implements——实现规范的列表。标志当前包实现了CommonJS的哪些规范。
8、`scripts` ——脚本说明对象。它主要被包管理器用来安装、编译、测试和卸载包。scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start时，所要执行的命令
```json
"scripts": {    
    "test": "mocha"  
}
```
**【其他字段】**

1、author——包作者
2、bin——指定各个内部命令对应的可执行文件的位置，这样就不需要配置环境变量啦。
```json
"bin": {    "livereload": "./bin/livereload.js"  }
```
3、main——加载的入口文件。模块引入方法require()在引入包时，会优先检查这个字段，并将其作为包中其余模块的入口。如果不存在这个字段，require()方法会查找包目录下的index.js、index.node、index.json文件作为默认入口
```json
"main": "./lib/livereload.js"
```
4、`devDependencies` ——项目开发所需要的模块。一些模块只在开发时需要依赖。配置这个属性，可以提示包的后续开发者安装依赖包。类比于dependencies字段
```json
"devDependencies": {
	"coffee-script": ">= 1.8.0",
	"mocha": ">= 1.0.3",
	"request": ">= 2.9.203",
	"should": ">= 0.6.3",
	"sinon": "^1.17.4"
}
```
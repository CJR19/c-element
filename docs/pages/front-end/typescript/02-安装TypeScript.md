# 安装 TypeScript

TypeScript 的命令行工具安装方法如下：
```bash
npm install -g typescript
```
以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了。

编译一个 TypeScript 文件很简单：
```bash
tsc hello.ts
```
我们约定使用 TypeScript 编写的文件以 `.ts` 为后缀，用 TypeScript 编写 React 时，以 `.tsx` 为后缀。
```bash
tsc --outFile ./dist/abc.js hello.ts
```
## 编辑器

TypeScript 最大的优势之一便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

主流的编辑器都支持 TypeScript，这里我推荐使用 **Visual Studio Code**。

它是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持。

另外它本身也是用 TypeScript 编写的。

下载安装：[https://code.visualstudio.com/]

获取其他编辑器或 IDE 对 TypeScript 的支持：

- Sublime Text
- WebStorm
- Vim
- Emacs
- Eclipse
- Atom

---
title: 搭建开发环境
date: 2023-06-16 09:46:52
permalink: /pages/f5236d/
categories:
  - views
  - desktop
tags:
  -
---

## 搭建开发环境

## 1. 命令行初始化项目

```sh
# 创建文件夹my-electron-app
mkdir my-electron-app
# 进入my-electron-app文件夹
cd my-electron-app
# pnpm初始化项目
pnpm init # 或者yarn init 或者 npm init
```

这几条命令会帮您配置 package.json 中的一些字段。 但是你有几条规则需要遵循：

1. 入口点应当是 `main.js`
2. author、license 和 description 可以是任何值，但在以后打包时是必需的。

## 2. 将 Electron 安装为您项目的开发依赖

将 Electron 安装为您项目的开发依赖 devDependencies，即仅在开发环境需要的额外依赖。

:::tip 为什么 ELECTRON 是 devDependencies?

您的应用需要运行 Electron API，因此这听上去可能有点反直觉。 实际上，打包后的应用本身会包含 Electron 的二进制文件，因此不需要将 Electron 作为生产环境依赖。
:::
执行如下命令:

```bash
pnpm add electron --save-dev
# 或者
npm install electron --save-dev
或者
yarn add electron --dev
```

## 3.项目创建完成

此时,你已经安装了 Electron.你的 package.json 的内容应该像这样:

```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "author name",
  "license": "MIT",
  "devDependencies": {
    "electron": "25.1.3"
  }
}
```

## 4.创建 git 忽略文件(.gitignore 文件)

创建.gitignore 文件是为了避免提交一些无用的文件到 GitHub 上面进行版本控制,比如:node_modules 文件夹,你可以参考这篇文章内容,进行相关忽略,[点击此处查看参考 git 忽略文件](https://github.com/github/gitignore/blob/main/Node.gitignore),如链接不能打开可以参考下面的内容

## 5.启动运行项目

由于主程序控制文件运行在 nodejs 环境里,负责控制应用的声明周期,显示原生界面,执行特殊操作且管理渲染进程,所以在启动之前,应该创建 main.js 文件,在文件中,写一个小脚本来,比如:

```js
console.log('Hello from Electron 👋')
```

测试进程入口程序配置正确,

因为 Electron 的主进程还是 NodeJS 运行时,因此可以使用 Electron 命令执行任意 NodeJS 代码,在执行之前,我们应该将`electron . `添加到 package.json 文件中的 scripts 字段中对应的 serve 命令,如下代码所示:

```json {7}
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "serve": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "author name",
  "license": "MIT",
  "devDependencies": {
    "electron": "25.1.3"
  }
}
```

## 6.执行命令启服务

```bash
pnpm serve # 或者 yarn serve 或者npm run serve
```

在你的终端应该会输出`Hello from Electron 👋`。 恭喜，您的 Electron 项目已经创建成功.

## 7.将网页装载到 Electron 中

1. 在 Electron 中，每个窗口展示一个页面，页面可以来自本地的 `HTML`，也可以来自远程 `URL`。 下面以装载本地的文件为例测试。 在项目的根目录中创建 test.html 文件，内容如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>你好Electron</title>
  </head>
  <body>
    <h1>测试Electron页面</h1>
    <p>主进程渲染</p>
  </body>
</html>
```

2. 将 main.js 中的内容替换成下列代码。 我们马上会逐行解释。

```js
// 导入模块 使用 CommonJS 语法导入了两个 Electron 模块
// 1. app，它控制应用程序的事件生命周期。
// 2. BrowserWindow，用于创建和管理应用程序窗口。
const { app, BrowserWindow } = require('electron')
// 将可复用的函数写入实例化窗口
const createWindow = () => {
  // new 一个800*600的窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('test.html')
}
// 在应用准备就绪时调用函数
app.whenReady().then(() => {
  createWindow()
})
```

:::tip 通常我们使用触发器的 .on 函数来监听 Node.js 事件。
:::

```js
app.on('ready', () => {
  // app.whenReady().then(() => {
  createWindow()
})
```

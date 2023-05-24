---
title: NVM(Node version manage)
date: 2023-05-24 13:38:57
permalink: /pages/f60831/
categories:
  - node
tags:
  - nvm
  - 安装
  - 管理
---

## NodeJS 版本管理工具

nvm 是一个 node 的版本管理工具，可以操作 node 版本的切换、安装、查看等等。

### 1. 下载 nvm

Linux 点击[官方 Linux 版本链接](https://github.com/nvm-sh/nvm/tags)选择相应版本下载

Windows 点击[官方 Windows 版本链接](https://github.com/coreybutler/nvm-windows/tags)选择相应版本下载

### 2. 安装 nvm

此处以 Windows 为主,双击执行程序,下一步,下一步直到最后完成即可。

:::tip 测试安装是否成功
:::

```bash
nvm -v
```

返回相应版本信息即代表安装成功,如 `1.1.10`,如不成功,重新点击程序安装

### 3. 配置 nvm 源

找到 nvm 安装位置,然后用记事本打开 setting 文件在它后面输入以下代码配置镜像源

```

node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

```

### 4. 使用,终端输入以下命令

```bash
nvm ls                      // 看安装的所有node.js的版本
nvm list available          // 查显示可以安装的所有node.js的版本
```

### 5. 安装指定的 node 版本

```bash
nvm install 版本号 // 例如：nvm install 14.19.0
```

### 6. 切换版本

```bash
nvm use 版本号           // 切换到使用指定的nodejs版本
```

### 7. 检测是否切换完成

```bash
node -v
```

### 8. nvm 的一些常用命令

```bash
# nvm命令行操作命令nvm
nvm list # 是查找本电脑上所有的node版本
nvm list installed # 查看已经安装的版本
nvm list available # 查看网络可以安装的版本
nvm install # 安装最新版本nvm
nvm use <version> ## 切换使用指定的版本node
nvm ls # 列出所有版本
nvm current显示当前版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on # 打开nodejs控制
nvm off # 关闭nodejs控制
nvm proxy # 查看设置与代理
nvm node_mirror [url] # 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/
nvm npm_mirror [url] # 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/.
nvm uninstall <version> # 卸载制定的版本
nvm use [version] [arch] # 切换制定的node版本和位数
nvm root [path] # 设置和查看root路径
nvm version # 查看当前的版本
```

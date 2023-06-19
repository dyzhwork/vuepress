---
title: Pnpm安装使用
date: 2023-06-01 17:52:05
permalink: /pages/396e51/
categories:
  - node
tags:
  - pnpm
---

## 一、安装方式（使用独立脚本）

### 1. 在 Windows 上

**使用 PowerShell**

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex # 推荐方式,全局安装
```

### 2. 在 Linux 系统上

```bash
# bash
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
# sh
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
# dash
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -
```

## 二、推荐的安装方式（通过 npm 安装 pnpm）

官方提供两个 pnpm/cli 命令： `pnpm` and `@pnpm/exe`

- pnpm 是 pnpm 的普通版本，需要 Node.js 才能运行。
- @pnpm/exe 与 Node.js 一起打包到可执行文件中，因此可以在未安装 Node.js 的系统上使用。

```bash
npm install -g pnpm # 推荐
```

或者

```bash
npm install -g @pnpm/exe
```

其他方式请查看官方文档

## 三、兼容性

以下列表列出了以往的 pnpm 版本和对应支持的 Node.js 版本。

| Node.js    | pnpm 5 | pnpm 6 | pnpm 7 | pnpm 8 |
| ---------- | ------ | ------ | ------ | ------ |
| Node.js 12 | √      | √      | ×      | ×      |
| Node.js 14 | √      | √      | √      | ×      |
| Node.js 16 | ？     | √      | √      | √      |
| Node.js 18 | ？     | √      | √      | √      |

## 四、命令

更多命令请查看 [CLI 命令的文档](https://www.pnpm.cn/cli/add)。以下 是一个与 npm 等价命令的对照表：

| npm 命令        | pnpm 等价命令    |
| --------------- | ---------------- |
| npm install     | pnpm install     |
| npm i **pkg**   | pnpm add **pkg** |
| npm run **cmd** | pnpm **cmd**     |

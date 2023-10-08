---
title: 模块化和包管理
date: 2023-10-08 10:27:48
permalink: /pages/db8349/
categories:
  - 工程化
tags:
  -
---

## 模块化和包管理

### 模块化

- 分解和聚合(函数实现的功能,文件)

  - 分解: 全局污染
  - 聚合: 依赖混乱

- 标准

  - commonJS(运行时)
  - AMD
  - CMD
  - UMD
  - ES6(编译时)

- 实现

  - 浏览器
  - nodejs cjs esm
  - 构建工具

- 分解契合的是主观规律
- 聚合契合的是客观规律

### 包管理

- 包:package,一系列的模块集合
- 函数
- 文件
- 框架(vue,react)
- 从哪里下载
- 如何下载(npm pnpm yarn cnpm bower)
  - registry
  - cli (command line interface)

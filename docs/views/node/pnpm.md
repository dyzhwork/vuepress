---
title: PNPM(Performant NPM)
date: 2023-05-24 13:49:28
permalink: /pages/d2fb88/
categories:
  - node
tags:
  - pnpm
---

## 一、Pnpm 官方网站

**1. [英文官方网站](https://pnpm.io/)**

**2. [中文参考文档](https://www.pnpm.cn/)**

## 二、Pnpm 简介

### 2.1 节省磁盘空间

<img v-lazy="'https://dyzhwork.github.io/images/Node/Pnpm/pnpm001.svg'" />
当使用 npm 时，如果你有 100 个项目，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要保存 100 份该相同依赖包的副本。然而，如果是使用 pnpm，依赖包将被 存放在一个统一的位置，因此：

- 如果你对同一依赖包需要使用不同的版本，则仅有 版本之间不同的文件会被存储起来。例如，如果某个依赖包包含 100 个文件，其发布了一个新 版本，并且新版本中只有一个文件有修改，则 pnpm update 只需要添加一个 新文件到存储中，而不会因为一个文件的修改而保存依赖包的 所有文件。
- 所有文件都保存在硬盘上的统一的位置。当安装软件包时， 其包含的所有文件都会硬链接自此位置，而不会占用 额外的硬盘空间。这让你可以在项目之间方便地共享相同版本的 依赖包。
  最终结果就是以项目和依赖包的比例来看，你节省了大量的硬盘空间， 并且安装速度也大大提高了！

### 2.2 提升安装速度

pnpm 分三个阶段执行安装：

- 依赖关系解析。所有必需的依赖项都将被标识并提取到存储中。
- 目录结构计算。 node_modules 目录结构是根据依赖关系计算的。
- 链接依赖关系。所有剩余的依赖项都被提取并从存储硬链接到 node_modules 。

<img v-lazy="'https://dyzhwork.github.io/images/Node/Pnpm/pnpm002.svg'" />

这种方法比传统的三阶段安装过程（解析、获取和写入所有依赖项到 node_modules ）要快得多。

<img v-lazy="'https://dyzhwork.github.io/images/Node/Pnpm/pnpm003.svg'" />

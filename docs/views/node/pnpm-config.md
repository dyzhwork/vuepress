---
title: Pnpm相关配置
date: 2023-06-01 17:50:45
permalink: /pages/4fb1e0/
categories:
  - node
tags:
  - pnpm
---

## 一、配置相关路径

### 1. 配置 pnpm 全局仓库路径

**比如你想设置的全局仓库路径为："D:\XXX\YYYY\Store"**

```bash
pnpm config set store-dir "D:\XXX\YYYY\Store"
```

### 2. 配置 pnpm 全局安装路径

**比如你想设置的全局安装路径为："D:\XXX\YYYY\Global"**

```bash
pnpm config set global-dir "D:\XXX\YYYY\Global"
```

### 3.配置 pnpm 全局 bin 路径

**比如你想设置的全局 bin 路径为："D:\XXX\ZZZZ\NodeJS"**
:::tip 注意
这个目录是你的 nodejs 的安装目录
:::

```bash
pnpm config set global-bin-dir "D:\nodejs"
```

### 4.配置 pnpm 创建 pnpm-state.json 文件的目录

**比如你想设置的 pnpm-state.json 文件的目录为："D:\XXX\ZZZZ"**

```bash
pnpm config set state-dir "D:\XXX\ZZZZ"
```

### 5.配置 pnpm 全局缓存路径

**比如你想设置的全局缓存路径为："D:\XXX\ZZZZ\Cache"**

```bash
pnpm config set cache-dir "D:\XXX\ZZZZ\Cache""
```

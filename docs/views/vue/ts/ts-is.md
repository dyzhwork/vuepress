---
title: TS是什么
date: 2023-05-31 08:19:29
permalink: /pages/d0cf9c/
categories:
  - ts
tags:
  -
---

## TS 是什么

1. 定位静态语言，如：C,Java 等。写代码阶段就检查错误，而非动态语言。
2. 有一定的学习成本，需要了解接口，泛型，类等。
3. ts 最终还是会被编译成 js

## 创建一个项目

```bash
npm create vite@latest  # 或者pnpm create vite@latest
```

## 定义变量

```ts
let username: string = 'abs'
username = 12 // 报错
```

## 泛型

```ts
let var1:Array<string>=['字符串数组]

```

## 接口

```ts
interface InterObj {
  name: string
  age: number
  location?: string
}
var myObj: InterObj
InterObj = {
  name: '这样说',
  age: 10,
  location: '这是一个地理位置字符串'
}
```

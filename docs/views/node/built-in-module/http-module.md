---
title: http模块
date: 2023-08-23 10:05:41
permalink: /pages/17370c/
categories:
  - 内置模块
tags:
  -
---

## 概述

```js
const http = require('http')
// 定义端口号
const PORT = 3000
// 创建服务器
http.createServer((req, res) => {
  // 设置响应体
  res.end('Hello World')
})
// 监听端口
http.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:3000`)
})
```

---
title: 拖拽元素
date: 2023-08-02 16:16:29
permalink: /pages/e901b0/
categories:
  - javascript
tags:
  -
---

## 为何要实现拖拉元素

<style>
  #p1,
  #p2 {
    border: 1px solid #000;
    display: inline-block;
    padding: 20px;
  }
  #p1 {
    color: red;
    margin-right: 50px;
  }
</style>

<div id="p1" draggable="true">这个框里面的内容可拖动</div>
<div id="p2">这个框里面的内容不可拖动</div>

## 拖动元素使用的 API

全局属性 draggable 是一种枚举 (en-US)属性，用于标识元素是否允许使用浏览器原生行为或 HTML 拖放操作 API 拖动。draggable 属性可以应用于严格属于 HTML 命名空间 (en-US)的元素，这意味着它不能应用于 SVG。

**draggable 可以有如下取值：**

- true：表示元素可以被拖动
- false：表示元素不可以被拖动

如果该属性没有设值，则默认值 为 auto，表示使用浏览器定义的默认行为。

因此,只需要在需要拖动的元素上添加`draggable="true"`即可实现:如上源码如下:

```html
<style>
  #p1,
  #p2 {
    border: 1px solid #000;
    display: inline-block;
    padding: 20px;
  }
  #p1 {
    color: red;
    margin-right: 50px;
  }
</style>

<div id="p1" draggable="true">这个框里面的内容可拖动</div>
<div id="p2">这个框里面的内容不可拖动</div>
```

## JS 相关操作接口

<script>
  
  const {history}=window
  console.log(history)
</script>

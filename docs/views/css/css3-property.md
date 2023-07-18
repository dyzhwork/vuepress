---
title: 初识css3-@property
date: 2023-07-18 10:46:54
permalink: /pages/967910/
categories:
  - css
tags:
  -
---

## 什么是`css3-@property`

css3 中@property 是一个新增的 CSS @规则(CSS at-rule)它允许开发者显式地定义 css 自定义属性，并允许进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承。

- @property 可以直接在样式表中注册自定义属性,无需运行任何 Js 代码;
- 同时也配备相应的 Js 语法注册自定义属性.@property 自定义属性，是 CSS 变量(CSS variables)声明变量的升级版本，比 CSS 变量更加规范和严谨.

## `@property语法`

### 1.标准语法

标准语法由下面三部分组成-`@property` 关键字-自定义属性名称(`custom-property-name`),需`--`前缀。例如，--color-`声明字段`（declaration-list）

**完整声明示例 以往，CSS 声明变量示例**

```css
/* 匹配根元素 */
:root {
  /* 变量名称前必须有双横线: -- */
  --color: green;
}
.box {
  background-color: var(--color);
}
```

### 2.声明字段

**@property 我们则可以定义更多的细节。**

@property 我们则可以定义更多的细节。

```css
/* 名称和css定义变量规则一致 */
@property --color {
  /* 属性类型，必填 */
syntax: '<color>';
/* 是否允许该属性被继承 */
inherits: false;
/* 初始值，非必填 */
initial-value: #f60:
}
:root{
--color: blue;
}
.box {
background-color: var(--color);
}
```

该 @property 规则定义了一个名为 color 的自定义属性，必须使用`颜色值`为该自定义变量赋值，该自定义变量的默认值为 #f60，该自定义变量不可以被其他元素所继承。

声明字段包括 `syntax`, `inherits` 和 `initial-value`

- syntax:类型 string.定义自定义属性的类型.例如， number, color, percentage 等
- inherits:类型 boolean.定义自定义属性是否允许继承
- initial-value：类型符合 syntax 定义的类型，定义初始值
- syntax 和 inherits 描述符是必需的，其中任何一项缺失， 整条规则都将失效并且会被忽略
- initial-value 描述符仅在 syntax 描述符为通用 syntax 定义时是可选的,否则也是必需的

**描述符的注意事项：**
syntax
syntax 在 @property 规则中是必须的，它描述了该属性所允许的语法结构。以下列举可用的语法结构有（仅部分）：

- < length > 允许使用任何有效的 长度。
- < number > 允许使用任何有效的 数值。
- < colon > 允许使用任何有效的 颜色。
- < image > 允许使用任何有效的 图片。
- < url > 允许使用任何有效的 链接。
- < integer > 允许使用任何有效的 整数值。
- < angle > 允许使用任何有效的 角度值。
- < time > 允许使用任何有效的 时间值。

## 举例说明

### 例 1 实现红色背景方块

定义一个自定义属性`col`,属性类型为颜色`color`,不可继承,初始值为红色,代码如下:

```css
@property --col {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}
.test {
  width: 100px;
  height: 100px;
  color: var(--col);
}
```

```html
<div class="test"></div>
```

<style>
  @property --col {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}
.test {
  width: 100px;
  height: 100px;
  background-color: var(--col);
}
</style>
<div class="test"></div>

### 例 2 实现 360deg 旋转的颜色方块

```css
@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.test1 {
  width: 300px;
  height: 300px;
  background: conic-gradient(from var(--angle), blue, red, green, yellow);
  animation: rotateAll 3s linear infinite;
}
@keyframes rotateAll {
  to {
    --angle: 360deg;
  }
}
```

<style>
  @property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.test1 {
  width: 300px;
  height: 300px;
  background: conic-gradient(from var(--angle), blue, red, green, yellow);
  animation: rotateAll 3s linear infinite;
}
@keyframes rotateAll {
  to {
    --angle: 360deg;
  }
}
</style>
<div class="test1"></div>

### 例 3 实现渐变色

```css
/* 不可行,背景渐变色不支持过渡效果 */
/* :root{
    --colA:red;
    --colB:blue;
  } */
/* 使用自定义属性 */
@property --colA {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}
@property --colB {
  syntax: '<color>';
  inherits: false;
  initial-value: blue;
}
.test2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(to right, var(--colA), var(--colB));
  /* 不可行 */
  /* transition: 2s background; */
  transition: 2s --colA, 2s --colB;
}
.test2:hover {
  --colA: yellow;
  --colB: pink;
}
```

```html
<div class="test2"></div>
```

<style>
/* 不可行,背景渐变色不支持过渡效果 */
/* :root{
    --colA:red;
    --colB:blue;
  } */
/* 使用自定义属性 */
@property --colA {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}
@property --colB {
  syntax: '<color>';
  inherits: false;
  initial-value: blue;
}
.test2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(to right, var(--colA), var(--colB));
  /* 不可行 */
  /* transition: 2s background; */
  transition: 2s --colA, 2s --colB;
}
.test2:hover {
  --colA: yellow;
  --colB: pink;
}
</style>
<div class="test2"></div>

### 例 4 使用百分比实现进度条

```css
@property --progress {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 5%;
}
.test3 {
  width: 550px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 15px;
  background: linear-gradient(to right, #f10, #f99 var(--progress), transparent var(--progress));
  transition: 2s --progress;
}
.test3:hover {
  --progress: 100%;
}
```

```html
<div class="test3"></div>
```

<style>
  @property --progress {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 1%;
}
.test3 {
  width: 550px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: linear-gradient(to right, #f10, #f99 var(--progress), transparent var(--progress));
  transition: 2s --progress;
}
.test3:hover {
  --progress: 100%;
}
</style>
<div class="test3"></div>

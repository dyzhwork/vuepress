---
title: Scss基础语法
date: 2023-05-29 09:43:09
permalink: /pages/728078/
categories:
  - css
  - scss
tags:
---

## Scss 变量

```css
$color: #f10;
.box {
  background-color: $color;
}
.box2 {
  color: $color;
}
```

:::details 最后处理的结果

```css
.box {
  background-color: #f10;
}

.box2 {
  color: #f10;
}
```

:::

## Scss 循环

```scss
@for $i from 1 through 36 {
  .item:nth-child(#{$i}) {
    color: hsl($i * 10, 50%, 50%);
  }
}
```

:::details 最后处理的结果

```css
.item:nth-child(1) {
  color: #bf5540;
}

.item:nth-child(2) {
  color: #bf6a40;
}

.item:nth-child(3) {
  color: #bf8040;
}

.item:nth-child(4) {
  color: #bf9540;
}

.item:nth-child(5) {
  color: #bfaa40;
}

.item:nth-child(6) {
  color: #bfbf40;
}

.item:nth-child(7) {
  color: #aabf40;
}

.item:nth-child(8) {
  color: #95bf40;
}

.item:nth-child(9) {
  color: #80bf40;
}

.item:nth-child(10) {
  color: #6abf40;
}

.item:nth-child(11) {
  color: #55bf40;
}

.item:nth-child(12) {
  color: #40bf40;
}

.item:nth-child(13) {
  color: #40bf55;
}

.item:nth-child(14) {
  color: #40bf6a;
}

.item:nth-child(15) {
  color: #40bf80;
}

.item:nth-child(16) {
  color: #40bf95;
}

.item:nth-child(17) {
  color: #40bfaa;
}

.item:nth-child(18) {
  color: #40bfbf;
}

.item:nth-child(19) {
  color: #40aabf;
}

.item:nth-child(20) {
  color: #4095bf;
}

.item:nth-child(21) {
  color: #4080bf;
}

.item:nth-child(22) {
  color: #406abf;
}

.item:nth-child(23) {
  color: #4055bf;
}

.item:nth-child(24) {
  color: #4040bf;
}

.item:nth-child(25) {
  color: #5540bf;
}

.item:nth-child(26) {
  color: #6a40bf;
}

.item:nth-child(27) {
  color: #8040bf;
}

.item:nth-child(28) {
  color: #9540bf;
}

.item:nth-child(29) {
  color: #aa40bf;
}

.item:nth-child(30) {
  color: #bf40bf;
}

.item:nth-child(31) {
  color: #bf40aa;
}

.item:nth-child(32) {
  color: #bf4095;
}

.item:nth-child(33) {
  color: #bf4080;
}

.item:nth-child(34) {
  color: #bf406a;
}

.item:nth-child(35) {
  color: #bf4055;
}

.item:nth-child(36) {
  color: #bf4040;
}
```

:::

## Scss 函数-混入

场景 1,我们需要做一个居中效果,比如外层容器类名为 out_box1,内层容器类名为 inner_box1,那我们使用弹性盒实现,html 代码如下:

```html
<div class="out_box1">
  <div class="inner_box1"></div>
</div>
```

CSS 代码如下:

```css
.out_box1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

但是如果有多个容器都会使用居中这个样式,比如下方代码,out_box2 也需要设置居中样式,那我们可以这样做,使用 Scss 的混合:

```html
<div class="out_box1">
  <div class="inner_box1"></div>
</div>
<div class="out_box2">
  <div class="inner_box2"></div>
</div>
```

```scss
@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.out_box1 {
  @include flexCenter;
}
.out_box2 {
  @include flexCenter;
}
```

使用传参数自定义

```scss
@mixin flex($layout) {
  display: flex;
  align-items: $layout;
  justify-content: $layout;
}
.out_box1 {
  @include flex(center);
}
.out_box2 {
  @include flex(start);
}
```

## Scss 嵌套

## Scss 继承

## Scss 导入

## Scss 作用域

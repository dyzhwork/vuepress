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

下面的代码,是不是有很多冗余的,相同重复的地方,用 Scss 该怎么优化呢?

```scss
.info {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #000;
}
.info-success {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: green;
}
.info-error {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #f10;
}
.info-info {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #ccc;
}
```

**使用继承的方式来写:**

```scss
.info {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #000;
}
.info-success {
  @extend .tip;
  color: green;
}
.info-error {
  @extend .tip;
  color: #f10;
}
.info-info {
  @extend .tip;
  color: #ccc;
}
```

:::details 编译后的结果,可以看到已经提取出公用的代码了

```css
.info,
.info-info,
.info-error,
.info-success {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #000;
}

.info-success {
  color: green;
}

.info-error {
  color: #f10;
}

.info-info {
  color: #ccc;
}
```

:::

### 使用`%`占位符提取公共代码再优化

```scss
%info {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #000;
}
.info-success {
  @extend %info;
  color: green;
}
.info-error {
  @extend %info;
  color: #f10;
}
.info-info {
  @extend %info;
  color: #ccc;
}
```

:::details 编译后的结果

```css{2}
/* 可以看到公共代码的%info没有了 */
.info-info, .info-error, .info-success {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  color: #000;
}

.info-success {
  color: green;
}

.info-error {
  color: #f10;
}

.info-info {
  color: #ccc;
}
```

:::

## Scss 导入

Scss 导入模块有哪些方式?1.`@import`,2.`@use`

- `@import`:又分为`编译时用法`和`运行时用法`

### 运行时

例如:Scss 中引用一个外部 css,如:`@import url('../../ffff.csss');`,最终生产运行时还是`@import url('../../ffff.csss');`,这样其实就是 css 的扩展,因为这个文件压根不在,但是他还是能编译通过.

### 编译时

比如在一个文件 aaa.scss 中定义一个变量`$color:#f10`,我在 bbb.scss 文件中导入 aaa.scss 文件代码,代码如下:

```scss
// aaa.scss文件中
$color: #f10;
```

```scss
// bbb.scss文件中
@import './aaa.scss';
.foo {
  background: $color;
}
```

最终能编译出:

```css
.foo {
  background: #f10;
}
```

### 造成的问题

由于既有运行时,也有编译时,所以很容易造成混淆,污染变量等问题.

例如,还有一个和 aaa.scss 文件同目录下的 ccc.scss 文件,里面也有一个$color 变量,文件内容内容如下:

```scss
// ccc.scss文件中
$color: #098;
```

在 bbb.scss 文件中同时导入 aaa.scss 和 ccc.scss 文件,

```scss
// bbb.scss文件中
@import './aaa.scss';
@import './ccc.scss';
.foo {
  background: $color;
}
```

最终编译后的结果是:

```css
.foo {
  background: #098;
}
```

**如果先导入 ccc.scss 文件**

```scss
// bbb.scss文件中
@import './ccc.scss';
@import './aaa.scss';
.foo {
  background: $color;
}
```

最终编译后的结果是:

```css
.foo {
  background: #f10;
}
```

不难看出确实导致变量污染,而且不利于私有变量使用,本来只想内部使用,但是现在全局导入的都可以用,要解决这个问题,使用官方推荐的导入方式:将`@import`改变成`@use`即可解决这个问题,例如上面的可以写成:

```scss
// bbb.scss文件中
@use './ccc.scss';
@use './aaa.scss';
// 这样写后,导入的每一个模块有了属于自己的模块名称,使用时应该带上模块名称(文件名)
.foo {
  background: ccc.$color;
}
.test {
  color: aaa.$color;
}
```

最终编译后的结果是:

```css
.foo {
  background: #098;
}

.test {
  color: #f10;
}
```

**当然,会遇到同名文件的情况,比如两个 aaa.scss 文件不是共同的目录下,如:**

```scss
@use './aaa.scss';
@use './xxx/aaa.scss';
```

这种情况下,可以自定义重命名模块名称,使用`as`重命名,如:

```scss
@use './aaa.scss' as a1;
@use './xxx/aaa.scss' as a2;
.foo {
  background: a1.$color;
}
.test {
  color: a2.$color;
}
```

编译后的结果:

```css
.foo {
  background: #f10;
}

.test {
  color: #098;
}
```

## Scss 作用域

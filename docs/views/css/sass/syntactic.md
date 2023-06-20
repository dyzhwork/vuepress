---
title: Sass语法
date: 2023-05-29 09:13:16
permalink: /pages/d8bfa4/
categories:
  - css
  - sass
tags:
---

## Sass 语法

1. 变量：使用 $ 符号定义变量并赋值，例如 $primary-color: #008cba;。在其他地方使用时，可以直接引用该变量。

```css
$primary-color: #333;
body
  background-color: $primary-color;
```

**这个例子中，body 元素设置背景颜色，使用`$primary-color`变量作为背景颜色的值。**

2. 嵌套规则：通过缩进来表示嵌套关系。例如：

```css
.container
  width: 100%;
  .header
    font-size: 20px;
  .content
    padding: 10px;
```

**这个例子中，.header 和 .content 都是 .container 的子元素，因此它们被嵌套在 .container 中。使用嵌套可以让样式表更加易读和组织。**

3. 混合器（Mixin）：可以将一组样式封装到一个 mixin 中，然后在需要的地方引用它。例如：

```css
// 定义一个带有参数的混合器
=mixin-button($bg-color, $text-color)
  background-color: $bg-color
  color: $text-color
  border-radius: 5px
  padding: 10px 20px
  font-size: 16px
  cursor: pointer

// 使用混合器创建一个类名为 my-button 的样式
.my-button
  +mixin-button(#4caf50, #fff)

```

**这个例子中，`@mixin` 表示定义一个 mixin，`border-radius` 是 mixin 的名称，`$radius` 是 mixin 接受的参数。在 `.box` 中，通过 `@include` 引用了 border-radius mixin，并传入了参数 `5px`。**

其中，`=` 符号和 `@` 符号都可以用来定义混合器或函数。 @ 符号用于定义一个普通的混合器，如以下示例：

```css
// 定义一个混合器
@mixin-name {
  // 混合器样式
}

// 使用混合器
.my-selector {
  +mixin-name;
}

```

4. 继承（Extend）：可以使用 @extend 指令来继承一个选择器的样式。例如：

```css
.button
  background-color: #008cba;
  color: white;
  &:hover
    background-color: darken(#008cba, 10%);
.primary-button
  @extend .button;
  font-weight: bold;

```

**这个例子中，`.primary-button` 继承了 `.button` 的样式，并在此基础上添加了 `font-weight: bold `属性。使用继承可以减少重复代码。这些是 Sass 的一些基本语法规则，Sass 还提供了条件语句、循环等高级功能，使得样式表更加灵活和易于维护。**

5. 条件语句：可以使用` @if` 指令来执行条件判断。例如：

```css
$width: 100px;
.box
  @if $width > 50px
    width: $width;
   @else
    width: 50px;
```

**这个例子中，如果 $width 大于 50px，则给 .box 设置宽度为 $width，否则设置宽度为 50px。**

6. 循环：可以使用` @for`、`@each` 和 `@while` 指令来执行循环操作。例如：

```css
@for $i from 1 through 5 .item-#{$i} width: 100px * $i height: 50px background-color: #ccc ;
```

这将生成下面的 CSS 代码：

```css
.item-1 {
  width: 100px;
  height: 50px;
  background-color: #ccc;
}
.item-2 {
  width: 200px;
  height: 50px;
  background-color: #ccc;
}
.item-3 {
  width: 300px;
  height: 50px;
  background-color: #ccc;
}
.item-4 {
  width: 400px;
  height: 50px;
  background-color: #ccc;
}
.item-5 {
  width: 500px;
  height: 50px;
  background-color: #ccc;
}
```

**这个例子中，使用 `@for` 循环从 1 到 5，其中，`#{$i}`是一个变量，并在每次迭代中生成一个带有不同宽度的 .item 类。用于计算每个`.item`元素的宽度。我们在这里使用了 Sass 的插值语法来将变量嵌入到字符串中。**

7. 注释：和 CSS 一样，Sass 支持单行注释（以 // 开头）和多行注释（以 /_ 开头和以 _/ 结尾）。例如：

```css
// This is a single-line comment.

/*
 * This is a
 * multi-line comment.
 */
```

这些是 Sass 的基本语法规则，掌握这些规则可以更好地编写 Sass 样式表。

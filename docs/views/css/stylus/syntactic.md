---
title: stylus语法
date: 2023-05-29 09:42:36
permalink: /pages/8ccd5d/
categories:
  - css
tags:
  - stylus
---

## stylus 语法

Stylus 的语法规则相对于原生 CSS 而言更加灵活和简洁，以下是一些 Stylus 的语法规则：

- 缩进：Stylus 使用缩进来表示层级关系，类似于 Python 语言。这样可以使得代码更加整洁与易读；
- 变量：使用$符号定义变量，例如 $color = #333；
- Mixin：Mixin 是一种可重用的代码块，类似于函数。定义 Mixin 时使用“+”符号，例如 +border-radius(value) { border-radius: value }；
- 运算符：支持算术、比较、逻辑等运算符，并且可以自定义运算符；
- 条件语句：支持 if/else 条件语句，例如 if color == "red" { background-color: color } else { background-color: #fff }；
- 迭代器：支持 for 循环，例如 for i in 1..3 { margin-right: i \* 10px }；
- 嵌套选择器：支持将子元素的样式嵌套在父元素中，例如 ul { li { list-style: none } }；
- 函数：支持自定义函数，例如 darken(color, amount) { return mix(#000, color, amount) }；
- 导入：使用@import 语句导入其他文件中的样式。

所以，Stylus 的语法规则相对原生 CSS 更加强大、灵活和易于扩展，可以大大提高 CSS 编写的效率和质量。但是，需要注意的是，由于 Stylus 语法与原生 CSS 有所不同，因此在使用 Stylus 时需要仔细阅读官方文档并进行深入理解。

## 代码示例

```css
// 定义颜色变量
$primary-color = #007bff

// 定义Mixin
+border-radius(value)
  border-radius: value

// 定义函数
darken(color, amount)
  return mix(#000, color, amount)

// 使用条件语句和迭代器
for i in 1..5
  if i % 2 == 0
    background-color: darken($primary-color, (i / 10))
  else
    background-color: lighten($primary-color, (i / 10))

  +border-radius(i * 5px)

```

在这个例子中，我们定义了一个颜色变量`$primary-color`，一个 Mixin `+border-radius`，和一个函数 `darken`。然后使用迭代器和条件语句来为一组元素设置不同的背景颜色和圆角半径。在每次循环时，将使用 Mixin 来为元素设置圆角，并使用自定义函数 darken 来动态计算背景颜色。

需要注意的是，上述代码块`缩进使用了空格（通常为两个或四个）`，而非制表符。这是`因为 Stylus 的缩进是敏感的`，如果使用制表符可能会导致解析错误。

## 特别注意

在 Stylus 中，+符号用于定义 Mixin。Mixin 可以理解为一种可重用的代码块，类似于函数。Mixin 定义了一组 CSS 属性和值，可以在需要的地方调用它们。

使用 Mixin 的好处是可以减少代码量并增加可重用性。可以将一些常用的样式抽离出来，以 Mixin 的形式存在，然后在需要用到这些样式的地方，直接调用 Mixin 即可。这样就避免了样式的重复编写和维护。

在 Stylus 中，定义 Mixin 时使用+符号，例如：

```css
// 定义一个名为border-radius的Mixin
+border-radius(value)
  border-radius: value
```

上述代码定义了一个名为 border-radius 的 Mixin，它接受一个参数 value，用于设置元素的圆角半径。Mixin 中的 CSS 属性和值将被编译成标准的 CSS，并可以在需要的地方进行调用。

在调用 Mixin 时，使用+符号加上 Mixin 名称，例如：

```css
// 调用border-radius的Mixin，设置圆角半径为10px
+border-radius(10px)
```

上述代码将会编译成如下的 CSS：

```css
border-radius: 10px;
```

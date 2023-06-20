---
title: CSS选择器
date: 2023-05-23 13:50:36
permalink: /pages/a09c01/
categories:
  - css
tags:
---

## 一、CSS 选择器

当你了解 html 后,你知道要让 html 变得更加丰富,离不开 css 的辅助,css 能让你的 html 变得更加魔幻,那么如何让 css 作用在 html 上,必然离不开 css,css 将通过 css 选择器选中 html,然后 css 写出相关样式即可实现美化 html 的操作。

通常我们会给元素中设置"id" 和 "class"选择器。

### ① id 选择器

1. id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。
2. HTML 元素以 id 属性来设置 id 选择器,CSS 中 id 选择器以 "#" 来定义。
   例如:

```css
#id {
  text-align: center;
  color: red;
}
```

:::tip 注意
:eyes: : `ID`属性不要以数字开头，数字开头的 ID 在 Mozilla/Firefox 浏览器中不起作用。
:::

### ② class 选择器

1. class 选择器用于描述一组元素的样式，class 选择器有别于 id 选择器，class 可以在多个元素中使用。
2. class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以一个点 . 号显示。

例如让元素内容居中显示:

```css
.center {
  text-align: center;
}
```

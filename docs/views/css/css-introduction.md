---
title: CSS基础
date: 2023-05-29 08:53:39
permalink: /pages/43dbf8/
categories:
  - css
tags:
  - css
---

## CSS 介绍

前端开发，CSS 是必备的知识，CSS（Cascading Style Sheets）是一种用于描述文档表示方法的样式表语言。它与 HTML 一起组成了构建网页的两个基本技术之一。HTML 负责定义网页的结构和内容，而 CSS 则负责定义网页的外观和布局。

通过使用 CSS，我们可以将网站的外观和布局与代码分离开来，从而提高代码的可维护性和可重用性。CSS 可以让我们轻松地控制页面元素的大小、颜色、字体、间距、位置等各种样式属性，使网页看起来更加美观、清晰、易读和易于导航。

CSS 的语法非常简单，它由选择器、属性和值组成。选择器用于指定要应用样式的元素，属性用于指定要修改的样式属性，值则用于指定该属性的具体值。例如：

```css
h1 {
  font-size: 24px;
  color: #3366cc;
  margin-bottom: 10px;
}
```

上面这段 CSS 代码定义了一个针对 `h1` 标签的样式规则，它将 `h1` 元素的字号设置为 `24` 像素，并将字体颜色设置为 `#3366cc`，同时在 h1 元素下方添加了`10` 像素的下边距。

除此之外，CSS 还拥有众多的高级特性和技巧，例如`盒模型、浮动、定位、响应式设计、动画效果`等，这些特性可以帮助我们更加灵活地控制网页的布局和效果。

总的来说，学习 CSS 对于任何一个前端开发者来说都是必不可少的，它可以让你更好地掌握网页开发的技能，打造出更加优秀的用户体验。

## [官方介绍](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

**层叠样式表**（Cascading Style Sheets，缩写为 **CSS**）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。

CSS 是**开放 Web** 的核心语言之一，并根据 W3C 规范在 Web 浏览器中进行了标准化。以前，CSS 规范的各个部分的开发是同步进行的，这种方式允许对最新推荐的 CSS 版本进行控制。你可能已经听说过 CSS1、CSS2.1 甚至 CSS3。但是以后将不会再有 CSS3 或者 CSS4；相反，现在的一切都是没有版本号的 CSS。

在 CSS2.1 之后，规范的制定范围不断地增加，并且不同的 CSS 模块进展差异如此之大，以至于按照模块来单独进行开发并发布建议变得更加有效。W3C 现在不再对 CSS 规范进行版本控制，而是定期对 CSS 规范的最新稳定状态和各个模块的进展用快照来记录。CSS 模块现在有版本号或者级别，例如 CSS Color Module Level 5。

## 官方推荐资源

1. [CSS 基础内容介绍](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)
2. [CSS 教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)
3. [CSS 参考资料](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

:::tip 想要成为一名专业前端工程师？
[点击开始，官方汇总了一门课程，其中包含你实现成为前端工程师目标所需要的所有基本信息。](https://developer.mozilla.org/zh-CN/docs/Learn/Front-end_web_developer)
:::

---
title: 新增标签元素效果
date: 2023-06-19 10:01:49
permalink: /pages/f903bc/
categories:
  - html
tags:
  -
---

## 一、article 标签元素

HTML`article`元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。

```html
<article>
  <h1>IE浏览器</h1>
  <p>windows IE浏览器 was released to the public on march ....</p>
</article>
```

:::details 实际效果

<article>
<h1>IE浏览器</h1>
<p>windows IE浏览器 was released to the public on ....</p>
</article>
:::

## 二、rb 标签元素

`<rb>`元素用于分隔`<ruby>`注释的基本文本组件（即正在注释的文本）。一个`<rb>`元素应该包装基本文本的每个单独的原子段。

```html
<ruby> <rb>漢</rb>字 <rp>(</rp><rt>han</rt>zi<rp>)</rp> </ruby>

<ruby> 漢 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp> </ruby>
```

:::details 实际效果
<ruby>
<rb>漢</rb>字
<rp>(</rp><rt>han</rt>zi<rp>)</rp>
</ruby>

<ruby>
  漢 <rp>(</rp><rt>han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>

:::

## 三、rp 标签元素

当浏览器不支持`<ruby>`元素的时候，`<rp>`元素用为其提供注解的，并提供随后的圆括号。

```html
<ruby> 漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp> </ruby>
```

:::details 实际效果
<ruby>
漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
:::

## 四、rt 标签元素

`<rt>`元素包含字符的发音，在 ruby 注解中出现，它用于描述东亚字符的发音。

```html
<ruby> 汉 <rt>hàn</rt> 字 <rt>zì </rt> </ruby>
```

:::details 实际效果
<ruby>
汉 <rt>hàn</rt>
字 <rt>zì </rt>
</ruby>
:::

## 五、ruby 标签元素

HTML`<ruby>`元素被用来展示东亚文字注音或字符注释

```html
<ruby> 漢<rp>(</rp><rt>kan</rt><rp>)</rp> 字<rp>(</rp><rt>ji</rt><rp>)</rp> </ruby>
```

:::details 实际效果
<ruby>
漢<rp>(</rp><rt>kan</rt><rp>)</rp>
字<rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
:::

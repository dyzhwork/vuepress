---
title: H5新增元素
date: 2023-05-21 18:25:38
permalink: /pages/bb76bc/
categories:
  - html
tags:
  - html
---

## HTML5 新增元素

概述
HTML5 新增的主要结构元素有 6 个：header、nav、article、aside、section、footer。

## header

在 HTML5 中，header 元素一般用于 3 个地方：

### 页面头部：

如网站名称、页面 LOGO、顶部导航、介绍信息等。

### 文章头部（article 元素）：

文章标题、meta 信息（一般指作者、点赞数、评论数）。

### 区块头部（section 元素）：

标题。

## nav

在 HTML5 中，nav 元素一般用于 3 个地方：

### 顶部导航：

nav 元素既可以放到 header 元素内部，也可以放到 header 元素外部。

### 侧栏导航。

### 分页导航。

## article

在 HTML5 中，article 元素一般只会用于一个地方：文章内容部分。

可以把 article 看成一个独立的部分，它内部可以包含标题以及其他部分。也就是说，article 元素内部可以包含 header 元素、section 元素和 footer 元素等。

## aside

在 HTML5 中，aside 元素一般用于表示跟周围区块相关的内容，正确地使用 aside 元素，主要取决于它的使用位置，我们大体可以分为以下两种情况：

如果 aside 元素放在 article 元素或 section 元素之中，则 aside 内容必须与 article 内容或 section 内容紧密相关。
如果 aside 元素放在 article 元素或 section 元素之外，则 aside 内容应该是与整个页面相关的，比如相关文章、相关链接、相关广告等。

## section

在 HTML5 中，section 元素一般用于某一个需要标题内容的区块。如果页面某个区块不需要标题，直接使用 div 元素就可以了。如果需要标题，则建议使用 section 元素。

HTML5 标准建议，section 元素内部必须带有标题，也就是说，section 元素内部必须带有一个 header 元素。

## footer

### 在 HTML5 中，footer 元素一般用于两个地方：

一个是“页面底部”：一般包含友情链接、版权声明、备案信息等。
另一个是“文章底部”：footer 元素一般包含“上一篇/下一篇导航”“文章分类”“发布信息”等。
表单元素

---
title: 图片懒加载
date: 2023-05-24 16:57:27
permalink: /pages/7836fa/
categories:
  - javascript
  - ES5
tags:
  - 懒加载
---

## 一、懒加载背景

如果网站上一次性加载大量的图片,势必会让用户体验非常糟糕,原因很简单,因为加载图片需要消耗带宽资源,而且加载不想查看的图片更是浪费资源。因此给图片进行懒加载是非常有必要的。

目前流行的做法是滚动动态加载，也就是说显示在屏幕之外的图片默认不加载，随着页面的滚动，图片进入了显示的范围，则触发图片的加载显示。

:::tip 这样做的好处，一是页面加载速度快，二是节省流量。
:::

## 二、图片懒加载的原理

1. 存储图片的真实路径，把图片的真实路径绑定给一个自定义属性 比如`src-url`即可，这样图片元素没有 src 属性，浏览器就不会发出请求去下载图片（没有请求就提高了性能）
2. 初始化 img 的时候，src 不能是真实的图片地址(会一次性发送请求)，也不可以是空地址或者坏地址,否则会出现出错图标
3. 设置 img 的默认 src 为一张 `1px*1px`，很小很小的 gif 透明图片（`所有的 img 都用这一张，只会发送一次请求`）
4. 需要一个滚动事件，判断元素是否在浏览器窗口，一旦进入视口才进行加载，当滚动加载的时候，替换为真正的 url 地址（也就是`src-url`里保存的值）
5. 等到图片进入视口后，利用 JS 提取`src-url`的真实图片地址赋值给 src 属性，就会去发送请求加载图片，真正实现了按需加载

## 三、实现方法

1.  滚动监听 + scrollTop + offsetTop + innerHeight
    :::tip 1. 获取可视窗口的大小
    :::
    :::tip 2. 获取内容滚动的距离
    :::
    :::tip 3. 判断图片进入了可视区域
    :::

2.  滚动监听 + [getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect),[点击查看相关 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

    :::tip 解释

    - 执行 getBoundingClientRect()相当于 img 元素调用自己的 getClientRects()方法返回的一个矩形对象，并且拥有 left, top, right, bottom, x, y, width, 和 height 这几个以像素为单位的只读属性用于描述整个边框。

    - 除了 width 和 height 以外的属性是始终相对于视图窗口的左上角来计算的。

    - 也就是说，当滚动位置发生了改变，top 和 left 属性值就会随之立即发生变化。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给 top、left 属性值加上当前的滚动位置。
      :::

3.  [intersectionObserve()](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)[点击查看相关 API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

IntersectionObserve 是浏览器提供的一个原生构造函数，它也被称作交叉观察器。 它可以观察我们的元素是否可见，也就是`是否和可视区发生交叉`。
:::tip 官网的解释：
IntersectionObserver 接口提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。
:::

:::tip 简单说：
使用 IntersectionObserver 接口观察一个元素，观察元素是否进入了可视区，这个可视区可以相对于视窗或者祖先元素。
:::
![交叉观察器](~@pub/image/javascript/js001.png)
上图很形象的描述了元素和窗口可视区域发生交叉的过程,当元素发生进入可视区域,我们就说元素和窗口交叉了。此处将以交叉观察器实现图片懒加载。

## 四、IntersectionObserver 的使用

### 4.1 初始化实例

```js
let EleOb = new IntersectionObserver(callback, options)
```

:::tip 该构造函数接收两个参数：

1. callback：回调函数，当元素的可见性发生变化，即元素与目标元素相交发生改变时会触发该回调函数。
2. options：一些配置项参数，如果不传会有默认值，它可以用来配置可视区元素、什么时候触发回调等等，默认就是浏览器视口。
   :::

### 4.2 回调函数参数解释

:::tip callback 将会接受两个参数 1. entries 2.observer

- entries：
  它是一个 IntersectionObserverEntry 对象数组 ，IntersectionObserverEntry 主要存储的是一些观察元素的信息，主要有以下 7 个属性：

  - time：可见性发生变化的时间，是一个高精度毫秒时间戳
  - target：目标元素，是一个 DOM 节点对象
  - rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回 null
  - boundingClientRect：目标元素的矩形区域信息
  - isIntersecting：目标元素当前是否可见值,可见为 true,不可见为 false
  - intersectionRect：目标元素与视口或根元素的交叉区域的信息
  - intersectionRatio：目标元素的可见比例，完全可见时为 1，完全不可见时小于等于 0

- observer：
  - 它返回的是被调用的 IntersectionObserve 实例，通常无需操作。

:::

### 4.3 options 参数解释

options 是构造函数的第二个参数，是一个对象的形式，它主要一些配置信息，主要配置项有如下几个：

1. root：
   主要用来配置被观察元素是相对于谁可见和不可见，如果不配置，则默认的是浏览器视口。
2. threshold：
   主要用来配置两个元素的交叉比例，它是一个数组，用于决定在什么时候触发回调函数。
3. rootMargin：
   用来改变可视区域的范围，假如我们可视区域大小是 300x300，可以通过该参数改变可视区域大小，但是实际像素值并没有变，优点类似于我们上拉加载更多场景：当距离底部多少多少像素的时候就加载。

### 4.4 实例方法

初始化实例后，我们就可以调用实例方法了。IntersectionObserver 实例常用的方法常主要有下面几个：

- EleOb.observe([element])：使用该方法后代表我们开始观察某个元素了，它接收一个元素节点作为参数，也就是被观察元素。
- EleOb.unobserve([element])：该方法用于停止观察某元素，同样接收一个元素节点作为参数。
- EleOb.disconnect()：该方法用于关闭观察器。

## 五、代码实现图片懒加载

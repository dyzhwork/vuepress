---
title: GSAP入门操作
date: 2023-06-26 16:20:13
permalink: /pages/4e4cc0/
categories:
  - animation
  - gsap
tags:
  -
---

## 什么是 GSAP

- GreenSock Animation Platform（GSAP）是一个业界知名的工具套件，在超过 1100 万个网站上使用，其中包括超过 50%的获奖网站！您可以使用 GSAP 在任何框架中对 JavaScript 可以触及的几乎所有内容进行动画处理。无论你是想制作 UI、SVG、Three.js 还是 React 组件的动画，GSAP 都能满足你的需求。
- 核心库包含创建超快、跨浏览器友好的动画所需的一切。
- 除了核心，还有各种插件。你不需要学习它们来开始，但它们可以帮助解决特定的动画挑战，如基于滚动的动画，可拖动的交互，变形等。

:::tip 查看可用插件的概述
[点击此处查看可用插件的概述](https://cdpn.io/pen/debug/djXzyR)
:::

## 安装引用方式

:::tip cdn 方式

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.1/dist/gsap.min.js"></script>
```

:::
:::tip npm 方式

```bash
npm install gsap
```

:::
在 vuepress 的.vue 组件中使用时导入方式应该使用 commonjs 方式导入,即:

```js
const { gsap } = require('gsap')
```

<Gsap-Animation/>

:::tip 温习提示
可以看出:有一个方法，一个目标和一个包含动画信息的对象
:::

## GSAP 提供四种类型的补间方法(method)

方法如下:

- gsap.to()
  > 这是最常见的补间类型。补 .to() 间将从元素的当前状态开始，并将动画设置为补间中定义的值。
- gsap.from()
  > 类似于向后 .to() ，它从补间中定义的值开始设置动画，并在元素的当前状态结束。
- gsap.fromTo()
  > 定义起始值和结束值。
- gsap.set()
  > 立即设置属性（无动画）。它本质上是一个零持续时间的 .to() 补间，可以恢复。

## GSAP 需要的目标对象(Target)

有了相应的方法之后,我们必须告诉 `我们想要动画的内容。在` 使用 `document.querySelectorAll()`方法查询目标元素 ，对于 HTML 或 SVG 目标，我们可以使用选择器文本，如 "`.class`" 和 "`#id`" 。或者你可以传入一个变量甚至一个数组。

```js
// 使用".class" 和 "#id"
gsap.to('.box', { x: 200 })

// 使用css选择器
gsap.to('section > .box', { x: 200 })

// 使用变量
let box = document.querySelector('.box')
gsap.to(box, { x: 200 })

// 使用元素数组
let square = document.querySelector('.square')
let circle = document.querySelector('.circle')

gsap.to([square, circle], { x: 200 })
```

## 变量(variables)

变量对象包含有关动画的所有信息。这可以是要设置动画的任意属性，也可以是影响动画行为的特殊属性，如。 `duration` , `onComplete` or `repeat` .

```js
gsap.to(target, {
  // 包含所有动画属性的对象
  x: 200,
  rotation: 360,
  // 持续时间2秒
  duration: 2
})
```

## 可以设置哪些属性的动画呢？

- GSAP 可以动画几乎任何东西;没有预定列表。这包括 CSS 属性，自定义对象属性，甚至 CSS 变量和复杂字符串!最常用的动画属性是变换和不透明度。
- 变换是 web 动画最好的朋友。它们可以用来移动你的元素，放大它们，旋转它们。变换和不透明度也是非常高性能的，因为它们不影响布局，所以浏览器的工作量更少。

:::tip 温馨提示
如果可能的话，使用动画转换而不是布局属性，如“顶部”，“左侧”或“边距”。你会得到更平滑的动画!
:::

## 变换速记

你熟悉 CSS 的转换：

```css
transform: rotate(360deg) translateX(10px) translateY(50%);
```

使用 GSAP 的方式来写:

```js
{ rotation: 360, x: 10, yPercent: 50 }
```

## 参考图表,一些最常用的转换值

| GSAP                       | CSS                            | 说明                             |
| -------------------------- | ------------------------------ | -------------------------------- |
| x: 100                     | transform: translateX(100px)   | 水平移动（px 或 SVG 单位）       |
| y：100                     | transform：translateY（100px） | 垂直移动（px 或 SVG 单位）       |
| xPercent: -50              | transform: translateX(-50%)    | 水平移动（元素宽度的百分比）     |
| yPercent: -50              | transform: translateY(-50%)    | 垂直移动（元素高度的百分比）     |
| rotation: 360              | transform: rotate(360deg)      | 旋转（度）                       |
| scale: 2                   | transform: scale(2, 2)         | 增大或减小尺寸                   |
| transformOrigin: "0% 100%" | transform-origin: 0% 100%;     | 平移的中心，这将围绕左下角旋转。 |
| rotationX: 360             | transform: rotateX(360deg)     | 旋转 X：360                      |
| rotationY: 360             | transform: rotateY(360deg)     | 旋转 Y：360                      |
| skewX: 45                  | transform: skewX(45deg)        | skewX：45                        |
| skewY: 45                  | transform: skewY(45deg)        | 倾斜度：45                       |
| scaleX: 2                  | transform: scaleX(2)           | 比例 X：2                        |
| scaleY: 2                  | transform: scaleY(2)           | 缩放 Y：2                        |

:::tip 温馨提示
默认情况下，GSAP 将使用 px 和度进行变换，但您可以使用其他单位，如 vw，弧度，甚至可以自己进行 JS 计算或相对值！
:::

```js
x: 200, // 使用px
x: "+=200" // 相对值
x: '40vw', // 使用字符串带单位 GSAP 解析
x: () => window.innerWidth / 2, // 使用函数返回值
rotation: 360 // 使用degrees
rotation: "1.25rad" // 使用弧度

```

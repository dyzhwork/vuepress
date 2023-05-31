---
title: 除了JS,能做节流的还有CSS
date: 2023-05-24 16:56:35
permalink: /pages/0240ab/
categories:
  - javascript
  - ES5
tags:
  - 节流
---

## 一、什么是节流

节流是一种优化策略，用于控制函数被调用的频率。它可以将一个高频率触发的事件限制为一个较低的频率，以减少资源消耗和提高性能。

:::tip 讲人话
当一个函数需要被频繁地调用时，我们可以使用节流来限制函数的调用频率，例如每隔一定时间间隔调用一次该函数。这样可以避免重复执行相同的操作，同时也减轻了计算机的负担，提高了应用程序的响应速度。常见的应用场景包括页面滚动、鼠标移动、窗口缩放等等。
:::
实际项目中，当我们需要在网页上实现一个保存按钮时，为了`防止用户频繁点击按钮而导致服务器压力过大或者出现重复提交`的情况，常见的做法是对点击事件进行节流处理。比如`限制每 300ms 只允许触发一次点击事件`，在这个时间内不管用户点击多少次，都只会触发一次保存操作。实现节流可以通过`手写函数`或者`引入第三方库`来完成，其中 `Lodash` 等工具库提供的 `throttle` 函数可以快速完成这个功能。

## 二、如何实现节流

通常情况下，我们都是使用 `javascript` 来实现节流功能，但是今天我们要说的是只用 `CSS` 也可以非常轻易的实现这样一个功能，而且无需任何框架库，是不是更加简单，容易？

### 1. 调整脑回路

CSS 实现与 JS 脚本的思维方式不同，需要从不同的角度考虑问题。例如，

- 在限制点击事件方面，我们可以使用 "pointer-events" 属性禁用点击事件；
- 在时间限制方面，我们可以利用 "animation" 属性自动禁用 300 毫秒，并在一定时间后重新启用。
- 此外，由于触发行为是点击，因此我们还需要关注伪类 ":active"。

通过以上的思路分析，结合这些相关因素，我们应该可以实现相应的功能。

`这种方式可以理解为使用 css 在动画有时间限制，用时间限制来控制实现节流，这就好比给一个按钮添加一个有鼠标点击事件的 css 属性变化到禁止鼠标点击的属性的动画。每次点击执行一次动画，即可实现节流效果。`

## 三、方案一（采用鼠标指针属性 pointer-events）

:::tip 本文将通过 vue 组件实现，假设有一个按钮，绑定了一个点击事件,这时的按钮连续点击就会不断地触发，效果如下。
:::
`打开控制台，点击这个按钮查看->`
<ButtonJS text='普通按钮'/>
<img v-lazy="'https://dyzhwork.github.io/images/js/throttle001.gif'"/>

### 1. 首先定义一个关于`pointer-events`的动画，名为`throttle_by_css`

```css
@keyframes throttle_by_css {
  from {
    pointer-events: none;
  }
  to {
    pointer-events: all;
  }
}
```

`这个动画就是从禁用到可点击的变化。`

### 2. 然后给按钮`button`添加动画绑定，并且设置动画时间是 2s 钟

```css
.btn_area {
  animation: throttle_by_css 2s forwards;
}
```

:::tip 说明
通过上述动画绑定，按钮再点击时 pointer-events 在 0~2 秒内的值都是 none，一旦到达 2 秒，就立刻变成了 all，由于是 `forwards`，会一直保持 all 的状态

如果不怎么了解动画相关问题，可以[点此](https://www.zhangxinxu.com/wordpress/2018/06/css3-animation-steps-step-start-end/)查看更多动画相关介绍。
:::

### 3. 最后也是最重要的一点

按钮在被点击时将执行一遍动画，故在`按钮被点击按下同时应设置动画为none`。

```css
.btn_area:active {
  animation: none;
}
```

### 4. 演示效果

为了更加清晰的看清楚，再点击时的动画添加背景颜色，字体颜色变化以便达到更好效果。

```css
@keyframes throttle_by_css {
  from {
    pointer-events: none;
  }
  to {
    pointer-events: all;
  }
}
```

`打开控制台，点击这个按钮查看->`
<ButtonJS :throttle='true' text='节流按钮'/>

<img v-lazy="'https://dyzhwork.github.io/images/js/throttle002.gif'"/>

### 5. 两种情况同时对比效果

打开控制台，点击下面的按钮对比实际效果

<ButtonJS text='普通按钮'/>

<ButtonJS :throttle='true' text='节流按钮'/>
<img v-lazy="'https://dyzhwork.github.io/images/js/throttle003.gif'"/>

## 四、方案二（采用 disabled 禁用按钮）

**待补充**

## 小结

css 实现节流和 js 实现节流相比，相对来说，css 实现方式更加简单，而且没有框架什么的限制，但总的来说，不管什么方式，实现功能的最终目的是：

1. 优化前端页面，避免某些函数频繁执行
2. 根据场景可以选择合适自己的方式
3. css 可以更加精准的控制按钮的禁用到可用的变化
4. 该方式最好的地方在于，实现逻辑解耦
5. 需要注意的是，这种方式仅限于点击事件，其他情况（比如：页面滚动，键盘输入等）还是要根据场景配合其他方式使用，

:::tip 以下是完整代码，供参考
:::

```vue
<template>
  <button class="btn_area" @click="handleClickButton">按钮</button>
</template>

<script>
export default {
  name: 'ButtonJS',

  methods: {
    handleClickButton() {
      if (this.throttle) {
        console.log('正在点击节流按钮')
      } else {
        console.log('正在点击普通按钮')
      }
    }
  }
}
</script>

<style>
@keyframes throttle_by_css {
  from {
    pointer-events: none;
  }
  to {
    pointer-events: all;
  }
}
.btn_area {
  animation: throttle_by_css 2s forwards;
}
.btn_area:active {
  animation: none;
}
</style>
```

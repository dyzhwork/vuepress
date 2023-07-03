---
title: 旋转的轮播图
date: 2023-07-03 16:00:16
permalink: /pages/b3e8be/
categories:
  - css
  - scss
tags:
  -
---

## 旋转的轮播图效果

<Scss-RotateSwiper/>

## 计算旋转圆的半径

```scss
$size1: 200px;
// 定义图片张数
$n: 9;
// 每个图片圆心连接大圆圆心形成的顶角
$pDeg: (360deg / $n);
// 计算内圆半径
$r: ($size1 / 2);
$R: ($r / math.sin(($pDeg / 2)));
```

## 图片定位

```scss
.item {
  width: $size1;
  height: $size1;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  // transform: translateX(-50%);
  margin-left: (-#{$size1} / 2);
  margin-top: -$r;
  transform-origin: center #{$R + $r};
  @for $i from 1 through $n {
    &:nth-child(#{$i}) {
      transform: rotate($pDeg * ($i - 1));
    }
  }
}
```

:::details 编译后的 css

```css
.RotateSwiper .container .content .item {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -200px/2;
  margin-top: -100px;
  transform-origin: center 392.3804400163px;
}
.RotateSwiper .container .content .item:nth-child(1) {
  transform: rotate(0deg);
}
.RotateSwiper .container .content .item:nth-child(2) {
  transform: rotate(40deg);
}
.RotateSwiper .container .content .item:nth-child(3) {
  transform: rotate(80deg);
}
.RotateSwiper .container .content .item:nth-child(4) {
  transform: rotate(120deg);
}
.RotateSwiper .container .content .item:nth-child(5) {
  transform: rotate(160deg);
}
.RotateSwiper .container .content .item:nth-child(6) {
  transform: rotate(200deg);
}
.RotateSwiper .container .content .item:nth-child(7) {
  transform: rotate(240deg);
}
.RotateSwiper .container .content .item:nth-child(8) {
  transform: rotate(280deg);
}
.RotateSwiper .container .content .item:nth-child(9) {
  transform: rotate(320deg);
}
```

:::

## 基本定位 scss

```scss
// 导入sass数学模块
@use 'sass:math';
.RotateSwiper {
  background: rgba($color: #000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    margin: 30px;
    // 外圆半径
    $size1: 200px;
    // 定义图片张数
    $n: 9;
    // 每个图片圆心连接大圆圆心形成的顶角
    $pDeg: (360deg / $n);
    // 计算内圆半径
    $r: ($size1 / 2);
    $R: ($r / math.sin(($pDeg / 2)));
    border-radius: 50%;
    width: $size1;
    height: $size1;
    border: 5px solid #fff;
    // outline: 5px solid #f10;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .content {
      width: $R * 2;
      height: $R * 2;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: $r;
      position: relative;
      .item {
        width: $size1;
        height: $size1;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        // transform: translateX(-50%);
        margin-left: (-#{$size1} / 2);
        margin-top: -$r;
        transform-origin: center #{$R + $r};
        @for $i from 1 through $n {
          &:nth-child(#{$i}) {
            transform: rotate($pDeg * ($i - 1));
          }
        }
      }
    }
  }
}
```

:::details 编译后的 css

```css
.RotateSwiper {
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.RotateSwiper .container {
  margin: 30px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 5px solid #fff;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.RotateSwiper .container .content {
  width: 584.7608800326px;
  height: 584.7608800326px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 100px;
  position: relative;
}
.RotateSwiper .container .content .item {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -200px/2;
  margin-top: -100px;
  transform-origin: center 392.3804400163px;
}
.RotateSwiper .container .content .item:nth-child(1) {
  transform: rotate(0deg);
}
.RotateSwiper .container .content .item:nth-child(2) {
  transform: rotate(40deg);
}
.RotateSwiper .container .content .item:nth-child(3) {
  transform: rotate(80deg);
}
.RotateSwiper .container .content .item:nth-child(4) {
  transform: rotate(120deg);
}
.RotateSwiper .container .content .item:nth-child(5) {
  transform: rotate(160deg);
}
.RotateSwiper .container .content .item:nth-child(6) {
  transform: rotate(200deg);
}
.RotateSwiper .container .content .item:nth-child(7) {
  transform: rotate(240deg);
}
.RotateSwiper .container .content .item:nth-child(8) {
  transform: rotate(280deg);
}
.RotateSwiper .container .content .item:nth-child(9) {
  transform: rotate(320deg);
}
```

:::

## 动画 scss

```scss
// 定义每个图片经历的时间比
$n: 9;
$pDeg: 360deg / $n;
$u: 1 / $n * 100%;
$rotateDuration: 0.3s;
$stopDuration: 2s;
$duration: ($rotateDuration + $stopDuration) * $n;
$backDuration: $stopDuration / ($stopDuration + $duration) * $u;
// 定义一个动画
@keyframes rotateImg {
  @for $i from 1 through $n {
    $p: $u * $i;
    $deg: $pDeg * $i;
    #{$p - $backDuration},
    #{ $p } {
      transform: rotate(-$deg);
    }
  }
}
.content {
  animation: rotateImg $duration infinite;
  -webkit-animation: rotateImg $duration infinite;
}
```

:::details 编译后的结果

```css
@keyframes rotateImg {
  10.1321585903%,
  11.1111111111% {
    transform: rotate(-40deg);
  }
  21.2432697014%,
  22.2222222222% {
    transform: rotate(-80deg);
  }
  32.3543808125%,
  33.3333333333% {
    transform: rotate(-120deg);
  }
  43.4654919236%,
  44.4444444444% {
    transform: rotate(-160deg);
  }
  54.5766030348%,
  55.5555555556% {
    transform: rotate(-200deg);
  }
  65.6877141459%,
  66.6666666667% {
    transform: rotate(-240deg);
  }
  76.798825257%,
  77.7777777778% {
    transform: rotate(-280deg);
  }
  87.9099363681%,
  88.8888888889% {
    transform: rotate(-320deg);
  }
  99.0210474792%,
  100% {
    transform: rotate(-360deg);
  }
}
.content {
  animation: rotateImg 20.7s infinite;
  -webkit-animation: rotateImg 20.7s infinite;
}
```

:::

## details 完整的 vue 组件代码

```vue
<template>
  <div class="RotateSwiper">
    <div class="container">
      <div class="content">
        <img src="https://picsum.photos/200?info=1" class="item" />
        <img src="https://picsum.photos/200?info=2" class="item" />
        <img src="https://picsum.photos/200?info=3" class="item" />
        <img src="https://picsum.photos/200?info=4" class="item" />
        <img src="https://picsum.photos/200?info=5" class="item" />
        <img src="https://picsum.photos/200?info=6" class="item" />
        <img src="https://picsum.photos/200?info=7" class="item" />
        <img src="https://picsum.photos/200?info=8" class="item" />
        <img src="https://picsum.photos/200?info=9" class="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RotateSwiper'
}
</script>

<style lang="scss" scoped>
// 导入sass数学模块
@use 'sass:math';

.RotateSwiper {
  background: rgba($color: #000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    margin: 30px;
    // 外圆半径
    $size1: 200px;
    // 定义图片张数
    $n: 9;
    // 每个图片圆心连接大圆圆心形成的顶角
    $pDeg: calc(360deg / $n);
    // 计算内圆半径
    $r: calc($size1 / 2);
    $R: calc($r / math.sin(calc($pDeg / 2)));
    border-radius: 50%;
    width: $size1;
    height: $size1;
    border: 5px solid #fff;
    // outline: 5px solid #f10;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .content {
      width: $R * 2;
      height: $R * 2;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: $r;
      position: relative;
      .item {
        width: $size1;
        height: $size1;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        // transform: translateX(-50%);
        margin-left: calc(-$size1 / 2);
        margin-top: -$r;
        transform-origin: center #{$R + $r};
        @for $i from 1 through $n {
          &:nth-child(#{$i}) {
            transform: rotate($pDeg * ($i - 1));
          }
        }
      }
    }
    // 定义每个图片经历的时间比
    $u: calc(1 / $n * 100%);
    $rotateDuration: 0.3s;
    $stopDuration: 2s;
    $duration: ($rotateDuration + $stopDuration) * $n;
    $backDuration: $stopDuration / ($stopDuration + $duration) * $u;
    // 定义一个动画
    @keyframes rotateImg {
      @for $i from 1 through $n {
        $p: $u * $i;
        $deg: $pDeg * $i;
        #{$p - $backDuration},
        #{ $p } {
          transform: rotate(-$deg);
        }
      }
    }
    .content {
      animation: rotateImg $duration infinite;
    }
  }
}
</style>
```

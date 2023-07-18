---
title: css3-@property实际用例
date: 2023-07-18 10:48:08
permalink: /pages/b091f0/
categories:
  - css
tags:
  -
---

## 改变背景颜色举例

### 例 1 饼图旋转效果

```css
@property --pie {
  syntax: '<angle>';
  inherits: false;
  initial-value: 5deg;
}
.test4 {
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 50%;
  background: conic-gradient(#f10, #f99 var(--pie), transparent var(--pie));
  transition: 2s --pie;
}
.test4:hover {
  --pie: 360deg;
}
```

```html
<div class="test4"></div>
```

<style>
  @property --pie {
  syntax: '<angle>';
  inherits: false;
  initial-value: 5deg;
}
.test4 {
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 50%;
  background: conic-gradient( #f10, #f99 var(--pie), transparent var(--pie));
  transition: 2s --pie;
}
.test4:hover {
  --pie: 360deg;
}
</style>
<div class="test4"></div>

## 实现倒计时效果

```css
@property --i {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
.integer001 {
  font-size: 100px;
  text-align: center;
}
/* 伪元素和计数据来实现 */
.integer001::before {
  counter-reset: count var(--i);
  content: counter(count);
  animation: count_num 10s linear infinite;
}
@keyframes count_num {
  to {
    --i: 10;
  }
}
```

<style>
@property --i {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
.integer001 {
  font-size: 100px;
  text-align: center;
}
/* 伪元素和计数据来实现 */
.integer001::before {
  counter-reset: count var(--i);
  content: counter(count);
  animation: count_num 10s linear infinite;
}
@keyframes count_num {
  to {
    --i: 10;
  }
}
</style>
<div class="integer001"></div>

## 实现时钟效果

:::details css 源码查看

```css
.integer002 {
  font-size: 100px;
  text-align: center;
}
.integer002 .hour::after {
  counter-reset: count var(--i);
  content: counter(count);
  animation: hour_num calc(60s * 60 * 24) linear infinite;
}
.integer002 .minute::after {
  counter-reset: count var(--i);
  content: counter(count);
  animation: minute_num 3600s 30s linear infinite;
}
.integer002 .second::after {
  counter-reset: count var(--i);
  content: counter(count);
  animation: second_num 60s linear infinite;
}
.integer002 .split {
  vertical-align: middle;
  display: inline-block;
  margin-top: -50px;
  animation: shark 1s linear infinite;
}

@keyframes hour_num {
  to {
    --i: 24;
  }
}
@keyframes minute_num {
  to {
    --i: 60;
  }
}
@keyframes second_num {
  to {
    --i: 60;
  }
}
@keyframes shark {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

:::

:::details html 源码查看

```html
<div class="integer002">
  <span class="hour"></span>
  <span class="split">:</span>
  <span class="minute"></span>
  <span class="split">:</span>
  <span class="second"></span>
</div>
```

:::

<style>
.integer002 {
  font-size: 100px;
  text-align: center;
}
.integer002 .hour::after {
  counter-reset: count var(--i);
  content: counter(count);
  animation: hour_num calc(60s * 60 * 24) linear infinite;
}
.integer002 .minute::after {
  counter-reset: count var(--i);
  content: counter(count);
  animation: minute_num 3600s 30s linear infinite;
}
.integer002 .second::after {
  counter-reset: count var(--i);
  content: counter(count);
  animation: second_num 60s linear infinite;
}
.integer002 .split {
  vertical-align: middle;
  display: inline-block;
  margin-top: -50px;
  animation: shark 1s linear infinite;
}

@keyframes hour_num {
  to {
    --i: 24;
  }
}
@keyframes minute_num {
  to {
    --i: 60;
  }
}
@keyframes second_num {
  to {
    --i: 60;
  }
}
@keyframes shark {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<div class="integer002">
  <span class='hour'></span>
  <span class='split'>:</span>
  <span class='minute'></span>
  <span class='split'>:</span>
  <span class='second'></span>
</div>

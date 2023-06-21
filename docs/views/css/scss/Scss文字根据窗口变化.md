---
title: Scss让文字根据窗口变化而变化
date: 2023-06-21 08:36:51
permalink: /pages/0e7f13/
categories:
  - css
  - scss
tags:
  -
---

## 实现效果

**`打开开发者工具改变窗口大小 或者 改变浏览器窗口大小 看中间文字改变效果`**

<ScssWordChangeByWindow/>

## 代码

:::details 点击查看 vue 组件 源码

```vue
<template>
  <div class="ScssWordChangeByWindow">
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'ScssWordChangeByWindow'
}
</script>

<style lang="scss" scoped>
.ScssWordChangeByWindow {
  border: 1px solid #000;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  * {
    margin: 0;
    color: #fff;
  }
  // 用scss定义一个随机字符串数组
  $words: 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit',
    'Assumenda', 'exercitationem', 'quis', 'atque', 'soluta', 'Corporis', 'ipsa', 'sit', 'Facere',
    'quos', 'numquam', 'debitis', 'sequi', 'adipisci', 'repellendus', 'a', 'velit', 'tempora',
    'error', 'quas', 'exercitationem', 'ipsum';
  // 定义一个宽度最大值
  $max_width: 1910px;
  h1 {
    font-size: 2vw;
    text-align: center;
    line-height: 500px;
    &::after {
      content: 'Scss Word Change By Window Change';
      // text-shadow: 1px 1px 4px #c91313;
      text-transform: uppercase;
      @each $word in $words {
        @media screen and (max-width: $max_width) {
          content: '#{$word}';
          color: rgb(random(255), random(255), random(255));
        }
        // 设置不同宽度值,更新值,需要注意的是 "$max_width - 100px"是进行运算,中间"-"必须和两边的值分开,否则,将会作为一个变量($max_width-100px)使用,导致报错
        $max_width: $max_width - 50px;
      }
    }
  }
}
</style>
```

:::

## 编译 Scss 后的 CSS

:::details 点击查看编译 Scss 后的 CSS

```css
.ScssWordChangeByWindow {
  border: 1px solid #000;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
}
.ScssWordChangeByWindow * {
  margin: 0;
  color: #fff;
}
.ScssWordChangeByWindow h1 {
  font-size: 2vw;
  text-align: center;
  line-height: 500px;
}
.ScssWordChangeByWindow h1::after {
  content: 'Scss Word Change By Window Change';
  text-transform: uppercase;
}
@media screen and (max-width: 1910px) {
  .ScssWordChangeByWindow h1::after {
    content: 'Lorem';
    color: #351a7c;
  }
}
@media screen and (max-width: 1860px) {
  .ScssWordChangeByWindow h1::after {
    content: 'ipsum';
    color: #41d269;
  }
}
@media screen and (max-width: 1810px) {
  .ScssWordChangeByWindow h1::after {
    content: 'dolor';
    color: #918950;
  }
}
@media screen and (max-width: 1760px) {
  .ScssWordChangeByWindow h1::after {
    content: 'sit';
    color: #d46a86;
  }
}
@media screen and (max-width: 1710px) {
  .ScssWordChangeByWindow h1::after {
    content: 'amet';
    color: #61d602;
  }
}
@media screen and (max-width: 1660px) {
  .ScssWordChangeByWindow h1::after {
    content: 'consectetur';
    color: #65b8a6;
  }
}
@media screen and (max-width: 1610px) {
  .ScssWordChangeByWindow h1::after {
    content: 'adipisicing';
    color: #d7b4af;
  }
}
@media screen and (max-width: 1560px) {
  .ScssWordChangeByWindow h1::after {
    content: 'elit';
    color: #0f47c2;
  }
}
@media screen and (max-width: 1510px) {
  .ScssWordChangeByWindow h1::after {
    content: 'Assumenda';
    color: #5851c5;
  }
}
@media screen and (max-width: 1460px) {
  .ScssWordChangeByWindow h1::after {
    content: 'exercitationem';
    color: #5045fd;
  }
}
@media screen and (max-width: 1410px) {
  .ScssWordChangeByWindow h1::after {
    content: 'quis';
    color: #f72f41;
  }
}
@media screen and (max-width: 1360px) {
  .ScssWordChangeByWindow h1::after {
    content: 'atque';
    color: #1f9842;
  }
}
@media screen and (max-width: 1310px) {
  .ScssWordChangeByWindow h1::after {
    content: 'soluta';
    color: #f113e7;
  }
}
@media screen and (max-width: 1260px) {
  .ScssWordChangeByWindow h1::after {
    content: 'Corporis';
    color: #bf51bf;
  }
}
@media screen and (max-width: 1210px) {
  .ScssWordChangeByWindow h1::after {
    content: 'ipsa';
    color: #77ad7a;
  }
}
@media screen and (max-width: 1160px) {
  .ScssWordChangeByWindow h1::after {
    content: 'sit';
    color: #f4919e;
  }
}
@media screen and (max-width: 1110px) {
  .ScssWordChangeByWindow h1::after {
    content: 'Facere';
    color: #1c9d06;
  }
}
@media screen and (max-width: 1060px) {
  .ScssWordChangeByWindow h1::after {
    content: 'quos';
    color: #4649fa;
  }
}
@media screen and (max-width: 1010px) {
  .ScssWordChangeByWindow h1::after {
    content: 'numquam';
    color: #5f4fe7;
  }
}
@media screen and (max-width: 960px) {
  .ScssWordChangeByWindow h1::after {
    content: 'debitis';
    color: #aeb084;
  }
}
@media screen and (max-width: 910px) {
  .ScssWordChangeByWindow h1::after {
    content: 'sequi';
    color: #a18001;
  }
}
@media screen and (max-width: 860px) {
  .ScssWordChangeByWindow h1::after {
    content: 'adipisci';
    color: #0952fd;
  }
}
@media screen and (max-width: 810px) {
  .ScssWordChangeByWindow h1::after {
    content: 'repellendus';
    color: #c817c9;
  }
}
@media screen and (max-width: 760px) {
  .ScssWordChangeByWindow h1::after {
    content: 'a';
    color: #38236a;
  }
}
@media screen and (max-width: 710px) {
  .ScssWordChangeByWindow h1::after {
    content: 'velit';
    color: #482eca;
  }
}
@media screen and (max-width: 660px) {
  .ScssWordChangeByWindow h1::after {
    content: 'tempora';
    color: #c90fc2;
  }
}
@media screen and (max-width: 610px) {
  .ScssWordChangeByWindow h1::after {
    content: 'error';
    color: #4a7524;
  }
}
@media screen and (max-width: 560px) {
  .ScssWordChangeByWindow h1::after {
    content: 'quas';
    color: #4e0d92;
  }
}
@media screen and (max-width: 510px) {
  .ScssWordChangeByWindow h1::after {
    content: 'exercitationem';
    color: #5ad0b1;
  }
}
@media screen and (max-width: 460px) {
  .ScssWordChangeByWindow h1::after {
    content: 'ipsum';
    color: #c6afc2;
  }
}
```

:::

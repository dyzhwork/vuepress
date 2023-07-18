---
title: Scss颜色模块
date: 2023-06-21 17:02:02
permalink: /pages/585655/
categories:
  - css
  - scss
tags:
  -
---

## 效果

<Scss-ColorModule/>

## 代码

:::details 使用 Vue 作为组件代替 HTML 实现

```vue
<template>
  <div class="ScssColorModule">
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
  </div>
</template>

<script>
export default {
  name: 'ScssColorModule'
}
</script>

<style lang="scss" scoped>
.ScssColorModule {
  border: 1px dashed #000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  $btn_colors: #0375d3, #07e224, #ecc309, #d81414, #606267;
  @for $i from 1 through length($btn_colors) {
    .btn_item:nth-of-type(#{$i}) {
      $color: nth($btn_colors, $i);
      background: $color;
      color: #fff;
      line-height: 35px;
      padding: 0 20px;
      border-radius: 5px;
      &:hover {
        background: lighten($color, 10%);
      }
      &:active {
        background: darken($color, 10%);
      }
      &:disabled {
        background: lighten($color, 20%);
        color: lighten($color, 40%);
      }
    }
  }
}
</style>
```

:::

## Scss 代码编译后的结果

:::details 最终 Scss 编译后的普通 CSS 结果

```css
.ScssColorModule {
  border: 1px dashed #000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ScssColorModule .btn_item:nth-of-type(1) {
  background: #0375d3;
  color: #fff;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
}
.ScssColorModule .btn_item:nth-of-type(1):hover {
  background: #0d90fc;
}
.ScssColorModule .btn_item:nth-of-type(1):active {
  background: #0259a1;
}
.ScssColorModule .btn_item:nth-of-type(1):disabled {
  background: #40a7fc;
  color: #a4d5fe;
}
.ScssColorModule .btn_item:nth-of-type(2) {
  background: #07e224;
  color: #fff;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
}
.ScssColorModule .btn_item:nth-of-type(2):hover {
  background: #24f840;
}
.ScssColorModule .btn_item:nth-of-type(2):active {
  background: #05b11c;
}
.ScssColorModule .btn_item:nth-of-type(2):disabled {
  background: #55fa6b;
  color: #b8fdc1;
}
.ScssColorModule .btn_item:nth-of-type(3) {
  background: #ecc309;
  color: #fff;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
}
.ScssColorModule .btn_item:nth-of-type(3):hover {
  background: #f7d331;
}
.ScssColorModule .btn_item:nth-of-type(3):active {
  background: #bb9a07;
}
.ScssColorModule .btn_item:nth-of-type(3):disabled {
  background: #f9de62;
  color: #fdf3c4;
}
.ScssColorModule .btn_item:nth-of-type(4) {
  background: #d81414;
  color: #fff;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
}
.ScssColorModule .btn_item:nth-of-type(4):hover {
  background: #ec3333;
}
.ScssColorModule .btn_item:nth-of-type(4):active {
  background: #a91010;
}
.ScssColorModule .btn_item:nth-of-type(4):disabled {
  background: #f06262;
  color: #f9bfbf;
}
.ScssColorModule .btn_item:nth-of-type(5) {
  background: #606267;
  color: #fff;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
}
.ScssColorModule .btn_item:nth-of-type(5):hover {
  background: #797b81;
}
.ScssColorModule .btn_item:nth-of-type(5):active {
  background: #47494d;
}
.ScssColorModule .btn_item:nth-of-type(5):disabled {
  background: #93959a;
  color: #c8c9cb;
}
```

:::

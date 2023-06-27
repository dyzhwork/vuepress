---
title: CSS文字下划线进入退出
date: 2023-06-27 16:04:15
permalink: /pages/b05d2c/
categories:
  - css
tags:
  -
---

## 将鼠标移入下面这段文字看效果

<style>
  .demo {
    font-size: 20px;
    width: 500px;
    line-height: 40px;
  }
  .demo span {
    background: linear-gradient(to right, red, green, blue) no-repeat right bottom;
    background-size: 0 3px;
    transition: background-size 1300ms;
  }
  .demo:hover span {
    background-position-x: left;
    background-size: 100% 3px;
  }
</style>
<div class="demo">
  <span>很多时间过后,你会发现你掌握的CSS只是冰山一角,你也永远学不会,确实我也是.当你很累很累很累很累的时候，你应该闭上眼睛做深呼吸!</span>
</div>

## 源代码

**只用 css 和 html 即可实现**

```html
<!-- css -->
<style>
  .demo {
    font-size: 20px;
    width: 500px;
    line-height: 40px;
  }
  .demo span {
    background: linear-gradient(to right, red, green, blue) no-repeat right bottom;
    background-size: 0 3px;
    transition: background-size 1300ms;
  }
  .demo:hover span {
    background-position-x: left;
    background-size: 100% 3px;
  }
</style>
<!-- html -->
<div class="demo">
  <span
    >很多时间过后,你会发现你掌握的CSS只是冰山一角,你也永远学不会,确实我也是.当你很累很累很累很累的时候，你应该闭上眼睛做深呼吸!</span
  >
</div>
```

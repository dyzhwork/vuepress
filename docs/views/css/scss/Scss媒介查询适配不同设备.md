---
title: Scss简化媒介查询适配不同终端设备
date: 2023-06-21 09:50:42
permalink: /pages/468d26/
categories:
  - css
  - scss
tags:
  -
---

## 实现效果

如果你要写类似这样的 CSS 代码,你有什么方式更简便?

```css
@media (min-width: 320px) and (max-width: 480px) {
  .box {
    height: 50px;
    font-size: 14px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .box {
    height: 60px;
    color: red;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .box {
    height: 70px;
    text-align: center;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .box {
    height: 80px;
    display: flex;
  }
}
@media (min-width: 1201px) {
  .box {
    height: 90px;
    height: 100vh;
  }
}
```

## Scss 混合功能代码

```scss
@mixin respond-to($breakname) {
  @if ($breakname== 'phone') {
    @media (min-width: 320px) and (max-width: 480px) {
      height: 50px;
    }
  } @else if($breakname== 'pad') {
    @media (min-width: 481px) and (max-width: 768px) {
      height: 60px;
    }
  }
}
.box {
  @include respond-to('phone');
  @include respond-to('pad');
}
```

:::details 点击查看编译 Scss 后的 CSS

```css
@media (min-width: 320px) and (max-width: 480px) {
  .box {
    height: 50px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .box {
    height: 60px;
  }
}
```

:::

## Scss 自定义传值-更为灵活

```scss
@mixin respond-to($breakname) {
  @if ($breakname== 'phone') {
    @media (min-width: 320px) and (max-width: 480px) {
      @content; // 接受传过来的值1
    }
  } @else if($breakname== 'pad') {
    @media (min-width: 481px) and (max-width: 768px) {
      @content; // 接受传过来的值2
    }
  }
}
.box {
  @include respond-to('phone') {
    height: 50px; // 自定义相关值1
  }
  @include respond-to('pad') {
    height: 60px; // 自定义相关值2
  }
}
```

:::details 点击查看编译 Scss 后的 CSS

```css
@media (min-width: 320px) and (max-width: 480px) {
  .box {
    height: 50px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .box {
    height: 60px;
  }
}
```

:::

## Scss 优化混合里面的 if-else-if

```scss {25-34}
// 定义断点列表
$breakPointList: (
  'phone': (
    320px,
    480px
  ),
  'pad': (
    481px,
    768px
  ),
  'notebook': (
    769px,
    1024px
  ),
  'desktop': (
    1025px,
    1200px
  ),
  'large-tv': (
    1201px
  )
);
@mixin respond-to($breakname) {
  // 下方高亮区域注释区域和未注释区域可替换,都能达到同样效果
  // 原始写法
  // $bpinfo: map-get(
  //   $map: $breakPointList,
  //   $key: $breakname
  // );
  // @if type-of($value: $bpinfo) == 'list' {

  // 简化写法
  $bpinfo: map-get($breakPointList, $breakname);
  @if type-of($bpinfo) == 'list' {
    $min: nth($bpinfo, 1);
    $max: nth($bpinfo, 2);
    @media (min-width: $min) and (max-width: $max) {
      @content;
    }
  } @else {
    @media (min-width: $bpinfo) {
      @content;
    }
  }
}
.box {
  @include respond-to('phone') {
    height: 50px;
    font-size: 14px;
  }
  @include respond-to('pad') {
    height: 60px;
    color: red;
  }
  @include respond-to('notebook') {
    height: 70px;
    text-align: center;
  }
  @include respond-to('desktop') {
    height: 80px;
    display: flex;
  }
  @include respond-to('large-tv') {
    height: 90px;
    height: 100vh;
  }
}
```

:::details 点击查看编译 Scss 后的 CSS

```css
@media (min-width: 320px) and (max-width: 480px) {
  .box {
    height: 50px;
    font-size: 14px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .box {
    height: 60px;
    color: red;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .box {
    height: 70px;
    text-align: center;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .box {
    height: 80px;
    display: flex;
  }
}
@media (min-width: 1201px) {
  .box {
    height: 90px;
    height: 100vh;
  }
}
```

:::

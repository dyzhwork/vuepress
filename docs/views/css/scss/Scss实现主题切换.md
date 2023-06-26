---
title: Scss实现主题切换
date: 2023-06-26 08:39:40
permalink: /pages/831c9b/
categories:
  - css
  - scss
tags:
  -
---

## 效果

<ScssChangeTheme/>

## 问题导入

切换主题一般 css 变量或者 less/scss.但是为了考虑兼容性,一般采用 less/scss.如果需要给下面的按钮添加一个样式:

```css
/* 和主题不相干的样式 */
.div_test {
  width: 100px;
  line-height: 100px;
  border: 1px solid red;
}
/* 和主题相关的样式 */

html[data-theme='light'] .div_test {
  background: pink;
  color: blue;
}
html[data-theme='dark'] .div_test {
  background: green;
  color: #fff;
}
```

<div class='div_test' style="width: 100px;  line-height: 100px;border: 1px solid red; background: pink; color: blue;">点击切换主题</div>
<script>
  var div_test = document.querySelector('.div_test')
  div_test.addEventListener('click', ()=>{
    if(div_test.style.background == 'green'){
      div_test.style.background="pink"
      div_test.style.color="blue"
    }else{
      div_test.style.background="green"
      div_test.style.color="#fff"
    }
  })
</script>

有没有发现几个问题:

- 其实很简单,能实现,但是这势必会造成所有需要切换主题的类都要来一遍上面的代码
- 非常恶心,累死人
- 维护性不高
- 容易弄错
- 冗余代码多

## Scss 实现上方代码

```scss
// 定义主题对象
$themes: (
  light: (
    bgColor: pink,
    textColor: blue
  ),
  dark: (
    bgColor: green,
    textColor: #fff
  )
);
// 写一个混合
@mixin useTheme() {
  /* 和主题相关的样式 */

  html[data-theme='light'] & {
    background: pink;
    color: blue;
  }
  html[data-theme='dark'] & {
    background: green;
    color: #fff;
  }
}
/* 和主题不相干的样式 */
.div_test {
  width: 100px;
  line-height: 100px;
  border: 1px solid red;
  @include useTheme();
}
```

:::details 最终编译后的 css

```css
@charset "UTF-8";
/* 和主题不相干的样式 */
.div_test {
  width: 100px;
  line-height: 100px;
  border: 1px solid red;
  /* 和主题相关的样式 */
}
html[data-theme='light'] .div_test {
  background: pink;
  color: blue;
}
html[data-theme='dark'] .div_test {
  background: green;
  color: #fff;
}
```

`这样做的好处`:**以后如果有其他类需要用到主题,只需要将 scss 里面的混合应用到目标类即可**
:::

## 代码优化

```scss
// 写一个混合
@mixin useTheme() {
  /* 和主题相关的样式 */

  html[data-theme='light'] & {
    background: pink;
    color: blue;
  }
  html[data-theme='dark'] & {
    background: green;
    color: #fff;
  }
}
```

如果有很多主题,那这个混合的代码将会很长,所以在该混合中应该使用循环来优化主题对象,并且通过函数获取相关的值,如下:

```scss{17-18}
// 定义一个变量记录当前循环的主题名称
$curTheme: light;
// 定义一个函数用于获取相应主题的相关值
@function getVar($key) {
  $themeMap: map-get(
    $map: $themes,
    $key: $curTheme
  );
  @return map-get($themeMap, $key);
}
// 主题混合
@mixin useTheme() {
  /* 和主题相关的样式 */
  @each $key, $value in $themes {
    $curTheme: $key !global;
    html[data-theme='#{$key}'] & {
      background: getVar('bgColor');
      color: getVar('textColor');
    }
  }
}
```

## 再优化

从上方的代码中不难看出,高亮的 17-18 行代码中已经将样式写死,也就是说只能是` background`和`color `,如果想添加其他样式也就不完美了,因此可以将混合处的代码再优化:

```scss
@mixin useTheme() {
  /* 和主题相关的样式 */
  @each $key, $value in $themes {
    $curTheme: $key !global;
    html[data-theme='#{$key}'] & {
      @content;
    }
  }
}
// 自定义传入混合内容
.div_test {
  width: 100px;
  line-height: 100px;
  border: 1px solid red;
  @include useTheme() {
    background: getVar('bgColor');
    color: getVar('textColor');
  }
}
```

:::details 这样以后其他的类用到主题可以动态传入自己想要的其他样式,比如:

```scss
.item {
  width: 100px;
  @include useTheme() {
    background: getVar('bgColor');
    color: getVar('textColor');
  }
}
.item1 {
  font-size: 20px;
  @include useTheme() {
    color: getVar('textColor');
  }
}
.item2 {
  height: 30px;
  @include useTheme() {
    background: getVar('bgColor');
  }
}
```

:::details 编译后的普通 css

```scss
.item {
  width: 100px;
  /* 和主题相关的样式 */
}
html[data-theme='light'] .item {
  background: pink;
  color: blue;
}
html[data-theme='dark'] .item {
  background: green;
  color: #fff;
}

.item1 {
  font-size: 20px;
  /* 和主题相关的样式 */
}
html[data-theme='light'] .item1 {
  color: blue;
}
html[data-theme='dark'] .item1 {
  color: #fff;
}

.item2 {
  height: 30px;
  /* 和主题相关的样式 */
}
html[data-theme='light'] .item2 {
  background: pink;
}
html[data-theme='dark'] .item2 {
  background: green;
}
```

:::

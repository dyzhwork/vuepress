---
title: Less语法
date: 2023-05-29 11:43:30
permalink: /pages/bf5b91/
categories:
  - css
  - less
tags:
---

## 一、声明变量

```less
@color001: #999;
@bgColor001: red;

#app {
  color: @color001;
  background: @bgColor001;
}
```

:::details 编译后的结果

```css
#app {
  color: #999;
  background: red;
}
```

:::

## 二、设置元素标签选择器的变量

比如为 a 标签设置变量

```html
<a href="http://wwww.baidu.ccc" target="_blank"></a>
```

```less
@btn: a;
@{btn}{
  color:red;
}
```

:::details 编译后的结果

```css
a {
  color: red;
}
```

:::

## 三、函数调用的方式

```less
// 定义变量
@fs14Colf10: {
  font-size: 14px;
  color: #f10;
  font-weight: bold;
  background: pink;
  border-radius: 5px;
};
// 使用变量
.btn_area {
  @fs14Colf10();
  // 自定义颜色
  background: green;
}
#fdfdfd {
  @fs14Colf10();
}
```

:::details 编译后的结果

```css
.btn_area {
  font-size: 14px;
  color: #f10;
  font-weight: bold;
  background: pink;
  border-radius: 5px;
  background: green;
}
#fdfdfd {
  font-size: 14px;
  color: #f10;
  font-weight: bold;
  background: pink;
  border-radius: 5px;
}
```

:::

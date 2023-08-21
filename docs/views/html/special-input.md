---
title: 特殊的input标签
date: 2023-08-18 17:30:36
permalink: /pages/62e6d7/
categories:
  - html
tags:
  -
---

<style>
  .mt20{
    
    margin-top:20px;
  }
  .styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
  box-shadow:
    inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
  background-color: rgba(255, 0, 0, 1);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
</style>

## 一、类型(`type`)为按钮(`button`)

<input class="favorite styled mt20" type="button" value="这是一个按钮" />
<br />
<input class="favorite styled mt20" type="button"  />

```html
<input class="favorite styled mt20" type="button" value="这是一个按钮" />
<br />
<!-- 没有值value -->
<input class="favorite styled mt20" type="button" />
```

## 二、类型(`type`)为多选框(`checkbox`)

### 相关属性表格

| 描述           | 代表字符串      |
| -------------- | --------------- |
| 事件           | change 和 input |
| 支持的常用属性 | checked         |
| 方法           | select()        |

### 举例

<fieldset class="mt20">
  <legend>比如,请选择功能:</legend>
  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">吃</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">喝</label>
  </div>
</fieldset>

### 代码

:::details 点击查看上方例子源码

```html
<fieldset class="mt20">
  <legend>比如,请选择功能:</legend>
  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">吃</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">喝</label>
  </div>
</fieldset>
```

:::
:::tip 注意

- 我们给每个复选框赋予了相同的 name。如果两个复选框都被选中，然后提交表单，你会得到这样一串键/值对：interest=coding&interest=music。当这个字符串到达服务器时，你需要把它解析成一个关联数组以外的东西，interest 的所有值都需要被捕获。

- 除了选中和未选中的状态外，复选框还有第三种状态：不确定。这是一种无法说清该选项是被打开还是关闭的状态。这是通过 JavaScript 设置的 HTMLInputElement 对象的 indeterminate 属性（它不能用 HTML 属性设置）。
  :::

## 三、类型(`type`)为颜色(`color`)

- color 类型的 `<input>` 元素为用户提供了指定颜色的用户界面，或使用可视化颜色选择器，或以 #rrggbb 十六进制格式输入颜色值。

- 虽然 CSS 颜色有很多格式（如颜色名称、功能表记和含有透明通道的十六进制），但是这里只支持简单颜色（无透明通道）。

- 此元素的外观会因浏览器不同而不同，它可能是一个简单的文本输入，自动验证以确保颜色信息以正确的格式输入，或一个平台标准的颜色选择器，或某种自定义的颜色选择器窗口。

### 举例

<p>请选择怪沙鸥颜色:</p>
<div>
  <label for="head">头部</label>
  <input type="color" id="head" name="head" value="#e66465" />
</div>

<div>
  <label for="body">主体</label>
  <input type="color" id="body" name="body" value="#f6b73c" />
</div>

:::details 源码

```html
<p>请选择怪沙鸥颜色:</p>
<div>
  <label for="head">头部</label>
  <input type="color" id="head" name="head" value="#e66465" />
</div>

<div>
  <label for="body">主体</label>
  <input type="color" id="body" name="body" value="#f6b73c" />
</div>
```

:::

## 四、类型(`type`)为日期(`date`)

type="date" 类型的`<input>`元素会创建一个让用户输入一个日期的输入区域，可以使用自动验证内容的文本框，也可以使用特殊的日期选择器界面。结果值包括年份，月份和日期，但不包括时间。time 和 datetime-local 类型支持时间和日期时间输入。

### 举例

<label for="start">开始日期:</label>
<input type="date" id="start" name="trip-start" min="2023-01-01" max="2023-12-31" />

## 五、类型(`type`)为日期和时间(`datetime-local`)

`<input>` 元素的 datetime-local 类型创建让用户便捷输入日期和时间的输入控件，包括“年”、“月”、“日”，以及“时”和“分”。

### 举例

<label for="meeting-time">选择约会时间:</label>
<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2023-06-12T19:30"
  min="2023-06-07T00:00"
  max="2023-06-14T00:00"
/>

## 六、类型(`type`)为邮箱地址(`email`)

"email" 类型的`<input>`元素能够让用户输入或编辑一个电子邮箱地址，如果指定了 multiple (en-US) 属性，则可以输入多个电子邮箱地址。

### 举例

<label for="email">输入你的邮箱地址:</label>

<input type="email" id="email" pattern=".+@globex\.com" size="30" required />

## 七、类型(`type`)为文件(`file`)

带有 type="file" 的`<input>`元素允许用户可以从他们的设备中选择一个或多个文件。选择后，这些文件可以使用提交表单的方式上传到服务器上，或者通过 Javascript 代码和文件 API 对文件进行操作。

### 举例

<label for="avatar">选择一张图片:</label>
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

## 八、类型(`type`)为用户不可见、不可改的数据(`hidden`)

hidden 类型的` <input>` 元素允许 Web 开发者包含用户不可见、不可改的数据，在用户提交表单时，这些数据会一并发送出。比如，正被请求或编辑的内容的 ID，或是一个唯一的安全令牌。这些隐藏的 input 元素在渲染完成的页面中完全不可见，而且没有方法可以使它重新变为可见。

### 举例

这儿隐藏了一个必须要提交的表单项:邮政编码.您看不进啊.
<input type="hidden" id="postId" name="postId" value="34657" />

```html
<input type="hidden" id="postId" name="postId" value="34657" />
```

## 九、类型(`type`)为图形化的提交按钮(`image`)

image 类型的` <input>` 元素用于创建图形化的提交按钮，即采用图像而非文本形式的提交按钮。

### 举例

<input type="image" id="image" alt="Login" src="https://img0.baidu.com/it/u=453568255,1647441996&fm=253&fmt=auto&app=138&f=JPEG?w=596&h=500" />

```html
<input
  type="image"
  id="image"
  alt="Login"
  src="https://img0.baidu.com/it/u=453568255,1647441996&fm=253&fmt=auto&app=138&f=JPEG?w=596&h=500"
/>
```

## 十、类型(`type`)为方便输入的年份或月份(`month`)

类型为 month 的` <input>` 可以让你容易地创建一个方便输入年份或月份的一个` <input>`。输入的值是一个经过“YYYY-MM”格式化的字符串，其中 YYYY 是四位数的年份，而 MM 是月份的数值表示。

### 举例

<label for="start">开始月份:</label>
<input type="month" id="start" name="start" min="2018-03" value="2018-05" />

```html
<label for="start">开始月份:</label>
<input type="month" id="start" name="start" min="2018-03" value="2018-05" />
```

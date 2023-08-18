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

## 四、类型(`type`)为日期(`date`)

## 五、类型(`type`)为日期和时间(`datetime-local`)

## 六、类型(`type`)为邮箱地址(`email`)

## 七、类型(`type`)为文件(`file`)

## 八、类型(`type`)为用户不可见、不可改的数据(`hidden`)

## 九、类型(`type`)为图形化的提交按钮(`image`)

## 十、类型(`type`)为方便输入的年份或月份(`month`)

```html

```

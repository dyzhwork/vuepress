---
title: 如何自定义全局指令
date: 2023-05-31 08:57:57
permalink: /pages/5e0834/
categories:
  - vuepress
tags:
  - 指令
---

## 一、实现方式

在客户端应用的增强配置文件`enhanceApp.js`文件中就可以自定义相关配置,自定义指令模板如下，可自行根据实际情况进行相关操作：

```js
// 客户端应用的增强
export default ({ Vue, options, router, siteData }) => {
  // 注册一个全局指令,示例
  Vue.directive('my-directive', {
    bind: function (el, binding) {
      // 绑定时的处理逻辑
      console.log('绑定时的处理逻辑', el, binding)
    },
    inserted: function (el, binding) {
      // 插入节点时的处理逻辑
      console.log('插入节点时的处理逻辑', el, binding)
    },
    update: function (el, binding) {
      // 更新节点时的处理逻辑
      console.log('更新节点时的处理逻辑', el, binding)
    },
    componentUpdated: function (el, binding) {
      // 完成组件更新时的处理逻辑
      console.log('完成组件更新时的处理逻辑', el, binding)
    },
    unbind: function (el, binding) {
      // 解绑时的处理逻辑
      console.log('解绑时的处理逻辑', el, binding)
    }
  })
}
```

:::tip 温馨提示
配置相关文件后，最好重新启动项目运行，方能看见效果
:::

## 二、钩子函数的解释

自定义指令中几个常用钩子函数及其参数的详细说明：

### 1、 bind(el, binding)

`只调用一次，在指令第一次绑定到元素时调用。el 是指令绑定的元素，binding 是一个对象，包含以下属性：`

- def: {bind: ƒ, inserted: ƒ, update: ƒ, componentUpdated: ƒ, unbind: ƒ}
- expression: 绑定值的表达式字符串。例如，如果指令的绑定值为 v-lazy="imageUrl"，那么 binding.expression 就是"imageUrl"。
- modifiers: {} 包含修饰符的对象。
- name: "lazy-src" 字符串，指令的名称（不包括"v-"前缀）。
- rawName: "v-lazy-src" 字符串，指令的名称（包括"v-"前缀）。
- value: "https://dyzhwork.github.io/images/vuecli/vuecli16.png"

### 2、 inserted(el, binding)

`在被绑定元素插入到父节点时调用，只触发一次。el 和 binding 的含义和 bind 钩子函数中的相同。`

### 3、 update(el, binding)

`在指令所在组件的 VNode 更新时调用，可能会调用多次。el 和 binding 的含义和 bind 钩子函数中的相同。`

### 4、 componentUpdated(el, binding)

`在被绑定元素所在模板完成一次更新周期时调用。el 和 binding 的含义和 bind 钩子函数中的相同。`

### 5、 unbind(el, binding)

`只调用一次，在指令与元素解绑时调用，用于进行一些清理工作。el 和 binding 的含义和 bind 钩子函数中的相同。`

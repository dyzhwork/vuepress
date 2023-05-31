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
// 客户端应用的增强基于Vue2.x版本
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

### 1、 bind(el,binding,vnode,oldVnode)

`bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。binding 是一个对象，包含以下属性：`

- rawName: "v-lazy-src" 字符串，指令的名称（包括"v-"前缀）。
- name：指令名，不包括 v- 前缀。
- value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
- oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
- expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
- arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
- modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

### 2、 inserted(el,binding,vnode,oldVnode)

`inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。只触发一次。el 和 binding 的含义和 bind 钩子函数中的相同。`

### 3、 update(el,binding,vnode,oldVnode)

`update:所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新，可能会调用多次。el 和 binding 的含义和 bind 钩子函数中的相同。`

### 4、 componentUpdated(el,binding,vnode,oldVnode)

`componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。el 和 binding 的含义和 bind 钩子函数中的相同。`

### 5、 unbind(el,binding,vnode,oldVnode)

`unbind：只调用一次，指令与元素解绑时调用。在指令与元素解绑时调用，用于进行一些清理工作。el 和 binding 的含义和 bind 钩子函数中的相同。`

---
title: VueX状态管理
date: 2023-05-31 08:14:09
permalink: /pages/a8c8af/
categories:
  - vue
tags:
  - vuex
---

## 一、什么是 Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
:::tip 点击下面链接查看相关文档
[与 Vue 3 匹配的 Vuex 4 的文档](https://vuex.vuejs.org/zh/index.html)

[与 Vue 2 匹配的 Vuex 3 的文档](https://v3.vuex.vuejs.org/zh/)
:::

## 二、什么是“状态管理模式”？

请看下面示例：（此处为 vue2 的写法参考）

```js
new Vue({
  // 状态-state
  data() {
    return {
      number: 0
    }
  },
  // 视图-view
  template: `<div>{{ number }}</div>`,
  // 操作-actions
  methods: {
    addOne() {
      this.number++
    }
  }
})
```

**这个状态自管理应用包含以下几个部分：**

- state，驱动应用的数据源；
- view，以声明方式将 state 映射到视图；
- actions，响应在 view 上的用户输入导致的状态变化。

以下是一个表示“单向数据流”理念的简单示意：

<img style="display: block; margin: auto; width: 40%;" v-lazy="'https://dyzhwork.github.io/images/VueX/vuex3.png'" />

但是，应用有多个组件共享状态时，单向数据流的简洁性很容易被破坏，因此 Vuex 借鉴了 Flux、Redux 和 The Elm Architecture。与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。

<img style="display: block; margin: auto; width: 75%;" v-lazy="'https://dyzhwork.github.io/images/VueX/vuex2.png'" />

## 三、什么情况下我应该使用 Vuex？

:::tip 官方是这样说的
Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式 (opens new window)就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：

> Flux 架构就像眼镜：您自会知道什么时候需要它。

:::

**实际开发中，根据实际情况而定，但为了使用方便，一般都会用，因为他确实解决了很多问题。**

## 四、Vuex 包含的几个核心模块

- **State**

  - Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
  - 单状态树和模块化并不冲突——在后面的章节里我们会讨论如何将状态和状态变更事件分布到各个子模块中。
  - 存储在 Vuex 中的数据和 Vue 实例中的 data 遵循相同的规则，例如状态对象必须是纯粹 (plain) 的。参考：[Vue#data](https://v2.cn.vuejs.org/v2/api/#data)。

- **Getter**
  - 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数,如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
  - Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
- **Mutation**
  - 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
- **Action**

  - Action 类似于 mutation，不同在于：
    1. Action 提交的是 mutation，而不是直接变更状态。
    2. Action 可以包含任意异步操作。
  - Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。

- **Module**
  - 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
  - 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

```js
const moduleA = {
  namespaced: true,
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  namespaced: true,
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

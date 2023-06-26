---
title: 基础知识
date: 2023-06-25 16:23:25
permalink: /pages/d39dc6/
categories:
  - javascript
tags:
  -
---

## 一、事件循环

事件循环相关必备基础知识前奏

## 二、浏览器进程模型

### 2.1 什么是进程

程序运行需要独立专属的内存空间,可以把这块内存空间简单的理解为进程,每个应用至少一个进程,且相互独立,即使要通信,也需要双方同意.

### 2.2 什么是线程

#### 主线程

一个`进程`至少一个`线程`,在`进程`开启后自动创建一个线程来运行代码,该线程就是`主线程`

#### 多线程

如果程序需要同时执行多块代码,`主线程`将会自动启动`更多的线程`来执行代码,所以一个**`进程`**可以有多个线程

### 2.3 浏览器有哪些进程和线程

浏览器是一个多线程,多进程的应用程序.(开发浏览器,操作系统等)

- 浏览器进程
  负责界面展示,用户交互,子进程管理等
- 网络进程
  负责加载网络资源,网络进程内部会启动多个线程来处理不同的网络任务
- 渲染进程(重点)
  - 渲染进程启动后,会开启一个`渲染主线程`,主线程负责执行 HTML,CSS,JS 代码.
  - 默认情况下,浏览器会为每一个新的标签页开启一个渲染进程,以保证不同标签页之间不相互影响.

## 三、渲染主线程是如何工作的

浏览器中最繁忙的线程就是渲染主线程,需要他处理的任务包括但不限于:

- 解析 HTML
- 解析 CSS
- 计算样式
- 布局
- 处理图层
- 每秒把页面画 50 次
- 执行全局 JS 代码
- 执行事件处理函数
- 执行计时器处理回调函数
- ....................

:::tip 问:为什么渲染进程不适合用多个线程来处理这些事情?
:::

### 3.1 如何调度任务

要处理这么多的任务，主线程遇到了一个前所未有的难题：如何调度任务？

比如：

- 我正在执行一个 JS 函数，执行到一半的时候用户点击了按钮，我该立即去执行点击事件的处理函数吗？
- 我正在执行一个 JS 函数，执行到一半的时候某个计时器到达了时间，我该立即去执行它的回调吗？
- 浏览器进程通知我"用户点击了按钮”，与此同时，某个计时器也到达了时间，我应该处理哪一个呢？
- ................

### 3.2 排队

染主线程想出了一个绝妙的主意来处理这个问题：排队

- `渲染主线程`->**无限持续执行**
- `消息队列(message queue)`->**一个一个的任务一次排队执行,任务来自其他线程**(w3c:事件循环)

1. 在最开始的时候，染主线程会进入一个无限循环
2. 每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。
3. 其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾。在添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务

**这样一来，就可以让每个任务有条不紊的、持续的进行下去了。整个过程，被称之为事件循环 (消息循环)**

## 四、何为异步

代码在执行过程中，会遇到一些无法立即处理的任务，比如：

- 计时完成后需要执行的任务--setTimeout、setInterval
- 网络通信完成后需要执行的任务--XHR、Fetch
- 用户操作后需要执行的任务--addEventListener

如果让染主线程等待这些往务的时机达到，就会导致主线程长期处于「阻塞」的状态，从而导致浏览器「卡死]

### 4.1 同步异步

:::details 面试题：如何理解 JS 的异步？

1. JS 是一门单线程的语言，**`这是因为它运行在浏览器的渲染主线程中`**，而渣染主线程只有一个,且渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。如果使用同步的方式，就**极有可能导致主线程产生阻塞**，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面**会导致繁忙的主线程白白的消耗时间**，另一方面**导致页面无法及时更新，给用户造成卡死现象**。
2. 所以**浏览器采用异步的方式来避免**。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，**`将事先传递的回调函数包装成任务`**，**加入到消息队列的末尾排队，等待主线程调度执行**。在这种异步模式下，**`浏览器永不阻塞`**，从而最大限度的保证了单线程的流畅运行。

:::

### 4.1 事件执行优先级

:::tip 事件执行

- 渲染主线程->无限循环执行

- 微队列 -------------->任务排队**优先级最高**
- 交互队列 ------------>任务排队**优先级高**`要及时响应用户操作`
- 延时队列 ------------>任务排队**优先级中**

:::

### 4.2 事件循环相关问题

:::details 面试题：阐述一下 JS 的事件循环

- 事件循环又叫做消息循环，是浏览器染主线程的工作方式。
- 在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。
- 过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。
- 根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

:::

:::details 面试题：JS 中的计时器能做到精确计时吗？为什么？

不行，因为：

1. 计算机硬件没有原子钟，无法做到精确计时
2. 操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这 些偏差
3. 按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样 在计时时间少于 4 毫秒时又带来了偏差
4. 受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差

:::

### 4.3 总结

:::tip 单线程是异步产生的原因
:::
:::tip 事件循环是异步的实现方式
:::
---
title: 什么是原型和原型链
date: 2023-08-23 08:19:34
permalink: /pages/b2cbca/
categories:
  - javascript
tags:
  -
---

## 为什么是原型和原型链

- 对象的继承：
  面向对象编程很重要的一个方面，就是对象的继承。A 对象通过继承 B 对象，就能直接拥有 B 对象的所有属性和方法。这对于代码的复用是非常有用的。
- 基于原型（prototype）的继承
  大部分面向对象的编程语言，都是通过“类”（class）实现对象的继承。JS 语言的继承不通过 class，而是通过“原型对象”(prototype)实现，ES6 当中有“类”的继承，但是本质还是通过“原型对象”(prototype)实现。

## 构造函数的缺点

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.eat = function () {
    console.log('吃饭')
  }
}
var p1 = new Person('小明', 16)
var p2 = new Person('小花', 19)
console.log(p1)
console.log(p2)
console.log(p1.eat === p2.eat) // false

// console.log(p2);
// pl.eat()
// p2.eat()
// console.log(pl.eat === p2.eat); //
console.dir(Person)
// 隐式原型和显式原型
console.dir(p1.__proto__) // 隐式原型
console.dir(Person.prototype) // 显式原型
// 原型对象的属性和方法，可以被实例对象共享，不仅节省了内存，还体现了
// 实例对象之间的联系。
console.log(p1.__proto__ === Person.prototype) // true
```

:::tip
各属性值不同是可以接受的，因为不同实例对象的属性值基本是不同的。可是方法却是一样的，可是方法也不能在不同实例之间共享，每个每生成一个实例对象，就要创建一个同样行为的方法，这样就造成了资源浪费。
:::

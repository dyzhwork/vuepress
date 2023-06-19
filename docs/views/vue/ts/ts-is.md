---
title: TS是什么
date: 2023-05-31 08:19:29
permalink: /pages/d0cf9c/
categories:
  - ts
tags:
  -
---

## TS 是什么

1. 定位静态语言，如：C,Java 等。写代码阶段就检查错误，而非动态语言。
2. 有一定的学习成本，需要了解接口，泛型，类等。
3. ts 最终还是会被编译成 js

ts 是 js 的超集,主要学习类容,原始类型,字面量类型,数组类型,函数类型,类类型,接口类型,类型别名,联合交叉类型,枚举类型,泛型等类型,以及类型推断,类型断言,类型缩小,类型放大等特性.

## 安装 ts

```shell
pnpm add -g typescript
```

## 检测安装成功与否

```shell
PS D:> tsc -v
Version 5.1.3
```

## 初始化项目配置文件

```shell
tsc init
```

## 定义变量

```ts
let str = '1'
str = 2 // 报错
```

## 编译成 js

```shell
tsc 文件名称
```

## 检测文件改变后再编译

```shell
tsc -p tsconfig.json --watch
```

```ts
let str = '1' // 类型是值的类型
const con = 1 // 值是什么,类型就是什么
```

## ts 原始类型

ts 原始类型就是 js 的基础数据类型,如下:

- number
- string
- object
- boolean
- undefined
- null
- symbol

## 定义数据

```ts
let str1: string = 'hello'
let num1: number = 1
let bool1: boolean = true
let und1: undefined = undefined
let nul1: null = null
let sy1: symbol = Symbol('123')
let vo1: void = undefined // 定义函数返回值
```

## 非原始数据类型

` object`,`Object`,`{} `

```ts
let str1: string = 'hello' //报错 ,ts 数据默认在全局,需要在 ts 文件中添加默认导出的内容`export {}`
let str2: string = 'word'
```

`object`类型包含`object`和`array`,但不含基本数据类型,`Object`也是一样,但不同的是它包含基本数据类型,同理`{}`也是和`Object`一样包含基本数据类型.
:::tip 温馨提示
通常情况下,会使用 object,而不是用 Object 或者{},原因很简单,都包含所有数据类型,那不就等于没有限制嘛.
:::

## 定义数组类型

**第一种写法**

```ts
let arr1: number[] = [1, 13, 14, 15, 16, 17, 18]
arr1[0] = 20
// arr1[1] = '20' // 报错
```

**第二种写法**

泛型:类型参数化

```ts
let arr2: Array<number> = [12, 13, 14, 15, 16, 17]
```

**第三种写法**

元组方式定义,必须按照顺序

```ts
let arr3: [number, number, boolean] = [1, 2, true]
let arr3: [number, number, boolean] = [1, false, true] // 报错number位置给了false
```

## 联合类型

数据中有各种基本数据类型

```ts
let strOrNumber: string | number = 11
strOrNumber = 'hello'
```

## 交叉类型

```ts
let v1: number & string & boolean // 一般不这样写,因为没有同时满足这个类型的数据
```

但是用在合并对象验证必须类型同时成立,比如定义一个人的相关信息:

```ts
let obj: { name: string; age: number } & { height: number }
obj = { name: '张三', age: 23, height: 1.65 } // 同时有定义数据的三种类型
```

## any 和 unknown

- 不推荐使用 any,因为定义了 any 会直接绕过类型校验,但是写与不写 any 类型是有区别的,没写就是初始值的类型,写了就是 any 类型
- unknown 不会绕过类型校验

```ts
let v2: any = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let v3: unknown = [1, 2, 3, 4, 5, 6]
```

## 自定义类型(接口类型)

推荐大写开头,比如:

```ts
interface MyInter {
  name: string
  age: number
  height: number
}

let userInfo: MyInter

userInfo = {
  name: 'John',
  age: 12,
  height: 1.6
}
```

接口可以用来自定义给数组,函数,对象定义类型.

## 继承

```ts
interface NameItf {
  name: string
}

interface AgeItf {
  age: number
}

// PersonInfoItf接口继承NameItf, AgeItf
interface PersonInfoItf extends NameItf, AgeItf {
  height: number
}

// 定义对象
let p: PersonInfo

// 为对象赋值,三个属性缺一不可
p = {
  name: '张三',
  age: 12,
  height: 1.6
}
```

:::tip 温馨提示
接口可以重名,但是重名会合并所有属性类型
:::
比如:下方示例,

```ts
interface AItf {
  a: number
}

interface AItf {
  b: number
}

// 此时,如果定义一个对象
let obj: AItf

// 如果尝试给obj赋值,需注意此时obj类型接口已经合并a,b属性,二者缺一不可,如:
obj = {
  a: 12,
  b: 18
}

// 报错,缺少b属性
obj = {
  a: 12
}
// 报错,缺少a属性
obj = {
  b: 18
}
```

此时如果要解决上述问题,确实 `b` 属性可以有,也可以没有,所以这个时候需要给 b 属性在定义接口的时候添加缺省符号`?`

```ts
interface AItf {
  b?: number
}

// 再次赋值,正常
obj = {
  a: 12,
  b: 18
}

// 正常
obj = {
  a: 12
}
```

如果某个属性不允许二次赋值改变,可以添加`readonly`修饰,比如:

```ts
interface AItf {
  readonly a: number
}

interface AItf {
  b?: number
}

// 此时,如果定义一个对象
let obj: AItf

// 如果尝试给obj赋值,需注意此时obj类型接口已经合并a,b属性,二者缺一不可,如:
obj = {
  a: 12,
  b: 18
}
// 此时改变a的值
obj.a = 1 //报错属性只允许读取
```

## 联合交叉类型

```ts
// 写成这样
let userInfo: { name: string } & { age: number } | { gender: string } & { name: string }
// 实际是这样,会自动添加括号
let userInfo: ({ name: string } & { age: number }) | ({ gender: string } & { name: string })

// 此时赋值变量,只能是完整满足其中一个,比如
userInfo = {
  name: 'John',
  age: 15
}
// 或者
userInfo = {
  name: 'John',
  gender: '男'
}
// 以下均报错
userInfo = {
  name: 'John',
  age: 15,
  gender: '男'
}
userInfo = {
  age: 15,
  gender: '男'
}
userInfo = {
  gender: '男'
}
userInfo = {
  name: 'John'
}
userInfo = {
  age: 15
}
```

## 类型别名

```ts
type StrOrNumber = string | number | boolean
// 定义变量
let str1: StrOrNumber = 1
// 或者
str1 = true
// 或者
str1 = '1'

// 对象类型别名
type ObjType = {
  a: number & 2
  b: string
}

// 需要注意的是对象类型别名不支持合并,但实际上就是自定义类型,和接口有相似的地方
let obj: ObjType = {
  a: 2,
  b: 'John'
}
```

## 函数形参

```ts
function foo(a: number, b: number) {
  return a + b
}
// 接口定义函数类型
interface FunItf{
  (a: number; b: number): number
}

let doSomeThing: FunItf = (a: number; b: number)=>{
  return 12
}
// 运行函数
doSomeThing(12,56)
```

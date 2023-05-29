---
title: 数组的相关操作方法
date: 2023-05-24 16:46:06
permalink: /pages/4ef430/
categories:
  - javascript
  - ES6
tags:
  - 数组
---

## 一、[数组的简介](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

在 JavaScript 中数组是用于储存多个相同类型数据的集合。与其他编程语言中的数组一样，Array 对象支持在单个变量名下存储多个元素，并具有执行常见数组操作的成员。

### 1.1 什么是数组

在 JavaScript 中，数组不是基本类型，而是具有以下核心特征的 Array 对象：

- JavaScript 数组是可调整大小的，并且可以包含不同的数据类型。（当不需要这些特征时，可以使用类型化数组。）
- JavaScript 数组不是关联数组，因此，不能使用任意字符串作为索引访问数组元素，但必须使用非负整数（或它们各自的字符串形式）作为索引访问。
- JavaScript 数组的索引从 0 开始：数组的第一个元素在索引 0 处，第二个在索引 1 处，以此类推，最后一个元素是数组的 length 属性减去 1 的值。
- JavaScript 数组复制操作创建浅拷贝。（所有 JavaScript 对象的标准内置复制操作都会创建浅拷贝，而不是深拷贝）。
- 数组（Array）是有序的元素序列。 若将有限个类型相同的变量的集合命名，那么这个名称为数组名。组成数组的各个变量称为数组的分量，也称为数组的元素，有时也称为下标变量。用于区分数组的各个元素的数字编号称为下标。数组是在程序设计中，为了处理方便， 把具有相同类型的若干元素按有序的形式组织起来的一种形式。 这些有序排列的同类数据元素的集合称为数组。

```js
typeof arr // Object
Object.prototype.toString.call(arr) // [Object Array]
```

### 1.3 怎么定义数组

1. 字面量方法，分别使用 var，let，const 定义

```js
var arr = [] //推荐
let arr = [] //推荐
const arr = [] //推荐
```

2. 构造函数创建，分别使用 var，let，const 定义

```js
var arr = new Array() // 如果只传一位参数，那么就会当成长度处理，而不是第 1 位的值,如果只有一个参数（arrayLength）且其值不在 0 到 232 - 1（包括）之间，则会触发异常。
let arr = new Array(10) // [empty × 10]
const arr = new Array(10, 2) // [10, 2]
```

## 二、数组的相关属性

### 2.1 [Array[@@species]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species)

Array[@@species] 是一个静态访问器属性，用于返回构造函数，构造函数用于构造数组方法返回值。
:::warning 警告
@@species 的存在允许执行任意代码，这可能会产生安全漏洞。它还会使某些优化变得更加困难。引擎开发者正在调查是否要移除此特性。如果可能，请避免依赖它。现代数组方法，如 toReversed()，不使用 @@species 且始终返回一个新的 Array 基类实例。
:::

### 2.2 [Array.prototype[@@unscopables]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables)

Array.prototype 的 @@unscopables 数据属性被所有 Array 实例共享。它包含在 ES2015 版本之前 ECMAScript 标准中未收纳的属性名，并且这些属性被排除在由 with 语句绑定的环境中。
:::tip 值
`一个 null 原型对象，包含下面给出的属性名称，且它们的值都设置为 true。`
:::

### 2.3 Array：length

length 是 Array 的实例属性，表示该数组中元素的个数,`一个小于 2**32 的非负整数。`。该值是一个无符号 32 位整数，并且其数值总是大于数组最大索引。

## 三、数组的常用方法

### 3.1 Array.prototype.at()

at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

#### 试一试

```javascript
const array1 = [5, 12, 8, 130, 44]
let index = 2

console.log(`索引 ${index} 对应的值是 ${array1.at(index)}`) // "索引 2 对应的值是 8"
index = -2
console.log(`索引 ${index}对应的值是 ${array1.at(index)}`) // "索引 -2对应的  值是130"
```

#### 参数

1. index: 要返回的数组元素的索引（从零开始），会被转换为整数。负数索引从数组末尾开始计数——如果 index < 0，则会访问 index + array.length 位置的元素。

#### 返回值

返回数组中与给定索引匹配的元素。如果 index < -array.length 或 index >= array.length，则总是返回 undefined，而不会尝试访问相应的属性。

### 3.2 Array.prototype.concat()

concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```js
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)

console.log(array3)
// 输出: Array ["a", "b", "c", "d", "e", "f"]
```

### 3.3 Array.prototype.every()

every() 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。

```js
const isBelowThreshold = (currentValue) => currentValue < 40

const array1 = [1, 30, 39, 29, 10, 13]

console.log(array1.every(isBelowThreshold))
// 输出: true
```

### 3.4 Array.prototype.fill()

fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。

```js
const array1 = [1, 2, 3, 4]

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4))
// 输出: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1))
// 输出: Array [1, 5, 5, 5]

console.log(array1.fill(6))
// 输出: Array [6, 6, 6, 6]
```

### 3.5 Array.prototype.filter()

filter() 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter((word) => word.length > 6)

console.log(result)
// 输出: Array ["exuberant", "destruction", "present"]
```

### 3.6 Array.prototype.find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

如果需要在数组中找到对应元素的索引，请使用 findIndex()。
如果需要查找某个值的索引，请使用 Array.prototype.indexOf()。（它类似于 findIndex()，但只是检查每个元素是否与值相等，而不是使用测试函数。）
如果需要查找数组中是否存在某个值，请使用 Array.prototype.includes()。同样，它检查每个元素是否与值相等，而不是使用测试函数。
如果需要查找是否有元素满足所提供的测试函数，请使用 Array.prototype.some()。

```js
const array1 = [5, 12, 8, 130, 44]

const found = array1.find((element) => element > 10)

console.log(found)
// 输出: 12
```

### 3.7 Array.prototype.findIndex()

findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

另请参阅 find() 方法，它返回满足测试函数的第一个元素（而不是它的索引）。
findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

另请参阅 find() 方法，它返回满足测试函数的第一个元素（而不是它的索引）。

```js
const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = (element) => element > 13

console.log(array1.findIndex(isLargeNumber))
// 输出: 3
```

### 3.8 Array.prototype.findLast()

findLast() 方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回 undefined。

如果你需要找到：

第一个匹配的元素，使用 find()。
数组中最后一个匹配元素的索引，使用 findLastIndex()。
某个值的索引，使用 indexOf()。（它类似于 findIndex()，但是会检查每个元素是否与值相等，而不是使用一个测试函数。）
该数组中是否存在一个值，使用 includes()。同样地，它检查每个元素是否和值相等，而不是使用一个测试函数。
是否有任意一个元素满足提供的测试函数，使用 some()。

findLast() 方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回 undefined。

如果你需要找到：

第一个匹配的元素，使用 find()。
数组中最后一个匹配元素的索引，使用 findLastIndex()。
某个值的索引，使用 indexOf()。（它类似于 findIndex()，但是会检查每个元素是否与值相等，而不是使用一个测试函数。）
该数组中是否存在一个值，使用 includes()。同样地，它检查每个元素是否和值相等，而不是使用一个测试函数。
是否有任意一个元素满足提供的测试函数，使用 some()。

```js
const array1 = [5, 12, 50, 130, 44]

const found = array1.findLast((element) => element > 45)

console.log(found)
// 输出: 130
```

### 3.9 Array.prototype.findLastIndex()

findLastIndex() 方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回 -1。

另请参见 findLast() 方法，该方法返回最后一个满足测试函数的元素的值（而不是它的索引）。

```js
const array1 = [5, 12, 50, 130, 44]

const isLargeNumber = (element) => element > 45

console.log(array1.findLastIndex(isLargeNumber))
// 输出: 3
// Index of element with value: 130
```

### 3.10 Array.prototype.forEach()

forEach() 方法对数组的每个元素执行一次给定的函数。

```js
const array1 = ['a', 'b', 'c']

array1.forEach((element) => console.log(element))

// 输出: "a"
// 输出: "b"
// 输出: "c"
```

### 3.11 Array.from()

Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

转换异步的可迭代对象到数组，可以使用 Array.fromAsync()。

```js
console.log(Array.from('foo'))
// 输出: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x))
// 输出: Array [2, 4, 6]
```

### 3.12 Array.prototype.includes()

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

```js
const array1 = [1, 2, 3]

console.log(array1.includes(2))
// 输出: true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))
// 输出: true

console.log(pets.includes('at'))
// 输出: false
```

### 3.13 Array.prototype.indexOf()

indexOf() 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison'))
// 输出: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2))
// 输出: 4

console.log(beasts.indexOf('giraffe'))
// 输出: -1
```

### 3.14 Array.isArray()

Array.isArray() 静态方法用于确定传递的值是否是一个 Array。

```js
console.log(Array.isArray([1, 3, 5]))
// 输出: true

console.log(Array.isArray('[]'))
// 输出: false

console.log(Array.isArray(new Array(5)))
// 输出: true

console.log(Array.isArray(new Int16Array([15, 33])))
// 输出: false
```

### 3.15 Array.prototype.join()

join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

```js
const elements = ['Fire', 'Air', 'Water']

console.log(elements.join())
// 输出: "Fire,Air,Water"

console.log(elements.join(''))
// 输出: "FireAirWater"

console.log(elements.join('-'))
// 输出: "Fire-Air-Water"
```

### 3.16 Array.prototype.keys()

keys() 方法返回一个新的数组迭代器 (en-US)对象，其中包含数组中每个索引的键。

```js
const array1 = ['a', 'b', 'c']
const iterator = array1.keys()

for (const key of iterator) {
  console.log(key)
}

// 输出: 0
// 输出: 1
// 输出: 2
```

### 3.17 Array.prototype.lastIndexOf()

lastIndexOf() 方法返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1。该方法从 fromIndex 开始向前搜索数组。

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

console.log(animals.lastIndexOf('Dodo'))
// 输出: 3

console.log(animals.lastIndexOf('Tiger'))
// 输出: 1
```

### 3.18 Array.prototype.map()

map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

```js
const array1 = [1, 4, 9, 16]

// Pass a function to map
const map1 = array1.map((x) => x * 2)

console.log(map1)
// 输出: Array [2, 8, 18, 32]
```

### 3.19 Array.of()

Array.of() 静态方法通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。

```js
console.log(Array.of('foo', 2, 'bar', true))
// 输出: Array ["foo", 2, "bar", true]

console.log(Array.of())
// 输出: Array []
```

### 3.20 Array.prototype.pop()

pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop())
// 输出: "tomato"

console.log(plants)
// 输出: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop()

console.log(plants)
// 输出: Array ["broccoli", "cauliflower", "cabbage"]
```

### 3.21 Array.prototype.push()

push() 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

```js
const animals = ['pigs', 'goats', 'sheep']

const count = animals.push('cows')
console.log(count)
// 输出: 4
console.log(animals)
// 输出: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs')
console.log(animals)
// 输出: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

### 3.22 Array.prototype.reduce()

reduce() 方法对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）。

下面的例子能够帮助你理解 reduce() 的用处——计算数组所有元素的总和：

```js
const array1 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
)

console.log(sumWithInitial)
// 输出: 10
```

### 3.23 Array.prototype.reverse()

reverse() 方法就地反转数组中的元素，并返回同一数组的引用。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。换句话说，数组中的元素顺序将被翻转，变为与之前相反的方向。

要在不改变原始数组的情况下反转数组中的元素，使用 toReversed()。

```js
const array1 = ['one', 'two', 'three']
console.log('array1:', array1)
// 输出: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse()
console.log('reversed:', reversed)
// 输出: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1)
// 输出: "array1:" Array ["three", "two", "one"]
```

### 3.24 Array.prototype.shift()

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

```js
const array1 = [1, 2, 3]

const firstElement = array1.shift()

console.log(array1)
// 输出: Array [2, 3]

console.log(firstElement)
// 输出: 1
```

### 3.25 Array.prototype.slice()

slice() 方法返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），其中 start 和 end 代表了数组元素的索引。原始数组不会被改变。

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
// 输出: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// 输出: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// 输出: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// 输出: Array ["duck", "elephant"]

console.log(animals.slice(2, -1))
// 输出: Array ["camel", "duck"]

console.log(animals.slice())
// 输出: Array ["ant", "bison", "camel", "duck", "elephant"]
```

### 3.26 Array.prototype.some()

some() 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。它不会修改数组。

```js
const array = [1, 2, 3, 4, 5]

// Checks whether an element is even
const even = (element) => element % 2 === 0

console.log(array.some(even))
// 输出: true
```

### 3.27 Array.prototype.sort()

sort() 方法就地对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

由于它取决于具体实现，因此无法保证排序的时间和空间复杂度。

如果想要不改变原数组的排序方法，可以使用 toSorted()。

```js
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
// 输出: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000]
array1.sort()
console.log(array1)
// 输出: Array [1, 100000, 21, 30, 4]
```

### 3.28 Array.prototype.splice()

splice() 方法通过移除或者替换已存在的元素和/或添加新元素就地改变一个数组的内容。

要创建一个删除和/或替换部分内容而不改变原数组的新数组，请使用 toSpliced()。要访问数组的一部分而不修改它，参见 slice()。

```js
const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
// Inserts at index 1
console.log(months)
// 输出: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May')
// Replaces 1 element at index 4
console.log(months)
// 输出: Array ["Jan", "Feb", "March", "April", "May"]
```

### 3.29 Array.prototype.toString()

toString() 方法返回一个字符串，表示指定的数组及其元素。

```js
const array1 = [1, 2, 'a', '1a']

console.log(array1.toString())
// 输出: "1,2,a,1a"
```

### 3.30 Array.prototype.unshift()

unshift() 方法将指定元素添加到数组的开头，并返回数组的新长度。

```js
const array1 = [1, 2, 3]

console.log(array1.unshift(4, 5))
// 输出: 5

console.log(array1)
// 输出: Array [4, 5, 1, 2, 3]
```

### 3.31 Array.prototype.values()

values() 方法返回一个新的数组迭代器 (en-US)对象，该对象迭代数组中每个元素的值。

```js
const array1 = ['a', 'b', 'c']
const iterator = array1.values()

for (const value of iterator) {
  console.log(value)
}

// 输出: "a"
// 输出: "b"
// 输出: "c"
```

### 3.32 Array.prototype.with()

Array 实例的 with() 方法是使用方括号表示法修改指定索引值的复制方法版本。它会返回一个新数组，其指定索引处的值会被新值替换。

```js
const arr = [1, 2, 3, 4, 5]
console.log(arr.with(2, 6)) // [1, 2, 6, 4, 5]
console.log(arr) // [1, 2, 3, 4, 5]
```

```js
const arr = [1, 2, 3, 4, 5]
console.log(arr.with(2, 6).map((x) => x ** 2)) // [1, 4, 36, 16, 25]
```

## 四、数组不常用方法

### 4.1 Array.prototype`[`@@iterator`]`()

### 4.2 Array.prototype.copyWithin()

### 4.3 Array.prototype.entries()

### 4.4 Array.prototype.flat()

### 4.5 Array.prototype.flatMap()

### 4.6 Array.fromAsync()实验性

### 4.7 Array.prototype.group()实验性

### 4.8 Array.prototype.groupToMap()实验性

### 4.9 Array.prototype.reduceRight()

### 4.10 Array.prototype.toLocaleString()

### 4.11 Array.prototype.toReversed()

### 4.12 Array.prototype.toSorted()

### 4. Array.prototype.toSpliced()

<!--
### 3.1 Array.from && newSet()

去重利器

### 3.2 Array.filter(callback)

数组过滤

### Array.every(callback)

数组中所有元素都符合条件时，返回 true

### Array.some(callback)

数组中有元素符合条件时，返回 true

### Array.find(callback)

返回数组中符合条件的第一个元素，若不符合返回 undefined

### Array.findIndex(callback)

返回数组中符合条件的第一个元素索引，若不符合返回-1

### Array.includes(item, finIndex)

判断数组中是否包含某元素，若存在返回 true，不存在返回 false。finIndex(选填)，表示开始查找的索引，默认为 0。

### Array.map(callback)

根据你的条件对数据进行处理，返回一个新的数组。

### Array.reduce(callback)

可以对数组进行累加累乘等

### ...扩展运算符

可以很方便的合并数组

## -->

```

```

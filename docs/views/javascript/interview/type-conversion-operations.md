---
title: 类型转换和运算
date: 2023-07-03 09:26:47
permalink: /pages/3bde7f/
categories:
  - javascript
  - interview
tags:
  -
---

## 面试题一

```js
var a=?
// 请给出变量a的值,使得下面的日志打印出:你真棒
if (a==1&& a==2&& a==3&& a==4&& a==5&& a==6){
  console.log('你真棒')
}else{
  console.log('要继续努力哦')
}
```

**温馨提示,运算规则的理解**

原始数据类型不可能同时等于不同的数据,因此该变量`a`只能是对象,如果一个对象和原始类型数据比较,会将对象转换为原始数据(调用 `valueOf`,然后 `toString`)

<style>
  textarea{
    min-width:100%;
    max-width:100%;
    height:200px;
    min-height:100px;
    max-height:300px;
  }
</style>
<textarea id='textarea'>

</textarea>
<!-- 点击检测结果 -->
<button class='button_one'>点击检测结果</button>
<!-- 显示结果 -->
<span class='result_one'></span>
<script>
  let textarea=document.querySelector('textarea')
  let button=document.querySelector('.button_one')
  let result=document.querySelector('.result_one')
  let str=''
  let strCode
  button.addEventListener('click',function(){
    if(textarea.value.trim()==''){
      console.log(1111111111111111)
      str='请输入相关代码'
      alert(str)
      result.innerText=str
      return
    }
   strCode = textarea.value + `
    if (a==1&& a==2&& a==3&& a==4&& a==5&& a==6){
      str='你真棒'
    }else{
      str='要继续努力哦'
    }`
    try{
      eval(strCode)
    }catch(e){
    console.log(e)
      str='请检测你写的代码语法'
      alert(str)
    }
    result.innerText=str
  })
</script>

:::details 参考答案

```js
var a = {
  n: 1,
  valueOf: () => {
    return a.n++
  }
}
```

:::

## 面试题二

```js
console.log(([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]])
```

:::details 参考答案

```js
console.log(([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]])
//  []转成原始是:''
console.log(([][''] + '')[+!![]] + ('' + {})[+!![] + +!![]])
// []['']数组的某一项[''],没有这一项所以值为undefined
console.log((undefined + '')[+!![]] + ('' + {})[+!![] + +!![]])
// {}转为原始类型
console.log((undefined + '')[+!![]] + ('' + '[object Object]')[+!![] + +!![]])
// !![],空数组取反再取反为真,+!![]变成数字1
console.log(undefined[1] + ('' + '[object Object]')[1 + 1])
console.log(undefined[1] + '[object Object]'[2])
console.log('n' + 'b')
// nb(牛逼)
```

:::

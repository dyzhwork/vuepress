---
title: 组件命名
date: 2023-06-02 09:36:35
permalink: /pages/85d31a/
categories:
  - vue
tags:
  - skill
---

## 一、Vue2 组件命名

直接在`.vue文件中的script`标签内暴露的对象里面写即可,`如下方代码第4行`：

```vue {4}
<script>
exports default{
  // 自定义组件名称-比如Test
  name: 'Test',
}
</script>
```

## 二、Vue3 组件命名

在 vue3 中，如果要给组件命名，主要看采用的 API 风格是那种 API 风格。

### 1. 兼容 vue2 的选项式 API 风格（VOA：vue-option-api）

由于 vue3 采用更新的 `setup` 语法糖编写以及 `compositionAPI` 风格，在写代码时，通常是这样的风格:

如果是这样的选项 setup 函数，那也很容易命名：比如在`export default{`内部添加即可，比如下方代码第 `3`行为组件命名为`Test`：

```vue {3}
<script>
export default {
  name: 'Test',
  setup() {
    const userInfo = reactive({
      name: '张三',
      age: 12
    })
    // 返回值:userInfo会暴露给模板和其他的选项式 API 钩子
    return {
      userInfo
    }
  }
}
</script>
```

但是如果是采用`setup`语法糖写，像下面这样的，那就没有地方写了，

```vue
<script setup>
import { reactive } from 'vue'
const userInfo = reactive({
  name: '张三',
  age: 12
})
</script>
```

这种情况只有在增加一个`script`标签，采用`vue2的选项式API`为组件命名:比如下方代码第 `10`行为组件命名为`Test`：

```vue {10}
<script setup>
import { reactive } from 'vue'
const userInfo = reactive({
  name: '张三',
  age: 12
})
</script>
<script>
export default {
  name: 'Test'
}
</script>
```

### 2.采用 vue3 新式的组合式 API 风格（VCA：vue-composition-api）

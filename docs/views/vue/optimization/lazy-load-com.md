---
title: 延迟加载组件
date: 2023-08-11 16:58:05
permalink: /pages/e4f768/
categories:
  - vue
tags:
  -
---

## 延迟加载组件

## 效果

<!-- 使用延迟加载 -->

**使用延迟加载**
<Vue-LazyLoadComp ></Vue-LazyLoadComp>

<!-- 重要API -->

## 重要 API

[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)

<!--  -->

## 实现源代码

:::details 父组件

```vue
<template>
  <div class="LazyLoadComp">
    <div v-for="item in 210">
      <HeavyComp v-if="defer(item)"></HeavyComp>
    </div>
  </div>
</template>
<script>
import HeavyComp from './HeavyComp.vue'
export default {
  name: 'LazyLoadComp',
  components: { HeavyComp },
  data() {
    return {
      frameCount: 0
    }
  },
  mounted() {
    const refreshFrameCount = (maxFrameCount = 210) => {
      requestAnimationFrame(() => {
        this.frameCount++
        if (this.frameCount < maxFrameCount) {
          refreshFrameCount()
        }
      })
    }
    refreshFrameCount(201)
  },
  methods: {
    defer(curCount) {
      return this.frameCount >= curCount
    }
  }
}
</script>
<style lang="scss" scoped>
.LazyLoadComp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  overflow: auto;
  height: 500px;
  & > div {
    border: 2px solid red;
  }
}
</style>
```

:::

:::details 子组件

```vue
<template>
  <div class="HeavyComp">
    <div class="item" v-for="item in 5000"></div>
  </div>
</template>
<script>
export default {
  name: 'HeavyComp'
}
</script>
<style lang="scss" scoped>
.HeavyComp {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-between;

  .item {
    width: 5px;
    height: 2px;
    background: #ccc;
  }
}
</style>
```

:::

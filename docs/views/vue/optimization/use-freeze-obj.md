---
title: 使用对象冻结
date: 2023-08-11 16:00:01
permalink: /pages/a38b58/
categories:
  - vue
tags:
  -
---

## 使用冻结对象实现优化

针对某些不需要修改,只需要展示的数据进行冻结处理将会收到很好的效果!比如本文将在下面的示例中处理 `1000000` 条数据,并统计这 `1000000` 条数据的总数显示在页面上.

## 效果

<Vue-FreezeObj></Vue-FreezeObj>

## 案例

如果你点击正常对象按钮获取数据,那么有可能造成浏览器奔溃,如下图:

<img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Optimize/optimize001.png'" />

## 源代码

:::details 点击查看源代码

```vue
<template>
  <div class="FreezeObj">
    <div class="action">
      <button @click="loadFreezeData">冻结对象</button>
      <button @click="loadNormalData">正常对象</button>
    </div>
    <!-- 内容显示 -->
    <div class="content">
      <h4 class="freeze_obj">冻结对象数据条数:{{ freezeData.length }}</h4>
      <h4 class="normal_obj">正常获取数据条数:{{ normalData.length }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FreezeObj',
  data() {
    return {
      freezeData: [],
      normalData: []
    }
  },
  methods: {
    // 加载冻结对象数据
    loadFreezeData() {
      this.freezeData = Object.freeze(this.getDataList())
      console.log('加载冻结对象数据', this.freezeData)
    },
    // 加载正常数据
    async loadNormalData() {
      const res = confirm('如果你的电脑性能不是太好,点击"确定"按钮可能会造成浏览器奔溃!')
      if (res) {
        this.freezeData = this.getDataList()
        console.log('加载正常数据', this.freezeData)
      }
    },
    getDataList() {
      const dataList = []
      for (let index = 0; index < 1000000; index++) {
        dataList.push({
          id: index,
          name: `name${index}`,
          address: {
            city: `city${index}`,
            province: `province${index}`
          }
        })
      }
      return dataList
    }
  }
}
</script>
<style lang="scss" scoped>
.FreezeObj {
  padding-top: 20px;
  .action {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .content {
    .freeze_obj {
      color: blue;
    }
    .normal_obj {
      color: red;
    }
  }
}
</style>
```

:::

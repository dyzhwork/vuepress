---
title: 普通表格
date: 2023-06-15 17:25:28
permalink: /pages/e1788f/
categories:
  - echarts
tags:
  -
---

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Table/table001.gif'"/>

## 代码

```vue
<template>
  <div class="TableArea">
    <div class="container">
      <div class="thead">
        <div class="th">姓名</div>
        <div class="th">性别</div>
        <div class="th">年龄</div>
        <div class="th">住址</div>
      </div>
      <vueSeamless class="seamless_warp" :data="dataSource" :class-option="defaultOption">
        <div class="tbody" v-for="(item, index) in dataSource" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
          <span>{{ item.gender }}</span>
          <span>{{ item.address }}</span>
        </div>
      </vueSeamless>
    </div>
  </div>
</template>

<script>
// 引用第三方vue无限滚动列表库
import vueSeamless from 'vue-seamless-scroll'
export default {
  name: 'TableArea',
  components: { vueSeamless },
  data() {
    return {
      dataSource: [],
      columns: [
        { title: '姓名', dataIndex: 'name' },
        { title: '性别', dataIndex: 'gender' },
        { title: '年龄', dataIndex: 'age' },
        { title: '住址', dataIndex: 'address' }
      ]
    }
  },
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      for (let index = 0; index < 7; index++) {
        const obj = {
          name: `姓名${index + 1}`,
          gender: '男',
          age: '12',
          address: '这是地址'
        }
        this.dataSource.push(obj)
      }
    }
  },
  computed: {
    defaultOption() {
      return {
        step: 1,
        limitMoveNum: 7,
        hoverStop: true,
        direction: 1,
        openWatch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 1000
      }
    }
  }
}
</script>
<style lang="less" scoped>
.TableArea {
  height: 260px;
  padding: 10px 5px;
  .container {
    overflow: hidden;
    height: 100%;
    .thead {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      line-height: 32px;
      background: rgba(40, 88, 169, 0.2);
      .th {
        padding: 0 20px;
      }
    }
    .seamless_warp {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .tbody {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        line-height: 32px;
        &:nth-of-type(odd) {
          background: rgba(40, 88, 169, 0.06);
        }
        &:nth-of-type(even) {
          background: rgba(40, 88, 169, 0.2);
        }
        & > span {
          padding: 0 20px;
        }
      }
    }
  }
}
</style>
```

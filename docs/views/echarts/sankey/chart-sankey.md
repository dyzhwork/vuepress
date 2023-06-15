---
title: 桑基图
date: 2023-06-15 17:09:30
permalink: /pages/ef37e4/
categories:
  - echarts
tags:
  -
---

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Sankey/sankey001.gif'"/>

## 代码

```vue
<template>
  <div class="SankeyArea" id="SankeyArea"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'SankeyArea',
  data() {
    return {
      Nodes: [],
      Links: []
    }
  },
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('SankeyArea'))

      myChart.setOption({
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'sankey',
            data: [
              { name: '1_1号数据', itemStyle: { color: '#497AFF' } },
              { name: '2_1号数据', itemStyle: { color: '#89C4FD' } },
              { name: '2_2号数据', itemStyle: { color: '#CA89FD' } },
              { name: '3_1号数据', itemStyle: { color: '#FFE03F' } },
              { name: '3_2号数据', itemStyle: { color: '#89FDD6' } },
              { name: '4_1号数据', itemStyle: { color: '#F27E7E' } },
              { name: '4_2号数据', itemStyle: { color: '#93E1ED' } },
              { name: '4_3号数据', itemStyle: { color: '#FEE056' } },
              { name: '4_4号数据', itemStyle: { color: '#CA8762' } },
              { name: '4_5号数据', itemStyle: { color: '#ADD76F' } },
              { name: '4_6号数据', itemStyle: { color: '#6992C3' } },
              { name: '4_7号数据', itemStyle: { color: '#887CBC' } },
              { name: '4_8号数据', itemStyle: { color: '#F27EB2' } },
              { name: '4_9号数据', itemStyle: { color: '#85D5BA' } },
              { name: '4_10号数据', itemStyle: { color: '#AC78CD' } }
            ],
            links: [
              { source: '1_1号数据', target: '2_1号数据', value: 100 },
              { source: '1_1号数据', target: '2_2号数据', value: 120 },
              { source: '2_1号数据', target: '3_1号数据', value: 50 },
              { source: '2_1号数据', target: '3_2号数据', value: 50 },
              { source: '2_2号数据', target: '3_1号数据', value: 70 },
              { source: '2_2号数据', target: '3_2号数据', value: 50 },
              { source: '3_1号数据', target: '4_1号数据', value: 24 },
              { source: '3_1号数据', target: '4_2号数据', value: 24 },
              { source: '3_1号数据', target: '4_3号数据', value: 24 },
              { source: '3_1号数据', target: '4_4号数据', value: 24 },
              { source: '3_1号数据', target: '4_5号数据', value: 24 },
              { source: '3_2号数据', target: '4_6号数据', value: 20 },
              { source: '3_2号数据', target: '4_7号数据', value: 20 },
              { source: '3_2号数据', target: '4_8号数据', value: 20 },
              { source: '3_2号数据', target: '4_9号数据', value: 20 },
              { source: '3_2号数据', target: '4_10号数据', value: 20 }
            ],
            top: '8%',
            left: '2%',
            right: '12%',
            bottom: '5%',
            nodeWidth: 11,
            lineStyle: {
              color: 'source',
              opacity: 0.3
            },
            layoutIterations: 0,
            label: {
              color: '#fff',
              fontFamily: 'SourceHanSansCN',
              fontSize: 14
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.SankeyArea {
  height: 360px;
}
</style>
```

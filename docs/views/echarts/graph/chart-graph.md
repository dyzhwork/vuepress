---
title: 关系图
date: 2023-06-15 17:16:09
permalink: /pages/266089/
categories:
  - echarts
tags:
  -
---

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Graph/graph001.gif'"/>

## 代码

```vue
<template>
  <div class="GraphArea" id="GraphArea"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'GraphArea',
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('GraphArea'))
      myChart.setOption({
        tooltip: {},
        series: [
          {
            name: '数据展示',
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 300,
              edgeLength: 60
            },
            focusNodeAdjacency: true,
            roam: true,
            label: { show: true, color: '#fff' },
            lineStyle: {
              opacity: 0.9,
              width: 2,
              color: '#00C4E1'
            },

            left: '10%',
            top: '15%',
            right: '10%',
            bottom: '10%',
            data: [
              {
                name: '数据1_1',
                symbolSize: 50,
                category: '数据1_1',
                draggable: 'true',
                value: 23,
                category: 4
              },
              {
                name: '数据1_2',
                symbolSize: 50,
                category: '数据1_2',
                draggable: 'true',
                value: 24,
                category: 4
              },
              {
                name: '数据1_3',
                symbolSize: 50,
                category: '数据1_3',
                draggable: 'true',
                value: 25,
                category: 4
              },
              {
                name: '数据1_4',
                symbolSize: 50,
                category: '数据1_4',
                draggable: 'true',
                value: 26,
                category: 4
              },
              {
                name: '数据1_5',
                symbolSize: 50,
                category: '数据1_5',
                draggable: 'true',
                value: 27,
                category: 4
              },
              {
                name: '数据1_6',
                symbolSize: 50,
                category: '数据1_6',
                draggable: 'true',
                value: 27,
                category: 4
              },
              {
                name: '数据1_7',
                symbolSize: 50,
                category: '数据1_7',
                draggable: 'true',
                value: 27,
                category: 4
              },
              {
                name: '数据1_8',
                symbolSize: 50,
                category: '数据1_8',
                draggable: 'true',
                value: 27,
                category: 4
              },
              {
                name: '数据3_1',
                symbolSize: 50,
                category: '数据3_1',
                draggable: 'true',
                value: 28,
                category: 5
              },
              {
                name: '数据3_2',
                symbolSize: 50,
                category: '数据3_2',
                draggable: 'true',
                value: 29,
                category: 5
              },
              {
                name: '数据3_3',
                symbolSize: 50,
                category: '数据3_3',
                draggable: 'true',
                value: 30,
                category: 5
              },
              {
                name: '数据3_4',
                symbolSize: 50,
                category: '数据3_4',
                draggable: 'true',
                value: 31,
                category: 5
              },
              {
                name: '数据3_5',
                symbolSize: 50,
                category: '数据3_5',
                draggable: 'true',
                value: 31,
                category: 5
              },
              {
                name: '数据3_6',
                symbolSize: 50,
                category: '数据3_6',
                draggable: 'true',
                value: 31,
                category: 5
              },
              {
                name: '数据3_7',
                symbolSize: 50,
                category: '数据3_7',
                draggable: 'true',
                value: 31,
                category: 5
              },
              {
                name: '数据3_8',
                symbolSize: 50,
                category: '数据3_8',
                draggable: 'true',
                value: 31,
                category: 5
              },
              {
                name: '数据',
                symbolSize: 80,
                category: '数据',
                draggable: 'true',
                x: 390,
                y: 155,
                fixed: true,
                value: 120,
                category: 0
              },
              {
                name: '数据1',
                symbolSize: 80,
                category: '数据1',
                draggable: 'true',
                x: 150,
                y: 170,
                fixed: true,
                value: 125,
                category: 1
              },
              {
                name: '数据2',
                symbolSize: 50,
                category: '数据2',
                draggable: 'true',
                value: 20,
                category: 3
              },
              {
                name: '数据3',
                symbolSize: 80,
                category: '数据3',
                draggable: 'true',
                x: 630,
                y: 170,
                fixed: true,
                value: 118,
                category: 2
              },
              {
                name: '数据4',
                symbolSize: 50,
                category: '数据4',
                draggable: 'true',
                value: 25,
                category: 3
              },

              {
                name: '数据5',
                symbolSize: 50,
                category: '数据5',
                draggable: 'true',
                value: 32,
                category: 3
              },
              {
                name: '数据6',
                symbolSize: 50,
                category: '数据6',
                draggable: 'true',
                value: 20,
                category: 3
              },
              {
                name: '数据7',
                symbolSize: 50,
                category: '数据7',
                draggable: 'true',
                value: 20,
                category: 3
              },
              {
                name: '数据8',
                symbolSize: 50,
                category: '数据8',
                draggable: 'true',
                value: 20,
                category: 3
              },
              {
                name: '数据9',
                symbolSize: 50,
                category: '数据9',
                draggable: 'true',
                value: 20,
                category: 3
              },
              {
                name: '数据10',
                symbolSize: 50,
                category: '数据10',
                draggable: 'true',
                value: 20,
                category: 3
              }
            ],
            links: [
              { source: '数据1', target: '数据1_1' },
              { source: '数据1', target: '数据1_2' },
              { source: '数据1', target: '数据1_3' },
              { source: '数据1', target: '数据1_4' },
              { source: '数据1', target: '数据1_5' },
              { source: '数据1', target: '数据1_6' },
              { source: '数据1', target: '数据1_7' },
              { source: '数据1', target: '数据1_8' },
              { source: '数据3', target: '数据3_1' },
              { source: '数据3', target: '数据3_2' },
              { source: '数据3', target: '数据3_3' },
              { source: '数据3', target: '数据3_4' },
              { source: '数据3', target: '数据3_5' },
              { source: '数据3', target: '数据3_6' },
              { source: '数据3', target: '数据3_7' },
              { source: '数据3', target: '数据3_8' },
              { source: '数据', target: '数据1' },
              { source: '数据', target: '数据2' },
              { source: '数据', target: '数据3' },
              { source: '数据', target: '数据4' },
              { source: '数据', target: '数据5' },
              { source: '数据', target: '数据6' },
              { source: '数据', target: '数据7' },
              { source: '数据', target: '数据8' },
              { source: '数据', target: '数据9' },
              { source: '数据', target: '数据10' }
            ],
            // 二级配色数据，有顺序讲究
            categories: [
              { name: '中间数据', itemStyle: { color: '#01AE55' } },
              { name: '左边数据', itemStyle: { color: '#1754F5' } },
              { name: '右边数据', itemStyle: { color: '#C23030' } },
              { name: '中间数据子项', itemStyle: { color: '#00BD7E' } },
              { name: '左边数据子项', itemStyle: { color: '#1C6AF0' } },
              { name: '右边数据子项', itemStyle: { color: '#EB5353' } }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.GraphArea {
  height: 330px;
}
</style>
```

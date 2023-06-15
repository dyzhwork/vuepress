---
title: 普通饼图
date: 2023-06-15 17:19:34
permalink: /pages/658305/
categories:
  - echarts
tags:
  -
---

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Pie/pie001.gif'"/>

## 代码

```vue
<template>
  <div class="PieArea" id="PieArea"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'PieArea',
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('PieArea'))
      myChart.setOption({
        legend: {
          orient: 'vertical',
          left: '20',
          top: 'center',
          itemWidth: 14,
          itemHeight: 14,
          textStyle: {
            color: '#fff'
          }
        },
        color: ['#00BD7E', '#FFA254', '#00C4E1', '#1754F5'],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '60%'],
            left: '5%',
            avoidLabelOverlap: false,
            label: {
              show: true,
              formatter(param) {
                return param.percent * 2 + '%'
              },
              color: '#A1C3FF',
              fontSize: 14
            },
            data: [
              { value: 1048, name: '三七' },
              { value: 735, name: '中药' },
              { value: 1810, name: '西药' },
              { value: 784, name: '止咳' }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.PieArea {
  height: 300px;
}
</style>
```

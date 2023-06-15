---
title: 漏斗图
date: 2023-06-15 17:05:56
permalink: /pages/85251c/
categories:
  - echarts
tags:
  -
---

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Funnel/funnel001.gif'"/>

## 代码

```vue
<template>
  <div class="FunnelArea" id="FunnelArea"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'FunnelArea',
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('FunnelArea'))
      myChart.setOption({
        color: ['#0A56EB', '#1C6AF0', '#2F78F5', '#3FA7F4', '#3FCEF4'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          right: '10%',
          bottom: '10%',
          orient: 'vertical',
          icon: 'rect',
          itemGap: 16,
          itemWidth: 14,
          itemHeight: 14,
          textStyle: {
            fontSize: 14,
            color: '#fff',
            rich: {
              name: {
                width: 55
              }
            }
          },
          data: ['急支糖浆', '止痛片', '软膏', '创可贴', '云南包药']
        },
        calculable: true,
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            gap: 0,
            itemStyle: {
              borderWidth: 0
            },
            label: {
              show: false,
              position: 'inside',
              emphasis: {
                position: 'inside',
                formatter: '{b}:{c}',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            data: [
              { value: 100, name: '急支糖浆' },
              { value: 80, name: '止痛片' },
              { value: 60, name: '软膏' },
              { value: 40, name: '创可贴' },
              { value: 20, name: '云南包药' }
            ],
            top: '15%',
            left: '5%',
            right: '40%',
            height: '78%'
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.FunnelArea {
  height: 300px;
}
</style>
```

---
title: 散点图
date: 2023-06-15 17:12:55
permalink: /pages/6ce0f4/
categories:
  - echarts
tags:
  -
---

## 一个获取过去十天日期的工具函数

```js
// 获取过去多少天的日期数组,默认不传则是10天,格式为01-01(一月一日)
export function getPassDay(length = 10, fmt = 'MM-DD') {
  const DataList = []
  dayjs.locale('zh-cn')
  const now = dayjs()
  for (let i = length - 1; i >= 0; i--) {
    const date = now.subtract(i, 'day').format(fmt)
    DataList.push(date)
  }
  return DataList
}
```

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Scatter/scatter001.gif'"/>

## 代码

```vue
<template>
  <div class="ScatterArea" id="ScatterArea"></div>
</template>

<script>
import * as echarts from 'echarts'
// 需要自己写一个获取过去十天日期的工具函数或者参考本文提供的函数
import { getPassDay } from '@/utils/util.js'
export default {
  name: 'ScatterArea',
  data() {
    return {
      xData: []
    }
  },

  mounted() {
    this.xData = getPassDay()
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('ScatterArea'))
      myChart.setOption({
        grid: {
          left: '10%',
          bottom: '15%',
          right: '1%'
        },
        legend: {
          show: true,
          left: 'center',
          top: 20,
          itemGap: 60,
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        tooltip: {
          show: true
        },
        xAxis: {
          data: this.xData,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#113F99'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#A1C3FF',
            interval: 0,
            fontSize: 14,
            fontFamily: 'SourceHanSansCN'
          }
        },
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              color: '#A1C3FF',
              fontSize: 14,
              fontFamily: 'SourceHanSansCN'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#0D3075'
              }
            }
          }
        ],
        series: [
          {
            name: '采购项',
            type: 'scatter',
            barWidth: 20,
            data: [90, 100, 98, 97.3, 16, 26, 43, 90, 59, 84, 80, 73]
          },
          {
            name: '目提报',
            type: 'scatter',
            barWidth: 20,
            data: [12, 66, 33, 23.3, 34, 67, 27, 58, 56, 91, 28, 37]
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.ScatterArea {
  height: 290px;
}
</style>
```

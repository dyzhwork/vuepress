---
title: 柱状图
date: 2023-05-23 14:19:19
permalink: /pages/c01355/
categories:
  - echarts
tags:
  - 统计图
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

## 效果图 001

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Bar/bar001.gif'"/>

## 代码

```vue
<template>
  <div class="BarArea" id="BarArea"></div>
</template>

<script>
import * as echarts from 'echarts'
// 需要自己写一个获取过去十天日期的工具函数或者参考本文提供的函数
import { getPassDay } from '@/utils/util.js'
export default {
  name: 'BarArea',
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
      var myChart = echarts.init(document.getElementById('BarArea'))
      myChart.setOption({
        legend: {
          show: true,
          textStyle: {
            color: '#fff'
          },
          data: [
            {
              name: '',
              icon: 'rect'
            },
            {
              name: ''
            }
          ]
        },
        tooltip: {
          show: true
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '5%',
          bottom: '15%'
        },
        xAxis: {
          data: this.xData,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(66, 164, 255,0.3)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#A1C3FF',
            fontSize: 14,
            fontFamily: 'SourceHanSansCN',
            interval: 0
          }
        },
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#A1C3FF',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'SourceHanSansCN'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0D3075',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '采购项目提报',
            type: 'bar',
            barWidth: 20,
            zlevel: 2,
            itemStyle: {
              normal: {
                color: '#5597FF'
              }
            },
            label: {
              normal: {
                show: true,
                fontSize: 13,
                color: '#14B6F3',
                position: 'top',
                fontFamily: 'SourceHanSansCN'
              }
            },
            barWidth: 12,
            data: [90, 100, 98, 97.3, 96, 96, 93, 90.9, 89, 84, 80, 73]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.BarArea {
  height: 300px;
}
</style>
```

## 效果图 002

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Bar/bar002.gif'"/>

## 代码

```vue
<template>
  <div class="BarArea" id="BarArea"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarArea',
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('BarArea'))
      myChart.setOption({
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '5%',
          containLabel: true
        },
        tooltip: {
          show: true,
          formatter: '{b}<br/>{c}%',
          textStyle: {
            fontWeight: 'bold',
            fontSize: 14,
            fontFamily: 'SourceHanSansCN'
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              color: '#A1C3FF',
              fontSize: 15,
              fontFamily: 'SourceHanSansCN'
            },

            axisLine: {
              show: true,
              lineStyle: {
                color: '#113F99',
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            data: [
              '东方航空',
              '南方航空',
              '上海航空',
              '卡塔尔航空',
              '顺丰航空',
              '圆通航空',
              '海南航空',
              '汉莎航空',
              '全日航',
              '韩国航空'
            ]
          }
        ],
        xAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            max: 100,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            name: '',
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#A1C3FF',
                fontSize: 14,
                fontFamily: 'SourceHanSansCN'
              },
              interval: 0,
              formatter: (value) => value / 100
            }
          }
        ],
        series: [
          {
            type: 'bar',
            stack: '1',
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.data >= 60) {
                    return '#E63F3F'
                  } else if (params.data >= 30) {
                    return '#F8911A'
                  } else {
                    return '#5597FF'
                  }
                }
              }
            },
            data: [50, 90, 15, 80, 20, 20, 15, 10, 40, 20]
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.BarArea {
  height: 420px;
}
</style>
```

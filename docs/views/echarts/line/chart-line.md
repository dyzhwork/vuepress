---
title: 折线图
date: 2023-06-14 17:55:49
permalink: /pages/320253/
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

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Line/line001.gif'"/>

## 代码

```vue
<template>
  <div class="LineArea">
    <div class="top">
      <div class="item">数据数据：1234566</div>
      <div class="item">数据数据：177766</div>
      <div class="item">数据数据：4666</div>
    </div>
    <div id="graphArea"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
// 需要自己写一个获取过去十天日期的工具函数或者参考本文提供的函数
import { getPassDay } from '@/utils/util.js'
export default {
  name: 'LineArea',
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
      let colors = ['rgba(11, 255, 177, 1)', 'rgba(45, 173, 255, 1)']
      var myChart = echarts.init(document.getElementById('graphArea'))
      myChart.setOption({
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(1, 13, 19, 0.5)',
          borderWidth: 0,
          axisPointer: {
            lineStyle: {
              color: 'rgba(11, 208, 241, 1)',
              type: 'slider'
            }
          },
          textStyle: {
            color: 'rgba(212, 232, 254, 1)',
            fontSize: 12
          }
        },
        legend: {
          top: '8%',
          textStyle: {
            color: 'rgba(212, 232, 254, 1)',
            fontSize: 12
          },
          itemWidth: 20,
          itemHeight: 14,
          data: ['待排查', '已排查', '待处置', '已处置']
        },
        grid: {
          top: '25%',
          left: '10%',
          right: '6%',
          bottom: '15%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#113F99'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#A1C3FF',
                padding: 5,
                fontSize: 14,
                fontFamily: 'SourceHanSansCN'
              },
              formatter: function (data) {
                return data
              },
              interval: 0
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#192a44'
              }
            },
            axisTick: {
              show: false
            },
            data: this.xData
          }
        ],
        yAxis: [
          {
            splitLine: {
              lineStyle: {
                color: '#113F99',
                type: 'dashed'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              fontFamily: 'SourceHanSansCN',
              textStyle: {
                color: '#A1C3FF',
                fontSize: 14
              },
              formatter: function (value) {
                if (value === 0) {
                  return value
                }
                return value
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '待排查',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: colors[0]
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: colors[0],
              borderColor: '#646ace',
              borderWidth: 0
            },
            tooltip: {
              show: true
            },
            data: [20, 22, 21, 28, 26, 30, 24, 22, 21, 40, 35, 38]
          },
          {
            name: '已排查',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: colors[1]
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: colors[1],
              borderColor: '#646ace',
              borderWidth: 0
            },
            tooltip: {
              show: true
            },
            data: [30, 28, 26, 25, 28, 31, 35, 38, 40, 45, 56, 60]
          },
          {
            name: '待处置',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: '#FF6262'
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: '#FF6262',
              borderColor: '#646ace',
              borderWidth: 0
            },
            tooltip: {
              show: true
            },
            data: [32, 30, 24, 23, 28, 33, 35, 32, 45, 42, 58, 62]
          },
          {
            name: '已处置',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: '#FFA200'
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: '#FFA200',
              borderColor: '#646ace',
              borderWidth: 0
            },
            tooltip: {
              show: true
            },
            data: [40, 30, 46, 45, 48, 41, 45, 48, 41, 42, 66, 63]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.LineArea {
  padding-top: 18px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      line-height: 30px;
      padding: 0 12px;
      background: rgba(40, 88, 169, 0.2);
    }
  }
  #graphArea {
    height: 300px;
  }
}
</style>
```

## 效果图 002

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Line/line002.gif'"/>

## 代码

```vue
<template>
  <div class="LineArea" id="LineArea"></div>
</template>

<script>
import * as echarts from 'echarts'
import { randomNumber, getPassDay } from '@/utils/util.js'
export default {
  name: 'LineArea',
  data() {
    return {
      yData: [],
      xData: []
    }
  },
  mounted() {
    // 模拟数据
    this.xData = getPassDay(50)
    for (let index = 0; index < 50; index++) {
      let value = null
      if (index % 2 == 0) {
        value = randomNumber(300, 1000)
      } else {
        value = randomNumber(1000, 2000)
      }
      this.yData.push(value)
    }
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('LineArea'))
      myChart.setOption({
        tooltip: { trigger: 'axis' },
        grid: {
          top: '10%',
          left: '8%',
          right: '2%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: '#113F99'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#A1C3FF',
            fontSize: 14,
            fontFamily: 'SourceHanSansCN',
            fontWeight: '400',
            interval: 6
          }
        },
        yAxis: {
          axisLabel: {
            color: '#A1C3FF',
            fontSize: 14,
            fontFamily: 'SourceHanSansCN',
            fontWeight: '400'
          },
          splitLine: {
            lineStyle: {
              color: '#0D3075',
              type: 'dashed'
            }
          }
        },
        //超出标准线颜色
        visualMap: [
          {
            show: false,
            type: 'piecewise',
            splitNumber: 4,
            pieces: [
              { lte: 800, color: '#FFAD00' },
              { gt: 800, lte: 1100, color: '#FF6400' },
              { gt: 1100, lte: 1400, color: '#E82220' },
              { gt: 1400, lte: 1700, color: '#E000FF' },
              { gt: 1700, color: '#D82F7F' }
            ]
          }
        ],
        series: [
          {
            symbol: 'none',
            data: this.yData,
            type: 'line'
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.LineArea {
  height: 300px;
}
</style>
```

## 效果图 003

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Line/line003.gif'"/>

## 代码

```vue
<template>
  <div class="LineArea" id="LineArea"></div>
</template>

<script>
import * as echarts from 'echarts'
import { getPassDay } from '@/utils/util.js'
export default {
  name: 'LineArea',
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
      var myChart = echarts.init(document.getElementById('LineArea'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: 'rgb(126,199,255)'
            }
          }
        },
        legend: {
          show: false
        },
        grid: {
          top: '12%',
          left: '10%',
          right: '5%',
          bottom: '15%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#113F99'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#A1C3FF',
                fontSize: 14,
                fontFamily: 'SourceHanSansCN'
              },
              interval: 0
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: this.xData
          }
        ],
        yAxis: [
          {
            name: '',
            nameTextStyle: {
              color: '#fff',
              fontSize: 12,
              padding: [0, 60, 0, 0]
            },
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0D3075',
                type: 'dashed'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#A1C3FF',
                fontSize: 14,
                fontFamily: 'SourceHanSansCN'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: '#F8911A'
              }
            },
            itemStyle: {
              normal: {
                color: '#F8911A',
                label: {
                  show: true,
                  color: '#fff',
                  position: 'top',
                  formatter: (res) => {
                    if (res.value) {
                      return res.value
                    } else {
                      return 0
                    }
                  }
                }
              }
            },
            symbolSize: 4,
            data: [1510, 465, 1440, 1570, 2480, 615, 510, 1465, 2480, 440, 570, 1615]
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.LineArea {
  height: 270px;
}
</style>
```

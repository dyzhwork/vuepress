---
title: 仪表图
date: 2023-06-15 17:00:25
permalink: /pages/9e7bf3/
categories:
  - views
  - echarts
  - gauge
tags:
  -
---

## 效果图

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Gauge/gauge001.gif'"/>

## 代码

```vue
<template>
  <div class="GaugeArea" id="GaugeArea"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'GaugeArea',
  mounted() {
    this.getGraphData()
  },
  methods: {
    getGraphData() {
      var myChart = echarts.init(document.getElementById('GaugeArea'))
      myChart.setOption({
        tooltip: {},
        legend: {
          bottom: '5%',
          left: 'center',
          itemWidth: 14,
          itemHeight: 14,
          icon: 'rect',
          data: ['较大', '一般', '其他'],
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '中间刻度表盘',
            type: 'gauge',
            detail: {
              show: false
            },
            center: ['50%', '50%'],
            radius: '78%',
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [0, '#00F3FFd'],
                  [1, '#00F3FF']
                ],
                width: 1
              }
            },
            splitLine: {
              show: true,
              length: 8,
              distance: 0,
              lineStyle: {
                color: '#00F3FF',
                width: 2
              }
            },
            axisTick: {
              show: true,
              splitNumber: 5,
              length: 5,
              distance: 0,
              lineStyle: {
                color: '#00F3FF',
                width: 1
              }
            },
            axisLabel: {
              show: true,
              distance: 5,
              color: '#16EEF3',
              fontFamily: 'SourceHanSansCN'
            }
          },
          {
            name: '较大',
            type: 'gauge',
            data: [
              {
                value: 15,
                name: '数据1',
                title: {
                  show: false
                }
              }
            ],
            detail: {
              show: false
            },
            center: ['50%', '50%'],
            radius: '85%',
            splitNumber: 10,
            color: '#469DFF',
            axisLine: {
              lineStyle: {
                color: [
                  [0.2, '#469DFF'],
                  [0.4, '#F8A501'],
                  [0.5, '#00E5FF'],
                  [1, '#979797']
                ],
                width: 4
              }
            },
            splitLine: {
              length: 4,
              distance: -4,
              lineStyle: {
                color: '#000437',
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              showAbove: false,
              length: '60%',
              width: 5,
              itemStyle: {
                color: 'rgba(70, 157, 255, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(70, 157, 255, 1)'
              }
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 7
            }
          },
          {
            name: '一般',
            type: 'gauge',
            data: [
              {
                value: 25,
                name: '数据2',
                title: {
                  show: false
                }
              }
            ],
            detail: {
              show: false
            },
            center: ['50%', '50%'],
            radius: '85%',
            splitNumber: 10,
            color: '#F8A501',
            axisLine: {
              lineStyle: {
                color: [
                  [0.2, '#469DFF'],
                  [0.4, '#F8A501'],
                  [0.5, '#00E5FF'],
                  [1, '#979797']
                ],
                width: 4
              }
            },
            splitLine: {
              length: 4,
              distance: -4,
              lineStyle: {
                color: '#000437',
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              showAbove: false,
              length: '60%',
              width: 5,
              itemStyle: {
                color: 'rgba(255, 170, 0,  0.4)',
                borderWidth: 1,
                borderColor: 'rgba(255, 170, 0,  1)'
              }
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 7
            }
          },
          {
            name: '其他',
            type: 'gauge',
            data: [
              {
                value: 45,
                name: '数据3',
                title: {
                  show: false
                }
              }
            ],
            detail: {
              show: false
            },
            center: ['50%', '50%'],
            radius: '85%',
            splitNumber: 10,
            color: '#00E5FF',
            axisLine: {
              lineStyle: {
                color: [
                  [0.2, '#469DFF'],
                  [0.4, '#F8A501'],
                  [0.5, '#00E5FF'],
                  [1, '#979797']
                ],
                width: 4
              }
            },
            splitLine: {
              length: 4,
              distance: -4,
              lineStyle: {
                color: '#000437',
                width: 2
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              showAbove: false,
              length: '60%',
              width: 5,
              itemStyle: {
                color: 'rgba(0, 229, 255, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(0, 229, 255, 1)'
              }
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 7
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.GaugeArea {
  height: 270px;
}
</style>
```

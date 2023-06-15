---
title: 地图230615
date: 2023-06-15 08:30:12
permalink: /pages/11708e/
categories:
  - echarts
tags:
  -
---

## 效果

 <img style="display:block;margin:auto;" v-lazy="'https://dyzhwork.github.io/images/Echarts/Map/map001.gif'"/>

## 代码

:::tip 代码使用 vue 组件实现
:::

```vue
<template>
  <div class="MapArea" id="MapArea"></div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'MapArea',
  mounted() {
    this.showGraph()
  },

  methods: {
    // 绘制地图
    async showGraph() {
      var myChart = echarts.init(document.getElementById('MapArea'))
      const zhenyu =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABH5JREFUaEPtmWuIVVUUx3//mblT1GRJhfQSJwyDghKyh1JghZQVaDUilKRFBEYRGJPO3KnrzFxDsyx7gGUllBSJWZRJIUTvrD4ECSZGUYN9MMqe1jTOXbGOZ6aZO+eecy9zmHuN1sdz9uO3115r7b3WFoeh6DBk5n/ogV0zsyOAE4BTgLOB04EG4E9gJ/AlsA/YL+lgpbudqqbNLANcBFwPXAycBfi3Yvkd+BTYDrwo6etKwFODNrMm4D7gRmAClGV6fwN7gRXAM5IK5cCnAm1mJwHrgdnlTBrRxs1mNbBKku9CrIwa2szOAB4DZiVNlvD/APAQ0CmpL67tqKDN7OhQQ7cC9aOE9u5/AXdLenzU0GZWF0aD5tDRxgHuPB4RfIKjUgAeGKLHzUySR5lISdR0CDwfcG1OBxpTBIwaykPgKmC5JHfUERILbWb+vwNYArh2x0o+B66W5JGlfOgQeA7wNDB+rGjDeVzbMyR9Uin0cWEYu26MgQema5X0QKXQk4EPgROrBL1ekvtRRebhx/C7VQL2aV+V5OZZEfQVwLYqQm+SNK9S6DuBR6oI/RowJ+o+MizkhRHDb2YPpnAsp7HedwBX3s6h8MXQU8KIMaPMW1oaYHFjGOBhb5GkXQMNi6E3AdcCfmzXijj4VknXjIA2s/OBHbVCGsExXdJH/n1Q02a2BrirhqEfleT2PQzaU5/Lahj6bUmXFkN/DFxQw9A7JF1YDL0BuKmGoTdIWlQMPRd4uYah50p6pRjaw9wHQLAFNSYeNfyq6uFveJpvZl6zeBbwQ6ZWZDewUJL7XCDFh4snp5d4DQKYVAPU3wC3+G1TUn8k9MBHM/NMpRW4CvBkwBPYxHwyhUX69nvW8jPwOrBS0i/F4ybliA58MnBMCkDlDvGbV52iYGM1Xe7o1Wo3Flue+triobPWjJiG8QXd/14NEylyNo4+ZpJhLzl9ltjeG9xjE2kMwu0uurwcfCi8RUlp6GV2PHU8Fd5HvqPAYu7Xe2UBZG0txoKgHl3PEjr1Qmy/pTae+qBS5Y7/PeIOuuV3oQqhO2wxhaCwKIx+RBt5eeUnXrI2G2PrkEbbyCu+mtpufn3w+ko9hiFy5Okqpe1oTbfZuYi3hpQP9lHHPLrk6U9pcXOCzRhTg0aigLGQvJ4r2SlrfpBtxzg1bPMjxg2s0JvlazpnTfSxBbh8SKeH+YFWnowpwa6zDD10YCwdUv3fQob55KJrcuTsSPp5iQKDWUmQ7mW4vWSfyAOj3dwWnwC8su+ymwznkUsodmeDOrVrbGLYr4cMs8jJ31eipd1aIPCbY8MG39LEVJZpf9yGDjePFqtnCssx2oIFiZ+ABXTrjSRT5l6bSX/whlKH0QvkaWRlaY2Ze0kbojPMSX8FbiavzUlzjbTpDptGgefDF6m1HCDLGvnzQry02QQUONOViPdpoIWc/AWrtHTYORTYiHEmYh29tLJafyRNFe2IbmsHaaaBPeQqeDLLWSO9TGYSe7gt/gliEOyQL0zmNL4qt89/8ERM2qcq/f8HzNlWPWOF5j0AAAAASUVORK5CYII='
      const yintian =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAA8RJREFUaEPtl1uolVUUhb/RXbvYTYkofbBQIkoSRUysSIhCoVBII9GuUlCQKKIYSgUVPihmECFJBYIRRmkhVEI3yQqyh0h6ElSkREq7aFpNGZt1bJ/d/v+99j6/53Bgz7e9/7XWHGuuMcecUwxC0yDETBd0f71aN9LdSJdEoEuPQUuPiDgPuAa4G5gOjAbOAfYBHwJvA7sk/d7pJSulR0RcCzwO3A9cXgDqV+B9YJWk7zoBXhnoiLgKeAOYCpyZAeZ74FFJOzLW9lpSJejzgYnAtEQNX+JCKK262/0qkg60A7wy0PVOI+Ji4C7gQeD2EkD/AsslPX/aQUfEGcD1wB0p6c4F9gM7nWySjkaEA2JePwUsAs4u4fhISb/lAm8r0hExNFHgaeCWAu4eAl4A3gR+BnyhZcBiwMrSzO6V9FbloCPiyhSxhxNXy3z8A3wKLJW0M9FlNTC/YNNqSQv9LSKGAcf9WkUOsiKdDlqTpOyszIgEsNcUkrQ7Ii4FvgDGNtm/JcngfcAVwAnga2CtpG8b17cEnbhpXq4CzOV27RsXGUk/RcQsYGMJvxvP/gNYCayTdKznYw7oG4BPACtCJ2ZnS4GXgOHAO8CkNg5ygppmL7cDekMJF3N9W49nA66GTkiXeOv61Rn5YR+HgXGS9vhH00hHhCuai4M19sWSkpwL2mAnS/qhfkNEDPH/wCPJ12UlxegZSSuagk6y9gDwGHBdi4qWC9rrZkjamhRCkpyoNYsIa/htiUa3Fhy6XVKtUPWKdOrQliRpu6AdRBlrHYTdwFzgRsCy+BXwmhUiJfwI4PVUtBqP3CHp5mag56RNRdUrA1vhkl+AS5p8dSl3kj0r6WBqvN4FbmpYu16SafRfpCPCJdfyNKovyDrca13eBDyZks70dF3oeW2/imVzWyPoBcArHTqtYttxYKGlLSIsjZ8BY9LB7wEzJf3dCHozcE8V3vtwhnuVUS4kEbE2icHnqX11Q1azU4kYEU6KCX1wWNXWaZI+jog7gSnOMUk/1h9eD9o3qmXnANsTktZFhOfKkGS+97J60OuBhwYYsN0vkPRqGY560J40PHAOtE2U5A6v0OpB+zk8ZI4fQNS7nFc9KlGEo7Eiug+wsBeN/6fzPkeAOZI+aOWkEbSjPQ94DnBJ7S9z++kRbY2kP1s5/V+Xl7J2HOAJ2c1LJ41/K7/13y1nblc/ygHsjYVDQGpPPQC4s7qoHRSZaz0cfOkRTNJfmXtqy1pOLu0c1l9ru6C7kc4pLv0VpSr8dDldRRRzzhiUkT4J61QMPXxfC0EAAAAASUVORK5CYII='
      const duoyun =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABIBJREFUaEPtmGtsVFUQx39zl0qLLWjxgWIVFGu7XauJrwbsBjWhGhOMsasRxS9SNWBSX8EUHwFNNBiMwRiJifpBioKvaEwUTbBPgomSKn1QtCaGagtSkVCLxe7eMWfdku3j3uxtb9c26f24O3fmd+bM+c/cI0zBR6YgM9PQ6dq16UxPukxrZ1kufX9lSsHurnTBOcVJqTxU11u0fF2FaKmEGm6eItCRAK2HXgBulVBDaFJBa3N4MTPsHgoaO0SwB+FU3aF1/01zsaPXMkv2yMLaYxO9qCHloc3haiwtRK0nJFRXcwp6PRblpZWIlEhR/V3JULr/+nyishGLQmISkeL65nRD52GxGdUSLFklwfrPDYC+HwlQeLQIsXPIzW6S8z87Ef/9wI3ziUbfQclHAuUEz/pO5INYWqHjIK1L56GxNxDJIcr9ZEgEtR9BOS8OI9ILvIvNZgIsxtYKMgOrZFFti6rOAuYC84CLgDOB34GDwGGgR0T+Ge+iRlUPbV+SA1YxMapQyoAZIwIJP4FVCdJEcPURiNwAlAOlwGVAIOkdszPtwC5gO/CDiIx5RxwlT1tLtwAV6JDgQ9lVNhCqewl4DrgvkWXLJZMGtBN4WkS2jTXjEleG2iMZcQcXZClN2VGu655NrxwCTnNwHEWsaoK1lcCLwAOj7oY71aPAFhE56RVetC38FKrz4y+qKNiNWIEebPsrZ2eyh5h1J8U19wLPAKaWvT5GGlcDO0TklLym4sRAP4lqUQLaxrJ2gtWFPVDn4KAfYS3BXQ2Q0QicnkogB5tvgdtEpNuLj9EPYmcki+OHO1E1SjD8OcjM3FtY9Ikpi+VegjnYrhSRai9+nA9iW3gNtm4cmUlpJ//Nu8m49FPgQi/BHGwbRCTsxY8zdPvyHGLHHsfWtQgZWLIb1e3Yso9QndHht4E5XoI52BrdPgMwynI2YESh2+2AjoDWjmXncPLvl4E8gtlltPVficQWcKLvY7l674CqGs02arEJyPIB2rgwZ+PypCQMAKbe3wPMjv6WfFiHzx55WPYmbLmGAOsobNghgqqq0d5LEo2jAFgClABumuzHekz29wGvAlsHG9JQ6JbSLxAWglVBsK4xAWxsHgMeBIw0jkXexrsAMzq8lmhK9lDo1vAKYoEDUlyzNy7b/6nHK8DK8Ub14f3jwMPANueDqGr0d0PCcKYPQf1w8Q1wuxu0qdmdPimEH8DGRxS4xw36Q+AOv6L56Oej0Tui6mzgVyDHx2B+ufrFCfoK4Hu/ovjsp98J2rRVp4HJZwbP7rqcoC8GfvbsLj0vfOkEbVq1gfZjIPJ7KQ+5qcfzwLo0tGovi/oRWOYGbUrEDCv/+41SYlXm4/hZM4e4QZuvaXMx8/okaTBbgTUi0ut6Aamq5n8zd5ivlHOHXQt42dax2ipwFHgLqBocT1O8NdWrgBXAUiAIZI6VIsX3+oEOwMwapjPXJF/ypASdmPgMaG6iVMzNUXaKAF7NTO3+AZhx9E8R6RvuIGVor5En0n4aeiKzm+x7OtPTmXbJwL9GmG823GtQLwAAAABJRU5ErkJggg=='
      myChart.showLoading()
      // 需要自己准备地图json文件
      const { data } = await axios.get('/static/guiyangshi.json')
      const { data: guiyang } = await axios.get('/static/guiyang.json')
      myChart.hideLoading()
      data.features.forEach((item) => {
        console.log(item)
      })
      echarts.registerMap('guiyangshi', data)
      echarts.registerMap('guiyang', guiyang)
      myChart.setOption({
        geo: [
          {
            zoom: 1.1,
            aspectScale: 1.2,
            map: 'guiyangshi',
            label: {
              show: false
            },
            layoutSize: '95%',
            layoutCenter: ['50%', '52%'],
            itemStyle: {
              areaColor: '#0A1128',
              borderColor: 'transparent',
              borderWidth: 0,
              shadowOffsetY: 20,
              shadowColor: '#0E2349',
              shadowBlur: 20
            },
            silent: true,
            zlevel: 1
          },
          {
            zoom: 1.1,
            aspectScale: 1.2,
            map: 'guiyangshi',
            label: {
              show: false
            },
            layoutSize: '95%',
            layoutCenter: ['50%', '50%'],
            itemStyle: {
              areaColor: '#06317b',
              borderColor: '#426AB1',
              borderWidth: 2
            },
            zlevel: 2,
            silent: true
          },
          {
            zoom: 1.1,
            aspectScale: 1.2,
            map: 'guiyang',
            layoutSize: '95%',
            layoutCenter: ['50%', '48%'],
            label: {
              show: false
            },
            itemStyle: {
              borderWidth: 0,
              shadowOffsetY: 10,
              areaColor: {
                type: 'radial',
                x: 0.45,
                y: 0.45,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: '#06317b' /
                  },
                  {
                    offset: 0.4,
                    color: '#06317b' /
                  },
                  {
                    offset: 1,
                    color: '#4576ce'
                  }
                ],
                global: false
              },
              shadowColor: '#002e7f',
              shadowBlur: 20
            },
            silent: true,
            zlevel: 3
          },
          {
            zoom: 1.1,
            aspectScale: 1.2,
            map: 'guiyangshi',
            layoutSize: '95%',
            layoutCenter: ['50%', '48%'],
            label: {
              show: true,
              color: '#fff',
              fontSize: 14,
              emphasis: {
                color: '#fff'
              }
            },
            itemStyle: {
              areaColor: 'transparent',
              borderColor: '#70a3f8',
              borderWidth: 2
            },
            emphasis: {
              focus: 'none',
              label: {
                show: false
              },
              itemStyle: {
                areaColor: 'rgba(71, 122, 211,1)',
                borderColor: '#6fa2f8'
              }
            },
            zlevel: 4
          }
        ],
        series: [
          {
            name: '666',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: (value, params) => {
              return params.data.weather
            },
            symbolSize: [30, 30],
            data: [
              {
                name: '南明区',
                value: [106.784486, 26.582738],
                weather: zhenyu
              },
              {
                name: '云岩区',
                value: [106.713331, 26.636791],
                weather: duoyun
              },
              {
                name: '花溪区',
                value: [106.657852, 26.452957],
                weather: duoyun
              },
              {
                name: '乌当区',
                value: [106.875605, 26.754776],
                weather: yintian
              },
              {
                name: '白云区',
                value: [106.691772, 26.757891],
                weather: zhenyu
              },
              {
                name: '观山湖区',
                value: [106.563566, 26.66908],
                weather: duoyun
              },
              {
                name: '开阳县',
                value: [107.040806, 27.070201],
                weather: duoyun
              },
              {
                name: '息烽县',
                value: [106.698096, 27.159758],
                weather: yintian
              },
              {
                name: '修文县',
                value: [106.58472, 26.927148],
                weather: duoyun
              },
              {
                name: '清镇市',
                value: [106.335681, 26.684809],
                weather: duoyun
              }
            ],
            zlevel: 5
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.MapArea {
  margin: 0 auto;
  width: 711px;
  height: 617px;
}
</style>
```

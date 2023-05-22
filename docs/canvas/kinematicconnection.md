---
title: 两个小球连接运动效果
date: 2023-05-22 14:47:09
permalink: /pages/a50a8c/
categories:
  - canvas
tags:
  -
---

## 一、最终实现效果

<KinematicConnection/>

## 二、使用以下几个步骤

### 1.创建 HTML 元素

```html
<div class="KinematicConnection">
  <canvas>你的浏览器不支持展示相关内容</canvas>
</div>
```

### 2.编写 CSS 代码

```css
.KinematicConnection {
  height: 450px;
}
canvas {
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  display: block;
}
```

### 3.编写 JavaScript 代码

#### ① 在 utils 文件夹下新建 tool.js 文件

文件内容:

```js
// 获取min到max之间的随机数,不包含0
export const getRandomNum = (min, max) => {
  let num = 0
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min // 生成介于min到max之间的整数
  } while (num === 0) // 如果生成的是0，就重复生成
  return num
}
```

#### ② 在 hooks 文件夹下新建 useCanvas 文件

```js
export const useCanvas = (className) => {
  // dom信息
  const domInfo = {
    container: null,
    canvas: null,
    ctx: null
  }

  // 初始化数据
  const initData = () => {
    // 获取元素
    domInfo.container = document.querySelector(className)
    domInfo.canvas = document.querySelector('canvas')
    domInfo.ctx = domInfo.canvas.getContext('2d')
    const rect = domInfo.container.getBoundingClientRect()

    // 设置canvas宽高
    domInfo.canvas.width = rect.width
    domInfo.canvas.height = rect.height
  }
  // 浏览器窗口改变大小时重新运行函数重置宽高
  const onReSize = () => {
    window.onresize = () => {
      initData()
    }
  }
  return {
    domInfo,
    initData,
    onReSize
  }
}
```

#### ③ 在.vue 文件中导入相关函数

```js
// 1.导入生成随机数的复用函数
import { getRandomNum } from '../utils/tool.js'
```

```js
// 2.导入hooks复用函数
import { useCanvas } from '../hooks/useCanvas.js'
```

#### ④ 新建类生成点的构造函数

```js
// 生成点的构造函数
class Point {
  constructor(domInfo) {
    this.radius = 2
    this.x = getRandomNum(0, domInfo.canvas.width - this.radius / 2)
    this.y = getRandomNum(0, domInfo.canvas.height - this.radius / 2)
    this.xSpeed = getRandomNum(-50, 50)
    this.ySpeed = getRandomNum(-50, 50)
    this.lastDrawTime = null
    this.domInfo = domInfo
  }
  drawPoint() {
    if (this.lastDrawTime) {
      const duration = (Date.now() - this.lastDrawTime) / 1000
      // 算出距离
      const xDis = this.xSpeed * duration,
        yDis = this.ySpeed * duration
      //   算出新的坐标
      let x = this.x + xDis,
        y = this.y + yDis
      //   判断坐标是否超出边界
      if (x > this.domInfo.canvas.width - this.radius / 2) {
        x = this.domInfo.canvas.width - this.radius / 2
        this.xSpeed = -this.xSpeed
      } else if (x < 0) {
        x = 0
        this.xSpeed = -this.xSpeed
      }
      if (y > this.domInfo.canvas.height - this.radius / 2) {
        y = this.domInfo.canvas.height - this.radius / 2
        this.ySpeed = -this.ySpeed
      } else if (y < 0) {
        y = 0
        this.ySpeed = -this.ySpeed
      }

      this.x = x
      this.y = y
    }
    this.domInfo.ctx.beginPath()
    this.domInfo.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this.domInfo.ctx.fillStyle = '#fff'
    this.domInfo.ctx.fill()
    this.lastDrawTime = Date.now()
  }
}
```

#### ⑤ 新建构造多个点的类

```js
// 构造多个点的类
class GraphLinePoint {
  constructor(domInfo, number = 20, maxDis = 200) {
    this.points = new Array(number).fill(0).map(() => new Point(domInfo))
    this.maxDis = maxDis
    this.timer = null
    this.domInfo = domInfo
  }
  // 清除动画
  clearAnimation() {
    if (this.timer) {
      cancelAnimationFrame(this.timer)
    }
  }
  // 画点
  drawLinePoint() {
    this.timer = requestAnimationFrame(() => {
      this.drawLinePoint()
    })
    this.domInfo.ctx.clearRect(0, 0, this.domInfo.canvas.width, this.domInfo.canvas.height)
    for (let i = 0; i < this.points.length; i++) {
      const pl = this.points[i]
      pl.drawPoint()
      for (let j = i + 1; j < this.points.length; j++) {
        const p2 = this.points[j]
        const d = Math.sqrt((pl.x - p2.x) ** 2 + (pl.y - p2.y) ** 2)
        if (d > this.maxDis) {
          continue
        }
        this.domInfo.ctx.beginPath()
        this.domInfo.ctx.moveTo(pl.x, pl.y)
        this.domInfo.ctx.lineTo(p2.x, p2.y)
        this.domInfo.ctx.closePath()
        this.domInfo.ctx.strokeStyle = '#fff'
        this.domInfo.ctx.strokeStyle = `rgba(25,255,255,${1 - d / this.maxDis})`
        this.domInfo.ctx.stroke()
      }
    }
  }
}
```

#### ⑥ vue 导出对象内容如下

```javascript
export default {
  name: 'KinematicConnection',
  data() {
    return {
      glp: null
    }
  },
  mounted() {
    const { domInfo, initData, onReSize } = useCanvas('.KinematicConnection')
    initData()
    // 产生效果实例
    this.glp = new GraphLinePoint(domInfo, 45, 150)
    this.glp.drawLinePoint()
    onReSize()
  },
  methods: {},
  // 卸载组件
  beforeDestroy() {
    // 组建销毁时清除动画效果
    this.glp.clearAnimation()
  }
}
```

`注意:③,④,⑤,⑥的内容同必须放在script标签内才行`

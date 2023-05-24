---
title: 小球碰撞回弹效果
date: 2023-05-21 19:17:54
permalink: /pages/d0dce2/
categories:
  - canvas
tags:
  - 粒子动画
  - 特效
---

## 一、最终效果图

<PelletCollision/>

## 二、使用以下几个步骤

### 1.创建 HTML 元素

```html
<div class="PelletCollision">
  <canvas>你的浏览器不支持canvas</canvas>
</div>
```

### 2.编写 CSS 代码

```css
/* 设置容器高度 */
.PelletCollision {
  box-sizing: border-box;
  height: 450px;
}

/* 设置canvas背景色 */
canvas {
  background: rgba(0, 0, 0, 0.3);
}
```

### 3.编写 JavaScript 代码

```js
// 创建小球的类
class LittleBall {
  // 初始化属性
  constructor(getRandomNum, colorList, domInfo) {
    this.px = getRandomNum(0, domInfo.canvas.width) // 小球横坐标
    this.py = getRandomNum(0, domInfo.canvas.height) // 小球纵坐标
    this.r = getRandomNum(1, 6) // 小球半径
    this.color = colorList[Math.floor(getRandomNum(1, 5))] // 小球颜色
    // 往哪个方向移动
    this.vx = getRandomNum(-1, 1)
    this.vy = getRandomNum(-1, 1)
  }
  // 绘制小球
  drawBall(domInfo) {
    domInfo.ctx.beginPath()
    domInfo.ctx.fillStyle = this.color
    domInfo.ctx.arc(this.px, this.py, this.r, 0, 2 * Math.PI)
    domInfo.ctx.fill()
  }
  // 小球移动的方法
  ballMove(domInfo) {
    if (this.px - this.r < 0 || this.px + this.r > domInfo.canvas.height) {
      this.vx = -this.vx
    }
    if (this.py - this.r < 0 || this.py + this.r > domInfo.canvas.height) {
      this.vy = -this.vy
    }

    this.px += this.vx
    this.py += this.vy
    this.drawBall(domInfo)
  }
}
export default {
  data() {
    return {
      domInfo: {
        container: null,
        canvas: null,
        ctx: null
      },
      // 宽高记录
      wh_record: {
        browserWidth: 0,
        browserHeight: 0,
        parent_t: 0,
        parent_l: 0,
        canvas_w: 0,
        canvas_h: 0
      },
      // 随机颜色预制
      colorList: ['#7AA874', '#F7DB6A', '#EBB02D', '#D864A9', '#159895'],
      // 创建一个变量储存小球信息
      ballList: []
    }
  },
  mounted() {
    // 获取元素宽高设置给canvas
    this.getElementWH()
    // 生成50个小球
    this.createBall(50)
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      this.getElementWH()
    }),
      // 定时器运动
      setInterval(() => {
        this.domInfo.ctx.clearRect(0, 0, this.domInfo.canvas.width, this.domInfo.canvas.height)
        this.ballList.forEach((item) => {
          item.ballMove(this.domInfo)
        })
      }, 20)
  },
  methods: {
    // 获取元素宽高
    getElementWH() {
      this.domInfo.container = document.querySelector('.PelletCollision')
      this.domInfo.canvas = document.querySelector('canvas')
      this.domInfo.ctx = this.domInfo.canvas.getContext('2d')
      let react = this.domInfo.container.getBoundingClientRect()
      this.domInfo.canvas.width = react.width
      this.domInfo.canvas.height = react.height
    },
    // 获取min到max之间的随机数
    getRandomNum(min, max) {
      let num = 0
      do {
        num = Math.floor(Math.random() * (max - min + 1)) + min // 生成介于min到max之间的整数
      } while (num === 0) // 如果生成的是0，就重复生成
      return num
    },
    // 为方便产生更多的小球,封装函数调用,传入需要绘制的小球数目即可
    createBall(num) {
      for (let index = 0; index < num; index++) {
        const ball = new LittleBall(this.getRandomNum, this.colorList, this.domInfo)
        ball.drawBall(this.domInfo)
        this.ballList.push(ball)
      }
    }
  }
}
```

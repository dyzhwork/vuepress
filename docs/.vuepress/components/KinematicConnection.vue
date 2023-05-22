<template>
  <div class="KinematicConnection">
    <canvas>你的浏览器不支持展示相关内容</canvas>
  </div>
</template>

<script>
import { getRandomNum } from '../utils/tool.js'
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
import { useCanvas } from '../hooks/useCanvas.js'
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
</script>
<style>
.KinematicConnection {
  height: 450px;
}
canvas {
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  display: block;
}
</style>

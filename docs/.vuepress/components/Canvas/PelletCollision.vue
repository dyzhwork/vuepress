<template>
  <div class="PelletCollision">
    <canvas>你的浏览器不支持canvas</canvas>
  </div>
</template>

<script>
import { getRandomNum } from '../../utils/tool.js'
// 创建小球的类
class LittleBall {
  // 初始化属性
  constructor(colorList, domInfo) {
    this.px = getRandomNum(0, domInfo.canvas.width) // 小球横坐标
    this.py = getRandomNum(0, domInfo.canvas.height) // 小球纵坐标
    this.r = getRandomNum(1, 6) // 小球半径
    this.color = colorList[Math.floor(getRandomNum(0, 5))] // 小球颜色
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
      // 随机颜色预制
      colorList: ['#7AA874', '#F7DB6A', '#EBB02D', '#D864A9', '#159895'],
      // 创建一个变量储存小球信息
      ballList: []
    }
  },
  mounted() {
    this.getElementWH()
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
    // 为方便产生更多的小球,封装函数调用,传入需要绘制的小球数目即可
    createBall(num) {
      for (let index = 0; index < num; index++) {
        const ball = new LittleBall(this.colorList, this.domInfo)
        ball.drawBall(this.domInfo)
        this.ballList.push(ball)
      }
    }
  }
}
</script>

<style>
.PelletCollision {
  box-sizing: border-box;
  height: 450px;
}
canvas {
  background: rgba(0, 0, 0, 0.3);
}
</style>

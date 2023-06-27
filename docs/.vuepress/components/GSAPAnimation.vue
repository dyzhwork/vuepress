<template>
  <div class="GSAPAnimation">
    <h2>创建第一个动画</h2>
    <button @click="moveToRight">点击按钮</button>
    <div class="box">
      <div class="span1">文字向左向右移动三百个像素</div>
    </div>
    <br />
    <br />
    <strong>让我们仔细看看语法</strong>
    <img src="https://greensock.com/uploads/pages_media/0_tween.png?_cb=1658321154" alt="" />
  </div>
</template>

<script>
const { gsap } = require('gsap')
export default {
  name: 'GSAPAnimation',
  data() {
    return {
      direction: 'left'
    }
  },
  methods: {
    moveToRight() {
      if (this.direction == 'left') {
        this.direction = 'right'
        gsap.to('.span1', { x: 100 })
      } else {
        this.direction = 'left'
        gsap.to('.span1', { x: -100 })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.GSAPAnimation {
  overflow: hidden;
  .box {
    text-align: center;
    .span1 {
      display: inline-block;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
    }
  }

  img {
    height: 200px;
  }
}
</style>

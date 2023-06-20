<template>
  <div class="ScssXingKongEffect">
    <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="title">Scss星空效果</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.ScssXingKongEffect {
  height: 500px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
  // 定义scss函数
  @function getShadows($n) {
    $shadows: '#{random(100)}vw #{random(100)}vh #fff';
    // 循环多个
    @for $i from 2 through $n {
      $shadows: '#{$shadows},#{random(100)}vw #{random(100)}vh #fff';
    }
    @return unquote($shadows);
  }
  // 再次循环
  $duration: 400s;
  $count: 1000;
  @for $i from 1 through 3 {
    $duration: floor($duration/2);
    $count: floor($count/2);
    .item#{$i} {
      // 重点
      $size: #{$i}px;
      position: absolute;
      width: $size;
      height: $size;
      border-radius: 50%;
      background: #f10;
      left: 0;
      top: 0;
      box-shadow: getShadows($count);
      animation: moveUp $duration linear infinite;
      &::after {
        content: '';
        width: $size;
        height: $size;
        left: 0;
        top: 100vh;
        position: absolute;
        border-radius: inherit;
        box-shadow: inherit;
      }
    }
  }
  // 动画效果
  @keyframes moveUp {
    100% {
      transform: translateY(-100vh);
    }
  }
  .title {
    line-height: 500px;
    text-align: center;
    font-size: 50px;
    color: #fff;
  }
}
</style>

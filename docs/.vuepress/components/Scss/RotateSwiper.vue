<template>
  <div class="RotateSwiper">
    <div class="container">
      <div class="content">
        <img v-lazy="'https://picsum.photos/200?info=1'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=2'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=3'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=4'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=5'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=6'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=7'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=8'" class="item" />
        <img v-lazy="'https://picsum.photos/200?info=9'" class="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RotateSwiper'
}
</script>

<style lang="scss" scoped>
// 导入sass数学模块
@use 'sass:math';

.RotateSwiper {
  background: rgba($color: #000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    margin: 30px;
    // 外圆半径
    $size1: 200px;
    // 定义图片张数
    $n: 9;
    // 每个图片圆心连接大圆圆心形成的顶角
    $pDeg: calc(360deg / $n);
    // 计算内圆半径
    $r: calc($size1 / 2);
    $R: calc($r / math.sin(calc($pDeg / 2)));
    border-radius: 50%;
    width: $size1;
    height: $size1;
    border: 5px solid #fff;
    // outline: 5px solid #f10;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .content {
      width: $R * 2;
      height: $R * 2;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: $r;
      position: relative;
      .item {
        width: $size1;
        height: $size1;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        // transform: translateX(-50%);
        margin-left: calc(-#{$size1} / 2);
        margin-top: -$r;
        transform-origin: center #{$R + $r};
        @for $i from 1 through $n {
          &:nth-child(#{$i}) {
            transform: rotate($pDeg * ($i - 1));
          }
        }
      }
    }
    // 定义每个图片经历的时间比
    $u: calc(1 / $n * 100%);
    $rotateDuration: 0.3s;
    $stopDuration: 1s;
    $duration: ($rotateDuration + $stopDuration) * $n;
    $backDuration: calc($stopDuration / ($stopDuration + $duration) * $u);
    // 定义一个动画
    @keyframes rotateImg {
      @for $i from 1 through $n {
        $p: $u * $i;
        $deg: $pDeg * $i;
        #{$p - $backDuration},
        #{ $p } {
          transform: rotate(-$deg);
        }
      }
    }
    .content {
      animation: rotateImg $duration infinite;
    }
  }
}
</style>

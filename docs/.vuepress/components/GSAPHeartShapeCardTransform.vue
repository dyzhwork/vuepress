<template>
  <div class="GSAPHeartShapeCardTransform">
    <!-- 心形动画 -->
    <h2>心形动画</h2>
    <div class="heart_area">
      <div class="item1">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart1=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart1=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart1=3'" />
      </div>
      <div class="item2">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart2=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart2=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart2=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart2=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart2=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart2=6'" />
      </div>
      <div class="item3">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=6'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart3=7'" />
      </div>
      <div class="item4">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=6'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart4=7'" />
      </div>
      <div class="item5">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=6'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart5=7'" />
      </div>
      <div class="item6">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=6'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart6=7'" />
      </div>
      <div class="item7">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=6'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart7=7'" />
      </div>
      <div class="item8">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart8=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart8=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart8=3'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart8=4'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart8=5'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart8=6'" />
      </div>
      <div class="item9">
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart9=1'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart9=2'" />
        <img class="heart_img" v-lazy="'https://picsum.photos/80/60?item_heart9=3'" />
      </div>
    </div>
    <!-- 卡片过渡效果 -->
    <h2>卡片过渡效果</h2>
    <div class="card_area">
      <div class="item1">
        <img class="card_img" v-lazy="'https://picsum.photos/280/160?item_card1=1'" />
        <div class="text">Lorem ipsum dolor sit .</div>
      </div>
      <div class="item2">
        <img class="card_img" v-lazy="'https://picsum.photos/280/160?item_card2=1'" />
        <div class="text">Lorem iconsectetur.</div>
      </div>
      <div class="item3">
        <img class="card_img" v-lazy="'https://picsum.photos/280/160?item_card3=1'" />
        <div class="text">Losectetur.</div>
      </div>
      <div class="item4">
        <img class="card_img" v-lazy="'https://picsum.photos/280/160?item_card4=1'" />
        <div class="text">Lorem iectetur.</div>
      </div>
      <div class="item5">
        <img class="card_img" v-lazy="'https://picsum.photos/280/160?item_card5=1'" />
        <div class="text">Lorem ipsum dolectetur.</div>
      </div>
      <div class="item6">
        <img class="card_img" v-lazy="'https://picsum.photos/280/160?item_card6=1'" />
        <div class="text">t amet consectetur.</div>
      </div>
    </div>
  </div>
</template>

<script>
const { gsap } = require('gsap')
export default {
  name: 'GSAPHeartShapeCardTransform',
  mounted() {
    this.runAnimation()
  },
  methods: {
    runAnimation() {
      gsap.to('.heart_area .heart_img', {
        scale: 0.3, //! 缩放
        y: 20,
        duration: 1, //! 动画持续时间
        repeat: -1, //? 重复次数
        yoyo: true, //todo 进行往返放大缩小
        delay: 1, //* 动画延迟开启时间
        // stagger: 0.1 //* 简单配置
        // 对象配置
        stagger: {
          amount: 1,
          grid: 'auto',
          from: 'center'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.GSAPHeartShapeCardTransform {
  .heart_area {
    padding: 10px 0;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 60px);
    justify-content: space-between;
    .heart_img {
      border: 2px solid #55ceaa;
      width: 80px;
      height: 60px;
    }
    // 循环判断-定位元素位置
    @for $i from 1 through 9 {
      .item#{$i} {
        display: flex;
        flex-direction: column;
        gap: 10px;
        grid-column: #{$i} / #{$i + 1};
        @if (($i == 1) or ($i == 9)) {
          grid-row: 2/4;
        } @else if (($i ==2) or ($i == 8)) {
          grid-row: 1/5;
        } @else if (($i ==3) or ($i == 7)) {
          grid-row: 1/6;
        } @else if (($i ==4) or ($i == 6)) {
          grid-row: 2/7;
        } @else {
          grid-row: 3/8;
        }
      }
    }
  }
  .card_area {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px 5px;
    @for $i from 1 through 6 {
      .item#{$i} {
        width: 100%;
        height: 160px;
        position: relative;
        overflow: hidden;
        &:hover > .card_img {
          display: none;
        }
        .card_img {
          width: inherit;
          height: inherit;
          margin-bottom: -4px;
        }
        .text {
          box-sizing: border-box;
          text-align: center;
          font-size: 40px;
          font-weight: bold;
          height: inherit;
          border: 1px solid #000;
        }
      }
    }
  }
}
</style>

<template>
  <div class="ScssWordChangeByWindow">
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'ScssWordChangeByWindow'
}
</script>

<style lang="scss" scoped>
.ScssWordChangeByWindow {
  border: 1px solid #000;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  * {
    margin: 0;
    color: #fff;
  }
  // 用scss定义一个随机字符串数组
  $words: 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit',
    'Assumenda', 'exercitationem', 'quis', 'atque', 'soluta', 'Corporis', 'ipsa', 'sit', 'Facere',
    'quos', 'numquam', 'debitis', 'sequi', 'adipisci', 'repellendus', 'a', 'velit', 'tempora',
    'error', 'quas', 'exercitationem', 'ipsum';
  // 定义一个宽度最大值
  $max_width: 1910px;
  h1 {
    font-size: 2vw;
    text-align: center;
    line-height: 500px;
    &::after {
      content: 'Scss Word Change By Window Change';
      // text-shadow: 1px 1px 4px #c91313;
      text-transform: uppercase;
      @each $word in $words {
        @media screen and (max-width: $max_width) {
          content: '#{$word}';
          color: rgb(random(255), random(255), random(255));
        }
        // 设置不同宽度值,更新值,需要注意的是 "$max_width - 100px"是进行运算,中间"-"必须和两边的值分开,否则,将会作为一个变量($max_width-100px)使用,导致报错
        $max_width: $max_width - 50px;
      }
    }
  }
}
</style>

---
title: Scss实现星空效果
date: 2023-06-20 16:53:17
permalink: /pages/820176/
categories:
  - views
  - css
  - scss
tags:
  -
---

## 实现效果

<ScssXingKongEffect/>

## 代码展示

使用`vue`作为组件代替`HTML`实现。

```vue
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
```

## Scss 代码编译后的结果

:::details 最终 Scss 编译后的普通 CSS 结果

```css
.ScssXingKongEffect {
  height: 500px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
}
.ScssXingKongEffect .item1 {
  position: absolute;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background: #f10;
  left: 0;
  top: 0;
  box-shadow: 80vw 20vh #fff, 84vw 63vh #fff, 29vw 60vh #fff, 25vw 36vh #fff, 89vw 56vh #fff, 20vw
      76vh #fff, 88vw 86vh #fff, 100vw 94vh #fff, 22vw 32vh #fff, 9vw 27vh #fff, 59vw 12vh #fff, 89vw
      95vh #fff, 92vw 6vh #fff, 8vw 39vh #fff, 69vw 34vh #fff, 6vw 59vh #fff, 10vw 42vh #fff, 6vw
      50vh #fff, 77vw 38vh #fff, 14vw 31vh #fff, 32vw 26vh #fff, 90vw 29vh #fff, 23vw 90vh #fff, 52vw
      96vh #fff, 52vw 45vh #fff, 77vw 43vh #fff, 23vw 23vh #fff, 64vw 96vh #fff, 38vw 66vh #fff, 16vw
      79vh #fff, 77vw 86vh #fff, 11vw 42vh #fff, 22vw 68vh #fff, 21vw 61vh #fff, 28vw 78vh #fff, 44vw
      37vh #fff, 44vw 72vh #fff, 44vw 77vh #fff, 55vw 12vh #fff, 45vw 23vh #fff, 85vw 12vh #fff, 45vw
      43vh #fff, 57vw 9vh #fff, 38vw 46vh #fff, 3vw 90vh #fff, 28vw 62vh #fff, 11vw 11vh #fff, 77vw
      16vh #fff, 28vw 16vh #fff, 18vw 37vh #fff, 91vw 32vh #fff, 80vw 65vh #fff, 11vw 83vh #fff, 99vw
      8vh #fff, 48vw 7vh #fff, 94vw 98vh #fff, 74vw 51vh #fff, 59vw 97vh #fff, 96vw 24vh #fff, 34vw
      61vh #fff, 18vw 72vh #fff, 25vw 40vh #fff, 30vw 60vh #fff, 69vw 78vh #fff, 29vw 55vh #fff, 88vw
      85vh #fff, 18vw 73vh #fff, 4vw 22vh #fff, 32vw 76vh #fff, 46vw 22vh #fff, 31vw 88vh #fff, 30vw
      7vh #fff, 69vw 72vh #fff, 44vw 44vh #fff, 27vw 95vh #fff, 78vw 96vh #fff, 24vw 100vh #fff, 75vw
      9vh #fff, 16vw 67vh #fff, 71vw 24vh #fff, 98vw 48vh #fff, 61vw 20vh #fff, 14vw 50vh #fff, 91vw
      56vh #fff, 31vw 82vh #fff, 80vw 38vh #fff, 44vw 50vh #fff, 44vw 50vh #fff, 51vw 90vh #fff, 40vw
      99vh #fff, 80vw 43vh #fff, 50vw 13vh #fff, 55vw 59vh #fff, 49vw 75vh #fff, 24vw 61vh #fff, 1vw
      100vh #fff, 99vw 2vh #fff, 66vw 92vh #fff, 4vw 16vh #fff, 15vw 13vh #fff, 54vw 77vh #fff, 25vw
      51vh #fff, 83vw 96vh #fff, 76vw 23vh #fff, 87vw 93vh #fff, 27vw 50vh #fff, 64vw 89vh #fff, 74vw
      29vh #fff, 44vw 99vh #fff, 60vw 28vh #fff, 54vw 33vh #fff, 78vw 23vh #fff, 48vw 45vh #fff, 18vw
      51vh #fff, 20vw 39vh #fff, 84vw 46vh #fff, 99vw 90vh #fff, 94vw 29vh #fff, 64vw 54vh #fff, 10vw
      63vh #fff, 15vw 66vh #fff, 64vw 13vh #fff, 50vw 53vh #fff, 56vw 2vh #fff, 34vw 63vh #fff, 26vw
      37vh #fff, 27vw 45vh #fff, 29vw 12vh #fff, 33vw 36vh #fff, 27vw 28vh #fff, 14vw 53vh #fff, 11vw
      30vh #fff, 4vw 26vh #fff, 46vw 100vh #fff, 8vw 91vh #fff, 49vw 9vh #fff, 55vw 96vh #fff, 25vw
      30vh #fff, 60vw 54vh #fff, 38vw 29vh #fff, 55vw 87vh #fff, 65vw 49vh #fff, 71vw 85vh #fff, 58vw
      38vh #fff, 78vw 82vh #fff, 25vw 78vh #fff, 7vw 71vh #fff, 23vw 10vh #fff, 8vw 55vh #fff, 80vw
      8vh #fff, 14vw 3vh #fff, 79vw 80vh #fff, 65vw 60vh #fff, 31vw 70vh #fff, 66vw 72vh #fff, 18vw
      5vh #fff, 55vw 18vh #fff, 67vw 79vh #fff, 65vw 51vh #fff, 1vw 50vh #fff, 31vw 86vh #fff, 20vw
      94vh #fff, 78vw 10vh #fff, 64vw 26vh #fff, 51vw 55vh #fff, 54vw 91vh #fff, 73vw 94vh #fff, 82vw
      31vh #fff, 83vw 1vh #fff, 32vw 86vh #fff, 50vw 35vh #fff, 4vw 67vh #fff, 50vw 20vh #fff, 12vw
      44vh #fff, 25vw 10vh #fff, 82vw 17vh #fff, 80vw 80vh #fff, 87vw 91vh #fff, 32vw 36vh #fff, 56vw
      88vh #fff, 95vw 20vh #fff, 65vw 85vh #fff, 22vw 32vh #fff, 29vw 34vh #fff, 46vw 24vh #fff, 5vw
      37vh #fff, 90vw 45vh #fff, 9vw 62vh #fff, 57vw 68vh #fff, 54vw 61vh #fff, 15vw 65vh #fff, 55vw
      42vh #fff, 54vw 79vh #fff, 30vw 90vh #fff, 25vw 61vh #fff, 50vw 54vh #fff, 20vw 53vh #fff, 70vw
      10vh #fff, 16vw 3vh #fff, 36vw 68vh #fff, 100vw 42vh #fff, 64vw 4vh #fff, 96vw 28vh #fff, 22vw
      85vh #fff, 5vw 20vh #fff, 34vw 27vh #fff, 8vw 39vh #fff, 69vw 9vh #fff, 97vw 39vh #fff, 88vw
      89vh #fff, 73vw 6vh #fff, 70vw 12vh #fff, 48vw 40vh #fff, 26vw 87vh #fff, 85vw 77vh #fff, 16vw
      100vh #fff, 49vw 15vh #fff, 17vw 59vh #fff, 69vw 95vh #fff, 58vw 84vh #fff, 67vw 88vh #fff, 91vw
      93vh #fff, 46vw 3vh #fff, 81vw 53vh #fff, 15vw 65vh #fff, 41vw 48vh #fff, 20vw 70vh #fff, 16vw
      50vh #fff, 89vw 11vh #fff, 20vw 20vh #fff, 12vw 54vh #fff, 38vw 38vh #fff, 54vw 71vh #fff, 37vw
      80vh #fff, 39vw 24vh #fff, 22vw 10vh #fff, 85vw 48vh #fff, 36vw 31vh #fff, 97vw 86vh #fff, 74vw
      23vh #fff, 51vw 49vh #fff, 49vw 18vh #fff, 67vw 100vh #fff, 41vw 82vh #fff, 4vw 22vh #fff, 42vw
      99vh #fff, 81vw 19vh #fff, 67vw 76vh #fff, 2vw 38vh #fff, 87vw 77vh #fff, 42vw 97vh #fff, 26vw
      84vh #fff, 100vw 6vh #fff, 44vw 42vh #fff, 33vw 82vh #fff, 79vw 11vh #fff, 32vw 80vh #fff, 65vw
      44vh #fff, 16vw 4vh #fff, 72vw 7vh #fff, 98vw 18vh #fff, 45vw 33vh #fff, 92vw 4vh #fff, 20vw
      97vh #fff, 43vw 57vh #fff, 51vw 68vh #fff, 87vw 82vh #fff, 8vw 83vh #fff, 19vw 39vh #fff, 92vw
      68vh #fff, 72vw 70vh #fff, 2vw 26vh #fff, 63vw 65vh #fff, 36vw 45vh #fff, 84vw 67vh #fff, 82vw
      67vh #fff, 10vw 57vh #fff, 87vw 42vh #fff, 97vw 29vh #fff, 60vw 95vh #fff, 19vw 27vh #fff, 5vw
      84vh #fff, 67vw 94vh #fff, 75vw 73vh #fff, 84vw 31vh #fff, 91vw 71vh #fff, 1vw 20vh #fff, 1vw
      38vh #fff, 47vw 37vh #fff, 75vw 17vh #fff, 12vw 73vh #fff, 27vw 28vh #fff, 37vw 89vh #fff, 84vw
      12vh #fff, 50vw 51vh #fff, 15vw 4vh #fff, 78vw 24vh #fff, 43vw 46vh #fff, 12vw 30vh #fff, 85vw
      91vh #fff, 76vw 36vh #fff, 73vw 75vh #fff, 3vw 70vh #fff, 20vw 52vh #fff, 79vw 86vh #fff, 68vw
      44vh #fff, 19vw 82vh #fff, 79vw 25vh #fff, 79vw 9vh #fff, 89vw 39vh #fff, 35vw 98vh #fff, 33vw
      91vh #fff, 25vw 71vh #fff, 56vw 68vh #fff, 2vw 76vh #fff, 13vw 61vh #fff, 2vw 45vh #fff, 11vw
      61vh #fff, 47vw 84vh #fff, 39vw 63vh #fff, 67vw 64vh #fff, 1vw 19vh #fff, 22vw 93vh #fff, 36vw
      6vh #fff, 83vw 87vh #fff, 89vw 66vh #fff, 41vw 69vh #fff, 7vw 48vh #fff, 32vw 62vh #fff, 100vw
      55vh #fff, 34vw 2vh #fff, 42vw 16vh #fff, 57vw 16vh #fff, 69vw 94vh #fff, 23vw 38vh #fff, 14vw
      78vh #fff, 51vw 69vh #fff, 51vw 77vh #fff, 78vw 80vh #fff, 88vw 41vh #fff, 80vw 92vh #fff, 44vw
      68vh #fff, 17vw 32vh #fff, 85vw 22vh #fff, 30vw 67vh #fff, 32vw 8vh #fff, 95vw 91vh #fff, 94vw
      12vh #fff, 10vw 6vh #fff, 18vw 39vh #fff, 15vw 15vh #fff, 72vw 50vh #fff, 98vw 77vh #fff, 29vw
      11vh #fff, 57vw 22vh #fff, 21vw 52vh #fff, 12vw 22vh #fff, 32vw 75vh #fff, 75vw 80vh #fff, 38vw
      12vh #fff, 89vw 31vh #fff, 50vw 92vh #fff, 69vw 96vh #fff, 18vw 8vh #fff, 21vw 65vh #fff, 60vw
      91vh #fff, 37vw 52vh #fff, 12vw 55vh #fff, 67vw 4vh #fff, 86vw 6vh #fff, 37vw 31vh #fff, 38vw
      36vh #fff, 74vw 3vh #fff, 92vw 16vh #fff, 71vw 24vh #fff, 85vw 96vh #fff, 16vw 6vh #fff, 30vw
      28vh #fff, 9vw 82vh #fff, 10vw 21vh #fff, 19vw 42vh #fff, 9vw 80vh #fff, 37vw 41vh #fff, 78vw
      96vh #fff, 72vw 82vh #fff, 43vw 25vh #fff, 66vw 54vh #fff, 20vw 4vh #fff, 81vw 65vh #fff, 55vw
      74vh #fff, 28vw 68vh #fff, 87vw 33vh #fff, 37vw 11vh #fff, 99vw 72vh #fff, 81vw 75vh #fff, 90vw
      94vh #fff, 99vw 64vh #fff, 89vw 72vh #fff, 71vw 20vh #fff, 78vw 20vh #fff, 18vw 18vh #fff, 59vw
      92vh #fff, 77vw 34vh #fff, 26vw 77vh #fff, 2vw 13vh #fff, 65vw 56vh #fff, 49vw 78vh #fff, 62vw
      72vh #fff, 92vw 63vh #fff, 9vw 9vh #fff, 71vw 23vh #fff, 78vw 41vh #fff, 28vw 34vh #fff, 36vw
      38vh #fff, 8vw 94vh #fff, 31vw 87vh #fff, 39vw 93vh #fff, 17vw 67vh #fff, 19vw 79vh #fff, 15vw
      16vh #fff, 73vw 90vh #fff, 29vw 55vh #fff, 40vw 84vh #fff, 93vw 91vh #fff, 85vw 27vh #fff, 3vw
      55vh #fff, 16vw 1vh #fff, 42vw 82vh #fff, 61vw 24vh #fff, 13vw 60vh #fff, 2vw 25vh #fff, 8vw
      89vh #fff, 88vw 40vh #fff, 93vw 66vh #fff, 77vw 96vh #fff, 98vw 64vh #fff, 27vw 57vh #fff, 6vw
      82vh #fff, 5vw 14vh #fff, 98vw 26vh #fff, 19vw 13vh #fff, 4vw 14vh #fff, 74vw 22vh #fff, 54vw
      65vh #fff, 63vw 53vh #fff, 61vw 70vh #fff, 41vw 78vh #fff, 15vw 64vh #fff, 35vw 59vh #fff, 91vw
      66vh #fff, 33vw 19vh #fff, 64vw 67vh #fff, 47vw 89vh #fff, 12vw 77vh #fff, 45vw 38vh #fff, 75vw
      76vh #fff, 68vw 24vh #fff, 40vw 95vh #fff, 36vw 66vh #fff, 5vw 84vh #fff, 44vw 91vh #fff, 50vw
      99vh #fff, 18vw 100vh #fff, 48vw 45vh #fff, 7vw 68vh #fff, 9vw 31vh #fff, 10vw 27vh #fff, 44vw
      79vh #fff, 34vw 74vh #fff, 23vw 60vh #fff, 94vw 32vh #fff, 80vw 45vh #fff, 47vw 73vh #fff, 90vw
      49vh #fff, 26vw 90vh #fff, 48vw 31vh #fff, 5vw 49vh #fff, 33vw 23vh #fff, 88vw 50vh #fff, 96vw
      42vh #fff, 43vw 80vh #fff, 68vw 39vh #fff, 33vw 39vh #fff, 85vw 66vh #fff, 89vw 30vh #fff, 24vw
      14vh #fff, 92vw 32vh #fff, 74vw 48vh #fff, 70vw 32vh #fff, 43vw 70vh #fff, 3vw 60vh #fff, 91vw
      4vh #fff, 97vw 19vh #fff, 16vw 4vh #fff, 84vw 83vh #fff, 87vw 40vh #fff, 39vw 85vh #fff, 52vw
      95vh #fff, 92vw 84vh #fff, 76vw 81vh #fff;
  animation: moveUp 200s linear infinite;
}
.ScssXingKongEffect .item1::after {
  content: '';
  width: 1px;
  height: 1px;
  left: 0;
  top: 100vh;
  position: absolute;
  border-radius: inherit;
  box-shadow: inherit;
}
.ScssXingKongEffect .item2 {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #f10;
  left: 0;
  top: 0;
  box-shadow: 69vw 28vh #fff, 88vw 50vh #fff, 29vw 27vh #fff, 55vw 41vh #fff, 76vw 15vh #fff, 2vw
      43vh #fff, 84vw 55vh #fff, 59vw 68vh #fff, 92vw 41vh #fff, 45vw 43vh #fff, 76vw 71vh #fff, 19vw
      55vh #fff, 39vw 28vh #fff, 82vw 21vh #fff, 73vw 29vh #fff, 43vw 12vh #fff, 90vw 73vh #fff, 50vw
      34vh #fff, 18vw 68vh #fff, 30vw 22vh #fff, 16vw 37vh #fff, 24vw 3vh #fff, 92vw 85vh #fff, 67vw
      94vh #fff, 39vw 54vh #fff, 12vw 35vh #fff, 1vw 9vh #fff, 28vw 83vh #fff, 96vw 2vh #fff, 20vw
      71vh #fff, 60vw 83vh #fff, 4vw 60vh #fff, 53vw 35vh #fff, 38vw 46vh #fff, 93vw 21vh #fff, 99vw
      9vh #fff, 34vw 27vh #fff, 4vw 91vh #fff, 49vw 75vh #fff, 71vw 48vh #fff, 5vw 75vh #fff, 52vw
      9vh #fff, 10vw 65vh #fff, 26vw 17vh #fff, 100vw 74vh #fff, 48vw 61vh #fff, 31vw 49vh #fff, 9vw
      76vh #fff, 66vw 91vh #fff, 81vw 78vh #fff, 2vw 31vh #fff, 13vw 1vh #fff, 13vw 22vh #fff, 80vw
      11vh #fff, 20vw 52vh #fff, 75vw 72vh #fff, 52vw 62vh #fff, 99vw 60vh #fff, 17vw 52vh #fff, 61vw
      60vh #fff, 15vw 30vh #fff, 65vw 83vh #fff, 81vw 58vh #fff, 95vw 93vh #fff, 45vw 68vh #fff, 40vw
      70vh #fff, 82vw 82vh #fff, 71vw 74vh #fff, 65vw 73vh #fff, 98vw 49vh #fff, 62vw 9vh #fff, 26vw
      90vh #fff, 35vw 40vh #fff, 42vw 17vh #fff, 43vw 20vh #fff, 20vw 88vh #fff, 9vw 9vh #fff, 21vw
      18vh #fff, 68vw 8vh #fff, 51vw 92vh #fff, 20vw 3vh #fff, 4vw 62vh #fff, 23vw 4vh #fff, 55vw
      83vh #fff, 63vw 10vh #fff, 64vw 37vh #fff, 70vw 35vh #fff, 30vw 1vh #fff, 40vw 86vh #fff, 23vw
      43vh #fff, 29vw 1vh #fff, 36vw 51vh #fff, 68vw 50vh #fff, 17vw 86vh #fff, 70vw 80vh #fff, 62vw
      78vh #fff, 38vw 2vh #fff, 54vw 94vh #fff, 73vw 66vh #fff, 15vw 55vh #fff, 90vw 89vh #fff, 84vw
      12vh #fff, 70vw 84vh #fff, 7vw 75vh #fff, 18vw 98vh #fff, 61vw 70vh #fff, 94vw 9vh #fff, 33vw
      38vh #fff, 98vw 40vh #fff, 89vw 43vh #fff, 17vw 38vh #fff, 100vw 21vh #fff, 51vw 11vh #fff, 43vw
      73vh #fff, 21vw 32vh #fff, 22vw 100vh #fff, 40vw 44vh #fff, 52vw 71vh #fff, 35vw 40vh #fff, 25vw
      15vh #fff, 18vw 32vh #fff, 98vw 8vh #fff, 79vw 40vh #fff, 61vw 35vh #fff, 35vw 81vh #fff, 94vw
      70vh #fff, 87vw 28vh #fff, 24vw 3vh #fff, 75vw 93vh #fff, 38vw 96vh #fff, 78vw 67vh #fff, 49vw
      70vh #fff, 15vw 59vh #fff, 48vw 21vh #fff, 97vw 76vh #fff, 16vw 4vh #fff, 85vw 49vh #fff, 62vw
      12vh #fff, 2vw 53vh #fff, 38vw 66vh #fff, 83vw 19vh #fff, 95vw 36vh #fff, 16vw 72vh #fff, 7vw
      90vh #fff, 29vw 72vh #fff, 45vw 24vh #fff, 94vw 38vh #fff, 79vw 57vh #fff, 46vw 35vh #fff, 58vw
      28vh #fff, 97vw 58vh #fff, 9vw 43vh #fff, 65vw 83vh #fff, 79vw 13vh #fff, 20vw 85vh #fff, 80vw
      15vh #fff, 4vw 84vh #fff, 79vw 55vh #fff, 67vw 5vh #fff, 87vw 89vh #fff, 27vw 67vh #fff, 23vw
      47vh #fff, 43vw 25vh #fff, 22vw 77vh #fff, 86vw 46vh #fff, 90vw 45vh #fff, 20vw 57vh #fff, 26vw
      58vh #fff, 95vw 77vh #fff, 18vw 96vh #fff, 83vw 92vh #fff, 23vw 38vh #fff, 50vw 63vh #fff, 53vw
      93vh #fff, 18vw 27vh #fff, 95vw 69vh #fff, 8vw 96vh #fff, 57vw 74vh #fff, 71vw 12vh #fff, 83vw
      68vh #fff, 19vw 3vh #fff, 62vw 89vh #fff, 22vw 32vh #fff, 20vw 2vh #fff, 12vw 23vh #fff, 71vw
      74vh #fff, 5vw 88vh #fff, 5vw 8vh #fff, 4vw 36vh #fff, 46vw 43vh #fff, 74vw 76vh #fff, 22vw
      12vh #fff, 69vw 79vh #fff, 39vw 55vh #fff, 38vw 34vh #fff, 19vw 41vh #fff, 90vw 26vh #fff, 97vw
      27vh #fff, 77vw 65vh #fff, 78vw 83vh #fff, 63vw 27vh #fff, 44vw 31vh #fff, 12vw 82vh #fff, 1vw
      62vh #fff, 44vw 75vh #fff, 97vw 52vh #fff, 100vw 62vh #fff, 68vw 87vh #fff, 81vw 39vh #fff, 91vw
      46vh #fff, 3vw 11vh #fff, 45vw 20vh #fff, 29vw 87vh #fff, 41vw 79vh #fff, 41vw 88vh #fff, 65vw
      18vh #fff, 66vw 6vh #fff, 92vw 54vh #fff, 16vw 81vh #fff, 60vw 62vh #fff, 72vw 35vh #fff, 61vw
      54vh #fff, 96vw 12vh #fff, 93vw 57vh #fff, 34vw 16vh #fff, 70vw 32vh #fff, 84vw 41vh #fff, 96vw
      98vh #fff, 35vw 53vh #fff, 2vw 69vh #fff, 47vw 79vh #fff, 27vw 28vh #fff, 97vw 58vh #fff, 72vw
      13vh #fff, 19vw 85vh #fff, 56vw 14vh #fff, 91vw 7vh #fff, 43vw 91vh #fff, 34vw 92vh #fff, 63vw
      32vh #fff, 36vw 12vh #fff, 52vw 55vh #fff, 72vw 67vh #fff, 77vw 70vh #fff, 74vw 96vh #fff, 60vw
      80vh #fff, 70vw 52vh #fff, 97vw 18vh #fff, 87vw 31vh #fff, 44vw 89vh #fff;
  animation: moveUp 100s linear infinite;
}
.ScssXingKongEffect .item2::after {
  content: '';
  width: 2px;
  height: 2px;
  left: 0;
  top: 100vh;
  position: absolute;
  border-radius: inherit;
  box-shadow: inherit;
}
.ScssXingKongEffect .item3 {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #f10;
  left: 0;
  top: 0;
  box-shadow: 38vw 55vh #fff, 96vw 76vh #fff, 25vw 69vh #fff, 37vw 86vh #fff, 17vw 41vh #fff, 74vw
      71vh #fff, 30vw 30vh #fff, 29vw 13vh #fff, 16vw 78vh #fff, 80vw 24vh #fff, 6vw 54vh #fff, 30vw
      96vh #fff, 90vw 8vh #fff, 12vw 89vh #fff, 1vw 75vh #fff, 46vw 6vh #fff, 50vw 42vh #fff, 94vw
      57vh #fff, 17vw 21vh #fff, 2vw 37vh #fff, 30vw 36vh #fff, 11vw 83vh #fff, 76vw 2vh #fff, 63vw
      91vh #fff, 15vw 65vh #fff, 6vw 100vh #fff, 1vw 71vh #fff, 5vw 53vh #fff, 19vw 31vh #fff, 22vw
      11vh #fff, 3vw 80vh #fff, 34vw 60vh #fff, 19vw 35vh #fff, 23vw 4vh #fff, 76vw 22vh #fff, 31vw
      95vh #fff, 73vw 99vh #fff, 59vw 96vh #fff, 40vw 95vh #fff, 34vw 46vh #fff, 94vw 17vh #fff, 19vw
      69vh #fff, 92vw 33vh #fff, 19vw 100vh #fff, 33vw 56vh #fff, 20vw 8vh #fff, 71vw 18vh #fff, 58vw
      26vh #fff, 2vw 1vh #fff, 95vw 36vh #fff, 59vw 15vh #fff, 42vw 83vh #fff, 75vw 4vh #fff, 88vw
      33vh #fff, 85vw 18vh #fff, 23vw 99vh #fff, 92vw 86vh #fff, 17vw 2vh #fff, 12vw 84vh #fff, 2vw
      8vh #fff, 20vw 84vh #fff, 49vw 55vh #fff, 91vw 79vh #fff, 62vw 94vh #fff, 65vw 19vh #fff, 84vw
      95vh #fff, 96vw 15vh #fff, 31vw 84vh #fff, 92vw 88vh #fff, 46vw 1vh #fff, 66vw 92vh #fff, 40vw
      18vh #fff, 22vw 74vh #fff, 47vw 5vh #fff, 24vw 23vh #fff, 64vw 17vh #fff, 95vw 78vh #fff, 1vw
      38vh #fff, 63vw 84vh #fff, 87vw 49vh #fff, 45vw 18vh #fff, 9vw 51vh #fff, 26vw 39vh #fff, 53vw
      70vh #fff, 71vw 100vh #fff, 50vw 7vh #fff, 93vw 82vh #fff, 43vw 18vh #fff, 87vw 13vh #fff, 34vw
      40vh #fff, 70vw 77vh #fff, 81vw 60vh #fff, 74vw 48vh #fff, 23vw 74vh #fff, 70vw 26vh #fff, 45vw
      19vh #fff, 67vw 90vh #fff, 57vw 4vh #fff, 55vw 73vh #fff, 50vw 98vh #fff, 100vw 98vh #fff, 21vw
      38vh #fff, 75vw 69vh #fff, 27vw 20vh #fff, 56vw 59vh #fff, 40vw 56vh #fff, 71vw 25vh #fff, 43vw
      4vh #fff, 35vw 85vh #fff, 1vw 68vh #fff, 20vw 17vh #fff, 13vw 55vh #fff, 48vw 50vh #fff, 74vw
      71vh #fff, 1vw 30vh #fff, 62vw 15vh #fff, 80vw 96vh #fff, 26vw 68vh #fff, 75vw 2vh #fff, 82vw
      46vh #fff, 26vw 71vh #fff, 69vw 63vh #fff, 8vw 21vh #fff, 89vw 20vh #fff, 82vw 44vh #fff;
  animation: moveUp 50s linear infinite;
}
.ScssXingKongEffect .item3::after {
  content: '';
  width: 3px;
  height: 3px;
  left: 0;
  top: 100vh;
  position: absolute;
  border-radius: inherit;
  box-shadow: inherit;
}
@keyframes moveUp {
  100% {
    transform: translateY(-100vh);
  }
}
.ScssXingKongEffect .title {
  line-height: 500px;
  text-align: center;
  font-size: 50px;
  color: #fff;
}
```

:::

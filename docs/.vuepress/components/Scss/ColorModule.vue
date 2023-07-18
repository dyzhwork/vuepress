<template>
  <div class="ScssColorModule">
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
    <div class="btn_item">按钮</div>
  </div>
</template>

<script>
export default {
  name: 'ScssColorModule'
}
</script>

<style lang="scss" scoped>
.ScssColorModule {
  border: 1px dashed #000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  $btn_colors: #0375d3, #07e224, #ecc309, #d81414, #606267;
  @for $i from 1 through length($btn_colors) {
    .btn_item:nth-of-type(#{$i}) {
      $color: nth($btn_colors, $i);
      background: $color;
      color: #fff;
      line-height: 35px;
      padding: 0 20px;
      border-radius: 5px;
      &:hover {
        background: lighten($color, 10%);
      }
      &:active {
        background: darken($color, 10%);
      }
      &:disabled {
        background: lighten($color, 20%);
        color: lighten($color, 40%);
      }
    }
  }
}
</style>

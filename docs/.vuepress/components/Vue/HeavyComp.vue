<template>
  <div class="HeavyComp">
    <div class="item" v-for="item in 5000"></div>
  </div>
</template>
<script>
export default {
  name: 'HeavyComp'
}
</script>
<style lang="scss" scoped>
.HeavyComp {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-between;

  .item {
    width: 5px;
    height: 2px;
    background: #ccc;
  }
}
</style>

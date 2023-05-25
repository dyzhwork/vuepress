<template>
  <div class="LazyLoadImg">
    <!-- 图片懒加载 -->
    <img
      class="img_item"
      :src_url="$withBase(`/image/javascript/js_lazy_load_img${item}.jpg`)"
      v-for="item in 15"
      :key="item"
    />
  </div>
</template>

<script>
export default {
  name: 'LazyLoadImg',
  data() {
    return {
      imgSrcList: []
    }
  },
  mounted() {
    // 获取被观察元素
    this.imgSrcList = document.querySelectorAll('.img_item')
    // 实例化观察器
    const EleOb = new IntersectionObserver((entries) => {
      // 观察元素交叉情况
      entries.forEach((item) => {
        if (item.intersectionRatio > 0) {
          item.target.src = item.target.attributes[0].value
          // 停止观察该元素
          EleOb.unobserve(item.target)
        }
      })
    })
    // 循环元素
    this.imgSrcList.forEach((item) => {
      // 给元素设置动态加载图片
      item.src = this.$withBase(`/image/loading1.gif`)
      // 开始观察元素
      EleOb.observe(item)
    })
  }
}
</script>

<style>
.LazyLoadImg {
  height: 500px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.img_item {
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 5px #807e7e;
}
</style>

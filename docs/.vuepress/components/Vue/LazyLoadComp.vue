<template>
  <div class="LazyLoadComp">
    <div v-for="item in 210">
      <HeavyComp v-if="defer(item)"></HeavyComp>
    </div>
  </div>
</template>
<script>
import HeavyComp from './HeavyComp.vue'
export default {
  name: 'LazyLoadComp',
  components: { HeavyComp },
  data() {
    return {
      frameCount: 0
    }
  },
  mounted() {
    const refreshFrameCount = (maxFrameCount = 210) => {
      requestAnimationFrame(() => {
        this.frameCount++
        if (this.frameCount < maxFrameCount) {
          refreshFrameCount()
        }
      })
    }
    refreshFrameCount(201)
  },
  methods: {
    defer(curCount) {
      return this.frameCount >= curCount
    }
  }
}
</script>
<style lang="scss" scoped>
.LazyLoadComp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  overflow: auto;
  height: 500px;
  & > div {
    border: 2px solid red;
  }
}
</style>

<template>
  <button :class="throttle ? 'btn_area' : ''" @click="handleClickButton">{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonJS',
  props: {
    throttle: {
      type: Boolean,
      dafault: false
    },
    text: {
      type: String,
      dafault: '按钮'
    }
  },
  methods: {
    handleClickButton() {
      if (this.throttle) {
        console.log('正在点击节流按钮')
      } else {
        console.log('正在点击普通按钮')
      }
    }
  }
}
</script>

<style>
@keyframes throttle_by_css {
  from {
    pointer-events: none;
    background: #464242;
    color: #1c09c9;
  }
  to {
    pointer-events: all;
    background: #1c09c9;
    color: #c91313;
  }
}
.btn_area {
  animation: throttle_by_css 2s forwards;
}
.btn_area:active {
  animation: none;
}
</style>

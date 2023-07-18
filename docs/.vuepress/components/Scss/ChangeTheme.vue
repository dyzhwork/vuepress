<template>
  <div class="ScssChangeTheme">
    <div class="clock">
      <div class="center"></div>
    </div>
    <div class="change_btn" @click="changeThemeColor">点击这儿切换主题</div>
  </div>
</template>

<script>
export default {
  name: 'ScssChangeTheme',
  data() {
    return {
      domInfo: null
    }
  },
  mounted() {
    this.getDomInfo()
  },
  methods: {
    // 获取dom
    getDomInfo() {
      this.domInfo = document.getElementsByTagName('html')[0]
      if (this.domInfo.getAttribute('data-theme') == 'light') {
        this.domInfo.setAttribute('data-theme', 'dark')
      } else if (this.domInfo.getAttribute('data-theme') == 'dark') {
        this.domInfo.setAttribute('data-theme', 'light')
      } else {
        this.domInfo.setAttribute('data-theme', 'light')
      }
    },

    // 点击切换主题
    changeThemeColor() {
      console.log('changeThemeColor')
      this.getDomInfo()
    }
  }
}
</script>

<style lang="scss" scoped>
// 定义主题对象
$themes: (
  light: (
    bgColor: pink,
    textColor: blue
  ),
  dark: (
    bgColor: green,
    textColor: #fff
  )
);
$curTheme: light;
// 写一个混合
@mixin useTheme() {
  /* 和主题相关的样式 */
  @each $key, $value in $themes {
    $curTheme: $key !global;
    html[data-theme='#{$key}'] & {
      @content;
    }
  }
}
@function getVar($key) {
  $themeMap: map-get(
    $map: $themes,
    $key: $curTheme
  );
  @return map-get($themeMap, $key);
}

.ScssChangeTheme {
  height: 300px;
  border: 1px solid red;
  text-align: center;
  @include useTheme() {
    background: getVar('bgColor');
    color: getVar('textColor');
  }
  .clock {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    @include useTheme() {
      background: getVar('textColor');
      color: getVar('textColor');
      border: 5px solid #a84444;
    }
    .center {
      width: 10px;
      height: 10px;
      @include useTheme() {
        background: getVar('bgColor');
        color: getVar('textColor');
      }
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .change_btn {
    text-align: center;
    display: inline-block;
    line-height: 30px;
    cursor: pointer;
    margin-top: 30px;
    color: red;
  }
}
</style>

<template>
  <div class="WebAudioButton">
    <div id="button">鼠标点击发出声音</div>
  </div>
</template>

<script>
export default {
  name: 'WebAudioButton',
  data() {
    return {
      // 按钮元素
      eleButton: null,
      // 创建新的音频上下文接口
      audioCtx: null,
      // 发出的声音频率数据，表现为音调的高低
      arrFrequency: [
        196.0, 220.0, 246.94, 261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25, 587.33,
        659.25, 698.46, 783.99, 880.0, 987.77, 1046.5
      ],
      // 音调依次递增或者递减处理需要的参数
      start: 0,
      direction: 1
    }
  },
  mounted() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    if (!window.AudioContext) {
      alert('当前浏览器不支持Web Audio API')
      return
    }
    // 鼠标hover我们的按钮的时候
    document.getElementById('button').addEventListener('click', () => {
      this.playVoice()
    })
    // 按下任意键盘键时
    document.onkeydown = () => {
      this.playVoice()
    }
  },
  methods: {
    playVoice() {
      this.audioCtx = new AudioContext()
      // 当前频率
      var frequency = this.arrFrequency[this.start]
      // 如果到头，改变音调的变化规则（增减切换）
      if (!frequency) {
        this.direction = -1 * this.direction
        this.start = this.start + 2 * this.direction
        frequency = this.arrFrequency[this.start]
      }
      // 改变索引，下一次hover时候使用
      this.start = this.start + this.direction

      // 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
      var oscillator = this.audioCtx.createOscillator()
      // 创建一个GainNode,它可以控制音频的总音量
      var gainNode = this.audioCtx.createGain()
      // 把音量，音调和终节点进行关联
      oscillator.connect(gainNode)
      // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
      gainNode.connect(this.audioCtx.destination)
      // 指定音调的类型，其他还有square|triangle|sawtooth
      oscillator.type = 'sine'
      // 设置当前播放声音的频率，也就是最终播放声音的调调
      oscillator.frequency.value = frequency
      // 当前时间设置音量为0
      gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime)
      // 0.01秒后音量为1
      gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + 0.01)
      // 音调从当前时间开始播放
      oscillator.start(this.audioCtx.currentTime)
      // 1秒内声音慢慢降低，是个不错的停止声音的方法
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1)
      // 1秒后完全停止声音
      oscillator.stop(this.audioCtx.currentTime + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.WebAudioButton {
  text-align: center;
  padding: 10px;
  #button {
    line-height: 50px;
    padding: 20px;
    display: inline-block;
    background: #ccc;
    color: red;
    border: 1px solid #000;
    user-select: none;
  }
}
</style>

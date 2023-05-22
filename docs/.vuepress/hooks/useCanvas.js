export const useCanvas = (className) => {
  // dom信息
  const domInfo = {
    container: null,
    canvas: null,
    ctx: null
  }

  // 初始化数据
  const initData = () => {
    // 获取元素
    domInfo.container = document.querySelector(className)
    domInfo.canvas = document.querySelector('canvas')
    domInfo.ctx = domInfo.canvas.getContext('2d')
    const rect = domInfo.container.getBoundingClientRect()

    // 设置canvas宽高
    domInfo.canvas.width = rect.width
    domInfo.canvas.height = rect.height
  }
  // 浏览器窗口改变大小时重新运行函数重置宽高
  const onReSize = () => {
    window.onresize = () => {
      initData()
    }
  }
  return {
    domInfo,
    initData,
    onReSize
  }
}

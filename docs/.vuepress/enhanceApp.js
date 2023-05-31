// 客户端应用的增强
export default ({ Vue, options, router, siteData }) => {
  // 注册一个图片懒加载的全局指令
  Vue.directive('lazy', {
    bind(el) {
      // 绑定时的处理逻辑
      el.src = 'https://dyzhwork.github.io/images/Index/loading5.gif'
    },
    inserted(el, binding) {
      // 插入节点时的处理逻辑
      const options = {
        rootMargin: '0px',
        threshold: 0.5
      }
      const imgObserver = new IntersectionObserver((el) => {
        if (el[0].isIntersecting) {
          console.log(el[0].isIntersecting)
          const lazyImage = el[0].target
          lazyImage.src = binding.value
          imgObserver.unobserve(lazyImage)
        }
      }, options)
      imgObserver.observe(el)
    }
  })
}

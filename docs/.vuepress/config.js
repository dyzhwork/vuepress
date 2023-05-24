// menu内容主要针对导航栏和侧边栏菜单进行相关配置
const menu = require('./menu.config.js')
// 配置文件的入口文件
module.exports = {
  theme: 'vdoing',
  // 配置部署路径->仓库名称
  base: '/deploydoc/',
  title: '你好啊', // 顶部左侧标题
  description: 'VuePress相关文档学习', // html 文件描述
  markdown: {
    lineNumbers: true
  },
  head: [['link', { rel: 'icon', href: '/image/panda.png' }]],
  themeConfig: {
    logo: '/image/panda.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端相关', items: menu.navBarlist.front_end_correlation },
      { text: '后端相关', items: menu.navBarlist.back_end_correlation },
      { text: 'Git相关', items: menu.navBarlist.git_correlation },
      { text: '报错解决', link: '/views/error_resolution/' },
      { text: '谷歌', link: 'https://google.com' }
    ],
    // 侧边栏 有四种写法,数组,数组对象,对象数组,自动生成
    sidebar: {
      '/views/html/': menu.sideBarList.html,
      '/views/css/': menu.sideBarList.css,
      '/views/javascript/': menu.sideBarList.javascript,
      '/views/canvas/': menu.sideBarList.canvas,
      '/views/echarts/': menu.sideBarList.echarts,
      '/views/error_resolution/': menu.sideBarList.error_resolution,
    }
  }
}

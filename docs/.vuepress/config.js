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
  configureWebpack: {
    resolve: {
      alias: {
        '@pub': '/docs/.vuepress/public'
      }
    }
  },
  head: [['link', { rel: 'icon', href: 'https://dyzhwork.github.io/images/Index/pandalogo.png' }]],
  themeConfig: {
    logo: '/img/panda.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端相关', items: menu.navBarlist.front_end_correlation },
      { text: '后端相关', items: menu.navBarlist.back_end_correlation },
      { text: 'Git相关', link: '/views/git/' },
      { text: '报错解决', link: '/views/error_resolution/' },
      { text: 'Vue前端框架', link: '/views/vue/' },
      { text: '前端工程化', link: '/views/engineering/' },
      { text: '学习VuePress', link: '/views/vuepress/' }
    ],
    // 侧边栏 有四种写法,数组,数组对象,对象数组,自动生成
    sidebar: {
      '/views/html/': menu.sideBarList.html,
      '/views/css/': menu.sideBarList.css,
      '/views/javascript/': menu.sideBarList.javascript,
      '/views/canvas/': menu.sideBarList.canvas,
      '/views/echarts/': menu.sideBarList.echarts,
      '/views/animation/': menu.sideBarList.animation,
      '/views/uniapp/': menu.sideBarList.uniapp,
      '/views/desktop/': menu.sideBarList.desktop,
      '/views/git/': menu.sideBarList.git,
      '/views/error_resolution/': menu.sideBarList.error_resolution,
      '/views/node/': menu.sideBarList.nodejs,
      '/views/linux/': menu.sideBarList.linux,
      '/views/windows/': menu.sideBarList.windows,
      '/views/vue/': menu.sideBarList.vuejs,
      '/views/vuepress/': menu.sideBarList.vuepress
    },
    sidebarDepth: 2,
    contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
    blogger: {
      avatar: 'https://dyzhwork.github.io/images/Avatar/avatar.png',
      // name: 'CODER-DYZ',
      slogan: '前端打工人'
    },
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:dyzhwork@gmail.com'
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/dyzhwork'
        },
        {
          iconClass: 'icon-juejin',
          title: '掘金主页',
          link: 'https://juejin.cn/user/2714023479748958'
        }
      ]
    },
    plugins: [
      // [
      //   'one-click-copy', // 代码块复制按钮
      //   {
      //     copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      //     copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      //     duration: 1000, // prompt message display time.
      //     showInMobile: false // whether to display on the mobile side, default: false.
      //   }
      // ],
      // [
      //   'vuepress-plugin-zooming', // 放大图片
      //   {
      //     selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      //     options: {
      //       bgColor: 'rgba(0,0,0,0.6)'
      //     }
      //   }
      // ],
      // [
      //   '@vuepress/last-updated', // "上次更新"时间格式
      //   {
      //     transformer: (timestamp, lang) => {
      //       return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      //     }
      //   }
      // ]
    ]
  }
}

// 配置文件的入口文件
module.exports = {
  theme: 'vdoing',
  // 配置部署路径->仓库名称
  base: '/deploydoc/',
  title: '你好啊', // 顶部左侧标题
  description: 'VuePress相关文档学习', // html 文件描述
  head: [['link', { rel: 'icon', href: '/image/panda.png' }]],
  themeConfig: {
    logo: '/image/panda.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端相关',
        items: [
          { text: '纯HTML', items: [{ text: 'HTML5', link: '/html/' }] },
          { text: '纯CSS', items: [{ text: 'CSS3', link: '/css/' }] },
          {
            text: 'JavaScript',
            items: [
              { text: 'JavaScript', link: '/javascript/' },
              { text: 'Canvas', link: '/canvas/' },
              { text: 'Echarts', link: '/echarts/' }
            ]
          }
        ]
      },
      {
        text: '后端相关',
        items: [
          {
            text: 'NodeJS',
            items: [
              { text: '原生nodeJS', link: '/node/' },
              { text: 'Express框架', link: '/express/' },
              { text: 'Sequelize框架', link: '/sequelize/' }
            ]
          },
          { text: 'API', items: [{ text: 'apifox', link: '/api/' }] }
        ]
      },
      {
        text: 'Git相关',
        items: [
          { text: 'git下载安装配置', link: '/node/' },
          { text: 'git可视化', link: '/express/' },
          { text: 'git报错', link: '/sequelize/' }
        ]
      },
      { text: '报错整理', link: '/deal-with-error/' },
      { text: '谷歌', link: 'https://google.com' }
    ],
    // 侧边栏 有四种写法,数组,数组对象,对象数组,自动生成
    sidebar: {
      '/html': [
        {
          title: '标签元素',
          sidebarDepath: 2,
          children: [
            { title: '一、基本元素', path: '/html/basic-element' },
            { title: '二、常用元素', path: '/html/common-element' },
            { title: '三、h5新增元素', path: '/html/h5-add-element' }
          ]
        }
      ],
      '/css': [
        {
          title: '装扮标签元素',
          sidebarDepath: 2,
          children: []
        }
      ],
      '/javascript': [
        {
          title: '操作标签元素',
          sidebarDepath: 2,
          children: [{ title: '原生事件', path: '/javascript/origin-event' }]
        }
      ],
      '/canvas': [
        {
          title: 'canvas绘图API',
          sidebarDepath: 2,
          children: [
            { title: '小球碰撞回弹效果', path: '/canvas/pelletcollision' },
            { title: '两个小球连接运动效果', path: '/canvas/kinematicconnection' }
          ]
        }
      ]
    }
  }
}

module.exports = {
  navBarlist: {
    // 前端相关
    front_end_correlation: [
      { text: '纯HTML', items: [{ text: 'HTML5', link: '/views/html/' }] },
      { text: '纯CSS', items: [{ text: 'CSS3', link: '/views/css/' }] },
      {
        text: 'JavaScript',
        items: [
          { text: 'JS', link: '/views/javascript/' },
          { text: 'Canvas', link: '/views/canvas/' },
          { text: 'Echarts', link: '/views/echarts/' }
        ]
      }
    ],
    // 后端相关
    back_end_correlation: [
      {
        text: 'NodeJS',
        items: [
          { text: 'node基础', link: '/views/node/' },
          { text: 'Express框架', link: '/views/express/' },
          { text: 'Sequelize框架', link: '/views/sequelize/' }
        ]
      },
      { text: 'API管理', items: [{ text: 'apifox', link: '/views/apifox/' }] }
    ],
    // Git相关
    git_correlation: [
      { text: 'Git下载安装', link: '/views/git/git-install' },
      { text: 'Git有必要配置', link: '/views/git/git-config' },
      { text: 'Git的可视化', link: '/views/git/git-visualization' },
      { text: 'Git相关报错', link: '/views/git/git-handle-error' }
    ]
  },
  sideBarList: {
    html: [
      { title: '一、基本元素', sidebarDepath: 2, path: '/views/html/basic-element' },
      { title: '二、常用元素', sidebarDepath: 2, path: '/views/html/common-element' },
      { title: '三、H5新增元素', sidebarDepath: 2, path: '/views/html/h5-add-element' }
    ],
    css: [
      {
        title: '装扮标签元素',
        sidebarDepath: 2,
        children: [
          { title: '一、CSS语法', path: '/views/css/css-syntactic' },
          { title: '二、CSS选择器', path: '/views/css/css-selector' }
        ]
      }
    ],
    javascript: [
      {
        title: 'JS的前半生',
        sidebarDepath: 2,
        children: [{ title: '原生事件', path: '/views/javascript/ES5/origin-event' }]
      },
      {
        title: 'ES6后半世',
        sidebarDepath: 2,
        children: [{ title: '原生事件', path: '/views/javascript/ES6/origin-event' }]
      }
    ],
    canvas: [
      {
        title: 'canvas绘图API',
        sidebarDepath: 2,
        children: [
          { title: '小球碰撞回弹效果', path: '/views/canvas/pelletcollision' },
          { title: '两个小球连接运动效果', path: '/views/canvas/kinematicconnection' }
        ]
      }
    ],
    echarts: [
      {
        title: 'Echarts数据可视化',
        sidebarDepath: 2,
        children: [{ title: '柱状图', path: '/views/echarts/chart-bar' }]
      }
    ],
    // 报错解决
    error_resolution: [
      {
        title: '一、UI组件库',
        sidebarDepath: 2,
        children: [
          { title: 'Antd-Vue', path: '/views/error_resolution/uicomponent/antd-vue' },
          { title: 'element UI' },
          { title: 'element plus' }
        ]
      },
      {
        title: '二、NPM相关报错',
        sidebarDepath: 2,
        children: []
      },
      {
        title: '三、Linux相关',
        sidebarDepath: 2,
        children: []
      }
    ],
    // nodejs
    nodejs: [
      { title: '下载', sidebarDepath: 3, path: '/views/node/node-download' },
      { title: '安装', sidebarDepath: 3, path: '/views/node/node-install' },
      { title: 'nvm', sidebarDepath: 3, path: '/views/node/node-version-manage' },
      { title: '配置', sidebarDepath: 3, path: '/views/node/node-config' },
      { title: 'npm', sidebarDepath: 3, path: '/views/node/npm' },
      { title: 'pnpm', sidebarDepath: 3, path: '/views/node/pnpm' },
      { title: 'yarn', sidebarDepath: 3, path: '/views/node/yarn' },
      { title: 'nrm', sidebarDepath: 3, path: '/views/node/npm-registry-manager' }
    ],
    // vuejs
    vuejs: [
      {
        title: 'Vue脚手架搭项目',
        sidebarDepath: 2,
        children: [
          { title: '传统cli命令行', path: '/views/vue/cli' },
          { title: '高速高效Vite', path: '/views/vue/vite' }
        ]
      },
      {
        title: 'Vue前端配置代理',
        sidebarDepath: 2,
        children: [{ title: 'proxy配置代理', path: '/views/vue/proxy' }]
      }
    ]
  }
}

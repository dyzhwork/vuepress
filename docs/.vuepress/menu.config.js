module.exports = {
  navBarlist: {
    // 前端相关
    front_end_correlation: [
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
    ],
    // 后端相关
    back_end_correlation: [
      {
        text: 'NodeJS',
        items: [
          { text: '原生nodeJS', link: '/node/' },
          { text: 'Express框架', link: '/express/' },
          { text: 'Sequelize框架', link: '/sequelize/' }
        ]
      },
      { text: 'API', items: [{ text: 'apifox', link: '/api/' }] }
    ],
    // Git相关
    git_correlation: [
      { text: 'Git下载安装', link: '/git/git-install' },
      { text: 'Git有必要配置', link: '/git/git-config' },
      { text: 'Git的可视化', link: '/git/git-visualization' },
      { text: 'Git相关报错', link: '/git/git-handle-error' }
    ]
  },
  sideBarList: {
    html: [
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
    css: [
      {
        title: '装扮标签元素',
        sidebarDepath: 2,
        children: [
          { title: '一、CSS语法', path: '/css/css-syntactic' },
          { title: '二、CSS选择器', path: '/css/css-selector' }
        ]
      }
    ],
    javascript: [
      {
        title: '操作标签元素',
        sidebarDepath: 2,
        children: [{ title: '原生事件', path: '/javascript/origin-event' }]
      }
    ],
    canvas: [
      {
        title: 'canvas绘图API',
        sidebarDepath: 2,
        children: [
          { title: '小球碰撞回弹效果', path: '/canvas/pelletcollision' },
          { title: '两个小球连接运动效果', path: '/canvas/kinematicconnection' }
        ]
      }
    ],
    echarts: [
      {
        title: 'Echarts数据可视化',
        sidebarDepath: 2,
        children: [{ title: '柱状图', path: '/echarts/chart-bar' }]
      }
    ]
  }
}

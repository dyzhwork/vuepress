module.exports = {
  html: [
    { title: '一、基本元素', sidebarDepath: 2, path: '/views/html/basic-element' },
    { title: '二、常用元素', sidebarDepath: 2, path: '/views/html/common-element' },
    { title: '三、H5新增元素', sidebarDepath: 2, path: '/views/html/h5-add-element' }
  ],
  css: [
    {
      title: 'CSS基础',
      sidebarDepath: 2,
      children: [
        { title: '一、CSS简介', path: '/views/css/css-introduction' },
        { title: '二、CSS语法', path: '/views/css/css-syntactic' },
        { title: '三、CSS选择器', path: '/views/css/css-selector' },
        { title: '四、CSS变量', path: '/views/css/css-variable' },
        { title: '五、CSS函数', path: '/views/css/css-function' },
        { title: '六、CSS作用域', path: '/views/css/css-scoped' }
      ]
    },
    {
      title: 'PostCSS-CSS转换工具',
      sidebarDepath: 2,
      children: [
        { title: '一、PostCSS简介', path: '/views/css/postcss/introduction' },
        { title: '二、PostCSS语法', path: '/views/css/postcss/syntactic' }
      ]
    },
    {
      title: 'Less预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Less简介', path: '/views/css/less/introduction' },
        { title: '二、Less语法', path: '/views/css/less/syntactic' }
      ]
    },
    {
      title: 'Scss预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Scss简介', path: '/views/css/scss/introduction' },
        { title: '二、Scss语法', path: '/views/css/scss/syntactic' }
      ]
    },
    {
      title: 'Sass预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Sass简介', path: '/views/css/sass/introduction' },
        { title: '二、Sass语法', path: '/views/css/sass/syntactic' }
      ]
    },
    {
      title: 'Stylus预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Stylus简介', path: '/views/css/stylus/introduction' },
        { title: '二、Stylus语法', path: '/views/css/stylus/syntactic' }
      ]
    }
  ],
  javascript: [
    {
      title: 'JS的前半生',
      sidebarDepath: 2,
      children: [
        { title: '获取元素', path: '/views/javascript/ES5/get-element' },
        { title: '事件监听', path: '/views/javascript/ES5/event-listen' },
        { title: '实现防抖', path: '/views/javascript/ES5/anti-shaking' },
        { title: '实现节流', path: '/views/javascript/ES5/throttling' },
        { title: '图片懒加载', path: '/views/javascript/ES5/img-lazy-load' }
      ]
    },
    {
      title: 'ES6后半世',
      sidebarDepath: 2,
      children: [
        { title: '1. 什么是ES6', path: '/views/javascript/ES6/es6itro' },
        { title: '2. 高阶函数', path: '/views/javascript/ES6/higher-order-function' },
        { title: '3. 操作字符串', path: '/views/javascript/ES6/string' },
        { title: '4. 操作对象', path: '/views/javascript/ES6/object' },
        { title: '5. 操作数组', path: '/views/javascript/ES6/array' }
      ]
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
    { title: '二、NPM相关报错', sidebarDepath: 2, children: [] },
    { title: '三、Linux相关', sidebarDepath: 2, children: [] }
  ],
  // nodejs
  nodejs: [
    { title: '下载NodeJS', sidebarDepath: 3, path: '/views/node/node-download' },
    { title: '安装NodeJS', sidebarDepath: 3, path: '/views/node/node-install' },
    { title: 'nvm管理NodeJS', sidebarDepath: 3, path: '/views/node/node-version-manage' },
    { title: '相关环境配置', sidebarDepath: 3, path: '/views/node/node-config' },
    { title: 'npm包管理器', sidebarDepath: 3, path: '/views/node/npm' },
    { title: 'pnpm高性能包管理器', sidebarDepath: 3, path: '/views/node/pnpm' },
    { title: 'yarn包管理器', sidebarDepath: 3, path: '/views/node/yarn' },
    { title: 'nrm源管理器', sidebarDepath: 3, path: '/views/node/npm-registry-manager' }
  ],
  // vuejs
  vuejs: [
    {
      title: 'Vue脚手架搭项目',
      sidebarDepath: 2,
      children: [
        { title: '传统cli命令行', path: '/views/vue/scaffold/cli' },
        { title: '高速高效Vite', path: '/views/vue/scaffold/vite' }
      ]
    },
    {
      title: 'Vue相关常用API',
      sidebarDepath: 2,
      children: [
        { title: '定义数据', path: '/views/vue/data' },
        { title: '定义方法', path: '/views/vue/method' },
        { title: '使用指令', path: '/views/vue/directive' },
        { title: '自定义属性', path: '/views/vue/custom-prop' },
        { title: '组件注册', path: '/views/vue/component' },
        { title: '插槽', path: '/views/vue/slot' },
        { title: '自定义指令', path: '/views/vue/custom-directive' },
        { title: '计算属性', path: '/views/vue/computed' },
        { title: '监听器', path: '/views/vue/watch' },
        { title: '生命周期', path: '/views/vue/life-cycle' },
        { title: '过渡动画', path: '/views/vue/transition-animate' }
      ]
    },
    {
      title: 'Vue-Router路由',
      sidebarDepath: 2,
      children: [{ title: 'Vue-Router', path: '/views/vue/vue-router/vue-router' }]
    },
    {
      title: 'VueX状态管理',
      sidebarDepath: 2,
      children: [{ title: 'vuex集中式状态管理', path: '/views/vue/vuex/vuex' }]
    },
    {
      title: 'Pinia状态管理',
      sidebarDepath: 2,
      children: [{ title: 'pinia下一代状态管理', path: '/views/vue/pinia/pinia' }]
    },
    {
      title: 'Vue前端配置代理Proxy',
      sidebarDepath: 2,
      children: [{ title: 'proxy配置代理', path: '/views/vue/proxy/proxy' }]
    },
    {
      title: 'Vue中如何使用TS',
      sidebarDepath: 2,
      children: [
        { title: '什么是TS', path: '/views/vue/ts/ts-is' },
        { title: 'TS的作用是什么', path: '/views/vue/ts/ts-function' }
      ]
    }
  ],
  // vuepress
  vuepress: [
    {
      title: '相关配置',
      sidebarDepath: 2,
      children: [
        { title: '客户端应用的增强配置文件', path: '/views/vuepress/enhanceApp' },
        { title: '如何自定义全局指令', path: '/views/vuepress/directive' }
      ]
    }
  ]
}

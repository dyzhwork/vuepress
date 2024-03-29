module.exports = {
  html: [
    { title: '一、基本元素', sidebarDepath: 2, path: '/views/html/basic-element' },
    { title: '二、常用元素', sidebarDepath: 2, path: '/views/html/common-element' },
    { title: '三、H5新增内容', sidebarDepath: 2, path: '/views/html/h5-add-element' },
    { title: '四、H5新增元素的实际效果', sidebarDepath: 2, path: '/views/html/tag-element-effect' },
    { title: '五、Input元素的多种类型', sidebarDepath: 2, path: '/views/html/special-input' }
  ],
  css: [
    {
      title: 'CSS基础',
      sidebarDepath: 2,
      children: [
        { title: '一、CSS入门简介', path: '/views/css/css-introduction' },
        { title: '二、CSS基础语法', path: '/views/css/css-syntactic' },
        { title: '三、CSS选择器', path: '/views/css/css-selector' },
        { title: '四、CSS变量', path: '/views/css/css-variable' },
        { title: '五、CSS函数', path: '/views/css/css-function' },
        { title: '六、CSS作用域', path: '/views/css/css-scoped' },
        { title: '七、CSS处理器', path: '/views/css/css-processor' }
      ]
    },
    {
      title: 'CSS3新特性',
      sidebarDepath: 2,
      children: [
        { title: '一、Css文字下划线进入退出', path: '/views/css/css-word-underline' },
        { title: '二、Css3新特性-property', path: '/views/css/css3-property' },
        { title: '三、Css3之@property实际用例', path: '/views/css/css3-property-useful' }
      ]
    },
    {
      title: 'PostCSS-CSS转换工具',
      sidebarDepath: 2,
      children: [
        { title: '一、PostCSS入门简介', path: '/views/css/postcss/introduction' },
        { title: '二、PostCSS基础语法', path: '/views/css/postcss/syntactic' }
      ]
    },
    {
      title: 'Less预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Less入门简介', path: '/views/css/less/introduction' },
        { title: '二、Less基础语法', path: '/views/css/less/syntactic' },
        { title: '三、Less中级语法', path: '/views/css/less/middle-syntactic' },
        { title: '四、Less高级语法', path: '/views/css/less/advanced-syntactic' }
      ]
    },
    {
      title: 'Scss预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Scss入门简介', path: '/views/css/scss/introduction' },
        { title: '二、Scss基础语法', path: '/views/css/scss/syntactic' },
        { title: '三、scss实现星空效果', path: '/views/css/scss/ScssXingKongEffect' },
        { title: '四、Scss文字根据窗口变化', path: '/views/css/scss/ScssWordChangeByWindow' },
        { title: '五、Scss媒介查询适配不同设备', path: '/views/css/scss/ScssMediaQueryDevice' },
        { title: '六、Scss环形菜单', path: '/views/css/scss/ScssAnnulusMenu' },
        { title: '七、Scss颜色模块', path: '/views/css/scss/ScssColorModule' },
        { title: '八、Scss切换主题', path: '/views/css/scss/ScssChangeTheme' },
        { title: '九、Scss旋转切换轮播图', path: '/views/css/scss/ScssRotateSwiper' }
      ]
    },
    {
      title: 'Sass预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Sass入门简介', path: '/views/css/sass/introduction' },
        { title: '二、Sass基础语法', path: '/views/css/sass/syntactic' }
      ]
    },
    {
      title: 'Stylus预处理',
      sidebarDepath: 2,
      children: [
        { title: '一、Stylus入门简介', path: '/views/css/stylus/introduction' },
        { title: '二、Stylus基础语法', path: '/views/css/stylus/syntactic' }
      ]
    }
  ],
  javascript: [
    {
      title: '基础JavaScript',
      sidebarDepath: 2,
      children: [
        { title: '基础知识', path: '/views/javascript/basic/basic-known' },
        { title: '浏览器渲染原理', path: '/views/javascript/basic/browser-rendering-principle' },
        { title: 'Web Audio API', path: '/views/javascript/basic/web-audio-api' }
      ]
    },
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
    },
    {
      title: '面试题',
      sidebarDepath: 2,
      children: [
        { title: '类型转换和运算', path: '/views/javascript/interview/type-conversion-operations' },
        { title: '什么是原型和原型链', path: '/views/javascript/interview/prototype' }
      ]
    },
    {
      title: 'JS高级API',
      sidebarDepath: 2,
      children: [{ title: '拖拽元素', path: '/views/javascript/AdvancedAPI/drag-element' }]
    },
    {
      title: 'ES6各版本特性',
      sidebarDepath: 2,
      children: [
        { title: 'ES2015(ES6)', path: '/views/javascript/ES6/ES2015' },
        { title: 'ES2016(ES7)', path: '/views/javascript/ES6/ES2016' },
        { title: 'ES2017(ES8)', path: '/views/javascript/ES6/ES2017' },
        { title: 'ES2018(ES9)', path: '/views/javascript/ES6/ES2018' },
        { title: 'ES2019(ES10)', path: '/views/javascript/ES6/ES2019' },
        { title: 'ES2020(ES11)', path: '/views/javascript/ES6/ES2020' },
        { title: 'ES2021(ES12)', path: '/views/javascript/ES6/ES2021' },
        { title: 'ES2022(ES13)', path: '/views/javascript/ES6/ES2022' }
      ]
    }
  ],
  // 动画库
  animation: [
    {
      title: 'GSAP动画库',
      sidebarDepath: 2,
      children: [
        { title: '一、GSAP入门简介', path: '/views/animation/gsap/get-started' },
        {
          title: '二、心形动画和卡片过渡效果',
          path: '/views/animation/gsap/heart-shape-card-transform'
        }
      ]
    }
  ],
  // canvas脚本
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
  // 移动端
  uniapp: [
    {
      title: '安卓应用程序',
      sidebarDepath: 2,
      children: [{ title: '搭建环境', path: '/views/uniapp/apk/' }]
    },
    {
      title: 'H5网页程序',
      sidebarDepath: 2,
      children: [{ title: '搭建环境', path: '/views/uniapp/h5/' }]
    },
    {
      title: '小程序',
      sidebarDepath: 2,
      children: [{ title: '搭建环境', path: '/views/uniapp/mini-program/' }]
    }
  ],
  // 桌面端
  desktop: [
    {
      title: 'Electron桌面应用程序',
      sidebarDepath: 2,
      children: [
        { title: 'Electron简单了解', path: '/views/desktop/electron/basic-know' },
        { title: 'Electron开发环境搭建', path: '/views/desktop/electron/build-environment' },
        { title: '搭建ElectronVite项目', path: '/views/desktop/electron/electron-vite' },
        { title: 'ElectronVite项目自定义', path: '/views/desktop/electron/electron-vite-custom' }
      ]
    }
  ],
  // 图表展示
  echarts: [
    {
      title: '柱状图',
      sidebarDepath: 2,
      children: [{ title: '柱状图', path: '/views/echarts/bar/chart-bar' }]
    },
    {
      title: '折线图',
      sidebarDepath: 2,
      children: [{ title: '多条折线图', path: '/views/echarts/line/chart-line' }]
    },
    {
      title: '饼图',
      sidebarDepath: 2,
      children: [{ title: '普通饼图', path: '/views/echarts/pie/chart-pie' }]
    },
    {
      title: '仪表图',
      sidebarDepath: 2,
      children: [{ title: '普通仪表图', path: '/views/echarts/gauge/chart-gauge' }]
    },
    {
      title: '漏斗图',
      sidebarDepath: 2,
      children: [{ title: '普通漏斗图', path: '/views/echarts/funnel/chart-funnel' }]
    },
    {
      title: '桑基图',
      sidebarDepath: 2,
      children: [{ title: '普通桑基图', path: '/views/echarts/sankey/chart-sankey' }]
    },
    {
      title: '散点图',
      sidebarDepath: 2,
      children: [{ title: '普通散点图', path: '/views/echarts/scatter/chart-scatter' }]
    },
    {
      title: '关系图',
      sidebarDepath: 2,
      children: [{ title: '普通关系图', path: '/views/echarts/graph/chart-graph' }]
    },
    {
      title: '表格',
      sidebarDepath: 2,
      children: [{ title: '普通表格', path: '/views/echarts/table/chart-table' }]
    },
    {
      title: '地图',
      sidebarDepath: 2,
      children: [{ title: '三维立体感地图', path: '/views/echarts/map/chart-map' }]
    }
  ],
  // git侧边栏配置 // Git相关
  git: [
    {
      title: 'Git下载安装',
      sidebarDepath: 2,
      children: [{ title: 'Git下载安装', path: '/views/git/git-install' }]
    },
    {
      title: 'Git相关操作',
      sidebarDepath: 2,
      children: [
        { title: 'Git有必要配置', path: '/views/git/git-config' },
        { title: '配置改变大小写', path: '/views/git/git-change-case' },
        { title: '配置PUSH多个仓库', path: '/views/git/git-push-many' },
        { title: '清空远程仓库内容', path: '/views/git/git-reset-repo' }
      ]
    },
    {
      title: 'Git的可视化',
      sidebarDepath: 2,
      children: [{ title: 'Git的可视化', path: '/views/git/git-visualization' }]
    },
    {
      title: 'Git相关报错',
      sidebarDepath: 2,
      children: [{ title: 'Git相关报错', path: '/views/git/git-handle-error' }]
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
    {
      title: '三、Linux相关',
      sidebarDepath: 2,
      children: [{ title: '启用管理员账户', path: '/views/linux/EnablingAdministratorAccount' }]
    }
  ],
  // nodejs
  nodejs: [
    { title: '下载NodeJS', sidebarDepath: 3, path: '/views/node/node-download' },
    { title: '安装NodeJS', sidebarDepath: 3, path: '/views/node/node-install' },
    { title: 'nvm管理NodeJS', sidebarDepath: 3, path: '/views/node/node-version-manage' },
    { title: 'npm包管理器', sidebarDepath: 3, path: '/views/node/npm' },
    {
      title: 'pnpm高性能包管理器',
      sidebarDepath: 2,
      children: [
        { title: 'Pnpm简介', path: '/views/node/pnpm' },
        { title: 'Pnpm安装使用', path: '/views/node/pnpm-install' },
        { title: 'Pnpm相关配置', path: '/views/node/pnpm-config' }
      ]
    },
    { title: 'yarn包管理器', sidebarDepath: 3, path: '/views/node/yarn' },
    { title: 'nrm源管理器', sidebarDepath: 3, path: '/views/node/npm-registry-manager' },
    {
      title: 'Node的内置模块',
      sidebarDepath: 3,
      children: [
        { title: 'fs模块', path: '/views/node/built-in-module/fs-module' },
        { title: 'path模块', path: '/views/node/built-in-module/path-module' },
        { title: 'http模块', path: '/views/node/built-in-module/http-module' }
      ]
    }
  ],
  // linux
  linux: [
    {
      title: 'Windows安装Linux子系统',
      sidebarDepath: 3,
      path: '/views/linux/WindowsSubsystemInstall'
    },
    { title: '启用管理员账户', sidebarDepath: 3, path: '/views/linux/EnablingAdministratorAccount' }
  ],
  // windows
  windows: [],
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
      title: 'VueRouter路由',
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
    },
    {
      title: 'Vue开发小技巧',
      sidebarDepath: 2,
      children: [
        { title: '组件命名', path: '/views/vue/skill/component-name' },
        { title: '递归调用组件', path: '/views/vue/skill/recursion-component' }
      ]
    },
    {
      title: 'Vue常见优化手段',
      sidebarDepath: 2,
      children: [
        { title: '使用key', path: '/views/vue/optimization/use-key' },
        { title: '使用冻结的对象', path: '/views/vue/optimization/use-freeze-obj' },
        { title: '函数式组件', path: '/views/vue/optimization/function-com' },
        { title: '延迟加载组件', path: '/views/vue/optimization/lazy-load-com' }
      ]
    }
  ],
  // engineering
  engineering: [
    { title: '一、工程化的意义', sidebarDepath: 2, path: '/views/engineering/engineering-meaning' },
    { title: '二、模块化和包管理', sidebarDepath: 2, path: '/views/engineering/module-package' },
    { title: '三、JS工具链条', sidebarDepath: 2, path: '/views/engineering/js-link' },
    { title: '四、CSS工具链条', sidebarDepath: 2, path: '/views/engineering/css-link' },
    { title: '五、构建工具和脚手架', sidebarDepath: 2, path: '/views/engineering/build-tool-cli' }
  ],
  react: [
    { title: 'React入门', sidebarDepath: 2, path: '/views/react/react-intro' },
    { title: 'React组件', sidebarDepath: 2, path: '/views/react/react-component' },
    { title: 'React生命周期', sidebarDepath: 2, path: '/views/react/react-life' },
    { title: 'React状态管理工具', sidebarDepath: 2, path: '/views/react/react-redux' }
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

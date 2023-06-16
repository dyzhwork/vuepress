module.exports = {
  // 前端相关
  front_end_correlation: [
    { text: 'HTML', items: [{ text: 'HTML5', link: '/views/html/' }] },
    { text: 'CSS', items: [{ text: 'CSS3', link: '/views/css/' }] },
    {
      text: 'JavaScript',
      items: [
        { text: 'JS', link: '/views/javascript/' },
        { text: 'Canvas', link: '/views/canvas/' },
        { text: 'Echarts', link: '/views/echarts/' }
      ]
    },
    { text: '移动端', items: [{ text: 'UniApp', link: '/views/uniapp/' }] },
    { text: '桌面端', items: [{ text: 'Electron', link: '/views/desktop/' }] }
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
  ]
}

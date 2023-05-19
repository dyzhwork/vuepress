module.exports = {
  title: "你好世界", // 顶部左侧标题
  description: "VuePress相关文档学习", // html 文件描述
  themeConfig: {
    logo: "https://img2.baidu.com/it/u=2770443583,649975410&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=399",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端相关",
        items: [
          { text: "HTML5", link: "/html/" },
          { text: "CSS3", link: "/css/" },
          { text: "JavaScript", link: "/javascript/" },
        ],
      },
      { text: "指南", link: "/guide/" },
      { text: "VuePress", link: "/vuepress/" },
      { text: "谷歌", link: "https://google.com" },
    ],
  },
};

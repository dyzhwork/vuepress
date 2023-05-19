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
          { text: "纯HTML", items: [{ text: "HTML5", link: "/html/" }] },
          { text: "纯CSS", items: [{ text: "CSS3", link: "/css/" }] },
          {
            text: "JavaScript",
            items: [{ text: "JavaScript", link: "/javascript/" }],
          },
        ],
      },
      { text: "指南", link: "/guide/" },
      { text: "VuePress", link: "/vuepress/" },
      { text: "谷歌", link: "https://google.com" },
    ],
    // 侧边栏
    sidebar: {
      "/html/": ["1.md", "1 copy", "1 copy 2", "1 copy 3"],
    },
  },
};

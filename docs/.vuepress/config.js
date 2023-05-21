// 配置文件的入口文件
module.exports = {
	theme: "vdoing",
	title: "你好啊", // 顶部左侧标题
	description: "VuePress相关文档学习", // html 文件描述
	head: [["link", { rel: "icon", href: "/image/panda.png" }]],
	themeConfig: {
		logo: "/image/panda.png",
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
			{ text: "谷歌", link: "https://google.com" },
		],
		// 侧边栏 有四种写法,数组,数组对象,对象数组,自动生成
		sidebar: {
			"/html": [
				{
					title: "标签元素",
					sidebarDepath: 2,
					children: [
						{ title: "基本元素", path: "/html/basic-element" },
						{ title: "常用元素", path: "/html/common-element" },
						{ title: "h5新增元素", path: "/html/h5-add-element" },
					],
				},
			],
		},
	},
};

---
sidebarDepth: 2
---
# 这是HTML5004


## 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
提示

## 值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

侧边栏分组
### 1111111你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
- 侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。

- 提示

嵌套的侧边栏分组也是支持的。

多个侧边栏
如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：# 这是HTML5


## 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
提示

## 值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
- 侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。

- 提示

嵌套的侧边栏分组也是支持的。

多个侧边栏
如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：# 这是HTML5


## 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
提示

## 值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
- 侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。

- 提示

嵌套的侧边栏分组也是支持的。

多个侧边栏
如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：# 这是HTML5


## 活动的标题链接
默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新，这个行为可以通过以下的配置来禁用：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
提示

## 值得一提的是，当你禁用此选项时，此功能的相应脚本将不会被加载，这是我们性能优化的一个小点。

侧边栏分组
你可以通过使用对象来将侧边栏划分成多个组：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
- 侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。

- 提示

嵌套的侧边栏分组也是支持的。

多个侧边栏
如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：
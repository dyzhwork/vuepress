---
title: 使用vite创建项目
date: 2023-05-24 15:41:09
permalink: /pages/a8190b/
categories:
  - vue
tags:
  - vite
  - 脚手架
---

## vite 脚手架

:::tip 兼容性注意

Vite 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

### 1、检测 vite 版本

```bash
vite -V
```

![https://dyzhwork.github.io/images/vite/vite1.png](https://dyzhwork.github.io/images/vite/vite1.png)

如果出现`command not found`，执行下面命令，全局安装 vite，成功后再次查看版本。

```bash
npm i -g vite
```

![https://dyzhwork.github.io/images/vite/vite2.png](https://dyzhwork.github.io/images/vite/vite2.png)

### 2、为什么选项 vite

Vue/Cli 创建项目->使用 webpack 打包过程
![https://dyzhwork.github.io/images/vite/vite3.png](https://dyzhwork.github.io/images/vite/vite3.png)

vite 创建项目打包过程，使用的是 rollup 打包
![https://dyzhwork.github.io/images/vite/vite4.png](https://dyzhwork.github.io/images/vite/vite4.png)

### 3、创建项目

```bash
pnpm create vite
```

![https://dyzhwork.github.io/images/vite/vite5.png](https://dyzhwork.github.io/images/vite/vite5.png)

### 4、输入项目名称

![https://dyzhwork.github.io/images/vite/vite6.png](https://dyzhwork.github.io/images/vite/vite6.png)

### 5、项目名称为：myapp

![https://dyzhwork.github.io/images/vite/vite7.png](https://dyzhwork.github.io/images/vite/vite7.png)

### 6、选择 vue 项目

![https://dyzhwork.github.io/images/vite/vite8.png](https://dyzhwork.github.io/images/vite/vite8.png)

### 7、选择自定义创建 vue 项目

![https://dyzhwork.github.io/images/vite/vite9.png](https://dyzhwork.github.io/images/vite/vite9.png)

### 8、选择是否使用 ts

![https://dyzhwork.github.io/images/vite/vite10.png](https://dyzhwork.github.io/images/vite/vite10.png)

### 9、选择是否支持 jsx

![https://dyzhwork.github.io/images/vite/vite11.png](https://dyzhwork.github.io/images/vite/vite11.png)

### 10、选择是否使用路由

![https://dyzhwork.github.io/images/vite/vite12.png](https://dyzhwork.github.io/images/vite/vite12.png)

### 11、选择是否使用 pinia

![https://dyzhwork.github.io/images/vite/vite13.png](https://dyzhwork.github.io/images/vite/vite13.png)

### 12、选择是否增加测试单元

![https://dyzhwork.github.io/images/vite/vite14.png](https://dyzhwork.github.io/images/vite/vite14.png)

### 13、选择测试方案

![https://dyzhwork.github.io/images/vite/vite15.png](https://dyzhwork.github.io/images/vite/vite15.png)

### 14、选择是否添加 eslint

![https://dyzhwork.github.io/images/vite/vite16.png](https://dyzhwork.github.io/images/vite/vite16.png)

### 15、选择是否使用 prettier 格式化代码

![https://dyzhwork.github.io/images/vite/vite17.png](https://dyzhwork.github.io/images/vite/vite17.png)

### 16、创建成功项目

![https://dyzhwork.github.io/images/vite/vite18.png](https://dyzhwork.github.io/images/vite/vite18.png)

### 17、所有创建项目的选项

![https://dyzhwork.github.io/images/vite/vite19.png](https://dyzhwork.github.io/images/vite/vite19.png)

### 18、安装依赖

```bash
pnpm i # pnpm install
```

![https://dyzhwork.github.io/images/vite/vite20.png](https://dyzhwork.github.io/images/vite/vite20.png)

### 19、成功安装依赖

![https://dyzhwork.github.io/images/vite/vite21.png](https://dyzhwork.github.io/images/vite/vite21.png)

### 20、执行启动运行命令

```bash
pnpm dev
```

**按住`ctrl`点击第二个框里面的链接打开项目**
![https://dyzhwork.github.io/images/vite/vite22.png](https://dyzhwork.github.io/images/vite/vite22.png)

---
title: 搭建ElectronVite项目
date: 2023-06-30 10:39:26
permalink: /pages/3df74b/
categories:
  - desktop
  - electron
tags:
  -
---

## 初始化 ElectronVite 项目

使用 npm

```shell
npm create @quick-start/electron
```

使用 yarn

```shell
yarn create @quick-start/electron
```

使用 pnpm

```shell
# 本文采用方式
pnpm create @quick-start/electron
```

终端执行命令如下:

```shell
pnpm create @quick-start/electron
```

运行中第一步:输入项目名称

```shell{1}
? Project name: » desktop-app  # 输入项目名称
```

选择项目框架为`vue`

```shell{3}
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
>   vue  # 选择vue
    react
    svelte
    solid

```

选择是否使用`ts`

```shell{1}
? Add TypeScript? » No / Yes # 选No
```

选择 electron 升级插件

```shell{1}
? Add Electron updater plugin? » No / Yes # 选No
```

选择 electron 下载镜像代理

```shell{1}
? Enable Electron download mirror proxy? » No / Yes # 选yes
```

完成项目初始化

```shell{8-12,18-20}
WORKER@DESKTOP-MKAH9NT MINGW64 /d/DEMOTEST/Electron桌面端/Electron
$ pnpm create @quick-start/electron
.../SOFTWARE/PNPM/Store/v3/tmp/dlx-9000  |   +8 +
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: D:\SOFTWARE\PNPM\Store\v3
  Virtual store is at:             ../../../SOFTWARE/PNPM/Store/v3/tmp/dlx-9000/node_modules/.pnpm
.../SOFTWARE/PNPM/Store/v3/tmp/dlx-9000  | Progress: resolved 8, reused 8, downloaded 0, added 8, done
√ Project name: ... desktop-app
√ Select a framework: » vue
√ Add TypeScript? ... No / Yes
√ Add Electron updater plugin? ... No / Yes
√ Enable Electron download mirror proxy? ... No / Yes

Scaffolding project in D:\DEMOTEST\Electron桌面端\Electron\desktop-app...

Done. Now run:

  cd desktop-app
  pnpm install
  pnpm dev
```

## 安装依赖启动项目

依次执行如下命令:

```shell
cd desktop-app # 进入项目目录文件夹
pnpm install # 安装依赖
pnpm dev # 启动项目
```

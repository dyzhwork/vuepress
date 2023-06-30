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

### 安装依赖:

```shell
pnpm install
```

返回结果:

```shell{10-35}
 WARN  deprecated electron-osx-sign@0.6.0: Please use @electron/osx-sign moving forward. Be aware the API is slightly different
 WARN  deprecated asar@3.2.0: Please use @electron/asar moving forward.  There is no API change, just a package name change
Packages: +392
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: D:\SOFTWARE\PNPM\Store\v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 430, reused 404, downloaded 2, added 392, done

> desktop-app@1.0.0 postinstall D:\DEMOTEST\Electron桌面端\Electron\desktop-app
> electron-builder install-app-deps

  • electron-builder  version=23.6.0
  • loaded configuration  file=D:\DEMOTEST\Electron桌面端\Electron\desktop-app\electron-builder.yml

dependencies:
+ @electron-toolkit/preload 2.0.0
+ @electron-toolkit/utils 1.0.2

devDependencies:
+ @electron/notarize 1.2.3 (1.2.4 is available)
+ @rushstack/eslint-patch 1.3.0 (1.3.2 is available)
+ @vitejs/plugin-vue 4.2.3
+ @vue/eslint-config-prettier 7.1.0
+ electron 24.4.1 (25.2.0 is available)
+ electron-builder 23.6.0 (24.4.0 is available)
+ electron-vite 1.0.23 (1.0.24 is available)
+ eslint 8.42.0 (8.43.0 is available)
+ eslint-plugin-vue 9.14.1 (9.15.1 is available)
+ less 4.1.3
+ prettier 2.8.8
+ vite 4.3.9
+ vue 3.3.4

Done in 2m 20.4s
```

### 启动项目

```shell
pnpm dev
```

返回结果:

```shell{22-27}
> desktop-app@1.0.0 dev D:\DEMOTEST\Electron桌面端\Electron\desktop-app
> electron-vite dev

vite v4.3.9 building for development...
✓ 2 modules transformed.
out/main/index.js  1.43 kB
✓ built in 382ms

build the electron main process successfully

-----

vite v4.3.9 building for development...
✓ 1 modules transformed.
out/preload/index.js  0.42 kB
✓ built in 19ms

build the electron preload files successfully

-----

dev server running for the electron renderer process at:

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose

start electron app...


```

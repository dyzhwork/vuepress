---
title: ElectronVite项目自定义
date: 2023-06-30 11:08:08
permalink: /pages/920c43/
categories:
  - desktop
  - electron
tags:
  -
---

## 启动后的项目预览

## 测试打包是否成功

### 打包成`HTML`

执行如下命令:

```shell
pnpm build
```

:::details 返回结果:

```shell

> desktop-app@1.0.0 build D:\DEMOTEST\Electron桌面端\Electron\desktop-app
> electron-vite build

vite v4.3.9 building for production...
✓ 2 modules transformed.
out/main/index.js  1.43 kB
✓ built in 457ms
vite v4.3.9 building for production...
✓ 1 modules transformed.
out/preload/index.js  0.42 kB
✓ built in 16ms
✓ 11 modules transformed.
../../out/renderer/index.html                   0.52 kB
../../out/renderer/assets/icons-e5112e1e.svg    9.06 kB
../../out/renderer/assets/index-4b0e6ae1.css    2.74 kB
../../out/renderer/assets/index-1a29896b.js   150.63 kB
✓ built in 2.66s

> desktop-app@1.0.0 postinstall D:\DEMOTEST\Electron桌面端\Electron\desktop-app
> electron-builder install-app-deps

  • electron-builder  version=23.6.0
  • loaded configuration  file=D:\DEMOTEST\Electron桌面端\Electron\desktop-app\electron-builder.yml
```

:::

### 打包成`Windows可执行程序`

执行如下命令,打包成执行文件:

```shell
pnpm build:win
```

:::details 返回的结果

```shell
> desktop-app@1.0.0 build:win D:\DEMOTEST\Electron桌面端\Electron\desktop-app
> npm run build && electron-builder --win --config


> desktop-app@1.0.0 build
> electron-vite build

vite v4.3.9 building for production...
✓ 2 modules transformed.
out/main/index.js  1.43 kB
✓ built in 148ms
vite v4.3.9 building for production...
✓ 1 modules transformed.
out/preload/index.js  0.42 kB
✓ built in 15ms
vite v4.3.9 building for production...
✓ 11 modules transformed.
../../out/renderer/index.html                   0.52 kB
../../out/renderer/assets/icons-e5112e1e.svg    9.06 kB
../../out/renderer/assets/index-4b0e6ae1.css    2.74 kB
../../out/renderer/assets/index-1a29896b.js   150.63 kB
✓ built in 1.29s
  • electron-builder  version=23.6.0 os=10.0.19045
  • loaded configuration  file=D:\DEMOTEST\Electron桌面端\Electron\desktop-app\electron-builder.yml
  • writing effective config  file=dist\builder-effective-config.yaml
  • skipped dependencies rebuild  reason=npmRebuild is set to false
  • packaging       platform=win32 arch=x64 electron=24.4.1 appOutDir=dist\win-unpacked
  • building        target=nsis file=dist\desktop-app-1.0.0-setup.exe archs=x64 oneClick=true perMachine=false
  • building block map  blockMapFile=dist\desktop-app-1.0.0-setup.exe.blockmap
```

:::

打开 dist 目录,可以看到下图文件,其中红框中文件就是最终的可执行文件,点击安装可使用.

## 去掉初始化内容

从项目根目录下找到 src>renderer>src>App 组件,将组件内容去掉,如下:

```vue
<script setup></script>
<template>
  <router-view></router-view>
</template>
```

:::details 原始文件内容

```vue
<script setup>
import Versions from './components/Versions.vue'
</script>

<template>
  <Versions></Versions>

  <svg class="hero-logo" viewBox="0 0 900 300">
    <use xlink:href="./assets/icons.svg#electron" />
  </svg>
  <h2 class="hero-text">You've successfully created an Electron project with Vue</h2>
  <p class="hero-tagline">Please try pressing <code>F12</code> to open the devTool</p>

  <div class="links">
    <div class="link-item">
      <a target="_blank" href="https://electron-vite.org">Documentation</a>
    </div>
    <div class="link-item link-dot">•</div>
    <div class="link-item">
      <a target="_blank" href="https://github.com/alex8088/electron-vite">Getting Help</a>
    </div>
    <div class="link-item link-dot">•</div>
    <div class="link-item">
      <a
        target="_blank"
        href="https://github.com/alex8088/quick-start/tree/master/packages/create-electron"
      >
        create-electron
      </a>
    </div>
  </div>

  <div class="features">
    <div class="feature-item">
      <article>
        <h2 class="title">Configuring</h2>
        <p class="detail">
          Config with <span>electron.vite.config.js</span> and refer to the
          <a target="_blank" href="https://electron-vite.org/config">config guide</a>.
        </p>
      </article>
    </div>
    <div class="feature-item">
      <article>
        <h2 class="title">HMR</h2>
        <p class="detail">
          Edit <span>src/renderer</span> files to test HMR. See
          <a target="_blank" href="https://electron-vite.org/guide/hmr.html">docs</a>.
        </p>
      </article>
    </div>
    <div class="feature-item">
      <article>
        <h2 class="title">Hot Reloading</h2>
        <p class="detail">
          Run <span>'electron-vite dev --watch'</span> to enable. See
          <a target="_blank" href="https://electron-vite.org/guide/hot-reloading.html">docs</a>.
        </p>
      </article>
    </div>
    <div class="feature-item">
      <article>
        <h2 class="title">Debugging</h2>
        <p class="detail">
          Check out <span>.vscode/launch.json</span>. See
          <a target="_blank" href="https://electron-vite.org/guide/debugging.html">docs</a>.
        </p>
      </article>
    </div>
    <div class="feature-item">
      <article>
        <h2 class="title">Source Code Protection</h2>
        <p class="detail">
          Supported via built-in plugin <span>bytecodePlugin</span>. See
          <a target="_blank" href="https://electron-vite.org/guide/source-code-protection.html">
            docs
          </a>
          .
        </p>
      </article>
    </div>
    <div class="feature-item">
      <article>
        <h2 class="title">Packaging</h2>
        <p class="detail">
          Use
          <a target="_blank" href="https://www.electron.build">electron-builder</a>
          and pre-configured to pack your app.
        </p>
      </article>
    </div>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
```

:::
然后项目页面将是这样的:

## 添加路由功能

### 安装路由

```shell
pnpm add vue-router@4
```

返回结果:

```shell
 WARN  deprecated electron-osx-sign@0.6.0: Please use @electron/osx-sign moving forward. Be aware the API is slightly different
 WARN  deprecated asar@3.2.0: Please use @electron/asar moving forward.  There is no API change, just a package name change
Packages: +2
++
Progress: resolved 432, reused 408, downloaded 0, added 2, done

dependencies:
+ vue-router 4.2.2

Done in 1m 3.9s
```

### 配置路由信息

```js
// 使用hash模式
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/MainBox.vue')
    }
  ]
})

export default router
```

main.js 文件改造为:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
```

Login 组件:

```vue
<template>
  <div class="Login">登录页面</div>
</template>

<script setup></script>
```

MainBox 组件:

```vue
<template>
  <div>主要内容</div>
</template>

<script setup></script>
```

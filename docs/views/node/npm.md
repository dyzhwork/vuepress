---
title: NPM(Node Package Manager)
date: 2023-05-24 13:48:44
permalink: /pages/f8de9f/
categories:
  - node
tags:
  - npm
  - node
  - 包管理
---

## 一、NPM 全局包下载路径

1. 打开命令行或终端，进入任意一个目录
2. 输入以下命令来查看当前全局配置：

```bash
npm config list -g
```

<img v-lazy="'https://dyzhwork.github.io/images/Node/Npm/npm001.png'" />

3. 找到 prefix 配置项，该项指定了全局安装包的默认路径。如果没有该配置项，则需要手动添加。可以使用以下命令添加该配置项：

```bash
npm config set prefix "你的全局包路径"
```

<img style="display:block;margin:auto;width:100%" v-lazy="'https://dyzhwork.github.io/images/Node/Npm/npm002-1.png'" />

这里的"你的全局包路径"需要替换为你希望设置的全局包路径。

4. 保存配置后，重新打开命令行或终端窗口，输入以下命令来测试是否设置成功：

```bash
npm root -g
```

<img style="display:block;margin:auto;width:100%" v-lazy="'https://dyzhwork.github.io/images/Node/Npm/npm002-2.png'" />

**如果输出结果是你刚才设置的全局包路径，则说明设置成功。**

5.  再次检测

```bash
npm config list -g
```

<img v-lazy="'https://dyzhwork.github.io/images/Node/Npm/npm003.png'" />

:::tip 注意
在设置全局包下载路径时，应该确保该路径有足够的权限，以便 npm 可以在该路径下创建和修改文件。
:::

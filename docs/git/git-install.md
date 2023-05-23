---
title: Git下载安装
date: 2023-05-23 14:26:36
permalink: /pages/439151/
categories:
  - git
tags:
  - git
---

# 下载安装 Git

在使用 Git 前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac 和 Windows 平台上运行。

## 一、下载

Git 各平台安装包下载地址为：[http://git-scm.com/downloads](http://git-scm.com/downloads)

## 二、安装

### ① Linux 平台上安装

Git 的工作需要调用 curl，zlib，openssl，expat，libiconv 等库的代码，所以需要先安装这些依赖工具。

在有 yum 的系统上（比如 Fedora）或者有 apt-get 的系统上（比如 Debian 体系），可以用下面的命令安装：

各 Linux 系统可以使用其安装包管理工具（apt-get、yum 等）进行安装：
:::tip Debian/Ubuntu Git 安装命令为

```bash
apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
 libz-dev libssl-dev
# 安装
apt-get install git
# 查看版本
git --version
```

:::

### ② Centos 安装 Git

```bash
$ yum install curl-devel expat-devel gettext-devel \
  openssl-devel zlib-devel

$ yum -y install git-core

$ git --version
```

### ③ Windows 平台上安装

在 Windows 平台上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包，可以到 GitHub 的页面上下载 exe 安装文件并运行：

安装包下载地址：[https://gitforwindows.org/](https://gitforwindows.org/)

官网慢，可以用国内的镜像：[https://npm.taobao.org/mirrors/git-for-windows/](https://npm.taobao.org/mirrors/git-for-windows/)。

然后双击下载好的执行文件->下一步->下一步->...即可安装成功

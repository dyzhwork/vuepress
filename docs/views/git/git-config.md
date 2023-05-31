---
title: Git有必要配置
date: 2023-05-23 15:29:58
permalink: /pages/0beaf8/
categories:
  - git
tags:
  - 配置
  - git
---

# Git 配置

Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。

这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：

## 一、配置用户信息

对所有本地仓库的用户信息进行配置,配置个人的用户名称和电子邮件地址：

```bash
# 对你的commit操作设置关联的用户名
git config --global user.name "yourname"
# 对你的commit操作设置关联的邮箱地址
git config --global user.email "youremail@xxx.com"


# 启用有帮助的彩色命令行输出(一般不配置)
git config --global color.ui auto
```

## 二、配置 ssh 秘钥

### ① 配置 ssh 秘钥背景

在往 github 上 push 项目的时候，如果走 https 的方式，每次都需要输入账号密码，非常麻烦。而采用 ssh 的方式，就不再需要输入，只需要在 github 自己账号下配置一个 SSH KEY 即可！

绝大多数人会使用 httpsUrl 克隆来说会比较方便，复制 httpsUrl 然后到 git Bash 里面直接用 clone 命令克隆到本地就好了。而使用 SSHUrl 克隆却需要在克隆之前先配置和添加 SSH 秘钥。

如果要使用 SSHUrl 克隆的话，需要以下几个要求:

- 你对仓库有权限
- 配置和添加 SSH 秘钥

### ② https 和 SSH 的区别

- 前者可以随意克隆 github 上的项目，而不管是谁的；而后者则是你必须是你要克隆的项目的拥有者或管理员，且需要先添加 SSH KEY ，否则无法克隆。
- httpsUrl 在 push 的时候是需要验证用户名和密码的；而 SSH 在 push 的时候，是不需要输入用户名的，如果配置 SSH KEY 的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。

### ③ 生成 ssh-keygen 完整命令如下

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

> 其中：
>
> - -t rsa 指定密钥类型为 RSA；
> - -b 4096 指定密钥长度为 4096 位，这是目前推荐的安全长度；
> - -C "your_email@test.com" 可选项，添加一个注释，方便标识该密钥的用途或所属人。将your_email@test.com替换成你自己的电子邮件地址。

执行完整命令后，会提示你输入密钥文件的名称和存储路径,一路回车确认后完成。默认情况下，私钥存储在`用户目录下` .ssh/id_rsa 中，公钥存储在`用户目录下` .ssh/id_rsa.pub 中。

<!-- 配置到github或者gitee -->

### ④ 将`id_rsa.pub`文件内容复制添加到 github 或者 gitee 公钥管理处保存即可.

### ⑤ 验证是否设置成功

现在验证一下用手中的私有密钥与 GitHub 进行认证和通信

```bash
ssh -T git@github.com
```

:::tip 出现下面信息即为成功

```bash
Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.
```

:::

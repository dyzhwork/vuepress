---
title: Git配置PUSH 到多个仓库
date: 2023-05-31 15:49:08
permalink: /pages/1514da/
categories:
  - git
tags:
  -
---

## 一、如何 PUSH 到多个仓库

<img style="display:block;margin:auto;width:50%" v-lazy="'https://dyzhwork.github.io/images/Git/git4.jpeg'" />

### ① 首先应该查看 Git 当前绑定有哪些仓库

```bash
git remote -v
```

正常情况下,将会返回如下格式

```bash
origin  git@gitee.com:xxxxxx/yyyyyy.git (fetch)
origin  git@gitee.com:xxxxxx/yyyyyy.git (push)
```

这个表明你已经绑定一个远程仓库`git@gitee.com:xxxxxx/yyyyyy.git`了,如果你需要新增另外的仓库`git@gitee.com:mmmmm/nnnnn.git`,在 push 时同时提交两个仓库,你需要`新增远端仓库链接`。

### ② 执行如下命令:

```bash
git remote set-url --add origin git@gitee.com:mmmmm/nnnnn.git
```

### ③ 此时再次查看远端绑定的仓库

```bash
git remote -v
```

将会返回

```bash
orgin   git@gitee.com:xxxxxx/yyyyyy.git (fetch)
orgin   git@gitee.com:xxxxxx/yyyyyy.git (push)
orgin   origin git@gitee.com:mmmmm/nnnnn.git (push)

```

### ④ 这个时候在 git push 时将会同时推送到两个仓库

```bash
# 推送到远端master分支
git push -u origin master
```

---
title: Git配置改变大小写
date: 2023-05-31 15:47:16
permalink: /pages/ed43df/
categories:
  - git
tags:
  -
---

## 一、配置改变大小写

正常情况下,在开发过程中,你所写的代码文件名大小写通常会被默认忽略,也就是说,刚开始新建一个文件如:`TEST.vue`,但是后续改动成`Test.vue`,严格来说,这就是两个不同的文件,但是项目中默认 git 不会检测文件名发生变化。对于一开始就新建的文件名问题不大。但是提交了文件推送到远程再修改就有可能造成问题:导致本地代码与远程代码不一致。

<img style="display:block;margin:auto;width:50%" v-lazy="'https://dyzhwork.github.io/images/Git/git2.png'" />

所以提交代码时,先利用终端指令来检查下

```bash
git config --get core.ignorecase
```

如果上述命令返回`true`,说明项目中 git 是忽略大小写的,因此你最好执行以下命令:

```bash
git config core.ignorecase false
```

再次执行以下命令:

```bash
git config --get core.ignorecase
```

返回 `false`,则设置成功,禁止忽略大小写,也就是说,修改项目文件名大小写将会提示修改文件。这样设置完成后，进行 git status 可发现当前文件名称差异显示出来了；若是提交后进行的设置，可进入本地代码，将文件名改为 test2（原文件名 TEST），待提交后，再修改为 test
:::tip 温馨提示->需要注意的是:
当前配置设置仅针对当前项目.git，其他项目需重新配置
:::

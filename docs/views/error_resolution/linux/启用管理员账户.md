---
title: 启用管理员账户
date: 2023-06-25 12:36:31
permalink: /pages/3049d8/
categories:
  - views
  - error_resolution
  - linux
tags:
  -
---

## 如何开启管理员账户

**当需要切换管理员账户时,执行如下命令`su - root`,失败如下:**

```shell
worker@DESKTOP-MKAH9NT:~$ su - root
Password:                                 # 输入密码
su: Authentication failure                # 身份验证失败
```

**如果是未设置`root`账户密码,则可以执行命令`sudo passwd root`设置密码**

```shell
worker@DESKTOP-MKAH9NT:~$ sudo passwd root
New password:                            # 输入密码
Retype new password:                     # 再次输入密码
passwd: password updated successfully    # 设置密码成功
```

**切换成功,如下所示:**

```shell{3-10}
worker@DESKTOP-MKAH9NT:~$ su - root
Password:                                # 输入root账户密码
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 4.4.0-19041-Microsoft x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

This message is shown once a day. To disable it please create the
/root/.hushlogin file.
# 以上高亮部分将会每天显示一次,因为这是运行在Windows上的Linux子系统的特有提示
root@DESKTOP-MKAH9NT:~#
```

**正常切换应该是这样的:**

```shell
worker@DESKTOP-MKAH9NT:~$ su - root
Password:                                # 输入root账户密码
root@DESKTOP-MKAH9NT:~#
```

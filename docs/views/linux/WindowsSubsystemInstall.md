---
title: 安装适用于Windows的Linux子系统
date: 2023-06-26 13:21:27
permalink: /pages/cb4626/
categories:
  - linux
tags:
  -
---

## 一、打开终端运行如下命令

```shell
wsl --list --online
```

**返回结果如下,即为获取远端可安装列表**

```shell
以下是可安装的有效分发的列表。
使用 'wsl.exe --install <Distro>' 安装。

NAME                                   FRIENDLY NAME
Ubuntu                                 Ubuntu
Debian                                 Debian GNU/Linux
kali-linux                             Kali Linux Rolling
Ubuntu-18.04                           Ubuntu 18.04 LTS
Ubuntu-20.04                           Ubuntu 20.04 LTS
Ubuntu-22.04                           Ubuntu 22.04 LTS
OracleLinux_7_9                        Oracle Linux 7.9
OracleLinux_8_7                        Oracle Linux 8.7
OracleLinux_9_1                        Oracle Linux 9.1
SUSE-Linux-Enterprise-Server-15-SP4    SUSE Linux Enterprise Server 15 SP4
openSUSE-Leap-15.4                     openSUSE Leap 15.4
openSUSE-Tumbleweed                    openSUSE Tumbleweed
```

## 二、执行安装命令

```shell
wsl --install Ubuntu-22.04
```

如果已经安装则返回如下:

```shell
wsl --install Ubuntu-22.04
Ubuntu 22.04 LTS 已安装。
正在启动 Ubuntu 22.04 LTS...
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 4.4.0-19041-Microsoft x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage


This message is shown once a day. To disable it please create the
/home/worker/.hushlogin file.
```

## 三、查看已安装的版本

执行命令`wsl -l -v`查看安装的版本有哪些

```shell
wsl -l -v
  NAME            STATE           VERSION
* Ubuntu-22.04    Stopped         1
```

## 四、如何切换子系统

如果有多个子系统,需要切换系统,可以执行如下命令:

```shell
# wsl -d "需要切换到而系统名称"
 wsl -d "Ubuntu-22.04"
```

## 五、设置默认系统

执行如下命令,设置默认系统

```shell
wsl --set-default "系统名称"
```

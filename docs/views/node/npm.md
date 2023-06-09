---
title: NPM(Node Package Manager)
date: 2023-05-24 13:48:44
permalink: /pages/f8de9f/
categories:
  - node
tags:
  - npm
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

## 二、配置淘宝镜像

<!-- npm config set registry https://registry.npm.taobao.org -->

执行以下命令让你的 npm 下载依赖飞起来

```shell
npm config set registry https://registry.npm.taobao.org
```

## 三、查看远程包列表

执行命令: **npm view `相关包名称` versions**,即可查看相关包的远程列表.

### 查看`node`远程包列表

```shell
npm view node versions
# 或者
pnpm view node versions
```

返回结果如下:
:::details 点击查看详情

```shell

[
  '0.0.0',    '0.1.14',   '0.1.15',   '0.1.16',  '0.1.17',  '0.1.18',
  '0.1.19',   '0.1.20',   '0.1.21',   '0.1.22',  '0.1.23',  '0.1.24',
  '0.1.25',   '0.1.26',   '0.1.27',   '0.1.28',  '0.1.29',  '0.1.30',
  '0.1.31',   '0.1.32',   '0.1.33',   '0.1.90',  '0.1.91',  '0.1.92',
  '0.1.93',   '0.1.94',   '0.1.95',   '0.1.96',  '0.1.97',  '0.1.98',
  '0.1.99',   '0.1.100',  '0.1.101',  '0.1.102', '0.1.103', '0.1.104',
  '0.2.0',    '0.2.1',    '0.2.2',    '0.2.3',   '0.2.4',   '0.2.5',
  '0.2.6',    '0.3.0',    '0.3.1',    '0.3.2',   '0.3.3',   '0.3.4',
  '0.3.5',    '0.3.6',    '0.3.7',    '0.3.8',   '0.4.0',   '0.4.1',
  '0.4.2',    '0.4.3',    '0.4.4',    '0.4.5',   '0.4.6',   '0.4.7',
  '0.4.8',    '0.4.9',    '0.4.10',   '0.4.11',  '0.4.12',  '0.5.0',
  '0.5.1',    '0.5.2',    '0.5.3',    '0.5.4',   '0.5.5',   '0.5.6',
  '0.5.7',    '0.5.8',    '0.5.9',    '0.5.10',  '0.6.0',   '0.6.1',
  '0.6.2',    '0.6.3',    '0.6.4',    '0.6.5',   '0.6.6',   '0.6.7',
  '0.6.8',    '0.6.9',    '0.6.10',   '0.6.11',  '0.6.12',  '0.6.13',
  '0.6.14',   '0.6.15',   '0.6.16',   '0.6.17',  '0.6.18',  '0.6.19',
  '0.6.20',   '0.6.21',   '0.7.0',    '0.7.1',   '0.7.2',   '0.7.3',
  '0.7.4',    '0.7.5',    '0.7.6',    '0.7.7',   '0.7.8',   '0.7.9',
  '0.7.10',   '0.7.11',   '0.7.12',   '0.8.0',   '0.8.1',   '0.8.2',
  '0.8.3',    '0.8.4',    '0.8.5',    '0.8.6',   '0.8.7',   '0.8.8',
  '0.8.9',    '0.8.10',   '0.8.11',   '0.8.12',  '0.8.13',  '0.8.14',
  '0.8.15',   '0.8.16',   '0.8.17',   '0.8.18',  '0.8.19',  '0.8.20',
  '0.8.21',   '0.8.22',   '0.8.23',   '0.8.24',  '0.8.25',  '0.8.26',
  '0.8.27',   '0.8.28',   '0.9.0',    '0.9.1',   '0.9.2',   '0.9.3',
  '0.9.4',    '0.9.5',    '0.9.6',    '0.9.7',   '0.9.8',   '0.9.9',
  '0.9.10',   '0.9.11',   '0.9.12',   '0.10.0',  '0.10.1',  '0.10.2',
  '0.10.3',   '0.10.4',   '0.10.5',   '0.10.6',  '0.10.7',  '0.10.8',
  '0.10.9',   '0.10.10',  '0.10.11',  '0.10.12', '0.10.13', '0.10.14',
  '0.10.15',  '0.10.16',  '0.10.17',  '0.10.18', '0.10.19', '0.10.20',
  '0.10.21',  '0.10.22',  '0.10.23',  '0.10.24', '0.10.25', '0.10.26',
  '0.10.27',  '0.10.28',  '0.10.29',  '0.10.30', '0.10.31', '0.10.32',
  '0.10.33',  '0.10.34',  '0.10.35',  '0.10.36', '0.10.37', '0.10.38',
  '0.10.39',  '0.10.40',  '0.10.41',  '0.10.42', '0.10.43', '0.10.44',
  '0.10.45',  '0.10.46',  '0.10.47',  '0.10.48', '0.11.0',  '0.11.1',
  '0.11.2',   '0.11.3',   '0.11.4',   '0.11.5',  '0.11.6',  '0.11.7',
  '0.11.8',   '0.11.9',   '0.11.10',  '0.11.11', '0.11.12', '0.11.13',
  '0.11.14',  '0.11.15',  '0.11.16',  '0.12.0',  '0.12.1',  '0.12.2',
  '0.12.3',   '0.12.4',   '0.12.5',   '0.12.6',  '0.12.7',  '0.12.8',
  '0.12.9',   '0.12.10',  '0.12.11',  '0.12.12', '0.12.13', '0.12.14',
  '0.12.15',  '0.12.16',  '0.12.17',  '0.12.18', '4.0.0',   '4.1.0',
  '4.1.1',    '4.1.2',    '4.2.0',    '4.2.1',   '4.2.2',   '4.2.3',
  '4.2.4',    '4.2.5',    '4.2.6',    '4.3.0',   '4.3.1',   '4.3.2',
  '4.4.0',    '4.4.1',    '4.4.2',    '4.4.3',   '4.4.4',   '4.4.5',
  '4.4.6',    '4.4.7',    '4.5.0',    '4.6.0',   '4.6.1',   '4.6.2',
  '4.7.0',    '4.7.1',    '4.7.2',    '4.7.3',   '4.8.0',   '4.8.1',
  '4.8.2',    '4.8.3',    '4.8.4',    '4.8.6',   '4.8.7',   '4.9.0',
  '4.9.1',    '5.0.0',    '5.1.0',    '5.1.1',   '5.2.0',   '5.3.0',
  '5.4.0',    '5.4.1',    '5.5.0',    '5.6.0',   '5.7.0',   '5.7.1',
  '5.8.0',    '5.9.0',    '5.9.1',    '5.10.0',  '5.10.1',  '5.11.0',
  '5.11.1',   '5.12.0',   '6.0.0',    '6.1.0',   '6.2.0',   '6.2.1',
  '6.2.2',    '6.3.0',    '6.3.1',    '6.4.0',   '6.5.0',   '6.6.0',
  '6.7.0',    '6.8.0',    '6.8.1',    '6.9.0',   '6.9.1',   '6.9.2',
  '6.9.3',    '6.9.4',    '6.9.5',    '6.10.0',  '6.10.1',  '6.10.2',
  '6.10.3',   '6.11.0',   '6.11.1',   '6.11.5',  '6.12.0',  '6.12.1',
  '6.12.2',   '6.12.3',   '6.13.0',   '6.14.0',  '6.14.1',  '6.14.2',
  '6.14.3',   '6.14.4',   '6.15.1',   '6.16.0',  '6.17.0',  '6.17.1',
  '7.0.0',    '7.1.0',    '7.2.0',    '7.2.1',   '7.3.0',   '7.4.0',
  '7.5.0',    '7.6.0',    '7.7.0',    '7.7.1',   '7.7.2',   '7.7.3',
  '7.7.4',    '7.8.0',    '7.9.0',    '7.10.0',  '7.10.1',  '8.0.0',
  '8.1.0',    '8.1.1',    '8.1.2',    '8.1.3',   '8.1.4',   '8.2.0',
  '8.2.1',    '8.3.0',    '8.4.0',    '8.5.0',   '8.6.0',   '8.7.0',
  '8.8.0',    '8.8.1',    '8.9.0',    '8.9.1',   '8.9.2',   '8.9.4',
  '8.10.0',   '8.11.0',   '8.11.1',   '8.11.2',  '8.11.3',  '8.11.4',
  '8.12.0',   '8.13.0',   '8.14.0',   '8.14.1',  '8.15.0',  '8.15.1',
  '8.16.0',   '8.16.1',   '8.16.2',   '8.17.0',  '9.0.0',   '9.1.0',
  '9.2.0',    '9.3.0',    '9.4.0',    '9.5.0',   '9.6.0',   '9.6.1',
  '9.7.0',    '9.8.0',    '9.9.0',    '9.10.0',  '9.10.1',  '9.11.0',
  '9.11.2',   '10.0.0',   '10.1.0',   '10.2.0',  '10.3.0',  '10.4.0',
  '10.4.1',   '10.5.0',   '10.6.0',   '10.7.0',  '10.8.0',  '10.9.0',
  '10.10.0',  '10.11.0',  '10.12.0',  '10.13.0', '10.14.0', '10.14.1',
  '10.14.2',  '10.15.0',  '10.15.1',  '10.15.2', '10.15.3', '10.16.0',
  '10.16.1',  '10.16.2',  '10.16.3',  '10.17.0', '10.18.0', '10.18.1',
  '10.19.0',  '10.20.0',  '10.20.1',  '10.21.0', '10.22.0', '10.22.1',
  '10.23.0',  '10.23.2',  '10.24.0',  '10.24.1', '11.0.0',  '11.1.0',
  '11.2.0',   '11.3.0',   '11.4.0',   '11.5.0',  '11.6.0',  '11.7.0',
  '11.8.0',   '11.9.0',   '11.10.0',  '11.11.0', '11.12.0', '11.13.0',
  '11.14.0',  '11.15.0',  '12.0.0',   '12.1.0',  '12.2.0',  '12.3.0',
  '12.3.1',   '12.4.0',   '12.5.0',   '12.6.0',  '12.7.0',  '12.8.0',
  '12.8.1',   '12.9.0',   '12.9.1',   '12.10.0', '12.11.0', '12.11.1',
  '12.12.0',  '12.13.0',  '12.13.1',  '12.14.0', '12.14.1', '12.15.0',
  '12.16.0',  '12.16.1',  '12.16.2',  '12.16.3', '12.17.0', '12.18.0',
  '12.18.1',  '12.18.2',  '12.18.3',  '12.18.4', '12.19.0', '12.19.1',
  '12.20.0',  '12.20.1',  '12.21.0',  '12.22.1', '12.22.2', '12.22.3',
  '12.22.4',  '12.22.5',  '12.22.6',  '12.22.7', '12.22.8', '12.22.9',
  '12.22.10', '12.22.11', '12.22.12', '13.0.0',  '13.0.1',  '13.1.0',
  '13.2.0',   '13.3.0',   '13.4.0',   '13.5.0',  '13.6.0',  '13.7.0',
  '13.8.0',   '13.9.0',   '13.10.0',  '13.10.1', '13.11.0', '13.12.0',
  '13.13.0',  '13.14.0',  '14.0.0',   '14.1.0',  '14.2.0',  '14.3.0',
  '14.4.0',   '14.5.0',   '14.6.0',   '14.7.0',  '14.8.0',  '14.9.0',
  '14.10.0',  '14.10.1',  '14.11.0',  '14.12.0', '14.13.0', '14.13.1',
  '14.14.0',  '14.15.0',  '14.15.1',  '14.15.2', '14.16.0', '14.16.1',
  '14.17.1',  '14.17.2',  '14.17.3',  '14.17.4', '14.17.5', '14.17.6',
  '14.18.0',  '14.18.1',  '14.18.2',  '14.18.3', '14.19.0', '14.19.1',
  '14.19.2',  '14.19.3',  '14.20.0',  '14.20.1', '14.21.0', '14.21.2',
  '14.21.3',  '15.0.0',   '15.0.1',   '15.1.0',  '15.2.0',  '15.2.1',
  '15.3.0',   '15.4.0',   '15.7.0',   '15.8.0',  '15.10.0', '15.12.0',
  '15.14.0',  '16.0.0',   '16.1.0',   '16.3.0',  '16.4.0',  '16.4.1',
  '16.5.0',   '16.6.0',   '16.6.1',   '16.6.2',  '16.7.0',  '16.8.0',
  '16.9.0',   '16.9.1',   '16.10.0',  '16.11.0', '16.11.1', '16.12.0',
  '16.13.0',  '16.13.1',  '16.13.2',  '16.14.0', '16.14.1', '16.14.2',
  '16.15.0',  '16.15.1',  '16.16.0',  '16.17.0', '16.17.1', '16.18.0',
  '16.18.1',  '16.19.0',  '16.19.1',  '16.20.0', '16.20.1', '17.0.0',
  '17.0.1',   '17.1.0',   '17.2.0',   '17.3.0',  '17.3.1',  '17.4.0',
  '17.5.0',   '17.6.0',   '17.7.0',   '17.7.1',  '17.7.2',  '17.9.1',
  '18.0.0',   '18.1.0',   '18.2.0',   '18.3.0',  '18.4.0',  '18.5.0',
  '18.6.0',   '18.7.0',   '18.8.0',   '18.9.0',  '18.9.1',  '18.10.0',
  '18.11.0',  '18.12.0',  '18.12.1',  '18.13.0', '18.14.0', '18.14.1',
  '18.14.2',  '18.15.0',  '18.16.0',  '18.16.1', '19.0.0',  '19.0.1',
  '19.1.0',   '19.2.0',   '19.3.0',   '19.4.0',  '19.5.0',  '19.6.0',
  '19.6.1',   '19.7.0',   '19.8.0',   '19.8.1',  '20.0.0',  '20.1.0',
  '20.2.0',   '20.3.0',   '20.3.1'
]
```

:::

### 查看`npm`远程包列表

```shell
npm view npm versions
# 或者
pnpm view npm versions
```

返回结果如下:
:::details 点击查看详情

```shell
[
  '1.1.25',        '1.1.70',          '1.1.71',        '1.2.19',
  '1.2.20',        '1.2.21',          '1.2.22',        '1.2.23',
  '1.2.24',        '1.2.25',          '1.2.27',        '1.2.28',
  '1.2.30',        '1.2.31',          '1.2.32',        '1.2.8000',
  '1.3.0',         '1.3.1',           '1.3.2',         '1.3.4',
  '1.3.5',         '1.3.6',           '1.3.7',         '1.3.8',
  '1.3.9',         '1.3.10',          '1.3.11',        '1.3.12',
  '1.3.13',        '1.3.14',          '1.3.15',        '1.3.16',
  '1.3.17',        '1.3.18',          '1.3.20',        '1.3.21',
  '1.3.22',        '1.3.23',          '1.3.24',        '1.3.25',
  '1.3.26',        '1.4.0',           '1.4.1',         '1.4.2',
  '1.4.3',         '1.4.4',           '1.4.5',         '1.4.6',
  '1.4.7',         '1.4.8',           '1.4.9',         '1.4.10',
  '1.4.11',        '1.4.12',          '1.4.13',        '1.4.14',
  '1.4.15',        '1.4.16',          '1.4.17',        '1.4.18',
  '1.4.19',        '1.4.20',          '1.4.21',        '1.4.22',
  '1.4.23',        '1.4.24',          '1.4.25',        '1.4.26',
  '1.4.27',        '1.4.28',          '1.4.29',        '1.5.0-alpha-0',
  '1.5.0-alpha-1', '1.5.0-alpha-2',   '1.5.0-alpha-3', '1.5.0-alpha-4',
  '2.0.0-alpha.6', '2.0.0-alpha.6.0', '2.0.0-alpha.7', '2.0.0-alpha-5',
  '2.0.0-beta.0',  '2.0.0-beta.1',    '2.0.0-beta.2',  '2.0.0-beta.3',
  '2.0.0',         '2.0.1',           '2.0.2',         '2.1.0',
  '2.1.1',         '2.1.2',           '2.1.3',         '2.1.4',
  '2.1.5',         '2.1.6',           '2.1.7',         '2.1.8',
  '2.1.9',         '2.1.10',          '2.1.11',        '2.1.12',
  '2.1.13',        '2.1.14',          '2.1.15',        '2.1.16',
  '2.1.17',        '2.1.18',          '2.2.0',         '2.3.0',
  '2.4.0',         '2.4.1',           '2.5.0',         '2.5.1',
  '2.6.0',         '2.6.1',           '2.7.0',         '2.7.1',
  '2.7.2',         '2.7.3',           '2.7.4',         '2.7.5',
  '2.7.6',         '2.8.0',           '2.8.1',         '2.8.2',
  '2.8.3',         '2.8.4',           '2.9.0',         '2.9.1',
  '2.10.0',        '2.10.1',          '2.11.0',        '2.11.1',
  '2.11.2',        '2.11.3',          '2.12.0',        '2.12.1',
  '2.13.0',        '2.13.1',          '2.13.2',        '2.13.3',
  '2.13.4',        '2.13.5',          '2.14.0',        '2.14.1',
  '2.14.2',        '2.14.3',          '2.14.4',        '2.14.5',
  '2.14.6',        '2.14.7',          '2.14.8',        '2.14.9',
  '2.14.10',       '2.14.11',         '2.14.12',       '2.14.13',
  '2.14.14',       '2.14.15',         '2.14.16',       '2.14.17',
  '2.14.18',       '2.14.19',         '2.14.20',       '2.14.21',
  '2.14.22',       '2.15.0',          '2.15.1',        '2.15.2',
  '2.15.3',        '2.15.4',          '2.15.5',        '2.15.6',
  '2.15.7',        '2.15.8',          '2.15.9',        '2.15.10',
  '2.15.11',       '2.15.12',         '3.0.0',         '3.1.0',
  '3.1.1',         '3.1.2',           '3.1.3',         '3.2.0',
  '3.2.1',         '3.2.2',           '3.3.0',         '3.3.1',
  '3.3.2',         '3.3.3',           '3.3.4',         '3.3.5',
  '3.3.6',         '3.3.7',           '3.3.8',         '3.3.9',
  '3.3.10',        '3.3.11',          '3.3.12',        '3.4.0',
  '3.4.1',         '3.5.0',           '3.5.1',         '3.5.2',
  '3.5.3',         '3.5.4',           '3.6.0',         '3.7.0',
  '3.7.1',         '3.7.2',           '3.7.3',         '3.7.4',
  '3.7.5',         '3.8.0',           '3.8.1',         '3.8.2',
  '3.8.3',         '3.8.4',           '3.8.5',         '3.8.6',
  '3.8.7',         '3.8.8',           '3.8.9',         '3.9.0',
  '3.9.1',         '3.9.2',           '3.9.3',         '3.9.4',
  '3.9.5',         '3.9.6',           '3.10.0',        '3.10.1',
  '3.10.2',        '3.10.3',          '3.10.4',        '3.10.5',
  '3.10.6',        '3.10.7',          '3.10.8',        '3.10.9',
  '3.10.10',       '4.0.0',           '4.0.1',         '4.0.2',
  '4.0.3',         '4.0.5',           '4.1.0',         '4.1.1',
  '4.1.2',         '4.2.0',           '4.3.0',         '4.4.0',
  '4.4.1',         '4.4.2',           '4.4.3',         '4.4.4',
  '4.5.0',         '4.6.0',           '4.6.1',         '5.0.0',
  '5.0.1',         '5.0.2',           '5.0.3',         '5.0.4',
  '5.1.0',         '5.2.0',           '5.3.0',         '5.4.0',
  '5.4.1',         '5.4.2',           '5.5.0',         '5.5.1',
  '5.6.0',         '5.7.0',           '5.7.1',         '5.8.0-next.0',
  '5.8.0',         '5.9.0-next.0',    '5.10.0-next.0', '5.10.0-next.1',
  '5.10.0',        '6.0.0-next.0',    '6.0.0-next.1',  '6.0.0-next.2',
  '6.0.0',         '6.0.1-next.0',    '6.0.1',         '6.1.0-next.0',
  '6.1.0',         '6.2.0-next.0',    '6.2.0-next.1',  '6.2.0',
  '6.3.0-next.0',  '6.3.0',           '6.4.0-next.0',  '6.4.0',
  '6.4.1-next.0',  '6.4.1',           '6.5.0-next.0',  '6.5.0',
  '6.6.0-next.0',  '6.6.0-next.1',    '6.6.0',         '6.7.0',
  '6.8.0-next.0',  '6.8.0-next.1',    '6.8.0-next.2',  '6.8.0',
  '6.9.0-next.0',  '6.9.0',           '6.9.1-next.0',  '6.9.2',
  '6.10.0-next.0', '6.10.0',          '6.10.1-next.0', '6.10.1-next.1',
  '6.10.1-next.2', '6.10.1',          '6.10.2-next.0', '6.10.2-next.1',
  '6.10.2-next.2', '6.10.2-next.3',   '6.10.2',        '6.10.3',
  '6.11.0',        '6.11.1',          '6.11.2',        '6.11.3',
  '6.12.0-next.0', '6.12.0',          '6.12.1',        '6.13.0',
  '6.13.1',        '6.13.2',          '6.13.3',        '6.13.4',
  '6.13.5',        '6.13.6',          '6.13.7',        '6.14.0',
  '6.14.1',        '6.14.2',          '6.14.3',        '6.14.4',
  '6.14.5',        '6.14.6',          '6.14.7',        '6.14.8',
  '6.14.9',        '6.14.10',         '6.14.11',       '6.14.12',
  '6.14.13',       '6.14.14',         '6.14.15',       '6.14.16',
  '6.14.17',       '6.14.18',         '7.0.0-beta.0',  '7.0.0-beta.1',
  '7.0.0-beta.2',  '7.0.0-beta.3',    '7.0.0-beta.4',  '7.0.0-beta.5',
  '7.0.0-beta.6',  '7.0.0-beta.7',    '7.0.0-beta.8',  '7.0.0-beta.9',
  '7.0.0-beta.10', '7.0.0-beta.11',   '7.0.0-beta.12', '7.0.0-beta.13',
  '7.0.0-rc.0',    '7.0.0-rc.1',      '7.0.0-rc.2',    '7.0.0-rc.3',
  '7.0.0-rc.4',    '7.0.0',           '7.0.1',         '7.0.2',
  '7.0.3',         '7.0.4',           '7.0.5',         '7.0.6',
  '7.0.7',         '7.0.8',           '7.0.9',         '7.0.10',
  '7.0.11',        '7.0.12',          '7.0.13',        '7.0.14',
  '7.0.15',        '7.1.0',           '7.1.1',         '7.1.2',
  '7.2.0',         '7.3.0',           '7.4.0',         '7.4.1',
  '7.4.2',         '7.4.3',           '7.5.0',         '7.5.1',
  '7.5.2',         '7.5.3',           '7.5.4',         '7.5.5',
  '7.5.6',         '7.6.0',           '7.6.1',         '7.6.2',
  '7.6.3',         '7.7.0',           '7.7.1',         '7.7.2',
  '7.7.3',         '7.7.4',           '7.7.5',         '7.7.6',
  '7.8.0',         '7.9.0',           '7.10.0',        '7.11.0',
  '7.11.1',        '7.11.2',          '7.12.0',        '7.12.1',
  '7.13.0',        '7.14.0',          '7.15.0',        '7.15.1',
  '7.16.0',        '7.17.0',          '7.18.0',        '7.18.1',
  '7.19.0',        '7.19.1',          '7.20.0',        '7.20.1',
  '7.20.2',        '7.20.3',          '7.20.4',        '7.20.5',
  '7.20.6',        '7.21.0',          '7.21.1',        '7.22.0',
  '7.23.0',        '7.24.0',          '7.24.1',        '7.24.2',
  '8.0.0',         '8.1.0',           '8.1.1',         '8.1.2',
  '8.1.3',         '8.1.4',           '8.2.0',         '8.3.0',
  '8.3.1',         '8.3.2',           '8.4.0',         '8.4.1',
  '8.5.0',         '8.5.1',           '8.5.2',         '8.5.3',
  '8.5.4',         '8.5.5',           '8.6.0',         '8.7.0',
  '8.8.0',         '8.9.0',           '8.10.0',        '8.11.0',
  '8.12.0',        '8.12.1',          '8.12.2',        '8.13.0',
  '8.13.1',        '8.13.2',          '8.14.0',        '8.15.0',
  '8.15.1',        '8.16.0',          '8.17.0',        '8.18.0',
  '8.19.0',        '8.19.1',          '8.19.2',        '8.19.3',
  '8.19.4',        '9.0.0-pre.0',     '9.0.0-pre.1',   '9.0.0-pre.2',
  '9.0.0-pre.3',   '9.0.0-pre.4',     '9.0.0-pre.5',   '9.0.0-pre.6',
  '9.0.0',         '9.0.1',           '9.1.0',         '9.1.1',
  '9.1.2',         '9.1.3',           '9.2.0',         '9.3.0',
  '9.3.1',         '9.4.0',           '9.4.1',         '9.4.2',
  '9.5.0',         '9.5.1',           '9.6.0',         '9.6.1',
  '9.6.2',         '9.6.3',           '9.6.4',         '9.6.5',
  '9.6.6',         '9.6.7',           '9.7.0',         '9.7.1',
  '9.7.2',         '9.8.0'
]
```

:::

### 查看`nodemon`远程包列表

```shell
npm view nodemon versions
# 或者
pnpm view nodemon versions
```

返回结果如下:
:::details 点击查看详情

```shell
[
  '0.1.4',          '0.1.5',          '0.1.6',          '0.1.7',
  '0.1.8',          '0.2.0',          '0.2.1',          '0.2.2',
  '0.3.0',          '0.3.1',          '0.3.2',          '0.4.0',
  '0.4.1',          '0.5.0',          '0.5.1',          '0.5.2',
  '0.5.3',          '0.5.4',          '0.5.5',          '0.5.6',
  '0.5.7',          '0.6.0',          '0.6.1',          '0.6.2',
  '0.6.3',          '0.6.4',          '0.6.5',          '0.6.6',
  '0.6.7',          '0.6.8',          '0.6.9',          '0.6.10-a',
  '0.6.10',         '0.6.11',         '0.6.12',         '0.6.13',
  '0.6.14',         '0.6.15',         '0.6.16',         '0.6.17',
  '0.6.18',         '0.6.19',         '0.6.20',         '0.6.21',
  '0.6.22',         '0.6.23',         '0.7.0',          '0.7.1',
  '0.7.2',          '0.7.3',          '0.7.4',          '0.7.5',
  '0.7.6',          '0.7.7',          '0.7.8',          '0.7.10',
  '0.9.0',          '0.9.1',          '0.9.2',          '0.9.3',
  '0.9.5',          '0.9.6',          '0.9.7',          '0.9.10',
  '0.9.11',         '0.9.12',         '0.9.14',         '0.9.16',
  '0.9.17',         '1.0.0',          '1.0.1',          '1.0.2-rc',
  '1.0.2-rc3',      '1.0.2-rc4',      '1.0.2',          '1.0.3',
  '1.0.4',          '1.0.5',          '1.0.6',          '1.0.7',
  '1.0.8',          '1.0.9',          '1.0.10',         '1.0.11',
  '1.0.12',         '1.0.13',         '1.0.14',         '1.0.15',
  '1.0.16',         '1.0.17-rc1',     '1.0.17-rc2',     '1.0.17',
  '1.0.18',         '1.0.19',         '1.0.20',         '1.1.0-alpha',
  '1.1.0',          '1.1.1',          '1.2.0',          '1.2.1',
  '1.3.0-0',        '1.3.0-1',        '1.3.0-2',        '1.3.0-3',
  '1.3.0-4',        '1.3.0-5',        '1.3.0-6',        '1.3.0-7',
  '1.3.0',          '1.3.1',          '1.3.2',          '1.3.3',
  '1.3.5',          '1.3.6',          '1.3.7',          '1.3.8',
  '1.4.0',          '1.4.1',          '1.4.2',          '1.4.10-alpha.1',
  '1.4.10-alpha.2', '1.4.10-alpha.3', '1.5.0-alpha1',   '1.5.0-alpha2',
  '1.5.0-alpha3',   '1.5.0-alpha4',   '1.5.0',          '1.5.1',
  '1.6.0',          '1.6.1',          '1.7.0',          '1.7.1',
  '1.7.2',          '1.7.3',          '1.8.0',          '1.8.1',
  '1.9.0',          '1.9.1',          '1.9.2',          '1.10.0',
  '1.10.1',         '1.10.2',         '1.11.0',         '1.11.1',
  '1.12.0',         '1.12.1',         '1.12.2',         '1.12.3',
  '1.12.4',         '1.12.5',         '1.12.6',         '1.12.7',
  '1.13.0',         '1.13.1',         '1.13.2',         '1.13.3',
  '1.14.0',         '1.14.1',         '1.14.2',         '1.14.3',
  '1.14.4',         '1.14.5',         '1.14.6',         '1.14.7',
  '1.14.8-alpha.1', '1.14.8',         '1.14.9-alpha.1', '1.14.9',
  '1.14.10',        '1.14.11',        '1.14.12',        '1.15.0',
  '1.15.1',         '1.15.2-alpha.1', '1.15.2-alpha.2', '1.16.0',
  '1.16.1',         '1.17.0',         '1.17.1',         '1.17.2',
  '1.17.3',         '1.17.4-alpha.1', '1.17.4-alpha.2', '1.17.4',
  '1.17.5-alpha.1', '1.17.5-alpha.2', '1.17.5',         '1.18.0',
  '1.18.1-alpha.1', '1.18.1-alpha.2', '1.18.1',         '1.18.2-alpha.1',
  '1.18.2',         '1.18.3',         '1.18.4',         '1.18.5',
  '1.18.6',         '1.18.7',         '1.18.8',         '1.18.9',
  '1.18.10',        '1.18.11',        '1.19.0',         '1.19.1',
  '1.19.2',         '1.19.3',         '1.19.4',         '2.0.0',
  '2.0.1-alpha.1',  '2.0.1-alpha.2',  '2.0.1-alpha.3',  '2.0.1',
  '2.0.2',          '2.0.3',          '2.0.4',          '2.0.5',
  '2.0.6',          '2.0.7',          '2.0.8-alpha.1',  '2.0.8-alpha.a',
  '2.0.8',          '2.0.9',          '2.0.10-alpha.1', '2.0.10-alpha.2',
  '2.0.10',         '2.0.11-alpha.1', '2.0.11',         '2.0.12-alpha.1',
  '2.0.12-alpha.2', '2.0.12-alpha.3', '2.0.12',         '2.0.13-alpha.1',
  '2.0.13',         '2.0.14-alpha.1', '2.0.14',         '2.0.15',
  '2.0.16',         '2.0.17',         '2.0.18',         '2.0.19',
  '2.0.20',         '2.0.21',         '2.0.22'
]
```

:::

### 查看`vue`远程包列表

```shell
npm view vue versions
# 或者
pnpm view vue versions
```

返回结果如下:
:::details 点击查看详情

```shell
 pnpm view vue versions

[
  '0.0.0',          '0.6.0',                '0.7.0',
  '0.7.1',          '0.7.3',                '0.7.4',
  '0.7.5',          '0.7.6',                '0.8.0',
  '0.8.1',          '0.8.2',                '0.8.3',
  '0.8.4',          '0.8.6',                '0.8.7',
  '0.8.8',          '0.9.0',                '0.9.1',
  '0.9.2',          '0.9.3',                '0.10.0',
  '0.10.1',         '0.10.2',               '0.10.3',
  '0.10.4',         '0.10.5',               '0.10.6',
  '0.11.0-rc',      '0.11.0-rc2',           '0.11.0-rc3',
  '0.11.0',         '0.11.1',               '0.11.2',
  '0.11.3',         '0.11.4',               '0.11.5',
  '0.11.6',         '0.11.7',               '0.11.8',
  '0.11.9',         '0.11.10',              '0.12.0-beta1',
  '0.12.0-beta2',   '0.12.0-beta3',         '0.12.0-beta4',
  '0.12.0-beta5',   '0.12.0-csp',           '0.12.0-rc',
  '0.12.0-rc2',     '0.12.0',               '0.12.1-csp',
  '0.12.1-csp.1',   '0.12.1-csp.2',         '0.12.1',
  '0.12.2',         '0.12.3',               '0.12.4',
  '0.12.5-csp',     '0.12.5',               '0.12.6-csp',
  '0.12.6',         '0.12.7-csp',           '0.12.7',
  '0.12.8-csp',     '0.12.8',               '0.12.9-csp',
  '0.12.9',         '0.12.10-csp',          '0.12.10',
  '0.12.11-csp',    '0.12.11',              '0.12.12-csp',
  '0.12.12',        '0.12.13-csp',          '0.12.13',
  '0.12.14-csp',    '0.12.14',              '0.12.15-csp',
  '0.12.15',        '0.12.16-csp',          '0.12.16',
  '1.0.0-alpha.1',  '1.0.0-alpha.2',        '1.0.0-alpha.3',
  '1.0.0-alpha.4',  '1.0.0-alpha.5',        '1.0.0-alpha.6',
  '1.0.0-alpha.7',  '1.0.0-alpha.8',        '1.0.0-beta.1',
  '1.0.0-beta.2',   '1.0.0-beta.3',         '1.0.0-beta.4',
  '1.0.0-csp',      '1.0.0-migration',      '1.0.0-rc.1',
  '1.0.0-rc.2',     '1.0.0-rc.2-migration', '1.0.0',
  '1.0.1',          '1.0.2',                '1.0.3',
  '1.0.4',          '1.0.5',                '1.0.6',
  '1.0.7',          '1.0.8',                '1.0.9',
  '1.0.10-csp',     '1.0.10',               '1.0.11-csp',
  '1.0.11',         '1.0.12-csp',           '1.0.12-csp-1',
  '1.0.12',         '1.0.13-csp',           '1.0.13',
  '1.0.14-csp',     '1.0.14',               '1.0.15-csp',
  '1.0.15',         '1.0.16-csp',           '1.0.16',
  '1.0.17-csp',     '1.0.17',               '1.0.18-csp',
  '1.0.18',         '1.0.19-csp',           '1.0.19',
  '1.0.20-csp',     '1.0.20',               '1.0.21-csp',
  '1.0.21',         '1.0.22-csp',           '1.0.22',
  '1.0.23-csp',     '1.0.23',               '1.0.24-csp',
  '1.0.24',         '1.0.25-csp',           '1.0.25',
  '1.0.26-csp',     '1.0.26',               '1.0.27-csp',
  '1.0.27',         '1.0.28-csp',           '1.0.28',
  '2.0.0-alpha.1',  '2.0.0-alpha.2',        '2.0.0-alpha.3',
  '2.0.0-alpha.4',  '2.0.0-alpha.5',        '2.0.0-alpha.6',
  '2.0.0-alpha.7',  '2.0.0-alpha.8',        '2.0.0-beta.1',
  '2.0.0-beta.2',   '2.0.0-beta.3',         '2.0.0-beta.4',
  '2.0.0-beta.5',   '2.0.0-beta.6',         '2.0.0-beta.7',
  '2.0.0-beta.8',   '2.0.0-rc.1',           '2.0.0-rc.2',
  '2.0.0-rc.3',     '2.0.0-rc.4',           '2.0.0-rc.5',
  '2.0.0-rc.6',     '2.0.0-rc.7',           '2.0.0-rc.8',
  '2.0.0',          '2.0.1',                '2.0.2',
  '2.0.3',          '2.0.4',                '2.0.5',
  '2.0.6',          '2.0.7',                '2.0.8',
  '2.1.0',          '2.1.1',                '2.1.2',
  '2.1.3',          '2.1.4',                '2.1.5',
  '2.1.6',          '2.1.7',                '2.1.8',
  '2.1.9',          '2.1.10',               '2.2.0-beta.1',
  '2.2.0-beta.2',   '2.2.0',                '2.2.1',
  '2.2.2',          '2.2.3',                '2.2.4',
  '2.2.5',          '2.2.6',                '2.3.0-beta.1',
  '2.3.0',          '2.3.1',                '2.3.2',
  '2.3.3',          '2.3.4',                '2.4.0',
  '2.4.1',          '2.4.2',                '2.4.3',
  '2.4.4',          '2.5.0',                '2.5.1',
  '2.5.2',          '2.5.3',                '2.5.4',
  '2.5.5',          '2.5.6',                '2.5.7',
  '2.5.8',          '2.5.9',                '2.5.10',
  '2.5.11',         '2.5.12',               '2.5.13',
  '2.5.14',         '2.5.15',               '2.5.16',
  '2.5.17-beta.0',  '2.5.17',               '2.5.18-beta.0',
  '2.5.18',         '2.5.19',               '2.5.20',
  '2.5.21',         '2.5.22',               '2.6.0-beta.1',
  '2.6.0-beta.2',   '2.6.0-beta.3',         '2.6.0',
  '2.6.1',          '2.6.2',                '2.6.3',
  '2.6.4',          '2.6.5',                '2.6.6',
  '2.6.7',          '2.6.8',                '2.6.9',
  '2.6.10',         '2.6.11',               '2.6.12',
  '2.6.13',         '2.6.14',               '2.7.0-alpha.1',
  '2.7.0-alpha.2',  '2.7.0-alpha.3',        '2.7.0-alpha.4',
  '2.7.0-alpha.5',  '2.7.0-alpha.6',        '2.7.0-alpha.7',
  '2.7.0-alpha.8',  '2.7.0-alpha.9',        '2.7.0-alpha.10',
  '2.7.0-alpha.11', '2.7.0-alpha.12',       '2.7.0-beta.1',
  '2.7.0-beta.2',   '2.7.0-beta.3',         '2.7.0-beta.4',
  '2.7.0-beta.5',   '2.7.0-beta.6',         '2.7.0-beta.7',
  '2.7.0-beta.8',   '2.7.0',                '2.7.1',
  '2.7.2',          '2.7.3',                '2.7.4',
  '2.7.5',          '2.7.6',                '2.7.7',
  '2.7.8',          '2.7.9',                '2.7.10',
  '2.7.11',         '2.7.12',               '2.7.13',
  '2.7.14',         '3.0.0-alpha.0',        '3.0.0-alpha.1',
  '3.0.0-alpha.2',  '3.0.0-alpha.3',        '3.0.0-alpha.4',
  '3.0.0-alpha.5',  '3.0.0-alpha.6',        '3.0.0-alpha.7',
  '3.0.0-alpha.8',  '3.0.0-alpha.9',        '3.0.0-alpha.10',
  '3.0.0-alpha.11', '3.0.0-alpha.12',       '3.0.0-alpha.13',
  '3.0.0-beta.1',   '3.0.0-beta.2',         '3.0.0-beta.3',
  '3.0.0-beta.4',   '3.0.0-beta.5',         '3.0.0-beta.6',
  '3.0.0-beta.7',   '3.0.0-beta.8',         '3.0.0-beta.9',
  '3.0.0-beta.10',  '3.0.0-beta.11',        '3.0.0-beta.12',
  '3.0.0-beta.13',  '3.0.0-beta.14',        '3.0.0-beta.15',
  '3.0.0-beta.16',  '3.0.0-beta.17',        '3.0.0-beta.18',
  '3.0.0-beta.19',  '3.0.0-beta.20',        '3.0.0-beta.21',
  '3.0.0-beta.22',  '3.0.0-beta.23',        '3.0.0-beta.24',
  '3.0.0-rc.1',     '3.0.0-rc.2',           '3.0.0-rc.3',
  '3.0.0-rc.4',     '3.0.0-rc.5',           '3.0.0-rc.6',
  '3.0.0-rc.7',     '3.0.0-rc.8',           '3.0.0-rc.9',
  '3.0.0-rc.10',    '3.0.0-rc.11',          '3.0.0-rc.12',
  '3.0.0-rc.13',    '3.0.0',                '3.0.1',
  '3.0.2',          '3.0.3',                '3.0.4',
  '3.0.5',          '3.0.6',                '3.0.7',
  '3.0.8',          '3.0.9',                '3.0.10',
  '3.0.11',         '3.1.0-beta.1',         '3.1.0-beta.2',
  '3.1.0-beta.3',   '3.1.0-beta.4',         '3.1.0-beta.5',
  '3.1.0-beta.6',   '3.1.0-beta.7',         '3.1.0',
  '3.1.1',          '3.1.2',                '3.1.3',
  '3.1.4',          '3.1.5',                '3.2.0-beta.1',
  '3.2.0-beta.2',   '3.2.0-beta.3',         '3.2.0-beta.4',
  '3.2.0-beta.5',   '3.2.0-beta.6',         '3.2.0-beta.7',
  '3.2.0-beta.8',   '3.2.0',                '3.2.1',
  '3.2.2',          '3.2.3',                '3.2.4',
  '3.2.5',          '3.2.6',                '3.2.7',
  '3.2.8',          '3.2.9',                '3.2.10',
  '3.2.11',         '3.2.12',               '3.2.13',
  '3.2.14',         '3.2.15',               '3.2.16',
  '3.2.17',         '3.2.18',               '3.2.19',
  '3.2.20',         '3.2.21',               '3.2.22',
  '3.2.23',         '3.2.24',               '3.2.25',
  '3.2.26',         '3.2.27',               '3.2.28',
  '3.2.29',         '3.2.30',               '3.2.31',
  '3.2.32',         '3.2.33',               '3.2.34-beta.1',
  '3.2.34',         '3.2.35',               '3.2.36',
  '3.2.37',         '3.2.38',               '3.2.39',
  '3.2.40',         '3.2.41',               '3.2.42',
  '3.2.43',         '3.2.44',               '3.2.45',
  '3.2.46',         '3.2.47',               '3.3.0-alpha.1',
  '3.3.0-alpha.2',  '3.3.0-alpha.3',        '3.3.0-alpha.4',
  '3.3.0-alpha.5',  '3.3.0-alpha.6',        '3.3.0-alpha.7',
  '3.3.0-alpha.8',  '3.3.0-alpha.9',        '3.3.0-alpha.10',
  '3.3.0-alpha.11', '3.3.0-alpha.12',       '3.3.0-alpha.13',
  '3.3.0-beta.1',   '3.3.0-beta.2',         '3.3.0-beta.3',
  '3.3.0-beta.4',   '3.3.0-beta.5',         '3.3.0',
  '3.3.1',          '3.3.2',                '3.3.3',
  '3.3.4'
]
```

:::

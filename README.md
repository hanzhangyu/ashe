# Ashe

[设计文档](./ABOUT.md)

## 架构设计

-   https://www.processon.com/view/link/5dc2a16fe4b04913a28ce076

## 交互原型

-   https://next.modao.cc/app/g24d32zmlm8k2qdn7yloomgirsfd3h
    -   该原型已废弃，原因在于，创建页面很简单，但是管理的时候，你会发现 页面、模块、field、column 全部耦合在一起

## Usage

### requirement

-   node >= 11.1.0
-   mongodb has the database in server/config folder

### development

```bash
$ git clone https://github.com/hanzhangyu/ashe
$ cd server
$ npm install && npm run setup && npm run dev
$ cd ../core
$ npm install && npm run schema
$ cd ../client
$ npm install && npm run schema && npm run dev
```

### reset database

```bash
$ cd server
$ npm run setup && npm run dev
$ cd ../core && npm run schema
$ cd ../client && npm run schema
```

### 新建页面

-   在 core 与 server 中实现业务代码
-   确认路由，同步至 client
-   选择 frameworks
-   选择组件
-   选择 getter/action/link 功能
-   写入配置至数据库

### 版本说明

-   使用 lerna 保证版本一致
-   在每个 repo (core/client/server)，或者单独一个库中，书写数据库升级脚本

## Environment

昨天刚升级了 WSL，今天重启后发现打不开了，[issues](https://github.com/microsoft/WSL/issues/4177) 还未修复，所以使用 window 环境先

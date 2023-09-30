# README

## 前置操作

1. 安装运行mongodb数据库（能运行起来就行）；
   1. 安装具体查看：<https://xiaozhuanlan.com/topic/4769152803>；
   2. 启动：`brew services start mongodb/brew/mongodb-community`
   3. 关闭：`brew services stop mongodb/brew/mongodb-community`
   4. 使用可视化工具查看数据库：Navicat；
      1. 具体可以查看：<https://xclient.info/s/navicat-premium.html>；
      2. 添加数据库；
2. 安装nodejs：v16.15.1；

## 项目开发

### 启动后端

1. 进入server目录；
2. `npm install`；
3. `npm run dev`；

### 启动前端项目

1. 进入front-end目录；
2. `npm i`
3. `npm dev`
4. 查看
   1. 编辑：<http://localhost:8000/form/base-form>
   2. 主页4：<http://localhost:8000/profile/basic>
   3. 登录：<http://localhost:8000/user/login>
   4. 注册：<http://localhost:8000/user/register>

或者走如下的方式直接运行结果：

1. 全局安装anwhere
   1. `npm install anywhere -g`
2. 在front-end/dist目录运行`anywhere`；

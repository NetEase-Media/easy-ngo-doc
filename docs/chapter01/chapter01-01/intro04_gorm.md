---
sidebar_position: 4
title: gorm 插件
---

# gorm 插件
如何快速启动 `gorm` 插件
## 文件描述
`app.toml` 程序启动的配置文件

`main.go`  主程序文件

`Dockerfile` 主程序需要连接mysql数据库，因此通过docker镜像快速启动以提供数据库服务

`setup.sql` 容器启动时初始化的数据库脚本

## 执行过程
##### 第一步 先构建`docker`镜像
```
// 执行命令
docker build -t gorm:demo .
```
##### 第二步 启动容器
```
// 执行命令
docker run -p 3306:3306 gorm:demo
```
##### 第三步 编译主程序`main.go`
```
// 执行命令
go build -o main .
```
##### 第四步 运行主程序
```
// 执行命令
./main -c app.toml
```
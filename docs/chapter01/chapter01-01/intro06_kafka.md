---
sidebar_position: 6
title: kafka 插件
---

# kafka 插件
如何使用例子来快速使用 `kafka` 插件

## 文件描述
`app.toml` 程序启动的配置文件

`main.go`  主程序文件

`docker-compose.yml` 主程序需要连接`kafka`，因此通过`docker-compse`快速启动一组依赖以提供数据库服务

## 执行过程
##### 第一步 先构建`docker`镜像, 并且启动以来服务`kafka`
```
// 执行命令
docker-compose up
```
##### 第二步 编译主程序`main.go`
```
// 执行命令
go build -o main .
```

##### 第三步 运行主程序
```
// 执行命令
./main -c app.toml
```
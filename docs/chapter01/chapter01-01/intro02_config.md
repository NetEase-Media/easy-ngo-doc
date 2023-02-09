---
sidebar_position: 2
title: config 插件
---

# config 插件
如何使用例子来快速使用`config` 插件

启动命令中如果使用了 `-c app.toml` 命令，则框架会在程序启动的时候，去`-c`参数指定的路径加载配置文件，如果没有使用`-c`参数，则会在主程序所在的同级目录查找`application.toml`配置文件加载

## 执行过程
##### 第一步 编译主程序`main.go`
```
// 执行命令
go build -o main .
```
##### 第二步 运行主程序
```
// 执行命令
./main -c app.toml
```
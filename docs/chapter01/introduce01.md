---
sidebar_position: 1
title: 快速开始
---

# 快速开始

本文主要讲解如何使用`Easy-Ngo`快速搭建一个`golang web`项目

#### 流程
##### 第一步 
创建一个你自己的 `Golang` 工程
```
mkdir web-demo
```
##### 第二步 
进入文件夹，并且创建 `main.go` 文件和配置文件
```
cd web-demo

touch main.go app.toml
```

##### 第三步
开始填充代码和配置信息

*代码* main.go 文件
```go
package main

func main() {
	app := application.Default()
	app.Initialize(xgin)
	app.Startup()
}

func xgin() error {
	g := rgin.Gin()
	g.GET("/hello", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "hello world!")
	})
	return nil
}

```

*配置* app.toml 文件
```
[ngo.app]
name = "quickstart-demo"
[ngo.server.gin]
port = 8888
enabledMetric = false
[ngo.app.healthz]
port = 10000
```

##### 第四步
编译可执行程序main
```
go build .
```

##### 第五步
运行
```
./main -c app.toml
```

我们打开控制台，通过输入请求，就可以得到结果了
```
curl localhost:8888/hello

hello world!
```

如果想通过 `Easy-Ngo` 使用其他插件的特性，请继续看下边的内容。
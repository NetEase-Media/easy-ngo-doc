---
sidebar_position: 12
title: microservice 插件
---

# microservice 插件
如何使用例子来快速使用 `microservice` 插件

## 文件描述
`client` 目录为client端启动程序，目录下包含主程序文件和配置文件

`server` 目录为server端启动程序，目录下包含主程序文件和配置文件

`app.toml` 程序启动的配置文件

`main.go`  主程序文件

pb 文件 如下：
```protobuf
syntax = "proto3";

package test;

option go_package = "g.hz.netease.com/netease-media/easy-ngo/microservices/testdata;testdata";

// The greeting service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}

```

## *server*执行过程

##### 第一步 进入`server`目录
```
cd server
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

##### 第四步 控制台打印结果
服务端监听8080端口
```
[INFO] grpc server listening on [:8080]
```

## *client*执行过程

##### 第一步 进入`client`目录
```
cd client
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

##### 第四步 控制台打印结果
访问服务端返回
```
hello world
```
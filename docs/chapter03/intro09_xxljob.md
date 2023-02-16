---
sidebar_position: 9
title: xxl-job 插件
---

# memcache 插件
我们使用[`xxl-job`](https://github.com/xxl-job/xxl-job-executor-go)作为`xxl-job-admin`连接的`SDK`, 并且将其封装在`xxxljob`包中。我们也为其适配了自动注册的`rxxljob`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rmemcache`导入到主程序中，比如
```go
import (
    _ "path/to/r/rxxljob"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```go
cli := rxxljob.GetXJobManager("ngo.client.xxxljob")
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----|----|
|Addr|string|`xxl-job-admin`地址||
|Token|string|验证`token`||
|ExecutorIP|string|客户端`IP`||
|ExecutorPort|string|客户端`port`||
|ExecutorName|string|`xxl-job-admin`中调度器的`key`||

## 配置举例
```
Addr = "http://xxljob:8080/xxl-job-admin"
ExecutorIP = "127.0.0.1"
ExecutorPort = "9999"
ExecutorName = "xxl-job-executor-sample"
```
目前我们只支持了同一个应用的`一个客户端`。
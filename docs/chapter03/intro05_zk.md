---
sidebar_position: 5
title: zookeeper 插件
---

# zookeeper 插件
我们使用[`zk`](https://github.com/go-zookeeper/zk)作为`zookeeper`连接的`SDK`, 并且将其封装在`xzk`包中。我们也为其适配了自动注册的`rzk`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rzk`导入到主程序中，比如
```go
import (
    _ "path/to/r/rzk"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```go
cli := rzk.GetZKClient("ngo.client.zookeeper.{name}")
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----|----|
|Name|string|用户需要保证名字唯一, 也是`ngo.client.zookeeper.{name}`中的`{name}`||
|Addr|[]string|节点地址||
|SessionTimeout|number|连接断开服务器的超时时间||

## 配置举例
```
[[ngo.client.zookeeper]]
name = "demo01"
addr = ["127.0.0.1:2181"]
sessionTimeout = 5000000000 #5s
```
目前我们支持了同一个应用的`多客户端`, 因此你可以在`toml`配置文件中配置多个。
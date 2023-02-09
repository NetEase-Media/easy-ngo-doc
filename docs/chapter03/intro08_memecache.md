---
sidebar_position: 8
title: memcache 插件
---

# memcache 插件
我们使用[`gomemcache`](https://github.com/bradfitz/gomemcache)作为缓存的`SDK`, 并且将其封装在`xmemcache`包中。我们也为其适配了自动注册的`rmemcache`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rmemcache`导入到主程序中，比如
```
import (
    _ "path/to/r/rmemcache"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```
cli := rmemcache.GetClient("ngo.client.memcache.{name}")
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----|----|
|Name|string|用户需要保证名字唯一, 也是`ngo.client.memcache.{name}`中的`{name}`||
|Timeout|number|客户端连接超时时间||
|MaxIdleConns|number|最大空闲连接||
|Addr|[]string|集群地址||
|EnableTracer|bool|是否开启`tracing`||

## 配置举例
```
[ngo.client.memcache]
Name = "m1"
Addr = ["127.0.0.1:11312"]
```
目前我们只支持了同一个应用的`一个客户端`, 因此你只能在`toml`配置文件中配置一个。

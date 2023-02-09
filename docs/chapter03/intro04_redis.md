---
sidebar_position: 4
title: redis 插件
---

# redis 插件
我们使用[`go-redis`](https://github.com/go-redis/redis)作为`redis`连接的`SDK`, 并且将其封装在`xredis`包中。我们也为其适配了自动注册的`rredis`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rredis`导入到主程序中，比如
```
import (
    _ "path/to/r/rredis"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```
cli := rredis.Get("ngo.client.redis.{name}")
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----|----|
|Name|string|用户需要保证名字唯一, 也是`ngo.client.redis.{name}`中的`{name}`||
|ConnType|string|连接类型，必须指定。包含`client`、`cluster`、`sentinel`、`sharded_sentinel`四种类型。||
|Addr|[]string|地址列表，格式为`host:port`。如果是单实例只会取第一个。||
|MasterNames|[]string|`master`名称，只当`sentinel`、`sharded_sentinel`类型必填。如果是`sentinel`只会取第一个。||
|AutoGenShardName|bool|自动生成分片名称，如果为`false`，默认使用`MasterName`， 只当`sharded_sentinel`类型使用。该字段用来兼容旧项目，非特殊情况请勿设置成`true`，否则在`MasterNames`顺序变化时会造成分配`rehash`||
|Username|string|用于认证的用户名||
|Password|string|用于认证的密码||
|DB|number|所使用的数据库||
|MaxRetries|number|最大重试次数||
|MinRetryBackoff|number|最小重试间隔||
|MaxRetryBackoff|number|最大重试间隔||
|DialTimeout|number|连接建立超时时间||
|ReadTimeout|number|读超时，到时间`返回失败`而不是`阻塞`||
|WriteTimeout|number|`socket`写超时时间||
|PoolSize|number|最大`socket`连接数||
|MinIdleConns|number|最小空闲连接数||
|MaxConnAge|number|客户端退出连接的`期限`||
|PoolTimeout|number|客户端等待获取连接池`连接`时间||
|IdleTimeout|number|空闲连接的`超时关闭`时间||
|IdleCheckFrequency|number|空闲连接的检测频率||
|EnableTracer|bool|是否开启`tracing`||

## 配置举例
```
[[ngo.client.redis]]
name= "demo01"
connType="client"
addr=["127.0.0.1:6379"]
password="test"
db= 0
```
目前我们支持了同一个应用的`多客户端`, 因此你可以在`toml`配置文件中配置多个。
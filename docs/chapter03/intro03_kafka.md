---
sidebar_position: 3
title: kafka 插件
---

# kafka 插件
我们使用[`Sarama`](https://github.com/Shopify/sarama)作为`kafka`连接的`SDK`, 并且将其封装在`xkafka`包中。我们也为其适配了自动注册的`rkafka`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rkafka`导入到主程序中，比如
```go
import (
    _ "path/to/r/rkafka"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```go
consumer := rkafka.GetConsumer("ngo.client.kafka.{name}")
producer := rkafka.GetProducer("ngo.client.kafka.{name}")
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----| ----|
|Name|string|{name},用于在`ngo.client.kafka.{name}`中使用||
|Addr|[]string|连接地址和端口号|`mysql`|
|Version|string|客户端版本||
|MaxOpenRequests|int|一个连接处理的最大请求数||
|DialTimeout|time.Duration|请求建连超时时间|`0`|
|ReadTimeout|time.Duration|请求等待超时||
|WriteTimeout|time.Duration|请求成功超时时间，包含同步所有broker副本时间||
|Consumer|struct|消费者配置||
|Consumer.Group|string|消费者所在群组||
|Consumer.EnableAutoCommit|bool|是否自动提交`offsets`||
|Consumer.AutoCommitInterval|time.Duration|自动提交`offsets`到`broker`的周期||
|Consumer.InitialOffset|number|默认起始`offsets`||
|Consumer.SessionTimeout|time.Duration|`consumer` 多长时间没有发送`心跳`给`broker`的剔除时间||
|Consumer.MinFetchBytes|number|`消费`的最小字节数||
|Consumer.DefaultFetchBytes|number|默认`消费`的字节数||
|Consumer.MaxFetchBytes|number|一次`消费`的最大字节数, 单个消息超标之后会导致消费失败||
|Consumer.MaxFetchWait|time.Duration|等待`能够消费`的最大时间||
|Consumer.Retries|number|`offsets`提交的重试次数||
|Producer|struct|生产者配置||
|Producer.MaxMessageBytes|number|暂未使用||
|Producer.Acks|number|确认级别; `0`: 不需要确认 `1`:提交本地 `-1`: 等待所有||
|Producer.Timeout|number|和`Acks`相关的，`broker`超时时间||
|Producer.Retries|number|消息重试次数||
|Producer.MaxFlushBytes|number|触发写入`字节数量 `||
|Producer.MaxFlushMessages|number|触发写入的`消息数量`||
|Producer.FlushFrequency|number|触发写入的`频率周期`||
|Producer.Idempotent|bool|消息是否只保留一个副本||
|EnableTracer|bool|是否开始`tracing`|false|

## 配置举例
```
[[ngo.client.kafka]] # 本地自行安装kafka，或者通过测试环境
name="demo01"
addr=["127.0.0.1:9092"]
# version= "0.11.0.2"
dialTimeout=5000000000 #5s
readTimeout=5000000000 #5s
writeTimeout=5000000000 #5s
maxOpenRequests = 10
#    sasl:
#      enable: true
#      user: xxx
#      password: xxx
#      mechanism: PLAIN
#      handshake: true
[ngo.client.kafka.metadata]
retries = 2
timeout = 10000000000 #10s
[ngo.client.kafka.consumer]
group="ngoexamplekafkaqueue"
enableAutoCommit=false
autoCommitInterval=1000000000 #1s
initialOffset= -1 # OffsetNewest=-1  OffsetOldest=-2
sessionTimeout=10000000000 #10s
minFetchBytes=1
maxFetchBytes= 0 # 无限制
defaultFetchBytes = 1000000
maxFetchWait= 250000000 #250ms
retries=1
[ngo.client.kafka.producer]
maxMessageBytes=1000000
acks= 1 # NoResponse = 0   WaitForLocal  = 1  WaitForAll = -1
timeout= 10000000000 #10s
retries=3
maxFlushBytes=0
maxFlushMessages=0
flushFrequency= 0
```
目前我们支持了同一个应用的`多客户端`, 因此你可以在`toml`配置文件中配置多个。
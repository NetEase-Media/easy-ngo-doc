---
sidebar_position: 1
title: 快速使用各个插件举例
---

# 框架中的 `examples` 中插件使用
为了方便大家在使用过程中快速的上手框架中的各个插件，我们对每一个插件都做了详细用例，放到了框架的`examples`文件夹中，让大家快速了解如何使用该插件。

插件可能依赖于三方的服务，比如`gorm`插件依赖于`mysql`数据库，如果你们本机或者其他可连接的服务器有`mysql`服务,那么，你们可以通过`examples/gorm/setup.sql` 文件创建对应的数据库和表，然后修改`配置`中数据库的连接串，使用你们自己的`mysql`数据库服务。

如果你们没有自己的`mysql`服务，你们可以在本机安装一个`docker`, `examples` 中的用例都是使用了这种方式，通过`docker`快速启动依赖服务并且做相应的初始化工作，这样你就可以把自己的精力放到`代码` 中去。这也是我们推荐的方式来快速体验`Easy-Ngo`的各种优秀特性。

## 目前的已经适配的`插件`集合
[config 配置文件](./intro02_config.md)

[agollo 配置中心](./intro03_agollo.md) 

[gorm 数据库](./intro04_gorm.md)

[log 日志](./intro05_log.md)

[kafka 消息队列](./intro06_kafka.md)

[redis 缓存](./intro07_redis.md)

[zookepper 注册发现](./intro08_zk.md)

[tracing 全链路](./intro09_tracing.md)

[metrics 指标采集](./intro10_metrics.md)

[websocket 协议](./intro11_websocket.md)

[microservice 微服务管理](./intro12_microservice.md)

[xxl-job 任务管理](./intro13_xxljob.md)
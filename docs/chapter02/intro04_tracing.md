---
sidebar_position: 4
title: tracing 插件
---

# tracing 插件

## 简介
在微服务时代，一个入口请求，可能被后端服务分解为N个微服务调用。如果接入了链路追踪，就可以很方便的观察到后端服务的调用链路，并且还能关注性能，排查故障，可以帮助定位到哪个服务出了问题，方便进一步的调查分析。

easy-ngo 的链路追踪功能依靠于 open-telemetry 的API， 我们在此基础上完成了大部分组件的链路追踪织入工作，可以方便的提供链路追踪功能。

## 核心概念

### Span
* Span, 代表一个操作的最小单元,他跟踪请求执行的某一部操作，描绘该操作期间发生的一些状况。Span是构建链路的基石, Span是可以嵌套的。
* Span包含一下要素
  * 操作名称
  * 父Span的Id（没有则为空）
  * 开始和结束的时间戳
  * SpanContext
  * 属性
  * Span 事件
  * Span 链接
  * Span 状态

### Span Context
* SpanContext, Span的上下文，是一个不可变的对象，包含以下信息：
  * 链路的 Trace ID
  * Span 的 Span ID
  * Trace Flag， 二进制编码的链路信息
  * Trace State，附加的键值对信息

### Attribute
* Attribute, 键值对结构，可以用它来标记Span正在进行的动作细节。
* 比如，如果一个Span要跟踪电商系统中用的购物车加商品的操作，可以捕获用户ID，购物车ID，以及加车商品ID。
* 属性有以下规则：
  * Key 必须是非空字符串值
  * Value 必须数非空字符串、布尔值、浮点数、整数或者这些值的数组形式

### Span 事件
Span事件是Span结构化日志信息，通常用于在Span持续期间，做一个有意义的单一时间点标记。

比如在web浏览器中有一下两种情况

1. 跟踪页面的加载

2. 标记页面何时变得可以交互

第一中情况用Span是合适的，它具有开始和结束的操作。第二种情况用Span Event，它标记一个有意义的单一时间点。

### Span 链接
链接主要是将Span之间进行关联，表示他们之间有因果关系。
比如现在有一个操作正在处理中，需要排队执行另外一个操作，这个操作是异步执行的。
这时候就可以使用链接将当前操作和异步操作关联起来。能够方便的跟踪查看。

### Span 状态
Span状态一般有 Unset, Ok, Error，当有异常时，Span的状态会被设置为Error,否则就是Unset。

## 如何使用                                                                     

### 第一步，添加链路追踪的相关配置
在 app.toml 配置文件中添加如下配置
```toml
[ngo.tracer.xotel]
# 设置使用jaeger导出，除此之外还支持 otel 和 stdout
exporterName = "jaeger"
# 设置导出上报的远端地址
endpoint = "http://jaeger:14268/api/traces"
# 设置采样率
samplerRatio = 1.0
# 设置上报时的服务名
serviceName = "tracing-test"
```

### 第二步，在相关组件中开启链路追踪
在相关组件的配置中开启Tracer，比如以下配置
```toml
[ngo.server.gin]
enableTracer=true

[[ngo.client.gorm]]
enableTracer=true

[[ngo.client.redis]]
enableTracer=true

[[ngo.client.kafka]]
enableTracer=true
```

### 第三步，添加链路追踪相关的启动代码
在go的启动文件中添加如下代码
```go
package main

import (
        "fmt"
        "net/http"
        _ "net/http/pprof"
        "runtime"

   // 注意先引入 rconfig
        _ "github.com/NetEase-Media/easy-ngo/application/r/rconfig"

        _ "github.com/NetEase-Media/easy-ngo/application/r/rotel"

        "github.com/NetEase-Media/easy-ngo/application"

        "github.com/NetEase-Media/easy-ngo/application/r/rgin"

        "github.com/gin-gonic/gin"
)

// go run . -c ./app.yaml
func main() {

        app := &application.Application{}
        // app初始化完成回调
        app.Initialize(func() error {
                g := rgin.Gin()
                g.GET("/hello", func(ctx *gin.Context) {
                        ctx.String(http.StatusOK, "hello world!")
                })
                return nil
        })
        app.Startup()

}
```
---
sidebar_position: 3
title: metrics 插件
---

# metrics 插件
我们使用[`prometheus`](https://github.com/prometheus/prometheus)作为数据打点的默认客户端。并且将其封装在`xprometheus`包中。我们也为其适配了自动注册的`rprometheus`包的实现。完成之后，可以通过`rmetrics`获取使用的客户端了。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rgorm`导入到主程序中，比如
```go
import (
    _ "path/to/r/rprometheus"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```go
metricsCli := rmetrics.GetProvider()
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----|----|
|namespace|string|命名空间|ngo|
|subsystem|string|App名称|app|

## 配置举例
```toml
[ngo.prometheus]
namespace = "ngo"
subsystem = "app"
```

当然了，你也可以根据我们的插件开发规范，开发你自己的数据打点客户端。
## 插件规范
目前我们定义了`三种`打点方式。分别是`Counter`, `Gauge`和`Histogram`三种。分别定义了接口协议。

#### Counter
```go
type Counter interface {
	With(labelValues ...string) Counter
	Add(delta float64)
	Inc()
}
```

#### Gauge
```go
type Gauge interface {
	With(labelValues ...string) Gauge
	Set(value float64)
	Add(delta float64)
	Inc()
}
```

#### Histogram
```go
type Histogram interface {
	With(labelValues ...string) Histogram
	Observe(value float64)
}
```

#### Provider 接口
这里提供了一个`Provider`接口，用来创建不同类别的打点方式。
```go
type Provider interface {
	NewCounter(name string, labelNames ...string) Counter
	NewGauge(name string, labelNames ...string) Gauge
	NewHistogram(name string, buckets []float64, labelNames ...string) Histogram
	Stop()
}
```

## 接口实现
例如，你想通过`prometheus`作为你的打点客户端，那么，你只需要使用`Prometheus`实现对应的`Provider`接口，`Counter`, `Gauge`和`Histogram`这几个接口, 程序启动的时候加载你实现的实例，那么我们就会使用你的实例来做对应的打点服务。方便的切换不同插件的打点方式。
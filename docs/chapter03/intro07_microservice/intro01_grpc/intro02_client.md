---
sidebar_position: 2
title: client
---

# client
我们对[`grpc`](https://grpc.io/docs/languages/go/quickstart/)做了简单封装。我们也为其适配了自动注册的`rms`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rms`下的`grpc server`导入到主程序中，比如
```go
import (
    _ "path/to/r/rms/grpc/client"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```go
cli := client.Get("client1")
```
直接拿到了client，接下来可以调用服务。
```go
rsp, err := client.SayHello(ctx, req)
```

## 配置参数
### 主配置
| 参数                 | 类型                | 是否必填 | 含义                                                                | 默认值           |
|--------------------|-------------------|------|-------------------------------------------------------------------|---------------|
| Name               | string            | 是    | client名称，用来获取client实例                                             ||
| Target             | string            | 是    | 目标地址，如果是通过服务发现，需要`sd:///`前缀                                       |               |
| Timeout            | time              | 否    | 请求超时时间                                                            |               |
| DiscoveryRef       | string            | 否    | 引用的服务发现名称，用来根据名称获取服务发现实例                                          ||
| BalancerName       | string            | 否    | 负载均衡名称                                                            | `round_robin` |
| EnabledHealthCheck | bool              | 否    | 是否开启健康检查，对应`grpc.WithDefaultServiceConfig()`中的`HealthCheckConfig` | `false`       |
| LoggerRef          | string            | 否    | 引用的日志名称，用来根据名称获取日志实例                                              | 默认打到控制台       |
| EnableMetrics      | bool              | 否    | 是否开启`metrics`插件                                                   | `false`       |
| EnableTracing      | bool              | 否    | 是否开启`tracing`插件                                                   | `false`       |
| EnableLogging      | bool              | 否    | 是否开启`logging`插件                                                   | `false`       |
| Tls                | ClientTLSConfig   | 否    | TLS支持                                                             |               |
| GrpcOpts           | GRPCClientOptions | 否    | grpc 参数详细配置                                                       |               |

### ClientTLSConfig
| 参数         | 类型     | 是否必填 | 含义       | 默认值 |
|------------|--------|------|----------|-----|
| CertFile   | string | 是    | 证书路径     |     |
| ServerName | string | 是    | server名称 |     |

### GRPCClientOptions
| 参数                    | 类型                        | 是否必填 | 含义                 | 默认值     |
|-----------------------|---------------------------|------|--------------------|---------|
| Block                 | bool                      | 否    | 开启前台阻塞建立连接         | `false` |
| Authority             | string                    | 否    | 设置`:authority`     |         |
| UserAgent             | string                    | 否    | 设置`User-Agent`     |         |
| ConnectParams         | GRPCClientConnectParams   | 否    | 连接相关配置             |         |
| KeepaliveParams       | GRPCClientKeepaliveParams | 否    | Keepalive相关配置	     |         |
| InitialWindowSize     | int                       | 否    | 设置http/2 流的初始窗口大小  |         |
| InitialConnWindowSize | int                       | 否    | 设置http/2 连接的初始窗口大小 |         |
| WriteBufferSize       | int                       | 否    | 写缓冲大小              |         |
| ReadBufferSize        | int                       | 否    | 读缓冲大小              | `32KB`  |
| MaxHeaderListSize     | int                       | 否    | 最大头部大小             |         |
| DisableRetry          | bool                      | 否    | 是否禁用重试             |         |

### GRPCClientConnectParams
| 参数                | 类型    | 是否必填 | 含义             | 默认值    |
|-------------------|-------|------|----------------|--------|
| BaseDelay         | time  | 否    | 第一次失败重试前后需等待多久 | `1s`   |
| Multiplier        | float | 否    | 在失败的重试后乘以的倍数   | `1.6`  |
| Jitter            | float | 否    | 随机抖动因子         | `0.2`  |
| MaxDelay          | time  | 否    | 最大延迟时间         | `120s` |
| MinConnectTimeout | time  | 否    | 最小链接超时时间       |        |

### GRPCClientKeepaliveParams
| 参数                  | 类型   | 是否必填 | 含义                                | 默认值     |
|---------------------|------|------|-----------------------------------|---------|
| Time                | time | 否    | 发送ping间隔                          |         |
| Timeout             | time | 否    | 超时时间                              | `20s`   |
| PermitWithoutStream | bool | 否    | 如果没有 active 的 stream， 是否允许发送 ping | `false` |

## 配置举例
```toml
[[ngo.microservices.grpc.clients]]
name = "client1"
target = "127.0.0.1:8080"
timeout = "30s"
discoveryRef = ""
balancerName = "round_robin"
enabledHealthCheck = false
loggerRef = ""
enableMetrics = false
enableTracing = false
enableLogging = false
```
目前我们支持了同一个应用的多`grpc client`, 因此你可以在`toml`配置文件中配置多个。

## 添加中间件
ngo配置中默认集成了`tracing`和`metrics`中间件，我们无需手动添加，对于其他中间件我们需要手动添加，调用方法如下：
```go
// selector 支持 / 全局插件
//              /{package} 包级别插件
//              /{package}.{service} 服务级别插件
//              /{package}.{service}/{method} 方法级别插件
// 加载顺序全局->全局->包->服务->方法
func (c *Client) Use(selector string, mws ...middleware.Middleware) 
```
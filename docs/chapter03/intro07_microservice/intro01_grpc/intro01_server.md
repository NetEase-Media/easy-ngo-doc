---
sidebar_position: 1
title: server
---

# server
我们对[`grpc`](https://grpc.io/docs/languages/go/quickstart/)做了简单封装。我们也为其适配了自动注册的`rms`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rms`下的`grpc server`导入到主程序中，比如
```go
import (
    _ "path/to/r/rms/grpc/server"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```go
srv := server.Get("server1")
```
直接拿到了server，接下来可以组册服务。
```go
testdata.RegisterGreeterServer(srv, &GreeterServerImpl{})
```

## 配置参数
### 主配置
| 参数            | 类型                  | 是否必填 | 含义                                       | 默认值     |
|---------------|---------------------|------|------------------------------------------|---------|
| Name          | string              | 是    | server名称，用来获取server实例。如果使用注册中心，会以该名称进行注册 ||
| Network       | string              | 否    | 网络类型                                     | `tcp`   |
| Addr          | string              | 否    | 监听地址                                     | `:0`    |
| Timeout       | time                | 否    | 请求超时时间                                   | `30s`   |
| RegistrarRef  | string              | 否    | 引用的注册中心名称，用来根据名称获取注册中心实例                 |         |
| LoggerRef     | string              | 否    | 引用的日志名称，用来根据名称获取日志实例                     | 默认打到控制台 |
| EnableMetrics | bool                | 否    | 是否开启`metrics`插件                          | `false` |
| EnableTracing | bool                | 否    | 是否开启`tracing`插件                          | `false` |
| EnableLogging | bool                | 否    | 是否开启`logging`插件                          | `false` |
| Tls           | ServerTLSConfig     | 否    | TLS支持                                    |         |
| GrpcOpts      | GRPCServerOptions   | 否    | grpc 参数详细配置                              |         |
| Metadata      | map<string, string> | 否    | 服务元信息                                    |         |

### ServerTLSConfig
| 参数       | 类型     | 是否必填 | 含义      | 默认值 |
|----------|--------|------|---------|-----|
| CertFile | string | 是    | 证书路径    |     |
| KeyFile  | string | 是    | key文件路径 |     |

### GRPCServerOptions
| 参数                    | 类型                        | 是否必填 | 含义                                 | 默认值                |
|-----------------------|---------------------------|------|------------------------------------|--------------------|
| MaxConcurrentStreams  | int                       | 否    | 一个连接中最大并发Stream数                   | `math.MaxUint32`   |
| MaxReceiveMessageSize | int                       | 否    | 最大允许接收的字节数                         | `4MB`              |
| MaxSendMessageSize    | int                       | 否    | 最大允许发送的字节数                         | `math.MaxInt32`    |
| KeepaliveParams       | GRPCServerKeepaliveParams | 否    | Keepalive相关配置                      |                    |
| KeepalivePolicy       | GRPCServerKeepalivePolicy | 否    | keepalive 强制策略，服务器将关闭与违反此规定的客户端的连接 |                    |
| InitialWindowSize     | int                       | 否    | 基于Stream的滑动窗口大小	                   | `64KB`             |
| InitialConnWindowSize | int                       | 否    | 基于Connection的滑动窗口                  | `16 * 64KB`        |
| WriteBufferSize       | int                       | 否    | 写缓冲大小                              | `32KB`             |
| ReadBufferSize        | int                       | 否    | 读缓冲大小                              | `32KB`             |
| ConnectionTimeout     | time                      | 否    | 连接超时时间                             | `120s`             |
| MaxHeaderListSize     | int                       | 否    | 每次调用允许发送的header的最大条数               | `uint32(16 << 20)` |

### GRPCServerKeepaliveParams
| 参数                    | 类型   | 是否必填 | 含义                             | 默认值             |
|-----------------------|------|------|--------------------------------|-----------------|
| MaxConnectionIdle     | time | 否    | 最大连接空闲时间                       | `math.MaxInt64` |
| MaxConnectionAge      | time | 否    | 最大连接存活时间                       | `math.MaxInt64` |
| MaxConnectionAgeGrace | time | 否    | 在强制关闭连接之间, 允许处理pending的rpc请求时间 | `math.MaxInt64` |
| Time                  | time | 否    | 空闲检测时间，不能小于1s                  | `2h`            |
| Timeout               | time | 否    | 检测超时时间                         | `20s`           |

### GRPCServerKeepalivePolicy
| 参数                  | 类型   | 是否必填 | 含义                              | 默认值     |
|---------------------|------|------|---------------------------------|---------|
| MinTime             | time | 否    | 如果客户端两次 ping 的间隔小于MinTime，则关闭连接 | `5m`    |
| PermitWithoutStream | bool | 否    | 即使没有 active stream, 也允许 ping    | `false` |


## 配置举例
```toml
[[ngo.microservices.grpc.servers]]
name = "server1"
network = "tcp"
addr = ":8080"
timeout = "30s"
registrarRef = ""
loggerRef = ""
enableMetrics = false
enableTracing = false
enableLogging = false
[ngo.microservices.grpc.servers.metadata]
key1 = "value1"
```
目前我们支持了同一个应用的多`grpc server`, 因此你可以在`toml`配置文件中配置多个。

## 添加中间件
ngo配置中默认集成了`tracing`和`metrics`中间件，我们无需手动添加，对于其他中间件我们需要手动添加，调用方法如下：
```go
// selector 支持 / 全局插件
//              /{package} 包级别插件
//              /{package}.{service} 服务级别插件
//              /{package}.{service}/{method} 方法级别插件
// 加载顺序全局->全局->包->服务->方法
func (s *Server) Use(selector string, mws ...middleware.Middleware) 
```
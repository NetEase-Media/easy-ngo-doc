---
sidebar_position: 1
title: etcd
---

# etcd
我们使用[`etcd`](https://github.com/etcd-io/etcd)实现了我们的服务组册发现接口。并且为其适配了自动注册的`rms`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rms`下的`sd etcd`导入到主程序中，比如
```go
import (
    _ "path/to/r/rms/sd/etcd"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中， `server`通过`registrarRef`配置参数获取注册中心实例 ，
`client`通过`discoveryRef`配置参数获取服务发现实例，我们不需要手动获取实例。

## 配置参数
### 主配置
| 参数             | 类型              | 是否必填 | 含义                   | 默认值             |
|----------------|-----------------|------|----------------------|-----------------|
| Name           | string          | 是    | 服务发现名称，用来获取sd实例      ||
| Endpoints      | string          | 是    | etcd地址               |                 |
| ConnectTimeout | time            | 否    | 连接超时时间               | `10s`           |
| Auth           | BasicAuth       | 否    | 认证配置                 |                 |
| Namespace      | string          | 否    | 命名空间                 | `microservices` |
| Ttl            | string          | 否    | 授权存活时间               | `15s`           |
| Tls            | ClientTLSConfig | 否    | TLS支持                |                 |
| LoggerRef      | string          | 否    | 引用的日志名称，用来根据名称获取日志实例 | 默认打到控制台         |

### BasicAuth
| 参数       | 类型     | 是否必填 | 含义  | 默认值 |
|----------|--------|------|-----|-----|
| Username | string | 否    | 用户名 |     |
| Password | string | 否    | 密码  |     |


### ClientTLSConfig
| 参数         | 类型     | 是否必填 | 含义       | 默认值 |
|------------|--------|------|----------|-----|
| CertFile   | string | 是    | 证书路径     |     |
| ServerName | string | 是    | server名称 |     |

## 配置举例
```toml
[[ngo.microservices.sd.etcds]]
name = "etcd"
endpoints = [ "127.0.0.1:2379" ]
namespace = "microservices"
ttl = "15s"
loggerRef = ""
```
目前我们支持了同一个应用的多`sd`, 因此你可以在`toml`配置文件中配置多个。
---
sidebar_position: 3
title: 中间件
---

# 中间件
这里列举目前官方提供的中间件

## recovery
recovery 中间件用于拦截请求panic，防止程序直接退出，我们可以自定义异常处理器，来处理异常，他是一个服务端中间件
### 服务端
#### 参数
- `WithHandler(h Handler)`: 异常处理器
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志

默认异常处理器：
```go
func(ctx context.Context, req, p interface{}) error {
    return errors.Newf(errors.Internal, "INTERNAL_ERROR", "%v", p)
}
```
#### 用法

```go
gs, _ := server.New(
    server.WithAddr(":8080"),
    server.WithMiddlewares(
        // 方式一：通过构造加载
        recovery.Recovery(), 
    ),
)

// 方式二：通过方法加载
gs.Use("/", recovery.Recovery())
```

## tracing
tracing 中间件用于记录请求的链路信息，包含服务端和客户端
### 服务端
#### 参数
- `provider`: tracing的提供者
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志
#### 用法
提示：该中间件已经在`ngo microservice server`配置中集成，直接开启即可`enableTracing = true`

```go
//xotel
xotelOpt := xotel.DefaultOption()
xotelOpt.SamplerRatio = 1
provider := xotel.New(xotelOpt)

gs, _ := server.New(
    server.WithAddr(":8080"),
    server.WithMiddlewares( 
        // 方式一：通过构造加载 
        tracing.Server(provider),
    ),
)

// 方式二：通过方法加载
gs.Use("/", tracing.Server(provider))
```

### 客户端
#### 参数
- `provider`: tracing的提供者
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志
#### 用法
提示：该中间件已经在`ngo microservice client`配置中集成，直接开启即可`enableTracing = true`

```go
//xotel
xotelOpt := xotel.DefaultOption()
xotelOpt.SamplerRatio = 1
provider := xotel.New(xotelOpt)

conn, _ := client.New(
    context.Background(),
    "127.0.0.1:8080",
    client.WithMiddlewares(
        // 方式一：通过构造加载 
        tracing.Client(provider),
    )
)
defer conn.Close()

// 方式二：通过方法加载
conn.Use("/", tracing.Client(provider))
```

## metrics
metrics 中间件用于记录指标信息，包含服务端和客户端
### 服务端
#### 参数
- `provider`: metrics的提供者
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志
#### 用法
提示：该中间件已经在`ngo microservice server`配置中集成，直接开启即可`enableMetrics = true`

```go
http.Handle("/metrics", promhttp.Handler())
listen, err := net.Listen("tcp", ":9998")
if err != nil {
    panic(err)
}
go http.Serve(listen, nil)

gs, _ := server.New(
    server.WithAddr(":8080"),
    server.WithMiddlewares(
        // 方式一：通过构造加载
        metrics.Server(xprometheus.DefaultProvider()),
    ),
)

// 方式二：通过方法加载
conn.Use("/", metrics.Server(xprometheus.DefaultProvider()))
```

### 客户端
#### 参数
- `provider`: tracing的提供者
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志
#### 用法
提示：该中间件已经在`ngo microservice client`配置中集成，直接开启即可`enableTracing = true`

```go
http.Handle("/metrics", promhttp.Handler())
listen, err := net.Listen("tcp", ":9999")
if err != nil {
    panic(err)
}
go http.Serve(listen, nil)

conn, _ := client.New(
    context.Background(),
    "127.0.0.1:8080",
    client.WithMiddlewares(
        // 方式一：通过构造加载
        metrics.Client(xprometheus.DefaultProvider()),
    ),
)
defer conn.Close()

// 方式二：通过方法加载
conn.Use("/", metrics.Client(xprometheus.DefaultProvider()))
```

## ratelimit
ratelimit 中间件用于限流，他是一个服务端中间件
### 服务端
#### 参数
- `RateLimiter`: 限流器，用户也可以扩展接口实现自定义的限流器
- `WithHandler(h Handler)`: 错误处理器
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志

限流器定义
```go
type RateLimiter interface {
    // Acquire returns true if the rate limit is not exceeded. 
    Acquire() bool
}
```

默认错误处理器：
```go
func(ctx context.Context, req interface{}) error {
    return errors.Newf(errors.ResourceExhausted, "RATE_LIMIT", "too many requests")
}
```
#### 用法

```go
gs, _ := server.New(
    server.WithAddr(":8080"),
)
testdata.RegisterGreeterServer(gs, &GreeterServerImpl{})

// 对指定方法限流
gs.Use("/test.Greeter/SayHello", ratelimit.RateLimit(
    ratelimit.NewTokenBucketRateLimiter(3, 5),
))
```

## circuitbreak
circuitbreak 中间件用于熔断，他是一个客户端中间件
### 客户端
#### 参数
- `CircuitBreaker`: 熔断器，用户也可以扩展接口实现自定义的熔断器
- `WithHandler(h middleware.Handler)`: 降级处理器
- `WithLogger(logger xlog.Logger)`: 日志，默认不打印日志

熔断器定义
```go
type CircuitBreaker interface {
    Execute(handler func() (err error)) (isBreak bool)
}
```

默认降级处理器，直接返回错误：
```go
func(ctx context.Context, req interface{}) (interface{}, error) {
    return nil, errors.Newf(errors.Unavailable, "CIRCUIT_BREAK", "circuit breaker is open")
}
```
#### 用法

```go
conn, _ := client.New(
    context.Background(),
    "127.0.0.1:8080",
)
defer conn.Close()
client := testdata.NewGreeterClient(conn)

var st gobreaker.Settings
st.Name = "/test.Greeter/SayHello"
st.ReadyToTrip = func(counts gobreaker.Counts) bool {
    failureRatio := float64(counts.TotalFailures) / float64(counts.Requests)
    return counts.Requests >= 3 && failureRatio >= 0.6
}

// 对指定方法熔断
conn.Use(
    "/test.Greeter/SayHello",
    circuitbreak.CircuitBreak(breaker.NewCircuitBreaker(st),
        circuitbreak.WithHandler(func(ctx context.Context, req interface{}) (interface{}, error) {
            return &testdata.HelloReply{
                Message: fmt.Sprintf("hello circuit break"),
            }, nil
        }),
        circuitbreak.WithLogger(log),
    ),
)
```

## 自定义
如果要自定义中间件，我们需要返回一个`Middleware`，api如下：
```go
// Handler is a function that handles a request.
type Handler func(ctx context.Context, req interface{}) (interface{}, error)

// Middleware is a chainable behavior modifier for handlers.
type Middleware func(Handler) Handler

```
---
sidebar_position: 99
title: 自定义
---

# 自定义
如果想要自定义服务注册发现组件，我们只需要实现对应接口

## 服务注册
```go
type Registrar interface {
	Register(ctx context.Context, service *ServiceInfo) error
	Deregister(ctx context.Context, service *ServiceInfo) error
}
```

## 服务发现
```go
type Discovery interface {
	GetService(ctx context.Context, serviceName string) ([]*ServiceInfo, error)
	NewWatcher(ctx context.Context, serviceName string) (Watcher, error)
}
```

如果想在ngo中集成，需要编写插件的注册逻辑，详见[插件规范](../../../chapter04/intro01_plugin_protocol.md)
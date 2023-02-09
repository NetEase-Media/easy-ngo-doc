---
sidebar_position: 2
title: gorm 插件
---

# gorm 插件
我们使用[`gorm`](https://github.com/go-gorm/gorm)作为数据库连接的`SDK`, 并且将其封装在`xgorm`包中。我们也为其适配了自动注册的`rgorm`包的实现。

## 如何使用
#### 自动注册
在使用的过程中，我们只需要将`rgorm`导入到主程序中，比如
```
import (
    _ "path/to/r/rgorm"
)

func main() {
    .....
}
```
主程序运行过程中会根据`配置`中的数据，创建对应的实例，并且放到内存中。我们在使用的过程中，可以调用
```
cli := rgorm.GetDBClient("ngo.client.gorm.{name}")
```
直接拿到客户端，就可以使用了。

## 配置参数
|参数|类型|含义|默认值|
|----|----|----|----|
|Name|string|{name},用于在`ngo.client.gorm.{name}`中使用||
|Type|string|客户端类型|`mysql`|
|Url|string|数据库连接串, root:root@tcp(localhost:3306)/gorm_demo?parseTime=True&loc=Local||
|MaxIdleCons|number|`idle`连接池的最大连接数量||
|MaxOpenCons|number|数据库最大连接数, `<=0` 表示没有限制|`0`|
|ConnMaxLifetime|number|一个连接最大的复用时间||
|ConnMaxIdleTime|number|一个连接的最大空闲时间||
|EnableTracer|bool|是否打开全链路追踪|`false`|

## 配置举例
```
[[ngo.client.gorm]]
name="demo01"
url="root:root@tcp(localhost:3306)/gorm_demo?parseTime=True&loc=Local"
maxIdleCons=100·
maxOpenCons=100
connMaxLifetime=1000000000000
connMaxIdleTime=60000000000

[[ngo.client.gorm]]
name="demo02"
url="root:root@tcp(localhost:3306)/gorm_demo?parseTime=True&loc=Local"
maxIdleCons=100
maxOpenCons=100
connMaxLifetime=1000000000000
connMaxIdleTime=60000000000
```
目前我们支持了同一个应用的`多客户端`, 因此你可以在`toml`配置文件中配置多个。
---
sidebar_position: 1
title: 插件规范
---
# 应用的生命周期
应用的生命周期包括：启动、上线、下线、停止，当我们每一次变更应用的时候，应用都在经历着这些阶段，如何让应用能够稳定的提供服务呢？比如说：应用需要在完全就绪的情况下才对外提供服务，如果应用还未完全就绪就对外提供服务，那就会导致服务异常或响应超时。应用在停止服务进行变更的时候，如何让应用将正在处理的请求接着处理完毕，并且不再接收新的请求。应用上线的时候需要通知注册中心可以接收请求了。应用在下线的时候需要通知注册中心不再接收新的请求了。除了以上提到的生命周期外，如何判断一个应用的健康状态，都是需要开发人员为提供高可用应用时需要考虑的问题。
# 如何开发插件
easy-ngo提供了hook的机制，在应用生命周期的每一个点都设置了钩子，如果用户想将一些SDK融入到应用的整个生命周期的话，可以实现这些钩子方法并注册到hook里即可，以下我将详细进行阐述。
## hooks
在application/hooks包下有一个hooks.go文件，是easy-ngo框架定义的hooks代码，主要的钩子包括
* Initialize：应用在初始化的时候执行的钩子
* Start：应用在启动的时候执行的钩子
* Stop：应用在停止的时候执行的钩子
* Online：应用在上线的时候执行的钩子
* Offline：应用在下线的时候执行的钩子
* HealthCheck：应用在健康检查的时候执行的钩子
代码如下：
```go
const (
	Initialize Stage = iota
	Start
	Stop
	Online
	Offline
	HealthCheck
)
```
hooks定义了Register和GetFns方法，用于注册和获取钩子
Register方法主要是将想要在应用指定阶段执行的函数注册到hook中
```go
func Register(stage Stage, fns ...func(ctx context.Context) error) {
	mu.Lock()
	defer mu.Unlock()
	globalHooks[stage] = append(globalHooks[stage], fns...)
}
```
## r包
easy-ngo框架有一个r包，这个包里包含了easy-ngo框架支持的第三方SDK，这个包里的第三方SDK通过hook形式注册到了框架中，当用户需要使用SDK时，直接在import中将包导入，就会自动执行包里面的init方法，比如以下代码
```go
import (
	_ "github.com/NetEase-Media/easy-ngo/application/r/rgorm"
)
```
查看rgorm.go代码，可以看到rgorm.go代码中有一个init()方法
```go
func init() {
	hooks.Register(hooks.Initialize, Initialize)
}

func Initialize(ctx context.Context) error {
	opts := make([]xgorm.Option, 0)
	conf.Get(key_prefix, &opts)
    ......
	return nil
}
```
init()方法当用户在引入包的时候自动运行，也就是用户在引入包的时候，自动将Initialize方法注册到了hooks的Initialize钩子。
这样应用启动完成后，用户可以直接通过`GetDBClient(key string)`方法获取到数据库的连接池，而不需要再自己手动初始化了，这样就极大的简化了用户的使用。
## 开发插件步骤
在easy-ngo框架基础上开发插件也是比较简单的
1. 将第三方SDK引入到你的工程中
2. 定义你需要hook点的相应函数，比如：你希望在Initialize的时候对插件进行初始化，那你直接定义一个Initialize方法，这个方法中，可以获得配置项，并进行第三方SDK的初始化动作
```go
func Initialize(ctx context.Context) error {
	opts := make([]xgorm.Option, 0)
	conf.Get(key_prefix, &opts)
    ......
	return nil
}
```
3. 定义init()方法，并将你已经定义好的hook方法注册到hooks.go中
```go
func init() {
	hooks.Register(hooks.Initialize, Initialize)
	hooks.Register(hooks.Start, Start)
	hooks.Register(hooks.Stop, Shutdown)
}
```
4. 经过以上的操作，第三方SDK就已经注册到了框架中，接下来，你直接可以使用SDK所提供的方法了
```go
func main() {
	app := application.Default()
	app.Initialize()
	app.Startup()

	cli := rgorm.GetDBClient("ngo.client.gorm.demo01")
	if cli == nil {
		fmt.Print("failed.")
		return
	}
	err := cli.Exec("update blacklist set blackword = ? where id = ?", "mmm", 10).Error
	if err != nil {
		fmt.Print("err:", err)
		return
	}
	fmt.Print("success")
}
```
以上，笔者介绍了如何在easy-ngo框架的基础上扩展第三方插件，大家可以尝试下
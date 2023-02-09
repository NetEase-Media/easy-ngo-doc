---
sidebar_position: 1
title: agollo 插件
---

# agollo 插件
`agollo` 目前作为配置源插件存在的，因此它实现了`ConfigSource`接口。

## 如何使用
#### 自动注册
对于每一个`插件`, 我们提供了与之对应的`自动注册`的`r`包的实现。比如我们实现的`xagollo`包有一个自动注入的`ragollo` 包。
我们在使用过程中，只需要在`main.go`程序入口处将`ragollo`导入即可。例如
```
import (
	_ "path/to/r/ragollo"
    ...
    ...
)

func main() {
	app := application.Default()
	app.Initialize()
	app.Startup()
	ip := conf.GetString("alpha.ip")
	fmt.Print(ip)
}
```
则主程序在执行过程中，会先将`agollo`注册到我们的`上下文`中去，然后加载插件。我们就能用到`agollo`的插件特性了。
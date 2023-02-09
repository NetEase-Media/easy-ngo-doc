---
sidebar_position: 1
title: 配置文件
---

# 配置文件
配置文件作为项目的基础组件，我们也对它做了插件化处理，因为配置的来源是多种多样的，比如`本地文件`或者`agollo`

目前我们的框架支持了的文件读取方式有：
- 本地文件
- 系统环境参数
- 启动参数
- viper
- agollo

你可以选择一个你想要的方式来加载你的配置信息。或者你有自己的配置服务，我们其实也提供了数据加载的`规范`,你只需要定义你自己的配置读取插件，并且实现 `ConfigSource` 接口即可。
```
type ConfigSource interface {
	Load(sourcePathes []string) (map[string]interface{}, error)
}
```

## 加载方式
#### 本地加载
如果你已经编译好了你的`应用程序`，然后创建了一个可供`应用程序`读取的`配置文件`。那么你只需要在启动程序的时候使用命令参数`-c app.toml`
比如:
```
./main -c app.toml
```
那么我们就会在当前路径中查找`app.toml`,查找到之后加载到内存之中，供应用程序使用。

#### 加载远程源
处于某种原因，你不想把你的配置放到本地，你想放到远程服务器，比如`agollo`服务器。那么你只需要在运行启动命令的时候，修改一下`-c`参数即可。比如：
```
./main -c apollo://localhost:8080?appId=ngo&cluster=ngo-demo&namespaceNames=namespace.json&configType=properties&propertyKey=netease
```

#### 加载复合源
有些场景下你想要在多个数据源下加载数据。我想在我本地配置`app.toml` 文件中加载数据，也想在 `agollo` 中加载数据。那么你只需要在`-c` 参数后的`值`使用`;`分开即可。比如
```
./main -c app.toml;apollo://localhost:8080?appId=ngo&cluster=ngo-demo&namespaceNames=namespace.json&configType=properties&propertyKey=netease
```
我们就会依次加载配置中的数据，如果多种配置中有相同的key，则后加载的数据会`覆盖`先前加载的数据的值。

#### 加载默认源
有些时候，你在启动应用程序的时候，并不想使用`-c`参数，我们其实也提供了默认加载的文件`application.toml`。比如：
```
./main
```
此时因为没有`-c`参数，我们就会去`main`所在的目录查找`application.toml`文件，如果找到了，我们就会加载该文件作为配置。
但是我们也想在这样的方式下也想`加载其他的数据源`，我们在会默认去`application.toml`文件中读取配置
```
[default.config]
addr=["apollo://localhost:8080?appId=ngo&cluster=ngo-demo&namespaceNames=namespace.json&configType=properties&propertyKey=netease"]
```
作为多数据源的配置方式进行读取。

## 加载流程
- 第一步先去系统环境中加载配置数据
- 第二步去启动参数中加载配置数据
- 第三步去`-c`参数 配置的数据源中记载配置数据，或者`application.toml`加载数据，如果配置了`default.config.addr` 则会按照配置的数据源顺序加载配置
- 各种数据加载方式相同的`key`采用`后值`覆盖`前值`的方式进行设置。


"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const l={sidebar_position:3,title:"\u4e2d\u95f4\u4ef6"},a="\u4e2d\u95f4\u4ef6",o={unversionedId:"chapter03/intro07_microservice/intro03_middleware",id:"chapter03/intro07_microservice/intro03_middleware",title:"\u4e2d\u95f4\u4ef6",description:"\u8fd9\u91cc\u5217\u4e3e\u76ee\u524d\u5b98\u65b9\u63d0\u4f9b\u7684\u4e2d\u95f4\u4ef6",source:"@site/docs/chapter03/intro07_microservice/intro03_middleware.md",sourceDirName:"chapter03/intro07_microservice",slug:"/chapter03/intro07_microservice/intro03_middleware",permalink:"/easy-ngo-website/docs/chapter03/intro07_microservice/intro03_middleware",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter03/intro07_microservice/intro03_middleware.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4e2d\u95f4\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49",permalink:"/easy-ngo-website/docs/chapter03/intro07_microservice/intro02_sd/intro99_customize"},next:{title:"memcache \u63d2\u4ef6",permalink:"/easy-ngo-website/docs/chapter03/intro08_memecache"}},c={},p=[{value:"recovery",id:"recovery",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:4},{value:"tracing",id:"tracing",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-1",level:4},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-2",level:4},{value:"metrics",id:"metrics",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef-2",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-3",level:4},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-4",level:4},{value:"ratelimit",id:"ratelimit",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef-3",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-5",level:4},{value:"circuitbreak",id:"circuitbreak",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef-2",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-6",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-6",level:4},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),(0,i.kt)("p",null,"\u8fd9\u91cc\u5217\u4e3e\u76ee\u524d\u5b98\u65b9\u63d0\u4f9b\u7684\u4e2d\u95f4\u4ef6"),(0,i.kt)("h2",{id:"recovery"},"recovery"),(0,i.kt)("p",null,"recovery \u4e2d\u95f4\u4ef6\u7528\u4e8e\u62e6\u622a\u8bf7\u6c42panic\uff0c\u9632\u6b62\u7a0b\u5e8f\u76f4\u63a5\u9000\u51fa\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5f02\u5e38\u5904\u7406\u5668\uff0c\u6765\u5904\u7406\u5f02\u5e38\uff0c\u4ed6\u662f\u4e00\u4e2a\u670d\u52a1\u7aef\u4e2d\u95f4\u4ef6"),(0,i.kt)("h3",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithHandler(h Handler)"),": \u5f02\u5e38\u5904\u7406\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u5f02\u5e38\u5904\u7406\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func(ctx context.Context, req, p interface{}) error {\n    return errors.Newf(errors.Internal, "INTERNAL_ERROR", "%v", p)\n}\n')),(0,i.kt)("h4",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'gs, _ := server.New(\n    server.WithAddr(":8080"),\n    server.WithMiddlewares(\n        // \u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u6784\u9020\u52a0\u8f7d\n        recovery.Recovery(), \n    ),\n)\n\n// \u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u65b9\u6cd5\u52a0\u8f7d\ngs.Use("/", recovery.Recovery())\n')),(0,i.kt)("h2",{id:"tracing"},"tracing"),(0,i.kt)("p",null,"tracing \u4e2d\u95f4\u4ef6\u7528\u4e8e\u8bb0\u5f55\u8bf7\u6c42\u7684\u94fe\u8def\u4fe1\u606f\uff0c\u5305\u542b\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef"),(0,i.kt)("h3",{id:"\u670d\u52a1\u7aef-1"},"\u670d\u52a1\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider"),": tracing\u7684\u63d0\u4f9b\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("h4",{id:"\u7528\u6cd5-1"},"\u7528\u6cd5"),(0,i.kt)("p",null,"\u63d0\u793a\uff1a\u8be5\u4e2d\u95f4\u4ef6\u5df2\u7ecf\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ngo microservice server"),"\u914d\u7f6e\u4e2d\u96c6\u6210\uff0c\u76f4\u63a5\u5f00\u542f\u5373\u53ef",(0,i.kt)("inlineCode",{parentName:"p"},"enableTracing = true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//xotel\nxotelOpt := xotel.DefaultOption()\nxotelOpt.SamplerRatio = 1\nprovider := xotel.New(xotelOpt)\n\ngs, _ := server.New(\n    server.WithAddr(":8080"),\n    server.WithMiddlewares( \n        // \u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u6784\u9020\u52a0\u8f7d \n        tracing.Server(provider),\n    ),\n)\n\n// \u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u65b9\u6cd5\u52a0\u8f7d\ngs.Use("/", tracing.Server(provider))\n')),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider"),": tracing\u7684\u63d0\u4f9b\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("h4",{id:"\u7528\u6cd5-2"},"\u7528\u6cd5"),(0,i.kt)("p",null,"\u63d0\u793a\uff1a\u8be5\u4e2d\u95f4\u4ef6\u5df2\u7ecf\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ngo microservice client"),"\u914d\u7f6e\u4e2d\u96c6\u6210\uff0c\u76f4\u63a5\u5f00\u542f\u5373\u53ef",(0,i.kt)("inlineCode",{parentName:"p"},"enableTracing = true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//xotel\nxotelOpt := xotel.DefaultOption()\nxotelOpt.SamplerRatio = 1\nprovider := xotel.New(xotelOpt)\n\nconn, _ := client.New(\n    context.Background(),\n    "127.0.0.1:8080",\n    client.WithMiddlewares(\n        // \u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u6784\u9020\u52a0\u8f7d \n        tracing.Client(provider),\n    )\n)\ndefer conn.Close()\n\n// \u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u65b9\u6cd5\u52a0\u8f7d\nconn.Use("/", tracing.Client(provider))\n')),(0,i.kt)("h2",{id:"metrics"},"metrics"),(0,i.kt)("p",null,"metrics \u4e2d\u95f4\u4ef6\u7528\u4e8e\u8bb0\u5f55\u6307\u6807\u4fe1\u606f\uff0c\u5305\u542b\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef"),(0,i.kt)("h3",{id:"\u670d\u52a1\u7aef-2"},"\u670d\u52a1\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider"),": metrics\u7684\u63d0\u4f9b\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("h4",{id:"\u7528\u6cd5-3"},"\u7528\u6cd5"),(0,i.kt)("p",null,"\u63d0\u793a\uff1a\u8be5\u4e2d\u95f4\u4ef6\u5df2\u7ecf\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ngo microservice server"),"\u914d\u7f6e\u4e2d\u96c6\u6210\uff0c\u76f4\u63a5\u5f00\u542f\u5373\u53ef",(0,i.kt)("inlineCode",{parentName:"p"},"enableMetrics = true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'http.Handle("/metrics", promhttp.Handler())\nlisten, err := net.Listen("tcp", ":9998")\nif err != nil {\n    panic(err)\n}\ngo http.Serve(listen, nil)\n\ngs, _ := server.New(\n    server.WithAddr(":8080"),\n    server.WithMiddlewares(\n        // \u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u6784\u9020\u52a0\u8f7d\n        metrics.Server(xprometheus.DefaultProvider()),\n    ),\n)\n\n// \u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u65b9\u6cd5\u52a0\u8f7d\nconn.Use("/", metrics.Server(xprometheus.DefaultProvider()))\n')),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef-1"},"\u5ba2\u6237\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider"),": tracing\u7684\u63d0\u4f9b\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("h4",{id:"\u7528\u6cd5-4"},"\u7528\u6cd5"),(0,i.kt)("p",null,"\u63d0\u793a\uff1a\u8be5\u4e2d\u95f4\u4ef6\u5df2\u7ecf\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ngo microservice client"),"\u914d\u7f6e\u4e2d\u96c6\u6210\uff0c\u76f4\u63a5\u5f00\u542f\u5373\u53ef",(0,i.kt)("inlineCode",{parentName:"p"},"enableTracing = true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'http.Handle("/metrics", promhttp.Handler())\nlisten, err := net.Listen("tcp", ":9999")\nif err != nil {\n    panic(err)\n}\ngo http.Serve(listen, nil)\n\nconn, _ := client.New(\n    context.Background(),\n    "127.0.0.1:8080",\n    client.WithMiddlewares(\n        // \u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7\u6784\u9020\u52a0\u8f7d\n        metrics.Client(xprometheus.DefaultProvider()),\n    ),\n)\ndefer conn.Close()\n\n// \u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u65b9\u6cd5\u52a0\u8f7d\nconn.Use("/", metrics.Client(xprometheus.DefaultProvider()))\n')),(0,i.kt)("h2",{id:"ratelimit"},"ratelimit"),(0,i.kt)("p",null,"ratelimit \u4e2d\u95f4\u4ef6\u7528\u4e8e\u9650\u6d41\uff0c\u4ed6\u662f\u4e00\u4e2a\u670d\u52a1\u7aef\u4e2d\u95f4\u4ef6"),(0,i.kt)("h3",{id:"\u670d\u52a1\u7aef-3"},"\u670d\u52a1\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RateLimiter"),": \u9650\u6d41\u5668\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u6269\u5c55\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u9650\u6d41\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithHandler(h Handler)"),": \u9519\u8bef\u5904\u7406\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("p",null,"\u9650\u6d41\u5668\u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type RateLimiter interface {\n    // Acquire returns true if the rate limit is not exceeded. \n    Acquire() bool\n}\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u9519\u8bef\u5904\u7406\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func(ctx context.Context, req interface{}) error {\n    return errors.Newf(errors.ResourceExhausted, "RATE_LIMIT", "too many requests")\n}\n')),(0,i.kt)("h4",{id:"\u7528\u6cd5-5"},"\u7528\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'gs, _ := server.New(\n    server.WithAddr(":8080"),\n)\ntestdata.RegisterGreeterServer(gs, &GreeterServerImpl{})\n\n// \u5bf9\u6307\u5b9a\u65b9\u6cd5\u9650\u6d41\ngs.Use("/test.Greeter/SayHello", ratelimit.RateLimit(\n    ratelimit.NewTokenBucketRateLimiter(3, 5),\n))\n')),(0,i.kt)("h2",{id:"circuitbreak"},"circuitbreak"),(0,i.kt)("p",null,"circuitbreak \u4e2d\u95f4\u4ef6\u7528\u4e8e\u7194\u65ad\uff0c\u4ed6\u662f\u4e00\u4e2a\u5ba2\u6237\u7aef\u4e2d\u95f4\u4ef6"),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef-2"},"\u5ba2\u6237\u7aef"),(0,i.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CircuitBreaker"),": \u7194\u65ad\u5668\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u6269\u5c55\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u7194\u65ad\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithHandler(h middleware.Handler)"),": \u964d\u7ea7\u5904\u7406\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WithLogger(logger xlog.Logger)"),": \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u6253\u5370\u65e5\u5fd7")),(0,i.kt)("p",null,"\u7194\u65ad\u5668\u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type CircuitBreaker interface {\n    Execute(handler func() (err error)) (isBreak bool)\n}\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u964d\u7ea7\u5904\u7406\u5668\uff0c\u76f4\u63a5\u8fd4\u56de\u9519\u8bef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func(ctx context.Context, req interface{}) (interface{}, error) {\n    return nil, errors.Newf(errors.Unavailable, "CIRCUIT_BREAK", "circuit breaker is open")\n}\n')),(0,i.kt)("h4",{id:"\u7528\u6cd5-6"},"\u7528\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, _ := client.New(\n    context.Background(),\n    "127.0.0.1:8080",\n)\ndefer conn.Close()\nclient := testdata.NewGreeterClient(conn)\n\nvar st gobreaker.Settings\nst.Name = "/test.Greeter/SayHello"\nst.ReadyToTrip = func(counts gobreaker.Counts) bool {\n    failureRatio := float64(counts.TotalFailures) / float64(counts.Requests)\n    return counts.Requests >= 3 && failureRatio >= 0.6\n}\n\n// \u5bf9\u6307\u5b9a\u65b9\u6cd5\u7194\u65ad\nconn.Use(\n    "/test.Greeter/SayHello",\n    circuitbreak.CircuitBreak(breaker.NewCircuitBreaker(st),\n        circuitbreak.WithHandler(func(ctx context.Context, req interface{}) (interface{}, error) {\n            return &testdata.HelloReply{\n                Message: fmt.Sprintf("hello circuit break"),\n            }, nil\n        }),\n        circuitbreak.WithLogger(log),\n    ),\n)\n')),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u8fd4\u56de\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Middleware"),"\uff0capi\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Handler is a function that handles a request.\ntype Handler func(ctx context.Context, req interface{}) (interface{}, error)\n\n// Middleware is a chainable behavior modifier for handlers.\ntype Middleware func(Handler) Handler\n\n")))}d.isMDXComponent=!0}}]);
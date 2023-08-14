"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),g=r,d=s["".concat(o,".").concat(g)]||s[g]||m[g]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4,title:"tracing \u63d2\u4ef6"},i="tracing \u63d2\u4ef6",p={unversionedId:"chapter02/intro04_tracing",id:"chapter02/intro04_tracing",title:"tracing \u63d2\u4ef6",description:"\u7b80\u4ecb",source:"@site/docs/chapter02/intro04_tracing.md",sourceDirName:"chapter02",slug:"/chapter02/intro04_tracing",permalink:"/easy-ngo-website/docs/chapter02/intro04_tracing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter02/intro04_tracing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"tracing \u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"metrics \u63d2\u4ef6",permalink:"/easy-ngo-website/docs/chapter02/intro03_metrics"},next:{title:"\u7b2c\u4e09\u7ae0 \u62d3\u5c55\u63d2\u4ef6",permalink:"/easy-ngo-website/docs/category/\u7b2c\u4e09\u7ae0-\u62d3\u5c55\u63d2\u4ef6"}},o={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"Span",id:"span",level:3},{value:"Span Context",id:"span-context",level:3},{value:"Attribute",id:"attribute",level:3},{value:"Span \u4e8b\u4ef6",id:"span-\u4e8b\u4ef6",level:3},{value:"Span \u94fe\u63a5",id:"span-\u94fe\u63a5",level:3},{value:"Span \u72b6\u6001",id:"span-\u72b6\u6001",level:3},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u6b65\uff0c\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u7684\u76f8\u5173\u914d\u7f6e",id:"\u7b2c\u4e00\u6b65\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u7684\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u7b2c\u4e8c\u6b65\uff0c\u5728\u76f8\u5173\u7ec4\u4ef6\u4e2d\u5f00\u542f\u94fe\u8def\u8ffd\u8e2a",id:"\u7b2c\u4e8c\u6b65\u5728\u76f8\u5173\u7ec4\u4ef6\u4e2d\u5f00\u542f\u94fe\u8def\u8ffd\u8e2a",level:3},{value:"\u7b2c\u4e09\u6b65\uff0c\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173\u7684\u542f\u52a8\u4ee3\u7801",id:"\u7b2c\u4e09\u6b65\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173\u7684\u542f\u52a8\u4ee3\u7801",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tracing-\u63d2\u4ef6"},"tracing \u63d2\u4ef6"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u65f6\u4ee3\uff0c\u4e00\u4e2a\u5165\u53e3\u8bf7\u6c42\uff0c\u53ef\u80fd\u88ab\u540e\u7aef\u670d\u52a1\u5206\u89e3\u4e3aN\u4e2a\u5fae\u670d\u52a1\u8c03\u7528\u3002\u5982\u679c\u63a5\u5165\u4e86\u94fe\u8def\u8ffd\u8e2a\uff0c\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u89c2\u5bdf\u5230\u540e\u7aef\u670d\u52a1\u7684\u8c03\u7528\u94fe\u8def\uff0c\u5e76\u4e14\u8fd8\u80fd\u5173\u6ce8\u6027\u80fd\uff0c\u6392\u67e5\u6545\u969c\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5b9a\u4f4d\u5230\u54ea\u4e2a\u670d\u52a1\u51fa\u4e86\u95ee\u9898\uff0c\u65b9\u4fbf\u8fdb\u4e00\u6b65\u7684\u8c03\u67e5\u5206\u6790\u3002"),(0,r.kt)("p",null,"easy-ngo \u7684\u94fe\u8def\u8ffd\u8e2a\u529f\u80fd\u4f9d\u9760\u4e8e open-telemetry \u7684API\uff0c \u6211\u4eec\u5728\u6b64\u57fa\u7840\u4e0a\u5b8c\u6210\u4e86\u5927\u90e8\u5206\u7ec4\u4ef6\u7684\u94fe\u8def\u8ffd\u8e2a\u7ec7\u5165\u5de5\u4f5c\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u63d0\u4f9b\u94fe\u8def\u8ffd\u8e2a\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,r.kt)("h3",{id:"span"},"Span"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Span, \u4ee3\u8868\u4e00\u4e2a\u64cd\u4f5c\u7684\u6700\u5c0f\u5355\u5143,\u4ed6\u8ddf\u8e2a\u8bf7\u6c42\u6267\u884c\u7684\u67d0\u4e00\u90e8\u64cd\u4f5c\uff0c\u63cf\u7ed8\u8be5\u64cd\u4f5c\u671f\u95f4\u53d1\u751f\u7684\u4e00\u4e9b\u72b6\u51b5\u3002Span\u662f\u6784\u5efa\u94fe\u8def\u7684\u57fa\u77f3, Span\u662f\u53ef\u4ee5\u5d4c\u5957\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"Span\u5305\u542b\u4e00\u4e0b\u8981\u7d20",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"\u7236Span\u7684Id\uff08\u6ca1\u6709\u5219\u4e3a\u7a7a\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u548c\u7ed3\u675f\u7684\u65f6\u95f4\u6233"),(0,r.kt)("li",{parentName:"ul"},"SpanContext"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"Span \u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"Span \u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"Span \u72b6\u6001")))),(0,r.kt)("h3",{id:"span-context"},"Span Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SpanContext, Span\u7684\u4e0a\u4e0b\u6587\uff0c\u662f\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u5bf9\u8c61\uff0c\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u94fe\u8def\u7684 Trace ID"),(0,r.kt)("li",{parentName:"ul"},"Span \u7684 Span ID"),(0,r.kt)("li",{parentName:"ul"},"Trace Flag\uff0c \u4e8c\u8fdb\u5236\u7f16\u7801\u7684\u94fe\u8def\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"Trace State\uff0c\u9644\u52a0\u7684\u952e\u503c\u5bf9\u4fe1\u606f")))),(0,r.kt)("h3",{id:"attribute"},"Attribute"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attribute, \u952e\u503c\u5bf9\u7ed3\u6784\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u6807\u8bb0Span\u6b63\u5728\u8fdb\u884c\u7684\u52a8\u4f5c\u7ec6\u8282\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u5982\uff0c\u5982\u679c\u4e00\u4e2aSpan\u8981\u8ddf\u8e2a\u7535\u5546\u7cfb\u7edf\u4e2d\u7528\u7684\u8d2d\u7269\u8f66\u52a0\u5546\u54c1\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u6355\u83b7\u7528\u6237ID\uff0c\u8d2d\u7269\u8f66ID\uff0c\u4ee5\u53ca\u52a0\u8f66\u5546\u54c1ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u6709\u4ee5\u4e0b\u89c4\u5219\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Key \u5fc5\u987b\u662f\u975e\u7a7a\u5b57\u7b26\u4e32\u503c"),(0,r.kt)("li",{parentName:"ul"},"Value \u5fc5\u987b\u6570\u975e\u7a7a\u5b57\u7b26\u4e32\u3001\u5e03\u5c14\u503c\u3001\u6d6e\u70b9\u6570\u3001\u6574\u6570\u6216\u8005\u8fd9\u4e9b\u503c\u7684\u6570\u7ec4\u5f62\u5f0f")))),(0,r.kt)("h3",{id:"span-\u4e8b\u4ef6"},"Span \u4e8b\u4ef6"),(0,r.kt)("p",null,"Span\u4e8b\u4ef6\u662fSpan\u7ed3\u6784\u5316\u65e5\u5fd7\u4fe1\u606f\uff0c\u901a\u5e38\u7528\u4e8e\u5728Span\u6301\u7eed\u671f\u95f4\uff0c\u505a\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u5355\u4e00\u65f6\u95f4\u70b9\u6807\u8bb0\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5728web\u6d4f\u89c8\u5668\u4e2d\u6709\u4e00\u4e0b\u4e24\u79cd\u60c5\u51b5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8ddf\u8e2a\u9875\u9762\u7684\u52a0\u8f7d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6807\u8bb0\u9875\u9762\u4f55\u65f6\u53d8\u5f97\u53ef\u4ee5\u4ea4\u4e92"))),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2d\u60c5\u51b5\u7528Span\u662f\u5408\u9002\u7684\uff0c\u5b83\u5177\u6709\u5f00\u59cb\u548c\u7ed3\u675f\u7684\u64cd\u4f5c\u3002\u7b2c\u4e8c\u79cd\u60c5\u51b5\u7528Span Event\uff0c\u5b83\u6807\u8bb0\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u5355\u4e00\u65f6\u95f4\u70b9\u3002"),(0,r.kt)("h3",{id:"span-\u94fe\u63a5"},"Span \u94fe\u63a5"),(0,r.kt)("p",null,"\u94fe\u63a5\u4e3b\u8981\u662f\u5c06Span\u4e4b\u95f4\u8fdb\u884c\u5173\u8054\uff0c\u8868\u793a\u4ed6\u4eec\u4e4b\u95f4\u6709\u56e0\u679c\u5173\u7cfb\u3002\n\u6bd4\u5982\u73b0\u5728\u6709\u4e00\u4e2a\u64cd\u4f5c\u6b63\u5728\u5904\u7406\u4e2d\uff0c\u9700\u8981\u6392\u961f\u6267\u884c\u53e6\u5916\u4e00\u4e2a\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u662f\u5f02\u6b65\u6267\u884c\u7684\u3002\n\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528\u94fe\u63a5\u5c06\u5f53\u524d\u64cd\u4f5c\u548c\u5f02\u6b65\u64cd\u4f5c\u5173\u8054\u8d77\u6765\u3002\u80fd\u591f\u65b9\u4fbf\u7684\u8ddf\u8e2a\u67e5\u770b\u3002"),(0,r.kt)("h3",{id:"span-\u72b6\u6001"},"Span \u72b6\u6001"),(0,r.kt)("p",null,"Span\u72b6\u6001\u4e00\u822c\u6709 Unset, Ok, Error\uff0c\u5f53\u6709\u5f02\u5e38\u65f6\uff0cSpan\u7684\u72b6\u6001\u4f1a\u88ab\u8bbe\u7f6e\u4e3aError,\u5426\u5219\u5c31\u662fUnset\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u7684\u76f8\u5173\u914d\u7f6e"},"\u7b2c\u4e00\u6b65\uff0c\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u7684\u76f8\u5173\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728 app.toml \u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[ngo.tracer.xotel]\n# \u8bbe\u7f6e\u4f7f\u7528jaeger\u5bfc\u51fa\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u652f\u6301 otel \u548c stdout\nexporterName = "jaeger"\n# \u8bbe\u7f6e\u5bfc\u51fa\u4e0a\u62a5\u7684\u8fdc\u7aef\u5730\u5740\nendpoint = "http://jaeger:14268/api/traces"\n# \u8bbe\u7f6e\u91c7\u6837\u7387\nsamplerRatio = 1.0\n# \u8bbe\u7f6e\u4e0a\u62a5\u65f6\u7684\u670d\u52a1\u540d\nserviceName = "tracing-test"\n')),(0,r.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u5728\u76f8\u5173\u7ec4\u4ef6\u4e2d\u5f00\u542f\u94fe\u8def\u8ffd\u8e2a"},"\u7b2c\u4e8c\u6b65\uff0c\u5728\u76f8\u5173\u7ec4\u4ef6\u4e2d\u5f00\u542f\u94fe\u8def\u8ffd\u8e2a"),(0,r.kt)("p",null,"\u5728\u76f8\u5173\u7ec4\u4ef6\u7684\u914d\u7f6e\u4e2d\u5f00\u542fTracer\uff0c\u6bd4\u5982\u4ee5\u4e0b\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[ngo.server.gin]\nenableTracer=true\n\n[[ngo.client.gorm]]\nenableTracer=true\n\n[[ngo.client.redis]]\nenableTracer=true\n\n[[ngo.client.kafka]]\nenableTracer=true\n")),(0,r.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173\u7684\u542f\u52a8\u4ee3\u7801"},"\u7b2c\u4e09\u6b65\uff0c\u6dfb\u52a0\u94fe\u8def\u8ffd\u8e2a\u76f8\u5173\u7684\u542f\u52a8\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728go\u7684\u542f\u52a8\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n        "fmt"\n        "net/http"\n        _ "net/http/pprof"\n        "runtime"\n\n   // \u6ce8\u610f\u5148\u5f15\u5165 rconfig\n        _ "github.com/NetEase-Media/easy-ngo/application/r/rconfig"\n\n        _ "github.com/NetEase-Media/easy-ngo/application/r/rotel"\n\n        "github.com/NetEase-Media/easy-ngo/application"\n\n        "github.com/NetEase-Media/easy-ngo/application/r/rgin"\n\n        "github.com/gin-gonic/gin"\n)\n\n// go run . -c ./app.yaml\nfunc main() {\n\n        app := &application.Application{}\n        // app\u521d\u59cb\u5316\u5b8c\u6210\u56de\u8c03\n        app.Initialize(func() error {\n                g := rgin.Gin()\n                g.GET("/hello", func(ctx *gin.Context) {\n                        ctx.String(http.StatusOK, "hello world!")\n                })\n                return nil\n        })\n        app.Startup()\n\n}\n')))}s.isMDXComponent=!0}}]);
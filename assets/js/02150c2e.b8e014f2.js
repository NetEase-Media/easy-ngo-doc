"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8312],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>N});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=d(n),o=l,N=g["".concat(m,".").concat(o)]||g[o]||u[o]||r;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[g]="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},5910:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2,title:"client"},i="client",p={unversionedId:"chapter03/intro07_microservice/intro01_grpc/intro02_client",id:"chapter03/intro07_microservice/intro01_grpc/intro02_client",title:"client",description:"\u6211\u4eec\u5bf9grpc\u505a\u4e86\u7b80\u5355\u5c01\u88c5\u3002\u6211\u4eec\u4e5f\u4e3a\u5176\u9002\u914d\u4e86\u81ea\u52a8\u6ce8\u518c\u7684rms\u5305\u7684\u5b9e\u73b0\u3002",source:"@site/docs/chapter03/intro07_microservice/intro01_grpc/intro02_client.md",sourceDirName:"chapter03/intro07_microservice/intro01_grpc",slug:"/chapter03/intro07_microservice/intro01_grpc/intro02_client",permalink:"/easy-ngo-website/docs/chapter03/intro07_microservice/intro01_grpc/intro02_client",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter03/intro07_microservice/intro01_grpc/intro02_client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"client"},sidebar:"tutorialSidebar",previous:{title:"server",permalink:"/easy-ngo-website/docs/chapter03/intro07_microservice/intro01_grpc/intro01_server"},next:{title:"\u670d\u52a1\u6ce8\u518c&\u53d1\u73b0",permalink:"/easy-ngo-website/docs/category/\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"}},m={},d=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u81ea\u52a8\u6ce8\u518c",id:"\u81ea\u52a8\u6ce8\u518c",level:4},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u4e3b\u914d\u7f6e",id:"\u4e3b\u914d\u7f6e",level:3},{value:"ClientTLSConfig",id:"clienttlsconfig",level:3},{value:"GRPCClientOptions",id:"grpcclientoptions",level:3},{value:"GRPCClientConnectParams",id:"grpcclientconnectparams",level:3},{value:"GRPCClientKeepaliveParams",id:"grpcclientkeepaliveparams",level:3},{value:"\u914d\u7f6e\u4e3e\u4f8b",id:"\u914d\u7f6e\u4e3e\u4f8b",level:2},{value:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",level:2}],k={toc:d};function g(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client"},"client"),(0,l.kt)("p",null,"\u6211\u4eec\u5bf9",(0,l.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/quickstart/"},(0,l.kt)("inlineCode",{parentName:"a"},"grpc")),"\u505a\u4e86\u7b80\u5355\u5c01\u88c5\u3002\u6211\u4eec\u4e5f\u4e3a\u5176\u9002\u914d\u4e86\u81ea\u52a8\u6ce8\u518c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"rms"),"\u5305\u7684\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("h4",{id:"\u81ea\u52a8\u6ce8\u518c"},"\u81ea\u52a8\u6ce8\u518c"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"rms"),"\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"grpc server"),"\u5bfc\u5165\u5230\u4e3b\u7a0b\u5e8f\u4e2d\uff0c\u6bd4\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "path/to/r/rms/grpc/client"\n)\n\nfunc main() {\n    .....\n}\n')),(0,l.kt)("p",null,"\u4e3b\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e"),"\u4e2d\u7684\u6570\u636e\uff0c\u521b\u5efa\u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u653e\u5230\u5185\u5b58\u4e2d\u3002\u6211\u4eec\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u8c03\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'cli := client.Get("client1")\n')),(0,l.kt)("p",null,"\u76f4\u63a5\u62ff\u5230\u4e86client\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u8c03\u7528\u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"rsp, err := client.SayHello(ctx, req)\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("h3",{id:"\u4e3b\u914d\u7f6e"},"\u4e3b\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u540d\u79f0\uff0c\u7528\u6765\u83b7\u53d6client\u5b9e\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u5730\u5740\uff0c\u5982\u679c\u662f\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\uff0c\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"td"},"sd:///"),"\u524d\u7f00"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DiscoveryRef"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u7684\u670d\u52a1\u53d1\u73b0\u540d\u79f0\uff0c\u7528\u6765\u6839\u636e\u540d\u79f0\u83b7\u53d6\u670d\u52a1\u53d1\u73b0\u5b9e\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BalancerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"round_robin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnabledHealthCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5065\u5eb7\u68c0\u67e5\uff0c\u5bf9\u5e94",(0,l.kt)("inlineCode",{parentName:"td"},"grpc.WithDefaultServiceConfig()"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"HealthCheckConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LoggerRef"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u7684\u65e5\u5fd7\u540d\u79f0\uff0c\u7528\u6765\u6839\u636e\u540d\u79f0\u83b7\u53d6\u65e5\u5fd7\u5b9e\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6253\u5230\u63a7\u5236\u53f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnableMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f",(0,l.kt)("inlineCode",{parentName:"td"},"metrics"),"\u63d2\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnableTracing"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f",(0,l.kt)("inlineCode",{parentName:"td"},"tracing"),"\u63d2\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnableLogging"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f",(0,l.kt)("inlineCode",{parentName:"td"},"logging"),"\u63d2\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tls"),(0,l.kt)("td",{parentName:"tr",align:null},"ClientTLSConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"TLS\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GrpcOpts"),(0,l.kt)("td",{parentName:"tr",align:null},"GRPCClientOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"grpc \u53c2\u6570\u8be6\u7ec6\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"clienttlsconfig"},"ClientTLSConfig"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CertFile"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ServerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"server\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"grpcclientoptions"},"GRPCClientOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Block"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u524d\u53f0\u963b\u585e\u5efa\u7acb\u8fde\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authority"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"td"},":authority")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserAgent"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"td"},"User-Agent")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConnectParams"),(0,l.kt)("td",{parentName:"tr",align:null},"GRPCClientConnectParams"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KeepaliveParams"),(0,l.kt)("td",{parentName:"tr",align:null},"GRPCClientKeepaliveParams"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Keepalive\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InitialWindowSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6ehttp/2 \u6d41\u7684\u521d\u59cb\u7a97\u53e3\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InitialConnWindowSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6ehttp/2 \u8fde\u63a5\u7684\u521d\u59cb\u7a97\u53e3\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WriteBufferSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u7f13\u51b2\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReadBufferSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bfb\u7f13\u51b2\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"32KB"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MaxHeaderListSize"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5934\u90e8\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DisableRetry"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528\u91cd\u8bd5"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"grpcclientconnectparams"},"GRPCClientConnectParams"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BaseDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u6b21\u5931\u8d25\u91cd\u8bd5\u524d\u540e\u9700\u7b49\u5f85\u591a\u4e45"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1s"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multiplier"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5931\u8d25\u7684\u91cd\u8bd5\u540e\u4e58\u4ee5\u7684\u500d\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Jitter"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u968f\u673a\u6296\u52a8\u56e0\u5b50"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0.2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MaxDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5ef6\u8fdf\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"120s"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MinConnectTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u94fe\u63a5\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"grpcclientkeepaliveparams"},"GRPCClientKeepaliveParams"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001ping\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"20s"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PermitWithoutStream"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6ca1\u6709 active \u7684 stream\uff0c \u662f\u5426\u5141\u8bb8\u53d1\u9001 ping"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"\u914d\u7f6e\u4e3e\u4f8b"},"\u914d\u7f6e\u4e3e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[[ngo.microservices.grpc.clients]]\nname = "client1"\ntarget = "127.0.0.1:8080"\ntimeout = "30s"\ndiscoveryRef = ""\nbalancerName = "round_robin"\nenabledHealthCheck = false\nloggerRef = ""\nenableMetrics = false\nenableTracing = false\nenableLogging = false\n')),(0,l.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u652f\u6301\u4e86\u540c\u4e00\u4e2a\u5e94\u7528\u7684\u591a",(0,l.kt)("inlineCode",{parentName:"p"},"grpc client"),", \u56e0\u6b64\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"toml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u591a\u4e2a\u3002"),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"ngo\u914d\u7f6e\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"tracing"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"metrics"),"\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u65e0\u9700\u624b\u52a8\u6dfb\u52a0\uff0c\u5bf9\u4e8e\u5176\u4ed6\u4e2d\u95f4\u4ef6\u6211\u4eec\u9700\u8981\u624b\u52a8\u6dfb\u52a0\uff0c\u8c03\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// selector \u652f\u6301 / \u5168\u5c40\u63d2\u4ef6\n//              /{package} \u5305\u7ea7\u522b\u63d2\u4ef6\n//              /{package}.{service} \u670d\u52a1\u7ea7\u522b\u63d2\u4ef6\n//              /{package}.{service}/{method} \u65b9\u6cd5\u7ea7\u522b\u63d2\u4ef6\n// \u52a0\u8f7d\u987a\u5e8f\u5168\u5c40->\u5168\u5c40->\u5305->\u670d\u52a1->\u65b9\u6cd5\nfunc (c *Client) Use(selector string, mws ...middleware.Middleware) \n")))}g.isMDXComponent=!0}}]);
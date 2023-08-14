"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8716],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7606:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,title:"etcd"},i="etcd",p={unversionedId:"chapter03/intro07_microservice/intro02_sd/intro01_etcd",id:"chapter03/intro07_microservice/intro02_sd/intro01_etcd",title:"etcd",description:"\u6211\u4eec\u4f7f\u7528etcd\u5b9e\u73b0\u4e86\u6211\u4eec\u7684\u670d\u52a1\u7ec4\u518c\u53d1\u73b0\u63a5\u53e3\u3002\u5e76\u4e14\u4e3a\u5176\u9002\u914d\u4e86\u81ea\u52a8\u6ce8\u518c\u7684rms\u5305\u7684\u5b9e\u73b0\u3002",source:"@site/docs/chapter03/intro07_microservice/intro02_sd/intro01_etcd.md",sourceDirName:"chapter03/intro07_microservice/intro02_sd",slug:"/chapter03/intro07_microservice/intro02_sd/intro01_etcd",permalink:"/easy-ngo-website/docs/chapter03/intro07_microservice/intro02_sd/intro01_etcd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter03/intro07_microservice/intro02_sd/intro01_etcd.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"etcd"},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u6ce8\u518c&\u53d1\u73b0",permalink:"/easy-ngo-website/docs/category/\u670d\u52a1\u6ce8\u518c\u53d1\u73b0"},next:{title:"\u81ea\u5b9a\u4e49",permalink:"/easy-ngo-website/docs/chapter03/intro07_microservice/intro02_sd/intro99_customize"}},o={},d=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u81ea\u52a8\u6ce8\u518c",id:"\u81ea\u52a8\u6ce8\u518c",level:4},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u4e3b\u914d\u7f6e",id:"\u4e3b\u914d\u7f6e",level:3},{value:"BasicAuth",id:"basicauth",level:3},{value:"ClientTLSConfig",id:"clienttlsconfig",level:3},{value:"\u914d\u7f6e\u4e3e\u4f8b",id:"\u914d\u7f6e\u4e3e\u4f8b",level:2}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"etcd"},"etcd"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},(0,r.kt)("inlineCode",{parentName:"a"},"etcd")),"\u5b9e\u73b0\u4e86\u6211\u4eec\u7684\u670d\u52a1\u7ec4\u518c\u53d1\u73b0\u63a5\u53e3\u3002\u5e76\u4e14\u4e3a\u5176\u9002\u914d\u4e86\u81ea\u52a8\u6ce8\u518c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"rms"),"\u5305\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h4",{id:"\u81ea\u52a8\u6ce8\u518c"},"\u81ea\u52a8\u6ce8\u518c"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"rms"),"\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"sd etcd"),"\u5bfc\u5165\u5230\u4e3b\u7a0b\u5e8f\u4e2d\uff0c\u6bd4\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    _ "path/to/r/rms/sd/etcd"\n)\n\nfunc main() {\n    .....\n}\n')),(0,r.kt)("p",null,"\u4e3b\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e"),"\u4e2d\u7684\u6570\u636e\uff0c\u521b\u5efa\u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u653e\u5230\u5185\u5b58\u4e2d\u3002\u6211\u4eec\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"registrarRef"),"\u914d\u7f6e\u53c2\u6570\u83b7\u53d6\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u4f8b \uff0c\n",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"discoveryRef"),"\u914d\u7f6e\u53c2\u6570\u83b7\u53d6\u670d\u52a1\u53d1\u73b0\u5b9e\u4f8b\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u624b\u52a8\u83b7\u53d6\u5b9e\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("h3",{id:"\u4e3b\u914d\u7f6e"},"\u4e3b\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u53d1\u73b0\u540d\u79f0\uff0c\u7528\u6765\u83b7\u53d6sd\u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConnectTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth"),(0,r.kt)("td",{parentName:"tr",align:null},"BasicAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"microservices"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6388\u6743\u5b58\u6d3b\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"15s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tls"),(0,r.kt)("td",{parentName:"tr",align:null},"ClientTLSConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"TLS\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoggerRef"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u7684\u65e5\u5fd7\u540d\u79f0\uff0c\u7528\u6765\u6839\u636e\u540d\u79f0\u83b7\u53d6\u65e5\u5fd7\u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6253\u5230\u63a7\u5236\u53f0")))),(0,r.kt)("h3",{id:"basicauth"},"BasicAuth"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"clienttlsconfig"},"ClientTLSConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CertFile"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ServerName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"server\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u4e3e\u4f8b"},"\u914d\u7f6e\u4e3e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[ngo.microservices.sd.etcds]]\nname = "etcd"\nendpoints = [ "127.0.0.1:2379" ]\nnamespace = "microservices"\nttl = "15s"\nloggerRef = ""\n')),(0,r.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u652f\u6301\u4e86\u540c\u4e00\u4e2a\u5e94\u7528\u7684\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"sd"),", \u56e0\u6b64\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"toml"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u591a\u4e2a\u3002"))}u.isMDXComponent=!0}}]);
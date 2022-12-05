import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,e as u,d,w as a,a as e,b as s,r as b}from"./app.4032f898.js";const v={},m=e("p",null,[e("code",null,"redis使用安装")],-1),h=e("h2",{id:"下载-redis-安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-redis-安装包","aria-hidden":"true"},"#"),s(" 下载 redis 安装包")],-1),_=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"wget"),s(` http://download.redis.io/releases/redis-4.0.6.tar.gz
//版本可以自己去官网找，下载的路径一般是放在了  /usr/local/  下
//也可以自己选择路径，自己记住存放的路径，方便以后卸载的时候直接把redis相关的文件删除
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`Github下载地址：https://github.com/MicrosoftArchive/redis/releases
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),p=e("h2",{id:"解压压缩包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解压压缩包","aria-hidden":"true"},"#"),s(" 解压压缩包")],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-zxvf"),s(` redis-4.0.6.tar.gz
//这里就在 /usr/local/ 下解压了，把它放到一个独立的包里 /usr/local/redis-4.0.6
yum `),e("span",{class:"token function"},"install"),s(` gcc
//如果遇到选择，输入y即可
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`将下载的压缩包解压到一个文件夹中
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),x=e("h2",{id:"进入-redis-解压目录下并编译安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#进入-redis-解压目录下并编译安装","aria-hidden":"true"},"#"),s(" 进入 redis 解压目录下并编译安装")],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"make"),s(),e("span",{class:"token assign-left variable"},"MALLOC"),e("span",{class:"token operator"},"="),s(`libc
//进入src目录并安装
`),e("span",{class:"token builtin class-name"},"cd"),s(" src "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token function"},"make"),s(),e("span",{class:"token function"},"install"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`打开cmd指令窗口，进入到解压的那个文件夹里
输入redis-server redis.windows.conf

部署Redis在windows下的服务
先关掉上一个打开的窗口，再打开一个新的cmd命令窗口，输入下面的命令：
redis-server --service-install redis.windows.conf

启动Redis服务，进入服务里，找到Redis服务进行启动
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function C(N,V){const t=b("CodeTabs");return c(),o("div",null,[m,u(" more "),h,d(t,{id:"7",data:[{title:"linux",value:"linux"},{title:"windows",value:"windows"}]},{tab0:a(({title:n,value:i,isActive:l})=>[_]),tab1:a(({title:n,value:i,isActive:l})=>[g]),_:1}),p,d(t,{id:"18",data:[{title:"linux",value:"linux"},{title:"windows",value:"windows"}]},{tab0:a(({title:n,value:i,isActive:l})=>[f]),tab1:a(({title:n,value:i,isActive:l})=>[w]),_:1}),x,d(t,{id:"29",data:[{title:"linux",value:"linux"},{title:"windows",value:"windows"}]},{tab0:a(({title:n,value:i,isActive:l})=>[k]),tab1:a(({title:n,value:i,isActive:l})=>[A]),_:1})])}const R=r(v,[["render",C],["__file","install.html.vue"]]);export{R as default};

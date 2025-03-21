import{_ as t,e as n,f as i,g as s,h as l,i as o,j as r,r as p,o as d}from"./app-CqOH9t6Z.js";const c={};function h(f,e){const a=p("RouteLink");return d(),n("div",null,[e[3]||(e[3]=i('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1><h2 id="api-接口升级说明" tabindex="-1"><a class="header-anchor" href="#api-接口升级说明"><span>API 接口升级说明</span></a></h2><p><strong>老用户免费部署私有化助力升级</strong></p><p>从 EasyYun 接口升级变化</p><ul><li>请求的域名从 <code>https://rest-api.easyyun.com/v1/router/rest</code> 调整为 <code>https://pdf-api.pdfai.cn/v1/pdf/</code>+每个功能缀</li><li>每个功能的接口是单独 URL，接口与接口之间没有任何关联</li><li>系统请求头 <code>application/x-www-form-urlencoded</code> 调整为 <code>application/json</code>，返回结果格式还是 JSON，具体可以看代码例子</li><li>返回结果 code 值类型为调整为<code>int</code></li><li>补充每个功能的开发语言的代码例子，降低门槛</li><li>历史的接口部分功能有兼容，比如 <code>https://pdf-api.pdfai.cn/v1/router/rest</code> ，此域名接口依然有效，待过渡期后，此路由会下线</li><li>没有测试环境，正式环境所见即所得</li></ul><h2 id="文件删除时间" tabindex="-1"><a class="header-anchor" href="#文件删除时间"><span>文件删除时间</span></a></h2><p>上传的文件默认 1 天自动删除，本工具仅做转换服务，不做存储服务，文件请自行下载保存。如果需要单独存储，可私有化部署，单独配置阿里云OSS和腾讯云COS。</p><h2 id="是否收费" tabindex="-1"><a class="header-anchor" href="#是否收费"><span>是否收费</span></a></h2>',8)),s("p",null,[e[1]||(e[1]=l("云端API免费，不提供任何承诺稳定性保障。建议使用")),o(a,{to:"/deployment.html"},{default:r(()=>e[0]||(e[0]=[l("私有化部署")])),_:1}),e[2]||(e[2]=l("。"))]),e[4]||(e[4]=i('<p>市面上已经有非常成熟的开源产品，比如：Stirling-PDF、PdfCpu、MuPDF，大家可以尝试。</p><h2 id="关于技术选型" tabindex="-1"><a class="header-anchor" href="#关于技术选型"><span>关于技术选型</span></a></h2><p>2022.3-2025.2 差不多 3 年的时间采用所谓时髦的技术：Docker、Kubernetes、Golang、Python、Vue、Electron 、MySQL、Redis、Nginx 等。</p><p>然而，时髦的技术并为解决问题，只会让技术问题变得更复杂。</p><p>SO，这次的重新设计，为了简化问题。</p><h3 id="只为做减法" tabindex="-1"><a class="header-anchor" href="#只为做减法"><span>只为做减法</span></a></h3><ul><li>开发流程上每个功能就只有 1 个接口</li><li>去掉异步的功能，现实中，大部分也用不上</li><li>去掉 MySQL，去掉 Redis，的确也用不上，加上数据库只会让项目更复杂</li><li>去掉 Docker，去掉 Kubernetes，完全没必要</li><li>去掉 Electron，虽然使用 tauri.app 也简单，为了体验，去掉了电脑客户端</li><li>服务器去掉依赖的一些命令行，比如 pdfcpu、mutools 等。</li><li>接口文档，为了简化，采用了 VuePress</li><li>去掉了Office类的接口，这个必须使用付费厂商的才有产品体验，比如金山文档、腾讯文档等</li></ul>',7))])}const m=t(c,[["render",h],["__file","faq.html.vue"]]),g=JSON.parse('{"path":"/faq.html","title":"FAQ","lang":"zh-CN","frontmatter":{"title":"FAQ","sidebarDepth":0},"headers":[{"level":2,"title":"API 接口升级说明","slug":"api-接口升级说明","link":"#api-接口升级说明","children":[]},{"level":2,"title":"文件删除时间","slug":"文件删除时间","link":"#文件删除时间","children":[]},{"level":2,"title":"是否收费","slug":"是否收费","link":"#是否收费","children":[]},{"level":2,"title":"关于技术选型","slug":"关于技术选型","link":"#关于技术选型","children":[{"level":3,"title":"只为做减法","slug":"只为做减法","link":"#只为做减法","children":[]}]}],"git":{},"filePathRelative":"faq.md"}');export{m as comp,g as data};

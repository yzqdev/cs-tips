import{_ as p,Y as o,Z as e,$ as a}from"./framework-ae46ee38.js";const r={},s=a('<h1 id="前端跨域请求api的几种常用解决方案" tabindex="-1"><a class="header-anchor" href="#前端跨域请求api的几种常用解决方案" aria-hidden="true">#</a> 前端跨域请求api的几种常用解决方案</h1><p>简单印象 2017-11-30 07:56:01</p><p>总结一下，前端跨域请求后端api的几种常用方法：</p><p><strong>1.iframe</strong></p><p>随着近年来前端技术的飞跃发展以及移动互联网时代的洗礼，iframe的使用渐渐的不被建议，虽然也是一种跨域请求的解决方案，但这里就不再讲述，请读者自行查阅网上资料。</p><p><strong>2.jsonp</strong></p><p>jsonp是比较常用的方法，我们假设a.com域名需要向b.com发起一个api请求（jsonp的一个缺点是，仅能接受GET方式），则使用JSONP完成该过程的实例可以这样：</p><p>a.com/jsonp.html</p><p>b.com/jsonp.php</p><p><strong>3. 通过请求同域下的api，间接获取它域的数据</strong></p><p>我们仍以域名a.com/demo.html需获取b.com下的数据为例，这时候只要在a.com下创建一个demo.php，由demo.php通过curl的方式向b.com发起数据请求，并包装请求结果返回给a.com/demo.html页面。这里主要是通过与a.com/demo.html同域下的a.com/demo.php做了一层数据请求代理，避免了前端跨域请求。</p><p><strong>4.使用web服务器的反向代理设置</strong></p><p>同样是使用代理的思维，但与2不同的是，我们这里使用web服务器的反向代理配置：</p><p>Nginx反向代理可以使用 proxy_pass</p><p>Apache2的反向代理的配置可以使用ProxyPass</p><p><strong>5.设置header头（CORS）</strong></p><p>在你要跨域请求的api里，设置header头Access-Control-Allow-Origin: *，以php为例，在api代码的入口方法处加入如下一行：</p>',17),t=[s];function n(c,m){return o(),e("div",null,t)}const h=p(r,[["render",n],["__file","frontend-cors.html.vue"]]);export{h as default};

import{_ as r,Y as i,Z as l,a1 as e,a2 as a,a0 as o,$ as n,G as c}from"./framework-ae46ee38.js";const p={},s=n('<h1 id="web前端中的居中-八种方法" tabindex="-1"><a class="header-anchor" href="#web前端中的居中-八种方法" aria-hidden="true">#</a> web前端中的居中（八种方法）</h1><p>一、水平居中（后续总结所有垂直居中方法，好像也是八种）</p><ol><li>若是行内元素, 给其父元素设置 text-align:center,即可实现行内元素水平居中.</li><li>若是块级元素, 该元素设置 margin:0 auto即可.</li><li>若子元素包含 float:left 属性, 为了让子元素水平居中, 则可让父元素宽度设置为fit-content,并且配合margin, 作如下设置:</li></ol><p><img src="https://p26.toutiaoimg.com/large/28960003e0099b89ef9b" alt="web前端中的居中（八种方法）"></p><p>fit-content是CSS3中给width属性新加的一个属性值,它配合margin可以轻松实现水平居中, 目前只支持Chrome 和 Firefox浏览器.</p><p>4.使用flex 2012年版本布局, 可以轻松的实现水平居中, 子元素设置如下:</p><p><img src="https://p26.toutiaoimg.com/large/2a3b0001e8cdaaf291b2" alt="web前端中的居中（八种方法）"></p><p>5.使用flex 2009年版本, 父元素display: box;box-pack: center;如下设置:</p><p><img src="https://p26.toutiaoimg.com/large/2a3d000057d2079a076f" alt="web前端中的居中（八种方法）"></p><p>6.使用CSS3中新增的transform属性, 子元素设置如下:</p><p><img src="https://p26.toutiaoimg.com/large/2a380003692bf750796e" alt="web前端中的居中（八种方法）"></p><p>7.使用绝对定位方式, 以及负值的margin-left, 子元素设置如下:</p><p><img src="https://p26.toutiaoimg.com/large/2a3600044b285773c1ab" alt="web前端中的居中（八种方法）"></p><p>8.使用绝对定位方式, 以及left:0;right:0;margin:0 auto; 子元素设置如下:</p><p><img src="https://p26.toutiaoimg.com/large/2a3d00005b14765abf32" alt="web前端中的居中（八种方法）"></p>',15),m={href:"https://www.toutiao.com/search/?keyword=Firefox",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.toutiao.com/search/?keyword=Chrome",target:"_blank",rel:"noopener noreferrer"};function f(g,d){const t=c("ExternalLinkIcon");return i(),l("div",null,[s,e("ul",null,[e("li",null,[e("a",m,[a("Firefox"),o(t)])]),e("li",null,[e("a",h,[a("Chrome"),o(t)])])])])}const _=r(p,[["render",f],["__file","how-to-center.html.vue"]]);export{_ as default};

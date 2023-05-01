import{_ as l,Y as i,Z as u,a3 as r,a0 as a,a4 as e,a1 as n,a2 as s,$ as p,G as o}from"./framework-ae46ee38.js";const d={},k=n("h1",{id:"偏门却又实用的-css-样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#偏门却又实用的-css-样式","aria-hidden":"true"},"#"),s(" 偏门却又实用的 CSS 样式")],-1),m=n("p",null,"很早之前我们推荐大家看《推荐大家使用的CSS书写规范、顺序》，里面提到 CSS 的一些常用命名、规范等等，而今天主要是说一些偏门一点的 CSS 样式、技巧。",-1),v=n("p",null,"什么是偏门，就是有些片段很少使用，时间久了就记不起来，但用的时候又要去找，所以这里为大家整理一些少用但又实用的 CSS 样式，",-1),g=n("p",null,[n("img",{src:"https://p26.toutiaoimg.com/large/47070002fa2c9784ef4c",alt:"偏门却又实用的 CSS 样式"})],-1),b=n("p",null,"部分由小编及网友提供，感谢你们~ 持续更新哦。",-1),h=n("p",null,"::-Webkit-Input-Placeholder",-1),x=n("p",null,[s("input 的 H5 "),n("code",null,"placeholder"),s(" 属性，很好用，但不能直接改这个文字颜色，所以目前的解决方法就是用"),n("code",null,"::input-placeholder"),s("属性来改。")],-1),y=n("p",null,"小Tips: 配合 opacity 属性使用效果更佳哦！",-1),_=n("p",null,[n("img",{src:"https://p26.toutiaoimg.com/large/470900026ba1fc15e6a3",alt:"偏门却又实用的 CSS 样式"})],-1),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("place"),n("span",{class:"token punctuation"},"'")]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("请输入"),n("span",{class:"token punctuation"},"'")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"#place"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},"::-webkit-input-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* Chrome/Opera/Safari */"),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" pink"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token selector"},"::-moz-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* Firefox 19+ */"),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" pink"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token selector"},":-ms-input-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* IE 10+ */"),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" pink"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token selector"},":-moz-placeholder"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* Firefox 18- */"),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" pink"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=p(`<p>@Impor 嵌套样式表文件</p><p>使用它可以在样式表再次内嵌套样式表文件，比如一些组件 CSS可以使用，但不太推荐使用这个，因为加载时有可能会被漏掉。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;reset.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;global.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span> <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;font.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Outline 当点击Input元素时显示的当前状态线（外发光）</p><p><img src="https://p26.toutiaoimg.com/large/47040004c20b145fc186" alt="偏门却又实用的 CSS 样式"></p><p>这个状态线是用来提示用户当前状态指示作用，但因为效果很美观，建议去掉，或自己改个样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span><span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> //移动浏览器默认的状态线// <span class="token property">outline</span><span class="token punctuation">:</span> 5px dotted red<span class="token punctuation">;</span> 也可以设置样式<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Contenteditable 设置Element是否可编辑</p>`,8),w=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"contenteditable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("可编辑"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),q=p(`<p>Webkit-Playsinline</p><p>手机video 都可以在页面中播放，而不是全屏播放了。 tml <code>&lt;video id=&quot;myvideo&quot; src=&quot;test.mp4&quot; webkit-playsinline=&quot;true&quot;&gt;&lt;/video&gt;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
Position: Absolute， 让Margin有效的

设置left:0, right:0 就可以。原因是2边都是0不存在边距，element就可以得出距离，并居中。

\`\`\`css
div {position: absolute;left: 0;right: 0;margin: 0 auto;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Clearfix 清楚浮动，解决父类高度崩塌。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span><span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span><span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span><span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>User-Select 禁止用户选中文本</p>`,6),V=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("禁止用户选中文本"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"user-select"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* Standard syntax */"),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),F=p(`<p>清除手机Tap事件后Element 时候出现的一个高亮</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span><span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::-Webkit-Scrollbar-Thumb</p><p>可以修改谷歌的滚动条样式，safari好像也可以</p><p>-Webkit-Appearance:none</p><ol><li>To apply platform specific styling to an element that doesn’t have it by default</li><li>To remove platform specific styling to an element that does have it by default</li></ol><p>移除浏览器默认的样式，比如chrome的input默认样式</p>`,7),T=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("hhh"),n("span",{class:"token punctuation"},"'")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token punctuation"},">")]),s("哈利"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("textarea")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("textarea")]),n("span",{class:"token punctuation"},">")]),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"input, button, textarea, select"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"-webkit-appearance"),n("span",{class:"token punctuation"},":"),s("none"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),L=n("p",null,"CSS开启硬件加速",-1),K={href:"http://www.cnblogs.com/rubylouvre/p/3471490.html",target:"_blank",rel:"noopener noreferrer"},U=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-webkit-transform: translateZ(0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用CSS Transforms 或者 Animations时可能会有页面闪烁的Bug</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-webkit-backface-visibility: hidden;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-Webkit-Touch-Callout 禁止长按链接与图片弹出菜单</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-webkit-touch-callout: none;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Transform-Style: Preserve-3d 让元素支持3d</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div {-webkit-transform: rotateY(60deg); /* Chrome, Safari, Opera */-webkit-transform-style: preserve-3d; /* Chrome, Safari, Opera */transform: rotateY(60deg);transform-style: preserve-3d;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Perspective 透视</p><p>这个属性的存在决定你看到的元素是2d还是3d。一般设置在包裹元素的父类上。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.div-box</span> <span class="token punctuation">{</span><span class="token property">perspective</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Css实现不换行、自动换行、强制换行</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>//<span class="token property">不换行white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>//<span class="token property">自动换行word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span><span class="token property">word-break</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>//<span class="token property">强制换行word-break</span><span class="token punctuation">:</span>break-all<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Box-Sizing 让元素的宽度、高度包含Border和Padding</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span><span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Calc() Function, 计算属性值</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的例子就是让宽度为100%减去100px的值，项目中很适用，要IE9以上兼容。</p><p>Css3 Linear-Gradient 线性渐变</p><p>默认开始在top, 也可以自定义方向。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>direction<span class="token punctuation">,</span> color-stop1<span class="token punctuation">,</span> color-stop2<span class="token punctuation">,</span> ...<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常用的选择器 :Nth-Child() Selector</p><p>以下代码是选择父类下第一个子节点，p元素，建议学习这个样式属性的使用，很实用的。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p:nth-child(1)</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就介绍到这里，以后会不断更新，如果有好的 CSS 代码，欢迎在留言处提交给我们，一起收录进来！</p>`,24);function z(B,D){const t=o("CodeDemo"),c=o("ExternalLinkIcon");return i(),u("div",null,[k,m,v,r("more"),g,b,h,x,y,_,a(t,{id:"code-demo-28",type:"normal",code:"eJyrVsooyc1RslKyycwrKC1RyEyxVS/ISUxOVVcAUxn5OSmpRbbqL9Zvf7Fv8tPWpeoK+nYxeUo6SsnFxUBtymBV1TF5CkBgZaVbnpqUnVmiCzZMF8kEhWoFfS0F54yi/NxUff+C1KJE/eDEtMSiTAUt/eT8nPwiK4WCzLxs61qgGbn5VZha3TKLUtPyKxQMLbUxtOjmFuOy0dNVwdAAmw68dljoouuIyQMipVoAEVRn2Q=="},{default:e(()=>[f,S]),_:1}),C,a(t,{id:"code-demo-52",type:"normal",code:"eJyrVsooyc1RslKyKVBIzs8rSQWilMySxKScVNsYpZKi0tQYJbun/euf75n2Yt9EG/0Cu5g8pVoANLsWHg=="},{default:e(()=>[w]),_:1}),q,a(t,{id:"code-demo-69",type:"normal",code:"eJyrVsooyc1RslKySckss3u+rPHZ2kXPp6x41rH9ZUPnkx1rn01rfzZnjY0+SDYmT0lHKbm4GKgayFWoLi1OLdItTs1JTS6xUsjLz0u1VtDXUgguScxLSSxKUSiuzCtJrFDQ0q8FaqwFAPUBK/E="},{default:e(()=>[V,E]),_:1}),F,a(t,{id:"code-demo-101",type:"normal",code:"eJw9jEEOgjAQRa8yaWLYlIBbqJyETSFj2linDZ2qkbBn7yk8GPcQJbL7P/+/NwrDVycqoSyFxHDTLuEpM8ZkUDQtqS4xe4Jmec3L/FbF1r8L44P1gLpRxR5baklI0ce4Kn9GCRsh4X+SENFhzzDC2RPn0T6xgmNZHur8jt3Fcq5DQD1o6rEiT1hPq3X6AO6WPcc="},{default:e(()=>[T,P]),_:1}),L,n("p",null,[n("a",K,[s("http://www.cnblogs.com/rubylouvre/p/3471490.html"),a(c)])]),U])}const N=l(d,[["render",z],["__file","css-styles.html.vue"]]);export{N as default};
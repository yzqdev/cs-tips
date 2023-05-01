import{_ as p,Y as i,Z as u,a1 as n,a2 as s,a0 as a,a3 as r,a4 as e,$ as l,G as o}from"./framework-ae46ee38.js";const k={},d=n("h1",{id:"css-内容属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css-内容属性","aria-hidden":"true"},"#"),s(" css 内容属性")],-1),g=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"CSS 的内容属性，多种可能的取值，让样式设置更加丰富")],-1),m=n("p",null,"CSS 技术提供了一个名为 content 的属性，该属性被翻译为“内容”。该属性的使用必须配合伪元素选择器::before 或者::after 结合起来使用。该属性在容器中设置了一个内联元素，可以使用其他的 CSS 属性来对这个新增的内联元素进行设置。",-1),v={href:"https://www.toutiao.com/i6489732621789037070/",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>技术等级：中级 | 适合有一定的 CSS 基础的人士阅读。</p><p><img src="https://p26.toutiaoimg.com/large/46eb0004767457e774a8" alt="CSS的内容属性，多种可能的取值，让样式设置更加丰富"></p><p><strong>希望收藏了这篇文章的你同时也可以关注一下“小海前端”的头条号，因为这些文章都是连载的，并且是经过系统的归纳和总结的。塌下心来认真阅读，你一定会学到对你有用的知识。</strong></p><p>CSS3 所提供的增强用户界面的属性以及与此相关的属性比较多，小海前端（头条号）将分几次对其进行讲解。所包含的所有增强用户界面的属性包括：</p><ul><li>box-shadow</li><li>box-sizing</li><li>overflow-x</li><li>overflow-y</li><li>resize</li><li>outline</li><li>outline-width</li><li>outline-style</li><li>outline-color</li><li>outline-offset</li><li>pointer-events</li><li>user-select</li><li>appearance</li><li><strong>content</strong></li><li><strong>counter-increment</strong></li><li><strong>counter-reset</strong></li><li><strong>quotes</strong></li></ul><p>本篇文章为大家讲解与 content 属性相关的属性的用法。</p><p><strong>一、content 属性的设置：</strong></p><p><img src="https://p26.toutiaoimg.com/large/46f00002995c209ebe50" alt="CSS的内容属性，多种可能的取值，让样式设置更加丰富"></p><p>CSS 技术使用 content 属性来设置有关内容的效果</p><p>content 属性可以作用于任意的容器元素中，结合伪元素选择器::before 和::after 共同使用。该属性有多种取值，可以使用的取值包括：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* normal，默认值，表示没有任何内容在容器中被创建。
* &lt;string&gt;，字符串，表示创建内容为指定字符串的内联元素在容器内部。
* &lt;url()&gt;，url 地址，表示创建内容为 url 地址指定的对象的内联元素在容器内部。
* &lt;attr()&gt;，HTML 属性名，表示创建内容为指定的 HTML 属性的取值的内联元素在容器内部。
* &lt;open-quote&gt;，表示创建内容为 quotes 属性的前标记的内联元素在容器内部。
* &lt;close-quote&gt;，表示创建内容为 quotes 属性的后标记的内联元素在容器内部。
* &lt;counter()&gt;，计数器，表示创建计数器内容的内联元素在容器内部。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来让我们依次来学习 content 属性的各个取值的用法。为了更好的演示 content 属性的各种取值，首先我们在页面中创建一个无序列表：</p>`,12),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("白羊座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("金牛座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("双子座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("巨蟹座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("狮子座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("处女座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"ul li"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"ul li:before"),s(),n("span",{class:"token punctuation"},"{"),s(`
 `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(' "十二星座：'),n("span",{class:"token punctuation"},";"),s(`
 `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #ff5857"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=l(`<p><strong>二、content 属性取值为<code>&lt;string&gt;</code>：</strong></p><p>**例 1：**在页面中创建一个无序列表，利用 content 属性为无序列表的每一列表项前面添加指定的字符串内容。</p><p>这样，就可以在每一个列表项（即<code>&lt;li&gt;</code>标记对）的内部的最前面添加指定的字符串内容。最终的显示效果如下图所示：左侧为原列表项，右侧为使用了 content 属性之后的列表项。</p><p><img src="https://p26.toutiaoimg.com/large/46f000029917397d012d" alt="CSS的内容属性，多种可能的取值，让样式设置更加丰富"></p><p>指定 content 属性取值为字符串</p><p>请小伙伴们打开浏览器的“开发人员工具”，查看“十二星座：”这几个字在 HTML 文档结构中的位置。具体的“开发人员工具”的界面如下图所示。</p><p><img src="https://p26.toutiaoimg.com/large/46ef000415d8bb68e5ef" alt="CSS的内容属性，多种可能的取值，让样式设置更加丰富"></p><p>可以看出 content 属性添加的内容是容器内部的内联元素</p><p>从上图中可以看出，在<code>&lt;li&gt;</code>的内部结构中，出现了一个“::before”结构，这个结构就是利用 content 属性添加到每一个无序列表项内部的字符串。</p><p>若需要在每一个列表项内部的后面添加指定的字符串内容，可以使用::after 伪元素选择器。</p><p><strong>三、content 属性取值为<code>&lt;url()&gt;</code>：</strong></p><p>**例 2：**利用 content 属性为无序列表的每一列表项后面添加一个指定的图片。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul li::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/xz.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终的现实效果如下图所示：</p><p><img src="https://p26.toutiaoimg.com/large/46f000029918f81b050b" alt="CSS的内容属性，多种可能的取值，让样式设置更加丰富"></p><p>指定 content 属性取值为 url()的文件路径</p><p><strong>四、content 属性取值为<code>&lt;attr()&gt;</code>：</strong></p><p>**例 3：**为每一个列表项<code>&lt;li&gt;</code>标记对设置一个名为 data-li 的属性，并设置不同的内容。可以利用 content 属性的 attr()取值将这个名为 data-li 的属性取值作为内容添加到每一个列表项的前面。</p><p>HTML 中无序列表的代码如下所示：</p>`,19),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"data-li"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("”BaiYang”")]),n("span",{class:"token punctuation"},">")]),s("白羊座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"data-li"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("”JinNiu”")]),n("span",{class:"token punctuation"},">")]),s("金牛座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"data-li"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("”ShuangZi”")]),n("span",{class:"token punctuation"},">")]),s("双子座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"data-li"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("”JuXie”")]),n("span",{class:"token punctuation"},">")]),s("巨蟹座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"data-li"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("”ShiZi”")]),n("span",{class:"token punctuation"},">")]),s("狮子座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"data-li"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("”ChuNv”")]),n("span",{class:"token punctuation"},">")]),s("处女座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("p",null,"CSS 代码如下所示：",-1),C=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"ul li::before"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"attr"),n("span",{class:"token punctuation"},"("),s("data-li"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #ff5857"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=l('<p>最终的现实效果如下图所示：</p><p><img src="https://p26.toutiaoimg.com/large/46ef000415d983d24130" alt="CSS的内容属性，多种可能的取值，让样式设置更加丰富"></p><p>指定 content 属性取值为 attr()的 HTML 属性值</p><p><strong>五:</strong>、content 属性取值为<code>&lt;open-quote&gt;</code>或<code>&lt;close-quote&gt;</code>：**</p><p>该取值会涉及到一个名为 quotes 的属性，该属性可以取两个利用空格隔开的字符串，空格之前的字符串被称为“前标记”，空格之后的字符串被称为“后标记”。</p><p><strong>例 4:</strong> 为每一个列表项的前面添加一个左大括号{，后面添加一个右大括号}。</p>',6),y=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("白羊座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("金牛座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("双子座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("巨蟹座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("狮子座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("处女座"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[s(),n("span",{class:"token selector"},"ul li"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"quotes"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token selector"},'"'),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},"}"),s('"'),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token selector"},"ul li::before"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s("open-quote"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token selector"},"ul li::after"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s("close-quote"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,"最终的现实效果如下图所示：",-1),V=n("p",null,[n("img",{src:"https://p26.toutiaoimg.com/large/46ef000415daa14d0cc4",alt:"CSS的内容属性，多种可能的取值，让样式设置更加丰富"})],-1),z=n("p",null,"指定 content 属性取值为 quotes 属性的前标记或右标记",-1),N=n("p",null,[n("strong",null,"小海声明")],-1),U=n("p",null,"在头条上发表的这些文章都是从前端开发的基础开始一步一步讲起的。我非常希望能有更多的前端开发初学者通过我写的文章，逐步学到一定的知识，甚至慢慢有了入门的感觉。这些文章都是我这几年教学过程中的经验，每写一篇时我都尽量把握好措辞，用简单易懂的语言描述，同时精心设计版面，让版面更加丰富，激发阅读兴趣。所以，每一篇文章可能篇幅不长，但是都要耗费小海老师很久的时间。",-1);function A(w,M){const c=o("ExternalLinkIcon"),t=o("CodeDemo");return i(),u("div",null,[d,g,m,n("p",null,[s("承接文章："),n("a",v,[s("**CSS3****伪装元素，尽管没有得到完美的兼容，仍有很强的用途**"),a(c)])]),r("more"),b,a(t,{id:"code-demo-133",type:"normal",title:"content%20demo",code:"eJyrVsooyc1RslJSsCnNsYvJU7DJybR7PnPv831dT3ctt9EH8qCCL9snPu+cjSb4tL/n6doJ6ILbV7yYvxNN8Hn3Oiwql7Q8XboZWVAf7AolHaXk4mKgq0pzFHIyq4ESCsn5OflFVkWpKdYxebUxeWAJq6TUtPyiVAWQguT8vJLUvBIrhRilp72NT3b1PJsxH2jw+z2zgBqguhWU09JMLUzNIUYo1QIAvCZthQ=="},{default:e(()=>[h,_]),_:1}),S,a(t,{id:"code-demo-192",type:"normal",code:"eJyrVsooyc1RslJSsCnNsYvJU4ACm5xMhZTEkkTdnEzbRw1znRIzIxPz0oEsu+cz9z7f1/V013Ib/ZxM3Dq8MvP8MktBGl62T3zeOZughuCMUqANUZkgLU/7e56unUDYjtKIzFSw+u0rXszfSYQVmRDzn3evI8Z854xSvzKw+Utani7djKreRh8cYEo6SsnFxcAALM1RyMm0skpKTcsvSlWoBilKzs8rSc0rsVJILCkp0oAarGkNkcrJL7JSUE5LM7UwNQcK1QKNqgUAC7ObVA=="},{default:e(()=>[f,q,C]),_:1}),x,a(t,{id:"code-demo-217",type:"normal",code:"eJyrVsooyc1RslJSsCnNsYvJU7DJybR7PnPv831dT3ctt9EH8qCCL9snPu+cjSb4tL/n6doJ6ILbV7yYvxNN8Hn3Oiwql7Q8XboZWVAf7AolHaXk4mKQq0pzFHIyqwtL80tSi60UYpSqY5RilGpjlKxrY/KA6sHSVlZJqWn5RanVyfl5Jal5JVb5Bal5umA9qMoS00pSi+CqknPyi1MRypRqAWQPb6U="},{default:e(()=>[y,J]),_:1}),L,V,z,N,U])}const I=p(k,[["render",A],["__file","css-content.html.vue"]]);export{I as default};

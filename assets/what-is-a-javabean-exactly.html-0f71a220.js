import{_ as o,Y as l,Z as i,a1 as e,a2 as a,a0 as n,$ as r,G as s}from"./framework-ae46ee38.js";const c={},d=r('<h1 id="javabean-到底是什么" tabindex="-1"><a class="header-anchor" href="#javabean-到底是什么" aria-hidden="true">#</a> JavaBean 到底是什么？</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>按照我的理解： “Bean” 是一个带有属性和getters/setter方法的Java类。它是不是和C的结构体是相似的呢，对吗？ 一个“Bean&quot;类与普通的类相比是不是语法的不同呢？还是有特殊的定义和接口？ 为什么会出现这个术语呢，这让我很困惑？ 如果你很好心告诉我一些关于<code>Serializable</code>接口的信息，对于你的答案那到底是什么意思，我会非常感谢你的。</p><h3 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h3>',4),h={href:"http://www.oracle.com/technetwork/java/javase/documentation/spec-136004.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://en.wikipedia.org/wiki/Mutator_method",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"一个公有的无参数的构造器",-1),p={href:"http://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"就这些，它只是一个规范。但是很多的类库都是依赖于这些预定。",-1),b=e("code",null,"Serializable",-1),f={href:"http://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>实现java.io.Serializable接口的类能串行化。
不实现此接口的类不会有任何状态的序列化和反序列化。
可序列化类的所有子类型本身都是可序列化。
序列化接口没有方法或字段，仅用于标识的可序列化的语义。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换句话说，序列化的对象可以被写入流，文件，对象数据库等。</p><p>另外，一个JavaBean类和一个普通的类没有语法区别，如果遵循上面的标准的话，一个类可以认为成JavaBean类。</p><p>之所以需要JavaBean，是因为这样预定义了一种类的格式，一些库能依据这个约定的格式，来做一些自动化处理。举个例子，如果一个类库需要通过流来处理你传递的任何对象，它知道它可以正常处理，因为这个对象是可序列化的。（假设这个类库要求你的对象是JavaBeans）</p>`,4),x=e("strong",null,"stackoverflow链接",-1),g={href:"http://stackoverflow.com/questions/3295496/what-is-a-javabean-exactly",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"关于序列化相关博客",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于序列化相关博客","aria-hidden":"true"},"#"),a(" 关于序列化相关博客")],-1),w={href:"http://xiebh.iteye.com/blog/121311",target:"_blank",rel:"noopener noreferrer"},j={href:"http://www.blogjava.net/jiangshachina/archive/2012/02/13/369898.html",target:"_blank",rel:"noopener noreferrer"};function B(J,S){const t=s("ExternalLinkIcon");return l(),i("div",null,[d,e("p",null,[a("JavaBean 只是一个"),e("a",h,[a("标准"),n(t)])]),e("ol",null,[e("li",null,[a("所有的属性是私有的（通过"),e("a",_,[a("getters/setters"),n(t)]),a("处理属性）")]),v,e("li",null,[a("实现了"),e("a",p,[a("序列化（Serializable）"),n(t)])])]),u,e("p",null,[a("对于"),b,a(",看一下"),e("a",f,[a("API文档的解释"),n(t)])]),m,e("p",null,[x,a("： "),e("a",g,[a("http://stackoverflow.com/questions/3295496/what-is-a-javabean-exactly"),n(t)])]),k,e("ol",null,[e("li",null,[e("a",w,[a("我对Java Serializable（序列化）的理解和总结"),n(t)])]),e("li",null,[e("a",j,[a("理解Java对象序列化"),n(t)])])])])}const y=o(c,[["render",B],["__file","what-is-a-javabean-exactly.html.vue"]]);export{y as default};

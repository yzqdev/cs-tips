import{_ as t,Y as e,Z as p,a1 as n,a2 as s,a0 as o,$ as c,G as l}from"./framework-ae46ee38.js";const i={},u=c(`<h1 id="从一个多层嵌套循环中直接跳出" tabindex="-1"><a class="header-anchor" href="#从一个多层嵌套循环中直接跳出" aria-hidden="true">#</a> 从一个多层嵌套循环中直接跳出</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>Java中如何从一个多层嵌套循环中退出，例如下面，有两个循环，break只能退出一个for循环，不能直接跳过第二个for循环</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Type</span> type <span class="token operator">:</span> types<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Type</span> t <span class="token operator">:</span> types2<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
         <span class="token keyword">if</span> <span class="token punctuation">(</span>some condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
             <span class="token comment">// Do something and break...  </span>
             <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 这样只退出了最里的for循环  </span>
         <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h3><p>可以用break+label的语法，例子如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>  
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    outerloop<span class="token operator">:</span>  
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> j <span class="token operator">&gt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Breaking&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
          <span class="token keyword">break</span> outerloop<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先在for循环前加标签，如例子中的outerloop，然后在for循环内break label(如本例的outerloop),就会跳出该label指定的for循环。</p>`,8),r={href:"http://stackoverflow.com/questions/886955/breaking-out-of-nested-loops-in-java",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[s("stackoverflow链接： "),n("a",r,[s("http://stackoverflow.com/questions/886955/breaking-out-of-nested-loops-in-java"),o(a)])])])}const b=t(i,[["render",k],["__file","breaking-out-of-nested-loops-in-java.html.vue"]]);export{b as default};

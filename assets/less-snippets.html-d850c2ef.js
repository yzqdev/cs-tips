import{_ as n,Y as s,Z as a,$ as p}from"./framework-ae46ee38.js";const t={},e=p(`<h1 id="lessjs配置" tabindex="-1"><a class="header-anchor" href="#lessjs配置" aria-hidden="true">#</a> lessjs配置</h1><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@charset</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 全局样式开始</span>
<span class="token selector">.cur-pointer</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.loopStyle(<span class="token variable">@counter</span>) when (<span class="token variable">@counter</span> &gt; 0)</span> <span class="token punctuation">{</span>
  <span class="token selector">.p-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.p-t-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.p-r-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.p-b-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.p-l-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.m-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.m-t-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.m-r-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.m-b-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.m-l-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.fz-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.width-@{counter}</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px <span class="token operator">*</span> <span class="token variable">@counter</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  .<span class="token function">loopStyle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">@counter</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归调用自身</span>
<span class="token punctuation">}</span>

.<span class="token function">loopStyle</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">@selectors<span class="token punctuation">:</span></span> <span class="token function">range</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">each</span><span class="token punctuation">(</span><span class="token atrule">@selectors, .<span class="token punctuation">(</span>@v <span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token function">each</span><span class="token punctuation">(</span><span class="token atrule">@selectors</span> <span class="token punctuation">{</span>
    <span class="token selector">.m-@{v}-@{value}</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 1px<span class="token operator">*</span><span class="token variable">@v</span> 1px<span class="token operator">*</span><span class="token variable">@value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p-@{v}-@{value}</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 1px<span class="token operator">*</span><span class="token variable">@v</span> 1px<span class="token operator">*</span><span class="token variable">@value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token selector">.bg-primary</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>19<span class="token punctuation">,</span> 46<span class="token punctuation">,</span> 160<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.df</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token selector">&amp;-center</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token selector">.df-col</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token selector">&amp;-center</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.dg-center</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//------------全局样式定义结束</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","less-snippets.html.vue"]]);export{r as default};

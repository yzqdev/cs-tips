import{_ as n,Y as s,Z as a,$ as t}from"./framework-ae46ee38.js";const p={},e=t(`<h1 id="express配置跨域" tabindex="-1"><a class="header-anchor" href="#express配置跨域" aria-hidden="true">#</a> express配置跨域</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">allowCrossDomain</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> allowedOrigins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;http://localhost:3401&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://localhost:3402&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1:9000&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://localhost:9000&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> origin <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>allowedOrigins<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>allowCrossDomain<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//设置允许跨域的域名，*代表允许任意域名跨域</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://localhost:9080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//允许的header类型</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//跨域允许的请求方式</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;DELETE,PUT,POST,GET,OPTIONS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//让options尝试请求快速结束</span>
    <span class="token keyword">else</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="根据域名获取后端接口-注意这个vite不适用" tabindex="-1"><a class="header-anchor" href="#根据域名获取后端接口-注意这个vite不适用" aria-hidden="true">#</a> 根据域名获取后端接口(注意这个vite不适用)</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * get api url on the basis of domain url
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getApiUrl</span> <span class="token operator">=</span> <span class="token parameter">str</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> devArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;devapi.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> apiArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;api.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> localUrl <span class="token operator">=</span> <span class="token string">&quot;192.168.&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> isDev <span class="token operator">=</span>
    devArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>domain<span class="token punctuation">)</span> <span class="token operator">||</span> document<span class="token punctuation">.</span>domain<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>localUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> isProd <span class="token operator">=</span> apiArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>domain<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 需要后端接   线上环境的域名组</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">&quot;socket&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;wss://devapi.com/ws&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isProd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;wss://api.com/ws&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isDev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;https://devapi.com&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isProd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;https://api.com&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">&quot;https://api.com&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="css美化滚动条" tabindex="-1"><a class="header-anchor" href="#css美化滚动条" aria-hidden="true">#</a> css美化滚动条</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>         <span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token comment">/*滚动条整体样式*/</span>
            <span class="token property">width</span> <span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>  <span class="token comment">/*高宽分别对应横竖滚动条的尺寸*/</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         <span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token comment">/*滚动条里面小方块*/</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span>   <span class="token punctuation">:</span> inset 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background</span>   <span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>144<span class="token punctuation">,</span>147<span class="token punctuation">,</span>153<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token comment">/*滚动条里面轨道*/</span>
            <span class="token property">box-shadow</span>   <span class="token punctuation">:</span> inset 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background</span>   <span class="token punctuation">:</span> #ededed<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","expres-snippets.html.vue"]]);export{r as default};

import{_ as t,Y as e,Z as p,a1 as n,a2 as s,a0 as o,$ as c,G as l}from"./framework-ae46ee38.js";const i={},u=c(`<h1 id="如何产生一个随机的字母数字串作为-session-的唯一标识符" tabindex="-1"><a class="header-anchor" href="#如何产生一个随机的字母数字串作为-session-的唯一标识符" aria-hidden="true">#</a> 如何产生一个随机的字母数字串作为 session 的唯一标识符?</h1><p>如果允许产生的随机字符串是可猜测的(随机字符串比较都短,或者使用有缺陷的随机数生成器),进而导致攻击者可能会劫持到会话的,可以使用一个相对简单随机数生成代码,如下所示:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RandomString</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> symbols<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> tmp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span> ch <span class="token operator">&lt;=</span> <span class="token char">&#39;9&#39;</span><span class="token punctuation">;</span> <span class="token operator">++</span>ch<span class="token punctuation">)</span>
            tmp<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> ch <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">;</span> <span class="token operator">++</span>ch<span class="token punctuation">)</span>
            tmp<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
        symbols <span class="token operator">=</span> tmp<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">RandomString</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;length &lt; 1: &quot;</span> <span class="token operator">+</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">nextString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;</span> buf<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>idx<span class="token punctuation">)</span>
            buf<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> symbols<span class="token punctuation">[</span>random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>symbols<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了安全,可以考虑使用下面这段简洁且安全的代码,不过用其作为 session 的标识符,倒显得有点大材小用了（比较耗时）:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.security.SecureRandom;

public final class SessionIdentifierGenerator {
  private SecureRandom random = new SecureRandom();

  public String nextSessionId() {
    return new BigInteger(130, random).toString(32);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其工作原理就是，使用一个 130 位的安全的随机数生成器生成一个随机数，接着转化为 32 进制。我们知道，128 位安全随机数的生成已经是足够安全的，不过以 32 进制编码的每一个数字可编码 5 位，所以需要取大于 128 且是 5 的倍数，所以就选择了 130 位。相对于 随机 UUID 来说(在标准输出中，每个字符使用 3.4 bit，共 122 bit），每个字符使用 5 个随机的 bit 来编码的方式，显得更为简洁和高效。</p><p>译者注：上面两段代码，生成26位随机字符串，第一段代码每次耗时不到1ms，第二段耗时约100ms。也就是说第一段代码更快，但第二段代码更安全，但更耗时。</p>`,7),r={href:"http://stackoverflow.com/questions/41107/how-to-generate-a-random-alpha-numeric-string",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[s("stackoverflow原链接： "),n("a",r,[s("http://stackoverflow.com/questions/41107/how-to-generate-a-random-alpha-numeric-string"),o(a)])])])}const b=t(i,[["render",k],["__file","how-to-generate-a-random-alpha-numeric-string.html.vue"]]);export{b as default};
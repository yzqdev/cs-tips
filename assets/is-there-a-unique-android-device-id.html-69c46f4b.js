import{_ as t,Y as p,Z as e,a1 as n,a2 as s,a0 as o,$ as c,G as l}from"./framework-ae46ee38.js";const i={},u=c(`<h1 id="如何获取android设备唯一id" tabindex="-1"><a class="header-anchor" href="#如何获取android设备唯一id" aria-hidden="true">#</a> 如何获取Android设备唯一ID？</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>每一个android设备都有唯一ID吗？如果有？怎么用java最简单取得呢？</p><h3 id="回答1-最佳" tabindex="-1"><a class="header-anchor" href="#回答1-最佳" aria-hidden="true">#</a> 回答1（最佳）</h3><p>如何取得android唯一码？</p><p>好处：</p><ul><li>1.不需要特定权限.</li><li>2.在99.5% Android装置（包括root过的）上，即API =&gt; 9，保证唯一性.</li><li>3.重装app之后仍能取得相同唯一值.</li></ul><p>伪代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if API =&gt; 9/10: (99.5% of devices)

return unique ID containing serial id (rooted devices may be different)

else

return unique ID of build information (may overlap data - API &lt; 9)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * Return pseudo unique ID
 * <span class="token keyword">@return</span> ID
 */</span><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getUniquePsuedoID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If all else fails, if the user does have lower than API 9 (lower</span>
    <span class="token comment">// than Gingerbread), has reset their device or &#39;Secure.ANDROID_ID&#39;</span>
    <span class="token comment">// returns &#39;null&#39;, then simply the ID returned will be solely based</span>
    <span class="token comment">// off their Android device information. This is where the collisions</span>
    <span class="token comment">// can happen.</span>
    <span class="token comment">// Thanks http://www.pocketmagic.net/?p=1662!</span>
    <span class="token comment">// Try not to use DISPLAY, HOST or ID - these items could change.</span>
    <span class="token comment">// If there are collisions, there will be overlapping data</span>
    <span class="token class-name">String</span> m_szDevIDShort <span class="token operator">=</span> <span class="token string">&quot;35&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">BOARD</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">BRAND</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">CPU_ABI</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">DEVICE</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">MANUFACTURER</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">MODEL</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">PRODUCT</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Thanks to @Roman SL!</span>
    <span class="token comment">// http://stackoverflow.com/a/4789483/950427</span>
    <span class="token comment">// Only devices with API &gt;= 9 have android.os.Build.SERIAL</span>
    <span class="token comment">// http://developer.android.com/reference/android/os/Build.html#SERIAL</span>
    <span class="token comment">// If a user upgrades software or roots their device, there will be a duplicate entry</span>
    <span class="token class-name">String</span> serial <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        serial <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span>Build</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">&quot;SERIAL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Go ahead and return the serial for api =&gt; 9</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UUID</span><span class="token punctuation">(</span>m_szDevIDShort<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> serial<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// String needs to be initialized</span>
        serial <span class="token operator">=</span> <span class="token string">&quot;serial&quot;</span><span class="token punctuation">;</span> <span class="token comment">// some value</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Thanks @Joe!</span>
    <span class="token comment">// http://stackoverflow.com/a/2853253/950427</span>
    <span class="token comment">// Finally, combine the values we have found by using the UUID class to create a unique identifier</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UUID</span><span class="token punctuation">(</span>m_szDevIDShort<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> serial<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回答2" tabindex="-1"><a class="header-anchor" href="#回答2" aria-hidden="true">#</a> 回答2</h3><p>好处：</p><ul><li>1.不需要特定权限.</li><li>2.在100% Android装置（包括root过的）上，保证唯一性.</li></ul><p>坏处</p><ul><li>1.重装app之后不能取得相同唯一值.</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> uniqueID <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">PREF_UNIQUE_ID</span> <span class="token operator">=</span> <span class="token string">&quot;PREF_UNIQUE_ID&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">id</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueID <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SharedPreferences</span> sharedPrefs <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getSharedPreferences</span><span class="token punctuation">(</span>
                <span class="token constant">PREF_UNIQUE_ID</span><span class="token punctuation">,</span> <span class="token class-name">Context</span><span class="token punctuation">.</span><span class="token constant">MODE_PRIVATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        uniqueID <span class="token operator">=</span> sharedPrefs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token constant">PREF_UNIQUE_ID</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueID <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            uniqueID <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Editor</span> editor <span class="token operator">=</span> sharedPrefs<span class="token punctuation">.</span><span class="token function">edit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            editor<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token constant">PREF_UNIQUE_ID</span><span class="token punctuation">,</span> uniqueID<span class="token punctuation">)</span><span class="token punctuation">;</span>
            editor<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> uniqueID<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回答3-需要有电话卡" tabindex="-1"><a class="header-anchor" href="#回答3-需要有电话卡" aria-hidden="true">#</a> 回答3（需要有电话卡）</h3><p>好处： 1.重装app之后仍能取得相同唯一值.</p><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">final</span> <span class="token class-name">TelephonyManager</span> tm <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TelephonyManager</span><span class="token punctuation">)</span> <span class="token function">getBaseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span><span class="token constant">TELEPHONY_SERVICE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> tmDevice<span class="token punctuation">,</span> tmSerial<span class="token punctuation">,</span> androidId<span class="token punctuation">;</span>
    tmDevice <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> tm<span class="token punctuation">.</span><span class="token function">getDeviceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tmSerial <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> tm<span class="token punctuation">.</span><span class="token function">getSimSerialNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    androidId <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span>provider<span class="token punctuation">.</span></span>Settings<span class="token punctuation">.</span>Secure</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">android<span class="token punctuation">.</span>provider<span class="token punctuation">.</span></span>Settings<span class="token punctuation">.</span>Secure</span><span class="token punctuation">.</span><span class="token constant">ANDROID_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UUID</span> deviceUuid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UUID</span><span class="token punctuation">(</span>androidId<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>tmDevice<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">|</span> tmSerial<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> deviceId <span class="token operator">=</span> deviceUuid<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>谨记：要取得以下权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;uses-permission android:name=&quot;android.permission.READ_PHONE_STATE&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),k={href:"http://stackoverflow.com/questions/2785485/is-there-a-unique-android-device-id",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const a=l("ExternalLinkIcon");return p(),e("div",null,[u,n("p",null,[s("stackoverflow链接： "),n("a",k,[s("http://stackoverflow.com/questions/2785485/is-there-a-unique-android-device-id"),o(a)])])])}const h=t(i,[["render",r],["__file","is-there-a-unique-android-device-id.html.vue"]]);export{h as default};
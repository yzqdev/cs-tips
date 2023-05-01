import{_ as i,Y as p,Z as o,a1 as n,a2 as s,a0 as t,$ as e,G as l}from"./framework-ae46ee38.js";const c={},u=e(`<h1 id="gradle配置" tabindex="-1"><a class="header-anchor" href="#gradle配置" aria-hidden="true">#</a> gradle配置</h1><h1 id="安卓相关" tabindex="-1"><a class="header-anchor" href="#安卓相关" aria-hidden="true">#</a> 安卓相关</h1><h2 id="安卓使用libs" tabindex="-1"><a class="header-anchor" href="#安卓使用libs" aria-hidden="true">#</a> 安卓使用libs</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> implementation fileTree(include: [&#39;*.jar&#39;,&quot;*.aar&quot;], dir: &#39;libs&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安卓权限" tabindex="-1"><a class="header-anchor" href="#安卓权限" aria-hidden="true">#</a> 安卓权限</h2>`,5),r={href:"https://www.jianshu.com/p/892a2ca5c41e",target:"_blank",rel:"noopener noreferrer"},d=e(`<h2 id="安卓key" tabindex="-1"><a class="header-anchor" href="#安卓key" aria-hidden="true">#</a> 安卓key</h2><h3 id="groovy" tabindex="-1"><a class="header-anchor" href="#groovy" aria-hidden="true">#</a> groovy</h3><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>     signingConfigs <span class="token punctuation">{</span>
             
            release <span class="token punctuation">{</span>
                storeFile <span class="token function">file</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">rootDir</span></span><span class="token string">/key.jks&quot;</span></span><span class="token punctuation">)</span>
                storePassword <span class="token interpolation-string"><span class="token string">&quot;123456&quot;</span></span>
                keyAlias <span class="token interpolation-string"><span class="token string">&quot;applet&quot;</span></span>
                keyPassword <span class="token interpolation-string"><span class="token string">&quot;123456&quot;</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        buildTypes <span class="token punctuation">{</span>
            release <span class="token punctuation">{</span>
     
                signingConfig signingConfigs<span class="token punctuation">.</span>release
                proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;proguard-rules.pro&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kts" tabindex="-1"><a class="header-anchor" href="#kts" aria-hidden="true">#</a> kts</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>     signingConfigs <span class="token punctuation">{</span>

            <span class="token function">create</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;release&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 别名</span>
                keyAlias <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;key0&quot;</span></span>
                <span class="token comment">// 别名密码</span>
                keyPassword <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;123456&quot;</span></span>
                <span class="token comment">// 路径</span>
                storeFile <span class="token operator">=</span> <span class="token function">file</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;key.jks&quot;</span></span><span class="token punctuation">)</span>
                <span class="token comment">// 签名文件密码</span>
                storePassword <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;123456&quot;</span></span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        buildTypes <span class="token punctuation">{</span>
            release <span class="token punctuation">{</span>
                isMinifyEnabled <span class="token operator">=</span> <span class="token boolean">false</span>
                signingConfig <span class="token operator">=</span> signingConfigs<span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;release&quot;</span></span><span class="token punctuation">)</span>
                <span class="token function">proguardFiles</span><span class="token punctuation">(</span>
                    <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;proguard-android-optimize.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token string-literal singleline"><span class="token string">&quot;proguard-rules.pro&quot;</span></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            debug<span class="token punctuation">{</span>
                signingConfig <span class="token operator">=</span> signingConfigs<span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;release&quot;</span></span><span class="token punctuation">)</span>
                <span class="token function">proguardFiles</span><span class="token punctuation">(</span>
                    <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;proguard-android-optimize.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token string-literal singleline"><span class="token string">&quot;proguard-rules.pro&quot;</span></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安卓教程" tabindex="-1"><a class="header-anchor" href="#安卓教程" aria-hidden="true">#</a> 安卓教程</h2>`,6),k={href:"https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html#bc1%EF%BC%89%E6%8A%80%E6%9C%AF%E3%80%82%E6%89%80%E4%BB%A5%E5%A6%82%E6%9E%9C%E6%83%B3%E4%BD%BF%E7%94%A8Apply",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>Apk必须是debug包</p><p>必须在Android 8.0以上的手机上运行</p><p>Apply Changes按钮在菜单栏上，在运行的右侧新增两个按钮，如下图</p><p>1，Apply Changes and Restart Activity：尝试通过重新启动活动但不重新启动应用程序来应用资源和代码更改。如果有代码和资源的修改可以使用这个来使代码和资源即时生效。</p><p>2，Apply Code Changes：尝试仅应用代码更改而不重新启动任何内容。如果只有代码修改，可以使用这个来使代码生效。如果修改了代码和资源，请使用“Apply Changes and Restart Activity ”。</p><h2 id="adb命令" tabindex="-1"><a class="header-anchor" href="#adb命令" aria-hidden="true">#</a> adb命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     adb shell getprop ro.product.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安卓rom" tabindex="-1"><a class="header-anchor" href="#安卓rom" aria-hidden="true">#</a> 安卓rom</h3>`,8),m={href:"https://evolution-x.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://download.pixelexperience.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://arrowos.net/download",target:"_blank",rel:"noopener noreferrer"},h={href:"https://lineageos.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://havoc-os.com/download",target:"_blank",rel:"noopener noreferrer"},y={href:"https://crdroid.net/begonia/9",target:"_blank",rel:"noopener noreferrer"},q={href:"https://forum.xda-developers.com/",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"升级gradlew",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#升级gradlew","aria-hidden":"true"},"#"),s(" 升级gradlew")],-1),_={href:"https://docs.gradle.org/current/userguide/init_scripts.html",target:"_blank",rel:"noopener noreferrer"},x=e(`<p><code>$GRADLE_USER_HOME</code>是你gradle下载文件的位置 把下面这个命名为dependencyUpdate.gradle然后放到<code>$GRADLE_USER_HOME/init.d/</code>文件夹即可</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>
<span class="token keyword">def</span> isNonStable <span class="token operator">=</span> <span class="token punctuation">{</span> String version <span class="token operator">-&gt;</span>
    <span class="token keyword">def</span> stableKeyword <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;RELEASE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;FINAL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GA&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>any <span class="token punctuation">{</span> it <span class="token operator">-&gt;</span> version<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">def</span> regex <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">/^[0-9,.v-]+(-r)?$/</span></span>
    <span class="token keyword">return</span> <span class="token operator">!</span>stableKeyword <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>version <span class="token operator">==~</span> regex<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

initscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        <span class="token function">gradlePluginPortal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    dependencies <span class="token punctuation">{</span>
        <span class="token comment">//noinspection GradleDynamicVersion</span>
        classpath <span class="token interpolation-string"><span class="token string">&quot;com.github.ben-manes:gradle-versions-plugin:+&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    apply plugin<span class="token punctuation">:</span> com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>benmanes<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>VersionsPlugin

    tasks<span class="token punctuation">.</span><span class="token function">named</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;dependencyUpdates&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>configure <span class="token punctuation">{</span>
        rejectVersionIf <span class="token punctuation">{</span>
            <span class="token function">isNonStable</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span>candidate<span class="token punctuation">.</span>version<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库配置" tabindex="-1"><a class="header-anchor" href="#仓库配置" aria-hidden="true">#</a> 仓库配置</h2><p>安卓gradlekts必须这样写</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    pluginManagement <span class="token punctuation">{</span>
        repositories <span class="token punctuation">{</span>
            maven <span class="token punctuation">{</span>
                url <span class="token operator">=</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;https://maven.aliyun.com/repository/public/&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">gradlePluginPortal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    dependencyResolutionManagement <span class="token punctuation">{</span>
        repositoriesMode<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>RepositoriesMode<span class="token punctuation">.</span>FAIL_ON_PROJECT_REPOS<span class="token punctuation">)</span>
        repositories <span class="token punctuation">{</span>

            maven <span class="token punctuation">{</span>
                url <span class="token operator">=</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;https://maven.aliyun.com/repository/public/&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            maven <span class="token punctuation">{</span>
                url <span class="token operator">=</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;https://maven.aliyun.com/repository/google/&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
           maven<span class="token punctuation">{</span>
                url<span class="token operator">=</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;https://jitpack.io&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用gradle</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>pluginManagement <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            url  <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/public/&quot;</span></span> 
        <span class="token punctuation">}</span>
        <span class="token function">gradlePluginPortal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
dependencyResolutionManagement <span class="token punctuation">{</span>
    repositoriesMode<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>RepositoriesMode<span class="token punctuation">.</span>FAIL_ON_PROJECT_REPOS<span class="token punctuation">)</span>
    repositories <span class="token punctuation">{</span>

        maven <span class="token punctuation">{</span>
            url  <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/public/&quot;</span></span> 
        <span class="token punctuation">}</span>
        maven <span class="token punctuation">{</span>
            url  <span class="token interpolation-string"><span class="token string">&quot;https://maven.aliyun.com/repository/google/&quot;</span></span> 
        <span class="token punctuation">}</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       maven<span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://jitpack.io&quot;</span></span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不能<code>maven(&quot;https://maven.aliyun.com/repository/google/&quot;)</code></p><h3 id="安卓bom" tabindex="-1"><a class="header-anchor" href="#安卓bom" aria-hidden="true">#</a> 安卓bom</h3>`,9),C={href:"https://developer.android.google.cn/jetpack/compose/setup?hl=zh-cn#bom-version-mapping",target:"_blank",rel:"noopener noreferrer"},A=e(`<h3 id="gradle-kts" tabindex="-1"><a class="header-anchor" href="#gradle-kts" aria-hidden="true">#</a> gradle kts</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    <span class="token keyword">import</span> org<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>kotlin<span class="token punctuation">.</span>dsl<span class="token punctuation">.</span>apply
    <span class="token keyword">import</span> org<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>kotlin<span class="token punctuation">.</span>dsl<span class="token punctuation">.</span>dependencies
    <span class="token keyword">import</span> org<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>kotlin<span class="token punctuation">.</span>dsl<span class="token punctuation">.</span>kotlin
    <span class="token keyword">import</span> org<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>kotlin<span class="token punctuation">.</span>dsl<span class="token punctuation">.</span><span class="token operator">*</span>
    <span class="token keyword">import</span> org<span class="token punctuation">.</span>jetbrains<span class="token punctuation">.</span>kotlin<span class="token punctuation">.</span>config<span class="token punctuation">.</span>KotlinCompilerVersion

    plugins <span class="token punctuation">{</span>
        <span class="token function">id</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;com.android.application&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;android&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;android.extensions&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//apply {</span>
    <span class="token comment">//    from(&quot;$rootDir/tools/grgit.gradle&quot;)</span>
    <span class="token comment">//    from(&quot;$rootDir/buildSrc/quality.gradle.kts&quot;)</span>
    <span class="token comment">//    from(&quot;$rootDir/tools/ktlint.gradle&quot;)</span>
    <span class="token comment">//    from(&quot;$rootDir/tools/detekt.gradle&quot;)</span>
    <span class="token comment">//}</span>

    android <span class="token punctuation">{</span>
        <span class="token function">compileSdkVersion</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span>
        <span class="token function">flavorDimensions</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;default&quot;</span></span><span class="token punctuation">)</span>
        splits <span class="token punctuation">{</span>
                abi <span class="token punctuation">{</span>
                    isEnable <span class="token operator">=</span> <span class="token boolean">true</span>
                    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token comment">// 设置包含，调用前需要先用 reset 将默认清除</span>
                    <span class="token function">include</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;arm64-v8a&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;armeabi-v7a&quot;</span></span><span class="token punctuation">)</span>
                    isUniversalApk <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        defaultConfig <span class="token punctuation">{</span>
            applicationId <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;com.onmyway133.myapp&quot;</span></span>
            <span class="token function">minSdkVersion</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span>
            <span class="token function">targetSdkVersion</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span>
    <span class="token comment">//        versionCode = ext.get(&quot;gitCommitCount&quot;) as? Int</span>
            versionCode <span class="token operator">=</span> <span class="token number">1</span>
            versionName <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;1.0&quot;</span></span>
               ndk <span class="token punctuation">{</span>
                <span class="token comment">// 设置支持的SO库架构（开发者可以根据需要，选择一个或多个平台的so）</span>
                abiFilters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;arm64-v8a&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
             
            testInstrumentationRunner <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;androidx.test.runner.AndroidJUnitRunner&quot;</span></span>
        <span class="token punctuation">}</span>

        signingConfigs <span class="token punctuation">{</span>
            <span class="token function">create</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;release&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                keyAlias <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;keyalias&quot;</span></span>
                keyPassword <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;keypassword&quot;</span></span>
                storePassword <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;storepassword&quot;</span></span>
                storeFile <span class="token operator">=</span> <span class="token function">file</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;/Users/khoa/Android/Key/keystore&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        buildTypes <span class="token punctuation">{</span>
            <span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;debug&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                signingConfig <span class="token operator">=</span> signingConfigs<span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;debug&quot;</span></span><span class="token punctuation">)</span>
                isMinifyEnabled <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token function">proguardFiles</span><span class="token punctuation">(</span><span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;proguard-android-optimize.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string">.rootDir/tools/proguard-rules-debug.pro&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;release&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                signingConfig <span class="token operator">=</span> signingConfigs<span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;release&quot;</span></span><span class="token punctuation">)</span>
                isMinifyEnabled <span class="token operator">=</span> <span class="token boolean">true</span>
                isShrinkResources <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token function">proguardFiles</span><span class="token punctuation">(</span><span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;proguard-android-optimize.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string">.rootDir/tools/proguard-rules.pro&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        productFlavors <span class="token punctuation">{</span>
            <span class="token function">create</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;staging&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>

            <span class="token function">create</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;production&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        lintOptions <span class="token punctuation">{</span>
            lintConfig <span class="token operator">=</span> <span class="token function">file</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string">.rootDir/tools/lint-rules.xml&quot;</span></span><span class="token punctuation">)</span>
            htmlOutput <span class="token operator">=</span> <span class="token function">file</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string">.buildDir/outputs/lint/lint.html&quot;</span></span><span class="token punctuation">)</span>
            xmlReport <span class="token operator">=</span> <span class="token boolean">false</span>
            htmlReport <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    dependencies <span class="token punctuation">{</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">fileTree</span><span class="token punctuation">(</span><span class="token function">mapOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;dir&quot;</span></span> <span class="token keyword">to</span> <span class="token string-literal singleline"><span class="token string">&quot;libs&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;include&quot;</span></span> <span class="token keyword">to</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;*.jar&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;stdlib-jdk7&quot;</span></span><span class="token punctuation">,</span> KotlinCompilerVersion<span class="token punctuation">.</span>VERSION<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;androidx.appcompat:appcompat:1.0.2&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;androidx.core:core-ktx:1.0.2&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;androidx.constraintlayout:constraintlayout:1.1.3&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;com.google.android.material:material:1.0.0&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">testImplementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;junit:junit:4.12&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">androidTestImplementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;androidx.test:runner:1.1.1&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">androidTestImplementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;androidx.test.espresso:espresso-core:3.1.1&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    tasks<span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;check&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dependsOn</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;lint&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spit-abi" tabindex="-1"><a class="header-anchor" href="#spit-abi" aria-hidden="true">#</a> spit abi</h3><p>在defaultConfig中配置</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>     splits <span class="token punctuation">{</span>
                abi <span class="token punctuation">{</span>
                    isEnable <span class="token operator">=</span> <span class="token boolean">true</span>
                    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token comment">// 设置包含，调用前需要先用 reset 将默认清除</span>
                    <span class="token function">include</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;arm64-v8a&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;armeabi-v7a&quot;</span></span><span class="token punctuation">)</span>
                    isUniversalApk <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安卓baseactivity的viewbinding" tabindex="-1"><a class="header-anchor" href="#安卓baseactivity的viewbinding" aria-hidden="true">#</a> 安卓baseactivity的viewbinding</h3>`,6),E={href:"https://stackoverflow.com/questions/62407823/how-to-use-viewbinding-with-an-abstract-base-class",target:"_blank",rel:"noopener noreferrer"},B=e(`<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/*
 * In Activity
 * source : https://chetangupta.net/viewbinding/
 * Author : ChetanGupta.net
 */</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> ViewBindingActivity<span class="token operator">&lt;</span>VB <span class="token operator">:</span> ViewBinding<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token function">AppCompatActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">var</span> _binding<span class="token operator">:</span> ViewBinding<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">abstract</span> <span class="token keyword">val</span> bindingInflater<span class="token operator">:</span> <span class="token punctuation">(</span>LayoutInflater<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> VB

    <span class="token annotation builtin">@Suppress</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;UNCHECKED_CAST&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> <span class="token keyword">val</span> binding<span class="token operator">:</span> VB
        <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> _binding <span class="token keyword">as</span> VB

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>
        _binding <span class="token operator">=</span> bindingInflater<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>layoutInflater<span class="token punctuation">)</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token function">requireNotNull</span><span class="token punctuation">(</span>_binding<span class="token punctuation">)</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token keyword">fun</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        _binding <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/*
 * In Fragment
 * source : https://chetangupta.net/viewbinding/
 * Author : ChetanGupta.net
 */</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> ViewBindingFragment<span class="token operator">&lt;</span>VB <span class="token operator">:</span> ViewBinding<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token function">Fragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">var</span> _binding<span class="token operator">:</span> ViewBinding<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">abstract</span> <span class="token keyword">val</span> bindingInflater<span class="token operator">:</span> <span class="token punctuation">(</span>LayoutInflater<span class="token punctuation">,</span> ViewGroup<span class="token operator">?</span><span class="token punctuation">,</span> Boolean<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> VB

    <span class="token annotation builtin">@Suppress</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;UNCHECKED_CAST&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> <span class="token keyword">val</span> binding<span class="token operator">:</span> VB
        <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> _binding <span class="token keyword">as</span> VB

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreateView</span><span class="token punctuation">(</span>
        inflater<span class="token operator">:</span> LayoutInflater<span class="token punctuation">,</span>
        container<span class="token operator">:</span> ViewGroup<span class="token operator">?</span><span class="token punctuation">,</span>
        savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> View<span class="token operator">?</span> <span class="token punctuation">{</span>
        _binding <span class="token operator">=</span> bindingInflater<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>inflater<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">requireNotNull</span><span class="token punctuation">(</span>_binding<span class="token punctuation">)</span><span class="token punctuation">.</span>root
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onViewCreated</span><span class="token punctuation">(</span>view<span class="token operator">:</span> View<span class="token punctuation">,</span> savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onViewCreated</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> savedInstanceState<span class="token punctuation">)</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token keyword">fun</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onDestroyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDestroyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        _binding <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dart-服务端" tabindex="-1"><a class="header-anchor" href="#dart-服务端" aria-hidden="true">#</a> dart 服务端</h3>`,3),I={href:"https://github.com/VeryGoodOpenSource/dart_frog",target:"_blank",rel:"noopener noreferrer"},V=n("h3",{id:"flutter添加到android",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flutter添加到android","aria-hidden":"true"},"#"),s(" flutter添加到android")],-1),F={href:"https://flutter.cn/docs/development/add-to-app",target:"_blank",rel:"noopener noreferrer"},P=e(`<h3 id="splitabi" tabindex="-1"><a class="header-anchor" href="#splitabi" aria-hidden="true">#</a> splitabi</h3><p>优化ApK大小之ABI Filters 和 APK split</p><p>想要打出的 apk 包含多个架构的 so库 需要下面的配置：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    <span class="token punctuation">...</span> <span class="token comment">// 其它配置</span>
    defaultConfig <span class="token punctuation">{</span>
       <span class="token punctuation">...</span>  <span class="token comment">// 默认配置</span>
       ndk <span class="token punctuation">{</span>
           <span class="token comment">//选择要添加的对应cpu类型的.so库。</span>
            abiFilters <span class="token string">&#39;armeabi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;armeabi-v7a&#39;</span>
            <span class="token comment">// 还可以添加</span>
            <span class="token comment">// &#39;arm64-v8a&#39;, 64 bit ARM architecture,it can use v7 version</span>
            <span class="token comment">//              unless you are too much concerned about performance</span>
            <span class="token comment">// mips,mips64, There are no devices with MIPS</span>
            <span class="token comment">//  x86_64, No android devices and anyway it can use X86 version</span>
            <span class="token comment">//  armeabi, very old architecture. Unsupported after Android 4.4</span>
            <span class="token comment">// &#39;x86&#39;, Intel based devices</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">...</span> <span class="token comment">// 其它配置</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想要构架多个不同架构的 apk 包，可以使用 ABI 拆分，需要下面的配置：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    <span class="token punctuation">...</span> <span class="token comment">// 其它配置</span>
    splits <span class="token punctuation">{</span>
        abi <span class="token punctuation">{</span>
            <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//重置 ABI 列表为只包含一个空字符串（与 include 一起使用可以表示要使用哪一个 ABI，而不是要 exclude 哪些 ABI）</span>
            enable <span class="token boolean">true</span> <span class="token comment">// 设为true，才能启用ABI拆分机制在打包时根据架构生成不同的apk文件</span>
            universalApk <span class="token boolean">false</span>  <span class="token comment">// If true, 构建支持所有平台abi类型，构建一个包，包含多个架构的so(只要代码中有的都会打进去)</span>
            include <span class="token interpolation-string"><span class="token string">&quot;armeabi-v7a&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;armeabi&quot;</span></span> <span class="token comment">// 设置所有要支持的abi类型，构建多个包，每个包只包含一个架构的so</span>
            exclude <span class="token interpolation-string"><span class="token string">&quot;x86&quot;</span></span>   <span class="token comment">// 设置所有不要支持的abi类型</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种配置是没有办法让打出的 apk 只包含自己想要的多种架构的~！ ERROR</p><p>如果两个一起配置那么报下面的错误： ERROR: Conflicting configuration : &#39;arm64-v8a&#39; in ndk abiFilters cannot be present when splits abi filters are set : armeabi</p><p>因为 ABI 拆分当中的 include 是和 ndk abiFilters 互斥的操作！！</p><ul><li>如果两种方式分开配置都可以运行；</li><li>两种方式一起配置在不报错的情况下（ABI拆分注调include），ABI 拆分不生效；</li><li>多架构的apk只能使用abiFilters</li></ul><h3 id="groovy版本的" tabindex="-1"><a class="header-anchor" href="#groovy版本的" aria-hidden="true">#</a> groovy版本的</h3><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>      splits <span class="token punctuation">{</span>
            abi <span class="token punctuation">{</span>
                enable <span class="token boolean">true</span>
                <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                universalApk <span class="token boolean">false</span>  <span class="token comment">// If true, also generate a universal APK</span>
                include <span class="token interpolation-string"><span class="token string">&quot;armeabi-v7a&quot;</span></span><span class="token punctuation">,</span>   <span class="token interpolation-string"><span class="token string">&quot;arm64-v8a&quot;</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
          defaultConfig <span class="token punctuation">{</span>
            applicationId <span class="token interpolation-string"><span class="token string">&quot;cn.yzq.android_flut&quot;</span></span>
            minSdk <span class="token number">24</span>
            targetSdk <span class="token number">33</span>
            versionCode <span class="token number">1</span>
            versionName <span class="token interpolation-string"><span class="token string">&quot;1.0&quot;</span></span>

    <span class="token comment">//        ndk {</span>
    <span class="token comment">//            // Filter for architectures supported by Flutter.</span>
    <span class="token comment">//            abiFilters &#39;armeabi-v7a&#39;, &#39;arm64-v8a&#39;</span>
    <span class="token comment">//        }</span>

            testInstrumentationRunner <span class="token interpolation-string"><span class="token string">&quot;androidx.test.runner.AndroidJUnitRunner&quot;</span></span>
        <span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span>

      signingConfigs <span class="token punctuation">{</span>
            release <span class="token punctuation">{</span>
                keyAlias <span class="token string">&#39;key0&#39;</span>
                keyPassword <span class="token string">&#39;123456&#39;</span>
                storeFile <span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&#39;key.jks&#39;</span><span class="token punctuation">)</span>
                storePassword <span class="token string">&#39;123456&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        buildTypes <span class="token punctuation">{</span>
            release <span class="token punctuation">{</span>
                signingConfig signingConfigs<span class="token punctuation">.</span>release
                minifyEnabled <span class="token boolean">true</span>
                proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android-optimize.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;proguard-rules.pro&#39;</span>
            <span class="token punctuation">}</span>
            debug <span class="token punctuation">{</span>
                signingConfig signingConfigs<span class="token punctuation">.</span>release
                minifyEnabled <span class="token boolean">false</span>
                proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android-optimize.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;proguard-rules.pro&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kotlin-dsl" tabindex="-1"><a class="header-anchor" href="#kotlin-dsl" aria-hidden="true">#</a> kotlin dsl</h2><p>如果 api()无法使用,需要在头部添加<code>java-library</code></p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>    plugins <span class="token punctuation">{</span>
        java
        <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;jvm&quot;</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">&quot;1.8.0&quot;</span></span>
        \`java<span class="token operator">-</span>library\`
        <span class="token function">id</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;org.springframework.boot&quot;</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">&quot;3.0.2&quot;</span></span>
        <span class="token function">id</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;io.spring.dependency-management&quot;</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">&quot;1.1.0&quot;</span></span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令设置语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>     <span class="token class-name">MaterialButton</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MaterialButton</span><span class="token punctuation">(</span><span class="token function">requireContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                button<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>

                button<span class="token punctuation">.</span><span class="token function">setLayoutParams</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span><span class="token punctuation">(</span><span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span><span class="token punctuation">.</span><span class="token constant">WRAP_CONTENT</span><span class="token punctuation">,</span><span class="token class-name">ViewGroup<span class="token punctuation">.</span>LayoutParams</span><span class="token punctuation">.</span><span class="token constant">WRAP_CONTENT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Gives as much height for multi line*/</span>
                button<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span>view1 <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">UniUtil</span><span class="token punctuation">.</span><span class="token function">openUniapp</span><span class="token punctuation">(</span><span class="token function">requireContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function j(R,N){const a=l("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("https://www.jianshu.com/p/892a2ca5c41e"),t(a)])]),d,n("p",null,[s("Apply Changes 是通过利用Android 8.0（API级别26）或更高版本中支持的 Android JVMTI（"),n("a",k,[s("https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html#bc1）技术。所以如果想使用Apply"),t(a)]),s(" Changes有两个条件：")]),v,n("p",null,[n("a",m,[s("https://evolution-x.org/"),t(a)]),n("a",g,[s("https://download.pixelexperience.org/"),t(a)]),n("a",b,[s("https://arrowos.net/download"),t(a)])]),n("p",null,[n("a",h,[s("https://lineageos.org/"),t(a)]),n("a",f,[s("https://havoc-os.com/download"),t(a)])]),n("p",null,[n("a",y,[s("https://crdroid.net/begonia/9"),t(a)]),s(" (红米note8pro)")]),n("p",null,[s("论坛["),n("a",q,[s("https://forum.xda-developers.com/"),t(a)]),s("]")]),w,n("p",null,[s("gradle init 脚本 "),n("a",_,[s("https://docs.gradle.org/current/userguide/init_scripts.html"),t(a)])]),x,n("p",null,[n("a",C,[s("https://developer.android.google.cn/jetpack/compose/setup?hl=zh-cn#bom-version-mapping"),t(a)])]),A,n("p",null,[n("a",E,[s("https://stackoverflow.com/questions/62407823/how-to-use-viewbinding-with-an-abstract-base-class"),t(a)])]),B,n("p",null,[n("a",I,[s("https://github.com/VeryGoodOpenSource/dart_frog"),t(a)])]),V,n("p",null,[n("a",F,[s("https://flutter.cn/docs/development/add-to-app"),t(a)])]),P])}const D=i(c,[["render",j],["__file","gradle.html.vue"]]);export{D as default};

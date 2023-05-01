import{_ as s,Y as r,Z as d,a1 as e,a2 as a,a0 as c,$ as t,G as l}from"./framework-ae46ee38.js";const n={},p=t('<h1 id="如何在classpath中设置多个jar包" tabindex="-1"><a class="header-anchor" href="#如何在classpath中设置多个jar包" aria-hidden="true">#</a> 如何在classpath中设置多个jar包？</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>是否有一个方法可以在classpath选项中包含一个文件夹（目录）下的所有jar包？ 我尝试运行<code>java -classpath lib/*.jar:. my.package.Program</code>，但是无法找到相应的类文件，可是这些类文件确实存在于命令中的jar包中。我是否需要在classpath中分别指定所有的jar包？</p><h3 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h3><p>在使用Java6或者以上版本时，classpath选项可以支持通配符(wildcards)。使用方法如下：</p><ul><li>使用直接引用(<code>&quot;</code>)</li><li>使用 <code>*</code> 而不是 <code>*.jar</code></li></ul><p><strong>Windows平台</strong></p><p><code>java -cp &quot;Test.jar;lib/*&quot; my.package.MainClass</code></p><p><strong>Unix平台</strong></p><p><code>java -cp &quot;Test.jar:lib/*&quot; my.package.MainClass</code></p><p>Unix平台与Windows平台基本一样，除了使用冒号 <code>:</code> 替代分号 <code>;</code> 之外。如果你不能使用通配符，也可以使用<code>bash</code>完成上述功能，命令如下（其中lib是一个包含所有jar包的目录）： <code>java -cp $(echo lib/*.jar | tr &#39; &#39; &#39;:&#39;)</code></p>',11),i={href:"http://stackoverflow.com/questions/13018100/execute-jar-file-with-multiple-classpath-libraries-from-command-prompt",target:"_blank",rel:"noopener noreferrer"},h=e("strong",null,"对于通配符的理解",-1),j={href:"http://java.sun.com/javase/6/docs/technotes/tools/windows/classpath.html",target:"_blank",rel:"noopener noreferrer"},f=t("<p>类路径可以包含一个基本文件名通配符<code>*</code>，其等价于指定一个特定目录下的所有以.jar或.JAR为后缀的文件的列表。例如，一个类路径的条目为<code>foo/*</code>，其指定了foo目录下的所有jar文件。一个仅仅包含<code>*</code>的classpath条目(entry)指定了当前目录下的所有jar包。</p><p>一个包含了<code>*</code>的classpath条目不能匹配特定目录下的class文件。为了既能匹配foo目录下的类文件，也能匹配jar包，可以使用<code>foo;foo/*</code>或<code>foo/*;foo</code>。对于前者而言，类文件和资源选择的顺序先是foo目录下的类文件和资源，之后才是jar包；而后者则正好相反。</p><p>通配符并不能递归地搜索子目录下的jar包。例如，<code>foo/*</code>只找<code>foo</code>目录下的jar包，而不会寻找<code>foo/bar</code>，<code>foo/baz</code>等目录下的jar包。</p><p>一个目录中的jar包枚举顺序并不固定，这不仅和平台有关，甚至可能会在同一个机器上因为时间不同而表现不同。一个结构良好（well-constructed）的应用不应该依赖于某个特定的顺序。如果特定顺序是不可避免的时候，就需要在classpath中显示枚举所有的jar包了。</p><p>在类加载进程中，通配符的扩展在早期完成，优先于程序main函数的调用，而不是在其后。每个包含通配符的类路径都被替换为所在目录下所有jar包的序列。例如，如果目录<code>foo</code>包含<code>a.jar</code>，<code>b.jar</code>以及<code>c.jar</code>，因此类路径<code>foo/*</code>被扩展为<code>foo/a.jar;foo/b.jar;foo/c.jar</code>，并且以上字符串被作为系统属性<code>java.class.path</code>的值。</p><p>环境变量<code>CLASSPATH</code>与命令行选项-classpath或者-cp并没有什么不同。也就是说，通配符既可以应用于命令行<code>-classpath/-cp</code>选项中，也可以应用于环境变量<code>CLASSPATH</code>中。</p>",6),u={href:"http://stackoverflow.com/questions/219585/setting-multiple-jars-in-java-classpath",target:"_blank",rel:"noopener noreferrer"};function m(_,v){const o=l("ExternalLinkIcon");return r(),d("div",null,[p,e("p",null,[a("注意事项：classpath选项与-jar选项并不能兼容。可以查看："),e("a",i,[a("Execute jar file with multiple classpath libraries from command prompt"),c(o)])]),e("p",null,[h,a(" 来自"),e("a",j,[a("Classpath"),c(o)]),a("文档：")]),f,e("p",null,[a("stackoverflow原地址："),e("a",u,[a("http://stackoverflow.com/questions/219585/setting-multiple-jars-in-java-classpath"),c(o)])])])}const g=s(n,[["render",m],["__file","setting-multiple-jars-in-java-classpath.html.vue"]]);export{g as default};
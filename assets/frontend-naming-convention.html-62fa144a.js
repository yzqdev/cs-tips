import{_ as d,Y as t,Z as s,a3 as a,a1 as e,a2 as i,a0 as r,$ as n,G as v}from"./framework-ae46ee38.js";const c={},u=e("h1",{id:"前端开发规范-命名规范、html规范、css规范、js规范",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端开发规范-命名规范、html规范、css规范、js规范","aria-hidden":"true"},"#"),i(" 前端开发规范：命名规范、html规范、css规范、js规范")],-1),o=e("p",null,"ps:资料来自网络 一个好的程序员肯定是要能书写可维护的代码，而不是一次性的代码，怎么能让团队当中其他人甚至一段时间时候你再看你某个时候写的代码也能看懂呢，这就需要规范你的代码了。 我是有一点强迫症的人，上周我们后端给我了一个CanUsename的接口（该接口的目的是判断输入的目的地是否是4级目的地），我真的是崩溃的。 我只是觉得这个名字不够语义化，但是让我自己想一个名字我又想不出来，于是我就在想，如果有一套命名规范的话，那么以后起名字就不用发愁了，直接按照规范来就好了~ 于是端午在家就百度了一下~",-1),m=n(`<h1 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h1><h2 id="驼峰式命名法介绍" tabindex="-1"><a class="header-anchor" href="#驼峰式命名法介绍" aria-hidden="true">#</a> 驼峰式命名法介绍</h2><ul><li><p>Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo</p></li><li><p>Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo</p></li></ul><h2 id="文件资源命名" tabindex="-1"><a class="header-anchor" href="#文件资源命名" aria-hidden="true">#</a> 文件资源命名</h2><ul><li><p>文件名不得含有空格</p></li><li><p>文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如README、LICENSE。 )</p></li><li><p>文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。</p></li><li><p>引入资源使用相对路径，不要指定资源所带的具体协议 ( <code>http:</code>,<code>https:</code> ) ，除非这两者协议都不可用。</p></li></ul><p>不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;http://cdn.com/foundation.min.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;//cdn.com/foundation.min.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="变量命名" tabindex="-1"><a class="header-anchor" href="#变量命名" aria-hidden="true">#</a> 变量命名</h2><p><strong>命名方式</strong> : 小驼峰式命名方法 <strong>命名规范</strong> : 类型+对象描述的方式，如果没有明确的类型，就可以使前缀为名词</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">小写字母</th></tr></thead><tbody><tr><td style="text-align:left;">array</td><td style="text-align:left;">a</td></tr><tr><td style="text-align:left;">boolean</td><td style="text-align:left;">b</td></tr><tr><td style="text-align:left;">function</td><td style="text-align:left;">fn</td></tr><tr><td style="text-align:left;">int</td><td style="text-align:left;">i</td></tr><tr><td style="text-align:left;">object</td><td style="text-align:left;">o</td></tr><tr><td style="text-align:left;">regular</td><td style="text-align:left;">r</td></tr><tr><td style="text-align:left;">string</td><td style="text-align:left;">s</td></tr></tbody></table><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let tableTitle = &quot;LoginTable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let getTitle = &quot;LoginTable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p><strong>命名方式</strong> : 小驼峰方式 ( 构造函数使用大驼峰命名法 ) <strong>命名规则</strong> : 前缀为动词</p><table><thead><tr><th>动词</th><th>含义</th><th>返回值</th></tr></thead><tbody><tr><td>can</td><td>判断是否可执行某个动作 ( 权限 )</td><td>函数返回一个布尔值。true：可执行；false：不可执行</td></tr><tr><td>has</td><td>判断是否含有某个值</td><td>函数返回一个布尔值。true：含有此值；false：不含有此值</td></tr><tr><td>is</td><td>判断是否为某个值</td><td>函数返回一个布尔值。true：为某个值；false：不为某个值</td></tr><tr><td>get</td><td>获取某个值</td><td>函数返回一个非布尔值</td></tr><tr><td>set</td><td>设置某个值</td><td>无返回值、返回是否设置成功或者返回链式对象</td></tr></tbody></table><p>推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//是否可阅读
function canRead(){
    return true;
}

//获取姓名
function getName{
    return this.name
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p><strong>命名方法</strong> : 全部大写 <strong>命名规范</strong> : 使用大写字母和下划线来组合命名，下划线用以分割单词。 推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> let MAX_COUNT = 10;
 let URL = &#39;http://www.baidu.com&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的成员" tabindex="-1"><a class="header-anchor" href="#类的成员" aria-hidden="true">#</a> 类的成员</h2><ul><li>公共属性和方法 : 同变量命名方式</li><li>私有属性和方法 : 前缀为下划线(_)后面跟公共属性和方法一样的命名方式</li></ul><p>推荐(将<code>name</code>换成<code>this</code>是不是更熟悉了呢)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Student(name) {
    let _name = name; // 私有成员

    // 公共方法
    this.getName = function () {
        return _name;
    }

    // 公共方式
    this.setName = function (value) {
        _name = value;
    }
}
let st = new Student(&#39;tom&#39;);
st.setName(&#39;jerry&#39;);
console.log(st.getName()); // =&gt; jerry：输出_name私有变量的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范</h2><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释 ( // )</h3><ul><li>单独一行：//(双斜线)与注释文字之间保留一个空格</li><li>在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。</li><li>注释代码：//(双斜线)与代码之间保留一个空格。</li></ul><p>推荐 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 调用了一个函数；1)单独在一行
setTitle();

let maxCount = 10; // 设置最大量；2)在代码后面注释

// setName(); // 3)注释代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多行注释-注释说明" tabindex="-1"><a class="header-anchor" href="#多行注释-注释说明" aria-hidden="true">#</a> 多行注释 ( /<em>注释说明</em>/ )</h2><ul><li><p>若开始(/<code>*</code>和结束(<code>*</code>/)都在一行，推荐采用单行注释</p></li><li><p>若至少三行注释时，第一行为/</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>，最后行为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/，其他行以</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开始，并且注释文字与</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保留一个空格。</p><p>推荐 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="函数-方法-注释" tabindex="-1"><a class="header-anchor" href="#函数-方法-注释" aria-hidden="true">#</a> 函数 ( 方法 ) 注释</h2>`,36),b={href:"https://link.juejin.im/?target=http%3A%2F%2Fbaike.baidu.com%2Fitem%2Fjavadoc",target:"_blank",rel:"noopener noreferrer"},g=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/** 
* 函数说明 
* @关键字 
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用注释关键字</p><table><thead><tr><th>注释名</th><th>语法</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>@param</td><td>@param 参数名 {参数类型} 描述信息</td><td>描述参数的信息</td><td>@param name {String} 传入名称</td></tr><tr><td>@return</td><td>@return {返回类型} 描述信息</td><td>描述返回值的信息</td><td>@return {Boolean} true:可执行;false:不可执行</td></tr><tr><td>@author</td><td>@author 作者信息 [附属信息：如邮箱、日期]</td><td>描述此函数作者的信息</td><td>@author 张三 2015/07/21</td></tr><tr><td>@version</td><td>@version XX.XX.XX</td><td>描述此函数的版本号</td><td>@version 1.0.3</td></tr><tr><td>@example</td><td>@example 示例代码</td><td>@example setTitle(&#39;测试&#39;)</td><td>如下</td></tr></tbody></table><p>推荐 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 - 合并Grid的行
 - @param grid {Ext.Grid.Panel} 需要合并的Grid
 - @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 - @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
 - @return void
 - @author polk6 2015/07/21 
 - @example
 - _________________                             _________________
 - |  年龄 |  姓名 |                             |  年龄 |  姓名 |
 - -----------------      mergeCells(grid,[0])   -----------------
 - |  18   |  张三 |              =&gt;             |       |  张三 |
 - -----------------                             -  18   ---------
 - |  18   |  王五 |                             |       |  王五 |
 - -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="html规范" tabindex="-1"><a class="header-anchor" href="#html规范" aria-hidden="true">#</a> HTML规范</h1><h2 id="文档规范" tabindex="-1"><a class="header-anchor" href="#文档规范" aria-hidden="true">#</a> 文档规范</h2><p>使用 HTML5 的文档声明类型 : <code>&lt;!DOCTYPE html&gt;</code></p><ul><li>DOCTYPE标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。</li><li>使用文档声明类型的作用是为了防止开启浏览器的怪异模式。</li><li>没有DOCTYPE文档类型声明会开启浏览器的怪异模式，浏览器会按照自己的解析方式渲染页面，在不同的浏览器下面会有不同的样式。</li><li>如果你的页面添加了&lt;!DOCTYP&gt;那么，那么就等同于开启了标准模式。浏览器会按照W3C标准解析渲染页面。</li></ul><h2 id="脚本加载" tabindex="-1"><a class="header-anchor" href="#脚本加载" aria-hidden="true">#</a> 脚本加载</h2><p>说到js和css的位置，大家应该都知道js放在下面，css放在上面。 但是，如果你的项目只需要兼容ie10+或者只是在移动端访问，那么可以使用HTML5的新属性<code>async</code>，将脚本文件放在<code>&lt;head&gt;</code>内 <strong>兼容老旧浏览器(IE9-)时</strong>： 脚本引用写在 body 结束标签之前，并带上 async 属性。这虽然在老旧浏览器中不会异步加载脚本，但它只阻塞了 body 结束标签之前的 DOM 解析，这就大大降低了其阻塞影响。 <strong>而在现代浏览器中</strong>： 脚本将在 DOM 解析器发现 body 尾部的 script 标签才进行加载，此时加载属于异步加载，不会阻塞 CSSOM（但其执行仍发生在 CSSOM 之后）。 综上所述， 所有浏览器中推荐:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html&gt;
  &lt;head&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;main.css&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- body goes here --&gt;

    &lt;script src=&quot;main.js&quot; async&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只兼容现代浏览器推荐:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html&gt;
  &lt;head&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;main.css&quot;&gt;
    &lt;script src=&quot;main.js&quot; async&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- body goes here --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语义化" tabindex="-1"><a class="header-anchor" href="#语义化" aria-hidden="true">#</a> 语义化</h2><p>我们一直都在说语义化编程，语义化编程，但是在代码中很少有人完全使用正确的元素。使用语义化标签也是有理由SEO的。</p><blockquote><p>语义化是指：根据元素其被创造出来时的初始意义来使用它。 意思就是用正确的标签干正确的事，而不是只有<code>div</code>和<code>span</code>。</p></blockquote><p>不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;b&gt;My page title&lt;/b&gt;
&lt;div class=&quot;top-navigation&quot;&gt;
  &lt;div class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#home&quot;&gt;Home&lt;/a&gt;&lt;/div&gt;
  &lt;div class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#news&quot;&gt;News&lt;/a&gt;&lt;/div&gt;
  &lt;div class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#about&quot;&gt;About&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;news-page&quot;&gt;
  &lt;div class=&quot;page-section news&quot;&gt;
    &lt;div class=&quot;title&quot;&gt;All news articles&lt;/div&gt;
    &lt;div class=&quot;news-article&quot;&gt;
      &lt;h2&gt;Bad article&lt;/h2&gt;
      &lt;div class=&quot;intro&quot;&gt;Introduction sub-title&lt;/div&gt;
      &lt;div class=&quot;content&quot;&gt;This is a very bad example for HTML semantics&lt;/div&gt;
      &lt;div class=&quot;article-side-notes&quot;&gt;I think I&#39;m more on the side and should not receive the main credits&lt;/div&gt;
      &lt;div class=&quot;article-foot-notes&quot;&gt;
        This article was created by David &lt;div class=&quot;time&quot;&gt;2014-01-01 00:00&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;section-footer&quot;&gt;
      Related sections: Events, Public holidays
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;page-footer&quot;&gt;
  Copyright 2014
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html 代码:
&lt;!-- The page header should go into a header element --&gt;
&lt;header&gt;
  &lt;!-- As this title belongs to the page structure it&#39;s a heading and h1 should be used --&gt;
  &lt;h1&gt;My page title&lt;/h1&gt;
&lt;/header&gt;

&lt;!-- All navigation should go into a nav element --&gt;
&lt;nav class=&quot;top-navigation&quot;&gt;
  &lt;!-- A listing of elements should always go to UL (OL for ordered listings) --&gt;
  &lt;ul&gt;
    &lt;li class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#home&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#news&quot;&gt;News&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;nav-item&quot;&gt;&lt;a href=&quot;#about&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;!-- The main part of the page should go into a main element (also use role=&quot;main&quot; for accessibility) --&gt;
&lt;main class=&quot;news-page&quot; role=&quot;main&quot;&gt;
  &lt;!-- A section of a page should go into a section element. Divide a page into sections with semantic elements. --&gt;
  &lt;section class=&quot;page-section news&quot;&gt;
    &lt;!-- A section header should go into a section element --&gt;
    &lt;header&gt;
      &lt;!-- As a page section belongs to the page structure heading elements should be used (in this case h2) --&gt;
      &lt;h2 class=&quot;title&quot;&gt;All news articles&lt;/h2&gt;
    &lt;/header&gt;

    &lt;!-- If a section / module can be seen as an article (news article, blog entry, products teaser, any other
     re-usable module / section that can occur multiple times on a page) a article element should be used --&gt;
    &lt;article class=&quot;news-article&quot;&gt;
      &lt;!-- An article can contain a header that contains the summary / introduction information of the article --&gt;
      &lt;header&gt;
        &lt;!-- As a article title does not belong to the overall page structure there should not be any heading tag! --&gt;
        &lt;div class=&quot;article-title&quot;&gt;Good article&lt;/div&gt;
        &lt;!-- Small can optionally be used to reduce importance --&gt;
        &lt;small class=&quot;intro&quot;&gt;Introduction sub-title&lt;/small&gt;
      &lt;/header&gt;

      &lt;!-- For the main content in a section or article there is no semantic element --&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;p&gt;This is a good example for HTML semantics&lt;/p&gt;
      &lt;/div&gt;
      &lt;!-- For content that is represented as side note or less important information in a given context use aside --&gt;
      &lt;aside class=&quot;article-side-notes&quot;&gt;
        &lt;p&gt;I think I&#39;m more on the side and should not receive the main credits&lt;/p&gt;
      &lt;/aside&gt;
      &lt;!-- Articles can also contain footers. If you have footnotes for an article place them into a footer element --&gt;
      &lt;footer class=&quot;article-foot-notes&quot;&gt;
        &lt;!-- The time element can be used to annotate a timestamp. Use the datetime attribute to specify ISO time
         while the actual text in the time element can also be more human readable / relative --&gt;
        &lt;p&gt;This article was created by David &lt;time datetime=&quot;2014-01-01 00:00&quot; class=&quot;time&quot;&gt;1 month ago&lt;/time&gt;&lt;/p&gt;
      &lt;/footer&gt;
    &lt;/article&gt;

    &lt;!-- In a section, footnotes or similar information can also go into a footer element --&gt;
    &lt;footer class=&quot;section-footer&quot;&gt;
      &lt;p&gt;Related sections: Events, Public holidays&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;!-- Your page footer should go into a global footer element --&gt;
&lt;footer class=&quot;page-footer&quot;&gt;
  Copyright 2014
&lt;/footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alt标签不为空" tabindex="-1"><a class="header-anchor" href="#alt标签不为空" aria-hidden="true">#</a> alt标签不为空</h2><p><code>&lt;img&gt;</code>标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。 假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：</p><ul><li>网速太慢</li><li>src 属性中的错误</li><li>浏览器禁用图像</li><li>用户使用的是屏幕阅读器</li></ul><p>从SEO角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容</p><h2 id="结构、表现、行为三者分离" tabindex="-1"><a class="header-anchor" href="#结构、表现、行为三者分离" aria-hidden="true">#</a> 结构、表现、行为三者分离</h2><p>尽量在文档和模板中只包含结构性的 HTML；而将所有表现代码，移入样式表中；将所有动作行为，移入脚本之中。 在此之外，为使得它们之间的联系尽可能的小，在文档和模板中也尽量少地引入样式和脚本文件。 建议：</p><ul><li>不使用超过一到两张样式表</li><li>不使用超过一到两个脚本（学会用合并脚本）</li><li>不使用行内样式（<code>&lt;style&gt;.no-good {}&lt;/style&gt;</code>）</li><li>不在元素上使用 style 属性（<code>&lt;hr style=&quot;border-top: 5px solid black&quot;&gt;</code>）</li><li>不使用行内脚本（<code>&lt;script&gt;alert(&#39;no good&#39;)&lt;/script&gt;</code>）</li><li>不使用表象元素（<code>i.e. &lt;b&gt;, &lt;u&gt;, &lt;center&gt;, &lt;font&gt;, &lt;b&gt;</code>）</li><li>不使用表象 class 名（<code>i.e. red, left, center</code>）</li></ul><h2 id="html只关注内容" tabindex="-1"><a class="header-anchor" href="#html只关注内容" aria-hidden="true">#</a> HTML只关注内容</h2><ul><li>HTML只显示展示内容信息</li><li>不要引入一些特定的 HTML 结构来解决一些视觉设计问题</li><li>不要将<code>img</code>元素当做专门用来做视觉设计的元素</li><li>样式上的问题应该使用css解决</li></ul><p>不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- We should not introduce an additional element just to solve a design problem  --&gt;
&lt;span class=&quot;text-box&quot;&gt;
  &lt;span class=&quot;square&quot;&gt;&lt;/span&gt;
  See the square next to me?
&lt;/span&gt;
css 代码:
.text-box &gt; .square {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html 代码:
&lt;!-- That&#39;s clean markup! --&gt;
&lt;span class=&quot;text-box&quot;&gt;
  See the square next to me?
&lt;/span&gt;
css 代码:
/* We use a :before pseudo element to solve the design problem of placing a colored square in front of the text content */
.text-box:before {
  content: &quot;&quot;;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片和 SVG 图形能被引入到 HTML 中的唯一理由是它们呈现出了与内容相关的一些信息。</strong></p><p>不推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html 代码:
&lt;!-- Content images should never be used for design elements!  --&gt;
&lt;span class=&quot;text-box&quot;&gt;
  &lt;img src=&quot;square.svg&quot; alt=&quot;Square&quot; /&gt;
  See the square next to me?
&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html 代码:
&lt;!-- That&#39;s clean markup! --&gt;
&lt;span class=&quot;text-box&quot;&gt;
  See the square next to me?
&lt;/span&gt;
css 代码:
/* We use a :before pseudo element with a background image to solve the problem */
.text-box:before {
  content: &quot;&quot;;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(square.svg) no-repeat;
  background-size: 100%;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="js规范" tabindex="-1"><a class="header-anchor" href="#js规范" aria-hidden="true">#</a> js规范</h1><h2 id="避免全局命名空间污染" tabindex="-1"><a class="header-anchor" href="#避免全局命名空间污染" aria-hidden="true">#</a> 避免全局命名空间污染</h2><p>防止全局命名空间被污染，我们通常的做法是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，创建独立隔绝的定义域。也使得内存在执行完后立即释放。</p><p>IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）。 不推荐:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let x = 10,
    y = 100;

// Declaring variables in the global scope is resulting in global scope pollution. All variables declared like this
// will be stored in the window object. This is very unclean and needs to be avoided.
console.log(window.x + &#39; &#39; + window.y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// We declare a IIFE and pass parameters into the function that we will use from the global space
(function(log, w, undefined){
  &#39;use strict&#39;;

  let x = 10,
      y = 100;

  // Will output &#39;true true&#39;
  log((w.x === undefined) + &#39; &#39; + (w.y === undefined));

}(window.console.log, window));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐的IIFE写法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(){
  &#39;use strict&#39;;

  // Code goes here

}());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想引用全局变量或者是外层 IIFE 的变量，可以通过下列方式传参：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function($, w, d){
  &#39;use strict&#39;;

  $(function() {
    w.alert(d.querySelectorAll(&#39;div&#39;).length);
  });
}(jQuery, window, document));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2><p>ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。</p><p>严格模式会阻止使用在未来很可能被引入的预留关键字。</p><p>你应该在你的脚本中启用严格模式，最好是在独立的 IIFE 中应用它。避免在你的脚本第一行使用它而导致你的所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。</p><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2><p>总是使用 let 来声明变量。如不指定 var，变量将被隐式地声明为全局变量，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = b = 0; //b会被隐式的创建为全局变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，请总是使用 let 来声明变量，并且使用单var模式（将所有的变量在函数最前面只使用一个var定义）。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function (){
  &#39;use strict&#39;
  let a = 0,
      b = 0,
      c = 0,
      i,
      j,
      myObject();
}())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用严格模式带来的好处是，当你手误输入错误的变量名时，它可以通过报错信息来帮助你定位错误出处。</p><h2 id="js声明提前" tabindex="-1"><a class="header-anchor" href="#js声明提前" aria-hidden="true">#</a> js声明提前</h2><p>javascript会自动将函数作用域内的变量和方法的定义提前（只是提前声明，赋值还是在原处） 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(log){
  &#39;use strict&#39;;

  let a = 10;

  for(let i = 0; i &lt; a; i++) {
    let b = i * i;
    log(b);
  }

  if(a === 10) {
    let f = function() {
      log(a);
    };
    f();
  }

  function x() {
    log(&#39;Mr. X!&#39;);
  }
  x();

}(window.console.log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提升后的js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(log){
  &#39;use strict&#39;;
  // All variables used in the closure will be hoisted to the top of the function
  let a,
      i,
      b,
      f;
  // All functions in the closure will be hoisted to the top
  function x() {
    log(&#39;Mr. X!&#39;);
  }

  a = 10;

  for(i = 0; i &lt; a; i++) {
    b = i * i;
    log(b);
  }

  if(a === 10) {
    // Function assignments will only result in hoisted variables but the function body will not be hoisted
    // Only by using a real function declaration the whole function will be hoisted with its body
    f = function() {
      log(a);
    };
    f();
  }

  x();

}(window.console.log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用严格等" tabindex="-1"><a class="header-anchor" href="#使用严格等" aria-hidden="true">#</a> 使用严格等</h2><p>总是使用 <code>===</code> 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(log){
  &#39;use strict&#39;;

  log(&#39;0&#39; == 0); // true
  log(&#39;&#39; == false); // true
  log(&#39;1&#39; == true); // true
  log(null == undefined); // true

  let x = {
    valueOf: function() {
      return &#39;X&#39;;
    }
  };

  log(x == &#39;X&#39;);

}(window.console.log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="等同-和严格等-的区别" tabindex="-1"><a class="header-anchor" href="#等同-和严格等-的区别" aria-hidden="true">#</a> 等同== 和严格等===的区别</h3><ul><li>==， 两边值类型不同的时候，要先进行类型转换，再比较。</li><li>===，不做类型转换，类型不同的一定不等。</li></ul><p>==等同操作符</p><ul><li>如果两个值具有相同类型，会进行=<mark>比较，返回</mark>=的比较值</li><li>如果两个值不具有相同类型，也有可能返回true</li><li>如果一个值是null另一个值是undefined，返回true</li><li>如果一个值是string另个是number，会把string转换成number再进行比较</li><li>如果一个值是true，会把它转成1再比较，false会转成0</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log( false == null )      // false
console.log( false == undefined ) // false
console.log( false == 0 )         // true
console.log( false == &#39;&#39; )        // true
console.log( false == NaN )       // false

console.log( null == undefined ) // true
console.log( null == 0 )         // false
console.log( null == &#39;&#39; )        // false
console.log( null == NaN )       // false

console.log( undefined == 0)   // false
console.log( undefined == &#39;&#39;)  // false
console.log( undefined == NaN) // false

console.log( 0 == &#39;&#39; )  // true
console.log( 0 == NaN ) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下==</p><ul><li>false 除了和自身比较为 true 外，和 0，&quot;&quot; 比较也为 true</li><li>null 只和 undefined 比较时为 true， 反过来 undefined 也仅和 null 比较为 true，没有第二个</li><li>0 除了和 false 比较为 true，还有空字符串 &#39;&#39;&quot; 和空数组 []</li><li>空字符串 &#39;&#39; 除了和 false 比较为 true，还有一个数字 0</li></ul><blockquote><p>==, &gt;, &lt;, +, -, ... 这些操作符所造成的隐式类型转换都是无副作用的，它不会改变变量本身保存的值。，但是，如果你覆写某个对象的 <code>valueOf/toString</code>的话，==就会产生副作用.</p></blockquote><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.valueOf = function() {
  this[0]++;
  return this;
}
let x = [1, 2, 3];
x == 0;
console.log(x);   // [2, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>===操作符：</p><ul><li>要是两个值类型不同，返回false</li><li>要是两个值都是number类型，并且数值相同，返回true</li><li>要是两个值都是stirng，并且两个值的String内容相同，返回true</li><li>要是两个值都是true或者都是false，返回true</li><li>要是两个值都是指向相同的Object，Arraya或者function，返回true</li><li>要是两个值都是null或者都是undefined，返回true</li></ul><h2 id="真假判断" tabindex="-1"><a class="header-anchor" href="#真假判断" aria-hidden="true">#</a> 真假判断</h2><ul><li>js中以下内容为假：</li><li>false</li><li>null</li><li>undefined</li><li>0</li><li>&#39;&#39; (空字符串)</li><li>NaN</li></ul><h2 id="设置默认参数" tabindex="-1"><a class="header-anchor" href="#设置默认参数" aria-hidden="true">#</a> 设置默认参数</h2><p>辑操作符 || 和 &amp;&amp; 也可被用来返回布尔值。如果操作对象为非布尔对象，那每个表达式将会被自左向右地做真假判断。基于此操作，最终总有一个表达式被返回回来。这在变量赋值时，是可以用来简化你的代码的。例如:如果x不存在且y不存在，x=1；如果x存在y存在，x = y</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(!x) {
  if(!y) {
    x = 1;
  } else {
    x = y;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> x = x || y || 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一小技巧经常用来给方法设定默认的参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(log){
  &#39;use strict&#39;;

  function multiply(a, b) {
    a = a || 1;
    b = b || 1;

    log(&#39;Result &#39; + a * b);
  }

  multiply(); // Result 1
  multiply(10); // Result 10
  multiply(3, NaN); // Result 3
  multiply(9, 5); // Result 45

}(window.console.log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不使用eval-函数" tabindex="-1"><a class="header-anchor" href="#不使用eval-函数" aria-hidden="true">#</a> 不使用eval()函数</h2><p>就如eval的字面意思来说，恶魔，使用eval()函数会带来安全隐患。 eval()函数的作用是返回任意字符串，当作js代码来处理。</p><h2 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h2><p>只在对象构造器、方法和在设定的闭包中使用 this 关键字。this 的语义在此有些误导。它时而指向全局对象（大多数时），时而指向调用者的定义域（在 eval 中），时而指向 DOM 树中的某一节点（当用事件处理绑定到 HTML 属性上时），时而指向一个新创建的对象（在构造器中），还时而指向其它的一些对象（如果函数被 call() 和 apply() 执行和调用时）。</p><p>正因为它是如此容易地被搞错，请限制它的使用场景：</p><ul><li>在构造函数中</li><li>在对象的方法中（包括由此创建出的闭包内）</li></ul><h2 id="首选函数式风格" tabindex="-1"><a class="header-anchor" href="#首选函数式风格" aria-hidden="true">#</a> 首选函数式风格</h2><p>函数式编程让你可以简化代码并缩减维护成本，因为它容易复用，又适当地解耦和更少的依赖。</p><p>接下来的例子中，在一组数字求和的同一问题上，比较了两种解决方案。第一个例子是经典的程序处理，而第二个例子则是采用了函数式编程和 ECMA Script 5.1 的数组方法。 不推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(log){
  &#39;use strict&#39;;

  let arr = [10, 3, 7, 9, 100, 20],
      sum = 0,
      i;


  for(i = 0; i &lt; arr.length; i++) {
    sum += arr[i];
  }

  log(&#39;The sum of array &#39; + arr + &#39; is: &#39; + sum)

}(window.console.log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐(函数式编程)：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(log){
  &#39;use strict&#39;;

  let arr = [10, 3, 7, 9, 100, 20];

  let sum = arr.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }, 0);

  log(&#39;The sum of array &#39; + arr + &#39; is: &#39; + sum);

}(window.console.log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改内建对象的原型链" tabindex="-1"><a class="header-anchor" href="#修改内建对象的原型链" aria-hidden="true">#</a> 修改内建对象的原型链</h2><p>修改内建的诸如 <code>Object.prototype</code> 和 <code>Array.prototype</code> 是被严厉禁止的。修改其它的内建对象比如 <code>Function.prototype</code>，虽危害没那么大，但始终还是会导致在开发过程中难以 debug 的问题，应当也要避免。</p><h2 id="三元条件判断-if-的快捷方法" tabindex="-1"><a class="header-anchor" href="#三元条件判断-if-的快捷方法" aria-hidden="true">#</a> 三元条件判断（if 的快捷方法）</h2><p>用三元操作符分配或返回语句。在比较简单的情况下使用，避免在复杂的情况下使用。没人愿意用 10 行三元操作符把自己的脑子绕晕。 不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(x === 10) {
  return &#39;valid&#39;;
} else {
  return &#39;invalid&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return x === 10 ? &#39;valid&#39; : &#39;invalid&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="jshint" tabindex="-1"><a class="header-anchor" href="#jshint" aria-hidden="true">#</a> JSHint</h1><p>在js规范中，有很多规范都是样式上的规范而不是逻辑上的规范，比如尽量使用<code>===</code>而不是<code>==</code>，我们可以使用JSHint或者JSLint，Javascript代码验证工具，这种工具可以检查你的代码并提供相关的代码改进意见。我个人使用的是JSHint，所以就以这个为例</p><h2 id="webstorm内置jshint" tabindex="-1"><a class="header-anchor" href="#webstorm内置jshint" aria-hidden="true">#</a> webstorm内置JSHint</h2><p>对于ws爱好者来说，我没有用过其他的编译器，ws基本上能满足你的所有需求（最新的ws集成了vue）。 在Settings =&gt; language &amp; frameworks =&gt; JavaScript =&gt; Code Quality Tolls =&gt; JSHint</p><p><img src="https://user-gold-cdn.xitu.io/2017/5/30/7e7984a9e668c6d03b9d2fe0ab8f9bd2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="webstorm中的jshint">webstorm中的jshint</p><p>官方文档</p><table><thead><tr><th>名称</th><th>含义</th></tr></thead><tbody><tr><td>curly</td><td>循环或者条件语句必须使用花括号包住</td></tr><tr><td>eqeqeq</td><td>使用强制等===</td></tr><tr><td>newcap</td><td>对于首字母大写的函数（声明的类），强制使用new</td></tr><tr><td>noarg</td><td>禁用arguments.caller和arguments.callee</td></tr><tr><td>sub</td><td>对于属性使用aaa.bbb而不是aaa[&#39;bbb&#39;]</td></tr><tr><td>undef</td><td>查找所有未定义的变量</td></tr><tr><td>boss</td><td>查找类似与if(a = 0)这样的代码</td></tr><tr><td>node</td><td>指定运行环境为node</td></tr><tr><td>strict</td><td>必须使用严格模式</td></tr><tr><td>asi</td><td>允许省略分号</td></tr><tr><td>bitwise</td><td>禁止使用位运算符，比如经常把&amp;&amp;写错&amp; 规避此错误</td></tr><tr><td>jquery</td><td>定义全局暴露的jQuery库</td></tr><tr><td>evil</td><td>禁止使用eval</td></tr><tr><td>maxdepth</td><td>嵌套的最大深度</td></tr><tr><td>maxparams</td><td>参数的最大个数</td></tr></tbody></table><h1 id="css规范" tabindex="-1"><a class="header-anchor" href="#css规范" aria-hidden="true">#</a> css规范</h1><h2 id="id和class的命名" tabindex="-1"><a class="header-anchor" href="#id和class的命名" aria-hidden="true">#</a> id和class的命名</h2><p>ID和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称 不推荐 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.fw-800 {
  font-weight: 800;
}

.red {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.heavy {
  font-weight: 800;
}

.important {
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合理的使用id" tabindex="-1"><a class="header-anchor" href="#合理的使用id" aria-hidden="true">#</a> 合理的使用ID</h2><p>一般情况下ID不应该被用于样式，并且ID的权重很高，所以不使用ID解决样式的问题，而是使用class 不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#content .title {
  font-size: 2em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.content .title {
  font-size: 2em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css选择器中避免使用标签名" tabindex="-1"><a class="header-anchor" href="#css选择器中避免使用标签名" aria-hidden="true">#</a> css选择器中避免使用标签名</h2><p>从结构、表现、行为分离的原则来看，应该尽量避免css中出现HTML标签，并且在css选择器中出现标签名会存在潜在的问题。</p><h2 id="使用子选择器" tabindex="-1"><a class="header-anchor" href="#使用子选择器" aria-hidden="true">#</a> 使用子选择器</h2><p>很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的区别）。 有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。 然而，在任何情况下，这是一个非常不好的做法。 如果你不写很通用的，需要匹配到DOM末端的选择器， 你应该总是考虑直接子选择器。 不推荐:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.content .title {
  font-size: 2rem;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.content &gt; .title {
  font-size: 2rem;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尽量使用缩写属性" tabindex="-1"><a class="header-anchor" href="#尽量使用缩写属性" aria-hidden="true">#</a> 尽量使用缩写属性</h2><p>尽量使用缩写属性对于代码效率和可读性是很有用的，比如font属性。 不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0后面不带单位" tabindex="-1"><a class="header-anchor" href="#_0后面不带单位" aria-hidden="true">#</a> 0后面不带单位</h2><p>省略0后面的单位， 不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>padding-bottom: 0px;
margin: 0em;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>padding-bottom: 0;
margin: 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性格式" tabindex="-1"><a class="header-anchor" href="#属性格式" aria-hidden="true">#</a> 属性格式</h2><ul><li>为了保证一致性和可扩展性，每个声明应该用分号结束，每个声明换行。</li><li>属性名的冒号后使用一个空格。出于一致性的原因， 属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。</li><li>每个选择器和属性声明总是使用新的一行。</li><li>属性选择器或属性值用双引号（””），而不是单引号（”）括起来。</li><li>URI值（url()）不要使用引号。</li></ul><p>作为最佳实践，我们应该遵循以下顺序（应该按照下表的顺序）：</p><p>结构性属性：</p><ol><li>display</li><li>position, left, top, right etc.</li><li>overflow, float, clear etc.</li><li>margin, padding</li></ol><p>表现性属性：</p><ul><li>background, border etc.</li><li>font, text</li></ul><p>不推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> .box {
  font-family: &#39;Arial&#39;, sans-serif;
  border: 3px solid #ddd;
  left: 30%;
  position: absolute;
  text-transform: uppercase;
  background-color: #eee;
  right: 30%;
  isplay: block;
  font-size: 1.5rem;
  overflow: hidden;
  padding: 1em;
  margin: 1em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
  display: block;
  position: absolute;
  left: 30%;
  right: 30%;
  overflow: hidden;
  margin: 1em;
  padding: 1em;
  background-color: #eee;
  border: 3px solid #ddd;
  font-family: &#39;Arial&#39;, sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,154);function h(p,x){const l=v("ExternalLinkIcon");return t(),s("div",null,[u,o,a("more"),m,e("p",null,[i("函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 "),e("a",b,[i("javadoc(百度百科)"),r(l)]),i(" 语法：")]),g])}const q=d(c,[["render",h],["__file","frontend-naming-convention.html.vue"]]);export{q as default};

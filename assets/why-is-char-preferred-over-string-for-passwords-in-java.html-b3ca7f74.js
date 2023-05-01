import{_ as s,Y as n,Z as o,a1 as r,a2 as e,a0 as t,$ as h,G as i}from"./framework-ae46ee38.js";const c={},d=h('<h1 id="为什么在java中存放密码更倾向于char-而不是string" tabindex="-1"><a class="header-anchor" href="#为什么在java中存放密码更倾向于char-而不是string" aria-hidden="true">#</a> 为什么在java中存放密码更倾向于char[]而不是String</h1><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>在Swing中，password字段有一个getPassword()方法（返回char[]），而不是通常的getText()方法(返回String字符串)。同样的，我看到一个建议说不要使用字符串处理密码。 为什么在涉及passwords时，都说字符串会对安全构成威胁？感觉使用char[]不是那么的方便。</p><h3 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h3><p>String是不可变的。虽然String加载密码之后可以把这个变量扔掉，但是字符串并不会马上被GC回收，一但进程在GC执行到这个字符串之前被dump，dump出的的转储中就会含有这个明文的字符串。那如果我去“修改”这个字符串，比如把它赋一个新值，那么是不是就没有这个问题了？答案是否定的，因为String本身是不可修改的，任何基于String的修改函数都是返回一个新的字符串，原有的还会在内存里。</p><p>然而对于数组，你可以在抛弃它之前直接修改掉它里面的内容或者置为乱码，密码就不会存在了。但是如果你什么也不做直接交给gc的话，也会存在上面一样的问题。</p><p>所以，这是一个安全性的问题--但是，即使使用char[]也仅仅是降低了攻击者攻击的机会，而且仅仅对这种特定的攻击有效。</p>',7),p=r("strong",null,"stackoverflow链接",-1),l={href:"http://stackoverflow.com/questions/8881291/why-is-char-preferred-over-string-for-passwords-in-java",target:"_blank",rel:"noopener noreferrer"},_=r("strong",null,"知乎上也有相关讨论",-1),f={href:"https://www.zhihu.com/question/36734157",target:"_blank",rel:"noopener noreferrer"};function w(g,u){const a=i("ExternalLinkIcon");return n(),o("div",null,[d,r("p",null,[p,e("： "),r("a",l,[e("http://stackoverflow.com/questions/8881291/why-is-char-preferred-over-string-for-passwords-in-java"),t(a)])]),r("p",null,[_,e("： "),r("a",f,[e("https://www.zhihu.com/question/36734157"),t(a)])])])}const m=s(c,[["render",w],["__file","why-is-char-preferred-over-string-for-passwords-in-java.html.vue"]]);export{m as default};

import{_ as a,Y as i,Z as n,a3 as s,$ as e}from"./framework-ae46ee38.js";const d={},r=e(`<h1 id="javascript-开发人员需要知道的简写技巧" tabindex="-1"><a class="header-anchor" href="#javascript-开发人员需要知道的简写技巧" aria-hidden="true">#</a> JavaScript 开发人员需要知道的简写技巧</h1><h2 id="初级篇" tabindex="-1"><a class="header-anchor" href="#初级篇" aria-hidden="true">#</a> 初级篇</h2><h3 id="_1、三目运算符" tabindex="-1"><a class="header-anchor" href="#_1、三目运算符" aria-hidden="true">#</a> 1、三目运算符</h3><p>下面是一个很好的例子，将一个完整的 if 语句，简写为一行代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> answer<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  answer <span class="token operator">=</span> <span class="token string">&quot;greater than 10&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  answer <span class="token operator">=</span> <span class="token string">&quot;less than 10&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p>`,6),l=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> answer <span class="token operator">=</span> x <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&quot;greater than 10&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;less than 10&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、循环语句" tabindex="-1"><a class="header-anchor" href="#_2、循环语句" aria-hidden="true">#</a> 2、循环语句</h3><p>当使用纯 JavaScript（不依赖外部库，如 jQuery 或 lodash）时，下面的简写会非常有用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> allImgs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简写为:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>for (let index of allImgs)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是遍历数组 forEach 的简写示例：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function logArrayElements(element, index, array) {
  console.log(&quot;a[&quot; + index + &quot;] = &quot; + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、声明变量" tabindex="-1"><a class="header-anchor" href="#_3、声明变量" aria-hidden="true">#</a> 3、声明变量</h3><p>在函数开始之前，对变量进行赋值是一种很好的习惯。在申明多个变量时：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let x;
let y;
let z = 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以简写为:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let x, y, z=3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、if-语句" tabindex="-1"><a class="header-anchor" href="#_4、if-语句" aria-hidden="true">#</a> 4、if 语句</h3><p>使用 if 进行判断时可以省略赋值运算符</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>if(likeJavaScript===true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简写为:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>if(likeJavaScipt)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、十进制数" tabindex="-1"><a class="header-anchor" href="#_5、十进制数" aria-hidden="true">#</a> 5、十进制数</h3><p>可以使用科学计数法来代替较大的数据，如可以将 10000000 简写为 1e7。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>for (let i = 0; i &lt; 10000; i++) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简写为:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>for (let i = 0; i &lt; 1e7; i++) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、多行字符串" tabindex="-1"><a class="header-anchor" href="#_6、多行字符串" aria-hidden="true">#</a> 6、多行字符串</h3><p>如果需要在代码中编写多行字符串，就像下面这样：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const lorem = &#39;Lorem ipsum dolor sit amet, consectetur\\n\\t&#39;
    + &#39;adipisicing elit, sed do eiusmod tempor incididunt\\n\\t&#39;
    + &#39;ut labore et dolore magna aliqua. Ut enim ad minim\\n\\t&#39;
    + &#39;veniam, quis nostrud exercitation ullamco laboris\\n\\t&#39;
    + &#39;nisi ut aliquip ex ea commodo consequat. Duis aute\\n\\t&#39;
    + &#39;irure dolor in reprehenderit in voluptate velit esse.\\n\\t&#39;

但是还有一个更简单的方法，只使用引号：


const lorem = \`Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.\\\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级篇" tabindex="-1"><a class="header-anchor" href="#高级篇" aria-hidden="true">#</a> 高级篇</h2><h3 id="_1、变量赋值" tabindex="-1"><a class="header-anchor" href="#_1、变量赋值" aria-hidden="true">#</a> 1、变量赋值</h3><p>当将一个变量的值赋给另一个变量时，首先需要确保原值不是 null、未定义的或空值。</p><p>可以通过编写一个包含多个条件的判断语句来实现：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>if (variable1 !== null || variable1 !== undefined || variable1 !== &#39;&#39;) {
     let variable2 = variable1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者简写为以下的形式：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const variable2 = variable1  || &#39;new&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以将下面的代码粘贴到 es6console 中，自己测试：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let variable1;
let variable2 = variable1  || &#39;&#39;;
console.log(variable2 === &#39;&#39;); // prints true
variable1 = &#39;foo&#39;;
variable2 = variable1  || &#39;&#39;;
console.log(variable2); // prints foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、默认值赋值" tabindex="-1"><a class="header-anchor" href="#_2、默认值赋值" aria-hidden="true">#</a> 2、默认值赋值</h3><p>如果预期参数是 null 或未定义，则不需要写六行代码来分配默认值。我们可以只使用一个简短的逻辑运算符，只用一行代码就能完成相同的操作。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let dbHost;
if (p<wbr>rocess.env.DB_HOST) {
  dbHost = p<wbr>rocess.env.DB_HOST;
} else {
  dbHost = &#39;localhost&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const dbHost = p<wbr>rocess.env.DB_HOST || &#39;localhost&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、对象属性" tabindex="-1"><a class="header-anchor" href="#_3、对象属性" aria-hidden="true">#</a> 3、对象属性</h3><p>ES6 提供了一个很简单的办法，来分配属性的对象。如果属性名与 key 名相同，则可以使用简写。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const obj = { x:x, y:y };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const obj = { x, y };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、箭头函数" tabindex="-1"><a class="header-anchor" href="#_4、箭头函数" aria-hidden="true">#</a> 4、箭头函数</h3><p>经典函数很容易读写，但是如果把它们嵌套在其它函数中进行调用时，整个函数就会变得有些冗长和混乱。这时候可以使用箭头函数来简写：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function sayHello(name) {
  console.log(&#39;Hello&#39;, name);
}

setTimeout(function() {
  console.log(&#39;Loaded&#39;)
}, 2000);

list.forEach(function(item) {
  console.log(item);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>sayHello = name =&gt; console.log(&#39;Hello&#39;, name);
setTimeout(() =&gt; console.log(&#39;Loaded&#39;), 2000);
list.forEach(item =&gt; console.log(item));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、隐式返回值" tabindex="-1"><a class="header-anchor" href="#_5、隐式返回值" aria-hidden="true">#</a> 5、隐式返回值</h3><p>返回值是我们通常用来返回函数最终结果的关键字。只有一个语句的箭头函数，可以隐式返回结果（函数必须省略括号（{ }），以便省略返回关键字）。</p><p>要返回多行语句（例如对象文本），需要使用（）而不是{ }来包裹函数体。这样可以确保代码以单个语句的形式进行求值。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function calcCircumference(diameter) {
  return Math.PI * diameter
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>calcCircumference = diameter =&gt; (
  Math.PI * diameter;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、默认参数值" tabindex="-1"><a class="header-anchor" href="#_6、默认参数值" aria-hidden="true">#</a> 6、默认参数值</h3><p>可以使用 if 语句来定义函数参数的默认值。ES6 中规定了可以在函数声明中定义默认值。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function volume(l, w, h) {
  if (w === undefined)
    w = 3;
  if (h === undefined)
    h = 4;
  return l * w * h;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>volume = (l, w = 3, h = 4 ) =&gt; (l * w * h);
volume(2) //output: 24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、模板字符串" tabindex="-1"><a class="header-anchor" href="#_7、模板字符串" aria-hidden="true">#</a> 7、模板字符串</h3><p>过去我们习惯了使用“+”将多个变量转换为字符串，但是有没有更简单的方法呢？</p><p>ES6 提供了相应的方法，我们可以使用反引号和 $ { } 将变量合成一个字符串。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const welcome = &#39;You have logged in as &#39; + first + &#39; &#39; + last + &#39;.&#39;
const db = &#39;http://&#39; + host + &#39;:&#39; + port + &#39;/&#39; + database;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const welcome = \`You have logged in as \${first} \${last}\`;
const db = \`http://\${host}:\${port}/\${database}\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、解构赋值" tabindex="-1"><a class="header-anchor" href="#_8、解构赋值" aria-hidden="true">#</a> 8、解构赋值</h3><p>解构赋值是一种表达式，用于从数组或对象中快速提取属性值，并赋给定义的变量。</p><p>在代码简写方面，解构赋值能达到很好的效果。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const observable = require(&#39;mobx/observable&#39;);
const action = require(&#39;mobx/action&#39;);
const runInAction = require(&#39;mobx/runInAction&#39;);
const store = this.props.store;
const form = this.props.form;
const loading = this.props.loading;
const errors = this.props.errors;
const entity = this.props.entity;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>import { observable, action, runInAction } from &#39;mobx&#39;;
const { store, form, loading, errors, entity } = this.props;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至可以指定自己的变量名：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const { store, form, loading, errors, entity:contact } = this.props;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9、展开运算符" tabindex="-1"><a class="header-anchor" href="#_9、展开运算符" aria-hidden="true">#</a> 9、展开运算符</h3><p>展开运算符是在 ES6 中引入的，使用展开运算符能够让 JavaScript 代码更加有效和有趣。</p><p>使用展开运算符可以替换某些数组函数。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice( )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// joining arrays
const odd = [1, 3, 5 ];
const nums = [2 ,4 , 6, ...odd];
console.log(nums); // [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 concat( ) 功能不同的是，用户可以使用扩展运算符在任何一个数组中插入另一个数组。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const odd = [1, 3, 5 ];
const nums = [2, ...odd, 4 , 6];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将展开运算符和 ES6 解构符号结合使用：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const { a, b, ...z } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a) // 1
console.log(b) // 2
console.log(z) // { c: 3, d: 4 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、强制参数" tabindex="-1"><a class="header-anchor" href="#_10、强制参数" aria-hidden="true">#</a> 10、强制参数</h3><p>默认情况下，如果不向函数参数传值，那么 JavaScript 会将函数参数设置为未定义。其它一些语言则会发出警告或错误。要执行参数分配，可以使用 if 语句抛出未定义的错误，或者可以利用“强制参数”。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function foo(bar) {
if(bar === undefined) {
throw new Error(&#39;Missing parameter!&#39;);
}
return bar;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>mandatory = ( ) =&gt; {
throw new Error(&#39;Missing parameter!&#39;);
}
foo = (bar = mandatory( )) =&gt; {
return bar;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、array-find" tabindex="-1"><a class="header-anchor" href="#_11、array-find" aria-hidden="true">#</a> 11、Array.find</h3><p>如果你曾经编写过普通 JavaScript 中的 find 函数，那么你可能使用了 for 循环。在 ES6 中，介绍了一种名为 find（）的新数组函数，可以实现 for 循环的简写。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const pets = [
{ type: &#39;Dog&#39;, name: &#39;Max&#39;},
{ type: &#39;Cat&#39;, name: &#39;Karl&#39;},
{ type: &#39;Dog&#39;, name: &#39;Tommy&#39;},
]
function findDog(name) {
for(let i = 0; i&lt;pets.length; ++i) {
if(pets[i].type === &#39;Dog&#39; &amp;&amp; pets[i].name === name) {
return pets[i];
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>pet = pets.find(pet =&gt; pet.type ===&#39;Dog&#39; &amp;&amp; pet.name === &#39;Tommy&#39;);
console.log(pet); // { type: &#39;Dog&#39;, name: &#39;Tommy&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12、object-key" tabindex="-1"><a class="header-anchor" href="#_12、object-key" aria-hidden="true">#</a> 12、Object [key]</h3><p>虽然将 foo.bar 写成 foo [&#39;bar&#39;] 是一种常见的做法，但是这种做法构成了编写可重用代码的基础。</p><p>请考虑下面这个验证函数的简化示例：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function validate(values) {
if(!values.first)
return false;
if(!values.last)
return false;
return true;
}
console.log(validate({first:&#39;Bruce&#39;,last:&#39;Wayne&#39;})); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的函数完美的完成验证工作。但是当有很多表单，则需要应用验证，此时会有不同的字段和规则。如果可以构建一个在运行时配置的通用验证函数，会是一个好选择。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// object validation rules
const schema = {
first: {
required:true
},
last: {
required:true
}
}

// universal validation function
const validate = (schema, values) =&gt; {
for(field in schema) {
if(schema[field].required) {
if(!values[field]) {
return false;
}
}
}
return true;
}
console.log(validate(schema, {first:&#39;Bruce&#39;})); // false
console.log(validate(schema, {first:&#39;Bruce&#39;,last:&#39;Wayne&#39;})); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有了这个验证函数，我们就可以在所有窗体中重用，而无需为每个窗体编写自定义验证函数。</p><h3 id="_13、双位操作符" tabindex="-1"><a class="header-anchor" href="#_13、双位操作符" aria-hidden="true">#</a> 13、双位操作符</h3><p>位操作符是 JavaScript 初级教程的基本知识点，但是我们却不常使用位操作符。因为在不处理二进制的情况下，没有人愿意使用 1 和 0。</p><p>但是双位操作符却有一个很实用的案例。你可以使用双位操作符来替代 Math.floor( )。双否定位操作符的优势在于它执行相同的操作运行速度更快。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>Math.floor(4.9) === 4 //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简写为：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>~~4.9 === 4 //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JavaScript 开发工具推荐</p><p>SpreadJS 纯前端表格控件是基于 HTML5 的 JavaScript 电子表格和网格功能控件，提供了完备的公式引擎、排序、过滤、输入控件、数据可视化、Excel 导入/导出等功能，适用于 .NET、Java 和移动端等各平台在线编辑类 Excel 功能的表格程序开发。</p>`,110);function c(v,t){return i(),n("div",null,[r,s("more"),l])}const o=a(d,[["render",c],["__file","simple-js.html.vue"]]);export{o as default};

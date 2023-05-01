import{_ as i,Y as n,Z as l,a1 as e,a2 as a,a0 as s,$ as t,G as r}from"./framework-ae46ee38.js";const c={},v=e("h1",{id:"adb命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adb命令","aria-hidden":"true"},"#"),a(" adb命令")],-1),b=e("h1",{id:"adb命令-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adb命令-1","aria-hidden":"true"},"#"),a(" adb命令")],-1),u={href:"https://blog.csdn.net/Next_Second/article/details/73648754",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb version 查看adb版本
adb devices 查看连接设备
adb connect &lt;android_ip&gt;    连接android设备（需要在同一网段下）
adb kill-server 杀死adb 服务
adb start-server 启动adb服务
adb reboot 重启手机
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用相关" tabindex="-1"><a class="header-anchor" href="#应用相关" aria-hidden="true">#</a> 应用相关</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb shell pm list packages    显示所有应用信息
adb shell pm list packages -s    显示系统应用信息
adb shell pm list packages -3   显示第三方应用信息
adb shell pm list permissions -d -g    显示权限信息
adb shell pm clear &lt;package_name&gt;    清除数据
adb shell pm install &lt;package_name&gt;    安装应用
adb shell pm install -r -r &lt;package_name&gt;    保留数据和缓存文件，重新安装apk
adb shell pm uninstall &lt;package_name&gt;    卸载应用(与adb uninstall相同)

adb install &lt;package_name&gt;    安装应用
adb install -r &lt;package_name&gt;    保留数据和缓存文件，重新安装apk
adb uninstall &lt;package_name&gt;    卸载应用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取系统信息" tabindex="-1"><a class="header-anchor" href="#获取系统信息" aria-hidden="true">#</a> 获取系统信息</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb shell cat /proc/cpuinfo     显示cpu信息
adb get-serialno    获取序列号
adb shell  cat /sys/class/net/wlan0/address    获取mac地址
adb shell getprop ro.product.model    获取设备型号
adb shell wm size    查看屏幕分辨率
adb shell wm density    查看屏幕密度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="log相关" tabindex="-1"><a class="header-anchor" href="#log相关" aria-hidden="true">#</a> log相关</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb logcat -v time    带时间戳的log
adb logcat -b &lt;buffer&gt;    查看不同类型的log，如main,system,radio,events,crash,all.默认为main log
adb logcat -c    清除log
adb logcat | grep -i &quot;str&quot;    忽略大小写筛选指定字符串log
adb logcat | grep -iE &quot;str1|str2|str3&quot;    筛选多个字符串
adb logcat &gt; log.txt    打印log输入到文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fastboot" tabindex="-1"><a class="header-anchor" href="#fastboot" aria-hidden="true">#</a> fastboot</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb reboot-bootloader
fastboot flash boot boot.img
fastboot flash recovery recovery.img
fastboot flash android system.img
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="截屏录屏" tabindex="-1"><a class="header-anchor" href="#截屏录屏" aria-hidden="true">#</a> 截屏录屏</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>截屏：
adb shell screencap -p &lt;output_file&gt;    截取屏幕，并设置图片存储路径
adb pull &lt;output_file&gt; .    拉取该截图到PC
adb shell rm &lt;output_file&gt;    删除截图文件
eg.
adb shell screencap -p /sdcard/screen.png

录屏：
adb shell screenrecord &lt;output_file&gt; 录屏
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="am相关" tabindex="-1"><a class="header-anchor" href="#am相关" aria-hidden="true">#</a> am相关</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动Activity:
adb shell am start -n &lt;package_name&gt;/&lt;package_name&gt;.&lt;activity_name&gt;
eg.
adb shell am start -n com.example.hello/com.example.hello.MainActivity

启动Service:
adb shell am startservice -n &lt;package_name&gt;/&lt;package_name&gt;.&lt;service_name&gt;    启动service
eg.
adb shell am startservice -n com.example.test/com.example.test.TestService

发送广播:
adb shell am broadcast -a &lt;action&gt;    发送广播

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络相关" tabindex="-1"><a class="header-anchor" href="#网络相关" aria-hidden="true">#</a> 网络相关</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb shell netcfg    查看设备的 ip 地址
adb shell netstat    查看设备的端口号信息

# 获取属性
adb shell getprop [prop_name]    查看属性信息
adb shell setprop &lt;prop_name&gt; &lt;value&gt;    设置属性值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adb安装apk" tabindex="-1"><a class="header-anchor" href="#adb安装apk" aria-hidden="true">#</a> adb安装apk</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb install -t .\\app-debug.apk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="adb传输文件" tabindex="-1"><a class="header-anchor" href="#adb传输文件" aria-hidden="true">#</a> adb传输文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2，输入: adb pull 手机存储路径  电脑路径
adb pull  /sdcard/xxx  /Users/xxxx/ xxx.tx
二 从电脑端向手机复制文件
输入: adb push 电脑路径  手机存储路径  
 adb push  /Users/xxxx/xxx.txt   /sdcard/xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function o(h,g){const d=r("ExternalLinkIcon");return n(),l("div",null,[v,b,e("p",null,[e("a",u,[a("https://blog.csdn.net/Next_Second/article/details/73648754"),s(d)])]),m])}const x=i(c,[["render",o],["__file","adb.html.vue"]]);export{x as default};

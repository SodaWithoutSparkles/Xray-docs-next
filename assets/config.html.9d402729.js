import{r as n,o as s,c as a,a as p,b as t,w as e,F as o,e as r,d as u}from"./app.fb3d458c.js";const l={},c=p("h1",{id:"configure-and-run",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#configure-and-run","aria-hidden":"true"},"#"),r(" Configure and Run")],-1),i=r("After "),b=r("downloading and installing Xray"),k=r(", you need to configure it."),d=r("For demonstration purposes, only a simple configuration method is introduced here. For more templates, please refer to "),m={href:"https://github.com/XTLS/Xray-examples",target:"_blank",rel:"noopener noreferrer"},q=r("Xray-examples"),y=r("."),g=r("If you need to set up more advanced features, please refer to the relevant instructions in the more detailed "),f=r("configuration file"),h=r("."),v=u('<h2 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration" aria-hidden="true">#</a> Server Configuration</h2><p>You need a server outside the firewall to run server-side Xray. The configuration is as follows:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// The port on which the server is listening</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>In server configuration, it is necessary to ensure that the <code>id</code> and port are consistent with the client in order to establish a normal connection.</p><h2 id="client-configuration" tabindex="-1"><a class="header-anchor" href="#client-configuration" aria-hidden="true">#</a> Client Configuration</h2><p>On your PC (or phone), you need to run Xray with the following configuration:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span> <span class="token comment">// SOCKS代理端口，需要在浏览器中配置代理并指向该端口</span>\n      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;server&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 服务器地址，请将其更改为您自己的服务器IP或域名</span>\n            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// 服务器端口</span>\n            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IPOnDemand&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:private&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>The only thing you need to modify in the above configuration is your server&#39;s IP address, which is indicated in the configuration. This configuration will redirect all traffic to your server, except for traffic on the local area network (such as the access router).</p><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h2><ul><li>On Windows and macOS, the configuration files are usually named <code>config.json</code>. <ul><li>To start Xray, simply run <code>Xray</code> or <code>Xray.exe</code>.</li></ul></li><li>On Linux, the configuration files are usually located in <code>/etc/xray/</code> or <code>/usr/local/etc/xray/</code>. <ul><li>To start Xray, run the command <code>xray run -c /etc/xray/config.json</code>.</li><li>Alternatively, you can use a tool like systemd to run Xray as a background service.</li></ul></li></ul>',10),x=r("For more detailed instructions, please refer to the "),w=r("Configuration"),X=r(" Document and "),j=r("Layman's Terms"),T=r(".");l.render=function(r,u){const l=n("RouterLink"),C=n("OutboundLink");return s(),a(o,null,[c,p("p",null,[i,t(l,{to:"/en/document/install/"},{default:e((()=>[b])),_:1}),k]),p("p",null,[d,p("a",m,[q,t(C)]),y]),p("p",null,[g,t(l,{to:"/en/config/"},{default:e((()=>[f])),_:1}),h]),v,p("p",null,[x,t(l,{to:"/en/config/"},{default:e((()=>[w])),_:1}),X,t(l,{to:"/en/document/level-0/"},{default:e((()=>[j])),_:1}),T])],64)};export default l;
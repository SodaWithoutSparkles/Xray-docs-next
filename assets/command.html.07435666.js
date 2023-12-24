import{r as e,o as a,c as n,a as s,b as r,w as i,F as l,d as t,e as c}from"./app.94b11f80.js";const d={},o=t('<h1 id="command-parameters" tabindex="-1"><a class="header-anchor" href="#command-parameters" aria-hidden="true">#</a> Command Parameters</h1><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Xray uses Go-style commands and parameters</p></div><h2 id="get-basic-commands" tabindex="-1"><a class="header-anchor" href="#get-basic-commands" aria-hidden="true">#</a> Get Basic Commands</h2><p>You can run <code>xray help</code>to get the most basic usage of all xray, as well as available commands and instructions.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Xray is a platform for building proxies.\n\nUsage:\n\n        xray &lt;command&gt; [arguments]\n\nThe commands are:\n\n        run          Run Xray with config, the default command\n        version      Show current version of Xray\n        api          Call an API in an Xray process\n        tls          TLS tools\n        uuid         Generate UUIDv4 or UUIDv5\n        x25519       Generate key pair for x25519 key exchange\n        wg           Generate key pair for wireguard key exchange\n\nUse &quot;xray help &lt;command&gt;&quot; for more information about a command.\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="xray-run" tabindex="-1"><a class="header-anchor" href="#xray-run" aria-hidden="true">#</a> xray run</h3><p>Specify one or more configuration files and run.</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray run [-c config.json] [-confdir dir]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Run Xray with config, the default command.\n\nThe -config=file, -c=file flags set the config files for\nXray. Multiple assign is accepted.\n\nThe -confdir=dir flag sets a dir with multiple json config\n\nThe -format=json flag sets the format of config files.\nDefault &quot;json&quot;.\n\nThe -test flag tells Xray to test config files only,\nwithout launching the server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="xray-version" tabindex="-1"><a class="header-anchor" href="#xray-version" aria-hidden="true">#</a> xray version</h3><p>Output Xray version, Golang version and other information.</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="xray-api" tabindex="-1"><a class="header-anchor" href="#xray-api" aria-hidden="true">#</a> xray api</h3><p>To call Xray&#39;s gRPC API, it needs to be enabled in the configuration file.</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray api &lt;command&gt; [arguments]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        restartlogger Restart the logger\n        stats         Get statistics\n        statsquery    Query statistics\n        statssys      Get system statistics\n        adi           Add inbounds\n        ado           Add outbounds\n        rmi           Remove inbounds\n        rmo           Remove outbounds\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="xray-tls" tabindex="-1"><a class="header-anchor" href="#xray-tls" aria-hidden="true">#</a> xray tls</h3><p>Some tools related to TLS.</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray tls &lt;command&gt; [arguments]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        cert         Generate TLS certificates\n        ping         Ping the domain with TLS handshake\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="xray-uuid" tabindex="-1"><a class="header-anchor" href="#xray-uuid" aria-hidden="true">#</a> xray uuid</h3><p>Generate UUID.</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray uuid\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="xray-x25519" tabindex="-1"><a class="header-anchor" href="#xray-x25519" aria-hidden="true">#</a> xray x25519</h3><p>Generate x25519 key pair。</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray x25519 [-i &quot;(base64.RawURLEncoding)&quot; --std-encoding]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="xray-wg" tabindex="-1"><a class="header-anchor" href="#xray-wg" aria-hidden="true">#</a> xray wg</h3><p>Generate wireguard curve25519 key pair。</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray wg [-i &quot;(base64.StdEncoding)&quot;]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',36),p={class:"custom-container tip"},u=s("p",{class:"custom-container-title"},"Tip",-1),m=s("p",null,[c("When "),s("code",null,"-config"),c(" is not specified, Xray will try to load "),s("code",null,"config.json"),c(" from the following paths:")],-1),b=s("li",null,"Working Directory",-1),g=c("The path specified by "),x=s("code",null,"Xray.location.asset",-1),h=c(" in the "),v=c("environment variable"),f=c(".");d.render=function(t,c){const d=e("RouterLink");return a(),n(l,null,[o,s("div",p,[u,m,s("ul",null,[b,s("li",null,[g,x,h,r(d,{to:"/en/config/features/env.html"},{default:i((()=>[v])),_:1}),f])])])],64)};export default d;

import{r as e,o as a,c as o,b as n,a as r,F as i,e as t,d as s}from"./app.a6578520.js";const c={},l=r("h1",{id:"browser-dialer",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#browser-dialer","aria-hidden":"true"},"#"),t(" Browser Dialer")],-1),d=t(),h=r("h2",{id:"background",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),t(" Background")],-1),u=t("Based on "),b={href:"https://github.com/v2ray/discussion/issues/754#issuecomment-647934994",target:"_blank",rel:"noopener noreferrer"},f=t("an idea from 2020"),p=t(", a concise "),w=r("code",null,"WSS Browser Dialer",-1),y=t(" has been implemented using native "),m=r("code",null,"JS",-1),g=t(", achieving true browser TLS fingerprints and behavioral characteristics. However, "),S=r("code",null,"WSS",-1),v=t(" still has significant issues with "),k=r("code",null,"ALPN",-1),x=t(", so the next step is to forward "),A=r("code",null,"HTTP/2",-1),T=t(" and "),X=r("code",null,"QUIC",-1),W=t(' through the browser."'),B=s('<h2 id="xray-js" tabindex="-1"><a class="header-anchor" href="#xray-js" aria-hidden="true">#</a> Xray &amp; JS</h2><p>A very simple and clever communication mechanism has been created：</p><ul><li>Xray listens on address port <code>A</code> as an <code>HTTP</code> service, and the browser accesses <code>A</code> to load the <code>JS</code> in the webpage.</li><li>The <code>JS</code> actively establishes a WebSocket connection to <code>A</code>. After a successful connection, Xray sends the connection to the channel.</li><li>When a connection needs to be established, Xray receives an available connection from the channel and sends the target URL and optional early data.</li><li>Once the <code>JS</code> successfully connects to the target, it informs Xray and continues to use this conn to bi-directionally forward data. Connection closing behavior is synchronized.</li><li>After the connection is used, it will be closed, but the JS ensures that there is always a new idle connection available.&quot;</li></ul><h2 id="early-data" tabindex="-1"><a class="header-anchor" href="#early-data" aria-hidden="true">#</a> Early data</h2><p>According to the browser&#39;s needs, the early data mechanism has been adjusted as follows:</p>',5),R=r("li",null,[t("The server response header will contain the requested "),r("code",null,"Sec-WebSocket-Protocol"),t(", which also initially obfuscates the length characteristic of the WSS handshake response.")],-1),L=r("li",null,[t("The encoding used for early data for browsers is "),r("code",null,"base64.RawURLEncoding"),t(" instead of "),r("code",null,"StdEncoding"),t(", and the server has made it compatible.")],-1),P=t("In addition, due to "),E={href:"https://github.com/XTLS/Xray-core/pull/375",target:"_blank",rel:"noopener noreferrer"},I=t("Xray-core#375"),J=t(" recommendations for "),C=r("code",null,"?ed=2048",-1),j=t(", this PR also increased server "),D=r("code",null,"MaxHeaderBytes",-1),H=t(" by 4096. "),_=r("s",null,"(Although it seems like it would work without modification.)",-1),F={id:"configuration",tabindex:"-1"},N=r("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#",-1),O=t(" Configuration "),U=s("<p>This is an exploratory process, and the configuration method used when both sides are Xray-core v1.4.1 is as follows:</p><ul><li>Prepare a usable WSS configuration, making sure to fill in the domain name for the address. If you need to specify an IP address, configure DNS or system hosts.</li><li>If browser traffic will also pass through Xray-core, be sure to set this domain name as a direct connection, otherwise it will cause traffic looping.</li><li>Set the environment variable to specify the address port to listen on, such as <code>XRAY_BROWSER_DIALER = 127.0.0.1:8080</code>.</li><li>First run Xray-core, then use any browser to access the specified address port, and you can also check <code>Console</code> and Network with <code>F12</code>.</li><li>The browser will limit the number of WebSocket connections, so it is recommended to enable <code>Mux.Cool</code>.</li></ul>",2);c.render=function(t,s){const c=e("Badge"),q=e("OutboundLink");return a(),o(i,null,[l,n(c,{text:"BETA",type:"warning"}),d,n(c,{text:"v1.4.1+",type:"warning"}),h,r("p",null,[u,r("a",b,[f,n(q)]),p,w,y,m,g,S,v,k,x,A,T,X,W]),B,r("ul",null,[R,L,r("li",null,[P,r("a",E,[I,n(q)]),J,C,j,D,H,_])]),r("h2",F,[N,O,n(c,{text:"v1.4.1",type:"warning"})]),U],64)};export default c;
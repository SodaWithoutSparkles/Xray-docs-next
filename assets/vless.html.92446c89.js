import{r as e,o as t,c as o,a,b as n,F as i,d as r,e as s}from"./app.ad2e24ce.js";const d={},h=r('<h1 id="vless-protocol" tabindex="-1"><a class="header-anchor" href="#vless-protocol" aria-hidden="true">#</a> VLESS Protocol</h1><p>VLESS is a stateless lightweight transmission protocol that can be used as a bridge between Xray clients and servers.</p><h2 id="request-response" tabindex="-1"><a class="header-anchor" href="#request-response" aria-hidden="true">#</a> Request &amp; Response</h2><table><thead><tr><th>1 byte</th><th>16 bytes</th><th>1 byte</th><th>M bytes</th><th>1 byte</th><th>2 bytes</th><th>1 byte</th><th>S bytes</th><th>X bytes</th></tr></thead><tbody><tr><td>Protocol Version</td><td>Equivalent UUID</td><td>Additional Information Length M</td><td>Additional Information ProtoBuf</td><td>Instruction</td><td>Port</td><td>Address Type</td><td>Address</td><td>Request Data</td></tr></tbody></table><table><thead><tr><th>1 Byte</th><th>1 Byte</th><th>N Bytes</th><th>Y Bytes</th></tr></thead><tbody><tr><td>Protocol Version, consistent with the request</td><td>Length of additional information N</td><td>Additional information in ProtoBuf</td><td>Response data</td></tr></tbody></table><p>VLESS had the aforementioned structure as early as the second alpha test version (ALPHA 2), with BETA being the fifth test version.</p>',6),l=s('"'),c=a("code",null,"Response authentication",-1),u=s('" has been replaced with "'),p=a("code",null,"Protocol version",-1),f=s('" and moved to the front, allowing VLESS to upgrade and eliminate the overhead of generating pseudo-random numbers. The obfuscation-related structure has been replaced with "'),m=a("code",null,"Additional information",-1),y=s('" (ProtoBuf) and moved forward, giving the protocol itself scalability, with minimal overhead ('),b={href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"},g=s("gogo/protobuf"),w=s("). If there is no additional information, there is no relevant overhead."),v=a("p",null,'I always thought that "response authentication" was not necessary, and ALPHA replaced crypto/rand with math/rand in order to improve the performance of random number generation, which is no longer needed.',-1),S=a("p",null,'The "Protocol Version" not only serves as "Response Authentication", but also gives VLESS the ability to upgrade the protocol structure seamlessly, bringing infinite possibilities. The "Protocol Version" is 0 in the test version and 1 in the official version. If there are any incompatible protocol structural changes in the future, the version should be upgraded.',-1),T=a("p",null,"The design of VLESS server is switch version, which supports all VLESS versions at the same time. If you need to upgrade the protocol version (which may not happen), it is recommended that the server support it one month in advance, and then change the client after one month. VMess requests also have protocol versions, but their authentication information is outside, and the instruction part is highly coupled and has fixed encryption, which makes the protocol version meaningless inside. The server does not judge it, and the response does not have a protocol version. Trojan's protocol structure does not have a protocol version.",-1),V=a("p",null,"The following is a UUID. I used to think that 16 bytes were a bit long and considered shortening it. However, I later saw that Trojan used 56 printable characters (56 bytes), which completely dispelled this idea. The server needs to verify the UUID every time, so performance is also very important: VLESS's Validator has undergone multiple refactoring/upgrades. Compared with VMess, it is very concise and consumes very few resources. It can support a large number of users at the same time, and its performance is also very strong. The verification speed is extremely fast (sync.Map). API dynamically adds and deletes users, making it more efficient and smooth. https://github.com/XTLS/Xray-core/issues/158",-1),I=a("p",null,'Introducing ProtoBuf is an innovation, which will be explained in detail later. The structure from "instruction" to "address" is currently identical to VMess and also supports Mux.',-1),L=s("Overall, ALPHA 2 to BETA mainly includes: structural evolution, cleaning and integration, performance improvement, and more completeness. All of these are incremental improvements, please refer to "),A={href:"https://github.com/rprx/v2ray-vless/releases",target:"_blank",rel:"noopener noreferrer"},E=s("VLESS Changes"),q=s(" for details."),x=r('<h2 id="protobuf" tabindex="-1"><a class="header-anchor" href="#protobuf" aria-hidden="true">#</a> ProtoBuf</h2><p>It seems that only VLESS supports embedding ProtoBuf, which is a data exchange format that encodes information tightly into binary TLV (Tag Length Value) structures.</p><p>The reason is that I saw an article that said that SS has some drawbacks, such as the lack of a design error reporting mechanism, and the client cannot take further action based on different errors. (But I don&#39;t agree that all errors should be reported, otherwise it can&#39;t prevent active probing. In the next beta version, the server can return a custom string of information.) So I think a scalable structure is important, and in the future, it can also carry dynamic port instructions. Not only the response, but the request also needs a similar structure. I originally planned to design TLV by myself, but then I found that ProtoBuf is the structure, ready-made, and it is completely suitable for this purpose, and the support for various languages is also good.</p><p>Currently, &quot;Additional Information&quot; only has Scheduler and SchedulerV, which are substitutes for MessName and MessSeed. <strong>When you don&#39;t need them, the &quot;Additional Information Length&quot; is 0, so there is no ProtoBuf serialization/deserialization overhead</strong>. Actually, I prefer to call this process &quot;concatenation&quot; because that&#39;s all pb does in principle, and the related overhead is minimal. The concatenated bytes are very compact, similar to ALPHA&#39;s solution, and those who are interested can output and compare them separately.</p><p>To indicate different levels of support for additional information (Addons, which can be understood as plugins and can have many plugins in the future), the next beta version will add &quot;Addon Version&quot; before &quot;Addon Length&quot;. 256-1 = 255 bytes is enough and reasonable (65535 is too much and there may be malicious padding), and only one-tenth of the existing space is used. In the future, there will not be so many addons at the same time, and most of the time there will be no addons at all. If it is not enough, you can upgrade to a newer version of VLESS.</p><p>To reduce logical judgment and other expenses, it is temporarily decided that Addons will not use a multi-level structure. A month ago, there was an idea of &quot;variable protocol format&quot;. PB can shuffle the order, but it is not necessary because the design of modern encryption will not allow bystanders to see that the headers of the two transmissions are the same.</p><p>Below is an introduction to the concepts of Schedulers and Encryption, both of which are optional. One is designed to address issues related to traffic timing, while the other is designed to address cryptographic issues.</p><h2 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> Flow</h2><h3 id="flow-control-formerly-traffic-scheduler" tabindex="-1"><a class="header-anchor" href="#flow-control-formerly-traffic-scheduler" aria-hidden="true">#</a> Flow Control (Formerly Traffic Scheduler)</h3><p>The Flow Control command is carried by ProtoBuf and manages the data section.</p><p>I previously discovered that VMess&#39;s original &quot;metadata obfuscation&quot; feature didn&#39;t provide any meaningful changes in TLS but only decreased performance. Consequently, VLESS has abandoned this feature. Moreover, the term &quot;obfuscation&quot; is often misinterpreted as camouflage, so it has been discarded.</p><p>As for camouflage, if it can&#39;t be an exact match, wouldn&#39;t it be a noticeable characteristic? If it could be an exact match, why not use the intended target for camouflage directly? Initially, I used SSR but found it only provided superficial disguises, fooling operators. Thus, I stopped using it.</p><h4 id="purpose-of-flow-control" tabindex="-1"><a class="header-anchor" href="#purpose-of-flow-control" aria-hidden="true">#</a> Purpose of Flow Control</h4><p>Flow Control influences macro traffic temporal characteristics rather than micro characteristics addressed by encryption. Traffic temporal characteristics can be:</p><ol><li><strong>Protocol-based</strong>, e.g., Socks5 handshake when using Socks5 over TLS. Different traits on TLS are considered different protocols for monitors. Infinite schedulers equate to infinite protocols (reallocating data sent each time).</li><li><strong>Behavior-based</strong>, e.g., loading files, their order, and size when accessing Google&#39;s homepage. Adding another encryption layer cannot effectively conceal this information.</li></ol><p>Schedulers don&#39;t require wrapping like encryption since the header data&#39;s tiny amount is negligible compared to the remaining data.</p><p>BETA 2 is anticipated to introduce two basic schedulers: Zstd compression and dynamic data expansion. Advanced operations will control and distribute at a macro level, but for now, these remain under development.</p><h2 id="encryption" tabindex="-1"><a class="header-anchor" href="#encryption" aria-hidden="true">#</a> Encryption</h2><p>Unlike VMess, which is highly coupled, VLESS allows the server and client to pre-agree on an encryption method, which is only encrypted with an outer layer. This is somewhat similar to using TLS, which does not affect any of the data carried, and can be understood as replacing TLS with pre-agreed encryption at the bottom. Compared with high coupling, this approach is more reasonable and flexible: if there is a security issue with one encryption method, it can be discarded and another one can be used directly, which is very convenient. The VLESS server also allows for different encryption methods to coexist.</p><p>Compared with VMess, VLESS replaces security with encryption and disableInsecureEncryption with decryption, which solves all the problems. Currently, encryption and decryption only accept &quot;none&quot; and cannot be left blank (even if there are connection security checks in the future), as detailed in the VLESS configuration document. Encryption does not need to be moved out one level, firstly because it cannot reuse a lot of code, and secondly because it will affect the control granularity, which will be understood by looking at future applications.</p><p>Encryption supports two types of forms. One type is completely independent and requires an additional password, suitable for private use. The other type combines with the existing UUID for encryption, which is suitable for public use.</p><p>(If the first type of encryption is used and the password is publicly available in some form, such as multiple people sharing it, then a man-in-the-middle attack is not far away.)</p><p>A redesigned dynamic port may be released simultaneously with encryption, and the command is carried by ProtoBuf. The specific implementation and the dynamic port of VMess will also have many differences.</p><p>It is very easy to cash out encrypted currency, which adds an extra layer of writer &amp; reader. BETA 3 is expected to support SS&#39;s aes-128-gcm and chacha20-ietf-poly1305:</p><p>The encryption on the client-side can be filled with &quot;auto: ss_aes-128-gcm_0_123456, ss_chacha20-ietf-poly1305_0_987654&quot;. Auto will choose the most suitable one for the current machine, 0 represents the beta version, and the last one is the password. The decryption on the server-side is also filled in a similar way, and each decryption attempt will be made when the request is received.</p><p>Not all combinations need to be tried one by one: VMess encryption is divided into three parts. The first part is the authentication information, which combines UUID, alterId, and time factors. The second part is the instruction part, which is encrypted using a fixed algorithm. The instruction contains the encryption algorithm used in the data part. The third part is the important data part. It can be seen that the VMess encryption and decryption method is actually many-to-one (adapted by the server), not just combining UUID. However, it is also a relatively difficult thing to encrypt only by combining UUID. It will not be available in a short time. Considering that we now have VMessAEAD available, there is no need to rush. If VLESS introduces an encryption method that combines UUID, it is equivalent to reconstructing the entire VMess.</p><h2 id="udp-issues" tabindex="-1"><a class="header-anchor" href="#udp-issues" aria-hidden="true">#</a> UDP issues</h2>',27),k={href:"https://github.com/XTLS/Xray-core/discussions/252",target:"_blank",rel:"noopener noreferrer"},P=s("XUDP: VLESS & VMess & Mux UDP FullCone NAT"),B=r('<h2 id="client-development-guide" tabindex="-1"><a class="header-anchor" href="#client-development-guide" aria-hidden="true">#</a> Client Development Guide</h2><ol><li>The VLESS protocol itself may have incompatible upgrades, but the parameters in the client configuration file are basically only increased and not decreased. The protocol implementation of the iOS client needs to keep up with the upgrade.</li><li>Visual standard: Please use VLESS as the UI identifier uniformly, instead of VLess / Vless / vless. The configuration file is not affected, and the code should follow naturally.</li><li><code>Encryption</code> should be made into an input box instead of a selection box. The default value of the new configuration should be <code>none</code>, and if the user leaves it blank, it should be filled in with <code>none</code>.</li></ol><h2 id="vless-sharing-link-standard" tabindex="-1"><a class="header-anchor" href="#vless-sharing-link-standard" aria-hidden="true">#</a> VLESS Sharing Link Standard</h2>',3),M=s("Thank you to "),U={href:"https://github.com/DuckSoft",target:"_blank",rel:"noopener noreferrer"},D=s("@DuckSoft"),C=s(" for the proposal!"),_=s("Please see "),X={href:"https://github.com/XTLS/Xray-core/issues/91",target:"_blank",rel:"noopener noreferrer"},F=s("VMessAEAD/VLESS Sharing Link Standard Proposal"),R=s(" for more details.");d.render=function(r,s){const d=e("OutboundLink");return t(),o(i,null,[h,a("p",null,[l,c,u,p,f,m,y,a("a",b,[g,n(d)]),w]),v,S,T,V,I,a("p",null,[L,a("a",A,[E,n(d)]),q]),x,a("p",null,[a("a",k,[P,n(d)])]),B,a("p",null,[M,a("a",U,[D,n(d)]),C]),a("p",null,[_,a("a",X,[F,n(d)]),R])],64)};export default d;

import{r as e,o as a,c as n,a as o,b as t,F as i,e as r}from"./app.ad2e24ce.js";const l={},s=o("h1",{id:"chapter-2-preparation-of-raw-materials",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#chapter-2-preparation-of-raw-materials","aria-hidden":"true"},"#"),r(" [Chapter 2] Preparation of Raw Materials")],-1),u=o("p",null,"This chapter is rather special because it involves monetary transactions. This article takes a neutral stance on the project and does not make specific recommendations. What I can do is to tell you what you need to prepare.",-1),d=o("h2",{id:"_2-1-acquiring-a-vps",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-1-acquiring-a-vps","aria-hidden":"true"},"#"),r(" 2.1 Acquiring a VPS")],-1),c=o("p",null,"You need to obtain a healthy VPS with an unblocked IP, and perform the following basic preparations in the management console:",-1),h=o("ol",null,[o("li",null,"Install Debian 10 64-bit system in the backend of VPS."),o("li",null,[r("Write down the IP address of VPS in a notebook (this article will use "),o("code",null,'"100.200.300.400"'),r(" as an example, which is an intentionally incorrect and illegal IP address. Please replace it with your real IP address).")]),o("li",null,"Write down the SSH remote login port of VPS in a notebook."),o("li",null,"Write down the username and password for SSH remote login in a notebook.")],-1),m=o("p",null,"Buying a VPS is a relatively complex matter. It is recommended to first learn the relevant knowledge and choose one that suits your own economic ability and line requirements. In addition, you can choose to take advantage of some benefits offered by international giants (such as permanent free or limited-time free packages offered by Oracle and Google). In any case, you must act within your means.",-1),p=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"Explanation"),o("p",null,[r("Regarding the choice of Debian 10 as the operating system, let me elaborate a bit: No matter what you have heard online, no matter which guru has told you that XXX version of Linux is better or XXX version of Linux is more powerful, these sectarian disputes have "),o("strong",null,"nothing to do with you right now"),r("! Using Debian 10 is enough to optimize your VPS server for security, stability, and performance (such as using cloud-optimized kernel, timely support of BBR, etc.). After you become familiar with Linux, you can try other Linux distributions.")])],-1),f=o("h2",{id:"_2-2-obtaining-a-desired-domain-name",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-2-obtaining-a-desired-domain-name","aria-hidden":"true"},"#"),r(" 2.2 Obtaining a Desired Domain Name")],-1),y=o("p",null,"You need to obtain a domain name and add an A record in the DNS settings, pointing to the IP address of your VPS.",-1),b=o("ol",null,[o("li",null,[r("Please choose a reliable international domain name service provider. Choose some common domain name suffixes, and make sure not to use the "),o("code",null,".cn"),r(" suffix.")]),o("li",null,[r("In the DNS settings, add an A record pointing to the IP address of your VPS (the name of the A record can be anything, and in this article, it will be represented by "),o("code",null,'"a-name"'),r("). The complete domain name will be represented by "),o("code",null,'"subdomain.yourdomain.com"'),r(" or "),o("code",null,'"a-name.yourdomain.com"'),r(". The effect is as shown in the picture below:")])],-1),g=o("p",null,[o("img",{src:"/Xray-docs-next/assets/ch02-img01-a-name.0e89a8f1.png",alt:"Add A Record"})],-1),w=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"Tip"),o("p",null,[r("This is "),o("strong",null,"not"),r(" a real usable website. Please replace it with your real website URL.")])],-1),S=o("h2",{id:"_2-3-software-you-need-to-install-on-your-local-computer",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-3-software-you-need-to-install-on-your-local-computer","aria-hidden":"true"},"#"),r(" 2.3 Software you need to install on your local computer")],-1),k=o("ol",null,[o("li",null,"SSH remote login tool")],-1),x=r("Windows: "),P={href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"},v=r("PuTTY"),I=o("ul",null,[o("li",null,"macOS/Linux: Terminal")],-1),_=o("ol",{start:"2"},[o("li",null,"Remote file copying tool")],-1),L=r("Windows: "),T={href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"},V=r("WinSCP"),W=o("ul",null,[o("li",null,"macOS/Linux: Terminal")],-1),A={start:"3"},D=r("Reliable text editor "),R=r("Windows/macOS/Linux: "),X={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},q=r("VSCode"),O=o("h2",{id:"_2-4-your-progress",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-4-your-progress","aria-hidden":"true"},"#"),r(" 2.4 Your Progress")],-1),C=o("p",null,"If you have all the raw materials ready as mentioned above, you have already obtained the key to unlocking the door to a new world. So, what are you waiting for? Let's quickly move on to the next chapter and step through this door!",-1),N=o("blockquote",null,[o("p",null,"⬛⬛⬜⬜⬜⬜⬜⬜ 25%")],-1);l.render=function(r,l){const Y=e("OutboundLink");return a(),n(i,null,[s,u,d,c,h,m,p,f,y,b,g,w,S,k,o("ul",null,[o("li",null,[x,o("a",P,[v,t(Y)]),I])]),_,o("ul",null,[o("li",null,[L,o("a",T,[V,t(Y)]),W])]),o("ol",A,[o("li",null,[D,o("ul",null,[o("li",null,[R,o("a",X,[q,t(Y)])])])])]),O,C,N],64)};export default l;
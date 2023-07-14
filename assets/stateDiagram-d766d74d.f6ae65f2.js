import{p as t,d as e,s as a}from"./styles-2797ae0f.48f45054.js";import{c as i,h as n,l as r,i as d,j as s,a5 as o,y as g}from"./mermaid.core.f7c8ff3a.js";import{G as p,l as c}from"./layout.e24faddd.js";import{l as h}from"./line.a67c1c79.js";import"./array.999c8e45.js";import"./constant.4f073c13.js";const l={},x=(t,e)=>{l[t]=e},f=(t,e)=>{const a=t.append("text").attr("x",2*i().state.padding).attr("y",i().state.textHeight+1.3*i().state.padding).attr("font-size",i().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),n=a.height,r=t.append("text").attr("x",i().state.padding).attr("y",n+.4*i().state.padding+i().state.dividerMargin+i().state.textHeight).attr("class","state-description");let d=!0,s=!0;e.descriptions.forEach((function(t){d||(!function(t,e,a){const n=t.append("tspan").attr("x",2*i().state.padding).text(e);a||n.attr("dy",i().state.textHeight)}(r,t,s),s=!1),d=!1}));const o=t.append("line").attr("x1",i().state.padding).attr("y1",i().state.padding+n+i().state.dividerMargin/2).attr("y2",i().state.padding+n+i().state.dividerMargin/2).attr("class","descr-divider"),g=r.node().getBBox(),p=Math.max(g.width,a.width);return o.attr("x2",p+3*i().state.padding),t.insert("rect",":first-child").attr("x",i().state.padding).attr("y",i().state.padding).attr("width",p+2*i().state.padding).attr("height",g.height+n+2*i().state.padding).attr("rx",i().state.radius),t},u=(t,e,a)=>{const n=i().state.padding,r=2*i().state.padding,d=t.node().getBBox(),s=d.width,o=d.x,g=t.append("text").attr("x",0).attr("y",i().state.titleShift).attr("font-size",i().state.fontSize).attr("class","state-title").text(e.id),p=g.node().getBBox().width+r;let c,h=Math.max(p,s);h===s&&(h+=r);const l=t.node().getBBox();e.doc,c=o-n,p>s&&(c=(s-h)/2+n),Math.abs(o-l.x)<n&&p>s&&(c=o-(p-s)/2);const x=1-i().state.textHeight;return t.insert("rect",":first-child").attr("x",c).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",l.height+i().state.textHeight+i().state.titleShift+1).attr("rx","0"),g.attr("x",c+n),p<=s&&g.attr("x",o+(h-r)/2-p/2+n),t.insert("rect",":first-child").attr("x",c).attr("y",i().state.titleShift-i().state.textHeight-i().state.padding).attr("width",h).attr("height",3*i().state.textHeight).attr("rx",i().state.radius),t.insert("rect",":first-child").attr("x",c).attr("y",i().state.titleShift-i().state.textHeight-i().state.padding).attr("width",h).attr("height",l.height+3+2*i().state.textHeight).attr("rx",i().state.radius),t},y=(t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",i().state.padding),n=e.append("g"),{textWidth:r,textHeight:d}=((t,e,a,n)=>{let r=0;const d=n.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let o=t.replace(/\r\n/g,"<br/>");o=o.replace(/\n/g,"<br/>");const g=o.split(s.lineBreakRegex);let p=1.25*i().state.noteMargin;for(const s of g){const t=s.trim();if(t.length>0){const n=d.append("tspan");n.text(t),0===p&&(p+=n.node().getBBox().height),r+=p,n.attr("x",e+i().state.noteMargin),n.attr("y",a+r+1.25*i().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:r}})(t,0,0,n);return a.attr("height",d+2*i().state.noteMargin),a.attr("width",r+2*i().state.noteMargin),a},m=function(t,e){const a=e.id,n={id:a,label:e.id,width:0,height:0},r=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&(t=>{t.append("circle").attr("class","start-state").attr("r",i().state.sizeUnit).attr("cx",i().state.padding+i().state.sizeUnit).attr("cy",i().state.padding+i().state.sizeUnit)})(r),"end"===e.type&&(t=>{t.append("circle").attr("class","end-state-outer").attr("r",i().state.sizeUnit+i().state.miniPadding).attr("cx",i().state.padding+i().state.sizeUnit+i().state.miniPadding).attr("cy",i().state.padding+i().state.sizeUnit+i().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",i().state.sizeUnit).attr("cx",i().state.padding+i().state.sizeUnit+2).attr("cy",i().state.padding+i().state.sizeUnit+2)})(r),"fork"!==e.type&&"join"!==e.type||((t,e)=>{let a=i().state.forkWidth,n=i().state.forkHeight;if(e.parentId){let t=a;a=n,n=t}t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",n).attr("x",i().state.padding).attr("y",i().state.padding)})(r,e),"note"===e.type&&y(e.note.text,r),"divider"===e.type&&(t=>{t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",i().state.textHeight).attr("class","divider").attr("x2",2*i().state.textHeight).attr("y1",0).attr("y2",0)})(r),"default"===e.type&&0===e.descriptions.length&&((t,e)=>{const a=t.append("text").attr("x",2*i().state.padding).attr("y",i().state.textHeight+2*i().state.padding).attr("font-size",i().state.fontSize).attr("class","state-title").text(e.id),n=a.node().getBBox();t.insert("rect",":first-child").attr("x",i().state.padding).attr("y",i().state.padding).attr("width",n.width+2*i().state.padding).attr("height",n.height+2*i().state.padding).attr("rx",i().state.radius)})(r,e),"default"===e.type&&e.descriptions.length>0&&f(r,e);const d=r.node().getBBox();return n.width=d.width+2*i().state.padding,n.height=d.height+2*i().state.padding,x(a,n),n};let w=0;let b;const B={},k=(t,a,n,d,l,x,f)=>{const y=new p({compound:!0,multigraph:!0});let N,E=!0;for(N=0;N<t.length;N++)if("relation"===t[N].stmt){E=!1;break}n?y.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:E?1:b.edgeLengthFactor,nodeSep:E?1:50,isMultiGraph:!0}):y.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:E?1:b.edgeLengthFactor,nodeSep:E?1:50,ranker:"tight-tree",isMultiGraph:!0}),y.setDefaultEdgeLabel((function(){return{}})),f.db.extract(t);const M=f.db.getStates(),S=f.db.getRelations(),v=Object.keys(M);for(const e of v){const t=M[e];let i;if(n&&(t.parentId=n),t.doc){let e=a.append("g").attr("id",t.id).attr("class","stateGroup");i=k(t.doc,e,t.id,!d,l,x,f);{e=u(e,t,d);let a=e.node().getBBox();i.width=a.width,i.height=a.height+b.padding/2,B[t.id]={y:b.compositTitleSize}}}else i=m(a,t);if(t.note){const e={descriptions:[],id:t.id+"-note",note:t.note,type:"note"},n=m(a,e);"left of"===t.note.position?(y.setNode(i.id+"-note",n),y.setNode(i.id,i)):(y.setNode(i.id,i),y.setNode(i.id+"-note",n)),y.setParent(i.id,i.id+"-group"),y.setParent(i.id+"-note",i.id+"-group")}else y.setNode(i.id,i)}r.debug("Count=",y.nodeCount(),y);let z=0;S.forEach((function(t){var e;z++,r.debug("Setting edge",t),y.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*b.fontSizeFactor:1),height:b.labelHeight*s.getRows(t.title).length,labelpos:"c"},"id"+z)})),c(y),r.debug("Graph after layout",y.nodes());const H=a.node();y.nodes().forEach((function(t){if(void 0!==t&&void 0!==y.node(t)){r.warn("Node "+t+": "+JSON.stringify(y.node(t))),l.select("#"+H.id+" #"+t).attr("transform","translate("+(y.node(t).x-y.node(t).width/2)+","+(y.node(t).y+(B[t]?B[t].y:0)-y.node(t).height/2)+" )"),l.select("#"+H.id+" #"+t).attr("data-x-shift",y.node(t).x-y.node(t).width/2);x.querySelectorAll("#"+H.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))}else r.debug("No Node "+t+": "+JSON.stringify(y.node(t)))}));let L=H.getBBox();y.edges().forEach((function(t){void 0!==t&&void 0!==y.edge(t)&&(r.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(y.edge(t))),function(t,a,n){a.points=a.points.filter((t=>!Number.isNaN(t.y)));const d=a.points,p=h().x((function(t){return t.x})).y((function(t){return t.y})).curve(o),c=t.append("path").attr("d",p(d)).attr("id","edge"+w).attr("class","transition");let l="";if(i().state.arrowMarkerAbsolute&&(l=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,l=l.replace(/\(/g,"\\("),l=l.replace(/\)/g,"\\)")),c.attr("marker-end","url("+l+"#"+function(t){switch(e.relationType.DEPENDENCY){case e.relationType.AGGREGATION:return"aggregation";case e.relationType.EXTENSION:return"extension";case e.relationType.COMPOSITION:return"composition";case e.relationType.DEPENDENCY:return"dependency"}}()+"End)"),void 0!==n.title){const e=t.append("g").attr("class","stateLabel"),{x:d,y:o}=g.calcLabelPosition(a.points),p=s.getRows(n.title);let c=0;const h=[];let l=0,x=0;for(let t=0;t<=p.length;t++){const a=e.append("text").attr("text-anchor","middle").text(p[t]).attr("x",d).attr("y",o+c),i=a.node().getBBox();if(l=Math.max(l,i.width),x=Math.min(x,i.x),r.info(i.x,d,o+c),0===c){const t=a.node().getBBox();c=t.height,r.info("Title height",c,o)}h.push(a)}let f=c*p.length;if(p.length>1){const t=(p.length-1)*c*.5;h.forEach(((e,a)=>e.attr("y",o+a*c-t))),f=c*p.length}const u=e.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",d-l/2-i().state.padding/2).attr("y",o-f/2-i().state.padding/2-3.5).attr("width",l+i().state.padding).attr("height",f+i().state.padding),r.info(u)}w++}(a,y.edge(t),y.edge(t).relation))})),L=H.getBBox();const T={id:n||"root",label:n||"root",width:0,height:0};return T.width=L.width+2*b.padding,T.height=L.height+2*b.padding,r.debug("Doc rendered",T,y),T},N={parser:t,db:e,renderer:{setConf:function(){},draw:function(t,e,a,s){b=i().state;const o=i().securityLevel;let g;"sandbox"===o&&(g=n("#i"+e));const c=n("sandbox"===o?g.nodes()[0].contentDocument.body:"body"),h="sandbox"===o?g.nodes()[0].contentDocument:document;r.debug("Rendering diagram "+t);const l=c.select(`[id='${e}']`);l.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z");new p({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel((function(){return{}}));const x=s.db.getRootDoc();k(x,l,void 0,!1,c,h,s);const f=b.padding,u=l.node().getBBox(),y=u.width+2*f,m=u.height+2*f;d(l,m,1.75*y,b.useMaxWidth),l.attr("viewBox",`${u.x-b.padding}  ${u.y-b.padding} `+y+" "+m)}},styles:a,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,e.clear()}};export{N as diagram};
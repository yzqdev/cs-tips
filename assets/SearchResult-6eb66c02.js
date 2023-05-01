import{u as V,a as Q,b as W,c as _,m as z,l as B,n as G,y as J,h as K,d as N,e as T,v as X,L as Y,H as Z,g as ee,r as L}from"./app-28738222.js";import{c as te,D as se,t as ae,r as g,h as w,x as j,j as t,R as P,F as le,i as ue}from"./framework-ae46ee38.js";const re="search-pro-result-history",c=V(re,[]),ne=()=>{const{resultHistoryCount:u}=L,o=u>0;return{enabled:o,resultHistory:c,addResultHistory:l=>{o&&(c.value.length<u?c.value=[l,...c.value]:c.value=[l,...c.value.slice(0,u-1)])},removeResultHistory:l=>{c.value=[...c.value.slice(0,l),...c.value.slice(l+1)]}}},ce=u=>{const o=Q(),l=g(!1),h=g([]);let i;const v=ee(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/cs-tips/${L.worker}`,{}),i.addEventListener("message",({data:$})=>{h.value=$,l.value=!1}),i.postMessage({query:d,routeLocale:o.value})):(h.value=[],l.value=!1)},L.delay);return j([u,o],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:o}){const l=T(),h=se(),i=Q(),v=W(X),{addQueryHistory:d}=Y(),{enabled:$,resultHistory:b,addResultHistory:q,removeResultHistory:A}=ne(),f=ae(u,"query"),{results:y,searching:E}=ce(f),r=g(0),a=g(0),D=w(()=>b.value.length>0),R=w(()=>y.value.length>0),H=w(()=>y.value[r.value]||null),F=()=>{r.value=r.value>0?r.value-1:y.value.length-1,a.value=H.value.contents.length-1},U=()=>{r.value=r.value<y.value.length-1?r.value+1:0,a.value=0},I=()=>{a.value<H.value.contents.length-1?a.value=a.value+1:U()},M=()=>{a.value>0?a.value=a.value-1:F()},C=e=>e.map(s=>ue(s)?s:t(s[0],s[1])),S=e=>{if(e.type==="custom"){const s=Z[e.index]||"$content",[p,m=""]=le(s)?s[i.value].split("$content"):s.split("$content");return C([p,...e.display,m])}return C(e.display)},k=()=>{r.value=0,a.value=0,o("updateQuery",""),o("close")};return _("keydown",e=>{if(R.value){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")I();else if(e.key==="Enter"){const s=H.value.contents[a.value];l.value.path!==s.path&&(d(u.query),q(s),h.push(s.path),k())}}}),j([r,a],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:f.value?!R.value:!D.value}],id:"search-pro-results"},f.value===""?D.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),b.value.map((e,s)=>t(P,{to:e.path,class:["search-pro-result-item",{active:a.value===s}],onClick:()=>{k()}},()=>[t(z,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),A(s)}},t(B))]))])):$?v.value.emptyHistory:v.value.emptyResult:E.value?t(G,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),s.map((n,O)=>{const x=m&&a.value===O;return t(P,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{d(u.query),q(n),k()}},()=>[n.type==="content"?null:t(n.type==="title"?J:n.type==="heading"?K:N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};

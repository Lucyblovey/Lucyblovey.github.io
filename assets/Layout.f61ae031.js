var d=Object.defineProperty;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var u=(o,e,a)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,m=(o,e)=>{for(var a in e||(e={}))c.call(e,a)&&u(o,a,e[a]);if(i)for(var a of i(e))f.call(e,a)&&u(o,a,e[a]);return o};import{f as p,h as s,T as v,l as g,g as b,m as y,n as h,p as D,r,q as S,s as L}from"./app.e177b441.js";import{S as P}from"./SkipLink.2f69dc68.js";var B=p({name:"FadeSlideY",setup(o,{slots:e}){const a=g(),t=a.resolve,l=a.pending;return()=>s(v,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:l},()=>{var n;return(n=e.default)==null?void 0:n.call(e)})}}),F=p({name:"Layout",setup(){const o=L(),e=b(),a=S(),t=y(),l=h(),n=D(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[s(P),s(r("CommonWrapper"),{},m(m({default:()=>t.value.home?s(r("HomePage")):s(B,()=>s(r("NormalPage"),{key:a.value.path}))},n.value!=="none"?{navScreenBottom:()=>s(r("BloggerInfo"))}:{}),!l.value&&n.value==="always"?{sidebar:()=>s(r("BloggerInfo"))}:{}))]}});export{F as default};

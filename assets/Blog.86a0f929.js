var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,e,a)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,t=(s,e)=>{for(var a in e||(e={}))i.call(e,a)&&r(s,a,e[a]);if(n)for(var a of n(e))m.call(e,a)&&r(s,a,e[a]);return s};import{e as p,l as g,m as f,h as o,B as d,x as u,D as B,I as b,y as c,z as v,r as I}from"./app.c50f586e.js";import{S as C}from"./SkipLink.b829d248.js";var k=p({name:"Blog",setup(){const s=g(),e=f();return()=>[o(C),o(I("CommonWrapper"),{sidebar:!1},t({default:()=>s.value.home?o(d):o("main",{class:"page blog",id:"main-content"},o("div",{class:"blog-page-wrapper"},[o(u),o(B,{delay:.16},()=>o(b))])),navScreenBottom:()=>o(c)},e.value?{sidebar:()=>o(v)}:{}))]}});export{k as default};
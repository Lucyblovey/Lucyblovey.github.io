var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,a,e)=>a in s?l(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,t=(s,a)=>{for(var e in a||(a={}))i.call(a,e)&&r(s,e,a[e]);if(n)for(var e of n(a))m.call(a,e)&&r(s,e,a[e]);return s};import{d as p,j as g,k as f,h as o,B as d,t as u,D as v,I as B,v as b,x as c,r as I}from"./app.a3cf1b7a.js";import{S as k}from"./SkipLink.ab90ca6a.js";var h=p({name:"Blog",setup(){const s=g(),a=f();return()=>[o(k),o(I("CommonWrapper"),{sidebar:!1},t({default:()=>s.value.home?o(d):o("main",{class:"page blog",id:"main-content"},o("div",{class:"blog-page-wrapper"},[o(u),o(v,{delay:.16},()=>o(B))])),navScreenBottom:()=>o(b)},a.value?{sidebar:()=>o(c)}:{}))]}});export{h as default};

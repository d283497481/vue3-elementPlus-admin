import{_ as F,d as D,r as b,q as k,c as _,b as o,w as t,e as d,o as i,F as h,s as A,l as p,i as B,t as E}from"./index.0869f089.js";const g={class:"wrap"},w=D({__name:"navClassify",setup(N){const c=b(),a=k({domains:[],indexName:"\u9996\u9875",indexHref:"/index"});let y={name:a.indexName,href:a.indexHref,key:Date.now()};(n=>n.map(e=>typeof e=="object"?Object.assign({},e):e))(a.domains).unshift(y);const x=n=>{let e=a.domains.indexOf(n);e!==-1&&a.domains.splice(e,1)},V=()=>{a.domains.push({name:"",href:"",key:Date.now()})},v=()=>{console.log("\u63D0\u4EA4")};return(n,e)=>{const u=d("el-input"),s=d("el-form-item"),m=d("el-button"),C=d("el-form");return i(),_("div",g,[o(C,{ref_key:"formRef",ref:c,model:a,"label-width":"100px",class:"demo-dynamic"},{default:t(()=>[o(s,{prop:"indexName",label:"\u9996\u9875",rules:{required:!0,message:"\u5206\u7C7B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:t(()=>[o(u,{modelValue:a.indexName,"onUpdate:modelValue":e[0]||(e[0]=l=>a.indexName=l),placeholder:"\u5BFC\u822A\u540D\u79F0"},null,8,["modelValue"]),o(u,{modelValue:a.indexHref,"onUpdate:modelValue":e[1]||(e[1]=l=>a.indexHref=l),placeholder:"path\u8DEF\u5F84",disabled:""},null,8,["modelValue"])]),_:1}),(i(!0),_(h,null,A(a.domains,(l,f)=>(i(),B(s,{key:l.key,label:"\u5BFC\u822A"+(f+1),prop:"domains."+f+".value"},{default:t(()=>[o(u,{modelValue:l.name,"onUpdate:modelValue":r=>l.name=r,placeholder:"\u5BFC\u822A\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"]),o(u,{modelValue:l.href,"onUpdate:modelValue":r=>l.href=r,placeholder:"path\u8DEF\u5F84"},null,8,["modelValue","onUpdate:modelValue"]),o(m,{onClick:E(r=>x(l),["prevent"])},{default:t(()=>[p("\u5220\u9664")]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),o(s,null,{default:t(()=>[o(m,{type:"primary",onClick:e[2]||(e[2]=l=>v())},{default:t(()=>[p("\u63D0\u4EA4")]),_:1}),o(m,{onClick:V},{default:t(()=>[p("\u65B0\u589E\u5206\u7C7B")]),_:1})]),_:1})]),_:1},8,["model"])])}}});var q=F(w,[["__scopeId","data-v-d16462ee"]]);export{q as default};
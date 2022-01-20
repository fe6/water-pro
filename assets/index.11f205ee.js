import{Y as d,bw as a,bx as r,d as p,bO as u,b as t}from"./vendor.846be9ce.js";const i={};function h(e,o){const n=d("a-upload-name");return a(),r(n,{action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data",accept:"image/png,image/jpeg,image/gif"})}i.render=h;var m=i,g=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528
</cn>

<us>
#### \u57FA\u672C\u4F7F\u7528
TODO
</us>
`,_=`<template>
  <a-upload-name
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    resultKey="data"
    accept='image/png,image/jpeg,image/gif'
  />
</template>
`,s=p({setup(){return{headers:{authorization:"authorization-text"}}}});function b(e,o,n,$,z,K){const l=d("a-upload-name");return a(),r(l,{headers:e.headers,action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data"},null,8,["headers"])}s.render=b;var f=`<cn>
#### \u4F20\u9012 headers
\u4F20\u9012 headers
</cn>

<us>
#### headers
TODO
</us>
`,v=`<template>
  <a-upload-name
    :headers="headers"
    action="https://api.dev.mosh.cn/public/upload/image/binary"
    resultKey="data"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    }
  }
});
<\/script>
`;const y={class:"markdown-body"},x=u('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u4E0A\u4F20\u7684\u503C</td><td>string | object</td><td>-</td><td>-</td></tr><tr><td>onFormChange</td><td>\u4E0A\u4F20\u4E4B\u540E\u89E6\u53D1\u7684\u65B9\u6CD5</td><td>function</td><td>() =&gt; {}</td><td>-</td></tr><tr><td>mergeOriginDatas</td><td>\u8BBE\u7F6E form \u63D0\u4EA4\u7684\u6570\u636E</td><td>function</td><td>-</td><td>-</td></tr><tr><td>headers</td><td>\u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E</td><td>-</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>\u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848</td><td>\u6DFB\u52A0\u56FE\u7247</td><td>-</td><td></td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">input accept Attribute</a></td><td>string</td><td>\u2018image/png\u2019, \u2018image/jpeg\u2019</td><td></td></tr><tr><td>action</td><td>\u4E0A\u4F20\u7684\u5730\u5740</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>autoUpload</td><td>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resultKey</td><td>ajax \u8FD4\u56DE\u6765\u7684\u6570\u636E\u5B58\u653E\u7684\u5B57\u6BB5</td><td>string</td><td>\u2018data\u2019</td><td></td></tr><tr><td>nameKey</td><td>\u56FE\u7247\u540D\u5B57\u5B58\u50A8\u7684\u5B57\u6BB5</td><td>string</td><td>\u2018name\u2019</td><td></td></tr><tr><td>urlKey</td><td>\u56FE\u7247\u5730\u5740\u5B58\u50A8\u7684\u5B57\u6BB5</td><td>string</td><td>\u2018url\u2019</td><td></td></tr><tr><td>limitSize</td><td>\u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F</td><td>number</td><td>2(M)</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td><td>Function</td><td>\u65E0</td></tr><tr><td>changeUpload</td><td>\u4E0A\u4F20\u6539\u53D8\uFF0C\u4E0E change \u5206\u9694\uFF0C\u7528\u5728 form pro \u914D\u7F6E\u4E2D</td><td>Function(file)</td><td>\u65E0</td></tr></tbody></table>',4),C={expose:[],setup(e){return(o,n)=>(a(),r("div",y,[x]))}};var O=C;const c={cn:`# \u4E0A\u4F20\u540D\u5B57
  \u4E0A\u4F20\u7EC4\u4EF6\u7684\u5C01\u88C5\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  - \u53EA\u9700\u8981\u663E\u793A\u540D\u5B57
  - \u5355\u6587\u4EF6\u4E0A\u4F20
        ## \u4EE3\u7801\u6F14\u793A`,us:`# UploadName
  TODO


## When To Use

  ## Examples
  `};var j={category:"Components",subtitle:"\u4E0A\u4F20\u540D\u5B57",type:"Data Entry",title:"UploadName",render(){return t("div",null,[t(d("Md"),{cn:c.cn,us:c.us},null),t(d("demo-sort"),null,{default:()=>[t(d("demo-container"),{api:g,code:_},{default:()=>[t(m,null,null)]}),t(d("demo-container"),{api:f,code:v},{default:()=>[t(s,null,null)]})]}),t(d("api"),null,{default:()=>[t(O,null,null)]})])}};export{j as default};

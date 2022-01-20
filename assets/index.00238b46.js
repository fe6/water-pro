import{Y as e,bw as h,bx as s,by as a,b as n,d as l,k as C,q as b,bO as v}from"./vendor.846be9ce.js";var S=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### basic
The simplest usage.
</us>
`;const m={};function L(r,c){const o=e("a-anchor-link"),i=e("a-anchor");return h(),s(i,null,{default:a(()=>[n(o,{href:"#components-anchor-demo-basic",title:"Basic demo"}),n(o,{href:"#components-anchor-demo-static",title:"Static demo"}),n(o,{href:"#components-anchor-demo-basic",title:"Basic demo with Target",target:"_blank"}),n(o,{href:"#API",title:"API"},{default:a(()=>[n(o,{href:"#Anchor-Props",title:"Anchor Props"}),n(o,{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1})}m.render=L;var $=m,I=`<template>
  <a-anchor>
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link
      href="#components-anchor-demo-basic"
      title="Basic demo with Target"
      target="_blank"
    />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>
`,x=`<cn>
#### \u9759\u6001\u4F4D\u7F6E
\u4E0D\u6D6E\u52A8\uFF0C\u72B6\u6001\u4E0D\u968F\u9875\u9762\u6EDA\u52A8\u53D8\u5316\u3002
</cn>

<us>
#### Static
Do not change state when page is scrolling.
</us>
`;const u={};function B(r,c){const o=e("a-anchor-link"),i=e("a-anchor");return h(),s(i,{affix:!1},{default:a(()=>[n(o,{href:"#components-anchor-demo-basic",title:"Basic demo"}),n(o,{href:"#components-anchor-demo-static",title:"Static demo"}),n(o,{href:"#API",title:"API"},{default:a(()=>[n(o,{href:"#Anchor-Props",title:"Anchor Props"}),n(o,{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1})}u.render=B;var O=u,y=`<template>
  <a-anchor :affix="false">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>
`,w=`<cn>
#### \u81EA\u5B9A\u4E49 click \u4E8B\u4EF6
\u70B9\u51FB\u951A\u70B9\u4E0D\u8BB0\u5F55\u5386\u53F2\u3002
</cn>

<us>
#### Customize the click event
Clicking on an anchor does not record history.
</us>
`,k=l({setup(){return{handleClick:(c,o)=>{c.preventDefault(),console.log(o)}}}});function T(r,c,o,i,f,p){const t=e("a-anchor-link"),d=e("a-anchor");return h(),s(d,{affix:!1,onClick:r.handleClick},{default:a(()=>[n(t,{href:"#components-anchor-demo-basic",title:"Basic demo"}),n(t,{href:"#components-anchor-demo-static",title:"Static demo"}),n(t,{href:"#API",title:"API"},{default:a(()=>[n(t,{href:"#Anchor-Props",title:"Anchor Props"}),n(t,{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1},8,["onClick"])}k.render=T;var z=`<template>
  <a-anchor :affix="false" @click="handleClick">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleClick = (e: Event, link: string) => {
      e.preventDefault();
      console.log(link);
    };
    return {
      handleClick,
    };
  },
});
<\/script>
`,H=`<cn>
#### \u81EA\u5B9A\u4E49\u951A\u70B9\u9AD8\u4EAE
\u81EA\u5B9A\u4E49\u951A\u70B9\u9AD8\u4EAE\u3002
</cn>

<us>
#### Customize the anchor highlight
Customize the anchor highlight.
</us>
`,_=l({setup(){return{getCurrentAnchor:()=>"#components-anchor-demo-static"}}});function M(r,c,o,i,f,p){const t=e("a-anchor-link"),d=e("a-anchor");return h(),s(d,{affix:!1,getCurrentAnchor:r.getCurrentAnchor},{default:a(()=>[n(t,{href:"#components-anchor-demo-basic",title:"Basic demo"}),n(t,{href:"#components-anchor-demo-static",title:"Static demo"}),n(t,{href:"#API",title:"API"},{default:a(()=>[n(t,{href:"#Anchor-Props",title:"Anchor Props"}),n(t,{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1},8,["getCurrentAnchor"])}_.render=M;var j=`<template>
  <a-anchor :affix="false" :getCurrentAnchor="getCurrentAnchor">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
    return {
      getCurrentAnchor,
    };
  },
});
<\/script>
`,E=`<cn>
#### \u76D1\u542C\u951A\u70B9\u94FE\u63A5\u6539\u53D8
\u76D1\u542C\u951A\u70B9\u94FE\u63A5\u6539\u53D8
</cn>

<us>
#### Listening for anchor link change
Listening for anchor link change.
</us>
`,g=l({setup(){return{onChange:c=>{console.log("Anchor:OnChange",c)}}}});function D(r,c,o,i,f,p){const t=e("a-anchor-link"),d=e("a-anchor");return h(),s(d,{affix:!1,onChange:r.onChange},{default:a(()=>[n(t,{href:"#components-anchor-demo-basic",title:"Basic demo"}),n(t,{href:"#components-anchor-demo-static",title:"Static demo"}),n(t,{href:"#API",title:"API"},{default:a(()=>[n(t,{href:"#Anchor-Props",title:"Anchor Props"}),n(t,{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1},8,["onChange"])}g.render=D;var F=`<template>
  <a-anchor :affix="false" @change="onChange">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return {
      onChange,
    };
  },
});
<\/script>
`,N=`<cn>
#### \u8BBE\u7F6E\u951A\u70B9\u6EDA\u52A8\u504F\u79FB\u91CF
\u951A\u70B9\u76EE\u6807\u6EDA\u52A8\u5230\u5C4F\u5E55\u6B63\u4E2D\u95F4\u3002
</cn>

<us>
#### Set Anchor scroll offset
Anchor target scroll to screen center.
</us>
`,P=l({setup(){const r=C(void 0);return b(()=>{r.value=window.innerHeight/2}),{targetOffset:r}}});function V(r,c,o,i,f,p){const t=e("a-anchor-link"),d=e("a-anchor");return h(),s(d,{"target-offset":r.targetOffset},{default:a(()=>[n(t,{href:"#components-anchor-demo-basic",title:"Basic demo"}),n(t,{href:"#components-anchor-demo-static",title:"Static demo"}),n(t,{href:"#API",title:"API"},{default:a(()=>[n(t,{href:"#Anchor-Props",title:"Anchor Props"}),n(t,{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1},8,["target-offset"])}P.render=V;var q=`<template>
  <a-anchor :target-offset="targetOffset">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const targetOffset = ref<number | undefined>(undefined);
    onMounted(() => {
      targetOffset.value = window.innerHeight / 2;
    });
    return {
      targetOffset,
    };
  },
});
<\/script>
`;const U={class:"markdown-body"},W=v('<h2>API</h2><h3>Anchor Props</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>affix</td><td>\u56FA\u5B9A\u6A21\u5F0F</td><td>boolean</td><td>true</td><td></td></tr><tr><td>bounds</td><td>\u951A\u70B9\u533A\u57DF\u8FB9\u754C</td><td>number</td><td>5(px)</td><td></td></tr><tr><td>getContainer</td><td>\u6307\u5B9A\u6EDA\u52A8\u7684\u5BB9\u5668</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td><td></td></tr><tr><td>offsetBottom</td><td>\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td><td>number</td><td></td><td></td></tr><tr><td>offsetTop</td><td>\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td><td>number</td><td></td><td></td></tr><tr><td>showInkInFixed</td><td>\u56FA\u5B9A\u6A21\u5F0F\u662F\u5426\u663E\u793A\u5C0F\u5706\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>wrapperClass</td><td>\u5BB9\u5668\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>wrapperStyle</td><td>\u5BB9\u5668\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>getCurrentAnchor</td><td>\u81EA\u5B9A\u4E49\u9AD8\u4EAE\u7684\u951A\u70B9</td><td>() =&gt; string</td><td>-</td><td>1.5.0</td></tr><tr><td>targetOffset</td><td>\u951A\u70B9\u6EDA\u52A8\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA4\u4E0E offsetTop \u76F8\u540C\uFF0C<a href="#components-anchor-demo-targetOffset">\u4F8B\u5B50</a></td><td>number</td><td><code>offsetTop</code></td><td>1.5.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>click</td><td><code>click</code> \u4E8B\u4EF6\u7684 handler</td><td>Function(e: Event, link: Object)</td><td></td></tr><tr><td>change</td><td>\u76D1\u542C\u951A\u70B9\u94FE\u63A5\u6539\u53D8</td><td>(currentActiveLink: string) =&gt; void</td><td></td></tr></tbody></table><h3>Link Props</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>href</td><td>\u951A\u70B9\u94FE\u63A5</td><td>string</td><td></td><td></td></tr><tr><td>title</td><td>\u6587\u5B57\u5185\u5BB9</td><td>string|slot</td><td></td><td></td></tr><tr><td>target</td><td>\u8BE5\u5C5E\u6027\u6307\u5B9A\u5728\u4F55\u5904\u663E\u793A\u94FE\u63A5\u7684\u8D44\u6E90\u3002</td><td>string</td><td></td><td>1.5.0</td></tr></tbody></table>',7),Y={expose:[],setup(r){return(c,o)=>(h(),s("div",U,[W]))}};var G=Y;const A={cn:`# Anchor \u951A\u70B9
          \u7528\u4E8E\u8DF3\u8F6C\u5230\u9875\u9762\u6307\u5B9A\u4F4D\u7F6E\u3002

## \u4F55\u65F6\u4F7F\u7528

\u9700\u8981\u5C55\u73B0\u5F53\u524D\u9875\u9762\u4E0A\u53EF\u4F9B\u8DF3\u8F6C\u7684\u951A\u70B9\u94FE\u63A5\uFF0C\u4EE5\u53CA\u5FEB\u901F\u5728\u951A\u70B9\u4E4B\u95F4\u8DF3\u8F6C\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Anchor

Hyperlinks to scroll on one page.

## When To Use

For displaying anchor hyperlinks on page and jumping between them.
## Examples
`};var K={category:"Components",subtitle:"\u951A\u70B9",cols:2,type:"Other",zhType:"\u5176\u4ED6",title:"Anchor",render(){return n("div",{id:"components-anchor-demo"},[n(e("Md"),{cn:A.cn,us:A.us},null),n(e("demo-sort"),null,{default:()=>[n(e("demo-container"),{api:S,code:I},{default:()=>[n($,null,null)]}),n(e("demo-container"),{api:x,code:y},{default:()=>[n(O,null,null)]}),n(e("demo-container"),{api:w,code:z},{default:()=>[n(k,null,null)]}),n(e("demo-container"),{api:H,code:j},{default:()=>[n(_,null,null)]}),n(e("demo-container"),{api:E,code:F},{default:()=>[n(g,null,null)]}),n(e("demo-container"),{api:N,code:q},{default:()=>[n(P,null,null)]})]}),n(e("api"),null,{default:()=>[n(G,null,null)]})])}};export{K as default};

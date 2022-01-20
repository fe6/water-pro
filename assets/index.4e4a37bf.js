import{d as p,k as l,Y as e,bw as i,bx as f,b as t,by as a,F as y,D as d,bO as $}from"./vendor.846be9ce.js";var C=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### basic
The simplest usage.
</us>
`,g=p({setup(){const n=l(10),o=l(10);return{top:n,bottom:o}}});const w=d("Affix top"),k=t("br",null,null,-1),A=d("Affix bottom");function R(n,o,c,u,m,h){const r=e("a-button"),s=e("a-affix");return i(),f(y,null,[t(s,{"offset-top":n.top},{default:a(()=>[t(r,{type:"primary",onClick:o[1]||(o[1]=v=>n.top+=10)},{default:a(()=>[w]),_:1})]),_:1},8,["offset-top"]),k,t(s,{"offset-bottom":n.bottom},{default:a(()=>[t(r,{type:"primary",onClick:o[2]||(o[2]=v=>n.bottom+=10)},{default:a(()=>[A]),_:1})]),_:1},8,["offset-bottom"])],64)}g.render=R;var T=`<template>
  <a-affix :offset-top="top">
    <a-button type="primary" @click="top += 10">Affix top</a-button>
  </a-affix>
  <br />
  <a-affix :offset-bottom="bottom">
    <a-button type="primary" @click="bottom += 10">Affix bottom</a-button>
  </a-affix>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const top = ref<number>(10);
    const bottom = ref<number>(10);
    return {
      top,
      bottom,
    };
  },
});
<\/script>
`,S=`<cn>
#### \u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03
\u53EF\u4EE5\u83B7\u5F97\u662F\u5426\u56FA\u5B9A\u7684\u72B6\u6001\u3002
</cn>

<us>
#### Callback
Callback with affixed state.
</us>
`,b=p({setup(){return{change:o=>{console.log(o)}}}});const N=d("120px to affix top");function F(n,o,c,u,m,h){const r=e("a-button"),s=e("a-affix");return i(),f(s,{"offset-top":120,onChange:n.change},{default:a(()=>[t(r,null,{default:a(()=>[N]),_:1})]),_:1},8,["onChange"])}b.render=F;var B=`<template>
  <a-affix :offset-top="120" @change="change">
    <a-button>120px to affix top</a-button>
  </a-affix>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const change = (affixed: boolean) => {
      console.log(affixed);
    };

    return {
      change,
    };
  },
});
<\/script>
`,V="<cn>\n#### \u6EDA\u52A8\u5BB9\u5668\n\u7528 `target` \u8BBE\u7F6E `Affix` \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A `window`\u3002\n</cn>\n\n<us>\n#### Container to scroll.\nSet a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).\n</us>\n",_=p({setup(){return{containerRef:l()}}});const j={id:"components-affix-demo-target",ref:"containerRef",class:"scrollable-container"},M={class:"background"},O=d("Fixed at the top of container");function z(n,o,c,u,m,h){const r=e("a-button"),s=e("a-affix");return i(),f("div",j,[t("div",M,[t(s,{target:()=>n.containerRef},{default:a(()=>[t(r,{type:"primary"},{default:a(()=>[O]),_:1})]),_:1},8,["target"])])],512)}_.render=z;var q=`<template>
  <div id="components-affix-demo-target" ref="containerRef" class="scrollable-container">
    <div class="background">
      <a-affix :target="() => containerRef">
        <a-button type="primary">Fixed at the top of container</a-button>
      </a-affix>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, VNode } from 'vue';

export default defineComponent({
  setup() {
    const containerRef = ref<VNode>();
    return {
      containerRef,
    };
  },
});
<\/script>

<style>
#components-affix-demo-target.scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
`;const D={class:"markdown-body"},E=$(`<h2>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>offsetBottom</td><td>\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td><td>number</td><td></td><td></td></tr><tr><td>offsetTop</td><td>\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td><td>number</td><td></td><td></td></tr><tr><td>target</td><td>\u8BBE\u7F6E <code>Affix</code> \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function(affixed)</td><td>\u65E0</td></tr></tbody></table><p><strong>\u6CE8\u610F\uFF1A</strong><code>Affix</code> \u5185\u7684\u5143\u7D20\u4E0D\u8981\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5982\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E <code>Affix</code> \u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A</p><pre><code class="language-html">&lt;a-affix :style=&quot;{ position: &#39;absolute&#39;, top: y, left: x}&quot;&gt;
  ...
&lt;/a-affix&gt;
</code></pre><h2>FAQ</h2><h3>Affix \u4F7F\u7528 <code>target</code> \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002</h3><p>\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u53EA\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002</p><p>\u76F8\u5173 issue\uFF1A<a href="https://github.com/ant-design/ant-design/issues/3938">#3938</a> <a href="https://github.com/ant-design/ant-design/issues/5642">#5642</a> <a href="https://github.com/ant-design/ant-design/issues/16120">#16120</a></p>`,10),I={expose:[],setup(n){return(o,c)=>(i(),f("div",D,[E]))}};var P=I;const x={cn:`# Affix \u56FA\u9489
          \u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002
## \u4F55\u65F6\u4F7F\u7528
\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002
\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Affix
          Make an element stick to viewport.
## When To Use
When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.
Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.
## Examples `};var W={category:"Components",subtitle:"\u56FA\u9489",zhType:"\u5BFC\u822A",type:"Navigation",title:"Affix",render(){return t("div",null,[t(e("Md"),{cn:x.cn,us:x.us},null),t(e("demo-sort"),null,{default:()=>[t(e("demo-container"),{api:C,code:T},{default:()=>[t(g,null,null)]}),t(e("demo-container"),{api:S,code:B},{default:()=>[t(b,null,null)]}),t(e("demo-container"),{api:V,code:q},{default:()=>[t(_,null,null)]})]}),t(e("api"),null,{default:()=>[t(P,null,null)]})])}};export{W as default};

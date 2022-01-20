import{d as s,k as i,Y as d,bw as l,bx as u,bG as $,bH as y,b as t,bI as C,bO as S}from"./vendor.846be9ce.js";var g=s({setup(){return{value:i("#f0f0f0")}}});function w(e,n,p,c,v,f){const r=d("a-color-picker");return l(),u(r,{value:e.value,"onUpdate:value":n[1]||(n[1]=a=>e.value=a)},null,8,["value"])}g.render=w;var x=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Basic usage
Basic usage example.
</us>
`,z=`<template>
  <a-color-picker v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#f0f0f0');
    return {
      value,
    };
  },
}); 
<\/script>
`,m=s({setup(){return{value:i("#1996f9")}}});const b=C();$("data-v-e96de5d4");const I={class:"components-input-demo-size"};y();const P=b((e,n,p,c,v,f)=>{const r=d("a-color-picker"),a=d("a-space");return l(),u("div",I,[t(a,{direction:"vertical"},{default:b(()=>[t(r,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),size:"large"},null,8,["value"]),t(r,{value:e.value,"onUpdate:value":n[2]||(n[2]=o=>e.value=o)},null,8,["value"]),t(r,{value:e.value,"onUpdate:value":n[3]||(n[3]=o=>e.value=o),size:"small"},null,8,["value"])]),_:1})])});m.render=P;m.__scopeId="data-v-e96de5d4";var B="<cn>\n#### \u4E09\u79CD\u5927\u5C0F\n\u6211\u4EEC\u4E3A `<Input />` \u8F93\u5165\u6846\u5B9A\u4E49\u4E86\u4E09\u79CD\u5C3A\u5BF8\uFF08\u5927\u3001\u9ED8\u8BA4\u3001\u5C0F\uFF09\uFF0C\u9AD8\u5EA6\u5206\u522B\u4E3A `40px`\u3001`32px` \u548C `24px`\u3002\n</cn>\n\n<us>\n#### Three sizes of Input\nThere are three sizes of an Input box: `large` (40px)\u3001`default` (32px) and `small` (24px).\n</us>\n",U=`<template>
  <div class="components-input-demo-size">
    <a-space direction="vertical">
      <a-color-picker v-model:value="value" size="large" />
      <a-color-picker v-model:value="value" />
      <a-color-picker v-model:value="value" size="small" />
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('#1996f9');
    return {
      value,
    };
  },
});
<\/script>
<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
`,_=s({setup(){return{value:i("00ff00"),predefine:["red","yellow","blue","black","gray"]}}});function j(e,n,p,c,v,f){const r=d("a-color-picker");return l(),u(r,{value:e.value,"onUpdate:value":n[1]||(n[1]=a=>e.value=a),predefine:e.predefine},null,8,["value","predefine"])}_.render=j;var E=`<cn>
#### \u9884\u5B9A\u4E49\u989C\u8272
\u9884\u5B9A\u4E49\u989C\u8272\u3002
</cn>

<us>
#### Predefine
Predefine example.
</us>
`,N=`<template>
  <a-color-picker v-model:value="value" :predefine="predefine" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('00ff00');
    return {
      value,
      predefine: ['red','yellow','blue','black','gray'],
    };
  },
}); 
<\/script>
`,h=s({setup(){return{value:i(null)}}});function O(e,n,p,c,v,f){const r=d("a-color-picker");return l(),u(r,{value:e.value,"onUpdate:value":n[1]||(n[1]=a=>e.value=a)},null,8,["value"])}h.render=O;var T=`<cn>
#### \u65E0\u9ED8\u8BA4\u503C
\u65E0\u9ED8\u8BA4\u503C\u3002\u6240\u4EE5\u6253\u5F00\u7684\u989C\u8272\u753B\u677F\u4E5F\u662F\u7A7A\u7684\u3002
</cn>

<us>
#### \u65E0\u9ED8\u8BA4\u503C
</us>
`,D=`<template>
  <a-color-picker v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>(null);
    return {
      value,
    };
  },
}); 
<\/script>
`;const V={class:"markdown-body"},A=S('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u9009\u4E2D\u7684\u503C</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u9009\u989C\u8272\u9009\u5668</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>\u5927\u5C0F\uFF0C\u53EA\u5BF9\u6309\u94AE\u6837\u5F0F\u751F\u6548</td><td><code>large</code> | <code>default</code> | <code>small</code></td><td><code>default</code></td></tr><tr><td>alpha</td><td>\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9</td><td>boolean</td><td>false</td></tr><tr><td>hue</td><td>\u662F\u5426\u663E\u793A\u8272\u8C03\u6ED1\u5757</td><td>boolean</td><td>true</td></tr><tr><td>format</td><td>\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F</td><td><code>hsl</code> | <code>hsv</code> | <code>hex</code> | <code>rgb</code></td><td>false</td></tr><tr><td>predefine</td><td>\u9884\u5B9A\u4E49\u989C\u8272</td><td>array</td><td>[\u2018rgba(244, 67, 54, 1)\u2019,\u2018rgba(233, 30, 99, 0.95)\u2019,\u2018rgba(156, 39, 176, 0.9)\u2019,\u2018rgba(103, 58, 183, 0.85)\u2019,\u2018rgba(63, 81, 181, 0.8)\u2019,\u2018rgba(33, 150, 243, 0.75)\u2019,\u2018rgba(3, 169, 244, 0.7)\u2019,\u2018rgba(0, 188, 212, 0.7)\u2019,\u2018rgba(0, 150, 136, 0.75)\u2019,\u2018rgba(76, 175, 80, 0.8)\u2019,\u2018rgba(139, 195, 74, 0.85)\u2019,\u2018rgba(205, 220, 57, 0.9)\u2019,\u2018rgba(255, 235, 59, 0.95)\u2019,\u2018rgba(255, 193, 7, 1)\u2019]</td></tr><tr><td>config</td><td>picker \u7684\u914D\u7F6E\uFF0C\u5177\u4F53\u53C2\u7167 <a href="https://www.npmjs.com/package/@simonwep/pickr">@simonwep/pickr</a></td><td>object</td><td>-</td></tr><tr><td>locale</td><td>picker \u7684\u591A\u8BED\u8A00\u914D\u7F6E</td><td>object</td><td>-</td></tr><tr><td>colorRounded</td><td>\u989C\u8272\u6570\u503C\u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570</td><td>number</td><td>-</td></tr><tr><td>padding</td><td>\u5F39\u6846\u95F4\u8DDD</td><td>number</td><td>16</td></tr><tr><td>getPopupContainer</td><td>\u6307\u5B9A\u6E32\u67D3\u5BB9\u5668</td><td>function</td><td>-</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03</td><td>function(key)</td><td></td></tr><tr><td>openChange</td><td>\u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td>function(status)</td><td></td></tr></tbody></table>',4),G={expose:[],setup(e){return(n,p)=>(l(),u("div",V,[A]))}};var H=G;const k={cn:`# Input \u8F93\u5165\u6846
          \u57FA\u4E8E [@simonwep/pickr](https://github.com/Simonwep/pickr) \u7684\u5C01\u88C5\u3002\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u9700\u8981\u9009\u62E9\u989C\u8272\u3002
- \u5BF9\u73B0\u6709\u989C\u8272\u4E0D\u6EE1\u610F\uFF0C\u9700\u8981\u5B9A\u5236\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# ColorPicker
          TODO.
## Examples `};var R={category:"Components",subtitle:"\u8F93\u5165\u6846",type:"Data Entry",title:"ColorPicker",render(){return t("div",null,[t(d("Md"),{cn:k.cn,us:k.us},null),t(d("demo-sort"),null,{default:()=>[t(d("demo-container"),{api:x,code:z},{default:()=>[t(g,null,null)]}),t(d("demo-container"),{api:B,code:U},{default:()=>[t(m,null,null)]}),t(d("demo-container"),{api:E,code:N},{default:()=>[t(_,null,null)]}),t(d("demo-container"),{api:T,code:D},{default:()=>[t(h,null,null)]})]}),t(d("api"),null,{default:()=>[t(H,null,null)]})])}};export{R as default};

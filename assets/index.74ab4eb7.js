import{d as p,k as i,Y as a,bw as o,bx as r,bO as _,b as n}from"./vendor.846be9ce.js";const b=({params:e,success:t})=>{setTimeout(()=>{t([{label:"water",value:90},{label:"antd",value:80}])},1e3)};var u=p({setup(){const e=i("");return{focus,getSelectForOptions:b,selectApiValue:e}}});function h(e,t,c,v,f,g){const l=a("a-select-api");return o(),r(l,{style:{width:"200px"},api:e.getSelectForOptions,value:e.selectApiValue,"onUpdate:value":t[1]||(t[1]=s=>e.selectApiValue=s)},null,8,["api","value"])}u.render=h;var S=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Basic Usage
Basic Usage
</us>
`,A=`<template>
   <a-select-api
    style="width: 200px"
    :api="getSelectForOptions"
    v-model:value="selectApiValue"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90
      },
      {
        label: 'antd',
        value: 80
      }
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const selectApiValue = ref('');
    return {
      focus,
        getSelectForOptions,
        selectApiValue,
    };
  },
});
<\/script>

`;const w=({params:e,success:t})=>{setTimeout(()=>{t([{label:"water",value:90},{label:"antd",value:80}])},1e3)};var d=p({setup(){const e=i(80);return{focus,getSelectForOptions:w,selectApiValue:e}}});function y(e,t,c,v,f,g){const l=a("a-select-api");return o(),r(l,{style:{width:"200px"},api:e.getSelectForOptions,value:e.selectApiValue,"onUpdate:value":t[1]||(t[1]=s=>e.selectApiValue=s),"show-search":"",size:"large",allowClear:""},null,8,["api","value"])}d.render=y;var O=`<cn>
#### \u641C\u7D22
\u641C\u7D22\u3002
</cn>

<us>
#### Basic Usage
Basic Usage
</us>
`,V=`<template>
   <a-select-api
    style="width: 200px"
    :api="getSelectForOptions"
    v-model:value="selectApiValue"
    show-search
    size="large"
    allowClear
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90
      },
      {
        label: 'antd',
        value: 80
      }
    ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const selectApiValue = ref(80);
    return {
      focus,
        getSelectForOptions,
        selectApiValue,
    };
  },
});
<\/script>

`;const $={class:"markdown-body"},C=_(`<h2>API</h2><blockquote><p>api \u63A5\u53E3\u8FD4\u56DE\u7684\u6BCF\u6761\u6570\u636E\u683C\u5F0F\u5FC5\u987B\u662F\u8FD9\u6837\u7684\u3002value \u5B57\u6BB5\u4E2D\u662F\u6839\u636E\u6570\u636E\u4E2D\u7684 value \u5B57\u6BB5\u5339\u914D\u3002</p></blockquote><pre><code class="language-json">[
  {
    label: &#39;water&#39;,
    value: 90
  },
]
</code></pre><h3>Select props</h3><blockquote><p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./select-cn">select</a></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>api</td><td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>apiParams</td><td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>loopGetOptions</td><td>\u662F\u5426\u5FAA\u73AF\u8BF7\u6C42 api \uFF0C\u83B7\u53D6\u4E0B\u62C9\u9009\u9879</td><td>boolean</td><td>false</td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td></tr></tbody></table>`,6),F={expose:[],setup(e){return(t,c)=>(o(),r("div",$,[C]))}};var x=F;const m={cn:`# SelectApi \u63A5\u53E3\u9009\u62E9\u5668
          \u5E26\u63A5\u53E3\u8BF7\u6C42\u7684\u4E0B\u62C9\u9009\u62E9\u5668\u3002
          ## \u4F55\u65F6\u4F7F\u7528
          - \u5B57\u6BB5\u56FA\u5B9A\u3002
          - \u9700\u8981\u63A5\u53E3\u3002
          - \u8868\u5355

          ## \u4EE3\u7801\u6F14\u793A`,us:`# SelectApi
        TODO.
        ## Examples `};var B={category:"Components",subtitle:"API \u9009\u62E9\u5668",type:"Data Entry",title:"SelectApi",render(){return n("div",{id:"components-select-demo"},[n(a("Md"),{cn:m.cn,us:m.us},null),n(a("demo-sort"),null,{default:()=>[n(a("demo-container"),{api:S,code:A},{default:()=>[n(u,null,null)]}),n(a("demo-container"),{api:O,code:V},{default:()=>[n(d,null,null)]})]}),n(a("api"),null,{default:()=>[n(x,null,null)]})])}};export{B as default};

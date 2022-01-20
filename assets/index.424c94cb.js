import{d as u,k as p,Y as t,bw as l,bx as d,bO as h,b as e}from"./vendor.846be9ce.js";var g=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7701\u5E02\u533A\u7EA7\u8054\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const m=({params:n,success:a})=>{setTimeout(()=>{a([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}])},1e3)};var r=u({setup(){return{cValue:p([]),getCascaderApi:m}}});function v(n,a,o,j,A,x){const c=t("a-cascader-api");return l(),d(c,{value:n.cValue,"onUpdate:value":a[1]||(a[1]=i=>n.cValue=i),api:n.getCascaderApi},null,8,["value","api"])}r.render=v;var b=`<template>
  <a-cascader-api v-model:value="cValue" :api="getCascaderApi" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getCascaderApi = ({params, success}) => {
  setTimeout(() => {
    success([
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      cValue: ref<string[]>([]),
      getCascaderApi,
    };
  },
});
<\/script>
`;const _={class:"markdown-body"},f=h('<h2>API</h2><blockquote><p>\u6682\u65F6\u4E0D\u652F\u6301 render \u65B9\u6CD5\u7684\u5B9A\u5236\u3002\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./cascader-cn">cascader</a></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>api</td><td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>apiParams</td><td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>loopGetOptions</td><td>\u662F\u5426\u5FAA\u73AF\u8BF7\u6C42 api \uFF0C\u83B7\u53D6\u4E0B\u62C9\u9009\u9879</td><td>boolean</td><td>false</td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td></tr></tbody></table>',3),C={expose:[],setup(n){return(a,o)=>(l(),d("div",_,[f]))}};var y=C;const s={cn:`# CascaderAPI API \u7EA7\u8054\u9009\u62E9
          \u914D\u7F6E\u4E2A api \u76F4\u63A5\u81EA\u52A8\u83B7\u53D6\u9009\u9879\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u9009\u9879\u901A\u8FC7\u540E\u53F0\u83B7\u53D6
          ## \u4EE3\u7801\u6F14\u793A`,us:`# CascaderAPI
          TODO
## Examples
          `};var k={category:"Components",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",title:"CascaderApi",subtitle:"API \u7EA7\u8054\u9009\u62E9",render(){return e("div",{id:"components-cascader-demo"},[e(t("Md"),{cn:s.cn,us:s.us},null),e(t("demo-sort"),null,{default:()=>[e(t("demo-container"),{api:g,code:b},{default:()=>[e(r,null,null)]})]}),e(t("api"),null,{default:()=>[e(y,null,null)]})])}};export{k as default};

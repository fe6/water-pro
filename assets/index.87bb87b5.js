import{u as r}from"./main.f0d1f01d.js";import{d as c,Y as n,bw as i,bx as u,by as p,D as l,b as t}from"./vendor.846be9ce.js";var e=c({methods:{toCopy(){r.copy("water is best!"),this.$message.success("\u590D\u5236\u6210\u529F")}}});const d=l("\u590D\u5236");function m(s,y,C,_,h,v){const a=n("a-button");return i(),u(a,{onClick:s.toCopy},{default:p(()=>[d]),_:1},8,["onClick"])}e.render=m;var f=`<cn>
#### \u590D\u5236
\u590D\u5236\u51FD\u6570\u7684\u7EDF\u4E00\u5C01\u88C5\u3002\u5F15\u7528\uFF1A\`import { utils } from '@fe6/water-pro';\`\uFF0C\u4F7F\u7528\uFF1A\`utils.copy('water is best!')\`
</cn>

<us>
#### copy
.
</us>
`,b=`<template>
  <a-button @click="toCopy">\u590D\u5236</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { utils } from '@fe6/water-pro';

export default defineComponent({
  methods: {
    toCopy() {
      utils.copy('water is best!');
      (this as any).$message.success('\u590D\u5236\u6210\u529F');
    },
  },
});
<\/script>
`;const o={cn:`# \u590D\u5236
  \u4E00\u4E2A\u590D\u5236\u7684\u5DE5\u5177\u65B9\u6CD5\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  - \u9700\u8981\u590D\u5236\u4E2A\u94FE\u63A5\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:"# fuzhi"};var g={category:"Components",subtitle:"\u4E0A\u4F20",type:"Data Entry",title:"Upload",render(){return t("div",null,[t(n("Md"),{cn:o.cn,us:o.us},null),t(n("demo-sort"),null,{default:()=>[t(n("demo-container"),{api:f,code:b},{default:()=>[t(e,null,null)]})]})])}};export{g as default};

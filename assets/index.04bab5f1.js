import{d as b,k as g,Y as d,bw as h,bx as y,by as n,b as t,bz as D,D as a,w as x,bL as V,bM as U,bN as O,F as v,o as B,bO as I}from"./vendor.846be9ce.js";var A=b({setup(){return{size:g("default"),blockContent:`AntV \u662F\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002`}}});const L=a("Small"),R=a("Default"),H=a("Large"),W=a("Introduction"),j=a(" In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. "),N=a(" After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to "),q=a(" uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development. "),M=a("Guidelines and Resources"),P=a(" We supply a series of design principles, practical patterns and high quality design resources ( "),G=a("Sketch"),Y=a(" and "),J=a("Axure"),K=a(" ), to help people create their product prototypes beautifully and efficiently. "),Q=a("Resource Download"),X=a(" Press "),Z=a("Esc"),tt=a(" to exit... "),et=a("\u4ECB\u7ECD"),nt=a(" \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002 "),at=a(" \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB Ant Design\u3002\u57FA\u4E8E "),dt=a("\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F"),ot=a(" \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E "),it=a("\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C"),st=a(" \u3002 "),lt=a("\u8BBE\u8BA1\u8D44\u6E90"),rt=a(" \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08 "),pt=a("Sketch"),ut=a(" \u548C "),ct=a("Axure"),gt=a(" \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002 "),ht=a("\u8BBE\u8BA1\u8D44\u6E90"),yt=a(" \u6309 "),ft=a("Esc"),bt=a(" \u952E\u9000\u51FA\u9605\u8BFB\u2026\u2026 ");function mt(e,o,u,m,_,z){const r=d("a-radio-button"),c=d("a-radio-group"),i=d("a-typography-title"),s=d("a-typography-paragraph"),l=d("a-typography-text"),f=d("a-typography-link"),p=d("a-divider"),F=d("a-typography");return h(),y(F,null,{default:n(()=>[t(c,{value:e.size,"onUpdate:value":o[1]||(o[1]=w=>e.size=w),"button-style":"solid"},{default:n(()=>[t(r,{value:"small"},{default:n(()=>[L]),_:1}),t(r,{value:"default"},{default:n(()=>[R]),_:1}),t(r,{value:"large"},{default:n(()=>[H]),_:1})]),_:1},8,["value"]),t(i,null,{default:n(()=>[W]),_:1}),t(s,{size:e.size},{default:n(()=>[j]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[N,t(l,{strong:""},{default:n(()=>[q]),_:1})]),_:1},8,["size"]),t(i,{level:2},{default:n(()=>[M]),_:1}),t(s,{size:e.size},{default:n(()=>[P,t(l,{code:""},{default:n(()=>[G]),_:1}),Y,t(l,{code:""},{default:n(()=>[J]),_:1}),K]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[t("ul",null,[t("li",null,[t(f,{href:"/docs/resources"},{default:n(()=>[Q]),_:1})])])]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[X,t(l,{keyboard:""},{default:n(()=>[Z]),_:1}),tt]),_:1},8,["size"]),t(p),t(i,null,{default:n(()=>[et]),_:1}),t(s,{size:e.size},{default:n(()=>[nt]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[at,t(l,{mark:""},{default:n(()=>[dt]),_:1}),ot,t(l,{strong:""},{default:n(()=>[it]),_:1}),st]),_:1},8,["size"]),t(i,{level:2},{default:n(()=>[lt]),_:1}),t(s,{size:e.size},{default:n(()=>[rt,t(l,{code:""},{default:n(()=>[pt]),_:1}),ut,t(l,{code:""},{default:n(()=>[ct]),_:1}),gt]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[t("ul",null,[t("li",null,[t(f,{href:"/docs/resources-cn"},{default:n(()=>[ht]),_:1})])])]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[t("blockquote",null,D(e.blockContent),1),t("pre",null,D(e.blockContent),1)]),_:1},8,["size"]),t(s,{size:e.size},{default:n(()=>[yt,t(l,{keyboard:""},{default:n(()=>[ft]),_:1}),bt]),_:1},8,["size"])]),_:1})}A.render=mt;var _t=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u5C55\u793A\u6587\u6863\u6837\u4F8B\u3002
</cn>

<us>
#### \u57FA\u672C\u4F7F\u7528
TODO
</us>
`,zt=`<template>
  <a-typography>
    <a-radio-group v-model:value="size" button-style="solid">
      <a-radio-button value="small">Small</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="large">Large</a-radio-button>
    </a-radio-group>
    <a-typography-title>Introduction</a-typography-title>
    <a-typography-paragraph :size="size">
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </a-typography-paragraph>
    <a-typography-paragraph :size="size">
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      <a-typography-text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development.
      </a-typography-text>
    </a-typography-paragraph>
    <a-typography-title :level="2">Guidelines and Resources</a-typography-title>
    <a-typography-paragraph :size="size">
      We supply a series of design principles, practical patterns and high quality design resources
      (
      <a-typography-text code>Sketch</a-typography-text>
      and
      <a-typography-text code>Axure</a-typography-text>
      ), to help people create their product prototypes beautifully and efficiently.
    </a-typography-paragraph>

    <a-typography-paragraph :size="size">
      <ul>
        <li>
          <a-typography-link href="/docs/resources">Resource Download</a-typography-link>
        </li>
      </ul>
    </a-typography-paragraph>

    <a-typography-paragraph :size="size">
      Press
      <a-typography-text keyboard>Esc</a-typography-text>
      to exit...
    </a-typography-paragraph>

    <a-divider />

    <a-typography-title>\u4ECB\u7ECD</a-typography-title>
    <a-typography-paragraph :size="size">
      \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002
    </a-typography-paragraph>
    <a-typography-paragraph :size="size">
      \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB
      Ant Design\u3002\u57FA\u4E8E
      <a-typography-text mark>\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F</a-typography-text>
      \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E
      <a-typography-text strong>\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C</a-typography-text>
      \u3002
    </a-typography-paragraph>
    <a-typography-title :level="2">\u8BBE\u8BA1\u8D44\u6E90</a-typography-title>
    <a-typography-paragraph :size="size">
      \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08
      <a-typography-text code>Sketch</a-typography-text>
      \u548C
      <a-typography-text code>Axure</a-typography-text>
      \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002
    </a-typography-paragraph>

    <a-typography-paragraph :size="size">
      <ul>
        <li>
          <a-typography-link href="/docs/resources-cn">\u8BBE\u8BA1\u8D44\u6E90</a-typography-link>
        </li>
      </ul>
    </a-typography-paragraph>

    <a-typography-paragraph :size="size">
      <blockquote>{{ blockContent }}</blockquote>
      <pre>{{ blockContent }}</pre>
    </a-typography-paragraph>

    <a-typography-paragraph :size="size">
      \u6309
      <a-typography-text keyboard>Esc</a-typography-text>
      \u952E\u9000\u51FA\u9605\u8BFB\u2026\u2026
    </a-typography-paragraph>
  </a-typography>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref('default'),
      blockContent: \`AntV \u662F\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002\`,
    };
  },
});
<\/script>
`,k=b({setup(){const e=g("This is an editable text.");return x(e,()=>{console.log("editableStr",e.value)}),{size:g("default"),editableStr:e,customIconStr:g("Custom Edit icon and replace tooltip text."),hideTooltipStr:g("Hide Edit tooltip."),lengthLimitedStr:g("This is an editable text with limited length.")}},components:{HighlightOutlined:V,SmileOutlined:U,SmileFilled:O}});const vt=a("Small"),Dt=a("Default"),At=a("Large"),kt=a("click to edit text"),Et=a("This is a copyable text."),Tt=a(" Replace copy text. "),St={key:"copy-tooltip"},Ct={key:"copied-tooltip"},$t=a(" Hide Copy tooltips. ");function Ft(e,o,u,m,_,z){const r=d("a-radio-button"),c=d("a-radio-group"),i=d("a-typography-paragraph"),s=d("HighlightOutlined"),l=d("SmileOutlined"),f=d("SmileFilled");return h(),y(v,null,[t(c,{value:e.size,"onUpdate:value":o[1]||(o[1]=p=>e.size=p),"button-style":"solid"},{default:n(()=>[t(r,{value:"small"},{default:n(()=>[vt]),_:1}),t(r,{value:"default"},{default:n(()=>[Dt]),_:1}),t(r,{value:"large"},{default:n(()=>[At]),_:1})]),_:1},8,["value"]),t(i,{size:e.size,content:e.editableStr,"onUpdate:content":o[2]||(o[2]=p=>e.editableStr=p),editable:""},null,8,["size","content"]),t(i,{size:e.size,content:e.customIconStr,"onUpdate:content":o[3]||(o[3]=p=>e.customIconStr=p),editable:""},{editableIcon:n(()=>[t(s)]),editableTooltip:n(()=>[kt]),_:1},8,["size","content"]),t(i,{size:e.size,content:e.hideTooltipStr,"onUpdate:content":o[4]||(o[4]=p=>e.hideTooltipStr=p),editable:{tooltip:!1}},null,8,["size","content"]),t(i,{size:e.size,content:e.lengthLimitedStr,"onUpdate:content":o[5]||(o[5]=p=>e.lengthLimitedStr=p),editable:{maxlength:50,autoSize:{maxRows:5,minRows:3}}},null,8,["size","content"]),t(i,{size:e.size,copyable:""},{default:n(()=>[Et]),_:1},8,["size"]),t(i,{size:e.size,copyable:{text:"Hello, Ant Design!"}},{default:n(()=>[Tt]),_:1},8,["size"]),t(i,{size:e.size,copyable:"",content:"Custom Copy icon and replace tooltips text."},{copyableIcon:n(({copied:p})=>[p?(h(),y(f,{key:"copied-icon"})):(h(),y(l,{key:"copy-icon"}))]),copyableTooltip:n(({copied:p})=>[p?(h(),y("span",Ct,"you clicked!!")):(h(),y("span",St,"click here"))]),_:1},8,["size"]),t(i,{size:e.size,copyable:{tooltips:!1}},{default:n(()=>[$t]),_:1},8,["size"])],64)}k.render=Ft;var wt=`<cn>
#### \u53EF\u4EA4\u4E92
\u63D0\u4F9B\u53EF\u7F16\u8F91\u548C\u53EF\u590D\u5236\u7B49\u989D\u5916\u7684\u4EA4\u4E92\u80FD\u529B\u3002
</cn>

<us>
#### \u53EF\u4EA4\u4E92
TODO
</us>
`,xt=`<template>
  <a-radio-group v-model:value="size" button-style="solid">
    <a-radio-button value="small">Small</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="large">Large</a-radio-button>
  </a-radio-group>
  <a-typography-paragraph :size="size" v-model:content="editableStr" editable />
  <a-typography-paragraph :size="size" v-model:content="customIconStr" editable>
    <template v-slot:editableIcon><HighlightOutlined /></template>
    <template v-slot:editableTooltip>click to edit text</template>
  </a-typography-paragraph>
  <a-typography-paragraph :size="size" v-model:content="hideTooltipStr" :editable="{ tooltip: false }" />
  <a-typography-paragraph :size="size"
    v-model:content="lengthLimitedStr"
    :editable="{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }"
  />

  <a-typography-paragraph :size="size" copyable>This is a copyable text.</a-typography-paragraph>
  <a-typography-paragraph :size="size" :copyable="{ text: 'Hello, Ant Design!' }">
    Replace copy text.
  </a-typography-paragraph>
  <a-typography-paragraph :size="size" copyable content="Custom Copy icon and replace tooltips text.">
    <template v-slot:copyableIcon="{ copied }">
      <SmileOutlined v-if="!copied" key="copy-icon" />
      <SmileFilled v-else key="copied-icon" />
    </template>
    <template v-slot:copyableTooltip="{ copied }">
      <span v-if="!copied" key="copy-tooltip">click here</span>
      <span v-else key="copied-tooltip">you clicked!!</span>
    </template>
  </a-typography-paragraph>
  <a-typography-paragraph :size="size" :copyable="{ tooltips: false }">
    Hide Copy tooltips.
  </a-typography-paragraph>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const editableStr = ref('This is an editable text.');
    watch(editableStr, () => {
      console.log('editableStr', editableStr.value);
    });
    return {
      size: ref('default'),
      editableStr,
      customIconStr: ref('Custom Edit icon and replace tooltip text.'),
      hideTooltipStr: ref('Hide Edit tooltip.'),
      lengthLimitedStr: ref('This is an editable text with limited length.'),
    };
  },
  components: {
    HighlightOutlined,
    SmileOutlined,
    SmileFilled,
  },
});
<\/script>
`,E=b({setup(){return{size:g("default"),ellipsis:g(!0)}}});const Vt=a("Small"),Ut=a("Default"),Ot=a("Large");function Bt(e,o,u,m,_,z){const r=d("a-radio-button"),c=d("a-radio-group"),i=d("a-switch"),s=d("a-typography-paragraph"),l=d("a-typography-text");return h(),y(v,null,[t(c,{value:e.size,"onUpdate:value":o[1]||(o[1]=f=>e.size=f),"button-style":"solid"},{default:n(()=>[t(r,{value:"small"},{default:n(()=>[Vt]),_:1}),t(r,{value:"default"},{default:n(()=>[Ut]),_:1}),t(r,{value:"large"},{default:n(()=>[Ot]),_:1})]),_:1},8,["value"]),t(i,{checked:e.ellipsis,"onUpdate:checked":o[2]||(o[2]=f=>e.ellipsis=f)},null,8,["checked"]),t(s,{size:e.size,ellipsis:e.ellipsis,content:` Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`},null,8,["size","ellipsis"]),t(s,{size:e.size,ellipsis:e.ellipsis?{rows:2,expandable:!0,symbol:"more"}:!1,content:`Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`},null,8,["size","ellipsis"]),t(l,{size:e.size,style:e.ellipsis?{width:"100px"}:{},ellipsis:e.ellipsis?{tooltip:"I am ellipsis now!"}:!1,content:"Ant Design, a design language for background applications, is refined by Ant UED Team."},null,8,["size","style","ellipsis"])],64)}E.render=Bt;var It=`<cn>
#### \u7701\u7565\u53F7
\u591A\u884C\u6587\u672C\u7701\u7565\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 \`tooltip\` \u5C5E\u6027\u914D\u7F6E\u7701\u7565\u5C55\u793A\u5185\u5BB9\uFF0C\u5927\u91CF\u6587\u672C\u65F6\u63A8\u8350\u4F18\u5148\u4F7F\u7528 \`expandable\` \u3002
</cn>

<us>
#### \u7701\u7565\u53F7
TODO
</us>
`,Lt=`<template>
  <a-radio-group v-model:value="size" button-style="solid">
    <a-radio-button value="small">Small</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="large">Large</a-radio-button>
  </a-radio-group>
  <a-switch v-model:checked="ellipsis" />
  <a-typography-paragraph
    :size="size"
    :ellipsis="ellipsis"
    content=" Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team."
  />

  <a-typography-paragraph
    :size="size"
    :ellipsis="ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false"
    content="Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team."
  />

  <a-typography-text
    :size="size"
    :style="ellipsis ? { width: '100px' } : {}"
    :ellipsis="ellipsis ? { tooltip: 'I am ellipsis now!' } : false"
    content="Ant Design, a design language for background applications, is refined by Ant UED Team."
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref('default'),
      ellipsis: ref(true),
    };
  },
});
<\/script>
`,T=b({setup(){return{size:g("default")}}});const Rt=a("Small"),Ht=a("Default"),Wt=a("Large"),jt=a("Ant Design Vue (default)"),Nt=a("Ant Design Vue (secondary)"),qt=a("Ant Design Vue (success)"),Mt=a("Ant Design Vue (warning)"),Pt=a("Ant Design Vue (danger)"),Gt=a("Ant Design Vue (disabled)"),Yt=a("Ant Design Vue (mark)"),Jt=a("Ant Design Vue (code)"),Kt=a("Ant Design Vue (keyboard)"),Qt=a("Ant Design Vue (underline)"),Xt=a("Ant Design Vue (delete)"),Zt=a("Ant Design Vue (strong)"),te=a(" Ant Design Vue (Link) ");function ee(e,o,u,m,_,z){const r=d("a-radio-button"),c=d("a-radio-group"),i=d("a-typography-text"),s=d("a-typography-link"),l=d("a-space");return h(),y(l,{direction:"vertical"},{default:n(()=>[t(c,{value:e.size,"onUpdate:value":o[1]||(o[1]=f=>e.size=f),"button-style":"solid"},{default:n(()=>[t(r,{value:"small"},{default:n(()=>[Rt]),_:1}),t(r,{value:"default"},{default:n(()=>[Ht]),_:1}),t(r,{value:"large"},{default:n(()=>[Wt]),_:1})]),_:1},8,["value"]),t(i,{size:e.size},{default:n(()=>[jt]),_:1},8,["size"]),t(i,{styleReset:"",size:e.size,type:"secondary"},{default:n(()=>[Nt]),_:1},8,["size"]),t(i,{size:e.size,type:"success"},{default:n(()=>[qt]),_:1},8,["size"]),t(i,{size:e.size,type:"warning"},{default:n(()=>[Mt]),_:1},8,["size"]),t(i,{size:e.size,type:"danger"},{default:n(()=>[Pt]),_:1},8,["size"]),t(i,{size:e.size,disabled:""},{default:n(()=>[Gt]),_:1},8,["size"]),t(i,{size:e.size,mark:""},{default:n(()=>[Yt]),_:1},8,["size"]),t(i,{size:e.size,code:""},{default:n(()=>[Jt]),_:1},8,["size"]),t(i,{size:e.size,keyboard:""},{default:n(()=>[Kt]),_:1},8,["size"]),t(i,{size:e.size,underline:""},{default:n(()=>[Qt]),_:1},8,["size"]),t(i,{size:e.size,delete:""},{default:n(()=>[Xt]),_:1},8,["size"]),t(i,{size:e.size,strong:""},{default:n(()=>[Zt]),_:1},8,["size"]),t(s,{size:e.size,href:"https://antdv.com",target:"_blank"},{default:n(()=>[te]),_:1},8,["size"])]),_:1})}T.render=ee;var ne=`<cn>
#### \u6587\u672C\u4E0E\u8D85\u94FE\u63A5\u7EC4\u4EF6
\u5185\u7F6E\u4E0D\u540C\u6837\u5F0F\u7684\u6587\u672C\u4EE5\u53CA\u8D85\u94FE\u63A5\u7EC4\u4EF6\u3002
</cn>

<us>
#### \u6587\u672C\u4E0E\u8D85\u94FE\u63A5\u7EC4\u4EF6
TODO
</us>
`,ae=`<template>
  <a-space direction="vertical">
    <a-radio-group v-model:value="size" button-style="solid">
      <a-radio-button value="small">Small</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="large">Large</a-radio-button>
    </a-radio-group>
    <a-typography-text :size="size">Ant Design Vue (default)</a-typography-text>
    <a-typography-text styleReset :size="size" type="secondary">Ant Design Vue (secondary)</a-typography-text>
    <a-typography-text :size="size" type="success">Ant Design Vue (success)</a-typography-text>
    <a-typography-text :size="size" type="warning">Ant Design Vue (warning)</a-typography-text>
    <a-typography-text :size="size" type="danger">Ant Design Vue (danger)</a-typography-text>
    <a-typography-text :size="size" disabled>Ant Design Vue (disabled)</a-typography-text>
    <a-typography-text :size="size" mark>Ant Design Vue (mark)</a-typography-text>
    <a-typography-text :size="size" code>Ant Design Vue (code)</a-typography-text>
    <a-typography-text :size="size" keyboard>Ant Design Vue (keyboard)</a-typography-text>
    <a-typography-text :size="size" underline>Ant Design Vue (underline)</a-typography-text>
    <a-typography-text :size="size" delete>Ant Design Vue (delete)</a-typography-text>
    <a-typography-text :size="size" strong>Ant Design Vue (strong)</a-typography-text>
    <a-typography-link :size="size" href="https://antdv.com" target="_blank">
      Ant Design Vue (Link)
    </a-typography-link>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref('default'),
    };
  },
});
<\/script>
`,S=b({setup(){const e=g(1),o=B(()=>({rows:e.value,expandable:!0,suffix:"--William Shakespeare",onEllipsis:u=>{console.log("Ellipsis changed:",u)}}));return{size:g("default"),rows:e,ellipsis:o,article:"To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life"}}});const de=a("Small"),oe=a("Default"),ie=a("Large");function se(e,o,u,m,_,z){const r=d("a-slider"),c=d("a-radio-button"),i=d("a-radio-group"),s=d("a-typography-paragraph");return h(),y(v,null,[t(r,{value:e.rows,"onUpdate:value":o[1]||(o[1]=l=>e.rows=l),min:1,max:10},null,8,["value"]),t(i,{value:e.size,"onUpdate:value":o[2]||(o[2]=l=>e.size=l),"button-style":"solid"},{default:n(()=>[t(c,{value:"small"},{default:n(()=>[de]),_:1}),t(c,{value:"default"},{default:n(()=>[oe]),_:1}),t(c,{value:"large"},{default:n(()=>[ie]),_:1})]),_:1},8,["value"]),t(s,{size:e.size,ellipsis:e.ellipsis,title:`${e.article}--William Shakespeare`,content:e.article},null,8,["size","ellipsis","title","content"])],64)}S.render=se;var le=`<cn>
#### \u540E\u7F00
\u6DFB\u52A0\u540E\u7F00\u7684\u7701\u7565\u3002
</cn>

<us>
#### \u540E\u7F00
TODO
</us>
`,re=`<template>
  <a-slider v-model:value="rows" :min="1" :max="10" />
  <a-radio-group v-model:value="size" button-style="solid">
    <a-radio-button value="small">Small</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="large">Large</a-radio-button>
  </a-radio-group>
  <a-typography-paragraph
    :size="size"
    :ellipsis="ellipsis"
    :title="\`\${article}--William Shakespeare\`"
    :content="article"
  ></a-typography-paragraph>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const rows = ref(1);
    const ellipsis = computed(() => {
      return {
        rows: rows.value,
        expandable: true,
        suffix: '--William Shakespeare',
        onEllipsis: (ellipsis: boolean) => {
          console.log('Ellipsis changed:', ellipsis);
        },
      };
    });
    return {
      size: ref('default'),
      rows,
      ellipsis,
      article:
        "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life",
    };
  },
});
<\/script>
`;const C={},pe=a("h1. Ant Design Vue"),ue=a("h2. Ant Design Vue"),ce=a("h3. Ant Design Vue"),ge=a("h4. Ant Design Vue"),he=a("h5. Ant Design Vue"),ye=a("h6. Ant Design Vue");function fe(e,o){const u=d("a-typography-title");return h(),y("div",null,[t(u,null,{default:n(()=>[pe]),_:1}),t(u,{level:2},{default:n(()=>[ue]),_:1}),t(u,{level:3},{default:n(()=>[ce]),_:1}),t(u,{level:4},{default:n(()=>[ge]),_:1}),t(u,{level:5},{default:n(()=>[he]),_:1}),t(u,{level:6},{default:n(()=>[ye]),_:1})])}C.render=fe;var be=C,me=`<cn>
#### \u6807\u9898\u7EC4\u4EF6
\u5C55\u793A\u4E0D\u540C\u7EA7\u522B\u7684\u6807\u9898\u3002
</cn>

<us>
#### \u6807\u9898\u7EC4\u4EF6
TODO
</us>
`,_e=`<template>
  <div>
    <a-typography-title>h1. Ant Design Vue</a-typography-title>
    <a-typography-title :level="2">h2. Ant Design Vue</a-typography-title>
    <a-typography-title :level="3">h3. Ant Design Vue</a-typography-title>
    <a-typography-title :level="4">h4. Ant Design Vue</a-typography-title>
    <a-typography-title :level="5">h5. Ant Design Vue</a-typography-title>
    <a-typography-title :level="6">h6. Ant Design Vue</a-typography-title>
  </div>
</template>


`;const ze={class:"markdown-body"},ve=I(`<h2>API</h2><h3>Typography.Text</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>code</td><td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>copyable</td><td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td><td>boolean | <a href="#copyable">copyable</a></td><td>-</td><td></td></tr><tr><td>delete</td><td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td>3.14.0</td></tr><tr><td>disabled</td><td>\u7981\u7528\u6587\u672C</td><td>boolean</td><td>-</td><td></td></tr><tr><td>editable</td><td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td><td>boolean | <a href="#copyable">copyable</a></td><td>-</td><td></td></tr><tr><td>ellipsis</td><td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565</td><td>boolean</td><td>-</td><td></td></tr><tr><td>keyboard</td><td>\u6DFB\u52A0\u952E\u76D8\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>mark</td><td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>strong</td><td>\u662F\u5426\u52A0\u7C97</td><td>boolean</td><td>-</td><td></td></tr><tr><td>type</td><td>\u6587\u672C\u7C7B\u578B</td><td><code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>true</td><td></td></tr><tr><td>content(v-model)</td><td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td><td>string</td><td>-</td><td></td></tr></tbody></table><h3>Typography.Title</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>code</td><td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>copyable</td><td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td><td>boolean | <a href="#copyable">copyable</a></td><td>-</td><td></td></tr><tr><td>delete</td><td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td>3.14.0</td></tr><tr><td>disabled</td><td>\u7981\u7528\u6587\u672C</td><td>boolean</td><td>-</td><td></td></tr><tr><td>editable</td><td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td><td>boolean | <a href="#copyable">copyable</a></td><td>-</td><td></td></tr><tr><td>ellipsis</td><td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565</td><td>boolean</td><td>-</td><td></td></tr><tr><td>level</td><td>\u91CD\u8981\u7A0B\u5EA6\uFF0C\u76F8\u5F53\u4E8E h1\u3001h2\u3001h3\u3001h4\u3001h5\u3001h6</td><td>number: 1, 2, 3, 4, 5, 6</td><td>1</td><td></td></tr><tr><td>mark</td><td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>strong</td><td>\u662F\u5426\u52A0\u7C97</td><td>boolean</td><td>-</td><td></td></tr><tr><td>type</td><td>\u6587\u672C\u7C7B\u578B</td><td><code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>true</td><td></td></tr><tr><td>content(v-model)</td><td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td><td>string</td><td>-</td><td></td></tr></tbody></table><h3>Typography.Paragraph</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>code</td><td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>copyable</td><td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td><td>boolean | <a href="#copyable">copyable</a></td><td>-</td><td></td></tr><tr><td>delete</td><td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td>3.14.0</td></tr><tr><td>disabled</td><td>\u7981\u7528\u6587\u672C</td><td>boolean</td><td>-</td><td></td></tr><tr><td>editable</td><td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td><td>boolean | <a href="#copyable">copyable</a></td><td>-</td><td></td></tr><tr><td>ellipsis</td><td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565</td><td>boolean</td><td>-</td><td></td></tr><tr><td>mark</td><td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>strong</td><td>\u662F\u5426\u52A0\u7C97</td><td>boolean</td><td>-</td><td></td></tr><tr><td>type</td><td>\u6587\u672C\u7C7B\u578B</td><td><code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>true</td><td></td></tr><tr><td>content(v-model)</td><td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td><td>string</td><td>-</td><td></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>editableIcon</td><td>\u81EA\u5B9A\u4E49\u7F16\u8F91\u56FE\u6807</td><td></td><td><code>&lt;EditOutlined /&gt;</code></td><td></td></tr><tr><td>editableTooltip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C\uFF0C\u5F53 editable.tooltip = false \u65F6\u5173\u95ED</td><td></td><td>\u7F16\u8F91</td><td></td></tr><tr><td>copyableIcon</td><td>\u81EA\u5B9A\u4E49\u62F7\u8D1D\u56FE\u6807</td><td></td><td><code>copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;</code></td><td></td></tr><tr><td>copyableTooltip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848\uFF0C\u5F53 copyable.tooltip = false \u65F6\u5173\u95ED</td><td></td><td><code>copied ? &#39;\u590D\u5236\u6210\u529F&#39; : &#39;\u590D\u5236&#39;</code></td><td></td></tr><tr><td>ellipsisSymbol</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848</td><td></td><td></td><td></td></tr><tr><td>ellipsisTooltip</td><td>\u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F</td><td></td><td></td><td></td></tr></tbody></table><h3>copyable</h3><pre><code class="language-json">{
  text: string,
  onCopy: function,
  tooltip: false,
}
</code></pre><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>text</td><td>\u62F7\u8D1D\u5230\u526A\u5207\u677F\u91CC\u7684\u6587\u672C</td><td>string</td><td></td><td></td></tr><tr><td>tooltip</td><td>\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>onCopy</td><td>\u62F7\u8D1D\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td></td><td></td></tr></tbody></table><h3>editable</h3><pre><code class="language-json">{
  tooltip: boolean,
  editing: boolean,
  maxlength: number,
  autoSize: boolean | { minRows: number, maxRows: number },
  onStart: function,
  onChange: function(string),
  onCancel: function,
  onEnd: function,
}
</code></pre><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoSize</td><td>\u81EA\u52A8 resize \u6587\u672C\u57DF</td><td>boolean</td><td>{ minRows: number, maxRows: number }</td><td></td></tr><tr><td>editing</td><td>\u63A7\u5236\u662F\u5426\u662F\u7F16\u8F91\u4E2D\u72B6\u6001</td><td>boolean</td><td>false</td><td></td></tr><tr><td>maxlength</td><td>\u7F16\u8F91\u4E2D\u6587\u672C\u57DF\u6700\u5927\u957F\u5EA6</td><td>number</td><td></td><td></td></tr><tr><td>tooltip</td><td>\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>onCancel</td><td>\u6309 ESC \u9000\u51FA\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1</td><td>function</td><td></td><td></td></tr><tr><td>onChange</td><td>\u6587\u672C\u57DF\u7F16\u8F91\u65F6\u89E6\u53D1</td><td>function(event)</td><td></td><td></td></tr><tr><td>onStart</td><td>\u8FDB\u5165\u7F16\u8F91\u4E2D\u72B6\u6001\u65F6\u89E6\u53D1</td><td>function</td><td></td><td></td></tr><tr><td>onEnd</td><td>\u6309 ENTER \u7ED3\u675F\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1</td><td>function</td><td></td><td></td></tr></tbody></table><h3>ellipsis</h3><pre><code class="language-json">{
  rows: number,
  expandable: boolean,
  suffix: string,
  symbol: string,
  tooltip: boolean,
  onExpand: function(event),
  onEllipsis: function(ellipsis),
}
</code></pre><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>expandable</td><td>\u662F\u5426\u53EF\u5C55\u5F00</td><td>boolean</td><td></td><td></td></tr><tr><td>rows</td><td>\u6700\u591A\u663E\u793A\u7684\u884C\u6570</td><td>boolean</td><td></td><td></td></tr><tr><td>suffix</td><td>\u81EA\u5B9A\u4E49\u7701\u7565\u5185\u5BB9\u540E\u7F00</td><td>string</td><td></td><td></td></tr><tr><td>symbol</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848</td><td>string</td><td>\u5C55\u5F00</td><td></td></tr><tr><td>tooltip</td><td>\u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F</td><td>boolean | string</td><td></td><td></td></tr><tr><td>onEllipsis</td><td>\u89E6\u53D1\u7701\u7565\u65F6\u7684\u56DE\u8C03</td><td>function(ellipsis)</td><td></td><td></td></tr><tr><td>onExpand</td><td>\u70B9\u51FB\u5C55\u5F00\u65F6\u7684\u56DE\u8C03</td><td>function(event)</td><td></td><td></td></tr></tbody></table>`,18),De={expose:[],setup(e){return(o,u)=>(h(),y("div",ze,[ve]))}};var Ae=De;const $={cn:`# \u6392\u7248
  \u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  - \u5F53\u9700\u8981\u4E00\u5217\u57FA\u4E8E\u6587\u672C\u7684\u57FA\u7840\u64CD\u4F5C\u65F6\uFF0C\u5982\u62F7\u8D1D/\u7701\u7565/\u53EF\u7F16\u8F91\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Upload
  Upload file by selecting or dragging.


## Typography

  TODO

  ## Examples
  `};var Ee={category:"Components",subtitle:"\u6392\u7248",type:"General",title:"Typography",render(){return t("div",null,[t(d("Md"),{cn:$.cn,us:$.us},null),t(d("demo-sort"),{cols:1},{default:()=>[t(d("demo-container"),{api:_t,code:zt},{default:()=>[t(A,null,null)]}),t(d("demo-container"),{api:wt,code:xt},{default:()=>[t(k,null,null)]}),t(d("demo-container"),{api:It,code:Lt},{default:()=>[t(E,null,null)]}),t(d("demo-container"),{api:ne,code:ae},{default:()=>[t(T,null,null)]}),t(d("demo-container"),{api:le,code:re},{default:()=>[t(S,null,null)]}),t(d("demo-container"),{api:me,code:_e},{default:()=>[t(be,null,null)]})]}),t(d("api"),null,{default:()=>[t(Ae,null,null)]})])}};export{Ee as default};

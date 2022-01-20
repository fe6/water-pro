var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var b=(o,r,t)=>r in o?I(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,w=(o,r)=>{for(var t in r||(r={}))E.call(r,t)&&b(o,t,r[t]);if(y)for(var t of y(r))T.call(r,t)&&b(o,t,r[t]);return o};import{Y as s,bw as d,bx as c,b as e,by as n,F as p,D as l,bG as $,bH as C,bI as F,d as V,r as Y,ao as N,bV as k,bO as P}from"./vendor.846be9ce.js";const K={},M=l("col-12"),q=l("col-12"),D=l("col-8"),H=l("col-8"),U=l("col-8"),L=l("col-6"),W=l("col-6"),J=l("col-6"),Q=l("col-6");function X(o,r){const t=s("a-col"),a=s("a-row");return d(),c(p,null,[e(a,null,{default:n(()=>[e(t,{span:12},{default:n(()=>[M]),_:1}),e(t,{span:12},{default:n(()=>[q]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{span:8},{default:n(()=>[D]),_:1}),e(t,{span:8},{default:n(()=>[H]),_:1}),e(t,{span:8},{default:n(()=>[U]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{span:6},{default:n(()=>[L]),_:1}),e(t,{span:6},{default:n(()=>[W]),_:1}),e(t,{span:6},{default:n(()=>[J]),_:1}),e(t,{span:6},{default:n(()=>[Q]),_:1})]),_:1})],64)}K.render=X;var Z=K,ee="<cn>\n#### \u57FA\u7840\u6805\u683C\n\u4ECE\u5806\u53E0\u5230\u6C34\u5E73\u6392\u5217\u3002\n\u4F7F\u7528\u5355\u4E00\u7684\u4E00\u7EC4 `Row` \u548C `Col` \u6805\u683C\u7EC4\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u6240\u6709\u5217\uFF08Col\uFF09\u5FC5\u987B\u653E\u5728 `Row` \u5185\u3002\n</cn>\n\n<us>\n#### Basic Grid\nFrom the stack to the horizontal arrangement.\nYou can create a basic grid system by using a single set of `Row` and `Col` grid assembly, all of the columns (Col) must be placed in `Row`.\n</us>\n",te=`<template>
  <a-row>
    <a-col :span="12">col-12</a-col>
    <a-col :span="12">col-12</a-col>
  </a-row>
  <a-row>
    <a-col :span="8">col-8</a-col>
    <a-col :span="8">col-8</a-col>
    <a-col :span="8">col-8</a-col>
  </a-row>
  <a-row>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
  </a-row>
</template>
`;const S={},ne=e("p",null,"Align Top",-1),oe=e("p",{class:"height-100"},"col-4",-1),le=e("p",{class:"height-50"},"col-4",-1),ae=e("p",{class:"height-120"},"col-4",-1),se=e("p",{class:"height-80"},"col-4",-1),re=e("p",null,"Align Center",-1),de=e("p",{class:"height-100"},"col-4",-1),ce=e("p",{class:"height-50"},"col-4",-1),ie=e("p",{class:"height-120"},"col-4",-1),ue=e("p",{class:"height-80"},"col-4",-1),pe=e("p",null,"Align Bottom",-1),_e=e("p",{class:"height-100"},"col-4",-1),fe=e("p",{class:"height-50"},"col-4",-1),me=e("p",{class:"height-120"},"col-4",-1),ge=e("p",{class:"height-80"},"col-4",-1);function he(o,r){const t=s("a-col"),a=s("a-row");return d(),c(p,null,[ne,e(a,{type:"flex",justify:"center",align:"top"},{default:n(()=>[e(t,{span:4},{default:n(()=>[oe]),_:1}),e(t,{span:4},{default:n(()=>[le]),_:1}),e(t,{span:4},{default:n(()=>[ae]),_:1}),e(t,{span:4},{default:n(()=>[se]),_:1})]),_:1}),re,e(a,{type:"flex",justify:"space-around",align:"middle"},{default:n(()=>[e(t,{span:4},{default:n(()=>[de]),_:1}),e(t,{span:4},{default:n(()=>[ce]),_:1}),e(t,{span:4},{default:n(()=>[ie]),_:1}),e(t,{span:4},{default:n(()=>[ue]),_:1})]),_:1}),pe,e(a,{type:"flex",justify:"space-between",align:"bottom"},{default:n(()=>[e(t,{span:4},{default:n(()=>[_e]),_:1}),e(t,{span:4},{default:n(()=>[fe]),_:1}),e(t,{span:4},{default:n(()=>[me]),_:1}),e(t,{span:4},{default:n(()=>[ge]),_:1})]),_:1})],64)}S.render=he;var ve=S,xe=`<cn>
#### Flex \u5BF9\u9F50
Flex \u5B50\u5143\u7D20\u5782\u76F4\u5BF9\u9F50\u3002
</cn>

<us>
#### Flex Alignment
Flex child elements vertically aligned.
</us>
`,ye=`<template>
  <p>Align Top</p>
  <a-row type="flex" justify="center" align="top">
    <a-col :span="4">
      <p class="height-100">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-50">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-120">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-80">col-4</p>
    </a-col>
  </a-row>

  <p>Align Center</p>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :span="4">
      <p class="height-100">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-50">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-120">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-80">col-4</p>
    </a-col>
  </a-row>

  <p>Align Bottom</p>
  <a-row type="flex" justify="space-between" align="bottom">
    <a-col :span="4">
      <p class="height-100">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-50">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-120">col-4</p>
    </a-col>
    <a-col :span="4">
      <p class="height-80">col-4</p>
    </a-col>
  </a-row>
</template>
`;const j={},be=l("Normal"),we=l("1 col-order-4"),$e=l("2 col-order-3"),Ce=l("3 col-order-2"),Fe=l("4 col-order-1"),ke=l("Responsive"),Ke=l(" 1 col-order-responsive "),Se=l(" 2 col-order-responsive "),je=l(" 3 col-order-responsive "),Re=l(" 4 col-order-responsive ");function Ge(o,r){const t=s("a-divider"),a=s("a-col"),u=s("a-row");return d(),c(p,null,[e(t,{orientation:"left"},{default:n(()=>[be]),_:1}),e(u,{type:"flex"},{default:n(()=>[e(a,{span:6,order:4},{default:n(()=>[we]),_:1}),e(a,{span:6,order:3},{default:n(()=>[$e]),_:1}),e(a,{span:6,order:2},{default:n(()=>[Ce]),_:1}),e(a,{span:6,order:1},{default:n(()=>[Fe]),_:1})]),_:1}),e(t,{orientation:"left"},{default:n(()=>[ke]),_:1}),e(u,{type:"flex"},{default:n(()=>[e(a,{span:6,xs:{order:1},sm:{order:2},md:{order:3},lg:{order:4}},{default:n(()=>[Ke]),_:1}),e(a,{span:6,xs:{order:2},sm:{order:1},md:{order:4},lg:{order:3}},{default:n(()=>[Se]),_:1}),e(a,{span:6,xs:{order:3},sm:{order:4},md:{order:2},lg:{order:2}},{default:n(()=>[je]),_:1}),e(a,{span:6,xs:{order:4},sm:{order:3},md:{order:1},lg:{order:1}},{default:n(()=>[Re]),_:1})]),_:1})],64)}j.render=Ge;var Oe=j,Ae=`<cn>
#### Flex \u6392\u5E8F
\u4ECE\u5806\u53E0\u5230\u6C34\u5E73\u6392\u5217\u3002
\u901A\u8FC7 Flex \u5E03\u5C40\u7684 Order \u6765\u6539\u53D8\u5143\u7D20\u7684\u6392\u5E8F\u3002
</cn>

<us>
#### Flex Order
To change the element sort by Flex layout order.
</us>
`,Be=`<template>
  <a-divider orientation="left">Normal</a-divider>
  <a-row type="flex">
    <a-col :span="6" :order="4">1 col-order-4</a-col>
    <a-col :span="6" :order="3">2 col-order-3</a-col>
    <a-col :span="6" :order="2">3 col-order-2</a-col>
    <a-col :span="6" :order="1">4 col-order-1</a-col>
  </a-row>
  <a-divider orientation="left">Responsive</a-divider>
  <a-row type="flex">
    <a-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
      1 col-order-responsive
    </a-col>
    <a-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
      2 col-order-responsive
    </a-col>
    <a-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }">
      3 col-order-responsive
    </a-col>
    <a-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }">
      4 col-order-responsive
    </a-col>
  </a-row>
</template>
`;const R={},ze=l("Percentage columns"),Ie=l("2 / 5"),Ee=l("3 / 5"),Te=l("Fill rest"),Ve=l("100px"),Ye=l("auto"),Ne=l("Raw flex style"),Pe=l("1 1 200px"),Me=l("0 1 300px");function qe(o,r){const t=s("a-divider"),a=s("a-col"),u=s("a-row");return d(),c(p,null,[e(t,{orientation:"left"},{default:n(()=>[ze]),_:1}),e(u,{type:"flex"},{default:n(()=>[e(a,{flex:2},{default:n(()=>[Ie]),_:1}),e(a,{flex:3},{default:n(()=>[Ee]),_:1})]),_:1}),e(t,{orientation:"left"},{default:n(()=>[Te]),_:1}),e(u,{type:"flex"},{default:n(()=>[e(a,{flex:"100px"},{default:n(()=>[Ve]),_:1}),e(a,{flex:"auto"},{default:n(()=>[Ye]),_:1})]),_:1}),e(t,{orientation:"left"},{default:n(()=>[Ne]),_:1}),e(u,{type:"flex"},{default:n(()=>[e(a,{flex:"1 1 200px"},{default:n(()=>[Pe]),_:1}),e(a,{flex:"0 1 300px"},{default:n(()=>[Me]),_:1})]),_:1})],64)}R.render=qe;var De=R,He=`<cn>
#### Flex \u586B\u5145
Col \u63D0\u4F9B \`flex\` \u5C5E\u6027\u4EE5\u652F\u6301\u586B\u5145\u3002
</cn>

<us>
#### Flex fill
Col provides \`flex\` prop to support fill rest.
</us>
`,Ue=`<template>
  <a-divider orientation="left">Percentage columns</a-divider>
  <a-row type="flex">
    <a-col :flex="2">2 / 5</a-col>
    <a-col :flex="3">3 / 5</a-col>
  </a-row>
  <a-divider orientation="left">Fill rest</a-divider>
  <a-row type="flex">
    <a-col flex="100px">100px</a-col>
    <a-col flex="auto">auto</a-col>
  </a-row>
  <a-divider orientation="left">Raw flex style</a-divider>
  <a-row type="flex">
    <a-col flex="1 1 200px">1 1 200px</a-col>
    <a-col flex="0 1 300px">0 1 300px</a-col>
  </a-row>
</template>
`;const g={},_=F();$("data-v-7eff1fb9");const Le={class:"gutter-example"},We=e("div",{class:"gutter-box"},"col-6",-1),Je=e("div",{class:"gutter-box"},"col-6",-1),Qe=e("div",{class:"gutter-box"},"col-6",-1),Xe=e("div",{class:"gutter-box"},"col-6",-1);C();const Ze=_((o,r)=>{const t=s("a-col"),a=s("a-row");return d(),c("div",Le,[e(a,{gutter:16},{default:_(()=>[e(t,{class:"gutter-row",span:6},{default:_(()=>[We]),_:1}),e(t,{class:"gutter-row",span:6},{default:_(()=>[Je]),_:1}),e(t,{class:"gutter-row",span:6},{default:_(()=>[Qe]),_:1}),e(t,{class:"gutter-row",span:6},{default:_(()=>[Xe]),_:1})]),_:1})])});g.render=Ze;g.__scopeId="data-v-7eff1fb9";var et=g,tt="<cn>\n#### \u533A\u5757\u95F4\u9694\n\u6805\u683C\u5E38\u5E38\u9700\u8981\u548C\u95F4\u9694\u8FDB\u884C\u914D\u5408\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 `Row` \u7684 `gutter` \u5C5E\u6027\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 `(16+8n)px` \u4F5C\u4E3A\u6805\u683C\u95F4\u9694\u3002(n \u662F\u81EA\u7136\u6570)\n\u5982\u679C\u8981\u652F\u6301\u54CD\u5E94\u5F0F\uFF0C\u53EF\u4EE5\u5199\u6210 `{ xs: 8, sm: 16, md: 24, lg: 32 }`\u3002\n\u5982\u679C\u9700\u8981\u5782\u76F4\u95F4\u8DDD\uFF0C\u53EF\u4EE5\u5199\u6210\u6570\u7EC4\u5F62\u5F0F `[\u6C34\u5E73\u95F4\u8DDD, \u5782\u76F4\u95F4\u8DDD]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`\u3002\n> \u6570\u7EC4\u5F62\u5F0F\u5782\u76F4\u95F4\u8DDD\u5728 `1.5.0` \u4E4B\u540E\u652F\u6301\u3002\n</cn>\n\n<us>\n#### Grid Gutter\nYou can use the `gutter` property of `Row` as grid spacing, we recommend set it to `(16 + 8n) px`. (`n` stands for natural number.)\nYou can set it to a object like `{ xs: 8, sm: 16, md: 24, lg: 32 }` for responsive design.\nYou can use a array to set vertical spacing, `[horizontal, vertical]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`.\n> vertical gutter was supported after `1.5.0`.\n</us>\n",nt=`<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
`;const G={},ot=l("col-8"),lt=l("col-8"),at=l("col-6 col-offset-6"),st=l("col-6 col-offset-6"),rt=l("col-12 col-offset-6");function dt(o,r){const t=s("a-col"),a=s("a-row");return d(),c(p,null,[e(a,null,{default:n(()=>[e(t,{span:8},{default:n(()=>[ot]),_:1}),e(t,{span:8,offset:8},{default:n(()=>[lt]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{span:6,offset:6},{default:n(()=>[at]),_:1}),e(t,{span:6,offset:6},{default:n(()=>[st]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{span:12,offset:6},{default:n(()=>[rt]),_:1})]),_:1})],64)}G.render=dt;var ct=G,it=`<cn>
#### \u5DE6\u53F3\u504F\u79FB
\u5217\u504F\u79FB\u3002
\u4F7F\u7528 \`offset\` \u53EF\u4EE5\u5C06\u5217\u5411\u53F3\u4FA7\u504F\u3002\u4F8B\u5982\uFF0C\`:offset="4"\` \u5C06\u5143\u7D20\u5411\u53F3\u4FA7\u504F\u79FB\u4E86 4 \u4E2A\u5217\uFF08column\uFF09\u7684\u5BBD\u5EA6\u3002
</cn>

<us>
#### a-column offset
\`Offset\` can set the column to the right side. For example, using \`offset = {4}\` can set the element shifted to the right four columns width.
</us>
`,ut=`<template>
  <a-row>
    <a-col :span="8">col-8</a-col>
    <a-col :span="8" :offset="8">col-8</a-col>
  </a-row>
  <a-row>
    <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>
    <a-col :span="6" :offset="6">col-6 col-offset-6</a-col>
  </a-row>
  <a-row>
    <a-col :span="12" :offset="6">col-12 col-offset-6</a-col>
  </a-row>
</template>
`;const O={},pt=l("Col"),_t=l("Col"),ft=l("Col");function mt(o,r){const t=s("a-col"),a=s("a-row");return d(),c(a,null,{default:n(()=>[e(t,{xs:{span:5,offset:1},lg:{span:6,offset:2}},{default:n(()=>[pt]),_:1}),e(t,{xs:{span:11,offset:1},lg:{span:6,offset:2}},{default:n(()=>[_t]),_:1}),e(t,{xs:{span:5,offset:1},lg:{span:6,offset:2}},{default:n(()=>[ft]),_:1})]),_:1})}O.render=mt;var gt=O,ht='<cn>\n#### \u5176\u4ED6\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F\n`span` `pull` `push` `offset` `order` \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5185\u5D4C\u5230 `xs` `sm` `md` `lg` `xl` `xxl` \u5C5E\u6027\u4E2D\u6765\u4F7F\u7528\u3002\n\u5176\u4E2D `:xs="6"` \u76F8\u5F53\u4E8E `:xs="{ span: 6 }"`\u3002\n</cn>\n\n<us>\n#### More responsive\n`span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` properties to use,\nwhere `:xs="6"` is equivalent to `:xs="{span: 6}"`.\n</us>\n',vt=`<template>
  <a-row>
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</a-col>
    <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</a-col>
    <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</a-col>
  </a-row>
</template>
`;const A={},xt=l("Col"),yt=l("Col"),bt=l("Col");function wt(o,r){const t=s("a-col"),a=s("a-row");return d(),c(a,null,{default:n(()=>[e(t,{xs:2,sm:4,md:6,lg:8,xl:10},{default:n(()=>[xt]),_:1}),e(t,{xs:20,sm:16,md:12,lg:8,xl:4},{default:n(()=>[yt]),_:1}),e(t,{xs:2,sm:4,md:6,lg:8,xl:10},{default:n(()=>[bt]),_:1})]),_:1})}A.render=wt;var $t=A,Ct="<cn>\n#### \u54CD\u5E94\u5F0F\u5E03\u5C40\n\u53C2\u7167 Bootstrap \u7684 [\u54CD\u5E94\u5F0F\u8BBE\u8BA1](http://getbootstrap.com/css/#grid-media-queries)\uFF0C\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A`xs` `sm` `md` `lg` `xl`  `xxl`\u3002\n</cn>\n\n<us>\n#### \u54CD\u5E94\u5F0F\u5E03\u5C40\nReferring to the Bootstrap [responsive design] (http://getbootstrap.com/css/#grid-media-queries), here preset six dimensions: `xs` `sm` `md` `lg` `xl`.\n</us>\n",Ft=`<template>
  <a-row>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
  </a-row>
</template>
`;const B={},kt=l("col-18 col-push-6"),Kt=l("col-6 col-pull-18");function St(o,r){const t=s("a-col"),a=s("a-row");return d(),c(a,null,{default:n(()=>[e(t,{span:18,push:6},{default:n(()=>[kt]),_:1}),e(t,{span:6,pull:18},{default:n(()=>[Kt]),_:1})]),_:1})}B.render=St;var jt=B,Rt=`<cn>
#### \u6805\u683C\u6392\u5E8F
\u5217\u6392\u5E8F\u3002
\u901A\u8FC7\u4F7F\u7528 \`push\` \u548C \`pull\` \u7C7B\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u6539\u53D8\u5217\uFF08column\uFF09\u7684\u987A\u5E8F\u3002
</cn>

<us>
#### Grid sort
By using \`push\` and\` pull\` class you can easily change column order.
</us>
`,Gt=`<template>
  <a-row>
    <a-col :span="18" :push="6">col-18 col-push-6</a-col>
    <a-col :span="6" :pull="18">col-6 col-pull-18</a-col>
  </a-row>
</template>
`,h=V({setup(){const o=Y({gutterKey:1,vgutterKey:1,colCountKey:2,gutters:{},colCounts:{},vgutters:{}});return[8,16,24,32,40,48].forEach((r,t)=>{o.gutters[t]=r}),[8,16,24,32,40,48].forEach((r,t)=>{o.vgutters[t]=r}),[2,3,4,6,8,12].forEach((r,t)=>{o.colCounts[t]=r}),w({},N(o))}});const f=F();$("data-v-60c1bd15");const Ot={id:"components-grid-demo-playground"},At={style:{"margin-bottom":"16px","text-align":"left"}},Bt=e("span",{style:{"margin-right":"6px"}},"Horizontal Gutter (px):",-1),zt={style:{width:"50%"}},It=e("span",{style:{"margin-right":"6px"}},"Vertical Gutter (px):",-1),Et={style:{width:"50%"}},Tt=e("span",{style:{"margin-right":"6px"}},"Column Count:",-1),Vt={style:{width:"50%"}},Yt=e("div",null,"Column",-1),Nt=e("div",null,"Column",-1);C();const Pt=f((o,r,t,a,u,Wt)=>{const m=s("a-slider"),v=s("a-col"),x=s("a-row");return d(),c("div",Ot,[e("div",At,[Bt,e("div",zt,[e(m,{value:o.gutterKey,"onUpdate:value":r[1]||(r[1]=i=>o.gutterKey=i),min:0,max:Object.keys(o.gutters).length-1,marks:o.gutters,step:null},null,8,["value","max","marks"])]),It,e("div",Et,[e(m,{value:o.vgutterKey,"onUpdate:value":r[2]||(r[2]=i=>o.vgutterKey=i),min:0,max:Object.keys(o.vgutters).length-1,marks:o.vgutters,step:null},null,8,["value","max","marks"])]),Tt,e("div",Vt,[e(m,{value:o.colCountKey,"onUpdate:value":r[3]||(r[3]=i=>o.colCountKey=i),min:0,max:Object.keys(o.colCounts).length-1,marks:o.colCounts,step:null},null,8,["value","max","marks"])])]),e(x,{gutter:[o.gutters[o.gutterKey],o.vgutters[o.vgutterKey]]},{default:f(()=>[(d(!0),c(p,null,k(o.colCounts[o.colCountKey],i=>(d(),c(v,{key:i.toString(),span:24/o.colCounts[o.colCountKey]},{default:f(()=>[Yt]),_:2},1032,["span"]))),128))]),_:1},8,["gutter"]),e(x,{gutter:[o.gutters[o.gutterKey],o.vgutters[o.vgutterKey]]},{default:f(()=>[(d(!0),c(p,null,k(o.colCounts[o.colCountKey],i=>(d(),c(v,{key:i.toString(),span:24/o.colCounts[o.colCountKey]},{default:f(()=>[Nt]),_:2},1032,["span"]))),128))]),_:1},8,["gutter"])])});h.render=Pt;h.__scopeId="data-v-60c1bd15";var Mt=`<cn>
#### \u6805\u683C\u914D\u7F6E\u5668
\u53EF\u4EE5\u7B80\u5355\u914D\u7F6E\u51E0\u79CD\u7B49\u5206\u6805\u683C\u548C\u95F4\u8DDD\u3002
</cn>

<us>
#### Playground
A simple playground for column count and gutter.
</us>
`,qt=`<template>
  <div id="components-grid-demo-playground">
    <div style="margin-bottom: 16px; text-align: left;">
      <span style="margin-right: 6px">Horizontal Gutter (px):</span>
      <div style="width: 50%">
        <a-slider
          v-model:value="gutterKey"
          :min="0"
          :max="Object.keys(gutters).length - 1"
          :marks="gutters"
          :step="null"
        />
      </div>
      <span style="margin-right: 6px">Vertical Gutter (px):</span>
      <div style="width: 50%">
        <a-slider
          v-model:value="vgutterKey"
          :min="0"
          :max="Object.keys(vgutters).length - 1"
          :marks="vgutters"
          :step="null"
        />
      </div>
      <span style="margin-right: 6px">Column Count:</span>
      <div style="width: 50%">
        <a-slider
          v-model:value="colCountKey"
          :min="0"
          :max="Object.keys(colCounts).length - 1"
          :marks="colCounts"
          :step="null"
        />
      </div>
    </div>
    <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
      <a-col
        v-for="item in colCounts[colCountKey]"
        :key="item.toString()"
        :span="24 / colCounts[colCountKey]"
      >
        <div>Column</div>
      </a-col>
    </a-row>
    <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
      <a-col
        v-for="item in colCounts[colCountKey]"
        :key="item.toString()"
        :span="24 / colCounts[colCountKey]"
      >
        <div>Column</div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive<{
      gutterKey: number;
      vgutterKey: number;
      colCountKey: number;
      gutters: { [key: number]: number };
      colCounts: { [key: number]: number };
      vgutters: { [key: number]: number };
    }>({
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2,
      gutters: {},
      colCounts: {},
      vgutters: {},
    });
    [8, 16, 24, 32, 40, 48].forEach((value: number, i: number) => {
      state.gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      state.vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      state.colCounts[i] = value;
    });
    return {
      ...toRefs(state),
    };
  },
});
<\/script>
<style scoped>
#components-grid-demo-playground :deep(.ant-col) {
  background: transparent;
  border: 0;
}
#components-grid-demo-playground :deep(.ant-col) > div {
  background: #00a0e9;
  height: 120px;
  line-height: 120px;
  font-size: 13px;
}
#components-grid-demo-playground pre {
  background: #f9f9f9;
  border-radius: 6px;
  font-size: 13px;
  padding: 8px 16px;
}
</style>
`;const Dt={class:"markdown-body"},Ht=P('<h2>API</h2><h3>Row</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>align</td><td>flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\uFF1A<code>top</code> <code>middle</code> <code>bottom</code></td><td>string</td><td><code>top</code></td></tr><tr><td>gutter</td><td>\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u4EE5\u5199\u6210\u50CF\u7D20\u503C\u6216\u652F\u6301\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u5199\u6CD5\u6765\u8BBE\u7F6E\u6C34\u5E73\u95F4\u9694 <code>{ xs: 8, sm: 16, md: 24}</code>\u3002\u6216\u8005\u4F7F\u7528\u6570\u7EC4\u5F62\u5F0F\u540C\u65F6\u8BBE\u7F6E <code>[\u6C34\u5E73\u95F4\u8DDD, \u5782\u76F4\u95F4\u8DDD]</code>\uFF08<code>1.5.0 \u540E\u652F\u6301</code>\uFF09\u3002</td><td>number/object/array</td><td>0</td></tr><tr><td>justify</td><td>flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F\uFF1A<code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td><td>string</td><td><code>start</code></td></tr><tr><td>type</td><td>\u5E03\u5C40\u6A21\u5F0F\uFF0C\u53EF\u9009 <code>flex</code>\uFF0C<a href="http://caniuse.com/#search=flex">\u73B0\u4EE3\u6D4F\u89C8\u5668</a> \u4E0B\u6709\u6548</td><td>string</td><td></td></tr></tbody></table><h3>Col</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>flex</td><td>flex \u5E03\u5C40\u586B\u5145</td><td>string|number</td><td>-</td></tr><tr><td>offset</td><td>\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C</td><td>number</td><td>0</td></tr><tr><td>order</td><td>\u6805\u683C\u987A\u5E8F\uFF0C<code>flex</code> \u5E03\u5C40\u6A21\u5F0F\u4E0B\u6709\u6548</td><td>number</td><td>0</td></tr><tr><td>pull</td><td>\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570</td><td>number</td><td>0</td></tr><tr><td>push</td><td>\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570</td><td>number</td><td>0</td></tr><tr><td>span</td><td>\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E <code>display: none</code></td><td>number</td><td>-</td></tr><tr><td>xs</td><td><code>&lt;576px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td>number|object</td><td>-</td></tr><tr><td>sm</td><td><code>\u2265576px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td>number|object</td><td>-</td></tr><tr><td>md</td><td><code>\u2265768px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td>number|object</td><td>-</td></tr><tr><td>lg</td><td><code>\u2265992px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td>number|object</td><td>-</td></tr><tr><td>xl</td><td><code>\u22651200px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td>number|object</td><td>-</td></tr><tr><td>xxl</td><td><code>\u22651600px</code> \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5C5E\u6027\u7684\u5BF9\u8C61</td><td>number|object</td><td>-</td></tr></tbody></table><p>\u54CD\u5E94\u5F0F\u6805\u683C\u7684\u65AD\u70B9\u6269\u5C55\u81EA <a href="https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints">BootStrap 4 \u7684\u89C4\u5219</a>\uFF08\u4E0D\u5305\u542B\u94FE\u63A5\u91CC <code>occasionally</code> \u7684\u90E8\u5206)\u3002</p>',6),Ut={expose:[],setup(o){return(r,t)=>(d(),c("div",Dt,[Ht]))}};var Lt=Ut;const z={cn:'# Grid \u6805\u683C\n  24 \u6805\u683C\u7CFB\u7EDF\u3002\n## \u8BBE\u8BA1\u7406\u5FF5\n  \u5728\u591A\u6570\u4E1A\u52A1\u60C5\u51B5\u4E0B\uFF0CAnt Design Vue \u9700\u8981\u5728\u8BBE\u8BA1\u533A\u57DF\u5185\u89E3\u51B3\u5927\u91CF\u4FE1\u606F\u6536\u7EB3\u7684\u95EE\u9898\uFF0C\u56E0\u6B64\u5728 12 \u6805\u683C\u7CFB\u7EDF\u7684\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u5C06\u6574\u4E2A\u8BBE\u8BA1\u5EFA\u8BAE\u533A\u57DF\u6309\u7167 24 \u7B49\u5206\u7684\u539F\u5219\u8FDB\u884C\u5212\u5206\u3002\n\u5212\u5206\u4E4B\u540E\u7684\u4FE1\u606F\u533A\u5757\u6211\u4EEC\u79F0\u4E4B\u4E3A\u300E\u76D2\u5B50\u300F\u3002\u5EFA\u8BAE\u6A2A\u5411\u6392\u5217\u7684\u76D2\u5B50\u6570\u91CF\u6700\u591A\u56DB\u4E2A\uFF0C\u6700\u5C11\u4E00\u4E2A\u3002\u300E\u76D2\u5B50\u300F\u5728\u6574\u4E2A\u5C4F\u5E55\u4E0A\u5360\u6BD4\u89C1\u4E0A\u56FE\u3002\u8BBE\u8BA1\u90E8\u5206\u57FA\u4E8E\u76D2\u5B50\u7684\u5355\u4F4D\u5B9A\u5236\u76D2\u5B50\u5185\u90E8\u7684\u6392\u7248\u89C4\u5219\uFF0C\u4EE5\u4FDD\u8BC1\u89C6\u89C9\u5C42\u9762\u7684\u8212\u9002\u611F\u3002\n## \u6982\u8FF0\n\u5E03\u5C40\u7684\u6805\u683C\u5316\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u662F\u57FA\u4E8E\u884C\uFF08row\uFF09\u548C\u5217\uFF08col\uFF09\u6765\u5B9A\u4E49\u4FE1\u606F\u533A\u5757\u7684\u5916\u90E8\u6846\u67B6\uFF0C\u4EE5\u4FDD\u8BC1\u9875\u9762\u7684\u6BCF\u4E2A\u533A\u57DF\u80FD\u591F\u7A33\u5065\u5730\u6392\u5E03\u8D77\u6765\u3002\u4E0B\u9762\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\uFF1A\n- \u901A\u8FC7`row`\u5728\u6C34\u5E73\u65B9\u5411\u5EFA\u7ACB\u4E00\u7EC4`column`\uFF08\u7B80\u5199col\uFF09\n- \u4F60\u7684\u5185\u5BB9\u5E94\u5F53\u653E\u7F6E\u4E8E`col`\u5185\uFF0C\u5E76\u4E14\uFF0C\u53EA\u6709`col`\u53EF\u4EE5\u4F5C\u4E3A`row`\u7684\u76F4\u63A5\u5143\u7D20\n- \u6805\u683C\u7CFB\u7EDF\u4E2D\u7684\u5217\u662F\u6307 1 \u5230 24 \u7684\u503C\u6765\u8868\u793A\u5176\u8DE8\u8D8A\u7684\u8303\u56F4\u3002\u4F8B\u5982\uFF0C\u4E09\u4E2A\u7B49\u5BBD\u7684\u5217\u53EF\u4EE5\u4F7F\u7528 `<a-col :span="8" />` \u6765\u521B\u5EFA\n- \u5982\u679C\u4E00\u4E2A`row`\u4E2D\u7684`col`\u603B\u548C\u8D85\u8FC7 24\uFF0C\u90A3\u4E48\u591A\u4F59\u7684`col`\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\u53E6\u8D77\u4E00\u884C\u6392\u5217\n## Flex \u5E03\u5C40\n\u6211\u4EEC\u7684\u6805\u683C\u5316\u7CFB\u7EDF\u652F\u6301 Flex \u5E03\u5C40\uFF0C\u5141\u8BB8\u5B50\u5143\u7D20\u5728\u7236\u8282\u70B9\u5185\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F - \u5C45\u5DE6\u3001\u5C45\u4E2D\u3001\u5C45\u53F3\u3001\u7B49\u5BBD\u6392\u5217\u3001\u5206\u6563\u6392\u5217\u3002\u5B50\u5143\u7D20\u4E0E\u5B50\u5143\u7D20\u4E4B\u95F4\uFF0C\u652F\u6301\u9876\u90E8\u5BF9\u9F50\u3001\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50\u3001\u5E95\u90E8\u5BF9\u9F50\u7684\u65B9\u5F0F\u3002\u540C\u65F6\uFF0C\u652F\u6301\u4F7F\u7528 order \u6765\u5B9A\u4E49\u5143\u7D20\u7684\u6392\u5217\u987A\u5E8F\u3002\nFlex \u5E03\u5C40\u662F\u57FA\u4E8E 24 \u6805\u683C\u6765\u5B9A\u4E49\u6BCF\u4E00\u4E2A\u300E\u76D2\u5B50\u300F\u7684\u5BBD\u5EA6\uFF0C\u4F46\u4E0D\u62D8\u6CE5\u4E8E\u6805\u683C\u3002\n          ## \u4EE3\u7801\u6F14\u793A\n  ',us:'# Grid\n  24 Grids System\u3002\n## Design concept\n  In most business situations, Ant Design Vue needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.\n\nWe name the divided area \'box\'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.\n\n## Outline\n\nIn the grid system, we define the frame outside the information area based on `row` and `column`, to ensure that every area can have stable arrangement.\n\nFollowing is a brief look at how it works:\n\n- Establish a set of `column` in the horizontal space defined by `row` (abbreviated col)\n- Your content elements should be placed directly in the `col`, and only `col` should be placed directly in `row`\n- The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by `<a-col :span="8" />`.\n- If the sum of `col` spans in a `row` are more than 24, then the overflowing `col` as a whole will start a new line arrangement.\n\n## Flex layout\nOur grid systems support Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using `order`.\nFlex layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.\n## Examples\n  '};var Xt={category:"Components",subtitle:"\u6805\u683C",type:"Layout",zhType:"\u5E03\u5C40",cols:1,title:"Grid",render(){return e("div",null,[e(s("Md"),{cn:z.cn,us:z.us},null),e("div",{id:"components-grid-demo-all"},[e(s("demo-sort"),{cols:1},{default:()=>[e(s("demo-container"),{api:ee,code:te},{default:()=>[e(Z,null,null)]}),e(s("demo-container"),{api:xe,code:ye},{default:()=>[e(ve,null,null)]}),e(s("demo-container"),{api:Ae,code:Be},{default:()=>[e(Oe,null,null)]}),e(s("demo-container"),{api:He,code:Ue},{default:()=>[e(De,null,null)]}),e(s("demo-container"),{api:tt,code:nt},{default:()=>[e(et,null,null)]}),e(s("demo-container"),{api:it,code:ut},{default:()=>[e(ct,null,null)]}),e(s("demo-container"),{api:ht,code:vt},{default:()=>[e(gt,null,null)]}),e(s("demo-container"),{api:Ct,code:Ft},{default:()=>[e($t,null,null)]}),e(s("demo-container"),{api:Rt,code:Gt},{default:()=>[e(jt,null,null)]}),e(s("demo-container"),{api:Mt,code:qt},{default:()=>[e(h,null,null)]})]})]),e(s("api"),null,{default:()=>[e(Lt,null,null)]})])}};export{Xt as default};

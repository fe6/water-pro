import{d as i,aS as U,Y as e,bw as r,bx as c,b as n,by as d,F as u,bT as W,bG as v,bH as x,bI as w,bU as z,ag as E,k as $,bV as M,bO as L}from"./vendor.846be9ce.js";var V="<cn>\n#### \u57FA\u672C\u4F7F\u7528\n\u7B80\u5355\u7684\u5FBD\u7AE0\u5C55\u793A\uFF0C\u5F53 `count` \u4E3A `0` \u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 `showZero` \u4FEE\u6539\u4E3A\u663E\u793A\u3002\n</cn>\n\n<us>\n#### basic\nSimplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.\n</us>\n",C=i({components:{ClockCircleOutlined:U}});const Z=n("a",{href:"#",class:"head-example"},null,-1),j=n("a",{href:"#",class:"head-example"},null,-1),F=n("a",{href:"#",class:"head-example"},null,-1);function Y(o,s,t,_,g,m){const a=e("a-badge"),l=e("clock-circle-outlined");return r(),c(u,null,[n(a,{count:"5"},{default:d(()=>[Z]),_:1}),n(a,{count:"0","show-zero":""},{default:d(()=>[j]),_:1}),n(a,null,{count:d(()=>[n(l,{style:{color:"#f5222d"}})]),default:d(()=>[F]),_:1})],64)}C.render=Y;var A=`<template>
  <a-badge count="5">
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge count="0" show-zero>
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge>
    <template #count>
      <clock-circle-outlined style="color: #f5222d" />
    </template>
    <a href="#" class="head-example"></a>
  </a-badge>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
<\/script>
`,G=`<cn>
#### \u72EC\u7ACB\u4F7F\u7528
\u4E0D\u5305\u88F9\u4EFB\u4F55\u5143\u7D20\u5373\u662F\u72EC\u7ACB\u4F7F\u7528\uFF0C\u53EF\u81EA\u5B9A\u6837\u5F0F\u5C55\u73B0\u3002
\u5728\u53F3\u4E0A\u89D2\u7684 badge \u5219\u9650\u5B9A\u4E3A\u7EA2\u8272\u3002
</cn>

<us>
#### Standalone
Used in standalone when children is empty.
</us>
`;const y={};function H(o,s){const t=e("a-badge");return r(),c(u,null,[n(t,{count:"25"}),n(t,{count:"4","number-style":{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),n(t,{count:"109","number-style":{backgroundColor:"#52c41a"}})],64)}y.render=H;var R=y,J=`<template>
  <a-badge count="25" />
  <a-badge
    count="4"
    :number-style="{
      backgroundColor: '#fff',
      color: '#999',
      boxShadow: '0 0 0 1px #d9d9d9 inset',
    }"
  />
  <a-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
</template>
`,K=`<cn>
#### \u8BA8\u5ACC\u7684\u5C0F\u7EA2\u70B9
\u6CA1\u6709\u5177\u4F53\u7684\u6570\u5B57\u3002
</cn>

<us>
#### Red badge
This will simply display a red badge, without a specific count.
If count equals 0, it won't display the dot.
</us>
`,f=i({components:{NotificationOutlined:W}});const p=w();v("data-v-6202dc5d");const Q={id:"components-badge-demo-dot"},X=n("a",{href:"#"},"Link something",-1);x();const nn=p((o,s,t,_,g,m)=>{const a=e("notification-outlined"),l=e("a-badge");return r(),c("div",Q,[n(l,{dot:""},{default:p(()=>[n(a)]),_:1}),n(l,{count:0,dot:""},{default:p(()=>[n(a)]),_:1}),n(l,{dot:""},{default:p(()=>[X]),_:1})])});f.render=nn;f.__scopeId="data-v-6202dc5d";var tn=`<template>
  <div id="components-badge-demo-dot">
    <a-badge dot>
      <notification-outlined />
    </a-badge>
    <a-badge :count="0" dot>
      <notification-outlined />
    </a-badge>
    <a-badge dot>
      <a href="#">Link something</a>
    </a-badge>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { NotificationOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    NotificationOutlined,
  },
});
<\/script>
<style scoped>
#components-badge-demo-dot .anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
`,en=`<cn>
#### \u52A8\u6001
  \u5C55\u793A\u52A8\u6001\u53D8\u5316\u7684\u6548\u679C\u3002
</cn>

<us>
#### Dynamic
  The count will be animated as it changes.
</us>
`,k=i({components:{MinusOutlined:z,PlusOutlined:E},setup(){const o=$(5),s=()=>{o.value>=1&&o.value--},t=()=>{o.value++};return{count:o,show:$(!0),decline:s,increase:t}}});const on=n("a",{href:"#",class:"head-example"},null,-1),an={style:{"margin-top":"10px"}},dn=n("a",{href:"#",class:"head-example"},null,-1);function sn(o,s,t,_,g,m){const a=e("a-badge"),l=e("minus-outlined"),b=e("a-button"),N=e("plus-outlined"),q=e("a-button-group"),P=e("a-switch");return r(),c(u,null,[n("div",null,[n(a,{count:o.count},{default:d(()=>[on]),_:1},8,["count"]),n(q,null,{default:d(()=>[n(b,{onClick:o.decline},{default:d(()=>[n(l)]),_:1},8,["onClick"]),n(b,{onClick:o.increase},{default:d(()=>[n(N)]),_:1},8,["onClick"])]),_:1})]),n("div",an,[n(a,{dot:o.show},{default:d(()=>[dn]),_:1},8,["dot"]),n(P,{checked:o.show,"onUpdate:checked":s[1]||(s[1]=D=>o.show=D)},null,8,["checked"])])],64)}k.render=sn;var ln=`<template>
  <div>
    <a-badge :count="count">
      <a href="#" class="head-example" />
    </a-badge>
    <a-button-group>
      <a-button @click="decline">
        <minus-outlined />
      </a-button>
      <a-button @click="increase">
        <plus-outlined />
      </a-button>
    </a-button-group>
  </div>
  <div style="margin-top: 10px">
    <a-badge :dot="show">
      <a href="#" class="head-example" />
    </a-badge>
    <a-switch v-model:checked="show" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  setup() {
    const count = ref<number>(5);
    const decline = () => {
      if (count.value >= 1) {
        count.value--;
      }
    };

    const increase = () => {
      count.value++;
    };
    return {
      count,
      show: ref<boolean>(true),
      decline,
      increase,
    };
  },
});
<\/script>
`,rn="<cn>\n#### \u5C01\u9876\u6570\u5B57\n\u8D85\u8FC7 `overflowCount` \u7684\u4F1A\u663E\u793A\u4E3A `${overflowCount}+`\uFF0C\u9ED8\u8BA4\u7684 `overflowCount` \u4E3A `99`\u3002\n</cn>\n\n<us>\n#### Overflow Count\n`${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.\n</us>\n";const S={},cn=n("a",{href:"#",class:"head-example"},null,-1),un=n("a",{href:"#",class:"head-example"},null,-1),pn=n("a",{href:"#",class:"head-example"},null,-1),_n=n("a",{href:"#",class:"head-example"},null,-1);function gn(o,s){const t=e("a-badge");return r(),c(u,null,[n(t,{count:99},{default:d(()=>[cn]),_:1}),n(t,{count:100},{default:d(()=>[un]),_:1}),n(t,{count:99,"overflow-count":10},{default:d(()=>[pn]),_:1}),n(t,{count:1e3,"overflow-count":999},{default:d(()=>[_n]),_:1})],64)}S.render=gn;var mn=S,fn=`<template>
  <a-badge :count="99">
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge :count="100">
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge :count="99" :overflow-count="10">
    <a href="#" class="head-example" />
  </a-badge>
  <a-badge :count="1000" :overflow-count="999">
    <a href="#" class="head-example" />
  </a-badge>
</template>
`,hn=`<cn>
#### \u72B6\u6001\u70B9
  \u7528\u4E8E\u8868\u793A\u72B6\u6001\u7684\u5C0F\u5706\u70B9\u3002
</cn>

<us>
#### Status
  Standalone badge with status.
</us>
`;const O={},bn=n("br",null,null,-1),vn=n("br",null,null,-1),xn=n("br",null,null,-1),wn=n("br",null,null,-1),$n=n("br",null,null,-1);function Cn(o,s){const t=e("a-badge");return r(),c(u,null,[n(t,{status:"success"}),n(t,{status:"error"}),n(t,{status:"default"}),n(t,{status:"processing"}),n(t,{status:"warning"}),bn,n(t,{status:"success",text:"Success"}),vn,n(t,{status:"error",text:"Error"}),xn,n(t,{status:"default",text:"Default"}),wn,n(t,{status:"processing",text:"Processing"}),$n,n(t,{status:"warning",text:"warning"})],64)}O.render=Cn;var yn=O,kn=`<template>
  <a-badge status="success" />
  <a-badge status="error" />
  <a-badge status="default" />
  <a-badge status="processing" />
  <a-badge status="warning" />
  <br />
  <a-badge status="success" text="Success" />
  <br />
  <a-badge status="error" text="Error" />
  <br />
  <a-badge status="default" text="Default" />
  <br />
  <a-badge status="processing" text="Processing" />
  <br />
  <a-badge status="warning" text="warning" />
</template>
`,Sn=`<cn>
#### \u81EA\u5B9A\u4E49\u6807\u9898
  \u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u72B6\u6001\u70B9\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57
</cn>

<us>
#### Title
  The badge will display \`title\` when hovered over, instead of \`count\`.
</us>
`;const h={},B=w();v("data-v-672ab938");const On={id:"components-badge-demo-title"},Bn=n("a",{href:"#",class:"head-example"},null,-1);x();const In=B((o,s)=>{const t=e("a-badge");return r(),c("div",On,[n(t,{count:5,title:"Custom hover text"},{default:B(()=>[Bn]),_:1})])});h.render=In;h.__scopeId="data-v-672ab938";var Tn=h,Nn=`<template>
  <div id="components-badge-demo-title">
    <a-badge :count="5" title="Custom hover text">
      <a href="#" class="head-example" />
    </a-badge>
  </div>
</template>

<style scoped>
#components-badge-demo-title .ant-badge:not(.ant-badge-status) {
  margin-right: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
`,qn=`<cn>
#### \u591A\u5F69\u5FBD\u6807
1.5.0 \u540E\u65B0\u589E\u3002\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u5FBD\u6807\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002
</cn>

<us>
#### Colorful Badge
New feature after 3.16.0. We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.
</us>
`;const Pn=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];var I=i({setup(){return{colors:Pn}}});const Dn=n("h4",{style:{"margin-bottom":"16px"}},"Presets:",-1),Un=n("h4",{style:{margin:"16px 0"}},"Custom:",-1),Wn=n("br",null,null,-1),zn=n("br",null,null,-1),En=n("br",null,null,-1);function Mn(o,s,t,_,g,m){const a=e("a-badge");return r(),c(u,null,[Dn,n("div",null,[(r(!0),c(u,null,M(o.colors,l=>(r(),c("div",{key:l},[n(a,{color:l,text:l},null,8,["color","text"])]))),128))]),Un,n("div",null,[n(a,{color:"#f50",text:"#f50"}),Wn,n(a,{color:"#2db7f5",text:"#2db7f5"}),zn,n(a,{color:"#87d068",text:"#87d068"}),En,n(a,{color:"#108ee9",text:"#108ee9"})])],64)}I.render=Mn;var Ln=`<template>
  <h4 style="margin-bottom: 16px">Presets:</h4>
  <div>
    <div v-for="color in colors" :key="color">
      <a-badge :color="color" :text="color" />
    </div>
  </div>
  <h4 style="margin: 16px 0">Custom:</h4>
  <div>
    <a-badge color="#f50" text="#f50" />
    <br />
    <a-badge color="#2db7f5" text="#2db7f5" />
    <br />
    <a-badge color="#87d068" text="#87d068" />
    <br />
    <a-badge color="#108ee9" text="#108ee9" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
export default defineComponent({
  setup() {
    return {
      colors,
    };
  },
});
<\/script>
`;const Vn={class:"markdown-body"},Zn=L(`<h2>API</h2><pre><code class="language-html">&lt;a-badge :count=&quot;5&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;head-example&quot; /&gt;
&lt;/a-badge&gt;
</code></pre><pre><code class="language-html">&lt;a-badge :count=&quot;5&quot; /&gt;
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>color</td><td>\u81EA\u5B9A\u4E49\u5C0F\u5706\u70B9\u7684\u989C\u8272</td><td>string</td><td>-</td><td>1.5.0</td></tr><tr><td>count</td><td>\u5C55\u793A\u7684\u6570\u5B57\uFF0C\u5927\u4E8E overflowCount \u65F6\u663E\u793A\u4E3A <code>\${overflowCount}+</code>\uFF0C\u4E3A 0 \u65F6\u9690\u85CF</td><td>number | string | slot</td><td></td><td></td></tr><tr><td>dot</td><td>\u4E0D\u5C55\u793A\u6570\u5B57\uFF0C\u53EA\u6709\u4E00\u4E2A\u5C0F\u7EA2\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>offset</td><td>\u8BBE\u7F6E\u72B6\u6001\u70B9\u7684\u4F4D\u7F6E\u504F\u79FB\uFF0C\u683C\u5F0F\u4E3A [x, y]</td><td>[number|string, number|string]</td><td>-</td><td></td></tr><tr><td>overflowCount</td><td>\u5C55\u793A\u5C01\u9876\u7684\u6570\u5B57\u503C</td><td>number</td><td>99</td><td></td></tr><tr><td>showZero</td><td>\u5F53\u6570\u503C\u4E3A 0 \u65F6\uFF0C\u662F\u5426\u5C55\u793A Badge</td><td>boolean</td><td>false</td><td></td></tr><tr><td>status</td><td>\u8BBE\u7F6E Badge \u4E3A\u72B6\u6001\u70B9</td><td>Enum{ \u2018success\u2019, &#39;processing, \u2018default\u2019, \u2018error\u2019, \u2018warning\u2019 }</td><td>\u2018\u2019</td><td></td></tr><tr><td>text</td><td>\u5728\u8BBE\u7F6E\u4E86 <code>status</code> \u7684\u524D\u63D0\u4E0B\u6709\u6548\uFF0C\u8BBE\u7F6E\u72B6\u6001\u70B9\u7684\u6587\u672C</td><td>string</td><td>\u2018\u2019</td><td></td></tr><tr><td>numberStyle</td><td>\u8BBE\u7F6E\u72B6\u6001\u70B9\u7684\u6837\u5F0F</td><td>object</td><td>\u2018\u2019</td><td></td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u72B6\u6001\u70B9\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57</td><td>string</td><td><code>count</code></td><td></td></tr></tbody></table>`,4),jn={expose:[],setup(o){return(s,t)=>(r(),c("div",Vn,[Zn]))}};var Fn=jn;const T={cn:`# Badge\u5FBD\u6807\u6570
         \u56FE\u6807\u53F3\u4E0A\u89D2\u7684\u5706\u5F62\u5FBD\u6807\u6570\u5B57\u3002
         ## \u4F55\u65F6\u4F7F\u7528
         \u4E00\u822C\u51FA\u73B0\u5728\u901A\u77E5\u56FE\u6807\u6216\u5934\u50CF\u7684\u53F3\u4E0A\u89D2\uFF0C\u7528\u4E8E\u663E\u793A\u9700\u8981\u5904\u7406\u7684\u6D88\u606F\u6761\u6570\uFF0C\u901A\u8FC7\u9192\u76EE\u89C6\u89C9\u5F62\u5F0F\u5438\u5F15\u7528\u6237\u5904\u7406\u3002
         ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Badge
         Small numerical value or status descriptor for UI elements.
         ## When To Use
         Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.
         ## Examples
        `};var An={category:"Components",subtitle:"\u5FBD\u6807\u6570",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Badge",render(){return n("div",{id:"components-badge-demo"},[n(e("Md"),{cn:T.cn,us:T.us},null),n(e("demo-sort"),null,{default:()=>[n(e("demo-container"),{api:V,code:A},{default:()=>[n(C,null,null)]}),n(e("demo-container"),{api:G,code:J},{default:()=>[n(R,null,null)]}),n(e("demo-container"),{api:rn,code:fn},{default:()=>[n(mn,null,null)]}),n(e("demo-container"),{api:K,code:tn},{default:()=>[n(f,null,null)]}),n(e("demo-container"),{api:hn,code:kn},{default:()=>[n(yn,null,null)]}),n(e("demo-container"),{api:en,code:ln},{default:()=>[n(k,null,null)]}),n(e("demo-container"),{api:Sn,code:Nn},{default:()=>[n(Tn,null,null)]}),n(e("demo-container"),{api:qn,code:Ln},{default:()=>[n(I,null,null)]})]}),n(e("api"),null,{default:()=>[n(Fn,null,null)]})])}};export{An as default};

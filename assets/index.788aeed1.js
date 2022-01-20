import{Y as n,bw as s,bx as a,b as e,F as _,d as g,bU as f,ag as h,k as b,by as d,bz as O,bO as A}from"./vendor.846be9ce.js";const v={};function B(r,c){const t=n("a-progress");return s(),a(_,null,[e(t,{percent:30}),e(t,{percent:50,status:"active"}),e(t,{percent:70,status:"exception"}),e(t,{percent:100}),e(t,{percent:50,"show-info":!1})],64)}v.render=B;var F=v,W=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6807\u51C6\u7684\u8FDB\u5EA6\u6761\u3002
</cn>

<us>
#### Progress bar
A standard progress bar.
</us>
`,j=`<template>
  <a-progress :percent="30" />
  <a-progress :percent="50" status="active" />
  <a-progress :percent="70" status="exception" />
  <a-progress :percent="100" />
  <a-progress :percent="50" :show-info="false" />
</template>
`;const y={};function I(r,c){const t=n("a-progress");return s(),a(_,null,[e(t,{type:"circle",percent:75}),e(t,{type:"circle",percent:70,status:"exception"}),e(t,{type:"circle",percent:100})],64)}y.render=I;var E=y,G=`<cn>
#### \u8FDB\u5EA6\u5708
\u5708\u5F62\u7684\u8FDB\u5EA6\u3002
</cn>

<us>
#### Circular progress bar
A circular progress bar.
</us>
`,N=`<template>
  <a-progress type="circle" :percent="75" />
  <a-progress type="circle" :percent="70" status="exception" />
  <a-progress type="circle" :percent="100" />
</template>
`;const k={},U={style:{width:"170px"}};function V(r,c){const t=n("a-progress");return s(),a("div",U,[e(t,{percent:30,size:"small"}),e(t,{percent:50,size:"small",status:"active"}),e(t,{percent:70,size:"small",status:"exception"}),e(t,{percent:100,size:"small"})])}k.render=V;var Y=k,T=`<cn>
#### \u5C0F\u578B\u8FDB\u5EA6\u6761
\u9002\u5408\u653E\u5728\u8F83\u72ED\u7A84\u7684\u533A\u57DF\u5185\u3002
</cn>

<us>
#### Mini size progress bar
Appropriate for a narrow area.
</us>
`,H=`<template>
  <div style="width: 170px">
    <a-progress :percent="30" size="small" />
    <a-progress :percent="50" size="small" status="active" />
    <a-progress :percent="70" size="small" status="exception" />
    <a-progress :percent="100" size="small" />
  </div>
</template>
`;const C={};function J(r,c){const t=n("a-progress");return s(),a(_,null,[e(t,{type:"circle",percent:30,width:80}),e(t,{type:"circle",percent:70,width:80,status:"exception"}),e(t,{type:"circle",percent:100,width:80})],64)}C.render=J;var K=C,Q=`<cn>
#### \u5C0F\u578B\u8FDB\u5EA6\u5708
\u5C0F\u4E00\u53F7\u7684\u5708\u5F62\u8FDB\u5EA6\u3002
</cn>

<us>
#### Mini size circular progress bar
A smaller circular progress bar.
</us>
`,R=`<template>
  <a-progress type="circle" :percent="30" :width="80" />
  <a-progress type="circle" :percent="70" :width="80" status="exception" />
  <a-progress type="circle" :percent="100" :width="80" />
</template>
`,P=g({components:{MinusOutlined:f,PlusOutlined:h},setup(){const r=b(0);return{defaultPercent:r,increase:()=>{const o=r.value+10;r.value=o>100?100:o},decline:()=>{const o=r.value-10;r.value=o<0?0:o}}}});function X(r,c,t,o,L,z){const p=n("a-progress"),l=n("minus-outlined"),i=n("a-button"),u=n("plus-outlined"),m=n("a-button-group");return s(),a("div",null,[e(p,{type:"circle",percent:r.defaultPercent},null,8,["percent"]),e(m,null,{default:d(()=>[e(i,{onClick:r.decline},{icon:d(()=>[e(l)]),_:1},8,["onClick"]),e(i,{onClick:r.increase},{icon:d(()=>[e(u)]),_:1},8,["onClick"])]),_:1})])}P.render=X;var Z=`<cn>
#### \u8FDB\u5EA6\u5708\u52A8\u6001\u5C55\u793A
\u4F1A\u52A8\u7684\u8FDB\u5EA6\u6761\u624D\u662F\u597D\u8FDB\u5EA6\u6761\u3002
</cn>

<us>
#### Dynamic circular progress bar
A dynamic progress bar is better.
</us>
`,ee=`<template>
  <div>
    <a-progress type="circle" :percent="defaultPercent" />
    <a-button-group>
      <a-button @click="decline">
        <template #icon><minus-outlined /></template>
      </a-button>
      <a-button @click="increase">
        <template #icon><plus-outlined /></template>
      </a-button>
    </a-button-group>
  </div>
</template>
<script lang="ts">
import { MinusOutlined } from '@ant-design/icons-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  setup() {
    const defaultPercent = ref<number>(0);

    const increase = () => {
      const percent = defaultPercent.value + 10;
      defaultPercent.value = percent > 100 ? 100 : percent;
    };

    const decline = () => {
      const percent = defaultPercent.value - 10;
      defaultPercent.value = percent < 0 ? 0 : percent;
    };
    return {
      defaultPercent,
      increase,
      decline,
    };
  },
});
<\/script>
`;const $={},te={style:{color:"red"}};function ne(r,c){const t=n("a-progress");return s(),a("div",null,[e(t,{type:"circle",percent:75,format:o=>`${o} Days`},null,8,["format"]),e(t,{type:"circle",percent:100,format:()=>"Done"},null,8,["format"]),e(t,{type:"circle",percent:75},{format:d(o=>[e("span",te,O(o),1)]),_:1})])}$.render=ne;var re=$,oe=`<cn>
#### \u81EA\u5B9A\u4E49\u6587\u5B57\u683C\u5F0F
\`format\` \u5C5E\u6027\u6307\u5B9A\u683C\u5F0F\u3002
</cn>

<us>
#### Custom text format
You can set a custom text by setting the \`format\` prop.
</us>
`,ce=`<template>
  <div>
    <a-progress type="circle" :percent="75" :format="percent => \`\${percent} Days\`" />
    <a-progress type="circle" :percent="100" :format="() => 'Done'" />
    <a-progress type="circle" :percent="75">
      <template #format="percent">
        <span style="color: red">{{ percent }}</span>
      </template>
    </a-progress>
  </div>
</template>
`,x=g({components:{MinusOutlined:f,PlusOutlined:h},setup(){const r=b(0);return{defaultPercent:r,increase:()=>{const o=r.value+10;r.value=o>100?100:o},decline:()=>{const o=r.value-10;r.value=o<0?0:o}}}});function se(r,c,t,o,L,z){const p=n("a-progress"),l=n("minus-outlined"),i=n("a-button"),u=n("plus-outlined"),m=n("a-button-group");return s(),a("div",null,[e(p,{percent:r.defaultPercent},null,8,["percent"]),e(m,null,{default:d(()=>[e(i,{onClick:r.decline},{icon:d(()=>[e(l)]),_:1},8,["onClick"]),e(i,{onClick:r.increase},{icon:d(()=>[e(u)]),_:1},8,["onClick"])]),_:1})])}x.render=se;var ae=`<cn>
#### \u52A8\u6001\u5C55\u793A
\u4F1A\u52A8\u7684\u8FDB\u5EA6\u6761\u624D\u662F\u597D\u8FDB\u5EA6\u6761\u3002
</cn>

<us>
#### Dynamic
A dynamic progress bar is better.
</us>
`,de=`<template>
  <div>
    <a-progress :percent="defaultPercent" />
    <a-button-group>
      <a-button @click="decline">
        <template #icon><minus-outlined /></template>
      </a-button>
      <a-button @click="increase">
        <template #icon><plus-outlined /></template>
      </a-button>
    </a-button-group>
  </div>
</template>
<script lang="ts">
import { MinusOutlined } from '@ant-design/icons-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  setup() {
    const defaultPercent = ref<number>(0);

    const increase = () => {
      const percent = defaultPercent.value + 10;
      defaultPercent.value = percent > 100 ? 100 : percent;
    };

    const decline = () => {
      const percent = defaultPercent.value - 10;
      defaultPercent.value = percent < 0 ? 0 : percent;
    };
    return {
      defaultPercent,
      increase,
      decline,
    };
  },
});
<\/script>
`;const S={};function ie(r,c){const t=n("a-progress");return s(),a("div",null,[e(t,{type:"dashboard",percent:75})])}S.render=ie;var pe=S,le=`<cn>
#### \u4EEA\u8868\u76D8
By setting \`type=dashboard\`, you can get a dashboard style of progress easily.
</cn>

<us>
#### Dashboard
A standard progress bar.
</us>
`,ue=`<template>
  <div>
    <a-progress type="dashboard" :percent="75" />
  </div>
</template>
`;const w={};function me(r,c){const t=n("a-progress"),o=n("a-tooltip");return s(),a("div",null,[e(o,{title:"3 done / 3 in progress / 4 to do"},{default:d(()=>[e(t,{percent:60,"success-percent":30})]),_:1}),e(o,{title:"3 done / 3 in progress / 4 to do"},{default:d(()=>[e(t,{percent:60,"success-percent":30,type:"circle"})]),_:1}),e(o,{title:"3 done / 3 in progress / 4 to do"},{default:d(()=>[e(t,{percent:60,"success-percent":30,type:"dashboard"})]),_:1})])}w.render=me;var _e=w,ge=`<cn>
#### \u5206\u6BB5\u8FDB\u5EA6\u6761
\u6807\u51C6\u7684\u8FDB\u5EA6\u6761\u3002
</cn>

<us>
#### Progress bar with success segment
A standard progress bar.
</us>
`,fe=`<template>
  <div>
    <a-tooltip title="3 done / 3 in progress / 4 to do">
      <a-progress :percent="60" :success-percent="30" />
    </a-tooltip>
    <a-tooltip title="3 done / 3 in progress / 4 to do">
      <a-progress :percent="60" :success-percent="30" type="circle" />
    </a-tooltip>
    <a-tooltip title="3 done / 3 in progress / 4 to do">
      <a-progress :percent="60" :success-percent="30" type="dashboard" />
    </a-tooltip>
  </div>
</template>
`;const D={};function he(r,c){const t=n("a-progress");return s(),a("div",null,[e(t,{"stroke-linecap":"square",percent:75}),e(t,{"stroke-linecap":"square",percent:75,type:"circle"}),e(t,{"stroke-linecap":"square",percent:75,type:"dashboard"})])}D.render=he;var be=D,ve=`<cn>
#### \u5706\u89D2/\u65B9\u89D2\u8FB9\u7F18
\`strokeLinecap="square|round"\` \u53EF\u4EE5\u8C03\u6574\u8FDB\u5EA6\u6761\u8FB9\u7F18\u7684\u5F62\u72B6\u3002
</cn>

<us>
#### Square linecaps
\`strokeLinecap="square|round"\` \u53EF\u4EE5\u8C03\u6574\u8FDB\u5EA6\u6761\u8FB9\u7F18\u7684\u5F62\u72B6\u3002
</us>
`,ye=`<template>
  <div>
    <a-progress stroke-linecap="square" :percent="75" />
    <a-progress stroke-linecap="square" :percent="75" type="circle" />
    <a-progress stroke-linecap="square" :percent="75" type="dashboard" />
  </div>
</template>
`;const q={};function ke(r,c){const t=n("a-progress");return s(),a("div",null,[e(t,{"stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:99.9},null,8,["percent"]),e(t,{"stroke-color":{from:"#108ee9",to:"#87d068"},percent:99.9,status:"active"},null,8,["percent"]),e(t,{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:90}),e(t,{type:"circle","stroke-color":{"0%":"#108ee9","100%":"#87d068"},percent:100})])}q.render=ke;var Ce=q,Pe=`<cn>
#### \u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272
\`linear-gradient\` \u7684\u5C01\u88C5\u3002\u63A8\u8350\u53EA\u4F20\u4E24\u79CD\u989C\u8272\u3002
</cn>

<us>
#### Custom line gradient
A package of \`linear-gradient\`. It is recommended to only pass two colors.
</us>
`,$e=`<template>
  <div>
    <a-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="99.9"
    />
    <a-progress
      :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
      :percent="99.9"
      status="active"
    />
    <a-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="90"
    />
    <a-progress
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="100"
    />
  </div>
</template>
`;const xe={class:"markdown-body"},Se=A("<h2>API</h2><p>\u5404\u7C7B\u578B\u5171\u7528\u7684\u5C5E\u6027\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009 <code>line</code> <code>circle</code> <code>dashboard</code></td><td>string</td><td><code>line</code></td></tr><tr><td>format</td><td>\u5185\u5BB9\u7684\u6A21\u677F\u51FD\u6570</td><td>function(percent, successPercent) | v-slot:format=\u201Cpercent, successPercent\u201D</td><td><code>percent =&gt; percent + &#39;%&#39;</code></td></tr><tr><td>percent</td><td>\u767E\u5206\u6BD4</td><td>number</td><td>0</td></tr><tr><td>showInfo</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6570\u503C\u6216\u72B6\u6001\u56FE\u6807</td><td>boolean</td><td>true</td></tr><tr><td>status</td><td>\u72B6\u6001\uFF0C\u53EF\u9009\uFF1A<code>success</code> <code>exception</code> <code>normal</code> <code>active</code>(\u4EC5\u9650 line)</td><td>string</td><td>-</td></tr><tr><td>strokeLinecap</td><td></td><td>Enum{ \u2018round\u2019, \u2018square\u2019 }</td><td><code>round</code></td></tr><tr><td>strokeColor</td><td>\u8FDB\u5EA6\u6761\u7684\u8272\u5F69</td><td>string</td><td>-</td></tr><tr><td>successPercent</td><td>\u5DF2\u5B8C\u6210\u7684\u5206\u6BB5\u767E\u5206\u6BD4</td><td>number</td><td>0</td></tr></tbody></table><h3><code>type=&quot;line&quot;</code></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>strokeWidth</td><td>\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D px</td><td>number</td><td>10</td><td></td></tr><tr><td>strokeColor</td><td>\u8FDB\u5EA6\u6761\u7684\u8272\u5F69\uFF0C\u4F20\u5165 object \u65F6\u4E3A\u6E10\u53D8</td><td>string | { from: string; to: string; direction: string }</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3><code>type=&quot;circle&quot;</code></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>width</td><td>\u5706\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF0C\u5355\u4F4D px</td><td>number</td><td>132</td><td></td></tr><tr><td>strokeWidth</td><td>\u5706\u5F62\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u662F\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\u7684\u767E\u5206\u6BD4</td><td>number</td><td>6</td><td></td></tr><tr><td>strokeColor</td><td>\u5706\u5F62\u8FDB\u5EA6\u6761\u7EBF\u7684\u8272\u5F69\uFF0C\u4F20\u5165 object \u65F6\u4E3A\u6E10\u53D8</td><td>string | object</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3><code>type=&quot;dashboard&quot;</code></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF0C\u5355\u4F4D px</td><td>number</td><td>132</td></tr><tr><td>strokeWidth</td><td>\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u662F\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\u7684\u767E\u5206\u6BD4</td><td>number</td><td>6</td></tr><tr><td>gapDegree</td><td>\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u7F3A\u53E3\u89D2\u5EA6\uFF0C\u53EF\u53D6\u503C 0 ~ 360</td><td>number</td><td>0</td></tr><tr><td>gapPosition</td><td>\u4EEA\u8868\u76D8\u8FDB\u5EA6\u6761\u7F3A\u53E3\u4F4D\u7F6E</td><td>Enum{ \u2018top\u2019, \u2018bottom\u2019, \u2018left\u2019, \u2018right\u2019 }</td><td><code>top</code></td></tr></tbody></table>",9),we={expose:[],setup(r){return(c,t)=>(s(),a("div",xe,[Se]))}};var De=we;const M={cn:`# Progress \u8FDB\u5EA6\u6761
  \u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  \u5728\u64CD\u4F5C\u9700\u8981\u8F83\u957F\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\uFF0C\u4E3A\u7528\u6237\u663E\u793A\u8BE5\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u548C\u72B6\u6001\u3002

  - \u5F53\u4E00\u4E2A\u64CD\u4F5C\u4F1A\u6253\u65AD\u5F53\u524D\u754C\u9762\uFF0C\u6216\u8005\u9700\u8981\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4E14\u8017\u65F6\u53EF\u80FD\u8D85\u8FC72\u79D2\u65F6\uFF1B
  - \u5F53\u9700\u8981\u663E\u793A\u4E00\u4E2A\u64CD\u4F5C\u5B8C\u6210\u7684\u767E\u5206\u6BD4\u65F6\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Progress
  Display the current progress of an operation flow.
  ## When To Use
  If it will take a long time to complete an operation, you can use \`Progress\` to show the current progress and status.

  - When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
  - When you need to display the completion percentage of an operation.
  ## Examples
  `};var Me={category:"Components",subtitle:"\u8FDB\u5EA6\u6761",type:"Feedback",title:"Progress",render(){return e("div",null,[e(n("Md"),{cn:M.cn,us:M.us},null),e(n("demo-sort"),null,{default:()=>[e(n("demo-container"),{api:W,code:j},{default:()=>[e(F,null,null)]}),e(n("demo-container"),{api:G,code:N},{default:()=>[e(E,null,null)]}),e(n("demo-container"),{api:T,code:H},{default:()=>[e(Y,null,null)]}),e(n("demo-container"),{api:Q,code:R},{default:()=>[e(K,null,null)]}),e(n("demo-container"),{api:Z,code:ee},{default:()=>[e(P,null,null)]}),e(n("demo-container"),{api:oe,code:ce},{default:()=>[e(re,null,null)]}),e(n("demo-container"),{api:ae,code:de},{default:()=>[e(x,null,null)]}),e(n("demo-container"),{api:le,code:ue},{default:()=>[e(pe,null,null)]}),e(n("demo-container"),{api:ge,code:fe},{default:()=>[e(_e,null,null)]}),e(n("demo-container"),{api:ve,code:ye},{default:()=>[e(be,null,null)]}),e(n("demo-container"),{api:Pe,code:$e},{default:()=>[e(Ce,null,null)]})]}),e(n("api"),null,{default:()=>[e(De,null,null)]})])}};export{Me as default};

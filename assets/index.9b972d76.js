import{Y as n,bw as d,bx as u,by as t,b as e,D as i,d as p,k as S,aS as g,bO as y}from"./vendor.846be9ce.js";const f={},w=i("Create a services site 2015-09-01"),x=i("Solve initial network problems 2015-09-01"),O=i("Technical testing 2015-09-01"),N=i("Network problems being solved 2015-09-01");function z(a,r){const o=n("a-timeline-item"),c=n("a-timeline");return d(),u(c,null,{default:t(()=>[e(o,null,{default:t(()=>[w]),_:1}),e(o,null,{default:t(()=>[x]),_:1}),e(o,null,{default:t(()=>[O]),_:1}),e(o,null,{default:t(()=>[N]),_:1})]),_:1})}f.render=z;var R=f,q=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u7684\u65F6\u95F4\u8F74\u3002
</cn>

<us>
#### Basic
Basic timeline.
</us>
`,B=`<template>
  <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
</template>
`;const v={},D=i("Create a services site 2015-09-01"),A=i("Create a services site 2015-09-01"),V=e("p",null,"Solve initial network problems 1",-1),W=e("p",null,"Solve initial network problems 2",-1),P=e("p",null,"Solve initial network problems 3 2015-09-01",-1),E=e("p",null,"Technical testing 1",-1),I=e("p",null,"Technical testing 2",-1),L=e("p",null,"Technical testing 3 2015-09-01",-1),M=e("p",null,"Technical testing 1",-1),Y=e("p",null,"Technical testing 2",-1),j=e("p",null,"Technical testing 3 2015-09-01",-1),U=e("p",null,"Technical testing 1",-1),F=e("p",null,"Technical testing 2",-1),G=e("p",null,"Technical testing 3 2015-09-01",-1);function H(a,r){const o=n("a-timeline-item"),c=n("a-timeline");return d(),u(c,null,{default:t(()=>[e(o,{color:"green"},{default:t(()=>[D]),_:1}),e(o,{color:"green"},{default:t(()=>[A]),_:1}),e(o,{color:"red"},{default:t(()=>[V,W,P]),_:1}),e(o,null,{default:t(()=>[E,I,L]),_:1}),e(o,{color:"gray"},{default:t(()=>[M,Y,j]),_:1}),e(o,{color:"gray"},{default:t(()=>[U,F,G]),_:1})]),_:1})}v.render=H;var J=v,K=`<cn>
#### \u5706\u5708\u989C\u8272
\u5706\u5708\u989C\u8272\uFF0C\u7EFF\u8272\u7528\u4E8E\u5DF2\u5B8C\u6210\u3001\u6210\u529F\u72B6\u6001\uFF0C\u7EA2\u8272\u8868\u793A\u544A\u8B66\u6216\u9519\u8BEF\u72B6\u6001\uFF0C\u84DD\u8272\u53EF\u8868\u793A\u6B63\u5728\u8FDB\u884C\u6216\u5176\u4ED6\u9ED8\u8BA4\u72B6\u6001\u3002
</cn>

<us>
#### Color
Set the color of circles. \`green\` means completed or success status, \`red\` means warning or error, and \`blue\` means ongoing or other default status.
</us>
`,Q=`<template>
  <a-timeline>
    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
  </a-timeline>
</template>
`,C=p({setup(){const a=S(!1);return{reverse:a,handleClick:()=>{a.value=!a.value}}}});const X=i("Create a services site 2015-09-01"),Z=i("Solve initial network problems 2015-09-01"),ee=i("Technical testing 2015-09-01"),te=i("Toggle Reverse");function ne(a,r,o,c,_,h){const l=n("a-timeline-item"),s=n("a-timeline"),m=n("a-button");return d(),u("div",null,[e(s,{pending:"Recording...",reverse:a.reverse},{default:t(()=>[e(l,null,{default:t(()=>[X]),_:1}),e(l,null,{default:t(()=>[Z]),_:1}),e(l,null,{default:t(()=>[ee]),_:1})]),_:1},8,["reverse"]),e(m,{type:"primary",style:{"margin-top":"16px"},onClick:a.handleClick},{default:t(()=>[te]),_:1},8,["onClick"])])}C.render=ne;var ie=`<cn>
#### \u6700\u540E\u4E00\u4E2A\u53CA\u6392\u5E8F
\u5F53\u4EFB\u52A1\u72B6\u6001\u6B63\u5728\u53D1\u751F\uFF0C\u8FD8\u5728\u8BB0\u5F55\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u7528\u5E7D\u7075\u8282\u70B9\u6765\u8868\u793A\u5F53\u524D\u7684\u65F6\u95F4\u8282\u70B9\uFF0C\u5F53 pending \u4E3A\u771F\u503C\u65F6\u5C55\u793A\u5E7D\u7075\u8282\u70B9\uFF0C\u5982\u679C pending \u662F React \u5143\u7D20\u53EF\u7528\u4E8E\u5B9A\u5236\u8BE5\u8282\u70B9\u5185\u5BB9\uFF0C\u540C\u65F6 pendingDot \u5C06\u53EF\u4EE5\u7528\u4E8E\u5B9A\u5236\u5176\u8F74\u70B9\u3002reverse \u5C5E\u6027\u7528\u4E8E\u63A7\u5236\u8282\u70B9\u6392\u5E8F\uFF0C\u4E3A false \u65F6\u6309\u6B63\u5E8F\u6392\u5217\uFF0C\u4E3A true \u65F6\u6309\u5012\u5E8F\u6392\u5217\u3002
</cn>

<us>
#### Last node
When the timeline is incomplete and ongoing, put a ghost node at last. Set \`pending\` as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, \`slot="pendingDot"\` is used to customize the dot of the pending item.
\`reverse={true}\` is used for reversing nodes.
</us>
`,le=`<template>
  <div>
    <a-timeline pending="Recording..." :reverse="reverse">
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
      <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    </a-timeline>
    <a-button type="primary" style="margin-top: 16px" @click="handleClick">Toggle Reverse</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const reverse = ref<boolean>(false);

    const handleClick = () => {
      reverse.value = !reverse.value;
    };

    return {
      reverse,
      handleClick,
    };
  },
});
<\/script>
`,b=p({components:{ClockCircleOutlined:g}});const oe=i("Create a services site 2015-09-01"),ae=i("Solve initial network problems 2015-09-01"),se=i(" Technical testing 2015-09-01 "),re=i("Network problems being solved 2015-09-01");function ce(a,r,o,c,_,h){const l=n("a-timeline-item"),s=n("clock-circle-outlined"),m=n("a-timeline");return d(),u(m,null,{default:t(()=>[e(l,null,{default:t(()=>[oe]),_:1}),e(l,null,{default:t(()=>[ae]),_:1}),e(l,{color:"red"},{dot:t(()=>[e(s,{style:{"font-size":"16px"}})]),default:t(()=>[se]),_:1}),e(l,null,{default:t(()=>[re]),_:1})]),_:1})}b.render=ce;var me=`<cn>
#### \u81EA\u5B9A\u4E49\u65F6\u95F4\u8F74\u70B9
\u57FA\u672C\u7684\u65F6\u95F4\u8F74\u3002
</cn>

<us>
#### Custom
Set a node as an icon or other custom element.
</us>
`,de=`<template>
  <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item color="red">
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
<\/script>
`,k=p({components:{ClockCircleOutlined:g}});const ue=i("Create a services site 2015-09-01"),pe=i("Solve initial network problems 2015-09-01"),_e=i(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "),he=i("Network problems being solved 2015-09-01"),ge=i("Create a services site 2015-09-01"),fe=i(" Technical testing 2015-09-01 ");function ve(a,r,o,c,_,h){const l=n("a-timeline-item"),s=n("ClockCircleOutlined"),m=n("a-timeline");return d(),u(m,{mode:"alternate"},{default:t(()=>[e(l,null,{default:t(()=>[ue]),_:1}),e(l,{color:"green"},{default:t(()=>[pe]),_:1}),e(l,null,{dot:t(()=>[e(s,{style:{"font-size":"16px"}})]),default:t(()=>[_e]),_:1}),e(l,{color:"red"},{default:t(()=>[he]),_:1}),e(l,null,{default:t(()=>[ge]),_:1}),e(l,null,{dot:t(()=>[e(s,{style:{"font-size":"16px"}})]),default:t(()=>[fe]),_:1})]),_:1})}k.render=ve;var Ce=`<cn>
#### \u4EA4\u66FF\u5C55\u73B0
\u5185\u5BB9\u5728\u65F6\u95F4\u8F74\u4E24\u4FA7\u8F6E\u6D41\u51FA\u73B0\u3002
</cn>

<us>
#### Alternate
Alternate timeline.
</us>
`,be=`<template>
  <a-timeline mode="alternate">
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </a-timeline-item>
    <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </a-timeline-item>
  </a-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
<\/script>
`,$=p({components:{ClockCircleOutlined:g}});const ke=i("Create a services site 2015-09-01"),$e=i("Solve initial network problems 2015-09-01"),Te=i(" Technical testing 2015-09-01 "),Se=i("Network problems being solved 2015-09-01");function ye(a,r,o,c,_,h){const l=n("a-timeline-item"),s=n("clock-circle-outlined"),m=n("a-timeline");return d(),u(m,{mode:"right"},{default:t(()=>[e(l,null,{default:t(()=>[ke]),_:1}),e(l,null,{default:t(()=>[$e]),_:1}),e(l,null,{dot:t(()=>[e(s,{style:{"font-size":"16px"}})]),default:t(()=>[Te]),_:1}),e(l,null,{default:t(()=>[Se]),_:1})]),_:1})}$.render=ye;var we=`<cn>
#### \u53F3\u4FA7\u65F6\u95F4\u8F74\u70B9
\u65F6\u95F4\u8F74\u70B9\u53EF\u4EE5\u5728\u5185\u5BB9\u7684\u53F3\u8FB9\u3002
</cn>

<us>
#### Right alternate
Right alternate timeline.
</us>
`,xe=`<template>
  <a-timeline mode="right">
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
<\/script>
`;const Oe={class:"markdown-body"},Ne=y(`<h2>API</h2><pre><code class="language-html">&lt;a-timeline&gt;
  &lt;a-timeline-item&gt;\u521B\u5EFA\u670D\u52A1\u73B0\u573A 2015-09-01&lt;/a-timeline-item&gt;
  &lt;a-timeline-item&gt;\u521D\u6B65\u6392\u9664\u7F51\u7EDC\u5F02\u5E38 2015-09-01&lt;/a-timeline-item&gt;
  &lt;a-timeline-item&gt;\u6280\u672F\u6D4B\u8BD5\u5F02\u5E38 2015-09-01&lt;/a-timeline-item&gt;
  &lt;a-timeline-item&gt;\u7F51\u7EDC\u5F02\u5E38\u6B63\u5728\u4FEE\u590D 2015-09-01&lt;/a-timeline-item&gt;
&lt;/a-timeline&gt;
</code></pre><h3>Timeline</h3><p>\u65F6\u95F4\u8F74\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>pending</td><td>\u6307\u5B9A\u6700\u540E\u4E00\u4E2A\u5E7D\u7075\u8282\u70B9\u662F\u5426\u5B58\u5728\u6216\u5185\u5BB9</td><td>boolean|string|slot</td><td>false</td></tr><tr><td>pendingDot</td><td>\u5F53\u6700\u540E\u4E00\u4E2A\u5E7D\u7075\u8282\u70B9\u5B58\u5728\u6642\uFF0C\u6307\u5B9A\u5176\u65F6\u95F4\u56FE\u70B9</td><td>string|slot</td><td><code>&lt;LoadingOutlined /&gt;</code></td></tr><tr><td>reverse</td><td>\u8282\u70B9\u6392\u5E8F</td><td>boolean</td><td>false</td></tr><tr><td>mode</td><td>\u901A\u8FC7\u8BBE\u7F6E <code>mode</code> \u53EF\u4EE5\u6539\u53D8\u65F6\u95F4\u8F74\u548C\u5185\u5BB9\u7684\u76F8\u5BF9\u4F4D\u7F6E</td><td><code>left</code> | <code>alternate</code> | <code>right</code></td><td></td></tr></tbody></table><h3>Timeline.Item</h3><p>\u65F6\u95F4\u8F74\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>color</td><td>\u6307\u5B9A\u5706\u5708\u989C\u8272 <code>blue, red, green</code>\uFF0C\u6216\u81EA\u5B9A\u4E49\u7684\u8272\u503C</td><td>string</td><td>blue</td><td></td></tr><tr><td>dot</td><td>\u81EA\u5B9A\u4E49\u65F6\u95F4\u8F74\u70B9</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>position</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9\u4F4D\u7F6E</td><td><code>left</code> | <code>right</code></td><td>-</td><td>1.5.0</td></tr></tbody></table>`,8),ze={expose:[],setup(a){return(r,o)=>(d(),u("div",Oe,[Ne]))}};var Re=ze;const T={cn:`# \u65F6\u95F4\u8F74
  \u5782\u76F4\u5C55\u793A\u7684\u65F6\u95F4\u6D41\u4FE1\u606F\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  - \u5F53\u6709\u4E00\u7CFB\u5217\u4FE1\u606F\u9700\u6309\u65F6\u95F4\u6392\u5217\u65F6\uFF0C\u53EF\u6B63\u5E8F\u548C\u5012\u5E8F\u3002
  - \u9700\u8981\u6709\u4E00\u6761\u65F6\u95F4\u8F74\u8FDB\u884C\u89C6\u89C9\u4E0A\u7684\u4E32\u8054\u65F6\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Timeline
  Vertical display timeline.
  ## When To Use
  - When a series of information needs to be ordered by time (ascending or descending).
  - When you need a timeline to make a visual connection.
  ## Examples
  `};var Be={category:"Components",subtitle:"\u65F6\u95F4\u8F74",type:"Data Display",title:"Timeline",render(){return e("div",null,[e(n("Md"),{cn:T.cn,us:T.us},null),e(n("demo-sort"),null,{default:()=>[e(n("demo-container"),{api:q,code:B},{default:()=>[e(R,null,null)]}),e(n("demo-container"),{api:K,code:Q},{default:()=>[e(J,null,null)]}),e(n("demo-container"),{api:ie,code:le},{default:()=>[e(C,null,null)]}),e(n("demo-container"),{api:me,code:de},{default:()=>[e(b,null,null)]}),e(n("demo-container"),{api:Ce,code:be},{default:()=>[e(k,null,null)]}),e(n("demo-container"),{api:we,code:xe},{default:()=>[e($,null,null)]})]}),e(n("api"),null,{default:()=>[e(Re,null,null)]})])}};export{Be as default};

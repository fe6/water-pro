import{d as g,Y as r,bw as s,bx as l,k as u,w as S,b as e,by as v,bz as T,bG as U,bH as I,bI as O,bO as q}from"./vendor.846be9ce.js";var z=g({setup(){return{current:2}}});function V(n,t,i,d,p,c){const a=r("a-pagination");return s(),l(a,{current:n.current,"onUpdate:current":t[1]||(t[1]=o=>n.current=o),total:50,"show-less-items":""},null,8,["current"])}z.render=V;var M=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u7840\u5206\u9875\u3002
</cn>

<us>
#### Basic
Basic pagination.
</us>
`,R=`<template>
  <a-pagination v-model:current="current" :total="50" show-less-items />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      current: 2,
    };
  },
});
<\/script>
`,C=g({setup(){const n=u(20),t=u(3),i=u(4),d=(p,c)=>{console.log(p,c)};return S(n,()=>{console.log("pageSize",n.value)}),S(t,()=>{console.log("current",t.value)}),{pageSize:n,current1:t,current2:i,onShowSizeChange:d}}});const j=e("br",null,null,-1);function B(n,t,i,d,p,c){const a=r("a-pagination");return s(),l("div",null,[e(a,{"show-size-changer":"",current:n.current1,"onUpdate:current":t[1]||(t[1]=o=>n.current1=o),pageSize:n.pageSize,"onUpdate:pageSize":t[2]||(t[2]=o=>n.pageSize=o),total:500,onShowSizeChange:n.onShowSizeChange},null,8,["current","pageSize","onShowSizeChange"]),j,e(a,{current:n.current2,"onUpdate:current":t[3]||(t[3]=o=>n.current2=o),"show-size-changer":"",total:500,disabled:"",onShowSizeChange:n.onShowSizeChange},null,8,["current","onShowSizeChange"])])}C.render=B;var x=`<cn>
#### \u6539\u53D8
\u6539\u53D8\u6BCF\u9875\u663E\u793A\u6761\u76EE\u6570\u3002
</cn>

<us>
#### Changer
Change \`pageSize\`.
</us>
`,E=`<template>
  <div>
    <a-pagination
      show-size-changer
      v-model:current="current1"
      v-model:pageSize="pageSize"
      :total="500"
      @showSizeChange="onShowSizeChange"
    />
    <br />
    <a-pagination
      v-model:current="current2"
      show-size-changer
      :total="500"
      disabled
      @showSizeChange="onShowSizeChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const pageSize = ref(20);
    const current1 = ref(3);
    const current2 = ref(4);
    const onShowSizeChange = (current: number, pageSize: number) => {
      console.log(current, pageSize);
    };
    watch(pageSize, () => {
      console.log('pageSize', pageSize.value);
    });
    watch(current1, () => {
      console.log('current', current1.value);
    });
    return {
      pageSize,
      current1,
      current2,
      onShowSizeChange,
    };
  },
});
<\/script>
`,_=g({setup(){const n=u(["10","20","30","40","50"]),t=u(1),i=u(10),d=u(50);return{pageSizeOptions:n,current:t,pageSize:i,total:d,onShowSizeChange:(c,a)=>{console.log(a),i.value=a}}}});const J={key:0},F={key:1};function A(n,t,i,d,p,c){const a=r("a-pagination");return s(),l(a,{current:n.current,"onUpdate:current":t[1]||(t[1]=o=>n.current=o),"page-size-options":n.pageSizeOptions,total:n.total,"show-size-changer":"","page-size":n.pageSize,onShowSizeChange:n.onShowSizeChange},{buildOptionText:v(o=>[o.value!=="50"?(s(),l("span",J,T(o.value)+"\u6761/\u9875",1)):(s(),l("span",F,"\u5168\u90E8"))]),_:1},8,["current","page-size-options","total","page-size","onShowSizeChange"])}_.render=A;var W=`<cn>
#### \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879
\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\uFF0C\u4F8B\u5982\u6DFB\u52A0\u5168\u90E8\u9009\u9879
</cn>

<us>
#### Custom dropdown options
Customize dropdown options such as adding all options
</us>
`,Y=`<template>
  <a-pagination
    v-model:current="current"
    :page-size-options="pageSizeOptions"
    :total="total"
    show-size-changer
    :page-size="pageSize"
    @showSizeChange="onShowSizeChange"
  >
    <template #buildOptionText="props">
      <span v-if="props.value !== '50'">{{ props.value }}\u6761/\u9875</span>
      <span v-else>\u5168\u90E8</span>
    </template>
  </a-pagination>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50']);
    const current = ref(1);
    const pageSizeRef = ref(10);
    const total = ref(50);
    const onShowSizeChange = (current: number, pageSize: number) => {
      console.log(pageSize);
      pageSizeRef.value = pageSize;
    };

    return {
      pageSizeOptions,
      current,
      pageSize: pageSizeRef,
      total,
      onShowSizeChange,
    };
  },
});
<\/script>
`;function D(n,{attrs:{vnode:t}}){return t}var w=g({components:{renderVNode:D}});const G={key:0},H={key:1};function L(n,t,i,d,p,c){const a=r("renderVNode"),o=r("a-pagination");return s(),l(o,{total:500},{itemRender:v(({page:m,type:f,originalElement:P})=>[f==="prev"?(s(),l("a",G,"Previous")):f==="next"?(s(),l("a",H,"Next")):(s(),l(a,{key:2,vnode:P},null,8,["vnode"]))]),_:1})}w.render=L;var Q=`<cn>
#### \u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65
\u4FEE\u6539\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65\u4E3A\u6587\u5B57\u94FE\u63A5\u3002
</cn>

<us>
#### Prev and next
Use text link for prev and next button.
</us>
`,K=`<template>
  <a-pagination :total="500">
    <template #itemRender="{ page, type, originalElement }">
      <a v-if="type === 'prev'">Previous</a>
      <a v-else-if="type === 'next'">Next</a>
      <renderVNode v-else :vnode="originalElement"></renderVNode>
    </template>
  </a-pagination>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

function renderVNode(_, { attrs: { vnode } }) {
  return vnode;
}
export default defineComponent({
  components: {
    renderVNode: renderVNode as any,
  },
});
<\/script>
`,b=g({setup(){const n=u(1),t=u(2);return{current1:n,current2:t,onChange:d=>{console.log("Page: ",d)}}}});const X=e("br",null,null,-1);function Z(n,t,i,d,p,c){const a=r("a-pagination");return s(),l("div",null,[e(a,{"show-quick-jumper":"",current:n.current1,"onUpdate:current":t[1]||(t[1]=o=>n.current1=o),total:500,onChange:n.onChange},null,8,["current","onChange"]),X,e(a,{"show-quick-jumper":"",current:n.current2,"onUpdate:current":t[2]||(t[2]=o=>n.current2=o),total:500,disabled:"","show-less-items":"",onChange:n.onChange},null,8,["current","onChange"])])}b.render=Z;var nn=`<cn>
#### \u8DF3\u8F6C
\u5FEB\u901F\u8DF3\u8F6C\u5230\u67D0\u4E00\u9875\u3002
</cn>

<us>
#### Jumper
Jump to a page directly.
</us>
`,tn=`<template>
  <div>
    <a-pagination show-quick-jumper v-model:current="current1" :total="500" @change="onChange" />
    <br />
    <a-pagination
      show-quick-jumper
      v-model:current="current2"
      :total="500"
      disabled
      show-less-items
      @change="onChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const current1 = ref<number>(1);
    const current2 = ref<number>(2);
    const onChange = (pageNumber: number) => {
      console.log('Page: ', pageNumber);
    };
    return {
      current1,
      current2,
      onChange,
    };
  },
});
<\/script>
`;const h={},en=O();U("data-v-2b47c159");const on={id:"components-pagination-demo-mini"};I();const rn=en((n,t)=>{const i=r("a-pagination");return s(),l("div",on,[e(i,{size:"small",total:50}),e(i,{size:"small",total:50,"show-size-changer":"","show-quick-jumper":""}),e(i,{size:"small",total:50,"show-total":d=>`Total ${d} items`},null,8,["show-total"])])});h.render=rn;h.__scopeId="data-v-2b47c159";var an=h,dn=`<cn>
#### \u8FF7\u4F60
\u8FF7\u4F60\u7248\u672C\u3002
</cn>

<us>
#### Mini size
Mini size pagination.
</us>
`,sn=`<template>
  <div id="components-pagination-demo-mini">
    <a-pagination size="small" :total="50" />
    <a-pagination size="small" :total="50" show-size-changer show-quick-jumper />
    <a-pagination size="small" :total="50" :show-total="total => \`Total \${total} items\`" />
  </div>
</template>

<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
`,$=g({setup(){return{current:6}}});function ln(n,t,i,d,p,c){const a=r("a-pagination");return s(),l(a,{current:n.current,"onUpdate:current":t[1]||(t[1]=o=>n.current=o),total:500},null,8,["current"])}$.render=ln;var un=`<cn>
#### \u66F4\u591A
\u66F4\u591A\u5206\u9875\u3002
</cn>

<us>
#### more
Mode pages.
</us>
`,pn=`<template>
  <a-pagination v-model:current="current" :total="500" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      current: 6,
    };
  },
});
<\/script>
`,y=g({setup(){return{current:u(2)}}});function cn(n,t,i,d,p,c){const a=r("a-pagination");return s(),l(a,{simple:"",current:n.current,"onUpdate:current":t[1]||(t[1]=o=>n.current=o),total:50},null,8,["current"])}y.render=cn;var gn=`<cn>
#### \u7B80\u6D01
\u7B80\u5355\u7684\u7FFB\u9875\u3002
</cn>

<us>
#### Simple mode
Simple mode.
</us>
`,mn=`<template>
  <a-pagination simple v-model:current="current" :total="50" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(2);
    return {
      current,
    };
  },
});
<\/script>
`,N=g({setup(){const n=u(1),t=u(2);return{current1:n,current2:t,onChange:d=>{console.log("Page: ",d)}}}});const hn=e("br",null,null,-1);function fn(n,t,i,d,p,c){const a=r("a-pagination");return s(),l("div",null,[e(a,{total:85,"show-total":o=>`Total ${o} items`,"page-size":20,current:n.current1,"onUpdate:current":t[1]||(t[1]=o=>n.current1=o)},null,8,["show-total","current"]),hn,e(a,{total:85,"show-total":(o,m)=>`${m[0]}-${m[1]} of ${o} items`,"page-size":20,current:n.current2,"onUpdate:current":t[2]||(t[2]=o=>n.current2=o)},null,8,["show-total","current"])])}N.render=fn;var Sn=`<cn>
#### \u603B\u6570
\u901A\u8FC7\u8BBE\u7F6E \`showTotal\` \u5C55\u793A\u603B\u5171\u6709\u591A\u5C11\u6570\u636E\u3002
</cn>

<us>
#### Total number
You can show the total number of data by setting \`showTotal\`.
</us>
`,vn=`<template>
  <div>
    <a-pagination
      :total="85"
      :show-total="total => \`Total \${total} items\`"
      :page-size="20"
      v-model:current="current1"
    />
    <br />
    <a-pagination
      :total="85"
      :show-total="(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`"
      :page-size="20"
      v-model:current="current2"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const current1 = ref<number>(1);
    const current2 = ref<number>(2);
    const onChange = (pageNumber: number) => {
      console.log('Page: ', pageNumber);
    };
    return {
      current1,
      current2,
      onChange,
    };
  },
});
<\/script>
`;const zn={class:"markdown-body"},Cn=q(`<h2>API</h2><pre><code class="language-html">&lt;a-pagination @change=&quot;onChange&quot; :total=&quot;50&quot; /&gt;
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>current(v-model)</td><td>\u5F53\u524D\u9875\u6570</td><td>number</td><td>-</td><td></td></tr><tr><td>pageSize(v-model)</td><td>\u6BCF\u9875\u6761\u6570</td><td>number</td><td>-</td><td></td></tr><tr><td>defaultCurrent</td><td>\u9ED8\u8BA4\u7684\u5F53\u524D\u9875\u6570</td><td>number</td><td>1</td><td></td></tr><tr><td>defaultPageSize</td><td>\u9ED8\u8BA4\u7684\u6BCF\u9875\u6761\u6570</td><td>number</td><td>10</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528\u5206\u9875</td><td>boolean</td><td>-</td><td>1.5.0</td></tr><tr><td>hideOnSinglePage</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u5206\u9875\u5668</td><td>boolean</td><td>false</td><td></td></tr><tr><td>itemRender</td><td>\u7528\u4E8E\u81EA\u5B9A\u4E49\u9875\u7801\u7684\u7ED3\u6784\uFF0C\u53EF\u7528\u4E8E\u4F18\u5316 SEO</td><td>(page, type: \u2018page\u2019 | \u2018prev\u2019 | \u2018next\u2019, originalElement) =&gt; vNode</td><td>-</td><td></td></tr><tr><td>pageSizeOptions</td><td>\u6307\u5B9A\u6BCF\u9875\u53EF\u4EE5\u663E\u793A\u591A\u5C11\u6761</td><td>string[]</td><td>[\u201810\u2019, \u201820\u2019, \u201830\u2019, \u201840\u2019]</td><td></td></tr><tr><td>showLessItems</td><td>show less page items</td><td>boolean</td><td>false</td><td>1.5.0</td></tr><tr><td>showQuickJumper</td><td>\u662F\u5426\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u81F3\u67D0\u9875</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showSizeChanger</td><td>\u662F\u5426\u53EF\u4EE5\u6539\u53D8 pageSize</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showTotal</td><td>\u7528\u4E8E\u663E\u793A\u6570\u636E\u603B\u91CF\u548C\u5F53\u524D\u6570\u636E\u987A\u5E8F</td><td>Function(total, range)</td><td>-</td><td></td></tr><tr><td>simple</td><td>\u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0C\u663E\u793A\u4E3A\u7B80\u5355\u5206\u9875</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>\u5F53\u4E3A\u300Csmall\u300D\u65F6\uFF0C\u662F\u5C0F\u5C3A\u5BF8\u5206\u9875</td><td>string</td><td>\u201C\u201D</td><td></td></tr><tr><td>total</td><td>\u6570\u636E\u603B\u6570</td><td>number</td><td>0</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9875\u7801\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u53C2\u6570\u662F\u6539\u53D8\u540E\u7684\u9875\u7801\u53CA\u6BCF\u9875\u6761\u6570</td><td>Function(page, pageSize)</td></tr><tr><td>showSizeChange</td><td>pageSize \u53D8\u5316\u7684\u56DE\u8C03</td><td>Function(current, size)</td></tr></tbody></table>`,5),_n={expose:[],setup(n){return(t,i)=>(s(),l("div",zn,[Cn]))}};var wn=_n;const k={cn:`# Pagination \u5206\u9875

    \u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5206\u9694\u957F\u5217\u8868\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002

    ## \u4F55\u65F6\u4F7F\u7528

    - \u5F53\u52A0\u8F7D/\u6E32\u67D3\u6240\u6709\u6570\u636E\u5C06\u82B1\u8D39\u5F88\u591A\u65F6\u95F4\u65F6\uFF1B
    - \u53EF\u5207\u6362\u9875\u7801\u6D4F\u89C8\u6570\u636E\u3002

    ## \u4EE3\u7801\u6F14\u793A`,us:`# Pagination

    A long list can be divided into several pages by 'Pagination', and only one page will be loaded at a time.

    ## When To Use

    - When it will take a long time to load/render all items.
    - If you want to browse the data by navigating through pages.
    ## Examples `};var $n={category:"Components",subtitle:"\u5206\u9875",type:"Navigation",title:"Pagination",cols:1,render(){return e("div",null,[e(r("Md"),{cn:k.cn,us:k.us},null),e(r("demo-sort"),{cols:1},{default:()=>[e(r("demo-container"),{api:M,code:R},{default:()=>[e(z,null,null)]}),e(r("demo-container"),{api:un,code:pn},{default:()=>[e($,null,null)]}),e(r("demo-container"),{api:x,code:E},{default:()=>[e(C,null,null)]}),e(r("demo-container"),{api:W,code:Y},{default:()=>[e(_,null,null)]}),e(r("demo-container"),{api:nn,code:tn},{default:()=>[e(b,null,null)]}),e(r("demo-container"),{api:dn,code:sn},{default:()=>[e(an,null,null)]}),e(r("demo-container"),{api:gn,code:mn},{default:()=>[e(y,null,null)]}),e(r("demo-container"),{api:Sn,code:vn},{default:()=>[e(N,null,null)]}),e(r("demo-container"),{api:Q,code:K},{default:()=>[e(w,null,null)]})]}),e(r("api"),null,{default:()=>[e(wn,null,null)]})])}};export{$n as default};

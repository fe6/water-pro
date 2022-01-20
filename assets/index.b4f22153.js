import{d as i,k as o,Y as a,bw as u,bx as s,b as e,bz as w,c9 as S,by as y,bO as x}from"./vendor.846be9ce.js";var f=i({setup(){return{value:o(2)}}});function H(t,n,d,p,c,v){const r=a("a-rate");return u(),s(r,{value:t.value,"onUpdate:value":n[1]||(n[1]=l=>t.value=l)},null,8,["value"])}f.render=H;var U=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
The simplest usage.
</us>
`,k=`<template>
  <a-rate v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(2);
    return {
      value,
    };
  },
});
<\/script>
`,h=i({setup(){return{value:o(2.5)}}});function R(t,n,d,p,c,v){const r=a("a-rate");return u(),s(r,{value:t.value,"onUpdate:value":n[1]||(n[1]=l=>t.value=l),"allow-half":""},null,8,["value"])}h.render=R;var F=`<cn>
#### \u534A\u661F
\u652F\u6301\u9009\u4E2D\u534A\u661F\u3002
</cn>

<us>
#### Half star
Support select half star.
</us>
`,O=`<template>
  <a-rate v-model:value="value" allow-half />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(2.5);
    return {
      value,
    };
  },
});
<\/script>
`,b=i({setup(){const t=o(3),n=o(["terrible","bad","normal","good","wonderful"]);return{value:t,desc:n}}});const A={class:"ant-rate-text"};function B(t,n,d,p,c,v){const r=a("a-rate");return u(),s("span",null,[e(r,{value:t.value,"onUpdate:value":n[1]||(n[1]=l=>t.value=l),tooltips:t.desc},null,8,["value","tooltips"]),e("span",A,w(t.desc[t.value-1]),1)])}b.render=B;var D=`<cn>
#### \u6587\u6848\u5C55\u73B0
\u7ED9\u8BC4\u5206\u7EC4\u4EF6\u52A0\u4E0A\u6587\u6848\u5C55\u793A\u3002
</cn>

<us>
#### Show copywriting
Add copywriting in rate components.
</us>
`,T=`<template>
  <span>
    <a-rate v-model:value="value" :tooltips="desc" />
    <span class="ant-rate-text">{{ desc[value - 1] }}</span>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(3);
    const desc = ref<string[]>(['terrible', 'bad', 'normal', 'good', 'wonderful']);
    return {
      value,
      desc,
    };
  },
});
<\/script>
`,_=i({});function z(t,n,d,p,c,v){const r=a("a-rate");return u(),s(r,{value:2,disabled:""})}_.render=z;var N=`<cn>
#### \u53EA\u8BFB
\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u9F20\u6807\u4EA4\u4E92\u3002
</cn>

<us>
#### Read only
Read only, can't use mouse to interact.
</us>
`,V=`<template>
  <a-rate :value="2" disabled />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
<\/script>
`,$=i({setup(){const t=o(3),n=o(3);return{value1:t,value2:n}}});const E=e("span",{class:"ant-rate-text"},"allowClear: true",-1),j=e("br",null,null,-1),q=e("span",{class:"ant-rate-text"},"allowClear: false",-1);function I(t,n,d,p,c,v){const r=a("a-rate");return u(),s("div",null,[e(r,{value:t.value1,"onUpdate:value":n[1]||(n[1]=l=>t.value1=l)},null,8,["value"]),E,j,e(r,{"allow-clear":!1,value:t.value2,"onUpdate:value":n[2]||(n[2]=l=>t.value2=l)},null,8,["value"]),q])}$.render=I;var M=`<cn>
#### \u6E05\u9664
\u652F\u6301\u5141\u8BB8\u6216\u8005\u7981\u7528\u6E05\u9664\u3002
</cn>

<us>
#### Clear star
Support set allow to clear star when click again.
</us>
`,P=`<template>
  <div>
    <a-rate v-model:value="value1" />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <a-rate :allow-clear="false" v-model:value="value2" />
    <span class="ant-rate-text">allowClear: false</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(3);
    return {
      value1,
      value2,
    };
  },
});
<\/script>
`,g=i({setup(){const t=o(2),n=o(2.5),d=o(.5);return{value1:t,value2:n,value3:d}},components:{HeartOutlined:S}});const W=e("br",null,null,-1),Y=e("br",null,null,-1),G=e("br",null,null,-1);function J(t,n,d,p,c,v){const r=a("heart-outlined"),l=a("a-rate");return u(),s("div",null,[e(l,{value:t.value1,"onUpdate:value":n[1]||(n[1]=m=>t.value1=m),allowHalf:""},{character:y(()=>[e(r)]),_:1},8,["value"]),W,e(l,{value:t.value2,"onUpdate:value":n[2]||(n[2]=m=>t.value2=m),character:"A","allow-half":"",style:{"font-size":"36px"}},null,8,["value"]),Y,e(l,{value:t.value3,"onUpdate:value":n[3]||(n[3]=m=>t.value3=m),character:"\u597D","allow-half":""},null,8,["value"]),G])}g.render=J;var K=`<cn>
#### \u5176\u4ED6\u5B57\u7B26
\u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\u3002
</cn>

<us>
#### Other Character
Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.
</us>
`,L=`<template>
  <div>
    <a-rate v-model:value="value1" allowHalf>
      <template #character>
        <heart-outlined />
      </template>
    </a-rate>
    <br />
    <a-rate v-model:value="value2" character="A" allow-half style="font-size: 36px" />
    <br />
    <a-rate v-model:value="value3" character="\u597D" allow-half />
    <br />
  </div>
</template>
<script lang="ts">
import { HeartOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(2);
    const value2 = ref<number>(2.5);
    const value3 = ref<number>(0.5);
    return {
      value1,
      value2,
      value3,
    };
  },
  components: {
    HeartOutlined,
  },
});
<\/script>
`;const Q={class:"markdown-body"},X=x("<h2>API</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664</td><td>boolean</td><td>true</td></tr><tr><td>allowHalf</td><td>\u662F\u5426\u5141\u8BB8\u534A\u9009</td><td>boolean</td><td>false</td></tr><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>character</td><td>\u81EA\u5B9A\u4E49\u5B57\u7B26</td><td>String or slot=\u201Ccharacter\u201D</td><td><code>&lt;StarOutlined /&gt;</code></td></tr><tr><td>count</td><td>star \u603B\u6570</td><td>number</td><td>5</td></tr><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u503C</td><td>number</td><td>0</td></tr><tr><td>disabled</td><td>\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4EA4\u4E92</td><td>boolean</td><td>false</td></tr><tr><td>tooltips</td><td>\u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F</td><td>string[]</td><td>-</td></tr><tr><td>value(v-model)</td><td>\u5F53\u524D\u6570\uFF0C\u53D7\u63A7\u503C</td><td>number</td><td>-</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td><td>Function()</td></tr><tr><td>change</td><td>\u9009\u62E9\u65F6\u7684\u56DE\u8C03</td><td>Function(value: number)</td></tr><tr><td>focus</td><td>\u83B7\u53D6\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td><td>Function()</td></tr><tr><td>hoverChange</td><td>\u9F20\u6807\u7ECF\u8FC7\u65F6\u6570\u503C\u53D8\u5316\u7684\u56DE\u8C03</td><td>Function(value: number)</td></tr><tr><td>keydown</td><td>\u6309\u952E\u56DE\u8C03</td><td>Function(event)</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table>",6),Z={expose:[],setup(t){return(n,d)=>(u(),s("div",Q,[X]))}};var tt=Z;const C={cn:`# Rate

  \u8BC4\u5206\u7EC4\u4EF6\u3002

  ## \u4F55\u65F6\u4F7F\u7528

  - \u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\u3002
  - \u5BF9\u4E8B\u7269\u8FDB\u884C\u5FEB\u901F\u7684\u8BC4\u7EA7\u64CD\u4F5C\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Rate

  Rate component.

  # When To Use

  - Show evaluation.
  - A quick rating operation on something.
  ## Examples
  `};var nt={category:"Components",subtitle:"\u8BC4\u5206",type:"Data Entry",cols:1,title:"Rate",render(){return e("div",null,[e(a("Md"),{cn:C.cn,us:C.us},null),e(a("demo-sort"),null,{default:()=>[e(a("demo-container"),{api:U,code:k},{default:()=>[e(f,null,null)]}),e(a("demo-container"),{api:F,code:O},{default:()=>[e(h,null,null)]}),e(a("demo-container"),{api:D,code:T},{default:()=>[e(b,null,null)]}),e(a("demo-container"),{api:N,code:V},{default:()=>[e(_,null,null)]}),e(a("demo-container"),{api:M,code:P},{default:()=>[e($,null,null)]}),e(a("demo-container"),{api:K,code:L},{default:()=>[e(g,null,null)]})]}),e(a("api"),null,{default:()=>[e(tt,null,null)]})])}};export{nt as default};

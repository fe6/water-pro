var V=Object.defineProperty;var w=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var C=(e,t,d)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[t]=d,p=(e,t)=>{for(var d in t||(t={}))O.call(t,d)&&C(e,d,t[d]);if(w)for(var d of w(t))D.call(t,d)&&C(e,d,t[d]);return e};import{d as r,k as m,Y as c,bw as l,bx as a,b as n,by as b,D as R,r as v,ao as g,N as x,O as B,bz as N,bO as E}from"./vendor.846be9ce.js";var _=r({setup(){return{checked:m(!1)}}});function F(e,t,d,i,h,u){const o=c("a-switch");return l(),a(o,{checked:e.checked,"onUpdate:checked":t[1]||(t[1]=s=>e.checked=s)},null,8,["checked"])}_.render=F;var L=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### basic Usage
The most basic usage.
</us>
`,j=`<template>
  <a-switch v-model:checked="checked" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(false);
    return {
      checked,
    };
  },
});
<\/script>
`,$=r({setup(){const e=m(!0),t=m(!0);return{checked:e,disabled:t,onToggle:()=>{t.value=!t.value}}}});const I=n("br",null,null,-1),M=R("Toggle disabled");function W(e,t,d,i,h,u){const o=c("a-switch"),s=c("a-button");return l(),a("div",null,[n(o,{checked:e.checked,"onUpdate:checked":t[1]||(t[1]=f=>e.checked=f),disabled:e.disabled,style:{"margin-bottom":"5px"}},null,8,["checked","disabled"]),I,n(s,{type:"primary",onClick:e.onToggle},{default:b(()=>[M]),_:1},8,["onClick"])])}$.render=W;var A=`<cn>
#### \u4E0D\u53EF\u7528
Switch \u5931\u6548\u72B6\u6001\u3002
</cn>

<us>
#### Disabled
Disabled state of \`Switch\`.
</us>
`,P=`<template>
  <div>
    <a-switch v-model:checked="checked" :disabled="disabled" style="margin-bottom: 5px" />
    <br />
    <a-button type="primary" @click="onToggle">Toggle disabled</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(true);
    const disabled = ref<boolean>(true);

    const onToggle = () => {
      disabled.value = !disabled.value;
    };

    return {
      checked,
      disabled,
      onToggle,
    };
  },
});
<\/script>
`,S=r({setup(){const e=v({checked1:!0,checked2:!1,checked3:!1});return p({},g(e))},components:{CheckOutlined:x,CloseOutlined:B}});const Y=n("br",null,null,-1),q=n("br",null,null,-1);function G(e,t,d,i,h,u){const o=c("a-switch"),s=c("check-outlined"),f=c("close-outlined");return l(),a("div",null,[n(o,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:e.checked1,"onUpdate:checked":t[1]||(t[1]=k=>e.checked1=k)},null,8,["checked"]),Y,n(o,{"checked-children":"1","un-checked-children":"0",checked:e.checked2,"onUpdate:checked":t[2]||(t[2]=k=>e.checked2=k)},null,8,["checked"]),q,n(o,{checked:e.checked3,"onUpdate:checked":t[3]||(t[3]=k=>e.checked3=k)},{checkedChildren:b(()=>[n(s)]),unCheckedChildren:b(()=>[n(f)]),_:1},8,["checked"])])}S.render=G;var H=`<cn>
#### \u6587\u5B57\u548C\u56FE\u6807
\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002
</cn>

<us>
#### Text & icon
With text and icon.
</us>
`,J=`<template>
  <div>
    <a-switch checked-children="\u5F00" un-checked-children="\u5173" v-model:checked="checked1" />
    <br />
    <a-switch checked-children="1" un-checked-children="0" v-model:checked="checked2" />
    <br />
    <a-switch v-model:checked="checked3">
      <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><close-outlined /></template>
    </a-switch>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      checked3: false,
    });
    return { ...toRefs(state) };
  },

  components: {
    CheckOutlined,
    CloseOutlined,
  },
});
<\/script>
`,y=r({setup(){const e=v({checked1:!0,checked2:!1});return p({},g(e))}});const K=n("br",null,null,-1);function Q(e,t,d,i,h,u){const o=c("a-switch");return l(),a("div",null,[n(o,{checked:e.checked1,"onUpdate:checked":t[1]||(t[1]=s=>e.checked1=s)},null,8,["checked"]),K,n(o,{size:"small",checked:e.checked2,"onUpdate:checked":t[2]||(t[2]=s=>e.checked2=s)},null,8,["checked"])])}y.render=Q;var X=`<cn>
#### \u4E24\u79CD\u5927\u5C0F
\`size="small"\` \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002
</cn>

<us>
#### Two sizes
\`size="small"\` represents a small sized switch.
</us>
`,Z=`<template>
  <div>
    <a-switch v-model:checked="checked1" />
    <br />
    <a-switch size="small" v-model:checked="checked2" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
    });
    return { ...toRefs(state) };
  },
});
<\/script>
`,T=r({setup(){const e=v({checked1:!0,checked2:!1});return p({},g(e))}});const ee=n("br",null,null,-1);function te(e,t,d,i,h,u){const o=c("a-switch");return l(),a("div",null,[n(o,{loading:"",checked:e.checked1,"onUpdate:checked":t[1]||(t[1]=s=>e.checked1=s)},null,8,["checked"]),ee,n(o,{size:"small",loading:"",checked:e.checked2,"onUpdate:checked":t[2]||(t[2]=s=>e.checked2=s)},null,8,["checked"])])}T.render=te;var ne=`<cn>
#### \u52A0\u8F7D\u4E2D
\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002
</cn>

<us>
#### Loading
Mark a pending state of switch.
</us>
`,de=`<template>
  <div>
    <a-switch loading v-model:checked="checked1" />
    <br />
    <a-switch size="small" loading v-model:checked="checked2" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
    });
    return { ...toRefs(state) };
  },
});
<\/script>
`,U=r({setup(){return{checked:m("2")}}});function ce(e,t,d,i,h,u){const o=c("a-switch");return l(),a("div",null,[n("div",null," checked\u503C\uFF1A "+N(e.checked),1),n(o,{checked:e.checked,"onUpdate:checked":t[1]||(t[1]=s=>e.checked=s),checkedValue:"1",unCheckedValue:"2"},null,8,["checked"])])}U.render=ce;var oe=`<cn>
#### \u8BBE\u7F6E\u4F20\u503C
\u8BBE\u7F6E\u4F20\u503C\u3002
</cn>

<us>
#### basic Usage
The most basic usage.
</us>
`,se=`<template>
  <div>
    <div>
      checked\u503C\uFF1A {{checked}}
    </div>
    <a-switch
      v-model:checked="checked"
      checkedValue="1"
      unCheckedValue="2"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<string>('2');
    return {
      checked,
    };
  },
});
<\/script>
`;const le={class:"markdown-body"},ae=E("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoFocus</td><td>\u7EC4\u4EF6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>checked(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>checkedChildren</td><td>\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td><td>string|slot</td><td></td></tr><tr><td>defaultChecked</td><td>\u521D\u59CB\u662F\u5426\u9009\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>\u5F00\u5173\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\uFF1A<code>default</code> <code>small</code></td><td>string</td><td>default</td></tr><tr><td>unCheckedChildren</td><td>\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td><td>string|slot</td><td></td></tr><tr><td>checkedChildren</td><td>\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</td><td>string|slot</td><td></td></tr><tr><td>checkedValue</td><td>\u9009\u4E2D\u65F6\u7684\u503C</td><td>string|number|boolean</td><td></td></tr><tr><td>unCheckedValue</td><td>\u975E\u9009\u4E2D\u65F6\u7684\u503C</td><td>string|number|boolean</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</td><td>Function(checked:Boolean, event: Event)</td></tr><tr><td>click</td><td>\u70B9\u51FB\u65F6\u56DE\u8C03\u51FD\u6570</td><td>Function(checked: boolean, event: Event)</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table>",6),re={expose:[],setup(e){return(t,d)=>(l(),a("div",le,[ae]))}};var ie=re;const z={cn:`# Switch \u5F00\u5173

    \u5F00\u5173\u9009\u62E9\u5668\u3002

    ## \u4F55\u65F6\u4F7F\u7528

    - \u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\uFF1B
    - \u548C \`checkbox\`\u7684\u533A\u522B\u662F\uFF0C\u5207\u6362 \`switch\` \u4F1A\u76F4\u63A5\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u800C \`checkbox\` \u4E00\u822C\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0C\u9700\u8981\u548C\u63D0\u4EA4\u64CD\u4F5C\u914D\u5408\u3002

    ## \u4EE3\u7801\u6F14\u793A`,us:"# Switch\n\n    Switching Selector.\n\n    ## When To Use\n\n    - If you need to represent the switching between two states or on-off state.\n    - The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.\n    ## Examples "};var ke={category:"Components",subtitle:"\u5F00\u5173",type:"Data Entry",title:"Switch",render(){return n("div",null,[n(c("Md"),{cn:z.cn,us:z.us},null),n(c("demo-sort"),null,{default:()=>[n(c("demo-container"),{api:L,code:j},{default:()=>[n(_,null,null)]}),n(c("demo-container"),{api:A,code:P},{default:()=>[n($,null,null)]}),n(c("demo-container"),{api:H,code:J},{default:()=>[n(S,null,null)]}),n(c("demo-container"),{api:X,code:Z},{default:()=>[n(y,null,null)]}),n(c("demo-container"),{api:ne,code:de},{default:()=>[n(T,null,null)]}),n(c("demo-container"),{api:oe,code:se},{default:()=>[n(U,null,null)]})]}),n(c("api"),null,{default:()=>[n(ie,null,null)]})])}};export{ke as default};

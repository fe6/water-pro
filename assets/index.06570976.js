import{Y as n,bw as l,bx as r,by as d,D as i,b as t,d as _,k as m,bz as w,cD as S,cE as O,bO as z}from"./vendor.846be9ce.js";const v={},D=i(" \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9 ");function k(e,a){const o=n("a-container-collapse");return l(),r(o,{title:"water"},{default:d(()=>[D]),_:1})}v.render=k;var U=v,H=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u7528\u6CD5\u3002
</cn>

<us>
#### basic
basic
</us>
`,B=`<template>
  <a-container-collapse title="water">
    \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9
  </a-container-collapse>
</template>
`;const f={},A=t("div",{style:{"margin-right":"8px"}}," action1 ",-1),E=i(" \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9 ");function L(e,a){const o=n("a-container-collapse");return l(),r(o,{text:"action",title:"water action"},{action:d(()=>[A]),default:d(()=>[E]),_:1})}f.render=L;var N=f,T=`<cn>
#### action
\u6DFB\u52A0 action
</cn>

<us>
#### action
action
</us>
`,V=`<template>
  <a-container-collapse
    text="action"
    title="water action"
  >
    <template #action>
      <div style="margin-right: 8px">
        action1
      </div>
    </template>
    \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9
  </a-container-collapse>
</template>
`,h=_({setup(){const e=m(!0),a=m(!1);return{expandHandle:()=>{a.value||(a.value=!0,setTimeout(()=>{a.value=!1,e.value=!e.value},1e3))},value:e,loading:a}}});const j=i(" \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9 ");function I(e,a,o,y,x,$){const c=n("a-button"),s=n("a-container-collapse"),p=n("a-space");return l(),r(p,{direction:"vertical",style:{width:"100%"}},{default:d(()=>[t(c,{onClick:e.expandHandle},{default:d(()=>[i(w(e.loading?"\u52A0\u8F7D\u4E2D":e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["onClick"]),t(s,{text:"water pro",value:e.value,"onUpdate:value":a[1]||(a[1]=u=>e.value=u),lazy:"",loading:e.loading,title:"expand",onExpand:e.expandHandle},{default:d(()=>[j]),_:1},8,["value","loading","onExpand"])]),_:1})}h.render=I;var M=`<cn>
#### lazy
\u5E26\u9AA8\u67B6\u5C4F\u7684\u52A0\u8F7D
</cn>

<us>
#### lazy
lazy
</us>
`,P=`<template>
    <a-space direction="vertical" style="width: 100%;">
    <a-button @click="expandHandle">{{loading ? '\u52A0\u8F7D\u4E2D' : value ? '\u6536\u8D77' : '\u5C55\u5F00'}}</a-button>
    <a-container-collapse
      text="water pro"
      v-model:value="value"
      lazy
      :loading="loading"
      title="expand"
      @expand="expandHandle"
    >
      \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9
    </a-container-collapse>
  </a-space>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(true);
    const loading = ref(false);
    return {
      expandHandle: () => {
        if (!loading.value) {
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            value.value = !value.value;
          }, 1000);
        }
      },
      value,
      loading,
    }
  }
});
<\/script>
`;const g={},R=t("div",{style:{color:"red"}}," \u81EA\u5B9A\u4E49\u6807\u9898 ",-1),W=i(" \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9 ");function Y(e,a){const o=n("a-container-collapse");return l(),r(o,null,{title:d(()=>[R]),default:d(()=>[W]),_:1})}g.render=Y;var q=g,F=`<cn>
#### slot
\u81EA\u5B9A\u4E49\u6807\u9898\u3002
</cn>

<us>
#### slot
slot
</us>
`,G=`<template>
  <a-container-collapse>
    <template #title>
      <div style="color: red">
        \u81EA\u5B9A\u4E49\u6807\u9898
      </div>
    </template>
    \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9
  </a-container-collapse>
</template>
`,b=_({components:{UpCircleOutlined:S,DownCircleOutlined:O}});const J=i(" \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9 ");function K(e,a,o,y,x,$){const c=n("UpCircleOutlined"),s=n("DownCircleOutlined"),p=n("a-container-collapse");return l(),r(p,{mode:"simple",title:"water"},{icon:d(({status:u})=>[t("div",null,[u?(l(),r(c,{key:0})):(l(),r(s,{key:1}))])]),default:d(()=>[J]),_:1})}b.render=K;var Q=`<cn>
#### \u7B80\u5355\u6A21\u5F0F
\`mode="simple"\`\u3002
</cn>

<us>
#### simple
simple
</us>
`,X=`<template>
  <a-container-collapse mode="simple" title="water">
    <template #icon="{status}">
      <div>
        <UpCircleOutlined v-if="status" />
        <DownCircleOutlined v-else />
      </div>
    </template>
      \u8FD9\u91CC\u9762\u662F\u4E2A\u5185\u5BB9
  </a-container-collapse>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    UpCircleOutlined,
    DownCircleOutlined,
  },
}); 
<\/script>
`;const Z={class:"markdown-body"},tt=z('<h2>API</h2><p>\u66F4\u591A <em><strong>\u5E2E\u52A9\u63D0\u793A</strong></em> \u7684\u53C2\u6570\uFF0C\u53C2\u8003 <a href="./basic-help-cn">basic-help</a> \u3002\u66F4\u591A <em><strong>\u5EF6\u8FDF\u5BB9\u5668</strong></em> \u7684\u53C2\u6570\uFF0C\u53C2\u8003 <a href="./container-lazy-cn">container-lazy</a> \u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>false</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>-</td><td>-</td></tr><tr><td>text</td><td>\u5E2E\u52A9\u63D0\u793A\u3002</td><td>string</td><td>-</td><td>-</td></tr><tr><td>expanable</td><td>\u662F\u5426\u53EF\u5C55\u5F00\u5185\u5BB9</td><td>boolean</td><td>true</td><td>-</td></tr><tr><td>triggerWindowResize</td><td>\u662F\u5426\u76D1\u542C\u7A97\u53E3\u6539\u53D8</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>loading</td><td>\u662F\u5426\u52A0\u8F7D\u4E2D</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>\u662F\u5426\u5EF6\u8FDF\u52A0\u8F7D</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>titleLevel</td><td>\u6807\u9898\u5B57\u53F7</td><td>number</td><td>5</td><td>3.24.0</td></tr><tr><td>mode</td><td>\u7C7B\u578B</td><td>\u8BBE\u7F6E\u5C55\u5F00\u5C55\u793A\u7C7B\u578B\uFF0C\u53EF\u9009 <code>simple</code> , <code>default</code></td><td>default</td><td>3.42.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>openChange</td><td>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</td><td>function(status)</td></tr><tr><td>panelChange</td><td>\u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>function(value, mode)</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>action</td><td>\u64CD\u4F5C\u7684\u63D2\u69FD</td><td>{status: \u2018\u72B6\u6001\u662F\u5426\u5F00\u542F\u2019}</td><td>-</td><td>3.42.0</td></tr><tr><td>icon</td><td>\u56FE\u6807\u7684\u63D2\u69FD</td><td>{status: \u2018\u72B6\u6001\u662F\u5426\u5F00\u542F\u2019}</td><td>-</td><td>3.42.0</td></tr></tbody></table>',7),nt={expose:[],setup(e){return(a,o)=>(l(),r("div",Z,[tt]))}};var et=nt;const C={cn:`# \u5C55\u5F00\u5BB9\u5668
           \u6709\u8FC7\u591A\u4E1C\u897F\u7684\u65F6\u5019
         ## \u4F55\u65F6\u4F7F\u7528
         \u4E0D\u60F3\u4E00\u6B21\u5C55\u73B0\u7684\u65F6\u5019
         ## \u4EE3\u7801\u6F14\u793A
        `,us:`# ContainerCollapse
         TODO
         ## Examples
        `};var dt={category:"Components",subtitle:"\u5C55\u5F00\u5BB9\u5668",type:"Layout",title:"ContainerCollapse",render(){return t("div",null,[t(n("Md"),{cn:C.cn,us:C.us},null),t(n("demo-sort"),null,{default:()=>[t(n("demo-container"),{api:H,code:B},{default:()=>[t(U,null,null)]}),t(n("demo-container"),{api:T,code:V},{default:()=>[t(N,null,null)]}),t(n("demo-container"),{api:M,code:P},{default:()=>[t(h,null,null)]}),t(n("demo-container"),{api:F,code:G},{default:()=>[t(q,null,null)]}),t(n("demo-container"),{api:Q,code:X},{default:()=>[t(b,null,null)]})]}),t(n("api"),null,{default:()=>[t(et,null,null)]})])}};export{dt as default};

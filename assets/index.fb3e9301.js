import{j as u}from"./main.f0d1f01d.js";import{d as m,Y as o,bw as p,bx as c,b as e,by as d,D as r,k as y,bO as S}from"./vendor.846be9ce.js";var h=m({setup(){const{register:t,methods:n}=u();return{registerModal:t,open:()=>{n.openModal()}}}});const w=r("\u6253\u5F00"),L=r(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 ");function T(t,n,s,i,g,_){const a=o("a-button"),l=o("a-modal-pro");return p(),c("div",null,[e(a,{onClick:t.open},{default:d(()=>[w]),_:1},8,["onClick"]),e(l,{onRegister:t.registerModal,title:"water"},{default:d(()=>[L]),_:1},8,["onRegister"])])}h.render=T;var R=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002
</cn>

<us>
#### Basic
Basic modal.
</us>
`,x=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro @register="registerModal" title="water">
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
    }
  },
});
<\/script>
`,M=m({setup(){const{register:t,methods:n}=u();return{registerModal:t,open:()=>{n.openModal()}}}});const B=r("\u6253\u5F00"),P=r(" \u6CA1\u6709\u5934\u548C\u5E95 ");function H(t,n,s,i,g,_){const a=o("a-button"),l=o("a-modal-pro");return p(),c("div",null,[e(a,{onClick:t.open},{default:d(()=>[B]),_:1},8,["onClick"]),e(l,{onRegister:t.registerModal,title:null,footer:null},{default:d(()=>[P]),_:1},8,["onRegister"])])}M.render=H;var D=`<cn>
#### \u6CA1\u6709\u5934\u548C\u5E95
\u6CA1\u6709\u5934\u548C\u5E95\u3002
</cn>

<us>
#### Empty
Empty.
</us>
`,j=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro @register="registerModal" :title="null" :footer="null">
      \u6CA1\u6709\u5934\u548C\u5E95
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
    }
  },
});
<\/script>
`,v=m({setup(){const{register:t,methods:n}=u();return{registerModal:t,open:()=>{n.openModal()}}}});const E=r("\u6253\u5F00"),z=r(" \u8BBE\u7F6E\u5BBD\u9AD8\u7684\u5185\u5BB9 ");function N(t,n,s,i,g,_){const a=o("a-button"),l=o("a-modal-pro");return p(),c("div",null,[e(a,{onClick:t.open},{default:d(()=>[E]),_:1},8,["onClick"]),e(l,{onRegister:t.registerModal,title:"water",width:800,minHeight:1e3,bodyStyle:{height:"500px"}},{default:d(()=>[z]),_:1},8,["onRegister"])])}v.render=N;var O=`<cn>
#### \u5927\u5C0F
\u5F39\u6846\u7684\u5BBD\u9AD8\u8BBE\u7F6E\uFF0C\u5185\u5BB9\u9AD8\u5EA6\u7684\u8BBE\u7F6E\u3002
</cn>

<us>
#### Size
Size.
</us>
`,V=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro
      @register="registerModal"
      title="water"
      :width="800"
      :minHeight="1000"
      :bodyStyle="{ height: '500px' }"
    >
      \u8BBE\u7F6E\u5BBD\u9AD8\u7684\u5185\u5BB9
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
    }
  },
});
<\/script>
`,b=m({setup(t){const{register:n,methods:s}=u(),i=y(!1);return{registerModal:n,open:()=>{s.openModal()},okHandle:()=>{i.value=!0,setTimeout(()=>{s.openModal(!1),i.value=!1},1500)},modalLoading:i}}});const F=r("\u6253\u5F00"),A=r(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 ");function I(t,n,s,i,g,_){const a=o("a-button"),l=o("a-modal-pro");return p(),c("div",null,[e(a,{onClick:t.open},{default:d(()=>[F]),_:1},8,["onClick"]),e(l,{onRegister:t.registerModal,title:"water",onOk:t.okHandle,loading:t.modalLoading,loadingTip:"\u6211\u4EEC\u5728\u52AA\u529B\u7684\u52A0\u8F7D",okButtonProps:{loading:t.modalLoading},okText:"\u70B9\u51FB\u52A0\u8F7D"},{default:d(()=>[A]),_:1},8,["onRegister","onOk","loading","okButtonProps"])])}b.render=I;var Y=`<cn>
#### \u52A0\u8F7D\u4E2D
\u5185\u5BB9\u52A0\u8F7D\uFF0C\u6309\u94AE\u52A0\u8F7D\u7684\u5B9E\u73B0\u3002
</cn>

<us>
#### Loading
Loading.
</us>
`,q=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro
      @register="registerModal"
      title="water"
      @ok="okHandle"
      :loading="modalLoading"
      loadingTip="\u6211\u4EEC\u5728\u52AA\u529B\u7684\u52A0\u8F7D"
      :okButtonProps="{
        loading: modalLoading,
      }"
      okText="\u70B9\u51FB\u52A0\u8F7D"
    >
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup(props) {
    const { register: registerModal, methods: modalMethods } = useModal();
    const modalLoading = ref(false);
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
      okHandle: () => {
        modalLoading.value = true;
        setTimeout(() => {
          modalMethods.openModal(false);
          modalLoading.value = false;
        }, 1500);
      },
      modalLoading,
    }
  }
});
<\/script>
`,$=m({setup(){const{register:t,methods:n}=u();return{registerModal:t,open:()=>{n.openModal()}}}});const G=r("\u6253\u5F00"),J=r(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 ");function K(t,n,s,i,g,_){const a=o("a-button"),l=o("a-modal-pro");return p(),c("div",null,[e(a,{onClick:t.open},{default:d(()=>[G]),_:1},8,["onClick"]),e(l,{onRegister:t.registerModal,title:"water",text:"\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A"},{default:d(()=>[J]),_:1},8,["onRegister"])])}$.render=K;var Q=`<cn>
#### \u5E2E\u52A9\u63D0\u793A\u7684\u6807\u9898
\u5E2E\u52A9\u63D0\u793A\u7684\u6807\u9898\u3002
</cn>

<us>
#### Tip
Tip.
</us>
`,U=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro @register="registerModal" title="water" text="\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A">
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
    }
  },
});
<\/script>
`,k=m({setup(){const{register:t,methods:n}=u();return{registerModal:t,open:()=>{n.openModal()},close:()=>{n.openModal(!1)}}}});const W=r("\u6253\u5F00"),X=r(" \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49 "),Z=e("div",{style:{color:"green"}},"header",-1);function tt(t,n,s,i,g,_){const a=o("a-button"),l=o("a-modal-pro");return p(),c("div",null,[e(a,{onClick:t.open},{default:d(()=>[W]),_:1},8,["onClick"]),e(l,{onRegister:t.registerModal},{footer:d(()=>[e("div",{style:{color:"red"},onClick:n[1]||(n[1]=(...f)=>t.close&&t.close(...f))},"footer")]),header:d(()=>[Z]),close:d(()=>[e("div",{style:{color:"blue"},onClick:n[2]||(n[2]=(...f)=>t.close&&t.close(...f))},"close")]),default:d(()=>[X]),_:1},8,["onRegister"])])}k.render=tt;var et=`<cn>
#### \u81EA\u5B9A\u4E49
\u81EA\u5B9A\u4E49\u3002
</cn>

<us>
#### Diy
Diy.
</us>
`,nt=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro @register="registerModal">
      \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49
      <template #footer>
        <div style="color: red" @click="close">footer</div>
      </template>
      <template #header>
        <div style="color: green">header</div>
      </template>
      <template #close>
        <div style="color: blue" @click="close">close</div>
      </template>
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useModal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    return {
      registerModal,
      open: () => {
        modalMethods.openModal();
      },
      close: () => {
        modalMethods.openModal(false);
      },
    }
  },
});
<\/script>
`;const ot={class:"markdown-body"},dt=S("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>defaultFullscreen</td><td>\u662F\u5426\u5168\u5C4F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>canFullscreen</td><td>\u662F\u5426\u5168\u5C4F\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>bodyStyle</td><td>\u5185\u5BB9\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>minHeight</td><td>\u5185\u5BB9\u7684\u6700\u5C0F\u9AD8\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>scrollStyle</td><td>\u6EDA\u52A8\u5185\u5BB9\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>width</td><td>\u5185\u5BB9\u7684\u5BBD\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>title</td><td>\u5F39\u6846\u6807\u9898\uFF0C \u4E3A <code>null</code> \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898</td><td>string | null</td><td>-</td><td></td></tr><tr><td>text</td><td>\u6807\u9898\u8FB9\u4E0A\u7684\u5E2E\u52A9\u63D0\u793A</td><td>string</td><td>-</td><td></td></tr><tr><td>loadingTip</td><td>\u5185\u5BB9\u533A\u57DF\u52A0\u8F7D\u7684\u6587\u6848</td><td>string</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u5185\u5BB9\u533A\u57DF\u662F\u5426\u52A0\u8F7D</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u5934\u90E8\u81EA\u5B9A\u4E49</td></tr><tr><td>footer</td><td>\u5E95\u90E8\u81EA\u5B9A\u4E49</td></tr><tr><td>close</td><td>\u5173\u95ED\u81EA\u5B9A\u4E49</td></tr></tbody></table><h3>modalMethods \u4E2D\u7684\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>setModalProps</td><td>\u8BBE\u7F6E Modal Pro \u5C5E\u6027</td></tr><tr><td>getVisible</td><td>\u83B7\u53D6\u5F39\u6846\u663E\u793A\u72B6\u6001</td></tr><tr><td>redoModalHeight</td><td>\u8BBE\u7F6E\u5F39\u6846\u6574\u4F53\u7684\u9AD8\u5EA6</td></tr><tr><td>openModal</td><td>\u76F4\u63A5\u4E0D\u4F20\u53C2\u6570\u7684\u8C03\u7528\u662F\u6253\u5F00\u5F39\u6846\uFF0C\u4F20 <code>false</code> \u662F\u5173\u95ED\u5F39\u6846</td></tr></tbody></table>",6),rt={expose:[],setup(t){return(n,s)=>(p(),c("div",ot,[dt]))}};var at=rt;const C={cn:`# ModalPro \u5BF9\u8BDD\u6846\u5347\u7EA7\u7248
          \u901A\u8FC7 useModal \u66F4\u5FEB\u6377\u7684\u4F7F\u7528\u3002\u81EA\u5E26\u62D6\u62FD\u529F\u80FD\uFF0C\u66F4\u597D\u7528\u3002
## \u4F55\u65F6\u4F7F\u7528
\u6240\u6709\u5F39\u6846\uFF0C\u5EFA\u8BAE\u5168\u7528\u8FD9\u79CD\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Modal Pro
         TODD
## Examples
`};var it={type:"Feedback",category:"Components",subtitle:"\u5BF9\u8BDD\u6846\u5347\u7EA7\u7248",title:"ModalPro",render(){return e("div",{id:"components-modal-demo"},[e(o("Md"),{cn:C.cn,us:C.us},null),e(o("demo-sort"),null,{default:()=>[e(o("demo-container"),{api:R,code:x},{default:()=>[e(h,null,null)]}),e(o("demo-container"),{api:D,code:j},{default:()=>[e(M,null,null)]}),e(o("demo-container"),{api:O,code:V},{default:()=>[e(v,null,null)]}),e(o("demo-container"),{api:Y,code:q},{default:()=>[e(b,null,null)]}),e(o("demo-container"),{api:Q,code:U},{default:()=>[e($,null,null)]}),e(o("demo-container"),{api:et,code:nt},{default:()=>[e(k,null,null)]})]}),e(o("api"),null,{default:()=>[e(at,null,null)]})])}};export{it as default};

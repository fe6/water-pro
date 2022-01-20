import{Y as t,bw as o,bx as a,b as e,F as i,d as l,by as v,D as d,k as C,c8 as D,bO as S}from"./vendor.846be9ce.js";var W=`<cn>
#### \u9876\u90E8\u516C\u544A
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002
</cn>

<us>
#### Banner
The simplest usage, suitable for short warning prompt.
</us>
`;const p={},E=e("br",null,null,-1),I=e("br",null,null,-1),$=e("br",null,null,-1);function A(r,s){const n=t("a-alert");return o(),a(i,null,[e(n,{message:"Warning text",banner:""}),E,e(n,{message:"Very long warning text warning text text text text text text text",banner:"",closable:""}),I,e(n,{"show-icon":!1,message:"Warning text without icon",banner:""}),$,e(n,{type:"error",message:"Error text",banner:""})],64)}p.render=A;var N=p,k=`<template>
  <a-alert message="Warning text" banner />
  <br />
  <a-alert
    message="Very long warning text warning text text text text text text text"
    banner
    closable
  />
  <br />
  <a-alert :show-icon="false" message="Warning text without icon" banner />
  <br />
  <a-alert type="error" message="Error text" banner />
</template>
`,B=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002
</cn>

<us>
#### basic
The simplest usage for short messages.
</us>
`;const u={};function M(r,s){const n=t("a-alert");return o(),a(n,{message:"Success Text",type:"success"})}u.render=M;var V=u,F=`<template>
  <a-alert message="Success Text" type="success" />
</template>
`,z=`<cn>
#### \u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A
\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\u8B66\u544A\u63D0\u793A\u3002
</cn>

<us>
#### Closable
To show close button.
</us>
`,g=l({setup(){return{onClose:s=>{console.log(s,"I was closed.")}}}});function U(r,s,n,b,w,T){const c=t("a-alert");return o(),a(i,null,[e(c,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:"",onClose:r.onClose},null,8,["onClose"]),e(c,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:"",onClose:r.onClose},null,8,["onClose"])],64)}g.render=U;var j=`<template>
  <a-alert
    message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
    type="warning"
    closable
    @close="onClose"
  />
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    closable
    @close="onClose"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onClose = (e: MouseEvent) => {
      console.log(e, 'I was closed.');
    };
    return {
      onClose,
    };
  },
});
<\/script>
`,O=`<cn>
#### \u81EA\u5B9A\u4E49\u5173\u95ED
\u81EA\u5B9A\u4E49\u56FE\u6807\u8BA9\u4FE1\u606F\u7C7B\u578B\u66F4\u52A0\u9192\u76EE\u3002
</cn>

<us>
#### Customized Close Text
Custom icons make information types more visible.
</us>
`;const m={};function P(r,s){const n=t("a-alert");return o(),a(n,{message:"Info Text",type:"info","close-text":"Close Now"})}m.render=P;var Y=m,q=`<template>
  <a-alert message="Info Text" type="info" close-text="Close Now" />
</template>
`,G=`<cn>
#### \u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD
\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD\u7684\u8B66\u544A\u63D0\u793A\u3002
</cn>

<us>
#### Description
Additional description for alert message.
</us>
`;const f={},H=e("p",null,[d(" Success Description "),e("span",{style:{color:"red"}},"Success"),d(" Description Success Description ")],-1);function J(r,s){const n=t("a-alert");return o(),a(i,null,[e(n,{message:"Success Text",type:"success"},{description:v(()=>[H]),_:1}),e(n,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),e(n,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),e(n,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"})],64)}f.render=J;var K=f,L=`<template>
  <a-alert message="Success Text" type="success">
    <template #description>
      <p>
        Success Description
        <span style="color: red">Success</span>
        Description Success Description
      </p>
    </template>
  </a-alert>
  <a-alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
  />
  <a-alert
    message="Warning Text"
    description="Warning Description Warning Description Warning Description Warning Description"
    type="warning"
  />
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description"
    type="error"
  />
</template>
`,Q=`<cn>
#### \u56FE\u6807
\u53EF\u53E3\u7684\u56FE\u6807\u8BA9\u4FE1\u606F\u7C7B\u578B\u66F4\u52A0\u9192\u76EE\u3002
</cn>

<us>
#### Icon
Decent icon make information more clear and more friendly.
</us>
`;const _={};function R(r,s){const n=t("a-alert");return o(),a(i,null,[e(n,{message:"Success Tips",type:"success","show-icon":""}),e(n,{message:"Informational Notes",type:"info","show-icon":""}),e(n,{message:"Warning",type:"warning","show-icon":""}),e(n,{message:"Error",type:"error","show-icon":""}),e(n,{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success","show-icon":""}),e(n,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info","show-icon":""}),e(n,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning","show-icon":""}),e(n,{message:"Error",description:"This is an error message about copywriting.",type:"error","show-icon":""})],64)}_.render=R;var X=_,Z=`<template>
  <a-alert message="Success Tips" type="success" show-icon />
  <a-alert message="Informational Notes" type="info" show-icon />
  <a-alert message="Warning" type="warning" show-icon />
  <a-alert message="Error" type="error" show-icon />
  <a-alert
    message="Success Tips"
    description="Detailed description and advices about successful copywriting."
    type="success"
    show-icon
  />
  <a-alert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
  />
  <a-alert
    message="Warning"
    description="This is a warning notice about copywriting."
    type="warning"
    show-icon
  />
  <a-alert
    message="Error"
    description="This is an error message about copywriting."
    type="error"
    show-icon
  />
</template>
`,ee="<cn>\n#### \u56DB\u79CD\u6837\u5F0F\n\u5171\u6709\u56DB\u79CD\u6837\u5F0F `success`\u3001`info`\u3001`warning`\u3001`error`\u3002\n</cn>\n\n<us>\n#### More types\nThere are 4 types of Alert: `success`, `info`, `warning`, `error`.\n</us>\n";const h={};function ne(r,s){const n=t("a-alert");return o(),a(i,null,[e(n,{message:"Success Text",type:"success"}),e(n,{message:"Info Text",type:"info"}),e(n,{message:"Warning Text",type:"warning"}),e(n,{message:"Error Text",type:"error"})],64)}h.render=ne;var te=h,re=`<template>
  <a-alert message="Success Text" type="success" />
  <a-alert message="Info Text" type="info" />
  <a-alert message="Warning Text" type="warning" />
  <a-alert message="Error Text" type="error" />
</template>
`,se=`<cn>
#### \u5E73\u6ED1\u5730\u5378\u8F7D
\u5E73\u6ED1\u3001\u81EA\u7136\u7684\u5378\u8F7D\u63D0\u793A\u3002
</cn>

<us>
#### Smoothly Unmount
Smoothly and unaffectedly unmount Alert.
</us>
`,x=l({setup(){const r=C(!0);return{visible:r,handleClose:()=>{r.value=!1}}}});function oe(r,s,n,b,w,T){const c=t("a-alert");return r.visible?(o(),a(c,{key:0,message:"Alert Message Text",type:"success",closable:"","after-close":r.handleClose},null,8,["after-close"])):D("v-if",!0)}x.render=oe;var ae=`<template>
  <a-alert
    v-if="visible"
    message="Alert Message Text"
    type="success"
    closable
    :after-close="handleClose"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(true);
    const handleClose = () => {
      visible.value = false;
    };
    return {
      visible,
      handleClose,
    };
  },
});
<\/script>
`;const ie={class:"markdown-body"},ce=S("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>afterClose</td><td>\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>() =&gt; void</td><td>-</td><td>-</td></tr><tr><td>banner</td><td>\u662F\u5426\u7528\u4F5C\u9876\u90E8\u516C\u544A</td><td>boolean</td><td>false</td><td>-</td></tr><tr><td>closable</td><td>\u9ED8\u8BA4\u4E0D\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u65E0</td><td>-</td></tr><tr><td>closeText</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE</td><td>string|slot</td><td>\u65E0</td><td>-</td></tr><tr><td>description</td><td>\u8B66\u544A\u63D0\u793A\u7684\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD</td><td>string|slot</td><td>\u65E0</td><td>-</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C<code>showIcon</code> \u4E3A <code>true</code> \u65F6\u6709\u6548</td><td>vnode | slot</td><td>-</td><td>-</td></tr><tr><td>message</td><td>\u8B66\u544A\u63D0\u793A\u5185\u5BB9</td><td>string|slot</td><td>\u65E0</td><td>-</td></tr><tr><td>showIcon</td><td>\u662F\u5426\u663E\u793A\u8F85\u52A9\u56FE\u6807</td><td>boolean</td><td>false\uFF0C<code>banner</code> \u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u503C\u4E3A true</td><td>-</td></tr><tr><td>type</td><td>\u6307\u5B9A\u8B66\u544A\u63D0\u793A\u7684\u6837\u5F0F\uFF0C\u6709\u56DB\u79CD\u9009\u62E9 <code>success</code>\u3001<code>info</code>\u3001<code>warning</code>\u3001<code>error</code></td><td>string</td><td><code>info</code>\uFF0C<code>banner</code> \u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u503C\u4E3A <code>warning</code></td><td>-</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>(e: MouseEvent) =&gt; void</td><td>-</td></tr></tbody></table>",4),le={expose:[],setup(r){return(s,n)=>(o(),a("div",ie,[ce]))}};var de=le;const y={cn:`# Alert \u8B66\u544A\u63D0\u793A
          \u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u5F53\u67D0\u4E2A\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6\u3002
- \u975E\u6D6E\u5C42\u7684\u9759\u6001\u5C55\u73B0\u5F62\u5F0F\uFF0C\u59CB\u7EC8\u5C55\u73B0\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\uFF0C\u7528\u6237\u53EF\u4EE5\u70B9\u51FB\u5173\u95ED\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Alert
          Alert component for feedback.
## When To Use
- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.
## Examples
`};var ue={category:"Components",subtitle:"\u8B66\u544A\u63D0\u793A",type:"Feedback",zhType:"\u53CD\u9988",title:"Alert",render(){return e("div",{id:"components-alert-demo"},[e(t("Md"),{cn:y.cn,us:y.us},null),e(t("demo-sort"),null,{default:()=>[e(t("demo-container"),{api:W,code:k},{default:()=>[e(N,null,null)]}),e(t("demo-container"),{api:B,code:F},{default:()=>[e(V,null,null)]}),e(t("demo-container"),{api:z,code:j},{default:()=>[e(g,null,null)]}),e(t("demo-container"),{api:O,code:q},{default:()=>[e(Y,null,null)]}),e(t("demo-container"),{api:G,code:L},{default:()=>[e(K,null,null)]}),e(t("demo-container"),{api:Q,code:Z},{default:()=>[e(X,null,null)]}),e(t("demo-container"),{api:ee,code:re},{default:()=>[e(te,null,null)]}),e(t("demo-container"),{api:se,code:ae},{default:()=>[e(x,null,null)]})]}),e(t("api"),null,{default:()=>[e(de,null,null)]})])}};export{ue as default};

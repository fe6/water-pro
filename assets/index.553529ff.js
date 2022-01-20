import{Y as e,bw as r,bx as l,by as n,b as t,D as a,d as y,a2 as w,bG as T,bH as B,bI as I,cC as R,bO as G}from"./vendor.846be9ce.js";const b={},N=a("Go Console"),z=a("Buy Again");function A(c,u){const o=e("a-button"),s=e("a-result");return r(),l(s,{status:"success",title:"Successfully Purchased Cloud Server ECS!","sub-title":"Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."},{extra:n(()=>[t(o,{key:"console",type:"primary"},{default:n(()=>[N]),_:1}),t(o,{key:"buy"},{default:n(()=>[z]),_:1})]),_:1})}b.render=A;var E=b,H=`<cn>
#### Success
\u6210\u529F\u7684\u7ED3\u679C\u3002
</cn>

<us>
#### Success
Show successful results.
</us>
`,Y=`<template>
  <a-result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>
  </a-result>
</template>
`;const h={},O=a("Go Console");function W(c,u){const o=e("a-button"),s=e("a-result");return r(),l(s,{title:"Your operation has been executed"},{extra:n(()=>[t(o,{key:"console",type:"primary"},{default:n(()=>[O]),_:1})]),_:1})}h.render=W;var P=h,U=`<cn>
#### Info
\u5C55\u793A\u5904\u7406\u7ED3\u679C\u3002
</cn>

<us>
#### Info
Show processing results.
</us>
`,V=`<template>
  <a-result title="Your operation has been executed">
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
    </template>
  </a-result>
</template>
`;const f={},F=a("Go Console");function j(c,u){const o=e("a-button"),s=e("a-result");return r(),l(s,{status:"warning",title:"There are some problems with your operation."},{extra:n(()=>[t(o,{key:"console",type:"primary"},{default:n(()=>[F]),_:1})]),_:1})}f.render=j;var D=f,M=`<cn>
#### Warning
\u8B66\u544A\u7C7B\u578B\u7684\u7ED3\u679C\u3002
</cn>

<us>
#### Warning
The result of the warning.
</us>
`,q=`<template>
  <a-result status="warning" title="There are some problems with your operation.">
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
    </template>
  </a-result>
</template>
`;const g={},J=a("Back Home");function K(c,u){const o=e("a-button"),s=e("a-result");return r(),l(s,{status:"403",title:"403","sub-title":"Sorry, you are not authorized to access this page."},{extra:n(()=>[t(o,{type:"primary"},{default:n(()=>[J]),_:1})]),_:1})}g.render=K;var L=g,Q=`<cn>
#### 403
\u4F60\u6CA1\u6709\u6B64\u9875\u9762\u7684\u8BBF\u95EE\u6743\u9650\u3002
</cn>

<us>
#### 403
you are not authorized to access this page.
</us>
`,X=`<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>
`;const v={},Z=a("Back Home");function tt(c,u){const o=e("a-button"),s=e("a-result");return r(),l(s,{status:"404",title:"404","sub-title":"Sorry, the page you visited does not exist."},{extra:n(()=>[t(o,{type:"primary"},{default:n(()=>[Z]),_:1})]),_:1})}v.render=tt;var et=v,nt=`<cn>
#### 404
\u6B64\u9875\u9762\u672A\u627E\u5230\u3002
</cn>

<us>
#### 404
The page you visited does not exist.
</us>
`,ot=`<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>
`;const x={},st=a("Back Home");function at(c,u){const o=e("a-button"),s=e("a-result");return r(),l(s,{status:"500",title:"500","sub-title":"Sorry, the server is wrong."},{extra:n(()=>[t(o,{type:"primary"},{default:n(()=>[st]),_:1})]),_:1})}x.render=at;var rt=x,lt=`<cn>
#### 500
\u670D\u52A1\u5668\u53D1\u751F\u4E86\u9519\u8BEF\u3002
</cn>

<us>
#### 500
The server is wrong.
</us>
`,ct=`<template>
  <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>
`,m=y({components:{CloseCircleOutlined:w}});const i=I();T("data-v-0600a021");const ut=a("Go Console"),it=a("Buy Again"),dt={class:"desc"},pt=t("p",{style:{"font-size":"16px"}},[t("strong",null,"The content you submitted has the following error:")],-1),_t=a(" Your account has been frozen "),mt=t("a",null,"Thaw immediately >",-1),yt=a(" Your account is not yet eligible to apply "),bt=t("a",null,"Apply Unlock >",-1);B();const ht=i((c,u,o,s,$,k)=>{const d=e("a-button"),p=e("close-circle-outlined"),_=e("a-result");return r(),l(_,{status:"error",title:"Submission Failed","sub-title":"Please check and modify the following information before resubmitting."},{extra:i(()=>[t(d,{key:"console",type:"primary"},{default:i(()=>[ut]),_:1}),t(d,{key:"buy"},{default:i(()=>[it]),_:1})]),default:i(()=>[t("div",dt,[pt,t("p",null,[t(p,{style:{color:"red"}}),_t,mt]),t("p",null,[t(p,{style:{color:"red"}}),yt,bt])])]),_:1})});m.render=ht;m.__scopeId="data-v-0600a021";var ft=`<cn>
#### Error
\u590D\u6742\u7684\u9519\u8BEF\u53CD\u9988\u3002
</cn>

<us>
#### Error
Complex error feedback.
</us>
`,gt=`<template>
  <a-result
    status="error"
    title="Submission Failed"
    sub-title="Please check and modify the following information before resubmitting."
  >
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>

    <div class="desc">
      <p style="font-size: 16px">
        <strong>The content you submitted has the following error:</strong>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account has been frozen
        <a>Thaw immediately &gt;</a>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account is not yet eligible to apply
        <a>Apply Unlock &gt;</a>
      </p>
    </div>
  </a-result>
</template>
<script lang="ts">
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    CloseCircleOutlined,
  },
});
<\/script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>
`,C=y({components:{SmileTwoTone:R}});const vt=a("Next");function xt(c,u,o,s,$,k){const d=e("smile-twoTone"),p=e("a-button"),_=e("a-result");return r(),l(_,{title:"Great, we have done all the operations!"},{icon:n(()=>[t(d)]),extra:n(()=>[t(p,{type:"primary"},{default:n(()=>[vt]),_:1})]),_:1})}C.render=xt;var Ct=`<cn>
#### \u81EA\u5B9A\u4E49 icon
\u81EA\u5B9A\u4E49 icon\u3002
</cn>

<us>
#### Custom icon
Custom icon.
</us>
`,St=`<template>
  <a-result title="Great, we have done all the operations!">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <a-button type="primary">Next</a-button>
    </template>
  </a-result>
</template>
<script lang="ts">
import { SmileTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileTwoTone,
  },
});
<\/script>
`;const $t={class:"markdown-body"},kt=G("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>title \u6587\u5B57</td><td>string | VNode | #title</td><td>-</td></tr><tr><td>subTitle</td><td>subTitle \u6587\u5B57</td><td>string | VNode | #subTitle</td><td>-</td></tr><tr><td>status</td><td>\u7ED3\u679C\u7684\u72B6\u6001,\u51B3\u5B9A\u56FE\u6807\u548C\u989C\u8272</td><td>`\u2018success\u2019</td><td>\u2018error\u2019</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49 icon</td><td>#icon</td><td>-</td></tr><tr><td>extra</td><td>\u64CD\u4F5C\u533A</td><td>#extra</td><td>-</td></tr></tbody></table>",2),wt={expose:[],setup(c){return(u,o)=>(r(),l("div",$t,[kt]))}};var Tt=wt;const S={cn:`# Result \u7ED3\u679C

  \u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\u3002

  ## \u4F55\u65F6\u4F7F\u7528

  \u5F53\u6709\u91CD\u8981\u64CD\u4F5C\u9700\u544A\u77E5\u7528\u6237\u5904\u7406\u7ED3\u679C\uFF0C\u4E14\u53CD\u9988\u5185\u5BB9\u8F83\u4E3A\u590D\u6742\u65F6\u4F7F\u7528\u3002
  ## \u4EE3\u7801\u6F14\u793A`,us:`# Result

  Used to feed back the results of a series of operational tasks.

  # When To Use

  Use when important operations need to inform the user to process the results and the feedback is more complicated.
  ## Examples
  `};var It={category:"Components",subtitle:"\u7ED3\u679C",type:"Feedback",cols:1,title:"Result",render(){return t("div",null,[t(e("Md"),{cn:S.cn,us:S.us},null),t(e("demo-sort"),{cols:1},{default:()=>[t(e("demo-container"),{api:H,code:Y},{default:()=>[t(E,null,null)]}),t(e("demo-container"),{api:U,code:V},{default:()=>[t(P,null,null)]}),t(e("demo-container"),{api:M,code:q},{default:()=>[t(D,null,null)]}),t(e("demo-container"),{api:Q,code:X},{default:()=>[t(L,null,null)]}),t(e("demo-container"),{api:nt,code:ot},{default:()=>[t(et,null,null)]}),t(e("demo-container"),{api:lt,code:ct},{default:()=>[t(rt,null,null)]}),t(e("demo-container"),{api:ft,code:gt},{default:()=>[t(m,null,null)]}),t(e("demo-container"),{api:Ct,code:St},{default:()=>[t(C,null,null)]})]}),t(e("api"),null,{default:()=>[t(Tt,null,null)]})])}};export{It as default};

import{Y as e,bw as d,bx as c,by as o,b as t,D as g,bz as f,d as v,bP as V,ck as O,M as L,bM as B,k as S,bG as Y,bH as U,F as E,bV as M,c8 as b,bI as A,bO as j}from"./vendor.846be9ce.js";const T={},q=g("Finished"),G=t("span",null,"This is a description.",-1);function H(n,i){const s=e("a-step"),a=e("a-steps");return d(),c(a,{current:1},{default:o(()=>[t(s,null,{title:o(()=>[q]),description:o(()=>[G]),_:1}),t(s,{title:"In Progress","sub-title":"Left 00:00:08",description:"This is a description."}),t(s,{title:"Waiting",description:"This is a description."})]),_:1})}T.render=H;var J=T,K=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002
</cn>

<us>
#### Basic
The most basic step bar.
</us>
`,Q=`<template>
  <a-steps :current="1">
    <a-step>
      <template #title>Finished</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </a-step>
    <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
`;const $={};function R(n,i){const s=e("a-popover"),a=e("a-step"),h=e("a-steps");return d(),c("div",null,[t(h,{current:1},{progressDot:o(({index:m,status:r,prefixCls:p})=>[t(s,null,{content:o(()=>[t("span",null,"step "+f(m)+" status: "+f(r),1)]),default:o(()=>[t("span",{class:`${p}-icon-dot`},null,2)]),_:2},1024)]),default:o(()=>[t(a,{title:"Finished",description:"You can hover on the dot."}),t(a,{title:"In Progress",description:"You can hover on the dot."}),t(a,{title:"Waiting",description:"You can hover on the dot."}),t(a,{title:"Waiting",description:"You can hover on the dot."})]),_:1})])}$.render=R;var X=$,Z=`<cn>
#### \u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761
\u4E3A\u70B9\u72B6\u6B65\u9AA4\u6761\u589E\u52A0\u81EA\u5B9A\u4E49\u5C55\u793A\u3002
</cn>

<us>
#### Customized Dot Style
You can customize the display for Steps with progress dot style.
</us>
`,tt=`<template>
  <div>
    <a-steps :current="1">
      <template #progressDot="{ index, status, prefixCls }">
        <a-popover>
          <template #content>
            <span>step {{ index }} status: {{ status }}</span>
          </template>
          <span :class="\`\${prefixCls}-icon-dot\`" />
        </a-popover>
      </template>
      <a-step title="Finished" description="You can hover on the dot." />
      <a-step title="In Progress" description="You can hover on the dot." />
      <a-step title="Waiting" description="You can hover on the dot." />
      <a-step title="Waiting" description="You can hover on the dot." />
    </a-steps>
  </div>
</template>
`;const C={};function et(n,i){const s=e("a-step"),a=e("a-steps");return d(),c(a,{current:1,status:"error"},{default:o(()=>[t(s,{title:"Finished",description:"This is a description."}),t(s,{title:"In Progress",description:"This is a description."}),t(s,{title:"Waiting",description:"This is a description."})]),_:1})}C.render=et;var nt=C,st=`<cn>
#### \u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF
\u4F7F\u7528 Steps \u7684 \`status\` \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\u3002
</cn>

<us>
#### Error status
By using \`status\` of \`Steps\`, you can specify the state for current step.
</us>
`,it=`<template>
  <a-steps :current="1" status="error">
    <a-step title="Finished" description="This is a description." />
    <a-step title="In Progress" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
`,x=v({components:{UserOutlined:V,SolutionOutlined:O,LoadingOutlined:L,SmileOutlined:B}});function rt(n,i,s,a,h,m){const r=e("user-outlined"),p=e("a-step"),l=e("solution-outlined"),u=e("loading-outlined"),D=e("smile-outlined"),N=e("a-steps");return d(),c(N,null,{default:o(()=>[t(p,{status:"finish",title:"Login"},{icon:o(()=>[t(r)]),_:1}),t(p,{status:"finish",title:"Verification"},{icon:o(()=>[t(l)]),_:1}),t(p,{status:"process",title:"Pay"},{icon:o(()=>[t(u)]),_:1}),t(p,{status:"wait",title:"Done"},{icon:o(()=>[t(D)]),_:1})]),_:1})}x.render=rt;var ot=`<cn>
#### \u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761
\u901A\u8FC7\u8BBE\u7F6E \`Steps.Step\` \u7684 \`icon\` \u5C5E\u6027\uFF0C\u53EF\u4EE5\u542F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u3002
</cn>

<us>
#### With icon
You can use your own custom icons by setting the property \`icon\` for \`Steps.Step\`.
</us>
`,at=`<template>
  <a-steps>
    <a-step status="finish" title="Login">
      <template #icon>
        <user-outlined />
      </template>
    </a-step>
    <a-step status="finish" title="Verification">
      <template #icon>
        <solution-outlined />
      </template>
    </a-step>
    <a-step status="process" title="Pay">
      <template #icon>
        <loading-outlined />
      </template>
    </a-step>
    <a-step status="wait" title="Done">
      <template #icon>
        <smile-outlined />
      </template>
    </a-step>
  </a-steps>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
  },
});
<\/script>
`;const P={};function dt(n,i){const s=e("a-step"),a=e("a-steps"),h=e("a-divider");return d(),c("div",null,[t(a,{"progress-dot":"",current:1},{default:o(()=>[t(s,{title:"Finished",description:"This is a description."}),t(s,{title:"In Progress",description:"This is a description."}),t(s,{title:"Waiting",description:"This is a description."})]),_:1}),t(h),t(a,{"progress-dot":"",current:1,direction:"vertical"},{default:o(()=>[t(s,{title:"Finished",description:"This is a description. This is a description."}),t(s,{title:"Finished",description:"This is a description. This is a description."}),t(s,{title:"In Progress",description:"This is a description. This is a description."}),t(s,{title:"Waiting",description:"This is a description."}),t(s,{title:"Waiting",description:"This is a description."})]),_:1})])}P.render=dt;var ct=P,pt=`<cn>
#### \u70B9\u72B6\u6B65\u9AA4\u6761
\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002
</cn>

<us>
#### Dot Style
Steps with progress dot style.
</us>
`,lt=`<template>
  <div>
    <a-steps progress-dot :current="1">
      <a-step title="Finished" description="This is a description." />
      <a-step title="In Progress" description="This is a description." />
      <a-step title="Waiting" description="This is a description." />
    </a-steps>
    <a-divider />
    <a-steps progress-dot :current="1" direction="vertical">
      <a-step title="Finished" description="This is a description. This is a description." />
      <a-step title="Finished" description="This is a description. This is a description." />
      <a-step title="In Progress" description="This is a description. This is a description." />
      <a-step title="Waiting" description="This is a description." />
      <a-step title="Waiting" description="This is a description." />
    </a-steps>
  </div>
</template>
`;const w={};function ut(n,i){const s=e("a-step"),a=e("a-steps");return d(),c(a,{current:1,size:"small"},{default:o(()=>[t(s,{title:"Finished"}),t(s,{title:"In Progress"}),t(s,{title:"Waiting"})]),_:1})}w.render=ut;var ht=w,mt=`<cn>
#### \u8FF7\u4F60\u7248
\u8FF7\u4F60\u7248\u7684\u6B65\u9AA4\u6761\uFF0C\u901A\u8FC7\u8BBE\u7F6E \`<Steps size="small">\` \u542F\u7528\u3002
</cn>

<us>
#### Mini version
By setting like this: \`<Steps size="small">\`, you can get a mini version.
</us>
`,_t=`<template>
  <a-steps :current="1" size="small">
    <a-step title="Finished" />
    <a-step title="In Progress" />
    <a-step title="Waiting" />
  </a-steps>
</template>
`,y=v({setup(){const n=S(0);return{current:n,steps:[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],next:()=>{n.value++},prev:()=>{n.value--}}}});const _=A();Y("data-v-6d52ed16");const gt={class:"steps-content"},vt={class:"steps-action"},ft=g("Next"),St=g(" Done "),bt=g("Previous");U();const yt=_((n,i,s,a,h,m)=>{const r=e("a-step"),p=e("a-steps"),l=e("a-button");return d(),c("div",null,[t(p,{current:n.current},{default:_(()=>[(d(!0),c(E,null,M(n.steps,u=>(d(),c(r,{key:u.title,title:u.title},null,8,["title"]))),128))]),_:1},8,["current"]),t("div",gt,f(n.steps[n.current].content),1),t("div",vt,[n.current<n.steps.length-1?(d(),c(l,{key:0,type:"primary",onClick:n.next},{default:_(()=>[ft]),_:1},8,["onClick"])):b("v-if",!0),n.current==n.steps.length-1?(d(),c(l,{key:1,type:"primary",onClick:i[1]||(i[1]=u=>n.$message.success("Processing complete!"))},{default:_(()=>[St]),_:1})):b("v-if",!0),n.current>0?(d(),c(l,{key:2,style:{"margin-left":"8px"},onClick:n.prev},{default:_(()=>[bt]),_:1},8,["onClick"])):b("v-if",!0)])])});y.render=yt;y.__scopeId="data-v-6d52ed16";var Tt=`<cn>
#### \u6B65\u9AA4\u5207\u6362
\u901A\u5E38\u914D\u5408\u5185\u5BB9\u53CA\u6309\u94AE\u4F7F\u7528\uFF0C\u8868\u793A\u4E00\u4E2A\u6D41\u7A0B\u7684\u5904\u7406\u8FDB\u5EA6\u3002
</cn>

<us>
#### Switch Step
Cooperate with the content and buttons, to represent the progress of a process.
</us>
`,$t=`<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      {{ steps[current].content }}
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">Previous</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);
    const next = () => {
      current.value++;
    };
    const prev = () => {
      current.value--;
    };
    return {
      current,
      steps: [
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ],
      next,
      prev,
    };
  },
});
<\/script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
`;const k={};function Ct(n,i){const s=e("a-step"),a=e("a-steps");return d(),c(a,{direction:"vertical",size:"small",current:1},{default:o(()=>[t(s,{title:"Finished",description:"This is a description."}),t(s,{title:"In Progress",description:"This is a description."}),t(s,{title:"Waiting",description:"This is a description."})]),_:1})}k.render=Ct;var xt=k,Pt=`<cn>
#### \u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761
\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761\u3002
</cn>

<us>
#### Vertical mini version
A simple mini version step bar in the vertical direction.
</us>
`,wt=`<template>
  <a-steps direction="vertical" size="small" :current="1">
    <a-step title="Finished" description="This is a description." />
    <a-step title="In Progress" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
`;const F={};function kt(n,i){const s=e("a-step"),a=e("a-steps");return d(),c(a,{direction:"vertical",current:1,verticalSpace:"large"},{default:o(()=>[t(s,{title:"Finished",description:"This is a description."}),t(s,{title:"In Progress",description:"This is a description."}),t(s,{title:"Waiting",description:"This is a description."})]),_:1})}F.render=kt;var Ft=F,It=`<cn>
#### \u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761
\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002\`verticalSpace="large"\` \u53EF\u8BBE\u7F6E\u95F4\u8DDD\u3002
</cn>

<us>
#### Vertical
A simple step bar in the vertical direction.
</us>
`,zt=`<template>
  <a-steps direction="vertical" :current="1" verticalSpace="large">
    <a-step title="Finished" description="This is a description." />
    <a-step title="In Progress" description="This is a description." />
    <a-step title="Waiting" description="This is a description." />
  </a-steps>
</template>
`,I=v({setup(){return{current:S(0)}}});function Wt(n,i,s,a,h,m){const r=e("a-step"),p=e("a-steps"),l=e("a-divider");return d(),c("div",null,[t(p,{current:n.current,"onUpdate:current":i[1]||(i[1]=u=>n.current=u)},{default:o(()=>[t(r,{title:"Step 1",description:"This is a description."}),t(r,{title:"Step 2",description:"This is a description."}),t(r,{title:"Step 3",description:"This is a description."})]),_:1},8,["current"]),t(l),t(p,{current:n.current,"onUpdate:current":i[2]||(i[2]=u=>n.current=u),direction:"vertical"},{default:o(()=>[t(r,{title:"Step 1",description:"This is a description."}),t(r,{title:"Step 2",description:"This is a description."}),t(r,{title:"Step 3",description:"This is a description."})]),_:1},8,["current"])])}I.render=Wt;var Dt=`<cn>
#### \u53EF\u70B9\u51FB
\u8BBE\u7F6E \`@change\` \u540E\uFF0CSteps \u53D8\u4E3A\u53EF\u70B9\u51FB\u72B6\u6001\u3002
</cn>

<us>
#### Clickable
Setting \`@change\` makes Steps clickable.
</us>
`,Nt=`<template>
  <div>
    <a-steps v-model:current="current">
      <a-step title="Step 1" description="This is a description." />
      <a-step title="Step 2" description="This is a description." />
      <a-step title="Step 3" description="This is a description." />
    </a-steps>
    <a-divider />
    <a-steps v-model:current="current" direction="vertical">
      <a-step title="Step 1" description="This is a description." />
      <a-step title="Step 2" description="This is a description." />
      <a-step title="Step 3" description="This is a description." />
    </a-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);

    return {
      current,
    };
  },
});
<\/script>
`,z=v({setup(){return{current:S(0),stepStyle:{marginBottom:"60px",boxShadow:"0px -1px 0 0 #e8e8e8 inset"}}}});function Vt(n,i,s,a,h,m){const r=e("a-step"),p=e("a-steps");return d(),c("div",null,[t(p,{current:n.current,"onUpdate:current":i[1]||(i[1]=l=>n.current=l),type:"navigation",size:"small",style:n.stepStyle},{default:o(()=>[t(r,{title:"Step 1","sub-title":"00:00:05",status:"finish",description:"This is a description."}),t(r,{title:"Step 2","sub-title":"00:01:02",status:"process",description:"This is a description."}),t(r,{title:"Step 3","sub-title":"waiting for longlong time",status:"wait",description:"This is a description."})]),_:1},8,["current","style"]),t(p,{current:n.current,"onUpdate:current":i[2]||(i[2]=l=>n.current=l),type:"navigation",style:n.stepStyle},{default:o(()=>[t(r,{status:"finish",title:"Step 1"}),t(r,{status:"process",title:"Step 2"}),t(r,{status:"wait",title:"Step 3"}),t(r,{status:"wait",title:"Step 4"})]),_:1},8,["current","style"]),t(p,{current:n.current,"onUpdate:current":i[3]||(i[3]=l=>n.current=l),type:"navigation",size:"small",style:n.stepStyle},{default:o(()=>[t(r,{status:"finish",title:"finish 1"}),t(r,{status:"finish",title:"finish 2"}),t(r,{status:"process",title:"current process"}),t(r,{status:"wait",title:"wait",disabled:""})]),_:1},8,["current","style"])])}z.render=Vt;var Ot=`<cn>
#### \u5BFC\u822A\u6B65\u9AA4
\u5BFC\u822A\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\u3002
</cn>

<us>
#### Navigation Steps
Navigation steps.
</us>
`,Lt=`<template>
  <div>
    <a-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
      <a-step
        title="Step 1"
        sub-title="00:00:05"
        status="finish"
        description="This is a description."
      />
      <a-step
        title="Step 2"
        sub-title="00:01:02"
        status="process"
        description="This is a description."
      />
      <a-step
        title="Step 3"
        sub-title="waiting for longlong time"
        status="wait"
        description="This is a description."
      />
    </a-steps>
    <a-steps v-model:current="current" type="navigation" :style="stepStyle">
      <a-step status="finish" title="Step 1" />
      <a-step status="process" title="Step 2" />
      <a-step status="wait" title="Step 3" />
      <a-step status="wait" title="Step 4" />
    </a-steps>
    <a-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
      <a-step status="finish" title="finish 1" />
      <a-step status="finish" title="finish 2" />
      <a-step status="process" title="current process" />
      <a-step status="wait" title="wait" disabled />
    </a-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);

    return {
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
    };
  },
});
<\/script>
`;const Bt={class:"markdown-body"},Yt=j("<h3>Steps</h3><p>\u6574\u4F53\u6B65\u9AA4\u6761\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>type</td><td>\u6B65\u9AA4\u6761\u7C7B\u578B\uFF0C\u6709 <code>default</code> \u548C <code>navigation</code> \u4E24\u79CD</td><td>string</td><td><code>default</code></td><td>1.5.0</td></tr><tr><td>current (v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\u3002\u5728\u5B50 Step \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>status</code> \u5C5E\u6027\u8986\u76D6\u72B6\u6001, 1.5.0 \u540E\u652F\u6301 v-model</td><td>number</td><td>0</td><td></td></tr><tr><td>direction</td><td>\u6307\u5B9A\u6B65\u9AA4\u6761\u65B9\u5411\u3002\u76EE\u524D\u652F\u6301\u6C34\u5E73\uFF08<code>horizontal</code>\uFF09\u548C\u7AD6\u76F4\uFF08<code>vertical</code>\uFF09\u4E24\u79CD\u65B9\u5411</td><td>string</td><td>horizontal</td><td></td></tr><tr><td>labelPlacement</td><td>\u6307\u5B9A\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6C34\u5E73\u653E\u56FE\u6807\u53F3\u4FA7\uFF0C\u53EF\u9009<code>vertical</code>\u653E\u56FE\u6807\u4E0B\u65B9</td><td>string</td><td><code>horizontal</code></td><td></td></tr><tr><td>progressDot</td><td>\u70B9\u72B6\u6B65\u9AA4\u6761\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A \u4F5C\u7528\u57DF\u63D2\u69FD,labelPlacement \u5C06\u5F3A\u5236\u4E3A<code>vertical</code></td><td>Boolean or slot=\u201CprogressDot\u201D slot-scope=\u201C{index, status, title, description, prefixCls})\u201D</td><td>false</td><td></td></tr><tr><td>size</td><td>\u6307\u5B9A\u5927\u5C0F\uFF0C\u76EE\u524D\u652F\u6301\u666E\u901A\uFF08<code>default</code>\uFF09\u548C\u8FF7\u4F60\uFF08<code>small</code>\uFF09</td><td>string</td><td>default</td><td></td></tr><tr><td>status</td><td>\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u53EF\u9009 <code>wait</code> <code>process</code> <code>finish</code> <code>error</code></td><td>string</td><td>process</td><td></td></tr><tr><td>initial</td><td>\u8D77\u59CB\u5E8F\u53F7\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570</td><td>number</td><td>0</td><td></td></tr><tr><td>verticalSpace</td><td>direction=\u201Cvertical\u201D \u7684\u65F6\u5019\u6307\u5B9A\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> <code>default</code></td><td>string</td><td>default</td><td>3.40.0</td></tr></tbody></table><h4>Steps \u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u70B9\u51FB\u5207\u6362\u6B65\u9AA4\u65F6\u89E6\u53D1</td><td>(current) =&gt; void</td><td>-</td></tr></tbody></table><h3>Steps.Step</h3><p>\u6B65\u9AA4\u6761\u5185\u7684\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>description</td><td>\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0\uFF0C\u53EF\u9009</td><td>string | slot</td><td>-</td><td></td></tr><tr><td>icon</td><td>\u6B65\u9AA4\u56FE\u6807\u7684\u7C7B\u578B\uFF0C\u53EF\u9009</td><td>string | slot</td><td>-</td><td></td></tr><tr><td>status</td><td>\u6307\u5B9A\u72B6\u6001\u3002\u5F53\u4E0D\u914D\u7F6E\u8BE5\u5C5E\u6027\u65F6\uFF0C\u4F1A\u4F7F\u7528 Steps \u7684 <code>current</code> \u6765\u81EA\u52A8\u6307\u5B9A\u72B6\u6001\u3002\u53EF\u9009\uFF1A<code>wait</code> <code>process</code> <code>finish</code> <code>error</code></td><td>string</td><td>wait</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string | slot</td><td>-</td><td></td></tr><tr><td>subTitle</td><td>\u5B50\u6807\u9898</td><td>string | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>disabled</td><td>\u7981\u7528\u70B9\u51FB</td><td>boolean</td><td>false</td><td>1.5.0</td></tr></tbody></table>",8),Ut={expose:[],setup(n){return(i,s)=>(d(),c("div",Bt,[Yt]))}};var Et=Ut;const W={cn:`# Steps

  \u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002

  ## \u4F55\u65F6\u4F7F\u7528

  \u5F53\u4EFB\u52A1\u590D\u6742\u6216\u8005\u5B58\u5728\u5148\u540E\u5173\u7CFB\u65F6\uFF0C\u5C06\u5176\u5206\u89E3\u6210\u4E00\u7CFB\u5217\u6B65\u9AA4\uFF0C\u4ECE\u800C\u7B80\u5316\u4EFB\u52A1\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Steps

  'Steps' is a navigation bar that guides users through the steps of a task.

  # When To Use

  When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.
  ## Examples 
  `};var At={category:"Components",subtitle:"\u6B65\u9AA4\u6761",type:"Navigation",cols:1,title:"Steps",render(){return t("div",null,[t(e("Md"),{cn:W.cn,us:W.us},null),t(e("demo-sort"),{cols:1},{default:()=>[t(e("demo-container"),{api:K,code:Q},{default:()=>[t(J,null,null)]}),t(e("demo-container"),{api:mt,code:_t},{default:()=>[t(ht,null,null)]}),t(e("demo-container"),{api:ot,code:at},{default:()=>[t(x,null,null)]}),t(e("demo-container"),{api:Tt,code:$t},{default:()=>[t(y,null,null)]}),t(e("demo-container"),{api:It,code:zt},{default:()=>[t(Ft,null,null)]}),t(e("demo-container"),{api:Pt,code:wt},{default:()=>[t(xt,null,null)]}),t(e("demo-container"),{api:st,code:it},{default:()=>[t(nt,null,null)]}),t(e("demo-container"),{api:pt,code:lt},{default:()=>[t(ct,null,null)]}),t(e("demo-container"),{api:Z,code:tt},{default:()=>[t(X,null,null)]}),t(e("demo-container"),{api:Dt,code:Nt},{default:()=>[t(I,null,null)]}),t(e("demo-container"),{api:Ot,code:Lt},{default:()=>[t(z,null,null)]})]}),t(e("api"),null,{default:()=>[t(Et,null,null)]})])}};export{At as default};

import{a as f}from"./main.f0d1f01d.js";import{d as x,Y as a,bw as s,bx as d,by as u,b as t,bG as Y,bH as w,bz as o,bI as T,D as p,k as g,c7 as L,bO as S}from"./vendor.846be9ce.js";var v=x({setup(){return{confirm:c=>{console.log(c),f.success("Click on Yes")},cancel:c=>{console.log(c),f.error("Click on No")}}}});const B=t("a",{href:"#"},"Delete",-1);function W(n,r,c,h,b,m){const i=a("a-popconfirm");return s(),d(i,{title:"Are you sure delete this task?","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm,onCancel:n.cancel},{default:u(()=>[B]),_:1},8,["onConfirm","onCancel"])}v.render=W;var A=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
The basic example.
</us>
`,D=`<template>
  <a-popconfirm
    title="Are you sure delete this task?"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const confirm = (e: MouseEvent) => {
      console.log(e);
      message.success('Click on Yes');
    };

    const cancel = (e: MouseEvent) => {
      console.log(e);
      message.error('Click on No');
    };
    return {
      confirm,
      cancel,
    };
  },
});
<\/script>
`;const C={},R=t("a",{href:"#"},"Delete",-1);function I(n,r){const c=a("a-popconfirm");return s(),d(c,{title:"Are you sure\uFF1F","ok-text":"Yes","cancel-text":"No"},{default:u(()=>[R]),_:1})}C.render=I;var P=C,V=`<cn>
#### \u56FD\u9645\u5316
\u4F7F\u7528 \`okText\` \u548C \`cancelText\` \u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002
</cn>

<us>
#### Locale text
Set \`okText\` and \`cancelText\` props to customize the button's labels.
</us>
`,z=`<template>
  <a-popconfirm title="Are you sure\uFF1F" ok-text="Yes" cancel-text="No">
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
`;const _=x({setup(){return{buttonWidth:70,text:"Are you sure to delete this task?",confirm:()=>{f.info("Clicked on Yes.")}}}}),e=T();Y("data-v-fcb97faa");const M={id:"components-a-popconfirm-demo-placement"},O=p("TL"),q=p("Top"),E=p("TR"),Q=p("LT"),U=p("Left"),j=p("LB"),F=p("RT"),G=p("Right"),H=p("RB"),J=p("BL"),K=p("Bottom"),X=p("BR");w();const Z=e((n,r,c,h,b,m)=>{const i=a("a-button"),l=a("a-popconfirm");return s(),d("div",M,[t("div",{style:{marginLeft:`${n.buttonWidth}px`,whiteSpace:"nowrap"}},[t(l,{placement:"topLeft","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[O]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"top","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[q]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"topRight","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[E]),_:1})]),_:1},8,["onConfirm"])],4),t("div",{style:{width:`${n.buttonWidth}px`,float:"left"}},[t(l,{placement:"leftTop","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[Q]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"left","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[U]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"leftBottom","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[j]),_:1})]),_:1},8,["onConfirm"])],4),t("div",{style:{width:`${n.buttonWidth}px`,marginLeft:`${n.buttonWidth*4+24}px`}},[t(l,{placement:"rightTop","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[F]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"right","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[G]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"rightBottom","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[H]),_:1})]),_:1},8,["onConfirm"])],4),t("div",{style:{marginLeft:`${n.buttonWidth}px`,clear:"both",whiteSpace:"nowrap"}},[t(l,{placement:"bottomLeft","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[J]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"bottom","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[K]),_:1})]),_:1},8,["onConfirm"]),t(l,{placement:"bottomRight","ok-text":"Yes","cancel-text":"No",onConfirm:n.confirm},{title:e(()=>[t("p",null,o(n.text),1),t("p",null,o(n.text),1)]),default:e(()=>[t(i,null,{default:e(()=>[X]),_:1})]),_:1},8,["onConfirm"])],4)])});_.render=Z;_.__scopeId="data-v-fcb97faa";var tt=_,nt=`<cn>
#### \u4F4D\u7F6E
\u4F4D\u7F6E\u6709\u5341\u4E8C\u4E2A\u65B9\u5411\u3002\u5982\u9700\u7BAD\u5934\u6307\u5411\u76EE\u6807\u5143\u7D20\u4E2D\u5FC3\uFF0C\u53EF\u4EE5\u8BBE\u7F6E \`arrowPointAtCenter\`\u3002
</cn>

<us>
#### Placement
There are 12 \`placement\` options available. Use \`arrowPointAtCenter\` if you want arrow point at the center of target.
</us>
`,et=`<template>
  <div id="components-a-popconfirm-demo-placement">
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, whiteSpace: 'nowrap' }">
      <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>TL</a-button>
      </a-popconfirm>
      <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>Top</a-button>
      </a-popconfirm>
      <a-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>TR</a-button>
      </a-popconfirm>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, float: 'left' }">
      <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>LT</a-button>
      </a-popconfirm>
      <a-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>Left</a-button>
      </a-popconfirm>
      <a-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>LB</a-button>
      </a-popconfirm>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, marginLeft: \`\${buttonWidth * 4 + 24}px\` }">
      <a-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>RT</a-button>
      </a-popconfirm>
      <a-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>Right</a-button>
      </a-popconfirm>
      <a-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>RB</a-button>
      </a-popconfirm>
    </div>
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>BL</a-button>
      </a-popconfirm>
      <a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>Bottom</a-button>
      </a-popconfirm>
      <a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <a-button>BR</a-button>
      </a-popconfirm>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const buttonWidth = 70;

    const text = 'Are you sure to delete this task?';

    const confirm = () => {
      message.info('Clicked on Yes.');
    };
    return {
      buttonWidth,
      text,
      confirm,
    };
  },
});
<\/script>
<style scoped>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`,k=x({setup(){const n=g(!1),r=g(!0),c=()=>{n.value=!1,f.success("Next step.")};return{visible:n,condition:r,confirm:c,cancel:()=>{n.value=!1,f.error("Click on cancel.")},handleVisibleChange:m=>{if(!m){n.value=!1;return}console.log(r.value),r.value?c():n.value=!0}}}});const ot=t("a",{href:"#"},"Delete a task",-1),it=t("br",null,null,-1),lt=t("br",null,null,-1),at=p(" Whether directly execute\uFF1A ");function ct(n,r,c,h,b,m){const i=a("a-popconfirm"),l=a("a-checkbox");return s(),d("div",null,[t(i,{title:"Are you sure delete this task?",visible:n.visible,"ok-text":"Yes","cancel-text":"No",onVisibleChange:n.handleVisibleChange,onConfirm:n.confirm,onCancel:n.cancel},{default:u(()=>[ot]),_:1},8,["visible","onVisibleChange","onConfirm","onCancel"]),it,lt,at,t(l,{checked:n.condition,"onUpdate:checked":r[1]||(r[1]=N=>n.condition=N)},null,8,["checked"])])}k.render=ct;var rt=`<cn>
#### \u6761\u4EF6\u89E6\u53D1
\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u9700\u8981\u5F39\u51FA\u3002
</cn>

<us>
#### Conditional trigger
Make it pop up under some conditions.
</us>

\`\`\`vue
<template>
  <div>
    <a-popconfirm
      title="Are you sure delete this task?"
      :visible="visible"
      ok-text="Yes"
      cancel-text="No"
      @visibleChange="handleVisibleChange"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">Delete a task</a>
    </a-popconfirm>
    <br />
    <br />
    Whether directly execute\uFF1A<a-checkbox default-checked @change="changeCondition" />
  </div>
</template>
<script>
import { message } from '@fe6/water-pro';

export default {
  data() {
    return {
      visible: false,
      condition: true,
    };
  },
  methods: {
    changeCondition(e) {
      this.condition = e.target.checked;
    },
    confirm() {
      this.visible = false;
      message.success('Next step.');
    },
    cancel() {
      this.visible = false;
      message.error('Click on cancel.');
    },
    handleVisibleChange(visible) {
      if (!visible) {
        this.visible = false;
        return;
      }
      // Determining condition before show the popconfirm.
      console.log(this.condition);
      if (this.condition) {
        this.confirm(); // next step
      } else {
        this.visible = true;
      }
    },
  },
};
<\/script>
\`\`\`
`,pt=`<template>
  <div>
    <a-popconfirm
      title="Are you sure delete this task?"
      :visible="visible"
      ok-text="Yes"
      cancel-text="No"
      @visibleChange="handleVisibleChange"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">Delete a task</a>
    </a-popconfirm>
    <br />
    <br />
    Whether directly execute\uFF1A
    <a-checkbox v-model:checked="condition" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const condition = ref<boolean>(true);

    const confirm = () => {
      visible.value = false;
      message.success('Next step.');
    };

    const cancel = () => {
      visible.value = false;
      message.error('Click on cancel.');
    };

    const handleVisibleChange = (bool: boolean) => {
      if (!bool) {
        visible.value = false;
        return;
      }
      // Determining condition before show the popconfirm.
      console.log(condition.value);
      if (condition.value) {
        confirm(); // next step
      } else {
        visible.value = true;
      }
    };
    return {
      visible,
      condition,
      confirm,
      cancel,
      handleVisibleChange,
    };
  },
});
<\/script>
`,$=x({components:{QuestionCircleOutlined:L}});const st=t("a",{href:"#"},"Delete",-1);function dt(n,r,c,h,b,m){const i=a("question-circle-outlined"),l=a("a-popconfirm");return s(),d(l,{title:"Are you sure\uFF1F"},{icon:u(()=>[t(i,{style:{color:"red"}})]),default:u(()=>[st]),_:1})}$.render=dt;var mt=`<cn>
#### \u81EA\u5B9A\u4E49 Icon \u56FE\u6807
\u4F7F\u7528 \`icon\` \u81EA\u5B9A\u4E49\u63D0\u793A \`icon\`\u3002
</cn>

<us>
#### Customize icon
Set \`icon\` props to customize the icon.
</us>
`,ft=`<template>
  <a-popconfirm title="Are you sure\uFF1F">
    <template #icon><question-circle-outlined style="color: red" /></template>
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script lang="ts">
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    QuestionCircleOutlined,
  },
});
<\/script>
`;const ut={class:"markdown-body"},ht=S('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string|slot</td><td>\u53D6\u6D88</td><td></td></tr><tr><td>okText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string|slot</td><td>\u786E\u5B9A</td><td></td></tr><tr><td>okType</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>primary</td><td></td></tr><tr><td>title</td><td>\u786E\u8BA4\u6846\u7684\u63CF\u8FF0</td><td>string|slot</td><td>\u65E0</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u5F39\u51FA\u6C14\u6CE1 Icon \u56FE\u6807</td><td>vNode</td><td>&lt;Icon type=\u201Cexclamation-circle\u201D /&gt;</td><td></td></tr><tr><td>disabled</td><td>\u70B9\u51FB Popconfirm \u5B50\u5143\u7D20\u662F\u5426\u5F39\u51FA\u6C14\u6CE1\u786E\u8BA4\u6846</td><td>boolean</td><td>false</td><td>1.5.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03</td><td>function(e)</td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u7684\u56DE\u8C03</td><td>function(e)</td></tr><tr><td>visibleChange</td><td>\u663E\u793A\u9690\u85CF\u7684\u56DE\u8C03</td><td>function(visible)</td></tr></tbody></table><p>\u66F4\u591A\u5C5E\u6027\u8BF7\u53C2\u8003 <a href="/components/tooltip-cn/#API">Tooltip</a>\u3002</p><h2>\u6CE8\u610F</h2><p>\u8BF7\u786E\u4FDD <code>Popconfirm</code> \u7684\u5B50\u5143\u7D20\u80FD\u63A5\u53D7 <code>mouseenter</code>\u3001<code>mouseleave</code>\u3001<code>focus</code>\u3001<code>click</code> \u4E8B\u4EF6\u3002</p>',7),bt={expose:[],setup(n){return(r,c)=>(s(),d("div",ut,[ht]))}};var xt=bt;const y={cn:`# Popconfirm

  \u70B9\u51FB\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u786E\u8BA4\u6846\u3002

  ## \u4F55\u65F6\u4F7F\u7528

  \u76EE\u6807\u5143\u7D20\u7684\u64CD\u4F5C\u9700\u8981\u7528\u6237\u8FDB\u4E00\u6B65\u7684\u786E\u8BA4\u65F6\uFF0C\u5728\u76EE\u6807\u5143\u7D20\u9644\u8FD1\u5F39\u51FA\u6D6E\u5C42\u63D0\u793A\uFF0C\u8BE2\u95EE\u7528\u6237\u3002

\u548C 'confirm' \u5F39\u51FA\u7684\u5168\u5C4F\u5C45\u4E2D\u6A21\u6001\u5BF9\u8BDD\u6846\u76F8\u6BD4\uFF0C\u4EA4\u4E92\u5F62\u5F0F\u66F4\u8F7B\u91CF\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Popconfirm

  A simple and compact confirmation dialog of an action.

  # When To Use

  A simple and compact dialog used for asking for user confirmation.

  The difference with the 'confirm' modal dialog is that it's more lightweight than the static popped full-screen confirm modal.
  ## Examples
  `};var vt={category:"Components",subtitle:"\u6C14\u6CE1\u786E\u8BA4\u6846",type:"Feedback",title:"Popconfirm",render(){return t("div",null,[t(a("Md"),{cn:y.cn,us:y.us},null),t(a("demo-sort"),null,{default:()=>[t(a("demo-container"),{api:A,code:D},{default:()=>[t(v,null,null)]}),t(a("demo-container"),{api:V,code:z},{default:()=>[t(P,null,null)]}),t(a("demo-container"),{api:nt,code:et},{default:()=>[t(tt,null,null)]}),t(a("demo-container"),{api:rt,code:pt},{default:()=>[t(k,null,null)]}),t(a("demo-container"),{api:mt,code:ft},{default:()=>[t($,null,null)]})]}),t(a("api"),null,{default:()=>[t(xt,null,null)]})])}};export{vt as default};

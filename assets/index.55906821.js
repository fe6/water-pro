import{b as d,A as W}from"./main.f0d1f01d.js";import{d as l,Y as i,bw as s,bx as r,by as c,D as a,h as g,bM as L,cg as B,ch as A,ci as U,cj as D,b as t,bO as z}from"./vendor.846be9ce.js";var _=l({setup(){return{openNotification:()=>{d.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:()=>{console.log("Notification Clicked!")}})}}}});const j=a("Open the notification box");function E(o,n,p,f,u,m){const e=i("a-button");return s(),r(e,{type:"primary",onClick:o.openNotification},{default:c(()=>[j]),_:1},8,["onClick"])}_.render=E;var M=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C4.5 \u79D2\u540E\u81EA\u52A8\u5173\u95ED\u3002
</cn>

<us>
#### Basic
The simplest usage that close the notification box after 4.5s.
</us>
`,V=`<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };

    return {
      openNotification,
    };
  },
});
<\/script>
`,y=l({setup(){return{openNotification:()=>{d.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",icon:g(L,{style:"color: #108ee9"})})}}}});const P=a("Open the notification box");function F(o,n,p,f,u,m){const e=i("a-button");return s(),r(e,{type:"primary",onClick:o.openNotification},{default:c(()=>[P]),_:1},8,["onClick"])}y.render=F;var H=`<cn>
#### \u81EA\u5B9A\u4E49\u56FE\u6807
\u56FE\u6807\u53EF\u4EE5\u88AB\u81EA\u5B9A\u4E49\u3002
</cn>

<us>
#### Customized Icon
The icon can be customized to any vue node or (h) => vue node.
</us>
`,q=`<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: h(SmileOutlined, { style: 'color: #108ee9' }),
      });
    };

    return {
      openNotification,
    };
  },
});
<\/script>
`;const N=l({setup(){return{openNotification:()=>{d.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{width:"600px",marginLeft:`${335-600}px`}})}}}}),Y=a("Open the notification box");function G(o,n,p,f,u,m){const e=i("a-button");return s(),r(e,{type:"primary",onClick:o.openNotification},{default:c(()=>[Y]),_:1},8,["onClick"])}N.render=G;var J=N,K=`<cn>
#### \u81EA\u5B9A\u4E49\u6837\u5F0F
\u4F7F\u7528 style \u548C className \u6765\u5B9A\u4E49\u6837\u5F0F\u3002
</cn>

<us>
#### Customized style
The style and className are available to customize Notification.
</us>
`,Q=`<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script>
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        style: {
          width: '600px',
          marginLeft: \`\${335 - 600}px\`,
        },
      });
    };
    return {
      openNotification,
    };
  },
});
<\/script>
`,C=l({setup(){return{openNotification:()=>{d.open({message:"Notification Title",description:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:0})}}}});const X=a("Open the notification box");function Z(o,n,p,f,u,m){const e=i("a-button");return s(),r(e,{type:"primary",onClick:o.openNotification},{default:c(()=>[X]),_:1},8,["onClick"])}C.render=Z;var tt=`<cn>
#### \u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6
\u81EA\u5B9A\u4E49\u901A\u77E5\u6846\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u9ED8\u8BA4\`4.5s\`\uFF0C\u53D6\u6D88\u81EA\u52A8\u5173\u95ED\u53EA\u8981\u5C06\u8BE5\u503C\u8BBE\u4E3A \`0\` \u5373\u53EF\u3002
</cn>

<us>
#### Duration after which the notification box is closed
\`Duration\` can be used to specify how long the notification stays open. After the duration time elapses,
the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,
the notification box will never close automatically.
</us>
`,nt=`<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
      });
    };

    return {
      openNotification,
    };
  },
});
<\/script>
`,v=l({components:{RadiusUpleftOutlined:B,RadiusUprightOutlined:A,RadiusBottomleftOutlined:U,RadiusBottomrightOutlined:D},setup(){return{openNotification:n=>{d.open({message:`Notification ${n}`,description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",placement:n})}}}});const ot=a(" topLeft "),it=a(" topRight "),et=a(" bottomLeft "),ct=a(" bottomRight ");function at(o,n,p,f,u,m){const e=i("radius-upleft-outlined"),h=i("a-button"),I=i("radius-upright-outlined"),O=i("a-divider"),R=i("radius-bottomleft-outlined"),S=i("radius-bottomright-outlined");return s(),r("div",null,[t(h,{type:"primary",onClick:n[1]||(n[1]=b=>o.openNotification("topLeft"))},{default:c(()=>[t(e),ot]),_:1}),t(h,{type:"primary",onClick:n[2]||(n[2]=b=>o.openNotification("topRight"))},{default:c(()=>[t(I),it]),_:1}),t(O),t(h,{type:"primary",onClick:n[3]||(n[3]=b=>o.openNotification("bottomLeft"))},{default:c(()=>[t(R),et]),_:1}),t(h,{type:"primary",onClick:n[4]||(n[4]=b=>o.openNotification("bottomRight"))},{default:c(()=>[t(S),ct]),_:1})])}v.render=at;var dt=`<cn>
#### \u4F4D\u7F6E
\u53EF\u4EE5\u8BBE\u7F6E\u901A\u77E5\u4ECE\u53F3\u4E0A\u89D2\u3001\u53F3\u4E0B\u89D2\u3001\u5DE6\u4E0B\u89D2\u3001\u5DE6\u4E0A\u89D2\u5F39\u51FA\u3002
</cn>

<us>
#### Placement
A notification box can pop up from \`topRight\` or \`bottomRight\` or \`bottomLeft\` or \`topLeft\`.
</us>
`,st=`<template>
  <div>
    <a-button type="primary" @click="openNotification('topLeft')">
      <radius-upleft-outlined />
      topLeft
    </a-button>
    <a-button type="primary" @click="openNotification('topRight')">
      <radius-upright-outlined />
      topRight
    </a-button>
    <a-divider />
    <a-button type="primary" @click="openNotification('bottomLeft')">
      <radius-bottomleft-outlined />
      bottomLeft
    </a-button>
    <a-button type="primary" @click="openNotification('bottomRight')">
      <radius-bottomright-outlined />
      bottomRight
    </a-button>
  </div>
</template>
<script lang="ts">
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  components: {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
  },
  setup() {
    const openNotification = (placement: string) => {
      notification.open({
        message: \`Notification \${placement}\`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    };
    return {
      openNotification,
    };
  },
});
<\/script>
`;const rt=()=>{console.log("Notification was closed. Either the close button was clicked or duration time elapsed.")};var $=l({setup(){return{openNotification:()=>{const n=`open${Date.now()}`;d.open({message:"Notification Title",description:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',btn:g(W,{type:"primary",size:"small",onClick:()=>d.close(n)},"Confirm"),key:n,onClose:rt})}}}});const pt=a("Open the notification box");function lt(o,n,p,f,u,m){const e=i("a-button");return s(),r(e,{type:"primary",onClick:o.openNotification},{default:c(()=>[pt]),_:1},8,["onClick"])}$.render=lt;var ft=`<cn>
#### \u81EA\u5B9A\u4E49\u6309\u94AE
\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u7684\u6837\u5F0F\u548C\u6587\u5B57\u3002
</cn>

<us>
#### Custom close button
To customize the style or font of the close button.
</us>
`,ut=`<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { h, defineComponent } from 'vue';
import {Button} from '@fe6/water-pro';
import { notification } from '@fe6/water-pro';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default defineComponent({
  setup() {
    const openNotification = () => {
      const key = \`open\${Date.now()}\`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h(
          Button,
          {
            type: 'primary',
            size: 'small',
            onClick: () => notification.close(key),
          },
          'Confirm',
        ),
        key,
        onClose: close,
      });
    };

    return {
      openNotification,
    };
  },
});
<\/script>
`,k=l({setup(){return{openNotificationWithIcon:n=>{d[n]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}}}});const mt=a("Success"),ht=a("Info"),bt=a("Warning"),gt=a("Error");function _t(o,n,p,f,u,m){const e=i("a-button");return s(),r("div",null,[t(e,{onClick:n[1]||(n[1]=()=>o.openNotificationWithIcon("success"))},{default:c(()=>[mt]),_:1}),t(e,{onClick:n[2]||(n[2]=()=>o.openNotificationWithIcon("info"))},{default:c(()=>[ht]),_:1}),t(e,{onClick:n[3]||(n[3]=()=>o.openNotificationWithIcon("warning"))},{default:c(()=>[bt]),_:1}),t(e,{onClick:n[4]||(n[4]=()=>o.openNotificationWithIcon("error"))},{default:c(()=>[gt]),_:1})])}k.render=_t;var yt=`<cn>
#### \u5E26\u6709\u56FE\u6807\u7684\u901A\u77E5\u63D0\u9192\u6846
\u901A\u77E5\u63D0\u9192\u6846\u5DE6\u4FA7\u6709\u56FE\u6807\u3002
</cn>

<us>
#### Notification with icon
A notification box with a icon at the left side.
</us>
`,Nt=`<template>
  <div>
    <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
    <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
    <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
    <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const openNotificationWithIcon = (type: string) => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };

    return {
      openNotificationWithIcon,
    };
  },
});
<\/script>
`;const T="updatable";var w=l({setup(){return{openNotification:()=>{d.open({key:T,message:"Notification Title",description:"description."}),setTimeout(()=>{d.open({key:T,message:"New Title",description:"New description."})},1e3)}}}});const Ct=a("Open the notification box");function vt(o,n,p,f,u,m){const e=i("a-button");return s(),r(e,{type:"primary",onClick:o.openNotification},{default:c(()=>[Ct]),_:1},8,["onClick"])}w.render=vt;var $t=`<cn>
#### \u66F4\u65B0\u6D88\u606F\u5185\u5BB9
\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 key \u6765\u66F4\u65B0\u5185\u5BB9\u3002
</cn>

<us>
#### Update Message Content
Update content with unique key.
</us>
`,kt=`<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { notification } from '@fe6/water-pro';

const key = 'updatable';
export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        notification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    };
    return {
      openNotification,
    };
  },
});
<\/script>
`;const Tt={class:"markdown-body"},wt=z(`<h2>\u4F55\u65F6\u4F7F\u7528</h2><p>\u5728\u7CFB\u7EDF\u56DB\u4E2A\u89D2\u663E\u793A\u901A\u77E5\u63D0\u9192\u4FE1\u606F\u3002\u7ECF\u5E38\u7528\u4E8E\u4EE5\u4E0B\u60C5\u51B5\uFF1A</p><ul><li>\u8F83\u4E3A\u590D\u6742\u7684\u901A\u77E5\u5185\u5BB9\u3002</li><li>\u5E26\u6709\u4EA4\u4E92\u7684\u901A\u77E5\uFF0C\u7ED9\u51FA\u7528\u6237\u4E0B\u4E00\u6B65\u7684\u884C\u52A8\u70B9\u3002</li><li>\u7CFB\u7EDF\u4E3B\u52A8\u63A8\u9001\u3002</li></ul><h2>API</h2><ul><li><code>notification.success(config)</code></li><li><code>notification.error(config)</code></li><li><code>notification.info(config)</code></li><li><code>notification.warning(config)</code></li><li><code>notification.warn(config)</code></li><li><code>notification.open(config)</code></li><li><code>notification.close(key: String)</code></li><li><code>notification.destroy()</code></li></ul><p>config \u53C2\u6570\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>btn</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE</td><td>vueNode |function(h)</td><td>-</td><td></td></tr><tr><td>bottom</td><td>\u6D88\u606F\u4ECE\u5E95\u90E8\u5F39\u51FA\u65F6\uFF0C\u8DDD\u79BB\u5E95\u90E8\u7684\u4F4D\u7F6E\uFF0C\u5355\u4F4D\u50CF\u7D20\u3002</td><td>string</td><td><code>24px</code></td><td>1.5.0</td></tr><tr><td>class</td><td>\u81EA\u5B9A\u4E49 CSS class</td><td>string</td><td>-</td><td></td></tr><tr><td>description</td><td>\u901A\u77E5\u63D0\u9192\u5185\u5BB9\uFF0C\u5FC5\u9009</td><td>string |vueNode |function(h)</td><td>-</td><td></td></tr><tr><td>duration</td><td>\u9ED8\u8BA4 4.5 \u79D2\u540E\u81EA\u52A8\u5173\u95ED\uFF0C\u914D\u7F6E\u4E3A null \u5219\u4E0D\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>4.5</td><td></td></tr><tr><td>getContainer</td><td>\u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E</td><td>() =&gt; HTMLNode</td><td>() =&gt; document.body</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>vueNode |function(h)</td><td>-</td><td></td></tr><tr><td>key</td><td>\u5F53\u524D\u901A\u77E5\u552F\u4E00\u6807\u5FD7</td><td>string</td><td>-</td><td></td></tr><tr><td>message</td><td>\u901A\u77E5\u63D0\u9192\u6807\u9898\uFF0C\u5FC5\u9009</td><td>string |vueNode |function(h)</td><td>-</td><td></td></tr><tr><td>placement</td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009 <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code></td><td>string</td><td>topRight</td><td></td></tr><tr><td>style</td><td>\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F</td><td>Object | string</td><td>-</td><td></td></tr><tr><td>onClose</td><td>\u70B9\u51FB\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>onClick</td><td>\u70B9\u51FB\u901A\u77E5\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>top</td><td>\u6D88\u606F\u4ECE\u9876\u90E8\u5F39\u51FA\u65F6\uFF0C\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E\uFF0C\u5355\u4F4D\u50CF\u7D20\u3002</td><td>string</td><td><code>24px</code></td><td>1.5.0</td></tr><tr><td>closeIcon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807</td><td>VNode | function(h)</td><td>-</td><td>1.5.0</td></tr></tbody></table><p>\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5168\u5C40\u914D\u7F6E\u65B9\u6CD5\uFF0C\u5728\u8C03\u7528\u524D\u63D0\u524D\u914D\u7F6E\uFF0C\u5168\u5C40\u4E00\u6B21\u751F\u6548\u3002</p><ul><li><code>notification.config(options)</code></li></ul><pre><code class="language-js">notification.config({
  placement: &#39;bottomRight&#39;,
  bottom: &#39;50px&#39;,
  duration: 3,
});
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>bottom</td><td>\u6D88\u606F\u4ECE\u5E95\u90E8\u5F39\u51FA\u65F6\uFF0C\u8DDD\u79BB\u5E95\u90E8\u7684\u4F4D\u7F6E\uFF0C\u5355\u4F4D\u50CF\u7D20\u3002</td><td>string</td><td><code>24px</code></td><td></td></tr><tr><td>duration</td><td>\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2</td><td>number</td><td>4.5</td><td></td></tr><tr><td>getContainer</td><td>\u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E</td><td>() =&gt; HTMLNode</td><td>() =&gt; document.body</td><td></td></tr><tr><td>placement</td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009 <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code></td><td>string</td><td>topRight</td><td></td></tr><tr><td>top</td><td>\u6D88\u606F\u4ECE\u9876\u90E8\u5F39\u51FA\u65F6\uFF0C\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E\uFF0C\u5355\u4F4D\u50CF\u7D20\u3002</td><td>string</td><td><code>24px</code></td><td></td></tr><tr><td>closeIcon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807</td><td>VNode | function(h)</td><td>-</td><td>1.5.0</td></tr></tbody></table>`,11),xt={expose:[],setup(o){return(n,p)=>(s(),r("div",Tt,[wt]))}};var It=xt;const x={cn:`# \u901A\u77E5\u63D0\u9192\u6846
\u5168\u5C40\u5C55\u793A\u901A\u77E5\u63D0\u9192\u4FE1\u606F\u3002
## \u4F55\u65F6\u4F7F\u7528
\u5728\u7CFB\u7EDF\u56DB\u4E2A\u89D2\u663E\u793A\u901A\u77E5\u63D0\u9192\u4FE1\u606F\u3002\u7ECF\u5E38\u7528\u4E8E\u4EE5\u4E0B\u60C5\u51B5\uFF1A
- \u8F83\u4E3A\u590D\u6742\u7684\u901A\u77E5\u5185\u5BB9\u3002
- \u5E26\u6709\u4EA4\u4E92\u7684\u901A\u77E5\uFF0C\u7ED9\u51FA\u7528\u6237\u4E0B\u4E00\u6B65\u7684\u884C\u52A8\u70B9\u3002
- \u7CFB\u7EDF\u4E3B\u52A8\u63A8\u9001\u3002

## \u4EE3\u7801\u6F14\u793A`,us:`# Notification
Display a notification message globally.
## When To Use
To display a notification message at any of the four corners of the viewport. Typically it can be
used in the following cases:
- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details
  about upcoming steps the user may have to follow.
- A notification that is pushed by the application.
## Examples `};var St={category:"Components",type:"Feedback",noinstant:!0,title:"Notification",subtitle:"\u901A\u77E5\u63D0\u9192\u6846",render(){return t("div",null,[t(i("Md"),{cn:x.cn,us:x.us},null),t(i("demo-sort"),{cols:1},{default:()=>[t(i("demo-container"),{api:M,code:V},{default:()=>[t(_,null,null)]}),t(i("demo-container"),{api:H,code:q},{default:()=>[t(y,null,null)]}),t(i("demo-container"),{api:K,code:Q},{default:()=>[t(J,null,null)]}),t(i("demo-container"),{api:tt,code:nt},{default:()=>[t(C,null,null)]}),t(i("demo-container"),{api:dt,code:st},{default:()=>[t(v,null,null)]}),t(i("demo-container"),{api:ft,code:ut},{default:()=>[t($,null,null)]}),t(i("demo-container"),{api:yt,code:Nt},{default:()=>[t(k,null,null)]}),t(i("demo-container"),{api:$t,code:kt},{default:()=>[t(w,null,null)]})]}),t(i("api"),null,{default:()=>[t(It,null,null)]})])}};export{St as default};

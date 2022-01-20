import{a as o}from"./main.f0d1f01d.js";import{d as u,Y as t,bw as c,bx as l,by as i,D as r,b as e,bO as k}from"./vendor.846be9ce.js";var f=u({setup(){return{info:()=>{o.info("This is a normal message")}}}});const w=r("Display normal message");function T(n,a,d,p,m,g){const s=t("a-button");return c(),l(s,{type:"primary",onClick:n.info},{default:i(()=>[w]),_:1},8,["onClick"])}f.render=T;var x=`<cn>
#### \u666E\u901A\u63D0\u793A
\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002
</cn>

<us>
#### Normal prompt
Normal message for information.
</us>
`,S=`<template>
  <a-button type="primary" @click="info">Display normal message</a-button>
</template>
<script lang="ts">
import { message } from '@fe6/water-pro';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      message.info('This is a normal message');
    };
    return {
      info,
    };
  },
});
<\/script>
`,h=u({setup(){return{success:()=>{o.success("This is a prompt message for success, and it will disappear in 10 seconds",10)}}}});const M=r("Customized display duration");function N(n,a,d,p,m,g){const s=t("a-button");return c(),l(s,{onClick:n.success},{default:i(()=>[M]),_:1},8,["onClick"])}h.render=N;var D=`<cn>
#### \u4FEE\u6539\u5EF6\u65F6
\u81EA\u5B9A\u4E49\u65F6\u957F \`10s\`\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A \`3s\`\u3002
</cn>

<us>
#### Customize duration
Customize message display duration from default \`3s\` to \`10s\`.
</us>
`,L=`<template>
  <a-button @click="success">Customized display duration</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const success = () => {
      message.success(
        'This is a prompt message for success, and it will disappear in 10 seconds',
        10,
      );
    };
    return {
      success,
    };
  },
});
<\/script>

`,_=u({setup(){return{success:()=>{const a=o.loading("Action in progress..",0);setTimeout(a,2500)}}}});const V=r("Display a loading indicator");function A(n,a,d,p,m,g){const s=t("a-button");return c(),l(s,{onClick:n.success},{default:i(()=>[V]),_:1},8,["onClick"])}_.render=A;var O=`<cn>
#### \u52A0\u8F7D\u4E2D
\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002
</cn>

<us>
#### Message with loading indicator
Display a global loading indicator, which is dismissed by itself asynchronously.
</us>
`,U=`<template>
  <a-button @click="success">Display a loading indicator</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const success = () => {
      const hide = message.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    };
    return {
      success,
    };
  },
});
<\/script>
`,b=u({setup(){return{success:()=>{o.success("This is a success message")},error:()=>{o.error("This is an error message")},warning:()=>{o.warning("This is a warning message")}}}});const z=r("Success"),B=r("Error"),E=r("Warning");function P(n,a,d,p,m,g){const s=t("a-button");return c(),l("div",null,[e(s,{onClick:n.success},{default:i(()=>[z]),_:1},8,["onClick"]),e(s,{onClick:n.error},{default:i(()=>[B]),_:1},8,["onClick"]),e(s,{onClick:n.warning},{default:i(()=>[E]),_:1},8,["onClick"])])}b.render=P;var j=`<cn>
#### \u5176\u4ED6\u63D0\u793A\u7C7B\u578B
\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002
</cn>

<us>
#### Other types of message
Messages of success, error and warning types.
</us>
`,q=`<template>
  <div>
    <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const success = () => {
      message.success('This is a success message');
    };
    const error = () => {
      message.error('This is an error message');
    };
    const warning = () => {
      message.warning('This is a warning message');
    };
    return {
      success,
      error,
      warning,
    };
  },
});
<\/script>
`,C=u({setup(){return{success:()=>{o.loading("Action in progress..",2.5).then(()=>o.success("Loading finished",2.5),()=>{}).then(()=>o.info("Loading finished is finished",2.5))}}}});const F=r("Display a sequence of message");function W(n,a,d,p,m,g){const s=t("a-button");return c(),l(s,{onClick:n.success},{default:i(()=>[F]),_:1},8,["onClick"])}C.render=W;var H=`<cn>
#### Promise \u63A5\u53E3
\u53EF\u4EE5\u901A\u8FC7 then \u63A5\u53E3\u5728\u5173\u95ED\u540E\u8FD0\u884C callback \u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u5728\u6BCF\u4E2A message \u5C06\u8981\u7ED3\u675F\u65F6\u901A\u8FC7 then \u663E\u793A\u65B0\u7684 message \u3002
</cn>

<us>
#### Promise interface
\`message\` provides promise interface for \`onClose\`. The above example will display a new message when old message is about to finish.
</us>
`,I=`<template>
  <a-button @click="success">Display a sequence of message</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const success = () => {
      message
        .loading('Action in progress..', 2.5)
        .then(
          () => message.success('Loading finished', 2.5),
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {},
        )
        .then(() => message.info('Loading finished is finished', 2.5));
    };
    return {
      success,
    };
  },
});
<\/script>
`;const y="updatable";var $=u({setup(){return{openMessage:()=>{o.loading({content:"Loading...",key:y}),setTimeout(()=>{o.success({content:"Loaded!",key:y,duration:2})},1e3)}}}});const Y=r("Open the message box");function G(n,a,d,p,m,g){const s=t("a-button");return c(),l(s,{type:"primary",onClick:n.openMessage},{default:i(()=>[Y]),_:1},8,["onClick"])}$.render=G;var J=`<cn>
#### \u66F4\u65B0\u6D88\u606F\u5185\u5BB9
\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 \`key\` \u6765\u66F4\u65B0\u5185\u5BB9\u3002
</cn>

<us>
#### Update Message Content
Update message content with unique \`key\`.
</us>
`,K=`<template>
  <a-button type="primary" @click="openMessage">Open the message box</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

const key = 'updatable';
export default defineComponent({
  setup() {
    const openMessage = () => {
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    };
    return {
      openMessage,
    };
  },
});
<\/script>
`;const Q={class:"markdown-body"},R=k(`<h2>API</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li><code>message.success(content, [duration], onClose)</code></li><li><code>message.error(content, [duration], onClose)</code></li><li><code>message.info(content, [duration], onClose)</code></li><li><code>message.warning(content, [duration], onClose)</code></li><li><code>message.warn(content, [duration], onClose)</code> // alias of warning</li><li><code>message.loading(content, [duration], onClose)</code></li></ul><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>content</td><td>\u63D0\u793A\u5185\u5BB9</td><td>string| VNode |(h) =&gt; VNode</td><td>-</td></tr><tr><td>duration</td><td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\u3002</td><td>number</td><td>3</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function</td><td>-</td></tr></tbody></table><p>\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B promise \u63A5\u53E3</p><ul><li><code>message[level](content, [duration]).then(afterClose)</code></li><li><code>message[level](content, [duration], onClose).then(afterClose)</code></li></ul><p>\u5176\u4E2D<code>message[level]</code> \u662F\u7EC4\u4EF6\u5DF2\u7ECF\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\u3002<code>then</code> \u63A5\u53E3\u8FD4\u56DE\u503C\u662F Promise \u3002</p><p>\u4E5F\u53EF\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A</p><ul><li><code>message.open(config)</code></li><li><code>message.success(config)</code></li><li><code>message.error(config)</code></li><li><code>message.info(config)</code></li><li><code>message.warning(config)</code></li><li><code>message.warn(config)</code> // alias of warning</li><li><code>message.loading(config)</code></li></ul><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>content</td><td>\u63D0\u793A\u5185\u5BB9</td><td>string| VNode |(h) =&gt; VNode</td><td>-</td><td></td></tr><tr><td>duration</td><td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\u3002</td><td>number</td><td>3</td><td></td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>string| VNode |(h) =&gt; VNode</td><td>-</td><td></td></tr><tr><td>key</td><td>\u5F53\u524D\u63D0\u793A\u7684\u552F\u4E00\u6807\u5FD7</td><td>string|number</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3>\u5168\u5C40\u65B9\u6CD5</h3><p>\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A</p><ul><li><code>message.config(options)</code></li><li><code>message.destroy()</code></li></ul><h4>message.config</h4><pre><code class="language-js">message.config({
  top: \`100px\`,
  duration: 2,
  maxCount: 3,
});
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>duration</td><td>\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2</td><td>number</td><td>3</td></tr><tr><td>getContainer</td><td>\u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E</td><td>() =&gt; HTMLElement</td><td>() =&gt; document.body</td></tr><tr><td>maxCount</td><td>\u6700\u5927\u663E\u793A\u6570, \u8D85\u8FC7\u9650\u5236\u65F6\uFF0C\u6700\u65E9\u7684\u6D88\u606F\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>-</td></tr><tr><td>top</td><td>\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E</td><td>string</td><td><code>24px</code></td></tr></tbody></table>`,16),X={expose:[],setup(n){return(a,d)=>(c(),l("div",Q,[R]))}};var Z=X;const v={cn:`# \u5168\u5C40\u63D0\u793A
\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002
- \u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002

## \u4EE3\u7801\u6F14\u793A`,us:`# Message
Display global messages as feedback in response to user operations.
## When To Use
- To provide feedback such as success, warning, error etc.
- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.
## Examples `};var tn={category:"Components",subtitle:"\u5168\u5C40\u63D0\u793A",type:"Feedback",noinstant:!0,title:"Message",render(){return e("div",null,[e(t("Md"),{cn:v.cn,us:v.us},null),e(t("demo-sort"),null,{default:()=>[e(t("demo-container"),{api:x,code:S},{default:()=>[e(f,null,null)]}),e(t("demo-container"),{api:D,code:L},{default:()=>[e(h,null,null)]}),e(t("demo-container"),{api:O,code:U},{default:()=>[e(_,null,null)]}),e(t("demo-container"),{api:j,code:q},{default:()=>[e(b,null,null)]}),e(t("demo-container"),{api:H,code:I},{default:()=>[e(C,null,null)]}),e(t("demo-container"),{api:J,code:K},{default:()=>[e($,null,null)]})]}),e(t("api"),null,{default:()=>[e(Z,null,null)]})])}};export{tn as default};

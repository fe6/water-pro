import{d as m,bP as h,Y as r,bw as c,bx as i,b as t,by as a,F as v,D as u,k as y,bz as C,bO as V}from"./vendor.846be9ce.js";var L=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u5934\u50CF\u6709\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u4E24\u79CD\u5F62\u72B6\u53EF\u9009\u3002
</cn>

<us>
#### basic
Three sizes and two shapes are available.
</us>
`,U=m({components:{UserOutlined:h}});const k=t("br",null,null,-1);function q(o,l,d,s,f,g){const e=r("UserOutlined"),n=r("a-avatar");return c(),i(v,null,[t(n,{size:64},{icon:a(()=>[t(e)]),_:1}),t(n,{size:"large"},{icon:a(()=>[t(e)]),_:1}),t(n,null,{icon:a(()=>[t(e)]),_:1}),t(n,{size:"small"},{icon:a(()=>[t(e)]),_:1}),k,t(n,{shape:"square",size:64},{icon:a(()=>[t(e)]),_:1}),t(n,{shape:"square",size:"large"},{icon:a(()=>[t(e)]),_:1}),t(n,{shape:"square"},{icon:a(()=>[t(e)]),_:1}),t(n,{shape:"square",size:"small"},{icon:a(()=>[t(e)]),_:1})],64)}U.render=q;var S=`<template>
  <a-avatar :size="64">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar size="large">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar>
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar size="small">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <br />
  <a-avatar shape="square" :size="64">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar shape="square" size="large">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar shape="square">
    <template #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar shape="square" size="small">
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
  },
});
<\/script>
`,A=`<cn>
#### \u5E26\u5FBD\u6807\u7684\u5934\u50CF
\u901A\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3002
</cn>

<us>
#### With Badge
Usually used for reminders and notifications.
</us>
`,x=m({components:{UserOutlined:h}});const T={style:{"margin-right":"24px"}};function w(o,l,d,s,f,g){const e=r("UserOutlined"),n=r("a-avatar"),b=r("a-badge");return c(),i(v,null,[t("span",T,[t(b,{count:1},{default:a(()=>[t(n,{shape:"square"},{icon:a(()=>[t(e)]),_:1})]),_:1})]),t("span",null,[t(b,{dot:""},{default:a(()=>[t(n,{shape:"square"},{icon:a(()=>[t(e)]),_:1})]),_:1})])],64)}x.render=w;var D=`<template>
  <span style="margin-right: 24px">
    <a-badge :count="1">
      <a-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-badge>
  </span>
  <span>
    <a-badge dot>
      <a-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-badge>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
  },
});
<\/script>

<style>
#components-avatar-demo-badge .ant-avatar {
  margin-top: 0;
  margin-right: 0;
}
</style>
`,E=`<cn>
#### \u7C7B\u578B
\u652F\u6301\u4E09\u79CD\u7C7B\u578B\uFF1A\u56FE\u7247\u3001Icon \u4EE5\u53CA\u5B57\u7B26\uFF0C\u5176\u4E2D Icon \u548C\u5B57\u7B26\u578B\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272\u53CA\u80CC\u666F\u8272\u3002
</cn>

<us>
#### Type
Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</us>
`,O=m({components:{UserOutlined:h}});const I=u("U"),j=u("USER"),B=u("U");function N(o,l,d,s,f,g){const e=r("UserOutlined"),n=r("a-avatar");return c(),i(v,null,[t(n,null,{icon:a(()=>[t(e)]),_:1}),t(n,null,{default:a(()=>[I]),_:1}),t(n,null,{default:a(()=>[j]),_:1}),t(n,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),t(n,{style:{color:"#f56a00",backgroundcolor:"#fde3cf"}},{default:a(()=>[B]),_:1}),t(n,{style:{backgroundcolor:"#87d068"}},{icon:a(()=>[t(e)]),_:1})],64)}O.render=N;var F=`<template>
  <a-avatar>
    <template #icon>
      <UserOutlined />
    </template>
  </a-avatar>
  <a-avatar>U</a-avatar>
  <a-avatar>USER</a-avatar>
  <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  <a-avatar style="color: #f56a00; backgroundcolor: #fde3cf">U</a-avatar>
  <a-avatar style="backgroundcolor: #87d068">
    <template #icon>
      <UserOutlined />
    </template>
  </a-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
  },
});
<\/script>

`,X=`<cn>
#### \u81EA\u52A8\u8C03\u6574\u5B57\u7B26\u5927\u5C0F
\u5BF9\u4E8E\u5B57\u7B26\u578B\u7684\u5934\u50CF\uFF0C\u5F53\u5B57\u7B26\u4E32\u8F83\u957F\u65F6\uFF0C\u5B57\u4F53\u5927\u5C0F\u53EF\u4EE5\u6839\u636E\u5934\u50CF\u5BBD\u5EA6\u81EA\u52A8\u8C03\u6574\u3002
</cn>

<us>
#### Autoset Font Size
For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.
</us>
`;const p=["U","Lucy","Tom","Edward"],_=["#f56a00","#7265e6","#ffbf00","#00a2ae"];var $=m({setup(){const o=y(p[0]),l=y(_[0]);return{avatarValue:o,color:l,changeValue:()=>{const s=p.indexOf(o.value);o.value=s<p.length-1?p[s+1]:p[0],l.value=s<_.length-1?_[s+1]:_[0]}}}});const Y=u(" \u6539\u53D8 ");function H(o,l,d,s,f,g){const e=r("a-avatar"),n=r("a-button");return c(),i(v,null,[t(e,{shape:"square",size:"large",style:{backgroundColor:o.color,verticalAlign:"middle"}},{default:a(()=>[u(C(o.avatarValue),1)]),_:1},8,["style"]),t(n,{size:"small",style:{marginLeft:"16px",verticalAlign:"middle"},onClick:o.changeValue},{default:a(()=>[Y]),_:1},8,["onClick"])],64)}$.render=H;var P=`<template>
  <a-avatar
    shape="square"
    size="large"
    :style="{ backgroundColor: color, verticalAlign: 'middle' }"
  >
    {{ avatarValue }}
  </a-avatar>
  <a-button
    size="small"
    :style="{ marginLeft: '16px', verticalAlign: 'middle' }"
    @click="changeValue"
  >
    \u6539\u53D8
  </a-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

export default defineComponent({
  setup() {
    const avatarValue = ref(UserList[0]);
    const color = ref(colorList[0]);
    const changeValue = () => {
      const index = UserList.indexOf(avatarValue.value);
      avatarValue.value = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
      color.value = index < colorList.length - 1 ? colorList[index + 1] : colorList[0];
    };
    return {
      avatarValue,
      color,
      changeValue,
    };
  },
});
<\/script>

`;const R={class:"markdown-body"},K=V("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>icon</td><td>\u8BBE\u7F6E\u5934\u50CF\u7684\u56FE\u6807\u7C7B\u578B\uFF0C\u53EF\u8BBE\u4E3A Icon \u7684 <code>type</code> \u6216 VNode</td><td>string | VNode | slot</td><td>-</td></tr><tr><td>shape</td><td>\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6</td><td>Enum{ \u2018circle\u2019, \u2018square\u2019 }</td><td><code>circle</code></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F</td><td>number | Enum{ \u2018large\u2019, \u2018small\u2019, \u2018default\u2019 }</td><td><code>default</code></td></tr><tr><td>src</td><td>\u56FE\u7247\u7C7B\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740</td><td>string</td><td>-</td></tr><tr><td>srcSet</td><td>\u8BBE\u7F6E\u56FE\u7247\u7C7B\u5934\u50CF\u54CD\u5E94\u5F0F\u8D44\u6E90\u5730\u5740</td><td>string</td><td>-</td></tr><tr><td>alt</td><td>\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C</td><td>string</td><td>-</td></tr><tr><td>loadError</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6\uFF0C\u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A</td><td>() =&gt; boolean</td><td>-</td></tr></tbody></table>",2),M={expose:[],setup(o){return(l,d)=>(c(),i("div",R,[K]))}};var W=M;const z={cn:`# Avatar\u5934\u50CF
          \u7528\u6765\u4EE3\u8868\u7528\u6237\u6216\u4E8B\u7269\uFF0C\u652F\u6301\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5C55\u793A\u3002
          ## \u8BBE\u8BA1\u5E08\u4E13\u5C5E
\u5B89\u88C5 [Kitchen Sketch \u63D2\u4EF6 \uFFFD](https://kitchen.alipay.com)\uFF0C\u4E00\u952E\u586B\u5145\u9AD8\u903C\u683C\u5934\u50CF\u548C\u6587\u672C.

          ## \u4EE3\u7801\u6F14\u793A`,us:`# Avatar
          Avatars can be used to represent people or objects. It supports images, 'Icon's, or letters.
          ## Examples
          `};var J={category:"Components",subtitle:"\u5934\u50CF",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Avatar",render(){return t("div",null,[t(r("Md"),{cn:z.cn,us:z.us},null),t(r("demo-sort"),null,{default:()=>[t(r("demo-container"),{api:L,code:S},{default:()=>[t(U,null,null)]}),t(r("demo-container"),{api:E,code:F},{default:()=>[t(O,null,null)]}),t(r("demo-container"),{api:A,code:D},{default:()=>[t(x,null,null)]}),t(r("demo-container"),{api:X,code:P},{default:()=>[t($,null,null)]})]}),t(r("api"),null,{default:()=>[t(W,null,null)]})])}};export{J as default};

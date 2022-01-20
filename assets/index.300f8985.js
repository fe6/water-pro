import{Y as o,bw as r,bx as d,by as n,b as t,D as l,d as v,k as m,bO as y}from"./vendor.846be9ce.js";const f={},w=t("p",null,"Content",-1),L=t("p",null,"Content",-1),x=l("Hover me");function B(e,p){const s=o("a-button"),c=o("a-popover");return r(),d(c,{title:"Title"},{content:n(()=>[w,L]),default:n(()=>[t(s,{type:"primary"},{default:n(()=>[x]),_:1})]),_:1})}f.render=B;var H=f,S=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u6D6E\u5C42\u7684\u5927\u5C0F\u7531\u5185\u5BB9\u533A\u57DF\u51B3\u5B9A\u3002
</cn>

<us>
#### Basic
The most basic example. The size of the floating layer depends on the contents region.
</us>
`,W=`<template>
  <a-popover title="Title">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <a-button type="primary">Hover me</a-button>
  </a-popover>
</template>
`;const C={},R=t("p",null,"Content",-1),A=t("p",null,"Content",-1),P=t("span",null,"Title",-1),V=l("Align edge / \u8FB9\u7F18\u5BF9\u9F50"),N=t("p",null,"Content",-1),D=t("p",null,"Content",-1),U=t("span",null,"Title",-1),F=l("Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3");function I(e,p){const s=o("a-button"),c=o("a-popover");return r(),d("div",null,[t(c,{placement:"topLeft"},{content:n(()=>[R,A]),title:n(()=>[P]),default:n(()=>[t(s,null,{default:n(()=>[V]),_:1})]),_:1}),t(c,{placement:"topLeft","arrow-point-at-center":""},{content:n(()=>[N,D]),title:n(()=>[U]),default:n(()=>[t(s,null,{default:n(()=>[F]),_:1})]),_:1})])}C.render=I;var M=C,j=`<cn>
#### \u7BAD\u5934\u6307\u5411
\u8BBE\u7F6E\u4E86 \`arrowPointAtCenter\` \u540E\uFF0C\u7BAD\u5934\u5C06\u6307\u5411\u76EE\u6807\u5143\u7D20\u7684\u4E2D\u5FC3\u3002
</cn>

<us>
#### Arrow pointing
The arrow points to the center of the target element, which set \`arrowPointAtCenter\`.
</us>
`,z=`<template>
  <div>
    <a-popover placement="topLeft">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <template #title>
        <span>Title</span>
      </template>
      <a-button>Align edge / \u8FB9\u7F18\u5BF9\u9F50</a-button>
    </a-popover>
    <a-popover placement="topLeft" arrow-point-at-center>
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <template #title>
        <span>Title</span>
      </template>
      <a-button>Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3</a-button>
    </a-popover>
  </div>
</template>
`,b=v({setup(){const e=m(!1);return{visible:e,hide:()=>{e.value=!1}}}});const E=l("Click me");function O(e,p,s,c,h,u){const i=o("a-button"),a=o("a-popover");return r(),d(a,{visible:e.visible,"onUpdate:visible":p[2]||(p[2]=_=>e.visible=_),title:"Title",trigger:"click"},{content:n(()=>[t("a",{onClick:p[1]||(p[1]=(..._)=>e.hide&&e.hide(..._))},"Close")]),default:n(()=>[t(i,{type:"primary"},{default:n(()=>[E]),_:1})]),_:1},8,["visible"])}b.render=O;var Y=`<cn>
#### \u4ECE\u6D6E\u5C42\u5185\u5173\u95ED
\u4F7F\u7528 \`visible\` \u5C5E\u6027\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u3002
</cn>

<us>
#### Controlling the close of the dialog
Use \`visible\` prop to control the display of the card.
</us>
`,q=`<template>
  <a-popover v-model:visible="visible" title="Title" trigger="click">
    <template #content>
      <a @click="hide">Close</a>
    </template>
    <a-button type="primary">Click me</a-button>
  </a-popover>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const hide = () => {
      visible.value = false;
    };

    return {
      visible,
      hide,
    };
  },
});
<\/script>
`,g=v({setup(){return{buttonWidth:m(70)}}});const G={id:"components-popover-demo-placement"},J=t("p",null,"Content",-1),K=t("p",null,"Content",-1),Q=t("span",null,"Title",-1),X=l("TL"),Z=t("p",null,"Content",-1),tt=t("p",null,"Content",-1),nt=t("span",null,"Title",-1),et=l("Top"),ot=t("p",null,"Content",-1),lt=t("p",null,"Content",-1),pt=t("span",null,"Title",-1),at=l("TR"),it=t("p",null,"Content",-1),st=t("p",null,"Content",-1),ct=t("span",null,"Title",-1),rt=l("LT"),dt=t("p",null,"Content",-1),ut=t("p",null,"Content",-1),_t=t("span",null,"Title",-1),mt=l("Left"),ht=t("p",null,"Content",-1),vt=t("p",null,"Content",-1),ft=t("span",null,"Title",-1),Ct=l("LB"),bt=t("p",null,"Content",-1),gt=t("p",null,"Content",-1),Tt=t("span",null,"Title",-1),$t=l("RT"),kt=t("p",null,"Content",-1),yt=t("p",null,"Content",-1),wt=t("span",null,"Title",-1),Lt=l("Right"),xt=t("p",null,"Content",-1),Bt=t("p",null,"Content",-1),Ht=t("span",null,"Title",-1),St=l("RB"),Wt=t("p",null,"Content",-1),Rt=t("p",null,"Content",-1),At=t("span",null,"Title",-1),Pt=l("BL"),Vt=t("p",null,"Content",-1),Nt=t("p",null,"Content",-1),Dt=t("span",null,"Title",-1),Ut=l("Bottom"),Ft=t("p",null,"Content",-1),It=t("p",null,"Content",-1),Mt=t("span",null,"Title",-1),jt=l("BR");function zt(e,p,s,c,h,u){const i=o("a-button"),a=o("a-popover");return r(),d("div",G,[t("div",{style:{marginLeft:`${e.buttonWidth}px`,whiteSpace:"nowrap"}},[t(a,{placement:"topLeft"},{content:n(()=>[J,K]),title:n(()=>[Q]),default:n(()=>[t(i,null,{default:n(()=>[X]),_:1})]),_:1}),t(a,{placement:"top"},{content:n(()=>[Z,tt]),title:n(()=>[nt]),default:n(()=>[t(i,null,{default:n(()=>[et]),_:1})]),_:1}),t(a,{placement:"topRight"},{content:n(()=>[ot,lt]),title:n(()=>[pt]),default:n(()=>[t(i,null,{default:n(()=>[at]),_:1})]),_:1})],4),t("div",{style:{width:`${e.buttonWidth}px`,float:"left"}},[t(a,{placement:"leftTop"},{content:n(()=>[it,st]),title:n(()=>[ct]),default:n(()=>[t(i,null,{default:n(()=>[rt]),_:1})]),_:1}),t(a,{placement:"left"},{content:n(()=>[dt,ut]),title:n(()=>[_t]),default:n(()=>[t(i,null,{default:n(()=>[mt]),_:1})]),_:1}),t(a,{placement:"leftBottom"},{content:n(()=>[ht,vt]),title:n(()=>[ft]),default:n(()=>[t(i,null,{default:n(()=>[Ct]),_:1})]),_:1})],4),t("div",{style:{width:`${e.buttonWidth}px`,marginLeft:`${e.buttonWidth*4+24}px`}},[t(a,{placement:"rightTop"},{content:n(()=>[bt,gt]),title:n(()=>[Tt]),default:n(()=>[t(i,null,{default:n(()=>[$t]),_:1})]),_:1}),t(a,{placement:"right"},{content:n(()=>[kt,yt]),title:n(()=>[wt]),default:n(()=>[t(i,null,{default:n(()=>[Lt]),_:1})]),_:1}),t(a,{placement:"rightBottom"},{content:n(()=>[xt,Bt]),title:n(()=>[Ht]),default:n(()=>[t(i,null,{default:n(()=>[St]),_:1})]),_:1})],4),t("div",{style:{marginLeft:`${e.buttonWidth}px`,clear:"both",whiteSpace:"nowrap"}},[t(a,{placement:"bottomLeft"},{content:n(()=>[Wt,Rt]),title:n(()=>[At]),default:n(()=>[t(i,null,{default:n(()=>[Pt]),_:1})]),_:1}),t(a,{placement:"bottom"},{content:n(()=>[Vt,Nt]),title:n(()=>[Dt]),default:n(()=>[t(i,null,{default:n(()=>[Ut]),_:1})]),_:1}),t(a,{placement:"bottomRight"},{content:n(()=>[Ft,It]),title:n(()=>[Mt]),default:n(()=>[t(i,null,{default:n(()=>[jt]),_:1})]),_:1})],4)])}g.render=zt;var Et=`<cn>
#### \u4F4D\u7F6E
\u4F4D\u7F6E\u6709\u5341\u4E8C\u4E2A\u65B9\u5411\u3002
</cn>

<us>
#### Placement
There are 12 \`placement\` options available.
</us>
`,Ot=`<template>
  <div id="components-popover-demo-placement">
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, whiteSpace: 'nowrap' }">
      <a-popover placement="topLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>TL</a-button>
      </a-popover>
      <a-popover placement="top">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>Top</a-button>
      </a-popover>
      <a-popover placement="topRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>TR</a-button>
      </a-popover>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, float: 'left' }">
      <a-popover placement="leftTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>LT</a-button>
      </a-popover>
      <a-popover placement="left">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>Left</a-button>
      </a-popover>
      <a-popover placement="leftBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>LB</a-button>
      </a-popover>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, marginLeft: \`\${buttonWidth * 4 + 24}px\` }">
      <a-popover placement="rightTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>RT</a-button>
      </a-popover>
      <a-popover placement="right">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>Right</a-button>
      </a-popover>
      <a-popover placement="rightBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>RB</a-button>
      </a-popover>
    </div>
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-popover placement="bottomLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>BL</a-button>
      </a-popover>
      <a-popover placement="bottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>Bottom</a-button>
      </a-popover>
      <a-popover placement="bottomRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button>BR</a-button>
      </a-popover>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: ref<number>(70),
    };
  },
});
<\/script>
<style>
#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`;const T={},Yt=t("p",null,"Content",-1),qt=t("p",null,"Content",-1),Gt=l("Hover me"),Jt=t("p",null,"Content",-1),Kt=t("p",null,"Content",-1),Qt=l("Focus me"),Xt=t("p",null,"Content",-1),Zt=t("p",null,"Content",-1),tn=l("Click me");function nn(e,p){const s=o("a-button"),c=o("a-popover");return r(),d("div",null,[t(c,{title:"Title",trigger:"hover"},{content:n(()=>[Yt,qt]),default:n(()=>[t(s,null,{default:n(()=>[Gt]),_:1})]),_:1}),t(c,{title:"Title",trigger:"focus"},{content:n(()=>[Jt,Kt]),default:n(()=>[t(s,null,{default:n(()=>[Qt]),_:1})]),_:1}),t(c,{title:"Title",trigger:"click"},{content:n(()=>[Xt,Zt]),default:n(()=>[t(s,null,{default:n(()=>[tn]),_:1})]),_:1})])}T.render=nn;var en=T,on=`<cn>
#### \u4E09\u79CD\u89E6\u53D1\u65B9\u5F0F
\u9F20\u6807\u79FB\u5165\u3001\u805A\u96C6\u3001\u70B9\u51FB\u3002
</cn>

<us>
#### Three ways to trigger
Mouse to click, focus and move in.
</us>
`,ln=`<template>
  <div>
    <a-popover title="Title" trigger="hover">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button>Hover me</a-button>
    </a-popover>
    <a-popover title="Title" trigger="focus">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button>Focus me</a-button>
    </a-popover>
    <a-popover title="Title" trigger="click">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button>Click me</a-button>
    </a-popover>
  </div>
</template>

<style>
#components-popover-demo-triggerType .ant-btn {
  margin-right: 8px;
}
</style>
`,$=v({setup(){const e=m(!1),p=m(!1);return{clicked:e,hovered:p,hide:()=>{e.value=!1,p.value=!1},handleHoverChange:u=>{e.value=!1,p.value=u},handleClickChange:u=>{e.value=u,p.value=!1}}}});const pn=t("div",null,"This is hover content.",-1),an=t("div",null,"This is click content.",-1),sn=l("Hover and click / \u60AC\u505C\u5E76\u5355\u51FB");function cn(e,p,s,c,h,u){const i=o("a-button"),a=o("a-popover");return r(),d(a,{style:{width:"500px"},title:"Hover title",trigger:"hover",visible:e.hovered,onVisibleChange:e.handleHoverChange},{content:n(()=>[pn]),default:n(()=>[t(a,{title:"Click title",trigger:"click",visible:e.clicked,onVisibleChange:e.handleClickChange},{content:n(()=>[t("div",null,[an,t("a",{onClick:p[1]||(p[1]=(..._)=>e.hide&&e.hide(..._))},"Close")])]),default:n(()=>[t(i,null,{default:n(()=>[sn]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1},8,["visible","onVisibleChange"])}$.render=cn;var rn=`<cn>
#### \u60AC\u505C\u70B9\u51FB\u5F39\u51FA\u7A97\u53E3
\u4EE5\u4E0B\u793A\u4F8B\u663E\u793A\u5982\u4F55\u521B\u5EFA\u53EF\u60AC\u505C\u548C\u5355\u51FB\u7684\u5F39\u51FA\u7A97\u53E3\u3002
</cn>

<us>
#### Hover with click popover
The following example shows how to create a popover which can be hovered and clicked.
</us>
`,dn=`<template>
  <a-popover
    style="width: 500px"
    title="Hover title"
    trigger="hover"
    :visible="hovered"
    @visibleChange="handleHoverChange"
  >
    <template #content>
      <div>This is hover content.</div>
    </template>
    <a-popover
      title="Click title"
      trigger="click"
      :visible="clicked"
      @visibleChange="handleClickChange"
    >
      <template #content>
        <div>
          <div>This is click content.</div>
          <a @click="hide">Close</a>
        </div>
      </template>
      <a-button>Hover and click / \u60AC\u505C\u5E76\u5355\u51FB</a-button>
    </a-popover>
  </a-popover>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const clicked = ref<boolean>(false);
    const hovered = ref<boolean>(false);

    const hide = () => {
      clicked.value = false;
      hovered.value = false;
    };

    const handleHoverChange = (visible: boolean) => {
      clicked.value = false;
      hovered.value = visible;
    };

    const handleClickChange = (visible: boolean) => {
      clicked.value = visible;
      hovered.value = false;
    };

    return {
      clicked,
      hovered,
      hide,
      handleHoverChange,
      handleClickChange,
    };
  },
});
<\/script>
`;const un={class:"markdown-body"},_n=y('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>content</td><td>\u5361\u7247\u5185\u5BB9</td><td>string|slot|VNode</td><td>\u65E0</td></tr><tr><td>title</td><td>\u5361\u7247\u6807\u9898</td><td>string|slot|VNode</td><td>\u65E0</td></tr></tbody></table><p>\u66F4\u591A\u5C5E\u6027\u8BF7\u53C2\u8003 <a href="/components/tooltip-cn/#API">Tooltip</a>\u3002</p><h2>\u6CE8\u610F</h2><p>\u8BF7\u786E\u4FDD <code>Popover</code> \u7684\u5B50\u5143\u7D20\u80FD\u63A5\u53D7 <code>mouseenter</code>\u3001<code>mouseleave</code>\u3001<code>focus</code>\u3001<code>click</code> \u4E8B\u4EF6\u3002</p>',5),mn={expose:[],setup(e){return(p,s)=>(r(),d("div",un,[_n]))}};var hn=mn;const k={cn:`# Popover

  \u70B9\u51FB/\u9F20\u6807\u79FB\u5165\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u76EE\u6807\u5143\u7D20\u6709\u8FDB\u4E00\u6B65\u7684\u63CF\u8FF0\u548C\u76F8\u5173\u64CD\u4F5C\u65F6\uFF0C\u53EF\u4EE5\u6536\u7EB3\u5230\u5361\u7247\u4E2D\uFF0C\u6839\u636E\u7528\u6237\u7684\u64CD\u4F5C\u884C\u4E3A\u8FDB\u884C\u5C55\u73B0\u3002

\u548C \`Tooltip\` \u7684\u533A\u522B\u662F\uFF0C\u7528\u6237\u53EF\u4EE5\u5BF9\u6D6E\u5C42\u4E0A\u7684\u5143\u7D20\u8FDB\u884C\u64CD\u4F5C\uFF0C\u56E0\u6B64\u5B83\u53EF\u4EE5\u627F\u8F7D\u66F4\u590D\u6742\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u94FE\u63A5\u6216\u6309\u94AE\u7B49\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Popover

  The floating card popped by clicking or hovering.

## When To Use

A simple popup menu to provide extra information or operations.

Comparing with \`Tooltip\`, besides information \`Popover\` card can also provide action elements like links and buttons.
## Examples
  `};var fn={category:"Components",subtitle:"\u6C14\u6CE1\u5361\u7247",type:"Data Display",title:"Popover",render(){return t("div",null,[t(o("Md"),{cn:k.cn,us:k.us},null),t(o("demo-sort"),null,{default:()=>[t(o("demo-container"),{api:S,code:W},{default:()=>[t(H,null,null)]}),t(o("demo-container"),{api:j,code:z},{default:()=>[t(M,null,null)]}),t(o("demo-container"),{api:Y,code:q},{default:()=>[t(b,null,null)]}),t(o("demo-container"),{api:Et,code:Ot},{default:()=>[t(g,null,null)]}),t(o("demo-container"),{api:on,code:ln},{default:()=>[t(en,null,null)]}),t(o("demo-container"),{api:rn,code:dn},{default:()=>[t($,null,null)]})]}),t(o("api"),null,{default:()=>[t(hn,null,null)]})])}};export{fn as default};

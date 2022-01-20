import{Y as o,bw as i,bx as r,by as d,D as n,d as f,bG as y,bH as w,b as t,F as $,bV as T,bI as C,bz as P,bO as R}from"./vendor.846be9ce.js";const L={},I=n("prompt text"),k=n(" Tooltip will show when mouse enter. ");function W(p,c){const s=o("a-tooltip");return i(),r(s,null,{title:d(()=>[I]),default:d(()=>[k]),_:1})}L.render=W;var j=L,O=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
The simplest usage.
</us>
`,D=`<template>
  <a-tooltip>
    <template #title>prompt text</template>
    Tooltip will show when mouse enter.
  </a-tooltip>
</template>
`;const N=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],E=["#f50","#2db7f5","#87d068","#108ee9"];var b=f({setup(){return{colors:N,customColors:E}}});const m=C();y("data-v-d2f63f96");const V={id:"components-a-tooltip-demo-color"},F=n("Presets"),H=n("Custom");w();const M=m((p,c,s,_,h,v)=>{const l=o("a-divider"),a=o("a-button"),x=o("a-tooltip");return i(),r("div",V,[t(l,{orientation:"left"},{default:m(()=>[F]),_:1}),t("div",null,[(i(!0),r($,null,T(p.colors,u=>(i(),r(x,{key:u,title:"prompt text",color:u},{default:m(()=>[t(a,null,{default:m(()=>[n(P(u),1)]),_:2},1024)]),_:2},1032,["color"]))),128))]),t(l,{orientation:"left"},{default:m(()=>[H]),_:1}),t("div",null,[(i(!0),r($,null,T(p.customColors,u=>(i(),r(x,{key:u,title:"prompt text",color:u},{default:m(()=>[t(a,null,{default:m(()=>[n(P(u),1)]),_:2},1024)]),_:2},1032,["color"]))),128))])])});b.render=M;b.__scopeId="data-v-d2f63f96";var z=`<cn>
#### \u591A\u5F69\u6587\u5B57\u63D0\u793A
\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6587\u5B57\u63D0\u793A\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002
</cn>

<us>
#### \u591A\u5F69\u6587\u5B57\u63D0\u793A
TODO
</us>
`,G=`<template>
  <div id="components-a-tooltip-demo-color">
    <a-divider orientation="left">Presets</a-divider>
    <div>
      <a-tooltip v-for="color in colors" :key="color" title="prompt text" :color="color">
        <a-button>{{ color }}</a-button>
      </a-tooltip>
    </div>
    <a-divider orientation="left">Custom</a-divider>
    <div>
      <a-tooltip v-for="color in customColors" :key="color" title="prompt text" :color="color">
        <a-button>{{ color }}</a-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
export default defineComponent({
  setup() {
    return {
      colors: colors,
      customColors: customColors,
    };
  },
});
<\/script>
<style scoped>
#components-a-tooltip-demo-color .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`;const A={},U=n("Align edge / \u8FB9\u7F18\u5BF9\u9F50"),Y=n("Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3");function q(p,c){const s=o("a-button"),_=o("a-tooltip"),h=o("a-space");return i(),r(h,null,{default:d(()=>[t(_,{placement:"topLeft",title:"Prompt Text"},{default:d(()=>[t(s,null,{default:d(()=>[U]),_:1})]),_:1}),t(_,{placement:"topLeft",title:"Prompt Text","arrow-point-at-center":""},{default:d(()=>[t(s,null,{default:d(()=>[Y]),_:1})]),_:1})]),_:1})}A.render=q;var J=A,K=`<cn>
#### \u7BAD\u5934\u6307\u5411
\u8BBE\u7F6E\u4E86 \`arrowPointAtCenter\` \u540E\uFF0C\u7BAD\u5934\u5C06\u6307\u5411\u76EE\u6807\u5143\u7D20\u7684\u4E2D\u5FC3\u3002
</cn>

<us>
#### Arrow pointing at the center
By specifying \`arrowPointAtCenter\` prop, the arrow will point to the center of the target element.
</us>
`,Q=`<template>
  <a-space>
    <a-tooltip placement="topLeft" title="Prompt Text">
      <a-button>Align edge / \u8FB9\u7F18\u5BF9\u9F50</a-button>
    </a-tooltip>
    <a-tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
      <a-button>Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3</a-button>
    </a-tooltip>
  </a-space>
</template>
`;const X={overflow:"hidden",position:"relative",padding:"24px",border:"1px solid #e9e9e9"};var S=f({setup(){return{wrapStyles:X,getPopupContainer:c=>c.parentElement}}});const Z=n("Adjust automatically / \u81EA\u52A8\u8C03\u6574"),tt=t("br",null,null,-1),et=n("Ingore / \u4E0D\u5904\u7406");function nt(p,c,s,_,h,v){const l=o("a-button"),a=o("a-tooltip");return i(),r("div",{style:p.wrapStyles},[t(a,{placement:"left",title:"Prompt Text","get-popup-container":p.getPopupContainer},{default:d(()=>[t(l,null,{default:d(()=>[Z]),_:1})]),_:1},8,["get-popup-container"]),tt,t(a,{placement:"left",title:"Prompt Text","get-popup-container":p.getPopupContainer,"auto-adjust-overflow":!1},{default:d(()=>[t(l,{style:{"margin-top":"10px"}},{default:d(()=>[et]),_:1})]),_:1},8,["get-popup-container"])],4)}S.render=nt;var ot=`<cn>
#### \u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E
\u6C14\u6CE1\u6846\u4E0D\u53EF\u89C1\u65F6\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E
</cn>

<us>
#### Adjust placement automatically
Adjust popup placement automatically when popup is invisible
</us>
`,lt=`<template>
  <div :style="wrapStyles">
    <a-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
      <a-button>Adjust automatically / \u81EA\u52A8\u8C03\u6574</a-button>
    </a-tooltip>
    <br />
    <a-tooltip
      placement="left"
      title="Prompt Text"
      :get-popup-container="getPopupContainer"
      :auto-adjust-overflow="false"
    >
      <a-button style="margin-top: 10px">Ingore / \u4E0D\u5904\u7406</a-button>
    </a-tooltip>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const wrapStyles: Record<string, string> = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};
export default defineComponent({
  setup() {
    const getPopupContainer = (trigger: HTMLElement) => {
      return trigger.parentElement;
    };

    return {
      wrapStyles,
      getPopupContainer,
    };
  },
});
<\/script>
`,g=f({setup(){return{buttonWidth:70}}});const e=C();y("data-v-bc42d3a8");const at={id:"components-a-tooltip-demo-placement"},pt=t("span",null,"prompt text",-1),dt=n("TL"),it=t("span",null,"prompt text",-1),rt=n("Top"),st=t("span",null,"prompt text",-1),ct=n("TR"),ut=t("span",null,"prompt text",-1),mt=n("LT"),_t=t("span",null,"prompt text",-1),ht=n("Left"),ft=t("span",null,"prompt text",-1),bt=n("LB"),gt=t("span",null,"prompt text",-1),vt=n("RT"),xt=t("span",null,"prompt text",-1),yt=n("Right"),wt=t("span",null,"prompt text",-1),$t=n("RB"),Tt=t("span",null,"prompt text",-1),Ct=n("BL"),Pt=t("span",null,"prompt text",-1),Lt=n("Bottom"),At=t("span",null,"prompt text",-1),St=n("BR");w();const Bt=e((p,c,s,_,h,v)=>{const l=o("a-button"),a=o("a-tooltip");return i(),r("div",at,[t("div",{style:{marginLeft:`${p.buttonWidth}px`,whiteSpace:"nowrap"}},[t(a,{placement:"topLeft"},{title:e(()=>[pt]),default:e(()=>[t(l,null,{default:e(()=>[dt]),_:1})]),_:1}),t(a,{placement:"top"},{title:e(()=>[it]),default:e(()=>[t(l,null,{default:e(()=>[rt]),_:1})]),_:1}),t(a,{placement:"topRight"},{title:e(()=>[st]),default:e(()=>[t(l,null,{default:e(()=>[ct]),_:1})]),_:1})],4),t("div",{style:{width:`${p.buttonWidth}px`,float:"left"}},[t(a,{placement:"leftTop"},{title:e(()=>[ut]),default:e(()=>[t(l,null,{default:e(()=>[mt]),_:1})]),_:1}),t(a,{placement:"left"},{title:e(()=>[_t]),default:e(()=>[t(l,null,{default:e(()=>[ht]),_:1})]),_:1}),t(a,{placement:"leftBottom"},{title:e(()=>[ft]),default:e(()=>[t(l,null,{default:e(()=>[bt]),_:1})]),_:1})],4),t("div",{style:{width:`${p.buttonWidth}px`,marginLeft:`${p.buttonWidth*4+24}px`}},[t(a,{placement:"rightTop"},{title:e(()=>[gt]),default:e(()=>[t(l,null,{default:e(()=>[vt]),_:1})]),_:1}),t(a,{placement:"right"},{title:e(()=>[xt]),default:e(()=>[t(l,null,{default:e(()=>[yt]),_:1})]),_:1}),t(a,{placement:"rightBottom"},{title:e(()=>[wt]),default:e(()=>[t(l,null,{default:e(()=>[$t]),_:1})]),_:1})],4),t("div",{style:{marginLeft:`${p.buttonWidth}px`,clear:"both",whiteSpace:"nowrap"}},[t(a,{placement:"bottomLeft"},{title:e(()=>[Tt]),default:e(()=>[t(l,null,{default:e(()=>[Ct]),_:1})]),_:1}),t(a,{placement:"bottom"},{title:e(()=>[Pt]),default:e(()=>[t(l,null,{default:e(()=>[Lt]),_:1})]),_:1}),t(a,{placement:"bottomRight"},{title:e(()=>[At]),default:e(()=>[t(l,null,{default:e(()=>[St]),_:1})]),_:1})],4)])});g.render=Bt;g.__scopeId="data-v-bc42d3a8";var Rt=`<cn>
#### \u4F4D\u7F6E
\u4F4D\u7F6E\u6709 12 \u4E2A\u65B9\u5411\u3002
</cn>

<us>
#### Placement
There are 12 placement options available.
</us>
`,It=`<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, whiteSpace: 'nowrap' }">
      <a-tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>TL</a-button>
      </a-tooltip>
      <a-tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Top</a-button>
      </a-tooltip>
      <a-tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>TR</a-button>
      </a-tooltip>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, float: 'left' }">
      <a-tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>LT</a-button>
      </a-tooltip>
      <a-tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Left</a-button>
      </a-tooltip>
      <a-tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>LB</a-button>
      </a-tooltip>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, marginLeft: \`\${buttonWidth * 4 + 24}px\` }">
      <a-tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>RT</a-button>
      </a-tooltip>
      <a-tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Right</a-button>
      </a-tooltip>
      <a-tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>RB</a-button>
      </a-tooltip>
    </div>
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>BL</a-button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Bottom</a-button>
      </a-tooltip>
      <a-tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>BR</a-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
<\/script>
<style scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`;const kt={class:"markdown-body"},Wt=R('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u63D0\u793A\u6587\u5B57</td><td>string|slot</td><td>\u65E0</td></tr></tbody></table><h3>\u5171\u540C\u7684 API</h3><p>\u4EE5\u4E0B API \u4E3A Tooltip\u3001Popconfirm\u3001Popover \u5171\u4EAB\u7684 API\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>arrowPointAtCenter</td><td>\u7BAD\u5934\u662F\u5426\u6307\u5411\u76EE\u6807\u5143\u7D20\u4E2D\u5FC3</td><td>boolean</td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>\u6C14\u6CE1\u88AB\u906E\u6321\u65F6\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E</td><td>boolean</td><td><code>true</code></td></tr><tr><td>defaultVisible</td><td>\u9ED8\u8BA4\u662F\u5426\u663E\u9690</td><td>boolean</td><td>false</td></tr><tr><td>getPopupContainer</td><td>\u6D6E\u5C42\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td></tr><tr><td>mouseEnterDelay</td><td>\u9F20\u6807\u79FB\u5165\u540E\u5EF6\u65F6\u591A\u5C11\u624D\u663E\u793A Tooltip\uFF0C\u5355\u4F4D\uFF1A\u79D2</td><td>number</td><td>0</td></tr><tr><td>mouseLeaveDelay</td><td>\u9F20\u6807\u79FB\u51FA\u540E\u5EF6\u65F6\u591A\u5C11\u624D\u9690\u85CF Tooltip\uFF0C\u5355\u4F4D\uFF1A\u79D2</td><td>number</td><td>0.1</td></tr><tr><td>overlayClassName</td><td>\u5361\u7247\u7C7B\u540D</td><td>string</td><td>\u65E0</td></tr><tr><td>overlayStyle</td><td>\u5361\u7247\u6837\u5F0F</td><td>object</td><td>\u65E0</td></tr><tr><td>placement</td><td>\u6C14\u6CE1\u6846\u4F4D\u7F6E\uFF0C\u53EF\u9009 <code>top</code> <code>left</code> <code>right</code> <code>bottom</code> <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code></td><td>string</td><td>top</td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u884C\u4E3A\uFF0C\u53EF\u9009 <code>hover/focus/click/contextmenu</code></td><td>string</td><td>hover</td></tr><tr><td>visible(v-model)</td><td>\u7528\u4E8E\u624B\u52A8\u63A7\u5236\u6D6E\u5C42\u663E\u9690</td><td>boolean</td><td>false</td></tr><tr><td>destroyTooltipOnHide</td><td>\u9690\u85CF\u540E\u662F\u5426\u9500\u6BC1 tooltip</td><td>boolean</td><td>false</td></tr><tr><td>align</td><td>\u8BE5\u503C\u5C06\u5408\u5E76\u5230 placement \u7684\u914D\u7F6E\u4E2D\uFF0C\u8BBE\u7F6E\u53C2\u8003 <a href="https://github.com/yiminghe/dom-align">dom-align</a></td><td>Object</td><td>\u65E0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>visibleChange</td><td>\u663E\u793A\u9690\u85CF\u7684\u56DE\u8C03</td><td>(visible) =&gt; void</td></tr></tbody></table><h2>\u6CE8\u610F</h2><p>\u8BF7\u786E\u4FDD <code>Tooltip</code> \u7684\u5B50\u5143\u7D20\u80FD\u63A5\u53D7 <code>mouseenter</code>\u3001<code>mouseleave</code>\u3001<code>focus</code>\u3001<code>click</code> \u4E8B\u4EF6\u3002</p>',9),jt={expose:[],setup(p){return(c,s)=>(i(),r("div",kt,[Wt]))}};var Ot=jt;const B={cn:`# Tooltip

  \u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002

  ## \u4F55\u65F6\u4F7F\u7528

  \u9F20\u6807\u79FB\u5165\u5219\u663E\u793A\u63D0\u793A\uFF0C\u79FB\u51FA\u6D88\u5931\uFF0C\u6C14\u6CE1\u6D6E\u5C42\u4E0D\u627F\u8F7D\u590D\u6742\u6587\u672C\u548C\u64CD\u4F5C\u3002

\u53EF\u7528\u6765\u4EE3\u66FF\u7CFB\u7EDF\u9ED8\u8BA4\u7684 'title' \u63D0\u793A\uFF0C\u63D0\u4F9B\u4E00\u4E2A'\u6309\u94AE/\u6587\u5B57/\u64CD\u4F5C'\u7684\u6587\u6848\u89E3\u91CA\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Tooltip

  A simple text popup tip.

  # When To Use

  - The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
  - To provide an explanation of a 'button/text/operation'. It's often used instead of the html 'title' attribute.
  ## Examples
  `};var Nt={category:"Components",subtitle:"\u6587\u5B57\u63D0\u793A",type:"Data Display",title:"Tooltip",render(){return t("div",null,[t(o("Md"),{cn:B.cn,us:B.us},null),t(o("demo-sort"),null,{default:()=>[t(o("demo-container"),{api:O,code:D},{default:()=>[t(j,null,null)]}),t(o("demo-container"),{api:z,code:G},{default:()=>[t(b,null,null)]}),t(o("demo-container"),{api:Rt,code:It},{default:()=>[t(g,null,null)]}),t(o("demo-container"),{api:K,code:Q},{default:()=>[t(J,null,null)]}),t(o("demo-container"),{api:ot,code:lt},{default:()=>[t(S,null,null)]})]}),t(o("api"),null,{default:()=>[t(Ot,null,null)]})])}};export{Nt as default};

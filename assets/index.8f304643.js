import{Y as d,bw as c,bx as p,b as t,by as n,F as m,D as e,b6 as P,S as g,af as y,a5 as f,d as $,k as v,aX as A,bO as T}from"./vendor.846be9ce.js";import{R as z,u as F}from"./main.f0d1f01d.js";var M="<cn>\n#### \u6309\u94AE\u7C7B\u578B\n\u6309\u94AE\u6709\u4E94\u79CD\u7C7B\u578B\uFF1A\u4E3B\u6309\u94AE\u3001\u6B21\u6309\u94AE\u3001\u865A\u7EBF\u6309\u94AE\u3001\u6587\u672C\u6309\u94AE\u548C\u94FE\u63A5\u6309\u94AE\u3002\u4E3B\u6309\u94AE\u5728\u540C\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u6700\u591A\u51FA\u73B0\u4E00\u6B21\u3002\n</cn>\n\n<us>\n#### Type\nThere are `primary` button, `default` button, `dashed` button , `danger` button and `link` button in antd.\n</us>\n";const k={},E=e("Primary"),N=e("Default"),V=e("Dashed"),W=e("Danger"),j=e("\u6309\u94AE"),H=e("\u6309\u94AE"),K=e("Link");function U(i,u){const o=d("a-button"),b=d("a-config-provider");return c(),p(m,null,[t(o,{type:"primary"},{default:n(()=>[E]),_:1}),t(o,null,{default:n(()=>[N]),_:1}),t(o,{type:"dashed"},{default:n(()=>[V]),_:1}),t(o,{type:"danger"},{default:n(()=>[W]),_:1}),t(b,{"auto-insert-space-in-button":!1},{default:n(()=>[t(o,{type:"primary"},{default:n(()=>[j]),_:1})]),_:1}),t(o,{type:"primary"},{default:n(()=>[H]),_:1}),t(o,{type:"link"},{default:n(()=>[K]),_:1})],64)}k.render=U;var Q=k,X=`<template>
  <a-button type="primary">Primary</a-button>
  <a-button>Default</a-button>
  <a-button type="dashed">Dashed</a-button>
  <a-button type="danger">Danger</a-button>
  <a-config-provider :auto-insert-space-in-button="false">
    <a-button type="primary">\u6309\u94AE</a-button>
  </a-config-provider>
  <a-button type="primary">\u6309\u94AE</a-button>
  <a-button type="link">Link</a-button>
</template>
`,Y="<cn>\n#### \u6309\u94AE\u7EC4\u5408\n\u6309\u94AE\u7EC4\u5408\u4F7F\u7528\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 1 \u4E2A\u4E3B\u64CD\u4F5C + n \u4E2A\u6B21\u64CD\u4F5C\uFF0C3 \u4E2A\u4EE5\u4E0A\u64CD\u4F5C\u65F6\u628A\u66F4\u591A\u64CD\u4F5C\u653E\u5230 Dropdown.Button \u4E2D\u7EC4\u5408\u4F7F\u7528\u3002\n</cn>\n\n<us>\n#### Button Group\nButtons can be grouped by placing multiple `Button` components into a `Button.Group`.\nThe `size` can be set to `large`, `small` or left unset resulting in a default size.\n</us>\n";const S={components:{FullscreenExitOutlined:P,SearchOutlined:g,LeftOutlined:y,RightOutlined:f}},q={id:"components-button-demo-button-group"},J=t("h4",null,"Basic",-1),Z=e("Cancel"),tt=e(" OK "),nt=e(" L "),et=e(" M "),ot=e(" R "),at=e(" L "),dt=e("M"),it=e("M"),rt=e(" R "),lt=t("h4",null,"With Icon",-1),ut=e(" Go back "),st=e(" Go forward");function ct(i,u,o,b,l,h){const a=d("a-button"),r=d("a-button-group"),s=d("LeftOutlined"),_=d("RightOutlined"),R=d("SearchOutlined"),I=d("FullscreenExitOutlined");return c(),p("div",q,[J,t(r,null,{default:n(()=>[t(a,null,{default:n(()=>[Z]),_:1}),t(a,{type:"primary"},{default:n(()=>[tt]),_:1})]),_:1}),t(r,null,{default:n(()=>[t(a,{disabled:""},{default:n(()=>[nt]),_:1}),t(a,{disabled:""},{default:n(()=>[et]),_:1}),t(a,{disabled:""},{default:n(()=>[ot]),_:1})]),_:1}),t(r,null,{default:n(()=>[t(a,{type:"primary"},{default:n(()=>[at]),_:1}),t(a,null,{default:n(()=>[dt]),_:1}),t(a,null,{default:n(()=>[it]),_:1}),t(a,{type:"dashed"},{default:n(()=>[rt]),_:1})]),_:1}),lt,t(r,null,{default:n(()=>[t(a,{type:"primary"},{icon:n(()=>[t(s)]),default:n(()=>[ut]),_:1}),t(a,{type:"primary"},{icon:n(()=>[t(_)]),default:n(()=>[st]),_:1})]),_:1}),t(r,null,{default:n(()=>[t(a,{type:"primary"},{icon:n(()=>[t(R)]),_:1}),t(a,{type:"primary"},{icon:n(()=>[t(I)]),_:1})]),_:1})])}S.render=ct;var pt=S,_t=`<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary">
        OK
      </a-button>
    </a-button-group>
    <a-button-group>
      <a-button disabled>
        L
      </a-button>
      <a-button disabled>
        M
      </a-button>
      <a-button disabled>
        R
      </a-button>
    </a-button-group>
    <a-button-group>
      <a-button type="primary">
        L
      </a-button>
      <a-button>M</a-button>
      <a-button>M</a-button>
      <a-button type="dashed">
        R
      </a-button>
    </a-button-group>

    <h4>With Icon</h4>
    <a-button-group>
      <a-button type="primary">
        <template #icon><LeftOutlined /></template>
        Go back
      </a-button>
      <a-button type="primary"><template #icon><RightOutlined /></template> Go forward</a-button>
    </a-button-group>
    <a-button-group>
      <a-button type="primary">
        <template #icon><SearchOutlined /></template>
      </a-button>
      <a-button type="primary">
        <template #icon><FullscreenExitOutlined /></template>
      </a-button>
    </a-button-group>
  </div>
</template>

<script>
import { SearchOutlined, LeftOutlined, RightOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    FullscreenExitOutlined,
    SearchOutlined,
    LeftOutlined,
    RightOutlined,
  },
};
<\/script>

<style>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>
`,bt=`<cn>
#### \u4E0D\u53EF\u7528\u72B6\u6001
\u6DFB\u52A0 \`disabled\` \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u540C\u65F6\u6309\u94AE\u6837\u5F0F\u4E5F\u4F1A\u6539\u53D8\u3002
</cn>

<us>
#### Disabled
To mark a button as disabled, add the \`disabled\` property to the \`Button\`.
</us>
`;const D={},ht=e("Primary"),mt=e("Primary(disabled)"),gt=t("br",null,null,-1),yt=e("Default"),ft=e("Default(disabled)"),$t=t("br",null,null,-1),vt=e("Dashed"),zt=e("Dashed(disabled)"),kt=t("br",null,null,-1),St=e("Link"),Dt=e("Link(disabled)"),Ot=e("Ghost"),Lt=e("Ghost(disabled)");function xt(i,u){const o=d("a-button");return c(),p(m,null,[t(o,{type:"primary"},{default:n(()=>[ht]),_:1}),t(o,{type:"primary",disabled:""},{default:n(()=>[mt]),_:1}),gt,t(o,null,{default:n(()=>[yt]),_:1}),t(o,{disabled:""},{default:n(()=>[ft]),_:1}),$t,t(o,{type:"dashed"},{default:n(()=>[vt]),_:1}),t(o,{type:"dashed",disabled:""},{default:n(()=>[zt]),_:1}),kt,t(o,{type:"link"},{default:n(()=>[St]),_:1}),t(o,{type:"link",disabled:""},{default:n(()=>[Dt]),_:1}),t("div",{style:{padding:"8px 8px 0 8px",background:"rgb(190, 200, 200)"}},[t(o,{ghost:""},{default:n(()=>[Ot]),_:1}),t(o,{ghost:"",disabled:""},{default:n(()=>[Lt]),_:1})],4)],64)}D.render=xt;var Ct=D,Bt=`<template>
  <a-button type="primary">Primary</a-button>
  <a-button type="primary" disabled>Primary(disabled)</a-button>
  <br />
  <a-button>Default</a-button>
  <a-button disabled>Default(disabled)</a-button>
  <br />
  <a-button type="dashed">Dashed</a-button>
  <a-button type="dashed" disabled>Dashed(disabled)</a-button>
  <br />
  <a-button type="link">Link</a-button>
  <a-button type="link" disabled>Link(disabled)</a-button>
  <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
    <a-button ghost>Ghost</a-button>
    <a-button ghost disabled>Ghost(disabled)</a-button>
  </div>
</template>
`,wt=`<cn>
#### \u5E7D\u7075\u6309\u94AE
\u5E7D\u7075\u6309\u94AE\u5C06\u6309\u94AE\u7684\u5185\u5BB9\u53CD\u8272\uFF0C\u80CC\u666F\u53D8\u4E3A\u900F\u660E\uFF0C\u5E38\u7528\u5728\u6709\u8272\u80CC\u666F\u4E0A\u3002
</cn>

<us>
#### Ghost Button
\`ghost\` property will make button's background transparent, it is common used in colored background.
</us>
`;const O={},Gt=e("Primary"),Rt=e("Default"),It=e("Dashed"),Pt=e("Danger"),At=e("Link");function Tt(i,u){const o=d("a-button");return c(),p("div",{style:{background:"rgb(190, 200, 200)",padding:"26px 16px 16px"}},[t(o,{type:"primary",ghost:""},{default:n(()=>[Gt]),_:1}),t(o,{ghost:""},{default:n(()=>[Rt]),_:1}),t(o,{type:"dashed",ghost:""},{default:n(()=>[It]),_:1}),t(o,{type:"danger",ghost:""},{default:n(()=>[Pt]),_:1}),t(o,{type:"link",ghost:""},{default:n(()=>[At]),_:1})],4)}O.render=Tt;var Ft=O,Mt=`<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <a-button type="primary" ghost>Primary</a-button>
    <a-button ghost>Default</a-button>
    <a-button type="dashed" ghost>Dashed</a-button>
    <a-button type="danger" ghost>Danger</a-button>
    <a-button type="link" ghost>Link</a-button>
  </div>
</template>
`,Et="<cn>\n#### \u56FE\u6807\u6309\u94AE\n\u5F53\u9700\u8981\u5728 `Button` \u5185\u5D4C\u5165 `Icon` \u65F6\uFF0C\u76F4\u63A5 `slot` \u540D\u5B57\u4E3A `icon`\u3002\n</cn>\n\n<us>\n#### Icon\nWhen you need to embed `icon` in `button`, the direct `slot` name is `icon `.\n</us>\n";const L={components:{SearchOutlined:g}},Nt=e("A"),Vt=e(" Search "),Wt=e(" Search "),jt=e(" Search "),Ht=e(" Search ");function Kt(i,u,o,b,l,h){const a=d("SearchOutlined"),r=d("a-button");return c(),p(m,null,[t(r,{type:"primary",shape:"circle"},{icon:n(()=>[t(a)]),_:1}),t(r,{type:"primary",shape:"circle"},{default:n(()=>[Nt]),_:1}),t(r,{type:"primary"},{icon:n(()=>[t(a)]),default:n(()=>[Vt]),_:1}),t(r,{shape:"circle"},{icon:n(()=>[t(a)]),_:1}),t(r,null,{icon:n(()=>[t(a)]),default:n(()=>[Wt]),_:1}),t(r,{shape:"circle"},{icon:n(()=>[t(a)]),_:1}),t(r,null,{icon:n(()=>[t(a)]),default:n(()=>[jt]),_:1}),t(r,{type:"dashed",shape:"circle"},{icon:n(()=>[t(a)]),_:1}),t(r,{type:"dashed"},{icon:n(()=>[t(a)]),default:n(()=>[Ht]),_:1})],64)}L.render=Kt;var Ut=L,Qt=`<template>
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="primary" shape="circle">A</a-button>
  <a-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SearchOutlined,
  },
};
<\/script>
`,Xt=`<cn>
#### \u52A0\u8F7D\u4E2D\u72B6\u6001
\u6DFB\u52A0 \`loading\` \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u6700\u540E\u4E24\u4E2A\u6309\u94AE\u6F14\u793A\u70B9\u51FB\u540E\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\u3002
</cn>

<us>
#### Loading
A loading indicator can be added to a button by setting the \`loading\` property on the \`Button\`.
</us>
`,x=$({setup(){const i=v(!1),u=()=>{i.value={delay:1e3}};return{loading:v(!1),iconLoading:i,enterIconLoading:u}}});const Yt=e("Loading"),qt=e("Loading"),Jt=t("br",null,null,-1),Zt=e("mouseenter me!"),tn=e(" \u5EF6\u8FDF1s "),nn=t("br",null,null,-1);function en(i,u,o,b,l,h){const a=d("a-button");return c(),p(m,null,[t(a,{type:"primary",loading:""},{default:n(()=>[Yt]),_:1}),t(a,{type:"primary",size:"small",loading:""},{default:n(()=>[qt]),_:1}),Jt,t(a,{type:"primary",loading:i.loading,onMouseenter:u[1]||(u[1]=r=>i.loading=!0)},{default:n(()=>[Zt]),_:1},8,["loading"]),t(a,{type:"primary",icon:"poweroff",loading:i.iconLoading,onClick:i.enterIconLoading},{default:n(()=>[tn]),_:1},8,["loading","onClick"]),nn,t(a,{type:"primary",loading:""}),t(a,{type:"primary",shape:"circle",loading:""}),t(a,{type:"danger",shape:"round",loading:""})],64)}x.render=en;var on=`<template>
  <a-button type="primary" loading>Loading</a-button>
  <a-button type="primary" size="small" loading>Loading</a-button>
  <br />
  <a-button type="primary" :loading="loading" @mouseenter="loading = true">mouseenter me!</a-button>
  <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
    \u5EF6\u8FDF1s
  </a-button>
  <br />
  <a-button type="primary" loading />
  <a-button type="primary" shape="circle" loading />
  <a-button type="danger" shape="round" loading />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface DelayLoading {
  delay: number;
}
export default defineComponent({
  setup() {
    const iconLoading = ref<boolean | DelayLoading>(false);
    const enterIconLoading = () => {
      iconLoading.value = { delay: 1000 };
    };
    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
    };
  },
});
<\/script>
`,an="<cn>\n#### \u6309\u94AE\u5C3A\u5BF8\n\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002\n\u901A\u8FC7\u8BBE\u7F6E `size` \u4E3A `large` `small` \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E `size`\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002\n</cn>\n\n<us>\n#### Size\nAnt Design supports a default button size as well as a large and small size.\nIf a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.\n</us>\n";const C={components:{ARadioGroup:z.Group,ARadioButton:z.Button,LeftOutlined:y,RightOutlined:f,DownloadOutlined:A},data(){return{size:"large"}},methods:{handleSizeChange(i){this.size=i.target.value}}},dn=e(" Large "),rn=e(" Default "),ln=e(" Small "),un=t("br",null,null,-1),sn=t("br",null,null,-1),cn=e(" Primary "),pn=e(" Normal "),_n=e(" Dashed "),bn=e(" Danger "),hn=e(" Link "),mn=t("br",null,null,-1),gn=e("Download"),yn=e(" Download "),fn=t("br",null,null,-1);function $n(i,u,o,b,l,h){const a=d("a-radio-button"),r=d("a-radio-group"),s=d("a-button"),_=d("DownloadOutlined");return c(),p("div",null,[t(r,{value:l.size,onChange:h.handleSizeChange},{default:n(()=>[t(a,{value:"large"},{default:n(()=>[dn]),_:1}),t(a,{value:"default"},{default:n(()=>[rn]),_:1}),t(a,{value:"small"},{default:n(()=>[ln]),_:1})]),_:1},8,["value","onChange"]),un,sn,t(s,{type:"primary",size:l.size},{default:n(()=>[cn]),_:1},8,["size"]),t(s,{size:l.size},{default:n(()=>[pn]),_:1},8,["size"]),t(s,{type:"dashed",size:l.size},{default:n(()=>[_n]),_:1},8,["size"]),t(s,{type:"danger",size:l.size},{default:n(()=>[bn]),_:1},8,["size"]),t(s,{type:"link",size:l.size},{default:n(()=>[hn]),_:1},8,["size"]),mn,t(s,{type:"primary",size:l.size},{icon:n(()=>[t(_)]),_:1},8,["size"]),t(s,{type:"primary",shape:"circle",size:l.size},{icon:n(()=>[t(_)]),_:1},8,["size"]),t(s,{type:"primary",shape:"round",size:l.size},{icon:n(()=>[t(_)]),default:n(()=>[gn]),_:1},8,["size"]),t(s,{type:"primary",shape:"round",size:l.size},{icon:n(()=>[t(_)]),_:1},8,["size"]),t(s,{type:"primary",size:l.size},{icon:n(()=>[t(_)]),default:n(()=>[yn]),_:1},8,["size"]),fn])}C.render=$n;var vn=C,zn=`<template>
  <div>
    <a-radio-group :value="size" @change="handleSizeChange">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br><br>
    <a-button type="primary" :size="size">
      Primary
    </a-button>
    <a-button :size="size">
      Normal
    </a-button>
    <a-button type="dashed" :size="size">
      Dashed
    </a-button>
    <a-button type="danger" :size="size">
      Danger
    </a-button>
    <a-button type="link" :size="size">
      Link
    </a-button>
    <br>
    <a-button type="primary" :size="size">
        <template #icon><DownloadOutlined /></template>
    </a-button>
    <a-button type="primary" shape="circle" :size="size">
        <template #icon><DownloadOutlined /></template>
    </a-button>
    <a-button type="primary" shape="round" :size="size">
      <template #icon><DownloadOutlined /></template>Download</a-button>
    <a-button type="primary" shape="round" :size="size">
        <template #icon><DownloadOutlined /></template>
    </a-button>
    <a-button type="primary" :size="size">
      <template #icon><DownloadOutlined /></template>
      Download
    </a-button>
    <br>
  </div>
</template>
<script>
  import { LeftOutlined, RightOutlined, DownloadOutlined } from '@ant-design/icons-vue';
  import { default as Radio } from '@@radio';

  export default {
    components: {
      ARadioGroup: Radio.Group,
      ARadioButton: Radio.Button,
      LeftOutlined,
      RightOutlined,
      DownloadOutlined,
    },
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
<\/script>
`,kn=`<cn>
#### block \u6309\u94AE
\`block\` \u5C5E\u6027\u5C06\u4F7F\u6309\u94AE\u9002\u5408\u5176\u7236\u5BBD\u5EA6\u3002
</cn>

<us>
#### block Button
\`block\` property will make the button fit to its parent width.
</us>
`;const B={},Sn=e("Primary"),Dn=e("Default"),On=e("Dashed"),Ln=e("Danger"),xn=e("Link");function Cn(i,u){const o=d("a-button");return c(),p(m,null,[t(o,{type:"primary",block:""},{default:n(()=>[Sn]),_:1}),t(o,{block:""},{default:n(()=>[Dn]),_:1}),t(o,{type:"dashed",block:""},{default:n(()=>[On]),_:1}),t(o,{type:"danger",block:""},{default:n(()=>[Ln]),_:1}),t(o,{type:"link",block:""},{default:n(()=>[xn]),_:1})],64)}B.render=Cn;var Bn=B,wn=`<template>
  <a-button type="primary" block>Primary</a-button>
  <a-button block>Default</a-button>
  <a-button type="dashed" block>Dashed</a-button>
  <a-button type="danger" block>Danger</a-button>
  <a-button type="link" block>Link</a-button>
</template>
`,Gn=`<cn>
#### \u590D\u5236
\u8C03\u7528\u5185\u7F6E\u65B9\u6CD5\u5373\u53EF\u3002
</cn>

<us>
#### Copy
copy.
</us>
`,w=$({methods:{buttonClick(){F.copy("water is best!"),this.$message.success("\u590D\u5236\u6210\u529F")}}});const Rn=e("\u590D\u5236");function In(i,u,o,b,l,h){const a=d("a-button");return c(),p(a,{onClick:i.buttonClick},{default:n(()=>[Rn]),_:1},8,["onClick"])}w.render=In;var Pn=`<template>
  <a-button @click="buttonClick">\u590D\u5236</a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { utils } from '@fe6/water-pro';

export default defineComponent({
  methods: {
    buttonClick() {
      utils.copy('water is best!');
      (this as any).$message.success('\u590D\u5236\u6210\u529F');
    },
  },
});
<\/script>
`;const An={class:"markdown-body"},Tn=T('<h2>API</h2><p>\u901A\u8FC7\u8BBE\u7F6E Button \u7684\u5C5E\u6027\u6765\u4EA7\u751F\u4E0D\u540C\u7684\u6309\u94AE\u6837\u5F0F\uFF0C\u63A8\u8350\u987A\u5E8F\u4E3A\uFF1A<code>type</code> -&gt; <code>shape</code> -&gt; <code>size</code> -&gt; <code>loading</code> -&gt; <code>disabled</code>\u3002</p><p>\u6309\u94AE\u7684\u5C5E\u6027\u8BF4\u660E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>disabled</td><td>\u6309\u94AE\u5931\u6548\u72B6\u6001</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>ghost</td><td>\u5E7D\u7075\u5C5E\u6027\uFF0C\u4F7F\u6309\u94AE\u80CC\u666F\u900F\u660E</td><td>boolean</td><td>false</td><td></td></tr><tr><td>htmlType</td><td>\u8BBE\u7F6E <code>button</code> \u539F\u751F\u7684 <code>type</code> \u503C\uFF0C\u53EF\u9009\u503C\u8BF7\u53C2\u8003 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTML \u6807\u51C6</a></td><td>string</td><td><code>button</code></td><td></td></tr><tr><td>icon</td><td>\u8BBE\u7F6E\u6309\u94AE\u7684\u56FE\u6807\u7C7B\u578B</td><td>v-slot</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001</td><td>boolean | { delay: number }</td><td><code>false</code></td><td></td></tr><tr><td>shape</td><td>\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>circle</code>\u3001 <code>round</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td>-</td><td></td></tr><tr><td>color</td><td>\u5F53 type=link \u7684\u65F6\u5019\u5B57\u4F53\u989C\u8272\u8BBE\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>default</code> <code>danger</code></td><td>string</td><td><code>default</code></td><td>3.17.0</td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>type</td><td>\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>primary</code> <code>dashed</code> <code>danger</code> <code>link</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>block</td><td>\u5C06\u6309\u94AE\u5BBD\u5EA6\u8C03\u6574\u4E3A\u5176\u7236\u5BBD\u5EA6\u7684\u9009\u9879</td><td>boolean</td><td><code>false</code></td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03</td><td>(event) =&gt; void</td><td></td></tr></tbody></table><p>\u652F\u6301\u539F\u751F button \u7684\u5176\u4ED6\u6240\u6709\u5C5E\u6027\u3002</p><h2>FAQ</h2><h3>\u5982\u4F55\u79FB\u9664 2 \u4E2A\u6C49\u5B57\u4E4B\u95F4\u7684\u7A7A\u683C</h3><p>\u8BBE\u7F6E <a href="/components/config-provider/#API">ConfigProvider</a> \u7684 <code>autoInsertSpaceInButton</code> \u4E3A <code>false</code>\u3002</p>',10),Fn={expose:[],setup(i){return(u,o)=>(c(),p("div",An,[Tn]))}};var Mn=Fn;const G={cn:`# Button \u6309\u94AE
          \u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002
          ## \u4F55\u65F6\u4F7F\u7528
          \u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002

          \u5728 Ant Design Vue \u4E2D\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E94\u79CD\u6309\u94AE\u3002

          - \u4E3B\u6309\u94AE\uFF1A\u7528\u4E8E\u4E3B\u884C\u52A8\u70B9\uFF0C\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u53EA\u80FD\u6709\u4E00\u4E2A\u4E3B\u6309\u94AE\u3002
          - \u9ED8\u8BA4\u6309\u94AE\uFF1A\u7528\u4E8E\u6CA1\u6709\u4E3B\u6B21\u4E4B\u5206\u7684\u4E00\u7EC4\u884C\u52A8\u70B9\u3002
          - \u865A\u7EBF\u6309\u94AE\uFF1A\u5E38\u7528\u4E8E\u6DFB\u52A0\u64CD\u4F5C\u3002
          - \u6587\u672C\u6309\u94AE\uFF1A\u7528\u4E8E\u6700\u6B21\u7EA7\u7684\u884C\u52A8\u70B9\u3002
          - \u94FE\u63A5\u6309\u94AE\uFF1A\u7528\u4E8E\u4F5C\u4E3A\u5916\u94FE\u7684\u884C\u52A8\u70B9\u3002

          \u4EE5\u53CA\u56DB\u79CD\u72B6\u6001\u5C5E\u6027\u4E0E\u4E0A\u9762\u914D\u5408\u4F7F\u7528\u3002
          - \u5371\u9669\uFF1A\u5220\u9664/\u79FB\u52A8/\u4FEE\u6539\u6743\u9650\u7B49\u5371\u9669\u64CD\u4F5C\uFF0C\u4E00\u822C\u9700\u8981\u4E8C\u6B21\u786E\u8BA4\u3002
          - \u5E7D\u7075\uFF1A\u7528\u4E8E\u80CC\u666F\u8272\u6BD4\u8F83\u590D\u6742\u7684\u5730\u65B9\uFF0C\u5E38\u7528\u5728\u9996\u9875/\u4EA7\u54C1\u9875\u7B49\u5C55\u793A\u573A\u666F\u3002
          - \u7981\u7528\uFF1A\u884C\u52A8\u70B9\u4E0D\u53EF\u7528\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u9700\u8981\u6587\u6848\u89E3\u91CA\u3002
          - \u52A0\u8F7D\u4E2D\uFF1A\u7528\u4E8E\u5F02\u6B65\u64CD\u4F5C\u7B49\u5F85\u53CD\u9988\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u907F\u514D\u591A\u6B21\u63D0\u4EA4\u3002

          ## \u7EC4\u4EF6\u6CE8\u518C
          \`\`\`js
          import { Button } from '@fe6/water-pro';
          Vue.use(Button);
          \`\`\`
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Button
          To trigger an operation.
          ## When To Use
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
          ## Component Registration
          \`\`\`js
          import { Button } from '@fe6/water-pro';
          Vue.use(Button);
          \`\`\`
          ## Examples
          `};var Vn={category:"Components",type:"General",zhType:"\u901A\u7528",title:"Button",subtitle:"\u6309\u94AE",render(){return t("div",null,[t(d("Md"),{cn:G.cn,us:G.us},null),t(d("demo-sort"),null,{default:()=>[t(d("demo-container"),{api:M,code:X},{default:()=>[t(Q,null,null)]}),t(d("demo-container"),{api:Y,code:_t},{default:()=>[t(pt,null,null)]}),t(d("demo-container"),{api:bt,code:Bt},{default:()=>[t(Ct,null,null)]}),t(d("demo-container"),{api:wt,code:Mt},{default:()=>[t(Ft,null,null)]}),t(d("demo-container"),{api:Et,code:Qt},{default:()=>[t(Ut,null,null)]}),t(d("demo-container"),{api:Xt,code:on},{default:()=>[t(x,null,null)]}),t(d("demo-container"),{api:an,code:zn},{default:()=>[t(vn,null,null)]}),t(d("demo-container"),{api:kn,code:wn},{default:()=>[t(Bn,null,null)]}),t(d("demo-container"),{api:Gn,code:Pn},{default:()=>[t(w,null,null)]})]}),t(d("api"),null,{default:()=>[t(Mn,null,null)]})])}};export{Vn as default};

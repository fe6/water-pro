import{d as k,P as v,Y as t,bw as p,bx as _,by as e,b as n,cd as b,D as d,bP as T,bG as V,bH as H,bI as L,k as R,F as C,bV as E,bz as P,c8 as j,bO as A}from"./vendor.846be9ce.js";var $=k({components:{DownOutlined:v}});const F=d(" Hover me "),z=n("a",{href:"javascript:;"},"1st menu item",-1),q=n("a",{href:"javascript:;"},"2nd menu item",-1),W=n("a",{href:"javascript:;"},"3rd menu item",-1);function Y(l,a,u,h,f,w){const i=t("DownOutlined"),o=t("a-menu-item"),r=t("a-menu"),c=t("a-dropdown");return p(),_(c,null,{overlay:e(()=>[n(r,null,{default:e(()=>[n(o,null,{default:e(()=>[z]),_:1}),n(o,null,{default:e(()=>[q]),_:1}),n(o,null,{default:e(()=>[W]),_:1})]),_:1})]),default:e(()=>[n("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=b(()=>{},["prevent"]))},[F,n(i)])]),_:1})}$.render=Y;var G=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002
</cn>

<us>
#### Basic
The most basic dropdown menu.
</us>
`,J=`<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
});
<\/script>
`;const O={},K=n("div",{style:{textAlign:"center",background:"#f7f7f7",height:"200px",lineHeight:"200px",color:"#777"}}," Right Click on here ",-1),Q=d("1st menu item"),X=d("2nd menu item"),Z=d("3rd menu item");function nn(l,a){const u=t("a-menu-item"),h=t("a-menu"),f=t("a-dropdown");return p(),_(f,{trigger:["contextmenu"]},{overlay:e(()=>[n(h,null,{default:e(()=>[n(u,{key:"1"},{default:e(()=>[Q]),_:1}),n(u,{key:"2"},{default:e(()=>[X]),_:1}),n(u,{key:"3"},{default:e(()=>[Z]),_:1})]),_:1})]),default:e(()=>[K]),_:1})}O.render=nn;var en=O,tn=`<cn>
#### \u53F3\u952E\u83DC\u5355
\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002
</cn>

<us>
#### Context Menu
The default trigger mode is \`hover\`, you can change it to \`contextMenu\`.
</us>
`,on=`<template>
  <a-dropdown :trigger="['contextmenu']">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        lineHeight: '200px',
        color: '#777',
      }"
    >
      Right Click on here
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
`,g=k({setup(){return{handleButtonClick:u=>{console.log("click left button",u)},handleMenuClick:u=>{console.log("click",u)}}},components:{UserOutlined:T,DownOutlined:v}});const m=L();V("data-v-2da01640");const dn={class:"demo-dropdown-wrap"},an=d(" Dropdown "),mn=d(" 1st menu item "),ln=d(" 2nd menu item "),rn=d(" 3rd item "),un=d(" Dropdown "),cn=d(" 1st menu item "),sn=d(" 2nd menu item "),pn=d(" 3rd item "),_n=d(" Dropdown "),hn=d(" 1st menu item "),fn=d(" 2nd menu item "),kn=d(" 3rd item "),wn=d(" 1st menu item "),vn=d(" 2nd menu item "),bn=d(" 3rd item "),yn=d(" Button ");H();const gn=m((l,a,u,h,f,w)=>{const i=t("UserOutlined"),o=t("a-menu-item"),r=t("a-menu"),c=t("a-dropdown-button"),s=t("DownOutlined"),y=t("a-button"),N=t("a-dropdown");return p(),_("div",dn,[n(c,{onClick:l.handleButtonClick},{overlay:m(()=>[n(r,{onClick:l.handleMenuClick},{default:m(()=>[n(o,{key:"1"},{default:m(()=>[n(i),mn]),_:1}),n(o,{key:"2"},{default:m(()=>[n(i),ln]),_:1}),n(o,{key:"3"},{default:m(()=>[n(i),rn]),_:1})]),_:1},8,["onClick"])]),default:m(()=>[an]),_:1},8,["onClick"]),n(c,null,{overlay:m(()=>[n(r,{onClick:l.handleMenuClick},{default:m(()=>[n(o,{key:"1"},{default:m(()=>[n(i),cn]),_:1}),n(o,{key:"2"},{default:m(()=>[n(i),sn]),_:1}),n(o,{key:"3"},{default:m(()=>[n(i),pn]),_:1})]),_:1},8,["onClick"])]),icon:m(()=>[n(i)]),default:m(()=>[un]),_:1}),n(c,{disabled:"",onClick:l.handleButtonClick},{overlay:m(()=>[n(r,{onClick:l.handleMenuClick},{default:m(()=>[n(o,{key:"1"},{default:m(()=>[n(i),hn]),_:1}),n(o,{key:"2"},{default:m(()=>[n(i),fn]),_:1}),n(o,{key:"3"},{default:m(()=>[n(i),kn]),_:1})]),_:1},8,["onClick"])]),default:m(()=>[_n]),_:1},8,["onClick"]),n(N,null,{overlay:m(()=>[n(r,{onClick:l.handleMenuClick},{default:m(()=>[n(o,{key:"1"},{default:m(()=>[n(i),wn]),_:1}),n(o,{key:"2"},{default:m(()=>[n(i),vn]),_:1}),n(o,{key:"3"},{default:m(()=>[n(i),bn]),_:1})]),_:1},8,["onClick"])]),default:m(()=>[n(y,null,{default:m(()=>[yn,n(s)]),_:1})]),_:1})])});g.render=gn;g.__scopeId="data-v-2da01640";var Cn=`<cn>
#### \u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE
\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E \`icon\` \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002
</cn>

<us>
#### Button with dropdown menu
A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.
</us>
`,$n=`<template>
  <div class="demo-dropdown-wrap">
    <a-dropdown-button @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
    <a-dropdown-button>
      Dropdown
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
      <template #icon><UserOutlined /></template>
    </a-dropdown-button>
    <a-dropdown-button disabled @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        Button
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const handleButtonClick = (e: Event) => {
      console.log('click left button', e);
    };
    const handleMenuClick = (e: Event) => {
      console.log('click', e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },
  components: {
    UserOutlined,
    DownOutlined,
  },
});
<\/script>
<style lang="less" scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`,D=k({setup(){return{onClick:({key:a})=>{console.log(`Click on item ${a}`)}}},components:{DownOutlined:v}});const On=d(" Hover me, Click menu item "),Dn=d("1st menu item"),Mn=d("2nd menu item"),xn=d("3rd menu item");function Sn(l,a,u,h,f,w){const i=t("DownOutlined"),o=t("a-menu-item"),r=t("a-menu"),c=t("a-dropdown");return p(),_(c,null,{overlay:e(()=>[n(r,{onClick:l.onClick},{default:e(()=>[n(o,{key:"1"},{default:e(()=>[Dn]),_:1}),n(o,{key:"2"},{default:e(()=>[Mn]),_:1}),n(o,{key:"3"},{default:e(()=>[xn]),_:1})]),_:1},8,["onClick"])]),default:e(()=>[n("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=b(()=>{},["prevent"]))},[On,n(i)])]),_:1})}D.render=Sn;var Bn=`<cn>
#### \u89E6\u53D1\u4E8B\u4EF6
\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002
</cn>

<us>
#### Click event
An event will be triggered when you click menu items, in which you can make different operations according to item's key.
</us>
`,Un=`<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me, Click menu item
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="onClick">
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent, VNodeChild } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}

export default defineComponent({
  setup() {
    const onClick = ({ key }: MenuInfo) => {
      console.log(\`Click on item \${key}\`);
    };
    return {
      onClick,
    };
  },
  components: {
    DownOutlined,
  },
});
<\/script>
`;const M=k({components:{DownOutlined:v}}),In=d(" Hover me "),Nn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," 1st menu item ",-1),Tn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," 2nd menu item ",-1),Vn=d("3rd menu item\uFF08disabled\uFF09");function Hn(l,a,u,h,f,w){const i=t("DownOutlined"),o=t("a-menu-item"),r=t("a-menu-divider"),c=t("a-menu"),s=t("a-dropdown");return p(),_(s,null,{overlay:e(()=>[n(c,null,{default:e(()=>[n(o,{key:"0"},{default:e(()=>[Nn]),_:1}),n(o,{key:"1"},{default:e(()=>[Tn]),_:1}),n(r),n(o,{key:"3",disabled:""},{default:e(()=>[Vn]),_:1})]),_:1})]),default:e(()=>[n("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=b(()=>{},["prevent"]))},[In,n(i)])]),_:1})}M.render=Hn;var Ln=M,Rn=`<cn>
#### \u5176\u4ED6\u5143\u7D20
\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002
</cn>

<us>
#### Other elements
Divider and disabled menu item.
</us>
`,En=`<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </a-menu-item>
        <a-menu-item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3" disabled>3rd menu item\uFF08disabled\uFF09</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lant="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
<\/script>
`,x=k({setup(){const l=R(!1);return{visible:l,handleMenuClick:u=>{u.key==="3"&&(l.value=!1)}}},components:{DownOutlined:v}});const Pn=d(" Hover me "),jn=d("Clicking me will not close the menu."),An=d("Clicking me will not close the menu also."),Fn=d("Clicking me will close the menu");function zn(l,a,u,h,f,w){const i=t("DownOutlined"),o=t("a-menu-item"),r=t("a-menu"),c=t("a-dropdown");return p(),_(c,{visible:l.visible,"onUpdate:visible":a[2]||(a[2]=s=>l.visible=s)},{overlay:e(()=>[n(r,{onClick:l.handleMenuClick},{default:e(()=>[n(o,{key:"1"},{default:e(()=>[jn]),_:1}),n(o,{key:"2"},{default:e(()=>[An]),_:1}),n(o,{key:"3"},{default:e(()=>[Fn]),_:1})]),_:1},8,["onClick"])]),default:e(()=>[n("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=b(()=>{},["prevent"]))},[Pn,n(i)])]),_:1},8,["visible"])}x.render=zn;var qn=`<cn>
#### \u83DC\u5355\u9690\u85CF\u65B9\u5F0F
\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002
</cn>

<us>
#### The way of hiding menu.
The default is to close the menu when you click on menu items, this feature can be turned off.
</us>
`,Wn=`<template>
  <a-dropdown v-model:visible="visible">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">Clicking me will not close the menu.</a-menu-item>
        <a-menu-item key="2">Clicking me will not close the menu also.</a-menu-item>
        <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref, VNodeChild } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}
export default defineComponent({
  setup() {
    const visible = ref(false);
    const handleMenuClick = (e: MenuInfo) => {
      if (e.key === '3') {
        visible.value = false;
      }
    };
    return {
      visible,
      handleMenuClick,
    };
  },
  components: {
    DownOutlined,
  },
});
<\/script>
`,S=k({setup(){return{placements:["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]}}});const Yn={id:"components-dropdown-demo-placement"},Gn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," 1st menu item ",-1),Jn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," 2nd menu item ",-1),Kn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"}," 3rd menu item ",-1),Qn={key:0};function Xn(l,a,u,h,f,w){const i=t("a-button"),o=t("a-menu-item"),r=t("a-menu"),c=t("a-dropdown");return p(),_("div",Yn,[(p(!0),_(C,null,E(l.placements,(s,y)=>(p(),_(C,{key:s},[n(c,{placement:s},{overlay:e(()=>[n(r,null,{default:e(()=>[n(o,null,{default:e(()=>[Gn]),_:1}),n(o,null,{default:e(()=>[Jn]),_:1}),n(o,null,{default:e(()=>[Kn]),_:1})]),_:1})]),default:e(()=>[n(i,null,{default:e(()=>[d(P(s),1)]),_:2},1024)]),_:2},1032,["placement"]),y===2?(p(),_("br",Qn)):j("v-if",!0)],64))),128))])}S.render=Xn;var Zn=`<cn>
#### \u5F39\u51FA\u4F4D\u7F6E
\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002
</cn>

<us>
#### Placement
Support 6 placements.
</us>
`,ne=`<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements" :key="placement">
      <a-dropdown :placement="placement">
        <a-button>{{ placement }}</a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
              </a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
              </a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
              </a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <br v-if="index === 2" />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      placements: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    };
  },
});
<\/script>
<style>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
`,B=k({components:{DownOutlined:v}});const ee=d(" Cascading menu "),te=d("1st menu item"),oe=d("2nd menu item"),de=d("3rd menu item"),ae=d("4th menu item"),ie=d("5d menu item"),me=d("6th menu item");function le(l,a,u,h,f,w){const i=t("DownOutlined"),o=t("a-menu-item"),r=t("a-sub-menu"),c=t("a-menu"),s=t("a-dropdown");return p(),_(s,null,{overlay:e(()=>[n(c,null,{default:e(()=>[n(o,null,{default:e(()=>[te]),_:1}),n(o,null,{default:e(()=>[oe]),_:1}),n(r,{key:"test",title:"sub menu"},{default:e(()=>[n(o,null,{default:e(()=>[de]),_:1}),n(o,null,{default:e(()=>[ae]),_:1})]),_:1}),n(r,{title:"disabled sub menu",disabled:""},{default:e(()=>[n(o,null,{default:e(()=>[ie]),_:1}),n(o,null,{default:e(()=>[me]),_:1})]),_:1})]),_:1})]),default:e(()=>[n("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=b(()=>{},["prevent"]))},[ee,n(i)])]),_:1})}B.render=le;var re=`<cn>
#### \u591A\u7EA7\u83DC\u5355
\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002
</cn>

<us>
#### Cascading menu
The menu has multiple levels.
</us>
`,ue=`<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Cascading menu
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>1st menu item</a-menu-item>
        <a-menu-item>2nd menu item</a-menu-item>
        <a-sub-menu key="test" title="sub menu">
          <a-menu-item>3rd menu item</a-menu-item>
          <a-menu-item>4th menu item</a-menu-item>
        </a-sub-menu>
        <a-sub-menu title="disabled sub menu" disabled>
          <a-menu-item>5d menu item</a-menu-item>
          <a-menu-item>6th menu item</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
<\/script>
`,U=k({components:{DownOutlined:v}});const ce=d(" Click me "),se=n("a",{href:"http://www.alipay.com/"},"1st menu item",-1),pe=n("a",{href:"http://www.taobao.com/"},"2nd menu item",-1),_e=d("3rd menu item");function he(l,a,u,h,f,w){const i=t("DownOutlined"),o=t("a-menu-item"),r=t("a-menu-divider"),c=t("a-menu"),s=t("a-dropdown");return p(),_(s,{trigger:["click"]},{overlay:e(()=>[n(c,null,{default:e(()=>[n(o,{key:"0"},{default:e(()=>[se]),_:1}),n(o,{key:"1"},{default:e(()=>[pe]),_:1}),n(r),n(o,{key:"3"},{default:e(()=>[_e]),_:1})]),_:1})]),default:e(()=>[n("a",{class:"ant-dropdown-link",onClick:a[1]||(a[1]=b(()=>{},["prevent"]))},[ce,n(i)])]),_:1})}U.render=he;var fe=`<cn>
#### \u89E6\u53D1\u65B9\u5F0F
\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002
</cn>

<us>
#### Trigger mode
The default trigger mode is \`hover\`, you can change it to \`click\`.
</us>
`,ke=`<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
<\/script>
`;const we={class:"markdown-body"},ve=A('<h2>API</h2><p>\u5C5E\u6027\u5982\u4E0B</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u83DC\u5355\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td></tr><tr><td>overlay(v-slot)</td><td>\u83DC\u5355</td><td><a href="/components/menu-cn">Menu</a></td><td>-</td></tr><tr><td>overlayClassName</td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td><td>string</td><td>-</td></tr><tr><td>overlayStyle</td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td><td>object</td><td>-</td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottomCenter</code> <code>bottomRight</code> <code>topLeft</code> <code>topCenter</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td></tr><tr><td>visible(v-model)</td><td>\u83DC\u5355\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td></tr></tbody></table><p><code>overlay</code> \u83DC\u5355\u4F7F\u7528 <a href="/components/menu-cn/">Menu</a>\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 <code>Menu.Item</code>\uFF0C\u5206\u5272\u7EBF <code>Menu.Divider</code>\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002</p><p>Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A <code>&lt;Menu selectable&gt;</code>.</p></blockquote><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>visibleChange</td><td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible</td><td>function(visible)</td></tr></tbody></table><h3>Dropdown.Button</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>disabled</td><td>\u83DC\u5355\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>icon</td><td>\u53F3\u4FA7\u7684 icon</td><td>VNode | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>overlay(v-slot)</td><td>\u83DC\u5355</td><td><a href="/components/menu-cn/">Menu</a></td><td>-</td><td></td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottomCenter</code> <code>bottomRight</code> <code>topLeft</code> <code>topCenter</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>size</td><td>\u6309\u94AE\u5927\u5C0F\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>string</td><td>\u2018default\u2019</td><td></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>string</td><td>\u2018default\u2019</td><td></td></tr><tr><td>visible(v-model)</td><td>\u83DC\u5355\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3>Dropdown.Button \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>Function</td></tr><tr><td>visibleChange</td><td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible</td><td>function(visible)</td></tr></tbody></table>',11),be={expose:[],setup(l){return(a,u)=>(p(),_("div",we,[ve]))}};var ye=be;const I={cn:`# \u4E0B\u62C9\u83DC\u5355
        \u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002
        ## \u4F55\u65F6\u4F7F\u7528
        \u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Dropdown
        A dropdown list.
        ## When To Use
        When there are more than a few options to choose from, you can wrap them in a \`Dropdown\`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.
        ## Examples 
        `};var Ce={category:"Components",subtitle:"\u4E0B\u62C9\u83DC\u5355",type:"Navigation",zhType:"\u5BFC\u822A",title:"Dropdown",render(){return n("div",null,[n(t("Md"),{cn:I.cn,us:I.us},null),n(t("demo-sort"),null,{default:()=>[n(t("demo-container"),{api:G,code:J},{default:()=>[n($,null,null)]}),n(t("demo-container"),{api:tn,code:on},{default:()=>[n(en,null,null)]}),n(t("demo-container"),{api:Cn,code:$n},{default:()=>[n(g,null,null)]}),n(t("demo-container"),{api:Bn,code:Un},{default:()=>[n(D,null,null)]}),n(t("demo-container"),{api:Rn,code:En},{default:()=>[n(Ln,null,null)]}),n(t("demo-container"),{api:qn,code:Wn},{default:()=>[n(x,null,null)]}),n(t("demo-container"),{api:Zn,code:ne},{default:()=>[n(S,null,null)]}),n(t("demo-container"),{api:re,code:ue},{default:()=>[n(B,null,null)]}),n(t("demo-container"),{api:fe,code:ke},{default:()=>[n(U,null,null)]})]}),n(t("api"),null,{default:()=>[n(ye,null,null)]})])}};export{Ce as default};

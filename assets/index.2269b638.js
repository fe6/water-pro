var G=Object.defineProperty,j=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var D=(t,s,l)=>s in t?G(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,$=(t,s)=>{for(var l in s||(s={}))Y.call(s,l)&&D(t,l,s[l]);if(U)for(var l of U(s))J.call(s,l)&&D(t,l,s[l]);return t},M=(t,s)=>j(t,W(s));import{d as f,k as S,b$ as b,c0 as v,br as C,Y as i,bw as k,bx as g,by as n,b as e,D as o,r as w,w as A,ao as N,c1 as X,c2 as Z,c3 as ee,c4 as ne,c5 as te,c6 as F,ar as I,bO as oe}from"./vendor.846be9ce.js";var R=f({setup(){return{current:S(["mail"])}},components:{MailOutlined:b,AppstoreOutlined:v,SettingOutlined:C}});const ie=o(" Navigation One "),se=o(" Navigation Two "),ae={class:"submenu-title-wrapper"},de=o(" Navigation Three - Submenu "),le=o("Option 1"),ue=o("Option 2"),me=o("Option 3"),pe=o("Option 4"),ce=e("a",{href:"https://antdv.com",target:"_blank",rel:"noopener noreferrer"}," Navigation Four - Link ",-1);function re(t,s,l,m,p,K){const r=i("mail-outlined"),d=i("a-menu-item"),a=i("appstore-outlined"),c=i("setting-outlined"),u=i("a-menu-item-group"),_=i("a-sub-menu"),h=i("a-menu");return k(),g(h,{selectedKeys:t.current,"onUpdate:selectedKeys":s[1]||(s[1]=O=>t.current=O),mode:"horizontal"},{default:n(()=>[e(d,{key:"mail"},{default:n(()=>[e(r),ie]),_:1}),e(d,{key:"app",disabled:""},{default:n(()=>[e(a),se]),_:1}),e(_,null,{title:n(()=>[e("span",ae,[e(c),de])]),default:n(()=>[e(u,{title:"Item 1"},{default:n(()=>[e(d,{key:"setting:1"},{default:n(()=>[le]),_:1}),e(d,{key:"setting:2"},{default:n(()=>[ue]),_:1})]),_:1}),e(u,{title:"Item 2"},{default:n(()=>[e(d,{key:"setting:3"},{default:n(()=>[me]),_:1}),e(d,{key:"setting:4"},{default:n(()=>[pe]),_:1})]),_:1})]),_:1}),e(d,{key:"alipay"},{default:n(()=>[ce]),_:1})]),_:1},8,["selectedKeys"])}R.render=re;var _e=`<cn>
#### \u9876\u90E8\u5BFC\u822A
\u6C34\u5E73\u7684\u9876\u90E8\u5BFC\u822A\u83DC\u5355\u3002
</cn>

<us>
#### Top Navigation
Horizontal top navigation menu.
</us>
`,ye=`<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <mail-outlined />
      Navigation One
    </a-menu-item>
    <a-menu-item key="app" disabled>
      <appstore-outlined />
      Navigation Two
    </a-menu-item>
    <a-sub-menu>
      <template #title>
        <span class="submenu-title-wrapper">
          <setting-outlined />
          Navigation Three - Submenu
        </span>
      </template>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3">Option 3</a-menu-item>
        <a-menu-item key="setting:4">Option 4</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`,q=f({setup(){const t=w({collapsed:!1,selectedKeys:["1"],openKeys:["sub1"],preOpenKeys:["sub1"]});A(()=>t.openKeys,(l,m)=>{t.preOpenKeys=m});const s=()=>{t.collapsed=!t.collapsed,t.openKeys=t.collapsed?[]:t.preOpenKeys};return M($({},N(t)),{toggleCollapsed:s})},components:{MenuFoldOutlined:X,MenuUnfoldOutlined:Z,PieChartOutlined:ee,MailOutlined:b,DesktopOutlined:ne,InboxOutlined:te,AppstoreOutlined:v}});const he={style:{width:"256px"}},Oe=e("span",null,"Option 1",-1),ke=e("span",null,"Option 2",-1),ge=e("span",null,"Option 3",-1),fe=e("span",null,"Navigation One",-1),be=o("Option 5"),ve=o("Option 6"),Ke=o("Option 7"),Ce=o("Option 8"),$e=e("span",null,"Navigation Two",-1),Me=o("Option 9"),Se=o("Option 10"),we=o("Option 11"),Ne=o("Option 12");function Te(t,s,l,m,p,K){const r=i("MenuUnfoldOutlined"),d=i("MenuFoldOutlined"),a=i("a-button"),c=i("PieChartOutlined"),u=i("a-menu-item"),_=i("DesktopOutlined"),h=i("InboxOutlined"),O=i("MailOutlined"),y=i("a-sub-menu"),L=i("AppstoreOutlined"),H=i("a-menu");return k(),g("div",he,[e(a,{type:"primary",onClick:t.toggleCollapsed,style:{"margin-bottom":"16px"}},{default:n(()=>[t.collapsed?(k(),g(r,{key:0})):(k(),g(d,{key:1}))]),_:1},8,["onClick"]),e(H,{mode:"inline",theme:"dark","inline-collapsed":t.collapsed,openKeys:t.openKeys,"onUpdate:openKeys":s[1]||(s[1]=T=>t.openKeys=T),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[2]||(s[2]=T=>t.selectedKeys=T)},{default:n(()=>[e(u,{key:"1"},{default:n(()=>[e(c),Oe]),_:1}),e(u,{key:"2"},{default:n(()=>[e(_),ke]),_:1}),e(u,{key:"3"},{default:n(()=>[e(h),ge]),_:1}),e(y,{key:"sub1"},{title:n(()=>[e("span",null,[e(O),fe])]),default:n(()=>[e(u,{key:"5"},{default:n(()=>[be]),_:1}),e(u,{key:"6"},{default:n(()=>[ve]),_:1}),e(u,{key:"7"},{default:n(()=>[Ke]),_:1}),e(u,{key:"8"},{default:n(()=>[Ce]),_:1})]),_:1}),e(y,{key:"sub2"},{title:n(()=>[e("span",null,[e(L),$e])]),default:n(()=>[e(u,{key:"9"},{default:n(()=>[Me]),_:1}),e(u,{key:"10"},{default:n(()=>[Se]),_:1}),e(y,{key:"sub3",title:"Submenu"},{default:n(()=>[e(u,{key:"11"},{default:n(()=>[we]),_:1}),e(u,{key:"12"},{default:n(()=>[Ne]),_:1})]),_:1})]),_:1})]),_:1},8,["inline-collapsed","openKeys","selectedKeys"])])}q.render=Te;var Ae=`<cn>
#### \u7F29\u8D77\u5185\u5D4C\u83DC\u5355
\u5185\u5D4C\u83DC\u5355\u53EF\u4EE5\u88AB\u7F29\u8D77/\u5C55\u5F00\u3002
</cn>

<us>
#### Collapsed inline menu
Inline menu could be collapsed.
</us>
`,Ie=`<template>
  <div style="width: 256px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Navigation Two</span>
          </span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
});
<\/script>
`,V=f({setup(){const t=S(["1"]),s=S(["sub1"]),l=p=>{console.log("click",p)},m=p=>{console.log("titleClick",p)};return A(()=>s,p=>{console.log("openKeys",p)}),{selectedKeys:t,openKeys:s,handleClick:l,titleClick:m}},components:{MailOutlined:b,QqOutlined:F,AppstoreOutlined:v,SettingOutlined:C}});const Ue=e("span",null,"Navigation One",-1),De=e("span",null,"Item 1",-1),Fe=o("Option 1"),Re=o("Option 2"),qe=o("Option 3"),Ve=o("Option 4"),Be=e("span",null,"Navigation Two",-1),Pe=o("Option 5"),Ee=o("Option 6"),Qe=o("Option 7"),ze=o("Option 8"),xe=e("span",null,"Navigation Three",-1),Le=o("Option 9"),He=o("Option 10"),Ge=o("Option 11"),je=o("Option 12");function We(t,s,l,m,p,K){const r=i("MailOutlined"),d=i("QqOutlined"),a=i("a-menu-item"),c=i("a-menu-item-group"),u=i("a-sub-menu"),_=i("AppstoreOutlined"),h=i("SettingOutlined"),O=i("a-menu");return k(),g(O,{id:"dddddd",style:{width:"256px"},openKeys:t.openKeys,"onUpdate:openKeys":s[1]||(s[1]=y=>t.openKeys=y),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[2]||(s[2]=y=>t.selectedKeys=y),mode:"inline",onClick:t.handleClick},{default:n(()=>[e(u,{key:"sub1",onTitleClick:t.titleClick},{title:n(()=>[e("span",null,[e(r),Ue])]),default:n(()=>[e(c,{key:"g1"},{title:n(()=>[e(d),De]),default:n(()=>[e(a,{key:"1"},{default:n(()=>[Fe]),_:1}),e(a,{key:"2"},{default:n(()=>[Re]),_:1})]),_:1}),e(c,{key:"g2",title:"Item 2"},{default:n(()=>[e(a,{key:"3"},{default:n(()=>[qe]),_:1}),e(a,{key:"4"},{default:n(()=>[Ve]),_:1})]),_:1})]),_:1},8,["onTitleClick"]),e(u,{key:"sub2",onTitleClick:t.titleClick},{title:n(()=>[e("span",null,[e(_),Be])]),default:n(()=>[e(a,{key:"5"},{default:n(()=>[Pe]),_:1}),e(a,{key:"6"},{default:n(()=>[Ee]),_:1}),e(u,{key:"sub3",title:"Submenu"},{default:n(()=>[e(a,{key:"7"},{default:n(()=>[Qe]),_:1}),e(a,{key:"8"},{default:n(()=>[ze]),_:1})]),_:1})]),_:1},8,["onTitleClick"]),e(u,{key:"sub4"},{title:n(()=>[e("span",null,[e(h),xe])]),default:n(()=>[e(a,{key:"9"},{default:n(()=>[Le]),_:1}),e(a,{key:"10"},{default:n(()=>[He]),_:1}),e(a,{key:"11"},{default:n(()=>[Ge]),_:1}),e(a,{key:"12"},{default:n(()=>[je]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","onClick"])}V.render=We;var Ye=`<cn>
#### \u5185\u5D4C\u83DC\u5355
\u5782\u76F4\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u5185\u5D4C\u5728\u83DC\u5355\u533A\u57DF\u3002
</cn>

<us>
#### Inline menu
Vertical menu with inline submenus.
</us>
`,Je=`<template>
  <a-menu
    id="dddddd"
    style="width: 256px"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @click="handleClick"
  >
    <a-sub-menu key="sub1" @titleClick="titleClick">
      <template #title>
        <span>
          <MailOutlined />
          <span>Navigation One</span>
        </span>
      </template>
      <a-menu-item-group key="g1">
        <template #title>
          <QqOutlined />
          <span>Item 1</span>
        </template>
        <a-menu-item key="1">Option 1</a-menu-item>
        <a-menu-item key="2">Option 2</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group key="g2" title="Item 2">
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-sub-menu key="sub2" @titleClick="titleClick">
      <template #title>
        <span>
          <AppstoreOutlined />
          <span>Navigation Two</span>
        </span>
      </template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub4">
      <template #title>
        <span>
          <SettingOutlined />
          <span>Navigation Three</span>
        </span>
      </template>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick = (e: Event) => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`,B=f({setup(){const t=w({rootSubmenuKeys:["sub1","sub2","sub4"],openKeys:["sub1"],selectedKeys:[]}),s=l=>{const m=l.find(p=>t.openKeys.indexOf(p)===-1);t.rootSubmenuKeys.indexOf(m)===-1?t.openKeys=l:t.openKeys=m?[m]:[]};return M($({},N(t)),{onOpenChange:s})},components:{MailOutlined:b,AppstoreOutlined:v,SettingOutlined:C}});const Xe=e("span",null,"Navigation One",-1),Ze=o("Option 1"),en=o("Option 2"),nn=o("Option 3"),tn=o("Option 4"),on=e("span",null,"Navigation Two",-1),sn=o("Option 5"),an=o("Option 6"),dn=o("Option 7"),ln=o("Option 8"),un=e("span",null,"Navigation Three",-1),mn=o("Option 9"),pn=o("Option 10"),cn=o("Option 11"),rn=o("Option 12");function _n(t,s,l,m,p,K){const r=i("MailOutlined"),d=i("a-menu-item"),a=i("a-sub-menu"),c=i("AppstoreOutlined"),u=i("SettingOutlined"),_=i("a-menu");return k(),g("div",null,[e(_,{style:{width:"256px"},mode:"inline",openKeys:t.openKeys,selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[1]||(s[1]=h=>t.selectedKeys=h),onOpenChange:t.onOpenChange},{default:n(()=>[e(a,{key:"sub1"},{title:n(()=>[e("span",null,[e(r),Xe])]),default:n(()=>[e(d,{key:"1"},{default:n(()=>[Ze]),_:1}),e(d,{key:"2"},{default:n(()=>[en]),_:1}),e(d,{key:"3"},{default:n(()=>[nn]),_:1}),e(d,{key:"4"},{default:n(()=>[tn]),_:1})]),_:1}),e(a,{key:"sub2"},{title:n(()=>[e("span",null,[e(c),on])]),default:n(()=>[e(d,{key:"5"},{default:n(()=>[sn]),_:1}),e(d,{key:"6"},{default:n(()=>[an]),_:1}),e(a,{key:"sub3",title:"Submenu"},{default:n(()=>[e(d,{key:"7"},{default:n(()=>[dn]),_:1}),e(d,{key:"8"},{default:n(()=>[ln]),_:1})]),_:1})]),_:1}),e(a,{key:"sub4"},{title:n(()=>[e("span",null,[e(u),un])]),default:n(()=>[e(d,{key:"9"},{default:n(()=>[mn]),_:1}),e(d,{key:"10"},{default:n(()=>[pn]),_:1}),e(d,{key:"11"},{default:n(()=>[cn]),_:1}),e(d,{key:"12"},{default:n(()=>[rn]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","onOpenChange"])])}B.render=_n;var yn=`<cn>
#### \u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355
\u70B9\u51FB\u83DC\u5355\uFF0C\u6536\u8D77\u5176\u4ED6\u5C55\u5F00\u7684\u6240\u6709\u83DC\u5355\uFF0C\u4FDD\u6301\u83DC\u5355\u805A\u7126\u7B80\u6D01\u3002
</cn>

<us>
#### Open current submenu only
Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.
</us>
`,hn=`<template>
  <div>
    <a-menu
      style="width: 256px"
      mode="inline"
      :openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        </template>
        <a-menu-item key="1">Option 1</a-menu-item>
        <a-menu-item key="2">Option 2</a-menu-item>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Navigation Two</span>
          </span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #title>
          <span>
            <SettingOutlined />
            <span>Navigation Three</span>
          </span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: [],
    });
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    return {
      ...toRefs(state),
      onOpenChange,
    };
  },
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`,P=f({setup(){const t=w({mode:"inline",theme:"light",selectedKeys:["1"],openKeys:["sub1"]}),s=m=>{t.mode=m?"vertical":"inline"},l=m=>{t.theme=m?"dark":"light"};return M($({},N(t)),{changeMode:s,changeTheme:l})},components:{MailOutlined:b,CalendarOutlined:I,AppstoreOutlined:v,SettingOutlined:C}});const On=o(" Change Mode "),kn=e("span",{class:"ant-divider",style:{margin:"0 1em"}},null,-1),gn=o(" Change Theme "),fn=e("br",null,null,-1),bn=e("br",null,null,-1),vn=o(" Navigation One "),Kn=o(" Navigation Two "),Cn=e("span",null,"Navigation Three",-1),$n=o("Option 3"),Mn=o("Option 4"),Sn=o("Option 5"),wn=o("Option 6"),Nn=e("span",null,"Navigation Four",-1),Tn=o("Option 7"),An=o("Option 8"),In=o("Option 9"),Un=o("Option 10");function Dn(t,s,l,m,p,K){const r=i("a-switch"),d=i("MailOutlined"),a=i("a-menu-item"),c=i("CalendarOutlined"),u=i("AppstoreOutlined"),_=i("a-sub-menu"),h=i("SettingOutlined"),O=i("a-menu");return k(),g("div",null,[e(r,{onChange:t.changeMode},null,8,["onChange"]),On,kn,e(r,{onChange:t.changeTheme},null,8,["onChange"]),gn,fn,bn,e(O,{style:{width:"256px"},openKeys:t.openKeys,"onUpdate:openKeys":s[1]||(s[1]=y=>t.openKeys=y),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[2]||(s[2]=y=>t.selectedKeys=y),mode:t.mode,theme:t.theme},{default:n(()=>[e(a,{key:"1"},{default:n(()=>[e(d),vn]),_:1}),e(a,{key:"2"},{default:n(()=>[e(c),Kn]),_:1}),e(_,{key:"sub1"},{title:n(()=>[e("span",null,[e(u),Cn])]),default:n(()=>[e(a,{key:"3"},{default:n(()=>[$n]),_:1}),e(a,{key:"4"},{default:n(()=>[Mn]),_:1}),e(_,{key:"sub1-2",title:"Submenu"},{default:n(()=>[e(a,{key:"5"},{default:n(()=>[Sn]),_:1}),e(a,{key:"6"},{default:n(()=>[wn]),_:1})]),_:1})]),_:1}),e(_,{key:"sub2"},{title:n(()=>[e("span",null,[e(h),Nn])]),default:n(()=>[e(a,{key:"7"},{default:n(()=>[Tn]),_:1}),e(a,{key:"8"},{default:n(()=>[An]),_:1}),e(a,{key:"9"},{default:n(()=>[In]),_:1}),e(a,{key:"10"},{default:n(()=>[Un]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","mode","theme"])])}P.render=Dn;var Fn=`<cn>
#### \u5207\u6362\u83DC\u5355\u7C7B\u578B
\u5C55\u793A\u52A8\u6001\u5207\u6362\u6A21\u5F0F\u3002
</cn>

<us>
#### Switch the menu type
Show the dynamic switching mode (between 'inline' and 'vertical').
</us>
`,Rn=`<template>
  <div>
    <a-switch @change="changeMode" />
    Change Mode
    <span class="ant-divider" style="margin: 0 1em" />
    <a-switch @change="changeTheme" />
    Change Theme
    <br />
    <br />
    <a-menu
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      :mode="mode"
      :theme="theme"
    >
      <a-menu-item key="1">
        <MailOutlined />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <CalendarOutlined />
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Navigation Three</span>
          </span>
        </template>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <SettingOutlined />
            <span>Navigation Four</span>
          </span>
        </template>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      mode: 'inline',
      theme: 'light',
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeMode = (checked: boolean) => {
      state.mode = checked ? 'vertical' : 'inline';
    };
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };
    return {
      ...toRefs(state),
      changeMode,
      changeTheme,
    };
  },
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`,E=f({setup(){const t=w({theme:"dark",selectedKeys:["1"],openKeys:["sub1"]}),s=l=>{t.theme=l?"dark":"light"};return M($({},N(t)),{changeTheme:s})},components:{MailOutlined:b,CalendarOutlined:I,AppstoreOutlined:v,SettingOutlined:C}});const qn=e("br",null,null,-1),Vn=e("br",null,null,-1),Bn=o(" Navigation One "),Pn=o(" Navigation Two "),En=e("span",null,"Navigation Three",-1),Qn=o("Option 3"),zn=o("Option 4"),xn=o("Option 5"),Ln=o("Option 6"),Hn=e("span",null,"Navigation Four",-1),Gn=o("Option 7"),jn=o("Option 8"),Wn=o("Option 9"),Yn=o("Option 10");function Jn(t,s,l,m,p,K){const r=i("a-switch"),d=i("MailOutlined"),a=i("a-menu-item"),c=i("CalendarOutlined"),u=i("AppstoreOutlined"),_=i("a-sub-menu"),h=i("SettingOutlined"),O=i("a-menu");return k(),g("div",null,[e(r,{checked:t.theme==="dark","checked-children":"Dark","un-checked-children":"Light",onChange:t.changeTheme},null,8,["checked","onChange"]),qn,Vn,e(O,{style:{width:"256px"},openKeys:t.openKeys,"onUpdate:openKeys":s[1]||(s[1]=y=>t.openKeys=y),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[2]||(s[2]=y=>t.selectedKeys=y),mode:"inline",theme:t.theme},{default:n(()=>[e(a,{key:"1"},{default:n(()=>[e(d),Bn]),_:1}),e(a,{key:"2"},{default:n(()=>[e(c),Pn]),_:1}),e(_,{key:"sub1"},{title:n(()=>[e("span",null,[e(u),En])]),default:n(()=>[e(a,{key:"3"},{default:n(()=>[Qn]),_:1}),e(a,{key:"4"},{default:n(()=>[zn]),_:1}),e(_,{key:"sub1-2",title:"Submenu"},{default:n(()=>[e(a,{key:"5"},{default:n(()=>[xn]),_:1}),e(a,{key:"6"},{default:n(()=>[Ln]),_:1})]),_:1})]),_:1}),e(_,{key:"sub2"},{title:n(()=>[e("span",null,[e(h),Hn])]),default:n(()=>[e(a,{key:"7"},{default:n(()=>[Gn]),_:1}),e(a,{key:"8"},{default:n(()=>[jn]),_:1}),e(a,{key:"9"},{default:n(()=>[Wn]),_:1}),e(a,{key:"10"},{default:n(()=>[Yn]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","theme"])])}E.render=Jn;var Xn=`<cn>
#### \u4E3B\u9898
\u5185\u5EFA\u4E86\u4E24\u5957\u4E3B\u9898 \`light|dark\`\uFF0C\u9ED8\u8BA4 \`light\`\u3002
</cn>

<us>
#### Menu Themes
There are two built-in themes: 'light' and 'dark'. The default value is 'light'.
</us>
`,Zn=`<template>
  <div>
    <a-switch
      :checked="theme === 'dark'"
      checked-children="Dark"
      un-checked-children="Light"
      @change="changeTheme"
    />
    <br />
    <br />
    <a-menu
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :theme="theme"
    >
      <a-menu-item key="1">
        <MailOutlined />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <CalendarOutlined />
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Navigation Three</span>
          </span>
        </template>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <SettingOutlined />
            <span>Navigation Four</span>
          </span>
        </template>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      theme: 'dark',
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };

    return {
      ...toRefs(state),
      changeTheme,
    };
  },
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`,Q=f({setup(){const t=w({selectedKeys:[],openKeys:[]}),s=l=>{console.log("click ",l)};return M($({},N(t)),{handleClick:s})},components:{MailOutlined:b,CalendarOutlined:I,AppstoreOutlined:v,SettingOutlined:C}});const et=o(" Navigation One "),nt=o(" Navigation Two "),tt=e("span",null,"Navigation Three",-1),ot=o("Option 3"),it=o("Option 4"),st=o("Option 5"),at=o("Option 6"),dt=e("span",null,"Navigation Four",-1),lt=o("Option 7"),ut=o("Option 8"),mt=o("Option 9"),pt=o("Option 10");function ct(t,s,l,m,p,K){const r=i("MailOutlined"),d=i("a-menu-item"),a=i("CalendarOutlined"),c=i("AppstoreOutlined"),u=i("a-sub-menu"),_=i("SettingOutlined"),h=i("a-menu");return k(),g(h,{openKeys:t.openKeys,"onUpdate:openKeys":s[1]||(s[1]=O=>t.openKeys=O),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[2]||(s[2]=O=>t.selectedKeys=O),style:{width:"256px"},mode:"vertical",onClick:t.handleClick},{default:n(()=>[e(d,{key:"1"},{default:n(()=>[e(r),et]),_:1}),e(d,{key:"2"},{default:n(()=>[e(a),nt]),_:1}),e(u,{key:"sub1"},{title:n(()=>[e("span",null,[e(c),tt])]),default:n(()=>[e(d,{key:"3"},{default:n(()=>[ot]),_:1}),e(d,{key:"4"},{default:n(()=>[it]),_:1}),e(u,{key:"sub1-2",title:"Submenu"},{default:n(()=>[e(d,{key:"5"},{default:n(()=>[st]),_:1}),e(d,{key:"6"},{default:n(()=>[at]),_:1})]),_:1})]),_:1}),e(u,{key:"sub2"},{title:n(()=>[e("span",null,[e(_),dt])]),default:n(()=>[e(d,{key:"7"},{default:n(()=>[lt]),_:1}),e(d,{key:"8"},{default:n(()=>[ut]),_:1}),e(d,{key:"9"},{default:n(()=>[mt]),_:1}),e(d,{key:"10"},{default:n(()=>[pt]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","onClick"])}Q.render=ct;var rt=`<cn>
#### \u5782\u76F4\u83DC\u5355
\u5B50\u83DC\u5355\u662F\u5F39\u51FA\u7684\u5F62\u5F0F\u3002
</cn>

<us>
#### Vertical menu
Submenus open as pop-ups.
</us>
`,_t=`<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <a-menu-item key="1">
      <MailOutlined />
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <CalendarOutlined />
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <AppstoreOutlined />
          <span>Navigation Three</span>
        </span>
      </template>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>
        <span>
          <SettingOutlined />
          <span>Navigation Four</span>
        </span>
      </template>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, VNodeChild } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}
export default defineComponent({
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick = (e: MenuInfo) => {
      console.log('click ', e);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`,z=f({setup(){const t=S(["1"]),s=S(["sub1"]),l=p=>{console.log("click",p)},m=p=>{console.log("titleClick",p)};return A(()=>s,p=>{console.log("openKeys",p)}),{selectedKeys:t,openKeys:s,handleClick:l,titleClick:m}},components:{MailOutlined:b,QqOutlined:F,AppstoreOutlined:v,SettingOutlined:C}});const yt=o(" Option 1 "),ht=o(" Option 2 "),Ot=o(" Option 2 ");function kt(t,s,l,m,p,K){const r=i("router-link"),d=i("a-menu-item"),a=i("a-menu");return k(),g(a,{id:"dddddd",style:{width:"256px"},openKeys:t.openKeys,"onUpdate:openKeys":s[1]||(s[1]=c=>t.openKeys=c),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":s[2]||(s[2]=c=>t.selectedKeys=c),mode:"inline",onClick:t.handleClick,selectedColor:"rgb(250, 173, 20)",selectedBgColor:"rgba(250, 173, 20, 0.1)",selectedBorderColor:"rgba(250, 173, 20, 1)"},{default:n(()=>[e(d,{key:"1"},{default:n(()=>[e(r,{to:"/"},{default:n(()=>[yt]),_:1})]),_:1}),e(d,{key:"2"},{default:n(()=>[ht]),_:1}),e(d,{key:"3"},{default:n(()=>[e(r,{to:"/"},{default:n(()=>[Ot]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys","onClick"])}z.render=kt;var gt=`<cn>
#### \u9AD8\u4EAE\u989C\u8272\u81EA\u5B9A\u4E49
\`selectColor="#fa8c16"\` && \`selectBgColor="#fff7e6"\` && \`selectBorderColor="#ffd591"\`
</cn>

<us>
#### color
TODO
</us>
`,ft=`<template>
  <a-menu
    id="dddddd"
    style="width: 256px"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @click="handleClick"
    selectedColor="rgb(250, 173, 20)"
    selectedBgColor="rgba(250, 173, 20, 0.1)"
    selectedBorderColor="rgba(250, 173, 20, 1)"
  >
    <a-menu-item key="1">
      <router-link to="/">
        Option 1
      </router-link>
    </a-menu-item>
    <a-menu-item key="2">
        Option 2
    </a-menu-item>
    <a-menu-item key="3">
      <router-link to="/">
        Option 2
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick = (e: Event) => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
<\/script>
`;const bt={class:"markdown-body"},vt=oe(`<h2>API</h2><pre><code class="language-html">&lt;template&gt;
  &lt;a-menu&gt;
    &lt;a-menu-item&gt;\u83DC\u5355\u9879&lt;/a-menu-item&gt;
    &lt;a-sub-menu title=&quot;\u5B50\u83DC\u5355&quot;&gt;
      &lt;a-menu-item&gt;\u5B50\u83DC\u5355\u9879&lt;/a-menu-item&gt;
    &lt;/a-sub-menu&gt;
  &lt;/a-menu&gt;
&lt;/template&gt;
</code></pre><h3>Menu</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>defaultOpenKeys</td><td>\u521D\u59CB\u5C55\u5F00\u7684 SubMenu \u83DC\u5355\u9879 key \u6570\u7EC4</td><td></td><td></td><td></td></tr><tr><td>defaultSelectedKeys</td><td>\u521D\u59CB\u9009\u4E2D\u7684\u83DC\u5355\u9879 key \u6570\u7EC4</td><td>string[]</td><td></td><td></td></tr><tr><td>forceSubMenuRender</td><td>\u5728\u5B50\u83DC\u5355\u5C55\u793A\u4E4B\u524D\u5C31\u6E32\u67D3\u8FDB DOM</td><td>boolean</td><td>false</td><td></td></tr><tr><td>inlineCollapsed</td><td>inline \u65F6\u83DC\u5355\u662F\u5426\u6536\u8D77\u72B6\u6001</td><td>boolean</td><td>-</td><td></td></tr><tr><td>inlineIndent</td><td>inline \u6A21\u5F0F\u7684\u83DC\u5355\u7F29\u8FDB\u5BBD\u5EA6</td><td>number</td><td>24</td><td></td></tr><tr><td>mode</td><td>\u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u652F\u6301\u5782\u76F4\u3001\u6C34\u5E73\u3001\u548C\u5185\u5D4C\u6A21\u5F0F\u4E09\u79CD</td><td>string: <code>vertical</code> <code>vertical-right</code> <code>horizontal</code> <code>inline</code></td><td><code>vertical</code></td><td></td></tr><tr><td>multiple</td><td>\u662F\u5426\u5141\u8BB8\u591A\u9009</td><td>boolean</td><td>false</td><td></td></tr><tr><td>openKeys(v-model)</td><td>\u5F53\u524D\u5C55\u5F00\u7684 SubMenu \u83DC\u5355\u9879 key \u6570\u7EC4</td><td>string[]</td><td></td><td></td></tr><tr><td>selectable</td><td>\u662F\u5426\u5141\u8BB8\u9009\u4E2D</td><td>boolean</td><td>true</td><td></td></tr><tr><td>selectedKeys(v-model)</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u83DC\u5355\u9879 key \u6570\u7EC4</td><td>string[]</td><td></td><td></td></tr><tr><td>subMenuCloseDelay</td><td>\u7528\u6237\u9F20\u6807\u79BB\u5F00\u5B50\u83DC\u5355\u540E\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\uFF1A\u79D2</td><td>number</td><td>0.1</td><td></td></tr><tr><td>subMenuOpenDelay</td><td>\u7528\u6237\u9F20\u6807\u8FDB\u5165\u5B50\u83DC\u5355\u540E\u5F00\u542F\u5EF6\u65F6\uFF0C\u5355\u4F4D\uFF1A\u79D2</td><td>number</td><td>0</td><td></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u989C\u8272</td><td>string: <code>light</code> <code>dark</code></td><td><code>light</code></td><td></td></tr><tr><td>overflowedIndicator</td><td>\u81EA\u5B9A\u4E49 Menu \u6298\u53E0\u65F6\u7684\u56FE\u6807</td><td>DOM</td><td><code>&lt;span&gt;\xB7\xB7\xB7&lt;/span&gt;</code></td><td></td></tr><tr><td>selectedColor</td><td>\u9AD8\u4EAE\u9009\u4E2D\u5B57\u4F53\u989C\u8272</td><td>string</td><td>#1890ff</td><td>3.36.0</td></tr><tr><td>selectedBgColor</td><td>\u9AD8\u4EAE\u9009\u4E2D\u80CC\u666F\u989C\u8272</td><td>string</td><td>#e6f7ff</td><td>3.36.0</td></tr><tr><td>selectedBorderColor</td><td>\u9AD8\u4EAE\u9009\u4E2D\u8FB9\u6846\u989C\u8272</td><td>string</td><td>#1890ff</td><td>3.36.0</td></tr></tbody></table><h3>Menu \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB MenuItem \u8C03\u7528\u6B64\u51FD\u6570</td><td>function({ item, key, keyPath })</td></tr><tr><td>deselect</td><td>\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u4EC5\u5728 multiple \u751F\u6548</td><td>function({ item, key, selectedKeys })</td></tr><tr><td>openChange</td><td>SubMenu \u5C55\u5F00/\u5173\u95ED\u7684\u56DE\u8C03</td><td>function(openKeys: string[])</td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</td><td>function({ item, key, selectedKeys })</td></tr></tbody></table><h3>Menu.Item</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td>item \u7684\u552F\u4E00\u6807\u5FD7</td><td>string</td><td></td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u6536\u7F29\u65F6\u5C55\u793A\u7684\u60AC\u6D6E\u6807\u9898</td><td>string</td><td></td></tr></tbody></table><h3>Menu.SubMenu</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>popupClassName</td><td>\u5B50\u83DC\u5355\u6837\u5F0F</td><td>string</td><td></td><td>1.5.0</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>\u552F\u4E00\u6807\u5FD7</td><td>string</td><td></td><td></td></tr><tr><td>title</td><td>\u5B50\u83DC\u5355\u9879\u503C</td><td>string|slot</td><td></td><td></td></tr><tr><td>expandIcon</td><td>\u81EA\u5B9A\u4E49 Menu \u5C55\u5F00\u6536\u8D77\u56FE\u6807</td><td>slot</td><td></td><td></td></tr></tbody></table><p>Menu.SubMenu \u7684\u5B50\u5143\u7D20\u5FC5\u987B\u662F <code>MenuItem</code> \u6216\u8005 <code>SubMenu</code>.</p><h3>SubMenu \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>titleClick</td><td>\u70B9\u51FB\u5B50\u83DC\u5355\u6807\u9898</td><td>({ key, domEvent })</td></tr></tbody></table><h3>Menu.ItemGroup</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5206\u7EC4\u6807\u9898</td><td>string||function|slot</td><td></td></tr></tbody></table><p>Menu.ItemGroup \u7684\u5B50\u5143\u7D20\u5FC5\u987B\u662F <code>MenuItem</code>.</p><h3>Menu.Divider</h3><p>\u83DC\u5355\u9879\u5206\u5272\u7EBF\uFF0C\u53EA\u7528\u5728\u5F39\u51FA\u83DC\u5355\u5185\u3002</p>`,18),Kt={expose:[],setup(t){return(s,l)=>(k(),g("div",bt,[vt]))}};var Ct=Kt;const x={cn:`# Menu \u5BFC\u822A\u83DC\u5355
          \u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868\u3002
## \u4F55\u65F6\u4F7F\u7528
\u5BFC\u822A\u83DC\u5355\u662F\u4E00\u4E2A\u7F51\u7AD9\u7684\u7075\u9B42\uFF0C\u7528\u6237\u4F9D\u8D56\u5BFC\u822A\u5728\u5404\u4E2A\u9875\u9762\u4E2D\u8FDB\u884C\u8DF3\u8F6C\u3002\u4E00\u822C\u5206\u4E3A\u9876\u90E8\u5BFC\u822A\u548C\u4FA7\u8FB9\u5BFC\u822A\uFF0C\u9876\u90E8\u5BFC\u822A\u63D0\u4F9B\u5168\u5C40\u6027\u7684\u7C7B\u76EE\u548C\u529F\u80FD\uFF0C\u4FA7\u8FB9\u5BFC\u822A\u63D0\u4F9B\u591A\u7EA7\u7ED3\u6784\u6765\u6536\u7EB3\u548C\u6392\u5217\u7F51\u7AD9\u67B6\u6784\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Menu
          A versatile menu for navigation.

## When To Use

Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers top and side navigation options. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website.

More layouts with navigation: [Layout](/components/layout).
## Examples`};var St={category:"Components",cols:1,type:"Navigation",title:"Menu",subtitle:"\u5BFC\u822A\u83DC\u5355",render(){return e("div",null,[e(i("Md"),{cn:x.cn,us:x.us},null),e(i("demo-sort"),{cols:1},{default:()=>[e(i("demo-container"),{api:_e,code:ye},{default:()=>[e(R,null,null)]}),e(i("demo-container"),{api:Ye,code:Je},{default:()=>[e(V,null,null)]}),e(i("demo-container"),{api:Ae,code:Ie},{default:()=>[e(q,null,null)]}),e(i("demo-container"),{api:yn,code:hn},{default:()=>[e(B,null,null)]}),e(i("demo-container"),{api:rt,code:_t},{default:()=>[e(Q,null,null)]}),e(i("demo-container"),{api:Xn,code:Zn},{default:()=>[e(E,null,null)]}),e(i("demo-container"),{api:Fn,code:Rn},{default:()=>[e(P,null,null)]}),e(i("demo-container"),{api:gt,code:ft},{default:()=>[e(z,null,null)]})]}),e(i("api"),null,{default:()=>[e(Ct,null,null)]})])}};export{St as default};

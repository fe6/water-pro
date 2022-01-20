import{Y as o,bw as x,bx as $,b as e,by as t,D as n,d as w,bP as H,cs as L,co as O,c2 as E,c1 as V,k as _,ct as U,bT as T,bO as M}from"./vendor.846be9ce.js";const A={},j={id:"components-layout-demo-basic"},I=n("Header"),R=n("Content"),P=n("Footer"),Y=n("Header"),q=n("Sider"),G=n("Content"),J=n("Footer"),Q=n("Header"),X=n("Content"),Z=n("Sider"),ee=n("Footer"),te=n("Sider"),ne=n("Header"),oe=n("Content"),ae=n("Footer");function le(l,d){const i=o("a-layout-header"),c=o("a-layout-content"),h=o("a-layout-footer"),r=o("a-layout"),a=o("a-layout-sider");return x(),$("div",j,[e(r,null,{default:t(()=>[e(i,null,{default:t(()=>[I]),_:1}),e(c,null,{default:t(()=>[R]),_:1}),e(h,null,{default:t(()=>[P]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(i,null,{default:t(()=>[Y]),_:1}),e(r,null,{default:t(()=>[e(a,null,{default:t(()=>[q]),_:1}),e(c,null,{default:t(()=>[G]),_:1})]),_:1}),e(h,null,{default:t(()=>[J]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(i,null,{default:t(()=>[Q]),_:1}),e(r,null,{default:t(()=>[e(c,null,{default:t(()=>[X]),_:1}),e(a,null,{default:t(()=>[Z]),_:1})]),_:1}),e(h,null,{default:t(()=>[ee]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(a,null,{default:t(()=>[te]),_:1}),e(r,null,{default:t(()=>[e(i,null,{default:t(()=>[ne]),_:1}),e(c,null,{default:t(()=>[oe]),_:1}),e(h,null,{default:t(()=>[ae]),_:1})]),_:1})]),_:1})])}A.render=le;var de=A,se=`<cn>
#### \u57FA\u672C\u7ED3\u6784
\u5178\u578B\u7684\u9875\u9762\u5E03\u5C40\u3002
</cn>

<us>
#### Basic Structure
Classic page layouts.
</us>
`,ie=`<template>
  <div  id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-content>Content</a-layout-content>
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
`,F=w({components:{UserOutlined:H,VideoCameraOutlined:L,UploadOutlined:O,MenuUnfoldOutlined:E,MenuFoldOutlined:V},setup(){return{selectedKeys:_(["1"]),collapsed:_(!1)}}});const ue=e("div",{class:"logo"},null,-1),re=e("span",null,"nav 1",-1),ce=e("span",null,"nav 2",-1),pe=e("span",null,"nav 3",-1),me=n(" Content ");function ye(l,d,i,c,h,r){const a=o("user-outlined"),s=o("a-menu-item"),g=o("video-camera-outlined"),u=o("upload-outlined"),p=o("a-menu"),b=o("a-layout-sider"),m=o("menu-unfold-outlined"),v=o("menu-fold-outlined"),y=o("a-layout-header"),K=o("a-layout-content"),k=o("a-layout");return x(),$(k,null,{default:t(()=>[e(b,{collapsed:l.collapsed,"onUpdate:collapsed":d[2]||(d[2]=f=>l.collapsed=f),trigger:null,collapsible:""},{default:t(()=>[ue,e(p,{theme:"dark",mode:"inline",selectedKeys:l.selectedKeys,"onUpdate:selectedKeys":d[1]||(d[1]=f=>l.selectedKeys=f)},{default:t(()=>[e(s,{key:"1"},{default:t(()=>[e(a),re]),_:1}),e(s,{key:"2"},{default:t(()=>[e(g),ce]),_:1}),e(s,{key:"3"},{default:t(()=>[e(u),pe]),_:1})]),_:1},8,["selectedKeys"])]),_:1},8,["collapsed"]),e(k,null,{default:t(()=>[e(y,{style:{background:"#fff",padding:"0"}},{default:t(()=>[l.collapsed?(x(),$(m,{key:0,class:"trigger",onClick:d[3]||(d[3]=()=>l.collapsed=!l.collapsed)})):(x(),$(v,{key:1,class:"trigger",onClick:d[4]||(d[4]=()=>l.collapsed=!l.collapsed)}))]),_:1}),e(K,{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},{default:t(()=>[me]),_:1})]),_:1})]),_:1})}F.render=ye;var _e=`<cn>
#### \u81EA\u5B9A\u4E49\u89E6\u53D1\u5668
\u8981\u4F7F\u7528\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\uFF0C\u53EF\u4EE5\u8BBE\u7F6E \`:trigger="null"\` \u6765\u9690\u85CF\u9ED8\u8BA4\u8BBE\u5B9A\u3002
</cn>

<us>
#### Custom trigger
If you want to use a customized trigger, you can hide the default one by setting \`:trigger="null"\`.
</us>
`,fe=`<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    };
  },
});
<\/script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
`,z=w({components:{UserOutlined:H,VideoCameraOutlined:L,UploadOutlined:O},setup(){const l=(i,c)=>{console.log(i,c)},d=i=>{console.log(i)};return{selectedKeys:_(["4"]),onCollapse:l,onBreakpoint:d}}});const he=e("div",{class:"logo"},null,-1),ge=e("span",{class:"nav-text"},"nav 1",-1),be=e("span",{class:"nav-text"},"nav 2",-1),ve=e("span",{class:"nav-text"},"nav 3",-1),ke=e("span",{class:"nav-text"},"nav 4",-1),xe=e("div",{style:{padding:"24px",background:"#fff",minHeight:"360px"}},"content",-1),$e=n(" Ant Design \xA92018 Created by Ant UED ");function Ke(l,d,i,c,h,r){const a=o("user-outlined"),s=o("a-menu-item"),g=o("video-camera-outlined"),u=o("upload-outlined"),p=o("a-menu"),b=o("a-layout-sider"),m=o("a-layout-header"),v=o("a-layout-content"),y=o("a-layout-footer"),K=o("a-layout");return x(),$(K,null,{default:t(()=>[e(b,{breakpoint:"lg","collapsed-width":"0",onCollapse:l.onCollapse,onBreakpoint:l.onBreakpoint},{default:t(()=>[he,e(p,{theme:"dark",mode:"inline",selectedKeys:l.selectedKeys,"onUpdate:selectedKeys":d[1]||(d[1]=k=>l.selectedKeys=k)},{default:t(()=>[e(s,{key:"1"},{default:t(()=>[e(a),ge]),_:1}),e(s,{key:"2"},{default:t(()=>[e(g),be]),_:1}),e(s,{key:"3"},{default:t(()=>[e(u),ve]),_:1}),e(s,{key:"4"},{default:t(()=>[e(a),ke]),_:1})]),_:1},8,["selectedKeys"])]),_:1},8,["onCollapse","onBreakpoint"]),e(K,null,{default:t(()=>[e(m,{style:{background:"#fff",padding:0}}),e(v,{style:{margin:"24px 16px 0"}},{default:t(()=>[xe]),_:1}),e(y,{style:{"text-align":"center"}},{default:t(()=>[$e]),_:1})]),_:1})]),_:1})}z.render=Ke;var Ce="<cn>\n#### \u54CD\u5E94\u5F0F\u5E03\u5C40\nLayout.Sider \u652F\u6301\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002\n> \u8BF4\u660E\uFF1A\u914D\u7F6E `breakpoint` \u5C5E\u6027\u5373\u751F\u6548\uFF0C\u89C6\u7A97\u5BBD\u5EA6\u5C0F\u4E8E `breakpoint` \u65F6 Sider \u7F29\u5C0F\u4E3A `collapsedWidth` \u5BBD\u5EA6\uFF0C\u82E5\u5C06 `collapsedWidth` \u8BBE\u7F6E\u4E3A\u96F6\uFF0C\u4F1A\u51FA\u73B0\u7279\u6B8A trigger\u3002\n</cn>\n\n<us>\n#### Responsive\nLayout.Sider supports responsive layout.\n> Note: You can get a responsive layout by setting `breakpoint`, the Sider will collapse to the width of `collapsedWidth` when window width is below the `breakpoint`. And a special trigger will appear if the `collapsedWidth` is set to `0`.\n</us>\n",Se=`<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design \xA92018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(['4']),
      onCollapse,
      onBreakpoint,
    };
  },
});
<\/script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
`,B=w({components:{UserOutlined:H,LaptopOutlined:U,NotificationOutlined:T},setup(){return{selectedKeys1:_(["2"]),selectedKeys2:_(["1"]),collapsed:_(!1),openKeys:_(["sub1"])}}});const we=e("div",{class:"logo"},null,-1),He=n("nav 1"),Le=n("nav 2"),Oe=n("nav 3"),Ue=n(" subnav 1 "),Te=n("option1"),Ae=n("option2"),Fe=n("option3"),ze=n("option4"),Be=n(" subnav 2 "),De=n("option5"),Ne=n("option6"),We=n("option7"),Ee=n("option8"),Ve=n(" subnav 3 "),Me=n("option9"),je=n("option10"),Ie=n("option11"),Re=n("option12"),Pe=n("Home"),Ye=n("List"),qe=n("App"),Ge=n(" Content ");function Je(l,d,i,c,h,r){const a=o("a-menu-item"),s=o("a-menu"),g=o("a-layout-header"),u=o("user-outlined"),p=o("a-sub-menu"),b=o("laptop-outlined"),m=o("notification-outlined"),v=o("a-layout-sider"),y=o("a-breadcrumb-item"),K=o("a-breadcrumb"),k=o("a-layout-content"),f=o("a-layout");return x(),$(f,null,{default:t(()=>[e(g,{class:"header"},{default:t(()=>[we,e(s,{theme:"dark",mode:"horizontal",selectedKeys:l.selectedKeys1,"onUpdate:selectedKeys":d[1]||(d[1]=C=>l.selectedKeys1=C),style:{lineHeight:"64px"}},{default:t(()=>[e(a,{key:"1"},{default:t(()=>[He]),_:1}),e(a,{key:"2"},{default:t(()=>[Le]),_:1}),e(a,{key:"3"},{default:t(()=>[Oe]),_:1})]),_:1},8,["selectedKeys"])]),_:1}),e(f,null,{default:t(()=>[e(v,{width:"200",style:{background:"#fff"}},{default:t(()=>[e(s,{mode:"inline",selectedKeys:l.selectedKeys2,"onUpdate:selectedKeys":d[2]||(d[2]=C=>l.selectedKeys2=C),openKeys:l.openKeys,"onUpdate:openKeys":d[3]||(d[3]=C=>l.openKeys=C),style:{height:"100%",borderRight:0}},{default:t(()=>[e(p,{key:"sub1"},{title:t(()=>[e("span",null,[e(u),Ue])]),default:t(()=>[e(a,{key:"1"},{default:t(()=>[Te]),_:1}),e(a,{key:"2"},{default:t(()=>[Ae]),_:1}),e(a,{key:"3"},{default:t(()=>[Fe]),_:1}),e(a,{key:"4"},{default:t(()=>[ze]),_:1})]),_:1}),e(p,{key:"sub2"},{title:t(()=>[e("span",null,[e(b),Be])]),default:t(()=>[e(a,{key:"5"},{default:t(()=>[De]),_:1}),e(a,{key:"6"},{default:t(()=>[Ne]),_:1}),e(a,{key:"7"},{default:t(()=>[We]),_:1}),e(a,{key:"8"},{default:t(()=>[Ee]),_:1})]),_:1}),e(p,{key:"sub3"},{title:t(()=>[e("span",null,[e(m),Ve])]),default:t(()=>[e(a,{key:"9"},{default:t(()=>[Me]),_:1}),e(a,{key:"10"},{default:t(()=>[je]),_:1}),e(a,{key:"11"},{default:t(()=>[Ie]),_:1}),e(a,{key:"12"},{default:t(()=>[Re]),_:1})]),_:1})]),_:1},8,["selectedKeys","openKeys"])]),_:1}),e(f,{style:{padding:"0 24px 24px"}},{default:t(()=>[e(K,{style:{margin:"16px 0"}},{default:t(()=>[e(y,null,{default:t(()=>[Pe]),_:1}),e(y,null,{default:t(()=>[Ye]),_:1}),e(y,null,{default:t(()=>[qe]),_:1})]),_:1}),e(k,{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px"}},{default:t(()=>[Ge]),_:1})]),_:1})]),_:1})]),_:1})}B.render=Je;var Qe=`<cn>
#### \u9876\u90E8-\u4FA7\u8FB9\u5E03\u5C40-\u901A\u680F
\u540C\u6837\u62E5\u6709\u9876\u90E8\u5BFC\u822A\u53CA\u4FA7\u8FB9\u680F\uFF0C\u533A\u522B\u662F\u4E24\u8FB9\u672A\u7559\u8FB9\u8DDD\uFF0C\u591A\u7528\u4E8E\u5E94\u7528\u578B\u7684\u7F51\u7AD9\u3002
</cn>

<us>
#### Header Sider 2
Both the top navigation and the sidebar, commonly used in application site.
</us>
`,Xe=`<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
    };
  },
});
<\/script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
`,D=w({components:{UserOutlined:H,LaptopOutlined:U,NotificationOutlined:T},setup(){return{selectedKeys1:_(["2"]),selectedKeys2:_(["1"]),openKeys:_(["sub1"])}}});const Ze=e("div",{class:"logo"},null,-1),et=n("nav 1"),tt=n("nav 2"),nt=n("nav 3"),ot=n("Home"),at=n("List"),lt=n("App"),dt=n(" subnav 1 "),st=n("option1"),it=n("option2"),ut=n("option3"),rt=n("option4"),ct=n(" subnav 2 "),pt=n("option5"),mt=n("option6"),yt=n("option7"),_t=n("option8"),ft=n(" subnav 3 "),ht=n("option9"),gt=n("option10"),bt=n("option11"),vt=n("option12"),kt=n(" Content "),xt=n(" Ant Design \xA92018 Created by Ant UED ");function $t(l,d,i,c,h,r){const a=o("a-menu-item"),s=o("a-menu"),g=o("a-layout-header"),u=o("a-breadcrumb-item"),p=o("a-breadcrumb"),b=o("user-outlined"),m=o("a-sub-menu"),v=o("laptop-outlined"),y=o("notification-outlined"),K=o("a-layout-sider"),k=o("a-layout-content"),f=o("a-layout"),C=o("a-layout-footer");return x(),$(f,null,{default:t(()=>[e(g,{class:"header"},{default:t(()=>[Ze,e(s,{theme:"dark",mode:"horizontal",selectedKeys:l.selectedKeys1,"onUpdate:selectedKeys":d[1]||(d[1]=S=>l.selectedKeys1=S),style:{lineHeight:"64px"}},{default:t(()=>[e(a,{key:"1"},{default:t(()=>[et]),_:1}),e(a,{key:"2"},{default:t(()=>[tt]),_:1}),e(a,{key:"3"},{default:t(()=>[nt]),_:1})]),_:1},8,["selectedKeys"])]),_:1}),e(k,{style:{padding:"0 50px"}},{default:t(()=>[e(p,{style:{margin:"16px 0"}},{default:t(()=>[e(u,null,{default:t(()=>[ot]),_:1}),e(u,null,{default:t(()=>[at]),_:1}),e(u,null,{default:t(()=>[lt]),_:1})]),_:1}),e(f,{style:{padding:"24px 0",background:"#fff"}},{default:t(()=>[e(K,{width:"200",style:{background:"#fff"}},{default:t(()=>[e(s,{mode:"inline",selectedKeys:l.selectedKeys2,"onUpdate:selectedKeys":d[2]||(d[2]=S=>l.selectedKeys2=S),openKeys:l.openKeys,"onUpdate:openKeys":d[3]||(d[3]=S=>l.openKeys=S),style:{height:"100%"}},{default:t(()=>[e(m,{key:"sub1"},{title:t(()=>[e("span",null,[e(b),dt])]),default:t(()=>[e(a,{key:"1"},{default:t(()=>[st]),_:1}),e(a,{key:"2"},{default:t(()=>[it]),_:1}),e(a,{key:"3"},{default:t(()=>[ut]),_:1}),e(a,{key:"4"},{default:t(()=>[rt]),_:1})]),_:1}),e(m,{key:"sub2"},{title:t(()=>[e("span",null,[e(v),ct])]),default:t(()=>[e(a,{key:"5"},{default:t(()=>[pt]),_:1}),e(a,{key:"6"},{default:t(()=>[mt]),_:1}),e(a,{key:"7"},{default:t(()=>[yt]),_:1}),e(a,{key:"8"},{default:t(()=>[_t]),_:1})]),_:1}),e(m,{key:"sub3"},{title:t(()=>[e("span",null,[e(y),ft])]),default:t(()=>[e(a,{key:"9"},{default:t(()=>[ht]),_:1}),e(a,{key:"10"},{default:t(()=>[gt]),_:1}),e(a,{key:"11"},{default:t(()=>[bt]),_:1}),e(a,{key:"12"},{default:t(()=>[vt]),_:1})]),_:1})]),_:1},8,["selectedKeys","openKeys"])]),_:1}),e(k,{style:{padding:"0 24px",minHeight:"280px"}},{default:t(()=>[kt]),_:1})]),_:1})]),_:1}),e(C,{style:{"text-align":"center"}},{default:t(()=>[xt]),_:1})]),_:1})}D.render=$t;var Kt=`<cn>
#### \u9876\u90E8-\u4FA7\u8FB9\u5E03\u5C40
\u62E5\u6709\u9876\u90E8\u5BFC\u822A\u53CA\u4FA7\u8FB9\u680F\u7684\u9875\u9762\uFF0C\u591A\u7528\u4E8E\u5C55\u793A\u7C7B\u7F51\u7AD9\u3002
</cn>

<us>
#### Header-Sider
Both the top navigation and the sidebar, commonly used in documentation site.
</us>
`,Ct=`<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  subnav 1
                </span>
              </template>
              <a-menu-item key="1">option1</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  subnav 2
                </span>
              </template>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  subnav 3
                </span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design \xA92018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      openKeys: ref<string[]>(['sub1']),
    };
  },
});
<\/script>
<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
`,N=w({setup(){return{selectedKeys:_(["2"])}}});const St=e("div",{class:"logo"},null,-1),wt=n("nav 1"),Ht=n("nav 2"),Lt=n("nav 3"),Ot=n("Home"),Ut=n("List"),Tt=n("App"),At=e("div",{style:{background:"#fff",padding:"24px",minHeight:"280px"}},"Content",-1),Ft=n(" Ant Design \xA92018 Created by Ant UED ");function zt(l,d,i,c,h,r){const a=o("a-menu-item"),s=o("a-menu"),g=o("a-layout-header"),u=o("a-breadcrumb-item"),p=o("a-breadcrumb"),b=o("a-layout-content"),m=o("a-layout-footer"),v=o("a-layout");return x(),$(v,{class:"layout"},{default:t(()=>[e(g,null,{default:t(()=>[St,e(s,{theme:"dark",mode:"horizontal",selectedKeys:l.selectedKeys,"onUpdate:selectedKeys":d[1]||(d[1]=y=>l.selectedKeys=y),style:{lineHeight:"64px"}},{default:t(()=>[e(a,{key:"1"},{default:t(()=>[wt]),_:1}),e(a,{key:"2"},{default:t(()=>[Ht]),_:1}),e(a,{key:"3"},{default:t(()=>[Lt]),_:1})]),_:1},8,["selectedKeys"])]),_:1}),e(b,{style:{padding:"0 50px"}},{default:t(()=>[e(p,{style:{margin:"16px 0"}},{default:t(()=>[e(u,null,{default:t(()=>[Ot]),_:1}),e(u,null,{default:t(()=>[Ut]),_:1}),e(u,null,{default:t(()=>[Tt]),_:1})]),_:1}),At]),_:1}),e(m,{style:{"text-align":"center"}},{default:t(()=>[Ft]),_:1})]),_:1})}N.render=zt;var Bt=`<cn>
#### \u4E0A\u4E2D\u4E0B\u5E03\u5C40
\u6700\u57FA\u672C\u7684\u300E\u4E0A-\u4E2D-\u4E0B\u300F\u5E03\u5C40\u3002
\u4E00\u822C\u4E3B\u5BFC\u822A\u653E\u7F6E\u4E8E\u9875\u9762\u7684\u9876\u7AEF\uFF0C\u4ECE\u5DE6\u81EA\u53F3\u4F9D\u6B21\u4E3A\uFF1Alogo\u3001\u4E00\u7EA7\u5BFC\u822A\u9879\u3001\u8F85\u52A9\u83DC\u5355\uFF08\u7528\u6237\u3001\u8BBE\u7F6E\u3001\u901A\u77E5\u7B49\uFF09\u3002\u901A\u5E38\u5C06\u5185\u5BB9\u653E\u5728\u56FA\u5B9A\u5C3A\u5BF8\uFF08\u4F8B\u5982\uFF1A1200px\uFF09\u5185\uFF0C\u6574\u4E2A\u9875\u9762\u6392\u7248\u7A33\u5B9A\uFF0C\u4E0D\u53D7\u7528\u6237\u7EC8\u7AEF\u663E\u793A\u5668\u5F71\u54CD\uFF1B\u4E0A\u4E0B\u7EA7\u7684\u7ED3\u6784\u7B26\u5408\u7528\u6237\u4E0A\u4E0B\u6D4F\u89C8\u7684\u4E60\u60EF\uFF0C\u4E5F\u662F\u8F83\u4E3A\u7ECF\u5178\u7684\u7F51\u7AD9\u5BFC\u822A\u6A21\u5F0F\u3002\u9875\u9762\u4E0A\u4E0B\u5207\u5206\u7684\u65B9\u5F0F\u63D0\u9AD8\u4E86\u4E3B\u5DE5\u4F5C\u533A\u57DF\u7684\u4FE1\u606F\u5C55\u793A\u6548\u7387\uFF0C\u4F46\u5728\u7EB5\u5411\u7A7A\u95F4\u4E0A\u4F1A\u6709\u4E00\u4E9B\u727A\u7272\u3002\u6B64\u5916\uFF0C\u7531\u4E8E\u5BFC\u822A\u680F\u6C34\u5E73\u7A7A\u95F4\u7684\u9650\u5236\uFF0C\u4E0D\u9002\u5408\u90A3\u4E9B\u4E00\u7EA7\u5BFC\u822A\u9879\u5F88\u591A\u7684\u4FE1\u606F\u7ED3\u6784\u3002
</cn>

<us>
#### Header-Content-Footer
The most basic "header-content-footer" layout.
Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it.
We always put contents in a fixed size navigation (eg: \`1200px\`), the layout of the whole page is stable, it's not affected by viewing area.
Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links
</us>
`,Dt=`<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design \xA92018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(['2']),
    };
  },
});
<\/script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
`;const Nt={class:"markdown-body"},Wt=M(`<h2>API</h2><pre><code class="language-html">&lt;Layout&gt;
  &lt;Header&gt;header&lt;/Header&gt;
  &lt;Layout&gt;
    &lt;Sider&gt;left sidebar&lt;/Sider&gt;
    &lt;Content&gt;main content&lt;/Content&gt;
    &lt;Sider&gt;right sidebar&lt;/Sider&gt;
  &lt;/Layout&gt;
  &lt;Footer&gt;footer&lt;/Footer&gt;
&lt;/Layout&gt;
</code></pre><h3>Layout</h3><p>\u5E03\u5C40\u5BB9\u5668\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>class</td><td>\u5BB9\u5668 class</td><td>string</td><td>-</td></tr><tr><td>style</td><td>\u6307\u5B9A\u6837\u5F0F</td><td>object</td><td>-</td></tr><tr><td>hasSider</td><td>\u8868\u793A\u5B50\u5143\u7D20\u91CC\u6709 Sider\uFF0C\u4E00\u822C\u4E0D\u7528\u6307\u5B9A\u3002\u53EF\u7528\u4E8E\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u907F\u514D\u6837\u5F0F\u95EA\u52A8</td><td>boolean</td><td>-</td></tr></tbody></table><blockquote><p><code>Layout.Header</code> <code>Layout.Footer</code> <code>Layout.Content</code> API \u4E0E <code>Layout</code> \u76F8\u540C</p></blockquote><h3>Layout.Sider</h3><p>\u4FA7\u8FB9\u680F\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>breakpoint</td><td>\u89E6\u53D1\u54CD\u5E94\u5F0F\u5E03\u5C40\u7684<a href="/components/grid#API">\u65AD\u70B9</a></td><td>Enum { \u2018xs\u2019, \u2018sm\u2019, \u2018md\u2019, \u2018lg\u2019, \u2018xl\u2019, \u2018xxl\u2019 }</td><td>-</td><td></td></tr><tr><td>class</td><td>\u5BB9\u5668 class</td><td>string</td><td>-</td><td></td></tr><tr><td>collapsed(v-model)</td><td>\u5F53\u524D\u6536\u8D77\u72B6\u6001</td><td>boolean</td><td>-</td><td></td></tr><tr><td>collapsedWidth</td><td>\u6536\u7F29\u5BBD\u5EA6\uFF0C\u8BBE\u7F6E\u4E3A 0 \u4F1A\u51FA\u73B0\u7279\u6B8A trigger</td><td>number</td><td>80</td><td></td></tr><tr><td>collapsible</td><td>\u662F\u5426\u53EF\u6536\u8D77</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultCollapsed</td><td>\u662F\u5426\u9ED8\u8BA4\u6536\u8D77</td><td>boolean</td><td>false</td><td></td></tr><tr><td>reverseArrow</td><td>\u7FFB\u8F6C\u6298\u53E0\u63D0\u793A\u7BAD\u5934\u7684\u65B9\u5411\uFF0C\u5F53 Sider \u5728\u53F3\u8FB9\u65F6\u53EF\u4EE5\u4F7F\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>style</td><td>\u6307\u5B9A\u6837\u5F0F</td><td>object|string</td><td>-</td><td></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u989C\u8272</td><td>string: <code>light</code> <code>dark</code></td><td><code>dark</code></td><td></td></tr><tr><td>trigger</td><td>\u81EA\u5B9A\u4E49 trigger\uFF0C\u8BBE\u7F6E\u4E3A null \u65F6\u9690\u85CF trigger</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>number|string</td><td>200</td><td></td></tr><tr><td>zeroWidthTriggerStyle</td><td>\u6307\u5B9A\u5F53 <code>collapsedWidth</code> \u4E3A 0 \u65F6\u51FA\u73B0\u7684\u7279\u6B8A trigger \u7684\u6837\u5F0F</td><td>object</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>collapse</td><td>\u5C55\u5F00-\u6536\u8D77\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6709\u70B9\u51FB trigger \u4EE5\u53CA\u54CD\u5E94\u5F0F\u53CD\u9988\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u89E6\u53D1</td><td>(collapsed, type) =&gt; {}</td></tr><tr><td>breakpoint</td><td>\u89E6\u53D1\u54CD\u5E94\u5F0F\u5E03\u5C40<a href="/components/grid#api">\u65AD\u70B9</a>\u65F6\u7684\u56DE\u8C03</td><td>(broken) =&gt; {}</td></tr></tbody></table><h4>breakpoint width</h4><pre><code class="language-json">{
  xs: &#39;480px&#39;,
  sm: &#39;576px&#39;,
  md: &#39;768px&#39;,
  lg: &#39;992px&#39;,
  xl: &#39;1200px&#39;,
  xxl: &#39;1600px&#39;,
}
</code></pre>`,13),Et={expose:[],setup(l){return(d,i)=>(x(),$("div",Nt,[Wt]))}};var Vt=Et;const W={cn:`# \u5E03\u5C40
  \u534F\u52A9\u8FDB\u884C\u9875\u9762\u7EA7\u6574\u4F53\u5E03\u5C40\u3002

## \u8BBE\u8BA1\u89C4\u5219

### \u5C3A\u5BF8

\u4E00\u7EA7\u5BFC\u822A\u9879\u504F\u5DE6\u9760\u8FD1 logo \u653E\u7F6E\uFF0C\u8F85\u52A9\u83DC\u5355\u504F\u53F3\u653E\u7F6E\u3002

- \u9876\u90E8\u5BFC\u822A\uFF08\u5927\u90E8\u5206\u7CFB\u7EDF\uFF09\uFF1A\u4E00\u7EA7\u5BFC\u822A\u9AD8\u5EA6 \`64px\`\uFF0C\u4E8C\u7EA7\u5BFC\u822A \`48px\`\u3002
- \u9876\u90E8\u5BFC\u822A\uFF08\u5C55\u793A\u7C7B\u9875\u9762\uFF09\uFF1A\u4E00\u7EA7\u5BFC\u822A\u9AD8\u5EA6 \`80px\`\uFF0C\u4E8C\u7EA7\u5BFC\u822A \`56px\`\u3002
- \u9876\u90E8\u5BFC\u822A\u9AD8\u5EA6\u7684\u8303\u56F4\u8BA1\u7B97\u516C\u5F0F\u4E3A\uFF1A\`48+8n\`\u3002
- \u4FA7\u8FB9\u5BFC\u822A\u5BBD\u5EA6\u7684\u8303\u56F4\u8BA1\u7B97\u516C\u5F0F\uFF1A\`200+8n\`\u3002

### \u4EA4\u4E92

- \u4E00\u7EA7\u5BFC\u822A\u548C\u672B\u7EA7\u7684\u5BFC\u822A\u9700\u8981\u5728\u53EF\u89C6\u5316\u7684\u5C42\u9762\u88AB\u5F3A\u8C03\u51FA\u6765\uFF1B
- \u5F53\u524D\u9879\u5E94\u8BE5\u5728\u5448\u73B0\u4E0A\u4F18\u5148\u7EA7\u6700\u9AD8\uFF1B
- \u5F53\u5BFC\u822A\u6536\u8D77\u7684\u65F6\u5019\uFF0C\u5F53\u524D\u9879\u7684\u6837\u5F0F\u81EA\u52A8\u8D4B\u4E88\u7ED9\u5B83\u7684\u4E0A\u4E00\u4E2A\u5C42\u7EA7\uFF1B
- \u5DE6\u4FA7\u5BFC\u822A\u680F\u7684\u6536\u653E\u4EA4\u4E92\u540C\u65F6\u652F\u6301\u624B\u98CE\u7434\u548C\u5168\u5C55\u5F00\u7684\u6837\u5F0F\uFF0C\u6839\u636E\u4E1A\u52A1\u7684\u8981\u6C42\u8FDB\u884C\u9002\u5F53\u7684\u9009\u62E9\u3002

### \u89C6\u89C9

\u5BFC\u822A\u6837\u5F0F\u4E0A\u9700\u8981\u6839\u636E\u4FE1\u606F\u5C42\u7EA7\u5408\u7406\u7684\u9009\u62E9\u6837\u5F0F\uFF1A

- **\u5927\u8272\u5757\u5F3A\u8C03**

  \u5EFA\u8BAE\u7528\u4E8E\u5E95\u8272\u4E3A\u6DF1\u8272\u7CFB\u65F6\uFF0C\u5F53\u524D\u9875\u9762\u7236\u7EA7\u7684\u5BFC\u822A\u9879\u3002

- **\u9AD8\u4EAE\u706B\u67F4\u68CD**

  \u5F53\u5BFC\u822A\u680F\u5E95\u8272\u4E3A\u6D45\u8272\u7CFB\u65F6\u4F7F\u7528\uFF0C\u53EF\u7528\u4E8E\u5F53\u524D\u9875\u9762\u5BF9\u5E94\u5BFC\u822A\u9879\uFF0C\u5EFA\u8BAE\u5C3D\u91CF\u5728\u5BFC\u822A\u8DEF\u5F84\u7684\u6700\u7EC8\u9879\u4F7F\u7528\u3002

- **\u5B57\u4F53\u9AD8\u4EAE\u53D8\u8272**

  \u4ECE\u53EF\u89C6\u5316\u5C42\u9762\uFF0C\u5B57\u4F53\u9AD8\u4EAE\u7684\u89C6\u89C9\u5F3A\u5316\u529B\u5EA6\u4F4E\u4E8E\u5927\u8272\u5757\uFF0C\u901A\u5E38\u5728\u5F53\u524D\u9879\u7684\u4E0A\u4E00\u7EA7\u4F7F\u7528\u3002

- **\u5B57\u4F53\u653E\u5927**

  \`12px\`\u3001\`14px\` \u662F\u5BFC\u822A\u7684\u6807\u51C6\u5B57\u53F7\uFF0C14 \u53F7\u5B57\u4F53\u7528\u5728\u4E00\u3001\u4E8C\u7EA7\u5BFC\u822A\u4E2D\u3002\u5B57\u53F7\u53EF\u4EE5\u8003\u8651\u5BFC\u822A\u9879\u7684\u7B49\u7EA7\u505A\u76F8\u5E94\u9009\u62E9\u3002

## \u7EC4\u4EF6\u6982\u8FF0

- \`Layout\`\uFF1A\u5E03\u5C40\u5BB9\u5668\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957 \`Header\` \`Sider\` \`Content\` \`Footer\` \u6216 \`Layout\` \u672C\u8EAB\uFF0C\u53EF\u4EE5\u653E\u5728\u4EFB\u4F55\u7236\u5BB9\u5668\u4E2D\u3002
- \`Header\`\uFF1A\u9876\u90E8\u5E03\u5C40\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 \`Layout\` \u4E2D\u3002
- \`Sider\`\uFF1A\u4FA7\u8FB9\u680F\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\u53CA\u57FA\u672C\u529F\u80FD\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 \`Layout\` \u4E2D\u3002
- \`Content\`\uFF1A\u5185\u5BB9\u90E8\u5206\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 \`Layout\` \u4E2D\u3002
- \`Footer\`\uFF1A\u5E95\u90E8\u5E03\u5C40\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957\u4EFB\u4F55\u5143\u7D20\uFF0C\u53EA\u80FD\u653E\u5728 \`Layout\` \u4E2D\u3002

> \u6CE8\u610F\uFF1A\u91C7\u7528 flex \u5E03\u5C40\u5B9E\u73B0\uFF0C\u8BF7\u6CE8\u610F[\u6D4F\u89C8\u5668\u517C\u5BB9\u6027](http://caniuse.com/#search=flex)\u95EE\u9898\u3002

        ## \u4EE3\u7801\u6F14\u793A`,us:`# Layout
  Handling the overall layout of a page.

## Specification

### Size

The first level navigation is inclined left near a logo, and the secondary menu is inclined right.

- Top Navigation (almost systems): the height of the first level navigation \`64px\`, the second level navigation \`48px\`.
- Top Navigation(contents page): the height of the first level navigation \`80px\`, the second level navigation \`56px\`.
- Calculation formula of a top navigation: \`48+8n\`.
- Calculation formula of an aside navigation: \`200+8n\`.

### Interaction rules

- The first level navigation and the last level navigation should be distinguishable by visualization;
- The current item should have the highest priority of visualization;
- When the current navigation item is collapsed, the style of the current navigation item is applied to its parent level;
- The left side navigation bar has support for both the accordion and expanding styles; you can choose the one that fits your case the best.

## Visualization rules

 Style of a navigation should conform to its level.

- **Emphasis by colorblock**

  When background color is a deep color, you can use this pattern for the parent level navigation item of the current page.

- **The highlight match stick**

  When background color is a light color, you can use this pattern for the current page navigation item; we recommend using it for the last item of the navigation path.

- **Highlighted font**

  From the visualization aspect, a highlighted font is stronger than colorblock; this pattern is often used for the parent level of the current item.

- **Enlarge the size of the font**

  \`12px\`, \`14px\` is a standard font size of navigations, \`14px\` is used for the first and the second level of the navigation. You can choose an appropriate font size regarding the level of your navigation.

## Component Overview

- \`Layout\`: The layout wrapper, in which \`Header\` \`Sider\` \`Content\` \`Footer\` or \`Layout\` itself can be nested, and can be placed in any parent container.
- \`Header\`: The top layout with the default style, in which any element can be nested, and must be placed in \`Layout\`.
- \`Sider\`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in \`Layout\`.
- \`Content\`: The content layout with the default style, in which any element can be nested, and must be placed in \`Layout\`.
- \`Footer\`: The bottom layout with the default style, in which any element can be nested, and must be placed in \`Layout\`.

> Based on \`flex layout\`, please pay attention to the [compatibility](http://caniuse.com/#search=flex).

  ## Examples
  `};var jt={category:"Components",subtitle:"\u5E03\u5C40",type:"Layout",cols:1,title:"Layout",props:{iframeName:String},render(){return e("div",null,[e(o("Md"),{cn:W.cn,us:W.us},null),e(o("demo-sort"),{cols:1},{default:()=>[e(o("demo-container"),{api:se,code:ie},{default:()=>[e(de,null,null)]}),e(o("demo-container"),{api:_e,code:fe},{default:()=>[e(F,null,null)]}),e(o("demo-container"),{api:Qe,code:Xe},{default:()=>[e(B,null,null)]}),e(o("demo-container"),{api:Kt,code:Ct},{default:()=>[e(D,null,null)]}),e(o("demo-container"),{api:Bt,code:Dt},{default:()=>[e(N,null,null)]}),e(o("demo-container"),{api:Ce,code:Se},{default:()=>[e(z,null,null)]})]}),e(o("api"),null,{default:()=>[e(Vt,null,null)]})])}};export{jt as default};

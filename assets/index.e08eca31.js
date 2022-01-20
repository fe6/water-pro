import{Y as r,bw as c,bx as u,by as t,b as e,D as a,d as f,bW as S,bP as k,F as B,k as x,bz as _,bO as L}from"./vendor.846be9ce.js";var O=`<cn>
  #### \u57FA\u672C\u4F7F\u7528
  \u6700\u7B80\u5355\u7684\u7528\u6CD5
</cn>

<us>
  #### Basic usage 
  The simplest use
</us>
`;const g={},H=a("Home"),I=e("a",{href:""},"Application Center",-1),R=e("a",{href:""},"Application List",-1),W=a("An Application");function P(d,m){const n=r("a-breadcrumb-item"),o=r("a-breadcrumb");return c(),u(o,null,{default:t(()=>[e(n,null,{default:t(()=>[H]),_:1}),e(n,null,{default:t(()=>[I]),_:1}),e(n,null,{default:t(()=>[R]),_:1}),e(n,null,{default:t(()=>[W]),_:1})]),_:1})}g.render=P;var G=g,T=`<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
`,V=`<cn>
  #### \u5E26\u6709\u56FE\u6807\u7684
  \u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762
</cn>

<us>
 #### With an Icon
 The icon should be placed in front of the text
</us>
`,v=f({components:{HomeOutlined:S,UserOutlined:k}});const j=e("span",null,"Application List",-1),q=a("Application");function z(d,m,n,o,i,p){const h=r("home-outlined"),s=r("a-breadcrumb-item"),l=r("user-outlined"),b=r("a-breadcrumb");return c(),u(b,null,{default:t(()=>[e(s,{href:""},{default:t(()=>[e(h)]),_:1}),e(s,{href:""},{default:t(()=>[e(l),j]),_:1}),e(s,null,{default:t(()=>[q]),_:1})]),_:1})}v.render=z;var D=`<template>
  <a-breadcrumb>
    <a-breadcrumb-item href="">
      <home-outlined />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <user-outlined />
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    HomeOutlined,
    UserOutlined,
  },
});
<\/script>
`,M=`<cn>
  #### \u5206\u9694\u7B26
  \u4F7F\u7528\` separator=">" \`\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u6216\u8005\u4F7F\u7528slot="separator"\u81EA\u5B9A\u4E49\u66F4\u590D\u6742\u7684\u5206\u9694\u7B26
</cn>

<us>
  #### Configuring the Separator
  The separator can be customized by setting the separator preperty: separator=">" or use 
  slot="separator"
</us>
`;const y={},U=a("Home"),F=a("Application Center"),E=a("Application List"),Y=a("An Application"),J=e("span",{style:{color:"red"}},">",-1),K=a("Home"),Q=a("Application Center"),X=a("Application List"),Z=a("An Application");function ee(d,m){const n=r("a-breadcrumb-item"),o=r("a-breadcrumb");return c(),u(B,null,[e(o,{separator:">"},{default:t(()=>[e(n,null,{default:t(()=>[U]),_:1}),e(n,{href:""},{default:t(()=>[F]),_:1}),e(n,{href:""},{default:t(()=>[E]),_:1}),e(n,null,{default:t(()=>[Y]),_:1})]),_:1}),e(o,null,{separator:t(()=>[J]),default:t(()=>[e(n,null,{default:t(()=>[K]),_:1}),e(n,{href:""},{default:t(()=>[Q]),_:1}),e(n,{href:""},{default:t(()=>[X]),_:1}),e(n,null,{default:t(()=>[Z]),_:1})]),_:1})],64)}y.render=ee;var te=y,ne=`<template>
  <a-breadcrumb separator=">">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
  <a-breadcrumb>
    <template #separator><span style="color: red">></span></template>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
`,re=`<cn>
  #### \u5176\u4ED6\u8DEF\u7531
\u548C \`vue-router\` \u8FDB\u884C\u7ED3\u5408\u4F7F\u7528\u3002
</cn>

<us>
  #### Vue Router Integration
Used together with \`vue-router\`
</us>
`,$=f({setup(){const d=x([{path:"index",breadcrumbName:"home"},{path:"first",breadcrumbName:"first",children:[{path:"/general",breadcrumbName:"General"},{path:"/layout",breadcrumbName:"Layout"},{path:"/navigation",breadcrumbName:"\u5BFC\u822A"}]},{path:"second",breadcrumbName:"second"}]);return{basePath:"/components/breadcrumb",routes:d}}});const ae={key:0},oe=e("br",null,null,-1);function de(d,m,n,o,i,p){const h=r("router-link"),s=r("a-breadcrumb");return c(),u("div",null,[e(s,{routes:d.routes},{itemRender:t(({route:l,routes:b,paths:N})=>[b.indexOf(l)===b.length-1?(c(),u("span",ae,_(l.breadcrumbName),1)):(c(),u(h,{key:1,to:`${d.basePath}/${N.join("/")}`},{default:t(()=>[a(_(l.breadcrumbName),1)]),_:2},1032,["to"]))]),_:1},8,["routes"]),oe,a(" "+_(d.$route.path),1)])}$.render=de;var ce=`<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="\`\${basePath}/\${paths.join('/')}\`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
    <br />
    {{ $route.path }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}
export default defineComponent({
  setup() {
    const routes = ref<Route[]>([
      {
        path: 'index',
        breadcrumbName: 'home',
      },
      {
        path: 'first',
        breadcrumbName: 'first',
        children: [
          {
            path: '/general',
            breadcrumbName: 'General',
          },
          {
            path: '/layout',
            breadcrumbName: 'Layout',
          },
          {
            path: '/navigation',
            breadcrumbName: '\u5BFC\u822A',
          },
        ],
      },
      {
        path: 'second',
        breadcrumbName: 'second',
      },
    ]);
    return {
      basePath: '/components/breadcrumb',
      routes,
    };
  },
});
<\/script>
`,ue=`<cn>
  #### \u5E26\u4E0B\u62C9\u83DC\u5355\u7684\u9762\u5305\u5C51
  \u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002
</cn>

<us>
  #### Bread crumbs with drop down menu
  Breadcrumbs support drop down menu.
</us>
`;const A={},me=a("Ant Design Vue"),ie=e("a",{href:""},"Component",-1),se=e("a",{href:""},"General",-1),le=e("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"General",-1),be=e("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"Layout",-1),pe=e("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"Navigation",-1),he=a("Button");function _e(d,m){const n=r("a-breadcrumb-item"),o=r("a-menu-item"),i=r("a-menu"),p=r("a-breadcrumb");return c(),u(p,null,{default:t(()=>[e(n,null,{default:t(()=>[me]),_:1}),e(n,null,{default:t(()=>[ie]),_:1}),e(n,null,{overlay:t(()=>[e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[le]),_:1}),e(o,null,{default:t(()=>[be]),_:1}),e(o,null,{default:t(()=>[pe]),_:1})]),_:1})]),default:t(()=>[se]),_:1}),e(n,null,{default:t(()=>[he]),_:1})]),_:1})}A.render=_e;var fe=A,ge=`<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
    <a-breadcrumb-item>
      <a href="">General</a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
          </a-menu-item>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
          </a-menu-item>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-breadcrumb-item>
    <a-breadcrumb-item>Button</a-breadcrumb-item>
  </a-breadcrumb>
</template>
`,ve=`<cn>
  #### \u5206\u9694\u7B26
  \u4F7F\u7528 \`Breadcrumb.Separator\` \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002
</cn>

<us>
  #### Configuring the Separator
  The separator can be customized by setting the separator property: \`Breadcrumb.Separator\`
</us>
`;const w={},ye=a("Location"),$e=a(":"),Ae=a("Application Center"),we=a("Application List"),Ce=a("An Application");function Ne(d,m){const n=r("a-breadcrumb-item"),o=r("a-breadcrumb-separator"),i=r("a-breadcrumb");return c(),u(i,{separator:""},{default:t(()=>[e(n,null,{default:t(()=>[ye]),_:1}),e(o,null,{default:t(()=>[$e]),_:1}),e(n,{href:""},{default:t(()=>[Ae]),_:1}),e(o),e(n,{href:""},{default:t(()=>[we]),_:1}),e(o),e(n,null,{default:t(()=>[Ce]),_:1})]),_:1})}w.render=Ne;var Se=w,ke=`<template>
  <a-breadcrumb separator="">
    <a-breadcrumb-item>Location</a-breadcrumb-item>
    <a-breadcrumb-separator>:</a-breadcrumb-separator>
    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
    <a-breadcrumb-separator />
    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
    <a-breadcrumb-separator />
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
`;const Be={class:"markdown-body"},xe=L(`<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>itemRender</td><td>\u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 slot=\u201CitemRender\u201D \u548C slot-scope=\u201Cprops\u201D</td><td>({route, params, routes, paths, h}) =&gt; vNode</td><td></td><td>-</td></tr><tr><td>params</td><td>\u8DEF\u7531\u7684\u53C2\u6570</td><td>object</td><td></td><td>-</td></tr><tr><td>routes</td><td>router \u7684\u8DEF\u7531\u6808\u4FE1\u606F</td><td><a href="#routes">routes[]</a></td><td></td><td>-</td></tr><tr><td>separator</td><td>\u5206\u9694\u7B26\u81EA\u5B9A\u4E49</td><td>string|slot</td><td></td><td>\u2018/\u2019</td></tr></tbody></table><h3>Breadcrumb.Item</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>href</td><td>\u94FE\u63A5\u7684\u76EE\u7684\u5730</td><td>string</td><td>-</td><td>1.5.0</td></tr><tr><td>overlay</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9</td><td><a href="/components/menu">Menu</a> | () =&gt; Menu</td><td>-</td><td>1.5.0</td></tr></tbody></table><h4>\u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>click</td><td>\u5355\u51FB\u4E8B\u4EF6</td><td>(e:MouseEvent)=&gt;void</td><td>-</td></tr></tbody></table><h3>Breadcrumb.Separator <code>3.21.0</code></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>separator=&quot;&quot;</code>\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002</p></blockquote><h3>routes</h3><pre><code class="language-ts">interface Route {
  path: string;
  breadcrumbName: string;
  children: Array&lt;{
    path: string;
    breadcrumbName: string;
  }&gt;;
}
</code></pre><h3>\u548C browserHistory \u914D\u5408</h3><p>\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 <code>#</code> \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>itemRender</code> \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002<a href="https://2x.antdv.com/components/breadcrumb-cn#API" target="_blank">\u53C2\u8003</a></p>`,13),Le={expose:[],setup(d){return(m,n)=>(c(),u("div",Be,[xe]))}};var Oe=Le;const C={cn:`# Breadcrumb\u9762\u5305\u5C51
           \u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002
         ## \u4F55\u65F6\u4F7F\u7528
         - \u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B
         - \u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B
         -  \u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002
         ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Breadcrumb
         A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
         ## When to use
         - When the system has more than two layers in a hierarchy.
         - When you need to inform the user of where they are.
         - When the user may need to navigate back to a higher level.
         - When the application has multi-layer architecture.
         ## Examples
        `};var Ie={category:"Components",subtitle:"\u9762\u5305\u5C51",type:"Navigation",zhType:"\u5BFC\u822A",title:"Breadcrumb",render(){return e("div",null,[e(r("Md"),{cn:C.cn,us:C.us},null),e(r("demo-sort"),null,{default:()=>[e(r("demo-container"),{api:O,code:T},{default:()=>[e(G,null,null)]}),e(r("demo-container"),{api:V,code:D},{default:()=>[e(v,null,null)]}),e(r("demo-container"),{api:M,code:ne},{default:()=>[e(te,null,null)]}),e(r("demo-container"),{api:re,code:ce},{default:()=>[e($,null,null)]}),e(r("demo-container"),{api:ve,code:ke},{default:()=>[e(Se,null,null)]}),e(r("demo-container"),{api:ue,code:ge},{default:()=>[e(fe,null,null)]})]}),e(r("api"),null,{default:()=>[e(Oe,null,null)]})])}};export{Ie as default};

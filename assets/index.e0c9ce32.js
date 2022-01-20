import{Y as t,bw as _,bx as m,d as P,bG as v,bH as y,b as e,bI as k,D as n,by as r,bO as w}from"./vendor.846be9ce.js";const x={};function R(c,s){const i=t("a-page-header");return _(),m(i,{style:{border:"1px solid rgb(235, 237, 240)"},title:"Title","sub-title":"This is a subtitle",onBack:s[1]||(s[1]=()=>null)})}x.render=R;var S=x,H=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6807\u51C6\u9875\u5934\uFF0C\u9002\u5408\u4F7F\u7528\u5728\u9700\u8981\u7B80\u5355\u63CF\u8FF0\u7684\u573A\u666F\u3002
</cn>

<us>
#### Basic Page Header
Standard header, suitable for use in scenarios that require a brief description.
</us>

\`\`\`vue
<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Title"
    sub-title="This is a subtitle"
    @back="() => null"
  />
</template>
\`\`\`
`,O=`<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Title"
    sub-title="This is a subtitle"
    @back="() => null"
  />
</template>
`;const B=[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}];var $=P({setup(){return{routes:B}}});function z(c,s,i,o,p,l){const b=t("a-page-header");return _(),m(b,{style:{border:"1px solid rgb(235, 237, 240)"},title:"Title",breadcrumb:{routes:c.routes},"sub-title":"This is a subtitle"},null,8,["breadcrumb"])}$.render=z;var I=`<cn>
#### \u5E26\u9762\u5305\u5C51\u9875\u5934
\u5E26\u9762\u5305\u5C51\u9875\u5934\uFF0C\u9002\u5408\u5C42\u7EA7\u6BD4\u8F83\u6DF1\u7684\u9875\u9762\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u5FEB\u901F\u5BFC\u822A\u3002
</cn>

<us>
#### Use with breadcrumbs
With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly.
</us>
`,N=`<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Title"
    :breadcrumb="{ routes }"
    sub-title="This is a subtitle"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
export default defineComponent({
  setup() {
    return {
      routes,
    };
  },
});
<\/script>
`;const g={},a=k();v("data-v-6db0df19");const A=n("Operation"),G=n("Operation"),j=n("Primary"),D=n("Lili Qu"),E=e("a",null,"421421",-1),M=n("2017-01-10"),q=n("2017-10-10"),L=n(" Gonghu Road, Xihu District, Hangzhou, Zhejiang, China "),Q=e("br",null,null,-1),X=n("Running"),Z=n("Operation"),U=n("Operation"),V=n("Primary");y();const F=a((c,s)=>{const i=t("a-button"),o=t("a-descriptions-item"),p=t("a-descriptions"),l=t("a-page-header"),b=t("a-tag"),u=t("a-statistic"),h=t("a-row");return _(),m("div",null,[e(l,{class:"demo-page-header",style:{border:"1px solid rgb(235, 237, 240)"},title:"Title","sub-title":"This is a subtitle",onBack:s[1]||(s[1]=()=>c.$router.go(-1))},{extra:a(()=>[e(i,{key:"3"},{default:a(()=>[A]),_:1}),e(i,{key:"2"},{default:a(()=>[G]),_:1}),e(i,{key:"1",type:"primary"},{default:a(()=>[j]),_:1})]),default:a(()=>[e(p,{size:"small",column:3},{default:a(()=>[e(o,{label:"Created"},{default:a(()=>[D]),_:1}),e(o,{label:"Association"},{default:a(()=>[E]),_:1}),e(o,{label:"Creation Time"},{default:a(()=>[M]),_:1}),e(o,{label:"Effective Time"},{default:a(()=>[q]),_:1}),e(o,{label:"Remarks"},{default:a(()=>[L]),_:1})]),_:1})]),_:1}),Q,e(l,{title:"Title","sub-title":"This is a subtitle",onBack:s[2]||(s[2]=()=>c.$router.go(-1))},{tags:a(()=>[e(b,{color:"blue"},{default:a(()=>[X]),_:1})]),extra:a(()=>[e(i,{key:"3"},{default:a(()=>[Z]),_:1}),e(i,{key:"2"},{default:a(()=>[U]),_:1}),e(i,{key:"1",type:"primary"},{default:a(()=>[V]),_:1})]),default:a(()=>[e(h,{type:"flex"},{default:a(()=>[e(u,{title:"Status",value:"Pending"}),e(u,{title:"Price",prefix:"$",value:568.08,style:{margin:"0 32px"}},null,8,["value"]),e(u,{title:"Balance",prefix:"$",value:3345.08},null,8,["value"])]),_:1})]),_:1})])});g.render=F;g.__scopeId="data-v-6db0df19";var W=g,Y=`<cn>
#### \u591A\u79CD\u5F62\u6001\u7684 PageHeader
\u4F7F\u7528\u64CD\u4F5C\u533A\uFF0C\u5E76\u81EA\u5B9A\u4E49\u5B50\u8282\u70B9\uFF0C\u9002\u5408\u4F7F\u7528\u5728\u9700\u8981\u5C55\u793A\u4E00\u4E9B\u590D\u6742\u7684\u4FE1\u606F\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u4E86\u89E3\u8FD9\u4E2A\u9875\u9762\u7684\u4FE1\u606F\u548C\u64CD\u4F5C\u3002
</cn>

<us>
#### Various forms of PageHeader
Use the operating area and customize the sub-nodes, suitable for use in the need to display some complex information to help users quickly understand the information and operations of this page.
</us>
`,J=`<template>
  <div>
    <a-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-button key="3">Operation</a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button>
      </template>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
        <a-descriptions-item label="Association">
          <a>421421</a>
        </a-descriptions-item>
        <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
        <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
        <a-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>
    <br />
    <a-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template #tags>
        <a-tag color="blue">Running</a-tag>
      </template>
      <template v-slot:extra>
        <a-button key="3">Operation</a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button>
      </template>
      <a-row type="flex">
        <a-statistic title="Status" value="Pending" />
        <a-statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
        />
        <a-statistic title="Balance" prefix="$" :value="3345.08" />
      </a-row>
    </a-page-header>
  </div>
</template>

<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
`;const T={},K={class:"components-page-header-demo-responsive"},ee=n("Operation"),te=n("Operation"),ne=n("Primary"),ae={class:"content"},ie={class:"main"},se=n("Lili Qu"),oe=e("a",null,"421421",-1),re=n("2017-01-10"),de=n("2017-10-10"),le=n(" Gonghu Road, Xihu District, Hangzhou, Zhejiang, China "),ce={class:"extra"},pe={style:{display:"flex",width:"max-content",justifyContent:"flex-end"}};function ue(c,s){const i=t("a-button"),o=t("a-tab-pane"),p=t("a-tabs"),l=t("a-descriptions-item"),b=t("a-descriptions"),u=t("a-statistic"),h=t("a-page-header");return _(),m("div",K,[e(h,{style:{border:"1px solid rgb(235, 237, 240)"},title:"Title","sub-title":"This is a subtitle",onBack:s[1]||(s[1]=()=>c.$router.go(-1))},{extra:r(()=>[e(i,{key:"3"},{default:r(()=>[ee]),_:1}),e(i,{key:"2"},{default:r(()=>[te]),_:1}),e(i,{key:"1",type:"primary"},{default:r(()=>[ne]),_:1})]),footer:r(()=>[e(p,{"default-active-key":"1"},{default:r(()=>[e(o,{key:"1",tab:"Details"}),e(o,{key:"2",tab:"Rule"})]),_:1})]),default:r(()=>[e("div",ae,[e("div",ie,[e(b,{size:"small",column:2},{default:r(()=>[e(l,{label:"Created"},{default:r(()=>[se]),_:1}),e(l,{label:"Association"},{default:r(()=>[oe]),_:1}),e(l,{label:"Creation Time"},{default:r(()=>[re]),_:1}),e(l,{label:"Effective Time"},{default:r(()=>[de]),_:1}),e(l,{label:"Remarks"},{default:r(()=>[le]),_:1})]),_:1})]),e("div",ce,[e("div",pe,[e(u,{title:"Status",value:"Pending",style:{marginRight:"32px"}}),e(u,{title:"Price",prefix:"$",value:568.08},null,8,["value"])])])])]),_:1})])}T.render=ue;var _e=T,me=`<cn>
#### \u54CD\u5E94\u5F0F
\u5728\u4E0D\u540C\u5927\u5C0F\u7684\u5C4F\u5E55\u4E0B\uFF0C\u5E94\u8BE5\u6709\u4E0D\u540C\u7684\u8868\u73B0
</cn>

<us>
#### responsive
Under different screen sizes, there should be different performance
</us>
`,be=`<template>
  <div class="components-page-header-demo-responsive">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-button key="3">Operation</a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button>
      </template>
      <template #footer>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="Details" />
          <a-tab-pane key="2" tab="Rule" />
        </a-tabs>
      </template>
      <div class="content">
        <div class="main">
          <a-descriptions size="small" :column="2">
            <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
            <a-descriptions-item label="Association">
              <a>421421</a>
            </a-descriptions-item>
            <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
            <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
            <a-descriptions-item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </a-descriptions-item>
          </a-descriptions>
        </div>
        <div class="extra">
          <div
            :style="{
              display: 'flex',
              width: 'max-content',
              justifyContent: 'flex-end',
            }"
          >
            <a-statistic
              title="Status"
              value="Pending"
              :style="{
                marginRight: '32px',
              }"
            />
            <a-statistic title="Price" prefix="$" :value="568.08" />
          </div>
        </div>
      </div>
    </a-page-header>
  </div>
</template>

<style>
.components-page-header-demo-responsive tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>
`;const f={},d=k();v("data-v-2c464463");const he={class:"demo-page-header",style:{"background-color":"#f5f5f5",padding:"24px"}},ge=n("Operation"),fe=n("Operation"),ve=n("Primary"),ye=n("Lili Qu"),ke=e("a",null,"421421",-1),xe=n("2017-01-10"),$e=n("2017-10-10"),Te=n(" Gonghu Road, Xihu District, Hangzhou, Zhejiang, China ");y();const Ce=d((c,s)=>{const i=t("a-button"),o=t("a-descriptions-item"),p=t("a-descriptions"),l=t("a-page-header");return _(),m("div",he,[e(l,{ghost:!1,title:"Title","sub-title":"This is a subtitle",onBack:s[1]||(s[1]=()=>c.$router.go(-1))},{extra:d(()=>[e(i,{key:"3"},{default:d(()=>[ge]),_:1}),e(i,{key:"2"},{default:d(()=>[fe]),_:1}),e(i,{key:"1",type:"primary"},{default:d(()=>[ve]),_:1})]),default:d(()=>[e(p,{size:"small",column:3},{default:d(()=>[e(o,{label:"Created"},{default:d(()=>[ye]),_:1}),e(o,{label:"Association"},{default:d(()=>[ke]),_:1}),e(o,{label:"Creation Time"},{default:d(()=>[xe]),_:1}),e(o,{label:"Effective Time"},{default:d(()=>[$e]),_:1}),e(o,{label:"Remarks"},{default:d(()=>[Te]),_:1})]),_:1})]),_:1})])});f.render=Ce;f.__scopeId="data-v-2c464463";var Pe=f,we=`<cn>
#### \u767D\u5E95\u6A21\u5F0F
\u9ED8\u8BA4 PageHeader \u662F\u900F\u660E\u5E95\u8272\u7684\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CPageHeader \u9700\u8981\u81EA\u5DF1\u7684\u80CC\u666F\u989C\u8272\u3002
</cn>

<us>
#### white background mode
The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color.
</us>
`,Re=`<template>
  <div class="demo-page-header" style="background-color: #f5f5f5; padding: 24px">
    <a-page-header
      :ghost="false"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-button key="3">Operation</a-button>
        <a-button key="2">Operation</a-button>
        <a-button key="1" type="primary">Primary</a-button>
      </template>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
        <a-descriptions-item label="Association">
          <a>421421</a>
        </a-descriptions-item>
        <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
        <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
        <a-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>
  </div>
</template>

<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
`;const Se={class:"markdown-body"},He=w('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u6587\u5B57</td><td>string|slot</td><td>-</td></tr><tr><td>subTitle</td><td>\u81EA\u5B9A\u4E49\u7684\u4E8C\u7EA7\u6807\u9898\u6587\u5B57</td><td>string|slot</td><td>-</td></tr><tr><td>ghost</td><td>pageHeader \u7684\u7C7B\u578B\uFF0C\u5C06\u4F1A\u6539\u53D8\u80CC\u666F\u989C\u8272</td><td>boolean</td><td>true</td></tr><tr><td>avatar</td><td>\u6807\u9898\u680F\u65C1\u7684\u5934\u50CF</td><td><a href="/components/avatar-cn/">avatar props</a></td><td>-</td></tr><tr><td>backIcon</td><td>\u81EA\u5B9A\u4E49 back icon \uFF0C\u5982\u679C\u4E3A false \u4E0D\u6E32\u67D3 back icon</td><td>string|slot</td><td><code>&lt;Icon type=&quot;arrow-left&quot; /&gt;</code></td></tr><tr><td>tags</td><td>title \u65C1\u7684 tag \u5217\u8868</td><td><a href="/components/tag-cn/">Tag</a>[] | <a href="/components/tag-cn/">Tag</a></td><td>-</td></tr><tr><td>extra</td><td>\u64CD\u4F5C\u533A\uFF0C\u4F4D\u4E8E title \u884C\u7684\u884C\u5C3E</td><td>string|slot</td><td>-</td></tr><tr><td>breadcrumb</td><td>\u9762\u5305\u5C51\u7684\u914D\u7F6E</td><td><a href="/components/breadcrumb-cn/">breadcrumb</a></td><td>-</td></tr><tr><td>footer</td><td>PageHeader \u7684\u9875\u811A\uFF0C\u4E00\u822C\u7528\u4E8E\u6E32\u67D3 TabBar</td><td>string|slot</td><td>-</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>back</td><td>\u8FD4\u56DE\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6</td><td>function(e)</td></tr></tbody></table>',4),Oe={expose:[],setup(c){return(s,i)=>(_(),m("div",Se,[He]))}};var Be=Oe;const C={cn:`# PageHeader \u9875\u5934

      \u9875\u5934\u4F4D\u4E8E\u9875\u5BB9\u5668\u4E2D\uFF0C\u9875\u5BB9\u5668\u9876\u90E8\uFF0C\u8D77\u5230\u4E86\u5185\u5BB9\u6982\u89C8\u548C\u5F15\u5BFC\u9875\u7EA7\u64CD\u4F5C\u7684\u4F5C\u7528\u3002\u5305\u62EC\u7531\u9762\u5305\u5C51\u3001\u6807\u9898\u3001\u9875\u9762\u5185\u5BB9\u7B80\u4ECB\u3001\u9875\u9762\u7EA7\u64CD\u4F5C\u7B49\u3001\u9875\u9762\u7EA7\u5BFC\u822A\u7EC4\u6210\u3002

      ## \u4F55\u65F6\u4F7F\u7528

      \u5F53\u9700\u8981\u4F7F\u7528\u6237\u5FEB\u901F\u7406\u89E3\u5F53\u524D\u9875\u662F\u4EC0\u4E48\u4EE5\u53CA\u65B9\u4FBF\u7528\u6237\u4F7F\u7528\u9875\u9762\u529F\u80FD\u65F6\u4F7F\u7528\uFF0C\u901A\u5E38\u4E5F\u53EF\u88AB\u7528\u4F5C\u9875\u9762\u95F4\u5BFC\u822A\u3002

      ## \u4EE3\u7801\u6F14\u793A
      `,us:`# PageHeader

      The header can be used to declare the page topic, display important information about the page that the user is interested in, and carry the action items related to the current page (including page-level operations, inter-page navigation, etc.)

      ## When To Use

      It can also be used as inter-page navigation when it is needed to make the user quickly understand what the current page is and to facilitate the user to use the page function.
      
      ## Examples
      `};var Ie={category:"Components",subtitle:"\u9875\u5934",type:"Navigation",title:"PageHeader",cols:1,render(){return e("div",null,[e(t("Md"),{cn:C.cn,us:C.us},null),e(t("demo-sort"),{cols:1},{default:()=>[e(t("demo-container"),{api:H,code:O},{default:()=>[e(S,null,null)]}),e(t("demo-container"),{api:I,code:N},{default:()=>[e($,null,null)]}),e(t("demo-container"),{api:Y,code:J},{default:()=>[e(W,null,null)]}),e(t("demo-container"),{api:me,code:be},{default:()=>[e(_e,null,null)]}),e(t("demo-container"),{api:we,code:Re},{default:()=>[e(Pe,null,null)]})]}),e(t("api"),null,{default:()=>[e(Be,null,null)]})])}};export{Ie as default};

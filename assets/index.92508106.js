import{Y as t,bw as a,bx as i,d as m,bM as D,k as N,bG as T,bH as M,b as e,bX as k,F as L,bI as B,by as l,D as u,bO as R}from"./vendor.846be9ce.js";import{E as G}from"./main.f0d1f01d.js";const _={};function U(n,s){const o=t("a-empty");return a(),i(o)}_.render=U;var j=_,F=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u7684\u5C55\u793A\u3002
</cn>

<us>
#### Basic
Simplest Usage.
</us>
`,O=`<template>
  <a-empty />
</template>
`,d=m({components:{SmileOutlined:D},setup(){return{customize:N(!1),style:{width:"200px"},columns:[{title:"Name"},{title:"Age"}]}}});const p=B();T("data-v-02dca9fa");const Q={style:{"text-align":"center"}},V=e("p",null,"Data Not Found",-1),J={class:"config-provider"},W=e("h3",null,"Select",-1),Y=e("h3",null,"TreeSelect",-1),H=e("h3",null,"Cascader",-1),X=e("h3",null,"Transfer",-1),q=e("h3",null,"Table",-1),K=e("h3",null,"List",-1);M();const Z=p((n,s,o,r,v,E)=>{const c=t("a-switch"),A=t("a-divider"),S=t("smile-outlined"),b=t("a-select"),C=t("a-tree-select"),I=t("a-cascader"),x=t("a-transfer"),$=t("a-table"),z=t("a-list"),P=t("a-config-provider");return a(),i(L,null,[e(c,{"un-checked-children":"default","checked-children":"customize",checked:n.customize,"onUpdate:checked":s[1]||(s[1]=w=>n.customize=w)},null,8,["checked"]),e(A),e(P,null,k({default:p(()=>[e("div",J,[W,e(b,{style:n.style,options:[]},null,8,["style"]),Y,e(C,{style:n.style,"tree-data":[]},null,8,["style"]),H,e(I,{style:n.style,options:[],"show-search":!0},null,8,["style"]),X,e(x,{"data-source":[]}),q,e($,{style:{"margin-top":"8px"},columns:n.columns,"data-source":[]},null,8,["columns"]),K,e(z,{"data-source":[]})])]),_:2},[n.customize?{name:"renderEmpty",fn:p(()=>[e("div",Q,[e(S,{style:{"font-size":"20px"}}),V])])}:void 0]),1024)],64)});d.render=Z;d.__scopeId="data-v-02dca9fa";var ee=`<cn>
#### \u5168\u5C40\u5316\u914D\u7F6E
\u81EA\u5B9A\u4E49\u5168\u5C40\u7EC4\u4EF6\u7684 Empty \u6837\u5F0F\u3002
</cn>

<us>
#### ConfigProvider
Use ConfigProvider set global Empty style.
</us>
`,te=`<template>
  <a-switch
    un-checked-children="default"
    checked-children="customize"
    v-model:checked="customize"
  />
  <a-divider />
  <a-config-provider>
    <template v-if="customize" #renderEmpty>
      <div style="text-align: center">
        <smile-outlined style="font-size: 20px" />
        <p>Data Not Found</p>
      </div>
    </template>
    <div class="config-provider">
      <h3>Select</h3>
      <a-select :style="style" :options="[]" />

      <h3>TreeSelect</h3>
      <a-tree-select :style="style" :tree-data="[]" />

      <h3>Cascader</h3>
      <a-cascader :style="style" :options="[]" :show-search="true" />

      <h3>Transfer</h3>
      <a-transfer :data-source="[]" />

      <h3>Table</h3>
      <a-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
      <h3>List</h3>
      <a-list :data-source="[]" />
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const customize = ref<boolean>(false);

    return {
      customize,
      style: { width: '200px' },
      columns: [{ title: 'Name' }, { title: 'Age' }],
    };
  },
});
<\/script>
<style scoped>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>
`;const h={},ne=e("span",null,[u(" Customize "),e("a",{href:"#API"},"Description")],-1),oe=u("Create Now");function se(n,s){const o=t("a-button"),r=t("a-empty");return a(),i(r,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original","image-style":{height:"60px"}},{description:l(()=>[ne]),default:l(()=>[e(o,{type:"primary"},{default:l(()=>[oe]),_:1})]),_:1})}h.render=se;var ae=h,ie=`<cn>
#### \u81EA\u5B9A\u4E49
\u81EA\u5B9A\u4E49\u56FE\u7247\u3001\u63CF\u8FF0\u3001\u9644\u5C5E\u5185\u5BB9\u3002
</cn>

<us>
#### Customize
Customize image, description and extra content.
</us>
`,re=`<template>
  <a-empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    :image-style="{
      height: '60px',
    }"
  >
    <template #description>
      <span>
        Customize
        <a href="#API">Description</a>
      </span>
    </template>
    <a-button type="primary">Create Now</a-button>
  </a-empty>
</template>
`;const f={};function ce(n,s){const o=t("a-empty");return a(),i(o,{description:!1})}f.render=ce;var le=f,de=`<cn>
#### \u65E0\u63CF\u8FF0
\u65E0\u63CF\u8FF0\u5C55\u793A\u3002
</cn>

<us>
#### No description
Simplest Usage with no description.
</us>
`,pe=`<template>
  <a-empty :description="false" />
</template>
`,g=m({setup(){return{simpleImage:G.PRESENTED_IMAGE_SIMPLE}}});function me(n,s,o,r,v,E){const c=t("a-empty");return a(),i(c,{image:n.simpleImage},null,8,["image"])}g.render=me;var ue=`<cn>
#### \u9009\u62E9\u56FE\u7247
\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E \`image\` \u4E3A \`Empty.PRESENTED_IMAGE_SIMPLE\` \u9009\u62E9\u53E6\u4E00\u79CD\u98CE\u683C\u7684\u56FE\u7247\u3002
</cn>

<us>
#### Chose image
You can choose another style of \`image\` by setting image to \`Empty.PRESENTED_IMAGE_SIMPLE\`.
</us>
`,_e=`<template>
  <a-empty :image="simpleImage" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Empty from '@fe6/water-pro';

export default defineComponent({
  setup() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
    };
  },
});
<\/script>
`;const he={class:"markdown-body"},fe=R('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>description</td><td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u5185\u5BB9</td><td>string | v-slot</td><td>-</td><td></td></tr><tr><td>imageStyle</td><td>\u56FE\u7247\u6837\u5F0F</td><td>CSSProperties</td><td>-</td><td>1.5.0</td></tr><tr><td>image</td><td>\u8BBE\u7F6E\u663E\u793A\u56FE\u7247\uFF0C\u4E3A string \u65F6\u8868\u793A\u81EA\u5B9A\u4E49\u56FE\u7247\u5730\u5740</td><td>string | v-slot</td><td>false</td><td></td></tr></tbody></table><h2>\u5185\u7F6E\u56FE\u7247</h2><ul><li><p>Empty.PRESENTED_IMAGE_SIMPLE</p><img src="https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png" height="35px"></li><li><p>Empty.PRESENTED_IMAGE_DEFAULT</p><img src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" height="100px"></li></ul>',4),ge={expose:[],setup(n){return(s,o)=>(a(),i("div",he,[fe]))}};var ye=ge;const y={cn:`# \u7A7A\u72B6\u6001
        \u7A7A\u72B6\u6001\u65F6\u7684\u5C55\u793A\u5360\u4F4D\u56FE\u3002

      \u7A7A\u72B6\u6001\u65F6\u7684\u5C55\u793A\u5360\u4F4D\u56FE\u3002

      ## \u4F55\u65F6\u4F7F\u7528

      - \u5F53\u76EE\u524D\u6CA1\u6709\u6570\u636E\u65F6\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684\u7528\u6237\u63D0\u793A\u3002
      - \u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u5F15\u5BFC\u521B\u5EFA\u6D41\u7A0B\u3002

       ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Empty
        Empty state placeholder.

        ## When To Use

        - When there is no data provided, display for friendly tips.
        - User tutorial to create something in fresh new situation.
       ## Examples
        `};var Ae={category:"Components",type:"Data Display",title:"Empty",subtitle:"\u7A7A\u72B6\u6001",render(){return e("div",null,[e(t("Md"),{cn:y.cn,us:y.us},null),e(t("demo-sort"),{cols:1},{default:()=>[e(t("demo-container"),{api:F,code:O},{default:()=>[e(j,null,null)]}),e(t("demo-container"),{api:ee,code:te},{default:()=>[e(d,null,null)]}),e(t("demo-container"),{api:ie,code:re},{default:()=>[e(ae,null,null)]}),e(t("demo-container"),{api:de,code:pe},{default:()=>[e(le,null,null)]}),e(t("demo-container"),{api:ue,code:_e},{default:()=>[e(g,null,null)]})]}),e(t("api"),null,{default:()=>[e(ye,null,null)]})])}};export{Ae as default};

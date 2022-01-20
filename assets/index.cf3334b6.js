import{d as f,co as S,Y as t,bw as p,bx as u,by as e,b as n,D as a,k as y,bG as w,bH as B,bI as P,bO as U}from"./vendor.846be9ce.js";var k=f({components:{UploadOutlined:S}});const D=a(" Space "),I=a("Button"),A=a(" Click to Upload "),L=a("Confirm");function O(d,l,r,_,b,h){const o=t("a-button"),s=t("UploadOutlined"),i=t("a-upload"),m=t("a-popconfirm"),g=t("a-space");return p(),u(g,null,{default:e(()=>[D,n(o,{type:"primary"},{default:e(()=>[I]),_:1}),n(i,null,{default:e(()=>[n(o,null,{default:e(()=>[n(s),A]),_:1})]),_:1}),n(m,{title:"Are you sure delete this task?","ok-text":"Yes","cancel-text":"No"},{default:e(()=>[n(o,null,{default:e(()=>[L]),_:1})]),_:1})]),_:1})}k.render=O;var V=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u76F8\u90BB\u7EC4\u4EF6\u6C34\u5E73\u95F4\u8DDD\u3002
</cn>

<us>
#### Basic Usage
Crowded components horizontal spacing.
</us>
`,N=`<template>
  <a-space>
    Space
    <a-button type="primary">Button</a-button>
    <a-upload>
      <a-button>
        <UploadOutlined />
        Click to Upload
      </a-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <a-button>Confirm</a-button>
    </a-popconfirm>
  </a-space>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
<\/script>
`;const $={},M=n("p",null,"Card content",-1),Y=n("p",null,"Card content",-1),T=n("p",null,"Card content",-1),j=n("p",null,"Card content",-1);function E(d,l){const r=t("a-card"),_=t("a-space");return p(),u(_,{direction:"vertical"},{default:e(()=>[n(r,{title:"Card",style:{width:"300px"}},{default:e(()=>[M,Y]),_:1}),n(r,{title:"Card",style:{width:"300px"}},{default:e(()=>[T,j]),_:1})]),_:1})}$.render=E;var G=$,H=`<cn>
#### \u5782\u76F4\u95F4\u8DDD
\u76F8\u90BB\u7EC4\u4EF6\u5782\u76F4\u95F4\u8DDD\u3002
\u53EF\u4EE5\u8BBE\u7F6E \`width: 100%\` \u72EC\u5360\u4E00\u884C\u3002
</cn>

<us>
#### Vertical Space
Crowded components vertical spacing.
Can set \`width: 100%\` fill a row.
</us>
`,W=`<template>
  <a-space direction="vertical">
    <a-card title="Card" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
    <a-card title="Card" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </a-space>
</template>
`,C=f({setup(){return{size:y("small")}}});const q=a("Small"),F=a("Middle"),J=a("Large"),K=n("br",null,null,-1),Q=n("br",null,null,-1),R=a("Primary"),X=a("Default"),Z=a("Dashed"),nn=a("Link");function tn(d,l,r,_,b,h){const o=t("a-radio"),s=t("a-radio-group"),i=t("a-button"),m=t("a-space");return p(),u("div",null,[n(s,{value:d.size,"onUpdate:value":l[1]||(l[1]=g=>d.size=g)},{default:e(()=>[n(o,{value:"small"},{default:e(()=>[q]),_:1}),n(o,{value:"middle"},{default:e(()=>[F]),_:1}),n(o,{value:"large"},{default:e(()=>[J]),_:1})]),_:1},8,["value"]),K,Q,n(m,{size:d.size},{default:e(()=>[n(i,{type:"primary"},{default:e(()=>[R]),_:1}),n(i,null,{default:e(()=>[X]),_:1}),n(i,{type:"dashed"},{default:e(()=>[Z]),_:1}),n(i,{type:"link"},{default:e(()=>[nn]),_:1})]),_:1},8,["size"])])}C.render=tn;var en="<cn>\n#### \u95F4\u8DDD\u5927\u5C0F\n\u95F4\u8DDD\u9884\u8BBE\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5927\u5C0F\u3002\n\u901A\u8FC7\u8BBE\u7F6E `size` \u4E3A `large` `middle` \u5206\u522B\u628A\u95F4\u8DDD\u8BBE\u4E3A\u5927\u3001\u4E2D\u95F4\u8DDD\u3002\u82E5\u4E0D\u8BBE\u7F6E `size`\uFF0C\u5219\u95F4\u8DDD\u4E3A\u5C0F\u3002\n</cn>\n\n<us>\n#### Space Size\n`large`, `middle` and `small` preset sizes.\nSet the size to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small`.\n</us>\n",an=`<template>
  <div>
    <a-radio-group v-model:value="size">
      <a-radio value="small">Small</a-radio>
      <a-radio value="middle">Middle</a-radio>
      <a-radio value="large">Large</a-radio>
    </a-radio-group>
    <br />
    <br />
    <a-space :size="size">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="link">Link</a-button>
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref('small'),
    };
  },
});
<\/script>
`,v=f({});const c=P();w("data-v-bbff12c2");const on={class:"space-align-container"},sn={class:"space-align-block"},dn=a(" center "),ln=a("Primary"),cn=n("span",{class:"mock-block"},"Block",-1),rn={class:"space-align-block"},pn=a(" start "),un=a("Primary"),_n=n("span",{class:"mock-block"},"Block",-1),mn={class:"space-align-block"},fn=a(" end "),bn=a("Primary"),hn=n("span",{class:"mock-block"},"Block",-1),gn={class:"space-align-block"},vn=a(" baseline "),yn=a("Primary"),kn=n("span",{class:"mock-block"},"Block",-1);B();const $n=c((d,l,r,_,b,h)=>{const o=t("a-button"),s=t("a-space");return p(),u("div",on,[n("div",sn,[n(s,{align:"center"},{default:c(()=>[dn,n(o,{type:"primary"},{default:c(()=>[ln]),_:1}),cn]),_:1})]),n("div",rn,[n(s,{align:"start"},{default:c(()=>[pn,n(o,{type:"primary"},{default:c(()=>[un]),_:1}),_n]),_:1})]),n("div",mn,[n(s,{align:"end"},{default:c(()=>[fn,n(o,{type:"primary"},{default:c(()=>[bn]),_:1}),hn]),_:1})]),n("div",gn,[n(s,{align:"baseline"},{default:c(()=>[vn,n(o,{type:"primary"},{default:c(()=>[yn]),_:1}),kn]),_:1})])])});v.render=$n;v.__scopeId="data-v-bbff12c2";var Cn=`<cn>
#### \u5BF9\u9F50
\u8BBE\u7F6E\u5BF9\u9F50\u6A21\u5F0F\u3002
</cn>

<us>
#### Align
Config item align.
</us>
`,zn=`<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <a-space align="center">
        center
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
    <div class="space-align-block">
      <a-space align="start">
        start
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
    <div class="space-align-block">
      <a-space align="end">
        end
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
    <div class="space-align-block">
      <a-space align="baseline">
        baseline
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </a-space>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
<\/script>
<style scoped>
.space-align-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
`,z=f({setup(){return{size:y(8)}}});const xn=n("br",null,null,-1),Sn=n("br",null,null,-1),wn=a("Primary"),Bn=a("Default"),Pn=a("Dashed"),Un=a("Link");function Dn(d,l,r,_,b,h){const o=t("a-slider"),s=t("a-button"),i=t("a-space");return p(),u("div",null,[n(o,{value:d.size,"onUpdate:value":l[1]||(l[1]=m=>d.size=m)},null,8,["value"]),xn,Sn,n(i,{size:d.size},{default:e(()=>[n(s,{type:"primary"},{default:e(()=>[wn]),_:1}),n(s,null,{default:e(()=>[Bn]),_:1}),n(s,{type:"dashed"},{default:e(()=>[Pn]),_:1}),n(s,{type:"link"},{default:e(()=>[Un]),_:1})]),_:1},8,["size"])])}z.render=Dn;var In=`<cn>
#### \u81EA\u5B9A\u4E49\u5C3A\u5BF8
\u81EA\u5B9A\u4E49\u95F4\u8DDD\u5927\u5C0F\u3002
</cn>

<us>
#### Customize Size
Custom spacing size.
</us>
`,An=`<template>
  <div>
    <a-slider v-model:value="size" />
    <br />
    <br />
    <a-space :size="size">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="link">Link</a-button>
    </a-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref(8),
    };
  },
});
<\/script>
`;const Ln={class:"markdown-body"},On=U("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td><code>start</code> | <code>end</code> |<code>center</code> |<code>baseline</code></td><td>-</td><td>1.6.5</td></tr><tr><td>direction</td><td>\u95F4\u8DDD\u65B9\u5411</td><td><code>vertical</code> | <code>horizontal</code></td><td><code>horizontal</code></td><td>1.6.5</td></tr><tr><td>size</td><td>\u95F4\u8DDD\u5927\u5C0F</td><td><code>small</code> | <code>middle</code> | <code>large</code> | <code>number</code></td><td><code>small</code></td><td>1.6.5</td></tr></tbody></table>",2),Vn={expose:[],setup(d){return(l,r)=>(p(),u("div",Ln,[On]))}};var Nn=Vn;const x={cn:`# Space \u95F4\u8DDD
  \u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  \u907F\u514D\u7EC4\u4EF6\u7D27\u8D34\u5728\u4E00\u8D77\uFF0C\u62C9\u5F00\u7EDF\u4E00\u7684\u7A7A\u95F4\u3002
  - \u9002\u5408\u884C\u5185\u5143\u7D20\u7684\u6C34\u5E73\u95F4\u8DDD\u3002
  - \u53EF\u4EE5\u8BBE\u7F6E\u5404\u79CD\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\u3002
  ## \u4EE3\u7801\u6F14\u793A`,us:`# Space
  Set components spacing.
  # When To Use
  Avoid components clinging together and set a unified space.
  ## Examples
  `};var Yn={category:"Components",subtitle:"\u95F4\u8DDD",type:"Layout",title:"Space",render(){return n("div",null,[n(t("Md"),{cn:x.cn,us:x.us},null),n(t("demo-sort"),null,{default:()=>[n(t("demo-container"),{api:V,code:N},{default:()=>[n(k,null,null)]}),n(t("demo-container"),{api:H,code:W},{default:()=>[n(G,null,null)]}),n(t("demo-container"),{api:en,code:an},{default:()=>[n(C,null,null)]}),n(t("demo-container"),{api:Cn,code:zn},{default:()=>[n(v,null,null)]}),n(t("demo-container"),{api:In,code:An},{default:()=>[n(z,null,null)]})]}),n(t("api"),null,{default:()=>[n(Nn,null,null)]})])}};export{Yn as default};

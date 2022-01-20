import{Y as n,bw as a,bx as o,d as v,k as b,bG as y,bH as k,b as t,bI as S,D as u,cx as V,bS as z,cy as j,bX as E,F as W,bV as X,c8 as B,bz as h,cc as N,bO as M}from"./vendor.846be9ce.js";const w={};function U(e,r){const s=n("a-skeleton");return a(),o(s)}w.render=U;var F=w,H=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u5360\u4F4D\u6548\u679C\u3002
</cn>

<us>
#### Basic
Simplest Skeleton usage.
</us>
`,Y=`<template>
  <a-skeleton />
</template>
`;const C={};function K(e,r){const s=n("a-skeleton");return a(),o(s,{active:""})}C.render=K;var Q=C,Z=`<cn>
#### \u52A8\u753B\u6548\u679C
\u663E\u793A\u52A8\u753B\u6548\u679C\u3002
</cn>

<us>
#### Active Animation
Display active animation.
</us>
`,G=`<template>
  <a-skeleton active />
</template>
`,m=v({setup(){const e=b(!1);return{loading:e,showSkeleton:()=>{e.value=!0,setTimeout(()=>{e.value=!1},3e3)}}}});const g=S();y("data-v-de87cf5c");const J={class:"article"},R=t("div",null,[t("h4",null,"Ant Design Vue, a design language"),t("p",null," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. ")],-1),tt=u("Show Skeleton");k();const et=g((e,r,s,d,A,P)=>{const c=n("a-skeleton"),p=n("a-button");return a(),o("div",J,[t(c,{loading:e.loading},{default:g(()=>[R]),_:1},8,["loading"]),t(p,{disabled:e.loading,onClick:e.showSkeleton},{default:g(()=>[tt]),_:1},8,["disabled","onClick"])])});m.render=et;m.__scopeId="data-v-de87cf5c";var nt=`<cn>
#### \u5305\u542B\u5B50\u7EC4\u4EF6
\u52A0\u8F7D\u5360\u4F4D\u56FE\u5305\u542B\u5B50\u7EC4\u4EF6\u3002
</cn>

<us>
#### Contains sub component
Skeleton contains sub component.
</us>
`,at=`<template>
  <div class="article">
    <a-skeleton :loading="loading">
      <div>
        <h4>Ant Design Vue, a design language</h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      </div>
    </a-skeleton>
    <a-button :disabled="loading" @click="showSkeleton">Show Skeleton</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref<boolean>(false);

    const showSkeleton = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    };
    return {
      loading,
      showSkeleton,
    };
  },
});
<\/script>
<style scoped>
.article h4 {
  margin-bottom: 16px;
}
.article button {
  margin-top: 16px;
}
</style>
`;const x={};function ot(e,r){const s=n("a-skeleton");return a(),o(s,{avatar:"",paragraph:{rows:4}})}x.render=ot;var st=x,it=`<cn>
#### \u590D\u6742\u7684\u7EC4\u5408
\u66F4\u590D\u6742\u7684\u7EC4\u5408\u3002
</cn>

<us>
#### Complex combination
Complex combination with avatar and multiple paragraphs.
</us>
`,rt=`<template>
  <a-skeleton avatar :paragraph="{ rows: 4 }" />
</template>
`;const D=[];for(let e=0;e<3;e++)D.push({href:"https://www.antdv.com/",title:`ant design vue part ${e}`,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var f=v({components:{StarOutlined:V,LikeOutlined:z,MessageOutlined:j},setup(){const e=b(!0);return{loading:e,listData:D,actions:[{type:"star-outlined",text:"156"},{type:"like-outlined",text:"156"},{type:"message-outlined",text:"2"}],onChange:d=>{e.value=!d}}}});const i=S();y("data-v-5c67cfbf");const lt={key:0,width:"272",alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"};k();const dt=i((e,r,s,d,A,P)=>{const c=n("a-switch"),p=n("a-avatar"),I=n("a-list-item-meta"),O=n("a-skeleton"),L=n("a-list-item"),T=n("a-list");return a(),o("div",null,[t(c,{checked:!e.loading,onChange:e.onChange},null,8,["checked","onChange"]),t(T,{"item-layout":"vertical",size:"large","data-source":e.listData},{renderItem:i(({item:l})=>[t(L,{key:"item.title"},E({extra:i(()=>[e.loading?B("v-if",!0):(a(),o("img",lt))]),default:i(()=>[t(O,{loading:e.loading,active:"",avatar:""},{default:i(()=>[t(I,{description:l.description},{title:i(()=>[t("a",{href:l.href},h(l.title),9,["href"])]),avatar:i(()=>[t(p,{src:l.avatar},null,8,["src"])]),_:2},1032,["description"]),u(" "+h(l.content),1)]),_:2},1032,["loading"])]),_:2},[e.loading?void 0:{name:"actions",fn:i(()=>[(a(!0),o(W,null,X(e.actions,({type:_,text:q})=>(a(),o("span",{key:_},[(a(),o(N(_),{style:{"margin-right":"8px"}})),u(" "+h(q),1)]))),128))])}]),1024)]),_:1},8,["data-source"])])});f.render=dt;f.__scopeId="data-v-5c67cfbf";var ct=`<cn>
#### \u5217\u8868
\u5728\u5217\u8868\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u52A0\u8F7D\u5360\u4F4D\u7B26\u3002
</cn>

<us>
#### List
Use skeleton in list component.
</us>
`,pt=`<template>
  <div>
    <a-switch :checked="!loading" @change="onChange" />
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template v-if="!loading" #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component v-bind:is="type" style="margin-right: 8px"></component>
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
              v-if="!loading"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-skeleton :loading="loading" active avatar>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a :href="item.href">{{ item.title }}</a>
              </template>
              <template #avatar><a-avatar :src="item.avatar" /></template>
            </a-list-item-meta>
            {{ item.content }}
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts">
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
interface DataItem {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
const listData: DataItem[] = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: \`ant design vue part \${i}\`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default defineComponent({
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  setup() {
    const loading = ref<boolean>(true);

    const actions = [
      { type: 'star-outlined', text: '156' },
      { type: 'like-outlined', text: '156' },
      { type: 'message-outlined', text: '2' },
    ];

    const onChange = (checked: boolean) => {
      loading.value = !checked;
    };

    return {
      loading,
      listData,
      actions,
      onChange,
    };
  },
});
<\/script>
<style scoped>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
`;const ut={class:"markdown-body"},ht=M('<h2>API</h2><h3>Skeleton</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>active</td><td>\u662F\u5426\u5C55\u793A\u52A8\u753B\u6548\u679C</td><td>boolean</td><td>false</td></tr><tr><td>avatar</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td><td>boolean | <a href="#SkeletonAvatarProps">SkeletonAvatarProps</a></td><td>false</td></tr><tr><td>loading</td><td>\u4E3A <code>true</code> \u65F6\uFF0C\u663E\u793A\u5360\u4F4D\u56FE\u3002\u53CD\u4E4B\u5219\u76F4\u63A5\u5C55\u793A\u5B50\u7EC4\u4EF6</td><td>boolean</td><td>-</td></tr><tr><td>paragraph</td><td>\u662F\u5426\u663E\u793A\u6BB5\u843D\u5360\u4F4D\u56FE</td><td>boolean | <a href="#SkeletonParagraphProps">SkeletonParagraphProps</a></td><td>true</td></tr><tr><td>title</td><td>\u662F\u5426\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE</td><td>boolean | <a href="#SkeletonTitleProps">SkeletonTitleProps</a></td><td>true</td></tr></tbody></table><h3>SkeletonAvatarProps</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>size</td><td>\u8BBE\u7F6E\u5934\u50CF\u5360\u4F4D\u56FE\u7684\u5927\u5C0F</td><td>number | Enum{ \u2018large\u2019, \u2018small\u2019, \u2018default\u2019 }</td><td>-</td></tr><tr><td>shape</td><td>\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6</td><td>Enum{ \u2018circle\u2019, \u2018square\u2019 }</td><td>-</td></tr></tbody></table><h3>SkeletonTitleProps</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u8BBE\u7F6E\u6807\u9898\u5360\u4F4D\u56FE\u7684\u5BBD\u5EA6</td><td>number | string</td><td>-</td></tr></tbody></table><h3>SkeletonParagraphProps</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>rows</td><td>\u8BBE\u7F6E\u6BB5\u843D\u5360\u4F4D\u56FE\u7684\u884C\u6570</td><td>number</td><td>-</td></tr><tr><td>width</td><td>\u8BBE\u7F6E\u6BB5\u843D\u5360\u4F4D\u56FE\u7684\u5BBD\u5EA6\uFF0C\u82E5\u4E3A\u6570\u7EC4\u65F6\u5219\u4E3A\u5BF9\u5E94\u7684\u6BCF\u884C\u5BBD\u5EA6\uFF0C\u53CD\u4E4B\u5219\u662F\u6700\u540E\u4E00\u884C\u7684\u5BBD\u5EA6</td><td>number | string | Array&lt;number | string&gt;</td><td>-</td></tr></tbody></table>',9),mt={expose:[],setup(e){return(r,s)=>(a(),o("div",ut,[ht]))}};var gt=mt;const $={cn:`# \u52A0\u8F7D\u5360\u4F4D\u56FE

  \u5728\u9700\u8981\u7B49\u5F85\u52A0\u8F7D\u5185\u5BB9\u7684\u4F4D\u7F6E\u63D0\u4F9B\u4E00\u4E2A\u5360\u4F4D\u56FE\u3002

  ## \u4F55\u65F6\u4F7F\u7528

- \u7F51\u7EDC\u8F83\u6162\uFF0C\u9700\u8981\u957F\u65F6\u95F4\u7B49\u5F85\u52A0\u8F7D\u5904\u7406\u7684\u60C5\u51B5\u4E0B\u3002
- \u56FE\u6587\u4FE1\u606F\u5185\u5BB9\u8F83\u591A\u7684\u5217\u8868/\u5361\u7247\u4E2D\u3002
- \u53EA\u5728\u7B2C\u4E00\u6B21\u52A0\u8F7D\u6570\u636E\u7684\u65F6\u5019\u4F7F\u7528\u3002
- \u53EF\u4EE5\u88AB Spin \u5B8C\u5168\u4EE3\u66FF\uFF0C\u4F46\u662F\u5728\u53EF\u7528\u7684\u573A\u666F\u4E0B\u53EF\u4EE5\u6BD4 Spin \u63D0\u4F9B\u66F4\u597D\u7684\u89C6\u89C9\u6548\u679C\u548C\u7528\u6237\u4F53\u9A8C\u3002

            ## \u4EE3\u7801\u6F14\u793A`,us:`# Skeleton

  Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.

## When To Use

- When a resource needs long time to load.
- When the component contains lots of information, such as List or Card.
- Only works when loading data for the first time.
- Could be replaced by Spin in any situation, but can provide a better user experience.

  ## Examples
  `};var _t={category:"Components",subtitle:"\u52A0\u8F7D\u5360\u4F4D\u56FE",type:"Feedback",title:"Skeleton",cols:1,render(){return t("div",null,[t(n("Md"),{cn:$.cn,us:$.us},null),t(n("demo-sort"),{cols:1},{default:()=>[t(n("demo-container"),{api:H,code:Y},{default:()=>[t(F,null,null)]}),t(n("demo-container"),{api:it,code:rt},{default:()=>[t(st,null,null)]}),t(n("demo-container"),{api:Z,code:G},{default:()=>[t(Q,null,null)]}),t(n("demo-container"),{api:nt,code:at},{default:()=>[t(m,null,null)]}),t(n("demo-container"),{api:ct,code:pt},{default:()=>[t(f,null,null)]})]}),t(n("api"),null,{default:()=>[t(gt,null,null)]})])}};export{_t as default};

import{Y as a,bw as r,bx as l,b as t,by as n,F as h,D as c,d as g,k as b,br as M,b1 as A,a4 as B,bW as E,bz as f,bO as G}from"./vendor.846be9ce.js";var D=`<cn>
#### \u5178\u578B\u5361\u7247
\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002
\u53EF\u901A\u8FC7\u8BBE\u7F6Esize\u4E3A\`default\`\u6216\u8005\`small\`\uFF0C\u63A7\u5236\u5C3A\u5BF8
</cn>

<us>
#### Basic card
A basic card containing a title, content and an extra corner content.
Supports two sizes: \`default\` and \`small\`.
</us>
`;const y={},N=t("a",{href:"#"},"more",-1),H=t("p",null,"card content",-1),X=t("p",null,"card content",-1),q=t("p",null,"card content",-1),F=t("br",null,null,-1),V=t("a",{href:"#"},"more",-1),W=t("p",null,"card content",-1),P=t("p",null,"card content",-1),R=t("p",null,"card content",-1);function Y(d,o){const e=a("a-card");return r(),l(h,null,[t(e,{title:"Default size card",style:{width:"300px"}},{extra:n(()=>[N]),default:n(()=>[H,X,q]),_:1}),F,t(e,{size:"small",title:"Small size card",style:{width:"300px"}},{extra:n(()=>[V]),default:n(()=>[W,P,R]),_:1})],64)}y.render=Y;var J=y,Q=`<template>
  <a-card title="Default size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </a-card>
  <br />
  <a-card size="small" title="Small size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </a-card>
</template>
`,U=`<cn>
  #### \u65E0\u8FB9\u6846
  \u5728\u7070\u8272\u80CC\u666F\u4E0A\u4F7F\u7528\u65E0\u8FB9\u6846\u7684\u5361\u7247
</cn>

<us>
  #### No border
  A borderless card on a gray background.
</us>
`;const C={},Z={style:{background:"#ececec",padding:"30px"}},tt=t("p",null,"Card content",-1),nt=t("p",null,"Card content",-1),et=t("p",null,"Card content",-1);function at(d,o){const e=a("a-card");return r(),l("div",Z,[t(e,{title:"Card title",bordered:!1,style:{width:"300px"}},{default:n(()=>[tt,nt,et]),_:1})])}C.render=at;var dt=C,ot=`<template>
  <div style="background: #ececec; padding: 30px">
    <a-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </div>
</template>
`,rt=`<cn>
  #### \u66F4\u7075\u6D3B\u7684\u5185\u5BB9\u5C55\u793A
  \u53EF\u4EE5\u5229\u7528 \`Card.Meta\` \u652F\u6301\u66F4\u7075\u6D3B\u7684\u5185\u5BB9
</cn>

<us>
  #### Customized content
  You can use \`Card.Meta\` to support more flexible content.
</us>
`;const v={},lt=t("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},null,-1),ct=c("www.instagram.com");function it(d,o){const e=a("a-card-meta"),i=a("a-card");return r(),l(i,{hoverable:"",style:{width:"240px"}},{cover:n(()=>[lt]),default:n(()=>[t(e,{title:"Europe Street beat"},{description:n(()=>[ct]),_:1})]),_:1})}v.render=it;var st=v,pt=`<template>
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>
`,_t=`<cn>
####  \u7F51\u683C\u578B\u5185\u5D4C\u5361\u7247
\u4E00\u79CD\u5E38\u89C1\u7684\u5361\u7247\u5185\u5BB9\u533A\u9694\u6A21\u5F0F\u3002
</cn>

<us>
#### Grid card
Grid style card content.
</us>
`;const x={},ut=c("Content"),ht=c("Content"),mt=c("Content"),gt=c("Content"),bt=c("Content"),ft=c("Content"),yt=c("Content"),Ct=c("Content");function vt(d,o){const e=a("a-card-grid"),i=a("a-card");return r(),l(i,{title:"Card Title"},{default:n(()=>[t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[ut]),_:1}),t(e,{style:{width:"25%","text-align":"center"},hoverable:!1},{default:n(()=>[ht]),_:1}),t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[mt]),_:1}),t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[gt]),_:1}),t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[bt]),_:1}),t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[ft]),_:1}),t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[yt]),_:1}),t(e,{style:{width:"25%","text-align":"center"}},{default:n(()=>[Ct]),_:1})]),_:1})}x.render=vt;var xt=x,$t=`<template>
  <a-card title="Card Title">
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center" :hoverable="false">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
    <a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>
  </a-card>
</template>
`,wt=`<cn>
  #### \u6805\u683C\u5361\u7247
  \u5728\u7CFB\u7EDF\u6982\u89C8\u9875\u9762\u5E38\u5E38\u548C\u6805\u683C\u8FDB\u884C\u914D\u5408\u3002
</cn>

<us>
  #### Card in column
  Cards usually cooperate with grid column layout in overview page.
</us>
`;const $={},kt={style:{"background-color":"#ececec",padding:"20px"}},Tt=t("p",null,"card content",-1),St=t("p",null,"card content",-1),zt=t("p",null,"card content",-1);function Lt(d,o){const e=a("a-card"),i=a("a-col"),_=a("a-row");return r(),l("div",kt,[t(_,{gutter:16},{default:n(()=>[t(i,{span:8},{default:n(()=>[t(e,{title:"Card title",bordered:!1},{default:n(()=>[Tt]),_:1})]),_:1}),t(i,{span:8},{default:n(()=>[t(e,{title:"Card title",bordered:!1},{default:n(()=>[St]),_:1})]),_:1}),t(i,{span:8},{default:n(()=>[t(e,{title:"Card title",bordered:!1},{default:n(()=>[zt]),_:1})]),_:1})]),_:1})])}$.render=Lt;var Ot=$,Kt=`<template>
  <div style="background-color: #ececec; padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
`,jt=`<cn>
  #### \u5185\u90E8\u5361\u7247
  \u53EF\u4EE5\u653E\u5728\u666E\u901A\u5361\u7247\u5185\u90E8\uFF0C\u5C55\u793A\u591A\u5C42\u7EA7\u7ED3\u6784\u7684\u4FE1\u606F
</cn>

<us>
  #### Inner card
  It can be placed inside the ordinary card to display the information of the multilevel structure
</us>
`;const w={},It=t("p",{style:{"font-size":"14px",color:"rgba(0, 0, 0, 0.85)","margin-bottom":"16px","font-weight":"500"}}," Group title ",-1),Mt=t("a",{href:"#"},"More",-1),At=c(" Inner Card content "),Bt=t("a",{href:"#"},"More",-1),Et=c(" Inner Card content ");function Gt(d,o){const e=a("a-card");return r(),l(e,{title:"Card title"},{default:n(()=>[It,t(e,{title:"Inner card title"},{extra:n(()=>[Mt]),default:n(()=>[At]),_:1}),t(e,{title:"Inner card title",style:{marginTop:"16px"}},{extra:n(()=>[Bt]),default:n(()=>[Et]),_:1})]),_:1})}w.render=Gt;var Dt=w,Nt=`<template>
  <a-card title="Card title">
    <p style="font-size: 14px; color: rgba(0, 0, 0, 0.85); margin-bottom: 16px; font-weight: 500">
      Group title
    </p>
    <a-card title="Inner card title">
      <template #extra>
        <a href="#">More</a>
      </template>
      Inner Card content
    </a-card>
    <a-card title="Inner card title" :style="{ marginTop: '16px' }">
      <template #extra>
        <a href="#">More</a>
      </template>
      Inner Card content
    </a-card>
  </a-card>
</template>
`,Ht=`<cn>
  #### \u9884\u52A0\u8F7D\u7684\u5361\u7247
  \u6570\u636E\u8BFB\u5165\u524D\u4F1A\u6709\u6587\u672C\u5757\u6837\u5F0F
</cn>

<us>
  #### Loading card
  Shows a loading indirector while the contents of the card is being featched
</us>
`,k=g({setup(){const d=b(!0);return{loading:d,handleClick:()=>{d.value=!d.value}}}});const Xt=c("whatever content"),qt=c("Toggle loading");function Ft(d,o,e,i,_,m){const p=a("a-card"),s=a("a-button");return r(),l(h,null,[t(p,{loading:d.loading,title:"Card title"},{default:n(()=>[Xt]),_:1},8,["loading"]),t(s,{style:{"margin-top":"16px"},onClick:d.handleClick},{default:n(()=>[qt]),_:1},8,["onClick"])],64)}k.render=Ft;var Vt=`<template>
  <a-card :loading="loading" title="Card title">whatever content</a-card>
  <a-button style="margin-top: 16px" @click="handleClick">Toggle loading</a-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const loading = ref(true);

    const handleClick = () => {
      loading.value = !loading.value;
    };

    return {
      loading,
      handleClick,
    };
  },
});
<\/script>
`,Wt=`<cn>
  #### \u652F\u6301\u66F4\u591A\u5185\u5BB9\u914D\u7F6E
  \u4E00\u79CD\u652F\u6301\u5C01\u9762\u3001\u5934\u50CF\u3001\u6807\u9898\u548C\u63CF\u8FF0\u4FE1\u606F\u7684\u5361\u7247\u3002
</cn>

<us>
  #### Support more content configuration
  A Card that supports \`cover\`, \`avatar\`, \`title\` and \`description\`.
</us>
`,T=g({components:{SettingOutlined:M,EditOutlined:A,EllipsisOutlined:B}});const Pt=t("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"},null,-1);function Rt(d,o,e,i,_,m){const p=a("setting-outlined"),s=a("edit-outlined"),u=a("ellipsis-outlined"),K=a("a-avatar"),j=a("a-card-meta"),I=a("a-card");return r(),l(I,{hoverable:"",style:{width:"300px"}},{cover:n(()=>[Pt]),actions:n(()=>[t(p,{key:"setting"}),t(s,{key:"edit"}),t(u,{key:"ellipsis"})]),default:n(()=>[t(j,{title:"Card title",description:"This is the description"},{avatar:n(()=>[t(K,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})]),_:1})]),_:1})}T.render=Rt;var Yt=`<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template class="ant-card-actions" #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
    </a-card-meta>
  </a-card>
</template>
<script lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
});
<\/script>
`,Jt=`<cn>
#### \u7B80\u6D01\u5361\u7247
\u53EA\u5305\u542B\u5185\u5BB9\u533A\u57DF\u3002
</cn>

<us>
#### Simple card
A simple card only containing a content area.
</us>
`;const S={},Qt=t("p",null,"Card content",-1),Ut=t("p",null,"Card content",-1),Zt=t("p",null,"Card content",-1);function tn(d,o){const e=a("a-card");return r(),l(e,{style:{width:"300px"}},{default:n(()=>[Qt,Ut,Zt]),_:1})}S.render=tn;var nn=S,en=`<template>
  <a-card style="width: 300px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </a-card>
</template>
`,an=`<cn>
  #### \u5E26\u9875\u7B7E\u7684\u5361\u7247
  \u53EF\u627F\u8F7D\u66F4\u591A\u5185\u5BB9
</cn>

<us>
  #### With tabs
  More content can be hosted
</us>
`,z=g({components:{HomeOutlined:E},setup(){const d=[{key:"tab1",slots:{tab:"customRender"}},{key:"tab2",tab:"tab2"}],o={tab1:"content1",tab2:"content2"},e=[{key:"article",tab:"article"},{key:"app",tab:"app"},{key:"project",tab:"project"}],i=b("tab1"),_=b("app");return{tabList:d,contentList:o,tabListNoTitle:e,key:i,noTitleKey:_,onTabChange:(p,s)=>{console.log(p,s),s==="key"?i.value=p:s==="noTitleKey"&&(_.value=p)}}}});const dn=t("a",{href:"#"},"More",-1),on=t("br",null,null,-1),rn=t("br",null,null,-1),ln={key:0},cn={key:1},sn={key:2},pn=t("a",{href:"#"},"More",-1);function _n(d,o,e,i,_,m){const p=a("home-outlined"),s=a("a-card");return r(),l(h,null,[t(s,{style:{width:"100%"},title:"Card title","tab-list":d.tabList,"active-tab-key":d.key,onTabChange:o[1]||(o[1]=u=>d.onTabChange(u,"key"))},{customRender:n(u=>[t("span",null,[t(p),c(" "+f(u.key),1)])]),extra:n(()=>[dn]),default:n(()=>[c(" "+f(d.contentList[d.key]),1)]),_:1},8,["tab-list","active-tab-key"]),on,rn,t(s,{style:{width:"100%"},"tab-list":d.tabListNoTitle,"active-tab-key":d.noTitleKey,onTabChange:o[2]||(o[2]=u=>d.onTabChange(u,"noTitleKey"))},{tabBarExtraContent:n(()=>[pn]),default:n(()=>[d.noTitleKey==="article"?(r(),l("p",ln,"article content")):d.noTitleKey==="app"?(r(),l("p",cn,"app content")):(r(),l("p",sn,"project content"))]),_:1},8,["tab-list","active-tab-key"])],64)}z.render=_n;var un=`<template>
  <a-card
    style="width: 100%"
    title="Card title"
    :tab-list="tabList"
    :active-tab-key="key"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <template #customRender="item">
      <span>
        <home-outlined />
        {{ item.key }}
      </span>
    </template>
    <template #extra>
      <a href="#">More</a>
    </template>
    {{ contentList[key] }}
  </a-card>
  <br />
  <br />
  <a-card
    style="width: 100%"
    :tab-list="tabListNoTitle"
    :active-tab-key="noTitleKey"
    @tabChange="key => onTabChange(key, 'noTitleKey')"
  >
    <p v-if="noTitleKey === 'article'">article content</p>
    <p v-else-if="noTitleKey === 'app'">app content</p>
    <p v-else>project content</p>
    <template #tabBarExtraContent>
      <a href="#">More</a>
    </template>
  </a-card>
</template>
<script lang="ts">
import { HomeOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    HomeOutlined,
  },
  setup() {
    const tabList = [
      {
        key: 'tab1',
        // tab: 'tab1',
        slots: { tab: 'customRender' },
      },
      {
        key: 'tab2',
        tab: 'tab2',
      },
    ];
    const contentList = {
      tab1: 'content1',
      tab2: 'content2',
    };
    const tabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];
    const key = ref('tab1');
    const noTitleKey = ref('app');

    const onTabChange = (value: string, type: string) => {
      console.log(value, type);
      if (type === 'key') {
        key.value = value;
      } else if (type === 'noTitleKey') {
        noTitleKey.value = value;
      }
    };

    return {
      tabList,
      contentList,
      tabListNoTitle,
      key,
      noTitleKey,
      onTabChange,
    };
  },
});
<\/script>
`,hn=`<cn>
#### \u7070\u8272\u4E3B\u9898
\`theme="gray"\`
</cn>

<us>
#### gray
TODO.
</us>
`;const L={},mn=t("a",{href:"#"},"more",-1),gn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),bn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),fn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),yn=t("br",null,null,-1),Cn=t("a",{href:"#"},"more",-1),vn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),xn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),$n=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),wn=t("br",null,null,-1),kn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),Tn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),Sn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),zn=t("br",null,null,-1),Ln=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),On=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),Kn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),jn=t("br",null,null,-1),In=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),Mn=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1),An=t("p",null,"\u6C34\u6EF4\u7EC4\u4EF6\u5E93",-1);function Bn(d,o){const e=a("a-card");return r(),l(h,null,[t(e,{title:"Default size card",style:{width:"300px"},theme:"gray"},{extra:n(()=>[mn]),default:n(()=>[gn,bn,fn]),_:1}),yn,t(e,{size:"small",title:"Small size card",style:{width:"300px"},theme:"gray"},{extra:n(()=>[Cn]),default:n(()=>[vn,xn,$n]),_:1}),wn,t(e,{style:{width:"300px"},theme:"gray"},{default:n(()=>[kn,Tn,Sn]),_:1}),zn,t(e,{size:"small",style:{width:"300px"},theme:"gray"},{default:n(()=>[Ln,On,Kn]),_:1}),jn,t(e,{size:"small",bordered:!1,style:{width:"300px"},theme:"gray"},{default:n(()=>[In,Mn,An]),_:1})],64)}L.render=Bn;var En=L,Gn=`<template>
  <a-card title="Default size card" style="width: 300px" theme="gray">
    <template #extra><a href="#">more</a></template>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
  </a-card>
  <br />
  <a-card size="small" title="Small size card" style="width: 300px" theme="gray">
    <template #extra><a href="#">more</a></template>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
  </a-card>
  <br />
  <a-card style="width: 300px" theme="gray">
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
  </a-card>
  <br />
  <a-card size="small" style="width: 300px" theme="gray">
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
  </a-card>
  <br />
  <a-card size="small" :bordered="false" style="width: 300px" theme="gray">
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
    <p>\u6C34\u6EF4\u7EC4\u4EF6\u5E93</p>
  </a-card>
</template>
`;const Dn={class:"markdown-body"},Nn=G("<h2>API</h2><h3>Card</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>actions</td><td>\u5361\u7247\u64CD\u4F5C\u7EC4\uFF0C\u4F4D\u7F6E\u5728\u5361\u7247\u5E95\u90E8</td><td>slots</td><td>-</td><td></td></tr><tr><td>activeTabKey</td><td>\u5F53\u524D\u6FC0\u6D3B\u9875\u7B7E\u7684 key</td><td>string</td><td>-</td><td></td></tr><tr><td>headStyle</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u533A\u57DF\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>bodyStyle</td><td>\u5185\u5BB9\u533A\u57DF\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>cover</td><td>\u5361\u7247\u5C01\u9762</td><td>slot</td><td>-</td><td></td></tr><tr><td>defaultActiveTabKey</td><td>\u521D\u59CB\u5316\u9009\u4E2D\u9875\u7B7E\u7684 key\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E activeTabKey</td><td>string</td><td>\u7B2C\u4E00\u4E2A\u9875\u7B7E</td><td></td></tr><tr><td>extra</td><td>\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>hoverable</td><td>\u9F20\u6807\u79FB\u8FC7\u65F6\u53EF\u6D6E\u8D77</td><td>boolean</td><td>false</td><td></td></tr><tr><td>loading</td><td>\u5F53\u5361\u7247\u5185\u5BB9\u8FD8\u5728\u52A0\u8F7D\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u7528 loading \u5C55\u793A\u4E00\u4E2A\u5360\u4F4D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>tabList</td><td>\u9875\u7B7E\u6807\u9898\u5217\u8868, \u53EF\u4EE5\u901A\u8FC7 scopedSlots \u5C5E\u6027\u81EA\u5B9A\u4E49 tab</td><td>Array&lt;{key: string, tab: any, scopedSlots: {tab: \u2018XXX\u2019}}&gt;</td><td>-</td><td></td></tr><tr><td>tabBarExtraContent</td><td>tab bar \u4E0A\u989D\u5916\u7684\u5143\u7D20</td><td>slot</td><td>\u65E0</td><td>1.5.0</td></tr><tr><td>size</td><td>card \u7684\u5C3A\u5BF8</td><td><code>default</code> | <code>small</code></td><td><code>default</code></td><td></td></tr><tr><td>theme</td><td>card \u7684\u4E3B\u9898</td><td><code>default</code> | <code>gray</code></td><td>3.15.0</td><td></td></tr><tr><td>title</td><td>\u5361\u7247\u6807\u9898</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>type</td><td>\u5361\u7247\u7C7B\u578B\uFF0C\u53EF\u8BBE\u7F6E\u4E3A <code>inner</code> \u6216 \u4E0D\u8BBE\u7F6E</td><td>string</td><td>-</td><td></td></tr><tr><td>headPlacement</td><td>\u5934\u90E8\u7684\u4F4D\u7F6E</td><td><code>top</code> | <code>bottom</code></td><td><code>top</code></td><td>3.21.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>tabChange</td><td>\u9875\u7B7E\u5207\u6362\u7684\u56DE\u8C03</td><td>(key) =&gt; void</td><td>-</td></tr></tbody></table><h3>Card.Grid</h3><h3>Card.Meta</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>avatar</td><td>\u5934\u50CF/\u56FE\u6807</td><td>slot</td><td>-</td><td></td></tr><tr><td>description</td><td>\u63CF\u8FF0\u5185\u5BB9</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>title</td><td>\u6807\u9898\u5185\u5BB9</td><td>string|slot</td><td>-</td><td></td></tr></tbody></table>",8),Hn={expose:[],setup(d){return(o,e)=>(r(),l("div",Dn,[Nn]))}};var Xn=Hn;const O={cn:`# Card \u5361\u7247
         \u901A\u7528\u5361\u7247\u5BB9\u5668
       ## \u4F55\u65F6\u4F7F\u7528
         \u6700\u57FA\u7840\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\uFF0C\u5E38\u7528\u4E8E\u540E\u53F0\u6982\u89C8\u9875\u9762\u3002
       ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Card
         Simple rectangular container.
       ## When To Use
         A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
       ## Examples
        `};var Fn={category:"Components",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Card",subtitle:"\u5361\u7247",cols:1,render(){return t("div",null,[t(a("Md"),{cn:O.cn,us:O.us},null),t(a("demo-sort"),{cols:1},{default:()=>[t(a("demo-container"),{api:D,code:Q},{default:()=>[t(J,null,null)]}),t(a("demo-container"),{api:U,code:ot},{default:()=>[t(dt,null,null)]}),t(a("demo-container"),{api:rt,code:pt},{default:()=>[t(st,null,null)]}),t(a("demo-container"),{api:_t,code:$t},{default:()=>[t(xt,null,null)]}),t(a("demo-container"),{api:wt,code:Kt},{default:()=>[t(Ot,null,null)]}),t(a("demo-container"),{api:jt,code:Nt},{default:()=>[t(Dt,null,null)]}),t(a("demo-container"),{api:Ht,code:Vt},{default:()=>[t(k,null,null)]}),t(a("demo-container"),{api:Wt,code:Yt},{default:()=>[t(T,null,null)]}),t(a("demo-container"),{api:Jt,code:en},{default:()=>[t(nn,null,null)]}),t(a("demo-container"),{api:an,code:un},{default:()=>[t(z,null,null)]}),t(a("demo-container"),{api:hn,code:Gn},{default:()=>[t(En,null,null)]})]}),t(a("api"),null,{default:()=>[t(Xn,null,null)]})])}};export{Fn as default};

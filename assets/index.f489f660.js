import{d as f,Y as e,bw as r,bx as s,by as n,b as t,bz as g,D as u,bG as I,bH as k,bI as M,F as $,cx as O,bS as j,cy as H,bV as X,cc as V,bO as q}from"./vendor.846be9ce.js";import{a as F}from"./index.es.1d3253ec.js";const E=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}];var D=f({setup(){return{data:E}}});const B={href:"https://www.antdv.com/"};function R(a,c,l,_,v,y){const d=e("a-avatar"),o=e("a-list-item-meta"),i=e("a-list-item"),p=e("a-list");return r(),s(p,{"item-layout":"horizontal","data-source":a.data},{renderItem:n(({item:m})=>[t(i,null,{default:n(()=>[t(o,{description:"Ant Design, a design language for background applications, is refined by Ant UED Team"},{title:n(()=>[t("a",B,g(m.title),1)]),avatar:n(()=>[t(d,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])}D.render=R;var U=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u7840\u5217\u8868\u3002
</cn>

<us>
#### Basic list
Basic list.
</us>
`,Y=`<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
<\/script>
`;const G=[{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"}];var L=f({setup(){return{data:G}}});const N=u("Card content");function K(a,c,l,_,v,y){const d=e("a-card"),o=e("a-list-item"),i=e("a-list");return r(),s(i,{grid:{gutter:16,column:4},"data-source":a.data},{renderItem:n(({item:p})=>[t(o,null,{default:n(()=>[t(d,{title:p.title},{default:n(()=>[N]),_:2},1032,["title"])]),_:2},1024)]),_:1},8,["data-source"])}L.render=K;var P=`<cn>
#### \u6805\u683C\u5217\u8868
\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E \`List\` \u7684 \`grid\` \u5C5E\u6027\u6765\u5B9E\u73B0\u6805\u683C\u5217\u8868\uFF0C\`column\` \u53EF\u8BBE\u7F6E\u671F\u671B\u663E\u793A\u7684\u5217\u6570\u3002
</cn>

<us>
#### Grid
Creating a grid list by setting the \`grid\` property of List
</us>
`,W=`<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card :title="item.title">Card content</a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
<\/script>
`;const J=()=>"https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";var w=f({setup(){const{dataList:a,loading:c,loadingMore:l,loadMore:_}=F(J,{listKey:"results"});return{loading:c,loadingMore:l,dataList:a,loadMore:_}}});const h=M();I("data-v-ee5f8832");const Q={style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"}},Z=u("loading more"),tt=t("a",null,"edit",-1),et=t("a",null,"more",-1),nt={href:"https://www.antdv.com/"},at=t("div",null,"content",-1);k();const it=h((a,c,l,_,v,y)=>{const d=e("a-spin"),o=e("a-button"),i=e("a-avatar"),p=e("a-list-item-meta"),m=e("a-list-item"),b=e("a-list");return r(),s(b,{class:"demo-loadmore-list",loading:a.loading,"item-layout":"horizontal","data-source":a.dataList},{loadMore:h(()=>[t("div",Q,[a.loadingMore?(r(),s(d,{key:0})):(r(),s(o,{key:1,onClick:a.loadMore},{default:h(()=>[Z]),_:1},8,["onClick"]))])]),renderItem:h(({item:x})=>[t(m,null,{actions:h(()=>[tt,et]),default:h(()=>[t(p,{description:"Ant Design, a design language for background applications, is refined by Ant UED Team"},{title:h(()=>[t("a",nt,g(x.name.last),1)]),avatar:h(()=>[t(i,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})]),_:2},1024),at]),_:2},1024)]),_:1},8,["loading","data-source"])});w.render=it;w.__scopeId="data-v-ee5f8832";var dt=`<cn>
#### \u52A0\u8F7D\u66F4\u591A
\u53EF\u901A\u8FC7 \`loadMore\` \u5C5E\u6027\u5B9E\u73B0\u52A0\u8F7D\u66F4\u591A\u529F\u80FD\u3002
</cn>

<us>
#### Load more
Load more list with \`loadMore\` property.
</us>
`,ot=`<template>
  <a-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="dataList"
  >
    <template #loadMore>
      <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="loadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
        <div>content</div>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useLoadMore } from 'vue-request';

const getFakeData = () => \`https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo\`;

export default defineComponent({
  setup() {
    const { dataList, loading, loadingMore, loadMore } = useLoadMore(getFakeData, {
      listKey: 'results',
    });

    return {
      loading,
      loadingMore,
      dataList,
      loadMore,
    };
  },
});
<\/script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
`;const rt=[{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"},{title:"Title 5"},{title:"Title 6"}];var T=f({setup(){return{data:rt}}});const st=u("Card content");function lt(a,c,l,_,v,y){const d=e("a-card"),o=e("a-list-item"),i=e("a-list");return r(),s(i,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},"data-source":a.data},{renderItem:n(({item:p})=>[t(o,null,{default:n(()=>[t(d,{title:p.title},{default:n(()=>[st]),_:2},1032,["title"])]),_:2},1024)]),_:1},8,["data-source"])}T.render=lt;var ct=`<cn>
#### \u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868
\u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868\u3002\u5C3A\u5BF8\u4E0E [Layout Grid](https://www.antdv.com/components/grid-cn/#Col) \u4FDD\u6301\u4E00\u81F4\u3002
</cn>

<us>
#### Responsive grid list
Responsive grid list. The size property is as same as [Layout Grid](https://www.antdv.com/components/grid/#Col).
</us>
`,pt=`<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card :title="item.title">Card content</a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
<\/script>
`;const mt=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];var S=f({setup(){return{data:mt}}});const ut=t("h3",{style:{margin:"16px 0"}},"Small Size",-1),gt=t("div",null,"Header",-1),ht=t("div",null,"Footer",-1),_t=t("h3",{style:{marginBottom:"16px"}},"Default Size",-1),ft=t("div",null,"Header",-1),vt=t("div",null,"Footer",-1),yt=t("h3",{style:{margin:"16px 0"}},"Large Size",-1),bt=t("div",null,"Header",-1),xt=t("div",null,"Footer",-1);function wt(a,c,l,_,v,y){const d=e("a-list-item"),o=e("a-list");return r(),s($,null,[ut,t(o,{size:"small",bordered:"","data-source":a.data},{renderItem:n(({item:i})=>[t(d,null,{default:n(()=>[u(g(i),1)]),_:2},1024)]),header:n(()=>[gt]),footer:n(()=>[ht]),_:1},8,["data-source"]),_t,t(o,{bordered:"","data-source":a.data},{renderItem:n(({item:i})=>[t(d,null,{default:n(()=>[u(g(i),1)]),_:2},1024)]),header:n(()=>[ft]),footer:n(()=>[vt]),_:1},8,["data-source"]),yt,t(o,{size:"large",bordered:"","data-source":a.data},{renderItem:n(({item:i})=>[t(d,null,{default:n(()=>[u(g(i),1)]),_:2},1024)]),header:n(()=>[bt]),footer:n(()=>[xt]),_:1},8,["data-source"])],64)}S.render=wt;var $t="<cn>\n#### \u7B80\u5355\u5217\u8868\n\u5217\u8868\u62E5\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002\n\u901A\u8FC7\u8BBE\u7F6E `size` \u4E3A `large` `small` \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E `size`\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002\n\u53EF\u901A\u8FC7\u8BBE\u7F6E `header` \u548C `footer`\uFF0C\u6765\u81EA\u5B9A\u4E49\u5217\u8868\u5934\u90E8\u548C\u5C3E\u90E8\u3002\n</cn>\n\n<us>\n#### Simple list\nAnt Design supports a default list size as well as a large and small size.\nIf a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.\nCustomizing the header and footer of list by setting `header` and `footer` property.\n</us>\n",Dt=`<template>
  <h3 :style="{ margin: '16px 0' }">Small Size</h3>
  <a-list size="small" bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
  <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
  <a-list bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
  <h3 :style="{ margin: '16px 0' }">Large Size</h3>
  <a-list size="large" bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
<\/script>
`;const C=[];for(let a=0;a<23;a++)C.push({href:"https://www.antdv.com/",title:`ant design vue part ${a}`,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var A=f({components:{StarOutlined:O,LikeOutlined:j,MessageOutlined:H},setup(){return{listData:C,pagination:{onChange:l=>{console.log(l)},pageSize:3},actions:[{type:"StarOutlined",text:"156"},{type:"LikeOutlined",text:"156"},{type:"MessageOutlined",text:"2"}]}}});const Lt=t("div",null,[t("b",null,"ant design vue"),u(" footer part ")],-1),Tt=t("img",{width:"272",alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},null,-1);function St(a,c,l,_,v,y){const d=e("a-avatar"),o=e("a-list-item-meta"),i=e("a-list-item"),p=e("a-list");return r(),s(p,{"item-layout":"vertical",size:"large",pagination:a.pagination,"data-source":a.listData},{footer:n(()=>[Lt]),renderItem:n(({item:m})=>[t(i,{key:"item.title"},{actions:n(()=>[(r(!0),s($,null,X(a.actions,({type:b,text:x})=>(r(),s("span",{key:b},[(r(),s(V(b),{style:{"margin-right":"8px"}})),u(" "+g(x),1)]))),128))]),extra:n(()=>[Tt]),default:n(()=>[t(o,{description:m.description},{title:n(()=>[t("a",{href:m.href},g(m.title),9,["href"])]),avatar:n(()=>[t(d,{src:m.avatar},null,8,["src"])]),_:2},1032,["description"]),u(" "+g(m.content),1)]),_:2},1024)]),_:1},8,["pagination","data-source"])}A.render=St;var Ct=`<cn>
#### \u7AD6\u6392\u5217\u8868\u6837\u5F0F
\u901A\u8FC7\u8BBE\u7F6E \`itemLayout\` \u5C5E\u6027\u4E3A \`vertical\` \u53EF\u5B9E\u73B0\u7AD6\u6392\u5217\u8868\u6837\u5F0F\u3002
</cn>

<us>
#### Vertical
Setting \`itemLayout\` property with \`vertical\` to create a vertical list.
</us>
`,At=`<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <template #footer>
      <div>
        <b>ant design vue</b>
        footer part
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component v-bind:is="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <template #extra>
          <img
            width="272"
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </template>
        <a-list-item-meta :description="item.description">
          <template #title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

const listData: Record<string, string>[] = [];

for (let i = 0; i < 23; i++) {
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
    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 3,
    };
    const actions: Record<string, string>[] = [
      { type: 'StarOutlined', text: '156' },
      { type: 'LikeOutlined', text: '156' },
      { type: 'MessageOutlined', text: '2' },
    ];
    return {
      listData,
      pagination,
      actions,
    };
  },
});
<\/script>
`;const zt={class:"markdown-body"},It=q('<h2>API</h2><h3>List</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>bordered</td><td>\u662F\u5426\u5C55\u793A\u8FB9\u6846</td><td>boolean</td><td>false</td><td></td></tr><tr><td>footer</td><td>\u5217\u8868\u5E95\u90E8</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>grid</td><td>\u5217\u8868\u6805\u683C\u914D\u7F6E</td><td>object</td><td>-</td><td></td></tr><tr><td>header</td><td>\u5217\u8868\u5934\u90E8</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>itemLayout</td><td>\u8BBE\u7F6E <code>List.Item</code> \u5E03\u5C40, \u8BBE\u7F6E\u6210 <code>vertical</code> \u5219\u7AD6\u76F4\u6837\u5F0F\u663E\u793A, \u9ED8\u8BA4\u6A2A\u6392</td><td>string</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u5F53\u5361\u7247\u5185\u5BB9\u8FD8\u5728\u52A0\u8F7D\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u7528 <code>loading</code> \u5C55\u793A\u4E00\u4E2A\u5360\u4F4D</td><td>boolean|<a href="https://www.antdv.com/components/spin-cn/#API">object</a></td><td>false</td><td></td></tr><tr><td>loadMore</td><td>\u52A0\u8F7D\u66F4\u591A</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>locale</td><td>\u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E\uFF0C\u76EE\u524D\u5305\u62EC\u7A7A\u6570\u636E\u6587\u6848</td><td>object</td><td>emptyText: \u2018\u6682\u65E0\u6570\u636E\u2019</td><td></td></tr><tr><td>pagination</td><td>\u5BF9\u5E94\u7684 <code>pagination</code> <a href="https://www.antdv.com/components/pagination-cn/#API">\u914D\u7F6E</a>, \u8BBE\u7F6E <code>false</code> \u4E0D\u663E\u793A</td><td>boolean|object</td><td>false</td><td></td></tr><tr><td>size</td><td>list \u7684\u5C3A\u5BF8</td><td><code>default</code> | <code>middle</code> | <code>small</code></td><td><code>default</code></td><td></td></tr><tr><td>split</td><td>\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF</td><td>boolean</td><td>true</td><td></td></tr><tr><td>dataSource</td><td>\u5217\u8868\u6570\u636E\u6E90</td><td>any[]</td><td>-</td><td>1.5.0</td></tr><tr><td>renderItem</td><td>\u81EA\u5B9A\u4E49<code>Item</code>\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528 slot=\u201CrenderItem\u201D \u548C slot-scope=\u201Citem, index\u201D</td><td>(item, index) =&gt; vNode</td><td></td><td>-</td></tr><tr><td>rowKey</td><td>\u5404\u9879 key \u7684\u53D6\u503C\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u51FD\u6570</td><td>item =&gt; string|number</td><td></td><td></td></tr></tbody></table><h3>pagination</h3><p>\u5206\u9875\u7684\u914D\u7F6E\u9879\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>position</td><td>\u6307\u5B9A\u5206\u9875\u663E\u793A\u7684\u4F4D\u7F6E</td><td>\u2018top\u2019 | \u2018bottom\u2019 | \u2018both\u2019</td><td>\u2018bottom\u2019</td></tr></tbody></table><p>\u66F4\u591A\u914D\u7F6E\u9879\uFF0C\u8BF7\u67E5\u770B <a href="https://www.antdv.com/components/pagination-cn/#API"><code>Pagination</code></a>\u3002</p><h3>List grid props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>column</td><td>\u5217\u6570</td><td>number oneOf [ 1, 2, 3, 4, 6, 8, 12, 24]</td><td>-</td></tr><tr><td>gutter</td><td>\u6805\u683C\u95F4\u9694</td><td>number</td><td>0</td></tr><tr><td>xs</td><td><code>&lt;576px</code> \u5C55\u793A\u7684\u5217\u6570</td><td>number</td><td>-</td></tr><tr><td>sm</td><td><code>\u2265576px</code> \u5C55\u793A\u7684\u5217\u6570</td><td>number</td><td>-</td></tr><tr><td>md</td><td><code>\u2265768px</code> \u5C55\u793A\u7684\u5217\u6570</td><td>number</td><td>-</td></tr><tr><td>lg</td><td><code>\u2265992px</code> \u5C55\u793A\u7684\u5217\u6570</td><td>number</td><td>-</td></tr><tr><td>xl</td><td><code>\u22651200px</code> \u5C55\u793A\u7684\u5217\u6570</td><td>number</td><td>-</td></tr><tr><td>xxl</td><td><code>\u22651600px</code> \u5C55\u793A\u7684\u5217\u6570</td><td>number</td><td>-</td></tr></tbody></table><h3>List.Item</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>actions</td><td>\u5217\u8868\u64CD\u4F5C\u7EC4\uFF0C\u6839\u636E <code>itemLayout</code> \u7684\u4E0D\u540C, \u4F4D\u7F6E\u5728\u5361\u7247\u5E95\u90E8\u6216\u8005\u6700\u53F3\u4FA7</td><td>Array&lt;vNode&gt;/</td><td>slot</td></tr><tr><td>extra</td><td>\u989D\u5916\u5185\u5BB9, \u901A\u5E38\u7528\u5728 <code>itemLayout</code> \u4E3A <code>vertical</code> \u7684\u60C5\u51B5\u4E0B, \u5C55\u793A\u53F3\u4FA7\u5185\u5BB9; <code>horizontal</code> \u5C55\u793A\u5728\u5217\u8868\u5143\u7D20\u6700\u53F3\u4FA7</td><td>string|slot</td><td>-</td></tr></tbody></table><h3>List.Item.Meta</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>avatar</td><td>\u5217\u8868\u5143\u7D20\u7684\u56FE\u6807</td><td>slot</td><td>-</td></tr><tr><td>description</td><td>\u5217\u8868\u5143\u7D20\u7684\u63CF\u8FF0\u5185\u5BB9</td><td>string|slot</td><td>-</td></tr><tr><td>title</td><td>\u5217\u8868\u5143\u7D20\u7684\u6807\u9898</td><td>string|slot</td><td>-</td></tr></tbody></table>',13),kt={expose:[],setup(a){return(c,l)=>(r(),s("div",zt,[It]))}};var Mt=kt;const z={cn:`# \u5217\u8868
  \u901A\u7528\u5217\u8868\u3002
## \u4F55\u65F6\u4F7F\u7528
\u6700\u57FA\u7840\u7684\u5217\u8868\u5C55\u793A\uFF0C\u53EF\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\uFF0C\u5E38\u7528\u4E8E\u540E\u53F0\u6570\u636E\u5C55\u793A\u9875\u9762\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# List
  Simple List.

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
  ## Examples
  `};var Ht={category:"Components",type:"Data Display",title:"List",subtitle:"\u5217\u8868",cols:1,render(){return t("div",null,[t(e("Md"),{cn:z.cn,us:z.us},null),t(e("demo-sort"),{cols:1},{default:()=>[t(e("demo-container"),{api:U,code:Y},{default:()=>[t(D,null,null)]}),t(e("demo-container"),{api:P,code:W},{default:()=>[t(L,null,null)]}),t(e("demo-container"),{api:dt,code:ot},{default:()=>[t(w,null,null)]}),t(e("demo-container"),{api:ct,code:pt},{default:()=>[t(T,null,null)]}),t(e("demo-container"),{api:$t,code:Dt},{default:()=>[t(S,null,null)]}),t(e("demo-container"),{api:Ct,code:At},{default:()=>[t(A,null,null)]})]}),t(e("api"),null,{default:()=>[t(Mt,null,null)]})])}};export{Ht as default};

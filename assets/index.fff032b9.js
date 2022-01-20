var we=Object.defineProperty,xe=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var j=(e,t,o)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,A=(e,t)=>{for(var o in t||(t={}))_e.call(t,o)&&j(e,o,t[o]);if(z)for(var o of z(t))Se.call(t,o)&&j(e,o,t[o]);return e},G=(e,t)=>xe(e,ve(t));import{d as f,bM as Ce,P as Y,Y as a,bw as i,bx as c,by as m,b as n,bz as w,F as v,bV as $,D as y,o as N,h as V,S as Ie,r as L,k as C,bG as T,bH as J,bI as F,N as Ne,b1 as $e,at as M,c8 as U,bX as Le,ao as Re,aq as Pe,bO as De}from"./vendor.846be9ce.js";import{u as Ae}from"./index.es.1d3253ec.js";const Te=[{dataIndex:"name",key:"name",slots:{title:"customTitle",customRender:"name"}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",slots:{customRender:"tags"}},{title:"Action",key:"action",slots:{customRender:"action"}}],Je=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];var H=f({setup(){return{data:Je,columns:Te}},components:{SmileOutlined:Ce,DownOutlined:Y}});const Fe=y(" Name "),Ke=n("a",null,"Delete",-1),Be={class:"ant-dropdown-link"},Oe=y(" More actions ");function Ee(e,t,o,s,p,r){const d=a("smile-outlined"),l=a("a-tag"),g=a("a-divider"),u=a("down-outlined"),k=a("a-table");return i(),c(k,{columns:e.columns,"data-source":e.data},{name:m(({text:h})=>[n("a",null,w(h),1)]),customTitle:m(()=>[n("span",null,[n(d),Fe])]),tags:m(({text:h})=>[n("span",null,[(i(!0),c(v,null,$(h,b=>(i(),c(l,{key:b,color:b==="loser"?"volcano":b.length>5?"geekblue":"green"},{default:m(()=>[y(w(b.toUpperCase()),1)]),_:2},1032,["color"]))),128))])]),action:m(({record:h})=>[n("span",null,[n("a",null,"Invite \u4E00 "+w(h.name),1),n(g,{type:"vertical"}),Ke,n(g,{type:"vertical"}),n("a",Be,[Oe,n(u)])])]),_:1},8,["columns","data-source"])}H.render=Ee;var ze=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u7684\u8868\u683C\uFF0C\u6700\u540E\u4E00\u5217\u662F\u5404\u79CD\u64CD\u4F5C\u3002
</cn>

<us>
#### basic Usage
Simple table with actions.
</us>
`,je=`<template>
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span>
        <smile-outlined />
        Name
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ record }">
      <span>
        <a>Invite \u4E00 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link">
          More actions
          <down-outlined />
        </a>
      </span>
    </template>
  </a-table>
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
});
<\/script>
`;const Ge=[{title:"Name",dataIndex:"name",sorter:!0,width:"20%",slots:{customRender:"name"}},{title:"Gender",dataIndex:"gender",filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}],width:"20%"},{title:"Email",dataIndex:"email"}],Ye=e=>`https://randomuser.me/api?noinfo&${new URLSearchParams(e)}`;var q=f({setup(){const{data:e,run:t,loading:o,current:s,pageSize:p}=Ae(Ye,{formatResult:l=>l.results,pagination:{currentKey:"page",pageSizeKey:"results"}}),r=N(()=>({total:200,current:s.value,pageSize:p.value}));return{dataSource:e,pagination:r,loading:o,columns:Ge,handleTableChange:(l,g,u)=>{t(A({results:l.pageSize,page:l==null?void 0:l.current,sortField:u.field,sortOrder:u.order},g))}}}});function Ve(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"row-key":l=>l.login.uuid,"data-source":e.dataSource,pagination:e.pagination,loading:e.loading,onChange:e.handleTableChange},{name:m(({text:l})=>[y(w(l.first)+" "+w(l.last),1)]),_:1},8,["columns","row-key","data-source","pagination","loading","onChange"])}q.render=Ve;var Me=`<cn>
#### \u8FDC\u7A0B\u52A0\u8F7D\u6570\u636E
\u8FD9\u4E2A\u4F8B\u5B50\u901A\u8FC7\u7B80\u5355\u7684 ajax \u8BFB\u53D6\u65B9\u5F0F\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u4ECE\u670D\u52A1\u7AEF\u8BFB\u53D6\u5E76\u5C55\u73B0\u6570\u636E\uFF0C\u5177\u6709\u7B5B\u9009\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u4EE5\u53CA\u9875\u9762 loading \u6548\u679C\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u884C\u63A5\u5165\u5176\u4ED6\u6570\u636E\u5904\u7406\u65B9\u5F0F\u3002
\u53E6\u5916\uFF0C\u672C\u4F8B\u4E5F\u5C55\u793A\u4E86\u7B5B\u9009\u6392\u5E8F\u529F\u80FD\u5982\u4F55\u4EA4\u7ED9\u670D\u52A1\u7AEF\u5B9E\u73B0\uFF0C\u5217\u4E0D\u9700\u8981\u6307\u5B9A\u5177\u4F53\u7684 \`onFilter\` \u548C \`sorter\` \u51FD\u6570\uFF0C\u800C\u662F\u5728\u628A\u7B5B\u9009\u548C\u6392\u5E8F\u7684\u53C2\u6570\u53D1\u5230\u670D\u52A1\u7AEF\u6765\u5904\u7406\u3002
**\u6CE8\u610F\uFF0C\u6B64\u793A\u4F8B\u4F7F\u7528 [\u6A21\u62DF\u63A5\u53E3](https://randomuser.me)\uFF0C\u5C55\u793A\u6570\u636E\u53EF\u80FD\u4E0D\u51C6\u786E\uFF0C\u8BF7\u6253\u5F00\u7F51\u7EDC\u9762\u677F\u67E5\u770B\u8BF7\u6C42\u3002**
</cn>

<us>
#### Ajax
This example shows how to fetch and present data from a remote server, and how to implement filtering and sorting in server side by sending related parameters to server.
**Note, this example use [Mock API](https://randomuser.me) that you can look up in Network Console.**
</us>
`,Ue=`<template>
  <a-table
    :columns="columns"
    :row-key="record => record.login.uuid"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #name="{ text }">{{ text.first }} {{ text.last }}</template>
  </a-table>
</template>
<script lang="ts">
import { usePagination } from 'vue-request';
import { computed, defineComponent } from 'vue';
import { TableState, TableStateFilters } from '@fe6/water-pro';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    slots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

type Pagination = TableState['pagination'];
type APIParams = {
  results: number;
  page?: number;
  sortField?: string;
  sortOrder?: number;
  [key: string]: any;
};
type APIResult = {
  results: {
    gender: 'female' | 'male';
    name: string;
    email: string;
  }[];
};

const queryData = (params: APIParams) => {
  return \`https://randomuser.me/api?noinfo&\${new URLSearchParams(params)}\`;
};

export default defineComponent({
  setup() {
    const { data: dataSource, run, loading, current, pageSize } = usePagination<APIResult>(
      queryData,
      {
        formatResult: res => res.results,
        pagination: {
          currentKey: 'page',
          pageSizeKey: 'results',
        },
      },
    );

    const pagination = computed(() => ({
      total: 200,
      current: current.value,
      pageSize: pageSize.value,
    }));

    const handleTableChange = (pag: Pagination, filters: TableStateFilters, sorter: any) => {
      run({
        results: pag!.pageSize!,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };

    return {
      dataSource,
      pagination,
      loading,
      columns,
      handleTableChange,
    };
  },
});
<\/script>
`;const He=[{title:"Name",dataIndex:"name",slots:{customRender:"name"}},{title:"Cash Assets",className:"column-money",dataIndex:"money"},{title:"Address",dataIndex:"address"}],qe=[{key:"1",name:"John Brown",money:"\uFFE5300,000.00",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",money:"\uFFE51,256,000.00",address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",money:"\uFFE5120,000.00",address:"Sidney No. 1 Lake Park"}];var W=f({setup(){return{data:qe,columns:He}}});const We=y("Header"),Xe=y("Footer");function Qe(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,bordered:""},{name:m(({text:l})=>[n("a",null,w(l),1)]),title:m(()=>[We]),footer:m(()=>[Xe]),_:1},8,["columns","data-source"])}W.render=Qe;var Ze=`<cn>
#### \u5E26\u8FB9\u6846
\u6DFB\u52A0\u8868\u683C\u8FB9\u6846\u7EBF\uFF0C\u9875\u5934\u548C\u9875\u811A\u3002
</cn>

<us>
#### border, title and footer
Add border, title and footer for table.
</us>
`,en=`<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #title>Header</template>
    <template #footer>Footer</template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '\uFFE5300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '\uFFE51,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '\uFFE5120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
`;const K=({text:e,index:t})=>{const o={children:e,props:{}};return t===4&&(o.props.colSpan=0),o},nn=[{key:"1",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park"},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park"}];var X=f({setup(){return{data:nn,columns:[{title:"Name",dataIndex:"name",customRender:({text:t,index:o})=>o<4?V("a",{href:"javascript:;"},t):{children:V("a",{href:"javascript:;"},t),props:{colSpan:5}}},{title:"Age",dataIndex:"age",customRender:K},{title:"Home phone",colSpan:2,dataIndex:"tel",customRender:({text:t,index:o})=>{const s={children:t,props:{}};return o===2&&(s.props.rowSpan=2),o===3&&(s.props.rowSpan=0),o===4&&(s.props.colSpan=0),s}},{title:"Phone",colSpan:0,dataIndex:"phone",customRender:K},{title:"Address",dataIndex:"address",customRender:K}]}}});function tn(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,bordered:""},{name:m(({text:l})=>[n("a",null,w(l),1)]),_:1},8,["columns","data-source"])}X.render=tn;var an=`<cn>
#### \u8868\u683C\u884C/\u5217\u5408\u5E76
\u8868\u5934\u53EA\u652F\u6301\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 column \u91CC\u7684 colSpan \u8FDB\u884C\u8BBE\u7F6E\u3002
\u8868\u683C\u652F\u6301\u884C/\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 render \u91CC\u7684\u5355\u5143\u683C\u5C5E\u6027 colSpan \u6216\u8005 rowSpan \u8BBE\u503C\u4E3A 0 \u65F6\uFF0C\u8BBE\u7F6E\u7684\u8868\u683C\u4E0D\u4F1A\u6E32\u67D3\u3002
</cn>

<us>
#### colSpan and rowSpan
Table column title supports \`colSpan\` that set in \`column\`.
Table cell supports \`colSpan\` and \`rowSpan\` that set in render return object. When each of them is set to \`0\`, the cell will not be rendered.
</us>
`,dn=`<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue'; 
import { ColumnProps } from '@fe6/water-pro';
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const renderContent = ({ text, index }: any) => {
  const obj = {
    children: text,
    props: {} as any,
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

export default defineComponent({
  setup() {
    const columns: ColumnProps[] = [
      {
        title: 'Name',
        dataIndex: 'name',
        customRender: ({ text, index }) => {
          if (index < 4) {
            return h('a', { href: 'javascript:;' }, text);
          }
          return {
            children: h('a', { href: 'javascript:;' }, text),
            props: {
              colSpan: 5,
            },
          };
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        customRender: renderContent,
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        customRender: ({ text, index }) => {
          const obj = {
            children: text,
            props: {} as any,
          };
          if (index === 2) {
            obj.props.rowSpan = 2;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        customRender: renderContent,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        customRender: renderContent,
      },
    ];
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const on=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Joe Black",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Jim Green",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}],B=f({components:{SearchOutlined:Ie},setup(){const e=L({searchText:"",searchedColumn:""}),t=C();return{data:on,columns:[{title:"Name",dataIndex:"name",key:"name",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(r,d)=>d.name.toString().toLowerCase().includes(r.toLowerCase()),onFilterDropdownVisibleChange:r=>{r&&setTimeout(()=>{console.log(t.value),t.value.focus()},0)}},{title:"Age",dataIndex:"age",key:"age",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(r,d)=>d.age.toString().toLowerCase().includes(r.toLowerCase()),onFilterDropdownVisibleChange:r=>{r&&setTimeout(()=>{t.value.focus()})}},{title:"Address",dataIndex:"address",key:"address",slots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(r,d)=>d.address.toString().toLowerCase().includes(r.toLowerCase()),onFilterDropdownVisibleChange:r=>{r&&setTimeout(()=>{t.value.focus()})}}],handleSearch:(r,d,l)=>{d(),e.searchText=r[0],e.searchedColumn=l},handleReset:r=>{r(),e.searchText=""},searchText:"",searchInput:t,searchedColumn:""}}}),S=F();T("data-v-5a0df7f2");const rn={style:{padding:"8px"}},sn=y(" Search "),ln=y(" Reset "),cn={key:0};J();const un=S((e,t,o,s,p,r)=>{const d=a("a-input"),l=a("SearchOutlined"),g=a("a-button"),u=a("search-outlined"),k=a("a-table");return i(),c(k,{"data-source":e.data,columns:e.columns},{filterDropdown:S(({setSelectedKeys:h,selectedKeys:b,confirm:x,clearFilters:_,column:D})=>[n("div",rn,[n(d,{ref:"searchInput",placeholder:`Search ${D.dataIndex}`,value:b[0],style:{width:"188px","margin-bottom":"8px",display:"block"},onChange:I=>h(I.target.value?[I.target.value]:[]),onPressEnter:I=>e.handleSearch(b,x,D.dataIndex)},null,8,["placeholder","value","onChange","onPressEnter"]),n(g,{type:"primary",size:"small",style:{width:"90px","margin-right":"8px"},onClick:I=>e.handleSearch(b,x,D.dataIndex)},{icon:S(()=>[n(l)]),default:S(()=>[sn]),_:2},1032,["onClick"]),n(g,{size:"small",style:{width:"90px"},onClick:I=>e.handleReset(_)},{default:S(()=>[ln]),_:2},1032,["onClick"])])]),filterIcon:S(h=>[n(u,{style:{color:h?"#108ee9":void 0}},null,8,["style"])]),customRender:S(({text:h,column:b})=>[e.searchText&&e.searchedColumn===b.dataIndex?(i(),c("span",cn,[(i(!0),c(v,null,$(h.toString().split(new RegExp(`(?<=${e.searchText})|(?=${e.searchText})`,"i")),(x,_)=>(i(),c(v,null,[x.toLowerCase()===e.searchText.toLowerCase()?(i(),c("mark",{class:"highlight",key:_},w(x),1)):(i(),c(v,{key:1},[y(w(x),1)],2112))],64))),256))])):(i(),c(v,{key:1},[y(w(h),1)],2112))]),_:1},8,["data-source","columns"])});B.render=un;B.__scopeId="data-v-5a0df7f2";var mn=B,pn=`<cn>
#### \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355
\u901A\u8FC7 \`filterDropdown\` \u5B9A\u4E49\u81EA\u5B9A\u4E49\u7684\u5217\u7B5B\u9009\u529F\u80FD\uFF0C\u5E76\u5B9E\u73B0\u4E00\u4E2A\u641C\u7D22\u5217\u7684\u793A\u4F8B\u3002
</cn>

<us>
#### Customized filter panel
Implement a customized column search example via \`filterDropdown\`.
</us>
`,gn=`<template>
  <a-table :data-source="data" :columns="columns">
    <template #filterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="\`Search \${column.dataIndex}\`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </a-button>
        <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
          Reset
        </a-button>
      </div>
    </template>
    <template #filterIcon="filtered">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #customRender="{ text, column }">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(\`(?<=\${searchText})|(?=\${searchText})\`, 'i'))"
        >
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            class="highlight"
            :key="i"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
      <template v-else>
        {{ text }}
      </template>
    </template>
  </a-table>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export default defineComponent({
  components: {
    SearchOutlined,
  },
  setup() {
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });

    const searchInput = ref();

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        slots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) =>
          record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              console.log(searchInput.value);
              searchInput.value.focus();
            }, 0);
          }
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        slots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) =>
          record.age.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            });
          }
        },
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        slots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) =>
          record.address.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            });
          }
        },
      },
    ];

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = clearFilters => {
      clearFilters();
      state.searchText = '';
    };

    return {
      data,
      columns,
      handleSearch,
      handleReset,
      searchText: '',
      searchInput,
      searchedColumn: '',
    };
  },
});
<\/script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
`,Q=f({components:{CheckOutlined:Ne,EditOutlined:$e},setup(){const e=[{title:"name",dataIndex:"name",width:"30%",slots:{customRender:"name"}},{title:"age",dataIndex:"age"},{title:"address",dataIndex:"address"},{title:"operation",dataIndex:"operation",slots:{customRender:"operation"}}],t=C([{key:"0",name:"Edward King 0",age:32,address:"London, Park Lane no. 0"},{key:"1",name:"Edward King 1",age:32,address:"London, Park Lane no. 1"}]),o=N(()=>t.value.length+1),s=L({});return{columns:e,onDelete:g=>{t.value=t.value.filter(u=>u.key!==g)},handleAdd:()=>{const g={key:`${o.value}`,name:`Edward King ${o.value}`,age:32,address:`London, Park Lane no. ${o.value}`};t.value.push(g)},dataSource:t,editableData:s,count:o,edit:g=>{s[g]=M(t.value.filter(u=>g===u.key)[0])},save:g=>{Object.assign(t.value.filter(u=>g===u.key)[0],s[g]),delete s[g]}}}});const hn=y("Add"),kn={class:"editable-cell"},yn={key:0,class:"editable-cell-input-wrapper"},fn={key:1,class:"editable-cell-text-wrapper"},bn=n("a",null,"Delete",-1);function wn(e,t,o,s,p,r){const d=a("a-button"),l=a("a-input"),g=a("check-outlined"),u=a("edit-outlined"),k=a("a-popconfirm"),h=a("a-table");return i(),c(v,null,[n(d,{class:"editable-add-btn",onClick:e.handleAdd,style:{"margin-bottom":"8px"}},{default:m(()=>[hn]),_:1},8,["onClick"]),n(h,{bordered:"","data-source":e.dataSource,columns:e.columns},{name:m(({text:b,record:x})=>[n("div",kn,[e.editableData[x.key]?(i(),c("div",yn,[n(l,{value:e.editableData[x.key].name,"onUpdate:value":_=>e.editableData[x.key].name=_,onPressEnter:_=>e.save(x.key)},null,8,["value","onUpdate:value","onPressEnter"]),n(g,{class:"editable-cell-icon-check",onClick:_=>e.save(x.key)},null,8,["onClick"])])):(i(),c("div",fn,[y(w(b||" ")+" ",1),n(u,{class:"editable-cell-icon",onClick:_=>e.edit(x.key)},null,8,["onClick"])]))])]),operation:m(({record:b})=>[e.dataSource.length?(i(),c(k,{key:0,title:"Sure to delete?",onConfirm:x=>e.onDelete(b.key)},{default:m(()=>[bn]),_:2},1032,["onConfirm"])):U("v-if",!0)]),_:1},8,["data-source","columns"])],64)}Q.render=wn;var xn=`<cn>
#### \u53EF\u7F16\u8F91\u5355\u5143\u683C
\u5E26\u5355\u5143\u683C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\u3002
</cn>

<us>
#### Editable Cells
Table with editable cells.
</us>
`,vn=`<template>
  <a-button class="editable-add-btn" @click="handleAdd" style="margin-bottom: 8px">Add</a-button>
  <a-table bordered :data-source="dataSource" :columns="columns">
    <template #name="{ text, record }">
      <div class="editable-cell">
        <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
          <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)" />
          <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ text || ' ' }}
          <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
        </div>
      </div>
    </template>
    <template #operation="{ record }">
      <a-popconfirm
        v-if="dataSource.length"
        title="Sure to delete?"
        @confirm="onDelete(record.key)"
      >
        <a>Delete</a>
      </a-popconfirm>
    </template>
  </a-table>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref, UnwrapRef } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        slots: { customRender: 'name' },
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        slots: { customRender: 'operation' },
      },
    ];
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        name: 'Edward King 0',
        age: 32,
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: 32,
        address: 'London, Park Lane no. 1',
      },
    ]);
    const count = computed(() => dataSource.value.length + 1);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };

    const onDelete = (key: string) => {
      dataSource.value = dataSource.value.filter(item => item.key !== key);
    };
    const handleAdd = () => {
      const newData = {
        key: \`\${count.value}\`,
        name: \`Edward King \${count.value}\`,
        age: 32,
        address: \`London, Park Lane no. \${count.value}\`,
      };
      dataSource.value.push(newData);
    };

    return {
      columns,
      onDelete,
      handleAdd,
      dataSource,
      editableData,
      count,
      edit,
      save,
    };
  },
});
<\/script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
`;const _n=[{title:"name",dataIndex:"name",width:"25%",slots:{customRender:"name"}},{title:"age",dataIndex:"age",width:"15%",slots:{customRender:"age"}},{title:"address",dataIndex:"address",width:"40%",slots:{customRender:"address"}},{title:"operation",dataIndex:"operation",slots:{customRender:"operation"}}],Z=[];for(let e=0;e<100;e++)Z.push({key:e.toString(),name:`Edrward ${e}`,age:32,address:`London Park no. ${e}`});var O=f({setup(){const e=C(Z),t=L({});return{dataSource:e,columns:_n,editingKey:"",editableData:t,edit:r=>{t[r]=M(e.value.filter(d=>r===d.key)[0])},save:r=>{Object.assign(e.value.filter(d=>r===d.key)[0],t[r]),delete t[r]},cancel:r=>{delete t[r]}}}});const R=F();T("data-v-84ede57c");const Sn={class:"editable-row-operations"},Cn={key:0},In=n("a",null,"Cancel",-1),Nn={key:1};J();const $n=R((e,t,o,s,p,r)=>{const d=a("a-input"),l=a("a-popconfirm"),g=a("a-table");return i(),c(g,{columns:e.columns,"data-source":e.dataSource,bordered:""},Le({operation:R(({record:u})=>[n("div",Sn,[e.editableData[u.key]?(i(),c("span",Cn,[n("a",{onClick:k=>e.save(u.key)},"Save",8,["onClick"]),n(l,{title:"Sure to cancel?",onConfirm:k=>e.cancel(u.key)},{default:R(()=>[In]),_:2},1032,["onConfirm"])])):(i(),c("span",Nn,[n("a",{onClick:k=>e.edit(u.key)},"Edit",8,["onClick"])]))])]),_:2},[$(["name","age","address"],u=>({name:u,fn:R(({text:k,record:h})=>[n("div",null,[e.editableData[h.key]?(i(),c(d,{key:0,value:e.editableData[h.key][u],"onUpdate:value":b=>e.editableData[h.key][u]=b,style:{margin:"-5px 0"}},null,8,["value","onUpdate:value"])):(i(),c(v,{key:1},[y(w(k),1)],2112))])])}))]),1032,["columns","data-source"])});O.render=$n;O.__scopeId="data-v-84ede57c";var Ln=`<cn>
#### \u53EF\u7F16\u8F91\u884C
\u5E26\u884C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\u3002
</cn>

<us>
#### Editable Rows
Table with editable rows.
</us>
`,Rn=`<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template v-for="col in ['name', 'age', 'address']" #[col]="{ text, record }" :key="col">
      <div>
        <a-input
          v-if="editableData[record.key]"
          v-model:value="editableData[record.key][col]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template #operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="editableData[record.key]">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script lang="ts">
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    slots: { customRender: 'name' },
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    slots: { customRender: 'age' },
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    slots: { customRender: 'address' },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  },
];
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}
export default defineComponent({
  setup() {
    const dataSource = ref(data);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };
    const cancel = (key: string) => {
      delete editableData[key];
    };
    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
    };
  },
});
<\/script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
`;const Pn=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",width:"12%"},{title:"Address",dataIndex:"address",width:"30%",key:"address"}],Dn=[{key:1,name:"John Brown sr.",age:60,address:"New York No. 1 Lake Park",children:[{key:11,name:"John Brown",age:42,address:"New York No. 2 Lake Park"},{key:12,name:"John Brown jr.",age:30,address:"New York No. 3 Lake Park",children:[{key:121,name:"Jimmy Brown",age:16,address:"New York No. 3 Lake Park"}]},{key:13,name:"Jim Green sr.",age:72,address:"London No. 1 Lake Park",children:[{key:131,name:"Jim Green",age:42,address:"London No. 2 Lake Park",children:[{key:1311,name:"Jim Green jr.",age:25,address:"London No. 3 Lake Park"},{key:1312,name:"Jimmy Green sr.",age:18,address:"London No. 4 Lake Park"}]}]}]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],An={onChange:(e,t)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",t)},onSelect:(e,t,o)=>{console.log(e,t,o)},onSelectAll:(e,t,o)=>{console.log(e,t,o)}};var ee=f({setup(){return{data:Dn,columns:Pn,rowSelection:An}}});function Tn(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,"row-selection":e.rowSelection},null,8,["columns","data-source","row-selection"])}ee.render=Tn;var Jn=`<cn>
#### \u6811\u5F62\u6570\u636E\u5C55\u793A
\u8868\u683C\u652F\u6301\u6811\u5F62\u6570\u636E\u7684\u5C55\u793A\uFF0C\u5F53\u6570\u636E\u4E2D\u6709 \`children\` \u5B57\u6BB5\u65F6\u4F1A\u81EA\u52A8\u5C55\u793A\u4E3A\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u6216\u914D\u7F6E\u4E3A\u5176\u4ED6\u5B57\u6BB5\u53EF\u4EE5\u7528 \`childrenColumnName\` \u8FDB\u884C\u914D\u7F6E\u3002
\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E \`indentSize\` \u4EE5\u63A7\u5236\u6BCF\u4E00\u5C42\u7684\u7F29\u8FDB\u5BBD\u5EA6\u3002
> \u6CE8\uFF1A\u6682\u4E0D\u652F\u6301\u7236\u5B50\u6570\u636E\u9012\u5F52\u5173\u8054\u9009\u62E9\u3002
</cn>

<us>
#### Tree data
Display tree structure data in Table when there is field key \`children\` in dataSource, try to customize \`childrenColumnName\` property to avoid tree table structure.
You can control the indent width by setting \`indentSize\`.
> Note, no support for recursive selection of tree structure data table yet.
</us>
`,Fn=`<template>
  <a-table :columns="columns" :data-source="data" :row-selection="rowSelection" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
  children?: DataItem[]
}

const data: DataItem[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
    console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default defineComponent({
  setup() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
});
<\/script>
`;const Kn=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",dataIndex:"",key:"x",slots:{customRender:"action"}}],Bn=[{key:1,name:"John Brown",age:32,address:"New York No. 1 Lake Park",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{key:2,name:"Jim Green",age:42,address:"London No. 1 Lake Park",description:"My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."},{key:3,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",description:"My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."}];var ne=f({setup(){return{data:Bn,columns:Kn}}});const On=n("a",null,"Delete",-1),En={style:{margin:"0"}};function zn(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data},{action:m(()=>[On]),expandedRowRender:m(({record:l})=>[n("p",En,w(l.description),1)]),_:1},8,["columns","data-source"])}ne.render=zn;var jn=`<cn>
#### \u53EF\u5C55\u5F00
\u5F53\u8868\u683C\u5185\u5BB9\u8F83\u591A\u4E0D\u80FD\u4E00\u6B21\u6027\u5B8C\u5168\u5C55\u793A\u65F6\u3002
</cn>

<us>
#### Expandable Row
When there's too much information to show and the table can't display all at once.
</us>
`,Gn=`<template>
  <a-table :columns="columns" :data-source="data">
    <template #action>
      <a>Delete</a>
    </template>
    <template #expandedRowRender="{ record }">
      <p style="margin: 0">
        {{ record.description }}
      </p>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', dataIndex: '', key: 'x', slots: { customRender: 'action' } },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const Yn=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1",width:150},{title:"Column 2",dataIndex:"address",key:"2",width:150},{title:"Column 3",dataIndex:"address",key:"3",width:150},{title:"Column 4",dataIndex:"address",key:"4",width:150},{title:"Column 5",dataIndex:"address",key:"5",width:150},{title:"Column 6",dataIndex:"address",key:"6",width:150},{title:"Column 7",dataIndex:"address",key:"7",width:150},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,slots:{customRender:"action"}}],te=[];for(let e=0;e<100;e++)te.push({key:e,name:`Edrward ${e}`,age:32,address:`London Park no. ${e}`});var ae=f({data(){return{data:te,columns:Yn}}});const Vn=n("a",null,"action",-1);function Mn(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,scroll:{x:1500,y:300}},{action:m(()=>[Vn]),_:1},8,["columns","data-source"])}ae.render=Mn;var Un=`<cn>
#### \u56FA\u5B9A\u5934\u548C\u5217
\u9002\u5408\u540C\u65F6\u5C55\u793A\u6709\u5927\u91CF\u6570\u636E\u548C\u6570\u636E\u5217\u3002
> \u82E5\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A**\u56FA\u5B9A\u5217**\u7684\u5BBD\u5EA6 \`width\`\u3002\u5982\u679C\u6307\u5B9A \`width\` \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40\u3002
> \u5EFA\u8BAE\u6307\u5B9A \`scroll.x\` \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 \`scroll.x\`\u3002
</cn>

<us>
#### Fixed Columns and Header
A Solution for displaying large amounts of data with long columns.
> Specify the width of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no long word to break table layout.
> A fixed value which is greater than table width for \`scroll.x\` is recommended. The sum of unfixed columns should not greater than \`scroll.x\`.
</us>
`,Hn=`<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
    <template #action>
      <a>action</a>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: { customRender: 'action' },
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`Edrward \${i}\`,
    age: 32,
    address: \`London Park no. \${i}\`,
  });
}

export default defineComponent({
  data() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const qn=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1"},{title:"Column 2",dataIndex:"address",key:"2"},{title:"Column 3",dataIndex:"address",key:"3"},{title:"Column 4",dataIndex:"address",key:"4"},{title:"Column 5",dataIndex:"address",key:"5"},{title:"Column 6",dataIndex:"address",key:"6"},{title:"Column 7",dataIndex:"address",key:"7"},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,slots:{customRender:"action"}}],Wn=[{key:"1",name:"John Brown",age:32,address:"New York Park"},{key:"2",name:"Jim Green",age:40,address:"London Park"}];var de=f({data(){return{data:Wn,columns:qn}}});const Xn=n("a",null,"action",-1);function Qn(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,scroll:{x:1300}},{action:m(()=>[Xn]),_:1},8,["columns","data-source"])}de.render=Qn;var Zn="<cn>\n#### \u56FA\u5B9A\u5217\n\u5BF9\u4E8E\u5217\u6570\u5F88\u591A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u56FA\u5B9A\u524D\u540E\u7684\u5217\uFF0C\u6A2A\u5411\u6EDA\u52A8\u67E5\u770B\u5176\u5B83\u6570\u636E\uFF0C\u9700\u8981\u548C `scroll.x` \u914D\u5408\u4F7F\u7528\u3002\n> \u82E5\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A**\u56FA\u5B9A\u5217**\u7684\u5BBD\u5EA6 `width`\u3002\u5982\u679C\u6307\u5B9A `width` \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40\u3002\n> \u5EFA\u8BAE\u6307\u5B9A `scroll.x` \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 `scroll.x`\u3002\n</cn>\n\n<us>\n#### Fixed Columns\nTo fix some columns and scroll inside other columns, and you must set `scroll.x` meanwhile.\n> Specify the width of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no long word to break table layout.\n> A fixed value which is greater than table width for `scroll.x` is recommended. The sum of unfixed columns should not greater than `scroll.x`.\n</us>\n",et=`<template>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300 }">
    <template #action>
      <a>action</a>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: { customRender: 'action' },
  },
];

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

export default defineComponent({
  data() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const nt=[{title:"Name",dataIndex:"name",width:150},{title:"Age",dataIndex:"age",width:150},{title:"Address",dataIndex:"address"}],tt=[...Array(100)].map((e,t)=>({key:t,name:`Edward King ${t}`,age:32,address:`London, Park Lane no. ${t}`}));var oe=f({setup(){return{data:tt,columns:nt}}});function at(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,pagination:{pageSize:50},scroll:{y:240}},null,8,["columns","data-source"])}oe.render=at;var dt=`<cn>
#### \u56FA\u5B9A\u8868\u5934
\u65B9\u4FBF\u4E00\u9875\u5185\u5C55\u793A\u5927\u91CF\u6570\u636E\u3002
> \u9700\u8981\u6307\u5B9A column \u7684 \`width\` \u5C5E\u6027\uFF0C\u5426\u5219\u5217\u5934\u548C\u5185\u5BB9\u53EF\u80FD\u4E0D\u5BF9\u9F50\u3002\u5982\u679C\u6307\u5B9A \`width\` \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40\u3002
</cn>

<us>
#### Fixed Header
Display large amounts of data in scrollable view.
> Specify width of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no long word to break table layout.
</us>
`,ot=`<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [...Array(100)].map((_, i) => ({
  key: i,
  name: \`Edward King \${i}\`,
  age: 32,
  address: \`London, Park Lane no. \${i}\`,
}));

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const rt=[{title:"Name",dataIndex:"name",key:"name",width:100,fixed:"left",filters:[{text:"Joe",value:"Joe"},{text:"John",value:"John"}],onFilter:(e,t)=>t.name.indexOf(e)===0},{title:"Other",children:[{title:"Age",dataIndex:"age",key:"age",width:200,sorter:(e,t)=>e.age-t.age},{title:"Address",children:[{title:"Street",dataIndex:"street",key:"street",width:200},{title:"Block",children:[{title:"Building",dataIndex:"building",key:"building",width:100},{title:"Door No.",dataIndex:"number",key:"number",width:100}]}]}]},{title:"Company",children:[{title:"Company Address",dataIndex:"companyAddress",key:"companyAddress",width:200},{title:"Company Name",dataIndex:"companyName",key:"companyName"}]},{title:"Gender",dataIndex:"gender",key:"gender",width:80,fixed:"right"}],st=[...Array(100)].map((e,t)=>({key:t,name:"John Brown",age:t+1,street:"Lake Park",building:"C",number:2035,companyAddress:"Lake Street 42",companyName:"SoftLake Co",gender:"M"}));var re=f({setup(){return{data:st,columns:rt}}});function lt(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,bordered:"",size:"middle",scroll:{x:"calc(700px + 50%)",y:240}},null,8,["columns","data-source","scroll"])}re.render=lt;var it=`<cn>
#### \u8868\u5934\u5206\u7EC4
\`columns[n]\` \u53EF\u4EE5\u5185\u5D4C \`children\`\uFF0C\u4EE5\u6E32\u67D3\u5206\u7EC4\u8868\u5934\u3002
</cn>

<us>
#### Grouping table head
Group table head with \`columns[n].children\`.
</us>
`,ct=`<template>
  <a-table
    :columns="columns"
    :data-source="data"
    bordered
    size="middle"
    :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
type TableDataType = {
  key: number;
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
};
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value: string, record: TableDataType) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200,
        sorter: (a: TableDataType, b: TableDataType) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 200,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];
const data = [...Array(100)].map((_, i) => ({
  key: i,
  name: 'John Brown',
  age: i + 1,
  street: 'Lake Park',
  building: 'C',
  number: 2035,
  companyAddress: 'Lake Street 42',
  companyName: 'SoftLake Co',
  gender: 'M',
}));
export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const ut=[{title:"Name",dataIndex:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Submenu",value:"Submenu",children:[{text:"Green",value:"Green"},{text:"Black",value:"Black"}]}],onFilter:(e,t)=>t.name.indexOf(e)===0,sorter:(e,t)=>e.name.length-t.name.length,sortDirections:["descend"]},{title:"Age",dataIndex:"age",defaultSortOrder:"descend",sorter:(e,t)=>e.age-t.age},{title:"Address",dataIndex:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filterMultiple:!1,onFilter:(e,t)=>t.address.indexOf(e)===0,sorter:(e,t)=>e.address.length-t.address.length,sortDirections:["descend","ascend"]}],mt=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}];var se=f({setup(){return{data:mt,columns:ut,onChange:(t,o,s)=>{console.log("params",t,o,s)}}}});function pt(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data,onChange:e.onChange},null,8,["columns","data-source","onChange"])}se.render=pt;var gt="<cn>\n#### \u7B5B\u9009\u548C\u6392\u5E8F\n\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u7B5B\u9009\uFF0C\u4F7F\u7528\u5217\u7684 `filters` \u5C5E\u6027\u6765\u6307\u5B9A\u9700\u8981\u7B5B\u9009\u83DC\u5355\u7684\u5217\uFF0C`onFilter` \u7528\u4E8E\u7B5B\u9009\u5F53\u524D\u6570\u636E\uFF0C`filterMultiple` \u7528\u4E8E\u6307\u5B9A\u591A\u9009\u548C\u5355\u9009\u3002\n\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u901A\u8FC7\u6307\u5B9A\u5217\u7684 `sorter` \u51FD\u6570\u5373\u53EF\u542F\u52A8\u6392\u5E8F\u6309\u94AE\u3002`sorter: function(rowA, rowB) { ... }`\uFF0C rowA\u3001rowB \u4E3A\u6BD4\u8F83\u7684\u4E24\u4E2A\u884C\u6570\u636E\u3002\n`sortDirections: ['ascend' | 'descend']`\u6539\u53D8\u6BCF\u5217\u53EF\u7528\u7684\u6392\u5E8F\u65B9\u5F0F\uFF0C\u5207\u6362\u6392\u5E8F\u65F6\u6309\u6570\u7EC4\u5185\u5BB9\u4F9D\u6B21\u5207\u6362\uFF0C\u8BBE\u7F6E\u5728 table props \u4E0A\u65F6\u5BF9\u6240\u6709\u5217\u751F\u6548\u3002\n\u4F7F\u7528 `defaultSortOrder` \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5217\u7684\u9ED8\u8BA4\u6392\u5E8F\u987A\u5E8F\u3002\n</cn>\n\n<us>\n#### Filter and sorter\nUse `filters` to generate filter menu in columns, `onFilter` to determine filtered result, and `filterMultiple` to indicate whether it's multiple or single selection.\nUses `defaultFilteredValue` to make a column filtered by default.\nUse `sorter` to make a column sortable. `sorter` can be a function of the type `function(a, b) { ... }` for sorting data locally.\n`sortDirections: ['ascend' | 'descend']` defines available sort methods for each columns, effective for all columns when set on table props.\nUses `defaultSortOrder` to make a column sorted by default.\nIf a `sortOrder` or `defaultSortOrder` is specified with the value `ascend` or `descend`, you can access this value from within the function passed to the `sorter` as explained above. Such a function can take the form: `function(a, b, sortOrder) { ... }`.\n</us>\n",ht=`<template>
  <a-table :columns="columns" :data-source="data" @change="onChange" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

type TableDataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};

type PaginationType = {
  current: number;
  pageSize: number;
};

type FilterType = {
  name: string;
  address: string;
};

type ColumnType = {
  title: string;
  dataIndex: string;
  filters?: {
    text: string;
    value: string;
    children?: {
      text: string;
      value: string;
    }[];
  }[];
  onFilter?: (value: string, record: TableDataType) => boolean;
  sorter?: (a: TableDataType, b: TableDataType) => number;
  sortDirections?: string[];
  defaultSortOrder?: string;
  filterMultiple?: string[] | boolean;
};

const columns: ColumnType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with \`value\`
    onFilter: (value: string, record: TableDataType) => record.name.indexOf(value) === 0,
    sorter: (a: TableDataType, b: TableDataType) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: TableDataType, b: TableDataType) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value: string, record: TableDataType) => record.address.indexOf(value) === 0,
    sorter: (a: TableDataType, b: TableDataType) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data: TableDataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
export default defineComponent({
  setup() {
    const onChange = (pagination: PaginationType, filters: FilterType[], sorter: ColumnType) => {
      console.log('params', pagination, filters, sorter);
    };
    return {
      data,
      columns,
      onChange,
    };
  },
});
<\/script>
`;const kt=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation",slots:{customRender:"operation"}}],le=[];for(let e=0;e<3;++e)le.push({key:e,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"});const yt=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state",slots:{customRender:"status"}},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation",slots:{customRender:"operation"}}],ie=[];for(let e=0;e<3;++e)ie.push({key:e,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"});var ce=f({components:{DownOutlined:Y},setup(){return{data:le,columns:kt,innerColumns:yt,innerData:ie}}});const ft=n("a",null,"Publish",-1),bt=y(" Finished "),wt={class:"table-operation"},xt=n("a",null,"Pause",-1),vt=n("a",null,"Stop",-1),_t=y("Action 1"),St=y("Action 2"),Ct=y(" More ");function It(e,t,o,s,p,r){const d=a("a-badge"),l=a("a-menu-item"),g=a("a-menu"),u=a("down-outlined"),k=a("a-dropdown"),h=a("a-table");return i(),c(h,{columns:e.columns,"data-source":e.data,class:"components-table-demo-nested"},{operation:m(()=>[ft]),expandedRowRender:m(()=>[n(h,{columns:e.innerColumns,"data-source":e.innerData,pagination:!1},{status:m(()=>[n("span",null,[n(d,{status:"success"}),bt])]),operation:m(()=>[n("span",wt,[xt,vt,n(k,null,{overlay:m(()=>[n(g,null,{default:m(()=>[n(l,null,{default:m(()=>[_t]),_:1}),n(l,null,{default:m(()=>[St]),_:1})]),_:1})]),default:m(()=>[n("a",null,[Ct,n(u)])]),_:1})])]),_:1},8,["columns","data-source"])]),_:1},8,["columns","data-source"])}ce.render=It;var Nt=`<cn>
#### \u5D4C\u5957\u5B50\u8868\u683C
\u5C55\u793A\u6BCF\u884C\u6570\u636E\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002
</cn>

<us>
#### Nested tables
Showing more detailed info of every row.
</us>
`,$t=`<template>
  <a-table :columns="columns" :data-source="data" class="components-table-demo-nested">
    <template #operation>
      <a>Publish</a>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
        <template #status>
          <span>
            <a-badge status="success" />
            Finished
          </span>
        </template>
        <template #operation>
          <span class="table-operation">
            <a>Pause</a>
            <a>Stop</a>
            <a-dropdown>
              <template #overlay>
                <a-menu>
                  <a-menu-item>Action 1</a-menu-item>
                  <a-menu-item>Action 2</a-menu-item>
                </a-menu>
              </template>
              <a>
                More
                <down-outlined />
              </a>
            </a-dropdown>
          </span>
        </template>
      </a-table>
    </template>
  </a-table>
</template>
<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', slots: { customRender: 'operation' } },
];

interface DataItem {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state', slots: { customRender: 'status' } },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    slots: { customRender: 'operation' },
  },
];

interface innerDataItem {
  key: number;
  date: string;
  name: string;
  upgradeNum: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56',
  });
}

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    return {
      data,
      columns,
      innerColumns,
      innerData,
    };
  },
});
<\/script>
`;const Lt=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}];var E=f({setup(){const e=C(),t=C(),o=N(()=>{const l=e.value||{},g=t.value||{};return[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:l.name||null,onFilter:(u,k)=>k.name.includes(u),sorter:(u,k)=>u.name.length-k.name.length,sortOrder:g.columnKey==="name"&&g.order,ellipsis:!0},{title:"Age",dataIndex:"age",key:"age",sorter:(u,k)=>u.age-k.age,sortOrder:g.columnKey==="age"&&g.order},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:l.address||null,onFilter:(u,k)=>k.address.includes(u),sorter:(u,k)=>u.address.length-k.address.length,sortOrder:g.columnKey==="address"&&g.order,ellipsis:!0}]});return{data:Lt,columns:o,handleChange:(l,g,u)=>{console.log("Various parameters",l,g,u),e.value=g,t.value=u},clearFilters:()=>{e.value=null},clearAll:()=>{e.value=null,t.value=null},setAgeSort:()=>{t.value={order:"descend",columnKey:"age"}}}}});const P=F();T("data-v-7e97a71e");const Rt={class:"table-operations"},Pt=y("Sort age"),Dt=y("Clear filters"),At=y("Clear filters and sorters");J();const Tt=P((e,t,o,s,p,r)=>{const d=a("a-button"),l=a("a-table");return i(),c("div",null,[n("div",Rt,[n(d,{onClick:e.setAgeSort},{default:P(()=>[Pt]),_:1},8,["onClick"]),n(d,{onClick:e.clearFilters},{default:P(()=>[Dt]),_:1},8,["onClick"]),n(d,{onClick:e.clearAll},{default:P(()=>[At]),_:1},8,["onClick"])]),n(l,{columns:e.columns,"data-source":e.data,onChange:e.handleChange},null,8,["columns","data-source","onChange"])])});E.render=Tt;E.__scopeId="data-v-7e97a71e";var Jt=`<cn>
#### \u53EF\u63A7\u7684\u7B5B\u9009\u548C\u6392\u5E8F
\u4F7F\u7528\u53D7\u63A7\u5C5E\u6027\u5BF9\u7B5B\u9009\u548C\u6392\u5E8F\u72B6\u6001\u8FDB\u884C\u63A7\u5236\u3002
> 1. columns \u4E2D\u5B9A\u4E49\u4E86 filteredValue \u548C sortOrder \u5C5E\u6027\u5373\u89C6\u4E3A\u53D7\u63A7\u6A21\u5F0F\u3002
> 2. \u53EA\u652F\u6301\u540C\u65F6\u5BF9\u4E00\u5217\u8FDB\u884C\u6392\u5E8F\uFF0C\u8BF7\u4FDD\u8BC1\u53EA\u6709\u4E00\u5217\u7684 sortOrder \u5C5E\u6027\u662F\u751F\u6548\u7684\u3002
> 3. \u52A1\u5FC5\u6307\u5B9A \`column.key\`\u3002
</cn>

<us>
#### Reset filters and sorters
Control filters and sorters by \`filteredValue\` and \`sortOrder\`.
> 1. Defining \`filteredValue\` or \`sortOrder\` means that it is in the controlled mode.
> 2. Make sure \`sortOrder\` is assigned for only one column.
> 3. \`column.key\` is required.
</us>
`,Ft=`<template>
  <div>
    <div class="table-operations">
      <a-button @click="setAgeSort">Sort age</a-button>
      <a-button @click="clearFilters">Clear filters</a-button>
      <a-button @click="clearAll">Clear filters and sorters</a-button>
    </div>
    <a-table :columns="columns" :data-source="data" @change="handleChange" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { TableState, TableStateFilters } from '@fe6/water-pro';

type Pagination = TableState['pagination'];

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export default defineComponent({
  setup() {
    const filteredInfo = ref();
    const sortedInfo = ref();

    const columns = computed(() => {
      const filtered = filteredInfo.value || {};
      const sorted = sortedInfo.value || {};
      return [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filters: [
            { text: 'Joe', value: 'Joe' },
            { text: 'Jim', value: 'Jim' },
          ],
          filteredValue: filtered.name || null,
          onFilter: (value: string, record: DataItem) => record.name.includes(value),
          sorter: (a: DataItem, b: DataItem) => a.name.length - b.name.length,
          sortOrder: sorted.columnKey === 'name' && sorted.order,
          ellipsis: true,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: (a: DataItem, b: DataItem) => a.age - b.age,
          sortOrder: sorted.columnKey === 'age' && sorted.order,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filters: [
            { text: 'London', value: 'London' },
            { text: 'New York', value: 'New York' },
          ],
          filteredValue: filtered.address || null,
          onFilter: (value: string, record: DataItem) => record.address.includes(value),
          sorter: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
          sortOrder: sorted.columnKey === 'address' && sorted.order,
          ellipsis: true,
        },
      ];
    });

    const handleChange = (pagination: Pagination, filters: TableStateFilters, sorter: any) => {
      console.log('Various parameters', pagination, filters, sorter);
      filteredInfo.value = filters;
      sortedInfo.value = sorter;
    };
    const clearFilters = () => {
      filteredInfo.value = null;
    };
    const clearAll = () => {
      filteredInfo.value = null;
      sortedInfo.value = null;
    };
    const setAgeSort = () => {
      sortedInfo.value = {
        order: 'descend',
        columnKey: 'age',
      };
    };

    return {
      data,
      columns,
      handleChange,
      clearFilters,
      clearAll,
      setAgeSort,
    };
  },
});
<\/script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
`;const Kt=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],ue=[];for(let e=0;e<46;e++)ue.push({key:e,name:`Edward King ${e}`,age:32,address:`London, Park Lane no. ${e}`});var me=f({setup(){const e=L({selectedRowKeys:[],loading:!1}),t=N(()=>e.selectedRowKeys.length>0),o=()=>{e.loading=!0,setTimeout(()=>{e.loading=!1,e.selectedRowKeys=[]},1e3)},s=p=>{console.log("selectedRowKeys changed: ",p),e.selectedRowKeys=p};return G(A({data:ue,columns:Kt,hasSelected:t},Re(e)),{start:o,onSelectChange:s})}});const Bt={style:{"margin-bottom":"16px"}},Ot=y(" Reload "),Et={style:{"margin-left":"8px"}};function zt(e,t,o,s,p,r){const d=a("a-button"),l=a("a-table");return i(),c("div",null,[n("div",Bt,[n(d,{type:"primary",disabled:!e.hasSelected,loading:e.loading,onClick:e.start},{default:m(()=>[Ot]),_:1},8,["disabled","loading","onClick"]),n("span",Et,[e.hasSelected?(i(),c(v,{key:0},[y(w(`Selected ${e.selectedRowKeys.length} items`),1)],2112)):U("v-if",!0)])]),n(l,{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.data},null,8,["row-selection","columns","data-source"])])}me.render=zt;var jt=`<cn>
#### \u9009\u62E9\u548C\u64CD\u4F5C
\u9009\u62E9\u540E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5B8C\u6210\u540E\u6E05\u7A7A\u9009\u62E9\uFF0C\u901A\u8FC7 \`rowSelection.selectedRowKeys\` \u6765\u63A7\u5236\u9009\u4E2D\u9879\u3002
</cn>

<us>
#### Selection and operation
To perform operations and clear selections after selecting some rows, use \`rowSelection.selectedRowKeys\` to control selected rows.
</us>
`,Gt=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">
        Reload
      </a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ \`Selected \${selectedRowKeys.length} items\` }}
        </template>
      </span>
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { ColumnProps } from '@fe6/water-pro';

type Key = ColumnProps['key'];

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}

export default defineComponent({
  setup() {
    const state = reactive<{
      selectedRowKeys: Key[];
      loading: boolean;
    }>({
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    });
    const hasSelected = computed(() => state.selectedRowKeys.length > 0);

    const start = () => {
      state.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        state.loading = false;
        state.selectedRowKeys = [];
      }, 1000);
    };
    const onSelectChange = (selectedRowKeys: Key[]) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
    };

    return {
      data,
      columns,
      hasSelected,
      ...toRefs(state),

      // func
      start,
      onSelectChange,
    };
  },
});
<\/script>
`;const Yt=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],pe=[];for(let e=0;e<46;e++)pe.push({key:e,name:`Edward King ${e}`,age:32,address:`London, Park Lane no. ${e}`});var ge=f({setup(){const e=C([]),t=s=>{console.log("selectedRowKeys changed: ",s),e.value=s},o=N(()=>({selectedRowKeys:Pe(e),onChange:t,hideDefaultSelections:!0,selections:[{key:"all-data",text:"Select All Data",onSelect:()=>{e.value=[...Array(46).keys()]}},{key:"odd",text:"Select Odd Row",onSelect:s=>{let p=[];p=s.filter((r,d)=>d%2==0),e.value=p}},{key:"even",text:"Select Even Row",onSelect:s=>{let p=[];p=s.filter((r,d)=>d%2!=0),e.value=p}}]}));return{data:pe,columns:Yt,selectedRowKeys:e,rowSelection:o}}});function Vt(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.data},null,8,["row-selection","columns","data-source"])}ge.render=Vt;var Mt=`<cn>
#### \u81EA\u5B9A\u4E49\u9009\u62E9\u9879
\u901A\u8FC7 \`rowSelection.selections\` \u81EA\u5B9A\u4E49\u9009\u62E9\u9879\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\u4E0B\u62C9\u9009\u9879\uFF0C\u8BBE\u4E3A \`true\` \u65F6\u663E\u793A\u9ED8\u8BA4\u9009\u62E9\u9879\u3002
</cn>

<us>
#### Custom selection
Use \`rowSelection.selections\` custom selections, default no select dropdown, show default selections via setting to \`true\`.
</us>
`,Ut=`<template>
  <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" />
</template>
<script lang="ts">
import { defineComponent, computed, ref, unref } from 'vue';
import { ColumnProps } from '@fe6/water-pro';

type Key = ColumnProps['key'];

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: \`Edward King \${i}\`,
    age: 32,
    address: \`London, Park Lane no. \${i}\`,
  });
}

export default defineComponent({
  setup() {
    const selectedRowKeys = ref<Key[]>([]); // Check here to configure the default column

    const onSelectChange = (changableRowKeys: Key[]) => {
      console.log('selectedRowKeys changed: ', changableRowKeys);
      selectedRowKeys.value = changableRowKeys;
    };

    const rowSelection = computed(() => {
      return {
        selectedRowKeys: unref(selectedRowKeys),
        onChange: onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: 'all-data',
            text: 'Select All Data',
            onSelect: () => {
              selectedRowKeys.value = [...Array(46).keys()]; // 0...45
            },
          },
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: (changableRowKeys: Key[]) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              selectedRowKeys.value = newSelectedRowKeys;
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: (changableRowKeys: Key[]) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              });
              selectedRowKeys.value = newSelectedRowKeys;
            },
          },
        ],
      };
    });
    return {
      data,
      columns,
      selectedRowKeys,
      rowSelection,
    };
  },
});
<\/script>
`;const Ht=[{title:"Name",dataIndex:"name",slots:{customRender:"name"}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],qt=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"}];var he=f({setup(){return{data:qt,columns:Ht,rowSelection:{onChange:(t,o)=>{console.log(`selectedRowKeys: ${t}`,"selectedRows: ",o)},getCheckboxProps:t=>({disabled:t.name==="Disabled User",name:t.name})}}}});function Wt(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{"row-selection":e.rowSelection,columns:e.columns,"data-source":e.data},{name:m(({text:l})=>[n("a",null,w(l),1)]),_:1},8,["row-selection","columns","data-source"])}he.render=Wt;var Xt=`<cn>
#### \u53EF\u9009\u62E9
\u7B2C\u4E00\u5217\u662F\u8054\u52A8\u7684\u9009\u62E9\u6846\u3002
> \u9ED8\u8BA4\u70B9\u51FB checkbox \u89E6\u53D1\u9009\u62E9\u884C\u4E3A
</cn>

<us>
#### selection
Rows can be selectable by making first column as a selectable column.
> selection happens when clicking checkbox defaultly.
</us>

`,Qt=`<template>
  <a-table :row-selection="rowSelection" :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ColumnProps } from '@fe6/water-pro';

type Key = ColumnProps['key'];

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default defineComponent({
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
        console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return {
      data,
      columns,
      rowSelection,
    };
  },
});
<\/script>
`;const Zt=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],ea=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}];var ke=f({setup(){return{data:ea,columns:Zt}}});const na={id:"components-table-demo-size"},ta=n("h4",null,"Middle size table",-1),aa=n("h4",null,"Small size table",-1);function da(e,t,o,s,p,r){const d=a("a-table");return i(),c("div",na,[ta,n(d,{columns:e.columns,"data-source":e.data,size:"middle"},null,8,["columns","data-source"]),aa,n(d,{columns:e.columns,"data-source":e.data,size:"small"},null,8,["columns","data-source"])])}ke.render=da;var oa=`<cn>
#### \u7D27\u51D1\u578B
\u4E24\u79CD\u7D27\u51D1\u578B\u7684\u5217\u8868\uFF0C\u5C0F\u578B\u5217\u8868\u53EA\u7528\u4E8E\u5BF9\u8BDD\u6846\u5185\u3002
</cn>

<us>
#### size
There are two compacted table sizes: \`middle\` and \`small\`. The \`small\` size is used in Modals only.
</us>
`,ra=`<template>
  <div id="components-table-demo-size">
    <h4>Middle size table</h4>
    <a-table :columns="columns" :data-source="data" size="middle" />
    <h4>Small size table</h4>
    <a-table :columns="columns" :data-source="data" size="small" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
<style>
#components-table-demo-size h4 {
  margin-bottom: 16px;
}
</style>
`;const sa=[{key:"1",firstName:"John",lastName:"Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",firstName:"Jim",lastName:"Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",firstName:"Joe",lastName:"Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];var ye=f({setup(){return{data:sa}}});const la=n("span",{style:{color:"#1890ff"}},"Name",-1),ia=n("span",{style:{color:"#1890ff"}},"First Name",-1),ca=n("a",null,"Delete",-1);function ua(e,t,o,s,p,r){const d=a("a-table-column"),l=a("a-table-column-group"),g=a("a-tag"),u=a("a-divider"),k=a("a-table");return i(),c(k,{"data-source":e.data},{default:m(()=>[n(l,null,{title:m(()=>[la]),default:m(()=>[n(d,{key:"firstName","data-index":"firstName"},{title:m(()=>[ia]),_:1}),n(d,{key:"lastName",title:"Last Name","data-index":"lastName"})]),_:1}),n(d,{key:"age",title:"Age","data-index":"age"}),n(d,{key:"address",title:"Address","data-index":"address"}),n(d,{key:"tags",title:"Tags","data-index":"tags"},{default:m(({text:h})=>[n("span",null,[(i(!0),c(v,null,$(h,b=>(i(),c(g,{key:b,color:"blue"},{default:m(()=>[y(w(b),1)]),_:2},1024))),128))])]),_:1}),n(d,{key:"action",title:"Action"},{default:m(({record:h})=>[n("span",null,[n("a",null,"Action \u4E00 "+w(h.firstName),1),n(u,{type:"vertical"}),ca])]),_:1})]),_:1},8,["data-source"])}ye.render=ua;var ma="<cn>\n#### template \u98CE\u683C\u7684 API\n\u4F7F\u7528 template \u98CE\u683C\u7684 API\n> \u8FD9\u4E2A\u53EA\u662F\u4E00\u4E2A\u63CF\u8FF0 `columns` \u7684\u8BED\u6CD5\u7CD6\uFF0C\u6240\u4EE5\u4F60\u4E0D\u80FD\u7528\u5176\u4ED6\u7EC4\u4EF6\u53BB\u5305\u88F9 `Column` \u548C `ColumnGroup`\u3002\n</cn>\n\n<us>\n#### template style API\nUsing template style API\n> Since this is just a syntax sugar for the prop `columns`, so that you can't compose `Column` and `ColumnGroup` with other Components.\n</us>\n",pa=`<template>
  <a-table :data-source="data">
    <a-table-column-group>
      <template #title><span style="color: #1890ff">Name</span></template>
      <a-table-column key="firstName" data-index="firstName">
        <template #title><span style="color: #1890ff">First Name</span></template>
      </a-table-column>
      <a-table-column key="lastName" title="Last Name" data-index="lastName" />
    </a-table-column-group>
    <a-table-column key="age" title="Age" data-index="age" />
    <a-table-column key="address" title="Address" data-index="address" />
    <a-table-column key="tags" title="Tags" data-index="tags">
      <template #default="{ text: tags }">
        <span>
          <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
        </span>
      </template>
    </a-table-column>
    <a-table-column key="action" title="Action">
      <template #default="{ record }">
        <span>
          <a>Action \u4E00 {{ record.firstName }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
        </span>
      </template>
    </a-table-column>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
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
`;const ga=[{title:"Name",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Address",dataIndex:"address",key:"address 1",ellipsis:!0},{title:"Long Column Long Column Long Column",dataIndex:"address",key:"address 2",ellipsis:!0},{title:"Long Column Long Column",dataIndex:"address",key:"address 3",ellipsis:!0},{title:"Long Column",dataIndex:"address",key:"address 4",ellipsis:!0}],ha=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park, New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 2 Lake Park, London No. 2 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",tags:["cool","teacher"]}];var fe=f({setup(){return{data:ha,columns:ga}}});function ka(e,t,o,s,p,r){const d=a("a-table");return i(),c(d,{columns:e.columns,"data-source":e.data},{name:m(({text:l})=>[n("a",null,w(l),1)]),_:1},8,["columns","data-source"])}fe.render=ka;var ya=`<cn>
#### \u5355\u5143\u683C\u81EA\u52A8\u7701\u7565
\u8BBE\u7F6E \`column.ellipsis\` \u53EF\u4EE5\u8BA9\u5355\u5143\u683C\u5185\u5BB9\u6839\u636E\u5BBD\u5EA6\u81EA\u52A8\u7701\u7565\u3002
> \u5217\u5934\u7F29\u7565\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002
</cn>

<us>
#### ellipsis column
Ellipsize cell content via setting \`column.ellipsis\`.
> Cannot ellipsize table header with sorters and filters for now.
</us>
`,fa=`<template>
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
<\/script>
`;const ba={class:"markdown-body"},wa=De(`<h2>API</h2><h3>Table</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>tableLayout</td><td>\u8868\u683C\u5143\u7D20\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout">table-layout</a> \u5C5E\u6027\uFF0C\u8BBE\u4E3A <code>fixed</code> \u8868\u793A\u5185\u5BB9\u4E0D\u4F1A\u5F71\u54CD\u5217\u7684\u5E03\u5C40</td><td>- | \u2018auto\u2019 | \u2018fixed\u2019</td><td>\u65E0<hr>\u56FA\u5B9A\u8868\u5934/\u5217\u6216\u4F7F\u7528\u4E86 <code>column.ellipsis</code> \u65F6\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>fixed</code></td><td>1.5.0</td></tr><tr><td>bordered</td><td>\u662F\u5426\u5C55\u793A\u5916\u8FB9\u6846\u548C\u5217\u8FB9\u6846</td><td>boolean</td><td>false</td><td></td></tr><tr><td>childrenColumnName</td><td>\u6307\u5B9A\u6811\u5F62\u7ED3\u6784\u7684\u5217\u540D</td><td>string[]</td><td>children</td><td></td></tr><tr><td>columns</td><td>\u8868\u683C\u5217\u7684\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5177\u4F53\u9879\u89C1<a href="#Column">\u4E0B\u8868</a></td><td>array</td><td>-</td><td></td></tr><tr><td>components</td><td>\u8986\u76D6\u9ED8\u8BA4\u7684 table \u5143\u7D20</td><td>object</td><td>-</td><td></td></tr><tr><td>dataSource</td><td>\u6570\u636E\u6570\u7EC4</td><td>any[]</td><td></td><td></td></tr><tr><td>defaultExpandAllRows</td><td>\u521D\u59CB\u65F6\uFF0C\u662F\u5426\u5C55\u5F00\u6240\u6709\u884C</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultExpandedRowKeys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u884C</td><td>string[]</td><td>-</td><td></td></tr><tr><td>expandedRowKeys</td><td>\u5C55\u5F00\u7684\u884C\uFF0C\u63A7\u5236\u5C5E\u6027</td><td>string[]</td><td>-</td><td></td></tr><tr><td>expandedRowRender</td><td>\u989D\u5916\u7684\u5C55\u5F00\u884C</td><td>Function(record, index, indent, expanded):VNode | slot=\u201CexpandedRowRender\u201D slot-scope=\u201Crecord, index, indent, expanded\u201D</td><td>-</td><td></td></tr><tr><td>expandIcon</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</td><td>Function(props):VNode | slot=\u201CexpandIcon\u201D slot-scope=\u201Cprops\u201D</td><td>-</td><td></td></tr><tr><td>expandRowByClick</td><td>\u901A\u8FC7\u70B9\u51FB\u884C\u6765\u5C55\u5F00\u5B50\u884C</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>expandIconColumnIndex</td><td>\u5C55\u5F00\u7684\u56FE\u6807\u663E\u793A\u5728\u54EA\u4E00\u5217\uFF0C\u5982\u679C\u6CA1\u6709 <code>rowSelection</code>\uFF0C\u9ED8\u8BA4\u663E\u793A\u5728\u7B2C\u4E00\u5217\uFF0C\u5426\u5219\u663E\u793A\u5728\u9009\u62E9\u6846\u540E\u9762</td><td><code>number</code></td><td></td><td></td></tr><tr><td>footer</td><td>\u8868\u683C\u5C3E\u90E8</td><td>Function(currentPageData)|slot-scope</td><td></td><td></td></tr><tr><td>indentSize</td><td>\u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6BCF\u5C42\u7F29\u8FDB\u7684\u5BBD\u5EA6\uFF0C\u4EE5 px \u4E3A\u5355\u4F4D</td><td>number</td><td>15</td><td></td></tr><tr><td>loading</td><td>\u9875\u9762\u662F\u5426\u52A0\u8F7D\u4E2D</td><td>boolean|<a href="/components/spin-cn">object</a></td><td>false</td><td></td></tr><tr><td>locale</td><td>\u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E\uFF0C\u76EE\u524D\u5305\u62EC\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u7A7A\u6570\u636E\u6587\u6848</td><td>object</td><td>filterConfirm: \u2018\u786E\u5B9A\u2019 <br> filterReset: \u2018\u91CD\u7F6E\u2019 <br> emptyText: \u2018\u6682\u65E0\u6570\u636E\u2019</td><td></td></tr><tr><td>pagination</td><td>\u5206\u9875\u5668\uFF0C\u53C2\u8003<a href="#pagination">\u914D\u7F6E\u9879</a>\u6216 <a href="/components/pagination-cn/">pagination</a>\u6587\u6863\uFF0C\u8BBE\u4E3A false \u65F6\u4E0D\u5C55\u793A\u548C\u8FDB\u884C\u5206\u9875</td><td>object</td><td></td><td></td></tr><tr><td>rowClassName</td><td>\u8868\u683C\u884C\u7684\u7C7B\u540D</td><td>Function(record, index):string</td><td>-</td><td></td></tr><tr><td>rowKey</td><td>\u8868\u683C\u884C key \u7684\u53D6\u503C\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u51FD\u6570</td><td>string|Function(record):string</td><td>\u2018key\u2019</td><td></td></tr><tr><td>rowSelection</td><td>\u5217\u8868\u9879\u662F\u5426\u53EF\u9009\u62E9\uFF0C<a href="#rowSelection">\u914D\u7F6E\u9879</a></td><td>object</td><td>null</td><td></td></tr><tr><td>scroll</td><td>\u8BBE\u7F6E\u6A2A\u5411\u6216\u7EB5\u5411\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u548C\u9AD8\uFF0C\u5EFA\u8BAE\u4E3A <code>x</code> \u8BBE\u7F6E\u4E00\u4E2A\u6570\u5B57\uFF0C\u5982\u679C\u8981\u8BBE\u7F6E\u4E3A <code>true</code>\uFF0C\u9700\u8981\u914D\u5408\u6837\u5F0F <code>.ant-table td { white-space: nowrap; }</code></td><td>{ x: number | true, y: number }</td><td>-</td><td></td></tr><tr><td>showHeader</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>true</td><td></td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>default | middle | small</td><td>default</td><td></td></tr><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>Function(currentPageData)|slot-scope</td><td></td><td></td></tr><tr><td>customHeaderRow</td><td>\u8BBE\u7F6E\u5934\u90E8\u884C\u5C5E\u6027</td><td>Function(column, index)</td><td>-</td><td></td></tr><tr><td>customRow</td><td>\u8BBE\u7F6E\u884C\u5C5E\u6027</td><td>Function(record, index)</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u8BBE\u7F6E\u8868\u683C\u5185\u5404\u7C7B\u6D6E\u5C42\u7684\u6E32\u67D3\u8282\u70B9\uFF0C\u5982\u7B5B\u9009\u83DC\u5355</td><td>(triggerNode) =&gt; HTMLElement</td><td><code>() =&gt; TableHtmlElement</code></td><td>1.5.0</td></tr><tr><td>transformCellText</td><td>\u6570\u636E\u6E32\u67D3\u524D\u53EF\u4EE5\u518D\u6B21\u6539\u53D8\uFF0C\u4E00\u822C\u7528\u6237\u7A7A\u6570\u636E\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7 <a href="/components/config-provider-cn/">ConfigProvider</a> \u5168\u5C40\u7EDF\u4E00\u914D\u7F6E</td><td>Function({ text, column, record, index }) =&gt; any</td><td>-</td><td>1.5.4</td></tr><tr><td>showMoreHandler</td><td>\u662F\u5426\u663E\u793A\u8868\u5934\u591A\u9009\u7684\u6279\u91CF\u64CD\u4F5C</td><td>boolean</td><td>-</td><td>3.13.0</td></tr><tr><td>moreHandlerTarget</td><td>\u8BBE\u7F6E\u6279\u91CF\u64CD\u4F5C Affix \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td><td>() =&gt; HTMLElement</td><td>-</td><td>3.13.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>expandedRowsChange</td><td>\u5C55\u5F00\u7684\u884C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>Function(expandedRows)</td></tr><tr><td>change</td><td>\u5206\u9875\u3001\u6392\u5E8F\u3001\u7B5B\u9009\u53D8\u5316\u65F6\u89E6\u53D1</td><td>Function(pagination, filters, sorter, { currentDataSource })</td></tr><tr><td>expand</td><td>\u70B9\u51FB\u5C55\u5F00\u56FE\u6807\u65F6\u89E6\u53D1</td><td>Function(expanded, record)</td></tr></tbody></table><h4>customRow \u7528\u6CD5</h4><p>\u9002\u7528\u4E8E <code>customRow</code> <code>customHeaderRow</code> <code>customCell</code> <code>customHeaderCell</code>\u3002\u9075\u5FAA<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx">Vue jsx</a>\u8BED\u6CD5\u3002</p><pre><code class="language-jsx">&lt;Table
  customRow={(record) =&gt; {
    return {
      props: {
        xxx... //\u5C5E\u6027
      },
      on: { // \u4E8B\u4EF6
        click: (event) =&gt; {},       // \u70B9\u51FB\u884C
        dblclick: (event) =&gt; {},
        contextmenu: (event) =&gt; {},
        mouseenter: (event) =&gt; {},  // \u9F20\u6807\u79FB\u5165\u884C
        mouseleave: (event) =&gt; {}
      },

    };
  )}
  customHeaderRow={(column) =&gt; {
    return {
      on: {
        click: () =&gt; {},        // \u70B9\u51FB\u8868\u5934\u884C
      }
    };
  )}
/&gt;
</code></pre><h3>Column</h3><p>\u5217\u63CF\u8FF0\u6570\u636E\u5BF9\u8C61\uFF0C\u662F columns \u4E2D\u7684\u4E00\u9879\uFF0CColumn \u4F7F\u7528\u76F8\u540C\u7684 API\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>align</td><td>\u8BBE\u7F6E\u5217\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F</td><td>\u2018left\u2019 | \u2018right\u2019 | \u2018center\u2019</td><td>\u2018left\u2019</td><td></td></tr><tr><td>ellipsis</td><td>\u8D85\u8FC7\u5BBD\u5EA6\u5C06\u81EA\u52A8\u7701\u7565\uFF0C\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002<br>\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u8868\u683C\u5E03\u5C40\u5C06\u53D8\u6210 <code>tableLayout=&quot;fixed&quot;</code>\u3002</td><td>boolean</td><td>false</td><td>1.5.0</td></tr><tr><td>colSpan</td><td>\u8868\u5934\u5217\u5408\u5E76,\u8BBE\u7F6E\u4E3A 0 \u65F6\uFF0C\u4E0D\u6E32\u67D3</td><td>number</td><td></td><td></td></tr><tr><td>dataIndex</td><td>\u5217\u6570\u636E\u5728\u6570\u636E\u9879\u4E2D\u5BF9\u5E94\u7684 key\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5</td><td>string</td><td>-</td><td></td></tr><tr><td>defaultFilteredValue</td><td>\u9ED8\u8BA4\u7B5B\u9009\u503C</td><td>string[]</td><td>-</td><td>1.5.0</td></tr><tr><td>filterDropdown</td><td>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355\uFF0C\u6B64\u51FD\u6570\u53EA\u8D1F\u8D23\u6E32\u67D3\u56FE\u5C42\uFF0C\u9700\u8981\u81EA\u884C\u7F16\u5199\u5404\u79CD\u4EA4\u4E92</td><td>VNode | slot-scope</td><td>-</td><td></td></tr><tr><td>filterDropdownVisible</td><td>\u7528\u4E8E\u63A7\u5236\u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>-</td><td></td></tr><tr><td>filtered</td><td>\u6807\u8BC6\u6570\u636E\u662F\u5426\u7ECF\u8FC7\u8FC7\u6EE4\uFF0C\u7B5B\u9009\u56FE\u6807\u4F1A\u9AD8\u4EAE</td><td>boolean</td><td>false</td><td></td></tr><tr><td>filteredValue</td><td>\u7B5B\u9009\u7684\u53D7\u63A7\u5C5E\u6027\uFF0C\u5916\u754C\u53EF\u7528\u6B64\u63A7\u5236\u5217\u7684\u7B5B\u9009\u72B6\u6001\uFF0C\u503C\u4E3A\u5DF2\u7B5B\u9009\u7684 value \u6570\u7EC4</td><td>string[]</td><td>-</td><td></td></tr><tr><td>filterIcon</td><td>\u81EA\u5B9A\u4E49 filter \u56FE\u6807\u3002</td><td>VNode | (filtered: boolean, column: Column) =&gt; vNode |slot |slot-scope</td><td>false</td><td></td></tr><tr><td>filterMultiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>true</td><td></td></tr><tr><td>filters</td><td>\u8868\u5934\u7684\u7B5B\u9009\u83DC\u5355\u9879</td><td>object[]</td><td>-</td><td></td></tr><tr><td>fixed</td><td>\u5217\u662F\u5426\u56FA\u5B9A\uFF0C\u53EF\u9009 <code>true</code>(\u7B49\u6548\u4E8E left) <code>&#39;left&#39;</code> <code>&#39;right&#39;</code></td><td>boolean|string</td><td>false</td><td></td></tr><tr><td>key</td><td>Vue \u9700\u8981\u7684 key\uFF0C\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u552F\u4E00\u7684 <code>dataIndex</code>\uFF0C\u53EF\u4EE5\u5FFD\u7565\u8FD9\u4E2A\u5C5E\u6027</td><td>string</td><td>-</td><td></td></tr><tr><td>customRender</td><td>\u751F\u6210\u590D\u6742\u6570\u636E\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u5F53\u524D\u884C\u7684\u503C\uFF0C\u5F53\u524D\u884C\u6570\u636E\uFF0C\u884C\u7D22\u5F15\uFF0C@return \u91CC\u9762\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u884C/\u5217\u5408\u5E76,\u53EF\u53C2\u8003 demo \u8868\u683C\u884C/\u5217\u5408\u5E76</td><td>Function(text, record, index) {}|slot-scope</td><td>-</td><td></td></tr><tr><td>sorter</td><td>\u6392\u5E8F\u51FD\u6570\uFF0C\u672C\u5730\u6392\u5E8F\u4F7F\u7528\u4E00\u4E2A\u51FD\u6570(\u53C2\u8003 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Array.sort</a> \u7684 compareFunction)\uFF0C\u9700\u8981\u670D\u52A1\u7AEF\u6392\u5E8F\u53EF\u8BBE\u4E3A true</td><td>Function|boolean</td><td>-</td><td></td></tr><tr><td>sortOrder</td><td>\u6392\u5E8F\u7684\u53D7\u63A7\u5C5E\u6027\uFF0C\u5916\u754C\u53EF\u7528\u6B64\u63A7\u5236\u5217\u7684\u6392\u5E8F\uFF0C\u53EF\u8BBE\u7F6E\u4E3A <code>&#39;ascend&#39;</code> <code>&#39;descend&#39;</code> <code>false</code></td><td>boolean|string</td><td>-</td><td></td></tr><tr><td>sortDirections</td><td>\u652F\u6301\u7684\u6392\u5E8F\u65B9\u5F0F\uFF0C\u53D6\u503C\u4E3A <code>&#39;ascend&#39;</code> <code>&#39;descend&#39;</code></td><td>Array</td><td><code>[&#39;ascend&#39;, &#39;descend&#39;]</code></td><td>1.5.0</td></tr><tr><td>title</td><td>\u5217\u5934\u663E\u793A\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>width</td><td>\u5217\u5BBD\u5EA6</td><td>string|number</td><td>-</td><td></td></tr><tr><td>customCell</td><td>\u8BBE\u7F6E\u5355\u5143\u683C\u5C5E\u6027</td><td>Function(record, rowIndex)</td><td>-</td><td></td></tr><tr><td>customHeaderCell</td><td>\u8BBE\u7F6E\u5934\u90E8\u5355\u5143\u683C\u5C5E\u6027</td><td>Function(column)</td><td>-</td><td></td></tr><tr><td>onFilter</td><td>\u672C\u5730\u6A21\u5F0F\u4E0B\uFF0C\u786E\u5B9A\u7B5B\u9009\u7684\u8FD0\u884C\u51FD\u6570, \u4F7F\u7528 template \u6216 jsx \u65F6\u4F5C\u4E3A<code>filter</code>\u4E8B\u4EF6\u4F7F\u7528</td><td>Function</td><td>-</td><td></td></tr><tr><td>onFilterDropdownVisibleChange</td><td>\u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355\u53EF\u89C1\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u4F7F\u7528 template \u6216 jsx \u65F6\u4F5C\u4E3A<code>filterDropdownVisibleChange</code>\u4E8B\u4EF6\u4F7F\u7528</td><td>function(visible) {}</td><td>-</td><td></td></tr><tr><td>slots</td><td>\u4F7F\u7528 columns \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E\u652F\u6301 slot \u7684\u5C5E\u6027\uFF0C\u5982 <code>slots: { filterIcon: &#39;XXX&#39;}</code></td><td>object</td><td>-</td><td></td></tr></tbody></table><h3>ColumnGroup</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5217\u5934\u663E\u793A\u6587\u5B57</td><td>string|slot</td><td>-</td></tr><tr><td>slots</td><td>\u4F7F\u7528 columns \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E\u652F\u6301 slot \u7684\u5C5E\u6027\uFF0C\u5982 <code>slots: { title: &#39;XXX&#39;}</code></td><td>object</td><td>-</td></tr></tbody></table><h3>pagination</h3><p>\u5206\u9875\u7684\u914D\u7F6E\u9879\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>position</td><td>\u6307\u5B9A\u5206\u9875\u663E\u793A\u7684\u4F4D\u7F6E</td><td>\u2018top\u2019 | \u2018bottom\u2019 | \u2018both\u2019</td><td>\u2018bottom\u2019</td></tr></tbody></table><p>\u66F4\u591A\u914D\u7F6E\u9879\uFF0C\u8BF7\u67E5\u770B <a href="/components/pagination/"><code>Pagination</code></a>\u3002</p><h3>rowSelection</h3><p>\u9009\u62E9\u529F\u80FD\u7684\u914D\u7F6E\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columnWidth</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u9009\u62E9\u6846\u5BBD\u5EA6</td><td>string|number</td><td>-</td></tr><tr><td>columnTitle</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u9009\u62E9\u6846\u6807\u9898</td><td>string|VNode</td><td>-</td></tr><tr><td>fixed</td><td>\u628A\u9009\u62E9\u6846\u5217\u56FA\u5B9A\u5728\u5DE6\u8FB9</td><td>boolean</td><td>-</td></tr><tr><td>getCheckboxProps</td><td>\u9009\u62E9\u6846\u7684\u9ED8\u8BA4\u5C5E\u6027\u914D\u7F6E</td><td>Function(record)</td><td>-</td></tr><tr><td>hideDefaultSelections</td><td>\u53BB\u6389\u300E\u5168\u9009\u300F\u300E\u53CD\u9009\u300F\u4E24\u4E2A\u9ED8\u8BA4\u9009\u9879</td><td>boolean</td><td>false</td></tr><tr><td>selectedRowKeys</td><td>\u6307\u5B9A\u9009\u4E2D\u9879\u7684 key \u6570\u7EC4\uFF0C\u9700\u8981\u548C onChange \u8FDB\u884C\u914D\u5408</td><td>string[]</td><td>[]</td></tr><tr><td>selections</td><td>\u81EA\u5B9A\u4E49\u9009\u62E9\u914D\u7F6E\u9879, \u8BBE\u4E3A <code>true</code> \u65F6\u4F7F\u7528\u9ED8\u8BA4\u9009\u62E9\u9879</td><td>object[]|boolean</td><td>true</td></tr><tr><td>type</td><td>\u591A\u9009/\u5355\u9009\uFF0C<code>checkbox</code> or <code>radio</code></td><td>string</td><td><code>checkbox</code></td></tr><tr><td>onChange</td><td>\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>Function(selectedRowKeys, selectedRows)</td><td>-</td></tr><tr><td>onSelect</td><td>\u7528\u6237\u624B\u52A8\u9009\u62E9/\u53D6\u6D88\u9009\u62E9\u67D0\u5217\u7684\u56DE\u8C03</td><td>Function(record, selected, selectedRows, nativeEvent)</td><td>-</td></tr><tr><td>onSelectAll</td><td>\u7528\u6237\u624B\u52A8\u9009\u62E9/\u53D6\u6D88\u9009\u62E9\u6240\u6709\u5217\u7684\u56DE\u8C03</td><td>Function(selected, selectedRows, changeRows)</td><td>-</td></tr><tr><td>onSelectInvert</td><td>\u7528\u6237\u624B\u52A8\u9009\u62E9\u53CD\u9009\u7684\u56DE\u8C03</td><td>Function(selectedRows)</td><td>-</td></tr></tbody></table><h3>scroll</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>x</td><td>\u8BBE\u7F6E\u6A2A\u5411\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u548C\u9AD8\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u50CF\u7D20\u503C\uFF0C\u767E\u5206\u6BD4\uFF0Ctrue \u548C <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content">\u2018max-content\u2019</a></td><td>number | true</td><td>-</td><td></td></tr><tr><td>y</td><td>\u8BBE\u7F6E\u7EB5\u5411\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u548C\u9AD8\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u50CF\u7D20\u503C\uFF0C\u767E\u5206\u6BD4\uFF0Ctrue \u548C <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content">\u2018max-content\u2019</a></td><td>number | true</td><td>-</td><td></td></tr><tr><td>scrollToFirstRowOnChange</td><td>\u5F53\u5206\u9875\u3001\u6392\u5E8F\u3001\u7B5B\u9009\u53D8\u5316\u540E\u662F\u5426\u6EDA\u52A8\u5230\u8868\u683C\u9876\u90E8</td><td>boolean</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3>selection</h3><p>\u81EA\u5B9A\u4E49\u9009\u62E9\u914D\u7F6E\u9879</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>key</td><td>Vue \u9700\u8981\u7684 key\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E</td><td>string</td><td>-</td></tr><tr><td>text</td><td>\u9009\u62E9\u9879\u663E\u793A\u7684\u6587\u5B57</td><td>string|VNode</td><td>-</td></tr><tr><td>onSelect</td><td>\u9009\u62E9\u9879\u70B9\u51FB\u56DE\u8C03</td><td>Function(changeableRowKeys)</td><td>-</td></tr></tbody></table><h3>MoreDisplay \u7EC4\u4EF6 props</h3><p>\u5DF2\u9009\u4E2D\u5C55\u793A\u7EC4\u4EF6\u5C5E\u6027</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>selectKey</td><td>\u9009\u4E2D\u7684\u96C6\u5408</td><td>any[]</td><td>-</td></tr></tbody></table><h3>MoreDisplay \u7EC4\u4EF6 \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>cancelSelect</td><td>\u53D6\u6D88\u9009\u62E9\u7684\u56DE\u8C03</td><td>-</td></tr></tbody></table><h3>MoreHandler \u7EC4\u4EF6 props</h3><p>\u5DF2\u9009\u4E2D\u64CD\u4F5C\u7EC4\u4EF6\u5C5E\u6027\u3002 demo \u5728<a href="./table-pro-cn">table-pro</a></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>selectKey</td><td>\u9009\u4E2D\u7684\u96C6\u5408</td><td>any[]</td><td>-</td></tr></tbody></table><h3>MoreHandler \u7EC4\u4EF6 slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>moreHandler</td><td>\u53F3\u8FB9\u66F4\u591A\u7684\u81EA\u5B9A\u4E49</td></tr></tbody></table><h2>\u6CE8\u610F</h2><p>\u5728 Table \u4E2D\uFF0C<code>dataSource</code> \u548C <code>columns</code> \u91CC\u7684\u6570\u636E\u503C\u90FD\u9700\u8981\u6307\u5B9A <code>key</code> \u503C\u3002\u5BF9\u4E8E <code>dataSource</code> \u9ED8\u8BA4\u5C06\u6BCF\u5217\u6570\u636E\u7684 <code>key</code> \u5C5E\u6027\u4F5C\u4E3A\u552F\u4E00\u7684\u6807\u8BC6\u3002</p><p>\u5982\u679C\u4F60\u7684\u6570\u636E\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u52A1\u5FC5\u4F7F\u7528 <code>rowKey</code> \u6765\u6307\u5B9A\u6570\u636E\u5217\u7684\u4E3B\u952E\u3002\u82E5\u6CA1\u6709\u6307\u5B9A\uFF0C\u63A7\u5236\u53F0\u4F1A\u51FA\u73B0\u7F3A\u5C11 key \u7684\u63D0\u793A\uFF0C\u8868\u683C\u7EC4\u4EF6\u4E5F\u4F1A\u51FA\u73B0\u5404\u7C7B\u5947\u602A\u7684\u9519\u8BEF\u3002</p><pre><code class="language-jsx">// \u6BD4\u5982\u4F60\u7684\u6570\u636E\u4E3B\u952E\u662F uid
return &lt;Table rowKey=&quot;uid&quot; /&gt;;
// \u6216
return &lt;Table rowKey={record =&gt; record.uid} /&gt;;
</code></pre>`,39),xa={expose:[],setup(e){return(t,o)=>(i(),c("div",ba,[wa]))}};var va=xa;const be={cn:`# Table \u8868\u683C

    \u5C55\u793A\u884C\u5217\u6570\u636E\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u5F53\u6709\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u9700\u8981\u5C55\u73B0\u65F6\uFF1B
- \u5F53\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u641C\u7D22\u3001\u5206\u9875\u3001\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7B49\u590D\u6742\u884C\u4E3A\u65F6\u3002

## \u5982\u4F55\u4F7F\u7528

\u6307\u5B9A\u8868\u683C\u7684\u6570\u636E\u6E90 \`dataSource\` \u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002
    ## \u4EE3\u7801\u6F14\u793A`,us:`# Table

    A table displays rows of data.

## When To Use

- To display a collection of structured data.
- To sort, search, paginate, filter data.

## How To Use

Specify \`dataSource\` of Table as an array of data.
## Examples
`};var Ia={category:"Components",cols:1,type:"Data Display",title:"Table",subtitle:"\u8868\u683C",render(){return n("div",null,[n(a("Md"),{cn:be.cn,us:be.us},null),n(a("demo-sort"),{cols:1},{default:()=>[n(a("demo-container"),{api:ze,code:je},{default:()=>[n(H,null,null)]}),n(a("demo-container"),{api:ya,code:fa},{default:()=>[n(fe,null,null)]}),n(a("demo-container"),{api:Me,code:Ue},{default:()=>[n(q,null,null)]}),n(a("demo-container"),{api:Ze,code:en},{default:()=>[n(W,null,null)]}),n(a("demo-container"),{api:an,code:dn},{default:()=>[n(X,null,null)]}),n(a("demo-container"),{api:pn,code:gn},{default:()=>[n(mn,null,null)]}),n(a("demo-container"),{api:xn,code:vn},{default:()=>[n(Q,null,null)]}),n(a("demo-container"),{api:Ln,code:Rn},{default:()=>[n(O,null,null)]}),n(a("demo-container"),{api:Jn,code:Fn},{default:()=>[n(ee,null,null)]}),n(a("demo-container"),{api:jn,code:Gn},{default:()=>[n(ne,null,null)]}),n(a("demo-container"),{api:Un,code:Hn},{default:()=>[n(ae,null,null)]}),n(a("demo-container"),{api:Zn,code:et},{default:()=>[n(de,null,null)]}),n(a("demo-container"),{api:dt,code:ot},{default:()=>[n(oe,null,null)]}),n(a("demo-container"),{api:it,code:ct},{default:()=>[n(re,null,null)]}),n(a("demo-container"),{api:gt,code:ht},{default:()=>[n(se,null,null)]}),n(a("demo-container"),{api:Nt,code:$t},{default:()=>[n(ce,null,null)]}),n(a("demo-container"),{api:Jt,code:Ft},{default:()=>[n(E,null,null)]}),n(a("demo-container"),{api:jt,code:Gt},{default:()=>[n(me,null,null)]}),n(a("demo-container"),{api:Mt,code:Ut},{default:()=>[n(ge,null,null)]}),n(a("demo-container"),{api:Xt,code:Qt},{default:()=>[n(he,null,null)]}),n(a("demo-container"),{api:oa,code:ra},{default:()=>[n(ke,null,null)]}),n(a("demo-container"),{api:ma,code:pa},{default:()=>[n(ye,null,null)]})]}),n(a("api"),null,{default:()=>[n(va,null,null)]})])}};export{Ia as default};

import{c as f,T as y,A as T,S,d as mn,e as pn}from"./main.f0d1f01d.js";import{d as h,Y as s,bw as m,bx as p,by as r,D as i,bz as x,b as a,k as w,q as gn,c8 as I,bO as bn}from"./vendor.846be9ce.js";const hn=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function fn({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{t(o)},1e3)}var P=h({setup(){const[n]=f({api:fn,columns:hn});return{basicRegister:n}}});function xn(n,t,o,e,u,c){const d=s("a-table-pro");return m(),p(d,{onRegister:n.basicRegister},null,8,["onRegister"])}P.render=xn;var wn=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u7684\u8868\u683C\uFF0C\u6700\u540E\u4E00\u5217\u662F\u5404\u79CD\u64CD\u4F5C\u3002
</cn>

<us>
#### basic Usage
Simple table with actions.
</us>
`,kn=`<template>
  <a-table-pro
    @register="basicRegister"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  setup() {
    const [
        basicRegister,
      ] = useTable({
        api: demoListApi,
        columns,
      });
    return {
      basicRegister,
    };
  },
});
<\/script>
`;const yn=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"age-diy",key:"action1",slots:{customRender:"rightAction"}}];function Cn({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{t(o)},1e3)}var $=h({components:{[y.name]:y},setup(){const[n]=f({api:Cn,columns:yn,actionColumn:{width:360,title:"\u56FA\u5B9A\u53F3\u8FB9\u7684\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});return{actionRegister:n,handleDelete:t=>{console.log(t,"delete")},handleEdit:t=>{console.log(t,"edit")},handleOpen:t=>{console.log(t,"open")}}}});function _n(n,t,o,e,u,c){const d=s("a-table-action"),g=s("a-table-pro");return m(),p(g,{onRegister:n.actionRegister},{rightAction:r(({record:b})=>[i(x(b.age)+"-\u5E74\u9F84 ",1)]),action:r(({record:b})=>[a(d,{actions:[{label:"\u5220\u9664",onClick:n.handleDelete.bind(null,b)},{label:"\u7F16\u8F91",onClick:n.handleEdit.bind(null,b)}],dropDownActions:[{label:"\u542F\u7528",onClick:n.handleOpen.bind(null,b)}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])}$.render=_n;var Tn=`<cn>
#### \u64CD\u4F5C\u7684 Action
\u53EF\u4EE5\u63D2\u5165\u4E00\u4E9B\u4E1C\u897F
</cn>

<us>
#### Action
TODO
</us>
`,Sn=`<template>
  <a-table-pro
    @register="actionRegister"
  >
    <template #rightAction="{ record }">
      {{record.age}}-\u5E74\u9F84
    </template>
    <template #action="{ record }">
      <a-table-action
        :actions="[
          {
            label: '\u5220\u9664',
            onClick: handleDelete.bind(null, record),
          },
          {
            label: '\u7F16\u8F91',
            onClick: handleEdit.bind(null, record),
          },
        ]"
        :dropDownActions="[
          {
            label: '\u542F\u7528',
            onClick: handleOpen.bind(null, record),
          },
        ]"
      />
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable, TableAction } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
    title: 'age-diy',
    key: 'action1',
    slots: { customRender: 'rightAction' },
  },
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
    setTimeout(() => {
      success(arr);
    }, 1000);
}

export default defineComponent({
  components: {
    [TableAction.name]: TableAction,
  },
  setup() {
    const [
      actionRegister,
    ] = useTable({
      api: demoListApi,
      columns,
      actionColumn: {
        width: 360,
        title: '\u56FA\u5B9A\u53F3\u8FB9\u7684\u64CD\u4F5C',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    });
  return {
    actionRegister,
    handleDelete: (record) => {
      console.log(record, 'delete');
    },
    handleEdit: (record) => {
      console.log(record, 'edit');
    },
    handleOpen: (record) => {
      console.log(record, 'open');
    },
  };
  },
});
<\/script>
`;const In=[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"\u5F00\u59CB\u65F6\u95F4",width:120,sorter:!0,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",width:120,sorter:!0,dataIndex:"endTime"}];function Pn(){return(()=>{const t=[];for(let o=0;o<40;o++)t.push({id:`${o}`,name:"John Brown",age:`1${o}`,no:`${o+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return t})()}var F=h({components:{AButton:T},setup(){const n=w(!1),t=w(!1),o=w(!0),e=w(!1);function u(){n.value=!n.value}function c(){t.value=!0,setTimeout(()=>{t.value=!1,e.value={pageSize:20}},3e3)}function d(){o.value=!o.value}return{columns:In,data:Pn(),canResize:n,loading:t,border:o,toggleCanResize:u,toggleLoading:c,toggleBorder:d,pagination:e}}});const $n=i(" \u5F00\u542Floading ");function Fn(n,t,o,e,u,c){const d=s("a-button"),g=s("a-table-pro");return m(),p(g,{title:"\u539F\u59CB\u4F7F\u7528",titleHelpMessage:"\u4E0D\u592A\u63A8\u8350",columns:n.columns,dataSource:n.data,canResize:n.canResize,loading:n.loading,bordered:n.border,showTableSetting:"",pagination:n.pagination},{toolbar:r(()=>[a(d,{type:"primary",onClick:n.toggleCanResize},{default:r(()=>[i(x(n.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),a(d,{type:"primary",onClick:n.toggleBorder},{default:r(()=>[i(x(n.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),a(d,{type:"primary",onClick:n.toggleLoading},{default:r(()=>[$n]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","bordered","pagination"])}F.render=Fn;var Rn=`<cn>
#### \u539F\u59CB\u4F7F\u7528
\u539F\u59CB\u4F7F\u7528\uFF0C\u4E0D\u592A\u63A8\u8350\uFF0C\u56E0\u4E3A\u9EBB\u70E6
</cn>

<us>
#### \u539F\u59CB\u4F7F\u7528
TODO
</us>
`,Dn=`<template>
  <a-table-pro
    title="\u539F\u59CB\u4F7F\u7528"
    titleHelpMessage="\u4E0D\u592A\u63A8\u8350"
    :columns="columns"
    :dataSource="data"
    :canResize="canResize"
    :loading="loading"
    :bordered="border"
    showTableSetting
    :pagination="pagination"
  >
    <template #toolbar>
      <a-button type="primary" @click="toggleCanResize">
        {{ !canResize ? '\u81EA\u9002\u5E94\u9AD8\u5EA6' : '\u53D6\u6D88\u81EA\u9002\u5E94' }}
      </a-button>
      <a-button type="primary" @click="toggleBorder">
        {{ !border ? '\u663E\u793A\u8FB9\u6846' : '\u9690\u85CF\u8FB9\u6846' }}
      </a-button>
      <a-button type="primary" @click="toggleLoading"> \u5F00\u542Floading </a-button>
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import {Button} from '@fe6/water-pro';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 200,
  },
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    width: 150,
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
  },
  {
    title: '\u5730\u5740',
    dataIndex: 'address',
  },
  {
    title: '\u7F16\u53F7',
    dataIndex: 'no',
    width: 150,
    sorter: true,
    defaultHidden: true,
  },
  {
    title: '\u5F00\u59CB\u65F6\u95F4',
    width: 120,
    sorter: true,
    dataIndex: 'beginTime',
  },
  {
    title: '\u7ED3\u675F\u65F6\u95F4',
    width: 120,
    sorter: true,
    dataIndex: 'endTime',
  },
];

function getBasicData() {
  const data: any = (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: \`\${index}\`,
        name: 'John Brown',
        age: \`1\${index}\`,
        no: \`\${index + 10}\`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
  return data;
}

export default defineComponent({
  components: {
    AButton: Button,
  },
  setup() {
    const canResize = ref(false);
    const loading = ref(false);
    const border = ref(true);
    const pagination = ref<any>(false);

    function toggleCanResize() {
      canResize.value = !canResize.value;
    }

    function toggleLoading() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        pagination.value = { pageSize: 20 };
      }, 3000);
    }

    function toggleBorder() {
      border.value = !border.value;
    }

    return {
      columns,
      data: getBasicData(),
      canResize,
      loading,
      border,
      toggleCanResize,
      toggleLoading,
      toggleBorder,
      pagination,
    };
  },
});
<\/script>
`;const vn=[{title:"name",dataIndex:"name",key:"name",width:300},{title:"Age",dataIndex:"age",key:"age",width:300},{title:"Address",dataIndex:"address",key:"address",width:1300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200},{title:"Action",key:"action",slots:{customRender:"action"}}];function Ln({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});setTimeout(()=>{t(o)},1e3)}var R=h({setup(){const[n]=f({api:Ln,columns:vn,showTableSetting:!0});return{toolbarRegister:n}}});const An=i(" \u81EA\u5B9A\u4E49\u7684\u5185\u5BB9 "),Nn=i(" \u81EA\u5B9A\u4E49\u5934\u90E8 ");function Yn(n,t,o,e,u,c){const d=s("a-table-pro");return m(),p(d,{onRegister:n.toolbarRegister},{action:r(()=>[An]),toolbar:r(()=>[Nn]),_:1},8,["onRegister"])}R.render=Yn;var Mn=`<cn>
#### \u8868\u683C\u8BBE\u7F6E
\u7B80\u5355\u6709\u6548\u7684\u914D\u7F6E\u3002
</cn>

<us>
#### \u8868\u683C\u8BBE\u7F6E
TODO
</us>
`,Bn=`<template>
  <a-table-pro
    @register="toolbarRegister"
  >
    <template #action>
      \u81EA\u5B9A\u4E49\u7684\u5185\u5BB9
    </template>
    <template #toolbar>
      \u81EA\u5B9A\u4E49\u5934\u90E8
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
      width: 300,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
      width: 300,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
      width: 1300,
  },
  {
    title: '\u5F00\u59CB\u65F6\u95F4',
    width: 200,
    dataIndex: 'beginTime',
  },
  {
    title: '\u7ED3\u675F\u65F6\u95F4',
    dataIndex: 'endTime',
    width: 200,
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  setup() {
    const [
      toolbarRegister,
    ] = useTable({
      api: demoListApi,
      columns,
      showTableSetting: true,
    });
    return {
      toolbarRegister,
    };
  },
});
<\/script>
`;function D({params:n,success:t}){const o=[];for(let e=0;e<40;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});setTimeout(()=>{t(o)},1e3)}const En=(()=>{const n=[];for(let t=0;t<140;t++)n.push({id:`${t}`,name:"\u8FD9\u662F\u65B0\u6570\u636E",age:`1${t}`,no:`${t+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return n})();function On(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:80}]}function v(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"\u5F00\u59CB\u65F6\u95F4",width:120,sorter:!0,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",width:120,sorter:!0,dataIndex:"endTime"}]}function Kn(){return{labelWidth:130,schemas:[{field:"input",label:"\u5151\u6362\u5238\u540D\u79F0",component:"Input",colProps:{xl:12,xxl:8}}]}}var L=h({components:{[T.name]:T,[S.name]:S,[y.name]:y},setup(){const[n,{setLoading:t,setColumns:o,getColumns:e,getDataSource:u,reload:c,getPaginationRef:d,setPagination:g,getSelectRows:b,getSelectRowKeys:k,setSelectedRowKeys:l,clearSelectedRowKeys:z,deleteSelectRowByKey:H,setTableData:j,setProps:C,getSize:U,getForm:G}]=f(),W=async()=>{await D({params:{},success:()=>{}})};gn(async()=>{await W(),C({api:D,columns:v(),rowKey:"id",rowSelection:{type:"checkbox"},useSearchForm:!0,formConfig:Kn(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}})});function q(){t(!0),setTimeout(()=>{t(!1)},1e3)}function V(){o(On())}function J(){o(v()),c({page:1})}function X(){console.log(e())}function Q(){console.log(u())}function Z(){console.log(d())}function nn(){H("1")}function en(){g({current:2}),c()}function tn(){console.log(b())}function an(){console.log(k())}function on(){l(["0","1","2"])}function dn(){j(En)}function rn(){C({ellipsis:!1})}const _=w(!1);function sn(){_.value=!_.value,C({showMoreHandler:_.value})}function ln(){console.log(U())}function cn(){console.log(G())}function un(){z()}return{useMethodsRegister:n,changeLoading:q,changeColumns:V,reloadTable:J,getColumn:X,getTableData:Q,getPagination:Z,setPaginationInfo:en,getSelectRowList:tn,getSelectRowKeyList:an,setSelectedRowKeyList:on,clearSelect:un,toDeleteSelectRowByKey:nn,toSetTableData:dn,toSetProps:rn,toGetSize:ln,toGetForm:cn,setShowMoreHandler:sn}}});const zn=i(" \u8FD8\u539F "),Hn=i(" \u5F00\u542Floading "),jn=i(" \u66F4\u6539Columns "),Un=i(" \u83B7\u53D6Columns "),Gn=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Wn=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),qn=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),Vn=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),Jn=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),Xn=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Qn=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F "),Zn=i(" \u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A "),ne=i(" \u6362\u4E00\u62E8\u6570\u636E "),ee=i(" \u8BBE\u7F6E\u914D\u7F6E(\u53BB\u6389\u7701\u7565\u53F7) "),te=i(" \u83B7\u53D6\u8868\u683C\u7684 size "),ae=i(" \u83B7\u53D6\u8868\u683C "),oe=i("showMoreHandler \u663E\u793A\u6279\u91CF\u64CD\u4F5C "),de=i(" 123 "),re=i("\u6279\u91CF\u5220\u9664");function se(n,t,o,e,u,c){const d=s("a-button"),g=s("a-space"),b=s("a-table-pro");return m(),p("div",null,[a(g,{style:{"flex-wrap":"wrap"}},{default:r(()=>[a(d,{onClick:n.reloadTable},{default:r(()=>[zn]),_:1},8,["onClick"]),a(d,{onClick:n.changeLoading},{default:r(()=>[Hn]),_:1},8,["onClick"]),a(d,{onClick:n.changeColumns},{default:r(()=>[jn]),_:1},8,["onClick"]),a(d,{onClick:n.getColumn},{default:r(()=>[Un]),_:1},8,["onClick"]),a(d,{onClick:n.getTableData},{default:r(()=>[Gn]),_:1},8,["onClick"]),a(d,{onClick:n.setPaginationInfo},{default:r(()=>[Wn]),_:1},8,["onClick"]),a(d,{onClick:n.setSelectedRowKeyList},{default:r(()=>[qn]),_:1},8,["onClick"]),a(d,{onClick:n.getSelectRowList},{default:r(()=>[Vn]),_:1},8,["onClick"]),a(d,{onClick:n.getSelectRowKeyList},{default:r(()=>[Jn]),_:1},8,["onClick"]),a(d,{onClick:n.clearSelect},{default:r(()=>[Xn]),_:1},8,["onClick"]),a(d,{onClick:n.getPagination},{default:r(()=>[Qn]),_:1},8,["onClick"]),a(d,{onClick:n.toDeleteSelectRowByKey},{default:r(()=>[Zn]),_:1},8,["onClick"]),a(d,{onClick:n.toSetTableData},{default:r(()=>[ne]),_:1},8,["onClick"]),a(d,{onClick:n.toSetProps},{default:r(()=>[ee]),_:1},8,["onClick"]),a(d,{onClick:n.toGetSize},{default:r(()=>[te]),_:1},8,["onClick"]),a(d,{onClick:n.toGetForm},{default:r(()=>[ae]),_:1},8,["onClick"]),a(d,{onClick:n.setShowMoreHandler},{default:r(()=>[oe]),_:1},8,["onClick"])]),_:1}),a(b,{onRegister:n.useMethodsRegister},{action:r(({record:k})=>[de]),moreHandler:r(()=>[a(d,null,{default:r(()=>[re]),_:1})]),_:1},8,["onRegister"])])}L.render=se;var ie=`<cn>
#### useTable \u4E2D\u7684\u65B9\u6CD5
\u6709\u65B9\u6CD5\u64CD\u4F5C\u66F4\u7B80\u5355\u3002
</cn>

<us>
#### Methods in useTable
TODO
</us>
`,le=`<template>
  <div>
    <a-space style="flex-wrap: wrap;">
      <a-button @click="reloadTable"> \u8FD8\u539F </a-button>
      <a-button @click="changeLoading"> \u5F00\u542Floading </a-button>
      <a-button @click="changeColumns"> \u66F4\u6539Columns </a-button>
      <a-button @click="getColumn"> \u83B7\u53D6Columns </a-button>
      <a-button @click="getTableData"> \u83B7\u53D6\u8868\u683C\u6570\u636E </a-button>
      <a-button @click="setPaginationInfo"> \u8DF3\u8F6C\u5230\u7B2C2\u9875 </a-button>
      <a-button @click="setSelectedRowKeyList"> \u8BBE\u7F6E\u9009\u4E2D\u884C </a-button>
      <a-button @click="getSelectRowList"> \u83B7\u53D6\u9009\u4E2D\u884C </a-button>
      <a-button @click="getSelectRowKeyList"> \u83B7\u53D6\u9009\u4E2D\u884CKey </a-button>
      <a-button @click="clearSelect"> \u6E05\u7A7A\u9009\u4E2D\u884C </a-button>
      <a-button @click="getPagination"> \u83B7\u53D6\u5206\u9875\u4FE1\u606F </a-button>
      <a-button @click="toDeleteSelectRowByKey"> \u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A </a-button>
      <a-button @click="toSetTableData"> \u6362\u4E00\u62E8\u6570\u636E </a-button>
      <a-button @click="toSetProps"> \u8BBE\u7F6E\u914D\u7F6E(\u53BB\u6389\u7701\u7565\u53F7) </a-button>
      <a-button @click="toGetSize"> \u83B7\u53D6\u8868\u683C\u7684 size </a-button>
      <a-button @click="toGetForm"> \u83B7\u53D6\u8868\u683C </a-button>
      <a-button @click="setShowMoreHandler">showMoreHandler \u663E\u793A\u6279\u91CF\u64CD\u4F5C </a-button>
    </a-space>
    <a-table-pro
      @register="useMethodsRegister"
    >
      <template #action="{ record }">
        123
      </template>
      <template #moreHandler>
        <a-button>\u6279\u91CF\u5220\u9664</a-button>
      </template>
    </a-table-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useTable, TableAction, BasicColumn, Space, Button } from '@fe6/water-pro';

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      no: \`\${index + 10}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

const getNewData: any = (() => {
  const arr: any = [];
  for (let index = 0; index < 140; index++) {
    arr.push({
      id: \`\${index}\`,
      name: '\u8FD9\u662F\u65B0\u6570\u636E',
      age: \`1\${index}\`,
      no: \`\${index + 10}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  return arr;
})();

export function getBasicShortColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      width: 150,
      dataIndex: 'id',
      sorter: true,
      sortOrder: 'ascend',
    },
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '\u5730\u5740',
      dataIndex: 'address',
    },
    {
      title: '\u7F16\u53F7',
      dataIndex: 'no',
      width: 80,
    },
  ];
}

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
    {
      title: '\u5730\u5740',
      dataIndex: 'address',
    },
    {
      title: '\u7F16\u53F7',
      dataIndex: 'no',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '\u5F00\u59CB\u65F6\u95F4',
      width: 120,
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: '\u7ED3\u675F\u65F6\u95F4',
      width: 120,
      sorter: true,
      dataIndex: 'endTime',
    },
  ];
}

export function getFormConfig(): Partial<any> {
  return {
    labelWidth: 130,
    schemas: [
      {
        field: 'input',
        label: '\u5151\u6362\u5238\u540D\u79F0',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
export default defineComponent({
  components: {
    [Button.name]: Button,
    [Space.name]: Space,
    [TableAction.name]: TableAction,
  },
  setup() {
      const [
        useMethodsRegister,
        {
          setLoading,
          setColumns,
          getColumns,
          getDataSource,
          reload,
          getPaginationRef,
          setPagination,
          getSelectRows,
          getSelectRowKeys,
          setSelectedRowKeys,
          clearSelectedRowKeys,
          deleteSelectRowByKey,
          setTableData,
          setProps,
          getSize,
          getForm,
        },
      ] = useTable();

      const getConfig = async () => {
        await demoListApi({params: {}, success: () => {}});
      }

      onMounted(async () => {
        await getConfig();
        setProps({
          // title: 'useTable\u793A\u4F8B',
          // titleHelpMessage: '\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5',
          api: demoListApi,
          columns: getBasicColumns(),
          rowKey: 'id',
          rowSelection: {
            type: 'checkbox', // radio or checkbox
          },
          useSearchForm: true,
          formConfig: getFormConfig(),
          actionColumn: {
            width: 80,
            title: 'Action',
            dataIndex: 'action',
            slots: { customRender: 'action' },
          },
        });
      });

      function changeLoading() {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      function changeColumns() {
        setColumns(getBasicShortColumns());
      }
      function reloadTable() {
        setColumns(getBasicColumns());

        reload({
          page: 1,
        });
      }
      function getColumn() {
        console.log(getColumns());
      }

      function getTableData() {
        console.log(getDataSource());
      }

      function getPagination() {
        console.log(getPaginationRef());
      }

      function toDeleteSelectRowByKey() {
        deleteSelectRowByKey('1');
      }

      function setPaginationInfo() {
        setPagination({
          current: 2,
        });
        reload();
      }
      function getSelectRowList() {
        console.log(getSelectRows());
      }
      function getSelectRowKeyList() {
        console.log(getSelectRowKeys());
      }
      function setSelectedRowKeyList() {
        setSelectedRowKeys(['0', '1', '2']);
      }
      function toSetTableData() {
        setTableData(getNewData);
      }
      function toSetProps() {
        setProps({
          ellipsis: false,
        });
      }

      const moreHandlerStatus = ref(false);
      function setShowMoreHandler() {
        moreHandlerStatus.value = !moreHandlerStatus.value;
        setProps({
          showMoreHandler: moreHandlerStatus.value,
        });
      }
      
      function toGetSize() {
        console.log(getSize());
      }
      function toGetForm() {
        console.log(getForm());
      }
      function clearSelect() {
        clearSelectedRowKeys();
      }

      return {
        useMethodsRegister,
        changeLoading,
        changeColumns,
        reloadTable,
        getColumn,
        getTableData,
        getPagination,
        setPaginationInfo,
        getSelectRowList,
        getSelectRowKeyList,
        setSelectedRowKeyList,
        clearSelect,
        toDeleteSelectRowByKey,
        toSetTableData,
        toSetProps,
        toGetSize,
        toGetForm,
        setShowMoreHandler,
      };
  },
});
<\/script>
`;const ce=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"\u4EA7\u54C1",dataIndex:"name",width:300,slots:{customRender:"name"}},{title:"\u4FE1\u606F",dataIndex:"info",width:300,slots:{customRender:"info"}},{title:"\u5934\u50CF",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",slots:{customRender:"no"}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}];function ue({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`\u8FD9\u662F\u4E00\u4E2A\u53F7\uFF0C${e*1e12}`,name:`${Math.random()+e}-water`,no:`${e+10}`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),image:e%2==0?"https://www.evente.cn/_nuxt/img/2d0fa17.png":"https://www.evente.cn/_nuxt/img/c45fac2.png",ifShow:e%2>0});setTimeout(()=>{t(o)},1e3)}var A=h({components:{ATableImage:mn,ATableCard:pn},setup(){const[n]=f({api:ue,columns:ce});return{customerCellTable:n}}});const me=i("\u9690"),pe=i("\u9690");function ge(n,t,o,e,u,c){const d=s("a-tag"),g=s("a-table-image"),b=s("a-table-card"),k=s("a-table-pro");return m(),p(k,{onRegister:n.customerCellTable},{id:r(({record:l})=>[i(" ID: "+x(l.id),1)]),no:r(({record:l})=>[a(d,{color:"green"},{default:r(()=>[i(x(l.no),1)]),_:2},1024)]),img:r(()=>[a(g,{imgList:["https://www.evente.cn/_nuxt/img/2d0fa17.png","https://ecdn.evente.cn/assets/image/b-menu-logo-1.png"]},null,8,["imgList"])]),name:r(({record:l})=>[a(b,{imgUrl:l.image,title:`${l.name}${l.name}`,desc:`ID:${l.id}`},{titleSuffix:r(()=>[l.ifShow?I("v-if",!0):(m(),p(d,{key:0,color:"red"},{default:r(()=>[me]),_:1}))]),_:2},1032,["imgUrl","title","desc"])]),info:r(({record:l})=>[a(b,{imgUrl:l.image,title:`${l.name}${l.name}`},{titleSuffix:r(()=>[l.ifShow?(m(),p(d,{key:0,color:"red"},{default:r(()=>[pe]),_:1})):I("v-if",!0)]),_:2},1032,["imgUrl","title"])]),category:r(({record:l})=>[a(d,{color:"green"},{default:r(()=>[i(x(l.no),1)]),_:2},1024)]),_:1},8,["onRegister"])}A.render=ge;var be=`<cn>
#### \u81EA\u5B9A\u4E49\u5217
\u53EF\u4EE5\u968F\u4FBF\u5B9A\u4E49\u5217\u7684\u663E\u793A
</cn>

<us>
#### customerCell
TODO
</us>
`,he=`<template>
  <a-table-pro
    @register="customerCellTable"
  >
    <template #id="{ record }"> ID: {{ record.id }} </template>
    <template #no="{ record }">
      <a-tag color="green">
        {{ record.no }}
      </a-tag>
    </template>
    <template #img>
      <a-table-image
        :imgList="['https://www.evente.cn/_nuxt/img/2d0fa17.png', 'https://ecdn.evente.cn/assets/image/b-menu-logo-1.png']"
      />
    </template>
    <template #name="{ record }">
      <a-table-card
        :imgUrl="record.image"
        :title="\`\${record.name}\${record.name}\`"
        :desc="\`ID:\${record.id}\`"
      >
        <template #titleSuffix>
          <a-tag color="red" v-if="!record.ifShow">\u9690</a-tag>
        </template>
      </a-table-card>
    </template>
    <template #info="{ record }">
      <a-table-card
        :imgUrl="record.image"
        :title="\`\${record.name}\${record.name}\`"
      >
        <template #titleSuffix>
          <a-tag color="red" v-if="record.ifShow">\u9690</a-tag>
        </template>
      </a-table-card>
    </template>
    <template #category="{ record }">
      <a-tag color="green">
        {{ record.no }}
      </a-tag>
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable, BasicColumn, TableImage, TableCard } from '@fe6/water-pro';

const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      slots: { customRender: 'id' },
    },
    {
      title: '\u5206\u7C7B',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      defaultHidden: true,
      slots: { customRender: 'category' },
    },
    {
      title: '\u4EA7\u54C1',
      dataIndex: 'name',
      width: 300,
      slots: { customRender: 'name' },
    },
    {
      title: '\u4FE1\u606F',
      dataIndex: 'info',
      width: 300,
      slots: { customRender: 'info' },
    },
    {
      title: '\u5934\u50CF',
      dataIndex: 'img',
      width: 120,
      slots: { customRender: 'img' },
    },
    {
      title: '\u5730\u5740',
      dataIndex: 'address',
    },
    {
      title: '\u7F16\u53F7',
      dataIndex: 'no',
      slots: { customRender: 'no' },
    },
    {
      title: '\u5F00\u59CB\u65F6\u95F4',
      dataIndex: 'beginTime',
    },
    {
      title: '\u7ED3\u675F\u65F6\u95F4',
      dataIndex: 'endTime',
    },
  ];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\u8FD9\u662F\u4E00\u4E2A\u53F7\uFF0C\${index*1000000000000}\`,
      name: \`\${Math.random() + index}-water\`,
      no: \`\${index + 10}\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
      image: index % 2 === 0 ? 'https://www.evente.cn/_nuxt/img/2d0fa17.png' : 'https://www.evente.cn/_nuxt/img/c45fac2.png',
      ifShow: index % 2 > 0
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  components: {
    ATableImage: TableImage,
    ATableCard: TableCard,
  },
  setup() {
    const [customerCellTable] = useTable({
      api: demoListApi,
      columns: columns,
    });

    return {
      customerCellTable,
    };
  },
});
<\/script>
`;const fe=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function xe({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{t(o)},1e3)}const we=({params:n,success:t})=>{setTimeout(()=>{t([{label:"water",value:90},{label:"antd",value:80}])},1e3)},ke=({params:n,success:t})=>{setTimeout(()=>{t([{name:"\u7EC4\u4EF6\u5E93",children:[{name:"water",id:80},{name:"antd",id:180}]},{name:"\u5B98\u7F51",children:[{name:"\u91D1\u8302",id:380},{name:"\u7968\u5927\u5927",id:480}]}])},1e3)},ye=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",parentId:0,users:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",alias:"Irresistible teacher",departmentId:[1],position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://ecdn.evente.cn/assets/image/b-favicon-1.ico",roleName:"\u7BA1\u7406\u5458"}],children:[{id:2,name:"\u4E9A\u592A\u5730\u533A",users:[{id:51,userId:"Meina",name:"\u7F8E\u5A1C",alias:"out of body master",departmentId:[1,2],position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://ecdn.evente.cn/assets/image/b-favicon-1.ico",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"}],children:[{id:3,name:"\u4E2D\u56FD",users:[],children:[{id:44,name:"\u5927\u4E2D\u534E\u533A",users:[],children:[{id:5,name:"\u897F\u4E09\u65D7\u90E8",users:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",departmentId:[1,2,3,5,6,7,44],position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{id:151,userId:"Cang",name:"\u82CD",departmentId:[1,2,3,5],alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"}],children:[]}]},{id:6,name:"\u534E\u5357\u533A",users:[],children:[{id:7,name:"\u897F\u90E8",users:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",position:"\u9000\u4F11",departmentId:[1,2,3,5,6,7,44],avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{id:151,userId:"Ca1ngjingkong",name:"\u82CD\u4E95\u7A7A1",departmentId:[1,2,3,6,7],alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"}],children:[]}]}]}]}]}],Ce=({params:n,success:t})=>{setTimeout(()=>{t(ye)},100)};function _e(){return{labelWidth:100,schemas:[{field:"picker",component:"RangeGroupPicker",componentProps:{showTodayButton:!0,showYesterdayButton:!0,showSevenDaysButton:!0,showThirtyDaysButton:!0},colProps:{span:24}},{field:"userId",component:"ModalUser",componentProps:{api:Ce,placeholder:"\u6DFB\u52A0\u4EBA"},colProps:{span:5}},{field:"input",component:"Input",componentProps:{placeholder:"\u8F93\u5165\u6846"},colProps:{xl:12,xxl:8}},{field:"selectAPI",component:"SelectApi",componentProps:{placeholder:"\u4E0B\u62C9",api:we},colProps:{xl:12,xxl:8}},{field:"tagModalListSelect",component:"TagModalList",componentProps:{placeholder:"\u6807\u7B7E\u7B5B\u9009",countMaxLength:2,type:"select",api:ke},colProps:{xl:12,xxl:8}},{field:"rangePicker",component:"RangePicker",componentProps:{valueFormat:"YYYY-MM-DD",placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]},colProps:{xl:12,xxl:8}},{field:"datePicker",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{xl:12,xxl:8}}]}}var N=h({setup(){const[n]=f({api:xe,columns:fe,useSearchForm:!0,formConfig:_e()});return{searchTableRegister:n}}});function Te(n,t,o,e,u,c){const d=s("a-table-pro");return m(),p(d,{onRegister:n.searchTableRegister},null,8,["onRegister"])}N.render=Te;var Se=`<cn>
#### \u641C\u7D22
\u5E26\u641C\u7D22\u7684\u8868\u683C
</cn>

<us>
#### \u641C\u7D22
TODO
</us>
`,Ie=`<template>
  <a-table-pro
    @register="searchTableRegister"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable, FormProps } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90
      },
      {
        label: 'antd',
        value: 80
      }
    ]);
  }, 1000);
};

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        name: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            name: 'water',
            id: 80,
          },
          {
            name: 'antd',
            id: 180,
          },
        ],
      },
      {
        name: '\u5B98\u7F51',
        children: [
          {
            name: '\u91D1\u8302',
            id: 380,
          },
          {
            name: '\u7968\u5927\u5927',
            id: 480,
          },
        ],
      },
    ]);
  }, 1000);
}
const genData: any[] =  [
  {
    "id": 1,
    "name": "\u672C\u5730\u73AF\u5883-\u6BB5",
    "parentId": 0,
    "users": [
      {
        "id": 53,
        "userId": "ShangHaojia",
        "name": "\u4E0A\u597D\u4F73",
        "alias": "Irresistible teacher",
        departmentId: [1],
        "position": "\u5343\u79A7\u90E8\u95E8",
        "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
        "roleName": "\u7BA1\u7406\u5458",
      }
    ],
    "children": [
      {
          "id": 2,
          "name": "\u4E9A\u592A\u5730\u533A",
          "users": [
              {
                  "id": 51,
                  "userId": "Meina",
                  "name": "\u7F8E\u5A1C",
                  "alias": "out of body master",
                  departmentId: [1, 2],
                  "position": "\u9F13\u52B1\u90E8\u95E8",
                  "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                  "roleName": "\u8D85\u7EA7\u7BA1\u7406\u5458",
              }
          ],
          "children": [
              {
                  "id": 3,
                  "name": "\u4E2D\u56FD",
                  "users": [],
                  "children": [
                    {
                          "id": 44,
                          "name": "\u5927\u4E2D\u534E\u533A",
                          "users": [],
                          "children": [
                              {
                                "id": 5,
                                "name": "\u897F\u4E09\u65D7\u90E8",
                                "users": [
                                  {
                                    "id": 51,
                                    "userId": "Cangjingkong",
                                    "name": "\u82CD\u4E95\u7A7A",
                                    "alias": "Irresistible teacher",
                                    departmentId: [1, 2, 3, 5,6, 7, 44],
                                    "position": "\u9000\u4F11",
                                    "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                    "roleName": "\u8D85\u7EA7\u7BA1\u7406\u5458",
                                  },
                                  {
                                    "id": 151,
                                    "userId": "Cang",
                                    "name": "\u82CD",
                                    departmentId: [1, 2, 3, 5],
                                    "alias": "Irresistible teacher",
                                    "position": "\u9000\u4F11",
                                    "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                    "roleName": "\u8D85\u7EA7\u7BA1\u7406\u5458",
                                  }
                                ],
                                "children": []
                              }
                          ]
                      },
                      {
                          "id": 6,
                          "name": "\u534E\u5357\u533A",
                          "users": [],
                          "children": [
                              {
                                  "id": 7,
                                  "name": "\u897F\u90E8",
                                  "users": [
                                    {
                                        "id": 51,
                                        "userId": "Cangjingkong",
                                        "name": "\u82CD\u4E95\u7A7A",
                                        "alias": "Irresistible teacher",
                                        "position": "\u9000\u4F11",
                                        departmentId: [1, 2, 3, 5,6, 7, 44],
                                        "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                        "roleName": "\u8D85\u7EA7\u7BA1\u7406\u5458",
                                    },
                                    {
                                        "id": 151,
                                        "userId": "Ca1ngjingkong",
                                        "name": "\u82CD\u4E95\u7A7A1",
                                        departmentId: [1, 2, 3,6, 7],
                                        "alias": "Irresistible teacher",
                                        "position": "\u9000\u4F11",
                                        "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                        "roleName": "\u8D85\u7EA7\u7BA1\u7406\u5458",
                                    }
                                  ],
                                  "children": []
                              }
                          ]
                      }
                  ]
              },
          ]
      }
    ]
  }
]

const getModalUserForOptions = ({params, success}) => {
  setTimeout(() => {
    success(genData);
  }, 100);
};

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'picker',
        component: 'RangeGroupPicker',
        componentProps: {
          showTodayButton: true,
          showYesterdayButton: true,
          showSevenDaysButton: true,
          showThirtyDaysButton: true,
        },
        colProps: {
          span: 24,
        },
      },
      {
        field: 'userId',
        component: 'ModalUser',
        componentProps: {
          api: getModalUserForOptions,
          placeholder: '\u6DFB\u52A0\u4EBA',
        },
        colProps: {
          span: 5,
        },
      },
      {
        field: 'input',
        component: 'Input',
        componentProps: {
          placeholder: '\u8F93\u5165\u6846',
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'selectAPI',
        component: 'SelectApi',
        componentProps: {
          placeholder: '\u4E0B\u62C9',
          api: getSelectForOptions,
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'tagModalListSelect',
        component: 'TagModalList',
        componentProps: {
          placeholder: '\u6807\u7B7E\u7B5B\u9009',
          countMaxLength: 2,
          type: 'select',
          api: tagModalListApi,
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'rangePicker',
        component: 'RangePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
          placeholder: ['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F'],
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'datePicker',
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

export default defineComponent({
  setup() {
    const [searchTableRegister] = useTable({
      api: demoListApi,
      columns,
      useSearchForm: true,
      formConfig: getFormConfig(),
    });

    return {
      searchTableRegister,
    };
  },
});
<\/script>
`;const Pe=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function $e({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{t(o)},1e3)}function Fe(){return{labelCol:{span:4,md:{span:6}},wrapperCol:{span:20,md:{span:18},style:"padding-right: 16px"},actionColOptions:{span:4,md:{span:8}},schemas:[{field:"couponName",label:"\u4F18\u60E0\u5238\u540D\u79F0",component:"Input",colProps:{xl:12,xxl:8}},{field:"status",component:"Select",label:"\u4F18\u60E0\u5238\u72B6\u6001",componentProps:{options:[{label:"\u4F7F\u7528\u4E2D",value:1},{label:"\u5DF2\u8FC7\u671F",value:2},{label:"\u5DF2\u5931\u6548",value:3}],placeholder:"\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001"},colProps:{xl:12,xxl:8}}]}}var Y=h({setup(){const[n]=f({api:$e,columns:Pe,useSearchForm:!0,formConfig:Fe()});return{searchTableRegister:n}}});function Re(n,t,o,e,u,c){const d=s("a-table-pro");return m(),p(d,{onRegister:n.searchTableRegister,formLabelCol:{span:6},formWrapperCol:{span:18}},null,8,["onRegister"])}Y.render=Re;var De=`<cn>
#### \u5E38\u89C4\u641C\u7D22
\u5E26\u641C\u7D22\u7684\u8868\u683C
</cn>

<us>
#### search2
TODO
</us>
`,ve=`<template>
  <a-table-pro
    @register="searchTableRegister"
    :formLabelCol="{
      span: 6
    }"
    :formWrapperCol="{
      span: 18
    }"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable, FormProps } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90
      },
      {
        label: 'antd',
        value: 80
      }
    ]);
  }, 1000);
};

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        name: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            name: 'water',
            id: 80,
          },
          {
            name: 'antd',
            id: 180,
          },
        ],
      },
      {
        name: '\u5B98\u7F51',
        children: [
          {
            name: '\u91D1\u8302',
            id: 380,
          },
          {
            name: '\u7968\u5927\u5927',
            id: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelCol: {
      span: 4,
      md: {
        span: 6,
      } as any,
    },
    wrapperCol: {
      span: 20,
      md: {
        span: 18,
      } as any,
      style: 'padding-right: 16px'
    },
    actionColOptions: {
      span: 4,
      md: {
        span: 8,
      } as any,
    },
    schemas: [
      {
        field: 'couponName',
        label: '\u4F18\u60E0\u5238\u540D\u79F0',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'status',
        component: 'Select',
        label: '\u4F18\u60E0\u5238\u72B6\u6001',
        componentProps: {
          options: [{
            label: '\u4F7F\u7528\u4E2D',
            value: 1,
          }, {
            label: '\u5DF2\u8FC7\u671F',
            value: 2,
          }, {
            label: '\u5DF2\u5931\u6548',
            value: 3,
          }],
          placeholder: '\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001',
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

export default defineComponent({
  setup() {
    const [searchTableRegister] = useTable({
      api: demoListApi,
      columns,
      useSearchForm: true,
      formConfig: getFormConfig(),
    });

    return {
      searchTableRegister,
    };
  },
});
<\/script>
`;const Le=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function Ae({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{t(o)},1e3)}var M=h({setup(){const[n]=f({api:Ae,draggable:!0,columns:Le});return{basicRegister:n,dragEnd(t,o){console.log(t,o,"drag end")}}}});function Ne(n,t,o,e,u,c){const d=s("a-table-pro");return m(),p(d,{onRegister:n.basicRegister,onDragEnd:n.dragEnd},null,8,["onRegister","onDragEnd"])}M.render=Ne;var Ye=`<cn>
#### \u62D6\u62FD\u6392\u5E8F
\u62D6\u62FD\u6392\u5E8F\u3002
</cn>

<us>
#### drag
Simple table with actions.
</us>
`,Me=`<template>
  <a-table-pro
    @register="basicRegister"
    @drag-end="dragEnd"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  setup() {
    const [
        basicRegister,
      ] = useTable({
        api: demoListApi,
        draggable: true,
        columns,
      });
    return {
      basicRegister,
      dragEnd(oldIndexNumber, newIndexNumber) {
        console.log(oldIndexNumber, newIndexNumber, 'drag end');
      },
    };
  },
});
<\/script>
`;const Be=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function Ee({params:n,success:t}){const o=[];setTimeout(()=>{t(o)},1e3)}function Oe(){return{labelWidth:100,schemas:[{field:"input",component:"Input",colProps:{xl:12,xxl:8}},{field:"datePicker",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{xl:12,xxl:8}}]}}var B=h({setup(){const[n]=f({api:Ee,columns:Be,useSearchForm:!0,formConfig:Oe(),emptyPlaceholderClassName:()=>"new-placeholder-empty"});return{searchTableRegister:n}}});const Ke={style:{height:"500px",position:"relative"}};function ze(n,t,o,e,u,c){const d=s("a-table-pro");return m(),p("div",Ke,[a(d,{onRegister:n.searchTableRegister},null,8,["onRegister"])])}B.render=ze;var He=`<cn>
#### \u7A7A
\u8BBE\u7F6E\`emptyPlaceholderClassName\`\u7A7A\u6570\u636E\u5360\u4F4D\u9AD8\u5EA6\u7684\u4FEE\u6539
</cn>

<us>
#### empty
TODO
</us>
`,je=`<template>
  <div style="height: 500px;position: relative;">
    <a-table-pro
      @register="searchTableRegister"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
];

export function demoListApi({params, success}) {
  const arr: any = [];
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export function getFormConfig(): Partial<any> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'input',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'datePicker',
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

export default defineComponent({
  setup() {
    const [searchTableRegister] = useTable({
      api: demoListApi,
      columns,
      useSearchForm: true,
      formConfig: getFormConfig(),
      emptyPlaceholderClassName: () => {
        return 'new-placeholder-empty';
      }
    });

    return {
      searchTableRegister,
    };
  },
});
<\/script>

<style>
  .new-placeholder-empty {
    height: 200px !important;
  }
</style>
`;const Ue=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function Ge({params:n,success:t}){const o=[];setTimeout(()=>{t(o)},1e3)}function We(){return{labelWidth:100,schemas:[{field:"input",component:"Input",colProps:{xl:12,xxl:8}},{field:"datePicker",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{xl:12,xxl:8}}]}}var E=h({setup(){const[n]=f({api:Ge,columns:Ue,useSearchForm:!0,formConfig:We()});return{searchTableRegister:n}}});const qe={style:{height:"500px",position:"relative"}},Ve={style:{position:"relative",height:"360px"}};function Je(n,t,o,e,u,c){const d=s("a-table-pro"),g=s("a-empty");return m(),p("div",qe,[a(d,{onRegister:n.searchTableRegister,emptyDataIsShowTable:!1},null,8,["onRegister"]),a("div",Ve,[a(g,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}})])])}E.render=Je;var Xe=`<cn>
#### \u81EA\u5B9A\u4E49\u7A7A
\u8BBE\u7F6E\`:emptyDataIsShowTable="false"\`\u7A7A\u6570\u636E\u4E0D\u5C55\u793A\u8868\u683C
</cn>

<us>
#### empty-diy
TODO
</us>
`,Qe=`<template>
  <div style="height: 500px;position: relative;">
    <a-table-pro
      @register="searchTableRegister"
      :emptyDataIsShowTable="false"
    />
    <div style="position: relative;height: 360px;">
      <a-empty style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
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
];

export function demoListApi({params, success}) {
  const arr: any = [];
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export function getFormConfig(): Partial<any> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'input',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'datePicker',
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

export default defineComponent({
  setup() {
    const [searchTableRegister] = useTable({
      api: demoListApi,
      columns,
      useSearchForm: true,
      formConfig: getFormConfig(),
    });

    return {
      searchTableRegister,
    };
  },
});
<\/script>
`;function Ze(){return{labelWidth:100,schemas:[{field:"input",label:"\u8F93\u5165\u6846",component:"Input",componentProps:{placeholder:"\u8F93\u5165\u6846"},colProps:{xl:12,xxl:12}},{field:"datePicker",label:"\u65E5\u671F",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{xl:12,xxl:12}}]}}const nt=[{title:"name",dataIndex:"name",key:"name",width:300},{title:"Age",dataIndex:"age",key:"age",width:300},{title:"Address",dataIndex:"address",key:"address",width:1300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200},{title:"Action",key:"action",slots:{customRender:"action"}}];function et({params:n,success:t}){const o=[];for(let e=0;e<10;e++)o.push({id:`${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});setTimeout(()=>{t(o)},1e3)}var O=h({setup(){const[n]=f({api:et,columns:nt,useSearchForm:!0,formConfig:Ze()});return{toolbarRegister:n}}});const tt=i("\u4E0B\u8F7D");function at(n,t,o,e,u,c){const d=s("a-button"),g=s("a-table-pro");return m(),p(g,{onRegister:n.toolbarRegister,cardable:"",cardTitle:"\u5217\u8868"},{extra:r(()=>[a(d,null,{default:r(()=>[tt]),_:1})]),_:1},8,["onRegister"])}O.render=at;var ot=`<cn>
#### \u5361\u7247
\`cardable="true"\`
</cn>

<us>
#### card
TODO
</us>
`,dt=`<template>
  <a-table-pro
    @register="toolbarRegister"
    cardable
    cardTitle="\u5217\u8868"
  >
    <template #extra>
      <a-button>\u4E0B\u8F7D</a-button>
    </template>
  </a-table-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useTable } from '@fe6/water-pro';

export function getFormConfig(): Partial<any> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'input',
        label: '\u8F93\u5165\u6846',
        component: 'Input',
        componentProps: {
          placeholder: '\u8F93\u5165\u6846',
        },
        colProps: {
          xl: 12,
          xxl: 12,
        },
      },
      {
        field: 'datePicker',
        label: '\u65E5\u671F',
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYY-MM-DD',
        },
        colProps: {
          xl: 12,
          xxl: 12,
        },
      },
    ],
  };
}

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
      width: 300,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
      width: 300,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
      width: 1300,
  },
  {
    title: '\u5F00\u59CB\u65F6\u95F4',
    width: 200,
    dataIndex: 'beginTime',
  },
  {
    title: '\u7ED3\u675F\u65F6\u95F4',
    dataIndex: 'endTime',
    width: 200,
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

export function demoListApi({params, success}) {
  const arr: any = [];
  for (let index = 0; index < 10; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}

export default defineComponent({
  setup() {
    const [
      toolbarRegister,
    ] = useTable({
      api: demoListApi,
      columns,
      useSearchForm: true,
      formConfig: getFormConfig(),
    });
    return {
      toolbarRegister,
    };
  },
});
<\/script>
`;const rt={class:"markdown-body"},st=bn('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>clickToRowSelect</td><td>\u70B9\u51FB\u884C\u9009\u4E2D</td><td>boolean</td><td>-</td><td></td></tr><tr><td>isTreeTable</td><td>\u662F\u5426\u662F\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u6570\u636E\u91CC\u9762\u6709 <em><strong>children</strong></em> \u5B57\u6BB5\uFF0C\u8868\u683C\u81EA\u52A8\u4E3A\u6811\u5F62\u8868\u683C\u3002\u5F53 isTreeTable = true \u7684\u65F6\u5019\uFF0C\u6570\u636E\u4E2D\u8BBE\u7F6E <code>flag: &#39;INDEX&#39;</code> \u4E0D\u8D77\u4F5C\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showIndexColumn</td><td>\u662F\u5426\u663E\u793A\u5E8F\u53F7\u5217</td><td>boolean</td><td>-</td><td></td></tr><tr><td>inset</td><td>\u53D6\u6D88\u8868\u683C\u5916\u90E8\u7684\u9ED8\u8BA4 <code>padding</code></td><td>boolean</td><td>-</td><td></td></tr><tr><td>autoCreateKey</td><td>\u662F\u5426\u81EA\u52A8\u751F\u6210 rowKey \u914D\u7F6E</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showTableSetting</td><td>\u662F\u5426\u663E\u793A\u8868\u683C\u53F3\u4E0A\u89D2\u7684\u8BBE\u7F6E\u548C\u5237\u65B0\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showSummary</td><td>\u662F\u5426\u663E\u793A\u5408\u8BA1\u884C</td><td>boolean</td><td>-</td><td></td></tr><tr><td>immediate</td><td>\u662F\u5426\u7ACB\u5373\u8BF7\u6C42\u63A5\u53E3</td><td>boolean</td><td>true</td><td></td></tr><tr><td>useSearchForm</td><td>\u662F\u5426\u4F7F\u7528\u641C\u7D22\u8868\u5355</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showIndexColumn</td><td>\u662F\u5426\u663E\u793A\u5E8F\u53F7\u5217</td><td>boolean</td><td>-</td><td></td></tr><tr><td>ellipsis</td><td>\u6587\u672C\u8D85\u8FC7\u5BBD\u5EA6\u662F\u5426\u663E\u793A <code>...</code></td><td>boolean</td><td>-</td><td></td></tr><tr><td>draggable</td><td>\u62D6\u62FD\u57F9\u8BAD</td><td>boolean</td><td>-</td><td>3.17.0</td></tr><tr><td>canResize</td><td>\u662F\u5426\u53EF\u4EE5\u81EA\u9002\u5E94\u9AD8\u5EA6</td><td>boolean</td><td>-</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>boolean</td><td>-</td><td></td></tr><tr><td>pagination</td><td>\u5206\u9875\u914D\u7F6E</td><td><a href="ttps://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/pagination.ts#15"><code>PaginationProps</code></a> | boolean</td><td>-</td><td></td></tr><tr><td>clearSelectOnPageChange</td><td>\u5728\u5206\u9875\u6539\u53D8\u7684\u65F6\u5019\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u662F\u5426\u52A0\u8F7D</td><td>boolean</td><td>-</td><td></td></tr><tr><td>emptyDataIsShowTable</td><td>\u5728\u5F00\u8D77\u641C\u7D22\u8868\u5355\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u662F\u5426\u663E\u793A\u8868\u683C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resizeHeightOffset</td><td>\u81EA\u9002\u5E94\u9AD8\u5EA6\u504F\u79FB\uFF0C\u8BA1\u7B97\u7ED3\u679C-\u504F\u79FB\u91CF</td><td>number</td><td>-</td><td></td></tr><tr><td>maxHeight</td><td>\u8868\u683C\u6EDA\u52A8\u6700\u5927\u9AD8\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>rowKey</td><td>\u8868\u683C\u884C key \u7684\u53D6\u503C\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u51FD\u6570</td><td><code>string</code></td><td><code>((record: Recordable) =&gt; string)</code></td><td>-</td></tr><tr><td>titleHelpMessage</td><td>\u6807\u9898\u53F3\u4FA7\u63D0\u793A</td><td>string | <code>string[]</code></td><td>-</td><td></td></tr><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8868\u683C\u7D27\u5BC6\u5EA6</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#L94">SizeType</a></td><td>default</td><td></td></tr><tr><td>tableSetting</td><td>\u8BBE\u7F6E\u53F3\u4E0A\u89D2\u663E\u793A\u7684icon</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#L143">TableSetting</a></td><td>-</td><td>-</td></tr><tr><td>sortFn</td><td>\u81EA\u5B9A\u4E49\u6392\u5E8F\u65B9\u6CD5</td><td>Function</td><td>-</td><td></td></tr><tr><td>filterFn</td><td>\u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5</td><td>Function</td><td>-</td><td></td></tr><tr><td>summaryFunc</td><td>\u8BA1\u7B97\u5408\u8BA1\u884C\u7684\u65B9\u6CD5</td><td>Function</td><td>-</td><td></td></tr><tr><td>beforeFetch</td><td>\u8BF7\u6C42\u4E4B\u524D\u5904\u7406\u53C2\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>afterFetch</td><td>\u81EA\u5B9A\u4E49\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u53C2\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>handleSearchInfoFn</td><td>\u67E5\u8BE2\u6761\u4EF6\u8BF7\u6C42\u4E4B\u524D\u5904\u7406</td><td>Function</td><td>-</td><td></td></tr><tr><td>totalRender</td><td>\u5206\u9875\u603B\u6570\u7684\u914D\u7F6E</td><td><code>(total: number, range: [number, number]) =&gt; any</code></td><td>-</td><td></td></tr><tr><td>fetchSetting</td><td>\u8BF7\u6C42\u63A5\u53E3\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#L132">FetchSetting</a></td><td>-</td><td></td></tr><tr><td>api</td><td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>summaryData</td><td>\u81EA\u5B9A\u4E49\u5408\u8BA1\u8868\u683C\u5185\u5BB9</td><td>object[]</td><td>-</td><td></td></tr><tr><td>dataSource</td><td>\u8868\u683C\u6570\u636E</td><td>object[]</td><td>-</td><td></td></tr><tr><td>searchInfo</td><td>\u989D\u5916\u7684\u8BF7\u6C42\u63A5\u53E3\u7684\u6570\u636E</td><td>object</td><td>-</td><td></td></tr><tr><td>scroll</td><td>\u8868\u683C\u6EDA\u52A8\u6761\u8BBE\u7F6E</td><td>`{ x?: number</td><td>true; y?: number }`</td><td>-</td></tr><tr><td>formConfig</td><td>\u67E5\u8BE2\u6761\u4EF6\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form/Form.tsx#L67"><code>Partial&lt;FormProps&gt;</code></a></td><td>-</td><td></td></tr><tr><td>columns</td><td>\u8868\u683C\u5217\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>indexColumnProps</td><td>\u5E8F\u53F7\u5217\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>actionColumn</td><td>\u64CD\u4F5C\u5217\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>rowClassName</td><td>row \u7684 class \u540D\u5B57</td><td><code>(record: TableCustomRecord&lt;T&gt;) =&gt; string</code></td><td>-</td><td></td></tr><tr><td>rowSelection</td><td>row \u7684 selection \u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#21">TableRowSelection</a></td><td>-</td><td></td></tr><tr><td>emptyPlaceholderClassName</td><td>\u7A7A\u6570\u636E\u7684\u65F6\u5019\u5B9A\u5236\u5C55\u793A\u7684 class \u540D</td><td>() =&gt; string</td><td>() =&gt; \u2018\u2019</td><td>3.39.0</td></tr></tbody></table><blockquote><p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414">TableProProps</a></p></blockquote><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>register</td><td>\u4F7F\u7528 useTable \u7684\u56DE\u8C03</td><td>Function(<a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29">formActionType</a>)</td></tr><tr><td>fetch-success</td><td>api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u7684\u56DE\u8C03</td><td>Function({ items: \u7ED3\u679C\u6570\u636E, total: \u603B\u6570, params: \u53C2\u6570 })</td></tr><tr><td>fetch-error</td><td>api \u53C2\u6570\u8BF7\u6C42\u5931\u8D25\u7684\u56DE\u8C03</td><td>Function(error: any)</td></tr><tr><td>fetch-finally</td><td>api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u5931\u8D25\u90FD\u4F1A\u56DE\u8C03</td><td>Function()</td></tr><tr><td>selection-change</td><td>\u8868\u683C rowSelection \u7684 change \u56DE\u8C03</td><td>`Function(keys\uFF1A string[]</td></tr><tr><td>row-click</td><td>\u8868\u683C row-click \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-dbClick</td><td>\u8868\u683C row-dbClick \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-contextmenu</td><td>\u8868\u683C row-contextmenu \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-mouseenter</td><td>\u8868\u683C row-mouseenter \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-mouseleave</td><td>\u8868\u683C row-mouseleave \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr></tbody></table><h3>useTable \u8FD4\u56DE\u7684\u65B9\u6CD5 ( TableActionType )</h3><blockquote><p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#102">TableProProps</a></p></blockquote><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>reload</td><td>\u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3</td><td>Function(opt?: <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#79">FetchParams</a>)</td></tr><tr><td>getSelectRows</td><td>\u83B7\u53D6\u9009\u4E2D\u884C</td><td>-</td></tr><tr><td>clearSelectedRowKeys</td><td>\u6E05\u7A7A\u9009\u4E2D\u884C</td><td>-</td></tr><tr><td>getSelectRowKeys</td><td>\u83B7\u53D6\u9009\u4E2D\u884C Key</td><td>-</td></tr><tr><td>deleteSelectRowByKey</td><td>\u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A</td><td>Function(keys: string[])</td></tr><tr><td>setPagination</td><td>\u8BBE\u7F6E\u5206\u9875</td><td>-</td></tr><tr><td>setTableData</td><td>\u8BBE\u7F6E\u8868\u683C\u6570\u636E</td><td>-</td></tr><tr><td>getColumns</td><td>\u83B7\u53D6\u8868\u5934\u914D\u7F6E</td><td>-</td></tr><tr><td>setColumns</td><td>\u8BBE\u7F6E\u8868\u5934\u914D\u7F6E</td><td>-</td></tr><tr><td>getDataSource</td><td>\u83B7\u53D6\u8868\u683C\u6570\u636E</td><td>-</td></tr><tr><td>setLoading</td><td>\u8BBE\u7F6E\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td><td>-</td></tr><tr><td>getLoading</td><td>\u83B7\u53D6\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td><td>-</td></tr><tr><td>setProps</td><td>\u83B7\u53D6\u8868\u683C\u914D\u7F6E</td><td>-</td></tr><tr><td>setSelectedRowKeys</td><td>\u8BBE\u7F6E\u9009\u4E2D\u7684\u8868\u683C\u884C</td><td>Function(keys: string[])</td></tr><tr><td>getPaginationRef</td><td>\u83B7\u53D6\u8868\u683C\u5206\u9875\u5B9E\u4F8B</td><td>-</td></tr><tr><td>getSize</td><td>\u83B7\u53D6\u8868\u683C\u7D27\u5BC6\u5EA6</td><td>-</td></tr></tbody></table><h3>a-table-image API</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>imgList</td><td>\u56FE\u7247\u7684\u6570\u636E</td><td>string[]</td><td>-</td><td></td></tr></tbody></table><h3>a-table-card API</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>imgSize</td><td>\u56FE\u7247\u7684\u5C3A\u5BF8</td><td>number</td><td>80</td><td>3.33.0</td></tr><tr><td>imgUrl</td><td>\u56FE\u7247\u7684\u5730\u5740</td><td>string</td><td>\u2018\u2019</td><td>3.33.0</td></tr><tr><td>imgBorderd</td><td>\u56FE\u7247\u7684\u8FB9\u6846</td><td>boolean</td><td>true</td><td>3.33.0</td></tr><tr><td>imgPreview</td><td>\u56FE\u7247\u7684\u9884\u89C8</td><td>boolean</td><td>false</td><td>3.33.0</td></tr><tr><td>imgErrorImage</td><td>\u56FE\u7247\u52A0\u8F7D\u9519\u8BEF\u5C55\u793A</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>titleMaxLength</td><td>\u6807\u9898\u6700\u5927\u5C55\u793A\u957F\u5EA6</td><td>number</td><td>14</td><td>3.33.0</td></tr><tr><td>desc</td><td>\u63CF\u8FF0</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>descMaxLength</td><td>\u63CF\u8FF0\u6700\u5927\u5C55\u793A\u957F\u5EA6</td><td>number</td><td>14</td><td>3.34.0</td></tr><tr><td>cardable</td><td>\u5361\u7247\u8868\u683C</td><td>boolean</td><td>false</td><td>3.35.0</td></tr><tr><td>cardTitle</td><td>\u5361\u7247\u6807\u9898</td><td>string | slot</td><td>-</td><td>3.35.0</td></tr></tbody></table><h3>a-table-card slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>titleSuffix</td><td>\u6807\u9898\u672B\u5C3E\u7684\u8FFD\u52A0</td><td></td><td>-</td><td>3.33.0</td></tr></tbody></table>',14),it={expose:[],setup(n){return(t,o)=>(m(),p("div",rt,[st]))}};var lt=it;const K={cn:`# TablePro \u8868\u683C\u52A0\u5F3A\u7248

    \u666E\u901A\u8868\u683C\u53EA\u80FD\u4E00\u70B9\u70B9\u5199\uFF0C\u52A0\u5F3A\u7248\u8868\u683C\u914D\u4E00\u4E0B\u5C31\u884C~

    ## \u4F55\u65F6\u4F7F\u7528

    - \u60F3\u5077\u61D2\u7684\u65F6\u5019
    - \u52A0\u901F\u8FED\u4EE3\u9879\u76EE\u7684\u65F6\u5019

    ## \u4EE3\u7801\u6F14\u793A`,us:`# TablePro
TODO
    ## Examples `};var mt={category:"Components",subtitle:"\u8868\u683C PRO",type:"Data Display",title:"TablePro",render(){return a("div",null,[a(s("Md"),{cn:K.cn,us:K.us},null),a(s("demo-sort"),{cols:1},{default:()=>[a(s("demo-container"),{api:wn,code:kn},{default:()=>[a(P,null,null)]}),a(s("demo-container"),{api:Se,code:Ie},{default:()=>[a(N,null,null)]}),a(s("demo-container"),{api:De,code:ve},{default:()=>[a(Y,null,null)]}),a(s("demo-container"),{api:Tn,code:Sn},{default:()=>[a($,null,null)]}),a(s("demo-container"),{api:Mn,code:Bn},{default:()=>[a(R,null,null)]}),a(s("demo-container"),{api:ie,code:le},{default:()=>[a(L,null,null)]}),a(s("demo-container"),{api:be,code:he},{default:()=>[a(A,null,null)]}),a(s("demo-container"),{api:Rn,code:Dn},{default:()=>[a(F,null,null)]}),a(s("demo-container"),{api:Ye,code:Me},{default:()=>[a(M,null,null)]}),a(s("demo-container"),{api:He,code:je},{default:()=>[a(B,null,null)]}),a(s("demo-container"),{api:Xe,code:Qe},{default:()=>[a(E,null,null)]}),a(s("demo-container"),{api:ot,code:dt},{default:()=>[a(O,null,null)]})]}),a(s("api"),null,{default:()=>[a(lt,null,null)]})])}};export{mt as default};

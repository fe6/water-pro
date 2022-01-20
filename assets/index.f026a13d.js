import{j as C,g as h}from"./main.f0d1f01d.js";import{d as c,Y as s,bw as p,bx as u,b as o,by as A,D,k as m,bO as O}from"./vendor.846be9ce.js";var P=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const E=({params:e,success:n})=>{setTimeout(()=>{n([{label:"water",value:90},{label:"antd",value:80}])},1e3)},I=({params:e,success:n})=>{console.log("create"),setTimeout(()=>{n([])},1e3)},R=({params:e,success:n})=>{console.log("edit"),setTimeout(()=>{n([])},1e3)},M=({params:e,success:n})=>{console.log("remote"),setTimeout(()=>{n([])},1e3)},k=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],_=({params:e,success:n})=>{const a=[];for(let t=0;t<100;t++)a.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{n(a)},1e3)},L=({params:e,success:n})=>{setTimeout(()=>{n([])},1e3)};var T=c({setup(){const{register:e,methods:n}=C(),[a,{setFieldsValue:t,getFieldsValue:i,setProps:d}]=h();return{getSelectForOptions:E,postCreateApi:I,postEditApi:R,postRemoveApi:M,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:k,tableApi:_,dragApi:L,handlerForm:a,registerModal:e,open:()=>{n.openModal(),setTimeout(async()=>{console.log(1111,"1118"),d({schemas:[{field:"categoryIds",label:"\u5361\u5238\u5206\u7C7B",component:"Input",slot:"category",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5361\u5238\u5206\u7C7B",type:"array"}]}],labelCol:{span:24},wrapperCol:{span:24},actionColOptions:{span:24,push:0},showResetButton:!1,actionAlgin:"center",okText:"\u786E\u5B9A",submitButtonOptions:{loading:!1}}),console.log(8,"8"),setTimeout(async()=>{t({categoryIds:[90]})},0)},0)}}}});const q=D("\u6253\u5F00");function V(e,n,a,t,i,d){const r=s("a-button"),l=s("a-classify"),b=s("a-form-pro"),v=s("a-modal-pro");return p(),u("div",null,[o(r,{onClick:e.open},{default:A(()=>[q]),_:1},8,["onClick"]),o(v,{onRegister:e.registerModal,title:"water",footer:null,"min-height":195,"body-style":{height:"227px"},"z-index":1001},{default:A(()=>[o(b,{onRegister:e.handlerForm},{category:A(({model:g,field:f})=>[o(l,{value:g[f],"onUpdate:value":S=>g[f]=S,style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",mode:"multiple",api:e.getSelectForOptions,createFormConfig:e.createFormConfig,createApi:e.postCreateApi,editApi:e.postEditApi,removeApi:e.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:e.tableApi,drawerTableColumns:e.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:e.dragApi},null,8,["value","onUpdate:value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])]),_:1},8,["onRegister"])]),_:1},8,["onRegister"])])}T.render=V;var K=`<template>
  <div>
    <a-button @click="open">\u6253\u5F00</a-button>
    <a-modal-pro
      @register="registerModal"
      title="water"
      :footer="null"
      :min-height="195"
      :body-style="{ height: '227px' }"
      :z-index="1001"
    >
      <a-form-pro
        @register="handlerForm"
      >
        <template #category="{ model, field }">
          <a-classify
            v-model:value="model[field]"
            style="width: 200px"
            placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
            allowClear
            mode="multiple"
            :api="getSelectForOptions"
            :createFormConfig="createFormConfig"
            :createApi="postCreateApi"
            :editApi="postEditApi"
            :removeApi="postRemoveApi"
            removeTip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
            :drawerTableApi="tableApi"
            :drawerTableColumns="columns"
            showSearch
            drawerTableDraggable
            :drawerTableDragApi="dragApi"
          />
        </template>
      </a-form-pro>
    </a-modal-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useModal, useForm } from '@fe6/water-pro';

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

const postCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '\u5206\u7C7B\u7C7B\u578B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5206\u7C7B\u540D\u79F0',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({params, success}) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}
const dragApi = ({params, success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const { register: registerModal, methods: modalMethods } = useModal();
    const [
      handlerForm,
      {
        setFieldsValue,
        getFieldsValue,
        setProps,
      }
    ] = useForm();
    return {
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '\u623F\u578B\u7279\u8272',
            componentProps: {
              placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42',
              type: 'string',
            }]
          },
        ],
      },
      columns,
      tableApi,
      dragApi,

      handlerForm,

      registerModal,
      open: () => {
        modalMethods.openModal();
        setTimeout(async() => {
        console.log(1111, '1118');
        setProps({
          schemas: [
            {
              field: 'categoryIds',
              label: '\u5361\u5238\u5206\u7C7B',
              component: 'Input',
              slot: 'category',
              rules: [{
                required: true,
                message: '\u8BF7\u8F93\u5165\u5361\u5238\u5206\u7C7B',
                type: 'array'
              }],
            }
          ],
          labelCol: {
            span: 24
          },
          wrapperCol: {
            span: 24,
          },
          actionColOptions: {
            span: 24,
            push: 0
          },
          showResetButton: false,
          actionAlgin: 'center',
          okText: '\u786E\u5B9A',
          submitButtonOptions: {
            loading: false,
          },
        });
        console.log(8, '8');
        setTimeout(async() => {
          setFieldsValue({
            categoryIds: [90],
          });
        }, 0);
      }, 0);
      },
    }
  },
});
<\/script>
`,j=`<cn>
#### \u5206\u7EC4
\u5206\u7EC4\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const U=({params:e,success:n})=>{setTimeout(()=>{n([{label:"water",value:90,children:[{label:"antd1",value:180},{label:"2antd",value:280}]},{label:"antd",value:80,children:[{label:"23antd1",value:380},{label:"442antd",value:480}]}])},1e3)},W=({params:e,success:n})=>{console.log("create"),setTimeout(()=>{n([])},1e3)},N=({params:e,success:n})=>{console.log("edit"),setTimeout(()=>{n([])},1e3)},z=({params:e,success:n})=>{console.log("remote"),setTimeout(()=>{n([])},1e3)},Y=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],Z=({params:e,success:n})=>{const a=[];for(let t=0;t<100;t++)a.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{n(a)},1e3)},G=({params:e,success:n})=>{setTimeout(()=>{n([])},1e3)};var y=c({setup(){return{value3:m(380),getSelectForOptions:U,postCreateApi:W,postEditApi:N,postRemoveApi:z,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:Y,tableApi:Z,dragApi:G}}});function H(e,n,a,t,i,d){const r=s("a-classify");return p(),u(r,{value:e.value3,"onUpdate:value":n[1]||(n[1]=l=>e.value3=l),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",api:e.getSelectForOptions,createFormConfig:e.createFormConfig,createApi:e.postCreateApi,editApi:e.postEditApi,removeApi:e.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:e.tableApi,drawerTableColumns:e.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:e.dragApi},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])}y.render=H;var J=`<template>
  <a-classify
    v-model:value="value3"
    style="width: 200px"
    placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
    allowClear
    :api="getSelectForOptions"
    :createFormConfig="createFormConfig"
    :createApi="postCreateApi"
    :editApi="postEditApi"
    :removeApi="postRemoveApi"
    removeTip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
    :drawerTableApi="tableApi"
    :drawerTableColumns="columns"
    showSearch
    drawerTableDraggable
    :drawerTableDragApi="dragApi"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 90,
        children: [
          {
            label: 'antd1',
            value: 180
          },
          {
            label: '2antd',
            value: 280
          }
        ],
      },
      {
        label: 'antd',
        value: 80,
        children: [
          {
            label: '23antd1',
            value: 380
          },
          {
            label: '442antd',
            value: 480
          }
        ],
      }
    ]);
  }, 1000);
};

const postCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '\u5206\u7C7B\u7C7B\u578B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5206\u7C7B\u540D\u79F0',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({params, success}) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}
const dragApi = ({params, success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      value3: ref(380),
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '\u623F\u578B\u7279\u8272',
            componentProps: {
              placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42',
              type: 'string',
            }]
          },
        ],
      },
      columns,
      tableApi,
      dragApi,
    }
  },
});
<\/script>
`,Q=`<cn>
#### \u591A\u9009
\`mode="multiple"\` \u8BBE\u7F6E\u591A\u9009\u3002\`:maxTagCount="2"\`\u6700\u591A\u9009\u51E0\u4E2A\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const X=({params:e,success:n})=>{setTimeout(()=>{n([{label:"\u59D3\u540D",value:90,children:[{label:"\u5F20\u4E09",value:180},{label:"\u674E\u56DB",value:280}]},{label:"\u884C\u4E1A",value:80,children:[{label:"\u7A7A\u59D0",value:380},{label:"\u5730\u52E4",value:480}]}])},1e3)},ee=({params:e,success:n})=>{console.log("create"),setTimeout(()=>{n([])},1e3)},ne=({params:e,success:n})=>{console.log("edit"),setTimeout(()=>{n([])},1e3)},te=({params:e,success:n})=>{console.log("remote"),setTimeout(()=>{n([])},1e3)},ae=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],oe=({params:e,success:n})=>{const a=[];for(let t=0;t<100;t++)a.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{n(a)},1e3)},se=({params:e,success:n})=>{setTimeout(()=>{n([])},1e3)};var w=c({setup(){return{value3:m([380]),getSelectForOptions:X,postCreateApi:ee,postEditApi:ne,postRemoveApi:te,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:ae,tableApi:oe,dragApi:se}}});function re(e,n,a,t,i,d){const r=s("a-classify");return p(),u(r,{value:e.value3,"onUpdate:value":n[1]||(n[1]=l=>e.value3=l),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",api:e.getSelectForOptions,createFormConfig:e.createFormConfig,createApi:e.postCreateApi,editApi:e.postEditApi,removeApi:e.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:e.tableApi,drawerTableColumns:e.columns,mode:"multiple",maxTagCount:1,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:e.dragApi},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])}w.render=re;var le=`<template>
  <a-classify
    v-model:value="value3"
    style="width: 200px"
    placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
    allowClear
    :api="getSelectForOptions"
    :createFormConfig="createFormConfig"
    :createApi="postCreateApi"
    :editApi="postEditApi"
    :removeApi="postRemoveApi"
    removeTip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
    :drawerTableApi="tableApi"
    :drawerTableColumns="columns"
    mode="multiple"
    :maxTagCount="1"
    showSearch
    drawerTableDraggable
    :drawerTableDragApi="dragApi"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u59D3\u540D',
        value: 90,
        children: [
          {
            label: '\u5F20\u4E09',
            value: 180
          },
          {
            label: '\u674E\u56DB',
            value: 280
          }
        ],
      },
      {
        label: '\u884C\u4E1A',
        value: 80,
        children: [
          {
            label: '\u7A7A\u59D0',
            value: 380
          },
          {
            label: '\u5730\u52E4',
            value: 480
          }
        ],
      }
    ]);
  }, 1000);
};

const postCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '\u5206\u7C7B\u7C7B\u578B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5206\u7C7B\u540D\u79F0',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({params, success}) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}
const dragApi = ({params, success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      value3: ref([380]),
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '\u623F\u578B\u7279\u8272',
            componentProps: {
              placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42',
              type: 'string',
            }]
          },
        ],
      },
      columns,
      tableApi,
      dragApi,
    }
  },
});
<\/script>
`,ie=`<cn>
#### \u5B50\u7EA7\u663E\u793A
\`subLabelKey="subLabel"\` \u8BBE\u7F6E\u5B50\u7EA7\u63CF\u8FF0\u5B57\u6BB5\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const de=({params:e,success:n})=>{setTimeout(()=>{n([{label:"\u6C34\u6EF4",value:90,subLabel:"Water is \u6700\u68D2"},{label:"\u963F\u91CC",value:80,subLabel:"Antd is \u6700\u68D2"}])},1e3)},pe=({params:e,success:n})=>{console.log("create"),setTimeout(()=>{n([])},1e3)},ue=({params:e,success:n})=>{console.log("edit"),setTimeout(()=>{n([])},1e3)},ce=({params:e,success:n})=>{console.log("remote"),setTimeout(()=>{n([])},1e3)},me=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],ge=({params:e,success:n})=>{const a=[];for(let t=0;t<100;t++)a.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{n(a)},1e3)},Ae=({params:e,success:n})=>{setTimeout(()=>{n([])},1e3)};var F=c({setup(){return{value3:m(80),getSelectForOptions:de,postCreateApi:pe,postEditApi:ue,postRemoveApi:ce,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:me,tableApi:ge,dragApi:Ae}}});function be(e,n,a,t,i,d){const r=s("a-classify");return p(),u(r,{value:e.value3,"onUpdate:value":n[1]||(n[1]=l=>e.value3=l),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",api:e.getSelectForOptions,createFormConfig:e.createFormConfig,createApi:e.postCreateApi,editApi:e.postEditApi,removeApi:e.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:e.tableApi,drawerTableColumns:e.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:e.dragApi,subLabelKey:"subLabel"},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])}F.render=be;var ve=`<template>
  <a-classify
    v-model:value="value3"
    style="width: 200px"
    placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
    allowClear
    :api="getSelectForOptions"
    :createFormConfig="createFormConfig"
    :createApi="postCreateApi"
    :editApi="postEditApi"
    :removeApi="postRemoveApi"
    removeTip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
    :drawerTableApi="tableApi"
    :drawerTableColumns="columns"
    showSearch
    drawerTableDraggable
    :drawerTableDragApi="dragApi"
    subLabelKey="subLabel"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const getSelectForOptions = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u6C34\u6EF4',
        value: 90,
        subLabel: 'Water is \u6700\u68D2'
      },
      {
        label: '\u963F\u91CC',
        value: 80,
        subLabel: 'Antd is \u6700\u68D2'
      }
    ]);
  }, 1000);
};

const postCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '\u5206\u7C7B\u7C7B\u578B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5206\u7C7B\u540D\u79F0',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({params, success}) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}
const dragApi = ({params, success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      value3: ref(80),
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '\u623F\u578B\u7279\u8272',
            componentProps: {
              placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42',
              type: 'string',
            }]
          },
        ],
      },
      columns,
      tableApi,
      dragApi,
    }
  },
});
<\/script>
`,fe=`<cn>
#### \u4E0B\u62C9\u6570\u636E\u914D\u7F6E
\`selectOptions\` \u8BBE\u7F6E\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const Ce=({params:e,success:n})=>{console.log("create"),setTimeout(()=>{n([])},1e3)},he=({params:e,success:n})=>{console.log("edit"),setTimeout(()=>{n([])},1e3)},Te=({params:e,success:n})=>{console.log("remote"),setTimeout(()=>{n([])},1e3)},ye=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],we=({params:e,success:n})=>{const a=[];for(let t=0;t<100;t++)a.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{n(a)},1e3)},Fe=({params:e,success:n})=>{setTimeout(()=>{n([])},1e3)};var $=c({setup(){return{value3:m([80]),getSelectForOptions:[{label:"\u6C34\u6EF4",value:90,subLabel:"Water is \u6700\u68D2"},{label:"\u963F\u91CC",value:80,subLabel:"Antd is \u6700\u68D2"},{label:"2\u6C34\u6EF4",value:190,subLabel:"Water is \u6700\u68D2"},{label:"3\u963F\u91CC",value:180,subLabel:"Antd is \u6700\u68D2"}],postCreateApi:Ce,postEditApi:he,postRemoveApi:Te,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:ye,tableApi:we,dragApi:Fe}}});function $e(e,n,a,t,i,d){const r=s("a-classify");return p(),u(r,{value:e.value3,"onUpdate:value":n[1]||(n[1]=l=>e.value3=l),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",createFormConfig:e.createFormConfig,createApi:e.postCreateApi,editApi:e.postEditApi,removeApi:e.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",mode:"multiple",drawerTableApi:e.tableApi,drawerTableColumns:e.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:e.dragApi,selectOptions:e.getSelectForOptions,labelKey:"label",valueKey:"value"},null,8,["value","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi","selectOptions"])}$.render=$e;var Be=`<template>
  <a-classify
    v-model:value="value3"
    style="width: 200px"
    placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
    allowClear
    :createFormConfig="createFormConfig"
    :createApi="postCreateApi"
    :editApi="postEditApi"
    :removeApi="postRemoveApi"
    removeTip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
    mode="multiple"
    :drawerTableApi="tableApi"
    :drawerTableColumns="columns"
    showSearch
    drawerTableDraggable
    :drawerTableDragApi="dragApi"
    :selectOptions="getSelectForOptions"
    labelKey="label"
    valueKey="value"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const postCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '\u5206\u7C7B\u7C7B\u578B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5206\u7C7B\u540D\u79F0',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({params, success}) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}
const dragApi = ({params, success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    return {
      value3: ref([80]),
      getSelectForOptions: [
      {
        label: '\u6C34\u6EF4',
        value: 90,
        subLabel: 'Water is \u6700\u68D2'
      },
      {
        label: '\u963F\u91CC',
        value: 80,
        subLabel: 'Antd is \u6700\u68D2'
      },
      {
        label: '2\u6C34\u6EF4',
        value: 190,
        subLabel: 'Water is \u6700\u68D2'
      },
      {
        label: '3\u963F\u91CC',
        value: 180,
        subLabel: 'Antd is \u6700\u68D2'
      }
    ],
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '\u623F\u578B\u7279\u8272',
            componentProps: {
              placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42',
              type: 'string',
            }]
          },
        ],
      },
      columns,
      tableApi,
      dragApi,
    }
  },
});
<\/script>
`,xe=`<cn>
#### \u5355\u9009
\u5355\u9009\u3002
</cn>

<us>
#### Radio
</us>
`;const Se=({params:e,success:n})=>{setTimeout(()=>{n([{label:"water",value:90},{label:"antd",value:80},{label:"2water",value:290},{label:"2antd",value:280},{label:"1water",value:190},{label:"1antd",value:180}])},1e3)},De=({params:e,success:n})=>{console.log("create"),setTimeout(()=>{n([])},1e3)},Oe=({params:e,success:n})=>{console.log("edit"),setTimeout(()=>{n([])},1e3)},Pe=({params:e,success:n})=>{console.log("remote"),setTimeout(()=>{n([])},1e3)},Ee=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],Ie=({params:e,success:n})=>{const a=[];for(let t=0;t<100;t++)a.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{n(a)},1e3)},Re=({params:e,success:n})=>{setTimeout(()=>{n([])},1e3)};var B=c({setup(){const e=m([80]),{register:n,methods:a}=C(),[t,{setFieldsValue:i,getFieldsValue:d,setProps:r}]=h({schemas:[{field:"categoryIds",label:"\u5361\u5238\u5206\u7C7B",component:"Input",slot:"category",dynamicRules:()=>[{required:!0,validator:()=>e.value?Promise.resolve():Promise.reject(new Error("\u8BF7\u9009\u62E9\u95E8\u7968\u7C7B\u578B"))}]}],labelCol:{span:24},wrapperCol:{span:24},actionColOptions:{span:24,push:0},showResetButton:!1,actionAlgin:"center",okText:"\u786E\u5B9A",submitButtonOptions:{loading:!1}});return{value3:e,getSelectForOptions:Se,postCreateApi:De,postEditApi:Oe,postRemoveApi:Pe,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:Ee,tableApi:Ie,dragApi:Re,handlerForm:t,registerModal:n,open:()=>{a.openModal(),setTimeout(async()=>{console.log(1111,"1118"),r(),console.log(8,"8"),setTimeout(async()=>{i({categoryIds:[90]})},0)},0)}}}});function Me(e,n,a,t,i,d){const r=s("a-classify"),l=s("a-form-pro");return p(),u("div",null,[o(l,{onRegister:e.handlerForm},{category:A(({model:b,field:v})=>[o(r,{value:e.value3,"onUpdate:value":n[1]||(n[1]=g=>e.value3=g),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",api:e.getSelectForOptions,createFormConfig:e.createFormConfig,createApi:e.postCreateApi,editApi:e.postEditApi,removeApi:e.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:e.tableApi,drawerTableColumns:e.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:e.dragApi},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])]),_:1},8,["onRegister"])])}B.render=Me;var ke=`<template>
  <div>
    <a-form-pro
      @register="handlerForm"
    >
      <template #category="{ model, field }">
        <a-classify
          v-model:value="value3"
          style="width: 200px"
          placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
          allowClear
          :api="getSelectForOptions"
          :createFormConfig="createFormConfig"
          :createApi="postCreateApi"
          :editApi="postEditApi"
          :removeApi="postRemoveApi"
          removeTip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
          :drawerTableApi="tableApi"
          :drawerTableColumns="columns"
          showSearch
          drawerTableDraggable
          :drawerTableDragApi="dragApi"
        />
      </template>
    </a-form-pro>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useModal, useForm } from '@fe6/water-pro';

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
      },
      {
        label: '2water',
        value: 290
      },
      {
        label: '2antd',
        value: 280
      },
      {
        label: '1water',
        value: 190
      },
      {
        label: '1antd',
        value: 180
      }
    ]);
  }, 1000);
};

const postCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const postRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const columns = [
  {
    title: '\u5206\u7C7B\u7C7B\u578B',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5206\u7C7B\u540D\u79F0',
    dataIndex: 'age',
    key: 'age',
  },
];

const tableApi = ({params, success}) => {
  const arr: any = [];
  for (let index = 0; index < 100; index++) {
    arr.push({
      id: \`\${index}\`,
      name: \`\${Math.random() + index}-water\`,
      age: \`1\${index}\`,
    });
  }
  setTimeout(() => {
    success(arr);
  }, 1000);
}
const dragApi = ({params, success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

export default defineComponent({
  setup() {
    const value3 = ref([80]);
    const { register: registerModal, methods: modalMethods } = useModal();
    const [
      handlerForm,
      {
        setFieldsValue,
        getFieldsValue,
        setProps,
      }
    ] = useForm({
          schemas: [
            {
              field: 'categoryIds',
              label: '\u5361\u5238\u5206\u7C7B',
              component: 'Input',
              slot: 'category',
              dynamicRules: () => {
                return [
                  {
                    required: true,
                    validator: () => {
                      if (!value3.value) {
                        return Promise.reject(new Error('\u8BF7\u9009\u62E9\u95E8\u7968\u7C7B\u578B'));
                      }
                      return Promise.resolve();
                    },
                  },
                ];
              },
            }
          ],
          labelCol: {
            span: 24
          },
          wrapperCol: {
            span: 24,
          },
          actionColOptions: {
            span: 24,
            push: 0
          },
          showResetButton: false,
          actionAlgin: 'center',
          okText: '\u786E\u5B9A',
          submitButtonOptions: {
            loading: false,
          },
        });
    return {
      value3,
      getSelectForOptions,
      postCreateApi,
      postEditApi,
      postRemoveApi,
      createFormConfig: {
        schemas: [
          {
            field: 'name',
            component: 'Input',
            label: '\u623F\u578B\u7279\u8272',
            componentProps: {
              placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
              maxlength: 200,
            },
            itemProps: {
              labelAlign: 'left'
            },
            rules: [{
              required: true,
              message: '\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42',
              type: 'string',
            }]
          },
        ],
      },
      columns,
      tableApi,
      dragApi,

      handlerForm,

      registerModal,
      open: () => {
        modalMethods.openModal();
        setTimeout(async() => {
        console.log(1111, '1118');
        setProps();
        console.log(8, '8');
        setTimeout(async() => {
          setFieldsValue({
            categoryIds: [90],
          });
        }, 0);
      }, 0);
      },
    }
  },
});
<\/script>
`;const _e={class:"markdown-body"},Le=O('<h2>API</h2><blockquote><p>\u6269\u5C55\u4E8E Select \u7EC4\u4EF6\u3002\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./select-cn">select</a></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td></tr><tr><td>api</td><td>\u4E0B\u62C9\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>apiParams</td><td>\u4E0B\u62C9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>removeApi</td><td>\u5220\u9664\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>removeApiParams</td><td>\u5220\u9664\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>removeTip</td><td>\u5220\u9664\u63A5\u53E3\u63D0\u793A</td><td>string</td><td>-</td></tr><tr><td>removeKey</td><td>\u5220\u9664\u7684\u9ED8\u8BA4\u552F\u4E00\u7D22\u5F15\uFF0C\u7528\u4E8Eloading</td><td>string</td><td>id</td></tr><tr><td>editApi</td><td>\u7F16\u8F91\u63A5\u53E3\u8BF7\u6C42\uFF0C\u81EA\u52A8\u4F20\u9012 id \uFF0C\u6570\u636E\u5217\u8868\u5FC5\u987B\u6709\u4E2Aid\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>editApiParams</td><td>\u7F16\u8F91\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>createApi</td><td>\u521B\u5EFA\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>createApiParams</td><td>\u521B\u5EFA\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>createFormConfig</td><td>\u6DFB\u52A0\u5F39\u6846\u7684\u8868\u5355\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126">FormSchema</a></td><td>{}</td></tr><tr><td>createTitle</td><td>\u6DFB\u52A0\u7684\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u6DFB\u52A0</td></tr><tr><td>editTitle</td><td>\u7F16\u8F91\u7684\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u7F16\u8F91</td></tr><tr><td>drawerTitle</td><td>\u6DFB\u52A0\u7684\u62BD\u5C49\u6807\u9898</td><td>string</td><td>\u7BA1\u7406</td></tr><tr><td>drawerWidth</td><td>\u6DFB\u52A0\u7684\u62BD\u5C49\u5BBD\u5EA6</td><td>number</td><td>650</td></tr><tr><td>drawerZIndex</td><td>\u6DFB\u52A0\u7684\u62BD\u5C49\u5C42\u7EA7\u9AD8\u5EA6</td><td>number</td><td>1000</td></tr><tr><td>drawerCreateButtonText</td><td>\u62BD\u5C49\u6DFB\u52A0\u7684\u6587\u6848</td><td>string</td><td>\u6DFB\u52A0</td></tr><tr><td>drawerTableApi</td><td>\u62BD\u5C49\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>drawerTableApiParams</td><td>\u62BD\u5C49\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td></tr><tr><td>drawerTableColumns</td><td>\u62BD\u5C49\u8868\u683C\u5217\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414">BasicColumn</a></td><td>-</td></tr><tr><td>drawerTableDraggable</td><td>\u662F\u5426\u62D6\u62FD\u6392\u5E8F</td><td>boolean</td><td>-</td></tr><tr><td>drawerTableDragKey</td><td>\u4F1A\u8FD4\u56DE\u6240\u6709\u6392\u597D\u5E8F\u7684 id \u503C\u7684\u6570\u7EC4</td><td>string</td><td>id</td></tr><tr><td>drawerTableDragApi</td><td>\u62D6\u62FD\u6392\u5E8F\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>subLabelKey</td><td>\u5B50\u9009\u9879\u7684\u63CF\u8FF0\u5B57\u6BB5\uFF0C\u5F53\u8BBE\u7F6E\u624D\u4F1A\u663E\u793A</td><td>string</td><td>-</td></tr><tr><td>labelKey</td><td>\u6587\u5B57\u7684\u5B57\u6BB5</td><td>string</td><td>-</td></tr><tr><td>valueKey</td><td>\u503C\u7684\u5B57\u6BB5</td><td>string</td><td>-</td></tr><tr><td>selectOptions</td><td>selectOptions \u6570\u636E</td><td>array&lt;{value, label, [subLabel]}&gt;</td><td>-</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>on-edit</td><td>\u521B\u5EFA\u7F16\u8F91\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>on-remove</td><td>\u5220\u9664\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr></tbody></table>',5),qe={expose:[],setup(e){return(n,a)=>(p(),u("div",_e,[Le]))}};var Ve=qe;const x={cn:`# Classify \u5206\u7C7B\u9009\u62E9\u5668
          \u53EA\u4E3A\u5206\u7C7B\u5B9A\u5236\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u53EA\u4E3A\u8BBE\u7F6E\u5206\u7C7B
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Classify
          TODO
## Examples
          `};var Ue={category:"Components",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",title:"Classify",subtitle:"\u5206\u7C7B\u9009\u62E9\u5668",render(){return o("div",{id:"components-classify-demo"},[o(s("Md"),{cn:x.cn,us:x.us},null),o(s("demo-sort"),null,{default:()=>[o(s("demo-container"),{api:P,code:K},{default:()=>[o(T,null,null)]}),o(s("demo-container"),{api:j,code:J},{default:()=>[o(y,null,null)]}),o(s("demo-container"),{api:Q,code:le},{default:()=>[o(w,null,null)]}),o(s("demo-container"),{api:ie,code:ve},{default:()=>[o(F,null,null)]}),o(s("demo-container"),{api:fe,code:Be},{default:()=>[o($,null,null)]}),o(s("demo-container"),{api:xe,code:ke},{default:()=>[o(B,null,null)]})]}),o(s("api"),null,{default:()=>[o(Ve,null,null)]})])}};export{Ue as default};

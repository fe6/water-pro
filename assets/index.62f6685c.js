import{g as X,j as A,k as L,c as Z,z as ee,M as N}from"./main.f0d1f01d.js";import{j as _,d as ne,k as i,w as ae,bG as oe,bH as te,Y as o,bw as G,bx as U,b as n,D as s,bz as C,F as le,bI as se,bO as ie}from"./vendor.846be9ce.js";var re=`<cn>
#### \u56FD\u9645\u5316
\u6B64\u5904\u5217\u51FA Ant Design Vue \u4E2D\u9700\u8981\u56FD\u9645\u5316\u652F\u6301\u7684\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6F14\u793A\u91CC\u5207\u6362\u8BED\u8A00\u3002
</cn>

<us>
#### Locale
Components which need localization support are listed here, you can toggle the language in the demo.
</us>
`;_.locale("en");const de=({params:e,success:a})=>{setTimeout(()=>{a([{label:"water",value:90},{label:"antd",value:80}])},1e3)},ce=({params:e,success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},pe=({params:e,success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},me=({params:e,success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},ue=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],ge=({success:e})=>{const a=[];for(let r=0;r<100;r++)a.push({id:`${r}`,name:`${Math.random()+r}-water`,age:`1${r}`});setTimeout(()=>{e(a)},1e3)},fe=({success:e})=>{setTimeout(()=>{e([])},1e3)},[ve,{setFieldsValue:he,setProps:be}]=X(),{register:ye,methods:F}=A(),_e=[{title:"Name",dataIndex:"name",filters:[{text:"filter1",value:"filter1"}]},{title:"Age",dataIndex:"age"}],Ce=[{id:5,name:"\u897F\u4E09\u65D7\u90E8",users:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",departmentId:[1,2,3,5,6,7,44],position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{id:151,userId:"Cang",name:"\u82CD",departmentId:[1,2,3,5],alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"}],children:[]}],we=[{name:"\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E",id:190},{name:"water",id:290}],Pe=[{dataIndex:"name",key:"name",slots:{title:"nameTitle"}},{dataIndex:"age",key:"age",slots:{title:"ageTitle"}},{dataIndex:"address",key:"address",slots:{title:"addressTitle"}}];function xe(e){return{labelCol:{span:4,md:{span:6}},wrapperCol:{span:20,md:{span:18},style:"padding-right: 16px"},actionColOptions:{span:4,md:{span:8}},schemas:[{field:"couponName",label:()=>e.value==="en"?"couponName":"\u4F18\u60E0\u5238\u540D\u79F0",component:"Input",componentProps:()=>({placeholder:e.value==="en"?"Enter":"\u8BF7\u8F93\u5165"}),colProps:{xl:12,xxl:8}},{field:"status",component:"Select",label:()=>e.value==="en"?"couponStatus":"\u4F18\u60E0\u5238\u72B6\u6001",componentProps:()=>({options:[{label:e.value==="en"?"In use":"\u4F7F\u7528\u4E2D",value:1},{label:e.value==="en"?"Expired":"\u5DF2\u8FC7\u671F",value:2},{label:e.value==="en"?"Invalid":"\u5DF2\u5931\u6548",value:3}],placeholder:e.value==="en"?"select":"\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001"}),colProps:{xl:12,xxl:8}}]}}const ke=({params:e,success:a})=>{setTimeout(()=>{a([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},Me=({success:e})=>{setTimeout(()=>{e([])},1e3)},w=ne({setup(){const{register:e,methods:a}=A(),r=i(!1),p=i(L.locale);ae(p,d=>{_.locale(d)});const P=()=>{N.info({title:"some info",content:"some info"})},x=()=>{N.confirm({title:"some info",content:"some info"})},[f]=Z({useSearchForm:!0,formConfig:xe(p),columns:Pe}),m=i(!1),u=i(!1),c=i(we.slice()),v=i(["https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png","https://cdn.dev.mosh.cn/image/34/19/9e08f1618c9f8a4fd073290db3be.png"]);return{tableProRegister:f,tableColumns:_e,visible:r,locale:p,moment:_,enUS:L,zhCN:ee,info:P,confirm:x,modalUserOptions:Ce,modalUserValue:i(["Cangjingkong"]),registerModalPro:e,openModalPro:()=>{a.openModal()},classifyGetSelectForOptions:de,pclassifyPostCreateApi:ce,classifyPostEditApi:pe,classifyPostRemoveApi:me,classifyCreateFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},classifyColumns:ue,classifyTableApi:ge,classifyDragApi:fe,classifyHndlerForm:ve,classifyRegisterModal:ye,classifyOk:()=>{F.openModal(!1)},classifyOpen:()=>{F.openModal(),setTimeout(async()=>{be({schemas:[{field:"categoryIds",label:"\u5361\u5238\u5206\u7C7B",component:"Input",slot:"category",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5361\u5238\u5206\u7C7B",type:"array"}]}],labelCol:{span:24},wrapperCol:{span:24},actionColOptions:{span:24,push:0},showResetButton:!1,actionAlgin:"center",okText:p.value==="en"?"ok":"\u786E\u5B9A",submitButtonOptions:{loading:!1}}),setTimeout(async()=>{he({categoryIds:[90]})},0)},0)},tagGroupCreateLoading:m,tagGroupRemoveLoading:u,tagGroupCreateDatas:c,tagGroupCreateChange:(d,h)=>{h==="add"&&(m.value=!0,setTimeout(()=>{m.value=!1,c.value.push({name:d,id:Number((Math.random()*10).toFixed(0))})},1e3)),h==="remove"&&(u.value=!0,setTimeout(()=>{u.value=!1;const b=c.value.findIndex(y=>y.name===d);c.value.splice(b,1)},1e3))},tags:i([80,380]),tagModalListApi:ke,smsCodeValue:i(""),getSmsCodeApi:Me,uploadCardList:v,uploadCardOnChangeUpload(d){v.value=d},uploadNameValue:i("")}}}),l=se();oe("data-v-a0116710");const Ie={class:"change-locale"},Te=n("span",{style:{"margin-right":"16px"}},"Change locale of components:",-1),Se=s("English"),Ae=s("\u4E2D\u6587"),Le={class:"locale-components"},Ne={class:"example"},Ge=s(" upload-card\uFF1A"),Ue={class:"example"},Fe=s(" upload-image\uFF1A"),Re={class:"example"},Oe=s(" upload-name(\u63A5\u53E3\u4E0D\u597D\u4F7F)\uFF1A"),je={class:"example"},Ve=s(" preview-image\uFF1A"),De={class:"example"},ze={class:"example"},$e=s(" tag-modal-list: "),Ee={class:"example"},He=s(" tag-group: "),Be={class:"example"},qe=s("\u6253\u5F00 classify"),Ke={class:"example"},Qe={class:"example"},We=s("\u6253\u5F00 Modal Pro"),Ye=s(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),Je={class:"example"},Xe={class:"example"},Ze={class:"example"},en=s("jack"),nn=s("lucy"),an={class:"example"},on=s("Show Modal"),tn=s("Show info"),ln=s("Show confirm"),sn=n("a",{href:"#"},"Click to confirm",-1),rn={class:"example"},dn={class:"site-config-provider-calendar-wrapper"},cn={class:"example"},pn=n("p",null,"Locale Modal",-1);te();const mn=l((e,a,r,p,P,x)=>{const f=o("a-radio-button"),m=o("a-radio-group"),u=o("a-upload-card"),c=o("a-upload-image"),v=o("a-upload-name"),d=o("a-preview-image"),h=o("a-sms-code"),b=o("a-tag-modal-list"),y=o("a-tag-group"),O=o("a-table-pro"),g=o("a-button"),j=o("a-classify"),V=o("a-form-pro"),k=o("a-modal-pro"),D=o("a-pagination"),z=o("a-modal-user"),M=o("a-range-picker"),$=o("a-color-picker"),I=o("a-calendar"),T=o("a-select-option"),E=o("a-select"),H=o("a-date-picker"),B=o("a-time-picker"),q=o("a-popconfirm"),K=o("a-transfer"),Q=o("a-table"),W=o("a-modal"),Y=o("a-config-provider");return G(),U(le,null,[n("div",Ie,[Te,n(m,{value:e.locale,"onUpdate:value":a[1]||(a[1]=t=>e.locale=t)},{default:l(()=>[n(f,{key:"en",value:e.enUS.locale},{default:l(()=>[Se]),_:1},8,["value"]),n(f,{key:"cn",value:e.zhCN.locale},{default:l(()=>[Ae]),_:1},8,["value"])]),_:1},8,["value"])]),n(Y,{locale:e.locale==="en"?e.enUS:e.zhCN},{default:l(()=>[n("div",Le,[n("div",Ne,[Ge,n(u,{action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data",value:e.uploadCardList,"onUpdate:value":a[2]||(a[2]=t=>e.uploadCardList=t),onChangeUpload:e.uploadCardOnChangeUpload,draggable:""},null,8,["value","onChangeUpload"])]),n("div",Ue,[Fe,n(c,{action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data","allow-update":""})]),n("div",Re,[Oe,n(v,{action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data",accept:"image/png,image/jpeg,image/gif",value:e.uploadNameValue,"onUpdate:value":a[3]||(a[3]=t=>e.uploadNameValue=t)},null,8,["value"])]),n("div",je,[Ve,n(d,{value:"https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png"})]),n("div",De,[n(h,{api:e.getSmsCodeApi,value:e.smsCodeValue,"onUpdate:value":a[4]||(a[4]=t=>e.smsCodeValue=t),ajaxParams:()=>({phone:13810902078}),buttonOptions:{type:"danger"}},null,8,["api","value","ajaxParams"])]),n("div",ze,[$e,n(b,{value:e.tags,"onUpdate:value":a[5]||(a[5]=t=>e.tags=t),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label"},null,8,["value","api"])]),n("div",Ee,[He,n(y,{value:e.tagGroupCreateDatas,"onUpdate:value":a[6]||(a[6]=t=>e.tagGroupCreateDatas=t),createable:"",closable:"","create-loading":e.tagGroupCreateLoading,"remove-loading":e.tagGroupRemoveLoading,onChange:e.tagGroupCreateChange},null,8,["value","create-loading","remove-loading","onChange"])]),n(O,{onRegister:e.tableProRegister,"form-label-col":{span:6},"form-wrapper-col":{span:18}},{nameTitle:l(()=>[s(C(e.locale==="en"?"Name":"\u59D3\u540D"),1)]),ageTitle:l(()=>[s(C(e.locale==="en"?"Age":"\u5E74\u9F84"),1)]),addressTitle:l(()=>[s(C(e.locale==="en"?"Address":"\u5730\u5740"),1)]),_:1},8,["onRegister"]),n("div",Be,[n(g,{onClick:e.classifyOpen},{default:l(()=>[qe]),_:1},8,["onClick"]),n(k,{onRegister:e.classifyRegisterModal,title:"water",footer:null,"min-height":195,"body-style":{height:"227px"},"z-index":1001},{default:l(()=>[n(V,{onRegister:e.classifyHndlerForm,onSubmit:e.classifyOk},{category:l(({model:t,field:S})=>[n(j,{value:t[S],"onUpdate:value":J=>t[S]=J,style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B","allow-clear":"",mode:"multiple",api:e.classifyGetSelectForOptions,"create-form-config":e.classifyCreateFormConfig,"create-api":e.pclassifyPostCreateApi,"edit-api":e.classifyPostEditApi,"remove-api":e.classifyPostRemoveApi,"remove-aip":"\u786E\u5B9A\u8981\u5220\u9664\u5417","drawer-table-api":e.classifyTableApi,"drawerz-index":1001,"drawer-table-columns":e.classifyColumns,"show-search":"","drawer-table-draggable":"","drawer-table-drag-api":e.classifyDragApi},null,8,["value","onUpdate:value","api","create-form-config","create-api","edit-api","remove-api","drawer-table-api","drawer-table-columns","drawer-table-drag-api"])]),_:1},8,["onRegister","onSubmit"])]),_:1},8,["onRegister"])]),n("div",Ke,[n(D,{total:50,"show-size-changer":""})]),n("div",Qe,[n(g,{onClick:e.openModalPro},{default:l(()=>[We]),_:1},8,["onClick"]),n(k,{onRegister:e.registerModalPro,title:"water"},{default:l(()=>[Ye]),_:1},8,["onRegister"])]),n("div",Je,[n(z,{options:e.modalUserOptions,value:e.modalUserValue,"onUpdate:value":a[7]||(a[7]=t=>e.modalUserValue=t)},null,8,["options","value"])]),n(M,{"show-today-button":"","show-testerday-button":"","show-seven-days-button":"","show-thirty-days-button":""}),n("div",Xe,[n($)]),n(I),n("div",Ze,[n(E,{"show-search":"",style:{width:"200px"}},{default:l(()=>[n(T,{value:"jack"},{default:l(()=>[en]),_:1}),n(T,{value:"lucy"},{default:l(()=>[nn]),_:1})]),_:1}),n(H),n(B),n(M,{style:{width:"200px"}})]),n("div",an,[n(g,{type:"primary",onClick:a[8]||(a[8]=t=>e.visible=!0)},{default:l(()=>[on]),_:1}),n(g,{onClick:e.info},{default:l(()=>[tn]),_:1},8,["onClick"]),n(g,{onClick:e.confirm},{default:l(()=>[ln]),_:1},8,["onClick"]),n(q,{title:"Question?"},{default:l(()=>[sn]),_:1})]),n("div",rn,[n(K,{"data-source":[],"show-search":"","target-keys":[],render:t=>t.title},null,8,["render"])]),n("div",dn,[n(I,{fullscreen:!1,value:e.moment()},null,8,["value"])]),n("div",cn,[n(Q,{"data-source":[],columns:e.tableColumns},null,8,["columns"])]),n(W,{visible:e.visible,"onUpdate:visible":a[9]||(a[9]=t=>e.visible=t),title:"Locale Modal"},{default:l(()=>[pn]),_:1},8,["visible"])])]),_:1},8,["locale"])],64)});w.render=mn;w.__scopeId="data-v-a0116710";var un=w,gn=`<template>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">\u4E2D\u6587</a-radio-button>
    </a-radio-group>
  </div>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        upload-card\uFF1A<a-upload-card
          action="https://api.dev.mosh.cn/public/upload/image/binary"
          resultKey="data"
          v-model:value="uploadCardList"
          @changeUpload="uploadCardOnChangeUpload"
          draggable
        />
      </div>
      <div class="example">
        upload-image\uFF1A<a-upload-image
          action="https://api.dev.mosh.cn/public/upload/image/binary"
          resultKey="data"
          allow-update
        />
      </div>
      <div class="example">
        upload-name(\u63A5\u53E3\u4E0D\u597D\u4F7F)\uFF1A<a-upload-name
          action="https://api.dev.mosh.cn/public/upload/image/binary"
          resultKey="data"
          accept='image/png,image/jpeg,image/gif'
          v-model:value="uploadNameValue"
        />
      </div>
      <div class="example">
        preview-image\uFF1A<a-preview-image
          value="https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png"
        />
      </div>
      <div class="example">
        <a-sms-code
          :api="getSmsCodeApi"
          v-model:value="smsCodeValue"
          :ajaxParams="() => ({phone: 13810902078})"
          :buttonOptions="{
            type: 'danger'
          }"
        />
      </div>
      <div class="example">
        tag-modal-list: <a-tag-modal-list
          v-model:value="tags"
          createable
          :api="tagModalListApi"
          valueLabel="value"
          nameLabel="label"
        />
      </div>
      <div class="example">
        tag-group: <a-tag-group
        v-model:value="tagGroupCreateDatas"
        createable
        closable
        :create-loading="tagGroupCreateLoading"
        :remove-loading="tagGroupRemoveLoading"
        @change="tagGroupCreateChange"
      />
      </div>
      <a-table-pro
        @register="tableProRegister"
        :form-label-col="{
          span: 6
        }"
        :form-wrapper-col="{
          span: 18
        }"
      >
        <template #nameTitle>
          {{locale === 'en' ? 'Name' : '\u59D3\u540D'}}
        </template>
        <template #ageTitle>
          {{locale === 'en' ? 'Age' : '\u5E74\u9F84'}}
        </template>
        <template #addressTitle>
          {{locale === 'en' ? 'Address' : '\u5730\u5740'}}
        </template>
      </a-table-pro>
      <div class="example">
        <a-button @click="classifyOpen">\u6253\u5F00 classify</a-button>
        <a-modal-pro
          @register="classifyRegisterModal"
          title="water"
          :footer="null"
          :min-height="195"
          :body-style="{ height: '227px' }"
          :z-index="1001"
        >
          <a-form-pro
            @register="classifyHndlerForm"
            @submit="classifyOk"
          >
            <template #category="{ model, field }">
              <a-classify
                v-model:value="model[field]"
                style="width: 200px"
                placeholder="\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"
                allow-clear
                mode="multiple"
                :api="classifyGetSelectForOptions"
                :create-form-config="classifyCreateFormConfig"
                :create-api="pclassifyPostCreateApi"
                :edit-api="classifyPostEditApi"
                :remove-api="classifyPostRemoveApi"
                remove-aip="\u786E\u5B9A\u8981\u5220\u9664\u5417"
                :drawer-table-api="classifyTableApi"
                :drawerz-index="1001"
                :drawer-table-columns="classifyColumns"
                show-search
                drawer-table-draggable
                :drawer-table-drag-api="classifyDragApi"
              />
            </template>
          </a-form-pro>
        </a-modal-pro>
      </div>
      <div class="example">
        <a-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <a-button @click="openModalPro">\u6253\u5F00 Modal Pro</a-button>
        <a-modal-pro @register="registerModalPro" title="water">
          \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
        </a-modal-pro>
      </div>
      <div class="example">
        <a-modal-user
          :options="modalUserOptions"
          v-model:value="modalUserValue"
        />
      </div>
      <a-range-picker
        show-today-button
        show-testerday-button
        show-seven-days-button
        show-thirty-days-button
      ></a-range-picker>
      <div class="example">
        <a-color-picker />
      </div>
      <a-calendar />
      <div class="example">
        <a-select show-search style="width: 200px">
          <a-select-option value="jack">jack</a-select-option>
          <a-select-option value="lucy">lucy</a-select-option>
        </a-select>
        <a-date-picker />
        <a-time-picker />
        <a-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <a-button type="primary" @click="visible = true">Show Modal</a-button>
        <a-button @click="info">Show info</a-button>
        <a-button @click="confirm">Show confirm</a-button>
        <a-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </a-popconfirm>
      </div>
      <div class="example">
        <a-transfer :data-source="[]" show-search :target-keys="[]" :render="item => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <a-calendar :fullscreen="false" :value="moment()" />
      </div>
      <div class="example">
        <a-table :data-source="[]" :columns="tableColumns" />
      </div>
      <a-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </a-modal>
    </div>
  </a-config-provider>
</template>
<script>
import { Modal, useModal, useForm, useTable } from '@fe6/water-pro';
import enUS from '@fe6/water-pro/es/locale/en_US';
import zhCN from '@fe6/water-pro/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import { defineComponent, ref, watch } from 'vue';

moment.locale('en');

// classify start
const classifyGetSelectForOptions = ({params, success}) => {
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

const pclassifyPostCreateApi = ({params, success}) => {
  console.log('create');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const classifyPostEditApi = ({params, success}) => {
  console.log('edit');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const classifyPostRemoveApi = ({params, success}) => {
  console.log('remote');
  setTimeout(() => {
    success([]);
  }, 1000);
};

const classifyColumns = [
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

const classifyTableApi = ({success}) => {
  const arr = [];
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
const classifyDragApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};
  const [
    classifyHndlerForm,
    {
      setFieldsValue: classSetFieldsValue,
      setProps: classifySetProps,
    }
  ] = useForm();
  const { register: classifyRegisterModal, methods: classifyModalMethods } = useModal();
// classify end

// table start
const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
// table end

// modal user start
const modalUserOptions = [
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
];
// modal user end

const tagGroupDatas = [
  {
    name: '\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E',
    id: 190
  },
  {
    name: 'water',
    id: 290
  }
];


const tableProColumns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: {title: 'nameTitle'}
  },
  {
    dataIndex: 'age',
    key: 'age',
    slots: {title: 'ageTitle'}
  },
  {
    dataIndex: 'address',
    key: 'address',
    slots: {title: 'addressTitle'}
  },
];

function tableProGetFormConfig(locale) {
  return {
    labelCol: {
      span: 4,
      md: {
        span: 6,
      },
    },
    wrapperCol: {
      span: 20,
      md: {
        span: 18,
      },
      style: 'padding-right: 16px'
    },
    actionColOptions: {
      span: 4,
      md: {
        span: 8,
      },
    },
    schemas: [
      {
        field: 'couponName',
        label: () => locale.value === 'en'?'couponName':'\u4F18\u60E0\u5238\u540D\u79F0',
        component: 'Input',
        componentProps: () => ({
          placeholder: locale.value === 'en'? 'Enter' : '\u8BF7\u8F93\u5165',
        }),
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: 'status',
        component: 'Select',
        label: () => locale.value === 'en'?'couponStatus':'\u4F18\u60E0\u5238\u72B6\u6001',
        componentProps: () => ({
          options: [{
            label: locale.value === 'en'?'In use':'\u4F7F\u7528\u4E2D',
            value: 1,
          }, {
            label: locale.value === 'en'?'Expired':'\u5DF2\u8FC7\u671F',
            value: 2,
          }, {
            label: locale.value === 'en'?'Invalid':'\u5DF2\u5931\u6548',
            value: 3,
          }],
          placeholder: locale.value === 'en'?'select':'\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001',
        }),
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

const getSmsCodeApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
}

export default defineComponent({
  setup() {
    const { register: registerModalPro, methods: modalProMethods } = useModal();
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      moment.locale(val);
    });
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    const [
        tableProRegister,
      ] = useTable({
        useSearchForm: true,
        formConfig: tableProGetFormConfig(locale),
        columns: tableProColumns,
      });

    const tagGroupCreateLoading = ref(false);
    const tagGroupRemoveLoading = ref(false);
    const tagGroupCreateDatas = ref(tagGroupDatas.slice());

    const uploadCardList = ref([ "https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png", 'https://cdn.dev.mosh.cn/image/34/19/9e08f1618c9f8a4fd073290db3be.png' ]);
        
    return {
      tableProRegister,
      tableColumns,
      visible,
      locale,
      moment,
      enUS,
      zhCN,
      info,
      confirm,
      modalUserOptions,
      modalUserValue: ref(['Cangjingkong']),
      registerModalPro,
      openModalPro: () => {
        modalProMethods.openModal();
      },
      // classify start
      classifyGetSelectForOptions,
      pclassifyPostCreateApi,
      classifyPostEditApi,
      classifyPostRemoveApi,
      classifyCreateFormConfig: {
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
      classifyColumns,
      classifyTableApi,
      classifyDragApi,

      classifyHndlerForm,

      classifyRegisterModal,
      classifyOk: () => {
        classifyModalMethods.openModal(false);
      },
      classifyOpen: () => {
        classifyModalMethods.openModal();
        setTimeout(async() => {
          classifySetProps({
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
            okText: locale.value === 'en' ? 'ok' : '\u786E\u5B9A',
            submitButtonOptions: {
              loading: false,
            },
          });
          setTimeout(async() => {
            classSetFieldsValue({
              categoryIds: [90],
            });
          }, 0);
        }, 0);
      },
      // classify end
      tagGroupCreateLoading,
      tagGroupRemoveLoading,
      tagGroupCreateDatas,
      tagGroupCreateChange: (name, eventeType) => {
        if (eventeType === 'add') {
          tagGroupCreateLoading.value = true;
          setTimeout(() => {
            tagGroupCreateLoading.value = false;
            tagGroupCreateDatas.value.push({
              name,
              id: Number((Math.random() * 10).toFixed(0))
            });
          }, 1000);
        }
        if (eventeType === 'remove') {
          tagGroupRemoveLoading.value = true;
          setTimeout(() => {
            tagGroupRemoveLoading.value = false;
            const itemIdex = tagGroupCreateDatas.value.findIndex((item) => item.name === name);
            tagGroupCreateDatas.value.splice(itemIdex, 1);
          }, 1000);
        }
      },
      tags: ref([80, 380]),
      tagModalListApi,
      smsCodeValue: ref(''),
      getSmsCodeApi,
      uploadCardList,
      uploadCardOnChangeUpload(newList) {
        uploadCardList.value = newList;
      },
      uploadNameValue: ref(''),
    };
  },
});
<\/script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
`;const fn={class:"markdown-body"},vn=ie(`<h2>\u4F7F\u7528</h2><p>ConfigProvider \u4F7F\u7528 Vue \u7684 <a href="https://vuejs.org/v2/api/#provide-inject">provide / inject</a> \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002</p><p>ConfigProvider \u4F7F\u7528 Vue \u7684 <a href="https://vuejs.org/v2/api/#provide-inject">provide / inject</a>{:target=\u201C_blank\u201D} \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002</p><pre><code class="language-html">&lt;template&gt;
  &lt;a-config-provider :getPopupContainer=&quot;getPopupContainer&quot;&gt;
    &lt;app /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      getPopupContainer(el, dialogContext) {
        if (dialogContext) {
          return dialogContext.getDialogWrap();
        } else {
          return document.body;
        }
      },
    },
  };
&lt;/script&gt;
</code></pre><h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoInsertSpaceInButton</td><td>\u8BBE\u7F6E\u4E3A <code>false</code> \u65F6\uFF0C\u79FB\u9664\u6309\u94AE\u4E2D 2 \u4E2A\u6C49\u5B57\u4E4B\u95F4\u7684\u7A7A\u683C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>csp</td><td>\u8BBE\u7F6E <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">Content Security Policy</a> \u914D\u7F6E</td><td>{ nonce: string }</td><td>-</td><td></td></tr><tr><td>renderEmpty</td><td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7A7A\u72B6\u6001\u3002\u53C2\u8003 <a href="./empty-cn">\u7A7A\u72B6\u6001</a></td><td>slot-scope | Function(componentName: string): VNode</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u5F39\u51FA\u6846\uFF08Select, Tooltip, Menu \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002</td><td>Function(triggerNode, dialogContext)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>locale</td><td>\u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 <a href="http://unpkg.com/@fe6/water-pro/components/locale/">locale</a> \u76EE\u5F55\u4E0B\u5BFB\u627E</td><td>object</td><td>-</td><td>1.5.0</td></tr><tr><td>pageHeader</td><td>\u7EDF\u4E00\u8BBE\u7F6E pageHeader \u7684 ghost\uFF0C\u53C2\u8003 <a href="(/components/page-header)">pageHeader</a></td><td>{ ghost: boolean }</td><td>\u2018true\u2019</td><td>1.5.0</td></tr><tr><td>transformCellText</td><td>Table \u6570\u636E\u6E32\u67D3\u524D\u53EF\u4EE5\u518D\u6B21\u6539\u53D8\uFF0C\u4E00\u822C\u7528\u6237\u7A7A\u6570\u636E\u7684\u9ED8\u8BA4\u914D\u7F6E</td><td>Function({ text, column, record, index }) =&gt; any</td><td>-</td><td>1.5.4 \uFF5C</td></tr></tbody></table><h2>FAQ</h2><h4>\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86 ConfigProvider <code>locale</code>\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F</h4><p>\u8BF7\u68C0\u67E5\u662F\u5426\u8BBE\u7F6E\u4E86 <code>moment.locale(&#39;zh-cn&#39;)</code>\uFF0C\u6216\u8005\u662F\u5426\u6709\u4E24\u4E2A\u7248\u672C\u7684 moment \u5171\u5B58\u3002</p><h4>\u914D\u7F6E <code>getPopupContainer</code> \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F</h4><p>\u5F53\u5982\u4E0B\u5168\u5C40\u8BBE\u7F6E <code>getPopupContainer</code> \u4E3A\u89E6\u53D1\u8282\u70B9\u7684 parentNode \u65F6\uFF0C\u7531\u4E8E Modal \u7684\u7528\u6CD5\u4E0D\u5B58\u5728 <code>triggerNode</code>\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4 <code>triggerNode is undefined</code> \u7684\u62A5\u9519\uFF0C\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u5224\u65AD\u6761\u4EF6\u3002</p><pre><code class="language-diff"> &lt;ConfigProvider
-  getPopupContainer={triggerNode =&gt; triggerNode.parentNode}
+  getPopupContainer={node =&gt; {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 &gt;
   &lt;App /&gt;
 &lt;/ConfigProvider&gt;
</code></pre>`,12),hn={expose:[],setup(e){return(a,r)=>(G(),U("div",fn,[vn]))}};var bn=hn;const R={cn:`# ConfigProvider \u5168\u5C40\u5316\u914D\u7F6E
\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002`,us:"# ConfigProvider\n`ConfigProvider` provides a uniform configuration support for components.\n"};var Cn={category:"Components",subtitle:"\u5168\u5C40\u5316\u914D\u7F6E",cols:1,type:"\u5176\u4ED6",title:"ConfigProvider",render(){return n("div",null,[n(o("Md"),{cn:R.cn,us:R.us},null),n(o("demo-sort"),{cols:1},{default:()=>[n(o("demo-container"),{api:re,code:gn},{default:()=>[n(un,null,null)]})]}),n(o("api"),null,{default:()=>[n(bn,null,null)]})])}};export{Cn as default};

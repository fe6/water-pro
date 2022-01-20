import{d as w,r as k,a7 as R,Y as o,bw as b,bx as g,by as n,b as t,D as l,k as L,cu as D,ag as B,m as $,F as N,bV as M,c8 as T,bP as W,cv as x,o as I,bO as Z}from"./vendor.846be9ce.js";var A=w({setup(){const e=k({name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""});return{labelCol:{span:4},wrapperCol:{span:14},formState:e,onSubmit:()=>{console.log("submit!",R(e))}}}});const H=l("Zone one"),Y=l("Zone two"),G=l("Online"),J=l("Promotion"),K=l("Offline"),Q=l("Sponsor"),X=l("Venue"),ee=l("Create"),te=l("Cancel");function ne(e,a,h,m,_,y){const c=o("a-input"),r=o("a-form-item"),d=o("a-select-option"),f=o("a-select"),u=o("a-date-picker"),i=o("a-switch"),s=o("a-checkbox"),S=o("a-checkbox-group"),F=o("a-radio"),O=o("a-radio-group"),C=o("a-button"),P=o("a-form");return b(),g(P,{model:e.formState,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:n(()=>[t(r,{label:"Activity name"},{default:n(()=>[t(c,{value:e.formState.name,"onUpdate:value":a[1]||(a[1]=p=>e.formState.name=p)},null,8,["value"])]),_:1}),t(r,{label:"Activity zone"},{default:n(()=>[t(f,{value:e.formState.region,"onUpdate:value":a[2]||(a[2]=p=>e.formState.region=p),placeholder:"please select your zone"},{default:n(()=>[t(d,{value:"shanghai"},{default:n(()=>[H]),_:1}),t(d,{value:"beijing"},{default:n(()=>[Y]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"Activity time"},{default:n(()=>[t(u,{value:e.formState.date1,"onUpdate:value":a[3]||(a[3]=p=>e.formState.date1=p),"show-time":"",type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["value"])]),_:1}),t(r,{label:"Instant delivery"},{default:n(()=>[t(i,{checked:e.formState.delivery,"onUpdate:checked":a[4]||(a[4]=p=>e.formState.delivery=p)},null,8,["checked"])]),_:1}),t(r,{label:"Activity type"},{default:n(()=>[t(S,{value:e.formState.type,"onUpdate:value":a[5]||(a[5]=p=>e.formState.type=p)},{default:n(()=>[t(s,{value:"1",name:"type"},{default:n(()=>[G]),_:1}),t(s,{value:"2",name:"type"},{default:n(()=>[J]),_:1}),t(s,{value:"3",name:"type"},{default:n(()=>[K]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"Resources"},{default:n(()=>[t(O,{value:e.formState.resource,"onUpdate:value":a[6]||(a[6]=p=>e.formState.resource=p)},{default:n(()=>[t(F,{value:"1"},{default:n(()=>[Q]),_:1}),t(F,{value:"2"},{default:n(()=>[X]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"Activity form"},{default:n(()=>[t(c,{value:e.formState.desc,"onUpdate:value":a[7]||(a[7]=p=>e.formState.desc=p),type:"textarea"},null,8,["value"])]),_:1}),t(r,{"wrapper-col":{span:14,offset:4}},{default:n(()=>[t(C,{type:"primary",onClick:e.onSubmit},{default:n(()=>[ee]),_:1},8,["onClick"]),t(C,{style:{"margin-left":"10px"}},{default:n(()=>[te]),_:1})]),_:1})]),_:1},8,["model","label-col","wrapper-col"])}A.render=ne;var ae=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u7684\u8868\u5355\u6570\u636E\u57DF\u63A7\u5236\u5C55\u793A\uFF0C\u5305\u542B\u5E03\u5C40\u3001\u521D\u59CB\u5316\u3001\u9A8C\u8BC1\u3001\u63D0\u4EA4\u3002
</cn>

<us>
#### \u57FA\u672C\u4F7F\u7528
TODO
</us>
`,oe=`<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Activity zone">
      <a-select v-model:value="formState.region" placeholder="please select your zone">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Activity time">
      <a-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </a-form-item>
    <a-form-item label="Instant delivery">
      <a-switch v-model:checked="formState.delivery" />
    </a-form-item>
    <a-form-item label="Activity type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form">
      <a-input v-model:value="formState.desc" type="textarea" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, reactive, toRaw, UnwrapRef } from 'vue';
interface FormState {
  name: string;
  region: string | undefined;
  date1: Moment | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
<\/script>
`,V=w({setup(){const e=L(),a={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},h={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},m=k({domains:[]});return{formRef:e,formItemLayout:a,formItemLayoutWithOutLabel:h,dynamicValidateForm:m,submitForm:()=>{e.value.validate().then(()=>{console.log("values",m.domains)}).catch(d=>{console.log("error",d)})},resetForm:()=>{e.value.resetFields()},removeDomain:d=>{let f=m.domains.indexOf(d);f!==-1&&m.domains.splice(f,1)},addDomain:()=>{m.domains.push({value:"",key:Date.now()})}}},components:{MinusCircleOutlined:D,PlusOutlined:B}});const re=l(" Add field "),le=l("Submit"),de=l("Reset");function ie(e,a,h,m,_,y){const c=o("a-input"),r=o("MinusCircleOutlined"),d=o("a-form-item"),f=o("PlusOutlined"),u=o("a-button"),i=o("a-form");return b(),g(i,$({ref:"formRef",model:e.dynamicValidateForm},e.formItemLayoutWithOutLabel),{default:n(()=>[(b(!0),g(N,null,M(e.dynamicValidateForm.domains,(s,S)=>(b(),g(d,$({key:s.key},S===0?e.formItemLayout:{},{label:S===0?"Domains":"",name:["domains",S,"value"],rules:{required:!0,message:"domain can not be null",trigger:"change"}}),{default:n(()=>[t(c,{value:s.value,"onUpdate:value":F=>s.value=F,placeholder:"please input domain",style:{width:"60%","margin-right":"8px"}},null,8,["value","onUpdate:value"]),e.dynamicValidateForm.domains.length>1?(b(),g(r,{key:0,class:"dynamic-delete-button",disabled:e.dynamicValidateForm.domains.length===1,onClick:F=>e.removeDomain(s)},null,8,["disabled","onClick"])):T("v-if",!0)]),_:2},1040,["label","name"]))),128)),t(d,e.formItemLayoutWithOutLabel,{default:n(()=>[t(u,{type:"dashed",style:{width:"60%"},onClick:e.addDomain},{default:n(()=>[t(f),re]),_:1},8,["onClick"])]),_:1},16),t(d,e.formItemLayoutWithOutLabel,{default:n(()=>[t(u,{type:"primary","html-type":"submit",onClick:e.submitForm},{default:n(()=>[le]),_:1},8,["onClick"]),t(u,{style:{"margin-left":"10px"},onClick:e.resetForm},{default:n(()=>[de]),_:1},8,["onClick"])]),_:1},16)]),_:1},16,["model"])}V.render=ie;var se=`<cn>
#### \u52A8\u6001\u589E\u51CF\u8868\u5355\u9879
\u52A8\u6001\u589E\u52A0\u3001\u51CF\u5C11\u8868\u5355\u9879\u3002
</cn>

<us>
#### Dynamic Form Item
Add or remove form items dynamically.
</us>
`,me=`<template>
  <a-form ref="formRef" :model="dynamicValidateForm" v-bind="formItemLayoutWithOutLabel">
    <a-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      v-bind="index === 0 ? formItemLayout : {}"
      :label="index === 0 ? 'Domains' : ''"
      :name="['domains', index, 'value']"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'change',
      }"
    >
      <a-input
        v-model:value="domain.value"
        placeholder="please input domain"
        style="width: 60%; margin-right: 8px"
      />
      <MinusCircleOutlined
        v-if="dynamicValidateForm.domains.length > 1"
        class="dynamic-delete-button"
        :disabled="dynamicValidateForm.domains.length === 1"
        @click="removeDomain(domain)"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="addDomain">
        <PlusOutlined />
        Add field
      </a-button>
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="primary" html-type="submit" @click="submitForm">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';

interface Domain {
  value: string;
  key: number;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    const dynamicValidateForm: UnwrapRef<{ domains: Domain[] }> = reactive({
      domains: [],
    });
    const submitForm = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', dynamicValidateForm.domains);
        })
        .catch((error: ValidateErrorEntity<any>) => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    const removeDomain = (item: Domain) => {
      let index = dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1);
      }
    };
    const addDomain = () => {
      dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    };
    return {
      formRef,
      formItemLayout,
      formItemLayoutWithOutLabel,
      dynamicValidateForm,
      submitForm,
      resetForm,
      removeDomain,
      addDomain,
    };
  },
  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },
});
<\/script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
`,U=w({setup(){const e=k({user:"",password:""});return{formState:e,handleFinish:m=>{console.log(m,e)},handleFinishFailed:m=>{console.log(m)}}},components:{UserOutlined:W,LockOutlined:x}});const ue=l(" Log in ");function ce(e,a,h,m,_,y){const c=o("UserOutlined"),r=o("a-input"),d=o("a-form-item"),f=o("LockOutlined"),u=o("a-button"),i=o("a-form");return b(),g(i,{layout:"inline",model:e.formState,onFinish:e.handleFinish,onFinishFailed:e.handleFinishFailed},{default:n(()=>[t(d,null,{default:n(()=>[t(r,{value:e.formState.user,"onUpdate:value":a[1]||(a[1]=s=>e.formState.user=s),placeholder:"Username"},{prefix:n(()=>[t(c,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(d,null,{default:n(()=>[t(r,{value:e.formState.password,"onUpdate:value":a[2]||(a[2]=s=>e.formState.password=s),type:"password",placeholder:"Password"},{prefix:n(()=>[t(f,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(d,null,{default:n(()=>[t(u,{type:"primary","html-type":"submit",disabled:e.formState.user===""||e.formState.password===""},{default:n(()=>[ue]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])}U.render=ce;var fe=`<cn>
#### \u5185\u8054\u767B\u5F55\u680F
\u6C34\u5E73\u767B\u5F55\u680F\uFF0C\u5E38\u7528\u5728\u9876\u90E8\u5BFC\u822A\u680F\u4E2D\u3002
</cn>

<us>
#### Inline Login Form
Inline login form is often used in navigation bar.
</us>
`,pe=`<template>
  <a-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts"> 
import { defineComponent, reactive, UnwrapRef } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from '@fe6/water-pro';

interface FormState {
  user: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
<\/script>
`,q=w({setup(){const e=k({layout:"horizontal",fieldA:"",fieldB:""}),a=I(()=>{const{layout:m}=e;return m==="horizontal"?{labelCol:{span:4},wrapperCol:{span:14}}:{}}),h=I(()=>{const{layout:m}=e;return m==="horizontal"?{wrapperCol:{span:14,offset:4}}:{}});return{formState:e,formItemLayout:a,buttonItemLayout:h}}});const he=l("Horizontal"),ve=l("Vertical"),be=l("Inline"),ge=l("Submit");function ye(e,a,h,m,_,y){const c=o("a-radio-button"),r=o("a-radio-group"),d=o("a-form-item"),f=o("a-input"),u=o("a-button"),i=o("a-form");return b(),g(i,$({layout:e.formState.layout,model:e.formState},e.formItemLayout),{default:n(()=>[t(d,{label:"Form Layout"},{default:n(()=>[t(r,{value:e.formState.layout,"onUpdate:value":a[1]||(a[1]=s=>e.formState.layout=s)},{default:n(()=>[t(c,{value:"horizontal"},{default:n(()=>[he]),_:1}),t(c,{value:"vertical"},{default:n(()=>[ve]),_:1}),t(c,{value:"inline"},{default:n(()=>[be]),_:1})]),_:1},8,["value"])]),_:1}),t(d,{label:"Field A"},{default:n(()=>[t(f,{value:e.formState.fieldA,"onUpdate:value":a[2]||(a[2]=s=>e.formState.fieldA=s),placeholder:"input placeholder"},null,8,["value"])]),_:1}),t(d,{label:"Field B"},{default:n(()=>[t(f,{value:e.formState.fieldB,"onUpdate:value":a[3]||(a[3]=s=>e.formState.fieldB=s),placeholder:"input placeholder"},null,8,["value"])]),_:1}),t(d,{"wrapper-col":e.buttonItemLayout.wrapperCol},{default:n(()=>[t(u,{type:"primary"},{default:n(()=>[ge]),_:1})]),_:1},8,["wrapper-col"])]),_:1},16,["layout","model"])}q.render=ye;var _e=`<cn>
#### \u8868\u5355\u5E03\u5C40
\u8868\u5355\u6709\u4E09\u79CD\u5E03\u5C40\u3002
</cn>

<us>
#### Form Layout
There are three layout for form: \`horizontal\`, \`vertical\`, \`inline\`.
</us>
`,Fe=`<template>
  <a-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <a-form-item label="Form Layout">
      <a-radio-group v-model:value="formState.layout">
        <a-radio-button value="horizontal">Horizontal</a-radio-button>
        <a-radio-button value="vertical">Vertical</a-radio-button>
        <a-radio-button value="inline">Inline</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Field A">
      <a-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, UnwrapRef } from 'vue';

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline';
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
<\/script>
`,E=w({setup(){const e=L(),a=k({pass:"",checkPass:"",age:void 0});return{formState:a,formRef:e,rules:{pass:[{validator:async(u,i)=>i===""?Promise.reject(new Error("Please input the password")):(a.checkPass!==""&&e.value.validateField("checkPass"),Promise.resolve()),trigger:"change"}],checkPass:[{validator:async(u,i)=>i===""?Promise.reject(new Error("Please input the password again")):i!==a.pass?Promise.reject(new Error("Two inputs don't match!")):Promise.resolve(),trigger:"change"}],age:[{validator:async(u,i)=>i?Number.isInteger(i)?i<18?Promise.reject(new Error("Age must be greater than 18")):Promise.resolve():Promise.reject(new Error("Please input digits")):Promise.reject(new Error("Please input the age")),trigger:"change"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}},handleFinishFailed:u=>{console.log(u)},handleFinish:u=>{console.log(u,a)},resetForm:()=>{e.value.resetFields()}}}});const Se=l("Submit"),we=l("Reset");function ke(e,a,h,m,_,y){const c=o("a-input"),r=o("a-form-item"),d=o("a-input-number"),f=o("a-button"),u=o("a-form");return b(),g(u,$({name:"custom-validation",ref:"formRef",model:e.formState,rules:e.rules},e.layout,{onFinish:e.handleFinish,onFinishFailed:e.handleFinishFailed}),{default:n(()=>[t(r,{required:"","has-feedback":"",label:"Password",name:"pass"},{default:n(()=>[t(c,{value:e.formState.pass,"onUpdate:value":a[1]||(a[1]=i=>e.formState.pass=i),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),t(r,{"has-feedback":"",label:"Confirm",name:"checkPass"},{default:n(()=>[t(c,{value:e.formState.checkPass,"onUpdate:value":a[2]||(a[2]=i=>e.formState.checkPass=i),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),t(r,{"has-feedback":"",label:"Age",name:"age"},{default:n(()=>[t(d,{value:e.formState.age,"onUpdate:value":a[3]||(a[3]=i=>e.formState.age=i)},null,8,["value"])]),_:1}),t(r,{"wrapper-col":{span:14,offset:4}},{default:n(()=>[t(f,{type:"primary","html-type":"submit"},{default:n(()=>[Se]),_:1}),t(f,{style:{"margin-left":"10px"},onClick:e.resetForm},{default:n(()=>[we]),_:1},8,["onClick"])]),_:1})]),_:1},16,["model","rules","onFinish","onFinishFailed"])}E.render=ke;var Ce=`<cn>
#### \u81EA\u5B9A\u4E49\u6821\u9A8C
\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u6765\u5B8C\u6210\u5BC6\u7801\u7684\u4E8C\u6B21\u9A8C\u8BC1\u3002\u672C\u4F8B\u8FD8\u4F7F\u7528 has-feedback \u5C5E\u6027\u4E3A\u8F93\u5165\u6846\u6DFB\u52A0\u4E86\u8868\u793A\u6821\u9A8C\u7ED3\u679C\u7684\u53CD\u9988\u56FE\u6807\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 [async-validator](https://github.com/yiminghe/async-validator)
</cn>

<us>
#### Customized Validation
TODO
</us>
`,Pe=`<template>
  <a-form
    name="custom-validation"
    ref="formRef"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item required has-feedback label="Password" name="pass">
      <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Confirm" name="checkPass">
      <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Age" name="age">
      <a-input-number v-model:value="formState.age" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import { RuleObject, ValidateErrorEntity } from '@fe6/water-pro';

interface FormState {
  pass: string;
  checkPass: string;
  age: number | undefined;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      pass: '',
      checkPass: '',
      age: undefined,
    });
    let checkAge = async (rule: RuleObject, value: number) => {
      if (!value) {
        return Promise.reject(new Error('Please input the age'));
      }
      if (!Number.isInteger(value)) {
        return Promise.reject(new Error('Please input digits'));
      } else {
        if (value < 18) {
          return Promise.reject(new Error('Age must be greater than 18'));
        } else {
          return Promise.resolve();
        }
      }
    };
    let validatePass = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject(new Error('Please input the password'));
      } else {
        if (formState.checkPass !== '') {
          formRef.value.validateField('checkPass');
        }
        return Promise.resolve();
      }
    };
    let validatePass2 = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject(new Error('Please input the password again'));
      } else if (value !== formState.pass) {
        return Promise.reject(new Error('Two inputs don\\'t match!'));
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      pass: [{ validator: validatePass, trigger: 'change' }],
      checkPass: [{ validator: validatePass2, trigger: 'change' }],
      age: [{ validator: checkAge, trigger: 'change' }],
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
    };
  },
});
<\/script>
`,j=w({setup(){const e=L(),a=k({name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""});return{formRef:e,labelCol:{span:4},wrapperCol:{span:14},other:"",formState:a,rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{required:!0,message:"Please pick a date",trigger:"change",type:"object"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]},onSubmit:()=>{e.value.validate().then(()=>{console.log("values",a,R(a))}).catch(y=>{console.log("error",y)})},resetForm:()=>{e.value.resetFields()}}}});const $e=l("Zone one"),Oe=l("Zone two"),Le=l("Online"),Re=l("Promotion"),Ie=l("Offline"),Ae=l("Sponsor"),Ve=l("Venue"),Ue=l("Create"),qe=l("Reset");function Ee(e,a,h,m,_,y){const c=o("a-input"),r=o("a-form-item"),d=o("a-select-option"),f=o("a-select"),u=o("a-date-picker"),i=o("a-switch"),s=o("a-checkbox"),S=o("a-checkbox-group"),F=o("a-radio"),O=o("a-radio-group"),C=o("a-textarea"),P=o("a-button"),p=o("a-form");return b(),g(p,{ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:n(()=>[t(r,{ref:"name",label:"Activity name",name:"name"},{default:n(()=>[t(c,{value:e.formState.name,"onUpdate:value":a[1]||(a[1]=v=>e.formState.name=v)},null,8,["value"])]),_:1},512),t(r,{label:"Activity zone",name:"region"},{default:n(()=>[t(f,{value:e.formState.region,"onUpdate:value":a[2]||(a[2]=v=>e.formState.region=v),placeholder:"please select your zone"},{default:n(()=>[t(d,{value:"shanghai"},{default:n(()=>[$e]),_:1}),t(d,{value:"beijing"},{default:n(()=>[Oe]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"Activity time",required:"",name:"date1"},{default:n(()=>[t(u,{value:e.formState.date1,"onUpdate:value":a[3]||(a[3]=v=>e.formState.date1=v),"show-time":"",type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["value"])]),_:1}),t(r,{label:"Instant delivery",name:"delivery"},{default:n(()=>[t(i,{checked:e.formState.delivery,"onUpdate:checked":a[4]||(a[4]=v=>e.formState.delivery=v)},null,8,["checked"])]),_:1}),t(r,{label:"Activity type",name:"type"},{default:n(()=>[t(S,{value:e.formState.type,"onUpdate:value":a[5]||(a[5]=v=>e.formState.type=v)},{default:n(()=>[t(s,{value:"1",name:"type"},{default:n(()=>[Le]),_:1}),t(s,{value:"2",name:"type"},{default:n(()=>[Re]),_:1}),t(s,{value:"3",name:"type"},{default:n(()=>[Ie]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"Resources",name:"resource"},{default:n(()=>[t(O,{value:e.formState.resource,"onUpdate:value":a[6]||(a[6]=v=>e.formState.resource=v)},{default:n(()=>[t(F,{value:"1"},{default:n(()=>[Ae]),_:1}),t(F,{value:"2"},{default:n(()=>[Ve]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"Activity form",name:"desc"},{default:n(()=>[t(C,{value:e.formState.desc,"onUpdate:value":a[7]||(a[7]=v=>e.formState.desc=v)},null,8,["value"])]),_:1}),t(r,{"wrapper-col":{span:14,offset:4}},{default:n(()=>[t(P,{type:"primary",onClick:e.onSubmit},{default:n(()=>[Ue]),_:1},8,["onClick"]),t(P,{style:{"margin-left":"10px"},onClick:e.resetForm},{default:n(()=>[qe]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules","label-col","wrapper-col"])}j.render=Ee;var je=`<cn>
#### \u8868\u5355\u9A8C\u8BC1
Form \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8868\u5355\u9A8C\u8BC1\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 rules \u5C5E\u6027\u4F20\u5165\u7EA6\u5B9A\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5E76\u5C06 FormItem \u7684 prop \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u9700\u6821\u9A8C\u7684\u5B57\u6BB5\u540D\u5373\u53EF\u3002\u6821\u9A8C\u89C4\u5219\u53C2\u89C1 [async-validator](https://github.com/yiminghe/async-validator)
</cn>

<us>
#### \u8868\u5355\u9A8C\u8BC1
TODO
</us>
`,ze=`<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="name" label="Activity name" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Activity zone" name="region">
      <a-select v-model:value="formState.region" placeholder="please select your zone">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Activity time" required name="date1">
      <a-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </a-form-item>
    <a-form-item label="Instant delivery" name="delivery">
      <a-switch v-model:checked="formState.delivery" />
    </a-form-item>
    <a-form-item label="Activity type" name="type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources" name="resource">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form" name="desc">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue';
import { ValidateErrorEntity } from '@fe6/water-pro';

interface FormState {
  name: string;
  region: string | undefined;
  date1: Moment | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const rules = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
      desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<FormState>) => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
<\/script>
`;const De={class:"markdown-body"},Be=Z(`<h2>API</h2><h3>Form</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>object</td><td></td><td></td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td>object</td><td>\u65E0</td><td></td></tr><tr><td>hideRequiredMark</td><td>\u9690\u85CF\u6240\u6709\u8868\u5355\u9879\u7684\u5FC5\u9009\u6807\u8BB0</td><td>Boolean</td><td>false</td><td></td></tr><tr><td>labelAlign</td><td>label \u6807\u7B7E\u7684\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</td><td>\u2018left\u2019 | \u2018right\u2019</td><td>\u2018right\u2019</td><td>1.5.0</td></tr><tr><td>layout</td><td>\u8868\u5355\u5E03\u5C40</td><td>\u2018horizontal\u2019|\u2018vertical\u2019|\u2018inline\u2019</td><td>\u2018horizontal\u2019</td><td></td></tr><tr><td>labelCol</td><td>label \u6807\u7B7E\u5E03\u5C40\uFF0C\u540C <code>&lt;Col&gt;</code> \u7EC4\u4EF6\uFF0C\u8BBE\u7F6E <code>span</code> <code>offset</code> \u503C\uFF0C\u5982 <code>{span: 3, offset: 12}</code> \u6216 <code>sm: {span: 3, offset: 12}</code></td><td><a href="/components/grid-cn/#Col">object</a></td><td></td><td></td></tr><tr><td>wrapperCol</td><td>\u9700\u8981\u4E3A\u8F93\u5165\u63A7\u4EF6\u8BBE\u7F6E\u5E03\u5C40\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528\u8BE5\u5C5E\u6027\uFF0C\u7528\u6CD5\u540C labelCol</td><td><a href="/components/grid-cn/#Col">object</a></td><td></td><td></td></tr><tr><td>colon</td><td>\u914D\u7F6E Form.Item \u7684 colon \u7684\u9ED8\u8BA4\u503C (\u53EA\u6709\u5728\u5C5E\u6027 layout \u4E3A horizontal \u65F6\u6709\u6548)</td><td>boolean</td><td>true</td><td></td></tr><tr><td>validateOnRuleChange</td><td>\u662F\u5426\u5728 rules \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td>boolean</td><td>true</td><td></td></tr><tr><td>scrollToFirstError</td><td>\u63D0\u4EA4\u5931\u8D25\u81EA\u52A8\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u5B57\u6BB5</td><td>boolean</td><td>boolean | <a href="https://github.com/stipsan/scroll-into-view-if-needed/#options">options</a></td><td></td></tr><tr><td>name</td><td>\u8868\u5355\u540D\u79F0\uFF0C\u4F1A\u4F5C\u4E3A\u8868\u5355\u5B57\u6BB5 <code>id</code> \u524D\u7F00\u4F7F\u7528</td><td>string</td><td></td><td></td></tr><tr><td>validateTrigger</td><td>\u7EDF\u4E00\u8BBE\u7F6E\u5B57\u6BB5\u6821\u9A8C\u89C4\u5219</td><td>string</td><td>string[]</td><td>change</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>submit</td><td>\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6</td><td>Function(e:Event)</td><td></td></tr><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1</td><td>\u88AB\u6821\u9A8C\u7684\u8868\u5355\u9879 name \u503C\uFF0C\u6821\u9A8C\u662F\u5426\u901A\u8FC7\uFF0C\u9519\u8BEF\u6D88\u606F\uFF08\u5982\u679C\u5B58\u5728\uFF09</td><td></td></tr><tr><td>finish</td><td>\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6</td><td>function(values)</td><td></td></tr><tr><td>finishFailed</td><td>\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u5931\u8D25\u540E\u56DE\u8C03\u4E8B\u4EF6</td><td>function({ values, errorFields, outOfDate })</td><td></td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>validate</td><td>\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1, \u540C validateFields</td><td>(nameList?: <a href="./components/form-cn#NamePath">NamePath</a>[]) =&gt; Promise</td><td></td></tr><tr><td>validateFields</td><td>\u89E6\u53D1\u8868\u5355\u9A8C\u8BC1</td><td>(nameList?: <a href="./components/form-cn#NamePath">NamePath</a>[]) =&gt; Promise</td><td></td></tr><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u5BF9\u5E94\u5B57\u6BB5\u4F4D\u7F6E</td><td>(name: <a href="./components/form-cn#NamePath">NamePath</a>, options: <a href="https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options">ScrollOptions</a>) =&gt; void</td><td></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td>-</td><td></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 name \u5C5E\u6027\u6216\u8005 name \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td>Function(name: array</td><td>string)</td></tr></tbody></table><h3>Form.Item</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>name</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td>string</td><td></td><td></td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td>object | array</td><td></td><td></td></tr><tr><td>autoLink</td><td>\u662F\u5426\u81EA\u52A8\u5173\u8054\u8868\u5355\u57DF\uFF0C\u5BF9\u4E8E\u5927\u90E8\u5206\u60C5\u51B5\u90FD\u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u5173\u8054\uFF0C\u5982\u679C\u4E0D\u6EE1\u8DB3\u81EA\u52A8\u5173\u8054\u7684\u6761\u4EF6\uFF0C\u53EF\u4EE5\u624B\u52A8\u5173\u8054\uFF0C\u53C2\u89C1\u4E0B\u65B9\u6CE8\u610F\u4E8B\u9879</td><td>boolean</td><td>true</td><td></td></tr><tr><td>colon</td><td>\u914D\u5408 label \u5C5E\u6027\u4F7F\u7528\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td>boolean</td><td>true</td><td></td></tr><tr><td>extra</td><td>\u989D\u5916\u7684\u63D0\u793A\u4FE1\u606F\uFF0C\u548C help \u7C7B\u4F3C\uFF0C\u5F53\u9700\u8981\u9519\u8BEF\u4FE1\u606F\u548C\u63D0\u793A\u6587\u6848\u540C\u65F6\u51FA\u73B0\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u3002</td><td>string|slot</td><td></td><td></td></tr><tr><td>hasFeedback</td><td>\u914D\u5408 validateStatus \u5C5E\u6027\u4F7F\u7528\uFF0C\u5C55\u793A\u6821\u9A8C\u72B6\u6001\u56FE\u6807\uFF0C\u5EFA\u8BAE\u53EA\u914D\u5408 Input \u7EC4\u4EF6\u4F7F\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>help</td><td>\u63D0\u793A\u4FE1\u606F\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td>string|slot</td><td></td><td></td></tr><tr><td>htmlFor</td><td>\u8BBE\u7F6E\u5B50\u5143\u7D20 label <code>htmlFor</code> \u5C5E\u6027</td><td>string</td><td></td><td>1.5.0</td></tr><tr><td>label</td><td>label \u6807\u7B7E\u7684\u6587\u672C</td><td>string|slot</td><td></td><td></td></tr><tr><td>labelCol</td><td>label \u6807\u7B7E\u5E03\u5C40\uFF0C\u540C <code>&lt;Col&gt;</code> \u7EC4\u4EF6\uFF0C\u8BBE\u7F6E <code>span</code> <code>offset</code> \u503C\uFF0C\u5982 <code>{span: 3, offset: 12}</code> \u6216 <code>sm: {span: 3, offset: 12}</code></td><td><a href="/components/grid-cn/#Col">object</a></td><td></td><td></td></tr><tr><td>labelAlign</td><td>\u6807\u7B7E\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</td><td>\u2018left\u2019 | \u2018right\u2019</td><td>\u2018right\u2019</td><td>1.5.0</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td>boolean</td><td>false</td><td></td></tr><tr><td>validateStatus</td><td>\u6821\u9A8C\u72B6\u6001\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u53EF\u9009\uFF1A\u2018success\u2019 \u2018warning\u2019 \u2018error\u2019 \u2018validating\u2019</td><td>string</td><td></td><td></td></tr><tr><td>wrapperCol</td><td>\u9700\u8981\u4E3A\u8F93\u5165\u63A7\u4EF6\u8BBE\u7F6E\u5E03\u5C40\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528\u8BE5\u5C5E\u6027\uFF0C\u7528\u6CD5\u540C labelCol</td><td><a href="/components/grid-cn/#Col">object</a></td><td></td><td></td></tr><tr><td>validateFirst</td><td>\u5F53\u67D0\u4E00\u89C4\u5219\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\uFF0C\u662F\u5426\u505C\u6B62\u5269\u4E0B\u7684\u89C4\u5219\u7684\u6821\u9A8C\u3002</td><td>boolean</td><td>false</td><td></td></tr><tr><td>validateTrigger</td><td>\u8BBE\u7F6E\u5B57\u6BB5\u6821\u9A8C\u7684\u65F6\u673A</td><td>string | string[]</td><td>change</td><td></td></tr></tbody></table><h3>\u6CE8\u610F\uFF1A</h3><p>Form.Item \u4F1A\u5BF9\u552F\u4E00\u5B50\u5143\u7D20\u8FDB\u884C\u52AB\u6301\uFF0C\u5E76\u76D1\u542C blur \u548C change \u4E8B\u4EF6\uFF0C\u6765\u8FBE\u5230\u81EA\u52A8\u6821\u9A8C\u7684\u76EE\u7684\uFF0C\u6240\u4EE5\u8BF7\u786E\u4FDD\u8868\u5355\u57DF\u6CA1\u6709\u5176\u5B83\u5143\u7D20\u5305\u88F9\u3002\u5982\u679C\u6709\u591A\u4E2A\u5B50\u5143\u7D20\uFF0C\u5C06\u53EA\u4F1A\u76D1\u542C\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u7684\u53D8\u5316\u3002 \u5982\u679C\u8981\u76D1\u542C\u7684\u8868\u5355\u57DF\u4E0D\u6EE1\u8DB3\u81EA\u52A8\u76D1\u542C\u7684\u6761\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u5173\u8054\u8868\u5355\u57DF\uFF1A</p><pre><code class="language-html">&lt;a-form-item name=&quot;form.name&quot; ref=&quot;name&quot; :autoLink=&quot;false&quot;&gt;
  &lt;a-input v-model:value=&quot;other&quot; /&gt;
  &lt;span&gt;hahha&lt;/span&gt;
  &lt;div&gt;
    &lt;a-input
      v-model:value=&quot;form.name&quot;
      @blur=&quot;() =&gt; {$refs.name.onFieldBlur()}&quot;
      @change=&quot;() =&gt; {$refs.name.onFieldChange()}&quot;
    /&gt;
  &lt;/div&gt;
&lt;/a-form-item&gt;
</code></pre><h3>\u6821\u9A8C\u89C4\u5219</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>trigger</td><td>\u679A\u4E3E\u7C7B\u578B</td><td>\u2018blur\u2019</td><td>\u2018change\u2019</td><td>[\u2018change\u2019, \u2018blur\u2019]</td></tr><tr><td>enum</td><td>\u679A\u4E3E\u7C7B\u578B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>len</td><td>\u5B57\u6BB5\u957F\u5EA6</td><td>number</td><td>-</td><td>-</td></tr><tr><td>max</td><td>\u6700\u5927\u957F\u5EA6</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>\u6821\u9A8C\u6587\u6848</td><td>string</td><td>-</td><td>-</td></tr><tr><td>min</td><td>\u6700\u5C0F\u957F\u5EA6</td><td>number</td><td>-</td><td>-</td></tr><tr><td>pattern</td><td>\u6B63\u5219\u8868\u8FBE\u5F0F\u6821\u9A8C</td><td>RegExp</td><td>-</td><td>-</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u9009</td><td>boolean</td><td><code>false</code></td><td>-</td></tr><tr><td>transform</td><td>\u6821\u9A8C\u524D\u8F6C\u6362\u5B57\u6BB5\u503C</td><td>function(value) =&gt; transformedValue:any</td><td>-</td><td>-</td></tr><tr><td>type</td><td>\u5185\u5EFA\u6821\u9A8C\u7C7B\u578B\uFF0C<a href="https://github.com/yiminghe/async-validator#type">\u53EF\u9009\u9879</a></td><td>string</td><td>\u2018string\u2019</td><td>-</td></tr><tr><td>validator</td><td>\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF08\u6CE8\u610F\uFF0C<a href="https://github.com/ant-design/ant-design/issues/5155">callback \u5FC5\u987B\u88AB\u8C03\u7528</a>\uFF09</td><td>function(rule, value, callback)</td><td>-</td><td>-</td></tr><tr><td>whitespace</td><td>\u5FC5\u9009\u65F6\uFF0C\u7A7A\u683C\u662F\u5426\u4F1A\u88AB\u89C6\u4E3A\u9519\u8BEF</td><td>boolean</td><td><code>false</code></td><td>-</td></tr></tbody></table><p>\u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u7814\u7A76 <a href="https://github.com/yiminghe/async-validator">async-validator</a>\u3002</p>`,15),Ne={expose:[],setup(e){return(a,h)=>(b(),g("div",De,[Be]))}};var Me=Ne;const z={cn:`# Form \u8868\u5355
           \u5177\u6709\u6570\u636E\u6536\u96C6\u3001\u6821\u9A8C\u548C\u63D0\u4EA4\u529F\u80FD\u7684\u8868\u5355\uFF0C\u5305\u542B\u590D\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u5143\u7D20\u3002
#### \u5982\u9700\u8981\u4F7F\u7528 \`v-model\` \u53CC\u5411\u7ED1\u5B9A\u5F0F\u7684\u6821\u9A8C\u529F\u80FD\u53EF\u4F7F\u7528\u65B0\u7684\u8868\u5355 [\`a-form-model\`](/components/form-model-cn/)\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F53\u6216\u6536\u96C6\u4FE1\u606F\u3002
- \u9700\u8981\u5BF9\u8F93\u5165\u7684\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u6821\u9A8C\u65F6\u3002

## \u8868\u5355

\u6211\u4EEC\u4E3A \`form\` \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u79CD\u6392\u5217\u65B9\u5F0F\uFF1A

- \u6C34\u5E73\u6392\u5217\uFF1A\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u6C34\u5E73\u6392\u5217\uFF1B\uFF08\u9ED8\u8BA4\uFF09
- \u5782\u76F4\u6392\u5217\uFF1A\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u4E0A\u4E0B\u5782\u76F4\u6392\u5217\uFF1B
- \u884C\u5185\u6392\u5217\uFF1A\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\u3002

## \u8868\u5355\u57DF

\u8868\u5355\u4E00\u5B9A\u4F1A\u5305\u542B\u8868\u5355\u57DF\uFF0C\u8868\u5355\u57DF\u53EF\u4EE5\u662F\u8F93\u5165\u63A7\u4EF6\uFF0C\u6807\u51C6\u8868\u5355\u57DF\uFF0C\u6807\u7B7E\uFF0C\u4E0B\u62C9\u83DC\u5355\uFF0C\u6587\u672C\u57DF\u7B49\u3002

\u8FD9\u91CC\u6211\u4EEC\u5C01\u88C5\u4E86\u8868\u5355\u57DF \`<Form.Item />\` \u3002


 ## \u6CE8\u610F\uFF1A
1\u3001\u5982\u679C\u4F7F\u7528 \`Form.create\` \u5904\u7406\u8868\u5355\u4F7F\u5176\u5177\u6709\u81EA\u52A8\u6536\u96C6\u6570\u636E\u5E76\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u5EFA\u8BAE\u4F7F\u7528\`jsx\`\u3002
2\u3001\u5982\u679C\u4E0D\u662F\u4F7F\u7528Vue.use(Form)\u5F62\u5F0F\u6CE8\u518C\u7684\`Form\`\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u81EA\u884C\u5C06\`$form\`\u6302\u8F7D\u5230Vue\u539F\u578B\u4E0A\u3002
\`Vue.prototype.$form = Form\`


## \u4EE3\u7801\u6F14\u793A
        `,us:"# Form\n           Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.\n\n#### If you need to use `v-model` verification, you can use new form [`a-form-model`](/components/form-model/)\u3002\n\n## When to use\n\n- When you need to create a instance or collect information.\n- When you need to validate fields in certain rules.\n\n## Form Component\n\nYou can align the controls of a `form` using the `layout` prop\uFF1A\n\n- `horizontal`\uFF1Ato horizontally align the `label`s and controls of the fields. (Default)\n- `vertical`\uFF1Ato vertically align the `label`s and controls of the fields.\n- `inline`\uFF1Ato render form fields in one line.\n\n## Form Item Component\n\nA form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more. A form field is defined using `<Form.Item />`.\n\n ## Note:\n1. If you use `Form.create` to process the form to have the ability to automatically collect data and verify it, it is recommended to use `jsx`.\n2. If you are not using the `Form` component registered in Vue.use(Form) form, you need to mount `$form` to the Vue prototype yourself.\n`Vue.prototype.$form = Form`\n\n## Examples\n        "};var We={category:"Components",subtitle:"\u8868\u5355",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",cols:1,title:"Form",render(){return t("div",null,[t(o("Md"),{cn:z.cn,us:z.us},null),t(o("demo-sort"),{cols:1},{default:()=>[t(o("demo-container"),{api:ae,code:oe},{default:()=>[t(A,null,null)]}),t(o("demo-container"),{api:se,code:me},{default:()=>[t(V,null,null)]}),t(o("demo-container"),{api:fe,code:pe},{default:()=>[t(U,null,null)]}),t(o("demo-container"),{api:_e,code:Fe},{default:()=>[t(q,null,null)]}),t(o("demo-container"),{api:Ce,code:Pe},{default:()=>[t(E,null,null)]}),t(o("demo-container"),{api:je,code:ze},{default:()=>[t(j,null,null)]})]}),t(o("api"),null,{default:()=>[t(Me,null,null)]})])}};export{We as default};

var en=Object.defineProperty,tn=Object.defineProperties;var on=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var an=Object.prototype.hasOwnProperty,ln=Object.prototype.propertyIsEnumerable;var E=(n,e,o)=>e in n?en(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,A=(n,e)=>{for(var o in e||(e={}))an.call(e,o)&&E(n,o,e[o]);if(_)for(var o of _(e))ln.call(e,o)&&E(n,o,e[o]);return n},T=(n,e)=>tn(n,on(e));import{d as c,Y as a,bw as d,bx as p,h as g,bY as k,cw as rn,by as m,b as t,D as h,a1 as sn,bz as x,q as un,L as S,bO as dn}from"./vendor.846be9ce.js";import{g as f,I as pn,h as cn,i as B,A as F}from"./main.f0d1f01d.js";const mn=[{field:"eafielda",component:"Input",label:"\u5B57\u6BB51"},{field:"eafieldb",component:"Switch",label:"\u5B57\u6BB52"},{field:"eafieldc",component:"RadioGroup",label:"\u5B57\u6BB53",componentProps:{type:"button",options:[{label:"a",value:1},{label:"b",value:2}]}}];var $=c({setup(){return{schemas:mn}},methods:{handleSubmit(n){const e=JSON.stringify(n);this.$message.info(e==="{}"?"\u64CD\u4F5C\u70B9\u6570\u636E\u5427":e),console.log("\u63D0\u4EA4\u7684\u6570\u636E:"+JSON.stringify(n))}}});function fn(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{schemas:n.schemas,onSubmit:n.handleSubmit},null,8,["schemas","onSubmit"])}$.render=fn;var hn=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u4F7F\u7528\u3002
</cn>

<us>
#### \u57FA\u672C\u4F7F\u7528
TODO
</us>
`,bn=`<template>
  <a-form-pro
    :schemas="schemas"
    @submit="handleSubmit"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'eafielda',
    component: 'Input',
    label: '\u5B57\u6BB51',
  },
  {
    field: 'eafieldb',
    component: 'Switch',
    label: '\u5B57\u6BB52',
  },
  {
    field: 'eafieldc',
    component: 'RadioGroup',
    label: '\u5B57\u6BB53',
    componentProps: {
      type: 'button',
      options: [
        {
          label: 'a',
          value: 1,
        },
        {
          label: 'b',
          value: 2,
        },
      ],
    }
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '\u64CD\u4F5C\u70B9\u6570\u636E\u5427' : myValues);
      console.log('\u63D0\u4EA4\u7684\u6570\u636E:' + JSON.stringify(values));
    },
  },
});
<\/script>
`;const gn=({success:n})=>{setTimeout(()=>{n([])},1e3)},vn=[{field:"phone",component:"Input",componentProps:n=>({placeholder:"\u624B\u673A\u53F7"}),componentSlots:{prefix:()=>g(k)},rules:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{validator:async(n,e)=>e&&!rn.test(e)?Promise.reject(new Error("\u8BF7\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7")):Promise.resolve(),trigger:"blur"}]},{field:"smscode",component:"InputSmsCode",componentProps:({formModel:n})=>{let e="",o="";return{api:gn,ajaxParams:()=>({phone:n.phone,ticket:e,randstr:o}),before(r){new window.TencentCaptcha("2086745153",u=>{u.ret===0&&(e=u.ticket,o=u.randstr,r())}).show()}}},componentSlots:{prefix:()=>g(k)}},{field:"useCookie",component:"Checkbox",renderComponentContent:()=>g("span","\u4E03\u5929\u5185\u767B\u5F55")}];var O=c({setup(){const[n]=f({schemas:vn,showResetButton:!1,labelCol:{span:24},wrapperCol:{span:24},actionColOptions:{span:24,push:0},layout:"vertical",submitButtonOptions:{block:!0}});return{loginFormPro:n}},methods:{handleSubmit(n){const e=JSON.stringify(n);this.$message.info(e==="{}"?"\u64CD\u4F5C\u70B9\u6570\u636E\u5427":e),console.log("\u63D0\u4EA4\u7684\u6570\u636E:"+JSON.stringify(n))}}});function Pn(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.loginFormPro,onSubmit:n.handleSubmit},null,8,["onRegister","onSubmit"])}O.render=Pn;var Sn=`<cn>
#### \u767B\u5F55
\u767B\u5F55\u3002\u6682\u65F6\u4E0D\u652F\u6301\u56DE\u8F66\u81EA\u52A8\u53D1\u9001\u3002\u81EA\u5E26\u56FE\u5F62\u9A8C\u8BC1\u7801\uFF0C\u6240\u4EE5\u4F7F\u7528\u7684\u65F6\u5019\u5728 [html](https://github.com/fe6/water-pro/blob/master/index.html#L11) \u6587\u4EF6\u4E2D\u5F15\u5165 [TCaptcha](https://ssl.captcha.qq.com/TCaptcha.js)\u3002
</cn>

<us>
#### \u767B\u5F55
TODO
</us>
`,Fn=`<template>
  <a-form-pro
    @register="loginFormPro"
    @submit="handleSubmit"
  />
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';
import { rePhone } from '@fe6/shared';

import { LogoutOutlined } from '@ant-design/icons-vue';
import { FormSchema, useForm } from '@fe6/water-pro';

const getSmsCodeApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
}

const schemas: FormSchema[] = [
  {
    field: 'phone',
    component: 'Input',
    componentProps: (a) => {
      return {
        placeholder: '\u624B\u673A\u53F7',
      };
    },
    componentSlots: {
      prefix: () => h(LogoutOutlined),
    },
    rules: [
      {
        required: true,
        trigger: 'blur',
        message: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7',
      },
      {
        validator: async (rule, value) => {
          if (value && !rePhone.test(value)) {
            return Promise.reject(new Error('\u8BF7\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7'));
          }
          return Promise.resolve();
        },
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'smscode',
    component: 'InputSmsCode',
    componentProps: ({ formModel }) => {
      let ticket = '';
      let randstr = '';
      return {
        api: getSmsCodeApi,
        ajaxParams: () => {
          return {
            phone: formModel.phone,
            ticket,
            randstr,
          }
        },
        before(fn) {
          const captcha1 = new (window as any).TencentCaptcha('2086745153', (res) => {
            if (res.ret === 0) {
              ticket = res.ticket;
              randstr = res.randstr;
              fn();
            }
          });
          captcha1.show(); // \u663E\u793A\u9A8C\u8BC1\u7801
        },
      }
    },
    componentSlots: {
      prefix: () => h(LogoutOutlined),
    },
  },
  {
    field: 'useCookie',
    component: 'Checkbox',
    renderComponentContent: () => h('span', '\u4E03\u5929\u5185\u767B\u5F55'),
  },
];

export default defineComponent({
  setup() {
    const [
      loginFormPro,
    ] = useForm({
      schemas,
      showResetButton: false,
      labelCol: {
        span: 24
      },
      wrapperCol: {
        span:24
      },
      actionColOptions: {
        span: 24,
        push: 0
      },
      layout: 'vertical',
      submitButtonOptions: {
        block: true
      }
    });
    return {
      loginFormPro,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '\u64CD\u4F5C\u70B9\u6570\u636E\u5427' : myValues);
      console.log('\u63D0\u4EA4\u7684\u6570\u636E:' + JSON.stringify(values));
    },
  },
});
<\/script>
`;const yn=[{field:"usefield1",component:"Input",label:"\u5B57\u6BB51"},{field:"usefield2",component:"Switch",label:"\u5B57\u6BB52"}];var D=c({setup(){const[n]=f({labelWidth:120,schemas:yn,actionColOptions:{span:24}});return{injectFormPro:n}}});function Cn(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.injectFormPro},null,8,["onRegister"])}D.render=Cn;var Bn=`<cn>
#### use hook
\u5F3A\u70C8\u63A8\u8350\u4F7F\u7528\u7684\u6700\u4F73\u5B9E\u8DF5\u3002
</cn>

<us>
#### use hook
TODO
</us>
`,wn=`<template>
  <a-form-pro @register="injectFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'usefield1',
    component: 'Input',
    label: '\u5B57\u6BB51',
  },
  {
    field: 'usefield2',
    component: 'Switch',
    label: '\u5B57\u6BB52',
  },
];

export default defineComponent({
  setup() {
    const [
      injectFormPro,
    ] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
      },
    });
    return {
      injectFormPro,
    };
  },
});
<\/script>
`;const _n=[{field:"infield1",component:"Input",componentProps:{placeholder:"\u5B57\u6BB51"}},{field:"infield2",component:"Select",componentProps:{options:[{label:"water",value:12},{label:"antd",value:23}],placeholder:"\u5B57\u6BB52"}}];var I=c({setup(){const[n]=f({schemas:_n});return{injectFormPro:n}}});function En(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.injectFormPro},null,8,["onRegister"])}I.render=En;var An=`<cn>
#### \u5185\u8054\u5B57\u6BB5
\u5185\u8054\u5B57\u6BB5\u3002
</cn>

<us>
#### use hook
TODO
</us>
`,Tn=`<template>
  <a-form-pro @register="injectFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'infield1',
    component: 'Input',
    componentProps: {
      placeholder: '\u5B57\u6BB51',
    }
  },
  {
    field: 'infield2',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'water',
          value: 12,
        },
        {
          label: 'antd',
          value: 23,
        },
      ],
      placeholder: '\u5B57\u6BB52',
    }
  },
];

export default defineComponent({
  setup() {
    const [
      injectFormPro,
    ] = useForm({
      schemas,
    });
    return {
      injectFormPro,
    };
  },
});
<\/script>
`;const kn=[{field:"hfield1",component:"Input",label:"\u5B57\u6BB51"},{field:"hfield2",component:"Switch",label:"\u5B57\u6BB52"}];var M=c({setup(){return{schemas:kn,handleSubmit:n=>{console.log("\u63D0\u4EA4\u7684\u6570\u636E:"+JSON.stringify(n))}}}});function xn(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{labelWidth:100,schemas:n.schemas,onSubmit:n.handleSubmit},null,8,["schemas","onSubmit"])}M.render=xn;var $n=`<cn>
#### \u6C34\u5E73\u65B9\u5411
\u6C34\u5E73\u65B9\u5411
</cn>

<us>
#### \u6C34\u5E73\u65B9\u5411
TODO
</us>
`,On=`<template>
  <a-form-pro
    :labelWidth="100"
    :schemas="schemas"
    @submit="handleSubmit"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'hfield1',
    component: 'Input',
    label: '\u5B57\u6BB51',
  },
  {
    field: 'hfield2',
    component: 'Switch',
    label: '\u5B57\u6BB52',
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
      handleSubmit: (values: any) => {
        console.log('\u63D0\u4EA4\u7684\u6570\u636E:' + JSON.stringify(values));
      },
    };
  },
});
<\/script>
`;const Dn=[{field:"hifield1",component:"Input",componentProps:{placeholder:"\u5B57\u6BB51"},colProps:{span:8}},{field:"hifield2",component:"Select",componentProps:{options:[{label:"water",value:12},{label:"antd",value:23}],placeholder:"\u5B57\u6BB52"},colProps:{span:8}}];var R=c({setup(){const[n]=f({schemas:Dn,actionColOptions:{span:8},baseGutter:16});return{injectFormPro:n}}});function In(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.injectFormPro},null,8,["onRegister"])}R.render=In;var Mn=`<cn>
#### \u6C34\u5E73\u5185\u8054
\u6C34\u5E73\u5185\u8054
</cn>

<us>
#### \u6C34\u5E73\u5185\u8054
TODO
</us>
`,Rn=`<template>
  <a-form-pro @register="injectFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'hifield1',
    component: 'Input',
    componentProps: {
      placeholder: '\u5B57\u6BB51',
    },
    colProps: {
      span: 8,
    },
  },
  {
    field: 'hifield2',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'water',
          value: 12,
        },
        {
          label: 'antd',
          value: 23,
        },
      ],
      placeholder: '\u5B57\u6BB52',
    },
    colProps: {
      span: 8,
    },
  },
];

export default defineComponent({
  setup() {
    const [
      injectFormPro,
    ] = useForm({
      schemas,
      actionColOptions: {
        span: 8,
      },
      baseGutter: 16,
    });
    return {
      injectFormPro,
    };
  },
});
<\/script>
`,N=c({setup(){const[n]=f({labelCol:{span:4,md:{span:6}},wrapperCol:{span:20,md:{span:18},style:"padding-right: 16px"},actionColOptions:{span:4,md:{span:8}},schemas:[{field:"couponName",label:"\u4F18\u60E0\u5238\u540D\u79F0",component:"Input",colProps:{xl:12,xxl:8}},{field:"status",component:"Select",label:"\u4F18\u60E0\u5238\u72B6\u6001",componentProps:{options:[{label:"\u4F7F\u7528\u4E2D",value:1},{label:"\u5DF2\u8FC7\u671F",value:2},{label:"\u5DF2\u5931\u6548",value:3}],placeholder:"\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001"},colProps:{xl:12,xxl:8}}]});return{filterFormPro:n}},methods:{handleSubmit(n){const e=JSON.stringify(n);this.$message.info(e==="{}"?"\u64CD\u4F5C\u70B9\u6570\u636E\u5427":e),console.log("\u63D0\u4EA4\u7684\u6570\u636E:"+JSON.stringify(n))}}});function Nn(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.filterFormPro},null,8,["onRegister"])}N.render=Nn;var Gn=`<cn>
#### \u6A2A\u5411\u7B5B\u9009
\u6A2A\u5411\u7B5B\u9009
</cn>

<us>
#### filter
TODO
</us>
`,Un=`<template>
  <a-form-pro @register="filterFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const [
      filterFormPro,
    ] = useForm({
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
    });
    return {
      filterFormPro,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '\u64CD\u4F5C\u70B9\u6570\u636E\u5427' : myValues);
      console.log('\u63D0\u4EA4\u7684\u6570\u636E:' + JSON.stringify(values));
    },
  },
});
<\/script>
`;const jn=[{field:"lwfield1",component:"Switch",label:"\u70B9\u4E0B\u8BD5\u8BD5"},{field:"lwfield3",label:" ",component:"InputTextArea",labelWidth:200,ifShow:n=>{const{values:e}=n.value;return!!e.lwfield1}}];var G=c({setup(){const[n]=f({schemas:jn,labelWidth:200,colon:!1});return{ruleForm:n}}});function Ln(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.ruleForm},null,8,["onRegister"])}G.render=Ln;var Vn=`<cn>
#### \u5B57\u6BB5\u540D\u5B57\u7684\u5BBD\u5EA6
\u5168\u5C40\u5339\u914D\u3002\u6309\u94AE\u4F4D\u7F6E\u53EA\u4F1A\u8DDF\u968F\u5168\u5C40\u914D\u7F6E
</cn>

<us>
#### \u5B57\u6BB5\u540D\u5B57\u7684\u5BBD\u5EA6
TODO
</us>
`,Jn=`<template>
  <a-form-pro
    @register="ruleForm"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'lwfield1',
    component: 'Switch',
    label: '\u70B9\u4E0B\u8BD5\u8BD5',
  },
  {
    field: 'lwfield3',
    label: ' ',
    component: 'InputTextArea',
    labelWidth: 200,
    ifShow: (ifShowParams) => {
      const { values } = ifShowParams.value;
      return !!values.lwfield1;
    },
  },
];

export default defineComponent({
  setup() {
    const [
      ruleForm,
    ] = useForm({
      schemas,
      labelWidth: 200,
      colon: false
    });
    return {
      ruleForm,
    };
  },
});
<\/script>
`;const qn=[{field:"eafieldbb",component:"Input",label:n=>{const{eafield2:e}=n.value.values;let o="\u5B57\u6BB5\u4E00";return e&&(e===1?o="New1":o="New2"),o}},{field:"eafield2",component:"Select",label:"\u5B57\u6BB52",componentProps:{options:[{label:"label1",value:1},{label:"label2",value:2}]}}];var U=c({setup(){return{schemas:qn}},methods:{handleSubmit(n){const e=JSON.stringify(n);this.$message.info(e==="{}"?"\u64CD\u4F5C\u70B9\u6570\u636E\u5427":e),console.log("\u63D0\u4EA4\u7684\u6570\u636E:"+JSON.stringify(n))}}});function zn(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{schemas:n.schemas,onSubmit:n.handleSubmit},null,8,["schemas","onSubmit"])}U.render=zn;var Wn=`<cn>
#### \u52A8\u6001 label
\u4F7F\u7528\u65B9\u6CD5
</cn>

<us>
#### label
TODO
</us>
`,Hn=`<template>
  <a-form-pro
    :schemas="schemas"
    @submit="handleSubmit"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'eafieldbb',
    component: 'Input',
    label: (params) => {
      const { eafield2 } = params.value.values;

      let fText = '\u5B57\u6BB5\u4E00';

      if (eafield2) {
        if (eafield2 === 1) {
          fText = 'New1';
        } else {
          fText = 'New2';
        }
      }
      return fText;
    },
  },
  {
    field: 'eafield2',
    component: 'Select',
    label: '\u5B57\u6BB52',
    componentProps: {
      options: [
        {
          label: 'label1',
          value: 1,
        },
        {
          label: 'label2',
          value: 2,
        },
      ],
    },
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '\u64CD\u4F5C\u70B9\u6570\u636E\u5427' : myValues);
      console.log('\u63D0\u4EA4\u7684\u6570\u636E:' + JSON.stringify(values));
    },
  },
});
<\/script>
`;const Yn=[{field:"inputGroup",component:"InputGroup",label:"\u8F93\u5165\u6846\u7EC4\u5408",slot:"inputGroup",helpMessage:"NOTE: \u5728 form-pro \u6A21\u677F\u4E2D\u5BF9\u5E94 inputGroup \u7684 slot",subLabel:"slot \u7684 select \u9700\u8981\u624B\u52A8\u76D1\u542C change \u8FDB\u884C\u9A8C\u8BC1",dynamicRules:n=>[{required:!0,validator:()=>{const{inputGroup:e,inputGroupSelect:o}=n.value.values;return o?e?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165 \u5361\u53F7")):Promise.reject(new Error("\u8BF7\u9009\u62E9 \u5361\u7C7B\u578B"))}}]},{field:"rfield1",component:"Input",label:"\u5B57\u6BB51",required:!0},{field:"rfield2",component:"Select",label:"\u5B57\u6BB54",componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A",type:"array"}]},{field:"rfield3",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",rules:[{required:!0,validator:async(n,e)=>e?e==="1"?Promise.reject(new Error("\u503C\u4E0D\u80FD\u4E3A1")):Promise.resolve():Promise.reject(new Error("\u503C\u4E0D\u80FD\u4E3A\u7A7A")),trigger:"change"}]}];var j=c({setup(){const[n,{validateFields:e}]=f({schemas:Yn,labelCol:{span:24},wrapperCol:{span:24},actionColOptions:{span:24,push:0}});return{ruleForm:n,changeSelect:o=>{e("inputGroup")}}}});const Zn=h(" \u652F\u4ED8\u5B9D "),Qn=h(" \u94F6\u8054 ");function Xn(n,e,o,r,s,u){const l=a("a-select-option"),i=a("a-select"),b=a("a-input"),v=a("a-input-group"),nn=a("a-form-pro");return d(),p(nn,{onRegister:n.ruleForm},{inputGroup:m(({model:P,field:w})=>[t(v,{compact:""},{default:m(()=>[t(i,{placeholder:"\u5361\u7C7B\u578B",value:P.inputGroupSelect,"onUpdate:value":C=>P.inputGroupSelect=C,style:{width:"20%"},onChange:n.changeSelect},{default:m(()=>[t(l,{value:"zfb"},{default:m(()=>[Zn]),_:1}),t(l,{value:"yl"},{default:m(()=>[Qn]),_:1})]),_:2},1032,["value","onUpdate:value","onChange"]),t(b,{style:{width:"80%"},placeholder:"\u5361\u53F7",value:P[w],"onUpdate:value":C=>P[w]=C},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister"])}j.render=Xn;var Kn=`<cn>
#### \u89C4\u5219\u9A8C\u8BC1
\u89C4\u5219\u9A8C\u8BC1\u3002\u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 [async-validator](https://github.com/yiminghe/async-validator)
</cn>

<us>
#### \u89C4\u5219\u9A8C\u8BC1
TODO
</us>
`,ne=`<template>
  <a-form-pro
    @register="ruleForm"
  >
    <template #inputGroup="{ model, field }">
      <a-input-group compact>
        <a-select
          placeholder="\u5361\u7C7B\u578B"
          v-model:value="model['inputGroupSelect']"
          style="width: 20%"
          @change="changeSelect"
        >
          <a-select-option value="zfb"> \u652F\u4ED8\u5B9D </a-select-option>
          <a-select-option value="yl"> \u94F6\u8054 </a-select-option>
        </a-select>
        <a-input style="width: 80%" placeholder="\u5361\u53F7" v-model:value="model[field]" />
      </a-input-group>
    </template>
  </a-form-pro>
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type { RenderCallbackParams } from '@fe6/water-pro';
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'inputGroup',
    component: 'InputGroup',
    label: '\u8F93\u5165\u6846\u7EC4\u5408',
    slot: 'inputGroup',
    helpMessage: 'NOTE: \u5728 form-pro \u6A21\u677F\u4E2D\u5BF9\u5E94 inputGroup \u7684 slot',
    subLabel: 'slot \u7684 select \u9700\u8981\u624B\u52A8\u76D1\u542C change \u8FDB\u884C\u9A8C\u8BC1',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [ 
        {
          required: true,
          validator: () => {
            const { inputGroup, inputGroupSelect } = ruleParams.value.values;
            if (!inputGroupSelect) {
              return Promise.reject(new Error('\u8BF7\u9009\u62E9 \u5361\u7C7B\u578B'));
            }
            if (!inputGroup) {
              return Promise.reject(new Error('\u8BF7\u8F93\u5165 \u5361\u53F7'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  {
    field: 'rfield1',
    component: 'Input',
    label: '\u5B57\u6BB51',
    required: true,
  },
  {
    field: 'rfield2',
    component: 'Select',
    label: '\u5B57\u6BB54',
    componentProps: {
      mode: 'multiple',
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
          key: '1',
        },
        {
          label: '\u9009\u98792',
          value: '2',
          key: '2',
        },
      ],
    },
    rules: [
      {
        required: true,
        message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A',
        type: 'array',
      },
    ],
  },
  {
    field: 'rfield3',
    component: 'Input',
    label: '\u81EA\u5B9A\u4E49\u6821\u9A8C',
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: async (rule, value) => {
          if (!value) {
            /* eslint-disable-next-line */
            return Promise.reject(new Error('\u503C\u4E0D\u80FD\u4E3A\u7A7A'));
          }
          if (value === '1') {
            /* eslint-disable-next-line */
            return Promise.reject(new Error('\u503C\u4E0D\u80FD\u4E3A1'));
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
];

export default defineComponent({
  setup() {
    const [
      ruleForm,
      { validateFields }
    ] = useForm({
      schemas,
      labelCol: {
        span: 24
      },
      wrapperCol: {
        span: 24
      },
      actionColOptions: {
        span: 24,
        push: 0
      },
    });
    return {
      ruleForm,
      changeSelect: (a) => {
        validateFields('inputGroup');
      }
    };
  },
});
<\/script>
`;const ee=[{field:"dffield1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:n=>{const{values:e}=n.value;return!!e.dffield4}},{field:"dffield2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:n=>{const{values:e}=n.value;return!!e.dffield3}},{field:"dffield3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicRules:n=>{const{values:e}=n.value;return e.dffield3?[{required:!0,type:"string",message:"\u5B57\u6BB53\u5FC5\u586B"}]:[]},componentProps:{valueFormat:"YYYY-MM-DD"}},{field:"dffield4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:n=>{const{values:e}=n.value;return e.dffield8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[]},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}}],te=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},componentProps:({formModel:n})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:e=>{n.f2=e.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},componentProps:({formActionType:n})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:async()=>{const{validate:e}=n,o=await e();console.log(o)}})}];var L=c({setup(){const[n,{setProps:e,appendSchemaByField:o,removeSchemaByFiled:r}]=f({labelWidth:200,schemas:ee}),[s]=f({labelWidth:200,actionAlgin:"center",schemas:te});function u(){o({field:"dffield10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"dffield3")}function l(){r("dffield4")}return{register:n,regist1:s,setProps:e,appendField:u,deleteField:l}}});const oe=h(" \u5F80 \u5B57\u6BB53 \u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),ae=h(" \u5220\u9664 \u5B57\u6BB54 "),le=t("h1",null,"\u52A8\u6001\u8868\u5355\u793A\u4F8B\uFF0C\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8",-1),re=t("h1",null,"componentProps \u52A8\u6001\u6539\u53D8",-1);function se(n,e,o,r,s,u){const l=a("a-button"),i=a("a-space"),b=a("a-divider"),v=a("a-form-pro");return d(),p("div",null,[t(i,null,{default:m(()=>[t(l,{onClick:n.appendField},{default:m(()=>[oe]),_:1},8,["onClick"]),t(l,{onClick:n.deleteField},{default:m(()=>[ae]),_:1},8,["onClick"])]),_:1}),t(b),le,t(b),t(v,{onRegister:n.register},null,8,["onRegister"]),t(b),re,t(b),t(v,{onRegister:n.regist1},null,8,["onRegister"])])}L.render=se;var ue=`<cn>
#### \u52A8\u6001
\u52A8\u6001\u5B9E\u8DF5
</cn>

<us>
#### \u52A8\u6001
TODO
</us>
`,ie=`<template>
  <div>
    <a-space>
      <a-button @click="appendField"> \u5F80 \u5B57\u6BB53 \u540E\u9762\u63D2\u5165\u5B57\u6BB510 </a-button>
      <a-button @click="deleteField"> \u5220\u9664 \u5B57\u6BB54 </a-button>
    </a-space>
    <a-divider />
    <h1>\u52A8\u6001\u8868\u5355\u793A\u4F8B\uFF0C\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8</h1>
    <a-divider />
    <a-form-pro @register="register" />
    <a-divider />
    <h1>componentProps \u52A8\u6001\u6539\u53D8</h1>
    <a-divider />
    <a-form-pro @register="regist1" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
import { useForm, FormSchema } from '@fe6/water-pro';

  const schemas: FormSchema[] = [
    {
      field: 'dffield1',
      component: 'Input',
      label: '\u5B57\u6BB51',
      colProps: {
        span: 8,
      },
      show: (showParams) => {
        const { values } = showParams.value;
        return !!values.dffield4;
      },
    },
    {
      field: 'dffield2',
      component: 'Input',
      label: '\u5B57\u6BB52',
      colProps: {
        span: 8,
      },
      ifShow: (ifShowParams) => {
        const { values } = ifShowParams.value;
        return !!values.dffield3;
      },
    },
    {
      field: 'dffield3',
      component: 'DatePicker',
      label: '\u5B57\u6BB53',
      colProps: {
        span: 8,
      },
      dynamicRules: (ruleParams) => {
        const { values } = ruleParams.value;
        return !!values.dffield3 ? [{ required: true, type: 'string', message: '\u5B57\u6BB53\u5FC5\u586B' }] : [];
      },
      componentProps: {
        valueFormat: 'YYYY-MM-DD'
      }
    },
    {
      field: 'dffield4',
      component: 'Select',
      label: '\u5B57\u6BB54',
      colProps: {
        span: 8,
      },
      dynamicRules: (ruleParams) => {
        const { values } = ruleParams.value
        return values.dffield8 ? [{ required: true, message: '\u5B57\u6BB54\u5FC5\u586B' }] : [];
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
            key: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
            key: '2',
          },
        ],
      },
    },
  ];

  const schemas1: FormSchema[] = [
    {
      field: 'f1',
      component: 'Input',
      label: 'F1',
      colProps: {
        span: 12,
      },
      componentProps: ({ formModel }) => {
        return {
          placeholder: '\u540C\u6B65f2\u7684\u503C\u4E3Af1',
          onChange: (e: ChangeEvent) => {
            formModel.f2 = e.target.value;
          },
        };
      },
    },
    {
      field: 'f2',
      component: 'Input',
      label: 'F2',
      colProps: {
        span: 12,
      },
      componentProps: { disabled: true },
    },
    {
      field: 'f3',
      component: 'Input',
      label: 'F3',
      colProps: {
        span: 12,
      },
      // @ts-ignore
      componentProps: ({ formActionType }) => {
        return {
          placeholder: '\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0',
          onChange: async () => {
            const { validate } = formActionType;
            // tableAction\u53EA\u9002\u7528\u4E8E\u5728\u8868\u683C\u5185\u5F00\u542F\u8868\u5355\u7684\u4F8B\u5B50
            // const { reload } = tableAction;
            const res = await validate();
            console.log(res);
          },
        };
      },
    },
  ];

  export default defineComponent({
    setup() {
      const [
        register,
        { setProps, appendSchemaByField, removeSchemaByFiled },
      ] = useForm({
        labelWidth: 200,
        schemas,
      });
      const [regist1] = useForm({
        labelWidth: 200,
        actionAlgin: 'center',
        schemas: schemas1,
      });

      function appendField() {
        appendSchemaByField(
          {
            field: 'dffield10',
            label: '\u5B57\u6BB510',
            component: 'Input',
            colProps: {
              span: 8,
            },
          },
          'dffield3'
        );
      }
      function deleteField() {
        removeSchemaByFiled('dffield4');
      }
      return {
        register,
        regist1,
        setProps,
        appendField,
        deleteField,
      };
    },
  });
<\/script>
`;const de=[{field:"isfield1",component:"RadioGroup",label:"\u5B57\u6BB52",defaultValue:"water",componentProps:{options:[{label:"\u5927\u5730",value:"water"},{label:"\u5929\u7A7A",value:"antd"}]}},{field:"isfield2",component:"Input",label:"\u5927\u5730",ifShow:n=>{const{values:e}=n.value;return e.isfield1==="water"}},{field:"isfield3",component:"Switch",label:"\u5929\u7A7A",ifShow:n=>{const{values:e}=n.value;return e.isfield1==="antd"}}];var V=c({setup(){return{schemas:de,handleSubmit:n=>{console.log("\u63D0\u4EA4\u7684\u6570\u636E:"+JSON.stringify(n))}}}});function pe(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{schemas:n.schemas,onSubmit:n.handleSubmit},null,8,["schemas","onSubmit"])}V.render=pe;var ce=`<cn>
#### \u663E\u793A\u9690\u85CF
\u6839\u636E\u5B57\u6BB5\u503C\u663E\u793A\u9690\u85CF\u3002
</cn>

<us>
#### \u663E\u793A\u9690\u85CF
TODO
</us>
`,me=`<template>
  <a-form-pro
    :schemas="schemas"
    @submit="handleSubmit"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'isfield1',
    component: 'RadioGroup',
    label: '\u5B57\u6BB52',
    defaultValue: 'water',
    componentProps: {
      options: [
        { label: '\u5927\u5730', value: 'water' },
        { label: '\u5929\u7A7A', value: 'antd' },
      ],
    },
  },
  {
    field: 'isfield2',
    component: 'Input',
    label: '\u5927\u5730',
    ifShow: (ifShowParams) => {
      const { values } = ifShowParams.value;
      return values.isfield1 === 'water';
    },
  },
  {
    field: 'isfield3',
    component: 'Switch',
    label: '\u5929\u7A7A',
    ifShow: (ifShowParams) => {
      const { values } = ifShowParams.value;
      return values.isfield1 === 'antd';
    },
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
      handleSubmit: (values: any) => {
        console.log('\u63D0\u4EA4\u7684\u6570\u636E:' + JSON.stringify(values));
      },
    };
  },
});
<\/script>
`;const fe=[{field:"usfield1",component:"DatePicker",label:"DatePicker"}];var J=c({setup(){const[n,e]=f({schemas:[],showActionButtonGroup:!1});return{updateSchemaFormPro:n,updateSchemaHandleSubmit:async()=>{try{const s=await e.validate();console.log(JSON.stringify(s),"updateParams")}catch(s){}},renderForm:async()=>{await e.updateSchema(fe,!0),e.setProps({showActionButtonGroup:!0})}}}});const he=h("\u751F\u6210\u8868\u5355");function be(n,e,o,r,s,u){const l=a("a-button"),i=a("a-divider"),b=a("a-form-pro");return d(),p("div",null,[t(l,{onClick:n.renderForm},{default:m(()=>[he]),_:1},8,["onClick"]),t(i),t(b,{onRegister:n.updateSchemaFormPro,onSubmit:n.updateSchemaHandleSubmit},null,8,["onRegister","onSubmit"])])}J.render=be;var ge=`<cn>
#### \u7279\u6B8A\u7684\u4F7F\u7528
\u7279\u6B8A\u7684\u4F7F\u7528\u3002
</cn>

<us>
#### \u7279\u6B8A\u7684\u4F7F\u7528
TODO
</us>
`,ve=`<template>
  <div>
    <a-button @click="renderForm">\u751F\u6210\u8868\u5355</a-button>
    <a-divider />
    <a-form-pro @register="updateSchemaFormPro" @submit="updateSchemaHandleSubmit" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'usfield1',
    component: 'DatePicker',
    label: 'DatePicker',
  },
];

export default defineComponent({
  setup() {
    const [
      updateSchemaFormPro,
      updateSchemaFormActions
    ] = useForm({
      schemas: [],
      showActionButtonGroup: false,
    });

    const updateSchemaHandleSubmit = async () => {
      try {
        const updateParams = await updateSchemaFormActions.validate();
        console.log(JSON.stringify(updateParams), 'updateParams');
      } catch (err) {}
    };

    const renderForm = async () => {
      await updateSchemaFormActions.updateSchema(
        schemas,
        true,
      );
      updateSchemaFormActions.setProps({
        showActionButtonGroup: true,
      });
    }

    return {
      updateSchemaFormPro,
      updateSchemaHandleSubmit,
      renderForm,
    };
  },
});
<\/script>
`;const Pe=[{field:"mfield1",component:"Input",label:"\u5B57\u6BB51",helpMessage:"\u8FD9\u662F\u4E00\u4E2A\u5B57\u6BB5"}];var q=c({setup(){const[n]=f({schemas:Pe});return{msgFormPro:n}}});function Se(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.msgFormPro},null,8,["onRegister"])}q.render=Se;var Fe=`<cn>
#### \u5B57\u6BB5\u63D0\u793A
\u5B57\u6BB5\u63D0\u793A\u3002
</cn>

<us>
#### \u5B57\u6BB5\u63D0\u793A
TODO
</us>
`,ye=`<template>
  <a-form-pro @register="msgFormPro" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'mfield1',
    component: 'Input',
    label: '\u5B57\u6BB51',
    helpMessage: '\u8FD9\u662F\u4E00\u4E2A\u5B57\u6BB5',
  },
];

export default defineComponent({
  setup() {
    const [
      msgFormPro,
    ] = useForm({
      schemas,
    });
    return {
      msgFormPro,
    };
  },
});
<\/script>
`;const Ce=[{field:"sfield1",component:"Input",label:"\u9996\u5C3E\u81EA\u5B9A\u4E49",componentProps:({schema:n,formModel:e})=>({placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(n,e,o)}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"sfield2",component:"Checkbox",label:"\u9009\u9879\u81EA\u5B9A\u4E49",renderComponentContent:()=>g("span","Check")},{field:"sfield3",component:"Input",label:"render \u65B9\u5F0F",render:n=>{const{model:e,field:o}=n.value;return g(pn,{placeholder:"change \u65B9\u6CD5\u4FEE\u6539\u63D0\u4EA4\u6570\u636E",value:e[o],onChange:r=>{e[o]=r.target.value}})}},{field:"sfield4",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"sfield4"},{field:"sfield5",component:"Input",label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",defaultValue:"water pro",componentProps:({schema:n,formModel:e})=>({placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(o)}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"sfield6",component:"Input",label:"\u5E26\u540E\u7F00",defaultValue:"water",wrapperWidth:"70%",componentProps:{onChange:n=>{console.log(n)}},suffix:()=>g(cn,{title:"water is best!"},()=>g(sn))},{field:"posters",component:"UploadCard",label:"\u623F\u578B\u56FE\u7247",dynamicRules:n=>{const{values:e}=n.value;return[{required:!0,validator:()=>{const{posters:o}=e;return!o||!o.length?Promise.reject(new Error("\u8BF7\u4E0A\u4F20\u623F\u578B\u56FE\u7247")):Promise.resolve()}}]},componentProps:{action:"https://api.dev.mosh.cn/public/upload/image/binary"},end:()=>g("div",[g(B.Text,{type:"secondary",style:{display:"block",lineHeight:"22px",fontSize:"12px",paddingTop:"8px"}},()=>"1.\u6700\u591A\u53EF\u6DFB\u52A06\u5F20"),g(B.Text,{type:"secondary",style:{display:"block",lineHeight:"22px",fontSize:"12px"}},()=>"2.\u56FE\u7247\u5EFA\u8BAE\u5C3A\u5BF8\u4E3A800*800px\u4EE5\u4E0A"),g(B.Text,{type:"secondary",style:{display:"block",lineHeight:"22px",fontSize:"12px"}},()=>"3.\u652F\u6301PNG\u3001JPG\u548CJPEG\u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC75MB")])}];var z=c({setup(){return{schemas:Ce}}});function Be(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{schemas:n.schemas,labelWidth:200},{sfield4:m(({model:i,field:b})=>[t("span",null,"\u8FD9\u662F sfield4 \u7684 slot \u3002 "+x(i)+"-"+x(b)+" \u662F\u6570\u636E",1)]),_:1},8,["schemas"])}z.render=Be;var we=`<cn>
#### slot
\u81EA\u5B9A\u4E49\u5185\u5BB9\u7684\u5B9E\u8DF5\u3002
</cn>

<us>
#### slot
TODO
</us>
`,_e=`<template>
  <a-form-pro
    :schemas="schemas"
    :labelWidth="200"
  >
  <template #sfield4="{ model, field }">
    <span>\u8FD9\u662F sfield4 \u7684 slot \u3002 {{model}}-{{field}} \u662F\u6570\u636E</span>
  </template>
  </a-form-pro>
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type { RenderCallbackParams } from '@fe6/water-pro';

import { defineComponent, h } from 'vue';
import { FormSchema, Input, Tooltip, Typography} from '@fe6/water-pro';

import { InfoCircleOutlined } from '@ant-design/icons-vue';

const schemas: FormSchema[] = [
  {
    field: 'sfield1',
    component: 'Input',
    label: '\u9996\u5C3E\u81EA\u5B9A\u4E49',
    componentProps: ({ schema, formModel }) => {
      return {
        placeholder: '\u81EA\u5B9A\u4E49placeholder',
        onChange: (e: any) => {
          console.log(schema, formModel, e);
        },
      };
    },
    renderComponentContent: () => {
      return {
        prefix: () => 'pSlot',
        suffix: () => 'sSlot',
      };
    },
  },
  {
    field: 'sfield2',
    component: 'Checkbox',
    label: '\u9009\u9879\u81EA\u5B9A\u4E49',
    renderComponentContent: () => h('span', 'Check'),
  },
  {
    field: 'sfield3',
    component: 'Input',
    label: 'render \u65B9\u5F0F',
    render: (rParams: ComputedRef<RenderCallbackParams>) => {
      const { model, field } = rParams.value;
      return h(Input, {
        placeholder: 'change \u65B9\u6CD5\u4FEE\u6539\u63D0\u4EA4\u6570\u636E',
        value: model[field],
        onChange: (e: ChangeEvent) => {
          model[field] = e.target.value;
        },
      });
    },
  },
  {
    field: 'sfield4',
    component: 'Input',
    label: '\u81EA\u5B9A\u4E49Slot',
    slot: 'sfield4',
  },
  {
    field: 'sfield5',
    component: 'Input',
    label: '\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
    defaultValue: 'water pro',
    componentProps: ({ schema, formModel }) => {
      return {
        placeholder: '\u81EA\u5B9A\u4E49placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      };
    },
    renderComponentContent: () => {
      return {
        prefix: () => 'pSlot',
        suffix: () => 'sSlot',
      };
    },
  },
  {
    field: 'sfield6',
    component: 'Input',
    label: '\u5E26\u540E\u7F00',
    defaultValue: 'water',
    wrapperWidth: '70%',
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
    suffix: () => h(Tooltip, {
      title: 'water is best!'
    }, () => h(InfoCircleOutlined)),
  },
  {
    field: 'posters',
    component: 'UploadCard',
    label: '\u623F\u578B\u56FE\u7247',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          validator: () => {
            const { posters } = values;
            if (!posters || !posters.length) {
              return Promise.reject(new Error('\u8BF7\u4E0A\u4F20\u623F\u578B\u56FE\u7247'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: {
      action: 'https://api.dev.mosh.cn/public/upload/image/binary',
    },
    end: (): any => h('div', [
      h(Typography.Text, {
        type: 'secondary',
        style: {
          display: 'block',
          lineHeight: '22px',
          fontSize: '12px',
          paddingTop: '8px',
        },
      }, () => '1.\u6700\u591A\u53EF\u6DFB\u52A06\u5F20'),
      h(Typography.Text, {
        type: 'secondary',
        style: {
          display: 'block',
          lineHeight: '22px',
          fontSize: '12px',
        },
      }, () => '2.\u56FE\u7247\u5EFA\u8BAE\u5C3A\u5BF8\u4E3A800*800px\u4EE5\u4E0A'),
      h(Typography.Text, {
        type: 'secondary',
        style: {
          display: 'block',
          lineHeight: '22px',
          fontSize: '12px',
        },
      }, () => '3.\u652F\u6301PNG\u3001JPG\u548CJPEG\u683C\u5F0F\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC75MB'),
    ]),
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
});
<\/script>
`;const Ee=({params:n,success:e})=>{setTimeout(()=>{e([{label:"water",value:90},{label:"antd",value:80}])},1e3)},Ae=[{id:22,name:"\u672C\u5730\u73AF\u5883-\u6BB5",users:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",position:"\u5343\u79A7\u90E8\u95E8",departmentId:[22],avatar:"https://ecdn.evente.cn/assets/image/b-favicon-1.ico",roleName:"\u7BA1\u7406\u5458"},{id:51,userId:"TongXinCui",name:"\u540C\u5FC3\u8106",departmentId:[22],position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://ecdn.evente.cn/assets/image/b-favicon-1.ico",roleName:"\u7BA1\u7406\u5458"},{id:51,userId:"AoLiAo",departmentId:[22],name:"\u5965\u5229\u5965",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://ecdn.evente.cn/assets/image/b-favicon-1.ico",roleName:"\u7BA1\u7406\u5458"}],children:[{id:90,name:"\u4E9A\u592A\u5730\u533A",users:[{id:51,departmentId:[22,90],userId:"Meina",name:"\u7F8E\u5A1C",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://ecdn.evente.cn/assets/image/b-favicon-1.ico",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458"}],children:[]}]}],Te=({success:n})=>{setTimeout(()=>{n([{name:"\u7EC4\u4EF6\u5E93",children:[{name:"water",id:80},{name:"antd",id:180}]},{name:"\u5B98\u7F51",children:[{name:"\u91D1\u8302",id:380},{name:"\u7968\u5927\u5927",id:480}]}])},1e3)},ke=({params:n,success:e})=>{console.log("\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316"),setTimeout(()=>{e(Ae)},100)},xe=[{field:"modalUser",component:"ModalUser",label:"ModalUser",componentProps:{api:ke,placeholder:"\u8BF7\u8F93\u5165"}},{field:"spfield1",component:"SelectApi",label:"SelectApi",componentProps:{api:Ee,placeholder:"\u8BF7\u8F93\u5165"}},{field:"spfield2",component:"UploadImage",label:"UploadImage",changeEvent:"changeUpload",dynamicRules:n=>{const{values:e}=n.value;return[{required:!0,validator:()=>{const{spfield2:o}=e;return o?Promise.resolve():Promise.reject(new Error("\u8BF7\u4E0A\u4F20 UploadImage"))}}]},componentProps:n=>{const{formActionType:e}=n;return{placeholder:"UploadImage \u81EA\u52A8\u4E0A\u4F20",action:"https://api.dev.mosh.cn/public/upload/image/binary",mergeMoreDataable:!0,mergeOriginDatas:o=>(e.setFieldsValue({type:2}),o.url)}}},{field:"tagModalListSelect",component:"TagModalList",label:"\u6807\u7B7E\u5F39\u6846 select \u6A21\u5F0F",componentProps:{createable:!0,showMoreButton:!0,countMaxLength:2,type:"select",api:Te,placeholder:"\u8BF7\u8F93\u5165"}},{field:"spfield3auto",component:"UploadName",changeEvent:"changeUpload",label:"UploadName",dynamicRules:n=>{const{values:e}=n.value;return[{required:!0,trigger:"blur",validator:()=>{const{spfield3:o}=e;return o?Promise.resolve():Promise.reject(new Error("\u4E0A\u4F20 UploadName"))}}]},componentProps:()=>({accept:"*",action:"https://qiwei-api.dev.mosh.cn/api/v1/upload/file/binary",headers:{Authorization:"Bearer XLP8KP3RhblzIiunsEMukNOznUYrEubCFUMJ8QqUsm1IxqrpitnV4LjseVtxMw/ai1Y/aEokl/Rd7FT/r9LzPQ=="},placeholder:"UploadName \u81EA\u52A8\u4E0A\u4F20"})},{field:"spfield3",component:"UploadName",changeEvent:"changeUpload",label:"UploadName",dynamicRules:n=>{const{values:e}=n.value;return[{required:!0,trigger:"blur",validator:()=>{const{spfield3:o}=e;return o?Promise.resolve():Promise.reject(new Error("\u4E0A\u4F20 UploadName"))}}]},componentProps:()=>({accept:"*",placeholder:"UploadName \u4E0D\u662F\u81EA\u52A8\u4E0A\u4F20",autoUpload:!1,onFormChange:n=>{console.log(n,"values")}})},{field:"spfield4",component:"UploadCard",label:"UploadCard",changeEvent:"changeUpload",dynamicRules:n=>{const{values:e}=n.value;return[{required:!0,validator:()=>{const{spfield4:o}=e;return!o||!o.length?Promise.reject(new Error("\u8BF7\u4E0A\u4F20 UploadCard")):Promise.resolve()}}]},componentProps:n=>({placeholder:"UploadCard",action:"https://api.dev.mosh.cn/public/upload/image/binary",onFormChange:()=>{n.formActionType.validate("spfield4")}})}];var W=c({setup(){const[n,e]=f({schemas:xe,labelWidth:200}),o=async()=>{try{const r=await e.validate();console.log(JSON.stringify(r),"updateParams")}catch(r){}};return un(()=>{setTimeout(()=>{e.setFieldsValue({modalUser:["ShangHaojia"]})},90)}),{specialFormPro:n,specialHandleSubmit:o}}});function $e(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.specialFormPro,onSubmit:n.specialHandleSubmit},null,8,["onRegister","onSubmit"])}W.render=$e;var Oe=`<cn>
#### \u72EC\u6709\u7684\u7EC4\u4EF6
\u72EC\u6709\u7684\u7EC4\u4EF6\u3002
</cn>

<us>
#### \u72EC\u6709\u7684\u7EC4\u4EF6
TODO
</us>
`,De=`<template>
  <a-form-pro @register="specialFormPro" @submit="specialHandleSubmit" />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

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

const genData: any[] =  [
    {
        "id": 22,
        "name": "\u672C\u5730\u73AF\u5883-\u6BB5",
        "users": [
            {
                "id": 53,
                "userId": "ShangHaojia",
                "name": "\u4E0A\u597D\u4F73",
                "position": "\u5343\u79A7\u90E8\u95E8",
                departmentId: [22],
                "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                "roleName": "\u7BA1\u7406\u5458",
            },
            {
                "id": 51,
                "userId": "TongXinCui",
                "name": "\u540C\u5FC3\u8106",
                departmentId: [22],
                "position": "\u5343\u79A7\u90E8\u95E8",
                "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                "roleName": "\u7BA1\u7406\u5458",
            },
            {
                "id": 51,
                "userId": "AoLiAo",
                departmentId: [22],
                "name": "\u5965\u5229\u5965",
                "position": "\u5343\u79A7\u90E8\u95E8",
                "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                "roleName": "\u7BA1\u7406\u5458",
            }
        ],
        "children": [
            {
                "id": 90,
                "name": "\u4E9A\u592A\u5730\u533A",
                "users": [
                    {
                        "id": 51,
                        departmentId: [22, 90],
                        "userId": "Meina",
                        "name": "\u7F8E\u5A1C",
                        "position": "\u9F13\u52B1\u90E8\u95E8",
                        "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                        "roleName": "\u8D85\u7EA7\u7BA1\u7406\u5458",
                    }
                ],
                "children": []
            }
        ]
    }
]


const tagModalListApi = ({success}) => {
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

const getModalUserForOptions = ({params, success}) => {
  console.log('\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316');
  
  setTimeout(() => {
    success(genData);
  }, 100);
};

const schemas: FormSchema[] = [
  {
    field: 'modalUser',
    component: 'ModalUser',
    label: 'ModalUser',
    componentProps: {
      api: getModalUserForOptions,
      placeholder: '\u8BF7\u8F93\u5165'
    },
  },
  {
    field: 'spfield1',
    component: 'SelectApi',
    label: 'SelectApi',
    componentProps: {
      api: getSelectForOptions,
      placeholder: '\u8BF7\u8F93\u5165'
    },
  },
  {
    field: 'spfield2',
    component: 'UploadImage',
    label: 'UploadImage',
    changeEvent: 'changeUpload',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          validator: () => {
            const { spfield2 } = values;
            if (!spfield2) {
              return Promise.reject(new Error('\u8BF7\u4E0A\u4F20 UploadImage'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: (params) => {
      const { formActionType } = params;
      return {
        placeholder: 'UploadImage \u81EA\u52A8\u4E0A\u4F20',
        action: 'https://api.dev.mosh.cn/public/upload/image/binary',
        mergeMoreDataable: true,
        mergeOriginDatas: (uploadParams: Recordable) => {
          // \u8BBE\u7F6E\u63D0\u4EA4\u6570\u636E
          formActionType.setFieldsValue({
            type: 2,
          });
          return uploadParams.url;
        },
      };
    },
  },
  {
    field: 'tagModalListSelect',
    component: 'TagModalList',
    label: '\u6807\u7B7E\u5F39\u6846 select \u6A21\u5F0F',
    componentProps: {
      createable: true,
      showMoreButton: true,
      countMaxLength: 2,
      type: 'select',
      api: tagModalListApi,
      placeholder: '\u8BF7\u8F93\u5165'
    },
  },
  {
    field: 'spfield3auto',
    component: 'UploadName',
    changeEvent: 'changeUpload',
    label: 'UploadName',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          trigger: 'blur',
          validator: () => {
            const { spfield3 } = values;
            if (!spfield3) {
              return Promise.reject(new Error('\u4E0A\u4F20 UploadName'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: () => {
      return {
        accept: '*',
        action: 'https://qiwei-api.dev.mosh.cn/api/v1/upload/file/binary',
        headers: {
          Authorization: 'Bearer XLP8KP3RhblzIiunsEMukNOznUYrEubCFUMJ8QqUsm1IxqrpitnV4LjseVtxMw/ai1Y/aEokl/Rd7FT/r9LzPQ==',
        },
        placeholder: 'UploadName \u81EA\u52A8\u4E0A\u4F20',
      };
    },
  },
  {
    field: 'spfield3',
    component: 'UploadName',
    changeEvent: 'changeUpload',
    label: 'UploadName',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          trigger: 'blur',
          validator: () => {
            const { spfield3 } = values;
            if (!spfield3) {
              return Promise.reject(new Error('\u4E0A\u4F20 UploadName'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: () => {
      return {
        accept: '*',
        placeholder: 'UploadName \u4E0D\u662F\u81EA\u52A8\u4E0A\u4F20',
        autoUpload: false,
        onFormChange: (values: any) => {
          console.log(values, 'values');
        },
      };
    },
  },
  {
    field: 'spfield4',
    component: 'UploadCard',
    label: 'UploadCard',
    changeEvent: 'changeUpload',
    dynamicRules: (ruleParams) => {
      const { values } = ruleParams.value;
      return [
        {
          required: true,
          validator: () => {
            const { spfield4 } = values;
            if (!spfield4 || !spfield4.length) {
              return Promise.reject(new Error('\u8BF7\u4E0A\u4F20 UploadCard'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: (params) => {
      return {
        placeholder: 'UploadCard',
        action: 'https://api.dev.mosh.cn/public/upload/image/binary',
        onFormChange: () => {
          // \u4E0A\u4F20\u4E4B\u540E\u9A8C\u8BC1\u4E00\u4E0B
          params.formActionType.validate('spfield4');
        },
      };
    },
  },
];

export default defineComponent({
  setup() {
    const [
      specialFormPro,
      specialFormActions
    ] = useForm({
      schemas,
      labelWidth: 200,
    });

    const specialHandleSubmit = async () => {
      try {
        const updateParams = await specialFormActions.validate();
        console.log(JSON.stringify(updateParams), 'updateParams');
      } catch (err) {}
    };

    onMounted(() => {
      setTimeout(() => {
        specialFormActions.setFieldsValue({
          modalUser: ['ShangHaojia'],
        })
      }, 90);
    });

    return {
      specialFormPro,
      specialHandleSubmit,
    };
  },
});
<\/script>
`;const Ie=()=>[{field:"wafield1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder"}},{field:"wafield2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"wafield3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"wafield4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"wafield5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"wafield7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function Me(){return[{field:"wafield10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"wafield11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"wafield12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"wafield13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}var H=c({setup(){const[n]=f({labelWidth:120,schemas:[...Ie(),...Me()],showAdvancedButton:!0});return{registerExpendActive:n}}});function Re(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.registerExpendActive},null,8,["onRegister"])}H.render=Re;var Ne=`<cn>
#### \u9ED8\u8BA4\u5C55\u5F00
\u591A\u4E86\u7684\u8868\u5355\u53EF\u4EE5\u6536\u8D77\u3002
</cn>

<us>
#### expend
TODO
</us>
`,Ge=`<template>
  <a-form-pro @register="registerExpendActive" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const getSchamas = (): FormSchema[] => {
  return [
    {
      field: 'wafield1',
      component: 'Input',
      label: '\u5B57\u6BB51',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '\u81EA\u5B9A\u4E49placeholder',
      },
    },
    {
      field: 'wafield2',
      component: 'Input',
      label: '\u5B57\u6BB52',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield3',
      component: 'DatePicker',
      label: '\u5B57\u6BB53',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield4',
      component: 'Select',
      label: '\u5B57\u6BB54',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
            key: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'wafield5',
      component: 'CheckboxGroup',
      label: '\u5B57\u6BB55',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'wafield7',
      component: 'RadioGroup',
      label: '\u5B57\u6BB57',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
          },
        ],
      },
    },
  ];
};

function getAppendSchemas(): FormSchema[] {
  return [
    {
      field: 'wafield10',
      component: 'Input',
      label: '\u5B57\u6BB510',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield11',
      component: 'Input',
      label: '\u5B57\u6BB511',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield12',
      component: 'Input',
      label: '\u5B57\u6BB512',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'wafield13',
      component: 'Input',
      label: '\u5B57\u6BB513',
      colProps: {
        span: 8,
      },
    },
  ];
}

export default defineComponent({
  setup() {
    const [registerExpendActive] = useForm({
      labelWidth: 120,
      schemas: [...getSchamas(), ...getAppendSchemas()],
      showAdvancedButton: true,
    });
    return {
      registerExpendActive,
    };
  },
});
<\/script>
`;const Ue=()=>[{field:"efield1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder"}},{field:"efield2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"efield3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"efield4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"efield5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"efield7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];var Y=c({setup(){const[n]=f({labelWidth:120,schemas:Ue(),compact:!0,showAdvancedButton:!0});return{registerExpend:n}}});function je(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.registerExpend},null,8,["onRegister"])}Y.render=je;var Le=`<cn>
#### \u53EF\u6536\u8D77
\u591A\u4E86\u7684\u8868\u5355\u53EF\u4EE5\u6536\u8D77\u3002
</cn>

<us>
#### expend
TODO
</us>
`,Ve=`<template>
  <a-form-pro @register="registerExpend" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const getSchamas = (): FormSchema[] => {
  return [
    {
      field: 'efield1',
      component: 'Input',
      label: '\u5B57\u6BB51',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '\u81EA\u5B9A\u4E49placeholder',
      },
    },
    {
      field: 'efield2',
      component: 'Input',
      label: '\u5B57\u6BB52',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'efield3',
      component: 'DatePicker',
      label: '\u5B57\u6BB53',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'efield4',
      component: 'Select',
      label: '\u5B57\u6BB54',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
            key: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'efield5',
      component: 'CheckboxGroup',
      label: '\u5B57\u6BB55',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'efield7',
      component: 'RadioGroup',
      label: '\u5B57\u6BB57',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '\u9009\u98791',
            value: '1',
          },
          {
            label: '\u9009\u98792',
            value: '2',
          },
        ],
      },
    },
  ];
};

export default defineComponent({
  setup() {
    const [registerExpend] = useForm({
      labelWidth: 120,
      schemas: getSchamas(),
      compact: true,
      showAdvancedButton: true,
    });
    return {
      registerExpend,
    };
  },
});
<\/script>
`;const Je=[{field:"date",component:"DatePicker",label:"\u65E5\u671F"},{field:"month",component:"MonthPicker",label:"\u6708\u4EFD"},{field:"year",component:"YearPicker",label:"\u5E74\u4EFD"},{field:"week",component:"WeekPicker",label:"\u5468"},{field:"time",component:"TimePicker",label:"\u65F6\u95F4"},{field:"rangeDate",component:"RangePicker",label:"\u65E5\u671F\u533A\u95F4"},{field:"rangeDateTime",component:"RangePicker",label:"\u65E5\u671F\u65F6\u95F4\u533A\u95F4",componentProps:{showTime:!0}},{field:"rangeGroupPicker",component:"RangeGroupPicker",label:"\u65E5\u671F\u533A\u95F4\u5FEB\u6377",componentProps:{showTime:!0,timeRounding:!0,showTodayButton:!0,showYesterdayButton:!0,showSevenDaysButton:!0,showThirtyDaysButton:!0}},{field:"rangeTime",component:"TimeRangePicker",label:"\u65F6\u95F4\u533A\u95F4"}];var Z=c({setup(){const[n]=f({schemas:Je,labelWidth:140,fieldMapToTime:[["rangeDate",["startDate","endDate"]],["rangeTime",["timeStartDate","timeEndDate"]]]});return{fieldMapToTimeForm:n,fieldMapToTimeSubmit:async o=>{console.log(o,"ctfieldMapToTimeParams")}}}});function qe(n,e,o,r,s,u){const l=a("a-form-pro");return d(),p(l,{onRegister:n.fieldMapToTimeForm,onSubmit:n.fieldMapToTimeSubmit},null,8,["onRegister","onSubmit"])}Z.render=qe;var ze=`<cn>
#### \u6539\u53D8\u65F6\u95F4
\u4E00\u4E2A\u65F6\u95F4\u6BB5\u7684\u5B57\u6BB5\uFF0C\u6539\u53D8\u6210\u4E24\u4E2A\u81EA\u5B9A\u4E49\u5B57\u6BB5\u7684\u5B9E\u8DF5\u3002
</cn>

<us>
#### \u6539\u53D8\u65F6\u95F4
TODO
</us>
`,We=`<template>
  <a-form-pro @register="fieldMapToTimeForm" @submit="fieldMapToTimeSubmit" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] =[
  {
    field: 'date',
    component: 'DatePicker',
    label: '\u65E5\u671F',
  },
  {
    field: 'month',
    component: 'MonthPicker',
    label: '\u6708\u4EFD',
  },
  {
    field: 'year',
    component: 'YearPicker',
    label: '\u5E74\u4EFD',
  },
  {
    field: 'week',
    component: 'WeekPicker',
    label: '\u5468',
  },
  {
    field: 'time',
    component: 'TimePicker',
    label: '\u65F6\u95F4',
  },
  {
    field: 'rangeDate',
    component: 'RangePicker',
    label: '\u65E5\u671F\u533A\u95F4',
  },
  {
    field: 'rangeDateTime',
    component: 'RangePicker',
    label: '\u65E5\u671F\u65F6\u95F4\u533A\u95F4',
    componentProps: {
      showTime: true,
    }
  },
  {
    field: 'rangeGroupPicker',
    component: 'RangeGroupPicker',
    label: '\u65E5\u671F\u533A\u95F4\u5FEB\u6377',
    componentProps: {
      showTime: true,
      timeRounding: true,
      showTodayButton: true,
      showYesterdayButton: true,
      showSevenDaysButton: true,
      showThirtyDaysButton: true,
    }
  },
  {
    field: 'rangeTime',
    component: 'TimeRangePicker',
    label: '\u65F6\u95F4\u533A\u95F4',
  },
];

export default defineComponent({
  setup() {
    const [fieldMapToTimeForm] = useForm({
      schemas,
      labelWidth: 140,
      fieldMapToTime: [
        [
          'rangeDate',
          ['startDate', 'endDate'],
        ],
        [
          'rangeTime',
          ['timeStartDate', 'timeEndDate'],
        ],
      ],
    });

    const fieldMapToTimeSubmit = async (ressss) => {
      console.log(ressss, 'ctfieldMapToTimeParams');
    };
    return {
      fieldMapToTimeForm,
      fieldMapToTimeSubmit,
    };
  },
});
<\/script>
`;const He=({success:n})=>{setTimeout(()=>{n([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}])},1e3)},y=({success:n})=>{setTimeout(()=>{n([{name:"\u7EC4\u4EF6\u5E93",children:[{name:"water",id:80},{name:"antd",id:180}]},{name:"\u5B98\u7F51",children:[{name:"\u91D1\u8302",id:380},{name:"\u7968\u5927\u5927",id:480}]}])},1e3)},Ye=[{field:"tagModalListSelect",component:"TagModalList",label:"\u6807\u7B7E\u5F39\u6846 select \u6A21\u5F0F",componentProps:{createable:!0,showMoreButton:!0,countMaxLength:2,type:"select",api:y}},{field:"tagModalListDefault",component:"TagModalList",label:"\u6807\u7B7E\u5F39\u6846 \u9ED8\u8BA4 \u6A21\u5F0F",componentProps:{createable:!0,api:y}},{field:"tagModalListSelect",component:"TagModalList",label:"\u5934\u90E8\u6269\u5C55 select \u6A21\u5F0F",componentProps:{createable:!0,showMoreButton:!0,countMaxLength:2,type:"select",api:y,titleRightRender:()=>{const n={type:"link",onClick:()=>open("http://water.chjgo.com/"),style:"margin-left: 16px"};return t("div",null,[t(F,n,{default:()=>[t(S,null,null),h("\u8BBE\u7F6E")]}),t(F,n,{default:()=>[t(S,null,null),h("\u8BBE\u7F6E")]})])}}},{field:"tagModalListDefault",component:"TagModalList",label:"\u5934\u90E8\u6269\u5C55 \u9ED8\u8BA4 \u6A21\u5F0F",componentProps:{createable:!0,api:y,titleRightRender:()=>{const n={type:"link",onClick:()=>open("http://water.chjgo.com/"),style:"margin-left: 16px"};return t("div",null,[t(F,n,{default:()=>[t(S,null,null),h("\u8BBE\u7F6E")]}),t(F,n,{default:()=>[t(S,null,null),h("\u8BBE\u7F6E")]})])}}}],Ze=()=>new Promise(n=>{setTimeout(()=>{n([{label:"water",value:90},{label:"antd",value:80}])},1e3)}),Qe={field:"selectApi",component:"SelectApi",label:"\u63A5\u53E3\u9009\u62E9\u5668",dynamicRules:n=>[{required:!0,validator:()=>{const{selectApi:e}=n.value.values;return e?Promise.resolve():Promise.reject(new Error("\u8BF7\u9009\u62E9 \u63A5\u53E3\u9009\u62E9\u5668"))}}],componentProps:{api:Ze}},Xe=()=>new Promise(n=>{setTimeout(()=>{n([])},1e3)}),Ke=[{field:"input",component:"Input",label:"\u8F93\u5165\u6846"},{field:"inputCount",component:"InputCount",label:"\u9650\u5236\u6570\u5B57\u7684\u8F93\u5165\u6846",componentProps:{maxLength:10}},{field:"inputPassword",component:"InputPassword",label:"\u5BC6\u7801"},{field:"inputSmsCode",component:"InputSmsCode",label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",componentProps:({formModel:n})=>({api:Xe,ajaxParams:()=>({phone:13810902078,number:n.inputCount})})},{field:"inputSearch",component:"InputSearch",label:"\u641C\u7D22\u6846"},{field:"inputTextArea",component:"InputTextArea",label:"\u6587\u672C\u57DF"},{field:"autoComplete",component:"AutoComplete",label:"\u81EA\u52A8\u5B8C\u6210",helpMessage:"TODO: [fix] onSearch \u7B49\u4E3A\u4EC0\u4E48\u5728 vite \u4E2D\u4F1A\u662F \u6570\u7EC4",componentProps:{onSearch:()=>{console.log(222,"222")}}},{field:"inputNumber",component:"InputNumber",label:"\u6570\u5B57\u8F93\u5165\u6846"},{field:"inputGroup",component:"InputGroup",label:"\u8F93\u5165\u6846\u7EC4\u5408",slot:"inputGroup",helpMessage:"NOTE: \u5728 form-pro \u6A21\u677F\u4E2D\u5BF9\u5E94 inputGroup \u7684 slot",dynamicRules:n=>[{required:!0,validator:()=>{const{inputGroup:e,inputGroupSelect:o}=n.value.values;return console.log(n.value.values.inputGroup,"ruleParams.value.values"),o?e?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165 \u5361\u53F7")):Promise.reject(new Error("\u8BF7\u9009\u62E9 \u5361\u7C7B\u578B"))}}]},{field:"select",component:"Select",label:"\u9009\u62E9\u5668",componentProps:{options:[{value:1,label:"lee"},{value:2,label:"water"}]}},Qe,{field:"treeSelect",component:"TreeSelect",label:"\u6811\u5F62\u9009\u62E9\u5668",helpMessage:"TODO: [feat] \u6682\u672A\u63D0\u4F9B api \u81EA\u52A8\u62C9\u53BB\u7EC4\u4EF6\uFF0C\u540E\u7EED\u6309\u9700\u6C42\u589E\u52A0",componentProps:{treeData:[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1"}]}]}},{field:"switch",component:"Switch",label:"\u5F00\u5173"},{field:"radioGroup",component:"RadioGroup",label:"\u5355\u9009\u7EC4\u5408",helpMessage:"TODO: [feat] \u6682\u672A\u63D0\u4F9B api \u81EA\u52A8\u62C9\u53BB\u7EC4\u4EF6\uFF0C\u540E\u7EED\u6309\u9700\u6C42\u589E\u52A0",componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"checkbox",component:"Checkbox",label:"\u591A\u9009",renderComponentContent:n=>g("span",`${n.value.model.checkbox?"\u5DF2":""}\u9605\u8BFB Water \u534F\u8BAE`)},{field:"checkboxGroup",component:"CheckboxGroup",label:"\u591A\u9009\u7EC4\u5408",helpMessage:"TODO: [feat] \u6682\u672A\u63D0\u4F9B api \u81EA\u52A8\u62C9\u53BB\u7EC4\u4EF6\uFF0C\u540E\u7EED\u6309\u9700\u6C42\u589E\u52A0",componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"cascader",component:"Cascader",label:"\u7EA7\u8054\u9009\u62E9",componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"cascaderApi",component:"CascaderApi",label:"API \u7EA7\u8054\u9009\u62E9",componentProps:{api:He}},{field:"datePicker",component:"DatePicker",label:"\u65E5\u671F"},{field:"monthPicker",component:"MonthPicker",label:"\u6708\u4EFD"},{field:"weekPicker",component:"WeekPicker",label:"\u5468\u9009\u62E9"},{field:"yearPicker",component:"YearPicker",label:"\u5E74\u4EFD"},{field:"timePicker",component:"TimePicker",label:"\u65F6\u95F4"},{field:"rangePicker",component:"RangePicker",label:"\u65E5\u671F\u533A\u95F4"},{field:"rangePickerGroup",component:"RangeGroupPicker",label:"\u65E5\u671F\u533A\u95F4\u5FEB\u6377",componentProps:{showTodayButton:!0,showYesterdayButton:!0,showSevenDaysButton:!0,showThirtyDaysButton:!0}},{field:"colorPicker",component:"ColorPicker",label:"\u989C\u8272",helpMessage:"TODO: [fix] \u5143\u7D20\u5728\u53EF\u89C6\u533A\u4E4B\u5916\u663E\u793A\u6846\u4F4D\u7F6E\u6709\u95EE\u9898"},{field:"rangePicker",component:"RangePicker",label:"\u65E5\u671F\u533A\u95F4"},{field:"tagGroup",component:"TagGroup",label:"\u6807\u7B7E\u7EC4\u5408",helpMessage:"TODO: [feat] componentProps \u4E3A\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u968F\u7740 model \u53D8\u5316\u800C\u6267\u884C\uFF0C\u73B0\u5728\u53EA\u6267\u884C\u4E00\u6B21",dynamicRules:()=>[{required:!0,type:"array",message:"\u8BF7\u6DFB\u52A0\u6807\u7B7E\u540D\u79F0"}],valueLayout:(n,e,o,r)=>{console.log(n,e,o,r,"name, field, props, status");const s=o.formModel[e];if(r==="remove"&&Array.isArray(s)){const l=s.find(i=>i.name===n);if(l)return l.id?s.map(i=>i.name===n&&i.id!==""?T(A({},i),{type:"delete"}):i).filter(i=>!!i):s.filter(i=>i.name!==n)}const u={name:n,id:n};return s&&s.length?[...s,u]:[u]},componentProps:{createable:!0,closable:!0}},...Ye,{field:"uploadImage",component:"UploadImage",label:"\u4E0A\u4F20\u56FE\u7247",changeEvent:"changeUpload",helpMessage:"TODO: [fix] \u4E0A\u4F20\u7684\u63A5\u53E3\u53EF\u80FD\u4E0D\u597D\u7528",componentProps:{placeholder:"UploadImage \u81EA\u52A8\u4E0A\u4F20",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}},{field:"uploadName",component:"UploadName",changeEvent:"changeUpload",label:"\u4E0A\u4F20\u663E\u793A\u540D\u5B57",helpMessage:"TODO: [test] \u4E0A\u4F20\u4E4B\u540E\u9700\u8981\u8C03\u7528\u4E0A\u4F20\u6587\u4EF6\u63A5\u53E3\u6D4B\u8BD5\u4E00\u4E0B",componentProps:()=>({accept:"*",placeholder:"UploadName \u4E0D\u662F\u81EA\u52A8\u4E0A\u4F20",autoUpload:!1})}];var Q=c({setup(){const[n]=f({schemas:Ke,labelWidth:260});return{fullForm:n,fullSubmit:e=>{console.log(JSON.stringify(e),"fullFieldParams")}}}});const nt=h(" \u652F\u4ED8\u5B9D "),et=h(" \u94F6\u8054 ");function tt(n,e){const o=a("a-select-option"),r=a("a-select"),s=a("a-input"),u=a("a-input-group"),l=a("a-form-pro");return d(),p(l,{onRegister:n.fullForm,onSubmit:n.fullSubmit},{inputGroup:m(({model:i,field:b})=>[t(u,{compact:""},{default:m(()=>[t(r,{placeholder:"\u5361\u7C7B\u578B",value:i.inputGroupSelect,"onUpdate:value":v=>i.inputGroupSelect=v,style:{width:"20%"}},{default:m(()=>[t(o,{value:"zfb"},{default:m(()=>[nt]),_:1}),t(o,{value:"yl"},{default:m(()=>[et]),_:1})]),_:2},1032,["value","onUpdate:value"]),t(s,{style:{width:"80%"},placeholder:"\u5361\u53F7",value:i[b],"onUpdate:value":v=>i[b]=v},null,8,["value","onUpdate:value"])]),_:2},1024)]),_:1},8,["onRegister","onSubmit"])}Q.render=tt;var ot=`<cn>
#### \u5168\u7EC4\u4EF6\u7684\u4F7F\u7528
form pro \u6240\u652F\u6301\u7EC4\u4EF6\u7684\u5168\u4F8B\u5B50\u3002
</cn>

<us>
#### \u5168\u7EC4\u4EF6\u7684\u4F7F\u7528
TODO
</us>
`,at=`<template>
  <a-form-pro @register="fullForm" @submit="fullSubmit">
    <template #inputGroup="{ model, field }">
      <a-input-group compact>
        <a-select placeholder="\u5361\u7C7B\u578B" v-model:value="model['inputGroupSelect']" style="width: 20%">
          <a-select-option value="zfb"> \u652F\u4ED8\u5B9D </a-select-option>
          <a-select-option value="yl"> \u94F6\u8054 </a-select-option>
        </a-select>
        <a-input style="width: 80%" placeholder="\u5361\u53F7" v-model:value="model[field]" />
      </a-input-group>
    </template>
  </a-form-pro>
</template>
<script lang="tsx">
import type { ComputedRef } from 'vue';
import type { RenderCallbackParams } from '@fe6/water-pro';

import { defineComponent, h } from 'vue';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';

import { FormSchema, useForm, Button } from '@fe6/water-pro';


const getCascaderApi = ({success}) => {
    setTimeout(() => {
      success([
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ]);
    }, 1000);
}

const tagModalListApi = ({success}) => {
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

const tagModalListConfig: FormSchema[] = [
  {
    field: 'tagModalListSelect',
    component: 'TagModalList',
    label: '\u6807\u7B7E\u5F39\u6846 select \u6A21\u5F0F',
    componentProps: {
      createable: true,
      showMoreButton: true,
      countMaxLength: 2,
      type: 'select',
      api: tagModalListApi,
    },
  },
  {
    field: 'tagModalListDefault',
    component: 'TagModalList',
    label: '\u6807\u7B7E\u5F39\u6846 \u9ED8\u8BA4 \u6A21\u5F0F',
    componentProps: {
      createable: true,
      api: tagModalListApi,
    },
  },
  {
    field: 'tagModalListSelect',
    component: 'TagModalList',
    label: '\u5934\u90E8\u6269\u5C55 select \u6A21\u5F0F',
    componentProps: {
      createable: true,
      showMoreButton: true,
      countMaxLength: 2,
      type: 'select',
      api: tagModalListApi,
      titleRightRender: () => {
        const btnProps: any = {
          type: 'link',
          onClick: () => open('http://water.chjgo.com/'),
          style: 'margin-left: 16px'
        }
        return (<div>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
        </div>)
      }
    },
  },
  {
    field: 'tagModalListDefault',
    component: 'TagModalList',
    label: '\u5934\u90E8\u6269\u5C55 \u9ED8\u8BA4 \u6A21\u5F0F',
    componentProps: {
      createable: true,
      api: tagModalListApi,
      titleRightRender: () => {
        const btnProps: any = {
          type: 'link',
          onClick: () => open('http://water.chjgo.com/'),
          style: 'margin-left: 16px'
        }
        return (<div>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
        </div>)
      }
    },
  },
];

const getSelectForOptions = () => {
  return new Promise((selove) => {
    setTimeout(() => {
      selove([
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
  })
};

const selectApiConf: FormSchema = {
  field: 'selectApi',
  component: 'SelectApi',
  label: '\u63A5\u53E3\u9009\u62E9\u5668',
  dynamicRules: (ruleParams) => {
    return [
      {
        required: true,
        validator: () => {
          const { selectApi } = ruleParams.value.values;
          if (!selectApi) {
            return Promise.reject(new Error('\u8BF7\u9009\u62E9 \u63A5\u53E3\u9009\u62E9\u5668'));
          }
          return Promise.resolve();
        },
      },
    ];
  },
  componentProps: {
    api: getSelectForOptions,
  }
};

const getSmsCodeApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  })
}

const schemas: FormSchema[] =[
  {
    field: 'input',
    component: 'Input',
    label: '\u8F93\u5165\u6846',
  },
  {
    field: 'inputCount',
    component: 'InputCount',
    label: '\u9650\u5236\u6570\u5B57\u7684\u8F93\u5165\u6846',
    componentProps: {
      maxLength: 10,
    }
  },
  {
    field: 'inputPassword',
    component: 'InputPassword',
    label: '\u5BC6\u7801',
  },
  {
    field: 'inputSmsCode',
    component: 'InputSmsCode',
    label: '\u77ED\u4FE1\u9A8C\u8BC1\u7801',
    componentProps: ({ formModel }) => {
      return {
        api: getSmsCodeApi,
        ajaxParams: () => {
          return {
            phone: 13810902078,
            number: formModel.inputCount
          }
        }
      }
    }
  },
  {
    field: 'inputSearch',
    component: 'InputSearch',
    label: '\u641C\u7D22\u6846',
  },
  {
    field: 'inputTextArea',
    component: 'InputTextArea',
    label: '\u6587\u672C\u57DF',
  },
  {
    field: 'autoComplete',
    component: 'AutoComplete',
    label: '\u81EA\u52A8\u5B8C\u6210',
    helpMessage: 'TODO: [fix] onSearch \u7B49\u4E3A\u4EC0\u4E48\u5728 vite \u4E2D\u4F1A\u662F \u6570\u7EC4',
    componentProps: {
      onSearch: () => {
        console.log(222, '222');
      }
    },
  },
  {
    field: 'inputNumber',
    component: 'InputNumber',
    label: '\u6570\u5B57\u8F93\u5165\u6846',
  },
  {
    field: 'inputGroup',
    component: 'InputGroup',
    label: '\u8F93\u5165\u6846\u7EC4\u5408',
    slot: 'inputGroup',
    helpMessage: 'NOTE: \u5728 form-pro \u6A21\u677F\u4E2D\u5BF9\u5E94 inputGroup \u7684 slot',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [ 
        {
          required: true,
          validator: () => {
            const { inputGroup, inputGroupSelect } = ruleParams.value.values;
            console.log(ruleParams.value.values.inputGroup, 'ruleParams.value.values');
            if (!inputGroupSelect) {
              return Promise.reject(new Error('\u8BF7\u9009\u62E9 \u5361\u7C7B\u578B'));
            }
            if (!inputGroup) {
              return Promise.reject(new Error('\u8BF7\u8F93\u5165 \u5361\u53F7'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  {
    field: 'select',
    component: 'Select',
    label: '\u9009\u62E9\u5668',
    componentProps: {
      options: [
        {
          value: 1,
          label: 'lee',
        },
        {
          value: 2,
          label: 'water',
        }
      ],
    }
  },
  selectApiConf,
  {
    field: 'treeSelect',
    component: 'TreeSelect',
    label: '\u6811\u5F62\u9009\u62E9\u5668',
    helpMessage: 'TODO: [feat] \u6682\u672A\u63D0\u4F9B api \u81EA\u52A8\u62C9\u53BB\u7EC4\u4EF6\uFF0C\u540E\u7EED\u6309\u9700\u6C42\u589E\u52A0',
    componentProps: {
      treeData:  [
        {
          title: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [
            {
              title: 'Child Node1',
              value: '0-0-0',
              key: '0-0-0',
            },
          ],
        },
        {
          title: 'Node2',
          value: '0-1',
          key: '0-1',
          children: [
            {
              title: 'Child Node3',
              value: '0-1-0',
              key: '0-1-0',
              disabled: true,
            },
            {
              title: 'Child Node4',
              value: '0-1-1',
              key: '0-1-1',
            },
          ],
        },
      ],
    }
  },
  {
    field: 'switch',
    component: 'Switch',
    label: '\u5F00\u5173',
  },
  {
    field: 'radioGroup',
    component: 'RadioGroup',
    label: '\u5355\u9009\u7EC4\u5408',
    helpMessage: 'TODO: [feat] \u6682\u672A\u63D0\u4F9B api \u81EA\u52A8\u62C9\u53BB\u7EC4\u4EF6\uFF0C\u540E\u7EED\u6309\u9700\u6C42\u589E\u52A0',
    componentProps: {
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
        },
        {
          label: '\u9009\u98792',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'checkbox',
    component: 'Checkbox',
    label: '\u591A\u9009',
    renderComponentContent: (rccParams: ComputedRef<RenderCallbackParams>) => {
      return h('span', \`\${rccParams.value.model.checkbox ? '\u5DF2' : ''}\u9605\u8BFB Water \u534F\u8BAE\`);
    },
  },
  {
    field: 'checkboxGroup',
    component: 'CheckboxGroup',
    label: '\u591A\u9009\u7EC4\u5408',
    helpMessage: 'TODO: [feat] \u6682\u672A\u63D0\u4F9B api \u81EA\u52A8\u62C9\u53BB\u7EC4\u4EF6\uFF0C\u540E\u7EED\u6309\u9700\u6C42\u589E\u52A0',
    componentProps: {
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
        },
        {
          label: '\u9009\u98792',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'cascader',
    component: 'Cascader',
    label: '\u7EA7\u8054\u9009\u62E9',
    componentProps: {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    field: 'cascaderApi',
    component: 'CascaderApi',
    label: 'API \u7EA7\u8054\u9009\u62E9',
    componentProps: {
      api: getCascaderApi,
    },
  },
  {
    field: 'datePicker',
    component: 'DatePicker',
    label: '\u65E5\u671F',
  },
  {
    field: 'monthPicker',
    component: 'MonthPicker',
    label: '\u6708\u4EFD',
  },
  {
    field: 'weekPicker',
    component: 'WeekPicker',
    label: '\u5468\u9009\u62E9',
  },
  {
    field: 'yearPicker',
    component: 'YearPicker',
    label: '\u5E74\u4EFD',
  },
  {
    field: 'timePicker',
    component: 'TimePicker',
    label: '\u65F6\u95F4',
  },
  {
    field: 'rangePicker',
    component: 'RangePicker',
    label: '\u65E5\u671F\u533A\u95F4',
  },
  {
    field: 'rangePickerGroup',
    component: 'RangeGroupPicker',
    label: '\u65E5\u671F\u533A\u95F4\u5FEB\u6377',
    componentProps: {
      showTodayButton: true,
      showYesterdayButton: true,
      showSevenDaysButton: true,
      showThirtyDaysButton: true,
    }
  },
  {
    field: 'colorPicker',
    component: 'ColorPicker',
    label: '\u989C\u8272',
    helpMessage: 'TODO: [fix] \u5143\u7D20\u5728\u53EF\u89C6\u533A\u4E4B\u5916\u663E\u793A\u6846\u4F4D\u7F6E\u6709\u95EE\u9898',
  },
  {
    field: 'rangePicker',
    component: 'RangePicker',
    label: '\u65E5\u671F\u533A\u95F4',
  },
  {
    field: 'tagGroup',
    component: 'TagGroup',
    label: '\u6807\u7B7E\u7EC4\u5408',
    helpMessage: 'TODO: [feat] componentProps \u4E3A\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u968F\u7740 model \u53D8\u5316\u800C\u6267\u884C\uFF0C\u73B0\u5728\u53EA\u6267\u884C\u4E00\u6B21',
    dynamicRules: () => {
      return [{ required: true, type: 'array', message: '\u8BF7\u6DFB\u52A0\u6807\u7B7E\u540D\u79F0' }];
    },
    // NOTE \u5728\u8FD9\u91CC\u771F\u6B63\u63A7\u5236\u6570\u636E\u683C\u5F0F
    valueLayout: (name, field, props, status) => {
      console.log(name, field, props, status, 'name, field, props, status');
      // \u5982\u679C\u5220\u9664\uFF0C\u7F16\u8F91\u7684\u65F6\u5019\u6DFB\u52A0 type = 'delete' \u5B57\u6BB5\uFF0C\u521B\u5EFA\u7684\u65F6\u5019\u76F4\u63A5\u5220\u9664
      const fieldValue = (props.formModel as any)[field as string];
      if (status === 'remove' && Array.isArray(fieldValue)) {
        const removeItem = fieldValue.find((tag: any) => tag.name === name);
        if (removeItem) {
          if (!removeItem.id) {
            return fieldValue.filter((tag: any) => tag.name !== name);
          } else {
            return fieldValue
              .map((tag: any) => {
                if (tag.name === name) {
                  return tag.id !== ''
                    ? {
                        ...tag,
                        type: 'delete',
                      }
                    : tag; // \u4FEE\u590D\u5DF2\u6709id\u7684\u540C\u540D\u5B57\u7684\u5220\u9664\u518D\u65B0\u5EFA
                }
                return tag;
              })
              .filter((tag: any) => !!tag);
          }
        }
      }
      const newValue = { name, id: name };
      return fieldValue && fieldValue.length
        ? [...fieldValue, newValue]
        : [newValue];
    },
    componentProps: {
      createable: true,
      closable: true,
    },
  },
  ...tagModalListConfig,
  {
    field: 'uploadImage',
    component: 'UploadImage',
    label: '\u4E0A\u4F20\u56FE\u7247',
    changeEvent: 'changeUpload',
    helpMessage: 'TODO: [fix] \u4E0A\u4F20\u7684\u63A5\u53E3\u53EF\u80FD\u4E0D\u597D\u7528',
    componentProps: {
      placeholder: 'UploadImage \u81EA\u52A8\u4E0A\u4F20',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    },
  },
  {
    field: 'uploadName',
    component: 'UploadName',
    changeEvent: 'changeUpload',
    label: '\u4E0A\u4F20\u663E\u793A\u540D\u5B57',
    helpMessage: 'TODO: [test] \u4E0A\u4F20\u4E4B\u540E\u9700\u8981\u8C03\u7528\u4E0A\u4F20\u6587\u4EF6\u63A5\u53E3\u6D4B\u8BD5\u4E00\u4E0B',
    componentProps: () => {
      return {
        accept: '*',
        placeholder: 'UploadName \u4E0D\u662F\u81EA\u52A8\u4E0A\u4F20',
        autoUpload: false,
      };
    },
  },
];

export default defineComponent({
  setup() {
    const [
      fullForm,
    ] = useForm({
      schemas,
      labelWidth: 260,
    });
    return {
      fullForm,
      fullSubmit: (ressss) => {
        console.log(JSON.stringify(ressss), 'fullFieldParams');
      },
    };
  },
});
<\/script>
`;const lt=[{field:"eafield1",component:"Render",label:"\u5B57\u6BB5a",children:[{field:"field1",component:"Input",label:"\u5B57\u6BB51",required:!0},{field:"field2",component:"Switch",label:"\u5B57\u6BB52"}]},{field:"eaafield1",component:"Render",label:"\u5B57\u6BB5b",ifShow:n=>{const{values:e}=n.value;return!!(e==null?void 0:e.field2)},children:[{field:"afield1",component:"Input",label:"\u5B57\u6BB53"},{field:"afield2",component:"Switch",label:"\u5B57\u6BB54"}]},{field:"eabfield2",component:"Render",label:"\u5B57\u6BB5c",children:[{field:"bfield1",component:"Input",label:"\u5B57\u6BB55",ifShow:n=>{const{values:e}=n.value;return!!(e==null?void 0:e.field2)}},{field:"bfield2",component:"Switch",label:"\u5B57\u6BB56"}]}];var X=c({setup(){const[n,{getFieldsValue:e,setFieldsValue:o,getChildrenFieldsValue:r}]=f({labelWidth:120,schemas:lt,actionColOptions:{span:24,push:0},actionAlgin:"space-between",actionAffix:!0,showResetButton:!1,showSubmitButton:!1,navAffix:!0});return setTimeout(async()=>{o({field1:"water"})},100),{childrenPro:n,getFieldsValue:e,getChildrenFieldsValue:r}},methods:{handleSubmit(){const n=this.getFieldsValue(),e=this.getFieldsValue(!0),o=this.getChildrenFieldsValue(),r=this.getChildrenFieldsValue(!0);this.$message.info("\u63A7\u5236\u53F0\u6709\u60CA\u559C"),console.log("children \u7684\u63D0\u4EA4\u6570\u636E\u5168\u5B57\u6BB5:"+JSON.stringify(n)),console.log("children \u7684\u63D0\u4EA4\u6570\u636E\u8FC7\u6EE4\u4E0D\u663E\u793A\u7684\u5B57\u6BB5:"+JSON.stringify(e)),console.log("children \u7684\u63D0\u4EA4\u6570\u636Echildren\u7ED3\u6784\u7684\u5B57\u6BB5:"+JSON.stringify(o)),console.log("children \u7684\u63D0\u4EA4\u6570\u636Echildren\u7ED3\u6784\u8FC7\u6EE4\u4E0D\u663E\u793A\u7684\u5B57\u6BB5:"+JSON.stringify(r))}}});const rt=h("\u4E0A\u4E00\u6B65"),st=h("children \u4FDD\u5B58"),ut=h("\u4E0B\u4E00\u6B65");function it(n,e,o,r,s,u){const l=a("a-button"),i=a("a-form-pro");return d(),p(i,{onRegister:n.childrenPro},{resetBefore:m(()=>[t(l,null,{default:m(()=>[rt]),_:1})]),submitBefore:m(()=>[t(l,null,{default:m(()=>[st]),_:1}),t(l,{type:"primary",onClick:n.handleSubmit},{default:m(()=>[ut]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}X.render=it;var dt=`<cn>
#### children
\u5206\u7EC4\u5C55\u793A\u3002
</cn>

<us>
#### children
TODO
</us>
`,pt=`<template>
  <a-form-pro
    @register="childrenPro"
  >
    <template #resetBefore>
      <a-button>\u4E0A\u4E00\u6B65</a-button>
    </template>
    <template #submitBefore>
      <a-button>children \u4FDD\u5B58</a-button>
      <a-button type="primary" @click="handleSubmit">\u4E0B\u4E00\u6B65</a-button>
    </template>
  </a-form-pro>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { FormSchema, useForm } from '@fe6/water-pro';

const schemas: FormSchema[] = [
  {
    field: 'eafield1',
    component: 'Render',
    label: '\u5B57\u6BB5a',
    children: [
      {
        field: 'field1',
        component: 'Input',
        label: '\u5B57\u6BB51',
        required: true,
      },
      {
        field: 'field2',
        component: 'Switch',
        label: '\u5B57\u6BB52',
      },
    ]
  },
  {
    field: 'eaafield1',
    component: 'Render',
    label: '\u5B57\u6BB5b',
    ifShow: (ifShowParams) => {
      const { values } = ifShowParams.value;
      return !!values?.field2;
    },
    children: [
      {
        field: 'afield1',
        component: 'Input',
        label: '\u5B57\u6BB53',
      },
      {
        field: 'afield2',
        component: 'Switch',
        label: '\u5B57\u6BB54',
      },
    ]
  },
  {
    field: 'eabfield2',
    component: 'Render',
    label: '\u5B57\u6BB5c',
    children: [
      {
        field: 'bfield1',
        component: 'Input',
        label: '\u5B57\u6BB55',
        ifShow: (ifShowParams) => {
          const { values } = ifShowParams.value;
          return !!values?.field2;
        },
      },
      {
        field: 'bfield2',
        component: 'Switch',
        label: '\u5B57\u6BB56',
      },
    ]
  },
];

export default defineComponent({
  setup() {
    const [
      childrenPro,
      { getFieldsValue, setFieldsValue, getChildrenFieldsValue }
    ] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
        push: 0
      },
      actionAlgin: 'space-between',
      actionAffix: true,
      showResetButton: false,
      showSubmitButton: false,
      navAffix: true,
    });

    // NOTO \u771F\u5B9E\u573A\u666F\u83B7\u53D6\u8BE6\u60C5\u7F16\u8F91\u63A5\u53E3\uFF0C\u8BBE\u7F6E\u5177\u4F53\u66FE\u7ECF\u7684\u6570\u636E
    setTimeout(async () => {
      setFieldsValue({
        field1: 'water'
      });
    }, 100);
    return {
      childrenPro,
      getFieldsValue,
      getChildrenFieldsValue,
    };
  },
  methods: {
    handleSubmit() {
      const values1 = this.getFieldsValue();
      const values2 = this.getFieldsValue(true);
      const values3 = this.getChildrenFieldsValue();
      const values4 = this.getChildrenFieldsValue(true);
      (this as any).$message.info('\u63A7\u5236\u53F0\u6709\u60CA\u559C');
      
      console.log('children \u7684\u63D0\u4EA4\u6570\u636E\u5168\u5B57\u6BB5:' + JSON.stringify(values1));
      console.log('children \u7684\u63D0\u4EA4\u6570\u636E\u8FC7\u6EE4\u4E0D\u663E\u793A\u7684\u5B57\u6BB5:' + JSON.stringify(values2));
      console.log('children \u7684\u63D0\u4EA4\u6570\u636Echildren\u7ED3\u6784\u7684\u5B57\u6BB5:' + JSON.stringify(values3));
      console.log('children \u7684\u63D0\u4EA4\u6570\u636Echildren\u7ED3\u6784\u8FC7\u6EE4\u4E0D\u663E\u793A\u7684\u5B57\u6BB5:' + JSON.stringify(values4));
    },
  },
});
<\/script>
`;const ct={class:"markdown-body"},mt=dn('<h2>API</h2><blockquote><p><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L85">\u652F\u6301\u7684\u7EC4\u4EF6</a></p></blockquote><h3>FormPRO | useForm \u53C2\u6570</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>object</td><td></td><td></td></tr><tr><td>labelWidth</td><td>\u6807\u7B7E\u7684\u6587\u672C\u7684\u5BBD\u5EA6</td><td>Number | String</td><td></td><td></td></tr><tr><td>fieldMapToTime</td><td>\u6807\u7B7E\u7684\u6587\u672C\u7684\u5BBD\u5EA6</td><td>[\u5B57\u6BB5\uFF0C[\u5F00\u59CB\u65F6\u95F4\u7684\u5B57\u6BB5\u540D\u5B57\uFF0C\u7ED3\u675F\u65F6\u95F4\u7684\u5B57\u6BB5\u540D\u5B57]\uFF0C \u65F6\u95F4\u683C\u5F0F\u5316][]</td><td></td><td></td></tr><tr><td>actionAlgin</td><td>\u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5F53 <code>space-between</code> \u7684\u65F6\u5019\uFF0C\u662F flex \u5E03\u5C40\uFF0C\u9002\u5408\u591A\u6309\u94AE\u3002</td><td>\u2018left\u2019 | \u2018right\u2019 | \u2018center\u2019 | \u2018space-between\u2019</td><td>left</td><td></td></tr><tr><td>actionAffix</td><td>\u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u60AC\u505C\u5230\u5E95\u90E8</td><td>boolean</td><td>-</td><td></td></tr><tr><td>actionTarget</td><td>\u8BBE\u7F6E\u63D0\u4EA4 Affix \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td><td>() =&gt; HTMLElement</td><td>-</td><td>3.13.0</td></tr><tr><td>actionOffsetBottom</td><td>\u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u60AC\u505C\u5230\u5E95\u90E8\u7684\u8DDD\u79BB</td><td>Number</td><td>0</td><td></td></tr><tr><td>baseGutter</td><td>\u6C34\u5E73\u5185\u8054\u7684\u95F4\u8DDD</td><td>number</td><td>0</td><td></td></tr><tr><td>autoSetPlaceHolder</td><td>\u662F\u5426\u81EA\u5B9A\u8BBE\u7F6E\u5360\u4F4D\u6587\u5B57\uFF0C RangePicker \u65E0\u6548</td><td>boolean</td><td>true</td><td></td></tr><tr><td>submitOnReset</td><td>\u70B9\u51FB\u63D0\u4EA4\u662F\u5426\u91CD\u7F6E\u5B57\u6BB5\u53CA\u9A8C\u8BC1</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8868\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showActionButtonGroup</td><td>\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showResetButton</td><td>\u662F\u5426\u663E\u793A\u91CD\u7F6E\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showSubmitButton</td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autoFocusFirstItem</td><td>\u662F\u5426\u805A\u7126\u7B2C\u4E00\u4E2A\u8F93\u5165\u6846\uFF0C\u53EA\u5728\u7B2C\u4E00\u4E2A\u8868\u5355\u9879\u4E3Ainput\u7684\u65F6\u5019\u4F5C\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showAdvancedButton</td><td>\u662F\u5426\u663E\u793A\u6536\u8D77\u5C55\u5F00\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>autoAdvancedLine</td><td>\u8D85\u8FC7\u51E0\u884C\u81EA\u52A8\u6298\u53E0</td><td>number</td><td>3</td><td></td></tr><tr><td>emptySpan</td><td>\u5C55\u5F00\u7A7A\u5360\u4F4D\u7684 span</td><td>number | <a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L4">ColEx</a></td><td>0</td><td></td></tr><tr><td>transformDateFunc</td><td>\u8F6C\u5316\u65F6\u95F4\u65B9\u6CD5</td><td>Function</td><td><code>(date: any) =&gt; date._isAMomentObject ? date?.format(&#39;YYYY-MM-DD HH:mm:ss&#39;) : date</code></td><td></td></tr><tr><td>hideRequiredMark</td><td>\u662F\u5426\u663E\u793A\u6807\u7B7E\u5FC5\u586B\u7684\u6807\u8BC6( * )\uFF0C \u53EA\u80FD\u5728 form-pro \u6807\u7B7E\u4E2D\u8BBE\u7F6E</td><td>boolean</td><td>-</td><td></td></tr><tr><td>colon</td><td>\u662F\u5426\u663E\u793A\u6807\u7B7E\u6587\u5B57\u7684\u5192\u53F7</td><td>boolean</td><td>true</td><td></td></tr><tr><td>compact</td><td>\u662F\u5426\u7D27\u51D1\u6A21\u5F0F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>resetClearValidate</td><td>\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u662F\u5426\u6E05\u9664\u9A8C\u8BC1\u63D0\u793A</td><td>boolean</td><td>true</td><td></td></tr><tr><td>schemas</td><td>\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u662F\u5426\u6E05\u9664\u9A8C\u8BC1\u63D0\u793A</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126">FormSchema</a></td><td>[]</td><td></td></tr><tr><td>mergeDynamicData</td><td>\u5728\u5355\u72EC\u52A8\u6001\u9A8C\u8BC1\u65B9\u6CD5( dynamicRules )\u4E2D\u8FD4\u56DE\u7684\u591A\u4F59\u5B57\u6BB5\u7684\u5B9A\u4E49</td><td>object</td><td>-</td><td></td></tr><tr><td>rulesMessageJoinLabel</td><td>\u9A8C\u8BC1\u63D0\u793A\u662F\u5426\u7ED3\u5408\u6807\u7B7E\u6587\u5B57\u663E\u793A</td><td>boolean</td><td>true</td><td></td></tr><tr><td>baseRowStyle</td><td>\u6574\u4E2A\u8868\u5355\u7684\u6837\u5F0F\u8BBE\u7F6E</td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>baseColProps</td><td>\u6BCF\u4E2A\u5B57\u6BB5\u6700\u57FA\u7840\u7684 col \u914D\u7F6E\uFF0C\u4E0E\u6BCF\u6761\u5B57\u6BB5\u914D\u7F6E\u4E2D colProps \u5408\u5E76\u914D\u7F6E\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E colProps</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L4">ColEx</a></td><td>-</td><td></td></tr><tr><td>actionColOptions</td><td>\u64CD\u4F5C\u884C\u7684 col \u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L4">ColEx</a></td><td>-</td><td></td></tr><tr><td>labelCol</td><td>\u914D\u7F6E\u5B57\u6BB5\u6807\u7B7E\u533A\u5E03\u5C40</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L4">ColEx</a></td><td>-</td><td></td></tr><tr><td>wrapperCol</td><td>\u914D\u7F6E\u5B57\u6BB5\u5185\u5BB9\u533A\u5E03\u5C40</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L4">ColEx</a></td><td>-</td><td></td></tr><tr><td>resetButtonOptions</td><td>\u91CD\u7F6E<a href="./button-cn">\u6309\u94AE\u914D\u7F6E</a></td><td>object</td><td></td><td></td></tr><tr><td>submitButtonOptions</td><td>\u786E\u8BA4<a href="./button-cn">\u6309\u94AE\u914D\u7F6E</a></td><td>object</td><td></td><td></td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td><code>default</code> | <code>small</code></td><td><code>default</code></td><td></td></tr><tr><td>navAffix</td><td>\u9876\u90E8\u5BFC\u822A\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td><td>3.17.0</td></tr><tr><td>navTarget</td><td>\u8BBE\u7F6E\u63D0\u4EA4 Affix \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td><td>() =&gt; HTMLElement</td><td>-</td><td>3.17.0</td></tr><tr><td>navOffsetTop</td><td>\u9876\u90E8\u64CD\u4F5C\u6309\u94AE\u60AC\u505C\u5230\u9876\u90E8\u7684\u8DDD\u79BB</td><td>Number</td><td>0</td><td>3.17.0</td></tr></tbody></table><h3>FormPro \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>register</td><td>\u4F7F\u7528 useForm \u7684\u56DE\u8C03</td><td>Function(<a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29">formActionType</a>)</td><td></td></tr><tr><td>advanced-change</td><td>\u6298\u53E0\u7684\u56DE\u8C03</td><td>-</td><td></td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u56DE\u8C03</td><td>function(formModel(\u8868\u5355\u6570\u636E\u5BF9\u8C61))</td><td></td></tr><tr><td>submit</td><td>\u9A8C\u8BC1\u6210\u529F\u7684\u786E\u5B9A\u56DE\u8C03</td><td>function(formModel(\u8868\u5355\u6570\u636E\u5BF9\u8C61))</td><td></td></tr></tbody></table><h3>useForm \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u9A8C\u8BC1\u5931\u8D25</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4">NamePath</a>, ScrollOptions) | options</td><td></td></tr><tr><td>setProps</td><td>\u8BBE\u7F6E\u5C5E\u6027</td><td>-</td><td></td></tr><tr><td>resetAllModel</td><td>\u91CD\u7F6E\u6240\u6709\u6570\u636E</td><td>-</td><td></td></tr><tr><td>updateSchema</td><td>\u66F4\u65B0\u8868\u5355\u914D\u7F6E\u89C4\u5219 schema</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126">FormSchema</a>, replace(\u662F\u5426\u66FF\u6362)</td><td></td></tr><tr><td>clearValidate</td><td>\u6E05\u9664\u9A8C\u8BC1</td><td>\u5B57\u6BB5\u540D\u5B57\uFF0C string | string[]</td><td></td></tr><tr><td>resetFields</td><td>\u91CD\u7F6E\u5B57\u6BB5</td><td>-</td><td></td></tr><tr><td>removeSchemaByFiled</td><td>\u5220\u9664\u5B57\u6BB5</td><td>field(\u5B57\u6BB5\u540D\uFF0Cstring | string[])</td><td></td></tr><tr><td>getFieldsValue</td><td>\u83B7\u53D6\u6240\u6709\u5B57\u6BB5\u7684\u503C\uFF0C\u4F20 true \u8FC7\u6EE4\u4E0D\u663E\u793A\u7684\u5B57\u6BB5</td><td>filterHidden</td><td></td></tr><tr><td>getChildrenFieldsValue</td><td>\u83B7\u53D6\u6240\u6709\u5B57\u6BB5\u7684\u503C\uFF0C\u7B26\u5408 schema \u7ED3\u6784\uFF0C\u4F20 true \u8FC7\u6EE4\u4E0D\u663E\u793A\u7684\u5B57\u6BB5</td><td>filterHidden</td><td>3.19.0</td></tr><tr><td>setFieldsValue</td><td>\u8BBE\u7F6E\u6240\u6709\u5B57\u6BB5\u7684\u503C</td><td>\u8BBE\u7F6E\u7684\u503C (object)</td><td></td></tr><tr><td>appendSchemaByField</td><td>\u6DFB\u52A0\u65B0\u5B57\u6BB5</td><td>schema(\u89C4\u5219\uFF0C <a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126">FormSchema</a>)\uFF0C\u53C2\u7167\u7684\u5B57\u6BB5\uFF0C\u662F\u5426\u5728\u524D\u9762\u6DFB\u52A0</td><td></td></tr><tr><td>submit</td><td>\u63D0\u4EA4\u65B9\u6CD5</td><td>-</td><td></td></tr><tr><td>validate</td><td>\u9A8C\u8BC1\u8868\u5355\u67D0\u4E9B\u5B57\u6BB5</td><td>\u5B57\u6BB5\u7684\u540D\u5B57(<a href="https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4">NamePath</a>)</td><td></td></tr><tr><td>validateFields</td><td>\u771F\u6B63\u6240\u6709\u8868\u5355\u5B57\u6BB5</td><td>\u5B57\u6BB5\u7684\u540D\u5B57(<a href="https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4">NamePath</a>)</td><td></td></tr></tbody></table>',8),ft={expose:[],setup(n){return(e,o)=>(d(),p("div",ct,[mt]))}};var ht=ft;const K={cn:`# Form Pro \u8868\u5355\u52A0\u5F3A\u7248
        \u8868\u5355\u589E\u5F3A\u7248\u3002\u4E0D\u652F\u6301 table-pro \u3002

      ## \u4F55\u65F6\u4F7F\u7528

      - \u5077\u61D2\u7684\u65F6\u5019
      - \u5FEB\u901F\u5B9E\u73B0\u6570\u636E\u63D0\u4EA4

       ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Form Pro
        TODO
       ## Examples
        `};var Pt={category:"Components",subtitle:"\u8868\u5355 PRO",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",cols:1,title:"Form Pro",render(){return t("div",null,[t(a("Md"),{cn:K.cn,us:K.us},null),t(a("demo-sort"),{cols:1},{default:()=>[t(a("demo-container"),{api:hn,code:bn},{default:()=>[t($,null,null)]}),t(a("demo-container"),{api:Sn,code:Fn},{default:()=>[t(O,null,null)]}),t(a("demo-container"),{api:Bn,code:wn},{default:()=>[t(D,null,null)]}),t(a("demo-container"),{api:An,code:Tn},{default:()=>[t(I,null,null)]}),t(a("demo-container"),{api:$n,code:On},{default:()=>[t(M,null,null)]}),t(a("demo-container"),{api:Gn,code:Un},{default:()=>[t(N,null,null)]}),t(a("demo-container"),{api:Mn,code:Rn},{default:()=>[t(R,null,null)]}),t(a("demo-container"),{api:Kn,code:ne},{default:()=>[t(j,null,null)]}),t(a("demo-container"),{api:Vn,code:Jn},{default:()=>[t(G,null,null)]}),t(a("demo-container"),{api:Wn,code:Hn},{default:()=>[t(U,null,null)]}),t(a("demo-container"),{api:ue,code:ie},{default:()=>[t(L,null,null)]}),t(a("demo-container"),{api:ce,code:me},{default:()=>[t(V,null,null)]}),t(a("demo-container"),{api:ge,code:ve},{default:()=>[t(J,null,null)]}),t(a("demo-container"),{api:Fe,code:ye},{default:()=>[t(q,null,null)]}),t(a("demo-container"),{api:we,code:_e},{default:()=>[t(z,null,null)]}),t(a("demo-container"),{api:Oe,code:De},{default:()=>[t(W,null,null)]}),t(a("demo-container"),{api:Le,code:Ve},{default:()=>[t(Y,null,null)]}),t(a("demo-container"),{api:Ne,code:Ge},{default:()=>[t(H,null,null)]}),t(a("demo-container"),{api:ze,code:We},{default:()=>[t(Z,null,null)]}),t(a("demo-container"),{api:ot,code:at},{default:()=>[t(Q,null,null)]}),t(a("demo-container"),{api:dt,code:pt},{default:()=>[t(X,null,null)]})]}),t(a("api"),null,{default:()=>[t(ht,null,null)]})])}};export{Pt as default};

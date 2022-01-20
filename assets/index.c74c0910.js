import{d as _,k as d,Y as l,bw as g,bx as b,bP as Z,a1 as q,b as t,by as a,D as m,bG as R,bH as G,bI as J,w as z,br as W,o as Y,bX as X,bz as K,bY as Q,bO as ee}from"./vendor.846be9ce.js";var x=_({setup(){return{value:d("")}}});function te(e,n,v,i,s,h){const u=l("a-input");return g(),b(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),placeholder:"Basic usage"},null,8,["value"])}x.render=te;var ne=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Basic usage
Basic usage example.
</us>
`,ae=`<template>
  <a-input v-model:value="value" placeholder="Basic usage" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
<\/script>
`,ue=_({components:{UserOutlined:Z,InfoCircleOutlined:q},setup(){return{userName:d("")}}});const le={class:"components-input-demo-presuffix"},oe=t("br",null,null,-1),re=t("br",null,null,-1);function de(e,n,v,i,s,h){const u=l("user-outlined"),o=l("info-circle-outlined"),c=l("a-tooltip"),f=l("a-input");return g(),b("div",le,[t(f,{placeholder:"Basic usage",value:e.userName,"onUpdate:value":n[1]||(n[1]=p=>e.userName=p)},{prefix:a(()=>[t(u,{type:"user"})]),suffix:a(()=>[t(c,{title:"Extra information"},{default:a(()=>[t(o,{style:{color:"rgba(0, 0, 0, 0.45)"}})]),_:1})]),_:1},8,["value"]),oe,re,t(f,{prefix:"\uFFE5",suffix:"RMB"})])}ue.render=de;var B=_({setup(){const e=d("");return{value:e,onSearch:v=>{console.log("use value",v),console.log("or use this.value",e.value)}}}});const se=t("br",null,null,-1),ie=t("br",null,null,-1),pe=t("br",null,null,-1),ve=t("br",null,null,-1),ce=t("br",null,null,-1),me=t("br",null,null,-1),he=m("Custom");function fe(e,n,v,i,s,h){const u=l("a-input-search"),o=l("a-button");return g(),b("div",null,[t(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=c=>e.value=c),placeholder:"input search text",style:{width:"200px"},onSearch:e.onSearch},null,8,["value","onSearch"]),se,ie,t(u,{value:e.value,"onUpdate:value":n[2]||(n[2]=c=>e.value=c),placeholder:"input search text","enter-button":"",onSearch:e.onSearch},null,8,["value","onSearch"]),pe,ve,t(u,{value:e.value,"onUpdate:value":n[3]||(n[3]=c=>e.value=c),placeholder:"input search text","enter-button":"Search",size:"large",onSearch:e.onSearch},null,8,["value","onSearch"]),ce,me,t(u,{value:e.value,"onUpdate:value":n[4]||(n[4]=c=>e.value=c),placeholder:"input search text",size:"large",onSearch:e.onSearch},{enterButton:a(()=>[t(o,null,{default:a(()=>[he]),_:1})]),_:1},8,["value","onSearch"])])}B.render=fe;var ge=`<cn>
#### \u641C\u7D22\u6846
\u5E26\u6709\u641C\u7D22\u6309\u94AE\u7684\u8F93\u5165\u6846\u3002
</cn>

<us>
#### Search box
Example of creating a search box by grouping a standard input with a search button.
</us>
`,be=`<template>
  <div>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <br />
    <br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <br />
    <br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <br />
    <br />
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      size="large"
      @search="onSearch"
    >
      <template #enterButton>
        <a-button>Custom</a-button>
      </template>
    </a-input-search>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      value,
      onSearch,
    };
  },
});
<\/script>
`,F=_({setup(){return{value:d("")}}});const _e=t("br",null,null,-1),$e=t("br",null,null,-1);function Ce(e,n,v,i,s,h){const u=l("a-input-search");return g(),b("div",null,[t(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),placeholder:"input search loading deault",loading:""},null,8,["value"]),_e,$e,t(u,{value:e.value,"onUpdate:value":n[2]||(n[2]=o=>e.value=o),placeholder:"input search loading with enterButton",loading:"","enter-button":""},null,8,["value"])])}F.render=Ce;var Ee=`<cn>
#### \u641C\u7D22\u6846 loading
\u7528\u4E8E \`onSearch\` \u7684\u65F6\u5019\u5C55\u793A \`loading\`\u3002
</cn>

<us>
#### Search box with loading
Search loading when onSearch.
</us>
`,Ae=`<template>
  <div>
    <a-input-search v-model:value="value" placeholder="input search loading deault" loading />
    <br />
    <br />
    <a-input-search
      v-model:value="value"
      placeholder="input search loading with enterButton"
      loading
      enter-button
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
<\/script>
`,S=_({setup(){return{value:d("")}}});const ye=J();R("data-v-7364b074");const Se={class:"components-input-demo-size"};G();const we=ye((e,n,v,i,s,h)=>{const u=l("a-input");return g(),b("div",Se,[t(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),size:"large",placeholder:"large size"},null,8,["value"]),t(u,{value:e.value,"onUpdate:value":n[2]||(n[2]=o=>e.value=o),placeholder:"default size"},null,8,["value"]),t(u,{value:e.value,"onUpdate:value":n[3]||(n[3]=o=>e.value=o),size:"small",placeholder:"small size"},null,8,["value"])])});S.render=we;S.__scopeId="data-v-7364b074";var ze="<cn>\n#### \u4E09\u79CD\u5927\u5C0F\n\u6211\u4EEC\u4E3A `<Input />` \u8F93\u5165\u6846\u5B9A\u4E49\u4E86\u4E09\u79CD\u5C3A\u5BF8\uFF08\u5927\u3001\u9ED8\u8BA4\u3001\u5C0F\uFF09\uFF0C\u9AD8\u5EA6\u5206\u522B\u4E3A `40px`\u3001`32px` \u548C `24px`\u3002\n</cn>\n\n<us>\n#### Three sizes of Input\nThere are three sizes of an Input box: `large` (40px)\u3001`default` (32px) and `small` (24px).\n</us>\n",xe=`<template>
  <div class="components-input-demo-size">
    <a-input v-model:value="value" size="large" placeholder="large size" />
    <a-input v-model:value="value" placeholder="default size" />
    <a-input v-model:value="value" size="small" placeholder="small size" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
<\/script>
<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
`;const Be=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var U=_({setup(){const e=d("0571"),n=d("26888888"),v=d("Zhejiang"),i=d("Xihu District, Hangzhou"),s=d("Option1"),h=d("input content"),u=d("input content"),o=d(null),c=d("Option1-1"),f=d("Option2-2"),p=d("1"),$=d(""),E=d(""),A=d(""),y=d("Sign Up"),r=d(""),P=d("Home"),M=d([]),w=d([]);return z(r,C=>{w.value=!C||C.indexOf("@")>=0?[]:[`${C}@gmail.com`,`${C}@163.com`,`${C}@qq.com`]}),{value1:e,value2:n,value3:v,value4:i,value5:s,value6:h,value7:u,value8:o,value9:c,value10:f,value11:p,value12:$,value13:E,value14:A,value15:y,value16:r,value17:P,value18:M,options:Be,dataSource:w}}});const Fe=t("br",null,null,-1),Ue=t("br",null,null,-1),Ie=m("Zhejiang"),Oe=m("Jiangsu"),Ve=t("br",null,null,-1),je=m("Option1"),Te=m("Option2"),He=t("br",null,null,-1),De=t("br",null,null,-1),Ne=m("Option1-1"),Le=m("Option1-2"),ke=m("Option2-1"),Pe=m("Option2-2"),Me=t("br",null,null,-1),Ze=m("Between"),qe=m("Except"),Re=t("br",null,null,-1),Ge=m("Sign Up"),Je=m("Sign In"),We=t("br",null,null,-1),Ye=m("Home"),Xe=m("Company");function Ke(e,n,v,i,s,h){const u=l("a-input"),o=l("a-col"),c=l("a-row"),f=l("a-input-group"),p=l("a-select-option"),$=l("a-select"),E=l("a-date-picker"),A=l("a-auto-complete"),y=l("a-cascader");return g(),b("div",null,[t(f,{size:"large"},{default:a(()=>[t(c,{gutter:8},{default:a(()=>[t(o,{span:5},{default:a(()=>[t(u,{value:e.value1,"onUpdate:value":n[1]||(n[1]=r=>e.value1=r)},null,8,["value"])]),_:1}),t(o,{span:8},{default:a(()=>[t(u,{value:e.value2,"onUpdate:value":n[2]||(n[2]=r=>e.value2=r)},null,8,["value"])]),_:1})]),_:1})]),_:1}),Fe,t(f,{compact:""},{default:a(()=>[t(u,{style:{width:"20%"},value:e.value1,"onUpdate:value":n[3]||(n[3]=r=>e.value1=r)},null,8,["value"]),t(u,{style:{width:"30%"},value:e.value2,"onUpdate:value":n[4]||(n[4]=r=>e.value2=r)},null,8,["value"])]),_:1}),Ue,t(f,{compact:""},{default:a(()=>[t($,{value:e.value3,"onUpdate:value":n[5]||(n[5]=r=>e.value3=r)},{default:a(()=>[t(p,{value:"Zhejiang"},{default:a(()=>[Ie]),_:1}),t(p,{value:"Jiangsu"},{default:a(()=>[Oe]),_:1})]),_:1},8,["value"]),t(u,{style:{width:"50%"},value:e.value4,"onUpdate:value":n[6]||(n[6]=r=>e.value4=r)},null,8,["value"])]),_:1}),Ve,t(f,{compact:""},{default:a(()=>[t($,{value:e.value5,"onUpdate:value":n[7]||(n[7]=r=>e.value5=r)},{default:a(()=>[t(p,{value:"Option1"},{default:a(()=>[je]),_:1}),t(p,{value:"Option2"},{default:a(()=>[Te]),_:1})]),_:1},8,["value"]),t(u,{style:{width:"50%"},value:e.value6,"onUpdate:value":n[8]||(n[8]=r=>e.value6=r)},null,8,["value"])]),_:1}),He,t(f,{compact:""},{default:a(()=>[t(u,{style:{width:"50%"},value:e.value7,"onUpdate:value":n[9]||(n[9]=r=>e.value7=r)},null,8,["value"]),t(E,{value:e.value8,"onUpdate:value":n[10]||(n[10]=r=>e.value8=r),style:{width:"50%"}},null,8,["value"])]),_:1}),De,t(f,{compact:""},{default:a(()=>[t($,{value:e.value9,"onUpdate:value":n[11]||(n[11]=r=>e.value9=r)},{default:a(()=>[t(p,{value:"Option1-1"},{default:a(()=>[Ne]),_:1}),t(p,{value:"Option1-2"},{default:a(()=>[Le]),_:1})]),_:1},8,["value"]),t($,{value:e.value10,"onUpdate:value":n[12]||(n[12]=r=>e.value10=r)},{default:a(()=>[t(p,{value:"Option2-1"},{default:a(()=>[ke]),_:1}),t(p,{value:"Option2-2"},{default:a(()=>[Pe]),_:1})]),_:1},8,["value"])]),_:1}),Me,t(f,{compact:""},{default:a(()=>[t($,{value:e.value11,"onUpdate:value":n[13]||(n[13]=r=>e.value11=r)},{default:a(()=>[t(p,{value:"1"},{default:a(()=>[Ze]),_:1}),t(p,{value:"2"},{default:a(()=>[qe]),_:1})]),_:1},8,["value"]),t(u,{value:e.value12,"onUpdate:value":n[14]||(n[14]=r=>e.value12=r),style:{width:"100px","text-align":"center"},placeholder:"Minimum"},null,8,["value"]),t(u,{value:e.value13,"onUpdate:value":n[15]||(n[15]=r=>e.value13=r),style:{width:"30px","border-left":"0","pointer-events":"none",backgroundcolor:"#fff"},placeholder:"~",disabled:""},null,8,["value"]),t(u,{value:e.value14,"onUpdate:value":n[16]||(n[16]=r=>e.value14=r),style:{width:"100px","text-align":"center","border-left":"0"},placeholder:"Maximum"},null,8,["value"])]),_:1}),Re,t(f,{compact:""},{default:a(()=>[t($,{value:e.value15,"onUpdate:value":n[17]||(n[17]=r=>e.value15=r)},{default:a(()=>[t(p,{value:"Sign Up"},{default:a(()=>[Ge]),_:1}),t(p,{value:"Sign In"},{default:a(()=>[Je]),_:1})]),_:1},8,["value"]),t(A,{value:e.value16,"onUpdate:value":n[18]||(n[18]=r=>e.value16=r),options:e.dataSource,style:{width:"200px"},placeholder:"Email"},null,8,["value","options"])]),_:1}),We,t(f,{compact:""},{default:a(()=>[t($,{value:e.value17,"onUpdate:value":n[19]||(n[19]=r=>e.value17=r),style:{width:"30%"}},{default:a(()=>[t(p,{value:"Home"},{default:a(()=>[Ye]),_:1}),t(p,{value:"Company"},{default:a(()=>[Xe]),_:1})]),_:1},8,["value"]),t(y,{value:e.value18,"onUpdate:value":n[20]||(n[20]=r=>e.value18=r),style:{width:"70%"},options:e.options,placeholder:"Select Address"},null,8,["value","options"])]),_:1})])}U.render=Ke;var Qe=`<cn>
#### \u8F93\u5165\u6846\u7EC4\u5408
\u8F93\u5165\u6846\u7684\u7EC4\u5408\u5C55\u73B0\u3002
\u6CE8\u610F\uFF1A\u4F7F\u7528 \`compact\` \u6A21\u5F0F\u65F6\uFF0C\u4E0D\u9700\u8981\u901A\u8FC7 \`Col\` \u6765\u63A7\u5236\u5BBD\u5EA6\u3002
</cn>

<us>
#### Input Group
Input.Group example
Note: You don't need \`Col\` to control the width in the \`compact\` mode.
</us>
`,et=`<template>
  <div>
    <a-input-group size="large">
      <a-row :gutter="8">
        <a-col :span="5">
          <a-input v-model:value="value1" />
        </a-col>
        <a-col :span="8">
          <a-input v-model:value="value2" />
        </a-col>
      </a-row>
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-input style="width: 20%" v-model:value="value1" />
      <a-input style="width: 30%" v-model:value="value2" />
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-select v-model:value="value3">
        <a-select-option value="Zhejiang">Zhejiang</a-select-option>
        <a-select-option value="Jiangsu">Jiangsu</a-select-option>
      </a-select>
      <a-input style="width: 50%" v-model:value="value4" />
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-select v-model:value="value5">
        <a-select-option value="Option1">Option1</a-select-option>
        <a-select-option value="Option2">Option2</a-select-option>
      </a-select>
      <a-input style="width: 50%" v-model:value="value6" />
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-input style="width: 50%" v-model:value="value7" />
      <a-date-picker v-model:value="value8" style="width: 50%" />
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-select v-model:value="value9">
        <a-select-option value="Option1-1">Option1-1</a-select-option>
        <a-select-option value="Option1-2">Option1-2</a-select-option>
      </a-select>
      <a-select v-model:value="value10">
        <a-select-option value="Option2-1">Option2-1</a-select-option>
        <a-select-option value="Option2-2">Option2-2</a-select-option>
      </a-select>
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-select v-model:value="value11">
        <a-select-option value="1">Between</a-select-option>
        <a-select-option value="2">Except</a-select-option>
      </a-select>
      <a-input
        v-model:value="value12"
        style="width: 100px; text-align: center"
        placeholder="Minimum"
      />
      <a-input
        v-model:value="value13"
        style="width: 30px; border-left: 0; pointer-events: none; backgroundcolor: #fff"
        placeholder="~"
        disabled
      />
      <a-input
        v-model:value="value14"
        style="width: 100px; text-align: center; border-left: 0"
        placeholder="Maximum"
      />
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-select v-model:value="value15">
        <a-select-option value="Sign Up">Sign Up</a-select-option>
        <a-select-option value="Sign In">Sign In</a-select-option>
      </a-select>
      <a-auto-complete
        v-model:value="value16"
        :options="dataSource"
        style="width: 200px"
        placeholder="Email"
      />
    </a-input-group>
    <br />
    <a-input-group compact>
      <a-select v-model:value="value17" style="width: 30%">
        <a-select-option value="Home">Home</a-select-option>
        <a-select-option value="Company">Company</a-select-option>
      </a-select>
      <a-cascader
        v-model:value="value18"
        style="width: 70%"
        :options="options"
        placeholder="Select Address"
      />
    </a-input-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

const options = [
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
];
export default defineComponent({
  setup() {
    const value1 = ref<string>('0571');
    const value2 = ref<string>('26888888');
    const value3 = ref<string>('Zhejiang');
    const value4 = ref<string>('Xihu District, Hangzhou');
    const value5 = ref<string>('Option1');
    const value6 = ref<string>('input content');
    const value7 = ref<string>('input content');
    const value8 = ref<string | null>(null);
    const value9 = ref<string>('Option1-1');
    const value10 = ref<string>('Option2-2');
    const value11 = ref<string>('1');
    const value12 = ref<string>('');
    const value13 = ref<string>('');
    const value14 = ref<string>('');
    const value15 = ref<string>('Sign Up');
    const value16 = ref<string>('');
    const value17 = ref<string>('Home');
    const value18 = ref<string[]>([]);
    const dataSource = ref<string[]>([]);

    watch(value16, val => {
      dataSource.value =
        !val || val.indexOf('@') >= 0
          ? []
          : [\`\${val}@gmail.com\`, \`\${val}@163.com\`, \`\${val}@qq.com\`];
    });

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
      value11,
      value12,
      value13,
      value14,
      value15,
      value16,
      value17,
      value18,
      options,
      dataSource,
    };
  },
});
<\/script>
`,I=_({setup(){const e=d(""),n=d("");return{value1:e,value2:n}}});const tt=t("br",null,null,-1),nt=t("br",null,null,-1);function at(e,n,v,i,s,h){const u=l("a-input"),o=l("a-textarea");return g(),b("div",null,[t(u,{value:e.value1,"onUpdate:value":n[1]||(n[1]=c=>e.value1=c),placeholder:"input with clear icon","allow-clear":""},null,8,["value"]),tt,nt,t(o,{value:e.value2,"onUpdate:value":n[2]||(n[2]=c=>e.value2=c),placeholder:"textarea with clear icon","allow-clear":""},null,8,["value"])])}I.render=at;var ut=`<cn>
#### \u5E26\u79FB\u9664\u56FE\u6807
\u5E26\u79FB\u9664\u56FE\u6807\u7684\u8F93\u5165\u6846\uFF0C\u70B9\u51FB\u56FE\u6807\u5220\u9664\u6240\u6709\u5185\u5BB9\u3002
</cn>

<us>
#### With clear icon
Input type of password.
</us>
`,lt=`<template>
  <div>
    <a-input v-model:value="value1" placeholder="input with clear icon" allow-clear />
    <br />
    <br />
    <a-textarea v-model:value="value2" placeholder="textarea with clear icon" allow-clear />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('');
    const value2 = ref<string>('');

    return {
      value1,
      value2,
    };
  },
});
<\/script>
`,O=_({setup(){return{value:d("")}}});function ot(e,n,v,i,s,h){const u=l("a-input-password");return g(),b(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),placeholder:"input password"},null,8,["value"])}O.render=ot;var rt=`<cn>
#### \u5BC6\u7801\u6846
\u5BC6\u7801\u6846\uFF0C\u7248\u672C 1.4.0 \u4E2D\u65B0\u589E\u3002
</cn>

<us>
#### Password box
Input type of password and added in 1.4.0.
</us>
`,dt=`<template>
  <a-input-password v-model:value="value" placeholder="input password" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
<\/script>
`,V=_({setup(){return{value:d("water")}}});function st(e,n,v,i,s,h){const u=l("a-input-count");return g(),b(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),"max-length":6},null,8,["value"])}V.render=st;var it=`<cn>
#### \u8BA1\u6570\u8F93\u5165\u6846
\u53EF\u4EE5\u9650\u5236\u5B57\u6570\u3002
</cn>

<us>
#### \u8BA1\u6570\u8F93\u5165\u6846
TODO.
</us>
`,pt=`<template>
  <a-input-count
    v-model:value="value"
    :max-length="6"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('water');
    return {
      value,
    };
  },
});
<\/script>
`,j=_({components:{SettingOutlined:W},setup(){const e=d("mysite"),n=d("mysite"),v=d("Http://"),i=d(".com"),s=d("mysite");return{value1:e,value2:n,value3:v,value4:i,value5:s}}});const vt={style:{"margin-bottom":"16px"}},ct={style:{"margin-bottom":"16px"}},mt=m("Http://"),ht=m("Https://"),ft=m(".com"),gt=m(".jp"),bt=m(".cn"),_t=m(".org"),$t={style:{"margin-bottom":"16px"}};function Ct(e,n,v,i,s,h){const u=l("a-input"),o=l("a-select-option"),c=l("a-select"),f=l("setting-outlined");return g(),b("div",null,[t("div",vt,[t(u,{"addon-before":"Http://","addon-after":".com",value:e.value1,"onUpdate:value":n[1]||(n[1]=p=>e.value1=p)},null,8,["value"])]),t("div",ct,[t(u,{value:e.value2,"onUpdate:value":n[4]||(n[4]=p=>e.value2=p)},{addonBefore:a(()=>[t(c,{value:e.value3,"onUpdate:value":n[2]||(n[2]=p=>e.value3=p),style:{width:"90px"}},{default:a(()=>[t(o,{value:"Http://"},{default:a(()=>[mt]),_:1}),t(o,{value:"Https://"},{default:a(()=>[ht]),_:1})]),_:1},8,["value"])]),addonAfter:a(()=>[t(c,{value:e.value4,"onUpdate:value":n[3]||(n[3]=p=>e.value4=p),style:{width:"80px"}},{default:a(()=>[t(o,{value:".com"},{default:a(()=>[ft]),_:1}),t(o,{value:".jp"},{default:a(()=>[gt]),_:1}),t(o,{value:".cn"},{default:a(()=>[bt]),_:1}),t(o,{value:".org"},{default:a(()=>[_t]),_:1})]),_:1},8,["value"])]),_:1},8,["value"])]),t("div",$t,[t(u,{value:e.value5,"onUpdate:value":n[5]||(n[5]=p=>e.value5=p)},{addonAfter:a(()=>[t(f)]),_:1},8,["value"])])])}j.render=Ct;var Et=`<cn>
#### \u524D\u7F6E/\u540E\u7F6E\u6807\u7B7E
\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408\u3002
</cn>

<us>
#### Pre / Post tab
Using pre & post tabs example.
</us>
`,At=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-input addon-before="Http://" addon-after=".com" v-model:value="value1" />
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value2">
        <template #addonBefore>
          <a-select v-model:value="value3" style="width: 90px">
            <a-select-option value="Http://">Http://</a-select-option>
            <a-select-option value="Https://">Https://</a-select-option>
          </a-select>
        </template>
        <template #addonAfter>
          <a-select v-model:value="value4" style="width: 80px">
            <a-select-option value=".com">.com</a-select-option>
            <a-select-option value=".jp">.jp</a-select-option>
            <a-select-option value=".cn">.cn</a-select-option>
            <a-select-option value=".org">.org</a-select-option>
          </a-select>
        </template>
      </a-input>
    </div>
    <div style="margin-bottom: 16px">
      <a-input v-model:value="value5">
        <template #addonAfter>
          <setting-outlined />
        </template>
      </a-input>
    </div>
  </div>
</template>
<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
  },

  setup() {
    const value1 = ref<string>('mysite');
    const value2 = ref<string>('mysite');
    const value3 = ref<string>('Http://');
    const value4 = ref<string>('.com');
    const value5 = ref<string>('mysite');
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
    };
  },
});
<\/script>
`;function yt(e){e+="";const n=e.split("."),v=n[0].charAt(0)==="-"?"-":"";let i=v?n[0].slice(1):n[0],s="";for(;i.length>3;)s=`,${i.slice(-3)}${s}`,i=i.slice(0,i.length-3);return i&&(s=i+s),`${v}${s}${n[1]?`.${n[1]}`:""}`}var T=_({setup(){const e=d("111"),n=Y(()=>e.value==="-"?"-":yt(e.value)),v=(s,h)=>{const u=/^-?\d*(\.\d*)?$/;!isNaN(+s)&&u.test(s)||s===""||s==="-"?e.value=s:e.value=h},i=()=>{(e.value.charAt(e.value.length-1)==="."||e.value==="-")&&v(e.value.slice(0,-1),e.value)};return z(e,(s,h)=>{v(s,h)}),{inputValue:e,onBlur:i,formatValue:n}}});const St={class:"numeric-input-title"};function wt(e,n,v,i,s,h){const u=l("a-input"),o=l("a-tooltip");return g(),b(o,{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"},X({default:a(()=>[t(u,{value:e.inputValue,"onUpdate:value":n[1]||(n[1]=c=>e.inputValue=c),placeholder:"Input a number","max-length":25,style:{width:"120px"},onBlur:e.onBlur},null,8,["value","onBlur"])]),_:2},[e.inputValue?{name:"title",fn:a(()=>[t("span",St,K(e.formatValue),1)])}:void 0]),1024)}T.render=wt;var zt=`<cn>
#### \u8F93\u5165\u65F6\u683C\u5F0F\u5316\u5C55\u793A
\u7ED3\u5408 [Tooltip](/components/tooltip-cn/) \u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u6570\u503C\u8F93\u5165\u6846\uFF0C\u65B9\u4FBF\u5185\u5BB9\u8D85\u957F\u65F6\u7684\u5168\u91CF\u5C55\u73B0\u3002
</cn>

<us>
#### Format Tooltip Input
You can use the Input in conjunction with [Tooltip](/components/tooltip/) component to create a Numeric Input, which can provide a good experience for extra-long content display.
</us>
`,xt=`<template>
  <a-tooltip :trigger="['focus']" placement="topLeft" overlay-class-name="numeric-input">
    <template v-if="inputValue" #title>
      <span class="numeric-input-title">
        {{ formatValue }}
      </span>
    </template>

    <a-input
      v-model:value="inputValue"
      placeholder="Input a number"
      :max-length="25"
      style="width: 120px"
      @blur="onBlur"
    />
  </a-tooltip>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

function formatNumber(value: string) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';

  while (num.length > 3) {
    result = \`,\${num.slice(-3)}\${result}\`;
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return \`\${prefix}\${result}\${list[1] ? \`.\${list[1]}\` : ''}\`;
}

export default defineComponent({
  setup() {
    const inputValue = ref<string>('111');
    const formatValue = computed(() => {
      if (inputValue.value === '-') return '-';
      return formatNumber(inputValue.value);
    });

    const format = (val: string, preVal: string) => {
      const reg = /^-?\\d*(\\.\\d*)?$/;

      if ((!isNaN(+val) && reg.test(val)) || val === '' || val === '-') {
        inputValue.value = val;
      } else {
        inputValue.value = preVal;
      }
    };

    // '.' at the end or only '-' in the input box.
    const onBlur = () => {
      if (
        inputValue.value.charAt(inputValue.value.length - 1) === '.' ||
        inputValue.value === '-'
      ) {
        format(inputValue.value.slice(0, -1), inputValue.value);
      }
    };

    watch(inputValue, (val, preVal) => {
      format(val, preVal);
    });

    return {
      inputValue,
      onBlur,
      formatValue,
    };
  },
});
<\/script>
<style>
/* to prevent the arrow overflow the popup container,
or the height is not enough when content is empty */
.numeric-input .ant-tooltip-inner {
  min-width: 32px;
  min-height: 37px;
}

.numeric-input .numeric-input-title {
  font-size: 14px;
}
</style>
`,H=_({setup(){const e=d(""),n=d("");return{value1:e,value2:n}}});const Bt=t("div",{style:{margin:"24px 0"}},null,-1);function Ft(e,n,v,i,s,h){const u=l("a-textarea");return g(),b("div",null,[t(u,{value:e.value1,"onUpdate:value":n[1]||(n[1]=o=>e.value1=o),placeholder:"Autosize height based on content lines","auto-size":""},null,8,["value"]),Bt,t(u,{value:e.value2,"onUpdate:value":n[2]||(n[2]=o=>e.value2=o),placeholder:"Autosize height with minimum and maximum number of lines","auto-size":{minRows:2,maxRows:5}},null,8,["value"])])}H.render=Ft;var Ut="<cn>\n#### \u9002\u5E94\u6587\u672C\u9AD8\u5EA6\u7684\u6587\u672C\u57DF\n\u5C5E\u6027\u9002\u7528\u4E8E `textarea` \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 `autoSize` \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002\n> `1.5.0` \u540E `autosize` \u88AB\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 `autoSize`\u3002\n</cn>\n\n<us>\n#### Autosizing the height to fit the content\n`autoSize` prop for a `textarea` type of `Input` makes the height to automatically adjust based on the content. An options object can be provided to `autoSize` to specify the minimum and maximum number of lines the textarea will automatically adjust.\n> `autosize` is deprecated after `1.5.0`, please use `autoSize`.\n</us>\n",It=`<template>
  <div>
    <a-textarea
      v-model:value="value1"
      placeholder="Autosize height based on content lines"
      auto-size
    />
    <div style="margin: 24px 0" />
    <a-textarea
      v-model:value="value2"
      placeholder="Autosize height with minimum and maximum number of lines"
      :auto-size="{ minRows: 2, maxRows: 5 }"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('');
    const value2 = ref<string>('');
    return {
      value1,
      value2,
    };
  },
});
<\/script>
`,D=_({setup(){return{value:d("test value"),defaultValue:"autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002ending"}}});function Ot(e,n,v,i,s,h){const u=l("a-textarea");return g(),b(u,{value:e.defaultValue,"onUpdate:value":n[1]||(n[1]=o=>e.defaultValue=o),showCount:"",maxlength:100},null,8,["value"])}D.render=Ot;var Vt=`<cn>
#### \u5E26\u5B57\u6570\u63D0\u793A\u7684\u6587\u672C\u57DF
\u7528\u4E8E\u591A\u884C\u8F93\u5165\u3002
</cn>

<us>
#### Resize TextArea
For multi-line input.
</us>
`,jt=`<template>
  <a-textarea v-model:value="defaultValue" showCount :maxlength="100" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('test value');
    return {
      value,
      defaultValue:
        'autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002autosize \u5C5E\u6027\u9002\u7528\u4E8E textarea \u8282\u70B9\uFF0C\u5E76\u4E14\u53EA\u6709\u9AD8\u5EA6\u4F1A\u81EA\u52A8\u53D8\u5316\u3002\u53E6\u5916 autosize \u53EF\u4EE5\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6307\u5B9A\u6700\u5C0F\u884C\u6570\u548C\u6700\u5927\u884C\u6570\u3002ending',
    };
  },
});
<\/script>

`,N=_({setup(){return{value:d("")}}});function Tt(e,n,v,i,s,h){const u=l("a-textarea");return g(),b(u,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),placeholder:"Basic usage",rows:4},null,8,["value"])}N.render=Tt;var Ht=`<cn>
#### \u6587\u672C\u57DF
\u7528\u4E8E\u591A\u884C\u8F93\u5165\u3002
</cn>

<us>
#### TextArea
For multi-line input.
</us>
`,Dt=`<template>
  <a-textarea v-model:value="value" placeholder="Basic usage" :rows="4" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
<\/script>
`;const Nt=({success:e})=>{setTimeout(()=>{e([])},1e3)};var L=_({components:{LogoutOutlined:Q},setup(){return{value:d(""),getSmsCodeApi:Nt}}});function Lt(e,n,v,i,s,h){const u=l("LogoutOutlined"),o=l("a-sms-code");return g(),b(o,{api:e.getSmsCodeApi,value:e.value,"onUpdate:value":n[1]||(n[1]=c=>e.value=c),ajaxParams:()=>({phone:13810902078}),buttonOptions:{type:"danger"}},{prefix:a(()=>[t(u)]),_:1},8,["api","value","ajaxParams"])}L.render=Lt;var kt=`<cn>
#### \u77ED\u4FE1\u9A8C\u8BC1\u7801
\u77ED\u4FE1\u9A8C\u8BC1\u7801\u3002
</cn>

<us>
#### Basic usage
Basic usage example.
</us>
`,Pt=`<template>
  <a-sms-code
    :api="getSmsCodeApi"
    v-model:value="value"
    :ajaxParams="() => ({phone: 13810902078})"
    :buttonOptions="{
      type: 'danger'
    }"
  >
    <template #prefix>
      <LogoutOutlined />
    </template>
  </a-sms-code>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LogoutOutlined } from '@ant-design/icons-vue';

const getSmsCodeApi = ({success}) => {
  setTimeout(() => {
    success([]);
  }, 1000);
}

export default defineComponent({
  components: {
    LogoutOutlined,
  },
  setup() {
    const value = ref<string>('');
    return {
      value,
      getSmsCodeApi,
    };
  },
});
<\/script>
`;const Mt={class:"markdown-body"},Zt=ee(`<h2>API</h2><h3>Input</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>addonAfter</td><td>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E</td><td>string|slot</td><td></td><td></td></tr><tr><td>addonBefore</td><td>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E</td><td>string|slot</td><td></td><td></td></tr><tr><td>defaultValue</td><td>\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9</td><td>string</td><td></td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>false</td><td></td></tr><tr><td>id</td><td>\u8F93\u5165\u6846\u7684 id</td><td>string</td><td></td><td></td></tr><tr><td>maxLength</td><td>\u6700\u5927\u957F\u5EA6</td><td>number</td><td></td><td>1.5.0</td></tr><tr><td>prefix</td><td>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input</td><td>string|slot</td><td></td><td></td></tr><tr><td>size</td><td>\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A <code>large</code>\u3002\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>suffix</td><td>\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input</td><td>string|slot</td><td></td><td></td></tr><tr><td>type</td><td>\u58F0\u660E input \u7C7B\u578B\uFF0C\u540C\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7">MDN</a>(\u8BF7\u76F4\u63A5\u4F7F\u7528 <code>Input.TextArea</code> \u4EE3\u66FF <code>type=&quot;textarea&quot;</code>)\u3002</td><td>string</td><td><code>text</code></td><td></td></tr><tr><td>value(v-model)</td><td>\u8F93\u5165\u6846\u5185\u5BB9</td><td>string</td><td></td><td></td></tr><tr><td>allowClear</td><td>\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9</td><td>boolean</td><td></td><td></td></tr></tbody></table><h3>Input \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>function(e)</td></tr><tr><td>pressEnter</td><td>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</td><td>function(e)</td></tr></tbody></table><blockquote><p>\u5982\u679C <code>Input</code> \u5728 <code>Form.Item</code> \u5185\uFF0C\u5E76\u4E14 <code>Form.Item</code> \u8BBE\u7F6E\u4E86 <code>id</code> \u548C <code>options</code> \u5C5E\u6027\uFF0C\u5219 <code>value</code> <code>defaultValue</code> \u548C <code>id</code> \u5C5E\u6027\u4F1A\u88AB\u81EA\u52A8\u8BBE\u7F6E\u3002</p></blockquote><h3>Input.TextArea</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autosize</td><td>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A \`true</td><td>false<code> \u6216\u5BF9\u8C61\uFF1A</code>{ minRows: 2, maxRows: 6 }\`</td><td>boolean|object</td><td>false</td></tr><tr><td>defaultValue</td><td>\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9</td><td>string</td><td></td><td></td></tr><tr><td>value(v-model)</td><td>\u8F93\u5165\u6846\u5185\u5BB9</td><td>string</td><td></td><td></td></tr><tr><td>allowClear</td><td>\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9</td><td>boolean</td><td></td><td>1.5.0</td></tr></tbody></table><h3>Input.TextArea \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>pressEnter</td><td>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</td><td>function(e)</td></tr></tbody></table><p><code>Input.TextArea</code> \u7684\u5176\u4ED6\u5C5E\u6027\u548C\u6D4F\u89C8\u5668\u81EA\u5E26\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">textarea</a> \u4E00\u81F4\u3002</p><h4>Input.Search</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>enterButton</td><td>\u662F\u5426\u6709\u786E\u8BA4\u6309\u94AE\uFF0C\u53EF\u8BBE\u4E3A\u6309\u94AE\u6587\u5B57\u3002\u8BE5\u5C5E\u6027\u4F1A\u4E0E addon \u51B2\u7A81\u3002</td><td>boolean|slot</td><td>false</td><td></td></tr><tr><td>loading</td><td>\u641C\u7D22 loading</td><td>boolean</td><td></td><td>1.5.0</td></tr></tbody></table><h3>Input.Search \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>search</td><td>\u70B9\u51FB\u641C\u7D22\u6216\u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u7684\u56DE\u8C03</td><td>function(value, event)</td></tr></tbody></table><p>\u5176\u4F59\u5C5E\u6027\u548C Input \u4E00\u81F4\u3002</p><h4>Input.Group</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>compact</td><td>\u662F\u5426\u7528\u7D27\u51D1\u6A21\u5F0F</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td><code>Input.Group</code> \u4E2D\u6240\u6709\u7684 <code>Input</code> \u7684\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td></tr></tbody></table><pre><code class="language-html">&lt;a-input-group&gt;
  &lt;a-input /&gt;
  &lt;a-input /&gt;
&lt;/a-input-group&gt;
</code></pre><h4>Input.Password</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>\u662F\u5426\u663E\u793A\u5207\u6362\u6309\u94AE</td><td>boolean</td><td>true</td></tr></tbody></table><h3>Input.SmsCode</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>api</td><td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>buttonOptions</td><td><a href="./button-cn">\u6309\u94AE\u914D\u7F6E</a></td><td>object</td><td>-</td></tr><tr><td>btnText</td><td>\u53D1\u9001\u9A8C\u8BC1\u7801\u9ED8\u8BA4\u7684\u6587\u6848</td><td>object</td><td>\u53D1\u9001\u9A8C\u8BC1\u7801</td></tr><tr><td>before</td><td>\u53D1\u9001\u4E4B\u524D\u7684\u56DE\u8C03\uFF0C\u7528\u4E8E\u56FE\u5F62\u9A8C\u8BC1\u7801\u7684\u63A5\u5165</td><td>Function</td><td>() =&gt; {}</td></tr><tr><td>ajaxParams</td><td>\u53D1\u9001\u63A5\u53E3\u4F34\u968F\u7684\u53C2\u6570</td><td>Function</td><td>() =&gt; {}</td></tr></tbody></table><h3>Input.Search \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>on-enter</td><td>\u56DE\u8F66\u7684\u56DE\u8C03</td><td>-</td></tr><tr><td>change</td><td>\u9A8C\u8BC1\u7801\u8F93\u5165\u6539\u53D8\u7684\u56DE\u8C03</td><td>Event</td></tr></tbody></table>`,25),qt={expose:[],setup(e){return(n,v)=>(g(),b("div",Mt,[Zt]))}};var Rt=qt;const k={cn:`# Input \u8F93\u5165\u6846
          \u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u6700\u57FA\u7840\u7684\u8868\u5355\u57DF\u7684\u5305\u88C5\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u9700\u8981\u7528\u6237\u8F93\u5165\u8868\u5355\u57DF\u5185\u5BB9\u65F6\u3002
- \u63D0\u4F9B\u7EC4\u5408\u578B\u8F93\u5165\u6846\uFF0C\u5E26\u641C\u7D22\u7684\u8F93\u5165\u6846\uFF0C\u8FD8\u53EF\u4EE5\u8FDB\u884C\u5927\u5C0F\u9009\u62E9\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Input
          A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.
## When To Use
- A user input in a form field is needed.
- A search input is required.
## Examples `};var Jt={category:"Components",subtitle:"\u8F93\u5165\u6846",type:"Data Entry",title:"Input",render(){return t("div",null,[t(l("Md"),{cn:k.cn,us:k.us},null),t(l("demo-sort"),null,{default:()=>[t(l("demo-container"),{api:ne,code:ae},{default:()=>[t(x,null,null)]}),t(l("demo-container"),{api:ge,code:be},{default:()=>[t(B,null,null)]}),t(l("demo-container"),{api:Ee,code:Ae},{default:()=>[t(F,null,null)]}),t(l("demo-container"),{api:ze,code:xe},{default:()=>[t(S,null,null)]}),t(l("demo-container"),{api:Qe,code:et},{default:()=>[t(U,null,null)]}),t(l("demo-container"),{api:ut,code:lt},{default:()=>[t(I,null,null)]}),t(l("demo-container"),{api:rt,code:dt},{default:()=>[t(O,null,null)]}),t(l("demo-container"),{api:it,code:pt},{default:()=>[t(V,null,null)]}),t(l("demo-container"),{api:Et,code:At},{default:()=>[t(j,null,null)]}),t(l("demo-container"),{api:zt,code:xt},{default:()=>[t(T,null,null)]}),t(l("demo-container"),{api:Ut,code:It},{default:()=>[t(H,null,null)]}),t(l("demo-container"),{api:Vt,code:jt},{default:()=>[t(D,null,null)]}),t(l("demo-container"),{api:Ht,code:Dt},{default:()=>[t(N,null,null)]}),t(l("demo-container"),{api:kt,code:Pt},{default:()=>[t(L,null,null)]})]}),t(l("api"),null,{default:()=>[t(Rt,null,null)]})])}};export{Jt as default};

import{d as b,k as r,Y as u,bw as p,bx as v,by as o,D as d,b as e,r as O,c8 as D,bO as G}from"./vendor.846be9ce.js";var g=b({setup(){return{checked:r(!1)}}});const A=d("Radio");function U(n,t,s,c,h,_){const a=u("a-radio");return p(),v(a,{checked:n.checked,"onUpdate:checked":t[1]||(t[1]=l=>n.checked=l)},{default:o(()=>[A]),_:1},8,["checked"])}g.render=U;var T=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
The simplest use.
</us>

\`\`\`vue
<template>
  <a-radio>Radio</a-radio>
</template>
\`\`\`
`,H=`<template>
  <a-radio v-model:checked="checked">Radio</a-radio>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref<boolean>(false);
    return {
      checked,
    };
  },
});
<\/script>
`,f=b({setup(){const n=r(!0),t=r(!1),s=r(!1);return{disabled:n,checked1:t,checked2:s,toggleDisabled:()=>{n.value=!n.value}}}});const j=d("Disabled"),P=e("br",null,null,-1),W=d("Disabled"),w={style:{marginTop:20}},N=d("Toggle disabled");function V(n,t,s,c,h,_){const a=u("a-radio"),l=u("a-button");return p(),v("div",null,[e(a,{checked:n.checked1,"onUpdate:checked":t[1]||(t[1]=i=>n.checked1=i),disabled:n.disabled},{default:o(()=>[j]),_:1},8,["checked","disabled"]),P,e(a,{checked:n.checked2,"onUpdate:checked":t[2]||(t[2]=i=>n.checked2=i),disabled:n.disabled},{default:o(()=>[W]),_:1},8,["checked","disabled"]),e("div",w,[e(l,{type:"primary",onClick:n.toggleDisabled},{default:o(()=>[N]),_:1},8,["onClick"])])])}f.render=V;var M=`<cn>
#### \u4E0D\u53EF\u7528
Radio \u4E0D\u53EF\u7528\u3002
</cn>

<us>
#### disabled
Radio unavailable.
</us>
`,E=`<template>
  <div>
    <a-radio v-model:checked="checked1" :disabled="disabled">Disabled</a-radio>
    <br />
    <a-radio v-model:checked="checked2" :disabled="disabled">Disabled</a-radio>
    <div :style="{ marginTop: 20 }">
      <a-button type="primary" @click="toggleDisabled">Toggle disabled</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const disabled = ref<boolean>(true);
    const checked1 = ref<boolean>(false);
    const checked2 = ref<boolean>(false);

    const toggleDisabled = () => {
      disabled.value = !disabled.value;
    };

    return {
      disabled,
      checked1,
      checked2,
      toggleDisabled,
    };
  },
});
<\/script>
`,m=b({setup(){const n=r("a"),t=r("a"),s=r("a");return{value1:n,value2:t,value3:s}}});const F=d("Hangzhou"),I=d("Shanghai"),q=d("Beijing"),Y=d("Chengdu"),J={style:{marginTop:"16px"}},K=d("Hangzhou"),L=d("Shanghai"),Q=d("Beijing"),X=d("Chengdu"),Z={style:{marginTop:"16px"}},x=d("Hangzhou"),ee=d("Shanghai"),ne=d("Beijing"),te=d("Chengdu");function ae(n,t,s,c,h,_){const a=u("a-radio-button"),l=u("a-radio-group");return p(),v("div",null,[e("div",null,[e(l,{value:n.value1,"onUpdate:value":t[1]||(t[1]=i=>n.value1=i)},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[F]),_:1}),e(a,{value:"b"},{default:o(()=>[I]),_:1}),e(a,{value:"c"},{default:o(()=>[q]),_:1}),e(a,{value:"d"},{default:o(()=>[Y]),_:1})]),_:1},8,["value"])]),e("div",J,[e(l,{value:n.value2,"onUpdate:value":t[2]||(t[2]=i=>n.value2=i)},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[K]),_:1}),e(a,{value:"b",disabled:""},{default:o(()=>[L]),_:1}),e(a,{value:"c"},{default:o(()=>[Q]),_:1}),e(a,{value:"d"},{default:o(()=>[X]),_:1})]),_:1},8,["value"])]),e("div",Z,[e(l,{disabled:"",value:n.value3,"onUpdate:value":t[3]||(t[3]=i=>n.value3=i)},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[x]),_:1}),e(a,{value:"b"},{default:o(()=>[ee]),_:1}),e(a,{value:"c"},{default:o(()=>[ne]),_:1}),e(a,{value:"d"},{default:o(()=>[te]),_:1})]),_:1},8,["value"])])])}m.render=ae;var oe=`<cn>
#### \u6309\u94AE\u6837\u5F0F
\u6309\u94AE\u6837\u5F0F\u7684\u5355\u9009\u7EC4\u5408\u3002
</cn>

<us>
#### radio style
The combination of radio button style.
</us>
`,de=`<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group v-model:value="value2">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b" disabled>Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group disabled v-model:value="value3">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('a');
    const value3 = ref<string>('a');

    return {
      value1,
      value2,
      value3,
    };
  },
});
<\/script>
`,$=b({setup(){const n=r(1),t=O({display:"block",height:"30px",lineHeight:"30px"});return{value:n,radioStyle:t}}});const le=d("Option A"),ue=d("Option B"),ie=d("Option C"),re=d(" More... ");function se(n,t,s,c,h,_){const a=u("a-radio"),l=u("a-input"),i=u("a-radio-group");return p(),v(i,{value:n.value,"onUpdate:value":t[1]||(t[1]=B=>n.value=B)},{default:o(()=>[e(a,{style:n.radioStyle,value:1},{default:o(()=>[le]),_:1},8,["style"]),e(a,{style:n.radioStyle,value:2},{default:o(()=>[ue]),_:1},8,["style"]),e(a,{style:n.radioStyle,value:3},{default:o(()=>[ie]),_:1},8,["style"]),e(a,{style:n.radioStyle,value:4},{default:o(()=>[re,n.value===4?(p(),v(l,{key:0,style:{width:"100px","margin-left":"10px"}})):D("v-if",!0)]),_:1},8,["style"])]),_:1},8,["value"])}$.render=se;var pe=`<cn>
#### RadioGroup \u5782\u76F4
\u5782\u76F4\u7684 RadioGroup\uFF0C\u914D\u5408\u66F4\u591A\u8F93\u5165\u6846\u9009\u9879\u3002
</cn>

<us>
#### Vertical RadioGroup
Vertical RadioGroup, with more radios.
</us>
`,ve=`<template>
  <a-radio-group v-model:value="value">
    <a-radio :style="radioStyle" :value="1">Option A</a-radio>
    <a-radio :style="radioStyle" :value="2">Option B</a-radio>
    <a-radio :style="radioStyle" :value="3">Option C</a-radio>
    <a-radio :style="radioStyle" :value="4">
      More...
      <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
    </a-radio>
  </a-radio-group>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    const radioStyle = reactive({
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    });

    return {
      value,
      radioStyle,
    };
  },
});
<\/script>
`;const ce=["Apple","Pear","Orange"],be=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],he=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}];var y=b({data(){const n=r("Apple"),t=r("Apple"),s=r("Apple");return{plainOptions:ce,options:be,optionsWithDisabled:he,value1:n,value2:t,value3:s}}});const _e=e("br",null,null,-1),ge=e("br",null,null,-1),fe=e("br",null,null,-1),me=e("br",null,null,-1),$e=e("br",null,null,-1),ye=e("br",null,null,-1),Se=e("br",null,null,-1),Ce=e("br",null,null,-1),ke=e("br",null,null,-1),Re=e("br",null,null,-1),ze=e("br",null,null,-1),Be=e("br",null,null,-1),Oe=e("br",null,null,-1),De=e("br",null,null,-1),Ge=e("br",null,null,-1),Ae=e("br",null,null,-1);function Ue(n,t,s,c,h,_){const a=u("a-radio-group");return p(),v("div",null,[e(a,{options:n.plainOptions,value:n.value1,"onUpdate:value":t[1]||(t[1]=l=>n.value1=l)},null,8,["options","value"]),_e,ge,e(a,{value:n.value2,"onUpdate:value":t[2]||(t[2]=l=>n.value2=l),options:n.options,disabled:""},null,8,["value","options"]),fe,me,e(a,{value:n.value3,"onUpdate:value":t[3]||(t[3]=l=>n.value3=l),options:n.optionsWithDisabled},null,8,["value","options"]),$e,ye,e(a,{type:"button",options:n.plainOptions,value:n.value1,"onUpdate:value":t[4]||(t[4]=l=>n.value1=l)},null,8,["options","value"]),Se,Ce,e(a,{size:"small",type:"button",value:n.value2,"onUpdate:value":t[5]||(t[5]=l=>n.value2=l),options:n.options,disabled:""},null,8,["value","options"]),ke,Re,e(a,{size:"large",type:"button",value:n.value3,"onUpdate:value":t[6]||(t[6]=l=>n.value3=l),options:n.optionsWithDisabled},null,8,["value","options"]),ze,Be,e(a,{type:"button",buttonStyle:"solid",options:n.plainOptions,value:n.value1,"onUpdate:value":t[7]||(t[7]=l=>n.value1=l)},null,8,["options","value"]),Oe,De,e(a,{size:"small",type:"button",buttonStyle:"solid",value:n.value2,"onUpdate:value":t[8]||(t[8]=l=>n.value2=l),options:n.options,disabled:""},null,8,["value","options"]),Ge,Ae,e(a,{size:"large",type:"button",buttonStyle:"solid",value:n.value3,"onUpdate:value":t[9]||(t[9]=l=>n.value3=l),options:n.optionsWithDisabled},null,8,["value","options"])])}y.render=Ue;var Te=`<cn>
#### RadioGroup \u7EC4\u5408 - \u914D\u7F6E\u65B9\u5F0F
\u901A\u8FC7\u914D\u7F6E \`options\` \u53C2\u6570\u6765\u6E32\u67D3\u5355\u9009\u6846\u3002
</cn>

<us>
#### RadioGroup group - optional
Render radios by configuring \`options\`.
</us>
`,He=`<template>
  <div>
    <a-radio-group :options="plainOptions" v-model:value="value1" />
    <br />
    <br />
    <a-radio-group v-model:value="value2" :options="options" disabled />
    <br />
    <br />
    <a-radio-group v-model:value="value3" :options="optionsWithDisabled" />
    <br />
    <br />
    <a-radio-group type="button" :options="plainOptions" v-model:value="value1" />
    <br />
    <br />
    <a-radio-group size="small" type="button" v-model:value="value2" :options="options" disabled />
    <br />
    <br />
    <a-radio-group size="large" type="button" v-model:value="value3" :options="optionsWithDisabled" />
    <br />
    <br />
    <a-radio-group type="button" buttonStyle="solid" :options="plainOptions" v-model:value="value1" />
    <br />
    <br />
    <a-radio-group size="small" type="button" buttonStyle="solid" v-model:value="value2" :options="options" disabled />
    <br />
    <br />
    <a-radio-group size="large" type="button" buttonStyle="solid" v-model:value="value3" :options="optionsWithDisabled" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];
export default defineComponent({
  data() {
    const value1 = ref<string>('Apple');
    const value2 = ref<string>('Apple');
    const value3 = ref<string>('Apple');

    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1,
      value2,
      value3,
    };
  },
});
<\/script>
`,S=b({setup(){return{value:r("1")}}});const je=d("A"),Pe=d("B"),We=d("C"),we=d("D");function Ne(n,t,s,c,h,_){const a=u("a-radio"),l=u("a-radio-group");return p(),v(l,{name:"radioGroup",value:n.value,"onUpdate:value":t[1]||(t[1]=i=>n.value=i)},{default:o(()=>[e(a,{value:"1"},{default:o(()=>[je]),_:1}),e(a,{value:"2"},{default:o(()=>[Pe]),_:1}),e(a,{value:"3"},{default:o(()=>[We]),_:1}),e(a,{value:"4"},{default:o(()=>[we]),_:1})]),_:1},8,["value"])}S.render=Ne;var Ve=`<cn>
#### \u5355\u9009\u7EC4\u5408 - \u914D\u5408 name \u4F7F\u7528
\u53EF\u4EE5\u4E3A Radio.Group \u914D\u7F6E \`name\` \u53C2\u6570\uFF0C\u4E3A\u7EC4\u5408\u5185\u7684 input \u5143\u7D20\u8D4B\u4E88\u76F8\u540C\u7684 \`name\` \u5C5E\u6027\uFF0C\u4F7F\u6D4F\u89C8\u5668\u628A Radio.Group \u4E0B\u7684 Radio \u771F\u6B63\u770B\u4F5C\u662F\u4E00\u7EC4\uFF08\u4F8B\u5982\u53EF\u4EE5\u901A\u8FC7\u65B9\u5411\u952E\u59CB\u7EC8**\u5728\u540C\u4E00\u7EC4\u5185**\u66F4\u6539\u9009\u9879\uFF09\u3002
</cn>

<us>
#### Radio.Group with name
Passing the \`name\` property to all \`input[type="radio"]\` that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.
</us>
`,Me=`<template>
  <a-radio-group name="radioGroup" v-model:value="value">
    <a-radio value="1">A</a-radio>
    <a-radio value="2">B</a-radio>
    <a-radio value="3">C</a-radio>
    <a-radio value="4">D</a-radio>
  </a-radio-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('1');
    return {
      value,
    };
  },
});
<\/script>
`,C=b({setup(){return{value:r(1)}}});const Ee=d("A"),Fe=d("B"),Ie=d("C"),qe=d("D");function Ye(n,t,s,c,h,_){const a=u("a-radio"),l=u("a-radio-group");return p(),v("div",null,[e(l,{value:n.value,"onUpdate:value":t[1]||(t[1]=i=>n.value=i)},{default:o(()=>[e(a,{value:1},{default:o(()=>[Ee]),_:1}),e(a,{value:2},{default:o(()=>[Fe]),_:1}),e(a,{value:3},{default:o(()=>[Ie]),_:1}),e(a,{value:4},{default:o(()=>[qe]),_:1})]),_:1},8,["value"])])}C.render=Ye;var Je=`<cn>
#### \u5355\u9009\u7EC4\u5408
\u4E00\u7EC4\u4E92\u65A5\u7684 Radio \u914D\u5408\u4F7F\u7528\u3002
</cn>

<us>
#### Radio Group
A group of radio components.
</us>
`,Ke=`<template>
  <div>
    <a-radio-group v-model:value="value">
      <a-radio :value="1">A</a-radio>
      <a-radio :value="2">B</a-radio>
      <a-radio :value="3">C</a-radio>
      <a-radio :value="4">D</a-radio>
    </a-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    return {
      value,
    };
  },
});
<\/script>
`,k=b({setup(){const n=r("a"),t=r("c");return{value1:n,value2:t}}});const Le=d("Hangzhou"),Qe=d("Shanghai"),Xe=d("Beijing"),Ze=d("Chengdu"),xe={style:{marginTop:"16px"}},en=d("Hangzhou"),nn=d("Shanghai"),tn=d("Beijing"),an=d("Chengdu");function on(n,t,s,c,h,_){const a=u("a-radio-button"),l=u("a-radio-group");return p(),v("div",null,[e("div",null,[e(l,{value:n.value1,"onUpdate:value":t[1]||(t[1]=i=>n.value1=i),"button-style":"solid"},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[Le]),_:1}),e(a,{value:"b"},{default:o(()=>[Qe]),_:1}),e(a,{value:"c"},{default:o(()=>[Xe]),_:1}),e(a,{value:"d"},{default:o(()=>[Ze]),_:1})]),_:1},8,["value"])]),e("div",xe,[e(l,{value:n.value2,"onUpdate:value":t[2]||(t[2]=i=>n.value2=i),"button-style":"solid"},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[en]),_:1}),e(a,{value:"b",disabled:""},{default:o(()=>[nn]),_:1}),e(a,{value:"c"},{default:o(()=>[tn]),_:1}),e(a,{value:"d"},{default:o(()=>[an]),_:1})]),_:1},8,["value"])])])}k.render=on;var dn=`<cn>
#### \u586B\u5E95\u7684\u6309\u94AE\u6837\u5F0F
\u5B9E\u8272\u586B\u5E95\u7684\u5355\u9009\u6309\u94AE\u6837\u5F0F\u3002
</cn>

<us>
#### Solid radio button
Solid radio button style.
</us>
`,ln=`<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group v-model:value="value2" button-style="solid">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b" disabled>Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('c');
    return {
      value1,
      value2,
    };
  },
});
<\/script>
`,R=b({setup(){const n=r("a"),t=r("a"),s=r("a");return{value1:n,value2:t,value3:s}}});const un=d("Hangzhou"),rn=d("Shanghai"),sn=d("Beijing"),pn=d("Chengdu"),vn={style:{marginTop:"16px"}},cn=d("Hangzhou"),bn=d("Shanghai"),hn=d("Beijing"),_n=d("Chengdu"),gn={style:{marginTop:"16px"}},fn=d("Hangzhou"),mn=d("Shanghai"),$n=d("Beijing"),yn=d("Chengdu");function Sn(n,t,s,c,h,_){const a=u("a-radio-button"),l=u("a-radio-group");return p(),v("div",null,[e("div",null,[e(l,{value:n.value1,"onUpdate:value":t[1]||(t[1]=i=>n.value1=i),size:"large"},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[un]),_:1}),e(a,{value:"b"},{default:o(()=>[rn]),_:1}),e(a,{value:"c"},{default:o(()=>[sn]),_:1}),e(a,{value:"d"},{default:o(()=>[pn]),_:1})]),_:1},8,["value"])]),e("div",vn,[e(l,{value:n.value2,"onUpdate:value":t[2]||(t[2]=i=>n.value2=i)},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[cn]),_:1}),e(a,{value:"b"},{default:o(()=>[bn]),_:1}),e(a,{value:"c"},{default:o(()=>[hn]),_:1}),e(a,{value:"d"},{default:o(()=>[_n]),_:1})]),_:1},8,["value"])]),e("div",gn,[e(l,{value:n.value3,"onUpdate:value":t[3]||(t[3]=i=>n.value3=i),size:"small"},{default:o(()=>[e(a,{value:"a"},{default:o(()=>[fn]),_:1}),e(a,{value:"b"},{default:o(()=>[mn]),_:1}),e(a,{value:"c"},{default:o(()=>[$n]),_:1}),e(a,{value:"d"},{default:o(()=>[yn]),_:1})]),_:1},8,["value"])])])}R.render=Sn;var Cn=`<cn>
#### \u5927\u5C0F
\u5927\u4E2D\u5C0F\u4E09\u79CD\u7EC4\u5408\uFF0C\u53EF\u4EE5\u548C\u8868\u5355\u8F93\u5165\u6846\u8FDB\u884C\u5BF9\u5E94\u914D\u5408\u3002
</cn>

<us>
#### size
There are three sizes available: large, medium, and small. It can coordinate with input box.
</us>
`,kn=`<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" size="large">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group v-model:value="value2">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <a-radio-group v-model:value="value3" size="small">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('a');
    const value3 = ref<string>('a');
    return {
      value1,
      value2,
      value3,
    };
  },
});
<\/script>
`;const Rn={class:"markdown-body"},zn=G("<h2>API</h2><h3>Radio</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>checked</td><td>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>defaultChecked</td><td>\u521D\u59CB\u662F\u5426\u9009\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>value</td><td>\u6839\u636E value \u8FDB\u884C\u6BD4\u8F83\uFF0C\u5224\u65AD\u662F\u5426\u9009\u4E2D</td><td>any</td><td>-</td></tr></tbody></table><h3>RadioGroup</h3><p>\u5355\u9009\u6846\u7EC4\u5408\uFF0C\u7528\u4E8E\u5305\u88F9\u4E00\u7EC4 <code>Radio</code>\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C</td><td>any</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u7981\u9009\u6240\u6709\u5B50\u5355\u9009\u5668</td><td>boolean</td><td>false</td><td></td></tr><tr><td>name</td><td>RadioGroup \u4E0B\u6240\u6709 <code>input[type=&quot;radio&quot;]</code> \u7684 <code>name</code> \u5C5E\u6027</td><td>string</td><td>-</td><td></td></tr><tr><td>options</td><td>\u4EE5\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20</td><td>string[] | Array&lt;{ label: string value: string disabled?: boolean }&gt;</td><td>-</td><td></td></tr><tr><td>size</td><td>\u5927\u5C0F\uFF0C\u53EA\u5BF9\u6309\u94AE\u6837\u5F0F\u751F\u6548</td><td><code>large</code> | <code>default</code> | <code>small</code></td><td><code>default</code></td><td></td></tr><tr><td>type</td><td>\u5C55\u793A\u5F62\u6001</td><td><code>button</code> | <code>default</code></td><td><code>default</code></td><td></td></tr><tr><td>value(v-model)</td><td>\u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u9009\u4E2D\u7684\u503C</td><td>any</td><td>-</td><td></td></tr><tr><td>buttonStyle</td><td>RadioButton \u7684\u98CE\u683C\u6837\u5F0F\uFF0C\u76EE\u524D\u6709\u63CF\u8FB9\u548C\u586B\u8272\u4E24\u79CD\u98CE\u683C</td><td><code>outline</code> | <code>solid</code></td><td><code>outline</code></td><td>3.16.0</td></tr></tbody></table><h3>RadioGroup \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u9879\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function(e:Event)</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><h3>Radio</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table>",11),Bn={expose:[],setup(n){return(t,s)=>(p(),v("div",Rn,[zn]))}};var On=Bn;const z={cn:`# \u5355\u9009\u6846
  \u5355\u9009\u6846\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u7528\u4E8E\u5728\u591A\u4E2A\u5907\u9009\u9879\u4E2D\u9009\u4E2D\u5355\u4E2A\u72B6\u6001\u3002
- \u548C Select \u7684\u533A\u522B\u662F\uFF0CRadio \u6240\u6709\u9009\u9879\u9ED8\u8BA4\u53EF\u89C1\uFF0C\u65B9\u4FBF\u7528\u6237\u5728\u6BD4\u8F83\u4E2D\u9009\u62E9\uFF0C\u56E0\u6B64\u9009\u9879\u4E0D\u5B9C\u8FC7\u591A\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Radio
  Radio.

## When To Use

- Used to select a single state from multiple options.
- The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.
  ## Examples
  `};var Gn={category:"Components",subtitle:"\u5355\u9009\u6846",type:"Data Entry",title:"Radio",render(){return e("div",null,[e(u("Md"),{cn:z.cn,us:z.us},null),e(u("demo-sort"),null,{default:()=>[e(u("demo-container"),{api:T,code:H},{default:()=>[e(g,null,null)]}),e(u("demo-container"),{api:M,code:E},{default:()=>[e(f,null,null)]}),e(u("demo-container"),{api:oe,code:de},{default:()=>[e(m,null,null)]}),e(u("demo-container"),{api:dn,code:ln},{default:()=>[e(k,null,null)]}),e(u("demo-container"),{api:pe,code:ve},{default:()=>[e($,null,null)]}),e(u("demo-container"),{api:Te,code:He},{default:()=>[e(y,null,null)]}),e(u("demo-container"),{api:Ve,code:Me},{default:()=>[e(S,null,null)]}),e(u("demo-container"),{api:Je,code:Ke},{default:()=>[e(C,null,null)]}),e(u("demo-container"),{api:Cn,code:kn},{default:()=>[e(R,null,null)]})]}),e(u("api"),null,{default:()=>[e(On,null,null)]})])}};export{Gn as default};

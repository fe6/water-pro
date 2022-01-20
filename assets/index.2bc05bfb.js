var G=Object.defineProperty,W=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))F.call(t,o)&&x(e,o,t[o]);if(_)for(var o of _(t))R.call(t,o)&&x(e,o,t[o]);return e},$=(e,t)=>W(e,z(t));import{d as b,k,Y as l,bw as u,bx as p,by as c,D as s,r as y,w as j,ao as A,b as n,F as m,o as N,bz as f,bO as T}from"./vendor.846be9ce.js";var V=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u7684checkbox
</cn>

<us>
#### Basic
Basic usage of checkbox
</us>
`,O=b({setup(){return{checked:k(!1)}}});const q=s("Checkbox");function I(e,t,o,r,h,v){const d=l("a-checkbox");return u(),p(d,{checked:e.checked,"onUpdate:checked":t[1]||(t[1]=a=>e.checked=a)},{default:c(()=>[q]),_:1},8,["checked"])}O.render=I;var M=`<template>
  <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      checked: ref(false),
    };
  },
});
<\/script>
`,Y=`<cn>
#### \u5168\u9009
\u5728\u5B9E\u73B0\u5168\u9009\u6548\u679C\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u7528\u5230\`indeterminate\`\u5C5E\u6027
</cn>

<us>
#### Check all
The \`indeterminate\` property can help you to achieve a 'check all' effect.
</us>
`;const g=["Apple","Pear","Orange"];var D=b({setup(){const e=y({indeterminate:!0,checkAll:!1,checkedList:["Apple","Orange"]}),t=o=>{Object.assign(e,{checkedList:o.target.checked?g:[],indeterminate:!1})};return j(()=>e.checkedList,o=>{e.indeterminate=!!o.length&&o.length<g.length,e.checkAll=o.length===g.length}),$(C({},A(e)),{plainOptions:g,onCheckAllChange:t})}});const H={style:{borderBottom:"1px solid #E9E9E9"}},J=s(" Check all "),K=n("br",null,null,-1);function Q(e,t,o,r,h,v){const d=l("a-checkbox"),a=l("a-checkbox-group");return u(),p(m,null,[n("div",H,[n(d,{checked:e.checkAll,"onUpdate:checked":t[1]||(t[1]=i=>e.checkAll=i),indeterminate:e.indeterminate,onChange:e.onCheckAllChange},{default:c(()=>[J]),_:1},8,["checked","indeterminate","onChange"])]),K,n(a,{value:e.checkedList,"onUpdate:value":t[2]||(t[2]=i=>e.checkedList=i),options:e.plainOptions},null,8,["value","options"])],64)}D.render=Q;var X=`<template>
  <div :style="{ borderBottom: '1px solid #E9E9E9' }">
    <a-checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="onCheckAllChange"
    >
      Check all
    </a-checkbox>
  </div>
  <br />
  <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
export default defineComponent({
  setup() {
    const state = reactive({
      indeterminate: true,
      checkAll: false,
      checkedList: ['Apple', 'Orange'],
    });

    const onCheckAllChange = (e: any) => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    };
    watch(
      () => state.checkedList,
      val => {
        state.indeterminate = !!val.length && val.length < plainOptions.length;
        state.checkAll = val.length === plainOptions.length;
      },
    );

    return {
      ...toRefs(state),
      plainOptions,
      onCheckAllChange,
    };
  },
});
<\/script>
`,Z=`<cn>
#### \u53D7\u63A7\u7684checkbox
\u8054\u52A8checkbox
</cn>

<us>
#### Controlled Checkbox
Communicated with other components
</us>
`,w=b({setup(){const e=k(!1),t=k(!1),o=()=>{e.value=!e.value},r=()=>{t.value=!t.value};return{label:N(()=>`${e.value?"Checked":"Unchecked"}-${t.value?"Disabled":"Enabled"}`),checked:e,disabled:t,toggleChecked:o,toggleDisable:r}}});const ee={style:{marginBottom:"20px"}};function te(e,t,o,r,h,v){const d=l("a-checkbox"),a=l("a-button");return u(),p(m,null,[n("p",ee,[n(d,{checked:e.checked,"onUpdate:checked":t[1]||(t[1]=i=>e.checked=i),disabled:e.disabled},{default:c(()=>[s(f(e.label),1)]),_:1},8,["checked","disabled"])]),n("p",null,[n(a,{type:"primary",size:"small",onClick:e.toggleChecked},{default:c(()=>[s(f(e.checked?"Uncheck":"Check"),1)]),_:1},8,["onClick"]),n(a,{style:{marginLeft:"10px"},type:"primary",size:"small",onClick:e.toggleDisable},{default:c(()=>[s(f(e.disabled?"Enable":"Disable"),1)]),_:1},8,["onClick"])])],64)}w.render=te;var ne=`<template>
  <p :style="{ marginBottom: '20px' }">
    <a-checkbox v-model:checked="checked" :disabled="disabled">
      {{ label }}
    </a-checkbox>
  </p>
  <p>
    <a-button type="primary" size="small" @click="toggleChecked">
      {{ !checked ? 'Check' : 'Uncheck' }}
    </a-button>
    <a-button :style="{ marginLeft: '10px' }" type="primary" size="small" @click="toggleDisable">
      {{ !disabled ? 'Disable' : 'Enable' }}
    </a-button>
  </p>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref(false);
    const disabled = ref(false);

    const toggleChecked = () => {
      checked.value = !checked.value;
    };

    const toggleDisable = () => {
      disabled.value = !disabled.value;
    };

    const label = computed(() => {
      return \`\${checked.value ? 'Checked' : 'Unchecked'}-\${
        disabled.value ? 'Disabled' : 'Enabled'
      }\`;
    });

    return {
      label,
      checked,
      disabled,
      toggleChecked,
      toggleDisable,
    };
  },
});
<\/script>
`,ae=`<cn>
#### \u4E0D\u53EF\u7528
checkbox \u4E0D\u53EF\u7528
</cn>

<us>
#### Disabled
Disabled checkbox
</us>
`,E=b({setup(){return{checked1:k(!0),checked2:k(!1)}}});const oe=n("br",null,null,-1);function le(e,t,o,r,h,v){const d=l("a-checkbox");return u(),p(m,null,[n(d,{checked:e.checked1,"onUpdate:checked":t[1]||(t[1]=a=>e.checked1=a),disabled:""},null,8,["checked"]),oe,n(d,{checked:e.checked2,"onUpdate:checked":t[2]||(t[2]=a=>e.checked2=a),disabled:""},null,8,["checked"])],64)}E.render=le;var de=`<template>
  <a-checkbox v-model:checked="checked1" disabled />
  <br />
  <a-checkbox v-model:checked="checked2" disabled />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      checked1: ref(true),
      checked2: ref(false),
    };
  },
});
<\/script>
`,ce=`<cn>
#### Checkbox\u7EC4
\u65B9\u4FBF\u7684\u4ECE\u6570\u7EC4\u751F\u6210checkbox
</cn>

<us>
#### Checkbox group
Generate a group of checkboxes from an array
</us>
`;const se=["Apple","Pear","Orange"],re=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],ie=[{value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}];var U=b({setup(){const e=y({value1:[],value2:["Apple"],value3:["Pear"],value4:["Apple"]});return C({plainOptions:se,options:re,optionsWithDisabled:ie},A(e))}});const ue=n("br",null,null,-1),pe=n("br",null,null,-1),he=n("br",null,null,-1),be={style:{color:"red"}};function ke(e,t,o,r,h,v){const d=l("a-checkbox-group");return u(),p(m,null,[n(d,{value:e.value1,"onUpdate:value":t[1]||(t[1]=a=>e.value1=a),name:"checkboxgroup",options:e.plainOptions},null,8,["value","options"]),ue,n(d,{value:e.value2,"onUpdate:value":t[2]||(t[2]=a=>e.value2=a),options:e.plainOptions},null,8,["value","options"]),pe,n(d,{value:e.value3,"onUpdate:value":t[3]||(t[3]=a=>e.value3=a),options:e.options},null,8,["value","options"]),he,n(d,{value:e.value4,"onUpdate:value":t[4]||(t[4]=a=>e.value4=a),options:e.optionsWithDisabled,disabled:""},{label:c(({value:a})=>[n("span",be,f(a),1)]),_:1},8,["value","options"])],64)}U.render=ke;var ve=`<template>
  <a-checkbox-group v-model:value="value1" name="checkboxgroup" :options="plainOptions" />
  <br />
  <a-checkbox-group v-model:value="value2" :options="plainOptions" />
  <br />
  <a-checkbox-group v-model:value="value3" :options="options" :value="['Pear']" />
  <br />
  <a-checkbox-group v-model:value="value4" :options="optionsWithDisabled" disabled>
    <template #label="{ value }">
      <span style="color: red">{{ value }}</span>
    </template>
  </a-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default defineComponent({
  setup() {
    const state = reactive({
      value1: [],
      value2: ['Apple'],
      value3: ['Pear'],
      value4: ['Apple'],
    });

    return {
      plainOptions,
      options,
      optionsWithDisabled,
      ...toRefs(state),
    };
  },
});
<\/script>
`,me=`<cn>
#### \u5E03\u5C40
Checkbox.Group\u5185\u5D4CCheckbox\u5E76\u4E0EGrid\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7075\u6D3B\u7684\u5E03\u5C40
</cn>

<us>
#### Use with grid
We can use Checkbox and Grid Checkbox.group, to implement complex layout
</us>
`,P=b({setup(){return{value:k([])}}});const fe=s("A"),ge=s("B"),Ce=s("C"),_e=s("D"),xe=s("E");function $e(e,t,o,r,h,v){const d=l("a-checkbox"),a=l("a-col"),i=l("a-row"),B=l("a-checkbox-group");return u(),p(B,{value:e.value,"onUpdate:value":t[1]||(t[1]=L=>e.value=L)},{default:c(()=>[n(i,null,{default:c(()=>[n(a,{span:8},{default:c(()=>[n(d,{value:"A"},{default:c(()=>[fe]),_:1})]),_:1}),n(a,{span:8},{default:c(()=>[n(d,{value:"B"},{default:c(()=>[ge]),_:1})]),_:1}),n(a,{span:8},{default:c(()=>[n(d,{value:"C"},{default:c(()=>[Ce]),_:1})]),_:1}),n(a,{span:8},{default:c(()=>[n(d,{value:"D"},{default:c(()=>[_e]),_:1})]),_:1}),n(a,{span:8},{default:c(()=>[n(d,{value:"E"},{default:c(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])}P.render=$e;var ye=`<template>
  <a-checkbox-group v-model:value="value">
    <a-row>
      <a-col :span="8">
        <a-checkbox value="A">A</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="B">B</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="C">C</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="D">D</a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="E">E</a-checkbox>
      </a-col>
    </a-row>
  </a-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value: ref([]),
    };
  },
});
<\/script>
`;const Ae={class:"markdown-body"},Oe=T("<h2>API</h2><h3>\u5C5E\u6027</h3><h4>Checkbox</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>checked(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultChecked</td><td>\u521D\u59CB\u662F\u5426\u9009\u4E2D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u5931\u6548\u72B6\u6001</td><td>boolean</td><td>false</td><td></td></tr><tr><td>indeterminate</td><td>\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</td><td>boolean</td><td>false</td><td></td></tr></tbody></table><h4>\u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</td><td>Function(e:Event)</td><td>-</td></tr></tbody></table><h4>Checkbox Group</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>disabled</td><td>\u6574\u7EC4\u5931\u6548</td><td>boolean</td><td>false</td><td></td></tr><tr><td>name</td><td>CheckboxGroup \u4E0B\u6240\u6709 <code>input[type=&quot;checkbox&quot;]</code> \u7684 <code>name</code> \u5C5E\u6027</td><td>string</td><td>-</td><td>1.5.0</td></tr><tr><td>options</td><td>\u6307\u5B9A\u53EF\u9009\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7 slot=\u201Clabel\u201D slot-scope=\u201Coption\u201D \u5B9A\u5236<code>label</code></td><td>string[] | Array&lt;{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }&gt;</td><td>[]</td><td></td></tr><tr><td>value</td><td>\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879</td><td>string[]</td><td>[]</td><td></td></tr></tbody></table><h4>\u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</td><td>Function(checkedValue)</td><td>-</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><h4>Checkbox</h4><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td><td></td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td><td></td></tr></tbody></table>",13),De={expose:[],setup(e){return(t,o)=>(u(),p("div",Ae,[Oe]))}};var we=De;const S={cn:`# Checkbox \u591A\u9009\u6846
           \u591A\u9009\u6846
         ## \u4F55\u65F6\u4F7F\u7528
         - \u5728\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\u65F6\uFF1B
         - \u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u548C switch \u7C7B\u4F3C\u3002\u533A\u522B\u5728\u4E8E\u5207\u6362 switch \u4F1A\u76F4\u63A5\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u800C checkbox \u4E00\u822C\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0C\u9700\u8981\u548C\u63D0\u4EA4\u64CD\u4F5C\u914D\u5408\u3002
         ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Checkbox
           Checkbox component
         ## When to use
         - Used for selecting multiple values from several options.
         - If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.
         ## Examples
        `};var Pe={category:"Components",subtitle:"\u591A\u9009\u6846",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",title:"Checkbox",render(){return n("div",null,[n(l("Md"),{cn:S.cn,us:S.us},null),n(l("demo-sort"),null,{default:()=>[n(l("demo-container"),{api:V,code:M},{default:()=>[n(O,null,null)]}),n(l("demo-container"),{api:Y,code:X},{default:()=>[n(D,null,null)]}),n(l("demo-container"),{api:ae,code:de},{default:()=>[n(E,null,null)]}),n(l("demo-container"),{api:Z,code:ne},{default:()=>[n(w,null,null)]}),n(l("demo-container"),{api:ce,code:ve},{default:()=>[n(U,null,null)]}),n(l("demo-container"),{api:me,code:ye},{default:()=>[n(P,null,null)]})]}),n(l("api"),null,{default:()=>[n(we,null,null)]})])}};export{Pe as default};

var z=Object.defineProperty,D=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var $=(e,n,a)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,v=(e,n)=>{for(var a in n||(n={}))j.call(n,a)&&$(e,a,n[a]);if(y)for(var a of y(n))H.call(n,a)&&$(e,a,n[a]);return e},k=(e,n)=>D(e,Y(n));import{d as b,Y as d,bw as i,bx as r,b as t,by as l,cd as K,D as s,k as _,ag as L,r as V,ao as S,n as W,F as C,bV as x,ce as A,bz as T,bO as E}from"./vendor.846be9ce.js";var w=b({setup(){return{log:n=>{console.log(n)}}}});const F=s("Tag 1"),G=t("a",{href:"https://github.com/vueComponent/ant-design"},"Link",-1),q=s("Tag 2"),J=s("Prevent Default");function Q(e,n,a,p,g,u){const o=d("a-tag");return i(),r("div",null,[t(o,null,{default:l(()=>[F]),_:1}),t(o,null,{default:l(()=>[G]),_:1}),t(o,{closable:"",onClose:e.log},{default:l(()=>[q]),_:1},8,["onClose"]),t(o,{closable:"",onClose:n[1]||(n[1]=K(()=>{},["prevent"]))},{default:l(()=>[J]),_:1})])}w.render=Q;var X=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 \`closable\` \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 \`close\` \u4E24\u4E2A\u4E8B\u4EF6\u3002
</cn>

<us>
#### basic Usage
Usage of basic Tag, and it could be closable by set \`closable\` property. Closable Tag supports \`close\` events.
</us>
`,Z=`<template>
  <div>
    <a-tag>Tag 1</a-tag>
    <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
    <a-tag closable @close="log">Tag 2</a-tag>
    <a-tag closable @close.prevent>Prevent Default</a-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const log = (e: MouseEvent) => {
      console.log(e);
    };

    return {
      log,
    };
  },
});
<\/script>
`,I=b({setup(){return{handleChange:n=>{console.log(n)},checked1:_(!1),checked2:_(!1),checked3:_(!1)}}});const ee=s("Tag1"),ne=s("Tag2"),te=s("Tag3");function ae(e,n,a,p,g,u){const o=d("a-checkable-tag");return i(),r("div",null,[t(o,{checked:e.checked1,"onUpdate:checked":n[1]||(n[1]=c=>e.checked1=c),onChange:e.handleChange},{default:l(()=>[ee]),_:1},8,["checked","onChange"]),t(o,{checked:e.checked2,"onUpdate:checked":n[2]||(n[2]=c=>e.checked2=c),onChange:e.handleChange},{default:l(()=>[ne]),_:1},8,["checked","onChange"]),t(o,{checked:e.checked3,"onUpdate:checked":n[3]||(n[3]=c=>e.checked3=c),onChange:e.handleChange},{default:l(()=>[te]),_:1},8,["checked","onChange"])])}I.render=ae;var oe=`<cn>
#### \u53EF\u9009\u62E9
\u53EF\u901A\u8FC7 \`CheckableTag\` \u5B9E\u73B0\u7C7B\u4F3C Checkbox \u7684\u6548\u679C\uFF0C\u70B9\u51FB\u5207\u6362\u9009\u4E2D\u6548\u679C\u3002
> \u8BE5\u7EC4\u4EF6\u4E3A\u5B8C\u5168\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u4E0D\u652F\u6301\u975E\u53D7\u63A7\u7528\u6CD5\u3002
</cn>

<us>
#### Checkable
\`CheckableTag\` works like Checkbox, click it to toggle checked state.
> it is an absolute controlled component and has no uncontrolled mode.
</us>
`,le=`<template>
  <div>
    <a-checkable-tag v-model:checked="checked1" @change="handleChange">Tag1</a-checkable-tag>
    <a-checkable-tag v-model:checked="checked2" @change="handleChange">Tag2</a-checkable-tag>
    <a-checkable-tag v-model:checked="checked3" @change="handleChange">Tag3</a-checkable-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    // or use watch
    const handleChange = (checked: boolean) => {
      console.log(checked);
    };

    return {
      handleChange,
      checked1: ref(false),
      checked2: ref(false),
      checked3: ref(false),
    };
  },
});
<\/script>
`;const R={},se=t("h4",{style:{"margin-bottom":"16px"}},"Presets:",-1),de=s("pink"),ce=s("red"),ie=s("orange"),re=s("green"),ue=s("cyan"),ge=s("blue"),he=s("purple"),pe=t("h4",{style:{margin:"'16px 0'"}},"Custom:",-1),fe=s("#f50"),be=s("#2db7f5"),_e=s("#87d068"),me=s("#108ee9");function ve(e,n){const a=d("a-tag");return i(),r("div",null,[se,t("div",null,[t(a,{color:"pink"},{default:l(()=>[de]),_:1}),t(a,{color:"red"},{default:l(()=>[ce]),_:1}),t(a,{color:"orange"},{default:l(()=>[ie]),_:1}),t(a,{color:"green"},{default:l(()=>[re]),_:1}),t(a,{color:"cyan"},{default:l(()=>[ue]),_:1}),t(a,{color:"blue"},{default:l(()=>[ge]),_:1}),t(a,{color:"purple"},{default:l(()=>[he]),_:1})]),pe,t("div",null,[t(a,{color:"#f50"},{default:l(()=>[fe]),_:1}),t(a,{color:"#2db7f5"},{default:l(()=>[be]),_:1}),t(a,{color:"#87d068"},{default:l(()=>[_e]),_:1}),t(a,{color:"#108ee9"},{default:l(()=>[me]),_:1})])])}R.render=ve;var ke=R,Ce=`<cn>
#### \u591A\u5F69\u6807\u7B7E
\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6807\u7B7E\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002
</cn>

<us>
#### Colorful Tag
We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.
</us>
`,Te=`<template>
  <div>
    <h4 style="margin-bottom: 16px">Presets:</h4>
    <div>
      <a-tag color="pink">pink</a-tag>
      <a-tag color="red">red</a-tag>
      <a-tag color="orange">orange</a-tag>
      <a-tag color="green">green</a-tag>
      <a-tag color="cyan">cyan</a-tag>
      <a-tag color="blue">blue</a-tag>
      <a-tag color="purple">purple</a-tag>
    </div>
    <h4 style="margin: '16px 0'">Custom:</h4>
    <div>
      <a-tag color="#f50">#f50</a-tag>
      <a-tag color="#2db7f5">#2db7f5</a-tag>
      <a-tag color="#87d068">#87d068</a-tag>
      <a-tag color="#108ee9">#108ee9</a-tag>
    </div>
  </div>
</template>
`,O=b({components:{PlusOutlined:L},setup(){const e=_(),n=V({tags:["Unremovable","Tag 2","Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3"],inputVisible:!1,inputValue:""}),a=u=>{const o=n.tags.filter(c=>c!==u);console.log(o),n.tags=o},p=()=>{n.inputVisible=!0,W(()=>{e.value.focus()})},g=()=>{const u=n.inputValue;let o=n.tags;u&&o.indexOf(u)===-1&&(o=[...o,u]),console.log(o),Object.assign(n,{tags:o,inputVisible:!1,inputValue:""})};return k(v({},S(n)),{handleClose:a,showInput:p,handleInputConfirm:g,inputRef:e})}});const ye=s(" New Tag ");function $e(e,n,a,p,g,u){const o=d("a-tag"),c=d("a-tooltip"),f=d("a-input"),N=d("plus-outlined");return i(),r("div",null,[(i(!0),r(C,null,x(e.tags,(h,m)=>(i(),r(C,{key:m},[h.length>20?(i(),r(c,{key:0,title:h},{default:l(()=>[t(o,{key:h,closable:m!==0,onClose:P=>e.handleClose(h)},{default:l(()=>[s(T(`${h.slice(0,20)}...`),1)]),_:2},1032,["closable","onClose"])]),_:2},1032,["title"])):(i(),r(o,{key:1,closable:m!==0,onClose:P=>e.handleClose(h)},{default:l(()=>[s(T(h),1)]),_:2},1032,["closable","onClose"]))],64))),128)),e.inputVisible?(i(),r(f,{key:0,ref:"inputRef",type:"text",size:"small",style:{width:"78px"},value:e.inputValue,"onUpdate:value":n[1]||(n[1]=h=>e.inputValue=h),onBlur:e.handleInputConfirm,onKeyup:A(e.handleInputConfirm,["enter"])},null,8,["value","onBlur","onKeyup"])):(i(),r(o,{key:1,onClick:e.showInput,style:{background:"#fff","border-style":"dashed"}},{default:l(()=>[t(N),ye]),_:1},8,["onClick"]))])}O.render=$e;var Ve=`<cn>
#### \u52A8\u6001\u6DFB\u52A0\u548C\u5220\u9664
\u7528\u6570\u7EC4\u751F\u6210\u4E00\u7EC4\u6807\u7B7E\uFF0C\u53EF\u4EE5\u52A8\u6001\u6DFB\u52A0\u548C\u5220\u9664\u3002
</cn>

<us>
#### Add & Remove Dynamically
Generating a set of Tags by array, you can add and remove dynamically.
</us>
`,Se=`<template>
  <div>
    <template v-for="(tag, index) in tags" :key="index">
      <a-tooltip v-if="tag.length > 20" :title="tag">
        <a-tag :key="tag" :closable="index !== 0" @close="handleClose(tag)">
          {{ \`\${tag.slice(0, 20)}...\` }}
        </a-tag>
      </a-tooltip>
      <a-tag v-else :closable="index !== 0" @close="handleClose(tag)">
        {{ tag }}
      </a-tag>
    </template>
    <a-input
      v-if="inputVisible"
      ref="inputRef"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      v-model:value="inputValue"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <a-tag v-else @click="showInput" style="background: #fff; border-style: dashed">
      <plus-outlined />
      New Tag
    </a-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, nextTick } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const inputRef = ref();
    const state = reactive({
      tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
      inputVisible: false,
      inputValue: '',
    });

    const handleClose = (removedTag: string) => {
      const tags = state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      state.tags = tags;
    };

    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };

    const handleInputConfirm = () => {
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    };
    return {
      ...toRefs(state),
      handleClose,
      showInput,
      handleInputConfirm,
      inputRef,
    };
  },
});
<\/script>
`,U=b({setup(){const e=V({tags:["Movies","Books","Music","Sports"],selectedTags:[]}),n=(a,p)=>{const{selectedTags:g}=e,u=p?[...g,a]:g.filter(o=>o!==a);console.log("You are interested in: ",u),e.selectedTags=u};return k(v({},S(e)),{handleChange:n})}});const xe=t("span",{style:{marginRight:"8px"}},"Categories:",-1);function we(e,n,a,p,g,u){const o=d("a-checkable-tag");return i(),r("div",null,[xe,(i(!0),r(C,null,x(e.tags,c=>(i(),r(o,{key:c,checked:e.selectedTags.indexOf(c)>-1,onChange:f=>e.handleChange(c,f)},{default:l(()=>[s(T(c),1)]),_:2},1032,["checked","onChange"]))),128))])}U.render=we;var Ie=`<cn>
#### \u70ED\u95E8\u6807\u7B7E
\u9009\u62E9\u4F60\u611F\u5174\u8DA3\u7684\u8BDD\u9898\u3002
</cn>

<us>
#### Hot Tags
Select your favourite topics.
</us>
`,Re=`<template>
  <div>
    <span :style="{ marginRight: '8px' }">Categories:</span>
    <template v-for="tag in tags" :key="tag">
      <a-checkable-tag
        :checked="selectedTags.indexOf(tag) > -1"
        @change="checked => handleChange(tag, checked)"
      >
        {{ tag }}
      </a-checkable-tag>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      tags: ['Movies', 'Books', 'Music', 'Sports'],
      selectedTags: [] as string[],
    });

    const handleChange = (tag: string, checked: boolean) => {
      const { selectedTags } = state;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      state.selectedTags = nextSelectedTags;
    };

    return {
      ...toRefs(state),
      handleChange,
    };
  },
});
<\/script>
`,B=b({setup(){return{visible:_(!1)}}});const Oe=s("Movies"),Ue=t("br",null,null,-1),Be=s("Toggle");function Me(e,n,a,p,g,u){const o=d("a-tag"),c=d("a-button");return i(),r("div",null,[t(o,{visible:e.visible,"onUpdate:visible":n[1]||(n[1]=f=>e.visible=f),closable:""},{default:l(()=>[Oe]),_:1},8,["visible"]),Ue,t(c,{size:"small",onClick:n[2]||(n[2]=f=>e.visible=!e.visible)},{default:l(()=>[Be]),_:1})])}B.render=Me;var Ne=`<cn>
#### \u63A7\u5236\u5173\u95ED\u72B6\u6001
\u901A\u8FC7 \`visible\` \u5C5E\u6027\u63A7\u5236\u5173\u95ED\u72B6\u6001\u3002
</cn>

<us>
#### Controlled
By using the \`visible\` prop, you can control the close state of Tag.
</us>
`,Pe=`<template>
  <div>
    <a-tag v-model:visible="visible" closable>Movies</a-tag>
    <br />
    <a-button size="small" @click="visible = !visible">Toggle</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      visible: ref(false),
    };
  },
});
<\/script>
`;const ze={class:"markdown-body"},De=E("<h2>API</h2><h3>Tag</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u4EE5\u5173\u95ED</td><td>boolean</td><td>false</td><td></td></tr><tr><td>closeIcon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE</td><td>Node | #closeIcon</td><td>-</td><td></td></tr><tr><td>color</td><td>\u6807\u7B7E\u8272</td><td>string</td><td>-</td><td></td></tr><tr><td>icon</td><td>\u8BBE\u7F6E\u56FE\u6807</td><td>VNode | #icon</td><td>-</td><td></td></tr><tr><td>visible(v-model)</td><td>\u662F\u5426\u663E\u793A\u6807\u7B7E</td><td>boolean</td><td><code>true</code></td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>(e) =&gt; void</td></tr></tbody></table><h3>Tag.CheckableTag</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>\u8BBE\u7F6E\u6807\u7B7E\u7684\u9009\u4E2D\u72B6\u6001</td><td>boolean</td><td>false</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>(checked) =&gt; void</td></tr></tbody></table>",9),Ye={expose:[],setup(e){return(n,a)=>(i(),r("div",ze,[De]))}};var je=Ye;const M={cn:`# \u6807\u7B7E Tag

    \u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u7528\u4E8E\u6807\u8BB0\u4E8B\u7269\u7684\u5C5E\u6027\u548C\u7EF4\u5EA6\u3002
- \u8FDB\u884C\u5206\u7C7B\u3002

    ## \u4EE3\u7801\u6F14\u793A`,us:`# Tag

    Tag for categorizing or markup.

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.
    ## Examples `};var Le={category:"Components",subtitle:"\u6807\u7B7E",type:"Data Display",title:"Tag",render(){return t("div",{id:"components-tag-demo"},[t(d("Md"),{cn:M.cn,us:M.us},null),t(d("demo-sort"),null,{default:()=>[t(d("demo-container"),{api:X,code:Z},{default:()=>[t(w,null,null)]}),t(d("demo-container"),{api:oe,code:le},{default:()=>[t(I,null,null)]}),t(d("demo-container"),{api:Ce,code:Te},{default:()=>[t(ke,null,null)]}),t(d("demo-container"),{api:Ve,code:Se},{default:()=>[t(O,null,null)]}),t(d("demo-container"),{api:Ie,code:Re},{default:()=>[t(U,null,null)]}),t(d("demo-container"),{api:Ne,code:Pe},{default:()=>[t(B,null,null)]})]}),t(d("api"),null,{default:()=>[t(je,null,null)]})])}};export{Le as default};

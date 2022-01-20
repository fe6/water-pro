var ie=Object.defineProperty,ce=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var D=(e,t,r)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))ve.call(t,r)&&D(e,r,t[r]);if(A)for(var r of A(t))fe.call(t,r)&&D(e,r,t[r]);return e},L=(e,t)=>ce(e,pe(t));import{d as b,k as g,Y as d,bw as v,bx as f,b as n,by as a,F as _,D as c,bV as C,bz as S,r as J,o as B,w as V,ao as R,bP as he,bZ as me,ad as ge,bX as _e,bM as ye,b_ as be,ag as Ce,bO as Se}from"./vendor.846be9ce.js";var M=b({setup(){return{focus:()=>{console.log("focus")},handleChange:r=>{console.log(`selected ${r}`)},value1:g("lucy"),value2:g("lucy"),value3:g("lucy")}}});const $e=c("Jack"),we=c("Lucy"),ke=c("Disabled"),Oe=c("yiminghe"),Ie=c("Lucy"),Ue=c("Lucy");function xe(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(_,null,[n(s,{value:e.value1,"onUpdate:value":t[1]||(t[1]=o=>e.value1=o),style:{width:"120px"},onFocus:e.focus,ref:"select",onChange:e.handleChange},{default:a(()=>[n(l,{value:"jack"},{default:a(()=>[$e]),_:1}),n(l,{value:"lucy"},{default:a(()=>[we]),_:1}),n(l,{value:"disabled",disabled:""},{default:a(()=>[ke]),_:1}),n(l,{value:"Yiminghe"},{default:a(()=>[Oe]),_:1})]),_:1},8,["value","onFocus","onChange"]),n(s,{value:e.value2,"onUpdate:value":t[2]||(t[2]=o=>e.value2=o),style:{width:"120px"},disabled:""},{default:a(()=>[n(l,{value:"lucy"},{default:a(()=>[Ie]),_:1})]),_:1},8,["value"]),n(s,{value:e.value3,"onUpdate:value":t[3]||(t[3]=o=>e.value3=o),style:{width:"120px"},loading:""},{default:a(()=>[n(l,{value:"lucy"},{default:a(()=>[Ue]),_:1})]),_:1},8,["value"])],64)}M.render=xe;var je=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Basic Usage
Basic Usage
</us>
`,ze=`<template>
  <a-select
    v-model:value="value1"
    style="width: 120px"
    @focus="focus"
    ref="select"
    @change="handleChange"
  >
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="disabled" disabled>Disabled</a-select-option>
    <a-select-option value="Yiminghe">yiminghe</a-select-option>
  </a-select>
  <a-select v-model:value="value2" style="width: 120px" disabled>
    <a-select-option value="lucy">Lucy</a-select-option>
  </a-select>
  <a-select v-model:value="value3" style="width: 120px" loading>
    <a-select-option value="lucy">Lucy</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const focus = () => {
      console.log('focus');
    };

    const handleChange = (value: string) => {
      console.log(\`selected \${value}\`);
    };

    return {
      focus,
      handleChange,
      value1: ref('lucy'),
      value2: ref('lucy'),
      value3: ref('lucy'),
    };
  },
});
<\/script>

`,E=b({setup(){return{popupScroll:()=>{console.log("popupScroll")},size:g("default"),value1:g("a1"),value2:g(["a1","b2"]),value3:g(["a1","b2"])}}});const Ne=c("Large"),Le=c("Default"),Ve=c("Small"),Fe=n("br",null,null,-1),Pe=n("br",null,null,-1),Te=n("br",null,null,-1),Ae=n("br",null,null,-1);function De(e,t,r,p,u,h){const l=d("a-radio-button"),s=d("a-radio-group"),o=d("a-select-option"),m=d("a-select");return v(),f(_,null,[n(s,{value:e.size,"onUpdate:value":t[1]||(t[1]=i=>e.size=i)},{default:a(()=>[n(l,{value:"large"},{default:a(()=>[Ne]),_:1}),n(l,{value:"default"},{default:a(()=>[Le]),_:1}),n(l,{value:"small"},{default:a(()=>[Ve]),_:1})]),_:1},8,["value"]),Fe,Pe,n(m,{size:e.size,value:e.value1,"onUpdate:value":t[2]||(t[2]=i=>e.value1=i),style:{width:"200px"}},{default:a(()=>[(v(),f(_,null,C(25,i=>n(o,{key:(i+9).toString(36)+i},{default:a(()=>[c(S((i+9).toString(36)+i),1)]),_:2},1024)),64))]),_:1},8,["size","value"]),Te,n(m,{mode:"multiple",size:e.size,placeholder:"Please select",value:e.value2,"onUpdate:value":t[3]||(t[3]=i=>e.value2=i),style:{width:"200px"},onPopupScroll:e.popupScroll},{default:a(()=>[(v(),f(_,null,C(25,i=>n(o,{key:(i+9).toString(36)+i},{default:a(()=>[c(S((i+9).toString(36)+i),1)]),_:2},1024)),64))]),_:1},8,["size","value","onPopupScroll"]),Ae,n(m,{mode:"tags",size:e.size,placeholder:"Please select",value:e.value3,"onUpdate:value":t[4]||(t[4]=i=>e.value3=i),style:{width:"200px"}},{default:a(()=>[(v(),f(_,null,C(25,i=>n(o,{key:(i+9).toString(36)+i},{default:a(()=>[c(S((i+9).toString(36)+i),1)]),_:2},1024)),64))]),_:1},8,["size","value"])],64)}E.render=De;var Je="<cn>\n#### \u4E09\u79CD\u5927\u5C0F\n\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A `large` \u548C `small` \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A `40px` \u548C `24px` \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A `32px`\u3002\n</cn>\n\n<us>\n#### Sizes\nThe height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.\n</us>\n",Be=`<template>
  <a-radio-group v-model:value="size">
    <a-radio-button value="large">Large</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="small">Small</a-radio-button>
  </a-radio-group>
  <br />
  <br />
  <a-select :size="size" v-model:value="value1" style="width: 200px">
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
  <br />
  <a-select
    mode="multiple"
    :size="size"
    placeholder="Please select"
    v-model:value="value2"
    style="width: 200px"
    @popupScroll="popupScroll"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
  <br />
  <a-select
    mode="tags"
    :size="size"
    placeholder="Please select"
    v-model:value="value3"
    style="width: 200px"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const popupScroll = () => {
      console.log('popupScroll');
    };

    return {
      popupScroll,
      size: ref('default'),
      value1: ref('a1'),
      value2: ref(['a1', 'b2']),
      value3: ref(['a1', 'b2']),
    };
  },
});
<\/script>
`,K=b({setup(){const e=t=>{console.log(`selected ${t}`)};return{value:g([]),handleChange:e}}});function Re(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:e.handleChange},{default:a(()=>[(v(),f(_,null,C(25,o=>n(l,{key:(o+9).toString(36)+o},{default:a(()=>[c(S((o+9).toString(36)+o),1)]),_:2},1024)),64))]),_:1},8,["value","onChange"])}K.render=Re;var Me=`<cn>
#### \u6807\u7B7E
tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09
</cn>

<us>
#### Tags
Select with tags, transform input to tag (scroll the menu)
</us>
`,Ee=`<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    placeholder="Tags Mode"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(\`selected \${value}\`);
    };
    return {
      value: ref([]),
      handleChange,
    };
  },
});
<\/script>
`,Y=b({setup(){return{handleChange:t=>{console.log(`selected ${t}`)},value:g([])}}});function Ke(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),mode:"tags",style:{width:"100%"},"token-separators":[","],onChange:e.handleChange},{default:a(()=>[(v(),f(_,null,C(25,o=>n(l,{key:(o+9).toString(36)+o},{default:a(()=>[c(S((o+9).toString(36)+o),1)]),_:2},1024)),64))]),_:1},8,["value","onChange"])}Y.render=Ke;var Ye=`<cn>
#### \u81EA\u52A8\u5206\u8BCD
\u8BD5\u4E0B\u590D\u5236 \`\u9732\u897F,\u6770\u514B\` \u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002
</cn>

<us>
#### Automatic tokenization
Try to copy \`Lucy,Jack\` to the input. Only available in tags and multiple mode.
</us>
`,He=`<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    :token-separators="[',']"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(\`selected \${value}\`);
    };

    return {
      handleChange,
      value: ref<string[]>([]),
    };
  },
});
<\/script>
`,H=b({setup(){const e=t=>{console.log(t)};return{value:g({key:"lucy"}),handleChange:e}}});const Ze=c("Jack (100)"),Ge=c("Lucy (101)");function We(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{"label-in-value":"",value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),style:{width:"120px"},onChange:e.handleChange},{default:a(()=>[n(l,{value:"jack"},{default:a(()=>[Ze]),_:1}),n(l,{value:"lucy"},{default:a(()=>[Ge]),_:1})]),_:1},8,["value","onChange"])}H.render=We;var qe=`<cn>
#### \u83B7\u5F97\u9009\u9879\u7684\u6587\u672C
\u9ED8\u8BA4\u60C5\u51B5\u4E0B \`onChange\` \u91CC\u53EA\u80FD\u62FF\u5230 value\uFF0C\u5982\u679C\u9700\u8981\u62FF\u5230\u9009\u4E2D\u7684\u8282\u70B9\u6587\u672C label\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`labelInValue\` \u5C5E\u6027\u3002
\u9009\u4E2D\u9879\u7684 label \u4F1A\u88AB\u5305\u88C5\u5230 value \u4E2D\u4F20\u9012\u7ED9 \`onChange\` \u7B49\u51FD\u6570\uFF0C\u6B64\u65F6 value \u662F\u4E00\u4E2A\u5BF9\u8C61\u3002
</cn>

<us>
#### Get value of selected item
As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.
The label of the selected item will be packed as an object for passing to the onChange callback.
</us>
`,Qe=`<template>
  <a-select label-in-value v-model:value="value" style="width: 120px" @change="handleChange">
    <a-select-option value="jack">Jack (100)</a-select-option>
    <a-select-option value="lucy">Lucy (101)</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Value {
  key?: string;
  label?: string;
}

export default defineComponent({
  setup() {
    const handleChange = (value: Value) => {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    };
    return {
      value: ref<Value>({ key: 'lucy' }),
      handleChange,
    };
  },
});
<\/script>
`,Z=b({setup(){return{handleChange:t=>{console.log(`selected ${t}`)},value:g(["a1","b2"])}}});function Xe(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{mode:"multiple",value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),style:{width:"100%"},placeholder:"Please select",onChange:e.handleChange},{default:a(()=>[(v(),f(_,null,C(25,o=>n(l,{key:(o+9).toString(36)+o},{default:a(()=>[c(S((o+9).toString(36)+o),1)]),_:2},1024)),64))]),_:1},8,["value","onChange"])}Z.render=Xe;var et=`<cn>
#### \u591A\u9009
\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF08scroll the menu\uFF09
</cn>

<us>
#### multiple selection
Multiple selection, selecting from existing items (scroll the menu).
</us>
`,tt=`<template>
  <a-select
    mode="multiple"
    v-model:value="value"
    style="width: 100%"
    placeholder="Please select"
    @change="handleChange"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string[]) => {
      console.log(\`selected \${value}\`);
    };
    return {
      handleChange,
      value: ref(['a1', 'b2']),
    };
  },
});
<\/script>
`;const G=["Zhejiang","Jiangsu"],F={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]};var W=b({setup(){const e=G[0],t=J({province:e,provinceData:G,cityData:F,secondCity:F[e][0]}),r=B(()=>F[t.province]);return V(()=>t.province,p=>{t.secondCity=t.cityData[p][0]}),L(N({},R(t)),{cities:r})}});function nt(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(_,null,[n(s,{value:e.province,"onUpdate:value":t[1]||(t[1]=o=>e.province=o),style:{width:"120px"}},{default:a(()=>[(v(!0),f(_,null,C(e.provinceData,o=>(v(),f(l,{key:o},{default:a(()=>[c(S(o),1)]),_:2},1024))),128))]),_:1},8,["value"]),n(s,{value:e.secondCity,"onUpdate:value":t[2]||(t[2]=o=>e.secondCity=o),style:{width:"120px"}},{default:a(()=>[(v(!0),f(_,null,C(e.cities,o=>(v(),f(l,{key:o},{default:a(()=>[c(S(o),1)]),_:2},1024))),128))]),_:1},8,["value"])],64)}W.render=nt;var ot=`<cn>
#### \u8054\u52A8
\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002
\u63A8\u8350\u4F7F\u7528 [Cascader](/components/cascader-cn/) \u7EC4\u4EF6\u3002
</cn>

<us>
#### coordinate
Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.
Using the [Cascader](/components/cascader) component is strongly recommended instead as it is more flexible and capable.
</us>
`,at=`<template>
  <a-select v-model:value="province" style="width: 120px">
    <a-select-option v-for="pro in provinceData" :key="pro">
      {{ pro }}
    </a-select-option>
  </a-select>
  <a-select v-model:value="secondCity" style="width: 120px">
    <a-select-option v-for="city in cities" :key="city">
      {{ city }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData: Record<string, string[]> = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
import { defineComponent, reactive, toRefs, computed, watch } from 'vue';
export default defineComponent({
  setup() {
    const province = provinceData[0];
    const state = reactive({
      province,
      provinceData,
      cityData,
      secondCity: cityData[province][0],
    });
    const cities = computed(() => {
      return cityData[state.province];
    });

    watch(
      () => state.province,
      val => {
        state.secondCity = state.cityData[val][0];
      },
    );

    return {
      ...toRefs(state),
      cities,
    };
  },
});
<\/script>
`,q=b({setup(){const e=t=>{console.log(`selected ${t}`)};return{value:g(["lucy"]),handleChange:e}},components:{UserOutlined:he}});const lt=c(" Manager "),dt=c("Jack"),st=c("Lucy"),rt=c("yiminghe"),ut=c("yiminghe1");function it(e,t,r,p,u,h){const l=d("user-outlined"),s=d("a-select-option"),o=d("a-select-opt-group"),m=d("a-select");return v(),f(m,{value:e.value,"onUpdate:value":t[1]||(t[1]=i=>e.value=i),style:{width:"200px"},onChange:e.handleChange},{default:a(()=>[n(o,null,{label:a(()=>[n("span",null,[n(l),lt])]),default:a(()=>[n(s,{value:"jack"},{default:a(()=>[dt]),_:1}),n(s,{value:"lucy"},{default:a(()=>[st]),_:1})]),_:1}),n(o,{label:"Engineer"},{default:a(()=>[n(s,{value:"Yiminghe"},{default:a(()=>[rt]),_:1}),n(s,{value:"Yiminghe1"},{default:a(()=>[ut]),_:1})]),_:1})]),_:1},8,["value","onChange"])}q.render=it;var ct=`<cn>
#### \u5206\u7EC4
\u7528 \`OptGroup\` \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002
</cn>

<us>
#### Option Group
Using \`OptGroup\` to group the options.
</us>
`,pt=`<template>
  <a-select v-model:value="value" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <template #label>
        <span>
          <user-outlined />
          Manager
        </span>
      </template>
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
    </a-select-opt-group>
    <a-select-opt-group label="Engineer">
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
      <a-select-option value="Yiminghe1">yiminghe1</a-select-option>
    </a-select-opt-group>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(\`selected \${value}\`);
    };

    return {
      value: ref(['lucy']),
      handleChange,
    };
  },
  components: {
    UserOutlined,
  },
});
<\/script>
`,P={exports:{}};(function(e,t){(function(r,p){p(t,e)})(me,function(r,p){var u={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function h(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function l(m){try{delete window[m]}catch(i){window[m]=void 0}}function s(m){var i=document.getElementById(m);i&&document.getElementsByTagName("head")[0].removeChild(i)}function o(m){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],y=m,k=i.timeout||u.timeout,$=i.jsonpCallback||u.jsonpCallback,w=void 0;return new Promise(function(re,T){var O=i.jsonpCallbackFunction||h(),j=$+"_"+O;window[O]=function(ue){re({ok:!0,json:function(){return Promise.resolve(ue)}}),w&&clearTimeout(w),s(j),l(O)},y+=y.indexOf("?")===-1?"?":"&";var I=document.createElement("script");I.setAttribute("src",""+y+$+"="+O),i.charset&&I.setAttribute("charset",i.charset),I.id=j,document.getElementsByTagName("head")[0].appendChild(I),w=setTimeout(function(){T(new Error("JSONP request to "+m+" timed out")),l(O),s(j),window[O]=function(){l(O)}},k),I.onerror=function(){T(new Error("JSONP request to "+m+" failed")),l(O),s(j),w&&clearTimeout(w)}})}p.exports=o})})(P,P.exports);var vt=P.exports,U={};function ft(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var ht=function(e,t,r,p){t=t||"&",r=r||"=";var u={};if(typeof e!="string"||e.length===0)return u;var h=/\+/g;e=e.split(t);var l=1e3;p&&typeof p.maxKeys=="number"&&(l=p.maxKeys);var s=e.length;l>0&&s>l&&(s=l);for(var o=0;o<s;++o){var m=e[o].replace(h,"%20"),i=m.indexOf(r),y,k,$,w;i>=0?(y=m.substr(0,i),k=m.substr(i+1)):(y=m,k=""),$=decodeURIComponent(y),w=decodeURIComponent(k),ft(u,$)?Array.isArray(u[$])?u[$].push(w):u[$]=[u[$],w]:u[$]=w}return u},x=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},mt=function(e,t,r,p){return t=t||"&",r=r||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(u){var h=encodeURIComponent(x(u))+r;return Array.isArray(e[u])?e[u].map(function(l){return h+encodeURIComponent(x(l))}).join(t):h+encodeURIComponent(x(e[u]))}).filter(Boolean).join(t):p?encodeURIComponent(x(p))+r+encodeURIComponent(x(e)):""};U.decode=U.parse=ht;U.encode=U.stringify=mt;let z,Q="";function X(e,t){z&&(clearTimeout(z),z=null),Q=e;function r(){const p=U.encode({code:"utf-8",q:e});vt(`https://suggest.taobao.com/sug?${p}`).then(u=>u.json()).then(u=>{if(Q===e){const h=u.result,l=[];h.forEach(s=>{l.push({value:s[0],text:s[0]})}),t(l)}})}z=setTimeout(r,300)}var ee=b({setup(){const e=g([]),t=g();return{handleSearch:u=>{X(u,h=>e.value=h)},handleChange:u=>{console.log(u),t.value=u,X(u,h=>e.value=h)},data:e,value:t}}});function gt(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{"show-search":"",value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),placeholder:"input search text",style:{width:"200px"},"default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,onSearch:e.handleSearch,onChange:e.handleChange},{default:a(()=>[(v(!0),f(_,null,C(e.data,o=>(v(),f(l,{key:o.value},{default:a(()=>[c(S(o.text),1)]),_:2},1024))),128))]),_:1},8,["value","onSearch","onChange"])}ee.render=gt;var _t=`<cn>
#### \u641C\u7D22\u6846
\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002
</cn>

<us>
#### Search Box
Search with remote data.
</us>
`,yt=`<template>
  <a-select
    show-search
    v-model:value="value"
    placeholder="input search text"
    style="width: 200px"
    :default-active-first-option="false"
    :show-arrow="false"
    :filter-option="false"
    :not-found-content="null"
    @search="handleSearch"
    @change="handleChange"
  >
    <a-select-option v-for="d in data" :key="d.value">
      {{ d.text }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import { defineComponent, ref } from 'vue';

let timeout: any;
let currentValue = '';

function fetch(value: string, callback: any) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const result = d.result;
          const data: any[] = [];
          result.forEach((r: any) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export default defineComponent({
  setup() {
    const data = ref<any[]>([]);
    const value = ref();

    const handleSearch = (val: string) => {
      fetch(val, (d: any[]) => (data.value = d));
    };
    const handleChange = (val: string) => {
      console.log(val);
      value.value = val;
      fetch(val, (d: any[]) => (data.value = d));
    };
    return {
      handleSearch,
      handleChange,
      data,
      value,
    };
  },
});
<\/script>
`,te=b({setup(){const e=u=>{console.log(`selected ${u}`)},t=()=>{console.log("blur")},r=()=>{console.log("focus")},p=(u,h)=>h.props.value.toLowerCase().indexOf(u.toLowerCase())>=0;return{value:g(void 0),filterOption:p,handleBlur:t,handleFocus:r,handleChange:e}}});const bt=c("Jack"),Ct=c("Lucy"),St=c("Tom");function $t(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),"show-search":"",placeholder:"Select a person","option-filter-prop":"children",style:{width:"200px"},"filter-option":e.filterOption,onFocus:e.handleFocus,onBlur:e.handleBlur,onChange:e.handleChange},{default:a(()=>[n(l,{value:"jack"},{default:a(()=>[bt]),_:1}),n(l,{value:"lucy"},{default:a(()=>[Ct]),_:1}),n(l,{value:"tom"},{default:a(()=>[St]),_:1})]),_:1},8,["value","filter-option","onFocus","onBlur","onChange"])}te.render=$t;var wt=`<cn>
#### \u5E26\u641C\u7D22\u6846
\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002
</cn>

<us>
#### Select with search field
Search the options while expanded.
</us>
`,kt=`<template>
  <a-select
    v-model:value="value"
    show-search
    placeholder="Select a person"
    option-filter-prop="children"
    style="width: 200px"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="tom">Tom</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(\`selected \${value}\`);
    };
    const handleBlur = () => {
      console.log('blur');
    };
    const handleFocus = () => {
      console.log('focus');
    };
    const filterOption = (input: string, option: any) => {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return {
      value: ref<string | undefined>(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
    };
  },
});
<\/script>
`;const ne=b({setup(){let e=0;const t=J({data:[],value:[],fetching:!1}),r=ge(p=>{console.log("fetching user",p),e+=1;const u=e;t.data=[],t.fetching=!0,fetch("https://randomuser.me/api/?results=5").then(h=>h.json()).then(h=>{if(u!==e)return;const l=h.results.map(s=>({text:`${s.name.first} ${s.name.last}`,value:s.login.username}));t.data=l,t.fetching=!1})},800);return V(t.value,()=>{t.data=[],t.fetching=!1}),L(N({},R(t)),{fetchUser:r})}});function Ot(e,t,r,p,u,h){const l=d("a-spin"),s=d("a-select-option"),o=d("a-select");return v(),f(o,{mode:"multiple","label-in-value":"",value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),placeholder:"Select users",style:{width:"100%"},"filter-option":!1,"not-found-content":e.fetching?void 0:null,onSearch:e.fetchUser},_e({default:a(()=>[(v(!0),f(_,null,C(e.data,m=>(v(),f(s,{key:m.value},{default:a(()=>[c(S(m.text),1)]),_:2},1024))),128))]),_:2},[e.fetching?{name:"notFoundContent",fn:a(()=>[n(l,{size:"small"})])}:void 0]),1032,["value","not-found-content","onSearch"])}ne.render=Ot;var It=ne,Ut=`<cn>
#### \u641C\u7D22\u7528\u6237
\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002
</cn>

<us>
#### Search and Select Users
A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.
</us>
`,xt=`<template>
  <a-select
    mode="multiple"
    label-in-value
    v-model:value="value"
    placeholder="Select users"
    style="width: 100%"
    :filter-option="false"
    :not-found-content="fetching ? undefined : null"
    @search="fetchUser"
  >
    <template v-if="fetching" #notFoundContent>
      <a-spin size="small" />
    </template>
    <a-select-option v-for="d in data" :key="d.value">
      {{ d.text }}
    </a-select-option>
  </a-select>
</template>
<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { debounce } from 'lodash-es';

export default defineComponent({
  setup() {
    let lastFetchId = 0;

    const state = reactive({
      data: [],
      value: [],
      fetching: false,
    });

    const fetchUser = debounce(value => {
      console.log('fetching user', value);
      lastFetchId += 1;
      const fetchId = lastFetchId;
      state.data = [];
      state.fetching = true;
      fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(body => {
          if (fetchId !== lastFetchId) {
            // for fetch callback order
            return;
          }
          const data = body.results.map(user => ({
            text: \`\${user.name.first} \${user.name.last}\`,
            value: user.login.username,
          }));
          state.data = data;
          state.fetching = false;
        });
    }, 800);

    watch(state.value, () => {
      state.data = [];
      state.fetching = false;
    });

    return {
      ...toRefs(state),
      fetchUser,
    };
  },
});
<\/script>
`,oe=b({setup(){return{handleChange:t=>{console.log(`selected ${t}`)},value1:g("lucy"),value2:g("lucy")}},components:{SmileOutlined:ye,MehOutlined:be}});const jt=c("Jack"),zt=c("Lucy"),Nt=c("Disabled"),Lt=c("yiminghe"),Vt=c("Lucy");function Ft(e,t,r,p,u,h){const l=d("smile-outlined"),s=d("a-select-option"),o=d("a-select"),m=d("meh-outlined");return v(),f(_,null,[n(o,{value:e.value1,"onUpdate:value":t[1]||(t[1]=i=>e.value1=i),style:{width:"120px"},onChange:e.handleChange},{suffixIcon:a(()=>[n(l)]),default:a(()=>[n(s,{value:"jack"},{default:a(()=>[jt]),_:1}),n(s,{value:"lucy"},{default:a(()=>[zt]),_:1}),n(s,{value:"disabled",disabled:""},{default:a(()=>[Nt]),_:1}),n(s,{value:"Yiminghe"},{default:a(()=>[Lt]),_:1})]),_:1},8,["value","onChange"]),n(o,{value:e.value2,"onUpdate:value":t[2]||(t[2]=i=>e.value2=i),style:{width:"120px"},disabled:""},{suffixIcon:a(()=>[n(m)]),default:a(()=>[n(s,{value:"lucy"},{default:a(()=>[Vt]),_:1})]),_:1},8,["value"])],64)}oe.render=Ft;var Pt=`<cn>
#### \u540E\u7F00\u56FE\u6807
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Suffix
Basic Usage
</us>
`,Tt=`<template>
  <a-select v-model:value="value1" style="width: 120px" @change="handleChange">
    <template #suffixIcon><smile-outlined /></template>
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="disabled" disabled>Disabled</a-select-option>
    <a-select-option value="Yiminghe">yiminghe</a-select-option>
  </a-select>
  <a-select v-model:value="value2" style="width: 120px" disabled>
    <template #suffixIcon><meh-outlined /></template>
    <a-select-option value="lucy">Lucy</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { SmileOutlined, MehOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(\`selected \${value}\`);
    };

    return {
      handleChange,
      value1: ref('lucy'),
      value2: ref('lucy'),
    };
  },
  components: {
    SmileOutlined,
    MehOutlined,
  },
});
<\/script>
`;const At=["Apples","Nails","Bananas","Helicopters"];var ae=b({setup(){const e=g([]),t=B(()=>At.filter(r=>!e.value.includes(r)));return{selectedItems:e,filteredOptions:t}}});function Dt(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{mode:"multiple",placeholder:"Inserted are removed",value:e.selectedItems,"onUpdate:value":t[1]||(t[1]=o=>e.selectedItems=o),style:{width:"100%"}},{default:a(()=>[(v(!0),f(_,null,C(e.filteredOptions,o=>(v(),f(l,{key:o,value:o},{default:a(()=>[c(S(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])}ae.render=Dt;var Jt=`<cn>
#### \u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879
\u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002
</cn>

<us>
#### Hide Already Selected
Hide already selected options in the dropdown.
</us>
`,Bt=`<template>
  <a-select
    mode="multiple"
    placeholder="Inserted are removed"
    v-model:value="selectedItems"
    style="width: 100%"
  >
    <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
export default defineComponent({
  setup() {
    const selectedItems = ref<string[]>([]);

    const filteredOptions = computed(() => OPTIONS.filter(o => !selectedItems.value.includes(o)));

    return {
      selectedItems,
      filteredOptions,
    };
  },
});
<\/script>
`;let Rt=0;var le=b({setup(){const e=g(["jack","lucy"]),t=g("lucy");return{items:e,value:t,addItem:()=>{console.log("addItem"),e.value.push(`New item ${Rt++}`)}}},components:{PlusOutlined:Ce,VNodes:(e,{attrs:t})=>t.vnodes}});const Mt=c(" Add item ");function Et(e,t,r,p,u,h){const l=d("v-nodes"),s=d("a-divider"),o=d("plus-outlined"),m=d("a-select-option"),i=d("a-select");return v(),f(i,{value:e.value,"onUpdate:value":t[3]||(t[3]=y=>e.value=y),style:{width:"120px"}},{dropdownRender:a(({menuNode:y})=>[n(l,{vnodes:y},null,8,["vnodes"]),n(s,{style:{margin:"4px 0"}}),n("div",{style:{padding:"4px 8px",cursor:"pointer"},onMousedown:t[1]||(t[1]=k=>k.preventDefault()),onClick:t[2]||(t[2]=(...k)=>e.addItem&&e.addItem(...k))},[n(o),Mt],32)]),default:a(()=>[(v(!0),f(_,null,C(e.items,y=>(v(),f(m,{key:y,value:y},{default:a(()=>[c(S(y),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])}le.render=Et;var Kt=`<cn>
#### \u6269\u5C55\u83DC\u5355
\u4F7F\u7528 \`dropdownRender\` \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002
</cn>

<us>
#### Custom dropdown
Customize the dropdown menu via \`dropdownRender\`.
</us>
`,Yt=`<template>
  <a-select v-model:value="value" style="width: 120px">
    <template #dropdownRender="{ menuNode: menu }">
      <v-nodes :vnodes="menu" />
      <a-divider style="margin: 4px 0" />
      <div
        style="padding: 4px 8px; cursor: pointer"
        @mousedown="e => e.preventDefault()"
        @click="addItem"
      >
        <plus-outlined />
        Add item
      </div>
    </template>
    <a-select-option v-for="item in items" :key="item" :value="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

let index = 0;
export default defineComponent({
  setup() {
    const items = ref(['jack', 'lucy']);
    const value = ref('lucy');

    const addItem = () => {
      console.log('addItem');
      items.value.push(\`New item \${index++}\`);
    };
    return {
      items,
      value,
      addItem,
    };
  },
  components: {
    PlusOutlined,
    VNodes: (_, { attrs }) => {
      return attrs.vnodes;
    },
  },
});
<\/script>
`,de=b({setup(){const e=g(["china"]);return V(e,t=>{console.log("selected:",t)}),{value:e}}});const Ht=n("span",{role:"img","aria-label":"China"},"\u{1F1E8}\u{1F1F3}",-1),Zt=c(" China (\u4E2D\u56FD) "),Gt=n("span",{role:"img","aria-label":"USA"},"\u{1F1FA}\u{1F1F8}",-1),Wt=c(" USA (\u7F8E\u56FD) "),qt=n("span",{role:"img","aria-label":"Japan"},"\u{1F1EF}\u{1F1F5}",-1),Qt=c(" Japan (\u65E5\u672C) "),Xt=n("span",{role:"img","aria-label":"Korea"},"\u{1F1F0}\u{1F1F7}",-1),en=c(" Korea (\u97E9\u56FD) ");function tn(e,t,r,p,u,h){const l=d("a-select-option"),s=d("a-select");return v(),f(s,{value:e.value,"onUpdate:value":t[1]||(t[1]=o=>e.value=o),mode:"multiple",style:{width:"100%"},placeholder:"select one country","option-label-prop":"label"},{default:a(()=>[n(l,{value:"china",label:"China"},{default:a(()=>[Ht,Zt]),_:1}),n(l,{value:"usa",label:"USA"},{default:a(()=>[Gt,Wt]),_:1}),n(l,{value:"japan",label:"Japan"},{default:a(()=>[qt,Qt]),_:1}),n(l,{value:"korea",label:"Korea"},{default:a(()=>[Xt,en]),_:1})]),_:1},8,["value"])}de.render=tn;var nn=`<cn>
#### \u5B9A\u5236\u56DE\u586B\u5185\u5BB9
\u4F7F\u7528 \`optionLabelProp\` \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 \`Option\` \u5C5E\u6027\u3002
</cn>

<us>
#### Custom selection render
Spacified the prop name of Option which will be rendered in select box.
</us>
`,on=`<template>
  <a-select
    v-model:value="value"
    mode="multiple"
    style="width: 100%"
    placeholder="select one country"
    option-label-prop="label"
  >
    <a-select-option value="china" label="China">
      <span role="img" aria-label="China">\u{1F1E8}\u{1F1F3}</span>
      China (\u4E2D\u56FD)
    </a-select-option>
    <a-select-option value="usa" label="USA">
      <span role="img" aria-label="USA">\u{1F1FA}\u{1F1F8}</span>
      USA (\u7F8E\u56FD)
    </a-select-option>
    <a-select-option value="japan" label="Japan">
      <span role="img" aria-label="Japan">\u{1F1EF}\u{1F1F5}</span>
      Japan (\u65E5\u672C)
    </a-select-option>
    <a-select-option value="korea" label="Korea">
      <span role="img" aria-label="Korea">\u{1F1F0}\u{1F1F7}</span>
      Korea (\u97E9\u56FD)
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(['china']);

    watch(value, val => {
      console.log(\`selected:\`, val);
    });

    return {
      value,
    };
  },
});
<\/script>
`;const an={class:"markdown-body"},ln=Se(`<h2>API</h2><pre><code class="language-html">&lt;a-select&gt;
  &lt;a-select-option value=&quot;lucy&quot;&gt;lucy&lt;/a-select-option&gt;
&lt;/a-select&gt;
</code></pre><h3>Select props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u652F\u6301\u6E05\u9664</td><td>boolean</td><td>false</td></tr><tr><td>autoClearSearchValue</td><td>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548\u3002</td><td>boolean</td><td>true</td></tr><tr><td>autoFocus</td><td>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td></tr><tr><td>defaultActiveFirstOption</td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td><td>boolean</td><td>true</td></tr><tr><td>defaultValue</td><td>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>dropdownClassName</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td>string</td><td>-</td></tr><tr><td>dropdownMatchSelectWidth</td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD</td><td>boolean</td><td>true</td></tr><tr><td>dropdownRender</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</td><td>(menuNode: VNode, props) =&gt; VNode</td><td>-</td></tr><tr><td>dropdownStyle</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td><td>object</td><td>-</td></tr><tr><td>dropdownMenuStyle</td><td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>-</td></tr><tr><td>filterOption</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>boolean or function(inputValue, option)</td><td>true</td></tr><tr><td>firstActiveValue</td><td>\u9ED8\u8BA4\u9AD8\u4EAE\u7684\u9009\u9879</td><td>string|string[]</td><td>-</td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td></tr><tr><td>labelInValue</td><td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{key: string, label: vNodes}</code> \u7684\u683C\u5F0F</td><td>boolean</td><td>false</td></tr><tr><td>maxTagCount</td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td>number</td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>slot/function(omittedValues)</td><td>-</td></tr><tr><td>maxTagTextLength</td><td>\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</td><td>number</td><td>-</td></tr><tr><td>mode</td><td>\u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E</td><td>\u2018default\u2019 | \u2018multiple\u2019 | \u2018tags\u2019 | \u2018combobox\u2019</td><td>-</td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>string|slot</td><td>\u2018Not Found\u2019</td></tr><tr><td>optionFilterProp</td><td>\u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 option \u5C5E\u6027\uFF0C\u5982\u8BBE\u7F6E\u4E3A children \u8868\u793A\u5BF9\u5185\u5D4C\u5185\u5BB9\u8FDB\u884C\u641C\u7D22</td><td>string</td><td>value</td></tr><tr><td>optionLabelProp</td><td>\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A <code>value</code>\u3002</td><td>string</td><td><code>children</code> \uFF08combobox \u6A21\u5F0F\u4E0B\u4E3A <code>value</code>\uFF09</td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td></tr><tr><td>showSearch</td><td>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</td><td>boolean</td><td>false</td></tr><tr><td>showArrow</td><td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td><td>boolean</td><td>true</td></tr><tr><td>size</td><td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td><td>string</td><td>default</td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>VNode | slot</td><td>-</td></tr><tr><td>removeIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td><td>VNode | slot</td><td>-</td></tr><tr><td>clearIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</td><td>VNode | slot</td><td>-</td></tr><tr><td>menuItemSelectedIcon</td><td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td><td>VNode | slot</td><td>-</td></tr><tr><td>tokenSeparators</td><td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td><td>string[]</td><td></td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td></tr><tr><td>options</td><td>options \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 selectOption \u8282\u70B9</td><td>array&lt;{value, label, [disabled, key, title]}&gt;</td><td>[]</td></tr><tr><td>defaultOpen</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td></tr><tr><td>open</td><td>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 <code>getPopupContainer={triggerNode =&gt; triggerNode.parentNode}</code> \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002</p></blockquote><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>change</td><td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\uFF08combobox \u6A21\u5F0F\u4E0B\uFF09\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value, option:Option/Array&lt;Option&gt;)</td></tr><tr><td>deselect</td><td>\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 multiple \u6216 tags \u6A21\u5F0F\u4E0B\u751F\u6548</td><td>function(value\uFF0Coption:Option)</td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>inputKeydown</td><td>\u952E\u76D8\u6309\u4E0B\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>mouseenter</td><td>\u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>mouseleave</td><td>\u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>popupScroll</td><td>\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03</td><td>function</td></tr><tr><td>search</td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td>function(value: string)</td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C</td><td>function(value, option:Option)</td></tr><tr><td>dropdownVisibleChange</td><td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td><td>function(open)</td></tr></tbody></table><h3>Select Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>blur()</td><td>\u53D6\u6D88\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3>Option props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td>\u548C value \u542B\u4E49\u4E00\u81F4\u3002\u5982\u679C Vue \u9700\u8981\u4F60\u8BBE\u7F6E\u6B64\u9879\uFF0C\u6B64\u9879\u503C\u4E0E value \u7684\u503C\u76F8\u540C\uFF0C\u7136\u540E\u53EF\u4EE5\u7701\u7565 value \u8BBE\u7F6E</td><td>string</td><td></td></tr><tr><td>title</td><td>\u9009\u4E2D\u8BE5 Option \u540E\uFF0CSelect \u7684 title</td><td>string</td><td>-</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009</td><td>string|number</td><td>-</td></tr><tr><td>class</td><td>Option \u5668\u7C7B\u540D</td><td>string</td><td>-</td></tr></tbody></table><h3>OptGroup props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>key</td><td></td><td>string</td><td>-</td></tr><tr><td>label</td><td>\u7EC4\u540D</td><td>string||function(h)|slot</td><td>\u65E0</td></tr></tbody></table><h2>FAQ</h2><h3>\u70B9\u51FB <code>dropdownRender</code> \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F</h3><p>\u770B\u4E0B <a href="/components/select-cn/#components-select-demo-custom-dropdown">dropdownRender \u4F8B\u5B50</a> \u91CC\u7684\u8BF4\u660E\u3002</p>`,16),dn={expose:[],setup(e){return(t,r)=>(v(),f("div",an,[ln]))}};var sn=dn;const se={cn:`# Select \u9009\u62E9\u5668
          \u4E0B\u62C9\u9009\u62E9\u5668\u3002
          ## \u4F55\u65F6\u4F7F\u7528
          - \u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002
          - \u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 [Radio](/ant-design/components/radio-cn/) \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002

          ## \u4EE3\u7801\u6F14\u793A`,us:`# Select
        Select component to select value from options.
        ## When To Use
        - A dropdown menu for displaying choices - an elegant alternative to the native \`<select>\` element.
        - Utilizing [Radio](/ant-design/components/radio/) is recommended when there are fewer total options (less than 5).
        ## Examples `};var pn={category:"Components",subtitle:"\u9009\u62E9\u5668",type:"Data Entry",title:"Select",render(){return n("div",{id:"components-select-demo"},[n(d("Md"),{cn:se.cn,us:se.us},null),n(d("demo-sort"),null,{default:()=>[n(d("demo-container"),{api:je,code:ze},{default:()=>[n(M,null,null)]}),n(d("demo-container"),{api:Je,code:Be},{default:()=>[n(E,null,null)]}),n(d("demo-container"),{api:Me,code:Ee},{default:()=>[n(K,null,null)]}),n(d("demo-container"),{api:Ye,code:He},{default:()=>[n(Y,null,null)]}),n(d("demo-container"),{api:qe,code:Qe},{default:()=>[n(H,null,null)]}),n(d("demo-container"),{api:et,code:tt},{default:()=>[n(Z,null,null)]}),n(d("demo-container"),{api:ot,code:at},{default:()=>[n(W,null,null)]}),n(d("demo-container"),{api:ct,code:pt},{default:()=>[n(q,null,null)]}),n(d("demo-container"),{api:_t,code:yt},{default:()=>[n(ee,null,null)]}),n(d("demo-container"),{api:wt,code:kt},{default:()=>[n(te,null,null)]}),n(d("demo-container"),{api:Ut,code:xt},{default:()=>[n(It,null,null)]}),n(d("demo-container"),{api:Pt,code:Tt},{default:()=>[n(oe,null,null)]}),n(d("demo-container"),{api:Jt,code:Bt},{default:()=>[n(ae,null,null)]}),n(d("demo-container"),{api:Kt,code:Yt},{default:()=>[n(le,null,null)]}),n(d("demo-container"),{api:nn,code:on},{default:()=>[n(de,null,null)]})]}),n(d("api"),null,{default:()=>[n(sn,null,null)]})])}};export{pn as default};

import{d as h,k as c,w as M,Y as s,bw as d,bx as u,by as l,b as o,D as m,ad as O,F as g,bV as _,bz as b,o as A,bO as T}from"./vendor.846be9ce.js";var y=h({setup(){const n=c("@afc163");return M(n,()=>{console.log("value",n)}),{value:n,onSelect:r=>{console.log("select",r)}}}});const U=m("afc163"),J=m("zombieJ"),P=m("yesmeck");function w(n,e,r,v,p,f){const a=s("a-mentions-option"),i=s("a-mentions");return d(),u(i,{autofocus:"",value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),onSelect:n.onSelect},{default:l(()=>[o(a,{value:"afc163"},{default:l(()=>[U]),_:1}),o(a,{value:"zombieJ"},{default:l(()=>[J]),_:1}),o(a,{value:"yesmeck"},{default:l(()=>[P]),_:1})]),_:1},8,["value","onSelect"])}y.render=w;var V=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### Basic usage
Basic usage.
</us>
`,D=`<template>
  <a-mentions autofocus v-model:value="value" @select="onSelect">
    <a-mentions-option value="afc163">afc163</a-mentions-option>
    <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
    <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
  </a-mentions>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('@afc163');
    watch(value, () => {
      console.log('value', value);
    });
    const onSelect = (option: { value: string }) => {
      console.log('select', option);
    };

    return {
      value,
      onSelect,
    };
  },
});
<\/script>
`,S=h({setup(){const n=c(""),e=c(!1),r=c([]),v=c(""),p=O(a=>{if(!a){r.value=[];return}fetch(`https://api.github.com/search/users?q=${a}`).then(i=>i.json()).then(({items:i=[]})=>{v.value===a&&(r.value=i.slice(0,10),e.value=!1)})},800);return{value:n,loading:e,users:r,loadGithubUsers:p,onSearch:a=>{v.value=a,e.value=!!a,console.log(!!a),r.value=[],console.log("Search:",a),p(a)}}}});function B(n,e,r,v,p,f){const a=s("a-mentions-option"),i=s("a-mentions");return d(),u(i,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),loading:n.loading,onSearch:n.onSearch},{default:l(()=>[(d(!0),u(g,null,_(n.users,({login:t,avatar_url:z})=>(d(),u(a,{key:t,value:t},{default:l(()=>[o("img",{src:z,alt:t,style:{width:"20px","margin-right":"8px"}},null,8,["src","alt"]),o("span",null,b(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","loading","onSearch"])}S.render=B;var N=`<cn>
#### \u5F02\u6B65\u52A0\u8F7D
\u5339\u914D\u5185\u5BB9\u5217\u8868\u4E3A\u5F02\u6B65\u8FD4\u56DE\u65F6\u3002
</cn>

<us>
#### Asynchronous loading
async.
</us>
`,j=`<template>
  <a-mentions v-model:value="value" :loading="loading" @search="onSearch">
    <a-mentions-option v-for="{ login, avatar_url: avatar } in users" :key="login" :value="login">
      <img :src="avatar" :alt="login" style="width: 20px; margin-right: 8px" />
      <span>{{ login }}</span>
    </a-mentions-option>
  </a-mentions>
</template>
<script lang="ts">
import { debounce } from 'lodash-es';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    const loading = ref<boolean>(false);
    const users = ref<string[]>([]);
    const search = ref<string>('');
    const loadGithubUsers = debounce((key: string) => {
      if (!key) {
        users.value = [];
        return;
      }

      fetch(\`https://api.github.com/search/users?q=\${key}\`)
        .then(res => res.json())
        .then(({ items = [] }) => {
          if (search.value !== key) return;
          users.value = items.slice(0, 10);
          loading.value = false;
        });
    }, 800);

    const onSearch = (searchValue: string) => {
      search.value = searchValue;
      loading.value = !!searchValue;
      console.log(!!searchValue);
      users.value = [];
      console.log('Search:', searchValue);
      loadGithubUsers(searchValue);
    };

    return {
      value,
      loading,
      users,
      loadGithubUsers,
      onSearch,
    };
  },
});
<\/script>
`;const F={"@":["afc163","zombiej","yesmeck"],"#":["1.0","2.0","3.0"]};var $=h({setup(){const n=c("@"),e=c(""),r=A(()=>F[n.value]||[]);return{value:e,options:r,onSearch:(p,f)=>{console.log(p,f),n.value=f}}}});function G(n,e,r,v,p,f){const a=s("a-mentions-option"),i=s("a-mentions");return d(),u(i,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),placeholder:"input @ to mention people, # to mention tag",prefix:["@","#"],onSearch:n.onSearch},{default:l(()=>[(d(!0),u(g,null,_(n.options,t=>(d(),u(a,{key:t,value:t},{default:l(()=>[m(b(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","onSearch"])}$.render=G;var R=`<cn>
#### \u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26
\u901A\u8FC7 prefix \u5C5E\u6027\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26\u3002\u9ED8\u8BA4\u4E3A @, \u53EF\u4EE5\u5B9A\u4E49\u4E3A\u6570\u7EC4\u3002
</cn>

<us>
#### Customize Trigger Token
Customize Trigger Token by \`prefix\` props. Default to \`@\`, \`Array<string>\` also supported.
</us>
`,E=`<template>
  <a-mentions
    v-model:value="value"
    placeholder="input @ to mention people, # to mention tag"
    :prefix="['@', '#']"
    @search="onSearch"
  >
    <a-mentions-option v-for="value in options" :key="value" :value="value">
      {{ value }}
    </a-mentions-option>
  </a-mentions>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
const MOCK_DATA: Record<string, string[]> = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
export default defineComponent({
  setup() {
    const prefix = ref<string>('@');
    const value = ref<string>('');
    const options = computed(() => {
      return MOCK_DATA[prefix.value] || [];
    });

    const onSearch = (_: string, val: string) => {
      console.log(_, val);
      prefix.value = val;
    };

    return {
      value,
      options,
      onSearch,
    };
  },
});
<\/script>
`,C=h({setup(){const n=c(""),e=c(""),r=c(["afc163","zombieJ","yesmeck"]);return{value1:n,value2:e,options:r}}});const K={style:{"margin-bottom":"10px"}};function L(n,e,r,v,p,f){const a=s("a-mentions-option"),i=s("a-mentions");return d(),u("div",null,[o("div",K,[o(i,{value:n.value1,"onUpdate:value":e[1]||(e[1]=t=>n.value1=t),placeholder:"this is disabled Mentions",disabled:""},{default:l(()=>[(d(!0),u(g,null,_(n.options,t=>(d(),u(a,{key:t,value:t},{default:l(()=>[m(b(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),o(i,{value:n.value2,"onUpdate:value":e[2]||(e[2]=t=>n.value2=t),placeholder:"this is readOnly a-mentions",readonly:""},{default:l(()=>[(d(!0),u(g,null,_(n.options,t=>(d(),u(a,{key:t,value:t},{default:l(()=>[m(b(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])}C.render=L;var q=`<cn>
#### \u65E0\u6548\u6216\u53EA\u8BFB
\u901A\u8FC7 \`disabled\` \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u751F\u6548\u3002\u901A\u8FC7 \`readOnly\` \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u53EA\u8BFB\u3002
</cn>

<us>
#### disabled or readOnly
Configurate disabled and readOnly.
</us>
`,H=`<template>
  <div>
    <div style="margin-bottom: 10px">
      <a-mentions v-model:value="value1" placeholder="this is disabled Mentions" disabled>
        <a-mentions-option v-for="value in options" :key="value" :value="value">
          {{ value }}
        </a-mentions-option>
      </a-mentions>
    </div>
    <a-mentions v-model:value="value2" placeholder="this is readOnly a-mentions" readonly>
      <a-mentions-option v-for="value in options" :key="value" :value="value">
        {{ value }}
      </a-mentions-option>
    </a-mentions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('');
    const value2 = ref<string>('');
    const options = ref<string[]>(['afc163', 'zombieJ', 'yesmeck']);
    return {
      value1,
      value2,
      options,
    };
  },
});
<\/script>
`,k=h({setup(){return{value:c("")}}});const W=m("afc163"),I=m("zombieJ"),Y=m("yesmeck");function Q(n,e,r,v,p,f){const a=s("a-mentions-option"),i=s("a-mentions");return d(),u(i,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),placement:"top"},{default:l(()=>[o(a,{value:"afc163"},{default:l(()=>[W]),_:1}),o(a,{value:"zombieJ"},{default:l(()=>[I]),_:1}),o(a,{value:"yesmeck"},{default:l(()=>[Y]),_:1})]),_:1},8,["value"])}k.render=Q;var X=`<cn>
#### \u5411\u4E0A\u5C55\u5F00
\u5411\u4E0A\u5C55\u5F00\u5EFA\u8BAE\u3002
</cn>

<us>
#### Placemen
Change the suggestions placement.
</us>
`,Z=`<template>
  <a-mentions v-model:value="value" placement="top">
    <a-mentions-option value="afc163">afc163</a-mentions-option>
    <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
    <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
  </a-mentions>
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
`;const nn={class:"markdown-body"},tn=T("<h2>API</h2><h3>Mentions</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u5F97\u7126\u70B9</td><td>boolean</td><td><code>false</code></td></tr><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u503C</td><td>string</td><td></td></tr><tr><td>filterOption</td><td>\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u903B\u8F91</td><td>false | (input: string, option: OptionProps) =&gt; boolean</td><td></td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>ReactNode</td><td>\u2018Not Found\u2019</td></tr><tr><td>placement</td><td>\u5F39\u51FA\u5C42\u5C55\u793A\u4F4D\u7F6E</td><td><code>top</code> | <code>bottom</code></td><td><code>bottom</code></td></tr><tr><td>prefix</td><td>\u8BBE\u7F6E\u89E6\u53D1\u5173\u952E\u5B57</td><td>string | string[]</td><td>\u2018@\u2019</td></tr><tr><td>split</td><td>\u8BBE\u7F6E\u9009\u4E2D\u9879\u524D\u540E\u5206\u9694\u7B26</td><td>string</td><td>\u2019 \u2019</td></tr><tr><td>validateSearch</td><td>\u81EA\u5B9A\u4E49\u89E6\u53D1\u9A8C\u8BC1\u903B\u8F91</td><td>(text: string, props: MentionsProps) =&gt; void</td><td></td></tr><tr><td>value(v-model)</td><td>\u8BBE\u7F6E\u503C</td><td>string</td><td></td></tr><tr><td>getPopupContainer</td><td>\u6307\u5B9A\u5EFA\u8BAE\u6846\u6302\u8F7D\u7684 HTML \u8282\u70B9</td><td>() =&gt; HTMLElement</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>change</td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>function(value: string)</td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>search</td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td>function(value: string, prefix: string)</td></tr><tr><td>select</td><td>\u9009\u62E9\u9009\u9879\u65F6\u89E6\u53D1</td><td>function(option: OptionProps, prefix: string)</td></tr></tbody></table><h3>Mentions \u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3>Option</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9009\u62E9\u65F6\u586B\u5145\u7684\u503C</td><td>string</td><td>\u2018\u2019</td></tr></tbody></table>",9),en={expose:[],setup(n){return(e,r)=>(d(),u("div",nn,[tn]))}};var on=en;const x={cn:`# Mentions\u63D0\u53CA (\u7248\u672C\uFF1A1.5.0+)
          \u63D0\u53CA\u7EC4\u4EF6\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u7528\u4E8E\u5728\u8F93\u5165\u4E2D\u63D0\u53CA\u67D0\u4EBA\u6216\u67D0\u4E8B\uFF0C\u5E38\u7528\u4E8E\u53D1\u5E03\u3001\u804A\u5929\u6216\u8BC4\u8BBA\u529F\u80FD\u3002

          ## \u4EE3\u7801\u6F14\u793A`,us:`# Mentions (Version: 1.5.0+)
      Mention component.
## When To Use
- When need to mention someone or something.
## Examples `};var sn={category:"Components",subtitle:"\u63D0\u53CA",type:"Data Entry",title:"Mentions",render(){return o("div",null,[o(s("Md"),{cn:x.cn,us:x.us},null),o(s("demo-sort"),null,{default:()=>[o(s("demo-container"),{api:V,code:D},{default:()=>[o(y,null,null)]}),o(s("demo-container"),{api:N,code:j},{default:()=>[o(S,null,null)]}),o(s("demo-container"),{api:R,code:E},{default:()=>[o($,null,null)]}),o(s("demo-container"),{api:q,code:H},{default:()=>[o(C,null,null)]}),o(s("demo-container"),{api:X,code:Z},{default:()=>[o(k,null,null)]})]}),o(s("api"),null,{default:()=>[o(on,null,null)]})])}};export{sn as default};

import{d as f,k as h,w as D,Y as o,bw as c,bx as i,S as P,bG as z,bH as B,b as n,F as w,bV as S,bI as L,D as C,bz as v,by as y,bO as M}from"./vendor.846be9ce.js";var T=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002\u901A\u8FC7 options \u8BBE\u7F6E\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90
</cn>

<us>
#### Basic Usage
Basic Usage, set options of autocomplete with \`options\` property.
</us>
`;const x=(e,t=1)=>({value:e.repeat(t)});var k=f({setup(){const e=h(""),t=h([]),p=l=>{console.log("searchText"),t.value=l?[x(l),x(l,2),x(l,3)]:[]},s=l=>{console.log("onSelect",l)};return D(e,()=>{console.log("value",e.value)}),{value:e,options:t,onSearch:p,onSelect:s}}});function F(e,t,p,s,l,r){const a=o("a-auto-complete");return c(),i(a,{value:e.value,"onUpdate:value":t[1]||(t[1]=d=>e.value=d),options:e.options,style:{width:"200px"},placeholder:"input here",select:e.onSelect,search:e.onSearch},null,8,["value","options","select","search"])}k.render=F;var K=`<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    v-bind:select="onSelect"
    v-bind:search="onSearch"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface MockVal {
  value: string;
}
const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat),
  };
};
export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref<MockVal[]>([]);
    const onSearch = (searchText: string) => {
      console.log('searchText');
      options.value = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    };
    const onSelect = (value: string) => {
      console.log('onSelect', value);
    };
    watch(value, () => {
      console.log('value', value.value);
    });
    return {
      value,
      options,
      onSearch,
      onSelect,
    };
  },
});
<\/script>

`,N=`<cn>
#### \u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE
\u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE
</cn>

<us>
#### Lookup-Patterns - Certain Category
Lookup-Patterns - Certain Category
</us>
`;const R=[{title:"Libraries",children:[{title:"AntDesign",count:1e4},{title:"AntDesign UI",count:10600}]},{title:"Solutions",children:[{title:"AntDesign UI FAQ",count:60100},{title:"AntDesign FAQ",count:30010}]},{title:"Articles",children:[{title:"AntDesign design language",count:1e5}]}];var $=f({setup(){return{value:h(""),options:R}},components:{SearchOutlined:P}});const g=L();z("data-v-101a6fe2");const E={class:"certain-category-search-wrapper",style:{width:"250px"}},j=n("a",{style:{float:"right"},href:"https://www.google.com/search?q=antd",target:"_blank",rel:"noopener noreferrer"}," more ",-1),Q={class:"certain-search-item-count"},W=n("a",{href:"https://www.google.com/search?q=ant-design-vue",target:"_blank",rel:"noopener noreferrer"}," View all results ",-1);B();const H=g((e,t,p,s,l,r)=>{const a=o("a-select-option"),d=o("a-select-opt-group"),u=o("search-outlined"),m=o("a-input"),V=o("a-auto-complete");return c(),i("div",E,[n(V,{value:e.value,"onUpdate:value":t[1]||(t[1]=_=>e.value=_),class:"certain-category-search","dropdown-class-name":"certain-category-search-dropdown","dropdown-match-select-width":!1,"dropdown-style":{width:"300px"},size:"large",style:{width:"100%"},placeholder:"input here","option-label-prop":"value"},{options:g(()=>[(c(!0),i(w,null,S(e.options,_=>(c(),i(d,{key:_.title},{label:g(()=>[n("span",null,[C(v(_.title)+" ",1),j])]),default:g(()=>[(c(!0),i(w,null,S(_.children,b=>(c(),i(a,{key:b.title,value:b.title},{default:g(()=>[C(v(b.title)+" ",1),n("span",Q,v(b.count)+" people",1)]),_:2},1032,["value"]))),128))]),_:2},1024))),128)),n(a,{key:"all",disabled:"",class:"show-all"},{default:g(()=>[W]),_:1})]),default:g(()=>[n(m,null,{suffix:g(()=>[n(u,{class:"certain-category-icon"})]),_:1})]),_:1},8,["value"])])});$.render=H;$.__scopeId="data-v-101a6fe2";var Y=`<template>
  <div class="certain-category-search-wrapper" style="width: 250px">
    <a-auto-complete
      v-model:value="value"
      class="certain-category-search"
      dropdown-class-name="certain-category-search-dropdown"
      :dropdown-match-select-width="false"
      :dropdown-style="{ width: '300px' }"
      size="large"
      style="width: 100%"
      placeholder="input here"
      option-label-prop="value"
    >
      <template #options>
        <a-select-opt-group v-for="group in options" :key="group.title">
          <template #label>
            <span>
              {{ group.title }}
              <a
                style="float: right"
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
              >
                more
              </a>
            </span>
          </template>
          <a-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
            {{ opt.title }}
            <span class="certain-search-item-count">{{ opt.count }} people</span>
          </a-select-option>
        </a-select-opt-group>
        <a-select-option key="all" disabled class="show-all">
          <a
            href="https://www.google.com/search?q=ant-design-vue"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all results
          </a>
        </a-select-option>
      </template>
      <a-input>
        <template #suffix><search-outlined class="certain-category-icon" /></template>
      </a-input>
    </a-auto-complete>
  </div>
</template>
<script lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
const options = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI FAQ',
        count: 60100,
      },
      {
        title: 'AntDesign FAQ',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];
export default defineComponent({
  setup() {
    return {
      value: ref(''),
      options,
    };
  },
  components: {
    SearchOutlined,
  },
});
<\/script>
<style>
.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
  max-height: 300px;
}
</style>

<style scoped>
.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-auto-complete)
  .ant-input-affix-wrapper
  .ant-input-suffix {
  right: 12px;
}
.certain-category-search-wrapper :deep(.certain-search-item-count) {
  position: absolute;
  color: #999;
  right: 16px;
}
.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-focused)
  .certain-category-icon {
  color: #108ee9;
}
.certain-category-search-wrapper :deep(.certain-category-icon) {
  color: #6e6e6e;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 16px;
}
</style>
`,G=`<cn>
#### \u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6
\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6\u3002
</cn>

<us>
#### Customize Input Component
Customize Input Component
</us>
`,A=f({setup(){const e=h(""),t=h([]);return{value:e,options:t,onSelect:r=>{console.log("onSelect",r)},handleSearch:r=>{t.value=r?[{value:r},{value:r+r},{value:r+r+r}]:[]},handleKeyPress:r=>{console.log("handleKeyPress",r)}}}});function J(e,t,p,s,l,r){const a=o("a-textarea"),d=o("a-auto-complete");return c(),i(d,{value:e.value,"onUpdate:value":t[1]||(t[1]=u=>e.value=u),options:e.options,style:{width:"200px"},search:e.handleSearch,select:e.onSelect},{default:y(()=>[n(a,{placeholder:"input here",class:"custom",style:{height:"50px"},keypress:e.handleKeyPress},null,8,["keypress"])]),_:1},8,["value","options","search","select"])}A.render=J;var X=`<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    v-bind:search="handleSearch"
    v-bind:select="onSelect"
  >
    <a-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      v-bind:keypress="handleKeyPress"
    />
  </a-auto-complete>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref<{ value: string }[]>([]);
    const onSelect = (value: string) => {
      console.log('onSelect', value);
    };
    const handleSearch = (value: string) => {
      options.value = !value
        ? []
        : [{ value }, { value: value + value }, { value: value + value + value }];
    };
    const handleKeyPress = (ev: KeyboardEvent) => {
      console.log('handleKeyPress', ev);
    };
    return {
      value,
      options,
      onSelect,
      handleSearch,
      handleKeyPress,
    };
  },
});
<\/script>
`,Z=`<cn>
#### \u4E0D\u533A\u5206\u5927\u5C0F\u5199
\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684 AutoComplete
</cn>

<us>
#### Non-case-sensitive AutoComplete
A non-case-sensitive AutoComplete
</us>
`,O=f({setup(){const e=(t,p)=>p.value.toUpperCase().indexOf(t.toUpperCase())>=0;return{value:h(""),options:h([{value:"Burns Bay Road"},{value:"Downing Street"},{value:"Wall Street"}]),filterOption:e}}});function ee(e,t,p,s,l,r){const a=o("a-auto-complete");return c(),i(a,{value:e.value,"onUpdate:value":t[1]||(t[1]=d=>e.value=d),options:e.options,style:{width:"200px"},placeholder:"input here","filter-option":e.filterOption},null,8,["value","options","filter-option"])}O.render=ee;var te=`<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    :filter-option="filterOption"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
}
export default defineComponent({
  setup() {
    const filterOption = (input: string, option: Option) => {
      return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
    };
    return {
      value: ref(''),
      options: ref<Option[]>([
        { value: 'Burns Bay Road' },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
      ]),
      filterOption,
    };
  },
});
<\/script>
`,ne=`<cn>
#### \u81EA\u5B9A\u4E49\u9009\u9879
\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F20\u9012slot="options"\u7684Option
</cn>

<us>
#### Customized
You could pass \`slot="options\` as children of \`AutoComplete\`, instead of using \`options\`\u3002
</us>
`,q=f({setup(){const e=h(""),t=h([]);return{value:e,result:t,handleSearch:s=>{let l;!s||s.indexOf("@")>=0?l=[]:l=["gmail.com","163.com","qq.com"].map(r=>`${s}@${r}`),t.value=l}}}});function oe(e,t,p,s,l,r){const a=o("a-select-option"),d=o("a-auto-complete");return c(),i(d,{value:e.value,"onUpdate:value":t[1]||(t[1]=u=>e.value=u),style:{width:"200px"},placeholder:"input here",search:e.handleSearch},{options:y(()=>[(c(!0),i(w,null,S(e.result,u=>(c(),i(a,{key:u},{default:y(()=>[C(v(u),1)]),_:2},1024))),128))]),_:1},8,["value","search"])}q.render=oe;var ae=`<template>
  <a-auto-complete
    v-model:value="value"
    style="width: 200px"
    placeholder="input here"
    v-bind:search="handleSearch"
  >
    <template #options>
      <a-select-option v-for="email in result" :key="email">
        {{ email }}
      </a-select-option>
    </template>
  </a-auto-complete>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    const result = ref<string[]>([]);
    const handleSearch = (val: string) => {
      let res: string[];
      if (!val || val.indexOf('@') >= 0) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => \`\${val}@\${domain}\`);
      }
      result.value = res;
    };

    return {
      value,
      result,
      handleSearch,
    };
  },
});
<\/script>
`,re=`<cn>
#### \u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE
\u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE
</cn>

<us>
#### Lookup-Patterns - Uncertain Category
Lookup-Patterns - Uncertain Category
</us>
`,U=f({setup(){const e=h(""),t=h([]),p=a=>{console.log("onSelect",a)},s=(a,d=0)=>Math.floor(Math.random()*(a-d+1))+d,l=a=>new Array(s(5)).join(".").split(".").map((d,u)=>({query:a,category:`${a}${u}`,count:s(200,100)}));return{value:e,options:t,onSelect:p,handleSearch:a=>{t.value=a?l(a):[]}}}});const le={class:"global-search-wrapper",style:{width:"300px"}},se={class:"global-search-item-count"};function de(e,t,p,s,l,r){const a=o("a-select-option"),d=o("a-input-search"),u=o("a-auto-complete");return c(),i("div",le,[n(u,{value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),class:"global-search",size:"large",style:{width:"100%"},"option-label-prop":"title",select:e.onSelect,search:e.handleSearch},{options:y(()=>[(c(!0),i(w,null,S(e.options,m=>(c(),i(a,{key:m.category,title:m.category},{default:y(()=>[C(" Found "+v(m.query)+" on ",1),n("a",{href:`https://s.taobao.com/search?q=${m.query}`,target:"_blank",rel:"noopener noreferrer"},v(m.category),9,["href"]),n("span",se,v(m.count)+" results",1)]),_:2},1032,["title"]))),128))]),default:y(()=>[n(d,{size:"large",placeholder:"input here",enterButton:""})]),_:1},8,["value","select","search"])])}U.render=de;var ce=`<template>
  <div class="global-search-wrapper" style="width: 300px">
    <a-auto-complete
      v-model:value="value"
      class="global-search"
      size="large"
      style="width: 100%"
      option-label-prop="title"
      v-bind:select="onSelect"
      v-bind:search="handleSearch"
    >
      <template #options>
        <a-select-option v-for="item in options" :key="item.category" :title="item.category">
          Found {{ item.query }} on
          <a
            :href="\`https://s.taobao.com/search?q=\${item.query}\`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.category }}
          </a>
          <span class="global-search-item-count">{{ item.count }} results</span>
        </a-select-option>
      </template>
      <a-input-search size="large" placeholder="input here" enterButton></a-input-search>
    </a-auto-complete>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  query: string;
  category: string;
  count: number;
}
export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref<Option[]>([]);
    const onSelect = (value: string) => {
      console.log('onSelect', value);
    };

    const getRandomInt = (max: number, min = 0) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const searchResult = (query: string): Option[] => {
      return new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => ({
          query,
          category: \`\${query}\${idx}\`,
          count: getRandomInt(200, 100),
        }));
    };
    const handleSearch = (val: string) => {
      options.value = val ? searchResult(val) : [];
    };
    return {
      value,
      options,
      onSelect,
      handleSearch,
    };
  },
});
<\/script>
<style>
.global-search-wrapper {
  padding-right: 50px;
}

.global-search {
  width: 100%;
}

.global-search.ant-select-auto-complete .ant-select-selection--single {
  margin-right: -46px;
}

.global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
  padding-right: 62px;
}

.global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.global-search-item {
  display: flex;
}

.global-search-item-desc {
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.global-search-item-count {
  flex: none;
}
</style>
`;const ie={class:"markdown-body"},pe=M(`<h2>API</h2><pre><code class="language-html">&lt;a-auto-complete v-model:value=&quot;value&quot; :options=&quot;options&quot; /&gt;
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u652F\u6301\u6E05\u9664, \u5355\u9009\u6A21\u5F0F\u6709\u6548</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>backfill</td><td>\u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>slot=\u201Cdefault\u201D (\u81EA\u5B9A\u4E49\u8F93\u5165\u6846)</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846</td><td>HTMLInputElement / HTMLTextAreaElement</td><td><code>&lt;Input /&gt;</code></td><td></td></tr><tr><td>options</td><td>\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90</td><td>slot | <a href="https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9">DataSourceItemType</a>[]</td><td></td><td></td></tr><tr><td>dropdownMenuStyle</td><td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td></td><td>1.5.0</td></tr><tr><td>defaultActiveFirstOption</td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultValue</td><td>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]| \u65E0</td><td></td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>filterOption</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>boolean or function(inputValue, option)</td><td>true</td><td></td></tr><tr><td>optionLabelProp</td><td>\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A <code>value</code>\u3002</td><td>string</td><td><code>children</code></td><td></td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u63D0\u793A</td><td>string | slot</td><td>-</td><td></td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|{ key: string, label: string|vNodes }|Array&lt;{ key: string, label: string|vNodes }&gt;</td><td>\u65E0</td><td></td></tr><tr><td>defaultOpen</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>open</td><td>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value)</td><td></td></tr><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td><td>function()</td><td></td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td><td>function()</td><td></td></tr><tr><td>search</td><td>\u641C\u7D22\u8865\u5168\u9879\u7684\u65F6\u5019\u8C03\u7528</td><td>function(value)</td><td></td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value \u503C</td><td>function(value, option)</td><td></td></tr><tr><td>dropdownVisibleChange</td><td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td><td>function(open)</td><td></td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td><td></td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td><td></td></tr></tbody></table>`,7),ue={expose:[],setup(e){return(t,p)=>(c(),i("div",ie,[pe]))}};var he=ue;const I={cn:`# AutoComplete \u81EA\u52A8\u5B8C\u6210
          \u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002
## \u4F55\u65F6\u4F7F\u7528
\u9700\u8981\u81EA\u52A8\u5B8C\u6210\u65F6\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# AutoComplete
        Autocomplete function of input field.
## When To Use
When there is a need for autocomplete functionality.
## Examples
`};var ge={category:"Components",subtitle:"\u81EA\u52A8\u5B8C\u6210",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",cols:2,title:"AutoComplete",render(){return n("div",null,[n(o("Md"),{cn:I.cn,us:I.us},null),n(o("demo-sort"),null,{default:()=>[n(o("demo-container"),{api:T,code:K},{default:()=>[n(k,null,null)]}),n(o("demo-container"),{api:N,code:Y},{default:()=>[n($,null,null)]}),n(o("demo-container"),{api:G,code:X},{default:()=>[n(A,null,null)]}),n(o("demo-container"),{api:Z,code:te},{default:()=>[n(O,null,null)]}),n(o("demo-container"),{api:ne,code:ae},{default:()=>[n(q,null,null)]}),n(o("demo-container"),{api:re,code:ce},{default:()=>[n(U,null,null)]})]}),n(o("api"),null,{default:()=>[n(he,null,null)]})])}};export{ge as default};

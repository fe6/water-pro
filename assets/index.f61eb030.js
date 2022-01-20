import{d as h,k as p,Y as l,bw as d,bx as r,by as f,F as j,bV as D,D as z,bz as b,b as a,bM as J,bO as M}from"./vendor.846be9ce.js";var P=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7701\u5E02\u533A\u7EA7\u8054\u3002
</cn>

<us>
#### Basic
Cascade selection box for selecting province/city/district.
</us>
`;const V=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var C=h({setup(){return{value:p([]),options:V}}});function U(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,placeholder:"Please select"},null,8,["value","options"])}C.render=U;var R=`<template>
  <a-cascader v-model:value="value" :options="options" placeholder="Please select" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
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
    return {
      value: ref<string[]>([]),
      options,
    };
  },
});
<\/script>
`,F=`<cn>
#### \u9009\u62E9\u5373\u6539\u53D8
\u8FD9\u79CD\u4EA4\u4E92\u5141\u8BB8\u53EA\u9009\u4E2D\u7236\u7EA7\u9009\u9879\u3002
</cn>

<us>
#### Change on select
Allow only select parent options.
</us>
`;const T=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var $=h({setup(){return{value:p([]),options:T}}});function A(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,"change-on-select":""},null,8,["value","options"])}$.render=A;var q=`<template>
  <a-cascader v-model:value="value" :options="options" change-on-select />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
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
    return {
      value: ref<string[]>([]),
      options,
    };
  },
});
<\/script>
`,B=`<cn>
#### \u81EA\u5B9A\u4E49\u5DF2\u9009\u9879
\u4F8B\u5982\u7ED9\u6700\u540E\u4E00\u9879\u52A0\u4E0A\u90AE\u7F16\u94FE\u63A5\u3002
</cn>

<us>
#### Custom render
For instance, add an external link after the selected value.
</us>
`;const I=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}];var y=h({setup(){const n=(e,s,i)=>{e.stopPropagation(),console.log("clicked",s,i)};return{value:p(["zhejiang","hangzhou","xihu"]),options:I,handleAreaClick:n}}});const E={key:0},X=z(" ) "),Y={key:1};function G(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,style:{width:"100%"}},{displayRender:f(({labels:t,selectedOptions:g})=>[(d(!0),r(j,null,D(t,(m,v)=>(d(),r("span",{key:g[v].value},[v===t.length-1?(d(),r("span",E,[z(b(m)+" ( ",1),a("a",{onClick:W=>n.handleAreaClick(W,m,g[v])},b(g[v].code),9,["onClick"]),X])):(d(),r("span",Y,b(m)+" /",1))]))),128))]),_:1},8,["value","options"])}y.render=G;var K=`<template>
  <a-cascader v-model:value="value" :options="options" style="width: 100%">
    <template #displayRender="{ labels, selectedOptions }">
      <span v-for="(label, index) in labels" :key="selectedOptions[index].value">
        <span v-if="index === labels.length - 1">
          {{ label }} (
          <a @click="e => handleAreaClick(e, label, selectedOptions[index])">
            {{ selectedOptions[index].code }}
          </a>
          )
        </span>
        <span v-else>{{ label }} /</span>
      </span>
    </template>
  </a-cascader>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
  code?: number;
  [key: string]: any;
}
const options: Option[] = [
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
            code: 752100,
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
            code: 453400,
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const handleAreaClick = (e: Event, label: string, option: Option) => {
      e.stopPropagation();
      console.log('clicked', label, option);
    };

    return {
      value: ref<string[]>(['zhejiang', 'hangzhou', 'xihu']),
      options,
      handleAreaClick,
    };
  },
});
<\/script>
`,Q=`<cn>
#### \u53EF\u4EE5\u81EA\u5B9A\u4E49\u663E\u793A
\u5207\u6362\u6309\u94AE\u548C\u7ED3\u679C\u5206\u5F00\u3002
</cn>

<us>
#### Custom trigger
Separate trigger button and result.
</us>
`;const nn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var _=h({setup(){const n=p([]),e=p("Unselect");return{value:n,text:e,options:nn,onChange:(i,u)=>{e.value=u.map(c=>c.label).join(", ")}}}});const en=a("a",{href:"#"},"Change city",-1);function an(n,e,s,i,u,c){const o=l("a-cascader");return d(),r("span",null,[z(b(n.text)+" \xA0 ",1),a(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,onChange:n.onChange},{default:f(()=>[en]),_:1},8,["value","options","onChange"])])}_.render=an;var tn=`<template>
  <span>
    {{ text }} &nbsp;
    <a-cascader v-model:value="value" :options="options" @change="onChange">
      <a href="#">Change city</a>
    </a-cascader>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
  code?: number;
  [key: string]: any;
}
const options: Option[] = [
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
    const value = ref<string[]>([]);
    const text = ref<string>('Unselect');

    const onChange = (value: string, selectedOptions: Option[]) => {
      text.value = selectedOptions.map(o => o.label).join(', ');
    };

    return {
      value,
      text,
      options,
      onChange,
    };
  },
});
<\/script>
`,ln=`<cn>
#### \u9ED8\u8BA4\u503C
\u9ED8\u8BA4\u503C\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6307\u5B9A\u3002
</cn>

<us>
#### Default value
Specifies default value by an array.
</us>
`;const O={data(){return{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},methods:{onChange(n){console.log(n)}}};function on(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{options:u.options,"default-value":["zhejiang","hangzhou","xihu"],onChange:c.onChange},null,8,["options","onChange"])}O.render=on;var sn=O,dn=`<template>
  <a-cascader
    :options="options"
    :default-value="['zhejiang', 'hangzhou', 'xihu']"
    @change="onChange"
  />
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
<\/script>
`,rn=`<cn>
#### \u7981\u7528\u9009\u9879
\u901A\u8FC7\u6307\u5B9A options \u91CC\u7684 \`disabled\` \u5B57\u6BB5\u3002
</cn>

<us>
#### Disabled option
Disable option by specifying the \`disabled\` property in \`options\`.
</us>
`;const un=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var S=h({setup(){return{value:p([]),options:un}}});function cn(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options},null,8,["value","options"])}S.render=cn;var pn=`<template>
  <a-cascader v-model:value="value" :options="options" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
  code?: number;
  [key: string]: any;
}
const options: Option[] = [
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
    disabled: true,
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
    return {
      value: ref<string[]>([]),
      options,
    };
  },
});
<\/script>
`,hn=`<cn>
#### \u79FB\u5165\u5C55\u5F00
\u901A\u8FC7\u79FB\u5165\u5C55\u5F00\u4E0B\u7EA7\u83DC\u5355\uFF0C\u70B9\u51FB\u5B8C\u6210\u9009\u62E9\u3002
</cn>

<us>
#### Hover
Hover to expand sub menu, click to select option.
</us>
`;const gn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var k=h({setup(){const n=({labels:e})=>e[e.length-1];return{value:p([]),options:gn,displayRender:n}}});function vn(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,"display-render":n.displayRender,"expand-trigger":"hover",placeholder:"Please select"},null,8,["value","options","display-render"])}k.render=vn;var bn=`<template>
  <a-cascader
    v-model:value="value"
    :options="options"
    :display-render="displayRender"
    expand-trigger="hover"
    placeholder="Please select"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
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
    const displayRender = ({ labels }: { labels: string[] }) => {
      return labels[labels.length - 1];
    };

    return {
      value: ref<string[]>([]),
      options,
      displayRender,
    };
  },
});
<\/script>
`,mn="<cn>\n#### \u52A8\u6001\u52A0\u8F7D\u9009\u9879\n\u4F7F\u7528 `loadData` \u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002\n> \u6CE8\u610F\uFF1A`loadData` \u4E0E `showSearch` \u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528\u3002\n</cn>\n\n<us>\n#### Load Options Lazily\nLoad options lazily with `loadData`.\n> Note: `loadData` cannot work with `showSearch`.\n</us>\n",H=h({setup(){const n=p([{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}]),e=s=>{const i=s[s.length-1];i.loading=!0,setTimeout(()=>{i.loading=!1,i.children=[{label:`${i.label} Dynamic 1`,value:"dynamic1"},{label:`${i.label} Dynamic 2`,value:"dynamic2"}],n.value=[...n.value]},1e3)};return{value:p([]),options:n,loadData:e}}});function fn(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,"load-data":n.loadData,placeholder:"Please select","change-on-select":""},null,8,["value","options","load-data"])}H.render=fn;var jn=`<template>
  <a-cascader
    v-model:value="value"
    :options="options"
    :load-data="loadData"
    placeholder="Please select"
    change-on-select
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  loading?: boolean;
  isLeaf?: boolean;
  children?: Option[];
}
export default defineComponent({
  setup() {
    const options = ref<Option[]>([
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        isLeaf: false,
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        isLeaf: false,
      },
    ]);

    const loadData = (selectedOptions: Option[]) => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;

      // load options lazily
      setTimeout(() => {
        targetOption.loading = false;
        targetOption.children = [
          {
            label: \`\${targetOption.label} Dynamic 1\`,
            value: 'dynamic1',
          },
          {
            label: \`\${targetOption.label} Dynamic 2\`,
            value: 'dynamic2',
          },
        ];
        options.value = [...options.value];
      }, 1000);
    };

    return {
      value: ref<string[]>([]),
      options,
      loadData,
    };
  },
});
<\/script>
`,zn=`<cn>
#### \u641C\u7D22
\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u9009\u9879\u5E76\u9009\u62E9\u3002
> \`Cascader[showSearch]\` \u6682\u4E0D\u652F\u6301\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u66F4\u591A\u4FE1\u606F\u89C1 [#5547](https://github.com/ant-design/ant-design/issues/5547)
</cn>

<us>
#### Search
Search and select options directly.
> Now, \`Cascader[showSearch]\` doesn't support search on server, more info [#5547](https://github.com/ant-design/ant-design/issues/5547)
</us>
`;const Cn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua men"}]}]}];var Z=h({setup(){const n=(e,s)=>s.some(i=>i.label.toLowerCase().indexOf(e.toLowerCase())>-1);return{value:p([]),options:Cn,filter:n}}});function $n(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),options:n.options,"show-search":{filter:n.filter},placeholder:"Please select"},null,8,["value","options","show-search"])}Z.render=$n;var yn=`<template>
  <a-cascader
    v-model:value="value"
    :options="options"
    :show-search="{ filter }"
    placeholder="Please select"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
}
const options: Option[] = [
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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const filter = (inputValue: string, path: Option[]) => {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    };

    return {
      value: ref<string[]>([]),
      options,
      filter,
    };
  },
});
<\/script>
`,_n=`<cn>
#### \u5927\u5C0F
\u4E0D\u540C\u5927\u5C0F\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002
</cn>

<us>
#### Size
Cascade selection box of different sizes.
</us>
`;const On=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var x=h({setup(){return{value:p([]),options:On}}});const Sn=a("br",null,null,-1),kn=a("br",null,null,-1),Hn=a("br",null,null,-1),Zn=a("br",null,null,-1),xn=a("br",null,null,-1),Ln=a("br",null,null,-1);function Nn(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(j,null,[a(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),size:"large",options:n.options},null,8,["value","options"]),Sn,kn,a(o,{value:n.value,"onUpdate:value":e[2]||(e[2]=t=>n.value=t),options:n.options},null,8,["value","options"]),Hn,Zn,a(o,{value:n.value,"onUpdate:value":e[3]||(e[3]=t=>n.value=t),size:"small",options:n.options},null,8,["value","options"]),xn,Ln],64)}x.render=Nn;var wn=`<template>
  <a-cascader v-model:value="value" size="large" :options="options" />
  <br />
  <br />
  <a-cascader v-model:value="value" :options="options" />
  <br />
  <br />
  <a-cascader v-model:value="value" size="small" :options="options" />
  <br />
  <br />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
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
    return {
      value: ref<string[]>([]),
      options,
    };
  },
});
<\/script>
`,Wn=`<cn>
#### \u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D
\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D\u3002
</cn>

<us>
#### Custom Field Names
Custom Field Names.
</us>
`;const Dn=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}];var L=h({setup(){return{value:p([]),options:Dn}}});function Jn(n,e,s,i,u,c){const o=l("a-cascader");return d(),r(o,{value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t),"field-names":{label:"name",value:"code",children:"items"},options:n.options,placeholder:"Please select"},null,8,["value","options"])}L.render=Jn;var Mn=`<template>
  <a-cascader
    v-model:value="value"
    :field-names="{ label: 'name', value: 'code', children: 'items' }"
    :options="options"
    placeholder="Please select"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Option {
  code: string;
  name: string;
  disabled?: boolean;
  items?: Option[];
  [key: string]: any;
}
const options: Option[] = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    return {
      value: ref<string[]>([]),
      options,
    };
  },
});
<\/script>
`,Pn=`<cn>
#### \u540E\u7F00\u56FE\u6807
\u7701\u5E02\u533A\u7EA7\u8054\u3002
</cn>

<us>
#### Suffix
Cascade selection box for selecting province/city/district.
</us>
`;const Vn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var N=h({components:{SmileOutlined:J},setup(){return{value1:p([]),value2:p([]),options:Vn}}});function Un(n,e,s,i,u,c){const o=l("smile-outlined"),t=l("a-cascader");return d(),r(j,null,[a(t,{value:n.value1,"onUpdate:value":e[1]||(e[1]=g=>n.value1=g),style:{"margin-top":"1rem"},options:n.options,placeholder:"Please select"},{suffixIcon:f(()=>[a(o,{class:"test"})]),_:1},8,["value","options"]),a(t,{value:n.value2,"onUpdate:value":e[2]||(e[2]=g=>n.value2=g),"suffix-icon":"ab",style:{"margin-top":"1rem"},options:n.options,placeholder:"Please select"},null,8,["value","options"])],64)}N.render=Un;var Rn=`<template>
  <a-cascader
    v-model:value="value1"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
  >
    <template #suffixIcon><smile-outlined class="test" /></template>
  </a-cascader>
  <a-cascader
    v-model:value="value2"
    suffix-icon="ab"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
  />
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
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
  components: {
    SmileOutlined,
  },
  setup() {
    return {
      value1: ref<string[]>([]),
      value2: ref<string[]>([]),
      options,
    };
  },
});
<\/script>
`;const Fn={class:"markdown-body"},Tn=M(`<h2>API</h2><pre><code class="language-html">&lt;a-cascader :options=&quot;options&quot; @change=&quot;onChange&quot; /&gt;
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u662F\u5426\u652F\u6301\u6E05\u9664</td><td>boolean</td><td>true</td></tr><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>changeOnSelect</td><td>\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A</td><td>boolean</td><td>false</td></tr><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td><td>string[] | number[]</td><td>[]</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>displayRender</td><td>\u9009\u62E9\u540E\u5C55\u793A\u7684\u6E32\u67D3\u51FD\u6570,\u53EF\u4F7F\u7528 slot=\u201CdisplayRender\u201D \u548C slot-scope=\u201C{labels, selectedOptions}\u201D</td><td><code>({labels, selectedOptions}) =&gt; vNode</code></td><td><code>labels =&gt; labels.join(&#39; / &#39;)</code></td></tr><tr><td>expandTrigger</td><td>\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 \u2018click\u2019 \u548C \u2018hover\u2019</td><td>string</td><td>\u2018click\u2019</td></tr><tr><td>fieldNames</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label name children \u7684\u5B57\u6BB5</td><td>object</td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td></tr><tr><td>loadData</td><td>\u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u9009\u9879\uFF0C\u65E0\u6CD5\u4E0E <code>showSearch</code> \u4E00\u8D77\u4F7F\u7528</td><td><code>(selectedOptions) =&gt; void</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>string</td><td>\u2018Not Found\u2019</td></tr><tr><td>options</td><td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td><td>object</td><td>-</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2018\u8BF7\u9009\u62E9\u2019</td></tr><tr><td>popupClassName</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td>string</td><td>-</td></tr><tr><td>popupStyle</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F</td><td>object</td><td>{}</td></tr><tr><td>popupPlacement</td><td>\u6D6E\u5C42\u9884\u8BBE\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottomRight</code> <code>topLeft</code> <code>topRight</code></td><td>Enum</td><td><code>bottomLeft</code></td></tr><tr><td>popupVisible</td><td>\u63A7\u5236\u6D6E\u5C42\u663E\u9690</td><td>boolean</td><td>-</td></tr><tr><td>showSearch</td><td>\u5728\u9009\u62E9\u6846\u4E2D\u663E\u793A\u641C\u7D22\u6846</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>string | VNode | slot</td><td>-</td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u9009\u4E2D\u9879</td><td>string[] | number[]</td><td>-</td></tr></tbody></table><p><code>showSearch</code> \u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5176\u4E2D\u7684\u5B57\u6BB5\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>filter</td><td>\u63A5\u6536 <code>inputValue</code> <code>path</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>path</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false\u3002</td><td><code>function(inputValue, path): boolean</code></td><td></td></tr><tr><td>limit</td><td>\u641C\u7D22\u7ED3\u679C\u5C55\u793A\u6570\u91CF</td><td>number | false</td><td>50</td></tr><tr><td>matchInputWidth</td><td>\u641C\u7D22\u7ED3\u679C\u5217\u8868\u662F\u5426\u4E0E\u8F93\u5165\u6846\u540C\u5BBD</td><td>boolean</td><td></td></tr><tr><td>render</td><td>\u7528\u4E8E\u6E32\u67D3 filter \u540E\u7684\u9009\u9879,\u53EF\u4F7F\u7528 slot=\u201CshowSearchRender\u201D \u548C slot-scope=\u201C{inputValue, path}\u201D</td><td><code>function({inputValue, path}): vNode</code></td><td></td></tr><tr><td>sort</td><td>\u7528\u4E8E\u6392\u5E8F filter \u540E\u7684\u9009\u9879</td><td><code>function(a, b, inputValue)</code></td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u5B8C\u6210\u540E\u7684\u56DE\u8C03</td><td><code>(value, selectedOptions) =&gt; void</code></td><td>-</td></tr><tr><td>popupVisibleChange</td><td>\u663E\u793A/\u9690\u85CF\u6D6E\u5C42\u7684\u56DE\u8C03</td><td><code>(value) =&gt; void</code></td><td>-</td></tr><tr><td>search</td><td>\u8F93\u5165\u6846\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td><code>(value) =&gt; void</code></td><td>-</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u9700\u8981\u83B7\u5F97\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u53C2\u8003 react \u7EC4\u4EF6\u7684\u5B9E\u73B0 <a href="https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17">china-division</a>\u3002</p></blockquote>`,10),An={expose:[],setup(n){return(e,s)=>(d(),r("div",Fn,[Tn]))}};var qn=An;const w={cn:`# Cascader \u7EA7\u8054\u9009\u62E9
          \u7EA7\u8054\u9009\u62E9\u6846\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002
- \u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002
- \u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Cascader
          Cascade selection box.
## When To Use
- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.
- Chooses cascade items in one float layer for better user experience.
## Examples
          `};var In={category:"Components",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",title:"Cascader",subtitle:"\u7EA7\u8054\u9009\u62E9",render(){return a("div",{id:"components-cascader-demo"},[a(l("Md"),{cn:w.cn,us:w.us},null),a(l("demo-sort"),null,{default:()=>[a(l("demo-container"),{api:P,code:R},{default:()=>[a(C,null,null)]}),a(l("demo-container"),{api:F,code:q},{default:()=>[a($,null,null)]}),a(l("demo-container"),{api:B,code:K},{default:()=>[a(y,null,null)]}),a(l("demo-container"),{api:Q,code:tn},{default:()=>[a(_,null,null)]}),a(l("demo-container"),{api:ln,code:dn},{default:()=>[a(sn,null,null)]}),a(l("demo-container"),{api:rn,code:pn},{default:()=>[a(S,null,null)]}),a(l("demo-container"),{api:hn,code:bn},{default:()=>[a(k,null,null)]}),a(l("demo-container"),{api:mn,code:jn},{default:()=>[a(H,null,null)]}),a(l("demo-container"),{api:zn,code:yn},{default:()=>[a(Z,null,null)]}),a(l("demo-container"),{api:_n,code:wn},{default:()=>[a(x,null,null)]}),a(l("demo-container"),{api:Wn,code:Mn},{default:()=>[a(L,null,null)]}),a(l("demo-container"),{api:Pn,code:Rn},{default:()=>[a(N,null,null)]})]}),a(l("api"),null,{default:()=>[a(qn,null,null)]})])}};export{In as default};

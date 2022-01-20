import{d as m,Y as r,bw as l,bx as c,k as u,by as D,D as L,bz as _,bO as C,b as a}from"./vendor.846be9ce.js";const T=[{name:"\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E",id:190},{name:"water",id:290}];var p=m({setup(){return{tagDatas:T}}});function $(t,e,n,o,s,i){const d=r("a-tag-group");return l(),c(d,{value:t.tagDatas},null,8,["value"])}p.render=$;var y=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### basic
basic.
</us>
`,F=`<template>
  <a-tag-group :value="tagDatas" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const tagDatas = [
  {
    name: '\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E',
    id: 190
  },
  {
    name: 'water',
    id: 290
  }
];

export default defineComponent({
  setup() {
    return {
      tagDatas,
    };
  },
});
<\/script>
`;const x=[{name:"\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E",id:190},{name:"water",id:290}];var v=m({setup(){const t=u(!1),e=u(!1),n=u(x.slice());return{createDatas:n,createLoading:t,removeLoading:e,createChange:(o,s)=>{s==="add"&&(t.value=!0,setTimeout(()=>{t.value=!1,n.value.push({name:o,id:Number((Math.random()*10).toFixed(0))})},1e3)),s==="remove"&&(e.value=!0,setTimeout(()=>{e.value=!1;const i=n.value.findIndex(d=>d.name===o);n.value.splice(i,1)},1e3))}}}});function S(t,e,n,o,s,i){const d=r("a-tag-group");return l(),c(d,{value:t.createDatas,"onUpdate:value":e[1]||(e[1]=g=>t.createDatas=g),createable:"",closable:"",createLoading:t.createLoading,removeLoading:t.removeLoading,onChange:t.createChange},null,8,["value","createLoading","removeLoading","onChange"])}v.render=S;var B=`<cn>
#### \u6DFB\u52A0
\u6DFB\u52A0\u3002
</cn>

<us>
#### add
add.
</us>
`,I=`<template>
  <a-tag-group
    v-model:value="createDatas"
    createable
    closable
    :createLoading="createLoading"
    :removeLoading="removeLoading"
    @change="createChange"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagDatas = [
  {
    name: '\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E',
    id: 190
  },
  {
    name: 'water',
    id: 290
  }
];

export default defineComponent({
  setup() {
    const createLoading = ref(false);
    const removeLoading = ref(false);
    const createDatas = ref(tagDatas.slice());
    return {
      createDatas,
      createLoading,
      removeLoading,
      createChange: (name: string, eventeType: string) => {
        if (eventeType === 'add') {
          createLoading.value = true;
          setTimeout(() => {
            createLoading.value = false;
            createDatas.value.push({
              name,
              id: Number((Math.random() * 10).toFixed(0))
            });
          }, 1000);
        }
        if (eventeType === 'remove') {
          removeLoading.value = true;
          setTimeout(() => {
            removeLoading.value = false;
            const itemIdex = createDatas.value.findIndex((item: Recordable) => item.name === name);
            createDatas.value.splice(itemIdex, 1);
          }, 1000);
        }
      },
    };
  },
});
<\/script>
`;const w=[{name:"\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E",id:190},{name:"water",id:290}];var f=m({setup(){const t=u(!1),e=u(!1),n=u(w.slice());return{createDatas:n,createLoading:t,removeLoading:e,createChange:(o,s)=>{s==="add"&&(t.value=!0,setTimeout(()=>{t.value=!1,n.value.push({name:o,id:Number((Math.random()*10).toFixed(0))})},1e3)),s==="remove"&&(e.value=!0,setTimeout(()=>{e.value=!1;const i=n.value.findIndex(d=>d.name===o);n.value.splice(i,1)},1e3))}}}});function N(t,e,n,o,s,i){const d=r("a-tag-group");return l(),c(d,{value:t.createDatas,"onUpdate:value":e[1]||(e[1]=g=>t.createDatas=g),createable:"",closable:"",createLoading:t.createLoading,removeLoading:t.removeLoading,onChange:t.createChange,disabled:""},null,8,["value","createLoading","removeLoading","onChange"])}f.render=N;var E=`<cn>
#### \u7981\u7528
\u7981\u7528\u3002
</cn>

<us>
#### disabled
disabled.
</us>
`,k=`<template>
  <a-tag-group
    v-model:value="createDatas"
    createable
    closable
    :createLoading="createLoading"
    :removeLoading="removeLoading"
    @change="createChange"
    disabled
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagDatas = [
  {
    name: '\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E',
    id: 190
  },
  {
    name: 'water',
    id: 290
  },
];

export default defineComponent({
  setup() {
    const createLoading = ref(false);
    const removeLoading = ref(false);
    const createDatas = ref(tagDatas.slice());
    return {
      createDatas,
      createLoading,
      removeLoading,
      createChange: (name: string, eventeType: string) => {
        if (eventeType === 'add') {
          createLoading.value = true;
          setTimeout(() => {
            createLoading.value = false;
            createDatas.value.push({
              name,
              id: Number((Math.random() * 10).toFixed(0))
            });
          }, 1000);
        }
        if (eventeType === 'remove') {
          removeLoading.value = true;
          setTimeout(() => {
            removeLoading.value = false;
            const itemIdex = createDatas.value.findIndex((item: Recordable) => item.name === name);
            createDatas.value.splice(itemIdex, 1);
          }, 1000);
        }
      },
    };
  },
});
<\/script>
`;const M=[{name:"\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E",id:190},{name:"water",id:290},{name:"\u69B4\u83B2",id:390},{name:"\u5C71\u836F",id:490},{name:"\u6D17\u624B\u6DB2",id:590},{name:"\u5FEB\u624B",id:690}];var h=m({setup(){return{tagDatas:M}}});function O(t,e,n,o,s,i){const d=r("a-tag-group");return l(),c(d,{value:t.tagDatas},{more:D(()=>[L(" +"+_(t.tagDatas.length-4),1)]),_:1},8,["value"])}h.render=O;var A=`<cn>
#### slot
slot\u3002
</cn>

<us>
#### slot
slot.
</us>
`,V=`<template>
  <a-tag-group
    :value="tagDatas"
  >
    <template #more>
      +{{tagDatas.length - 4}}
    </template>
  </a-tag-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const tagDatas = [
  {
    name: '\u8FD9\u662F\u5F88\u957F\u7684\u6807\u7B7E',
    id: 190
  },
  {
    name: 'water',
    id: 290
  },
  {
    name: '\u69B4\u83B2',
    id: 390
  },
  {
    name: '\u5C71\u836F',
    id: 490
  },
  {
    name: '\u6D17\u624B\u6DB2',
    id: 590
  },
  {
    name: '\u5FEB\u624B',
    id: 690
  }
];

export default defineComponent({
  setup() {
    return {
      tagDatas,
    };
  },
});
<\/script>
`;const G={class:"markdown-body"},P=C("<h2>API</h2><h3>Tag</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u4EE5\u5173\u95ED</td><td>boolean</td><td>false</td><td></td></tr><tr><td>maxTagTextLength</td><td>\u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B972\u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6</td><td>number</td><td>4</td><td></td></tr><tr><td>maxTagCount</td><td>\u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709</td><td>number</td><td>4</td><td></td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>false</td><td></td></tr><tr><td>createable</td><td>\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE</td><td>boolean</td><td>false</td><td></td></tr><tr><td>createInputable</td><td>\u662F\u5426\u8F93\u5165\u6846\u76F4\u63A5\u521B\u5EFA</td><td>boolean</td><td>true</td><td></td></tr><tr><td>createLoading</td><td>\u521B\u5EFA\u662F\u5426\u52A0\u8F7D\u4E2D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>removeLoading</td><td>\u70B9\u51FB\u5220\u9664 icon \u662F\u5426\u52A0\u8F7D\u4E2D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>closeEmitAble</td><td>\u521B\u5EFA\u7684\u65F6\u5019 input \u5931\u53BB\u7126\u70B9\u6216\u8005\u56DE\u8F66\u65F6\u5019\u5BF9 input \u7684\u64CD\u4F5C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>nameLabel</td><td>\u663E\u793A\u6807\u7B7E\u540D\u5B57\u7684\u5B57\u6BB5</td><td>string</td><td>name</td><td></td></tr><tr><td>createPlaceholder</td><td>\u6DFB\u52A0\u6807\u7B7E\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u6DFB\u52A0\u6807\u7B7E</td><td></td></tr><tr><td>color</td><td>\u6807\u7B7E\u989C\u8272</td><td>string</td><td>blue</td><td></td></tr><tr><td>tagStyle</td><td>\u6807\u7B7E\u6837\u5F0F</td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>className</td><td>\u6700\u5916\u5C42\u7684 class \u5B9A\u5236</td><td>array | string</td><td>-</td><td></td></tr><tr><td>createIcon</td><td>type\u4E0D\u662Fselect\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A+icon</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createBordered</td><td>type\u4E0D\u662Fselect\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u8FB9\u6846\u5185\u8FB9\u8DDD</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>showSelected</td><td>type\u4E0D\u662Fselect\u6A21\u5F0F\uFF0C\u662F\u5426\u663E\u793A\u5DF2\u9009</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td>3.27.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close-click</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>(e) =&gt; void</td></tr><tr><td>create-click</td><td>\u70B9\u51FB\u6DFB\u52A0\u89E6\u53D1</td><td>(e) =&gt; void</td></tr><tr><td>change</td><td>\u8F93\u5165\u6846\u56DE\u8F66\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A close</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5F53\u524D\u5173\u95ED\u7684\u503C\uFF0C eventType \u4E3A remove</td><td>(name, eventType) =&gt; void</td></tr></tbody></table>",5),U={expose:[],setup(t){return(e,n)=>(l(),c("div",G,[P]))}};var R=U;const b={cn:`# TagGroup \u6807\u7B7E\u7EC4

    \u6807\u7B7E\u7684\u5FEB\u6377\u5C01\u88C5

## \u4F55\u65F6\u4F7F\u7528

- \u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u5C55\u793A
- \u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u9690\u85CF
- \u9700\u8981\u521B\u5EFA\u6807\u7B7E

    ## \u4EE3\u7801\u6F14\u793A`,us:`# TagGroup
TODO

## When To Use

TODO

    ## Examples `};var z={category:"Components",subtitle:"\u6807\u7B7E\u7EC4",type:"Data Display",title:"TagGroup",render(){return a("div",{id:"components-tag-demo"},[a(r("Md"),{cn:b.cn,us:b.us},null),a(r("demo-sort"),null,{default:()=>[a(r("demo-container"),{api:y,code:F},{default:()=>[a(p,null,null)]}),a(r("demo-container"),{api:B,code:I},{default:()=>[a(v,null,null)]}),a(r("demo-container"),{api:A,code:V},{default:()=>[a(h,null,null)]}),a(r("demo-container"),{api:E,code:k},{default:()=>[a(f,null,null)]})]}),a(r("api"),null,{default:()=>[a(R,null,null)]})])}};export{z as default};

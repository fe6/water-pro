import{d as h,k as v,w as f,Y as a,bw as c,bx as i,by as r,b as t,bz as T,c8 as x,bM as C,bO as D}from"./vendor.846be9ce.js";import{f as $}from"./main.f0d1f01d.js";var y=h({setup(){const e=v();return f(e,()=>{console.log(e.value)}),{value:e}}});const I=t("b",{style:{color:"#08c"}},"sss",-1);function P(e,d,o,m,s,u){const n=a("a-tree-select-node"),l=a("a-tree-select");return c(),i(l,{value:e.value,"onUpdate:value":d[1]||(d[1]=p=>e.value=p),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":""},{default:r(()=>[t(n,{key:"0-1",value:"parent 1",title:"parent 1"},{default:r(()=>[t(n,{key:"0-1-1",value:"parent 1-0",title:"parent 1-0"},{default:r(()=>[t(n,{key:"random",value:"leaf1",title:"my leaf"}),t(n,{key:"random1",value:"leaf2",title:"your leaf"})]),_:1}),t(n,{key:"random2",value:"parent 1-1",title:"parent 1-1"},{default:r(()=>[t(n,{key:"random3",value:"sss"},{title:r(()=>[I]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])}y.render=P;var H=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
The most basic usage.
</us>
`,E=`<template>
  <a-tree-select
    v-model:value="value"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    tree-default-expand-all
  >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <a-tree-select-node key="random" value="leaf1" title="my leaf" />
        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <template #title><b style="color: #08c">sss</b></template>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>();
    watch(value, () => {
      console.log(value.value);
    });
    return {
      value,
    };
  },
});
<\/script>
`;const O=$.SHOW_PARENT,A=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}];var g=h({setup(){const e=v(["0-0-0"]);return f(e,()=>{console.log(e.value)}),{value:e,treeData:A,SHOW_PARENT:O}}});function L(e,d,o,m,s,u){const n=a("a-tree-select");return c(),i(n,{value:e.value,"onUpdate:value":d[1]||(d[1]=l=>e.value=l),style:{width:"100%"},"tree-data":e.treeData,"tree-checkable":"","allow-clear":"","show-checked-strategy":e.SHOW_PARENT,"search-placeholder":"Please select"},null,8,["value","tree-data","show-checked-strategy"])}g.render=L;var W=`<cn>
#### \u53EF\u52FE\u9009
\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002
</cn>

<us>
#### Checkable
Multiple and checkable.
</us>
`,R=`<template>
  <a-tree-select
    v-model:value="value"
    style="width: 100%"
    :tree-data="treeData"
    tree-checkable
    allow-clear
    :show-checked-strategy="SHOW_PARENT"
    search-placeholder="Please select"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { TreeSelect } from '@fe6/water-pro';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

interface TreeDataItem {
  value: string;
  key: string;
  title?: string;
  disabled?: boolean;
  children?: TreeDataItem[];
}

const treeData: TreeDataItem[] = [
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
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const value = ref<string[]>(['0-0-0']);

    watch(value, () => {
      console.log(value.value);
    });

    return {
      value,
      treeData,
      SHOW_PARENT,
    };
  },
});
<\/script>
`,b=h({setup(){const e=v([]);return f(e,()=>{console.log("select",e.value)}),{value:e}}});const M=t("b",{style:{color:"#08c"}},"sss",-1);function V(e,d,o,m,s,u){const n=a("a-tree-select-node"),l=a("a-tree-select");return c(),i(l,{"show-search":"",style:{width:"100%"},value:e.value,"onUpdate:value":d[1]||(d[1]=p=>e.value=p),"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"",multiple:"","tree-default-expand-all":""},{default:r(()=>[t(n,{key:"0-1",value:"parent 1",title:"parent 1"},{default:r(()=>[t(n,{key:"0-1-1",value:"parent 1-0",title:"parent 1-0"},{default:r(()=>[t(n,{key:"random",value:"leaf1",title:"my leaf"}),t(n,{key:"random1",value:"leaf2",title:"your leaf"})]),_:1}),t(n,{key:"random2",value:"parent 1-1",title:"parent 1-1"},{default:r(()=>[t(n,{key:"random3",value:"sss"},{title:r(()=>[M]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])}b.render=V;var U=`<cn>
#### \u591A\u9009
\u591A\u9009\u7684\u6811\u9009\u62E9\u3002
</cn>

<us>
#### Multiple Selection
Multiple selection usage.
</us>
`,F=`<template>
  <a-tree-select
    show-search
    style="width: 100%"
    v-model:value="value"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    multiple
    tree-default-expand-all
  >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
        <a-tree-select-node key="random" value="leaf1" title="my leaf" />
        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <template #title><b style="color: #08c">sss</b></template>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<string[]>([]);

    watch(value, () => {
      console.log('select', value.value);
    });

    return {
      value,
    };
  },
});
<\/script>
`;const j=[{title:"Node1",value:"0-0",key:"0-0",children:[{value:"0-0-1",key:"0-0-1",slots:{title:"title"}},{title:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{title:"Node2",value:"0-1",key:"0-1"}];var k=h({setup(){const e=v();return f(e,()=>{console.log(e.value)}),{value:e,treeData:j}}});const B={key:0,style:{color:"#08c"}};function q(e,d,o,m,s,u){const n=a("a-tree-select");return c(),i(n,{value:e.value,"onUpdate:value":d[1]||(d[1]=l=>e.value=l),style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"Please select","tree-default-expand-all":""},{title:r(({key:l,value:p})=>[l==="0-0-1"?(c(),i("span",B,"Child Node1 "+T(p),1)):x("v-if",!0)]),_:1},8,["value","tree-data"])}k.render=q;var K=`<cn>
#### \u4ECE\u6570\u636E\u76F4\u63A5\u751F\u6210
\u4F7F\u7528 \`treeData\` \u628A JSON \u6570\u636E\u76F4\u63A5\u751F\u6210\u6811\u7ED3\u6784\u3002
</cn>

<us>
#### Generate form tree data
The tree structure can be populated using \`treeData\` property. This is a quick and easy way to provide the tree content.
</us>
`,X=`<template>
  <a-tree-select
    v-model:value="value"
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    :tree-data="treeData"
    placeholder="Please select"
    tree-default-expand-all
  >
    <template #title="{ key, value }">
      <span style="color: #08c" v-if="key === '0-0-1'">Child Node1 {{ value }}</span>
    </template>
  </a-tree-select>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface TreeDataItem {
  value: string;
  key: string;
  title?: string;
  slots?: Record<string, string>;
  children?: TreeDataItem[];
}

const treeData: TreeDataItem[] = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        value: '0-0-1',
        key: '0-0-1',
        slots: {
          title: 'title',
        },
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
];
export default defineComponent({
  setup() {
    const value = ref<string>();

    watch(value, () => {
      console.log(value.value);
    });
    return {
      value,
      treeData,
    };
  },
});
<\/script>
`,_=h({components:{SmileOutlined:C},setup(){return{value:v()}}});const z=t("b",{style:{color:"#08c"}},"sss",-1);function G(e,d,o,m,s,u){const n=a("SmileOutlined"),l=a("a-tree-select-node"),p=a("a-tree-select");return c(),i(p,{value:e.value,"onUpdate:value":d[1]||(d[1]=S=>e.value=S),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":""},{suffixIcon:r(()=>[t(n)]),default:r(()=>[t(l,{value:"parent 1",title:"parent 1",key:"0-1"},{default:r(()=>[t(l,{value:"parent 1-0",title:"parent 1-0",key:"0-1-1"},{default:r(()=>[t(l,{value:"leaf1",title:"my leaf",key:"random"}),t(l,{value:"leaf2",title:"your leaf",key:"random1"})]),_:1}),t(l,{key:"random2",value:"parent 1-1",title:"parent 1-1"},{default:r(()=>[t(l,{key:"random3",value:"sss"},{title:r(()=>[z]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])}_.render=G;var J=`<cn>
#### \u540E\u7F00\u56FE\u6807
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Suffix
The most basic usage.
</us>
`,Y=`<template>
  <a-tree-select
    v-model:value="value"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="Please select"
    allow-clear
    tree-default-expand-all
  >
    <template #suffixIcon><SmileOutlined /></template>
    <a-tree-select-node value="parent 1" title="parent 1" key="0-1">
      <a-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
        <a-tree-select-node value="leaf1" title="my leaf" key="random" />
        <a-tree-select-node value="leaf2" title="your leaf" key="random1" />
      </a-tree-select-node>
      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
        <a-tree-select-node key="random3" value="sss">
          <template #title><b style="color: #08c">sss</b></template>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select-node>
  </a-tree-select>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const value = ref<string>();

    return {
      value,
    };
  },
});
<\/script>
`,w=h({setup(){const e=v(),d=v([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]);f(e,()=>{console.log(e.value)});const o=(s,u=!1)=>{const n=Math.random().toString(36).substring(2,6);return{id:n,pId:s,value:n,title:u?"Tree Node":"Expand to load",isLeaf:u}};return{value:e,treeData:d,genTreeNode:o,onLoadData:s=>(console.log(s),new Promise(u=>{const{id:n}=s.dataRef;setTimeout(()=>{d.value=d.value.concat([o(n,!1),o(n,!0)]),u()},300)}))}}});function Q(e,d,o,m,s,u){const n=a("a-tree-select");return c(),i(n,{value:e.value,"onUpdate:value":d[1]||(d[1]=l=>e.value=l),"tree-data-simple-mode":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"Please select","load-data":e.onLoadData},null,8,["value","tree-data","load-data"])}w.render=Q;var Z=`<cn>
#### \u5F02\u6B65\u52A0\u8F7D
\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u3002
</cn>

<us>
#### Asynchronous loading
Asynchronous loading tree node.
</us>
`,ee=`<template>
  <a-tree-select
    v-model:value="value"
    tree-data-simple-mode
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    :tree-data="treeData"
    placeholder="Please select"
    :load-data="onLoadData"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface TreeDataItem {
  id: string | number;
  pId: number;
  value: string;
  title: string;
  isLeaf?: boolean;
}

export default defineComponent({
  setup() {
    const value = ref<string>();
    const treeData = ref<TreeDataItem[]>([
      { id: 1, pId: 0, value: '1', title: 'Expand to load' },
      { id: 2, pId: 0, value: '2', title: 'Expand to load' },
      { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
    ]);

    watch(value, () => {
      console.log(value.value);
    });

    const genTreeNode = (parentId: number, isLeaf = false): TreeDataItem => {
      const random = Math.random().toString(36).substring(2, 6);
      return {
        id: random,
        pId: parentId,
        value: random,
        title: isLeaf ? 'Tree Node' : 'Expand to load',
        isLeaf,
      };
    };
    const onLoadData = (treeNode: any) => {
      console.log(treeNode);
      return new Promise((resolve: (value?: unknown) => void) => {
        const { id } = treeNode.dataRef;
        setTimeout(() => {
          treeData.value = treeData.value.concat([genTreeNode(id, false), genTreeNode(id, true)]);
          resolve();
        }, 300);
      });
    };
    return {
      value,
      treeData,
      genTreeNode,
      onLoadData,
    };
  },
});
<\/script>
`;const te={class:"markdown-body"},ne=D("<h2>API</h2><h3>Tree props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultValue</td><td>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</td><td>string/string[]</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownClassName</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td>string</td><td>-</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD</td><td>boolean</td><td>true</td><td></td></tr><tr><td>dropdownStyle</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>filterTreeNode</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u7528 treeNodeFilterProp \u7684\u503C\u4F5C\u4E3A\u8981\u7B5B\u9009\u7684 TreeNode \u7684\u5C5E\u6027\u503C</td><td>boolean|Function(inputValue: string, treeNode: TreeNode) (\u51FD\u6570\u9700\u8981\u8FD4\u56DE bool \u503C)</td><td>Function</td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>labelInValue</td><td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{value: string, label: VNode, halfChecked(treeCheckStrictly \u65F6\u6709\u6548): string[] }</code> \u7684\u683C\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>loadData</td><td>\u5F02\u6B65\u52A0\u8F7D\u6570\u636E</td><td>function(node)</td><td>-</td><td></td></tr><tr><td>maxTagCount</td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td>number</td><td>-</td><td></td></tr><tr><td>maxTagPlaceholder</td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>slot/function(omittedValues)</td><td>-</td><td></td></tr><tr><td>multiple</td><td>\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E treeCheckable \u65F6\u81EA\u52A8\u53D8\u4E3A true\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>searchPlaceholder</td><td>\u641C\u7D22\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>searchValue(v-model)</td><td>\u641C\u7D22\u6846\u7684\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>search</code> \u4E8B\u4EF6\u83B7\u53D6\u7528\u6237\u8F93\u5165</td><td>string</td><td>-</td><td></td></tr><tr><td>treeIcon</td><td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showCheckedStrategy</td><td>\u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002<code>TreeSelect.SHOW_ALL</code>: \u663E\u793A\u6240\u6709\u9009\u4E2D\u8282\u70B9(\u5305\u62EC\u7236\u8282\u70B9). <code>TreeSelect.SHOW_PARENT</code>: \u53EA\u663E\u793A\u7236\u8282\u70B9(\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6). \u9ED8\u8BA4\u53EA\u663E\u793A\u5B50\u8282\u70B9.</td><td>enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }</td><td>TreeSelect.SHOW_CHILD</td><td></td></tr><tr><td>showSearch</td><td>\u5728\u4E0B\u62C9\u4E2D\u663E\u793A\u641C\u7D22\u6846(\u4EC5\u5728\u5355\u9009\u6A21\u5F0F\u4E0B\u751F\u6548)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>size</td><td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td><td>string</td><td>\u2018default\u2019</td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>treeCheckable</td><td>\u663E\u793A checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>treeCheckStrictly</td><td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09\uFF0C\u4F1A\u4F7F\u5F97 <code>labelInValue</code> \u5F3A\u5236\u4E3A true</td><td>boolean</td><td>false</td><td></td></tr><tr><td>treeData</td><td>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08value \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>array&lt;{value, label, children, [disabled, disableCheckbox, selectable]}&gt;</td><td>[]</td><td></td></tr><tr><td>replaceFields</td><td>\u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td><td>object</td><td>{children:\u2018children\u2019, title:\u2018title\u2019, key:\u2018key\u2019, value: \u2018value\u2019 }</td><td></td></tr><tr><td>treeDataSimpleMode</td><td>\u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: [{id:1, pId:0, value:\u20181\u2019, label:\u201Ctest1\u201D,\u2026},\u2026], <code>pId</code> \u662F\u7236\u8282\u70B9\u7684 id)</td><td>false|Array&lt;{ id: string, pId: string, rootPId: null }&gt;</td><td>false</td><td></td></tr><tr><td>treeDefaultExpandAll</td><td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>treeDefaultExpandedKeys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>treeExpandedKeys(v-model)</td><td>\u8BBE\u7F6E\u5C55\u5F00\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>treeNodeFilterProp</td><td>\u8F93\u5165\u9879\u8FC7\u6EE4\u5BF9\u5E94\u7684 treeNode \u5C5E\u6027</td><td>string</td><td>\u2018value\u2019</td><td></td></tr><tr><td>treeNodeLabelProp</td><td>\u4F5C\u4E3A\u663E\u793A\u7684 prop \u8BBE\u7F6E</td><td>string</td><td>\u2018title\u2019</td><td></td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string/string[]</td><td>-</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u6811\u8282\u70B9\u65F6\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value, label, extra)</td></tr><tr><td>search</td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td>function(value: string)</td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</td><td>function(value, node, extra)</td></tr><tr><td>treeExpand</td><td>\u5C55\u5F00\u8282\u70B9\u65F6\u8C03\u7528</td><td>function(expandedKeys)</td></tr></tbody></table><h3>Tree \u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3>TreeNode props</h3><blockquote><p>\u5EFA\u8BAE\u4F7F\u7528 treeData \u6765\u4EE3\u66FF TreeNode\uFF0C\u514D\u53BB\u624B\u5DE5\u6784\u9020\u9EBB\u70E6</p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>selectable</td><td>\u662F\u5426\u53EF\u9009</td><td>boolean</td><td>true</td><td></td></tr><tr><td>checkable</td><td>\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox</td><td>boolean</td><td>-</td><td>1.5.0</td></tr><tr><td>disableCheckbox</td><td>\u7981\u6389 checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>isLeaf</td><td>\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>\u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>string | number</td><td>-</td><td></td></tr><tr><td>title</td><td>\u6811\u8282\u70B9\u663E\u793A\u7684\u5185\u5BB9</td><td>string|slot</td><td>\u2018\u2014\u2019</td><td></td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>string</td><td>-</td><td></td></tr><tr><td>scopedSlots</td><td>\u4F7F\u7528 treeData \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E\u652F\u6301 slot \u7684\u5C5E\u6027\uFF0C\u5982 <code>scopedSlots: { title: &#39;XXX&#39;}</code></td><td>object</td><td>-</td><td></td></tr></tbody></table>",10),de={expose:[],setup(e){return(d,o)=>(c(),i("div",te,[ne]))}};var ae=de;const N={cn:`# \u6811\u578B\u9009\u62E9\u63A7\u4EF6
  ## \u4F55\u65F6\u4F7F\u7528

\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002

        ## \u4EE3\u7801\u6F14\u793A`,us:`# TreeSelect
  ## When To Use

\`TreeSelect\` is similar to \`Select\`, but the values are provided in a tree like structure.
Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.
## Examples
  `};var oe={category:"Components",subtitle:"\u6811\u9009\u62E9",type:"Data Entry",title:"TreeSelect",render(){return t("div",null,[t(a("Md"),{cn:N.cn,us:N.us},null),t(a("demo-sort"),null,{default:()=>[t(a("demo-container"),{api:H,code:E},{default:()=>[t(y,null,null)]}),t(a("demo-container"),{api:W,code:R},{default:()=>[t(g,null,null)]}),t(a("demo-container"),{api:U,code:F},{default:()=>[t(b,null,null)]}),t(a("demo-container"),{api:K,code:X},{default:()=>[t(k,null,null)]}),t(a("demo-container"),{api:J,code:Y},{default:()=>[t(_,null,null)]}),t(a("demo-container"),{api:Z,code:ee},{default:()=>[t(w,null,null)]})]}),t(a("api"),null,{default:()=>[t(ae,null,null)]})])}};export{oe as default};

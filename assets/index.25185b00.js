import{d as b,k as h,Y as i,bw as f,bx as y,b as s,q as v,by as S,D as j,bz as $,cn as _,o as B,c8 as F,bI as U,bO as J}from"./vendor.846be9ce.js";const D=[];for(let e=0;e<20;e++)D.push({key:e.toString(),title:`content${e+1}`,description:`description of content${e+1}`,disabled:e%3<1});const Y=D.filter(e=>+e.key%3>1).map(e=>e.key);var I=b({data(){const e=h(!1),o=h(Y),r=h(["1","4"]);return{mockData:D,targetKeys:o,selectedKeys:r,disabled:e,handleChange:(t,n,a)=>{o.value=t,console.log("targetKeys: ",t),console.log("direction: ",n),console.log("moveKeys: ",a)},handleSelectChange:(t,n)=>{r.value=[...t,...n],console.log("sourceSelectedKeys: ",t),console.log("targetSelectedKeys: ",n)},handleScroll:(t,n)=>{console.log("direction:",t),console.log("target:",n.target)}}}});function W(e,o,r,g,d,c){const t=i("a-transfer"),n=i("a-switch");return f(),y("div",null,[s(t,{"data-source":e.mockData,titles:["Source","Target"],"target-keys":e.targetKeys,"selected-keys":e.selectedKeys,render:a=>a.title,disabled:e.disabled,onChange:e.handleChange,onSelectChange:e.handleSelectChange,onScroll:e.handleScroll},null,8,["data-source","target-keys","selected-keys","render","disabled","onChange","onSelectChange","onScroll"]),s(n,{"un-checked-children":"enabled","checked-children":"disabled",checked:e.disabled,"onUpdate:checked":o[1]||(o[1]=a=>e.disabled=a),style:{"margin-top":"16px"}},null,8,["checked"])])}I.render=W;var G="<cn>\n#### \u57FA\u672C\u4F7F\u7528\n\u6700\u57FA\u672C\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u4E86 `dataSource`\u3001`targetKeys`\u3001\u6BCF\u884C\u7684\u6E32\u67D3\u51FD\u6570 `render` \u4EE5\u53CA\u56DE\u8C03\u51FD\u6570 `change` `selectChange` `scroll` \u7684\u7528\u6CD5\u3002\n</cn>\n\n<us>\n#### Basic\nThe most basic usage of `Transfer` involves providing the source data and target keys arrays, plus the rendering and some callback functions.\n</us>\n",H=`<template>
  <div>
    <a-transfer
      :data-source="mockData"
      :titles="['Source', 'Target']"
      :target-keys="targetKeys"
      :selected-keys="selectedKeys"
      :render="item => item.title"
      :disabled="disabled"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @scroll="handleScroll"
    />
    <a-switch
      un-checked-children="enabled"
      checked-children="disabled"
      v-model:checked="disabled"
      style="margin-top: 16px"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}
const mockData: MockData[] = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: \`content\${i + 1}\`,
    description: \`description of content\${i + 1}\`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
export default defineComponent({
  data() {
    const disabled = ref<boolean>(false);

    const targetKeys = ref<string[]>(oriTargetKeys);

    const selectedKeys = ref<string[]>(['1', '4']);

    const handleChange = (nextTargetKeys: string[], direction: string, moveKeys: string[]) => {
      targetKeys.value = nextTargetKeys;
      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    };
    const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
      selectedKeys.value = [...sourceSelectedKeys, ...targetSelectedKeys];
      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    };
    const handleScroll = (direction: string, e: Event) => {
      console.log('direction:', direction);
      console.log('target:', e.target);
    };

    return {
      mockData,
      targetKeys,
      selectedKeys,
      disabled,
      handleChange,
      handleSelectChange,
      handleScroll,
    };
  },
});
<\/script>
`,M=b({setup(){const e=h([]),o=h([]);v(()=>{r()});const r=()=>{const t=[],n=[];for(let a=0;a<20;a++){const l={key:a.toString(),title:`content${a+1}`,description:`description of content${a+1}`,chosen:Math.random()*2>1};l.chosen&&t.push(l.key),n.push(l)}e.value=n,o.value=t};return{mockData:e,targetKeys:o,filterOption:(t,n)=>n.description.indexOf(t)>-1,handleChange:(t,n,a)=>{console.log(t,n,a),o.value=t},handleSearch:(t,n)=>{console.log("search:",t,n)}}}});function L(e,o,r,g,d,c){const t=i("a-transfer");return f(),y(t,{"data-source":e.mockData,"show-search":"","filter-option":e.filterOption,"target-keys":e.targetKeys,render:n=>n.title,onChange:e.handleChange,onSearch:e.handleSearch},null,8,["data-source","filter-option","target-keys","render","onChange","onSearch"])}M.render=L;var Q=`<cn>
#### \u5E26\u641C\u7D22\u6846
\u5E26\u641C\u7D22\u6846\u7684\u7A7F\u68AD\u6846\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u51FD\u6570\u3002
</cn>

<us>
#### Search
Transfer with a search box.
</us>
`,X=`<template>
  <a-transfer
    :data-source="mockData"
    show-search
    :filter-option="filterOption"
    :target-keys="targetKeys"
    :render="item => item.title"
    @change="handleChange"
    @search="handleSearch"
  />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
export default defineComponent({
  setup() {
    const mockData = ref<MockData[]>([]);

    const targetKeys = ref<string[]>([]);
    onMounted(() => {
      getMock();
    });
    const getMock = () => {
      const keys = [];
      const mData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: \`content\${i + 1}\`,
          description: \`description of content\${i + 1}\`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          keys.push(data.key);
        }
        mData.push(data);
      }
      mockData.value = mData;
      targetKeys.value = keys;
    };
    const filterOption = (inputValue: string, option: MockData) => {
      return option.description.indexOf(inputValue) > -1;
    };
    const handleChange = (keys: string[], direction: string, moveKeys: string[]) => {
      console.log(keys, direction, moveKeys);
      targetKeys.value = keys;
    };

    const handleSearch = (dir: string, value: string) => {
      console.log('search:', dir, value);
    };
    return {
      mockData,
      targetKeys,
      filterOption,
      handleChange,
      handleSearch,
    };
  },
});
<\/script>
`,q=b({setup(){const e=h([]),o=h([]);v(()=>{r()});const r=()=>{const d=[],c=[];for(let t=0;t<20;t++){const n={key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,chosen:Math.random()*2>1};n.chosen&&d.push(n.key),c.push(n)}e.value=c,o.value=d};return{mockData:e,targetKeys:o,handleChange:(d,c,t)=>{o.value=d,console.log(d,c,t)},getMock:r}}});const Z=j("reload"),ee=s("span",null,"\u6CA1\u6570\u636E",-1);function te(e,o,r,g,d,c){const t=i("a-button"),n=i("a-transfer");return f(),y(n,{"data-source":e.mockData,"show-search":"","list-style":{width:"250px",height:"300px"},operations:["to right","to left"],"target-keys":e.targetKeys,render:a=>`${a.title}-${a.description}`,onChange:e.handleChange},{footer:S(()=>[s(t,{size:"small",style:{float:"right",margin:"5px"},onClick:e.getMock},{default:S(()=>[Z]),_:1},8,["onClick"])]),notFoundContent:S(()=>[ee]),_:1},8,["data-source","target-keys","render","onChange"])}q.render=te;var ne=`<cn>
#### \u9AD8\u7EA7\u7528\u6CD5
\u7A7F\u68AD\u6846\u9AD8\u7EA7\u7528\u6CD5\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u6587\u6848\uFF0C\u53EF\u5B9A\u5236\u5BBD\u9AD8\uFF0C\u53EF\u5BF9\u5E95\u90E8\u8FDB\u884C\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002
</cn>

<us>
#### Advanced
You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.
</us>
`,oe=`<template>
  <a-transfer
    :data-source="mockData"
    show-search
    :list-style="{
      width: '250px',
      height: '300px',
    }"
    :operations="['to right', 'to left']"
    :target-keys="targetKeys"
    :render="item => \`\${item.title}-\${item.description}\`"
    @change="handleChange"
  >
    <template #footer>
      <a-button size="small" style="float: right; margin: 5px" @click="getMock">reload</a-button>
    </template>
    <template #notFoundContent>
      <span>\u6CA1\u6570\u636E</span>
    </template>
  </a-transfer>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
export default defineComponent({
  setup() {
    const mockData = ref<MockData[]>([]);

    const targetKeys = ref<string[]>([]);
    onMounted(() => {
      getMock();
    });
    const getMock = () => {
      const keys = [];
      const mData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: \`content\${i + 1}\`,
          description: \`description of content\${i + 1}\`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          keys.push(data.key);
        }
        mData.push(data);
      }
      mockData.value = mData;
      targetKeys.value = keys;
    };
    const handleChange = (keys: string[], direction: string, moveKeys: string[]) => {
      targetKeys.value = keys;
      console.log(keys, direction, moveKeys);
    };
    return {
      mockData,
      targetKeys,
      handleChange,
      getMock,
    };
  },
});
<\/script>
`,A=b({setup(){const e=h([]),o=h([]);v(()=>{r()});const r=()=>{const d=[],c=[];for(let t=0;t<20;t++){const n={key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,chosen:Math.random()*2>1};n.chosen&&d.push(n.key),c.push(n)}e.value=c,o.value=d};return{mockData:e,targetKeys:o,handleChange:(d,c,t)=>{o.value=d,console.log(d,c,t)},getMock:r}}});const ae={class:"custom-item",style:{color:"red"}};function se(e,o,r,g,d,c){const t=i("a-transfer");return f(),y(t,{"data-source":e.mockData,"list-style":{width:"300px",height:"300px"},"target-keys":e.targetKeys,onChange:e.handleChange},{render:S(n=>[s("span",ae,$(n.title)+" - "+$(n.description),1)]),_:1},8,["data-source","target-keys","onChange"])}A.render=se;var re=`<cn>
#### \u81EA\u5B9A\u4E49\u6E32\u67D3\u884C\u6570\u636E
\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E00\u4E2A Transfer Item\uFF0C\u53EF\u7528\u4E8E\u6E32\u67D3\u590D\u6742\u6570\u636E\u3002
</cn>

<us>
#### Custom datasource
Custom each Transfer Item, and in this way you can render a complex datasource.
</us>
`,de=`<template>
  <a-transfer
    :data-source="mockData"
    :list-style="{
      width: '300px',
      height: '300px',
    }"
    :target-keys="targetKeys"
    @change="handleChange"
  >
    <template #render="item">
      <span class="custom-item" style="color: red">{{ item.title }} - {{ item.description }}</span>
    </template>
  </a-transfer>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
export default defineComponent({
  setup() {
    const mockData = ref<MockData[]>([]);

    const targetKeys = ref<string[]>([]);
    onMounted(() => {
      getMock();
    });
    const getMock = () => {
      const keys = [];
      const mData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: \`content\${i + 1}\`,
          description: \`description of content\${i + 1}\`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          keys.push(data.key);
        }
        mData.push(data);
      }
      mockData.value = mData;
      targetKeys.value = keys;
    };
    const handleChange = (keys: string[], direction: string, moveKeys: string[]) => {
      targetKeys.value = keys;
      console.log(keys, direction, moveKeys);
    };
    return {
      mockData,
      targetKeys,
      handleChange,
      getMock,
    };
  },
});
<\/script>
`;const w=[];for(let e=0;e<20;e++)w.push({key:e.toString(),title:`content${e+1}`,description:`description of content${e+1}`,disabled:e%4==0});const ce=w.filter(e=>+e.key%3>1).map(e=>e.key),le=[{dataIndex:"title",title:"Name"},{dataIndex:"description",title:"Description"}],ie=[{dataIndex:"title",title:"Name"}];var x=b({setup(){const e=h(ce),o=h(!1),r=h(!1),g=h(le),d=h(ie);return{mockData:w,targetKeys:e,disabled:o,showSearch:r,leftColumns:g,rightColumns:d,onChange:n=>{e.value=n},getRowSelection:({disabled:n,selectedKeys:a,onItemSelectAll:l,onItemSelect:p})=>({getCheckboxProps:u=>({disabled:n||u.disabled}),onSelectAll(u,m){const C=m.filter(k=>!k.disabled).map(({key:k})=>k),K=u?_(C,a):_(a,C);l(K,u)},onSelect({key:u},m){p(u,m)},selectedRowKeys:a})}}});function he(e,o,r,g,d,c){const t=i("a-table"),n=i("a-transfer"),a=i("a-switch");return f(),y("div",null,[s(n,{"data-source":e.mockData,"target-keys":e.targetKeys,disabled:e.disabled,"show-search":e.showSearch,"filter-option":(l,p)=>p.title.indexOf(l)!==-1,"show-select-all":!1,onChange:e.onChange},{children:S(({direction:l,filteredItems:p,selectedKeys:u,disabled:m,onItemSelectAll:C,onItemSelect:K})=>[s(t,{"row-selection":e.getRowSelection({disabled:m,selectedKeys:u,onItemSelectAll:C,onItemSelect:K}),columns:l==="left"?e.leftColumns:e.rightColumns,"data-source":p,size:"small",style:{pointerEvents:m?"none":null},"custom-row":({key:k,disabled:P})=>({onClick:()=>{P||m||K(k,!u.includes(k))}})},null,8,["row-selection","columns","data-source","style","custom-row"])]),_:1},8,["data-source","target-keys","disabled","show-search","filter-option","onChange"]),s(a,{"un-checked-children":"disabled","checked-children":"disabled",checked:e.disabled,"onUpdate:checked":o[1]||(o[1]=l=>e.disabled=l),style:{"margin-top":"16px"}},null,8,["checked"]),s(a,{"un-checked-children":"showSearch","checked-children":"showSearch",checked:e.showSearch,"onUpdate:checked":o[2]||(o[2]=l=>e.showSearch=l),style:{"margin-top":"16px"}},null,8,["checked"])])}x.render=he;var ue=`<cn>
#### \u8868\u683C\u7A7F\u68AD\u6846
\u4F7F\u7528 Table \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002
</cn>

<us>
#### Table Transfer
Customize render list with Table component.
</us>
`,ge=`<template>
  <div>
    <a-transfer
      :data-source="mockData"
      :target-keys="targetKeys"
      :disabled="disabled"
      :show-search="showSearch"
      :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
      :show-select-all="false"
      @change="onChange"
    >
      <template
        #children="{
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled,
          onItemSelectAll,
          onItemSelect,
        }"
      >
        <a-table
          :row-selection="
            getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              onItemSelectAll,
              onItemSelect,
            })
          "
          :columns="direction === 'left' ? leftColumns : rightColumns"
          :data-source="filteredItems"
          size="small"
          :style="{ pointerEvents: listDisabled ? 'none' : null }"
          :custom-row="
            ({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return;
                onItemSelect(key, !selectedKeys.includes(key));
              },
            })
          "
        />
      </template>
    </a-transfer>
    <a-switch
      un-checked-children="disabled"
      checked-children="disabled"
      v-model:checked="disabled"
      style="margin-top: 16px"
    />
    <a-switch
      un-checked-children="showSearch"
      checked-children="showSearch"
      v-model:checked="showSearch"
      style="margin-top: 16px"
    />
  </div>
</template>
<script lang="ts">
import { difference } from 'lodash-es';
import { defineComponent, ref } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}
type tableColumn = Record<string, string>;
const mockData: MockData[] = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: \`content\${i + 1}\`,
    description: \`description of content\${i + 1}\`,
    disabled: i % 4 === 0,
  });
}

const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];

export default defineComponent({
  setup() {
    const targetKeys = ref<string[]>(originTargetKeys);
    const disabled = ref<boolean>(false);
    const showSearch = ref<boolean>(false);
    const leftColumns = ref<tableColumn[]>(leftTableColumns);
    const rightColumns = ref<tableColumn[]>(rightTableColumns);

    const onChange = (nextTargetKeys: string[]) => {
      targetKeys.value = nextTargetKeys;
    };

    const getRowSelection = ({
      disabled,
      selectedKeys,
      onItemSelectAll,
      onItemSelect,
    }: Record<string, any>) => {
      return {
        getCheckboxProps: (item: Record<string, string | boolean>) => ({
          disabled: disabled || item.disabled,
        }),
        onSelectAll(selected: boolean, selectedRows: Record<string, string | boolean>[]) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }: Record<string, string>, selected: boolean) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
    };
    return {
      mockData,
      targetKeys,
      disabled,
      showSearch,
      leftColumns,
      rightColumns,
      onChange,
      getRowSelection,
    };
  },
});
<\/script>
`;const O=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-3"}],R=[];function N(e=[]){e.forEach(o=>{R.push(o),N(o.children)})}N(JSON.parse(JSON.stringify(O)));function me(e,o){return e.indexOf(o)!==-1}function E(e,o=[]){return e.forEach(r=>{r.disabled=o.includes(r.key),r.children&&E(r.children,o)}),e}var T=b({setup(){const e=h([]),o=h(R),r=B(()=>E(O,e.value));return{targetKeys:e,dataSource:o,treeData:r,onChange:c=>{e.value=c},onChecked:(c,t,n,a)=>{const{eventKey:l}=t.node;a(l,!me(n,l))}}}});const V=U(),pe=V((e,o,r,g,d,c)=>{const t=i("a-tree"),n=i("a-transfer");return f(),y("div",null,[s(n,{class:"tree-transfer","data-source":e.dataSource,"target-keys":e.targetKeys,render:a=>a.title,"show-select-all":!1,onChange:e.onChange},{children:V(({direction:a,selectedKeys:l,onItemSelect:p})=>[a==="left"?(f(),y(t,{key:0,blockNode:"",checkable:"",checkStrictly:"",defaultExpandAll:"",checkedKeys:[...l,...e.targetKeys],treeData:e.treeData,onCheck:(u,m)=>{e.onChecked(u,m,[...l,...e.targetKeys],p)},onSelect:(u,m)=>{e.onChecked(u,m,[...l,...e.targetKeys],p)}},null,8,["checkedKeys","treeData","onCheck","onSelect"])):F("v-if",!0)]),_:1},8,["data-source","target-keys","render","onChange"])])});T.render=pe;T.__scopeId="data-v-2c14ec18";var fe=`<cn>
#### \u6811\u7A7F\u68AD\u6846
\u4F7F\u7528 Tree \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002
</cn>

<us>
#### Tree Transfer
Customize render list with Tree component.
</us>
`,ye=`<template>
  <div>
    <a-transfer
      class="tree-transfer"
      :data-source="dataSource"
      :target-keys="targetKeys"
      :render="item => item.title"
      :show-select-all="false"
      @change="onChange"
    >
      <template #children="{ direction, selectedKeys, onItemSelect }">
        <a-tree
          v-if="direction === 'left'"
          blockNode
          checkable
          checkStrictly
          defaultExpandAll
          :checkedKeys="[...selectedKeys, ...targetKeys]"
          :treeData="treeData"
          @check="
            (_, props) => {
              onChecked(_, props, [...selectedKeys, ...targetKeys], onItemSelect);
            }
          "
          @select="
            (_, props) => {
              onChecked(_, props, [...selectedKeys, ...targetKeys], onItemSelect);
            }
          "
        />
      </template>
    </a-transfer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { CheckEvent } from '@fe6/water-pro';

interface TreeDataItem {
  key: string;
  title: string;
  disabled?: boolean;
  children?: TreeDataItem[];
}
const tData: TreeDataItem[] = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { key: '0-2', title: '0-3' },
];

const transferDataSource: TreeDataItem[] = [];
function flatten(list: TreeDataItem[] = []) {
  list.forEach(item => {
    transferDataSource.push(item);
    flatten(item.children);
  });
}
flatten(JSON.parse(JSON.stringify(tData)));

function isChecked(selectedKeys: string[], eventKey: string) {
  return selectedKeys.indexOf(eventKey) !== -1;
}

function handleTreeData(data: TreeDataItem[], targetKeys: string[] = []): TreeDataItem[] {
  data.forEach(item => {
    item['disabled'] = targetKeys.includes(item.key);
    if (item.children) {
      handleTreeData(item.children, targetKeys);
    }
  });
  return data;
}

export default defineComponent({
  setup() {
    const targetKeys = ref<string[]>([]);

    const dataSource = ref<TreeDataItem[]>(transferDataSource);

    const treeData = computed<TreeDataItem[]>(() => {
      return handleTreeData(tData, targetKeys.value);
    });

    const onChange = (keys: string[]) => {
      targetKeys.value = keys;
    };
    const onChecked = (
      _: Record<string, string[]>,
      e: CheckEvent,
      checkedKeys: string[],
      onItemSelect: (n: any, c: boolean) => void,
    ) => {
      const { eventKey } = e.node;
      onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
    };
    return {
      targetKeys,
      dataSource,
      treeData,
      onChange,
      onChecked,
    };
  },
});
<\/script>
<style scoped>
.tree-transfer .ant-transfer-list:first-child {
  width: 50%;
  flex: none;
}
</style>
`;const ke={class:"markdown-body"},be=J(`<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>dataSource</td><td>\u6570\u636E\u6E90\uFF0C\u5176\u4E2D\u7684\u6570\u636E\u5C06\u4F1A\u88AB\u6E32\u67D3\u5230\u5DE6\u8FB9\u4E00\u680F\u4E2D\uFF0C<code>targetKeys</code> \u4E2D\u6307\u5B9A\u7684\u9664\u5916\u3002</td><td>[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]</td><td>[]</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>filterOption</td><td>\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>(inputValue, option): boolean</td><td></td><td></td></tr><tr><td>footer</td><td>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A \u4F5C\u7528\u57DF\u63D2\u69FD</td><td>slot=\u201Cfooter\u201D slot-scope=\u201Cprops\u201D</td><td></td><td></td></tr><tr><td>lazy</td><td>Transfer \u4F7F\u7528\u4E86 [vc-lazy-load]\u4F18\u5316\u6027\u80FD\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u8BBE\u7F6E\u76F8\u5173\u53C2\u6570\u3002\u8BBE\u4E3A <code>false</code> \u53EF\u4EE5\u5173\u95ED\u61D2\u52A0\u8F7D\u3002</td><td>object|boolean</td><td><code>{ height: 32, offset: 32 }</code></td><td></td></tr><tr><td>listStyle</td><td>\u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td></td><td></td></tr><tr><td>locale</td><td>\u5404\u79CD\u8BED\u8A00</td><td>object</td><td><code>{ itemUnit: &#39;\u9879&#39;, itemsUnit: &#39;\u9879&#39;, notFoundContent: &#39;\u5217\u8868\u4E3A\u7A7A&#39;, searchPlaceholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9&#39; }</code></td><td></td></tr><tr><td>operations</td><td>\u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0A\u81F3\u4E0B</td><td>string[]</td><td>[\u2018&gt;\u2019, \u2018&lt;\u2019]</td><td></td></tr><tr><td>render</td><td>\u6BCF\u884C\u6570\u636E\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u5165\u53C2\u4E3A <code>dataSource</code> \u4E2D\u7684\u9879\uFF0C\u8FD4\u56DE\u503C\u4E3A element\u3002\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u5176\u4E2D <code>label</code> \u5B57\u6BB5\u4E3A element\uFF0C<code>value</code> \u5B57\u6BB5\u4E3A title</td><td>Function(record)</td><td></td><td></td></tr><tr><td>selectedKeys</td><td>\u8BBE\u7F6E\u54EA\u4E9B\u9879\u5E94\u8BE5\u88AB\u9009\u4E2D</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>showSearch</td><td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showSelectAll</td><td>\u662F\u5426\u5C55\u793A\u5168\u9009\u52FE\u9009\u6846</td><td>boolean</td><td>true</td><td>1.5.0</td></tr><tr><td>targetKeys</td><td>\u663E\u793A\u5728\u53F3\u4FA7\u6846\u6570\u636E\u7684 key \u96C6\u5408</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>titles</td><td>\u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3</td><td>string[]</td><td>[\u2018\u2019, \u2018\u2019]</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(targetKeys, direction, moveKeys): void</td></tr><tr><td>scroll</td><td>\u9009\u9879\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(direction, event): void</td></tr><tr><td>search</td><td>\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(direction: \u2018left\u2019|\u2018right\u2019, value: string): void</td></tr><tr><td>selectChange</td><td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(sourceSelectedKeys, targetSelectedKeys): void</td></tr></tbody></table><h3>Render Props</h3><p>1.5.0 \u65B0\u589E\u3002Transfer \u652F\u6301\u63A5\u6536 <code>children</code> \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\uFF0C\u5E76\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A</p><pre><code class="language-json">{
  &quot;props&quot;: {
    &quot;direction&quot;: String,
    &quot;disabled&quot;: Boolean,
    &quot;filteredItems&quot;: Array,
    &quot;selectedKeys&quot;: Array
  },
  &quot;on&quot;: {
    &quot;itemSelect&quot;: Function,
    &quot;itemSelectAll&quot;: Function
  }
}
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>direction</td><td>\u6E32\u67D3\u5217\u8868\u7684\u65B9\u5411</td><td>\u2018left\u2019 | \u2018right\u2019</td><td>1.5.0</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u5217\u8868</td><td>boolean</td><td>1.5.0</td></tr><tr><td>filteredItems</td><td>\u8FC7\u6EE4\u540E\u7684\u6570\u636E</td><td>TransferItem[]</td><td>1.5.0</td></tr><tr><td>selectedKeys</td><td>\u9009\u4E2D\u7684\u6761\u76EE</td><td>string[]</td><td>1.5.0</td></tr><tr><td>itemSelect</td><td>\u52FE\u9009\u6761\u76EE</td><td>(key: string, selected: boolean)</td><td>1.5.0</td></tr><tr><td>itemSelectAll</td><td>\u52FE\u9009\u4E00\u7EC4\u6761\u76EE</td><td>(keys: string[], selected: boolean)</td><td>1.5.0</td></tr></tbody></table><h4>\u53C2\u8003\u793A\u4F8B</h4><pre><code class="language-html">&lt;a-transfer&gt;
  &lt;template
    slot=&quot;children&quot;
    slot-scope=&quot;{
      props: {
        direction,
        filteredItems,
        selectedKeys,
        disabled: listDisabled
      }, on: {
        itemSelectAll,
        itemSelect,
      }
    }&quot;
  &gt;
    &lt;your-component /&gt;
  &lt;template&gt;
&lt;/a-transfer&gt;
</code></pre><h2>\u6CE8\u610F</h2><p>\u6309\u7167 Vue \u6700\u65B0\u7684\u89C4\u8303\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u6570\u7EC4\u6700\u597D\u7ED1\u5B9A key\u3002\u5728 Transfer \u4E2D\uFF0C<code>dataSource</code>\u91CC\u7684\u6570\u636E\u503C\u9700\u8981\u6307\u5B9A <code>key</code> \u503C\u3002\u5BF9\u4E8E <code>dataSource</code> \u9ED8\u8BA4\u5C06\u6BCF\u5217\u6570\u636E\u7684 <code>key</code> \u5C5E\u6027\u4F5C\u4E3A\u552F\u4E00\u7684\u6807\u8BC6\u3002</p><p>\u5982\u679C\u4F60\u7684\u6570\u636E\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u52A1\u5FC5\u4F7F\u7528 <code>rowKey</code> \u6765\u6307\u5B9A\u6570\u636E\u5217\u7684\u4E3B\u952E\u3002</p><pre><code class="language-jsx">// \u6BD4\u5982\u4F60\u7684\u6570\u636E\u4E3B\u952E\u662F uid
return &lt;Transfer :rowKey=&quot;record =&gt; record.uid&quot; /&gt;;
</code></pre>`,14),Se={expose:[],setup(e){return(o,r)=>(f(),y("div",ke,[be]))}};var Ce=Se;const z={cn:`# \u7A7F\u68AD\u6846
  \u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002
  ## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002
- \u6BD4\u8D77 Select \u548C TreeSelect\uFF0C\u7A7F\u68AD\u6846\u5360\u636E\u66F4\u5927\u7684\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5C55\u793A\u53EF\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\u3002

\u7A7F\u68AD\u9009\u62E9\u6846\u7528\u76F4\u89C2\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u5143\u7D20\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002

\u9009\u62E9\u4E00\u4E2A\u6216\u4EE5\u4E0A\u7684\u9009\u9879\u540E\uFF0C\u70B9\u51FB\u5BF9\u5E94\u7684\u65B9\u5411\u952E\uFF0C\u53EF\u4EE5\u628A\u9009\u4E2D\u7684\u9009\u9879\u79FB\u52A8\u5230\u53E6\u4E00\u680F\u3002
\u5176\u4E2D\uFF0C\u5DE6\u8FB9\u4E00\u680F\u4E3A \`source\`\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A \`target\`\uFF0CAPI \u7684\u8BBE\u8BA1\u4E5F\u53CD\u6620\u4E86\u8FD9\u4E24\u4E2A\u6982\u5FF5\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Transfer
  Double column transfer choice box.

## When To Use

- It is a select control essentially which can be use for selecting multiple items.
- Transfer can display more information for items and take up more space.

Transfer the elements between two columns in an intuitive and efficient way.

One or more elements can be selected from either column, one click on the proper \`direction\` button, and the transfer is done. The left column is considered the \`source\` and the right column is considered the \`target\`. As you can see in the API description, these names are reflected in.

  ## Examples
  `};var ve={category:"Components",subtitle:"\u7A7F\u68AD\u6846",type:"Data Entry",title:"Transfer",cols:"1",render(){return s("div",null,[s(i("Md"),{cn:z.cn,us:z.us},null),s(i("demo-sort"),{cols:1},{default:()=>[s(i("demo-container"),{api:G,code:H},{default:()=>[s(I,null,null)]}),s(i("demo-container"),{api:Q,code:X},{default:()=>[s(M,null,null)]}),s(i("demo-container"),{api:ne,code:oe},{default:()=>[s(q,null,null)]}),s(i("demo-container"),{api:re,code:de},{default:()=>[s(A,null,null)]}),s(i("demo-container"),{api:ue,code:ge},{default:()=>[s(x,null,null)]}),s(i("demo-container"),{api:fe,code:ye},{default:()=>[s(T,null,null)]})]}),s(i("api"),null,{default:()=>[s(Ce,null,null)]})])}};export{ve as default};

import{d as g,k as y,w as v,Y as l,bw as h,bx as k,by as s,b as n,P as I,bM as Y,cm as G,cq as q,cr as H,bs as Q,D as b,bz as w,bO as J}from"./vendor.846be9ce.js";const Z=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",slots:{title:"title0010"}}]}]}];var S=g({setup(){const e=y(["0-0-0","0-0-1"]),t=y(["0-0-0","0-0-1"]),r=y(["0-0-0","0-0-1"]);return v(e,()=>{console.log("expandedKeys",e)}),v(t,()=>{console.log("selectedKeys",t)}),v(r,()=>{console.log("checkedKeys",r)}),{treeData:Z,expandedKeys:e,selectedKeys:t,checkedKeys:r}}});const ee=n("span",{style:{color:"#1890ff"}},"sss",-1);function te(e,t,r,c,o,p){const i=l("a-tree");return h(),k(i,{checkable:"","tree-data":e.treeData,expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=d=>e.expandedKeys=d),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[2]||(t[2]=d=>e.selectedKeys=d),checkedKeys:e.checkedKeys,"onUpdate:checkedKeys":t[3]||(t[3]=d=>e.checkedKeys=d)},{title0010:s(()=>[ee]),_:1},8,["tree-data","expandedKeys","selectedKeys","checkedKeys"])}S.render=te;var ne=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002
</cn>

<us>
#### Basic
The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.
</us>
`,de=`<template>
  <a-tree
    checkable
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
  >
    <template #title0010><span style="color: #1890ff">sss</span></template>
  </a-tree>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { TreeDataItem } from '@fe6/water-pro';

const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
      },
    ],
  },
];

export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });

    return {
      treeData,
      expandedKeys,
      selectedKeys,
      checkedKeys,
    };
  },
});
<\/script>
`;const ae=[{title:"parent 1",key:"0-0",slots:{icon:"smile"},children:[{title:"leaf",key:"0-0-0",slots:{icon:"meh"}},{title:"leaf",key:"0-0-1",slots:{icon:"custom"}}]}];var E=g({components:{DownOutlined:I,SmileOutlined:Y,FrownOutlined:G,FrownFilled:q},setup(){return{selectedKeys:y(["0-0-0"]),treeData:ae}}});function oe(e,t,r,c,o,p){const i=l("down-outlined"),d=l("smile-outlined"),a=l("frown-filled"),u=l("frown-outlined"),K=l("a-tree");return h(),k(K,{"tree-data":e.treeData,"show-icon":"","default-expand-all":"",selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=f=>e.selectedKeys=f)},{switcherIcon:s(()=>[n(i)]),smile:s(()=>[n(d)]),meh:s(()=>[n(d)]),custom:s(({selected:f})=>[f?(h(),k(a,{key:0})):(h(),k(u,{key:1}))]),_:1},8,["tree-data","selectedKeys"])}E.render=oe;var re=`<cn>
#### \u81EA\u5B9A\u4E49\u56FE\u6807
\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002
</cn>

<us>
#### Customize Icon
You can customize icons for different nodes.
</us>

`,se=`<template>
  <a-tree :tree-data="treeData" show-icon default-expand-all v-model:selectedKeys="selectedKeys">
    <template #switcherIcon>
      <down-outlined />
    </template>
    <template #smile>
      <smile-outlined />
    </template>
    <template #meh>
      <smile-outlined />
    </template>
    <template #custom="{ selected }">
      <frown-filled v-if="selected" />
      <frown-outlined v-else />
    </template>
  </a-tree>
</template>
<script lang="ts">
import { DownOutlined, SmileOutlined, FrownOutlined, FrownFilled } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { TreeDataItem } from '@fe6/water-pro';

const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { title: 'leaf', key: '0-0-1', slots: { icon: 'custom' } },
    ],
  },
];

export default defineComponent({
  components: {
    DownOutlined,
    SmileOutlined,
    FrownOutlined,
    FrownFilled,
  },
  setup() {
    return {
      selectedKeys: ref(['0-0-0']),
      treeData,
    };
  },
});
<\/script>
`;const le=3,ie=2,ce=1,O=[],N=(e,t,r)=>{const c=t||"0",o=r||O,p=[];for(let d=0;d<le;d++){const a=`${c}-${d}`;o.push({title:a,key:a}),d<ie&&p.push(a)}if(e<0)return o;const i=e-1;p.forEach((d,a)=>(o[a].children=[],N(i,d,o[a].children)))};N(ce);var L=g({setup(){const e=y(["0-0","0-0-0","0-0-0-0"]),t=y(O);return{expandedKeys:e,gData:t,onDragEnter:o=>{console.log(o)},onDrop:o=>{console.log(o);const p=o.node.eventKey,i=o.dragNode.eventKey,d=o.node.pos.split("-"),a=o.dropPosition-Number(d[d.length-1]),u=(m,x,_)=>{m.forEach((D,$,W)=>{if(D.key===x)return _(D,$,W);if(D.children)return u(D.children,x,_)})},K=[...t.value];let f={};if(u(K,i,(m,x,_)=>{_.splice(x,1),f=m}),!o.dropToGap)u(K,p,m=>{m.children=m.children||[],m.children.push(f)});else if((o.node.children||[]).length>0&&o.node.expanded&&a===1)u(K,p,m=>{m.children=m.children||[],m.children.unshift(f)});else{let m=[],x=0;u(K,p,(_,D,$)=>{m=$,x=D}),a===-1?m.splice(x,0,f):m.splice(x+1,0,f)}t.value=K}}}});function pe(e,t,r,c,o,p){const i=l("a-tree");return h(),k(i,{class:"draggable-tree",expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=d=>e.expandedKeys=d),draggable:"","tree-data":e.gData,onDragenter:e.onDragEnter,onDrop:e.onDrop},null,8,["expandedKeys","tree-data","onDragenter","onDrop"])}L.render=pe;var ye=`<cn>
#### \u62D6\u52A8\u793A\u4F8B
\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002
</cn>

<us>
#### draggable
Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.
</us>
`,ue=`<template>
  <a-tree
    class="draggable-tree"
    v-model:expandedKeys="expandedKeys"
    draggable
    :tree-data="gData"
    @dragenter="onDragEnter"
    @drop="onDrop"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TreeDataItem, TreeDragEvent, DropEvent } from '@fe6/water-pro';

const x = 3;
const y = 2;
const z = 1;
const genData: TreeDataItem[] = [];

const generateData = (_level: number, _preKey?: string, _tns?: TreeDataItem[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || genData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0', '0-0-0', '0-0-0-0']);
    const gData = ref<TreeDataItem[]>(genData);
    const onDragEnter = (info: TreeDragEvent) => {
      console.log(info);
      // expandedKeys \u9700\u8981\u5C55\u5F00\u65F6
      // expandedKeys.value = info.expandedKeys
    };

    const onDrop = (info: DropEvent) => {
      console.log(info);
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split('-');
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const loop = (data: TreeDataItem[], key: string, callback: any) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...gData.value];

      // Find dragObject
      let dragObj: TreeDataItem = {};
      loop(data, dragKey, (item: TreeDataItem, index: number, arr: TreeDataItem[]) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item: TreeDataItem) => {
          item.children = item.children || [];
          // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, (item: TreeDataItem) => {
          item.children = item.children || [];
          // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
          item.children.unshift(dragObj);
        });
      } else {
        let ar: TreeDataItem[] = [];
        let i = 0;
        loop(data, dropKey, (item: TreeDataItem, index: number, arr: TreeDataItem[]) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      gData.value = data;
    };
    return {
      expandedKeys,
      gData,
      onDragEnter,
      onDrop,
    };
  },
});
<\/script>
`,P=g({setup(){const e=y([]),t=y([]),r=y([{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}]);return{expandedKeys:e,selectedKeys:t,treeData:r,onLoadData:o=>new Promise(p=>{if(o.dataRef.children){p();return}setTimeout(()=>{o.dataRef.children=[{title:"Child Node",key:`${o.eventKey}-0`},{title:"Child Node",key:`${o.eventKey}-1`}],r.value=[...r.value],p()},1e3)})}}});function me(e,t,r,c,o,p){const i=l("a-tree");return h(),k(i,{"load-data":e.onLoadData,"tree-data":e.treeData,expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=d=>e.expandedKeys=d),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[2]||(t[2]=d=>e.selectedKeys=d)},null,8,["load-data","tree-data","expandedKeys","selectedKeys"])}P.render=me;var fe=`<cn>
#### \u5F02\u6B65\u6570\u636E\u52A0\u8F7D
\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002
</cn>

<us>
#### load data asynchronously
To load data asynchronously when click to expand a treeNode.
</us>
`,he=`<template>
  <a-tree
    :load-data="onLoadData"
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TreeDataItem } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>([]);
    const selectedKeys = ref<string[]>([]);
    const treeData = ref<TreeDataItem[]>([
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ]);
    const onLoadData = (treeNode: any) => {
      return new Promise((resolve: (value?: unknown) => void) => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          treeNode.dataRef.children = [
            { title: 'Child Node', key: \`\${treeNode.eventKey}-0\` },
            { title: 'Child Node', key: \`\${treeNode.eventKey}-1\` },
          ];
          treeData.value = [...treeData.value];
          resolve();
        }, 1000);
      });
    };
    return {
      expandedKeys,
      selectedKeys,
      treeData,
      onLoadData,
    };
  },
});
<\/script>
`,F=g({components:{CarryOutOutlined:H,FormOutlined:Q},setup(){const e=y(!0),t=y(!1);return{showLine:e,showIcon:t,onSelect:(c,o)=>{console.log("selected",c,o)}}}});const ke={style:{"margin-bottom":"16px"}},Ke=b(" showLine: "),ge=n("br",null,null,-1),xe=n("br",null,null,-1),ve=b(" showIcon: "),be=n("span",{style:{color:"#1890ff"}},"parent 1",-1);function De(e,t,r,c,o,p){const i=l("a-switch"),d=l("carry-out-outlined"),a=l("a-tree-node"),u=l("form-outlined"),K=l("a-tree");return h(),k("div",null,[n("div",ke,[Ke,n(i,{checked:e.showLine,"onUpdate:checked":t[1]||(t[1]=f=>e.showLine=f)},null,8,["checked"]),ge,xe,ve,n(i,{checked:e.showIcon,"onUpdate:checked":t[2]||(t[2]=f=>e.showIcon=f)},null,8,["checked"])]),n(K,{"show-line":e.showLine,"show-icon":e.showIcon,"default-expanded-keys":["0-0-0","0-0-1","0-0-2"],onSelect:e.onSelect},{icon:s(()=>[n(d)]),default:s(()=>[n(a,{key:"0-0"},{icon:s(()=>[n(d)]),title:s(()=>[be]),default:s(()=>[n(a,{title:"parent 1-0",key:"0-0-0"},{icon:s(()=>[n(d)]),default:s(()=>[n(a,{title:"leaf",key:"0-0-0-0"},{icon:s(()=>[n(d)]),_:1}),n(a,{title:"leaf",key:"0-0-0-1"},{icon:s(()=>[n(d)]),_:1}),n(a,{title:"leaf",key:"0-0-0-2"},{icon:s(()=>[n(d)]),_:1})]),_:1}),n(a,{title:"parent 1-1",key:"0-0-1"},{icon:s(()=>[n(d)]),default:s(()=>[n(a,{title:"leaf",key:"0-0-1-0"},{icon:s(()=>[n(d)]),_:1})]),_:1}),n(a,{title:"parent 1-2",key:"0-0-2"},{icon:s(()=>[n(d)]),default:s(()=>[n(a,{title:"leaf",key:"0-0-2-0"},{icon:s(()=>[n(d)]),_:1}),n(a,{title:"leaf",key:"0-0-2-1"},{icon:s(()=>[n(d)]),switcherIcon:s(()=>[n(u)]),_:1})]),_:1})]),_:1})]),_:1},8,["show-line","show-icon","onSelect"])])}F.render=De;var _e=`<cn>
#### \u8FDE\u63A5\u7EBF
\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\u3002
</cn>

<us>
#### Tree With Line
Tree With Line
</us>
`,we=`<template>
  <div>
    <div style="margin-bottom: 16px">
      showLine:
      <a-switch v-model:checked="showLine" />
      <br />
      <br />
      showIcon:
      <a-switch v-model:checked="showIcon" />
    </div>
    <a-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <template #icon><carry-out-outlined /></template>
      <a-tree-node key="0-0">
        <template #icon><carry-out-outlined /></template>
        <template #title><span style="color: #1890ff">parent 1</span></template>
        <a-tree-node title="parent 1-0" key="0-0-0">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-0-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-1">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-2">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-1" key="0-0-1">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-1-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-2" key="0-0-2">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-2-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-2-1">
            <template #icon><carry-out-outlined /></template>
            <template #switcherIcon><form-outlined /></template>
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
</template>
<script lang="ts">
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { SelectEvent } from '@fe6/water-pro';

export default defineComponent({
  components: {
    CarryOutOutlined,
    FormOutlined,
  },
  setup() {
    const showLine = ref<boolean>(true);
    const showIcon = ref<boolean>(false);

    const onSelect = (selectedKeys: string[], info: SelectEvent) => {
      console.log('selected', selectedKeys, info);
    };
    return {
      showLine,
      showIcon,
      onSelect,
    };
  },
});
<\/script>
`;const $e=3,Ce=2,Te=1,C=[],V=(e,t,r)=>{const c=t||"0",o=r||C,p=[];for(let d=0;d<$e;d++){const a=`${c}-${d}`;o.push({title:a,key:a}),d<Ce&&p.push(a)}if(e<0)return o;const i=e-1;p.forEach((d,a)=>(o[a].children=[],V(i,d,o[a].children)))};V(Te);const U=[],z=e=>{for(let t=0;t<e.length;t++){const r=e[t],c=r.key;U.push({key:c,title:c}),r.children&&z(r.children)}};z(C);const T=(e,t)=>{let r;for(let c=0;c<t.length;c++){const o=t[c];o.children&&(o.children.some(p=>p.key===e)?r=o.key:T(e,o.children)&&(r=T(e,o.children)))}return r};var j=g({setup(){const e=y([]),t=y(""),r=y(!0),c=y(C),o=p=>{e.value=p,r.value=!1};return v(t,p=>{const i=U.map(d=>d.title.indexOf(p)>-1?T(d.key,c.value):null).filter((d,a,u)=>d&&u.indexOf(d)===a);e.value=i,t.value=p,r.value=!0}),{expandedKeys:e,searchValue:t,autoExpandParent:r,gData:c,onExpand:o}}});const Ie={key:0},Se={style:{color:"#f50"}},Ee={key:1};function Oe(e,t,r,c,o,p){const i=l("a-input-search"),d=l("a-tree");return h(),k("div",null,[n(i,{value:e.searchValue,"onUpdate:value":t[1]||(t[1]=a=>e.searchValue=a),style:{"margin-bottom":"8px"},placeholder:"Search"},null,8,["value"]),n(d,{expandedKeys:e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"tree-data":e.gData,onExpand:e.onExpand},{title:s(({title:a})=>[a.indexOf(e.searchValue)>-1?(h(),k("span",Ie,[b(w(a.substr(0,a.indexOf(e.searchValue)))+" ",1),n("span",Se,w(e.searchValue),1),b(" "+w(a.substr(a.indexOf(e.searchValue)+e.searchValue.length)),1)])):(h(),k("span",Ee,w(a),1))]),_:1},8,["expandedKeys","auto-expand-parent","tree-data","onExpand"])])}j.render=Oe;var Ne=`<cn>
#### \u53EF\u641C\u7D22
\u53EF\u641C\u7D22\u7684\u6811\u3002
</cn>

<us>
#### Searchable
Searchable Tree.
</us>
`,Le=`<template>
  <div>
    <a-input-search v-model:value="searchValue" style="margin-bottom: 8px" placeholder="Search" />
    <a-tree
      :expandedKeys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      :tree-data="gData"
      @expand="onExpand"
    >
      <template #title="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </template>
    </a-tree>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { TreeDataItem } from '@fe6/water-pro';

const x = 3;
const y = 2;
const z = 1;
const genData: TreeDataItem[] = [];

const generateData = (_level: number, _preKey?: string, _tns?: TreeDataItem[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || genData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList: TreeDataItem[] = [];
const generateList = (data: TreeDataItem[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key as string });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(genData);

const getParentKey = (key: string, tree: TreeDataItem[]): string | number | undefined => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>([]);
    const searchValue = ref<string>('');
    const autoExpandParent = ref<boolean>(true);
    const gData = ref<TreeDataItem[]>(genData);

    const onExpand = (keys: string[]) => {
      expandedKeys.value = keys;
      autoExpandParent.value = false;
    };

    watch(searchValue, value => {
      const expanded = dataList
        .map((item: TreeDataItem) => {
          if ((item.title as string).indexOf(value) > -1) {
            return getParentKey(item.key as string, gData.value);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      expandedKeys.value = expanded as string[];
      searchValue.value = value;
      autoExpandParent.value = true;
    });
    return {
      expandedKeys,
      searchValue,
      autoExpandParent,
      gData,
      onExpand,
    };
  },
});
<\/script>
`,M=g({setup(){const e=y(["0-0","0-1"]),t=y([]);return{expandedKeys:e,selectedKeys:t}}});function Pe(e,t,r,c,o,p){const i=l("a-tree-node"),d=l("a-directory-tree");return h(),k(d,{multiple:"",expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=a=>e.expandedKeys=a),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[2]||(t[2]=a=>e.selectedKeys=a)},{default:s(()=>[n(i,{key:"0-0",title:"parent 0"},{default:s(()=>[n(i,{key:"0-0-0",title:"leaf 0-0","is-leaf":""}),n(i,{key:"0-0-1",title:"leaf 0-1","is-leaf":""})]),_:1}),n(i,{key:"0-1",title:"parent 1"},{default:s(()=>[n(i,{key:"0-1-0",title:"leaf 1-0","is-leaf":""}),n(i,{key:"0-1-1",title:"leaf 1-1","is-leaf":""})]),_:1})]),_:1},8,["expandedKeys","selectedKeys"])}M.render=Pe;var Fe="<cn>\n#### \u76EE\u5F55\n\u5185\u7F6E\u7684\u76EE\u5F55\u6811\uFF0C`multiple` \u6A21\u5F0F\u652F\u6301 `ctrl(Windows)` / `command(Mac)` \u590D\u9009\u3002\n</cn>\n\n<us>\n#### Directory\nBuilt-in directory tree. `multiple` support `ctrl(Windows)` / `command(Mac)` selection.\n</us>\n",Ve=`<template>
  <a-directory-tree
    multiple
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <a-tree-node key="0-0" title="parent 0">
      <a-tree-node key="0-0-0" title="leaf 0-0" is-leaf />
      <a-tree-node key="0-0-1" title="leaf 0-1" is-leaf />
    </a-tree-node>
    <a-tree-node key="0-1" title="parent 1">
      <a-tree-node key="0-1-0" title="leaf 1-0" is-leaf />
      <a-tree-node key="0-1-1" title="leaf 1-1" is-leaf />
    </a-tree-node>
  </a-directory-tree>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0', '0-1']);
    const selectedKeys = ref<string[]>([]);
    return {
      expandedKeys,
      selectedKeys,
    };
  },
});
<\/script>
`,R=g({setup(){const e=y(["0-0-0","0-0-1"]),t=y(["0-0-0","0-0-1"]),r=y(["0-0-0","0-0-1"]),c={children:"child",title:"name"},o=[{name:"parent 1",key:"0-0",child:[{name:"\u5F20\u6668\u6210",key:"0-0-0",disabled:!0,child:[{name:"leaf",key:"0-0-0-0",disableCheckbox:!0},{name:"leaf",key:"0-0-0-1"}]},{name:"parent 1-1",key:"0-0-1",child:[{key:"0-0-1-0",name:"zcvc"}]}]}];return v(e,()=>{console.log("expandedKeys",e)}),v(t,()=>{console.log("selectedKeys",t)}),v(r,()=>{console.log("checkedKeys",r)}),{expandedKeys:e,selectedKeys:t,checkedKeys:r,replaceFields:c,treeData:y(o)}}});function Ue(e,t,r,c,o,p){const i=l("a-tree");return h(),k(i,{checkable:"","tree-data":e.treeData,expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=d=>e.expandedKeys=d),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[2]||(t[2]=d=>e.selectedKeys=d),checkedKeys:e.checkedKeys,"onUpdate:checkedKeys":t[3]||(t[3]=d=>e.checkedKeys=d),"replace-fields":e.replaceFields},null,8,["tree-data","expandedKeys","selectedKeys","checkedKeys","replace-fields"])}R.render=Ue;var ze=`<cn>
#### \u81EA\u5B9A\u4E49TreeNode\u5B57\u6BB5
\u66FF\u6362treeNode\u4E2D title,key,children\u5B57\u6BB5\u4E3AtreeData\u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5
</cn>

<us>
#### ReplaceFields
Replace the title,key and children fields in treeNode with the corresponding fields in treeData.
</us>
`,je=`<template>
  <a-tree
    checkable
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    :replace-fields="replaceFields"
  />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { TreeDataItem } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const replaceFields = {
      children: 'child',
      title: 'name',
    };

    const treeData: TreeDataItem[] = [
      {
        name: 'parent 1',
        key: '0-0',
        child: [
          {
            name: '\u5F20\u6668\u6210',
            key: '0-0-0',
            disabled: true,
            child: [
              { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { name: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            name: 'parent 1-1',
            key: '0-0-1',
            child: [{ key: '0-0-1-0', name: 'zcvc' }],
          },
        ],
      },
    ];
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });
    return {
      expandedKeys,
      selectedKeys,
      checkedKeys,
      replaceFields,
      treeData: ref(treeData),
    };
  },
});
<\/script>
`,A=g({components:{DownOutlined:I},setup(){const e=y(["0-0-0"]),t=y([]);return{expandedKeys:e,selectedKeys:t}}});function Me(e,t,r,c,o,p){const i=l("down-outlined"),d=l("a-tree-node"),a=l("a-tree");return h(),k(a,{showLine:"",expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=u=>e.expandedKeys=u),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[2]||(t[2]=u=>e.selectedKeys=u)},{switcherIcon:s(()=>[n(i)]),default:s(()=>[n(d,{title:"parent 1",key:"0-0"},{default:s(()=>[n(d,{title:"parent 1-0",key:"0-0-0"},{default:s(()=>[n(d,{title:"leaf",key:"0-0-0-0"}),n(d,{title:"leaf",key:"0-0-0-1"}),n(d,{title:"leaf",key:"0-0-0-2"})]),_:1}),n(d,{key:"0-0-1",title:"parent 1-1"},{default:s(()=>[n(d,{key:"0-0-1-0",title:"leaf"})]),_:1}),n(d,{key:"0-0-2",title:"parent 1-2"},{default:s(()=>[n(d,{key:"0-0-2-0",title:"leaf"}),n(d,{key:"0-0-2-1",title:"leaf"})]),_:1})]),_:1})]),_:1},8,["expandedKeys","selectedKeys"])}A.render=Me;var Re=`<cn>
#### \u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807
\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807\u3002
</cn>

<us>
#### Customize collapse/expand icon
customize collapse/expand icon of tree node
</us>
`,Ae=`<template>
  <a-tree showLine v-model:expandedKeys="expandedKeys" v-model:selectedKeys="selectedKeys">
    <template #switcherIcon><down-outlined /></template>
    <a-tree-node title="parent 1" key="0-0">
      <a-tree-node title="parent 1-0" key="0-0-0">
        <a-tree-node title="leaf" key="0-0-0-0" />
        <a-tree-node title="leaf" key="0-0-0-1" />
        <a-tree-node title="leaf" key="0-0-0-2" />
      </a-tree-node>
      <a-tree-node key="0-0-1" title="parent 1-1">
        <a-tree-node key="0-0-1-0" title="leaf" />
      </a-tree-node>
      <a-tree-node key="0-0-2" title="parent 1-2">
        <a-tree-node key="0-0-2-0" title="leaf" />
        <a-tree-node key="0-0-2-1" title="leaf" />
      </a-tree-node>
    </a-tree-node>
  </a-tree>
</template>
<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0']);
    const selectedKeys = ref<string[]>([]);
    return {
      expandedKeys,
      selectedKeys,
    };
  },
});
<\/script>
`;const Be=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]}]}];var B=g({setup(){const e=(r,c)=>{console.log(`treeKey: ${r}, menuKey: ${c}`)},t=y(["0-0-0","0-0-1"]);return v(t,()=>{console.log("expandedKeys",t)}),{treeData:Be,onContextMenuClick:e,expandedKeys:t}}});const Xe=b("1st menu item"),We=b("2nd menu item"),Ye=b("3rd menu item");function Ge(e,t,r,c,o,p){const i=l("a-menu-item"),d=l("a-menu"),a=l("a-dropdown"),u=l("a-tree");return h(),k(u,{"tree-data":e.treeData,expandedKeys:e.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=K=>e.expandedKeys=K)},{title:s(({key:K,title:f})=>[n(a,{trigger:["contextmenu"]},{overlay:s(()=>[n(d,{onClick:({key:m})=>e.onContextMenuClick(K,m)},{default:s(()=>[n(i,{key:"1"},{default:s(()=>[Xe]),_:1}),n(i,{key:"2"},{default:s(()=>[We]),_:1}),n(i,{key:"3"},{default:s(()=>[Ye]),_:1})]),_:2},1032,["onClick"])]),default:s(()=>[n("span",null,w(f),1)]),_:2},1024)]),_:1},8,["tree-data","expandedKeys"])}B.render=Ge;var qe=`<cn>
#### \u53F3\u952E\u83DC\u5355
\u81EA\u5B9A\u4E49\u5C55\u793A\u53F3\u952E\u83DC\u5355
</cn>

<us>
#### context-menu
context-menu
</us>
`,He=`<template>
  <a-tree :tree-data="treeData" v-model:expandedKeys="expandedKeys">
    <template #title="{ key: treeKey, title }">
      <a-dropdown :trigger="['contextmenu']">
        <span>{{ title }}</span>
        <template #overlay>
          <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
            <a-menu-item key="1">1st menu item</a-menu-item>
            <a-menu-item key="2">2nd menu item</a-menu-item>
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </a-tree>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const onContextMenuClick = (treeKey: string, menuKey: string) => {
      console.log(\`treeKey: \${treeKey}, menuKey: \${menuKey}\`);
    };
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    return {
      treeData,
      onContextMenuClick,
      expandedKeys,
    };
  },
});
<\/script>
`;const Qe={class:"markdown-body"},Je=J("<h2>API</h2><h3>Tree props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>blockNode</td><td>\u662F\u5426\u8282\u70B9\u5360\u636E\u4E00\u884C</td><td>boolean</td><td>false</td><td>1.5.0</td></tr><tr><td>treeData</td><td>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08key \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>array&lt;{key, title, children, [disabled, selectable]}&gt;</td><td>\u2013</td><td></td></tr><tr><td>replaceFields</td><td>\u66FF\u6362 treeNode \u4E2D title,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td><td>object</td><td>{children:\u2018children\u2019, title:\u2018title\u2019, key:\u2018key\u2019 }</td><td></td></tr><tr><td>autoExpandParent</td><td>\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td>boolean</td><td>true</td><td></td></tr><tr><td>checkable</td><td>\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846</td><td>boolean</td><td>false</td><td></td></tr><tr><td>checkedKeys(v-model)</td><td>\uFF08\u53D7\u63A7\uFF09\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9\uFF08\u6CE8\u610F\uFF1A\u7236\u5B50\u8282\u70B9\u6709\u5173\u8054\uFF0C\u5982\u679C\u4F20\u5165\u7236\u8282\u70B9 key\uFF0C\u5219\u5B50\u8282\u70B9\u81EA\u52A8\u9009\u4E2D\uFF1B\u76F8\u5E94\u5F53\u5B50\u8282\u70B9 key \u90FD\u4F20\u5165\uFF0C\u7236\u8282\u70B9\u4E5F\u81EA\u52A8\u9009\u4E2D\u3002\u5F53\u8BBE\u7F6E<code>checkable</code>\u548C<code>checkStrictly</code>\uFF0C\u5B83\u662F\u4E00\u4E2A\u6709<code>checked</code>\u548C<code>halfChecked</code>\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u7236\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u4E0E\u5426\u4E0D\u518D\u5173\u8054</td><td>string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}</td><td>[]</td><td></td></tr><tr><td>checkStrictly</td><td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultCheckedKeys</td><td>\u9ED8\u8BA4\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>defaultExpandAll</td><td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultExpandedKeys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>defaultExpandParent</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7236\u8282\u70B9</td><td>bool</td><td>true</td><td></td></tr><tr><td>defaultSelectedKeys</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>disabled</td><td>\u5C06\u6811\u7981\u7528</td><td>bool</td><td>false</td><td></td></tr><tr><td>draggable</td><td>\u8BBE\u7F6E\u8282\u70B9\u53EF\u62D6\u62FD</td><td>boolean</td><td>false</td><td></td></tr><tr><td>expandedKeys(.sync)</td><td>\uFF08\u53D7\u63A7\uFF09\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>filterTreeNode</td><td>\u6309\u9700\u7B5B\u9009\u6811\u8282\u70B9\uFF08\u9AD8\u4EAE\uFF09\uFF0C\u8FD4\u56DE true</td><td>function(node)</td><td>-</td><td></td></tr><tr><td>loadData</td><td>\u5F02\u6B65\u52A0\u8F7D\u6570\u636E</td><td>function(node)</td><td>-</td><td></td></tr><tr><td>loadedKeys</td><td>\uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 <code>loadData</code> \u4F7F\u7528</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>multiple</td><td>\u652F\u6301\u70B9\u9009\u591A\u4E2A\u8282\u70B9\uFF08\u8282\u70B9\u672C\u8EAB\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>selectable</td><td>\u662F\u5426\u53EF\u9009\u4E2D</td><td>boolean</td><td>true</td><td></td></tr><tr><td>selectedKeys(.sync)</td><td>\uFF08\u53D7\u63A7\uFF09\u8BBE\u7F6E\u9009\u4E2D\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>showIcon</td><td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>switcherIcon</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807</td><td>slot</td><td>-</td><td></td></tr><tr><td>showLine</td><td>\u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF</td><td>boolean</td><td>false</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>check</td><td>\u70B9\u51FB\u590D\u9009\u6846\u89E6\u53D1</td><td>function(checkedKeys, e:{checked: bool, checkedNodes, node, event})</td></tr><tr><td>dragend</td><td>dragend \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>dragenter</td><td>dragenter \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node, expandedKeys})</td></tr><tr><td>dragleave</td><td>dragleave \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>dragover</td><td>dragover \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>dragstart</td><td>\u5F00\u59CB\u62D6\u62FD\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>drop</td><td>drop \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node, dragNode, dragNodesKeys})</td></tr><tr><td>expand</td><td>\u5C55\u5F00/\u6536\u8D77\u8282\u70B9\u65F6\u89E6\u53D1</td><td>function(expandedKeys, {expanded: bool, node})</td></tr><tr><td>load</td><td>\u8282\u70B9\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1</td><td>function(loadedKeys, {event, node})</td></tr><tr><td>rightClick</td><td>\u54CD\u5E94\u53F3\u952E\u70B9\u51FB</td><td>function({event, node})</td></tr><tr><td>select</td><td>\u70B9\u51FB\u6811\u8282\u70B9\u89E6\u53D1</td><td>function(selectedKeys, e:{selected: bool, selectedNodes, node, event})</td></tr></tbody></table><h3>TreeNode props</h3><p>\u7ED3\u70B9\u63CF\u8FF0\u6570\u636E\u5BF9\u8C61\uFF0C\u662F treeNodes \u4E2D\u7684\u4E00\u9879\uFF0CTreeNode \u4F7F\u7528\u76F8\u540C\u7684 API\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>class</td><td>\u8282\u70B9\u7684 class</td><td>string</td><td>-</td><td></td></tr><tr><td>style</td><td>\u8282\u70B9\u7684 style</td><td>string|object</td><td>-</td><td></td></tr><tr><td>checkable</td><td>\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox</td><td>boolean</td><td>-</td><td>1.5.0</td></tr><tr><td>disableCheckbox</td><td>\u7981\u6389 checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u7981\u6389\u54CD\u5E94</td><td>boolean</td><td>false</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u63A5\u6536\u7EC4\u4EF6\uFF0Cprops \u4E3A\u5F53\u524D\u8282\u70B9 props</td><td>slot|slot-scope</td><td>-</td><td></td></tr><tr><td>isLeaf</td><td>\u8BBE\u7F6E\u4E3A\u53F6\u5B50\u8282\u70B9(\u8BBE\u7F6E\u4E86<code>loadData</code>\u65F6\u6709\u6548)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>\u88AB\u6811\u7684 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys \u5C5E\u6027\u6240\u7528\u3002\u6CE8\u610F\uFF1A\u6574\u4E2A\u6811\u8303\u56F4\u5185\u7684\u6240\u6709\u8282\u70B9\u7684 key \u503C\u4E0D\u80FD\u91CD\u590D\uFF01</td><td>string | number</td><td>\u5185\u90E8\u8BA1\u7B97\u51FA\u7684\u8282\u70B9\u4F4D\u7F6E</td><td></td></tr><tr><td>selectable</td><td>\u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u4E2D</td><td>boolean</td><td>true</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string|slot|slot-scope</td><td>\u2018\u2014\u2019</td><td></td></tr><tr><td>slots</td><td>\u4F7F\u7528 treeNodes \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E\u652F\u6301 slot \u7684\u5C5E\u6027\uFF0C\u5982 <code>slots: { title: &#39;XXX&#39;}</code></td><td>object</td><td>-</td><td></td></tr><tr><td>scopedSlots</td><td>\u4F7F\u7528 columns \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E\u652F\u6301 slot-scope \u7684\u5C5E\u6027\uFF0C\u5982 <code>scopedSlots: { title: &#39;XXX&#39;}</code></td><td>object</td><td>-</td><td></td></tr><tr><td>on</td><td>\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u4EC5\u5728 treeNodes \u4F7F\u7528\u65B9\u5F0F\u4E2D\u751F\u6548\uFF0C\u5982<code>{click: () =&gt; {}}</code></td><td>object</td><td>\u2018\u2014\u2019</td><td></td></tr></tbody></table><h3>DirectoryTree props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>expandAction</td><td>\u76EE\u5F55\u5C55\u5F00\u903B\u8F91\uFF0C\u53EF\u9009 <code>false</code> <code>&#39;click&#39;</code> <code>&#39;dblclick&#39;</code></td><td>string</td><td>click</td></tr></tbody></table><h2>FAQ</h2><h3>\u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F</h3><p>\u6587\u4EF6\u56FE\u6807\u901A\u8FC7 switcherIcon \u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u4F60\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u6837\u5F0F</p>",13),Ze={expose:[],setup(e){return(t,r)=>(h(),k("div",Qe,[Je]))}};var et=Ze;const X={cn:`# \u6811\u5F62\u63A7\u4EF6
  ## \u4F55\u65F6\u4F7F\u7528

\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\`\u6811\u63A7\u4EF6\`\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002

        ## \u4EE3\u7801\u6F14\u793A`,us:`# Tree
  ## When To Use

Almost anything can be represented in a tree structure.
Examples include directories, organization hierarchies, biological classifications, countries, etc. The \`Tree\` component is a way of representing the hierarchical relationship between these things. You can also  expand, collapse, and select a treeNode within a \`Tree\`.
## Examples
  `};var nt={category:"Components",type:"Data Display",title:"Tree",subtitle:"\u6811\u5F62\u63A7\u4EF6",render(){return n("div",null,[n(l("Md"),{cn:X.cn,us:X.us},null),n(l("demo-sort"),null,{default:()=>[n(l("demo-container"),{api:ne,code:de},{default:()=>[n(S,null,null)]}),n(l("demo-container"),{api:ze,code:je},{default:()=>[n(R,null,null)]}),n(l("demo-container"),{api:re,code:se},{default:()=>[n(E,null,null)]}),n(l("demo-container"),{api:ye,code:ue},{default:()=>[n(L,null,null)]}),n(l("demo-container"),{api:fe,code:he},{default:()=>[n(P,null,null)]}),n(l("demo-container"),{api:_e,code:we},{default:()=>[n(F,null,null)]}),n(l("demo-container"),{api:Ne,code:Le},{default:()=>[n(j,null,null)]}),n(l("demo-container"),{api:Fe,code:Ve},{default:()=>[n(M,null,null)]}),n(l("demo-container"),{api:Re,code:Ae},{default:()=>[n(A,null,null)]}),n(l("demo-container"),{api:qe,code:He},{default:()=>[n(B,null,null)]})]}),n(l("api"),null,{default:()=>[n(et,null,null)]})])}};export{nt as default};

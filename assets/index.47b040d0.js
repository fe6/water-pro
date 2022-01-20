var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var h=(e,n)=>{var b={};for(var l in e)N.call(e,l)&&n.indexOf(l)<0&&(b[l]=e[l]);if(e!=null&&C)for(var l of C(e))n.indexOf(l)<0&&O.call(e,l)&&(b[l]=e[l]);return b};import{d as m,k as u,Y as d,bw as f,bx as v,by as a,b as t,D as s,F as T,bV as g,bz as K,ca as F,cb as V,cc as q,m as L,bO as M}from"./vendor.846be9ce.js";var $=m({setup(){return{activeKey:u("1")}}});const H=s("Content of Tab Pane 1"),R=s("Content of Tab Pane 2"),j=s("Content of Tab Pane 3");function Y(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-tabs");return f(),v(r,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=i=>e.activeKey=i)},{default:a(()=>[t(o,{key:"1",tab:"Tab 1"},{default:a(()=>[H]),_:1}),t(o,{key:"2",tab:"Tab 2","force-render":""},{default:a(()=>[R]),_:1}),t(o,{key:"3",tab:"Tab 3"},{default:a(()=>[j]),_:1})]),_:1},8,["activeKey"])}$.render=Y;var G=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\u3002
</cn>

<us>
#### basic Usage
Default activate first tab.
</us>
`,W=`<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
<\/script>
`,P=m({setup(){return{activeKey:u(1)}}});const J={class:"card-container"},Q=t("p",null,"Content of Tab Pane 1",-1),X=t("p",null,"Content of Tab Pane 1",-1),Z=t("p",null,"Content of Tab Pane 1",-1),tt=t("p",null,"Content of Tab Pane 2",-1),et=t("p",null,"Content of Tab Pane 2",-1),nt=t("p",null,"Content of Tab Pane 2",-1),at=t("p",null,"Content of Tab Pane 3",-1),ot=t("p",null,"Content of Tab Pane 3",-1),dt=t("p",null,"Content of Tab Pane 3",-1);function it(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-tabs");return f(),v("div",J,[t(r,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=i=>e.activeKey=i),type:"card"},{default:a(()=>[t(o,{key:"1",tab:"Tab Title 1"},{default:a(()=>[Q,X,Z]),_:1}),t(o,{key:"2",tab:"Tab Title 2"},{default:a(()=>[tt,et,nt]),_:1}),t(o,{key:"3",tab:"Tab Title 3"},{default:a(()=>[at,ot,dt]),_:1})]),_:1},8,["activeKey"])])}P.render=it;var st=`<cn>
#### \u5361\u7247\u5F0F\u9875\u7B7E\u5BB9\u5668
\u7528\u4E8E\u5BB9\u5668\u9876\u90E8\uFF0C\u9700\u8981\u4E00\u70B9\u989D\u5916\u7684\u6837\u5F0F\u8986\u76D6\u3002
</cn>

<us>
#### Container of card type Tab
Should be used at the top of container, needs to override styles.
</us>
`,rt=`<template>
  <div class="card-container">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Tab Title 1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab Title 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab Title 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref(1),
    };
  },
});
<\/script>
<style>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>
`,x=m({setup(){return{activeKey:u("1")}}});const lt=s("Content of Tab Pane 1"),ct=s("Content of Tab Pane 2"),bt=s("Content of Tab Pane 3");function pt(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-tabs");return f(),v(r,{type:"card",activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=i=>e.activeKey=i)},{default:a(()=>[t(o,{key:"1",tab:"Tab 1"},{default:a(()=>[lt]),_:1}),t(o,{key:"2",tab:"Tab 2"},{default:a(()=>[ct]),_:1}),t(o,{key:"3",tab:"Tab 3"},{default:a(()=>[bt]),_:1})]),_:1},8,["activeKey"])}x.render=pt;var ut=`<cn>
#### \u5361\u7247\u5F0F\u9875\u7B7E
\u53E6\u4E00\u79CD\u6837\u5F0F\u7684\u9875\u7B7E\uFF0C\u4E0D\u63D0\u4F9B\u5BF9\u5E94\u7684\u5782\u76F4\u6837\u5F0F\u3002
</cn>

<us>
#### Card type tab
Another type Tabs, which doesn't support vertical mode.
</us>
`,ft=`<template>
  <a-tabs type="card" v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
<\/script>
`,w=m({setup(){const e=u([{title:"Tab 1",content:"Content of Tab 1",key:"1"},{title:"Tab 2",content:"Content of Tab 2",key:"2"}]),n=u(e.value[0].key),b=u(0),l=()=>{n.value=`newTab${b.value++}`,e.value.push({title:`New Tab ${n.value}`,content:`Content of new Tab ${n.value}`,key:n.value})},_=o=>{let r=0;e.value.forEach((i,c)=>{i.key===o&&(r=c-1)}),e.value=e.value.filter(i=>i.key!==o),e.value.length&&n.value===o&&(r>=0?n.value=e.value[r].key:n.value=e.value[0].key)};return{panes:e,activeKey:n,onEdit:o=>{_(o)},add:l}}});const vt={style:{marginBottom:"16px"}},_t=s("ADD");function yt(e,n,b,l,_,y){const o=d("a-button"),r=d("a-tab-pane"),i=d("a-tabs");return f(),v("div",null,[t("div",vt,[t(o,{onClick:e.add},{default:a(()=>[_t]),_:1},8,["onClick"])]),t(i,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=c=>e.activeKey=c),"hide-add":"",type:"editable-card",onEdit:e.onEdit},{default:a(()=>[(f(!0),v(T,null,g(e.panes,c=>(f(),v(r,{key:c.key,tab:c.title,closable:c.closable},{default:a(()=>[s(K(c.content),1)]),_:2},1032,["tab","closable"]))),128))]),_:1},8,["activeKey","onEdit"])])}w.render=yt;var mt=`<cn>
#### \u81EA\u5B9A\u4E49\u65B0\u589E\u9875\u7B7E\u89E6\u53D1\u5668
\u9690\u85CF\u9ED8\u8BA4\u7684\u9875\u7B7E\u589E\u52A0\u56FE\u6807\uFF0C\u7ED9\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\u7ED1\u5B9A\u4E8B\u4EF6\u3002
</cn>

<us>
#### Customized trigger of new tab
Hide default plus icon, and bind event for customized trigger.
</us>
`,Tt=`<template>
  <div>
    <div :style="{ marginBottom: '16px' }">
      <a-button @click="add">ADD</a-button>
    </div>
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const panes = ref([
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    ]);
    const activeKey = ref(panes.value[0].key);
    const newTabIndex = ref(0);

    const add = () => {
      activeKey.value = \`newTab\${newTabIndex.value++}\`;
      panes.value.push({
        title: \`New Tab \${activeKey.value}\`,
        content: \`Content of new Tab \${activeKey.value}\`,
        key: activeKey.value,
      });
    };

    const remove = (targetKey: string) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey: string) => {
      remove(targetKey);
    };

    return {
      panes,
      activeKey,
      onEdit,
      add,
    };
  },
});
<\/script>
`,S=m({setup(){return{activeKey:u("1")}}});const gt=s("Tab 1"),Kt=s("Tab 2"),kt=s("Tab 3");function Ct(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-tabs");return f(),v(r,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=i=>e.activeKey=i)},{default:a(()=>[t(o,{key:"1",tab:"Tab 1"},{default:a(()=>[gt]),_:1}),t(o,{key:"2",tab:"Tab 2",disabled:""},{default:a(()=>[Kt]),_:1}),t(o,{key:"3",tab:"Tab 3"},{default:a(()=>[kt]),_:1})]),_:1},8,["activeKey"])}S.render=Ct;var ht=`<cn>
#### \u7981\u7528
\u7981\u7528\u67D0\u4E00\u9879\u3002
</cn>

<us>
#### Disabled
Disabled a tab.
</us>
`,$t=`<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Tab 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" disabled>Tab 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Tab 3</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
<\/script>
`,E=m({setup(){const e=u([{title:"Tab 1",content:"Content of Tab 1",key:"1"},{title:"Tab 2",content:"Content of Tab 2",key:"2"},{title:"Tab 3",content:"Content of Tab 3",key:"3",closable:!1}]),n=u(e.value[0].key),b=u(0),l=r=>{console.log(r)},_=()=>{n.value=`newTab${++b.value}`,e.value.push({title:"New Tab",content:"Content of new Tab",key:n.value})},y=r=>{let i=0;e.value.forEach((c,p)=>{c.key===r&&(i=p-1)}),e.value=e.value.filter(c=>c.key!==r),e.value.length&&n.value===r&&(i>=0?n.value=e.value[i].key:n.value=e.value[0].key)};return{panes:e,activeKey:n,callback:l,onEdit:(r,i)=>{i==="add"?_():y(r)}}}});function Pt(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-tabs");return f(),v(r,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=i=>e.activeKey=i),type:"editable-card",onEdit:e.onEdit},{default:a(()=>[(f(!0),v(T,null,g(e.panes,i=>(f(),v(o,{key:i.key,tab:i.title,closable:i.closable},{default:a(()=>[s(K(i.content),1)]),_:2},1032,["tab","closable"]))),128))]),_:1},8,["activeKey","onEdit"])}E.render=Pt;var xt=`<cn>
#### \u65B0\u589E\u548C\u5173\u95ED\u9875\u7B7E
\u53EA\u6709\u5361\u7247\u6837\u5F0F\u7684\u9875\u7B7E\u652F\u6301\u65B0\u589E\u548C\u5173\u95ED\u9009\u9879\u3002
\u4F7F\u7528 \`closable={false}\` \u7981\u6B62\u5173\u95ED\u3002
</cn>

<us>
#### Add & close tab
Only card type Tabs support adding & closable.
+Use \`closable={false}\` to disable close.
</us>
`,wt=`<template>
  <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const panes = ref([
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
    ]);

    const activeKey = ref(panes.value[0].key);

    const newTabIndex = ref(0);

    const callback = (key: string) => {
      console.log(key);
    };

    const add = () => {
      activeKey.value = \`newTab\${++newTabIndex.value}\`;
      panes.value.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey.value });
    };

    const remove = (targetKey: string) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey: string | MouseEvent, action: string) => {
      if (action === 'add') {
        add();
      } else {
        remove(targetKey as string);
      }
    };

    return {
      panes,
      activeKey,
      callback,
      onEdit,
    };
  },
});
<\/script>
`,z=m({setup(){return{activeKey:u("1")}}});const St=s("Content of tab 1"),Et=s("Content of tab 2"),zt=s("Content of tab 3"),It=s("Extra Action");function At(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-button"),i=d("a-tabs");return f(),v(i,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=c=>e.activeKey=c)},{tabBarExtraContent:a(()=>[t(r,null,{default:a(()=>[It]),_:1})]),default:a(()=>[t(o,{key:"1",tab:"Tab 1"},{default:a(()=>[St]),_:1}),t(o,{key:"2",tab:"Tab 2"},{default:a(()=>[Et]),_:1}),t(o,{key:"3",tab:"Tab 3"},{default:a(()=>[zt]),_:1})]),_:1},8,["activeKey"])}z.render=At;var Dt=`<cn>
#### \u9644\u52A0\u5185\u5BB9
\u53EF\u4EE5\u5728\u9875\u7B7E\u53F3\u8FB9\u6DFB\u52A0\u9644\u52A0\u64CD\u4F5C\u3002
</cn>

<us>
#### Extra content
You can add extra actions to the right of Tabs.
</us>
`,Ut=`<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of tab 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">Content of tab 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of tab 3</a-tab-pane>
    <template #tabBarExtraContent>
      <a-button>Extra Action</a-button>
    </template>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
<\/script>
`,I=m({setup(){return{activeKey:u("1")}},components:{AppleOutlined:F,AndroidOutlined:V}});const Bt=s(" Tab 1 "),Nt=s(" Tab 1 "),Ot=s(" Tab 2 "),Ft=s(" Tab 2 ");function Vt(e,n,b,l,_,y){const o=d("apple-outlined"),r=d("a-tab-pane"),i=d("android-outlined"),c=d("a-tabs");return f(),v(c,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=p=>e.activeKey=p)},{default:a(()=>[t(r,{key:"1"},{tab:a(()=>[t("span",null,[t(o),Bt])]),default:a(()=>[Nt]),_:1}),t(r,{key:"2"},{tab:a(()=>[t("span",null,[t(i),Ot])]),default:a(()=>[Ft]),_:1})]),_:1},8,["activeKey"])}I.render=Vt;var qt=`<cn>
#### \u56FE\u6807
\u6709\u56FE\u6807\u7684\u6807\u7B7E\u3002
</cn>

<us>
#### Icon
The Tab with Icon.
</us>
`,Lt=`<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <apple-outlined />
          Tab 1
        </span>
      </template>
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <android-outlined />
          Tab 2
        </span>
      </template>
      Tab 2
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
});
<\/script>
`,A=m({setup(){const e=u("top"),n=u("1");return{tabPosition:e,activeKey:n}}});const Mt={style:{width:"500px"}},Ht=s("top"),Rt=s("bottom"),jt=s("left"),Yt=s("right"),Gt=s("Content of Tab 1"),Wt=s("Content of Tab 2"),Jt=s("Content of Tab 3");function Qt(e,n,b,l,_,y){const o=d("a-radio-button"),r=d("a-radio-group"),i=d("a-tab-pane"),c=d("a-tabs");return f(),v("div",Mt,[t(r,{value:e.tabPosition,"onUpdate:value":n[1]||(n[1]=p=>e.tabPosition=p),style:{margin:"8px"}},{default:a(()=>[t(o,{value:"top"},{default:a(()=>[Ht]),_:1}),t(o,{value:"bottom"},{default:a(()=>[Rt]),_:1}),t(o,{value:"left"},{default:a(()=>[jt]),_:1}),t(o,{value:"right"},{default:a(()=>[Yt]),_:1})]),_:1},8,["value"]),t(c,{activeKey:e.activeKey,"onUpdate:activeKey":n[2]||(n[2]=p=>e.activeKey=p),"tab-position":e.tabPosition},{default:a(()=>[t(i,{key:"1",tab:"Tab 1"},{default:a(()=>[Gt]),_:1}),t(i,{key:"2",tab:"Tab 2"},{default:a(()=>[Wt]),_:1}),t(i,{key:"3",tab:"Tab 3"},{default:a(()=>[Jt]),_:1})]),_:1},8,["activeKey","tab-position"])])}A.render=Qt;var Xt=`<cn>
#### \u4F4D\u7F6E
\u6709\u56DB\u4E2A\u4F4D\u7F6E\uFF0C\`tabPosition="left|right|top|bottom"\`\u3002
</cn>

<us>
#### Position
Tab's position: left, right, top or bottom.
</us>
`,Zt=`<template>
  <div style="width: 500px">
    <a-radio-group v-model:value="tabPosition" style="margin: 8px">
      <a-radio-button value="top">top</a-radio-button>
      <a-radio-button value="bottom">bottom</a-radio-button>
      <a-radio-button value="left">left</a-radio-button>
      <a-radio-button value="right">right</a-radio-button>
    </a-radio-group>
    <a-tabs v-model:activeKey="activeKey" :tab-position="tabPosition">
      <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const tabPosition = ref('top');
    const activeKey = ref('1');

    return {
      tabPosition,
      activeKey,
    };
  },
});
<\/script>
`,D=m({setup(){const e=u("small"),n=u("1");return{size:e,activeKey:n}}});const te=s("Small"),ee=s("Default"),ne=s("Large"),ae=s("Content of tab 1"),oe=s("Content of tab 2"),de=s("Content of tab 3");function ie(e,n,b,l,_,y){const o=d("a-radio-button"),r=d("a-radio-group"),i=d("a-tab-pane"),c=d("a-tabs");return f(),v("div",null,[t(r,{value:e.size,"onUpdate:value":n[1]||(n[1]=p=>e.size=p),style:{"margin-bottom":"16px"}},{default:a(()=>[t(o,{value:"small"},{default:a(()=>[te]),_:1}),t(o,{value:"default"},{default:a(()=>[ee]),_:1}),t(o,{value:"large"},{default:a(()=>[ne]),_:1})]),_:1},8,["value"]),t(c,{activeKey:e.activeKey,"onUpdate:activeKey":n[2]||(n[2]=p=>e.activeKey=p),size:e.size},{default:a(()=>[t(i,{key:"1",tab:"Tab 1"},{default:a(()=>[ae]),_:1}),t(i,{key:"2",tab:"Tab 2"},{default:a(()=>[oe]),_:1}),t(i,{key:"3",tab:"Tab 3"},{default:a(()=>[de]),_:1})]),_:1},8,["activeKey","size"])])}D.render=ie;var se=`<cn>
#### \u5927\u5C0F
\u5927\u53F7\u9875\u7B7E\u7528\u5728\u9875\u5934\u533A\u57DF\uFF0C\u5C0F\u53F7\u7528\u5728\u5F39\u51FA\u6846\u7B49\u8F83\u72ED\u7A84\u7684\u5BB9\u5668\u5185\u3002
</cn>

<us>
#### Size
Large size tabs are usally used in page header, and small size could be used in Modal.
</us>
`,re=`<template>
  <div>
    <a-radio-group v-model:value="size" style="margin-bottom: 16px">
      <a-radio-button value="small">Small</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="large">Large</a-radio-button>
    </a-radio-group>
    <a-tabs v-model:activeKey="activeKey" :size="size">
      <a-tab-pane key="1" tab="Tab 1">Content of tab 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">Content of tab 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of tab 3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const size = ref('small');
    const activeKey = ref('1');
    return {
      size,
      activeKey,
    };
  },
});
<\/script>
`,U=m({setup(){const e=u("top"),n=u("1");return{mode:e,callback:l=>{console.log(l)},activeKey:n}}});const le={style:{width:"500px"}},ce=s("Horizontal"),be=s("Vertical");function pe(e,n,b,l,_,y){const o=d("a-radio-button"),r=d("a-radio-group"),i=d("a-tab-pane"),c=d("a-tabs");return f(),v("div",le,[t(r,{value:e.mode,"onUpdate:value":n[1]||(n[1]=p=>e.mode=p),style:{marginBottom:"8px"}},{default:a(()=>[t(o,{value:"top"},{default:a(()=>[ce]),_:1}),t(o,{value:"left"},{default:a(()=>[be]),_:1})]),_:1},8,["value"]),t(c,{"tab-position":e.mode,style:{height:"200px"},onPrevClick:e.callback,onNextClick:e.callback,activeKey:e.activeKey,"onUpdate:activeKey":n[2]||(n[2]=p=>e.activeKey=p)},{default:a(()=>[(f(),v(T,null,g(30,p=>t(i,{key:p,tab:`Tab-${p}`},{default:a(()=>[s("Content of tab "+K(p),1)]),_:2},1032,["tab"])),64))]),_:1},8,["tab-position","onPrevClick","onNextClick","activeKey"])])}U.render=pe;var ue=`<cn>
#### \u6ED1\u52A8
\u53EF\u4EE5\u5DE6\u53F3\u3001\u4E0A\u4E0B\u6ED1\u52A8\uFF0C\u5BB9\u7EB3\u66F4\u591A\u6807\u7B7E\u3002
</cn>

<us>
#### Slide
In order to fit in more tabs, they can slide left and right (or up and down).
</us>
`,fe=`<template>
  <div style="width: 500px">
    <a-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
      <a-radio-button value="top">Horizontal</a-radio-button>
      <a-radio-button value="left">Vertical</a-radio-button>
    </a-radio-group>
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px' }"
      @prevClick="callback"
      @nextClick="callback"
      v-model:activeKey="activeKey"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="\`Tab-\${i}\`">Content of tab {{ i }}</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const mode = ref('top');
    const activeKey = ref('1');
    const callback = (val: string) => {
      console.log(val);
    };
    return {
      mode,
      callback,
      activeKey,
    };
  },
});
<\/script>
`,ve=m({setup(){return{activeKey:u("1")}}});const _e=s("Content of Tab Pane 1"),ye=s("Content of Tab Pane 2"),me=s("Content of Tab Pane 3");function Te(e,n,b,l,_,y){const o=d("a-tab-pane"),r=d("a-tabs");return f(),v("div",null,[t(r,{activeKey:e.activeKey,"onUpdate:activeKey":n[1]||(n[1]=i=>e.activeKey=i)},{renderTabBar:a(p=>{var k=p,{DefaultTabBar:i}=k,c=h(k,["DefaultTabBar"]);return[(f(),v(q(i),L(c,{style:{zIndex:1,background:"#fff",textAlign:"right"}}),null,16))]}),default:a(()=>[t(o,{key:"1",tab:"Tab 1",style:{height:"200px"}},{default:a(()=>[_e]),_:1}),t(o,{key:"2",tab:"Tab 2","force-render":""},{default:a(()=>[ye]),_:1}),t(o,{key:"3",tab:"Tab 3"},{default:a(()=>[me]),_:1})]),_:1},8,["activeKey"])])}ve.render=Te;const ge={class:"markdown-body"},Ke=M("<h2>API</h2><h3>Tabs</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>activeKey(v-model)</td><td>\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 key</td><td>string</td><td>\u65E0</td></tr><tr><td>animated</td><td>\u662F\u5426\u4F7F\u7528\u52A8\u753B\u5207\u6362 Tabs\uFF0C\u5728 `tabPosition=top</td><td>bottom` \u65F6\u6709\u6548</td><td>boolean | {inkBar:boolean, tabPane:boolean}</td></tr><tr><td>defaultActiveKey</td><td>\u521D\u59CB\u5316\u9009\u4E2D\u9762\u677F\u7684 key\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E activeKey</td><td>string</td><td>\u7B2C\u4E00\u4E2A\u9762\u677F</td></tr><tr><td>hideAdd</td><td>\u662F\u5426\u9690\u85CF\u52A0\u53F7\u56FE\u6807\uFF0C\u5728 <code>type=&quot;editable-card&quot;</code> \u65F6\u6709\u6548</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>\u5927\u5C0F\uFF0C\u63D0\u4F9B <code>large</code> <code>default</code> \u548C <code>small</code> \u4E09\u79CD\u5927\u5C0F</td><td>string</td><td>\u2018default\u2019</td></tr><tr><td>tabBarExtraContent</td><td>tab bar \u4E0A\u989D\u5916\u7684\u5143\u7D20</td><td>slot</td><td>\u65E0</td></tr><tr><td>tabBarStyle</td><td>tab bar \u7684\u6837\u5F0F\u5BF9\u8C61</td><td>object</td><td>-</td></tr><tr><td>tabPosition</td><td>\u9875\u7B7E\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u6709 <code>top</code> <code>right</code> <code>bottom</code> <code>left</code></td><td>string</td><td>\u2018top\u2019</td></tr><tr><td>type</td><td>\u9875\u7B7E\u7684\u57FA\u672C\u6837\u5F0F\uFF0C\u53EF\u9009 <code>line</code>\u3001<code>card</code> <code>editable-card</code> \u7C7B\u578B</td><td>string</td><td>\u2018line\u2019</td></tr><tr><td>tabBarGutter</td><td>tabs \u4E4B\u95F4\u7684\u95F4\u9699</td><td>number</td><td>\u65E0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03</td><td>Function(activeKey) {}</td></tr><tr><td>edit</td><td>\u65B0\u589E\u548C\u5220\u9664\u9875\u7B7E\u7684\u56DE\u8C03\uFF0C\u5728 <code>type=&quot;editable-card&quot;</code> \u65F6\u6709\u6548</td><td>(targetKey, action): void</td></tr><tr><td>nextClick</td><td>next \u6309\u94AE\u88AB\u70B9\u51FB\u7684\u56DE\u8C03</td><td>Function</td></tr><tr><td>prevClick</td><td>prev \u6309\u94AE\u88AB\u70B9\u51FB\u7684\u56DE\u8C03</td><td>Function</td></tr><tr><td>tabClick</td><td>tab \u88AB\u70B9\u51FB\u7684\u56DE\u8C03</td><td>Function</td></tr></tbody></table><h3>Tabs.TabPane</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>forceRender</td><td>\u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td>\u5BF9\u5E94 activeKey</td><td>string</td><td>\u65E0</td></tr><tr><td>tab</td><td>\u9009\u9879\u5361\u5934\u663E\u793A\u6587\u5B57</td><td>string|slot</td><td>\u65E0</td></tr></tbody></table>",7),ke={expose:[],setup(e){return(n,b)=>(f(),v("div",ge,[Ke]))}};var Ce=ke;const B={cn:`# Tabs \u6807\u7B7E\u9875

    \u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6\u3002

## \u4F55\u65F6\u4F7F\u7528

\u63D0\u4F9B\u5E73\u7EA7\u7684\u533A\u57DF\u5C06\u5927\u5757\u5185\u5BB9\u8FDB\u884C\u6536\u7EB3\u548C\u5C55\u73B0\uFF0C\u4FDD\u6301\u754C\u9762\u6574\u6D01\u3002

Ant Design \u4F9D\u6B21\u63D0\u4F9B\u4E86\u4E09\u7EA7\u9009\u9879\u5361\uFF0C\u5206\u522B\u7528\u4E8E\u4E0D\u540C\u7684\u573A\u666F\u3002

- \u5361\u7247\u5F0F\u7684\u9875\u7B7E\uFF0C\u63D0\u4F9B\u53EF\u5173\u95ED\u7684\u6837\u5F0F\uFF0C\u5E38\u7528\u4E8E\u5BB9\u5668\u9876\u90E8\u3002
- \u6807\u51C6\u7EBF\u6761\u5F0F\u9875\u7B7E\uFF0C\u7528\u4E8E\u5BB9\u5668\u5185\u90E8\u7684\u4E3B\u529F\u80FD\u5207\u6362\uFF0C\u8FD9\u662F\u6700\u5E38\u7528\u7684 Tabs\u3002
- [RadioButton](/ant-design/components/radio-cn/) \u53EF\u4F5C\u4E3A\u66F4\u6B21\u7EA7\u7684\u9875\u7B7E\u6765\u4F7F\u7528\u3002

    ## \u4EE3\u7801\u6F14\u793A`,us:`# Tabs

Tabs make it easy to switch between different views.

### When To Use

Ant Design has 3 types of Tabs for different situations.

- Card Tabs: for managing too many closeable views.
- Normal Tabs: for functional aspects of a page.
- [RadioButton](/ant-design/components/radio/): for secondary tabs.
    ## Examples `};var Pe={category:"Components",subtitle:"\u6807\u7B7E\u9875",type:"Data Display",title:"Tabs",cols:1,render(){return t("div",null,[t(d("Md"),{cn:B.cn,us:B.us},null),t(d("demo-sort"),{cols:1},{default:()=>[t(d("demo-container"),{api:G,code:W},{default:()=>[t($,null,null)]}),t(d("demo-container"),{api:ht,code:$t},{default:()=>[t(S,null,null)]}),t(d("demo-container"),{api:qt,code:Lt},{default:()=>[t(I,null,null)]}),t(d("demo-container"),{api:ue,code:fe},{default:()=>[t(U,null,null)]}),t(d("demo-container"),{api:Dt,code:Ut},{default:()=>[t(z,null,null)]}),t(d("demo-container"),{api:se,code:re},{default:()=>[t(D,null,null)]}),t(d("demo-container"),{api:Xt,code:Zt},{default:()=>[t(A,null,null)]}),t(d("demo-container"),{api:ut,code:ft},{default:()=>[t(x,null,null)]}),t(d("demo-container"),{api:xt,code:wt},{default:()=>[t(E,null,null)]}),t(d("demo-container"),{api:st,code:rt},{default:()=>[t(P,null,null)]}),t(d("demo-container"),{api:mt,code:Tt},{default:()=>[t(w,null,null)]})]}),t(d("api"),null,{default:()=>[t(Ce,null,null)]})])}};export{Pe as default};

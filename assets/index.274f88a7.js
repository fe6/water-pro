import{d as y,k as f,w as _,Y as o,bw as h,bx as u,by as n,b as e,bz as s,cf as I,br as P,F as N,D as K,bO as U}from"./vendor.846be9ce.js";var B=`<cn>
#### \u6298\u53E0\u9762\u677F
\u53EF\u4EE5\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u9ED8\u8BA4\u5C55\u5F00\u4E86\u7B2C\u4E00\u4E2A\u3002
</cn>

<us>
#### Collapse
By default, any number of panels can be expanded at a time. The first panel is expanded in this example.
</us>
`,b=y({setup(){const t="A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",a=f(["1"]);return _(a,i=>{console.log(i)}),{text:t,activeKey:a}}});function O(t,a,i,c,r,m){const l=o("a-collapse-panel"),d=o("a-collapse");return h(),u(d,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=p=>t.activeKey=p)},{default:n(()=>[e(l,{key:"1",header:"This is panel header 1"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"2",header:"This is panel header 2",disabled:!1},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"3",header:"This is panel header 3",disabled:""},{default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1},8,["activeKey"])}b.render=O;var E=`<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" disabled>
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;
    const activeKey = ref(['1']);

    watch(activeKey, val => {
      console.log(val);
    });

    return {
      text,
      activeKey,
    };
  },
});
<\/script>
`,M=`<cn>
#### \u624B\u98CE\u7434
\u624B\u98CE\u7434\uFF0C\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A tab\u3002
</cn>

<us>
#### Accordion
In accordion mode, only one panel can be expanded at a time.
</us>
`,x=y({setup(){return{activeKey:f([]),text:"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world."}}});function D(t,a,i,c,r,m){const l=o("a-collapse-panel"),d=o("a-collapse");return h(),u(d,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=p=>t.activeKey=p),accordion:""},{default:n(()=>[e(l,{key:"1",header:"This is panel header 1"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"2",header:"This is panel header 2",disabled:!1},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"3",header:"This is panel header 3"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1},8,["activeKey"])}x.render=D;var V=`<template>
  <a-collapse v-model:activeKey="activeKey" accordion>
    <a-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeKey = ref([]);
    const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;

    return {
      activeKey,
      text,
    };
  },
});
<\/script>
`,z=`<cn>
#### \u81EA\u5B9A\u4E49\u9762\u677F
\u81EA\u5B9A\u4E49\u5404\u4E2A\u9762\u677F\u7684\u80CC\u666F\u8272\u3001\u5706\u89D2\u3001\u8FB9\u8DDD\u548C\u56FE\u6807\u3002
</cn>

<us>
#### Custom Panel
Customize the background, border and margin styles and icon for each panel.
</us>
`,k=y({components:{CaretRightOutlined:I},setup(){return{activeKey:f(["1"]),text:"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",customStyle:"background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden"}}});function R(t,a,i,c,r,m){const l=o("caret-right-outlined"),d=o("a-collapse-panel"),p=o("a-collapse");return h(),u(p,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=v=>t.activeKey=v),bordered:!1},{expandIcon:n(({isActive:v})=>[e(l,{rotate:v?90:0},null,8,["rotate"])]),default:n(()=>[e(d,{key:"1",header:"This is panel header 1",style:t.customStyle},{default:n(()=>[e("p",null,s(t.text),1)]),_:1},8,["style"]),e(d,{key:"2",header:"This is panel header 2",style:t.customStyle},{default:n(()=>[e("p",null,s(t.text),1)]),_:1},8,["style"]),e(d,{key:"3",header:"This is panel header 3",style:t.customStyle},{default:n(()=>[e("p",null,s(t.text),1)]),_:1},8,["style"])]),_:1},8,["activeKey"])}k.render=R;var F=`<template>
  <a-collapse v-model:activeKey="activeKey" :bordered="false">
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0" />
    </template>
    <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { CaretRightOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    CaretRightOutlined,
  },
  setup() {
    const activeKey = ref(['1']);
    const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;
    const customStyle =
      'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';
    return {
      activeKey,
      text,
      customStyle,
    };
  },
});
<\/script>
`,Y=`<cn>
#### \u9762\u677F\u5D4C\u5957
\u5D4C\u5957\u6298\u53E0\u9762\u677F\u3002
</cn>

<us>
#### Nested panel
\`Collapse\` is nested inside the \`Collapse\`.
</us>
`,w=y({setup(){return{activeKey:f([]),text:"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",changeActivekey:c=>{console.log(c)}}}});function j(t,a,i,c,r,m){const l=o("a-collapse-panel"),d=o("a-collapse");return h(),u(d,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=p=>t.activeKey=p),onChange:t.changeActivekey},{default:n(()=>[e(l,{key:"1",header:"This is panel header 1"},{default:n(()=>[e(d,{"default-active-key":"4"},{default:n(()=>[e(l,{key:"4",header:"This is panel nest panel"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1})]),_:1}),e(l,{key:"2",header:"This is panel header 2",disabled:!1},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"3",header:"This is panel header 3"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1},8,["activeKey","onChange"])}w.render=j;var W=`<template>
  <a-collapse v-model:activeKey="activeKey" @change="changeActivekey">
    <a-collapse-panel key="1" header="This is panel header 1">
      <a-collapse default-active-key="4">
        <a-collapse-panel key="4" header="This is panel nest panel">
          <p>{{ text }}</p>
        </a-collapse-panel>
      </a-collapse>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeKey = ref([]);
    const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;

    const changeActivekey = (key: string) => {
      console.log(key);
    };

    return {
      activeKey,
      text,
      changeActivekey,
    };
  },
});
<\/script>
`,q=`<cn>
#### \u9690\u85CF\u7BAD\u5934
\u4F60\u53EF\u4EE5\u901A\u8FC7 \`:showArrow="false"\` \u9690\u85CF \`a-collapse-panel\` \u7EC4\u4EF6\u7684\u7BAD\u5934\u56FE\u6807\u3002
</cn>

<us>
#### No arrow
You can hide the arrow icon by passing \`showArrow={false}\` to \`CollapsePanel\` component.
</us>
`,C=y({setup(){const t=f(["1"]),a="A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.";return _(t,i=>{console.log("activeKey",i)}),{activeKey:t,text:a}}});function G(t,a,i,c,r,m){const l=o("a-collapse-panel"),d=o("a-collapse");return h(),u(d,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=p=>t.activeKey=p)},{default:n(()=>[e(l,{key:"1",header:"This is panel header with arrow icon"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"2",header:"This is panel header with no arrow icon","show-arrow":!1},{default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1},8,["activeKey"])}C.render=G;var H=`<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel key="1" header="This is panel header with arrow icon">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header with no arrow icon" :show-arrow="false">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const activeKey = ref(['1']);
    const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;

    watch(activeKey, val => {
      console.log('activeKey', val);
    });

    return {
      activeKey,
      text,
    };
  },
});
<\/script>
`,J=`<cn>
#### \u989D\u5916\u8282\u70B9
\u53EF\u4EE5\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u9ED8\u8BA4\u5C55\u5F00\u4E86\u7B2C\u4E00\u4E2A\u3002
</cn>

<us>
#### Extra node
More than one panel can be expanded at a time, the first panel is initialized to be active in this case.
</us>
`,T=y({components:{SettingOutlined:P},setup(){const t="A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",a=f(["1"]),i="left",c=r=>{r.stopPropagation()};return _(a,r=>{console.log(r)}),{text:t,activeKey:a,expandIconPosition:i,handleClick:c}}});const L=e("br",null,null,-1),Q=e("span",null,"Expand Icon Position:",-1),X=K("left"),Z=K("right");function ee(t,a,i,c,r,m){const l=o("setting-outlined"),d=o("a-collapse-panel"),p=o("a-collapse"),v=o("a-select-option"),S=o("a-select");return h(),u(N,null,[e(p,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=g=>t.activeKey=g),"expand-icon-position":t.expandIconPosition},{default:n(()=>[e(d,{key:"1",header:"This is panel header 1"},{extra:n(()=>[e(l,{onClick:t.handleClick},null,8,["onClick"])]),default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(d,{key:"2",header:"This is panel header 2",disabled:!1},{extra:n(()=>[e(l,{onClick:t.handleClick},null,8,["onClick"])]),default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(d,{key:"3",header:"This is panel header 3",disabled:""},{extra:n(()=>[e(l,{onClick:t.handleClick},null,8,["onClick"])]),default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1},8,["activeKey","expand-icon-position"]),L,Q,e(S,{value:t.expandIconPosition,"onUpdate:value":a[2]||(a[2]=g=>t.expandIconPosition=g)},{default:n(()=>[e(v,{value:"left"},{default:n(()=>[X]),_:1}),e(v,{value:"right"},{default:n(()=>[Z]),_:1})]),_:1},8,["value"])],64)}T.render=ee;var te=`<template>
  <a-collapse v-model:activeKey="activeKey" :expand-icon-position="expandIconPosition">
    <a-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" disabled>
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </a-collapse-panel>
  </a-collapse>
  <br />
  <span>Expand Icon Position:</span>
  <a-select v-model:value="expandIconPosition">
    <a-select-option value="left">left</a-select-option>
    <a-select-option value="right">right</a-select-option>
  </a-select>
</template>
<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const text = \`A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.\`;
    const activeKey = ref(['1']);
    const expandIconPosition = 'left';

    const handleClick = (event: MouseEvent) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    };
    watch(activeKey, val => {
      console.log(val);
    });

    return {
      text,
      activeKey,
      expandIconPosition,
      handleClick,
    };
  },
});
<\/script>
`,ne=`<cn>
#### \u7B80\u6D01\u98CE\u683C
\u4E00\u5957\u6CA1\u6709\u8FB9\u6846\u7684\u7B80\u6D01\u6837\u5F0F\u3002
</cn>

<us>
#### Borderless
A borderless style of Collapse.
</us>
`,$=y({setup(){return{activeKey:f(["1"]),text:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}}});function ae(t,a,i,c,r,m){const l=o("a-collapse-panel"),d=o("a-collapse");return h(),u(d,{activeKey:t.activeKey,"onUpdate:activeKey":a[1]||(a[1]=p=>t.activeKey=p),bordered:!1},{default:n(()=>[e(l,{key:"1",header:"This is panel header 1"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"2",header:"This is panel header 2",disabled:!1},{default:n(()=>[e("p",null,s(t.text),1)]),_:1}),e(l,{key:"3",header:"This is panel header 3"},{default:n(()=>[e("p",null,s(t.text),1)]),_:1})]),_:1},8,["activeKey"])}$.render=ae;var oe=`<template>
  <a-collapse v-model:activeKey="activeKey" :bordered="false">
    <a-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const activeKey = ref(['1']);
    const text = \`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.\`;
    return {
      activeKey,
      text,
    };
  },
});
<\/script>
`;const le={class:"markdown-body"},se=U("<h2>API</h2><h3>Collapse</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>activeKey(v-model)</td><td>\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 key</td><td>string[]|string</td><td>\u9ED8\u8BA4\u65E0\uFF0Caccordion \u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u7B2C\u4E00\u4E2A\u5143\u7D20</td><td></td></tr><tr><td>defaultActiveKey</td><td>\u521D\u59CB\u5316\u9009\u4E2D\u9762\u677F\u7684 key</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>bordered</td><td>\u5E26\u8FB9\u6846\u98CE\u683C\u7684\u6298\u53E0\u9762\u677F</td><td>boolean</td><td><code>true</code></td><td></td></tr><tr><td>accordion</td><td>\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>expandIcon</td><td>\u81EA\u5B9A\u4E49\u5207\u6362\u56FE\u6807</td><td>Function(props):VNode | slot=\u201CexpandIcon\u201D slot-scope=\u201Cprops\u201D</td><td>#expandIcon=\u201Cprops\u201D</td><td></td></tr><tr><td>expandIconPosition</td><td>\u8BBE\u7F6E\u56FE\u6807\u4F4D\u7F6E\uFF1A <code>left</code>, <code>right</code></td><td><code>left</code></td><td>-</td><td>1.5.0</td></tr><tr><td>destroyInactivePanel</td><td>\u9500\u6BC1\u6298\u53E0\u9690\u85CF\u7684\u9762\u677F</td><td>boolean</td><td><code>false</code></td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03</td><td>function(key)</td><td></td></tr></tbody></table><h3>Collapse.Panel</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>disabled</td><td>\u7981\u7528\u540E\u7684\u9762\u677F\u5C55\u5F00\u4E0E\u5426\u5C06\u65E0\u6CD5\u901A\u8FC7\u7528\u6237\u4EA4\u4E92\u6539\u53D8</td><td>boolean</td><td>false</td><td></td></tr><tr><td>forceRender</td><td>\u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784</td><td>boolean</td><td>false</td><td></td></tr><tr><td>header</td><td>\u9762\u677F\u5934\u5185\u5BB9</td><td>string|slot</td><td>\u65E0</td><td></td></tr><tr><td>key</td><td>\u5BF9\u5E94 activeKey</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>showArrow</td><td>\u662F\u5426\u5C55\u793A\u5F53\u524D\u9762\u677F\u4E0A\u7684\u7BAD\u5934</td><td>boolean</td><td><code>true</code></td><td></td></tr><tr><td>extra</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E2A\u9762\u677F\u53F3\u4E0A\u89D2\u7684\u5185\u5BB9</td><td>VNode | slot</td><td>-</td><td>1.5.0</td></tr></tbody></table>",7),de={expose:[],setup(t){return(a,i)=>(h(),u("div",le,[se]))}};var ie=de;const A={cn:`# Collapse\u6298\u53E0\u9762\u677F

\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u5BF9\u590D\u6742\u533A\u57DF\u8FDB\u884C\u5206\u7EC4\u548C\u9690\u85CF\uFF0C\u4FDD\u6301\u9875\u9762\u7684\u6574\u6D01\u3002
- '\u624B\u98CE\u7434' \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u533A\u57DF\u5C55\u5F00\u3002

          ## \u4EE3\u7801\u6F14\u793A`,us:`# Collapse
A content area which can be collapsed and expanded.
## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- 'Accordion' is a special kind of 'Collapse', which allows only one panel to be expanded at a time.
## Examples
`};var ce={category:"Components",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Collapse",subtitle:"\u6298\u53E0\u9762\u677F",cols:1,render(){return e("div",null,[e(o("Md"),{cn:A.cn,us:A.us},null),e(o("demo-sort"),{cols:1},{default:()=>[e(o("demo-container"),{api:B,code:E},{default:()=>[e(b,null,null)]}),e(o("demo-container"),{api:M,code:V},{default:()=>[e(x,null,null)]}),e(o("demo-container"),{api:Y,code:W},{default:()=>[e(w,null,null)]}),e(o("demo-container"),{api:ne,code:oe},{default:()=>[e($,null,null)]}),e(o("demo-container"),{api:z,code:F},{default:()=>[e(k,null,null)]}),e(o("demo-container"),{api:q,code:H},{default:()=>[e(C,null,null)]}),e(o("demo-container"),{api:J,code:te},{default:()=>[e(T,null,null)]})]}),e(o("api"),null,{default:()=>[e(ie,null,null)]})])}};export{ce as default};

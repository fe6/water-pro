import{d as c,k as s,q as B,Y as a,bw as i,bx as u,b as n,by as L,D as b,L as v,bO as F}from"./vendor.846be9ce.js";import{A as m}from"./main.f0d1f01d.js";const N=[{label:"water",value:80},{label:"antd",value:180},{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}];var C=c({setup(){const e=s([]);B(()=>{setTimeout(()=>{e.value=N.slice()},1e3)});const t=({params:l,success:r})=>{setTimeout(()=>{console.log(l,"8"),r(!0)},1200)};return{tags:s([80,380]),tagNewOptions:e,beforeOk:t}}});function S(e,t,l,r,p,g){const d=a("a-tag-modal-list");return i(),u("div",null,[n(d,{value:e.tags,"onUpdate:value":t[1]||(t[1]=o=>e.tags=o),createable:"",createPlaceholder:"\u8BBE\u7F6E\u6807\u7B7E",showSelected:!1,createIcon:!1,createBordered:!1,options:e.tagNewOptions,valueLabel:"value",nameLabel:"label",beforeOk:e.beforeOk},null,8,["value","options","beforeOk"])])}C.render=S;var O=`<cn>
#### options
options\u3002
</cn>

<us>
#### options
options.
</us>
`,E=`<template>
  <div>
    <a-tag-modal-list
      v-model:value="tags"
      createable
      createPlaceholder="\u8BBE\u7F6E\u6807\u7B7E"
      :showSelected="false"
      :createIcon="false"
      :createBordered="false"
      :options="tagNewOptions"
      valueLabel="value"
      nameLabel="label"
      :beforeOk="beforeOk"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

const tagOptions = [
  {
    label: 'water',
    value: 80,
  },
  {
    label: 'antd',
    value: 180,
  },
  {
    label: '\u91D1\u8302',
    value: 380,
  },
  {
    label: '\u7968\u5927\u5927',
    value: 480,
  },
]

export default defineComponent({
  setup() {
    const tagNewOptions = ref([]);
    onMounted(() => {
      setTimeout(() => {
        tagNewOptions.value = tagOptions.slice();
      }, 1000);
    });
    const beforeOk = ({params, success}) => {
      setTimeout(() => {
        console.log(params, '8');
        success(true);
      }, 1200);
    }
    return {
      tags: ref([80, 380]),
      tagNewOptions,
      beforeOk,
    };
  },
});
<\/script>
`;const P=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var _=c({setup(){const e=s(null);return{tagModalNode:e,onReload:async()=>{await e.value.getTagDatas(!0),console.log(e.value,"tagModalNode")},tags:s([80,380]),tagModalListApi:P}}});const D=b("reload");function x(e,t,l,r,p,g){const d=a("a-button"),o=a("a-divider"),f=a("a-tag-modal-list");return i(),u("div",null,[n(d,{onClick:e.onReload},{default:L(()=>[D]),_:1},8,["onClick"]),n(o),n(f,{value:e.tags,"onUpdate:value":t[1]||(t[1]=h=>e.tags=h),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label",ref:"tagModalNode"},null,8,["value","api"])])}_.render=x;var U=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u57FA\u672C\u4F7F\u7528\u3002
</cn>

<us>
#### basic
basic.
</us>
`,j=`<template>
  <div>
    <a-button @click="onReload">reload</a-button>
    <a-divider></a-divider>
    <a-tag-modal-list
      v-model:value="tags"
      createable
      :api="tagModalListApi"
      valueLabel="value"
      nameLabel="label"
      ref="tagModalNode"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    const tagModalNode = ref(null);
    const onReload = async () => {
      await tagModalNode.value.getTagDatas(true);
      console.log(tagModalNode.value, 'tagModalNode');
    }
    return {
      tagModalNode,
      onReload,
      tags: ref([80, 380]),
      tagModalListApi,
    };
  },
});
<\/script>
`;const q=({params:e,success:t})=>{setTimeout(()=>{t([{label:"water",value:80},{label:"antd",value:180},{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}])},1e3)};var M=c({setup(){return{tags:s([80,380]),tagModalListApi:q}}});function V(e,t,l,r,p,g){const d=a("a-tag-modal-list");return i(),u(d,{value:e.tags,"onUpdate:value":t[1]||(t[1]=o=>e.tags=o),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label"},null,8,["value","api"])}M.render=V;var I=`<cn>
#### \u5F39\u6846\u4E00\u7EF4\u6570\u636E
\u5F39\u6846\u4E00\u7EF4\u6570\u636E\u3002
</cn>

<us>
#### data
data.
</us>
`,z=`<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    valueLabel="value"
    nameLabel="label"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: 'water',
        value: 80,
      },
      {
        label: 'antd',
        value: 180,
      },
      {
        label: '\u91D1\u8302',
        value: 380,
      },
      {
        label: '\u7968\u5927\u5927',
        value: 480,
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    return {
      tags: ref([80, 380]),
      tagModalListApi,
    };
  },
});
<\/script>
`;const H=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var $=c({setup(){return{tags:s([80]),tagModalListApi:H}}});function G(e,t,l,r,p,g){const d=a("a-tag-modal-list");return i(),u(d,{value:e.tags,"onUpdate:value":t[1]||(t[1]=o=>e.tags=o),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label",checkMode:"radio"},null,8,["value","api"])}$.render=G;var W=`<cn>
#### \u5355\u9009\u6A21\u5F0F
\u5355\u9009\u6A21\u5F0F\u3002
</cn>

<us>
#### radio
radio.
</us>
`,Y=`<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    valueLabel="value"
    nameLabel="label"
    checkMode="radio"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    return {
      tags: ref([80]),
      tagModalListApi,
    };
  },
});
<\/script>
`;const J=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var y=c({setup(){return{tags:s([80]),tagModalListApi:J}}});function K(e,t,l,r,p,g){const d=a("a-tag-modal-list");return i(),u(d,{value:e.tags,"onUpdate:value":t[1]||(t[1]=o=>e.tags=o),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label",checkMode:"radio",type:"select"},null,8,["value","api"])}y.render=K;var Q=`<cn>
#### \u5355\u9009 select \u6A21\u5F0F
\u5355\u9009 select \u6A21\u5F0F\u3002
</cn>

<us>
#### radio
radio.
</us>
`,X=`<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    valueLabel="value"
    nameLabel="label"
    checkMode="radio"
    type="select"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    return {
      tags: ref([80]),
      tagModalListApi,
    };
  },
});
<\/script>
`;const Z=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var R=c({setup(){return{tags:s([80,380]),tagModalListApi:Z}}});function ee(e,t,l,r,p,g){const d=a("a-tag-modal-list");return i(),u(d,{style:{width:"300px"},value:e.tags,"onUpdate:value":t[1]||(t[1]=o=>e.tags=o),size:"large",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label",type:"select"},null,8,["value","api"])}R.render=ee;var te=`<cn>
#### select
select\u3002
</cn>

<us>
#### select
select.
</us>
`,ne=`<template>
  <a-tag-modal-list
    style="width: 300px"
    v-model:value="tags"
    size="large"
    :api="tagModalListApi"
    valueLabel="value"
    nameLabel="label"
    type="select"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    return {
      tags: ref([80, 380]),
      tagModalListApi,
    };
  },
});
<\/script>
`;const ae=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var A=c({setup(){return{tags:s([80,380]),tagModalListApi:ae,titleRightRender:()=>{const e={type:"link",onClick:()=>open("http://water.chjgo.com/"),style:"margin-left: 16px"};return n("div",null,[n(m,e,{default:()=>[n(v,null,null),b("\u8BBE\u7F6E")]}),n(m,e,{default:()=>[n(v,null,null),b("\u8BBE\u7F6E")]})])}}}});function le(e,t){const l=a("a-tag-modal-list");return i(),u(l,{value:e.tags,"onUpdate:value":t[1]||(t[1]=r=>e.tags=r),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label",titleRightRender:e.titleRightRender},null,8,["value","api","titleRightRender"])}A.render=le;var de=`<cn>
#### \u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9
\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9\u3002
</cn>

<us>
#### basic
basic.
</us>
`,oe=`<template>
  <a-tag-modal-list
    v-model:value="tags"
    createable
    :api="tagModalListApi"
    valueLabel="value"
    nameLabel="label"
    :titleRightRender="titleRightRender"
  />
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';

import {Button} from '@fe6/water-pro';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    return {
      tags: ref([80, 380]),
      tagModalListApi,
      titleRightRender: () => {
        const btnProps: any = {
          type: 'link',
          onClick: () => open('http://water.chjgo.com/'),
          style: 'margin-left: 16px'
        }
        return (<div>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
        </div>)
      }
    };
  },
});
<\/script>
`;const re=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var T=c({setup(){return{tags:s([80,380]),tagModalListApi:re,titleRightRender:()=>{const e={type:"link",onClick:()=>open("http://water.chjgo.com/"),style:"margin-left: 16px"};return n("div",null,[n(m,e,{default:()=>[n(v,null,null),b("\u8BBE\u7F6E")]}),n(m,e,{default:()=>[n(v,null,null),b("\u8BBE\u7F6E")]})])},beforeCloseFn:()=>new Promise(e=>{setTimeout(()=>{e(!0)},1e3)})}}});function se(e,t){const l=a("a-tag-modal-list");return i(),u(l,{titleRightRender:e.titleRightRender,style:{width:"300px"},value:e.tags,"onUpdate:value":t[1]||(t[1]=r=>e.tags=r),api:e.tagModalListApi,beforeClose:e.beforeCloseFn,valueLabel:"value",nameLabel:"label",type:"select"},null,8,["titleRightRender","value","api","beforeClose"])}T.render=se;var ie=`<cn>
#### \u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9
\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9\u3002
</cn>

<us>
#### basic
basic.
</us>
`,ue=`<template>
  <a-tag-modal-list
    :titleRightRender="titleRightRender"
    style="width: 300px"
    v-model:value="tags"
    :api="tagModalListApi"
    :beforeClose="beforeCloseFn"
    valueLabel="value"
    nameLabel="label"
    type="select"
  />
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import { Button } from '@fe6/water-pro';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    return {
      tags: ref([80, 380]),
      tagModalListApi,
      titleRightRender: () => {
        const btnProps: any = {
          type: 'link',
          onClick: () => open('http://water.chjgo.com/'),
          style: 'margin-left: 16px'
        }
        return (<div>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
          <Button {...btnProps}>
            <CloseCircleFilled />\u8BBE\u7F6E
          </Button>
        </div>)
      },
      beforeCloseFn: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1000);
        })
      },
    };
  },
});
<\/script>
`;const ce=({params:e,success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)};var w=c({setup(){const e=s(null);return{tagModalNode:e,onReload:async()=>{await e.value.getTagDatas(!0),console.log(e.value,"tagModalNode")},tags:s([80,380]),tagModalListApi:ce}}});const pe=b("reload");function ge(e,t,l,r,p,g){const d=a("a-button"),o=a("a-divider"),f=a("a-tag-modal-list");return i(),u("div",null,[n(d,{onClick:e.onReload},{default:L(()=>[pe]),_:1},8,["onClick"]),n(o),n(f,{value:e.tags,"onUpdate:value":t[1]||(t[1]=h=>e.tags=h),createable:"",api:e.tagModalListApi,valueLabel:"value",nameLabel:"label",maxCheckCount:3,ref:"tagModalNode"},null,8,["value","api"])])}w.render=ge;var be=`<cn>
#### \u6700\u591A\u9009\u51E0\u4E2A
\u5728\u591A\u9009\u6A21\u5F0F\uFF0C\u53EF\u8BBE\u7F6E\u6700\u591A\u9009\u51E0\u4E2A\u3002
</cn>

<us>
#### basic
basic.
</us>
`,ve=`<template>
  <div>
    <a-button @click="onReload">reload</a-button>
    <a-divider></a-divider>
    <a-tag-modal-list
      v-model:value="tags"
      createable
      :api="tagModalListApi"
      valueLabel="value"
      nameLabel="label"
      :maxCheckCount="3"
      ref="tagModalNode"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const tagModalListApi = ({params, success}) => {
  setTimeout(() => {
    success([
      {
        label: '\u7EC4\u4EF6\u5E93',
        children: [
          {
            label: 'water',
            value: 80,
          },
          {
            label: 'antd',
            value: 180,
          },
        ],
      },
      {
        label: '\u5B98\u7F51',
        children: [
          {
            label: '\u91D1\u8302',
            value: 380,
          },
          {
            label: '\u7968\u5927\u5927',
            value: 480,
          },
        ],
      },
    ]);
  }, 1000);
}

export default defineComponent({
  setup() {
    const tagModalNode = ref(null);
    const onReload = async () => {
      await tagModalNode.value.getTagDatas(true);
      console.log(tagModalNode.value, 'tagModalNode');
    }
    return {
      tagModalNode,
      onReload,
      tags: ref([80, 380]),
      tagModalListApi,
    };
  },
});
<\/script>
`;const me={class:"markdown-body"},fe=F("<h2>API</h2><h3>Tag</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u9009\u4E2D\u7684\u503C</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>\u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B972\u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6</td><td>number</td><td>4</td><td></td></tr><tr><td>maxTagCount</td><td>\u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709</td><td>number</td><td>4</td><td></td></tr><tr><td>maxCheckCount</td><td>\u5728 <code>type=&quot;checkbox&quot;</code> \u6A21\u5F0F\u53EF\u8BBE\u7F6E\u6700\u591A\u9009\u62E9\u51E0\u4E2A</td><td>number</td><td>-</td><td>3.10.0</td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>createable</td><td>\u4E0D\u8BBE\u7F6E <code>type</code> \u7684\u65F6\u5019\uFF0C\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE</td><td>boolean</td><td>false</td><td></td></tr><tr><td>nameLabel</td><td>\u663E\u793A\u6807\u7B7E\u540D\u5B57\u7684\u5B57\u6BB5</td><td>string</td><td>name</td><td></td></tr><tr><td>valueLabel</td><td>\u63D0\u4EA4\u6570\u636E\u7684\u5B57\u6BB5</td><td>string</td><td>name</td><td></td></tr><tr><td>childrenLabel</td><td>\u5206\u7EC4\u5B50\u96C6\u7684\u5B57\u6BB5\u540D\u5B57</td><td>string</td><td>children</td><td></td></tr><tr><td>api</td><td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td></td></tr><tr><td>apiParams</td><td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>beforeClose</td><td>\u53D6\u6D88\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td></td></tr><tr><td>titleRightRender</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9\u533A\u57DF</td><td>Function</td><td>-</td><td></td></tr><tr><td>modalTitle</td><td>\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u9009\u62E9\u6807\u7B7E</td><td></td></tr><tr><td>createPlaceholder</td><td>\u521B\u5EFA\u6309\u94AE\u7684\u6587\u6848</td><td>string</td><td>\u6DFB\u52A0\u6807\u7B7E</td><td></td></tr><tr><td>type</td><td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>select</code></td><td>string</td><td>-</td><td></td></tr><tr><td>size</td><td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A <code>large</code>\u3002\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>checkMode</td><td>\u9009\u62E9\u7684\u7C7B\u578B\uFF0C\u5355\u9009\u8FD8\u662F\u591A\u9009\u3002</td><td><code>radio</code> | <code>checkbox</code></td><td><code>checkbox</code></td><td></td></tr><tr><td>placeholder</td><td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td><td>string</td><td>-</td><td></td></tr><tr><td>options</td><td>\u53EF\u9009\u6570\u636E</td><td>array</td><td>-</td><td>3.26.0</td></tr><tr><td>showSelected</td><td>type\u4E0D\u662Fselect\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u5DF2\u9009\u9879</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createIcon</td><td>type\u4E0D\u662Fselect\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A+icon</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createBordered</td><td>type\u4E0D\u662Fselect\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u8FB9\u6846\u5185\u8FB9\u8DDD</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>beforeOk</td><td>\u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td>3.26.0</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td>3.27.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close-click</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>(e) =&gt; void</td></tr><tr><td>create-click</td><td>\u70B9\u51FB\u6DFB\u52A0\u89E6\u53D1</td><td>(e) =&gt; void</td></tr><tr><td>change</td><td>\u5F39\u6846\u70B9\u51FB\u786E\u5B9A\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A ok</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u5F39\u6846\u70B9\u51FB\u53D6\u6D88\u89E6\u53D1\u6216\u8005\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A cancel</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u8F93\u5165\u6846\u56DE\u8F66\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A close</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5F53\u524D\u5173\u95ED\u7684\u503C\uFF0C eventType \u4E3A remove</td><td>(name, eventType) =&gt; void</td></tr></tbody></table>",5),he={expose:[],setup(e){return(t,l)=>(i(),u("div",me,[fe]))}};var Le=he;const k={cn:`# TagModalList \u6807\u7B7E\u9009\u62E9\u5668

    \u6807\u7B7E\u7684\u5FEB\u6377\u5C01\u88C5

## \u4F55\u65F6\u4F7F\u7528

- \u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u5C55\u793A
- \u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u9690\u85CF
- \u9700\u8981\u521B\u5EFA\u6807\u7B7E

    ## \u4EE3\u7801\u6F14\u793A`,us:`# TagModalList
TODO

## When To Use

TODO

    ## Examples `};var Me={category:"Components",subtitle:"\u6807\u7B7E\u7EC4",type:"Data Display",title:"TagGroup",render(){return n("div",{id:"components-tag-demo"},[n(a("Md"),{cn:k.cn,us:k.us},null),n(a("demo-sort"),null,{default:()=>[n(a("demo-container"),{api:O,code:E},{default:()=>[n(C,null,null)]}),n(a("demo-container"),{api:U,code:j},{default:()=>[n(_,null,null)]}),n(a("demo-container"),{api:I,code:z},{default:()=>[n(M,null,null)]}),n(a("demo-container"),{api:te,code:ne},{default:()=>[n(R,null,null)]}),n(a("demo-container"),{api:de,code:oe},{default:()=>[n(A,null,null)]}),n(a("demo-container"),{api:ie,code:ue},{default:()=>[n(T,null,null)]}),n(a("demo-container"),{api:W,code:Y},{default:()=>[n($,null,null)]}),n(a("demo-container"),{api:Q,code:X},{default:()=>[n(y,null,null)]}),n(a("demo-container"),{api:be,code:ve},{default:()=>[n(w,null,null)]})]}),n(a("api"),null,{default:()=>[n(Le,null,null)]})])}};export{Me as default};

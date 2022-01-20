import{d as c,k as o,bG as h,bH as _,Y as r,bw as v,bx as m,b as t,bI as g,D as x,cm as A,bM as B,o as T,bO as z}from"./vendor.846be9ce.js";var y=c({setup(){const e=o(0),n=o([20,50]),d=o(!1);return{value1:e,value2:n,disabled:d}}});const O=g();h("data-v-3dc06184");const R=x(" Disabled: ");_();const E=O((e,n,d,s,p,i)=>{const a=r("a-slider"),l=r("a-switch");return v(),m("div",null,[t(a,{id:"test",value:e.value1,"onUpdate:value":n[1]||(n[1]=u=>e.value1=u),disabled:e.disabled},null,8,["value","disabled"]),t(a,{range:"",value:e.value2,"onUpdate:value":n[2]||(n[2]=u=>e.value2=u),disabled:e.disabled},null,8,["value","disabled"]),R,t(l,{size:"small",checked:e.disabled,"onUpdate:checked":n[3]||(n[3]=u=>e.disabled=u)},null,8,["checked"])])});y.render=E;y.__scopeId="data-v-3dc06184";var D="<cn>\n#### \u57FA\u672C\u4F7F\u7528\n\u57FA\u672C\u6ED1\u52A8\u6761\u3002\u5F53 `range` \u4E3A `true` \u65F6\uFF0C\u6E32\u67D3\u4E3A\u53CC\u6ED1\u5757\u3002\u5F53 `disabled` \u4E3A `true` \u65F6\uFF0C\u6ED1\u5757\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\u3002\n</cn>\n\n<us>\n#### Basic\nBasic slider. When `range` is `true`, display as dual thumb mode. When `disable` is `true`, the slider will not be interactable.\n</us>\n",W=`<template>
  <div>
    <a-slider id="test" v-model:value="value1" :disabled="disabled" />
    <a-slider range v-model:value="value2" :disabled="disabled" />
    Disabled:
    <a-switch size="small" v-model:checked="disabled" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(0);
    const value2 = ref<number[]>([20, 50]);
    const disabled = ref<boolean>(false);

    return {
      value1,
      value2,
      disabled,
    };
  },
});
<\/script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
`,k=c({setup(){const e=o(0),n=o(1);return{inputValue:e,inputValue1:n}}});const b=g(),M=b((e,n,d,s,p,i)=>{const a=r("a-slider"),l=r("a-col"),u=r("a-input-number"),C=r("a-row");return v(),m("div",null,[t(C,null,{default:b(()=>[t(l,{span:12},{default:b(()=>[t(a,{value:e.inputValue1,"onUpdate:value":n[1]||(n[1]=f=>e.inputValue1=f),min:1,max:20},null,8,["value"])]),_:1}),t(l,{span:4},{default:b(()=>[t(u,{value:e.inputValue1,"onUpdate:value":n[2]||(n[2]=f=>e.inputValue1=f),min:1,max:20,style:{"margin-left":"16px"}},null,8,["value"])]),_:1})]),_:1}),t(C,null,{default:b(()=>[t(l,{span:12},{default:b(()=>[t(a,{value:e.inputValue,"onUpdate:value":n[3]||(n[3]=f=>e.inputValue=f),min:0,max:1,step:.01},null,8,["value","step"])]),_:1}),t(l,{span:4},{default:b(()=>[t(u,{value:e.inputValue,"onUpdate:value":n[4]||(n[4]=f=>e.inputValue=f),min:0,max:1,step:.01,style:{"margin-left":"16px"}},null,8,["value","step"])]),_:1})]),_:1})])});k.render=M;k.__scopeId="data-v-6ce0c132";var j=`<cn>
#### \u5E26\u8F93\u5165\u6846\u7684\u6ED1\u5757
\u548C [\u6570\u5B57\u8F93\u5165\u6846](/components/input-number-cn/) \u7EC4\u4EF6\u4FDD\u6301\u540C\u6B65\u3002
</cn>

<us>
#### Slider with InputNumber
Synchronize with [InputNumber](/components/input-number/) component.
</us>
`,P=`<template>
  <div>
    <a-row>
      <a-col :span="12">
        <a-slider v-model:value="inputValue1" :min="1" :max="20" />
      </a-col>
      <a-col :span="4">
        <a-input-number v-model:value="inputValue1" :min="1" :max="20" style="margin-left: 16px" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-slider v-model:value="inputValue" :min="0" :max="1" :step="0.01" />
      </a-col>
      <a-col :span="4">
        <a-input-number
          v-model:value="inputValue"
          :min="0"
          :max="1"
          :step="0.01"
          style="margin-left: 16px"
        />
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref<number>(0);
    const inputValue1 = ref<number>(1);
    return {
      inputValue,
      inputValue1,
    };
  },
});
<\/script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
`,$=c({components:{FrownOutlined:A,SmileOutlined:B},setup(){const e=o(0),n=o(0),d=o(20),s=T(()=>{const i=+((d.value-n.value)/2).toFixed(5);return e.value>=i?"":"rgba(0, 0, 0, .45)"}),p=T(()=>{const i=+((d.value-n.value)/2).toFixed(5);return e.value>=i?"rgba(0, 0, 0, .45)":""});return{sliderValue:e,min:n,max:d,preColor:s,nextColor:p}}});const Y=g();h("data-v-bb42789a");const G={class:"icon-wrapper"};_();const H=Y((e,n,d,s,p,i)=>{const a=r("frown-outlined"),l=r("a-slider"),u=r("smile-outlined");return v(),m("div",G,[t(a,{style:{color:e.preColor}},null,8,["style"]),t(l,{min:0,max:20,value:e.sliderValue,"onUpdate:value":n[1]||(n[1]=C=>e.sliderValue=C)},null,8,["value"]),t(u,{style:{color:e.nextColor}},null,8,["style"])])});$.render=H;$.__scopeId="data-v-bb42789a";var q=`<cn>
#### \u5E26 icon \u7684\u6ED1\u5757
\u6ED1\u5757\u5DE6\u53F3\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u6807\u6765\u8868\u8FBE\u4E1A\u52A1\u542B\u4E49\u3002
</cn>

<us>
#### Slider with icon
You can add an icon beside the slider to make it meaningful.
</us>
`,J=`<template>
  <div class="icon-wrapper">
    <frown-outlined :style="{ color: preColor }" />
    <a-slider :min="0" :max="20" v-model:value="sliderValue" />
    <smile-outlined :style="{ color: nextColor }" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    FrownOutlined,
    SmileOutlined,
  },
  setup() {
    const sliderValue = ref<number>(0);
    const min = ref<number>(0);
    const max = ref<number>(20);

    const preColor = computed(() => {
      const mid = +((max.value - min.value) / 2).toFixed(5);
      return sliderValue.value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    });

    const nextColor = computed(() => {
      const mid = +((max.value - min.value) / 2).toFixed(5);
      return sliderValue.value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    });

    return {
      sliderValue,
      min,
      max,
      preColor,
      nextColor,
    };
  },
});
<\/script>
<style scoped>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}
</style>
`,I=c({setup(){return{disabled:o(!1),formatter:d=>`${d}%`}}});function K(e,n,d,s,p,i){const a=r("a-slider");return v(),m("div",null,[t(a,{"tip-formatter":e.formatter},null,8,["tip-formatter"]),t(a,{"tip-formatter":null})])}I.render=K;var L="<cn>\n#### \u81EA\u5B9A\u4E49\u63D0\u793A\n\u4F7F\u7528 `tipFormatter` \u53EF\u4EE5\u683C\u5F0F\u5316 `Tooltip` \u7684\u5185\u5BB9\uFF0C\u8BBE\u7F6E `tipFormatter={null}`\uFF0C\u5219\u9690\u85CF `Tooltip`\u3002\n</cn>\n\n<us>\n#### Customize tooltip\nUse `tipFormatter` to format content of `Toolip`. If `tipFormatter` is null, hide it.\n</us>\n",Q=`<template>
  <div>
    <a-slider :tip-formatter="formatter" />
    <a-slider :tip-formatter="null" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const disabled = ref<boolean>(false);
    const formatter = (value: number) => {
      return \`\${value}%\`;
    };

    return {
      disabled,
      formatter,
    };
  },
});
<\/script>
`,w=c({setup(){const e=o(30),n=o([20,50]);return{value1:e,value2:n,onAfterChange:s=>{console.log("afterChange: ",s)}}}});const X=g();h("data-v-dcedfe50");const Z={class:"code-box-demo"};_();const ee=X((e,n,d,s,p,i)=>{const a=r("a-slider");return v(),m("div",Z,[t(a,{value:e.value1,"onUpdate:value":n[1]||(n[1]=l=>e.value1=l),onAfterChange:e.onAfterChange},null,8,["value","onAfterChange"]),t(a,{range:"",step:10,value:e.value2,"onUpdate:value":n[2]||(n[2]=l=>e.value2=l),onAfterChange:e.onAfterChange},null,8,["value","onAfterChange"])])});w.render=ee;w.__scopeId="data-v-dcedfe50";var ne="<cn>\n#### \u4E8B\u4EF6\n\u5F53 Slider \u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 `onChange` \u4E8B\u4EF6\uFF0C\u5E76\u628A\u6539\u53D8\u540E\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002\u5728 `onmouseup` \u65F6\uFF0C\u4F1A\u89E6\u53D1 `onAfterChange` \u4E8B\u4EF6\uFF0C\u5E76\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002\n</cn>\n\n<us>\n#### Event\nThe `onChange` callback function will fire when the user changes the slider's value.\nThe `onAfterChange` callback function will fire when `onmouseup` fired.\n</us>\n",te=`<template>
  <div class="code-box-demo">
    <a-slider v-model:value="value1" @afterChange="onAfterChange" />
    <a-slider range :step="10" v-model:value="value2" @afterChange="onAfterChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<number[]>([20, 50]);

    const onAfterChange = (value: number) => {
      console.log('afterChange: ', value);
    };

    return {
      value1,
      value2,
      onAfterChange,
    };
  },
});
<\/script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
`,S=c({setup(){const e=o(37),n=o([26,37]),d=o(37),s=o(37),p=o(37),i=o({0:"0\xB0C",26:"26\xB0C",37:"37\xB0C",100:{style:{color:"#f50"},label:t("strong",{},"100\xB0C")}});return{value1:e,value2:n,value3:d,value4:s,value5:p,marks:i}}});const le=g();h("data-v-db418718");const ae={id:"components-slider-demo-mark"},re=t("h4",null,"included=true",-1),oe=t("h4",null,"included=false",-1),de=t("h4",null,"marks & step",-1),se=t("h4",null,"step=null",-1);_();const ue=le((e,n,d,s,p,i)=>{const a=r("a-slider");return v(),m("div",ae,[re,t(a,{marks:e.marks,value:e.value1,"onUpdate:value":n[1]||(n[1]=l=>e.value1=l)},null,8,["marks","value"]),t(a,{range:"",marks:e.marks,value:e.value2,"onUpdate:value":n[2]||(n[2]=l=>e.value2=l)},null,8,["marks","value"]),oe,t(a,{marks:e.marks,included:!1,value:e.value3,"onUpdate:value":n[3]||(n[3]=l=>e.value3=l)},null,8,["marks","value"]),de,t(a,{marks:e.marks,step:10,value:e.value4,"onUpdate:value":n[4]||(n[4]=l=>e.value4=l)},null,8,["marks","value"]),se,t(a,{marks:e.marks,step:null,value:e.value5,"onUpdate:value":n[5]||(n[5]=l=>e.value5=l)},null,8,["marks","value"])])});S.render=ue;S.__scopeId="data-v-db418718";var ie="<cn>\n#### \u5E26\u6807\u7B7E\u7684\u6ED1\u5757\n\u4F7F\u7528 `marks` \u5C5E\u6027\u6807\u6CE8\u5206\u6BB5\u5F0F\u6ED1\u5757\uFF0C\u4F7F\u7528 `value` / `defaultValue` \u6307\u5B9A\u6ED1\u5757\u4F4D\u7F6E\u3002\u5F53 `included=false` \u65F6\uFF0C\u8868\u660E\u4E0D\u540C\u6807\u8BB0\u95F4\u4E3A\u5E76\u5217\u5173\u7CFB\u3002\u5F53 `step=null` \u65F6\uFF0CSlider \u7684\u53EF\u9009\u503C\u4EC5\u6709 `marks` \u6807\u51FA\u6765\u7684\u90E8\u5206\u3002\n</cn>\n\n<us>\n#### Graduated slider\nUsing `marks` property to mark a graduated slider, use `value` or `defaultValue` to specify the position of thumb.\nWhen `included` is false, means that different thumbs are coordinative.\nwhen `step` is null, users can only slide the thumbs onto marks.\n</us>\n",pe=`<template>
  <div id="components-slider-demo-mark">
    <h4>included=true</h4>
    <a-slider :marks="marks" v-model:value="value1" />
    <a-slider range :marks="marks" v-model:value="value2" />

    <h4>included=false</h4>
    <a-slider :marks="marks" :included="false" v-model:value="value3" />

    <h4>marks & step</h4>
    <a-slider :marks="marks" :step="10" v-model:value="value4" />

    <h4>step=null</h4>
    <a-slider :marks="marks" :step="null" v-model:value="value5" />
  </div>
</template>
<script lang="ts">
import { defineComponent, createVNode, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(37);
    const value2 = ref<number[]>([26, 37]);
    const value3 = ref<number>(37);
    const value4 = ref<number>(37);
    const value5 = ref<number>(37);
    const marks = ref<Record<number, any>>({
      0: '0\xB0C',
      26: '26\xB0C',
      37: '37\xB0C',
      100: {
        style: {
          color: '#f50',
        },
        label: createVNode('strong', {}, '100\xB0C'),
      },
    });

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      marks,
    };
  },
});
<\/script>
<style scoped>
#components-slider-demo-mark h4 {
  margin: 0 0 16px;
}
#components-slider-demo-mark .ant-slider-with-marks {
  margin-bottom: 44px;
}
</style>
`,V=c({setup(){const e=o(30),n=o([20,50]),d=o([26,37]),s=o({0:"0\xB0C",26:"26\xB0C",37:"37\xB0C",100:{style:{color:"#f50"},label:t("strong",{},"100\xB0C")}});return{value1:e,value2:n,value3:d,marks:s}}});const ve=g();h("data-v-68034fd1");const me={style:{height:"300px"}},ce={style:{display:"inline-block",height:"300px","margin-left":"70px"}},fe={style:{display:"inline-block",height:"300px","margin-left":"70px"}},be={style:{display:"inline-block",height:"300px","margin-left":"70px"}};_();const ge=ve((e,n,d,s,p,i)=>{const a=r("a-slider");return v(),m("div",me,[t("div",ce,[t(a,{vertical:"",value:e.value1,"onUpdate:value":n[1]||(n[1]=l=>e.value1=l)},null,8,["value"])]),t("div",fe,[t(a,{vertical:"",range:"",step:10,value:e.value2,"onUpdate:value":n[2]||(n[2]=l=>e.value2=l)},null,8,["value"])]),t("div",be,[t(a,{vertical:"",range:"",marks:e.marks,value:e.value3,"onUpdate:value":n[3]||(n[3]=l=>e.value3=l)},null,8,["marks","value"])])])});V.render=ge;V.__scopeId="data-v-68034fd1";var he=`<cn>
#### \u5782\u76F4
\u5782\u76F4\u65B9\u5411\u7684 Slider\u3002
</cn>

<us>
#### Vertical
The vertical Slider.
</us>
`,_e=`<template>
  <div style="height: 300px">
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <a-slider vertical v-model:value="value1" />
    </div>
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <a-slider vertical range :step="10" v-model:value="value2" />
    </div>
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <a-slider vertical range :marks="marks" v-model:value="value3" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, createVNode } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<number[]>([20, 50]);
    const value3 = ref<number[]>([26, 37]);
    const marks = ref<Record<number, any>>({
      0: '0\xB0C',
      26: '26\xB0C',
      37: '37\xB0C',
      100: {
        style: {
          color: '#f50',
        },
        label: createVNode('strong', {}, '100\xB0C'),
      },
    });

    return {
      value1,
      value2,
      value3,
      marks,
    };
  },
});
<\/script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
`,U=c({setup(){return{value:o(30)}}});function Ce(e,n,d,s,p,i){const a=r("a-slider");return v(),m(a,{value:e.value,"onUpdate:value":n[1]||(n[1]=l=>e.value=l),"tooltip-visible":!0},null,8,["value"])}U.render=Ce;var ye=`<cn>
#### \u63A7\u5236 ToolTip \u7684\u663E\u793A
\u5F53 \`tooltipVisible\` \u4E3A \`true\` \u65F6\uFF0C\u5C06\u59CB\u7EC8\u663E\u793AToolTip\uFF1B\u53CD\u4E4B\u5219\u59CB\u7EC8\u4E0D\u663E\u793A\uFF0C\u5373\u4F7F\u5728\u62D6\u52A8\u3001\u79FB\u5165\u65F6\u4E5F\u662F\u5982\u6B64\u3002
</cn>

<us>
#### Control visible of ToolTip
When \`tooltipVisible\` is \`true\`, ToolTip will show always, or ToolTip will not show anyway, even if dragging or hovering.
</us>
`,ke=`<template>
  <a-slider v-model:value="value" :tooltip-visible="true" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<number>(30);

    return {
      value,
    };
  },
});
<\/script>
`,F=c({setup(){const e=o(30),n=o([20,50]),d=o(!0);return{value1:e,value2:n,reverse:d}}});const $e=x(" Reversed: ");function we(e,n,d,s,p,i){const a=r("a-slider"),l=r("a-switch");return v(),m("div",null,[t(a,{value:e.value1,"onUpdate:value":n[1]||(n[1]=u=>e.value1=u),reverse:e.reverse},null,8,["value","reverse"]),t(a,{range:"",value:e.value2,"onUpdate:value":n[2]||(n[2]=u=>e.value2=u),reverse:e.reverse},null,8,["value","reverse"]),$e,t(l,{size:"small",checked:e.reverse,"onUpdate:checked":n[3]||(n[3]=u=>e.reverse=u)},null,8,["checked"])])}F.render=we;var Se=`<cn>
#### \u53CD\u5411
\u8BBE\u7F6E \`reverse\` \u53EF\u4EE5\u5C06\u6ED1\u52A8\u6761\u7F6E\u53CD\u3002
</cn>

<us>
#### Reverse
Using \`reverse\` to render slider reversely.
</us>
`,Ve=`<template>
  <div>
    <a-slider v-model:value="value1" :reverse="reverse" />
    <a-slider range v-model:value="value2" :reverse="reverse" />
    Reversed:
    <a-switch size="small" v-model:checked="reverse" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<number[]>([20, 50]);
    const reverse = ref<boolean>(true);

    return {
      value1,
      value2,
      reverse,
    };
  },
});
<\/script>
`;const xe={class:"markdown-body"},Te=z('<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u6ED1\u5757\u4E3A\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dots</td><td>\u662F\u5426\u53EA\u80FD\u62D6\u62FD\u5230\u523B\u5EA6\u4E0A</td><td>boolean</td><td>false</td><td></td></tr><tr><td>included</td><td><code>marks</code> \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\u6709\u6548\uFF0C\u503C\u4E3A true \u65F6\u8868\u793A\u503C\u4E3A\u5305\u542B\u5173\u7CFB\uFF0Cfalse \u8868\u793A\u5E76\u5217</td><td>boolean</td><td>true</td><td></td></tr><tr><td>marks</td><td>\u523B\u5EA6\u6807\u8BB0\uFF0Ckey \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A <code>number</code> \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 [min, max] \u5185\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F</td><td>object</td><td>{ number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () =&gt; VNode }</td><td></td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>100</td><td></td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>0</td><td></td></tr><tr><td>range</td><td>\u53CC\u6ED1\u5757\u6A21\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>reverse</td><td>\u53CD\u5411\u5750\u6807\u8F74</td><td>boolean</td><td>false</td><td>1.5.0</td></tr><tr><td>step</td><td>\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u5E76\u4E14\u53EF\u88AB (max - min) \u6574\u9664\u3002\u5F53 <code>marks</code> \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>step</code> \u4E3A <code>null</code>\uFF0C\u6B64\u65F6 Slider \u7684\u53EF\u9009\u503C\u4EC5\u6709 marks \u6807\u51FA\u6765\u7684\u90E8\u5206\u3002</td><td>number|null</td><td>1</td><td></td></tr><tr><td>tipFormatter</td><td>Slider \u4F1A\u628A\u5F53\u524D\u503C\u4F20\u7ED9 <code>tipFormatter</code>\uFF0C\u5E76\u5728 Tooltip \u4E2D\u663E\u793A <code>tipFormatter</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u82E5\u4E3A null\uFF0C\u5219\u9690\u85CF Tooltip\u3002</td><td>Function|null</td><td>IDENTITY</td><td></td></tr><tr><td>value(v-model)</td><td>\u8BBE\u7F6E\u5F53\u524D\u53D6\u503C\u3002\u5F53 <code>range</code> \u4E3A <code>false</code> \u65F6\uFF0C\u4F7F\u7528 <code>number</code>\uFF0C\u5426\u5219\u7528 <code>[number, number]</code></td><td>number|number[]</td><td></td><td></td></tr><tr><td>vertical</td><td>\u503C\u4E3A <code>true</code> \u65F6\uFF0CSlider \u4E3A\u5782\u76F4\u65B9\u5411</td><td>Boolean</td><td>false</td><td></td></tr><tr><td>tooltipPlacement</td><td>\u8BBE\u7F6E Tooltip \u5C55\u793A\u4F4D\u7F6E\u3002\u53C2\u8003 <a href="/components/tooltip/"><code>Tooltip</code></a>\u3002</td><td>string</td><td></td><td>1.5.0</td></tr><tr><td>tooltipVisible</td><td>\u503C\u4E3A<code>true</code>\u65F6\uFF0CTooltip \u5C06\u4F1A\u59CB\u7EC8\u663E\u793A\uFF1B\u5426\u5219\u59CB\u7EC8\u4E0D\u663E\u793A\uFF0C\u54EA\u6015\u5728\u62D6\u62FD\u53CA\u79FB\u5165\u65F6\u3002</td><td>Boolean</td><td></td><td></td></tr><tr><td>getTooltipPopupContainer</td><td>Tooltip \u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002</td><td>Function</td><td>() =&gt; document.body</td><td>1.5.0</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>afterChange</td><td>\u4E0E <code>mouseup</code> \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002</td><td>Function(value)</td></tr><tr><td>change</td><td>\u5F53 Slider \u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6\uFF0C\u5E76\u628A\u6539\u53D8\u540E\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002</td><td>Function(value)</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table>',6),Ie={expose:[],setup(e){return(n,d)=>(v(),m("div",xe,[Te]))}};var Ue=Ie;const N={cn:`# Slider \u6ED1\u52A8\u8F93\u5165\u6761
  \u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  \u5F53\u7528\u6237\u9700\u8981\u5728\u6570\u503C\u533A\u95F4/\u81EA\u5B9A\u4E49\u533A\u95F4\u5185\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u53EF\u4E3A\u8FDE\u7EED\u6216\u79BB\u6563\u503C\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Slider
  A Slider component for displaying current value and intervals in range.
  # When To Use
  To input a value in a range.
  ## Examples
  `};var Ne={category:"Components",subtitle:"\u6ED1\u52A8\u8F93\u5165\u6761",type:"Data Entry",title:"Slider",render(){return t("div",null,[t(r("Md"),{cn:N.cn,us:N.us},null),t(r("demo-sort"),null,{default:()=>[t(r("demo-container"),{api:D,code:W},{default:()=>[t(y,null,null)]}),t(r("demo-container"),{api:j,code:P},{default:()=>[t(k,null,null)]}),t(r("demo-container"),{api:q,code:J},{default:()=>[t($,null,null)]}),t(r("demo-container"),{api:L,code:Q},{default:()=>[t(I,null,null)]}),t(r("demo-container"),{api:ne,code:te},{default:()=>[t(w,null,null)]}),t(r("demo-container"),{api:ie,code:pe},{default:()=>[t(S,null,null)]}),t(r("demo-container"),{api:he,code:_e},{default:()=>[t(V,null,null)]}),t(r("demo-container"),{api:ye,code:ke},{default:()=>[t(U,null,null)]}),t(r("demo-container"),{api:Se,code:Ve},{default:()=>[t(F,null,null)]})]}),t(r("api"),null,{default:()=>[t(Ue,null,null)]})])}};export{Ne as default};

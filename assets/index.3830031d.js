import{d as s,k as u,Y as r,bw as o,bx as i,b as n,D as b,bz as x,by as C,bI as S,bO as w}from"./vendor.846be9ce.js";var f=s({setup(){return{value:u(3)}}});function z(e,t,l,p,m,v){const d=r("a-input-number");return o(),i("div",null,[n(d,{id:"inputNumber",value:e.value,"onUpdate:value":t[1]||(t[1]=a=>e.value=a),min:1,max:10},null,8,["value"]),b(" \u5F53\u524D\u503C\uFF1A"+x(e.value),1)])}f.render=z;var k=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6570\u5B57\u8F93\u5165\u6846\u3002
</cn>

<us>
#### Basic
Numeric-only input box.
</us>
`,D=`<template>
  <div>
    <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" />
    \u5F53\u524D\u503C\uFF1A{{ value }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(3);

    return {
      value,
    };
  },
});
<\/script>
`,g=s({setup(){const e=u(3),t=u(!0);return{value:e,disabled:t,toggle:()=>{t.value=!t.value}}}});const I={style:{"margin-top":"20px"}},N=b("Toggle disabled");function U(e,t,l,p,m,v){const d=r("a-input-number"),a=r("a-button");return o(),i("div",null,[n(d,{min:1,max:10,disabled:e.disabled,value:e.value,"onUpdate:value":t[1]||(t[1]=y=>e.value=y)},null,8,["disabled","value"]),n("div",I,[n(a,{type:"primary",onClick:e.toggle},{default:C(()=>[N]),_:1},8,["onClick"])])])}g.render=U;var B=`<cn>
#### \u4E0D\u53EF\u7528
\u70B9\u51FB\u6309\u94AE\u5207\u6362\u53EF\u7528\u72B6\u6001\u3002
</cn>

<us>
#### Disabled
Click the button to toggle between available and disabled states.
</us>

`,T=`<template>
  <div>
    <a-input-number :min="1" :max="10" :disabled="disabled" v-model:value="value" />
    <div style="margin-top: 20px">
      <a-button type="primary" @click="toggle">Toggle disabled</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(3);
    const disabled = ref<boolean>(true);

    const toggle = () => {
      disabled.value = !disabled.value;
    };

    return {
      value,
      disabled,
      toggle,
    };
  },
});
<\/script>
`,h=s({setup(){return{value:u()}}});function F(e,t,l,p,m,v){const d=r("a-input-number");return o(),i(d,{value:e.value,"onUpdate:value":t[1]||(t[1]=a=>e.value=a),min:0,max:10,step:.1},null,8,["value","step"])}h.render=F;var E=`<cn>
#### \u5C0F\u6570
\u548C\u539F\u751F\u7684\u6570\u5B57\u8F93\u5165\u6846\u4E00\u6837\uFF0Cvalue \u7684\u7CBE\u5EA6\u7531 step \u7684\u5C0F\u6570\u4F4D\u6570\u51B3\u5B9A\u3002
</cn>

<us>
#### Decimals
A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.
</us>
`,V=`<template>
  <a-input-number v-model:value="value" :min="0" :max="10" :step="0.1" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>();

    return {
      value,
    };
  },
});
<\/script>
`,_=s({setup(){const e=u(1e3),t=u(100);return{value1:e,value2:t}}});function A(e,t,l,p,m,v){const d=r("a-input-number");return o(),i("div",null,[n(d,{value:e.value1,"onUpdate:value":t[1]||(t[1]=a=>e.value1=a),formatter:a=>`$ ${a}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:a=>a.replace(/\$\s?|(,*)/g,"")},null,8,["value","formatter","parser"]),n(d,{value:e.value2,"onUpdate:value":t[2]||(t[2]=a=>e.value2=a),min:0,max:100,formatter:a=>`${a}%`,parser:a=>a.replace("%","")},null,8,["value","formatter","parser"])])}_.render=A;var W=`<cn>
#### \u683C\u5F0F\u5316\u5C55\u793A
\u901A\u8FC7 \`formatter\` \u683C\u5F0F\u5316\u6570\u5B57\uFF0C\u4EE5\u5C55\u793A\u5177\u6709\u5177\u4F53\u542B\u4E49\u7684\u6570\u636E\uFF0C\u5F80\u5F80\u9700\u8981\u914D\u5408 \`parser\` \u4E00\u8D77\u4F7F\u7528\u3002
</cn>

<us>
#### Formatter
Display value within it's situation with \`formatter\`, and we usually use \`parser\` at the same time.
</us>
`,j=`<template>
  <div>
    <a-input-number
      v-model:value="value1"
      :formatter="value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
      :parser="value => value.replace(/\\$\\s?|(,*)/g, '')"
    />
    <a-input-number
      v-model:value="value2"
      :min="0"
      :max="100"
      :formatter="value => \`\${value}%\`"
      :parser="value => value.replace('%', '')"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(1000);
    const value2 = ref<number>(100);

    return {
      value1,
      value2,
    };
  },
});
<\/script>
`,c=s({setup(){const e=u(3),t=u(3),l=u(3);return{value1:e,value2:t,value3:l}}});const M=S(),O=M((e,t,l,p,m,v)=>{const d=r("a-input-number");return o(),i("div",null,[n(d,{size:"large",min:1,max:1e5,value:e.value1,"onUpdate:value":t[1]||(t[1]=a=>e.value1=a)},null,8,["value"]),n(d,{min:1,max:1e5,value:e.value2,"onUpdate:value":t[2]||(t[2]=a=>e.value2=a)},null,8,["value"]),n(d,{size:"small",min:1,max:1e5,value:e.value3,"onUpdate:value":t[3]||(t[3]=a=>e.value3=a)},null,8,["value"])])});c.render=O;c.__scopeId="data-v-dc8d19f6";var P="<cn>\n#### \u4E09\u79CD\u5927\u5C0F\n\u4E09\u79CD\u5927\u5C0F\u7684\u6570\u5B57\u8F93\u5165\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A `large` \u548C `small` \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A `40px` \u548C `24px` \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A `32px`\u3002\n</cn>\n\n<us>\n#### Sizes\nThere are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.\n</us>\n",Y=`<template>
  <div>
    <a-input-number size="large" :min="1" :max="100000" v-model:value="value1" />
    <a-input-number :min="1" :max="100000" v-model:value="value2" />
    <a-input-number size="small" :min="1" :max="100000" v-model:value="value3" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(3);
    const value3 = ref<number>(3);

    return {
      value1,
      value2,
      value3,
    };
  },
});
<\/script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>
`;const q={class:"markdown-body"},G=w("<h2>API</h2><p>\u5C5E\u6027\u5982\u4E0B</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>defaultValue</td><td>\u521D\u59CB\u503C</td><td>number</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>formatter</td><td>\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F</td><td>function(value: number | string): string</td><td>-</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>Infinity</td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>-Infinity</td></tr><tr><td>parser</td><td>\u6307\u5B9A\u4ECE formatter \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C formatter \u642D\u914D\u4F7F\u7528</td><td>function( string): number</td><td>-</td></tr><tr><td>precision</td><td>\u6570\u503C\u7CBE\u5EA6</td><td>number</td><td>-</td></tr><tr><td>decimalSeparator</td><td>\u5C0F\u6570\u70B9</td><td>string</td><td>-</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F</td><td>string</td><td>\u65E0</td></tr><tr><td>step</td><td>\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570</td><td>number|string</td><td>1</td></tr><tr><td>value(v-model)</td><td>\u5F53\u524D\u503C</td><td>number</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u56DE\u8C03</td><td>Function(value: number | string)</td><td></td></tr><tr><td>pressEnter</td><td>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</td><td>function(e)</td><td></td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table>",7),H={expose:[],setup(e){return(t,l)=>(o(),i("div",q,[G]))}};var J=H;const $={cn:`# \u6570\u5B57\u8F93\u5165\u6846
  \u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  \u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# InputNumber
  Enter a number within certain range with the mouse or keyboard.
  ## When To Use
  When a numeric value needs to be provided.
  ## Examples
  `};var L={category:"Components",subtitle:"\u6570\u5B57\u8F93\u5165\u6846",type:"Data Entry",title:"InputNumber",render(){return n("div",null,[n(r("Md"),{cn:$.cn,us:$.us},null),n(r("demo-sort"),null,{default:()=>[n(r("demo-container"),{api:k,code:D},{default:()=>[n(f,null,null)]}),n(r("demo-container"),{api:P,code:Y},{default:()=>[n(c,null,null)]}),n(r("demo-container"),{api:B,code:T},{default:()=>[n(g,null,null)]}),n(r("demo-container"),{api:E,code:V},{default:()=>[n(h,null,null)]}),n(r("demo-container"),{api:W,code:j},{default:()=>[n(_,null,null)]})]}),n(r("api"),null,{default:()=>[n(J,null,null)]})])}};export{L as default};

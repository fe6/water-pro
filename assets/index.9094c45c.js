import{Y as e,bw as s,bx as d,d as p,h as T,M as N,k as D,bG as u,bH as _,b as n,F,bI as g,D as L,by as m,bO as O}from"./vendor.846be9ce.js";const f={};function U(t,i){const a=e("a-spin");return s(),d(a)}f.render=U;var h=f,v=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u4E00\u4E2A\u7B80\u5355\u7684 loading \u72B6\u6001\u3002
</cn>

<us>
#### basic Usage
A simple loading status.
</us>
`,y=`<template>
  <a-spin />
</template>
`,S=p({setup(){return{indicator:T(N,{style:{fontSize:"24px"},spin:!0})}}});function V(t,i,a,o,I,z){const r=e("a-spin");return s(),d(r,{indicator:t.indicator},null,8,["indicator"])}S.render=V;var j=`<cn>
#### \u81EA\u5B9A\u4E49\u6307\u793A\u7B26
\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u793A\u7B26\u3002
</cn>

<us>
#### Custom spinning indicator
Use custom loading indicator.
</us>
`,B=`<template>
  <a-spin :indicator="indicator" />
</template>
<script lang="ts">
import { LoadingOutlined } from '@ant-design/icons-vue';
import { defineComponent, h } from 'vue';
export default defineComponent({
  setup() {
    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: '24px',
      },
      spin: true,
    });
    return {
      indicator,
    };
  },
});
<\/script>

`,c=p({setup(){const t=D(!1);return{spinning:t,delayTime:500,changeSpinning:()=>{t.value=!t.value}}}});const b=g();u("data-v-daa0949a");const M={class:"spin-state"},W=L(" Loading state\uFF1A ");_();const q=b((t,i,a,o,I,z)=>{const r=e("a-alert"),w=e("a-spin"),k=e("a-switch");return s(),d(F,null,[n(w,{spinning:t.spinning,delay:t.delayTime},{default:b(()=>[n(r,{message:"Alert message title",description:"Further details about the context of this alert."})]),_:1},8,["spinning","delay"]),n("div",M,[W,n(k,{checked:t.spinning,"onUpdate:checked":i[1]||(i[1]=A=>t.spinning=A)},null,8,["checked"])])],64)});c.render=q;c.__scopeId="data-v-daa0949a";var E=`<cn>
#### \u5EF6\u8FDF
\u5EF6\u8FDF\u663E\u793A loading \u6548\u679C\u3002\u5F53 spinning \u72B6\u6001\u5728 \`delay\` \u65F6\u95F4\u5185\u7ED3\u675F\uFF0C\u5219\u4E0D\u663E\u793A loading \u72B6\u6001\u3002
</cn>

<us>
#### delay
Specifies a delay for loading state. If \`spinning\` ends during delay, loading status won't appear.
</us>
`,G=`<template>
  <a-spin :spinning="spinning" :delay="delayTime">
    <a-alert
      message="Alert message title"
      description="Further details about the context of this alert."
    ></a-alert>
  </a-spin>
  <div class="spin-state">
    Loading state\uFF1A
    <a-switch v-model:checked="spinning" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const spinning = ref<boolean>(false);
    const delayTime = 500;

    const changeSpinning = () => {
      spinning.value = !spinning.value;
    };
    return {
      spinning,
      delayTime,
      changeSpinning,
    };
  },
});
<\/script>
<style scoped>
.spin-state {
  margin-top: 16px;
}
</style>
`;const l={},H=g();u("data-v-72cc34a6");const P={class:"example"};_();const Y=H((t,i)=>{const a=e("a-spin");return s(),d("div",P,[n(a)])});l.render=Y;l.__scopeId="data-v-72cc34a6";var J=l,K=`<cn>
#### \u5BB9\u5668
\u653E\u5165\u4E00\u4E2A\u5BB9\u5668\u4E2D\u3002
</cn>

<us>
#### Inside a container
Spin in a container.
</us>
`,Q=`<template>
  <div class="example">
    <a-spin />
  </div>
</template>

<style scoped>
.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>
`;const x={};function R(t,i){const a=e("a-spin"),o=e("a-space");return s(),d(o,null,{default:m(()=>[n(a,{size:"small"}),n(a),n(a,{size:"large"})]),_:1})}x.render=R;var X=x,Z=`<cn>
#### \u5404\u79CD\u5927\u5C0F
\u5C0F\u7684\u7528\u4E8E\u6587\u672C\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u7528\u4E8E\u5361\u7247\u5BB9\u5668\u7EA7\u52A0\u8F7D\uFF0C\u5927\u7684\u7528\u4E8E**\u9875\u9762\u7EA7**\u52A0\u8F7D\u3002
</cn>

<us>
#### Size
A small \`Spin\` use in loading text, default \`Spin\` use in loading card-level block, and large \`Spin\` use in loading **page**.
</us>
`,nn=`<template>
  <a-space>
    <a-spin size="small" />
    <a-spin />
    <a-spin size="large" />
  </a-space>
</template>
`;const $={};function en(t,i){const a=e("a-alert"),o=e("a-spin");return s(),d(o,{tip:"Loading..."},{default:m(()=>[n(a,{message:"Alert message title",description:"Further details about the context of this alert."})]),_:1})}$.render=en;var tn=$,an=`<cn>
#### \u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848
\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002
</cn>

<us>
#### Customized description
Customized description content.
</us>
`,sn=`<template>
  <a-spin tip="Loading...">
    <a-alert
      message="Alert message title"
      description="Further details about the context of this alert."
    ></a-alert>
  </a-spin>
</template>
`;const dn={class:"markdown-body"},on=O(`<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>delay</td><td>\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09</td><td>number (\u6BEB\u79D2)</td><td>-</td></tr><tr><td>indicator</td><td>\u52A0\u8F7D\u6307\u793A\u7B26</td><td>vNode | slot</td><td>-</td></tr><tr><td>size</td><td>\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>default</code> <code>large</code></td><td>string</td><td>\u2018default\u2019</td></tr><tr><td>spinning</td><td>\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td>boolean</td><td>true</td></tr><tr><td>tip</td><td>\u5F53\u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848</td><td>string</td><td>-</td></tr><tr><td>wrapperClassName</td><td>\u5305\u88C5\u5668\u7684\u7C7B\u5C5E\u6027</td><td>string</td><td>-</td></tr></tbody></table><h3>\u9759\u6001\u65B9\u6CD5</h3><ul><li><p><code>Spin.setDefaultIndicator({indicator})</code> \u540C\u4E0A <code>indicator</code>\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5168\u5C40\u9ED8\u8BA4\u5143\u7D20</p><pre><code class="language-jsx">import { h } from &#39;vue&#39;;
Spin.setDefaultIndicator({
  indicator: h(&#39;i&#39;, { class: &#39;anticon anticon-loading anticon-spin ant-spin-dot&#39; }),
});
</code></pre></li></ul>`,4),rn={expose:[],setup(t){return(i,a)=>(s(),d("div",dn,[on]))}};var cn=rn;const C={cn:`# Spin \u52A0\u8F7D\u4E2D

  \u7528\u4E8E\u9875\u9762\u548C\u533A\u5757\u7684\u52A0\u8F7D\u4E2D\u72B6\u6001\u3002

  ## \u4F55\u65F6\u4F7F\u7528

  \u9875\u9762\u5C40\u90E8\u5904\u4E8E\u7B49\u5F85\u5F02\u6B65\u6570\u636E\u6216\u6B63\u5728\u6E32\u67D3\u8FC7\u7A0B\u65F6\uFF0C\u5408\u9002\u7684\u52A0\u8F7D\u52A8\u6548\u4F1A\u6709\u6548\u7F13\u89E3\u7528\u6237\u7684\u7126\u8651\u3002
            ## \u4EE3\u7801\u6F14\u793A`,us:`# Spin

  A spinner for displaying loading state of a page or a section.

  # When To Use

  When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.
  ## Examples `};var pn={category:"Components",type:"Feedback",title:"Spin",subtitle:"\u52A0\u8F7D\u4E2D",render(){return n("div",null,[n(e("Md"),{cn:C.cn,us:C.us},null),n(e("demo-sort"),null,{default:()=>[n(e("demo-container"),{api:v,code:y},{default:()=>[n(h,null,null)]}),n(e("demo-container"),{api:Z,code:nn},{default:()=>[n(X,null,null)]}),n(e("demo-container"),{api:K,code:Q},{default:()=>[n(J,null,null)]}),n(e("demo-container"),{api:v,code:y},{default:()=>[n(h,null,null)]}),n(e("demo-container"),{api:an,code:sn},{default:()=>[n(tn,null,null)]}),n(e("demo-container"),{api:E,code:G},{default:()=>[n(c,null,null)]}),n(e("demo-container"),{api:j,code:B},{default:()=>[n(S,null,null)]})]}),n(e("api"),null,{default:()=>[n(cn,null,null)]})])}};export{pn as default};

import{Y as n,bw as l,bx as d,by as r,b as t,d as v,k as g,D as _,bO as m}from"./vendor.846be9ce.js";const i={},x=t("div",{style:{"line-height":"300px",background:"#00a0e9",color:"#fff","text-align":"center","margin-bottom":"16px"}},"Water Pro is best.",-1),y=t("div",{style:{"line-height":"100px","text-align":"center"}},"Water Pro is best.",-1),k=t("div",{style:{"line-height":"300px",background:"#00a0e9",color:"#fff","text-align":"center"}},"Water Pro is best.",-1);function O(e,o){const a=n("a-scrollbar");return l(),d(a,{style:{height:"283px",border:"1px solid"}},{default:r(()=>[x,y,k]),_:1})}i.render=O;var w=i,M=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
The simplest usage.
</us>
`,C=`<template>
  <a-scrollbar style="height: 283px;border:1px solid">
    <div style="line-height: 300px;background: #00a0e9;color: #fff; text-align: center;margin-bottom: 16px;">Water Pro is best.</div>
    <div style="line-height: 100px;text-align: center;">Water Pro is best.</div>
    <div style="line-height: 300px;background: #00a0e9;color: #fff; text-align: center;">Water Pro is best.</div>
  </a-scrollbar>
</template>
`,c=v({setup(){const e=g(!1);return{visible:e,showModal:()=>{e.value=!0},handleOk:s=>{console.log(s),e.value=!1}}}});const P=_("Open Modal"),W=t("div",{style:{"line-height":"300px",background:"#00a0e9",color:"#fff","text-align":"center","margin-bottom":"16px"}},"Water Pro is best.",-1),$=t("div",{style:{"line-height":"100px","text-align":"center"}},"Water Pro is best.",-1),S=t("div",{style:{"line-height":"300px",background:"#00a0e9",color:"#fff","text-align":"center"}},"Water Pro is best.",-1);function B(e,o,a,s,U,j){const h=n("a-button"),p=n("a-scrollbar"),u=n("a-modal");return l(),d("div",null,[t(h,{type:"primary",onClick:e.showModal},{default:r(()=>[P]),_:1},8,["onClick"]),t(u,{visible:e.visible,"onUpdate:visible":o[1]||(o[1]=f=>e.visible=f),title:"Basic Modal",onOk:e.handleOk},{default:r(()=>[t(p,{style:{height:"283px",border:"1px solid"}},{default:r(()=>[W,$,S]),_:1})]),_:1},8,["visible","onOk"])])}c.render=B;var D=`<cn>
#### \u5F39\u6846\u4E2D\u7684\u6EDA\u52A8
\u548C modal \u7ED3\u5408\u4F7F\u7528
</cn>

<us>
#### \u5F39\u6846\u4E2D\u7684\u6EDA\u52A8
TODO
</us>
`,T=`<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <a-scrollbar style="height: 283px;border:1px solid">
        <div style="line-height: 300px;background: #00a0e9;color: #fff; text-align: center;margin-bottom: 16px;">Water Pro is best.</div>
        <div style="line-height: 100px;text-align: center;">Water Pro is best.</div>
        <div style="line-height: 300px;background: #00a0e9;color: #fff; text-align: center;">Water Pro is best.</div>
      </a-scrollbar>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
    };
  },
});
<\/script>

`;const N={class:"markdown-body"},V=m("<h2>API</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>native</td><td>\u662F\u5426\u7528\u539F\u751F\u6EDA\u52A8</td><td>boolean</td><td>false</td></tr><tr><td>showHorizontal</td><td>\u662F\u5426\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761</td><td>boolean</td><td>false</td></tr><tr><td>noresize</td><td>\u5982\u679C container \u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</td><td>boolean</td><td>true</td></tr><tr><td>tag</td><td>\u6EDA\u52A8\u5185\u5BB9\u7684\u6807\u7B7E\u540D\u5B57</td><td>string</td><td><code>div</code></td></tr><tr><td>wrapStyle</td><td>\u6EDA\u52A8\u5916\u6846\u7684\u6837\u5F0F</td><td>string | array</td><td>-</td></tr><tr><td>viewStyle</td><td>\u6EDA\u52A8\u5185\u5BB9\u7684\u6837\u5F0F</td><td>string | array</td><td>-</td></tr><tr><td>wrapClass</td><td>\u6EDA\u52A8\u5916\u6846\u7684 class \u540D</td><td>string | array</td><td>-</td></tr><tr><td>viewClass</td><td>\u6EDA\u52A8\u5185\u5BB9\u7684 class \u540D</td><td>string | array</td><td>-</td></tr></tbody></table>",2),z={expose:[],setup(e){return(o,a)=>(l(),d("div",N,[V]))}};var E=z;const b={cn:`# \u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761
  \b\u5728\u4EFB\u4F55\u65F6\u5019\u6EDA\u52A8\u6761\u6837\u5F0F\u7EDF\u4E00\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  \u5185\u5BB9\u5F88\u957F\uFF0C\u5E76\u4E14\u9700\u8981\u4EFB\u4F55\u65F6\u5019\u6837\u5F0F\u7EDF\u4E00\u3002

        ## \u4EE3\u7801\u6F14\u793A`,us:`# Scrollbar
  TODO
  ## When To Use
TODO.
  ## Examples
  `};var H={category:"Components",subtitle:"\u81EA\u5B9A\u4E49\u6EDA\u52A8\u6761",type:"Data Display",title:"Scrollbar",render(){return t("div",null,[t(n("Md"),{cn:b.cn,us:b.us},null),t(n("demo-sort"),{cols:1},{default:()=>[t(n("demo-container"),{api:M,code:C},{default:()=>[t(w,null,null)]}),t(n("demo-container"),{api:D,code:T},{default:()=>[t(c,null,null)]})]}),t(n("api"),null,{default:()=>[t(E,null,null)]})])}};export{H as default};

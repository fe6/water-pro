import{Y as o,bw as c,bx as a,b as t,F as h,D as n,bG as u,bH as _,bI as b,bO as m}from"./vendor.846be9ce.js";var g=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### basic
The most basic usage.
</us>
`;const l={},k=n(" Scroll down to see the bottom-right "),v=t("strong",{style:{color:"rgba(64, 64, 64, 0.6)"}},"gray",-1),y=n(" button. ");function x(d,r){const e=o("a-back-top");return c(),a(h,null,[t(e),k,v,y],64)}l.render=x;var f=l,w=`<template>
  <a-back-top />
  Scroll down to see the bottom-right
  <strong style="color: rgba(64, 64, 64, 0.6)">gray</strong>
  button.
</template>
`,S=`<cn>
#### \u81EA\u5B9A\u4E49\u6837\u5F0F
\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56DE\u5230\u9876\u90E8\u6309\u94AE\u7684\u6837\u5F0F\uFF0C\u9650\u5236\u5BBD\u9AD8\uFF1A\`40px * 40px\`\u3002
</cn>

<us>
#### Custom style
You can customize the style of the button, just note the size limit: no more than \`40px * 40px\`.
</us>
`;const s={},i=b();u("data-v-19aed387");const B={id:"components-back-top-demo-custom"},C=t("div",{class:"ant-back-top-inner"},"UP",-1),T=n(" Scroll down to see the bottom-right "),$=t("strong",{style:{color:"#1088e9"}},"blue",-1),I=n(" button. ");_();const z=i((d,r)=>{const e=o("a-back-top");return c(),a("div",B,[t(e,null,{default:i(()=>[C]),_:1}),T,$,I])});s.render=z;s.__scopeId="data-v-19aed387";var F=s,N=`<template>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    Scroll down to see the bottom-right
    <strong style="color: #1088e9">blue</strong>
    button.
  </div>
</template>

<style scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
`;const q={class:"markdown-body"},O=m("<h2>API</h2><blockquote><p>\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u8DDD\u79BB\u5E95\u90E8 <code>50px</code>\uFF0C\u53EF\u8986\u76D6\u3002</p><p>\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BBD\u9AD8\u4E0D\u5927\u4E8E 40px * 40px\u3002</p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>target</td><td>\u8BBE\u7F6E\u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td><td>Function</td><td>() =&gt; window</td><td></td></tr><tr><td>visibilityHeight</td><td>\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0 <code>BackTop</code></td><td>number</td><td>400</td><td></td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570</td><td>Function</td><td></td></tr></tbody></table>",5),P={expose:[],setup(d){return(r,e)=>(c(),a("div",q,[O]))}};var U=P;const p={cn:`# BackTop \u56DE\u5230\u9876\u90E8
          \u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002
## \u4F55\u65F6\u4F7F\u7528
- \u5F53\u9875\u9762\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\u65F6\uFF1B
- \u5F53\u7528\u6237\u9700\u8981\u9891\u7E41\u8FD4\u56DE\u9876\u90E8\u67E5\u770B\u76F8\u5173\u5185\u5BB9\u65F6\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# BackTop
          \`BackTop\` makes it easy to go back to the top of the page.
## When To Use
- When the page content is very long.
- When you need to go back to the top very frequently in order to view the contents.
## Examples 
`};var W={category:"Components",type:"Other",zhType:"\u5176\u4ED6",subtitle:"\u56DE\u5230\u9876\u90E8",title:"BackTop",render(){return t("div",null,[t(o("Md"),{cn:p.cn,us:p.us},null),t(o("demo-sort"),null,{default:()=>[t(o("demo-container"),{api:g,code:w},{default:()=>[t(f,null,null)]}),t(o("demo-container"),{api:S,code:N},{default:()=>[t(F,null,null)]})]}),t(o("api"),null,{default:()=>[t(U,null,null)]})])}};export{W as default};

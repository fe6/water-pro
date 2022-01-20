import{Y as i,bw as o,bx as a,b as e,by as r,F as c,D as n,bO as h}from"./vendor.846be9ce.js";const l={},_=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),f=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),v=n("With Text"),q=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),g=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1);function b(d,s){const t=i("a-divider");return o(),a(c,null,[_,e(t),f,e(t,null,{default:r(()=>[v]),_:1}),q,e(t,{dashed:""}),g],64)}l.render=b;var x=l,S=`<cn>
#### \u6C34\u5E73\u5206\u5272\u7EBF
\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002
</cn>

<us>
#### Horizontal
Divider is \`horizontal\` by default. You can add text within Divider.
</us>
`,L=`<template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider>With Text</a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider dashed />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
</template>
`;const m={},R=n(" Text "),T=e("a",{href:"#"},"Link",-1),$=e("a",{href:"#"},"Link",-1);function y(d,s){const t=i("a-divider");return o(),a("div",null,[R,e(t,{type:"vertical"}),T,e(t,{type:"vertical"}),$])}m.render=y;var k=m,D=`<cn>
#### \u5782\u76F4\u5206\u5272\u7EBF
\u4F7F\u7528 \`type="vertical"\` \u8BBE\u7F6E\u4E3A\u884C\u5185\u7684\u5782\u76F4\u5206\u5272\u7EBF\u3002
</cn>

<us>
#### Vertical
Use \`type="vertical"\` make it vertical.
</us>
`,z=`<template>
  <div>
    Text
    <a-divider type="vertical" />
    <a href="#">Link</a>
    <a-divider type="vertical" />
    <a href="#">Link</a>
  </div>
</template>
`;const u={},C=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),V=n("Text"),w=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),W=n("Left Text"),H=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),N=n("Right Text"),B=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1);function A(d,s){const t=i("a-divider");return o(),a(c,null,[C,e(t,null,{default:r(()=>[V]),_:1}),w,e(t,{orientation:"left"},{default:r(()=>[W]),_:1}),H,e(t,{orientation:"right"},{default:r(()=>[N]),_:1}),B],64)}u.render=A;var F=u,U=`<cn>
#### \u5E26\u6587\u5B57\u7684\u5206\u5272\u7EBF
\u5206\u5272\u7EBF\u4E2D\u5E26\u6709\u6587\u5B57\uFF0C\u53EF\u4EE5\u7528 \`orientation\` \u6307\u5B9A\u6587\u5B57\u4F4D\u7F6E\u3002
</cn>

<us>
#### Divider with title
Divider with inner title, set \`orientation="left/right"\` to align it.
</us>
`,Y=`<template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider>Text</a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider orientation="left">Left Text</a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <a-divider orientation="right">Right Text</a-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
</template>
`;const j={class:"markdown-body"},E=h("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dashed</td><td>\u662F\u5426\u865A\u7EBF</td><td>Boolean</td><td>false</td></tr><tr><td>orientation</td><td>\u5206\u5272\u7EBF\u6807\u9898\u7684\u4F4D\u7F6E</td><td>enum: <code>left</code> <code>right</code></td><td><code>center</code></td></tr><tr><td>type</td><td>\u6C34\u5E73\u8FD8\u662F\u5782\u76F4\u7C7B\u578B</td><td>enum: <code>horizontal</code> <code>vertical</code></td><td><code>horizontal</code></td></tr></tbody></table>",2),G={expose:[],setup(d){return(s,t)=>(o(),a("div",j,[E]))}};var I=G;const p={cn:`# \u5206\u5272\u7EBF
        \u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002
        ## \u4F55\u65F6\u4F7F\u7528
        - \u5BF9\u4E0D\u540C\u7AE0\u8282\u7684\u6587\u672C\u6BB5\u843D\u8FDB\u884C\u5206\u5272\u3002
        - \u5BF9\u884C\u5185\u6587\u5B57/\u94FE\u63A5\u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982\u8868\u683C\u7684\u64CD\u4F5C\u5217\u3002

        ## \u4EE3\u7801\u6F14\u793A`,us:`# Divider
      A divider line separates different content.
      ## When To Use
      - Divide sections of article.
      - Divide inline text and links such as the operation column of table.
      ## Examples 
      `};var O={category:"Components",type:"General",zhType:"\u901A\u7528",title:"Divider",subtitle:"\u5206\u5272\u7EBF",render(){return e("div",null,[e(i("Md"),{cn:p.cn,us:p.us},null),e(i("demo-sort"),{cols:1},{default:()=>[e(i("demo-container"),{api:D,code:z},{default:()=>[e(k,null,null)]}),e(i("demo-container"),{api:S,code:L},{default:()=>[e(x,null,null)]}),e(i("demo-container"),{api:U,code:Y},{default:()=>[e(F,null,null)]})]}),e(i("api"),null,{default:()=>[e(I,null,null)]})])}};export{O as default};

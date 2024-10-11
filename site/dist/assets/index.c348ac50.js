import{d as h,n as C,aq as e,J as c,bN as g,bO as o,e as f,H as n,G as t,E as y,cb as m}from"./vendor.0f0e4632.js";import{_ as p,t as I,e as b}from"./index.f6b32fa6.js";const w=async s=>{const a=I.copy(s);await C(),a?b.success("\u590D\u5236\u6210\u529F"):b.error("\u590D\u5236\u5931\u8D25")},A=h({setup(){return{copy:async()=>{await w("Water Pro is best!")}}}}),_=n("\u590D\u5236"),B=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copy"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u590D\u5236"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-button")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" nextTick "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" utils"),t("span",{class:"token punctuation"},","),n(" message "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@fe6/water-pro'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"copy"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"async"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("str"),t("span",{class:"token operator"},":"),n(" string")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token keyword"},"const"),n(" cEnd "),t("span",{class:"token operator"},"="),n(" utils"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"copy"),t("span",{class:"token punctuation"},"("),n("str"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token keyword"},"await"),n(),t("span",{class:"token function"},"nextTick"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("cEnd"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    message`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"success"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u590D\u5236\u6210\u529F'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
    message`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"error"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u590D\u5236\u5931\u8D25'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function-variable function"},"copy"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"async"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"await"),n(),t("span",{class:"token function"},"copy"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Water Pro is best!'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),v=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copy"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u590D\u5236"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-button")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" nextTick "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" utils"),t("span",{class:"token punctuation"},","),n(" message "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@fe6/water-pro'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"copy"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"async"),n(),t("span",{class:"token parameter"},"str"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token keyword"},"const"),n(" cEnd "),t("span",{class:"token operator"},"="),n(" utils"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"copy"),t("span",{class:"token punctuation"},"("),n("str"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token keyword"},"await"),n(),t("span",{class:"token function"},"nextTick"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

  `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("cEnd"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    message`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"success"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u590D\u5236\u6210\u529F'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
    message`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"error"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u590D\u5236\u5931\u8D25'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function-variable function"},"copy"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"async"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"await"),n(),t("span",{class:"token function"},"copy"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Water Pro is best!'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function x(s,a,d,l,u,i){const r=e("a-button"),k=e("demo-box");return c(),g(k,{jsfiddle:{us:"The simplest usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},relativePath:"utils/copy/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9ImNvcHkiPuWkjeWItjwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIG5leHRUaWNrIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXRpbHMsIG1lc3NhZ2UgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb3B5ID0gYXN5bmMgKHN0cjogc3RyaW5nKSA9PiB7CiAgY29uc3QgY0VuZCA9IHV0aWxzLmNvcHkoc3RyKTsKICBhd2FpdCBuZXh0VGljaygpOwogIGlmIChjRW5kKSB7CiAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+WkjeWItuaIkOWKnycpOwogIH0gZWxzZSB7CiAgICBtZXNzYWdlLmVycm9yKCflpI3liLblpLHotKUnKTsKICB9Cn07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBjb3B5OiBhc3luYyAoKSA9PiB7CiAgICAgICAgYXdhaXQgY29weSgnV2F0ZXIgUHJvIGlzIGJlc3QhJyk7CiAgICAgIH0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9ImNvcHkiPuWkjeWItjwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgbmV4dFRpY2sgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1dGlscywgbWVzc2FnZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IGNvcHkgPSBhc3luYyBzdHIgPT4gewogIGNvbnN0IGNFbmQgPSB1dGlscy5jb3B5KHN0cik7CiAgYXdhaXQgbmV4dFRpY2soKTsKCiAgaWYgKGNFbmQpIHsKICAgIG1lc3NhZ2Uuc3VjY2Vzcygn5aSN5Yi25oiQ5YqfJyk7CiAgfSBlbHNlIHsKICAgIG1lc3NhZ2UuZXJyb3IoJ+WkjeWItuWksei0pScpOwogIH0KfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBjb3B5OiBhc3luYyAoKSA9PiB7CiAgICAgICAgYXdhaXQgY29weSgnV2F0ZXIgUHJvIGlzIGJlc3QhJyk7CiAgICAgIH0sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[f(r,{onClick:s.copy},{default:o(()=>[_]),_:1},8,["onClick"])]),htmlCode:o(()=>[B]),jsVersionHtml:o(()=>[v]),_:1},8,["jsfiddle"])}var P=p(A,[["render",x]]);const W={pageData:{title:"Copy",description:"",frontmatter:{category:"Utils",type:"\u5DE5\u5177",title:"Copy",subtitle:"\u590D\u5236",cover:"https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:"\u4F7F\u7528\u65B9\u6CD5\uFF1A `copy(content, [config])`"}],relativePath:"utils/copy/index.zh-CN.md",content:`
\u4E00\u4E2A\u590D\u5236\u7684\u5DE5\u5177\u65B9\u6CD5

## \u4F55\u65F6\u4F7F\u7528

- \u590D\u5236\u4E00\u6BB5\u5185\u5BB9\u3002

## API

\u4F7F\u7528\u65B9\u6CD5\uFF1A \`copy(content, [config])\`

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| content | \u590D\u5236\u7684\u5185\u5BB9 | string | - |  |
| config | \u4E00\u4E9B\u914D\u7F6E\u53C2\u6570\uFF0C\u53C2\u7167\u4E0B\u9762 | [CopyOptions](../../components/_util/copy-to-clipboard/interface.ts) | - |  |

\`config\` \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| debug | \u662F\u5426\u8C03\u8BD5 | boolean | - |  |
| message | IE \u4E2D\u590D\u8BD5\u5931\u8D25\u7684\u63D0\u793A | string | Copy to clipboard: #{key}, Enter |  |
| format | MIME \u7C7B\u578B\uFF0C\u53EF\u9009\u53C2\u6570 \`text/plain\` \\| \`text/html\` \\| \`default\` | string | default |  |
| onCopy | \u590D\u5236\u6267\u884C\u7684\u51FD\u6570 | Function | - |  |
`,html:`<p>\u4E00\u4E2A\u590D\u5236\u7684\u5DE5\u5177\u65B9\u6CD5</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u590D\u5236\u4E00\u6BB5\u5185\u5BB9\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528\u65B9\u6CD5\uFF1A <code>copy(content, [config])</code></p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>\u590D\u5236\u7684\u5185\u5BB9</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>config</td>
<td>\u4E00\u4E9B\u914D\u7F6E\u53C2\u6570\uFF0C\u53C2\u7167\u4E0B\u9762</td>
<td><a href="./../../components/_util/copy-to-clipboard/interface.ts.html">CopyOptions</a></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p><code>config</code> \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>debug</td>
<td>\u662F\u5426\u8C03\u8BD5</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>IE \u4E2D\u590D\u8BD5\u5931\u8D25\u7684\u63D0\u793A</td>
<td>string</td>
<td>Copy to clipboard: #{key}, Enter</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>MIME \u7C7B\u578B\uFF0C\u53EF\u9009\u53C2\u6570 <code>text/plain</code> | <code>text/html</code> | <code>default</code></td>
<td>string</td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>onCopy</td>
<td>\u590D\u5236\u6267\u884C\u7684\u51FD\u6570</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878244064}},N={class:"markdown"},D=m('<p>\u4E00\u4E2A\u590D\u5236\u7684\u5DE5\u5177\u65B9\u6CD5</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u590D\u5236\u4E00\u6BB5\u5185\u5BB9\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A <code>copy(content, [config])</code></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>content</td><td>\u590D\u5236\u7684\u5185\u5BB9</td><td>string</td><td>-</td><td></td></tr><tr><td>config</td><td>\u4E00\u4E9B\u914D\u7F6E\u53C2\u6570\uFF0C\u53C2\u7167\u4E0B\u9762</td><td><a href="./../../components/_util/copy-to-clipboard/interface.ts.html">CopyOptions</a></td><td>-</td><td></td></tr></tbody></table><p><code>config</code> \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>debug</td><td>\u662F\u5426\u8C03\u8BD5</td><td>boolean</td><td>-</td><td></td></tr><tr><td>message</td><td>IE \u4E2D\u590D\u8BD5\u5931\u8D25\u7684\u63D0\u793A</td><td>string</td><td>Copy to clipboard: #{key}, Enter</td><td></td></tr><tr><td>format</td><td>MIME \u7C7B\u578B\uFF0C\u53EF\u9009\u53C2\u6570 <code>text/plain</code> | <code>text/html</code> | <code>default</code></td><td>string</td><td>default</td><td></td></tr><tr><td>onCopy</td><td>\u590D\u5236\u6267\u884C\u7684\u51FD\u6570</td><td>Function</td><td>-</td><td></td></tr></tbody></table>',8),H=[D];function j(s,a,d,l,u,i){return c(),y("article",N,H)}var U=p(W,[["render",j]]);const V={pageData:{title:"Copy",description:"",frontmatter:{category:"Utils",type:"Utils",title:"Copy",cover:"https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:"usage method\uFF1A `copy(content, [config])`"}],relativePath:"utils/copy/index.en-US.md",content:`
A replication tool and method.

## When To Use

- Copy a paragraph.

## API

usage method\uFF1A \`copy(content, [config])\`

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| content | Copied content | string | - |  |
| config | Refer to the following for some configuration parameters | [CopyOptions](../../components/_util/copy-to-clipboard/interface.ts) | - |  |

\`config\` the object properties are as follows:

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| debug | Debug or not | boolean | - |  |
| message | Prompt of retest failure in IE | string | Copy to clipboard: #{key}, Enter |  |
| format | MIME type, optional parameters: \`text/plain\` \\| \`text/html\` \\| \`default\` | string | default |  |
| onCopy | Copy executed functions | Function | - |  |
`,html:`<p>A replication tool and method.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>Copy a paragraph.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>usage method\uFF1A <code>copy(content, [config])</code></p>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>Copied content</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>config</td>
<td>Refer to the following for some configuration parameters</td>
<td><a href="./../../components/_util/copy-to-clipboard/interface.ts.html">CopyOptions</a></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p><code>config</code> the object properties are as follows:</p>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>debug</td>
<td>Debug or not</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>Prompt of retest failure in IE</td>
<td>string</td>
<td>Copy to clipboard: #{key}, Enter</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>MIME type, optional parameters: <code>text/plain</code> | <code>text/html</code> | <code>default</code></td>
<td>string</td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>onCopy</td>
<td>Copy executed functions</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878244064}},Z={class:"markdown"},G=m('<p>A replication tool and method.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Copy a paragraph.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>usage method\uFF1A <code>copy(content, [config])</code></p><table><thead><tr><th>Argument</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>content</td><td>Copied content</td><td>string</td><td>-</td><td></td></tr><tr><td>config</td><td>Refer to the following for some configuration parameters</td><td><a href="./../../components/_util/copy-to-clipboard/interface.ts.html">CopyOptions</a></td><td>-</td><td></td></tr></tbody></table><p><code>config</code> the object properties are as follows:</p><table><thead><tr><th>Argument</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>debug</td><td>Debug or not</td><td>boolean</td><td>-</td><td></td></tr><tr><td>message</td><td>Prompt of retest failure in IE</td><td>string</td><td>Copy to clipboard: #{key}, Enter</td><td></td></tr><tr><td>format</td><td>MIME type, optional parameters: <code>text/plain</code> | <code>text/html</code> | <code>default</code></td><td>string</td><td>default</td><td></td></tr><tr><td>onCopy</td><td>Copy executed functions</td><td>Function</td><td>-</td><td></td></tr></tbody></table>',8),Y=[G];function X(s,a,d,l,u,i){return c(),y("article",Z,Y)}var T=p(V,[["render",X]]);const S=h({CN:U,US:T,components:{Basic:P},setup(){return{}}});function K(s,a,d,l,u,i){const r=e("Basic"),k=e("demo-sort");return c(),g(k,null,{default:o(()=>[f(r)]),_:1})}var z=p(S,[["render",K]]);export{z as default};

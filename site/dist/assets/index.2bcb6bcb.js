import{J as u,E as x,cb as C,d as f,k as A,aq as o,bN as m,bO as a,e as c,H as t,G as n}from"./vendor.0f0e4632.js";import{_ as r}from"./index.f6b32fa6.js";const v={pageData:{title:"Affix",description:"",frontmatter:{category:"Components",subtitle:"\u56FA\u9489",type:"\u5BFC\u822A",title:"Affix",cover:"https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"Affix \u4F7F\u7528 `target` \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002"},{level:3,title:"Affix \u4F7F\u7528 target \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002",slug:"Affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002",content:"\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u53EA\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002\u5982\u679C\u5E0C\u671B\u4EFB\u610F\u6EDA\u52A8\uFF0C\u4F60\u53EF\u4EE5\u5728\u7A97\u4F53\u6DFB\u52A0\u6EDA\u52A8\u76D1\u542C, \u53C2\u8003 react \u7248\u672C\u793A\u4F8B <https://codesandbox.io/s/2xyj5zr85p>"},{level:3,title:"Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 left \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002",slug:"Affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002",content:"Affix \u4E00\u822C\u53EA\u9002\u7528\u4E8E\u5355\u5411\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u53EA\u652F\u6301\u5728\u5782\u76F4\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u5E0C\u671B\u5728\u6C34\u5E73\u5BB9\u5668\u4E2D\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 \u539F\u751F `position: sticky` \u5B9E\u73B0\u3002"}],relativePath:"components/affix/index.zh-CN.md",content:`
\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002

\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002

## API

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| offsetBottom | \u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1 | number |  |  |
| offsetTop | \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1 | number | 0 |  |
| target | \u8BBE\u7F6E \`Affix\` \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570 | () =&gt; HTMLElement | () =&gt; window |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E                         | \u56DE\u8C03\u53C2\u6570                    | \u7248\u672C |     |
| -------- | ---------------------------- | --------------------------- | ---- | --- |
| change   | \u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570 | (affixed?: boolean) =&gt; void | -    |     |

**\u6CE8\u610F\uFF1A**\`Affix\` \u5185\u7684\u5143\u7D20\u4E0D\u8981\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5982\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E \`Affix\` \u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A

\`\`\`html
&lt;a-affix :style=&quot;{ position: &#39;absolute&#39;, top: y, left: x}&quot;&gt;...&lt;/a-affix&gt;
\`\`\`

## FAQ

### Affix \u4F7F\u7528 \`target\` \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002

\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u53EA\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002\u5982\u679C\u5E0C\u671B\u4EFB\u610F\u6EDA\u52A8\uFF0C\u4F60\u53EF\u4EE5\u5728\u7A97\u4F53\u6DFB\u52A0\u6EDA\u52A8\u76D1\u542C, \u53C2\u8003 react \u7248\u672C\u793A\u4F8B &lt;https://codesandbox.io/s/2xyj5zr85p&gt;

\u76F8\u5173 issue\uFF1A[#3938](https://github.com/ant-design/ant-design/issues/3938) [#5642](https://github.com/ant-design/ant-design/issues/5642) [#16120](https://github.com/ant-design/ant-design/issues/16120)

### Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 \`left\` \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002

Affix \u4E00\u822C\u53EA\u9002\u7528\u4E8E\u5355\u5411\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u53EA\u652F\u6301\u5728\u5782\u76F4\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u5E0C\u671B\u5728\u6C34\u5E73\u5BB9\u5668\u4E2D\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 \u539F\u751F \`position: sticky\` \u5B9E\u73B0\u3002

\u76F8\u5173 issue: [#29108](https://github.com/ant-design/ant-design/issues/29108)
`,html:`<p>\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002</p>
<p>\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>offsetBottom</td>
<td>\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td>
<td>number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>offsetTop</td>
<td>\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td>
<td>number</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>target</td>
<td>\u8BBE\u7F6E <code>Affix</code> \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td>
<td>() =&gt; HTMLElement</td>
<td>() =&gt; window</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
<th>\u7248\u672C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>(affixed?: boolean) =&gt; void</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>\u6CE8\u610F\uFF1A</strong><code>Affix</code> \u5185\u7684\u5143\u7D20\u4E0D\u8981\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5982\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E <code>Affix</code> \u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-affix</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ position: <span class="token punctuation">'</span>absolute<span class="token punctuation">'</span>, top: y, left: x}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-affix</span><span class="token punctuation">></span></span>
</code></pre>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002">Affix \u4F7F\u7528 <code>target</code> \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002 <a class="header-anchor" href="#Affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u53EA\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002\u5982\u679C\u5E0C\u671B\u4EFB\u610F\u6EDA\u52A8\uFF0C\u4F60\u53EF\u4EE5\u5728\u7A97\u4F53\u6DFB\u52A0\u6EDA\u52A8\u76D1\u542C, \u53C2\u8003 react \u7248\u672C\u793A\u4F8B <a href="https://codesandbox.io/s/2xyj5zr85p" target="_blank" rel="noopener noreferrer">https://codesandbox.io/s/2xyj5zr85p</a></p>
<p>\u76F8\u5173 issue\uFF1A<a href="https://github.com/ant-design/ant-design/issues/3938" target="_blank" rel="noopener noreferrer">#3938</a> <a href="https://github.com/ant-design/ant-design/issues/5642" target="_blank" rel="noopener noreferrer">#5642</a> <a href="https://github.com/ant-design/ant-design/issues/16120" target="_blank" rel="noopener noreferrer">#16120</a></p>
<h3 id="Affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002">Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 <code>left</code> \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002 <a class="header-anchor" href="#Affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Affix \u4E00\u822C\u53EA\u9002\u7528\u4E8E\u5355\u5411\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u53EA\u652F\u6301\u5728\u5782\u76F4\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u5E0C\u671B\u5728\u6C34\u5E73\u5BB9\u5668\u4E2D\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 \u539F\u751F <code>position: sticky</code> \u5B9E\u73B0\u3002</p>
<p>\u76F8\u5173 issue: <a href="https://github.com/ant-design/ant-design/issues/29108" target="_blank" rel="noopener noreferrer">#29108</a></p>
`,lastUpdated:1701878243644}},y={class:"markdown"},I=C(`<p>\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002</p><p>\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>offsetBottom</td><td>\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td><td>number</td><td></td><td></td></tr><tr><td>offsetTop</td><td>\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1</td><td>number</td><td>0</td><td></td></tr><tr><td>target</td><td>\u8BBE\u7F6E <code>Affix</code> \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>change</td><td>\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>(affixed?: boolean) =&gt; void</td><td>-</td><td></td></tr></tbody></table><p><strong>\u6CE8\u610F\uFF1A</strong><code>Affix</code> \u5185\u7684\u5143\u7D20\u4E0D\u8981\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5982\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E <code>Affix</code> \u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-affix</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ position: <span class="token punctuation">&#39;</span>absolute<span class="token punctuation">&#39;</span>, top: y, left: x}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-affix</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002">Affix \u4F7F\u7528 <code>target</code> \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002 <a class="header-anchor" href="#Affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u53EA\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002\u5982\u679C\u5E0C\u671B\u4EFB\u610F\u6EDA\u52A8\uFF0C\u4F60\u53EF\u4EE5\u5728\u7A97\u4F53\u6DFB\u52A0\u6EDA\u52A8\u76D1\u542C, \u53C2\u8003 react \u7248\u672C\u793A\u4F8B <a href="https://codesandbox.io/s/2xyj5zr85p" target="_blank" rel="noopener noreferrer">https://codesandbox.io/s/2xyj5zr85p</a></p><p>\u76F8\u5173 issue\uFF1A<a href="https://github.com/ant-design/ant-design/issues/3938" target="_blank" rel="noopener noreferrer">#3938</a> <a href="https://github.com/ant-design/ant-design/issues/5642" target="_blank" rel="noopener noreferrer">#5642</a> <a href="https://github.com/ant-design/ant-design/issues/16120" target="_blank" rel="noopener noreferrer">#16120</a></p><h3 id="Affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002">Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 <code>left</code> \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002 <a class="header-anchor" href="#Affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Affix \u4E00\u822C\u53EA\u9002\u7528\u4E8E\u5355\u5411\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u53EA\u652F\u6301\u5728\u5782\u76F4\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u5E0C\u671B\u5728\u6C34\u5E73\u5BB9\u5668\u4E2D\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 \u539F\u751F <code>position: sticky</code> \u5B9E\u73B0\u3002</p><p>\u76F8\u5173 issue: <a href="https://github.com/ant-design/ant-design/issues/29108" target="_blank" rel="noopener noreferrer">#29108</a></p>`,17),w=[I];function Z(s,e,k,d,h,g){return u(),x("article",y,w)}var _=r(v,[["render",Z]]);const B={pageData:{title:"Affix",description:"",frontmatter:{category:"Components",type:"Navigation",title:"Affix",cover:"https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions."},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"When binding container with `target` in Affix, elements sometimes move out of the container."},{level:3,title:"When binding container with target in Affix, elements sometimes move out of the container.",slug:"When-binding-container-with-target-in-Affix-elements-sometimes-move-out-of-the-container",content:"We only listen to container scroll events for performance consideration. You can add custom listeners if you still want to, like react demo <https://codesandbox.io/s/2xyj5zr85p>"},{level:3,title:"When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element left is incorrect.",slug:"When-Affix-is-\u200B\u200Bused-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect",content:"Affix is \u200B\u200Bgenerally only applicable to areas with one-way scrolling, and only supports usage in vertical scrolling containers. If you want to use it in a horizontal container, you can consider implementing with the native `position: sticky` property."}],relativePath:"components/affix/index.en-US.md",content:`
Wrap Affix around another component to make it stick the viewport.

## When To Use

On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions.

Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| offsetBottom | Offset from the bottom of the viewport (in pixels) | number | - |  |
| offsetTop | Offset from the top of the viewport (in pixels) | number | 0 |  |
| target | Specifies the scrollable area DOM node | () =&gt; HTMLElement | () =&gt; window |  |

### events

| Events Name | Description                              | Arguments                   | Version |
| ----------- | ---------------------------------------- | --------------------------- | ------- |
| change      | Callback for when Affix state is changed | (affixed?: boolean) =&gt; void |         |

**Note:** Children of \`Affix\` must not have the property \`position: absolute\`, but you can set \`position: absolute\` on \`Affix\` itself:

\`\`\`html
&lt;a-affix :style=&quot;{ position: &#39;absolute&#39;, top: y, left: x}&quot;&gt;...&lt;/a-affix&gt;
\`\`\`

## FAQ

### When binding container with \`target\` in Affix, elements sometimes move out of the container.

We only listen to container scroll events for performance consideration. You can add custom listeners if you still want to, like react demo &lt;https://codesandbox.io/s/2xyj5zr85p&gt;

Related issues\uFF1A[#3938](https://github.com/ant-design/ant-design/issues/3938) [#5642](https://github.com/ant-design/ant-design/issues/5642) [#16120](https://github.com/ant-design/ant-design/issues/16120)

### When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element \`left\` is incorrect.

Affix is \u200B\u200Bgenerally only applicable to areas with one-way scrolling, and only supports usage in vertical scrolling containers. If you want to use it in a horizontal container, you can consider implementing with the native \`position: sticky\` property.
`,html:`<p>Wrap Affix around another component to make it stick the viewport.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions.</p>
<p>Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>offsetBottom</td>
<td>Offset from the bottom of the viewport (in pixels)</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>offsetTop</td>
<td>Offset from the top of the viewport (in pixels)</td>
<td>number</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>target</td>
<td>Specifies the scrollable area DOM node</td>
<td>() =&gt; HTMLElement</td>
<td>() =&gt; window</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="events">events <a class="header-anchor" href="#events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Callback for when Affix state is changed</td>
<td>(affixed?: boolean) =&gt; void</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Note:</strong> Children of <code>Affix</code> must not have the property <code>position: absolute</code>, but you can set <code>position: absolute</code> on <code>Affix</code> itself:</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-affix</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ position: <span class="token punctuation">'</span>absolute<span class="token punctuation">'</span>, top: y, left: x}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-affix</span><span class="token punctuation">></span></span>
</code></pre>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="When-binding-container-with-target-in-Affix-elements-sometimes-move-out-of-the-container">When binding container with <code>target</code> in Affix, elements sometimes move out of the container. <a class="header-anchor" href="#When-binding-container-with-target-in-Affix-elements-sometimes-move-out-of-the-container">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>We only listen to container scroll events for performance consideration. You can add custom listeners if you still want to, like react demo <a href="https://codesandbox.io/s/2xyj5zr85p" target="_blank" rel="noopener noreferrer">https://codesandbox.io/s/2xyj5zr85p</a></p>
<p>Related issues\uFF1A<a href="https://github.com/ant-design/ant-design/issues/3938" target="_blank" rel="noopener noreferrer">#3938</a> <a href="https://github.com/ant-design/ant-design/issues/5642" target="_blank" rel="noopener noreferrer">#5642</a> <a href="https://github.com/ant-design/ant-design/issues/16120" target="_blank" rel="noopener noreferrer">#16120</a></p>
<h3 id="When-Affix-is-\u200B\u200Bused-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect">When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element <code>left</code> is incorrect. <a class="header-anchor" href="#When-Affix-is-\u200B\u200Bused-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Affix is \u200B\u200Bgenerally only applicable to areas with one-way scrolling, and only supports usage in vertical scrolling containers. If you want to use it in a horizontal container, you can consider implementing with the native <code>position: sticky</code> property.</p>
`,lastUpdated:1701878243644}},G={class:"markdown"},W=C(`<p>Wrap Affix around another component to make it stick the viewport.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions.</p><p>Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>offsetBottom</td><td>Offset from the bottom of the viewport (in pixels)</td><td>number</td><td>-</td><td></td></tr><tr><td>offsetTop</td><td>Offset from the top of the viewport (in pixels)</td><td>number</td><td>0</td><td></td></tr><tr><td>target</td><td>Specifies the scrollable area DOM node</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>Callback for when Affix state is changed</td><td>(affixed?: boolean) =&gt; void</td><td></td></tr></tbody></table><p><strong>Note:</strong> Children of <code>Affix</code> must not have the property <code>position: absolute</code>, but you can set <code>position: absolute</code> on <code>Affix</code> itself:</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-affix</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ position: <span class="token punctuation">&#39;</span>absolute<span class="token punctuation">&#39;</span>, top: y, left: x}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-affix</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="When-binding-container-with-target-in-Affix-elements-sometimes-move-out-of-the-container">When binding container with <code>target</code> in Affix, elements sometimes move out of the container. <a class="header-anchor" href="#When-binding-container-with-target-in-Affix-elements-sometimes-move-out-of-the-container"><span aria-hidden="true" class="anchor">#</span></a></h3><p>We only listen to container scroll events for performance consideration. You can add custom listeners if you still want to, like react demo <a href="https://codesandbox.io/s/2xyj5zr85p" target="_blank" rel="noopener noreferrer">https://codesandbox.io/s/2xyj5zr85p</a></p><p>Related issues\uFF1A<a href="https://github.com/ant-design/ant-design/issues/3938" target="_blank" rel="noopener noreferrer">#3938</a> <a href="https://github.com/ant-design/ant-design/issues/5642" target="_blank" rel="noopener noreferrer">#5642</a> <a href="https://github.com/ant-design/ant-design/issues/16120" target="_blank" rel="noopener noreferrer">#16120</a></p><h3 id="When-Affix-is-\u200B\u200Bused-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect">When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element <code>left</code> is incorrect. <a class="header-anchor" href="#When-Affix-is-\u200B\u200Bused-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Affix is \u200B\u200Bgenerally only applicable to areas with one-way scrolling, and only supports usage in vertical scrolling containers. If you want to use it in a horizontal container, you can consider implementing with the native <code>position: sticky</code> property.</p>`,16),Y=[W];function H(s,e,k,d,h,g){return u(),x("article",G,Y)}var j=r(B,[["render",H]]);const P=f({setup(){const s=A(10),e=A(10);return{top:s,bottom:e}}}),V=t("Affix top"),X=n("br",null,null,-1),z=t("Affix bottom"),R=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":offset-top"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top += 10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Affix top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":offset-bottom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom += 10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Affix bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" top "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" bottom "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      top`),n("span",{class:"token punctuation"},","),t(`
      bottom`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),F=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":offset-top"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top += 10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Affix top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":offset-bottom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom += 10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Affix bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" top "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" bottom "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      top`),n("span",{class:"token punctuation"},","),t(`
      bottom`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function D(s,e,k,d,h,g){const p=o("a-button"),l=o("a-affix"),i=o("demo-box");return u(),m(i,{jsfiddle:{us:"The simplest usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},relativePath:"components/affix/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWFmZml4IDpvZmZzZXQtdG9wPSJ0b3AiPgogICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0idG9wICs9IDEwIj5BZmZpeCB0b3A8L2EtYnV0dG9uPgogIDwvYS1hZmZpeD4KICA8YnIgLz4KICA8YS1hZmZpeCA6b2Zmc2V0LWJvdHRvbT0iYm90dG9tIj4KICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImJvdHRvbSArPSAxMCI+QWZmaXggYm90dG9tPC9hLWJ1dHRvbj4KICA8L2EtYWZmaXg+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB0b3AgPSByZWY8bnVtYmVyPigxMCk7CiAgICBjb25zdCBib3R0b20gPSByZWY8bnVtYmVyPigxMCk7CiAgICByZXR1cm4gewogICAgICB0b3AsCiAgICAgIGJvdHRvbSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWFmZml4IDpvZmZzZXQtdG9wPSJ0b3AiPgogICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0idG9wICs9IDEwIj5BZmZpeCB0b3A8L2EtYnV0dG9uPgogIDwvYS1hZmZpeD4KICA8YnIgLz4KICA8YS1hZmZpeCA6b2Zmc2V0LWJvdHRvbT0iYm90dG9tIj4KICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImJvdHRvbSArPSAxMCI+QWZmaXggYm90dG9tPC9hLWJ1dHRvbj4KICA8L2EtYWZmaXg+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRvcCA9IHJlZigxMCk7CiAgICBjb25zdCBib3R0b20gPSByZWYoMTApOwogICAgcmV0dXJuIHsKICAgICAgdG9wLAogICAgICBib3R0b20sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[c(l,{"offset-top":s.top},{default:a(()=>[c(p,{type:"primary",onClick:e[0]||(e[0]=b=>s.top+=10)},{default:a(()=>[V]),_:1})]),_:1},8,["offset-top"]),X,c(l,{"offset-bottom":s.bottom},{default:a(()=>[c(p,{type:"primary",onClick:e[1]||(e[1]=b=>s.bottom+=10)},{default:a(()=>[z]),_:1})]),_:1},8,["offset-bottom"])]),htmlCode:a(()=>[R]),jsVersionHtml:a(()=>[F]),_:1},8,["jsfiddle"])}var S=r(P,[["render",D]]);const J=f({setup(){return{change:e=>{console.log(e)}}}}),N=t("120px to affix top"),Q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":offset-top"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("120px to affix top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"change"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("affixed"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("affixed"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      change`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),K=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":offset-top"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("120px to affix top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"change"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"affixed"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("affixed"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      change`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function U(s,e,k,d,h,g){const p=o("a-button"),l=o("a-affix"),i=o("demo-box");return u(),m(i,{jsfiddle:{us:"Callback with affixed state.",cn:"\u53EF\u4EE5\u83B7\u5F97\u662F\u5426\u56FA\u5B9A\u7684\u72B6\u6001\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u83B7\u5F97\u662F\u5426\u56FA\u5B9A\u7684\u72B6\u6001\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Callback with affixed state.</p>
`,order:1,title:{"zh-CN":"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03","en-US":"Callback"},relativePath:"components/affix/demo/on-change.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWFmZml4IDpvZmZzZXQtdG9wPSIxMjAiIEBjaGFuZ2U9ImNoYW5nZSI+CiAgICA8YS1idXR0b24+MTIwcHggdG8gYWZmaXggdG9wPC9hLWJ1dHRvbj4KICA8L2EtYWZmaXg+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgY2hhbmdlID0gKGFmZml4ZWQ6IGJvb2xlYW4pID0+IHsKICAgICAgY29uc29sZS5sb2coYWZmaXhlZCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWFmZml4IDpvZmZzZXQtdG9wPSIxMjAiIEBjaGFuZ2U9ImNoYW5nZSI+CiAgICA8YS1idXR0b24+MTIwcHggdG8gYWZmaXggdG9wPC9hLWJ1dHRvbj4KICA8L2EtYWZmaXg+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBjaGFuZ2UgPSBhZmZpeGVkID0+IHsKICAgICAgY29uc29sZS5sb2coYWZmaXhlZCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGNoYW5nZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:a(()=>[c(l,{"offset-top":120,onChange:s.change},{default:a(()=>[c(p,null,{default:a(()=>[N]),_:1})]),_:1},8,["onChange"])]),htmlCode:a(()=>[Q]),jsVersionHtml:a(()=>[K]),_:1},8,["jsfiddle"])}var L=r(J,[["render",U]]);const E=f({setup(){return{containerRef:A()}}}),$={id:"components-affix-demo-target",ref:"containerRef",class:"scrollable-container"},q={class:"background"},T=t("Fixed at the top of container"),O=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-affix-demo-target"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("containerRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scrollable-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("background"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("() => containerRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Fixed at the top of container"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" containerRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      containerRef`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#components-affix-demo-target.scrollable-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow-y"),n("span",{class:"token punctuation"},":"),t(" scroll"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},"#components-affix-demo-target .background"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-top"),n("span",{class:"token punctuation"},":"),t(" 60px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},"'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg'"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-affix-demo-target"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("containerRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scrollable-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("background"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-affix")]),t(),n("span",{class:"token attr-name"},":target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("() => containerRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Fixed at the top of container"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-affix")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" containerRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      containerRef`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#components-affix-demo-target.scrollable-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow-y"),n("span",{class:"token punctuation"},":"),t(" scroll"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},"#components-affix-demo-target .background"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-top"),n("span",{class:"token punctuation"},":"),t(" 60px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background-image"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token url"},[n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string url"},"'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg'"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function nn(s,e,k,d,h,g){const p=o("a-button"),l=o("a-affix"),i=o("demo-box");return u(),m(i,{jsfiddle:{us:"Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).",cn:"\u7528 `target` \u8BBE\u7F6E `Affix` \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A `window`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528 <code>target</code> \u8BBE\u7F6E <code>Affix</code> \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A <code>window</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Set a <code>target</code> for 'Affix', which is listen to scroll event of target element (default is <code>window</code>).</p>
`,order:2,title:{"zh-CN":"\u6EDA\u52A8\u5BB9\u5668","en-US":"Container to scroll."},relativePath:"components/affix/demo/target.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtYWZmaXgtZGVtby10YXJnZXQiIHJlZj0iY29udGFpbmVyUmVmIiBjbGFzcz0ic2Nyb2xsYWJsZS1jb250YWluZXIiPgogICAgPGRpdiBjbGFzcz0iYmFja2dyb3VuZCI+CiAgICAgIDxhLWFmZml4IDp0YXJnZXQ9IigpID0+IGNvbnRhaW5lclJlZiI+CiAgICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiPkZpeGVkIGF0IHRoZSB0b3Agb2YgY29udGFpbmVyPC9hLWJ1dHRvbj4KICAgICAgPC9hLWFmZml4PgogICAgPC9kaXY+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgY29udGFpbmVyUmVmID0gcmVmKCk7CiAgICByZXR1cm4gewogICAgICBjb250YWluZXJSZWYsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgojY29tcG9uZW50cy1hZmZpeC1kZW1vLXRhcmdldC5zY3JvbGxhYmxlLWNvbnRhaW5lciB7CiAgaGVpZ2h0OiAxMDBweDsKICBvdmVyZmxvdy15OiBzY3JvbGw7Cn0KI2NvbXBvbmVudHMtYWZmaXgtZGVtby10YXJnZXQgLmJhY2tncm91bmQgewogIHBhZGRpbmctdG9wOiA2MHB4OwogIGhlaWdodDogMzAwcHg7CiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUm1qd1FpSm9yS3lvYnZJLmpwZycpOwp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtYWZmaXgtZGVtby10YXJnZXQiIHJlZj0iY29udGFpbmVyUmVmIiBjbGFzcz0ic2Nyb2xsYWJsZS1jb250YWluZXIiPgogICAgPGRpdiBjbGFzcz0iYmFja2dyb3VuZCI+CiAgICAgIDxhLWFmZml4IDp0YXJnZXQ9IigpID0+IGNvbnRhaW5lclJlZiI+CiAgICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiPkZpeGVkIGF0IHRoZSB0b3Agb2YgY29udGFpbmVyPC9hLWJ1dHRvbj4KICAgICAgPC9hLWFmZml4PgogICAgPC9kaXY+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHJlZigpOwogICAgcmV0dXJuIHsKICAgICAgY29udGFpbmVyUmVmLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+CiNjb21wb25lbnRzLWFmZml4LWRlbW8tdGFyZ2V0LnNjcm9sbGFibGUtY29udGFpbmVyIHsKICBoZWlnaHQ6IDEwMHB4OwogIG92ZXJmbG93LXk6IHNjcm9sbDsKfQojY29tcG9uZW50cy1hZmZpeC1kZW1vLXRhcmdldCAuYmFja2dyb3VuZCB7CiAgcGFkZGluZy10b3A6IDYwcHg7CiAgaGVpZ2h0OiAzMDBweDsKICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9SbWp3UWlKb3JLeW9idkkuanBnJyk7Cn0KPC9zdHlsZT4="}},{default:a(()=>[n("div",$,[n("div",q,[c(l,{target:()=>s.containerRef},{default:a(()=>[c(p,{type:"primary"},{default:a(()=>[T]),_:1})]),_:1},8,["target"])])],512)]),htmlCode:a(()=>[O]),jsVersionHtml:a(()=>[M]),_:1},8,["jsfiddle"])}var tn=r(E,[["render",nn]]);const an=f({CN:_,US:j,components:{Basic:S,OnChange:L,Traget:tn}});function sn(s,e,k,d,h,g){const p=o("basic"),l=o("on-change"),i=o("traget"),b=o("demo-sort");return u(),m(b,null,{default:a(()=>[c(p),c(l),c(i)]),_:1})}var cn=r(an,[["render",sn]]);export{cn as default};

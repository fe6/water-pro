import{E as n,J as t,cb as a}from"./vendor.0f0e4632.js";import{_ as s}from"./index.f6b32fa6.js";const p={pageData:{title:"\u56FD\u9645\u5316",description:"",frontmatter:{},headers:[{level:2,title:"ConfigProvider",slug:"ConfigProvider",content:"@fe6/water-pro \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 [ConfigProvider](/components/config-provider-cn) \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002"}],relativePath:"site/src/vueDocs/i18n.zh-CN.md",content:`# \u56FD\u9645\u5316

\`@fe6/water-pro\` \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002

## ConfigProvider

@fe6/water-pro \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 [ConfigProvider](/components/config-provider-cn) \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider :locale=&quot;locale&quot;&gt;
    &lt;App /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;

&lt;script&gt;
  import zhCN from &#39;@fe6/water-pro/es/locale/zh_CN&#39;;
  import dayjs from &#39;dayjs&#39;;
  import &#39;dayjs/locale/zh-cn&#39;;
  dayjs.locale(&#39;zh-cn&#39;);

  export default {
    data() {
      return {
        locale: zhCN,
      };
    },
  };
&lt;/script&gt;
\`\`\`

\u6CE8\u610F\uFF1A\`zh_CN\` \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002

\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A

| \u8BED\u8A00             | \u6587\u4EF6\u540D |
| ---------------- | ------ |
| \u963F\u62C9\u4F2F           | ar_EG  |
| \u4FDD\u52A0\u5229\u4E9A\u8BED       | bg_BG  |
| \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED     | ca_ES  |
| \u6377\u514B\u8BED           | cs_CZ  |
| \u5FB7\u8BED             | de_DE  |
| \u5E0C\u814A\u8BED           | el_GR  |
| \u82F1\u8BED             | en_GB  |
| \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09     | en_US  |
| \u897F\u73ED\u7259\u8BED         | es_ES  |
| \u7231\u6C99\u5C3C\u4E9A\u8BED       | et_EE  |
| \u6CE2\u65AF\u8BED           | fa_IR  |
| \u82AC\u5170\u8BED           | fi_FI  |
| \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09   | fr_BE  |
| \u6CD5\u8BED             | fr_FR  |
| \u51B0\u5C9B\u8BED           | is_IS  |
| \u610F\u5927\u5229\u8BED         | it_IT  |
| \u65E5\u8BED             | ja_JP  |
| \u97E9\u8BED/\u671D\u9C9C\u8BED      | ko_KR  |
| \u632A\u5A01             | nb_NO  |
| \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09 | nl_BE  |
| \u8377\u5170\u8BED           | nl_NL  |
| \u6CE2\u5170\u8BED           | pl_PL  |
| \u8461\u8404\u7259\u8BED(\u5DF4\u897F)   | pt_BR  |
| \u8461\u8404\u7259\u8BED         | pt_PT  |
| \u65AF\u6D1B\u4F10\u514B\u8BED       | sk_SK  |
| \u585E\u5C14\u7EF4\u4E9A         | sr_RS  |
| \u65AF\u6D1B\u6587\u5C3C\u4E9A       | sl_SI  |
| \u745E\u5178\u8BED           | sv_SE  |
| \u6CF0\u8BED             | th_TH  |
| \u571F\u8033\u5176\u8BED         | tr_TR  |
| \u4FC4\u7F57\u65AF\u8BED         | ru_RU  |
| \u4E4C\u514B\u5170\u8BED         | uk_UA  |
| \u8D8A\u5357\u8BED           | vi_VN  |
| \u7B80\u4F53\u4E2D\u6587         | zh_CN  |
| \u7E41\u4F53\u4E2D\u6587         | zh_TW  |

\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 [ConfigProvider \u6587\u6863](/components/config-provider-cn)\u3002
`,html:`<h1 id="\u56FD\u9645\u5316">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p><code>@fe6/water-pro</code> \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002</p>
<h2 id="ConfigProvider">ConfigProvider <a class="header-anchor" href="#ConfigProvider">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>@fe6/water-pro \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 <a href="/components/config-provider-cn.html">ConfigProvider</a> \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro/es/locale/zh_CN'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        locale<span class="token operator">:</span> zhCN<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<p>\u6CE8\u610F\uFF1A<code>zh_CN</code> \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002</p>
<p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A</p>
<table>
<thead>
<tr>
<th>\u8BED\u8A00</th>
<th>\u6587\u4EF6\u540D</th>
</tr>
</thead>
<tbody>
<tr>
<td>\u963F\u62C9\u4F2F</td>
<td>ar_EG</td>
</tr>
<tr>
<td>\u4FDD\u52A0\u5229\u4E9A\u8BED</td>
<td>bg_BG</td>
</tr>
<tr>
<td>\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED</td>
<td>ca_ES</td>
</tr>
<tr>
<td>\u6377\u514B\u8BED</td>
<td>cs_CZ</td>
</tr>
<tr>
<td>\u5FB7\u8BED</td>
<td>de_DE</td>
</tr>
<tr>
<td>\u5E0C\u814A\u8BED</td>
<td>el_GR</td>
</tr>
<tr>
<td>\u82F1\u8BED</td>
<td>en_GB</td>
</tr>
<tr>
<td>\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09</td>
<td>en_US</td>
</tr>
<tr>
<td>\u897F\u73ED\u7259\u8BED</td>
<td>es_ES</td>
</tr>
<tr>
<td>\u7231\u6C99\u5C3C\u4E9A\u8BED</td>
<td>et_EE</td>
</tr>
<tr>
<td>\u6CE2\u65AF\u8BED</td>
<td>fa_IR</td>
</tr>
<tr>
<td>\u82AC\u5170\u8BED</td>
<td>fi_FI</td>
</tr>
<tr>
<td>\u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td>
<td>fr_BE</td>
</tr>
<tr>
<td>\u6CD5\u8BED</td>
<td>fr_FR</td>
</tr>
<tr>
<td>\u51B0\u5C9B\u8BED</td>
<td>is_IS</td>
</tr>
<tr>
<td>\u610F\u5927\u5229\u8BED</td>
<td>it_IT</td>
</tr>
<tr>
<td>\u65E5\u8BED</td>
<td>ja_JP</td>
</tr>
<tr>
<td>\u97E9\u8BED/\u671D\u9C9C\u8BED</td>
<td>ko_KR</td>
</tr>
<tr>
<td>\u632A\u5A01</td>
<td>nb_NO</td>
</tr>
<tr>
<td>\u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td>
<td>nl_BE</td>
</tr>
<tr>
<td>\u8377\u5170\u8BED</td>
<td>nl_NL</td>
</tr>
<tr>
<td>\u6CE2\u5170\u8BED</td>
<td>pl_PL</td>
</tr>
<tr>
<td>\u8461\u8404\u7259\u8BED(\u5DF4\u897F)</td>
<td>pt_BR</td>
</tr>
<tr>
<td>\u8461\u8404\u7259\u8BED</td>
<td>pt_PT</td>
</tr>
<tr>
<td>\u65AF\u6D1B\u4F10\u514B\u8BED</td>
<td>sk_SK</td>
</tr>
<tr>
<td>\u585E\u5C14\u7EF4\u4E9A</td>
<td>sr_RS</td>
</tr>
<tr>
<td>\u65AF\u6D1B\u6587\u5C3C\u4E9A</td>
<td>sl_SI</td>
</tr>
<tr>
<td>\u745E\u5178\u8BED</td>
<td>sv_SE</td>
</tr>
<tr>
<td>\u6CF0\u8BED</td>
<td>th_TH</td>
</tr>
<tr>
<td>\u571F\u8033\u5176\u8BED</td>
<td>tr_TR</td>
</tr>
<tr>
<td>\u4FC4\u7F57\u65AF\u8BED</td>
<td>ru_RU</td>
</tr>
<tr>
<td>\u4E4C\u514B\u5170\u8BED</td>
<td>uk_UA</td>
</tr>
<tr>
<td>\u8D8A\u5357\u8BED</td>
<td>vi_VN</td>
</tr>
<tr>
<td>\u7B80\u4F53\u4E2D\u6587</td>
<td>zh_CN</td>
</tr>
<tr>
<td>\u7E41\u4F53\u4E2D\u6587</td>
<td>zh_TW</td>
</tr>
</tbody>
</table>
<p>\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="/components/config-provider-cn.html">ConfigProvider \u6587\u6863</a>\u3002</p>
`,lastUpdated:1701878244060}},o={class:"markdown"},d=a(`<h1 id="\u56FD\u9645\u5316">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316"><span aria-hidden="true" class="anchor">#</span></a></h1><p><code>@fe6/water-pro</code> \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002</p><h2 id="ConfigProvider">ConfigProvider <a class="header-anchor" href="#ConfigProvider"><span aria-hidden="true" class="anchor">#</span></a></h2><p>@fe6/water-pro \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 <a href="/components/config-provider-cn.html">ConfigProvider</a> \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro/es/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&#39;dayjs&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">&#39;dayjs/locale/zh-cn&#39;</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        locale<span class="token operator">:</span> zhCN<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>\u6CE8\u610F\uFF1A<code>zh_CN</code> \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002</p><p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A</p><table><thead><tr><th>\u8BED\u8A00</th><th>\u6587\u4EF6\u540D</th></tr></thead><tbody><tr><td>\u963F\u62C9\u4F2F</td><td>ar_EG</td></tr><tr><td>\u4FDD\u52A0\u5229\u4E9A\u8BED</td><td>bg_BG</td></tr><tr><td>\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED</td><td>ca_ES</td></tr><tr><td>\u6377\u514B\u8BED</td><td>cs_CZ</td></tr><tr><td>\u5FB7\u8BED</td><td>de_DE</td></tr><tr><td>\u5E0C\u814A\u8BED</td><td>el_GR</td></tr><tr><td>\u82F1\u8BED</td><td>en_GB</td></tr><tr><td>\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09</td><td>en_US</td></tr><tr><td>\u897F\u73ED\u7259\u8BED</td><td>es_ES</td></tr><tr><td>\u7231\u6C99\u5C3C\u4E9A\u8BED</td><td>et_EE</td></tr><tr><td>\u6CE2\u65AF\u8BED</td><td>fa_IR</td></tr><tr><td>\u82AC\u5170\u8BED</td><td>fi_FI</td></tr><tr><td>\u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td><td>fr_BE</td></tr><tr><td>\u6CD5\u8BED</td><td>fr_FR</td></tr><tr><td>\u51B0\u5C9B\u8BED</td><td>is_IS</td></tr><tr><td>\u610F\u5927\u5229\u8BED</td><td>it_IT</td></tr><tr><td>\u65E5\u8BED</td><td>ja_JP</td></tr><tr><td>\u97E9\u8BED/\u671D\u9C9C\u8BED</td><td>ko_KR</td></tr><tr><td>\u632A\u5A01</td><td>nb_NO</td></tr><tr><td>\u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td><td>nl_BE</td></tr><tr><td>\u8377\u5170\u8BED</td><td>nl_NL</td></tr><tr><td>\u6CE2\u5170\u8BED</td><td>pl_PL</td></tr><tr><td>\u8461\u8404\u7259\u8BED(\u5DF4\u897F)</td><td>pt_BR</td></tr><tr><td>\u8461\u8404\u7259\u8BED</td><td>pt_PT</td></tr><tr><td>\u65AF\u6D1B\u4F10\u514B\u8BED</td><td>sk_SK</td></tr><tr><td>\u585E\u5C14\u7EF4\u4E9A</td><td>sr_RS</td></tr><tr><td>\u65AF\u6D1B\u6587\u5C3C\u4E9A</td><td>sl_SI</td></tr><tr><td>\u745E\u5178\u8BED</td><td>sv_SE</td></tr><tr><td>\u6CF0\u8BED</td><td>th_TH</td></tr><tr><td>\u571F\u8033\u5176\u8BED</td><td>tr_TR</td></tr><tr><td>\u4FC4\u7F57\u65AF\u8BED</td><td>ru_RU</td></tr><tr><td>\u4E4C\u514B\u5170\u8BED</td><td>uk_UA</td></tr><tr><td>\u8D8A\u5357\u8BED</td><td>vi_VN</td></tr><tr><td>\u7B80\u4F53\u4E2D\u6587</td><td>zh_CN</td></tr><tr><td>\u7E41\u4F53\u4E2D\u6587</td><td>zh_TW</td></tr></tbody></table><p>\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="/components/config-provider-cn.html">ConfigProvider \u6587\u6863</a>\u3002</p>`,9),e=[d];function r(c,l,i,u,k,_){return t(),n("article",o,e)}var h=s(p,[["render",r]]);export{h as default};

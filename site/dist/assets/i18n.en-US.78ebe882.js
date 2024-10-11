import{E as n,J as t,cb as a}from"./vendor.0f0e4632.js";import{_ as s}from"./index.f6b32fa6.js";const e={pageData:{title:"Internationalization",description:"",frontmatter:{},headers:[{level:2,title:"ConfigProvider",slug:"ConfigProvider",content:"ant-design-vue provides a Vue Component [ConfigProvider](/components/config-provider) for configuring ant-design-vue locale text globally."}],relativePath:"site/src/vueDocs/i18n.en-US.md",content:`# Internationalization

The default language is English as of yet. If you want to use other languages, you can follow the instructions below.

## ConfigProvider

ant-design-vue provides a Vue Component [ConfigProvider](/components/config-provider) for configuring ant-design-vue locale text globally.

ConfigProvider does not include the internationalization of time components. You need to additionally import the internationalization files of the time library (dayjs, momentjs, date-fns, etc.). Below we have taken dayjs as an example.

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

Note: \`fr_FR\` is the filename, follow below.

Supported languages:

| Language              | Filename |
| --------------------- | -------- |
| Arabic                | ar_EG    |
| Bulgarian             | bg_BG    |
| Catalan               | ca_ES    |
| Czech                 | cs_CZ    |
| German                | de_DE    |
| Greek                 | el_GR    |
| English (Global)      | en_GB    |
| English               | en_US    |
| Spanish               | es_ES    |
| Estonian              | et_EE    |
| Persian               | fa_IR    |
| Finnish               | fi_FI    |
| French (Belgium)      | fr_BE    |
| French (France)       | fr_FR    |
| Italian               | it_IT    |
| Icelandic             | is_IS    |
| Japanese              | ja_JP    |
| Korean                | ko_KR    |
| Norwegian             | nb_NO    |
| Dutch (Belgium)       | nl_BE    |
| Dutch                 | nl_NL    |
| Polish                | pl_PL    |
| Portuguese (Brazil)   | pt_BR    |
| Portuguese            | pt_PT    |
| Slovak                | sk_SK    |
| Serbian               | sr_RS    |
| Slovenian             | sl_SI    |
| Swedish               | sv_SE    |
| Thai                  | th_TH    |
| Turkish               | tr_TR    |
| Russian               | ru_RU    |
| Ukrainian             | uk_UA    |
| Vietnamese            | vi_VN    |
| Chinese (Simplified)  | zh_CN    |
| Chinese (Traditional) | zh_TW    |

See usage at [ConfigProvider](/components/config-provider).
`,html:`<h1 id="Internationalization">Internationalization <a class="header-anchor" href="#Internationalization">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p>The default language is English as of yet. If you want to use other languages, you can follow the instructions below.</p>
<h2 id="ConfigProvider">ConfigProvider <a class="header-anchor" href="#ConfigProvider">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>ant-design-vue provides a Vue Component <a href="/components/config-provider.html">ConfigProvider</a> for configuring ant-design-vue locale text globally.</p>
<p>ConfigProvider does not include the internationalization of time components. You need to additionally import the internationalization files of the time library (dayjs, momentjs, date-fns, etc.). Below we have taken dayjs as an example.</p>
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
<p>Note: <code>fr_FR</code> is the filename, follow below.</p>
<p>Supported languages:</p>
<table>
<thead>
<tr>
<th>Language</th>
<th>Filename</th>
</tr>
</thead>
<tbody>
<tr>
<td>Arabic</td>
<td>ar_EG</td>
</tr>
<tr>
<td>Bulgarian</td>
<td>bg_BG</td>
</tr>
<tr>
<td>Catalan</td>
<td>ca_ES</td>
</tr>
<tr>
<td>Czech</td>
<td>cs_CZ</td>
</tr>
<tr>
<td>German</td>
<td>de_DE</td>
</tr>
<tr>
<td>Greek</td>
<td>el_GR</td>
</tr>
<tr>
<td>English (Global)</td>
<td>en_GB</td>
</tr>
<tr>
<td>English</td>
<td>en_US</td>
</tr>
<tr>
<td>Spanish</td>
<td>es_ES</td>
</tr>
<tr>
<td>Estonian</td>
<td>et_EE</td>
</tr>
<tr>
<td>Persian</td>
<td>fa_IR</td>
</tr>
<tr>
<td>Finnish</td>
<td>fi_FI</td>
</tr>
<tr>
<td>French (Belgium)</td>
<td>fr_BE</td>
</tr>
<tr>
<td>French (France)</td>
<td>fr_FR</td>
</tr>
<tr>
<td>Italian</td>
<td>it_IT</td>
</tr>
<tr>
<td>Icelandic</td>
<td>is_IS</td>
</tr>
<tr>
<td>Japanese</td>
<td>ja_JP</td>
</tr>
<tr>
<td>Korean</td>
<td>ko_KR</td>
</tr>
<tr>
<td>Norwegian</td>
<td>nb_NO</td>
</tr>
<tr>
<td>Dutch (Belgium)</td>
<td>nl_BE</td>
</tr>
<tr>
<td>Dutch</td>
<td>nl_NL</td>
</tr>
<tr>
<td>Polish</td>
<td>pl_PL</td>
</tr>
<tr>
<td>Portuguese (Brazil)</td>
<td>pt_BR</td>
</tr>
<tr>
<td>Portuguese</td>
<td>pt_PT</td>
</tr>
<tr>
<td>Slovak</td>
<td>sk_SK</td>
</tr>
<tr>
<td>Serbian</td>
<td>sr_RS</td>
</tr>
<tr>
<td>Slovenian</td>
<td>sl_SI</td>
</tr>
<tr>
<td>Swedish</td>
<td>sv_SE</td>
</tr>
<tr>
<td>Thai</td>
<td>th_TH</td>
</tr>
<tr>
<td>Turkish</td>
<td>tr_TR</td>
</tr>
<tr>
<td>Russian</td>
<td>ru_RU</td>
</tr>
<tr>
<td>Ukrainian</td>
<td>uk_UA</td>
</tr>
<tr>
<td>Vietnamese</td>
<td>vi_VN</td>
</tr>
<tr>
<td>Chinese (Simplified)</td>
<td>zh_CN</td>
</tr>
<tr>
<td>Chinese (Traditional)</td>
<td>zh_TW</td>
</tr>
</tbody>
</table>
<p>See usage at <a href="/components/config-provider.html">ConfigProvider</a>.</p>
`,lastUpdated:1701878244060}},o={class:"markdown"},p=a(`<h1 id="Internationalization">Internationalization <a class="header-anchor" href="#Internationalization"><span aria-hidden="true" class="anchor">#</span></a></h1><p>The default language is English as of yet. If you want to use other languages, you can follow the instructions below.</p><h2 id="ConfigProvider">ConfigProvider <a class="header-anchor" href="#ConfigProvider"><span aria-hidden="true" class="anchor">#</span></a></h2><p>ant-design-vue provides a Vue Component <a href="/components/config-provider.html">ConfigProvider</a> for configuring ant-design-vue locale text globally.</p><p>ConfigProvider does not include the internationalization of time components. You need to additionally import the internationalization files of the time library (dayjs, momentjs, date-fns, etc.). Below we have taken dayjs as an example.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><p>Note: <code>fr_FR</code> is the filename, follow below.</p><p>Supported languages:</p><table><thead><tr><th>Language</th><th>Filename</th></tr></thead><tbody><tr><td>Arabic</td><td>ar_EG</td></tr><tr><td>Bulgarian</td><td>bg_BG</td></tr><tr><td>Catalan</td><td>ca_ES</td></tr><tr><td>Czech</td><td>cs_CZ</td></tr><tr><td>German</td><td>de_DE</td></tr><tr><td>Greek</td><td>el_GR</td></tr><tr><td>English (Global)</td><td>en_GB</td></tr><tr><td>English</td><td>en_US</td></tr><tr><td>Spanish</td><td>es_ES</td></tr><tr><td>Estonian</td><td>et_EE</td></tr><tr><td>Persian</td><td>fa_IR</td></tr><tr><td>Finnish</td><td>fi_FI</td></tr><tr><td>French (Belgium)</td><td>fr_BE</td></tr><tr><td>French (France)</td><td>fr_FR</td></tr><tr><td>Italian</td><td>it_IT</td></tr><tr><td>Icelandic</td><td>is_IS</td></tr><tr><td>Japanese</td><td>ja_JP</td></tr><tr><td>Korean</td><td>ko_KR</td></tr><tr><td>Norwegian</td><td>nb_NO</td></tr><tr><td>Dutch (Belgium)</td><td>nl_BE</td></tr><tr><td>Dutch</td><td>nl_NL</td></tr><tr><td>Polish</td><td>pl_PL</td></tr><tr><td>Portuguese (Brazil)</td><td>pt_BR</td></tr><tr><td>Portuguese</td><td>pt_PT</td></tr><tr><td>Slovak</td><td>sk_SK</td></tr><tr><td>Serbian</td><td>sr_RS</td></tr><tr><td>Slovenian</td><td>sl_SI</td></tr><tr><td>Swedish</td><td>sv_SE</td></tr><tr><td>Thai</td><td>th_TH</td></tr><tr><td>Turkish</td><td>tr_TR</td></tr><tr><td>Russian</td><td>ru_RU</td></tr><tr><td>Ukrainian</td><td>uk_UA</td></tr><tr><td>Vietnamese</td><td>vi_VN</td></tr><tr><td>Chinese (Simplified)</td><td>zh_CN</td></tr><tr><td>Chinese (Traditional)</td><td>zh_TW</td></tr></tbody></table><p>See usage at <a href="/components/config-provider.html">ConfigProvider</a>.</p>`,10),r=[p];function d(i,l,c,u,k,g){return t(),n("article",o,r)}var f=s(e,[["render",d]]);export{f as default};

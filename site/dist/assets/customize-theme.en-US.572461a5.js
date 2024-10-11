import{E as e,J as n,cb as a}from"./vendor.0f0e4632.js";import{_ as s}from"./index.f6b32fa6.js";const t={pageData:{title:"Dynamic Theme (Experimental)",description:"",frontmatter:{order:7.1,title:"Dynamic Theme (Experimental)"},headers:[{level:2,title:"Caveats",slug:"Caveats",content:""},{level:2,title:"How to use",slug:"How-to-use",content:"Import water.variable.min.css"},{level:3,title:"Import water.variable.min.css",slug:"Import-water-variable-min-css",content:"Replace your import style file with CSS Variable version:"},{level:3,title:"Static config",slug:"Static-config",content:"Call ConfigProvider static function to modify theme color:"},{level:2,title:"Conflict resolve",slug:"Conflict-resolve",content:"CSS Variable use `--ant` prefix by default. When exist multiple water style file in your project, you can modify prefix to fix it."},{level:3,title:"Adjust",slug:"Adjust",content:"Modify `prefixCls` on the root of ConfigProvider:"},{level:3,title:"Compile less",slug:"Compile-less",content:"Since prefix modified. Origin `water.variable.css` should also be replaced:"},{level:3,title:"Related changes",slug:"Related-changes",content:"In order to implement CSS Variable and maintain original usage compatibility, we added `@root-entry-name: xxx;` entry injection to the `dist/water.xxx.less` file to support less dynamic loading of the corresponding less file. Under normal circumstances, you do not need to pay attention to this change. However, if your project directly references the less file in the `lib|es` directory. You need to configure `@root-entry-name: default;` (or `@root-entry-name: variable;`) at the entry of less so that less can find the correct entry."}],relativePath:"site/src/vueDocs/customize-theme.en-US.md",content:`
Except [less customize theme](/docs/react/customize-theme), We also provide CSS Variable version to enable dynamic theme. You can check on [ConfigProvider](/components/config-provider/#components-config-provider-demo-theme) demo.

## Caveats

- This function requires at least \`@fe6/water-pro@3.1.0-beta.0\`.

## How to use

### Import water.variable.min.css

Replace your import style file with CSS Variable version:

\`\`\`diff
-- import &#39;@fe6/water-pro/dist/water.min.css&#39;;
++ import &#39;@fe6/water-pro/dist/water.variable.min.css&#39;;
\`\`\`

Note: You need remove \`babel-plugin-import\` for the dynamic theme.

### Static config

Call ConfigProvider static function to modify theme color:

\`\`\`ts
import { ConfigProvider } from &#39;@fe6/water-pro&#39;;

ConfigProvider.config({
  theme: {
    primaryColor: &#39;#25b864&#39;,
  },
});
\`\`\`

## Conflict resolve

CSS Variable use \`--ant\` prefix by default. When exist multiple water style file in your project, you can modify prefix to fix it.

### Adjust

Modify \`prefixCls\` on the root of ConfigProvider:

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider prefix-cls=&quot;custom&quot;&gt;
    &lt;my-app /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;
\`\`\`

Also need call the static function to modify \`prefixCls\`:

\`\`\`ts
import { ConfigProvider } from &#39;@fe6/water-pro&#39;;
ConfigProvider.config({
  prefixCls: &#39;custom&#39;,
  theme: {
    primaryColor: &#39;#25b864&#39;,
  },
});
\`\`\`

### Compile less

Since prefix modified. Origin \`water.variable.css\` should also be replaced:

\`\`\`bash
lessc --js --modify-var=&quot;ant-prefix=custom&quot; @fe6/water-pro/dist/water.variable.less modified.css
\`\`\`

### Related changes

In order to implement CSS Variable and maintain original usage compatibility, we added \`@root-entry-name: xxx;\` entry injection to the \`dist/water.xxx.less\` file to support less dynamic loading of the corresponding less file. Under normal circumstances, you do not need to pay attention to this change. However, if your project directly references the less file in the \`lib|es\` directory. You need to configure \`@root-entry-name: default;\` (or \`@root-entry-name: variable;\`) at the entry of less so that less can find the correct entry.

In addition, we migrated \`@import&#39;motion&#39;\` and \`@import&#39;reset&#39;\` in \`lib|es/style/minxins/index.less\` to \`lib|es/style/themes/xxx.less\` In, because these two files rely on theme-related variables. If you use the relevant internal method, please adjust it yourself. Of course, we still recommend using the \`water.less\` files in the \`dist\` directory directly instead of calling internal files, because they are often affected by refactoring.
`,html:`<p>Except <a href="/docs/react/customize-theme.html">less customize theme</a>, We also provide CSS Variable version to enable dynamic theme. You can check on <a href="/components/config-provider/#components-config-provider-demo-theme">ConfigProvider</a> demo.</p>
<h2 id="Caveats">Caveats <a class="header-anchor" href="#Caveats">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>This function requires at least <code>@fe6/water-pro@3.1.0-beta.0</code>.</li>
</ul>
<h2 id="How-to-use">How to use <a class="header-anchor" href="#How-to-use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Import-water-variable-min-css">Import water.variable.min.css <a class="header-anchor" href="#Import-water-variable-min-css">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Replace your import style file with CSS Variable version:</p>
<pre class="language-diff" v-pre><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">- import '@fe6/water-pro/dist/water.min.css';
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">+ import '@fe6/water-pro/dist/water.variable.min.css';
</span></span></code></pre>
<p>Note: You need remove <code>babel-plugin-import</code> for the dynamic theme.</p>
<h3 id="Static-config">Static config <a class="header-anchor" href="#Static-config">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Call ConfigProvider static function to modify theme color:</p>
<pre class="language-ts" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro'</span><span class="token punctuation">;</span>

ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token operator">:</span> <span class="token string">'#25b864'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="Conflict-resolve">Conflict resolve <a class="header-anchor" href="#Conflict-resolve">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>CSS Variable use <code>--ant</code> prefix by default. When exist multiple water style file in your project, you can modify prefix to fix it.</p>
<h3 id="Adjust">Adjust <a class="header-anchor" href="#Adjust">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Modify <code>prefixCls</code> on the root of ConfigProvider:</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">prefix-cls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-app</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre>
<p>Also need call the static function to modify <code>prefixCls</code>:</p>
<pre class="language-ts" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro'</span><span class="token punctuation">;</span>
ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token operator">:</span> <span class="token string">'custom'</span><span class="token punctuation">,</span>
  theme<span class="token operator">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token operator">:</span> <span class="token string">'#25b864'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h3 id="Compile-less">Compile less <a class="header-anchor" href="#Compile-less">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Since prefix modified. Origin <code>water.variable.css</code> should also be replaced:</p>
<pre class="language-bash" v-pre><code>lessc --js --modify-var<span class="token operator">=</span><span class="token string">"ant-prefix=custom"</span> @fe6/water-pro/dist/water.variable.less modified.css
</code></pre>
<h3 id="Related-changes">Related changes <a class="header-anchor" href="#Related-changes">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>In order to implement CSS Variable and maintain original usage compatibility, we added <code>@root-entry-name: xxx;</code> entry injection to the <code>dist/water.xxx.less</code> file to support less dynamic loading of the corresponding less file. Under normal circumstances, you do not need to pay attention to this change. However, if your project directly references the less file in the <code>lib|es</code> directory. You need to configure <code>@root-entry-name: default;</code> (or <code>@root-entry-name: variable;</code>) at the entry of less so that less can find the correct entry.</p>
<p>In addition, we migrated <code>@import'motion'</code> and <code>@import'reset'</code> in <code>lib|es/style/minxins/index.less</code> to <code>lib|es/style/themes/xxx.less</code> In, because these two files rely on theme-related variables. If you use the relevant internal method, please adjust it yourself. Of course, we still recommend using the <code>water.less</code> files in the <code>dist</code> directory directly instead of calling internal files, because they are often affected by refactoring.</p>
`,lastUpdated:1701878244059}},o={class:"markdown"},i=a(`<p>Except <a href="/docs/react/customize-theme.html">less customize theme</a>, We also provide CSS Variable version to enable dynamic theme. You can check on <a href="/components/config-provider/#components-config-provider-demo-theme">ConfigProvider</a> demo.</p><h2 id="Caveats">Caveats <a class="header-anchor" href="#Caveats"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>This function requires at least <code>@fe6/water-pro@3.1.0-beta.0</code>.</li></ul><h2 id="How-to-use">How to use <a class="header-anchor" href="#How-to-use"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Import-water-variable-min-css">Import water.variable.min.css <a class="header-anchor" href="#Import-water-variable-min-css"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Replace your import style file with CSS Variable version:</p><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">- import &#39;@fe6/water-pro/dist/water.min.css&#39;;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">+ import &#39;@fe6/water-pro/dist/water.variable.min.css&#39;;
</span></span></code></pre><p>Note: You need remove <code>babel-plugin-import</code> for the dynamic theme.</p><h3 id="Static-config">Static config <a class="header-anchor" href="#Static-config"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Call ConfigProvider static function to modify theme color:</p><pre class="language-ts"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro&#39;</span><span class="token punctuation">;</span>

ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token operator">:</span> <span class="token string">&#39;#25b864&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="Conflict-resolve">Conflict resolve <a class="header-anchor" href="#Conflict-resolve"><span aria-hidden="true" class="anchor">#</span></a></h2><p>CSS Variable use <code>--ant</code> prefix by default. When exist multiple water style file in your project, you can modify prefix to fix it.</p><h3 id="Adjust">Adjust <a class="header-anchor" href="#Adjust"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Modify <code>prefixCls</code> on the root of ConfigProvider:</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">prefix-cls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Also need call the static function to modify <code>prefixCls</code>:</p><pre class="language-ts"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro&#39;</span><span class="token punctuation">;</span>
ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span>
  theme<span class="token operator">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token operator">:</span> <span class="token string">&#39;#25b864&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3 id="Compile-less">Compile less <a class="header-anchor" href="#Compile-less"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Since prefix modified. Origin <code>water.variable.css</code> should also be replaced:</p><pre class="language-bash"><code>lessc --js --modify-var<span class="token operator">=</span><span class="token string">&quot;ant-prefix=custom&quot;</span> @fe6/water-pro/dist/water.variable.less modified.css
</code></pre><h3 id="Related-changes">Related changes <a class="header-anchor" href="#Related-changes"><span aria-hidden="true" class="anchor">#</span></a></h3><p>In order to implement CSS Variable and maintain original usage compatibility, we added <code>@root-entry-name: xxx;</code> entry injection to the <code>dist/water.xxx.less</code> file to support less dynamic loading of the corresponding less file. Under normal circumstances, you do not need to pay attention to this change. However, if your project directly references the less file in the <code>lib|es</code> directory. You need to configure <code>@root-entry-name: default;</code> (or <code>@root-entry-name: variable;</code>) at the entry of less so that less can find the correct entry.</p><p>In addition, we migrated <code>@import&#39;motion&#39;</code> and <code>@import&#39;reset&#39;</code> in <code>lib|es/style/minxins/index.less</code> to <code>lib|es/style/themes/xxx.less</code> In, because these two files rely on theme-related variables. If you use the relevant internal method, please adjust it yourself. Of course, we still recommend using the <code>water.less</code> files in the <code>dist</code> directory directly instead of calling internal files, because they are often affected by refactoring.</p>`,24),r=[i];function c(p,l,d,u,f,m){return n(),e("article",o,r)}var k=s(t,[["render",c]]);export{k as default};

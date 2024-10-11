import{E as n,J as e,cb as t}from"./vendor.0f0e4632.js";import{_ as s,a}from"./index.f6b32fa6.js";const o={pageData:{title:"Water Pro",description:"",frontmatter:{},headers:[{level:2,title:"Version",slug:"Version",content:""},{level:2,title:"Features",slug:"Features",content:""},{level:2,title:"Environment Support",slug:"Environment-Support",content:""},{level:2,title:"Installation",slug:"Installation",content:"Using npm or yarn"},{level:3,title:"Using npm or yarn",slug:"Using-npm-or-yarn",content:"**We recommend using npm or yarn to install**\uFF0Cit not only makes development easier\uFF0Cbut also allow you to take advantage of the rich ecosystem of Javascript packages and tooling."},{level:3,title:"Import in Browser",slug:"Import-in-Browser",content:"Add `script` and `link` tags in your browser and use the global variable `antd`."},{level:2,title:"Usage",slug:"Usage",content:""},{level:3,title:"Use modularized water",slug:"Use-modularized-water",content:""}],relativePath:"site/src/vueDocs/introduce.en-US.md",content:`# Water Pro

Following the Ant Design specification, we developed a Vue UI library \`antd\` that contains a set of high quality components and demos for building rich, interactive user interfaces.

&lt;div class=&quot;pic-plus&quot;&gt;
  &lt;img width=&quot;150&quot; src=&quot;/src/assets/logo.png&quot; /&gt;
  &lt;span&gt;+&lt;/span&gt;
  &lt;img width=&quot;160&quot; src=&quot;https://qn.antdv.com/vue.png&quot; /&gt;
&lt;/div&gt;

&lt;style&gt;
.pic-plus &gt; * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
&lt;/style&gt;

## Version

- Stable: [![npm package](https://img.shields.io/npm/v/ant-design-vue?style=flat-square)](https://www.npmjs.org/package/@fe6/water-pro)
- Next: [![npm package](https://img.shields.io/npm/v/@fe6/water-pro/next.svg?style=flat-square)](https://www.npmjs.org/package/@fe6/water-pro)

## Features

- An enterprise-class UI design language for web applications.
- A set of high-quality Vue components out of the box.
- Shared [Ant Design of React](https://ant.design/docs/spec/introduce) design resources.

## Environment Support

- Modern browsers. You can use [1.x](https://1x.antdv.com/) for IE9+.
- Server-side Rendering
- [Electron](https://electronjs.org/)

| [&lt;img src=&quot;https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png&quot; alt=&quot;IE / Edge&quot; width=&quot;24px&quot; height=&quot;24px&quot; /&gt;](http://godban.github.io/browsers-support-badges/)&lt;br/&gt; Edge | [&lt;img src=&quot;https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png&quot; alt=&quot;Firefox&quot; width=&quot;24px&quot; height=&quot;24px&quot; /&gt;](http://godban.github.io/browsers-support-badges/)&lt;br/&gt;Firefox | [&lt;img src=&quot;https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png&quot; alt=&quot;Chrome&quot; width=&quot;24px&quot; height=&quot;24px&quot; /&gt;](http://godban.github.io/browsers-support-badges/)&lt;br/&gt;Chrome | [&lt;img src=&quot;https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png&quot; alt=&quot;Safari&quot; width=&quot;24px&quot; height=&quot;24px&quot; /&gt;](http://godban.github.io/browsers-support-badges/)&lt;br/&gt;Safari | [&lt;img src=&quot;https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png&quot; alt=&quot;Opera&quot; width=&quot;24px&quot; height=&quot;24px&quot; /&gt;](http://godban.github.io/browsers-support-badges/)&lt;br/&gt;Opera | [&lt;img src=&quot;https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png&quot; alt=&quot;Electron&quot; width=&quot;24px&quot; height=&quot;24px&quot; /&gt;](http://godban.github.io/browsers-support-badges/)&lt;br/&gt;Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**\uFF0Cit not only makes development easier\uFF0Cbut also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

\`\`\`bash
$ npm install @fe6/water-pro@next --save
\`\`\`

\`\`\`bash
$ yarn add @fe6/water-pro@next
\`\`\`

### Import in Browser

Add \`script\` and \`link\` tags in your browser and use the global variable \`antd\`.

We provide \`waterPro.js\` \`waterPro.css\` and \`waterPro.min.js\` \`waterPro.min.css\` under \`@fe6/water-pro/dist\` in waterPro&#39;s npm package. You can also download these files directly from [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@fe6/water-pro/badge)](https://www.jsdelivr.com/package/npm/@fe6/water-pro) or [UNPKG](https://unpkg.com/@fe6/water-pro/dist/).

&gt; **We strongly discourage loading the entire files** this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as [webpack](https://webpack.github.io/), which will make it easy to import only the parts of antd that you are using.

&gt; Note: you should import [dayjs](https://day.js.org/) before using antd.js.

## Usage

\`\`\`jsx
import { DatePicker } from &#39;@fe6/water-pro&#39;;
app.use(DatePicker);
\`\`\`

And import stylesheets manually:

\`\`\`jsx
import &#39;@fe6/water-pro/dist/water.css&#39;; // or &#39;@fe6/water-pro/dist/water.less&#39;
\`\`\`

### Use modularized water

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  \`\`\`jsx
  // .babelrc or babel-loader option
  {
    &quot;plugins&quot;: [
      [&quot;import&quot;, { &quot;libraryName&quot;: &quot;ant-design-vue&quot;, &quot;libraryDirectory&quot;: &quot;es&quot;, &quot;style&quot;: &quot;css&quot; }] // \`style: true\` for less
    ]
  }
  \`\`\`

  &gt; Note: Don&#39;t set \`libraryDirectory\` if you are using webpack 1.

  This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

  \`\`\`jsx
  // import js and css modularly, parsed by babel-plugin-import
  import { DatePicker } from &#39;@fe6/water-pro&#39;;
  \`\`\`

- Manually import

  \`\`\`jsx
  import DatePicker from &#39;@fe6/water-pro/lib/date-picker&#39;; // for js
  import &#39;@fe6/water-pro/lib/date-picker/style/css&#39;; // for css
  // import &#39;@fe6/water-pro/lib/date-picker/style&#39;;         // that will import less
  \`\`\`

- For Vite

  \`\`\`js
  // vite.config.js
  import ViteComponents, { AntDesignVueResolver } from &#39;vite-plugin-components&#39;;

  export default {
    plugins: [
      /* ... */
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
      }),
    ],
  };
  \`\`\`

\`\`\`

## Links

- [Home Page](https://www.antdv.com/)
- [Ant Design Of React](https://ant.design/)
- [Components](https://www.antdv.com/docs/vue/introduce)
- [Change Log](/docs/vue/changelog)
- [CodeSandbox template](https://codesandbox.io/s/agitated-franklin-1w72v) for bug reports
- [Customize Theme](/docs/vue/customize-theme)
- [FAQ](/docs/vue/faq)
- [Support US](/docs/vue/sponsor)
- [Awesome Ant Design](https://github.com/vueComponent/ant-design-vue-awesome)

## Contributing

If you&#39;d like to help us improve antd, just create a [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls). Feel free to report bugs and issues [here](https://vuecomponent.github.io/issue-helper/).

&gt; If you&#39;re new to posting issues, we ask that you read [_How To Ask Questions The Smart Way_](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## About ant-design-vue

As we all know, Ant Design, as a design language, has gone through many years of iteration and accumulation. Its UI design ideas have become a set of de facto standards and are sought after and loved by many front-end developers and enterprises, and it is also a magic weapon in the hands of React developers. I hope that ant-design-vue will allow Vue developers to enjoy the excellent design of Ant Design.

The ant-design-vue is the Vue implementation of Ant Design. The style of the component is kept in sync with Ant Design. The html structure and css style of the component are also consistent. The style 0 modification is really achieved, and the component API is kept as consistent as possible.

Ant Design Vue is committed to providing programmers with a ** pleasant ** development experience.

## THANK YOU

[Ant Design Team](https://github.com/ant-design/ant-design/blob/master/AUTHORS.txt)
\`\`\`
`,html:`<h1 id="Water-Pro">Water Pro <a class="header-anchor" href="#Water-Pro">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p>Following the Ant Design specification, we developed a Vue UI library <code>antd</code> that contains a set of high quality components and demos for building rich, interactive user interfaces.</p>
<div class="pic-plus">
  <img width="150" src="/src/assets/logo.png" />
  <span>+</span>
  <img width="160" src="https://qn.antdv.com/vue.png" />
</div>
<h2 id="Version">Version <a class="header-anchor" href="#Version">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>Stable: <a href="https://www.npmjs.org/package/@fe6/water-pro" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/ant-design-vue?style=flat-square" alt="npm package"></a></li>
<li>Next: <a href="https://www.npmjs.org/package/@fe6/water-pro" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@fe6/water-pro/next.svg?style=flat-square" alt="npm package"></a></li>
</ul>
<h2 id="Features">Features <a class="header-anchor" href="#Features">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>An enterprise-class UI design language for web applications.</li>
<li>A set of high-quality Vue components out of the box.</li>
<li>Shared <a href="https://ant.design/docs/spec/introduce" target="_blank" rel="noopener noreferrer">Ant Design of React</a> design resources.</li>
</ul>
<h2 id="Environment-Support">Environment Support <a class="header-anchor" href="#Environment-Support">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>Modern browsers. You can use <a href="https://1x.antdv.com/" target="_blank" rel="noopener noreferrer">1.x</a> for IE9+.</li>
<li>Server-side Rendering</li>
<li><a href="https://electronjs.org/" target="_blank" rel="noopener noreferrer">Electron</a></li>
</ul>
<table>
<thead>
<tr>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></a><br/> Edge</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></a><br/>Firefox</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /></a><br/>Chrome</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></a><br/>Safari</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" /></a><br/>Opera</th>
<th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" /></a><br/>Electron</th>
</tr>
</thead>
<tbody>
<tr>
<td>Edge</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
</tr>
</tbody>
</table>
<h2 id="Installation">Installation <a class="header-anchor" href="#Installation">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Using-npm-or-yarn">Using npm or yarn <a class="header-anchor" href="#Using-npm-or-yarn">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><strong>We recommend using npm or yarn to install</strong>\uFF0Cit not only makes development easier\uFF0Cbut also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.</p>
<pre class="language-bash" v-pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> @fe6/water-pro@next --save
</code></pre>
<pre class="language-bash" v-pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @fe6/water-pro@next
</code></pre>
<h3 id="Import-in-Browser">Import in Browser <a class="header-anchor" href="#Import-in-Browser">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Add <code>script</code> and <code>link</code> tags in your browser and use the global variable <code>antd</code>.</p>
<p>We provide <code>waterPro.js</code> <code>waterPro.css</code> and <code>waterPro.min.js</code> <code>waterPro.min.css</code> under <code>@fe6/water-pro/dist</code> in waterPro's npm package. You can also download these files directly from <a href="https://www.jsdelivr.com/package/npm/@fe6/water-pro" target="_blank" rel="noopener noreferrer"><img src="https://data.jsdelivr.com/v1/package/npm/@fe6/water-pro/badge" alt="jsdelivr"></a> or <a href="https://unpkg.com/@fe6/water-pro/dist/" target="_blank" rel="noopener noreferrer">UNPKG</a>.</p>
<blockquote>
<p><strong>We strongly discourage loading the entire files</strong> this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as <a href="https://webpack.github.io/" target="_blank" rel="noopener noreferrer">webpack</a>, which will make it easy to import only the parts of antd that you are using.</p>
</blockquote>
<blockquote>
<p>Note: you should import <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a> before using antd.js.</p>
</blockquote>
<h2 id="Usage">Usage <a class="header-anchor" href="#Usage">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro'</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>And import stylesheets manually:</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token string">'@fe6/water-pro/dist/water.css'</span><span class="token punctuation">;</span> <span class="token comment">// or '@fe6/water-pro/dist/water.less'</span>
</code></pre>
<h3 id="Use-modularized-water">Use modularized water <a class="header-anchor" href="#Use-modularized-water">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li>
<p>Use <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a> (Recommended)</p>
<pre class="language-jsx" v-pre><code><span class="token comment">// .babelrc or babel-loader option</span>
<span class="token punctuation">{</span>
  <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">"libraryName"</span><span class="token operator">:</span> <span class="token string">"ant-design-vue"</span><span class="token punctuation">,</span> <span class="token string">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment">// \`style: true\` for less</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
<blockquote>
<p>Note: Don't set <code>libraryDirectory</code> if you are using webpack 1.</p>
</blockquote>
<p>This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.</p>
<pre class="language-jsx" v-pre><code><span class="token comment">// import js and css modularly, parsed by babel-plugin-import</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro'</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li>
<p>Manually import</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro/lib/date-picker'</span><span class="token punctuation">;</span> <span class="token comment">// for js</span>
<span class="token keyword">import</span> <span class="token string">'@fe6/water-pro/lib/date-picker/style/css'</span><span class="token punctuation">;</span> <span class="token comment">// for css</span>
<span class="token comment">// import '@fe6/water-pro/lib/date-picker/style';         // that will import less</span>
</code></pre>
</li>
<li>
<p>For Vite</p>
<pre class="language-js" v-pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> ViteComponents<span class="token punctuation">,</span> <span class="token punctuation">{</span> AntDesignVueResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-components'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* ... */</span>
    <span class="token function">ViteComponents</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customComponentResolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
<pre class="language-" v-pre><code>
## Links

- [Home Page](https://www.antdv.com/)
- [Ant Design Of React](https://ant.design/)
- [Components](https://www.antdv.com/docs/vue/introduce)
- [Change Log](/docs/vue/changelog)
- [CodeSandbox template](https://codesandbox.io/s/agitated-franklin-1w72v) for bug reports
- [Customize Theme](/docs/vue/customize-theme)
- [FAQ](/docs/vue/faq)
- [Support US](/docs/vue/sponsor)
- [Awesome Ant Design](https://github.com/vueComponent/ant-design-vue-awesome)

## Contributing

If you&#39;d like to help us improve antd, just create a [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls). Feel free to report bugs and issues [here](https://vuecomponent.github.io/issue-helper/).

&gt; If you&#39;re new to posting issues, we ask that you read [_How To Ask Questions The Smart Way_](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## About ant-design-vue

As we all know, Ant Design, as a design language, has gone through many years of iteration and accumulation. Its UI design ideas have become a set of de facto standards and are sought after and loved by many front-end developers and enterprises, and it is also a magic weapon in the hands of React developers. I hope that ant-design-vue will allow Vue developers to enjoy the excellent design of Ant Design.

The ant-design-vue is the Vue implementation of Ant Design. The style of the component is kept in sync with Ant Design. The html structure and css style of the component are also consistent. The style 0 modification is really achieved, and the component API is kept as consistent as possible.

Ant Design Vue is committed to providing programmers with a ** pleasant ** development experience.

## THANK YOU

[Ant Design Team](https://github.com/ant-design/ant-design/blob/master/AUTHORS.txt)
</code></pre>
`,lastUpdated:1701878244060}},r={class:"markdown"},p=t('<h1 id="Water-Pro">Water Pro <a class="header-anchor" href="#Water-Pro"><span aria-hidden="true" class="anchor">#</span></a></h1><p>Following the Ant Design specification, we developed a Vue UI library <code>antd</code> that contains a set of high quality components and demos for building rich, interactive user interfaces.</p><div class="pic-plus"><img width="150" src="'+a+`"><span>+</span><img width="160" src="https://qn.antdv.com/vue.png"></div><h2 id="Version">Version <a class="header-anchor" href="#Version"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Stable: <a href="https://www.npmjs.org/package/@fe6/water-pro" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/ant-design-vue?style=flat-square" alt="npm package"></a></li><li>Next: <a href="https://www.npmjs.org/package/@fe6/water-pro" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@fe6/water-pro/next.svg?style=flat-square" alt="npm package"></a></li></ul><h2 id="Features">Features <a class="header-anchor" href="#Features"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>An enterprise-class UI design language for web applications.</li><li>A set of high-quality Vue components out of the box.</li><li>Shared <a href="https://ant.design/docs/spec/introduce" target="_blank" rel="noopener noreferrer">Ant Design of React</a> design resources.</li></ul><h2 id="Environment-Support">Environment Support <a class="header-anchor" href="#Environment-Support"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Modern browsers. You can use <a href="https://1x.antdv.com/" target="_blank" rel="noopener noreferrer">1.x</a> for IE9+.</li><li>Server-side Rendering</li><li><a href="https://electronjs.org/" target="_blank" rel="noopener noreferrer">Electron</a></li></ul><table><thead><tr><th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px"></a><br> Edge</th><th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a><br>Firefox</th><th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a><br>Chrome</th><th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a><br>Safari</th><th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px"></a><br>Opera</th><th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px"></a><br>Electron</th></tr></thead><tbody><tr><td>Edge</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td></tr></tbody></table><h2 id="Installation">Installation <a class="header-anchor" href="#Installation"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Using-npm-or-yarn">Using npm or yarn <a class="header-anchor" href="#Using-npm-or-yarn"><span aria-hidden="true" class="anchor">#</span></a></h3><p><strong>We recommend using npm or yarn to install</strong>\uFF0Cit not only makes development easier\uFF0Cbut also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.</p><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> @fe6/water-pro@next --save
</code></pre><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @fe6/water-pro@next
</code></pre><h3 id="Import-in-Browser">Import in Browser <a class="header-anchor" href="#Import-in-Browser"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Add <code>script</code> and <code>link</code> tags in your browser and use the global variable <code>antd</code>.</p><p>We provide <code>waterPro.js</code> <code>waterPro.css</code> and <code>waterPro.min.js</code> <code>waterPro.min.css</code> under <code>@fe6/water-pro/dist</code> in waterPro&#39;s npm package. You can also download these files directly from <a href="https://www.jsdelivr.com/package/npm/@fe6/water-pro" target="_blank" rel="noopener noreferrer"><img src="https://data.jsdelivr.com/v1/package/npm/@fe6/water-pro/badge" alt="jsdelivr"></a> or <a href="https://unpkg.com/@fe6/water-pro/dist/" target="_blank" rel="noopener noreferrer">UNPKG</a>.</p><blockquote><p><strong>We strongly discourage loading the entire files</strong> this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as <a href="https://webpack.github.io/" target="_blank" rel="noopener noreferrer">webpack</a>, which will make it easy to import only the parts of antd that you are using.</p></blockquote><blockquote><p>Note: you should import <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a> before using antd.js.</p></blockquote><h2 id="Usage">Usage <a class="header-anchor" href="#Usage"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro&#39;</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>And import stylesheets manually:</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token string">&#39;@fe6/water-pro/dist/water.css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// or &#39;@fe6/water-pro/dist/water.less&#39;</span>
</code></pre><h3 id="Use-modularized-water">Use modularized water <a class="header-anchor" href="#Use-modularized-water"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li><p>Use <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a> (Recommended)</p><pre class="language-jsx"><code><span class="token comment">// .babelrc or babel-loader option</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ant-design-vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;libraryDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment">// \`style: true\` for less</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><blockquote><p>Note: Don&#39;t set <code>libraryDirectory</code> if you are using webpack 1.</p></blockquote><p>This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.</p><pre class="language-jsx"><code><span class="token comment">// import js and css modularly, parsed by babel-plugin-import</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro&#39;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>Manually import</p><pre class="language-jsx"><code><span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro/lib/date-picker&#39;</span><span class="token punctuation">;</span> <span class="token comment">// for js</span>
<span class="token keyword">import</span> <span class="token string">&#39;@fe6/water-pro/lib/date-picker/style/css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// for css</span>
<span class="token comment">// import &#39;@fe6/water-pro/lib/date-picker/style&#39;;         // that will import less</span>
</code></pre></li><li><p>For Vite</p><pre class="language-js"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> ViteComponents<span class="token punctuation">,</span> <span class="token punctuation">{</span> AntDesignVueResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* ... */</span>
    <span class="token function">ViteComponents</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customComponentResolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></li></ul><pre class="language-"><code>
## Links

- [Home Page](https://www.antdv.com/)
- [Ant Design Of React](https://ant.design/)
- [Components](https://www.antdv.com/docs/vue/introduce)
- [Change Log](/docs/vue/changelog)
- [CodeSandbox template](https://codesandbox.io/s/agitated-franklin-1w72v) for bug reports
- [Customize Theme](/docs/vue/customize-theme)
- [FAQ](/docs/vue/faq)
- [Support US](/docs/vue/sponsor)
- [Awesome Ant Design](https://github.com/vueComponent/ant-design-vue-awesome)

## Contributing

If you&#39;d like to help us improve antd, just create a [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls). Feel free to report bugs and issues [here](https://vuecomponent.github.io/issue-helper/).

&gt; If you&#39;re new to posting issues, we ask that you read [_How To Ask Questions The Smart Way_](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## About ant-design-vue

As we all know, Ant Design, as a design language, has gone through many years of iteration and accumulation. Its UI design ideas have become a set of de facto standards and are sought after and loved by many front-end developers and enterprises, and it is also a magic weapon in the hands of React developers. I hope that ant-design-vue will allow Vue developers to enjoy the excellent design of Ant Design.

The ant-design-vue is the Vue implementation of Ant Design. The style of the component is kept in sync with Ant Design. The html structure and css style of the component are also consistent. The style 0 modification is really achieved, and the component API is kept as consistent as possible.

Ant Design Vue is committed to providing programmers with a ** pleasant ** development experience.

## THANK YOU

[Ant Design Team](https://github.com/ant-design/ant-design/blob/master/AUTHORS.txt)
</code></pre>`,27),i=[p];function l(c,u,d,g,h,m){return e(),n("article",r,i)}var w=s(o,[["render",l]]);export{w as default};

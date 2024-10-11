import{J as l,E as C,cb as A,aq as o,bN as d,bO as s,e as t,H as a,G as n,d as W,k as Z,bP as y}from"./vendor.0f0e4632.js";import{_ as r}from"./index.f6b32fa6.js";import{I as Y}from"./byted-user.ea3b9e04.js";import{I as w}from"./byted-home.ad67ec2b.js";const G={pageData:{title:"Breadcrumb",description:"",frontmatter:{category:"Components",type:"Navigation",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Breadcrumb.Item",slug:"Breadcrumb-Item",content:""},{level:3,title:"Breadcrumb.Separator 1.5.0",slug:"Breadcrumb-Separator-1-5-0",content:""},{level:3,title:"routes",slug:"routes",content:""},{level:3,title:"Use with browserHistory",slug:"Use-with-browserHistory",content:"The link of Breadcrumb item targets `#` by default, you can use `itemRender` to make a `browserHistory` Link."}],relativePath:"components/breadcrumb/index.en-US.md",content:`
A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.

## API

| Property | Description | Type | Optional | Default | Version |
| --- | --- | --- | --- | --- | --- |
| itemRender | Custom item renderer, #itemRender=&quot;{route, params, routes, paths}&quot; | ({route, params, routes, paths}) =&gt; vNode |  | - |  |
| params | Routing parameters | object |  | - |  |
| routes | The routing stack information of router | [routes\\[\\]](#routes) |  | - |  |
| separator | Custom separator | string\\|slot |  | \`/\` |  |

### Breadcrumb.Item

| Property | Description         | Type                                   | Default | Version |
| -------- | ------------------- | -------------------------------------- | ------- | ------- |
| href     | Target of hyperlink | string                                 | -       |         |
| overlay  | The dropdown menu   | [Menu](/components/menu) \\| () =&gt; Menu | -       |         |

#### Events

| Events Name | Description                   | Arguments            | Version |       |
| ----------- | ----------------------------- | -------------------- | ------- | ----- |
| click       | handler to handle click event | (e:MouseEvent)=&gt;void | -       | 1.5.0 |

### Breadcrumb.Separator \`1.5.0\`

| Property | Description | Type | Default | Version |
| -------- | ----------- | ---- | ------- | ------- |
| -        | -           | -    | -       | -       |

&gt; When using \`Breadcrumb.Separator\`,its parent component must be set to \`separator=&quot;&quot;\`, otherwise the default separator of the parent component will appear.

### routes

\`\`\`ts
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array&lt;{
    path: string;
    breadcrumbName: string;
  }&gt;;
}
\`\`\`

### Use with browserHistory

The link of Breadcrumb item targets \`#\` by default, you can use \`itemRender\` to make a \`browserHistory\` Link.

\`\`\`html
&lt;template&gt;
  &lt;a-breadcrumb :routes=&quot;routes&quot;&gt;
    &lt;template #itemRender=&quot;{ route, params, routes, paths }&quot;&gt;
      &lt;span v-if=&quot;routes.indexOf(route) === routes.length - 1&quot;&gt;{{route.breadcrumbName}}&lt;/span&gt;
      &lt;router-link v-else :to=&quot;paths.join(&#39;/&#39;)&quot;&gt;{{route.breadcrumbName}}&lt;/router-link&gt;
    &lt;/template&gt;
  &lt;/a-breadcrumb&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
  import { defineComponent, ref } from &#39;vue&#39;;
  interface Route {
    path: string;
    breadcrumbName: string;
    children?: Array&lt;{
      path: string;
      breadcrumbName: string;
    }&gt;;
  }
  export default defineComponent({
    setup() {
      const routes = ref&lt;Route[]&gt;([
        {
          path: &#39;index&#39;,
          breadcrumbName: &#39;home&#39;,
        },
        {
          path: &#39;first&#39;,
          breadcrumbName: &#39;first&#39;,
          children: [
            {
              path: &#39;/general&#39;,
              breadcrumbName: &#39;General&#39;,
            },
            {
              path: &#39;/layout&#39;,
              breadcrumbName: &#39;Layout&#39;,
            },
            {
              path: &#39;/navigation&#39;,
              breadcrumbName: &#39;Navigation&#39;,
            },
          ],
        },
        {
          path: &#39;second&#39;,
          breadcrumbName: &#39;second&#39;,
        },
      ]);
      return {
        routes,
      };
    },
  });
&lt;/script&gt;
\`\`\`
`,html:`<p>A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When the system has more than two layers in a hierarchy.</li>
<li>When you need to inform the user of where they are.</li>
<li>When the user may need to navigate back to a higher level.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Optional</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>itemRender</td>
<td>Custom item renderer, #itemRender=&quot;{route, params, routes, paths}&quot;</td>
<td>({route, params, routes, paths}) =&gt; vNode</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>params</td>
<td>Routing parameters</td>
<td>object</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>routes</td>
<td>The routing stack information of router</td>
<td><a href="#routes">routes[]</a></td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>separator</td>
<td>Custom separator</td>
<td>string|slot</td>
<td></td>
<td><code>/</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>href</td>
<td>Target of hyperlink</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlay</td>
<td>The dropdown menu</td>
<td><a href="/components/menu.html">Menu</a> | () =&gt; Menu</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="Events">Events <a class="header-anchor" href="#Events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
<th>Version</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>handler to handle click event</td>
<td>(e:MouseEvent)=&gt;void</td>
<td>-</td>
<td>1.5.0</td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<blockquote>
<p>When using <code>Breadcrumb.Separator</code>,its parent component must be set to <code>separator=&quot;&quot;</code>, otherwise the default separator of the parent component will appear.</p>
</blockquote>
<h3 id="routes">routes <a class="header-anchor" href="#routes">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-ts" v-pre><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h3 id="Use-with-browserHistory">Use with browserHistory <a class="header-anchor" href="#Use-with-browserHistory">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>The link of Breadcrumb item targets <code>#</code> by default, you can use <code>itemRender</code> to make a <code>browserHistory</code> Link.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ route, params, routes, paths }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>paths.join(<span class="token punctuation">'</span>/<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> string<span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> string<span class="token punctuation">;</span>
      breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">'/general'</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">'General'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">'/layout'</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">'/navigation'</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
`,lastUpdated:1701878243671}},B={class:"markdown"},_=A(`<p>A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When the system has more than two layers in a hierarchy.</li><li>When you need to inform the user of where they are.</li><li>When the user may need to navigate back to a higher level.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Optional</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>itemRender</td><td>Custom item renderer, #itemRender=&quot;{route, params, routes, paths}&quot;</td><td>({route, params, routes, paths}) =&gt; vNode</td><td></td><td>-</td><td></td></tr><tr><td>params</td><td>Routing parameters</td><td>object</td><td></td><td>-</td><td></td></tr><tr><td>routes</td><td>The routing stack information of router</td><td><a href="#routes">routes[]</a></td><td></td><td>-</td><td></td></tr><tr><td>separator</td><td>Custom separator</td><td>string|slot</td><td></td><td><code>/</code></td><td></td></tr></tbody></table><h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>href</td><td>Target of hyperlink</td><td>string</td><td>-</td><td></td></tr><tr><td>overlay</td><td>The dropdown menu</td><td><a href="/components/menu.html">Menu</a> | () =&gt; Menu</td><td>-</td><td></td></tr></tbody></table><h4 id="Events">Events <a class="header-anchor" href="#Events"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>click</td><td>handler to handle click event</td><td>(e:MouseEvent)=&gt;void</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><blockquote><p>When using <code>Breadcrumb.Separator</code>,its parent component must be set to <code>separator=&quot;&quot;</code>, otherwise the default separator of the parent component will appear.</p></blockquote><h3 id="routes">routes <a class="header-anchor" href="#routes"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-ts"><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="Use-with-browserHistory">Use with browserHistory <a class="header-anchor" href="#Use-with-browserHistory"><span aria-hidden="true" class="anchor">#</span></a></h3><p>The link of Breadcrumb item targets <code>#</code> by default, you can use <code>itemRender</code> to make a <code>browserHistory</code> Link.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ route, params, routes, paths }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paths.join(<span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> string<span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> string<span class="token punctuation">;</span>
      breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/general&#39;</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;General&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/navigation&#39;</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;Navigation&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,17),N=[_];function V(c,i,e,p,u,k){return l(),C("article",B,N)}var J=r(G,[["render",V]]);const R={pageData:{title:"Breadcrumb",description:"",frontmatter:{category:"Components",subtitle:"\u9762\u5305\u5C51",type:"\u5BFC\u822A",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Breadcrumb.Item",slug:"Breadcrumb-Item",content:""},{level:3,title:"Breadcrumb.Separator 1.5.0",slug:"Breadcrumb-Separator-1-5-0",content:""},{level:3,title:"routes",slug:"routes",content:""},{level:3,title:"\u548C browserHistory \u914D\u5408",slug:"\u548C-browserHistory-\u914D\u5408",content:"\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 `#` \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 `itemRender` \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002"}],relativePath:"components/breadcrumb/index.zh-CN.md",content:`
\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B
- \u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B
- \u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- | --- |
| itemRender | \u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 #itemRender=&quot;props&quot; | ({route, params, routes, paths}) =&gt; vNode |  | - |
| params | \u8DEF\u7531\u7684\u53C2\u6570 | object |  | - |
| routes | router \u7684\u8DEF\u7531\u6808\u4FE1\u606F | [routes\\[\\]](#routes) |  | - |
| separator | \u5206\u9694\u7B26\u81EA\u5B9A\u4E49 | string\\|slot |  | &#39;/&#39; |

### Breadcrumb.Item

| \u53C2\u6570    | \u53C2\u6570           | \u7C7B\u578B                                   | \u9ED8\u8BA4\u503C | \u7248\u672C  |
| ------- | -------------- | -------------------------------------- | ------ | ----- |
| href    | \u94FE\u63A5\u7684\u76EE\u7684\u5730   | string                                 | -      | 1.5.0 |
| overlay | \u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9 | [Menu](/components/menu) \\| () =&gt; Menu | -      | 1.5.0 |

#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E     | \u56DE\u8C03\u53C2\u6570             | \u7248\u672C |       |
| -------- | -------- | -------------------- | ---- | ----- |
| click    | \u5355\u51FB\u4E8B\u4EF6 | (e:MouseEvent)=&gt;void | -    | 1.5.0 |

### Breadcrumb.Separator \`1.5.0\`

| \u53C2\u6570 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ---- | ---- | ------ | ---- |
| -    | -    | -      | -    |

&gt; \u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 \`Breadcrumb.Separator\` \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A \`separator=&quot;&quot;\`\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002

### routes

\`\`\`ts
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array&lt;{
    path: string;
    breadcrumbName: string;
  }&gt;;
}
\`\`\`

### \u548C browserHistory \u914D\u5408

\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 \`#\` \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 \`itemRender\` \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002

\`\`\`html
&lt;template&gt;
  &lt;a-breadcrumb :routes=&quot;routes&quot;&gt;
    &lt;template #itemRender=&quot;{ route, params, routes, paths }&quot;&gt;
      &lt;span v-if=&quot;routes.indexOf(route) === routes.length - 1&quot;&gt;{{route.breadcrumbName}}&lt;/span&gt;
      &lt;router-link v-else :to=&quot;paths.join(&#39;/&#39;)&quot;&gt;{{route.breadcrumbName}}&lt;/router-link&gt;
    &lt;/template&gt;
  &lt;/a-breadcrumb&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
  import { defineComponent, ref } from &#39;vue&#39;;
  interface Route {
    path: string;
    breadcrumbName: string;
    children?: Array&lt;{
      path: string;
      breadcrumbName: string;
    }&gt;;
  }
  export default defineComponent({
    setup() {
      const routes = ref&lt;Route[]&gt;([
        {
          path: &#39;index&#39;,
          breadcrumbName: &#39;home&#39;,
        },
        {
          path: &#39;first&#39;,
          breadcrumbName: &#39;first&#39;,
          children: [
            {
              path: &#39;/general&#39;,
              breadcrumbName: &#39;General&#39;,
            },
            {
              path: &#39;/layout&#39;,
              breadcrumbName: &#39;Layout&#39;,
            },
            {
              path: &#39;/navigation&#39;,
              breadcrumbName: &#39;Navigation&#39;,
            },
          ],
        },
        {
          path: &#39;second&#39;,
          breadcrumbName: &#39;second&#39;,
        },
      ]);
      return {
        routes,
      };
    },
  });
&lt;/script&gt;
\`\`\`
`,html:`<p>\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B</li>
<li>\u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B</li>
<li>\u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u53EF\u9009\u503C</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>itemRender</td>
<td>\u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 #itemRender=&quot;props&quot;</td>
<td>({route, params, routes, paths}) =&gt; vNode</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>params</td>
<td>\u8DEF\u7531\u7684\u53C2\u6570</td>
<td>object</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>routes</td>
<td>router \u7684\u8DEF\u7531\u6808\u4FE1\u606F</td>
<td><a href="#routes">routes[]</a></td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>separator</td>
<td>\u5206\u9694\u7B26\u81EA\u5B9A\u4E49</td>
<td>string|slot</td>
<td></td>
<td>'/'</td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>href</td>
<td>\u94FE\u63A5\u7684\u76EE\u7684\u5730</td>
<td>string</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>overlay</td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9</td>
<td><a href="/components/menu.html">Menu</a> | () =&gt; Menu</td>
<td>-</td>
<td>1.5.0</td>
</tr>
</tbody>
</table>
<h4 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
<td>click</td>
<td>\u5355\u51FB\u4E8B\u4EF6</td>
<td>(e:MouseEvent)=&gt;void</td>
<td>-</td>
<td>1.5.0</td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<blockquote>
<p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>separator=&quot;&quot;</code>\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002</p>
</blockquote>
<h3 id="routes">routes <a class="header-anchor" href="#routes">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-ts" v-pre><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h3 id="\u548C-browserHistory-\u914D\u5408">\u548C browserHistory \u914D\u5408 <a class="header-anchor" href="#\u548C-browserHistory-\u914D\u5408">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 <code>#</code> \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>itemRender</code> \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ route, params, routes, paths }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>paths.join(<span class="token punctuation">'</span>/<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> string<span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> string<span class="token punctuation">;</span>
      breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">'/general'</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">'General'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">'/layout'</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">'/navigation'</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
`,lastUpdated:1701878243671}},L={class:"markdown"},P=A(`<p>\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>itemRender</td><td>\u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 #itemRender=&quot;props&quot;</td><td>({route, params, routes, paths}) =&gt; vNode</td><td></td><td>-</td></tr><tr><td>params</td><td>\u8DEF\u7531\u7684\u53C2\u6570</td><td>object</td><td></td><td>-</td></tr><tr><td>routes</td><td>router \u7684\u8DEF\u7531\u6808\u4FE1\u606F</td><td><a href="#routes">routes[]</a></td><td></td><td>-</td></tr><tr><td>separator</td><td>\u5206\u9694\u7B26\u81EA\u5B9A\u4E49</td><td>string|slot</td><td></td><td>&#39;/&#39;</td></tr></tbody></table><h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>href</td><td>\u94FE\u63A5\u7684\u76EE\u7684\u5730</td><td>string</td><td>-</td><td>1.5.0</td></tr><tr><td>overlay</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9</td><td><a href="/components/menu.html">Menu</a> | () =&gt; Menu</td><td>-</td><td>1.5.0</td></tr></tbody></table><h4 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>click</td><td>\u5355\u51FB\u4E8B\u4EF6</td><td>(e:MouseEvent)=&gt;void</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>separator=&quot;&quot;</code>\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002</p></blockquote><h3 id="routes">routes <a class="header-anchor" href="#routes"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-ts"><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="\u548C-browserHistory-\u914D\u5408">\u548C browserHistory \u914D\u5408 <a class="header-anchor" href="#\u548C-browserHistory-\u914D\u5408"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 <code>#</code> \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>itemRender</code> \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ route, params, routes, paths }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paths.join(<span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> string<span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> string<span class="token punctuation">;</span>
      breadcrumbName<span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/general&#39;</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;General&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/navigation&#39;</span><span class="token punctuation">,</span>
              breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;Navigation&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
          breadcrumbName<span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,17),X=[P];function S(c,i,e,p,u,k){return l(),C("article",L,X)}var j=r(R,[["render",S]]);const q={},H=a("Home"),F=n("a",{href:""},"Application Center",-1),x=n("a",{href:""},"Application List",-1),D=a("An Application"),T=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),E=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function U(c,i){const e=o("a-breadcrumb-item"),p=o("a-breadcrumb"),u=o("demo-box");return l(),d(u,{jsfiddle:{us:"The simplest use.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest use.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic Usage"},relativePath:"components/breadcrumb/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+PGEgaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT48YSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+CgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+PGEgaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT48YSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+"}},{default:s(()=>[t(p,null,{default:s(()=>[t(e,null,{default:s(()=>[H]),_:1}),t(e,null,{default:s(()=>[F]),_:1}),t(e,null,{default:s(()=>[x]),_:1}),t(e,null,{default:s(()=>[D]),_:1})]),_:1})]),htmlCode:s(()=>[T]),jsVersionHtml:s(()=>[E]),_:1},8,["jsfiddle"])}var z=r(q,[["render",U]]);const $={},K=a("Ant Design Vue"),Q=n("a",{href:""},"Component",-1),O=n("a",{href:""},"General",-1),M=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"General",-1),nn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"Layout",-1),an=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"Navigation",-1),sn=a("Button"),tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Ant Design Vue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Component"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Layout"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Navigation"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Button"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Ant Design Vue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Component"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Layout"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Navigation"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Button"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function en(c,i){const e=o("a-breadcrumb-item"),p=o("a-menu-item"),u=o("a-menu"),k=o("a-breadcrumb"),g=o("demo-box");return l(),d(g,{jsfiddle:{us:"Breadcrumbs support drop down menu.",cn:"\u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Breadcrumbs support drop down menu.</p>
`,order:5,title:{"zh-CN":"\u5E26\u4E0B\u62C9\u83DC\u5355\u7684\u9762\u5305\u5C51","en-US":"Bread crumbs with drop down menu"},relativePath:"components/breadcrumb/demo/overlay.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW50IERlc2lnbiBWdWU8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPjxhIGhyZWY9IiI+Q29tcG9uZW50PC9hPjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgIDxhIGhyZWY9IiI+R2VuZXJhbDwvYT4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cuYWxpcGF5LmNvbS8iPkdlbmVyYWw8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj5MYXlvdXQ8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRtYWxsLmNvbS8iPk5hdmlnYXRpb248L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5CdXR0b248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgoKCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW50IERlc2lnbiBWdWU8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPjxhIGhyZWY9IiI+Q29tcG9uZW50PC9hPjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgIDxhIGhyZWY9IiI+R2VuZXJhbDwvYT4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cuYWxpcGF5LmNvbS8iPkdlbmVyYWw8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj5MYXlvdXQ8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRtYWxsLmNvbS8iPk5hdmlnYXRpb248L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5CdXR0b248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPg=="}},{default:s(()=>[t(k,null,{default:s(()=>[t(e,null,{default:s(()=>[K]),_:1}),t(e,null,{default:s(()=>[Q]),_:1}),t(e,null,{overlay:s(()=>[t(u,null,{default:s(()=>[t(p,null,{default:s(()=>[M]),_:1}),t(p,null,{default:s(()=>[nn]),_:1}),t(p,null,{default:s(()=>[an]),_:1})]),_:1})]),default:s(()=>[O]),_:1}),t(e,null,{default:s(()=>[sn]),_:1})]),_:1})]),htmlCode:s(()=>[tn]),jsVersionHtml:s(()=>[on]),_:1},8,["jsfiddle"])}var pn=r($,[["render",en]]);const cn=W({setup(){const c=Z([{path:"index",breadcrumbName:"home"},{path:"first",breadcrumbName:"first",children:[{path:"/general",breadcrumbName:"General"},{path:"/layout",breadcrumbName:"Layout"},{path:"/navigation",breadcrumbName:"Navigation"}]},{path:"second",breadcrumbName:"second"}]);return{basePath:"/components/breadcrumb",routes:c}}}),un={key:0},ln=n("br",null,null,-1),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ route, paths }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes.indexOf(route) === routes.length - 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-link")]),a(),n("span",{class:"token attr-name"},"v-else"),a(),n("span",{class:"token attr-name"},":to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`${basePath}/${paths.join("),n("span",{class:"token punctuation"},"'"),a("/"),n("span",{class:"token punctuation"},"'"),a(")}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("router-link")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    {{ $route.path }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"Route"),a(),n("span",{class:"token punctuation"},"{"),a(`
  path`),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  breadcrumbName`),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  children`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Array"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),a(`
    path`),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
    breadcrumbName`),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("Route"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),a(`
        breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'home'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
        breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/general'"),n("span",{class:"token punctuation"},","),a(`
            breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'General'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/layout'"),n("span",{class:"token punctuation"},","),a(`
            breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Layout'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/navigation'"),n("span",{class:"token punctuation"},","),a(`
            breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Navigation'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
        breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      basePath`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/components/breadcrumb'"),n("span",{class:"token punctuation"},","),a(`
      routes`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ route, paths }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes.indexOf(route) === routes.length - 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-link")]),a(),n("span",{class:"token attr-name"},"v-else"),a(),n("span",{class:"token attr-name"},":to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`${basePath}/${paths.join("),n("span",{class:"token punctuation"},"'"),a("/"),n("span",{class:"token punctuation"},"'"),a(")}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("router-link")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    {{ $route.path }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),a(`
      breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'home'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
      breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/general'"),n("span",{class:"token punctuation"},","),a(`
        breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'General'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/layout'"),n("span",{class:"token punctuation"},","),a(`
        breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Layout'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/navigation'"),n("span",{class:"token punctuation"},","),a(`
        breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Navigation'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      path`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
      breadcrumbName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      basePath`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/components/breadcrumb'"),n("span",{class:"token punctuation"},","),a(`
      routes`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function dn(c,i,e,p,u,k){const g=o("router-link"),m=o("a-breadcrumb"),b=o("demo-box");return l(),d(b,{jsfiddle:{us:"Used together with `vue-router`",cn:"\u548C `vue-router` \u8FDB\u884C\u7ED3\u5408\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u548C <code>vue-router</code> \u8FDB\u884C\u7ED3\u5408\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Used together with <code>vue-router</code></p>
`,order:3,iframe:200,reactRouter:"react-router-dom",title:{"zh-CN":"\u5176\u5B83\u8DEF\u7531","en-US":"Other Router Integration"},relativePath:"components/breadcrumb/demo/router.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1icmVhZGNydW1iIDpyb3V0ZXM9InJvdXRlcyI+CiAgICAgIDx0ZW1wbGF0ZSAjaXRlbVJlbmRlcj0ieyByb3V0ZSwgcGF0aHMgfSI+CiAgICAgICAgPHNwYW4gdi1pZj0icm91dGVzLmluZGV4T2Yocm91dGUpID09PSByb3V0ZXMubGVuZ3RoIC0gMSI+CiAgICAgICAgICB7eyByb3V0ZS5icmVhZGNydW1iTmFtZSB9fQogICAgICAgIDwvc3Bhbj4KICAgICAgICA8cm91dGVyLWxpbmsgdi1lbHNlIDp0bz0iYCR7YmFzZVBhdGh9LyR7cGF0aHMuam9pbignLycpfWAiPgogICAgICAgICAge3sgcm91dGUuYnJlYWRjcnVtYk5hbWUgfX0KICAgICAgICA8L3JvdXRlci1saW5rPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWI+CiAgICA8YnIgLz4KICAgIHt7ICRyb3V0ZS5wYXRoIH19CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmludGVyZmFjZSBSb3V0ZSB7CiAgcGF0aDogc3RyaW5nOwogIGJyZWFkY3J1bWJOYW1lOiBzdHJpbmc7CiAgY2hpbGRyZW4/OiBBcnJheTx7CiAgICBwYXRoOiBzdHJpbmc7CiAgICBicmVhZGNydW1iTmFtZTogc3RyaW5nOwogIH0+Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCByb3V0ZXMgPSByZWY8Um91dGVbXT4oWwogICAgICB7CiAgICAgICAgcGF0aDogJ2luZGV4JywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnLAogICAgICB9LAogICAgICB7CiAgICAgICAgcGF0aDogJ2ZpcnN0JywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ2ZpcnN0JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBwYXRoOiAnL2dlbmVyYWwnLAogICAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ0dlbmVyYWwnLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgcGF0aDogJy9sYXlvdXQnLAogICAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ0xheW91dCcsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBwYXRoOiAnL25hdmlnYXRpb24nLAogICAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ05hdmlnYXRpb24nLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgcGF0aDogJ3NlY29uZCcsCiAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICdzZWNvbmQnLAogICAgICB9LAogICAgXSk7CiAgICByZXR1cm4gewogICAgICBiYXNlUGF0aDogJy9jb21wb25lbnRzL2JyZWFkY3J1bWInLAogICAgICByb3V0ZXMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1icmVhZGNydW1iIDpyb3V0ZXM9InJvdXRlcyI+CiAgICAgIDx0ZW1wbGF0ZSAjaXRlbVJlbmRlcj0ieyByb3V0ZSwgcGF0aHMgfSI+CiAgICAgICAgPHNwYW4gdi1pZj0icm91dGVzLmluZGV4T2Yocm91dGUpID09PSByb3V0ZXMubGVuZ3RoIC0gMSI+CiAgICAgICAgICB7eyByb3V0ZS5icmVhZGNydW1iTmFtZSB9fQogICAgICAgIDwvc3Bhbj4KICAgICAgICA8cm91dGVyLWxpbmsgdi1lbHNlIDp0bz0iYCR7YmFzZVBhdGh9LyR7cGF0aHMuam9pbignLycpfWAiPgogICAgICAgICAge3sgcm91dGUuYnJlYWRjcnVtYk5hbWUgfX0KICAgICAgICA8L3JvdXRlci1saW5rPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWI+CiAgICA8YnIgLz4KICAgIHt7ICRyb3V0ZS5wYXRoIH19CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHJvdXRlcyA9IHJlZihbewogICAgICBwYXRoOiAnaW5kZXgnLAogICAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnLAogICAgfSwgewogICAgICBwYXRoOiAnZmlyc3QnLAogICAgICBicmVhZGNydW1iTmFtZTogJ2ZpcnN0JywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgcGF0aDogJy9nZW5lcmFsJywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ0dlbmVyYWwnLAogICAgICB9LCB7CiAgICAgICAgcGF0aDogJy9sYXlvdXQnLAogICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnTGF5b3V0JywKICAgICAgfSwgewogICAgICAgIHBhdGg6ICcvbmF2aWdhdGlvbicsCiAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICdOYXZpZ2F0aW9uJywKICAgICAgfV0sCiAgICB9LCB7CiAgICAgIHBhdGg6ICdzZWNvbmQnLAogICAgICBicmVhZGNydW1iTmFtZTogJ3NlY29uZCcsCiAgICB9XSk7CiAgICByZXR1cm4gewogICAgICBiYXNlUGF0aDogJy9jb21wb25lbnRzL2JyZWFkY3J1bWInLAogICAgICByb3V0ZXMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:s(()=>[n("div",null,[t(m,{routes:c.routes},{itemRender:s(({route:h,paths:I})=>[c.routes.indexOf(h)===c.routes.length-1?(l(),C("span",un,y(h.breadcrumbName),1)):(l(),d(g,{key:1,to:`${c.basePath}/${I.join("/")}`},{default:s(()=>[a(y(h.breadcrumbName),1)]),_:2},1032,["to"]))]),_:1},8,["routes"]),ln,a(" "+y(c.$route.path),1)])]),htmlCode:s(()=>[rn]),jsVersionHtml:s(()=>[kn]),_:1},8,["jsfiddle"])}var gn=r(cn,[["render",dn]]);const mn={},hn=a("Home"),bn=a("Application Center"),In=a("Application List"),Cn=a("An Application"),Wn=n("span",{style:{color:"red"}},">",-1),yn=a("Home"),An=a("Application Center"),vn=a("Application List"),fn=a("An Application"),Zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(">"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#separator"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(">"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(">"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#separator"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(">"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function wn(c,i){const e=o("a-breadcrumb-item"),p=o("a-breadcrumb"),u=o("demo-box");return l(),d(u,{jsfiddle:{us:`The separator can be customized by setting the separator preperty: separator=">" or use
  slot="separator"`,cn:'\u7528` separator=">" `\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u6216\u8005\u4F7F\u7528slot="separator"\u81EA\u5B9A\u4E49\u66F4\u590D\u6742\u7684\u5206\u9694\u7B26',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528<code>separator=&quot;&gt;&quot;</code>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u6216\u8005\u4F7F\u7528slot=&quot;separator&quot;\u81EA\u5B9A\u4E49\u66F4\u590D\u6742\u7684\u5206\u9694\u7B26</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The separator can be customized by setting the separator preperty: separator=&quot;&gt;&quot; or use
slot=&quot;separator&quot;</p>
`,order:4,title:{"zh-CN":"\u5206\u9694\u7B26","en-US":"Configuring the Separator"},relativePath:"components/breadcrumb/demo/separator.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSI+Ij4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5Ib21lPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIENlbnRlcjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBMaXN0PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CiAgPGEtYnJlYWRjcnVtYj4KICAgIDx0ZW1wbGF0ZSAjc2VwYXJhdG9yPjxzcGFuIHN0eWxlPSJjb2xvcjogcmVkIj4+PC9zcGFuPjwvdGVtcGxhdGU+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtIGhyZWY9IiI+QXBwbGljYXRpb24gTGlzdDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW4gQXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgoKCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSI+Ij4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5Ib21lPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIENlbnRlcjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBMaXN0PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CiAgPGEtYnJlYWRjcnVtYj4KICAgIDx0ZW1wbGF0ZSAjc2VwYXJhdG9yPjxzcGFuIHN0eWxlPSJjb2xvcjogcmVkIj4+PC9zcGFuPjwvdGVtcGxhdGU+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtIGhyZWY9IiI+QXBwbGljYXRpb24gTGlzdDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW4gQXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPg=="}},{default:s(()=>[t(p,{separator:">"},{default:s(()=>[t(e,null,{default:s(()=>[hn]),_:1}),t(e,{href:""},{default:s(()=>[bn]),_:1}),t(e,{href:""},{default:s(()=>[In]),_:1}),t(e,null,{default:s(()=>[Cn]),_:1})]),_:1}),t(p,null,{separator:s(()=>[Wn]),default:s(()=>[t(e,null,{default:s(()=>[yn]),_:1}),t(e,{href:""},{default:s(()=>[An]),_:1}),t(e,{href:""},{default:s(()=>[vn]),_:1}),t(e,null,{default:s(()=>[fn]),_:1})]),_:1})]),htmlCode:s(()=>[Zn]),jsVersionHtml:s(()=>[Yn]),_:1},8,["jsfiddle"])}var Gn=r(mn,[["render",wn]]);const Bn={},_n=a("Location"),Nn=a(":"),Vn=a("Application Center"),Jn=a("Application List"),Rn=a("An Application"),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Location"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(":"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Location"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(":"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Xn(c,i){const e=o("a-breadcrumb-item"),p=o("a-breadcrumb-separator"),u=o("a-breadcrumb"),k=o("demo-box");return l(),d(k,{jsfiddle:{us:"The separator can be customized by setting the separator property: `Breadcrumb.Separator`.",cn:"\u4F7F\u7528 `Breadcrumb.Separator` \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The separator can be customized by setting the separator property: <code>Breadcrumb.Separator</code>.</p>
`,order:6,title:{"zh-CN":"\u5206\u9694\u7B26","en-US":"Configuring the Separator"},relativePath:"components/breadcrumb/demo/separator-indepent.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSIiPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPkxvY2F0aW9uPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItc2VwYXJhdG9yPjo8L2EtYnJlYWRjcnVtYi1zZXBhcmF0b3I+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+CgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSIiPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPkxvY2F0aW9uPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItc2VwYXJhdG9yPjo8L2EtYnJlYWRjcnVtYi1zZXBhcmF0b3I+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+"}},{default:s(()=>[t(u,{separator:""},{default:s(()=>[t(e,null,{default:s(()=>[_n]),_:1}),t(p,null,{default:s(()=>[Nn]),_:1}),t(e,{href:""},{default:s(()=>[Vn]),_:1}),t(p),t(e,{href:""},{default:s(()=>[Jn]),_:1}),t(p),t(e,null,{default:s(()=>[Rn]),_:1})]),_:1})]),htmlCode:s(()=>[Ln]),jsVersionHtml:s(()=>[Pn]),_:1},8,["jsfiddle"])}var Sn=r(Bn,[["render",Xn]]);const jn=W({components:{IconBytedHome:w,IconBytedUser:Y}}),qn=n("span",null,"Application List",-1),Hn=a("Application"),Fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedHome")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedUser")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedUser "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-user'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedHome "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-home'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedHome`),n("span",{class:"token punctuation"},","),a(`
    IconBytedUser`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedHome")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedUser")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedUser "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-user'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedHome "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-home'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedHome`),n("span",{class:"token punctuation"},","),a(`
    IconBytedUser`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Dn(c,i,e,p,u,k){const g=o("IconBytedHome"),m=o("a-breadcrumb-item"),b=o("IconBytedUser"),h=o("a-breadcrumb"),I=o("demo-box");return l(),d(I,{jsfiddle:{us:"The icon should be placed in front of the text.",cn:"\u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The icon should be placed in front of the text.</p>
`,order:1,title:{"zh-CN":"\u5E26\u6709\u56FE\u6807\u7684","en-US":"With an Icon"},relativePath:"components/breadcrumb/demo/withIcon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPEljb25CeXRlZEhvbWUgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPEljb25CeXRlZFVzZXIgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgPHNwYW4+QXBwbGljYXRpb24gTGlzdDwvc3Bhbj4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZFVzZXIgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXNlcic7CmltcG9ydCBJY29uQnl0ZWRIb21lIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWhvbWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZEhvbWUsCiAgICBJY29uQnl0ZWRVc2VyLAogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPEljb25CeXRlZEhvbWUgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPEljb25CeXRlZFVzZXIgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgPHNwYW4+QXBwbGljYXRpb24gTGlzdDwvc3Bhbj4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkVXNlciBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11c2VyJzsKaW1wb3J0IEljb25CeXRlZEhvbWUgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtaG9tZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkSG9tZSwKICAgIEljb25CeXRlZFVzZXIsCiAgfSwKfSk7Cjwvc2NyaXB0Pg=="}},{default:s(()=>[t(h,null,{default:s(()=>[t(m,{href:""},{default:s(()=>[t(g,{colors:["currentColor"]})]),_:1}),t(m,{href:""},{default:s(()=>[t(b,{colors:["currentColor"]}),qn]),_:1}),t(m,null,{default:s(()=>[Hn]),_:1})]),_:1})]),htmlCode:s(()=>[Fn]),jsVersionHtml:s(()=>[xn]),_:1},8,["jsfiddle"])}var Tn=r(jn,[["render",Dn]]);const En=W({CN:j,US:J,components:{Basic:z,Overlay:pn,Router:gn,Separator:Gn,SeparatorIndepent:Sn,WithIcon:Tn}});function Un(c,i,e,p,u,k){const g=o("basic"),m=o("overlay"),b=o("router"),h=o("separator"),I=o("separator-indepent"),v=o("with-icon"),f=o("demo-sort");return l(),d(f,null,{default:s(()=>[t(g),t(m),t(b),t(h),t(I),t(v)]),_:1})}var On=r(En,[["render",Un]]);export{On as default};

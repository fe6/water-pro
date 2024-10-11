import{J as r,E as W,cb as G,d as h,a3 as v,aq as o,bN as A,bO as a,e as s,G as n,W as y,H as t,bL as _,bM as S,k as R,bX as D,F as f,bP as Y,bR as X}from"./vendor.0f0e4632.js";import{_ as b}from"./index.f6b32fa6.js";import{I as L}from"./byted-user.ea3b9e04.js";const x={pageData:{title:"Dropdown",description:"",frontmatter:{category:"Components",type:"Navigation",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action."},{level:2,title:"API",slug:"API",content:"Dropdown"},{level:3,title:"Dropdown",slug:"Dropdown",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Dropdown.Button",slug:"Dropdown-Button",content:""},{level:3,title:"Dropdown.Button events",slug:"Dropdown-Button-events",content:""}],relativePath:"components/dropdown/index.en-US.md",content:"\nA dropdown list.\n\n## When To Use\n\nWhen there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.\n\n## API\n\n### Dropdown\n\n| Property | Description | Type | Default |  |\n| --- | --- | --- | --- | --- |\n| destroyPopupOnHide | Whether destroy dropdown when hidden | boolean | false |  |\n| disabled | whether the dropdown menu is disabled | boolean | - |  |\n| getPopupContainer | to set the container of the dropdown menu. The default is to create a `div` element in `body`, you can reset it to the scrolling area and make a relative reposition. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | `() =&gt; document.body` |  |\n| overlay(v-slot) | the dropdown menu | [Menu](/components/menu) | - |  |\n| overlayClassName | Class name of the dropdown root element | string | - |  |\n| overlayStyle | Style of the dropdown root element | object | - |  |\n| placement | placement of pop menu: `bottomLeft` `bottom` `bottomRight` `topLeft` `top` `topRight` | String | `bottomLeft` |  |\n| trigger | the trigger mode which executes the drop-down action, hover doesn&#39;t work on mobile device | Array&amp;lt;`click`\\|`hover`\\|`contextmenu`&gt; | `[&#39;hover&#39;]` |  |\n| visible(v-model) | whether the dropdown menu is visible | boolean | - |  |\n\n### events\n\n| Events Name | Description | Arguments |\n| --- | --- | --- |\n| visibleChange | a callback function takes an argument: `visible`, is executed when the visible state is changed. Not trigger when hidden by click item | function(visible) |\n\nYou should use [Menu](/components/menu/) as `overlay`. The menu items and dividers are also available by using `Menu.Item` and `Menu.Divider`.\n\n&gt; Warning: You must set a unique `key` for `Menu.Item`.\n&gt;\n&gt; Menu of Dropdown is unselectable by default, you can make it selectable via `&lt;Menu selectable&gt;`.\n\n### Dropdown.Button\n\n| Property | Description | Type | Default | Version |\n| --- | --- | --- | --- | --- |\n| disabled | whether the dropdown menu is disabled | boolean | - |  |\n| icon | Icon (appears on the right) | vNode \\| slot | - | 1.5.0 |\n| loading | Set the loading status of button | boolean \\| { delay: number } | false | 3.0 |\n| overlay(v-slot) | the dropdown menu | [Menu](/components/menu) | - |  |\n| placement | placement of pop menu: `bottomLeft` `bottom` `bottomRight` `topLeft` `top` `topRight` | String | `bottomLeft` |  |\n| size | size of the button, the same as [Button](/components/button) | string | `default` |  |\n| trigger | the trigger mode which executes the drop-down action | Array&amp;lt;`click`\\|`hover`\\|`contextmenu`&gt; | `[&#39;hover&#39;]` |  |\n| type | type of the button, the same as [Button](/components/button) | string | `default` |  |\n| visible(v-model) | whether the dropdown menu is visible | boolean | - |  |\n\n### Dropdown.Button events\n\n| Events Name | Description | Arguments |\n| --- | --- | --- |\n| click | a callback function, the same as [Button](/components/button), which will be executed when you click the button on the left | Function |\n| visibleChange | a callback function takes an argument: `visible`, is executed when the visible state is changed. Not trigger when hidden by click item | Function |\n",html:`<p>A dropdown list.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>When there are more than a few options to choose from, you can wrap them in a <code>Dropdown</code>. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Dropdown">Dropdown <a class="header-anchor" href="#Dropdown">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>destroyPopupOnHide</td>
<td>Whether destroy dropdown when hidden</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>whether the dropdown menu is disabled</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>to set the container of the dropdown menu. The default is to create a <code>div</code> element in <code>body</code>, you can reset it to the scrolling area and make a relative reposition. <a href="https://codepen.io/afc163/pen/zEjNOy?editors=0010" target="_blank" rel="noopener noreferrer">example</a></td>
<td>Function(triggerNode)</td>
<td><code>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>the dropdown menu</td>
<td><a href="/components/menu.html">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>Class name of the dropdown root element</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>Style of the dropdown root element</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td>
<td>String</td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>the trigger mode which executes the drop-down action, hover doesn't work on mobile device</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>whether the dropdown menu is visible</td>
<td>boolean</td>
<td>-</td>
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
</tr>
</thead>
<tbody>
<tr>
<td>visibleChange</td>
<td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td>
<td>function(visible)</td>
</tr>
</tbody>
</table>
<p>You should use <a href="/components/menu/">Menu</a> as <code>overlay</code>. The menu items and dividers are also available by using <code>Menu.Item</code> and <code>Menu.Divider</code>.</p>
<blockquote>
<p>Warning: You must set a unique <code>key</code> for <code>Menu.Item</code>.</p>
<p>Menu of Dropdown is unselectable by default, you can make it selectable via <code>&lt;Menu selectable&gt;</code>.</p>
</blockquote>
<h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button">
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
<td>disabled</td>
<td>whether the dropdown menu is disabled</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>Icon (appears on the right)</td>
<td>vNode | slot</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>loading</td>
<td>Set the loading status of button</td>
<td>boolean | { delay: number }</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>the dropdown menu</td>
<td><a href="/components/menu.html">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td>
<td>String</td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>size of the button, the same as <a href="/components/button.html">Button</a></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>the trigger mode which executes the drop-down action</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>type of the button, the same as <a href="/components/button.html">Button</a></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>whether the dropdown menu is visible</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Dropdown-Button-events">Dropdown.Button events <a class="header-anchor" href="#Dropdown-Button-events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>a callback function, the same as <a href="/components/button.html">Button</a>, which will be executed when you click the button on the left</td>
<td>Function</td>
</tr>
<tr>
<td>visibleChange</td>
<td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td>
<td>Function</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243744}},J={class:"markdown"},j=G('<p>A dropdown list.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>When there are more than a few options to choose from, you can wrap them in a <code>Dropdown</code>. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Dropdown">Dropdown <a class="header-anchor" href="#Dropdown"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th></th></tr></thead><tbody><tr><td>destroyPopupOnHide</td><td>Whether destroy dropdown when hidden</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>whether the dropdown menu is disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>to set the container of the dropdown menu. The default is to create a <code>div</code> element in <code>body</code>, you can reset it to the scrolling area and make a relative reposition. <a href="https://codepen.io/afc163/pen/zEjNOy?editors=0010" target="_blank" rel="noopener noreferrer">example</a></td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td><td></td></tr><tr><td>overlay(v-slot)</td><td>the dropdown menu</td><td><a href="/components/menu.html">Menu</a></td><td>-</td><td></td></tr><tr><td>overlayClassName</td><td>Class name of the dropdown root element</td><td>string</td><td>-</td><td></td></tr><tr><td>overlayStyle</td><td>Style of the dropdown root element</td><td>object</td><td>-</td><td></td></tr><tr><td>placement</td><td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>trigger</td><td>the trigger mode which executes the drop-down action, hover doesn&#39;t work on mobile device</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>visible(v-model)</td><td>whether the dropdown menu is visible</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>visibleChange</td><td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td><td>function(visible)</td></tr></tbody></table><p>You should use <a href="/components/menu/">Menu</a> as <code>overlay</code>. The menu items and dividers are also available by using <code>Menu.Item</code> and <code>Menu.Divider</code>.</p><blockquote><p>Warning: You must set a unique <code>key</code> for <code>Menu.Item</code>.</p><p>Menu of Dropdown is unselectable by default, you can make it selectable via <code>&lt;Menu selectable&gt;</code>.</p></blockquote><h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>disabled</td><td>whether the dropdown menu is disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>icon</td><td>Icon (appears on the right)</td><td>vNode | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>loading</td><td>Set the loading status of button</td><td>boolean | { delay: number }</td><td>false</td><td>3.0</td></tr><tr><td>overlay(v-slot)</td><td>the dropdown menu</td><td><a href="/components/menu.html">Menu</a></td><td>-</td><td></td></tr><tr><td>placement</td><td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>size</td><td>size of the button, the same as <a href="/components/button.html">Button</a></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>trigger</td><td>the trigger mode which executes the drop-down action</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>type</td><td>type of the button, the same as <a href="/components/button.html">Button</a></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>visible(v-model)</td><td>whether the dropdown menu is visible</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="Dropdown-Button-events">Dropdown.Button events <a class="header-anchor" href="#Dropdown-Button-events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>a callback function, the same as <a href="/components/button.html">Button</a>, which will be executed when you click the button on the left</td><td>Function</td></tr><tr><td>visibleChange</td><td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td><td>Function</td></tr></tbody></table>',14),E=[j];function N(c,p,k,m,C,I){return r(),W("article",J,E)}var U=b(x,[["render",N]]);const H={pageData:{title:"Dropdown",description:"",frontmatter:{category:"Components",subtitle:"\u4E0B\u62C9\u83DC\u5355",type:"\u5BFC\u822A",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002"},{level:2,title:"API",slug:"API",content:"\u5C5E\u6027\u5982\u4E0B"},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Dropdown.Button",slug:"Dropdown-Button",content:""},{level:3,title:"Dropdown.Button \u4E8B\u4EF6",slug:"Dropdown-Button-\u4E8B\u4EF6",content:""}],relativePath:"components/dropdown/index.zh-CN.md",content:`
\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002

- \u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002
- Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002

## API

\u5C5E\u6027\u5982\u4E0B

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |  |
| --- | --- | --- | --- | --- |
| destroyPopupOnHide | \u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown | boolean | false | 3.0 |
| disabled | \u83DC\u5355\u662F\u5426\u7981\u7528 | boolean | - |  |
| getPopupContainer | \u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002 | Function(triggerNode) | \`() =&gt; document.body\` |  |
| overlay(v-slot) | \u83DC\u5355 | [Menu](/components/menu-cn) | - |  |
| overlayClassName | \u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0 | string | - |  |
| overlayStyle | \u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F | object | - |  |
| placement | \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E | \`bottomLeft\` \\| \`bottom\` \\| \`bottomRight\` \\| \`topLeft\` \\| \`top\` \\| \`topRight\` | \`bottomLeft\` |  |
| trigger | \u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover | Array&amp;lt;\`click\`\\|\`hover\`\\|\`contextmenu\`&gt; | \`[&#39;hover&#39;]\` |  |
| visible(v-model) | \u83DC\u5355\u662F\u5426\u663E\u793A | boolean | - |  |

\`overlay\` \u83DC\u5355\u4F7F\u7528 [Menu](/components/menu-cn/)\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 \`Menu.Item\`\uFF0C\u5206\u5272\u7EBF \`Menu.Divider\`\u3002

&gt; \u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002
&gt;
&gt; Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A \`&lt;Menu selectable&gt;\`.

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| visibleChange | \u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1 | function(visible) |

### Dropdown.Button

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| disabled | \u83DC\u5355\u662F\u5426\u7981\u7528 | boolean | - |  |
| icon | \u53F3\u4FA7\u7684 icon | VNode \\| slot | - | 1.5.0 |
| loading | \u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001 | boolean \\| { delay: number } | false | 3.0 |
| overlay(v-slot) | \u83DC\u5355 | [Menu](/components/menu-cn/) | - |  |
| placement | \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E | \`bottomLeft\` \\| \`bottom\` \\| \`bottomRight\` \\| \`topLeft\` \\| \`top\` \\| \`topRight\` | \`bottomLeft\` |  |
| size | \u6309\u94AE\u5927\u5C0F\uFF0C\u548C [Button](/components/button-cn/) \u4E00\u81F4 | string | &#39;default&#39; |  |
| trigger | \u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A | Array&amp;lt;\`click\`\\|\`hover\`\\|\`contextmenu\`&gt; | \`[&#39;hover&#39;]\` |  |
| type | \u6309\u94AE\u7C7B\u578B\uFF0C\u548C [Button](/components/button-cn/) \u4E00\u81F4 | string | &#39;default&#39; |  |
| visible(v-model) | \u83DC\u5355\u662F\u5426\u663E\u793A | boolean | - |  |

### Dropdown.Button \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| click | \u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C [Button](/components/button-cn/) \u4E00\u81F4 | Function |
| visibleChange | \u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1 | function(visible) |
`,html:`<p>\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002</p>
<ul>
<li>\u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002</li>
<li>Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C5E\u6027\u5982\u4E0B</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>destroyPopupOnHide</td>
<td>\u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>disabled</td>
<td>\u83DC\u5355\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td>
<td>Function(triggerNode)</td>
<td><code>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>\u83DC\u5355</td>
<td><a href="/components/menu-cn.html">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td>
<td><code>bottomLeft</code> | <code>bottom</code> | <code>bottomRight</code> | <code>topLeft</code> | <code>top</code> | <code>topRight</code></td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>\u83DC\u5355\u662F\u5426\u663E\u793A</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p><code>overlay</code> \u83DC\u5355\u4F7F\u7528 <a href="/components/menu-cn/">Menu</a>\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 <code>Menu.Item</code>\uFF0C\u5206\u5272\u7EBF <code>Menu.Divider</code>\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002</p>
<p>Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A <code>&lt;Menu selectable&gt;</code>.</p>
</blockquote>
<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>visibleChange</td>
<td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td>
<td>function(visible)</td>
</tr>
</tbody>
</table>
<h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>disabled</td>
<td>\u83DC\u5355\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>\u53F3\u4FA7\u7684 icon</td>
<td>VNode | slot</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>loading</td>
<td>\u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001</td>
<td>boolean | { delay: number }</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>\u83DC\u5355</td>
<td><a href="/components/menu-cn/">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td>
<td><code>bottomLeft</code> | <code>bottom</code> | <code>bottomRight</code> | <code>topLeft</code> | <code>top</code> | <code>topRight</code></td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u6309\u94AE\u5927\u5C0F\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td>
<td>string</td>
<td>'default'</td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u6309\u94AE\u7C7B\u578B\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td>
<td>string</td>
<td>'default'</td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>\u83DC\u5355\u662F\u5426\u663E\u793A</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Dropdown-Button-\u4E8B\u4EF6">Dropdown.Button \u4E8B\u4EF6 <a class="header-anchor" href="#Dropdown-Button-\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td>
<td>Function</td>
</tr>
<tr>
<td>visibleChange</td>
<td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td>
<td>function(visible)</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243745}},K={class:"markdown"},F=G('<p>\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002</p><ul><li>\u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002</li><li>Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5C5E\u6027\u5982\u4E0B</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th></th></tr></thead><tbody><tr><td>destroyPopupOnHide</td><td>\u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown</td><td>boolean</td><td>false</td><td>3.0</td></tr><tr><td>disabled</td><td>\u83DC\u5355\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td><td></td></tr><tr><td>overlay(v-slot)</td><td>\u83DC\u5355</td><td><a href="/components/menu-cn.html">Menu</a></td><td>-</td><td></td></tr><tr><td>overlayClassName</td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td><td>string</td><td>-</td><td></td></tr><tr><td>overlayStyle</td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td><code>bottomLeft</code> | <code>bottom</code> | <code>bottomRight</code> | <code>topLeft</code> | <code>top</code> | <code>topRight</code></td><td><code>bottomLeft</code></td><td></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>visible(v-model)</td><td>\u83DC\u5355\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><p><code>overlay</code> \u83DC\u5355\u4F7F\u7528 <a href="/components/menu-cn/">Menu</a>\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 <code>Menu.Item</code>\uFF0C\u5206\u5272\u7EBF <code>Menu.Divider</code>\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002</p><p>Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A <code>&lt;Menu selectable&gt;</code>.</p></blockquote><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>visibleChange</td><td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td><td>function(visible)</td></tr></tbody></table><h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>disabled</td><td>\u83DC\u5355\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>icon</td><td>\u53F3\u4FA7\u7684 icon</td><td>VNode | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>loading</td><td>\u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001</td><td>boolean | { delay: number }</td><td>false</td><td>3.0</td></tr><tr><td>overlay(v-slot)</td><td>\u83DC\u5355</td><td><a href="/components/menu-cn/">Menu</a></td><td>-</td><td></td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td><code>bottomLeft</code> | <code>bottom</code> | <code>bottomRight</code> | <code>topLeft</code> | <code>top</code> | <code>topRight</code></td><td><code>bottomLeft</code></td><td></td></tr><tr><td>size</td><td>\u6309\u94AE\u5927\u5C0F\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>string</td><td>&#39;default&#39;</td><td></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>string</td><td>&#39;default&#39;</td><td></td></tr><tr><td>visible(v-model)</td><td>\u83DC\u5355\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="Dropdown-Button-\u4E8B\u4EF6">Dropdown.Button \u4E8B\u4EF6 <a class="header-anchor" href="#Dropdown-Button-\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>Function</td></tr><tr><td>visibleChange</td><td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td><td>function(visible)</td></tr></tbody></table>',15),z=[F];function M(c,p,k,m,C,I){return r(),W("article",K,z)}var T=b(H,[["render",M]]);const Q=h({components:{IconBytedDown:v}}),q=t(" Hover me "),$=n("a",{href:"javascript:;"},"1st menu item",-1),O=n("a",{href:"javascript:;"},"2nd menu item",-1),nn=n("a",{href:"javascript:;"},"3rd menu item",-1),tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),an=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function sn(c,p,k,m,C,I){const l=o("IconBytedDown"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),d=o("demo-box");return r(),A(d,{jsfiddle:{us:"The most basic dropdown menu.",cn:"\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The most basic dropdown menu.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic Usage"},relativePath:"components/dropdown/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7Ij4xc3QgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7Ij4ybmQgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7Ij4zcmQgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkRG93biBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1kb3duJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7Ij4xc3QgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7Ij4ybmQgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7Ij4zcmQgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWREb3duIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWRvd24nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZERvd24sCiAgfSwKfSk7Cjwvc2NyaXB0Pg=="}},{default:a(()=>[s(i,null,{overlay:a(()=>[s(u,null,{default:a(()=>[s(e,null,{default:a(()=>[$]),_:1}),s(e,null,{default:a(()=>[O]),_:1}),s(e,null,{default:a(()=>[nn]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=y(()=>{},["prevent"]))},[q,s(l,{colors:["#1890ff"]})])]),_:1})]),htmlCode:a(()=>[tn]),jsVersionHtml:a(()=>[an]),_:1},8,["jsfiddle"])}var on=b(Q,[["render",sn]]);const en={},cn=n("div",{style:{textAlign:"center",background:"#f7f7f7",height:"200px",lineHeight:"200px",color:"#777"}}," Right Click on here ",-1),pn=t("1st menu item"),ln=t("2nd menu item"),un=t("3rd menu item"),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("contextmenu"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
      `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
        textAlign: `),n("span",{class:"token punctuation"},"'"),t("center"),n("span",{class:"token punctuation"},"'"),t(`,
        background: `),n("span",{class:"token punctuation"},"'"),t("#f7f7f7"),n("span",{class:"token punctuation"},"'"),t(`,
        height: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        lineHeight: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        color: `),n("span",{class:"token punctuation"},"'"),t("#777"),n("span",{class:"token punctuation"},"'"),t(`,
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Right Click on here
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("contextmenu"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
      `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
        textAlign: `),n("span",{class:"token punctuation"},"'"),t("center"),n("span",{class:"token punctuation"},"'"),t(`,
        background: `),n("span",{class:"token punctuation"},"'"),t("#f7f7f7"),n("span",{class:"token punctuation"},"'"),t(`,
        height: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        lineHeight: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        color: `),n("span",{class:"token punctuation"},"'"),t("#777"),n("span",{class:"token punctuation"},"'"),t(`,
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Right Click on here
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function gn(c,p){const k=o("a-menu-item"),m=o("a-menu"),C=o("a-dropdown"),I=o("demo-box");return r(),A(I,{jsfiddle:{us:"The default trigger mode is `hover`, you can change it to `contextMenu`.",cn:"\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The default trigger mode is <code>hover</code>, you can change it to <code>contextMenu</code>.</p>
`,order:8,title:{"zh-CN":"\u53F3\u952E\u83DC\u5355","en-US":"Context Menu"},relativePath:"components/dropdown/demo/context-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NvbnRleHRtZW51J10iPgogICAgPGRpdgogICAgICA6c3R5bGU9InsKICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLAogICAgICAgIGJhY2tncm91bmQ6ICcjZjdmN2Y3JywKICAgICAgICBoZWlnaHQ6ICcyMDBweCcsCiAgICAgICAgbGluZUhlaWdodDogJzIwMHB4JywKICAgICAgICBjb2xvcjogJyM3NzcnLAogICAgICB9IgogICAgPgogICAgICBSaWdodCBDbGljayBvbiBoZXJlCiAgICA8L2Rpdj4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4zcmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KCgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NvbnRleHRtZW51J10iPgogICAgPGRpdgogICAgICA6c3R5bGU9InsKICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLAogICAgICAgIGJhY2tncm91bmQ6ICcjZjdmN2Y3JywKICAgICAgICBoZWlnaHQ6ICcyMDBweCcsCiAgICAgICAgbGluZUhlaWdodDogJzIwMHB4JywKICAgICAgICBjb2xvcjogJyM3NzcnLAogICAgICB9IgogICAgPgogICAgICBSaWdodCBDbGljayBvbiBoZXJlCiAgICA8L2Rpdj4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4zcmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4="}},{default:a(()=>[s(C,{trigger:["contextmenu"]},{overlay:a(()=>[s(m,null,{default:a(()=>[s(k,{key:"1"},{default:a(()=>[pn]),_:1}),s(k,{key:"2"},{default:a(()=>[ln]),_:1}),s(k,{key:"3"},{default:a(()=>[un]),_:1})]),_:1})]),default:a(()=>[cn]),_:1})]),htmlCode:a(()=>[kn]),jsVersionHtml:a(()=>[dn]),_:1},8,["jsfiddle"])}var rn=b(en,[["render",gn]]);const mn=h({components:{IconBytedUser:L,IconBytedDown:v},setup(){return{handleButtonClick:k=>{console.log("click left button",k)},handleMenuClick:k=>{console.log("click",k)}}}}),B=c=>(_("data-v-3c56c04a"),c=c(),S(),c),Cn={class:"demo-dropdown-wrap"},In=t(" Dropdown "),bn=t(" 1st menu item "),An=t(" 2nd menu item "),hn=t(" 3rd item "),vn=t(" Dropdown "),yn=t(" 1st menu item "),wn=t(" 2nd menu item "),Wn=t(" 3rd item "),Zn=t(" Dropdown "),Gn=t(" 1st menu item "),fn=t(" 2nd menu item "),Bn=t(" 3rd item "),Vn=t(" 1st menu item "),Pn=t(" 2nd menu item "),_n=t(" 3rd item "),Sn=t(" Button "),Rn=B(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-dropdown-wrap"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        Button
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("22"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUser "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-user'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" MenuProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUser`),n("span",{class:"token punctuation"},","),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleButtonClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token operator"},":"),t(" Event")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click left button'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" handleMenuClick"),n("span",{class:"token operator"},":"),t(" MenuProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onClick'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token operator"},":"),t(" Event")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleButtonClick`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".demo-dropdown-wrap :deep(.ant-dropdown-button)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),Dn=B(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-dropdown-wrap"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUser")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        Button
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("22"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUser "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-user'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUser`),n("span",{class:"token punctuation"},","),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleButtonClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click left button'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleMenuClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleButtonClick`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".demo-dropdown-wrap :deep(.ant-dropdown-button)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function Yn(c,p,k,m,C,I){const l=o("IconBytedUser"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown-button"),d=o("IconBytedDown"),g=o("a-button"),w=o("a-dropdown"),Z=o("demo-box");return r(),A(Z,{jsfiddle:{us:"A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.",cn:"\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E `icon` \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E <code>icon</code> \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.</p>
`,order:5,title:{"zh-CN":"\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE","en-US":"Button with dropdown menu"},relativePath:"components/dropdown/demo/dropdown-button.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8tZHJvcGRvd24td3JhcCI+CiAgICA8YS1kcm9wZG93bi1idXR0b24gQGNsaWNrPSJoYW5kbGVCdXR0b25DbGljayI+CiAgICAgIERyb3Bkb3duCiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51IEBjbGljaz0iaGFuZGxlTWVudUNsaWNrIj4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDJuZCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgM3JkIGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uPgogICAgICBEcm9wZG93bgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgMXN0IG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjIiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2ljb24+PEljb25CeXRlZFVzZXIgLz48L3RlbXBsYXRlPgogICAgPC9hLWRyb3Bkb3duLWJ1dHRvbj4KICAgIDxhLWRyb3Bkb3duLWJ1dHRvbiBkaXNhYmxlZCBAY2xpY2s9ImhhbmRsZUJ1dHRvbkNsaWNrIj4KICAgICAgRHJvcGRvd24KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnUgQGNsaWNrPSJoYW5kbGVNZW51Q2xpY2siPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAzcmQgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1kcm9wZG93bi1idXR0b24+CiAgICA8YS1kcm9wZG93bj4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnUgQGNsaWNrPSJoYW5kbGVNZW51Q2xpY2siPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAzcmQgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIEJ1dHRvbgogICAgICAgIDxJY29uQnl0ZWREb3duIDpzaXplPSIyMiIgc3R5bGU9ImZsb2F0OiByaWdodDsgbWFyZ2luOiAwIiAvPgogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLWRyb3Bkb3duPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmltcG9ydCBJY29uQnl0ZWRVc2VyIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVzZXInOwppbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXNlciwKICAgIEljb25CeXRlZERvd24sCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGU6IEV2ZW50KSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdjbGljayBsZWZ0IGJ1dHRvbicsIGUpOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZU1lbnVDbGljazogTWVudVByb3BzWydvbkNsaWNrJ10gPSAoZTogRXZlbnQpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2NsaWNrJywgZSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlQnV0dG9uQ2xpY2ssCiAgICAgIGhhbmRsZU1lbnVDbGljaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGUgbGFuZz0ibGVzcyIgc2NvcGVkPgouZGVtby1kcm9wZG93bi13cmFwIDpkZWVwKC5hbnQtZHJvcGRvd24tYnV0dG9uKSB7CiAgbWFyZ2luLXJpZ2h0OiA4cHg7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8tZHJvcGRvd24td3JhcCI+CiAgICA8YS1kcm9wZG93bi1idXR0b24gQGNsaWNrPSJoYW5kbGVCdXR0b25DbGljayI+CiAgICAgIERyb3Bkb3duCiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51IEBjbGljaz0iaGFuZGxlTWVudUNsaWNrIj4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDJuZCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgM3JkIGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uPgogICAgICBEcm9wZG93bgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgMXN0IG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjIiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2ljb24+PEljb25CeXRlZFVzZXIgLz48L3RlbXBsYXRlPgogICAgPC9hLWRyb3Bkb3duLWJ1dHRvbj4KICAgIDxhLWRyb3Bkb3duLWJ1dHRvbiBkaXNhYmxlZCBAY2xpY2s9ImhhbmRsZUJ1dHRvbkNsaWNrIj4KICAgICAgRHJvcGRvd24KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnUgQGNsaWNrPSJoYW5kbGVNZW51Q2xpY2siPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAzcmQgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1kcm9wZG93bi1idXR0b24+CiAgICA8YS1kcm9wZG93bj4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnUgQGNsaWNrPSJoYW5kbGVNZW51Q2xpY2siPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICAgIDxJY29uQnl0ZWRVc2VyIC8+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8SWNvbkJ5dGVkVXNlciAvPgogICAgICAgICAgICAzcmQgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIEJ1dHRvbgogICAgICAgIDxJY29uQnl0ZWREb3duIDpzaXplPSIyMiIgc3R5bGU9ImZsb2F0OiByaWdodDsgbWFyZ2luOiAwIiAvPgogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLWRyb3Bkb3duPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkRG93biBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1kb3duJzsKaW1wb3J0IEljb25CeXRlZFVzZXIgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXNlcic7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXNlciwKICAgIEljb25CeXRlZERvd24sCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IGUgPT4gewogICAgICBjb25zb2xlLmxvZygnY2xpY2sgbGVmdCBidXR0b24nLCBlKTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdjbGljaycsIGUpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBoYW5kbGVCdXR0b25DbGljaywKICAgICAgaGFuZGxlTWVudUNsaWNrLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGUgbGFuZz0ibGVzcyIgc2NvcGVkPgouZGVtby1kcm9wZG93bi13cmFwIDpkZWVwKC5hbnQtZHJvcGRvd24tYnV0dG9uKSB7CiAgbWFyZ2luLXJpZ2h0OiA4cHg7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Cjwvc3R5bGU+"}},{default:a(()=>[n("div",Cn,[s(i,{onClick:c.handleButtonClick},{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(l),bn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(l),An]),_:1}),s(e,{key:"3"},{default:a(()=>[s(l),hn]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[In]),_:1},8,["onClick"]),s(i,null,{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(l),yn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(l),wn]),_:1}),s(e,{key:"3"},{default:a(()=>[s(l),Wn]),_:1})]),_:1},8,["onClick"])]),icon:a(()=>[s(l)]),default:a(()=>[vn]),_:1}),s(i,{disabled:"",onClick:c.handleButtonClick},{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(l),Gn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(l),fn]),_:1}),s(e,{key:"3"},{default:a(()=>[s(l),Bn]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[Zn]),_:1},8,["onClick"]),s(w,null,{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(l),Vn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(l),Pn]),_:1}),s(e,{key:"3"},{default:a(()=>[s(l),_n]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[s(g,null,{default:a(()=>[Sn,s(d,{size:22,style:{float:"right",margin:"0"}})]),_:1})]),_:1})])]),htmlCode:a(()=>[Rn]),jsVersionHtml:a(()=>[Dn]),_:1},8,["jsfiddle"])}var Xn=b(mn,[["render",Yn],["__scopeId","data-v-3c56c04a"]]);const Ln=h({components:{IconBytedDown:v},setup(){return{onClick:({key:p})=>{console.log(`Click on item ${p}`)}}}}),xn=t(" Hover me, Click menu item "),Jn=t("1st menu item"),jn=t("2nd menu item"),En=t("3rd menu item"),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me, Click menu item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" MenuProps"),n("span",{class:"token punctuation"},","),t(" MenuInfo "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" onClick"),n("span",{class:"token operator"},":"),t(" MenuProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onClick'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" MenuInfo")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Click on item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      onClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Un=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me, Click menu item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      key`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Click on item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      onClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Hn(c,p,k,m,C,I){const l=o("IconBytedDown"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),d=o("demo-box");return r(),A(d,{jsfiddle:{us:"An event will be triggered when you click menu items, in which you can make different operations according to item's key.",cn:"\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>An event will be triggered when you click menu items, in which you can make different operations according to item's key.</p>
`,order:4,title:{"zh-CN":"\u89E6\u53D1\u4E8B\u4EF6","en-US":"Click event"},relativePath:"components/dropdown/demo/event.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUsIENsaWNrIG1lbnUgaXRlbQogICAgICA8SWNvbkJ5dGVkRG93biA6Y29sb3JzPSJbJyMxODkwZmYnXSIgLz4KICAgIDwvYT4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudSBAY2xpY2s9Im9uQ2xpY2siPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPjFzdCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjIiPjJuZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPjNyZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmltcG9ydCB0eXBlIHsgTWVudVByb3BzLCBNZW51SW5mbyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAogIHNldHVwKCkgewogICAgY29uc3Qgb25DbGljazogTWVudVByb3BzWydvbkNsaWNrJ10gPSAoeyBrZXkgfTogTWVudUluZm8pID0+IHsKICAgICAgY29uc29sZS5sb2coYENsaWNrIG9uIGl0ZW0gJHtrZXl9YCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgb25DbGljaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUsIENsaWNrIG1lbnUgaXRlbQogICAgICA8SWNvbkJ5dGVkRG93biA6Y29sb3JzPSJbJyMxODkwZmYnXSIgLz4KICAgIDwvYT4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudSBAY2xpY2s9Im9uQ2xpY2siPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPjFzdCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjIiPjJuZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPjNyZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkRG93biBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1kb3duJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWREb3duLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3Qgb25DbGljayA9ICh7CiAgICAgIGtleSwKICAgIH0pID0+IHsKICAgICAgY29uc29sZS5sb2coYENsaWNrIG9uIGl0ZW0gJHtrZXl9YCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIG9uQ2xpY2ssCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[s(i,null,{overlay:a(()=>[s(u,{onClick:c.onClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[Jn]),_:1}),s(e,{key:"2"},{default:a(()=>[jn]),_:1}),s(e,{key:"3"},{default:a(()=>[En]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=y(()=>{},["prevent"]))},[xn,s(l,{colors:["#1890ff"]})])]),_:1})]),htmlCode:a(()=>[Nn]),jsVersionHtml:a(()=>[Un]),_:1},8,["jsfiddle"])}var Kn=b(Ln,[["render",Hn]]);const Fn=h({components:{IconBytedDown:v}}),zn=t(" Hover me "),Mn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," 1st menu item ",-1),Tn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," 2nd menu item ",-1),Qn=t("3rd menu item\uFF08disabled\uFF09"),qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t("3rd menu item\uFF08disabled\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t("3rd menu item\uFF08disabled\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function On(c,p,k,m,C,I){const l=o("IconBytedDown"),e=o("a-menu-item"),u=o("a-menu-divider"),i=o("a-menu"),d=o("a-dropdown"),g=o("demo-box");return r(),A(g,{jsfiddle:{us:"Divider and disabled menu item.",cn:"\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Divider and disabled menu item.</p>
`,order:2,title:{"zh-CN":"\u5176\u4ED6\u5143\u7D20","en-US":"Other elements"},relativePath:"components/dropdown/demo/item.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMCI+CiAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LmFsaXBheS5jb20vIj4KICAgICAgICAgICAgMXN0IG1lbnUgaXRlbQogICAgICAgICAgPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1kaXZpZGVyIC8+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyIgZGlzYWJsZWQ+M3JkIG1lbnUgaXRlbe+8iGRpc2FibGVk77yJPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW50PSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWREb3duIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWRvd24nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZERvd24sCiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMCI+CiAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LmFsaXBheS5jb20vIj4KICAgICAgICAgICAgMXN0IG1lbnUgaXRlbQogICAgICAgICAgPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1kaXZpZGVyIC8+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyIgZGlzYWJsZWQ+M3JkIG1lbnUgaXRlbe+8iGRpc2FibGVk77yJPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[s(d,null,{overlay:a(()=>[s(i,null,{default:a(()=>[s(e,{key:"0"},{default:a(()=>[Mn]),_:1}),s(e,{key:"1"},{default:a(()=>[Tn]),_:1}),s(u),s(e,{key:"3",disabled:""},{default:a(()=>[Qn]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=y(()=>{},["prevent"]))},[zn,s(l,{colors:["#1890ff"]})])]),_:1})]),htmlCode:a(()=>[qn]),jsVersionHtml:a(()=>[$n]),_:1},8,["jsfiddle"])}var nt=b(Fn,[["render",On]]);const tt=h({components:{IconBytedDown:v},setup(){const c=R(!1);return{visible:c,handleMenuClick:k=>{k.key==="3"&&(c.value=!1)}}}}),at=t(" Hover me "),st=t("Clicking me will not close the menu."),ot=t("Clicking me will not close the menu also."),et=t("Clicking me will close the menu"),ct=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu also."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will close the menu"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" MenuProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MenuInfo"),t(),n("span",{class:"token punctuation"},"{"),t(`
  key`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  keyPath`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  item`),n("span",{class:"token operator"},":"),t(" any"),n("span",{class:"token punctuation"},";"),t(`
  domEvent`),n("span",{class:"token operator"},":"),t(" MouseEvent"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" handleMenuClick"),n("span",{class:"token operator"},":"),t(" MenuProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onClick'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token operator"},":"),t(" MenuInfo")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),pt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu also."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will close the menu"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleMenuClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function lt(c,p,k,m,C,I){const l=o("IconBytedDown"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),d=o("demo-box");return r(),A(d,{jsfiddle:{us:"The default is to close the menu when you click on menu items, this feature can be turned off.",cn:"\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The default is to close the menu when you click on menu items, this feature can be turned off.</p>
`,order:7,title:{"zh-CN":"\u83DC\u5355\u9690\u85CF\u65B9\u5F0F","en-US":"The way of hiding menu."},relativePath:"components/dropdown/demo/overlay-visible.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSI+CiAgICA8YSBjbGFzcz0iYW50LWRyb3Bkb3duLWxpbmsiIEBjbGljay5wcmV2ZW50PgogICAgICBIb3ZlciBtZQogICAgICA8SWNvbkJ5dGVkRG93biA6Y29sb3JzPSJbJyMxODkwZmYnXSIgLz4KICAgIDwvYT4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+Q2xpY2tpbmcgbWUgd2lsbCBub3QgY2xvc2UgdGhlIG1lbnUuPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj5DbGlja2luZyBtZSB3aWxsIG5vdCBjbG9zZSB0aGUgbWVudSBhbHNvLjwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+Q2xpY2tpbmcgbWUgd2lsbCBjbG9zZSB0aGUgbWVudTwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWREb3duIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWRvd24nOwppbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmludGVyZmFjZSBNZW51SW5mbyB7CiAga2V5OiBzdHJpbmc7CiAga2V5UGF0aDogc3RyaW5nW107CiAgaXRlbTogYW55OwogIGRvbUV2ZW50OiBNb3VzZUV2ZW50Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBoYW5kbGVNZW51Q2xpY2s6IE1lbnVQcm9wc1snb25DbGljayddID0gKGU6IE1lbnVJbmZvKSA9PiB7CiAgICAgIGlmIChlLmtleSA9PT0gJzMnKSB7CiAgICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgICB9CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmlzaWJsZSwKICAgICAgaGFuZGxlTWVudUNsaWNrLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSI+CiAgICA8YSBjbGFzcz0iYW50LWRyb3Bkb3duLWxpbmsiIEBjbGljay5wcmV2ZW50PgogICAgICBIb3ZlciBtZQogICAgICA8SWNvbkJ5dGVkRG93biA6Y29sb3JzPSJbJyMxODkwZmYnXSIgLz4KICAgIDwvYT4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+Q2xpY2tpbmcgbWUgd2lsbCBub3QgY2xvc2UgdGhlIG1lbnUuPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj5DbGlja2luZyBtZSB3aWxsIG5vdCBjbG9zZSB0aGUgbWVudSBhbHNvLjwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+Q2xpY2tpbmcgbWUgd2lsbCBjbG9zZSB0aGUgbWVudTwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpOwoKICAgIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IGUgPT4gewogICAgICBpZiAoZS5rZXkgPT09ICczJykgewogICAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgICAgfQogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2aXNpYmxlLAogICAgICBoYW5kbGVNZW51Q2xpY2ssCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[s(i,{visible:c.visible,"onUpdate:visible":p[1]||(p[1]=g=>c.visible=g)},{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[st]),_:1}),s(e,{key:"2"},{default:a(()=>[ot]),_:1}),s(e,{key:"3"},{default:a(()=>[et]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=y(()=>{},["prevent"]))},[at,s(l,{colors:["#1890ff"]})])]),_:1},8,["visible"])]),htmlCode:a(()=>[ct]),jsVersionHtml:a(()=>[pt]),_:1},8,["jsfiddle"])}var ut=b(tt,[["render",lt]]);const kt=h({setup(){return{placements:["bottomLeft","bottom","bottomRight","topLeft","top","topRight"]}}}),it={id:"components-dropdown-demo-placement"},dt=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," 1st menu item ",-1),gt=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," 2nd menu item ",-1),rt=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"}," 3rd menu item ",-1),mt={key:0},Ct=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-dropdown-demo-placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(placement, index) in placements"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("{{ placement }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                1st menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                2nd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                3rd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index === 2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" DropdownProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      placements`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token string"},"'bottomLeft'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'bottomRight'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'topLeft'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'topRight'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token keyword"},"as"),t(" DropdownProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'placement'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#components-dropdown-demo-placement .ant-btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),It=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-dropdown-demo-placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(placement, index) in placements"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("{{ placement }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                1st menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                2nd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                3rd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index === 2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      placements`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'bottomLeft'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'bottomRight'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'topLeft'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'topRight'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#components-dropdown-demo-placement .ant-btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function bt(c,p,k,m,C,I){const l=o("a-button"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),d=o("demo-box");return r(),A(d,{jsfiddle:{us:"Support 6 placements.",cn:"\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Support 6 placements.</p>
`,order:1,title:{"zh-CN":"\u5F39\u51FA\u4F4D\u7F6E","en-US":"Placement"},relativePath:"components/dropdown/demo/placement.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtZHJvcGRvd24tZGVtby1wbGFjZW1lbnQiPgogICAgPHRlbXBsYXRlIHYtZm9yPSIocGxhY2VtZW50LCBpbmRleCkgaW4gcGxhY2VtZW50cyIgOmtleT0icGxhY2VtZW50Ij4KICAgICAgPGEtZHJvcGRvd24gOnBsYWNlbWVudD0icGxhY2VtZW50Ij4KICAgICAgICA8YS1idXR0b24+e3sgcGxhY2VtZW50IH19PC9hLWJ1dHRvbj4KICAgICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgICA8YS1tZW51PgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+CiAgICAgICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50bWFsbC5jb20vIj4KICAgICAgICAgICAgICAgIDNyZCBtZW51IGl0ZW0KICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8L2EtbWVudT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZHJvcGRvd24+CiAgICAgIDxiciB2LWlmPSJpbmRleCA9PT0gMiIgLz4KICAgIDwvdGVtcGxhdGU+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IERyb3Bkb3duUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBwbGFjZW1lbnRzOiBbCiAgICAgICAgJ2JvdHRvbUxlZnQnLAogICAgICAgICdib3R0b20nLAogICAgICAgICdib3R0b21SaWdodCcsCiAgICAgICAgJ3RvcExlZnQnLAogICAgICAgICd0b3AnLAogICAgICAgICd0b3BSaWdodCcsCiAgICAgIF0gYXMgRHJvcGRvd25Qcm9wc1sncGxhY2VtZW50J11bXSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+CiNjb21wb25lbnRzLWRyb3Bkb3duLWRlbW8tcGxhY2VtZW50IC5hbnQtYnRuIHsKICBtYXJnaW4tcmlnaHQ6IDhweDsKICBtYXJnaW4tYm90dG9tOiA4cHg7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtZHJvcGRvd24tZGVtby1wbGFjZW1lbnQiPgogICAgPHRlbXBsYXRlIHYtZm9yPSIocGxhY2VtZW50LCBpbmRleCkgaW4gcGxhY2VtZW50cyIgOmtleT0icGxhY2VtZW50Ij4KICAgICAgPGEtZHJvcGRvd24gOnBsYWNlbWVudD0icGxhY2VtZW50Ij4KICAgICAgICA8YS1idXR0b24+e3sgcGxhY2VtZW50IH19PC9hLWJ1dHRvbj4KICAgICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgICA8YS1tZW51PgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+CiAgICAgICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50bWFsbC5jb20vIj4KICAgICAgICAgICAgICAgIDNyZCBtZW51IGl0ZW0KICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8L2EtbWVudT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZHJvcGRvd24+CiAgICAgIDxiciB2LWlmPSJpbmRleCA9PT0gMiIgLz4KICAgIDwvdGVtcGxhdGU+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBwbGFjZW1lbnRzOiBbJ2JvdHRvbUxlZnQnLCAnYm90dG9tJywgJ2JvdHRvbVJpZ2h0JywgJ3RvcExlZnQnLCAndG9wJywgJ3RvcFJpZ2h0J10sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+CjxzdHlsZT4KI2NvbXBvbmVudHMtZHJvcGRvd24tZGVtby1wbGFjZW1lbnQgLmFudC1idG4gewogIG1hcmdpbi1yaWdodDogOHB4OwogIG1hcmdpbi1ib3R0b206IDhweDsKfQo8L3N0eWxlPg=="}},{default:a(()=>[n("div",it,[(r(!0),W(f,null,D(c.placements,(g,w)=>(r(),W(f,{key:g},[s(i,{placement:g},{overlay:a(()=>[s(u,null,{default:a(()=>[s(e,null,{default:a(()=>[dt]),_:1}),s(e,null,{default:a(()=>[gt]),_:1}),s(e,null,{default:a(()=>[rt]),_:1})]),_:1})]),default:a(()=>[s(l,null,{default:a(()=>[t(Y(g),1)]),_:2},1024)]),_:2},1032,["placement"]),w===2?(r(),W("br",mt)):X("",!0)],64))),128))])]),htmlCode:a(()=>[Ct]),jsVersionHtml:a(()=>[It]),_:1},8,["jsfiddle"])}var At=b(kt,[["render",bt]]);const ht=h({components:{IconBytedDown:v}}),vt=t(" Cascading menu "),yt=t("1st menu item"),wt=t("2nd menu item"),Wt=t("3rd menu item"),Zt=t("4th menu item"),Gt=t("5d menu item"),ft=t("6th menu item"),Bt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Cascading menu
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("4th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled sub menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("5d menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("6th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Vt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Cascading menu
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("4th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled sub menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("5d menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("6th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Pt(c,p,k,m,C,I){const l=o("IconBytedDown"),e=o("a-menu-item"),u=o("a-sub-menu"),i=o("a-menu"),d=o("a-dropdown"),g=o("demo-box");return r(),A(g,{jsfiddle:{us:"The menu has multiple levels.",cn:"\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The menu has multiple levels.</p>
`,order:6,title:{"zh-CN":"\u591A\u7EA7\u83DC\u5355","en-US":"Cascading menu"},relativePath:"components/dropdown/demo/sub-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2FzY2FkaW5nIG1lbnUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtPjFzdCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbT4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1zdWItbWVudSBrZXk9InN1YjEiIHRpdGxlPSJzdWIgbWVudSI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+M3JkIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+NHRoIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLXN1Yi1tZW51PgogICAgICAgIDxhLXN1Yi1tZW51IGtleT0ic3ViMiIgdGl0bGU9ImRpc2FibGVkIHN1YiBtZW51IiBkaXNhYmxlZD4KICAgICAgICAgIDxhLW1lbnUtaXRlbT41ZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPjZ0aCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1zdWItbWVudT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWREb3duIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWRvd24nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZERvd24sCiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2FzY2FkaW5nIG1lbnUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtPjFzdCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbT4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1zdWItbWVudSBrZXk9InN1YjEiIHRpdGxlPSJzdWIgbWVudSI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+M3JkIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+NHRoIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLXN1Yi1tZW51PgogICAgICAgIDxhLXN1Yi1tZW51IGtleT0ic3ViMiIgdGl0bGU9ImRpc2FibGVkIHN1YiBtZW51IiBkaXNhYmxlZD4KICAgICAgICAgIDxhLW1lbnUtaXRlbT41ZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPjZ0aCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1zdWItbWVudT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[s(d,null,{overlay:a(()=>[s(i,null,{default:a(()=>[s(e,null,{default:a(()=>[yt]),_:1}),s(e,null,{default:a(()=>[wt]),_:1}),s(u,{key:"sub1",title:"sub menu"},{default:a(()=>[s(e,null,{default:a(()=>[Wt]),_:1}),s(e,null,{default:a(()=>[Zt]),_:1})]),_:1}),s(u,{key:"sub2",title:"disabled sub menu",disabled:""},{default:a(()=>[s(e,null,{default:a(()=>[Gt]),_:1}),s(e,null,{default:a(()=>[ft]),_:1})]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=y(()=>{},["prevent"]))},[vt,s(l,{colors:["#1890ff"]})])]),_:1})]),htmlCode:a(()=>[Bt]),jsVersionHtml:a(()=>[Vt]),_:1},8,["jsfiddle"])}var _t=b(ht,[["render",Pt]]);const St=h({components:{IconBytedDown:v}}),Rt=t(" Click me "),Dt=n("a",{href:"http://www.alipay.com/"},"1st menu item",-1),Yt=n("a",{href:"http://www.taobao.com/"},"2nd menu item",-1),Xt=t("3rd menu item"),Lt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("click"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Click me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),xt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("click"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Click me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedDown")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1890ff"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedDown "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Jt(c,p,k,m,C,I){const l=o("IconBytedDown"),e=o("a-menu-item"),u=o("a-menu-divider"),i=o("a-menu"),d=o("a-dropdown"),g=o("demo-box");return r(),A(g,{jsfiddle:{us:"The default trigger mode is `hover`, you can change it to `click`.",cn:"\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The default trigger mode is <code>hover</code>, you can change it to <code>click</code>.</p>
`,order:3,title:{"zh-CN":"\u89E6\u53D1\u65B9\u5F0F","en-US":"Trigger mode"},relativePath:"components/dropdown/demo/trigger.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NsaWNrJ10iPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2xpY2sgbWUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMCI+CiAgICAgICAgICA8YSBocmVmPSJodHRwOi8vd3d3LmFsaXBheS5jb20vIj4xc3QgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICA8YSBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj4ybmQgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1kaXZpZGVyIC8+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+M3JkIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkRG93biBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1kb3duJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWREb3duLAogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NsaWNrJ10iPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2xpY2sgbWUKICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWycjMTg5MGZmJ10iIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnU+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMCI+CiAgICAgICAgICA8YSBocmVmPSJodHRwOi8vd3d3LmFsaXBheS5jb20vIj4xc3QgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+CiAgICAgICAgICA8YSBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj4ybmQgbWVudSBpdGVtPC9hPgogICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1kaXZpZGVyIC8+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+M3JkIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWREb3duIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWRvd24nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZERvd24sCiAgfSwKfSk7Cjwvc2NyaXB0Pg=="}},{default:a(()=>[s(d,{trigger:["click"]},{overlay:a(()=>[s(i,null,{default:a(()=>[s(e,{key:"0"},{default:a(()=>[Dt]),_:1}),s(e,{key:"1"},{default:a(()=>[Yt]),_:1}),s(u),s(e,{key:"3"},{default:a(()=>[Xt]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:p[0]||(p[0]=y(()=>{},["prevent"]))},[Rt,s(l,{colors:["#1890ff"]})])]),_:1})]),htmlCode:a(()=>[Lt]),jsVersionHtml:a(()=>[xt]),_:1},8,["jsfiddle"])}var jt=b(St,[["render",Jt]]);const Et=h({CN:T,US:U,components:{Basic:on,ContextMenu:rn,DropdownButton:Xn,Event:Kn,Item:nt,OverlayVisible:ut,Placement:At,SubMenu:_t,Trigger:jt}});function Nt(c,p,k,m,C,I){const l=o("basic"),e=o("context-menu"),u=o("dropdown-button"),i=o("event"),d=o("item"),g=o("overlay-visible"),w=o("placement"),Z=o("sub-menu"),V=o("trigger"),P=o("demo-sort");return r(),A(P,null,{default:a(()=>[s(l),s(e),s(u),s(i),s(d),s(g),s(w),s(Z),s(V)]),_:1})}var Ft=b(Et,[["render",Nt]]);export{Ft as default};

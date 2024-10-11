import{E as e,J as n,cb as a}from"./vendor.0f0e4632.js";import{_ as t}from"./index.f6b32fa6.js";const o={pageData:{title:"Upgrade preparation",description:"",frontmatter:{},headers:[{level:2,title:"Upgrade preparation",slug:"Upgrade-preparation",content:""},{level:2,title:"4.0 What are the incompatible changes",slug:"_4-0-What-are-the-incompatible-changes",content:"Design specification adjustment"},{level:3,title:"Design specification adjustment",slug:"Design-specification-adjustment",content:""},{level:3,title:"New API",slug:"New-API",content:""},{level:2,title:"Encounter problems",slug:"Encounter-problems",content:"V3 has made a lot of detailed improvements and refactorings. We have collected all known incompatible changes and related effects as much as possible, but there may still be some scenarios that we have not considered. If you encounter problems during the upgrade process, please go to [GitHub issues](https://vuecomponent.github.io/issue-helper/) for feedback. We will respond as soon as possible and improve this document accordingly."}],relativePath:"site/src/vueDocs/migration-v4.en-US.md",content:"This document will help you upgrade from @Fe6/water-pro `2.x` version to @Fe6/water-pro `4.x` version.\n\nThe 3.x version is a compatible version developed for compatibility with Vue 3. It does not bring many new features, and most of the API changes are only for better compatibility with Vue 3. The 4.x version has greatly improved performance, ease of use, and functions. After the 4.x version is stable, we will archive the 3.x version. It is recommended that you upgrade to the 4.x version as soon as possible. Although there are many changes, they are basically compatible. You can upgrade gradually according to the warnings given by the console.\n\n## Upgrade preparation\n\n1. Please upgrade to the latest version of 3.x first, and remove/modify related APIs according to the warning information on the console. It is recommended to check the historical Change Log of 2.x first, which will not be detailed here.\n2. Upgrade the project to Vue 3.2 and above.\n\n## 4.0 What are the incompatible changes\n\n### Design specification adjustment\n\n- The font color is changed from `rgba(0, 0, 0, 0.65)` to `rgba(0, 0, 0, 0.85)`.\n- The selected color of some components is uniformly changed to `@blue-1: #E6F7FF`, and the corresponding color of `hover` is changed to `@gray-2: #FAFAFA`.\n- Error color value adjustment, changed from `@red-5: #F5222D` to `@red-5: #FF4D4F`.\n- DatePicker interactive redo, the panel and the input box are separated, the range selection can now select the start and end time separately.\n\n#### Removed API\n\n- Removed the `lazy` attribute of Transfer, it does not have a real optimization effect.\n- Removed the `combobox` mode of Select, please use `AutoComplete` instead.\n- Deprecated Button.Group, please use `Space` instead.\n- `DatePicker` `TimePicker` `Calendar` remove momentjs, please use dayjs instead\n- `Tree`, `TreeSelect`\n  - Deprecated the use of `a-tree-node` and `a-tree-select-node` to construct nodes, use the `treeData` property instead\n  - Deprecated `scopedSlots` `slots` custom rendering node, use `v-slot:title` instead\n  - Deprecated `replaceFields`, use `fieldNames` instead\n- `Table`\n  - Removed the `rowSelection.hideDefaultSelections` property of Table, please use `SELECTION_ALL` and `SELECTION_INVERT` in `rowSelection.selections` instead, [custom options](/components/table/#components-table-demo- row-selection-custom).\n  - Removed Column slots and replaced them with `v-slot:headerCell` `v-slot:headerCell` `v-slot:bodyCell` `v-slot:customFilterDropdown` `v-slot:customFilterIcon`\n- `DatePicker`\n  - \u4E0D\u518D\u652F\u6301 **\u9009\u62E9\u6846\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3(slot default)**\n- `Typography`\n  - **_styleReset_** field is removed, and **_resetable_** is used uniformly for style reset\n- `Menu`\n  - **selectedColor** Remove default\n  - **selectedBgColor** Remove default\n  - **selectedBorderColor** Remove default\n- `Button`\n  - remove `type=&#39;danger&#39;`\uFF0C Danger becomes a button attribute rather than a button type\n- `Radio`\n  - `RadioGroup` Before the type attribute in, you define whether it is in the form of a button. Change it to `option-type`\n  - `RadioGroup` Removed **defaultValue**\n- `Scrollbar`\n  - `noresize` and `tag` remove\n- `FormPro`\n  - remove props.baseRowStyle\n  - remove props.baseColProps\n  - remove props.compact\n  - remove props.autoAdvancedLine\n  - schema \u4E2D\n    - remove show\n    - isAdvanced -&gt; 4.0 At first, you can use isadvanced = true for folding judgment. Isadvanced = true is hidden by default\n  - In the dynamicrules method, the detection and writing of value in the validator have changed\n- `TablePro`\n  - Discard basiccolumn format\n  - Uploadcard can perform data binding callback without specifying the &#39;changeEvent: &#39;changeUpload&#39;&#39; event in the schema\n  - Abolish formschema Colprops field, please use formpro prop. Instead of labelcol, if you want to customize the label and wrapper width of each field separately, please use `schema.itemProps`\n  - Abolish formschema Rendercomponentcontent support, please use formschema End or formschema suffix\n  - remove BasicColumn.format\n\n#### Component refactoring\n\nIn order to make the components have better performance and maintainability, we have used TS + Composition Api to refactor almost all components. There are still very few components that have not been refactored. Such components will be refactored gradually in the future, and the rest There will be no destructive updates to the components, so there is no need to worry about future upgrade costs.\n\nMajor updates after the 4.0 version refactoring include `Tree` `TreeSelect` `DatePicker` `TimePicker` `Calendar` `Form` `Table`, other components also have corresponding function updates, you can check ChangeLog for further details.\n\n- `@fe6/icon-vue` instead of `@ant-design/icons-vue`\n- `Tree` `TreeSelect`\n\n  - Added virtual scrolling, discarded using `a-tree-node` `a-tree-select-node` to build nodes, using `treeData` property instead to improve component performance\n  - Deprecated `scopedSlots` `slots` custom rendering node, and replace it with `v-slot:title` to improve ease of use, avoid slot configuration expansion, and also avoid slot conflicts\n\n- `AutoComplete`\n\n  - no longer support `optionLabelProp`. Please set Option `value` directly.\n  - options definition align with Select. Please use `options` instead of `dataSource`.\n\n- `Table`\n\n  - Removed the `rowSelection.hideDefaultSelections` property of Table, please use `SELECTION_ALL` and `SELECTION_INVERT` in `rowSelection.selections` instead, [custom options](/components/table/#components-table-demo- row-selection-custom).\n  &lt;!-- - Removed Column slots and replaced them with `v-slot:headerCell` `v-slot:headerCell` `v-slot:bodyCell` `v-slot:customFilterDropdown` `v-slot:customFilterIcon` to improve ease of use , To avoid slot configuration expansion, but also to avoid the problem of slot conflicts --&gt;\n  - Added expandFixed to control whether the expanded icon is fixed\n  - Added the showSorterTooltip header whether to display the tooltip for the next sort.\n  - Added sticky for setting sticky head and scroll bar\n  - Added rowExpandable to set whether to allow row expansion\n  - New slot headerCell is used to personalize the header cell\n  - Added slot bodyCell for personalized cell\n  - New slot customFilterDropdown is used to customize the filter menu, which needs to be used with `column.customFilterDropdown`\n  - Added slot customFilterIcon for custom filter icons\n  - New slot emptyText is used to customize the display content of empty data\n  - Added slot summary for the summary column\n\n- `DatePicker` `TimePicker` `Calendar`\n\n  - By default, a more lightweight dayjs is used to replace momentjs. If your project is too large and uses a lot of momentjs methods, you can refer to the document [Custom Time Library](/docs/vue/replace-date-cn), Replace with momentjs.\n  - UI interaction adjustment, its antd 4.x interaction specification\n\n- `Form` The main goal of this update is to improve performance. If you don&#39;t have custom form controls, you can almost ignore this part\n\n  - Since version 3.0, Form.Item no longer hijacks child elements, but automatically checks through provider/inject dependency injection. This method can improve component performance, and there is no limit to the number of child elements. The same is true for child elements. It can be a high-level component that is further encapsulated.\n\n    You can reference [Customized Form Controls](#components-form-demo-customized-form-controls)\n\n    But it also has some disadvantages:\n\n    1. If the custom component wants Form.Item to be verified and displayed, you need to inject `const {id, onFieldChange, onFieldBlur} = useFormItemContext()` and call the corresponding method.\n\n    2. A Form.Item can only collect the data of one form item. If there are multiple form items, it will cause collection confusion, for example,\n\n    ```html\n    &lt;a-form-item&gt;\n      &lt;a-input name=&quot;a&quot;&gt;&lt;/a-input&gt;\n      &lt;a-input name=&quot;b&quot;&gt;&lt;/a-input&gt;\n    &lt;/a-form-item&gt;\n    ```\n\n    As above Form.Item does not know whether to collect `name=&quot;a&quot;` or `name=`b``, you can solve this kind of problem in the following two ways:\n\n    The first is to use multiple `a-form-item`:\n\n    ```html\n    &lt;a-form-item&gt;\n      &lt;a-input name=&quot;a&quot;&gt;&lt;/a-input&gt;\n      &lt;a-form-item&gt;&lt;a-input name=&quot;b&quot;&gt;&lt;/a-input&gt;&lt;/a-form-item&gt;\n    &lt;/a-form-item&gt;\n    ```\n\n    The second way is to wrap it with a custom component and call `useFormItemContext` in the custom component, It is equivalent to merging multiple form items into one.\n\n    ```html\n    &lt;script&gt;\n      // custom component\n      import { Form } from &#39;@fe6/watr-pro&#39;;\n      export default {\n        name: &#39;custom-name&#39;,\n        setup() {\n          const formItemContext = Form.useFormItemContext();\n        },\n      };\n    &lt;/script&gt;\n    ```\n\n    ```html\n    &lt;a-form-item&gt;\n      &lt;custom-com&gt;\n        &lt;a-input name=&quot;a&quot;&gt;&lt;/a-input&gt;\n        &lt;a-input name=&quot;b&quot;&gt;&lt;/a-input&gt;\n      &lt;/custom-com&gt;\n    &lt;/a-form-item&gt;\n    ```\n\n    Third, the component library provides an `a-form-item-rest` component, which will prevent data collection. You can put form items that do not need to be collected and verified into this component. It is the same as the first This method is very similar, but it does not generate additional dom nodes.\n\n    ```html\n    &lt;a-form-item&gt;\n      &lt;a-input name=&quot;a&quot;&gt;&lt;/a-input&gt;\n      &lt;a-form-item-rest&gt;&lt;a-input name=&quot;b&quot;&gt;&lt;/a-input&gt;&lt;/a-form-item-rest&gt;\n    &lt;/a-form-item&gt;\n    ```\n\n### New API\n\n- `Space`\n  - `fontsize` font size setting\n  - `size` Field number only **_Array_** will take effect\n- `select` and `selectapi`\n  - `fieldnames` data field name settings\n  - `loadingplaceholder` loading copy\n- `Typography`\n  - Is&#39; blockable &#39;display: block\n- `ColorPicker`\n  - `mode` Different modes and styles can be set\n  - `placeholder` is slot , custom placeholder style\n- `FormPro`\n  - Add props.advancedAll\n  - Add props.inlineCol\n  - Add props.inlineRow\n  - Add props.inlineActionCol\n- `ModalUser`\n  - Add props.beforeParams\n  - Add props.showRoleName\n  - Add props.showAvatar\n  - Add props.userLabel\n  - Add props.departmentLabel\n  - Add props.fieldNames\n  - Add props.height\n  - Add props.repeatableCheck\n  - Add props.loadApi\n  - Add props.loadApiParams\n  - Add props.virtual\n- `BasicArrow`\n  - Add props.size\n  - Add props.colors\n- `TablePro`\n  - Add props.expandIcon\n- `Spin`\n  - Add props.color\u3002\n- `UploadName`\n  - Add props.mergeChangeDatas\n- `Image`\n  - Add props.fit\n\n## Encounter problems\n\nV3 has made a lot of detailed improvements and refactorings. We have collected all known incompatible changes and related effects as much as possible, but there may still be some scenarios that we have not considered. If you encounter problems during the upgrade process, please go to [GitHub issues](https://vuecomponent.github.io/issue-helper/) for feedback. We will respond as soon as possible and improve this document accordingly.\n",html:`<p>This document will help you upgrade from @Fe6/water-pro <code>2.x</code> version to @Fe6/water-pro <code>4.x</code> version.</p>
<p>The 3.x version is a compatible version developed for compatibility with Vue 3. It does not bring many new features, and most of the API changes are only for better compatibility with Vue 3. The 4.x version has greatly improved performance, ease of use, and functions. After the 4.x version is stable, we will archive the 3.x version. It is recommended that you upgrade to the 4.x version as soon as possible. Although there are many changes, they are basically compatible. You can upgrade gradually according to the warnings given by the console.</p>
<h2 id="Upgrade-preparation">Upgrade preparation <a class="header-anchor" href="#Upgrade-preparation">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ol>
<li>Please upgrade to the latest version of 3.x first, and remove/modify related APIs according to the warning information on the console. It is recommended to check the historical Change Log of 2.x first, which will not be detailed here.</li>
<li>Upgrade the project to Vue 3.2 and above.</li>
</ol>
<h2 id="_4-0-What-are-the-incompatible-changes">4.0 What are the incompatible changes <a class="header-anchor" href="#_4-0-What-are-the-incompatible-changes">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Design-specification-adjustment">Design specification adjustment <a class="header-anchor" href="#Design-specification-adjustment">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li>The font color is changed from <code>rgba(0, 0, 0, 0.65)</code> to <code>rgba(0, 0, 0, 0.85)</code>.</li>
<li>The selected color of some components is uniformly changed to <code>@blue-1: #E6F7FF</code>, and the corresponding color of <code>hover</code> is changed to <code>@gray-2: #FAFAFA</code>.</li>
<li>Error color value adjustment, changed from <code>@red-5: #F5222D</code> to <code>@red-5: #FF4D4F</code>.</li>
<li>DatePicker interactive redo, the panel and the input box are separated, the range selection can now select the start and end time separately.</li>
</ul>
<h4 id="Removed-API">Removed API <a class="header-anchor" href="#Removed-API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<ul>
<li>Removed the <code>lazy</code> attribute of Transfer, it does not have a real optimization effect.</li>
<li>Removed the <code>combobox</code> mode of Select, please use <code>AutoComplete</code> instead.</li>
<li>Deprecated Button.Group, please use <code>Space</code> instead.</li>
<li><code>DatePicker</code> <code>TimePicker</code> <code>Calendar</code> remove momentjs, please use dayjs instead</li>
<li><code>Tree</code>, <code>TreeSelect</code>
<ul>
<li>Deprecated the use of <code>a-tree-node</code> and <code>a-tree-select-node</code> to construct nodes, use the <code>treeData</code> property instead</li>
<li>Deprecated <code>scopedSlots</code> <code>slots</code> custom rendering node, use <code>v-slot:title</code> instead</li>
<li>Deprecated <code>replaceFields</code>, use <code>fieldNames</code> instead</li>
</ul>
</li>
<li><code>Table</code>
<ul>
<li>Removed the <code>rowSelection.hideDefaultSelections</code> property of Table, please use <code>SELECTION_ALL</code> and <code>SELECTION_INVERT</code> in <code>rowSelection.selections</code> instead, [custom options](/components/table/#components-table-demo- row-selection-custom).</li>
<li>Removed Column slots and replaced them with <code>v-slot:headerCell</code> <code>v-slot:headerCell</code> <code>v-slot:bodyCell</code> <code>v-slot:customFilterDropdown</code> <code>v-slot:customFilterIcon</code></li>
</ul>
</li>
<li><code>DatePicker</code>
<ul>
<li>\u4E0D\u518D\u652F\u6301 <strong>\u9009\u62E9\u6846\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3(slot default)</strong></li>
</ul>
</li>
<li><code>Typography</code>
<ul>
<li><strong><em>styleReset</em></strong> field is removed, and <strong><em>resetable</em></strong> is used uniformly for style reset</li>
</ul>
</li>
<li><code>Menu</code>
<ul>
<li><strong>selectedColor</strong> Remove default</li>
<li><strong>selectedBgColor</strong> Remove default</li>
<li><strong>selectedBorderColor</strong> Remove default</li>
</ul>
</li>
<li><code>Button</code>
<ul>
<li>remove <code>type='danger'</code>\uFF0C Danger becomes a button attribute rather than a button type</li>
</ul>
</li>
<li><code>Radio</code>
<ul>
<li><code>RadioGroup</code> Before the type attribute in, you define whether it is in the form of a button. Change it to <code>option-type</code></li>
<li><code>RadioGroup</code> Removed <strong>defaultValue</strong></li>
</ul>
</li>
<li><code>Scrollbar</code>
<ul>
<li><code>noresize</code> and <code>tag</code> remove</li>
</ul>
</li>
<li><code>FormPro</code>
<ul>
<li>remove props.baseRowStyle</li>
<li>remove props.baseColProps</li>
<li>remove props.compact</li>
<li>remove props.autoAdvancedLine</li>
<li>schema \u4E2D
<ul>
<li>remove show</li>
<li>isAdvanced -&gt; 4.0 At first, you can use isadvanced = true for folding judgment. Isadvanced = true is hidden by default</li>
</ul>
</li>
<li>In the dynamicrules method, the detection and writing of value in the validator have changed</li>
</ul>
</li>
<li><code>TablePro</code>
<ul>
<li>Discard basiccolumn format</li>
<li>Uploadcard can perform data binding callback without specifying the 'changeEvent: 'changeUpload'' event in the schema</li>
<li>Abolish formschema Colprops field, please use formpro prop. Instead of labelcol, if you want to customize the label and wrapper width of each field separately, please use <code>schema.itemProps</code></li>
<li>Abolish formschema Rendercomponentcontent support, please use formschema End or formschema suffix</li>
<li>remove BasicColumn.format</li>
</ul>
</li>
</ul>
<h4 id="Component-refactoring">Component refactoring <a class="header-anchor" href="#Component-refactoring">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<p>In order to make the components have better performance and maintainability, we have used TS + Composition Api to refactor almost all components. There are still very few components that have not been refactored. Such components will be refactored gradually in the future, and the rest There will be no destructive updates to the components, so there is no need to worry about future upgrade costs.</p>
<p>Major updates after the 4.0 version refactoring include <code>Tree</code> <code>TreeSelect</code> <code>DatePicker</code> <code>TimePicker</code> <code>Calendar</code> <code>Form</code> <code>Table</code>, other components also have corresponding function updates, you can check ChangeLog for further details.</p>
<ul>
<li>
<p><code>@fe6/icon-vue</code> instead of <code>@ant-design/icons-vue</code></p>
</li>
<li>
<p><code>Tree</code> <code>TreeSelect</code></p>
<ul>
<li>Added virtual scrolling, discarded using <code>a-tree-node</code> <code>a-tree-select-node</code> to build nodes, using <code>treeData</code> property instead to improve component performance</li>
<li>Deprecated <code>scopedSlots</code> <code>slots</code> custom rendering node, and replace it with <code>v-slot:title</code> to improve ease of use, avoid slot configuration expansion, and also avoid slot conflicts</li>
</ul>
</li>
<li>
<p><code>AutoComplete</code></p>
<ul>
<li>no longer support <code>optionLabelProp</code>. Please set Option <code>value</code> directly.</li>
<li>options definition align with Select. Please use <code>options</code> instead of <code>dataSource</code>.</li>
</ul>
</li>
<li>
<p><code>Table</code></p>
<ul>
<li>Removed the <code>rowSelection.hideDefaultSelections</code> property of Table, please use <code>SELECTION_ALL</code> and <code>SELECTION_INVERT</code> in <code>rowSelection.selections</code> instead, [custom options](/components/table/#components-table-demo- row-selection-custom).
<!-- - Removed Column slots and replaced them with \`v-slot:headerCell\` \`v-slot:headerCell\` \`v-slot:bodyCell\` \`v-slot:customFilterDropdown\` \`v-slot:customFilterIcon\` to improve ease of use , To avoid slot configuration expansion, but also to avoid the problem of slot conflicts --></li>
<li>Added expandFixed to control whether the expanded icon is fixed</li>
<li>Added the showSorterTooltip header whether to display the tooltip for the next sort.</li>
<li>Added sticky for setting sticky head and scroll bar</li>
<li>Added rowExpandable to set whether to allow row expansion</li>
<li>New slot headerCell is used to personalize the header cell</li>
<li>Added slot bodyCell for personalized cell</li>
<li>New slot customFilterDropdown is used to customize the filter menu, which needs to be used with <code>column.customFilterDropdown</code></li>
<li>Added slot customFilterIcon for custom filter icons</li>
<li>New slot emptyText is used to customize the display content of empty data</li>
<li>Added slot summary for the summary column</li>
</ul>
</li>
<li>
<p><code>DatePicker</code> <code>TimePicker</code> <code>Calendar</code></p>
<ul>
<li>By default, a more lightweight dayjs is used to replace momentjs. If your project is too large and uses a lot of momentjs methods, you can refer to the document <a href="/docs/vue/replace-date-cn.html">Custom Time Library</a>, Replace with momentjs.</li>
<li>UI interaction adjustment, its antd 4.x interaction specification</li>
</ul>
</li>
<li>
<p><code>Form</code> The main goal of this update is to improve performance. If you don't have custom form controls, you can almost ignore this part</p>
<ul>
<li>
<p>Since version 3.0, Form.Item no longer hijacks child elements, but automatically checks through provider/inject dependency injection. This method can improve component performance, and there is no limit to the number of child elements. The same is true for child elements. It can be a high-level component that is further encapsulated.</p>
<p>You can reference <a href="#components-form-demo-customized-form-controls">Customized Form Controls</a></p>
<p>But it also has some disadvantages:</p>
<ol>
<li>
<p>If the custom component wants Form.Item to be verified and displayed, you need to inject <code>const {id, onFieldChange, onFieldBlur} = useFormItemContext()</code> and call the corresponding method.</p>
</li>
<li>
<p>A Form.Item can only collect the data of one form item. If there are multiple form items, it will cause collection confusion, for example,</p>
</li>
</ol>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
</code></pre>
<p>As above Form.Item does not know whether to collect <code>name=&quot;a&quot;</code> or <code>name=</code>b\`\`, you can solve this kind of problem in the following two ways:</p>
<p>The first is to use multiple <code>a-form-item</code>:</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
</code></pre>
<p>The second way is to wrap it with a custom component and call <code>useFormItemContext</code> in the custom component, It is equivalent to merging multiple form items into one.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// custom component</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@fe6/watr-pro'</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'custom-name'</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> formItemContext <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useFormItemContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-com</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-com</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
</code></pre>
<p>Third, the component library provides an <code>a-form-item-rest</code> component, which will prevent data collection. You can put form items that do not need to be collected and verified into this component. It is the same as the first This method is very similar, but it does not generate additional dom nodes.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item-rest</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item-rest</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
</code></pre>
</li>
</ul>
</li>
</ul>
<h3 id="New-API">New API <a class="header-anchor" href="#New-API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li><code>Space</code>
<ul>
<li><code>fontsize</code> font size setting</li>
<li><code>size</code> Field number only <strong><em>Array</em></strong> will take effect</li>
</ul>
</li>
<li><code>select</code> and <code>selectapi</code>
<ul>
<li><code>fieldnames</code> data field name settings</li>
<li><code>loadingplaceholder</code> loading copy</li>
</ul>
</li>
<li><code>Typography</code>
<ul>
<li>Is' blockable 'display: block</li>
</ul>
</li>
<li><code>ColorPicker</code>
<ul>
<li><code>mode</code> Different modes and styles can be set</li>
<li><code>placeholder</code> is slot , custom placeholder style</li>
</ul>
</li>
<li><code>FormPro</code>
<ul>
<li>Add props.advancedAll</li>
<li>Add props.inlineCol</li>
<li>Add props.inlineRow</li>
<li>Add props.inlineActionCol</li>
</ul>
</li>
<li><code>ModalUser</code>
<ul>
<li>Add props.beforeParams</li>
<li>Add props.showRoleName</li>
<li>Add props.showAvatar</li>
<li>Add props.userLabel</li>
<li>Add props.departmentLabel</li>
<li>Add props.fieldNames</li>
<li>Add props.height</li>
<li>Add props.repeatableCheck</li>
<li>Add props.loadApi</li>
<li>Add props.loadApiParams</li>
<li>Add props.virtual</li>
</ul>
</li>
<li><code>BasicArrow</code>
<ul>
<li>Add props.size</li>
<li>Add props.colors</li>
</ul>
</li>
<li><code>TablePro</code>
<ul>
<li>Add props.expandIcon</li>
</ul>
</li>
<li><code>Spin</code>
<ul>
<li>Add props.color\u3002</li>
</ul>
</li>
<li><code>UploadName</code>
<ul>
<li>Add props.mergeChangeDatas</li>
</ul>
</li>
<li><code>Image</code>
<ul>
<li>Add props.fit</li>
</ul>
</li>
</ul>
<h2 id="Encounter-problems">Encounter problems <a class="header-anchor" href="#Encounter-problems">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>V3 has made a lot of detailed improvements and refactorings. We have collected all known incompatible changes and related effects as much as possible, but there may still be some scenarios that we have not considered. If you encounter problems during the upgrade process, please go to <a href="https://vuecomponent.github.io/issue-helper/" target="_blank" rel="noopener noreferrer">GitHub issues</a> for feedback. We will respond as soon as possible and improve this document accordingly.</p>
`,lastUpdated:1701878244060}},s={class:"markdown"},l=a(`<p>This document will help you upgrade from @Fe6/water-pro <code>2.x</code> version to @Fe6/water-pro <code>4.x</code> version.</p><p>The 3.x version is a compatible version developed for compatibility with Vue 3. It does not bring many new features, and most of the API changes are only for better compatibility with Vue 3. The 4.x version has greatly improved performance, ease of use, and functions. After the 4.x version is stable, we will archive the 3.x version. It is recommended that you upgrade to the 4.x version as soon as possible. Although there are many changes, they are basically compatible. You can upgrade gradually according to the warnings given by the console.</p><h2 id="Upgrade-preparation">Upgrade preparation <a class="header-anchor" href="#Upgrade-preparation"><span aria-hidden="true" class="anchor">#</span></a></h2><ol><li>Please upgrade to the latest version of 3.x first, and remove/modify related APIs according to the warning information on the console. It is recommended to check the historical Change Log of 2.x first, which will not be detailed here.</li><li>Upgrade the project to Vue 3.2 and above.</li></ol><h2 id="_4-0-What-are-the-incompatible-changes">4.0 What are the incompatible changes <a class="header-anchor" href="#_4-0-What-are-the-incompatible-changes"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Design-specification-adjustment">Design specification adjustment <a class="header-anchor" href="#Design-specification-adjustment"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li>The font color is changed from <code>rgba(0, 0, 0, 0.65)</code> to <code>rgba(0, 0, 0, 0.85)</code>.</li><li>The selected color of some components is uniformly changed to <code>@blue-1: #E6F7FF</code>, and the corresponding color of <code>hover</code> is changed to <code>@gray-2: #FAFAFA</code>.</li><li>Error color value adjustment, changed from <code>@red-5: #F5222D</code> to <code>@red-5: #FF4D4F</code>.</li><li>DatePicker interactive redo, the panel and the input box are separated, the range selection can now select the start and end time separately.</li></ul><h4 id="Removed-API">Removed API <a class="header-anchor" href="#Removed-API"><span aria-hidden="true" class="anchor">#</span></a></h4><ul><li>Removed the <code>lazy</code> attribute of Transfer, it does not have a real optimization effect.</li><li>Removed the <code>combobox</code> mode of Select, please use <code>AutoComplete</code> instead.</li><li>Deprecated Button.Group, please use <code>Space</code> instead.</li><li><code>DatePicker</code> <code>TimePicker</code> <code>Calendar</code> remove momentjs, please use dayjs instead</li><li><code>Tree</code>, <code>TreeSelect</code><ul><li>Deprecated the use of <code>a-tree-node</code> and <code>a-tree-select-node</code> to construct nodes, use the <code>treeData</code> property instead</li><li>Deprecated <code>scopedSlots</code> <code>slots</code> custom rendering node, use <code>v-slot:title</code> instead</li><li>Deprecated <code>replaceFields</code>, use <code>fieldNames</code> instead</li></ul></li><li><code>Table</code><ul><li>Removed the <code>rowSelection.hideDefaultSelections</code> property of Table, please use <code>SELECTION_ALL</code> and <code>SELECTION_INVERT</code> in <code>rowSelection.selections</code> instead, [custom options](/components/table/#components-table-demo- row-selection-custom).</li><li>Removed Column slots and replaced them with <code>v-slot:headerCell</code> <code>v-slot:headerCell</code> <code>v-slot:bodyCell</code> <code>v-slot:customFilterDropdown</code> <code>v-slot:customFilterIcon</code></li></ul></li><li><code>DatePicker</code><ul><li>\u4E0D\u518D\u652F\u6301 <strong>\u9009\u62E9\u6846\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3(slot default)</strong></li></ul></li><li><code>Typography</code><ul><li><strong><em>styleReset</em></strong> field is removed, and <strong><em>resetable</em></strong> is used uniformly for style reset</li></ul></li><li><code>Menu</code><ul><li><strong>selectedColor</strong> Remove default</li><li><strong>selectedBgColor</strong> Remove default</li><li><strong>selectedBorderColor</strong> Remove default</li></ul></li><li><code>Button</code><ul><li>remove <code>type=&#39;danger&#39;</code>\uFF0C Danger becomes a button attribute rather than a button type</li></ul></li><li><code>Radio</code><ul><li><code>RadioGroup</code> Before the type attribute in, you define whether it is in the form of a button. Change it to <code>option-type</code></li><li><code>RadioGroup</code> Removed <strong>defaultValue</strong></li></ul></li><li><code>Scrollbar</code><ul><li><code>noresize</code> and <code>tag</code> remove</li></ul></li><li><code>FormPro</code><ul><li>remove props.baseRowStyle</li><li>remove props.baseColProps</li><li>remove props.compact</li><li>remove props.autoAdvancedLine</li><li>schema \u4E2D <ul><li>remove show</li><li>isAdvanced -&gt; 4.0 At first, you can use isadvanced = true for folding judgment. Isadvanced = true is hidden by default</li></ul></li><li>In the dynamicrules method, the detection and writing of value in the validator have changed</li></ul></li><li><code>TablePro</code><ul><li>Discard basiccolumn format</li><li>Uploadcard can perform data binding callback without specifying the &#39;changeEvent: &#39;changeUpload&#39;&#39; event in the schema</li><li>Abolish formschema Colprops field, please use formpro prop. Instead of labelcol, if you want to customize the label and wrapper width of each field separately, please use <code>schema.itemProps</code></li><li>Abolish formschema Rendercomponentcontent support, please use formschema End or formschema suffix</li><li>remove BasicColumn.format</li></ul></li></ul><h4 id="Component-refactoring">Component refactoring <a class="header-anchor" href="#Component-refactoring"><span aria-hidden="true" class="anchor">#</span></a></h4><p>In order to make the components have better performance and maintainability, we have used TS + Composition Api to refactor almost all components. There are still very few components that have not been refactored. Such components will be refactored gradually in the future, and the rest There will be no destructive updates to the components, so there is no need to worry about future upgrade costs.</p><p>Major updates after the 4.0 version refactoring include <code>Tree</code> <code>TreeSelect</code> <code>DatePicker</code> <code>TimePicker</code> <code>Calendar</code> <code>Form</code> <code>Table</code>, other components also have corresponding function updates, you can check ChangeLog for further details.</p><ul><li><p><code>@fe6/icon-vue</code> instead of <code>@ant-design/icons-vue</code></p></li><li><p><code>Tree</code> <code>TreeSelect</code></p><ul><li>Added virtual scrolling, discarded using <code>a-tree-node</code> <code>a-tree-select-node</code> to build nodes, using <code>treeData</code> property instead to improve component performance</li><li>Deprecated <code>scopedSlots</code> <code>slots</code> custom rendering node, and replace it with <code>v-slot:title</code> to improve ease of use, avoid slot configuration expansion, and also avoid slot conflicts</li></ul></li><li><p><code>AutoComplete</code></p><ul><li>no longer support <code>optionLabelProp</code>. Please set Option <code>value</code> directly.</li><li>options definition align with Select. Please use <code>options</code> instead of <code>dataSource</code>.</li></ul></li><li><p><code>Table</code></p><ul><li>Removed the <code>rowSelection.hideDefaultSelections</code> property of Table, please use <code>SELECTION_ALL</code> and <code>SELECTION_INVERT</code> in <code>rowSelection.selections</code> instead, [custom options](/components/table/#components-table-demo- row-selection-custom). </li><li>Added expandFixed to control whether the expanded icon is fixed</li><li>Added the showSorterTooltip header whether to display the tooltip for the next sort.</li><li>Added sticky for setting sticky head and scroll bar</li><li>Added rowExpandable to set whether to allow row expansion</li><li>New slot headerCell is used to personalize the header cell</li><li>Added slot bodyCell for personalized cell</li><li>New slot customFilterDropdown is used to customize the filter menu, which needs to be used with <code>column.customFilterDropdown</code></li><li>Added slot customFilterIcon for custom filter icons</li><li>New slot emptyText is used to customize the display content of empty data</li><li>Added slot summary for the summary column</li></ul></li><li><p><code>DatePicker</code> <code>TimePicker</code> <code>Calendar</code></p><ul><li>By default, a more lightweight dayjs is used to replace momentjs. If your project is too large and uses a lot of momentjs methods, you can refer to the document <a href="/docs/vue/replace-date-cn.html">Custom Time Library</a>, Replace with momentjs.</li><li>UI interaction adjustment, its antd 4.x interaction specification</li></ul></li><li><p><code>Form</code> The main goal of this update is to improve performance. If you don&#39;t have custom form controls, you can almost ignore this part</p><ul><li><p>Since version 3.0, Form.Item no longer hijacks child elements, but automatically checks through provider/inject dependency injection. This method can improve component performance, and there is no limit to the number of child elements. The same is true for child elements. It can be a high-level component that is further encapsulated.</p><p>You can reference <a href="#components-form-demo-customized-form-controls">Customized Form Controls</a></p><p>But it also has some disadvantages:</p><ol><li><p>If the custom component wants Form.Item to be verified and displayed, you need to inject <code>const {id, onFieldChange, onFieldBlur} = useFormItemContext()</code> and call the corresponding method.</p></li><li><p>A Form.Item can only collect the data of one form item. If there are multiple form items, it will cause collection confusion, for example,</p></li></ol><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>As above Form.Item does not know whether to collect <code>name=&quot;a&quot;</code> or <code>name=</code>b\`\`, you can solve this kind of problem in the following two ways:</p><p>The first is to use multiple <code>a-form-item</code>:</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>The second way is to wrap it with a custom component and call <code>useFormItemContext</code> in the custom component, It is equivalent to merging multiple form items into one.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// custom component</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@fe6/watr-pro&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;custom-name&#39;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> formItemContext <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useFormItemContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-com</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-com</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Third, the component library provides an <code>a-form-item-rest</code> component, which will prevent data collection. You can put form items that do not need to be collected and verified into this component. It is the same as the first This method is very similar, but it does not generate additional dom nodes.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item-rest</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-input</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item-rest</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
</code></pre></li></ul></li></ul><h3 id="New-API">New API <a class="header-anchor" href="#New-API"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li><code>Space</code><ul><li><code>fontsize</code> font size setting</li><li><code>size</code> Field number only <strong><em>Array</em></strong> will take effect</li></ul></li><li><code>select</code> and <code>selectapi</code><ul><li><code>fieldnames</code> data field name settings</li><li><code>loadingplaceholder</code> loading copy</li></ul></li><li><code>Typography</code><ul><li>Is&#39; blockable &#39;display: block</li></ul></li><li><code>ColorPicker</code><ul><li><code>mode</code> Different modes and styles can be set</li><li><code>placeholder</code> is slot , custom placeholder style</li></ul></li><li><code>FormPro</code><ul><li>Add props.advancedAll</li><li>Add props.inlineCol</li><li>Add props.inlineRow</li><li>Add props.inlineActionCol</li></ul></li><li><code>ModalUser</code><ul><li>Add props.beforeParams</li><li>Add props.showRoleName</li><li>Add props.showAvatar</li><li>Add props.userLabel</li><li>Add props.departmentLabel</li><li>Add props.fieldNames</li><li>Add props.height</li><li>Add props.repeatableCheck</li><li>Add props.loadApi</li><li>Add props.loadApiParams</li><li>Add props.virtual</li></ul></li><li><code>BasicArrow</code><ul><li>Add props.size</li><li>Add props.colors</li></ul></li><li><code>TablePro</code><ul><li>Add props.expandIcon</li></ul></li><li><code>Spin</code><ul><li>Add props.color\u3002</li></ul></li><li><code>UploadName</code><ul><li>Add props.mergeChangeDatas</li></ul></li><li><code>Image</code><ul><li>Add props.fit</li></ul></li></ul><h2 id="Encounter-problems">Encounter problems <a class="header-anchor" href="#Encounter-problems"><span aria-hidden="true" class="anchor">#</span></a></h2><p>V3 has made a lot of detailed improvements and refactorings. We have collected all known incompatible changes and related effects as much as possible, but there may still be some scenarios that we have not considered. If you encounter problems during the upgrade process, please go to <a href="https://vuecomponent.github.io/issue-helper/" target="_blank" rel="noopener noreferrer">GitHub issues</a> for feedback. We will respond as soon as possible and improve this document accordingly.</p>`,17),c=[l];function i(p,r,d,u,m,h){return n(),e("article",s,c)}var k=t(o,[["render",i]]);export{k as default};

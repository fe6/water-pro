import{J as g,E as Z,cb as w,d as A,k as d,aq as e,bN as m,bO as o,e as p,G as n,H as s,bF as L}from"./vendor.0f0e4632.js";import{_ as k,e as F}from"./index.f6b32fa6.js";const f={pageData:{title:"ModalUser",description:"",frontmatter:{category:"Components",type:"\u53CD\u9988",title:"ModalUser",subtitle:"\u7528\u6237\u5F39\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u8868\u683C\u7B5B\u9009\u7528\u6237\uFF0C\u63D0\u4EA4\u6570\u636E\u9700\u8981\u9009\u62E9\u7528\u6237\u7684\u65F6\u5019"},{level:2,title:"\u6CE8\u610F",slug:"\u6CE8\u610F",content:""},{level:2,title:"API",slug:"API",content:"Props"},{level:3,title:"Props",slug:"Props",content:""},{level:3,title:"ReplaceFields",slug:"ReplaceFields",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""}],relativePath:"components/modal-user/index.zh-CN.md",content:`
\u5F39\u6846\u91CC\u53EF\u4EE5\u5C55\u793A\u66F4\u591A\u7528\u6237\u4FE1\u606F\uFF0C\u5982\u59D3\u540D\uFF0C\u522B\u540D\uFF0C\u90E8\u95E8\uFF0C\u89D2\u8272\uFF0C\u804C\u4F4D\u7B49\u3002\u672C\u5730\u641C\u7D22\u66F4\u5FEB\u6377\uFF0C\u4E00\u952E\u5168\u9009\u66F4\u65B9\u4FBF\u3002

## \u4F55\u65F6\u4F7F\u7528

\u8868\u683C\u7B5B\u9009\u7528\u6237\uFF0C\u63D0\u4EA4\u6570\u636E\u9700\u8981\u9009\u62E9\u7528\u6237\u7684\u65F6\u5019

## \u6CE8\u610F

- \u6570\u636E\u4E2D\u7528\u6237\u6570\u636E\u91CD\u590D\u88AB\u9009\u4E2D\u7684\u65F6\u5019 \b \u90FD\u9009\u4E2D\uFF0C\u5FC5\u987B\u662F \`props.repeatableCheck = true\` \u7684\u65F6\u5019
- \u914D\u7F6E\u4E2D\u7684 fieldNames.key \u662F\u7528\u4F5C\u6302\u8F7D\u8282\u70B9 key \u7684\u552F\u4E00\u6807\u8BC6

## API

### Props

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| value(v-model) | \u9009\u4E2D\u7684\u503C | string[] \\| number[] | - |  |
| fieldNames | \u66FF\u6362 treeNode \u4E2D \u5404\u79CD\u5B57\u6BB5\u4E3A options \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5\u3002\u5177\u4F53\u53C2\u8003\`fieldNames\` | object | \u770B\u4E0B\u9762 |  |
| maxTagTextLength | \u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B97 2 \u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6 | number | 4 |  |
| maxTagCount | \u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709 | number | 4 |  |
| closable | \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE | boolean | true |  |
| api | \u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3 | Function | - |  |
| apiParams | \u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |  |
| titleRightRender | \u81EA\u5B9A\u4E49\u6807\u9898\u53F3\u8FB9\u533A\u57DF | Function | - |  |
| modalTitle | \u5F39\u6846\u6807\u9898 | string | \u9009\u62E9\u5458\u5DE5 |  |
| modalRightTitle | \u5F39\u6846\u4E2D\u53F3\u4FA7\u6807\u9898 | string | \u5DF2\u9009\u62E9\u5458\u5DE5 |  |
| searchPlaceholder | \u641C\u7D22\u8F93\u5165\u6846\u5360\u4F4D\u6587\u6848 | string | \u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u79F0\u67E5\u8BE2 |  |
| type | \u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 \`select\` | string | select |  |
| size | \`type=&quot;select&quot;\` \u7684\u65F6\u5019\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A \`large\`\u3002\u53EF\u9009 \`large\` \`default\` \`small\` | string | \`default\` |  |
| placeholder | \`type=&quot;select&quot;\` \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9 | string | \u6DFB\u52A0\u5458\u5DE5 |  |
| options | \u53EF\u9009\u6570\u636E | array | - |  |
| beforeOk | \u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4 | Function | - |  |
| disabled | \u7981\u7528 | boolean | - |  |
| showAlias | \u662F\u5426\u663E\u793A\u522B\u540D | boolean | true |  |
| modalProps | modal \u7684\u5C5E\u6027 | object | - |  |
| scrollName | \u5185\u5BB9\u6EDA\u52A8\u7684 classname | string | - |  |
| mode | \u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 \`checkbox\` \`radio\` | string | checkbox | 3.44.0 |
| beforeParams | \u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3 | Function | - | 4.0 |
| showRoleName | \u662F\u5426\u663E\u793A\u6807\u7B7E | boolean | true | 4.0 |
| showAvatar | \u662F\u5426\u663E\u793A\u5934\u50CF | Function | - | 4.0 |
| userLabel | \u6570\u636E\u7684\u6807\u8BC6\uFF0C\u7528\u4E8E\u533A\u5206\u8282\u70B9\u8FD8\u662F\u6570\u636E | Function | - | 4.0 |
| height | \u5F39\u6846\u5185\u5BB9\u7684\u9AD8\u5EA6 | Number | 370 | 4.0 |
| repeatableCheck | \u91CD\u590D\u6570\u636E\u7684\u65F6\u5019\u81EA\u52A8\u52FE\u9009 | boolean | true | 4.0 |
| loadApi | \u52A8\u6001\u6309\u9700\u52A0\u8F7D\u8282\u70B9 | Function | - | 4.0 |
| loadApiParams | \u52A8\u6001\u6309\u9700\u52A0\u8F7D\u8282\u70B9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} | 4.0 |
| virtual | \u662F\u5426\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8 | boolean | true | 4.0 |

### ReplaceFields

| \u5B57\u6BB5                | \u8BF4\u660E                 | \u7C7B\u578B   | \u9ED8\u8BA4\u503C   | \u7248\u672C |
| ------------------- | -------------------- | ------ | -------- | ---- |
| fieldNames.children | \u5B50\u7EA7\u96C6\u5408             | string | children |      |
| fieldNames.title    | \u59D3\u540D                 | string | name     |      |
| fieldNames.key      | \u6298\u53E0\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6   | string | key      |      |
| fieldNames.value    | v-model:value \u7684\u5B57\u6BB5 | string | userId   |      |
| fieldNames.alias    | \u663E\u793A\u5728\u540D\u79F0\u540E\u9762       | string | alias    |      |
| fieldNames.position | \u804C\u4F4D                 | string | position |      |
| fieldNames.avatar   | \u5934\u50CF                 | string | avatar   |      |
| fieldNames.roleName | \u89D2\u8272\u540D\u79F0             | string | roleName |      |
| fieldNames.type     | \u6570\u636E\u7C7B\u578B             | string | type     | 4.0  |
| fieldNames.disabled | \u7981\u7528                 | string | disabled | 4.0  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E                      | \u56DE\u8C03\u53C2\u6570                             |
| -------- | ------------------------- | ------------------------------------ |
| cancel   | \u70B9\u51FB\u5F39\u6846\u53D6\u6D88\u4E4B\u540E          | (value: any[], nodes: any[]) =&gt; void |
| change   | v-model\uFF1Avalue \u6539\u53D8\u7684\u65F6\u5019 | (value: any[]) =&gt; void               |
| ok       | \u70B9\u51FB\u5F39\u6846\u786E\u5B9A\u4E4B\u540E          | (value: any[], nodes: any[]) =&gt; void |
`,html:`<p>\u5F39\u6846\u91CC\u53EF\u4EE5\u5C55\u793A\u66F4\u591A\u7528\u6237\u4FE1\u606F\uFF0C\u5982\u59D3\u540D\uFF0C\u522B\u540D\uFF0C\u90E8\u95E8\uFF0C\u89D2\u8272\uFF0C\u804C\u4F4D\u7B49\u3002\u672C\u5730\u641C\u7D22\u66F4\u5FEB\u6377\uFF0C\u4E00\u952E\u5168\u9009\u66F4\u65B9\u4FBF\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8868\u683C\u7B5B\u9009\u7528\u6237\uFF0C\u63D0\u4EA4\u6570\u636E\u9700\u8981\u9009\u62E9\u7528\u6237\u7684\u65F6\u5019</p>
<h2 id="\u6CE8\u610F">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u6570\u636E\u4E2D\u7528\u6237\u6570\u636E\u91CD\u590D\u88AB\u9009\u4E2D\u7684\u65F6\u5019 \b \u90FD\u9009\u4E2D\uFF0C\u5FC5\u987B\u662F <code>props.repeatableCheck = true</code> \u7684\u65F6\u5019</li>
<li>\u914D\u7F6E\u4E2D\u7684 fieldNames.key \u662F\u7528\u4F5C\u6302\u8F7D\u8282\u70B9 key \u7684\u552F\u4E00\u6807\u8BC6</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Props">Props <a class="header-anchor" href="#Props">
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
<td>value(v-model)</td>
<td>\u9009\u4E2D\u7684\u503C</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>\u66FF\u6362 treeNode \u4E2D \u5404\u79CD\u5B57\u6BB5\u4E3A options \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5\u3002\u5177\u4F53\u53C2\u8003<code>fieldNames</code></td>
<td>object</td>
<td>\u770B\u4E0B\u9762</td>
<td></td>
</tr>
<tr>
<td>maxTagTextLength</td>
<td>\u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B97 2 \u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6</td>
<td>number</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>\u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709</td>
<td>number</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>apiParams</td>
<td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>titleRightRender</td>
<td>\u81EA\u5B9A\u4E49\u6807\u9898\u53F3\u8FB9\u533A\u57DF</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>modalTitle</td>
<td>\u5F39\u6846\u6807\u9898</td>
<td>string</td>
<td>\u9009\u62E9\u5458\u5DE5</td>
<td></td>
</tr>
<tr>
<td>modalRightTitle</td>
<td>\u5F39\u6846\u4E2D\u53F3\u4FA7\u6807\u9898</td>
<td>string</td>
<td>\u5DF2\u9009\u62E9\u5458\u5DE5</td>
<td></td>
</tr>
<tr>
<td>searchPlaceholder</td>
<td>\u641C\u7D22\u8F93\u5165\u6846\u5360\u4F4D\u6587\u6848</td>
<td>string</td>
<td>\u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u79F0\u67E5\u8BE2</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>select</code></td>
<td>string</td>
<td>select</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A <code>large</code>\u3002\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td>
<td>string</td>
<td>\u6DFB\u52A0\u5458\u5DE5</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>\u53EF\u9009\u6570\u636E</td>
<td>array</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>beforeOk</td>
<td>\u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showAlias</td>
<td>\u662F\u5426\u663E\u793A\u522B\u540D</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>modalProps</td>
<td>modal \u7684\u5C5E\u6027</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>scrollName</td>
<td>\u5185\u5BB9\u6EDA\u52A8\u7684 classname</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>mode</td>
<td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>checkbox</code> <code>radio</code></td>
<td>string</td>
<td>checkbox</td>
<td>3.44.0</td>
</tr>
<tr>
<td>beforeParams</td>
<td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>showRoleName</td>
<td>\u662F\u5426\u663E\u793A\u6807\u7B7E</td>
<td>boolean</td>
<td>true</td>
<td>4.0</td>
</tr>
<tr>
<td>showAvatar</td>
<td>\u662F\u5426\u663E\u793A\u5934\u50CF</td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>userLabel</td>
<td>\u6570\u636E\u7684\u6807\u8BC6\uFF0C\u7528\u4E8E\u533A\u5206\u8282\u70B9\u8FD8\u662F\u6570\u636E</td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>height</td>
<td>\u5F39\u6846\u5185\u5BB9\u7684\u9AD8\u5EA6</td>
<td>Number</td>
<td>370</td>
<td>4.0</td>
</tr>
<tr>
<td>repeatableCheck</td>
<td>\u91CD\u590D\u6570\u636E\u7684\u65F6\u5019\u81EA\u52A8\u52FE\u9009</td>
<td>boolean</td>
<td>true</td>
<td>4.0</td>
</tr>
<tr>
<td>loadApi</td>
<td>\u52A8\u6001\u6309\u9700\u52A0\u8F7D\u8282\u70B9</td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>loadApiParams</td>
<td>\u52A8\u6001\u6309\u9700\u52A0\u8F7D\u8282\u70B9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td>4.0</td>
</tr>
<tr>
<td>virtual</td>
<td>\u662F\u5426\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean</td>
<td>true</td>
<td>4.0</td>
</tr>
</tbody>
</table>
<h3 id="ReplaceFields">ReplaceFields <a class="header-anchor" href="#ReplaceFields">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u5B57\u6BB5</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>fieldNames.children</td>
<td>\u5B50\u7EA7\u96C6\u5408</td>
<td>string</td>
<td>children</td>
<td></td>
</tr>
<tr>
<td>fieldNames.title</td>
<td>\u59D3\u540D</td>
<td>string</td>
<td>name</td>
<td></td>
</tr>
<tr>
<td>fieldNames.key</td>
<td>\u6298\u53E0\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6</td>
<td>string</td>
<td>key</td>
<td></td>
</tr>
<tr>
<td>fieldNames.value</td>
<td>v-model:value \u7684\u5B57\u6BB5</td>
<td>string</td>
<td>userId</td>
<td></td>
</tr>
<tr>
<td>fieldNames.alias</td>
<td>\u663E\u793A\u5728\u540D\u79F0\u540E\u9762</td>
<td>string</td>
<td>alias</td>
<td></td>
</tr>
<tr>
<td>fieldNames.position</td>
<td>\u804C\u4F4D</td>
<td>string</td>
<td>position</td>
<td></td>
</tr>
<tr>
<td>fieldNames.avatar</td>
<td>\u5934\u50CF</td>
<td>string</td>
<td>avatar</td>
<td></td>
</tr>
<tr>
<td>fieldNames.roleName</td>
<td>\u89D2\u8272\u540D\u79F0</td>
<td>string</td>
<td>roleName</td>
<td></td>
</tr>
<tr>
<td>fieldNames.type</td>
<td>\u6570\u636E\u7C7B\u578B</td>
<td>string</td>
<td>type</td>
<td>4.0</td>
</tr>
<tr>
<td>fieldNames.disabled</td>
<td>\u7981\u7528</td>
<td>string</td>
<td>disabled</td>
<td>4.0</td>
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
</tr>
</thead>
<tbody>
<tr>
<td>cancel</td>
<td>\u70B9\u51FB\u5F39\u6846\u53D6\u6D88\u4E4B\u540E</td>
<td>(value: any[], nodes: any[]) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>v-model\uFF1Avalue \u6539\u53D8\u7684\u65F6\u5019</td>
<td>(value: any[]) =&gt; void</td>
</tr>
<tr>
<td>ok</td>
<td>\u70B9\u51FB\u5F39\u6846\u786E\u5B9A\u4E4B\u540E</td>
<td>(value: any[], nodes: any[]) =&gt; void</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243824}},J={class:"markdown"},Y=w('<p>\u5F39\u6846\u91CC\u53EF\u4EE5\u5C55\u793A\u66F4\u591A\u7528\u6237\u4FE1\u606F\uFF0C\u5982\u59D3\u540D\uFF0C\u522B\u540D\uFF0C\u90E8\u95E8\uFF0C\u89D2\u8272\uFF0C\u804C\u4F4D\u7B49\u3002\u672C\u5730\u641C\u7D22\u66F4\u5FEB\u6377\uFF0C\u4E00\u952E\u5168\u9009\u66F4\u65B9\u4FBF\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u8868\u683C\u7B5B\u9009\u7528\u6237\uFF0C\u63D0\u4EA4\u6570\u636E\u9700\u8981\u9009\u62E9\u7528\u6237\u7684\u65F6\u5019</p><h2 id="\u6CE8\u610F">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u6570\u636E\u4E2D\u7528\u6237\u6570\u636E\u91CD\u590D\u88AB\u9009\u4E2D\u7684\u65F6\u5019 \b \u90FD\u9009\u4E2D\uFF0C\u5FC5\u987B\u662F <code>props.repeatableCheck = true</code> \u7684\u65F6\u5019</li><li>\u914D\u7F6E\u4E2D\u7684 fieldNames.key \u662F\u7528\u4F5C\u6302\u8F7D\u8282\u70B9 key \u7684\u552F\u4E00\u6807\u8BC6</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Props">Props <a class="header-anchor" href="#Props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u9009\u4E2D\u7684\u503C</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>fieldNames</td><td>\u66FF\u6362 treeNode \u4E2D \u5404\u79CD\u5B57\u6BB5\u4E3A options \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5\u3002\u5177\u4F53\u53C2\u8003<code>fieldNames</code></td><td>object</td><td>\u770B\u4E0B\u9762</td><td></td></tr><tr><td>maxTagTextLength</td><td>\u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B97 2 \u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6</td><td>number</td><td>4</td><td></td></tr><tr><td>maxTagCount</td><td>\u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709</td><td>number</td><td>4</td><td></td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>api</td><td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td><td>Function</td><td>-</td><td></td></tr><tr><td>apiParams</td><td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>titleRightRender</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u53F3\u8FB9\u533A\u57DF</td><td>Function</td><td>-</td><td></td></tr><tr><td>modalTitle</td><td>\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u9009\u62E9\u5458\u5DE5</td><td></td></tr><tr><td>modalRightTitle</td><td>\u5F39\u6846\u4E2D\u53F3\u4FA7\u6807\u9898</td><td>string</td><td>\u5DF2\u9009\u62E9\u5458\u5DE5</td><td></td></tr><tr><td>searchPlaceholder</td><td>\u641C\u7D22\u8F93\u5165\u6846\u5360\u4F4D\u6587\u6848</td><td>string</td><td>\u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u79F0\u67E5\u8BE2</td><td></td></tr><tr><td>type</td><td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>select</code></td><td>string</td><td>select</td><td></td></tr><tr><td>size</td><td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A <code>large</code>\u3002\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>placeholder</td><td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td><td>string</td><td>\u6DFB\u52A0\u5458\u5DE5</td><td></td></tr><tr><td>options</td><td>\u53EF\u9009\u6570\u636E</td><td>array</td><td>-</td><td></td></tr><tr><td>beforeOk</td><td>\u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4</td><td>Function</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showAlias</td><td>\u662F\u5426\u663E\u793A\u522B\u540D</td><td>boolean</td><td>true</td><td></td></tr><tr><td>modalProps</td><td>modal \u7684\u5C5E\u6027</td><td>object</td><td>-</td><td></td></tr><tr><td>scrollName</td><td>\u5185\u5BB9\u6EDA\u52A8\u7684 classname</td><td>string</td><td>-</td><td></td></tr><tr><td>mode</td><td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>checkbox</code> <code>radio</code></td><td>string</td><td>checkbox</td><td>3.44.0</td></tr><tr><td>beforeParams</td><td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>showRoleName</td><td>\u662F\u5426\u663E\u793A\u6807\u7B7E</td><td>boolean</td><td>true</td><td>4.0</td></tr><tr><td>showAvatar</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF</td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>userLabel</td><td>\u6570\u636E\u7684\u6807\u8BC6\uFF0C\u7528\u4E8E\u533A\u5206\u8282\u70B9\u8FD8\u662F\u6570\u636E</td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>height</td><td>\u5F39\u6846\u5185\u5BB9\u7684\u9AD8\u5EA6</td><td>Number</td><td>370</td><td>4.0</td></tr><tr><td>repeatableCheck</td><td>\u91CD\u590D\u6570\u636E\u7684\u65F6\u5019\u81EA\u52A8\u52FE\u9009</td><td>boolean</td><td>true</td><td>4.0</td></tr><tr><td>loadApi</td><td>\u52A8\u6001\u6309\u9700\u52A0\u8F7D\u8282\u70B9</td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>loadApiParams</td><td>\u52A8\u6001\u6309\u9700\u52A0\u8F7D\u8282\u70B9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td>4.0</td></tr><tr><td>virtual</td><td>\u662F\u5426\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8</td><td>boolean</td><td>true</td><td>4.0</td></tr></tbody></table><h3 id="ReplaceFields">ReplaceFields <a class="header-anchor" href="#ReplaceFields"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>fieldNames.children</td><td>\u5B50\u7EA7\u96C6\u5408</td><td>string</td><td>children</td><td></td></tr><tr><td>fieldNames.title</td><td>\u59D3\u540D</td><td>string</td><td>name</td><td></td></tr><tr><td>fieldNames.key</td><td>\u6298\u53E0\u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6</td><td>string</td><td>key</td><td></td></tr><tr><td>fieldNames.value</td><td>v-model:value \u7684\u5B57\u6BB5</td><td>string</td><td>userId</td><td></td></tr><tr><td>fieldNames.alias</td><td>\u663E\u793A\u5728\u540D\u79F0\u540E\u9762</td><td>string</td><td>alias</td><td></td></tr><tr><td>fieldNames.position</td><td>\u804C\u4F4D</td><td>string</td><td>position</td><td></td></tr><tr><td>fieldNames.avatar</td><td>\u5934\u50CF</td><td>string</td><td>avatar</td><td></td></tr><tr><td>fieldNames.roleName</td><td>\u89D2\u8272\u540D\u79F0</td><td>string</td><td>roleName</td><td></td></tr><tr><td>fieldNames.type</td><td>\u6570\u636E\u7C7B\u578B</td><td>string</td><td>type</td><td>4.0</td></tr><tr><td>fieldNames.disabled</td><td>\u7981\u7528</td><td>string</td><td>disabled</td><td>4.0</td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u5F39\u6846\u53D6\u6D88\u4E4B\u540E</td><td>(value: any[], nodes: any[]) =&gt; void</td></tr><tr><td>change</td><td>v-model\uFF1Avalue \u6539\u53D8\u7684\u65F6\u5019</td><td>(value: any[]) =&gt; void</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u5F39\u6846\u786E\u5B9A\u4E4B\u540E</td><td>(value: any[], nodes: any[]) =&gt; void</td></tr></tbody></table>',12),X=[Y];function N(a,t,u,r,I,C){return g(),Z("article",J,X)}var E=k(f,[["render",N]]);const K={pageData:{title:"ModalUser",description:"",frontmatter:{category:"Components",type:"Feedback",title:"ModalUser",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"When users need to be selected to submit data through table filtering"},{level:2,title:"PS",slug:"PS",content:""},{level:2,title:"API",slug:"API",content:"Props"},{level:3,title:"Props",slug:"Props",content:""},{level:3,title:"ReplaceFields",slug:"ReplaceFields",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""}],relativePath:"components/modal-user/index.en-US.md",content:`
More user information can be displayed in the pop-up box, such as name, alias, Department, role, position, etc. Local search is faster and one click all selection is more convenient.

## When To Use

When users need to be selected to submit data through table filtering

## PS

- When duplicate user data in data is selected \b All selected. It must be \`props.repeatableCheck = true\` time
- Fieldnames. In configuration Key is the unique identifier used as the mount node key

## API

### Props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| value(v-model) | Selected value | string[] \\| number[] | - |  |
| fieldNames | Replace various fields in treenode with corresponding fields in options. Specific reference \` fieldnames\` |  | object | {children: &#39;children&#39;,title: &#39;name&#39;,key: &#39;id&#39;,value: &#39;userId&#39;,nodeId: &#39;departmentId&#39;,unionid: &#39;userId&#39;,alias: &#39;alias&#39;,position: &#39;position&#39;,avatar: &#39;avatar&#39;,roleName: &#39;roleName&#39;,users: &#39;users&#39;} |  |
| maxTagTextLength | For the length of text, Chinese is two lengths and English is one length | number | 4 |  |
| maxTagCount | The number of tags. When it is 0, all tags will be displayed | number | 4 |  |
| closable | Show close button | boolean | true |  |
| api | Request pop-up optional interface | Function | - |  |
| apiParams | Parameters attached to the interface | object | {} |
| titleRightRender | Custom title right area | Function | - |  |
| modalTitle | Pop up title | string | \u9009\u62E9\u5458\u5DE5 |  |
| modalRightTitle | Right title in pop-up box | string | \u5DF2\u9009\u62E9\u5458\u5DE5 |  |
| searchPlaceholder | Search input box placeholder | string | \u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u79F0\u67E5\u8BE2 |  |
| type | Control type, optional \`select\` | string | select |  |
| size | Size | string | \`default\` |  |
| placeholder | content | string | \u6DFB\u52A0\u5458\u5DE5 |  |
| options | Options | array | - |  |
| beforeOk | Before ok | Function | - |  |
| disabled | Disabled | boolean | - |  |
| showAlias | Show alias | boolean | true |  |
| modalProps | Modal props | object | - |  |
| scrollName | Scoll classname | string | - |  |
| mode | Select type, optional \`checkbox\` \`radio\` | string | checkbox | 3.44.0 |
| beforeParams |  | Function | - | 4.0 |
| showRoleName | Request pop-up optional interface | boolean | true | 4.0 |
| showAvatar | Show avatar | Function | - | 4.0 |
| userLabel | Identification of data, used to distinguish between nodes and data | Function | - | 4.0 |
| height | The height of the contents of the bullet box | Number | 370 | 4.0 |
| repeatableCheck | Automatically check when repeating data | boolean | true | 4.0 |

### ReplaceFields

| Fields Property     | Description | Type   | Default  | Version |
| ------------------- | ----------- | ------ | -------- | ------- |
| fieldNames.children | Child set   | string | children |         |
| fieldNames.title    | Name        | string | name     |         |
| fieldNames.key      | Key         | string | key      |         |
| fieldNames.value    | value       | string | userId   |         |
| fieldNames.alias    | Alias       | string | alias    |         |
| fieldNames.position | Position    | string | position |         |
| fieldNames.avatar   | Avatar      | string | avatar   |         |
| fieldNames.roleName | Role name   | string | roleName |         |
| fieldNames.type     | Type        | string | type     | 4.0     |
| fieldNames.disabled | Disabled    | string | disabled | 4.0     |

### \u4E8B\u4EF6

| Events Name | Description                    | Arguments                            |
| ----------- | ------------------------------ | ------------------------------------ |
| cancel      | Click the pop-up box to cancel | (value: any[], nodes: any[]) =&gt; void |
| change      | Change callback                | (value: any[]) =&gt; void               |
| ok          | Ok callback                    | (value: any[], nodes: any[]) =&gt; void |
`,html:`<p>More user information can be displayed in the pop-up box, such as name, alias, Department, role, position, etc. Local search is faster and one click all selection is more convenient.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>When users need to be selected to submit data through table filtering</p>
<h2 id="PS">PS <a class="header-anchor" href="#PS">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When duplicate user data in data is selected \b All selected. It must be <code>props.repeatableCheck = true</code> time</li>
<li>Fieldnames. In configuration Key is the unique identifier used as the mount node key</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Props">Props <a class="header-anchor" href="#Props">
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
<td>value(v-model)</td>
<td>Selected value</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>Replace various fields in treenode with corresponding fields in options. Specific reference <code>fieldnames</code></td>
<td></td>
<td>object</td>
<td>{children: 'children',title: 'name',key: 'id',value: 'userId',nodeId: 'departmentId',unionid: 'userId',alias: 'alias',position: 'position',avatar: 'avatar',roleName: 'roleName',users: 'users'}</td>
</tr>
<tr>
<td>maxTagTextLength</td>
<td>For the length of text, Chinese is two lengths and English is one length</td>
<td>number</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>The number of tags. When it is 0, all tags will be displayed</td>
<td>number</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>Show close button</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>Request pop-up optional interface</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>apiParams</td>
<td>Parameters attached to the interface</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>titleRightRender</td>
<td>Custom title right area</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>modalTitle</td>
<td>Pop up title</td>
<td>string</td>
<td>\u9009\u62E9\u5458\u5DE5</td>
<td></td>
</tr>
<tr>
<td>modalRightTitle</td>
<td>Right title in pop-up box</td>
<td>string</td>
<td>\u5DF2\u9009\u62E9\u5458\u5DE5</td>
<td></td>
</tr>
<tr>
<td>searchPlaceholder</td>
<td>Search input box placeholder</td>
<td>string</td>
<td>\u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u79F0\u67E5\u8BE2</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>Control type, optional <code>select</code></td>
<td>string</td>
<td>select</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Size</td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>content</td>
<td>string</td>
<td>\u6DFB\u52A0\u5458\u5DE5</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>Options</td>
<td>array</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>beforeOk</td>
<td>Before ok</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showAlias</td>
<td>Show alias</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>modalProps</td>
<td>Modal props</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>scrollName</td>
<td>Scoll classname</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>mode</td>
<td>Select type, optional <code>checkbox</code> <code>radio</code></td>
<td>string</td>
<td>checkbox</td>
<td>3.44.0</td>
</tr>
<tr>
<td>beforeParams</td>
<td></td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>showRoleName</td>
<td>Request pop-up optional interface</td>
<td>boolean</td>
<td>true</td>
<td>4.0</td>
</tr>
<tr>
<td>showAvatar</td>
<td>Show avatar</td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>userLabel</td>
<td>Identification of data, used to distinguish between nodes and data</td>
<td>Function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>height</td>
<td>The height of the contents of the bullet box</td>
<td>Number</td>
<td>370</td>
<td>4.0</td>
</tr>
<tr>
<td>repeatableCheck</td>
<td>Automatically check when repeating data</td>
<td>boolean</td>
<td>true</td>
<td>4.0</td>
</tr>
</tbody>
</table>
<h3 id="ReplaceFields">ReplaceFields <a class="header-anchor" href="#ReplaceFields">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Fields Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>fieldNames.children</td>
<td>Child set</td>
<td>string</td>
<td>children</td>
<td></td>
</tr>
<tr>
<td>fieldNames.title</td>
<td>Name</td>
<td>string</td>
<td>name</td>
<td></td>
</tr>
<tr>
<td>fieldNames.key</td>
<td>Key</td>
<td>string</td>
<td>key</td>
<td></td>
</tr>
<tr>
<td>fieldNames.value</td>
<td>value</td>
<td>string</td>
<td>userId</td>
<td></td>
</tr>
<tr>
<td>fieldNames.alias</td>
<td>Alias</td>
<td>string</td>
<td>alias</td>
<td></td>
</tr>
<tr>
<td>fieldNames.position</td>
<td>Position</td>
<td>string</td>
<td>position</td>
<td></td>
</tr>
<tr>
<td>fieldNames.avatar</td>
<td>Avatar</td>
<td>string</td>
<td>avatar</td>
<td></td>
</tr>
<tr>
<td>fieldNames.roleName</td>
<td>Role name</td>
<td>string</td>
<td>roleName</td>
<td></td>
</tr>
<tr>
<td>fieldNames.type</td>
<td>Type</td>
<td>string</td>
<td>type</td>
<td>4.0</td>
</tr>
<tr>
<td>fieldNames.disabled</td>
<td>Disabled</td>
<td>string</td>
<td>disabled</td>
<td>4.0</td>
</tr>
</tbody>
</table>
<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
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
<td>cancel</td>
<td>Click the pop-up box to cancel</td>
<td>(value: any[], nodes: any[]) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>Change callback</td>
<td>(value: any[]) =&gt; void</td>
</tr>
<tr>
<td>ok</td>
<td>Ok callback</td>
<td>(value: any[], nodes: any[]) =&gt; void</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243823}},H={class:"markdown"},D=w('<p>More user information can be displayed in the pop-up box, such as name, alias, Department, role, position, etc. Local search is faster and one click all selection is more convenient.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>When users need to be selected to submit data through table filtering</p><h2 id="PS">PS <a class="header-anchor" href="#PS"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When duplicate user data in data is selected \b All selected. It must be <code>props.repeatableCheck = true</code> time</li><li>Fieldnames. In configuration Key is the unique identifier used as the mount node key</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Props">Props <a class="header-anchor" href="#Props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>value(v-model)</td><td>Selected value</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>fieldNames</td><td>Replace various fields in treenode with corresponding fields in options. Specific reference <code>fieldnames</code></td><td></td><td>object</td><td>{children: &#39;children&#39;,title: &#39;name&#39;,key: &#39;id&#39;,value: &#39;userId&#39;,nodeId: &#39;departmentId&#39;,unionid: &#39;userId&#39;,alias: &#39;alias&#39;,position: &#39;position&#39;,avatar: &#39;avatar&#39;,roleName: &#39;roleName&#39;,users: &#39;users&#39;}</td></tr><tr><td>maxTagTextLength</td><td>For the length of text, Chinese is two lengths and English is one length</td><td>number</td><td>4</td><td></td></tr><tr><td>maxTagCount</td><td>The number of tags. When it is 0, all tags will be displayed</td><td>number</td><td>4</td><td></td></tr><tr><td>closable</td><td>Show close button</td><td>boolean</td><td>true</td><td></td></tr><tr><td>api</td><td>Request pop-up optional interface</td><td>Function</td><td>-</td><td></td></tr><tr><td>apiParams</td><td>Parameters attached to the interface</td><td>object</td><td>{}</td><td></td></tr><tr><td>titleRightRender</td><td>Custom title right area</td><td>Function</td><td>-</td><td></td></tr><tr><td>modalTitle</td><td>Pop up title</td><td>string</td><td>\u9009\u62E9\u5458\u5DE5</td><td></td></tr><tr><td>modalRightTitle</td><td>Right title in pop-up box</td><td>string</td><td>\u5DF2\u9009\u62E9\u5458\u5DE5</td><td></td></tr><tr><td>searchPlaceholder</td><td>Search input box placeholder</td><td>string</td><td>\u8BF7\u8F93\u5165\u5458\u5DE5\u540D\u79F0\u67E5\u8BE2</td><td></td></tr><tr><td>type</td><td>Control type, optional <code>select</code></td><td>string</td><td>select</td><td></td></tr><tr><td>size</td><td>Size</td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>placeholder</td><td>content</td><td>string</td><td>\u6DFB\u52A0\u5458\u5DE5</td><td></td></tr><tr><td>options</td><td>Options</td><td>array</td><td>-</td><td></td></tr><tr><td>beforeOk</td><td>Before ok</td><td>Function</td><td>-</td><td></td></tr><tr><td>disabled</td><td>Disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showAlias</td><td>Show alias</td><td>boolean</td><td>true</td><td></td></tr><tr><td>modalProps</td><td>Modal props</td><td>object</td><td>-</td><td></td></tr><tr><td>scrollName</td><td>Scoll classname</td><td>string</td><td>-</td><td></td></tr><tr><td>mode</td><td>Select type, optional <code>checkbox</code> <code>radio</code></td><td>string</td><td>checkbox</td><td>3.44.0</td></tr><tr><td>beforeParams</td><td></td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>showRoleName</td><td>Request pop-up optional interface</td><td>boolean</td><td>true</td><td>4.0</td></tr><tr><td>showAvatar</td><td>Show avatar</td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>userLabel</td><td>Identification of data, used to distinguish between nodes and data</td><td>Function</td><td>-</td><td>4.0</td></tr><tr><td>height</td><td>The height of the contents of the bullet box</td><td>Number</td><td>370</td><td>4.0</td></tr><tr><td>repeatableCheck</td><td>Automatically check when repeating data</td><td>boolean</td><td>true</td><td>4.0</td></tr></tbody></table><h3 id="ReplaceFields">ReplaceFields <a class="header-anchor" href="#ReplaceFields"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Fields Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>fieldNames.children</td><td>Child set</td><td>string</td><td>children</td><td></td></tr><tr><td>fieldNames.title</td><td>Name</td><td>string</td><td>name</td><td></td></tr><tr><td>fieldNames.key</td><td>Key</td><td>string</td><td>key</td><td></td></tr><tr><td>fieldNames.value</td><td>value</td><td>string</td><td>userId</td><td></td></tr><tr><td>fieldNames.alias</td><td>Alias</td><td>string</td><td>alias</td><td></td></tr><tr><td>fieldNames.position</td><td>Position</td><td>string</td><td>position</td><td></td></tr><tr><td>fieldNames.avatar</td><td>Avatar</td><td>string</td><td>avatar</td><td></td></tr><tr><td>fieldNames.roleName</td><td>Role name</td><td>string</td><td>roleName</td><td></td></tr><tr><td>fieldNames.type</td><td>Type</td><td>string</td><td>type</td><td>4.0</td></tr><tr><td>fieldNames.disabled</td><td>Disabled</td><td>string</td><td>disabled</td><td>4.0</td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>cancel</td><td>Click the pop-up box to cancel</td><td>(value: any[], nodes: any[]) =&gt; void</td></tr><tr><td>change</td><td>Change callback</td><td>(value: any[]) =&gt; void</td></tr><tr><td>ok</td><td>Ok callback</td><td>(value: any[], nodes: any[]) =&gt; void</td></tr></tbody></table>',12),V=[D];function R(a,t,u,r,I,C){return g(),Z("article",H,V)}var S=k(K,[["render",R]]);const z=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",parentId:0,type:"department",key:"0",children:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",alias:"Irresistible teacher",key:"0-1",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",type:"user"},{id:2,name:"\u4E9A\u592A\u5730\u533A",type:"department",key:"0-2",children:[{id:51,userId:"Meina",name:"\u7F8E\u5A1C",alias:"out of body master",key:"0-2-1",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:3,name:"\u4E2D\u56FD",type:"department",key:"0-2-2",children:[{id:44,name:"\u5927\u4E2D\u534E\u533A",type:"department",key:"0-2-2-1",children:[{id:5,name:"\u897F\u4E09\u65D7\u90E8",type:"department",key:"0-2-2-1-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",key:"0-2-2-1-1-1",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Cang",name:"\u82CD",key:"0-2-2-1-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]},{id:6,name:"\u534E\u5357\u533A",type:"department",key:"0-2-2-2",children:[{id:7,name:"\u897F\u90E8",type:"department",key:"0-2-2-2-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E951\u7A7A",alias:"Irresistible teacher",position:"\u9000\u4F11",key:"0-2-2-2-1-1",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Ca1ngjingkong",name:"\u82CD\u4E95\u7A7A1",key:"0-2-2-2-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]}]}]}]}],O=({success:a})=>{setTimeout(()=>{a(z)},100)},j=A({setup(){return{value3:d([]),getSelectForOptions:O}}}),T=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
    userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
    alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function x(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"Basic.",cn:"Basic\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/modal-user/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIgOmFwaT0iZ2V0U2VsZWN0Rm9yT3B0aW9ucyIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIj48L2EtbW9kYWwtdXNlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2VuRGF0YTogYW55W10gPSBbCiAgewogICAgaWQ6IDEsCiAgICBuYW1lOiAn5pys5Zyw546v5aKDLeautScsCiAgICBwYXJlbnRJZDogMCwKICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgIGtleTogJzAnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIGlkOiA1MywKICAgICAgICB1c2VySWQ6ICdTaGFuZ0hhb2ppYScsCiAgICAgICAgbmFtZTogJ+S4iuWlveS9sycsCiAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAga2V5OiAnMC0xJywKICAgICAgICBwb3NpdGlvbjogJ+WNg+emp+mDqOmXqCcsCiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgICAgcm9sZU5hbWU6ICfnrqHnkIblkZgnLAogICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgfSwKICAgICAgewogICAgICAgIGlkOiAyLAogICAgICAgIG5hbWU6ICfkuprlpKrlnLDljLonLAogICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICBrZXk6ICcwLTInLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgdXNlcklkOiAnTWVpbmEnLAogICAgICAgICAgICBuYW1lOiAn576O5aicJywKICAgICAgICAgICAgYWxpYXM6ICdvdXQgb2YgYm9keSBtYXN0ZXInLAogICAgICAgICAgICBrZXk6ICcwLTItMScsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6byT5Yqx6YOo6ZeoJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgaWQ6IDMsCiAgICAgICAgICAgIG5hbWU6ICfkuK3lm70nLAogICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgIGtleTogJzAtMi0yJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZDogNDQsCiAgICAgICAgICAgICAgICBuYW1lOiAn5aSn5Lit5Y2O5Yy6JywKICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEnLAogICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgIGlkOiA1LAogICAgICAgICAgICAgICAgICAgIG5hbWU6ICfopb/kuInml5fpg6gnLAogICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEnLAogICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2FuZ2ppbmdrb25nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjeS6leepuicsCiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEtMScsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxNTEsCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogJ0NhbmcnLAogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6IuNJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTInLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGlkOiA2LAogICAgICAgICAgICAgICAgbmFtZTogJ+WNjuWNl+WMuicsCiAgICAgICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yJywKICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICBpZDogNywKICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6KW/6YOoJywKICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xJywKICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi43kupUx56m6JywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2ExbmdqaW5na29uZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqboxJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTInLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFtdKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIgOmFwaT0iZ2V0U2VsZWN0Rm9yT3B0aW9ucyIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIj48L2EtbW9kYWwtdXNlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBnZW5EYXRhID0gW3sKICBpZDogMSwKICBuYW1lOiAn5pys5Zyw546v5aKDLeautScsCiAgcGFyZW50SWQ6IDAsCiAgdHlwZTogJ2RlcGFydG1lbnQnLAogIGtleTogJzAnLAogIGNoaWxkcmVuOiBbewogICAgaWQ6IDUzLAogICAgdXNlcklkOiAnU2hhbmdIYW9qaWEnLAogICAgbmFtZTogJ+S4iuWlveS9sycsCiAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgIGtleTogJzAtMScsCiAgICBwb3NpdGlvbjogJ+WNg+emp+mDqOmXqCcsCiAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgIHJvbGVOYW1lOiAn566h55CG5ZGYJywKICAgIHR5cGU6ICd1c2VyJywKICB9LCB7CiAgICBpZDogMiwKICAgIG5hbWU6ICfkuprlpKrlnLDljLonLAogICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAga2V5OiAnMC0yJywKICAgIGNoaWxkcmVuOiBbewogICAgICBpZDogNTEsCiAgICAgIHVzZXJJZDogJ01laW5hJywKICAgICAgbmFtZTogJ+e+juWonCcsCiAgICAgIGFsaWFzOiAnb3V0IG9mIGJvZHkgbWFzdGVyJywKICAgICAga2V5OiAnMC0yLTEnLAogICAgICBwb3NpdGlvbjogJ+m8k+WKsemDqOmXqCcsCiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgIHR5cGU6ICd1c2VyJywKICAgIH0sIHsKICAgICAgaWQ6IDMsCiAgICAgIG5hbWU6ICfkuK3lm70nLAogICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgIGtleTogJzAtMi0yJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgaWQ6IDQ0LAogICAgICAgIG5hbWU6ICflpKfkuK3ljY7ljLonLAogICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICBrZXk6ICcwLTItMi0xJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIGlkOiA1LAogICAgICAgICAgbmFtZTogJ+ilv+S4ieaXl+mDqCcsCiAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICBrZXk6ICcwLTItMi0xLTEnLAogICAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgdXNlcklkOiAnQ2FuZ2ppbmdrb25nJywKICAgICAgICAgICAgbmFtZTogJ+iLjeS6leepuicsCiAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEtMScsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH0sIHsKICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgdXNlcklkOiAnQ2FuZycsCiAgICAgICAgICAgIG5hbWU6ICfoi40nLAogICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEtMicsCiAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9XSwKICAgICAgICB9XSwKICAgICAgfSwgewogICAgICAgIGlkOiA2LAogICAgICAgIG5hbWU6ICfljY7ljZfljLonLAogICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICBrZXk6ICcwLTItMi0yJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIGlkOiA3LAogICAgICAgICAgbmFtZTogJ+ilv+mDqCcsCiAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICBrZXk6ICcwLTItMi0yLTEnLAogICAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgdXNlcklkOiAnQ2FuZ2ppbmdrb25nJywKICAgICAgICAgICAgbmFtZTogJ+iLjeS6lTHnqbonLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMScsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9LCB7CiAgICAgICAgICAgIGlkOiAxNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhMW5namluZ2tvbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6MScsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTItMS0yJywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH1dLAogICAgICAgIH1dLAogICAgICB9XSwKICAgIH1dLAogIH1dLAp9XTsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoZ2VuRGF0YSk7CiAgfSwgMTAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTM6IHJlZihbXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(c,{api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i)},null,8,["api","value"])]),htmlCode:o(()=>[T]),jsVersionHtml:o(()=>[M]),_:1},8,["jsfiddle"])}var U=k(j,[["render",x]]);const q=[{id:22,title:"\u672C\u5730\u73AF\u5883-\u6BB5",departmentId:"22",items:[{id:53,needId:"ShangHaojia",title:"\u4E0A\u597D\u4F73",position:"\u5343\u79A7\u90E8\u95E8",departmentId:"22-1",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",status:"1",items:[{id:51,departmentId:"22-1-1",needId:"Meina",title:"\u7F8E\u5A1C",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",status:"2"}]},{id:51,needId:"TongXinCui",title:"\u540C\u5FC3\u8106",departmentId:"22-2",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",status:"1"},{id:51,needId:"AoLiAo",departmentId:"22-3",title:"\u5965\u5229\u5965",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",status:"1"},{id:90,title:"\u4E9A\u592A\u5730\u533A",departmentId:"22-4",status:"1",items:[{id:51,departmentId:"22-4-1-1",needId:"Meina",title:"\u7F8E\u5A1C",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",status:"2"}]}]}],Q=({params:a,success:t})=>{console.log(a,"\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316"),setTimeout(()=>{t(q)},100)},P=A({setup(){return{value3:d(["Meina"]),getSelectForOptions:Q}}}),_=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`{
      children: `),n("span",{class:"token punctuation"},"'"),s("items"),n("span",{class:"token punctuation"},"'"),s(`,
      title: `),n("span",{class:"token punctuation"},"'"),s("title"),n("span",{class:"token punctuation"},"'"),s(`,
      value: `),n("span",{class:"token punctuation"},"'"),s("needId"),n("span",{class:"token punctuation"},"'"),s(`,
      key: `),n("span",{class:"token punctuation"},"'"),s("departmentId"),n("span",{class:"token punctuation"},"'"),s(`,
      type: `),n("span",{class:"token punctuation"},"'"),s("status"),n("span",{class:"token punctuation"},"'"),s(`,
    }`),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"user-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"department-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-alias"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22'"),n("span",{class:"token punctuation"},","),s(`
    items`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-1'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        items`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-1-1'"),n("span",{class:"token punctuation"},","),s(`
            needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
        needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'TongXinCui'"),n("span",{class:"token punctuation"},","),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540C\u5FC3\u8106'"),n("span",{class:"token punctuation"},","),s(`
        departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-2'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
        needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'AoLiAo'"),n("span",{class:"token punctuation"},","),s(`
        departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-3'"),n("span",{class:"token punctuation"},","),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5965\u5229\u5965'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
        departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-4'"),n("span",{class:"token punctuation"},","),s(`
        status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        items`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-4-1-1'"),n("span",{class:"token punctuation"},","),s(`
            needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),$=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`{
      children: `),n("span",{class:"token punctuation"},"'"),s("items"),n("span",{class:"token punctuation"},"'"),s(`,
      title: `),n("span",{class:"token punctuation"},"'"),s("title"),n("span",{class:"token punctuation"},"'"),s(`,
      value: `),n("span",{class:"token punctuation"},"'"),s("needId"),n("span",{class:"token punctuation"},"'"),s(`,
      key: `),n("span",{class:"token punctuation"},"'"),s("departmentId"),n("span",{class:"token punctuation"},"'"),s(`,
      type: `),n("span",{class:"token punctuation"},"'"),s("status"),n("span",{class:"token punctuation"},"'"),s(`,
    }`),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"user-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"department-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-alias"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22'"),n("span",{class:"token punctuation"},","),s(`
  items`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
    needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-1'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
    items`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-1-1'"),n("span",{class:"token punctuation"},","),s(`
      needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
    needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'TongXinCui'"),n("span",{class:"token punctuation"},","),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u540C\u5FC3\u8106'"),n("span",{class:"token punctuation"},","),s(`
    departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-2'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
    needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'AoLiAo'"),n("span",{class:"token punctuation"},","),s(`
    departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-3'"),n("span",{class:"token punctuation"},","),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5965\u5229\u5965'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
    departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-4'"),n("span",{class:"token punctuation"},","),s(`
    status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
    items`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      departmentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22-4-1-1'"),n("span",{class:"token punctuation"},","),s(`
      needId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      status`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function nn(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"fieldName.",cn:"\u8BBE\u7F6E field-names",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E field-names</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>fieldName.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5B57\u6BB5","en-US":"fieldName"},relativePath:"components/modal-user/demo/field.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICA6ZmllbGQtbmFtZXM9InsKICAgICAgY2hpbGRyZW46ICdpdGVtcycsCiAgICAgIHRpdGxlOiAndGl0bGUnLAogICAgICB2YWx1ZTogJ25lZWRJZCcsCiAgICAgIGtleTogJ2RlcGFydG1lbnRJZCcsCiAgICAgIHR5cGU6ICdzdGF0dXMnLAogICAgfSIKICAgIHVzZXItbGFiZWw9IjIiCiAgICBkZXBhcnRtZW50LWxhYmVsPSIxIgogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIgogICAgOnNob3ctYWxpYXM9ImZhbHNlIgogID48L2EtbW9kYWwtdXNlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2VuRGF0YTogYW55W10gPSBbCiAgewogICAgaWQ6IDIyLAogICAgdGl0bGU6ICfmnKzlnLDnjq/looMt5q61JywKICAgIGRlcGFydG1lbnRJZDogJzIyJywKICAgIGl0ZW1zOiBbCiAgICAgIHsKICAgICAgICBpZDogNTMsCiAgICAgICAgbmVlZElkOiAnU2hhbmdIYW9qaWEnLAogICAgICAgIHRpdGxlOiAn5LiK5aW95L2zJywKICAgICAgICBwb3NpdGlvbjogJ+WNg+emp+mDqOmXqCcsCiAgICAgICAgZGVwYXJ0bWVudElkOiAnMjItMScsCiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgICAgcm9sZU5hbWU6ICfnrqHnkIblkZgnLAogICAgICAgIHN0YXR1czogJzEnLAogICAgICAgIGl0ZW1zOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgZGVwYXJ0bWVudElkOiAnMjItMS0xJywKICAgICAgICAgICAgbmVlZElkOiAnTWVpbmEnLAogICAgICAgICAgICB0aXRsZTogJ+e+juWonCcsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6byT5Yqx6YOo6ZeoJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgc3RhdHVzOiAnMicsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBpZDogNTEsCiAgICAgICAgbmVlZElkOiAnVG9uZ1hpbkN1aScsCiAgICAgICAgdGl0bGU6ICflkIzlv4PohIYnLAogICAgICAgIGRlcGFydG1lbnRJZDogJzIyLTInLAogICAgICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICAgICAgc3RhdHVzOiAnMScsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBpZDogNTEsCiAgICAgICAgbmVlZElkOiAnQW9MaUFvJywKICAgICAgICBkZXBhcnRtZW50SWQ6ICcyMi0zJywKICAgICAgICB0aXRsZTogJ+WlpeWIqeWlpScsCiAgICAgICAgcG9zaXRpb246ICfljYPnpqfpg6jpl6gnLAogICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICAgIHJvbGVOYW1lOiAn566h55CG5ZGYJywKICAgICAgICBzdGF0dXM6ICcxJywKICAgICAgfSwKICAgICAgewogICAgICAgIGlkOiA5MCwKICAgICAgICB0aXRsZTogJ+S6muWkquWcsOWMuicsCiAgICAgICAgZGVwYXJ0bWVudElkOiAnMjItNCcsCiAgICAgICAgc3RhdHVzOiAnMScsCiAgICAgICAgaXRlbXM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICBkZXBhcnRtZW50SWQ6ICcyMi00LTEtMScsCiAgICAgICAgICAgIG5lZWRJZDogJ01laW5hJywKICAgICAgICAgICAgdGl0bGU6ICfnvo7lqJwnLAogICAgICAgICAgICBwb3NpdGlvbjogJ+m8k+WKsemDqOmXqCcsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHN0YXR1czogJzInLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHBhcmFtcywgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2cocGFyYW1zLCAn5LiL5ouJ6YWN572u5Yid5aeL5YyWJyk7CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFsnTWVpbmEnXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICA6ZmllbGQtbmFtZXM9InsKICAgICAgY2hpbGRyZW46ICdpdGVtcycsCiAgICAgIHRpdGxlOiAndGl0bGUnLAogICAgICB2YWx1ZTogJ25lZWRJZCcsCiAgICAgIGtleTogJ2RlcGFydG1lbnRJZCcsCiAgICAgIHR5cGU6ICdzdGF0dXMnLAogICAgfSIKICAgIHVzZXItbGFiZWw9IjIiCiAgICBkZXBhcnRtZW50LWxhYmVsPSIxIgogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIgogICAgOnNob3ctYWxpYXM9ImZhbHNlIgogID48L2EtbW9kYWwtdXNlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBnZW5EYXRhID0gW3sKICBpZDogMjIsCiAgdGl0bGU6ICfmnKzlnLDnjq/looMt5q61JywKICBkZXBhcnRtZW50SWQ6ICcyMicsCiAgaXRlbXM6IFt7CiAgICBpZDogNTMsCiAgICBuZWVkSWQ6ICdTaGFuZ0hhb2ppYScsCiAgICB0aXRsZTogJ+S4iuWlveS9sycsCiAgICBwb3NpdGlvbjogJ+WNg+emp+mDqOmXqCcsCiAgICBkZXBhcnRtZW50SWQ6ICcyMi0xJywKICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgcm9sZU5hbWU6ICfnrqHnkIblkZgnLAogICAgc3RhdHVzOiAnMScsCiAgICBpdGVtczogW3sKICAgICAgaWQ6IDUxLAogICAgICBkZXBhcnRtZW50SWQ6ICcyMi0xLTEnLAogICAgICBuZWVkSWQ6ICdNZWluYScsCiAgICAgIHRpdGxlOiAn576O5aicJywKICAgICAgcG9zaXRpb246ICfpvJPlirHpg6jpl6gnLAogICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICBzdGF0dXM6ICcyJywKICAgIH1dLAogIH0sIHsKICAgIGlkOiA1MSwKICAgIG5lZWRJZDogJ1RvbmdYaW5DdWknLAogICAgdGl0bGU6ICflkIzlv4PohIYnLAogICAgZGVwYXJ0bWVudElkOiAnMjItMicsCiAgICBwb3NpdGlvbjogJ+WNg+emp+mDqOmXqCcsCiAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgIHJvbGVOYW1lOiAn566h55CG5ZGYJywKICAgIHN0YXR1czogJzEnLAogIH0sIHsKICAgIGlkOiA1MSwKICAgIG5lZWRJZDogJ0FvTGlBbycsCiAgICBkZXBhcnRtZW50SWQ6ICcyMi0zJywKICAgIHRpdGxlOiAn5aWl5Yip5aWlJywKICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgcm9sZU5hbWU6ICfnrqHnkIblkZgnLAogICAgc3RhdHVzOiAnMScsCiAgfSwgewogICAgaWQ6IDkwLAogICAgdGl0bGU6ICfkuprlpKrlnLDljLonLAogICAgZGVwYXJ0bWVudElkOiAnMjItNCcsCiAgICBzdGF0dXM6ICcxJywKICAgIGl0ZW1zOiBbewogICAgICBpZDogNTEsCiAgICAgIGRlcGFydG1lbnRJZDogJzIyLTQtMS0xJywKICAgICAgbmVlZElkOiAnTWVpbmEnLAogICAgICB0aXRsZTogJ+e+juWonCcsCiAgICAgIHBvc2l0aW9uOiAn6byT5Yqx6YOo6ZeoJywKICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgc3RhdHVzOiAnMicsCiAgICB9XSwKICB9XSwKfV07Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+S4i+aLiemFjee9ruWIneWni+WMlicpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFsnTWVpbmEnXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(c,{api:a.getSelectForOptions,"field-names":{children:"items",title:"title",value:"needId",key:"departmentId",type:"status"},"user-label":"2","department-label":"1",value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i),"show-alias":!1},null,8,["api","value"])]),htmlCode:o(()=>[_]),jsVersionHtml:o(()=>[$]),_:1},8,["jsfiddle"])}var sn=k(P,[["render",nn]]);const an=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",parentId:0,type:"department",key:"0",children:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",alias:"Irresistible teacher",key:"0-1",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",type:"user"},{id:2,name:"\u4E9A\u592A\u5730\u533A",type:"department",key:"0-2",children:[{id:51,userId:"Meina",name:"\u7F8E\u5A1C",alias:"out of body master",key:"0-2-1",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:3,name:"\u4E2D\u56FD",type:"department",key:"0-2-2",children:[{id:44,name:"\u5927\u4E2D\u534E\u533A",type:"department",key:"0-2-2-1",children:[{id:5,name:"\u897F\u4E09\u65D7\u90E8",type:"department",key:"0-2-2-1-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",key:"0-2-2-1-1-1",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Cang",name:"\u82CD",key:"0-2-2-1-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]},{id:6,name:"\u534E\u5357\u533A",type:"department",key:"0-2-2-2",children:[{id:7,name:"\u897F\u90E8",type:"department",key:"0-2-2-2-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E951\u7A7A",alias:"Irresistible teacher",position:"\u9000\u4F11",key:"0-2-2-2-1-1",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Ca1ngjingkong",name:"\u82CD\u4E95\u7A7A1",key:"0-2-2-2-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]}]}]}]}],tn=({success:a})=>{setTimeout(()=>{a(an)},100)},on=A({setup(){return{value3:d(["Meina"]),getSelectForOptions:tn}}}),en=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
    userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
    alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function cn(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"Size.",cn:'`size="large"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>size=&quot;large&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Size.</p>
`,order:0,title:{"zh-CN":"\u5927\u5C0F","en-US":"Size"},relativePath:"components/modal-user/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1tb2RhbC11c2VyIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgc2l6ZT0ibGFyZ2UiPjwvYS1tb2RhbC11c2VyPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBnZW5EYXRhOiBhbnlbXSA9IFsKICB7CiAgICBpZDogMSwKICAgIG5hbWU6ICfmnKzlnLDnjq/looMt5q61JywKICAgIHBhcmVudElkOiAwLAogICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAga2V5OiAnMCcsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgaWQ6IDUzLAogICAgICAgIHVzZXJJZDogJ1NoYW5nSGFvamlhJywKICAgICAgICBuYW1lOiAn5LiK5aW95L2zJywKICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICBrZXk6ICcwLTEnLAogICAgICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICB9LAogICAgICB7CiAgICAgICAgaWQ6IDIsCiAgICAgICAgbmFtZTogJ+S6muWkquWcsOWMuicsCiAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgIGtleTogJzAtMicsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICB1c2VySWQ6ICdNZWluYScsCiAgICAgICAgICAgIG5hbWU6ICfnvo7lqJwnLAogICAgICAgICAgICBhbGlhczogJ291dCBvZiBib2R5IG1hc3RlcicsCiAgICAgICAgICAgIGtleTogJzAtMi0xJywKICAgICAgICAgICAgcG9zaXRpb246ICfpvJPlirHpg6jpl6gnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBpZDogMywKICAgICAgICAgICAgbmFtZTogJ+S4reWbvScsCiAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAga2V5OiAnMC0yLTInLAogICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGlkOiA0NCwKICAgICAgICAgICAgICAgIG5hbWU6ICflpKfkuK3ljY7ljLonLAogICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMScsCiAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsCiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ilv+S4ieaXl+mDqCcsCiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMScsCiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6JywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0xJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2FuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi40nLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEtMicsCiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgaWQ6IDYsCiAgICAgICAgICAgICAgICBuYW1lOiAn5Y2O5Y2X5Yy6JywKICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTInLAogICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgIGlkOiA3LAogICAgICAgICAgICAgICAgICAgIG5hbWU6ICfopb/pg6gnLAogICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEnLAogICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2FuZ2ppbmdrb25nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjeS6lTHnqbonLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYTFuZ2ppbmdrb25nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjeS6leepujEnLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMicsCiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGdlbkRhdGEpOwogIH0sIDEwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUzOiByZWYoWydNZWluYSddKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1tb2RhbC11c2VyIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgc2l6ZT0ibGFyZ2UiPjwvYS1tb2RhbC11c2VyPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IGdlbkRhdGEgPSBbewogIGlkOiAxLAogIG5hbWU6ICfmnKzlnLDnjq/looMt5q61JywKICBwYXJlbnRJZDogMCwKICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAga2V5OiAnMCcsCiAgY2hpbGRyZW46IFt7CiAgICBpZDogNTMsCiAgICB1c2VySWQ6ICdTaGFuZ0hhb2ppYScsCiAgICBuYW1lOiAn5LiK5aW95L2zJywKICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAga2V5OiAnMC0xJywKICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgcm9sZU5hbWU6ICfnrqHnkIblkZgnLAogICAgdHlwZTogJ3VzZXInLAogIH0sIHsKICAgIGlkOiAyLAogICAgbmFtZTogJ+S6muWkquWcsOWMuicsCiAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICBrZXk6ICcwLTInLAogICAgY2hpbGRyZW46IFt7CiAgICAgIGlkOiA1MSwKICAgICAgdXNlcklkOiAnTWVpbmEnLAogICAgICBuYW1lOiAn576O5aicJywKICAgICAgYWxpYXM6ICdvdXQgb2YgYm9keSBtYXN0ZXInLAogICAgICBrZXk6ICcwLTItMScsCiAgICAgIHBvc2l0aW9uOiAn6byT5Yqx6YOo6ZeoJywKICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgdHlwZTogJ3VzZXInLAogICAgfSwgewogICAgICBpZDogMywKICAgICAgbmFtZTogJ+S4reWbvScsCiAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAga2V5OiAnMC0yLTInLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBpZDogNDQsCiAgICAgICAgbmFtZTogJ+Wkp+S4reWNjuWMuicsCiAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgIGtleTogJzAtMi0yLTEnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgaWQ6IDUsCiAgICAgICAgICBuYW1lOiAn6KW/5LiJ5peX6YOoJywKICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgIGtleTogJzAtMi0yLTEtMScsCiAgICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6JywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0xJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfSwgewogICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYW5nJywKICAgICAgICAgICAgbmFtZTogJ+iLjScsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0yJywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH1dLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgaWQ6IDYsCiAgICAgICAgbmFtZTogJ+WNjuWNl+WMuicsCiAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgIGtleTogJzAtMi0yLTInLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgaWQ6IDcsCiAgICAgICAgICBuYW1lOiAn6KW/6YOoJywKICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgIGtleTogJzAtMi0yLTItMScsCiAgICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuN5LqVMeepuicsCiAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTItMS0xJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH0sIHsKICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgdXNlcklkOiAnQ2ExbmdqaW5na29uZycsCiAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqboxJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTInLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfV0sCiAgICAgICAgfV0sCiAgICAgIH1dLAogICAgfV0sCiAgfV0sCn1dOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFsnTWVpbmEnXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[n("div",null,[p(c,{api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i),size:"large"},null,8,["api","value"])])]),htmlCode:o(()=>[en]),jsVersionHtml:o(()=>[pn]),_:1},8,["jsfiddle"])}var un=k(on,[["render",cn]]);const ln=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",key:"0",type:"department",children:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",alias:"Irresistible teacher",key:"0-1",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",type:"user"},{id:2,name:"\u4E9A\u592A\u5730\u533A",key:"0-2",type:"department",children:[{id:51,userId:"Meina",name:"\u7F8E\u5A1C",alias:"out of body master",key:"0-2-1",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:3,name:"\u4E2D\u56FD",key:"0-2-2",type:"department",children:[{id:44,name:"\u5927\u4E2D\u534E\u533A",key:"0-2-2-1",type:"department",children:[{id:5,name:"\u897F\u4E09\u65D7\u90E8",key:"0-2-2-1-1",type:"department",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",key:"0-2-2-1-1-1",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Cang",name:"\u82CD",key:"0-2-2-1-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]},{id:6,name:"\u534E\u5357\u533A",type:"department",key:"0-2-2-2",children:[{id:7,name:"\u897F\u90E8",key:"0-2-2-2-1",type:"department",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",position:"\u9000\u4F11",key:"0-2-2-2-1-1",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Ca1ngjingkong",name:"\u82CD\u4E95\u7A7A1",key:"0-2-2-2-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]}]}]}]}],gn=({params:a,success:t})=>{console.log(a,"\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316"),setTimeout(()=>{t(ln)},100)},kn=A({setup(){return{value3:d([]),getSelectForOptions:gn}}}),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
    userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
    alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Cn(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"Radio.",cn:'`mode="radio"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>mode=&quot;radio&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Radio.</p>
`,order:0,title:{"zh-CN":"\u5355\u9009","en-US":"Radio"},relativePath:"components/modal-user/demo/radio.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIgOmFwaT0iZ2V0U2VsZWN0Rm9yT3B0aW9ucyIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiBtb2RlPSJyYWRpbyI+PC9hLW1vZGFsLXVzZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgZ2VuRGF0YTogYW55W10gPSBbCiAgewogICAgaWQ6IDEsCiAgICBuYW1lOiAn5pys5Zyw546v5aKDLeautScsCiAgICBrZXk6ICcwJywKICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICBpZDogNTMsCiAgICAgICAgdXNlcklkOiAnU2hhbmdIYW9qaWEnLAogICAgICAgIG5hbWU6ICfkuIrlpb3kvbMnLAogICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgIGtleTogJzAtMScsCiAgICAgICAgcG9zaXRpb246ICfljYPnpqfpg6jpl6gnLAogICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICAgIHJvbGVOYW1lOiAn566h55CG5ZGYJywKICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBpZDogMiwKICAgICAgICBuYW1lOiAn5Lqa5aSq5Zyw5Yy6JywKICAgICAgICBrZXk6ICcwLTInLAogICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ01laW5hJywKICAgICAgICAgICAgbmFtZTogJ+e+juWonCcsCiAgICAgICAgICAgIGFsaWFzOiAnb3V0IG9mIGJvZHkgbWFzdGVyJywKICAgICAgICAgICAga2V5OiAnMC0yLTEnLAogICAgICAgICAgICBwb3NpdGlvbjogJ+m8k+WKsemDqOmXqCcsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGlkOiAzLAogICAgICAgICAgICBuYW1lOiAn5Lit5Zu9JywKICAgICAgICAgICAga2V5OiAnMC0yLTInLAogICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgaWQ6IDQ0LAogICAgICAgICAgICAgICAgbmFtZTogJ+Wkp+S4reWNjuWMuicsCiAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xJywKICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICBpZDogNSwKICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6KW/5LiJ5peX6YOoJywKICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEnLAogICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqbonLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTEnLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYW5nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjScsCiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0yJywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZDogNiwKICAgICAgICAgICAgICAgIG5hbWU6ICfljY7ljZfljLonLAogICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMicsCiAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgaWQ6IDcsCiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ilv+mDqCcsCiAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xJywKICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6JywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2ExbmdqaW5na29uZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqboxJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTInLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHBhcmFtcywgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2cocGFyYW1zLCAn5LiL5ouJ6YWN572u5Yid5aeL5YyWJyk7CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFtdKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIgOmFwaT0iZ2V0U2VsZWN0Rm9yT3B0aW9ucyIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiBtb2RlPSJyYWRpbyI+PC9hLW1vZGFsLXVzZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgZ2VuRGF0YSA9IFt7CiAgaWQ6IDEsCiAgbmFtZTogJ+acrOWcsOeOr+Wigy3mrrUnLAogIGtleTogJzAnLAogIHR5cGU6ICdkZXBhcnRtZW50JywKICBjaGlsZHJlbjogW3sKICAgIGlkOiA1MywKICAgIHVzZXJJZDogJ1NoYW5nSGFvamlhJywKICAgIG5hbWU6ICfkuIrlpb3kvbMnLAogICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICBrZXk6ICcwLTEnLAogICAgcG9zaXRpb246ICfljYPnpqfpg6jpl6gnLAogICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICB0eXBlOiAndXNlcicsCiAgfSwgewogICAgaWQ6IDIsCiAgICBuYW1lOiAn5Lqa5aSq5Zyw5Yy6JywKICAgIGtleTogJzAtMicsCiAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICBjaGlsZHJlbjogW3sKICAgICAgaWQ6IDUxLAogICAgICB1c2VySWQ6ICdNZWluYScsCiAgICAgIG5hbWU6ICfnvo7lqJwnLAogICAgICBhbGlhczogJ291dCBvZiBib2R5IG1hc3RlcicsCiAgICAgIGtleTogJzAtMi0xJywKICAgICAgcG9zaXRpb246ICfpvJPlirHpg6jpl6gnLAogICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICB0eXBlOiAndXNlcicsCiAgICB9LCB7CiAgICAgIGlkOiAzLAogICAgICBuYW1lOiAn5Lit5Zu9JywKICAgICAga2V5OiAnMC0yLTInLAogICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGlkOiA0NCwKICAgICAgICBuYW1lOiAn5aSn5Lit5Y2O5Yy6JywKICAgICAgICBrZXk6ICcwLTItMi0xJywKICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICBpZDogNSwKICAgICAgICAgIG5hbWU6ICfopb/kuInml5fpg6gnLAogICAgICAgICAga2V5OiAnMC0yLTItMS0xJywKICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqbonLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTEnLAogICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9LCB7CiAgICAgICAgICAgIGlkOiAxNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuNJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTInLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfV0sCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICBpZDogNiwKICAgICAgICBuYW1lOiAn5Y2O5Y2X5Yy6JywKICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAga2V5OiAnMC0yLTItMicsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICBpZDogNywKICAgICAgICAgIG5hbWU6ICfopb/pg6gnLAogICAgICAgICAga2V5OiAnMC0yLTItMi0xJywKICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqbonLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMScsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9LCB7CiAgICAgICAgICAgIGlkOiAxNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhMW5namluZ2tvbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6MScsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTItMS0yJywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH1dLAogICAgICAgIH1dLAogICAgICB9XSwKICAgIH1dLAogIH1dLAp9XTsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoewogIHBhcmFtcywKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2cocGFyYW1zLCAn5LiL5ouJ6YWN572u5Yid5aeL5YyWJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGdlbkRhdGEpOwogIH0sIDEwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUzOiByZWYoW10pLAogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[p(c,{api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i),mode:"radio"},null,8,["api","value"])]),htmlCode:o(()=>[rn]),jsVersionHtml:o(()=>[In]),_:1},8,["jsfiddle"])}var An=k(kn,[["render",Cn]]);const dn=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",parentId:0,type:"department",key:"0",children:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",alias:"Irresistible teacher",key:"0-1",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",type:"user"},{id:2,name:"\u4E9A\u592A\u5730\u533A",type:"department",key:"0-2",children:[{id:51,userId:"Meina",name:"\u7F8E\u5A1C",alias:"out of body master",key:"0-2-1",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:3,name:"\u4E2D\u56FD",type:"department",key:"0-2-2",children:[{id:44,name:"\u5927\u4E2D\u534E\u533A",type:"department",key:"0-2-2-1",children:[{id:5,name:"\u897F\u4E09\u65D7\u90E8",type:"department",key:"0-2-2-1-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",key:"0-2-2-1-1-1",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Cang",name:"\u82CD",key:"0-2-2-1-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]},{id:6,name:"\u534E\u5357\u533A",type:"department",key:"0-2-2-2",children:[{id:7,name:"\u897F\u90E8",type:"department",key:"0-2-2-2-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E951\u7A7A",alias:"Irresistible teacher",position:"\u9000\u4F11",key:"0-2-2-2-1-1",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Ca1ngjingkong",name:"\u82CD\u4E95\u7A7A1",key:"0-2-2-2-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]}]}]}]}],mn=({params:a,success:t})=>{console.log(a,"\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316"),setTimeout(()=>{t(dn)},100)},hn=A({setup(){return{value3:d([]),getSelectForOptions:mn}}}),bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-alias"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-role-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-avatar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-alias"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-role-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-avatar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
    userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
    alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Zn(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"SimpleShow.",cn:"\u7B80\u5355\u663E\u793A\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7B80\u5355\u663E\u793A\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>SimpleShow.</p>
`,order:0,title:{"zh-CN":"\u7B80\u5355\u663E\u793A","en-US":"SimpleShow"},relativePath:"components/modal-user/demo/show.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICA6c2hvdy1hbGlhcz0iZmFsc2UiCiAgICA6c2hvdy1yb2xlLW5hbWU9ImZhbHNlIgogICAgOnNob3ctYXZhdGFyPSJmYWxzZSIKICA+PC9hLW1vZGFsLXVzZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IGdlbkRhdGE6IGFueVtdID0gWwogIHsKICAgIGlkOiAxLAogICAgbmFtZTogJ+acrOWcsOeOr+Wigy3mrrUnLAogICAgcGFyZW50SWQ6IDAsCiAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICBrZXk6ICcwJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICBpZDogNTMsCiAgICAgICAgdXNlcklkOiAnU2hhbmdIYW9qaWEnLAogICAgICAgIG5hbWU6ICfkuIrlpb3kvbMnLAogICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgIGtleTogJzAtMScsCiAgICAgICAgcG9zaXRpb246ICfljYPnpqfpg6jpl6gnLAogICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICAgIHJvbGVOYW1lOiAn566h55CG5ZGYJywKICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBpZDogMiwKICAgICAgICBuYW1lOiAn5Lqa5aSq5Zyw5Yy6JywKICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAga2V5OiAnMC0yJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ01laW5hJywKICAgICAgICAgICAgbmFtZTogJ+e+juWonCcsCiAgICAgICAgICAgIGFsaWFzOiAnb3V0IG9mIGJvZHkgbWFzdGVyJywKICAgICAgICAgICAga2V5OiAnMC0yLTEnLAogICAgICAgICAgICBwb3NpdGlvbjogJ+m8k+WKsemDqOmXqCcsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGlkOiAzLAogICAgICAgICAgICBuYW1lOiAn5Lit5Zu9JywKICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICBrZXk6ICcwLTItMicsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgaWQ6IDQ0LAogICAgICAgICAgICAgICAgbmFtZTogJ+Wkp+S4reWNjuWMuicsCiAgICAgICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xJywKICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICBpZDogNSwKICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6KW/5LiJ5peX6YOoJywKICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xJywKICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqbonLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTEnLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYW5nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjScsCiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0yJywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZDogNiwKICAgICAgICAgICAgICAgIG5hbWU6ICfljY7ljZfljLonLAogICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMicsCiAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgaWQ6IDcsCiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ilv+mDqCcsCiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTItMScsCiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6IuN5LqVMeepuicsCiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTItMS0xJywKICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxNTEsCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogJ0NhMW5namluZ2tvbmcnLAogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6MScsCiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTItMS0yJywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICAgICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+S4i+aLiemFjee9ruWIneWni+WMlicpOwoKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoZ2VuRGF0YSk7CiAgfSwgMTAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTM6IHJlZihbXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICA6c2hvdy1hbGlhcz0iZmFsc2UiCiAgICA6c2hvdy1yb2xlLW5hbWU9ImZhbHNlIgogICAgOnNob3ctYXZhdGFyPSJmYWxzZSIKICA+PC9hLW1vZGFsLXVzZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgZ2VuRGF0YSA9IFt7CiAgaWQ6IDEsCiAgbmFtZTogJ+acrOWcsOeOr+Wigy3mrrUnLAogIHBhcmVudElkOiAwLAogIHR5cGU6ICdkZXBhcnRtZW50JywKICBrZXk6ICcwJywKICBjaGlsZHJlbjogW3sKICAgIGlkOiA1MywKICAgIHVzZXJJZDogJ1NoYW5nSGFvamlhJywKICAgIG5hbWU6ICfkuIrlpb3kvbMnLAogICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICBrZXk6ICcwLTEnLAogICAgcG9zaXRpb246ICfljYPnpqfpg6jpl6gnLAogICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICB0eXBlOiAndXNlcicsCiAgfSwgewogICAgaWQ6IDIsCiAgICBuYW1lOiAn5Lqa5aSq5Zyw5Yy6JywKICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgIGtleTogJzAtMicsCiAgICBjaGlsZHJlbjogW3sKICAgICAgaWQ6IDUxLAogICAgICB1c2VySWQ6ICdNZWluYScsCiAgICAgIG5hbWU6ICfnvo7lqJwnLAogICAgICBhbGlhczogJ291dCBvZiBib2R5IG1hc3RlcicsCiAgICAgIGtleTogJzAtMi0xJywKICAgICAgcG9zaXRpb246ICfpvJPlirHpg6jpl6gnLAogICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICB0eXBlOiAndXNlcicsCiAgICB9LCB7CiAgICAgIGlkOiAzLAogICAgICBuYW1lOiAn5Lit5Zu9JywKICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICBrZXk6ICcwLTItMicsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGlkOiA0NCwKICAgICAgICBuYW1lOiAn5aSn5Lit5Y2O5Yy6JywKICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAga2V5OiAnMC0yLTItMScsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICBpZDogNSwKICAgICAgICAgIG5hbWU6ICfopb/kuInml5fpg6gnLAogICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAga2V5OiAnMC0yLTItMS0xJywKICAgICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqbonLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTEnLAogICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9LCB7CiAgICAgICAgICAgIGlkOiAxNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuNJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMS0xLTInLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfV0sCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICBpZDogNiwKICAgICAgICBuYW1lOiAn5Y2O5Y2X5Yy6JywKICAgICAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICAgICAga2V5OiAnMC0yLTItMicsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICBpZDogNywKICAgICAgICAgIG5hbWU6ICfopb/pg6gnLAogICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAga2V5OiAnMC0yLTItMi0xJywKICAgICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgICBpZDogNTEsCiAgICAgICAgICAgIHVzZXJJZDogJ0NhbmdqaW5na29uZycsCiAgICAgICAgICAgIG5hbWU6ICfoi43kupUx56m6JywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfSwgewogICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYTFuZ2ppbmdrb25nJywKICAgICAgICAgICAgbmFtZTogJ+iLjeS6leepujEnLAogICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMicsCiAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9XSwKICAgICAgICB9XSwKICAgICAgfV0sCiAgICB9XSwKICB9XSwKfV07Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+S4i+aLiemFjee9ruWIneWni+WMlicpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFtdKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(c,{api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i),"show-alias":!1,"show-role-name":!1,"show-avatar":!1},null,8,["api","value"])]),htmlCode:o(()=>[bn]),jsVersionHtml:o(()=>[yn]),_:1},8,["jsfiddle"])}var wn=k(hn,[["render",Zn]]);const Bn=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",parentId:0,type:"department",key:"0",children:[]}],vn=({params:a,success:t})=>{console.log(a,"\u83B7\u53D6\u5355\u4E2A\u8282\u70B9\u6570\u636E"),setTimeout(()=>{const u=L();t([{id:53,userId:"ShangHaojia",name:`\u4E0A${u.substring(0,2)}\u597D\u4F73`,alias:"Irresistible teacher",key:`${u}-0`,position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",type:"user",isLeaf:!0},{id:2,name:`\u4E9A${u.substring(u.length-4,u.length-2)}\u592A\u5730\u533A`,type:"department",key:`${u}-1`,children:[]}])},100)},Wn=({params:a,success:t})=>{console.log(a,"\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316"),setTimeout(()=>{t(Bn)},100)},Gn=A({setup(){return{value3:d([]),getSelectForOptions:Wn,getOneForOptions:vn}}}),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":load-api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getOneForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":virtual"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" uuid "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/shared'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getOneForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u83B7\u53D6\u5355\u4E2A\u8282\u70B9\u6570\u636E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" theUuid "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"uuid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4E0A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u597D\u4F73"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
        isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4E9A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("theUuid"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(" theUuid"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u592A\u5730\u533A"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      getOneForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":load-api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getOneForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":virtual"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" uuid "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/shared'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getOneForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u83B7\u53D6\u5355\u4E2A\u8282\u70B9\u6570\u636E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" theUuid "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"uuid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
      userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4E0A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u597D\u4F73"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
      isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4E9A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("theUuid"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(" theUuid"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u592A\u5730\u533A"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("theUuid"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      getOneForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function fn(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"Load.",cn:"\u8BBE\u7F6E `load-api` \u5373\u53EF\u3002\u4F46\u662F\u4E0D\u80FD\u865A\u62DF\u6EDA\u52A8\uFF0C\u56E0\u4E3A\u8FC7\u591A\u4E86\u6A2A\u5411\u663E\u793A\u4E0D\u5168\u3002key \u7684\u89C4\u5219\u8981\u6709\u5C42\u7EA7\u5173\u7CFB\uFF0C\u4E0D\u7136\u70B9\u51FB\u8282\u70B9\u4F1A\u9009\u4E0D\u4E2D\u5B50\u7EA7\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E <code>load-api</code> \u5373\u53EF\u3002\u4F46\u662F\u4E0D\u80FD\u865A\u62DF\u6EDA\u52A8\uFF0C\u56E0\u4E3A\u8FC7\u591A\u4E86\u6A2A\u5411\u663E\u793A\u4E0D\u5168\u3002key \u7684\u89C4\u5219\u8981\u6709\u5C42\u7EA7\u5173\u7CFB\uFF0C\u4E0D\u7136\u70B9\u51FB\u8282\u70B9\u4F1A\u9009\u4E0D\u4E2D\u5B50\u7EA7\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Load.</p>
`,order:0,title:{"zh-CN":"\u52A0\u8F7D\u6570\u636E","en-US":"Load"},relativePath:"components/modal-user/demo/load.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICA6bG9hZC1hcGk9ImdldE9uZUZvck9wdGlvbnMiCiAgICA6dmlydHVhbD0iZmFsc2UiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1dWlkIH0gZnJvbSAnQGZlNi9zaGFyZWQnOwoKY29uc3QgZ2VuRGF0YTogYW55W10gPSBbCiAgewogICAgaWQ6IDEsCiAgICBuYW1lOiAn5pys5Zyw546v5aKDLeautScsCiAgICBwYXJlbnRJZDogMCwKICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgIGtleTogJzAnLAogICAgY2hpbGRyZW46IFtdLAogIH0sCl07Cgpjb25zdCBnZXRPbmVGb3JPcHRpb25zID0gKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZyhwYXJhbXMsICfojrflj5bljZXkuKroioLngrnmlbDmja4nKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIGNvbnN0IHRoZVV1aWQgPSB1dWlkKCk7CiAgICBzdWNjZXNzKFsKICAgICAgewogICAgICAgIGlkOiA1MywKICAgICAgICB1c2VySWQ6ICdTaGFuZ0hhb2ppYScsCiAgICAgICAgbmFtZTogYOS4iiR7dGhlVXVpZC5zdWJzdHJpbmcoMCwgMil95aW95L2zYCwKICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICBrZXk6IGAke3RoZVV1aWR9LTBgLAogICAgICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgIGlzTGVhZjogdHJ1ZSwKICAgICAgfSwKICAgICAgewogICAgICAgIGlkOiAyLAogICAgICAgIG5hbWU6IGDkupoke3RoZVV1aWQuc3Vic3RyaW5nKHRoZVV1aWQubGVuZ3RoIC0gNCwgdGhlVXVpZC5sZW5ndGggLSAyKX3lpKrlnLDljLpgLAogICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICBrZXk6IGAke3RoZVV1aWR9LTFgLAogICAgICAgIGNoaWxkcmVuOiBbXSwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMCk7Cn07Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZyhwYXJhbXMsICfkuIvmi4nphY3nva7liJ3lp4vljJYnKTsKCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGdlbkRhdGEpOwogIH0sIDEwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUzOiByZWYoW10pLAogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBnZXRPbmVGb3JPcHRpb25zLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICA6bG9hZC1hcGk9ImdldE9uZUZvck9wdGlvbnMiCiAgICA6dmlydHVhbD0iZmFsc2UiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1dWlkIH0gZnJvbSAnQGZlNi9zaGFyZWQnOwpjb25zdCBnZW5EYXRhID0gW3sKICBpZDogMSwKICBuYW1lOiAn5pys5Zyw546v5aKDLeautScsCiAgcGFyZW50SWQ6IDAsCiAgdHlwZTogJ2RlcGFydG1lbnQnLAogIGtleTogJzAnLAogIGNoaWxkcmVuOiBbXSwKfV07Cgpjb25zdCBnZXRPbmVGb3JPcHRpb25zID0gKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+iOt+WPluWNleS4quiKgueCueaVsOaNricpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgY29uc3QgdGhlVXVpZCA9IHV1aWQoKTsKICAgIHN1Y2Nlc3MoW3sKICAgICAgaWQ6IDUzLAogICAgICB1c2VySWQ6ICdTaGFuZ0hhb2ppYScsCiAgICAgIG5hbWU6IGDkuIoke3RoZVV1aWQuc3Vic3RyaW5nKDAsIDIpfeWlveS9s2AsCiAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICBrZXk6IGAke3RoZVV1aWR9LTBgLAogICAgICBwb3NpdGlvbjogJ+WNg+emp+mDqOmXqCcsCiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgaXNMZWFmOiB0cnVlLAogICAgfSwgewogICAgICBpZDogMiwKICAgICAgbmFtZTogYOS6miR7dGhlVXVpZC5zdWJzdHJpbmcodGhlVXVpZC5sZW5ndGggLSA0LCB0aGVVdWlkLmxlbmd0aCAtIDIpfeWkquWcsOWMumAsCiAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAga2V5OiBgJHt0aGVVdWlkfS0xYCwKICAgICAgY2hpbGRyZW46IFtdLAogICAgfV0pOwogIH0sIDEwMCk7Cn07Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+S4i+aLiemFjee9ruWIneWni+WMlicpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMzogcmVmKFtdKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgZ2V0T25lRm9yT3B0aW9ucywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(c,{api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i),"load-api":a.getOneForOptions,virtual:!1},null,8,["api","value","load-api"])]),htmlCode:o(()=>[Ln]),jsVersionHtml:o(()=>[Fn]),_:1},8,["jsfiddle"])}var Jn=k(Gn,[["render",fn]]),y=[{key:"0",id:410,wxDepartmentId:1,name:"\u5FEB\u4E50\u9B54\u65F6",nameEn:"",parentId:0,children:[{key:"0-0",type:"department",id:411,wxDepartmentId:3,name:"\u9999\u62C9\u67D0\u9152\u5E971",nameEn:"",children:[{key:"0-0-0",type:"department",id:412,wxDepartmentId:4,name:"\u9152\u5E971\u9910\u996E\u90E8\u95E8",nameEn:"",children:[{key:"0-0-0-0",type:"user",isLeaf:!0,id:1222,userId:"SunJiaMin",name:"\u5B59\u4F73\u654F",alias:"",position:"",email:"",mobile:"18702180013",avatar:"http://wework.qpic.cn/bizmail/R2KgCcXlxxViazzgyCPZcsDWnMkOtI7BuTIkMm6yWBFsZtpA6JWujDQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[412]},{key:"0-0-0-1",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-0-0-2",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]}]},{key:"0-0-1",type:"user",isLeaf:!0,id:1216,userId:"cfe7385ed75ecd2d21112eb44b36ae7b",name:"Jia Wang",alias:"yamiyo",position:"\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u804C\u52A1\u6700\u591A\u5C55\u793A\u591A\u5C11\u4E2A\u5B57",email:"",mobile:"13466622785",avatar:"http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMfQiaNOic7rsPVw5fNfrNSTQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,411]},{key:"0-0-2",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-0-3",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-0-4",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]}]},{key:"0-1",type:"department",id:413,wxDepartmentId:11,name:"\u9999\u62C9\u67D0\u9152\u5E972",nameEn:"",children:[{key:"0-1-0",type:"department",id:414,wxDepartmentId:12,name:"\u9152\u5E972\u5BA2\u623F\u90E8\u95E8",nameEn:"",children:[{key:"0-1-0-0",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-1-0-1",type:"user",isLeaf:!0,id:1225,userId:"sharon",name:"\u5F20\u73B2",alias:"Sharon Zhang",position:"Manager\uFF0CDigital Marketing",email:"",mobile:"15201965685",avatar:"http://wework.qpic.cn/bizmail/zmJX1iaqtjkdpjEaJFtwe8Ooy7RKDLtNDoghxGtdzoicicaASdCXOgbHA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413,414]}]},{key:"0-1-1",type:"user",isLeaf:!0,id:1220,userId:"LiMengLong",name:"\u674E\u68A6\u9F99",alias:"",position:"",email:"",mobile:"13810902078",avatar:"https://wework.qpic.cn/wwpic/673861_W0FS2rxbTrODoLt_1649674485/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413]},{key:"0-1-2",type:"user",isLeaf:!0,id:1226,userId:"ec1125fea3cfbd2cf1e903b462889d6d",name:"\u9646\u78A7\u4E91\uFF08Ruby\uFF09",alias:"Ruby",position:"XXX\u7ECF\u7406",email:"",mobile:"15021486796",avatar:"http://wework.qpic.cn/wwhead/duc2TvpEgSQykrhF5Jh51Hibiam7jBY1QfbhVy73yVpOoibibcMZTUjxY6BlCkDPdp4f1nSmib2DmDUo/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,413]},{key:"0-1-3",type:"user",isLeaf:!0,id:1233,userId:"ChenXiXi",name:"\u9648\u831C\u831C",alias:"",position:"",email:"",mobile:"18002288680",avatar:"http://wework.qpic.cn/bizmail/9icpBHlHJ1AHFCLPP76zdxq3AFuu8lrVIt6Pgo25OGO8jyrQgfHQ8iaQ/0",roleName:"ddd",roleCode:"",departmentId:[413]},{key:"0-1-4",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-1-5",type:"user",isLeaf:!0,id:1221,userId:"ZhangHaiHui",name:"\u5F20\u6D77\u8F89",alias:"\u6D3B\u52A8\u65F6",position:"",email:"",mobile:"13826426062",avatar:"http://wework.qpic.cn/bizmail/Oibs2biaQL9tf6LvUasfb6UgYmq4znnJebbxFzSNtGUZ4DTXfticMUUKg/0",roleName:"\u90E8\u95E8\u7BA1\u7406\u5458",roleCode:"department_admin",departmentId:[413]},{key:"0-1-6",type:"user",isLeaf:!0,id:1225,userId:"sharon",name:"\u5F20\u73B2",alias:"Sharon Zhang",position:"Manager\uFF0CDigital Marketing",email:"",mobile:"15201965685",avatar:"http://wework.qpic.cn/bizmail/zmJX1iaqtjkdpjEaJFtwe8Ooy7RKDLtNDoghxGtdzoicicaASdCXOgbHA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413,414]},{key:"0-1-7",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]}]},{key:"0-2",type:"department",id:415,wxDepartmentId:13,name:"\u90E8\u95E83-GSO",nameEn:"",children:[{key:"0-2-0",type:"user",isLeaf:!0,id:1227,userId:"WangJia",name:"\u738B\u4F73",alias:"",position:"",email:"",mobile:"18618110037",avatar:"http://wework.qpic.cn/bizmail/FNEmkLVDia0PrYDIecE3KsXXVAY5o5Y9RqVP4DLpjYe0AuAcZRIiaicLg/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[415]},{key:"0-2-1",type:"user",isLeaf:!0,id:1228,userId:"BeiFengNuan",name:"\u5317\u98CE\u6696",alias:"",position:"\u534E\u5317\u533A\u8D1F\u8D23\u4EBA",email:"",mobile:"13249392000",avatar:"http://wework.qpic.cn/bizmail/ic4dN4XlOX5ZJxyibHb4GZ3TT0RMmSD69kCOMYLE5khibw5Kkc5xAnDZw/0",roleName:"\u90E8\u95E8\u7BA1\u7406\u5458",roleCode:"department_admin",departmentId:[415]},{key:"0-2-2",type:"user",isLeaf:!0,id:1229,userId:"vicky",name:"\u6A0A\u7EF4\u5A67",alias:"\u6D66\u4E1C\u9999\u683C\u91CC\u62C9Vicky Fan",position:"Managers , Digital Marketing, China Marketing",email:"",mobile:"18516089093",avatar:"http://wework.qpic.cn/bizmail/WNaprWKRiaLyib66KibHiazibPe9ib3417D7xkfmQf6vtRG4Vlgbkib72vN3w/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[415]}]},{key:"0-3",type:"department",id:416,wxDepartmentId:14,name:"\u9152\u5E973",nameEn:"",children:[{key:"0-3-0",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]}]},{key:"0-4",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]},{key:"0-5",type:"user",isLeaf:!0,id:1216,userId:"cfe7385ed75ecd2d21112eb44b36ae7b",name:"Jia Wang",alias:"yamiyo",position:"\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u804C\u52A1\u6700\u591A\u5C55\u793A\u591A\u5C11\u4E2A\u5B57",email:"",mobile:"13466622785",avatar:"http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMfQiaNOic7rsPVw5fNfrNSTQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,411]},{key:"0-6",type:"user",isLeaf:!0,id:1217,userId:"foxglove",name:"\u4E01\u654F",alias:"Min Ding",position:"Manager, Product Design, TDC",email:"",mobile:"17681448860",avatar:"http://wework.qpic.cn/bizmail/HY6zhH2HA5loORgvPAPxnKicdAD8UNvdvRtzzQLqicffuVaLITFicaU8w/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-7",type:"user",isLeaf:!0,id:1218,userId:"Jingjingzhou",name:"\u5468\u9759",alias:"\u6D66\u4E1C\u9999\u683C\u91CC\u62C9 Jing Zhou",position:"AVP, Digital Marketing, China Marketing",email:"jing.zhou@shangri-la.com",mobile:"13917667875",avatar:"https://wework.qpic.cn/wwhead/duc2TvpEgSSdsPInfahzx3ptwPMQibSLWTiaHyHA21MJzNyiaydYJn8FC7lsL66KxjTlA7VtovcrYs/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-8",type:"user",isLeaf:!0,id:1219,userId:"rc",name:"RC",alias:"Raymond CW Chan",position:"Manager, Strategy & Business Transformation",email:"",mobile:"",avatar:"http://wework.qpic.cn/bizmail/wCTZ6QugWZt025mlSry2RWpUMuaXbKSr6x1BDicrXPEA3hCIryT0libA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-9",type:"user",isLeaf:!0,id:1223,userId:"WuXiaoXiang",name:"\u5434\u5C0F\u7FD4",alias:"",position:"",email:"",mobile:"13533909197",avatar:"https://wework.qpic.cn/bizmail/J1kzFSTuMgvpQhuZTjFVh9rbXX2ShGQ3RpRriaa2dW7c4Zactzk9Sibw/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-10",type:"user",isLeaf:!0,id:1226,userId:"ec1125fea3cfbd2cf1e903b462889d6d",name:"\u9646\u78A7\u4E91\uFF08Ruby\uFF09",alias:"Ruby",position:"XXX\u7ECF\u7406",email:"",mobile:"15021486796",avatar:"http://wework.qpic.cn/wwhead/duc2TvpEgSQykrhF5Jh51Hibiam7jBY1QfbhVy73yVpOoibibcMZTUjxY6BlCkDPdp4f1nSmib2DmDUo/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,413]},{key:"0-11",type:"user",isLeaf:!0,id:1230,userId:"SunJinQuan",name:"\u5B59\u91D1\u6743",alias:"",position:"",email:"",mobile:"18514236526",avatar:"https://wework.qpic.cn/bizmail/SfOaaCWFK9cmPzzia3Fhu6RFNPiattcuicH9v75Cb2z5m0IicuAnQ5JYlw/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410]},{key:"0-12",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-13",type:"user",isLeaf:!0,id:1234,userId:"caijinyi",name:"\u8521\u9526\u4EEA",alias:"",position:"",email:"",mobile:"17329968874",avatar:"https://wework.qpic.cn/wwpic/443916_DCjWfYryTmGXbNU_1649838419/0",roleName:"",roleCode:"",departmentId:[410]},{key:"0-14",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-15",type:"user",isLeaf:!0,id:1236,userId:"LiHui",name:"\u674E\u8F89",alias:"",position:"\u4EA7\u54C1\u7ECF\u7406",email:"",mobile:"13011805800",avatar:"http://wework.qpic.cn/bizmail/1jPj8jNh00NQv8yUky9icB5lT29oibek3Cib3ibxxCmJcapIDiakibUObZag/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410]}]}];console.log(y,"\u4E0B\u62C9\u6570\u636E");const Yn=({success:a})=>{setTimeout(()=>{console.log(y,"\u63A5\u53E3\u8BF7\u6C42\u6210\u529F"),a(y)},100)},Xn=A({setup(){return{mode:d("radio"),value3:d(["wlw"]),getSelectForOptions:Yn,handleOk:a=>{F.success(`\u60A8\u9009\u4E2D\u7684\uFF1A ${a.value}`)}}}}),Nn=s("\u591A\u9009"),En=s("\u5355\u9009"),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio-group")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mode"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkbox"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u591A\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5355\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio-group")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
      `),n("span",{class:"token attr-name"},":mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mode"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleOk"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" genData "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./data1'"),n("span",{class:"token punctuation"},";"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u6570\u636E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u63A5\u53E3\u8BF7\u6C42\u6210\u529F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'wlw'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"handleOk"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("selectKeys"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u60A8\u9009\u4E2D\u7684\uFF1A "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("selectKeys"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio-group")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mode"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkbox"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u591A\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5355\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio-group")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
      `),n("span",{class:"token attr-name"},":mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mode"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleOk"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" genData "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./data1'"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u6570\u636E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u63A5\u53E3\u8BF7\u6C42\u6210\u529F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'radio'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'wlw'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"handleOk"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"selectKeys"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u60A8\u9009\u4E2D\u7684\uFF1A "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("selectKeys"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Dn(a,t,u,r,I,C){const c=e("a-radio"),l=e("a-radio-group"),i=e("a-modal-user"),b=e("demo-box");return g(),m(b,{jsfiddle:{us:"Mode.",cn:"Mode\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Mode\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Mode.</p>
`,order:0,title:{"zh-CN":"\u6A21\u5F0F","en-US":"Mode usage"},relativePath:"components/modal-user/demo/mode.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8ZGl2PgogICAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJtb2RlIj4KICAgICAgICA8YS1yYWRpbyB2YWx1ZT0iY2hlY2tib3giPuWkmumAiTwvYS1yYWRpbz4KICAgICAgICA8YS1yYWRpbyB2YWx1ZT0icmFkaW8iPuWNlemAiTwvYS1yYWRpbz4KICAgICAgPC9hLXJhZGlvLWdyb3VwPgogICAgPC9kaXY+CiAgICA8YS1tb2RhbC11c2VyCiAgICAgIDptb2RlPSJtb2RlIgogICAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICAgIEBvaz0iaGFuZGxlT2siCiAgICA+PC9hLW1vZGFsLXVzZXI+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IGdlbkRhdGEgZnJvbSAnLi9kYXRhMSc7Cgpjb25zb2xlLmxvZyhnZW5EYXRhLCAn5LiL5ouJ5pWw5o2uJyk7Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBjb25zb2xlLmxvZyhnZW5EYXRhLCAn5o6l5Y+j6K+35rGC5oiQ5YqfJyk7CiAgICBzdWNjZXNzKGdlbkRhdGEpOwogIH0sIDEwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgbW9kZTogcmVmKCdyYWRpbycpLAogICAgICB2YWx1ZTM6IHJlZihbJ3dsdyddKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgaGFuZGxlT2s6IChzZWxlY3RLZXlzOiBhbnkpID0+IHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYOaCqOmAieS4reeahO+8miAke3NlbGVjdEtleXMudmFsdWV9YCk7CiAgICAgIH0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8ZGl2PgogICAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJtb2RlIj4KICAgICAgICA8YS1yYWRpbyB2YWx1ZT0iY2hlY2tib3giPuWkmumAiTwvYS1yYWRpbz4KICAgICAgICA8YS1yYWRpbyB2YWx1ZT0icmFkaW8iPuWNlemAiTwvYS1yYWRpbz4KICAgICAgPC9hLXJhZGlvLWdyb3VwPgogICAgPC9kaXY+CiAgICA8YS1tb2RhbC11c2VyCiAgICAgIDptb2RlPSJtb2RlIgogICAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICAgIEBvaz0iaGFuZGxlT2siCiAgICA+PC9hLW1vZGFsLXVzZXI+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IGdlbkRhdGEgZnJvbSAnLi9kYXRhMSc7CmNvbnNvbGUubG9nKGdlbkRhdGEsICfkuIvmi4nmlbDmja4nKTsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIGNvbnNvbGUubG9nKGdlbkRhdGEsICfmjqXlj6Por7fmsYLmiJDlip8nKTsKICAgIHN1Y2Nlc3MoZ2VuRGF0YSk7CiAgfSwgMTAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBtb2RlOiByZWYoJ3JhZGlvJyksCiAgICAgIHZhbHVlMzogcmVmKFsnd2x3J10pLAogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBoYW5kbGVPazogc2VsZWN0S2V5cyA9PiB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGDmgqjpgInkuK3nmoTvvJogJHtzZWxlY3RLZXlzLnZhbHVlfWApOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[n("div",null,[n("div",null,[p(l,{value:a.mode,"onUpdate:value":t[0]||(t[0]=h=>a.mode=h)},{default:o(()=>[p(c,{value:"checkbox"},{default:o(()=>[Nn]),_:1}),p(c,{value:"radio"},{default:o(()=>[En]),_:1})]),_:1},8,["value"])]),p(i,{mode:a.mode,api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[1]||(t[1]=h=>a.value3=h),onOk:a.handleOk},null,8,["mode","api","value","onOk"])])]),htmlCode:o(()=>[Kn]),jsVersionHtml:o(()=>[Hn]),_:1},8,["jsfiddle"])}var Vn=k(Xn,[["render",Dn]]);const Rn=[{id:1,name:"\u672C\u5730\u73AF\u5883-\u6BB5",parentId:0,type:"department",key:"0",children:[{id:53,userId:"ShangHaojia",name:"\u4E0A\u597D\u4F73",alias:"Irresistible teacher",key:"0-1",position:"\u5343\u79A7\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u7BA1\u7406\u5458",type:"user"},{id:2,name:"\u4E9A\u592A\u5730\u533A",type:"department",key:"0-2",children:[{id:51,userId:"Meina",name:"\u7F8E\u5A1C",alias:"out of body master",key:"0-2-1",position:"\u9F13\u52B1\u90E8\u95E8",avatar:"https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:3,name:"\u4E2D\u56FD",type:"department",key:"0-2-2",children:[{id:44,name:"\u5927\u4E2D\u534E\u533A",type:"department",key:"0-2-2-1",children:[{id:5,name:"\u897F\u4E09\u65D7\u90E8",type:"department",key:"0-2-2-1-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E95\u7A7A",alias:"Irresistible teacher",key:"0-2-2-1-1-1",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Cang",name:"\u82CD",key:"0-2-2-1-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]},{id:6,name:"\u534E\u5357\u533A",type:"department",key:"0-2-2-2",children:[{id:7,name:"\u897F\u90E8",type:"department",key:"0-2-2-2-1",children:[{id:51,userId:"Cangjingkong",name:"\u82CD\u4E951\u7A7A",alias:"Irresistible teacher",position:"\u9000\u4F11",key:"0-2-2-2-1-1",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"},{id:151,userId:"Ca1ngjingkong",name:"\u82CD\u4E95\u7A7A1",key:"0-2-2-2-1-2",alias:"Irresistible teacher",position:"\u9000\u4F11",avatar:"http://water.chjgo.com/assets/logo.20db40aa.png",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",type:"user"}]}]}]}]}]}],Sn=({params:a,success:t})=>{console.log(a,"\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316"),setTimeout(()=>{t(Rn)},100)},zn=A({setup(){return{value3:d([]),getSelectForOptions:Sn}}}),On=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":repeatable-check"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
    parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
                name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
                children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                  `),n("span",{class:"token punctuation"},"{"),s(`
                    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
                    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
                    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
                    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
                    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"{"),s(`
                        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
                        userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
                        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
                        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
                        alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
                        position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
                        avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
                        roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
                        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-user")]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":repeatable-check"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-user")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u672C\u5730\u73AF\u5883-\u6BB5'"),n("span",{class:"token punctuation"},","),s(`
  parentId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"53"),n("span",{class:"token punctuation"},","),s(`
    userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ShangHaojia'"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u597D\u4F73'"),n("span",{class:"token punctuation"},","),s(`
    alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
    position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5343\u79A7\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
    roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E9A\u592A\u5730\u533A'"),n("span",{class:"token punctuation"},","),s(`
    type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
      userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Meina'"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7F8E\u5A1C'"),n("span",{class:"token punctuation"},","),s(`
      alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'out of body master'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-1'"),n("span",{class:"token punctuation"},","),s(`
      position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9F13\u52B1\u90E8\u95E8'"),n("span",{class:"token punctuation"},","),s(`
      avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://cdn.test.fanzhi.cn/material/b/image/common/fanzhilogo-c.svg'"),n("span",{class:"token punctuation"},","),s(`
      roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E2D\u56FD'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"44"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u4E2D\u534E\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u4E09\u65D7\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cang'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u534E\u5357\u533A'"),n("span",{class:"token punctuation"},","),s(`
        type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u897F\u90E8'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'department'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1'"),n("span",{class:"token punctuation"},","),s(`
          children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cangjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E951\u7A7A'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-1'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"151"),n("span",{class:"token punctuation"},","),s(`
            userId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Ca1ngjingkong'"),n("span",{class:"token punctuation"},","),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u82CD\u4E95\u7A7A1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-2-2-1-2'"),n("span",{class:"token punctuation"},","),s(`
            alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Irresistible teacher'"),n("span",{class:"token punctuation"},","),s(`
            position`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9000\u4F11'"),n("span",{class:"token punctuation"},","),s(`
            avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://water.chjgo.com/assets/logo.20db40aa.png'"),n("span",{class:"token punctuation"},","),s(`
            roleName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8D85\u7EA7\u7BA1\u7406\u5458'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u914D\u7F6E\u521D\u59CB\u5316'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Tn(a,t,u,r,I,C){const c=e("a-modal-user"),l=e("demo-box");return g(),m(l,{jsfiddle:{us:"`repeatableCheck=false`",cn:"`repeatable-check=false` \u7684\u65F6\u5019\u6839\u636E fieldNames.value \u5B57\u6BB5\u5224\u65AD\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u52FE\u9009\u91CD\u590D\u7684\u7528\u6237\uFF0C\u52FE\u9009\u7684\u6570\u636E\u4E2D\u4F1A\u6709\u91CD\u590D\u7684\u6570\u636E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>repeatable-check=false</code> \u7684\u65F6\u5019\u6839\u636E fieldNames.value \u5B57\u6BB5\u5224\u65AD\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u52FE\u9009\u91CD\u590D\u7684\u7528\u6237\uFF0C\u52FE\u9009\u7684\u6570\u636E\u4E2D\u4F1A\u6709\u91CD\u590D\u7684\u6570\u636E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>repeatableCheck=false</code></p>
`,order:0,title:{"zh-CN":"\u4E0D\u91CD\u590D\u52FE\u9009","en-US":"RepeatableCheck"},relativePath:"components/modal-user/demo/repeatable-check.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICA6cmVwZWF0YWJsZS1jaGVjaz0iZmFsc2UiCiAgPjwvYS1tb2RhbC11c2VyPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBnZW5EYXRhOiBhbnlbXSA9IFsKICB7CiAgICBpZDogMSwKICAgIG5hbWU6ICfmnKzlnLDnjq/looMt5q61JywKICAgIHBhcmVudElkOiAwLAogICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAga2V5OiAnMCcsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgaWQ6IDUzLAogICAgICAgIHVzZXJJZDogJ1NoYW5nSGFvamlhJywKICAgICAgICBuYW1lOiAn5LiK5aW95L2zJywKICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICBrZXk6ICcwLTEnLAogICAgICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgICByb2xlTmFtZTogJ+euoeeQhuWRmCcsCiAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICB9LAogICAgICB7CiAgICAgICAgaWQ6IDIsCiAgICAgICAgbmFtZTogJ+S6muWkquWcsOWMuicsCiAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgIGtleTogJzAtMicsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICB1c2VySWQ6ICdNZWluYScsCiAgICAgICAgICAgIG5hbWU6ICfnvo7lqJwnLAogICAgICAgICAgICBhbGlhczogJ291dCBvZiBib2R5IG1hc3RlcicsCiAgICAgICAgICAgIGtleTogJzAtMi0xJywKICAgICAgICAgICAgcG9zaXRpb246ICfpvJPlirHpg6jpl6gnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi50ZXN0LmZhbnpoaS5jbi9tYXRlcmlhbC9iL2ltYWdlL2NvbW1vbi9mYW56aGlsb2dvLWMuc3ZnJywKICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBpZDogMywKICAgICAgICAgICAgbmFtZTogJ+S4reWbvScsCiAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAga2V5OiAnMC0yLTInLAogICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGlkOiA0NCwKICAgICAgICAgICAgICAgIG5hbWU6ICflpKfkuK3ljY7ljLonLAogICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAga2V5OiAnMC0yLTItMScsCiAgICAgICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsCiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ilv+S4ieaXl+mDqCcsCiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMScsCiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6JywKICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0xJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2FuZycsCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfoi40nLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0xLTEtMicsCiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgaWQ6IDYsCiAgICAgICAgICAgICAgICBuYW1lOiAn5Y2O5Y2X5Yy6JywKICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgIGtleTogJzAtMi0yLTInLAogICAgICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgIGlkOiA3LAogICAgICAgICAgICAgICAgICAgIG5hbWU6ICfopb/pg6gnLAogICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEnLAogICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1MSwKICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAnQ2FuZ2ppbmdrb25nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjeS6lTHnqbonLAogICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6ICdDYTFuZ2ppbmdrb25nJywKICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+iLjeS6leepujEnLAogICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTItMi0yLTEtMicsCiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly93YXRlci5jaGpnby5jb20vYXNzZXRzL2xvZ28uMjBkYjQwYWEucG5nJywKICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6ICfotoXnuqfnrqHnkIblkZgnLAogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsCiAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZyhwYXJhbXMsICfkuIvmi4nphY3nva7liJ3lp4vljJYnKTsKCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGdlbkRhdGEpOwogIH0sIDEwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUzOiByZWYoW10pLAogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLW1vZGFsLXVzZXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICA6cmVwZWF0YWJsZS1jaGVjaz0iZmFsc2UiCiAgPjwvYS1tb2RhbC11c2VyPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IGdlbkRhdGEgPSBbewogIGlkOiAxLAogIG5hbWU6ICfmnKzlnLDnjq/looMt5q61JywKICBwYXJlbnRJZDogMCwKICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAga2V5OiAnMCcsCiAgY2hpbGRyZW46IFt7CiAgICBpZDogNTMsCiAgICB1c2VySWQ6ICdTaGFuZ0hhb2ppYScsCiAgICBuYW1lOiAn5LiK5aW95L2zJywKICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAga2V5OiAnMC0xJywKICAgIHBvc2l0aW9uOiAn5Y2D56an6YOo6ZeoJywKICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnRlc3QuZmFuemhpLmNuL21hdGVyaWFsL2IvaW1hZ2UvY29tbW9uL2ZhbnpoaWxvZ28tYy5zdmcnLAogICAgcm9sZU5hbWU6ICfnrqHnkIblkZgnLAogICAgdHlwZTogJ3VzZXInLAogIH0sIHsKICAgIGlkOiAyLAogICAgbmFtZTogJ+S6muWkquWcsOWMuicsCiAgICB0eXBlOiAnZGVwYXJ0bWVudCcsCiAgICBrZXk6ICcwLTInLAogICAgY2hpbGRyZW46IFt7CiAgICAgIGlkOiA1MSwKICAgICAgdXNlcklkOiAnTWVpbmEnLAogICAgICBuYW1lOiAn576O5aicJywKICAgICAgYWxpYXM6ICdvdXQgb2YgYm9keSBtYXN0ZXInLAogICAgICBrZXk6ICcwLTItMScsCiAgICAgIHBvc2l0aW9uOiAn6byT5Yqx6YOo6ZeoJywKICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udGVzdC5mYW56aGkuY24vbWF0ZXJpYWwvYi9pbWFnZS9jb21tb24vZmFuemhpbG9nby1jLnN2ZycsCiAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgdHlwZTogJ3VzZXInLAogICAgfSwgewogICAgICBpZDogMywKICAgICAgbmFtZTogJ+S4reWbvScsCiAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAga2V5OiAnMC0yLTInLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBpZDogNDQsCiAgICAgICAgbmFtZTogJ+Wkp+S4reWNjuWMuicsCiAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgIGtleTogJzAtMi0yLTEnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgaWQ6IDUsCiAgICAgICAgICBuYW1lOiAn6KW/5LiJ5peX6YOoJywKICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgIGtleTogJzAtMi0yLTEtMScsCiAgICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuN5LqV56m6JywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0xJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfSwgewogICAgICAgICAgICBpZDogMTUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYW5nJywKICAgICAgICAgICAgbmFtZTogJ+iLjScsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTEtMS0yJywKICAgICAgICAgICAgYWxpYXM6ICdJcnJlc2lzdGlibGUgdGVhY2hlcicsCiAgICAgICAgICAgIHBvc2l0aW9uOiAn6YCA5LyRJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH1dLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgaWQ6IDYsCiAgICAgICAgbmFtZTogJ+WNjuWNl+WMuicsCiAgICAgICAgdHlwZTogJ2RlcGFydG1lbnQnLAogICAgICAgIGtleTogJzAtMi0yLTInLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgaWQ6IDcsCiAgICAgICAgICBuYW1lOiAn6KW/6YOoJywKICAgICAgICAgIHR5cGU6ICdkZXBhcnRtZW50JywKICAgICAgICAgIGtleTogJzAtMi0yLTItMScsCiAgICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgICAgaWQ6IDUxLAogICAgICAgICAgICB1c2VySWQ6ICdDYW5namluZ2tvbmcnLAogICAgICAgICAgICBuYW1lOiAn6IuN5LqVMeepuicsCiAgICAgICAgICAgIGFsaWFzOiAnSXJyZXNpc3RpYmxlIHRlYWNoZXInLAogICAgICAgICAgICBwb3NpdGlvbjogJ+mAgOS8kScsCiAgICAgICAgICAgIGtleTogJzAtMi0yLTItMS0xJywKICAgICAgICAgICAgYXZhdGFyOiAnaHR0cDovL3dhdGVyLmNoamdvLmNvbS9hc3NldHMvbG9nby4yMGRiNDBhYS5wbmcnLAogICAgICAgICAgICByb2xlTmFtZTogJ+i2hee6p+euoeeQhuWRmCcsCiAgICAgICAgICAgIHR5cGU6ICd1c2VyJywKICAgICAgICAgIH0sIHsKICAgICAgICAgICAgaWQ6IDE1MSwKICAgICAgICAgICAgdXNlcklkOiAnQ2ExbmdqaW5na29uZycsCiAgICAgICAgICAgIG5hbWU6ICfoi43kupXnqboxJywKICAgICAgICAgICAga2V5OiAnMC0yLTItMi0xLTInLAogICAgICAgICAgICBhbGlhczogJ0lycmVzaXN0aWJsZSB0ZWFjaGVyJywKICAgICAgICAgICAgcG9zaXRpb246ICfpgIDkvJEnLAogICAgICAgICAgICBhdmF0YXI6ICdodHRwOi8vd2F0ZXIuY2hqZ28uY29tL2Fzc2V0cy9sb2dvLjIwZGI0MGFhLnBuZycsCiAgICAgICAgICAgIHJvbGVOYW1lOiAn6LaF57qn566h55CG5ZGYJywKICAgICAgICAgICAgdHlwZTogJ3VzZXInLAogICAgICAgICAgfV0sCiAgICAgICAgfV0sCiAgICAgIH1dLAogICAgfV0sCiAgfV0sCn1dOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZyhwYXJhbXMsICfkuIvmi4nphY3nva7liJ3lp4vljJYnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoZ2VuRGF0YSk7CiAgfSwgMTAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTM6IHJlZihbXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(c,{api:a.getSelectForOptions,value:a.value3,"onUpdate:value":t[0]||(t[0]=i=>a.value3=i),"repeatable-check":!1},null,8,["api","value"])]),htmlCode:o(()=>[On]),jsVersionHtml:o(()=>[jn]),_:1},8,["jsfiddle"])}var Mn=k(zn,[["render",Tn]]);const xn=A({CN:E,US:S,components:{Basic:U,Field:sn,Size:un,Radio:An,RepeatableCheck:Mn,Show:wn,Load:Jn,Mode:Vn}});function Un(a,t,u,r,I,C){const c=e("Basic"),l=e("Field"),i=e("Radio"),b=e("Size"),h=e("Show"),B=e("RepeatableCheck"),v=e("Load"),W=e("Mode"),G=e("demo-sort");return g(),m(G,null,{default:o(()=>[p(c),p(l),p(i),p(b),p(h),p(B),p(v),p(W)]),_:1})}var Pn=k(xn,[["render",Un]]);export{Pn as default};

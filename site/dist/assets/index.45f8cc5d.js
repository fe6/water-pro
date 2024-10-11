import{J as g,E as v,cb as w,d as I,aq as e,bN as m,bO as t,G as n,e as c,H as a,k as h,n as Z,bP as y}from"./vendor.0f0e4632.js";import{_ as C,b,c as f}from"./index.f6b32fa6.js";const N={pageData:{title:"ModalPro",description:"",frontmatter:{category:"Components",type:"\u53CD\u9988",title:"ModalPro",subtitle:"\u5BF9\u8BDD\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 `Modal` \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002"},{level:2,title:"API",slug:"API",content:""},{level:2,title:"Slots",slug:"Slots",content:""},{level:2,title:"ModalMethods \u4E2D\u7684\u65B9\u6CD5",slug:"ModalMethods-\u4E2D\u7684\u65B9\u6CD5",content:""}],relativePath:"components/modal-pro/index.zh-CN.md",content:`
\u6A21\u6001\u5BF9\u8BDD\u6846\u3002\u901A\u8FC7 \`useModal\` \u66F4\u5FEB\u6377\u7684\u4F7F\u7528\u3002\u81EA\u5E26\u62D6\u62FD\u529F\u80FD\uFF0C\u66F4\u597D\u7528.

## \u4F55\u65F6\u4F7F\u7528

\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`Modal\` \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002

## API

| \u53C2\u6570              | \u8BF4\u660E                                  | \u7C7B\u578B           | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ----------------- | ------------------------------------- | -------------- | ------ | ---- |
| defaultFullscreen | \u662F\u5426\u5168\u5C4F                              | boolean        | -      |      |
| canFullscreen     | \u662F\u5426\u5168\u5C4F\u6309\u94AE                          | boolean        | -      |      |
| bodyStyle         | \u5185\u5BB9\u7684\u6837\u5F0F                            | object         | -      |      |
| minHeight         | \u5185\u5BB9\u7684\u6700\u5C0F\u9AD8\u5EA6                        | number         | -      |      |
| scrollStyle       | \u6EDA\u52A8\u5185\u5BB9\u7684\u6837\u5F0F                        | object         | -      |      |
| width             | \u5185\u5BB9\u7684\u5BBD\u5EA6                            | number         | -      |      |
| title             | \u5F39\u6846\u6807\u9898\uFF0C \u4E3A \`null\` \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898 | string \\| null | -      |      |
| text              | \u6807\u9898\u8FB9\u4E0A\u7684\u5E2E\u52A9\u63D0\u793A                    | string         | -      |      |
| loadingTip        | \u5185\u5BB9\u533A\u57DF\u52A0\u8F7D\u7684\u6587\u6848                    | string         | -      |      |
| loading           | \u5185\u5BB9\u533A\u57DF\u662F\u5426\u52A0\u8F7D                      | boolean        | -      |      |

## Slots

| \u65B9\u6CD5\u540D\u79F0 | \u8BF4\u660E       |
| -------- | ---------- |
| header   | \u5934\u90E8\u81EA\u5B9A\u4E49 |
| footer   | \u5E95\u90E8\u81EA\u5B9A\u4E49 |
| close    | \u5173\u95ED\u81EA\u5B9A\u4E49 |

## ModalMethods \u4E2D\u7684\u65B9\u6CD5

| \u65B9\u6CD5\u540D\u79F0        | \u8BF4\u660E                                                |
| --------------- | --------------------------------------------------- |
| setModalProps   | \u8BBE\u7F6E Modal Pro \u5C5E\u6027                                 |
| getVisible      | \u83B7\u53D6\u5F39\u6846\u663E\u793A\u72B6\u6001                                    |
| redoModalHeight | \u8BBE\u7F6E\u5F39\u6846\u6574\u4F53\u7684\u9AD8\u5EA6                                  |
| openModal       | \u76F4\u63A5\u4E0D\u4F20\u53C2\u6570\u7684\u8C03\u7528\u662F\u6253\u5F00\u5F39\u6846\uFF0C\u4F20 \`false\` \u662F\u5173\u95ED\u5F39\u6846 |
`,html:`<p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002\u901A\u8FC7 <code>useModal</code> \u66F4\u5FEB\u6377\u7684\u4F7F\u7528\u3002\u81EA\u5E26\u62D6\u62FD\u529F\u80FD\uFF0C\u66F4\u597D\u7528.</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Modal</code> \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
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
<td>defaultFullscreen</td>
<td>\u662F\u5426\u5168\u5C4F</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>canFullscreen</td>
<td>\u662F\u5426\u5168\u5C4F\u6309\u94AE</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>bodyStyle</td>
<td>\u5185\u5BB9\u7684\u6837\u5F0F</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minHeight</td>
<td>\u5185\u5BB9\u7684\u6700\u5C0F\u9AD8\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>scrollStyle</td>
<td>\u6EDA\u52A8\u5185\u5BB9\u7684\u6837\u5F0F</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>\u5185\u5BB9\u7684\u5BBD\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u5F39\u6846\u6807\u9898\uFF0C \u4E3A <code>null</code> \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898</td>
<td>string | null</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>text</td>
<td>\u6807\u9898\u8FB9\u4E0A\u7684\u5E2E\u52A9\u63D0\u793A</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loadingTip</td>
<td>\u5185\u5BB9\u533A\u57DF\u52A0\u8F7D\u7684\u6587\u6848</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>\u5185\u5BB9\u533A\u57DF\u662F\u5426\u52A0\u8F7D</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="Slots">Slots <a class="header-anchor" href="#Slots">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>\u5934\u90E8\u81EA\u5B9A\u4E49</td>
</tr>
<tr>
<td>footer</td>
<td>\u5E95\u90E8\u81EA\u5B9A\u4E49</td>
</tr>
<tr>
<td>close</td>
<td>\u5173\u95ED\u81EA\u5B9A\u4E49</td>
</tr>
</tbody>
</table>
<h2 id="ModalMethods-\u4E2D\u7684\u65B9\u6CD5">ModalMethods \u4E2D\u7684\u65B9\u6CD5 <a class="header-anchor" href="#ModalMethods-\u4E2D\u7684\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>setModalProps</td>
<td>\u8BBE\u7F6E Modal Pro \u5C5E\u6027</td>
</tr>
<tr>
<td>getVisible</td>
<td>\u83B7\u53D6\u5F39\u6846\u663E\u793A\u72B6\u6001</td>
</tr>
<tr>
<td>redoModalHeight</td>
<td>\u8BBE\u7F6E\u5F39\u6846\u6574\u4F53\u7684\u9AD8\u5EA6</td>
</tr>
<tr>
<td>openModal</td>
<td>\u76F4\u63A5\u4E0D\u4F20\u53C2\u6570\u7684\u8C03\u7528\u662F\u6253\u5F00\u5F39\u6846\uFF0C\u4F20 <code>false</code> \u662F\u5173\u95ED\u5F39\u6846</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243820}},Y={class:"markdown"},S=w('<p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002\u901A\u8FC7 <code>useModal</code> \u66F4\u5FEB\u6377\u7684\u4F7F\u7528\u3002\u81EA\u5E26\u62D6\u62FD\u529F\u80FD\uFF0C\u66F4\u597D\u7528.</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Modal</code> \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>defaultFullscreen</td><td>\u662F\u5426\u5168\u5C4F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>canFullscreen</td><td>\u662F\u5426\u5168\u5C4F\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>bodyStyle</td><td>\u5185\u5BB9\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>minHeight</td><td>\u5185\u5BB9\u7684\u6700\u5C0F\u9AD8\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>scrollStyle</td><td>\u6EDA\u52A8\u5185\u5BB9\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>width</td><td>\u5185\u5BB9\u7684\u5BBD\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>title</td><td>\u5F39\u6846\u6807\u9898\uFF0C \u4E3A <code>null</code> \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898</td><td>string | null</td><td>-</td><td></td></tr><tr><td>text</td><td>\u6807\u9898\u8FB9\u4E0A\u7684\u5E2E\u52A9\u63D0\u793A</td><td>string</td><td>-</td><td></td></tr><tr><td>loadingTip</td><td>\u5185\u5BB9\u533A\u57DF\u52A0\u8F7D\u7684\u6587\u6848</td><td>string</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u5185\u5BB9\u533A\u57DF\u662F\u5426\u52A0\u8F7D</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h2 id="Slots">Slots <a class="header-anchor" href="#Slots"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u5934\u90E8\u81EA\u5B9A\u4E49</td></tr><tr><td>footer</td><td>\u5E95\u90E8\u81EA\u5B9A\u4E49</td></tr><tr><td>close</td><td>\u5173\u95ED\u81EA\u5B9A\u4E49</td></tr></tbody></table><h2 id="ModalMethods-\u4E2D\u7684\u65B9\u6CD5">ModalMethods \u4E2D\u7684\u65B9\u6CD5 <a class="header-anchor" href="#ModalMethods-\u4E2D\u7684\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>setModalProps</td><td>\u8BBE\u7F6E Modal Pro \u5C5E\u6027</td></tr><tr><td>getVisible</td><td>\u83B7\u53D6\u5F39\u6846\u663E\u793A\u72B6\u6001</td></tr><tr><td>redoModalHeight</td><td>\u8BBE\u7F6E\u5F39\u6846\u6574\u4F53\u7684\u9AD8\u5EA6</td></tr><tr><td>openModal</td><td>\u76F4\u63A5\u4E0D\u4F20\u53C2\u6570\u7684\u8C03\u7528\u662F\u6253\u5F00\u5F39\u6846\uFF0C\u4F20 <code>false</code> \u662F\u5173\u95ED\u5F39\u6846</td></tr></tbody></table>',9),K=[S];function z(s,o,l,i,k,d){return g(),v("article",Y,K)}var P=C(N,[["render",z]]);const J={pageData:{title:"ModalPro",description:"",frontmatter:{category:"Components",type:"Feedback",title:"ModalPro",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use `Modal` to create a new floating layer over the current page to get user feedback or display information."},{level:2,title:"API",slug:"API",content:""},{level:2,title:"Slots",slug:"Slots",content:""},{level:2,title:"ModalMethods Events",slug:"ModalMethods-Events",content:""}],relativePath:"components/modal-pro/index.en-US.md",content:`
Modal dialogs.

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user&#39;s workflow, you can use \`Modal\` to create a new floating layer over the current page to get user feedback or display information.

## API

| Property          | Description                            | Type           | Default | Version |
| ----------------- | -------------------------------------- | -------------- | ------- | ------- |
| defaultFullscreen | Fullscreen                             | boolean        | -       |         |
| canFullscreen     | Show fullscreen button                 | boolean        | -       |         |
| bodyStyle         | Body style                             | object         | -       |         |
| minHeight         | Content min height                     | number         | -       |         |
| scrollStyle       | Scroll content style                   | object         | -       |         |
| width             | Content width                          | number         | -       |         |
| title             | Modal title \u4E3A \`null\` \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898 | string \\| null | -       |         |
| text              | title help message                     | string         | -       |         |
| loadingTip        | Loading tip                            | string         | -       |         |
| loading           | Loading                                | boolean        | -       |         |

## Slots

| Name   | Description          |
| ------ | -------------------- |
| header | Header customization |
| footer | Footer customization |
| close  | Close customization  |

## ModalMethods Events

| Name | Description |
| --- | --- |
| setModalProps | Set modal pro props |
| getVisible | Get modal status |
| redoModalHeight | Set modal height |
| openModal | Calling directly without passing parameters is to open the modal, and passing \`false\` is to close the pop-up box |
`,html:`<p>Modal dialogs.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use <code>Modal</code> to create a new floating layer over the current page to get user feedback or display information.</p>
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
<td>defaultFullscreen</td>
<td>Fullscreen</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>canFullscreen</td>
<td>Show fullscreen button</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>bodyStyle</td>
<td>Body style</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>minHeight</td>
<td>Content min height</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>scrollStyle</td>
<td>Scroll content style</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>Content width</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>Modal title \u4E3A <code>null</code> \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898</td>
<td>string | null</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>text</td>
<td>title help message</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loadingTip</td>
<td>Loading tip</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>Loading</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="Slots">Slots <a class="header-anchor" href="#Slots">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>Header customization</td>
</tr>
<tr>
<td>footer</td>
<td>Footer customization</td>
</tr>
<tr>
<td>close</td>
<td>Close customization</td>
</tr>
</tbody>
</table>
<h2 id="ModalMethods-Events">ModalMethods Events <a class="header-anchor" href="#ModalMethods-Events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>setModalProps</td>
<td>Set modal pro props</td>
</tr>
<tr>
<td>getVisible</td>
<td>Get modal status</td>
</tr>
<tr>
<td>redoModalHeight</td>
<td>Set modal height</td>
</tr>
<tr>
<td>openModal</td>
<td>Calling directly without passing parameters is to open the modal, and passing <code>false</code> is to close the pop-up box</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243820}},D={class:"markdown"},j=w('<p>Modal dialogs.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user&#39;s workflow, you can use <code>Modal</code> to create a new floating layer over the current page to get user feedback or display information.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>defaultFullscreen</td><td>Fullscreen</td><td>boolean</td><td>-</td><td></td></tr><tr><td>canFullscreen</td><td>Show fullscreen button</td><td>boolean</td><td>-</td><td></td></tr><tr><td>bodyStyle</td><td>Body style</td><td>object</td><td>-</td><td></td></tr><tr><td>minHeight</td><td>Content min height</td><td>number</td><td>-</td><td></td></tr><tr><td>scrollStyle</td><td>Scroll content style</td><td>object</td><td>-</td><td></td></tr><tr><td>width</td><td>Content width</td><td>number</td><td>-</td><td></td></tr><tr><td>title</td><td>Modal title \u4E3A <code>null</code> \u7684\u65F6\u5019\u5C31\u9690\u85CF\u6807\u9898</td><td>string | null</td><td>-</td><td></td></tr><tr><td>text</td><td>title help message</td><td>string</td><td>-</td><td></td></tr><tr><td>loadingTip</td><td>Loading tip</td><td>string</td><td>-</td><td></td></tr><tr><td>loading</td><td>Loading</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h2 id="Slots">Slots <a class="header-anchor" href="#Slots"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>header</td><td>Header customization</td></tr><tr><td>footer</td><td>Footer customization</td></tr><tr><td>close</td><td>Close customization</td></tr></tbody></table><h2 id="ModalMethods-Events">ModalMethods Events <a class="header-anchor" href="#ModalMethods-Events"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>setModalProps</td><td>Set modal pro props</td></tr><tr><td>getVisible</td><td>Get modal status</td></tr><tr><td>redoModalHeight</td><td>Set modal height</td></tr><tr><td>openModal</td><td>Calling directly without passing parameters is to open the modal, and passing <code>false</code> is to close the pop-up box</td></tr></tbody></table>',9),E=[j];function L(s,o,l,i,k,d){return g(),v("article",D,E)}var _=C(J,[["render",L]]);const x=I({setup(){const{register:s,methods:o}=b();return{registerModal:s,open:()=>{o.openModal()}}}}),U=a("\u6253\u5F00"),T=a(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),Q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function O(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:"Basic modal.",cn:"\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic modal.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/modal-pro/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgdGl0bGU9IndhdGVyIj4g6L+Z6YeM6Z2i5piv566A5Y2V55qE5YaF5a65IDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB7IHJlZ2lzdGVyOiByZWdpc3Rlck1vZGFsLCBtZXRob2RzOiBtb2RhbE1ldGhvZHMgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgdGl0bGU9IndhdGVyIj4g6L+Z6YeM6Z2i5piv566A5Y2V55qE5YaF5a65IDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[U]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal,title:"water"},{default:t(()=>[T]),_:1},8,["onRegister"])])]),htmlCode:t(()=>[Q]),jsVersionHtml:t(()=>[q]),_:1},8,["jsfiddle"])}var $=C(x,[["render",O]]);const nn=I({setup(){const{register:s,methods:o}=b();return{registerModal:s,open:()=>{o.openModal()}}}}),an=a("\u6253\u5F00"),sn=a(" \u6CA1\u6709\u5934\u548C\u5E95 "),tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(" \u6CA1\u6709\u5934\u548C\u5E95 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(" \u6CA1\u6709\u5934\u548C\u5E95 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function en(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:'`:title="null" :footer="null"`',cn:'`:title="null" :footer="null"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>:title=&quot;null&quot; :footer=&quot;null&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>:title=&quot;null&quot; :footer=&quot;null&quot;</code></p>
`,order:0,title:{"zh-CN":"\u6CA1\u6709\u5934\u548C\u5E95","en-US":"Empty"},relativePath:"components/modal-pro/demo/empty.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgOnRpdGxlPSJudWxsIiA6Zm9vdGVyPSJudWxsIj4g5rKh5pyJ5aS05ZKM5bqVIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB7IHJlZ2lzdGVyOiByZWdpc3Rlck1vZGFsLCBtZXRob2RzOiBtb2RhbE1ldGhvZHMgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgOnRpdGxlPSJudWxsIiA6Zm9vdGVyPSJudWxsIj4g5rKh5pyJ5aS05ZKM5bqVIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[an]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal,title:null,footer:null},{default:t(()=>[sn]),_:1},8,["onRegister"])])]),htmlCode:t(()=>[tn]),jsVersionHtml:t(()=>[on]),_:1},8,["jsfiddle"])}var cn=C(nn,[["render",en]]);const pn=I({setup(){const{register:s,methods:o}=b();return{registerModal:s,open:()=>{o.openModal()}}}}),un=a("\u6253\u5F00"),ln=a(" \u8BBE\u7F6E\u5BBD\u9AD8\u7684\u5185\u5BB9 "),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("800"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":min-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":body-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ height: "),n("span",{class:"token punctuation"},"'"),a("500px"),n("span",{class:"token punctuation"},"'"),a(" }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      \u8BBE\u7F6E\u5BBD\u9AD8\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("800"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":min-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":body-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ height: "),n("span",{class:"token punctuation"},"'"),a("500px"),n("span",{class:"token punctuation"},"'"),a(" }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      \u8BBE\u7F6E\u5BBD\u9AD8\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function dn(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:"Size.",cn:"\u5F39\u6846\u7684\u5BBD\u9AD8\u8BBE\u7F6E\uFF0C\u5185\u5BB9\u9AD8\u5EA6\u7684\u8BBE\u7F6E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F39\u6846\u7684\u5BBD\u9AD8\u8BBE\u7F6E\uFF0C\u5185\u5BB9\u9AD8\u5EA6\u7684\u8BBE\u7F6E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Size.</p>
`,order:0,title:{"zh-CN":"\u5927\u5C0F","en-US":"Size"},relativePath:"components/modal-pro/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvCiAgICAgIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIKICAgICAgdGl0bGU9IndhdGVyIgogICAgICA6d2lkdGg9IjgwMCIKICAgICAgOm1pbi1oZWlnaHQ9IjEwMDAiCiAgICAgIDpib2R5LXN0eWxlPSJ7IGhlaWdodDogJzUwMHB4JyB9IgogICAgPgogICAgICDorr7nva7lrr3pq5jnmoTlhoXlrrkKICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB7IHJlZ2lzdGVyOiByZWdpc3Rlck1vZGFsLCBtZXRob2RzOiBtb2RhbE1ldGhvZHMgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvCiAgICAgIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIKICAgICAgdGl0bGU9IndhdGVyIgogICAgICA6d2lkdGg9IjgwMCIKICAgICAgOm1pbi1oZWlnaHQ9IjEwMDAiCiAgICAgIDpib2R5LXN0eWxlPSJ7IGhlaWdodDogJzUwMHB4JyB9IgogICAgPgogICAgICDorr7nva7lrr3pq5jnmoTlhoXlrrkKICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[un]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal,title:"water",width:800,"min-height":1e3,"body-style":{height:"500px"}},{default:t(()=>[ln]),_:1},8,["onRegister"])])]),htmlCode:t(()=>[kn]),jsVersionHtml:t(()=>[rn]),_:1},8,["jsfiddle"])}var gn=C(pn,[["render",dn]]);const Cn=I({setup(){const{register:s,methods:o}=b(),l=h(!1);return{registerModal:s,open:()=>{o.openModal()},okHandle:()=>{l.value=!0,setTimeout(()=>{o.openModal(!1),l.value=!1},1500)},modalLoading:l}}}),In=a("\u6253\u5F00"),mn=a(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),An=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("okHandle"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("modalLoading"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"loading-tip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6211\u4EEC\u5728\u52AA\u529B\u7684\u52A0\u8F7D"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":ok-button-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
        loading: modalLoading,
      }`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ok-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u70B9\u51FB\u52A0\u8F7D"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" modalLoading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"okHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          modalLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      modalLoading`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("okHandle"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("modalLoading"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"loading-tip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6211\u4EEC\u5728\u52AA\u529B\u7684\u52A0\u8F7D"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":ok-button-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
        loading: modalLoading,
      }`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ok-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u70B9\u51FB\u52A0\u8F7D"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" modalLoading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"okHandle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          modalLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      modalLoading`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function hn(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:"Loading.",cn:"\u5185\u5BB9\u52A0\u8F7D\uFF0C\u6309\u94AE\u52A0\u8F7D\u7684\u5B9E\u73B0\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5185\u5BB9\u52A0\u8F7D\uFF0C\u6309\u94AE\u52A0\u8F7D\u7684\u5B9E\u73B0\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Loading.</p>
`,order:0,title:{"zh-CN":"\u52A0\u8F7D\u4E2D","en-US":"Loading"},relativePath:"components/modal-pro/demo/loading.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvCiAgICAgIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIKICAgICAgdGl0bGU9IndhdGVyIgogICAgICBAb2s9Im9rSGFuZGxlIgogICAgICA6bG9hZGluZz0ibW9kYWxMb2FkaW5nIgogICAgICBsb2FkaW5nLXRpcD0i5oiR5Lus5Zyo5Yqq5Yqb55qE5Yqg6L29IgogICAgICA6b2stYnV0dG9uLXByb3BzPSJ7CiAgICAgICAgbG9hZGluZzogbW9kYWxMb2FkaW5nLAogICAgICB9IgogICAgICBvay10ZXh0PSLngrnlh7vliqDovb0iCiAgICA+CiAgICAgIOi/memHjOmdouaYr+eugOWNleeahOWGheWuuQogICAgPC9hLW1vZGFsLXBybz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgeyByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwgbWV0aG9kczogbW9kYWxNZXRob2RzIH0gPSB1c2VNb2RhbCgpOwogICAgY29uc3QgbW9kYWxMb2FkaW5nID0gcmVmKGZhbHNlKTsKICAgIHJldHVybiB7CiAgICAgIHJlZ2lzdGVyTW9kYWwsCiAgICAgIG9wZW46ICgpID0+IHsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgIH0sCiAgICAgIG9rSGFuZGxlOiAoKSA9PiB7CiAgICAgICAgbW9kYWxMb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICAgICAgbW9kYWxMb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgfSwgMTUwMCk7CiAgICAgIH0sCiAgICAgIG1vZGFsTG9hZGluZywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvCiAgICAgIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIKICAgICAgdGl0bGU9IndhdGVyIgogICAgICBAb2s9Im9rSGFuZGxlIgogICAgICA6bG9hZGluZz0ibW9kYWxMb2FkaW5nIgogICAgICBsb2FkaW5nLXRpcD0i5oiR5Lus5Zyo5Yqq5Yqb55qE5Yqg6L29IgogICAgICA6b2stYnV0dG9uLXByb3BzPSJ7CiAgICAgICAgbG9hZGluZzogbW9kYWxMb2FkaW5nLAogICAgICB9IgogICAgICBvay10ZXh0PSLngrnlh7vliqDovb0iCiAgICA+CiAgICAgIOi/memHjOmdouaYr+eugOWNleeahOWGheWuuQogICAgPC9hLW1vZGFsLXBybz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHsKICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyTW9kYWwsCiAgICAgIG1ldGhvZHM6IG1vZGFsTWV0aG9kcywKICAgIH0gPSB1c2VNb2RhbCgpOwogICAgY29uc3QgbW9kYWxMb2FkaW5nID0gcmVmKGZhbHNlKTsKICAgIHJldHVybiB7CiAgICAgIHJlZ2lzdGVyTW9kYWwsCiAgICAgIG9wZW46ICgpID0+IHsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgIH0sCiAgICAgIG9rSGFuZGxlOiAoKSA9PiB7CiAgICAgICAgbW9kYWxMb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICAgICAgbW9kYWxMb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgfSwgMTUwMCk7CiAgICAgIH0sCiAgICAgIG1vZGFsTG9hZGluZywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[In]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal,title:"water",onOk:s.okHandle,loading:s.modalLoading,"loading-tip":"\u6211\u4EEC\u5728\u52AA\u529B\u7684\u52A0\u8F7D","ok-button-props":{loading:s.modalLoading},"ok-text":"\u70B9\u51FB\u52A0\u8F7D"},{default:t(()=>[mn]),_:1},8,["onRegister","onOk","loading","ok-button-props"])])]),htmlCode:t(()=>[An]),jsVersionHtml:t(()=>[bn]),_:1},8,["jsfiddle"])}var Zn=C(Cn,[["render",hn]]);const vn=I({setup(){const{register:s,methods:o}=b();return{registerModal:s,open:()=>{o.openModal()}}}}),wn=a("\u6253\u5F00"),yn=a(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Bn(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:"Text.",cn:'`text="\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>text=&quot;\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Text.</p>
`,order:0,title:{"zh-CN":"\u5E2E\u52A9\u63D0\u793A\u7684\u6807\u9898","en-US":"text"},relativePath:"components/modal-pro/demo/tip.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgdGl0bGU9IndhdGVyIiB0ZXh0PSLov5nlj6rmmK/kuKrlsI/mj5DnpLoiPgogICAgICDov5nph4zpnaLmmK/nroDljZXnmoTlhoXlrrkKICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB7IHJlZ2lzdGVyOiByZWdpc3Rlck1vZGFsLCBtZXRob2RzOiBtb2RhbE1ldGhvZHMgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgdGl0bGU9IndhdGVyIiB0ZXh0PSLov5nlj6rmmK/kuKrlsI/mj5DnpLoiPgogICAgICDov5nph4zpnaLmmK/nroDljZXnmoTlhoXlrrkKICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[wn]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal,title:"water",text:"\u8FD9\u53EA\u662F\u4E2A\u5C0F\u63D0\u793A"},{default:t(()=>[yn]),_:1},8,["onRegister"])])]),htmlCode:t(()=>[fn]),jsVersionHtml:t(()=>[Gn]),_:1},8,["jsfiddle"])}var Wn=C(vn,[["render",Bn]]);const Vn=I({setup(){const{register:s,methods:o}=b();return{registerModal:s,open:()=>{o.openModal()},close:()=>{o.openModal(!1)}}}}),Fn=a("\u6253\u5F00"),Xn=a(" \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49 "),Hn=n("div",{style:{color:"green"}},"header",-1),Mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" green")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("header"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#close"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" blue")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("close"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"close"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" green")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("header"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#close"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" blue")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("close"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"close"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Nn(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:"slot.",cn:"slot",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>slot</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>slot.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49","en-US":"slot"},relativePath:"components/modal-pro/demo/diy.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCI+CiAgICAgIOi/memHjOaYr+iHquWumuS5iQogICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj4KICAgICAgICA8ZGl2IHN0eWxlPSJjb2xvcjogcmVkIiBAY2xpY2s9ImNsb3NlIj5mb290ZXI8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNoZWFkZXI+CiAgICAgICAgPGRpdiBzdHlsZT0iY29sb3I6IGdyZWVuIj5oZWFkZXI8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNjbG9zZT4KICAgICAgICA8ZGl2IHN0eWxlPSJjb2xvcjogYmx1ZSIgQGNsaWNrPSJjbG9zZSI+Y2xvc2U8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB7IHJlZ2lzdGVyOiByZWdpc3Rlck1vZGFsLCBtZXRob2RzOiBtb2RhbE1ldGhvZHMgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgICBjbG9zZTogKCkgPT4gewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCI+CiAgICAgIOi/memHjOaYr+iHquWumuS5iQogICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj4KICAgICAgICA8ZGl2IHN0eWxlPSJjb2xvcjogcmVkIiBAY2xpY2s9ImNsb3NlIj5mb290ZXI8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNoZWFkZXI+CiAgICAgICAgPGRpdiBzdHlsZT0iY29sb3I6IGdyZWVuIj5oZWFkZXI8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNjbG9zZT4KICAgICAgICA8ZGl2IHN0eWxlPSJjb2xvcjogYmx1ZSIgQGNsaWNrPSJjbG9zZSI+Y2xvc2U8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICByZXR1cm4gewogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBvcGVuOiAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICB9LAogICAgICBjbG9zZTogKCkgPT4gewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[Fn]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal},{footer:t(()=>[n("div",{style:{color:"red"},onClick:o[0]||(o[0]=(...A)=>s.close&&s.close(...A))},"footer")]),header:t(()=>[Hn]),close:t(()=>[n("div",{style:{color:"blue"},onClick:o[1]||(o[1]=(...A)=>s.close&&s.close(...A))},"close")]),default:t(()=>[Xn]),_:1},8,["onRegister"])])]),htmlCode:t(()=>[Mn]),jsVersionHtml:t(()=>[Rn]),_:1},8,["jsfiddle"])}var Yn=C(Vn,[["render",Nn]]);const Sn=I({setup(){const{register:s,methods:o}=b();return{registerModal:s,open:()=>{o.openModal()}}}}),Kn=a("\u6253\u5F00"),zn=a(" \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9 "),Pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"can-fullscreen"),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"can-fullscreen"),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8FD9\u91CC\u9762\u662F\u7B80\u5355\u7684\u5185\u5BB9
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Dn(s,o,l,i,k,d){const p=e("a-button"),u=e("a-modal-pro"),r=e("demo-box");return g(),m(r,{jsfiddle:{us:"Fullscreen.",cn:"`can-fullscree` \u8BBE\u7F6E\u5168\u5C4F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>can-fullscree</code> \u8BBE\u7F6E\u5168\u5C4F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Fullscreen.</p>
`,order:0,title:{"zh-CN":"\u5168\u5C4F","en-US":"Fullscreen"},relativePath:"components/modal-pro/demo/fullscreen.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgY2FuLWZ1bGxzY3JlZW4gdGl0bGU9IndhdGVyIj4KICAgICAg6L+Z6YeM6Z2i5piv566A5Y2V55qE5YaF5a65CiAgICA8L2EtbW9kYWwtcHJvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgeyByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwgbWV0aG9kczogbW9kYWxNZXRob2RzIH0gPSB1c2VNb2RhbCgpOwogICAgcmV0dXJuIHsKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgb3BlbjogKCkgPT4gewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoKTsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7miZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgY2FuLWZ1bGxzY3JlZW4gdGl0bGU9IndhdGVyIj4KICAgICAg6L+Z6YeM6Z2i5piv566A5Y2V55qE5YaF5a65CiAgICA8L2EtbW9kYWwtcHJvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHsKICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyTW9kYWwsCiAgICAgIG1ldGhvZHM6IG1vZGFsTWV0aG9kcywKICAgIH0gPSB1c2VNb2RhbCgpOwogICAgcmV0dXJuIHsKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgb3BlbjogKCkgPT4gewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoKTsKICAgICAgfSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[Kn]),_:1},8,["onClick"]),c(u,{onRegister:s.registerModal,"can-fullscreen":"",title:"water"},{default:t(()=>[zn]),_:1},8,["onRegister"])])]),htmlCode:t(()=>[Pn]),jsVersionHtml:t(()=>[Jn]),_:1},8,["jsfiddle"])}var jn=C(Sn,[["render",Dn]]),G=[{key:"0",id:410,wxDepartmentId:1,name:"\u5FEB\u4E50\u9B54\u65F6",nameEn:"",parentId:0,children:[{key:"0-0",type:"department",id:411,wxDepartmentId:3,name:"\u9999\u62C9\u67D0\u9152\u5E971",nameEn:"",children:[{key:"0-0-0",type:"department",id:412,wxDepartmentId:4,name:"\u9152\u5E971\u9910\u996E\u90E8\u95E8",nameEn:"",children:[{key:"0-0-0-0",type:"user",isLeaf:!0,id:1222,userId:"SunJiaMin",name:"\u5B59\u4F73\u654F",alias:"",position:"",email:"",mobile:"18702180013",avatar:"http://wework.qpic.cn/bizmail/R2KgCcXlxxViazzgyCPZcsDWnMkOtI7BuTIkMm6yWBFsZtpA6JWujDQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[412]},{key:"0-0-0-1",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-0-0-2",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]}]},{key:"0-0-1",type:"user",isLeaf:!0,id:1216,userId:"cfe7385ed75ecd2d21112eb44b36ae7b",name:"Jia Wang",alias:"yamiyo",position:"\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u804C\u52A1\u6700\u591A\u5C55\u793A\u591A\u5C11\u4E2A\u5B57",email:"",mobile:"13466622785",avatar:"http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMfQiaNOic7rsPVw5fNfrNSTQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,411]},{key:"0-0-2",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-0-3",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-0-4",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]}]},{key:"0-1",type:"department",id:413,wxDepartmentId:11,name:"\u9999\u62C9\u67D0\u9152\u5E972",nameEn:"",children:[{key:"0-1-0",type:"department",id:414,wxDepartmentId:12,name:"\u9152\u5E972\u5BA2\u623F\u90E8\u95E8",nameEn:"",children:[{key:"0-1-0-0",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-1-0-1",type:"user",isLeaf:!0,id:1225,userId:"sharon",name:"\u5F20\u73B2",alias:"Sharon Zhang",position:"Manager\uFF0CDigital Marketing",email:"",mobile:"15201965685",avatar:"http://wework.qpic.cn/bizmail/zmJX1iaqtjkdpjEaJFtwe8Ooy7RKDLtNDoghxGtdzoicicaASdCXOgbHA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413,414]}]},{key:"0-1-1",type:"user",isLeaf:!0,id:1220,userId:"LiMengLong",name:"\u674E\u68A6\u9F99",alias:"",position:"",email:"",mobile:"13810902078",avatar:"https://wework.qpic.cn/wwpic/673861_W0FS2rxbTrODoLt_1649674485/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413]},{key:"0-1-2",type:"user",isLeaf:!0,id:1226,userId:"ec1125fea3cfbd2cf1e903b462889d6d",name:"\u9646\u78A7\u4E91\uFF08Ruby\uFF09",alias:"Ruby",position:"XXX\u7ECF\u7406",email:"",mobile:"15021486796",avatar:"http://wework.qpic.cn/wwhead/duc2TvpEgSQykrhF5Jh51Hibiam7jBY1QfbhVy73yVpOoibibcMZTUjxY6BlCkDPdp4f1nSmib2DmDUo/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,413]},{key:"0-1-3",type:"user",isLeaf:!0,id:1233,userId:"ChenXiXi",name:"\u9648\u831C\u831C",alias:"",position:"",email:"",mobile:"18002288680",avatar:"http://wework.qpic.cn/bizmail/9icpBHlHJ1AHFCLPP76zdxq3AFuu8lrVIt6Pgo25OGO8jyrQgfHQ8iaQ/0",roleName:"ddd",roleCode:"",departmentId:[413]},{key:"0-1-4",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-1-5",type:"user",isLeaf:!0,id:1221,userId:"ZhangHaiHui",name:"\u5F20\u6D77\u8F89",alias:"\u6D3B\u52A8\u65F6",position:"",email:"",mobile:"13826426062",avatar:"http://wework.qpic.cn/bizmail/Oibs2biaQL9tf6LvUasfb6UgYmq4znnJebbxFzSNtGUZ4DTXfticMUUKg/0",roleName:"\u90E8\u95E8\u7BA1\u7406\u5458",roleCode:"department_admin",departmentId:[413]},{key:"0-1-6",type:"user",isLeaf:!0,id:1225,userId:"sharon",name:"\u5F20\u73B2",alias:"Sharon Zhang",position:"Manager\uFF0CDigital Marketing",email:"",mobile:"15201965685",avatar:"http://wework.qpic.cn/bizmail/zmJX1iaqtjkdpjEaJFtwe8Ooy7RKDLtNDoghxGtdzoicicaASdCXOgbHA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413,414]},{key:"0-1-7",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]}]},{key:"0-2",type:"department",id:415,wxDepartmentId:13,name:"\u90E8\u95E83-GSO",nameEn:"",children:[{key:"0-2-0",type:"user",isLeaf:!0,id:1227,userId:"WangJia",name:"\u738B\u4F73",alias:"",position:"",email:"",mobile:"18618110037",avatar:"http://wework.qpic.cn/bizmail/FNEmkLVDia0PrYDIecE3KsXXVAY5o5Y9RqVP4DLpjYe0AuAcZRIiaicLg/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[415]},{key:"0-2-1",type:"user",isLeaf:!0,id:1228,userId:"BeiFengNuan",name:"\u5317\u98CE\u6696",alias:"",position:"\u534E\u5317\u533A\u8D1F\u8D23\u4EBA",email:"",mobile:"13249392000",avatar:"http://wework.qpic.cn/bizmail/ic4dN4XlOX5ZJxyibHb4GZ3TT0RMmSD69kCOMYLE5khibw5Kkc5xAnDZw/0",roleName:"\u90E8\u95E8\u7BA1\u7406\u5458",roleCode:"department_admin",departmentId:[415]},{key:"0-2-2",type:"user",isLeaf:!0,id:1229,userId:"vicky",name:"\u6A0A\u7EF4\u5A67",alias:"\u6D66\u4E1C\u9999\u683C\u91CC\u62C9Vicky Fan",position:"Managers , Digital Marketing, China Marketing",email:"",mobile:"18516089093",avatar:"http://wework.qpic.cn/bizmail/WNaprWKRiaLyib66KibHiazibPe9ib3417D7xkfmQf6vtRG4Vlgbkib72vN3w/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[415]}]},{key:"0-3",type:"department",id:416,wxDepartmentId:14,name:"\u9152\u5E973",nameEn:"",children:[{key:"0-3-0",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]}]},{key:"0-4",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]},{key:"0-5",type:"user",isLeaf:!0,id:1216,userId:"cfe7385ed75ecd2d21112eb44b36ae7b",name:"Jia Wang",alias:"yamiyo",position:"\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u804C\u52A1\u6700\u591A\u5C55\u793A\u591A\u5C11\u4E2A\u5B57",email:"",mobile:"13466622785",avatar:"http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMfQiaNOic7rsPVw5fNfrNSTQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,411]},{key:"0-6",type:"user",isLeaf:!0,id:1217,userId:"foxglove",name:"\u4E01\u654F",alias:"Min Ding",position:"Manager, Product Design, TDC",email:"",mobile:"17681448860",avatar:"http://wework.qpic.cn/bizmail/HY6zhH2HA5loORgvPAPxnKicdAD8UNvdvRtzzQLqicffuVaLITFicaU8w/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-7",type:"user",isLeaf:!0,id:1218,userId:"Jingjingzhou",name:"\u5468\u9759",alias:"\u6D66\u4E1C\u9999\u683C\u91CC\u62C9 Jing Zhou",position:"AVP, Digital Marketing, China Marketing",email:"jing.zhou@shangri-la.com",mobile:"13917667875",avatar:"https://wework.qpic.cn/wwhead/duc2TvpEgSSdsPInfahzx3ptwPMQibSLWTiaHyHA21MJzNyiaydYJn8FC7lsL66KxjTlA7VtovcrYs/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-8",type:"user",isLeaf:!0,id:1219,userId:"rc",name:"RC",alias:"Raymond CW Chan",position:"Manager, Strategy & Business Transformation",email:"",mobile:"",avatar:"http://wework.qpic.cn/bizmail/wCTZ6QugWZt025mlSry2RWpUMuaXbKSr6x1BDicrXPEA3hCIryT0libA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-9",type:"user",isLeaf:!0,id:1223,userId:"WuXiaoXiang",name:"\u5434\u5C0F\u7FD4",alias:"",position:"",email:"",mobile:"13533909197",avatar:"https://wework.qpic.cn/bizmail/J1kzFSTuMgvpQhuZTjFVh9rbXX2ShGQ3RpRriaa2dW7c4Zactzk9Sibw/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-10",type:"user",isLeaf:!0,id:1226,userId:"ec1125fea3cfbd2cf1e903b462889d6d",name:"\u9646\u78A7\u4E91\uFF08Ruby\uFF09",alias:"Ruby",position:"XXX\u7ECF\u7406",email:"",mobile:"15021486796",avatar:"http://wework.qpic.cn/wwhead/duc2TvpEgSQykrhF5Jh51Hibiam7jBY1QfbhVy73yVpOoibibcMZTUjxY6BlCkDPdp4f1nSmib2DmDUo/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,413]},{key:"0-11",type:"user",isLeaf:!0,id:1230,userId:"SunJinQuan",name:"\u5B59\u91D1\u6743",alias:"",position:"",email:"",mobile:"18514236526",avatar:"https://wework.qpic.cn/bizmail/SfOaaCWFK9cmPzzia3Fhu6RFNPiattcuicH9v75Cb2z5m0IicuAnQ5JYlw/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410]},{key:"0-12",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-13",type:"user",isLeaf:!0,id:1234,userId:"caijinyi",name:"\u8521\u9526\u4EEA",alias:"",position:"",email:"",mobile:"17329968874",avatar:"https://wework.qpic.cn/wwpic/443916_DCjWfYryTmGXbNU_1649838419/0",roleName:"",roleCode:"",departmentId:[410]},{key:"0-14",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-15",type:"user",isLeaf:!0,id:1236,userId:"LiHui",name:"\u674E\u8F89",alias:"",position:"\u4EA7\u54C1\u7ECF\u7406",email:"",mobile:"13011805800",avatar:"http://wework.qpic.cn/bizmail/1jPj8jNh00NQv8yUky9icB5lT29oibek3Cib3ibxxCmJcapIDiakibUObZag/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410]}]}];const En=({success:s})=>{setTimeout(()=>{console.log(G,"\u63A5\u53E3\u8BF7\u6C42\u6210\u529F"),s(G)},100)},B=[{field:"adminId",label:"\u8D1F\u8D23\u4EBA",component:"ModalUser",componentProps:{api:En,placeholder:"\u8D1F\u8D23\u4EBA"}}],Ln=I({setup(){const{register:s,methods:o}=b(),[l,{setFieldsValue:i}]=f({schemas:B,labelWidth:100});let k=h(1);return{num:k,registerModal:s,schemas:B,groupForm:l,open:async()=>{o.openModal(),await Z(),k.value===1?(k.value=2,i({adminId:["cfe7385ed75ecd2d21112eb44b36ae7b"]})):k.value===2&&(k.value=3,i({adminId:["XiaoJieYun"]}))},closeGroupModal:()=>{i({adminId:[]}),o.openModal(!1)},closeModal(){o.openModal(!1)}}}}),_n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7B2C {{ num - 1 }} \u6B21\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeGroupModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("groupForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi"),n("span",{class:"token punctuation"},","),a(" FormProSchema "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal"),n("span",{class:"token punctuation"},","),a(" useForm "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(" genData "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'./data1'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"getSelectForOptions"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("genData"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u63A5\u53E3\u8BF7\u6C42\u6210\u529F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),a("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" schemas"),n("span",{class:"token operator"},":"),a(" FormProSchema"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    field`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'adminId'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D1F\u8D23\u4EBA'"),n("span",{class:"token punctuation"},","),a(`
    component`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ModalUser'"),n("span",{class:"token punctuation"},","),a(`
    componentProps`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      api`),n("span",{class:"token operator"},":"),a(" getSelectForOptions"),n("span",{class:"token punctuation"},","),a(`
      placeholder`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D1F\u8D23\u4EBA'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("groupForm"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" setFieldsValue"),n("span",{class:"token operator"},":"),a(" setFieldsValueGroup "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      labelWidth`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// showActionButtonGroup: false,"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" num "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      num`),n("span",{class:"token punctuation"},","),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      groupForm`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          num`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
            adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'cfe7385ed75ecd2d21112eb44b36ae7b'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          num`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
            adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'XiaoJieYun'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"closeGroupModal"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function"},"closeModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7B2C {{ num - 1 }} \u6B21\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeGroupModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("groupForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal"),n("span",{class:"token punctuation"},","),a(" useForm "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" genData "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'./data1'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"getSelectForOptions"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("genData"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u63A5\u53E3\u8BF7\u6C42\u6210\u529F'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),a("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" schemas "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  field`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'adminId'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D1F\u8D23\u4EBA'"),n("span",{class:"token punctuation"},","),a(`
  component`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ModalUser'"),n("span",{class:"token punctuation"},","),a(`
  componentProps`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token operator"},":"),a(" getSelectForOptions"),n("span",{class:"token punctuation"},","),a(`
    placeholder`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D1F\u8D23\u4EBA'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("groupForm"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      setFieldsValue`),n("span",{class:"token operator"},":"),a(" setFieldsValueGroup"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      labelWidth`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// showActionButtonGroup: false,"),a(`

    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" num "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      num`),n("span",{class:"token punctuation"},","),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      groupForm`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          num`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
            adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'cfe7385ed75ecd2d21112eb44b36ae7b'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          num`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
            adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'XiaoJieYun'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"closeGroupModal"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token function"},"closeModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Un(s,o,l,i,k,d){const p=e("a-button"),u=e("a-form-pro"),r=e("a-modal-pro"),A=e("demo-box");return g(),m(A,{jsfiddle:{us:"FormPro.",cn:"\u6253\u5F00\u4E09\u6B21\u6BCF\u6B21\u90FD\u4E0D\u4E00\u6837\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6253\u5F00\u4E09\u6B21\u6BCF\u6B21\u90FD\u4E0D\u4E00\u6837\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>FormPro.</p>
`,order:0,title:{"zh-CN":"\u8868\u5355","en-US":"FormPro usage"},relativePath:"components/modal-pro/demo/form-pro.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7nrKwge3sgbnVtIC0gMSB9fSDmrKHmiZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgdGl0bGU9IndhdGVyIiA6Zm9vdGVyPSJudWxsIiBAY2FuY2VsPSJjbG9zZUdyb3VwTW9kYWwiPgogICAgICA8YS1mb3JtLXBybyBAcmVnaXN0ZXI9Imdyb3VwRm9ybSIgQHJlc2V0PSJjbG9zZU1vZGFsIiBAc3VibWl0PSJjbG9zZU1vZGFsIiAvPgogICAgPC9hLW1vZGFsLXBybz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSwgRm9ybVByb1NjaGVtYSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgcmVmLCBuZXh0VGljaywgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlTW9kYWwsIHVzZUZvcm0gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CgppbXBvcnQgZ2VuRGF0YSBmcm9tICcuL2RhdGExJzsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIGNvbnNvbGUubG9nKGdlbkRhdGEsICfmjqXlj6Por7fmsYLmiJDlip8nKTsKICAgIHN1Y2Nlc3MoZ2VuRGF0YSk7CiAgfSwgMTAwKTsKfTsKCmNvbnN0IHNjaGVtYXM6IEZvcm1Qcm9TY2hlbWFbXSA9IFsKICB7CiAgICBmaWVsZDogJ2FkbWluSWQnLAogICAgbGFiZWw6ICfotJ/otKPkuronLAogICAgY29tcG9uZW50OiAnTW9kYWxVc2VyJywKICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgIGFwaTogZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgcGxhY2Vob2xkZXI6ICfotJ/otKPkuronLAogICAgfSwKICB9LApdOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHsgcmVnaXN0ZXI6IHJlZ2lzdGVyTW9kYWwsIG1ldGhvZHM6IG1vZGFsTWV0aG9kcyB9ID0gdXNlTW9kYWwoKTsKICAgIGNvbnN0IFtncm91cEZvcm0sIHsgc2V0RmllbGRzVmFsdWU6IHNldEZpZWxkc1ZhbHVlR3JvdXAgfV0gPSB1c2VGb3JtKHsKICAgICAgc2NoZW1hcywKICAgICAgbGFiZWxXaWR0aDogMTAwLAogICAgICAvLyBzaG93QWN0aW9uQnV0dG9uR3JvdXA6IGZhbHNlLAogICAgfSk7CiAgICBsZXQgbnVtID0gcmVmKDEpOwogICAgcmV0dXJuIHsKICAgICAgbnVtLAogICAgICByZWdpc3Rlck1vZGFsLAogICAgICBzY2hlbWFzLAogICAgICBncm91cEZvcm0sCiAgICAgIG9wZW46IGFzeW5jICgpID0+IHsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgICAgYXdhaXQgbmV4dFRpY2soKTsKICAgICAgICBpZiAobnVtLnZhbHVlID09PSAxKSB7CiAgICAgICAgICBudW0udmFsdWUgPSAyOwogICAgICAgICAgc2V0RmllbGRzVmFsdWVHcm91cCh7CiAgICAgICAgICAgIGFkbWluSWQ6IFsnY2ZlNzM4NWVkNzVlY2QyZDIxMTEyZWI0NGIzNmFlN2InXSwKICAgICAgICAgIH0pOwogICAgICAgIH0gZWxzZSBpZiAobnVtLnZhbHVlID09PSAyKSB7CiAgICAgICAgICBudW0udmFsdWUgPSAzOwogICAgICAgICAgc2V0RmllbGRzVmFsdWVHcm91cCh7CiAgICAgICAgICAgIGFkbWluSWQ6IFsnWGlhb0ppZVl1biddLAogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9LAogICAgICBjbG9zZUdyb3VwTW9kYWw6ICgpID0+IHsKICAgICAgICBzZXRGaWVsZHNWYWx1ZUdyb3VwKHsKICAgICAgICAgIGFkbWluSWQ6IFtdLAogICAgICAgIH0pOwogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICB9LAogICAgICBjbG9zZU1vZGFsKCkgewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuIj7nrKwge3sgbnVtIC0gMSB9fSDmrKHmiZPlvIA8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwtcHJvIEByZWdpc3Rlcj0icmVnaXN0ZXJNb2RhbCIgdGl0bGU9IndhdGVyIiA6Zm9vdGVyPSJudWxsIiBAY2FuY2VsPSJjbG9zZUdyb3VwTW9kYWwiPgogICAgICA8YS1mb3JtLXBybyBAcmVnaXN0ZXI9Imdyb3VwRm9ybSIgQHJlc2V0PSJjbG9zZU1vZGFsIiBAc3VibWl0PSJjbG9zZU1vZGFsIiAvPgogICAgPC9hLW1vZGFsLXBybz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgcmVmLCBuZXh0VGljaywgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlTW9kYWwsIHVzZUZvcm0gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCBnZW5EYXRhIGZyb20gJy4vZGF0YTEnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgY29uc29sZS5sb2coZ2VuRGF0YSwgJ+aOpeWPo+ivt+axguaIkOWKnycpOwogICAgc3VjY2VzcyhnZW5EYXRhKTsKICB9LCAxMDApOwp9OwoKY29uc3Qgc2NoZW1hcyA9IFt7CiAgZmllbGQ6ICdhZG1pbklkJywKICBsYWJlbDogJ+i0n+i0o+S6uicsCiAgY29tcG9uZW50OiAnTW9kYWxVc2VyJywKICBjb21wb25lbnRQcm9wczogewogICAgYXBpOiBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgcGxhY2Vob2xkZXI6ICfotJ/otKPkuronLAogIH0sCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICBjb25zdCBbZ3JvdXBGb3JtLCB7CiAgICAgIHNldEZpZWxkc1ZhbHVlOiBzZXRGaWVsZHNWYWx1ZUdyb3VwLAogICAgfV0gPSB1c2VGb3JtKHsKICAgICAgc2NoZW1hcywKICAgICAgbGFiZWxXaWR0aDogMTAwLCAvLyBzaG93QWN0aW9uQnV0dG9uR3JvdXA6IGZhbHNlLAoKICAgIH0pOwogICAgbGV0IG51bSA9IHJlZigxKTsKICAgIHJldHVybiB7CiAgICAgIG51bSwKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgc2NoZW1hcywKICAgICAgZ3JvdXBGb3JtLAogICAgICBvcGVuOiBhc3luYyAoKSA9PiB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgICAgIGF3YWl0IG5leHRUaWNrKCk7CgogICAgICAgIGlmIChudW0udmFsdWUgPT09IDEpIHsKICAgICAgICAgIG51bS52YWx1ZSA9IDI7CiAgICAgICAgICBzZXRGaWVsZHNWYWx1ZUdyb3VwKHsKICAgICAgICAgICAgYWRtaW5JZDogWydjZmU3Mzg1ZWQ3NWVjZDJkMjExMTJlYjQ0YjM2YWU3YiddLAogICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIGlmIChudW0udmFsdWUgPT09IDIpIHsKICAgICAgICAgIG51bS52YWx1ZSA9IDM7CiAgICAgICAgICBzZXRGaWVsZHNWYWx1ZUdyb3VwKHsKICAgICAgICAgICAgYWRtaW5JZDogWydYaWFvSmllWXVuJ10sCiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH0sCiAgICAgIGNsb3NlR3JvdXBNb2RhbDogKCkgPT4gewogICAgICAgIHNldEZpZWxkc1ZhbHVlR3JvdXAoewogICAgICAgICAgYWRtaW5JZDogW10sCiAgICAgICAgfSk7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbChmYWxzZSk7CiAgICAgIH0sCgogICAgICBjbG9zZU1vZGFsKCkgewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgICB9LAoKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open},{default:t(()=>[a("\u7B2C "+y(s.num-1)+" \u6B21\u6253\u5F00",1)]),_:1},8,["onClick"]),c(r,{onRegister:s.registerModal,title:"water",footer:null,onCancel:s.closeGroupModal},{default:t(()=>[c(u,{onRegister:s.groupForm,onReset:s.closeModal,onSubmit:s.closeModal},null,8,["onRegister","onReset","onSubmit"])]),_:1},8,["onRegister","onCancel"])])]),htmlCode:t(()=>[_n]),jsVersionHtml:t(()=>[xn]),_:1},8,["jsfiddle"])}var Tn=C(Ln,[["render",Un]]);const W=[{field:"industryProveUrl",component:"UploadCard",label:"\u8D44\u8D28\u8BC1\u660E",changeEvent:"changeUpload",dynamicRules:s=>[{required:!0,validator:()=>{const{industryProveUrl:o}=s.value.values;return!o||!o.length?Promise.reject(new Error("\u8BF7\u4E0A\u4F20\u8D44\u8D28\u8BC1\u660E")):Promise.resolve()}}],componentProps:()=>({draggable:!0,maxUploadCount:5,accept:"image/png,image/jpeg,image/gif",resultKey:"data",limitSize:5})}],Qn=I({setup(){const{register:s,methods:o}=b(),[l,{setFieldsValue:i,getFieldsValue:k}]=f({schemas:W,labelWidth:100});let d=h(1);const p=h([]);return{num:d,registerModal:s,schemas:W,groupForm:l,onOk:()=>{p.value=k().industryProveUrl},theImgs:p,open1:async()=>{o.openModal(),await Z(),i({industryProveUrl:["https://test-oss.test.fanzhi.cn/images/00/17/baaf295b1b5fed679a29c7780a90.jpg","https://test-oss.test.fanzhi.cn/images/94/ea/796d10207a7c52182b8643d2c5ad.jpg"]})},open2:async()=>{o.openModal(),await Z(),i({industryProveUrl:["https://test-oss.test.fanzhi.cn/images/ff/33/c130941d95ac47e2569c6b1a83ff.jpg","https://test-oss.test.fanzhi.cn/images/e9/56/45ce6a2bef968242a674dee10dc3.jpg"]})},closeGroupModal:()=>{i({adminId:[]}),o.openModal(!1)},closeModal(){o.openModal(!1)}}}}),qn=a("\u56FE1"),On=a("\u56FE2"),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u56FE1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u56FE2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("{{ theImgs }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeGroupModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("groupForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOk"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" FormProSchema "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal"),n("span",{class:"token punctuation"},","),a(" useForm "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" schemas"),n("span",{class:"token operator"},":"),a(" FormProSchema"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    field`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'industryProveUrl'"),n("span",{class:"token punctuation"},","),a(`
    component`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'UploadCard'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D44\u8D28\u8BC1\u660E'"),n("span",{class:"token punctuation"},","),a(`
    changeEvent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'changeUpload'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function-variable function"},"dynamicRules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ruleParams"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" industryProveUrl "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" ruleParams"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("values"),n("span",{class:"token punctuation"},";"),a(`
            `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("industryProveUrl "),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token operator"},"!"),a("industryProveUrl"),n("span",{class:"token punctuation"},"."),a("length"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token keyword"},"return"),a(" Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8BF7\u4E0A\u4F20\u8D44\u8D28\u8BC1\u660E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token keyword"},"return"),a(" Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function-variable function"},"componentProps"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        draggable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        maxUploadCount`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
        accept`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png,image/jpeg,image/gif'"),n("span",{class:"token punctuation"},","),a(`
        resultKey`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'data'"),n("span",{class:"token punctuation"},","),a(`
        limitSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" register"),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(" methods"),n("span",{class:"token operator"},":"),a(" modalMethods "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a(`
      groupForm`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" setFieldsValue"),n("span",{class:"token operator"},":"),a(" setFieldsValueGroup"),n("span",{class:"token punctuation"},","),a(" getFieldsValue"),n("span",{class:"token operator"},":"),a(" getFieldsValueGroup "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      labelWidth`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// showActionButtonGroup: false,"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" num "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" theImgs "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      theImgs`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"getFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("industryProveUrl"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      num`),n("span",{class:"token punctuation"},","),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      groupForm`),n("span",{class:"token punctuation"},","),a(`
      onOk`),n("span",{class:"token punctuation"},","),a(`
      theImgs`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          industryProveUrl`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/00/17/baaf295b1b5fed679a29c7780a90.jpg'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/94/ea/796d10207a7c52182b8643d2c5ad.jpg'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          industryProveUrl`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/ff/33/c130941d95ac47e2569c6b1a83ff.jpg'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/e9/56/45ce6a2bef968242a674dee10dc3.jpg'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"closeGroupModal"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function"},"closeModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),na=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u56FE1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("open2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u56FE2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("{{ theImgs }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("registerModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("water"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeGroupModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-pro")]),a(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("groupForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOk"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useModal"),n("span",{class:"token punctuation"},","),a(" useForm "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" schemas "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  field`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'industryProveUrl'"),n("span",{class:"token punctuation"},","),a(`
  component`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'UploadCard'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8D44\u8D28\u8BC1\u660E'"),n("span",{class:"token punctuation"},","),a(`
  changeEvent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'changeUpload'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function-variable function"},"dynamicRules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token parameter"},"ruleParams"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
          industryProveUrl`),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" ruleParams"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("values"),n("span",{class:"token punctuation"},";"),a(`

        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("industryProveUrl "),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token operator"},"!"),a("industryProveUrl"),n("span",{class:"token punctuation"},"."),a("length"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token keyword"},"return"),a(" Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8BF7\u4E0A\u4F20\u8D44\u8D28\u8BC1\u660E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`

        `),n("span",{class:"token keyword"},"return"),a(" Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function-variable function"},"componentProps"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      draggable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      maxUploadCount`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
      accept`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'image/png,image/jpeg,image/gif'"),n("span",{class:"token punctuation"},","),a(`
      resultKey`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'data'"),n("span",{class:"token punctuation"},","),a(`
      limitSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
      register`),n("span",{class:"token operator"},":"),a(" registerModal"),n("span",{class:"token punctuation"},","),a(`
      methods`),n("span",{class:"token operator"},":"),a(" modalMethods"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("groupForm"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      setFieldsValue`),n("span",{class:"token operator"},":"),a(" setFieldsValueGroup"),n("span",{class:"token punctuation"},","),a(`
      getFieldsValue`),n("span",{class:"token operator"},":"),a(" getFieldsValueGroup"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      labelWidth`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// showActionButtonGroup: false,"),a(`

    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" num "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" theImgs "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      theImgs`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"getFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("industryProveUrl"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      num`),n("span",{class:"token punctuation"},","),a(`
      registerModal`),n("span",{class:"token punctuation"},","),a(`
      schemas`),n("span",{class:"token punctuation"},","),a(`
      groupForm`),n("span",{class:"token punctuation"},","),a(`
      onOk`),n("span",{class:"token punctuation"},","),a(`
      theImgs`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          industryProveUrl`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/00/17/baaf295b1b5fed679a29c7780a90.jpg'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/94/ea/796d10207a7c52182b8643d2c5ad.jpg'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"open2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          industryProveUrl`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/ff/33/c130941d95ac47e2569c6b1a83ff.jpg'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'https://test-oss.test.fanzhi.cn/images/e9/56/45ce6a2bef968242a674dee10dc3.jpg'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"closeGroupModal"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setFieldsValueGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          adminId`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token function"},"closeModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function aa(s,o,l,i,k,d){const p=e("a-button"),u=e("a-form-pro"),r=e("a-modal-pro"),A=e("demo-box");return g(),m(A,{jsfiddle:{us:"UploadCard.",cn:"\u5728\u5F39\u6846\u4E2D\u7684\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5728\u5F39\u6846\u4E2D\u7684\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>UploadCard.</p>
`,order:0,title:{"zh-CN":"\u6539\u53D8\u4E0A\u4F20\u7167\u7247\u5899\u6570\u636E","en-US":"UploadCard"},relativePath:"components/modal-pro/demo/upload-card.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuMSI+5Zu+MTwvYS1idXR0b24+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuMiI+5Zu+MjwvYS1idXR0b24+CiAgICA8ZGl2Pnt7IHRoZUltZ3MgfX08L2Rpdj4KICAgIDxhLW1vZGFsLXBybyBAcmVnaXN0ZXI9InJlZ2lzdGVyTW9kYWwiIHRpdGxlPSJ3YXRlciIgOmZvb3Rlcj0ibnVsbCIgQGNhbmNlbD0iY2xvc2VHcm91cE1vZGFsIj4KICAgICAgPGEtZm9ybS1wcm8gQHJlZ2lzdGVyPSJncm91cEZvcm0iIEByZXNldD0iY2xvc2VNb2RhbCIgQHN1Ym1pdD0ib25PayIgLz4KICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEZvcm1Qcm9TY2hlbWEgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IHJlZiwgbmV4dFRpY2ssIGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsLCB1c2VGb3JtIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwoKY29uc3Qgc2NoZW1hczogRm9ybVByb1NjaGVtYVtdID0gWwogIHsKICAgIGZpZWxkOiAnaW5kdXN0cnlQcm92ZVVybCcsCiAgICBjb21wb25lbnQ6ICdVcGxvYWRDYXJkJywKICAgIGxhYmVsOiAn6LWE6LSo6K+B5piOJywKICAgIGNoYW5nZUV2ZW50OiAnY2hhbmdlVXBsb2FkJywKICAgIGR5bmFtaWNSdWxlczogKHJ1bGVQYXJhbXMpID0+IHsKICAgICAgcmV0dXJuIFsKICAgICAgICB7CiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgICAgIHZhbGlkYXRvcjogKCkgPT4gewogICAgICAgICAgICBjb25zdCB7IGluZHVzdHJ5UHJvdmVVcmwgfSA9IHJ1bGVQYXJhbXMudmFsdWUudmFsdWVzOwogICAgICAgICAgICBpZiAoIWluZHVzdHJ5UHJvdmVVcmwgfHwgIWluZHVzdHJ5UHJvdmVVcmwubGVuZ3RoKSB7CiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignHeivt+S4iuS8oOi1hOi0qOivgeaYjicpKTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7CiAgICAgICAgICB9LAogICAgICAgIH0sCiAgICAgIF07CiAgICB9LAogICAgY29tcG9uZW50UHJvcHM6ICgpID0+IHsKICAgICAgcmV0dXJuIHsKICAgICAgICBkcmFnZ2FibGU6IHRydWUsCiAgICAgICAgbWF4VXBsb2FkQ291bnQ6IDUsCiAgICAgICAgYWNjZXB0OiAnaW1hZ2UvcG5nLGltYWdlL2pwZWcsaW1hZ2UvZ2lmJywKICAgICAgICByZXN1bHRLZXk6ICdkYXRhJywKICAgICAgICBsaW1pdFNpemU6IDUsCiAgICAgIH07CiAgICB9LAogIH0sCl07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgeyByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwgbWV0aG9kczogbW9kYWxNZXRob2RzIH0gPSB1c2VNb2RhbCgpOwogICAgY29uc3QgWwogICAgICBncm91cEZvcm0sCiAgICAgIHsgc2V0RmllbGRzVmFsdWU6IHNldEZpZWxkc1ZhbHVlR3JvdXAsIGdldEZpZWxkc1ZhbHVlOiBnZXRGaWVsZHNWYWx1ZUdyb3VwIH0sCiAgICBdID0gdXNlRm9ybSh7CiAgICAgIHNjaGVtYXMsCiAgICAgIGxhYmVsV2lkdGg6IDEwMCwKICAgICAgLy8gc2hvd0FjdGlvbkJ1dHRvbkdyb3VwOiBmYWxzZSwKICAgIH0pOwogICAgbGV0IG51bSA9IHJlZigxKTsKICAgIGNvbnN0IHRoZUltZ3MgPSByZWYoW10pOwogICAgY29uc3Qgb25PayA9ICgpID0+IHsKICAgICAgdGhlSW1ncy52YWx1ZSA9IGdldEZpZWxkc1ZhbHVlR3JvdXAoKS5pbmR1c3RyeVByb3ZlVXJsOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG51bSwKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgc2NoZW1hcywKICAgICAgZ3JvdXBGb3JtLAogICAgICBvbk9rLAogICAgICB0aGVJbWdzLAogICAgICBvcGVuMTogYXN5bmMgKCkgPT4gewogICAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoKTsKICAgICAgICBhd2FpdCBuZXh0VGljaygpOwogICAgICAgIHNldEZpZWxkc1ZhbHVlR3JvdXAoewogICAgICAgICAgaW5kdXN0cnlQcm92ZVVybDogWwogICAgICAgICAgICAnaHR0cHM6Ly90ZXN0LW9zcy50ZXN0LmZhbnpoaS5jbi9pbWFnZXMvMDAvMTcvYmFhZjI5NWIxYjVmZWQ2NzlhMjljNzc4MGE5MC5qcGcnLAogICAgICAgICAgICAnaHR0cHM6Ly90ZXN0LW9zcy50ZXN0LmZhbnpoaS5jbi9pbWFnZXMvOTQvZWEvNzk2ZDEwMjA3YTdjNTIxODJiODY0M2QyYzVhZC5qcGcnLAogICAgICAgICAgXSwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgb3BlbjI6IGFzeW5jICgpID0+IHsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgICAgYXdhaXQgbmV4dFRpY2soKTsKICAgICAgICBzZXRGaWVsZHNWYWx1ZUdyb3VwKHsKICAgICAgICAgIGluZHVzdHJ5UHJvdmVVcmw6IFsKICAgICAgICAgICAgJ2h0dHBzOi8vdGVzdC1vc3MudGVzdC5mYW56aGkuY24vaW1hZ2VzL2ZmLzMzL2MxMzA5NDFkOTVhYzQ3ZTI1NjljNmIxYTgzZmYuanBnJywKICAgICAgICAgICAgJ2h0dHBzOi8vdGVzdC1vc3MudGVzdC5mYW56aGkuY24vaW1hZ2VzL2U5LzU2LzQ1Y2U2YTJiZWY5NjgyNDJhNjc0ZGVlMTBkYzMuanBnJywKICAgICAgICAgIF0sCiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGNsb3NlR3JvdXBNb2RhbDogKCkgPT4gewogICAgICAgIHNldEZpZWxkc1ZhbHVlR3JvdXAoewogICAgICAgICAgYWRtaW5JZDogW10sCiAgICAgICAgfSk7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbChmYWxzZSk7CiAgICAgIH0sCiAgICAgIGNsb3NlTW9kYWwoKSB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbChmYWxzZSk7CiAgICAgIH0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuMSI+5Zu+MTwvYS1idXR0b24+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuMiI+5Zu+MjwvYS1idXR0b24+CiAgICA8ZGl2Pnt7IHRoZUltZ3MgfX08L2Rpdj4KICAgIDxhLW1vZGFsLXBybyBAcmVnaXN0ZXI9InJlZ2lzdGVyTW9kYWwiIHRpdGxlPSJ3YXRlciIgOmZvb3Rlcj0ibnVsbCIgQGNhbmNlbD0iY2xvc2VHcm91cE1vZGFsIj4KICAgICAgPGEtZm9ybS1wcm8gQHJlZ2lzdGVyPSJncm91cEZvcm0iIEByZXNldD0iY2xvc2VNb2RhbCIgQHN1Ym1pdD0ib25PayIgLz4KICAgIDwvYS1tb2RhbC1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IHJlZiwgbmV4dFRpY2ssIGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsLCB1c2VGb3JtIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBzY2hlbWFzID0gW3sKICBmaWVsZDogJ2luZHVzdHJ5UHJvdmVVcmwnLAogIGNvbXBvbmVudDogJ1VwbG9hZENhcmQnLAogIGxhYmVsOiAn6LWE6LSo6K+B5piOJywKICBjaGFuZ2VFdmVudDogJ2NoYW5nZVVwbG9hZCcsCiAgZHluYW1pY1J1bGVzOiBydWxlUGFyYW1zID0+IHsKICAgIHJldHVybiBbewogICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgdmFsaWRhdG9yOiAoKSA9PiB7CiAgICAgICAgY29uc3QgewogICAgICAgICAgaW5kdXN0cnlQcm92ZVVybCwKICAgICAgICB9ID0gcnVsZVBhcmFtcy52YWx1ZS52YWx1ZXM7CgogICAgICAgIGlmICghaW5kdXN0cnlQcm92ZVVybCB8fCAhaW5kdXN0cnlQcm92ZVVybC5sZW5ndGgpIHsKICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJx3or7fkuIrkvKDotYTotKjor4HmmI4nKSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7CiAgICAgIH0sCiAgICB9XTsKICB9LAogIGNvbXBvbmVudFByb3BzOiAoKSA9PiB7CiAgICByZXR1cm4gewogICAgICBkcmFnZ2FibGU6IHRydWUsCiAgICAgIG1heFVwbG9hZENvdW50OiA1LAogICAgICBhY2NlcHQ6ICdpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYnLAogICAgICByZXN1bHRLZXk6ICdkYXRhJywKICAgICAgbGltaXRTaXplOiA1LAogICAgfTsKICB9LAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHsKICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyTW9kYWwsCiAgICAgIG1ldGhvZHM6IG1vZGFsTWV0aG9kcywKICAgIH0gPSB1c2VNb2RhbCgpOwogICAgY29uc3QgW2dyb3VwRm9ybSwgewogICAgICBzZXRGaWVsZHNWYWx1ZTogc2V0RmllbGRzVmFsdWVHcm91cCwKICAgICAgZ2V0RmllbGRzVmFsdWU6IGdldEZpZWxkc1ZhbHVlR3JvdXAsCiAgICB9XSA9IHVzZUZvcm0oewogICAgICBzY2hlbWFzLAogICAgICBsYWJlbFdpZHRoOiAxMDAsIC8vIHNob3dBY3Rpb25CdXR0b25Hcm91cDogZmFsc2UsCgogICAgfSk7CiAgICBsZXQgbnVtID0gcmVmKDEpOwogICAgY29uc3QgdGhlSW1ncyA9IHJlZihbXSk7CgogICAgY29uc3Qgb25PayA9ICgpID0+IHsKICAgICAgdGhlSW1ncy52YWx1ZSA9IGdldEZpZWxkc1ZhbHVlR3JvdXAoKS5pbmR1c3RyeVByb3ZlVXJsOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBudW0sCiAgICAgIHJlZ2lzdGVyTW9kYWwsCiAgICAgIHNjaGVtYXMsCiAgICAgIGdyb3VwRm9ybSwKICAgICAgb25PaywKICAgICAgdGhlSW1ncywKICAgICAgb3BlbjE6IGFzeW5jICgpID0+IHsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgICAgYXdhaXQgbmV4dFRpY2soKTsKICAgICAgICBzZXRGaWVsZHNWYWx1ZUdyb3VwKHsKICAgICAgICAgIGluZHVzdHJ5UHJvdmVVcmw6IFsnaHR0cHM6Ly90ZXN0LW9zcy50ZXN0LmZhbnpoaS5jbi9pbWFnZXMvMDAvMTcvYmFhZjI5NWIxYjVmZWQ2NzlhMjljNzc4MGE5MC5qcGcnLCAnaHR0cHM6Ly90ZXN0LW9zcy50ZXN0LmZhbnpoaS5jbi9pbWFnZXMvOTQvZWEvNzk2ZDEwMjA3YTdjNTIxODJiODY0M2QyYzVhZC5qcGcnXSwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgb3BlbjI6IGFzeW5jICgpID0+IHsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgICAgYXdhaXQgbmV4dFRpY2soKTsKICAgICAgICBzZXRGaWVsZHNWYWx1ZUdyb3VwKHsKICAgICAgICAgIGluZHVzdHJ5UHJvdmVVcmw6IFsnaHR0cHM6Ly90ZXN0LW9zcy50ZXN0LmZhbnpoaS5jbi9pbWFnZXMvZmYvMzMvYzEzMDk0MWQ5NWFjNDdlMjU2OWM2YjFhODNmZi5qcGcnLCAnaHR0cHM6Ly90ZXN0LW9zcy50ZXN0LmZhbnpoaS5jbi9pbWFnZXMvZTkvNTYvNDVjZTZhMmJlZjk2ODI0MmE2NzRkZWUxMGRjMy5qcGcnXSwKICAgICAgICB9KTsKICAgICAgfSwKICAgICAgY2xvc2VHcm91cE1vZGFsOiAoKSA9PiB7CiAgICAgICAgc2V0RmllbGRzVmFsdWVHcm91cCh7CiAgICAgICAgICBhZG1pbklkOiBbXSwKICAgICAgICB9KTsKICAgICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKGZhbHNlKTsKICAgICAgfSwKCiAgICAgIGNsb3NlTW9kYWwoKSB7CiAgICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbChmYWxzZSk7CiAgICAgIH0sCgogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:t(()=>[n("div",null,[c(p,{onClick:s.open1},{default:t(()=>[qn]),_:1},8,["onClick"]),c(p,{onClick:s.open2},{default:t(()=>[On]),_:1},8,["onClick"]),n("div",null,y(s.theImgs),1),c(r,{onRegister:s.registerModal,title:"water",footer:null,onCancel:s.closeGroupModal},{default:t(()=>[c(u,{onRegister:s.groupForm,onReset:s.closeModal,onSubmit:s.onOk},null,8,["onRegister","onReset","onSubmit"])]),_:1},8,["onRegister","onCancel"])])]),htmlCode:t(()=>[$n]),jsVersionHtml:t(()=>[na]),_:1},8,["jsfiddle"])}var sa=C(Qn,[["render",aa]]);const ta=I({CN:P,US:_,components:{Basic:$,Empty:cn,WUploadCard:sa,Size:gn,Loading:Zn,Tip:Wn,Diy:Yn,Fullscreen:jn,FormPro:Tn}});function oa(s,o,l,i,k,d){const p=e("Basic"),u=e("FormPro"),r=e("WUploadCard"),A=e("Empty"),V=e("Size"),F=e("Loading"),X=e("Tip"),H=e("Diy"),M=e("Fullscreen"),R=e("demo-sort");return g(),m(R,null,{default:t(()=>[c(p),c(u),c(r),c(A),c(V),c(F),c(X),c(H),c(M)]),_:1})}var pa=C(ta,[["render",oa]]);export{pa as default};

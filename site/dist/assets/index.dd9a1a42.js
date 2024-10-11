var G=Object.defineProperty,w=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var A=(s,a,e)=>a in s?G(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,b=(s,a)=>{for(var e in a||(a={}))W.call(a,e)&&A(s,e,a[e]);if(I)for(var e of I(a))B.call(a,e)&&A(s,e,a[e]);return s},f=(s,a)=>w(s,U(a));import{d as h,aq as d,J as r,bN as m,bO as p,e as i,G as t,H as n,k as _,E as v,cb as y}from"./vendor.0f0e4632.js";import{_ as g}from"./index.f6b32fa6.js";const H=h({setup(){return{mergeChangeDatas(s,{file:a}){var e,o,c;return f(b({},s),{name:((c=(o=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:o.meta)==null?void 0:c.name)||""})}}}}),V=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-name")]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"accept"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("image/png,image/jpeg,image/gif"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":merge-change-datas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mergeChangeDatas"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"mergeChangeDatas"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("theData"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(" file "),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token operator"},"..."),n("theData"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(" file"),t("span",{class:"token operator"},"?."),n("response"),t("span",{class:"token operator"},"?."),n("data"),t("span",{class:"token operator"},"?."),n("meta"),t("span",{class:"token operator"},"?."),n("name "),t("span",{class:"token operator"},"||"),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),z=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-name")]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"accept"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("image/png,image/jpeg,image/gif"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":merge-change-datas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mergeChangeDatas"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"mergeChangeDatas"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("theData"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(`
        file`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token operator"},"..."),n("theData"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(" file"),t("span",{class:"token operator"},"?."),n("response"),t("span",{class:"token operator"},"?."),n("data"),t("span",{class:"token operator"},"?."),n("meta"),t("span",{class:"token operator"},"?."),n("name "),t("span",{class:"token operator"},"||"),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function Y(s,a,e,o,c,k){const l=d("a-upload-name"),u=d("demo-box");return r(),m(u,{jsfiddle:{us:"The simplest usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/upload-name/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1uYW1lCiAgICBhY3Rpb249Imh0dHBzOi8vYXBpLmRldi5tb3NoLmNuL3B1YmxpYy91cGxvYWQvaW1hZ2UvYmluYXJ5IgogICAgYWNjZXB0PSJpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYiCiAgICA6bWVyZ2UtY2hhbmdlLWRhdGFzPSJtZXJnZUNoYW5nZURhdGFzIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIG1lcmdlQ2hhbmdlRGF0YXModGhlRGF0YSwgeyBmaWxlIH0pIHsKICAgICAgICByZXR1cm4gewogICAgICAgICAgLi4udGhlRGF0YSwKICAgICAgICAgIG5hbWU6IGZpbGU/LnJlc3BvbnNlPy5kYXRhPy5tZXRhPy5uYW1lIHx8ICcnLAogICAgICAgIH07CiAgICAgIH0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1uYW1lCiAgICBhY3Rpb249Imh0dHBzOi8vYXBpLmRldi5tb3NoLmNuL3B1YmxpYy91cGxvYWQvaW1hZ2UvYmluYXJ5IgogICAgYWNjZXB0PSJpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYiCiAgICA6bWVyZ2UtY2hhbmdlLWRhdGFzPSJtZXJnZUNoYW5nZURhdGFzIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBtZXJnZUNoYW5nZURhdGFzKHRoZURhdGEsIHsKICAgICAgICBmaWxlLAogICAgICB9KSB7CiAgICAgICAgcmV0dXJuIHsgLi4udGhlRGF0YSwKICAgICAgICAgIG5hbWU6IGZpbGU/LnJlc3BvbnNlPy5kYXRhPy5tZXRhPy5uYW1lIHx8ICcnLAogICAgICAgIH07CiAgICAgIH0sCgogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[i(l,{action:"https://api.dev.mosh.cn/public/upload/image/binary",accept:"image/png,image/jpeg,image/gif","merge-change-datas":s.mergeChangeDatas},null,8,["merge-change-datas"])]),htmlCode:p(()=>[V]),jsVersionHtml:p(()=>[z]),_:1},8,["jsfiddle"])}var S=g(H,[["render",Y]]);const X=h({setup(){return{headers:{authorization:"authorization-text"},mergeChangeDatas(s,{file:a}){var e,o,c;return f(b({},s),{name:((c=(o=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:o.meta)==null?void 0:c.name)||""})}}}}),j=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-name")]),n(`
    `),t("span",{class:"token attr-name"},":headers"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("headers"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":merge-change-datas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mergeChangeDatas"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      headers`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        authorization`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'authorization-text'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function"},"mergeChangeDatas"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("theData"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(" file "),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token operator"},"..."),n("theData"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(" file"),t("span",{class:"token operator"},"?."),n("response"),t("span",{class:"token operator"},"?."),n("data"),t("span",{class:"token operator"},"?."),n("meta"),t("span",{class:"token operator"},"?."),n("name "),t("span",{class:"token operator"},"||"),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),F=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-name")]),n(`
    `),t("span",{class:"token attr-name"},":headers"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("headers"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":merge-change-datas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mergeChangeDatas"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      headers`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        authorization`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'authorization-text'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

      `),t("span",{class:"token function"},"mergeChangeDatas"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("theData"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(`
        file`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token operator"},"..."),n("theData"),t("span",{class:"token punctuation"},","),n(`
          name`),t("span",{class:"token operator"},":"),n(" file"),t("span",{class:"token operator"},"?."),n("response"),t("span",{class:"token operator"},"?."),n("data"),t("span",{class:"token operator"},"?."),n("meta"),t("span",{class:"token operator"},"?."),n("name "),t("span",{class:"token operator"},"||"),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function D(s,a,e,o,c,k){const l=d("a-upload-name"),u=d("demo-box");return r(),m(u,{jsfiddle:{us:"Headers.",cn:"\u4F20\u9012 headers",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F20\u9012 headers</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Headers.</p>
`,order:0,title:{"zh-CN":"\u4F20\u9012 headers","en-US":"Headers"},relativePath:"components/upload-name/demo/headers.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1uYW1lCiAgICA6aGVhZGVycz0iaGVhZGVycyIKICAgIGFjdGlvbj0iaHR0cHM6Ly9hcGkuZGV2Lm1vc2guY24vcHVibGljL3VwbG9hZC9pbWFnZS9iaW5hcnkiCiAgICA6bWVyZ2UtY2hhbmdlLWRhdGFzPSJtZXJnZUNoYW5nZURhdGFzIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIGhlYWRlcnM6IHsKICAgICAgICBhdXRob3JpemF0aW9uOiAnYXV0aG9yaXphdGlvbi10ZXh0JywKICAgICAgfSwKICAgICAgbWVyZ2VDaGFuZ2VEYXRhcyh0aGVEYXRhLCB7IGZpbGUgfSkgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICAuLi50aGVEYXRhLAogICAgICAgICAgbmFtZTogZmlsZT8ucmVzcG9uc2U/LmRhdGE/Lm1ldGE/Lm5hbWUgfHwgJycsCiAgICAgICAgfTsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1uYW1lCiAgICA6aGVhZGVycz0iaGVhZGVycyIKICAgIGFjdGlvbj0iaHR0cHM6Ly9hcGkuZGV2Lm1vc2guY24vcHVibGljL3VwbG9hZC9pbWFnZS9iaW5hcnkiCiAgICA6bWVyZ2UtY2hhbmdlLWRhdGFzPSJtZXJnZUNoYW5nZURhdGFzIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCgogICAgICBtZXJnZUNoYW5nZURhdGFzKHRoZURhdGEsIHsKICAgICAgICBmaWxlLAogICAgICB9KSB7CiAgICAgICAgcmV0dXJuIHsgLi4udGhlRGF0YSwKICAgICAgICAgIG5hbWU6IGZpbGU/LnJlc3BvbnNlPy5kYXRhPy5tZXRhPy5uYW1lIHx8ICcnLAogICAgICAgIH07CiAgICAgIH0sCgogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[i(l,{headers:s.headers,action:"https://api.dev.mosh.cn/public/upload/image/binary","merge-change-datas":s.mergeChangeDatas},null,8,["headers","merge-change-datas"])]),htmlCode:p(()=>[j]),jsVersionHtml:p(()=>[F]),_:1},8,["jsfiddle"])}var P=g(X,[["render",D]]);const R=h({setup(){return{val:_({url:"https://cdn.dev.mosh.cn/image/e0/83/38e84e39e9ea31e785cac2ca8478.jpeg",name:"\u7231\u7231\u7231.jpeg"})}}}),K=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-name")]),n(),t("span",{class:"token attr-name"},"disabled"),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("val"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      val`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
        url`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://cdn.dev.mosh.cn/image/e0/83/38e84e39e9ea31e785cac2ca8478.jpeg'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7231\u7231\u7231.jpeg'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),x=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-name")]),n(),t("span",{class:"token attr-name"},"disabled"),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("val"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      val`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
        url`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://cdn.dev.mosh.cn/image/e0/83/38e84e39e9ea31e785cac2ca8478.jpeg'"),t("span",{class:"token punctuation"},","),n(`
        name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7231\u7231\u7231.jpeg'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function N(s,a,e,o,c,k){const l=d("a-upload-name"),u=d("demo-box");return r(),m(u,{jsfiddle:{us:"Disabled.",cn:"disabled\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>disabled\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Disabled.</p>
`,order:0,title:{"zh-CN":"\u7981\u7528","en-US":"Disabled"},relativePath:"components/upload-name/demo/disabled.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1uYW1lIGRpc2FibGVkIHYtbW9kZWw6dmFsdWU9InZhbCIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWw6IHJlZih7CiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uZGV2Lm1vc2guY24vaW1hZ2UvZTAvODMvMzhlODRlMzllOWVhMzFlNzg1Y2FjMmNhODQ3OC5qcGVnJywKICAgICAgICBuYW1lOiAn54ix54ix54ixLmpwZWcnLAogICAgICB9KSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1uYW1lIGRpc2FibGVkIHYtbW9kZWw6dmFsdWU9InZhbCIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsOiByZWYoewogICAgICAgIHVybDogJ2h0dHBzOi8vY2RuLmRldi5tb3NoLmNuL2ltYWdlL2UwLzgzLzM4ZTg0ZTM5ZTllYTMxZTc4NWNhYzJjYTg0NzguanBlZycsCiAgICAgICAgbmFtZTogJ+eIseeIseeIsS5qcGVnJywKICAgICAgfSksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:p(()=>[i(l,{disabled:"",value:s.val,"onUpdate:value":a[0]||(a[0]=C=>s.val=C)},null,8,["value"])]),htmlCode:p(()=>[K]),jsVersionHtml:p(()=>[x]),_:1},8,["jsfiddle"])}var L=g(R,[["render",N]]);const J={pageData:{title:"UploadName",description:"",frontmatter:{category:"Components",subtitle:"\u4E0A\u4F20\u540D\u5B57",type:"\u6570\u636E\u5F55\u5165",title:"UploadName",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:2,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""}],relativePath:"components/upload-name/index.zh-CN.md",content:`
\u4E0A\u4F20\u7EC4\u4EF6\u7684\u5C01\u88C5\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u53EA\u9700\u8981\u663E\u793A\u540D\u5B57
- \u5355\u6587\u4EF6\u4E0A\u4F20

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| value(v-model) | \u4E0A\u4F20\u7684\u503C | string \\| object | - | - |
| onFormChange | \u4E0A\u4F20\u4E4B\u540E\u89E6\u53D1\u7684\u65B9\u6CD5 | function | () =&gt; {} | - |
| mergeOriginDatas | \u8BBE\u7F6E form \u63D0\u4EA4\u7684\u6570\u636E | function | - | - |
| mergeChangeDatas | \u4E0A\u4F20\u6539\u53D8\u6570\u636E\u7684\u5904\u7406 | function | - | 4.0 |
| headers | \u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E | - | - |  |
| placeholder | \u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848 | \u6DFB\u52A0\u56FE\u7247 | - |  |
| accept | \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | &#39;image/png&#39;, &#39;image/jpeg&#39; |  |
| action | \u4E0A\u4F20\u7684\u5730\u5740 | string | \u65E0 |  |
| autoUpload | \u662F\u5426\u81EA\u52A8\u4E0A\u4F20 | boolean | true |  |
| resultKey | ajax \u8FD4\u56DE\u6765\u7684\u6570\u636E\u5B58\u653E\u7684\u5B57\u6BB5 | string | &#39;data&#39; |  |
| nameKey | \u56FE\u7247\u540D\u5B57\u5B58\u50A8\u7684\u5B57\u6BB5 | string | &#39;name&#39; |  |
| urlKey | \u56FE\u7247\u5730\u5740\u5B58\u50A8\u7684\u5B57\u6BB5 | string | &#39;url&#39; |  |
| limitSize | \u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F | number | 2(M) |  |
| limitErrorText | \u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F\u62A5\u9519\u6587\u6848 | string | \u56FE\u7247\u5FC5\u987B\u5C0F\u4E8E | 4.10.0 |
| disabled | \u7981\u7528 | boolean | - |  |
| size | \u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A \`small\` \`large\` \u6216\u8005\u4E0D\u8BBE | string | \`default\` |  |

## \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0     | \u8BF4\u660E                                           | \u56DE\u8C03\u53C2\u6570       | \u7248\u672C |
| ------------ | ---------------------------------------------- | -------------- | ---- | --- |
| change       | \u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 [change](#change)   | Function       | \u65E0   |     |
| changeUpload | \u4E0A\u4F20\u6539\u53D8\uFF0C\u4E0E change \u5206\u9694\uFF0C\u7528\u5728 form pro \u914D\u7F6E\u4E2D | Function(file) | \u65E0   |     |
`,html:`<p>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u5C01\u88C5\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u53EA\u9700\u8981\u663E\u793A\u540D\u5B57</li>
<li>\u5355\u6587\u4EF6\u4E0A\u4F20</li>
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
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>value(v-model)</td>
<td>\u4E0A\u4F20\u7684\u503C</td>
<td>string | object</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onFormChange</td>
<td>\u4E0A\u4F20\u4E4B\u540E\u89E6\u53D1\u7684\u65B9\u6CD5</td>
<td>function</td>
<td>() =&gt; {}</td>
<td>-</td>
</tr>
<tr>
<td>mergeOriginDatas</td>
<td>\u8BBE\u7F6E form \u63D0\u4EA4\u7684\u6570\u636E</td>
<td>function</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>mergeChangeDatas</td>
<td>\u4E0A\u4F20\u6539\u53D8\u6570\u636E\u7684\u5904\u7406</td>
<td>function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>headers</td>
<td>\u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848</td>
<td>\u6DFB\u52A0\u56FE\u7247</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>accept</td>
<td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
<td>string</td>
<td>'image/png', 'image/jpeg'</td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>\u4E0A\u4F20\u7684\u5730\u5740</td>
<td>string</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>autoUpload</td>
<td>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>resultKey</td>
<td>ajax \u8FD4\u56DE\u6765\u7684\u6570\u636E\u5B58\u653E\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>'data'</td>
<td></td>
</tr>
<tr>
<td>nameKey</td>
<td>\u56FE\u7247\u540D\u5B57\u5B58\u50A8\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>'name'</td>
<td></td>
</tr>
<tr>
<td>urlKey</td>
<td>\u56FE\u7247\u5730\u5740\u5B58\u50A8\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>'url'</td>
<td></td>
</tr>
<tr>
<td>limitSize</td>
<td>\u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F</td>
<td>number</td>
<td>2(M)</td>
<td></td>
</tr>
<tr>
<td>limitErrorText</td>
<td>\u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F\u62A5\u9519\u6587\u6848</td>
<td>string</td>
<td>\u56FE\u7247\u5FC5\u987B\u5C0F\u4E8E</td>
<td>4.10.0</td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td>
<td>Function</td>
<td>\u65E0</td>
</tr>
<tr>
<td>changeUpload</td>
<td>\u4E0A\u4F20\u6539\u53D8\uFF0C\u4E0E change \u5206\u9694\uFF0C\u7528\u5728 form pro \u914D\u7F6E\u4E2D</td>
<td>Function(file)</td>
<td>\u65E0</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243983}},T={class:"markdown"},$=y('<p>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u5C01\u88C5\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u53EA\u9700\u8981\u663E\u793A\u540D\u5B57</li><li>\u5355\u6587\u4EF6\u4E0A\u4F20</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u4E0A\u4F20\u7684\u503C</td><td>string | object</td><td>-</td><td>-</td></tr><tr><td>onFormChange</td><td>\u4E0A\u4F20\u4E4B\u540E\u89E6\u53D1\u7684\u65B9\u6CD5</td><td>function</td><td>() =&gt; {}</td><td>-</td></tr><tr><td>mergeOriginDatas</td><td>\u8BBE\u7F6E form \u63D0\u4EA4\u7684\u6570\u636E</td><td>function</td><td>-</td><td>-</td></tr><tr><td>mergeChangeDatas</td><td>\u4E0A\u4F20\u6539\u53D8\u6570\u636E\u7684\u5904\u7406</td><td>function</td><td>-</td><td>4.0</td></tr><tr><td>headers</td><td>\u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E</td><td>-</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>\u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848</td><td>\u6DFB\u52A0\u56FE\u7247</td><td>-</td><td></td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>&#39;image/png&#39;, &#39;image/jpeg&#39;</td><td></td></tr><tr><td>action</td><td>\u4E0A\u4F20\u7684\u5730\u5740</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>autoUpload</td><td>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resultKey</td><td>ajax \u8FD4\u56DE\u6765\u7684\u6570\u636E\u5B58\u653E\u7684\u5B57\u6BB5</td><td>string</td><td>&#39;data&#39;</td><td></td></tr><tr><td>nameKey</td><td>\u56FE\u7247\u540D\u5B57\u5B58\u50A8\u7684\u5B57\u6BB5</td><td>string</td><td>&#39;name&#39;</td><td></td></tr><tr><td>urlKey</td><td>\u56FE\u7247\u5730\u5740\u5B58\u50A8\u7684\u5B57\u6BB5</td><td>string</td><td>&#39;url&#39;</td><td></td></tr><tr><td>limitSize</td><td>\u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F</td><td>number</td><td>2(M)</td><td></td></tr><tr><td>limitErrorText</td><td>\u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F\u62A5\u9519\u6587\u6848</td><td>string</td><td>\u56FE\u7247\u5FC5\u987B\u5C0F\u4E8E</td><td>4.10.0</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td></td></tr></tbody></table><h2 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td><td>Function</td><td>\u65E0</td></tr><tr><td>changeUpload</td><td>\u4E0A\u4F20\u6539\u53D8\uFF0C\u4E0E change \u5206\u9694\uFF0C\u7528\u5728 form pro \u914D\u7F6E\u4E2D</td><td>Function(file)</td><td>\u65E0</td></tr></tbody></table>',7),M=[$];function O(s,a,e,o,c,k){return r(),v("article",T,M)}var E=g(J,[["render",O]]);const Q={pageData:{title:"UploadName",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"UploadName",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""}],relativePath:"components/upload-name/index.en-US.md",content:`
Package of upload components.

## When To Use

- Just display the name
- Single file upload

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Uploaded value | string \\| object | - | - |
| onFormChange | Method triggered after uploading | function | () =&gt; {} | - |
| mergeOriginDatas | Set the data submitted by the form | function | - | - |
| mergeChangeDatas | Change data | function | - | 4.0 |
| headers | Header settings for uploading pictures | - | - |  |
| placeholder | Copy of upload button | \u6DFB\u52A0\u56FE\u7247 | - |  |
| accept | Accept uploaded file type, see [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | &#39;image/png&#39;, &#39;image/jpeg&#39; |  |
| action | Upload address | string | \u65E0 |  |
| autoUpload | Auto upload | boolean | true |  |
| resultKey | The field where the data returned by AJAX is stored | string | &#39;data&#39; |  |
| nameKey | Field of picture name storage | string | &#39;name&#39; |  |
| urlKey | Field of picture address storage | string | &#39;url&#39; |  |
| limitSize | Picture limit size | number | 2(M) |  |
| disabled | Disabled | boolean | - |  |
| size | Set the button size. The optional values are &#39;small&#39;, &#39;large&#39; or none | string | \`default\` |  |

### events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- | --- |
| change | The status when uploading files is changed, see [change](#change) | Function | \u65E0 |  |
| changeUpload | Upload changes, separated from change, and used in form pro configuration | Function(file) | \u65E0 |  |
`,html:`<p>Package of upload components.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>Just display the name</li>
<li>Single file upload</li>
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
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>value(v-model)</td>
<td>Uploaded value</td>
<td>string | object</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>onFormChange</td>
<td>Method triggered after uploading</td>
<td>function</td>
<td>() =&gt; {}</td>
<td>-</td>
</tr>
<tr>
<td>mergeOriginDatas</td>
<td>Set the data submitted by the form</td>
<td>function</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>mergeChangeDatas</td>
<td>Change data</td>
<td>function</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>headers</td>
<td>Header settings for uploading pictures</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>Copy of upload button</td>
<td>\u6DFB\u52A0\u56FE\u7247</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>accept</td>
<td>Accept uploaded file type, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
<td>string</td>
<td>'image/png', 'image/jpeg'</td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>Upload address</td>
<td>string</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>autoUpload</td>
<td>Auto upload</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>resultKey</td>
<td>The field where the data returned by AJAX is stored</td>
<td>string</td>
<td>'data'</td>
<td></td>
</tr>
<tr>
<td>nameKey</td>
<td>Field of picture name storage</td>
<td>string</td>
<td>'name'</td>
<td></td>
</tr>
<tr>
<td>urlKey</td>
<td>Field of picture address storage</td>
<td>string</td>
<td>'url'</td>
<td></td>
</tr>
<tr>
<td>limitSize</td>
<td>Picture limit size</td>
<td>number</td>
<td>2(M)</td>
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
<td>size</td>
<td>Set the button size. The optional values are 'small', 'large' or none</td>
<td>string</td>
<td><code>default</code></td>
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
<td>The status when uploading files is changed, see <a href="#change">change</a></td>
<td>Function</td>
<td>\u65E0</td>
</tr>
<tr>
<td>changeUpload</td>
<td>Upload changes, separated from change, and used in form pro configuration</td>
<td>Function(file)</td>
<td>\u65E0</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243982}},q={class:"markdown"},tt=y('<p>Package of upload components.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Just display the name</li><li>Single file upload</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>value(v-model)</td><td>Uploaded value</td><td>string | object</td><td>-</td><td>-</td></tr><tr><td>onFormChange</td><td>Method triggered after uploading</td><td>function</td><td>() =&gt; {}</td><td>-</td></tr><tr><td>mergeOriginDatas</td><td>Set the data submitted by the form</td><td>function</td><td>-</td><td>-</td></tr><tr><td>mergeChangeDatas</td><td>Change data</td><td>function</td><td>-</td><td>4.0</td></tr><tr><td>headers</td><td>Header settings for uploading pictures</td><td>-</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>Copy of upload button</td><td>\u6DFB\u52A0\u56FE\u7247</td><td>-</td><td></td></tr><tr><td>accept</td><td>Accept uploaded file type, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>&#39;image/png&#39;, &#39;image/jpeg&#39;</td><td></td></tr><tr><td>action</td><td>Upload address</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>autoUpload</td><td>Auto upload</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resultKey</td><td>The field where the data returned by AJAX is stored</td><td>string</td><td>&#39;data&#39;</td><td></td></tr><tr><td>nameKey</td><td>Field of picture name storage</td><td>string</td><td>&#39;name&#39;</td><td></td></tr><tr><td>urlKey</td><td>Field of picture address storage</td><td>string</td><td>&#39;url&#39;</td><td></td></tr><tr><td>limitSize</td><td>Picture limit size</td><td>number</td><td>2(M)</td><td></td></tr><tr><td>disabled</td><td>Disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>size</td><td>Set the button size. The optional values are &#39;small&#39;, &#39;large&#39; or none</td><td>string</td><td><code>default</code></td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>The status when uploading files is changed, see <a href="#change">change</a></td><td>Function</td><td>\u65E0</td></tr><tr><td>changeUpload</td><td>Upload changes, separated from change, and used in form pro configuration</td><td>Function(file)</td><td>\u65E0</td></tr></tbody></table>',7),nt=[tt];function at(s,a,e,o,c,k){return r(),v("article",q,nt)}var st=g(Q,[["render",at]]);const et=h({CN:E,US:st,components:{Basic:S,Headers:P,Disabled:L}});function ot(s,a,e,o,c,k){const l=d("Basic"),u=d("Headers"),C=d("Disabled"),Z=d("demo-sort");return r(),m(Z,null,{default:p(()=>[i(l),i(u),i(C)]),_:1})}var lt=g(et,[["render",ot]]);export{lt as default};

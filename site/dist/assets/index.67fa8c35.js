import{d as m,k as f,aq as d,J as i,bN as b,bO as c,G as t,H as n,bP as v,e as h,E as C,cb as I}from"./vendor.0f0e4632.js";import{_ as g}from"./index.f6b32fa6.js";const A=m({setup(){const a=f(["https://dz-resources-oss.fanzhi.cn/images/ee/24/544795bf59a8343731c3501c6b4e.jpg","https://dz-resources-oss.fanzhi.cn/images/cc/4e/063b9b71f8a519d75268f9e0679f.jpg"]);return{headers:{authorization:"authorization-text"},theList:a,onDragEnd:(e,o)=>{const p=a.value[e];a.value[e]=a.value[o],a.value[o]=p}}}}),Z=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    -\u6570\u636E\u5C55\u793A: {{ theList }}-
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-card")]),n(`
      `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"resultKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("theList"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":headers"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("headers"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ a: 1 }"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"draggable"),n(`
      `),t("span",{class:"token attr-name"},"@dragEnd"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onDragEnd"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"accept"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("image/png,image/jpeg,image/gif"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" theList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'https://dz-resources-oss.fanzhi.cn/images/ee/24/544795bf59a8343731c3501c6b4e.jpg'"),t("span",{class:"token punctuation"},","),t("span",{class:"token string"},"'https://dz-resources-oss.fanzhi.cn/images/cc/4e/063b9b71f8a519d75268f9e0679f.jpg'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onDragEnd"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("theOldIdx"),t("span",{class:"token operator"},":"),n(" number"),t("span",{class:"token punctuation"},","),n(" theNewIdx"),t("span",{class:"token operator"},":"),n(" number")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" theOldImage"),t("span",{class:"token operator"},":"),n(" any "),t("span",{class:"token operator"},"="),n(" theList"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theOldIdx"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
      theList`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theOldIdx"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" theList"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theNewIdx"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
      theList`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theNewIdx"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" theOldImage"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      headers`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        authorization`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'authorization-text'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      theList`),t("span",{class:"token punctuation"},","),n(`
      onDragEnd`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),y=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    -\u6570\u636E\u5C55\u793A: {{ theList }}-
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-card")]),n(`
      `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"resultKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("theList"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":headers"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("headers"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ a: 1 }"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"draggable"),n(`
      `),t("span",{class:"token attr-name"},"@dragEnd"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onDragEnd"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"accept"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("image/png,image/jpeg,image/gif"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" theList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'https://dz-resources-oss.fanzhi.cn/images/ee/24/544795bf59a8343731c3501c6b4e.jpg'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'https://dz-resources-oss.fanzhi.cn/images/cc/4e/063b9b71f8a519d75268f9e0679f.jpg'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onDragEnd"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("theOldIdx"),t("span",{class:"token punctuation"},","),n(" theNewIdx")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" theOldImage "),t("span",{class:"token operator"},"="),n(" theList"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theOldIdx"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
      theList`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theOldIdx"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" theList"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theNewIdx"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
      theList`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},"["),n("theNewIdx"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" theOldImage"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      headers`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        authorization`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'authorization-text'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      theList`),t("span",{class:"token punctuation"},","),n(`
      onDragEnd`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function W(a,s,e,o,p,k){const l=d("a-upload-card"),r=d("demo-box");return i(),b(r,{jsfiddle:{us:"The simplest usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/upload-card/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICAt5pWw5o2u5bGV56S6OiB7eyB0aGVMaXN0IH19LQogICAgPGEtdXBsb2FkLWNhcmQKICAgICAgYWN0aW9uPSJodHRwczovL2FwaS5kZXYubW9zaC5jbi9wdWJsaWMvdXBsb2FkL2ltYWdlL2JpbmFyeSIKICAgICAgcmVzdWx0S2V5PSJkYXRhIgogICAgICB2LW1vZGVsOnZhbHVlPSJ0aGVMaXN0IgogICAgICA6aGVhZGVycz0iaGVhZGVycyIKICAgICAgOmRhdGE9InsgYTogMSB9IgogICAgICBkcmFnZ2FibGUKICAgICAgQGRyYWdFbmQ9Im9uRHJhZ0VuZCIKICAgICAgYWNjZXB0PSJpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRoZUxpc3QgPSByZWYoWydodHRwczovL2R6LXJlc291cmNlcy1vc3MuZmFuemhpLmNuL2ltYWdlcy9lZS8yNC81NDQ3OTViZjU5YTgzNDM3MzFjMzUwMWM2YjRlLmpwZycsJ2h0dHBzOi8vZHotcmVzb3VyY2VzLW9zcy5mYW56aGkuY24vaW1hZ2VzL2NjLzRlLzA2M2I5YjcxZjhhNTE5ZDc1MjY4ZjllMDY3OWYuanBnJ10pOwogICAgY29uc3Qgb25EcmFnRW5kID0gKHRoZU9sZElkeDogbnVtYmVyLCB0aGVOZXdJZHg6IG51bWJlcikgPT4gewogICAgICBjb25zdCB0aGVPbGRJbWFnZTogYW55ID0gdGhlTGlzdC52YWx1ZVt0aGVPbGRJZHhdOwogICAgICB0aGVMaXN0LnZhbHVlW3RoZU9sZElkeF0gPSB0aGVMaXN0LnZhbHVlW3RoZU5ld0lkeF07CiAgICAgIHRoZUxpc3QudmFsdWVbdGhlTmV3SWR4XSA9IHRoZU9sZEltYWdlOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGhlYWRlcnM6IHsKICAgICAgICBhdXRob3JpemF0aW9uOiAnYXV0aG9yaXphdGlvbi10ZXh0JywKICAgICAgfSwKICAgICAgdGhlTGlzdCwKICAgICAgb25EcmFnRW5kLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICAt5pWw5o2u5bGV56S6OiB7eyB0aGVMaXN0IH19LQogICAgPGEtdXBsb2FkLWNhcmQKICAgICAgYWN0aW9uPSJodHRwczovL2FwaS5kZXYubW9zaC5jbi9wdWJsaWMvdXBsb2FkL2ltYWdlL2JpbmFyeSIKICAgICAgcmVzdWx0S2V5PSJkYXRhIgogICAgICB2LW1vZGVsOnZhbHVlPSJ0aGVMaXN0IgogICAgICA6aGVhZGVycz0iaGVhZGVycyIKICAgICAgOmRhdGE9InsgYTogMSB9IgogICAgICBkcmFnZ2FibGUKICAgICAgQGRyYWdFbmQ9Im9uRHJhZ0VuZCIKICAgICAgYWNjZXB0PSJpbWFnZS9wbmcsaW1hZ2UvanBlZyxpbWFnZS9naWYiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB0aGVMaXN0ID0gcmVmKFsnaHR0cHM6Ly9kei1yZXNvdXJjZXMtb3NzLmZhbnpoaS5jbi9pbWFnZXMvZWUvMjQvNTQ0Nzk1YmY1OWE4MzQzNzMxYzM1MDFjNmI0ZS5qcGcnLCAnaHR0cHM6Ly9kei1yZXNvdXJjZXMtb3NzLmZhbnpoaS5jbi9pbWFnZXMvY2MvNGUvMDYzYjliNzFmOGE1MTlkNzUyNjhmOWUwNjc5Zi5qcGcnXSk7CgogICAgY29uc3Qgb25EcmFnRW5kID0gKHRoZU9sZElkeCwgdGhlTmV3SWR4KSA9PiB7CiAgICAgIGNvbnN0IHRoZU9sZEltYWdlID0gdGhlTGlzdC52YWx1ZVt0aGVPbGRJZHhdOwogICAgICB0aGVMaXN0LnZhbHVlW3RoZU9sZElkeF0gPSB0aGVMaXN0LnZhbHVlW3RoZU5ld0lkeF07CiAgICAgIHRoZUxpc3QudmFsdWVbdGhlTmV3SWR4XSA9IHRoZU9sZEltYWdlOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIHRoZUxpc3QsCiAgICAgIG9uRHJhZ0VuZCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:c(()=>[t("div",null,[n(" -\u6570\u636E\u5C55\u793A: "+v(a.theList)+"- ",1),h(l,{action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data",value:a.theList,"onUpdate:value":s[0]||(s[0]=u=>a.theList=u),headers:a.headers,data:{a:1},draggable:"",onDragEnd:a.onDragEnd,accept:"image/png,image/jpeg,image/gif"},null,8,["value","headers","onDragEnd"])])]),htmlCode:c(()=>[Z]),jsVersionHtml:c(()=>[y]),_:1},8,["jsfiddle"])}var w=g(A,[["render",W]]);const z=m({setup(){const a=f(["https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png","https://cdn.dev.mosh.cn/image/34/19/9e08f1618c9f8a4fd073290db3be.png"]);return{headers:{authorization:"authorization-text"},list:a,onChangeUpload(s){a.value=s}}}}),G=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-card")]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"resultKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("list"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":headers"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("headers"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@changeUpload"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onChangeUpload"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"draggable"),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" list "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token string"},"'https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},"'https://cdn.dev.mosh.cn/image/34/19/9e08f1618c9f8a4fd073290db3be.png'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      headers`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        authorization`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'authorization-text'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      list`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function"},"onChangeUpload"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"newList"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        list`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(" newList"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),U=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-upload-card")]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://api.dev.mosh.cn/public/upload/image/binary"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"resultKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("list"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":headers"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("headers"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@changeUpload"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onChangeUpload"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"draggable"),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" list "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'https://cdn.dev.mosh.cn/image/55/24/e172e9cc8c0dd981a92efffd7bbf.png'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'https://cdn.dev.mosh.cn/image/34/19/9e08f1618c9f8a4fd073290db3be.png'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      headers`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        authorization`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'authorization-text'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      list`),t("span",{class:"token punctuation"},","),n(`

      `),t("span",{class:"token function"},"onChangeUpload"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"newList"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        list`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(" newList"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function j(a,s,e,o,p,k){const l=d("a-upload-card"),r=d("demo-box");return i(),b(r,{jsfiddle:{us:"`draggable`",cn:"`draggable`",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>draggable</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>draggable</code></p>
`,order:0,title:{"zh-CN":"\u53EF\u62D6\u62FD","en-US":"Drag"},relativePath:"components/upload-card/demo/drag.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1jYXJkCiAgICBhY3Rpb249Imh0dHBzOi8vYXBpLmRldi5tb3NoLmNuL3B1YmxpYy91cGxvYWQvaW1hZ2UvYmluYXJ5IgogICAgcmVzdWx0S2V5PSJkYXRhIgogICAgdi1tb2RlbDp2YWx1ZT0ibGlzdCIKICAgIDpoZWFkZXJzPSJoZWFkZXJzIgogICAgQGNoYW5nZVVwbG9hZD0ib25DaGFuZ2VVcGxvYWQiCiAgICBkcmFnZ2FibGUKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGxpc3QgPSByZWYoWwogICAgICAnaHR0cHM6Ly9jZG4uZGV2Lm1vc2guY24vaW1hZ2UvNTUvMjQvZTE3MmU5Y2M4YzBkZDk4MWE5MmVmZmZkN2JiZi5wbmcnLAogICAgICAnaHR0cHM6Ly9jZG4uZGV2Lm1vc2guY24vaW1hZ2UvMzQvMTkvOWUwOGYxNjE4YzlmOGE0ZmQwNzMyOTBkYjNiZS5wbmcnLAogICAgXSk7CiAgICByZXR1cm4gewogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGxpc3QsCiAgICAgIG9uQ2hhbmdlVXBsb2FkKG5ld0xpc3QpIHsKICAgICAgICBsaXN0LnZhbHVlID0gbmV3TGlzdDsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1jYXJkCiAgICBhY3Rpb249Imh0dHBzOi8vYXBpLmRldi5tb3NoLmNuL3B1YmxpYy91cGxvYWQvaW1hZ2UvYmluYXJ5IgogICAgcmVzdWx0S2V5PSJkYXRhIgogICAgdi1tb2RlbDp2YWx1ZT0ibGlzdCIKICAgIDpoZWFkZXJzPSJoZWFkZXJzIgogICAgQGNoYW5nZVVwbG9hZD0ib25DaGFuZ2VVcGxvYWQiCiAgICBkcmFnZ2FibGUKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBsaXN0ID0gcmVmKFsnaHR0cHM6Ly9jZG4uZGV2Lm1vc2guY24vaW1hZ2UvNTUvMjQvZTE3MmU5Y2M4YzBkZDk4MWE5MmVmZmZkN2JiZi5wbmcnLCAnaHR0cHM6Ly9jZG4uZGV2Lm1vc2guY24vaW1hZ2UvMzQvMTkvOWUwOGYxNjE4YzlmOGE0ZmQwNzMyOTBkYjNiZS5wbmcnXSk7CiAgICByZXR1cm4gewogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGxpc3QsCgogICAgICBvbkNoYW5nZVVwbG9hZChuZXdMaXN0KSB7CiAgICAgICAgbGlzdC52YWx1ZSA9IG5ld0xpc3Q7CiAgICAgIH0sCgogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:c(()=>[h(l,{action:"https://api.dev.mosh.cn/public/upload/image/binary",resultKey:"data",value:a.list,"onUpdate:value":s[0]||(s[0]=u=>a.list=u),headers:a.headers,onChangeUpload:a.onChangeUpload,draggable:""},null,8,["value","headers","onChangeUpload"])]),htmlCode:c(()=>[G]),jsVersionHtml:c(()=>[U]),_:1},8,["jsfiddle"])}var S=g(z,[["render",j]]);const V={pageData:{title:"UploadCard",description:"",frontmatter:{category:"Components",subtitle:"\u4E0A\u4F20",type:"\u6570\u636E\u5F55\u5165",title:"UploadCard",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:2,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""}],relativePath:"components/upload-card/index.zh-CN.md",content:`
\u591A\u5F20\u56FE\u7247\u7167\u7247\u7684\u5C01\u88C5\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u591A\u5F20\u4E0A\u4F20\u56FE\u7247
- \u5361\u7247\u5C55\u793A

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| value(v-model) | \u4E0A\u4F20\u7684\u503C | string \\| object | - | - |
| onFormChange | \u4E0A\u4F20\u4E4B\u540E\u89E6\u53D1\u7684\u65B9\u6CD5 | function | () =&gt; {} | - |
| mergeOriginDatas | \u8BBE\u7F6E form \u63D0\u4EA4\u7684\u6570\u636E | function | - | - |
| headers | \u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E | - | - |  |
| placeholder | \u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848 | - | - |  |
| accept | \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | &#39;image/png&#39;, &#39;image/jpeg&#39; |  |
| action | \u4E0A\u4F20\u7684\u5730\u5740 | string | \u65E0 |  |
| autoUpload | \u662F\u5426\u81EA\u52A8\u4E0A\u4F20 | boolean | true |  |
| resultKey | ajax \u8FD4\u56DE\u6765\u7684\u6570\u636E\u5B58\u653E\u7684\u5B57\u6BB5 | string | &#39;data&#39; |  |
| nameKey | \u56FE\u7247\u540D\u5B57\u5B58\u50A8\u7684\u5B57\u6BB5 | string | &#39;name&#39; |  |
| urlKey | \u56FE\u7247\u5730\u5740\u5B58\u50A8\u7684\u5B57\u6BB5 | string | &#39;url&#39; |  |
| limitSize | \u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F | number | 2(M) |  |
| disabled | \u7981\u7528 | boolean | - |  |
| draggable | \u62D6\u62FD\u6539\u53D8\u4F4D\u7F6E | boolean | - | 3.12.0 |
| imageWidth | \u56FE\u7247\u5BBD\u5EA6 | number | 100 |  |
| data | \u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5 | object\\|(file) =&gt; object | \u65E0 |  | 4.23.0 |
| imageHeight | \u56FE\u7247\u9AD8\u5EA6 | number | 100 |  |
| errorImage | value \u52A0\u8F7D\u5931\u8D25\u7684\u663E\u793A | string |  |  |
| size | \u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A \`small\` \`large\` \u6216\u8005\u4E0D\u8BBE | string | \`default\` |  |
| maxUploadCount | \u6700\u591A\u4E0A\u4F20\u591A\u5C11\u5F20 | number | - |  |
| objectFit | \u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | contain \\| cover | - |  |
| multiple | \u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C\`ie10+\` \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002 | boolean | false | 3.47.0 |
| cropper | \u88C1\u5207\u529F\u80FD | boolean | false |  | 4.30.0 |
| cropperProps | \u88C1\u5207\u529F\u80FD\u7EC4\u4EF6\u7684\u914D\u7F6E | object | - |  | 4.30.0 |

## \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0     | \u8BF4\u660E                                           | \u56DE\u8C03\u53C2\u6570       | \u7248\u672C |
| ------------ | ---------------------------------------------- | -------------- | ---- | --- |
| change       | \u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 [change](#change)   | Function       | \u65E0   |     |
| changeUpload | \u4E0A\u4F20\u6539\u53D8\uFF0C\u4E0E change \u5206\u9694\uFF0C\u7528\u5728 form pro \u914D\u7F6E\u4E2D | Function(file) | \u65E0   |     |
| dragEnd | \u62D6\u62FD\u6539\u53D8\u987A\u5E8F\u5B8C\u6210\u89E6\u53D1 | Function(oldIndex, newIndex) | \u65E0   |     |
`,html:`<p>\u591A\u5F20\u56FE\u7247\u7167\u7247\u7684\u5C01\u88C5\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u9700\u8981\u591A\u5F20\u4E0A\u4F20\u56FE\u7247</li>
<li>\u5361\u7247\u5C55\u793A</li>
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
<td>headers</td>
<td>\u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848</td>
<td>-</td>
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
<td>disabled</td>
<td>\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>draggable</td>
<td>\u62D6\u62FD\u6539\u53D8\u4F4D\u7F6E</td>
<td>boolean</td>
<td>-</td>
<td>3.12.0</td>
</tr>
<tr>
<td>imageWidth</td>
<td>\u56FE\u7247\u5BBD\u5EA6</td>
<td>number</td>
<td>100</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td>
<td>object|(file) =&gt; object</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>imageHeight</td>
<td>\u56FE\u7247\u9AD8\u5EA6</td>
<td>number</td>
<td>100</td>
<td></td>
</tr>
<tr>
<td>errorImage</td>
<td>value \u52A0\u8F7D\u5931\u8D25\u7684\u663E\u793A</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>maxUploadCount</td>
<td>\u6700\u591A\u4E0A\u4F20\u591A\u5C11\u5F20</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>objectFit</td>
<td>\u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener noreferrer">object-fit</a></td>
<td>contain | cover</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td>
<td>boolean</td>
<td>false</td>
<td>3.47.0</td>
</tr>
<tr>
<td>cropper</td>
<td>\u88C1\u5207\u529F\u80FD</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>cropperProps</td>
<td>\u88C1\u5207\u529F\u80FD\u7EC4\u4EF6\u7684\u914D\u7F6E</td>
<td>object</td>
<td>-</td>
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
<tr>
<td>dragEnd</td>
<td>\u62D6\u62FD\u6539\u53D8\u987A\u5E8F\u5B8C\u6210\u89E6\u53D1</td>
<td>Function(oldIndex, newIndex)</td>
<td>\u65E0</td>
</tr>
</tbody>
</table>
`,lastUpdated:1713329471645}},B={class:"markdown"},X=I('<p>\u591A\u5F20\u56FE\u7247\u7167\u7247\u7684\u5C01\u88C5\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u9700\u8981\u591A\u5F20\u4E0A\u4F20\u56FE\u7247</li><li>\u5361\u7247\u5C55\u793A</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u4E0A\u4F20\u7684\u503C</td><td>string | object</td><td>-</td><td>-</td></tr><tr><td>onFormChange</td><td>\u4E0A\u4F20\u4E4B\u540E\u89E6\u53D1\u7684\u65B9\u6CD5</td><td>function</td><td>() =&gt; {}</td><td>-</td></tr><tr><td>mergeOriginDatas</td><td>\u8BBE\u7F6E form \u63D0\u4EA4\u7684\u6570\u636E</td><td>function</td><td>-</td><td>-</td></tr><tr><td>headers</td><td>\u4E0A\u4F20\u56FE\u7247\u7684 headers \u8BBE\u7F6E</td><td>-</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>\u4E0A\u4F20\u6309\u94AE\u7684\u6587\u6848</td><td>-</td><td>-</td><td></td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>&#39;image/png&#39;, &#39;image/jpeg&#39;</td><td></td></tr><tr><td>action</td><td>\u4E0A\u4F20\u7684\u5730\u5740</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>autoUpload</td><td>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resultKey</td><td>ajax \u8FD4\u56DE\u6765\u7684\u6570\u636E\u5B58\u653E\u7684\u5B57\u6BB5</td><td>string</td><td>&#39;data&#39;</td><td></td></tr><tr><td>nameKey</td><td>\u56FE\u7247\u540D\u5B57\u5B58\u50A8\u7684\u5B57\u6BB5</td><td>string</td><td>&#39;name&#39;</td><td></td></tr><tr><td>urlKey</td><td>\u56FE\u7247\u5730\u5740\u5B58\u50A8\u7684\u5B57\u6BB5</td><td>string</td><td>&#39;url&#39;</td><td></td></tr><tr><td>limitSize</td><td>\u56FE\u7247\u9650\u5236\u7684\u5927\u5C0F</td><td>number</td><td>2(M)</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>draggable</td><td>\u62D6\u62FD\u6539\u53D8\u4F4D\u7F6E</td><td>boolean</td><td>-</td><td>3.12.0</td></tr><tr><td>imageWidth</td><td>\u56FE\u7247\u5BBD\u5EA6</td><td>number</td><td>100</td><td></td></tr><tr><td>data</td><td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td><td>object|(file) =&gt; object</td><td>\u65E0</td><td></td></tr><tr><td>imageHeight</td><td>\u56FE\u7247\u9AD8\u5EA6</td><td>number</td><td>100</td><td></td></tr><tr><td>errorImage</td><td>value \u52A0\u8F7D\u5931\u8D25\u7684\u663E\u793A</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>small</code> <code>large</code> \u6216\u8005\u4E0D\u8BBE</td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>maxUploadCount</td><td>\u6700\u591A\u4E0A\u4F20\u591A\u5C11\u5F20</td><td>number</td><td>-</td><td></td></tr><tr><td>objectFit</td><td>\u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener noreferrer">object-fit</a></td><td>contain | cover</td><td>-</td><td></td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td><td>boolean</td><td>false</td><td>3.47.0</td></tr><tr><td>cropper</td><td>\u88C1\u5207\u529F\u80FD</td><td>boolean</td><td>false</td><td></td></tr><tr><td>cropperProps</td><td>\u88C1\u5207\u529F\u80FD\u7EC4\u4EF6\u7684\u914D\u7F6E</td><td>object</td><td>-</td><td></td></tr></tbody></table><h2 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td><td>Function</td><td>\u65E0</td></tr><tr><td>changeUpload</td><td>\u4E0A\u4F20\u6539\u53D8\uFF0C\u4E0E change \u5206\u9694\uFF0C\u7528\u5728 form pro \u914D\u7F6E\u4E2D</td><td>Function(file)</td><td>\u65E0</td></tr><tr><td>dragEnd</td><td>\u62D6\u62FD\u6539\u53D8\u987A\u5E8F\u5B8C\u6210\u89E6\u53D1</td><td>Function(oldIndex, newIndex)</td><td>\u65E0</td></tr></tbody></table>',7),Y=[X];function F(a,s,e,o,p,k){return i(),C("article",B,Y)}var L=g(V,[["render",F]]);const N={pageData:{title:"UploadCard",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"UploadCard",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:2,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""}],relativePath:"components/upload-card/index.en-US.md",content:`
Packaging of multiple pictures.

## When To Use

- Need multiple uploaded pictures
- Card display

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Uploaded value | string \\| object | - | - |
| onFormChange | Method triggered after uploading | function | () =&gt; {} | - |
| mergeOriginDatas | Set the data submitted by the form | function | - | - |
| headers | Header settings for uploading pictures | - | - |  |
| placeholder | Copy of upload button | - | - |  |
| accept | For the file types to be uploaded, see [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | &#39;image/png&#39;, &#39;image/jpeg&#39; |  |
| action | Upload address | string | \u65E0 |  |
| autoUpload | Auto upload | boolean | true |  |
| resultKey | The field where the data returned by AJAX is stored | string | &#39;data&#39; |  |
| nameKey | Field of picture name storage | string | &#39;name&#39; |  |
| urlKey | Field of picture address storage | string | &#39;url&#39; |  |
| limitSize | Picture limit size | number | 2(M) |  |
| disabled | Disabled | boolean | - |  |
| draggable | Drag to change position | boolean | - | 3.12.0 |
| imageWidth | Image width | number | 100 |  |
| imageHeight | Image height | number | 100 |  |
| errorImage | Display of value loading failure | string |  |  |
| size | Set the button size. The optional values are &#39;small&#39;, &#39;large&#39; or none | string | \`default\` |  |
| maxUploadCount | How many copies can I upload at most | number | - |  |
| objectFit | Determine how the picture fits into the container box, the same as native [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | contain \\| cover | - |  |
| multiple | Whether to support selected multiple file. \`IE10+\` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false | 3.47.0 |
| maxCount | Limit the number of uploaded files. Will replace current one when \`maxCount\` is \`1\` | number | - | 3.38.0 |

## \u4E8B\u4EF6

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- | --- |
| change | The status when uploading files is changed, see [change](#change) | Function | \u65E0 |  |
| changeUpload | Upload changes, separated from change, and used in form pro configuration | Function(file) | \u65E0 |  |
`,html:`<p>Packaging of multiple pictures.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>Need multiple uploaded pictures</li>
<li>Card display</li>
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
<td>headers</td>
<td>Header settings for uploading pictures</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>Copy of upload button</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>accept</td>
<td>For the file types to be uploaded, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
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
<td>draggable</td>
<td>Drag to change position</td>
<td>boolean</td>
<td>-</td>
<td>3.12.0</td>
</tr>
<tr>
<td>imageWidth</td>
<td>Image width</td>
<td>number</td>
<td>100</td>
<td></td>
</tr>
<tr>
<td>imageHeight</td>
<td>Image height</td>
<td>number</td>
<td>100</td>
<td></td>
</tr>
<tr>
<td>errorImage</td>
<td>Display of value loading failure</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Set the button size. The optional values are 'small', 'large' or none</td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>maxUploadCount</td>
<td>How many copies can I upload at most</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>objectFit</td>
<td>Determine how the picture fits into the container box, the same as native <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener noreferrer">object-fit</a></td>
<td>contain | cover</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to support selected multiple file. <code>IE10+</code> supported. You can select multiple files with CTRL holding down while multiple is set to be true</td>
<td>boolean</td>
<td>false</td>
<td>3.47.0</td>
</tr>
<tr>
<td>maxCount</td>
<td>Limit the number of uploaded files. Will replace current one when <code>maxCount</code> is <code>1</code></td>
<td>number</td>
<td>-</td>
<td>3.38.0</td>
</tr>
</tbody>
</table>
<h2 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
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
`,lastUpdated:1701878243970}},H={class:"markdown"},x=I('<p>Packaging of multiple pictures.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Need multiple uploaded pictures</li><li>Card display</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>value(v-model)</td><td>Uploaded value</td><td>string | object</td><td>-</td><td>-</td></tr><tr><td>onFormChange</td><td>Method triggered after uploading</td><td>function</td><td>() =&gt; {}</td><td>-</td></tr><tr><td>mergeOriginDatas</td><td>Set the data submitted by the form</td><td>function</td><td>-</td><td>-</td></tr><tr><td>headers</td><td>Header settings for uploading pictures</td><td>-</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>Copy of upload button</td><td>-</td><td>-</td><td></td></tr><tr><td>accept</td><td>For the file types to be uploaded, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>&#39;image/png&#39;, &#39;image/jpeg&#39;</td><td></td></tr><tr><td>action</td><td>Upload address</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>autoUpload</td><td>Auto upload</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resultKey</td><td>The field where the data returned by AJAX is stored</td><td>string</td><td>&#39;data&#39;</td><td></td></tr><tr><td>nameKey</td><td>Field of picture name storage</td><td>string</td><td>&#39;name&#39;</td><td></td></tr><tr><td>urlKey</td><td>Field of picture address storage</td><td>string</td><td>&#39;url&#39;</td><td></td></tr><tr><td>limitSize</td><td>Picture limit size</td><td>number</td><td>2(M)</td><td></td></tr><tr><td>disabled</td><td>Disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>draggable</td><td>Drag to change position</td><td>boolean</td><td>-</td><td>3.12.0</td></tr><tr><td>imageWidth</td><td>Image width</td><td>number</td><td>100</td><td></td></tr><tr><td>imageHeight</td><td>Image height</td><td>number</td><td>100</td><td></td></tr><tr><td>errorImage</td><td>Display of value loading failure</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>Set the button size. The optional values are &#39;small&#39;, &#39;large&#39; or none</td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>maxUploadCount</td><td>How many copies can I upload at most</td><td>number</td><td>-</td><td></td></tr><tr><td>objectFit</td><td>Determine how the picture fits into the container box, the same as native <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noopener noreferrer">object-fit</a></td><td>contain | cover</td><td>-</td><td></td></tr><tr><td>multiple</td><td>Whether to support selected multiple file. <code>IE10+</code> supported. You can select multiple files with CTRL holding down while multiple is set to be true</td><td>boolean</td><td>false</td><td>3.47.0</td></tr><tr><td>maxCount</td><td>Limit the number of uploaded files. Will replace current one when <code>maxCount</code> is <code>1</code></td><td>number</td><td>-</td><td>3.38.0</td></tr></tbody></table><h2 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>The status when uploading files is changed, see <a href="#change">change</a></td><td>Function</td><td>\u65E0</td></tr><tr><td>changeUpload</td><td>Upload changes, separated from change, and used in form pro configuration</td><td>Function(file)</td><td>\u65E0</td></tr></tbody></table>',7),R=[x];function D(a,s,e,o,p,k){return i(),C("article",H,R)}var P=g(N,[["render",D]]);const K=m({CN:L,US:P,components:{Basic:w,Drag:S}});function M(a,s,e,o,p,k){const l=d("Basic"),r=d("Drag"),u=d("demo-sort");return i(),b(u,null,{default:c(()=>[h(l),h(r)]),_:1})}var J=g(K,[["render",M]]);export{J as default};

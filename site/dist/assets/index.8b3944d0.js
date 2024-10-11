import{d as A,k as I,w as G,aq as p,J as C,bN as v,bO as o,e as d,G as n,H as t,bP as b,a2 as V,E as y,F as Y,bL as H,bM as S,cb as Z}from"./vendor.0f0e4632.js";import{_ as m}from"./index.f6b32fa6.js";const w=(a,s=1)=>({value:a.repeat(s)}),X=A({setup(){const a=I(""),s=I([]),r=l=>{console.log("searchText"),s.value=l?[w(l),w(l,2),w(l,3)]:[]},i=l=>{console.log("onSelect",l)};return G(a,()=>{console.log("value",a.value)}),{value:a,options:s,onSearch:r,onSelect:i}}}),N=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSelect"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockVal"),t(),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" mockVal "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("str"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(" repeat "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"MockVal"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"repeat"),n("span",{class:"token punctuation"},"("),t("repeat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("MockVal"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("searchText"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'searchText'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t(`searchText
        `),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"mockVal"),n("span",{class:"token punctuation"},"("),t("searchText"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"mockVal"),n("span",{class:"token punctuation"},"("),t("searchText"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"mockVal"),n("span",{class:"token punctuation"},"("),t("searchText"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      onSearch`),n("span",{class:"token punctuation"},","),t(`
      onSelect`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),F=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSelect"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"mockVal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("str"),n("span",{class:"token punctuation"},","),t(" repeat "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(" str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"repeat"),n("span",{class:"token punctuation"},"("),t("repeat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"searchText"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'searchText'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("searchText "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"mockVal"),n("span",{class:"token punctuation"},"("),t("searchText"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"mockVal"),n("span",{class:"token punctuation"},"("),t("searchText"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"mockVal"),n("span",{class:"token punctuation"},"("),t("searchText"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      onSearch`),n("span",{class:"token punctuation"},","),t(`
      onSelect`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function x(a,s,r,i,l,c){const e=p("a-auto-complete"),k=p("demo-box");return C(),v(k,{jsfiddle:{us:"Basic Usage, set datasource of autocomplete with `options` property.",cn:"\u57FA\u672C\u4F7F\u7528\u3002\u901A\u8FC7 options \u8BBE\u7F6E\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u4F7F\u7528\u3002\u901A\u8FC7 options \u8BBE\u7F6E\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic Usage, set datasource of autocomplete with <code>options</code> property.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/auto-complete/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9ImlucHV0IGhlcmUiCiAgICBAc2VsZWN0PSJvblNlbGVjdCIKICAgIEBzZWFyY2g9Im9uU2VhcmNoIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwoKaW50ZXJmYWNlIE1vY2tWYWwgewogIHZhbHVlOiBzdHJpbmc7Cn0KY29uc3QgbW9ja1ZhbCA9IChzdHI6IHN0cmluZywgcmVwZWF0ID0gMSk6IE1vY2tWYWwgPT4gewogIHJldHVybiB7CiAgICB2YWx1ZTogc3RyLnJlcGVhdChyZXBlYXQpLAogIH07Cn07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBvcHRpb25zID0gcmVmPE1vY2tWYWxbXT4oW10pOwogICAgY29uc3Qgb25TZWFyY2ggPSAoc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2hUZXh0Jyk7CiAgICAgIG9wdGlvbnMudmFsdWUgPSAhc2VhcmNoVGV4dAogICAgICAgID8gW10KICAgICAgICA6IFttb2NrVmFsKHNlYXJjaFRleHQpLCBtb2NrVmFsKHNlYXJjaFRleHQsIDIpLCBtb2NrVmFsKHNlYXJjaFRleHQsIDMpXTsKICAgIH07CiAgICBjb25zdCBvblNlbGVjdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdvblNlbGVjdCcsIHZhbHVlKTsKICAgIH07CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBvcHRpb25zLAogICAgICBvblNlYXJjaCwKICAgICAgb25TZWxlY3QsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9ImlucHV0IGhlcmUiCiAgICBAc2VsZWN0PSJvblNlbGVjdCIKICAgIEBzZWFyY2g9Im9uU2VhcmNoIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBtb2NrVmFsID0gKHN0ciwgcmVwZWF0ID0gMSkgPT4gewogIHJldHVybiB7CiAgICB2YWx1ZTogc3RyLnJlcGVhdChyZXBlYXQpLAogIH07Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoJycpOwogICAgY29uc3Qgb3B0aW9ucyA9IHJlZihbXSk7CgogICAgY29uc3Qgb25TZWFyY2ggPSBzZWFyY2hUZXh0ID0+IHsKICAgICAgY29uc29sZS5sb2coJ3NlYXJjaFRleHQnKTsKICAgICAgb3B0aW9ucy52YWx1ZSA9ICFzZWFyY2hUZXh0ID8gW10gOiBbbW9ja1ZhbChzZWFyY2hUZXh0KSwgbW9ja1ZhbChzZWFyY2hUZXh0LCAyKSwgbW9ja1ZhbChzZWFyY2hUZXh0LCAzKV07CiAgICB9OwoKICAgIGNvbnN0IG9uU2VsZWN0ID0gdmFsdWUgPT4gewogICAgICBjb25zb2xlLmxvZygnb25TZWxlY3QnLCB2YWx1ZSk7CiAgICB9OwoKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlLnZhbHVlKTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIG9wdGlvbnMsCiAgICAgIG9uU2VhcmNoLAogICAgICBvblNlbGVjdCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[d(e,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),options:a.options,style:{width:"200px"},placeholder:"input here",onSelect:a.onSelect,onSearch:a.onSearch},null,8,["value","options","onSelect","onSearch"])]),htmlCode:o(()=>[N]),jsVersionHtml:o(()=>[F]),_:1},8,["jsfiddle"])}var K=m(X,[["render",x]]);const J=A({setup(){const a=I(""),s=I([]);return{value:a,options:s,handleSearch:i=>{let l;!i||i.indexOf("@")>=0?l=[]:l=["gmail.com","163.com","qq.com"].map(c=>({value:`${i}@${c}`})),s.value=l}}}}),R={style:{"font-weight":"bold"}},L=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ val.split('@')[0] }} @
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ val.split('@')[1] }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("val"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" res"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("val "),n("span",{class:"token operator"},"||"),t(" val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'gmail.com'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'163.com'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'qq.com'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"domain"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("val"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"@"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("domain"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),P=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ val.split('@')[0] }} @
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ val.split('@')[1] }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"val"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" res"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("val "),n("span",{class:"token operator"},"||"),t(" val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'gmail.com'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'163.com'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'qq.com'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"domain"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("val"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"@"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("domain"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function j(a,s,r,i,l,c){const e=p("a-auto-complete"),k=p("demo-box");return C(),v(k,{jsfiddle:{us:"For 3.0+, You could pass `v-slot:option` to custom option.",cn:"3.0 \u4EE5\u4E0A\u7248\u672C\uFF0C\u53EF\u4EE5\u4F20\u9012 `v-slot:option` \u6765\u81EA\u5B9A\u4E49 Option\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>3.0 \u4EE5\u4E0A\u7248\u672C\uFF0C\u53EF\u4EE5\u4F20\u9012 <code>v-slot:option</code> \u6765\u81EA\u5B9A\u4E49 Option\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>For 3.0+, You could pass <code>v-slot:option</code> to custom option.</p>
`,order:1,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9009\u9879","en-US":"Customized"},relativePath:"components/auto-complete/demo/options.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSJpbnB1dCBoZXJlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBAc2VhcmNoPSJoYW5kbGVTZWFyY2giCiAgPgogICAgPHRlbXBsYXRlICNvcHRpb249InsgdmFsdWU6IHZhbCB9Ij4KICAgICAge3sgdmFsLnNwbGl0KCdAJylbMF0gfX0gQAogICAgICA8c3BhbiBzdHlsZT0iZm9udC13ZWlnaHQ6IGJvbGQiPnt7IHZhbC5zcGxpdCgnQCcpWzFdIH19PC9zcGFuPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtYXV0by1jb21wbGV0ZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBvcHRpb25zID0gcmVmPHsgdmFsdWU6IHN0cmluZyB9W10+KFtdKTsKICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4gewogICAgICBsZXQgcmVzOiB7IHZhbHVlOiBzdHJpbmcgfVtdOwogICAgICBpZiAoIXZhbCB8fCB2YWwuaW5kZXhPZignQCcpID49IDApIHsKICAgICAgICByZXMgPSBbXTsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXMgPSBbJ2dtYWlsLmNvbScsICcxNjMuY29tJywgJ3FxLmNvbSddLm1hcCgoZG9tYWluKSA9PiAoeyB2YWx1ZTogYCR7dmFsfUAke2RvbWFpbn1gIH0pKTsKICAgICAgfQogICAgICBvcHRpb25zLnZhbHVlID0gcmVzOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgb3B0aW9ucywKICAgICAgaGFuZGxlU2VhcmNoLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSJpbnB1dCBoZXJlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBAc2VhcmNoPSJoYW5kbGVTZWFyY2giCiAgPgogICAgPHRlbXBsYXRlICNvcHRpb249InsgdmFsdWU6IHZhbCB9Ij4KICAgICAge3sgdmFsLnNwbGl0KCdAJylbMF0gfX0gQAogICAgICA8c3BhbiBzdHlsZT0iZm9udC13ZWlnaHQ6IGJvbGQiPnt7IHZhbC5zcGxpdCgnQCcpWzFdIH19PC9zcGFuPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtYXV0by1jb21wbGV0ZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoJycpOwogICAgY29uc3Qgb3B0aW9ucyA9IHJlZihbXSk7CgogICAgY29uc3QgaGFuZGxlU2VhcmNoID0gdmFsID0+IHsKICAgICAgbGV0IHJlczsKCiAgICAgIGlmICghdmFsIHx8IHZhbC5pbmRleE9mKCdAJykgPj0gMCkgewogICAgICAgIHJlcyA9IFtdOwogICAgICB9IGVsc2UgewogICAgICAgIHJlcyA9IFsnZ21haWwuY29tJywgJzE2My5jb20nLCAncXEuY29tJ10ubWFwKGRvbWFpbiA9PiAoewogICAgICAgICAgdmFsdWU6IGAke3ZhbH1AJHtkb21haW59YCwKICAgICAgICB9KSk7CiAgICAgIH0KCiAgICAgIG9wdGlvbnMudmFsdWUgPSByZXM7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBvcHRpb25zLAogICAgICBoYW5kbGVTZWFyY2gsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[d(e,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),style:{width:"200px"},placeholder:"input here",options:a.options,onSearch:a.handleSearch},{option:o(({value:u})=>[t(b(u.split("@")[0])+" @ ",1),n("span",R,b(u.split("@")[1]),1)]),_:1},8,["value","options","onSearch"])]),htmlCode:o(()=>[L]),jsVersionHtml:o(()=>[P]),_:1},8,["jsfiddle"])}var z=m(J,[["render",j]]);const U=A({setup(){const a=I(""),s=I([]);return{value:a,options:s,onSelect:c=>{console.log("onSelect",c)},handleSearch:c=>{s.value=c?[{value:c},{value:c+c},{value:c+c+c}]:[]},handleKeyPress:c=>{console.log("handleKeyPress",c)}}}}),D=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSelect"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-textarea")]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("custom"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 50px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@keypress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleKeyPress"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t(`value
        `),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(" value "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(" value "),n("span",{class:"token operator"},"+"),t(" value "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(" value "),n("span",{class:"token operator"},"+"),t(" value "),n("span",{class:"token operator"},"+"),t(" value "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleKeyPress"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("ev"),n("span",{class:"token operator"},":"),t(" KeyboardEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'handleKeyPress'"),n("span",{class:"token punctuation"},","),t(" ev"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      onSelect`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
      handleKeyPress`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSelect"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-textarea")]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("custom"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 50px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@keypress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleKeyPress"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("value "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(" value "),n("span",{class:"token operator"},"+"),t(" value"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(" value "),n("span",{class:"token operator"},"+"),t(" value "),n("span",{class:"token operator"},"+"),t(" value"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleKeyPress"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"ev"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'handleKeyPress'"),n("span",{class:"token punctuation"},","),t(" ev"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      onSelect`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
      handleKeyPress`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Q(a,s,r,i,l,c){const e=p("a-textarea"),k=p("a-auto-complete"),u=p("demo-box");return C(),v(u,{jsfiddle:{us:"Customize Input Component.",cn:"\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize Input Component.</p>
`,order:2,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6","en-US":"Customize Input Component"},relativePath:"components/auto-complete/demo/custom.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgQHNlYXJjaD0iaGFuZGxlU2VhcmNoIgogICAgQHNlbGVjdD0ib25TZWxlY3QiCiAgPgogICAgPGEtdGV4dGFyZWEKICAgICAgcGxhY2Vob2xkZXI9ImlucHV0IGhlcmUiCiAgICAgIGNsYXNzPSJjdXN0b20iCiAgICAgIHN0eWxlPSJoZWlnaHQ6IDUwcHgiCiAgICAgIEBrZXlwcmVzcz0iaGFuZGxlS2V5UHJlc3MiCiAgICAvPgogIDwvYS1hdXRvLWNvbXBsZXRlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoJycpOwogICAgY29uc3Qgb3B0aW9ucyA9IHJlZjx7IHZhbHVlOiBzdHJpbmcgfVtdPihbXSk7CiAgICBjb25zdCBvblNlbGVjdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdvblNlbGVjdCcsIHZhbHVlKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAodmFsdWU6IHN0cmluZykgPT4gewogICAgICBvcHRpb25zLnZhbHVlID0gIXZhbHVlCiAgICAgICAgPyBbXQogICAgICAgIDogW3sgdmFsdWUgfSwgeyB2YWx1ZTogdmFsdWUgKyB2YWx1ZSB9LCB7IHZhbHVlOiB2YWx1ZSArIHZhbHVlICsgdmFsdWUgfV07CiAgICB9OwogICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2hhbmRsZUtleVByZXNzJywgZXYpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBvcHRpb25zLAogICAgICBvblNlbGVjdCwKICAgICAgaGFuZGxlU2VhcmNoLAogICAgICBoYW5kbGVLZXlQcmVzcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgQHNlYXJjaD0iaGFuZGxlU2VhcmNoIgogICAgQHNlbGVjdD0ib25TZWxlY3QiCiAgPgogICAgPGEtdGV4dGFyZWEKICAgICAgcGxhY2Vob2xkZXI9ImlucHV0IGhlcmUiCiAgICAgIGNsYXNzPSJjdXN0b20iCiAgICAgIHN0eWxlPSJoZWlnaHQ6IDUwcHgiCiAgICAgIEBrZXlwcmVzcz0iaGFuZGxlS2V5UHJlc3MiCiAgICAvPgogIDwvYS1hdXRvLWNvbXBsZXRlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBvcHRpb25zID0gcmVmKFtdKTsKCiAgICBjb25zdCBvblNlbGVjdCA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coJ29uU2VsZWN0JywgdmFsdWUpOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSB2YWx1ZSA9PiB7CiAgICAgIG9wdGlvbnMudmFsdWUgPSAhdmFsdWUgPyBbXSA6IFt7CiAgICAgICAgdmFsdWUsCiAgICAgIH0sIHsKICAgICAgICB2YWx1ZTogdmFsdWUgKyB2YWx1ZSwKICAgICAgfSwgewogICAgICAgIHZhbHVlOiB2YWx1ZSArIHZhbHVlICsgdmFsdWUsCiAgICAgIH1dOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IGV2ID0+IHsKICAgICAgY29uc29sZS5sb2coJ2hhbmRsZUtleVByZXNzJywgZXYpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgb3B0aW9ucywKICAgICAgb25TZWxlY3QsCiAgICAgIGhhbmRsZVNlYXJjaCwKICAgICAgaGFuZGxlS2V5UHJlc3MsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[d(k,{value:a.value,"onUpdate:value":s[0]||(s[0]=g=>a.value=g),options:a.options,style:{width:"200px"},onSearch:a.handleSearch,onSelect:a.onSelect},{default:o(()=>[d(e,{placeholder:"input here",class:"custom",style:{height:"50px"},onKeypress:a.handleKeyPress},null,8,["onKeypress"])]),_:1},8,["value","options","onSearch","onSelect"])]),htmlCode:o(()=>[D]),jsVersionHtml:o(()=>[q]),_:1},8,["jsfiddle"])}var _=m(U,[["render",Q]]);const T=A({setup(){const a=(s,r)=>r.value.toUpperCase().indexOf(s.toUpperCase())>=0;return{value:I(""),options:I([{value:"Burns Bay Road"},{value:"Downing Street"},{value:"Wall Street"}]),filterOption:a}}}),O=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"Option"),t(),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterOption"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("input"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(" option"),n("span",{class:"token operator"},":"),t(" Option")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" option"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(" ref"),n("span",{class:"token operator"},"<"),t("Option"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Burns Bay Road'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Downing Street'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Wall Street'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      filterOption`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterOption"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("input"),n("span",{class:"token punctuation"},","),t(" option")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" option"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Burns Bay Road'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Downing Street'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Wall Street'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      filterOption`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function E(a,s,r,i,l,c){const e=p("a-auto-complete"),k=p("demo-box");return C(),v(k,{jsfiddle:{us:"A non-case-sensitive AutoComplete.",cn:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684 AutoComplete\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684 AutoComplete\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A non-case-sensitive AutoComplete.</p>
`,order:3,title:{"zh-CN":"\u4E0D\u533A\u5206\u5927\u5C0F\u5199","en-US":"Non-case-sensitive AutoComplete"},relativePath:"components/auto-complete/demo/non-case-sensitive.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9ImlucHV0IGhlcmUiCiAgICA6ZmlsdGVyLW9wdGlvbj0iZmlsdGVyT3B0aW9uIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmludGVyZmFjZSBPcHRpb24gewogIHZhbHVlOiBzdHJpbmc7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IE9wdGlvbikgPT4gewogICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b1VwcGVyQ2FzZSgpKSA+PSAwOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoJycpLAogICAgICBvcHRpb25zOiByZWY8T3B0aW9uW10+KFsKICAgICAgICB7IHZhbHVlOiAnQnVybnMgQmF5IFJvYWQnIH0sCiAgICAgICAgeyB2YWx1ZTogJ0Rvd25pbmcgU3RyZWV0JyB9LAogICAgICAgIHsgdmFsdWU6ICdXYWxsIFN0cmVldCcgfSwKICAgICAgXSksCiAgICAgIGZpbHRlck9wdGlvbiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWF1dG8tY29tcGxldGUKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9ImlucHV0IGhlcmUiCiAgICA6ZmlsdGVyLW9wdGlvbj0iZmlsdGVyT3B0aW9uIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbHRlck9wdGlvbiA9IChpbnB1dCwgb3B0aW9uKSA9PiB7CiAgICAgIHJldHVybiBvcHRpb24udmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvVXBwZXJDYXNlKCkpID49IDA7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoJycpLAogICAgICBvcHRpb25zOiByZWYoW3sKICAgICAgICB2YWx1ZTogJ0J1cm5zIEJheSBSb2FkJywKICAgICAgfSwgewogICAgICAgIHZhbHVlOiAnRG93bmluZyBTdHJlZXQnLAogICAgICB9LCB7CiAgICAgICAgdmFsdWU6ICdXYWxsIFN0cmVldCcsCiAgICAgIH1dKSwKICAgICAgZmlsdGVyT3B0aW9uLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[d(e,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),options:a.options,style:{width:"200px"},placeholder:"input here","filter-option":a.filterOption},null,8,["value","options","filter-option"])]),htmlCode:o(()=>[O]),jsVersionHtml:o(()=>[M]),_:1},8,["jsfiddle"])}var $=m(T,[["render",E]]);const nn=[{value:"Libraries",options:[{value:"AntDesign",count:1e4},{value:"AntDesign UI",count:10600}]},{value:"Solutions",options:[{value:"AntDesign UI FAQ",count:60100},{value:"AntDesign FAQ",count:30010}]},{value:"Articles",options:[{value:"AntDesign design language",count:1e5}]},{value:"all"}],tn=A({components:{IconBytedSearch:V},setup(){return{value:I(""),dataSource:nn}}}),f=a=>(H("data-v-4c2c24c6"),a=a(),S(),a),an={class:"certain-category-search-wrapper",style:{width:"250px"}},sn={key:0},on=f(()=>n("a",{style:{float:"right"},href:"https://www.google.com/search?q=antd",target:"_blank",rel:"noopener noreferrer"}," more ",-1)),en={key:1,href:"https://www.google.com/search?q=ant-design-vue",target:"_blank",rel:"noopener noreferrer"},cn={class:"certain-search-item-count"},pn=f(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-search-wrapper"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 250px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-search"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"dropdown-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-search-dropdown"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ width: "),n("span",{class:"token punctuation"},"'"),t("300px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-match-select-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("500"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 250px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dataSource"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.value }}
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(`
              `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right")]),n("span",{class:"token punctuation"},'"')])]),t(`
              `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.google.com/search?q=antd"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token punctuation"},">")]),t(`
              more
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value === "),n("span",{class:"token punctuation"},"'"),t("all"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(`
            `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.google.com/search?q=ant-design-vue"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            View all results
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
          {{ item.title }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-search-item-count"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ item.count }} people"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-input")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffix"),t(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSearch")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-icon"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-input")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedSearch "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-search'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" dataSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Libraries'"),n("span",{class:"token punctuation"},","),t(`
    options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign'"),n("span",{class:"token punctuation"},","),t(`
        count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign UI'"),n("span",{class:"token punctuation"},","),t(`
        count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10600"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Solutions'"),n("span",{class:"token punctuation"},","),t(`
    options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign UI FAQ'"),n("span",{class:"token punctuation"},","),t(`
        count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"60100"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign FAQ'"),n("span",{class:"token punctuation"},","),t(`
        count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30010"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Articles'"),n("span",{class:"token punctuation"},","),t(`
    options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign design language'"),n("span",{class:"token punctuation"},","),t(`
        count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100000"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedSearch`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      dataSource`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #666"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item-group"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),t(" 1px solid #f6f6f6"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" default"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"max-height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},`.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-auto-complete)
  .ant-input-affix-wrapper
  .ant-input-suffix`),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".certain-category-search-wrapper :deep(.certain-search-item-count)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #999"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},`.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-focused)
  .certain-category-icon`),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #108ee9"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".certain-category-search-wrapper :deep(.certain-category-icon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #6e6e6e"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(" all 0.3s "),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t("0.645"),n("span",{class:"token punctuation"},","),t(" 0.045"),n("span",{class:"token punctuation"},","),t(" 0.355"),n("span",{class:"token punctuation"},","),t(" 1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),ln=f(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-search-wrapper"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 250px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-search"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"dropdown-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-search-dropdown"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ width: "),n("span",{class:"token punctuation"},"'"),t("300px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-match-select-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("500"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 250px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dataSource"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.value }}
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(`
              `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right")]),n("span",{class:"token punctuation"},'"')])]),t(`
              `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.google.com/search?q=antd"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
              `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token punctuation"},">")]),t(`
              more
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value === "),n("span",{class:"token punctuation"},"'"),t("all"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(`
            `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.google.com/search?q=ant-design-vue"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            View all results
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
          {{ item.title }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-search-item-count"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ item.count }} people"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-input")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffix"),t(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSearch")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("certain-category-icon"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-input")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedSearch "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-search'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" dataSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Libraries'"),n("span",{class:"token punctuation"},","),t(`
  options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign'"),n("span",{class:"token punctuation"},","),t(`
    count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign UI'"),n("span",{class:"token punctuation"},","),t(`
    count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10600"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Solutions'"),n("span",{class:"token punctuation"},","),t(`
  options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign UI FAQ'"),n("span",{class:"token punctuation"},","),t(`
    count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"60100"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign FAQ'"),n("span",{class:"token punctuation"},","),t(`
    count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30010"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Articles'"),n("span",{class:"token punctuation"},","),t(`
  options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AntDesign design language'"),n("span",{class:"token punctuation"},","),t(`
    count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100000"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedSearch`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      dataSource`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #666"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item-group"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),t(" 1px solid #f6f6f6"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" default"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".certain-category-search-dropdown .ant-select-dropdown-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"max-height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},`.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-auto-complete)
  .ant-input-affix-wrapper
  .ant-input-suffix`),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".certain-category-search-wrapper :deep(.certain-search-item-count)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #999"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},`.certain-category-search-wrapper
  :deep(.certain-category-search.ant-select-focused)
  .certain-category-icon`),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #108ee9"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".certain-category-search-wrapper :deep(.certain-category-icon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #6e6e6e"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(" all 0.3s "),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t("0.645"),n("span",{class:"token punctuation"},","),t(" 0.045"),n("span",{class:"token punctuation"},","),t(" 0.355"),n("span",{class:"token punctuation"},","),t(" 1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function un(a,s,r,i,l,c){const e=p("IconBytedSearch"),k=p("a-input"),u=p("a-auto-complete"),g=p("demo-box");return C(),v(g,{jsfiddle:{us:"Lookup-Patterns - Certain Category.",cn:"\u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Lookup-Patterns - Certain Category.</p>
`,order:4,title:{"zh-CN":"\u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE","en-US":"Lookup-Patterns - Certain Category"},relativePath:"components/auto-complete/demo/certain-category.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLXdyYXBwZXIiIHN0eWxlPSJ3aWR0aDogMjUwcHgiPgogICAgPGEtYXV0by1jb21wbGV0ZQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgY2xhc3M9ImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoIgogICAgICBkcm9wZG93bi1jbGFzcy1uYW1lPSJjZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93biIKICAgICAgOmRyb3Bkb3duLXN0eWxlPSJ7IHdpZHRoOiAnMzAwcHgnIH0iCiAgICAgIHNpemU9ImxhcmdlIgogICAgICA6ZHJvcGRvd24tbWF0Y2gtc2VsZWN0LXdpZHRoPSI1MDAiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjUwcHgiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJ2YWx1ZSIKICAgICAgOm9wdGlvbnM9ImRhdGFTb3VyY2UiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJpdGVtIj4KICAgICAgICA8dGVtcGxhdGUgdi1pZj0iaXRlbS5vcHRpb25zIj4KICAgICAgICAgIDxzcGFuPgogICAgICAgICAgICB7eyBpdGVtLnZhbHVlIH19CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgc3R5bGU9ImZsb2F0OiByaWdodCIKICAgICAgICAgICAgICBocmVmPSJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudGQiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICA+CiAgICAgICAgICAgICAgbW9yZQogICAgICAgICAgICA8L2E+CiAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPSJpdGVtLnZhbHVlID09PSAnYWxsJyI+CiAgICAgICAgICA8YQogICAgICAgICAgICBocmVmPSJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudC1kZXNpZ24tdnVlIgogICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgPgogICAgICAgICAgICBWaWV3IGFsbCByZXN1bHRzCiAgICAgICAgICA8L2E+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPgogICAgICAgICAge3sgaXRlbS50aXRsZSB9fQogICAgICAgICAgPHNwYW4gY2xhc3M9ImNlcnRhaW4tc2VhcmNoLWl0ZW0tY291bnQiPnt7IGl0ZW0uY291bnQgfX0gcGVvcGxlPC9zcGFuPgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDxhLWlucHV0IHBsYWNlaG9sZGVyPSJpbnB1dCBoZXJlIj4KICAgICAgICA8dGVtcGxhdGUgI3N1ZmZpeAogICAgICAgICAgPjxJY29uQnl0ZWRTZWFyY2ggOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgY2xhc3M9ImNlcnRhaW4tY2F0ZWdvcnktaWNvbiIKICAgICAgICAvPjwvdGVtcGxhdGU+CiAgICAgIDwvYS1pbnB1dD4KICAgIDwvYS1hdXRvLWNvbXBsZXRlPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IEljb25CeXRlZFNlYXJjaCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1zZWFyY2gnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IGRhdGFTb3VyY2UgPSBbCiAgewogICAgdmFsdWU6ICdMaWJyYXJpZXMnLAogICAgb3B0aW9uczogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdBbnREZXNpZ24nLAogICAgICAgIGNvdW50OiAxMDAwMCwKICAgICAgfSwKICAgICAgewogICAgICAgIHZhbHVlOiAnQW50RGVzaWduIFVJJywKICAgICAgICBjb3VudDogMTA2MDAsCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgdmFsdWU6ICdTb2x1dGlvbnMnLAogICAgb3B0aW9uczogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdBbnREZXNpZ24gVUkgRkFRJywKICAgICAgICBjb3VudDogNjAxMDAsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ0FudERlc2lnbiBGQVEnLAogICAgICAgIGNvdW50OiAzMDAxMCwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICB2YWx1ZTogJ0FydGljbGVzJywKICAgIG9wdGlvbnM6IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnQW50RGVzaWduIGRlc2lnbiBsYW5ndWFnZScsCiAgICAgICAgY291bnQ6IDEwMDAwMCwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICB2YWx1ZTogJ2FsbCcsCiAgfSwKXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRTZWFyY2gsCiAgfSwKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoJycpLAogICAgICBkYXRhU291cmNlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+CjxzdHlsZT4KLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLWRyb3Bkb3duIC5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZSB7CiAgY29sb3I6ICM2NjY7CiAgZm9udC13ZWlnaHQ6IGJvbGQ7Cn0KCi5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93biAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAgewogIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjZmNmY2Owp9CgouY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd24gLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIHsKICBwYWRkaW5nLWxlZnQ6IDE2cHg7Cn0KCi5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93biAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0uc2hvdy1hbGwgewogIHRleHQtYWxpZ246IGNlbnRlcjsKICBjdXJzb3I6IGRlZmF1bHQ7Cn0KCi5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93biAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51IHsKICBtYXgtaGVpZ2h0OiAzMDBweDsKfQo8L3N0eWxlPgoKPHN0eWxlIHNjb3BlZD4KLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLXdyYXBwZXIKICA6ZGVlcCguY2VydGFpbi1jYXRlZ29yeS1zZWFyY2guYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlKQogIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcgogIC5hbnQtaW5wdXQtc3VmZml4IHsKICByaWdodDogMTJweDsKfQouY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtd3JhcHBlciA6ZGVlcCguY2VydGFpbi1zZWFyY2gtaXRlbS1jb3VudCkgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBjb2xvcjogIzk5OTsKICByaWdodDogMTZweDsKfQouY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtd3JhcHBlcgogIDpkZWVwKC5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC5hbnQtc2VsZWN0LWZvY3VzZWQpCiAgLmNlcnRhaW4tY2F0ZWdvcnktaWNvbiB7CiAgY29sb3I6ICMxMDhlZTk7Cn0KLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLXdyYXBwZXIgOmRlZXAoLmNlcnRhaW4tY2F0ZWdvcnktaWNvbikgewogIGNvbG9yOiAjNmU2ZTZlOwogIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsKICBmb250LXNpemU6IDE2cHg7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLXdyYXBwZXIiIHN0eWxlPSJ3aWR0aDogMjUwcHgiPgogICAgPGEtYXV0by1jb21wbGV0ZQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgY2xhc3M9ImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoIgogICAgICBkcm9wZG93bi1jbGFzcy1uYW1lPSJjZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93biIKICAgICAgOmRyb3Bkb3duLXN0eWxlPSJ7IHdpZHRoOiAnMzAwcHgnIH0iCiAgICAgIHNpemU9ImxhcmdlIgogICAgICA6ZHJvcGRvd24tbWF0Y2gtc2VsZWN0LXdpZHRoPSI1MDAiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjUwcHgiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJ2YWx1ZSIKICAgICAgOm9wdGlvbnM9ImRhdGFTb3VyY2UiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJpdGVtIj4KICAgICAgICA8dGVtcGxhdGUgdi1pZj0iaXRlbS5vcHRpb25zIj4KICAgICAgICAgIDxzcGFuPgogICAgICAgICAgICB7eyBpdGVtLnZhbHVlIH19CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgc3R5bGU9ImZsb2F0OiByaWdodCIKICAgICAgICAgICAgICBocmVmPSJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudGQiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICA+CiAgICAgICAgICAgICAgbW9yZQogICAgICAgICAgICA8L2E+CiAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPSJpdGVtLnZhbHVlID09PSAnYWxsJyI+CiAgICAgICAgICA8YQogICAgICAgICAgICBocmVmPSJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudC1kZXNpZ24tdnVlIgogICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgPgogICAgICAgICAgICBWaWV3IGFsbCByZXN1bHRzCiAgICAgICAgICA8L2E+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPgogICAgICAgICAge3sgaXRlbS50aXRsZSB9fQogICAgICAgICAgPHNwYW4gY2xhc3M9ImNlcnRhaW4tc2VhcmNoLWl0ZW0tY291bnQiPnt7IGl0ZW0uY291bnQgfX0gcGVvcGxlPC9zcGFuPgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDxhLWlucHV0IHBsYWNlaG9sZGVyPSJpbnB1dCBoZXJlIj4KICAgICAgICA8dGVtcGxhdGUgI3N1ZmZpeAogICAgICAgICAgPjxJY29uQnl0ZWRTZWFyY2ggOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgY2xhc3M9ImNlcnRhaW4tY2F0ZWdvcnktaWNvbiIKICAgICAgICAvPjwvdGVtcGxhdGU+CiAgICAgIDwvYS1pbnB1dD4KICAgIDwvYS1hdXRvLWNvbXBsZXRlPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgSWNvbkJ5dGVkU2VhcmNoIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXNlYXJjaCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgZGF0YVNvdXJjZSA9IFt7CiAgdmFsdWU6ICdMaWJyYXJpZXMnLAogIG9wdGlvbnM6IFt7CiAgICB2YWx1ZTogJ0FudERlc2lnbicsCiAgICBjb3VudDogMTAwMDAsCiAgfSwgewogICAgdmFsdWU6ICdBbnREZXNpZ24gVUknLAogICAgY291bnQ6IDEwNjAwLAogIH1dLAp9LCB7CiAgdmFsdWU6ICdTb2x1dGlvbnMnLAogIG9wdGlvbnM6IFt7CiAgICB2YWx1ZTogJ0FudERlc2lnbiBVSSBGQVEnLAogICAgY291bnQ6IDYwMTAwLAogIH0sIHsKICAgIHZhbHVlOiAnQW50RGVzaWduIEZBUScsCiAgICBjb3VudDogMzAwMTAsCiAgfV0sCn0sIHsKICB2YWx1ZTogJ0FydGljbGVzJywKICBvcHRpb25zOiBbewogICAgdmFsdWU6ICdBbnREZXNpZ24gZGVzaWduIGxhbmd1YWdlJywKICAgIGNvdW50OiAxMDAwMDAsCiAgfV0sCn0sIHsKICB2YWx1ZTogJ2FsbCcsCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFNlYXJjaCwKICB9LAoKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoJycpLAogICAgICBkYXRhU291cmNlLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93biAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGUgewogIGNvbG9yOiAjNjY2OwogIGZvbnQtd2VpZ2h0OiBib2xkOwp9CgouY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd24gLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwIHsKICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjZmNjsKfQoKLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLWRyb3Bkb3duIC5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbSB7CiAgcGFkZGluZy1sZWZ0OiAxNnB4Owp9CgouY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd24gLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLnNob3ctYWxsIHsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgY3Vyc29yOiBkZWZhdWx0Owp9CgouY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd24gLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudSB7CiAgbWF4LWhlaWdodDogMzAwcHg7Cn0KPC9zdHlsZT4KCjxzdHlsZSBzY29wZWQ+Ci5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC13cmFwcGVyCiAgOmRlZXAoLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZSkKICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIKICAuYW50LWlucHV0LXN1ZmZpeCB7CiAgcmlnaHQ6IDEycHg7Cn0KLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLXdyYXBwZXIgOmRlZXAoLmNlcnRhaW4tc2VhcmNoLWl0ZW0tY291bnQpIHsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgY29sb3I6ICM5OTk7CiAgcmlnaHQ6IDE2cHg7Cn0KLmNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLXdyYXBwZXIKICA6ZGVlcCguY2VydGFpbi1jYXRlZ29yeS1zZWFyY2guYW50LXNlbGVjdC1mb2N1c2VkKQogIC5jZXJ0YWluLWNhdGVnb3J5LWljb24gewogIGNvbG9yOiAjMTA4ZWU5Owp9Ci5jZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC13cmFwcGVyIDpkZWVwKC5jZXJ0YWluLWNhdGVnb3J5LWljb24pIHsKICBjb2xvcjogIzZlNmU2ZTsKICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7CiAgZm9udC1zaXplOiAxNnB4Owp9Cjwvc3R5bGU+"}},{default:o(()=>[n("div",an,[d(u,{value:a.value,"onUpdate:value":s[0]||(s[0]=h=>a.value=h),class:"certain-category-search","dropdown-class-name":"certain-category-search-dropdown","dropdown-style":{width:"300px"},size:"large","dropdown-match-select-width":500,style:{width:"250px"},"option-label-prop":"value",options:a.dataSource},{option:o(h=>[h.options?(C(),y("span",sn,[t(b(h.value)+" ",1),on])):h.value==="all"?(C(),y("a",en," View all results ")):(C(),y(Y,{key:2},[t(b(h.title)+" ",1),n("span",cn,b(h.count)+" people",1)],64))]),default:o(()=>[d(k,{placeholder:"input here"},{suffix:o(()=>[d(e,{colors:["currentColor"],class:"certain-category-icon"})]),_:1})]),_:1},8,["value","options"])])]),htmlCode:o(()=>[pn]),jsVersionHtml:o(()=>[ln]),_:1},8,["jsfiddle"])}var kn=m(tn,[["render",un],["__scopeId","data-v-4c2c24c6"]]);const rn=A({setup(){const a=I(""),s=I([]),r=e=>{console.log("onSelect",e)},i=(e,k=0)=>Math.floor(Math.random()*(e-k+1))+k,l=e=>new Array(i(5)).join(".").split(".").map((k,u)=>({query:e,category:`${e}${u}`,value:`${e}${u}`,count:i(200,100)}));return{value:a,dataSource:s,onSelect:r,handleSearch:e=>{s.value=e?l(e):[]}}}}),dn={class:"global-search-wrapper",style:{width:"300px"}},gn=["href"],Cn={class:"global-search-item-count"},In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("global-search-wrapper"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("global-search"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dataSource"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSelect"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        Found {{ item.query }} on
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(`
          `),n("span",{class:"token attr-name"},":href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`https://s.taobao.com/search?q=${item.query}`"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          {{ item.category }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("global-search-item-count"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ item.count }} results"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-input-search")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"enter-button"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-input-search")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"Option"),t(),n("span",{class:"token punctuation"},"{"),t(`
  query`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  category`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  value`),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  count`),n("span",{class:"token operator"},":"),t(" number"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dataSource "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("Option"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getRandomInt"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("max"),n("span",{class:"token operator"},":"),t(" number"),n("span",{class:"token punctuation"},","),t(" min "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token punctuation"},"("),t("max "),n("span",{class:"token operator"},"-"),t(" min "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" min"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" searchResult "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("query"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Option"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getRandomInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_item"),n("span",{class:"token punctuation"},","),t(" idx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          query`),n("span",{class:"token punctuation"},","),t(`
          category`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("query"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("idx"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("query"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("idx"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getRandomInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("val"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      dataSource`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" val "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token function"},"searchResult"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      dataSource`),n("span",{class:"token punctuation"},","),t(`
      onSelect`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".global-search-wrapper"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search.ant-select-auto-complete .ant-select-selection--single"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" -46px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 62px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-top-left-radius"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-bottom-left-radius"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search-item"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search-item-desc"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" auto"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-overflow"),n("span",{class:"token punctuation"},":"),t(" ellipsis"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search-item-count"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("global-search-wrapper"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-auto-complete")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("global-search"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dataSource"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSelect"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        Found {{ item.query }} on
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(`
          `),n("span",{class:"token attr-name"},":href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`https://s.taobao.com/search?q=${item.query}`"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          {{ item.category }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("global-search-item-count"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ item.count }} results"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-input-search")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("input here"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"enter-button"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-input-search")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-auto-complete")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dataSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getRandomInt"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("max"),n("span",{class:"token punctuation"},","),t(" min "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token punctuation"},"("),t("max "),n("span",{class:"token operator"},"-"),t(" min "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" min"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"searchResult"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"query"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getRandomInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_item"),n("span",{class:"token punctuation"},","),t(" idx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        query`),n("span",{class:"token punctuation"},","),t(`
        category`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("query"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("idx"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("query"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("idx"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        count`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getRandomInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"val"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      dataSource`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" val "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token function"},"searchResult"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      dataSource`),n("span",{class:"token punctuation"},","),t(`
      onSelect`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".global-search-wrapper"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 50px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search.ant-select-auto-complete .ant-select-selection--single"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" -46px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),t(" 62px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border-top-left-radius"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-bottom-left-radius"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search-item"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search-item-desc"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" auto"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-overflow"),n("span",{class:"token punctuation"},":"),t(" ellipsis"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".global-search-item-count"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function mn(a,s,r,i,l,c){const e=p("a-input-search"),k=p("a-auto-complete"),u=p("demo-box");return C(),v(u,{jsfiddle:{us:"Lookup-Patterns - Uncertain Category.",cn:"\u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Lookup-Patterns - Uncertain Category.</p>
`,order:5,title:{"zh-CN":"\u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE","en-US":"Lookup-Patterns - Uncertain Category"},relativePath:"components/auto-complete/demo/uncertain-category.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9Imdsb2JhbC1zZWFyY2gtd3JhcHBlciIgc3R5bGU9IndpZHRoOiAzMDBweCI+CiAgICA8YS1hdXRvLWNvbXBsZXRlCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBjbGFzcz0iZ2xvYmFsLXNlYXJjaCIKICAgICAgc2l6ZT0ibGFyZ2UiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgb3B0aW9uLWxhYmVsLXByb3A9InRpdGxlIgogICAgICA6b3B0aW9ucz0iZGF0YVNvdXJjZSIKICAgICAgQHNlbGVjdD0ib25TZWxlY3QiCiAgICAgIEBzZWFyY2g9ImhhbmRsZVNlYXJjaCIKICAgID4KICAgICAgPHRlbXBsYXRlICNvcHRpb249Iml0ZW0iPgogICAgICAgIEZvdW5kIHt7IGl0ZW0ucXVlcnkgfX0gb24KICAgICAgICA8YQogICAgICAgICAgOmhyZWY9ImBodHRwczovL3MudGFvYmFvLmNvbS9zZWFyY2g/cT0ke2l0ZW0ucXVlcnl9YCIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgID4KICAgICAgICAgIHt7IGl0ZW0uY2F0ZWdvcnkgfX0KICAgICAgICA8L2E+CiAgICAgICAgPHNwYW4gY2xhc3M9Imdsb2JhbC1zZWFyY2gtaXRlbS1jb3VudCI+e3sgaXRlbS5jb3VudCB9fSByZXN1bHRzPC9zcGFuPgogICAgICA8L3RlbXBsYXRlPgogICAgICA8YS1pbnB1dC1zZWFyY2ggc2l6ZT0ibGFyZ2UiIHBsYWNlaG9sZGVyPSJpbnB1dCBoZXJlIiBlbnRlci1idXR0b24+PC9hLWlucHV0LXNlYXJjaD4KICAgIDwvYS1hdXRvLWNvbXBsZXRlPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbnRlcmZhY2UgT3B0aW9uIHsKICBxdWVyeTogc3RyaW5nOwogIGNhdGVnb3J5OiBzdHJpbmc7CiAgdmFsdWU6IHN0cmluZzsKICBjb3VudDogbnVtYmVyOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBkYXRhU291cmNlID0gcmVmPE9wdGlvbltdPihbXSk7CiAgICBjb25zdCBvblNlbGVjdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdvblNlbGVjdCcsIHZhbHVlKTsKICAgIH07CgogICAgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heDogbnVtYmVyLCBtaW4gPSAwKSA9PiB7CiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOwogICAgfTsKCiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSAocXVlcnk6IHN0cmluZyk6IE9wdGlvbltdID0+IHsKICAgICAgcmV0dXJuIG5ldyBBcnJheShnZXRSYW5kb21JbnQoNSkpCiAgICAgICAgLmpvaW4oJy4nKQogICAgICAgIC5zcGxpdCgnLicpCiAgICAgICAgLm1hcCgoX2l0ZW0sIGlkeCkgPT4gKHsKICAgICAgICAgIHF1ZXJ5LAogICAgICAgICAgY2F0ZWdvcnk6IGAke3F1ZXJ5fSR7aWR4fWAsCiAgICAgICAgICB2YWx1ZTogYCR7cXVlcnl9JHtpZHh9YCwKICAgICAgICAgIGNvdW50OiBnZXRSYW5kb21JbnQoMjAwLCAxMDApLAogICAgICAgIH0pKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHsKICAgICAgZGF0YVNvdXJjZS52YWx1ZSA9IHZhbCA/IHNlYXJjaFJlc3VsdCh2YWwpIDogW107CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIGRhdGFTb3VyY2UsCiAgICAgIG9uU2VsZWN0LAogICAgICBoYW5kbGVTZWFyY2gsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgouZ2xvYmFsLXNlYXJjaC13cmFwcGVyIHsKICBwYWRkaW5nLXJpZ2h0OiA1MHB4Owp9CgouZ2xvYmFsLXNlYXJjaCB7CiAgd2lkdGg6IDEwMCU7Cn0KCi5nbG9iYWwtc2VhcmNoLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZSAuYW50LXNlbGVjdC1zZWxlY3Rpb24tLXNpbmdsZSB7CiAgbWFyZ2luLXJpZ2h0OiAtNDZweDsKfQoKLmdsb2JhbC1zZWFyY2guYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6bGFzdC1jaGlsZCkgewogIHBhZGRpbmctcmlnaHQ6IDYycHg7Cn0KCi5nbG9iYWwtc2VhcmNoLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZSAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIgLmFudC1pbnB1dC1zdWZmaXggYnV0dG9uIHsKICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOwogIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7Cn0KCi5nbG9iYWwtc2VhcmNoLWl0ZW0gewogIGRpc3BsYXk6IGZsZXg7Cn0KCi5nbG9iYWwtc2VhcmNoLWl0ZW0tZGVzYyB7CiAgZmxleDogYXV0bzsKICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsKICBvdmVyZmxvdzogaGlkZGVuOwp9CgouZ2xvYmFsLXNlYXJjaC1pdGVtLWNvdW50IHsKICBmbGV4OiBub25lOwp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9Imdsb2JhbC1zZWFyY2gtd3JhcHBlciIgc3R5bGU9IndpZHRoOiAzMDBweCI+CiAgICA8YS1hdXRvLWNvbXBsZXRlCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBjbGFzcz0iZ2xvYmFsLXNlYXJjaCIKICAgICAgc2l6ZT0ibGFyZ2UiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgb3B0aW9uLWxhYmVsLXByb3A9InRpdGxlIgogICAgICA6b3B0aW9ucz0iZGF0YVNvdXJjZSIKICAgICAgQHNlbGVjdD0ib25TZWxlY3QiCiAgICAgIEBzZWFyY2g9ImhhbmRsZVNlYXJjaCIKICAgID4KICAgICAgPHRlbXBsYXRlICNvcHRpb249Iml0ZW0iPgogICAgICAgIEZvdW5kIHt7IGl0ZW0ucXVlcnkgfX0gb24KICAgICAgICA8YQogICAgICAgICAgOmhyZWY9ImBodHRwczovL3MudGFvYmFvLmNvbS9zZWFyY2g/cT0ke2l0ZW0ucXVlcnl9YCIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgID4KICAgICAgICAgIHt7IGl0ZW0uY2F0ZWdvcnkgfX0KICAgICAgICA8L2E+CiAgICAgICAgPHNwYW4gY2xhc3M9Imdsb2JhbC1zZWFyY2gtaXRlbS1jb3VudCI+e3sgaXRlbS5jb3VudCB9fSByZXN1bHRzPC9zcGFuPgogICAgICA8L3RlbXBsYXRlPgogICAgICA8YS1pbnB1dC1zZWFyY2ggc2l6ZT0ibGFyZ2UiIHBsYWNlaG9sZGVyPSJpbnB1dCBoZXJlIiBlbnRlci1idXR0b24+PC9hLWlucHV0LXNlYXJjaD4KICAgIDwvYS1hdXRvLWNvbXBsZXRlPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBkYXRhU291cmNlID0gcmVmKFtdKTsKCiAgICBjb25zdCBvblNlbGVjdCA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coJ29uU2VsZWN0JywgdmFsdWUpOwogICAgfTsKCiAgICBjb25zdCBnZXRSYW5kb21JbnQgPSAobWF4LCBtaW4gPSAwKSA9PiB7CiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOwogICAgfTsKCiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBxdWVyeSA9PiB7CiAgICAgIHJldHVybiBuZXcgQXJyYXkoZ2V0UmFuZG9tSW50KDUpKS5qb2luKCcuJykuc3BsaXQoJy4nKS5tYXAoKF9pdGVtLCBpZHgpID0+ICh7CiAgICAgICAgcXVlcnksCiAgICAgICAgY2F0ZWdvcnk6IGAke3F1ZXJ5fSR7aWR4fWAsCiAgICAgICAgdmFsdWU6IGAke3F1ZXJ5fSR7aWR4fWAsCiAgICAgICAgY291bnQ6IGdldFJhbmRvbUludCgyMDAsIDEwMCksCiAgICAgIH0pKTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlU2VhcmNoID0gdmFsID0+IHsKICAgICAgZGF0YVNvdXJjZS52YWx1ZSA9IHZhbCA/IHNlYXJjaFJlc3VsdCh2YWwpIDogW107CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBkYXRhU291cmNlLAogICAgICBvblNlbGVjdCwKICAgICAgaGFuZGxlU2VhcmNoLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci5nbG9iYWwtc2VhcmNoLXdyYXBwZXIgewogIHBhZGRpbmctcmlnaHQ6IDUwcHg7Cn0KCi5nbG9iYWwtc2VhcmNoIHsKICB3aWR0aDogMTAwJTsKfQoKLmdsb2JhbC1zZWFyY2guYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tc2luZ2xlIHsKICBtYXJnaW4tcmlnaHQ6IC00NnB4Owp9CgouZ2xvYmFsLXNlYXJjaC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGUgLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIC5hbnQtaW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7CiAgcGFkZGluZy1yaWdodDogNjJweDsKfQoKLmdsb2JhbC1zZWFyY2guYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0LXN1ZmZpeCBidXR0b24gewogIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7CiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDsKfQoKLmdsb2JhbC1zZWFyY2gtaXRlbSB7CiAgZGlzcGxheTogZmxleDsKfQoKLmdsb2JhbC1zZWFyY2gtaXRlbS1kZXNjIHsKICBmbGV4OiBhdXRvOwogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIG92ZXJmbG93OiBoaWRkZW47Cn0KCi5nbG9iYWwtc2VhcmNoLWl0ZW0tY291bnQgewogIGZsZXg6IG5vbmU7Cn0KPC9zdHlsZT4="}},{default:o(()=>[n("div",dn,[d(k,{value:a.value,"onUpdate:value":s[0]||(s[0]=g=>a.value=g),class:"global-search",size:"large",style:{width:"100%"},"option-label-prop":"title",options:a.dataSource,onSelect:a.onSelect,onSearch:a.handleSearch},{option:o(g=>[t(" Found "+b(g.query)+" on ",1),n("a",{href:`https://s.taobao.com/search?q=${g.query}`,target:"_blank",rel:"noopener noreferrer"},b(g.category),9,gn),n("span",Cn,b(g.count)+" results",1)]),default:o(()=>[d(e,{size:"large",placeholder:"input here","enter-button":""})]),_:1},8,["value","options","onSelect","onSearch"])])]),htmlCode:o(()=>[In]),jsVersionHtml:o(()=>[hn]),_:1},8,["jsfiddle"])}var bn=m(rn,[["render",mn]]);const An={pageData:{title:"AutoComplete",description:"",frontmatter:{category:"Components",subtitle:"\u81EA\u52A8\u5B8C\u6210",type:"\u6570\u636E\u5F55\u5165",cols:2,title:"AutoComplete",cover:"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:2,title:"\u65B9\u6CD5",slug:"\u65B9\u6CD5",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"v2 \u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728 v3 \u4E2D\u6CA1\u6709\u4E86\uFF1F"},{level:3,title:"v2 \u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728 v3 \u4E2D\u6CA1\u6709\u4E86\uFF1F",slug:"v2-\u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728-v3-\u4E2D\u6CA1\u6709\u4E86\uFF1F",content:"AutoComplete \u7EC4\u4EF6\u662F\u4E00\u4E2A\u652F\u6301\u81EA\u52A8\u63D0\u793A\u7684 Input \u7EC4\u4EF6\uFF0C\u56E0\u800C\u5176\u4E0D\u5177\u6709 `labelInValue` \u7B49\u5F71\u54CD value \u5C55\u793A\u7684\u5C5E\u6027\u3002\u5728 v2 \u7248\u672C\uFF0CAutoComplete \u5B9E\u73B0\u5B58\u5728\u8F93\u5165\u503C\u5982\u679C\u9047\u5230 `value` \u4E0E `label` \u76F8\u540C\u65F6\u65E0\u6CD5\u6620\u5C04\u7684\u95EE\u9898\u3002 v3 \u4E2D\u4E0D\u518D\u652F\u6301 `label` \u4E3A\u503C\u7684\u8F93\u5165\u5F62\u6001\u3002"}],relativePath:"components/auto-complete/index.zh-CN.md",content:`
\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u4E00\u4E2A\u8F93\u5165\u6846\u800C\u4E0D\u662F\u9009\u62E9\u5668\u3002
- \u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002

\u548C Select \u7684\u533A\u522B\u662F\uFF1A

- AutoComplete \u662F\u4E00\u4E2A\u5E26\u63D0\u793A\u7684\u6587\u672C\u8F93\u5165\u6846\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u8F93\u5165\uFF0C\u5173\u952E\u8BCD\u662F\u8F85\u52A9**\u8F93\u5165**\u3002
- Select \u662F\u5728\u9650\u5B9A\u7684\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5173\u952E\u8BCD\u662F**\u9009\u62E9**\u3002

## API

\`\`\`html
&lt;a-auto-complete v-model:value=&quot;value&quot; :options=&quot;options&quot; /&gt;
\`\`\`

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| allowClear | \u652F\u6301\u6E05\u9664, \u5355\u9009\u6A21\u5F0F\u6709\u6548 | boolean | false |  |
| autofocus | \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| backfill | \u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D | boolean | false |  |
| default (\u81EA\u5B9A\u4E49\u8F93\u5165\u6846) | \u81EA\u5B9A\u4E49\u8F93\u5165\u6846 | slot | \`&lt;Input /&gt;\` |  |
| defaultActiveFirstOption | \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002 | boolean | true |  |
| defaultOpen | \u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355 | boolean | - |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |
| dropdownMatchSelectWidth | \u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E \`min-width\`\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean \\| number | true |  |
| dropdownMenuStyle | dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F | object |  | 1.5.0 |
| filterOption | \u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 \`inputValue\` \`option\` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 \`option\` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE \`true\`\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE \`false\`\u3002 | boolean or function(inputValue, option) | true |  |
| open | \u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355 | boolean | - |  |
| option | \u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9 | v-slot:option=&quot;{value, label, [disabled, key, title]}&quot; | - | 3.0 |
| options | \u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90 | [DataSourceItemType](https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9)\\[] |  |  |
| placeholder | \u8F93\u5165\u6846\u63D0\u793A | string \\| slot | - |  |
| v-model:value | \u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE | string\\|string\\[]\\|{ key: string, label: string\\|vNodes }\\|Array&amp;lt;{ key: string, label: string\\|vNodes }&gt; | \u65E0 |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 | \u7248\u672C |
| --- | --- | --- | --- |
| blur | \u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03 | function() |  |
| change | \u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570 | function(value) |  |
| dropdownVisibleChange | \u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03 | function(open) |  |
| focus | \u83B7\u5F97\u7126\u70B9\u65F6\u7684\u56DE\u8C03 | function() |  |
| search | \u641C\u7D22\u8865\u5168\u9879\u7684\u65F6\u5019\u8C03\u7528 | function(value) |  |
| select | \u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value \u503C | function(value, option) |  |

## \u65B9\u6CD5

| \u540D\u79F0    | \u63CF\u8FF0     | \u7248\u672C |
| ------- | -------- | ---- |
| blur()  | \u79FB\u9664\u7126\u70B9 |      |
| focus() | \u83B7\u53D6\u7126\u70B9 |      |

## FAQ

### v2 \u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728 v3 \u4E2D\u6CA1\u6709\u4E86\uFF1F

AutoComplete \u7EC4\u4EF6\u662F\u4E00\u4E2A\u652F\u6301\u81EA\u52A8\u63D0\u793A\u7684 Input \u7EC4\u4EF6\uFF0C\u56E0\u800C\u5176\u4E0D\u5177\u6709 \`labelInValue\` \u7B49\u5F71\u54CD value \u5C55\u793A\u7684\u5C5E\u6027\u3002\u5728 v2 \u7248\u672C\uFF0CAutoComplete \u5B9E\u73B0\u5B58\u5728\u8F93\u5165\u503C\u5982\u679C\u9047\u5230 \`value\` \u4E0E \`label\` \u76F8\u540C\u65F6\u65E0\u6CD5\u6620\u5C04\u7684\u95EE\u9898\u3002 v3 \u4E2D\u4E0D\u518D\u652F\u6301 \`label\` \u4E3A\u503C\u7684\u8F93\u5165\u5F62\u6001\u3002

\u6B64\u5916\u4E3A\u4E86\u7EDF\u4E00 API\uFF0C\`dataSource\` \u6539\u4E3A \`options\` \u4F60\u53EF\u4EE5\u5982\u4E0B\u8F6C\u6362\uFF1A

#### v2

\`\`\`ts
dataSource = [&#39;light&#39;, &#39;bamboo&#39;];
// or
dataSource = [
  { value: &#39;light&#39;, text: &#39;Light&#39; },
  { value: &#39;bamboo&#39;, text: &#39;Bamboo&#39; },
];
\`\`\`

#### v3

\`\`\`ts
options = [
  { value: &#39;light&#39;, label: &#39;Light&#39; },
  { value: &#39;bamboo&#39;, label: &#39;Bamboo&#39; },
];
\`\`\`
`,html:`<p>\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u9700\u8981\u4E00\u4E2A\u8F93\u5165\u6846\u800C\u4E0D\u662F\u9009\u62E9\u5668\u3002</li>
<li>\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002</li>
</ul>
<p>\u548C Select \u7684\u533A\u522B\u662F\uFF1A</p>
<ul>
<li>AutoComplete \u662F\u4E00\u4E2A\u5E26\u63D0\u793A\u7684\u6587\u672C\u8F93\u5165\u6846\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u8F93\u5165\uFF0C\u5173\u952E\u8BCD\u662F\u8F85\u52A9<strong>\u8F93\u5165</strong>\u3002</li>
<li>Select \u662F\u5728\u9650\u5B9A\u7684\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5173\u952E\u8BCD\u662F<strong>\u9009\u62E9</strong>\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-auto-complete</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
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
<td>allowClear</td>
<td>\u652F\u6301\u6E05\u9664, \u5355\u9009\u6A21\u5F0F\u6709\u6548</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>autofocus</td>
<td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>backfill</td>
<td>\u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>default (\u81EA\u5B9A\u4E49\u8F93\u5165\u6846)</td>
<td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846</td>
<td>slot</td>
<td><code>&lt;Input /&gt;</code></td>
<td></td>
</tr>
<tr>
<td>defaultActiveFirstOption</td>
<td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>defaultOpen</td>
<td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>dropdownMatchSelectWidth</td>
<td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean | number</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>dropdownMenuStyle</td>
<td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
<td>object</td>
<td></td>
<td>1.5.0</td>
</tr>
<tr>
<td>filterOption</td>
<td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td>
<td>boolean or function(inputValue, option)</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>open</td>
<td>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>option</td>
<td>\u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9</td>
<td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>options</td>
<td>\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90</td>
<td><a href="https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9" target="_blank" rel="noopener noreferrer">DataSourceItemType</a>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u8F93\u5165\u6846\u63D0\u793A</td>
<td>string | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>v-model:value</td>
<td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string|string[]|{ key: string, label: string|vNodes }|Array&lt;{ key: string, label: string|vNodes }&gt;</td>
<td>\u65E0</td>
<td></td>
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
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur</td>
<td>\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td>
<td>function()</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td>
<td>function(value)</td>
<td></td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td>
<td>function(open)</td>
<td></td>
</tr>
<tr>
<td>focus</td>
<td>\u83B7\u5F97\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td>
<td>function()</td>
<td></td>
</tr>
<tr>
<td>search</td>
<td>\u641C\u7D22\u8865\u5168\u9879\u7684\u65F6\u5019\u8C03\u7528</td>
<td>function(value)</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value \u503C</td>
<td>function(value, option)</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>\u79FB\u9664\u7126\u70B9</td>
<td></td>
</tr>
<tr>
<td>focus()</td>
<td>\u83B7\u53D6\u7126\u70B9</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="v2-\u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728-v3-\u4E2D\u6CA1\u6709\u4E86\uFF1F">v2 \u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728 v3 \u4E2D\u6CA1\u6709\u4E86\uFF1F <a class="header-anchor" href="#v2-\u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728-v3-\u4E2D\u6CA1\u6709\u4E86\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>AutoComplete \u7EC4\u4EF6\u662F\u4E00\u4E2A\u652F\u6301\u81EA\u52A8\u63D0\u793A\u7684 Input \u7EC4\u4EF6\uFF0C\u56E0\u800C\u5176\u4E0D\u5177\u6709 <code>labelInValue</code> \u7B49\u5F71\u54CD value \u5C55\u793A\u7684\u5C5E\u6027\u3002\u5728 v2 \u7248\u672C\uFF0CAutoComplete \u5B9E\u73B0\u5B58\u5728\u8F93\u5165\u503C\u5982\u679C\u9047\u5230 <code>value</code> \u4E0E <code>label</code> \u76F8\u540C\u65F6\u65E0\u6CD5\u6620\u5C04\u7684\u95EE\u9898\u3002 v3 \u4E2D\u4E0D\u518D\u652F\u6301 <code>label</code> \u4E3A\u503C\u7684\u8F93\u5165\u5F62\u6001\u3002</p>
<p>\u6B64\u5916\u4E3A\u4E86\u7EDF\u4E00 API\uFF0C<code>dataSource</code> \u6539\u4E3A <code>options</code> \u4F60\u53EF\u4EE5\u5982\u4E0B\u8F6C\u6362\uFF1A</p>
<h4 id="v2">v2 <a class="header-anchor" href="#v2">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-ts" v-pre><code>dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'bamboo'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Light'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Bamboo'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<h4 id="v3">v3 <a class="header-anchor" href="#v3">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-ts" v-pre><code>options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Light'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Bamboo'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
`,lastUpdated:1701878243655}},vn={class:"markdown"},yn=Z(`<p>\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u9700\u8981\u4E00\u4E2A\u8F93\u5165\u6846\u800C\u4E0D\u662F\u9009\u62E9\u5668\u3002</li><li>\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002</li></ul><p>\u548C Select \u7684\u533A\u522B\u662F\uFF1A</p><ul><li>AutoComplete \u662F\u4E00\u4E2A\u5E26\u63D0\u793A\u7684\u6587\u672C\u8F93\u5165\u6846\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u8F93\u5165\uFF0C\u5173\u952E\u8BCD\u662F\u8F85\u52A9<strong>\u8F93\u5165</strong>\u3002</li><li>Select \u662F\u5728\u9650\u5B9A\u7684\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5173\u952E\u8BCD\u662F<strong>\u9009\u62E9</strong>\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-auto-complete</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u652F\u6301\u6E05\u9664, \u5355\u9009\u6A21\u5F0F\u6709\u6548</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autofocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>backfill</td><td>\u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D</td><td>boolean</td><td>false</td><td></td></tr><tr><td>default (\u81EA\u5B9A\u4E49\u8F93\u5165\u6846)</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846</td><td>slot</td><td><code>&lt;Input /&gt;</code></td><td></td></tr><tr><td>defaultActiveFirstOption</td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultOpen</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean | number</td><td>true</td><td></td></tr><tr><td>dropdownMenuStyle</td><td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td></td><td>1.5.0</td></tr><tr><td>filterOption</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>boolean or function(inputValue, option)</td><td>true</td><td></td></tr><tr><td>open</td><td>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>option</td><td>\u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9</td><td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td><td>-</td><td>3.0</td></tr><tr><td>options</td><td>\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90</td><td><a href="https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9" target="_blank" rel="noopener noreferrer">DataSourceItemType</a>[]</td><td></td><td></td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u63D0\u793A</td><td>string | slot</td><td>-</td><td></td></tr><tr><td>v-model:value</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|{ key: string, label: string|vNodes }|Array&lt;{ key: string, label: string|vNodes }&gt;</td><td>\u65E0</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td><td>function()</td><td></td></tr><tr><td>change</td><td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value)</td><td></td></tr><tr><td>dropdownVisibleChange</td><td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td><td>function(open)</td><td></td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u65F6\u7684\u56DE\u8C03</td><td>function()</td><td></td></tr><tr><td>search</td><td>\u641C\u7D22\u8865\u5168\u9879\u7684\u65F6\u5019\u8C03\u7528</td><td>function(value)</td><td></td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value \u503C</td><td>function(value, option)</td><td></td></tr></tbody></table><h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td><td></td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td><td></td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="v2-\u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728-v3-\u4E2D\u6CA1\u6709\u4E86\uFF1F">v2 \u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728 v3 \u4E2D\u6CA1\u6709\u4E86\uFF1F <a class="header-anchor" href="#v2-\u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728-v3-\u4E2D\u6CA1\u6709\u4E86\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>AutoComplete \u7EC4\u4EF6\u662F\u4E00\u4E2A\u652F\u6301\u81EA\u52A8\u63D0\u793A\u7684 Input \u7EC4\u4EF6\uFF0C\u56E0\u800C\u5176\u4E0D\u5177\u6709 <code>labelInValue</code> \u7B49\u5F71\u54CD value \u5C55\u793A\u7684\u5C5E\u6027\u3002\u5728 v2 \u7248\u672C\uFF0CAutoComplete \u5B9E\u73B0\u5B58\u5728\u8F93\u5165\u503C\u5982\u679C\u9047\u5230 <code>value</code> \u4E0E <code>label</code> \u76F8\u540C\u65F6\u65E0\u6CD5\u6620\u5C04\u7684\u95EE\u9898\u3002 v3 \u4E2D\u4E0D\u518D\u652F\u6301 <code>label</code> \u4E3A\u503C\u7684\u8F93\u5165\u5F62\u6001\u3002</p><p>\u6B64\u5916\u4E3A\u4E86\u7EDF\u4E00 API\uFF0C<code>dataSource</code> \u6539\u4E3A <code>options</code> \u4F60\u53EF\u4EE5\u5982\u4E0B\u8F6C\u6362\uFF1A</p><h4 id="v2">v2 <a class="header-anchor" href="#v2"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-ts"><code>dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bamboo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&#39;Light&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;bamboo&#39;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&#39;Bamboo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><h4 id="v3">v3 <a class="header-anchor" href="#v3"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-ts"><code>options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&#39;Light&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;bamboo&#39;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&#39;Bamboo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>`,20),wn=[yn];function fn(a,s,r,i,l,c){return C(),y("article",vn,wn)}var Zn=m(An,[["render",fn]]);const Wn={pageData:{title:"AutoComplete",description:"",frontmatter:{category:"Components",type:"Data Entry",cols:2,title:"AutoComplete",cover:"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:2,title:"Methods",slug:"Methods",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"Part of the api in v2 are not available in v3?"},{level:3,title:"Part of the api in v2 are not available in v3?",slug:"Part-of-the-api-in-v2-are-not-available-in-v3",content:"AutoComplete is an Input component that supports auto complete tips. As such, it should not support props like `labelInValue` that affect value display. In v3, the AutoComplete implementation can not handle the case where the `value` and `label` are identical. v4 not longer support `label` as the value input."}],relativePath:"components/auto-complete/index.en-US.md",content:`
Autocomplete function of input field.

## When To Use

- When you need an input box instead of a selector.
- When you need input suggestions or helping text.

The differences with Select are:

- AutoComplete is an input box with text hints, and users can type freely. The keyword is aiding **input**.
- Select is selecting among given choices. The keyword is **select**.

## API

\`\`\`html
&lt;a-auto-complete v-model:value=&quot;value&quot; :options=&quot;options&quot; /&gt;
\`\`\`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button, effective in multiple mode only. | boolean | false |  |
| autofocus | get focus when component mounted | boolean | false |  |
| backfill | backfill selected item the input when using keyboard | boolean | false |  |
| default (for customize input element) | customize input element | slot | \`&lt;Input /&gt;\` |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| defaultOpen | Initial open state of dropdown | boolean | - |  |
| disabled | Whether disabled select | boolean | false |  |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set \`min-width\` same as input. Will ignore when value less than select width. \`false\` will disable virtual scroll | boolean \\| number | true |  |
| dropdownMenuStyle | additional style applied to dropdown menu | object |  | 1.5.0 |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`inputValue\` and \`option\`, if the function returns \`true\`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |  |
| open | Controlled open state of dropdown | boolean | - |  |
| option | custom render option by slot | v-slot:option=&quot;{value, label, [disabled, key, title]}&quot; | - | 3.0 |
| options | Data source for autocomplete | [DataSourceItemType](https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9)\\[] |  |  |
| placeholder | placeholder of input | string | - |  |
| v-model:value | selected option | string\\|string\\[]\\|{ key: string, label: string\\|vNodes }\\|Array&amp;lt;{ key: string, label: string\\|vNodes }&gt; | - |  |

### events

| Events Name | Description | Arguments | Version |  |
| --- | --- | --- | --- | --- |
| blur | Called when leaving the component. | function() |  |  |
| change | Called when select an option or input value change, or value of input is changed | function(value) |  |  |
| dropdownVisibleChange | Call when dropdown open | function(open) |  |  |
| focus | Called when entering the component | function() |  |  |
| search | Called when searching items. | function(value) | - |  |
| select | Called when a option is selected. param is option&#39;s value and option instance. | function(value, option) |  |  |

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |

## FAQ

### Part of the api in v2 are not available in v3?

AutoComplete is an Input component that supports auto complete tips. As such, it should not support props like \`labelInValue\` that affect value display. In v3, the AutoComplete implementation can not handle the case where the \`value\` and \`label\` are identical. v4 not longer support \`label\` as the value input.

Besides, to unify the API, \`dataSource\` is replaced with \`options\`. You can migrate with the following change:

#### v2

\`\`\`ts
dataSource = [&#39;light&#39;, &#39;bamboo&#39;];
// or
dataSource = [
  { value: &#39;light&#39;, text: &#39;Light&#39; },
  { value: &#39;bamboo&#39;, text: &#39;Bamboo&#39; },
];
\`\`\`

#### v3

\`\`\`ts
options = [
  { value: &#39;light&#39;, label: &#39;Light&#39; },
  { value: &#39;bamboo&#39;, label: &#39;Bamboo&#39; },
];
\`\`\`
`,html:`<p>Autocomplete function of input field.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When you need an input box instead of a selector.</li>
<li>When you need input suggestions or helping text.</li>
</ul>
<p>The differences with Select are:</p>
<ul>
<li>AutoComplete is an input box with text hints, and users can type freely. The keyword is aiding <strong>input</strong>.</li>
<li>Select is selecting among given choices. The keyword is <strong>select</strong>.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-auto-complete</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
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
<td>allowClear</td>
<td>Show clear button, effective in multiple mode only.</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>autofocus</td>
<td>get focus when component mounted</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>backfill</td>
<td>backfill selected item the input when using keyboard</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>default (for customize input element)</td>
<td>customize input element</td>
<td>slot</td>
<td><code>&lt;Input /&gt;</code></td>
<td></td>
</tr>
<tr>
<td>defaultActiveFirstOption</td>
<td>Whether active first option by default</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>defaultOpen</td>
<td>Initial open state of dropdown</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether disabled select</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>dropdownMatchSelectWidth</td>
<td>Determine whether the dropdown menu and the select input are the same width. Default set <code>min-width</code> same as input. Will ignore when value less than select width. <code>false</code> will disable virtual scroll</td>
<td>boolean | number</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>dropdownMenuStyle</td>
<td>additional style applied to dropdown menu</td>
<td>object</td>
<td></td>
<td>1.5.0</td>
</tr>
<tr>
<td>filterOption</td>
<td>If true, filter options by input, if function, filter options against it. The function will receive two arguments, <code>inputValue</code> and <code>option</code>, if the function returns <code>true</code>, the option will be included in the filtered set; Otherwise, it will be excluded.</td>
<td>boolean or function(inputValue, option)</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>open</td>
<td>Controlled open state of dropdown</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>option</td>
<td>custom render option by slot</td>
<td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>options</td>
<td>Data source for autocomplete</td>
<td><a href="https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9" target="_blank" rel="noopener noreferrer">DataSourceItemType</a>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder of input</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>v-model:value</td>
<td>selected option</td>
<td>string|string[]|{ key: string, label: string|vNodes }|Array&lt;{ key: string, label: string|vNodes }&gt;</td>
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
<th>Version</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>blur</td>
<td>Called when leaving the component.</td>
<td>function()</td>
<td></td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>Called when select an option or input value change, or value of input is changed</td>
<td>function(value)</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>Call when dropdown open</td>
<td>function(open)</td>
<td></td>
<td></td>
</tr>
<tr>
<td>focus</td>
<td>Called when entering the component</td>
<td>function()</td>
<td></td>
<td></td>
</tr>
<tr>
<td>search</td>
<td>Called when searching items.</td>
<td>function(value)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>Called when a option is selected. param is option's value and option instance.</td>
<td>function(value, option)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="Methods">Methods <a class="header-anchor" href="#Methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>remove focus</td>
<td></td>
</tr>
<tr>
<td>focus()</td>
<td>get focus</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Part-of-the-api-in-v2-are-not-available-in-v3">Part of the api in v2 are not available in v3? <a class="header-anchor" href="#Part-of-the-api-in-v2-are-not-available-in-v3">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>AutoComplete is an Input component that supports auto complete tips. As such, it should not support props like <code>labelInValue</code> that affect value display. In v3, the AutoComplete implementation can not handle the case where the <code>value</code> and <code>label</code> are identical. v4 not longer support <code>label</code> as the value input.</p>
<p>Besides, to unify the API, <code>dataSource</code> is replaced with <code>options</code>. You can migrate with the following change:</p>
<h4 id="v2">v2 <a class="header-anchor" href="#v2">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-ts" v-pre><code>dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'bamboo'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Light'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Bamboo'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<h4 id="v3">v3 <a class="header-anchor" href="#v3">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-ts" v-pre><code>options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Light'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Bamboo'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
`,lastUpdated:1701878243655}},Bn={class:"markdown"},Gn=Z(`<p>Autocomplete function of input field.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When you need an input box instead of a selector.</li><li>When you need input suggestions or helping text.</li></ul><p>The differences with Select are:</p><ul><li>AutoComplete is an input box with text hints, and users can type freely. The keyword is aiding <strong>input</strong>.</li><li>Select is selecting among given choices. The keyword is <strong>select</strong>.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-auto-complete</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>allowClear</td><td>Show clear button, effective in multiple mode only.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autofocus</td><td>get focus when component mounted</td><td>boolean</td><td>false</td><td></td></tr><tr><td>backfill</td><td>backfill selected item the input when using keyboard</td><td>boolean</td><td>false</td><td></td></tr><tr><td>default (for customize input element)</td><td>customize input element</td><td>slot</td><td><code>&lt;Input /&gt;</code></td><td></td></tr><tr><td>defaultActiveFirstOption</td><td>Whether active first option by default</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultOpen</td><td>Initial open state of dropdown</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disabled</td><td>Whether disabled select</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>Determine whether the dropdown menu and the select input are the same width. Default set <code>min-width</code> same as input. Will ignore when value less than select width. <code>false</code> will disable virtual scroll</td><td>boolean | number</td><td>true</td><td></td></tr><tr><td>dropdownMenuStyle</td><td>additional style applied to dropdown menu</td><td>object</td><td></td><td>1.5.0</td></tr><tr><td>filterOption</td><td>If true, filter options by input, if function, filter options against it. The function will receive two arguments, <code>inputValue</code> and <code>option</code>, if the function returns <code>true</code>, the option will be included in the filtered set; Otherwise, it will be excluded.</td><td>boolean or function(inputValue, option)</td><td>true</td><td></td></tr><tr><td>open</td><td>Controlled open state of dropdown</td><td>boolean</td><td>-</td><td></td></tr><tr><td>option</td><td>custom render option by slot</td><td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td><td>-</td><td>3.0</td></tr><tr><td>options</td><td>Data source for autocomplete</td><td><a href="https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9" target="_blank" rel="noopener noreferrer">DataSourceItemType</a>[]</td><td></td><td></td></tr><tr><td>placeholder</td><td>placeholder of input</td><td>string</td><td>-</td><td></td></tr><tr><td>v-model:value</td><td>selected option</td><td>string|string[]|{ key: string, label: string|vNodes }|Array&lt;{ key: string, label: string|vNodes }&gt;</td><td>-</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>blur</td><td>Called when leaving the component.</td><td>function()</td><td></td><td></td></tr><tr><td>change</td><td>Called when select an option or input value change, or value of input is changed</td><td>function(value)</td><td></td><td></td></tr><tr><td>dropdownVisibleChange</td><td>Call when dropdown open</td><td>function(open)</td><td></td><td></td></tr><tr><td>focus</td><td>Called when entering the component</td><td>function()</td><td></td><td></td></tr><tr><td>search</td><td>Called when searching items.</td><td>function(value)</td><td>-</td><td></td></tr><tr><td>select</td><td>Called when a option is selected. param is option&#39;s value and option instance.</td><td>function(value, option)</td><td></td><td></td></tr></tbody></table><h2 id="Methods">Methods <a class="header-anchor" href="#Methods"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Version</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td><td></td></tr><tr><td>focus()</td><td>get focus</td><td></td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Part-of-the-api-in-v2-are-not-available-in-v3">Part of the api in v2 are not available in v3? <a class="header-anchor" href="#Part-of-the-api-in-v2-are-not-available-in-v3"><span aria-hidden="true" class="anchor">#</span></a></h3><p>AutoComplete is an Input component that supports auto complete tips. As such, it should not support props like <code>labelInValue</code> that affect value display. In v3, the AutoComplete implementation can not handle the case where the <code>value</code> and <code>label</code> are identical. v4 not longer support <code>label</code> as the value input.</p><p>Besides, to unify the API, <code>dataSource</code> is replaced with <code>options</code>. You can migrate with the following change:</p><h4 id="v2">v2 <a class="header-anchor" href="#v2"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-ts"><code>dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bamboo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&#39;Light&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;bamboo&#39;</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">&#39;Bamboo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><h4 id="v3">v3 <a class="header-anchor" href="#v3"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-ts"><code>options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&#39;Light&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;bamboo&#39;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&#39;Bamboo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>`,20),Vn=[Gn];function Yn(a,s,r,i,l,c){return C(),y("article",Bn,Vn)}var Hn=m(Wn,[["render",Yn]]);const Sn=A({CN:Zn,US:Hn,components:{Basic:K,Options:z,Custom:_,NonCaseSensitive:$,CertainCategory:kn,UncertainCategory:bn},setup(){return{}}});function Xn(a,s,r,i,l,c){const e=p("basic"),k=p("options"),u=p("custom"),g=p("non-case-sensitive"),h=p("certain-category"),W=p("uncertain-category"),B=p("demo-sort");return C(),v(B,null,{default:o(()=>[d(e),d(k),d(u),d(g),d(h),d(W)]),_:1})}var xn=m(Sn,[["render",Xn]]);export{xn as default};

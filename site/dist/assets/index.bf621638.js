import{d as h,k as C,aq as e,J as r,bN as A,bO as o,e as l,G as n,H as a,E as v,bX as S,bP as Z,F as K,az as N,cb as y}from"./vendor.0f0e4632.js";import{_ as I,T as F}from"./index.f6b32fa6.js";import{I as z}from"./byted-smiling-face.ff1d9dc6.js";const j=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],X=h({setup(){return{value:C([]),options:j}}}),L=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),R=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function P(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Cascade selection box for selecting province/city/district.",cn:"\u7701\u5E02\u533A\u7EA7\u8054\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7701\u5E02\u533A\u7EA7\u8054\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Cascade selection box for selecting province/city/district.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic"},relativePath:"components/cascader/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgQ2FzY2FkZXJQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IG9wdGlvbnM6IENhc2NhZGVyUHJvcHNbJ29wdGlvbnMnXSA9IFsKICB7CiAgICB2YWx1ZTogJ3poZWppYW5nJywKICAgIGxhYmVsOiAnWmhlamlhbmcnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHZhbHVlOiAneGlodScsCiAgICAgICAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICB2YWx1ZTogJ2ppYW5nc3UnLAogICAgbGFiZWw6ICdKaWFuZ3N1JywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ25hbmppbmcnLAogICAgICAgIGxhYmVsOiAnTmFuamluZycsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgICAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmPHN0cmluZ1tdPihbXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgb3B0aW9ucyA9IFt7CiAgdmFsdWU6ICd6aGVqaWFuZycsCiAgbGFiZWw6ICdaaGVqaWFuZycsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIHZhbHVlOiAneGlodScsCiAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgIH1dLAogIH1dLAp9LCB7CiAgdmFsdWU6ICdqaWFuZ3N1JywKICBsYWJlbDogJ0ppYW5nc3UnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICduYW5qaW5nJywKICAgIGxhYmVsOiAnTmFuamluZycsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICB9XSwKICB9XSwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFtdKSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,placeholder:"Please select"},null,8,["value","options"])]),htmlCode:o(()=>[L]),jsVersionHtml:o(()=>[R]),_:1},8,["jsfiddle"])}var O=I(X,[["render",P]]);const U=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],D=h({setup(){return{value:C([]),options:U}}}),T=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"change-on-select"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"change-on-select"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function _(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Allow only select parent options.",cn:"\u8FD9\u79CD\u4EA4\u4E92\u5141\u8BB8\u53EA\u9009\u4E2D\u7236\u7EA7\u9009\u9879\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8FD9\u79CD\u4EA4\u4E92\u5141\u8BB8\u53EA\u9009\u4E2D\u7236\u7EA7\u9009\u9879\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Allow only select parent options.</p>
`,order:5,title:{"zh-CN":"\u9009\u62E9\u5373\u6539\u53D8","en-US":"Change on select"},relativePath:"components/cascader/demo/change-on-select.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgY2hhbmdlLW9uLXNlbGVjdCAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IENhc2NhZGVyUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IG9wdGlvbnM6IENhc2NhZGVyUHJvcHNbJ29wdGlvbnMnXSA9IFsKICB7CiAgICB2YWx1ZTogJ3poZWppYW5nJywKICAgIGxhYmVsOiAnWmhlamlhbmcnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHZhbHVlOiAneGlodScsCiAgICAgICAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICB2YWx1ZTogJ2ppYW5nc3UnLAogICAgbGFiZWw6ICdKaWFuZ3N1JywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ25hbmppbmcnLAogICAgICAgIGxhYmVsOiAnTmFuamluZycsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgICAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmPHN0cmluZ1tdPihbXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgY2hhbmdlLW9uLXNlbGVjdCAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG9wdGlvbnMgPSBbewogIHZhbHVlOiAnemhlamlhbmcnLAogIGxhYmVsOiAnWmhlamlhbmcnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgIGNoaWxkcmVuOiBbewogICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICB9XSwKICB9XSwKfSwgewogIHZhbHVlOiAnamlhbmdzdScsCiAgbGFiZWw6ICdKaWFuZ3N1JywKICBjaGlsZHJlbjogW3sKICAgIHZhbHVlOiAnbmFuamluZycsCiAgICBsYWJlbDogJ05hbmppbmcnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIHZhbHVlOiAnemhvbmdodWFtZW4nLAogICAgICBsYWJlbDogJ1pob25nIEh1YSBNZW4nLAogICAgfV0sCiAgfV0sCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,"change-on-select":""},null,8,["value","options"])]),htmlCode:o(()=>[T]),jsVersionHtml:o(()=>[q]),_:1},8,["jsfiddle"])}var E=I(D,[["render",_]]);const Q=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}],$=h({setup(){const s=(t,k,p)=>{t.stopPropagation(),console.log("clicked",k,p)};return{value:C(["zhejiang","hangzhou","xihu"]),options:Q,handleAreaClick:s}}}),M={key:0},nn=["onClick"],an=a(" ) "),sn={key:1},tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#displayRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ labels, selectedOptions }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(label, index) in labels"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectedOptions[index].value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index === labels.length - 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ label }} (
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(e) => handleAreaClick(e, label, selectedOptions[index])"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            {{ selectedOptions[index].code }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          )
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),a("{{ label }} /"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
            code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"752100"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
            code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"453400"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleAreaClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("e"),n("span",{class:"token operator"},":"),a(" Event"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" option"),n("span",{class:"token operator"},":"),a(" Option")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopPropagation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'clicked'"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token punctuation"},","),a(" option"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleAreaClick`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#displayRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ labels, selectedOptions }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(label, index) in labels"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectedOptions[index].value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index === labels.length - 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ label }} (
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(e) => handleAreaClick(e, label, selectedOptions[index])"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            {{ selectedOptions[index].code }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          )
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),a("{{ label }} /"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
      code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"752100"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
      code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"453400"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleAreaClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("e"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token punctuation"},","),a(" option")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopPropagation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'clicked'"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token punctuation"},","),a(" option"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleAreaClick`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function en(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"For instance, add an external link after the selected value.",cn:"\u4F8B\u5982\u7ED9\u6700\u540E\u4E00\u9879\u52A0\u4E0A\u90AE\u7F16\u94FE\u63A5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F8B\u5982\u7ED9\u6700\u540E\u4E00\u9879\u52A0\u4E0A\u90AE\u7F16\u94FE\u63A5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>For instance, add an external link after the selected value.</p>
`,order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5DF2\u9009\u9879","en-US":"Custom render"},relativePath:"components/cascader/demo/custom-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgc3R5bGU9IndpZHRoOiAxMDAlIj4KICAgIDx0ZW1wbGF0ZSAjZGlzcGxheVJlbmRlcj0ieyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9Ij4KICAgICAgPHNwYW4gdi1mb3I9IihsYWJlbCwgaW5kZXgpIGluIGxhYmVscyIgOmtleT0ic2VsZWN0ZWRPcHRpb25zW2luZGV4XS52YWx1ZSI+CiAgICAgICAgPHNwYW4gdi1pZj0iaW5kZXggPT09IGxhYmVscy5sZW5ndGggLSAxIj4KICAgICAgICAgIHt7IGxhYmVsIH19ICgKICAgICAgICAgIDxhIEBjbGljaz0iKGUpID0+IGhhbmRsZUFyZWFDbGljayhlLCBsYWJlbCwgc2VsZWN0ZWRPcHRpb25zW2luZGV4XSkiPgogICAgICAgICAgICB7eyBzZWxlY3RlZE9wdGlvbnNbaW5kZXhdLmNvZGUgfX0KICAgICAgICAgIDwvYT4KICAgICAgICAgICkKICAgICAgICA8L3NwYW4+CiAgICAgICAgPHNwYW4gdi1lbHNlPnt7IGxhYmVsIH19IC88L3NwYW4+CiAgICAgIDwvc3Bhbj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWNhc2NhZGVyPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IENhc2NhZGVyUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IG9wdGlvbnM6IENhc2NhZGVyUHJvcHNbJ29wdGlvbnMnXSA9IFsKICB7CiAgICB2YWx1ZTogJ3poZWppYW5nJywKICAgIGxhYmVsOiAnWmhlamlhbmcnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHZhbHVlOiAneGlodScsCiAgICAgICAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgICAgICAgICAgY29kZTogNzUyMTAwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LAogIHsKICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICBsYWJlbDogJ0ppYW5nc3UnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbmFuamluZycsCiAgICAgICAgbGFiZWw6ICdOYW5qaW5nJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgTWVuJywKICAgICAgICAgICAgY29kZTogNDUzNDAwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQXJlYUNsaWNrID0gKGU6IEV2ZW50LCBsYWJlbDogc3RyaW5nLCBvcHRpb246IE9wdGlvbikgPT4gewogICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOwogICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcsIGxhYmVsLCBvcHRpb24pOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmPHN0cmluZ1tdPihbJ3poZWppYW5nJywgJ2hhbmd6aG91JywgJ3hpaHUnXSksCiAgICAgIG9wdGlvbnMsCiAgICAgIGhhbmRsZUFyZWFDbGljaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgc3R5bGU9IndpZHRoOiAxMDAlIj4KICAgIDx0ZW1wbGF0ZSAjZGlzcGxheVJlbmRlcj0ieyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9Ij4KICAgICAgPHNwYW4gdi1mb3I9IihsYWJlbCwgaW5kZXgpIGluIGxhYmVscyIgOmtleT0ic2VsZWN0ZWRPcHRpb25zW2luZGV4XS52YWx1ZSI+CiAgICAgICAgPHNwYW4gdi1pZj0iaW5kZXggPT09IGxhYmVscy5sZW5ndGggLSAxIj4KICAgICAgICAgIHt7IGxhYmVsIH19ICgKICAgICAgICAgIDxhIEBjbGljaz0iKGUpID0+IGhhbmRsZUFyZWFDbGljayhlLCBsYWJlbCwgc2VsZWN0ZWRPcHRpb25zW2luZGV4XSkiPgogICAgICAgICAgICB7eyBzZWxlY3RlZE9wdGlvbnNbaW5kZXhdLmNvZGUgfX0KICAgICAgICAgIDwvYT4KICAgICAgICAgICkKICAgICAgICA8L3NwYW4+CiAgICAgICAgPHNwYW4gdi1lbHNlPnt7IGxhYmVsIH19IC88L3NwYW4+CiAgICAgIDwvc3Bhbj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWNhc2NhZGVyPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG9wdGlvbnMgPSBbewogIHZhbHVlOiAnemhlamlhbmcnLAogIGxhYmVsOiAnWmhlamlhbmcnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgIGNoaWxkcmVuOiBbewogICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICAgIGNvZGU6IDc1MjEwMCwKICAgIH1dLAogIH1dLAp9LCB7CiAgdmFsdWU6ICdqaWFuZ3N1JywKICBsYWJlbDogJ0ppYW5nc3UnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICduYW5qaW5nJywKICAgIGxhYmVsOiAnTmFuamluZycsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICAgIGNvZGU6IDQ1MzQwMCwKICAgIH1dLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUFyZWFDbGljayA9IChlLCBsYWJlbCwgb3B0aW9uKSA9PiB7CiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7CiAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJywgbGFiZWwsIG9wdGlvbik7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoWyd6aGVqaWFuZycsICdoYW5nemhvdScsICd4aWh1J10pLAogICAgICBvcHRpb25zLAogICAgICBoYW5kbGVBcmVhQ2xpY2ssCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,style:{width:"100%"}},{displayRender:o(({labels:c,selectedOptions:b})=>[(r(!0),v(K,null,S(c,(W,m)=>(r(),v("span",{key:b[m].value},[m===c.length-1?(r(),v("span",M,[a(Z(W)+" ( ",1),n("a",{onClick:w=>s.handleAreaClick(w,W,b[m])},Z(b[m].code),9,nn),an])):(r(),v("span",sn,Z(W)+" /",1))]))),128))]),_:1},8,["value","options"])]),htmlCode:o(()=>[tn]),jsVersionHtml:o(()=>[on]),_:1},8,["jsfiddle"])}var cn=I($,[["render",en]]);const pn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],ln=h({setup(){const s=C([]),t=C("Unselect");return{value:s,text:t,options:pn,onChange:(p,d)=>{t.value=d.map(g=>g.label).join(", ")}}}}),un=n("a",{href:"#"},"Change city",-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    {{ text }} `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Change city"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" text "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Unselect'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" selectedOptions"),n("span",{class:"token operator"},":"),a(" Option"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      text`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" selectedOptions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"o"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" o"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"', '"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      text`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    {{ text }} `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Change city"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" text "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Unselect'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token punctuation"},","),a(" selectedOptions")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      text`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" selectedOptions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"o"),a(),n("span",{class:"token operator"},"=>"),a(" o"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"', '"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      text`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function dn(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Separate trigger button and result.",cn:"\u5207\u6362\u6309\u94AE\u548C\u7ED3\u679C\u5206\u5F00\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5207\u6362\u6309\u94AE\u548C\u7ED3\u679C\u5206\u5F00\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Separate trigger button and result.</p>
`,order:2,title:{"zh-CN":"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u663E\u793A","en-US":"Custom trigger"},relativePath:"components/cascader/demo/custom-trigger.vue",sourceCode:"PHRlbXBsYXRlPgogIDxzcGFuPgogICAge3sgdGV4dCB9fSAmbmJzcDsKICAgIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgQGNoYW5nZT0ib25DaGFuZ2UiPgogICAgICA8YSBocmVmPSIjIj5DaGFuZ2UgY2l0eTwvYT4KICAgIDwvYS1jYXNjYWRlcj4KICA8L3NwYW4+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgQ2FzY2FkZXJQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3Qgb3B0aW9uczogQ2FzY2FkZXJQcm9wc1snb3B0aW9ucyddID0gWwogIHsKICAgIHZhbHVlOiAnemhlamlhbmcnLAogICAgbGFiZWw6ICdaaGVqaWFuZycsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICAgICAgbGFiZWw6ICdIYW5nemhvdScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd4aWh1JywKICAgICAgICAgICAgbGFiZWw6ICdXZXN0IExha2UnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LAogIHsKICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICBsYWJlbDogJ0ppYW5nc3UnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbmFuamluZycsCiAgICAgICAgbGFiZWw6ICdOYW5qaW5nJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgTWVuJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxzdHJpbmdbXT4oW10pOwogICAgY29uc3QgdGV4dCA9IHJlZjxzdHJpbmc+KCdVbnNlbGVjdCcpOwoKICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcsIHNlbGVjdGVkT3B0aW9uczogT3B0aW9uW10pID0+IHsKICAgICAgdGV4dC52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAoKG8pID0+IG8ubGFiZWwpLmpvaW4oJywgJyk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICB0ZXh0LAogICAgICBvcHRpb25zLAogICAgICBvbkNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxzcGFuPgogICAge3sgdGV4dCB9fSAmbmJzcDsKICAgIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgQGNoYW5nZT0ib25DaGFuZ2UiPgogICAgICA8YSBocmVmPSIjIj5DaGFuZ2UgY2l0eTwvYT4KICAgIDwvYS1jYXNjYWRlcj4KICA8L3NwYW4+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgb3B0aW9ucyA9IFt7CiAgdmFsdWU6ICd6aGVqaWFuZycsCiAgbGFiZWw6ICdaaGVqaWFuZycsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIHZhbHVlOiAneGlodScsCiAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgIH1dLAogIH1dLAp9LCB7CiAgdmFsdWU6ICdqaWFuZ3N1JywKICBsYWJlbDogJ0ppYW5nc3UnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICduYW5qaW5nJywKICAgIGxhYmVsOiAnTmFuamluZycsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICB9XSwKICB9XSwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZihbXSk7CiAgICBjb25zdCB0ZXh0ID0gcmVmKCdVbnNlbGVjdCcpOwoKICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlLCBzZWxlY3RlZE9wdGlvbnMpID0+IHsKICAgICAgdGV4dC52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiBvLmxhYmVsKS5qb2luKCcsICcpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgdGV4dCwKICAgICAgb3B0aW9ucywKICAgICAgb25DaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[n("span",null,[a(Z(s.text)+" \xA0 ",1),l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,onChange:s.onChange},{default:o(()=>[un]),_:1},8,["value","options","onChange"])])]),htmlCode:o(()=>[kn]),jsVersionHtml:o(()=>[rn]),_:1},8,["jsfiddle"])}var gn=I(ln,[["render",dn]]);const Cn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],In=h({setup(){return{value:C([]),options:Cn}}}),hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),An=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function bn(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Disable option by specifying the `disabled` property in `options`.",cn:"\u901A\u8FC7\u6307\u5B9A options \u91CC\u7684 `disabled` \u5B57\u6BB5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7\u6307\u5B9A options \u91CC\u7684 <code>disabled</code> \u5B57\u6BB5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Disable option by specifying the <code>disabled</code> property in <code>options</code>.</p>
`,order:4,title:{"zh-CN":"\u7981\u7528\u9009\u9879","en-US":"Disabled option"},relativePath:"components/cascader/demo/disabled-option.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBDYXNjYWRlclByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBvcHRpb25zOiBDYXNjYWRlclByb3BzWydvcHRpb25zJ10gPSBbCiAgewogICAgdmFsdWU6ICd6aGVqaWFuZycsCiAgICBsYWJlbDogJ1poZWppYW5nJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgICAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICAgICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgdmFsdWU6ICdqaWFuZ3N1JywKICAgIGxhYmVsOiAnSmlhbmdzdScsCiAgICBkaXNhYmxlZDogdHJ1ZSwKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ25hbmppbmcnLAogICAgICAgIGxhYmVsOiAnTmFuamluZycsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgICAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmPHN0cmluZ1tdPihbXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBvcHRpb25zID0gW3sKICB2YWx1ZTogJ3poZWppYW5nJywKICBsYWJlbDogJ1poZWppYW5nJywKICBjaGlsZHJlbjogW3sKICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgbGFiZWw6ICdIYW5nemhvdScsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd4aWh1JywKICAgICAgbGFiZWw6ICdXZXN0IExha2UnLAogICAgfV0sCiAgfV0sCn0sIHsKICB2YWx1ZTogJ2ppYW5nc3UnLAogIGxhYmVsOiAnSmlhbmdzdScsCiAgZGlzYWJsZWQ6IHRydWUsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ25hbmppbmcnLAogICAgbGFiZWw6ICdOYW5qaW5nJywKICAgIGNoaWxkcmVuOiBbewogICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgTWVuJywKICAgIH1dLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoW10pLAogICAgICBvcHRpb25zLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options},null,8,["value","options"])]),htmlCode:o(()=>[hn]),jsVersionHtml:o(()=>[An]),_:1},8,["jsfiddle"])}var mn=I(In,[["render",bn]]);const vn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],Wn=h({setup(){const s=({labels:t})=>t[t.length-1];return{value:C([]),options:vn,displayRender:s}}}),Zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":display-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("displayRender"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"expand-trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hover"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"displayRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" labels "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" labels"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" labels"),n("span",{class:"token punctuation"},"["),a("labels"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      displayRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":display-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("displayRender"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"expand-trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hover"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"displayRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
      labels`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" labels"),n("span",{class:"token punctuation"},"["),a("labels"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      displayRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function yn(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Hover to expand sub menu, click to select option.",cn:"\u901A\u8FC7\u79FB\u5165\u5C55\u5F00\u4E0B\u7EA7\u83DC\u5355\uFF0C\u70B9\u51FB\u5B8C\u6210\u9009\u62E9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7\u79FB\u5165\u5C55\u5F00\u4E0B\u7EA7\u83DC\u5355\uFF0C\u70B9\u51FB\u5B8C\u6210\u9009\u62E9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Hover to expand sub menu, click to select option.</p>
`,order:3,title:{"zh-CN":"\u79FB\u5165\u5C55\u5F00","en-US":"Hover"},relativePath:"components/cascader/demo/hover.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgOmRpc3BsYXktcmVuZGVyPSJkaXNwbGF5UmVuZGVyIgogICAgZXhwYW5kLXRyaWdnZXI9ImhvdmVyIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBDYXNjYWRlclByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBvcHRpb25zOiBDYXNjYWRlclByb3BzWydvcHRpb25zJ10gPSBbCiAgewogICAgdmFsdWU6ICd6aGVqaWFuZycsCiAgICBsYWJlbDogJ1poZWppYW5nJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgICAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICAgICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgdmFsdWU6ICdqaWFuZ3N1JywKICAgIGxhYmVsOiAnSmlhbmdzdScsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICduYW5qaW5nJywKICAgICAgICBsYWJlbDogJ05hbmppbmcnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHZhbHVlOiAnemhvbmdodWFtZW4nLAogICAgICAgICAgICBsYWJlbDogJ1pob25nIEh1YSBNZW4nLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgZGlzcGxheVJlbmRlciA9ICh7IGxhYmVscyB9OiB7IGxhYmVsczogc3RyaW5nW10gfSkgPT4gewogICAgICByZXR1cm4gbGFiZWxzW2xhYmVscy5sZW5ndGggLSAxXTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZjxzdHJpbmdbXT4oW10pLAogICAgICBvcHRpb25zLAogICAgICBkaXNwbGF5UmVuZGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgOmRpc3BsYXktcmVuZGVyPSJkaXNwbGF5UmVuZGVyIgogICAgZXhwYW5kLXRyaWdnZXI9ImhvdmVyIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBvcHRpb25zID0gW3sKICB2YWx1ZTogJ3poZWppYW5nJywKICBsYWJlbDogJ1poZWppYW5nJywKICBjaGlsZHJlbjogW3sKICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgbGFiZWw6ICdIYW5nemhvdScsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd4aWh1JywKICAgICAgbGFiZWw6ICdXZXN0IExha2UnLAogICAgfV0sCiAgfV0sCn0sIHsKICB2YWx1ZTogJ2ppYW5nc3UnLAogIGxhYmVsOiAnSmlhbmdzdScsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ25hbmppbmcnLAogICAgbGFiZWw6ICdOYW5qaW5nJywKICAgIGNoaWxkcmVuOiBbewogICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgTWVuJywKICAgIH1dLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRpc3BsYXlSZW5kZXIgPSAoewogICAgICBsYWJlbHMsCiAgICB9KSA9PiB7CiAgICAgIHJldHVybiBsYWJlbHNbbGFiZWxzLmxlbmd0aCAtIDFdOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFtdKSwKICAgICAgb3B0aW9ucywKICAgICAgZGlzcGxheVJlbmRlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,"display-render":s.displayRender,"expand-trigger":"hover",placeholder:"Please select"},null,8,["value","options","display-render"])]),htmlCode:o(()=>[Zn]),jsVersionHtml:o(()=>[wn]),_:1},8,["jsfiddle"])}var fn=I(Wn,[["render",yn]]);const Bn=h({setup(){const s=C([{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}]),t=k=>{const p=k[k.length-1];p.loading=!0,setTimeout(()=>{p.loading=!1,p.children=[{label:`${p.label} Dynamic 1`,value:"dynamic1"},{label:`${p.label} Dynamic 2`,value:"dynamic2"}],s.value=[...s.value]},1e3)};return{value:C([]),options:s,loadData:t}}}),Gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":load-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loadData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"change-on-select"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
        isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
        isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" loadData"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'loadData'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"selectedOptions"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" targetOption "),n("span",{class:"token operator"},"="),a(" selectedOptions"),n("span",{class:"token punctuation"},"["),a("selectedOptions"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      targetOption`),n("span",{class:"token punctuation"},"."),a("loading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token comment"},"// load options lazily"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        targetOption`),n("span",{class:"token punctuation"},"."),a("loading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        targetOption`),n("span",{class:"token punctuation"},"."),a("children "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("targetOption"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," Dynamic 1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dynamic1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("targetOption"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," Dynamic 2"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dynamic2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
        options`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),a("options"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      loadData`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":load-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loadData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"change-on-select"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
      isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
      isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"loadData"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"selectedOptions"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" targetOption "),n("span",{class:"token operator"},"="),a(" selectedOptions"),n("span",{class:"token punctuation"},"["),a("selectedOptions"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      targetOption`),n("span",{class:"token punctuation"},"."),a("loading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// load options lazily"),a(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        targetOption`),n("span",{class:"token punctuation"},"."),a("loading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        targetOption`),n("span",{class:"token punctuation"},"."),a("children "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("targetOption"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," Dynamic 1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dynamic1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("targetOption"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," Dynamic 2"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dynamic2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
        options`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),a("options"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      loadData`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Vn(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Load options lazily with `loadData`.",cn:"\u4F7F\u7528 `loadData` \u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>loadData</code> \u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A<code>loadData</code> \u4E0E <code>showSearch</code> \u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528\u3002</p>
</blockquote>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Load options lazily with <code>loadData</code>.</p>
<blockquote>
<p>Note: <code>loadData</code> cannot work with <code>showSearch</code>.</p>
</blockquote>
`,order:9,title:{"zh-CN":"\u52A8\u6001\u52A0\u8F7D\u9009\u9879","en-US":"Load Options Lazily"},relativePath:"components/cascader/demo/lazy.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgOmxvYWQtZGF0YT0ibG9hZERhdGEiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGNoYW5nZS1vbi1zZWxlY3QKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IENhc2NhZGVyUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmPENhc2NhZGVyUHJvcHNbJ29wdGlvbnMnXT4oWwogICAgICB7CiAgICAgICAgdmFsdWU6ICd6aGVqaWFuZycsCiAgICAgICAgbGFiZWw6ICdaaGVqaWFuZycsCiAgICAgICAgaXNMZWFmOiBmYWxzZSwKICAgICAgfSwKICAgICAgewogICAgICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICAgICAgbGFiZWw6ICdKaWFuZ3N1JywKICAgICAgICBpc0xlYWY6IGZhbHNlLAogICAgICB9LAogICAgXSk7CgogICAgY29uc3QgbG9hZERhdGE6IENhc2NhZGVyUHJvcHNbJ2xvYWREYXRhJ10gPSAoc2VsZWN0ZWRPcHRpb25zKSA9PiB7CiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbnMubGVuZ3RoIC0gMV07CiAgICAgIHRhcmdldE9wdGlvbi5sb2FkaW5nID0gdHJ1ZTsKCiAgICAgIC8vIGxvYWQgb3B0aW9ucyBsYXppbHkKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgdGFyZ2V0T3B0aW9uLmxvYWRpbmcgPSBmYWxzZTsKICAgICAgICB0YXJnZXRPcHRpb24uY2hpbGRyZW4gPSBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiBgJHt0YXJnZXRPcHRpb24ubGFiZWx9IER5bmFtaWMgMWAsCiAgICAgICAgICAgIHZhbHVlOiAnZHluYW1pYzEnLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6IGAke3RhcmdldE9wdGlvbi5sYWJlbH0gRHluYW1pYyAyYCwKICAgICAgICAgICAgdmFsdWU6ICdkeW5hbWljMicsCiAgICAgICAgICB9LAogICAgICAgIF07CiAgICAgICAgb3B0aW9ucy52YWx1ZSA9IFsuLi5vcHRpb25zLnZhbHVlXTsKICAgICAgfSwgMTAwMCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWY8c3RyaW5nW10+KFtdKSwKICAgICAgb3B0aW9ucywKICAgICAgbG9hZERhdGEsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgOmxvYWQtZGF0YT0ibG9hZERhdGEiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGNoYW5nZS1vbi1zZWxlY3QKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmKFt7CiAgICAgIHZhbHVlOiAnemhlamlhbmcnLAogICAgICBsYWJlbDogJ1poZWppYW5nJywKICAgICAgaXNMZWFmOiBmYWxzZSwKICAgIH0sIHsKICAgICAgdmFsdWU6ICdqaWFuZ3N1JywKICAgICAgbGFiZWw6ICdKaWFuZ3N1JywKICAgICAgaXNMZWFmOiBmYWxzZSwKICAgIH1dKTsKCiAgICBjb25zdCBsb2FkRGF0YSA9IHNlbGVjdGVkT3B0aW9ucyA9PiB7CiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbnMubGVuZ3RoIC0gMV07CiAgICAgIHRhcmdldE9wdGlvbi5sb2FkaW5nID0gdHJ1ZTsgLy8gbG9hZCBvcHRpb25zIGxhemlseQoKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgdGFyZ2V0T3B0aW9uLmxvYWRpbmcgPSBmYWxzZTsKICAgICAgICB0YXJnZXRPcHRpb24uY2hpbGRyZW4gPSBbewogICAgICAgICAgbGFiZWw6IGAke3RhcmdldE9wdGlvbi5sYWJlbH0gRHluYW1pYyAxYCwKICAgICAgICAgIHZhbHVlOiAnZHluYW1pYzEnLAogICAgICAgIH0sIHsKICAgICAgICAgIGxhYmVsOiBgJHt0YXJnZXRPcHRpb24ubGFiZWx9IER5bmFtaWMgMmAsCiAgICAgICAgICB2YWx1ZTogJ2R5bmFtaWMyJywKICAgICAgICB9XTsKICAgICAgICBvcHRpb25zLnZhbHVlID0gWy4uLm9wdGlvbnMudmFsdWVdOwogICAgICB9LCAxMDAwKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbXSksCiAgICAgIG9wdGlvbnMsCiAgICAgIGxvYWREYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,"load-data":s.loadData,placeholder:"Please select","change-on-select":""},null,8,["value","options","load-data"])]),htmlCode:o(()=>[Gn]),jsVersionHtml:o(()=>[Hn]),_:1},8,["jsfiddle"])}var Yn=I(Bn,[["render",Vn]]);const Jn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua men"}]}]}],xn=h({setup(){const s=(t,k)=>k.some(p=>p.label.toLowerCase().indexOf(t.toLowerCase())>-1);return{value:C([]),options:Jn,filter:s}}}),Sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ filter }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xiasha'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xia Sha'"),n("span",{class:"token punctuation"},","),a(`
            disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"filter"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("inputValue"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" path"),n("span",{class:"token operator"},":"),a(" Option"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("inputValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      filter`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ filter }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xiasha'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xia Sha'"),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"filter"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("inputValue"),n("span",{class:"token punctuation"},","),a(" path")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("inputValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      filter`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Nn(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Search and select options directly.",cn:"\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u9009\u9879\u5E76\u9009\u62E9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u9009\u9879\u5E76\u9009\u62E9\u3002</p>
<blockquote>
<p><code>Cascader[showSearch]</code> \u6682\u4E0D\u652F\u6301\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u66F4\u591A\u4FE1\u606F\u89C1 <a href="https://github.com/ant-design/ant-design/issues/5547" target="_blank" rel="noopener noreferrer">#5547</a></p>
</blockquote>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Search and select options directly.</p>
<blockquote>
<p>Now, <code>Cascader[showSearch]</code> doesn't support search on server, more info <a href="https://github.com/ant-design/ant-design/issues/5547" target="_blank" rel="noopener noreferrer">#5547</a></p>
</blockquote>
`,order:8,title:{"zh-CN":"\u641C\u7D22","en-US":"Search"},relativePath:"components/cascader/demo/search.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgOnNob3ctc2VhcmNoPSJ7IGZpbHRlciB9IgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBDYXNjYWRlclByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBvcHRpb25zOiBDYXNjYWRlclByb3BzWydvcHRpb25zJ10gPSBbCiAgewogICAgdmFsdWU6ICd6aGVqaWFuZycsCiAgICBsYWJlbDogJ1poZWppYW5nJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgICAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICAgICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3hpYXNoYScsCiAgICAgICAgICAgIGxhYmVsOiAnWGlhIFNoYScsCiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LAogIHsKICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICBsYWJlbDogJ0ppYW5nc3UnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbmFuamluZycsCiAgICAgICAgbGFiZWw6ICdOYW5qaW5nJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgbWVuJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbHRlciA9IChpbnB1dFZhbHVlOiBzdHJpbmcsIHBhdGg6IE9wdGlvbltdKSA9PiB7CiAgICAgIHJldHVybiBwYXRoLnNvbWUoCiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEsCiAgICAgICk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWY8c3RyaW5nW10+KFtdKSwKICAgICAgb3B0aW9ucywKICAgICAgZmlsdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgOnNob3ctc2VhcmNoPSJ7IGZpbHRlciB9IgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBvcHRpb25zID0gW3sKICB2YWx1ZTogJ3poZWppYW5nJywKICBsYWJlbDogJ1poZWppYW5nJywKICBjaGlsZHJlbjogW3sKICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgbGFiZWw6ICdIYW5nemhvdScsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd4aWh1JywKICAgICAgbGFiZWw6ICdXZXN0IExha2UnLAogICAgfSwgewogICAgICB2YWx1ZTogJ3hpYXNoYScsCiAgICAgIGxhYmVsOiAnWGlhIFNoYScsCiAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgfV0sCiAgfV0sCn0sIHsKICB2YWx1ZTogJ2ppYW5nc3UnLAogIGxhYmVsOiAnSmlhbmdzdScsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ25hbmppbmcnLAogICAgbGFiZWw6ICdOYW5qaW5nJywKICAgIGNoaWxkcmVuOiBbewogICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgbWVuJywKICAgIH1dLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbHRlciA9IChpbnB1dFZhbHVlLCBwYXRoKSA9PiB7CiAgICAgIHJldHVybiBwYXRoLnNvbWUob3B0aW9uID0+IG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbXSksCiAgICAgIG9wdGlvbnMsCiAgICAgIGZpbHRlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,"show-search":{filter:s.filter},placeholder:"Please select"},null,8,["value","options","show-search"])]),htmlCode:o(()=>[Sn]),jsVersionHtml:o(()=>[Kn]),_:1},8,["jsfiddle"])}var Fn=I(xn,[["render",Nn]]);const zn=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],jn=h({setup(){return{value:C([]),options:zn}}}),Xn=n("br",null,null,-1),Ln=n("br",null,null,-1),Rn=n("br",null,null,-1),Pn=n("br",null,null,-1),On=n("br",null,null,-1),Un=n("br",null,null,-1),Dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function qn(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Cascade selection box of different sizes.",cn:"\u4E0D\u540C\u5927\u5C0F\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E0D\u540C\u5927\u5C0F\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Cascade selection box of different sizes.</p>
`,order:6,title:{"zh-CN":"\u5927\u5C0F","en-US":"Size"},relativePath:"components/cascader/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiBzaXplPSJsYXJnZSIgOm9wdGlvbnM9Im9wdGlvbnMiIC8+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtY2FzY2FkZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIDpvcHRpb25zPSJvcHRpb25zIiAvPgogIDxiciAvPgogIDxiciAvPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiBzaXplPSJzbWFsbCIgOm9wdGlvbnM9Im9wdGlvbnMiIC8+CiAgPGJyIC8+CiAgPGJyIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgQ2FzY2FkZXJQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3Qgb3B0aW9uczogQ2FzY2FkZXJQcm9wc1snb3B0aW9ucyddID0gWwogIHsKICAgIHZhbHVlOiAnemhlamlhbmcnLAogICAgbGFiZWw6ICdaaGVqaWFuZycsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICAgICAgbGFiZWw6ICdIYW5nemhvdScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd4aWh1JywKICAgICAgICAgICAgbGFiZWw6ICdXZXN0IExha2UnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LAogIHsKICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICBsYWJlbDogJ0ppYW5nc3UnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbmFuamluZycsCiAgICAgICAgbGFiZWw6ICdOYW5qaW5nJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgTWVuJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWY8c3RyaW5nW10+KFtdKSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiBzaXplPSJsYXJnZSIgOm9wdGlvbnM9Im9wdGlvbnMiIC8+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtY2FzY2FkZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIDpvcHRpb25zPSJvcHRpb25zIiAvPgogIDxiciAvPgogIDxiciAvPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiBzaXplPSJzbWFsbCIgOm9wdGlvbnM9Im9wdGlvbnMiIC8+CiAgPGJyIC8+CiAgPGJyIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgb3B0aW9ucyA9IFt7CiAgdmFsdWU6ICd6aGVqaWFuZycsCiAgbGFiZWw6ICdaaGVqaWFuZycsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIHZhbHVlOiAneGlodScsCiAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgIH1dLAogIH1dLAp9LCB7CiAgdmFsdWU6ICdqaWFuZ3N1JywKICBsYWJlbDogJ0ppYW5nc3UnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICduYW5qaW5nJywKICAgIGxhYmVsOiAnTmFuamluZycsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICB9XSwKICB9XSwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFtdKSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),size:"large",options:s.options},null,8,["value","options"]),Xn,Ln,l(u,{value:s.value,"onUpdate:value":t[1]||(t[1]=c=>s.value=c),options:s.options},null,8,["value","options"]),Rn,Pn,l(u,{value:s.value,"onUpdate:value":t[2]||(t[2]=c=>s.value=c),size:"small",options:s.options},null,8,["value","options"]),On,Un]),htmlCode:o(()=>[Dn]),jsVersionHtml:o(()=>[Tn]),_:1},8,["jsfiddle"])}var _n=I(jn,[["render",qn]]);const En=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}],Qn=h({setup(){return{value:C([]),options:En}}}),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ label: "),n("span",{class:"token punctuation"},"'"),a("name"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("code"),n("span",{class:"token punctuation"},"'"),a(", children: "),n("span",{class:"token punctuation"},"'"),a("items"),n("span",{class:"token punctuation"},"'"),a(" }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ label: "),n("span",{class:"token punctuation"},"'"),a("name"),n("span",{class:"token punctuation"},"'"),a(", value: "),n("span",{class:"token punctuation"},"'"),a("code"),n("span",{class:"token punctuation"},"'"),a(", children: "),n("span",{class:"token punctuation"},"'"),a("items"),n("span",{class:"token punctuation"},"'"),a(" }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    items`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function na(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Custom Field Names",cn:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom Field Names</p>
`,order:10,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D","en-US":"Custom Field Names"},relativePath:"components/cascader/demo/fields-name.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpmaWVsZC1uYW1lcz0ieyBsYWJlbDogJ25hbWUnLCB2YWx1ZTogJ2NvZGUnLCBjaGlsZHJlbjogJ2l0ZW1zJyB9IgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IENhc2NhZGVyUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IG9wdGlvbnM6IENhc2NhZGVyUHJvcHNbJ29wdGlvbnMnXSA9IFsKICB7CiAgICBjb2RlOiAnemhlamlhbmcnLAogICAgbmFtZTogJ1poZWppYW5nJywKICAgIGl0ZW1zOiBbCiAgICAgIHsKICAgICAgICBjb2RlOiAnaGFuZ3pob3UnLAogICAgICAgIG5hbWU6ICdIYW5nemhvdScsCiAgICAgICAgaXRlbXM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgY29kZTogJ3hpaHUnLAogICAgICAgICAgICBuYW1lOiAnV2VzdCBMYWtlJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICBjb2RlOiAnamlhbmdzdScsCiAgICBuYW1lOiAnSmlhbmdzdScsCiAgICBpdGVtczogWwogICAgICB7CiAgICAgICAgY29kZTogJ25hbmppbmcnLAogICAgICAgIG5hbWU6ICdOYW5qaW5nJywKICAgICAgICBpdGVtczogWwogICAgICAgICAgewogICAgICAgICAgICBjb2RlOiAnemhvbmdodWFtZW4nLAogICAgICAgICAgICBuYW1lOiAnWmhvbmcgSHVhIE1lbicsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmPHN0cmluZ1tdPihbXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIDpmaWVsZC1uYW1lcz0ieyBsYWJlbDogJ25hbWUnLCB2YWx1ZTogJ2NvZGUnLCBjaGlsZHJlbjogJ2l0ZW1zJyB9IgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG9wdGlvbnMgPSBbewogIGNvZGU6ICd6aGVqaWFuZycsCiAgbmFtZTogJ1poZWppYW5nJywKICBpdGVtczogW3sKICAgIGNvZGU6ICdoYW5nemhvdScsCiAgICBuYW1lOiAnSGFuZ3pob3UnLAogICAgaXRlbXM6IFt7CiAgICAgIGNvZGU6ICd4aWh1JywKICAgICAgbmFtZTogJ1dlc3QgTGFrZScsCiAgICB9XSwKICB9XSwKfSwgewogIGNvZGU6ICdqaWFuZ3N1JywKICBuYW1lOiAnSmlhbmdzdScsCiAgaXRlbXM6IFt7CiAgICBjb2RlOiAnbmFuamluZycsCiAgICBuYW1lOiAnTmFuamluZycsCiAgICBpdGVtczogW3sKICAgICAgY29kZTogJ3pob25naHVhbWVuJywKICAgICAgbmFtZTogJ1pob25nIEh1YSBNZW4nLAogICAgfV0sCiAgfV0sCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),"field-names":{label:"name",value:"code",children:"items"},options:s.options,placeholder:"Please select"},null,8,["value","options"])]),htmlCode:o(()=>[$n]),jsVersionHtml:o(()=>[Mn]),_:1},8,["jsfiddle"])}var aa=I(Qn,[["render",na]]);const sa=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],ta=h({components:{IconBytedSmilingFace:z},setup(){return{value1:C([]),value2:C([]),options:sa}}}),oa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 1rem")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),a(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedSmilingFace")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("test"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 1rem")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ea=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 1rem")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),a(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedSmilingFace")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("test"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 1rem")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function ca(s,t,k,p,d,g){const u=e("IconBytedSmilingFace"),i=e("a-cascader"),c=e("demo-box");return r(),A(c,{jsfiddle:{us:"Custom suffix icon",cn:"\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom suffix icon</p>
`,order:11,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},relativePath:"components/cascader/demo/suffix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiCiAgICBzdHlsZT0ibWFyZ2luLXRvcDogMXJlbSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgPgogICAgPHRlbXBsYXRlICNzdWZmaXhJY29uCiAgICAgID48SWNvbkJ5dGVkU21pbGluZ0ZhY2UgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgY2xhc3M9InRlc3QiCiAgICAvPjwvdGVtcGxhdGU+CiAgPC9hLWNhc2NhZGVyPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICBzdWZmaXgtaWNvbj0iYWIiCiAgICBzdHlsZT0ibWFyZ2luLXRvcDogMXJlbSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQ2FzY2FkZXJQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFNtaWxpbmdGYWNlIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXNtaWxpbmctZmFjZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgb3B0aW9uczogQ2FzY2FkZXJQcm9wc1snb3B0aW9ucyddID0gWwogIHsKICAgIHZhbHVlOiAnemhlamlhbmcnLAogICAgbGFiZWw6ICdaaGVqaWFuZycsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICAgICAgbGFiZWw6ICdIYW5nemhvdScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd4aWh1JywKICAgICAgICAgICAgbGFiZWw6ICdXZXN0IExha2UnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LAogIHsKICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICBsYWJlbDogJ0ppYW5nc3UnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbmFuamluZycsCiAgICAgICAgbGFiZWw6ICdOYW5qaW5nJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3pob25naHVhbWVuJywKICAgICAgICAgICAgbGFiZWw6ICdaaG9uZyBIdWEgTWVuJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRTbWlsaW5nRmFjZSwKICB9LAogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxOiByZWY8c3RyaW5nW10+KFtdKSwKICAgICAgdmFsdWUyOiByZWY8c3RyaW5nW10+KFtdKSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiCiAgICBzdHlsZT0ibWFyZ2luLXRvcDogMXJlbSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgPgogICAgPHRlbXBsYXRlICNzdWZmaXhJY29uCiAgICAgID48SWNvbkJ5dGVkU21pbGluZ0ZhY2UgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgY2xhc3M9InRlc3QiCiAgICAvPjwvdGVtcGxhdGU+CiAgPC9hLWNhc2NhZGVyPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICBzdWZmaXgtaWNvbj0iYWIiCiAgICBzdHlsZT0ibWFyZ2luLXRvcDogMXJlbSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZFNtaWxpbmdGYWNlIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXNtaWxpbmctZmFjZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qgb3B0aW9ucyA9IFt7CiAgdmFsdWU6ICd6aGVqaWFuZycsCiAgbGFiZWw6ICdaaGVqaWFuZycsCiAgY2hpbGRyZW46IFt7CiAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIHZhbHVlOiAneGlodScsCiAgICAgIGxhYmVsOiAnV2VzdCBMYWtlJywKICAgIH1dLAogIH1dLAp9LCB7CiAgdmFsdWU6ICdqaWFuZ3N1JywKICBsYWJlbDogJ0ppYW5nc3UnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICduYW5qaW5nJywKICAgIGxhYmVsOiAnTmFuamluZycsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsCiAgICAgIGxhYmVsOiAnWmhvbmcgSHVhIE1lbicsCiAgICB9XSwKICB9XSwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkU21pbGluZ0ZhY2UsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZihbXSksCiAgICAgIHZhbHVlMjogcmVmKFtdKSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[l(i,{value:s.value1,"onUpdate:value":t[0]||(t[0]=b=>s.value1=b),style:{"margin-top":"1rem"},options:s.options,placeholder:"Please select"},{suffixIcon:o(()=>[l(u,{colors:["currentColor"],class:"test"})]),_:1},8,["value","options"]),l(i,{value:s.value2,"onUpdate:value":t[1]||(t[1]=b=>s.value2=b),"suffix-icon":"ab",style:{"margin-top":"1rem"},options:s.options,placeholder:"Please select"},null,8,["value","options"])]),htmlCode:o(()=>[oa]),jsVersionHtml:o(()=>[ea]),_:1},8,["jsfiddle"])}var pa=I(ta,[["render",ca]]);const la=[{label:"Light",value:"light",children:new Array(20).fill(null).map((s,t)=>({label:`Number-Floor-back-many ${t}`,value:t}))},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish"},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}],ua=h({setup(){return{filter:(t,k)=>k.some(p=>p.label.toLowerCase().indexOf(t.toLowerCase())>-1),value:C([["light",0],["light",1]]),options:la}}}),ia=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 233px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":maxTagTextLength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":maxSelectTextLength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":clearSearchValueable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ filter }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Light'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Number-Floor-back-many "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(" index "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bamboo'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bamboo'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Little'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'little'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Fish'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fish'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Cards'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'cards'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Bird'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bird'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" filter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"any"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("inputValue"),n("span",{class:"token punctuation"},","),a(" path")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("inputValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      filter`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),a("string "),n("span",{class:"token operator"},"|"),a(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ka=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 233px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":maxTagTextLength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":maxSelectTextLength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":clearSearchValueable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ filter }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Light'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Number-Floor-back-many "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(" index"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bamboo'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bamboo'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Little'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'little'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Fish'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fish'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Cards'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'cards'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Bird'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bird'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"filter"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("inputValue"),n("span",{class:"token punctuation"},","),a(" path")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("inputValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      filter`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function ra(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"Select multiple options",cn:"\u4E00\u6B21\u6027\u9009\u62E9\u591A\u4E2A\u9009\u9879\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E00\u6B21\u6027\u9009\u62E9\u591A\u4E2A\u9009\u9879\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Select multiple options</p>
`,order:5.1,version:"3.0.0",title:{"zh-CN":"\u591A\u9009","en-US":"Multiple"},relativePath:"components/cascader/demo/multiple.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHN0eWxlPSJ3aWR0aDogMjMzcHgiCiAgICBtdWx0aXBsZQogICAgOm1heC10YWctY291bnQ9IjEiCiAgICA6bWF4VGFnVGV4dExlbmd0aD0iNCIKICAgIDptYXhTZWxlY3RUZXh0TGVuZ3RoPSI0IgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA6Y2xlYXJTZWFyY2hWYWx1ZWFibGU9ImZhbHNlIgogICAgOnNob3ctc2VhcmNoPSJ7IGZpbHRlciB9IgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgPjwvYS1jYXNjYWRlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBDYXNjYWRlclByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBvcHRpb25zOiBDYXNjYWRlclByb3BzWydvcHRpb25zJ10gPSBbCiAgewogICAgbGFiZWw6ICdMaWdodCcsCiAgICB2YWx1ZTogJ2xpZ2h0JywKICAgIGNoaWxkcmVuOiBuZXcgQXJyYXkoMjApCiAgICAgIC5maWxsKG51bGwpCiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoeyBsYWJlbDogYE51bWJlci1GbG9vci1iYWNrLW1hbnkgJHtpbmRleH1gLCB2YWx1ZTogaW5kZXggfSkpLAogIH0sCiAgewogICAgbGFiZWw6ICdCYW1ib28nLAogICAgdmFsdWU6ICdiYW1ib28nLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIGxhYmVsOiAnTGl0dGxlJywKICAgICAgICB2YWx1ZTogJ2xpdHRsZScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICdUb3kgRmlzaCcsCiAgICAgICAgICAgIHZhbHVlOiAnZmlzaCcsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ1RveSBDYXJkcycsCiAgICAgICAgICAgIHZhbHVlOiAnY2FyZHMnLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICdUb3kgQmlyZCcsCiAgICAgICAgICAgIHZhbHVlOiAnYmlyZCcsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWx0ZXI6IGFueSA9IChpbnB1dFZhbHVlLCBwYXRoKSA9PiB7CiAgICAgIHJldHVybiBwYXRoLnNvbWUoCiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEsCiAgICAgICk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgZmlsdGVyLAogICAgICB2YWx1ZTogcmVmPChzdHJpbmcgfCBudW1iZXIpW11bXT4oWwogICAgICAgIFsnbGlnaHQnLCAwXSwKICAgICAgICBbJ2xpZ2h0JywgMV0sCiAgICAgIF0pLAogICAgICBvcHRpb25zLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHN0eWxlPSJ3aWR0aDogMjMzcHgiCiAgICBtdWx0aXBsZQogICAgOm1heC10YWctY291bnQ9IjEiCiAgICA6bWF4VGFnVGV4dExlbmd0aD0iNCIKICAgIDptYXhTZWxlY3RUZXh0TGVuZ3RoPSI0IgogICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA6Y2xlYXJTZWFyY2hWYWx1ZWFibGU9ImZhbHNlIgogICAgOnNob3ctc2VhcmNoPSJ7IGZpbHRlciB9IgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgPjwvYS1jYXNjYWRlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBvcHRpb25zID0gW3sKICBsYWJlbDogJ0xpZ2h0JywKICB2YWx1ZTogJ2xpZ2h0JywKICBjaGlsZHJlbjogbmV3IEFycmF5KDIwKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+ICh7CiAgICBsYWJlbDogYE51bWJlci1GbG9vci1iYWNrLW1hbnkgJHtpbmRleH1gLAogICAgdmFsdWU6IGluZGV4LAogIH0pKSwKfSwgewogIGxhYmVsOiAnQmFtYm9vJywKICB2YWx1ZTogJ2JhbWJvbycsCiAgY2hpbGRyZW46IFt7CiAgICBsYWJlbDogJ0xpdHRsZScsCiAgICB2YWx1ZTogJ2xpdHRsZScsCiAgICBjaGlsZHJlbjogW3sKICAgICAgbGFiZWw6ICdUb3kgRmlzaCcsCiAgICAgIHZhbHVlOiAnZmlzaCcsCiAgICB9LCB7CiAgICAgIGxhYmVsOiAnVG95IENhcmRzJywKICAgICAgdmFsdWU6ICdjYXJkcycsCiAgICB9LCB7CiAgICAgIGxhYmVsOiAnVG95IEJpcmQnLAogICAgICB2YWx1ZTogJ2JpcmQnLAogICAgfV0sCiAgfV0sCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgZmlsdGVyID0gKGlucHV0VmFsdWUsIHBhdGgpID0+IHsKICAgICAgcmV0dXJuIHBhdGguc29tZShvcHRpb24gPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBmaWx0ZXIsCiAgICAgIHZhbHVlOiByZWYoW1snbGlnaHQnLCAwXSwgWydsaWdodCcsIDFdXSksCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),style:{width:"233px"},multiple:"","max-tag-count":1,maxTagTextLength:4,maxSelectTextLength:4,options:s.options,clearSearchValueable:!1,"show-search":{filter:s.filter},placeholder:"Please select"},null,8,["value","options","show-search"])]),htmlCode:o(()=>[ia]),jsVersionHtml:o(()=>[ka]),_:1},8,["jsfiddle"])}var da=I(ua,[["render",ra]]);const ga=[{label:"Light",value:"light",children:new Array(20).fill(null).map((s,t)=>({label:`Number ${t}`,value:t,children:new Array(20).fill(null).map((k,p)=>({label:`The ${p}`,value:`the${p}`}))}))},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish"},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}],Ca=h({setup(){const s=({itemOption:{labelCells:t}})=>N(F,()=>t[t.length-2]);return{value:C([]),options:ga,tagRender:s}}}),Ia=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 233px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("responsive"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":tag-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagRender"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps"),n("span",{class:"token punctuation"},","),a(" CascaderCustomTagProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Tag "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Light'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Number "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(" index"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"The "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"the"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bamboo'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bamboo'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Little'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'little'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Fish'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fish'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Cards'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'cards'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Bird'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bird'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" itemOption"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" labelCells "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" CascaderCustomTagProps")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("Tag"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" labelCells"),n("span",{class:"token punctuation"},"["),a("labelCells"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      tagRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ha=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 233px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("responsive"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":tag-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagRender"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Tag "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Light'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Number "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(" index"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"The "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"the"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bamboo'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bamboo'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Little'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'little'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Fish'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fish'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Cards'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'cards'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Toy Bird'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bird'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
      itemOption`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        labelCells`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("Tag"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" labelCells"),n("span",{class:"token punctuation"},"["),a("labelCells"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      tagRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Aa(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"tag-render",cn:"\u901A\u8FC7 `tag-render` \u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>tag-render</code> \u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>tag-render</p>
`,order:5.1,version:"3.0.0",title:{"zh-CN":"\u591A\u9009\u81EA\u5B9A\u4E49 \u5185\u5BB9","en-US":"TagRender"},relativePath:"components/cascader/demo/tag-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHN0eWxlPSJ3aWR0aDogMjMzcHgiCiAgICBtdWx0aXBsZQogICAgbWF4LXRhZy1jb3VudD0icmVzcG9uc2l2ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICA6dGFnLXJlbmRlcj0idGFnUmVuZGVyIgogID48L2EtY2FzY2FkZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBoLCBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgQ2FzY2FkZXJQcm9wcywgQ2FzY2FkZXJDdXN0b21UYWdQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgVGFnIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBvcHRpb25zOiBDYXNjYWRlclByb3BzWydvcHRpb25zJ10gPSBbCiAgewogICAgbGFiZWw6ICdMaWdodCcsCiAgICB2YWx1ZTogJ2xpZ2h0JywKICAgIGNoaWxkcmVuOiBuZXcgQXJyYXkoMjApLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKHsKICAgICAgbGFiZWw6IGBOdW1iZXIgJHtpbmRleH1gLAogICAgICB2YWx1ZTogaW5kZXgsCiAgICAgIGNoaWxkcmVuOiBuZXcgQXJyYXkoMjApLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKHsKICAgICAgICBsYWJlbDogYFRoZSAke2luZGV4fWAsCiAgICAgICAgdmFsdWU6IGB0aGUke2luZGV4fWAsCiAgICAgIH0pKSwKICAgIH0pKSwKICB9LAogIHsKICAgIGxhYmVsOiAnQmFtYm9vJywKICAgIHZhbHVlOiAnYmFtYm9vJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICBsYWJlbDogJ0xpdHRsZScsCiAgICAgICAgdmFsdWU6ICdsaXR0bGUnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnVG95IEZpc2gnLAogICAgICAgICAgICB2YWx1ZTogJ2Zpc2gnLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICdUb3kgQ2FyZHMnLAogICAgICAgICAgICB2YWx1ZTogJ2NhcmRzJywKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnVG95IEJpcmQnLAogICAgICAgICAgICB2YWx1ZTogJ2JpcmQnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdGFnUmVuZGVyID0gKHsgaXRlbU9wdGlvbjogeyBsYWJlbENlbGxzIH0gfTogQ2FzY2FkZXJDdXN0b21UYWdQcm9wcykgPT4gewogICAgICByZXR1cm4gaChUYWcsICgpID0+IGxhYmVsQ2VsbHNbbGFiZWxDZWxscy5sZW5ndGggLSAyXSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZjxzdHJpbmdbXT4oW10pLAogICAgICBvcHRpb25zLAogICAgICB0YWdSZW5kZXIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyCiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHN0eWxlPSJ3aWR0aDogMjMzcHgiCiAgICBtdWx0aXBsZQogICAgbWF4LXRhZy1jb3VudD0icmVzcG9uc2l2ZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICA6dGFnLXJlbmRlcj0idGFnUmVuZGVyIgogID48L2EtY2FzY2FkZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGgsIGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgVGFnIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBvcHRpb25zID0gW3sKICBsYWJlbDogJ0xpZ2h0JywKICB2YWx1ZTogJ2xpZ2h0JywKICBjaGlsZHJlbjogbmV3IEFycmF5KDIwKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+ICh7CiAgICBsYWJlbDogYE51bWJlciAke2luZGV4fWAsCiAgICB2YWx1ZTogaW5kZXgsCiAgICBjaGlsZHJlbjogbmV3IEFycmF5KDIwKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+ICh7CiAgICAgIGxhYmVsOiBgVGhlICR7aW5kZXh9YCwKICAgICAgdmFsdWU6IGB0aGUke2luZGV4fWAsCiAgICB9KSksCiAgfSkpLAp9LCB7CiAgbGFiZWw6ICdCYW1ib28nLAogIHZhbHVlOiAnYmFtYm9vJywKICBjaGlsZHJlbjogW3sKICAgIGxhYmVsOiAnTGl0dGxlJywKICAgIHZhbHVlOiAnbGl0dGxlJywKICAgIGNoaWxkcmVuOiBbewogICAgICBsYWJlbDogJ1RveSBGaXNoJywKICAgICAgdmFsdWU6ICdmaXNoJywKICAgIH0sIHsKICAgICAgbGFiZWw6ICdUb3kgQ2FyZHMnLAogICAgICB2YWx1ZTogJ2NhcmRzJywKICAgIH0sIHsKICAgICAgbGFiZWw6ICdUb3kgQmlyZCcsCiAgICAgIHZhbHVlOiAnYmlyZCcsCiAgICB9XSwKICB9XSwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB0YWdSZW5kZXIgPSAoewogICAgICBpdGVtT3B0aW9uOiB7CiAgICAgICAgbGFiZWxDZWxscywKICAgICAgfSwKICAgIH0pID0+IHsKICAgICAgcmV0dXJuIGgoVGFnLCAoKSA9PiBsYWJlbENlbGxzW2xhYmVsQ2VsbHMubGVuZ3RoIC0gMl0pOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFtdKSwKICAgICAgb3B0aW9ucywKICAgICAgdGFnUmVuZGVyLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),style:{width:"233px"},multiple:"","max-tag-count":"responsive",options:s.options,placeholder:"Please select","tag-render":s.tagRender},null,8,["value","options","tag-render"])]),htmlCode:o(()=>[Ia]),jsVersionHtml:o(()=>[ha]),_:1},8,["jsfiddle"])}var ba=I(Ca,[["render",Aa]]);const ma=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],va=h({setup(){const s=({labels:t})=>(t==null?void 0:t[t.length-1])||"";return{value:C(["zhejiang","hangzhou","xihu"]),options:ma,displayRender:s}}}),Wa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":display-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("displayRender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CascaderProps"),n("span",{class:"token punctuation"},","),a(" CascaderDisplayRenderOptions "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(" CascaderProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"displayRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" labels "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" CascaderDisplayRenderOptions")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" labels"),n("span",{class:"token operator"},"?."),n("span",{class:"token punctuation"},"["),a("labels"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      displayRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Za=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":display-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("displayRender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'West Lake'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhonghuamen'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhong Hua Men'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"displayRender"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
      labels`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" labels"),n("span",{class:"token operator"},"?."),n("span",{class:"token punctuation"},"["),a("labels"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'xihu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      displayRender`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function wa(s,t,k,p,d,g){const u=e("a-cascader"),i=e("demo-box");return r(),A(i,{jsfiddle:{us:"display-render.",cn:"`display-render` \u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>display-render</code> \u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>display-render.</p>
`,order:0,title:{"zh-CN":"\u5355\u9009\u81EA\u5B9A\u4E49\u5185\u5BB9","en-US":"DisplayRender"},relativePath:"components/cascader/demo/display-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgOmRpc3BsYXktcmVuZGVyPSJkaXNwbGF5UmVuZGVyIiAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IENhc2NhZGVyUHJvcHMsIENhc2NhZGVyRGlzcGxheVJlbmRlck9wdGlvbnMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBvcHRpb25zOiBDYXNjYWRlclByb3BzWydvcHRpb25zJ10gPSBbCiAgewogICAgdmFsdWU6ICd6aGVqaWFuZycsCiAgICBsYWJlbDogJ1poZWppYW5nJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2hhbmd6aG91JywKICAgICAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICAgICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgdmFsdWU6ICdqaWFuZ3N1JywKICAgIGxhYmVsOiAnSmlhbmdzdScsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdmFsdWU6ICduYW5qaW5nJywKICAgICAgICBsYWJlbDogJ05hbmppbmcnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHZhbHVlOiAnemhvbmdodWFtZW4nLAogICAgICAgICAgICBsYWJlbDogJ1pob25nIEh1YSBNZW4nLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSwKICB9LApdOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgZGlzcGxheVJlbmRlciA9ICh7IGxhYmVscyB9OiBDYXNjYWRlckRpc3BsYXlSZW5kZXJPcHRpb25zKSA9PiB7CiAgICAgIHJldHVybiBsYWJlbHM/LltsYWJlbHMubGVuZ3RoIC0gMV0gfHwgJyc7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZjxzdHJpbmdbXT4oWyd6aGVqaWFuZycsICdoYW5nemhvdScsICd4aWh1J10pLAogICAgICBvcHRpb25zLAogICAgICBkaXNwbGF5UmVuZGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNhc2NhZGVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6b3B0aW9ucz0ib3B0aW9ucyIgOmRpc3BsYXktcmVuZGVyPSJkaXNwbGF5UmVuZGVyIiAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG9wdGlvbnMgPSBbewogIHZhbHVlOiAnemhlamlhbmcnLAogIGxhYmVsOiAnWmhlamlhbmcnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICBsYWJlbDogJ0hhbmd6aG91JywKICAgIGNoaWxkcmVuOiBbewogICAgICB2YWx1ZTogJ3hpaHUnLAogICAgICBsYWJlbDogJ1dlc3QgTGFrZScsCiAgICB9XSwKICB9XSwKfSwgewogIHZhbHVlOiAnamlhbmdzdScsCiAgbGFiZWw6ICdKaWFuZ3N1JywKICBjaGlsZHJlbjogW3sKICAgIHZhbHVlOiAnbmFuamluZycsCiAgICBsYWJlbDogJ05hbmppbmcnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIHZhbHVlOiAnemhvbmdodWFtZW4nLAogICAgICBsYWJlbDogJ1pob25nIEh1YSBNZW4nLAogICAgfV0sCiAgfV0sCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgZGlzcGxheVJlbmRlciA9ICh7CiAgICAgIGxhYmVscywKICAgIH0pID0+IHsKICAgICAgcmV0dXJuIGxhYmVscz8uW2xhYmVscy5sZW5ndGggLSAxXSB8fCAnJzsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbJ3poZWppYW5nJywgJ2hhbmd6aG91JywgJ3hpaHUnXSksCiAgICAgIG9wdGlvbnMsCiAgICAgIGRpc3BsYXlSZW5kZXIsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[l(u,{value:s.value,"onUpdate:value":t[0]||(t[0]=c=>s.value=c),options:s.options,"display-render":s.displayRender},null,8,["value","options","display-render"])]),htmlCode:o(()=>[Wa]),jsVersionHtml:o(()=>[Za]),_:1},8,["jsfiddle"])}var ya=I(va,[["render",wa]]);const fa={pageData:{title:"Cascader",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"Cascader",subtitle:"\u7EA7\u8054\u9009\u62E9",cover:"https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"showSearch",slug:"showSearch",content:"`showSearch` \u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5176\u4E2D\u7684\u5B57\u6BB5\uFF1A"},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Option",slug:"Option",content:""},{level:2,title:"\u65B9\u6CD5",slug:"\u65B9\u6CD5",content:""}],relativePath:"components/cascader/index.zh-CN.md",content:`
\u7EA7\u8054\u9009\u62E9\u6846\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002
- \u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002
- \u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002

## API

\`\`\`html
&lt;a-cascader :options=&quot;options&quot; v-model:value=&quot;value&quot; /&gt;
\`\`\`

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | Version |
| --- | --- | --- | --- | --- |
| allowClear | \u662F\u5426\u652F\u6301\u6E05\u9664 | boolean | true |  |
| autofocus | \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| changeOnSelect | \u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A | boolean | false |  |
| defaultValue | \u9ED8\u8BA4\u7684\u9009\u4E2D\u9879 | string\\[] \\| number\\[] | \\[] |  |
| disabled | \u7981\u7528 | boolean | false |  |
| displayRender | \u9009\u62E9\u540E\u5C55\u793A\u7684\u6E32\u67D3\u51FD\u6570,\u53EF\u4F7F\u7528 #displayRender=&quot;{labels, selectedOptions}&quot; | \`({labels, selectedOptions}) =&gt; VNode\` | \`labels =&gt; labels.join(&#39; / &#39;)\` |  |
| expandTrigger | \u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 &#39;click&#39; \u548C &#39;hover&#39; | string | &#39;click&#39; |  |
| fieldNames | \u81EA\u5B9A\u4E49 options \u4E2D label name children \u7684\u5B57\u6BB5 | object | \`{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }\` |  |
| getPopupContainer | \u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002 | Function(triggerNode) | () =&gt; document.body |  |
| loadData | \u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u9009\u9879\uFF0C\u65E0\u6CD5\u4E0E \`showSearch\` \u4E00\u8D77\u4F7F\u7528 | \`(selectedOptions) =&gt; void\` | - |  |
| notFoundContent | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | string \\| slot | &#39;Not Found&#39; |  |
| options | \u53EF\u9009\u9879\u6570\u636E\u6E90 | [Option](#option)[] | - |  |
| placeholder | \u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C | string | &#39;\u8BF7\u9009\u62E9&#39; |  |
| showSearch | \u5728\u9009\u62E9\u6846\u4E2D\u663E\u793A\u641C\u7D22\u6846 | boolean \\| [object](#showsearch) | false |  |
| size | \u8F93\u5165\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 \`large\` \`default\` \`small\` | string | \`default\` |  |
| suffixIcon | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | string \\| VNode \\| slot | - |  |
| value(v-model) | \u6307\u5B9A\u9009\u4E2D\u9879 | string\\[] \\| number\\[] | - |  |
| expandIcon | \u81EA\u5B9A\u4E49\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u56FE\u6807 | slot | - | 4.0 |
| maxTagCount | \u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017 | number \\| \`responsive\` | - | 4.1 |
| maxTagPlaceholder | \u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9 | v-slot \\| function(omittedValues) | - | 4.1 |
| dropdownClassName | \u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D | string | - | 4.0 |
| dropdownStyle | \u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F | CSSProperties | {} | 4.0 |
| open | \u63A7\u5236\u6D6E\u5C42\u663E\u9690 | boolean | - | 4.0 |
| placement | \u6D6E\u5C42\u9884\u8BBE\u4F4D\u7F6E\uFF1A\`bottomLeft\` \`bottomRight\` \`topLeft\` \`topRight\` | string | \`bottomLeft\` | 4.0 |
| tagRender | \u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548 | (props) =&gt; ReactNode | - | 4.1 |
| multiple | \u652F\u6301\u591A\u9009\u8282\u70B9 | boolean | - | 4.1 |
| searchValue | \u8BBE\u7F6E\u641C\u7D22\u7684\u503C\uFF0C\u9700\u8981\u4E0E \`showSearch\` \u914D\u5408\u4F7F\u7528 | string | - | 4.0 |
| clearSearchValueable | \u9009\u4E2D\u4E4B\u540E\u662F\u5426\u6E05\u695A\u9009\u62E9 | boolean | true | 4.22.0 |
| maxTagTextLength | \u591A\u9009\u4E4B\u540E\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6 | number | - | 4.22.0 |
| maxSelectTextLength | \u4E0B\u62C9\u9009\u9879\u6587\u672C\u957F\u5EA6 | number | - | 4.22.0 |

### showSearch

\`showSearch\` \u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5176\u4E2D\u7684\u5B57\u6BB5\uFF1A

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- |
| filter | \u63A5\u6536 \`inputValue\` \`path\` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 \`path\` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false\u3002 | \`function(inputValue, path): boolean\` |  |
| limit | \u641C\u7D22\u7ED3\u679C\u5C55\u793A\u6570\u91CF | number \\| false | 50 |
| matchInputWidth | \u641C\u7D22\u7ED3\u679C\u5217\u8868\u662F\u5426\u4E0E\u8F93\u5165\u6846\u540C\u5BBD | boolean |  |
| render | \u7528\u4E8E\u6E32\u67D3 filter \u540E\u7684\u9009\u9879,\u53EF\u4F7F\u7528 #showSearchRender=&quot;{inputValue, path}&quot; | \`function({inputValue, path}): VNode\` |  |
| sort | \u7528\u4E8E\u6392\u5E8F filter \u540E\u7684\u9009\u9879 | \`function(a, b, inputValue)\` |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0              | \u8BF4\u660E                   | \u56DE\u8C03\u53C2\u6570                           | \u7248\u672C |
| --------------------- | ---------------------- | ---------------------------------- | ---- | --- |
| change                | \u9009\u62E9\u5B8C\u6210\u540E\u7684\u56DE\u8C03       | \`(value, selectedOptions) =&gt; void\` | -    |     |
| dropdownVisibleChange | \u663E\u793A/\u9690\u85CF\u6D6E\u5C42\u7684\u56DE\u8C03    | \`(value) =&gt; void\`                  | -    | 4.0 |
| search                | \u76D1\u542C\u641C\u7D22\uFF0C\u8FD4\u56DE\u8F93\u5165\u7684\u503C | \`(value) =&gt; void\`                  | -    | 4.0 |

### Option

\`\`\`ts
interface Option {
  value: string | number;
  label?: any;
  disabled?: boolean;
  children?: Option[];
}
\`\`\`

## \u65B9\u6CD5

| \u540D\u79F0    | \u63CF\u8FF0     |
| ------- | -------- |
| blur()  | \u79FB\u9664\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

&gt; \u6CE8\u610F\uFF0C\u5982\u679C\u9700\u8981\u83B7\u5F97\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u53C2\u8003 react \u7EC4\u4EF6\u7684\u5B9E\u73B0 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)\u3002
`,html:`<p>\u7EA7\u8054\u9009\u62E9\u6846\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002</li>
<li>\u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002</li>
<li>\u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>allowClear</td>
<td>\u662F\u5426\u652F\u6301\u6E05\u9664</td>
<td>boolean</td>
<td>true</td>
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
<td>changeOnSelect</td>
<td>\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td>
<td>string[] | number[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>displayRender</td>
<td>\u9009\u62E9\u540E\u5C55\u793A\u7684\u6E32\u67D3\u51FD\u6570,\u53EF\u4F7F\u7528 #displayRender=&quot;{labels, selectedOptions}&quot;</td>
<td><code>({labels, selectedOptions}) =&gt; VNode</code></td>
<td><code>labels =&gt; labels.join(' / ')</code></td>
<td></td>
</tr>
<tr>
<td>expandTrigger</td>
<td>\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 'click' \u548C 'hover'</td>
<td>string</td>
<td>'click'</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>\u81EA\u5B9A\u4E49 options \u4E2D label name children \u7684\u5B57\u6BB5</td>
<td>object</td>
<td><code>{ label: 'label', value: 'value', children: 'children' }</code></td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td>
<td>Function(triggerNode)</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>loadData</td>
<td>\u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u9009\u9879\uFF0C\u65E0\u6CD5\u4E0E <code>showSearch</code> \u4E00\u8D77\u4F7F\u7528</td>
<td><code>(selectedOptions) =&gt; void</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>notFoundContent</td>
<td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td>string | slot</td>
<td>'Not Found'</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td>
<td><a href="#option">Option</a>[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td>
<td>string</td>
<td>'\u8BF7\u9009\u62E9'</td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>\u5728\u9009\u62E9\u6846\u4E2D\u663E\u793A\u641C\u7D22\u6846</td>
<td>boolean | <a href="#showsearch">object</a></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td>
<td>string | VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u6307\u5B9A\u9009\u4E2D\u9879</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>expandIcon</td>
<td>\u81EA\u5B9A\u4E49\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u56FE\u6807</td>
<td>slot</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>maxTagCount</td>
<td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017</td>
<td>number | <code>responsive</code></td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td>v-slot | function(omittedValues)</td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>dropdownClassName</td>
<td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>dropdownStyle</td>
<td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F</td>
<td>CSSProperties</td>
<td>{}</td>
<td>4.0</td>
</tr>
<tr>
<td>open</td>
<td>\u63A7\u5236\u6D6E\u5C42\u663E\u9690</td>
<td>boolean</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>placement</td>
<td>\u6D6E\u5C42\u9884\u8BBE\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottomRight</code> <code>topLeft</code> <code>topRight</code></td>
<td>string</td>
<td><code>bottomLeft</code></td>
<td>4.0</td>
</tr>
<tr>
<td>tagRender</td>
<td>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548</td>
<td>(props) =&gt; ReactNode</td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>multiple</td>
<td>\u652F\u6301\u591A\u9009\u8282\u70B9</td>
<td>boolean</td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>searchValue</td>
<td>\u8BBE\u7F6E\u641C\u7D22\u7684\u503C\uFF0C\u9700\u8981\u4E0E <code>showSearch</code> \u914D\u5408\u4F7F\u7528</td>
<td>string</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>clearSearchValueable</td>
<td>\u9009\u4E2D\u4E4B\u540E\u662F\u5426\u6E05\u695A\u9009\u62E9</td>
<td>boolean</td>
<td>true</td>
<td>4.22.0</td>
</tr>
<tr>
<td>maxTagTextLength</td>
<td>\u591A\u9009\u4E4B\u540E\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</td>
<td>number</td>
<td>-</td>
<td>4.22.0</td>
</tr>
<tr>
<td>maxSelectTextLength</td>
<td>\u4E0B\u62C9\u9009\u9879\u6587\u672C\u957F\u5EA6</td>
<td>number</td>
<td>-</td>
<td>4.22.0</td>
</tr>
</tbody>
</table>
<h3 id="showSearch">showSearch <a class="header-anchor" href="#showSearch">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>showSearch</code> \u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5176\u4E2D\u7684\u5B57\u6BB5\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>filter</td>
<td>\u63A5\u6536 <code>inputValue</code> <code>path</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>path</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false\u3002</td>
<td><code>function(inputValue, path): boolean</code></td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>\u641C\u7D22\u7ED3\u679C\u5C55\u793A\u6570\u91CF</td>
<td>number | false</td>
<td>50</td>
</tr>
<tr>
<td>matchInputWidth</td>
<td>\u641C\u7D22\u7ED3\u679C\u5217\u8868\u662F\u5426\u4E0E\u8F93\u5165\u6846\u540C\u5BBD</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>render</td>
<td>\u7528\u4E8E\u6E32\u67D3 filter \u540E\u7684\u9009\u9879,\u53EF\u4F7F\u7528 #showSearchRender=&quot;{inputValue, path}&quot;</td>
<td><code>function({inputValue, path}): VNode</code></td>
<td></td>
</tr>
<tr>
<td>sort</td>
<td>\u7528\u4E8E\u6392\u5E8F filter \u540E\u7684\u9009\u9879</td>
<td><code>function(a, b, inputValue)</code></td>
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
<td>change</td>
<td>\u9009\u62E9\u5B8C\u6210\u540E\u7684\u56DE\u8C03</td>
<td><code>(value, selectedOptions) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>\u663E\u793A/\u9690\u85CF\u6D6E\u5C42\u7684\u56DE\u8C03</td>
<td><code>(value) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td>search</td>
<td>\u76D1\u542C\u641C\u7D22\uFF0C\u8FD4\u56DE\u8F93\u5165\u7684\u503C</td>
<td><code>(value) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="Option">Option <a class="header-anchor" href="#Option">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-ts" v-pre><code><span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>\u79FB\u9664\u7126\u70B9</td>
</tr>
<tr>
<td>focus()</td>
<td>\u83B7\u53D6\u7126\u70B9</td>
</tr>
</tbody>
</table>
<blockquote>
<p>\u6CE8\u610F\uFF0C\u5982\u679C\u9700\u8981\u83B7\u5F97\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u53C2\u8003 react \u7EC4\u4EF6\u7684\u5B9E\u73B0 <a href="https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17" target="_blank" rel="noopener noreferrer">china-division</a>\u3002</p>
</blockquote>
`,lastUpdated:1701878243691}},Ba={class:"markdown"},Ga=y(`<p>\u7EA7\u8054\u9009\u62E9\u6846\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002</li><li>\u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002</li><li>\u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>Version</th></tr></thead><tbody><tr><td>allowClear</td><td>\u662F\u5426\u652F\u6301\u6E05\u9664</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>changeOnSelect</td><td>\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>displayRender</td><td>\u9009\u62E9\u540E\u5C55\u793A\u7684\u6E32\u67D3\u51FD\u6570,\u53EF\u4F7F\u7528 #displayRender=&quot;{labels, selectedOptions}&quot;</td><td><code>({labels, selectedOptions}) =&gt; VNode</code></td><td><code>labels =&gt; labels.join(&#39; / &#39;)</code></td><td></td></tr><tr><td>expandTrigger</td><td>\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 &#39;click&#39; \u548C &#39;hover&#39;</td><td>string</td><td>&#39;click&#39;</td><td></td></tr><tr><td>fieldNames</td><td>\u81EA\u5B9A\u4E49 options \u4E2D label name children \u7684\u5B57\u6BB5</td><td>object</td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>loadData</td><td>\u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u9009\u9879\uFF0C\u65E0\u6CD5\u4E0E <code>showSearch</code> \u4E00\u8D77\u4F7F\u7528</td><td><code>(selectedOptions) =&gt; void</code></td><td>-</td><td></td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>string | slot</td><td>&#39;Not Found&#39;</td><td></td></tr><tr><td>options</td><td>\u53EF\u9009\u9879\u6570\u636E\u6E90</td><td><a href="#option">Option</a>[]</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>&#39;\u8BF7\u9009\u62E9&#39;</td><td></td></tr><tr><td>showSearch</td><td>\u5728\u9009\u62E9\u6846\u4E2D\u663E\u793A\u641C\u7D22\u6846</td><td>boolean | <a href="#showsearch">object</a></td><td>false</td><td></td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>string | VNode | slot</td><td>-</td><td></td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u9009\u4E2D\u9879</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>expandIcon</td><td>\u81EA\u5B9A\u4E49\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u56FE\u6807</td><td>slot</td><td>-</td><td>4.0</td></tr><tr><td>maxTagCount</td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017</td><td>number | <code>responsive</code></td><td>-</td><td>4.1</td></tr><tr><td>maxTagPlaceholder</td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>v-slot | function(omittedValues)</td><td>-</td><td>4.1</td></tr><tr><td>dropdownClassName</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D</td><td>string</td><td>-</td><td>4.0</td></tr><tr><td>dropdownStyle</td><td>\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F</td><td>CSSProperties</td><td>{}</td><td>4.0</td></tr><tr><td>open</td><td>\u63A7\u5236\u6D6E\u5C42\u663E\u9690</td><td>boolean</td><td>-</td><td>4.0</td></tr><tr><td>placement</td><td>\u6D6E\u5C42\u9884\u8BBE\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottomRight</code> <code>topLeft</code> <code>topRight</code></td><td>string</td><td><code>bottomLeft</code></td><td>4.0</td></tr><tr><td>tagRender</td><td>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548</td><td>(props) =&gt; ReactNode</td><td>-</td><td>4.1</td></tr><tr><td>multiple</td><td>\u652F\u6301\u591A\u9009\u8282\u70B9</td><td>boolean</td><td>-</td><td>4.1</td></tr><tr><td>searchValue</td><td>\u8BBE\u7F6E\u641C\u7D22\u7684\u503C\uFF0C\u9700\u8981\u4E0E <code>showSearch</code> \u914D\u5408\u4F7F\u7528</td><td>string</td><td>-</td><td>4.0</td></tr><tr><td>clearSearchValueable</td><td>\u9009\u4E2D\u4E4B\u540E\u662F\u5426\u6E05\u695A\u9009\u62E9</td><td>boolean</td><td>true</td><td>4.22.0</td></tr><tr><td>maxTagTextLength</td><td>\u591A\u9009\u4E4B\u540E\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</td><td>number</td><td>-</td><td>4.22.0</td></tr><tr><td>maxSelectTextLength</td><td>\u4E0B\u62C9\u9009\u9879\u6587\u672C\u957F\u5EA6</td><td>number</td><td>-</td><td>4.22.0</td></tr></tbody></table><h3 id="showSearch">showSearch <a class="header-anchor" href="#showSearch"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>showSearch</code> \u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5176\u4E2D\u7684\u5B57\u6BB5\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>filter</td><td>\u63A5\u6536 <code>inputValue</code> <code>path</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>path</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false\u3002</td><td><code>function(inputValue, path): boolean</code></td><td></td></tr><tr><td>limit</td><td>\u641C\u7D22\u7ED3\u679C\u5C55\u793A\u6570\u91CF</td><td>number | false</td><td>50</td></tr><tr><td>matchInputWidth</td><td>\u641C\u7D22\u7ED3\u679C\u5217\u8868\u662F\u5426\u4E0E\u8F93\u5165\u6846\u540C\u5BBD</td><td>boolean</td><td></td></tr><tr><td>render</td><td>\u7528\u4E8E\u6E32\u67D3 filter \u540E\u7684\u9009\u9879,\u53EF\u4F7F\u7528 #showSearchRender=&quot;{inputValue, path}&quot;</td><td><code>function({inputValue, path}): VNode</code></td><td></td></tr><tr><td>sort</td><td>\u7528\u4E8E\u6392\u5E8F filter \u540E\u7684\u9009\u9879</td><td><code>function(a, b, inputValue)</code></td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9\u5B8C\u6210\u540E\u7684\u56DE\u8C03</td><td><code>(value, selectedOptions) =&gt; void</code></td><td>-</td></tr><tr><td>dropdownVisibleChange</td><td>\u663E\u793A/\u9690\u85CF\u6D6E\u5C42\u7684\u56DE\u8C03</td><td><code>(value) =&gt; void</code></td><td>-</td></tr><tr><td>search</td><td>\u76D1\u542C\u641C\u7D22\uFF0C\u8FD4\u56DE\u8F93\u5165\u7684\u503C</td><td><code>(value) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="Option">Option <a class="header-anchor" href="#Option"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-ts"><code><span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u9700\u8981\u83B7\u5F97\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u53C2\u8003 react \u7EC4\u4EF6\u7684\u5B9E\u73B0 <a href="https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17" target="_blank" rel="noopener noreferrer">china-division</a>\u3002</p></blockquote>`,16),Ha=[Ga];function Va(s,t,k,p,d,g){return r(),v("article",Ba,Ha)}var Ya=I(fa,[["render",Va]]);const Ja={pageData:{title:"Cascader",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"Cascader",cover:"https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"showSearch",slug:"showSearch",content:"Fields in `showSearch`:"},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Option",slug:"Option",content:""},{level:2,title:"Methods",slug:"Methods",content:""}],relativePath:"components/cascader/index.en-US.md",content:`
Cascade selection box.

## When To Use

- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.
- Chooses cascade items in one float layer for better user experience.

## API

\`\`\`html
&lt;a-cascader :options=&quot;options&quot; v-model:value=&quot;value&quot; /&gt;
\`\`\`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | whether allow clear | boolean | true |  |
| autofocus | get focus when component mounted | boolean | false |  |
| changeOnSelect | change value on each selection if set to true, see above demo for details | boolean | false |  |
| disabled | whether disabled select | boolean | false |  |
| displayRender | render function of displaying selected options, you can use #displayRender=&quot;{labels, selectedOptions}&quot; | \`({labels, selectedOptions}) =&gt; VNode\` | \`labels =&gt; labels.join(&#39; / &#39;)\` |  |
| expandTrigger | expand current item when click or hover, one of &#39;click&#39; &#39;hover&#39; | string | &#39;click&#39; |  |
| fieldNames | custom field name for label and value and children | object | \`{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }\` |  |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to \`body\`. When position issues happen, try to modify it into scrollable content and position it relative. | Function(triggerNode) | () =&gt; document.body |  |
| loadData | To load option lazily, and it cannot work with \`showSearch\` | \`(selectedOptions) =&gt; void\` | - |  |
| notFoundContent | Specify content to show when no result matches. | string \\| slot | &#39;Not Found&#39; |  |
| options | data options of cascade | [Option](#option)[] | - |  |
| placeholder | input placeholder | string | &#39;Please select&#39; |  |
| showSearch | Whether show search input in single mode. | boolean \\| [object](#showsearch) | false |  |
| size | input size, one of \`large\` \`default\` \`small\` | string | \`default\` |  |
| suffixIcon | The custom suffix icon | string \\| VNode \\| slot | - |  |
| value(v-model) | selected value | string\\[] \\| number\\[] | - |  |
| expandIcon | Customize the current item expand icon | slot | - | 4.0 |
| maxTagCount | Max tag count to show. \`responsive\` will cost render performance | number \\| \`responsive\` | - | 4.1 |
| maxTagPlaceholder | Placeholder for not showing tags | v-slot \\| function(omittedValues) | - | 4.1 |
| dropdownClassName | additional className of popup overlay | string | - | 4.0 |
| dropdownStyle | additional style of popup overlay | CSSProperties | {} | 4.0 |
| open | set visible of cascader popup | boolean | - | 4.0 |
| placement | use preset popup align config from builtinPlacements\uFF1A\`bottomLeft\` \`bottomRight\` \`topLeft\` \`topRight\` | string | \`bottomLeft\` | 4.0 |
| tagRender | Customize tag render when \`multiple\` | slot | - | 4.1 |
| multiple | Support multiple or not | boolean | - | 4.1 |
| searchValue | Set search value\uFF0CNeed work with \`showSearch\` | string | - | 4.0 |

### showSearch

Fields in \`showSearch\`:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| filter | The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded. | \`function(inputValue, path): boolean\` |  |
| limit | Set the count of filtered items | number \\| false | 50 |
| matchInputWidth | Whether the width of result list equals to input&#39;s | boolean |  |
| render | Used to render filtered options, you can use #showSearchRender=&quot;{inputValue, path}&quot; | \`function({inputValue, path}): VNode\` |  |
| sort | Used to sort filtered options. | \`function(a, b, inputValue)\` |  |

### events

| Events Name | Description | Arguments | version |
| --- | --- | --- | --- | --- |
| change | callback when finishing cascader select | \`(value, selectedOptions) =&gt; void\` | - |  |
| dropdownVisibleChange | callback when popup shown or hidden | \`(value) =&gt; void\` | - | 3.0 |
| search | callback when input value change | \`(value) =&gt; void\` | - | 1.5.4 |

### Option

\`\`\`ts
interface Option {
  value: string | number;
  label?: VNode;
  disabled?: boolean;
  children?: Option[];
}
\`\`\`

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
`,html:`<p>Cascade selection box.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.</li>
<li>When selecting from a large data set, with multi-stage classification separated for easy selection.</li>
<li>Chooses cascade items in one float layer for better user experience.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
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
<td>whether allow clear</td>
<td>boolean</td>
<td>true</td>
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
<td>changeOnSelect</td>
<td>change value on each selection if set to true, see above demo for details</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>whether disabled select</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>displayRender</td>
<td>render function of displaying selected options, you can use #displayRender=&quot;{labels, selectedOptions}&quot;</td>
<td><code>({labels, selectedOptions}) =&gt; VNode</code></td>
<td><code>labels =&gt; labels.join(' / ')</code></td>
<td></td>
</tr>
<tr>
<td>expandTrigger</td>
<td>expand current item when click or hover, one of 'click' 'hover'</td>
<td>string</td>
<td>'click'</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>custom field name for label and value and children</td>
<td>object</td>
<td><code>{ label: 'label', value: 'value', children: 'children' }</code></td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>Parent Node which the selector should be rendered to. Default to <code>body</code>. When position issues happen, try to modify it into scrollable content and position it relative.</td>
<td>Function(triggerNode)</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>loadData</td>
<td>To load option lazily, and it cannot work with <code>showSearch</code></td>
<td><code>(selectedOptions) =&gt; void</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>notFoundContent</td>
<td>Specify content to show when no result matches.</td>
<td>string | slot</td>
<td>'Not Found'</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>data options of cascade</td>
<td><a href="#option">Option</a>[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>input placeholder</td>
<td>string</td>
<td>'Please select'</td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>Whether show search input in single mode.</td>
<td>boolean | <a href="#showsearch">object</a></td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>input size, one of <code>large</code> <code>default</code> <code>small</code></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>The custom suffix icon</td>
<td>string | VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>selected value</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>expandIcon</td>
<td>Customize the current item expand icon</td>
<td>slot</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>maxTagCount</td>
<td>Max tag count to show. <code>responsive</code> will cost render performance</td>
<td>number | <code>responsive</code></td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>Placeholder for not showing tags</td>
<td>v-slot | function(omittedValues)</td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>dropdownClassName</td>
<td>additional className of popup overlay</td>
<td>string</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>dropdownStyle</td>
<td>additional style of popup overlay</td>
<td>CSSProperties</td>
<td>{}</td>
<td>4.0</td>
</tr>
<tr>
<td>open</td>
<td>set visible of cascader popup</td>
<td>boolean</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>placement</td>
<td>use preset popup align config from builtinPlacements\uFF1A<code>bottomLeft</code> <code>bottomRight</code> <code>topLeft</code> <code>topRight</code></td>
<td>string</td>
<td><code>bottomLeft</code></td>
<td>4.0</td>
</tr>
<tr>
<td>tagRender</td>
<td>Customize tag render when <code>multiple</code></td>
<td>slot</td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>multiple</td>
<td>Support multiple or not</td>
<td>boolean</td>
<td>-</td>
<td>4.1</td>
</tr>
<tr>
<td>searchValue</td>
<td>Set search value\uFF0CNeed work with <code>showSearch</code></td>
<td>string</td>
<td>-</td>
<td>4.0</td>
</tr>
</tbody>
</table>
<h3 id="showSearch">showSearch <a class="header-anchor" href="#showSearch">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Fields in <code>showSearch</code>:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>filter</td>
<td>The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.</td>
<td><code>function(inputValue, path): boolean</code></td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>Set the count of filtered items</td>
<td>number | false</td>
<td>50</td>
</tr>
<tr>
<td>matchInputWidth</td>
<td>Whether the width of result list equals to input's</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>render</td>
<td>Used to render filtered options, you can use #showSearchRender=&quot;{inputValue, path}&quot;</td>
<td><code>function({inputValue, path}): VNode</code></td>
<td></td>
</tr>
<tr>
<td>sort</td>
<td>Used to sort filtered options.</td>
<td><code>function(a, b, inputValue)</code></td>
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
<th>version</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>callback when finishing cascader select</td>
<td><code>(value, selectedOptions) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>callback when popup shown or hidden</td>
<td><code>(value) =&gt; void</code></td>
<td>-</td>
</tr>
<tr>
<td>search</td>
<td>callback when input value change</td>
<td><code>(value) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="Option">Option <a class="header-anchor" href="#Option">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-ts" v-pre><code><span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> VNode<span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h2 id="Methods">Methods <a class="header-anchor" href="#Methods">
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
<td>blur()</td>
<td>remove focus</td>
</tr>
<tr>
<td>focus()</td>
<td>get focus</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243691}},xa={class:"markdown"},Sa=y(`<p>Cascade selection box.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.</li><li>When selecting from a large data set, with multi-stage classification separated for easy selection.</li><li>Chooses cascade items in one float layer for better user experience.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>allowClear</td><td>whether allow clear</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>get focus when component mounted</td><td>boolean</td><td>false</td><td></td></tr><tr><td>changeOnSelect</td><td>change value on each selection if set to true, see above demo for details</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>whether disabled select</td><td>boolean</td><td>false</td><td></td></tr><tr><td>displayRender</td><td>render function of displaying selected options, you can use #displayRender=&quot;{labels, selectedOptions}&quot;</td><td><code>({labels, selectedOptions}) =&gt; VNode</code></td><td><code>labels =&gt; labels.join(&#39; / &#39;)</code></td><td></td></tr><tr><td>expandTrigger</td><td>expand current item when click or hover, one of &#39;click&#39; &#39;hover&#39;</td><td>string</td><td>&#39;click&#39;</td><td></td></tr><tr><td>fieldNames</td><td>custom field name for label and value and children</td><td>object</td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td><td></td></tr><tr><td>getPopupContainer</td><td>Parent Node which the selector should be rendered to. Default to <code>body</code>. When position issues happen, try to modify it into scrollable content and position it relative.</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>loadData</td><td>To load option lazily, and it cannot work with <code>showSearch</code></td><td><code>(selectedOptions) =&gt; void</code></td><td>-</td><td></td></tr><tr><td>notFoundContent</td><td>Specify content to show when no result matches.</td><td>string | slot</td><td>&#39;Not Found&#39;</td><td></td></tr><tr><td>options</td><td>data options of cascade</td><td><a href="#option">Option</a>[]</td><td>-</td><td></td></tr><tr><td>placeholder</td><td>input placeholder</td><td>string</td><td>&#39;Please select&#39;</td><td></td></tr><tr><td>showSearch</td><td>Whether show search input in single mode.</td><td>boolean | <a href="#showsearch">object</a></td><td>false</td><td></td></tr><tr><td>size</td><td>input size, one of <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>suffixIcon</td><td>The custom suffix icon</td><td>string | VNode | slot</td><td>-</td><td></td></tr><tr><td>value(v-model)</td><td>selected value</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>expandIcon</td><td>Customize the current item expand icon</td><td>slot</td><td>-</td><td>4.0</td></tr><tr><td>maxTagCount</td><td>Max tag count to show. <code>responsive</code> will cost render performance</td><td>number | <code>responsive</code></td><td>-</td><td>4.1</td></tr><tr><td>maxTagPlaceholder</td><td>Placeholder for not showing tags</td><td>v-slot | function(omittedValues)</td><td>-</td><td>4.1</td></tr><tr><td>dropdownClassName</td><td>additional className of popup overlay</td><td>string</td><td>-</td><td>4.0</td></tr><tr><td>dropdownStyle</td><td>additional style of popup overlay</td><td>CSSProperties</td><td>{}</td><td>4.0</td></tr><tr><td>open</td><td>set visible of cascader popup</td><td>boolean</td><td>-</td><td>4.0</td></tr><tr><td>placement</td><td>use preset popup align config from builtinPlacements\uFF1A<code>bottomLeft</code> <code>bottomRight</code> <code>topLeft</code> <code>topRight</code></td><td>string</td><td><code>bottomLeft</code></td><td>4.0</td></tr><tr><td>tagRender</td><td>Customize tag render when <code>multiple</code></td><td>slot</td><td>-</td><td>4.1</td></tr><tr><td>multiple</td><td>Support multiple or not</td><td>boolean</td><td>-</td><td>4.1</td></tr><tr><td>searchValue</td><td>Set search value\uFF0CNeed work with <code>showSearch</code></td><td>string</td><td>-</td><td>4.0</td></tr></tbody></table><h3 id="showSearch">showSearch <a class="header-anchor" href="#showSearch"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Fields in <code>showSearch</code>:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>filter</td><td>The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.</td><td><code>function(inputValue, path): boolean</code></td><td></td></tr><tr><td>limit</td><td>Set the count of filtered items</td><td>number | false</td><td>50</td></tr><tr><td>matchInputWidth</td><td>Whether the width of result list equals to input&#39;s</td><td>boolean</td><td></td></tr><tr><td>render</td><td>Used to render filtered options, you can use #showSearchRender=&quot;{inputValue, path}&quot;</td><td><code>function({inputValue, path}): VNode</code></td><td></td></tr><tr><td>sort</td><td>Used to sort filtered options.</td><td><code>function(a, b, inputValue)</code></td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>version</th></tr></thead><tbody><tr><td>change</td><td>callback when finishing cascader select</td><td><code>(value, selectedOptions) =&gt; void</code></td><td>-</td></tr><tr><td>dropdownVisibleChange</td><td>callback when popup shown or hidden</td><td><code>(value) =&gt; void</code></td><td>-</td></tr><tr><td>search</td><td>callback when input value change</td><td><code>(value) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="Option">Option <a class="header-anchor" href="#Option"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-ts"><code><span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> VNode<span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="Methods">Methods <a class="header-anchor" href="#Methods"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td></tr><tr><td>focus()</td><td>get focus</td></tr></tbody></table>`,15),Ka=[Sa];function Na(s,t,k,p,d,g){return r(),v("article",xa,Ka)}var Fa=I(Ja,[["render",Na]]);const za=h({CN:Ya,US:Fa,components:{Basic:O,ChangeOnSelect:E,CustomRender:cn,CustomTrigger:gn,DisabledOption:mn,Hover:fn,Lazy:Yn,Search:Fn,Size:_n,FieldsName:aa,Suffix:pa,MultipleVue:da,TagRender:ba,DisplayRender:ya}});function ja(s,t,k,p,d,g){const u=e("Basic"),i=e("CustomTrigger"),c=e("Hover"),b=e("DisabledOption"),W=e("ChangeOnSelect"),m=e("Size"),w=e("CustomRender"),f=e("Search"),B=e("Lazy"),G=e("FieldsName"),H=e("Suffix"),V=e("MultipleVue"),Y=e("DisplayRender"),J=e("TagRender"),x=e("demo-sort");return r(),A(x,null,{default:o(()=>[l(u),l(i),l(c),l(b),l(W),l(m),l(w),l(f),l(B),l(G),l(H),l(V),l(Y),l(J)]),_:1})}var Pa=I(za,[["render",ja]]);export{Pa as default};

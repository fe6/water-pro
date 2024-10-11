import{d as b,k as d,w,aq as o,J as l,bN as v,bO as e,e as u,E as h,H as t,bP as Z,F as y,G as n,bX as R,cb as H}from"./vendor.0f0e4632.js";import{_ as m,s as G}from"./index.f6b32fa6.js";import{I as T}from"./byted-smiling-face.ff1d9dc6.js";const Y=b({setup(){const a=d(),s=d([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]);return w(a,()=>{console.log(a.value)}),{value:a,treeData:s}}}),F={key:0,style:{color:"#08c"}},L=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("sss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),K=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("sss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function J(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"The most basic usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The most basic usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/tree-select/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyB2YWx1ZTogdmFsLCB0aXRsZSB9Ij4KICAgICAgPGIgdi1pZj0idmFsID09PSAncGFyZW50IDEtMSciIHN0eWxlPSJjb2xvcjogIzA4YyI+c3NzPC9iPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBUcmVlU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxzdHJpbmc+KCk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZjxUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ10+KFsKICAgICAgewogICAgICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAgICAgIHZhbHVlOiAncGFyZW50IDEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAgICAgIHZhbHVlOiAncGFyZW50IDEtMCcsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgdGl0bGU6ICdteSBsZWFmJywKICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgdGl0bGU6ICd5b3VyIGxlYWYnLAogICAgICAgICAgICAgICAgdmFsdWU6ICdsZWFmMicsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMScsCiAgICAgICAgICAgIHZhbHVlOiAncGFyZW50IDEtMScsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdKTsKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKHZhbHVlLnZhbHVlKTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyB2YWx1ZTogdmFsLCB0aXRsZSB9Ij4KICAgICAgPGIgdi1pZj0idmFsID09PSAncGFyZW50IDEtMSciIHN0eWxlPSJjb2xvcjogIzA4YyI+c3NzPC9iPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gcmVmKFt7CiAgICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAgICB2YWx1ZTogJ3BhcmVudCAxJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTAnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgdGl0bGU6ICdteSBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAneW91ciBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjInLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0xJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICB9XSwKICAgIH1dKTsKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKHZhbHVlLnZhbHVlKTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[u(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":"","tree-data":a.treeData},{title:e(({value:c,title:C})=>[c==="parent 1-1"?(l(),h("b",F,"sss")):(l(),h(y,{key:1},[t(Z(C),1)],64))]),_:1},8,["value","tree-data"])]),htmlCode:e(()=>[L]),jsVersionHtml:e(()=>[K]),_:1},8,["jsfiddle"])}var X=m(Y,[["render",J]]);const D=b({setup(){const a=d([]),s=d([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]);return w(a,()=>{console.log("select",a.value)}),{value:a,treeData:s}}}),P={key:0,style:{color:"#08c"}},U=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ val }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),j=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ val }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function E(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"Multiple selection usage.",cn:"\u591A\u9009\u7684\u6811\u9009\u62E9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u591A\u9009\u7684\u6811\u9009\u62E9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Multiple selection usage.</p>
`,order:1,title:{"zh-CN":"\u591A\u9009","en-US":"Multiple Selection"},relativePath:"components/tree-select/demo/multiple.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICBtdWx0aXBsZQogICAgdHJlZS1kZWZhdWx0LWV4cGFuZC1hbGwKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdmFsdWU6IHZhbCwgdGl0bGUgfSI+CiAgICAgIDxiIHYtaWY9InZhbCA9PT0gJ3BhcmVudCAxLTEnIiBzdHlsZT0iY29sb3I6ICMwOGMiPnt7IHZhbCB9fTwvYj4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyB0aXRsZSB9fTwvdGVtcGxhdGU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmVlLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVHJlZVNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmPHN0cmluZ1tdPihbXSk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZjxUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ10+KFsKICAgICAgewogICAgICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAgICAgIHZhbHVlOiAncGFyZW50IDEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAgICAgIHZhbHVlOiAncGFyZW50IDEtMCcsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgdGl0bGU6ICdteSBsZWFmJywKICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgdGl0bGU6ICd5b3VyIGxlYWYnLAogICAgICAgICAgICAgICAgdmFsdWU6ICdsZWFmMicsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMScsCiAgICAgICAgICAgIHZhbHVlOiAncGFyZW50IDEtMScsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdKTsKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCB2YWx1ZS52YWx1ZSk7CiAgICB9KTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgdHJlZURhdGEsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICBtdWx0aXBsZQogICAgdHJlZS1kZWZhdWx0LWV4cGFuZC1hbGwKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdmFsdWU6IHZhbCwgdGl0bGUgfSI+CiAgICAgIDxiIHYtaWY9InZhbCA9PT0gJ3BhcmVudCAxLTEnIiBzdHlsZT0iY29sb3I6ICMwOGMiPnt7IHZhbCB9fTwvYj4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyB0aXRsZSB9fTwvdGVtcGxhdGU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmVlLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKFtdKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gcmVmKFt7CiAgICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAgICB2YWx1ZTogJ3BhcmVudCAxJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTAnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgdGl0bGU6ICdteSBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAneW91ciBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjInLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0xJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICB9XSwKICAgIH1dKTsKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCB2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[u(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"",multiple:"","tree-default-expand-all":"","tree-data":a.treeData},{title:e(({value:c,title:C})=>[c==="parent 1-1"?(l(),h("b",P,Z(c),1)):(l(),h(y,{key:1},[t(Z(C),1)],64))]),_:1},8,["value","tree-data"])]),htmlCode:e(()=>[U]),jsVersionHtml:e(()=>[j]),_:1},8,["jsfiddle"])}var O=m(D,[["render",E]]);const z=G.SHOW_PARENT,_=[{title:"Node1",value:"0-0",children:[{title:"Child Node1",value:"0-0-0"}]},{title:"Node2",value:"0-1",children:[{title:"Child Node3",value:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1"},{title:"Child Node5",value:"0-1-2"}]}],q=b({setup(){const a=d(["0-0-0"]);return w(a,()=>{console.log(a.value)}),{value:a,treeData:_,SHOW_PARENT:z}}}),Q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-checkable"),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},":show-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("SHOW_PARENT"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TreeSelect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token constant"},"SHOW_PARENT"),t(),n("span",{class:"token operator"},"="),t(" TreeSelect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" treeData"),n("span",{class:"token operator"},":"),t(" TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Node1'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
    children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Node2'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),t(`

    children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node3'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node4'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node5'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-checkable"),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},":show-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("SHOW_PARENT"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TreeSelect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token constant"},"SHOW_PARENT"),t(),n("span",{class:"token operator"},"="),t(" TreeSelect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Node1'"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
  children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node1'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Node2'"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),t(`
  children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node3'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),t(`
    disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node4'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Node5'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function $(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"Multiple and checkable.",cn:"\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Multiple and checkable.</p>
`,order:3,title:{"zh-CN":"\u53EF\u52FE\u9009","en-US":"Checkable"},relativePath:"components/tree-select/demo/checkable.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogICAgdHJlZS1jaGVja2FibGUKICAgIGFsbG93LWNsZWFyCiAgICA6c2hvdy1jaGVja2VkLXN0cmF0ZWd5PSJTSE9XX1BBUkVOVCIKICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFRyZWVTZWxlY3RQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgVHJlZVNlbGVjdCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3QgU0hPV19QQVJFTlQgPSBUcmVlU2VsZWN0LlNIT1dfUEFSRU5UOwoKY29uc3QgdHJlZURhdGE6IFRyZWVTZWxlY3RQcm9wc1sndHJlZURhdGEnXSA9IFsKICB7CiAgICB0aXRsZTogJ05vZGUxJywKICAgIHZhbHVlOiAnMC0wJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB0aXRsZTogJ0NoaWxkIE5vZGUxJywKICAgICAgICB2YWx1ZTogJzAtMC0wJywKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICB0aXRsZTogJ05vZGUyJywKICAgIHZhbHVlOiAnMC0xJywKCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdGl0bGU6ICdDaGlsZCBOb2RlMycsCiAgICAgICAgdmFsdWU6ICcwLTEtMCcsCiAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB0aXRsZTogJ0NoaWxkIE5vZGU0JywKICAgICAgICB2YWx1ZTogJzAtMS0xJywKICAgICAgfSwKICAgICAgewogICAgICAgIHRpdGxlOiAnQ2hpbGQgTm9kZTUnLAogICAgICAgIHZhbHVlOiAnMC0xLTInLAogICAgICB9LAogICAgXSwKICB9LApdOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnXSk7CgogICAgd2F0Y2godmFsdWUsICgpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsdWUudmFsdWUpOwogICAgfSk7CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgICBTSE9XX1BBUkVOVCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogICAgdHJlZS1jaGVja2FibGUKICAgIGFsbG93LWNsZWFyCiAgICA6c2hvdy1jaGVja2VkLXN0cmF0ZWd5PSJTSE9XX1BBUkVOVCIKICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IFRyZWVTZWxlY3QgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IFNIT1dfUEFSRU5UID0gVHJlZVNlbGVjdC5TSE9XX1BBUkVOVDsKY29uc3QgdHJlZURhdGEgPSBbewogIHRpdGxlOiAnTm9kZTEnLAogIHZhbHVlOiAnMC0wJywKICBjaGlsZHJlbjogW3sKICAgIHRpdGxlOiAnQ2hpbGQgTm9kZTEnLAogICAgdmFsdWU6ICcwLTAtMCcsCiAgfV0sCn0sIHsKICB0aXRsZTogJ05vZGUyJywKICB2YWx1ZTogJzAtMScsCiAgY2hpbGRyZW46IFt7CiAgICB0aXRsZTogJ0NoaWxkIE5vZGUzJywKICAgIHZhbHVlOiAnMC0xLTAnLAogICAgZGlzYWJsZWQ6IHRydWUsCiAgfSwgewogICAgdGl0bGU6ICdDaGlsZCBOb2RlNCcsCiAgICB2YWx1ZTogJzAtMS0xJywKICB9LCB7CiAgICB0aXRsZTogJ0NoaWxkIE5vZGU1JywKICAgIHZhbHVlOiAnMC0xLTInLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKFsnMC0wLTAnXSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICB0cmVlRGF0YSwKICAgICAgU0hPV19QQVJFTlQsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[u(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),style:{width:"100%"},"tree-data":a.treeData,"tree-checkable":"","allow-clear":"","show-checked-strategy":a.SHOW_PARENT,placeholder:"Please select"},null,8,["value","tree-data","show-checked-strategy"])]),htmlCode:e(()=>[Q]),jsVersionHtml:e(()=>[M]),_:1},8,["jsfiddle"])}var nn=m(q,[["render",$]]);const tn=b({components:{IconBytedSmilingFace:T},setup(){const a=d(),s=d([]),i=d([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]);return w(a,()=>{console.log("select",a.value)}),{value:a,value1:s,treeData:i}}}),an=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"show-search"),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSmilingFace")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"show-search"),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},"multiple"),t(`
      `),n("span",{class:"token attr-name"},"show-arrow"),t(`
      `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSmilingFace")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"show-search"),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSmilingFace")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"show-search"),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},"multiple"),t(`
      `),n("span",{class:"token attr-name"},"show-arrow"),t(`
      `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSmilingFace")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function en(a,s,i,A,g,I){const p=o("IconBytedSmilingFace"),k=o("a-tree-select"),c=o("a-space"),C=o("demo-box");return l(),v(C,{jsfiddle:{us:"The most basic usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The most basic usage.</p>
`,order:12,debug:!0,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},relativePath:"components/tree-select/demo/suffix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS10cmVlLXNlbGVjdAogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgc2hvdy1zZWFyY2gKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgICBhbGxvdy1jbGVhcgogICAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICAgID4KICAgICAgPHRlbXBsYXRlICNzdWZmaXhJY29uPjxJY29uQnl0ZWRTbWlsaW5nRmFjZSA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICA8L2EtdHJlZS1zZWxlY3Q+CgogICAgPGEtdHJlZS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBzaG93LXNlYXJjaAogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIDpkcm9wZG93bi1zdHlsZT0ieyBtYXhIZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93OiAnYXV0bycgfSIKICAgICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICAgIGFsbG93LWNsZWFyCiAgICAgIG11bHRpcGxlCiAgICAgIHNob3ctYXJyb3cKICAgICAgdHJlZS1kZWZhdWx0LWV4cGFuZC1hbGwKICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj48SWNvbkJ5dGVkU21pbGluZ0ZhY2UgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXRyZWUtc2VsZWN0PgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVHJlZVNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkU21pbGluZ0ZhY2UgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtc21pbGluZy1mYWNlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkU21pbGluZ0ZhY2UsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmPHN0cmluZz4oKTsKICAgIGNvbnN0IHZhbHVlMSA9IHJlZjxzdHJpbmdbXT4oW10pOwogICAgY29uc3QgdHJlZURhdGEgPSByZWY8VHJlZVNlbGVjdFByb3BzWyd0cmVlRGF0YSddPihbCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTAnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTAnLAogICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRpdGxlOiAnbXkgbGVhZicsCiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlYWYxJywKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRpdGxlOiAneW91ciBsZWFmJywKICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVhZjInLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgdmFsdWUudmFsdWUpOwogICAgfSk7CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHZhbHVlMSwKICAgICAgdHJlZURhdGEsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS10cmVlLXNlbGVjdAogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgc2hvdy1zZWFyY2gKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgICBhbGxvdy1jbGVhcgogICAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICAgID4KICAgICAgPHRlbXBsYXRlICNzdWZmaXhJY29uPjxJY29uQnl0ZWRTbWlsaW5nRmFjZSA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICA8L2EtdHJlZS1zZWxlY3Q+CgogICAgPGEtdHJlZS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBzaG93LXNlYXJjaAogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIDpkcm9wZG93bi1zdHlsZT0ieyBtYXhIZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93OiAnYXV0bycgfSIKICAgICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICAgIGFsbG93LWNsZWFyCiAgICAgIG11bHRpcGxlCiAgICAgIHNob3ctYXJyb3cKICAgICAgdHJlZS1kZWZhdWx0LWV4cGFuZC1hbGwKICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj48SWNvbkJ5dGVkU21pbGluZ0ZhY2UgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXRyZWUtc2VsZWN0PgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZFNtaWxpbmdGYWNlIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXNtaWxpbmctZmFjZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkU21pbGluZ0ZhY2UsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZigpOwogICAgY29uc3QgdmFsdWUxID0gcmVmKFtdKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gcmVmKFt7CiAgICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAgICB2YWx1ZTogJ3BhcmVudCAxJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTAnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgdGl0bGU6ICdteSBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAneW91ciBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjInLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0xJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICB9XSwKICAgIH1dKTsKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QnLCB2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICB2YWx1ZTEsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[u(c,{direction:"vertical",style:{width:"100%"}},{default:e(()=>[u(k,{value:a.value,"onUpdate:value":s[0]||(s[0]=r=>a.value=r),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":"","tree-data":a.treeData},{suffixIcon:e(()=>[u(p,{colors:["currentColor"]})]),_:1},8,["value","tree-data"]),u(k,{value:a.value1,"onUpdate:value":s[1]||(s[1]=r=>a.value1=r),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"",multiple:"","show-arrow":"","tree-default-expand-all":"","tree-data":a.treeData},{suffixIcon:e(()=>[u(p,{colors:["currentColor"]})]),_:1},8,["value","tree-data"])]),_:1})]),htmlCode:e(()=>[an]),jsVersionHtml:e(()=>[sn]),_:1},8,["jsfiddle"])}var on=m(tn,[["render",en]]);const cn=b({setup(){const a=d(),s=d([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]);w(a,()=>{console.log(a.value)});const i=(g,I=!1)=>{const p=Math.random().toString(36).substring(2,6);return{id:p,pId:g,value:p,title:I?"Tree Node":"Expand to load",isLeaf:I}};return{value:a,treeData:s,genTreeNode:i,onLoadData:g=>new Promise(I=>{const{id:p}=g.dataRef;setTimeout(()=>{s.value=s.value.concat([i(p,!1),i(p,!0)]),console.log(s.value),I(!0)},300)})}}}),pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-data-simple-mode"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":load-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onLoadData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" pId"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Expand to load'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(" pId"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Expand to load'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(" pId"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tree Node'"),n("span",{class:"token punctuation"},","),t(" isLeaf"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" genTreeNode "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("parentId"),n("span",{class:"token operator"},":"),t(" number"),n("span",{class:"token punctuation"},","),t(" isLeaf "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("number"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" random "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(" random"),n("span",{class:"token punctuation"},","),t(`
        pId`),n("span",{class:"token operator"},":"),t(" parentId"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(" random"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(" isLeaf "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'Tree Node'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),t(`
        isLeaf`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" onLoadData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("treeNode"),n("span",{class:"token operator"},":"),t(" TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" id "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" treeNode"),n("span",{class:"token punctuation"},"."),t("dataRef"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          treeData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" treeData"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"genTreeNode"),n("span",{class:"token punctuation"},"("),t("id"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"genTreeNode"),n("span",{class:"token punctuation"},"("),t("id"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("treeData"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      genTreeNode`),n("span",{class:"token punctuation"},","),t(`
      onLoadData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-data-simple-mode"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":load-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onLoadData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      pId`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      pId`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      pId`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tree Node'"),n("span",{class:"token punctuation"},","),t(`
      isLeaf`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"genTreeNode"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("parentId"),n("span",{class:"token punctuation"},","),t(" isLeaf "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" random "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(" random"),n("span",{class:"token punctuation"},","),t(`
        pId`),n("span",{class:"token operator"},":"),t(" parentId"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(" random"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(" isLeaf "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'Tree Node'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),t(`
        isLeaf`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onLoadData"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"treeNode"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(`
          id`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" treeNode"),n("span",{class:"token punctuation"},"."),t("dataRef"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          treeData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" treeData"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"genTreeNode"),n("span",{class:"token punctuation"},"("),t("id"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"genTreeNode"),n("span",{class:"token punctuation"},"("),t("id"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("treeData"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      genTreeNode`),n("span",{class:"token punctuation"},","),t(`
      onLoadData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function un(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"Asynchronous loading tree node.",cn:"\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Asynchronous loading tree node.</p>
`,order:5,title:{"zh-CN":"\u5F02\u6B65\u52A0\u8F7D","en-US":"Asynchronous loading"},relativePath:"components/tree-select/demo/async.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHRyZWUtZGF0YS1zaW1wbGUtbW9kZQogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOmRyb3Bkb3duLXN0eWxlPSJ7IG1heEhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJyB9IgogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIDpsb2FkLWRhdGE9Im9uTG9hZERhdGEiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVHJlZVNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmPHN0cmluZz4oKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gcmVmPFRyZWVTZWxlY3RQcm9wc1sndHJlZURhdGEnXT4oWwogICAgICB7IGlkOiAxLCBwSWQ6IDAsIHZhbHVlOiAnMScsIHRpdGxlOiAnRXhwYW5kIHRvIGxvYWQnIH0sCiAgICAgIHsgaWQ6IDIsIHBJZDogMCwgdmFsdWU6ICcyJywgdGl0bGU6ICdFeHBhbmQgdG8gbG9hZCcgfSwKICAgICAgeyBpZDogMywgcElkOiAwLCB2YWx1ZTogJzMnLCB0aXRsZTogJ1RyZWUgTm9kZScsIGlzTGVhZjogdHJ1ZSB9LAogICAgXSk7CgogICAgd2F0Y2godmFsdWUsICgpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsdWUudmFsdWUpOwogICAgfSk7CgogICAgY29uc3QgZ2VuVHJlZU5vZGUgPSAocGFyZW50SWQ6IG51bWJlciwgaXNMZWFmID0gZmFsc2UpOiBUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ11bbnVtYmVyXSA9PiB7CiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA2KTsKICAgICAgcmV0dXJuIHsKICAgICAgICBpZDogcmFuZG9tLAogICAgICAgIHBJZDogcGFyZW50SWQsCiAgICAgICAgdmFsdWU6IHJhbmRvbSwKICAgICAgICB0aXRsZTogaXNMZWFmID8gJ1RyZWUgTm9kZScgOiAnRXhwYW5kIHRvIGxvYWQnLAogICAgICAgIGlzTGVhZiwKICAgICAgfTsKICAgIH07CiAgICBjb25zdCBvbkxvYWREYXRhID0gKHRyZWVOb2RlOiBUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ11bbnVtYmVyXSkgPT4gewogICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsKICAgICAgICBjb25zdCB7IGlkIH0gPSB0cmVlTm9kZS5kYXRhUmVmOwogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgdHJlZURhdGEudmFsdWUgPSB0cmVlRGF0YS52YWx1ZS5jb25jYXQoW2dlblRyZWVOb2RlKGlkLCBmYWxzZSksIGdlblRyZWVOb2RlKGlkLCB0cnVlKV0pOwogICAgICAgICAgY29uc29sZS5sb2codHJlZURhdGEudmFsdWUpOwogICAgICAgICAgcmVzb2x2ZSh0cnVlKTsKICAgICAgICB9LCAzMDApOwogICAgICB9KTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgdHJlZURhdGEsCiAgICAgIGdlblRyZWVOb2RlLAogICAgICBvbkxvYWREYXRhLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHRyZWUtZGF0YS1zaW1wbGUtbW9kZQogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOmRyb3Bkb3duLXN0eWxlPSJ7IG1heEhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJyB9IgogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIDpsb2FkLWRhdGE9Im9uTG9hZERhdGEiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZihbewogICAgICBpZDogMSwKICAgICAgcElkOiAwLAogICAgICB2YWx1ZTogJzEnLAogICAgICB0aXRsZTogJ0V4cGFuZCB0byBsb2FkJywKICAgIH0sIHsKICAgICAgaWQ6IDIsCiAgICAgIHBJZDogMCwKICAgICAgdmFsdWU6ICcyJywKICAgICAgdGl0bGU6ICdFeHBhbmQgdG8gbG9hZCcsCiAgICB9LCB7CiAgICAgIGlkOiAzLAogICAgICBwSWQ6IDAsCiAgICAgIHZhbHVlOiAnMycsCiAgICAgIHRpdGxlOiAnVHJlZSBOb2RlJywKICAgICAgaXNMZWFmOiB0cnVlLAogICAgfV0pOwogICAgd2F0Y2godmFsdWUsICgpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsdWUudmFsdWUpOwogICAgfSk7CgogICAgY29uc3QgZ2VuVHJlZU5vZGUgPSAocGFyZW50SWQsIGlzTGVhZiA9IGZhbHNlKSA9PiB7CiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA2KTsKICAgICAgcmV0dXJuIHsKICAgICAgICBpZDogcmFuZG9tLAogICAgICAgIHBJZDogcGFyZW50SWQsCiAgICAgICAgdmFsdWU6IHJhbmRvbSwKICAgICAgICB0aXRsZTogaXNMZWFmID8gJ1RyZWUgTm9kZScgOiAnRXhwYW5kIHRvIGxvYWQnLAogICAgICAgIGlzTGVhZiwKICAgICAgfTsKICAgIH07CgogICAgY29uc3Qgb25Mb2FkRGF0YSA9IHRyZWVOb2RlID0+IHsKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gewogICAgICAgIGNvbnN0IHsKICAgICAgICAgIGlkLAogICAgICAgIH0gPSB0cmVlTm9kZS5kYXRhUmVmOwogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgdHJlZURhdGEudmFsdWUgPSB0cmVlRGF0YS52YWx1ZS5jb25jYXQoW2dlblRyZWVOb2RlKGlkLCBmYWxzZSksIGdlblRyZWVOb2RlKGlkLCB0cnVlKV0pOwogICAgICAgICAgY29uc29sZS5sb2codHJlZURhdGEudmFsdWUpOwogICAgICAgICAgcmVzb2x2ZSh0cnVlKTsKICAgICAgICB9LCAzMDApOwogICAgICB9KTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgICBnZW5UcmVlTm9kZSwKICAgICAgb25Mb2FkRGF0YSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[u(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),"tree-data-simple-mode":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":a.treeData,placeholder:"Please select","load-data":a.onLoadData},null,8,["value","tree-data","load-data"])]),htmlCode:e(()=>[pn]),jsVersionHtml:e(()=>[ln]),_:1},8,["jsfiddle"])}var kn=m(cn,[["render",un]]);const dn=b({setup(){const a=d(),s=d([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]);return w(a,()=>{console.log(a.value)}),{searchValue:d(""),value:a,treeData:s}}}),rn={key:0,style:{color:"#08c"}},gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("searchValue")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchValue"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("sss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(fragment, i) in title\n            .toString()\n            .split(new RegExp(`(?<=${searchValue})|(?=${searchValue})`, "),n("span",{class:"token punctuation"},"'"),t("i"),n("span",{class:"token punctuation"},"'"),t("))"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(`
            `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fragment.toLowerCase() === searchValue.toLowerCase()"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            {{ fragment }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ fragment }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchValue`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("searchValue")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchValue"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("sss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(fragment, i) in title\n            .toString()\n            .split(new RegExp(`(?<=${searchValue})|(?=${searchValue})`, "),n("span",{class:"token punctuation"},"'"),t("i"),n("span",{class:"token punctuation"},"'"),t("))"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(`
            `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fragment.toLowerCase() === searchValue.toLowerCase()"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            {{ fragment }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ fragment }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchValue`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Cn(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"Search Value Hightlight",cn:"\u641C\u7D22\u503C\u9AD8\u4EAE",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u641C\u7D22\u503C\u9AD8\u4EAE</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Search Value Hightlight</p>
`,order:0,title:{"zh-CN":"\u9AD8\u4EAE","en-US":"Highlight"},relativePath:"components/tree-select/demo/highlight.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHYtbW9kZWw6c2VhcmNoVmFsdWU9InNlYXJjaFZhbHVlIgogICAgc2hvdy1zZWFyY2gKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIDpkcm9wZG93bi1zdHlsZT0ieyBtYXhIZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93OiAnYXV0bycgfSIKICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgYWxsb3ctY2xlYXIKICAgIHRyZWUtZGVmYXVsdC1leHBhbmQtYWxsCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+CiAgICA8dGVtcGxhdGUgI3RpdGxlPSJ7IHZhbHVlOiB2YWwsIHRpdGxlIH0iPgogICAgICA8YiB2LWlmPSJ2YWwgPT09ICdwYXJlbnQgMS0xJyIgc3R5bGU9ImNvbG9yOiAjMDhjIj5zc3M8L2I+CiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+CiAgICAgICAgPHRlbXBsYXRlCiAgICAgICAgICB2LWZvcj0iKGZyYWdtZW50LCBpKSBpbiB0aXRsZQogICAgICAgICAgICAudG9TdHJpbmcoKQogICAgICAgICAgICAuc3BsaXQobmV3IFJlZ0V4cChgKD88PSR7c2VhcmNoVmFsdWV9KXwoPz0ke3NlYXJjaFZhbHVlfSlgLCAnaScpKSIKICAgICAgICA+CiAgICAgICAgICA8c3BhbgogICAgICAgICAgICB2LWlmPSJmcmFnbWVudC50b0xvd2VyQ2FzZSgpID09PSBzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpIgogICAgICAgICAgICA6a2V5PSJpIgogICAgICAgICAgICBzdHlsZT0iY29sb3I6ICMwOGMiCiAgICAgICAgICA+CiAgICAgICAgICAgIHt7IGZyYWdtZW50IH19CiAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IGZyYWdtZW50IH19PC90ZW1wbGF0ZT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L3RlbXBsYXRlPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtdHJlZS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFRyZWVTZWxlY3RQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmPHN0cmluZz4oKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gcmVmPFRyZWVTZWxlY3RQcm9wc1sndHJlZURhdGEnXT4oWwogICAgICB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMScsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0wJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ215IGxlYWYnLAogICAgICAgICAgICAgICAgdmFsdWU6ICdsZWFmMScsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ3lvdXIgbGVhZicsCiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlYWYyJywKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0xJywKICAgICAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0xJywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogICAgd2F0Y2godmFsdWUsICgpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsdWUudmFsdWUpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBzZWFyY2hWYWx1ZTogcmVmKCcnKSwKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHYtbW9kZWw6c2VhcmNoVmFsdWU9InNlYXJjaFZhbHVlIgogICAgc2hvdy1zZWFyY2gKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIDpkcm9wZG93bi1zdHlsZT0ieyBtYXhIZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93OiAnYXV0bycgfSIKICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgYWxsb3ctY2xlYXIKICAgIHRyZWUtZGVmYXVsdC1leHBhbmQtYWxsCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+CiAgICA8dGVtcGxhdGUgI3RpdGxlPSJ7IHZhbHVlOiB2YWwsIHRpdGxlIH0iPgogICAgICA8YiB2LWlmPSJ2YWwgPT09ICdwYXJlbnQgMS0xJyIgc3R5bGU9ImNvbG9yOiAjMDhjIj5zc3M8L2I+CiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+CiAgICAgICAgPHRlbXBsYXRlCiAgICAgICAgICB2LWZvcj0iKGZyYWdtZW50LCBpKSBpbiB0aXRsZQogICAgICAgICAgICAudG9TdHJpbmcoKQogICAgICAgICAgICAuc3BsaXQobmV3IFJlZ0V4cChgKD88PSR7c2VhcmNoVmFsdWV9KXwoPz0ke3NlYXJjaFZhbHVlfSlgLCAnaScpKSIKICAgICAgICA+CiAgICAgICAgICA8c3BhbgogICAgICAgICAgICB2LWlmPSJmcmFnbWVudC50b0xvd2VyQ2FzZSgpID09PSBzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpIgogICAgICAgICAgICA6a2V5PSJpIgogICAgICAgICAgICBzdHlsZT0iY29sb3I6ICMwOGMiCiAgICAgICAgICA+CiAgICAgICAgICAgIHt7IGZyYWdtZW50IH19CiAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IGZyYWdtZW50IH19PC90ZW1wbGF0ZT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L3RlbXBsYXRlPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtdHJlZS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZigpOwogICAgY29uc3QgdHJlZURhdGEgPSByZWYoW3sKICAgICAgdGl0bGU6ICdwYXJlbnQgMScsCiAgICAgIHZhbHVlOiAncGFyZW50IDEnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTAnLAogICAgICAgIHZhbHVlOiAncGFyZW50IDEtMCcsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICB0aXRsZTogJ215IGxlYWYnLAogICAgICAgICAgdmFsdWU6ICdsZWFmMScsCiAgICAgICAgfSwgewogICAgICAgICAgdGl0bGU6ICd5b3VyIGxlYWYnLAogICAgICAgICAgdmFsdWU6ICdsZWFmMicsCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgIHZhbHVlOiAncGFyZW50IDEtMScsCiAgICAgIH1dLAogICAgfV0pOwogICAgd2F0Y2godmFsdWUsICgpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsdWUudmFsdWUpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBzZWFyY2hWYWx1ZTogcmVmKCcnKSwKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[u(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),searchValue:a.searchValue,"onUpdate:searchValue":s[1]||(s[1]=c=>a.searchValue=c),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":"","tree-data":a.treeData},{title:e(({value:c,title:C})=>[c==="parent 1-1"?(l(),h("b",rn,"sss")):(l(!0),h(y,{key:1},R(C.toString().split(new RegExp(`(?<=${a.searchValue})|(?=${a.searchValue})`,"i")),(r,f)=>(l(),h(y,null,[r.toLowerCase()===a.searchValue.toLowerCase()?(l(),h("span",{key:f,style:{color:"#08c"}},Z(r),1)):(l(),h(y,{key:1},[t(Z(r),1)],64))],64))),256))]),_:1},8,["value","searchValue","tree-data"])]),htmlCode:e(()=>[gn]),jsVersionHtml:e(()=>[In]),_:1},8,["jsfiddle"])}var An=m(dn,[["render",Cn]]);const hn=b({setup(){const a=d(!0),s=d(!1),i=d(),A=d([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]);return w(i,()=>{console.log(i.value)}),{treeLine:a,showLeafIcon:s,value:i,treeData:A}}}),mn={key:0,style:{color:"#08c"}},bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-switch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLeafIcon"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("!treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLeafIcon"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLeafIcon"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-switch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":tree-line"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine && { showLeafIcon }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("sss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeLine "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" showLeafIcon "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      treeLine`),n("span",{class:"token punctuation"},","),t(`
      showLeafIcon`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-switch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLeafIcon"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("!treeLine"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLeafIcon"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLeafIcon"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-switch")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":tree-line"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeLine && { showLeafIcon }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("sss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeLine "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" showLeafIcon "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      treeLine`),n("span",{class:"token punctuation"},","),t(`
      showLeafIcon`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Zn(a,s,i,A,g,I){const p=o("a-switch"),k=o("a-tree-select"),c=o("a-space"),C=o("demo-box");return l(),v(C,{jsfiddle:{us:"Use `treeLine` to show the line style.",cn:"\u901A\u8FC7 `treeLine` \u914D\u7F6E\u7EBF\u6027\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>treeLine</code> \u914D\u7F6E\u7EBF\u6027\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>treeLine</code> to show the line style.</p>
`,order:6,title:{"zh-CN":"\u7EBF\u6027\u6837\u5F0F","en-US":"Show Tree Line"},relativePath:"components/tree-select/demo/tree-line.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0idHJlZUxpbmUiCiAgICAgIGNoZWNrZWQtY2hpbGRyZW49InRyZWVMaW5lIgogICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSJ0cmVlTGluZSIKICAgID48L2Etc3dpdGNoPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0ic2hvd0xlYWZJY29uIgogICAgICA6ZGlzYWJsZWQ9IiF0cmVlTGluZSIKICAgICAgY2hlY2tlZC1jaGlsZHJlbj0ic2hvd0xlYWZJY29uIgogICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSJzaG93TGVhZkljb24iCiAgICA+PC9hLXN3aXRjaD4KICAgIDxhLXRyZWUtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBzdHlsZT0id2lkdGg6IDMwMHB4IgogICAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgICAgOnRyZWUtbGluZT0idHJlZUxpbmUgJiYgeyBzaG93TGVhZkljb24gfSIKICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdmFsdWU6IHZhbCwgdGl0bGUgfSI+CiAgICAgICAgPGIgdi1pZj0idmFsID09PSAncGFyZW50IDEtMSciIHN0eWxlPSJjb2xvcjogIzA4YyI+c3NzPC9iPgogICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3sgdGl0bGUgfX08L3RlbXBsYXRlPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXRyZWUtc2VsZWN0PgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVHJlZVNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdHJlZUxpbmUgPSByZWYodHJ1ZSk7CiAgICBjb25zdCBzaG93TGVhZkljb24gPSByZWYoZmFsc2UpOwogICAgY29uc3QgdmFsdWUgPSByZWY8c3RyaW5nPigpOwogICAgY29uc3QgdHJlZURhdGEgPSByZWY8VHJlZVNlbGVjdFByb3BzWyd0cmVlRGF0YSddPihbCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAgICB2YWx1ZTogJ3BhcmVudCAxJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTAnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTAnLAogICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRpdGxlOiAnbXkgbGVhZicsCiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlYWYxJywKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRpdGxlOiAneW91ciBsZWFmJywKICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVhZjInLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHRyZWVMaW5lLAogICAgICBzaG93TGVhZkljb24sCiAgICAgIHZhbHVlLAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0idHJlZUxpbmUiCiAgICAgIGNoZWNrZWQtY2hpbGRyZW49InRyZWVMaW5lIgogICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSJ0cmVlTGluZSIKICAgID48L2Etc3dpdGNoPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0ic2hvd0xlYWZJY29uIgogICAgICA6ZGlzYWJsZWQ9IiF0cmVlTGluZSIKICAgICAgY2hlY2tlZC1jaGlsZHJlbj0ic2hvd0xlYWZJY29uIgogICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSJzaG93TGVhZkljb24iCiAgICA+PC9hLXN3aXRjaD4KICAgIDxhLXRyZWUtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBzdHlsZT0id2lkdGg6IDMwMHB4IgogICAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgICAgOnRyZWUtbGluZT0idHJlZUxpbmUgJiYgeyBzaG93TGVhZkljb24gfSIKICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdmFsdWU6IHZhbCwgdGl0bGUgfSI+CiAgICAgICAgPGIgdi1pZj0idmFsID09PSAncGFyZW50IDEtMSciIHN0eWxlPSJjb2xvcjogIzA4YyI+c3NzPC9iPgogICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3sgdGl0bGUgfX08L3RlbXBsYXRlPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXRyZWUtc2VsZWN0PgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRyZWVMaW5lID0gcmVmKHRydWUpOwogICAgY29uc3Qgc2hvd0xlYWZJY29uID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZihbewogICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAgdmFsdWU6ICdwYXJlbnQgMScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0wJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIHRpdGxlOiAnbXkgbGVhZicsCiAgICAgICAgICB2YWx1ZTogJ2xlYWYxJywKICAgICAgICB9LCB7CiAgICAgICAgICB0aXRsZTogJ3lvdXIgbGVhZicsCiAgICAgICAgICB2YWx1ZTogJ2xlYWYyJywKICAgICAgICB9XSwKICAgICAgfSwgewogICAgICAgIHRpdGxlOiAncGFyZW50IDEtMScsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0xJywKICAgICAgfV0sCiAgICB9XSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHRyZWVMaW5lLAogICAgICBzaG93TGVhZkljb24sCiAgICAgIHZhbHVlLAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[u(c,{direction:"vertical"},{default:e(()=>[u(p,{checked:a.treeLine,"onUpdate:checked":s[0]||(s[0]=r=>a.treeLine=r),"checked-children":"treeLine","un-checked-children":"treeLine"},null,8,["checked"]),u(p,{checked:a.showLeafIcon,"onUpdate:checked":s[1]||(s[1]=r=>a.showLeafIcon=r),disabled:!a.treeLine,"checked-children":"showLeafIcon","un-checked-children":"showLeafIcon"},null,8,["checked","disabled"]),u(k,{value:a.value,"onUpdate:value":s[2]||(s[2]=r=>a.value=r),style:{width:"300px"},placeholder:"Please select","tree-line":a.treeLine&&{showLeafIcon:a.showLeafIcon},"tree-data":a.treeData},{title:e(({value:r,title:f})=>[r==="parent 1-1"?(l(),h("b",mn,"sss")):(l(),h(y,{key:1},[t(Z(f),1)],64))]),_:1},8,["value","tree-line","tree-data"])]),_:1})]),htmlCode:e(()=>[bn]),jsVersionHtml:e(()=>[vn]),_:1},8,["jsfiddle"])}var wn=m(hn,[["render",Zn]]);const yn=G.SHOW_PARENT;function V(a="0",s=3){const i=[];for(let A=0;A<10;A+=1){const g=`${a}-${A}`,I={title:g,value:g};s>0&&(I.children=V(g,s-1)),i.push(I)}return i}const fn=b({setup(){const a=d(["0-0-0","0-0-1"]);return w(a,()=>{console.log("checkedKeys",a)}),{treeData:V(),checkedKeys:a,SHOW_PARENT:yn}}}),Wn={key:0,style:{color:"#1890ff"}},Gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checkedKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-checkable"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":show-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("SHOW_PARENT"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("233"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ title, value }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value === "),n("span",{class:"token punctuation"},"'"),t("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TreeSelect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token constant"},"SHOW_PARENT"),t(),n("span",{class:"token operator"},"="),t(" TreeSelect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),t("path "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),t(" level "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" list"),n("span",{class:"token operator"},":"),t(" TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeNode"),n("span",{class:"token operator"},":"),t(" TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("number"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(" value"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("level "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      treeNode`),n("span",{class:"token punctuation"},"."),t("children "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(" level "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("treeNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" list"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" checkedKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("checkedKeys"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),t(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      treeData`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      checkedKeys`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checkedKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-checkable"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":show-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("SHOW_PARENT"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("233"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ title, value }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value === "),n("span",{class:"token punctuation"},"'"),t("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TreeSelect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token constant"},"SHOW_PARENT"),t(),n("span",{class:"token operator"},"="),t(" TreeSelect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),t("path "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),t(" level "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeNode "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(" value"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("level "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      treeNode`),n("span",{class:"token punctuation"},"."),t("children "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(" level "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("treeNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"return"),t(" list"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" checkedKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("checkedKeys"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),t(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      treeData`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      checkedKeys`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token constant"},"SHOW_PARENT"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Vn(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"Use virtual list through `height` prop.",cn:"\u4F7F\u7528 `height` \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u5728 tree select\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>height</code> \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u5728 tree select\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use virtual list through <code>height</code> prop.</p>
`,order:9,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual scroll"},relativePath:"components/tree-select/demo/virtual-scroll.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJjaGVja2VkS2V5cyIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIDptYXgtdGFnLWNvdW50PSIzIgogICAgdHJlZS1jaGVja2FibGUKICAgIHRyZWUtZGVmYXVsdC1leHBhbmQtYWxsCiAgICA6c2hvdy1jaGVja2VkLXN0cmF0ZWd5PSJTSE9XX1BBUkVOVCIKICAgIDpoZWlnaHQ9IjIzMyIKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdGl0bGUsIHZhbHVlIH0iPgogICAgICA8c3BhbiB2LWlmPSJ2YWx1ZSA9PT0gJzAtMC0xLTAnIiBzdHlsZT0iY29sb3I6ICMxODkwZmYiPnt7IHRpdGxlIH19PC9zcGFuPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBUcmVlU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IFRyZWVTZWxlY3QgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmNvbnN0IFNIT1dfUEFSRU5UID0gVHJlZVNlbGVjdC5TSE9XX1BBUkVOVDsKCmZ1bmN0aW9uIGRpZyhwYXRoID0gJzAnLCBsZXZlbCA9IDMpIHsKICBjb25zdCBsaXN0OiBUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ10gPSBbXTsKICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHsKICAgIGNvbnN0IHZhbHVlID0gYCR7cGF0aH0tJHtpfWA7CiAgICBjb25zdCB0cmVlTm9kZTogVHJlZVNlbGVjdFByb3BzWyd0cmVlRGF0YSddW251bWJlcl0gPSB7CiAgICAgIHRpdGxlOiB2YWx1ZSwKICAgICAgdmFsdWUsCiAgICB9OwoKICAgIGlmIChsZXZlbCA+IDApIHsKICAgICAgdHJlZU5vZGUuY2hpbGRyZW4gPSBkaWcodmFsdWUsIGxldmVsIC0gMSk7CiAgICB9CgogICAgbGlzdC5wdXNoKHRyZWVOb2RlKTsKICB9CiAgcmV0dXJuIGxpc3Q7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBjaGVja2VkS2V5cyA9IHJlZjxzdHJpbmdbXT4oWycwLTAtMCcsICcwLTAtMSddKTsKICAgIHdhdGNoKGNoZWNrZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTsKICAgIH0pOwoKICAgIHJldHVybiB7CiAgICAgIHRyZWVEYXRhOiBkaWcoKSwKICAgICAgY2hlY2tlZEtleXMsCiAgICAgIFNIT1dfUEFSRU5ULAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJjaGVja2VkS2V5cyIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIDptYXgtdGFnLWNvdW50PSIzIgogICAgdHJlZS1jaGVja2FibGUKICAgIHRyZWUtZGVmYXVsdC1leHBhbmQtYWxsCiAgICA6c2hvdy1jaGVja2VkLXN0cmF0ZWd5PSJTSE9XX1BBUkVOVCIKICAgIDpoZWlnaHQ9IjIzMyIKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdGl0bGUsIHZhbHVlIH0iPgogICAgICA8c3BhbiB2LWlmPSJ2YWx1ZSA9PT0gJzAtMC0xLTAnIiBzdHlsZT0iY29sb3I6ICMxODkwZmYiPnt7IHRpdGxlIH19PC9zcGFuPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBUcmVlU2VsZWN0IH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpjb25zdCBTSE9XX1BBUkVOVCA9IFRyZWVTZWxlY3QuU0hPV19QQVJFTlQ7CgpmdW5jdGlvbiBkaWcocGF0aCA9ICcwJywgbGV2ZWwgPSAzKSB7CiAgY29uc3QgbGlzdCA9IFtdOwoKICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHsKICAgIGNvbnN0IHZhbHVlID0gYCR7cGF0aH0tJHtpfWA7CiAgICBjb25zdCB0cmVlTm9kZSA9IHsKICAgICAgdGl0bGU6IHZhbHVlLAogICAgICB2YWx1ZSwKICAgIH07CgogICAgaWYgKGxldmVsID4gMCkgewogICAgICB0cmVlTm9kZS5jaGlsZHJlbiA9IGRpZyh2YWx1ZSwgbGV2ZWwgLSAxKTsKICAgIH0KCiAgICBsaXN0LnB1c2godHJlZU5vZGUpOwogIH0KCiAgcmV0dXJuIGxpc3Q7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBjaGVja2VkS2V5cyA9IHJlZihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgd2F0Y2goY2hlY2tlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICB0cmVlRGF0YTogZGlnKCksCiAgICAgIGNoZWNrZWRLZXlzLAogICAgICBTSE9XX1BBUkVOVCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[u(p,{value:a.checkedKeys,"onUpdate:value":s[0]||(s[0]=c=>a.checkedKeys=c),style:{width:"100%"},"max-tag-count":3,"tree-checkable":"","tree-default-expand-all":"","show-checked-strategy":a.SHOW_PARENT,height:233,"tree-data":a.treeData},{title:e(({title:c,value:C})=>[C==="0-0-1-0"?(l(),h("span",Wn,Z(c),1)):(l(),h(y,{key:1},[t(Z(c),1)],64))]),_:1},8,["value","show-checked-strategy","tree-data"])]),htmlCode:e(()=>[Gn]),jsVersionHtml:e(()=>[Hn]),_:1},8,["jsfiddle"])}var Bn=m(fn,[["render",Vn]]);const Sn=G.SHOW_ALL,Nn=b({setup(){const a=d(["parent 1","parent 1-0","leaf1"]),s=d([{title:"parent 1",value:"parent 1",color:"pink",children:[{title:"parent 1-0",value:"parent 1-0",color:"orange",children:[{title:"my leaf",value:"leaf1",color:"green"},{title:"your leaf",value:"leaf2",color:"cyan"}]},{title:"parent 1-1",value:"parent 1-1",color:"blue"}]}]);return w(a,()=>{console.log("select",a.value)}),{value:a,treeData:s,SHOW_ALL:Sn}}}),xn={key:0,style:{color:"#08c"}},Rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},":show-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("SHOW_ALL"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#tagRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ label, closable, onClose, option }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},":closable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closable"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option.color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 3px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ label }}`),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ val }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TreeSelect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token constant"},"SHOW_ALL"),t(),n("span",{class:"token operator"},"="),t(" TreeSelect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOW_ALL"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pink'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'orange'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
                color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
                color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'cyan'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blue'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token constant"},"SHOW_ALL"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},":show-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("SHOW_ALL"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#tagRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ label, closable, onClose, option }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},":closable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closable"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option.color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 3px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"@close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ label }}`),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("b")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val === "),n("span",{class:"token punctuation"},"'"),t("parent 1-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #08c")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ val }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("b")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TreeSelect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token constant"},"SHOW_ALL"),t(),n("span",{class:"token operator"},"="),t(" TreeSelect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOW_ALL"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pink'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'orange'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
          color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
          color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'cyan'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        color`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blue'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token constant"},"SHOW_ALL"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Yn(a,s,i,A,g,I){const p=o("a-tag"),k=o("a-tree-select"),c=o("demo-box");return l(),v(c,{jsfiddle:{us:"Allows for custom rendering of tags.",cn:"\u5141\u8BB8\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E\u7684\u6837\u5F0F\u3002\u4EC5\u652F\u6301\u591A\u9009\u6A21\u5F0F\uFF0C\u5355\u9009\u53EF\u76F4\u63A5\u4F7F\u7528 `title` \u63D2\u69FD",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5141\u8BB8\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E\u7684\u6837\u5F0F\u3002\u4EC5\u652F\u6301\u591A\u9009\u6A21\u5F0F\uFF0C\u5355\u9009\u53EF\u76F4\u63A5\u4F7F\u7528 <code>title</code> \u63D2\u69FD</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Allows for custom rendering of tags.</p>
`,order:24,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E","en-US":"Custom Tag Render"},relativePath:"components/tree-select/demo/custom-tag-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICBtdWx0aXBsZQogICAgOnNob3ctY2hlY2tlZC1zdHJhdGVneT0iU0hPV19BTEwiCiAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgPgogICAgPHRlbXBsYXRlICN0YWdSZW5kZXI9InsgbGFiZWwsIGNsb3NhYmxlLCBvbkNsb3NlLCBvcHRpb24gfSI+CiAgICAgIDxhLXRhZyA6Y2xvc2FibGU9ImNsb3NhYmxlIiA6Y29sb3I9Im9wdGlvbi5jb2xvciIgc3R5bGU9Im1hcmdpbi1yaWdodDogM3B4IiBAY2xvc2U9Im9uQ2xvc2UiPgogICAgICAgIHt7IGxhYmVsIH19Jm5ic3A7Jm5ic3A7CiAgICAgIDwvYS10YWc+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyB2YWx1ZTogdmFsLCB0aXRsZSB9Ij4KICAgICAgPGIgdi1pZj0idmFsID09PSAncGFyZW50IDEtMSciIHN0eWxlPSJjb2xvcjogIzA4YyI+e3sgdmFsIH19PC9iPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBUcmVlU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IFRyZWVTZWxlY3QgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IFNIT1dfQUxMID0gVHJlZVNlbGVjdC5TSE9XX0FMTDsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmPHN0cmluZ1tdPihbJ3BhcmVudCAxJywgJ3BhcmVudCAxLTAnLCAnbGVhZjEnXSk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZjxUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ10+KFsKICAgICAgewogICAgICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAgICAgIHZhbHVlOiAncGFyZW50IDEnLAogICAgICAgIGNvbG9yOiAncGluaycsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0wJywKICAgICAgICAgICAgY29sb3I6ICdvcmFuZ2UnLAogICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRpdGxlOiAnbXkgbGVhZicsCiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlYWYxJywKICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgdGl0bGU6ICd5b3VyIGxlYWYnLAogICAgICAgICAgICAgICAgdmFsdWU6ICdsZWFmMicsCiAgICAgICAgICAgICAgICBjb2xvcjogJ2N5YW4nLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgICBjb2xvcjogJ2JsdWUnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgdmFsdWUudmFsdWUpOwogICAgfSk7CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHRyZWVEYXRhLAogICAgICBTSE9XX0FMTCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICBtdWx0aXBsZQogICAgOnNob3ctY2hlY2tlZC1zdHJhdGVneT0iU0hPV19BTEwiCiAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgPgogICAgPHRlbXBsYXRlICN0YWdSZW5kZXI9InsgbGFiZWwsIGNsb3NhYmxlLCBvbkNsb3NlLCBvcHRpb24gfSI+CiAgICAgIDxhLXRhZyA6Y2xvc2FibGU9ImNsb3NhYmxlIiA6Y29sb3I9Im9wdGlvbi5jb2xvciIgc3R5bGU9Im1hcmdpbi1yaWdodDogM3B4IiBAY2xvc2U9Im9uQ2xvc2UiPgogICAgICAgIHt7IGxhYmVsIH19Jm5ic3A7Jm5ic3A7CiAgICAgIDwvYS10YWc+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyB2YWx1ZTogdmFsLCB0aXRsZSB9Ij4KICAgICAgPGIgdi1pZj0idmFsID09PSAncGFyZW50IDEtMSciIHN0eWxlPSJjb2xvcjogIzA4YyI+e3sgdmFsIH19PC9iPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwppbXBvcnQgeyBUcmVlU2VsZWN0IH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBTSE9XX0FMTCA9IFRyZWVTZWxlY3QuU0hPV19BTEw7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZihbJ3BhcmVudCAxJywgJ3BhcmVudCAxLTAnLCAnbGVhZjEnXSk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZihbewogICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAgdmFsdWU6ICdwYXJlbnQgMScsCiAgICAgIGNvbG9yOiAncGluaycsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0wJywKICAgICAgICBjb2xvcjogJ29yYW5nZScsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICB0aXRsZTogJ215IGxlYWYnLAogICAgICAgICAgdmFsdWU6ICdsZWFmMScsCiAgICAgICAgICBjb2xvcjogJ2dyZWVuJywKICAgICAgICB9LCB7CiAgICAgICAgICB0aXRsZTogJ3lvdXIgbGVhZicsCiAgICAgICAgICB2YWx1ZTogJ2xlYWYyJywKICAgICAgICAgIGNvbG9yOiAnY3lhbicsCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgIHZhbHVlOiAncGFyZW50IDEtMScsCiAgICAgICAgY29sb3I6ICdibHVlJywKICAgICAgfV0sCiAgICB9XSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VsZWN0JywgdmFsdWUudmFsdWUpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgdHJlZURhdGEsCiAgICAgIFNIT1dfQUxMLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[u(k,{value:a.value,"onUpdate:value":s[0]||(s[0]=C=>a.value=C),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"",multiple:"","show-checked-strategy":a.SHOW_ALL,"tree-default-expand-all":"","tree-data":a.treeData},{tagRender:e(({label:C,closable:r,onClose:f,option:W})=>[u(p,{closable:r,color:W.color,style:{"margin-right":"3px"},onClose:f},{default:e(()=>[t(Z(C)+"\xA0\xA0 ",1)]),_:2},1032,["closable","color","onClose"])]),title:e(({value:C,title:r})=>[C==="parent 1-1"?(l(),h("b",xn,Z(C),1)):(l(),h(y,{key:1},[t(Z(r),1)],64))]),_:1},8,["value","show-checked-strategy","tree-data"])]),htmlCode:e(()=>[Rn]),jsVersionHtml:e(()=>[Tn]),_:1},8,["jsfiddle"])}var Fn=m(Nn,[["render",Yn]]);const Ln=b({setup(){const a=d(),s=d([{name:"parent 1",value:"parent 1",children:[{name:"parent 1-0",value:"parent 1-0",children:[{name:"my leaf",value:"leaf1"},{name:"your leaf",value:"leaf2"}]},{name:"parent 1-1",value:"parent 1-1"}]}]);return w(a,()=>{console.log(a.value)}),{value:a,treeData:s}}}),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      children: `),n("span",{class:"token punctuation"},"'"),t("children"),n("span",{class:"token punctuation"},"'"),t(`,
      label: `),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`,
      key: `),n("span",{class:"token punctuation"},"'"),t("key"),n("span",{class:"token punctuation"},"'"),t(`,
      value: `),n("span",{class:"token punctuation"},"'"),t("value"),n("span",{class:"token punctuation"},"'"),t(`,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TreeSelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("TreeSelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree-select")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":dropdown-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ maxHeight: "),n("span",{class:"token punctuation"},"'"),t("400px"),n("span",{class:"token punctuation"},"'"),t(", overflow: "),n("span",{class:"token punctuation"},"'"),t("auto"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token attr-name"},"tree-default-expand-all"),t(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      children: `),n("span",{class:"token punctuation"},"'"),t("children"),n("span",{class:"token punctuation"},"'"),t(`,
      label: `),n("span",{class:"token punctuation"},"'"),t("name"),n("span",{class:"token punctuation"},"'"),t(`,
      key: `),n("span",{class:"token punctuation"},"'"),t("key"),n("span",{class:"token punctuation"},"'"),t(`,
      value: `),n("span",{class:"token punctuation"},"'"),t("value"),n("span",{class:"token punctuation"},"'"),t(`,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tree-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Xn(a,s,i,A,g,I){const p=o("a-tree-select"),k=o("demo-box");return l(),v(k,{jsfiddle:{us:"Replace the title,key and children fields in treeNode with the corresponding fields in treeData.",cn:"fieldNames \u66FF\u6362 treeNode\u4E2D title,key,children \u5B57\u6BB5\u4E3AtreeData\u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>fieldNames \u66FF\u6362 treeNode\u4E2D title,key,children \u5B57\u6BB5\u4E3AtreeData\u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Replace the title,key and children fields in treeNode with the corresponding fields in treeData.</p>
`,order:9,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5B57\u6BB5","en-US":"ReplaceFields"},relativePath:"components/tree-select/demo/replaceFields.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICA6ZmllbGQtbmFtZXM9InsKICAgICAgY2hpbGRyZW46ICdjaGlsZHJlbicsCiAgICAgIGxhYmVsOiAnbmFtZScsCiAgICAgIGtleTogJ2tleScsCiAgICAgIHZhbHVlOiAndmFsdWUnLAogICAgfSIKICA+PC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBUcmVlU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxzdHJpbmc+KCk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZjxUcmVlU2VsZWN0UHJvcHNbJ3RyZWVEYXRhJ10+KFsKICAgICAgewogICAgICAgIG5hbWU6ICdwYXJlbnQgMScsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgbmFtZTogJ3BhcmVudCAxLTAnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTAnLAogICAgICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIG5hbWU6ICdteSBsZWFmJywKICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbmFtZTogJ3lvdXIgbGVhZicsCiAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlYWYyJywKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbmFtZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgICB2YWx1ZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIHNob3ctc2VhcmNoCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICA6ZHJvcGRvd24tc3R5bGU9InsgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH0iCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIGFsbG93LWNsZWFyCiAgICB0cmVlLWRlZmF1bHQtZXhwYW5kLWFsbAogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICA6ZmllbGQtbmFtZXM9InsKICAgICAgY2hpbGRyZW46ICdjaGlsZHJlbicsCiAgICAgIGxhYmVsOiAnbmFtZScsCiAgICAgIGtleTogJ2tleScsCiAgICAgIHZhbHVlOiAndmFsdWUnLAogICAgfSIKICA+PC9hLXRyZWUtc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gcmVmKFt7CiAgICAgIG5hbWU6ICdwYXJlbnQgMScsCiAgICAgIHZhbHVlOiAncGFyZW50IDEnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBuYW1lOiAncGFyZW50IDEtMCcsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0wJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIG5hbWU6ICdteSBsZWFmJywKICAgICAgICAgIHZhbHVlOiAnbGVhZjEnLAogICAgICAgIH0sIHsKICAgICAgICAgIG5hbWU6ICd5b3VyIGxlYWYnLAogICAgICAgICAgdmFsdWU6ICdsZWFmMicsCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICBuYW1lOiAncGFyZW50IDEtMScsCiAgICAgICAgdmFsdWU6ICdwYXJlbnQgMS0xJywKICAgICAgfV0sCiAgICB9XSk7CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[u(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=c=>a.value=c),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":"","tree-data":a.treeData,"field-names":{children:"children",label:"name",key:"key",value:"value"}},null,8,["value","tree-data"])]),htmlCode:e(()=>[Kn]),jsVersionHtml:e(()=>[Jn]),_:1},8,["jsfiddle"])}var Dn=m(Ln,[["render",Xn]]);const Pn={pageData:{title:"TreeSelect",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"TreeSelect",subtitle:"\u6811\u9009\u62E9",cover:"https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002"},{level:2,title:"API",slug:"API",content:"Tree props"},{level:3,title:"Tree props",slug:"Tree-props",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Tree \u65B9\u6CD5",slug:"Tree-\u65B9\u6CD5",content:""},{level:3,title:"TreeNode props",slug:"TreeNode-props",content:""}],relativePath:"components/tree-select/index.zh-CN.md",content:`
\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002

## \u4F55\u65F6\u4F7F\u7528

\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002

## API

### Tree props

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |  |
| --- | --- | --- | --- | --- | --- |
| allowClear | \u663E\u793A\u6E05\u9664\u6309\u94AE | boolean | false |  |  |
| defaultValue | \u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE | string/string\\[] | - |  |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |  |
| dropdownClassName | \u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027 | string | - |  |  |
| dropdownMatchSelectWidth | \u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E \`min-width\`\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean \\| number | true |  |  |
| dropdownStyle | \u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F | object | - |  |  |
| fieldNames | \u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5 | object | {children:&#39;children&#39;, label:&#39;title&#39;, value: &#39;value&#39; } |  | 3.0.0 |
| filterTreeNode | \u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u7528 treeNodeFilterProp \u7684\u503C\u4F5C\u4E3A\u8981\u7B5B\u9009\u7684 TreeNode \u7684\u5C5E\u6027\u503C | boolean\\|Function(inputValue: string, treeNode: TreeNode) (\u51FD\u6570\u9700\u8981\u8FD4\u56DE bool \u503C) | Function |  |  |
| getPopupContainer | \u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002 | Function(triggerNode) | () =&gt; document.body |  |  |
| labelInValue | \u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A value \u7C7B\u578B\u4ECE \`string\` \u53D8\u4E3A \`{value: string, label: VNode, halfChecked(treeCheckStrictly \u65F6\u6709\u6548): string[] }\` \u7684\u683C\u5F0F | boolean | false |  |  |
| listHeight | \u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6 | number | 256 |  |  |
| loadData | \u5F02\u6B65\u52A0\u8F7D\u6570\u636E | function(node) | - |  |  |
| maxTagCount | \u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag | number | - |  |  |
| maxTagPlaceholder | \u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9 | slot/function(omittedValues) | - |  |  |
| multiple | \u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E treeCheckable \u65F6\u81EA\u52A8\u53D8\u4E3A true\uFF09 | boolean | false |  |  |
| notFoundContent | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | slot | \`Not Found\` |  |  |
| placeholder | \u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57 | string\\|slot | - |  |  |
| replaceFields | \u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5 | object | {children:&#39;children&#39;, label:&#39;title&#39;, key:&#39;key&#39;, value: &#39;value&#39; } |  | 1.6.1 (3.0.0 \u5E9F\u5F03) |
| searchPlaceholder | \u641C\u7D22\u6846\u9ED8\u8BA4\u6587\u5B57 | string\\|slot | - |  |  |
| searchValue(v-model) | \u641C\u7D22\u6846\u7684\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`search\` \u4E8B\u4EF6\u83B7\u53D6\u7528\u6237\u8F93\u5165 | string | - |  |  |
| showCheckedStrategy | \u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002\`TreeSelect.SHOW_ALL\`: \u663E\u793A\u6240\u6709\u9009\u4E2D\u8282\u70B9(\u5305\u62EC\u7236\u8282\u70B9). \`TreeSelect.SHOW_PARENT\`: \u53EA\u663E\u793A\u7236\u8282\u70B9(\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6). \u9ED8\u8BA4\u53EA\u663E\u793A\u5B50\u8282\u70B9. | enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD } | TreeSelect.SHOW_CHILD |  |  |
| showSearch | \u5728\u4E0B\u62C9\u4E2D\u663E\u793A\u641C\u7D22\u6846(\u4EC5\u5728\u5355\u9009\u6A21\u5F0F\u4E0B\u751F\u6548) | boolean | false |  |  |
| size | \u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 \`large\` \`small\` | string | &#39;default&#39; |  |  |
| suffixIcon | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | VNode \\| slot | - |  |  |
| tagRender | \u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548 | slot | - | 3.0 |  |
| title | \u81EA\u5B9A\u4E49\u6807\u9898 | slot |  | 3.0.0 |  |
| treeCheckable | \u663E\u793A checkbox | boolean | false |  |  |
| treeCheckStrictly | checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09\uFF0C\u4F1A\u4F7F\u5F97 \`labelInValue\` \u5F3A\u5236\u4E3A true | boolean | false |  |  |
| treeData | treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08value \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09 | array&amp;lt;{value, label, children, [disabled, disableCheckbox, selectable]}&gt; | \\[] |  |  |
| treeDataSimpleMode | \u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: \\[{id:1, pId:0, value:&#39;1&#39;, label:&quot;test1&quot;,...},...], \`pId\` \u662F\u7236\u8282\u70B9\u7684 id) | false\\|Array&amp;lt;{ id: string, pId: string, rootPId: null }&gt; | false |  |  |
| treeDefaultExpandAll | \u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9 | boolean | false |  |  |
| treeDefaultExpandedKeys | \u9ED8\u8BA4\u5C55\u5F00\u7684\u6811\u8282\u70B9 | string\\[] \\| number\\[] | - |  |  |
| treeExpandedKeys(v-model) | \u8BBE\u7F6E\u5C55\u5F00\u7684\u6811\u8282\u70B9 | string\\[] \\| number\\[] | - |  |  |
| treeIcon | \u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F | boolean | false |  |  |
| treeLine | \u662F\u5426\u5C55\u793A\u7EBF\u6761\u6837\u5F0F\uFF0C\u8BF7\u53C2\u8003 [Tree - showLine](/components/tree/#components-tree-demo-line) | boolean \\| object | false | 3.0 |  |
| treeNodeFilterProp | \u8F93\u5165\u9879\u8FC7\u6EE4\u5BF9\u5E94\u7684 treeNode \u5C5E\u6027 | string | &#39;value&#39; |  |  |
| treeNodeLabelProp | \u4F5C\u4E3A\u663E\u793A\u7684 prop \u8BBE\u7F6E | string | &#39;title&#39; |  |  |
| value(v-model) | \u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE | string/string\\[] | - |  |  |
| virtual | \u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean | true | 3.0 |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0              | \u8BF4\u660E                   | \u56DE\u8C03\u53C2\u6570                      | \u7248\u672C |
| --------------------- | ---------------------- | ----------------------------- | ---- |
| change                | \u9009\u4E2D\u6811\u8282\u70B9\u65F6\u8C03\u7528\u6B64\u51FD\u6570 | function(value, label, extra) |      |
| dropdownVisibleChange | \u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03     | function(open)                | 3.0  |
| search                | \u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03     | function(value: string)       |      |
| select                | \u88AB\u9009\u4E2D\u65F6\u8C03\u7528           | function(value, node, extra)  |      |
| treeExpand            | \u5C55\u5F00\u8282\u70B9\u65F6\u8C03\u7528         | function(expandedKeys)        |      |

### Tree \u65B9\u6CD5

| \u540D\u79F0    | \u63CF\u8FF0     |
| ------- | -------- |
| blur()  | \u79FB\u9664\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

### TreeNode props

&gt; \u5EFA\u8BAE\u4F7F\u7528 treeData \u6765\u4EE3\u66FF TreeNode\uFF0C\u514D\u53BB\u624B\u5DE5\u6784\u9020\u9EBB\u70E6

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| checkable | \u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox | boolean | - |  |
| disableCheckbox | \u7981\u6389 checkbox | boolean | false |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |
| isLeaf | \u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9 | boolean | false |  |
| key | \u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09 | string \\| number | - |  |
| selectable | \u662F\u5426\u53EF\u9009 | boolean | true |  |
| title | \u6811\u8282\u70B9\u663E\u793A\u7684\u5185\u5BB9 | string\\|slot | &#39;---&#39; |  |
| value | \u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09 | string | - |  |
`,html:`<p>\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Tree-props">Tree props <a class="header-anchor" href="#Tree-props">
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
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>allowClear</td>
<td>\u663E\u793A\u6E05\u9664\u6309\u94AE</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string/string[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownClassName</td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td>
<td>string</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownMatchSelectWidth</td>
<td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean | number</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownStyle</td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F</td>
<td>object</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>\u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td>
<td>object</td>
<td>{children:'children', label:'title', value: 'value' }</td>
<td></td>
<td>3.0.0</td>
</tr>
<tr>
<td>filterTreeNode</td>
<td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u7528 treeNodeFilterProp \u7684\u503C\u4F5C\u4E3A\u8981\u7B5B\u9009\u7684 TreeNode \u7684\u5C5E\u6027\u503C</td>
<td>boolean|Function(inputValue: string, treeNode: TreeNode) (\u51FD\u6570\u9700\u8981\u8FD4\u56DE bool \u503C)</td>
<td>Function</td>
<td></td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td>
<td>Function(triggerNode)</td>
<td>() =&gt; document.body</td>
<td></td>
<td></td>
</tr>
<tr>
<td>labelInValue</td>
<td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{value: string, label: VNode, halfChecked(treeCheckStrictly \u65F6\u6709\u6548): string[] }</code> \u7684\u683C\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>listHeight</td>
<td>\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6</td>
<td>number</td>
<td>256</td>
<td></td>
<td></td>
</tr>
<tr>
<td>loadData</td>
<td>\u5F02\u6B65\u52A0\u8F7D\u6570\u636E</td>
<td>function(node)</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td>
<td>number</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td>slot/function(omittedValues)</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E treeCheckable \u65F6\u81EA\u52A8\u53D8\u4E3A true\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>notFoundContent</td>
<td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td>slot</td>
<td><code>Not Found</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td>
<td>string|slot</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>replaceFields</td>
<td>\u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td>
<td>object</td>
<td>{children:'children', label:'title', key:'key', value: 'value' }</td>
<td></td>
<td>1.6.1 (3.0.0 \u5E9F\u5F03)</td>
</tr>
<tr>
<td>searchPlaceholder</td>
<td>\u641C\u7D22\u6846\u9ED8\u8BA4\u6587\u5B57</td>
<td>string|slot</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>searchValue(v-model)</td>
<td>\u641C\u7D22\u6846\u7684\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>search</code> \u4E8B\u4EF6\u83B7\u53D6\u7528\u6237\u8F93\u5165</td>
<td>string</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showCheckedStrategy</td>
<td>\u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002<code>TreeSelect.SHOW_ALL</code>: \u663E\u793A\u6240\u6709\u9009\u4E2D\u8282\u70B9(\u5305\u62EC\u7236\u8282\u70B9). <code>TreeSelect.SHOW_PARENT</code>: \u53EA\u663E\u793A\u7236\u8282\u70B9(\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6). \u9ED8\u8BA4\u53EA\u663E\u793A\u5B50\u8282\u70B9.</td>
<td>enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }</td>
<td>TreeSelect.SHOW_CHILD</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>\u5728\u4E0B\u62C9\u4E2D\u663E\u793A\u641C\u7D22\u6846(\u4EC5\u5728\u5355\u9009\u6A21\u5F0F\u4E0B\u751F\u6548)</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td>
<td>string</td>
<td>'default'</td>
<td></td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>tagRender</td>
<td>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u81EA\u5B9A\u4E49\u6807\u9898</td>
<td>slot</td>
<td></td>
<td>3.0.0</td>
<td></td>
</tr>
<tr>
<td>treeCheckable</td>
<td>\u663E\u793A checkbox</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeCheckStrictly</td>
<td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09\uFF0C\u4F1A\u4F7F\u5F97 <code>labelInValue</code> \u5F3A\u5236\u4E3A true</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeData</td>
<td>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08value \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td>
<td>array&lt;{value, label, children, [disabled, disableCheckbox, selectable]}&gt;</td>
<td>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeDataSimpleMode</td>
<td>\u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: [{id:1, pId:0, value:'1', label:&quot;test1&quot;,...},...], <code>pId</code> \u662F\u7236\u8282\u70B9\u7684 id)</td>
<td>false|Array&lt;{ id: string, pId: string, rootPId: null }&gt;</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeDefaultExpandAll</td>
<td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeDefaultExpandedKeys</td>
<td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u6811\u8282\u70B9</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeExpandedKeys(v-model)</td>
<td>\u8BBE\u7F6E\u5C55\u5F00\u7684\u6811\u8282\u70B9</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeIcon</td>
<td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeLine</td>
<td>\u662F\u5426\u5C55\u793A\u7EBF\u6761\u6837\u5F0F\uFF0C\u8BF7\u53C2\u8003 <a href="/components/tree/#components-tree-demo-line">Tree - showLine</a></td>
<td>boolean | object</td>
<td>false</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>treeNodeFilterProp</td>
<td>\u8F93\u5165\u9879\u8FC7\u6EE4\u5BF9\u5E94\u7684 treeNode \u5C5E\u6027</td>
<td>string</td>
<td>'value'</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeNodeLabelProp</td>
<td>\u4F5C\u4E3A\u663E\u793A\u7684 prop \u8BBE\u7F6E</td>
<td>string</td>
<td>'title'</td>
<td></td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string/string[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>virtual</td>
<td>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
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
<td>\u9009\u4E2D\u6811\u8282\u70B9\u65F6\u8C03\u7528\u6B64\u51FD\u6570</td>
<td>function(value, label, extra)</td>
<td></td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td>
<td>function(open)</td>
<td>3.0</td>
</tr>
<tr>
<td>search</td>
<td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td>
<td>function(value: string)</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</td>
<td>function(value, node, extra)</td>
<td></td>
</tr>
<tr>
<td>treeExpand</td>
<td>\u5C55\u5F00\u8282\u70B9\u65F6\u8C03\u7528</td>
<td>function(expandedKeys)</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Tree-\u65B9\u6CD5">Tree \u65B9\u6CD5 <a class="header-anchor" href="#Tree-\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<h3 id="TreeNode-props">TreeNode props <a class="header-anchor" href="#TreeNode-props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>\u5EFA\u8BAE\u4F7F\u7528 treeData \u6765\u4EE3\u66FF TreeNode\uFF0C\u514D\u53BB\u624B\u5DE5\u6784\u9020\u9EBB\u70E6</p>
</blockquote>
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
<td>checkable</td>
<td>\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disableCheckbox</td>
<td>\u7981\u6389 checkbox</td>
<td>boolean</td>
<td>false</td>
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
<td>isLeaf</td>
<td>\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td>\u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td>
<td>string | number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>selectable</td>
<td>\u662F\u5426\u53EF\u9009</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u6811\u8282\u70B9\u663E\u793A\u7684\u5185\u5BB9</td>
<td>string|slot</td>
<td>'---'</td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243963}},Un={class:"markdown"},jn=H('<p>\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Tree-props">Tree props <a class="header-anchor" href="#Tree-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>allowClear</td><td>\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>defaultValue</td><td>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</td><td>string/string[]</td><td>-</td><td></td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>dropdownClassName</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td>string</td><td>-</td><td></td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean | number</td><td>true</td><td></td><td></td></tr><tr><td>dropdownStyle</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td><td></td></tr><tr><td>fieldNames</td><td>\u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td><td>object</td><td>{children:&#39;children&#39;, label:&#39;title&#39;, value: &#39;value&#39; }</td><td></td><td>3.0.0</td></tr><tr><td>filterTreeNode</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u7528 treeNodeFilterProp \u7684\u503C\u4F5C\u4E3A\u8981\u7B5B\u9009\u7684 TreeNode \u7684\u5C5E\u6027\u503C</td><td>boolean|Function(inputValue: string, treeNode: TreeNode) (\u51FD\u6570\u9700\u8981\u8FD4\u56DE bool \u503C)</td><td>Function</td><td></td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td><td></td></tr><tr><td>labelInValue</td><td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{value: string, label: VNode, halfChecked(treeCheckStrictly \u65F6\u6709\u6548): string[] }</code> \u7684\u683C\u5F0F</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>listHeight</td><td>\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6</td><td>number</td><td>256</td><td></td><td></td></tr><tr><td>loadData</td><td>\u5F02\u6B65\u52A0\u8F7D\u6570\u636E</td><td>function(node)</td><td>-</td><td></td><td></td></tr><tr><td>maxTagCount</td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td>number</td><td>-</td><td></td><td></td></tr><tr><td>maxTagPlaceholder</td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>slot/function(omittedValues)</td><td>-</td><td></td><td></td></tr><tr><td>multiple</td><td>\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E treeCheckable \u65F6\u81EA\u52A8\u53D8\u4E3A true\uFF09</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>slot</td><td><code>Not Found</code></td><td></td><td></td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td><td></td></tr><tr><td>replaceFields</td><td>\u66FF\u6362 treeNode \u4E2D title,value,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td><td>object</td><td>{children:&#39;children&#39;, label:&#39;title&#39;, key:&#39;key&#39;, value: &#39;value&#39; }</td><td></td><td>1.6.1 (3.0.0 \u5E9F\u5F03)</td></tr><tr><td>searchPlaceholder</td><td>\u641C\u7D22\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td><td></td></tr><tr><td>searchValue(v-model)</td><td>\u641C\u7D22\u6846\u7684\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>search</code> \u4E8B\u4EF6\u83B7\u53D6\u7528\u6237\u8F93\u5165</td><td>string</td><td>-</td><td></td><td></td></tr><tr><td>showCheckedStrategy</td><td>\u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002<code>TreeSelect.SHOW_ALL</code>: \u663E\u793A\u6240\u6709\u9009\u4E2D\u8282\u70B9(\u5305\u62EC\u7236\u8282\u70B9). <code>TreeSelect.SHOW_PARENT</code>: \u53EA\u663E\u793A\u7236\u8282\u70B9(\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6). \u9ED8\u8BA4\u53EA\u663E\u793A\u5B50\u8282\u70B9.</td><td>enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }</td><td>TreeSelect.SHOW_CHILD</td><td></td><td></td></tr><tr><td>showSearch</td><td>\u5728\u4E0B\u62C9\u4E2D\u663E\u793A\u641C\u7D22\u6846(\u4EC5\u5728\u5355\u9009\u6A21\u5F0F\u4E0B\u751F\u6548)</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>size</td><td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td><td>string</td><td>&#39;default&#39;</td><td></td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td><td></td></tr><tr><td>tagRender</td><td>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548</td><td>slot</td><td>-</td><td>3.0</td><td></td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td><td>slot</td><td></td><td>3.0.0</td><td></td></tr><tr><td>treeCheckable</td><td>\u663E\u793A checkbox</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeCheckStrictly</td><td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09\uFF0C\u4F1A\u4F7F\u5F97 <code>labelInValue</code> \u5F3A\u5236\u4E3A true</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeData</td><td>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08value \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>array&lt;{value, label, children, [disabled, disableCheckbox, selectable]}&gt;</td><td>[]</td><td></td><td></td></tr><tr><td>treeDataSimpleMode</td><td>\u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: [{id:1, pId:0, value:&#39;1&#39;, label:&quot;test1&quot;,...},...], <code>pId</code> \u662F\u7236\u8282\u70B9\u7684 id)</td><td>false|Array&lt;{ id: string, pId: string, rootPId: null }&gt;</td><td>false</td><td></td><td></td></tr><tr><td>treeDefaultExpandAll</td><td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeDefaultExpandedKeys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>-</td><td></td><td></td></tr><tr><td>treeExpandedKeys(v-model)</td><td>\u8BBE\u7F6E\u5C55\u5F00\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>-</td><td></td><td></td></tr><tr><td>treeIcon</td><td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeLine</td><td>\u662F\u5426\u5C55\u793A\u7EBF\u6761\u6837\u5F0F\uFF0C\u8BF7\u53C2\u8003 <a href="/components/tree/#components-tree-demo-line">Tree - showLine</a></td><td>boolean | object</td><td>false</td><td>3.0</td><td></td></tr><tr><td>treeNodeFilterProp</td><td>\u8F93\u5165\u9879\u8FC7\u6EE4\u5BF9\u5E94\u7684 treeNode \u5C5E\u6027</td><td>string</td><td>&#39;value&#39;</td><td></td><td></td></tr><tr><td>treeNodeLabelProp</td><td>\u4F5C\u4E3A\u663E\u793A\u7684 prop \u8BBE\u7F6E</td><td>string</td><td>&#39;title&#39;</td><td></td><td></td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string/string[]</td><td>-</td><td></td><td></td></tr><tr><td>virtual</td><td>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u6811\u8282\u70B9\u65F6\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value, label, extra)</td><td></td></tr><tr><td>dropdownVisibleChange</td><td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td><td>function(open)</td><td>3.0</td></tr><tr><td>search</td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td>function(value: string)</td><td></td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</td><td>function(value, node, extra)</td><td></td></tr><tr><td>treeExpand</td><td>\u5C55\u5F00\u8282\u70B9\u65F6\u8C03\u7528</td><td>function(expandedKeys)</td><td></td></tr></tbody></table><h3 id="Tree-\u65B9\u6CD5">Tree \u65B9\u6CD5 <a class="header-anchor" href="#Tree-\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3 id="TreeNode-props">TreeNode props <a class="header-anchor" href="#TreeNode-props"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>\u5EFA\u8BAE\u4F7F\u7528 treeData \u6765\u4EE3\u66FF TreeNode\uFF0C\u514D\u53BB\u624B\u5DE5\u6784\u9020\u9EBB\u70E6</p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>checkable</td><td>\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disableCheckbox</td><td>\u7981\u6389 checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>isLeaf</td><td>\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>\u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>string | number</td><td>-</td><td></td></tr><tr><td>selectable</td><td>\u662F\u5426\u53EF\u9009</td><td>boolean</td><td>true</td><td></td></tr><tr><td>title</td><td>\u6811\u8282\u70B9\u663E\u793A\u7684\u5185\u5BB9</td><td>string|slot</td><td>&#39;---&#39;</td><td></td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td>string</td><td>-</td><td></td></tr></tbody></table>',13),En=[jn];function On(a,s,i,A,g,I){return l(),h("article",Un,En)}var zn=m(Pn,[["render",On]]);const _n={pageData:{title:"TreeSelect",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"TreeSelect",cover:"https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"`TreeSelect` is similar to `Select`, but the values are provided in a tree like structure. Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on."},{level:2,title:"API",slug:"API",content:"Tree props"},{level:3,title:"Tree props",slug:"Tree-props",content:""},{level:3,title:"Events",slug:"Events",content:""},{level:3,title:"Tree Methods",slug:"Tree-Methods",content:""},{level:3,title:"TreeNode props",slug:"TreeNode-props",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"How to get parent node in onChange?"},{level:3,title:"How to get parent node in onChange?",slug:"How-to-get-parent-node-in-onChange",content:"We don't provide this since performance consideration."}],relativePath:"components/tree-select/index.en-US.md",content:`
Tree selection control.

## When To Use

\`TreeSelect\` is similar to \`Select\`, but the values are provided in a tree like structure. Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.

## API

### Tree props

| Property | Description | Type | Default | Version |  |
| --- | --- | --- | --- | --- | --- |
| allowClear | Whether allow clear | boolean | false |  |  |
| defaultValue | To set the initial selected treeNode(s). | string\\|string\\[] | - |  |  |
| disabled | Disabled or not | boolean | false |  |  |
| dropdownClassName | className of dropdown menu | string | - |  |  |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set \`min-width\` same as input. Will ignore when value less than select width. \`false\` will disable virtual scroll | boolean \\| number | true |  |  |
| dropdownStyle | To set the style of the dropdown menu | object | - |  |  |
| fieldNames | Replace the title,value, key and children fields in treeNode with the corresponding fields in treeData | object | {children:&#39;children&#39;, label:&#39;title&#39;, key:&#39;key&#39;, value: &#39;value&#39; } |  | 3.0.0 |
| filterTreeNode | Whether to filter treeNodes by input value. The value of \`treeNodeFilterProp\` is used for filtering by default. | boolean\\|Function(inputValue: string, treeNode: TreeNode) (should return boolean) | Function |  |  |
| getPopupContainer | To set the container of the dropdown menu. The default is to create a \`div\` element in \`body\`, you can reset it to the scrolling area and make a relative reposition. | Function(triggerNode) | () =&gt; document.body |  |  |
| labelInValue | whether to embed label in value, turn the format of value from \`string\` to \`{value: string, label: VNode, halfChecked: string[]}\` | boolean | false |  |  |
| listHeight | Config popup height | number | 256 |  |  |
| loadData | Load data asynchronously. | function(node) | - |  |  |
| maxTagCount | Max tag count to show | number | - |  |  |
| maxTagPlaceholder | Placeholder for not showing tags | slot/function(omittedValues) | - |  |  |
| multiple | Support multiple or not, will be \`true\` when enable \`treeCheckable\`. | boolean | false |  |  |
| notFoundContent | Specify content to show when no result matches | slot | \`Not Found\` |  |  |
| placeholder | Placeholder of the select input | string\\|slot | - |  |  |
| replaceFields | Replace the title,value, key and children fields in treeNode with the corresponding fields in treeData | object | { children:&#39;children&#39;, label:&#39;title&#39;, value: &#39;value&#39; } |  | 1.6.1 (3.0.0 deprecated) |
| searchPlaceholder | Placeholder of the search input | string\\|slot | - |  |  |
| searchValue(v-model) | work with \`search\` event to make search value controlled. | string | - |  |  |
| showCheckedStrategy | The way show selected item in box. **Default:** just show child nodes. **\`TreeSelect.SHOW_ALL\`:** show all checked treeNodes (include parent treeNode). **\`TreeSelect.SHOW_PARENT\`:** show checked treeNodes (just show parent treeNode). | enum { TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD } | TreeSelect.SHOW_CHILD |  |  |
| showSearch | Whether to display a search input in the dropdown menu(valid only in the single mode) | boolean | false |  |  |
| size | To set the size of the select input, options: \`large\` \`small\` | string | &#39;default&#39; |  |  |
| suffixIcon | The custom suffix icon | VNode \\| slot | - |  |  |
| tagRender | Customize tag render when \`multiple\` | (props) =&gt; slot | - | 3.0 |  |
| title | custom title | slot |  | 3.0.0 |  |
| treeCheckable | Whether to show checkbox on the treeNodes | boolean | false |  |  |
| treeCheckStrictly | Whether to check nodes precisely (in the \`checkable\` mode), means parent and child nodes are not associated, and it will make \`labelInValue\` be true | boolean | false |  |  |
| treeData | Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value) | array\\\\&amp;lt;{ value, title, children, \\[disabled, disableCheckbox, selectable] }&gt; | \\[] |  |  |
| treeDataSimpleMode | Enable simple mode of treeData. Changes the \`treeData\` schema to: \\[{id:1, pId:0, value:&#39;1&#39;, title:&quot;test1&quot;,...},...] where pId is parent node&#39;s id). It is possible to replace the default \`id\` and \`pId\` keys by providing object to \`treeDataSimpleMode\` | false\\|object\\\\&amp;lt;{ id: string, pId: string, rootPId: null }&gt; | false |  |  |
| treeDefaultExpandAll | Whether to expand all treeNodes by default | boolean | false |  |  |
| treeDefaultExpandedKeys | Default expanded treeNodes | string\\[] \\| number\\[] | - |  |  |
| treeExpandedKeys(v-model) | Set expanded keys | string\\[] \\| number\\[] | - |  |  |
| treeIcon | Shows the icon before a TreeNode&#39;s title. There is no default style; you must set a custom style for it if set to \`true\` | boolean | false |  |  |
| treeLine | Show the line. Ref [Tree - showLine](/components/tree/#components-tree-demo-line) | boolean \\| object | false | 3.0 |  |
| treeNodeFilterProp | Will be used for filtering if \`filterTreeNode\` returns true | string | &#39;value&#39; |  |  |
| treeNodeLabelProp | Will render as content of select | string | &#39;title&#39; |  |  |
| value(v-model) | To set the current selected treeNode(s). | string\\|string\\[] | - |  |  |
| virtual | Disable virtual scroll when set to false | boolean | true | 3.0 |  |

### Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | A callback function, can be executed when selected treeNodes or input value change | function(value, label, extra) |  |
| dropdownVisibleChange | Called when dropdown open | function(open) | 3.0 |
| search | A callback function, can be executed when the search input changes. | function(value: string) |  |
| select | A callback function, can be executed when you select a treeNode. | function(value, node, extra) |  |
| treeExpand | A callback function, can be executed when treeNode expanded | function(expandedKeys) |  |

### Tree Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |

### TreeNode props

&gt; We recommend you to use \`treeData\` rather than \`TreeNode\`, to avoid the trouble of manual construction.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checkable | When Tree is checkable, set TreeNode display Checkbox or not | boolean | - |  |
| disableCheckbox | Disables the checkbox of the treeNode | boolean | false |  |
| disabled | Disabled or not | boolean | false |  |
| isLeaf | Leaf node or not | boolean | false |  |
| key | Required property, should be unique in the tree | string \\| number | - |  |
| selectable | can be selected | boolean | true |  |
| title | Content showed on the treeNodes | string | &#39;---&#39; |  |
| value | Will be treated as \`treeNodeFilterProp\` by default, should be unique in the tree | string | - |  |

## FAQ

### How to get parent node in onChange?

We don&#39;t provide this since performance consideration.
`,html:`<p>Tree selection control.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>TreeSelect</code> is similar to <code>Select</code>, but the values are provided in a tree like structure. Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Tree-props">Tree props <a class="header-anchor" href="#Tree-props">
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
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>allowClear</td>
<td>Whether allow clear</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>To set the initial selected treeNode(s).</td>
<td>string|string[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled or not</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownClassName</td>
<td>className of dropdown menu</td>
<td>string</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownMatchSelectWidth</td>
<td>Determine whether the dropdown menu and the select input are the same width. Default set <code>min-width</code> same as input. Will ignore when value less than select width. <code>false</code> will disable virtual scroll</td>
<td>boolean | number</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>dropdownStyle</td>
<td>To set the style of the dropdown menu</td>
<td>object</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>Replace the title,value, key and children fields in treeNode with the corresponding fields in treeData</td>
<td>object</td>
<td>{children:'children', label:'title', key:'key', value: 'value' }</td>
<td></td>
<td>3.0.0</td>
</tr>
<tr>
<td>filterTreeNode</td>
<td>Whether to filter treeNodes by input value. The value of <code>treeNodeFilterProp</code> is used for filtering by default.</td>
<td>boolean|Function(inputValue: string, treeNode: TreeNode) (should return boolean)</td>
<td>Function</td>
<td></td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>To set the container of the dropdown menu. The default is to create a <code>div</code> element in <code>body</code>, you can reset it to the scrolling area and make a relative reposition.</td>
<td>Function(triggerNode)</td>
<td>() =&gt; document.body</td>
<td></td>
<td></td>
</tr>
<tr>
<td>labelInValue</td>
<td>whether to embed label in value, turn the format of value from <code>string</code> to <code>{value: string, label: VNode, halfChecked: string[]}</code></td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>listHeight</td>
<td>Config popup height</td>
<td>number</td>
<td>256</td>
<td></td>
<td></td>
</tr>
<tr>
<td>loadData</td>
<td>Load data asynchronously.</td>
<td>function(node)</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>Max tag count to show</td>
<td>number</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>Placeholder for not showing tags</td>
<td>slot/function(omittedValues)</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>Support multiple or not, will be <code>true</code> when enable <code>treeCheckable</code>.</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>notFoundContent</td>
<td>Specify content to show when no result matches</td>
<td>slot</td>
<td><code>Not Found</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>Placeholder of the select input</td>
<td>string|slot</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>replaceFields</td>
<td>Replace the title,value, key and children fields in treeNode with the corresponding fields in treeData</td>
<td>object</td>
<td>{ children:'children', label:'title', value: 'value' }</td>
<td></td>
<td>1.6.1 (3.0.0 deprecated)</td>
</tr>
<tr>
<td>searchPlaceholder</td>
<td>Placeholder of the search input</td>
<td>string|slot</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>searchValue(v-model)</td>
<td>work with <code>search</code> event to make search value controlled.</td>
<td>string</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showCheckedStrategy</td>
<td>The way show selected item in box. <strong>Default:</strong> just show child nodes. <strong><code>TreeSelect.SHOW_ALL</code>:</strong> show all checked treeNodes (include parent treeNode). <strong><code>TreeSelect.SHOW_PARENT</code>:</strong> show checked treeNodes (just show parent treeNode).</td>
<td>enum { TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }</td>
<td>TreeSelect.SHOW_CHILD</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>Whether to display a search input in the dropdown menu(valid only in the single mode)</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>To set the size of the select input, options: <code>large</code> <code>small</code></td>
<td>string</td>
<td>'default'</td>
<td></td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>The custom suffix icon</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>tagRender</td>
<td>Customize tag render when <code>multiple</code></td>
<td>(props) =&gt; slot</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>custom title</td>
<td>slot</td>
<td></td>
<td>3.0.0</td>
<td></td>
</tr>
<tr>
<td>treeCheckable</td>
<td>Whether to show checkbox on the treeNodes</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeCheckStrictly</td>
<td>Whether to check nodes precisely (in the <code>checkable</code> mode), means parent and child nodes are not associated, and it will make <code>labelInValue</code> be true</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeData</td>
<td>Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)</td>
<td>array\\&lt;{ value, title, children, [disabled, disableCheckbox, selectable] }&gt;</td>
<td>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeDataSimpleMode</td>
<td>Enable simple mode of treeData. Changes the <code>treeData</code> schema to: [{id:1, pId:0, value:'1', title:&quot;test1&quot;,...},...] where pId is parent node's id). It is possible to replace the default <code>id</code> and <code>pId</code> keys by providing object to <code>treeDataSimpleMode</code></td>
<td>false|object\\&lt;{ id: string, pId: string, rootPId: null }&gt;</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeDefaultExpandAll</td>
<td>Whether to expand all treeNodes by default</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeDefaultExpandedKeys</td>
<td>Default expanded treeNodes</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeExpandedKeys(v-model)</td>
<td>Set expanded keys</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeIcon</td>
<td>Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to <code>true</code></td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeLine</td>
<td>Show the line. Ref <a href="/components/tree/#components-tree-demo-line">Tree - showLine</a></td>
<td>boolean | object</td>
<td>false</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>treeNodeFilterProp</td>
<td>Will be used for filtering if <code>filterTreeNode</code> returns true</td>
<td>string</td>
<td>'value'</td>
<td></td>
<td></td>
</tr>
<tr>
<td>treeNodeLabelProp</td>
<td>Will render as content of select</td>
<td>string</td>
<td>'title'</td>
<td></td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>To set the current selected treeNode(s).</td>
<td>string|string[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>virtual</td>
<td>Disable virtual scroll when set to false</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Events">Events <a class="header-anchor" href="#Events">
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
<td>A callback function, can be executed when selected treeNodes or input value change</td>
<td>function(value, label, extra)</td>
<td></td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>Called when dropdown open</td>
<td>function(open)</td>
<td>3.0</td>
</tr>
<tr>
<td>search</td>
<td>A callback function, can be executed when the search input changes.</td>
<td>function(value: string)</td>
<td></td>
</tr>
<tr>
<td>select</td>
<td>A callback function, can be executed when you select a treeNode.</td>
<td>function(value, node, extra)</td>
<td></td>
</tr>
<tr>
<td>treeExpand</td>
<td>A callback function, can be executed when treeNode expanded</td>
<td>function(expandedKeys)</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Tree-Methods">Tree Methods <a class="header-anchor" href="#Tree-Methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<h3 id="TreeNode-props">TreeNode props <a class="header-anchor" href="#TreeNode-props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>We recommend you to use <code>treeData</code> rather than <code>TreeNode</code>, to avoid the trouble of manual construction.</p>
</blockquote>
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
<td>checkable</td>
<td>When Tree is checkable, set TreeNode display Checkbox or not</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disableCheckbox</td>
<td>Disables the checkbox of the treeNode</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled or not</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>isLeaf</td>
<td>Leaf node or not</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td>Required property, should be unique in the tree</td>
<td>string | number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>selectable</td>
<td>can be selected</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>Content showed on the treeNodes</td>
<td>string</td>
<td>'---'</td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>Will be treated as <code>treeNodeFilterProp</code> by default, should be unique in the tree</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="How-to-get-parent-node-in-onChange">How to get parent node in onChange? <a class="header-anchor" href="#How-to-get-parent-node-in-onChange">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>We don't provide this since performance consideration.</p>
`,lastUpdated:1701878243962}},qn={class:"markdown"},Qn=H('<p>Tree selection control.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p><code>TreeSelect</code> is similar to <code>Select</code>, but the values are provided in a tree like structure. Any data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Tree-props">Tree props <a class="header-anchor" href="#Tree-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th><th></th></tr></thead><tbody><tr><td>allowClear</td><td>Whether allow clear</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>defaultValue</td><td>To set the initial selected treeNode(s).</td><td>string|string[]</td><td>-</td><td></td><td></td></tr><tr><td>disabled</td><td>Disabled or not</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>dropdownClassName</td><td>className of dropdown menu</td><td>string</td><td>-</td><td></td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>Determine whether the dropdown menu and the select input are the same width. Default set <code>min-width</code> same as input. Will ignore when value less than select width. <code>false</code> will disable virtual scroll</td><td>boolean | number</td><td>true</td><td></td><td></td></tr><tr><td>dropdownStyle</td><td>To set the style of the dropdown menu</td><td>object</td><td>-</td><td></td><td></td></tr><tr><td>fieldNames</td><td>Replace the title,value, key and children fields in treeNode with the corresponding fields in treeData</td><td>object</td><td>{children:&#39;children&#39;, label:&#39;title&#39;, key:&#39;key&#39;, value: &#39;value&#39; }</td><td></td><td>3.0.0</td></tr><tr><td>filterTreeNode</td><td>Whether to filter treeNodes by input value. The value of <code>treeNodeFilterProp</code> is used for filtering by default.</td><td>boolean|Function(inputValue: string, treeNode: TreeNode) (should return boolean)</td><td>Function</td><td></td><td></td></tr><tr><td>getPopupContainer</td><td>To set the container of the dropdown menu. The default is to create a <code>div</code> element in <code>body</code>, you can reset it to the scrolling area and make a relative reposition.</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td><td></td></tr><tr><td>labelInValue</td><td>whether to embed label in value, turn the format of value from <code>string</code> to <code>{value: string, label: VNode, halfChecked: string[]}</code></td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>listHeight</td><td>Config popup height</td><td>number</td><td>256</td><td></td><td></td></tr><tr><td>loadData</td><td>Load data asynchronously.</td><td>function(node)</td><td>-</td><td></td><td></td></tr><tr><td>maxTagCount</td><td>Max tag count to show</td><td>number</td><td>-</td><td></td><td></td></tr><tr><td>maxTagPlaceholder</td><td>Placeholder for not showing tags</td><td>slot/function(omittedValues)</td><td>-</td><td></td><td></td></tr><tr><td>multiple</td><td>Support multiple or not, will be <code>true</code> when enable <code>treeCheckable</code>.</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>notFoundContent</td><td>Specify content to show when no result matches</td><td>slot</td><td><code>Not Found</code></td><td></td><td></td></tr><tr><td>placeholder</td><td>Placeholder of the select input</td><td>string|slot</td><td>-</td><td></td><td></td></tr><tr><td>replaceFields</td><td>Replace the title,value, key and children fields in treeNode with the corresponding fields in treeData</td><td>object</td><td>{ children:&#39;children&#39;, label:&#39;title&#39;, value: &#39;value&#39; }</td><td></td><td>1.6.1 (3.0.0 deprecated)</td></tr><tr><td>searchPlaceholder</td><td>Placeholder of the search input</td><td>string|slot</td><td>-</td><td></td><td></td></tr><tr><td>searchValue(v-model)</td><td>work with <code>search</code> event to make search value controlled.</td><td>string</td><td>-</td><td></td><td></td></tr><tr><td>showCheckedStrategy</td><td>The way show selected item in box. <strong>Default:</strong> just show child nodes. <strong><code>TreeSelect.SHOW_ALL</code>:</strong> show all checked treeNodes (include parent treeNode). <strong><code>TreeSelect.SHOW_PARENT</code>:</strong> show checked treeNodes (just show parent treeNode).</td><td>enum { TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }</td><td>TreeSelect.SHOW_CHILD</td><td></td><td></td></tr><tr><td>showSearch</td><td>Whether to display a search input in the dropdown menu(valid only in the single mode)</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>size</td><td>To set the size of the select input, options: <code>large</code> <code>small</code></td><td>string</td><td>&#39;default&#39;</td><td></td><td></td></tr><tr><td>suffixIcon</td><td>The custom suffix icon</td><td>VNode | slot</td><td>-</td><td></td><td></td></tr><tr><td>tagRender</td><td>Customize tag render when <code>multiple</code></td><td>(props) =&gt; slot</td><td>-</td><td>3.0</td><td></td></tr><tr><td>title</td><td>custom title</td><td>slot</td><td></td><td>3.0.0</td><td></td></tr><tr><td>treeCheckable</td><td>Whether to show checkbox on the treeNodes</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeCheckStrictly</td><td>Whether to check nodes precisely (in the <code>checkable</code> mode), means parent and child nodes are not associated, and it will make <code>labelInValue</code> be true</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeData</td><td>Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)</td><td>array\\&lt;{ value, title, children, [disabled, disableCheckbox, selectable] }&gt;</td><td>[]</td><td></td><td></td></tr><tr><td>treeDataSimpleMode</td><td>Enable simple mode of treeData. Changes the <code>treeData</code> schema to: [{id:1, pId:0, value:&#39;1&#39;, title:&quot;test1&quot;,...},...] where pId is parent node&#39;s id). It is possible to replace the default <code>id</code> and <code>pId</code> keys by providing object to <code>treeDataSimpleMode</code></td><td>false|object\\&lt;{ id: string, pId: string, rootPId: null }&gt;</td><td>false</td><td></td><td></td></tr><tr><td>treeDefaultExpandAll</td><td>Whether to expand all treeNodes by default</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeDefaultExpandedKeys</td><td>Default expanded treeNodes</td><td>string[] | number[]</td><td>-</td><td></td><td></td></tr><tr><td>treeExpandedKeys(v-model)</td><td>Set expanded keys</td><td>string[] | number[]</td><td>-</td><td></td><td></td></tr><tr><td>treeIcon</td><td>Shows the icon before a TreeNode&#39;s title. There is no default style; you must set a custom style for it if set to <code>true</code></td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>treeLine</td><td>Show the line. Ref <a href="/components/tree/#components-tree-demo-line">Tree - showLine</a></td><td>boolean | object</td><td>false</td><td>3.0</td><td></td></tr><tr><td>treeNodeFilterProp</td><td>Will be used for filtering if <code>filterTreeNode</code> returns true</td><td>string</td><td>&#39;value&#39;</td><td></td><td></td></tr><tr><td>treeNodeLabelProp</td><td>Will render as content of select</td><td>string</td><td>&#39;title&#39;</td><td></td><td></td></tr><tr><td>value(v-model)</td><td>To set the current selected treeNode(s).</td><td>string|string[]</td><td>-</td><td></td><td></td></tr><tr><td>virtual</td><td>Disable virtual scroll when set to false</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr></tbody></table><h3 id="Events">Events <a class="header-anchor" href="#Events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>A callback function, can be executed when selected treeNodes or input value change</td><td>function(value, label, extra)</td><td></td></tr><tr><td>dropdownVisibleChange</td><td>Called when dropdown open</td><td>function(open)</td><td>3.0</td></tr><tr><td>search</td><td>A callback function, can be executed when the search input changes.</td><td>function(value: string)</td><td></td></tr><tr><td>select</td><td>A callback function, can be executed when you select a treeNode.</td><td>function(value, node, extra)</td><td></td></tr><tr><td>treeExpand</td><td>A callback function, can be executed when treeNode expanded</td><td>function(expandedKeys)</td><td></td></tr></tbody></table><h3 id="Tree-Methods">Tree Methods <a class="header-anchor" href="#Tree-Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td></tr><tr><td>focus()</td><td>get focus</td></tr></tbody></table><h3 id="TreeNode-props">TreeNode props <a class="header-anchor" href="#TreeNode-props"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>We recommend you to use <code>treeData</code> rather than <code>TreeNode</code>, to avoid the trouble of manual construction.</p></blockquote><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>checkable</td><td>When Tree is checkable, set TreeNode display Checkbox or not</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disableCheckbox</td><td>Disables the checkbox of the treeNode</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>Disabled or not</td><td>boolean</td><td>false</td><td></td></tr><tr><td>isLeaf</td><td>Leaf node or not</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>Required property, should be unique in the tree</td><td>string | number</td><td>-</td><td></td></tr><tr><td>selectable</td><td>can be selected</td><td>boolean</td><td>true</td><td></td></tr><tr><td>title</td><td>Content showed on the treeNodes</td><td>string</td><td>&#39;---&#39;</td><td></td></tr><tr><td>value</td><td>Will be treated as <code>treeNodeFilterProp</code> by default, should be unique in the tree</td><td>string</td><td>-</td><td></td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="How-to-get-parent-node-in-onChange">How to get parent node in onChange? <a class="header-anchor" href="#How-to-get-parent-node-in-onChange"><span aria-hidden="true" class="anchor">#</span></a></h3><p>We don&#39;t provide this since performance consideration.</p>',16),Mn=[Qn];function $n(a,s,i,A,g,I){return l(),h("article",qn,Mn)}var nt=m(_n,[["render",$n]]);const tt=b({CN:zn,US:nt,components:{Basic:X,Multiple:O,Checkable:nn,Suffix:on,Async:kn,Highlight:An,TreeLineVue:wn,VirtualScrollVue:Bn,CustomTagRenderVue:Fn,ReplaceFieldsVue:Dn},setup(){return{}}});function at(a,s,i,A,g,I){const p=o("Basic"),k=o("Multiple"),c=o("Checkable"),C=o("Suffix"),r=o("Async"),f=o("Highlight"),W=o("TreeLineVue"),B=o("VirtualScrollVue"),S=o("CustomTagRenderVue"),N=o("ReplaceFieldsVue"),x=o("demo-sort");return l(),v(x,null,{default:e(()=>[u(p),u(k),u(c),u(C),u(r),u(f),u(W),u(B),u(S),u(N)]),_:1})}var ct=m(tt,[["render",at]]);export{ct as default};

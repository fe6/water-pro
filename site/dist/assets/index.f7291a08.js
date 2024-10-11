import{d as f,k as I,w as G,aq as u,J as C,bN as y,bO as p,e as k,E as b,bP as Z,H as s,F as v,G as n,ca as S,c0 as z,a3 as H,cj as j,cb as Y}from"./vendor.0f0e4632.js";import{_ as m}from"./index.f6b32fa6.js";import{I as M}from"./byted-smiling-face.ff1d9dc6.js";import{I as U}from"./antd-smile.b3c3491f.js";const O=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]}],Q=f({setup(){const t=I(["0-0-0","0-0-1"]),a=I(["0-0-0","0-0-1"]),c=I(["0-0-0","0-0-1"]);return G(t,()=>{console.log("expandedKeys",t)}),G(a,()=>{console.log("selectedKeys",a)}),G(c,()=>{console.log("checkedKeys",c)}),{treeData:O,expandedKeys:t,selectedKeys:a,checkedKeys:c}}}),_={key:0,style:{color:"#1890ff"}},q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checkedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" treeData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        disabled`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(" disableCheckbox"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sss'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),$=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checkedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
    disabled`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
      disableCheckbox`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sss'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function nn(t,a,c,r,o,i){const d=u("a-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/tree/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgdi1tb2RlbDpjaGVja2VkS2V5cz0iY2hlY2tlZEtleXMiCiAgICBjaGVja2FibGUKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdGl0bGUsIGtleSB9Ij4KICAgICAgPHNwYW4gdi1pZj0ia2V5ID09PSAnMC0wLTEtMCciIHN0eWxlPSJjb2xvcjogIzE4OTBmZiI+e3sgdGl0bGUgfX08L3NwYW4+CiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3sgdGl0bGUgfX08L3RlbXBsYXRlPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtdHJlZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVHJlZVByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwoKY29uc3QgdHJlZURhdGE6IFRyZWVQcm9wc1sndHJlZURhdGEnXSA9IFsKICB7CiAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgIGtleTogJzAtMCcsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICBrZXk6ICcwLTAtMCcsCiAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsgdGl0bGU6ICdsZWFmJywga2V5OiAnMC0wLTAtMCcsIGRpc2FibGVDaGVja2JveDogdHJ1ZSB9LAogICAgICAgICAgeyB0aXRsZTogJ2xlYWYnLCBrZXk6ICcwLTAtMC0xJyB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgIGtleTogJzAtMC0xJywKICAgICAgICBjaGlsZHJlbjogW3sga2V5OiAnMC0wLTEtMCcsIHRpdGxlOiAnc3NzJyB9XSwKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICBjb25zdCBjaGVja2VkS2V5cyA9IHJlZjxzdHJpbmdbXT4oWycwLTAtMCcsICcwLTAtMSddKTsKICAgIHdhdGNoKGV4cGFuZGVkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnZXhwYW5kZWRLZXlzJywgZXhwYW5kZWRLZXlzKTsKICAgIH0pOwogICAgd2F0Y2goc2VsZWN0ZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZEtleXMnLCBzZWxlY3RlZEtleXMpOwogICAgfSk7CiAgICB3YXRjaChjaGVja2VkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7CiAgICB9KTsKCiAgICByZXR1cm4gewogICAgICB0cmVlRGF0YSwKICAgICAgZXhwYW5kZWRLZXlzLAogICAgICBzZWxlY3RlZEtleXMsCiAgICAgIGNoZWNrZWRLZXlzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgdi1tb2RlbDpjaGVja2VkS2V5cz0iY2hlY2tlZEtleXMiCiAgICBjaGVja2FibGUKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgdGl0bGUsIGtleSB9Ij4KICAgICAgPHNwYW4gdi1pZj0ia2V5ID09PSAnMC0wLTEtMCciIHN0eWxlPSJjb2xvcjogIzE4OTBmZiI+e3sgdGl0bGUgfX08L3NwYW4+CiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3sgdGl0bGUgfX08L3RlbXBsYXRlPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtdHJlZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKY29uc3QgdHJlZURhdGEgPSBbewogIHRpdGxlOiAncGFyZW50IDEnLAogIGtleTogJzAtMCcsCiAgY2hpbGRyZW46IFt7CiAgICB0aXRsZTogJ3BhcmVudCAxLTAnLAogICAga2V5OiAnMC0wLTAnLAogICAgZGlzYWJsZWQ6IHRydWUsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAga2V5OiAnMC0wLTAtMCcsCiAgICAgIGRpc2FibGVDaGVja2JveDogdHJ1ZSwKICAgIH0sIHsKICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAga2V5OiAnMC0wLTAtMScsCiAgICB9XSwKICB9LCB7CiAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAga2V5OiAnMC0wLTEnLAogICAgY2hpbGRyZW46IFt7CiAgICAgIGtleTogJzAtMC0xLTAnLAogICAgICB0aXRsZTogJ3NzcycsCiAgICB9XSwKICB9XSwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWYoWycwLTAtMCcsICcwLTAtMSddKTsKICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJlZihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgY29uc3QgY2hlY2tlZEtleXMgPSByZWYoWycwLTAtMCcsICcwLTAtMSddKTsKICAgIHdhdGNoKGV4cGFuZGVkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnZXhwYW5kZWRLZXlzJywgZXhwYW5kZWRLZXlzKTsKICAgIH0pOwogICAgd2F0Y2goc2VsZWN0ZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZEtleXMnLCBzZWxlY3RlZEtleXMpOwogICAgfSk7CiAgICB3YXRjaChjaGVja2VkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHRyZWVEYXRhLAogICAgICBleHBhbmRlZEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgY2hlY2tlZEtleXMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:p(()=>[k(d,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=e=>t.expandedKeys=e),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=e=>t.selectedKeys=e),checkedKeys:t.checkedKeys,"onUpdate:checkedKeys":a[2]||(a[2]=e=>t.checkedKeys=e),checkable:"","tree-data":t.treeData},{title:p(({title:e,key:g})=>[g==="0-0-1-0"?(C(),b("span",_,Z(e),1)):(C(),b(v,{key:1},[s(Z(e),1)],64))]),_:1},8,["expandedKeys","selectedKeys","checkedKeys","tree-data"])]),htmlCode:p(()=>[q]),jsVersionHtml:p(()=>[$]),_:1},8,["jsfiddle"])}var sn=m(Q,[["render",nn]]);const tn=3,an=2,en=1,x=[],L=(t,a,c)=>{const r=a||"0",o=c||x,i=[];for(let l=0;l<tn;l++){const e=`${r}-${l}`;o.push({title:e,key:e}),l<an&&i.push(e)}if(t<0)return o;const d=t-1;i.forEach((l,e)=>(o[e].children=[],L(d,l,o[e].children)))};L(en);const on=f({setup(){const t=I(["0-0","0-0-0","0-0-0-0"]),a=I(x);return{expandedKeys:t,gData:a,onDragEnter:o=>{console.log(o)},onDrop:o=>{console.log(o);const i=o.node.key,d=o.dragNode.key,l=o.node.pos.split("-"),e=o.dropPosition-Number(l[l.length-1]),g=(h,K,W)=>{h.forEach((B,V)=>{if(B.key===K)return W(B,V,h);if(B.children)return g(B.children,K,W)})},w=[...a.value];let A;if(g(w,d,(h,K,W)=>{W.splice(K,1),A=h}),!o.dropToGap)g(w,i,h=>{h.children=h.children||[],h.children.unshift(A)});else if((o.node.children||[]).length>0&&o.node.expanded&&e===1)g(w,i,h=>{h.children=h.children||[],h.children.unshift(A)});else{let h=[],K=0;g(w,i,(W,B,V)=>{h=V,K=B}),e===-1?h.splice(K,0,A):h.splice(K+1,0,A)}a.value=w}}}}),cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("draggable-tree"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"draggable"),s(`
    `),n("span",{class:"token attr-name"},"block-node"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@dragenter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDragEnter"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDrop"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(`
  AntTreeNodeDragEnterEvent`),n("span",{class:"token punctuation"},","),s(`
  AntTreeNodeDropEvent`),n("span",{class:"token punctuation"},","),s(`
  TreeProps`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro/es/tree'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" generateData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("_level"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},","),s(" _preKey"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" _tns"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" preKey "),n("span",{class:"token operator"},"="),s(" _preKey "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" tns "),n("span",{class:"token operator"},"="),s(" _tns "),n("span",{class:"token operator"},"||"),s(" genData"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" x"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("preKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    tns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(" key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_level "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" tns"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" level "),n("span",{class:"token operator"},"="),s(" _level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    tns`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" tns"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
type TreeDataItem `),n("span",{class:"token operator"},"="),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),s("string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" gData "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onDragEnter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("info"),n("span",{class:"token operator"},":"),s(" AntTreeNodeDragEnterEvent")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// expandedKeys \u9700\u8981\u5C55\u5F00\u65F6"),s(`
      `),n("span",{class:"token comment"},"// expandedKeys.value = info.expandedKeys;"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onDrop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("info"),n("span",{class:"token operator"},":"),s(" AntTreeNodeDropEvent")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dropKey "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dragKey "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("dragNode"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dropPos "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("pos"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dropPosition "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("dropPosition "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token function"},"Number"),n("span",{class:"token punctuation"},"("),s("dropPos"),n("span",{class:"token punctuation"},"["),s("dropPos"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" loop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},","),s(" callback"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" callback"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("gData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// Find dragObject"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" dragObj"),n("span",{class:"token operator"},":"),s(" TreeDataItem"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dragKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token operator"},":"),s(" TreeDataItem"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dragObj `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("info"),n("span",{class:"token punctuation"},"."),s("dropToGap"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Drop on the content"),s(`
        `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token operator"},":"),s(" TreeDataItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          item`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token comment"},"/// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E"),s(`
          item`),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),s("dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token comment"},"// Has children"),s(`
        info`),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("expanded "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token comment"},"// Is expanded"),s(`
        dropPosition `),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"// On the bottom gap"),s(`
      `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token operator"},":"),s(" TreeDataItem")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          item`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token comment"},"// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E"),s(`
          item`),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),s("dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" ar"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("_item"),n("span",{class:"token operator"},":"),s(" TreeDataItem"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ar `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
          i `),n("span",{class:"token operator"},"="),s(" index"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dropPosition "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      gData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      gData`),n("span",{class:"token punctuation"},","),s(`
      onDragEnter`),n("span",{class:"token punctuation"},","),s(`
      onDrop`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("draggable-tree"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"draggable"),s(`
    `),n("span",{class:"token attr-name"},"block-node"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@dragenter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDragEnter"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDrop"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"generateData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("_level"),n("span",{class:"token punctuation"},","),s(" _preKey"),n("span",{class:"token punctuation"},","),s(" _tns")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" preKey "),n("span",{class:"token operator"},"="),s(" _preKey "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" tns "),n("span",{class:"token operator"},"="),s(" _tns "),n("span",{class:"token operator"},"||"),s(" genData"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" x"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("preKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    tns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_level "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" tns"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" level "),n("span",{class:"token operator"},"="),s(" _level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    tns`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" tns"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" gData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onDragEnter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// expandedKeys \u9700\u8981\u5C55\u5F00\u65F6"),s(`
      `),n("span",{class:"token comment"},"// expandedKeys.value = info.expandedKeys;"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onDrop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dropKey "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dragKey "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("dragNode"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dropPos "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("pos"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" dropPosition "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("dropPosition "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token function"},"Number"),n("span",{class:"token punctuation"},"("),s("dropPos"),n("span",{class:"token punctuation"},"["),s("dropPos"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"loop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" callback")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`

          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" callback"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("gData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Find dragObject"),s(`

      `),n("span",{class:"token keyword"},"let"),s(" dragObj"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dragKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" arr")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dragObj `),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("info"),n("span",{class:"token punctuation"},"."),s("dropToGap"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Drop on the content"),s(`
        `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          item`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E"),s(`

          item`),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),s("dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token comment"},"// Has children"),s(`
      info`),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},"."),s("expanded "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token comment"},"// Is expanded"),s(`
      dropPosition `),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"// On the bottom gap"),s(`
      `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          item`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E"),s(`

          item`),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),s("dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" ar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropKey"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("_item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" arr")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ar `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
          i `),n("span",{class:"token operator"},"="),s(" index"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dropPosition "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
          ar`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dragObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      gData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      gData`),n("span",{class:"token punctuation"},","),s(`
      onDragEnter`),n("span",{class:"token punctuation"},","),s(`
      onDrop`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function ln(t,a,c,r,o,i){const d=u("a-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.",cn:"\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.</p>
`,order:2,title:{"zh-CN":"\u62D6\u52A8\u793A\u4F8B","en-US":"draggable"},relativePath:"components/tree/demo/draggable.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIGNsYXNzPSJkcmFnZ2FibGUtdHJlZSIKICAgIGRyYWdnYWJsZQogICAgYmxvY2stbm9kZQogICAgOnRyZWUtZGF0YT0iZ0RhdGEiCiAgICBAZHJhZ2VudGVyPSJvbkRyYWdFbnRlciIKICAgIEBkcm9wPSJvbkRyb3AiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgewogIEFudFRyZWVOb2RlRHJhZ0VudGVyRXZlbnQsCiAgQW50VHJlZU5vZGVEcm9wRXZlbnQsCiAgVHJlZVByb3BzLAp9IGZyb20gJ0BmZTYvd2F0ZXItcHJvL2VzL3RyZWUnOwoKY29uc3QgeCA9IDM7CmNvbnN0IHkgPSAyOwpjb25zdCB6ID0gMTsKY29uc3QgZ2VuRGF0YSA9IFtdOwoKY29uc3QgZ2VuZXJhdGVEYXRhID0gKF9sZXZlbDogbnVtYmVyLCBfcHJlS2V5Pzogc3RyaW5nLCBfdG5zPzogVHJlZVByb3BzWyd0cmVlRGF0YSddKSA9PiB7CiAgY29uc3QgcHJlS2V5ID0gX3ByZUtleSB8fCAnMCc7CiAgY29uc3QgdG5zID0gX3RucyB8fCBnZW5EYXRhOwoKICBjb25zdCBjaGlsZHJlbiA9IFtdOwogIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSsrKSB7CiAgICBjb25zdCBrZXkgPSBgJHtwcmVLZXl9LSR7aX1gOwogICAgdG5zLnB1c2goeyB0aXRsZToga2V5LCBrZXkgfSk7CiAgICBpZiAoaSA8IHkpIHsKICAgICAgY2hpbGRyZW4ucHVzaChrZXkpOwogICAgfQogIH0KICBpZiAoX2xldmVsIDwgMCkgewogICAgcmV0dXJuIHRuczsKICB9CiAgY29uc3QgbGV2ZWwgPSBfbGV2ZWwgLSAxOwogIGNoaWxkcmVuLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHsKICAgIHRuc1tpbmRleF0uY2hpbGRyZW4gPSBbXTsKICAgIHJldHVybiBnZW5lcmF0ZURhdGEobGV2ZWwsIGtleSwgdG5zW2luZGV4XS5jaGlsZHJlbik7CiAgfSk7Cn07CmdlbmVyYXRlRGF0YSh6KTsKdHlwZSBUcmVlRGF0YUl0ZW0gPSBUcmVlUHJvcHNbJ3RyZWVEYXRhJ11bbnVtYmVyXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZjwoc3RyaW5nIHwgbnVtYmVyKVtdPihbJzAtMCcsICcwLTAtMCcsICcwLTAtMC0wJ10pOwogICAgY29uc3QgZ0RhdGEgPSByZWY8VHJlZVByb3BzWyd0cmVlRGF0YSddPihnZW5EYXRhKTsKICAgIGNvbnN0IG9uRHJhZ0VudGVyID0gKGluZm86IEFudFRyZWVOb2RlRHJhZ0VudGVyRXZlbnQpID0+IHsKICAgICAgY29uc29sZS5sb2coaW5mbyk7CiAgICAgIC8vIGV4cGFuZGVkS2V5cyDpnIDopoHlsZXlvIDml7YKICAgICAgLy8gZXhwYW5kZWRLZXlzLnZhbHVlID0gaW5mby5leHBhbmRlZEtleXM7CiAgICB9OwoKICAgIGNvbnN0IG9uRHJvcCA9IChpbmZvOiBBbnRUcmVlTm9kZURyb3BFdmVudCkgPT4gewogICAgICBjb25zb2xlLmxvZyhpbmZvKTsKICAgICAgY29uc3QgZHJvcEtleSA9IGluZm8ubm9kZS5rZXk7CiAgICAgIGNvbnN0IGRyYWdLZXkgPSBpbmZvLmRyYWdOb2RlLmtleTsKICAgICAgY29uc3QgZHJvcFBvcyA9IGluZm8ubm9kZS5wb3Muc3BsaXQoJy0nKTsKICAgICAgY29uc3QgZHJvcFBvc2l0aW9uID0gaW5mby5kcm9wUG9zaXRpb24gLSBOdW1iZXIoZHJvcFBvc1tkcm9wUG9zLmxlbmd0aCAtIDFdKTsKICAgICAgY29uc3QgbG9vcCA9IChkYXRhOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10sIGtleTogc3RyaW5nIHwgbnVtYmVyLCBjYWxsYmFjazogYW55KSA9PiB7CiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gewogICAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBrZXkpIHsKICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGluZGV4LCBkYXRhKTsKICAgICAgICAgIH0KICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7CiAgICAgICAgICAgIHJldHVybiBsb29wKGl0ZW0uY2hpbGRyZW4sIGtleSwgY2FsbGJhY2spOwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9OwogICAgICBjb25zdCBkYXRhID0gWy4uLmdEYXRhLnZhbHVlXTsKCiAgICAgIC8vIEZpbmQgZHJhZ09iamVjdAogICAgICBsZXQgZHJhZ09iajogVHJlZURhdGFJdGVtOwogICAgICBsb29wKGRhdGEsIGRyYWdLZXksIChpdGVtOiBUcmVlRGF0YUl0ZW0sIGluZGV4OiBudW1iZXIsIGFycjogVHJlZVByb3BzWyd0cmVlRGF0YSddKSA9PiB7CiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7CiAgICAgICAgZHJhZ09iaiA9IGl0ZW07CiAgICAgIH0pOwogICAgICBpZiAoIWluZm8uZHJvcFRvR2FwKSB7CiAgICAgICAgLy8gRHJvcCBvbiB0aGUgY29udGVudAogICAgICAgIGxvb3AoZGF0YSwgZHJvcEtleSwgKGl0ZW06IFRyZWVEYXRhSXRlbSkgPT4gewogICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gfHwgW107CiAgICAgICAgICAvLy8gd2hlcmUgdG8gaW5zZXJ0IOekuuS+i+a3u+WKoOWIsOWktOmDqO+8jOWPr+S7peaYr+maj+aEj+S9jee9rgogICAgICAgICAgaXRlbS5jaGlsZHJlbi51bnNoaWZ0KGRyYWdPYmopOwogICAgICAgIH0pOwogICAgICB9IGVsc2UgaWYgKAogICAgICAgIChpbmZvLm5vZGUuY2hpbGRyZW4gfHwgW10pLmxlbmd0aCA+IDAgJiYgLy8gSGFzIGNoaWxkcmVuCiAgICAgICAgaW5mby5ub2RlLmV4cGFuZGVkICYmIC8vIElzIGV4cGFuZGVkCiAgICAgICAgZHJvcFBvc2l0aW9uID09PSAxIC8vIE9uIHRoZSBib3R0b20gZ2FwCiAgICAgICkgewogICAgICAgIGxvb3AoZGF0YSwgZHJvcEtleSwgKGl0ZW06IFRyZWVEYXRhSXRlbSkgPT4gewogICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gfHwgW107CiAgICAgICAgICAvLyB3aGVyZSB0byBpbnNlcnQg56S65L6L5re75Yqg5Yiw5aS06YOo77yM5Y+v5Lul5piv6ZqP5oSP5L2N572uCiAgICAgICAgICBpdGVtLmNoaWxkcmVuLnVuc2hpZnQoZHJhZ09iaik7CiAgICAgICAgfSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgbGV0IGFyOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10gPSBbXTsKICAgICAgICBsZXQgaSA9IDA7CiAgICAgICAgbG9vcChkYXRhLCBkcm9wS2V5LCAoX2l0ZW06IFRyZWVEYXRhSXRlbSwgaW5kZXg6IG51bWJlciwgYXJyOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10pID0+IHsKICAgICAgICAgIGFyID0gYXJyOwogICAgICAgICAgaSA9IGluZGV4OwogICAgICAgIH0pOwogICAgICAgIGlmIChkcm9wUG9zaXRpb24gPT09IC0xKSB7CiAgICAgICAgICBhci5zcGxpY2UoaSwgMCwgZHJhZ09iaik7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIGFyLnNwbGljZShpICsgMSwgMCwgZHJhZ09iaik7CiAgICAgICAgfQogICAgICB9CiAgICAgIGdEYXRhLnZhbHVlID0gZGF0YTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBleHBhbmRlZEtleXMsCiAgICAgIGdEYXRhLAogICAgICBvbkRyYWdFbnRlciwKICAgICAgb25Ecm9wLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIGNsYXNzPSJkcmFnZ2FibGUtdHJlZSIKICAgIGRyYWdnYWJsZQogICAgYmxvY2stbm9kZQogICAgOnRyZWUtZGF0YT0iZ0RhdGEiCiAgICBAZHJhZ2VudGVyPSJvbkRyYWdFbnRlciIKICAgIEBkcm9wPSJvbkRyb3AiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCB4ID0gMzsKY29uc3QgeSA9IDI7CmNvbnN0IHogPSAxOwpjb25zdCBnZW5EYXRhID0gW107Cgpjb25zdCBnZW5lcmF0ZURhdGEgPSAoX2xldmVsLCBfcHJlS2V5LCBfdG5zKSA9PiB7CiAgY29uc3QgcHJlS2V5ID0gX3ByZUtleSB8fCAnMCc7CiAgY29uc3QgdG5zID0gX3RucyB8fCBnZW5EYXRhOwogIGNvbnN0IGNoaWxkcmVuID0gW107CgogIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSsrKSB7CiAgICBjb25zdCBrZXkgPSBgJHtwcmVLZXl9LSR7aX1gOwogICAgdG5zLnB1c2goewogICAgICB0aXRsZToga2V5LAogICAgICBrZXksCiAgICB9KTsKCiAgICBpZiAoaSA8IHkpIHsKICAgICAgY2hpbGRyZW4ucHVzaChrZXkpOwogICAgfQogIH0KCiAgaWYgKF9sZXZlbCA8IDApIHsKICAgIHJldHVybiB0bnM7CiAgfQoKICBjb25zdCBsZXZlbCA9IF9sZXZlbCAtIDE7CiAgY2hpbGRyZW4uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4gewogICAgdG5zW2luZGV4XS5jaGlsZHJlbiA9IFtdOwogICAgcmV0dXJuIGdlbmVyYXRlRGF0YShsZXZlbCwga2V5LCB0bnNbaW5kZXhdLmNoaWxkcmVuKTsKICB9KTsKfTsKCmdlbmVyYXRlRGF0YSh6KTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZihbJzAtMCcsICcwLTAtMCcsICcwLTAtMC0wJ10pOwogICAgY29uc3QgZ0RhdGEgPSByZWYoZ2VuRGF0YSk7CgogICAgY29uc3Qgb25EcmFnRW50ZXIgPSBpbmZvID0+IHsKICAgICAgY29uc29sZS5sb2coaW5mbyk7IC8vIGV4cGFuZGVkS2V5cyDpnIDopoHlsZXlvIDml7YKICAgICAgLy8gZXhwYW5kZWRLZXlzLnZhbHVlID0gaW5mby5leHBhbmRlZEtleXM7CiAgICB9OwoKICAgIGNvbnN0IG9uRHJvcCA9IGluZm8gPT4gewogICAgICBjb25zb2xlLmxvZyhpbmZvKTsKICAgICAgY29uc3QgZHJvcEtleSA9IGluZm8ubm9kZS5rZXk7CiAgICAgIGNvbnN0IGRyYWdLZXkgPSBpbmZvLmRyYWdOb2RlLmtleTsKICAgICAgY29uc3QgZHJvcFBvcyA9IGluZm8ubm9kZS5wb3Muc3BsaXQoJy0nKTsKICAgICAgY29uc3QgZHJvcFBvc2l0aW9uID0gaW5mby5kcm9wUG9zaXRpb24gLSBOdW1iZXIoZHJvcFBvc1tkcm9wUG9zLmxlbmd0aCAtIDFdKTsKCiAgICAgIGNvbnN0IGxvb3AgPSAoZGF0YSwga2V5LCBjYWxsYmFjaykgPT4gewogICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHsKICAgICAgICAgIGlmIChpdGVtLmtleSA9PT0ga2V5KSB7CiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhpdGVtLCBpbmRleCwgZGF0YSk7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHsKICAgICAgICAgICAgcmV0dXJuIGxvb3AoaXRlbS5jaGlsZHJlbiwga2V5LCBjYWxsYmFjayk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH07CgogICAgICBjb25zdCBkYXRhID0gWy4uLmdEYXRhLnZhbHVlXTsgLy8gRmluZCBkcmFnT2JqZWN0CgogICAgICBsZXQgZHJhZ09iajsKICAgICAgbG9vcChkYXRhLCBkcmFnS2V5LCAoaXRlbSwgaW5kZXgsIGFycikgPT4gewogICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpOwogICAgICAgIGRyYWdPYmogPSBpdGVtOwogICAgICB9KTsKCiAgICAgIGlmICghaW5mby5kcm9wVG9HYXApIHsKICAgICAgICAvLyBEcm9wIG9uIHRoZSBjb250ZW50CiAgICAgICAgbG9vcChkYXRhLCBkcm9wS2V5LCBpdGVtID0+IHsKICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuIHx8IFtdOyAvLy8gd2hlcmUgdG8gaW5zZXJ0IOekuuS+i+a3u+WKoOWIsOWktOmDqO+8jOWPr+S7peaYr+maj+aEj+S9jee9rgoKICAgICAgICAgIGl0ZW0uY2hpbGRyZW4udW5zaGlmdChkcmFnT2JqKTsKICAgICAgICB9KTsKICAgICAgfSBlbHNlIGlmICgoaW5mby5ub2RlLmNoaWxkcmVuIHx8IFtdKS5sZW5ndGggPiAwICYmIC8vIEhhcyBjaGlsZHJlbgogICAgICBpbmZvLm5vZGUuZXhwYW5kZWQgJiYgLy8gSXMgZXhwYW5kZWQKICAgICAgZHJvcFBvc2l0aW9uID09PSAxIC8vIE9uIHRoZSBib3R0b20gZ2FwCiAgICAgICkgewogICAgICAgIGxvb3AoZGF0YSwgZHJvcEtleSwgaXRlbSA9PiB7CiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbiB8fCBbXTsgLy8gd2hlcmUgdG8gaW5zZXJ0IOekuuS+i+a3u+WKoOWIsOWktOmDqO+8jOWPr+S7peaYr+maj+aEj+S9jee9rgoKICAgICAgICAgIGl0ZW0uY2hpbGRyZW4udW5zaGlmdChkcmFnT2JqKTsKICAgICAgICB9KTsKICAgICAgfSBlbHNlIHsKICAgICAgICBsZXQgYXIgPSBbXTsKICAgICAgICBsZXQgaSA9IDA7CiAgICAgICAgbG9vcChkYXRhLCBkcm9wS2V5LCAoX2l0ZW0sIGluZGV4LCBhcnIpID0+IHsKICAgICAgICAgIGFyID0gYXJyOwogICAgICAgICAgaSA9IGluZGV4OwogICAgICAgIH0pOwoKICAgICAgICBpZiAoZHJvcFBvc2l0aW9uID09PSAtMSkgewogICAgICAgICAgYXIuc3BsaWNlKGksIDAsIGRyYWdPYmopOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBhci5zcGxpY2UoaSArIDEsIDAsIGRyYWdPYmopOwogICAgICAgIH0KICAgICAgfQoKICAgICAgZ0RhdGEudmFsdWUgPSBkYXRhOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBleHBhbmRlZEtleXMsCiAgICAgIGdEYXRhLAogICAgICBvbkRyYWdFbnRlciwKICAgICAgb25Ecm9wLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[k(d,{class:"draggable-tree",draggable:"","block-node":"","tree-data":t.gData,onDragenter:t.onDragEnter,onDrop:t.onDrop},null,8,["tree-data","onDragenter","onDrop"])]),htmlCode:p(()=>[cn]),jsVersionHtml:p(()=>[pn]),_:1},8,["jsfiddle"])}var un=m(on,[["render",ln]]);const kn=f({setup(){const t=I([]),a=I([]),c=I([{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}]);return{expandedKeys:t,selectedKeys:a,treeData:c,onLoadData:o=>new Promise(i=>{if(o.dataRef.children){i();return}setTimeout(()=>{o.dataRef.children=[{title:"Child Node",key:`${o.eventKey}-0`},{title:"Child Node",key:`${o.eventKey}-1`}],c.value=[...c.value],i()},1e3)})}}}),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":load-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onLoadData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@Fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Tree Node'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(" isLeaf"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" onLoadData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'loadData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"treeNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("treeNode"),n("span",{class:"token punctuation"},"."),s("dataRef"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          treeNode`),n("span",{class:"token punctuation"},"."),s("dataRef"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Child Node'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("treeNode"),n("span",{class:"token punctuation"},"."),s("eventKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Child Node'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("treeNode"),n("span",{class:"token punctuation"},"."),s("eventKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          treeData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("treeData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      onLoadData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":load-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onLoadData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Expand to load'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Tree Node'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
      isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onLoadData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"treeNode"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("treeNode"),n("span",{class:"token punctuation"},"."),s("dataRef"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          treeNode`),n("span",{class:"token punctuation"},"."),s("dataRef"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Child Node'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("treeNode"),n("span",{class:"token punctuation"},"."),s("eventKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Child Node'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("treeNode"),n("span",{class:"token punctuation"},"."),s("eventKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          treeData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("treeData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      onLoadData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function gn(t,a,c,r,o,i){const d=u("a-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"To load data asynchronously when click to expand a treeNode.",cn:"\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>To load data asynchronously when click to expand a treeNode.</p>
`,order:3,title:{"zh-CN":"\u5F02\u6B65\u6570\u636E\u52A0\u8F7D","en-US":"load data asynchronously"},relativePath:"components/tree/demo/dynamic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgOmxvYWQtZGF0YT0ib25Mb2FkRGF0YSIKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgVHJlZVByb3BzIH0gZnJvbSAnQEZlNi93YXRlci1wcm8nOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZjxzdHJpbmdbXT4oW10pOwogICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcmVmPHN0cmluZ1tdPihbXSk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZjxUcmVlUHJvcHNbJ3RyZWVEYXRhJ10+KFsKICAgICAgeyB0aXRsZTogJ0V4cGFuZCB0byBsb2FkJywga2V5OiAnMCcgfSwKICAgICAgeyB0aXRsZTogJ0V4cGFuZCB0byBsb2FkJywga2V5OiAnMScgfSwKICAgICAgeyB0aXRsZTogJ1RyZWUgTm9kZScsIGtleTogJzInLCBpc0xlYWY6IHRydWUgfSwKICAgIF0pOwogICAgY29uc3Qgb25Mb2FkRGF0YTogVHJlZVByb3BzWydsb2FkRGF0YSddID0gKHRyZWVOb2RlKSA9PiB7CiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gewogICAgICAgIGlmICh0cmVlTm9kZS5kYXRhUmVmLmNoaWxkcmVuKSB7CiAgICAgICAgICByZXNvbHZlKCk7CiAgICAgICAgICByZXR1cm47CiAgICAgICAgfQogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgdHJlZU5vZGUuZGF0YVJlZi5jaGlsZHJlbiA9IFsKICAgICAgICAgICAgeyB0aXRsZTogJ0NoaWxkIE5vZGUnLCBrZXk6IGAke3RyZWVOb2RlLmV2ZW50S2V5fS0wYCB9LAogICAgICAgICAgICB7IHRpdGxlOiAnQ2hpbGQgTm9kZScsIGtleTogYCR7dHJlZU5vZGUuZXZlbnRLZXl9LTFgIH0sCiAgICAgICAgICBdOwogICAgICAgICAgdHJlZURhdGEudmFsdWUgPSBbLi4udHJlZURhdGEudmFsdWVdOwogICAgICAgICAgcmVzb2x2ZSgpOwogICAgICAgIH0sIDEwMDApOwogICAgICB9KTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBleHBhbmRlZEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgdHJlZURhdGEsCiAgICAgIG9uTG9hZERhdGEsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgOmxvYWQtZGF0YT0ib25Mb2FkRGF0YSIKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZihbXSk7CiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSByZWYoW10pOwogICAgY29uc3QgdHJlZURhdGEgPSByZWYoW3sKICAgICAgdGl0bGU6ICdFeHBhbmQgdG8gbG9hZCcsCiAgICAgIGtleTogJzAnLAogICAgfSwgewogICAgICB0aXRsZTogJ0V4cGFuZCB0byBsb2FkJywKICAgICAga2V5OiAnMScsCiAgICB9LCB7CiAgICAgIHRpdGxlOiAnVHJlZSBOb2RlJywKICAgICAga2V5OiAnMicsCiAgICAgIGlzTGVhZjogdHJ1ZSwKICAgIH1dKTsKCiAgICBjb25zdCBvbkxvYWREYXRhID0gdHJlZU5vZGUgPT4gewogICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7CiAgICAgICAgaWYgKHRyZWVOb2RlLmRhdGFSZWYuY2hpbGRyZW4pIHsKICAgICAgICAgIHJlc29sdmUoKTsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgdHJlZU5vZGUuZGF0YVJlZi5jaGlsZHJlbiA9IFt7CiAgICAgICAgICAgIHRpdGxlOiAnQ2hpbGQgTm9kZScsCiAgICAgICAgICAgIGtleTogYCR7dHJlZU5vZGUuZXZlbnRLZXl9LTBgLAogICAgICAgICAgfSwgewogICAgICAgICAgICB0aXRsZTogJ0NoaWxkIE5vZGUnLAogICAgICAgICAgICBrZXk6IGAke3RyZWVOb2RlLmV2ZW50S2V5fS0xYCwKICAgICAgICAgIH1dOwogICAgICAgICAgdHJlZURhdGEudmFsdWUgPSBbLi4udHJlZURhdGEudmFsdWVdOwogICAgICAgICAgcmVzb2x2ZSgpOwogICAgICAgIH0sIDEwMDApOwogICAgICB9KTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgZXhwYW5kZWRLZXlzLAogICAgICBzZWxlY3RlZEtleXMsCiAgICAgIHRyZWVEYXRhLAogICAgICBvbkxvYWREYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[k(d,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=e=>t.expandedKeys=e),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=e=>t.selectedKeys=e),"load-data":t.onLoadData,"tree-data":t.treeData},null,8,["expandedKeys","selectedKeys","load-data","tree-data"])]),htmlCode:p(()=>[rn]),jsVersionHtml:p(()=>[dn]),_:1},8,["jsfiddle"])}var Cn=m(kn,[["render",gn]]);const In=3,An=2,hn=1,R=[],N=(t,a,c)=>{const r=a||"0",o=c||R,i=[];for(let l=0;l<In;l++){const e=`${r}-${l}`;o.push({title:e,key:e}),l<An&&i.push(e)}if(t<0)return o;const d=t-1;i.forEach((l,e)=>(o[e].children=[],N(d,l,o[e].children)))};N(hn);const J=[],T=t=>{for(let a=0;a<t.length;a++){const c=t[a],r=c.key;J.push({key:r,title:r}),c.children&&T(c.children)}};T(R);const X=(t,a)=>{let c;for(let r=0;r<a.length;r++){const o=a[r];o.children&&(o.children.some(i=>i.key===t)?c=o.key:X(t,o.children)&&(c=X(t,o.children)))}return c},yn=f({setup(){const t=I([]),a=I(""),c=I(!0),r=I(R),o=i=>{t.value=i,c.value=!1};return G(a,i=>{const d=J.map(l=>l.title.indexOf(i)>-1?X(l.key,r.value):null).filter((l,e,g)=>l&&g.indexOf(l)===e);t.value=d,a.value=i,c.value=!0}),{expandedKeys:t,searchValue:a,autoExpandParent:c,gData:r,onExpand:o}}}),mn={key:0},bn={style:{color:"#f50"}},Zn={key:1},wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-input-search")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("searchValue"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 8px")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Search"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
      `),n("span",{class:"token attr-name"},":expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":auto-expand-parent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("autoExpandParent"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gData"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onExpand"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title.indexOf(searchValue) > -1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          {{ title.substr(0, title.indexOf(searchValue)) }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #f50")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ searchValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" generateData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("_level"),n("span",{class:"token operator"},":"),s(" number"),n("span",{class:"token punctuation"},","),s(" _preKey"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" _tns"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" preKey "),n("span",{class:"token operator"},"="),s(" _preKey "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" tns "),n("span",{class:"token operator"},"="),s(" _tns "),n("span",{class:"token operator"},"||"),s(" genData"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" x"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("preKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    tns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(" key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_level "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" tns"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" level "),n("span",{class:"token operator"},"="),s(" _level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    tns`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" tns"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" dataList"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" generateList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" data"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
    dataList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token punctuation"},","),s(" title"),n("span",{class:"token operator"},":"),s(" key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"generateList"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"generateList"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" getParentKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s(`
  key`),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},","),s(`
  tree`),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token parameter"},[n("span",{class:"token keyword"},"undefined")]),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" parentKey"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" tree"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(" tree"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parentKey `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getParentKey"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parentKey `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getParentKey"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" parentKey"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),s("string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" searchValue "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" autoExpandParent "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" gData "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onExpand"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("keys"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" keys"),n("span",{class:"token punctuation"},";"),s(`
      autoExpandParent`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("searchValue"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" expanded "),n("span",{class:"token operator"},"="),s(` dataList
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"getParentKey"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},","),s(" gData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" self")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item "),n("span",{class:"token operator"},"&&"),s(" self"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" expanded"),n("span",{class:"token punctuation"},";"),s(`
      searchValue`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" value"),n("span",{class:"token punctuation"},";"),s(`
      autoExpandParent`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      searchValue`),n("span",{class:"token punctuation"},","),s(`
      autoExpandParent`),n("span",{class:"token punctuation"},","),s(`
      gData`),n("span",{class:"token punctuation"},","),s(`
      onExpand`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-input-search")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("searchValue"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 8px")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Search"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
      `),n("span",{class:"token attr-name"},":expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":auto-expand-parent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("autoExpandParent"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gData"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onExpand"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title.indexOf(searchValue) > -1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          {{ title.substr(0, title.indexOf(searchValue)) }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #f50")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ searchValue }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" genData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"generateData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("_level"),n("span",{class:"token punctuation"},","),s(" _preKey"),n("span",{class:"token punctuation"},","),s(" _tns")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" preKey "),n("span",{class:"token operator"},"="),s(" _preKey "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" tns "),n("span",{class:"token operator"},"="),s(" _tns "),n("span",{class:"token operator"},"||"),s(" genData"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" x"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("preKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    tns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("_level "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" tns"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" level "),n("span",{class:"token operator"},"="),s(" _level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    tns`),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("level"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" tns"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"generateData"),n("span",{class:"token punctuation"},"("),s("z"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" dataList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"generateList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"data"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" data"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
    dataList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      key`),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"generateList"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"generateList"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getParentKey"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("key"),n("span",{class:"token punctuation"},","),s(" tree")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" parentKey"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" tree"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(" tree"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(" item"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parentKey `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getParentKey"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        parentKey `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getParentKey"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" parentKey"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" searchValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" autoExpandParent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" gData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onExpand"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"keys"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" keys"),n("span",{class:"token punctuation"},";"),s(`
      autoExpandParent`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("searchValue"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"value"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" expanded "),n("span",{class:"token operator"},"="),s(" dataList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"getParentKey"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},","),s(" gData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" self")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item "),n("span",{class:"token operator"},"&&"),s(" self"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" expanded"),n("span",{class:"token punctuation"},";"),s(`
      searchValue`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" value"),n("span",{class:"token punctuation"},";"),s(`
      autoExpandParent`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      searchValue`),n("span",{class:"token punctuation"},","),s(`
      autoExpandParent`),n("span",{class:"token punctuation"},","),s(`
      gData`),n("span",{class:"token punctuation"},","),s(`
      onExpand`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Gn(t,a,c,r,o,i){const d=u("a-input-search"),l=u("a-tree"),e=u("demo-box");return C(),y(e,{jsfiddle:{us:"Searchable Tree.",cn:"\u53EF\u641C\u7D22\u7684\u6811\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u641C\u7D22\u7684\u6811\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Searchable Tree.</p>
`,order:4,title:{"zh-CN":"\u53EF\u641C\u7D22","en-US":"Searchable"},relativePath:"components/tree/demo/search.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1zZWFyY2ggdi1tb2RlbDp2YWx1ZT0ic2VhcmNoVmFsdWUiIHN0eWxlPSJtYXJnaW4tYm90dG9tOiA4cHgiIHBsYWNlaG9sZGVyPSJTZWFyY2giIC8+CiAgICA8YS10cmVlCiAgICAgIDpleHBhbmRlZC1rZXlzPSJleHBhbmRlZEtleXMiCiAgICAgIDphdXRvLWV4cGFuZC1wYXJlbnQ9ImF1dG9FeHBhbmRQYXJlbnQiCiAgICAgIDp0cmVlLWRhdGE9ImdEYXRhIgogICAgICBAZXhwYW5kPSJvbkV4cGFuZCIKICAgID4KICAgICAgPHRlbXBsYXRlICN0aXRsZT0ieyB0aXRsZSB9Ij4KICAgICAgICA8c3BhbiB2LWlmPSJ0aXRsZS5pbmRleE9mKHNlYXJjaFZhbHVlKSA+IC0xIj4KICAgICAgICAgIHt7IHRpdGxlLnN1YnN0cigwLCB0aXRsZS5pbmRleE9mKHNlYXJjaFZhbHVlKSkgfX0KICAgICAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjogI2Y1MCI+e3sgc2VhcmNoVmFsdWUgfX08L3NwYW4+CiAgICAgICAgICB7eyB0aXRsZS5zdWJzdHIodGl0bGUuaW5kZXhPZihzZWFyY2hWYWx1ZSkgKyBzZWFyY2hWYWx1ZS5sZW5ndGgpIH19CiAgICAgICAgPC9zcGFuPgogICAgICAgIDxzcGFuIHYtZWxzZT57eyB0aXRsZSB9fTwvc3Bhbj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS10cmVlPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBUcmVlUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCB4ID0gMzsKY29uc3QgeSA9IDI7CmNvbnN0IHogPSAxOwpjb25zdCBnZW5EYXRhOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10gPSBbXTsKCmNvbnN0IGdlbmVyYXRlRGF0YSA9IChfbGV2ZWw6IG51bWJlciwgX3ByZUtleT86IHN0cmluZywgX3Rucz86IFRyZWVQcm9wc1sndHJlZURhdGEnXSkgPT4gewogIGNvbnN0IHByZUtleSA9IF9wcmVLZXkgfHwgJzAnOwogIGNvbnN0IHRucyA9IF90bnMgfHwgZ2VuRGF0YTsKCiAgY29uc3QgY2hpbGRyZW4gPSBbXTsKICBmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkrKykgewogICAgY29uc3Qga2V5ID0gYCR7cHJlS2V5fS0ke2l9YDsKICAgIHRucy5wdXNoKHsgdGl0bGU6IGtleSwga2V5IH0pOwogICAgaWYgKGkgPCB5KSB7CiAgICAgIGNoaWxkcmVuLnB1c2goa2V5KTsKICAgIH0KICB9CiAgaWYgKF9sZXZlbCA8IDApIHsKICAgIHJldHVybiB0bnM7CiAgfQogIGNvbnN0IGxldmVsID0gX2xldmVsIC0gMTsKICBjaGlsZHJlbi5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7CiAgICB0bnNbaW5kZXhdLmNoaWxkcmVuID0gW107CiAgICByZXR1cm4gZ2VuZXJhdGVEYXRhKGxldmVsLCBrZXksIHRuc1tpbmRleF0uY2hpbGRyZW4pOwogIH0pOwp9OwpnZW5lcmF0ZURhdGEoeik7Cgpjb25zdCBkYXRhTGlzdDogVHJlZVByb3BzWyd0cmVlRGF0YSddID0gW107CmNvbnN0IGdlbmVyYXRlTGlzdCA9IChkYXRhOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10pID0+IHsKICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHsKICAgIGNvbnN0IG5vZGUgPSBkYXRhW2ldOwogICAgY29uc3Qga2V5ID0gbm9kZS5rZXk7CiAgICBkYXRhTGlzdC5wdXNoKHsga2V5LCB0aXRsZToga2V5IH0pOwogICAgaWYgKG5vZGUuY2hpbGRyZW4pIHsKICAgICAgZ2VuZXJhdGVMaXN0KG5vZGUuY2hpbGRyZW4pOwogICAgfQogIH0KfTsKZ2VuZXJhdGVMaXN0KGdlbkRhdGEpOwoKY29uc3QgZ2V0UGFyZW50S2V5ID0gKAogIGtleTogc3RyaW5nIHwgbnVtYmVyLAogIHRyZWU6IFRyZWVQcm9wc1sndHJlZURhdGEnXSwKKTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0+IHsKICBsZXQgcGFyZW50S2V5OwogIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykgewogICAgY29uc3Qgbm9kZSA9IHRyZWVbaV07CiAgICBpZiAobm9kZS5jaGlsZHJlbikgewogICAgICBpZiAobm9kZS5jaGlsZHJlbi5zb21lKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KSkgewogICAgICAgIHBhcmVudEtleSA9IG5vZGUua2V5OwogICAgICB9IGVsc2UgaWYgKGdldFBhcmVudEtleShrZXksIG5vZGUuY2hpbGRyZW4pKSB7CiAgICAgICAgcGFyZW50S2V5ID0gZ2V0UGFyZW50S2V5KGtleSwgbm9kZS5jaGlsZHJlbik7CiAgICAgIH0KICAgIH0KICB9CiAgcmV0dXJuIHBhcmVudEtleTsKfTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZjwoc3RyaW5nIHwgbnVtYmVyKVtdPihbXSk7CiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHJlZjxzdHJpbmc+KCcnKTsKICAgIGNvbnN0IGF1dG9FeHBhbmRQYXJlbnQgPSByZWY8Ym9vbGVhbj4odHJ1ZSk7CiAgICBjb25zdCBnRGF0YSA9IHJlZjxUcmVlUHJvcHNbJ3RyZWVEYXRhJ10+KGdlbkRhdGEpOwoKICAgIGNvbnN0IG9uRXhwYW5kID0gKGtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGV4cGFuZGVkS2V5cy52YWx1ZSA9IGtleXM7CiAgICAgIGF1dG9FeHBhbmRQYXJlbnQudmFsdWUgPSBmYWxzZTsKICAgIH07CgogICAgd2F0Y2goc2VhcmNoVmFsdWUsICh2YWx1ZSkgPT4gewogICAgICBjb25zdCBleHBhbmRlZCA9IGRhdGFMaXN0CiAgICAgICAgLm1hcCgoaXRlbTogVHJlZVByb3BzWyd0cmVlRGF0YSddW251bWJlcl0pID0+IHsKICAgICAgICAgIGlmIChpdGVtLnRpdGxlLmluZGV4T2YodmFsdWUpID4gLTEpIHsKICAgICAgICAgICAgcmV0dXJuIGdldFBhcmVudEtleShpdGVtLmtleSwgZ0RhdGEudmFsdWUpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgfSkKICAgICAgICAuZmlsdGVyKChpdGVtLCBpLCBzZWxmKSA9PiBpdGVtICYmIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gaSk7CiAgICAgIGV4cGFuZGVkS2V5cy52YWx1ZSA9IGV4cGFuZGVkOwogICAgICBzZWFyY2hWYWx1ZS52YWx1ZSA9IHZhbHVlOwogICAgICBhdXRvRXhwYW5kUGFyZW50LnZhbHVlID0gdHJ1ZTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgZXhwYW5kZWRLZXlzLAogICAgICBzZWFyY2hWYWx1ZSwKICAgICAgYXV0b0V4cGFuZFBhcmVudCwKICAgICAgZ0RhdGEsCiAgICAgIG9uRXhwYW5kLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1zZWFyY2ggdi1tb2RlbDp2YWx1ZT0ic2VhcmNoVmFsdWUiIHN0eWxlPSJtYXJnaW4tYm90dG9tOiA4cHgiIHBsYWNlaG9sZGVyPSJTZWFyY2giIC8+CiAgICA8YS10cmVlCiAgICAgIDpleHBhbmRlZC1rZXlzPSJleHBhbmRlZEtleXMiCiAgICAgIDphdXRvLWV4cGFuZC1wYXJlbnQ9ImF1dG9FeHBhbmRQYXJlbnQiCiAgICAgIDp0cmVlLWRhdGE9ImdEYXRhIgogICAgICBAZXhwYW5kPSJvbkV4cGFuZCIKICAgID4KICAgICAgPHRlbXBsYXRlICN0aXRsZT0ieyB0aXRsZSB9Ij4KICAgICAgICA8c3BhbiB2LWlmPSJ0aXRsZS5pbmRleE9mKHNlYXJjaFZhbHVlKSA+IC0xIj4KICAgICAgICAgIHt7IHRpdGxlLnN1YnN0cigwLCB0aXRsZS5pbmRleE9mKHNlYXJjaFZhbHVlKSkgfX0KICAgICAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjogI2Y1MCI+e3sgc2VhcmNoVmFsdWUgfX08L3NwYW4+CiAgICAgICAgICB7eyB0aXRsZS5zdWJzdHIodGl0bGUuaW5kZXhPZihzZWFyY2hWYWx1ZSkgKyBzZWFyY2hWYWx1ZS5sZW5ndGgpIH19CiAgICAgICAgPC9zcGFuPgogICAgICAgIDxzcGFuIHYtZWxzZT57eyB0aXRsZSB9fTwvc3Bhbj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS10cmVlPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpjb25zdCB4ID0gMzsKY29uc3QgeSA9IDI7CmNvbnN0IHogPSAxOwpjb25zdCBnZW5EYXRhID0gW107Cgpjb25zdCBnZW5lcmF0ZURhdGEgPSAoX2xldmVsLCBfcHJlS2V5LCBfdG5zKSA9PiB7CiAgY29uc3QgcHJlS2V5ID0gX3ByZUtleSB8fCAnMCc7CiAgY29uc3QgdG5zID0gX3RucyB8fCBnZW5EYXRhOwogIGNvbnN0IGNoaWxkcmVuID0gW107CgogIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSsrKSB7CiAgICBjb25zdCBrZXkgPSBgJHtwcmVLZXl9LSR7aX1gOwogICAgdG5zLnB1c2goewogICAgICB0aXRsZToga2V5LAogICAgICBrZXksCiAgICB9KTsKCiAgICBpZiAoaSA8IHkpIHsKICAgICAgY2hpbGRyZW4ucHVzaChrZXkpOwogICAgfQogIH0KCiAgaWYgKF9sZXZlbCA8IDApIHsKICAgIHJldHVybiB0bnM7CiAgfQoKICBjb25zdCBsZXZlbCA9IF9sZXZlbCAtIDE7CiAgY2hpbGRyZW4uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4gewogICAgdG5zW2luZGV4XS5jaGlsZHJlbiA9IFtdOwogICAgcmV0dXJuIGdlbmVyYXRlRGF0YShsZXZlbCwga2V5LCB0bnNbaW5kZXhdLmNoaWxkcmVuKTsKICB9KTsKfTsKCmdlbmVyYXRlRGF0YSh6KTsKY29uc3QgZGF0YUxpc3QgPSBbXTsKCmNvbnN0IGdlbmVyYXRlTGlzdCA9IGRhdGEgPT4gewogIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykgewogICAgY29uc3Qgbm9kZSA9IGRhdGFbaV07CiAgICBjb25zdCBrZXkgPSBub2RlLmtleTsKICAgIGRhdGFMaXN0LnB1c2goewogICAgICBrZXksCiAgICAgIHRpdGxlOiBrZXksCiAgICB9KTsKCiAgICBpZiAobm9kZS5jaGlsZHJlbikgewogICAgICBnZW5lcmF0ZUxpc3Qobm9kZS5jaGlsZHJlbik7CiAgICB9CiAgfQp9OwoKZ2VuZXJhdGVMaXN0KGdlbkRhdGEpOwoKY29uc3QgZ2V0UGFyZW50S2V5ID0gKGtleSwgdHJlZSkgPT4gewogIGxldCBwYXJlbnRLZXk7CgogIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykgewogICAgY29uc3Qgbm9kZSA9IHRyZWVbaV07CgogICAgaWYgKG5vZGUuY2hpbGRyZW4pIHsKICAgICAgaWYgKG5vZGUuY2hpbGRyZW4uc29tZShpdGVtID0+IGl0ZW0ua2V5ID09PSBrZXkpKSB7CiAgICAgICAgcGFyZW50S2V5ID0gbm9kZS5rZXk7CiAgICAgIH0gZWxzZSBpZiAoZ2V0UGFyZW50S2V5KGtleSwgbm9kZS5jaGlsZHJlbikpIHsKICAgICAgICBwYXJlbnRLZXkgPSBnZXRQYXJlbnRLZXkoa2V5LCBub2RlLmNoaWxkcmVuKTsKICAgICAgfQogICAgfQogIH0KCiAgcmV0dXJuIHBhcmVudEtleTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWYoW10pOwogICAgY29uc3Qgc2VhcmNoVmFsdWUgPSByZWYoJycpOwogICAgY29uc3QgYXV0b0V4cGFuZFBhcmVudCA9IHJlZih0cnVlKTsKICAgIGNvbnN0IGdEYXRhID0gcmVmKGdlbkRhdGEpOwoKICAgIGNvbnN0IG9uRXhwYW5kID0ga2V5cyA9PiB7CiAgICAgIGV4cGFuZGVkS2V5cy52YWx1ZSA9IGtleXM7CiAgICAgIGF1dG9FeHBhbmRQYXJlbnQudmFsdWUgPSBmYWxzZTsKICAgIH07CgogICAgd2F0Y2goc2VhcmNoVmFsdWUsIHZhbHVlID0+IHsKICAgICAgY29uc3QgZXhwYW5kZWQgPSBkYXRhTGlzdC5tYXAoaXRlbSA9PiB7CiAgICAgICAgaWYgKGl0ZW0udGl0bGUuaW5kZXhPZih2YWx1ZSkgPiAtMSkgewogICAgICAgICAgcmV0dXJuIGdldFBhcmVudEtleShpdGVtLmtleSwgZ0RhdGEudmFsdWUpOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0pLmZpbHRlcigoaXRlbSwgaSwgc2VsZikgPT4gaXRlbSAmJiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IGkpOwogICAgICBleHBhbmRlZEtleXMudmFsdWUgPSBleHBhbmRlZDsKICAgICAgc2VhcmNoVmFsdWUudmFsdWUgPSB2YWx1ZTsKICAgICAgYXV0b0V4cGFuZFBhcmVudC52YWx1ZSA9IHRydWU7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGV4cGFuZGVkS2V5cywKICAgICAgc2VhcmNoVmFsdWUsCiAgICAgIGF1dG9FeHBhbmRQYXJlbnQsCiAgICAgIGdEYXRhLAogICAgICBvbkV4cGFuZCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:p(()=>[n("div",null,[k(d,{value:t.searchValue,"onUpdate:value":a[0]||(a[0]=g=>t.searchValue=g),style:{"margin-bottom":"8px"},placeholder:"Search"},null,8,["value"]),k(l,{"expanded-keys":t.expandedKeys,"auto-expand-parent":t.autoExpandParent,"tree-data":t.gData,onExpand:t.onExpand},{title:p(({title:g})=>[g.indexOf(t.searchValue)>-1?(C(),b("span",mn,[s(Z(g.substr(0,g.indexOf(t.searchValue)))+" ",1),n("span",bn,Z(t.searchValue),1),s(" "+Z(g.substr(g.indexOf(t.searchValue)+t.searchValue.length)),1)])):(C(),b("span",Zn,Z(g),1))]),_:1},8,["expanded-keys","auto-expand-parent","tree-data","onExpand"])])]),htmlCode:p(()=>[wn]),jsVersionHtml:p(()=>[fn]),_:1},8,["jsfiddle"])}var Kn=m(yn,[["render",Gn]]),Bn=S("byted-acceleration",!1,function(t){return k("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[k("path",{d:"M42 35H34",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap},null),k("path",{d:"M31 42H27",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap},null),k("path",{d:"M14 22L8 17H4C4 17 9.486 27 11.9999 27H44L38 22H14Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),k("path",{d:"M30 22L18.6606 14L16 14L19 22",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),k("path",{d:"M30 27L17.2 39L14 39L18.2667 27",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),k("path",{d:"M32 11C32 12 29 13 29 13L39 13C39 13 41.8855 13 42.7446 10.7143C43.6299 8.35854 42.0442 5 39.0221 5C36 5 36 8 36 8C36 8 34.1454 7.42857 33 8C31.8546 8.57143 32 10 32 11Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Wn=Bn;const vn=f({components:{IconBytedAcceleration:Wn,IconBytedSmilingFace:M},setup(){const t=I(!0),a=I(!1),c=I([{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{key:"0-0-0-1"},{title:"leaf",key:"0-0-0-2"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"leaf",key:"0-0-1-0"}]},{title:"parent 1-2",key:"0-0-2",children:[{title:"leaf 1",key:"0-0-2-0"},{title:"leaf 2",key:"0-0-2-1"}]}]},{title:"parent 2",key:"0-1",children:[{title:"parent 2-0",key:"0-1-0",children:[{title:"leaf",key:"0-1-0-0"},{title:"leaf",key:"0-1-0-1"}]}]}]);return{showLine:t,showIcon:a,onSelect:(o,i)=>{console.log("selected",o,i)},treeData:c}}}),Vn={style:{"margin-bottom":"16px"}},Rn=s(" showLine: "),Xn=n("br",null,null,-1),Sn=n("br",null,null,-1),Hn=s(" showIcon: "),Yn=n("div",null,"multiple line title",-1),xn=n("div",null,"multiple line title",-1),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 16px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
      showLine:
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-switch")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLine"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      showIcon:
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-switch")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showIcon"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
      `),n("span",{class:"token attr-name"},":show-line"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLine"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":show-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showIcon"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":default-expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("0-0-0"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedAcceleration")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ dataRef }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataRef.key === "),n("span",{class:"token punctuation"},"'"),s("0-0-0-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("multiple line title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("multiple line title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ dataRef.title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcherIcon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ dataRef, defaultIcon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedSmilingFace")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataRef.key === "),n("span",{class:"token punctuation"},"'"),s("0-0-2"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("component")]),s(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("defaultIcon"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-else"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedAcceleration "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-acceleration'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedAcceleration`),n("span",{class:"token punctuation"},","),s(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" showLine "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" showIcon "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-2'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 1'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 2'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2-0'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" onSelect"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("selectedKeys"),n("span",{class:"token punctuation"},","),s(" info")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selected'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      showLine`),n("span",{class:"token punctuation"},","),s(`
      showIcon`),n("span",{class:"token punctuation"},","),s(`
      onSelect`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 16px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
      showLine:
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-switch")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLine"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      showIcon:
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-switch")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showIcon"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
      `),n("span",{class:"token attr-name"},":show-line"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLine"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":show-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showIcon"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":default-expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("0-0-0"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedAcceleration")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ dataRef }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataRef.key === "),n("span",{class:"token punctuation"},"'"),s("0-0-0-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("multiple line title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("multiple line title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ dataRef.title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcherIcon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ dataRef, defaultIcon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedSmilingFace")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dataRef.key === "),n("span",{class:"token punctuation"},"'"),s("0-0-2"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("component")]),s(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("defaultIcon"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-else"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedAcceleration "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-acceleration'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedAcceleration`),n("span",{class:"token punctuation"},","),s(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" showLine "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" showIcon "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-2'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 1'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 2'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("selectedKeys"),n("span",{class:"token punctuation"},","),s(" info")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selected'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      showLine`),n("span",{class:"token punctuation"},","),s(`
      showIcon`),n("span",{class:"token punctuation"},","),s(`
      onSelect`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Jn(t,a,c,r,o,i){const d=u("a-switch"),l=u("IconBytedAcceleration"),e=u("IconBytedSmilingFace"),g=u("a-tree"),w=u("demo-box");return C(),y(w,{jsfiddle:{us:"Tree with connected line between nodes, turn on by `showLine`, customize the preseted icon by `switcherIcon`.",cn:"\u8282\u70B9\u4E4B\u95F4\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\uFF0C\u5E38\u7528\u4E8E\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5C55\u793A\u3002\u4F7F\u7528 `showLine` \u5F00\u542F\uFF0C\u53EF\u4EE5\u7528 `switcherIcon` \u4FEE\u6539\u9ED8\u8BA4\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8282\u70B9\u4E4B\u95F4\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\uFF0C\u5E38\u7528\u4E8E\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5C55\u793A\u3002\u4F7F\u7528 <code>showLine</code> \u5F00\u542F\uFF0C\u53EF\u4EE5\u7528 <code>switcherIcon</code> \u4FEE\u6539\u9ED8\u8BA4\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Tree with connected line between nodes, turn on by <code>showLine</code>, customize the preseted icon by <code>switcherIcon</code>.</p>
`,order:5,title:{"zh-CN":"\u8FDE\u63A5\u7EBF","en-US":"Tree With Line"},relativePath:"components/tree/demo/line.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tYm90dG9tOiAxNnB4Ij4KICAgICAgc2hvd0xpbmU6CiAgICAgIDxhLXN3aXRjaCB2LW1vZGVsOmNoZWNrZWQ9InNob3dMaW5lIiAvPgogICAgICA8YnIgLz4KICAgICAgPGJyIC8+CiAgICAgIHNob3dJY29uOgogICAgICA8YS1zd2l0Y2ggdi1tb2RlbDpjaGVja2VkPSJzaG93SWNvbiIgLz4KICAgIDwvZGl2PgogICAgPGEtdHJlZQogICAgICA6c2hvdy1saW5lPSJzaG93TGluZSIKICAgICAgOnNob3ctaWNvbj0ic2hvd0ljb24iCiAgICAgIDpkZWZhdWx0LWV4cGFuZGVkLWtleXM9IlsnMC0wLTAnXSIKICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICAgIEBzZWxlY3Q9Im9uU2VsZWN0IgogICAgPgogICAgICA8dGVtcGxhdGUgI2ljb24+PEljb25CeXRlZEFjY2VsZXJhdGlvbiA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgZGF0YVJlZiB9Ij4KICAgICAgICA8dGVtcGxhdGUgdi1pZj0iZGF0YVJlZi5rZXkgPT09ICcwLTAtMC0xJyI+CiAgICAgICAgICA8ZGl2Pm11bHRpcGxlIGxpbmUgdGl0bGU8L2Rpdj4KICAgICAgICAgIDxkaXY+bXVsdGlwbGUgbGluZSB0aXRsZTwvZGl2PgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyBkYXRhUmVmLnRpdGxlIH19PC90ZW1wbGF0ZT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNzd2l0Y2hlckljb249InsgZGF0YVJlZiwgZGVmYXVsdEljb24gfSI+CiAgICAgICAgPEljb25CeXRlZFNtaWxpbmdGYWNlIDpjb2xvcnM9IlsnY3VycmVudENvbG9yJ10iIHYtaWY9ImRhdGFSZWYua2V5ID09PSAnMC0wLTInIiAvPgogICAgICAgIDxjb21wb25lbnQgOmlzPSJkZWZhdWx0SWNvbiIgdi1lbHNlIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdHJlZT4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVHJlZVByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkQWNjZWxlcmF0aW9uIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWFjY2VsZXJhdGlvbic7CmltcG9ydCBJY29uQnl0ZWRTbWlsaW5nRmFjZSBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1zbWlsaW5nLWZhY2UnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkQWNjZWxlcmF0aW9uLAogICAgSWNvbkJ5dGVkU21pbGluZ0ZhY2UsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IHNob3dMaW5lID0gcmVmPGJvb2xlYW4+KHRydWUpOwogICAgY29uc3Qgc2hvd0ljb24gPSByZWY8Ym9vbGVhbj4oZmFsc2UpOwogICAgY29uc3QgdHJlZURhdGEgPSByZWY8VHJlZVByb3BzWyd0cmVlRGF0YSddPihbCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAgICBrZXk6ICcwLTAnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAgICAgIGtleTogJzAtMC0wJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7IHRpdGxlOiAnbGVhZicsIGtleTogJzAtMC0wLTAnIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAnMC0wLTAtMScsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7IHRpdGxlOiAnbGVhZicsIGtleTogJzAtMC0wLTInIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgICAgICBrZXk6ICcwLTAtMScsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbeyB0aXRsZTogJ2xlYWYnLCBrZXk6ICcwLTAtMS0wJyB9XSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMicsCiAgICAgICAgICAgIGtleTogJzAtMC0yJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7IHRpdGxlOiAnbGVhZiAxJywga2V5OiAnMC0wLTItMCcgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYgMicsCiAgICAgICAgICAgICAgICBrZXk6ICcwLTAtMi0xJywKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMicsCiAgICAgICAga2V5OiAnMC0xJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ3BhcmVudCAyLTAnLAogICAgICAgICAgICBrZXk6ICcwLTEtMCcsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgeyB0aXRsZTogJ2xlYWYnLCBrZXk6ICcwLTEtMC0wJyB9LAogICAgICAgICAgICAgIHsgdGl0bGU6ICdsZWFmJywga2V5OiAnMC0xLTAtMScgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogICAgY29uc3Qgb25TZWxlY3Q6IFRyZWVQcm9wc1snb25TZWxlY3QnXSA9IChzZWxlY3RlZEtleXMsIGluZm8pID0+IHsKICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkJywgc2VsZWN0ZWRLZXlzLCBpbmZvKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBzaG93TGluZSwKICAgICAgc2hvd0ljb24sCiAgICAgIG9uU2VsZWN0LAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tYm90dG9tOiAxNnB4Ij4KICAgICAgc2hvd0xpbmU6CiAgICAgIDxhLXN3aXRjaCB2LW1vZGVsOmNoZWNrZWQ9InNob3dMaW5lIiAvPgogICAgICA8YnIgLz4KICAgICAgPGJyIC8+CiAgICAgIHNob3dJY29uOgogICAgICA8YS1zd2l0Y2ggdi1tb2RlbDpjaGVja2VkPSJzaG93SWNvbiIgLz4KICAgIDwvZGl2PgogICAgPGEtdHJlZQogICAgICA6c2hvdy1saW5lPSJzaG93TGluZSIKICAgICAgOnNob3ctaWNvbj0ic2hvd0ljb24iCiAgICAgIDpkZWZhdWx0LWV4cGFuZGVkLWtleXM9IlsnMC0wLTAnXSIKICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICAgIEBzZWxlY3Q9Im9uU2VsZWN0IgogICAgPgogICAgICA8dGVtcGxhdGUgI2ljb24+PEljb25CeXRlZEFjY2VsZXJhdGlvbiA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgZGF0YVJlZiB9Ij4KICAgICAgICA8dGVtcGxhdGUgdi1pZj0iZGF0YVJlZi5rZXkgPT09ICcwLTAtMC0xJyI+CiAgICAgICAgICA8ZGl2Pm11bHRpcGxlIGxpbmUgdGl0bGU8L2Rpdj4KICAgICAgICAgIDxkaXY+bXVsdGlwbGUgbGluZSB0aXRsZTwvZGl2PgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyBkYXRhUmVmLnRpdGxlIH19PC90ZW1wbGF0ZT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNzd2l0Y2hlckljb249InsgZGF0YVJlZiwgZGVmYXVsdEljb24gfSI+CiAgICAgICAgPEljb25CeXRlZFNtaWxpbmdGYWNlIDpjb2xvcnM9IlsnY3VycmVudENvbG9yJ10iIHYtaWY9ImRhdGFSZWYua2V5ID09PSAnMC0wLTInIiAvPgogICAgICAgIDxjb21wb25lbnQgOmlzPSJkZWZhdWx0SWNvbiIgdi1lbHNlIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdHJlZT4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZEFjY2VsZXJhdGlvbiBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1hY2NlbGVyYXRpb24nOwppbXBvcnQgSWNvbkJ5dGVkU21pbGluZ0ZhY2UgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtc21pbGluZy1mYWNlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZEFjY2VsZXJhdGlvbiwKICAgIEljb25CeXRlZFNtaWxpbmdGYWNlLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3Qgc2hvd0xpbmUgPSByZWYodHJ1ZSk7CiAgICBjb25zdCBzaG93SWNvbiA9IHJlZihmYWxzZSk7CiAgICBjb25zdCB0cmVlRGF0YSA9IHJlZihbewogICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAga2V5OiAnMC0wJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0wJywKICAgICAgICBrZXk6ICcwLTAtMCcsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAga2V5OiAnMC0wLTAtMCcsCiAgICAgICAgfSwgewogICAgICAgICAga2V5OiAnMC0wLTAtMScsCiAgICAgICAgfSwgewogICAgICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAgICAgIGtleTogJzAtMC0wLTInLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMS0xJywKICAgICAgICBrZXk6ICcwLTAtMScsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAga2V5OiAnMC0wLTEtMCcsCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTInLAogICAgICAgIGtleTogJzAtMC0yJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIHRpdGxlOiAnbGVhZiAxJywKICAgICAgICAgIGtleTogJzAtMC0yLTAnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAnbGVhZiAyJywKICAgICAgICAgIGtleTogJzAtMC0yLTEnLAogICAgICAgIH1dLAogICAgICB9XSwKICAgIH0sIHsKICAgICAgdGl0bGU6ICdwYXJlbnQgMicsCiAgICAgIGtleTogJzAtMScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIHRpdGxlOiAncGFyZW50IDItMCcsCiAgICAgICAga2V5OiAnMC0xLTAnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAgICAgIGtleTogJzAtMS0wLTAnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAnbGVhZicsCiAgICAgICAgICBrZXk6ICcwLTEtMC0xJywKICAgICAgICB9XSwKICAgICAgfV0sCiAgICB9XSk7CgogICAgY29uc3Qgb25TZWxlY3QgPSAoc2VsZWN0ZWRLZXlzLCBpbmZvKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCcsIHNlbGVjdGVkS2V5cywgaW5mbyk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHNob3dMaW5lLAogICAgICBzaG93SWNvbiwKICAgICAgb25TZWxlY3QsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[n("div",null,[n("div",Vn,[Rn,k(d,{checked:t.showLine,"onUpdate:checked":a[0]||(a[0]=A=>t.showLine=A)},null,8,["checked"]),Xn,Sn,Hn,k(d,{checked:t.showIcon,"onUpdate:checked":a[1]||(a[1]=A=>t.showIcon=A)},null,8,["checked"])]),k(g,{"show-line":t.showLine,"show-icon":t.showIcon,"default-expanded-keys":["0-0-0"],"tree-data":t.treeData,onSelect:t.onSelect},{icon:p(()=>[k(l,{colors:["currentColor"]})]),title:p(({dataRef:A})=>[A.key==="0-0-0-1"?(C(),b(v,{key:0},[Yn,xn],64)):(C(),b(v,{key:1},[s(Z(A.title),1)],64))]),switcherIcon:p(({dataRef:A,defaultIcon:h})=>[A.key==="0-0-2"?(C(),y(e,{key:0,colors:["currentColor"]})):(C(),y(z(h),{key:1}))]),_:1},8,["show-line","show-icon","tree-data","onSelect"])])]),htmlCode:p(()=>[Ln]),jsVersionHtml:p(()=>[Nn]),_:1},8,["jsfiddle"])}var Tn=m(vn,[["render",Jn]]),Fn=S("antd-frown",!1,function(t){return k("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[k("path",{d:"M24,0 C10.7464286,0 0,10.7464286 0,24 C0,37.2535714 10.7464286,48 24,48 C37.2535714,48 48,37.2535714 48,24 C48,10.7464286 37.2535714,0 24,0 Z M24,43.9285714 C12.9964286,43.9285714 4.07142857,35.0035714 4.07142857,24 C4.07142857,12.9964286 12.9964286,4.07142857 24,4.07142857 C35.0035714,4.07142857 43.9285714,12.9964286 43.9285714,24 C43.9285714,35.0035714 35.0035714,43.9285714 24,43.9285714 Z",fill:t.colors[0]},null),k("path",{d:"M24,4.07142857 C12.9964286,4.07142857 4.07142857,12.9964286 4.07142857,24 C4.07142857,35.0035714 12.9964286,43.9285714 24,43.9285714 C35.0035714,43.9285714 43.9285714,35.0035714 43.9285714,24 C43.9285714,12.9964286 35.0035714,4.07142857 24,4.07142857 Z M12,19.125 C12.0285729,17.7252926 13.1714296,16.6055275 14.5714286,16.6055275 C15.9714275,16.6055275 17.1142842,17.7252926 17.1428571,19.125 C17.1142842,20.5247074 15.9714275,21.6444725 14.5714286,21.6444725 C13.1714296,21.6444725 12.0285729,20.5247074 12,19.125 L12,19.125 Z M32.1428571,33.6964289 L29.5660714,33.6964289 C29.3410714,33.6964289 29.1482143,33.525 29.1321429,33.3 C28.9285714,30.6482143 26.7053571,28.5535714 24,28.5535714 C21.2946429,28.5535714 19.0660714,30.6482143 18.8678571,33.3 C18.8517857,33.525 18.6589286,33.6964289 18.4339286,33.6964289 L15.8571429,33.6964289 C15.7396666,33.6965755 15.6272801,33.6484931 15.546262,33.563424 C15.4652438,33.4783549 15.4226975,33.363758 15.4285714,33.2464286 C15.6642857,28.7303571 19.4196429,25.125 24,25.125 C28.5803571,25.125 32.3357143,28.7303571 32.5714286,33.2464286 C32.5773025,33.363758 32.5347562,33.4783549 32.453738,33.563424 C32.3727199,33.6484931 32.2603334,33.6965755 32.1428571,33.6964289 L32.1428571,33.6964289 Z M33.4285714,21.6964286 C32.0288641,21.6678557 30.9090989,20.524999 30.9090989,19.125 C30.9090989,17.725001 32.0288641,16.5821443 33.4285714,16.5535714 C34.8282788,16.5821443 35.9480439,17.725001 35.9480439,19.125 C35.9480439,20.524999 34.8282788,21.6678557 33.4285714,21.6964286 L33.4285714,21.6964286 Z",fill:t.colors[1]},null),k("path",{d:"M12,19.125 C12,20.5451608 13.1512678,21.6964286 14.5714286,21.6964286 C15.9915894,21.6964286 17.1428571,20.5451608 17.1428571,19.125 C17.1428571,17.7048392 15.9915894,16.5535714 14.5714286,16.5535714 C13.1512678,16.5535714 12,17.7048392 12,19.125 L12,19.125 Z M24,25.125 C19.4196429,25.125 15.6642857,28.7303571 15.4285714,33.2464286 C15.4226975,33.363758 15.4652438,33.4783549 15.546262,33.563424 C15.6272801,33.6484931 15.7396666,33.6965755 15.8571429,33.6964289 L18.4339286,33.6964289 C18.6589286,33.6964289 18.8517857,33.525 18.8678571,33.3 C19.0660714,30.6482143 21.2946429,28.5535714 24,28.5535714 C26.7053571,28.5535714 28.9285714,30.6482143 29.1321429,33.3 C29.1482143,33.525 29.3410714,33.6964289 29.5660714,33.6964289 L32.1428571,33.6964289 C32.2603334,33.6965755 32.3727199,33.6484931 32.453738,33.563424 C32.5347562,33.4783549 32.5773025,33.363758 32.5714286,33.2464286 C32.3357143,28.7303571 28.5803571,25.125 24,25.125 Z M30.8571429,19.125 C30.8571429,20.5451608 32.0084106,21.6964286 33.4285714,21.6964286 C34.8487322,21.6964286 36,20.5451608 36,19.125 C36,17.7048392 34.8487322,16.5535714 33.4285714,16.5535714 C32.0084106,16.5535714 30.8571429,17.7048392 30.8571429,19.125 L30.8571429,19.125 Z",fill:t.colors[2]},null)])}),Dn=Fn;const En=[{title:"parent 1",key:"0-0",children:[{title:"leaf",key:"0-0-0"},{title:"leaf",key:"0-0-1"}]}],Pn=f({components:{IconBytedDown:H,IconAntdSmile:U,IconAntdFrown:Dn},setup(){return{selectedKeys:I(["0-0-0"]),treeData:En}}}),zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"show-icon"),s(),n("span",{class:"token attr-name"},"default-expand-all"),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcherIcon"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedDown")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ key, selected }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconAntdSmile")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconAntdSmile")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconAntdFrown")]),s(),n("span",{class:"token attr-name"},":theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected ? "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),s(" : "),n("span",{class:"token punctuation"},"'"),s("filled"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedDown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconAntdSmile "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/antd-smile'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconAntdFrown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/antd-frown'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" treeData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),s(`
    IconAntdSmile`),n("span",{class:"token punctuation"},","),s(`
    IconAntdFrown`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      selectedKeys`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"show-icon"),s(),n("span",{class:"token attr-name"},"default-expand-all"),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcherIcon"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedDown")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ key, selected }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconAntdSmile")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconAntdSmile")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconAntdFrown")]),s(),n("span",{class:"token attr-name"},":theme"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selected ? "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),s(" : "),n("span",{class:"token punctuation"},"'"),s("filled"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedDown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconAntdSmile "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/antd-smile'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconAntdFrown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/antd-frown'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),s(`
    IconAntdSmile`),n("span",{class:"token punctuation"},","),s(`
    IconAntdFrown`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      selectedKeys`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Mn(t,a,c,r,o,i){const d=u("IconBytedDown"),l=u("IconAntdSmile"),e=u("IconAntdFrown"),g=u("a-tree"),w=u("demo-box");return C(),y(w,{jsfiddle:{us:"You can customize icons for different nodes.",cn:"\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can customize icons for different nodes.</p>
`,order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Customize Icon"},relativePath:"components/tree/demo/customized-icon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUgdi1tb2RlbDpzZWxlY3RlZEtleXM9InNlbGVjdGVkS2V5cyIgOnRyZWUtZGF0YT0idHJlZURhdGEiIHNob3ctaWNvbiBkZWZhdWx0LWV4cGFuZC1hbGw+CiAgICA8dGVtcGxhdGUgI3N3aXRjaGVySWNvbj4KICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI2ljb249Insga2V5LCBzZWxlY3RlZCB9Ij4KICAgICAgPHRlbXBsYXRlIHYtaWY9ImtleSA9PT0gJzAtMCciPgogICAgICAgIDxJY29uQW50ZFNtaWxlIDpjb2xvcnM9IlsnY3VycmVudENvbG9yJ10iIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9ImtleSA9PT0gJzAtMC0wJyI+CiAgICAgICAgPEljb25BbnRkU21pbGUgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT4KICAgICAgICA8SWNvbkFudGRGcm93biA6dGhlbWU9InNlbGVjdGVkID8gJycgOiAnZmlsbGVkJyIgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFRyZWVQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmltcG9ydCBJY29uQW50ZFNtaWxlIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2FudGQtc21pbGUnOwppbXBvcnQgSWNvbkFudGRGcm93biBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9hbnRkLWZyb3duJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgdHJlZURhdGE6IFRyZWVQcm9wc1sndHJlZURhdGEnXSA9IFsKICB7CiAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgIGtleTogJzAtMCcsCiAgICBjaGlsZHJlbjogWwogICAgICB7IHRpdGxlOiAnbGVhZicsIGtleTogJzAtMC0wJyB9LAogICAgICB7IHRpdGxlOiAnbGVhZicsIGtleTogJzAtMC0xJyB9LAogICAgXSwKICB9LApdOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWREb3duLAogICAgSWNvbkFudGRTbWlsZSwKICAgIEljb25BbnRkRnJvd24sCiAgfSwKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHNlbGVjdGVkS2V5czogcmVmKFsnMC0wLTAnXSksCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUgdi1tb2RlbDpzZWxlY3RlZEtleXM9InNlbGVjdGVkS2V5cyIgOnRyZWUtZGF0YT0idHJlZURhdGEiIHNob3ctaWNvbiBkZWZhdWx0LWV4cGFuZC1hbGw+CiAgICA8dGVtcGxhdGUgI3N3aXRjaGVySWNvbj4KICAgICAgPEljb25CeXRlZERvd24gOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI2ljb249Insga2V5LCBzZWxlY3RlZCB9Ij4KICAgICAgPHRlbXBsYXRlIHYtaWY9ImtleSA9PT0gJzAtMCciPgogICAgICAgIDxJY29uQW50ZFNtaWxlIDpjb2xvcnM9IlsnY3VycmVudENvbG9yJ10iIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9ImtleSA9PT0gJzAtMC0wJyI+CiAgICAgICAgPEljb25BbnRkU21pbGUgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT4KICAgICAgICA8SWNvbkFudGRGcm93biA6dGhlbWU9InNlbGVjdGVkID8gJycgOiAnZmlsbGVkJyIgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWREb3duIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWRvd24nOwppbXBvcnQgSWNvbkFudGRTbWlsZSBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9hbnRkLXNtaWxlJzsKaW1wb3J0IEljb25BbnRkRnJvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYW50ZC1mcm93bic7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgdHJlZURhdGEgPSBbewogIHRpdGxlOiAncGFyZW50IDEnLAogIGtleTogJzAtMCcsCiAgY2hpbGRyZW46IFt7CiAgICB0aXRsZTogJ2xlYWYnLAogICAga2V5OiAnMC0wLTAnLAogIH0sIHsKICAgIHRpdGxlOiAnbGVhZicsCiAgICBrZXk6ICcwLTAtMScsCiAgfV0sCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZERvd24sCiAgICBJY29uQW50ZFNtaWxlLAogICAgSWNvbkFudGRGcm93biwKICB9LAoKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHNlbGVjdGVkS2V5czogcmVmKFsnMC0wLTAnXSksCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[k(g,{selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[0]||(a[0]=A=>t.selectedKeys=A),"tree-data":t.treeData,"show-icon":"","default-expand-all":""},{switcherIcon:p(()=>[k(d,{colors:["currentColor"]})]),icon:p(({key:A,selected:h})=>[A==="0-0"?(C(),y(l,{key:0,colors:["currentColor"]})):A==="0-0-0"?(C(),y(l,{key:1,colors:["currentColor"]})):(C(),y(e,{key:2,theme:h?"":"filled",colors:["currentColor"]},null,8,["theme"]))]),_:1},8,["selectedKeys","tree-data"])]),htmlCode:p(()=>[zn]),jsVersionHtml:p(()=>[jn]),_:1},8,["jsfiddle"])}var Un=m(Pn,[["render",Mn]]);const On=f({setup(){const t=I(["0-0","0-1"]),a=I([]);return{expandedKeys:t,selectedKeys:a,treeData:[{title:"parent 0",key:"0-0",children:[{title:"leaf 0-0",key:"0-0-0",isLeaf:!0},{title:"leaf 0-1",key:"0-0-1",isLeaf:!0}]},{title:"parent 1",key:"0-1",children:[{title:"leaf 1-0",key:"0-1-0",isLeaf:!0},{title:"leaf 1-1",key:"0-1-1",isLeaf:!0}]}]}}}),Qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-directory-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"multiple"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-directory-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 0-0'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 0-1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 1-0'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),s(`
            isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 1-1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
            isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),_n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-directory-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"multiple"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-directory-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 0'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 0-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 0-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 1-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),s(`
        isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf 1-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
        isLeaf`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function qn(t,a,c,r,o,i){const d=u("a-directory-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"Built-in directory tree. `multiple` support `ctrl(Windows)` / `command(Mac)` selection.",cn:"\u5185\u7F6E\u7684\u76EE\u5F55\u6811\uFF0C`multiple` \u6A21\u5F0F\u652F\u6301 `ctrl(Windows)` / `command(Mac)` \u590D\u9009\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5185\u7F6E\u7684\u76EE\u5F55\u6811\uFF0C<code>multiple</code> \u6A21\u5F0F\u652F\u6301 <code>ctrl(Windows)</code> / <code>command(Mac)</code> \u590D\u9009\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Built-in directory tree. <code>multiple</code> support <code>ctrl(Windows)</code> / <code>command(Mac)</code> selection.</p>
`,order:7,title:{"zh-CN":"\u76EE\u5F55","en-US":"Directory"},relativePath:"components/tree/demo/directory.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRpcmVjdG9yeS10cmVlCiAgICB2LW1vZGVsOmV4cGFuZGVkS2V5cz0iZXhwYW5kZWRLZXlzIgogICAgdi1tb2RlbDpzZWxlY3RlZEtleXM9InNlbGVjdGVkS2V5cyIKICAgIG11bHRpcGxlCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+PC9hLWRpcmVjdG9yeS10cmVlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBUcmVlUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wJywgJzAtMSddKTsKICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJlZjxzdHJpbmdbXT4oW10pOwogICAgY29uc3QgdHJlZURhdGE6IFRyZWVQcm9wc1sndHJlZURhdGEnXSA9IFsKICAgICAgewogICAgICAgIHRpdGxlOiAncGFyZW50IDAnLAogICAgICAgIGtleTogJzAtMCcsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdGl0bGU6ICdsZWFmIDAtMCcsCiAgICAgICAgICAgIGtleTogJzAtMC0wJywKICAgICAgICAgICAgaXNMZWFmOiB0cnVlLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgdGl0bGU6ICdsZWFmIDAtMScsCiAgICAgICAgICAgIGtleTogJzAtMC0xJywKICAgICAgICAgICAgaXNMZWFmOiB0cnVlLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMScsCiAgICAgICAga2V5OiAnMC0xJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ2xlYWYgMS0wJywKICAgICAgICAgICAga2V5OiAnMC0xLTAnLAogICAgICAgICAgICBpc0xlYWY6IHRydWUsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICB0aXRsZTogJ2xlYWYgMS0xJywKICAgICAgICAgICAga2V5OiAnMC0xLTEnLAogICAgICAgICAgICBpc0xlYWY6IHRydWUsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdOwogICAgcmV0dXJuIHsKICAgICAgZXhwYW5kZWRLZXlzLAogICAgICBzZWxlY3RlZEtleXMsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRpcmVjdG9yeS10cmVlCiAgICB2LW1vZGVsOmV4cGFuZGVkS2V5cz0iZXhwYW5kZWRLZXlzIgogICAgdi1tb2RlbDpzZWxlY3RlZEtleXM9InNlbGVjdGVkS2V5cyIKICAgIG11bHRpcGxlCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+PC9hLWRpcmVjdG9yeS10cmVlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWYoWycwLTAnLCAnMC0xJ10pOwogICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcmVmKFtdKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gW3sKICAgICAgdGl0bGU6ICdwYXJlbnQgMCcsCiAgICAgIGtleTogJzAtMCcsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIHRpdGxlOiAnbGVhZiAwLTAnLAogICAgICAgIGtleTogJzAtMC0wJywKICAgICAgICBpc0xlYWY6IHRydWUsCiAgICAgIH0sIHsKICAgICAgICB0aXRsZTogJ2xlYWYgMC0xJywKICAgICAgICBrZXk6ICcwLTAtMScsCiAgICAgICAgaXNMZWFmOiB0cnVlLAogICAgICB9XSwKICAgIH0sIHsKICAgICAgdGl0bGU6ICdwYXJlbnQgMScsCiAgICAgIGtleTogJzAtMScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIHRpdGxlOiAnbGVhZiAxLTAnLAogICAgICAgIGtleTogJzAtMS0wJywKICAgICAgICBpc0xlYWY6IHRydWUsCiAgICAgIH0sIHsKICAgICAgICB0aXRsZTogJ2xlYWYgMS0xJywKICAgICAgICBrZXk6ICcwLTEtMScsCiAgICAgICAgaXNMZWFmOiB0cnVlLAogICAgICB9XSwKICAgIH1dOwogICAgcmV0dXJuIHsKICAgICAgZXhwYW5kZWRLZXlzLAogICAgICBzZWxlY3RlZEtleXMsCiAgICAgIHRyZWVEYXRhLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[k(d,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=e=>t.expandedKeys=e),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=e=>t.selectedKeys=e),multiple:"","tree-data":t.treeData},null,8,["expandedKeys","selectedKeys","tree-data"])]),htmlCode:p(()=>[Qn]),jsVersionHtml:p(()=>[_n]),_:1},8,["jsfiddle"])}var $n=m(On,[["render",qn]]);const ns=f({components:{IconBytedDown:H},setup(){const t=I(["0-0-0"]),a=I([]);return{expandedKeys:t,selectedKeys:a,treeData:[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1"},{title:"leaf",key:"0-0-0-2"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"leaf",key:"0-0-1-0"}]},{title:"parent 1-2",key:"0-0-2",children:[{title:"leaf",key:"0-0-2-0"},{title:"leaf",key:"0-0-2-1"}]}]}]}}}),ss=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"show-line"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcherIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedDown")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedDown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-2'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-0'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
                key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ts=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"show-line"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcherIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedDown")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedDown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-down'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedDown`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-2'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-0'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function as(t,a,c,r,o,i){const d=u("IconBytedDown"),l=u("a-tree"),e=u("demo-box");return C(),y(e,{jsfiddle:{us:"customize collapse/expand icon of tree node",cn:"\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>customize collapse/expand icon of tree node</p>
`,order:8,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807","en-US":"Customize collapse/expand icon"},relativePath:"components/tree/demo/switcher-icon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgc2hvdy1saW5lCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+CiAgICA8dGVtcGxhdGUgI3N3aXRjaGVySWNvbj48SWNvbkJ5dGVkRG93biAvPjwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFRyZWVQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkRG93biBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1kb3duJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWREb3duLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnXSk7CiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSByZWY8c3RyaW5nW10+KFtdKTsKICAgIGNvbnN0IHRyZWVEYXRhOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10gPSBbCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxJywKICAgICAgICBrZXk6ICcwLTAnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAgICAgIGtleTogJzAtMC0wJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAgICAgICAga2V5OiAnMC0wLTAtMCcsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAgICAgICAga2V5OiAnMC0wLTAtMScsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAgICAgICAga2V5OiAnMC0wLTAtMicsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMScsCiAgICAgICAgICAgIGtleTogJzAtMC0xJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAgICAgICAga2V5OiAnMC0wLTEtMCcsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHRpdGxlOiAncGFyZW50IDEtMicsCiAgICAgICAgICAgIGtleTogJzAtMC0yJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAgICAgICAga2V5OiAnMC0wLTItMCcsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAgICAgICAga2V5OiAnMC0wLTItMScsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF07CiAgICByZXR1cm4gewogICAgICBleHBhbmRlZEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgdHJlZURhdGEsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgc2hvdy1saW5lCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+CiAgICA8dGVtcGxhdGUgI3N3aXRjaGVySWNvbj48SWNvbkJ5dGVkRG93biAvPjwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZERvd24gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZG93bic7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRG93biwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZihbJzAtMC0wJ10pOwogICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcmVmKFtdKTsKICAgIGNvbnN0IHRyZWVEYXRhID0gW3sKICAgICAgdGl0bGU6ICdwYXJlbnQgMScsCiAgICAgIGtleTogJzAtMCcsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICAgICAga2V5OiAnMC0wLTAnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAgICAgIGtleTogJzAtMC0wLTAnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAnbGVhZicsCiAgICAgICAgICBrZXk6ICcwLTAtMC0xJywKICAgICAgICB9LCB7CiAgICAgICAgICB0aXRsZTogJ2xlYWYnLAogICAgICAgICAga2V5OiAnMC0wLTAtMicsCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgIGtleTogJzAtMC0xJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIHRpdGxlOiAnbGVhZicsCiAgICAgICAgICBrZXk6ICcwLTAtMS0wJywKICAgICAgICB9XSwKICAgICAgfSwgewogICAgICAgIHRpdGxlOiAncGFyZW50IDEtMicsCiAgICAgICAga2V5OiAnMC0wLTInLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAgICAgIGtleTogJzAtMC0yLTAnLAogICAgICAgIH0sIHsKICAgICAgICAgIHRpdGxlOiAnbGVhZicsCiAgICAgICAgICBrZXk6ICcwLTAtMi0xJywKICAgICAgICB9XSwKICAgICAgfV0sCiAgICB9XTsKICAgIHJldHVybiB7CiAgICAgIGV4cGFuZGVkS2V5cywKICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICB0cmVlRGF0YSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:p(()=>[k(l,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=g=>t.expandedKeys=g),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=g=>t.selectedKeys=g),"show-line":"","tree-data":t.treeData},{switcherIcon:p(()=>[k(d)]),_:1},8,["expandedKeys","selectedKeys","tree-data"])]),htmlCode:p(()=>[ss]),jsVersionHtml:p(()=>[ts]),_:1},8,["jsfiddle"])}var es=m(ns,[["render",as]]);const os=f({setup(){const t=I(["0-0-0","0-0-1"]),a=I(["0-0-0","0-0-1"]),c=I(["0-0-0","0-0-1"]),r={children:"child",title:"name"},o=[{name:"parent 1",key:"0-0",child:[{name:"\u5F20\u6668\u6210",key:"0-0-0",disabled:!0,child:[{name:"leaf",key:"0-0-0-0",disableCheckbox:!0},{name:"leaf",key:"0-0-0-1"}]},{name:"parent 1-1",key:"0-0-1",child:[{key:"0-0-1-0",name:"zcvc"}]}]}];return G(t,()=>{console.log("expandedKeys",t)}),G(a,()=>{console.log("selectedKeys",a)}),G(c,()=>{console.log("checkedKeys",c)}),{expandedKeys:t,selectedKeys:a,checkedKeys:c,fieldNames:r,treeData:I(o)}}}),cs={key:0,style:{color:"#1890ff"}},ps=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checkedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fieldNames"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ name, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fieldNames"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fieldNames'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'child'"),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" treeData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
        child`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u6668\u6210'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            disabled`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            child`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(" disableCheckbox"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
            key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            child`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zcvc'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
      fieldNames`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("treeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ls=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checkedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fieldNames"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ name, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fieldNames "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'child'"),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      child`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F20\u6668\u6210'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        disabled`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        child`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          disableCheckbox`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        child`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zcvc'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
      fieldNames`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("treeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function us(t,a,c,r,o,i){const d=u("a-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"Replace the title,key and children fields in treeNode with the corresponding fields in treeData.",cn:"\u66FF\u6362treeNode\u4E2D title,key,children\u5B57\u6BB5\u4E3AtreeData\u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u66FF\u6362treeNode\u4E2D title,key,children\u5B57\u6BB5\u4E3AtreeData\u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Replace the title,key and children fields in treeNode with the corresponding fields in treeData.</p>
`,order:9,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5B57\u6BB5","en-US":"ReplaceFields"},relativePath:"components/tree/demo/replaceFields.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgdi1tb2RlbDpjaGVja2VkS2V5cz0iY2hlY2tlZEtleXMiCiAgICBjaGVja2FibGUKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogICAgOmZpZWxkLW5hbWVzPSJmaWVsZE5hbWVzIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgbmFtZSwga2V5IH0iPgogICAgICA8c3BhbiB2LWlmPSJrZXkgPT09ICcwLTAtMSciIHN0eWxlPSJjb2xvcjogIzE4OTBmZiI+e3sgbmFtZSB9fTwvc3Bhbj4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyBuYW1lIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IFRyZWVQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICBjb25zdCBjaGVja2VkS2V5cyA9IHJlZjxzdHJpbmdbXT4oWycwLTAtMCcsICcwLTAtMSddKTsKCiAgICBjb25zdCBmaWVsZE5hbWVzOiBUcmVlUHJvcHNbJ2ZpZWxkTmFtZXMnXSA9IHsKICAgICAgY2hpbGRyZW46ICdjaGlsZCcsCiAgICAgIHRpdGxlOiAnbmFtZScsCiAgICB9OwoKICAgIGNvbnN0IHRyZWVEYXRhOiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10gPSBbCiAgICAgIHsKICAgICAgICBuYW1lOiAncGFyZW50IDEnLAogICAgICAgIGtleTogJzAtMCcsCiAgICAgICAgY2hpbGQ6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgbmFtZTogJ+W8oOaZqOaIkCcsCiAgICAgICAgICAgIGtleTogJzAtMC0wJywKICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgICAgICAgIGNoaWxkOiBbCiAgICAgICAgICAgICAgeyBuYW1lOiAnbGVhZicsIGtleTogJzAtMC0wLTAnLCBkaXNhYmxlQ2hlY2tib3g6IHRydWUgfSwKICAgICAgICAgICAgICB7IG5hbWU6ICdsZWFmJywga2V5OiAnMC0wLTAtMScgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIG5hbWU6ICdwYXJlbnQgMS0xJywKICAgICAgICAgICAga2V5OiAnMC0wLTEnLAogICAgICAgICAgICBjaGlsZDogW3sga2V5OiAnMC0wLTEtMCcsIG5hbWU6ICd6Y3ZjJyB9XSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF07CiAgICB3YXRjaChleHBhbmRlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7CiAgICB9KTsKICAgIHdhdGNoKHNlbGVjdGVkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRLZXlzJywgc2VsZWN0ZWRLZXlzKTsKICAgIH0pOwogICAgd2F0Y2goY2hlY2tlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBleHBhbmRlZEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgY2hlY2tlZEtleXMsCiAgICAgIGZpZWxkTmFtZXMsCiAgICAgIHRyZWVEYXRhOiByZWYodHJlZURhdGEpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6ZXhwYW5kZWRLZXlzPSJleHBhbmRlZEtleXMiCiAgICB2LW1vZGVsOnNlbGVjdGVkS2V5cz0ic2VsZWN0ZWRLZXlzIgogICAgdi1tb2RlbDpjaGVja2VkS2V5cz0iY2hlY2tlZEtleXMiCiAgICBjaGVja2FibGUKICAgIDp0cmVlLWRhdGE9InRyZWVEYXRhIgogICAgOmZpZWxkLW5hbWVzPSJmaWVsZE5hbWVzIgogID4KICAgIDx0ZW1wbGF0ZSAjdGl0bGU9InsgbmFtZSwga2V5IH0iPgogICAgICA8c3BhbiB2LWlmPSJrZXkgPT09ICcwLTAtMSciIHN0eWxlPSJjb2xvcjogIzE4OTBmZiI+e3sgbmFtZSB9fTwvc3Bhbj4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyBuYW1lIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWYoWycwLTAtMCcsICcwLTAtMSddKTsKICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJlZihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgY29uc3QgY2hlY2tlZEtleXMgPSByZWYoWycwLTAtMCcsICcwLTAtMSddKTsKICAgIGNvbnN0IGZpZWxkTmFtZXMgPSB7CiAgICAgIGNoaWxkcmVuOiAnY2hpbGQnLAogICAgICB0aXRsZTogJ25hbWUnLAogICAgfTsKICAgIGNvbnN0IHRyZWVEYXRhID0gW3sKICAgICAgbmFtZTogJ3BhcmVudCAxJywKICAgICAga2V5OiAnMC0wJywKICAgICAgY2hpbGQ6IFt7CiAgICAgICAgbmFtZTogJ+W8oOaZqOaIkCcsCiAgICAgICAga2V5OiAnMC0wLTAnLAogICAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgICAgIGNoaWxkOiBbewogICAgICAgICAgbmFtZTogJ2xlYWYnLAogICAgICAgICAga2V5OiAnMC0wLTAtMCcsCiAgICAgICAgICBkaXNhYmxlQ2hlY2tib3g6IHRydWUsCiAgICAgICAgfSwgewogICAgICAgICAgbmFtZTogJ2xlYWYnLAogICAgICAgICAga2V5OiAnMC0wLTAtMScsCiAgICAgICAgfV0sCiAgICAgIH0sIHsKICAgICAgICBuYW1lOiAncGFyZW50IDEtMScsCiAgICAgICAga2V5OiAnMC0wLTEnLAogICAgICAgIGNoaWxkOiBbewogICAgICAgICAga2V5OiAnMC0wLTEtMCcsCiAgICAgICAgICBuYW1lOiAnemN2YycsCiAgICAgICAgfV0sCiAgICAgIH1dLAogICAgfV07CiAgICB3YXRjaChleHBhbmRlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7CiAgICB9KTsKICAgIHdhdGNoKHNlbGVjdGVkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRLZXlzJywgc2VsZWN0ZWRLZXlzKTsKICAgIH0pOwogICAgd2F0Y2goY2hlY2tlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBleHBhbmRlZEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgY2hlY2tlZEtleXMsCiAgICAgIGZpZWxkTmFtZXMsCiAgICAgIHRyZWVEYXRhOiByZWYodHJlZURhdGEpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:p(()=>[k(d,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=e=>t.expandedKeys=e),selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=e=>t.selectedKeys=e),checkedKeys:t.checkedKeys,"onUpdate:checkedKeys":a[2]||(a[2]=e=>t.checkedKeys=e),checkable:"","tree-data":t.treeData,"field-names":t.fieldNames},{title:p(({name:e,key:g})=>[g==="0-0-1"?(C(),b("span",cs,Z(e),1)):(C(),b(v,{key:1},[s(Z(e),1)],64))]),_:1},8,["expandedKeys","selectedKeys","checkedKeys","tree-data","field-names"])]),htmlCode:p(()=>[ps]),jsVersionHtml:p(()=>[ls]),_:1},8,["jsfiddle"])}var ks=m(os,[["render",us]]);const is=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]}]}],rs=f({setup(){const t=(c,r)=>{console.log(`treeKey: ${c}, menuKey: ${r}`)},a=I(["0-0-0","0-0-1"]);return G(a,()=>{console.log("expandedKeys",a)}),{treeData:is,onContextMenuClick:t,expandedKeys:a}}}),ds=s("1st menu item"),gs=s("2nd menu item"),Cs=s("3rd menu item"),Is=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ key: treeKey, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-dropdown")]),s(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("contextmenu"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu-item")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu-item")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu-item")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu-item")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu-item")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu-item")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-dropdown")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-1'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-2'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-2'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onContextMenuClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("treeKey"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" menuKey"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"treeKey: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("treeKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},", menuKey: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("menuKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      onContextMenuClick`),n("span",{class:"token punctuation"},","),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),As=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expandedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ key: treeKey, title }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-dropdown")]),s(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("contextmenu"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu-item")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu-item")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu-item")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu-item")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-menu-item")]),s(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu-item")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-menu")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-dropdown")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" watch"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-1'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-1'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-2'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-2'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onContextMenuClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("treeKey"),n("span",{class:"token punctuation"},","),s(" menuKey")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"treeKey: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("treeKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},", menuKey: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("menuKey"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      onContextMenuClick`),n("span",{class:"token punctuation"},","),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function hs(t,a,c,r,o,i){const d=u("a-menu-item"),l=u("a-menu"),e=u("a-dropdown"),g=u("a-tree"),w=u("demo-box");return C(),y(w,{jsfiddle:{us:"Custom display the context menu",cn:"\u81EA\u5B9A\u4E49\u5C55\u793A\u53F3\u952E\u83DC\u5355",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u5C55\u793A\u53F3\u952E\u83DC\u5355</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom display the context menu</p>
`,order:9,title:{"zh-CN":"\u53F3\u952E\u83DC\u5355","en-US":"Context Menu"},relativePath:"components/tree/demo/context-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUgdi1tb2RlbDpleHBhbmRlZEtleXM9ImV4cGFuZGVkS2V5cyIgOnRyZWUtZGF0YT0idHJlZURhdGEiPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyBrZXk6IHRyZWVLZXksIHRpdGxlIH0iPgogICAgICA8YS1kcm9wZG93biA6dHJpZ2dlcj0iWydjb250ZXh0bWVudSddIj4KICAgICAgICA8c3Bhbj57eyB0aXRsZSB9fTwvc3Bhbj4KICAgICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgICA8YS1tZW51IEBjbGljaz0iKHsga2V5OiBtZW51S2V5IH0pID0+IG9uQ29udGV4dE1lbnVDbGljayh0cmVlS2V5LCBtZW51S2V5KSI+CiAgICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPjFzdCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+M3JkIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8L2EtbWVudT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZHJvcGRvd24+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmVlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCB3YXRjaCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IHRyZWVEYXRhID0gWwogIHsKICAgIHRpdGxlOiAnMC0wJywKICAgIGtleTogJzAtMCcsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdGl0bGU6ICcwLTAtMCcsCiAgICAgICAga2V5OiAnMC0wLTAnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7IHRpdGxlOiAnMC0wLTAtMCcsIGtleTogJzAtMC0wLTAnIH0sCiAgICAgICAgICB7IHRpdGxlOiAnMC0wLTAtMScsIGtleTogJzAtMC0wLTEnIH0sCiAgICAgICAgICB7IHRpdGxlOiAnMC0wLTAtMicsIGtleTogJzAtMC0wLTInIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgewogICAgICAgIHRpdGxlOiAnMC0wLTEnLAogICAgICAgIGtleTogJzAtMC0xJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgeyB0aXRsZTogJzAtMC0xLTAnLCBrZXk6ICcwLTAtMS0wJyB9LAogICAgICAgICAgeyB0aXRsZTogJzAtMC0xLTEnLCBrZXk6ICcwLTAtMS0xJyB9LAogICAgICAgICAgeyB0aXRsZTogJzAtMC0xLTInLCBrZXk6ICcwLTAtMS0yJyB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdLAogIH0sCl07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvbkNvbnRleHRNZW51Q2xpY2sgPSAodHJlZUtleTogc3RyaW5nLCBtZW51S2V5OiBzdHJpbmcgfCBudW1iZXIpID0+IHsKICAgICAgY29uc29sZS5sb2coYHRyZWVLZXk6ICR7dHJlZUtleX0sIG1lbnVLZXk6ICR7bWVudUtleX1gKTsKICAgIH07CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnLCAnMC0wLTEnXSk7CgogICAgd2F0Y2goZXhwYW5kZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICB0cmVlRGF0YSwKICAgICAgb25Db250ZXh0TWVudUNsaWNrLAogICAgICBleHBhbmRlZEtleXMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlPjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUgdi1tb2RlbDpleHBhbmRlZEtleXM9ImV4cGFuZGVkS2V5cyIgOnRyZWUtZGF0YT0idHJlZURhdGEiPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyBrZXk6IHRyZWVLZXksIHRpdGxlIH0iPgogICAgICA8YS1kcm9wZG93biA6dHJpZ2dlcj0iWydjb250ZXh0bWVudSddIj4KICAgICAgICA8c3Bhbj57eyB0aXRsZSB9fTwvc3Bhbj4KICAgICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgICA8YS1tZW51IEBjbGljaz0iKHsga2V5OiBtZW51S2V5IH0pID0+IG9uQ29udGV4dE1lbnVDbGljayh0cmVlS2V5LCBtZW51S2V5KSI+CiAgICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPjFzdCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+M3JkIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8L2EtbWVudT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZHJvcGRvd24+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmVlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHdhdGNoLCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCB0cmVlRGF0YSA9IFt7CiAgdGl0bGU6ICcwLTAnLAogIGtleTogJzAtMCcsCiAgY2hpbGRyZW46IFt7CiAgICB0aXRsZTogJzAtMC0wJywKICAgIGtleTogJzAtMC0wJywKICAgIGNoaWxkcmVuOiBbewogICAgICB0aXRsZTogJzAtMC0wLTAnLAogICAgICBrZXk6ICcwLTAtMC0wJywKICAgIH0sIHsKICAgICAgdGl0bGU6ICcwLTAtMC0xJywKICAgICAga2V5OiAnMC0wLTAtMScsCiAgICB9LCB7CiAgICAgIHRpdGxlOiAnMC0wLTAtMicsCiAgICAgIGtleTogJzAtMC0wLTInLAogICAgfV0sCiAgfSwgewogICAgdGl0bGU6ICcwLTAtMScsCiAgICBrZXk6ICcwLTAtMScsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdGl0bGU6ICcwLTAtMS0wJywKICAgICAga2V5OiAnMC0wLTEtMCcsCiAgICB9LCB7CiAgICAgIHRpdGxlOiAnMC0wLTEtMScsCiAgICAgIGtleTogJzAtMC0xLTEnLAogICAgfSwgewogICAgICB0aXRsZTogJzAtMC0xLTInLAogICAgICBrZXk6ICcwLTAtMS0yJywKICAgIH1dLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9uQ29udGV4dE1lbnVDbGljayA9ICh0cmVlS2V5LCBtZW51S2V5KSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGB0cmVlS2V5OiAke3RyZWVLZXl9LCBtZW51S2V5OiAke21lbnVLZXl9YCk7CiAgICB9OwoKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgd2F0Y2goZXhwYW5kZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICB0cmVlRGF0YSwKICAgICAgb25Db250ZXh0TWVudUNsaWNrLAogICAgICBleHBhbmRlZEtleXMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+CjxzdHlsZT48L3N0eWxlPg=="}},{default:p(()=>[k(g,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=A=>t.expandedKeys=A),"tree-data":t.treeData},{title:p(({key:A,title:h})=>[k(e,{trigger:["contextmenu"]},{overlay:p(()=>[k(l,{onClick:({key:K})=>t.onContextMenuClick(A,K)},{default:p(()=>[k(d,{key:"1"},{default:p(()=>[ds]),_:1}),k(d,{key:"2"},{default:p(()=>[gs]),_:1}),k(d,{key:"3"},{default:p(()=>[Cs]),_:1})]),_:2},1032,["onClick"])]),default:p(()=>[n("span",null,Z(h),1)]),_:2},1024)]),_:1},8,["expandedKeys","tree-data"])]),htmlCode:p(()=>[Is]),jsVersionHtml:p(()=>[As]),_:1},8,["jsfiddle"])}var ys=m(rs,[["render",hs]]);function F(t="0",a=3){const c=[];for(let r=0;r<10;r+=1){const o=`${t}-${r}`,i={title:o,key:o};a>0&&(i.children=F(o,a-1)),c.push(i)}return c}const ms=f({setup(){const t=I(["0-0-0","0-0-1"]),a=I(["0-0-0","0-0-1"]);return G(t,()=>{console.log("selectedKeys",t)}),G(a,()=>{console.log("checkedKeys",a)}),{treeData:F(),selectedKeys:t,checkedKeys:a}}}),bs={key:0,style:{color:"#1890ff"}},Zs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checkedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"default-expand-all"),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("233"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),s("path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" list"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeNode"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("number"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("level "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeNode`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("treeNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ws=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checkedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"default-expand-all"),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("233"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),s("path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" treeNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("level "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeNode`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("treeNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"dig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function fs(t,a,c,r,o,i){const d=u("a-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"Use virtual list through `height` prop.",cn:"\u4F7F\u7528 `height` \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>height</code> \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use virtual list through <code>height</code> prop.</p>
`,order:9,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual scroll"},relativePath:"components/tree/demo/virtual-scroll.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6c2VsZWN0ZWRLZXlzPSJzZWxlY3RlZEtleXMiCiAgICB2LW1vZGVsOmNoZWNrZWRLZXlzPSJjaGVja2VkS2V5cyIKICAgIGRlZmF1bHQtZXhwYW5kLWFsbAogICAgY2hlY2thYmxlCiAgICA6aGVpZ2h0PSIyMzMiCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+CiAgICA8dGVtcGxhdGUgI3RpdGxlPSJ7IHRpdGxlLCBrZXkgfSI+CiAgICAgIDxzcGFuIHYtaWY9ImtleSA9PT0gJzAtMC0xLTAnIiBzdHlsZT0iY29sb3I6ICMxODkwZmYiPnt7IHRpdGxlIH19PC9zcGFuPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFRyZWVQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKCmZ1bmN0aW9uIGRpZyhwYXRoID0gJzAnLCBsZXZlbCA9IDMpIHsKICBjb25zdCBsaXN0OiBUcmVlUHJvcHNbJ3RyZWVEYXRhJ10gPSBbXTsKICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHsKICAgIGNvbnN0IGtleSA9IGAke3BhdGh9LSR7aX1gOwogICAgY29uc3QgdHJlZU5vZGU6IFRyZWVQcm9wc1sndHJlZURhdGEnXVtudW1iZXJdID0gewogICAgICB0aXRsZToga2V5LAogICAgICBrZXksCiAgICB9OwoKICAgIGlmIChsZXZlbCA+IDApIHsKICAgICAgdHJlZU5vZGUuY2hpbGRyZW4gPSBkaWcoa2V5LCBsZXZlbCAtIDEpOwogICAgfQoKICAgIGxpc3QucHVzaCh0cmVlTm9kZSk7CiAgfQogIHJldHVybiBsaXN0Owp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcmVmPHN0cmluZ1tdPihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgY29uc3QgY2hlY2tlZEtleXMgPSByZWY8c3RyaW5nW10+KFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICB3YXRjaChzZWxlY3RlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkS2V5cycsIHNlbGVjdGVkS2V5cyk7CiAgICB9KTsKICAgIHdhdGNoKGNoZWNrZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTsKICAgIH0pOwoKICAgIHJldHVybiB7CiAgICAgIHRyZWVEYXRhOiBkaWcoKSwKICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICBjaGVja2VkS2V5cywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6c2VsZWN0ZWRLZXlzPSJzZWxlY3RlZEtleXMiCiAgICB2LW1vZGVsOmNoZWNrZWRLZXlzPSJjaGVja2VkS2V5cyIKICAgIGRlZmF1bHQtZXhwYW5kLWFsbAogICAgY2hlY2thYmxlCiAgICA6aGVpZ2h0PSIyMzMiCiAgICA6dHJlZS1kYXRhPSJ0cmVlRGF0YSIKICA+CiAgICA8dGVtcGxhdGUgI3RpdGxlPSJ7IHRpdGxlLCBrZXkgfSI+CiAgICAgIDxzcGFuIHYtaWY9ImtleSA9PT0gJzAtMC0xLTAnIiBzdHlsZT0iY29sb3I6ICMxODkwZmYiPnt7IHRpdGxlIH19PC9zcGFuPgogICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHRpdGxlIH19PC90ZW1wbGF0ZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRyZWU+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CgpmdW5jdGlvbiBkaWcocGF0aCA9ICcwJywgbGV2ZWwgPSAzKSB7CiAgY29uc3QgbGlzdCA9IFtdOwoKICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHsKICAgIGNvbnN0IGtleSA9IGAke3BhdGh9LSR7aX1gOwogICAgY29uc3QgdHJlZU5vZGUgPSB7CiAgICAgIHRpdGxlOiBrZXksCiAgICAgIGtleSwKICAgIH07CgogICAgaWYgKGxldmVsID4gMCkgewogICAgICB0cmVlTm9kZS5jaGlsZHJlbiA9IGRpZyhrZXksIGxldmVsIC0gMSk7CiAgICB9CgogICAgbGlzdC5wdXNoKHRyZWVOb2RlKTsKICB9CgogIHJldHVybiBsaXN0Owp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcmVmKFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICBjb25zdCBjaGVja2VkS2V5cyA9IHJlZihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgd2F0Y2goc2VsZWN0ZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZEtleXMnLCBzZWxlY3RlZEtleXMpOwogICAgfSk7CiAgICB3YXRjaChjaGVja2VkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHRyZWVEYXRhOiBkaWcoKSwKICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICBjaGVja2VkS2V5cywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:p(()=>[k(d,{selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[0]||(a[0]=e=>t.selectedKeys=e),checkedKeys:t.checkedKeys,"onUpdate:checkedKeys":a[1]||(a[1]=e=>t.checkedKeys=e),"default-expand-all":"",checkable:"",height:233,"tree-data":t.treeData},{title:p(({title:e,key:g})=>[g==="0-0-1-0"?(C(),b("span",bs,Z(e),1)):(C(),b(v,{key:1},[s(Z(e),1)],64))]),_:1},8,["selectedKeys","checkedKeys","tree-data"])]),htmlCode:p(()=>[Zs]),jsVersionHtml:p(()=>[ws]),_:1},8,["jsfiddle"])}var Gs=m(ms,[["render",fs]]);const D=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]},{title:"parent 2",key:"1-0",children:[{title:"parent 2-0",key:"1-0-0"},{title:"parent 2-1",key:"2-0-1"}]}],Ks=f({setup(){const t=I([]),a=I(["0-0-0","0-0-1"]),c=I(["0-0-0","0-0-1"]);return G(t,()=>{console.log("expandedKeys",t)}),G(a,()=>{console.log("selectedKeys",a)}),G(c,()=>{console.log("checkedKeys",c)}),{treeData:D,expandedKeys:t,selectedKeys:a,checkedKeys:c,handleExpand:(o,{expanded:i,node:d})=>{const l=((d.parent?d.parent.children:D)||[]).map(({key:e})=>e);i?t.value=j.difference(o,l).concat(d.key):t.value=o}}}}),Bs={key:0,style:{color:"#1890ff"}},Ws=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleExpand"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" TreeProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" _ "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'lodash-es'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" treeData"),n("span",{class:"token operator"},":"),s(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(" title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sss'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2-0'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2-1'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleExpand"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("keys"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" expanded"),n("span",{class:"token punctuation"},","),s(" node "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// node.parent add from 3.0.0-alpha.10"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" tempKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("parent "),n("span",{class:"token operator"},"?"),s(" node"),n("span",{class:"token punctuation"},"."),s("parent"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},":"),s(" treeData"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" key "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" key"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("expanded"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" _"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"difference"),n("span",{class:"token punctuation"},"("),s("keys"),n("span",{class:"token punctuation"},","),s(" tempKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" keys"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
      handleExpand`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),vs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleExpand"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ title, key }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("key === "),n("span",{class:"token punctuation"},"'"),s("0-0-1-0"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #1890ff")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s("{{ title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" _ "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'lodash-es'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
    children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'sss'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-0'"),n("span",{class:"token punctuation"},","),s(`
  children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2-0'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1-0-0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent 2-1'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2-0-1'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("expandedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedKeys'"),n("span",{class:"token punctuation"},","),s(" expandedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("selectedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectedKeys'"),n("span",{class:"token punctuation"},","),s(" selectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("checkedKeys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkedKeys'"),n("span",{class:"token punctuation"},","),s(" checkedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleExpand"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("keys"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      expanded`),n("span",{class:"token punctuation"},","),s(`
      node`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// node.parent add from 3.0.0-alpha.10"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" tempKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("parent "),n("span",{class:"token operator"},"?"),s(" node"),n("span",{class:"token punctuation"},"."),s("parent"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},":"),s(" treeData"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
        key`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("expanded"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" _"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"difference"),n("span",{class:"token punctuation"},"("),s("keys"),n("span",{class:"token punctuation"},","),s(" tempKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" keys"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
      expandedKeys`),n("span",{class:"token punctuation"},","),s(`
      selectedKeys`),n("span",{class:"token punctuation"},","),s(`
      checkedKeys`),n("span",{class:"token punctuation"},","),s(`
      handleExpand`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Vs(t,a,c,r,o,i){const d=u("a-tree"),l=u("demo-box");return C(),y(l,{jsfiddle:{us:"Nodes of the same level can only be expanded one",cn:"\u540C\u4E00\u7EA7\u7684\u8282\u70B9\uFF0C\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u540C\u4E00\u7EA7\u7684\u8282\u70B9\uFF0C\u6BCF\u6B21\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Nodes of the same level can only be expanded one</p>
`,order:0,title:{"zh-CN":"\u624B\u98CE\u7434\u6A21\u5F0F","en-US":"Accordion"},relativePath:"components/tree/demo/accordion.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6c2VsZWN0ZWRLZXlzPSJzZWxlY3RlZEtleXMiCiAgICA6ZXhwYW5kZWQta2V5cz0iZXhwYW5kZWRLZXlzIgogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICBAZXhwYW5kPSJoYW5kbGVFeHBhbmQiCiAgPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyB0aXRsZSwga2V5IH0iPgogICAgICA8c3BhbiB2LWlmPSJrZXkgPT09ICcwLTAtMS0wJyIgc3R5bGU9ImNvbG9yOiAjMTg5MGZmIj57eyB0aXRsZSB9fTwvc3Bhbj4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyB0aXRsZSB9fTwvdGVtcGxhdGU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmVlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBUcmVlUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCBfIGZyb20gJ2xvZGFzaC1lcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0cmVlRGF0YTogVHJlZVByb3BzWyd0cmVlRGF0YSddID0gWwogIHsKICAgIHRpdGxlOiAncGFyZW50IDEnLAogICAga2V5OiAnMC0wJywKICAgIGNoaWxkcmVuOiBbCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTAnLAogICAgICAgIGtleTogJzAtMC0wJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgeyB0aXRsZTogJ2xlYWYnLCBrZXk6ICcwLTAtMC0wJyB9LAogICAgICAgICAgeyB0aXRsZTogJ2xlYWYnLCBrZXk6ICcwLTAtMC0xJyB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAxLTEnLAogICAgICAgIGtleTogJzAtMC0xJywKICAgICAgICBjaGlsZHJlbjogW3sga2V5OiAnMC0wLTEtMCcsIHRpdGxlOiAnc3NzJyB9XSwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICB0aXRsZTogJ3BhcmVudCAyJywKICAgIGtleTogJzEtMCcsCiAgICBjaGlsZHJlbjogWwogICAgICB7CiAgICAgICAgdGl0bGU6ICdwYXJlbnQgMi0wJywKICAgICAgICBrZXk6ICcxLTAtMCcsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB0aXRsZTogJ3BhcmVudCAyLTEnLAogICAgICAgIGtleTogJzItMC0xJywKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBleHBhbmRlZEtleXMgPSByZWY8c3RyaW5nW10+KFtdKTsKICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJlZjxzdHJpbmdbXT4oWycwLTAtMCcsICcwLTAtMSddKTsKICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gcmVmPHN0cmluZ1tdPihbJzAtMC0wJywgJzAtMC0xJ10pOwogICAgd2F0Y2goZXhwYW5kZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpOwogICAgfSk7CiAgICB3YXRjaChzZWxlY3RlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkS2V5cycsIHNlbGVjdGVkS2V5cyk7CiAgICB9KTsKICAgIHdhdGNoKGNoZWNrZWRLZXlzLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTsKICAgIH0pOwogICAgY29uc3QgaGFuZGxlRXhwYW5kID0gKGtleXM6IHN0cmluZ1tdLCB7IGV4cGFuZGVkLCBub2RlIH0pID0+IHsKICAgICAgLy8gbm9kZS5wYXJlbnQgYWRkIGZyb20gMy4wLjAtYWxwaGEuMTAKICAgICAgY29uc3QgdGVtcEtleXMgPSAoKG5vZGUucGFyZW50ID8gbm9kZS5wYXJlbnQuY2hpbGRyZW4gOiB0cmVlRGF0YSkgfHwgW10pLm1hcCgKICAgICAgICAoeyBrZXkgfSkgPT4ga2V5LAogICAgICApOwogICAgICBpZiAoZXhwYW5kZWQpIHsKICAgICAgICBleHBhbmRlZEtleXMudmFsdWUgPSBfLmRpZmZlcmVuY2Uoa2V5cywgdGVtcEtleXMpLmNvbmNhdChub2RlLmtleSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgZXhwYW5kZWRLZXlzLnZhbHVlID0ga2V5czsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHRyZWVEYXRhLAogICAgICBleHBhbmRlZEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgY2hlY2tlZEtleXMsCiAgICAgIGhhbmRsZUV4cGFuZCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyZWUKICAgIHYtbW9kZWw6c2VsZWN0ZWRLZXlzPSJzZWxlY3RlZEtleXMiCiAgICA6ZXhwYW5kZWQta2V5cz0iZXhwYW5kZWRLZXlzIgogICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICBAZXhwYW5kPSJoYW5kbGVFeHBhbmQiCiAgPgogICAgPHRlbXBsYXRlICN0aXRsZT0ieyB0aXRsZSwga2V5IH0iPgogICAgICA8c3BhbiB2LWlmPSJrZXkgPT09ICcwLTAtMS0wJyIgc3R5bGU9ImNvbG9yOiAjMTg5MGZmIj57eyB0aXRsZSB9fTwvc3Bhbj4KICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyB0aXRsZSB9fTwvdGVtcGxhdGU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmVlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgXyBmcm9tICdsb2Rhc2gtZXMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpjb25zdCB0cmVlRGF0YSA9IFt7CiAgdGl0bGU6ICdwYXJlbnQgMScsCiAga2V5OiAnMC0wJywKICBjaGlsZHJlbjogW3sKICAgIHRpdGxlOiAncGFyZW50IDEtMCcsCiAgICBrZXk6ICcwLTAtMCcsCiAgICBjaGlsZHJlbjogW3sKICAgICAgdGl0bGU6ICdsZWFmJywKICAgICAga2V5OiAnMC0wLTAtMCcsCiAgICB9LCB7CiAgICAgIHRpdGxlOiAnbGVhZicsCiAgICAgIGtleTogJzAtMC0wLTEnLAogICAgfV0sCiAgfSwgewogICAgdGl0bGU6ICdwYXJlbnQgMS0xJywKICAgIGtleTogJzAtMC0xJywKICAgIGNoaWxkcmVuOiBbewogICAgICBrZXk6ICcwLTAtMS0wJywKICAgICAgdGl0bGU6ICdzc3MnLAogICAgfV0sCiAgfV0sCn0sIHsKICB0aXRsZTogJ3BhcmVudCAyJywKICBrZXk6ICcxLTAnLAogIGNoaWxkcmVuOiBbewogICAgdGl0bGU6ICdwYXJlbnQgMi0wJywKICAgIGtleTogJzEtMC0wJywKICB9LCB7CiAgICB0aXRsZTogJ3BhcmVudCAyLTEnLAogICAga2V5OiAnMi0wLTEnLAogIH1dLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHJlZihbXSk7CiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSByZWYoWycwLTAtMCcsICcwLTAtMSddKTsKICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gcmVmKFsnMC0wLTAnLCAnMC0wLTEnXSk7CiAgICB3YXRjaChleHBhbmRlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7CiAgICB9KTsKICAgIHdhdGNoKHNlbGVjdGVkS2V5cywgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRLZXlzJywgc2VsZWN0ZWRLZXlzKTsKICAgIH0pOwogICAgd2F0Y2goY2hlY2tlZEtleXMsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpOwogICAgfSk7CgogICAgY29uc3QgaGFuZGxlRXhwYW5kID0gKGtleXMsIHsKICAgICAgZXhwYW5kZWQsCiAgICAgIG5vZGUsCiAgICB9KSA9PiB7CiAgICAgIC8vIG5vZGUucGFyZW50IGFkZCBmcm9tIDMuMC4wLWFscGhhLjEwCiAgICAgIGNvbnN0IHRlbXBLZXlzID0gKChub2RlLnBhcmVudCA/IG5vZGUucGFyZW50LmNoaWxkcmVuIDogdHJlZURhdGEpIHx8IFtdKS5tYXAoKHsKICAgICAgICBrZXksCiAgICAgIH0pID0+IGtleSk7CgogICAgICBpZiAoZXhwYW5kZWQpIHsKICAgICAgICBleHBhbmRlZEtleXMudmFsdWUgPSBfLmRpZmZlcmVuY2Uoa2V5cywgdGVtcEtleXMpLmNvbmNhdChub2RlLmtleSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgZXhwYW5kZWRLZXlzLnZhbHVlID0ga2V5czsKICAgICAgfQogICAgfTsKCiAgICByZXR1cm4gewogICAgICB0cmVlRGF0YSwKICAgICAgZXhwYW5kZWRLZXlzLAogICAgICBzZWxlY3RlZEtleXMsCiAgICAgIGNoZWNrZWRLZXlzLAogICAgICBoYW5kbGVFeHBhbmQsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:p(()=>[k(d,{selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":a[0]||(a[0]=e=>t.selectedKeys=e),"expanded-keys":t.expandedKeys,"tree-data":t.treeData,onExpand:t.handleExpand},{title:p(({title:e,key:g})=>[g==="0-0-1-0"?(C(),b("span",Bs,Z(e),1)):(C(),b(v,{key:1},[s(Z(e),1)],64))]),_:1},8,["selectedKeys","expanded-keys","tree-data","onExpand"])]),htmlCode:p(()=>[Ws]),jsVersionHtml:p(()=>[vs]),_:1},8,["jsfiddle"])}var Rs=m(Ks,[["render",Vs]]);const Xs={pageData:{title:"Tree",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5C55\u793A",title:"Tree",subtitle:"\u6811\u5F62\u63A7\u4EF6",cover:"https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528`\u6811\u63A7\u4EF6`\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002"},{level:2,title:"API",slug:"API",content:"Tree props"},{level:3,title:"Tree props",slug:"Tree-props",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"TreeNode",slug:"TreeNode",content:""},{level:3,title:"DirectoryTree props",slug:"DirectoryTree-props",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F"},{level:3,title:"\u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F",slug:"\u5728-showLine-\u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F",content:"\u6587\u4EF6\u56FE\u6807\u901A\u8FC7 switcherIcon \u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u4F60\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u6837\u5F0F"}],relativePath:"components/tree/index.zh-CN.md",content:`
\u591A\u5C42\u6B21\u7684\u7ED3\u6784\u5217\u8868\u3002

## \u4F55\u65F6\u4F7F\u7528

\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\`\u6811\u63A7\u4EF6\`\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002

## API

### Tree props

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |  |
| --- | --- | --- | --- | --- | --- |
| autoExpandParent | \u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9 | boolean | false |  |  |
| blockNode | \u662F\u5426\u8282\u70B9\u5360\u636E\u4E00\u884C | boolean | false |  |  |
| checkable | \u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846 | boolean | false |  |  |
| checkedKeys(v-model) | \uFF08\u53D7\u63A7\uFF09\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9\uFF08\u6CE8\u610F\uFF1A\u7236\u5B50\u8282\u70B9\u6709\u5173\u8054\uFF0C\u5982\u679C\u4F20\u5165\u7236\u8282\u70B9 key\uFF0C\u5219\u5B50\u8282\u70B9\u81EA\u52A8\u9009\u4E2D\uFF1B\u76F8\u5E94\u5F53\u5B50\u8282\u70B9 key \u90FD\u4F20\u5165\uFF0C\u7236\u8282\u70B9\u4E5F\u81EA\u52A8\u9009\u4E2D\u3002\u5F53\u8BBE\u7F6E\`checkable\`\u548C\`checkStrictly\`\uFF0C\u5B83\u662F\u4E00\u4E2A\u6709\`checked\`\u548C\`halfChecked\`\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u7236\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u4E0E\u5426\u4E0D\u518D\u5173\u8054 | string\\[] \\| number\\[] \\| {checked: string\\[] \\| number\\[], halfChecked: string\\[] \\| number\\[]} | \\[] |  |  |
| checkStrictly | checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09 | boolean | false |  |  |
| defaultExpandAll | \u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9, \u5982\u679C\u662F\u5F02\u6B65\u6570\u636E\uFF0C\u9700\u8981\u5728\u6570\u636E\u8FD4\u56DE\u540E\u518D\u5B9E\u4F8B\u5316\uFF0C\u5EFA\u8BAE\u7528 v-if=&quot;data.length&quot;\uFF1B\u5F53\u6709 expandedKeys \u65F6\uFF0CdefaultExpandAll \u5C06\u5931\u6548 | boolean | false |  |  |
| disabled | \u5C06\u6811\u7981\u7528 | bool | false |  |  |
| draggable | \u8BBE\u7F6E\u8282\u70B9\u53EF\u62D6\u62FD | boolean | false |  |  |
| expandedKeys(v-model) | \uFF08\u53D7\u63A7\uFF09\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9 | string\\[] \\| number\\[] | \\[] |  |  |
| fieldNames | \u66FF\u6362 treeNode \u4E2D title,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5 | object | {children:&#39;children&#39;, title:&#39;title&#39;, key:&#39;key&#39; } | 3.0.0 |  |
| filterTreeNode | \u6309\u9700\u7B5B\u9009\u6811\u8282\u70B9\uFF08\u9AD8\u4EAE\uFF09\uFF0C\u8FD4\u56DE true | function(node) | - |  |  |
| loadData | \u5F02\u6B65\u52A0\u8F7D\u6570\u636E | function(node) | - |  |  |
| loadedKeys | \uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 \`loadData\` \u4F7F\u7528 | string\\[] \\| number\\[] | \\[] |  |  |
| multiple | \u652F\u6301\u70B9\u9009\u591A\u4E2A\u8282\u70B9\uFF08\u8282\u70B9\u672C\u8EAB\uFF09 | boolean | false |  |  |
| selectable | \u662F\u5426\u53EF\u9009\u4E2D | boolean | true |  |  |
| selectedKeys(v-model) | \uFF08\u53D7\u63A7\uFF09\u8BBE\u7F6E\u9009\u4E2D\u7684\u6811\u8282\u70B9 | string\\[] \\| number\\[] | - |  |  |
| showIcon | \u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F | boolean | false |  |  |
| showLine | \u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF | boolean \\| {showLeafIcon: boolean}(3.0+) | false |  |  |
| switcherIcon | \u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807 | v-slot:switcherIcon=&quot;{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}&quot; | - |  |  |
| title | \u81EA\u5B9A\u4E49\u6807\u9898 | slot |  | 2.0.0 |  |
| treeData | treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08key \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09 | [TreeNode\\[\\]](#TreeNode) | -- |  |  |
| virtual | \u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean | true | 3.0 |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| check | \u70B9\u51FB\u590D\u9009\u6846\u89E6\u53D1 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) |
| dragend | dragend \u89E6\u53D1\u65F6\u8C03\u7528 | function({event, node}) |
| dragenter | dragenter \u89E6\u53D1\u65F6\u8C03\u7528 | function({event, node, expandedKeys}) |
| dragleave | dragleave \u89E6\u53D1\u65F6\u8C03\u7528 | function({event, node}) |
| dragover | dragover \u89E6\u53D1\u65F6\u8C03\u7528 | function({event, node}) |
| dragstart | \u5F00\u59CB\u62D6\u62FD\u65F6\u8C03\u7528 | function({event, node}) |
| drop | drop \u89E6\u53D1\u65F6\u8C03\u7528 | function({event, node, dragNode, dragNodesKeys}) |
| expand | \u5C55\u5F00/\u6536\u8D77\u8282\u70B9\u65F6\u89E6\u53D1 | function(expandedKeys, {expanded: bool, node}) |
| load | \u8282\u70B9\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1 | function(loadedKeys, {event, node}) |
| rightClick | \u54CD\u5E94\u53F3\u952E\u70B9\u51FB | function({event, node}) |
| select | \u70B9\u51FB\u6811\u8282\u70B9\u89E6\u53D1 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) |

### TreeNode

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| checkable | \u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox | boolean | - |  |
| class | \u8282\u70B9\u7684 class | string | - |  |
| disableCheckbox | \u7981\u6389 checkbox | boolean | false |  |
| disabled | \u7981\u6389\u54CD\u5E94 | boolean | false |  |
| icon | \u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u63A5\u6536\u7EC4\u4EF6\uFF0Cprops \u4E3A\u5F53\u524D\u8282\u70B9 props | slot\\|slot-scope | - |  |
| isLeaf | \u8BBE\u7F6E\u4E3A\u53F6\u5B50\u8282\u70B9(\u8BBE\u7F6E\u4E86\`loadData\`\u65F6\u6709\u6548) | boolean | false |  |
| key | \u88AB\u6811\u7684 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys \u5C5E\u6027\u6240\u7528\u3002\u6CE8\u610F\uFF1A\u6574\u4E2A\u6811\u8303\u56F4\u5185\u7684\u6240\u6709\u8282\u70B9\u7684 key \u503C\u4E0D\u80FD\u91CD\u590D\uFF01 | string \\| number | \u5185\u90E8\u8BA1\u7B97\u51FA\u7684\u8282\u70B9\u4F4D\u7F6E |  |
| selectable | \u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u4E2D | boolean | true |  |
| style | \u8282\u70B9\u7684 style | string\\|object | - |  |
| title | \u6807\u9898 | string | &#39;---&#39; |  |

### DirectoryTree props

| \u53C2\u6570         | \u8BF4\u660E                                              | \u7C7B\u578B   | \u9ED8\u8BA4\u503C |
| ------------ | ------------------------------------------------- | ------ | ------ |
| expandAction | \u76EE\u5F55\u5C55\u5F00\u903B\u8F91\uFF0C\u53EF\u9009 \`false\` \`&#39;click&#39;\` \`&#39;dblclick&#39;\` | string | click  |

## FAQ

### \u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F

\u6587\u4EF6\u56FE\u6807\u901A\u8FC7 switcherIcon \u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u4F60\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u6837\u5F0F
`,html:`<p>\u591A\u5C42\u6B21\u7684\u7ED3\u6784\u5217\u8868\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528<code>\u6811\u63A7\u4EF6</code>\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002</p>
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
<td>autoExpandParent</td>
<td>\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>blockNode</td>
<td>\u662F\u5426\u8282\u70B9\u5360\u636E\u4E00\u884C</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>checkable</td>
<td>\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>checkedKeys(v-model)</td>
<td>\uFF08\u53D7\u63A7\uFF09\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9\uFF08\u6CE8\u610F\uFF1A\u7236\u5B50\u8282\u70B9\u6709\u5173\u8054\uFF0C\u5982\u679C\u4F20\u5165\u7236\u8282\u70B9 key\uFF0C\u5219\u5B50\u8282\u70B9\u81EA\u52A8\u9009\u4E2D\uFF1B\u76F8\u5E94\u5F53\u5B50\u8282\u70B9 key \u90FD\u4F20\u5165\uFF0C\u7236\u8282\u70B9\u4E5F\u81EA\u52A8\u9009\u4E2D\u3002\u5F53\u8BBE\u7F6E<code>checkable</code>\u548C<code>checkStrictly</code>\uFF0C\u5B83\u662F\u4E00\u4E2A\u6709<code>checked</code>\u548C<code>halfChecked</code>\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u7236\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u4E0E\u5426\u4E0D\u518D\u5173\u8054</td>
<td>string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}</td>
<td>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>checkStrictly</td>
<td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>defaultExpandAll</td>
<td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9, \u5982\u679C\u662F\u5F02\u6B65\u6570\u636E\uFF0C\u9700\u8981\u5728\u6570\u636E\u8FD4\u56DE\u540E\u518D\u5B9E\u4F8B\u5316\uFF0C\u5EFA\u8BAE\u7528 v-if=&quot;data.length&quot;\uFF1B\u5F53\u6709 expandedKeys \u65F6\uFF0CdefaultExpandAll \u5C06\u5931\u6548</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u5C06\u6811\u7981\u7528</td>
<td>bool</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>draggable</td>
<td>\u8BBE\u7F6E\u8282\u70B9\u53EF\u62D6\u62FD</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>expandedKeys(v-model)</td>
<td>\uFF08\u53D7\u63A7\uFF09\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9</td>
<td>string[] | number[]</td>
<td>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>\u66FF\u6362 treeNode \u4E2D title,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td>
<td>object</td>
<td>{children:'children', title:'title', key:'key' }</td>
<td>3.0.0</td>
<td></td>
</tr>
<tr>
<td>filterTreeNode</td>
<td>\u6309\u9700\u7B5B\u9009\u6811\u8282\u70B9\uFF08\u9AD8\u4EAE\uFF09\uFF0C\u8FD4\u56DE true</td>
<td>function(node)</td>
<td>-</td>
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
<td>loadedKeys</td>
<td>\uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 <code>loadData</code> \u4F7F\u7528</td>
<td>string[] | number[]</td>
<td>[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>\u652F\u6301\u70B9\u9009\u591A\u4E2A\u8282\u70B9\uFF08\u8282\u70B9\u672C\u8EAB\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>selectable</td>
<td>\u662F\u5426\u53EF\u9009\u4E2D</td>
<td>boolean</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>selectedKeys(v-model)</td>
<td>\uFF08\u53D7\u63A7\uFF09\u8BBE\u7F6E\u9009\u4E2D\u7684\u6811\u8282\u70B9</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showIcon</td>
<td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>showLine</td>
<td>\u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF</td>
<td>boolean | {showLeafIcon: boolean}(3.0+)</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>switcherIcon</td>
<td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807</td>
<td>v-slot:switcherIcon=&quot;{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}&quot;</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u81EA\u5B9A\u4E49\u6807\u9898</td>
<td>slot</td>
<td></td>
<td>2.0.0</td>
<td></td>
</tr>
<tr>
<td>treeData</td>
<td>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08key \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td>
<td><a href="#TreeNode">TreeNode[]</a></td>
<td>--</td>
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
</tr>
</thead>
<tbody>
<tr>
<td>check</td>
<td>\u70B9\u51FB\u590D\u9009\u6846\u89E6\u53D1</td>
<td>function(checkedKeys, e:{checked: bool, checkedNodes, node, event})</td>
</tr>
<tr>
<td>dragend</td>
<td>dragend \u89E6\u53D1\u65F6\u8C03\u7528</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>dragenter</td>
<td>dragenter \u89E6\u53D1\u65F6\u8C03\u7528</td>
<td>function({event, node, expandedKeys})</td>
</tr>
<tr>
<td>dragleave</td>
<td>dragleave \u89E6\u53D1\u65F6\u8C03\u7528</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>dragover</td>
<td>dragover \u89E6\u53D1\u65F6\u8C03\u7528</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>dragstart</td>
<td>\u5F00\u59CB\u62D6\u62FD\u65F6\u8C03\u7528</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>drop</td>
<td>drop \u89E6\u53D1\u65F6\u8C03\u7528</td>
<td>function({event, node, dragNode, dragNodesKeys})</td>
</tr>
<tr>
<td>expand</td>
<td>\u5C55\u5F00/\u6536\u8D77\u8282\u70B9\u65F6\u89E6\u53D1</td>
<td>function(expandedKeys, {expanded: bool, node})</td>
</tr>
<tr>
<td>load</td>
<td>\u8282\u70B9\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1</td>
<td>function(loadedKeys, {event, node})</td>
</tr>
<tr>
<td>rightClick</td>
<td>\u54CD\u5E94\u53F3\u952E\u70B9\u51FB</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>select</td>
<td>\u70B9\u51FB\u6811\u8282\u70B9\u89E6\u53D1</td>
<td>function(selectedKeys, e:{selected: bool, selectedNodes, node, event})</td>
</tr>
</tbody>
</table>
<h3 id="TreeNode">TreeNode <a class="header-anchor" href="#TreeNode">
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
<td>checkable</td>
<td>\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>class</td>
<td>\u8282\u70B9\u7684 class</td>
<td>string</td>
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
<td>\u7981\u6389\u54CD\u5E94</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u63A5\u6536\u7EC4\u4EF6\uFF0Cprops \u4E3A\u5F53\u524D\u8282\u70B9 props</td>
<td>slot|slot-scope</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>isLeaf</td>
<td>\u8BBE\u7F6E\u4E3A\u53F6\u5B50\u8282\u70B9(\u8BBE\u7F6E\u4E86<code>loadData</code>\u65F6\u6709\u6548)</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td>\u88AB\u6811\u7684 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys \u5C5E\u6027\u6240\u7528\u3002\u6CE8\u610F\uFF1A\u6574\u4E2A\u6811\u8303\u56F4\u5185\u7684\u6240\u6709\u8282\u70B9\u7684 key \u503C\u4E0D\u80FD\u91CD\u590D\uFF01</td>
<td>string | number</td>
<td>\u5185\u90E8\u8BA1\u7B97\u51FA\u7684\u8282\u70B9\u4F4D\u7F6E</td>
<td></td>
</tr>
<tr>
<td>selectable</td>
<td>\u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u4E2D</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>\u8282\u70B9\u7684 style</td>
<td>string|object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u6807\u9898</td>
<td>string</td>
<td>'---'</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DirectoryTree-props">DirectoryTree props <a class="header-anchor" href="#DirectoryTree-props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>expandAction</td>
<td>\u76EE\u5F55\u5C55\u5F00\u903B\u8F91\uFF0C\u53EF\u9009 <code>false</code> <code>'click'</code> <code>'dblclick'</code></td>
<td>string</td>
<td>click</td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u5728-showLine-\u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F">\u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F <a class="header-anchor" href="#\u5728-showLine-\u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u6587\u4EF6\u56FE\u6807\u901A\u8FC7 switcherIcon \u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u4F60\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u6837\u5F0F</p>
`,lastUpdated:1701878243966}},Ss={class:"markdown"},Hs=Y('<p>\u591A\u5C42\u6B21\u7684\u7ED3\u6784\u5217\u8868\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528<code>\u6811\u63A7\u4EF6</code>\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Tree-props">Tree props <a class="header-anchor" href="#Tree-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>autoExpandParent</td><td>\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>blockNode</td><td>\u662F\u5426\u8282\u70B9\u5360\u636E\u4E00\u884C</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>checkable</td><td>\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>checkedKeys(v-model)</td><td>\uFF08\u53D7\u63A7\uFF09\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9\uFF08\u6CE8\u610F\uFF1A\u7236\u5B50\u8282\u70B9\u6709\u5173\u8054\uFF0C\u5982\u679C\u4F20\u5165\u7236\u8282\u70B9 key\uFF0C\u5219\u5B50\u8282\u70B9\u81EA\u52A8\u9009\u4E2D\uFF1B\u76F8\u5E94\u5F53\u5B50\u8282\u70B9 key \u90FD\u4F20\u5165\uFF0C\u7236\u8282\u70B9\u4E5F\u81EA\u52A8\u9009\u4E2D\u3002\u5F53\u8BBE\u7F6E<code>checkable</code>\u548C<code>checkStrictly</code>\uFF0C\u5B83\u662F\u4E00\u4E2A\u6709<code>checked</code>\u548C<code>halfChecked</code>\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u7236\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u4E0E\u5426\u4E0D\u518D\u5173\u8054</td><td>string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}</td><td>[]</td><td></td><td></td></tr><tr><td>checkStrictly</td><td>checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>defaultExpandAll</td><td>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9, \u5982\u679C\u662F\u5F02\u6B65\u6570\u636E\uFF0C\u9700\u8981\u5728\u6570\u636E\u8FD4\u56DE\u540E\u518D\u5B9E\u4F8B\u5316\uFF0C\u5EFA\u8BAE\u7528 v-if=&quot;data.length&quot;\uFF1B\u5F53\u6709 expandedKeys \u65F6\uFF0CdefaultExpandAll \u5C06\u5931\u6548</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>disabled</td><td>\u5C06\u6811\u7981\u7528</td><td>bool</td><td>false</td><td></td><td></td></tr><tr><td>draggable</td><td>\u8BBE\u7F6E\u8282\u70B9\u53EF\u62D6\u62FD</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>expandedKeys(v-model)</td><td>\uFF08\u53D7\u63A7\uFF09\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>[]</td><td></td><td></td></tr><tr><td>fieldNames</td><td>\u66FF\u6362 treeNode \u4E2D title,key,children \u5B57\u6BB5\u4E3A treeData \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td><td>object</td><td>{children:&#39;children&#39;, title:&#39;title&#39;, key:&#39;key&#39; }</td><td>3.0.0</td><td></td></tr><tr><td>filterTreeNode</td><td>\u6309\u9700\u7B5B\u9009\u6811\u8282\u70B9\uFF08\u9AD8\u4EAE\uFF09\uFF0C\u8FD4\u56DE true</td><td>function(node)</td><td>-</td><td></td><td></td></tr><tr><td>loadData</td><td>\u5F02\u6B65\u52A0\u8F7D\u6570\u636E</td><td>function(node)</td><td>-</td><td></td><td></td></tr><tr><td>loadedKeys</td><td>\uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 <code>loadData</code> \u4F7F\u7528</td><td>string[] | number[]</td><td>[]</td><td></td><td></td></tr><tr><td>multiple</td><td>\u652F\u6301\u70B9\u9009\u591A\u4E2A\u8282\u70B9\uFF08\u8282\u70B9\u672C\u8EAB\uFF09</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>selectable</td><td>\u662F\u5426\u53EF\u9009\u4E2D</td><td>boolean</td><td>true</td><td></td><td></td></tr><tr><td>selectedKeys(v-model)</td><td>\uFF08\u53D7\u63A7\uFF09\u8BBE\u7F6E\u9009\u4E2D\u7684\u6811\u8282\u70B9</td><td>string[] | number[]</td><td>-</td><td></td><td></td></tr><tr><td>showIcon</td><td>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>showLine</td><td>\u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF</td><td>boolean | {showLeafIcon: boolean}(3.0+)</td><td>false</td><td></td><td></td></tr><tr><td>switcherIcon</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807</td><td>v-slot:switcherIcon=&quot;{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}&quot;</td><td>-</td><td></td><td></td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td><td>slot</td><td></td><td>2.0.0</td><td></td></tr><tr><td>treeData</td><td>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08key \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</td><td><a href="#TreeNode">TreeNode[]</a></td><td>--</td><td></td><td></td></tr><tr><td>virtual</td><td>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>check</td><td>\u70B9\u51FB\u590D\u9009\u6846\u89E6\u53D1</td><td>function(checkedKeys, e:{checked: bool, checkedNodes, node, event})</td></tr><tr><td>dragend</td><td>dragend \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>dragenter</td><td>dragenter \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node, expandedKeys})</td></tr><tr><td>dragleave</td><td>dragleave \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>dragover</td><td>dragover \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>dragstart</td><td>\u5F00\u59CB\u62D6\u62FD\u65F6\u8C03\u7528</td><td>function({event, node})</td></tr><tr><td>drop</td><td>drop \u89E6\u53D1\u65F6\u8C03\u7528</td><td>function({event, node, dragNode, dragNodesKeys})</td></tr><tr><td>expand</td><td>\u5C55\u5F00/\u6536\u8D77\u8282\u70B9\u65F6\u89E6\u53D1</td><td>function(expandedKeys, {expanded: bool, node})</td></tr><tr><td>load</td><td>\u8282\u70B9\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1</td><td>function(loadedKeys, {event, node})</td></tr><tr><td>rightClick</td><td>\u54CD\u5E94\u53F3\u952E\u70B9\u51FB</td><td>function({event, node})</td></tr><tr><td>select</td><td>\u70B9\u51FB\u6811\u8282\u70B9\u89E6\u53D1</td><td>function(selectedKeys, e:{selected: bool, selectedNodes, node, event})</td></tr></tbody></table><h3 id="TreeNode">TreeNode <a class="header-anchor" href="#TreeNode"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>checkable</td><td>\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox</td><td>boolean</td><td>-</td><td></td></tr><tr><td>class</td><td>\u8282\u70B9\u7684 class</td><td>string</td><td>-</td><td></td></tr><tr><td>disableCheckbox</td><td>\u7981\u6389 checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u7981\u6389\u54CD\u5E94</td><td>boolean</td><td>false</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u63A5\u6536\u7EC4\u4EF6\uFF0Cprops \u4E3A\u5F53\u524D\u8282\u70B9 props</td><td>slot|slot-scope</td><td>-</td><td></td></tr><tr><td>isLeaf</td><td>\u8BBE\u7F6E\u4E3A\u53F6\u5B50\u8282\u70B9(\u8BBE\u7F6E\u4E86<code>loadData</code>\u65F6\u6709\u6548)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>\u88AB\u6811\u7684 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys \u5C5E\u6027\u6240\u7528\u3002\u6CE8\u610F\uFF1A\u6574\u4E2A\u6811\u8303\u56F4\u5185\u7684\u6240\u6709\u8282\u70B9\u7684 key \u503C\u4E0D\u80FD\u91CD\u590D\uFF01</td><td>string | number</td><td>\u5185\u90E8\u8BA1\u7B97\u51FA\u7684\u8282\u70B9\u4F4D\u7F6E</td><td></td></tr><tr><td>selectable</td><td>\u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u4E2D</td><td>boolean</td><td>true</td><td></td></tr><tr><td>style</td><td>\u8282\u70B9\u7684 style</td><td>string|object</td><td>-</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>&#39;---&#39;</td><td></td></tr></tbody></table><h3 id="DirectoryTree-props">DirectoryTree props <a class="header-anchor" href="#DirectoryTree-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>expandAction</td><td>\u76EE\u5F55\u5C55\u5F00\u903B\u8F91\uFF0C\u53EF\u9009 <code>false</code> <code>&#39;click&#39;</code> <code>&#39;dblclick&#39;</code></td><td>string</td><td>click</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u5728-showLine-\u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F">\u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F <a class="header-anchor" href="#\u5728-showLine-\u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u6587\u4EF6\u56FE\u6807\u901A\u8FC7 switcherIcon \u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u4F60\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u6837\u5F0F</p>',15),Ys=[Hs];function xs(t,a,c,r,o,i){return C(),b("article",Ss,Ys)}var Ls=m(Xs,[["render",xs]]);const Ns={pageData:{title:"Tree",description:"",frontmatter:{category:"Components",type:"Data Display",title:"Tree",cover:"https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The `Tree` component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a `Tree`."},{level:2,title:"API",slug:"API",content:"Tree props"},{level:3,title:"Tree props",slug:"Tree-props",content:""},{level:3,title:"Events",slug:"Events",content:""},{level:3,title:"TreeNode",slug:"TreeNode",content:""},{level:3,title:"DirectoryTree props",slug:"DirectoryTree-props",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"How to hide file icon when use showLine?"},{level:3,title:"How to hide file icon when use showLine?",slug:"How-to-hide-file-icon-when-use-showLine",content:"File icon realize by using switcherIcon. You can overwrite the style to hide it"}],relativePath:"components/tree/index.en-US.md",content:`
A hierarchical list structure component.

## When To Use

Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The \`Tree\` component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a \`Tree\`.

## API

### Tree props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | false |  |
| blockNode | Whether treeNode fill remaining horizontal space | boolean | false |  |
| checkable | Adds a \`Checkbox\` before the treeNodes | boolean | false |  |
| checkedKeys(v-model) | (Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When \`checkable\` and \`checkStrictly\` is true, its object has \`checked\` and \`halfChecked\` property. Regardless of whether the child or parent treeNode is checked, they won&#39;t impact each other. | string\\[] \\| number\\[] \\| {checked: string\\[] \\| number\\[], halfChecked: string\\[] \\| number\\[]} | \\[] |  |
| checkStrictly | Check treeNode precisely; parent treeNode and children treeNodes are not associated | boolean | false |  |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | false |  |
| disabled | whether disabled the tree | bool | false |  |
| draggable | Specifies whether this Tree is draggable (IE &gt; 8) | boolean | false |  |
| expandedKeys(v-model) | (Controlled) Specifies the keys of the expanded treeNodes | string\\[] \\| number\\[] | \\[] |  |
| fieldNames | Replace the title,key and children fields in treeNode with the corresponding fields in treeData | object | { children:&#39;children&#39;, title:&#39;title&#39;, key:&#39;key&#39; } | 3.0.0 |
| filterTreeNode | Defines a function to filter (highlight) treeNodes. When the function returns \`true\`, the corresponding treeNode will be highlighted | function(node) | - |  |
| loadData | Load data asynchronously | function(node) | - |  |
| loadedKeys | (Controlled) Set loaded tree nodes. Need work with \`loadData\` | string\\[] \\| number\\[] | \\[] |  |
| multiple | Allows selecting multiple treeNodes | boolean | false |  |
| selectable | whether can be selected | boolean | true |  |
| selectedKeys(v-model) | (Controlled) Specifies the keys of the selected treeNodes | string\\[] \\| number\\[] | - |  |
| showIcon | Shows the icon before a TreeNode&#39;s title. There is no default style; you must set a custom style for it if set to \`true\` | boolean | false |  |
| showLine | Shows a connecting line | boolean \\| {showLeafIcon: boolean}(3.0+) | false |  |
| switcherIcon | customize collapse/expand icon of tree node | v-slot:switcherIcon=&quot;{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}&quot; | - |  |
| title | custom title | slot |  | 2.0.0 |
| treeData | treeNode of tree, please use \`treeNodes\` before v1.1.4 | [TreeNode\\[\\]](#TreeNode) | - |  |
| virtual | Disable virtual scroll when set to false | boolean | true | 3.0 |

### Events

| Events Name | Description | Arguments |
| --- | --- | --- |
| check | Callback function for when the onCheck event occurs | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) |
| dragend | Callback function for when the onDragEnd event occurs | function({event, node}) |
| dragenter | Callback function for when the onDragEnter event occurs | function({event, node, expandedKeys}) |
| dragleave | Callback function for when the onDragLeave event occurs | function({event, node}) |
| dragover | Callback function for when the onDragOver event occurs | function({event, node}) |
| dragstart | Callback function for when the onDragStart event occurs | function({event, node}) |
| drop | Callback function for when the onDrop event occurs | function({event, node, dragNode, dragNodesKeys}) |
| expand | Callback function for when a treeNode is expanded or collapsed | function(expandedKeys, {expanded: bool, node}) |
| load | Callback function for when a treeNode is loaded | function(loadedKeys, {event, node}) |
| rightClick | Callback function for when the user right clicks a treeNode | function({event, node}) |
| select | Callback function for when the user clicks a treeNode | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) |

### TreeNode

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checkable | When Tree is checkable, set TreeNode display Checkbox or not | boolean | - |  |
| class | className | string | - |  |
| disableCheckbox | Disables the checkbox of the treeNode | boolean | false |  |
| disabled | Disables the treeNode | boolean | false |  |
| icon | customize icon. When you pass component, whose render will receive full TreeNode props as component props | slot\\|slot-scope | - |  |
| isLeaf | Determines if this is a leaf node(effective when \`loadData\` is specified) | boolean | false |  |
| key | Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree! | string \\| number | internal calculated position of treeNode |  |
| selectable | Set whether the treeNode can be selected | boolean | true |  |
| style | style | string\\|object | - |  |
| title | Title | string | &#39;---&#39; |  |

### DirectoryTree props

| Property     | Description                                                   | Type   | Default |
| ------------ | ------------------------------------------------------------- | ------ | ------- |
| expandAction | Directory open logic, optional \`false\` \`&#39;click&#39;\` \`&#39;dblclick&#39;\` | string | click   |

## FAQ

### How to hide file icon when use showLine?

File icon realize by using switcherIcon. You can overwrite the style to hide it
`,html:`<p>A hierarchical list structure component.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The <code>Tree</code> component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a <code>Tree</code>.</p>
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
</tr>
</thead>
<tbody>
<tr>
<td>autoExpandParent</td>
<td>Whether to automatically expand a parent treeNode</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockNode</td>
<td>Whether treeNode fill remaining horizontal space</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>checkable</td>
<td>Adds a <code>Checkbox</code> before the treeNodes</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>checkedKeys(v-model)</td>
<td>(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When <code>checkable</code> and <code>checkStrictly</code> is true, its object has <code>checked</code> and <code>halfChecked</code> property. Regardless of whether the child or parent treeNode is checked, they won't impact each other.</td>
<td>string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>checkStrictly</td>
<td>Check treeNode precisely; parent treeNode and children treeNodes are not associated</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>defaultExpandAll</td>
<td>Whether to expand all treeNodes by default</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>whether disabled the tree</td>
<td>bool</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>draggable</td>
<td>Specifies whether this Tree is draggable (IE &gt; 8)</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>expandedKeys(v-model)</td>
<td>(Controlled) Specifies the keys of the expanded treeNodes</td>
<td>string[] | number[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>Replace the title,key and children fields in treeNode with the corresponding fields in treeData</td>
<td>object</td>
<td>{ children:'children', title:'title', key:'key' }</td>
<td>3.0.0</td>
</tr>
<tr>
<td>filterTreeNode</td>
<td>Defines a function to filter (highlight) treeNodes. When the function returns <code>true</code>, the corresponding treeNode will be highlighted</td>
<td>function(node)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loadData</td>
<td>Load data asynchronously</td>
<td>function(node)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loadedKeys</td>
<td>(Controlled) Set loaded tree nodes. Need work with <code>loadData</code></td>
<td>string[] | number[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>Allows selecting multiple treeNodes</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>selectable</td>
<td>whether can be selected</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>selectedKeys(v-model)</td>
<td>(Controlled) Specifies the keys of the selected treeNodes</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showIcon</td>
<td>Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to <code>true</code></td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>showLine</td>
<td>Shows a connecting line</td>
<td>boolean | {showLeafIcon: boolean}(3.0+)</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>switcherIcon</td>
<td>customize collapse/expand icon of tree node</td>
<td>v-slot:switcherIcon=&quot;{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>custom title</td>
<td>slot</td>
<td></td>
<td>2.0.0</td>
</tr>
<tr>
<td>treeData</td>
<td>treeNode of tree, please use <code>treeNodes</code> before v1.1.4</td>
<td><a href="#TreeNode">TreeNode[]</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>virtual</td>
<td>Disable virtual scroll when set to false</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
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
</tr>
</thead>
<tbody>
<tr>
<td>check</td>
<td>Callback function for when the onCheck event occurs</td>
<td>function(checkedKeys, e:{checked: bool, checkedNodes, node, event})</td>
</tr>
<tr>
<td>dragend</td>
<td>Callback function for when the onDragEnd event occurs</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>dragenter</td>
<td>Callback function for when the onDragEnter event occurs</td>
<td>function({event, node, expandedKeys})</td>
</tr>
<tr>
<td>dragleave</td>
<td>Callback function for when the onDragLeave event occurs</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>dragover</td>
<td>Callback function for when the onDragOver event occurs</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>dragstart</td>
<td>Callback function for when the onDragStart event occurs</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>drop</td>
<td>Callback function for when the onDrop event occurs</td>
<td>function({event, node, dragNode, dragNodesKeys})</td>
</tr>
<tr>
<td>expand</td>
<td>Callback function for when a treeNode is expanded or collapsed</td>
<td>function(expandedKeys, {expanded: bool, node})</td>
</tr>
<tr>
<td>load</td>
<td>Callback function for when a treeNode is loaded</td>
<td>function(loadedKeys, {event, node})</td>
</tr>
<tr>
<td>rightClick</td>
<td>Callback function for when the user right clicks a treeNode</td>
<td>function({event, node})</td>
</tr>
<tr>
<td>select</td>
<td>Callback function for when the user clicks a treeNode</td>
<td>function(selectedKeys, e:{selected: bool, selectedNodes, node, event})</td>
</tr>
</tbody>
</table>
<h3 id="TreeNode">TreeNode <a class="header-anchor" href="#TreeNode">
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
<td>checkable</td>
<td>When Tree is checkable, set TreeNode display Checkbox or not</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>class</td>
<td>className</td>
<td>string</td>
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
<td>Disables the treeNode</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>customize icon. When you pass component, whose render will receive full TreeNode props as component props</td>
<td>slot|slot-scope</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>isLeaf</td>
<td>Determines if this is a leaf node(effective when <code>loadData</code> is specified)</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td>Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree!</td>
<td>string | number</td>
<td>internal calculated position of treeNode</td>
<td></td>
</tr>
<tr>
<td>selectable</td>
<td>Set whether the treeNode can be selected</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>style</td>
<td>string|object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>Title</td>
<td>string</td>
<td>'---'</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DirectoryTree-props">DirectoryTree props <a class="header-anchor" href="#DirectoryTree-props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>expandAction</td>
<td>Directory open logic, optional <code>false</code> <code>'click'</code> <code>'dblclick'</code></td>
<td>string</td>
<td>click</td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="How-to-hide-file-icon-when-use-showLine">How to hide file icon when use showLine? <a class="header-anchor" href="#How-to-hide-file-icon-when-use-showLine">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>File icon realize by using switcherIcon. You can overwrite the style to hide it</p>
`,lastUpdated:1701878243965}},Js={class:"markdown"},Ts=Y('<p>A hierarchical list structure component.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The <code>Tree</code> component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a <code>Tree</code>.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Tree-props">Tree props <a class="header-anchor" href="#Tree-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>autoExpandParent</td><td>Whether to automatically expand a parent treeNode</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockNode</td><td>Whether treeNode fill remaining horizontal space</td><td>boolean</td><td>false</td><td></td></tr><tr><td>checkable</td><td>Adds a <code>Checkbox</code> before the treeNodes</td><td>boolean</td><td>false</td><td></td></tr><tr><td>checkedKeys(v-model)</td><td>(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When <code>checkable</code> and <code>checkStrictly</code> is true, its object has <code>checked</code> and <code>halfChecked</code> property. Regardless of whether the child or parent treeNode is checked, they won&#39;t impact each other.</td><td>string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}</td><td>[]</td><td></td></tr><tr><td>checkStrictly</td><td>Check treeNode precisely; parent treeNode and children treeNodes are not associated</td><td>boolean</td><td>false</td><td></td></tr><tr><td>defaultExpandAll</td><td>Whether to expand all treeNodes by default</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>whether disabled the tree</td><td>bool</td><td>false</td><td></td></tr><tr><td>draggable</td><td>Specifies whether this Tree is draggable (IE &gt; 8)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>expandedKeys(v-model)</td><td>(Controlled) Specifies the keys of the expanded treeNodes</td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>fieldNames</td><td>Replace the title,key and children fields in treeNode with the corresponding fields in treeData</td><td>object</td><td>{ children:&#39;children&#39;, title:&#39;title&#39;, key:&#39;key&#39; }</td><td>3.0.0</td></tr><tr><td>filterTreeNode</td><td>Defines a function to filter (highlight) treeNodes. When the function returns <code>true</code>, the corresponding treeNode will be highlighted</td><td>function(node)</td><td>-</td><td></td></tr><tr><td>loadData</td><td>Load data asynchronously</td><td>function(node)</td><td>-</td><td></td></tr><tr><td>loadedKeys</td><td>(Controlled) Set loaded tree nodes. Need work with <code>loadData</code></td><td>string[] | number[]</td><td>[]</td><td></td></tr><tr><td>multiple</td><td>Allows selecting multiple treeNodes</td><td>boolean</td><td>false</td><td></td></tr><tr><td>selectable</td><td>whether can be selected</td><td>boolean</td><td>true</td><td></td></tr><tr><td>selectedKeys(v-model)</td><td>(Controlled) Specifies the keys of the selected treeNodes</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>showIcon</td><td>Shows the icon before a TreeNode&#39;s title. There is no default style; you must set a custom style for it if set to <code>true</code></td><td>boolean</td><td>false</td><td></td></tr><tr><td>showLine</td><td>Shows a connecting line</td><td>boolean | {showLeafIcon: boolean}(3.0+)</td><td>false</td><td></td></tr><tr><td>switcherIcon</td><td>customize collapse/expand icon of tree node</td><td>v-slot:switcherIcon=&quot;{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}&quot;</td><td>-</td><td></td></tr><tr><td>title</td><td>custom title</td><td>slot</td><td></td><td>2.0.0</td></tr><tr><td>treeData</td><td>treeNode of tree, please use <code>treeNodes</code> before v1.1.4</td><td><a href="#TreeNode">TreeNode[]</a></td><td>-</td><td></td></tr><tr><td>virtual</td><td>Disable virtual scroll when set to false</td><td>boolean</td><td>true</td><td>3.0</td></tr></tbody></table><h3 id="Events">Events <a class="header-anchor" href="#Events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>check</td><td>Callback function for when the onCheck event occurs</td><td>function(checkedKeys, e:{checked: bool, checkedNodes, node, event})</td></tr><tr><td>dragend</td><td>Callback function for when the onDragEnd event occurs</td><td>function({event, node})</td></tr><tr><td>dragenter</td><td>Callback function for when the onDragEnter event occurs</td><td>function({event, node, expandedKeys})</td></tr><tr><td>dragleave</td><td>Callback function for when the onDragLeave event occurs</td><td>function({event, node})</td></tr><tr><td>dragover</td><td>Callback function for when the onDragOver event occurs</td><td>function({event, node})</td></tr><tr><td>dragstart</td><td>Callback function for when the onDragStart event occurs</td><td>function({event, node})</td></tr><tr><td>drop</td><td>Callback function for when the onDrop event occurs</td><td>function({event, node, dragNode, dragNodesKeys})</td></tr><tr><td>expand</td><td>Callback function for when a treeNode is expanded or collapsed</td><td>function(expandedKeys, {expanded: bool, node})</td></tr><tr><td>load</td><td>Callback function for when a treeNode is loaded</td><td>function(loadedKeys, {event, node})</td></tr><tr><td>rightClick</td><td>Callback function for when the user right clicks a treeNode</td><td>function({event, node})</td></tr><tr><td>select</td><td>Callback function for when the user clicks a treeNode</td><td>function(selectedKeys, e:{selected: bool, selectedNodes, node, event})</td></tr></tbody></table><h3 id="TreeNode">TreeNode <a class="header-anchor" href="#TreeNode"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>checkable</td><td>When Tree is checkable, set TreeNode display Checkbox or not</td><td>boolean</td><td>-</td><td></td></tr><tr><td>class</td><td>className</td><td>string</td><td>-</td><td></td></tr><tr><td>disableCheckbox</td><td>Disables the checkbox of the treeNode</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>Disables the treeNode</td><td>boolean</td><td>false</td><td></td></tr><tr><td>icon</td><td>customize icon. When you pass component, whose render will receive full TreeNode props as component props</td><td>slot|slot-scope</td><td>-</td><td></td></tr><tr><td>isLeaf</td><td>Determines if this is a leaf node(effective when <code>loadData</code> is specified)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>key</td><td>Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree!</td><td>string | number</td><td>internal calculated position of treeNode</td><td></td></tr><tr><td>selectable</td><td>Set whether the treeNode can be selected</td><td>boolean</td><td>true</td><td></td></tr><tr><td>style</td><td>style</td><td>string|object</td><td>-</td><td></td></tr><tr><td>title</td><td>Title</td><td>string</td><td>&#39;---&#39;</td><td></td></tr></tbody></table><h3 id="DirectoryTree-props">DirectoryTree props <a class="header-anchor" href="#DirectoryTree-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>expandAction</td><td>Directory open logic, optional <code>false</code> <code>&#39;click&#39;</code> <code>&#39;dblclick&#39;</code></td><td>string</td><td>click</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="How-to-hide-file-icon-when-use-showLine">How to hide file icon when use showLine? <a class="header-anchor" href="#How-to-hide-file-icon-when-use-showLine"><span aria-hidden="true" class="anchor">#</span></a></h3><p>File icon realize by using switcherIcon. You can overwrite the style to hide it</p>',15),Fs=[Ts];function Ds(t,a,c,r,o,i){return C(),b("article",Js,Fs)}var Es=m(Ns,[["render",Ds]]);const Ps=f({CN:Ls,US:Es,components:{Basic:sn,Draggable:un,Dynamic:Cn,Search:Kn,ShowLine:Tn,CustomIcon:Un,Directory:$n,SwitcherIcon:es,ReplaceFields:ks,ContextMenu:ys,VirtualScroll:Gs,Accordion:Rs},setup(){return{}}});function zs(t,a,c,r,o,i){const d=u("basic"),l=u("draggable"),e=u("dynamic"),g=u("custom-icon"),w=u("search"),A=u("show-line"),h=u("directory"),K=u("switcher-icon"),W=u("replace-fields"),B=u("context-menu"),V=u("virtual-scroll"),E=u("accordion"),P=u("demo-sort");return C(),y(P,null,{default:p(()=>[k(d),k(l),k(e),k(g),k(w),k(A),k(h),k(K),k(W),k(B),k(V),k(E)]),_:1})}var Qs=m(Ps,[["render",zs]]);export{Qs as default};

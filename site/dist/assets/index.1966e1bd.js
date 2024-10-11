import{d as A,k as g,aq as o,J as r,bN as b,bO as e,G as n,e as c,H as a,ca as K,az as v,o as Y,E as w,cb as Z}from"./vendor.0f0e4632.js";import{_ as d,A as F}from"./index.f6b32fa6.js";const R=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},V=A({setup(){const t=g(null);return{tagModalNode:t,onReload:async()=>{await t.value.getTagDatas(!0),console.log(t.value,"tagModalNode")},tags:g([80,380]),tagModalListApi:R}}}),L=a("reload"),N=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onReload"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("reload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagModalNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onReload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTagDatas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tagModalNode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tagModalNode`),n("span",{class:"token punctuation"},","),a(`
      onReload`),n("span",{class:"token punctuation"},","),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),J=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onReload"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("reload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagModalNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onReload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTagDatas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tagModalNode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tagModalNode`),n("span",{class:"token punctuation"},","),a(`
      onReload`),n("span",{class:"token punctuation"},","),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function T(t,s,i,k,C,I){const p=o("a-button"),l=o("a-divider"),u=o("a-tag-modal-list"),m=o("demo-box");return r(),b(m,{jsfiddle:{us:"The simplest usage.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/tag-modal-list/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvblJlbG9hZCI+cmVsb2FkPC9hLWJ1dHRvbj4KICAgIDxhLWRpdmlkZXI+PC9hLWRpdmlkZXI+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIDphcGk9InRhZ01vZGFsTGlzdEFwaSIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgcmVmPSJ0YWdNb2RhbE5vZGUiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICflrpjnvZEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICAgICAgdmFsdWU6IDM4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn56Wo5aSn5aSnJywKICAgICAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhZ01vZGFsTm9kZSA9IHJlZihudWxsKTsKICAgIGNvbnN0IG9uUmVsb2FkID0gYXN5bmMgKCkgPT4gewogICAgICBhd2FpdCB0YWdNb2RhbE5vZGUudmFsdWUuZ2V0VGFnRGF0YXModHJ1ZSk7CiAgICAgIGNvbnNvbGUubG9nKHRhZ01vZGFsTm9kZS52YWx1ZSwgJ3RhZ01vZGFsTm9kZScpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHRhZ01vZGFsTm9kZSwKICAgICAgb25SZWxvYWQsCiAgICAgIHRhZ3M6IHJlZihbODAsIDM4MF0pLAogICAgICB0YWdNb2RhbExpc3RBcGksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvblJlbG9hZCI+cmVsb2FkPC9hLWJ1dHRvbj4KICAgIDxhLWRpdmlkZXI+PC9hLWRpdmlkZXI+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIDphcGk9InRhZ01vZGFsTGlzdEFwaSIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgcmVmPSJ0YWdNb2RhbE5vZGUiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgIHZhbHVlOiAxODAsCiAgICAgIH1dLAogICAgfSwgewogICAgICBsYWJlbDogJ+WumOe9kScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICB2YWx1ZTogMzgwLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICAgIHZhbHVlOiA0ODAsCiAgICAgIH1dLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhZ01vZGFsTm9kZSA9IHJlZihudWxsKTsKCiAgICBjb25zdCBvblJlbG9hZCA9IGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgdGFnTW9kYWxOb2RlLnZhbHVlLmdldFRhZ0RhdGFzKHRydWUpOwogICAgICBjb25zb2xlLmxvZyh0YWdNb2RhbE5vZGUudmFsdWUsICd0YWdNb2RhbE5vZGUnKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdGFnTW9kYWxOb2RlLAogICAgICBvblJlbG9hZCwKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ01vZGFsTGlzdEFwaSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[n("div",null,[c(p,{onClick:t.onReload},{default:e(()=>[L]),_:1},8,["onClick"]),c(l),c(u,{value:t.tags,"onUpdate:value":s[0]||(s[0]=h=>t.tags=h),createable:"",api:t.tagModalListApi,"value-label":"value","name-label":"label",ref:"tagModalNode"},null,8,["value","api"])])]),htmlCode:e(()=>[N]),jsVersionHtml:e(()=>[J]),_:1},8,["jsfiddle"])}var S=d(V,[["render",T]]);const x=({success:t})=>{setTimeout(()=>{t([{label:"water",value:80},{label:"antd",value:180},{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}])},1e3)},X=A({setup(){return{tags:g([80,380]),tagModalListApi:x}}}),D=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"createable"),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"createable"),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function O(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:"One data.",cn:"\u5F39\u6846\u4E00\u7EF4\u6570\u636E",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F39\u6846\u4E00\u7EF4\u6570\u636E</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>One data.</p>
`,order:0,title:{"zh-CN":"\u5F39\u6846\u4E00\u7EF4\u6570\u636E","en-US":"One data"},relativePath:"components/tag-modal-list/demo/data.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgY3JlYXRlYWJsZQogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgdGFnTW9kYWxMaXN0QXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFsKICAgICAgewogICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgIHZhbHVlOiA4MCwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAnYW50ZCcsCiAgICAgICAgdmFsdWU6IDE4MCwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICB2YWx1ZTogMzgwLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICAgIHZhbHVlOiA0ODAsCiAgICAgIH0sCiAgICBdKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB0YWdzOiByZWYoWzgwLCAzODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgY3JlYXRlYWJsZQogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgdGFnTW9kYWxMaXN0QXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFt7CiAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICB2YWx1ZTogODAsCiAgICB9LCB7CiAgICAgIGxhYmVsOiAnYW50ZCcsCiAgICAgIHZhbHVlOiAxODAsCiAgICB9LCB7CiAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgdmFsdWU6IDM4MCwKICAgIH0sIHsKICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICB2YWx1ZTogNDgwLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHRhZ3M6IHJlZihbODAsIDM4MF0pLAogICAgICB0YWdNb2RhbExpc3RBcGksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[c(p,{value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),createable:"",api:t.tagModalListApi,"value-label":"value","name-label":"label"},null,8,["value","api"])]),htmlCode:e(()=>[D]),jsVersionHtml:e(()=>[M]),_:1},8,["jsfiddle"])}var P=d(X,[["render",O]]);const z=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},E=A({setup(){return{tags:g([80]),tagModalListApi:z}}}),j=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"createable"),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"check-mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),U=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"createable"),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"check-mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function q(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:'`checkMode="radio"`',cn:'`checkMode="radio"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>checkMode=&quot;radio&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>checkMode=&quot;radio&quot;</code></p>
`,order:0,title:{"zh-CN":"\u5355\u9009\u6A21\u5F0F","en-US":"Radio"},relativePath:"components/tag-modal-list/demo/radio.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgY3JlYXRlYWJsZQogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgICBjaGVjay1tb2RlPSJyYWRpbyIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICflrpjnvZEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICAgICAgdmFsdWU6IDM4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn56Wo5aSn5aSnJywKICAgICAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHRhZ3M6IHJlZihbODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgY3JlYXRlYWJsZQogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgICBjaGVjay1tb2RlPSJyYWRpbyIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgIHZhbHVlOiAxODAsCiAgICAgIH1dLAogICAgfSwgewogICAgICBsYWJlbDogJ+WumOe9kScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICB2YWx1ZTogMzgwLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICAgIHZhbHVlOiA0ODAsCiAgICAgIH1dLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHRhZ3M6IHJlZihbODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[c(p,{value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),createable:"",api:t.tagModalListApi,"value-label":"value","name-label":"label","check-mode":"radio"},null,8,["value","api"])]),htmlCode:e(()=>[j]),jsVersionHtml:e(()=>[U]),_:1},8,["jsfiddle"])}var _=d(E,[["render",q]]);const Q=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},$=A({setup(){return{tags:g([80]),tagModalListApi:Q}}}),nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"createable"),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"check-mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),an=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"createable"),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"check-mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function tn(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:'`check-mode="radio"` and `type="select"`',cn:'`check-mode="radio"` \u548C `type="select"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>check-mode=&quot;radio&quot;</code> \u548C <code>type=&quot;select&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>check-mode=&quot;radio&quot;</code> and <code>type=&quot;select&quot;</code></p>
`,order:0,title:{"zh-CN":"\u9009\u62E9\u5668\u5355\u9009\u6A21\u5F0F","en-US":"Select radio"},relativePath:"components/tag-modal-list/demo/radio-select.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgY3JlYXRlYWJsZQogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgICBjaGVjay1tb2RlPSJyYWRpbyIKICAgIHR5cGU9InNlbGVjdCIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICflrpjnvZEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICAgICAgdmFsdWU6IDM4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn56Wo5aSn5aSnJywKICAgICAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHRhZ3M6IHJlZihbODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgY3JlYXRlYWJsZQogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgICBjaGVjay1tb2RlPSJyYWRpbyIKICAgIHR5cGU9InNlbGVjdCIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgIHZhbHVlOiAxODAsCiAgICAgIH1dLAogICAgfSwgewogICAgICBsYWJlbDogJ+WumOe9kScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICB2YWx1ZTogMzgwLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICAgIHZhbHVlOiA0ODAsCiAgICAgIH1dLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHRhZ3M6IHJlZihbODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[c(p,{value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),createable:"",api:t.tagModalListApi,"value-label":"value","name-label":"label","check-mode":"radio",type:"select"},null,8,["value","api"])]),htmlCode:e(()=>[nn]),jsVersionHtml:e(()=>[an]),_:1},8,["jsfiddle"])}var sn=d($,[["render",tn]]);const on=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},en=A({setup(){return{tags:g([80,380]),tagModalListApi:on}}}),cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function ln(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:'`type="select"`',cn:'`type="select"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>type=&quot;select&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>type=&quot;select&quot;</code></p>
`,order:0,title:{"zh-CN":"\u9009\u62E9\u5668\u6A21\u5F0F","en-US":"Select"},relativePath:"components/tag-modal-list/demo/select.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICBzdHlsZT0id2lkdGg6IDMwMHB4IgogICAgdi1tb2RlbDp2YWx1ZT0idGFncyIKICAgIHNpemU9ImxhcmdlIgogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgICB0eXBlPSJzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgdGFnTW9kYWxMaXN0QXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFsKICAgICAgewogICAgICAgIGxhYmVsOiAn57uE5Lu25bqTJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgICAgICAgdmFsdWU6IDgwLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICdhbnRkJywKICAgICAgICAgICAgdmFsdWU6IDE4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAn5a6Y572RJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ+mHkeiMgicsCiAgICAgICAgICAgIHZhbHVlOiAzODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ+elqOWkp+WkpycsCiAgICAgICAgICAgIHZhbHVlOiA0ODAsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB0YWdzOiByZWYoWzgwLCAzODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICBzdHlsZT0id2lkdGg6IDMwMHB4IgogICAgdi1tb2RlbDp2YWx1ZT0idGFncyIKICAgIHNpemU9ImxhcmdlIgogICAgOmFwaT0idGFnTW9kYWxMaXN0QXBpIgogICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgbmFtZS1sYWJlbD0ibGFiZWwiCiAgICB0eXBlPSJzZWxlY3QiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgdGFnTW9kYWxMaXN0QXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFt7CiAgICAgIGxhYmVsOiAn57uE5Lu25bqTJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgbGFiZWw6ICd3YXRlcicsCiAgICAgICAgdmFsdWU6IDgwLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICdhbnRkJywKICAgICAgICB2YWx1ZTogMTgwLAogICAgICB9XSwKICAgIH0sIHsKICAgICAgbGFiZWw6ICflrpjnvZEnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBsYWJlbDogJ+mHkeiMgicsCiAgICAgICAgdmFsdWU6IDM4MCwKICAgICAgfSwgewogICAgICAgIGxhYmVsOiAn56Wo5aSn5aSnJywKICAgICAgICB2YWx1ZTogNDgwLAogICAgICB9XSwKICAgIH1dKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB0YWdzOiByZWYoWzgwLCAzODBdKSwKICAgICAgdGFnTW9kYWxMaXN0QXBpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[c(p,{style:{width:"300px"},value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),size:"large",api:t.tagModalListApi,"value-label":"value","name-label":"label",type:"select"},null,8,["value","api"])]),htmlCode:e(()=>[cn]),jsVersionHtml:e(()=>[pn]),_:1},8,["jsfiddle"])}var un=d(en,[["render",ln]]),kn=K("antd-close-circle",!1,function(t){return c("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[c("path",{d:"M24,0 C10.7464286,0 0,10.7464286 0,24 C0,37.2535714 10.7464286,48 24,48 C37.2535714,48 48,37.2535714 48,24 C48,10.7464286 37.2535714,0 24,0 Z M24,43.9285714 C12.9964286,43.9285714 4.07142857,35.0035714 4.07142857,24 C4.07142857,12.9964286 12.9964286,4.07142857 24,4.07142857 C35.0035714,4.07142857 43.9285714,12.9964286 43.9285714,24 C43.9285714,35.0035714 35.0035714,43.9285714 24,43.9285714 Z",fill:t.colors[0]},null),c("path",{d:"M24,4.07142857 C12.9964286,4.07142857 4.07142857,12.9964286 4.07142857,24 C4.07142857,35.0035714 12.9964286,43.9285714 24,43.9285714 C35.0035714,43.9285714 43.9285714,35.0035714 43.9285714,24 C43.9285714,12.9964286 35.0035714,4.07142857 24,4.07142857 Z M33.2035714,32.3089286 C33.2678571,32.3892857 33.3053571,32.4857143 33.3053571,32.5875 C33.3053571,32.8285714 33.1125,33.0160714 32.8767857,33.0160714 L29.3410714,33 L24.0214286,26.6571429 L18.7017857,33.0053571 L15.1607143,33.0214286 C14.925,33.0214286 14.7321429,32.8285714 14.7321429,32.5928571 C14.7321429,32.4910714 14.7696429,32.3946429 14.8339286,32.3142857 L21.8035714,24.0160714 L14.8339286,15.7125 C14.7691947,15.6339847 14.7332766,15.5356824 14.7321429,15.4339286 C14.7321429,15.1928571 14.925,15.0053571 15.1607143,15.0053571 L18.7017857,15.0214286 L24.0214286,21.3642857 L29.3464286,15.0160714 L32.8821429,15 C33.1178571,15 33.3107143,15.1928571 33.3107143,15.4285714 C33.3107143,15.5303571 33.2785714,15.6321429 33.2142857,15.7071429 L26.2446429,24.0107143 L33.2035714,32.3089286 L33.2035714,32.3089286 Z",fill:t.colors[1]},null),c("path",{d:"M33.3107143,15.4285714 C33.3107143,15.1928571 33.1178571,15 32.8821429,15 L29.3464286,15.0160714 L24.0214286,21.3642857 L18.7017857,15.0214286 L15.1607143,15.0053571 C14.925,15.0053571 14.7321429,15.1928571 14.7321429,15.4339286 C14.7321429,15.5357143 14.7696429,15.6321429 14.8339286,15.7125 L21.8035714,24.0160714 L14.8339286,32.3142857 C14.7691947,32.392801 14.7332766,32.4911033 14.7321429,32.5928571 C14.7321429,32.8285714 14.925,33.0214286 15.1607143,33.0214286 L18.7017857,33.0053571 L24.0214286,26.6571429 L29.3410714,33 L32.8767857,33.0160714 C33.1125,33.0160714 33.3053571,32.8285714 33.3053571,32.5875 C33.3053571,32.4857143 33.2678571,32.3892857 33.2035714,32.3089286 L26.2446429,24.0107143 L33.2142857,15.7071429 C33.2785714,15.6321429 33.3107143,15.5303571 33.3107143,15.4285714 Z",fill:t.colors[2]},null)])}),gn=kn;const rn=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},dn=A({setup(){return{tags:g([80,380]),tagModalListApi:rn,titleRightRender:()=>v("div",[v(F,{type:"link",onClick:()=>open("http://water.chjgo.com/"),style:"margin-left: 16px",size:"small"},()=>[v(gn,{colors:["#1996f9"]}),v("span","\u8BBE\u7F6E")])])}}}),Cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},":title-right-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titleRightRender"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"modal-title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6807\u7B7E"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" h "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconAntdCloseCircle "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/antd-close-circle'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Button "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"titleRightRender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" btnProps"),n("span",{class:"token operator"},":"),a(" any "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
          type`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'link'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'http://water.chjgo.com/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          style`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'margin-left: 16px'"),n("span",{class:"token punctuation"},","),a(`
          size`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("Button"),n("span",{class:"token punctuation"},","),a(" btnProps"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconAntdCloseCircle"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
              colors`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'#1996f9'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'span'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u8BBE\u7F6E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},":title-right-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titleRightRender"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"modal-title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6807\u7B7E"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" h "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconAntdCloseCircle "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/antd-close-circle'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Button "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"titleRightRender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" btnProps "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
          type`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'link'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'http://water.chjgo.com/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          style`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'margin-left: 16px'"),n("span",{class:"token punctuation"},","),a(`
          size`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'small'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("Button"),n("span",{class:"token punctuation"},","),a(" btnProps"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconAntdCloseCircle"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          colors`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'#1996f9'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'span'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u8BBE\u7F6E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function An(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:"Header",cn:"\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Header</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9","en-US":"Header"},relativePath:"components/tag-modal-list/demo/header.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICA6dGl0bGUtcmlnaHQtcmVuZGVyPSJ0aXRsZVJpZ2h0UmVuZGVyIgogICAgc3R5bGU9IndpZHRoOiAzMDBweCIKICAgIHYtbW9kZWw6dmFsdWU9InRhZ3MiCiAgICA6YXBpPSJ0YWdNb2RhbExpc3RBcGkiCiAgICB2YWx1ZS1sYWJlbD0idmFsdWUiCiAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgIHR5cGU9InNlbGVjdCIKICAgIG1vZGFsLXRpdGxlPSLmoIfnrb4iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBoIH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25BbnRkQ2xvc2VDaXJjbGUgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYW50ZC1jbG9zZS1jaXJjbGUnOwppbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICflrpjnvZEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICAgICAgdmFsdWU6IDM4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn56Wo5aSn5aSnJywKICAgICAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHRhZ3M6IHJlZihbODAsIDM4MF0pLAogICAgICB0YWdNb2RhbExpc3RBcGksCiAgICAgIHRpdGxlUmlnaHRSZW5kZXI6ICgpID0+IHsKICAgICAgICBjb25zdCBidG5Qcm9wczogYW55ID0gewogICAgICAgICAgdHlwZTogJ2xpbmsnLAogICAgICAgICAgb25DbGljazogKCkgPT4gb3BlbignaHR0cDovL3dhdGVyLmNoamdvLmNvbS8nKSwKICAgICAgICAgIHN0eWxlOiAnbWFyZ2luLWxlZnQ6IDE2cHgnLAogICAgICAgICAgc2l6ZTogJ3NtYWxsJywKICAgICAgICB9OwogICAgICAgIHJldHVybiBoKCdkaXYnLCBbCiAgICAgICAgICBoKEJ1dHRvbiwgYnRuUHJvcHMsICgpID0+IFsKICAgICAgICAgICAgaChJY29uQW50ZENsb3NlQ2lyY2xlLCB7CiAgICAgICAgICAgICAgY29sb3JzOiBbJyMxOTk2ZjknXSwKICAgICAgICAgICAgfSksCiAgICAgICAgICAgIGgoJ3NwYW4nLCAn6K6+572uJyksCiAgICAgICAgICBdKSwKICAgICAgICBdKTsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICA6dGl0bGUtcmlnaHQtcmVuZGVyPSJ0aXRsZVJpZ2h0UmVuZGVyIgogICAgc3R5bGU9IndpZHRoOiAzMDBweCIKICAgIHYtbW9kZWw6dmFsdWU9InRhZ3MiCiAgICA6YXBpPSJ0YWdNb2RhbExpc3RBcGkiCiAgICB2YWx1ZS1sYWJlbD0idmFsdWUiCiAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgIHR5cGU9InNlbGVjdCIKICAgIG1vZGFsLXRpdGxlPSLmoIfnrb4iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIGggfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkFudGRDbG9zZUNpcmNsZSBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9hbnRkLWNsb3NlLWNpcmNsZSc7CmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IHRhZ01vZGFsTGlzdEFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbewogICAgICBsYWJlbDogJ+e7hOS7tuW6kycsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgIHZhbHVlOiA4MCwKICAgICAgfSwgewogICAgICAgIGxhYmVsOiAnYW50ZCcsCiAgICAgICAgdmFsdWU6IDE4MCwKICAgICAgfV0sCiAgICB9LCB7CiAgICAgIGxhYmVsOiAn5a6Y572RJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgbGFiZWw6ICfph5HojIInLAogICAgICAgIHZhbHVlOiAzODAsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJ+elqOWkp+WkpycsCiAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgfV0sCiAgICB9XSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ01vZGFsTGlzdEFwaSwKICAgICAgdGl0bGVSaWdodFJlbmRlcjogKCkgPT4gewogICAgICAgIGNvbnN0IGJ0blByb3BzID0gewogICAgICAgICAgdHlwZTogJ2xpbmsnLAogICAgICAgICAgb25DbGljazogKCkgPT4gb3BlbignaHR0cDovL3dhdGVyLmNoamdvLmNvbS8nKSwKICAgICAgICAgIHN0eWxlOiAnbWFyZ2luLWxlZnQ6IDE2cHgnLAogICAgICAgICAgc2l6ZTogJ3NtYWxsJywKICAgICAgICB9OwogICAgICAgIHJldHVybiBoKCdkaXYnLCBbaChCdXR0b24sIGJ0blByb3BzLCAoKSA9PiBbaChJY29uQW50ZENsb3NlQ2lyY2xlLCB7CiAgICAgICAgICBjb2xvcnM6IFsnIzE5OTZmOSddLAogICAgICAgIH0pLCBoKCdzcGFuJywgJ+iuvue9ricpXSldKTsKICAgICAgfSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[c(p,{"title-right-render":t.titleRightRender,style:{width:"300px"},value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),api:t.tagModalListApi,"value-label":"value","name-label":"label",type:"select","modal-title":"\u6807\u7B7E"},null,8,["title-right-render","value","api"])]),htmlCode:e(()=>[Cn]),jsVersionHtml:e(()=>[In]),_:1},8,["jsfiddle"])}var bn=d(dn,[["render",An]]);const mn=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},hn=A({setup(){return{tags:g([80,380]),tagModalListApi:mn,titleRightRender:()=>"diy",beforeCloseFn:({success:t})=>{setTimeout(()=>{t(!0)},1e3)},beforeOkFn:({success:t})=>{setTimeout(()=>{t(!0)},1e3)}}}}),vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},":title-right-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titleRightRender"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeCloseFn"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeOkFn"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"titleRightRender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token string"},"'diy'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"beforeCloseFn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"beforeOkFn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
    `),n("span",{class:"token attr-name"},":title-right-render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titleRightRender"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeCloseFn"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeOkFn"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"titleRightRender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token string"},"'diy'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"beforeCloseFn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
        success`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"beforeOkFn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
        success`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Zn(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:"Before close.",cn:"\u5173\u95ED\u4E4B\u524D",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5173\u95ED\u4E4B\u524D</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Before close.</p>
`,order:0,title:{"zh-CN":"\u5173\u95ED\u4E4B\u524D","en-US":"Before close"},relativePath:"components/tag-modal-list/demo/before-close.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICA6dGl0bGUtcmlnaHQtcmVuZGVyPSJ0aXRsZVJpZ2h0UmVuZGVyIgogICAgc3R5bGU9IndpZHRoOiAzMDBweCIKICAgIHYtbW9kZWw6dmFsdWU9InRhZ3MiCiAgICA6YXBpPSJ0YWdNb2RhbExpc3RBcGkiCiAgICA6YmVmb3JlLWNsb3NlPSJiZWZvcmVDbG9zZUZuIgogICAgOmJlZm9yZS1vaz0iYmVmb3JlT2tGbiIKICAgIHZhbHVlLWxhYmVsPSJ2YWx1ZSIKICAgIG5hbWUtbGFiZWw9ImxhYmVsIgogICAgdHlwZT0ic2VsZWN0IgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IHRhZ01vZGFsTGlzdEFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbCiAgICAgIHsKICAgICAgICBsYWJlbDogJ+e7hOS7tuW6kycsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICd3YXRlcicsCiAgICAgICAgICAgIHZhbHVlOiA4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnYW50ZCcsCiAgICAgICAgICAgIHZhbHVlOiAxODAsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBsYWJlbDogJ+WumOe9kScsCiAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICfph5HojIInLAogICAgICAgICAgICB2YWx1ZTogMzgwLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICAgICAgICB2YWx1ZTogNDgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ01vZGFsTGlzdEFwaSwKICAgICAgdGl0bGVSaWdodFJlbmRlcjogKCkgPT4gewogICAgICAgIHJldHVybiAnZGl5JzsKICAgICAgfSwKICAgICAgYmVmb3JlQ2xvc2VGbjogKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICBzdWNjZXNzKHRydWUpOwogICAgICAgIH0sIDEwMDApOwogICAgICB9LAogICAgICBiZWZvcmVPa0ZuOiAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgIHN1Y2Nlc3ModHJ1ZSk7CiAgICAgICAgfSwgMTAwMCk7CiAgICAgIH0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhZy1tb2RhbC1saXN0CiAgICA6dGl0bGUtcmlnaHQtcmVuZGVyPSJ0aXRsZVJpZ2h0UmVuZGVyIgogICAgc3R5bGU9IndpZHRoOiAzMDBweCIKICAgIHYtbW9kZWw6dmFsdWU9InRhZ3MiCiAgICA6YXBpPSJ0YWdNb2RhbExpc3RBcGkiCiAgICA6YmVmb3JlLWNsb3NlPSJiZWZvcmVDbG9zZUZuIgogICAgOmJlZm9yZS1vaz0iYmVmb3JlT2tGbiIKICAgIHZhbHVlLWxhYmVsPSJ2YWx1ZSIKICAgIG5hbWUtbGFiZWw9ImxhYmVsIgogICAgdHlwZT0ic2VsZWN0IgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IHRhZ01vZGFsTGlzdEFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbewogICAgICBsYWJlbDogJ+e7hOS7tuW6kycsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgIHZhbHVlOiA4MCwKICAgICAgfSwgewogICAgICAgIGxhYmVsOiAnYW50ZCcsCiAgICAgICAgdmFsdWU6IDE4MCwKICAgICAgfV0sCiAgICB9LCB7CiAgICAgIGxhYmVsOiAn5a6Y572RJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgbGFiZWw6ICfph5HojIInLAogICAgICAgIHZhbHVlOiAzODAsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJ+elqOWkp+WkpycsCiAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgfV0sCiAgICB9XSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ01vZGFsTGlzdEFwaSwKICAgICAgdGl0bGVSaWdodFJlbmRlcjogKCkgPT4gewogICAgICAgIHJldHVybiAnZGl5JzsKICAgICAgfSwKICAgICAgYmVmb3JlQ2xvc2VGbjogKHsKICAgICAgICBzdWNjZXNzLAogICAgICB9KSA9PiB7CiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICBzdWNjZXNzKHRydWUpOwogICAgICAgIH0sIDEwMDApOwogICAgICB9LAogICAgICBiZWZvcmVPa0ZuOiAoewogICAgICAgIHN1Y2Nlc3MsCiAgICAgIH0pID0+IHsKICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgIHN1Y2Nlc3ModHJ1ZSk7CiAgICAgICAgfSwgMTAwMCk7CiAgICAgIH0sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[c(p,{"title-right-render":t.titleRightRender,style:{width:"300px"},value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),api:t.tagModalListApi,"before-close":t.beforeCloseFn,"before-ok":t.beforeOkFn,"value-label":"value","name-label":"label",type:"select"},null,8,["title-right-render","value","api","before-close","before-ok"])]),htmlCode:e(()=>[vn]),jsVersionHtml:e(()=>[wn]),_:1},8,["jsfiddle"])}var fn=d(hn,[["render",Zn]]);const Wn=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"water",value:80},{label:"antd",value:180}]},{label:"\u5B98\u7F51",children:[{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}]}])},1e3)},Bn=A({setup(){const t=g(null);return{tagModalNode:t,onReload:async()=>{await t.value.getTagDatas(!0),console.log(t.value,"tagModalNode")},tags:g([80,380]),tagModalListApi:Wn}}}),yn=a("reload"),Gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onReload"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("reload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-check-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagModalNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onReload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTagDatas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tagModalNode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tagModalNode`),n("span",{class:"token punctuation"},","),a(`
      onReload`),n("span",{class:"token punctuation"},","),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onReload"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("reload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-check-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagModalNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onReload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTagDatas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tagModalNode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tagModalNode`),n("span",{class:"token punctuation"},","),a(`
      onReload`),n("span",{class:"token punctuation"},","),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Kn(t,s,i,k,C,I){const p=o("a-button"),l=o("a-divider"),u=o("a-tag-modal-list"),m=o("demo-box");return r(),b(m,{jsfiddle:{us:'`:max-check-count="3"`',cn:'\u5728\u591A\u9009\u6A21\u5F0F\uFF0C\u53EF\u8BBE\u7F6E(`:max-check-count="3"`)\u6700\u591A\u9009\u51E0\u4E2A\u3002',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5728\u591A\u9009\u6A21\u5F0F\uFF0C\u53EF\u8BBE\u7F6E(<code>:max-check-count=&quot;3&quot;</code>)\u6700\u591A\u9009\u51E0\u4E2A\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>:max-check-count=&quot;3&quot;</code></p>
`,order:0,title:{"zh-CN":"\u6700\u591A\u9009\u51E0\u4E2A","en-US":"MaxCheckCount"},relativePath:"components/tag-modal-list/demo/max-check-count.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvblJlbG9hZCI+cmVsb2FkPC9hLWJ1dHRvbj4KICAgIDxhLWRpdmlkZXI+PC9hLWRpdmlkZXI+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIDphcGk9InRhZ01vZGFsTGlzdEFwaSIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgOm1heC1jaGVjay1jb3VudD0iMyIKICAgICAgcmVmPSJ0YWdNb2RhbE5vZGUiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAnd2F0ZXInLAogICAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICflrpjnvZEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICAgICAgdmFsdWU6IDM4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn56Wo5aSn5aSnJywKICAgICAgICAgICAgdmFsdWU6IDQ4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhZ01vZGFsTm9kZSA9IHJlZihudWxsKTsKICAgIGNvbnN0IG9uUmVsb2FkID0gYXN5bmMgKCkgPT4gewogICAgICBhd2FpdCB0YWdNb2RhbE5vZGUudmFsdWUuZ2V0VGFnRGF0YXModHJ1ZSk7CiAgICAgIGNvbnNvbGUubG9nKHRhZ01vZGFsTm9kZS52YWx1ZSwgJ3RhZ01vZGFsTm9kZScpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHRhZ01vZGFsTm9kZSwKICAgICAgb25SZWxvYWQsCiAgICAgIHRhZ3M6IHJlZihbODAsIDM4MF0pLAogICAgICB0YWdNb2RhbExpc3RBcGksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvblJlbG9hZCI+cmVsb2FkPC9hLWJ1dHRvbj4KICAgIDxhLWRpdmlkZXI+PC9hLWRpdmlkZXI+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIDphcGk9InRhZ01vZGFsTGlzdEFwaSIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgOm1heC1jaGVjay1jb3VudD0iMyIKICAgICAgcmVmPSJ0YWdNb2RhbE5vZGUiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgIHZhbHVlOiAxODAsCiAgICAgIH1dLAogICAgfSwgewogICAgICBsYWJlbDogJ+WumOe9kScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIGxhYmVsOiAn6YeR6IyCJywKICAgICAgICB2YWx1ZTogMzgwLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICfnpajlpKflpKcnLAogICAgICAgIHZhbHVlOiA0ODAsCiAgICAgIH1dLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhZ01vZGFsTm9kZSA9IHJlZihudWxsKTsKCiAgICBjb25zdCBvblJlbG9hZCA9IGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgdGFnTW9kYWxOb2RlLnZhbHVlLmdldFRhZ0RhdGFzKHRydWUpOwogICAgICBjb25zb2xlLmxvZyh0YWdNb2RhbE5vZGUudmFsdWUsICd0YWdNb2RhbE5vZGUnKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdGFnTW9kYWxOb2RlLAogICAgICBvblJlbG9hZCwKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ01vZGFsTGlzdEFwaSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[n("div",null,[c(p,{onClick:t.onReload},{default:e(()=>[yn]),_:1},8,["onClick"]),c(l),c(u,{value:t.tags,"onUpdate:value":s[0]||(s[0]=h=>t.tags=h),createable:"",api:t.tagModalListApi,"value-label":"value","name-label":"label","max-check-count":3,ref:"tagModalNode"},null,8,["value","api"])])]),htmlCode:e(()=>[Gn]),jsVersionHtml:e(()=>[Hn]),_:1},8,["jsfiddle"])}var Yn=d(Bn,[["render",Kn]]);const Fn=({success:t})=>{setTimeout(()=>{t([{label:"\u7EC4\u4EF6\u5E93",children:[{label:"\u8FD9\u662F\u4EC0\u4E48",children:[{label:"1water",value:80},{label:"2antd",value:180}]},{label:"\u4ECA\u513F\u5929\u4E0D\u9519",children:[{label:"3water",value:1801},{label:"4antd",value:1802}]}]},{label:"\u5B98\u7F51",children:[{label:"\u9152\u5E97",children:[{label:"3\u91D1\u8302",value:3801},{label:"4\u7968\u5927\u5927",value:3802}]},{label:"\u95E8\u7968",children:[{label:"1\u91D1\u8302",value:4801},{label:"2\u7968\u5927\u5927",value:4802}]}]}])},1e3)},Rn=A({setup(){const t=g(null);return{tagModalNode:t,onReload:async()=>{await t.value.getTagDatas(!0),console.log(t.value,"tagModalNode")},tags:g([80,3801]),tagModalListApi:Fn}}}),Vn=a("reload"),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onReload"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("reload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8FD9\u662F\u4EC0\u4E48'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1water'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2antd'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4ECA\u513F\u5929\u4E0D\u9519'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3water'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1801"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4antd'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1802"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9152\u5E97'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3801"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3802"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u95E8\u7968'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4801"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
                value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4802"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagModalNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onReload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTagDatas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tagModalNode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tagModalNode`),n("span",{class:"token punctuation"},","),a(`
      onReload`),n("span",{class:"token punctuation"},","),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"3801"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onReload"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("reload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-divider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalListApi"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagModalNode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"tagModalListApi"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
  success`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u8FD9\u662F\u4EC0\u4E48'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1water'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2antd'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4ECA\u513F\u5929\u4E0D\u9519'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3water'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1801"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4antd'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1802"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),a(`
      children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9152\u5E97'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3801"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3802"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u95E8\u7968'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4801"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4802"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagModalNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onReload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"await"),a(" tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTagDatas"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tagModalNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'tagModalNode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tagModalNode`),n("span",{class:"token punctuation"},","),a(`
      onReload`),n("span",{class:"token punctuation"},","),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"3801"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagModalListApi`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Jn(t,s,i,k,C,I){const p=o("a-button"),l=o("a-divider"),u=o("a-tag-modal-list"),m=o("demo-box");return r(),b(m,{jsfiddle:{us:"Three.",cn:"\u4E09\u7EA7\u6570\u636E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E09\u7EA7\u6570\u636E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Three.</p>
`,order:0,title:{"zh-CN":"\u4E09\u7EA7\u6570\u636E","en-US":"Three"},relativePath:"components/tag-modal-list/demo/three.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvblJlbG9hZCI+cmVsb2FkPC9hLWJ1dHRvbj4KICAgIDxhLWRpdmlkZXI+PC9hLWRpdmlkZXI+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIDphcGk9InRhZ01vZGFsTGlzdEFwaSIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgcmVmPSJ0YWdNb2RhbE5vZGUiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn6L+Z5piv5LuA5LmIJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBsYWJlbDogJzF3YXRlcicsCiAgICAgICAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBsYWJlbDogJzJhbnRkJywKICAgICAgICAgICAgICAgIHZhbHVlOiAxODAsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn5LuK5YS/5aSp5LiN6ZSZJywKICAgICAgICAgICAgY2hpbGRyZW46IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBsYWJlbDogJzN3YXRlcicsCiAgICAgICAgICAgICAgICB2YWx1ZTogMTgwMSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGxhYmVsOiAnNGFudGQnLAogICAgICAgICAgICAgICAgdmFsdWU6IDE4MDIsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAn5a6Y572RJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ+mFkuW6lycsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbGFiZWw6ICcz6YeR6IyCJywKICAgICAgICAgICAgICAgIHZhbHVlOiAzODAxLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbGFiZWw6ICc056Wo5aSn5aSnJywKICAgICAgICAgICAgICAgIHZhbHVlOiAzODAyLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogJ+mXqOelqCcsCiAgICAgICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbGFiZWw6ICcx6YeR6IyCJywKICAgICAgICAgICAgICAgIHZhbHVlOiA0ODAxLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbGFiZWw6ICcy56Wo5aSn5aSnJywKICAgICAgICAgICAgICAgIHZhbHVlOiA0ODAyLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB0YWdNb2RhbE5vZGUgPSByZWYobnVsbCk7CiAgICBjb25zdCBvblJlbG9hZCA9IGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgdGFnTW9kYWxOb2RlLnZhbHVlLmdldFRhZ0RhdGFzKHRydWUpOwogICAgICBjb25zb2xlLmxvZyh0YWdNb2RhbE5vZGUudmFsdWUsICd0YWdNb2RhbE5vZGUnKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB0YWdNb2RhbE5vZGUsCiAgICAgIG9uUmVsb2FkLAogICAgICB0YWdzOiByZWYoWzgwLCAzODAxXSksCiAgICAgIHRhZ01vZGFsTGlzdEFwaSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvblJlbG9hZCI+cmVsb2FkPC9hLWJ1dHRvbj4KICAgIDxhLWRpdmlkZXI+PC9hLWRpdmlkZXI+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIDphcGk9InRhZ01vZGFsTGlzdEFwaSIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgcmVmPSJ0YWdNb2RhbE5vZGUiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBsYWJlbDogJ+i/meaYr+S7gOS5iCcsCiAgICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgICBsYWJlbDogJzF3YXRlcicsCiAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgfSwgewogICAgICAgICAgbGFiZWw6ICcyYW50ZCcsCiAgICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgIH1dLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICfku4rlhL/lpKnkuI3plJknLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgbGFiZWw6ICczd2F0ZXInLAogICAgICAgICAgdmFsdWU6IDE4MDEsCiAgICAgICAgfSwgewogICAgICAgICAgbGFiZWw6ICc0YW50ZCcsCiAgICAgICAgICB2YWx1ZTogMTgwMiwKICAgICAgICB9XSwKICAgICAgfV0sCiAgICB9LCB7CiAgICAgIGxhYmVsOiAn5a6Y572RJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgbGFiZWw6ICfphZLlupcnLAogICAgICAgIGNoaWxkcmVuOiBbewogICAgICAgICAgbGFiZWw6ICcz6YeR6IyCJywKICAgICAgICAgIHZhbHVlOiAzODAxLAogICAgICAgIH0sIHsKICAgICAgICAgIGxhYmVsOiAnNOelqOWkp+WkpycsCiAgICAgICAgICB2YWx1ZTogMzgwMiwKICAgICAgICB9XSwKICAgICAgfSwgewogICAgICAgIGxhYmVsOiAn6Zeo56WoJywKICAgICAgICBjaGlsZHJlbjogW3sKICAgICAgICAgIGxhYmVsOiAnMemHkeiMgicsCiAgICAgICAgICB2YWx1ZTogNDgwMSwKICAgICAgICB9LCB7CiAgICAgICAgICBsYWJlbDogJzLnpajlpKflpKcnLAogICAgICAgICAgdmFsdWU6IDQ4MDIsCiAgICAgICAgfV0sCiAgICAgIH1dLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhZ01vZGFsTm9kZSA9IHJlZihudWxsKTsKCiAgICBjb25zdCBvblJlbG9hZCA9IGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgdGFnTW9kYWxOb2RlLnZhbHVlLmdldFRhZ0RhdGFzKHRydWUpOwogICAgICBjb25zb2xlLmxvZyh0YWdNb2RhbE5vZGUudmFsdWUsICd0YWdNb2RhbE5vZGUnKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdGFnTW9kYWxOb2RlLAogICAgICBvblJlbG9hZCwKICAgICAgdGFnczogcmVmKFs4MCwgMzgwMV0pLAogICAgICB0YWdNb2RhbExpc3RBcGksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[n("div",null,[c(p,{onClick:t.onReload},{default:e(()=>[Vn]),_:1},8,["onClick"]),c(l),c(u,{value:t.tags,"onUpdate:value":s[0]||(s[0]=h=>t.tags=h),createable:"",api:t.tagModalListApi,"value-label":"value","name-label":"label",ref:"tagModalNode"},null,8,["value","api"])])]),htmlCode:e(()=>[Ln]),jsVersionHtml:e(()=>[Nn]),_:1},8,["jsfiddle"])}var Tn=d(Rn,[["render",Jn]]);const Sn=[{label:"water",value:80},{label:"antd",value:180},{label:"\u91D1\u8302",value:380},{label:"\u7968\u5927\u5927",value:480}],xn=A({setup(){const t=g([]);Y(()=>{setTimeout(()=>{t.value=Sn.slice()},1e3)});const s=({params:i,success:k})=>{setTimeout(()=>{console.log(i,"8"),k(!0)},1200)};return{tags:g([80,380]),tagNewOptions:t,beforeOk:s}}}),Xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},"create-placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BBE\u7F6E\u6807\u7B7E"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":show-selected"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":create-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":create-bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagNewOptions"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":before-ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeOk"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" AjaxApi "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" tagOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagNewOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        tagNewOptions`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" tagOptions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" params"),n("span",{class:"token punctuation"},","),a(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),a(" AjaxApi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("params"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1200"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagNewOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeOk`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag-modal-list")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"createable"),a(`
      `),n("span",{class:"token attr-name"},"create-placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BBE\u7F6E\u6807\u7B7E"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":show-selected"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":create-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":create-bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagNewOptions"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"value-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"name-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":before-ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeOk"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" tagOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagNewOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        tagNewOptions`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" tagOptions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(`
      params`),n("span",{class:"token punctuation"},","),a(`
      success`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("params"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1200"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tags`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      tagNewOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeOk`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Mn(t,s,i,k,C,I){const p=o("a-tag-modal-list"),l=o("demo-box");return r(),b(l,{jsfiddle:{us:"`Options`",cn:"\u6570\u636E\u8BBE\u7F6E\u5728 `Options` \u4E2D\u81EA\u52A8\u6E32\u67D3\u3002`showSelected` \u53EF\u9690\u85CF\u5DF2\u9009\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6570\u636E\u8BBE\u7F6E\u5728 <code>Options</code> \u4E2D\u81EA\u52A8\u6E32\u67D3\u3002<code>showSelected</code> \u53EF\u9690\u85CF\u5DF2\u9009\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>Options</code></p>
`,order:0,title:{"zh-CN":"Options \u6A21\u5F0F","en-US":"Options"},relativePath:"components/tag-modal-list/demo/options.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIGNyZWF0ZS1wbGFjZWhvbGRlcj0i6K6+572u5qCH562+IgogICAgICA6c2hvdy1zZWxlY3RlZD0iZmFsc2UiCiAgICAgIDpjcmVhdGUtaWNvbj0iZmFsc2UiCiAgICAgIDpjcmVhdGUtYm9yZGVyZWQ9ImZhbHNlIgogICAgICA6b3B0aW9ucz0idGFnTmV3T3B0aW9ucyIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgOmJlZm9yZS1vaz0iYmVmb3JlT2siCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKCmNvbnN0IHRhZ09wdGlvbnMgPSBbCiAgewogICAgbGFiZWw6ICd3YXRlcicsCiAgICB2YWx1ZTogODAsCiAgfSwKICB7CiAgICBsYWJlbDogJ2FudGQnLAogICAgdmFsdWU6IDE4MCwKICB9LAogIHsKICAgIGxhYmVsOiAn6YeR6IyCJywKICAgIHZhbHVlOiAzODAsCiAgfSwKICB7CiAgICBsYWJlbDogJ+elqOWkp+WkpycsCiAgICB2YWx1ZTogNDgwLAogIH0sCl07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdGFnTmV3T3B0aW9ucyA9IHJlZihbXSk7CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICB0YWdOZXdPcHRpb25zLnZhbHVlID0gdGFnT3B0aW9ucy5zbGljZSgpOwogICAgICB9LCAxMDAwKTsKICAgIH0pOwogICAgY29uc3QgYmVmb3JlT2sgPSAoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMsICc4Jyk7CiAgICAgICAgc3VjY2Vzcyh0cnVlKTsKICAgICAgfSwgMTIwMCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ05ld09wdGlvbnMsCiAgICAgIGJlZm9yZU9rLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWctbW9kYWwtbGlzdAogICAgICB2LW1vZGVsOnZhbHVlPSJ0YWdzIgogICAgICBjcmVhdGVhYmxlCiAgICAgIGNyZWF0ZS1wbGFjZWhvbGRlcj0i6K6+572u5qCH562+IgogICAgICA6c2hvdy1zZWxlY3RlZD0iZmFsc2UiCiAgICAgIDpjcmVhdGUtaWNvbj0iZmFsc2UiCiAgICAgIDpjcmVhdGUtYm9yZGVyZWQ9ImZhbHNlIgogICAgICA6b3B0aW9ucz0idGFnTmV3T3B0aW9ucyIKICAgICAgdmFsdWUtbGFiZWw9InZhbHVlIgogICAgICBuYW1lLWxhYmVsPSJsYWJlbCIKICAgICAgOmJlZm9yZS1vaz0iYmVmb3JlT2siCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKY29uc3QgdGFnT3B0aW9ucyA9IFt7CiAgbGFiZWw6ICd3YXRlcicsCiAgdmFsdWU6IDgwLAp9LCB7CiAgbGFiZWw6ICdhbnRkJywKICB2YWx1ZTogMTgwLAp9LCB7CiAgbGFiZWw6ICfph5HojIInLAogIHZhbHVlOiAzODAsCn0sIHsKICBsYWJlbDogJ+elqOWkp+WkpycsCiAgdmFsdWU6IDQ4MCwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB0YWdOZXdPcHRpb25zID0gcmVmKFtdKTsKICAgIG9uTW91bnRlZCgoKSA9PiB7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgIHRhZ05ld09wdGlvbnMudmFsdWUgPSB0YWdPcHRpb25zLnNsaWNlKCk7CiAgICAgIH0sIDEwMDApOwogICAgfSk7CgogICAgY29uc3QgYmVmb3JlT2sgPSAoewogICAgICBwYXJhbXMsCiAgICAgIHN1Y2Nlc3MsCiAgICB9KSA9PiB7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcywgJzgnKTsKICAgICAgICBzdWNjZXNzKHRydWUpOwogICAgICB9LCAxMjAwKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdGFnczogcmVmKFs4MCwgMzgwXSksCiAgICAgIHRhZ05ld09wdGlvbnMsCiAgICAgIGJlZm9yZU9rLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[n("div",null,[c(p,{value:t.tags,"onUpdate:value":s[0]||(s[0]=u=>t.tags=u),createable:"","create-placeholder":"\u8BBE\u7F6E\u6807\u7B7E","show-selected":!1,"create-icon":!1,"create-bordered":!1,options:t.tagNewOptions,"value-label":"value","name-label":"label","before-ok":t.beforeOk},null,8,["value","options","before-ok"])])]),htmlCode:e(()=>[Xn]),jsVersionHtml:e(()=>[Dn]),_:1},8,["jsfiddle"])}var On=d(xn,[["render",Mn]]);const Pn={pageData:{title:"TagModalList",description:"",frontmatter:{category:"Components",subtitle:"\u6807\u7B7E\u9009\u62E9\u5668",type:"\u6570\u636E\u5F55\u5165",title:"TagModalList",cover:"https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:2,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""}],relativePath:"components/tag-modal-list/index.zh-CN.md",content:`
\u6807\u7B7E\u5F39\u6846\u7684\u5FEB\u6377\u5C01\u88C5\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u5C55\u793A
- \u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u9690\u85CF
- \u9700\u8981\u521B\u5EFA\u6807\u7B7E

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| value(v-model) | \u9009\u4E2D\u7684\u503C | string[] \\| number[] | - |  |
| maxTagTextLength | \u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B97 2 \u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6 | number | 4 |  |
| maxTagCount | \u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709 | number | 4 |  |
| maxCheckCount | \u5728 \`type=&quot;checkbox&quot;\` \u6A21\u5F0F\u53EF\u8BBE\u7F6E\u6700\u591A\u9009\u62E9\u51E0\u4E2A | number | - | 3.10.0 |
| closable | \u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE | boolean | true |  |
| createable | \u4E0D\u8BBE\u7F6E \`type\` \u7684\u65F6\u5019\uFF0C\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE | boolean | false |  |
| nameLabel | \u663E\u793A\u6807\u7B7E\u540D\u5B57\u7684\u5B57\u6BB5 | string | name |  |
| valueLabel | \u63D0\u4EA4\u6570\u636E\u7684\u5B57\u6BB5 | string | name |  |
| childrenLabel | \u5206\u7EC4\u5B50\u96C6\u7684\u5B57\u6BB5\u540D\u5B57 | string | children |  |
| api | \u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3 | Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt; | - |  |
| apiParams | \u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |
| beforeClose | \u53D6\u6D88\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664 | Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt; | - |  |
| titleRightRender | \u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9\u533A\u57DF | Function | - |  |
| modalTitle | \u5F39\u6846\u6807\u9898 | string | \u9009\u62E9\u6807\u7B7E |  |
| createPlaceholder | \u521B\u5EFA\u6309\u94AE\u7684\u6587\u6848 | string | \u6DFB\u52A0\u6807\u7B7E |  |
| type | \u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 \`select\` | string | - |  |
| size | \`type=&quot;select&quot;\` \u7684\u65F6\u5019\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A \`large\`\u3002\u53EF\u9009 \`large\` \`default\` \`small\` | string | \`default\` |  |
| checkMode | \u9009\u62E9\u7684\u7C7B\u578B\uFF0C\u5355\u9009\u8FD8\u662F\u591A\u9009\u3002 | \`radio\` \\| \`checkbox\` | \`checkbox\` |  |
| placeholder | \`type=&quot;select&quot;\` \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9 | string | - |  |
| options | \u53EF\u9009\u6570\u636E | array | - | 3.26.0 |
| showSelected | type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u5DF2\u9009\u9879 | boolean | true | 3.26.0 |
| createIcon | type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A+icon | boolean | true | 3.26.0 |
| createBordered | type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u8FB9\u6846\u5185\u8FB9\u8DDD | boolean | true | 3.26.0 |
| beforeOk | \u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664 | Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt; | - | 3.26.0 |
| disabled | \u7981\u7528 | boolean | - | 3.27.0 |

## \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| close-click | \u5173\u95ED\u65F6\u7684\u56DE\u8C03 | (e) =&gt; void |
| create-click | \u70B9\u51FB\u6DFB\u52A0\u89E6\u53D1 | (e) =&gt; void |
| change | \u5F39\u6846\u70B9\u51FB\u786E\u5B9A\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A ok | (inputValue, eventType) =&gt; void |
| change | \u5F39\u6846\u70B9\u51FB\u53D6\u6D88\u89E6\u53D1\u6216\u8005\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A cancel | (inputValue, eventType) =&gt; void |
| change | \u8F93\u5165\u6846\u56DE\u8F66\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A close | (inputValue, eventType) =&gt; void |
| change | \u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5F53\u524D\u5173\u95ED\u7684\u503C\uFF0C eventType \u4E3A remove | (name, eventType) =&gt; void |
`,html:`<p>\u6807\u7B7E\u5F39\u6846\u7684\u5FEB\u6377\u5C01\u88C5\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u5C55\u793A</li>
<li>\u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u9690\u85CF</li>
<li>\u9700\u8981\u521B\u5EFA\u6807\u7B7E</li>
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
<td>\u9009\u4E2D\u7684\u503C</td>
<td>string[] | number[]</td>
<td>-</td>
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
<td>maxCheckCount</td>
<td>\u5728 <code>type=&quot;checkbox&quot;</code> \u6A21\u5F0F\u53EF\u8BBE\u7F6E\u6700\u591A\u9009\u62E9\u51E0\u4E2A</td>
<td>number</td>
<td>-</td>
<td>3.10.0</td>
</tr>
<tr>
<td>closable</td>
<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>createable</td>
<td>\u4E0D\u8BBE\u7F6E <code>type</code> \u7684\u65F6\u5019\uFF0C\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>nameLabel</td>
<td>\u663E\u793A\u6807\u7B7E\u540D\u5B57\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>name</td>
<td></td>
</tr>
<tr>
<td>valueLabel</td>
<td>\u63D0\u4EA4\u6570\u636E\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>name</td>
<td></td>
</tr>
<tr>
<td>childrenLabel</td>
<td>\u5206\u7EC4\u5B50\u96C6\u7684\u5B57\u6BB5\u540D\u5B57</td>
<td>string</td>
<td>children</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td>
<td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td>
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
<td>beforeClose</td>
<td>\u53D6\u6D88\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664</td>
<td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>titleRightRender</td>
<td>\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9\u533A\u57DF</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>modalTitle</td>
<td>\u5F39\u6846\u6807\u9898</td>
<td>string</td>
<td>\u9009\u62E9\u6807\u7B7E</td>
<td></td>
</tr>
<tr>
<td>createPlaceholder</td>
<td>\u521B\u5EFA\u6309\u94AE\u7684\u6587\u6848</td>
<td>string</td>
<td>\u6DFB\u52A0\u6807\u7B7E</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>select</code></td>
<td>string</td>
<td>-</td>
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
<td>checkMode</td>
<td>\u9009\u62E9\u7684\u7C7B\u578B\uFF0C\u5355\u9009\u8FD8\u662F\u591A\u9009\u3002</td>
<td><code>radio</code> | <code>checkbox</code></td>
<td><code>checkbox</code></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>\u53EF\u9009\u6570\u636E</td>
<td>array</td>
<td>-</td>
<td>3.26.0</td>
</tr>
<tr>
<td>showSelected</td>
<td>type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u5DF2\u9009\u9879</td>
<td>boolean</td>
<td>true</td>
<td>3.26.0</td>
</tr>
<tr>
<td>createIcon</td>
<td>type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A+icon</td>
<td>boolean</td>
<td>true</td>
<td>3.26.0</td>
</tr>
<tr>
<td>createBordered</td>
<td>type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u8FB9\u6846\u5185\u8FB9\u8DDD</td>
<td>boolean</td>
<td>true</td>
<td>3.26.0</td>
</tr>
<tr>
<td>beforeOk</td>
<td>\u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664</td>
<td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td>
<td>-</td>
<td>3.26.0</td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td>3.27.0</td>
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
</tr>
</thead>
<tbody>
<tr>
<td>close-click</td>
<td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td>
<td>(e) =&gt; void</td>
</tr>
<tr>
<td>create-click</td>
<td>\u70B9\u51FB\u6DFB\u52A0\u89E6\u53D1</td>
<td>(e) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>\u5F39\u6846\u70B9\u51FB\u786E\u5B9A\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A ok</td>
<td>(inputValue, eventType) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>\u5F39\u6846\u70B9\u51FB\u53D6\u6D88\u89E6\u53D1\u6216\u8005\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A cancel</td>
<td>(inputValue, eventType) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>\u8F93\u5165\u6846\u56DE\u8F66\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A close</td>
<td>(inputValue, eventType) =&gt; void</td>
</tr>
<tr>
<td>change</td>
<td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5F53\u524D\u5173\u95ED\u7684\u503C\uFF0C eventType \u4E3A remove</td>
<td>(name, eventType) =&gt; void</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243935}},zn={class:"markdown"},En=Z('<p>\u6807\u7B7E\u5F39\u6846\u7684\u5FEB\u6377\u5C01\u88C5\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u5C55\u793A</li><li>\u6709\u5F88\u591A\u6807\u7B7E\u9700\u8981\u9690\u85CF</li><li>\u9700\u8981\u521B\u5EFA\u6807\u7B7E</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u9009\u4E2D\u7684\u503C</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>\u6587\u5B57\u7684\u957F\u5EA6\uFF0C\u4E2D\u6587\u7B97 2 \u4E2A\u957F\u5EA6\uFF0C\u82F1\u6587\u7B97\u4E00\u4E2A\u957F\u5EA6</td><td>number</td><td>4</td><td></td></tr><tr><td>maxTagCount</td><td>\u6807\u7B7E\u7684\u4E2A\u6570\uFF0C\u4E3A 0 \u7684\u65F6\u5019\u663E\u793A\u6240\u6709</td><td>number</td><td>4</td><td></td></tr><tr><td>maxCheckCount</td><td>\u5728 <code>type=&quot;checkbox&quot;</code> \u6A21\u5F0F\u53EF\u8BBE\u7F6E\u6700\u591A\u9009\u62E9\u51E0\u4E2A</td><td>number</td><td>-</td><td>3.10.0</td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>createable</td><td>\u4E0D\u8BBE\u7F6E <code>type</code> \u7684\u65F6\u5019\uFF0C\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE</td><td>boolean</td><td>false</td><td></td></tr><tr><td>nameLabel</td><td>\u663E\u793A\u6807\u7B7E\u540D\u5B57\u7684\u5B57\u6BB5</td><td>string</td><td>name</td><td></td></tr><tr><td>valueLabel</td><td>\u63D0\u4EA4\u6570\u636E\u7684\u5B57\u6BB5</td><td>string</td><td>name</td><td></td></tr><tr><td>childrenLabel</td><td>\u5206\u7EC4\u5B50\u96C6\u7684\u5B57\u6BB5\u540D\u5B57</td><td>string</td><td>children</td><td></td></tr><tr><td>api</td><td>\u8BF7\u6C42\u5F39\u6846\u53EF\u9009\u9879\u7684\u63A5\u53E3</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td></td></tr><tr><td>apiParams</td><td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>beforeClose</td><td>\u53D6\u6D88\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td></td></tr><tr><td>titleRightRender</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8\u53F3\u8FB9\u533A\u57DF</td><td>Function</td><td>-</td><td></td></tr><tr><td>modalTitle</td><td>\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u9009\u62E9\u6807\u7B7E</td><td></td></tr><tr><td>createPlaceholder</td><td>\u521B\u5EFA\u6309\u94AE\u7684\u6587\u6848</td><td>string</td><td>\u6DFB\u52A0\u6807\u7B7E</td><td></td></tr><tr><td>type</td><td>\u63A7\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009 <code>select</code></td><td>string</td><td>-</td><td></td></tr><tr><td>size</td><td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A <code>large</code>\u3002\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>checkMode</td><td>\u9009\u62E9\u7684\u7C7B\u578B\uFF0C\u5355\u9009\u8FD8\u662F\u591A\u9009\u3002</td><td><code>radio</code> | <code>checkbox</code></td><td><code>checkbox</code></td><td></td></tr><tr><td>placeholder</td><td><code>type=&quot;select&quot;</code> \u7684\u65F6\u5019\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td><td>string</td><td>-</td><td></td></tr><tr><td>options</td><td>\u53EF\u9009\u6570\u636E</td><td>array</td><td>-</td><td>3.26.0</td></tr><tr><td>showSelected</td><td>type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u5DF2\u9009\u9879</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createIcon</td><td>type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A+icon</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createBordered</td><td>type \u4E0D\u662F select \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u4E0D\u663E\u793A\u8FB9\u6846\u5185\u8FB9\u8DDD</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>beforeOk</td><td>\u786E\u5B9A\u9009\u4E2D\u4E4B\u524D\u7684\u786E\u8BA4\uFF0C\u8FD4\u56DE true \u624D\u80FD\u5220\u9664</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td>3.26.0</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>-</td><td>3.27.0</td></tr></tbody></table><h2 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close-click</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>(e) =&gt; void</td></tr><tr><td>create-click</td><td>\u70B9\u51FB\u6DFB\u52A0\u89E6\u53D1</td><td>(e) =&gt; void</td></tr><tr><td>change</td><td>\u5F39\u6846\u70B9\u51FB\u786E\u5B9A\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A ok</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u5F39\u6846\u70B9\u51FB\u53D6\u6D88\u89E6\u53D1\u6216\u8005\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A cancel</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u8F93\u5165\u6846\u56DE\u8F66\u89E6\u53D1\uFF0C\u8FD4\u56DE\u8F93\u5165\u5185\u5BB9\uFF0C eventType \u4E3A close</td><td>(inputValue, eventType) =&gt; void</td></tr><tr><td>change</td><td>\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5F53\u524D\u5173\u95ED\u7684\u503C\uFF0C eventType \u4E3A remove</td><td>(name, eventType) =&gt; void</td></tr></tbody></table>',7),jn=[En];function Un(t,s,i,k,C,I){return r(),w("article",zn,jn)}var qn=d(Pn,[["render",Un]]);const _n={pageData:{title:"TagModalList",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"TagModalList",cover:"https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:2,title:"Events",slug:"Events",content:""}],relativePath:"components/tag-modal-list/index.en-US.md",content:`
Quick encapsulation of tag modal.

## When To Use

- There are many tag modal to show
- There are many tag modal to hide
- Labels need to be created

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Selected value | string[] \\| number[] | - |  |
| maxTagTextLength | For the length of text, Chinese is two lengths and English is one length | number | 4 |  |
| maxTagCount | The number of tags. When it is 0, all tags will be displayed | number | 4 |  |
| maxCheckCount | In the \` type = &quot;checkbox&quot; mode, you can set the maximum number of options | number | - | 3.10.0 |
| closable | Show close button | boolean | true |  |
| createable | Whether to display the Create button when the &#39;type&#39; is not set | boolean | false |  |
| nameLabel | Field that displays the label name | string | name |  |
| valueLabel | Fields for submitting data | string | name |  |
| childrenLabel | Field name of the grouping subset | string | children |  |
| api | Request pop-up optional interface | Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt; | - |  |
| apiParams | Parameters attached to the interface | object | {} |
| beforeClose | Uncheck the previous confirmation and return true to delete | Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt; | - |  |
| titleRightRender | Custom header right area | Function | - |  |
| modalTitle | modal title | string | \u9009\u62E9\u6807\u7B7E |  |
| createPlaceholder | Create a copy of the button | string | \u6DFB\u52A0\u6807\u7B7E |  |
| type | Control type, optional \`select\` | string | - |  |
| size | \`Type = &quot;select&quot; \`. Note: the size of the input box in the standard form is limited to &#39;large&#39;. Optional \`large\` \`default\` \` small\` | string | \`default\` |  |
| checkMode | Select the type, single or multiple. \`radio\` \\| \`checkbox\` | \`checkbox\` |  |
| placeholder | Display content when \`type=&quot;select&quot;\` | string | - |  |
| options | Optional data | array | - | 3.26.0 |
| showSelected | Type is not a select mode, and the selected options can not be displayed | boolean | true | 3.26.0 |
| createIcon | Type is not a select mode, and + icon may not be displayed | boolean | true | 3.26.0 |
| createBordered | Type is not in select mode, and the margin inside the border can not be displayed | boolean | true | 3.26.0 |
| beforeOk | Confirm to select the confirmation before and return true to delete | Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt; | - | 3.26.0 |
| disabled | Disabled | boolean | - | 3.27.0 |

## Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| close-click | Callback when closing | (e) =&gt; void |
| create-click | Click Add trigger | (e) =&gt; void |
| change | Click OK in the pop-up box to trigger and return to the input content. The eventtype is OK | (inputValue, eventType) =&gt; void |
| change | Click Cancel trigger in the pop-up box or click the upper right corner to close the trigger and return to the input content. The eventtype is cancel | (inputValue, eventType) =&gt; void |
| change | Press enter in the input box to trigger and return the input content. The eventtype is close | (inputValue, eventType) =&gt; void |
| change | Click the close button to trigger and return the currently closed value. The eventtype is remove | (name, eventType) =&gt; void |
`,html:`<p>Quick encapsulation of tag modal.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>There are many tag modal to show</li>
<li>There are many tag modal to hide</li>
<li>Labels need to be created</li>
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
<td>Selected value</td>
<td>string[] | number[]</td>
<td>-</td>
<td></td>
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
<td>maxCheckCount</td>
<td>In the \` type = &quot;checkbox&quot; mode, you can set the maximum number of options</td>
<td>number</td>
<td>-</td>
<td>3.10.0</td>
</tr>
<tr>
<td>closable</td>
<td>Show close button</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>createable</td>
<td>Whether to display the Create button when the 'type' is not set</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>nameLabel</td>
<td>Field that displays the label name</td>
<td>string</td>
<td>name</td>
<td></td>
</tr>
<tr>
<td>valueLabel</td>
<td>Fields for submitting data</td>
<td>string</td>
<td>name</td>
<td></td>
</tr>
<tr>
<td>childrenLabel</td>
<td>Field name of the grouping subset</td>
<td>string</td>
<td>children</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>Request pop-up optional interface</td>
<td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td>
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
<td>beforeClose</td>
<td>Uncheck the previous confirmation and return true to delete</td>
<td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>titleRightRender</td>
<td>Custom header right area</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>modalTitle</td>
<td>modal title</td>
<td>string</td>
<td>\u9009\u62E9\u6807\u7B7E</td>
<td></td>
</tr>
<tr>
<td>createPlaceholder</td>
<td>Create a copy of the button</td>
<td>string</td>
<td>\u6DFB\u52A0\u6807\u7B7E</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>Control type, optional <code>select</code></td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td><code>Type = &quot;select&quot;</code>. Note: the size of the input box in the standard form is limited to 'large'. Optional <code>large</code> <code>default</code> <code>small</code></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>checkMode</td>
<td>Select the type, single or multiple. <code>radio</code> | <code>checkbox</code></td>
<td><code>checkbox</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>Display content when <code>type=&quot;select&quot;</code></td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>Optional data</td>
<td>array</td>
<td>-</td>
<td>3.26.0</td>
</tr>
<tr>
<td>showSelected</td>
<td>Type is not a select mode, and the selected options can not be displayed</td>
<td>boolean</td>
<td>true</td>
<td>3.26.0</td>
</tr>
<tr>
<td>createIcon</td>
<td>Type is not a select mode, and + icon may not be displayed</td>
<td>boolean</td>
<td>true</td>
<td>3.26.0</td>
</tr>
<tr>
<td>createBordered</td>
<td>Type is not in select mode, and the margin inside the border can not be displayed</td>
<td>boolean</td>
<td>true</td>
<td>3.26.0</td>
</tr>
<tr>
<td>beforeOk</td>
<td>Confirm to select the confirmation before and return true to delete</td>
<td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td>
<td>-</td>
<td>3.26.0</td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled</td>
<td>boolean</td>
<td>-</td>
<td>3.27.0</td>
</tr>
</tbody>
</table>
<h2 id="Events">Events <a class="header-anchor" href="#Events">
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
<td>close-click</td>
<td>Callback when closing</td>
<td>(e) =&gt; void</td>
<td></td>
</tr>
<tr>
<td>create-click</td>
<td>Click Add trigger</td>
<td>(e) =&gt; void</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>Click OK in the pop-up box to trigger and return to the input content. The eventtype is OK</td>
<td>(inputValue, eventType) =&gt; void</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>Click Cancel trigger in the pop-up box or click the upper right corner to close the trigger and return to the input content. The eventtype is cancel</td>
<td>(inputValue, eventType) =&gt; void</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>Press enter in the input box to trigger and return the input content. The eventtype is close</td>
<td>(inputValue, eventType) =&gt; void</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>Click the close button to trigger and return the currently closed value. The eventtype is remove</td>
<td>(name, eventType) =&gt; void</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243935}},Qn={class:"markdown"},$n=Z('<p>Quick encapsulation of tag modal.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>There are many tag modal to show</li><li>There are many tag modal to hide</li><li>Labels need to be created</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>value(v-model)</td><td>Selected value</td><td>string[] | number[]</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>For the length of text, Chinese is two lengths and English is one length</td><td>number</td><td>4</td><td></td></tr><tr><td>maxTagCount</td><td>The number of tags. When it is 0, all tags will be displayed</td><td>number</td><td>4</td><td></td></tr><tr><td>maxCheckCount</td><td>In the ` type = &quot;checkbox&quot; mode, you can set the maximum number of options</td><td>number</td><td>-</td><td>3.10.0</td></tr><tr><td>closable</td><td>Show close button</td><td>boolean</td><td>true</td><td></td></tr><tr><td>createable</td><td>Whether to display the Create button when the &#39;type&#39; is not set</td><td>boolean</td><td>false</td><td></td></tr><tr><td>nameLabel</td><td>Field that displays the label name</td><td>string</td><td>name</td><td></td></tr><tr><td>valueLabel</td><td>Fields for submitting data</td><td>string</td><td>name</td><td></td></tr><tr><td>childrenLabel</td><td>Field name of the grouping subset</td><td>string</td><td>children</td><td></td></tr><tr><td>api</td><td>Request pop-up optional interface</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td></td></tr><tr><td>apiParams</td><td>Parameters attached to the interface</td><td>object</td><td>{}</td><td></td></tr><tr><td>beforeClose</td><td>Uncheck the previous confirmation and return true to delete</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td></td></tr><tr><td>titleRightRender</td><td>Custom header right area</td><td>Function</td><td>-</td><td></td></tr><tr><td>modalTitle</td><td>modal title</td><td>string</td><td>\u9009\u62E9\u6807\u7B7E</td><td></td></tr><tr><td>createPlaceholder</td><td>Create a copy of the button</td><td>string</td><td>\u6DFB\u52A0\u6807\u7B7E</td><td></td></tr><tr><td>type</td><td>Control type, optional <code>select</code></td><td>string</td><td>-</td><td></td></tr><tr><td>size</td><td><code>Type = &quot;select&quot;</code>. Note: the size of the input box in the standard form is limited to &#39;large&#39;. Optional <code>large</code> <code>default</code> <code>small</code></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>checkMode</td><td>Select the type, single or multiple. <code>radio</code> | <code>checkbox</code></td><td><code>checkbox</code></td><td></td><td></td></tr><tr><td>placeholder</td><td>Display content when <code>type=&quot;select&quot;</code></td><td>string</td><td>-</td><td></td></tr><tr><td>options</td><td>Optional data</td><td>array</td><td>-</td><td>3.26.0</td></tr><tr><td>showSelected</td><td>Type is not a select mode, and the selected options can not be displayed</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createIcon</td><td>Type is not a select mode, and + icon may not be displayed</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>createBordered</td><td>Type is not in select mode, and the margin inside the border can not be displayed</td><td>boolean</td><td>true</td><td>3.26.0</td></tr><tr><td>beforeOk</td><td>Confirm to select the confirmation before and return true to delete</td><td>Function as PropType&lt;(arg?: Recordable) =&gt; Promise&lt;Recordable[]&gt;&gt;</td><td>-</td><td>3.26.0</td></tr><tr><td>disabled</td><td>Disabled</td><td>boolean</td><td>-</td><td>3.27.0</td></tr></tbody></table><h2 id="Events">Events <a class="header-anchor" href="#Events"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>close-click</td><td>Callback when closing</td><td>(e) =&gt; void</td><td></td></tr><tr><td>create-click</td><td>Click Add trigger</td><td>(e) =&gt; void</td><td></td></tr><tr><td>change</td><td>Click OK in the pop-up box to trigger and return to the input content. The eventtype is OK</td><td>(inputValue, eventType) =&gt; void</td><td></td></tr><tr><td>change</td><td>Click Cancel trigger in the pop-up box or click the upper right corner to close the trigger and return to the input content. The eventtype is cancel</td><td>(inputValue, eventType) =&gt; void</td><td></td></tr><tr><td>change</td><td>Press enter in the input box to trigger and return the input content. The eventtype is close</td><td>(inputValue, eventType) =&gt; void</td><td></td></tr><tr><td>change</td><td>Click the close button to trigger and return the currently closed value. The eventtype is remove</td><td>(name, eventType) =&gt; void</td><td></td></tr></tbody></table>',7),na=[$n];function aa(t,s,i,k,C,I){return r(),w("article",Qn,na)}var ta=d(_n,[["render",aa]]);const sa=A({CN:qn,US:ta,components:{Basic:S,Data:P,Radio:_,RadioSelect:sn,Select:un,Header:bn,BeforeClose:fn,MaxCheckCount:Yn,Options:On,Three:Tn}});function oa(t,s,i,k,C,I){const p=o("Basic"),l=o("Data"),u=o("Radio"),m=o("RadioSelect"),h=o("Select"),f=o("Header"),W=o("BeforeClose"),B=o("MaxCheckCount"),y=o("Options"),G=o("Three"),H=o("demo-sort");return r(),b(H,null,{default:e(()=>[c(p),c(l),c(u),c(m),c(h),c(f),c(W),c(B),c(y),c(G)]),_:1})}var pa=d(sa,[["render",oa]]);export{pa as default};

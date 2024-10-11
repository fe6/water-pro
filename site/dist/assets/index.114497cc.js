var nn=Object.defineProperty,an=Object.defineProperties;var tn=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var sn=Object.prototype.hasOwnProperty,on=Object.prototype.propertyIsEnumerable;var z=(t,s,p)=>s in t?nn(t,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[s]=p,R=(t,s)=>{for(var p in s||(s={}))sn.call(s,p)&&z(t,p,s[p]);if(D)for(var p of D(s))on.call(s,p)&&z(t,p,s[p]);return t},K=(t,s)=>an(t,tn(s));import{d as y,k as m,aq as c,J as b,bN as f,bO as o,e,G as n,H as a,w as F,r as X,c as U,Z as L,cc as en,A as cn,cd as pn,ca as ln,at as un,bP as W,E as T,cb as q}from"./vendor.0f0e4632.js";import{_ as A}from"./index.f6b32fa6.js";import{I as kn}from"./byted-user.ea3b9e04.js";import{I as rn}from"./byted-smiling-face.ff1d9dc6.js";const dn=y({setup(){const t=m([{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",label:"Disabled",disabled:!0},{value:"yiminghe",label:"Yiminghe"}]),s=m([{value:"lucy",label:"Lucy"}]),p=m([{value:"lucy",label:"Lucy"}]);return{focus:()=>{console.log("focus")},handleChange:I=>{console.log(`selected ${I}`)},value1:m("lucy"),value2:m("lucy"),value3:m("lucy"),options1:t,options2:s,options3:p}}}),gn=n("h2",null,"use a-select-option",-1),In=a("Jack"),Cn=a("Lucy"),mn=a("Disabled"),hn=a("yiminghe"),bn=a("Lucy"),An=a("Lucy"),vn=n("h2",{style:{"margin-top":"10px"}},"use options (recommend)",-1),yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("use a-select-option"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("focus"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("jack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabled"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),a("Disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Yiminghe"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("yiminghe"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 10px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("use options (recommend)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("focus"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"loading"),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options1 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options2 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options3 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"focus"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'focus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      focus`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options1`),n("span",{class:"token punctuation"},","),a(`
      options2`),n("span",{class:"token punctuation"},","),a(`
      options3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("use a-select-option"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("focus"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("jack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabled"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),a("Disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Yiminghe"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("yiminghe"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 10px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("use options (recommend)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("focus"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"loading"),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"focus"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'focus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      focus`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options1`),n("span",{class:"token punctuation"},","),a(`
      options2`),n("span",{class:"token punctuation"},","),a(`
      options3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Zn(t,s,p,d,i,I){const l=c("a-select-option"),u=c("a-select"),r=c("a-space"),g=c("demo-box");return b(),f(g,{jsfiddle:{us:"Basic Usage",cn:"\u57FA\u672C\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic Usage</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/select/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxoMj51c2UgYS1zZWxlY3Qtb3B0aW9uPC9oMj4KICA8YS1zcGFjZT4KICAgIDxhLXNlbGVjdAogICAgICByZWY9InNlbGVjdCIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgICBAZm9jdXM9ImZvY3VzIgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICA+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImphY2siPkphY2s8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0ibHVjeSI+THVjeTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJkaXNhYmxlZCIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iWWltaW5naGUiPnlpbWluZ2hlPC9hLXNlbGVjdC1vcHRpb24+CiAgICA8L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgc3R5bGU9IndpZHRoOiAxMjBweCIgZGlzYWJsZWQ+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9Imx1Y3kiPkx1Y3k8L2Etc2VsZWN0LW9wdGlvbj4KICAgIDwvYS1zZWxlY3Q+CiAgICA8YS1zZWxlY3Qgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiBzdHlsZT0id2lkdGg6IDEyMHB4IiBsb2FkaW5nPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJsdWN5Ij5MdWN5PC9hLXNlbGVjdC1vcHRpb24+CiAgICA8L2Etc2VsZWN0PgogIDwvYS1zcGFjZT4KICA8aDIgc3R5bGU9Im1hcmdpbi10b3A6IDEwcHgiPnVzZSBvcHRpb25zIChyZWNvbW1lbmQpPC9oMj4KICA8YS1zcGFjZT4KICAgIDxhLXNlbGVjdAogICAgICByZWY9InNlbGVjdCIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgICA6b3B0aW9ucz0ib3B0aW9uczEiCiAgICAgIEBmb2N1cz0iZm9jdXMiCiAgICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgID48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgc3R5bGU9IndpZHRoOiAxMjBweCIgZGlzYWJsZWQgOm9wdGlvbnM9Im9wdGlvbnMyIj48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgc3R5bGU9IndpZHRoOiAxMjBweCIgbG9hZGluZyA6b3B0aW9ucz0ib3B0aW9uczMiPjwvYS1zZWxlY3Q+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBTZWxlY3RQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgb3B0aW9uczEgPSByZWY8U2VsZWN0UHJvcHNbJ29wdGlvbnMnXT4oWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdqYWNrJywKICAgICAgICBsYWJlbDogJ0phY2snLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgICBsYWJlbDogJ0x1Y3knLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICdkaXNhYmxlZCcsCiAgICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsCiAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ3lpbWluZ2hlJywKICAgICAgICBsYWJlbDogJ1lpbWluZ2hlJywKICAgICAgfSwKICAgIF0pOwogICAgY29uc3Qgb3B0aW9uczIgPSByZWY8U2VsZWN0UHJvcHNbJ29wdGlvbnMnXT4oWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgICBsYWJlbDogJ0x1Y3knLAogICAgICB9LAogICAgXSk7CiAgICBjb25zdCBvcHRpb25zMyA9IHJlZjxTZWxlY3RQcm9wc1snb3B0aW9ucyddPihbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICAgIGxhYmVsOiAnTHVjeScsCiAgICAgIH0sCiAgICBdKTsKICAgIGNvbnN0IGZvY3VzID0gKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnZm9jdXMnKTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZvY3VzLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHZhbHVlMTogcmVmKCdsdWN5JyksCiAgICAgIHZhbHVlMjogcmVmKCdsdWN5JyksCiAgICAgIHZhbHVlMzogcmVmKCdsdWN5JyksCiAgICAgIG9wdGlvbnMxLAogICAgICBvcHRpb25zMiwKICAgICAgb3B0aW9uczMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxoMj51c2UgYS1zZWxlY3Qtb3B0aW9uPC9oMj4KICA8YS1zcGFjZT4KICAgIDxhLXNlbGVjdAogICAgICByZWY9InNlbGVjdCIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgICBAZm9jdXM9ImZvY3VzIgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICA+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImphY2siPkphY2s8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0ibHVjeSI+THVjeTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJkaXNhYmxlZCIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iWWltaW5naGUiPnlpbWluZ2hlPC9hLXNlbGVjdC1vcHRpb24+CiAgICA8L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgc3R5bGU9IndpZHRoOiAxMjBweCIgZGlzYWJsZWQ+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9Imx1Y3kiPkx1Y3k8L2Etc2VsZWN0LW9wdGlvbj4KICAgIDwvYS1zZWxlY3Q+CiAgICA8YS1zZWxlY3Qgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiBzdHlsZT0id2lkdGg6IDEyMHB4IiBsb2FkaW5nPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJsdWN5Ij5MdWN5PC9hLXNlbGVjdC1vcHRpb24+CiAgICA8L2Etc2VsZWN0PgogIDwvYS1zcGFjZT4KICA8aDIgc3R5bGU9Im1hcmdpbi10b3A6IDEwcHgiPnVzZSBvcHRpb25zIChyZWNvbW1lbmQpPC9oMj4KICA8YS1zcGFjZT4KICAgIDxhLXNlbGVjdAogICAgICByZWY9InNlbGVjdCIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgICA6b3B0aW9ucz0ib3B0aW9uczEiCiAgICAgIEBmb2N1cz0iZm9jdXMiCiAgICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgID48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgc3R5bGU9IndpZHRoOiAxMjBweCIgZGlzYWJsZWQgOm9wdGlvbnM9Im9wdGlvbnMyIj48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgc3R5bGU9IndpZHRoOiAxMjBweCIgbG9hZGluZyA6b3B0aW9ucz0ib3B0aW9uczMiPjwvYS1zZWxlY3Q+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zMSA9IHJlZihbewogICAgICB2YWx1ZTogJ2phY2snLAogICAgICBsYWJlbDogJ0phY2snLAogICAgfSwgewogICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICBsYWJlbDogJ0x1Y3knLAogICAgfSwgewogICAgICB2YWx1ZTogJ2Rpc2FibGVkJywKICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsCiAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgfSwgewogICAgICB2YWx1ZTogJ3lpbWluZ2hlJywKICAgICAgbGFiZWw6ICdZaW1pbmdoZScsCiAgICB9XSk7CiAgICBjb25zdCBvcHRpb25zMiA9IHJlZihbewogICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICBsYWJlbDogJ0x1Y3knLAogICAgfV0pOwogICAgY29uc3Qgb3B0aW9uczMgPSByZWYoW3sKICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgbGFiZWw6ICdMdWN5JywKICAgIH1dKTsKCiAgICBjb25zdCBmb2N1cyA9ICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2ZvY3VzJyk7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZvY3VzLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHZhbHVlMTogcmVmKCdsdWN5JyksCiAgICAgIHZhbHVlMjogcmVmKCdsdWN5JyksCiAgICAgIHZhbHVlMzogcmVmKCdsdWN5JyksCiAgICAgIG9wdGlvbnMxLAogICAgICBvcHRpb25zMiwKICAgICAgb3B0aW9uczMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[gn,e(r,null,{default:o(()=>[e(u,{ref:"select",value:t.value1,"onUpdate:value":s[0]||(s[0]=k=>t.value1=k),style:{width:"120px"},onFocus:t.focus,onChange:t.handleChange},{default:o(()=>[e(l,{value:"jack"},{default:o(()=>[In]),_:1}),e(l,{value:"lucy"},{default:o(()=>[Cn]),_:1}),e(l,{value:"disabled",disabled:""},{default:o(()=>[mn]),_:1}),e(l,{value:"Yiminghe"},{default:o(()=>[hn]),_:1})]),_:1},8,["value","onFocus","onChange"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=k=>t.value2=k),style:{width:"120px"},disabled:""},{default:o(()=>[e(l,{value:"lucy"},{default:o(()=>[bn]),_:1})]),_:1},8,["value"]),e(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=k=>t.value3=k),style:{width:"120px"},loading:""},{default:o(()=>[e(l,{value:"lucy"},{default:o(()=>[An]),_:1})]),_:1},8,["value"])]),_:1}),vn,e(r,null,{default:o(()=>[e(u,{ref:"select",value:t.value1,"onUpdate:value":s[3]||(s[3]=k=>t.value1=k),style:{width:"120px"},options:t.options1,onFocus:t.focus,onChange:t.handleChange},null,8,["value","options","onFocus","onChange"]),e(u,{value:t.value2,"onUpdate:value":s[4]||(s[4]=k=>t.value2=k),style:{width:"120px"},disabled:"",options:t.options2},null,8,["value","options"]),e(u,{value:t.value3,"onUpdate:value":s[5]||(s[5]=k=>t.value3=k),style:{width:"120px"},loading:"",options:t.options3},null,8,["value","options"])]),_:1})]),htmlCode:o(()=>[yn]),jsVersionHtml:o(()=>[fn]),_:1},8,["jsfiddle"])}var wn=A(dn,[["render",Zn]]);const Wn=y({setup(){return{popupScroll:()=>{console.log("popupScroll")},size:m("middle"),value1:m("a1"),value2:m(["a1","b2"]),value3:m(["a1","b2"]),options:[...Array(25)].map((s,p)=>({value:(p+10).toString(36)+(p+1)}))}}}),Gn=a("Large"),Bn=a("Middle"),Sn=a("Small"),Yn=n("br",null,null,-1),Vn=n("br",null,null,-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("middle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"@popupScroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("popupScroll"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"popupScroll"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'popupScroll'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      popupScroll`),n("span",{class:"token punctuation"},","),a(`
      size`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'size'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" i")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("middle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"@popupScroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("popupScroll"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"popupScroll"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'popupScroll'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      popupScroll`),n("span",{class:"token punctuation"},","),a(`
      size`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" i")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Nn(t,s,p,d,i,I){const l=c("a-radio-button"),u=c("a-radio-group"),r=c("a-select"),g=c("a-space"),k=c("demo-box");return b(),f(k,{jsfiddle:{us:"The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.",cn:"\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A `large` \u548C `small` \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A `40px` \u548C `24px` \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A `32px`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A <code>large</code> \u548C <code>small</code> \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A <code>40px</code> \u548C <code>24px</code> \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A <code>32px</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.</p>
`,order:1,title:{"zh-CN":"\u4E09\u79CD\u5927\u5C0F","en-US":"Sizes"},relativePath:"components/select/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJtaWRkbGUiPk1pZGRsZTwvYS1yYWRpby1idXR0b24+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgPC9hLXJhZGlvLWdyb3VwPgogIDxiciAvPgogIDxiciAvPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOnNpemU9InNpemUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3Q+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIgogICAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgICAgbW9kZT0ibXVsdGlwbGUiCiAgICAgIDpzaXplPSJzaXplIgogICAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgICAgQHBvcHVwU2Nyb2xsPSJwb3B1cFNjcm9sbCIKICAgID48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICAgIG1vZGU9InRhZ3MiCiAgICAgIDpzaXplPSJzaXplIgogICAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgID48L2Etc2VsZWN0PgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHBvcHVwU2Nyb2xsID0gKCkgPT4gewogICAgICBjb25zb2xlLmxvZygncG9wdXBTY3JvbGwnKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgcG9wdXBTY3JvbGwsCiAgICAgIHNpemU6IHJlZjxTZWxlY3RQcm9wc1snc2l6ZSddPignbWlkZGxlJyksCiAgICAgIHZhbHVlMTogcmVmKCdhMScpLAogICAgICB2YWx1ZTI6IHJlZihbJ2ExJywgJ2IyJ10pLAogICAgICB2YWx1ZTM6IHJlZihbJ2ExJywgJ2IyJ10pLAogICAgICBvcHRpb25zOiBbLi4uQXJyYXkoMjUpXS5tYXAoKF8sIGkpID0+ICh7IHZhbHVlOiAoaSArIDEwKS50b1N0cmluZygzNikgKyAoaSArIDEpIH0pKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJtaWRkbGUiPk1pZGRsZTwvYS1yYWRpby1idXR0b24+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgPC9hLXJhZGlvLWdyb3VwPgogIDxiciAvPgogIDxiciAvPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOnNpemU9InNpemUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3Q+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIgogICAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgICAgbW9kZT0ibXVsdGlwbGUiCiAgICAgIDpzaXplPSJzaXplIgogICAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgICAgQHBvcHVwU2Nyb2xsPSJwb3B1cFNjcm9sbCIKICAgID48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICAgIG1vZGU9InRhZ3MiCiAgICAgIDpzaXplPSJzaXplIgogICAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgID48L2Etc2VsZWN0PgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgcG9wdXBTY3JvbGwgPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdwb3B1cFNjcm9sbCcpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBwb3B1cFNjcm9sbCwKICAgICAgc2l6ZTogcmVmKCdtaWRkbGUnKSwKICAgICAgdmFsdWUxOiByZWYoJ2ExJyksCiAgICAgIHZhbHVlMjogcmVmKFsnYTEnLCAnYjInXSksCiAgICAgIHZhbHVlMzogcmVmKFsnYTEnLCAnYjInXSksCiAgICAgIG9wdGlvbnM6IFsuLi5BcnJheSgyNSldLm1hcCgoXywgaSkgPT4gKHsKICAgICAgICB2YWx1ZTogKGkgKyAxMCkudG9TdHJpbmcoMzYpICsgKGkgKyAxKSwKICAgICAgfSkpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[e(u,{value:t.size,"onUpdate:value":s[0]||(s[0]=C=>t.size=C)},{default:o(()=>[e(l,{value:"large"},{default:o(()=>[Gn]),_:1}),e(l,{value:"middle"},{default:o(()=>[Bn]),_:1}),e(l,{value:"small"},{default:o(()=>[Sn]),_:1})]),_:1},8,["value"]),Yn,Vn,e(g,{direction:"vertical"},{default:o(()=>[e(r,{value:t.value1,"onUpdate:value":s[1]||(s[1]=C=>t.value1=C),size:t.size,style:{width:"200px"},options:t.options},null,8,["value","size","options"]),e(r,{value:t.value2,"onUpdate:value":s[2]||(s[2]=C=>t.value2=C),options:t.options,mode:"multiple",size:t.size,placeholder:"Please select",style:{width:"200px"},onPopupScroll:t.popupScroll},null,8,["value","options","size","onPopupScroll"]),e(r,{value:t.value3,"onUpdate:value":s[3]||(s[3]=C=>t.value3=C),options:t.options,mode:"tags",size:t.size,placeholder:"Please select",style:{width:"200px"}},null,8,["value","options","size"])]),_:1})]),htmlCode:o(()=>[Hn]),jsVersionHtml:o(()=>[Fn]),_:1},8,["jsfiddle"])}var xn=A(Wn,[["render",Nn]]);const Rn=y({setup(){const t=s=>{console.log(`selected ${s}`)};return{value:m([]),handleChange:t,options:[...Array(25)].map((s,p)=>({value:(p+10).toString(36)+(p+1)}))}}}),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tags Mode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" i")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tags Mode"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" i")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Jn(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Select with tags, transform input to tag (scroll the menu)",cn:"tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Select with tags, transform input to tag (scroll the menu)</p>
`,order:2,title:{"zh-CN":"\u6807\u7B7E","en-US":"Tags"},relativePath:"components/select/demo/tags.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJ0YWdzIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgcGxhY2Vob2xkZXI9IlRhZ3MgTW9kZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID48L2Etc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbXSksCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgb3B0aW9uczogWy4uLkFycmF5KDI1KV0ubWFwKChfLCBpKSA9PiAoeyB2YWx1ZTogKGkgKyAxMCkudG9TdHJpbmcoMzYpICsgKGkgKyAxKSB9KSksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJ0YWdzIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgcGxhY2Vob2xkZXI9IlRhZ3MgTW9kZSIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID48L2Etc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFtdKSwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBvcHRpb25zOiBbLi4uQXJyYXkoMjUpXS5tYXAoKF8sIGkpID0+ICh7CiAgICAgICAgdmFsdWU6IChpICsgMTApLnRvU3RyaW5nKDM2KSArIChpICsgMSksCiAgICAgIH0pKSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:t.options,onChange:t.handleChange},null,8,["value","options","onChange"])]),htmlCode:o(()=>[Kn]),jsVersionHtml:o(()=>[Xn]),_:1},8,["jsfiddle"])}var Pn=A(Rn,[["render",Jn]]);const jn=y({setup(){const t=m([{value:"a1",label:"a1"}]),s=m([]),p=d=>{console.log(`selected ${d}`)};return F(s,()=>{console.log("value",s.value)}),{options:t,handleChange:p,value:s}}}),Dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":token-separators"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a(","),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Automatic tokenization"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":token-separators"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a(","),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Automatic tokenization"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Un(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Try to copy `Lucy,Jack` to the input. Only available in tags and multiple mode.",cn:"\u8BD5\u4E0B\u590D\u5236 `\u9732\u897F,\u6770\u514B` \u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BD5\u4E0B\u590D\u5236 <code>\u9732\u897F,\u6770\u514B</code> \u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Try to copy <code>Lucy,Jack</code> to the input. Only available in tags and multiple mode.</p>
`,order:3,title:{"zh-CN":"\u81EA\u52A8\u5206\u8BCD","en-US":"Automatic tokenization"},relativePath:"components/select/demo/automatic-tokenization.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJ0YWdzIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOnRva2VuLXNlcGFyYXRvcnM9IlsnLCddIgogICAgcGxhY2Vob2xkZXI9IkF1dG9tYXRpYyB0b2tlbml6YXRpb24iCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmPFNlbGVjdFByb3BzWydvcHRpb25zJ10+KFsKICAgICAgewogICAgICAgIHZhbHVlOiAnYTEnLAogICAgICAgIGxhYmVsOiAnYTEnLAogICAgICB9LAogICAgXSk7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxzdHJpbmdbXT4oW10pOwogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBbXSkgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIG9wdGlvbnMsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgdmFsdWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJ0YWdzIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOnRva2VuLXNlcGFyYXRvcnM9IlsnLCddIgogICAgcGxhY2Vob2xkZXI9IkF1dG9tYXRpYyB0b2tlbml6YXRpb24iCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoW3sKICAgICAgdmFsdWU6ICdhMScsCiAgICAgIGxhYmVsOiAnYTEnLAogICAgfV0pOwogICAgY29uc3QgdmFsdWUgPSByZWYoW10pOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlLnZhbHVlKTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgb3B0aW9ucywKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICB2YWx1ZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),mode:"tags",style:{width:"100%"},"token-separators":[","],placeholder:"Automatic tokenization",options:t.options,onChange:t.handleChange},null,8,["value","options","onChange"])]),htmlCode:o(()=>[Dn]),jsVersionHtml:o(()=>[zn]),_:1},8,["jsfiddle"])}var Ln=A(jn,[["render",Un]]);const Tn=y({setup(){const t=m([{value:"jack",label:"Jack (100)"},{value:"lucy",label:"Lucy (101)"}]),s=p=>{console.log(p)};return{value:m({value:"lucy"}),options:t,handleChange:s}}}),qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label-in-value"),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack (100)'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy (101)'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" handleChange"),n("span",{class:"token operator"},":"),a(" SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onChange'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// { key: "lucy", label: "Lucy (101)" }'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),On=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label-in-value"),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack (100)'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy (101)'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// { key: "lucy", label: "Lucy (101)" }'),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function En(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:`As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.
The label of the selected item will be packed as an object for passing to the onChange callback.`,cn:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B `onChange` \u91CC\u53EA\u80FD\u62FF\u5230 value\uFF0C\u5982\u679C\u9700\u8981\u62FF\u5230\u9009\u4E2D\u7684\u8282\u70B9\u6587\u672C label\uFF0C\u53EF\u4EE5\u4F7F\u7528 `labelInValue` \u5C5E\u6027\u3002\n\u9009\u4E2D\u9879\u7684 label \u4F1A\u88AB\u5305\u88C5\u5230 value \u4E2D\u4F20\u9012\u7ED9 `onChange` \u7B49\u51FD\u6570\uFF0C\u6B64\u65F6 value \u662F\u4E00\u4E2A\u5BF9\u8C61\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>onChange</code> \u91CC\u53EA\u80FD\u62FF\u5230 value\uFF0C\u5982\u679C\u9700\u8981\u62FF\u5230\u9009\u4E2D\u7684\u8282\u70B9\u6587\u672C label\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>labelInValue</code> \u5C5E\u6027\u3002
\u9009\u4E2D\u9879\u7684 label \u4F1A\u88AB\u5305\u88C5\u5230 value \u4E2D\u4F20\u9012\u7ED9 <code>onChange</code> \u7B49\u51FD\u6570\uFF0C\u6B64\u65F6 value \u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.
The label of the selected item will be packed as an object for passing to the onChange callback.</p>
`,order:4,title:{"zh-CN":"\u83B7\u5F97\u9009\u9879\u7684\u6587\u672C","en-US":"Get value of selected item"},relativePath:"components/select/demo/label-in-value.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBsYWJlbC1pbi12YWx1ZQogICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID48L2Etc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBTZWxlY3RQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9wdGlvbnMgPSByZWY8U2VsZWN0UHJvcHNbJ29wdGlvbnMnXT4oWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdqYWNrJywKICAgICAgICBsYWJlbDogJ0phY2sgKDEwMCknLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgICBsYWJlbDogJ0x1Y3kgKDEwMSknLAogICAgICB9LAogICAgXSk7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2U6IFNlbGVjdFByb3BzWydvbkNoYW5nZSddID0gKHZhbHVlKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTsgLy8geyBrZXk6ICJsdWN5IiwgbGFiZWw6ICJMdWN5ICgxMDEpIiB9CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZih7IHZhbHVlOiAnbHVjeScgfSksCiAgICAgIG9wdGlvbnMsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBsYWJlbC1pbi12YWx1ZQogICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID48L2Etc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmKFt7CiAgICAgIHZhbHVlOiAnamFjaycsCiAgICAgIGxhYmVsOiAnSmFjayAoMTAwKScsCiAgICB9LCB7CiAgICAgIHZhbHVlOiAnbHVjeScsCiAgICAgIGxhYmVsOiAnTHVjeSAoMTAxKScsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7IC8vIHsga2V5OiAibHVjeSIsIGxhYmVsOiAiTHVjeSAoMTAxKSIgfQogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKHsKICAgICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICB9KSwKICAgICAgb3B0aW9ucywKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),"label-in-value":"",style:{width:"120px"},options:t.options,onChange:t.handleChange},null,8,["value","options","onChange"])]),htmlCode:o(()=>[qn]),jsVersionHtml:o(()=>[On]),_:1},8,["jsfiddle"])}var Qn=A(Tn,[["render",En]]);const _n=y({setup(){return{handleChange:s=>{console.log(`selected ${s}`)},value:m(["a1","b2"])}}}),Mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function na(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Multiple selection, selecting from existing items (scroll the menu).",cn:"\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF08scroll the menu\uFF09",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF08scroll the menu\uFF09</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Multiple selection, selecting from existing items (scroll the menu).</p>
`,order:5,title:{"zh-CN":"\u591A\u9009","en-US":"Multiple selection"},relativePath:"components/select/demo/multiple.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJtdWx0aXBsZSIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgOm9wdGlvbnM9IlsuLi5BcnJheSgyNSldLm1hcCgoXywgaSkgPT4gKHsgdmFsdWU6IChpICsgMTApLnRvU3RyaW5nKDM2KSArIChpICsgMSkgfSkpIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID48L2Etc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmdbXSkgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHZhbHVlOiByZWYoWydhMScsICdiMiddKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJtdWx0aXBsZSIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgOm9wdGlvbnM9IlsuLi5BcnJheSgyNSldLm1hcCgoXywgaSkgPT4gKHsgdmFsdWU6IChpICsgMTApLnRvU3RyaW5nKDM2KSArIChpICsgMSkgfSkpIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID48L2Etc2VsZWN0Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHZhbHVlOiByZWYoWydhMScsICdiMiddKSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),mode:"multiple",style:{width:"100%"},placeholder:"Please select",options:[...Array(25)].map((r,g)=>({value:(g+10).toString(36)+(g+1)})),onChange:t.handleChange},null,8,["value","options","onChange"])]),htmlCode:o(()=>[Mn]),jsVersionHtml:o(()=>[$n]),_:1},8,["jsfiddle"])}var aa=A(_n,[["render",na]]);const O=["Zhejiang","Jiangsu"],J={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},ta=y({setup(){const t=O[0],s=X({province:t,provinceData:O,cityData:J,secondCity:J[t][0]}),p=U(()=>J[s.province]);return F(()=>s.province,d=>{s.secondCity=s.cityData[d][0]}),K(R({},L(s)),{cities:p})}}),sa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("province"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("provinceData.map((pro) => ({ value: pro }))"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondCity"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cities.map((city) => ({ value: city }))"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"const"),a(" provinceData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" cityData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
  Zhejiang`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Ningbo'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Wenzhou'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  Jiangsu`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Suzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Zhenjiang'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" toRefs"),n("span",{class:"token punctuation"},","),a(" computed"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" province "),n("span",{class:"token operator"},"="),a(" provinceData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      province`),n("span",{class:"token punctuation"},","),a(`
      provinceData`),n("span",{class:"token punctuation"},","),a(`
      cityData`),n("span",{class:"token punctuation"},","),a(`
      secondCity`),n("span",{class:"token operator"},":"),a(" cityData"),n("span",{class:"token punctuation"},"["),a("province"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" cities "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" cityData"),n("span",{class:"token punctuation"},"["),a("state"),n("span",{class:"token punctuation"},"."),a("province"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" state"),n("span",{class:"token punctuation"},"."),a("province"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        state`),n("span",{class:"token punctuation"},"."),a("secondCity "),n("span",{class:"token operator"},"="),a(" state"),n("span",{class:"token punctuation"},"."),a("cityData"),n("span",{class:"token punctuation"},"["),a("val"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      cities`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),oa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("province"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("provinceData.map((pro) => ({ value: pro }))"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondCity"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cities.map((city) => ({ value: city }))"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"const"),a(" provinceData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" cityData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
  Zhejiang`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Ningbo'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Wenzhou'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  Jiangsu`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Suzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Zhenjiang'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" toRefs"),n("span",{class:"token punctuation"},","),a(" computed"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" province "),n("span",{class:"token operator"},"="),a(" provinceData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      province`),n("span",{class:"token punctuation"},","),a(`
      provinceData`),n("span",{class:"token punctuation"},","),a(`
      cityData`),n("span",{class:"token punctuation"},","),a(`
      secondCity`),n("span",{class:"token operator"},":"),a(" cityData"),n("span",{class:"token punctuation"},"["),a("province"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" cities "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" cityData"),n("span",{class:"token punctuation"},"["),a("state"),n("span",{class:"token punctuation"},"."),a("province"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" state"),n("span",{class:"token punctuation"},"."),a("province"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("secondCity "),n("span",{class:"token operator"},"="),a(" state"),n("span",{class:"token punctuation"},"."),a("cityData"),n("span",{class:"token punctuation"},"["),a("val"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      cities`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function ea(t,s,p,d,i,I){const l=c("a-select"),u=c("a-space"),r=c("demo-box");return b(),f(r,{jsfiddle:{us:`Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.
Using the [Cascader](/components/cascader) component is strongly recommended instead as it is more flexible and capable.`,cn:`\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002
\u63A8\u8350\u4F7F\u7528 [Cascader](/components/cascader-cn/) \u7EC4\u4EF6\u3002`,docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002
\u63A8\u8350\u4F7F\u7528 <a href="/components/cascader-cn/">Cascader</a> \u7EC4\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.
Using the <a href="/components/cascader.html">Cascader</a> component is strongly recommended instead as it is more flexible and capable.</p>
`,order:6,title:{"zh-CN":"\u8054\u52A8","en-US":"Coordinate"},relativePath:"components/select/demo/coordinate.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InByb3ZpbmNlIgogICAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgICA6b3B0aW9ucz0icHJvdmluY2VEYXRhLm1hcCgocHJvKSA9PiAoeyB2YWx1ZTogcHJvIH0pKSIKICAgID48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InNlY29uZENpdHkiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTIwcHgiCiAgICAgIDpvcHRpb25zPSJjaXRpZXMubWFwKChjaXR5KSA9PiAoeyB2YWx1ZTogY2l0eSB9KSkiCiAgICA+PC9hLXNlbGVjdD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgpjb25zdCBwcm92aW5jZURhdGEgPSBbJ1poZWppYW5nJywgJ0ppYW5nc3UnXTsKY29uc3QgY2l0eURhdGEgPSB7CiAgWmhlamlhbmc6IFsnSGFuZ3pob3UnLCAnTmluZ2JvJywgJ1dlbnpob3UnXSwKICBKaWFuZ3N1OiBbJ05hbmppbmcnLCAnU3V6aG91JywgJ1poZW5qaWFuZyddLAp9OwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlYWN0aXZlLCB0b1JlZnMsIGNvbXB1dGVkLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBwcm92aW5jZSA9IHByb3ZpbmNlRGF0YVswXTsKICAgIGNvbnN0IHN0YXRlID0gcmVhY3RpdmUoewogICAgICBwcm92aW5jZSwKICAgICAgcHJvdmluY2VEYXRhLAogICAgICBjaXR5RGF0YSwKICAgICAgc2Vjb25kQ2l0eTogY2l0eURhdGFbcHJvdmluY2VdWzBdLAogICAgfSk7CiAgICBjb25zdCBjaXRpZXMgPSBjb21wdXRlZCgoKSA9PiB7CiAgICAgIHJldHVybiBjaXR5RGF0YVtzdGF0ZS5wcm92aW5jZV07CiAgICB9KTsKCiAgICB3YXRjaCgKICAgICAgKCkgPT4gc3RhdGUucHJvdmluY2UsCiAgICAgICh2YWwpID0+IHsKICAgICAgICBzdGF0ZS5zZWNvbmRDaXR5ID0gc3RhdGUuY2l0eURhdGFbdmFsXVswXTsKICAgICAgfSwKICAgICk7CgogICAgcmV0dXJuIHsKICAgICAgLi4udG9SZWZzKHN0YXRlKSwKICAgICAgY2l0aWVzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InByb3ZpbmNlIgogICAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgICA6b3B0aW9ucz0icHJvdmluY2VEYXRhLm1hcCgocHJvKSA9PiAoeyB2YWx1ZTogcHJvIH0pKSIKICAgID48L2Etc2VsZWN0PgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InNlY29uZENpdHkiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTIwcHgiCiAgICAgIDpvcHRpb25zPSJjaXRpZXMubWFwKChjaXR5KSA9PiAoeyB2YWx1ZTogY2l0eSB9KSkiCiAgICA+PC9hLXNlbGVjdD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmNvbnN0IHByb3ZpbmNlRGF0YSA9IFsnWmhlamlhbmcnLCAnSmlhbmdzdSddOwpjb25zdCBjaXR5RGF0YSA9IHsKICBaaGVqaWFuZzogWydIYW5nemhvdScsICdOaW5nYm8nLCAnV2VuemhvdSddLAogIEppYW5nc3U6IFsnTmFuamluZycsICdTdXpob3UnLCAnWmhlbmppYW5nJ10sCn07CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVhY3RpdmUsIHRvUmVmcywgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHByb3ZpbmNlID0gcHJvdmluY2VEYXRhWzBdOwogICAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7CiAgICAgIHByb3ZpbmNlLAogICAgICBwcm92aW5jZURhdGEsCiAgICAgIGNpdHlEYXRhLAogICAgICBzZWNvbmRDaXR5OiBjaXR5RGF0YVtwcm92aW5jZV1bMF0sCiAgICB9KTsKICAgIGNvbnN0IGNpdGllcyA9IGNvbXB1dGVkKCgpID0+IHsKICAgICAgcmV0dXJuIGNpdHlEYXRhW3N0YXRlLnByb3ZpbmNlXTsKICAgIH0pOwogICAgd2F0Y2goKCkgPT4gc3RhdGUucHJvdmluY2UsIHZhbCA9PiB7CiAgICAgIHN0YXRlLnNlY29uZENpdHkgPSBzdGF0ZS5jaXR5RGF0YVt2YWxdWzBdOwogICAgfSk7CiAgICByZXR1cm4geyAuLi50b1JlZnMoc3RhdGUpLAogICAgICBjaXRpZXMsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[e(u,null,{default:o(()=>[e(l,{value:t.province,"onUpdate:value":s[0]||(s[0]=g=>t.province=g),style:{width:"120px"},options:t.provinceData.map(g=>({value:g}))},null,8,["value","options"]),e(l,{value:t.secondCity,"onUpdate:value":s[1]||(s[1]=g=>t.secondCity=g),style:{width:"120px"},options:t.cities.map(g=>({value:g}))},null,8,["value","options"])]),_:1})]),htmlCode:o(()=>[sa]),jsVersionHtml:o(()=>[oa]),_:1},8,["jsfiddle"])}var ca=A(ta,[["render",ea]]);const pa=y({components:{IconBytedUser:kn},setup(){const t=p=>{console.log(`selected ${p}`)},s=m([{label:"Manager",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"}]},{label:"Engineer",options:[{value:"yiminghe",label:"Yiminghe"}]}]);return{value:m(["lucy"]),handleChange:t,options:s}}}),la=a(" Manager "),ua=a("Jack"),ia=a("Lucy"),ka=a("yiminghe"),ra=a("yiminghe1"),da=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-opt-group")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#label"),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedUser")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            Manager
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("jack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-opt-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-opt-group")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Engineer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Yiminghe"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("yiminghe"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Yiminghe1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("yiminghe1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-opt-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedUser "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-user'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedUser`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Manager'"),n("span",{class:"token punctuation"},","),a(`
        options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Engineer'"),n("span",{class:"token punctuation"},","),a(`
        options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ga=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-opt-group")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#label"),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedUser")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            Manager
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("jack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-opt-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-opt-group")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Engineer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Yiminghe"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("yiminghe"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Yiminghe1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("yiminghe1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-opt-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedUser "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-user'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedUser`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Manager'"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Engineer'"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Ia(t,s,p,d,i,I){const l=c("IconBytedUser"),u=c("a-select-option"),r=c("a-select-opt-group"),g=c("a-select"),k=c("a-space"),C=c("demo-box");return b(),f(C,{jsfiddle:{us:"Using `OptGroup` or `options.options` to group the options.",cn:"\u7528 `OptGroup` \u6216 `options.options` \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528 <code>OptGroup</code> \u6216 <code>options.options</code> \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Using <code>OptGroup</code> or <code>options.options</code> to group the options.</p>
`,order:7,title:{"zh-CN":"\u5206\u7EC4","en-US":"Option Group"},relativePath:"components/select/demo/optgroup.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlIiBzdHlsZT0id2lkdGg6IDIwMHB4IiBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiPgogICAgICA8YS1zZWxlY3Qtb3B0LWdyb3VwPgogICAgICAgIDx0ZW1wbGF0ZSAjbGFiZWw+CiAgICAgICAgICA8c3Bhbj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgICAgICAgTWFuYWdlcgogICAgICAgICAgPC9zcGFuPgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iamFjayI+SmFjazwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9Imx1Y3kiPkx1Y3k8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPC9hLXNlbGVjdC1vcHQtZ3JvdXA+CiAgICAgIDxhLXNlbGVjdC1vcHQtZ3JvdXAgbGFiZWw9IkVuZ2luZWVyIj4KICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJZaW1pbmdoZSI+eWltaW5naGU8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJZaW1pbmdoZTEiPnlpbWluZ2hlMTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8L2Etc2VsZWN0LW9wdC1ncm91cD4KICAgIDwvYS1zZWxlY3Q+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICA+PC9hLXNlbGVjdD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWRVc2VyIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVzZXInOwppbXBvcnQgdHlwZSB7IFNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVzZXIsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApOwogICAgfTsKCiAgICBjb25zdCBvcHRpb25zID0gcmVmPFNlbGVjdFByb3BzWydvcHRpb25zJ10+KFsKICAgICAgewogICAgICAgIGxhYmVsOiAnTWFuYWdlcicsCiAgICAgICAgb3B0aW9uczogWwogICAgICAgICAgewogICAgICAgICAgICB2YWx1ZTogJ2phY2snLAogICAgICAgICAgICBsYWJlbDogJ0phY2snLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgICAgICAgbGFiZWw6ICdMdWN5JywKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAnRW5naW5lZXInLAogICAgICAgIG9wdGlvbnM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgdmFsdWU6ICd5aW1pbmdoZScsCiAgICAgICAgICAgIGxhYmVsOiAnWWltaW5naGUnLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbJ2x1Y3knXSksCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0IHYtbW9kZWw6dmFsdWU9InZhbHVlIiBzdHlsZT0id2lkdGg6IDIwMHB4IiBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiPgogICAgICA8YS1zZWxlY3Qtb3B0LWdyb3VwPgogICAgICAgIDx0ZW1wbGF0ZSAjbGFiZWw+CiAgICAgICAgICA8c3Bhbj4KICAgICAgICAgICAgPEljb25CeXRlZFVzZXIgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz4KICAgICAgICAgICAgTWFuYWdlcgogICAgICAgICAgPC9zcGFuPgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iamFjayI+SmFjazwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9Imx1Y3kiPkx1Y3k8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPC9hLXNlbGVjdC1vcHQtZ3JvdXA+CiAgICAgIDxhLXNlbGVjdC1vcHQtZ3JvdXAgbGFiZWw9IkVuZ2luZWVyIj4KICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJZaW1pbmdoZSI+eWltaW5naGU8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJZaW1pbmdoZTEiPnlpbWluZ2hlMTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8L2Etc2VsZWN0LW9wdC1ncm91cD4KICAgIDwvYS1zZWxlY3Q+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICA+PC9hLXNlbGVjdD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZFVzZXIgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXNlcic7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXNlciwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoW3sKICAgICAgbGFiZWw6ICdNYW5hZ2VyJywKICAgICAgb3B0aW9uczogW3sKICAgICAgICB2YWx1ZTogJ2phY2snLAogICAgICAgIGxhYmVsOiAnSmFjaycsCiAgICAgIH0sIHsKICAgICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICAgIGxhYmVsOiAnTHVjeScsCiAgICAgIH1dLAogICAgfSwgewogICAgICBsYWJlbDogJ0VuZ2luZWVyJywKICAgICAgb3B0aW9uczogW3sKICAgICAgICB2YWx1ZTogJ3lpbWluZ2hlJywKICAgICAgICBsYWJlbDogJ1lpbWluZ2hlJywKICAgICAgfV0sCiAgICB9XSk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFsnbHVjeSddKSwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBvcHRpb25zLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[e(k,null,{default:o(()=>[e(g,{value:t.value,"onUpdate:value":s[0]||(s[0]=h=>t.value=h),style:{width:"200px"},onChange:t.handleChange},{default:o(()=>[e(r,null,{label:o(()=>[n("span",null,[e(l,{colors:["currentColor"]}),la])]),default:o(()=>[e(u,{value:"jack"},{default:o(()=>[ua]),_:1}),e(u,{value:"lucy"},{default:o(()=>[ia]),_:1})]),_:1}),e(r,{label:"Engineer"},{default:o(()=>[e(u,{value:"Yiminghe"},{default:o(()=>[ka]),_:1}),e(u,{value:"Yiminghe1"},{default:o(()=>[ra]),_:1})]),_:1})]),_:1},8,["value","onChange"]),e(g,{value:t.value,"onUpdate:value":s[1]||(s[1]=h=>t.value=h),options:t.options,style:{width:"200px"},onChange:t.handleChange},null,8,["value","options","onChange"])]),_:1})]),htmlCode:o(()=>[da]),jsVersionHtml:o(()=>[ga]),_:1},8,["jsfiddle"])}var Ca=A(pa,[["render",Ia]]),P={exports:{}};(function(t,s){(function(p,d){d(s,t)})(en,function(p,d){var i={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function I(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function l(g){try{delete window[g]}catch{window[g]=void 0}}function u(g){var k=document.getElementById(g);k&&document.getElementsByTagName("head")[0].removeChild(k)}function r(g){var k=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],C=g,h=k.timeout||i.timeout,v=k.jsonpCallback||i.jsonpCallback,Z=void 0;return new Promise(function(S,H){var w=k.jsonpCallbackFunction||I(),B=v+"_"+w;window[w]=function(x){S({ok:!0,json:function(){return Promise.resolve(x)}}),Z&&clearTimeout(Z),u(B),l(w)},C+=C.indexOf("?")===-1?"?":"&";var G=document.createElement("script");G.setAttribute("src",""+C+v+"="+w),k.charset&&G.setAttribute("charset",k.charset),k.nonce&&G.setAttribute("nonce",k.nonce),k.referrerPolicy&&G.setAttribute("referrerPolicy",k.referrerPolicy),G.id=B,document.getElementsByTagName("head")[0].appendChild(G),Z=setTimeout(function(){H(new Error("JSONP request to "+g+" timed out")),l(w),u(B),window[w]=function(){l(w)}},h),G.onerror=function(){H(new Error("JSONP request to "+g+" failed")),l(w),u(B),Z&&clearTimeout(Z)}})}d.exports=r})})(P,P.exports);var ma=P.exports,Y={};function ha(t,s){return Object.prototype.hasOwnProperty.call(t,s)}var ba=function(t,s,p,d){s=s||"&",p=p||"=";var i={};if(typeof t!="string"||t.length===0)return i;var I=/\+/g;t=t.split(s);var l=1e3;d&&typeof d.maxKeys=="number"&&(l=d.maxKeys);var u=t.length;l>0&&u>l&&(u=l);for(var r=0;r<u;++r){var g=t[r].replace(I,"%20"),k=g.indexOf(p),C,h,v,Z;k>=0?(C=g.substr(0,k),h=g.substr(k+1)):(C=g,h=""),v=decodeURIComponent(C),Z=decodeURIComponent(h),ha(i,v)?Array.isArray(i[v])?i[v].push(Z):i[v]=[i[v],Z]:i[v]=Z}return i},V=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},Aa=function(t,s,p,d){return s=s||"&",p=p||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(i){var I=encodeURIComponent(V(i))+p;return Array.isArray(t[i])?t[i].map(function(l){return I+encodeURIComponent(V(l))}).join(s):I+encodeURIComponent(V(t[i]))}).join(s):d?encodeURIComponent(V(d))+p+encodeURIComponent(V(t)):""};Y.decode=Y.parse=ba;Y.encode=Y.stringify=Aa;let N,E="";function Q(t,s){N&&(clearTimeout(N),N=null),E=t;function p(){const d=Y.encode({code:"utf-8",q:t});ma(`https://suggest.taobao.com/sug?${d}`).then(i=>i.json()).then(i=>{if(E===t){const I=i.result,l=[];I.forEach(u=>{l.push({value:u[0],label:u[0]})}),s(l)}})}N=setTimeout(p,300)}const va=y({setup(){const t=m([]),s=m();return{handleSearch:i=>{Q(i,I=>t.value=I)},handleChange:i=>{console.log(i),s.value=i,Q(i,I=>t.value=I)},data:t,value:s}}}),ya=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"show-search"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("input search text"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":default-active-first-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-arrow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":not-found-content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleSearch"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" jsonp "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'fetch-jsonp'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" querystring "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'querystring'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"let"),a(" timeout"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"let"),a(" currentValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" callback"),n("span",{class:"token operator"},":"),a(" any")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("timeout"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),a("timeout"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    timeout `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  currentValue `),n("span",{class:"token operator"},"="),a(" value"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"fake"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" str "),n("span",{class:"token operator"},"="),a(" querystring"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"encode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'utf-8'"),n("span",{class:"token punctuation"},","),a(`
      q`),n("span",{class:"token operator"},":"),a(" value"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"jsonp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"https://suggest.taobao.com/sug?"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("str"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"d"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("currentValue "),n("span",{class:"token operator"},"==="),a(" value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(" d"),n("span",{class:"token punctuation"},"."),a("result"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token keyword"},"const"),a(" data"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
          result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("r"),n("span",{class:"token operator"},":"),a(" any")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
            data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
              value`),n("span",{class:"token operator"},":"),a(" r"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              label`),n("span",{class:"token operator"},":"),a(" r"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  timeout `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),a("fake"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleSearch"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("val"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("d"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("val"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("d"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      handleSearch`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),fa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"show-search"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("input search text"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":default-active-first-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-arrow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":not-found-content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleSearch"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" jsonp "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'fetch-jsonp'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" querystring "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'querystring'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"let"),a(" timeout"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"let"),a(" currentValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token punctuation"},","),a(" callback")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("timeout"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),a("timeout"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    timeout `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  currentValue `),n("span",{class:"token operator"},"="),a(" value"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"fake"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" str "),n("span",{class:"token operator"},"="),a(" querystring"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"encode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      code`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'utf-8'"),n("span",{class:"token punctuation"},","),a(`
      q`),n("span",{class:"token operator"},":"),a(" value"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"jsonp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"https://suggest.taobao.com/sug?"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("str"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),a(),n("span",{class:"token operator"},"=>"),a(" response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"d"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("currentValue "),n("span",{class:"token operator"},"==="),a(" value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(" d"),n("span",{class:"token punctuation"},"."),a("result"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"r"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
            value`),n("span",{class:"token operator"},":"),a(" r"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(" r"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  timeout `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),a("fake"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleSearch"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"d"),a(),n("span",{class:"token operator"},"=>"),a(" data"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"d"),a(),n("span",{class:"token operator"},"=>"),a(" data"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      handleSearch`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Za(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Search with remote data.",cn:"\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Search with remote data.</p>
`,order:8,title:{"zh-CN":"\u641C\u7D22\u6846","en-US":"Search Box"},relativePath:"components/select/demo/search-box.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzaG93LXNlYXJjaAogICAgcGxhY2Vob2xkZXI9ImlucHV0IHNlYXJjaCB0ZXh0IgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIDpkZWZhdWx0LWFjdGl2ZS1maXJzdC1vcHRpb249ImZhbHNlIgogICAgOnNob3ctYXJyb3c9ImZhbHNlIgogICAgOmZpbHRlci1vcHRpb249ImZhbHNlIgogICAgOm5vdC1mb3VuZC1jb250ZW50PSJudWxsIgogICAgOm9wdGlvbnM9ImRhdGEiCiAgICBAc2VhcmNoPSJoYW5kbGVTZWFyY2giCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPjwvYS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQganNvbnAgZnJvbSAnZmV0Y2gtanNvbnAnOwppbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXVlcnlzdHJpbmcnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpsZXQgdGltZW91dDogYW55OwpsZXQgY3VycmVudFZhbHVlID0gJyc7CgpmdW5jdGlvbiBmZXRjaCh2YWx1ZTogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7CiAgaWYgKHRpbWVvdXQpIHsKICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsKICAgIHRpbWVvdXQgPSBudWxsOwogIH0KICBjdXJyZW50VmFsdWUgPSB2YWx1ZTsKCiAgZnVuY3Rpb24gZmFrZSgpIHsKICAgIGNvbnN0IHN0ciA9IHF1ZXJ5c3RyaW5nLmVuY29kZSh7CiAgICAgIGNvZGU6ICd1dGYtOCcsCiAgICAgIHE6IHZhbHVlLAogICAgfSk7CiAgICBqc29ucChgaHR0cHM6Ly9zdWdnZXN0LnRhb2Jhby5jb20vc3VnPyR7c3RyfWApCiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKQogICAgICAudGhlbigoZCkgPT4gewogICAgICAgIGlmIChjdXJyZW50VmFsdWUgPT09IHZhbHVlKSB7CiAgICAgICAgICBjb25zdCByZXN1bHQgPSBkLnJlc3VsdDsKICAgICAgICAgIGNvbnN0IGRhdGE6IGFueVtdID0gW107CiAgICAgICAgICByZXN1bHQuZm9yRWFjaCgocjogYW55KSA9PiB7CiAgICAgICAgICAgIGRhdGEucHVzaCh7CiAgICAgICAgICAgICAgdmFsdWU6IHJbMF0sCiAgICAgICAgICAgICAgbGFiZWw6IHJbMF0sCiAgICAgICAgICAgIH0pOwogICAgICAgICAgfSk7CiAgICAgICAgICBjYWxsYmFjayhkYXRhKTsKICAgICAgICB9CiAgICAgIH0pOwogIH0KCiAgdGltZW91dCA9IHNldFRpbWVvdXQoZmFrZSwgMzAwKTsKfQoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGEgPSByZWY8YW55W10+KFtdKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCk7CgogICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7CiAgICAgIGZldGNoKHZhbCwgKGQ6IGFueVtdKSA9PiAoZGF0YS52YWx1ZSA9IGQpKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsKTsKICAgICAgdmFsdWUudmFsdWUgPSB2YWw7CiAgICAgIGZldGNoKHZhbCwgKGQ6IGFueVtdKSA9PiAoZGF0YS52YWx1ZSA9IGQpKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBoYW5kbGVTZWFyY2gsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgZGF0YSwKICAgICAgdmFsdWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzaG93LXNlYXJjaAogICAgcGxhY2Vob2xkZXI9ImlucHV0IHNlYXJjaCB0ZXh0IgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIDpkZWZhdWx0LWFjdGl2ZS1maXJzdC1vcHRpb249ImZhbHNlIgogICAgOnNob3ctYXJyb3c9ImZhbHNlIgogICAgOmZpbHRlci1vcHRpb249ImZhbHNlIgogICAgOm5vdC1mb3VuZC1jb250ZW50PSJudWxsIgogICAgOm9wdGlvbnM9ImRhdGEiCiAgICBAc2VhcmNoPSJoYW5kbGVTZWFyY2giCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPjwvYS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBqc29ucCBmcm9tICdmZXRjaC1qc29ucCc7CmltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxdWVyeXN0cmluZyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKbGV0IHRpbWVvdXQ7CmxldCBjdXJyZW50VmFsdWUgPSAnJzsKCmZ1bmN0aW9uIGZldGNoKHZhbHVlLCBjYWxsYmFjaykgewogIGlmICh0aW1lb3V0KSB7CiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7CiAgICB0aW1lb3V0ID0gbnVsbDsKICB9CgogIGN1cnJlbnRWYWx1ZSA9IHZhbHVlOwoKICBmdW5jdGlvbiBmYWtlKCkgewogICAgY29uc3Qgc3RyID0gcXVlcnlzdHJpbmcuZW5jb2RlKHsKICAgICAgY29kZTogJ3V0Zi04JywKICAgICAgcTogdmFsdWUsCiAgICB9KTsKICAgIGpzb25wKGBodHRwczovL3N1Z2dlc3QudGFvYmFvLmNvbS9zdWc/JHtzdHJ9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZCA9PiB7CiAgICAgIGlmIChjdXJyZW50VmFsdWUgPT09IHZhbHVlKSB7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gZC5yZXN1bHQ7CiAgICAgICAgY29uc3QgZGF0YSA9IFtdOwogICAgICAgIHJlc3VsdC5mb3JFYWNoKHIgPT4gewogICAgICAgICAgZGF0YS5wdXNoKHsKICAgICAgICAgICAgdmFsdWU6IHJbMF0sCiAgICAgICAgICAgIGxhYmVsOiByWzBdLAogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgICAgY2FsbGJhY2soZGF0YSk7CiAgICAgIH0KICAgIH0pOwogIH0KCiAgdGltZW91dCA9IHNldFRpbWVvdXQoZmFrZSwgMzAwKTsKfQoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGEgPSByZWYoW10pOwogICAgY29uc3QgdmFsdWUgPSByZWYoKTsKCiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSB2YWwgPT4gewogICAgICBmZXRjaCh2YWwsIGQgPT4gZGF0YS52YWx1ZSA9IGQpOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWwgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWwpOwogICAgICB2YWx1ZS52YWx1ZSA9IHZhbDsKICAgICAgZmV0Y2godmFsLCBkID0+IGRhdGEudmFsdWUgPSBkKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlU2VhcmNoLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGRhdGEsCiAgICAgIHZhbHVlLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),"show-search":"",placeholder:"input search text",style:{width:"200px"},"default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,options:t.data,onSearch:t.handleSearch,onChange:t.handleChange},null,8,["value","options","onSearch","onChange"])]),htmlCode:o(()=>[ya]),jsVersionHtml:o(()=>[fa]),_:1},8,["jsfiddle"])}var wa=A(va,[["render",Za]]);const Wa=y({setup(){const t=m([{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"tom",label:"Tom"}]),s=I=>{console.log(`selected ${I}`)},p=()=>{console.log("blur")},d=()=>{console.log("focus")},i=(I,l)=>l.value.toLowerCase().indexOf(I.toLowerCase())>=0;return{value:m(void 0),filterOption:i,handleBlur:p,handleFocus:d,handleChange:s,options:t}}}),Ga=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"show-search"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select a person"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filterOption"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleFocus"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@blur"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleBlur"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tom'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleBlur"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleFocus"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'focus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"filterOption"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("input"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},","),a(" option"),n("span",{class:"token operator"},":"),a(" any")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" option"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("string "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      filterOption`),n("span",{class:"token punctuation"},","),a(`
      handleBlur`),n("span",{class:"token punctuation"},","),a(`
      handleFocus`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Ba=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"show-search"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select a person"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filterOption"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleFocus"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@blur"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleBlur"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tom'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleBlur"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleFocus"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'focus'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"filterOption"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("input"),n("span",{class:"token punctuation"},","),a(" option")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" option"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      filterOption`),n("span",{class:"token punctuation"},","),a(`
      handleBlur`),n("span",{class:"token punctuation"},","),a(`
      handleFocus`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Sa(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Search the options while expanded.",cn:"\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Search the options while expanded.</p>
`,order:9,title:{"zh-CN":"\u5E26\u641C\u7D22\u6846","en-US":"Select with search field"},relativePath:"components/select/demo/search.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzaG93LXNlYXJjaAogICAgcGxhY2Vob2xkZXI9IlNlbGVjdCBhIHBlcnNvbiIKICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIDpmaWx0ZXItb3B0aW9uPSJmaWx0ZXJPcHRpb24iCiAgICBAZm9jdXM9ImhhbmRsZUZvY3VzIgogICAgQGJsdXI9ImhhbmRsZUJsdXIiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPjwvYS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmPFNlbGVjdFByb3BzWydvcHRpb25zJ10+KFsKICAgICAgeyB2YWx1ZTogJ2phY2snLCBsYWJlbDogJ0phY2snIH0sCiAgICAgIHsgdmFsdWU6ICdsdWN5JywgbGFiZWw6ICdMdWN5JyB9LAogICAgICB7IHZhbHVlOiAndG9tJywgbGFiZWw6ICdUb20nIH0sCiAgICBdKTsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdibHVyJyk7CiAgICB9OwogICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdmb2N1cycpOwogICAgfTsKICAgIGNvbnN0IGZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IGFueSkgPT4gewogICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWY8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpLAogICAgICBmaWx0ZXJPcHRpb24sCiAgICAgIGhhbmRsZUJsdXIsCiAgICAgIGhhbmRsZUZvY3VzLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIG9wdGlvbnMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzaG93LXNlYXJjaAogICAgcGxhY2Vob2xkZXI9IlNlbGVjdCBhIHBlcnNvbiIKICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIDpmaWx0ZXItb3B0aW9uPSJmaWx0ZXJPcHRpb24iCiAgICBAZm9jdXM9ImhhbmRsZUZvY3VzIgogICAgQGJsdXI9ImhhbmRsZUJsdXIiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPjwvYS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoW3sKICAgICAgdmFsdWU6ICdqYWNrJywKICAgICAgbGFiZWw6ICdKYWNrJywKICAgIH0sIHsKICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgbGFiZWw6ICdMdWN5JywKICAgIH0sIHsKICAgICAgdmFsdWU6ICd0b20nLAogICAgICBsYWJlbDogJ1RvbScsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2JsdXInKTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdmb2N1cycpOwogICAgfTsKCiAgICBjb25zdCBmaWx0ZXJPcHRpb24gPSAoaW5wdXQsIG9wdGlvbikgPT4gewogICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKHVuZGVmaW5lZCksCiAgICAgIGZpbHRlck9wdGlvbiwKICAgICAgaGFuZGxlQmx1ciwKICAgICAgaGFuZGxlRm9jdXMsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgb3B0aW9ucywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),"show-search":"",placeholder:"Select a person",style:{width:"200px"},options:t.options,"filter-option":t.filterOption,onFocus:t.handleFocus,onBlur:t.handleBlur,onChange:t.handleChange},null,8,["value","options","filter-option","onFocus","onBlur","onChange"])]),htmlCode:o(()=>[Ga]),jsVersionHtml:o(()=>[Ba]),_:1},8,["jsfiddle"])}var Ya=A(Wa,[["render",Sa]]);const Va=y({setup(){let t=0;const s=X({data:[],value:[],fetching:!1}),p=cn(d=>{console.log("fetching user",d),t+=1;const i=t;s.data=[],s.fetching=!0,fetch("https://randomuser.me/api/?results=5").then(I=>I.json()).then(I=>{if(i!==t)return;const l=I.results.map(u=>({label:`${u.name.first} ${u.name.last}`,value:u.login.username}));s.data=l,s.fetching=!1})},300);return F(s.value,()=>{s.data=[],s.fetching=!1}),K(R({},L(s)),{fetchUser:p})}}),Ha=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label-in-value"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select users"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":not-found-content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fetching ? undefined : null"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fetchUser"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fetching"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"#notFoundContent"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-spin")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" toRefs"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" debounce "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'lodash-es/debounce'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" lastFetchId "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      fetching`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" fetchUser "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fetching user'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      lastFetchId `),n("span",{class:"token operator"},"+="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" fetchId "),n("span",{class:"token operator"},"="),a(" lastFetchId"),n("span",{class:"token punctuation"},";"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("fetching "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://randomuser.me/api/?results=5'"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"body"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("fetchId "),n("span",{class:"token operator"},"!=="),a(" lastFetchId"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token comment"},"// for fetch callback order"),a(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(" body"),n("span",{class:"token punctuation"},"."),a("results"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"user"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("user"),n("span",{class:"token punctuation"},"."),a("name"),n("span",{class:"token punctuation"},"."),a("first"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("user"),n("span",{class:"token punctuation"},"."),a("name"),n("span",{class:"token punctuation"},"."),a("last"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
            value`),n("span",{class:"token operator"},":"),a(" user"),n("span",{class:"token punctuation"},"."),a("login"),n("span",{class:"token punctuation"},"."),a("username"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          state`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(" data"),n("span",{class:"token punctuation"},";"),a(`
          state`),n("span",{class:"token punctuation"},"."),a("fetching "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("fetching "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      fetchUser`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Fa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label-in-value"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select users"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":not-found-content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fetching ? undefined : null"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fetchUser"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fetching"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"#notFoundContent"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-spin")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" toRefs"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" debounce "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'lodash-es/debounce'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" lastFetchId "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      fetching`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" fetchUser "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fetching user'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      lastFetchId `),n("span",{class:"token operator"},"+="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" fetchId "),n("span",{class:"token operator"},"="),a(" lastFetchId"),n("span",{class:"token punctuation"},";"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("fetching "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://randomuser.me/api/?results=5'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),a(),n("span",{class:"token operator"},"=>"),a(" response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"body"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("fetchId "),n("span",{class:"token operator"},"!=="),a(" lastFetchId"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// for fetch callback order"),a(`
          `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`

        `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(" body"),n("span",{class:"token punctuation"},"."),a("results"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"user"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("user"),n("span",{class:"token punctuation"},"."),a("name"),n("span",{class:"token punctuation"},"."),a("first"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("user"),n("span",{class:"token punctuation"},"."),a("name"),n("span",{class:"token punctuation"},"."),a("last"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          value`),n("span",{class:"token operator"},":"),a(" user"),n("span",{class:"token punctuation"},"."),a("login"),n("span",{class:"token punctuation"},"."),a("username"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        state`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(" data"),n("span",{class:"token punctuation"},";"),a(`
        state`),n("span",{class:"token punctuation"},"."),a("fetching "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      state`),n("span",{class:"token punctuation"},"."),a("fetching "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),a("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      fetchUser`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Na(t,s,p,d,i,I){const l=c("a-spin"),u=c("a-select"),r=c("demo-box");return b(),f(r,{jsfiddle:{us:"A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.",cn:"\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.</p>
`,order:10,title:{"zh-CN":"\u641C\u7D22\u7528\u6237","en-US":"Search and Select Users"},relativePath:"components/select/demo/select-users.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJtdWx0aXBsZSIKICAgIGxhYmVsLWluLXZhbHVlCiAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IHVzZXJzIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOmZpbHRlci1vcHRpb249ImZhbHNlIgogICAgOm5vdC1mb3VuZC1jb250ZW50PSJmZXRjaGluZyA/IHVuZGVmaW5lZCA6IG51bGwiCiAgICA6b3B0aW9ucz0iZGF0YSIKICAgIEBzZWFyY2g9ImZldGNoVXNlciIKICA+CiAgICA8dGVtcGxhdGUgdi1pZj0iZmV0Y2hpbmciICNub3RGb3VuZENvbnRlbnQ+CiAgICAgIDxhLXNwaW4gc2l6ZT0ic21hbGwiIC8+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVhY3RpdmUsIHRvUmVmcywgd2F0Y2ggfSBmcm9tICd2dWUnOwppbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLWVzL2RlYm91bmNlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBsZXQgbGFzdEZldGNoSWQgPSAwOwoKICAgIGNvbnN0IHN0YXRlID0gcmVhY3RpdmUoewogICAgICBkYXRhOiBbXSwKICAgICAgdmFsdWU6IFtdLAogICAgICBmZXRjaGluZzogZmFsc2UsCiAgICB9KTsKCiAgICBjb25zdCBmZXRjaFVzZXIgPSBkZWJvdW5jZSgodmFsdWUpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIHVzZXInLCB2YWx1ZSk7CiAgICAgIGxhc3RGZXRjaElkICs9IDE7CiAgICAgIGNvbnN0IGZldGNoSWQgPSBsYXN0RmV0Y2hJZDsKICAgICAgc3RhdGUuZGF0YSA9IFtdOwogICAgICBzdGF0ZS5mZXRjaGluZyA9IHRydWU7CiAgICAgIGZldGNoKCdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLz9yZXN1bHRzPTUnKQogICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKQogICAgICAgIC50aGVuKChib2R5KSA9PiB7CiAgICAgICAgICBpZiAoZmV0Y2hJZCAhPT0gbGFzdEZldGNoSWQpIHsKICAgICAgICAgICAgLy8gZm9yIGZldGNoIGNhbGxiYWNrIG9yZGVyCiAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgIH0KICAgICAgICAgIGNvbnN0IGRhdGEgPSBib2R5LnJlc3VsdHMubWFwKCh1c2VyKSA9PiAoewogICAgICAgICAgICBsYWJlbDogYCR7dXNlci5uYW1lLmZpcnN0fSAke3VzZXIubmFtZS5sYXN0fWAsCiAgICAgICAgICAgIHZhbHVlOiB1c2VyLmxvZ2luLnVzZXJuYW1lLAogICAgICAgICAgfSkpOwogICAgICAgICAgc3RhdGUuZGF0YSA9IGRhdGE7CiAgICAgICAgICBzdGF0ZS5mZXRjaGluZyA9IGZhbHNlOwogICAgICAgIH0pOwogICAgfSwgMzAwKTsKCiAgICB3YXRjaChzdGF0ZS52YWx1ZSwgKCkgPT4gewogICAgICBzdGF0ZS5kYXRhID0gW107CiAgICAgIHN0YXRlLmZldGNoaW5nID0gZmFsc2U7CiAgICB9KTsKCiAgICByZXR1cm4gewogICAgICAuLi50b1JlZnMoc3RhdGUpLAogICAgICBmZXRjaFVzZXIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBtb2RlPSJtdWx0aXBsZSIKICAgIGxhYmVsLWluLXZhbHVlCiAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IHVzZXJzIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOmZpbHRlci1vcHRpb249ImZhbHNlIgogICAgOm5vdC1mb3VuZC1jb250ZW50PSJmZXRjaGluZyA/IHVuZGVmaW5lZCA6IG51bGwiCiAgICA6b3B0aW9ucz0iZGF0YSIKICAgIEBzZWFyY2g9ImZldGNoVXNlciIKICA+CiAgICA8dGVtcGxhdGUgdi1pZj0iZmV0Y2hpbmciICNub3RGb3VuZENvbnRlbnQ+CiAgICAgIDxhLXNwaW4gc2l6ZT0ic21hbGwiIC8+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1zZWxlY3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVhY3RpdmUsIHRvUmVmcywgd2F0Y2ggfSBmcm9tICd2dWUnOwppbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLWVzL2RlYm91bmNlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGxldCBsYXN0RmV0Y2hJZCA9IDA7CiAgICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHsKICAgICAgZGF0YTogW10sCiAgICAgIHZhbHVlOiBbXSwKICAgICAgZmV0Y2hpbmc6IGZhbHNlLAogICAgfSk7CiAgICBjb25zdCBmZXRjaFVzZXIgPSBkZWJvdW5jZSh2YWx1ZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZyB1c2VyJywgdmFsdWUpOwogICAgICBsYXN0RmV0Y2hJZCArPSAxOwogICAgICBjb25zdCBmZXRjaElkID0gbGFzdEZldGNoSWQ7CiAgICAgIHN0YXRlLmRhdGEgPSBbXTsKICAgICAgc3RhdGUuZmV0Y2hpbmcgPSB0cnVlOwogICAgICBmZXRjaCgnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/cmVzdWx0cz01JykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oYm9keSA9PiB7CiAgICAgICAgaWYgKGZldGNoSWQgIT09IGxhc3RGZXRjaElkKSB7CiAgICAgICAgICAvLyBmb3IgZmV0Y2ggY2FsbGJhY2sgb3JkZXIKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIGNvbnN0IGRhdGEgPSBib2R5LnJlc3VsdHMubWFwKHVzZXIgPT4gKHsKICAgICAgICAgIGxhYmVsOiBgJHt1c2VyLm5hbWUuZmlyc3R9ICR7dXNlci5uYW1lLmxhc3R9YCwKICAgICAgICAgIHZhbHVlOiB1c2VyLmxvZ2luLnVzZXJuYW1lLAogICAgICAgIH0pKTsKICAgICAgICBzdGF0ZS5kYXRhID0gZGF0YTsKICAgICAgICBzdGF0ZS5mZXRjaGluZyA9IGZhbHNlOwogICAgICB9KTsKICAgIH0sIDMwMCk7CiAgICB3YXRjaChzdGF0ZS52YWx1ZSwgKCkgPT4gewogICAgICBzdGF0ZS5kYXRhID0gW107CiAgICAgIHN0YXRlLmZldGNoaW5nID0gZmFsc2U7CiAgICB9KTsKICAgIHJldHVybiB7IC4uLnRvUmVmcyhzdGF0ZSksCiAgICAgIGZldGNoVXNlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(u,{value:t.value,"onUpdate:value":s[0]||(s[0]=g=>t.value=g),mode:"multiple","label-in-value":"",placeholder:"Select users",style:{width:"100%"},"filter-option":!1,"not-found-content":t.fetching?void 0:null,options:t.data,onSearch:t.fetchUser},pn({_:2},[t.fetching?{name:"notFoundContent",fn:o(()=>[e(l,{size:"small"})])}:void 0]),1032,["value","not-found-content","options","onSearch"])]),htmlCode:o(()=>[Ha]),jsVersionHtml:o(()=>[Fa]),_:1},8,["jsfiddle"])}var xa=A(Va,[["render",Na]]),Ra=ln("byted-sailboat",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M8 28L6 24H42L40 28",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-miterlimit":"2","stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M28.0001 4L10 24H28.0001V4Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-miterlimit":"2","stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M28 11L38 24H28V11Z",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-miterlimit":"2","stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M4 34L6.5 35.3514C8.1 36.2162 9.9 36.2162 11.5 35.3514C13.1 34.4865 14.9 34.4865 16.5 35.3514C18.1 36.2162 19.9 36.2162 21.5 35.3514C23.1 34.4865 24.9 34.4865 26.5 35.3514C28.1 36.2162 29.9 36.2162 31.5 35.3514C33.1 34.4865 34.9 34.4865 36.5 35.3514C38.1 36.2162 39.9 36.2162 41.5 35.3514L44 34",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-miterlimit":"2","stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-miterlimit":"2","stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),Ka=Ra;const Xa=y({components:{IconBytedSmilingFace:rn,IconBytedSailboat:Ka},setup(){const t=d=>{console.log(`selected ${d}`)},s=m([{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",label:"Disabled",disabled:!0},{value:"yiminghe",label:"Yiminghe"}]),p=m([{value:"lucy",label:"Lucy"}]);return{handleChange:t,value1:m("lucy"),value2:m("lucy"),options1:s,options2:p}}}),Ja=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedSmilingFace")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedSailboat")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedSailboat "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-sailboat'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),a(`
    IconBytedSailboat`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options1 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options2 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options1`),n("span",{class:"token punctuation"},","),a(`
      options2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Pa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedSmilingFace")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedSailboat")]),a(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("currentColor"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedSmilingFace "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-smiling-face'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedSailboat "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-sailboat'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedSmilingFace`),n("span",{class:"token punctuation"},","),a(`
    IconBytedSailboat`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options1`),n("span",{class:"token punctuation"},","),a(`
      options2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function ja(t,s,p,d,i,I){const l=c("IconBytedSmilingFace"),u=c("a-select"),r=c("IconBytedSailboat"),g=c("a-space"),k=c("demo-box");return b(),f(k,{jsfiddle:{us:"Basic Usage",cn:"\u57FA\u672C\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic Usage</p>
`,order:11,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},relativePath:"components/select/demo/suffix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMxIgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj48SWNvbkJ5dGVkU21pbGluZ0ZhY2UgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdD4KICAgIDxhLXNlbGVjdCB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIHN0eWxlPSJ3aWR0aDogMTIwcHgiIGRpc2FibGVkIDpvcHRpb25zPSJvcHRpb25zMiI+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj48SWNvbkJ5dGVkU2FpbGJvYXQgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgSWNvbkJ5dGVkU21pbGluZ0ZhY2UgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtc21pbGluZy1mYWNlJzsKaW1wb3J0IEljb25CeXRlZFNhaWxib2F0IGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXNhaWxib2F0JzsKaW1wb3J0IHR5cGUgeyBTZWxlY3RQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRTbWlsaW5nRmFjZSwKICAgIEljb25CeXRlZFNhaWxib2F0LAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CgogICAgY29uc3Qgb3B0aW9uczEgPSByZWY8U2VsZWN0UHJvcHNbJ29wdGlvbnMnXT4oWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdqYWNrJywKICAgICAgICBsYWJlbDogJ0phY2snLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgICBsYWJlbDogJ0x1Y3knLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICdkaXNhYmxlZCcsCiAgICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsCiAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ3lpbWluZ2hlJywKICAgICAgICBsYWJlbDogJ1lpbWluZ2hlJywKICAgICAgfSwKICAgIF0pOwogICAgY29uc3Qgb3B0aW9uczIgPSByZWY8U2VsZWN0UHJvcHNbJ29wdGlvbnMnXT4oWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgICBsYWJlbDogJ0x1Y3knLAogICAgICB9LAogICAgXSk7CiAgICByZXR1cm4gewogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHZhbHVlMTogcmVmKCdsdWN5JyksCiAgICAgIHZhbHVlMjogcmVmKCdsdWN5JyksCiAgICAgIG9wdGlvbnMxLAogICAgICBvcHRpb25zMiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMxIgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj48SWNvbkJ5dGVkU21pbGluZ0ZhY2UgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdD4KICAgIDxhLXNlbGVjdCB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIHN0eWxlPSJ3aWR0aDogMTIwcHgiIGRpc2FibGVkIDpvcHRpb25zPSJvcHRpb25zMiI+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj48SWNvbkJ5dGVkU2FpbGJvYXQgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWRTbWlsaW5nRmFjZSBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1zbWlsaW5nLWZhY2UnOwppbXBvcnQgSWNvbkJ5dGVkU2FpbGJvYXQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtc2FpbGJvYXQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkU21pbGluZ0ZhY2UsCiAgICBJY29uQnl0ZWRTYWlsYm9hdCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIGNvbnN0IG9wdGlvbnMxID0gcmVmKFt7CiAgICAgIHZhbHVlOiAnamFjaycsCiAgICAgIGxhYmVsOiAnSmFjaycsCiAgICB9LCB7CiAgICAgIHZhbHVlOiAnbHVjeScsCiAgICAgIGxhYmVsOiAnTHVjeScsCiAgICB9LCB7CiAgICAgIHZhbHVlOiAnZGlzYWJsZWQnLAogICAgICBsYWJlbDogJ0Rpc2FibGVkJywKICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICB9LCB7CiAgICAgIHZhbHVlOiAneWltaW5naGUnLAogICAgICBsYWJlbDogJ1lpbWluZ2hlJywKICAgIH1dKTsKICAgIGNvbnN0IG9wdGlvbnMyID0gcmVmKFt7CiAgICAgIHZhbHVlOiAnbHVjeScsCiAgICAgIGxhYmVsOiAnTHVjeScsCiAgICB9XSk7CiAgICByZXR1cm4gewogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHZhbHVlMTogcmVmKCdsdWN5JyksCiAgICAgIHZhbHVlMjogcmVmKCdsdWN5JyksCiAgICAgIG9wdGlvbnMxLAogICAgICBvcHRpb25zMiwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(g,null,{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=C=>t.value1=C),style:{width:"120px"},options:t.options1,onChange:t.handleChange},{suffixIcon:o(()=>[e(l,{colors:["currentColor"]})]),_:1},8,["value","options","onChange"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=C=>t.value2=C),style:{width:"120px"},disabled:"",options:t.options2},{suffixIcon:o(()=>[e(r,{colors:["currentColor"]})]),_:1},8,["value","options"])]),_:1})]),htmlCode:o(()=>[Ja]),jsVersionHtml:o(()=>[Pa]),_:1},8,["jsfiddle"])}var Da=A(Xa,[["render",ja]]);const za=["Apples","Nails","Bananas","Helicopters"],Ua=y({setup(){const t=m([]),s=U(()=>za.filter(p=>!t.value.includes(p)));return{selectedItems:t,filteredOptions:s}}}),La=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectedItems"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Inserted are removed"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filteredOptions.map((item) => ({ value: item }))"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" computed"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token constant"},"OPTIONS"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Apples'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Nails'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Bananas'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Helicopters'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectedItems "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" filteredOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token constant"},"OPTIONS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"o"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token operator"},"!"),a("selectedItems"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      selectedItems`),n("span",{class:"token punctuation"},","),a(`
      filteredOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Ta=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectedItems"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Inserted are removed"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filteredOptions.map((item) => ({ value: item }))"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" computed"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token constant"},"OPTIONS"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Apples'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Nails'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Bananas'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Helicopters'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectedItems "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" filteredOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token constant"},"OPTIONS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"o"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token operator"},"!"),a("selectedItems"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("o"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      selectedItems`),n("span",{class:"token punctuation"},","),a(`
      filteredOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function qa(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Hide already selected options in the dropdown.",cn:"\u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Hide already selected options in the dropdown.</p>
`,order:12,title:{"zh-CN":"\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879","en-US":"Hide Already Selected"},relativePath:"components/select/demo/hide-selected.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0ic2VsZWN0ZWRJdGVtcyIKICAgIG1vZGU9Im11bHRpcGxlIgogICAgcGxhY2Vob2xkZXI9Ikluc2VydGVkIGFyZSByZW1vdmVkIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOm9wdGlvbnM9ImZpbHRlcmVkT3B0aW9ucy5tYXAoKGl0ZW0pID0+ICh7IHZhbHVlOiBpdGVtIH0pKSIKICA+PC9hLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGNvbXB1dGVkLCBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBPUFRJT05TID0gWydBcHBsZXMnLCAnTmFpbHMnLCAnQmFuYW5hcycsICdIZWxpY29wdGVycyddOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHJlZjxzdHJpbmdbXT4oW10pOwoKICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IE9QVElPTlMuZmlsdGVyKChvKSA9PiAhc2VsZWN0ZWRJdGVtcy52YWx1ZS5pbmNsdWRlcyhvKSkpOwoKICAgIHJldHVybiB7CiAgICAgIHNlbGVjdGVkSXRlbXMsCiAgICAgIGZpbHRlcmVkT3B0aW9ucywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0ic2VsZWN0ZWRJdGVtcyIKICAgIG1vZGU9Im11bHRpcGxlIgogICAgcGxhY2Vob2xkZXI9Ikluc2VydGVkIGFyZSByZW1vdmVkIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgOm9wdGlvbnM9ImZpbHRlcmVkT3B0aW9ucy5tYXAoKGl0ZW0pID0+ICh7IHZhbHVlOiBpdGVtIH0pKSIKICA+PC9hLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgY29tcHV0ZWQsIGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgT1BUSU9OUyA9IFsnQXBwbGVzJywgJ05haWxzJywgJ0JhbmFuYXMnLCAnSGVsaWNvcHRlcnMnXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSByZWYoW10pOwogICAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4gT1BUSU9OUy5maWx0ZXIobyA9PiAhc2VsZWN0ZWRJdGVtcy52YWx1ZS5pbmNsdWRlcyhvKSkpOwogICAgcmV0dXJuIHsKICAgICAgc2VsZWN0ZWRJdGVtcywKICAgICAgZmlsdGVyZWRPcHRpb25zLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[e(l,{value:t.selectedItems,"onUpdate:value":s[0]||(s[0]=r=>t.selectedItems=r),mode:"multiple",placeholder:"Inserted are removed",style:{width:"100%"},options:t.filteredOptions.map(r=>({value:r}))},null,8,["value","options"])]),htmlCode:o(()=>[La]),jsVersionHtml:o(()=>[Ta]),_:1},8,["jsfiddle"])}var Oa=A(Ua,[["render",qa]]);let Ea=0;const Qa=y({components:{IconBytedPlus:un,VNodes:(t,{attrs:s})=>s.vnodes},setup(){const t=m(["jack","lucy"]),s=m("lucy");return{items:t,value:s,addItem:()=>{console.log("addItem"),t.value.push(`New item ${Ea++}`)}}}}),_a=a(" Add item "),Ma=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("items.map((item) => ({ value: item }))"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#dropdownRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ menuNode: menu }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("v-nodes")]),a(),n("span",{class:"token attr-name"},":vnodes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 4px 0")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 4px 8px"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),a(" pointer")]),n("span",{class:"token punctuation"},'"')])]),a(`
        `),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(e) => e.preventDefault()"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addItem"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedPlus")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        Add item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"let"),a(" index "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function-variable function"},"VNodes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" attrs "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" attrs"),n("span",{class:"token punctuation"},"."),a("vnodes"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" items "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"addItem"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'addItem'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      items`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"New item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      items`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      addItem`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),$a=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 120px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("items.map((item) => ({ value: item }))"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#dropdownRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ menuNode: menu }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("v-nodes")]),a(),n("span",{class:"token attr-name"},":vnodes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-divider")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 4px 0")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 4px 8px"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),a(" pointer")]),n("span",{class:"token punctuation"},'"')])]),a(`
        `),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(e) => e.preventDefault()"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addItem"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("IconBytedPlus")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        Add item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"let"),a(" index "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  components`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function-variable function"},"VNodes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      attrs`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" attrs"),n("span",{class:"token punctuation"},"."),a("vnodes"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" items "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"addItem"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'addItem'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      items`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"New item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      items`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      addItem`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function nt(t,s,p,d,i,I){const l=c("v-nodes"),u=c("a-divider"),r=c("IconBytedPlus"),g=c("a-select"),k=c("demo-box");return b(),f(k,{jsfiddle:{us:"Customize the dropdown menu via `dropdownRender`.",cn:"\u4F7F\u7528 `dropdownRender` \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize the dropdown menu via <code>dropdownRender</code>.</p>
`,order:13,title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"},relativePath:"components/select/demo/custom-dropdown-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgOm9wdGlvbnM9Iml0ZW1zLm1hcCgoaXRlbSkgPT4gKHsgdmFsdWU6IGl0ZW0gfSkpIgogID4KICAgIDx0ZW1wbGF0ZSAjZHJvcGRvd25SZW5kZXI9InsgbWVudU5vZGU6IG1lbnUgfSI+CiAgICAgIDx2LW5vZGVzIDp2bm9kZXM9Im1lbnUiIC8+CiAgICAgIDxhLWRpdmlkZXIgc3R5bGU9Im1hcmdpbjogNHB4IDAiIC8+CiAgICAgIDxkaXYKICAgICAgICBzdHlsZT0icGFkZGluZzogNHB4IDhweDsgY3Vyc29yOiBwb2ludGVyIgogICAgICAgIEBtb3VzZWRvd249IihlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkiCiAgICAgICAgQGNsaWNrPSJhZGRJdGVtIgogICAgICA+CiAgICAgICAgPEljb25CeXRlZFBsdXMgLz4KICAgICAgICBBZGQgaXRlbQogICAgICA8L2Rpdj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCBJY29uQnl0ZWRQbHVzIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXBsdXMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpsZXQgaW5kZXggPSAwOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFBsdXMsCiAgICBWTm9kZXM6IChfLCB7IGF0dHJzIH0pID0+IHsKICAgICAgcmV0dXJuIGF0dHJzLnZub2RlczsKICAgIH0sCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGl0ZW1zID0gcmVmKFsnamFjaycsICdsdWN5J10pOwogICAgY29uc3QgdmFsdWUgPSByZWYoJ2x1Y3knKTsKCiAgICBjb25zdCBhZGRJdGVtID0gKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnYWRkSXRlbScpOwogICAgICBpdGVtcy52YWx1ZS5wdXNoKGBOZXcgaXRlbSAke2luZGV4Kyt9YCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgaXRlbXMsCiAgICAgIHZhbHVlLAogICAgICBhZGRJdGVtLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdAogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzdHlsZT0id2lkdGg6IDEyMHB4IgogICAgOm9wdGlvbnM9Iml0ZW1zLm1hcCgoaXRlbSkgPT4gKHsgdmFsdWU6IGl0ZW0gfSkpIgogID4KICAgIDx0ZW1wbGF0ZSAjZHJvcGRvd25SZW5kZXI9InsgbWVudU5vZGU6IG1lbnUgfSI+CiAgICAgIDx2LW5vZGVzIDp2bm9kZXM9Im1lbnUiIC8+CiAgICAgIDxhLWRpdmlkZXIgc3R5bGU9Im1hcmdpbjogNHB4IDAiIC8+CiAgICAgIDxkaXYKICAgICAgICBzdHlsZT0icGFkZGluZzogNHB4IDhweDsgY3Vyc29yOiBwb2ludGVyIgogICAgICAgIEBtb3VzZWRvd249IihlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkiCiAgICAgICAgQGNsaWNrPSJhZGRJdGVtIgogICAgICA+CiAgICAgICAgPEljb25CeXRlZFBsdXMgLz4KICAgICAgICBBZGQgaXRlbQogICAgICA8L2Rpdj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXNlbGVjdD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZFBsdXMgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtcGx1cyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKbGV0IGluZGV4ID0gMDsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRQbHVzLAogICAgVk5vZGVzOiAoXywgewogICAgICBhdHRycywKICAgIH0pID0+IHsKICAgICAgcmV0dXJuIGF0dHJzLnZub2RlczsKICAgIH0sCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBpdGVtcyA9IHJlZihbJ2phY2snLCAnbHVjeSddKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCdsdWN5Jyk7CgogICAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2FkZEl0ZW0nKTsKICAgICAgaXRlbXMudmFsdWUucHVzaChgTmV3IGl0ZW0gJHtpbmRleCsrfWApOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBpdGVtcywKICAgICAgdmFsdWUsCiAgICAgIGFkZEl0ZW0sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[e(g,{value:t.value,"onUpdate:value":s[2]||(s[2]=C=>t.value=C),style:{width:"120px"},options:t.items.map(C=>({value:C}))},{dropdownRender:o(({menuNode:C})=>[e(l,{vnodes:C},null,8,["vnodes"]),e(u,{style:{margin:"4px 0"}}),n("div",{style:{padding:"4px 8px",cursor:"pointer"},onMousedown:s[0]||(s[0]=h=>h.preventDefault()),onClick:s[1]||(s[1]=(...h)=>t.addItem&&t.addItem(...h))},[e(r),_a],32)]),_:1},8,["value","options"])]),htmlCode:o(()=>[Ma]),jsVersionHtml:o(()=>[$a]),_:1},8,["jsfiddle"])}var at=A(Qa,[["render",nt]]);const tt=y({setup(){const t=m(["china"]),s=m([{value:"china",label:"China (\u4E2D\u56FD)",icon:"\u{1F1E8}\u{1F1F3}"},{value:"usa",label:"USA (\u7F8E\u56FD)",icon:"\u{1F1FA}\u{1F1F8}"},{value:"japan",label:"Japan (\u65E5\u672C)",icon:"\u{1F1EF}\u{1F1F5}"},{value:"korea",label:"Korea (\u97E9\u56FD)",icon:"\u{1F1E8}\u{1F1F0}"}]);return F(t,p=>{console.log("selected:",p)}),{options:s,value:t}}}),st=n("span",{role:"img","aria-label":"China"},"\u{1F1E8}\u{1F1F3}",-1),ot=a(" \xA0\xA0China (\u4E2D\u56FD) "),et=n("span",{role:"img","aria-label":"USA"},"\u{1F1FA}\u{1F1F8}",-1),ct=a(" \xA0\xA0USA (\u7F8E\u56FD) "),pt=n("span",{role:"img","aria-label":"Japan"},"\u{1F1EF}\u{1F1F5}",-1),lt=a(" \xA0\xA0Japan (\u65E5\u672C) "),ut=n("span",{role:"img","aria-label":"Korea"},"\u{1F1F0}\u{1F1F7}",-1),it=a(" \xA0\xA0Korea (\u97E9\u56FD) "),kt=["aria-label"],rt=n("span",null,"Note: v-slot:option support from v2.2.5",-1),dt=n("br",null,null,-1),gt=n("br",null,null,-1),It=["aria-label"],Ct=["aria-label"],mt=n("span",null,"Note: v-slot:tagRender support from v3.0",-1),ht=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select one country"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("children"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("china"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1E8}\u{1F1F3}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`China (\u4E2D\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("usa"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1FA}\u{1F1F8}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`USA (\u7F8E\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("japan"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1EF}\u{1F1F5}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`Japan (\u65E5\u672C)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("korea"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1F0}\u{1F1F7}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`Korea (\u97E9\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select one country"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: val, label, icon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`{{ label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Note: v-slot:option support from v2.2.5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select one country"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: val, label, icon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`{{ label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#tagRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: val, label, closable, onClose, option }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag")]),a(),n("span",{class:"token attr-name"},":closable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closable"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 3px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ label }}`),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ option.icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tag")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Note: v-slot:tagRender support from v3.0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'China (\u4E2D\u56FD)'"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F3}'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'usa'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'USA (\u7F8E\u56FD)'"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1FA}\u{1F1F8}'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'japan'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Japan (\u65E5\u672C)'"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1EF}\u{1F1F5}'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'korea'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Korea (\u97E9\u56FD)'"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F0}'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected:"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),bt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select one country"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("children"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("china"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1E8}\u{1F1F3}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`China (\u4E2D\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("usa"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1FA}\u{1F1F8}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`USA (\u7F8E\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("japan"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1EF}\u{1F1F5}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`Japan (\u65E5\u672C)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("korea"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u{1F1F0}\u{1F1F7}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`Korea (\u97E9\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select one country"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("label"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: val, label, icon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`{{ label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Note: v-slot:option support from v2.2.5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select one country"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: val, label, icon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`{{ label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#tagRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: val, label, closable, onClose, option }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tag")]),a(),n("span",{class:"token attr-name"},":closable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closable"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 3px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"@close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ label }}`),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("img"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ option.icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tag")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Note: v-slot:tagRender support from v3.0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'China (\u4E2D\u56FD)'"),n("span",{class:"token punctuation"},","),a(`
      icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F3}'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'usa'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'USA (\u7F8E\u56FD)'"),n("span",{class:"token punctuation"},","),a(`
      icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1FA}\u{1F1F8}'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'japan'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Japan (\u65E5\u672C)'"),n("span",{class:"token punctuation"},","),a(`
      icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1EF}\u{1F1F5}'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'korea'"),n("span",{class:"token punctuation"},","),a(`
      label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Korea (\u97E9\u56FD)'"),n("span",{class:"token punctuation"},","),a(`
      icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F0}'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected:"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function At(t,s,p,d,i,I){const l=c("a-select-option"),u=c("a-select"),r=c("a-space"),g=c("a-tag"),k=c("demo-box");return b(),f(k,{jsfiddle:{us:"Spacified the prop name of Option which will be rendered in select box.",cn:"\u4F7F\u7528 `optionLabelProp` \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 `Option` \u5C5E\u6027\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>optionLabelProp</code> \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 <code>Option</code> \u5C5E\u6027\u3002</p>
<p>\u6216\u8005\u4F7F\u7528 <code>tagRender</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u6E32\u67D3\u8282\u70B9</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Spacified the prop name of Option which will be rendered in select box.</p>
<p>or use <code>tagRender</code> slot for custom rendering of tags.</p>
`,order:14,title:{"zh-CN":"\u5B9A\u5236\u56DE\u586B\u5185\u5BB9","en-US":"Custom selection render"},relativePath:"components/select/demo/option-label-prop.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJzZWxlY3Qgb25lIGNvdW50cnkiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJjaGlsZHJlbiIKICAgID4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iY2hpbmEiIGxhYmVsPSJDaGluYSI+CiAgICAgICAgPHNwYW4gcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJDaGluYSI+8J+HqPCfh7M8L3NwYW4+CiAgICAgICAgJm5ic3A7Jm5ic3A7Q2hpbmEgKOS4reWbvSkKICAgICAgPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9InVzYSIgbGFiZWw9IlVTQSI+CiAgICAgICAgPHNwYW4gcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJVU0EiPvCfh7rwn4e4PC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO1VTQSAo576O5Zu9KQogICAgICA8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iamFwYW4iIGxhYmVsPSJKYXBhbiI+CiAgICAgICAgPHNwYW4gcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJKYXBhbiI+8J+Hr/Cfh7U8L3NwYW4+CiAgICAgICAgJm5ic3A7Jm5ic3A7SmFwYW4gKOaXpeacrCkKICAgICAgPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImtvcmVhIiBsYWJlbD0iS29yZWEiPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iS29yZWEiPvCfh7Dwn4e3PC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO0tvcmVhICjpn6nlm70pCiAgICAgIDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgPC9hLXNlbGVjdD4KCiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJzZWxlY3Qgb25lIGNvdW50cnkiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJsYWJlbCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJ7IHZhbHVlOiB2YWwsIGxhYmVsLCBpY29uIH0iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgaWNvbiB9fTwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDt7eyBsYWJlbCB9fQogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdD4KICAgIDxzcGFuPk5vdGU6IHYtc2xvdDpvcHRpb24gc3VwcG9ydCBmcm9tIHYyLjIuNTwvc3Bhbj4KICA8L2Etc3BhY2U+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtc3BhY2UgZGlyZWN0aW9uPSJ2ZXJ0aWNhbCIgc3R5bGU9IndpZHRoOiAxMDAlIj4KICAgIDxhLXNlbGVjdAogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgbW9kZT0ibXVsdGlwbGUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgcGxhY2Vob2xkZXI9InNlbGVjdCBvbmUgY291bnRyeSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJ7IHZhbHVlOiB2YWwsIGxhYmVsLCBpY29uIH0iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgaWNvbiB9fTwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDt7eyBsYWJlbCB9fQogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI3RhZ1JlbmRlcj0ieyB2YWx1ZTogdmFsLCBsYWJlbCwgY2xvc2FibGUsIG9uQ2xvc2UsIG9wdGlvbiB9Ij4KICAgICAgICA8YS10YWcgOmNsb3NhYmxlPSJjbG9zYWJsZSIgc3R5bGU9Im1hcmdpbi1yaWdodDogM3B4IiBAY2xvc2U9Im9uQ2xvc2UiPgogICAgICAgICAge3sgbGFiZWwgfX0mbmJzcDsmbmJzcDsKICAgICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgb3B0aW9uLmljb24gfX08L3NwYW4+CiAgICAgICAgPC9hLXRhZz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1zZWxlY3Q+CiAgICA8c3Bhbj5Ob3RlOiB2LXNsb3Q6dGFnUmVuZGVyIHN1cHBvcnQgZnJvbSB2My4wPC9zcGFuPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoWydjaGluYSddKTsKCiAgICBjb25zdCBvcHRpb25zID0gcmVmKFsKICAgICAgewogICAgICAgIHZhbHVlOiAnY2hpbmEnLAogICAgICAgIGxhYmVsOiAnQ2hpbmEgKOS4reWbvSknLAogICAgICAgIGljb246ICfwn4eo8J+HsycsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ3VzYScsCiAgICAgICAgbGFiZWw6ICdVU0EgKOe+juWbvSknLAogICAgICAgIGljb246ICfwn4e68J+HuCcsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2phcGFuJywKICAgICAgICBsYWJlbDogJ0phcGFuICjml6XmnKwpJywKICAgICAgICBpY29uOiAn8J+Hr/Cfh7UnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICdrb3JlYScsCiAgICAgICAgbGFiZWw6ICdLb3JlYSAo6Z+p5Zu9KScsCiAgICAgICAgaWNvbjogJ/Cfh6jwn4ewJywKICAgICAgfSwKICAgIF0pOwogICAgd2F0Y2godmFsdWUsICh2YWwpID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkOmAsIHZhbCk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIG9wdGlvbnMsCiAgICAgIHZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJzZWxlY3Qgb25lIGNvdW50cnkiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJjaGlsZHJlbiIKICAgID4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iY2hpbmEiIGxhYmVsPSJDaGluYSI+CiAgICAgICAgPHNwYW4gcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJDaGluYSI+8J+HqPCfh7M8L3NwYW4+CiAgICAgICAgJm5ic3A7Jm5ic3A7Q2hpbmEgKOS4reWbvSkKICAgICAgPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9InVzYSIgbGFiZWw9IlVTQSI+CiAgICAgICAgPHNwYW4gcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJVU0EiPvCfh7rwn4e4PC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO1VTQSAo576O5Zu9KQogICAgICA8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iamFwYW4iIGxhYmVsPSJKYXBhbiI+CiAgICAgICAgPHNwYW4gcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJKYXBhbiI+8J+Hr/Cfh7U8L3NwYW4+CiAgICAgICAgJm5ic3A7Jm5ic3A7SmFwYW4gKOaXpeacrCkKICAgICAgPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImtvcmVhIiBsYWJlbD0iS29yZWEiPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iS29yZWEiPvCfh7Dwn4e3PC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO0tvcmVhICjpn6nlm70pCiAgICAgIDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgPC9hLXNlbGVjdD4KCiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJzZWxlY3Qgb25lIGNvdW50cnkiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJsYWJlbCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJ7IHZhbHVlOiB2YWwsIGxhYmVsLCBpY29uIH0iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgaWNvbiB9fTwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDt7eyBsYWJlbCB9fQogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdD4KICAgIDxzcGFuPk5vdGU6IHYtc2xvdDpvcHRpb24gc3VwcG9ydCBmcm9tIHYyLjIuNTwvc3Bhbj4KICA8L2Etc3BhY2U+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtc3BhY2UgZGlyZWN0aW9uPSJ2ZXJ0aWNhbCIgc3R5bGU9IndpZHRoOiAxMDAlIj4KICAgIDxhLXNlbGVjdAogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgbW9kZT0ibXVsdGlwbGUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgcGxhY2Vob2xkZXI9InNlbGVjdCBvbmUgY291bnRyeSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJ7IHZhbHVlOiB2YWwsIGxhYmVsLCBpY29uIH0iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgaWNvbiB9fTwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDt7eyBsYWJlbCB9fQogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI3RhZ1JlbmRlcj0ieyB2YWx1ZTogdmFsLCBsYWJlbCwgY2xvc2FibGUsIG9uQ2xvc2UsIG9wdGlvbiB9Ij4KICAgICAgICA8YS10YWcgOmNsb3NhYmxlPSJjbG9zYWJsZSIgc3R5bGU9Im1hcmdpbi1yaWdodDogM3B4IiBAY2xvc2U9Im9uQ2xvc2UiPgogICAgICAgICAge3sgbGFiZWwgfX0mbmJzcDsmbmJzcDsKICAgICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgb3B0aW9uLmljb24gfX08L3NwYW4+CiAgICAgICAgPC9hLXRhZz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1zZWxlY3Q+CiAgICA8c3Bhbj5Ob3RlOiB2LXNsb3Q6dGFnUmVuZGVyIHN1cHBvcnQgZnJvbSB2My4wPC9zcGFuPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKFsnY2hpbmEnXSk7CiAgICBjb25zdCBvcHRpb25zID0gcmVmKFt7CiAgICAgIHZhbHVlOiAnY2hpbmEnLAogICAgICBsYWJlbDogJ0NoaW5hICjkuK3lm70pJywKICAgICAgaWNvbjogJ/Cfh6jwn4ezJywKICAgIH0sIHsKICAgICAgdmFsdWU6ICd1c2EnLAogICAgICBsYWJlbDogJ1VTQSAo576O5Zu9KScsCiAgICAgIGljb246ICfwn4e68J+HuCcsCiAgICB9LCB7CiAgICAgIHZhbHVlOiAnamFwYW4nLAogICAgICBsYWJlbDogJ0phcGFuICjml6XmnKwpJywKICAgICAgaWNvbjogJ/Cfh6/wn4e1JywKICAgIH0sIHsKICAgICAgdmFsdWU6ICdrb3JlYScsCiAgICAgIGxhYmVsOiAnS29yZWEgKOmfqeWbvSknLAogICAgICBpY29uOiAn8J+HqPCfh7AnLAogICAgfV0pOwogICAgd2F0Y2godmFsdWUsIHZhbCA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZDpgLCB2YWwpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBvcHRpb25zLAogICAgICB2YWx1ZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[e(r,{direction:"vertical",style:{width:"100%"}},{default:o(()=>[e(u,{value:t.value,"onUpdate:value":s[0]||(s[0]=C=>t.value=C),mode:"multiple",style:{width:"100%"},placeholder:"select one country","option-label-prop":"children"},{default:o(()=>[e(l,{value:"china",label:"China"},{default:o(()=>[st,ot]),_:1}),e(l,{value:"usa",label:"USA"},{default:o(()=>[et,ct]),_:1}),e(l,{value:"japan",label:"Japan"},{default:o(()=>[pt,lt]),_:1}),e(l,{value:"korea",label:"Korea"},{default:o(()=>[ut,it]),_:1})]),_:1},8,["value"]),e(u,{value:t.value,"onUpdate:value":s[1]||(s[1]=C=>t.value=C),mode:"multiple",style:{width:"100%"},placeholder:"select one country","option-label-prop":"label",options:t.options},{option:o(({value:C,label:h,icon:v})=>[n("span",{role:"img","aria-label":C},W(v),9,kt),a(" \xA0\xA0"+W(h),1)]),_:1},8,["value","options"]),rt]),_:1}),dt,gt,e(r,{direction:"vertical",style:{width:"100%"}},{default:o(()=>[e(u,{value:t.value,"onUpdate:value":s[2]||(s[2]=C=>t.value=C),mode:"multiple",style:{width:"100%"},placeholder:"select one country",options:t.options},{option:o(({value:C,label:h,icon:v})=>[n("span",{role:"img","aria-label":C},W(v),9,It),a(" \xA0\xA0"+W(h),1)]),tagRender:o(({value:C,label:h,closable:v,onClose:Z,option:S})=>[e(g,{closable:v,style:{"margin-right":"3px"},onClose:Z},{default:o(()=>[a(W(h)+"\xA0\xA0 ",1),n("span",{role:"img","aria-label":C},W(S.icon),9,Ct)]),_:2},1032,["closable","onClose"])]),_:1},8,["value","options"]),mt]),_:1})]),htmlCode:o(()=>[ht]),jsVersionHtml:o(()=>[bt]),_:1},8,["jsfiddle"])}var vt=A(tt,[["render",At]]);const _=[];for(let t=0;t<1e4;t++){const s=`${t.toString(36)}${t}`;_.push({value:s,disabled:t===10})}const yt=y({setup(){return X({options:_,value:["a10","c12"]})}}),ft=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("{{ options.length }} Items"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" value"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(" disabled"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
  options`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token punctuation"},","),a(`
    disabled`),n("span",{class:"token operator"},":"),a(" i "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a10'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'c12'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" state"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Zt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("{{ options.length }} Items"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
  options`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token punctuation"},","),a(`
    disabled`),n("span",{class:"token operator"},":"),a(" i "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a10'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'c12'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" state"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function wt(t,s,p,d,i,I){const l=c("a-select"),u=c("demo-box");return b(),f(u,{jsfiddle:{us:"Select use virtual scroll which get better performance than 1.x",cn:"Select \u4F7F\u7528\u4E86\u865A\u62DF\u6EDA\u52A8\u6280\u672F\uFF0C\u56E0\u800C\u83B7\u5F97\u4E86\u6BD4 1.x \u66F4\u597D\u7684\u6027\u80FD",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Select \u4F7F\u7528\u4E86\u865A\u62DF\u6EDA\u52A8\u6280\u672F\uFF0C\u56E0\u800C\u83B7\u5F97\u4E86\u6BD4 1.x \u66F4\u597D\u7684\u6027\u80FD</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Select use virtual scroll which get better performance than 1.x</p>
`,order:15,title:{"zh-CN":"\u5927\u6570\u636E","en-US":"Big Data"},relativePath:"components/select/demo/big-data.vue",sourceCode:"PHRlbXBsYXRlPgogIDxoMj57eyBvcHRpb25zLmxlbmd0aCB9fSBJdGVtczwvaDI+CiAgPGEtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIG1vZGU9Im11bHRpcGxlIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgZGlzYWJsZWQ6IGJvb2xlYW4gfVtdID0gW107CmZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDA7IGkrKykgewogIGNvbnN0IHZhbHVlID0gYCR7aS50b1N0cmluZygzNil9JHtpfWA7CiAgb3B0aW9ucy5wdXNoKHsKICAgIHZhbHVlLAogICAgZGlzYWJsZWQ6IGkgPT09IDEwLAogIH0pOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHsKICAgICAgb3B0aW9ucywKICAgICAgdmFsdWU6IFsnYTEwJywgJ2MxMiddLAogICAgfSk7CiAgICByZXR1cm4gc3RhdGU7CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxoMj57eyBvcHRpb25zLmxlbmd0aCB9fSBJdGVtczwvaDI+CiAgPGEtc2VsZWN0CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgIG1vZGU9Im11bHRpcGxlIgogICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlYWN0aXZlIH0gZnJvbSAndnVlJzsKY29uc3Qgb3B0aW9ucyA9IFtdOwoKZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKSB7CiAgY29uc3QgdmFsdWUgPSBgJHtpLnRvU3RyaW5nKDM2KX0ke2l9YDsKICBvcHRpb25zLnB1c2goewogICAgdmFsdWUsCiAgICBkaXNhYmxlZDogaSA9PT0gMTAsCiAgfSk7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHsKICAgICAgb3B0aW9ucywKICAgICAgdmFsdWU6IFsnYTEwJywgJ2MxMiddLAogICAgfSk7CiAgICByZXR1cm4gc3RhdGU7CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[n("h2",null,W(t.options.length)+" Items",1),e(l,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),mode:"multiple",style:{width:"100%"},placeholder:"Please select",options:t.options},null,8,["value","options"])]),htmlCode:o(()=>[ft]),jsVersionHtml:o(()=>[Zt]),_:1},8,["jsfiddle"])}var Wt=A(yt,[["render",wt]]);const Gt=y({setup(){const t=m([]);for(let d=10;d<36;d++){const i=d.toString(36)+d;t.value.push({label:`Long Label: ${i}`,value:i})}const s=m(2),p=m(10);return{value:m(["a10","c12","h17","j19","k20"]),options:t,maxTagCount:s,maxTagTextLength:p}}}),Bt=a("maxTagCount++"),St=a("maxTagCount--"),Yt={style:{color:"red"}},Vt=n("h2",null,"maxTagCount: responsive",-1),Ht=a("maxTagTextLength++"),Ft=a("maxTagTextLength--"),Nt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagCount++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagCount++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagCount--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagCount--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("maxTagCount: {{ maxTagCount }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Item..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagCount"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#maxTagPlaceholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("omittedValues"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("+ {{ omittedValues.length }} ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("maxTagCount: responsive"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Item..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("responsive"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagTextLength++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagTextLength++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagTextLength--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagTextLength--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("maxTagTextLength: {{ maxTagTextLength }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Item..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-tag-text-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagTextLength"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" SelectProps "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(" i"),n("span",{class:"token punctuation"},";"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Long Label: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxTagCount "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxTagTextLength "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a10'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'c12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'h17'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'j19'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'k20'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      maxTagCount`),n("span",{class:"token punctuation"},","),a(`
      maxTagTextLength`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),xt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagCount++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagCount++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagCount--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagCount--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("maxTagCount: {{ maxTagCount }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Item..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagCount"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#maxTagPlaceholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("omittedValues"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("+ {{ omittedValues.length }} ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("maxTagCount: responsive"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Item..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("responsive"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagTextLength++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagTextLength++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagTextLength--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("maxTagTextLength--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("maxTagTextLength: {{ maxTagTextLength }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiple"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Item..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-tag-text-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxTagTextLength"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(" i"),n("span",{class:"token punctuation"},";"),a(`
      options`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Long Label: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" maxTagCount "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxTagTextLength "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a10'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'c12'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'h17'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'j19'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'k20'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      maxTagCount`),n("span",{class:"token punctuation"},","),a(`
      maxTagTextLength`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Rt(t,s,p,d,i,I){const l=c("a-button"),u=c("a-space"),r=c("a-select"),g=c("demo-box");return b(),f(g,{jsfiddle:{us:"Set a number and automatically fold after exceeding.",cn:"\u8BBE\u7F6E\u4E00\u4E2A\u6570\u5B57\uFF0C\u8D85\u8FC7\u540E\u81EA\u52A8\u6298\u53E0\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E\u4E00\u4E2A\u6570\u5B57\uFF0C\u8D85\u8FC7\u540E\u81EA\u52A8\u6298\u53E0\u3002</p>
<p>maxTagCount \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u6210\u54CD\u5E94\u5F0F\uFF0C\u4F46\u54CD\u5E94\u5F0F\u5BF9\u6027\u80FD\u6709\u6240\u6D88\u8017\uFF0C\u4E0D\u63A8\u8350\u5728\u5927\u8868\u5355\u573A\u666F\u4E0B\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Set a number and automatically fold after exceeding.</p>
<p><code>maxTagCount</code> can also be set to responsive, but responsive consumes performance and is not recommended for use in large-form scenarios.</p>
`,order:24,title:{"zh-CN":"\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A\u9009\u9879\u53CA\u9009\u9879\u6700\u5927\u957F\u5EA6","en-US":"set maxTagCount or maxTagTextLength"},relativePath:"components/select/demo/responsive.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnQ291bnQrKyI+bWF4VGFnQ291bnQrKzwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im1heFRhZ0NvdW50LS0iPm1heFRhZ0NvdW50LS08L2EtYnV0dG9uPgogICAgPC9hLXNwYWNlPgoKICAgIDxoMj5tYXhUYWdDb3VudDoge3sgbWF4VGFnQ291bnQgfX08L2gyPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IEl0ZW0uLi4iCiAgICAgIDptYXgtdGFnLWNvdW50PSJtYXhUYWdDb3VudCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjbWF4VGFnUGxhY2Vob2xkZXI9Im9taXR0ZWRWYWx1ZXMiPgogICAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjogcmVkIj4rIHt7IG9taXR0ZWRWYWx1ZXMubGVuZ3RoIH19IC4uLjwvc3Bhbj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1zZWxlY3Q+CiAgICA8aDI+bWF4VGFnQ291bnQ6IHJlc3BvbnNpdmU8L2gyPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IEl0ZW0uLi4iCiAgICAgIG1heC10YWctY291bnQ9InJlc3BvbnNpdmUiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3Q+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnVGV4dExlbmd0aCsrIj5tYXhUYWdUZXh0TGVuZ3RoKys8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJtYXhUYWdUZXh0TGVuZ3RoLS0iPm1heFRhZ1RleHRMZW5ndGgtLTwvYS1idXR0b24+CiAgICA8L2Etc3BhY2U+CiAgICA8aDI+bWF4VGFnVGV4dExlbmd0aDoge3sgbWF4VGFnVGV4dExlbmd0aCB9fTwvaDI+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJTZWxlY3QgSXRlbS4uLiIKICAgICAgOm1heC10YWctdGV4dC1sZW5ndGg9Im1heFRhZ1RleHRMZW5ndGgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3Q+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBTZWxlY3RQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgb3B0aW9ucyA9IHJlZjxTZWxlY3RQcm9wc1snb3B0aW9ucyddPihbXSk7CgogICAgZm9yIChsZXQgaSA9IDEwOyBpIDwgMzY7IGkrKykgewogICAgICBjb25zdCB2YWx1ZSA9IGkudG9TdHJpbmcoMzYpICsgaTsKICAgICAgb3B0aW9ucy52YWx1ZS5wdXNoKHsKICAgICAgICBsYWJlbDogYExvbmcgTGFiZWw6ICR7dmFsdWV9YCwKICAgICAgICB2YWx1ZSwKICAgICAgfSk7CiAgICB9CiAgICBjb25zdCBtYXhUYWdDb3VudCA9IHJlZigyKTsKICAgIGNvbnN0IG1heFRhZ1RleHRMZW5ndGggPSByZWYoMTApOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbJ2ExMCcsICdjMTInLCAnaDE3JywgJ2oxOScsICdrMjAnXSksCiAgICAgIG9wdGlvbnMsCiAgICAgIG1heFRhZ0NvdW50LAogICAgICBtYXhUYWdUZXh0TGVuZ3RoLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnQ291bnQrKyI+bWF4VGFnQ291bnQrKzwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im1heFRhZ0NvdW50LS0iPm1heFRhZ0NvdW50LS08L2EtYnV0dG9uPgogICAgPC9hLXNwYWNlPgoKICAgIDxoMj5tYXhUYWdDb3VudDoge3sgbWF4VGFnQ291bnQgfX08L2gyPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IEl0ZW0uLi4iCiAgICAgIDptYXgtdGFnLWNvdW50PSJtYXhUYWdDb3VudCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjbWF4VGFnUGxhY2Vob2xkZXI9Im9taXR0ZWRWYWx1ZXMiPgogICAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjogcmVkIj4rIHt7IG9taXR0ZWRWYWx1ZXMubGVuZ3RoIH19IC4uLjwvc3Bhbj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1zZWxlY3Q+CiAgICA8aDI+bWF4VGFnQ291bnQ6IHJlc3BvbnNpdmU8L2gyPgogICAgPGEtc2VsZWN0CiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IEl0ZW0uLi4iCiAgICAgIG1heC10YWctY291bnQ9InJlc3BvbnNpdmUiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3Q+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnVGV4dExlbmd0aCsrIj5tYXhUYWdUZXh0TGVuZ3RoKys8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJtYXhUYWdUZXh0TGVuZ3RoLS0iPm1heFRhZ1RleHRMZW5ndGgtLTwvYS1idXR0b24+CiAgICA8L2Etc3BhY2U+CiAgICA8aDI+bWF4VGFnVGV4dExlbmd0aDoge3sgbWF4VGFnVGV4dExlbmd0aCB9fTwvaDI+CiAgICA8YS1zZWxlY3QKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJTZWxlY3QgSXRlbS4uLiIKICAgICAgOm1heC10YWctdGV4dC1sZW5ndGg9Im1heFRhZ1RleHRMZW5ndGgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3Q+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmKFtdKTsKCiAgICBmb3IgKGxldCBpID0gMTA7IGkgPCAzNjsgaSsrKSB7CiAgICAgIGNvbnN0IHZhbHVlID0gaS50b1N0cmluZygzNikgKyBpOwogICAgICBvcHRpb25zLnZhbHVlLnB1c2goewogICAgICAgIGxhYmVsOiBgTG9uZyBMYWJlbDogJHt2YWx1ZX1gLAogICAgICAgIHZhbHVlLAogICAgICB9KTsKICAgIH0KCiAgICBjb25zdCBtYXhUYWdDb3VudCA9IHJlZigyKTsKICAgIGNvbnN0IG1heFRhZ1RleHRMZW5ndGggPSByZWYoMTApOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWU6IHJlZihbJ2ExMCcsICdjMTInLCAnaDE3JywgJ2oxOScsICdrMjAnXSksCiAgICAgIG9wdGlvbnMsCiAgICAgIG1heFRhZ0NvdW50LAogICAgICBtYXhUYWdUZXh0TGVuZ3RoLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[e(u,{direction:"vertical",style:{width:"100%"}},{default:o(()=>[e(u,null,{default:o(()=>[e(l,{type:"primary",onClick:s[0]||(s[0]=k=>t.maxTagCount++)},{default:o(()=>[Bt]),_:1}),e(l,{type:"primary",onClick:s[1]||(s[1]=k=>t.maxTagCount--)},{default:o(()=>[St]),_:1})]),_:1}),n("h2",null,"maxTagCount: "+W(t.maxTagCount),1),e(r,{value:t.value,"onUpdate:value":s[2]||(s[2]=k=>t.value=k),mode:"multiple",style:{width:"100%"},placeholder:"Select Item...","max-tag-count":t.maxTagCount,options:t.options},{maxTagPlaceholder:o(k=>[n("span",Yt,"+ "+W(k.length)+" ...",1)]),_:1},8,["value","max-tag-count","options"]),Vt,e(r,{value:t.value,"onUpdate:value":s[3]||(s[3]=k=>t.value=k),mode:"multiple",style:{width:"100%"},placeholder:"Select Item...","max-tag-count":"responsive",options:t.options},null,8,["value","options"]),e(u,null,{default:o(()=>[e(l,{type:"primary",onClick:s[4]||(s[4]=k=>t.maxTagTextLength++)},{default:o(()=>[Ht]),_:1}),e(l,{type:"primary",onClick:s[5]||(s[5]=k=>t.maxTagTextLength--)},{default:o(()=>[Ft]),_:1})]),_:1}),n("h2",null,"maxTagTextLength: "+W(t.maxTagTextLength),1),e(r,{value:t.value,"onUpdate:value":s[6]||(s[6]=k=>t.value=k),mode:"multiple",style:{width:"100%"},placeholder:"Select Item...","max-tag-text-length":t.maxTagTextLength,options:t.options},null,8,["value","max-tag-text-length","options"])]),_:1})]),htmlCode:o(()=>[Nt]),jsVersionHtml:o(()=>[xt]),_:1},8,["jsfiddle"])}var Kt=A(Gt,[["render",Rt]]);const Xt={pageData:{title:"Select",description:"",frontmatter:{category:"Components",subtitle:"\u9009\u62E9\u5668",type:"\u6570\u636E\u5F55\u5165",title:"Select",cover:"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Select props",slug:"Select-props",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Select Methods",slug:"Select-Methods",content:""},{level:3,title:"Option props",slug:"Option-props",content:""},{level:3,title:"OptGroup props",slug:"OptGroup-props",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u70B9\u51FB `dropdownRender` \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F"},{level:3,title:"\u70B9\u51FB dropdownRender \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F",slug:"\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F",content:"\u770B\u4E0B [dropdownRender \u4F8B\u5B50](/components/select-cn/#components-select-demo-custom-dropdown) \u91CC\u7684\u8BF4\u660E\u3002"},{level:3,title:"\u4E3A\u4EC0\u4E48 placeholder \u4E0D\u663E\u793A \uFF1F",slug:"\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F",content:"`placeholder` \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001'' \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002"}],relativePath:"components/select/index.zh-CN.md",content:`
\u4E0B\u62C9\u9009\u62E9\u5668\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002
- \u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 [Radio](/components/radio/) \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002

## API

\`\`\`html
&lt;a-select&gt;
  &lt;a-select-option value=&quot;lucy&quot;&gt;lucy&lt;/a-select-option&gt;
&lt;/a-select&gt;
\`\`\`

### Select props

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| allowClear | \u652F\u6301\u6E05\u9664 | boolean | false |  |
| autoClearSearchValue | \u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 \`mode\` \u4E3A \`multiple\` \u6216 \`tags\` \u65F6\u6709\u6548\u3002 | boolean | true |  |
| autofocus | \u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| bordered | \u662F\u5426\u6709\u8FB9\u6846 | boolean | true |  |
| clearIcon | \u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807 | VNode \\| slot | - |  |
| defaultActiveFirstOption | \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002 | boolean | true |  |
| defaultOpen | \u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355 | boolean | - |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |
| dropdownClassName | \u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027 | string | - |  |
| dropdownMatchSelectWidth | \u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E \`min-width\`\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean \\| number | true |  |
| dropdownMenuStyle | dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F | object | - |  |
| dropdownRender | \u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9 | ({menuNode: VNode, props}) =&gt; VNode \\| v-slot | - |  |
| dropdownStyle | \u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027 | object | - |  |
| fieldNames | \u81EA\u5B9A\u4E49\u8282\u70B9 label\u3001value\u3001options \u7684\u5B57\u6BB5 | object | { label: \`label\`, value: \`value\`, options: \`options\` } | 3.0 |
| filterOption | \u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 \`inputValue\` \`option\` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 \`option\` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE \`true\`\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE \`false\`\u3002 | \`boolean\` \\| \`function(inputValue, option)\` | true |  |
| filterSort | \u641C\u7D22\u65F6\u5BF9\u7B5B\u9009\u7ED3\u679C\u9879\u7684\u6392\u5E8F\u51FD\u6570, \u7C7B\u4F3C[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)\u91CC\u7684 compareFunction | (optionA: Option, optionB: Option) =&gt; number | - | 3.0 |
| firstActiveValue | \u9ED8\u8BA4\u9AD8\u4EAE\u7684\u9009\u9879 | string\\|string\\[] | - |  |
| getPopupContainer | \u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002 | Function(triggerNode) | () =&gt; document.body |  |
| labelInValue | \u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE \`string\` \u53D8\u4E3A \`{key: string, label: vNodes, originLabel: any}\` \u7684\u683C\u5F0F, originLabel\uFF083.1\uFF09 \u4FDD\u6301\u539F\u59CB\u7C7B\u578B\uFF0C\u5982\u679C\u901A\u8FC7 a-select-option children \u6784\u9020\u7684\u8282\u70B9\uFF0C\u8BE5\u503C\u662F\u662F\u4E2A\u51FD\u6570\uFF08\u5373 a-select-option \u7684\u9ED8\u8BA4\u63D2\u69FD\uFF09 | boolean | false |  |
| listHeight | \u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6 | number | 256 |  |
| maxTagCount | \u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag | number | - |  |
| maxTagPlaceholder | \u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9 | slot \\| function(omittedValues) | - |  |
| maxTagTextLength | \u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6 | number | - |  |
| menuItemSelectedIcon | \u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807 | VNode \\| slot | - |  |
| mode | \u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E | &#39;multiple&#39; \\| &#39;tags&#39; \\| &#39;combobox&#39; | - |  |
| notFoundContent | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | string\\|slot | &#39;Not Found&#39; |  |
| open | \u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355 | boolean | - |  |
| option | \u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9 | v-slot:option=&quot;{value, label, [disabled, key, title]}&quot; | - | 2.2.5 |
| optionFilterProp | \u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 option \u5C5E\u6027\uFF0C\u4E0D\u652F\u6301 children | string | value |  |
| optionLabelProp | \u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A \`value\`\u3002 | string | \`children\` \\| \`label\`(\u8BBE\u7F6E options \u65F6) |  |
| options | options \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 selectOption \u8282\u70B9 | array&amp;lt;{value, label, [disabled, key, title]}&gt; | \\[] |  |
| placeholder | \u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57 | string\\|slot | - |  |
| removeIcon | \u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807 | VNode \\| slot | - |  |
| searchValue | \u63A7\u5236\u641C\u7D22\u6587\u672C | string | - |  |
| showArrow | \u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934 | boolean | true |  |
| showSearch | \u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22 | boolean | false |  |
| size | \u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 \`large\` \`small\` | string | default |  |
| suffixIcon | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | VNode \\| slot | - |  |
| tagRender | \u81EA\u5B9A\u4E49 tag \u5185\u5BB9 render\uFF0C\u4EC5\u5728 \`mode\` \u4E3A \`multiple\` \u6216 \`tags\` \u65F6\u751F\u6548 | slot \\| (props) =&gt; any | - | 3.0 |
| tokenSeparators | \u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26 | string\\[] |  |  |
| value(v-model) | \u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE | string\\|string\\[]\\|number\\|number\\[] | - |  |
| virtual | \u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean | true | 3.0 |

&gt; \u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 \`getPopupContainer={triggerNode =&gt; triggerNode.parentNode}\` \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| blur | \u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03 | function |
| change | \u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\uFF08combobox \u6A21\u5F0F\u4E0B\uFF09\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570 | function(value, option:Option/Array&amp;lt;Option&gt;) |
| deselect | \u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 multiple \u6216 tags \u6A21\u5F0F\u4E0B\u751F\u6548 | function(value\uFF0Coption:Option) |
| dropdownVisibleChange | \u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03 | function(open) |
| focus | \u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03 | function |
| inputKeyDown | \u952E\u76D8\u6309\u4E0B\u65F6\u56DE\u8C03 | function |
| mouseenter | \u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03 | function |
| mouseleave | \u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03 | function |
| popupScroll | \u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03 | function |
| search | \u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03 | function(value: string) |
| select | \u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C | function(value, option:Option) |

### Select Methods

| \u540D\u79F0    | \u8BF4\u660E     |
| ------- | -------- |
| blur()  | \u53D6\u6D88\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

### Option props

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- |
| class | Option \u5668\u7C7B\u540D | string | - |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |
| key | \u548C value \u542B\u4E49\u4E00\u81F4\u3002\u5982\u679C Vue \u9700\u8981\u4F60\u8BBE\u7F6E\u6B64\u9879\uFF0C\u6B64\u9879\u503C\u4E0E value \u7684\u503C\u76F8\u540C\uFF0C\u7136\u540E\u53EF\u4EE5\u7701\u7565 value \u8BBE\u7F6E | string |  |
| title | \u9009\u4E2D\u8BE5 Option \u540E\uFF0CSelect \u7684 title | string | - |
| value | \u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009 | string\\|number | - |

### OptGroup props

| \u53C2\u6570  | \u8BF4\u660E | \u7C7B\u578B                      | \u9ED8\u8BA4\u503C |
| ----- | ---- | ------------------------- | ------ |
| key   |      | string                    | -      |
| label | \u7EC4\u540D | string\\|function(h)\\|slot | \u65E0     |

## FAQ

### \u70B9\u51FB \`dropdownRender\` \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F

\u770B\u4E0B [dropdownRender \u4F8B\u5B50](/components/select-cn/#components-select-demo-custom-dropdown) \u91CC\u7684\u8BF4\u660E\u3002

### \u4E3A\u4EC0\u4E48 \`placeholder\` \u4E0D\u663E\u793A \uFF1F

\`placeholder\` \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001&#39;&#39; \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002

\u4F60\u53EF\u4EE5\u67E5\u770B [JS \u8BED\u8A00\u89C4\u8303](https://262.ecma-international.org/5.1/#sec-4.3.9) \u8FDB\u4E00\u6B65\u4E86\u89E3\u8BE6\u60C5\u3002

\u4E5F\u53EF\u4EE5\u67E5\u770B [antd issue](https://github.com/ant-design/ant-design/issues/2367) \u67E5\u770B\u8BA8\u8BBA\u60C5\u51B5\u3002
`,html:`<p>\u4E0B\u62C9\u9009\u62E9\u5668\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002</li>
<li>\u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 <a href="/components/radio/">Radio</a> \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="Select-props">Select props <a class="header-anchor" href="#Select-props">
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
<td>allowClear</td>
<td>\u652F\u6301\u6E05\u9664</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>autoClearSearchValue</td>
<td>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548\u3002</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>autofocus</td>
<td>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>\u662F\u5426\u6709\u8FB9\u6846</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>clearIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
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
<td>dropdownClassName</td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td>
<td>string</td>
<td>-</td>
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
<td>-</td>
<td></td>
</tr>
<tr>
<td>dropdownRender</td>
<td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</td>
<td>({menuNode: VNode, props}) =&gt; VNode | v-slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dropdownStyle</td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>\u81EA\u5B9A\u4E49\u8282\u70B9 label\u3001value\u3001options \u7684\u5B57\u6BB5</td>
<td>object</td>
<td>{ label: <code>label</code>, value: <code>value</code>, options: <code>options</code> }</td>
<td>3.0</td>
</tr>
<tr>
<td>filterOption</td>
<td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td>
<td><code>boolean</code> | <code>function(inputValue, option)</code></td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>filterSort</td>
<td>\u641C\u7D22\u65F6\u5BF9\u7B5B\u9009\u7ED3\u679C\u9879\u7684\u6392\u5E8F\u51FD\u6570, \u7C7B\u4F3C<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer">Array.sort</a>\u91CC\u7684 compareFunction</td>
<td>(optionA: Option, optionB: Option) =&gt; number</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>firstActiveValue</td>
<td>\u9ED8\u8BA4\u9AD8\u4EAE\u7684\u9009\u9879</td>
<td>string|string[]</td>
<td>-</td>
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
<td>labelInValue</td>
<td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{key: string, label: vNodes, originLabel: any}</code> \u7684\u683C\u5F0F, originLabel\uFF083.1\uFF09 \u4FDD\u6301\u539F\u59CB\u7C7B\u578B\uFF0C\u5982\u679C\u901A\u8FC7 a-select-option children \u6784\u9020\u7684\u8282\u70B9\uFF0C\u8BE5\u503C\u662F\u662F\u4E2A\u51FD\u6570\uFF08\u5373 a-select-option \u7684\u9ED8\u8BA4\u63D2\u69FD\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>listHeight</td>
<td>\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6</td>
<td>number</td>
<td>256</td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td>slot | function(omittedValues)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxTagTextLength</td>
<td>\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>menuItemSelectedIcon</td>
<td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>mode</td>
<td>\u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E</td>
<td>'multiple' | 'tags' | 'combobox'</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>notFoundContent</td>
<td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td>
<td>string|slot</td>
<td>'Not Found'</td>
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
<td>2.2.5</td>
</tr>
<tr>
<td>optionFilterProp</td>
<td>\u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 option \u5C5E\u6027\uFF0C\u4E0D\u652F\u6301 children</td>
<td>string</td>
<td>value</td>
<td></td>
</tr>
<tr>
<td>optionLabelProp</td>
<td>\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A <code>value</code>\u3002</td>
<td>string</td>
<td><code>children</code> | <code>label</code>(\u8BBE\u7F6E options \u65F6)</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>options \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 selectOption \u8282\u70B9</td>
<td>array&lt;{value, label, [disabled, key, title]}&gt;</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td>
<td>string|slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>removeIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>searchValue</td>
<td>\u63A7\u5236\u641C\u7D22\u6587\u672C</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showArrow</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td>
<td>string</td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tagRender</td>
<td>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9 render\uFF0C\u4EC5\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u751F\u6548</td>
<td>slot | (props) =&gt; any</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>tokenSeparators</td>
<td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td>
<td>string[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string|string[]|number|number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>virtual</td>
<td>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
</tr>
</tbody>
</table>
<blockquote>
<p>\u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 <code>getPopupContainer={triggerNode =&gt; triggerNode.parentNode}</code> \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002</p>
</blockquote>
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
<td>blur</td>
<td>\u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>change</td>
<td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\uFF08combobox \u6A21\u5F0F\u4E0B\uFF09\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td>
<td>function(value, option:Option/Array&lt;Option&gt;)</td>
</tr>
<tr>
<td>deselect</td>
<td>\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 multiple \u6216 tags \u6A21\u5F0F\u4E0B\u751F\u6548</td>
<td>function(value\uFF0Coption:Option)</td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td>
<td>function(open)</td>
</tr>
<tr>
<td>focus</td>
<td>\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>inputKeyDown</td>
<td>\u952E\u76D8\u6309\u4E0B\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>mouseenter</td>
<td>\u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>mouseleave</td>
<td>\u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>popupScroll</td>
<td>\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>search</td>
<td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td>
<td>function(value: string)</td>
</tr>
<tr>
<td>select</td>
<td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C</td>
<td>function(value, option:Option)</td>
</tr>
</tbody>
</table>
<h3 id="Select-Methods">Select Methods <a class="header-anchor" href="#Select-Methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>\u53D6\u6D88\u7126\u70B9</td>
</tr>
<tr>
<td>focus()</td>
<td>\u83B7\u53D6\u7126\u70B9</td>
</tr>
</tbody>
</table>
<h3 id="Option-props">Option props <a class="header-anchor" href="#Option-props">
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
<td>class</td>
<td>Option \u5668\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>key</td>
<td>\u548C value \u542B\u4E49\u4E00\u81F4\u3002\u5982\u679C Vue \u9700\u8981\u4F60\u8BBE\u7F6E\u6B64\u9879\uFF0C\u6B64\u9879\u503C\u4E0E value \u7684\u503C\u76F8\u540C\uFF0C\u7136\u540E\u53EF\u4EE5\u7701\u7565 value \u8BBE\u7F6E</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u9009\u4E2D\u8BE5 Option \u540E\uFF0CSelect \u7684 title</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009</td>
<td>string|number</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="OptGroup-props">OptGroup props <a class="header-anchor" href="#OptGroup-props">
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
<td>key</td>
<td></td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>\u7EC4\u540D</td>
<td>string|function(h)|slot</td>
<td>\u65E0</td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F">\u70B9\u51FB <code>dropdownRender</code> \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F <a class="header-anchor" href="#\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u770B\u4E0B <a href="/components/select-cn/#components-select-demo-custom-dropdown">dropdownRender \u4F8B\u5B50</a> \u91CC\u7684\u8BF4\u660E\u3002</p>
<h3 id="\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F">\u4E3A\u4EC0\u4E48 <code>placeholder</code> \u4E0D\u663E\u793A \uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>placeholder</code> \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001'' \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002</p>
<p>\u4F60\u53EF\u4EE5\u67E5\u770B <a href="https://262.ecma-international.org/5.1/#sec-4.3.9" target="_blank" rel="noopener noreferrer">JS \u8BED\u8A00\u89C4\u8303</a> \u8FDB\u4E00\u6B65\u4E86\u89E3\u8BE6\u60C5\u3002</p>
<p>\u4E5F\u53EF\u4EE5\u67E5\u770B <a href="https://github.com/ant-design/ant-design/issues/2367" target="_blank" rel="noopener noreferrer">antd issue</a> \u67E5\u770B\u8BA8\u8BBA\u60C5\u51B5\u3002</p>
`,lastUpdated:1701878243875}},Jt={class:"markdown"},Pt=q(`<p>\u4E0B\u62C9\u9009\u62E9\u5668\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002</li><li>\u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 <a href="/components/radio/">Radio</a> \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lucy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="Select-props">Select props <a class="header-anchor" href="#Select-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u652F\u6301\u6E05\u9664</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autoClearSearchValue</td><td>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548\u3002</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>clearIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>defaultActiveFirstOption</td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultOpen</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownClassName</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td>string</td><td>-</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean | number</td><td>true</td><td></td></tr><tr><td>dropdownMenuStyle</td><td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>dropdownRender</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</td><td>({menuNode: VNode, props}) =&gt; VNode | v-slot</td><td>-</td><td></td></tr><tr><td>dropdownStyle</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td><td>object</td><td>-</td><td></td></tr><tr><td>fieldNames</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9 label\u3001value\u3001options \u7684\u5B57\u6BB5</td><td>object</td><td>{ label: <code>label</code>, value: <code>value</code>, options: <code>options</code> }</td><td>3.0</td></tr><tr><td>filterOption</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td><code>boolean</code> | <code>function(inputValue, option)</code></td><td>true</td><td></td></tr><tr><td>filterSort</td><td>\u641C\u7D22\u65F6\u5BF9\u7B5B\u9009\u7ED3\u679C\u9879\u7684\u6392\u5E8F\u51FD\u6570, \u7C7B\u4F3C<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer">Array.sort</a>\u91CC\u7684 compareFunction</td><td>(optionA: Option, optionB: Option) =&gt; number</td><td>-</td><td>3.0</td></tr><tr><td>firstActiveValue</td><td>\u9ED8\u8BA4\u9AD8\u4EAE\u7684\u9009\u9879</td><td>string|string[]</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>labelInValue</td><td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{key: string, label: vNodes, originLabel: any}</code> \u7684\u683C\u5F0F, originLabel\uFF083.1\uFF09 \u4FDD\u6301\u539F\u59CB\u7C7B\u578B\uFF0C\u5982\u679C\u901A\u8FC7 a-select-option children \u6784\u9020\u7684\u8282\u70B9\uFF0C\u8BE5\u503C\u662F\u662F\u4E2A\u51FD\u6570\uFF08\u5373 a-select-option \u7684\u9ED8\u8BA4\u63D2\u69FD\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>listHeight</td><td>\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6</td><td>number</td><td>256</td><td></td></tr><tr><td>maxTagCount</td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td>number</td><td>-</td><td></td></tr><tr><td>maxTagPlaceholder</td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>slot | function(omittedValues)</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>menuItemSelectedIcon</td><td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>mode</td><td>\u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E</td><td>&#39;multiple&#39; | &#39;tags&#39; | &#39;combobox&#39;</td><td>-</td><td></td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>string|slot</td><td>&#39;Not Found&#39;</td><td></td></tr><tr><td>open</td><td>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>option</td><td>\u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9</td><td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td><td>-</td><td>2.2.5</td></tr><tr><td>optionFilterProp</td><td>\u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 option \u5C5E\u6027\uFF0C\u4E0D\u652F\u6301 children</td><td>string</td><td>value</td><td></td></tr><tr><td>optionLabelProp</td><td>\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A <code>value</code>\u3002</td><td>string</td><td><code>children</code> | <code>label</code>(\u8BBE\u7F6E options \u65F6)</td><td></td></tr><tr><td>options</td><td>options \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 selectOption \u8282\u70B9</td><td>array&lt;{value, label, [disabled, key, title]}&gt;</td><td>[]</td><td></td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>removeIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>searchValue</td><td>\u63A7\u5236\u641C\u7D22\u6587\u672C</td><td>string</td><td>-</td><td></td></tr><tr><td>showArrow</td><td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showSearch</td><td>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</td><td>boolean</td><td>false</td><td></td></tr><tr><td>size</td><td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td><td>string</td><td>default</td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>tagRender</td><td>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9 render\uFF0C\u4EC5\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u751F\u6548</td><td>slot | (props) =&gt; any</td><td>-</td><td>3.0</td></tr><tr><td>tokenSeparators</td><td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td><td>string[]</td><td></td><td></td></tr><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td><td></td></tr><tr><td>virtual</td><td>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean</td><td>true</td><td>3.0</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 <code>getPopupContainer={triggerNode =&gt; triggerNode.parentNode}</code> \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002</p></blockquote><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>change</td><td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\uFF08combobox \u6A21\u5F0F\u4E0B\uFF09\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value, option:Option/Array&lt;Option&gt;)</td></tr><tr><td>deselect</td><td>\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 multiple \u6216 tags \u6A21\u5F0F\u4E0B\u751F\u6548</td><td>function(value\uFF0Coption:Option)</td></tr><tr><td>dropdownVisibleChange</td><td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td><td>function(open)</td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>inputKeyDown</td><td>\u952E\u76D8\u6309\u4E0B\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>mouseenter</td><td>\u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>mouseleave</td><td>\u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>popupScroll</td><td>\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03</td><td>function</td></tr><tr><td>search</td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td>function(value: string)</td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C</td><td>function(value, option:Option)</td></tr></tbody></table><h3 id="Select-Methods">Select Methods <a class="header-anchor" href="#Select-Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>blur()</td><td>\u53D6\u6D88\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3 id="Option-props">Option props <a class="header-anchor" href="#Option-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>class</td><td>Option \u5668\u7C7B\u540D</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td>\u548C value \u542B\u4E49\u4E00\u81F4\u3002\u5982\u679C Vue \u9700\u8981\u4F60\u8BBE\u7F6E\u6B64\u9879\uFF0C\u6B64\u9879\u503C\u4E0E value \u7684\u503C\u76F8\u540C\uFF0C\u7136\u540E\u53EF\u4EE5\u7701\u7565 value \u8BBE\u7F6E</td><td>string</td><td></td></tr><tr><td>title</td><td>\u9009\u4E2D\u8BE5 Option \u540E\uFF0CSelect \u7684 title</td><td>string</td><td>-</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009</td><td>string|number</td><td>-</td></tr></tbody></table><h3 id="OptGroup-props">OptGroup props <a class="header-anchor" href="#OptGroup-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>key</td><td></td><td>string</td><td>-</td></tr><tr><td>label</td><td>\u7EC4\u540D</td><td>string|function(h)|slot</td><td>\u65E0</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F">\u70B9\u51FB <code>dropdownRender</code> \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F <a class="header-anchor" href="#\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u770B\u4E0B <a href="/components/select-cn/#components-select-demo-custom-dropdown">dropdownRender \u4F8B\u5B50</a> \u91CC\u7684\u8BF4\u660E\u3002</p><h3 id="\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F">\u4E3A\u4EC0\u4E48 <code>placeholder</code> \u4E0D\u663E\u793A \uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>placeholder</code> \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001&#39;&#39; \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002</p><p>\u4F60\u53EF\u4EE5\u67E5\u770B <a href="https://262.ecma-international.org/5.1/#sec-4.3.9" target="_blank" rel="noopener noreferrer">JS \u8BED\u8A00\u89C4\u8303</a> \u8FDB\u4E00\u6B65\u4E86\u89E3\u8BE6\u60C5\u3002</p><p>\u4E5F\u53EF\u4EE5\u67E5\u770B <a href="https://github.com/ant-design/ant-design/issues/2367" target="_blank" rel="noopener noreferrer">antd issue</a> \u67E5\u770B\u8BA8\u8BBA\u60C5\u51B5\u3002</p>`,23),jt=[Pt];function Dt(t,s,p,d,i,I){return b(),T("article",Jt,jt)}var zt=A(Xt,[["render",Dt]]);const Ut={pageData:{title:"Select",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"Select",cover:"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Select props",slug:"Select-props",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Select Methods",slug:"Select-Methods",content:""},{level:3,title:"Option props",slug:"Option-props",content:""},{level:3,title:"OptGroup props",slug:"OptGroup-props",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"The dropdown is closed when click `dropdownRender` area?"},{level:3,title:"The dropdown is closed when click dropdownRender area?",slug:"The-dropdown-is-closed-when-click-dropdownRender-area",content:"See the [dropdownRender example](/components/select/#components-select-demo-custom-dropdown)."},{level:3,title:"Why is placeholder not displayed?",slug:"Why-is-placeholder-not-displayed",content:"`placeholder` will only be displayed when `value = undefined`, and other values such as null, 0,'', etc. are meaningful values for the JS language."}],relativePath:"components/select/index.en-US.md",content:`
Select component to select value from options.

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native \`&lt;select&gt;\` element.
- Utilizing [Radio](/components/radio/) is recommended when there are fewer total options (less than 5).

## API

\`\`\`html
&lt;a-select&gt;
  &lt;a-select-option value=&quot;lucy&quot;&gt;lucy&lt;/a-select-option&gt;
&lt;/a-select&gt;
\`\`\`

### Select props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button. | boolean | false |  |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when \`mode\` is set to \`multiple\` or \`tags\`. | boolean | true |  |
| autofocus | Get focus by default | boolean | false |  |
| bordered | Whether has border style | boolean | true |  |
| clearIcon | The custom clear icon | VNode \\| slot | - |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| defaultOpen | Initial open state of dropdown | boolean | - |  |
| disabled | Whether disabled select | boolean | false |  |
| dropdownClassName | className of dropdown menu | string | - |  |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set \`min-width\` same as input. Will ignore when value less than select width. \`false\` will disable virtual scroll | boolean \\| number | true |  |
| dropdownMenuStyle | additional style applied to dropdown menu | object | - |  |
| dropdownRender | Customize dropdown content | ({menuNode: VNode, props}) =&gt; VNode \\| v-slot | - |  |
| dropdownStyle | style of dropdown menu | object | - |  |
| fieldNames | Customize node label, value, options field name | object | { label: \`label\`, value: \`value\`, options: \`options\` } | 3.0 |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`inputValue\` and \`option\`, if the function returns \`true\`, the option will be included in the filtered set; Otherwise, it will be excluded. | \`boolean\` \\| \`function(inputValue, option)\` | true |  |
| filterSort | Sort function for search options sorting, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)&#39;s compareFunction | (optionA: Option, optionB: Option) =&gt; number | - | 3.0 |
| firstActiveValue | Value of action option by default | string\\|string\\[] | - |  |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to \`body\`. When position issues happen, try to modify it into scrollable content and position it relative. | function(triggerNode) | () =&gt; document.body |  |
| labelInValue | whether to embed label in value, turn the format of value from \`string\` to \`{key: string, label: vNodes, originLabel: any}\`, originLabel (3.1) maintains the original type. If the node is constructed through a-select-option children, the value is a function (the default slot of a-select-option) | boolean | false |  |
| listHeight | Config popup height | number | 256 |  |
| loading | indicate loading state | Boolean | false |  |
| maxTagCount | Max tag count to show | number | - |  |
| maxTagPlaceholder | Placeholder for not showing tags | slot/function(omittedValues) | - |  |
| maxTagTextLength | Max text length to show | number | - |  |
| menuItemSelectedIcon | The custom menuItemSelected icon | VNode \\| slot | - |  |
| mode | Set mode of Select | &#39;multiple&#39; \\| &#39;tags&#39; | - |  |
| notFoundContent | Specify content to show when no result matches.. | string\\|slot | &#39;Not Found&#39; |  |
| open | Controlled open state of dropdown | boolean | - |  |
| option | custom render option by slot | v-slot:option=&quot;{value, label, [disabled, key, title]}&quot; | - | 2.2.5 |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true | string | value |  |
| optionLabelProp | Which prop value of option will render as content of select. | string | \`children\` \\| \`label\`(when use options) |  |
| options | Data of the selectOption, manual construction work is no longer needed if this property has been set | array&amp;lt;{value, label, [disabled, key, title]}&gt; | \\[] |  |
| placeholder | Placeholder of select | string\\|slot | - |  |
| removeIcon | The custom remove icon | VNode \\| slot | - |  |
| searchValue | The current input &quot;search&quot; text | string | - |  |
| showArrow | Whether to show the drop-down arrow | boolean | true |  |
| showSearch | Whether show search input in single mode. | boolean | false |  |
| size | Size of Select input. \`default\` \`large\` \`small\` | string | default |  |
| suffixIcon | The custom suffix icon | VNode \\| slot | - |  |
| tagRender | Customize tag render, only applies when \`mode\` is set to \`multiple\` or \`tags\` | slot \\| (props) =&gt; any | - |  |
| tokenSeparators | Separator used to tokenize on tag/multiple mode | string\\[] |  |  |
| value(v-model) | Current selected option. | string\\|number\\|string\\[]\\|number\\[] | - |  |
| virtual | Disable virtual scroll when set to false | boolean | true | 3.0 |

&gt; Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use \`getPopupContainer={triggerNode =&gt; triggerNode.parentElement}\` to fix the drop-down popup rendering node in the parent element of the trigger .

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| blur | Called when blur | function |
| change | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option/Array&amp;lt;Option&gt;) |
| deselect | Called when a option is deselected, the params are option&#39;s value (or key) . only called for multiple or tags, effective in multiple or tags mode only. | function(value, option:Option) |
| dropdownVisibleChange | Call when dropdown open | function(open) |
| focus | Called when focus | function |
| inputKeyDown | Called when key pressed | function |
| mouseenter | Called when mouse enter | function |
| mouseleave | Called when mouse leave | function |
| popupScroll | Called when dropdown scrolls | function |
| search | Callback function that is fired when input changed. | function(value: string) |
| select | Called when a option is selected, the params are option&#39;s value (or key) and option instance. | function(value, option:Option) |

### Select Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |

### Option props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| class | additional class to option | string | - |
| disabled | Disable this option | boolean | false |
| key | Same usage as \`value\`. If Vue request you to set this property, you can set it to value of option, and then omit value property. | string |  |
| title | \`title\` of Select after select this Option | string | - |
| value | default to filter with this property | string\\|number | - |

### OptGroup props

| Property | Description | Type         | Default |
| -------- | ----------- | ------------ | ------- |
| key      |             | string       | -       |
| label    | Group label | string\\|slot | -       |

## FAQ

### The dropdown is closed when click \`dropdownRender\` area?

See the [dropdownRender example](/components/select/#components-select-demo-custom-dropdown).

### Why is \`placeholder\` not displayed?

\`placeholder\` will only be displayed when \`value = undefined\`, and other values such as null, 0,&#39;&#39;, etc. are meaningful values for the JS language.

You can check [JS Language Specification](https://262.ecma-international.org/5.1/#sec-4.3.9) for further details.

You can also check [antd issue](https://github.com/ant-design/ant-design/issues/2367) to view the discussion.
`,html:`<p>Select component to select value from options.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>A dropdown menu for displaying choices - an elegant alternative to the native <code>&lt;select&gt;</code> element.</li>
<li>Utilizing <a href="/components/radio/">Radio</a> is recommended when there are fewer total options (less than 5).</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="Select-props">Select props <a class="header-anchor" href="#Select-props">
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
<td>allowClear</td>
<td>Show clear button.</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>autoClearSearchValue</td>
<td>Whether the current search will be cleared on selecting an item. Only applies when <code>mode</code> is set to <code>multiple</code> or <code>tags</code>.</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>autofocus</td>
<td>Get focus by default</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>Whether has border style</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>clearIcon</td>
<td>The custom clear icon</td>
<td>VNode | slot</td>
<td>-</td>
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
<td>dropdownClassName</td>
<td>className of dropdown menu</td>
<td>string</td>
<td>-</td>
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
<td>-</td>
<td></td>
</tr>
<tr>
<td>dropdownRender</td>
<td>Customize dropdown content</td>
<td>({menuNode: VNode, props}) =&gt; VNode | v-slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dropdownStyle</td>
<td>style of dropdown menu</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fieldNames</td>
<td>Customize node label, value, options field name</td>
<td>object</td>
<td>{ label: <code>label</code>, value: <code>value</code>, options: <code>options</code> }</td>
<td>3.0</td>
</tr>
<tr>
<td>filterOption</td>
<td>If true, filter options by input, if function, filter options against it. The function will receive two arguments, <code>inputValue</code> and <code>option</code>, if the function returns <code>true</code>, the option will be included in the filtered set; Otherwise, it will be excluded.</td>
<td><code>boolean</code> | <code>function(inputValue, option)</code></td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>filterSort</td>
<td>Sort function for search options sorting, see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer">Array.sort</a>'s compareFunction</td>
<td>(optionA: Option, optionB: Option) =&gt; number</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>firstActiveValue</td>
<td>Value of action option by default</td>
<td>string|string[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>Parent Node which the selector should be rendered to. Default to <code>body</code>. When position issues happen, try to modify it into scrollable content and position it relative.</td>
<td>function(triggerNode)</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>labelInValue</td>
<td>whether to embed label in value, turn the format of value from <code>string</code> to <code>{key: string, label: vNodes, originLabel: any}</code>, originLabel (3.1) maintains the original type. If the node is constructed through a-select-option children, the value is a function (the default slot of a-select-option)</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>listHeight</td>
<td>Config popup height</td>
<td>number</td>
<td>256</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>indicate loading state</td>
<td>Boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>Max tag count to show</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>Placeholder for not showing tags</td>
<td>slot/function(omittedValues)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxTagTextLength</td>
<td>Max text length to show</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>menuItemSelectedIcon</td>
<td>The custom menuItemSelected icon</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>mode</td>
<td>Set mode of Select</td>
<td>'multiple' | 'tags'</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>notFoundContent</td>
<td>Specify content to show when no result matches..</td>
<td>string|slot</td>
<td>'Not Found'</td>
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
<td>2.2.5</td>
</tr>
<tr>
<td>optionFilterProp</td>
<td>Which prop value of option will be used for filter if filterOption is true</td>
<td>string</td>
<td>value</td>
<td></td>
</tr>
<tr>
<td>optionLabelProp</td>
<td>Which prop value of option will render as content of select.</td>
<td>string</td>
<td><code>children</code> | <code>label</code>(when use options)</td>
<td></td>
</tr>
<tr>
<td>options</td>
<td>Data of the selectOption, manual construction work is no longer needed if this property has been set</td>
<td>array&lt;{value, label, [disabled, key, title]}&gt;</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>Placeholder of select</td>
<td>string|slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>removeIcon</td>
<td>The custom remove icon</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>searchValue</td>
<td>The current input &quot;search&quot; text</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showArrow</td>
<td>Whether to show the drop-down arrow</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>Whether show search input in single mode.</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Size of Select input. <code>default</code> <code>large</code> <code>small</code></td>
<td>string</td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>The custom suffix icon</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tagRender</td>
<td>Customize tag render, only applies when <code>mode</code> is set to <code>multiple</code> or <code>tags</code></td>
<td>slot | (props) =&gt; any</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tokenSeparators</td>
<td>Separator used to tokenize on tag/multiple mode</td>
<td>string[]</td>
<td></td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>Current selected option.</td>
<td>string|number|string[]|number[]</td>
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
<blockquote>
<p>Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use <code>getPopupContainer={triggerNode =&gt; triggerNode.parentElement}</code> to fix the drop-down popup rendering node in the parent element of the trigger .</p>
</blockquote>
<h3 id="events">events <a class="header-anchor" href="#events">
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
<td>blur</td>
<td>Called when blur</td>
<td>function</td>
</tr>
<tr>
<td>change</td>
<td>Called when select an option or input value change, or value of input is changed in combobox mode</td>
<td>function(value, option:Option/Array&lt;Option&gt;)</td>
</tr>
<tr>
<td>deselect</td>
<td>Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only.</td>
<td>function(value, option:Option)</td>
</tr>
<tr>
<td>dropdownVisibleChange</td>
<td>Call when dropdown open</td>
<td>function(open)</td>
</tr>
<tr>
<td>focus</td>
<td>Called when focus</td>
<td>function</td>
</tr>
<tr>
<td>inputKeyDown</td>
<td>Called when key pressed</td>
<td>function</td>
</tr>
<tr>
<td>mouseenter</td>
<td>Called when mouse enter</td>
<td>function</td>
</tr>
<tr>
<td>mouseleave</td>
<td>Called when mouse leave</td>
<td>function</td>
</tr>
<tr>
<td>popupScroll</td>
<td>Called when dropdown scrolls</td>
<td>function</td>
</tr>
<tr>
<td>search</td>
<td>Callback function that is fired when input changed.</td>
<td>function(value: string)</td>
</tr>
<tr>
<td>select</td>
<td>Called when a option is selected, the params are option's value (or key) and option instance.</td>
<td>function(value, option:Option)</td>
</tr>
</tbody>
</table>
<h3 id="Select-Methods">Select Methods <a class="header-anchor" href="#Select-Methods">
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
<td>Remove focus</td>
</tr>
<tr>
<td>focus()</td>
<td>Get focus</td>
</tr>
</tbody>
</table>
<h3 id="Option-props">Option props <a class="header-anchor" href="#Option-props">
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
<td>class</td>
<td>additional class to option</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>disabled</td>
<td>Disable this option</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>key</td>
<td>Same usage as <code>value</code>. If Vue request you to set this property, you can set it to value of option, and then omit value property.</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td><code>title</code> of Select after select this Option</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>default to filter with this property</td>
<td>string|number</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="OptGroup-props">OptGroup props <a class="header-anchor" href="#OptGroup-props">
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
<td>key</td>
<td></td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>Group label</td>
<td>string|slot</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="The-dropdown-is-closed-when-click-dropdownRender-area">The dropdown is closed when click <code>dropdownRender</code> area? <a class="header-anchor" href="#The-dropdown-is-closed-when-click-dropdownRender-area">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>See the <a href="/components/select/#components-select-demo-custom-dropdown">dropdownRender example</a>.</p>
<h3 id="Why-is-placeholder-not-displayed">Why is <code>placeholder</code> not displayed? <a class="header-anchor" href="#Why-is-placeholder-not-displayed">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>placeholder</code> will only be displayed when <code>value = undefined</code>, and other values such as null, 0,'', etc. are meaningful values for the JS language.</p>
<p>You can check <a href="https://262.ecma-international.org/5.1/#sec-4.3.9" target="_blank" rel="noopener noreferrer">JS Language Specification</a> for further details.</p>
<p>You can also check <a href="https://github.com/ant-design/ant-design/issues/2367" target="_blank" rel="noopener noreferrer">antd issue</a> to view the discussion.</p>
`,lastUpdated:1701878243875}},Lt={class:"markdown"},Tt=q(`<p>Select component to select value from options.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>A dropdown menu for displaying choices - an elegant alternative to the native <code>&lt;select&gt;</code> element.</li><li>Utilizing <a href="/components/radio/">Radio</a> is recommended when there are fewer total options (less than 5).</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lucy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="Select-props">Select props <a class="header-anchor" href="#Select-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>allowClear</td><td>Show clear button.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autoClearSearchValue</td><td>Whether the current search will be cleared on selecting an item. Only applies when <code>mode</code> is set to <code>multiple</code> or <code>tags</code>.</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>Get focus by default</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>Whether has border style</td><td>boolean</td><td>true</td><td></td></tr><tr><td>clearIcon</td><td>The custom clear icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>defaultActiveFirstOption</td><td>Whether active first option by default</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultOpen</td><td>Initial open state of dropdown</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disabled</td><td>Whether disabled select</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownClassName</td><td>className of dropdown menu</td><td>string</td><td>-</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>Determine whether the dropdown menu and the select input are the same width. Default set <code>min-width</code> same as input. Will ignore when value less than select width. <code>false</code> will disable virtual scroll</td><td>boolean | number</td><td>true</td><td></td></tr><tr><td>dropdownMenuStyle</td><td>additional style applied to dropdown menu</td><td>object</td><td>-</td><td></td></tr><tr><td>dropdownRender</td><td>Customize dropdown content</td><td>({menuNode: VNode, props}) =&gt; VNode | v-slot</td><td>-</td><td></td></tr><tr><td>dropdownStyle</td><td>style of dropdown menu</td><td>object</td><td>-</td><td></td></tr><tr><td>fieldNames</td><td>Customize node label, value, options field name</td><td>object</td><td>{ label: <code>label</code>, value: <code>value</code>, options: <code>options</code> }</td><td>3.0</td></tr><tr><td>filterOption</td><td>If true, filter options by input, if function, filter options against it. The function will receive two arguments, <code>inputValue</code> and <code>option</code>, if the function returns <code>true</code>, the option will be included in the filtered set; Otherwise, it will be excluded.</td><td><code>boolean</code> | <code>function(inputValue, option)</code></td><td>true</td><td></td></tr><tr><td>filterSort</td><td>Sort function for search options sorting, see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer">Array.sort</a>&#39;s compareFunction</td><td>(optionA: Option, optionB: Option) =&gt; number</td><td>-</td><td>3.0</td></tr><tr><td>firstActiveValue</td><td>Value of action option by default</td><td>string|string[]</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>Parent Node which the selector should be rendered to. Default to <code>body</code>. When position issues happen, try to modify it into scrollable content and position it relative.</td><td>function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>labelInValue</td><td>whether to embed label in value, turn the format of value from <code>string</code> to <code>{key: string, label: vNodes, originLabel: any}</code>, originLabel (3.1) maintains the original type. If the node is constructed through a-select-option children, the value is a function (the default slot of a-select-option)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>listHeight</td><td>Config popup height</td><td>number</td><td>256</td><td></td></tr><tr><td>loading</td><td>indicate loading state</td><td>Boolean</td><td>false</td><td></td></tr><tr><td>maxTagCount</td><td>Max tag count to show</td><td>number</td><td>-</td><td></td></tr><tr><td>maxTagPlaceholder</td><td>Placeholder for not showing tags</td><td>slot/function(omittedValues)</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>Max text length to show</td><td>number</td><td>-</td><td></td></tr><tr><td>menuItemSelectedIcon</td><td>The custom menuItemSelected icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>mode</td><td>Set mode of Select</td><td>&#39;multiple&#39; | &#39;tags&#39;</td><td>-</td><td></td></tr><tr><td>notFoundContent</td><td>Specify content to show when no result matches..</td><td>string|slot</td><td>&#39;Not Found&#39;</td><td></td></tr><tr><td>open</td><td>Controlled open state of dropdown</td><td>boolean</td><td>-</td><td></td></tr><tr><td>option</td><td>custom render option by slot</td><td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td><td>-</td><td>2.2.5</td></tr><tr><td>optionFilterProp</td><td>Which prop value of option will be used for filter if filterOption is true</td><td>string</td><td>value</td><td></td></tr><tr><td>optionLabelProp</td><td>Which prop value of option will render as content of select.</td><td>string</td><td><code>children</code> | <code>label</code>(when use options)</td><td></td></tr><tr><td>options</td><td>Data of the selectOption, manual construction work is no longer needed if this property has been set</td><td>array&lt;{value, label, [disabled, key, title]}&gt;</td><td>[]</td><td></td></tr><tr><td>placeholder</td><td>Placeholder of select</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>removeIcon</td><td>The custom remove icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>searchValue</td><td>The current input &quot;search&quot; text</td><td>string</td><td>-</td><td></td></tr><tr><td>showArrow</td><td>Whether to show the drop-down arrow</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showSearch</td><td>Whether show search input in single mode.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>size</td><td>Size of Select input. <code>default</code> <code>large</code> <code>small</code></td><td>string</td><td>default</td><td></td></tr><tr><td>suffixIcon</td><td>The custom suffix icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>tagRender</td><td>Customize tag render, only applies when <code>mode</code> is set to <code>multiple</code> or <code>tags</code></td><td>slot | (props) =&gt; any</td><td>-</td><td></td></tr><tr><td>tokenSeparators</td><td>Separator used to tokenize on tag/multiple mode</td><td>string[]</td><td></td><td></td></tr><tr><td>value(v-model)</td><td>Current selected option.</td><td>string|number|string[]|number[]</td><td>-</td><td></td></tr><tr><td>virtual</td><td>Disable virtual scroll when set to false</td><td>boolean</td><td>true</td><td>3.0</td></tr></tbody></table><blockquote><p>Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use <code>getPopupContainer={triggerNode =&gt; triggerNode.parentElement}</code> to fix the drop-down popup rendering node in the parent element of the trigger .</p></blockquote><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>blur</td><td>Called when blur</td><td>function</td></tr><tr><td>change</td><td>Called when select an option or input value change, or value of input is changed in combobox mode</td><td>function(value, option:Option/Array&lt;Option&gt;)</td></tr><tr><td>deselect</td><td>Called when a option is deselected, the params are option&#39;s value (or key) . only called for multiple or tags, effective in multiple or tags mode only.</td><td>function(value, option:Option)</td></tr><tr><td>dropdownVisibleChange</td><td>Call when dropdown open</td><td>function(open)</td></tr><tr><td>focus</td><td>Called when focus</td><td>function</td></tr><tr><td>inputKeyDown</td><td>Called when key pressed</td><td>function</td></tr><tr><td>mouseenter</td><td>Called when mouse enter</td><td>function</td></tr><tr><td>mouseleave</td><td>Called when mouse leave</td><td>function</td></tr><tr><td>popupScroll</td><td>Called when dropdown scrolls</td><td>function</td></tr><tr><td>search</td><td>Callback function that is fired when input changed.</td><td>function(value: string)</td></tr><tr><td>select</td><td>Called when a option is selected, the params are option&#39;s value (or key) and option instance.</td><td>function(value, option:Option)</td></tr></tbody></table><h3 id="Select-Methods">Select Methods <a class="header-anchor" href="#Select-Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>blur()</td><td>Remove focus</td></tr><tr><td>focus()</td><td>Get focus</td></tr></tbody></table><h3 id="Option-props">Option props <a class="header-anchor" href="#Option-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>class</td><td>additional class to option</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>Disable this option</td><td>boolean</td><td>false</td></tr><tr><td>key</td><td>Same usage as <code>value</code>. If Vue request you to set this property, you can set it to value of option, and then omit value property.</td><td>string</td><td></td></tr><tr><td>title</td><td><code>title</code> of Select after select this Option</td><td>string</td><td>-</td></tr><tr><td>value</td><td>default to filter with this property</td><td>string|number</td><td>-</td></tr></tbody></table><h3 id="OptGroup-props">OptGroup props <a class="header-anchor" href="#OptGroup-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>key</td><td></td><td>string</td><td>-</td></tr><tr><td>label</td><td>Group label</td><td>string|slot</td><td>-</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="The-dropdown-is-closed-when-click-dropdownRender-area">The dropdown is closed when click <code>dropdownRender</code> area? <a class="header-anchor" href="#The-dropdown-is-closed-when-click-dropdownRender-area"><span aria-hidden="true" class="anchor">#</span></a></h3><p>See the <a href="/components/select/#components-select-demo-custom-dropdown">dropdownRender example</a>.</p><h3 id="Why-is-placeholder-not-displayed">Why is <code>placeholder</code> not displayed? <a class="header-anchor" href="#Why-is-placeholder-not-displayed"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>placeholder</code> will only be displayed when <code>value = undefined</code>, and other values such as null, 0,&#39;&#39;, etc. are meaningful values for the JS language.</p><p>You can check <a href="https://262.ecma-international.org/5.1/#sec-4.3.9" target="_blank" rel="noopener noreferrer">JS Language Specification</a> for further details.</p><p>You can also check <a href="https://github.com/ant-design/ant-design/issues/2367" target="_blank" rel="noopener noreferrer">antd issue</a> to view the discussion.</p>`,23),qt=[Tt];function Ot(t,s,p,d,i,I){return b(),T("article",Lt,qt)}var Et=A(Ut,[["render",Ot]]);const Qt=y({CN:zt,US:Et,components:{Basic:wn,Size:xn,Tags:Pn,AutomaticTokenization:Ln,LabelInValue:Qn,Multiple:aa,Coordinate:ca,Optgroup:Ca,SearchBox:wa,Search:Ya,SelectUsers:xa,Suffix:Da,HideSelected:Oa,CustomDropdownMenu:at,OptionLabelProp:vt,BigData:Wt,Responsive:Kt},setup(){return{}}});function _t(t,s,p,d,i,I){const l=c("Basic"),u=c("Size"),r=c("Tags"),g=c("Responsive"),k=c("AutomaticTokenization"),C=c("LabelInValue"),h=c("Multiple"),v=c("Coordinate"),Z=c("Optgroup"),S=c("SearchBox"),H=c("Search"),w=c("SelectUsers"),B=c("Suffix"),G=c("HideSelected"),x=c("CustomDropdownMenu"),j=c("OptionLabelProp"),M=c("BigData"),$=c("demo-sort");return b(),f($,null,{default:o(()=>[e(l),e(u),e(r),e(g),e(k),e(C),e(h),e(v),e(Z),e(S),e(H),e(w),e(B),e(G),e(x),e(j),e(M)]),_:1})}var ss=A(Qt,[["render",_t]]);export{ss as default};

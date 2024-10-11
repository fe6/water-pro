import{d,k as w,aq as p,J as C,bN as m,bO as e,e as c,G as n,H as s,at as W,E as y,cb as v}from"./vendor.0f0e4632.js";import{_ as I,b as G,c as f}from"./index.f6b32fa6.js";const K=({success:a})=>{setTimeout(()=>{a(["water","antd","eleUI","iview"].map((o,t)=>({label:o,value:t})))},1e3)},V=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},F=({success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},Y=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},R=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],H=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{a(o)},1e3)},X=({success:a})=>{setTimeout(()=>{a([])},1e3)},J=d({setup(){return{getSelectForOptions:K,postCreateApi:V,postEditApi:F,postRemoveApi:Y,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:R,tableApi:H,dragApi:X,theClassifyValue:w()}}}),T=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
            componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
              maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),S=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token punctuation"},","),s(`
      value`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
            maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function N(a,o,t,k,r,g){const u=p("a-classify"),l=p("demo-box");return C(),m(l,{jsfiddle:{us:"Basic usage",cn:"\u57FA\u672C\u7528\u6CD5",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u7528\u6CD5</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic usage</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic"},relativePath:"components/classify/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSLor7fpgInmi6kiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgOmNyZWF0ZUZvcm1Db25maWc9ImNyZWF0ZUZvcm1Db25maWciCiAgICA6Y3JlYXRlQXBpPSJwb3N0Q3JlYXRlQXBpIgogICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgOnJlbW92ZUFwaT0icG9zdFJlbW92ZUFwaSIKICAgIHJlbW92ZVRpcD0i56Gu5a6a6KaB5Yig6Zmk5ZCXIgogICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgIDpkcmF3ZXJUYWJsZUNvbHVtbnM9ImNvbHVtbnMiCiAgICBkcmF3ZXJUYWJsZURyYWdnYWJsZQogICAgOmRyYXdlclRhYmxlRHJhZ0FwaT0iZHJhZ0FwaSIKICAgIDptYXgtdGFnLWNvdW50PSIxIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoCiAgICAgIFsnd2F0ZXInLCAnYW50ZCcsICdlbGVVSScsICdpdmlldyddLm1hcCgobGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4gKHsKICAgICAgICBsYWJlbCwKICAgICAgICB2YWx1ZSwKICAgICAgfSkpLAogICAgKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RDcmVhdGVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygnY3JlYXRlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RFZGl0QXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2coJ2VkaXQnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdFJlbW92ZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKCdyZW1vdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgY29sdW1ucyA9IFsKICB7CiAgICB0aXRsZTogJ+WIhuexu+exu+WeiycsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICfliIbnsbvlkI3np7AnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgfSwKXTsKCmNvbnN0IHRhYmxlQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc3QgYXJyOiBhbnkgPSBbXTsKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgIH0pOwogIH0KICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfTsKY29uc3QgZHJhZ0FwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgcG9zdENyZWF0ZUFwaSwKICAgICAgcG9zdEVkaXRBcGksCiAgICAgIHBvc3RSZW1vdmVBcGksCiAgICAgIGNyZWF0ZUZvcm1Db25maWc6IHsKICAgICAgICBzY2hlbWFzOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGZpZWxkOiAnbmFtZScsCiAgICAgICAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgICAgICAgbGFiZWw6ICfmiL/lnovnibnoibInLAogICAgICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5YaF5a65JywKICAgICAgICAgICAgICBtYXhsZW5ndGg6IDIwMCwKICAgICAgICAgICAgfSwKICAgICAgICAgICAgaXRlbVByb3BzOiB7CiAgICAgICAgICAgICAgbGFiZWxBbGlnbjogJ2xlZnQnLAogICAgICAgICAgICB9LAogICAgICAgICAgICBydWxlczogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLAogICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeaJgOWcqOalvOWxgicsCiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJywKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgICBjb2x1bW5zLAogICAgICB0YWJsZUFwaSwKICAgICAgZHJhZ0FwaSwKICAgICAgdGhlQ2xhc3NpZnlWYWx1ZTogcmVmKCksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSLor7fpgInmi6kiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgOmNyZWF0ZUZvcm1Db25maWc9ImNyZWF0ZUZvcm1Db25maWciCiAgICA6Y3JlYXRlQXBpPSJwb3N0Q3JlYXRlQXBpIgogICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgOnJlbW92ZUFwaT0icG9zdFJlbW92ZUFwaSIKICAgIHJlbW92ZVRpcD0i56Gu5a6a6KaB5Yig6Zmk5ZCXIgogICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgIDpkcmF3ZXJUYWJsZUNvbHVtbnM9ImNvbHVtbnMiCiAgICBkcmF3ZXJUYWJsZURyYWdnYWJsZQogICAgOmRyYXdlclRhYmxlRHJhZ0FwaT0iZHJhZ0FwaSIKICAgIDptYXgtdGFnLWNvdW50PSIxIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWyd3YXRlcicsICdhbnRkJywgJ2VsZVVJJywgJ2l2aWV3J10ubWFwKChsYWJlbCwgdmFsdWUpID0+ICh7CiAgICAgIGxhYmVsLAogICAgICB2YWx1ZSwKICAgIH0pKSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0Q3JlYXRlQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ2NyZWF0ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0RWRpdEFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdlZGl0Jyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RSZW1vdmVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZygncmVtb3RlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNvbHVtbnMgPSBbewogIHRpdGxlOiAn5YiG57G757G75Z6LJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAn5YiG57G75ZCN56ewJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn1dOwoKY29uc3QgdGFibGVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9OwoKY29uc3QgZHJhZ0FwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgcG9zdENyZWF0ZUFwaSwKICAgICAgcG9zdEVkaXRBcGksCiAgICAgIHBvc3RSZW1vdmVBcGksCiAgICAgIGNyZWF0ZUZvcm1Db25maWc6IHsKICAgICAgICBzY2hlbWFzOiBbewogICAgICAgICAgZmllbGQ6ICduYW1lJywKICAgICAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgICAgIGxhYmVsOiAn5oi/5Z6L54m56ImyJywKICAgICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5YaF5a65JywKICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMDAsCiAgICAgICAgICB9LAogICAgICAgICAgaXRlbVByb3BzOiB7CiAgICAgICAgICAgIGxhYmVsQWxpZ246ICdsZWZ0JywKICAgICAgICAgIH0sCiAgICAgICAgICBydWxlczogW3sKICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsCiAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmiYDlnKjmpbzlsYInLAogICAgICAgICAgICB0eXBlOiAnc3RyaW5nJywKICAgICAgICAgIH1dLAogICAgICAgIH1dLAogICAgICB9LAogICAgICBjb2x1bW5zLAogICAgICB0YWJsZUFwaSwKICAgICAgZHJhZ0FwaSwKICAgICAgdGhlQ2xhc3NpZnlWYWx1ZTogcmVmKCksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[c(u,{value:a.theClassifyValue,"onUpdate:value":o[0]||(o[0]=i=>a.theClassifyValue=i),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9",api:a.getSelectForOptions,createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,drawerTableDraggable:"",drawerTableDragApi:a.dragApi,"max-tag-count":1},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])]),htmlCode:e(()=>[T]),jsVersionHtml:e(()=>[S]),_:1},8,["jsfiddle"])}var x=I(J,[["render",N]]);const D=({success:a})=>{setTimeout(()=>{a(["water","antd","eleUI","iview"].map((o,t)=>({label:o,value:t})))},1e3)},z=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},P=({success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},O=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},L=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],U=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{a(o)},1e3)},j=({success:a})=>{setTimeout(()=>{a([])},1e3)},Q=d({setup(){return{getSelectForOptions:D,postCreateApi:z,postEditApi:P,postRemoveApi:O,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:L,tableApi:U,dragApi:j,theClassifyValue:w([])}}}),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
            componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
              maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),E=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token punctuation"},","),s(`
      value`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
            maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function q(a,o,t,k,r,g){const u=p("a-classify"),l=p("demo-box");return C(),m(l,{jsfiddle:{us:"Multiple usage",cn:'\u591A\u9009\uFF0C\u8BBE\u7F6E `mode="multiple"` \u5373\u53EF',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u591A\u9009\uFF0C\u8BBE\u7F6E <code>mode=&quot;multiple&quot;</code> \u5373\u53EF</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Multiple usage</p>
`,order:0,title:{"zh-CN":"\u591A\u9009","en-US":"Multiple"},relativePath:"components/classify/demo/multiple.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSLor7fpgInmi6kiCiAgICBtb2RlPSJtdWx0aXBsZSIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgIDpjcmVhdGVBcGk9InBvc3RDcmVhdGVBcGkiCiAgICA6ZWRpdEFwaT0icG9zdEVkaXRBcGkiCiAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgcmVtb3ZlVGlwPSLnoa7lrpropoHliKDpmaTlkJciCiAgICA6ZHJhd2VyVGFibGVBcGk9InRhYmxlQXBpIgogICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgIGRyYXdlclRhYmxlRHJhZ2dhYmxlCiAgICA6ZHJhd2VyVGFibGVEcmFnQXBpPSJkcmFnQXBpIgogICAgOm1heC10YWctY291bnQ9IjEiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcygKICAgICAgWyd3YXRlcicsICdhbnRkJywgJ2VsZVVJJywgJ2l2aWV3J10ubWFwKChsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiAoewogICAgICAgIGxhYmVsLAogICAgICAgIHZhbHVlLAogICAgICB9KSksCiAgICApOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdENyZWF0ZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKCdjcmVhdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdEVkaXRBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygnZWRpdCcpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0UmVtb3ZlQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2coJ3JlbW90ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIHRpdGxlOiAn5YiG57G757G75Z6LJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ+WIhuexu+WQjeensCcsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LApdOwoKY29uc3QgdGFibGVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9Owpjb25zdCBkcmFnQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBwb3N0Q3JlYXRlQXBpLAogICAgICBwb3N0RWRpdEFwaSwKICAgICAgcG9zdFJlbW92ZUFwaSwKICAgICAgY3JlYXRlRm9ybUNvbmZpZzogewogICAgICAgIHNjaGVtYXM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgZmllbGQ6ICduYW1lJywKICAgICAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICAgICAgICBsYWJlbDogJ+aIv+Wei+eJueiJsicsCiAgICAgICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXlhoXlrrknLAogICAgICAgICAgICAgIG1heGxlbmd0aDogMjAwLAogICAgICAgICAgICB9LAogICAgICAgICAgICBpdGVtUHJvcHM6IHsKICAgICAgICAgICAgICBsYWJlbEFsaWduOiAnbGVmdCcsCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHJ1bGVzOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsCiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5omA5Zyo5qW85bGCJywKICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIGNvbHVtbnMsCiAgICAgIHRhYmxlQXBpLAogICAgICBkcmFnQXBpLAogICAgICB0aGVDbGFzc2lmeVZhbHVlOiByZWYoW10pLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSLor7fpgInmi6kiCiAgICBtb2RlPSJtdWx0aXBsZSIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgIDpjcmVhdGVBcGk9InBvc3RDcmVhdGVBcGkiCiAgICA6ZWRpdEFwaT0icG9zdEVkaXRBcGkiCiAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgcmVtb3ZlVGlwPSLnoa7lrpropoHliKDpmaTlkJciCiAgICA6ZHJhd2VyVGFibGVBcGk9InRhYmxlQXBpIgogICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgIGRyYXdlclRhYmxlRHJhZ2dhYmxlCiAgICA6ZHJhd2VyVGFibGVEcmFnQXBpPSJkcmFnQXBpIgogICAgOm1heC10YWctY291bnQ9IjEiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbJ3dhdGVyJywgJ2FudGQnLCAnZWxlVUknLCAnaXZpZXcnXS5tYXAoKGxhYmVsLCB2YWx1ZSkgPT4gKHsKICAgICAgbGFiZWwsCiAgICAgIHZhbHVlLAogICAgfSkpKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RDcmVhdGVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZygnY3JlYXRlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RFZGl0QXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ2VkaXQnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdFJlbW92ZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdyZW1vdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICfliIbnsbvnsbvlnosnLAogIGRhdGFJbmRleDogJ25hbWUnLAogIGtleTogJ25hbWUnLAp9LCB7CiAgdGl0bGU6ICfliIbnsbvlkI3np7AnLAogIGRhdGFJbmRleDogJ2FnZScsCiAga2V5OiAnYWdlJywKfV07Cgpjb25zdCB0YWJsZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBkcmFnQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBwb3N0Q3JlYXRlQXBpLAogICAgICBwb3N0RWRpdEFwaSwKICAgICAgcG9zdFJlbW92ZUFwaSwKICAgICAgY3JlYXRlRm9ybUNvbmZpZzogewogICAgICAgIHNjaGVtYXM6IFt7CiAgICAgICAgICBmaWVsZDogJ25hbWUnLAogICAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICAgICAgbGFiZWw6ICfmiL/lnovnibnoibInLAogICAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXlhoXlrrknLAogICAgICAgICAgICBtYXhsZW5ndGg6IDIwMCwKICAgICAgICAgIH0sCiAgICAgICAgICBpdGVtUHJvcHM6IHsKICAgICAgICAgICAgbGFiZWxBbGlnbjogJ2xlZnQnLAogICAgICAgICAgfSwKICAgICAgICAgIHJ1bGVzOiBbewogICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeaJgOWcqOalvOWxgicsCiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLAogICAgICAgICAgfV0sCiAgICAgICAgfV0sCiAgICAgIH0sCiAgICAgIGNvbHVtbnMsCiAgICAgIHRhYmxlQXBpLAogICAgICBkcmFnQXBpLAogICAgICB0aGVDbGFzc2lmeVZhbHVlOiByZWYoW10pLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[c(u,{value:a.theClassifyValue,"onUpdate:value":o[0]||(o[0]=i=>a.theClassifyValue=i),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9",mode:"multiple",api:a.getSelectForOptions,createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,drawerTableDraggable:"",drawerTableDragApi:a.dragApi,"max-tag-count":1},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])]),htmlCode:e(()=>[M]),jsVersionHtml:e(()=>[E]),_:1},8,["jsfiddle"])}var $=I(Q,[["render",q]]);const _=({success:a})=>{setTimeout(()=>{a(["water","antd","eleUI","iview"].map((o,t)=>({label:o,value:t})))},1e3)},nn=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},sn=({success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},an=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},tn=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],on=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{a(o)},1e3)},pn=({success:a})=>{setTimeout(()=>{a([])},1e3)},en={schemas:[{field:"categoryIds",label:"\u5361\u5238\u5206\u7C7B",component:"Input",slot:"category",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5361\u5238\u5206\u7C7B",type:"array"}]}],labelCol:{span:24},wrapperCol:{span:24},actionColOptions:{span:24,push:0},showResetButton:!1,actionAlgin:"center",okText:"\u786E\u5B9A",submitButtonOptions:{loading:!1}},cn=d({setup(){const{register:a,methods:o}=G(),[t,{setFieldsValue:k,getFieldsValue:r,setProps:g}]=f();return{getSelectForOptions:_,postCreateApi:nn,postEditApi:sn,postRemoveApi:an,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:tn,tableApi:on,dragApi:pn,handlerForm:t,registerModal:a,subTheModal:()=>{console.log(r(),"\u521B\u5EFA\u7684\u6570\u636E"),o.openModal(!1)},openTheModal:()=>{o.openModal(),setTimeout(async()=>{g(en),setTimeout(async()=>{k({categoryIds:[90]})},0)},0)}}}}),un=s("\u6253\u5F00"),ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openTheModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-pro")]),s(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("registerModal"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("water"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("null"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":min-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("120"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":body-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ height: "),n("span",{class:"token punctuation"},"'"),s("180px"),n("span",{class:"token punctuation"},"'"),s(" }"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":z-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1001"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-form-pro")]),s(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handlerForm"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("subTheModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#category"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ model, field }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
            `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("model[field]"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
            `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"allowClear"),s(`
            `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"showSearch"),s(`
            `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
            `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-form-pro")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi"),n("span",{class:"token punctuation"},","),s(" FormProProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useModal"),n("span",{class:"token punctuation"},","),s(" useForm "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" theEditFormConf"),n("span",{class:"token operator"},":"),s(" FormProProps "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'categoryIds'"),n("span",{class:"token punctuation"},","),s(`
      label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5361\u5238\u5206\u7C7B'"),n("span",{class:"token punctuation"},","),s(`
      component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
      slot`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'category'"),n("span",{class:"token punctuation"},","),s(`
      rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5361\u5238\u5206\u7C7B'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'array'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  labelCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  wrapperCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  actionColOptions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    push`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  showResetButton`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  actionAlgin`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
  okText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u786E\u5B9A'"),n("span",{class:"token punctuation"},","),s(`
  submitButtonOptions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    loading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" register"),n("span",{class:"token operator"},":"),s(" registerModal"),n("span",{class:"token punctuation"},","),s(" methods"),n("span",{class:"token operator"},":"),s(" modalMethods "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("handlerForm"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" setFieldsValue"),n("span",{class:"token punctuation"},","),s(" getFieldsValue"),n("span",{class:"token punctuation"},","),s(" setProps "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openTheModal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),s("theEditFormConf"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"setFieldsValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            categoryIds`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"subTheModal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getFieldsValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u521B\u5EFA\u7684\u6570\u636E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
            componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
              maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`

      handlerForm`),n("span",{class:"token punctuation"},","),s(`

      registerModal`),n("span",{class:"token punctuation"},","),s(`
      subTheModal`),n("span",{class:"token punctuation"},","),s(`
      openTheModal`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openTheModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u6253\u5F00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-pro")]),s(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("registerModal"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("water"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("null"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":min-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("120"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":body-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ height: "),n("span",{class:"token punctuation"},"'"),s("180px"),n("span",{class:"token punctuation"},"'"),s(" }"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":z-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1001"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-form-pro")]),s(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handlerForm"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("subTheModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#category"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ model, field }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
            `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("model[field]"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
            `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"allowClear"),s(`
            `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"showSearch"),s(`
            `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
            `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-form-pro")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useModal"),n("span",{class:"token punctuation"},","),s(" useForm "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token punctuation"},","),s(`
      value`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" theEditFormConf "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'categoryIds'"),n("span",{class:"token punctuation"},","),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5361\u5238\u5206\u7C7B'"),n("span",{class:"token punctuation"},","),s(`
    component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
    slot`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'category'"),n("span",{class:"token punctuation"},","),s(`
    rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5361\u5238\u5206\u7C7B'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'array'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  labelCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  wrapperCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  actionColOptions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),s(`
    push`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  showResetButton`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  actionAlgin`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
  okText`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u786E\u5B9A'"),n("span",{class:"token punctuation"},","),s(`
  submitButtonOptions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    loading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
      register`),n("span",{class:"token operator"},":"),s(" registerModal"),n("span",{class:"token punctuation"},","),s(`
      methods`),n("span",{class:"token operator"},":"),s(" modalMethods"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("handlerForm"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      setFieldsValue`),n("span",{class:"token punctuation"},","),s(`
      getFieldsValue`),n("span",{class:"token punctuation"},","),s(`
      setProps`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openTheModal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),s("theEditFormConf"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"setFieldsValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            categoryIds`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"subTheModal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getFieldsValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u521B\u5EFA\u7684\u6570\u636E'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
            maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      handlerForm`),n("span",{class:"token punctuation"},","),s(`
      registerModal`),n("span",{class:"token punctuation"},","),s(`
      subTheModal`),n("span",{class:"token punctuation"},","),s(`
      openTheModal`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function rn(a,o,t,k,r,g){const u=p("a-button"),l=p("a-classify"),i=p("a-form-pro"),h=p("a-modal-pro"),B=p("demo-box");return C(),m(B,{jsfiddle:{us:"Modal usage of classify",cn:"\u5F39\u6846\u4E2D\u7684\u5206\u7C7B",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F39\u6846\u4E2D\u7684\u5206\u7C7B</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Modal usage of classify</p>
`,order:0,title:{"zh-CN":"\u5F39\u6846\u4E2D","en-US":"Modal Pro"},relativePath:"components/classify/demo/modal-pro.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuVGhlTW9kYWwiPuaJk+W8gDwvYS1idXR0b24+CiAgICA8YS1tb2RhbC1wcm8KICAgICAgQHJlZ2lzdGVyPSJyZWdpc3Rlck1vZGFsIgogICAgICB0aXRsZT0id2F0ZXIiCiAgICAgIDpmb290ZXI9Im51bGwiCiAgICAgIDptaW4taGVpZ2h0PSIxMjAiCiAgICAgIDpib2R5LXN0eWxlPSJ7IGhlaWdodDogJzE4MHB4JyB9IgogICAgICA6ei1pbmRleD0iMTAwMSIKICAgID4KICAgICAgPGEtZm9ybS1wcm8gQHJlZ2lzdGVyPSJoYW5kbGVyRm9ybSIgQHN1Ym1pdD0ic3ViVGhlTW9kYWwiPgogICAgICAgIDx0ZW1wbGF0ZSAjY2F0ZWdvcnk9InsgbW9kZWwsIGZpZWxkIH0iPgogICAgICAgICAgPGEtY2xhc3NpZnkKICAgICAgICAgICAgdi1tb2RlbDp2YWx1ZT0ibW9kZWxbZmllbGRdIgogICAgICAgICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICAgICAgICBwbGFjZWhvbGRlcj0i6K+36YCJ5oup5oi/5Lu35YiG57G7IgogICAgICAgICAgICBhbGxvd0NsZWFyCiAgICAgICAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICAgICAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgICAgICAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgICAgICAgICAgOmNyZWF0ZUFwaT0icG9zdENyZWF0ZUFwaSIKICAgICAgICAgICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgICAgICAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgICAgICAgICByZW1vdmVUaXA9IuehruWumuimgeWIoOmZpOWQlyIKICAgICAgICAgICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgICAgICAgICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgICAgICAgICAgc2hvd1NlYXJjaAogICAgICAgICAgICBkcmF3ZXJUYWJsZURyYWdnYWJsZQogICAgICAgICAgICA6ZHJhd2VyVGFibGVEcmFnQXBpPSJkcmFnQXBpIgogICAgICAgICAgLz4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZm9ybS1wcm8+CiAgICA8L2EtbW9kYWwtcHJvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpLCBGb3JtUHJvUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZU1vZGFsLCB1c2VGb3JtIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcygKICAgICAgWyd3YXRlcicsICdhbnRkJywgJ2VsZVVJJywgJ2l2aWV3J10ubWFwKChsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiAoewogICAgICAgIGxhYmVsLAogICAgICAgIHZhbHVlLAogICAgICB9KSksCiAgICApOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdENyZWF0ZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKCdjcmVhdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdEVkaXRBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygnZWRpdCcpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0UmVtb3ZlQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2coJ3JlbW90ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIHRpdGxlOiAn5YiG57G757G75Z6LJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ+WIhuexu+WQjeensCcsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LApdOwoKY29uc3QgdGFibGVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9Owpjb25zdCBkcmFnQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHRoZUVkaXRGb3JtQ29uZjogRm9ybVByb1Byb3BzID0gewogIHNjaGVtYXM6IFsKICAgIHsKICAgICAgZmllbGQ6ICdjYXRlZ29yeUlkcycsCiAgICAgIGxhYmVsOiAn5Y2h5Yi45YiG57G7JywKICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICBzbG90OiAnY2F0ZWdvcnknLAogICAgICBydWxlczogWwogICAgICAgIHsKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLAogICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeWNoeWIuOWIhuexuycsCiAgICAgICAgICB0eXBlOiAnYXJyYXknLAogICAgICAgIH0sCiAgICAgIF0sCiAgICB9LAogIF0sCiAgbGFiZWxDb2w6IHsKICAgIHNwYW46IDI0LAogIH0sCiAgd3JhcHBlckNvbDogewogICAgc3BhbjogMjQsCiAgfSwKICBhY3Rpb25Db2xPcHRpb25zOiB7CiAgICBzcGFuOiAyNCwKICAgIHB1c2g6IDAsCiAgfSwKICBzaG93UmVzZXRCdXR0b246IGZhbHNlLAogIGFjdGlvbkFsZ2luOiAnY2VudGVyJywKICBva1RleHQ6ICfnoa7lrponLAogIHN1Ym1pdEJ1dHRvbk9wdGlvbnM6IHsKICAgIGxvYWRpbmc6IGZhbHNlLAogIH0sCn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgeyByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwgbWV0aG9kczogbW9kYWxNZXRob2RzIH0gPSB1c2VNb2RhbCgpOwogICAgY29uc3QgW2hhbmRsZXJGb3JtLCB7IHNldEZpZWxkc1ZhbHVlLCBnZXRGaWVsZHNWYWx1ZSwgc2V0UHJvcHMgfV0gPSB1c2VGb3JtKCk7CgogICAgY29uc3Qgb3BlblRoZU1vZGFsID0gKCkgPT4gewogICAgICBtb2RhbE1ldGhvZHMub3Blbk1vZGFsKCk7CiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gewogICAgICAgIHNldFByb3BzKHRoZUVkaXRGb3JtQ29uZik7CgogICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gewogICAgICAgICAgc2V0RmllbGRzVmFsdWUoewogICAgICAgICAgICBjYXRlZ29yeUlkczogWzkwXSwKICAgICAgICAgIH0pOwogICAgICAgIH0sIDApOwogICAgICB9LCAwKTsKICAgIH07CgogICAgY29uc3Qgc3ViVGhlTW9kYWwgPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGdldEZpZWxkc1ZhbHVlKCksICfliJvlu7rnmoTmlbDmja4nKTsKICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbChmYWxzZSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHBvc3RDcmVhdGVBcGksCiAgICAgIHBvc3RFZGl0QXBpLAogICAgICBwb3N0UmVtb3ZlQXBpLAogICAgICBjcmVhdGVGb3JtQ29uZmlnOiB7CiAgICAgICAgc2NoZW1hczogWwogICAgICAgICAgewogICAgICAgICAgICBmaWVsZDogJ25hbWUnLAogICAgICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgICAgIGxhYmVsOiAn5oi/5Z6L54m56ImyJywKICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMDAsCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGl0ZW1Qcm9wczogewogICAgICAgICAgICAgIGxhYmVsQWxpZ246ICdsZWZ0JywKICAgICAgICAgICAgfSwKICAgICAgICAgICAgcnVsZXM6IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmiYDlnKjmpbzlsYInLAogICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgY29sdW1ucywKICAgICAgdGFibGVBcGksCiAgICAgIGRyYWdBcGksCgogICAgICBoYW5kbGVyRm9ybSwKCiAgICAgIHJlZ2lzdGVyTW9kYWwsCiAgICAgIHN1YlRoZU1vZGFsLAogICAgICBvcGVuVGhlTW9kYWwsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gQGNsaWNrPSJvcGVuVGhlTW9kYWwiPuaJk+W8gDwvYS1idXR0b24+CiAgICA8YS1tb2RhbC1wcm8KICAgICAgQHJlZ2lzdGVyPSJyZWdpc3Rlck1vZGFsIgogICAgICB0aXRsZT0id2F0ZXIiCiAgICAgIDpmb290ZXI9Im51bGwiCiAgICAgIDptaW4taGVpZ2h0PSIxMjAiCiAgICAgIDpib2R5LXN0eWxlPSJ7IGhlaWdodDogJzE4MHB4JyB9IgogICAgICA6ei1pbmRleD0iMTAwMSIKICAgID4KICAgICAgPGEtZm9ybS1wcm8gQHJlZ2lzdGVyPSJoYW5kbGVyRm9ybSIgQHN1Ym1pdD0ic3ViVGhlTW9kYWwiPgogICAgICAgIDx0ZW1wbGF0ZSAjY2F0ZWdvcnk9InsgbW9kZWwsIGZpZWxkIH0iPgogICAgICAgICAgPGEtY2xhc3NpZnkKICAgICAgICAgICAgdi1tb2RlbDp2YWx1ZT0ibW9kZWxbZmllbGRdIgogICAgICAgICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICAgICAgICBwbGFjZWhvbGRlcj0i6K+36YCJ5oup5oi/5Lu35YiG57G7IgogICAgICAgICAgICBhbGxvd0NsZWFyCiAgICAgICAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICAgICAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgICAgICAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgICAgICAgICAgOmNyZWF0ZUFwaT0icG9zdENyZWF0ZUFwaSIKICAgICAgICAgICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgICAgICAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgICAgICAgICByZW1vdmVUaXA9IuehruWumuimgeWIoOmZpOWQlyIKICAgICAgICAgICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgICAgICAgICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgICAgICAgICAgc2hvd1NlYXJjaAogICAgICAgICAgICBkcmF3ZXJUYWJsZURyYWdnYWJsZQogICAgICAgICAgICA6ZHJhd2VyVGFibGVEcmFnQXBpPSJkcmFnQXBpIgogICAgICAgICAgLz4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZm9ybS1wcm8+CiAgICA8L2EtbW9kYWwtcHJvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VNb2RhbCwgdXNlRm9ybSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWyd3YXRlcicsICdhbnRkJywgJ2VsZVVJJywgJ2l2aWV3J10ubWFwKChsYWJlbCwgdmFsdWUpID0+ICh7CiAgICAgIGxhYmVsLAogICAgICB2YWx1ZSwKICAgIH0pKSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0Q3JlYXRlQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ2NyZWF0ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0RWRpdEFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdlZGl0Jyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RSZW1vdmVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZygncmVtb3RlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNvbHVtbnMgPSBbewogIHRpdGxlOiAn5YiG57G757G75Z6LJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAn5YiG57G75ZCN56ewJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn1dOwoKY29uc3QgdGFibGVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9OwoKY29uc3QgZHJhZ0FwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCB0aGVFZGl0Rm9ybUNvbmYgPSB7CiAgc2NoZW1hczogW3sKICAgIGZpZWxkOiAnY2F0ZWdvcnlJZHMnLAogICAgbGFiZWw6ICfljaHliLjliIbnsbsnLAogICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgc2xvdDogJ2NhdGVnb3J5JywKICAgIHJ1bGVzOiBbewogICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeWNoeWIuOWIhuexuycsCiAgICAgIHR5cGU6ICdhcnJheScsCiAgICB9XSwKICB9XSwKICBsYWJlbENvbDogewogICAgc3BhbjogMjQsCiAgfSwKICB3cmFwcGVyQ29sOiB7CiAgICBzcGFuOiAyNCwKICB9LAogIGFjdGlvbkNvbE9wdGlvbnM6IHsKICAgIHNwYW46IDI0LAogICAgcHVzaDogMCwKICB9LAogIHNob3dSZXNldEJ1dHRvbjogZmFsc2UsCiAgYWN0aW9uQWxnaW46ICdjZW50ZXInLAogIG9rVGV4dDogJ+ehruWumicsCiAgc3VibWl0QnV0dG9uT3B0aW9uczogewogICAgbG9hZGluZzogZmFsc2UsCiAgfSwKfTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHsKICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyTW9kYWwsCiAgICAgIG1ldGhvZHM6IG1vZGFsTWV0aG9kcywKICAgIH0gPSB1c2VNb2RhbCgpOwogICAgY29uc3QgW2hhbmRsZXJGb3JtLCB7CiAgICAgIHNldEZpZWxkc1ZhbHVlLAogICAgICBnZXRGaWVsZHNWYWx1ZSwKICAgICAgc2V0UHJvcHMsCiAgICB9XSA9IHVzZUZvcm0oKTsKCiAgICBjb25zdCBvcGVuVGhlTW9kYWwgPSAoKSA9PiB7CiAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoKTsKICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7CiAgICAgICAgc2V0UHJvcHModGhlRWRpdEZvcm1Db25mKTsKICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHsKICAgICAgICAgIHNldEZpZWxkc1ZhbHVlKHsKICAgICAgICAgICAgY2F0ZWdvcnlJZHM6IFs5MF0sCiAgICAgICAgICB9KTsKICAgICAgICB9LCAwKTsKICAgICAgfSwgMCk7CiAgICB9OwoKICAgIGNvbnN0IHN1YlRoZU1vZGFsID0gKCkgPT4gewogICAgICBjb25zb2xlLmxvZyhnZXRGaWVsZHNWYWx1ZSgpLCAn5Yib5bu655qE5pWw5o2uJyk7CiAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoZmFsc2UpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBwb3N0Q3JlYXRlQXBpLAogICAgICBwb3N0RWRpdEFwaSwKICAgICAgcG9zdFJlbW92ZUFwaSwKICAgICAgY3JlYXRlRm9ybUNvbmZpZzogewogICAgICAgIHNjaGVtYXM6IFt7CiAgICAgICAgICBmaWVsZDogJ25hbWUnLAogICAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICAgICAgbGFiZWw6ICfmiL/lnovnibnoibInLAogICAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXlhoXlrrknLAogICAgICAgICAgICBtYXhsZW5ndGg6IDIwMCwKICAgICAgICAgIH0sCiAgICAgICAgICBpdGVtUHJvcHM6IHsKICAgICAgICAgICAgbGFiZWxBbGlnbjogJ2xlZnQnLAogICAgICAgICAgfSwKICAgICAgICAgIHJ1bGVzOiBbewogICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeaJgOWcqOalvOWxgicsCiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLAogICAgICAgICAgfV0sCiAgICAgICAgfV0sCiAgICAgIH0sCiAgICAgIGNvbHVtbnMsCiAgICAgIHRhYmxlQXBpLAogICAgICBkcmFnQXBpLAogICAgICBoYW5kbGVyRm9ybSwKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgc3ViVGhlTW9kYWwsCiAgICAgIG9wZW5UaGVNb2RhbCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[n("div",null,[c(u,{onClick:a.openTheModal},{default:e(()=>[un]),_:1},8,["onClick"]),c(h,{onRegister:a.registerModal,title:"water",footer:null,"min-height":120,"body-style":{height:"180px"},"z-index":1001},{default:e(()=>[c(i,{onRegister:a.handlerForm,onSubmit:a.subTheModal},{category:e(({model:b,field:A})=>[c(l,{value:b[A],"onUpdate:value":Z=>b[A]=Z,style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",mode:"multiple",api:a.getSelectForOptions,createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:a.dragApi},null,8,["value","onUpdate:value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])]),_:1},8,["onRegister","onSubmit"])]),_:1},8,["onRegister"])])]),htmlCode:e(()=>[ln]),jsVersionHtml:e(()=>[kn]),_:1},8,["jsfiddle"])}var gn=I(cn,[["render",rn]]);const Cn=({success:a})=>{setTimeout(()=>{a(["water","antd","eleUI","iview"].map((o,t)=>({label:o,value:t,children:["\u6309\u94AE","\u56FE\u6807","\u8868\u5355","\u6805\u683C"].map((k,r)=>({label:`${o}-${k}`,value:`${t}-${r}`}))})))},1e3)},In=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},An=({params:a,success:o})=>{console.log(a,"edit"),setTimeout(()=>{o([])},1e3)},dn=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},mn=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],bn=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`,children:[{id:`child-${t}`,name:`child-${Math.random()+t}-water`,age:`child-1${t}`}]});setTimeout(()=>{a(o)},1e3)},wn=({success:a})=>{setTimeout(()=>{a([])},1e3)},hn={schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},Bn=d({setup(){return{value3:w("0-0"),getSelectForOptions:Cn,postCreateApi:In,postEditApi:An,postRemoveApi:dn,createFormConfig:hn,columns:mn,tableApi:bn,dragApi:wn}}}),Zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u53EA\u80FD\u9009\u62E9\u5B50\u7EA7"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"allowClear"),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"drawerCreateButtonText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u6DFB\u52A0\u4E00\u7EA7\u5206\u7C7B"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showDropdownAdd"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"showSearch"),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi"),n("span",{class:"token punctuation"},","),s(" FormProProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u6309\u94AE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u56FE\u6807'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u8868\u5355'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u6805\u683C'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("childLabel"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" childValue"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("childLabel"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
            value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("childValue"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" params"),n("span",{class:"token punctuation"},","),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
          age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" createFormConfig"),n("span",{class:"token operator"},":"),s(" FormProProps "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
      component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
      label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
      componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
        maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u53EA\u80FD\u9009\u62E9\u5B50\u7EA7"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"allowClear"),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"drawerCreateButtonText"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u6DFB\u52A0\u4E00\u7EA7\u5206\u7C7B"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showDropdownAdd"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"showSearch"),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token punctuation"},","),s(`
      value`),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u6309\u94AE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u56FE\u6807'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u8868\u5355'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u6805\u683C'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("childLabel"),n("span",{class:"token punctuation"},","),s(" childValue")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("childLabel"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("childValue"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  params`),n("span",{class:"token punctuation"},","),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
        age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" createFormConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
    field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
    label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
    componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
      maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function vn(a,o,t,k,r,g){const u=p("a-classify"),l=p("demo-box");return C(),m(l,{jsfiddle:{us:"Group usage",cn:"\u5206\u7EC4",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5206\u7EC4</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Group usage</p>
`,order:0,title:{"zh-CN":"\u5206\u7EC4","en-US":"Group"},relativePath:"components/classify/demo/children.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9IuWPquiDvemAieaLqeWtkOe6pyIKICAgIGFsbG93Q2xlYXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgIDpjcmVhdGVBcGk9InBvc3RDcmVhdGVBcGkiCiAgICA6ZWRpdEFwaT0icG9zdEVkaXRBcGkiCiAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgcmVtb3ZlVGlwPSLnoa7lrpropoHliKDpmaTlkJciCiAgICA6ZHJhd2VyVGFibGVBcGk9InRhYmxlQXBpIgogICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgIGRyYXdlckNyZWF0ZUJ1dHRvblRleHQ9Iua3u+WKoOS4gOe6p+WIhuexuyIKICAgIDpzaG93RHJvcGRvd25BZGQ9ImZhbHNlIgogICAgc2hvd1NlYXJjaAogICAgZHJhd2VyVGFibGVEcmFnZ2FibGUKICAgIDpkcmF3ZXJUYWJsZURyYWdBcGk9ImRyYWdBcGkiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSwgRm9ybVByb1Byb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKAogICAgICBbJ3dhdGVyJywgJ2FudGQnLCAnZWxlVUknLCAnaXZpZXcnXS5tYXAoKGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+ICh7CiAgICAgICAgbGFiZWwsCiAgICAgICAgdmFsdWUsCiAgICAgICAgY2hpbGRyZW46IFsn5oyJ6ZKuJywgJ+WbvuaghycsICfooajljZUnLCAn5qCF5qC8J10ubWFwKAogICAgICAgICAgKGNoaWxkTGFiZWw6IHN0cmluZywgY2hpbGRWYWx1ZTogbnVtYmVyKSA9PiAoewogICAgICAgICAgICBsYWJlbDogYCR7bGFiZWx9LSR7Y2hpbGRMYWJlbH1gLAogICAgICAgICAgICB2YWx1ZTogYCR7dmFsdWV9LSR7Y2hpbGRWYWx1ZX1gLAogICAgICAgICAgfSksCiAgICAgICAgKSwKICAgICAgfSkpLAogICAgKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RDcmVhdGVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygnY3JlYXRlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RFZGl0QXBpID0gKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZyhwYXJhbXMsICdlZGl0Jyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RSZW1vdmVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygncmVtb3RlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICfliIbnsbvnsbvlnosnLAogICAgZGF0YUluZGV4OiAnbmFtZScsCiAgICBrZXk6ICduYW1lJywKICB9LAogIHsKICAgIHRpdGxlOiAn5YiG57G75ZCN56ewJywKICAgIGRhdGFJbmRleDogJ2FnZScsCiAgICBrZXk6ICdhZ2UnLAogIH0sCl07Cgpjb25zdCB0YWJsZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgewogICAgICAgICAgaWQ6IGBjaGlsZC0ke2luZGV4fWAsCiAgICAgICAgICBuYW1lOiBgY2hpbGQtJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgICAgIGFnZTogYGNoaWxkLTEke2luZGV4fWAsCiAgICAgICAgfSwKICAgICAgXSwKICAgIH0pOwogIH0KICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfTsKY29uc3QgZHJhZ0FwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBjcmVhdGVGb3JtQ29uZmlnOiBGb3JtUHJvUHJvcHMgPSB7CiAgc2NoZW1hczogWwogICAgewogICAgICBmaWVsZDogJ25hbWUnLAogICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgIGxhYmVsOiAn5oi/5Z6L54m56ImyJywKICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgICAgbWF4bGVuZ3RoOiAyMDAsCiAgICAgIH0sCiAgICAgIHJ1bGVzOiBbCiAgICAgICAgewogICAgICAgICAgcmVxdWlyZWQ6IHRydWUsCiAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5omA5Zyo5qW85bGCJywKICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLAogICAgICAgIH0sCiAgICAgIF0sCiAgICB9LAogIF0sCn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUzOiByZWYoJzAtMCcpLAogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBwb3N0Q3JlYXRlQXBpLAogICAgICBwb3N0RWRpdEFwaSwKICAgICAgcG9zdFJlbW92ZUFwaSwKICAgICAgY3JlYXRlRm9ybUNvbmZpZywKICAgICAgY29sdW1ucywKICAgICAgdGFibGVBcGksCiAgICAgIGRyYWdBcGksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9IuWPquiDvemAieaLqeWtkOe6pyIKICAgIGFsbG93Q2xlYXIKICAgIDphcGk9ImdldFNlbGVjdEZvck9wdGlvbnMiCiAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgIDpjcmVhdGVBcGk9InBvc3RDcmVhdGVBcGkiCiAgICA6ZWRpdEFwaT0icG9zdEVkaXRBcGkiCiAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgcmVtb3ZlVGlwPSLnoa7lrpropoHliKDpmaTlkJciCiAgICA6ZHJhd2VyVGFibGVBcGk9InRhYmxlQXBpIgogICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgIGRyYXdlckNyZWF0ZUJ1dHRvblRleHQ9Iua3u+WKoOS4gOe6p+WIhuexuyIKICAgIDpzaG93RHJvcGRvd25BZGQ9ImZhbHNlIgogICAgc2hvd1NlYXJjaAogICAgZHJhd2VyVGFibGVEcmFnZ2FibGUKICAgIDpkcmF3ZXJUYWJsZURyYWdBcGk9ImRyYWdBcGkiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbJ3dhdGVyJywgJ2FudGQnLCAnZWxlVUknLCAnaXZpZXcnXS5tYXAoKGxhYmVsLCB2YWx1ZSkgPT4gKHsKICAgICAgbGFiZWwsCiAgICAgIHZhbHVlLAogICAgICBjaGlsZHJlbjogWyfmjInpkq4nLCAn5Zu+5qCHJywgJ+ihqOWNlScsICfmoIXmoLwnXS5tYXAoKGNoaWxkTGFiZWwsIGNoaWxkVmFsdWUpID0+ICh7CiAgICAgICAgbGFiZWw6IGAke2xhYmVsfS0ke2NoaWxkTGFiZWx9YCwKICAgICAgICB2YWx1ZTogYCR7dmFsdWV9LSR7Y2hpbGRWYWx1ZX1gLAogICAgICB9KSksCiAgICB9KSkpOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdENyZWF0ZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdjcmVhdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdEVkaXRBcGkgPSAoewogIHBhcmFtcywKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2cocGFyYW1zLCAnZWRpdCcpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0UmVtb3ZlQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ3JlbW90ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBjb2x1bW5zID0gW3sKICB0aXRsZTogJ+WIhuexu+exu+WeiycsCiAgZGF0YUluZGV4OiAnbmFtZScsCiAga2V5OiAnbmFtZScsCn0sIHsKICB0aXRsZTogJ+WIhuexu+WQjeensCcsCiAgZGF0YUluZGV4OiAnYWdlJywKICBrZXk6ICdhZ2UnLAp9XTsKCmNvbnN0IHRhYmxlQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc3QgYXJyID0gW107CgogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBpZDogYGNoaWxkLSR7aW5kZXh9YCwKICAgICAgICBuYW1lOiBgY2hpbGQtJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgICBhZ2U6IGBjaGlsZC0xJHtpbmRleH1gLAogICAgICB9XSwKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBkcmFnQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNyZWF0ZUZvcm1Db25maWcgPSB7CiAgc2NoZW1hczogW3sKICAgIGZpZWxkOiAnbmFtZScsCiAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICBsYWJlbDogJ+aIv+Wei+eJueiJsicsCiAgICBjb21wb25lbnRQcm9wczogewogICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgIG1heGxlbmd0aDogMjAwLAogICAgfSwKICAgIHJ1bGVzOiBbewogICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeaJgOWcqOalvOWxgicsCiAgICAgIHR5cGU6ICdzdHJpbmcnLAogICAgfV0sCiAgfV0sCn07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTM6IHJlZignMC0wJyksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHBvc3RDcmVhdGVBcGksCiAgICAgIHBvc3RFZGl0QXBpLAogICAgICBwb3N0UmVtb3ZlQXBpLAogICAgICBjcmVhdGVGb3JtQ29uZmlnLAogICAgICBjb2x1bW5zLAogICAgICB0YWJsZUFwaSwKICAgICAgZHJhZ0FwaSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[c(u,{value:a.value3,"onUpdate:value":o[0]||(o[0]=i=>a.value3=i),style:{width:"200px"},placeholder:"\u53EA\u80FD\u9009\u62E9\u5B50\u7EA7",allowClear:"",api:a.getSelectForOptions,createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,drawerCreateButtonText:"\u6DFB\u52A0\u4E00\u7EA7\u5206\u7C7B",showDropdownAdd:!1,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:a.dragApi},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"])]),htmlCode:e(()=>[Zn]),jsVersionHtml:e(()=>[yn]),_:1},8,["jsfiddle"])}var Gn=I(Bn,[["render",vn]]);const fn=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},Wn=({success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},Kn=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},Vn=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],Fn=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{a(o)},1e3)},Yn=({success:a})=>{setTimeout(()=>{a([])},1e3)},Rn=d({setup(){return{value3:w([80]),getSelectForOptions:[{label:"\u6C34\u6EF4",value:90,subLabel:"Water is \u6700\u68D2"},{label:"\u963F\u91CC",value:80,subLabel:"Antd is \u6700\u68D2"},{label:"2\u6C34\u6EF4",value:190,subLabel:"Water is \u6700\u68D2"},{label:"3\u963F\u91CC",value:180,subLabel:"Antd is \u6700\u68D2"}],postCreateApi:fn,postEditApi:Wn,postRemoveApi:Kn,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:Vn,tableApi:Fn,dragApi:Yn}}}),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"allowClear"),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"showSearch"),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":selectOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"labelKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("label"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"valueKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6C34\u6EF4'"),n("span",{class:"token punctuation"},","),s(`
          value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(`
          subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Water is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u963F\u91CC'"),n("span",{class:"token punctuation"},","),s(`
          value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
          subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antd is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2\u6C34\u6EF4'"),n("span",{class:"token punctuation"},","),s(`
          value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"190"),n("span",{class:"token punctuation"},","),s(`
          subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Water is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3\u963F\u91CC'"),n("span",{class:"token punctuation"},","),s(`
          value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),s(`
          subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antd is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
            componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
              maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value3"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"allowClear"),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"showSearch"),s(`
    `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
    `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":selectOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"labelKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("label"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"valueKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("value"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      value3`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      getSelectForOptions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6C34\u6EF4'"),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(`
        subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Water is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u963F\u91CC'"),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
        subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antd is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2\u6C34\u6EF4'"),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"190"),n("span",{class:"token punctuation"},","),s(`
        subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Water is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3\u963F\u91CC'"),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),s(`
        subLabel`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Antd is \u6700\u68D2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
            maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Jn(a,o,t,k,r,g){const u=p("a-classify"),l=p("demo-box");return C(),m(l,{jsfiddle:{us:"`selectOptions`",cn:"`selectOptions` \u8BBE\u7F6E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>selectOptions</code> \u8BBE\u7F6E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>selectOptions</code></p>
`,order:0,title:{"zh-CN":"\u4E0B\u62C9\u6570\u636E\u914D\u7F6E","en-US":"Multiple"},relativePath:"components/classify/demo/options.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9Iuivt+mAieaLqeaIv+S7t+WIhuexuyIKICAgIGFsbG93Q2xlYXIKICAgIDpjcmVhdGVGb3JtQ29uZmlnPSJjcmVhdGVGb3JtQ29uZmlnIgogICAgOmNyZWF0ZUFwaT0icG9zdENyZWF0ZUFwaSIKICAgIDplZGl0QXBpPSJwb3N0RWRpdEFwaSIKICAgIDpyZW1vdmVBcGk9InBvc3RSZW1vdmVBcGkiCiAgICByZW1vdmVUaXA9IuehruWumuimgeWIoOmZpOWQlyIKICAgIG1vZGU9Im11bHRpcGxlIgogICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgIDpkcmF3ZXJUYWJsZUNvbHVtbnM9ImNvbHVtbnMiCiAgICBzaG93U2VhcmNoCiAgICBkcmF3ZXJUYWJsZURyYWdnYWJsZQogICAgOmRyYXdlclRhYmxlRHJhZ0FwaT0iZHJhZ0FwaSIKICAgIDpzZWxlY3RPcHRpb25zPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgbGFiZWxLZXk9ImxhYmVsIgogICAgdmFsdWVLZXk9InZhbHVlIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IHBvc3RDcmVhdGVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygnY3JlYXRlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RFZGl0QXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2coJ2VkaXQnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdFJlbW92ZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKCdyZW1vdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgY29sdW1ucyA9IFsKICB7CiAgICB0aXRsZTogJ+WIhuexu+exu+WeiycsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICfliIbnsbvlkI3np7AnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgfSwKXTsKCmNvbnN0IHRhYmxlQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc3QgYXJyOiBhbnkgPSBbXTsKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgIH0pOwogIH0KICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfTsKY29uc3QgZHJhZ0FwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUzOiByZWYoWzgwXSksCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnM6IFsKICAgICAgICB7CiAgICAgICAgICBsYWJlbDogJ+awtOa7tCcsCiAgICAgICAgICB2YWx1ZTogOTAsCiAgICAgICAgICBzdWJMYWJlbDogJ1dhdGVyIGlzIOacgOajkicsCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICBsYWJlbDogJ+mYv+mHjCcsCiAgICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgICBzdWJMYWJlbDogJ0FudGQgaXMg5pyA5qOSJywKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgIGxhYmVsOiAnMuawtOa7tCcsCiAgICAgICAgICB2YWx1ZTogMTkwLAogICAgICAgICAgc3ViTGFiZWw6ICdXYXRlciBpcyDmnIDmo5InLAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgbGFiZWw6ICcz6Zi/6YeMJywKICAgICAgICAgIHZhbHVlOiAxODAsCiAgICAgICAgICBzdWJMYWJlbDogJ0FudGQgaXMg5pyA5qOSJywKICAgICAgICB9LAogICAgICBdLAogICAgICBwb3N0Q3JlYXRlQXBpLAogICAgICBwb3N0RWRpdEFwaSwKICAgICAgcG9zdFJlbW92ZUFwaSwKICAgICAgY3JlYXRlRm9ybUNvbmZpZzogewogICAgICAgIHNjaGVtYXM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgZmllbGQ6ICduYW1lJywKICAgICAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICAgICAgICBsYWJlbDogJ+aIv+Wei+eJueiJsicsCiAgICAgICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXlhoXlrrknLAogICAgICAgICAgICAgIG1heGxlbmd0aDogMjAwLAogICAgICAgICAgICB9LAogICAgICAgICAgICBpdGVtUHJvcHM6IHsKICAgICAgICAgICAgICBsYWJlbEFsaWduOiAnbGVmdCcsCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHJ1bGVzOiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsCiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5omA5Zyo5qW85bGCJywKICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0sCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIGNvbHVtbnMsCiAgICAgIHRhYmxlQXBpLAogICAgICBkcmFnQXBpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgcGxhY2Vob2xkZXI9Iuivt+mAieaLqeaIv+S7t+WIhuexuyIKICAgIGFsbG93Q2xlYXIKICAgIDpjcmVhdGVGb3JtQ29uZmlnPSJjcmVhdGVGb3JtQ29uZmlnIgogICAgOmNyZWF0ZUFwaT0icG9zdENyZWF0ZUFwaSIKICAgIDplZGl0QXBpPSJwb3N0RWRpdEFwaSIKICAgIDpyZW1vdmVBcGk9InBvc3RSZW1vdmVBcGkiCiAgICByZW1vdmVUaXA9IuehruWumuimgeWIoOmZpOWQlyIKICAgIG1vZGU9Im11bHRpcGxlIgogICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgIDpkcmF3ZXJUYWJsZUNvbHVtbnM9ImNvbHVtbnMiCiAgICBzaG93U2VhcmNoCiAgICBkcmF3ZXJUYWJsZURyYWdnYWJsZQogICAgOmRyYXdlclRhYmxlRHJhZ0FwaT0iZHJhZ0FwaSIKICAgIDpzZWxlY3RPcHRpb25zPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgbGFiZWxLZXk9ImxhYmVsIgogICAgdmFsdWVLZXk9InZhbHVlIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IHBvc3RDcmVhdGVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZygnY3JlYXRlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RFZGl0QXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ2VkaXQnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdFJlbW92ZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdyZW1vdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICfliIbnsbvnsbvlnosnLAogIGRhdGFJbmRleDogJ25hbWUnLAogIGtleTogJ25hbWUnLAp9LCB7CiAgdGl0bGU6ICfliIbnsbvlkI3np7AnLAogIGRhdGFJbmRleDogJ2FnZScsCiAga2V5OiAnYWdlJywKfV07Cgpjb25zdCB0YWJsZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBkcmFnQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTM6IHJlZihbODBdKSwKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9uczogW3sKICAgICAgICBsYWJlbDogJ+awtOa7tCcsCiAgICAgICAgdmFsdWU6IDkwLAogICAgICAgIHN1YkxhYmVsOiAnV2F0ZXIgaXMg5pyA5qOSJywKICAgICAgfSwgewogICAgICAgIGxhYmVsOiAn6Zi/6YeMJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgICAgc3ViTGFiZWw6ICdBbnRkIGlzIOacgOajkicsCiAgICAgIH0sIHsKICAgICAgICBsYWJlbDogJzLmsLTmu7QnLAogICAgICAgIHZhbHVlOiAxOTAsCiAgICAgICAgc3ViTGFiZWw6ICdXYXRlciBpcyDmnIDmo5InLAogICAgICB9LCB7CiAgICAgICAgbGFiZWw6ICcz6Zi/6YeMJywKICAgICAgICB2YWx1ZTogMTgwLAogICAgICAgIHN1YkxhYmVsOiAnQW50ZCBpcyDmnIDmo5InLAogICAgICB9XSwKICAgICAgcG9zdENyZWF0ZUFwaSwKICAgICAgcG9zdEVkaXRBcGksCiAgICAgIHBvc3RSZW1vdmVBcGksCiAgICAgIGNyZWF0ZUZvcm1Db25maWc6IHsKICAgICAgICBzY2hlbWFzOiBbewogICAgICAgICAgZmllbGQ6ICduYW1lJywKICAgICAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgICAgIGxhYmVsOiAn5oi/5Z6L54m56ImyJywKICAgICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5YaF5a65JywKICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMDAsCiAgICAgICAgICB9LAogICAgICAgICAgaXRlbVByb3BzOiB7CiAgICAgICAgICAgIGxhYmVsQWxpZ246ICdsZWZ0JywKICAgICAgICAgIH0sCiAgICAgICAgICBydWxlczogW3sKICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsCiAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmiYDlnKjmpbzlsYInLAogICAgICAgICAgICB0eXBlOiAnc3RyaW5nJywKICAgICAgICAgIH1dLAogICAgICAgIH1dLAogICAgICB9LAogICAgICBjb2x1bW5zLAogICAgICB0YWJsZUFwaSwKICAgICAgZHJhZ0FwaSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[c(u,{value:a.value3,"onUpdate:value":o[0]||(o[0]=i=>a.value3=i),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u623F\u4EF7\u5206\u7C7B",allowClear:"",createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",mode:"multiple",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,showSearch:"",drawerTableDraggable:"",drawerTableDragApi:a.dragApi,selectOptions:a.getSelectForOptions,labelKey:"label",valueKey:"value"},null,8,["value","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi","selectOptions"])]),htmlCode:e(()=>[Hn]),jsVersionHtml:e(()=>[Xn]),_:1},8,["jsfiddle"])}var Tn=I(Rn,[["render",Jn]]);const Sn=({success:a})=>{setTimeout(()=>{a(["water","antd","eleUI","iview"].map((o,t)=>({label:o,value:t})))},1e3)},Nn=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},xn=({success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},Dn=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},zn=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],Pn=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{a(o)},1e3)},On=({success:a})=>{setTimeout(()=>{a([])},1e3)},Ln=d({components:{IconBytedPlus:W},setup(){const{register:a,methods:o}=G(),[t,k]=f({showActionButtonGroup:!1,labelCol:{span:4},wrapperCol:{span:20},schemas:[{field:"name",component:"RadioGroup",label:"\u623F\u578B\u7279\u8272",componentProps:{options:[{label:"\u6A2A\u7740",value:1},{label:"\u7AD6\u7740",value:2}]},itemProps:{labelAlign:"left"}}]});return{registerModal:a,openModal:()=>{o.openModal()},simpleForm:t,getSelectForOptions:Sn,postCreateApi:Nn,postEditApi:xn,postRemoveApi:Dn,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:zn,tableApi:Pn,dragApi:On,theClassifyValue:w()}}}),Un=s(" \u6269\u5C55"),jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
      `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":showDropdownManger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":showDropdownAdd"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#optionButtonSlot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ loading }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("link"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openModal"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedPlus")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
          \u6269\u5C55`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-classify")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-pro")]),s(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("registerModal"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("water"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":min-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("30"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":body-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ height: "),n("span",{class:"token punctuation"},"'"),s("70px"),n("span",{class:"token punctuation"},"'"),s(" }"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-form-pro")]),s(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("simpleForm"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useModal"),n("span",{class:"token punctuation"},","),s(" useForm "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u6269\u5C55 start"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// \u6269\u5C55 end"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u6269\u5C55 start"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" register"),n("span",{class:"token operator"},":"),s(" registerModal"),n("span",{class:"token punctuation"},","),s(" methods"),n("span",{class:"token operator"},":"),s(" modalMethods "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("simpleForm"),n("span",{class:"token punctuation"},","),s(" simpleFormMethods"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      showActionButtonGroup`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      labelCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      wrapperCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            options`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6A2A\u7740'"),n("span",{class:"token punctuation"},","),s(`
                value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7AD6\u7740'"),n("span",{class:"token punctuation"},","),s(`
                value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openModal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u6269\u5C55 end"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u6269\u5C55 start"),s(`
      registerModal`),n("span",{class:"token punctuation"},","),s(`
      openModal`),n("span",{class:"token punctuation"},","),s(`
      simpleForm`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// \u6269\u5C55 end"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
            componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
              maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"drawerTableDraggable"),s(`
      `),n("span",{class:"token attr-name"},":drawerTableDragApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dragApi"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":showDropdownManger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":showDropdownAdd"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#optionButtonSlot"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ loading }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("link"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openModal"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconBytedPlus")]),s(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("["),n("span",{class:"token punctuation"},"'"),s("currentColor"),n("span",{class:"token punctuation"},"'"),s("]"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
          \u6269\u5C55`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-classify")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal-pro")]),s(`
      `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("registerModal"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("water"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":min-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("30"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":body-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ height: "),n("span",{class:"token punctuation"},"'"),s("70px"),n("span",{class:"token punctuation"},"'"),s(" }"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-form-pro")]),s(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("simpleForm"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal-pro")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useModal"),n("span",{class:"token punctuation"},","),s(" useForm "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token punctuation"},","),s(`
      value`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dragApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u6269\u5C55 start"),s(`
  components`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// \u6269\u5C55 end"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u6269\u5C55 start"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
      register`),n("span",{class:"token operator"},":"),s(" registerModal"),n("span",{class:"token punctuation"},","),s(`
      methods`),n("span",{class:"token operator"},":"),s(" modalMethods"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("simpleForm"),n("span",{class:"token punctuation"},","),s(" simpleFormMethods"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      showActionButtonGroup`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      labelCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      wrapperCol`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        span`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
        field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
        component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),s(`
        label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
        componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          options`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6A2A\u7740'"),n("span",{class:"token punctuation"},","),s(`
            value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7AD6\u7740'"),n("span",{class:"token punctuation"},","),s(`
            value`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openModal"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      modalMethods`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u6269\u5C55 end"),s(`


    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// \u6269\u5C55 start"),s(`
      registerModal`),n("span",{class:"token punctuation"},","),s(`
      openModal`),n("span",{class:"token punctuation"},","),s(`
      simpleForm`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// \u6269\u5C55 end"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
            maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      dragApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Mn(a,o,t,k,r,g){const u=p("IconBytedPlus"),l=p("a-button"),i=p("a-classify"),h=p("a-form-pro"),B=p("a-modal-pro"),b=p("demo-box");return C(),m(b,{jsfiddle:{us:"Btn Slot usage",cn:"\u6309\u94AE\u6269\u5C55",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6309\u94AE\u6269\u5C55</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Btn Slot usage</p>
`,order:0,title:{"zh-CN":"\u6309\u94AE\u6269\u5C55","en-US":"Btn Slot"},relativePath:"components/classify/demo/slot.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1jbGFzc2lmeQogICAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICBwbGFjZWhvbGRlcj0i6K+36YCJ5oupIgogICAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgICAgOmNyZWF0ZUFwaT0icG9zdENyZWF0ZUFwaSIKICAgICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgICByZW1vdmVUaXA9IuehruWumuimgeWIoOmZpOWQlyIKICAgICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgICAgZHJhd2VyVGFibGVEcmFnZ2FibGUKICAgICAgOmRyYXdlclRhYmxlRHJhZ0FwaT0iZHJhZ0FwaSIKICAgICAgOm1heC10YWctY291bnQ9IjEiCiAgICAgIDpzaG93RHJvcGRvd25NYW5nZXI9ImZhbHNlIgogICAgICA6c2hvd0Ryb3Bkb3duQWRkPSJmYWxzZSIKICAgID4KICAgICAgPHRlbXBsYXRlICNvcHRpb25CdXR0b25TbG90PSJ7IGxvYWRpbmcgfSI+CiAgICAgICAgPGEtYnV0dG9uIHR5cGU9ImxpbmsiIEBjbGljaz0ib3Blbk1vZGFsIiA6ZGlzYWJsZWQ9ImxvYWRpbmciPgogICAgICAgICAgPHRlbXBsYXRlICNpY29uPgogICAgICAgICAgICA8SWNvbkJ5dGVkUGx1cyA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPgogICAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAgIOaJqeWxlTwvYS1idXR0b24KICAgICAgICA+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtY2xhc3NpZnk+CiAgICA8YS1tb2RhbC1wcm8KICAgICAgQHJlZ2lzdGVyPSJyZWdpc3Rlck1vZGFsIgogICAgICB0aXRsZT0id2F0ZXIiCiAgICAgIDptaW4taGVpZ2h0PSIzMCIKICAgICAgOmJvZHktc3R5bGU9InsgaGVpZ2h0OiAnNzBweCcgfSIKICAgID4KICAgICAgPGEtZm9ybS1wcm8gQHJlZ2lzdGVyPSJzaW1wbGVGb3JtIiAvPgogICAgPC9hLW1vZGFsLXBybz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgdXNlTW9kYWwsIHVzZUZvcm0gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCBJY29uQnl0ZWRQbHVzIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXBsdXMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKAogICAgICBbJ3dhdGVyJywgJ2FudGQnLCAnZWxlVUknLCAnaXZpZXcnXS5tYXAoKGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+ICh7CiAgICAgICAgbGFiZWwsCiAgICAgICAgdmFsdWUsCiAgICAgIH0pKSwKICAgICk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0Q3JlYXRlQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2coJ2NyZWF0ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0RWRpdEFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKCdlZGl0Jyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RSZW1vdmVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygncmVtb3RlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICfliIbnsbvnsbvlnosnLAogICAgZGF0YUluZGV4OiAnbmFtZScsCiAgICBrZXk6ICduYW1lJywKICB9LAogIHsKICAgIHRpdGxlOiAn5YiG57G75ZCN56ewJywKICAgIGRhdGFJbmRleDogJ2FnZScsCiAgICBrZXk6ICdhZ2UnLAogIH0sCl07Cgpjb25zdCB0YWJsZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICB9KTsKICB9CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn07CmNvbnN0IGRyYWdBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICAvLyDmianlsZUgc3RhcnQKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRQbHVzLAogIH0sCiAgLy8g5omp5bGVIGVuZAogIHNldHVwKCkgewogICAgLy8g5omp5bGVIHN0YXJ0CiAgICBjb25zdCB7IHJlZ2lzdGVyOiByZWdpc3Rlck1vZGFsLCBtZXRob2RzOiBtb2RhbE1ldGhvZHMgfSA9IHVzZU1vZGFsKCk7CiAgICBjb25zdCBbc2ltcGxlRm9ybSwgc2ltcGxlRm9ybU1ldGhvZHNdID0gdXNlRm9ybSh7CiAgICAgIHNob3dBY3Rpb25CdXR0b25Hcm91cDogZmFsc2UsCiAgICAgIGxhYmVsQ29sOiB7CiAgICAgICAgc3BhbjogNCwKICAgICAgfSwKICAgICAgd3JhcHBlckNvbDogewogICAgICAgIHNwYW46IDIwLAogICAgICB9LAogICAgICBzY2hlbWFzOiBbCiAgICAgICAgewogICAgICAgICAgZmllbGQ6ICduYW1lJywKICAgICAgICAgIGNvbXBvbmVudDogJ1JhZGlvR3JvdXAnLAogICAgICAgICAgbGFiZWw6ICfmiL/lnovnibnoibInLAogICAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgICAgb3B0aW9uczogWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGxhYmVsOiAn5qiq552AJywKICAgICAgICAgICAgICAgIHZhbHVlOiAxLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbGFiZWw6ICfnq5bnnYAnLAogICAgICAgICAgICAgICAgdmFsdWU6IDIsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgICBpdGVtUHJvcHM6IHsKICAgICAgICAgICAgbGFiZWxBbGlnbjogJ2xlZnQnLAogICAgICAgICAgfSwKICAgICAgICB9LAogICAgICBdLAogICAgfSk7CiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7CiAgICAgIG1vZGFsTWV0aG9kcy5vcGVuTW9kYWwoKTsKICAgIH07CiAgICAvLyDmianlsZUgZW5kCiAgICByZXR1cm4gewogICAgICAvLyDmianlsZUgc3RhcnQKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgb3Blbk1vZGFsLAogICAgICBzaW1wbGVGb3JtLAogICAgICAvLyDmianlsZUgZW5kCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHBvc3RDcmVhdGVBcGksCiAgICAgIHBvc3RFZGl0QXBpLAogICAgICBwb3N0UmVtb3ZlQXBpLAogICAgICBjcmVhdGVGb3JtQ29uZmlnOiB7CiAgICAgICAgc2NoZW1hczogWwogICAgICAgICAgewogICAgICAgICAgICBmaWVsZDogJ25hbWUnLAogICAgICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgICAgIGxhYmVsOiAn5oi/5Z6L54m56ImyJywKICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMDAsCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGl0ZW1Qcm9wczogewogICAgICAgICAgICAgIGxhYmVsQWxpZ246ICdsZWZ0JywKICAgICAgICAgICAgfSwKICAgICAgICAgICAgcnVsZXM6IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmiYDlnKjmpbzlsYInLAogICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgY29sdW1ucywKICAgICAgdGFibGVBcGksCiAgICAgIGRyYWdBcGksCiAgICAgIHRoZUNsYXNzaWZ5VmFsdWU6IHJlZigpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1jbGFzc2lmeQogICAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICBwbGFjZWhvbGRlcj0i6K+36YCJ5oupIgogICAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgICA6Y3JlYXRlRm9ybUNvbmZpZz0iY3JlYXRlRm9ybUNvbmZpZyIKICAgICAgOmNyZWF0ZUFwaT0icG9zdENyZWF0ZUFwaSIKICAgICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgICA6cmVtb3ZlQXBpPSJwb3N0UmVtb3ZlQXBpIgogICAgICByZW1vdmVUaXA9IuehruWumuimgeWIoOmZpOWQlyIKICAgICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgICAgOmRyYXdlclRhYmxlQ29sdW1ucz0iY29sdW1ucyIKICAgICAgZHJhd2VyVGFibGVEcmFnZ2FibGUKICAgICAgOmRyYXdlclRhYmxlRHJhZ0FwaT0iZHJhZ0FwaSIKICAgICAgOm1heC10YWctY291bnQ9IjEiCiAgICAgIDpzaG93RHJvcGRvd25NYW5nZXI9ImZhbHNlIgogICAgICA6c2hvd0Ryb3Bkb3duQWRkPSJmYWxzZSIKICAgID4KICAgICAgPHRlbXBsYXRlICNvcHRpb25CdXR0b25TbG90PSJ7IGxvYWRpbmcgfSI+CiAgICAgICAgPGEtYnV0dG9uIHR5cGU9ImxpbmsiIEBjbGljaz0ib3Blbk1vZGFsIiA6ZGlzYWJsZWQ9ImxvYWRpbmciPgogICAgICAgICAgPHRlbXBsYXRlICNpY29uPgogICAgICAgICAgICA8SWNvbkJ5dGVkUGx1cyA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPgogICAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAgIOaJqeWxlTwvYS1idXR0b24KICAgICAgICA+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtY2xhc3NpZnk+CiAgICA8YS1tb2RhbC1wcm8KICAgICAgQHJlZ2lzdGVyPSJyZWdpc3Rlck1vZGFsIgogICAgICB0aXRsZT0id2F0ZXIiCiAgICAgIDptaW4taGVpZ2h0PSIzMCIKICAgICAgOmJvZHktc3R5bGU9InsgaGVpZ2h0OiAnNzBweCcgfSIKICAgID4KICAgICAgPGEtZm9ybS1wcm8gQHJlZ2lzdGVyPSJzaW1wbGVGb3JtIiAvPgogICAgPC9hLW1vZGFsLXBybz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgdXNlTW9kYWwsIHVzZUZvcm0gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCBJY29uQnl0ZWRQbHVzIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXBsdXMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFsnd2F0ZXInLCAnYW50ZCcsICdlbGVVSScsICdpdmlldyddLm1hcCgobGFiZWwsIHZhbHVlKSA9PiAoewogICAgICBsYWJlbCwKICAgICAgdmFsdWUsCiAgICB9KSkpOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdENyZWF0ZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdjcmVhdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdEVkaXRBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZygnZWRpdCcpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0UmVtb3ZlQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ3JlbW90ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBjb2x1bW5zID0gW3sKICB0aXRsZTogJ+WIhuexu+exu+WeiycsCiAgZGF0YUluZGV4OiAnbmFtZScsCiAga2V5OiAnbmFtZScsCn0sIHsKICB0aXRsZTogJ+WIhuexu+WQjeensCcsCiAgZGF0YUluZGV4OiAnYWdlJywKICBrZXk6ICdhZ2UnLAp9XTsKCmNvbnN0IHRhYmxlQXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc3QgYXJyID0gW107CgogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgfSk7CiAgfQoKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGRyYWdBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICAvLyDmianlsZUgc3RhcnQKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRQbHVzLAogIH0sCgogIC8vIOaJqeWxlSBlbmQKICBzZXR1cCgpIHsKICAgIC8vIOaJqeWxlSBzdGFydAogICAgY29uc3QgewogICAgICByZWdpc3RlcjogcmVnaXN0ZXJNb2RhbCwKICAgICAgbWV0aG9kczogbW9kYWxNZXRob2RzLAogICAgfSA9IHVzZU1vZGFsKCk7CiAgICBjb25zdCBbc2ltcGxlRm9ybSwgc2ltcGxlRm9ybU1ldGhvZHNdID0gdXNlRm9ybSh7CiAgICAgIHNob3dBY3Rpb25CdXR0b25Hcm91cDogZmFsc2UsCiAgICAgIGxhYmVsQ29sOiB7CiAgICAgICAgc3BhbjogNCwKICAgICAgfSwKICAgICAgd3JhcHBlckNvbDogewogICAgICAgIHNwYW46IDIwLAogICAgICB9LAogICAgICBzY2hlbWFzOiBbewogICAgICAgIGZpZWxkOiAnbmFtZScsCiAgICAgICAgY29tcG9uZW50OiAnUmFkaW9Hcm91cCcsCiAgICAgICAgbGFiZWw6ICfmiL/lnovnibnoibInLAogICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICBvcHRpb25zOiBbewogICAgICAgICAgICBsYWJlbDogJ+aoquedgCcsCiAgICAgICAgICAgIHZhbHVlOiAxLAogICAgICAgICAgfSwgewogICAgICAgICAgICBsYWJlbDogJ+erluedgCcsCiAgICAgICAgICAgIHZhbHVlOiAyLAogICAgICAgICAgfV0sCiAgICAgICAgfSwKICAgICAgICBpdGVtUHJvcHM6IHsKICAgICAgICAgIGxhYmVsQWxpZ246ICdsZWZ0JywKICAgICAgICB9LAogICAgICB9XSwKICAgIH0pOwoKICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHsKICAgICAgbW9kYWxNZXRob2RzLm9wZW5Nb2RhbCgpOwogICAgfTsgLy8g5omp5bGVIGVuZAoKCiAgICByZXR1cm4gewogICAgICAvLyDmianlsZUgc3RhcnQKICAgICAgcmVnaXN0ZXJNb2RhbCwKICAgICAgb3Blbk1vZGFsLAogICAgICBzaW1wbGVGb3JtLAogICAgICAvLyDmianlsZUgZW5kCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHBvc3RDcmVhdGVBcGksCiAgICAgIHBvc3RFZGl0QXBpLAogICAgICBwb3N0UmVtb3ZlQXBpLAogICAgICBjcmVhdGVGb3JtQ29uZmlnOiB7CiAgICAgICAgc2NoZW1hczogW3sKICAgICAgICAgIGZpZWxkOiAnbmFtZScsCiAgICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgICBsYWJlbDogJ+aIv+Wei+eJueiJsicsCiAgICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgICAgICAgIG1heGxlbmd0aDogMjAwLAogICAgICAgICAgfSwKICAgICAgICAgIGl0ZW1Qcm9wczogewogICAgICAgICAgICBsYWJlbEFsaWduOiAnbGVmdCcsCiAgICAgICAgICB9LAogICAgICAgICAgcnVsZXM6IFt7CiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLAogICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5omA5Zyo5qW85bGCJywKICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsCiAgICAgICAgICB9XSwKICAgICAgICB9XSwKICAgICAgfSwKICAgICAgY29sdW1ucywKICAgICAgdGFibGVBcGksCiAgICAgIGRyYWdBcGksCiAgICAgIHRoZUNsYXNzaWZ5VmFsdWU6IHJlZigpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[n("div",null,[c(i,{value:a.theClassifyValue,"onUpdate:value":o[0]||(o[0]=A=>a.theClassifyValue=A),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9",api:a.getSelectForOptions,createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,drawerTableDraggable:"",drawerTableDragApi:a.dragApi,"max-tag-count":1,showDropdownManger:!1,showDropdownAdd:!1},{optionButtonSlot:e(({loading:A})=>[c(l,{type:"link",onClick:a.openModal,disabled:A},{icon:e(()=>[c(u,{colors:["currentColor"]})]),default:e(()=>[Un]),_:2},1032,["onClick","disabled"])]),_:1},8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableDragApi"]),c(B,{onRegister:a.registerModal,title:"water","min-height":30,"body-style":{height:"70px"}},{default:e(()=>[c(h,{onRegister:a.simpleForm},null,8,["onRegister"])]),_:1},8,["onRegister"])])]),htmlCode:e(()=>[jn]),jsVersionHtml:e(()=>[Qn]),_:1},8,["jsfiddle"])}var En=I(Ln,[["render",Mn]]);const qn=({success:a})=>{setTimeout(()=>{a(["water","antd","eleUI","iview"].map((o,t)=>({label:o,value:t})))},1e3)},$n=({success:a})=>{console.log("create"),setTimeout(()=>{a([])},1e3)},_n=({success:a})=>{console.log("edit"),setTimeout(()=>{a([])},1e3)},ns=({success:a})=>{console.log("remote"),setTimeout(()=>{a([])},1e3)},ss=[{title:"\u5206\u7C7B\u7C7B\u578B",dataIndex:"name",key:"name"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"age",key:"age"}],as=({success:a})=>{const o=[];for(let t=0;t<100;t++)o.push({id:`${t}`,name:`${Math.random()+t}-water`,age:`1${t}`});setTimeout(()=>{a(o)},1e3)},ts=d({setup(){return{getSelectForOptions:qn,postCreateApi:$n,postEditApi:_n,postRemoveApi:ns,drawerTableEditDisabled:a=>a.id<1,drawerTableRemoveDisabled:a=>a.id<1,createFormConfig:{schemas:[{field:"name",component:"Input",label:"\u623F\u578B\u7279\u8272",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:200},itemProps:{labelAlign:"left"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42",type:"string"}]}]},columns:ss,tableApi:as,theClassifyValue:w()}}}),os=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableEditDisabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("drawerTableEditDisabled"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableRemoveDisabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("drawerTableRemoveDisabled"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" AjaxApi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" number")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        label`),n("span",{class:"token punctuation"},","),s(`
        value`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
    dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
    key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" AjaxApi")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr"),n("span",{class:"token operator"},":"),s(" any "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"drawerTableEditDisabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("record"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" record"),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"drawerTableRemoveDisabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("record"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" record"),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
            component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
            label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
            componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
              maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(`
                required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
                message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
                type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ps=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-classify")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("theClassifyValue"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createFormConfig"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("createFormConfig"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":createApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postCreateApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":editApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postEditApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":removeApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("postRemoveApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"removeTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u786E\u5B9A\u8981\u5220\u9664\u5417"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableApi"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableApi"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableColumns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableEditDisabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("drawerTableEditDisabled"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":drawerTableRemoveDisabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("drawerTableRemoveDisabled"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getSelectForOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'eleUI'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'iview'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("label"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      label`),n("span",{class:"token punctuation"},","),s(`
      value`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postCreateApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'create'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postEditApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"postRemoveApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'remote'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" columns "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u7C7B\u578B'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5206\u7C7B\u540D\u79F0'"),n("span",{class:"token punctuation"},","),s(`
  dataIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"tableApi"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  success`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),s(`
      postCreateApi`),n("span",{class:"token punctuation"},","),s(`
      postEditApi`),n("span",{class:"token punctuation"},","),s(`
      postRemoveApi`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"drawerTableEditDisabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"record"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" record"),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"drawerTableRemoveDisabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"record"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" record"),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      createFormConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        schemas`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
          field`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),s(`
          label`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u623F\u578B\u7279\u8272'"),n("span",{class:"token punctuation"},","),s(`
          componentProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            placeholder`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),s(`
            maxlength`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          itemProps`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            labelAlign`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          rules`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
            required`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8BF7\u8F93\u5165\u6240\u5728\u697C\u5C42'"),n("span",{class:"token punctuation"},","),s(`
            type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'string'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      columns`),n("span",{class:"token punctuation"},","),s(`
      tableApi`),n("span",{class:"token punctuation"},","),s(`
      theClassifyValue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function es(a,o,t,k,r,g){const u=p("a-classify"),l=p("demo-box");return C(),m(l,{jsfiddle:{us:"Basic usage",cn:"\u7981\u7528\u64CD\u4F5C",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7981\u7528\u64CD\u4F5C</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic usage</p>
`,order:0,title:{"zh-CN":"\u7981\u7528\u64CD\u4F5C","en-US":"TableDisabled"},relativePath:"components/classify/demo/table-disabled.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSLor7fpgInmi6kiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgOmNyZWF0ZUZvcm1Db25maWc9ImNyZWF0ZUZvcm1Db25maWciCiAgICA6Y3JlYXRlQXBpPSJwb3N0Q3JlYXRlQXBpIgogICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgOnJlbW92ZUFwaT0icG9zdFJlbW92ZUFwaSIKICAgIHJlbW92ZVRpcD0i56Gu5a6a6KaB5Yig6Zmk5ZCXIgogICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgIDpkcmF3ZXJUYWJsZUNvbHVtbnM9ImNvbHVtbnMiCiAgICA6ZHJhd2VyVGFibGVFZGl0RGlzYWJsZWQ9ImRyYXdlclRhYmxlRWRpdERpc2FibGVkIgogICAgOmRyYXdlclRhYmxlUmVtb3ZlRGlzYWJsZWQ9ImRyYXdlclRhYmxlUmVtb3ZlRGlzYWJsZWQiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcygKICAgICAgWyd3YXRlcicsICdhbnRkJywgJ2VsZVVJJywgJ2l2aWV3J10ubWFwKChsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiAoewogICAgICAgIGxhYmVsLAogICAgICAgIHZhbHVlLAogICAgICB9KSksCiAgICApOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdENyZWF0ZUFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIGNvbnNvbGUubG9nKCdjcmVhdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdEVkaXRBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zb2xlLmxvZygnZWRpdCcpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBwb3N0UmVtb3ZlQXBpID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgY29uc29sZS5sb2coJ3JlbW90ZScpOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIHRpdGxlOiAn5YiG57G757G75Z6LJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ+WIhuexu+WQjeensCcsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LApdOwoKY29uc3QgdGFibGVBcGkgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHBvc3RDcmVhdGVBcGksCiAgICAgIHBvc3RFZGl0QXBpLAogICAgICBwb3N0UmVtb3ZlQXBpLAogICAgICBkcmF3ZXJUYWJsZUVkaXREaXNhYmxlZDogKHJlY29yZDogYW55KSA9PiB7CiAgICAgICAgcmV0dXJuIHJlY29yZC5pZCA8IDE7CiAgICAgIH0sCiAgICAgIGRyYXdlclRhYmxlUmVtb3ZlRGlzYWJsZWQ6IChyZWNvcmQ6IGFueSkgPT4gewogICAgICAgIHJldHVybiByZWNvcmQuaWQgPCAxOwogICAgICB9LAogICAgICBjcmVhdGVGb3JtQ29uZmlnOiB7CiAgICAgICAgc2NoZW1hczogWwogICAgICAgICAgewogICAgICAgICAgICBmaWVsZDogJ25hbWUnLAogICAgICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgICAgIGxhYmVsOiAn5oi/5Z6L54m56ImyJywKICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgICAgICAgICAgbWF4bGVuZ3RoOiAyMDAsCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGl0ZW1Qcm9wczogewogICAgICAgICAgICAgIGxhYmVsQWxpZ246ICdsZWZ0JywKICAgICAgICAgICAgfSwKICAgICAgICAgICAgcnVsZXM6IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSwKICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmiYDlnKjmpbzlsYInLAogICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgY29sdW1ucywKICAgICAgdGFibGVBcGksCiAgICAgIHRoZUNsYXNzaWZ5VmFsdWU6IHJlZigpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNsYXNzaWZ5CiAgICB2LW1vZGVsOnZhbHVlPSJ0aGVDbGFzc2lmeVZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAyMDBweCIKICAgIHBsYWNlaG9sZGVyPSLor7fpgInmi6kiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgOmNyZWF0ZUZvcm1Db25maWc9ImNyZWF0ZUZvcm1Db25maWciCiAgICA6Y3JlYXRlQXBpPSJwb3N0Q3JlYXRlQXBpIgogICAgOmVkaXRBcGk9InBvc3RFZGl0QXBpIgogICAgOnJlbW92ZUFwaT0icG9zdFJlbW92ZUFwaSIKICAgIHJlbW92ZVRpcD0i56Gu5a6a6KaB5Yig6Zmk5ZCXIgogICAgOmRyYXdlclRhYmxlQXBpPSJ0YWJsZUFwaSIKICAgIDpkcmF3ZXJUYWJsZUNvbHVtbnM9ImNvbHVtbnMiCiAgICA6ZHJhd2VyVGFibGVFZGl0RGlzYWJsZWQ9ImRyYXdlclRhYmxlRWRpdERpc2FibGVkIgogICAgOmRyYXdlclRhYmxlUmVtb3ZlRGlzYWJsZWQ9ImRyYXdlclRhYmxlUmVtb3ZlRGlzYWJsZWQiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbJ3dhdGVyJywgJ2FudGQnLCAnZWxlVUknLCAnaXZpZXcnXS5tYXAoKGxhYmVsLCB2YWx1ZSkgPT4gKHsKICAgICAgbGFiZWwsCiAgICAgIHZhbHVlLAogICAgfSkpKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RDcmVhdGVBcGkgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBjb25zb2xlLmxvZygnY3JlYXRlJyk7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFtdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHBvc3RFZGl0QXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgY29uc29sZS5sb2coJ2VkaXQnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgcG9zdFJlbW92ZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnNvbGUubG9nKCdyZW1vdGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW10pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICfliIbnsbvnsbvlnosnLAogIGRhdGFJbmRleDogJ25hbWUnLAogIGtleTogJ25hbWUnLAp9LCB7CiAgdGl0bGU6ICfliIbnsbvlkI3np7AnLAogIGRhdGFJbmRleDogJ2FnZScsCiAga2V5OiAnYWdlJywKfV07Cgpjb25zdCB0YWJsZUFwaSA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgcG9zdENyZWF0ZUFwaSwKICAgICAgcG9zdEVkaXRBcGksCiAgICAgIHBvc3RSZW1vdmVBcGksCiAgICAgIGRyYXdlclRhYmxlRWRpdERpc2FibGVkOiByZWNvcmQgPT4gewogICAgICAgIHJldHVybiByZWNvcmQuaWQgPCAxOwogICAgICB9LAogICAgICBkcmF3ZXJUYWJsZVJlbW92ZURpc2FibGVkOiByZWNvcmQgPT4gewogICAgICAgIHJldHVybiByZWNvcmQuaWQgPCAxOwogICAgICB9LAogICAgICBjcmVhdGVGb3JtQ29uZmlnOiB7CiAgICAgICAgc2NoZW1hczogW3sKICAgICAgICAgIGZpZWxkOiAnbmFtZScsCiAgICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgICBsYWJlbDogJ+aIv+Wei+eJueiJsicsCiAgICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWGheWuuScsCiAgICAgICAgICAgIG1heGxlbmd0aDogMjAwLAogICAgICAgICAgfSwKICAgICAgICAgIGl0ZW1Qcm9wczogewogICAgICAgICAgICBsYWJlbEFsaWduOiAnbGVmdCcsCiAgICAgICAgICB9LAogICAgICAgICAgcnVsZXM6IFt7CiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLAogICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5omA5Zyo5qW85bGCJywKICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsCiAgICAgICAgICB9XSwKICAgICAgICB9XSwKICAgICAgfSwKICAgICAgY29sdW1ucywKICAgICAgdGFibGVBcGksCiAgICAgIHRoZUNsYXNzaWZ5VmFsdWU6IHJlZigpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[c(u,{value:a.theClassifyValue,"onUpdate:value":o[0]||(o[0]=i=>a.theClassifyValue=i),style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9",api:a.getSelectForOptions,createFormConfig:a.createFormConfig,createApi:a.postCreateApi,editApi:a.postEditApi,removeApi:a.postRemoveApi,removeTip:"\u786E\u5B9A\u8981\u5220\u9664\u5417",drawerTableApi:a.tableApi,drawerTableColumns:a.columns,drawerTableEditDisabled:a.drawerTableEditDisabled,drawerTableRemoveDisabled:a.drawerTableRemoveDisabled},null,8,["value","api","createFormConfig","createApi","editApi","removeApi","drawerTableApi","drawerTableColumns","drawerTableEditDisabled","drawerTableRemoveDisabled"])]),htmlCode:e(()=>[os]),jsVersionHtml:e(()=>[ps]),_:1},8,["jsfiddle"])}var cs=I(ts,[["render",es]]);const us={pageData:{title:"Classify",description:"",frontmatter:{category:"Components",subtitle:"\u5206\u7C7B\u9009\u62E9\u5668",type:"\u6570\u636E\u5F55\u5165",title:"Classify",cover:"https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"\u63D2\u69FD",slug:"\u63D2\u69FD",content:""}],relativePath:"components/classify/index.zh-CN.md",content:`
\u53EA\u4E3A\u5206\u7C7B\u5B9A\u5236\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u63D0\u4EA4\u4E00\u7EA7\u6216\u8005\u4E8C\u7EA7\u5206\u7C7B\u7684\u65F6\u5019

## API

&gt; \u6269\u5C55\u4E8E Select \u7EC4\u4EF6\u3002\u66F4\u591A\u53C2\u6570\u53C2\u8003 [select](./select-cn)

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| value(v-model) | \u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE | string\\|string\\[]\\|number\\|number\\[] | - |  |
| api | \u4E0B\u62C9\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| apiParams | \u4E0B\u62C9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |  |
| removeApi | \u5220\u9664\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| removeApiParams | \u5220\u9664\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |  |
| removeTip | \u5220\u9664\u63A5\u53E3\u63D0\u793A | string | - |  |
| removeKey | \u5220\u9664\u7684\u9ED8\u8BA4\u552F\u4E00\u7D22\u5F15\uFF0C\u7528\u4E8E loading | string | id |  |
| editApi | \u7F16\u8F91\u63A5\u53E3\u8BF7\u6C42\uFF0C\u81EA\u52A8\u4F20\u9012 id \uFF0C\u6570\u636E\u5217\u8868\u5FC5\u987B\u6709\u4E2A id\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| editApiParams | \u7F16\u8F91\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |  |
| createApi | \u521B\u5EFA\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| createApiParams | \u521B\u5EFA\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |  |
| createFormConfig | \u6DFB\u52A0\u5F39\u6846\u7684\u8868\u5355\u914D\u7F6E | [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126) | {} |  |
| createTitle | \u6DFB\u52A0\u7684\u5F39\u6846\u6807\u9898 | string | \u6DFB\u52A0 |  |
| editTitle | \u7F16\u8F91\u7684\u5F39\u6846\u6807\u9898 | string | \u7F16\u8F91 |  |
| drawerTitle | \u6DFB\u52A0\u7684\u62BD\u5C49\u6807\u9898 | string | \u7BA1\u7406 |  |
| drawerWidth | \u6DFB\u52A0\u7684\u62BD\u5C49\u5BBD\u5EA6 | number | 650 |  |
| drawerZIndex | \u6DFB\u52A0\u7684\u62BD\u5C49\u5C42\u7EA7\u9AD8\u5EA6 | number | 1000 |  |
| drawerCreateButtonText | \u62BD\u5C49\u6DFB\u52A0\u7684\u6587\u6848 | string | \u6DFB\u52A0 |  |
| drawerTableApi | \u62BD\u5C49\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| drawerTableApiParams | \u62BD\u5C49\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |  |
| drawerTableColumns | \u62BD\u5C49\u8868\u683C\u5217\u7684\u914D\u7F6E | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414) | - |  |
| drawerTableDraggable | \u662F\u5426\u62D6\u62FD\u6392\u5E8F | boolean | - |  |
| drawerTableDragKey | \u4F1A\u8FD4\u56DE\u6240\u6709\u6392\u597D\u5E8F\u7684 id \u503C\u7684\u6570\u7EC4 | string | id |  |
| drawerTableDragApi | \u62D6\u62FD\u6392\u5E8F\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| subLabelKey | \u5B50\u9009\u9879\u7684\u63CF\u8FF0\u5B57\u6BB5\uFF0C\u5F53\u8BBE\u7F6E\u624D\u4F1A\u663E\u793A | string | - |  |
| labelKey | \u6587\u5B57\u7684\u5B57\u6BB5 | string | label |  |
| valueKey | \u503C\u7684\u5B57\u6BB5 | string | value |  |
| selectOptions | selectOptions \u6570\u636E | array&amp;lt;{value, label, [subLabel]}&gt; | - |  |
| showDropdownAdd | \u662F\u5426\u663E\u793A\u4E0B\u62C9\u4E2D\u7684\u6DFB\u52A0\u6309\u94AE | boolean | true |  |
| showDropdownManger | \u662F\u5426\u663E\u793A\u4E0B\u62C9\u4E2D\u7684\u7BA1\u7406\u6309\u94AE | boolean | true |  |
| drawerTableEditDisabled | \u7BA1\u7406\u8868\u683C\u7F16\u8F91\u7981\u7528\u7684\u5904\u7406 | Function | () =&gt; false | 4.12.0 |
| drawerTableRemoveDisabled | \u7BA1\u7406\u8868\u683C\u7F16\u8F91\u5220\u9664\u7684\u5904\u7406 | Function | () =&gt; false | 4.12.0 |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0  | \u8BF4\u660E             | \u56DE\u8C03\u53C2\u6570 |
| --------- | ---------------- | -------- |
| on-edit   | \u521B\u5EFA\u7F16\u8F91\u7684\u65F6\u56DE\u8C03 | function |
| on-remove | \u5220\u9664\u7684\u65F6\u56DE\u8C03     | function |

### \u63D2\u69FD

| \u63D2\u69FD\u540D\u79F0         | \u8BF4\u660E             | \u56DE\u8C03\u53C2\u6570  |
| ---------------- | ---------------- | --------- |
| optionButtonSlot | \u4E0B\u62C9\u9009\u9879\u6309\u94AE\u6269\u5C55 | {loading} |
`,html:`<p>\u53EA\u4E3A\u5206\u7C7B\u5B9A\u5236\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u9700\u8981\u63D0\u4EA4\u4E00\u7EA7\u6216\u8005\u4E8C\u7EA7\u5206\u7C7B\u7684\u65F6\u5019</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<blockquote>
<p>\u6269\u5C55\u4E8E Select \u7EC4\u4EF6\u3002\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./select-cn.html">select</a></p>
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
<td>value(v-model)</td>
<td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string|string[]|number|number[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>\u4E0B\u62C9\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>apiParams</td>
<td>\u4E0B\u62C9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>removeApi</td>
<td>\u5220\u9664\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>removeApiParams</td>
<td>\u5220\u9664\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>removeTip</td>
<td>\u5220\u9664\u63A5\u53E3\u63D0\u793A</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>removeKey</td>
<td>\u5220\u9664\u7684\u9ED8\u8BA4\u552F\u4E00\u7D22\u5F15\uFF0C\u7528\u4E8E loading</td>
<td>string</td>
<td>id</td>
<td></td>
</tr>
<tr>
<td>editApi</td>
<td>\u7F16\u8F91\u63A5\u53E3\u8BF7\u6C42\uFF0C\u81EA\u52A8\u4F20\u9012 id \uFF0C\u6570\u636E\u5217\u8868\u5FC5\u987B\u6709\u4E2A id\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>editApiParams</td>
<td>\u7F16\u8F91\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>createApi</td>
<td>\u521B\u5EFA\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>createApiParams</td>
<td>\u521B\u5EFA\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>createFormConfig</td>
<td>\u6DFB\u52A0\u5F39\u6846\u7684\u8868\u5355\u914D\u7F6E</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126" target="_blank" rel="noopener noreferrer">FormSchema</a></td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>createTitle</td>
<td>\u6DFB\u52A0\u7684\u5F39\u6846\u6807\u9898</td>
<td>string</td>
<td>\u6DFB\u52A0</td>
<td></td>
</tr>
<tr>
<td>editTitle</td>
<td>\u7F16\u8F91\u7684\u5F39\u6846\u6807\u9898</td>
<td>string</td>
<td>\u7F16\u8F91</td>
<td></td>
</tr>
<tr>
<td>drawerTitle</td>
<td>\u6DFB\u52A0\u7684\u62BD\u5C49\u6807\u9898</td>
<td>string</td>
<td>\u7BA1\u7406</td>
<td></td>
</tr>
<tr>
<td>drawerWidth</td>
<td>\u6DFB\u52A0\u7684\u62BD\u5C49\u5BBD\u5EA6</td>
<td>number</td>
<td>650</td>
<td></td>
</tr>
<tr>
<td>drawerZIndex</td>
<td>\u6DFB\u52A0\u7684\u62BD\u5C49\u5C42\u7EA7\u9AD8\u5EA6</td>
<td>number</td>
<td>1000</td>
<td></td>
</tr>
<tr>
<td>drawerCreateButtonText</td>
<td>\u62BD\u5C49\u6DFB\u52A0\u7684\u6587\u6848</td>
<td>string</td>
<td>\u6DFB\u52A0</td>
<td></td>
</tr>
<tr>
<td>drawerTableApi</td>
<td>\u62BD\u5C49\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>drawerTableApiParams</td>
<td>\u62BD\u5C49\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>drawerTableColumns</td>
<td>\u62BD\u5C49\u8868\u683C\u5217\u7684\u914D\u7F6E</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>drawerTableDraggable</td>
<td>\u662F\u5426\u62D6\u62FD\u6392\u5E8F</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>drawerTableDragKey</td>
<td>\u4F1A\u8FD4\u56DE\u6240\u6709\u6392\u597D\u5E8F\u7684 id \u503C\u7684\u6570\u7EC4</td>
<td>string</td>
<td>id</td>
<td></td>
</tr>
<tr>
<td>drawerTableDragApi</td>
<td>\u62D6\u62FD\u6392\u5E8F\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>subLabelKey</td>
<td>\u5B50\u9009\u9879\u7684\u63CF\u8FF0\u5B57\u6BB5\uFF0C\u5F53\u8BBE\u7F6E\u624D\u4F1A\u663E\u793A</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>labelKey</td>
<td>\u6587\u5B57\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>label</td>
<td></td>
</tr>
<tr>
<td>valueKey</td>
<td>\u503C\u7684\u5B57\u6BB5</td>
<td>string</td>
<td>value</td>
<td></td>
</tr>
<tr>
<td>selectOptions</td>
<td>selectOptions \u6570\u636E</td>
<td>array&lt;{value, label, [subLabel]}&gt;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showDropdownAdd</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u4E2D\u7684\u6DFB\u52A0\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>showDropdownManger</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u4E2D\u7684\u7BA1\u7406\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>drawerTableEditDisabled</td>
<td>\u7BA1\u7406\u8868\u683C\u7F16\u8F91\u7981\u7528\u7684\u5904\u7406</td>
<td>Function</td>
<td>() =&gt; false</td>
<td>4.12.0</td>
</tr>
<tr>
<td>drawerTableRemoveDisabled</td>
<td>\u7BA1\u7406\u8868\u683C\u7F16\u8F91\u5220\u9664\u7684\u5904\u7406</td>
<td>Function</td>
<td>() =&gt; false</td>
<td>4.12.0</td>
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
<td>on-edit</td>
<td>\u521B\u5EFA\u7F16\u8F91\u7684\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
<tr>
<td>on-remove</td>
<td>\u5220\u9664\u7684\u65F6\u56DE\u8C03</td>
<td>function</td>
</tr>
</tbody>
</table>
<h3 id="\u63D2\u69FD">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u63D2\u69FD\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>optionButtonSlot</td>
<td>\u4E0B\u62C9\u9009\u9879\u6309\u94AE\u6269\u5C55</td>
<td>{loading}</td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243696}},ls={class:"markdown"},is=v('<p>\u53EA\u4E3A\u5206\u7C7B\u5B9A\u5236\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u9700\u8981\u63D0\u4EA4\u4E00\u7EA7\u6216\u8005\u4E8C\u7EA7\u5206\u7C7B\u7684\u65F6\u5019</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><blockquote><p>\u6269\u5C55\u4E8E Select \u7EC4\u4EF6\u3002\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./select-cn.html">select</a></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td><td></td></tr><tr><td>api</td><td>\u4E0B\u62C9\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>apiParams</td><td>\u4E0B\u62C9\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>removeApi</td><td>\u5220\u9664\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>removeApiParams</td><td>\u5220\u9664\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>removeTip</td><td>\u5220\u9664\u63A5\u53E3\u63D0\u793A</td><td>string</td><td>-</td><td></td></tr><tr><td>removeKey</td><td>\u5220\u9664\u7684\u9ED8\u8BA4\u552F\u4E00\u7D22\u5F15\uFF0C\u7528\u4E8E loading</td><td>string</td><td>id</td><td></td></tr><tr><td>editApi</td><td>\u7F16\u8F91\u63A5\u53E3\u8BF7\u6C42\uFF0C\u81EA\u52A8\u4F20\u9012 id \uFF0C\u6570\u636E\u5217\u8868\u5FC5\u987B\u6709\u4E2A id\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>editApiParams</td><td>\u7F16\u8F91\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>createApi</td><td>\u521B\u5EFA\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>createApiParams</td><td>\u521B\u5EFA\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>createFormConfig</td><td>\u6DFB\u52A0\u5F39\u6846\u7684\u8868\u5355\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126" target="_blank" rel="noopener noreferrer">FormSchema</a></td><td>{}</td><td></td></tr><tr><td>createTitle</td><td>\u6DFB\u52A0\u7684\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u6DFB\u52A0</td><td></td></tr><tr><td>editTitle</td><td>\u7F16\u8F91\u7684\u5F39\u6846\u6807\u9898</td><td>string</td><td>\u7F16\u8F91</td><td></td></tr><tr><td>drawerTitle</td><td>\u6DFB\u52A0\u7684\u62BD\u5C49\u6807\u9898</td><td>string</td><td>\u7BA1\u7406</td><td></td></tr><tr><td>drawerWidth</td><td>\u6DFB\u52A0\u7684\u62BD\u5C49\u5BBD\u5EA6</td><td>number</td><td>650</td><td></td></tr><tr><td>drawerZIndex</td><td>\u6DFB\u52A0\u7684\u62BD\u5C49\u5C42\u7EA7\u9AD8\u5EA6</td><td>number</td><td>1000</td><td></td></tr><tr><td>drawerCreateButtonText</td><td>\u62BD\u5C49\u6DFB\u52A0\u7684\u6587\u6848</td><td>string</td><td>\u6DFB\u52A0</td><td></td></tr><tr><td>drawerTableApi</td><td>\u62BD\u5C49\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>drawerTableApiParams</td><td>\u62BD\u5C49\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>drawerTableColumns</td><td>\u62BD\u5C49\u8868\u683C\u5217\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/table.ts#414" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>drawerTableDraggable</td><td>\u662F\u5426\u62D6\u62FD\u6392\u5E8F</td><td>boolean</td><td>-</td><td></td></tr><tr><td>drawerTableDragKey</td><td>\u4F1A\u8FD4\u56DE\u6240\u6709\u6392\u597D\u5E8F\u7684 id \u503C\u7684\u6570\u7EC4</td><td>string</td><td>id</td><td></td></tr><tr><td>drawerTableDragApi</td><td>\u62D6\u62FD\u6392\u5E8F\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>subLabelKey</td><td>\u5B50\u9009\u9879\u7684\u63CF\u8FF0\u5B57\u6BB5\uFF0C\u5F53\u8BBE\u7F6E\u624D\u4F1A\u663E\u793A</td><td>string</td><td>-</td><td></td></tr><tr><td>labelKey</td><td>\u6587\u5B57\u7684\u5B57\u6BB5</td><td>string</td><td>label</td><td></td></tr><tr><td>valueKey</td><td>\u503C\u7684\u5B57\u6BB5</td><td>string</td><td>value</td><td></td></tr><tr><td>selectOptions</td><td>selectOptions \u6570\u636E</td><td>array&lt;{value, label, [subLabel]}&gt;</td><td>-</td><td></td></tr><tr><td>showDropdownAdd</td><td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u4E2D\u7684\u6DFB\u52A0\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showDropdownManger</td><td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u4E2D\u7684\u7BA1\u7406\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>drawerTableEditDisabled</td><td>\u7BA1\u7406\u8868\u683C\u7F16\u8F91\u7981\u7528\u7684\u5904\u7406</td><td>Function</td><td>() =&gt; false</td><td>4.12.0</td></tr><tr><td>drawerTableRemoveDisabled</td><td>\u7BA1\u7406\u8868\u683C\u7F16\u8F91\u5220\u9664\u7684\u5904\u7406</td><td>Function</td><td>() =&gt; false</td><td>4.12.0</td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>on-edit</td><td>\u521B\u5EFA\u7F16\u8F91\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>on-remove</td><td>\u5220\u9664\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr></tbody></table><h3 id="\u63D2\u69FD">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>optionButtonSlot</td><td>\u4E0B\u62C9\u9009\u9879\u6309\u94AE\u6269\u5C55</td><td>{loading}</td></tr></tbody></table>',10),ks=[is];function rs(a,o,t,k,r,g){return C(),y("article",ls,ks)}var gs=I(us,[["render",rs]]);const Cs={pageData:{title:"Checkbox",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"Checkbox",cover:"https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:"Props"},{level:3,title:"Props",slug:"Props",content:"Checkbox"},{level:3,title:"Methods",slug:"Methods",content:"Checkbox"}],relativePath:"components/checkbox/index.en-US.md",content:`
Checkbox component.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## API

### Props

#### Checkbox

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autofocus | get focus when component mounted | boolean | false |  |
| checked(v-model) | Specifies whether the checkbox is selected. | boolean | false |  |
| disabled | Disable checkbox | boolean | false |  |
| indeterminate | indeterminate checked state of checkbox | boolean | false |  |
| value | value of checkbox in CheckboxGroup | boolean \\| string \\| number | - |  |

#### events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | The callback function that is triggered when the state changes. | Function(e:Event) |  |

#### Checkbox Group

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | Disable all checkboxes | boolean | false |  |
| name | The \`name\` property of all \`input[type=&quot;checkbox&quot;]\` children | string | - | 1.5.0 |
| options | Specifies options, you can customize \`label\` with slot = &quot;label&quot; slot-scope=&quot;option&quot; | string\\[] \\| Array&amp;lt;{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }&gt; | \\[] |  |
| value(v-model) | Used for setting the currently selected value. | string\\[] | \\[] |  |

#### events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | The callback function that is triggered when the state changes. | Function(checkedValue) |  |

### Methods

#### Checkbox

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |
`,html:`<p>Checkbox component.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>Used for selecting multiple values from several options.</li>
<li>If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Props">Props <a class="header-anchor" href="#Props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<h4 id="Checkbox">Checkbox <a class="header-anchor" href="#Checkbox">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
<td>autofocus</td>
<td>get focus when component mounted</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>checked(v-model)</td>
<td>Specifies whether the checkbox is selected.</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disable checkbox</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>indeterminate</td>
<td>indeterminate checked state of checkbox</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>value</td>
<td>value of checkbox in CheckboxGroup</td>
<td>boolean | string | number</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="events">events <a class="header-anchor" href="#events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
<td>The callback function that is triggered when the state changes.</td>
<td>Function(e:Event)</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="Checkbox-Group">Checkbox Group <a class="header-anchor" href="#Checkbox-Group">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
<td>disabled</td>
<td>Disable all checkboxes</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>The <code>name</code> property of all <code>input[type=&quot;checkbox&quot;]</code> children</td>
<td>string</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>options</td>
<td>Specifies options, you can customize <code>label</code> with slot = &quot;label&quot; slot-scope=&quot;option&quot;</td>
<td>string[] | Array&lt;{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }&gt;</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>Used for setting the currently selected value.</td>
<td>string[]</td>
<td>[]</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="events-1">events <a class="header-anchor" href="#events-1">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
<td>The callback function that is triggered when the state changes.</td>
<td>Function(checkedValue)</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Methods">Methods <a class="header-anchor" href="#Methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<h4 id="Checkbox-1">Checkbox <a class="header-anchor" href="#Checkbox-1">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
`,lastUpdated:1701878243693}},Is={class:"markdown"},As=v('<p>Checkbox component.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Used for selecting multiple values from several options.</li><li>If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Props">Props <a class="header-anchor" href="#Props"><span aria-hidden="true" class="anchor">#</span></a></h3><h4 id="Checkbox">Checkbox <a class="header-anchor" href="#Checkbox"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>autofocus</td><td>get focus when component mounted</td><td>boolean</td><td>false</td><td></td></tr><tr><td>checked(v-model)</td><td>Specifies whether the checkbox is selected.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>Disable checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>indeterminate</td><td>indeterminate checked state of checkbox</td><td>boolean</td><td>false</td><td></td></tr><tr><td>value</td><td>value of checkbox in CheckboxGroup</td><td>boolean | string | number</td><td>-</td><td></td></tr></tbody></table><h4 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>The callback function that is triggered when the state changes.</td><td>Function(e:Event)</td><td></td></tr></tbody></table><h4 id="Checkbox-Group">Checkbox Group <a class="header-anchor" href="#Checkbox-Group"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>disabled</td><td>Disable all checkboxes</td><td>boolean</td><td>false</td><td></td></tr><tr><td>name</td><td>The <code>name</code> property of all <code>input[type=&quot;checkbox&quot;]</code> children</td><td>string</td><td>-</td><td>1.5.0</td></tr><tr><td>options</td><td>Specifies options, you can customize <code>label</code> with slot = &quot;label&quot; slot-scope=&quot;option&quot;</td><td>string[] | Array&lt;{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }&gt;</td><td>[]</td><td></td></tr><tr><td>value(v-model)</td><td>Used for setting the currently selected value.</td><td>string[]</td><td>[]</td><td></td></tr></tbody></table><h4 id="events-1">events <a class="header-anchor" href="#events-1"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>The callback function that is triggered when the state changes.</td><td>Function(checkedValue)</td><td></td></tr></tbody></table><h3 id="Methods">Methods <a class="header-anchor" href="#Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><h4 id="Checkbox-1">Checkbox <a class="header-anchor" href="#Checkbox-1"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Name</th><th>Description</th><th>Version</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td><td></td></tr><tr><td>focus()</td><td>get focus</td><td></td></tr></tbody></table>',16),ds=[As];function ms(a,o,t,k,r,g){return C(),y("article",Is,ds)}var bs=I(Cs,[["render",ms]]);const ws=d({CN:gs,US:bs,components:{Basic:x,Multiple:$,TheModalPro:gn,Children:Gn,Options:Tn,Slot:En,TableDisabled:cs},setup(){return{}}});function hs(a,o,t,k,r,g){const u=p("Basic"),l=p("Multiple"),i=p("TheModalPro"),h=p("Children"),B=p("Options"),b=p("Slot"),A=p("TableDisabled"),Z=p("demo-sort");return C(),m(Z,null,{default:e(()=>[c(u),c(l),c(i),c(h),c(B),c(b),c(A)]),_:1})}var ys=I(ws,[["render",hs]]);export{ys as default};

import{d as m,aq as l,J as d,bN as I,bO as o,e as p,H as t,bP as h,G as n,bR as H,k as G,o as sn,E as x,cb as L}from"./vendor.0f0e4632.js";import{o as B,f as b,_ as C,p as an,q as on,A as J,r as N}from"./index.f6b32fa6.js";const en=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"age-diy",dataIndex:"ageDiy",key:"ageDiy",slots:{customRender:"ageDiy"}}];function cn({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{c(e)},1e3)}const pn=m({components:{[B.name]:B},setup(){const[s]=b({api:cn,columns:en,actionColumn:{width:360,title:"\u56FA\u5B9A\u53F3\u8FB9\u7684\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});return{actionRegister:s,handleDelete:c=>{console.log(c,"delete")},handleEdit:c=>{console.log(c,"edit")},handleOpen:c=>{console.log(c,"open")}}}}),un=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("actionRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#ageDiy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" {{ record.age }}-\u5E74\u9F84 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-action")]),t(`
        `),n("span",{class:"token attr-name"},":actions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
          {
            label: `),n("span",{class:"token punctuation"},"'"),t("\u5220\u9664"),n("span",{class:"token punctuation"},"'"),t(`,
            onClick: handleDelete.bind(null, record),
          },
          {
            label: `),n("span",{class:"token punctuation"},"'"),t("\u7F16\u8F91"),n("span",{class:"token punctuation"},"'"),t(`,
            onClick: handleEdit.bind(null, record),
          },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":dropDownActions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
          {
            label: `),n("span",{class:"token punctuation"},"'"),t("\u542F\u7528"),n("span",{class:"token punctuation"},"'"),t(`,
            onClick: handleOpen.bind(null, record),
          },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable"),n("span",{class:"token punctuation"},","),t(" TableAction "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age-diy'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ageDiy'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ageDiy'"),n("span",{class:"token punctuation"},","),t(`
    slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" customRender"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ageDiy'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token punctuation"},"["),t("TableAction"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" TableAction"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("actionRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      actionColumn`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"360"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u56FA\u5B9A\u53F3\u8FB9\u7684\u64CD\u4F5C'"),n("span",{class:"token punctuation"},","),t(`
        dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
        slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" customRender"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      actionRegister`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleDelete"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"record"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("record"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'delete'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleEdit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"record"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("record"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleOpen"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"record"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("record"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("actionRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#ageDiy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" {{ record.age }}-\u5E74\u9F84 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-action")]),t(`
        `),n("span",{class:"token attr-name"},":actions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
          {
            label: `),n("span",{class:"token punctuation"},"'"),t("\u5220\u9664"),n("span",{class:"token punctuation"},"'"),t(`,
            onClick: handleDelete.bind(null, record),
          },
          {
            label: `),n("span",{class:"token punctuation"},"'"),t("\u7F16\u8F91"),n("span",{class:"token punctuation"},"'"),t(`,
            onClick: handleEdit.bind(null, record),
          },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":dropDownActions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
          {
            label: `),n("span",{class:"token punctuation"},"'"),t("\u542F\u7528"),n("span",{class:"token punctuation"},"'"),t(`,
            onClick: handleOpen.bind(null, record),
          },
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable"),n("span",{class:"token punctuation"},","),t(" TableAction "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age-diy'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ageDiy'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ageDiy'"),n("span",{class:"token punctuation"},","),t(`
  slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    customRender`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ageDiy'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token punctuation"},"["),t("TableAction"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" TableAction"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("actionRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      actionColumn`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"360"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u56FA\u5B9A\u53F3\u8FB9\u7684\u64CD\u4F5C'"),n("span",{class:"token punctuation"},","),t(`
        dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
        slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          customRender`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      actionRegister`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleDelete"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"record"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("record"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'delete'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleEdit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"record"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("record"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleOpen"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"record"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("record"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function kn(s,c,e,a,r,k){const u=l("a-table-action"),i=l("a-table-pro"),A=l("demo-box");return d(),I(A,{jsfiddle:{us:"Action1.",cn:"\u64CD\u4F5C\u7684 Action\u3002\u7EDF\u4E00\u4F7F\u7528 `bodyCell` \u63D2\u69FD\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u64CD\u4F5C\u7684 Action\u3002\u7EDF\u4E00\u4F7F\u7528 <code>bodyCell</code> \u63D2\u69FD\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Action1.</p>
`,order:0,title:{"zh-CN":"\u64CD\u4F5C\u7684 Action","en-US":"Action1"},relativePath:"components/table-pro/demo/action.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImFjdGlvblJlZ2lzdGVyIj4KICAgIDx0ZW1wbGF0ZSAjYWdlRGl5PSJ7IHJlY29yZCB9Ij4ge3sgcmVjb3JkLmFnZSB9fS3lubTpvoQgPC90ZW1wbGF0ZT4KICAgIDx0ZW1wbGF0ZSAjYWN0aW9uPSJ7IHJlY29yZCB9Ij4KICAgICAgPGEtdGFibGUtYWN0aW9uCiAgICAgICAgOmFjdGlvbnM9IlsKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICfliKDpmaQnLAogICAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVEZWxldGUuYmluZChudWxsLCByZWNvcmQpLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICfnvJbovpEnLAogICAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVFZGl0LmJpbmQobnVsbCwgcmVjb3JkKSwKICAgICAgICAgIH0sCiAgICAgICAgXSIKICAgICAgICA6ZHJvcERvd25BY3Rpb25zPSJbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn5ZCv55SoJywKICAgICAgICAgICAgb25DbGljazogaGFuZGxlT3Blbi5iaW5kKG51bGwsIHJlY29yZCksCiAgICAgICAgICB9LAogICAgICAgIF0iCiAgICAgIC8+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlLCBUYWJsZUFjdGlvbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICduYW1lJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FnZScsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LAogIHsKICAgIHRpdGxlOiAnQWRkcmVzcycsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICAgIGtleTogJ2FkZHJlc3MnLAogIH0sCiAgewogICAgdGl0bGU6ICdhZ2UtZGl5JywKICAgIGRhdGFJbmRleDogJ2FnZURpeScsCiAgICBrZXk6ICdhZ2VEaXknLAogICAgc2xvdHM6IHsgY3VzdG9tUmVuZGVyOiAnYWdlRGl5JyB9LAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICB9KTsKICB9CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgW1RhYmxlQWN0aW9uLm5hbWVdOiBUYWJsZUFjdGlvbiwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgW2FjdGlvblJlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgICAgYWN0aW9uQ29sdW1uOiB7CiAgICAgICAgd2lkdGg6IDM2MCwKICAgICAgICB0aXRsZTogJ+WbuuWumuWPs+i+ueeahOaTjeS9nCcsCiAgICAgICAgZGF0YUluZGV4OiAnYWN0aW9uJywKICAgICAgICBzbG90czogeyBjdXN0b21SZW5kZXI6ICdhY3Rpb24nIH0sCiAgICAgIH0sCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGFjdGlvblJlZ2lzdGVyLAogICAgICBoYW5kbGVEZWxldGU6IChyZWNvcmQpID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhyZWNvcmQsICdkZWxldGUnKTsKICAgICAgfSwKICAgICAgaGFuZGxlRWRpdDogKHJlY29yZCkgPT4gewogICAgICAgIGNvbnNvbGUubG9nKHJlY29yZCwgJ2VkaXQnKTsKICAgICAgfSwKICAgICAgaGFuZGxlT3BlbjogKHJlY29yZCkgPT4gewogICAgICAgIGNvbnNvbGUubG9nKHJlY29yZCwgJ29wZW4nKTsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImFjdGlvblJlZ2lzdGVyIj4KICAgIDx0ZW1wbGF0ZSAjYWdlRGl5PSJ7IHJlY29yZCB9Ij4ge3sgcmVjb3JkLmFnZSB9fS3lubTpvoQgPC90ZW1wbGF0ZT4KICAgIDx0ZW1wbGF0ZSAjYWN0aW9uPSJ7IHJlY29yZCB9Ij4KICAgICAgPGEtdGFibGUtYWN0aW9uCiAgICAgICAgOmFjdGlvbnM9IlsKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICfliKDpmaQnLAogICAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVEZWxldGUuYmluZChudWxsLCByZWNvcmQpLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbGFiZWw6ICfnvJbovpEnLAogICAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVFZGl0LmJpbmQobnVsbCwgcmVjb3JkKSwKICAgICAgICAgIH0sCiAgICAgICAgXSIKICAgICAgICA6ZHJvcERvd25BY3Rpb25zPSJbCiAgICAgICAgICB7CiAgICAgICAgICAgIGxhYmVsOiAn5ZCv55SoJywKICAgICAgICAgICAgb25DbGljazogaGFuZGxlT3Blbi5iaW5kKG51bGwsIHJlY29yZCksCiAgICAgICAgICB9LAogICAgICAgIF0iCiAgICAgIC8+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlLCBUYWJsZUFjdGlvbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAnQWdlJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn0sIHsKICB0aXRsZTogJ0FkZHJlc3MnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIGtleTogJ2FkZHJlc3MnLAp9LCB7CiAgdGl0bGU6ICdhZ2UtZGl5JywKICBkYXRhSW5kZXg6ICdhZ2VEaXknLAogIGtleTogJ2FnZURpeScsCiAgc2xvdHM6IHsKICAgIGN1c3RvbVJlbmRlcjogJ2FnZURpeScsCiAgfSwKfV07CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pIHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgW1RhYmxlQWN0aW9uLm5hbWVdOiBUYWJsZUFjdGlvbiwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IFthY3Rpb25SZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIGFjdGlvbkNvbHVtbjogewogICAgICAgIHdpZHRoOiAzNjAsCiAgICAgICAgdGl0bGU6ICflm7rlrprlj7PovrnnmoTmk43kvZwnLAogICAgICAgIGRhdGFJbmRleDogJ2FjdGlvbicsCiAgICAgICAgc2xvdHM6IHsKICAgICAgICAgIGN1c3RvbVJlbmRlcjogJ2FjdGlvbicsCiAgICAgICAgfSwKICAgICAgfSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgYWN0aW9uUmVnaXN0ZXIsCiAgICAgIGhhbmRsZURlbGV0ZTogcmVjb3JkID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhyZWNvcmQsICdkZWxldGUnKTsKICAgICAgfSwKICAgICAgaGFuZGxlRWRpdDogcmVjb3JkID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhyZWNvcmQsICdlZGl0Jyk7CiAgICAgIH0sCiAgICAgIGhhbmRsZU9wZW46IHJlY29yZCA9PiB7CiAgICAgICAgY29uc29sZS5sb2cocmVjb3JkLCAnb3BlbicpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[p(i,{onRegister:s.actionRegister},{ageDiy:o(({record:w})=>[t(h(w.age)+"-\u5E74\u9F84 ",1)]),action:o(({record:w})=>[p(u,{actions:[{label:"\u5220\u9664",onClick:s.handleDelete.bind(null,w)},{label:"\u7F16\u8F91",onClick:s.handleEdit.bind(null,w)}],dropDownActions:[{label:"\u542F\u7528",onClick:s.handleOpen.bind(null,w)}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])]),htmlCode:o(()=>[un]),jsVersionHtml:o(()=>[ln]),_:1},8,["jsfiddle"])}var rn=C(pn,[["render",kn]]);const gn=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function dn({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{c(e)},1e3)}const In=m({setup(){const[s]=b({api:dn,columns:gn});return{basicRegister:s}}}),Cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" BasicColumn "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns"),n("span",{class:"token operator"},":"),t(" BasicColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),An=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function mn(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Basic Usage.",cn:"\u57FA\u672C\u4F7F\u7528",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u4F7F\u7528</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic Usage.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/table-pro/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJiYXNpY1JlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpLCBCYXNpY0NvbHVtbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zOiBCYXNpY0NvbHVtbltdID0gWwogIHsKICAgIHRpdGxlOiAnbmFtZScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FkZHJlc3MnLAogICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgICBrZXk6ICdhZGRyZXNzJywKICB9LApdOwoKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpIHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW2Jhc2ljUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgfSk7CiAgICByZXR1cm4gewogICAgICBiYXNpY1JlZ2lzdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJiYXNpY1JlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAnQWdlJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn0sIHsKICB0aXRsZTogJ0FkZHJlc3MnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIGtleTogJ2FkZHJlc3MnLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IFtiYXNpY1JlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgYmFzaWNSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[n("div",null,[p(u,{onRegister:s.basicRegister},null,8,["onRegister"])])]),htmlCode:o(()=>[Cn]),jsVersionHtml:o(()=>[An]),_:1},8,["jsfiddle"])}var bn=C(In,[["render",mn]]);function wn(){return{labelCol:{span:8},wrapperCol:{span:16},actionColOptions:{span:24},layout:"inline",schemas:[{field:"input",label:"\u8F93\u5165\u6846",component:"Input",componentProps:{placeholder:"\u8F93\u5165\u6846"},colProps:{xl:12,xxl:12}},{field:"datePicker",label:"\u65E5\u671F",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{xl:12,xxl:12}}]}}const hn=[{title:"name",dataIndex:"name",key:"name",width:300},{title:"Age",dataIndex:"age",key:"age",width:300},{title:"Address",dataIndex:"address",key:"address",width:1300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200},{title:"Action",key:"action"}];function yn({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});setTimeout(()=>{c(e)},1e3)}const Zn=m({setup(){const[s]=b({api:yn,columns:hn,useSearchForm:!0,formConfig:wn()});return{toolbarRegister:s}}}),Gn=t("\u4E0B\u8F7D"),Bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toolbarRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"cardable"),t(),n("span",{class:"token attr-name"},"cardTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5217\u8868"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#extra"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("\u4E0B\u8F7D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Partial"),n("span",{class:"token operator"},"<"),t("any"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
          xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
          xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Action'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("toolbarRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      toolbarRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toolbarRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"cardable"),t(),n("span",{class:"token attr-name"},"cardTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5217\u8868"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#extra"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("\u4E0B\u8F7D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
        xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
        xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Action'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("toolbarRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      toolbarRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Wn(s,c,e,a,r,k){const u=l("a-button"),i=l("a-table-pro"),A=l("demo-box");return d(),I(A,{jsfiddle:{us:"Cardable.",cn:'`cardable="true"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>cardable=&quot;true&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Cardable.</p>
`,order:0,title:{"zh-CN":"\u5361\u7247","en-US":"Cardable"},relativePath:"components/table-pro/demo/card.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9InRvb2xiYXJSZWdpc3RlciIgY2FyZGFibGUgY2FyZFRpdGxlPSLliJfooagiPgogICAgPHRlbXBsYXRlICNleHRyYT4KICAgICAgPGEtYnV0dG9uPuS4i+i9vTwvYS1idXR0b24+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwoKZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1Db25maWcoKTogUGFydGlhbDxhbnk+IHsKICByZXR1cm4gewogICAgbGFiZWxDb2w6IHsKICAgICAgc3BhbjogOCwKICAgIH0sCiAgICB3cmFwcGVyQ29sOiB7CiAgICAgIHNwYW46IDE2LAogICAgfSwKICAgIGFjdGlvbkNvbE9wdGlvbnM6IHsKICAgICAgc3BhbjogMjQsCiAgICB9LAogICAgbGF5b3V0OiAnaW5saW5lJywKICAgIHNjaGVtYXM6IFsKICAgICAgewogICAgICAgIGZpZWxkOiAnaW5wdXQnLAogICAgICAgIGxhYmVsOiAn6L6T5YWl5qGGJywKICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6L6T5YWl5qGGJywKICAgICAgICB9LAogICAgICAgIGNvbFByb3BzOiB7CiAgICAgICAgICB4bDogMTIsCiAgICAgICAgICB4eGw6IDEyLAogICAgICAgIH0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBmaWVsZDogJ2RhdGVQaWNrZXInLAogICAgICAgIGxhYmVsOiAn5pel5pyfJywKICAgICAgICBjb21wb25lbnQ6ICdEYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgICB9LAogICAgICAgIGNvbFByb3BzOiB7CiAgICAgICAgICB4bDogMTIsCiAgICAgICAgICB4eGw6IDEyLAogICAgICAgIH0sCiAgICAgIH0sCiAgICBdLAogIH07Cn0KCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICduYW1lJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgICB3aWR0aDogMzAwLAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgICB3aWR0aDogMzAwLAogIH0sCiAgewogICAgdGl0bGU6ICdBZGRyZXNzJywKICAgIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogICAga2V5OiAnYWRkcmVzcycsCiAgICB3aWR0aDogMTMwMCwKICB9LAogIHsKICAgIHRpdGxlOiAn5byA5aeL5pe26Ze0JywKICAgIHdpZHRoOiAyMDAsCiAgICBkYXRhSW5kZXg6ICdiZWdpblRpbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICfnu5PmnZ/ml7bpl7QnLAogICAgZGF0YUluZGV4OiAnZW5kVGltZScsCiAgICB3aWR0aDogMjAwLAogIH0sCiAgewogICAgdGl0bGU6ICdBY3Rpb24nLAogICAga2V5OiAnYWN0aW9uJywKICB9LApdOwoKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpIHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICBiZWdpblRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgICAgZW5kVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW3Rvb2xiYXJSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIHVzZVNlYXJjaEZvcm06IHRydWUsCiAgICAgIGZvcm1Db25maWc6IGdldEZvcm1Db25maWcoKSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdG9vbGJhclJlZ2lzdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9InRvb2xiYXJSZWdpc3RlciIgY2FyZGFibGUgY2FyZFRpdGxlPSLliJfooagiPgogICAgPHRlbXBsYXRlICNleHRyYT4KICAgICAgPGEtYnV0dG9uPuS4i+i9vTwvYS1idXR0b24+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbmZpZygpIHsKICByZXR1cm4gewogICAgbGFiZWxDb2w6IHsKICAgICAgc3BhbjogOCwKICAgIH0sCiAgICB3cmFwcGVyQ29sOiB7CiAgICAgIHNwYW46IDE2LAogICAgfSwKICAgIGFjdGlvbkNvbE9wdGlvbnM6IHsKICAgICAgc3BhbjogMjQsCiAgICB9LAogICAgbGF5b3V0OiAnaW5saW5lJywKICAgIHNjaGVtYXM6IFt7CiAgICAgIGZpZWxkOiAnaW5wdXQnLAogICAgICBsYWJlbDogJ+i+k+WFpeahhicsCiAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICBwbGFjZWhvbGRlcjogJ+i+k+WFpeahhicsCiAgICAgIH0sCiAgICAgIGNvbFByb3BzOiB7CiAgICAgICAgeGw6IDEyLAogICAgICAgIHh4bDogMTIsCiAgICAgIH0sCiAgICB9LCB7CiAgICAgIGZpZWxkOiAnZGF0ZVBpY2tlcicsCiAgICAgIGxhYmVsOiAn5pel5pyfJywKICAgICAgY29tcG9uZW50OiAnRGF0ZVBpY2tlcicsCiAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgfSwKICAgICAgY29sUHJvcHM6IHsKICAgICAgICB4bDogMTIsCiAgICAgICAgeHhsOiAxMiwKICAgICAgfSwKICAgIH1dLAogIH07Cn0KY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKICB3aWR0aDogMzAwLAp9LCB7CiAgdGl0bGU6ICdBZ2UnLAogIGRhdGFJbmRleDogJ2FnZScsCiAga2V5OiAnYWdlJywKICB3aWR0aDogMzAwLAp9LCB7CiAgdGl0bGU6ICdBZGRyZXNzJywKICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICBrZXk6ICdhZGRyZXNzJywKICB3aWR0aDogMTMwMCwKfSwgewogIHRpdGxlOiAn5byA5aeL5pe26Ze0JywKICB3aWR0aDogMjAwLAogIGRhdGFJbmRleDogJ2JlZ2luVGltZScsCn0sIHsKICB0aXRsZTogJ+e7k+adn+aXtumXtCcsCiAgZGF0YUluZGV4OiAnZW5kVGltZScsCiAgd2lkdGg6IDIwMCwKfSwgewogIHRpdGxlOiAnQWN0aW9uJywKICBrZXk6ICdhY3Rpb24nLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgYmVnaW5UaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IFt0b29sYmFyUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgICB1c2VTZWFyY2hGb3JtOiB0cnVlLAogICAgICBmb3JtQ29uZmlnOiBnZXRGb3JtQ29uZmlnKCksCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHRvb2xiYXJSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(i,{onRegister:s.toolbarRegister,cardable:"",cardTitle:"\u5217\u8868"},{extra:o(()=>[p(u,null,{default:o(()=>[Gn]),_:1})]),_:1},8,["onRegister"])]),htmlCode:o(()=>[Bn]),jsVersionHtml:o(()=>[fn]),_:1},8,["jsfiddle"])}var Fn=C(Zn,[["render",Wn]]);const Rn=[{title:"name",dataIndex:"name",key:"name",copyable:!0,ellipsis:{rows:2}},{title:"Age",dataIndex:"age",key:"age"},{title:"sex",dataIndex:"sex",key:"sex",copyable:!0},{title:"Address",dataIndex:"address",key:"address",editable:!0}];function Yn({params:s,success:c}){const e=[];for(let a=0;a<1e3;a++)e.push({id:`${a}`,name:`${Math.random()+a}-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater`,sex:a===0?"":`sex${a}`,age:a===1?"":`age${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{c(e)},1e3)}const Xn=m({setup(){const[s]=b({api:Yn,columns:Rn});return{basicRegister:s}}}),Vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" BasicColumn "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns"),n("span",{class:"token operator"},":"),t(" BasicColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    copyable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    ellipsis`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      rows`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
    copyable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    editable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t(`
        Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(` index
      `),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      sex`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"sex"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"age"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  copyable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  ellipsis`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    rows`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
  copyable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  editable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      sex`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"sex"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"age"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function vn(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Ellipsis Usage.",cn:"\u65B0\u589E\u5982\u679C\u63A5\u53E3\u5B57\u6BB5\u4E3A\u7A7A\uFF0C\u9ED8\u8BA4\u5C55\u793A - \u3002\u652F\u6301\u591A\u884C\u7701\u7565(`ellipsis: {rows:2}`)\uFF0C\u590D\u5236(`copyable: true`)\uFF0C\u7F16\u8F91(`editable: true`)\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u65B0\u589E\u5982\u679C\u63A5\u53E3\u5B57\u6BB5\u4E3A\u7A7A\uFF0C\u9ED8\u8BA4\u5C55\u793A - \u3002\u652F\u6301\u591A\u884C\u7701\u7565(<code>ellipsis: {rows:2}</code>)\uFF0C\u590D\u5236(<code>copyable: true</code>)\uFF0C\u7F16\u8F91(<code>editable: true</code>)\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Ellipsis Usage.</p>
`,order:0,title:{"zh-CN":"\u7701\u7565\u53F7\u7B49","en-US":"Ellipsis Usage"},relativePath:"components/table-pro/demo/ellipsis.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJiYXNpY1JlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpLCBCYXNpY0NvbHVtbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zOiBCYXNpY0NvbHVtbltdID0gWwogIHsKICAgIHRpdGxlOiAnbmFtZScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogICAgY29weWFibGU6IHRydWUsCiAgICBlbGxpcHNpczogewogICAgICByb3dzOiAyLAogICAgfSwKICB9LAogIHsKICAgIHRpdGxlOiAnQWdlJywKICAgIGRhdGFJbmRleDogJ2FnZScsCiAgICBrZXk6ICdhZ2UnLAogIH0sCiAgewogICAgdGl0bGU6ICdzZXgnLAogICAgZGF0YUluZGV4OiAnc2V4JywKICAgIGtleTogJ3NleCcsCiAgICBjb3B5YWJsZTogdHJ1ZSwKICB9LAogIHsKICAgIHRpdGxlOiAnQWRkcmVzcycsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICAgIGtleTogJ2FkZHJlc3MnLAogICAgZWRpdGFibGU6IHRydWUsCiAgfSwKXTsKCmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7IHBhcmFtcywgc3VjY2VzcyB9OiBBamF4QXBpKSB7CiAgY29uc3QgYXJyOiBhbnkgPSBbXTsKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7CiAgICAgICAgTWF0aC5yYW5kb20oKSArIGluZGV4CiAgICAgIH0td2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyYCwKICAgICAgc2V4OiBpbmRleCA9PT0gMCA/ICcnIDogYHNleCR7aW5kZXh9YCwKICAgICAgYWdlOiBpbmRleCA9PT0gMSA/ICcnIDogYGFnZSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICB9KTsKICB9CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbYmFzaWNSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGJhc2ljUmVnaXN0ZXIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJiYXNpY1JlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKICBjb3B5YWJsZTogdHJ1ZSwKICBlbGxpcHNpczogewogICAgcm93czogMiwKICB9LAp9LCB7CiAgdGl0bGU6ICdBZ2UnLAogIGRhdGFJbmRleDogJ2FnZScsCiAga2V5OiAnYWdlJywKfSwgewogIHRpdGxlOiAnc2V4JywKICBkYXRhSW5kZXg6ICdzZXgnLAogIGtleTogJ3NleCcsCiAgY29weWFibGU6IHRydWUsCn0sIHsKICB0aXRsZTogJ0FkZHJlc3MnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIGtleTogJ2FkZHJlc3MnLAogIGVkaXRhYmxlOiB0cnVlLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJgLAogICAgICBzZXg6IGluZGV4ID09PSAwID8gJycgOiBgc2V4JHtpbmRleH1gLAogICAgICBhZ2U6IGluZGV4ID09PSAxID8gJycgOiBgYWdlJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IFtiYXNpY1JlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgYmFzaWNSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[n("div",null,[p(u,{onRegister:s.basicRegister},null,8,["onRegister"])])]),htmlCode:o(()=>[Vn]),jsVersionHtml:o(()=>[Kn]),_:1},8,["jsfiddle"])}var Sn=C(Xn,[["render",vn]]);const Jn=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"sex",dataIndex:"sex",key:"sex"},{title:"Address",dataIndex:"address",key:"address"}];function Hn({params:s,success:c}){const e=[];for(let a=0;a<3;a++)e.push({id:`${a}`,name:`${Math.random()+a}-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater`,sex:a===0?"":`sex${a}`,age:a===1?"":`age${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{c(e)},1e3)}const xn=m({setup(){const[s]=b({api:Hn,columns:Jn,showIndexColumn:!0});return{basicRegister:s}}}),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" BasicColumn "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns"),n("span",{class:"token operator"},":"),t(" BasicColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t(`
        Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(` index
      `),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      sex`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"sex"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"age"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      showIndexColumn`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sex'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      sex`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"sex"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"''"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"age"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      showIndexColumn`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Tn(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Num Usage.",cn:"`showIndexColumn: true`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>showIndexColumn: true</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Num Usage.</p>
`,order:0,title:{"zh-CN":"\u663E\u793A\u5E8F\u53F7","en-US":"Num Usage"},relativePath:"components/table-pro/demo/num.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJiYXNpY1JlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpLCBCYXNpY0NvbHVtbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zOiBCYXNpY0NvbHVtbltdID0gWwogIHsKICAgIHRpdGxlOiAnbmFtZScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ3NleCcsCiAgICBkYXRhSW5kZXg6ICdzZXgnLAogICAga2V5OiAnc2V4JywKICB9LAogIHsKICAgIHRpdGxlOiAnQWRkcmVzcycsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICAgIGtleTogJ2FkZHJlc3MnLAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAkewogICAgICAgIE1hdGgucmFuZG9tKCkgKyBpbmRleAogICAgICB9LXdhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcmAsCiAgICAgIHNleDogaW5kZXggPT09IDAgPyAnJyA6IGBzZXgke2luZGV4fWAsCiAgICAgIGFnZTogaW5kZXggPT09IDEgPyAnJyA6IGBhZ2Uke2luZGV4fWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW2Jhc2ljUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgICBzaG93SW5kZXhDb2x1bW46IHRydWUsCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGJhc2ljUmVnaXN0ZXIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJiYXNpY1JlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAnQWdlJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn0sIHsKICB0aXRsZTogJ3NleCcsCiAgZGF0YUluZGV4OiAnc2V4JywKICBrZXk6ICdzZXgnLAp9LCB7CiAgdGl0bGU6ICdBZGRyZXNzJywKICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICBrZXk6ICdhZGRyZXNzJywKfV07CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pIHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyYCwKICAgICAgc2V4OiBpbmRleCA9PT0gMCA/ICcnIDogYHNleCR7aW5kZXh9YCwKICAgICAgYWdlOiBpbmRleCA9PT0gMSA/ICcnIDogYGFnZSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbYmFzaWNSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIHNob3dJbmRleENvbHVtbjogdHJ1ZSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgYmFzaWNSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[n("div",null,[p(u,{onRegister:s.basicRegister},null,8,["onRegister"])])]),htmlCode:o(()=>[Ln]),jsVersionHtml:o(()=>[Nn]),_:1},8,["jsfiddle"])}var Dn=C(xn,[["render",Tn]]);const Pn=[{title:"ID",dataIndex:"id"},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u4EA7\u54C1",dataIndex:"name",width:300},{title:"\u4FE1\u606F",dataIndex:"info",width:300},{title:"\u5934\u50CF",dataIndex:"img",width:120},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}];function zn({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`\u8FD9\u662F\u4E00\u4E2A\u53F7\uFF0C${a*1e12}`,name:`${Math.random()+a}-water`,no:`${a+10}`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),image:a%2==0?"https://www.evente.cn/_nuxt/img/2d0fa17.png":"https://www.evente.cn/_nuxt/img/c45fac2.png",ifShow:a%2>0});setTimeout(()=>{c(e)},1e3)}const Un=m({components:{ATableImage:an,ATableCard:on},setup(){const[s]=b({api:zn,columns:Pn});return{customerCellTable:s}}}),En=t("\u9690"),jn=t("\u9690"),On=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("customerCellTable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" ID: {{ record.id }} "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#no"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ record.no }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#img"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-image")]),t(`
        `),n("span",{class:"token attr-name"},":imgList"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
          `),n("span",{class:"token punctuation"},"'"),t("https://www.evente.cn/_nuxt/img/2d0fa17.png"),n("span",{class:"token punctuation"},"'"),t(`,
          `),n("span",{class:"token punctuation"},"'"),t("https://ecdn.evente.cn/assets/image/b-menu-logo-1.png"),n("span",{class:"token punctuation"},"'"),t(`,
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-card")]),t(`
        `),n("span",{class:"token attr-name"},":imgUrl"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("record.image"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${record.name}${record.name}`"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":desc"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`ID:${record.id}`"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#titleSuffix"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("red"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("!record.ifShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9690"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-card")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#info"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-card")]),t(),n("span",{class:"token attr-name"},":imgUrl"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("record.image"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${record.name}${record.name}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#titleSuffix"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("red"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("record.ifShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9690"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-card")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#category"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ record.no }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" TableProColumn "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable"),n("span",{class:"token punctuation"},","),t(" TableImage"),n("span",{class:"token punctuation"},","),t(" TableCard "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns"),n("span",{class:"token operator"},":"),t(" TableProColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5206\u7C7B'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'category'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    align`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
    defaultHidden`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4EA7\u54C1'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4FE1\u606F'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5934\u50CF'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u8FD9\u662F\u4E00\u4E2A\u53F7\uFF0C"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000000000000"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      image`),n("span",{class:"token operator"},":"),t(`
        index `),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(`
          `),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'https://www.evente.cn/_nuxt/img/2d0fa17.png'"),t(`
          `),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://www.evente.cn/_nuxt/img/c45fac2.png'"),n("span",{class:"token punctuation"},","),t(`
      ifShow`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    ATableImage`),n("span",{class:"token operator"},":"),t(" TableImage"),n("span",{class:"token punctuation"},","),t(`
    ATableCard`),n("span",{class:"token operator"},":"),t(" TableCard"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("customerCellTable"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token operator"},":"),t(" columns"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      customerCellTable`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("customerCellTable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" ID: {{ record.id }} "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#no"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ record.no }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#img"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-image")]),t(`
        `),n("span",{class:"token attr-name"},":imgList"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`[
          `),n("span",{class:"token punctuation"},"'"),t("https://www.evente.cn/_nuxt/img/2d0fa17.png"),n("span",{class:"token punctuation"},"'"),t(`,
          `),n("span",{class:"token punctuation"},"'"),t("https://ecdn.evente.cn/assets/image/b-menu-logo-1.png"),n("span",{class:"token punctuation"},"'"),t(`,
        ]`),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-card")]),t(`
        `),n("span",{class:"token attr-name"},":imgUrl"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("record.image"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${record.name}${record.name}`"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},":desc"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`ID:${record.id}`"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#titleSuffix"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("red"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("!record.ifShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9690"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-card")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#info"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-card")]),t(),n("span",{class:"token attr-name"},":imgUrl"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("record.image"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`${record.name}${record.name}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#titleSuffix"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("red"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("record.ifShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9690"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-card")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#category"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ record }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tag")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("green"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ record.no }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-tag")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable"),n("span",{class:"token punctuation"},","),t(" TableImage"),n("span",{class:"token punctuation"},","),t(" TableCard "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5206\u7C7B'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'category'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
  align`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
  defaultHidden`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4EA7\u54C1'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4FE1\u606F'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5934\u50CF'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u8FD9\u662F\u4E00\u4E2A\u53F7\uFF0C"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000000000000"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      image`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token string"},"'https://www.evente.cn/_nuxt/img/2d0fa17.png'"),t(),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://www.evente.cn/_nuxt/img/c45fac2.png'"),n("span",{class:"token punctuation"},","),t(`
      ifShow`),n("span",{class:"token operator"},":"),t(" index "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    ATableImage`),n("span",{class:"token operator"},":"),t(" TableImage"),n("span",{class:"token punctuation"},","),t(`
    ATableCard`),n("span",{class:"token operator"},":"),t(" TableCard"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("customerCellTable"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      customerCellTable`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Qn(s,c,e,a,r,k){const u=l("a-tag"),i=l("a-table-image"),A=l("a-table-card"),w=l("a-table-pro"),y=l("demo-box");return d(),I(y,{jsfiddle:{us:"Customer cell.",cn:"\u81EA\u5B9A\u4E49\u5217",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u5217</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customer cell.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5217","en-US":"Customer cell"},relativePath:"components/table-pro/demo/customer-cell.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImN1c3RvbWVyQ2VsbFRhYmxlIj4KICAgIDx0ZW1wbGF0ZSAjaWQ9InsgcmVjb3JkIH0iPiBJRDoge3sgcmVjb3JkLmlkIH19IDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI25vPSJ7IHJlY29yZCB9Ij4KICAgICAgPGEtdGFnIGNvbG9yPSJncmVlbiI+CiAgICAgICAge3sgcmVjb3JkLm5vIH19CiAgICAgIDwvYS10YWc+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNpbWc+CiAgICAgIDxhLXRhYmxlLWltYWdlCiAgICAgICAgOmltZ0xpc3Q9IlsKICAgICAgICAgICdodHRwczovL3d3dy5ldmVudGUuY24vX251eHQvaW1nLzJkMGZhMTcucG5nJywKICAgICAgICAgICdodHRwczovL2VjZG4uZXZlbnRlLmNuL2Fzc2V0cy9pbWFnZS9iLW1lbnUtbG9nby0xLnBuZycsCiAgICAgICAgXSIKICAgICAgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI25hbWU9InsgcmVjb3JkIH0iPgogICAgICA8YS10YWJsZS1jYXJkCiAgICAgICAgOmltZ1VybD0icmVjb3JkLmltYWdlIgogICAgICAgIDp0aXRsZT0iYCR7cmVjb3JkLm5hbWV9JHtyZWNvcmQubmFtZX1gIgogICAgICAgIDpkZXNjPSJgSUQ6JHtyZWNvcmQuaWR9YCIKICAgICAgPgogICAgICAgIDx0ZW1wbGF0ZSAjdGl0bGVTdWZmaXg+CiAgICAgICAgICA8YS10YWcgY29sb3I9InJlZCIgdi1pZj0iIXJlY29yZC5pZlNob3ciPumakDwvYS10YWc+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPC9hLXRhYmxlLWNhcmQ+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNpbmZvPSJ7IHJlY29yZCB9Ij4KICAgICAgPGEtdGFibGUtY2FyZCA6aW1nVXJsPSJyZWNvcmQuaW1hZ2UiIDp0aXRsZT0iYCR7cmVjb3JkLm5hbWV9JHtyZWNvcmQubmFtZX1gIj4KICAgICAgICA8dGVtcGxhdGUgI3RpdGxlU3VmZml4PgogICAgICAgICAgPGEtdGFnIGNvbG9yPSJyZWQiIHYtaWY9InJlY29yZC5pZlNob3ciPumakDwvYS10YWc+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPC9hLXRhYmxlLWNhcmQ+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNjYXRlZ29yeT0ieyByZWNvcmQgfSI+CiAgICAgIDxhLXRhZyBjb2xvcj0iZ3JlZW4iPgogICAgICAgIHt7IHJlY29yZC5ubyB9fQogICAgICA8L2EtdGFnPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtdGFibGUtcHJvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpLCBUYWJsZVByb0NvbHVtbiB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUsIFRhYmxlSW1hZ2UsIFRhYmxlQ2FyZCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IGNvbHVtbnM6IFRhYmxlUHJvQ29sdW1uW10gPSBbCiAgewogICAgdGl0bGU6ICdJRCcsCiAgICBkYXRhSW5kZXg6ICdpZCcsCiAgfSwKICB7CiAgICB0aXRsZTogJ+WIhuexuycsCiAgICBkYXRhSW5kZXg6ICdjYXRlZ29yeScsCiAgICB3aWR0aDogODAsCiAgICBhbGlnbjogJ2NlbnRlcicsCiAgICBkZWZhdWx0SGlkZGVuOiB0cnVlLAogIH0sCiAgewogICAgdGl0bGU6ICfkuqflk4EnLAogICAgZGF0YUluZGV4OiAnbmFtZScsCiAgICB3aWR0aDogMzAwLAogIH0sCiAgewogICAgdGl0bGU6ICfkv6Hmga8nLAogICAgZGF0YUluZGV4OiAnaW5mbycsCiAgICB3aWR0aDogMzAwLAogIH0sCiAgewogICAgdGl0bGU6ICflpLTlg48nLAogICAgZGF0YUluZGV4OiAnaW1nJywKICAgIHdpZHRoOiAxMjAsCiAgfSwKICB7CiAgICB0aXRsZTogJ+WcsOWdgCcsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICB9LAogIHsKICAgIHRpdGxlOiAn57yW5Y+3JywKICAgIGRhdGFJbmRleDogJ25vJywKICB9LAogIHsKICAgIHRpdGxlOiAn5byA5aeL5pe26Ze0JywKICAgIGRhdGFJbmRleDogJ2JlZ2luVGltZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ+e7k+adn+aXtumXtCcsCiAgICBkYXRhSW5kZXg6ICdlbmRUaW1lJywKICB9LApdOwoKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpIHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYOi/meaYr+S4gOS4quWPt++8jCR7aW5kZXggKiAxMDAwMDAwMDAwMDAwfWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBubzogYCR7aW5kZXggKyAxMH1gLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgYmVnaW5UaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgICAgaW1hZ2U6CiAgICAgICAgaW5kZXggJSAyID09PSAwCiAgICAgICAgICA/ICdodHRwczovL3d3dy5ldmVudGUuY24vX251eHQvaW1nLzJkMGZhMTcucG5nJwogICAgICAgICAgOiAnaHR0cHM6Ly93d3cuZXZlbnRlLmNuL19udXh0L2ltZy9jNDVmYWMyLnBuZycsCiAgICAgIGlmU2hvdzogaW5kZXggJSAyID4gMCwKICAgIH0pOwogIH0KICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfQoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBBVGFibGVJbWFnZTogVGFibGVJbWFnZSwKICAgIEFUYWJsZUNhcmQ6IFRhYmxlQ2FyZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgW2N1c3RvbWVyQ2VsbFRhYmxlXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1uczogY29sdW1ucywKICAgIH0pOwoKICAgIHJldHVybiB7CiAgICAgIGN1c3RvbWVyQ2VsbFRhYmxlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImN1c3RvbWVyQ2VsbFRhYmxlIj4KICAgIDx0ZW1wbGF0ZSAjaWQ9InsgcmVjb3JkIH0iPiBJRDoge3sgcmVjb3JkLmlkIH19IDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI25vPSJ7IHJlY29yZCB9Ij4KICAgICAgPGEtdGFnIGNvbG9yPSJncmVlbiI+CiAgICAgICAge3sgcmVjb3JkLm5vIH19CiAgICAgIDwvYS10YWc+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNpbWc+CiAgICAgIDxhLXRhYmxlLWltYWdlCiAgICAgICAgOmltZ0xpc3Q9IlsKICAgICAgICAgICdodHRwczovL3d3dy5ldmVudGUuY24vX251eHQvaW1nLzJkMGZhMTcucG5nJywKICAgICAgICAgICdodHRwczovL2VjZG4uZXZlbnRlLmNuL2Fzc2V0cy9pbWFnZS9iLW1lbnUtbG9nby0xLnBuZycsCiAgICAgICAgXSIKICAgICAgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI25hbWU9InsgcmVjb3JkIH0iPgogICAgICA8YS10YWJsZS1jYXJkCiAgICAgICAgOmltZ1VybD0icmVjb3JkLmltYWdlIgogICAgICAgIDp0aXRsZT0iYCR7cmVjb3JkLm5hbWV9JHtyZWNvcmQubmFtZX1gIgogICAgICAgIDpkZXNjPSJgSUQ6JHtyZWNvcmQuaWR9YCIKICAgICAgPgogICAgICAgIDx0ZW1wbGF0ZSAjdGl0bGVTdWZmaXg+CiAgICAgICAgICA8YS10YWcgY29sb3I9InJlZCIgdi1pZj0iIXJlY29yZC5pZlNob3ciPumakDwvYS10YWc+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPC9hLXRhYmxlLWNhcmQ+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNpbmZvPSJ7IHJlY29yZCB9Ij4KICAgICAgPGEtdGFibGUtY2FyZCA6aW1nVXJsPSJyZWNvcmQuaW1hZ2UiIDp0aXRsZT0iYCR7cmVjb3JkLm5hbWV9JHtyZWNvcmQubmFtZX1gIj4KICAgICAgICA8dGVtcGxhdGUgI3RpdGxlU3VmZml4PgogICAgICAgICAgPGEtdGFnIGNvbG9yPSJyZWQiIHYtaWY9InJlY29yZC5pZlNob3ciPumakDwvYS10YWc+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPC9hLXRhYmxlLWNhcmQ+CiAgICA8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNjYXRlZ29yeT0ieyByZWNvcmQgfSI+CiAgICAgIDxhLXRhZyBjb2xvcj0iZ3JlZW4iPgogICAgICAgIHt7IHJlY29yZC5ubyB9fQogICAgICA8L2EtdGFnPgogICAgPC90ZW1wbGF0ZT4KICA8L2EtdGFibGUtcHJvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSwgVGFibGVJbWFnZSwgVGFibGVDYXJkIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBjb2x1bW5zID0gW3sKICB0aXRsZTogJ0lEJywKICBkYXRhSW5kZXg6ICdpZCcsCn0sIHsKICB0aXRsZTogJ+WIhuexuycsCiAgZGF0YUluZGV4OiAnY2F0ZWdvcnknLAogIHdpZHRoOiA4MCwKICBhbGlnbjogJ2NlbnRlcicsCiAgZGVmYXVsdEhpZGRlbjogdHJ1ZSwKfSwgewogIHRpdGxlOiAn5Lqn5ZOBJywKICBkYXRhSW5kZXg6ICduYW1lJywKICB3aWR0aDogMzAwLAp9LCB7CiAgdGl0bGU6ICfkv6Hmga8nLAogIGRhdGFJbmRleDogJ2luZm8nLAogIHdpZHRoOiAzMDAsCn0sIHsKICB0aXRsZTogJ+WktOWDjycsCiAgZGF0YUluZGV4OiAnaW1nJywKICB3aWR0aDogMTIwLAp9LCB7CiAgdGl0bGU6ICflnLDlnYAnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAp9LCB7CiAgdGl0bGU6ICfnvJblj7cnLAogIGRhdGFJbmRleDogJ25vJywKfSwgewogIHRpdGxlOiAn5byA5aeL5pe26Ze0JywKICBkYXRhSW5kZXg6ICdiZWdpblRpbWUnLAp9LCB7CiAgdGl0bGU6ICfnu5PmnZ/ml7bpl7QnLAogIGRhdGFJbmRleDogJ2VuZFRpbWUnLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGDov5nmmK/kuIDkuKrlj7fvvIwke2luZGV4ICogMTAwMDAwMDAwMDAwMH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgbm86IGAke2luZGV4ICsgMTB9YCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICAgIGJlZ2luVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICAgIGltYWdlOiBpbmRleCAlIDIgPT09IDAgPyAnaHR0cHM6Ly93d3cuZXZlbnRlLmNuL19udXh0L2ltZy8yZDBmYTE3LnBuZycgOiAnaHR0cHM6Ly93d3cuZXZlbnRlLmNuL19udXh0L2ltZy9jNDVmYWMyLnBuZycsCiAgICAgIGlmU2hvdzogaW5kZXggJSAyID4gMCwKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBBVGFibGVJbWFnZTogVGFibGVJbWFnZSwKICAgIEFUYWJsZUNhcmQ6IFRhYmxlQ2FyZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IFtjdXN0b21lckNlbGxUYWJsZV0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGN1c3RvbWVyQ2VsbFRhYmxlLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[p(w,{onRegister:s.customerCellTable},{id:o(({record:g})=>[t(" ID: "+h(g.id),1)]),no:o(({record:g})=>[p(u,{color:"green"},{default:o(()=>[t(h(g.no),1)]),_:2},1024)]),img:o(()=>[p(i,{imgList:["https://www.evente.cn/_nuxt/img/2d0fa17.png","https://ecdn.evente.cn/assets/image/b-menu-logo-1.png"]},null,8,["imgList"])]),name:o(({record:g})=>[p(A,{imgUrl:g.image,title:`${g.name}${g.name}`,desc:`ID:${g.id}`},{titleSuffix:o(()=>[g.ifShow?H("",!0):(d(),I(u,{key:0,color:"red"},{default:o(()=>[En]),_:1}))]),_:2},1032,["imgUrl","title","desc"])]),info:o(({record:g})=>[p(A,{imgUrl:g.image,title:`${g.name}${g.name}`},{titleSuffix:o(()=>[g.ifShow?(d(),I(u,{key:0,color:"red"},{default:o(()=>[jn]),_:1})):H("",!0)]),_:2},1032,["imgUrl","title"])]),category:o(({record:g})=>[p(u,{color:"green"},{default:o(()=>[t(h(g.no),1)]),_:2},1024)]),_:1},8,["onRegister"])]),htmlCode:o(()=>[On]),jsVersionHtml:o(()=>[Mn]),_:1},8,["jsfiddle"])}var _n=C(Un,[["render",Qn]]);const $n=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function qn({success:s}){const c=[];for(let e=0;e<10;e++)c.push({id:`child-${e}`,name:`${Math.random()+e}-water`,age:`1${e}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",children:[{id:`child-${e}`,name:`child-${Math.random()+e}-water`,age:`child-1${e}`,address:"Child New York No. 1 Lake ParkNew York No. 1 Lake Park"},{id:`child2-${e}`,name:`child2-${Math.random()+e}-water`,age:`child2-1${e}`,address:"Child New York No. 1 Lake ParkNew York No. 1 Lake Park"}]});setTimeout(()=>{s(c)},1e3)}const nt=m({setup(){const[s]=b({api:qn,draggable:!0,columns:$n});return{basicRegister:s,dragEnd(c,e){console.log(c,e,"drag end")}}}}),tt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@drag-end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dragEnd"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child2-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child2-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child2-1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      draggable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"dragEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("oldIndexNumber"),n("span",{class:"token punctuation"},","),t(" newIndexNumber")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("oldIndexNumber"),n("span",{class:"token punctuation"},","),t(" newIndexNumber"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'drag end'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),st=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basicRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@drag-end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dragEnd"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child-1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child2-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child2-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"child2-1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("basicRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      draggable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      basicRegister`),n("span",{class:"token punctuation"},","),t(`

      `),n("span",{class:"token function"},"dragEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("oldIndexNumber"),n("span",{class:"token punctuation"},","),t(" newIndexNumber")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("oldIndexNumber"),n("span",{class:"token punctuation"},","),t(" newIndexNumber"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'drag end'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function at(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Drag.",cn:"\u62D6\u62FD\u6392\u5E8F",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u62D6\u62FD\u6392\u5E8F</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Drag.</p>
`,order:0,title:{"zh-CN":"\u62D6\u62FD\u6392\u5E8F","en-US":"Drag"},relativePath:"components/table-pro/demo/drag.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImJhc2ljUmVnaXN0ZXIiIEBkcmFnLWVuZD0iZHJhZ0VuZCIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIHRpdGxlOiAnbmFtZScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FkZHJlc3MnLAogICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgICBrZXk6ICdhZGRyZXNzJywKICB9LApdOwoKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsgc3VjY2VzcyB9OiBBamF4QXBpKSB7CiAgY29uc3QgYXJyOiBhbnkgPSBbXTsKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGBjaGlsZC0ke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgY2hpbGRyZW46IFsKICAgICAgICB7CiAgICAgICAgICBpZDogYGNoaWxkLSR7aW5kZXh9YCwKICAgICAgICAgIG5hbWU6IGBjaGlsZC0ke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICAgICAgYWdlOiBgY2hpbGQtMSR7aW5kZXh9YCwKICAgICAgICAgIGFkZHJlc3M6ICdDaGlsZCBOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgaWQ6IGBjaGlsZDItJHtpbmRleH1gLAogICAgICAgICAgbmFtZTogYGNoaWxkMi0ke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICAgICAgYWdlOiBgY2hpbGQyLTEke2luZGV4fWAsCiAgICAgICAgICBhZGRyZXNzOiAnQ2hpbGQgTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgICB9LAogICAgICBdLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW2Jhc2ljUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBkcmFnZ2FibGU6IHRydWUsCiAgICAgIGNvbHVtbnMsCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGJhc2ljUmVnaXN0ZXIsCiAgICAgIGRyYWdFbmQob2xkSW5kZXhOdW1iZXIsIG5ld0luZGV4TnVtYmVyKSB7CiAgICAgICAgY29uc29sZS5sb2cob2xkSW5kZXhOdW1iZXIsIG5ld0luZGV4TnVtYmVyLCAnZHJhZyBlbmQnKTsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImJhc2ljUmVnaXN0ZXIiIEBkcmFnLWVuZD0iZHJhZ0VuZCIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IGNvbHVtbnMgPSBbewogIHRpdGxlOiAnbmFtZScsCiAgZGF0YUluZGV4OiAnbmFtZScsCiAga2V5OiAnbmFtZScsCn0sIHsKICB0aXRsZTogJ0FnZScsCiAgZGF0YUluZGV4OiAnYWdlJywKICBrZXk6ICdhZ2UnLAp9LCB7CiAgdGl0bGU6ICdBZGRyZXNzJywKICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICBrZXk6ICdhZGRyZXNzJywKfV07CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgc3VjY2VzcywKfSkgewogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGBjaGlsZC0ke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgaWQ6IGBjaGlsZC0ke2luZGV4fWAsCiAgICAgICAgbmFtZTogYGNoaWxkLSR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgICAgYWdlOiBgY2hpbGQtMSR7aW5kZXh9YCwKICAgICAgICBhZGRyZXNzOiAnQ2hpbGQgTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgfSwgewogICAgICAgIGlkOiBgY2hpbGQyLSR7aW5kZXh9YCwKICAgICAgICBuYW1lOiBgY2hpbGQyLSR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgICAgYWdlOiBgY2hpbGQyLTEke2luZGV4fWAsCiAgICAgICAgYWRkcmVzczogJ0NoaWxkIE5ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICAgIH1dLAogICAgfSk7CiAgfQoKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfQpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW2Jhc2ljUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBkcmFnZ2FibGU6IHRydWUsCiAgICAgIGNvbHVtbnMsCiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIGJhc2ljUmVnaXN0ZXIsCgogICAgICBkcmFnRW5kKG9sZEluZGV4TnVtYmVyLCBuZXdJbmRleE51bWJlcikgewogICAgICAgIGNvbnNvbGUubG9nKG9sZEluZGV4TnVtYmVyLCBuZXdJbmRleE51bWJlciwgJ2RyYWcgZW5kJyk7CiAgICAgIH0sCgogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[p(u,{onRegister:s.basicRegister,onDragEnd:s.dragEnd},null,8,["onRegister","onDragEnd"])]),htmlCode:o(()=>[tt]),jsVersionHtml:o(()=>[st]),_:1},8,["jsfiddle"])}var ot=C(nt,[["render",at]]);const et=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function ct({params:s,success:c}){const e=[];setTimeout(()=>{c(e)},1e3)}function pt(){return{labelCol:{span:8},wrapperCol:{span:16},actionColOptions:{span:24},layout:"inline",schemas:[{field:"input",component:"Input"},{field:"datePicker",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"}}]}}const ut=m({setup(){const[s]=b({api:ct,columns:et,useSearchForm:!0,formConfig:pt()});return{searchTableRegister:s}}}),lt={style:{height:"500px",position:"relative"}},it={style:{position:"relative",height:"360px"}},kt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":emptyDataIsShowTable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 360px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-empty")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},","),t(" -50%"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Partial"),n("span",{class:"token operator"},"<"),t("any"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),rt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":emptyDataIsShowTable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 360px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-empty")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},","),t(" -50%"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function gt(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("a-empty"),A=l("demo-box");return d(),I(A,{jsfiddle:{us:"Custom empty.",cn:"\u81EA\u5B9A\u4E49\u7A7A",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u7A7A</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom empty.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u7A7A","en-US":"Custom empty"},relativePath:"components/table-pro/demo/empty-diy.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgc3R5bGU9ImhlaWdodDogNTAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZSI+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJzZWFyY2hUYWJsZVJlZ2lzdGVyIiA6ZW1wdHlEYXRhSXNTaG93VGFibGU9ImZhbHNlIiAvPgogICAgPGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDM2MHB4Ij4KICAgICAgPGEtZW1wdHkgc3R5bGU9InBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTAlOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkiIC8+CiAgICA8L2Rpdj4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIHRpdGxlOiAnbmFtZScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIGtleTogJ25hbWUnLAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FkZHJlc3MnLAogICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgICBrZXk6ICdhZGRyZXNzJywKICB9LApdOwoKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpIHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CgpleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbmZpZygpOiBQYXJ0aWFsPGFueT4gewogIHJldHVybiB7CiAgICBsYWJlbENvbDogewogICAgICBzcGFuOiA4LAogICAgfSwKICAgIHdyYXBwZXJDb2w6IHsKICAgICAgc3BhbjogMTYsCiAgICB9LAogICAgYWN0aW9uQ29sT3B0aW9uczogewogICAgICBzcGFuOiAyNCwKICAgIH0sCiAgICBsYXlvdXQ6ICdpbmxpbmUnLAogICAgc2NoZW1hczogWwogICAgICB7CiAgICAgICAgZmllbGQ6ICdpbnB1dCcsCiAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICB9LAogICAgICB7CiAgICAgICAgZmllbGQ6ICdkYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnQ6ICdEYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgICB9LAogICAgICB9LAogICAgXSwKICB9Owp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW3NlYXJjaFRhYmxlUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgICB1c2VTZWFyY2hGb3JtOiB0cnVlLAogICAgICBmb3JtQ29uZmlnOiBnZXRGb3JtQ29uZmlnKCksCiAgICB9KTsKCiAgICByZXR1cm4gewogICAgICBzZWFyY2hUYWJsZVJlZ2lzdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgc3R5bGU9ImhlaWdodDogNTAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZSI+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJzZWFyY2hUYWJsZVJlZ2lzdGVyIiA6ZW1wdHlEYXRhSXNTaG93VGFibGU9ImZhbHNlIiAvPgogICAgPGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDM2MHB4Ij4KICAgICAgPGEtZW1wdHkgc3R5bGU9InBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTAlOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkiIC8+CiAgICA8L2Rpdj4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IGNvbHVtbnMgPSBbewogIHRpdGxlOiAnbmFtZScsCiAgZGF0YUluZGV4OiAnbmFtZScsCiAga2V5OiAnbmFtZScsCn0sIHsKICB0aXRsZTogJ0FnZScsCiAgZGF0YUluZGV4OiAnYWdlJywKICBrZXk6ICdhZ2UnLAp9LCB7CiAgdGl0bGU6ICdBZGRyZXNzJywKICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICBrZXk6ICdhZGRyZXNzJywKfV07CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pIHsKICBjb25zdCBhcnIgPSBbXTsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoYXJyKTsKICB9LCAxMDAwKTsKfQpleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbmZpZygpIHsKICByZXR1cm4gewogICAgbGFiZWxDb2w6IHsKICAgICAgc3BhbjogOCwKICAgIH0sCiAgICB3cmFwcGVyQ29sOiB7CiAgICAgIHNwYW46IDE2LAogICAgfSwKICAgIGFjdGlvbkNvbE9wdGlvbnM6IHsKICAgICAgc3BhbjogMjQsCiAgICB9LAogICAgbGF5b3V0OiAnaW5saW5lJywKICAgIHNjaGVtYXM6IFt7CiAgICAgIGZpZWxkOiAnaW5wdXQnLAogICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICB9LCB7CiAgICAgIGZpZWxkOiAnZGF0ZVBpY2tlcicsCiAgICAgIGNvbXBvbmVudDogJ0RhdGVQaWNrZXInLAogICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgIHZhbHVlRm9ybWF0OiAnWVlZWS1NTS1ERCcsCiAgICAgIH0sCiAgICB9XSwKICB9Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbc2VhcmNoVGFibGVSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIHVzZVNlYXJjaEZvcm06IHRydWUsCiAgICAgIGZvcm1Db25maWc6IGdldEZvcm1Db25maWcoKSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgc2VhcmNoVGFibGVSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[n("div",lt,[p(u,{onRegister:s.searchTableRegister,emptyDataIsShowTable:!1},null,8,["onRegister"]),n("div",it,[p(i,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}})])])]),htmlCode:o(()=>[kt]),jsVersionHtml:o(()=>[rt]),_:1},8,["jsfiddle"])}var dt=C(ut,[["render",gt]]);const It=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function Ct({params:s,success:c}){const e=[];setTimeout(()=>{c(e)},1e3)}function At(){return{labelCol:{span:8},wrapperCol:{span:16},actionColOptions:{span:24},layout:"inline",schemas:[{field:"input",component:"Input",colProps:{xl:12,xxl:8}},{field:"datePicker",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{xl:12,xxl:8}}]}}const mt=m({setup(){const[s]=b({api:Ct,columns:It,useSearchForm:!0,formConfig:At(),emptyPlaceholderClassName:()=>"new-placeholder-empty"});return{searchTableRegister:s}}}),bt={style:{height:"500px",position:"relative"}},wt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Partial"),n("span",{class:"token operator"},"<"),t("any"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
        colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
          xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
          xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"emptyPlaceholderClassName"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token string"},"'new-placeholder-empty'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".new-placeholder-empty"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 200px "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ht=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
        xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      colProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        xl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
        xxl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"emptyPlaceholderClassName"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token string"},"'new-placeholder-empty'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".new-placeholder-empty"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 200px "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function yt(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Empty.",cn:"\u8BBE\u7F6E `emptyPlaceholderClassName` \u7A7A\u6570\u636E\u5360\u4F4D\u9AD8\u5EA6\u7684\u4FEE\u6539",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E <code>emptyPlaceholderClassName</code> \u7A7A\u6570\u636E\u5360\u4F4D\u9AD8\u5EA6\u7684\u4FEE\u6539</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Empty.</p>
`,order:0,title:{"zh-CN":"\u7A7A","en-US":"Empty"},relativePath:"components/table-pro/demo/empty.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgc3R5bGU9ImhlaWdodDogNTAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZSI+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJzZWFyY2hUYWJsZVJlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBBamF4QXBpIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICduYW1lJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FnZScsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LAogIHsKICAgIHRpdGxlOiAnQWRkcmVzcycsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICAgIGtleTogJ2FkZHJlc3MnLAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgewogIGNvbnN0IGFycjogYW55ID0gW107CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KCmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29uZmlnKCk6IFBhcnRpYWw8YW55PiB7CiAgcmV0dXJuIHsKICAgIGxhYmVsQ29sOiB7CiAgICAgIHNwYW46IDgsCiAgICB9LAogICAgd3JhcHBlckNvbDogewogICAgICBzcGFuOiAxNiwKICAgIH0sCiAgICBhY3Rpb25Db2xPcHRpb25zOiB7CiAgICAgIHNwYW46IDI0LAogICAgfSwKICAgIGxheW91dDogJ2lubGluZScsCiAgICBzY2hlbWFzOiBbCiAgICAgIHsKICAgICAgICBmaWVsZDogJ2lucHV0JywKICAgICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICAgICAgY29sUHJvcHM6IHsKICAgICAgICAgIHhsOiAxMiwKICAgICAgICAgIHh4bDogOCwKICAgICAgICB9LAogICAgICB9LAogICAgICB7CiAgICAgICAgZmllbGQ6ICdkYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnQ6ICdEYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgICB9LAogICAgICAgIGNvbFByb3BzOiB7CiAgICAgICAgICB4bDogMTIsCiAgICAgICAgICB4eGw6IDgsCiAgICAgICAgfSwKICAgICAgfSwKICAgIF0sCiAgfTsKfQoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IFtzZWFyY2hUYWJsZVJlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgICAgdXNlU2VhcmNoRm9ybTogdHJ1ZSwKICAgICAgZm9ybUNvbmZpZzogZ2V0Rm9ybUNvbmZpZygpLAogICAgICBlbXB0eVBsYWNlaG9sZGVyQ2xhc3NOYW1lOiAoKSA9PiB7CiAgICAgICAgcmV0dXJuICduZXctcGxhY2Vob2xkZXItZW1wdHknOwogICAgICB9LAogICAgfSk7CgogICAgcmV0dXJuIHsKICAgICAgc2VhcmNoVGFibGVSZWdpc3RlciwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci5uZXctcGxhY2Vob2xkZXItZW1wdHkgewogIGhlaWdodDogMjAwcHggIWltcG9ydGFudDsKfQo8L3N0eWxlPgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgc3R5bGU9ImhlaWdodDogNTAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZSI+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJzZWFyY2hUYWJsZVJlZ2lzdGVyIiAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAnQWdlJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn0sIHsKICB0aXRsZTogJ0FkZHJlc3MnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIGtleTogJ2FkZHJlc3MnLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgewogIGNvbnN0IGFyciA9IFtdOwogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29uZmlnKCkgewogIHJldHVybiB7CiAgICBsYWJlbENvbDogewogICAgICBzcGFuOiA4LAogICAgfSwKICAgIHdyYXBwZXJDb2w6IHsKICAgICAgc3BhbjogMTYsCiAgICB9LAogICAgYWN0aW9uQ29sT3B0aW9uczogewogICAgICBzcGFuOiAyNCwKICAgIH0sCiAgICBsYXlvdXQ6ICdpbmxpbmUnLAogICAgc2NoZW1hczogW3sKICAgICAgZmllbGQ6ICdpbnB1dCcsCiAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgY29sUHJvcHM6IHsKICAgICAgICB4bDogMTIsCiAgICAgICAgeHhsOiA4LAogICAgICB9LAogICAgfSwgewogICAgICBmaWVsZDogJ2RhdGVQaWNrZXInLAogICAgICBjb21wb25lbnQ6ICdEYXRlUGlja2VyJywKICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICB2YWx1ZUZvcm1hdDogJ1lZWVktTU0tREQnLAogICAgICB9LAogICAgICBjb2xQcm9wczogewogICAgICAgIHhsOiAxMiwKICAgICAgICB4eGw6IDgsCiAgICAgIH0sCiAgICB9XSwKICB9Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbc2VhcmNoVGFibGVSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIHVzZVNlYXJjaEZvcm06IHRydWUsCiAgICAgIGZvcm1Db25maWc6IGdldEZvcm1Db25maWcoKSwKICAgICAgZW1wdHlQbGFjZWhvbGRlckNsYXNzTmFtZTogKCkgPT4gewogICAgICAgIHJldHVybiAnbmV3LXBsYWNlaG9sZGVyLWVtcHR5JzsKICAgICAgfSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgc2VhcmNoVGFibGVSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgoubmV3LXBsYWNlaG9sZGVyLWVtcHR5IHsKICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7Cn0KPC9zdHlsZT4="}},{default:o(()=>[n("div",bt,[p(u,{onRegister:s.searchTableRegister},null,8,["onRegister"])])]),htmlCode:o(()=>[wt]),jsVersionHtml:o(()=>[ht]),_:1},8,["jsfiddle"])}var Zt=C(mt,[["render",yt]]);const Gt=[{dataIndex:"name",key:"name",slots:{title:"customTitle"}},{title:"Age",dataIndex:"age",key:"age",helpMessage:"\u5E74\u9F84"}];function Bt({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`});setTimeout(()=>{c(e)},1e3)}const ft=m({setup(){const[s]=b({api:Bt,columns:Gt});return{headerRegister:s}}}),Wt=n("span",null,[t(" \u59D3\u540D "),n("span",{style:{color:"red","padding-left":"8px"}},"water")],-1),Ft=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headerRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#customTitle"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        \u59D3\u540D
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("water"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'customTitle'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    helpMessage`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("headerRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      headerRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Rt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headerRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#customTitle"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        \u59D3\u540D
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("water"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'customTitle'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  helpMessage`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E74\u9F84'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("headerRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      headerRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Yt(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Header.",cn:"\u81EA\u5B9A\u4E49\u8868\u5934",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u8868\u5934</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Header.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u8868\u5934","en-US":"Header"},relativePath:"components/table-pro/demo/header.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImhlYWRlclJlZ2lzdGVyIj4KICAgIDx0ZW1wbGF0ZSAjY3VzdG9tVGl0bGU+CiAgICAgIDxzcGFuPgogICAgICAgIOWnk+WQjQogICAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjogcmVkOyBwYWRkaW5nLWxlZnQ6IDhweCI+d2F0ZXI8L3NwYW4+CiAgICAgIDwvc3Bhbj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRhYmxlLXBybz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgICBzbG90czogeyB0aXRsZTogJ2N1c3RvbVRpdGxlJyB9LAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICAgIGtleTogJ2FnZScsCiAgICBoZWxwTWVzc2FnZTogJ+W5tOm+hCcsCiAgfSwKXTsKCmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7IHBhcmFtcywgc3VjY2VzcyB9OiBBamF4QXBpKSB7CiAgY29uc3QgYXJyOiBhbnkgPSBbXTsKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW2hlYWRlclJlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgaGVhZGVyUmVnaXN0ZXIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9ImhlYWRlclJlZ2lzdGVyIj4KICAgIDx0ZW1wbGF0ZSAjY3VzdG9tVGl0bGU+CiAgICAgIDxzcGFuPgogICAgICAgIOWnk+WQjQogICAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjogcmVkOyBwYWRkaW5nLWxlZnQ6IDhweCI+d2F0ZXI8L3NwYW4+CiAgICAgIDwvc3Bhbj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXRhYmxlLXBybz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IGNvbHVtbnMgPSBbewogIGRhdGFJbmRleDogJ25hbWUnLAogIGtleTogJ25hbWUnLAogIHNsb3RzOiB7CiAgICB0aXRsZTogJ2N1c3RvbVRpdGxlJywKICB9LAp9LCB7CiAgdGl0bGU6ICdBZ2UnLAogIGRhdGFJbmRleDogJ2FnZScsCiAga2V5OiAnYWdlJywKICBoZWxwTWVzc2FnZTogJ+W5tOm+hCcsCn1dOwpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoewogIHBhcmFtcywKICBzdWNjZXNzLAp9KSB7CiAgY29uc3QgYXJyID0gW107CgogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbaGVhZGVyUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgfSk7CiAgICByZXR1cm4gewogICAgICBoZWFkZXJSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(u,{onRegister:s.headerRegister},{customTitle:o(()=>[Wt]),_:1},8,["onRegister"])]),htmlCode:o(()=>[Ft]),jsVersionHtml:o(()=>[Rt]),_:1},8,["jsfiddle"])}var Xt=C(ft,[["render",Yt]]);const Vt=[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"\u5F00\u59CB\u65F6\u95F4",width:120,sorter:!0,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",width:120,sorter:!0,dataIndex:"endTime"}];function Kt(){return(()=>{const c=[];for(let e=0;e<40;e++)c.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return c})()}const vt=m({components:{AButton:J},setup(){const s=G(!1),c=G(!1),e=G(!0),a=G(!1);function r(){s.value=!s.value}function k(){c.value=!0,setTimeout(()=>{c.value=!1,a.value={pageSize:20}},3e3)}function u(){e.value=!e.value}return{columns:Vt,data:Kt(),canResize:s,loading:c,border:e,toggleCanResize:r,toggleLoading:k,toggleBorder:u,pagination:a}}}),St=t(" \u5F00\u542Floading "),Jt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(`
    `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u539F\u59CB\u4F7F\u7528"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"title-help-message"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u4E0D\u592A\u63A8\u8350"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":can-resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("canResize"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("border"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-table-setting"),t(`
    `),n("span",{class:"token attr-name"},":pagination"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pagination"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ y: 300 }"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#toolbar"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggleCanResize"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ !canResize ? '\u81EA\u9002\u5E94\u9AD8\u5EA6' : '\u53D6\u6D88\u81EA\u9002\u5E94' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggleBorder"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ !border ? '\u663E\u793A\u8FB9\u6846' : '\u9690\u85CF\u8FB9\u6846' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggleLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u5F00\u542Floading "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Button "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
    fixed`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
    filters`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'male'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(" text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'female'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    defaultHidden`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBasicData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" data"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),t(`
        age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
        beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" data"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    AButton`),n("span",{class:"token operator"},":"),t(" Button"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" canResize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" border "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" pagination "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggleCanResize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      canResize`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("canResize"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggleLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        pagination`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(" pageSize"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggleBorder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      border`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("border"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getBasicData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      canResize`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      border`),n("span",{class:"token punctuation"},","),t(`
      toggleCanResize`),n("span",{class:"token punctuation"},","),t(`
      toggleLoading`),n("span",{class:"token punctuation"},","),t(`
      toggleBorder`),n("span",{class:"token punctuation"},","),t(`
      pagination`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ht=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(`
    `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u539F\u59CB\u4F7F\u7528"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"title-help-message"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u4E0D\u592A\u63A8\u8350"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("data"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":can-resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("canResize"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("border"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-table-setting"),t(`
    `),n("span",{class:"token attr-name"},":pagination"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pagination"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ y: 300 }"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#toolbar"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggleCanResize"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ !canResize ? '\u81EA\u9002\u5E94\u9AD8\u5EA6' : '\u53D6\u6D88\u81EA\u9002\u5E94' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggleBorder"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ !border ? '\u663E\u793A\u8FB9\u6846' : '\u9690\u85CF\u8FB9\u6846' }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toggleLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u5F00\u542Floading "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Button "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
  fixed`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
  filters`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'male'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'female'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
  sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  defaultHidden`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
  sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
  sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBasicData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),t(`
        age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
        beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"return"),t(" data"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    AButton`),n("span",{class:"token operator"},":"),t(" Button"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" canResize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" border "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" pagination "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggleCanResize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      canResize`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("canResize"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggleLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        pagination`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          pageSize`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toggleBorder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      border`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("border"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      data`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getBasicData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      canResize`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      border`),n("span",{class:"token punctuation"},","),t(`
      toggleCanResize`),n("span",{class:"token punctuation"},","),t(`
      toggleLoading`),n("span",{class:"token punctuation"},","),t(`
      toggleBorder`),n("span",{class:"token punctuation"},","),t(`
      pagination`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function xt(s,c,e,a,r,k){const u=l("a-button"),i=l("a-table-pro"),A=l("demo-box");return d(),I(A,{jsfiddle:{us:"Origin table.",cn:"\u539F\u59CB\u4F7F\u7528",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u539F\u59CB\u4F7F\u7528</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Origin table.</p>
`,order:0,title:{"zh-CN":"\u539F\u59CB\u4F7F\u7528","en-US":"Origin table"},relativePath:"components/table-pro/demo/origin.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybwogICAgdGl0bGU9IuWOn+Wni+S9v+eUqCIKICAgIHRpdGxlLWhlbHAtbWVzc2FnZT0i5LiN5aSq5o6o6I2QIgogICAgOmNvbHVtbnM9ImNvbHVtbnMiCiAgICA6ZGF0YS1zb3VyY2U9ImRhdGEiCiAgICA6Y2FuLXJlc2l6ZT0iY2FuUmVzaXplIgogICAgOmxvYWRpbmc9ImxvYWRpbmciCiAgICA6Ym9yZGVyZWQ9ImJvcmRlciIKICAgIHNob3ctdGFibGUtc2V0dGluZwogICAgOnBhZ2luYXRpb249InBhZ2luYXRpb24iCiAgICA6c2Nyb2xsPSJ7IHk6IDMwMCB9IgogID4KICAgIDx0ZW1wbGF0ZSAjdG9vbGJhcj4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0idG9nZ2xlQ2FuUmVzaXplIj4KICAgICAgICB7eyAhY2FuUmVzaXplID8gJ+iHqumAguW6lOmrmOW6picgOiAn5Y+W5raI6Ieq6YCC5bqUJyB9fQogICAgICA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJ0b2dnbGVCb3JkZXIiPgogICAgICAgIHt7ICFib3JkZXIgPyAn5pi+56S66L655qGGJyA6ICfpmpDol4/ovrnmoYYnIH19CiAgICAgIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InRvZ2dsZUxvYWRpbmciPiDlvIDlkK9sb2FkaW5nIDwvYS1idXR0b24+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgppbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7Cgpjb25zdCBjb2x1bW5zID0gWwogIHsKICAgIHRpdGxlOiAnSUQnLAogICAgZGF0YUluZGV4OiAnaWQnLAogICAgZml4ZWQ6ICdsZWZ0JywKICAgIHdpZHRoOiAyMDAsCiAgfSwKICB7CiAgICB0aXRsZTogJ+Wnk+WQjScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIHdpZHRoOiAxNTAsCiAgICBmaWx0ZXJzOiBbCiAgICAgIHsgdGV4dDogJ01hbGUnLCB2YWx1ZTogJ21hbGUnIH0sCiAgICAgIHsgdGV4dDogJ0ZlbWFsZScsIHZhbHVlOiAnZmVtYWxlJyB9LAogICAgXSwKICB9LAogIHsKICAgIHRpdGxlOiAn5Zyw5Z2AJywKICAgIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIH0sCiAgewogICAgdGl0bGU6ICfnvJblj7cnLAogICAgZGF0YUluZGV4OiAnbm8nLAogICAgd2lkdGg6IDE1MCwKICAgIHNvcnRlcjogdHJ1ZSwKICAgIGRlZmF1bHRIaWRkZW46IHRydWUsCiAgfSwKICB7CiAgICB0aXRsZTogJ+W8gOWni+aXtumXtCcsCiAgICB3aWR0aDogMTIwLAogICAgc29ydGVyOiB0cnVlLAogICAgZGF0YUluZGV4OiAnYmVnaW5UaW1lJywKICB9LAogIHsKICAgIHRpdGxlOiAn57uT5p2f5pe26Ze0JywKICAgIHdpZHRoOiAxMjAsCiAgICBzb3J0ZXI6IHRydWUsCiAgICBkYXRhSW5kZXg6ICdlbmRUaW1lJywKICB9LApdOwoKZnVuY3Rpb24gZ2V0QmFzaWNEYXRhKCkgewogIGNvbnN0IGRhdGE6IGFueSA9ICgoKSA9PiB7CiAgICBjb25zdCBhcnI6IGFueSA9IFtdOwogICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQwOyBpbmRleCsrKSB7CiAgICAgIGFyci5wdXNoKHsKICAgICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgICBuYW1lOiAnSm9obiBCcm93bicsCiAgICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgICBubzogYCR7aW5kZXggKyAxMH1gLAogICAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICAgIGJlZ2luVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgICAgfSk7CiAgICB9CiAgICByZXR1cm4gYXJyOwogIH0pKCk7CiAgcmV0dXJuIGRhdGE7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgQUJ1dHRvbjogQnV0dG9uLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBjYW5SZXNpemUgPSByZWYoZmFsc2UpOwogICAgY29uc3QgbG9hZGluZyA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBib3JkZXIgPSByZWYodHJ1ZSk7CiAgICBjb25zdCBwYWdpbmF0aW9uID0gcmVmPGFueT4oZmFsc2UpOwoKICAgIGZ1bmN0aW9uIHRvZ2dsZUNhblJlc2l6ZSgpIHsKICAgICAgY2FuUmVzaXplLnZhbHVlID0gIWNhblJlc2l6ZS52YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB0b2dnbGVMb2FkaW5nKCkgewogICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICAgIHBhZ2luYXRpb24udmFsdWUgPSB7IHBhZ2VTaXplOiAyMCB9OwogICAgICB9LCAzMDAwKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0b2dnbGVCb3JkZXIoKSB7CiAgICAgIGJvcmRlci52YWx1ZSA9ICFib3JkZXIudmFsdWU7CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgY29sdW1ucywKICAgICAgZGF0YTogZ2V0QmFzaWNEYXRhKCksCiAgICAgIGNhblJlc2l6ZSwKICAgICAgbG9hZGluZywKICAgICAgYm9yZGVyLAogICAgICB0b2dnbGVDYW5SZXNpemUsCiAgICAgIHRvZ2dsZUxvYWRpbmcsCiAgICAgIHRvZ2dsZUJvcmRlciwKICAgICAgcGFnaW5hdGlvbiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybwogICAgdGl0bGU9IuWOn+Wni+S9v+eUqCIKICAgIHRpdGxlLWhlbHAtbWVzc2FnZT0i5LiN5aSq5o6o6I2QIgogICAgOmNvbHVtbnM9ImNvbHVtbnMiCiAgICA6ZGF0YS1zb3VyY2U9ImRhdGEiCiAgICA6Y2FuLXJlc2l6ZT0iY2FuUmVzaXplIgogICAgOmxvYWRpbmc9ImxvYWRpbmciCiAgICA6Ym9yZGVyZWQ9ImJvcmRlciIKICAgIHNob3ctdGFibGUtc2V0dGluZwogICAgOnBhZ2luYXRpb249InBhZ2luYXRpb24iCiAgICA6c2Nyb2xsPSJ7IHk6IDMwMCB9IgogID4KICAgIDx0ZW1wbGF0ZSAjdG9vbGJhcj4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0idG9nZ2xlQ2FuUmVzaXplIj4KICAgICAgICB7eyAhY2FuUmVzaXplID8gJ+iHqumAguW6lOmrmOW6picgOiAn5Y+W5raI6Ieq6YCC5bqUJyB9fQogICAgICA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJ0b2dnbGVCb3JkZXIiPgogICAgICAgIHt7ICFib3JkZXIgPyAn5pi+56S66L655qGGJyA6ICfpmpDol4/ovrnmoYYnIH19CiAgICAgIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InRvZ2dsZUxvYWRpbmciPiDlvIDlkK9sb2FkaW5nIDwvYS1idXR0b24+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBjb2x1bW5zID0gW3sKICB0aXRsZTogJ0lEJywKICBkYXRhSW5kZXg6ICdpZCcsCiAgZml4ZWQ6ICdsZWZ0JywKICB3aWR0aDogMjAwLAp9LCB7CiAgdGl0bGU6ICflp5PlkI0nLAogIGRhdGFJbmRleDogJ25hbWUnLAogIHdpZHRoOiAxNTAsCiAgZmlsdGVyczogW3sKICAgIHRleHQ6ICdNYWxlJywKICAgIHZhbHVlOiAnbWFsZScsCiAgfSwgewogICAgdGV4dDogJ0ZlbWFsZScsCiAgICB2YWx1ZTogJ2ZlbWFsZScsCiAgfV0sCn0sIHsKICB0aXRsZTogJ+WcsOWdgCcsCiAgZGF0YUluZGV4OiAnYWRkcmVzcycsCn0sIHsKICB0aXRsZTogJ+e8luWPtycsCiAgZGF0YUluZGV4OiAnbm8nLAogIHdpZHRoOiAxNTAsCiAgc29ydGVyOiB0cnVlLAogIGRlZmF1bHRIaWRkZW46IHRydWUsCn0sIHsKICB0aXRsZTogJ+W8gOWni+aXtumXtCcsCiAgd2lkdGg6IDEyMCwKICBzb3J0ZXI6IHRydWUsCiAgZGF0YUluZGV4OiAnYmVnaW5UaW1lJywKfSwgewogIHRpdGxlOiAn57uT5p2f5pe26Ze0JywKICB3aWR0aDogMTIwLAogIHNvcnRlcjogdHJ1ZSwKICBkYXRhSW5kZXg6ICdlbmRUaW1lJywKfV07CgpmdW5jdGlvbiBnZXRCYXNpY0RhdGEoKSB7CiAgY29uc3QgZGF0YSA9ICgoKSA9PiB7CiAgICBjb25zdCBhcnIgPSBbXTsKCiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDA7IGluZGV4KyspIHsKICAgICAgYXJyLnB1c2goewogICAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICAgIG5hbWU6ICdKb2huIEJyb3duJywKICAgICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICAgIG5vOiBgJHtpbmRleCArIDEwfWAsCiAgICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICAgICAgYmVnaW5UaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICAgICAgZW5kVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgICB9KTsKICAgIH0KCiAgICByZXR1cm4gYXJyOwogIH0pKCk7CgogIHJldHVybiBkYXRhOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEFCdXR0b246IEJ1dHRvbiwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGNhblJlc2l6ZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IGJvcmRlciA9IHJlZih0cnVlKTsKICAgIGNvbnN0IHBhZ2luYXRpb24gPSByZWYoZmFsc2UpOwoKICAgIGZ1bmN0aW9uIHRvZ2dsZUNhblJlc2l6ZSgpIHsKICAgICAgY2FuUmVzaXplLnZhbHVlID0gIWNhblJlc2l6ZS52YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB0b2dnbGVMb2FkaW5nKCkgewogICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICAgIHBhZ2luYXRpb24udmFsdWUgPSB7CiAgICAgICAgICBwYWdlU2l6ZTogMjAsCiAgICAgICAgfTsKICAgICAgfSwgMzAwMCk7CiAgICB9CgogICAgZnVuY3Rpb24gdG9nZ2xlQm9yZGVyKCkgewogICAgICBib3JkZXIudmFsdWUgPSAhYm9yZGVyLnZhbHVlOwogICAgfQoKICAgIHJldHVybiB7CiAgICAgIGNvbHVtbnMsCiAgICAgIGRhdGE6IGdldEJhc2ljRGF0YSgpLAogICAgICBjYW5SZXNpemUsCiAgICAgIGxvYWRpbmcsCiAgICAgIGJvcmRlciwKICAgICAgdG9nZ2xlQ2FuUmVzaXplLAogICAgICB0b2dnbGVMb2FkaW5nLAogICAgICB0b2dnbGVCb3JkZXIsCiAgICAgIHBhZ2luYXRpb24sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(i,{title:"\u539F\u59CB\u4F7F\u7528","title-help-message":"\u4E0D\u592A\u63A8\u8350",columns:s.columns,"data-source":s.data,"can-resize":s.canResize,loading:s.loading,bordered:s.border,"show-table-setting":"",pagination:s.pagination,scroll:{y:300}},{toolbar:o(()=>[p(u,{type:"primary",onClick:s.toggleCanResize},{default:o(()=>[t(h(s.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),p(u,{type:"primary",onClick:s.toggleBorder},{default:o(()=>[t(h(s.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),p(u,{type:"primary",onClick:s.toggleLoading},{default:o(()=>[St]),_:1},8,["onClick"])]),_:1},8,["columns","data-source","can-resize","loading","bordered","pagination"])]),htmlCode:o(()=>[Jt]),jsVersionHtml:o(()=>[Ht]),_:1},8,["jsfiddle"])}var Lt=C(vt,[["render",xt]]),Nt=[{key:"0",id:410,wxDepartmentId:1,name:"\u5FEB\u4E50\u9B54\u65F6",nameEn:"",parentId:0,children:[{key:"0-0",type:"department",id:411,wxDepartmentId:3,name:"\u9999\u62C9\u67D0\u9152\u5E971",nameEn:"",children:[{key:"0-0-0",type:"department",id:412,wxDepartmentId:4,name:"\u9152\u5E971\u9910\u996E\u90E8\u95E8",nameEn:"",children:[{key:"0-0-0-0",type:"user",isLeaf:!0,id:1222,userId:"SunJiaMin",name:"\u5B59\u4F73\u654F",alias:"",position:"",email:"",mobile:"18702180013",avatar:"http://wework.qpic.cn/bizmail/R2KgCcXlxxViazzgyCPZcsDWnMkOtI7BuTIkMm6yWBFsZtpA6JWujDQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[412]},{key:"0-0-0-1",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-0-0-2",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]}]},{key:"0-0-1",type:"user",isLeaf:!0,id:1216,userId:"cfe7385ed75ecd2d21112eb44b36ae7b",name:"Jia Wang",alias:"yamiyo",position:"\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u804C\u52A1\u6700\u591A\u5C55\u793A\u591A\u5C11\u4E2A\u5B57",email:"",mobile:"13466622785",avatar:"http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMfQiaNOic7rsPVw5fNfrNSTQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,411]},{key:"0-0-2",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-0-3",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-0-4",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]}]},{key:"0-1",type:"department",id:413,wxDepartmentId:11,name:"\u9999\u62C9\u67D0\u9152\u5E972",nameEn:"",children:[{key:"0-1-0",type:"department",id:414,wxDepartmentId:12,name:"\u9152\u5E972\u5BA2\u623F\u90E8\u95E8",nameEn:"",children:[{key:"0-1-0-0",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-1-0-1",type:"user",isLeaf:!0,id:1225,userId:"sharon",name:"\u5F20\u73B2",alias:"Sharon Zhang",position:"Manager\uFF0CDigital Marketing",email:"",mobile:"15201965685",avatar:"http://wework.qpic.cn/bizmail/zmJX1iaqtjkdpjEaJFtwe8Ooy7RKDLtNDoghxGtdzoicicaASdCXOgbHA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413,414]}]},{key:"0-1-1",type:"user",isLeaf:!0,id:1220,userId:"LiMengLong",name:"\u674E\u68A6\u9F99",alias:"",position:"",email:"",mobile:"13810902078",avatar:"https://wework.qpic.cn/wwpic/673861_W0FS2rxbTrODoLt_1649674485/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413]},{key:"0-1-2",type:"user",isLeaf:!0,id:1226,userId:"ec1125fea3cfbd2cf1e903b462889d6d",name:"\u9646\u78A7\u4E91\uFF08Ruby\uFF09",alias:"Ruby",position:"XXX\u7ECF\u7406",email:"",mobile:"15021486796",avatar:"http://wework.qpic.cn/wwhead/duc2TvpEgSQykrhF5Jh51Hibiam7jBY1QfbhVy73yVpOoibibcMZTUjxY6BlCkDPdp4f1nSmib2DmDUo/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,413]},{key:"0-1-3",type:"user",isLeaf:!0,id:1233,userId:"ChenXiXi",name:"\u9648\u831C\u831C",alias:"",position:"",email:"",mobile:"18002288680",avatar:"http://wework.qpic.cn/bizmail/9icpBHlHJ1AHFCLPP76zdxq3AFuu8lrVIt6Pgo25OGO8jyrQgfHQ8iaQ/0",roleName:"ddd",roleCode:"",departmentId:[413]},{key:"0-1-4",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-1-5",type:"user",isLeaf:!0,id:1221,userId:"ZhangHaiHui",name:"\u5F20\u6D77\u8F89",alias:"\u6D3B\u52A8\u65F6",position:"",email:"",mobile:"13826426062",avatar:"http://wework.qpic.cn/bizmail/Oibs2biaQL9tf6LvUasfb6UgYmq4znnJebbxFzSNtGUZ4DTXfticMUUKg/0",roleName:"\u90E8\u95E8\u7BA1\u7406\u5458",roleCode:"department_admin",departmentId:[413]},{key:"0-1-6",type:"user",isLeaf:!0,id:1225,userId:"sharon",name:"\u5F20\u73B2",alias:"Sharon Zhang",position:"Manager\uFF0CDigital Marketing",email:"",mobile:"15201965685",avatar:"http://wework.qpic.cn/bizmail/zmJX1iaqtjkdpjEaJFtwe8Ooy7RKDLtNDoghxGtdzoicicaASdCXOgbHA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[413,414]},{key:"0-1-7",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]}]},{key:"0-2",type:"department",id:415,wxDepartmentId:13,name:"\u90E8\u95E83-GSO",nameEn:"",children:[{key:"0-2-0",type:"user",isLeaf:!0,id:1227,userId:"WangJia",name:"\u738B\u4F73",alias:"",position:"",email:"",mobile:"18618110037",avatar:"http://wework.qpic.cn/bizmail/FNEmkLVDia0PrYDIecE3KsXXVAY5o5Y9RqVP4DLpjYe0AuAcZRIiaicLg/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[415]},{key:"0-2-1",type:"user",isLeaf:!0,id:1228,userId:"BeiFengNuan",name:"\u5317\u98CE\u6696",alias:"",position:"\u534E\u5317\u533A\u8D1F\u8D23\u4EBA",email:"",mobile:"13249392000",avatar:"http://wework.qpic.cn/bizmail/ic4dN4XlOX5ZJxyibHb4GZ3TT0RMmSD69kCOMYLE5khibw5Kkc5xAnDZw/0",roleName:"\u90E8\u95E8\u7BA1\u7406\u5458",roleCode:"department_admin",departmentId:[415]},{key:"0-2-2",type:"user",isLeaf:!0,id:1229,userId:"vicky",name:"\u6A0A\u7EF4\u5A67",alias:"\u6D66\u4E1C\u9999\u683C\u91CC\u62C9Vicky Fan",position:"Managers , Digital Marketing, China Marketing",email:"",mobile:"18516089093",avatar:"http://wework.qpic.cn/bizmail/WNaprWKRiaLyib66KibHiazibPe9ib3417D7xkfmQf6vtRG4Vlgbkib72vN3w/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[415]}]},{key:"0-3",type:"department",id:416,wxDepartmentId:14,name:"\u9152\u5E973",nameEn:"",children:[{key:"0-3-0",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]}]},{key:"0-4",type:"user",isLeaf:!0,id:1215,userId:"wlw",name:"\u738B\u7ACB\u4F4D",alias:"",position:"",email:"",mobile:"18810277472",avatar:"http://wework.qpic.cn/bizmail/rbSrM1lTX2B306hVqc6EEbKSrYIoF3060jZicsYhW33hAkbXlc5zzjQ/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412]},{key:"0-5",type:"user",isLeaf:!0,id:1216,userId:"cfe7385ed75ecd2d21112eb44b36ae7b",name:"Jia Wang",alias:"yamiyo",position:"\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u804C\u52A1\u6700\u591A\u5C55\u793A\u591A\u5C11\u4E2A\u5B57",email:"",mobile:"13466622785",avatar:"http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMfQiaNOic7rsPVw5fNfrNSTQ/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,411]},{key:"0-6",type:"user",isLeaf:!0,id:1217,userId:"foxglove",name:"\u4E01\u654F",alias:"Min Ding",position:"Manager, Product Design, TDC",email:"",mobile:"17681448860",avatar:"http://wework.qpic.cn/bizmail/HY6zhH2HA5loORgvPAPxnKicdAD8UNvdvRtzzQLqicffuVaLITFicaU8w/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-7",type:"user",isLeaf:!0,id:1218,userId:"Jingjingzhou",name:"\u5468\u9759",alias:"\u6D66\u4E1C\u9999\u683C\u91CC\u62C9 Jing Zhou",position:"AVP, Digital Marketing, China Marketing",email:"jing.zhou@shangri-la.com",mobile:"13917667875",avatar:"https://wework.qpic.cn/wwhead/duc2TvpEgSSdsPInfahzx3ptwPMQibSLWTiaHyHA21MJzNyiaydYJn8FC7lsL66KxjTlA7VtovcrYs/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-8",type:"user",isLeaf:!0,id:1219,userId:"rc",name:"RC",alias:"Raymond CW Chan",position:"Manager, Strategy & Business Transformation",email:"",mobile:"",avatar:"http://wework.qpic.cn/bizmail/wCTZ6QugWZt025mlSry2RWpUMuaXbKSr6x1BDicrXPEA3hCIryT0libA/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-9",type:"user",isLeaf:!0,id:1223,userId:"WuXiaoXiang",name:"\u5434\u5C0F\u7FD4",alias:"",position:"",email:"",mobile:"13533909197",avatar:"https://wework.qpic.cn/bizmail/J1kzFSTuMgvpQhuZTjFVh9rbXX2ShGQ3RpRriaa2dW7c4Zactzk9Sibw/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410]},{key:"0-10",type:"user",isLeaf:!0,id:1226,userId:"ec1125fea3cfbd2cf1e903b462889d6d",name:"\u9646\u78A7\u4E91\uFF08Ruby\uFF09",alias:"Ruby",position:"XXX\u7ECF\u7406",email:"",mobile:"15021486796",avatar:"http://wework.qpic.cn/wwhead/duc2TvpEgSQykrhF5Jh51Hibiam7jBY1QfbhVy73yVpOoibibcMZTUjxY6BlCkDPdp4f1nSmib2DmDUo/0",roleName:"\u7BA1\u7406\u5458",roleCode:"admin",departmentId:[410,413]},{key:"0-11",type:"user",isLeaf:!0,id:1230,userId:"SunJinQuan",name:"\u5B59\u91D1\u6743",alias:"",position:"",email:"",mobile:"18514236526",avatar:"https://wework.qpic.cn/bizmail/SfOaaCWFK9cmPzzia3Fhu6RFNPiattcuicH9v75Cb2z5m0IicuAnQ5JYlw/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410]},{key:"0-12",type:"user",isLeaf:!0,id:1232,userId:"XiaoJieYun",name:"\u8096\u6D01\u4E91",alias:"Joyce Siu",position:"Manager\uFF0CTest Dept",email:"",mobile:"13826499536",avatar:"http://wework.qpic.cn/bizmail/snFQIIZnOupEaVcb9iatBGLy4VI3HdlnOq7WrCHvl8H43vTsK3HAWKA/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,412,413,414,416]},{key:"0-13",type:"user",isLeaf:!0,id:1234,userId:"caijinyi",name:"\u8521\u9526\u4EEA",alias:"",position:"",email:"",mobile:"17329968874",avatar:"https://wework.qpic.cn/wwpic/443916_DCjWfYryTmGXbNU_1649838419/0",roleName:"",roleCode:"",departmentId:[410]},{key:"0-14",type:"user",isLeaf:!0,id:1235,userId:"FangXiaoChun",name:"\u65B9\u6653\u7EAF",alias:"",position:"",email:"",mobile:"13642638682",avatar:"http://wework.qpic.cn/bizmail/KzqFXCIiaR1Ga2KNYjJ0NJ961dHr4nFTU5unukMFqic12sgiaVPTw9Kkg/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410,411,413]},{key:"0-15",type:"user",isLeaf:!0,id:1236,userId:"LiHui",name:"\u674E\u8F89",alias:"",position:"\u4EA7\u54C1\u7ECF\u7406",email:"",mobile:"13011805800",avatar:"http://wework.qpic.cn/bizmail/1jPj8jNh00NQv8yUky9icB5lT29oibek3Cib3ibxxCmJcapIDiakibUObZag/0",roleName:"\u8D85\u7EA7\u7BA1\u7406\u5458",roleCode:"super_admin",departmentId:[410]}]}];const Tt=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function Dt({params:s,success:c}){console.log(s,"\u7B5B\u9009\u6761\u4EF6");const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park"});setTimeout(()=>{c(e)},1e3)}const Pt=({success:s})=>{setTimeout(()=>{s([{label:"water",value:90},{label:"antd",value:80}])},1e3)},zt=({success:s})=>{setTimeout(()=>{s([{name:"\u7EC4\u4EF6\u5E93",children:[{name:"water",id:80},{name:"antd",id:180}]},{name:"\u5B98\u7F51",children:[{name:"\u91D1\u8302",id:380},{name:"\u7968\u5927\u5927",id:480}]}])},1e3)},Ut=({success:s})=>{setTimeout(()=>{s(Nt)},100)};function Et(){return{labelWidth:120,inlineActionCol:{span:7},layout:"inline",schemas:[{field:"picker",component:"RangeGroupPicker",componentProps:{showTodayButton:!0,showYesterdayButton:!0,showSevenDaysButton:!0,showThirtyDaysButton:!0},inlineCol:{span:24}},{field:"userId",component:"ModalUser",componentProps:{api:Ut,placeholder:"\u6DFB\u52A0\u4EBA"}},{field:"input",component:"Input",componentProps:{placeholder:"\u8F93\u5165\u6846"}},{field:"selectAPI",component:"SelectApi",componentProps:{placeholder:"\u4E0B\u62C9",api:Pt}},{field:"tagModalListSelect",component:"TagModalList",componentProps:{placeholder:"\u6807\u7B7E\u7B5B\u9009",countMaxLength:2,type:"select",api:zt}},{field:"rangePicker",component:"RangePicker",componentProps:{valueFormat:"YYYY-MM-DD",placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},{field:"datePicker",component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"}}]}}const jt=m({setup(){const[s]=b({api:Dt,columns:Tt,useSearchForm:!0,formConfig:Et()});return{searchTableRegister:s}}}),Ot=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" FormProProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"import"),t(" genData "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'./data1'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("params"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7B5B\u9009\u6761\u4EF6'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getSelectForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"tagModalListApi"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getModalUserForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Partial"),n("span",{class:"token operator"},"<"),t("FormProProps"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelWidth`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    inlineActionCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'picker'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RangeGroupPicker'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          showTodayButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          showYesterdayButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          showSevenDaysButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          showThirtyDaysButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// \u5C40\u90E8\u5B9A\u4E49\u5355\u4E2A\u7EC4\u4EF6"),t(`
        inlineCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'userId'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ModalUser'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          api`),n("span",{class:"token operator"},":"),t(" getModalUserForOptions"),n("span",{class:"token punctuation"},","),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6DFB\u52A0\u4EBA'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'selectAPI'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SelectApi'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9'"),n("span",{class:"token punctuation"},","),t(`
          api`),n("span",{class:"token operator"},":"),t(" getSelectForOptions"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tagModalListSelect'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TagModalList'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6807\u7B7E\u7B5B\u9009'"),n("span",{class:"token punctuation"},","),t(`
          countMaxLength`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
          type`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
          api`),n("span",{class:"token operator"},":"),t(" tagModalListApi"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'rangePicker'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RangePicker'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u5F00\u59CB\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65E5\u671F'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Mt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" genData "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'./data1'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("params"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7B5B\u9009\u6761\u4EF6'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getSelectForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"tagModalListApi"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getModalUserForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("genData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelWidth`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    inlineActionCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'picker'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RangeGroupPicker'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        showTodayButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        showYesterdayButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        showSevenDaysButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        showThirtyDaysButton`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// \u5C40\u90E8\u5B9A\u4E49\u5355\u4E2A\u7EC4\u4EF6"),t(`
      inlineCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'userId'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ModalUser'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        api`),n("span",{class:"token operator"},":"),t(" getModalUserForOptions"),n("span",{class:"token punctuation"},","),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6DFB\u52A0\u4EBA'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'selectAPI'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SelectApi'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9'"),n("span",{class:"token punctuation"},","),t(`
        api`),n("span",{class:"token operator"},":"),t(" getSelectForOptions"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tagModalListSelect'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TagModalList'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6807\u7B7E\u7B5B\u9009'"),n("span",{class:"token punctuation"},","),t(`
        countMaxLength`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        type`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
        api`),n("span",{class:"token operator"},":"),t(" tagModalListApi"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'rangePicker'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RangePicker'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u5F00\u59CB\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65E5\u671F'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        valueFormat`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Qt(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Search.",cn:"\u5E26\u641C\u7D22\u7684\u8868\u683C",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5E26\u641C\u7D22\u7684\u8868\u683C</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Search.</p>
`,order:0,title:{"zh-CN":"\u641C\u7D22","en-US":"Search"},relativePath:"components/table-pro/demo/search.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9InNlYXJjaFRhYmxlUmVnaXN0ZXIiIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGksIEZvcm1Qcm9Qcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CgppbXBvcnQgZ2VuRGF0YSBmcm9tICcuL2RhdGExJzsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICduYW1lJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FnZScsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LAogIHsKICAgIHRpdGxlOiAnQWRkcmVzcycsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICAgIGtleTogJ2FkZHJlc3MnLAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+etm+mAieadoeS7ticpOwogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICB9KTsKICB9CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoeyBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICd3YXRlcicsCiAgICAgICAgdmFsdWU6IDkwLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICdhbnRkJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgIH0sCiAgICBdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHRhZ01vZGFsTGlzdEFwaSA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbCiAgICAgIHsKICAgICAgICBuYW1lOiAn57uE5Lu25bqTJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBuYW1lOiAnd2F0ZXInLAogICAgICAgICAgICBpZDogODAsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBuYW1lOiAnYW50ZCcsCiAgICAgICAgICAgIGlkOiAxODAsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBuYW1lOiAn5a6Y572RJywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBuYW1lOiAn6YeR6IyCJywKICAgICAgICAgICAgaWQ6IDM4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIG5hbWU6ICfnpajlpKflpKcnLAogICAgICAgICAgICBpZDogNDgwLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgXSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCBnZXRNb2RhbFVzZXJGb3JPcHRpb25zID0gKHsgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGdlbkRhdGEpOwogIH0sIDEwMCk7Cn07CgpleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbmZpZygpOiBQYXJ0aWFsPEZvcm1Qcm9Qcm9wcz4gewogIHJldHVybiB7CiAgICBsYWJlbFdpZHRoOiAxMjAsCiAgICBpbmxpbmVBY3Rpb25Db2w6IHsKICAgICAgc3BhbjogNywKICAgIH0sCiAgICBsYXlvdXQ6ICdpbmxpbmUnLAogICAgc2NoZW1hczogWwogICAgICB7CiAgICAgICAgZmllbGQ6ICdwaWNrZXInLAogICAgICAgIGNvbXBvbmVudDogJ1JhbmdlR3JvdXBQaWNrZXInLAogICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICBzaG93VG9kYXlCdXR0b246IHRydWUsCiAgICAgICAgICBzaG93WWVzdGVyZGF5QnV0dG9uOiB0cnVlLAogICAgICAgICAgc2hvd1NldmVuRGF5c0J1dHRvbjogdHJ1ZSwKICAgICAgICAgIHNob3dUaGlydHlEYXlzQnV0dG9uOiB0cnVlLAogICAgICAgIH0sCiAgICAgICAgLy8g5bGA6YOo5a6a5LmJ5Y2V5Liq57uE5Lu2CiAgICAgICAgaW5saW5lQ29sOiB7CiAgICAgICAgICBzcGFuOiAyNCwKICAgICAgICB9LAogICAgICB9LAogICAgICB7CiAgICAgICAgZmllbGQ6ICd1c2VySWQnLAogICAgICAgIGNvbXBvbmVudDogJ01vZGFsVXNlcicsCiAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgIGFwaTogZ2V0TW9kYWxVc2VyRm9yT3B0aW9ucywKICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5re75Yqg5Lq6JywKICAgICAgICB9LAogICAgICB9LAogICAgICB7CiAgICAgICAgZmllbGQ6ICdpbnB1dCcsCiAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICBwbGFjZWhvbGRlcjogJ+i+k+WFpeahhicsCiAgICAgICAgfSwKICAgICAgfSwKICAgICAgewogICAgICAgIGZpZWxkOiAnc2VsZWN0QVBJJywKICAgICAgICBjb21wb25lbnQ6ICdTZWxlY3RBcGknLAogICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICBwbGFjZWhvbGRlcjogJ+S4i+aLiScsCiAgICAgICAgICBhcGk6IGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgICAgfSwKICAgICAgfSwKICAgICAgewogICAgICAgIGZpZWxkOiAndGFnTW9kYWxMaXN0U2VsZWN0JywKICAgICAgICBjb21wb25lbnQ6ICdUYWdNb2RhbExpc3QnLAogICAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgICBwbGFjZWhvbGRlcjogJ+agh+etvuetm+mAiScsCiAgICAgICAgICBjb3VudE1heExlbmd0aDogMiwKICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLAogICAgICAgICAgYXBpOiB0YWdNb2RhbExpc3RBcGksCiAgICAgICAgfSwKICAgICAgfSwKICAgICAgewogICAgICAgIGZpZWxkOiAncmFuZ2VQaWNrZXInLAogICAgICAgIGNvbXBvbmVudDogJ1JhbmdlUGlja2VyJywKICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgICAgIHBsYWNlaG9sZGVyOiBbJ+W8gOWni+aXpeacnycsICfnu5PmnZ/ml6XmnJ8nXSwKICAgICAgICB9LAogICAgICB9LAogICAgICB7CiAgICAgICAgZmllbGQ6ICdkYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnQ6ICdEYXRlUGlja2VyJywKICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgICB9LAogICAgICB9LAogICAgXSwKICB9Owp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW3NlYXJjaFRhYmxlUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgICB1c2VTZWFyY2hGb3JtOiB0cnVlLAogICAgICBmb3JtQ29uZmlnOiBnZXRGb3JtQ29uZmlnKCksCiAgICB9KTsKCiAgICByZXR1cm4gewogICAgICBzZWFyY2hUYWJsZVJlZ2lzdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9InNlYXJjaFRhYmxlUmVnaXN0ZXIiIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgZ2VuRGF0YSBmcm9tICcuL2RhdGExJzsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICduYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBrZXk6ICduYW1lJywKfSwgewogIHRpdGxlOiAnQWdlJywKICBkYXRhSW5kZXg6ICdhZ2UnLAogIGtleTogJ2FnZScsCn0sIHsKICB0aXRsZTogJ0FkZHJlc3MnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIGtleTogJ2FkZHJlc3MnLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgewogIGNvbnNvbGUubG9nKHBhcmFtcywgJ+etm+mAieadoeS7ticpOwogIGNvbnN0IGFyciA9IFtdOwoKICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHsKICAgIGFyci5wdXNoKHsKICAgICAgaWQ6IGAke2luZGV4fWAsCiAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgIH0pOwogIH0KCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KCmNvbnN0IGdldFNlbGVjdEZvck9wdGlvbnMgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6ICd3YXRlcicsCiAgICAgIHZhbHVlOiA5MCwKICAgIH0sIHsKICAgICAgbGFiZWw6ICdhbnRkJywKICAgICAgdmFsdWU6IDgwLAogICAgfV0pOwogIH0sIDEwMDApOwp9OwoKY29uc3QgdGFnTW9kYWxMaXN0QXBpID0gKHsKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFt7CiAgICAgIG5hbWU6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBuYW1lOiAnd2F0ZXInLAogICAgICAgIGlkOiA4MCwKICAgICAgfSwgewogICAgICAgIG5hbWU6ICdhbnRkJywKICAgICAgICBpZDogMTgwLAogICAgICB9XSwKICAgIH0sIHsKICAgICAgbmFtZTogJ+WumOe9kScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIG5hbWU6ICfph5HojIInLAogICAgICAgIGlkOiAzODAsCiAgICAgIH0sIHsKICAgICAgICBuYW1lOiAn56Wo5aSn5aSnJywKICAgICAgICBpZDogNDgwLAogICAgICB9XSwKICAgIH1dKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGdldE1vZGFsVXNlckZvck9wdGlvbnMgPSAoewogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoZ2VuRGF0YSk7CiAgfSwgMTAwKTsKfTsKCmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29uZmlnKCkgewogIHJldHVybiB7CiAgICBsYWJlbFdpZHRoOiAxMjAsCiAgICBpbmxpbmVBY3Rpb25Db2w6IHsKICAgICAgc3BhbjogNywKICAgIH0sCiAgICBsYXlvdXQ6ICdpbmxpbmUnLAogICAgc2NoZW1hczogW3sKICAgICAgZmllbGQ6ICdwaWNrZXInLAogICAgICBjb21wb25lbnQ6ICdSYW5nZUdyb3VwUGlja2VyJywKICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICBzaG93VG9kYXlCdXR0b246IHRydWUsCiAgICAgICAgc2hvd1llc3RlcmRheUJ1dHRvbjogdHJ1ZSwKICAgICAgICBzaG93U2V2ZW5EYXlzQnV0dG9uOiB0cnVlLAogICAgICAgIHNob3dUaGlydHlEYXlzQnV0dG9uOiB0cnVlLAogICAgICB9LAogICAgICAvLyDlsYDpg6jlrprkuYnljZXkuKrnu4Tku7YKICAgICAgaW5saW5lQ29sOiB7CiAgICAgICAgc3BhbjogMjQsCiAgICAgIH0sCiAgICB9LCB7CiAgICAgIGZpZWxkOiAndXNlcklkJywKICAgICAgY29tcG9uZW50OiAnTW9kYWxVc2VyJywKICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICBhcGk6IGdldE1vZGFsVXNlckZvck9wdGlvbnMsCiAgICAgICAgcGxhY2Vob2xkZXI6ICfmt7vliqDkuronLAogICAgICB9LAogICAgfSwgewogICAgICBmaWVsZDogJ2lucHV0JywKICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgIHBsYWNlaG9sZGVyOiAn6L6T5YWl5qGGJywKICAgICAgfSwKICAgIH0sIHsKICAgICAgZmllbGQ6ICdzZWxlY3RBUEknLAogICAgICBjb21wb25lbnQ6ICdTZWxlY3RBcGknLAogICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgIHBsYWNlaG9sZGVyOiAn5LiL5ouJJywKICAgICAgICBhcGk6IGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIH0sCiAgICB9LCB7CiAgICAgIGZpZWxkOiAndGFnTW9kYWxMaXN0U2VsZWN0JywKICAgICAgY29tcG9uZW50OiAnVGFnTW9kYWxMaXN0JywKICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICBwbGFjZWhvbGRlcjogJ+agh+etvuetm+mAiScsCiAgICAgICAgY291bnRNYXhMZW5ndGg6IDIsCiAgICAgICAgdHlwZTogJ3NlbGVjdCcsCiAgICAgICAgYXBpOiB0YWdNb2RhbExpc3RBcGksCiAgICAgIH0sCiAgICB9LCB7CiAgICAgIGZpZWxkOiAncmFuZ2VQaWNrZXInLAogICAgICBjb21wb25lbnQ6ICdSYW5nZVBpY2tlcicsCiAgICAgIGNvbXBvbmVudFByb3BzOiB7CiAgICAgICAgdmFsdWVGb3JtYXQ6ICdZWVlZLU1NLUREJywKICAgICAgICBwbGFjZWhvbGRlcjogWyflvIDlp4vml6XmnJ8nLCAn57uT5p2f5pel5pyfJ10sCiAgICAgIH0sCiAgICB9LCB7CiAgICAgIGZpZWxkOiAnZGF0ZVBpY2tlcicsCiAgICAgIGNvbXBvbmVudDogJ0RhdGVQaWNrZXInLAogICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgIHZhbHVlRm9ybWF0OiAnWVlZWS1NTS1ERCcsCiAgICAgIH0sCiAgICB9XSwKICB9Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbc2VhcmNoVGFibGVSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIHVzZVNlYXJjaEZvcm06IHRydWUsCiAgICAgIGZvcm1Db25maWc6IGdldEZvcm1Db25maWcoKSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgc2VhcmNoVGFibGVSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(u,{onRegister:s.searchTableRegister},null,8,["onRegister"])]),htmlCode:o(()=>[Ot]),jsVersionHtml:o(()=>[Mt]),_:1},8,["jsfiddle"])}var _t=C(jt,[["render",Qt]]);const $t=[{title:"name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}];function qt({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",children:[{id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,address:"Park"}]});setTimeout(()=>{c(e)},1e3)}const ns=[{name:"\u5317\u4EAC\u5E02",value:1,items:[{name:"\u5317\u4EAC\u5E02",value:12}]},{name:"\u5929\u6D25\u5E02",value:2,items:[{name:"\u5929\u6D25\u5E02",value:22}]}];function ts(){return{labelCol:{span:8},wrapperCol:{span:16},actionColOptions:{span:24},layout:"inline",submitOnReset:!0,resetOnSubmit:!0,schemas:[{field:"region",label:"\u6309\u57CE\u5E02",component:"Cascader",componentProps:{placeholder:"\u4E0D\u9650",options:ns,showSearch:!0,fieldNames:{value:"name",label:"name",children:"items"}}},{field:"couponName",label:"\u4F18\u60E0\u5238\u540D\u79F0",component:"Input"},{field:"couponName",label:"\u4F18\u60E0\u5238\u540D\u79F0",component:"Input"},{field:"status",component:"Select",label:"\u4F18\u60E0\u5238\u72B6\u6001",componentProps:{options:[{label:"\u4F7F\u7528\u4E2D",value:1},{label:"\u5DF2\u8FC7\u671F",value:2},{label:"\u5DF2\u5931\u6548",value:3}],placeholder:"\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001"}}]}}const ss=m({setup(){const[s]=b({api:qt,columns:$t,useSearchForm:!0,formConfig:ts()});return{searchTableRegister:s}}}),as=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(`
    `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":formLabelCol"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 6,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":formWrapperCol"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 18,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" FormProProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t(`
        Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(` index
      `),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Park'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getSelectForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"tagModalListApi"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),t(`
        children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),t(`
            id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" coption "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5317\u4EAC\u5E02'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
    items`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5317\u4EAC\u5E02'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5929\u6D25\u5E02'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
    items`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5929\u6D25\u5E02'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Partial"),n("span",{class:"token operator"},"<"),t("FormProProps"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u4E4B\u540E\u81EA\u52A8\u6E05\u7A7A"),t(`
    submitOnReset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// \u91CD\u7F6E\u4E4B\u540E\u81EA\u52A8\u89E6\u53D1\u67E5\u8BE2\u6309\u94AE"),t(`
    resetOnSubmit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'region'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6309\u57CE\u5E02'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0D\u9650'"),n("span",{class:"token punctuation"},","),t(`
          options`),n("span",{class:"token operator"},":"),t(" coption"),n("span",{class:"token punctuation"},","),t(`
          showSearch`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          fieldNames`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
            label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'items'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'couponName'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F18\u60E0\u5238\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'couponName'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F18\u60E0\u5238\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'status'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F18\u60E0\u5238\u72B6\u6001'"),n("span",{class:"token punctuation"},","),t(`
        componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F7F\u7528\u4E2D'"),n("span",{class:"token punctuation"},","),t(`
              value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5DF2\u8FC7\u671F'"),n("span",{class:"token punctuation"},","),t(`
              value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5DF2\u5931\u6548'"),n("span",{class:"token punctuation"},","),t(`
              value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),os=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(`
    `),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("searchTableRegister"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":formLabelCol"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 6,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":formWrapperCol"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 18,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-waterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwaterwater"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Park'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getSelectForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"tagModalListApi"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EC4\u4EF6\u5E93'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"180"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5B98\u7F51'"),n("span",{class:"token punctuation"},","),t(`
      children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u91D1\u8302'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"380"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7968\u5927\u5927'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"480"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" coption "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5317\u4EAC\u5E02'"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
  items`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5317\u4EAC\u5E02'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5929\u6D25\u5E02'"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
  items`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5929\u6D25\u5E02'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"22"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u4E4B\u540E\u81EA\u52A8\u6E05\u7A7A"),t(`
    submitOnReset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// \u91CD\u7F6E\u4E4B\u540E\u81EA\u52A8\u89E6\u53D1\u67E5\u8BE2\u6309\u94AE"),t(`
    resetOnSubmit`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'region'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6309\u57CE\u5E02'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0D\u9650'"),n("span",{class:"token punctuation"},","),t(`
        options`),n("span",{class:"token operator"},":"),t(" coption"),n("span",{class:"token punctuation"},","),t(`
        showSearch`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        fieldNames`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
          children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'items'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'couponName'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F18\u60E0\u5238\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'couponName'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F18\u60E0\u5238\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'status'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F18\u60E0\u5238\u72B6\u6001'"),n("span",{class:"token punctuation"},","),t(`
      componentProps`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F7F\u7528\u4E2D'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5DF2\u8FC7\u671F'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5DF2\u5931\u6548'"),n("span",{class:"token punctuation"},","),t(`
          value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        placeholder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BF7\u9009\u62E9\u4F18\u60E0\u5238\u72B6\u6001'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("searchTableRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      searchTableRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function es(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Seach2.",cn:"\u5E38\u89C4\u641C\u7D22",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5E38\u89C4\u641C\u7D22</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Seach2.</p>
`,order:0,title:{"zh-CN":"\u5E38\u89C4\u641C\u7D22","en-US":"Seach2"},relativePath:"components/table-pro/demo/search2.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybwogICAgQHJlZ2lzdGVyPSJzZWFyY2hUYWJsZVJlZ2lzdGVyIgogICAgOmZvcm1MYWJlbENvbD0iewogICAgICBzcGFuOiA2LAogICAgfSIKICAgIDpmb3JtV3JhcHBlckNvbD0iewogICAgICBzcGFuOiAxOCwKICAgIH0iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSwgRm9ybVByb1Byb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICduYW1lJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAga2V5OiAnbmFtZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FnZScsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICB9LAogIHsKICAgIHRpdGxlOiAnQWRkcmVzcycsCiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICAgIGtleTogJ2FkZHJlc3MnLAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHsKICAgICAgICBNYXRoLnJhbmRvbSgpICsgaW5kZXgKICAgICAgfS13YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJgLAogICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJywKICAgICAgY2hpbGRyZW46IFsKICAgICAgICB7CiAgICAgICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgICAgIG5hbWU6IGAke01hdGgucmFuZG9tKCkgKyBpbmRleH0td2F0ZXJgLAogICAgICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgICAgIGFkZHJlc3M6ICdQYXJrJywKICAgICAgICB9LAogICAgICBdLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoWwogICAgICB7CiAgICAgICAgbGFiZWw6ICd3YXRlcicsCiAgICAgICAgdmFsdWU6IDkwLAogICAgICB9LAogICAgICB7CiAgICAgICAgbGFiZWw6ICdhbnRkJywKICAgICAgICB2YWx1ZTogODAsCiAgICAgIH0sCiAgICBdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IHRhZ01vZGFsTGlzdEFwaSA9ICh7IHBhcmFtcywgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFsKICAgICAgewogICAgICAgIG5hbWU6ICfnu4Tku7blupMnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIG5hbWU6ICd3YXRlcicsCiAgICAgICAgICAgIGlkOiA4MCwKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIG5hbWU6ICdhbnRkJywKICAgICAgICAgICAgaWQ6IDE4MCwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgfSwKICAgICAgewogICAgICAgIG5hbWU6ICflrpjnvZEnLAogICAgICAgIGNoaWxkcmVuOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIG5hbWU6ICfph5HojIInLAogICAgICAgICAgICBpZDogMzgwLAogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgbmFtZTogJ+elqOWkp+WkpycsCiAgICAgICAgICAgIGlkOiA0ODAsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICBdKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNvcHRpb24gPSBbCiAgewogICAgbmFtZTogJ+WMl+S6rOW4gicsCiAgICB2YWx1ZTogMSwKICAgIGl0ZW1zOiBbCiAgICAgIHsKICAgICAgICBuYW1lOiAn5YyX5Lqs5biCJywKICAgICAgICB2YWx1ZTogMTIsCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgbmFtZTogJ+Wkqea0peW4gicsCiAgICB2YWx1ZTogMiwKICAgIGl0ZW1zOiBbCiAgICAgIHsKICAgICAgICBuYW1lOiAn5aSp5rSl5biCJywKICAgICAgICB2YWx1ZTogMjIsCiAgICAgIH0sCiAgICBdLAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbmZpZygpOiBQYXJ0aWFsPEZvcm1Qcm9Qcm9wcz4gewogIHJldHVybiB7CiAgICBsYWJlbENvbDogewogICAgICBzcGFuOiA4LAogICAgfSwKICAgIHdyYXBwZXJDb2w6IHsKICAgICAgc3BhbjogMTYsCiAgICB9LAogICAgYWN0aW9uQ29sT3B0aW9uczogewogICAgICBzcGFuOiAyNCwKICAgIH0sCiAgICBsYXlvdXQ6ICdpbmxpbmUnLAogICAgLy8g5p+l6K+i5LmL5ZCO6Ieq5Yqo5riF56m6CiAgICBzdWJtaXRPblJlc2V0OiB0cnVlLAogICAgLy8g6YeN572u5LmL5ZCO6Ieq5Yqo6Kem5Y+R5p+l6K+i5oyJ6ZKuCiAgICByZXNldE9uU3VibWl0OiB0cnVlLAogICAgc2NoZW1hczogWwogICAgICB7CiAgICAgICAgZmllbGQ6ICdyZWdpb24nLAogICAgICAgIGxhYmVsOiAn5oyJ5Z+O5biCJywKICAgICAgICBjb21wb25lbnQ6ICdDYXNjYWRlcicsCiAgICAgICAgY29tcG9uZW50UHJvcHM6IHsKICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5LiN6ZmQJywKICAgICAgICAgIG9wdGlvbnM6IGNvcHRpb24sCiAgICAgICAgICBzaG93U2VhcmNoOiB0cnVlLAogICAgICAgICAgZmllbGROYW1lczogewogICAgICAgICAgICB2YWx1ZTogJ25hbWUnLAogICAgICAgICAgICBsYWJlbDogJ25hbWUnLAogICAgICAgICAgICBjaGlsZHJlbjogJ2l0ZW1zJywKICAgICAgICAgIH0sCiAgICAgICAgfSwKICAgICAgfSwKICAgICAgewogICAgICAgIGZpZWxkOiAnY291cG9uTmFtZScsCiAgICAgICAgbGFiZWw6ICfkvJjmg6DliLjlkI3np7AnLAogICAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgfSwKICAgICAgewogICAgICAgIGZpZWxkOiAnY291cG9uTmFtZScsCiAgICAgICAgbGFiZWw6ICfkvJjmg6DliLjlkI3np7AnLAogICAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgICAgfSwKICAgICAgewogICAgICAgIGZpZWxkOiAnc3RhdHVzJywKICAgICAgICBjb21wb25lbnQ6ICdTZWxlY3QnLAogICAgICAgIGxhYmVsOiAn5LyY5oOg5Yi454q25oCBJywKICAgICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgICAgb3B0aW9uczogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgbGFiZWw6ICfkvb/nlKjkuK0nLAogICAgICAgICAgICAgIHZhbHVlOiAxLAogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgbGFiZWw6ICflt7Lov4fmnJ8nLAogICAgICAgICAgICAgIHZhbHVlOiAyLAogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgbGFiZWw6ICflt7LlpLHmlYgnLAogICAgICAgICAgICAgIHZhbHVlOiAzLAogICAgICAgICAgICB9LAogICAgICAgICAgXSwKICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36YCJ5oup5LyY5oOg5Yi454q25oCBJywKICAgICAgICB9LAogICAgICB9LAogICAgXSwKICB9Owp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgW3NlYXJjaFRhYmxlUmVnaXN0ZXJdID0gdXNlVGFibGUoewogICAgICBhcGk6IGRlbW9MaXN0QXBpLAogICAgICBjb2x1bW5zLAogICAgICB1c2VTZWFyY2hGb3JtOiB0cnVlLAogICAgICBmb3JtQ29uZmlnOiBnZXRGb3JtQ29uZmlnKCksCiAgICB9KTsKCiAgICByZXR1cm4gewogICAgICBzZWFyY2hUYWJsZVJlZ2lzdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybwogICAgQHJlZ2lzdGVyPSJzZWFyY2hUYWJsZVJlZ2lzdGVyIgogICAgOmZvcm1MYWJlbENvbD0iewogICAgICBzcGFuOiA2LAogICAgfSIKICAgIDpmb3JtV3JhcHBlckNvbD0iewogICAgICBzcGFuOiAxOCwKICAgIH0iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmNvbnN0IGNvbHVtbnMgPSBbewogIHRpdGxlOiAnbmFtZScsCiAgZGF0YUluZGV4OiAnbmFtZScsCiAga2V5OiAnbmFtZScsCn0sIHsKICB0aXRsZTogJ0FnZScsCiAgZGF0YUluZGV4OiAnYWdlJywKICBrZXk6ICdhZ2UnLAp9LCB7CiAgdGl0bGU6ICdBZGRyZXNzJywKICBkYXRhSW5kZXg6ICdhZGRyZXNzJywKICBrZXk6ICdhZGRyZXNzJywKfV07CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pIHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcndhdGVyd2F0ZXJ3YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgICBhZ2U6IGAxJHtpbmRleH1gLAogICAgICAgIGFkZHJlc3M6ICdQYXJrJywKICAgICAgfV0sCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9Cgpjb25zdCBnZXRTZWxlY3RGb3JPcHRpb25zID0gKHsKICBwYXJhbXMsCiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbewogICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgdmFsdWU6IDkwLAogICAgfSwgewogICAgICBsYWJlbDogJ2FudGQnLAogICAgICB2YWx1ZTogODAsCiAgICB9XSk7CiAgfSwgMTAwMCk7Cn07Cgpjb25zdCB0YWdNb2RhbExpc3RBcGkgPSAoewogIHBhcmFtcywKICBzdWNjZXNzLAp9KSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFt7CiAgICAgIG5hbWU6ICfnu4Tku7blupMnLAogICAgICBjaGlsZHJlbjogW3sKICAgICAgICBuYW1lOiAnd2F0ZXInLAogICAgICAgIGlkOiA4MCwKICAgICAgfSwgewogICAgICAgIG5hbWU6ICdhbnRkJywKICAgICAgICBpZDogMTgwLAogICAgICB9XSwKICAgIH0sIHsKICAgICAgbmFtZTogJ+WumOe9kScsCiAgICAgIGNoaWxkcmVuOiBbewogICAgICAgIG5hbWU6ICfph5HojIInLAogICAgICAgIGlkOiAzODAsCiAgICAgIH0sIHsKICAgICAgICBuYW1lOiAn56Wo5aSn5aSnJywKICAgICAgICBpZDogNDgwLAogICAgICB9XSwKICAgIH1dKTsKICB9LCAxMDAwKTsKfTsKCmNvbnN0IGNvcHRpb24gPSBbewogIG5hbWU6ICfljJfkuqzluIInLAogIHZhbHVlOiAxLAogIGl0ZW1zOiBbewogICAgbmFtZTogJ+WMl+S6rOW4gicsCiAgICB2YWx1ZTogMTIsCiAgfV0sCn0sIHsKICBuYW1lOiAn5aSp5rSl5biCJywKICB2YWx1ZTogMiwKICBpdGVtczogW3sKICAgIG5hbWU6ICflpKnmtKXluIInLAogICAgdmFsdWU6IDIyLAogIH1dLAp9XTsKZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1Db25maWcoKSB7CiAgcmV0dXJuIHsKICAgIGxhYmVsQ29sOiB7CiAgICAgIHNwYW46IDgsCiAgICB9LAogICAgd3JhcHBlckNvbDogewogICAgICBzcGFuOiAxNiwKICAgIH0sCiAgICBhY3Rpb25Db2xPcHRpb25zOiB7CiAgICAgIHNwYW46IDI0LAogICAgfSwKICAgIGxheW91dDogJ2lubGluZScsCiAgICAvLyDmn6Xor6LkuYvlkI7oh6rliqjmuIXnqboKICAgIHN1Ym1pdE9uUmVzZXQ6IHRydWUsCiAgICAvLyDph43nva7kuYvlkI7oh6rliqjop6blj5Hmn6Xor6LmjInpkq4KICAgIHJlc2V0T25TdWJtaXQ6IHRydWUsCiAgICBzY2hlbWFzOiBbewogICAgICBmaWVsZDogJ3JlZ2lvbicsCiAgICAgIGxhYmVsOiAn5oyJ5Z+O5biCJywKICAgICAgY29tcG9uZW50OiAnQ2FzY2FkZXInLAogICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgIHBsYWNlaG9sZGVyOiAn5LiN6ZmQJywKICAgICAgICBvcHRpb25zOiBjb3B0aW9uLAogICAgICAgIHNob3dTZWFyY2g6IHRydWUsCiAgICAgICAgZmllbGROYW1lczogewogICAgICAgICAgdmFsdWU6ICduYW1lJywKICAgICAgICAgIGxhYmVsOiAnbmFtZScsCiAgICAgICAgICBjaGlsZHJlbjogJ2l0ZW1zJywKICAgICAgICB9LAogICAgICB9LAogICAgfSwgewogICAgICBmaWVsZDogJ2NvdXBvbk5hbWUnLAogICAgICBsYWJlbDogJ+S8mOaDoOWIuOWQjeensCcsCiAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgIH0sIHsKICAgICAgZmllbGQ6ICdjb3Vwb25OYW1lJywKICAgICAgbGFiZWw6ICfkvJjmg6DliLjlkI3np7AnLAogICAgICBjb21wb25lbnQ6ICdJbnB1dCcsCiAgICB9LCB7CiAgICAgIGZpZWxkOiAnc3RhdHVzJywKICAgICAgY29tcG9uZW50OiAnU2VsZWN0JywKICAgICAgbGFiZWw6ICfkvJjmg6DliLjnirbmgIEnLAogICAgICBjb21wb25lbnRQcm9wczogewogICAgICAgIG9wdGlvbnM6IFt7CiAgICAgICAgICBsYWJlbDogJ+S9v+eUqOS4rScsCiAgICAgICAgICB2YWx1ZTogMSwKICAgICAgICB9LCB7CiAgICAgICAgICBsYWJlbDogJ+W3sui/h+acnycsCiAgICAgICAgICB2YWx1ZTogMiwKICAgICAgICB9LCB7CiAgICAgICAgICBsYWJlbDogJ+W3suWkseaViCcsCiAgICAgICAgICB2YWx1ZTogMywKICAgICAgICB9XSwKICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+mAieaLqeS8mOaDoOWIuOeKtuaAgScsCiAgICAgIH0sCiAgICB9XSwKICB9Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbc2VhcmNoVGFibGVSZWdpc3Rlcl0gPSB1c2VUYWJsZSh7CiAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgIGNvbHVtbnMsCiAgICAgIHVzZVNlYXJjaEZvcm06IHRydWUsCiAgICAgIGZvcm1Db25maWc6IGdldEZvcm1Db25maWcoKSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgc2VhcmNoVGFibGVSZWdpc3RlciwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(u,{onRegister:s.searchTableRegister,formLabelCol:{span:6},formWrapperCol:{span:18}},null,8,["onRegister"])]),htmlCode:o(()=>[as]),jsVersionHtml:o(()=>[os]),_:1},8,["jsfiddle"])}var cs=C(ss,[["render",es]]);const ps=[{title:"name",dataIndex:"name",key:"name",width:300},{title:"Age",dataIndex:"age",key:"age",width:300},{title:"Address",dataIndex:"address",key:"address",width:1300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200},{title:"Action",key:"action",slots:{customRender:"action"}}];function us({params:s,success:c}){const e=[];for(let a=0;a<10;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});setTimeout(()=>{c(e)},1e3)}const ls=m({setup(){const[s]=b({api:us,columns:ps,showTableSetting:!0});return{toolbarRegister:s}}}),is=t(" \u81EA\u5B9A\u4E49\u7684\u5185\u5BB9 "),ks=t(" \u81EA\u5B9A\u4E49\u5934\u90E8 "),rs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toolbarRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token punctuation"},">")]),t(" \u81EA\u5B9A\u4E49\u7684\u5185\u5BB9 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#toolbar"),n("span",{class:"token punctuation"},">")]),t(" \u81EA\u5B9A\u4E49\u5934\u90E8 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1300"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Action'"),n("span",{class:"token punctuation"},","),t(`
    key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
    slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" customRender"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("toolbarRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      showTableSetting`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      toolbarRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),gs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toolbarRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#action"),n("span",{class:"token punctuation"},">")]),t(" \u81EA\u5B9A\u4E49\u7684\u5185\u5BB9 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#toolbar"),n("span",{class:"token punctuation"},">")]),t(" \u81EA\u5B9A\u4E49\u5934\u90E8 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" columns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1300"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
  dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
  width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Action'"),n("span",{class:"token punctuation"},","),t(`
  key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
  slots`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    customRender`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'action'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("toolbarRegister"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
      columns`),n("span",{class:"token punctuation"},","),t(`
      showTableSetting`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      toolbarRegister`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function ds(s,c,e,a,r,k){const u=l("a-table-pro"),i=l("demo-box");return d(),I(i,{jsfiddle:{us:"Table config.",cn:"\u7B80\u5355\u6709\u6548\u7684\u914D\u7F6E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7B80\u5355\u6709\u6548\u7684\u914D\u7F6E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Table config.</p>
`,order:0,title:{"zh-CN":"\u8868\u683C\u8BBE\u7F6E","en-US":"Table config"},relativePath:"components/table-pro/demo/toolbar.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9InRvb2xiYXJSZWdpc3RlciI+CiAgICA8dGVtcGxhdGUgI2FjdGlvbj4g6Ieq5a6a5LmJ55qE5YaF5a65IDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI3Rvb2xiYXI+IOiHquWumuS5ieWktOmDqCA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGkgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwoKY29uc3QgY29sdW1ucyA9IFsKICB7CiAgICB0aXRsZTogJ25hbWUnLAogICAgZGF0YUluZGV4OiAnbmFtZScsCiAgICBrZXk6ICduYW1lJywKICAgIHdpZHRoOiAzMDAsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FnZScsCiAgICBkYXRhSW5kZXg6ICdhZ2UnLAogICAga2V5OiAnYWdlJywKICAgIHdpZHRoOiAzMDAsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FkZHJlc3MnLAogICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgICBrZXk6ICdhZGRyZXNzJywKICAgIHdpZHRoOiAxMzAwLAogIH0sCiAgewogICAgdGl0bGU6ICflvIDlp4vml7bpl7QnLAogICAgd2lkdGg6IDIwMCwKICAgIGRhdGFJbmRleDogJ2JlZ2luVGltZScsCiAgfSwKICB7CiAgICB0aXRsZTogJ+e7k+adn+aXtumXtCcsCiAgICBkYXRhSW5kZXg6ICdlbmRUaW1lJywKICAgIHdpZHRoOiAyMDAsCiAgfSwKICB7CiAgICB0aXRsZTogJ0FjdGlvbicsCiAgICBrZXk6ICdhY3Rpb24nLAogICAgc2xvdHM6IHsgY3VzdG9tUmVuZGVyOiAnYWN0aW9uJyB9LAogIH0sCl07CgpleHBvcnQgZnVuY3Rpb24gZGVtb0xpc3RBcGkoeyBwYXJhbXMsIHN1Y2Nlc3MgfTogQWpheEFwaSkgewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICAgIGJlZ2luVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICB9KTsKICB9CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKGFycik7CiAgfSwgMTAwMCk7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbdG9vbGJhclJlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgICAgc2hvd1RhYmxlU2V0dGluZzogdHJ1ZSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdG9vbGJhclJlZ2lzdGVyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRhYmxlLXBybyBAcmVnaXN0ZXI9InRvb2xiYXJSZWdpc3RlciI+CiAgICA8dGVtcGxhdGUgI2FjdGlvbj4g6Ieq5a6a5LmJ55qE5YaF5a65IDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI3Rvb2xiYXI+IOiHquWumuS5ieWktOmDqCA8L3RlbXBsYXRlPgogIDwvYS10YWJsZS1wcm8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpjb25zdCBjb2x1bW5zID0gW3sKICB0aXRsZTogJ25hbWUnLAogIGRhdGFJbmRleDogJ25hbWUnLAogIGtleTogJ25hbWUnLAogIHdpZHRoOiAzMDAsCn0sIHsKICB0aXRsZTogJ0FnZScsCiAgZGF0YUluZGV4OiAnYWdlJywKICBrZXk6ICdhZ2UnLAogIHdpZHRoOiAzMDAsCn0sIHsKICB0aXRsZTogJ0FkZHJlc3MnLAogIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIGtleTogJ2FkZHJlc3MnLAogIHdpZHRoOiAxMzAwLAp9LCB7CiAgdGl0bGU6ICflvIDlp4vml7bpl7QnLAogIHdpZHRoOiAyMDAsCiAgZGF0YUluZGV4OiAnYmVnaW5UaW1lJywKfSwgewogIHRpdGxlOiAn57uT5p2f5pe26Ze0JywKICBkYXRhSW5kZXg6ICdlbmRUaW1lJywKICB3aWR0aDogMjAwLAp9LCB7CiAgdGl0bGU6ICdBY3Rpb24nLAogIGtleTogJ2FjdGlvbicsCiAgc2xvdHM6IHsKICAgIGN1c3RvbVJlbmRlcjogJ2FjdGlvbicsCiAgfSwKfV07CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pIHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICAgIGJlZ2luVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBbdG9vbGJhclJlZ2lzdGVyXSA9IHVzZVRhYmxlKHsKICAgICAgYXBpOiBkZW1vTGlzdEFwaSwKICAgICAgY29sdW1ucywKICAgICAgc2hvd1RhYmxlU2V0dGluZzogdHJ1ZSwKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdG9vbGJhclJlZ2lzdGVyLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[p(u,{onRegister:s.toolbarRegister},{action:o(()=>[is]),toolbar:o(()=>[ks]),_:1},8,["onRegister"])]),htmlCode:o(()=>[rs]),jsVersionHtml:o(()=>[gs]),_:1},8,["jsfiddle"])}var Is=C(ls,[["render",ds]]);function T({params:s,success:c}){const e=[];for(let a=0;a<40;a++)e.push({id:`${a}`,name:`${Math.random()+a}-water`,age:`1${a}`,no:`${a+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});setTimeout(()=>{c(e)},1e3)}const Cs=(()=>{const s=[];for(let c=0;c<140;c++)s.push({id:`${c}`,name:"\u8FD9\u662F\u65B0\u6570\u636E",age:`1${c}`,no:`${c+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return s})();function As(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:80}]}function D(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"\u5F00\u59CB\u65F6\u95F4",width:120,sorter:!0,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",width:120,sorter:!0,dataIndex:"endTime"}]}function ms(){return{labelCol:{span:8},wrapperCol:{span:16},actionColOptions:{span:24},layout:"inline",schemas:[{field:"input",label:"\u5151\u6362\u5238\u540D\u79F0",component:"Input"}]}}const bs=m({components:{[J.name]:J,[N.name]:N,[B.name]:B},setup(){const[s,{setLoading:c,setColumns:e,getColumns:a,getDataSource:r,reload:k,getPaginationRef:u,setPagination:i,getSelectRows:A,getSelectRowKeys:w,setSelectedRowKeys:y,clearSelectedRowKeys:g,deleteSelectRowByKey:f,setTableData:W,setProps:Z,getSize:F,getForm:R}]=b(),Y=async()=>{await T({params:{},success:()=>{}})};sn(async()=>{await Y(),Z({api:T,columns:D(),rowKey:"id",rowSelection:{type:"checkbox"},useSearchForm:!0,formConfig:ms()})});function X(){c(!0),setTimeout(()=>{c(!1)},1e3)}function V(){e(As())}function K(){e(D()),k({page:1})}function v(){console.log(a())}function P(){console.log(r())}function z(){console.log(u())}function U(){f("1")}function E(){i({current:2}),k()}function j(){console.log(A())}function O(){console.log(w())}function M(){y(["0","1","2"])}function Q(){W(Cs)}function _(){Z({ellipsis:!1})}const S=G(!1);function $(){S.value=!S.value,Z({showMoreHandler:S.value})}function q(){console.log(F())}function nn(){console.log(R())}function tn(){g()}return{useMethodsRegister:s,changeLoading:X,changeColumns:V,reloadTable:K,getColumn:v,getTableData:P,getPagination:z,setPaginationInfo:E,getSelectRowList:j,getSelectRowKeyList:O,setSelectedRowKeyList:M,clearSelect:tn,toDeleteSelectRowByKey:U,toSetTableData:Q,toSetProps:_,toGetSize:q,toGetForm:nn,setShowMoreHandler:$}}}),ws=t(" \u8FD8\u539F "),hs=t(" \u5F00\u542Floading "),ys=t(" \u66F4\u6539Columns "),Zs=t(" \u83B7\u53D6Columns "),Gs=t(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Bs=t(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),fs=t(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),Ws=t(" \u83B7\u53D6\u9009\u4E2D\u884C "),Fs=t(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),Rs=t(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Ys=t(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F "),Xs=t(" \u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A "),Vs=t(" \u6362\u4E00\u62E8\u6570\u636E "),Ks=t(" \u8BBE\u7F6E\u914D\u7F6E(\u53BB\u6389\u7701\u7565\u53F7) "),vs=t(" \u83B7\u53D6\u8868\u683C\u7684 size "),Ss=t(" \u83B7\u53D6\u8868\u683C "),Js=t("showMoreHandler \u663E\u793A\u6279\u91CF\u64CD\u4F5C "),Hs=t("\u6279\u91CF\u5220\u9664"),xs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),t(" wrap")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("reloadTable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8FD8\u539F "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u5F00\u542Floading "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeColumns"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u66F4\u6539Columns "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getColumn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6Columns "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setPaginationInfo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setSelectedRowKeyList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectRowList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u9009\u4E2D\u884C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectRowKeyList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearSelect"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u6E05\u7A7A\u9009\u4E2D\u884C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getPagination"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toDeleteSelectRowByKey"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toSetTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u6362\u4E00\u62E8\u6570\u636E "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toSetProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8BBE\u7F6E\u914D\u7F6E(\u53BB\u6389\u7701\u7565\u53F7) "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toGetSize"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u8868\u683C\u7684 size "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toGetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u8868\u683C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setShowMoreHandler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("showMoreHandler \u663E\u793A\u6279\u91CF\u64CD\u4F5C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("useMethodsRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#more-handler"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("\u6279\u91CF\u5220\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi"),n("span",{class:"token punctuation"},","),t(" TableProColumn "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable"),n("span",{class:"token punctuation"},","),t(" TableAction"),n("span",{class:"token punctuation"},","),t(" Space"),n("span",{class:"token punctuation"},","),t(" Button "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" getNewData"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr"),n("span",{class:"token operator"},":"),t(" any "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"140"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8FD9\u662F\u65B0\u6570\u636E'"),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBasicShortColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" TableProColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
      sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      sortOrder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ascend'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getTableProColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" TableProColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
      fixed`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
      filters`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'male'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(" text"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'female'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
      sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      defaultHidden`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
      sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
      width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
      sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),t(" Partial"),n("span",{class:"token operator"},"<"),t("any"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5151\u6362\u5238\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
        component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token punctuation"},"["),t("Button"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" Button"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"["),t("Space"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" Space"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"["),t("TableAction"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" TableAction"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t(`
      useMethodsRegister`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        setLoading`),n("span",{class:"token punctuation"},","),t(`
        setColumns`),n("span",{class:"token punctuation"},","),t(`
        getColumns`),n("span",{class:"token punctuation"},","),t(`
        getDataSource`),n("span",{class:"token punctuation"},","),t(`
        reload`),n("span",{class:"token punctuation"},","),t(`
        getPaginationRef`),n("span",{class:"token punctuation"},","),t(`
        setPagination`),n("span",{class:"token punctuation"},","),t(`
        getSelectRows`),n("span",{class:"token punctuation"},","),t(`
        getSelectRowKeys`),n("span",{class:"token punctuation"},","),t(`
        setSelectedRowKeys`),n("span",{class:"token punctuation"},","),t(`
        clearSelectedRowKeys`),n("span",{class:"token punctuation"},","),t(`
        deleteSelectRowByKey`),n("span",{class:"token punctuation"},","),t(`
        setTableData`),n("span",{class:"token punctuation"},","),t(`
        setProps`),n("span",{class:"token punctuation"},","),t(`
        getSize`),n("span",{class:"token punctuation"},","),t(`
        getForm`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getConfig"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function-variable function"},"success"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"getConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// title: 'useTable\u793A\u4F8B',"),t(`
        `),n("span",{class:"token comment"},"// titleHelpMessage: '\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5',"),t(`
        api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
        columns`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getTableProColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        rowKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
        rowSelection`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          type`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// radio or checkbox"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"changeLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"changeColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getBasicShortColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"reloadTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getTableProColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token function"},"reload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        page`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getColumn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getDataSource"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getPagination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getPaginationRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toDeleteSelectRowByKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"deleteSelectRowByKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setPaginationInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setPagination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        current`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"reload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getSelectRowList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getSelectRows"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getSelectRowKeyList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getSelectRowKeys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setSelectedRowKeyList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setSelectedRowKeys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toSetTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setTableData"),n("span",{class:"token punctuation"},"("),t("getNewData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toSetProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        ellipsis`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" moreHandlerStatus "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setShowMoreHandler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      moreHandlerStatus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("moreHandlerStatus"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        showMoreHandler`),n("span",{class:"token operator"},":"),t(" moreHandlerStatus"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toGetSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toGetForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"clearSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"clearSelectedRowKeys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      useMethodsRegister`),n("span",{class:"token punctuation"},","),t(`
      changeLoading`),n("span",{class:"token punctuation"},","),t(`
      changeColumns`),n("span",{class:"token punctuation"},","),t(`
      reloadTable`),n("span",{class:"token punctuation"},","),t(`
      getColumn`),n("span",{class:"token punctuation"},","),t(`
      getTableData`),n("span",{class:"token punctuation"},","),t(`
      getPagination`),n("span",{class:"token punctuation"},","),t(`
      setPaginationInfo`),n("span",{class:"token punctuation"},","),t(`
      getSelectRowList`),n("span",{class:"token punctuation"},","),t(`
      getSelectRowKeyList`),n("span",{class:"token punctuation"},","),t(`
      setSelectedRowKeyList`),n("span",{class:"token punctuation"},","),t(`
      clearSelect`),n("span",{class:"token punctuation"},","),t(`
      toDeleteSelectRowByKey`),n("span",{class:"token punctuation"},","),t(`
      toSetTableData`),n("span",{class:"token punctuation"},","),t(`
      toSetProps`),n("span",{class:"token punctuation"},","),t(`
      toGetSize`),n("span",{class:"token punctuation"},","),t(`
      toGetForm`),n("span",{class:"token punctuation"},","),t(`
      setShowMoreHandler`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ls=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),t(" wrap")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("reloadTable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8FD8\u539F "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u5F00\u542Floading "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("changeColumns"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u66F4\u6539Columns "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getColumn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6Columns "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setPaginationInfo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setSelectedRowKeyList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectRowList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u9009\u4E2D\u884C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectRowKeyList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearSelect"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u6E05\u7A7A\u9009\u4E2D\u884C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getPagination"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toDeleteSelectRowByKey"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toSetTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u6362\u4E00\u62E8\u6570\u636E "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toSetProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u8BBE\u7F6E\u914D\u7F6E(\u53BB\u6389\u7701\u7565\u53F7) "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toGetSize"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u8868\u683C\u7684 size "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toGetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u83B7\u53D6\u8868\u683C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setShowMoreHandler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("showMoreHandler \u663E\u793A\u6279\u91CF\u64CD\u4F5C "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table-pro")]),t(),n("span",{class:"token attr-name"},"@register"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("useMethodsRegister"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#more-handler"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("\u6279\u91CF\u5220\u9664"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-table-pro")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useTable"),n("span",{class:"token punctuation"},","),t(" TableAction"),n("span",{class:"token punctuation"},","),t(" Space"),n("span",{class:"token punctuation"},","),t(" Button "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-water"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" getNewData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" index "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"140"),n("span",{class:"token punctuation"},";"),t(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8FD9\u662F\u65B0\u6570\u636E'"),n("span",{class:"token punctuation"},","),t(`
      age`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"1"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      no`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      address`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'New York No. 1 Lake ParkNew York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),t(`
      beginTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      endTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBasicShortColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    sortOrder`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ascend'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getTableProColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'ID'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
    fixed`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
    filters`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'male'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'female'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5730\u5740'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7F16\u53F7'"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'no'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    defaultHidden`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u59CB\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'beginTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7ED3\u675F\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),t(`
    width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(`
    sorter`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    dataIndex`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'endTime'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
    labelCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    wrapperCol`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    actionColOptions`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      span`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    layout`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inline'"),n("span",{class:"token punctuation"},","),t(`
    schemas`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      field`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5151\u6362\u5238\u540D\u79F0'"),n("span",{class:"token punctuation"},","),t(`
      component`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token punctuation"},"["),t("Button"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" Button"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"["),t("Space"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" Space"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"["),t("TableAction"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),t(" TableAction"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("useMethodsRegister"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      setLoading`),n("span",{class:"token punctuation"},","),t(`
      setColumns`),n("span",{class:"token punctuation"},","),t(`
      getColumns`),n("span",{class:"token punctuation"},","),t(`
      getDataSource`),n("span",{class:"token punctuation"},","),t(`
      reload`),n("span",{class:"token punctuation"},","),t(`
      getPaginationRef`),n("span",{class:"token punctuation"},","),t(`
      setPagination`),n("span",{class:"token punctuation"},","),t(`
      getSelectRows`),n("span",{class:"token punctuation"},","),t(`
      getSelectRowKeys`),n("span",{class:"token punctuation"},","),t(`
      setSelectedRowKeys`),n("span",{class:"token punctuation"},","),t(`
      clearSelectedRowKeys`),n("span",{class:"token punctuation"},","),t(`
      deleteSelectRowByKey`),n("span",{class:"token punctuation"},","),t(`
      setTableData`),n("span",{class:"token punctuation"},","),t(`
      setProps`),n("span",{class:"token punctuation"},","),t(`
      getSize`),n("span",{class:"token punctuation"},","),t(`
      getForm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getConfig"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"demoListApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        params`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"success"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"getConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// title: 'useTable\u793A\u4F8B',"),t(`
        `),n("span",{class:"token comment"},"// titleHelpMessage: '\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5',"),t(`
        api`),n("span",{class:"token operator"},":"),t(" demoListApi"),n("span",{class:"token punctuation"},","),t(`
        columns`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getTableProColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        rowKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
        rowSelection`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          type`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkbox'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// radio or checkbox"),t(`

        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        useSearchForm`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        formConfig`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"getFormConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"changeLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"changeColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getBasicShortColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"reloadTable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getTableProColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"reload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        page`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getColumn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getColumns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getDataSource"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getPagination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getPaginationRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toDeleteSelectRowByKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"deleteSelectRowByKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setPaginationInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setPagination"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        current`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"reload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getSelectRowList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getSelectRows"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getSelectRowKeyList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getSelectRowKeys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setSelectedRowKeyList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setSelectedRowKeys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toSetTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setTableData"),n("span",{class:"token punctuation"},"("),t("getNewData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toSetProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        ellipsis`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" moreHandlerStatus "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setShowMoreHandler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      moreHandlerStatus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("moreHandlerStatus"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        showMoreHandler`),n("span",{class:"token operator"},":"),t(" moreHandlerStatus"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toGetSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"toGetForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"clearSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"clearSelectedRowKeys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      useMethodsRegister`),n("span",{class:"token punctuation"},","),t(`
      changeLoading`),n("span",{class:"token punctuation"},","),t(`
      changeColumns`),n("span",{class:"token punctuation"},","),t(`
      reloadTable`),n("span",{class:"token punctuation"},","),t(`
      getColumn`),n("span",{class:"token punctuation"},","),t(`
      getTableData`),n("span",{class:"token punctuation"},","),t(`
      getPagination`),n("span",{class:"token punctuation"},","),t(`
      setPaginationInfo`),n("span",{class:"token punctuation"},","),t(`
      getSelectRowList`),n("span",{class:"token punctuation"},","),t(`
      getSelectRowKeyList`),n("span",{class:"token punctuation"},","),t(`
      setSelectedRowKeyList`),n("span",{class:"token punctuation"},","),t(`
      clearSelect`),n("span",{class:"token punctuation"},","),t(`
      toDeleteSelectRowByKey`),n("span",{class:"token punctuation"},","),t(`
      toSetTableData`),n("span",{class:"token punctuation"},","),t(`
      toSetProps`),n("span",{class:"token punctuation"},","),t(`
      toGetSize`),n("span",{class:"token punctuation"},","),t(`
      toGetForm`),n("span",{class:"token punctuation"},","),t(`
      setShowMoreHandler`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Ns(s,c,e,a,r,k){const u=l("a-button"),i=l("a-space"),A=l("a-table-pro"),w=l("demo-box");return d(),I(w,{jsfiddle:{us:"UseTable Methods",cn:"useTable",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>useTable</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>UseTable Methods</p>
`,order:0,title:{"zh-CN":"useTable \u4E2D\u7684\u65B9\u6CD5","en-US":"UseTable Methods"},relativePath:"components/table-pro/demo/use-methods.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1zcGFjZSBzdHlsZT0iZmxleC13cmFwOiB3cmFwIj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0icmVsb2FkVGFibGUiPiDov5jljp8gPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iY2hhbmdlTG9hZGluZyI+IOW8gOWQr2xvYWRpbmcgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iY2hhbmdlQ29sdW1ucyI+IOabtOaUuUNvbHVtbnMgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iZ2V0Q29sdW1uIj4g6I635Y+WQ29sdW1ucyA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJnZXRUYWJsZURhdGEiPiDojrflj5booajmoLzmlbDmja4gPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0ic2V0UGFnaW5hdGlvbkluZm8iPiDot7PovazliLDnrKwy6aG1IDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9InNldFNlbGVjdGVkUm93S2V5TGlzdCI+IOiuvue9rumAieS4reihjCA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJnZXRTZWxlY3RSb3dMaXN0Ij4g6I635Y+W6YCJ5Lit6KGMIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9ImdldFNlbGVjdFJvd0tleUxpc3QiPiDojrflj5bpgInkuK3ooYxLZXkgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iY2xlYXJTZWxlY3QiPiDmuIXnqbrpgInkuK3ooYwgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iZ2V0UGFnaW5hdGlvbiI+IOiOt+WPluWIhumhteS/oeaBryA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJ0b0RlbGV0ZVNlbGVjdFJvd0J5S2V5Ij4g5Yig6Zmk6YCJ5Lit55qE5p+Q5Yeg5LiqIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9InRvU2V0VGFibGVEYXRhIj4g5o2i5LiA5ouo5pWw5o2uIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9InRvU2V0UHJvcHMiPiDorr7nva7phY3nva4o5Y675o6J55yB55Wl5Y+3KSA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJ0b0dldFNpemUiPiDojrflj5booajmoLznmoQgc2l6ZSA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJ0b0dldEZvcm0iPiDojrflj5booajmoLwgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0ic2V0U2hvd01vcmVIYW5kbGVyIj5zaG93TW9yZUhhbmRsZXIg5pi+56S65om56YeP5pON5L2cIDwvYS1idXR0b24+CiAgICA8L2Etc3BhY2U+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJ1c2VNZXRob2RzUmVnaXN0ZXIiPgogICAgICA8dGVtcGxhdGUgI21vcmUtaGFuZGxlcj4KICAgICAgICA8YS1idXR0b24+5om56YeP5Yig6ZmkPC9hLWJ1dHRvbj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS10YWJsZS1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IEFqYXhBcGksIFRhYmxlUHJvQ29sdW1uIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlVGFibGUsIFRhYmxlQWN0aW9uLCBTcGFjZSwgQnV0dG9uIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwoKZXhwb3J0IGZ1bmN0aW9uIGRlbW9MaXN0QXBpKHsgcGFyYW1zLCBzdWNjZXNzIH06IEFqYXhBcGkpIHsKICBjb25zdCBhcnI6IGFueSA9IFtdOwogIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0MDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogYCR7TWF0aC5yYW5kb20oKSArIGluZGV4fS13YXRlcmAsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIG5vOiBgJHtpbmRleCArIDEwfWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICBiZWdpblRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgICAgZW5kVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgfSk7CiAgfQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9Cgpjb25zdCBnZXROZXdEYXRhOiBhbnkgPSAoKCkgPT4gewogIGNvbnN0IGFycjogYW55ID0gW107CiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE0MDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogJ+i/meaYr+aWsOaVsOaNricsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIG5vOiBgJHtpbmRleCArIDEwfWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICBiZWdpblRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgICAgZW5kVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgfSk7CiAgfQogIHJldHVybiBhcnI7Cn0pKCk7CgpleHBvcnQgZnVuY3Rpb24gZ2V0QmFzaWNTaG9ydENvbHVtbnMoKTogVGFibGVQcm9Db2x1bW5bXSB7CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdGl0bGU6ICdJRCcsCiAgICAgIHdpZHRoOiAxNTAsCiAgICAgIGRhdGFJbmRleDogJ2lkJywKICAgICAgc29ydGVyOiB0cnVlLAogICAgICBzb3J0T3JkZXI6ICdhc2NlbmQnLAogICAgfSwKICAgIHsKICAgICAgdGl0bGU6ICflp5PlkI0nLAogICAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgICAgd2lkdGg6IDEyMCwKICAgIH0sCiAgICB7CiAgICAgIHRpdGxlOiAn5Zyw5Z2AJywKICAgICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgICB9LAogICAgewogICAgICB0aXRsZTogJ+e8luWPtycsCiAgICAgIGRhdGFJbmRleDogJ25vJywKICAgICAgd2lkdGg6IDgwLAogICAgfSwKICBdOwp9CgpleHBvcnQgZnVuY3Rpb24gZ2V0VGFibGVQcm9Db2x1bW5zKCk6IFRhYmxlUHJvQ29sdW1uW10gewogIHJldHVybiBbCiAgICB7CiAgICAgIHRpdGxlOiAnSUQnLAogICAgICBkYXRhSW5kZXg6ICdpZCcsCiAgICAgIGZpeGVkOiAnbGVmdCcsCiAgICAgIHdpZHRoOiAyMDAsCiAgICB9LAogICAgewogICAgICB0aXRsZTogJ+Wnk+WQjScsCiAgICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAgICB3aWR0aDogMTUwLAogICAgICBmaWx0ZXJzOiBbCiAgICAgICAgeyB0ZXh0OiAnTWFsZScsIHZhbHVlOiAnbWFsZScgfSwKICAgICAgICB7IHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSwKICAgICAgXSwKICAgIH0sCiAgICB7CiAgICAgIHRpdGxlOiAn5Zyw5Z2AJywKICAgICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgICB9LAogICAgewogICAgICB0aXRsZTogJ+e8luWPtycsCiAgICAgIGRhdGFJbmRleDogJ25vJywKICAgICAgd2lkdGg6IDE1MCwKICAgICAgc29ydGVyOiB0cnVlLAogICAgICBkZWZhdWx0SGlkZGVuOiB0cnVlLAogICAgfSwKICAgIHsKICAgICAgdGl0bGU6ICflvIDlp4vml7bpl7QnLAogICAgICB3aWR0aDogMTIwLAogICAgICBzb3J0ZXI6IHRydWUsCiAgICAgIGRhdGFJbmRleDogJ2JlZ2luVGltZScsCiAgICB9LAogICAgewogICAgICB0aXRsZTogJ+e7k+adn+aXtumXtCcsCiAgICAgIHdpZHRoOiAxMjAsCiAgICAgIHNvcnRlcjogdHJ1ZSwKICAgICAgZGF0YUluZGV4OiAnZW5kVGltZScsCiAgICB9LAogIF07Cn0KCmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29uZmlnKCk6IFBhcnRpYWw8YW55PiB7CiAgcmV0dXJuIHsKICAgIGxhYmVsQ29sOiB7CiAgICAgIHNwYW46IDgsCiAgICB9LAogICAgd3JhcHBlckNvbDogewogICAgICBzcGFuOiAxNiwKICAgIH0sCiAgICBhY3Rpb25Db2xPcHRpb25zOiB7CiAgICAgIHNwYW46IDI0LAogICAgfSwKICAgIGxheW91dDogJ2lubGluZScsCiAgICBzY2hlbWFzOiBbCiAgICAgIHsKICAgICAgICBmaWVsZDogJ2lucHV0JywKICAgICAgICBsYWJlbDogJ+WFkeaNouWIuOWQjeensCcsCiAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnLAogICAgICB9LAogICAgXSwKICB9Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgW0J1dHRvbi5uYW1lXTogQnV0dG9uLAogICAgW1NwYWNlLm5hbWVdOiBTcGFjZSwKICAgIFtUYWJsZUFjdGlvbi5uYW1lXTogVGFibGVBY3Rpb24sCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IFsKICAgICAgdXNlTWV0aG9kc1JlZ2lzdGVyLAogICAgICB7CiAgICAgICAgc2V0TG9hZGluZywKICAgICAgICBzZXRDb2x1bW5zLAogICAgICAgIGdldENvbHVtbnMsCiAgICAgICAgZ2V0RGF0YVNvdXJjZSwKICAgICAgICByZWxvYWQsCiAgICAgICAgZ2V0UGFnaW5hdGlvblJlZiwKICAgICAgICBzZXRQYWdpbmF0aW9uLAogICAgICAgIGdldFNlbGVjdFJvd3MsCiAgICAgICAgZ2V0U2VsZWN0Um93S2V5cywKICAgICAgICBzZXRTZWxlY3RlZFJvd0tleXMsCiAgICAgICAgY2xlYXJTZWxlY3RlZFJvd0tleXMsCiAgICAgICAgZGVsZXRlU2VsZWN0Um93QnlLZXksCiAgICAgICAgc2V0VGFibGVEYXRhLAogICAgICAgIHNldFByb3BzLAogICAgICAgIGdldFNpemUsCiAgICAgICAgZ2V0Rm9ybSwKICAgICAgfSwKICAgIF0gPSB1c2VUYWJsZSgpOwoKICAgIGNvbnN0IGdldENvbmZpZyA9IGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgZGVtb0xpc3RBcGkoeyBwYXJhbXM6IHt9LCBzdWNjZXNzOiAoKSA9PiB7fSB9KTsKICAgIH07CgogICAgb25Nb3VudGVkKGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgZ2V0Q29uZmlnKCk7CiAgICAgIHNldFByb3BzKHsKICAgICAgICAvLyB0aXRsZTogJ3VzZVRhYmxl56S65L6LJywKICAgICAgICAvLyB0aXRsZUhlbHBNZXNzYWdlOiAn5L2/55SodXNlVGFibGXosIPnlKjooajmoLzlhoXmlrnms5UnLAogICAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgICAgY29sdW1uczogZ2V0VGFibGVQcm9Db2x1bW5zKCksCiAgICAgICAgcm93S2V5OiAnaWQnLAogICAgICAgIHJvd1NlbGVjdGlvbjogewogICAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgLy8gcmFkaW8gb3IgY2hlY2tib3gKICAgICAgICB9LAogICAgICAgIHVzZVNlYXJjaEZvcm06IHRydWUsCiAgICAgICAgZm9ybUNvbmZpZzogZ2V0Rm9ybUNvbmZpZygpLAogICAgICB9KTsKICAgIH0pOwoKICAgIGZ1bmN0aW9uIGNoYW5nZUxvYWRpbmcoKSB7CiAgICAgIHNldExvYWRpbmcodHJ1ZSk7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgIHNldExvYWRpbmcoZmFsc2UpOwogICAgICB9LCAxMDAwKTsKICAgIH0KICAgIGZ1bmN0aW9uIGNoYW5nZUNvbHVtbnMoKSB7CiAgICAgIHNldENvbHVtbnMoZ2V0QmFzaWNTaG9ydENvbHVtbnMoKSk7CiAgICB9CiAgICBmdW5jdGlvbiByZWxvYWRUYWJsZSgpIHsKICAgICAgc2V0Q29sdW1ucyhnZXRUYWJsZVByb0NvbHVtbnMoKSk7CgogICAgICByZWxvYWQoewogICAgICAgIHBhZ2U6IDEsCiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gZ2V0Q29sdW1uKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRDb2x1bW5zKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFRhYmxlRGF0YSgpIHsKICAgICAgY29uc29sZS5sb2coZ2V0RGF0YVNvdXJjZSgpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRQYWdpbmF0aW9uUmVmKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRvRGVsZXRlU2VsZWN0Um93QnlLZXkoKSB7CiAgICAgIGRlbGV0ZVNlbGVjdFJvd0J5S2V5KCcxJyk7CiAgICB9CgogICAgZnVuY3Rpb24gc2V0UGFnaW5hdGlvbkluZm8oKSB7CiAgICAgIHNldFBhZ2luYXRpb24oewogICAgICAgIGN1cnJlbnQ6IDIsCiAgICAgIH0pOwogICAgICByZWxvYWQoKTsKICAgIH0KICAgIGZ1bmN0aW9uIGdldFNlbGVjdFJvd0xpc3QoKSB7CiAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdFJvd3MoKSk7CiAgICB9CiAgICBmdW5jdGlvbiBnZXRTZWxlY3RSb3dLZXlMaXN0KCkgewogICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RSb3dLZXlzKCkpOwogICAgfQogICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWRSb3dLZXlMaXN0KCkgewogICAgICBzZXRTZWxlY3RlZFJvd0tleXMoWycwJywgJzEnLCAnMiddKTsKICAgIH0KICAgIGZ1bmN0aW9uIHRvU2V0VGFibGVEYXRhKCkgewogICAgICBzZXRUYWJsZURhdGEoZ2V0TmV3RGF0YSk7CiAgICB9CiAgICBmdW5jdGlvbiB0b1NldFByb3BzKCkgewogICAgICBzZXRQcm9wcyh7CiAgICAgICAgZWxsaXBzaXM6IGZhbHNlLAogICAgICB9KTsKICAgIH0KCiAgICBjb25zdCBtb3JlSGFuZGxlclN0YXR1cyA9IHJlZihmYWxzZSk7CiAgICBmdW5jdGlvbiBzZXRTaG93TW9yZUhhbmRsZXIoKSB7CiAgICAgIG1vcmVIYW5kbGVyU3RhdHVzLnZhbHVlID0gIW1vcmVIYW5kbGVyU3RhdHVzLnZhbHVlOwogICAgICBzZXRQcm9wcyh7CiAgICAgICAgc2hvd01vcmVIYW5kbGVyOiBtb3JlSGFuZGxlclN0YXR1cy52YWx1ZSwKICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gdG9HZXRTaXplKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRTaXplKCkpOwogICAgfQogICAgZnVuY3Rpb24gdG9HZXRGb3JtKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRGb3JtKCkpOwogICAgfQogICAgZnVuY3Rpb24gY2xlYXJTZWxlY3QoKSB7CiAgICAgIGNsZWFyU2VsZWN0ZWRSb3dLZXlzKCk7CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgdXNlTWV0aG9kc1JlZ2lzdGVyLAogICAgICBjaGFuZ2VMb2FkaW5nLAogICAgICBjaGFuZ2VDb2x1bW5zLAogICAgICByZWxvYWRUYWJsZSwKICAgICAgZ2V0Q29sdW1uLAogICAgICBnZXRUYWJsZURhdGEsCiAgICAgIGdldFBhZ2luYXRpb24sCiAgICAgIHNldFBhZ2luYXRpb25JbmZvLAogICAgICBnZXRTZWxlY3RSb3dMaXN0LAogICAgICBnZXRTZWxlY3RSb3dLZXlMaXN0LAogICAgICBzZXRTZWxlY3RlZFJvd0tleUxpc3QsCiAgICAgIGNsZWFyU2VsZWN0LAogICAgICB0b0RlbGV0ZVNlbGVjdFJvd0J5S2V5LAogICAgICB0b1NldFRhYmxlRGF0YSwKICAgICAgdG9TZXRQcm9wcywKICAgICAgdG9HZXRTaXplLAogICAgICB0b0dldEZvcm0sCiAgICAgIHNldFNob3dNb3JlSGFuZGxlciwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1zcGFjZSBzdHlsZT0iZmxleC13cmFwOiB3cmFwIj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0icmVsb2FkVGFibGUiPiDov5jljp8gPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iY2hhbmdlTG9hZGluZyI+IOW8gOWQr2xvYWRpbmcgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iY2hhbmdlQ29sdW1ucyI+IOabtOaUuUNvbHVtbnMgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iZ2V0Q29sdW1uIj4g6I635Y+WQ29sdW1ucyA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJnZXRUYWJsZURhdGEiPiDojrflj5booajmoLzmlbDmja4gPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0ic2V0UGFnaW5hdGlvbkluZm8iPiDot7PovazliLDnrKwy6aG1IDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9InNldFNlbGVjdGVkUm93S2V5TGlzdCI+IOiuvue9rumAieS4reihjCA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJnZXRTZWxlY3RSb3dMaXN0Ij4g6I635Y+W6YCJ5Lit6KGMIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9ImdldFNlbGVjdFJvd0tleUxpc3QiPiDojrflj5bpgInkuK3ooYxLZXkgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iY2xlYXJTZWxlY3QiPiDmuIXnqbrpgInkuK3ooYwgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0iZ2V0UGFnaW5hdGlvbiI+IOiOt+WPluWIhumhteS/oeaBryA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJ0b0RlbGV0ZVNlbGVjdFJvd0J5S2V5Ij4g5Yig6Zmk6YCJ5Lit55qE5p+Q5Yeg5LiqIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9InRvU2V0VGFibGVEYXRhIj4g5o2i5LiA5ouo5pWw5o2uIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiBAY2xpY2s9InRvU2V0UHJvcHMiPiDorr7nva7phY3nva4o5Y675o6J55yB55Wl5Y+3KSA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJ0b0dldFNpemUiPiDojrflj5booajmoLznmoQgc2l6ZSA8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gQGNsaWNrPSJ0b0dldEZvcm0iPiDojrflj5booajmoLwgPC9hLWJ1dHRvbj4KICAgICAgPGEtYnV0dG9uIEBjbGljaz0ic2V0U2hvd01vcmVIYW5kbGVyIj5zaG93TW9yZUhhbmRsZXIg5pi+56S65om56YeP5pON5L2cIDwvYS1idXR0b24+CiAgICA8L2Etc3BhY2U+CiAgICA8YS10YWJsZS1wcm8gQHJlZ2lzdGVyPSJ1c2VNZXRob2RzUmVnaXN0ZXIiPgogICAgICA8dGVtcGxhdGUgI21vcmUtaGFuZGxlcj4KICAgICAgICA8YS1idXR0b24+5om56YeP5Yig6ZmkPC9hLWJ1dHRvbj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS10YWJsZS1wcm8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyB1c2VUYWJsZSwgVGFibGVBY3Rpb24sIFNwYWNlLCBCdXR0b24gfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmV4cG9ydCBmdW5jdGlvbiBkZW1vTGlzdEFwaSh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pIHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQwOyBpbmRleCsrKSB7CiAgICBhcnIucHVzaCh7CiAgICAgIGlkOiBgJHtpbmRleH1gLAogICAgICBuYW1lOiBgJHtNYXRoLnJhbmRvbSgpICsgaW5kZXh9LXdhdGVyYCwKICAgICAgYWdlOiBgMSR7aW5kZXh9YCwKICAgICAgbm86IGAke2luZGV4ICsgMTB9YCwKICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFya05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsCiAgICAgIGJlZ2luVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksCiAgICB9KTsKICB9CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhhcnIpOwogIH0sIDEwMDApOwp9Cgpjb25zdCBnZXROZXdEYXRhID0gKCgpID0+IHsKICBjb25zdCBhcnIgPSBbXTsKCiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE0MDsgaW5kZXgrKykgewogICAgYXJyLnB1c2goewogICAgICBpZDogYCR7aW5kZXh9YCwKICAgICAgbmFtZTogJ+i/meaYr+aWsOaVsOaNricsCiAgICAgIGFnZTogYDEke2luZGV4fWAsCiAgICAgIG5vOiBgJHtpbmRleCArIDEwfWAsCiAgICAgIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmtOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLAogICAgICBiZWdpblRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSwKICAgICAgZW5kVGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLAogICAgfSk7CiAgfQoKICByZXR1cm4gYXJyOwp9KSgpOwoKZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2ljU2hvcnRDb2x1bW5zKCkgewogIHJldHVybiBbewogICAgdGl0bGU6ICdJRCcsCiAgICB3aWR0aDogMTUwLAogICAgZGF0YUluZGV4OiAnaWQnLAogICAgc29ydGVyOiB0cnVlLAogICAgc29ydE9yZGVyOiAnYXNjZW5kJywKICB9LCB7CiAgICB0aXRsZTogJ+Wnk+WQjScsCiAgICBkYXRhSW5kZXg6ICduYW1lJywKICAgIHdpZHRoOiAxMjAsCiAgfSwgewogICAgdGl0bGU6ICflnLDlnYAnLAogICAgZGF0YUluZGV4OiAnYWRkcmVzcycsCiAgfSwgewogICAgdGl0bGU6ICfnvJblj7cnLAogICAgZGF0YUluZGV4OiAnbm8nLAogICAgd2lkdGg6IDgwLAogIH1dOwp9CmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZVByb0NvbHVtbnMoKSB7CiAgcmV0dXJuIFt7CiAgICB0aXRsZTogJ0lEJywKICAgIGRhdGFJbmRleDogJ2lkJywKICAgIGZpeGVkOiAnbGVmdCcsCiAgICB3aWR0aDogMjAwLAogIH0sIHsKICAgIHRpdGxlOiAn5aeT5ZCNJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAgd2lkdGg6IDE1MCwKICAgIGZpbHRlcnM6IFt7CiAgICAgIHRleHQ6ICdNYWxlJywKICAgICAgdmFsdWU6ICdtYWxlJywKICAgIH0sIHsKICAgICAgdGV4dDogJ0ZlbWFsZScsCiAgICAgIHZhbHVlOiAnZmVtYWxlJywKICAgIH1dLAogIH0sIHsKICAgIHRpdGxlOiAn5Zyw5Z2AJywKICAgIGRhdGFJbmRleDogJ2FkZHJlc3MnLAogIH0sIHsKICAgIHRpdGxlOiAn57yW5Y+3JywKICAgIGRhdGFJbmRleDogJ25vJywKICAgIHdpZHRoOiAxNTAsCiAgICBzb3J0ZXI6IHRydWUsCiAgICBkZWZhdWx0SGlkZGVuOiB0cnVlLAogIH0sIHsKICAgIHRpdGxlOiAn5byA5aeL5pe26Ze0JywKICAgIHdpZHRoOiAxMjAsCiAgICBzb3J0ZXI6IHRydWUsCiAgICBkYXRhSW5kZXg6ICdiZWdpblRpbWUnLAogIH0sIHsKICAgIHRpdGxlOiAn57uT5p2f5pe26Ze0JywKICAgIHdpZHRoOiAxMjAsCiAgICBzb3J0ZXI6IHRydWUsCiAgICBkYXRhSW5kZXg6ICdlbmRUaW1lJywKICB9XTsKfQpleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbmZpZygpIHsKICByZXR1cm4gewogICAgbGFiZWxDb2w6IHsKICAgICAgc3BhbjogOCwKICAgIH0sCiAgICB3cmFwcGVyQ29sOiB7CiAgICAgIHNwYW46IDE2LAogICAgfSwKICAgIGFjdGlvbkNvbE9wdGlvbnM6IHsKICAgICAgc3BhbjogMjQsCiAgICB9LAogICAgbGF5b3V0OiAnaW5saW5lJywKICAgIHNjaGVtYXM6IFt7CiAgICAgIGZpZWxkOiAnaW5wdXQnLAogICAgICBsYWJlbDogJ+WFkeaNouWIuOWQjeensCcsCiAgICAgIGNvbXBvbmVudDogJ0lucHV0JywKICAgIH1dLAogIH07Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBbQnV0dG9uLm5hbWVdOiBCdXR0b24sCiAgICBbU3BhY2UubmFtZV06IFNwYWNlLAogICAgW1RhYmxlQWN0aW9uLm5hbWVdOiBUYWJsZUFjdGlvbiwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IFt1c2VNZXRob2RzUmVnaXN0ZXIsIHsKICAgICAgc2V0TG9hZGluZywKICAgICAgc2V0Q29sdW1ucywKICAgICAgZ2V0Q29sdW1ucywKICAgICAgZ2V0RGF0YVNvdXJjZSwKICAgICAgcmVsb2FkLAogICAgICBnZXRQYWdpbmF0aW9uUmVmLAogICAgICBzZXRQYWdpbmF0aW9uLAogICAgICBnZXRTZWxlY3RSb3dzLAogICAgICBnZXRTZWxlY3RSb3dLZXlzLAogICAgICBzZXRTZWxlY3RlZFJvd0tleXMsCiAgICAgIGNsZWFyU2VsZWN0ZWRSb3dLZXlzLAogICAgICBkZWxldGVTZWxlY3RSb3dCeUtleSwKICAgICAgc2V0VGFibGVEYXRhLAogICAgICBzZXRQcm9wcywKICAgICAgZ2V0U2l6ZSwKICAgICAgZ2V0Rm9ybSwKICAgIH1dID0gdXNlVGFibGUoKTsKCiAgICBjb25zdCBnZXRDb25maWcgPSBhc3luYyAoKSA9PiB7CiAgICAgIGF3YWl0IGRlbW9MaXN0QXBpKHsKICAgICAgICBwYXJhbXM6IHt9LAogICAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LAogICAgICB9KTsKICAgIH07CgogICAgb25Nb3VudGVkKGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgZ2V0Q29uZmlnKCk7CiAgICAgIHNldFByb3BzKHsKICAgICAgICAvLyB0aXRsZTogJ3VzZVRhYmxl56S65L6LJywKICAgICAgICAvLyB0aXRsZUhlbHBNZXNzYWdlOiAn5L2/55SodXNlVGFibGXosIPnlKjooajmoLzlhoXmlrnms5UnLAogICAgICAgIGFwaTogZGVtb0xpc3RBcGksCiAgICAgICAgY29sdW1uczogZ2V0VGFibGVQcm9Db2x1bW5zKCksCiAgICAgICAgcm93S2V5OiAnaWQnLAogICAgICAgIHJvd1NlbGVjdGlvbjogewogICAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgLy8gcmFkaW8gb3IgY2hlY2tib3gKCiAgICAgICAgfSwKICAgICAgICB1c2VTZWFyY2hGb3JtOiB0cnVlLAogICAgICAgIGZvcm1Db25maWc6IGdldEZvcm1Db25maWcoKSwKICAgICAgfSk7CiAgICB9KTsKCiAgICBmdW5jdGlvbiBjaGFuZ2VMb2FkaW5nKCkgewogICAgICBzZXRMb2FkaW5nKHRydWUpOwogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsKICAgICAgfSwgMTAwMCk7CiAgICB9CgogICAgZnVuY3Rpb24gY2hhbmdlQ29sdW1ucygpIHsKICAgICAgc2V0Q29sdW1ucyhnZXRCYXNpY1Nob3J0Q29sdW1ucygpKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZWxvYWRUYWJsZSgpIHsKICAgICAgc2V0Q29sdW1ucyhnZXRUYWJsZVByb0NvbHVtbnMoKSk7CiAgICAgIHJlbG9hZCh7CiAgICAgICAgcGFnZTogMSwKICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0Q29sdW1uKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRDb2x1bW5zKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFRhYmxlRGF0YSgpIHsKICAgICAgY29uc29sZS5sb2coZ2V0RGF0YVNvdXJjZSgpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRQYWdpbmF0aW9uUmVmKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRvRGVsZXRlU2VsZWN0Um93QnlLZXkoKSB7CiAgICAgIGRlbGV0ZVNlbGVjdFJvd0J5S2V5KCcxJyk7CiAgICB9CgogICAgZnVuY3Rpb24gc2V0UGFnaW5hdGlvbkluZm8oKSB7CiAgICAgIHNldFBhZ2luYXRpb24oewogICAgICAgIGN1cnJlbnQ6IDIsCiAgICAgIH0pOwogICAgICByZWxvYWQoKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRTZWxlY3RSb3dMaXN0KCkgewogICAgICBjb25zb2xlLmxvZyhnZXRTZWxlY3RSb3dzKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFNlbGVjdFJvd0tleUxpc3QoKSB7CiAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdFJvd0tleXMoKSk7CiAgICB9CgogICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWRSb3dLZXlMaXN0KCkgewogICAgICBzZXRTZWxlY3RlZFJvd0tleXMoWycwJywgJzEnLCAnMiddKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0b1NldFRhYmxlRGF0YSgpIHsKICAgICAgc2V0VGFibGVEYXRhKGdldE5ld0RhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRvU2V0UHJvcHMoKSB7CiAgICAgIHNldFByb3BzKHsKICAgICAgICBlbGxpcHNpczogZmFsc2UsCiAgICAgIH0pOwogICAgfQoKICAgIGNvbnN0IG1vcmVIYW5kbGVyU3RhdHVzID0gcmVmKGZhbHNlKTsKCiAgICBmdW5jdGlvbiBzZXRTaG93TW9yZUhhbmRsZXIoKSB7CiAgICAgIG1vcmVIYW5kbGVyU3RhdHVzLnZhbHVlID0gIW1vcmVIYW5kbGVyU3RhdHVzLnZhbHVlOwogICAgICBzZXRQcm9wcyh7CiAgICAgICAgc2hvd01vcmVIYW5kbGVyOiBtb3JlSGFuZGxlclN0YXR1cy52YWx1ZSwKICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gdG9HZXRTaXplKCkgewogICAgICBjb25zb2xlLmxvZyhnZXRTaXplKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRvR2V0Rm9ybSgpIHsKICAgICAgY29uc29sZS5sb2coZ2V0Rm9ybSgpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjbGVhclNlbGVjdCgpIHsKICAgICAgY2xlYXJTZWxlY3RlZFJvd0tleXMoKTsKICAgIH0KCiAgICByZXR1cm4gewogICAgICB1c2VNZXRob2RzUmVnaXN0ZXIsCiAgICAgIGNoYW5nZUxvYWRpbmcsCiAgICAgIGNoYW5nZUNvbHVtbnMsCiAgICAgIHJlbG9hZFRhYmxlLAogICAgICBnZXRDb2x1bW4sCiAgICAgIGdldFRhYmxlRGF0YSwKICAgICAgZ2V0UGFnaW5hdGlvbiwKICAgICAgc2V0UGFnaW5hdGlvbkluZm8sCiAgICAgIGdldFNlbGVjdFJvd0xpc3QsCiAgICAgIGdldFNlbGVjdFJvd0tleUxpc3QsCiAgICAgIHNldFNlbGVjdGVkUm93S2V5TGlzdCwKICAgICAgY2xlYXJTZWxlY3QsCiAgICAgIHRvRGVsZXRlU2VsZWN0Um93QnlLZXksCiAgICAgIHRvU2V0VGFibGVEYXRhLAogICAgICB0b1NldFByb3BzLAogICAgICB0b0dldFNpemUsCiAgICAgIHRvR2V0Rm9ybSwKICAgICAgc2V0U2hvd01vcmVIYW5kbGVyLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[n("div",null,[p(i,{style:{"flex-wrap":"wrap"}},{default:o(()=>[p(u,{onClick:s.reloadTable},{default:o(()=>[ws]),_:1},8,["onClick"]),p(u,{onClick:s.changeLoading},{default:o(()=>[hs]),_:1},8,["onClick"]),p(u,{onClick:s.changeColumns},{default:o(()=>[ys]),_:1},8,["onClick"]),p(u,{onClick:s.getColumn},{default:o(()=>[Zs]),_:1},8,["onClick"]),p(u,{onClick:s.getTableData},{default:o(()=>[Gs]),_:1},8,["onClick"]),p(u,{onClick:s.setPaginationInfo},{default:o(()=>[Bs]),_:1},8,["onClick"]),p(u,{onClick:s.setSelectedRowKeyList},{default:o(()=>[fs]),_:1},8,["onClick"]),p(u,{onClick:s.getSelectRowList},{default:o(()=>[Ws]),_:1},8,["onClick"]),p(u,{onClick:s.getSelectRowKeyList},{default:o(()=>[Fs]),_:1},8,["onClick"]),p(u,{onClick:s.clearSelect},{default:o(()=>[Rs]),_:1},8,["onClick"]),p(u,{onClick:s.getPagination},{default:o(()=>[Ys]),_:1},8,["onClick"]),p(u,{onClick:s.toDeleteSelectRowByKey},{default:o(()=>[Xs]),_:1},8,["onClick"]),p(u,{onClick:s.toSetTableData},{default:o(()=>[Vs]),_:1},8,["onClick"]),p(u,{onClick:s.toSetProps},{default:o(()=>[Ks]),_:1},8,["onClick"]),p(u,{onClick:s.toGetSize},{default:o(()=>[vs]),_:1},8,["onClick"]),p(u,{onClick:s.toGetForm},{default:o(()=>[Ss]),_:1},8,["onClick"]),p(u,{onClick:s.setShowMoreHandler},{default:o(()=>[Js]),_:1},8,["onClick"])]),_:1}),p(A,{onRegister:s.useMethodsRegister},{"more-handler":o(()=>[p(u,null,{default:o(()=>[Hs]),_:1})]),_:1},8,["onRegister"])])]),htmlCode:o(()=>[xs]),jsVersionHtml:o(()=>[Ls]),_:1},8,["jsfiddle"])}var Ts=C(bs,[["render",Ns]]);const Ds={pageData:{title:"TablePro",description:"",frontmatter:{category:"Components",cols:1,type:"\u6570\u636E\u5C55\u793A",title:"TablePro",subtitle:"\u8868\u683C PRO",cover:"https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"useTable \u8FD4\u56DE\u7684\u65B9\u6CD5 ( TableActionType )",slug:"useTable-\u8FD4\u56DE\u7684\u65B9\u6CD5-TableActionType",content:""},{level:3,title:"a-table-image API",slug:"a-table-image-API",content:""},{level:3,title:"a-table-card API",slug:"a-table-card-API",content:""},{level:3,title:"a-table-card slots",slug:"a-table-card-slots",content:""}],relativePath:"components/table-pro/index.zh-CN.md",content:`
\u666E\u901A\u8868\u683C\u53EA\u80FD\u4E00\u70B9\u70B9\u5199\uFF0C\u52A0\u5F3A\u7248\u8868\u683C\u914D\u4E00\u4E0B\u5C31\u884C

## \u4F55\u65F6\u4F7F\u7528

- \u60F3\u5077\u61D2\u7684\u65F6\u5019
- \u52A0\u901F\u8FED\u4EE3\u9879\u76EE\u7684\u65F6\u5019

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- | --- |
| clickToRowSelect | \u70B9\u51FB\u884C\u9009\u4E2D | boolean | - |  |
| isTreeTable | \u662F\u5426\u662F\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u6570\u636E\u91CC\u9762\u6709 **_children_** \u5B57\u6BB5\uFF0C\u8868\u683C\u81EA\u52A8\u4E3A\u6811\u5F62\u8868\u683C\u3002\u5F53 isTreeTable = true \u7684\u65F6\u5019\uFF0C\u6570\u636E\u4E2D\u8BBE\u7F6E \`flag: &#39;INDEX&#39;\` \u4E0D\u8D77\u4F5C\u7528 | boolean | - |  |
| showIndexColumn | \u662F\u5426\u663E\u793A\u5E8F\u53F7\u5217 | boolean | - |  |
| inset | \u53D6\u6D88\u8868\u683C\u5916\u90E8\u7684\u9ED8\u8BA4 \`padding\` | boolean | - |  |
| autoCreateKey | \u662F\u5426\u81EA\u52A8\u751F\u6210 rowKey \u914D\u7F6E | boolean | - |  |
| showTableSetting | \u662F\u5426\u663E\u793A\u8868\u683C\u53F3\u4E0A\u89D2\u7684\u8BBE\u7F6E\u548C\u5237\u65B0\u6309\u94AE | boolean | - |  |
| showSummary | \u662F\u5426\u663E\u793A\u5408\u8BA1\u884C | boolean | - |  |
| immediate | \u662F\u5426\u7ACB\u5373\u8BF7\u6C42\u63A5\u53E3 | boolean | true |  |
| useSearchForm | \u662F\u5426\u4F7F\u7528\u641C\u7D22\u8868\u5355 | boolean | true |  |
| ellipsis | \u6587\u672C\u8D85\u8FC7\u5BBD\u5EA6\u662F\u5426\u663E\u793A \`...\` | boolean | - |  |
| draggable | \u62D6\u62FD | boolean | - | 3.17.0 |
| canResize | \u662F\u5426\u53EF\u4EE5\u81EA\u9002\u5E94\u9AD8\u5EA6 | boolean | - |  |
| bordered | \u662F\u5426\u663E\u793A\u8FB9\u6846 | boolean | - |  |
| pagination | \u5206\u9875\u914D\u7F6E | [\`PaginationProps\`](./src/types/pagination.ts#15) \\| boolean | - |  |
| clearSelectOnPageChange | \u5728\u5206\u9875\u6539\u53D8\u7684\u65F6\u5019\u6E05\u7A7A\u9009\u9879 | boolean | - |  |
| loading | \u662F\u5426\u52A0\u8F7D | boolean | - |  |
| emptyDataIsShowTable | \u5728\u5F00\u8D77\u641C\u7D22\u8868\u5355\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u662F\u5426\u663E\u793A\u8868\u683C | boolean | true |  |
| resizeHeightOffset | \u81EA\u9002\u5E94\u9AD8\u5EA6\u504F\u79FB\uFF0C\u8BA1\u7B97\u7ED3\u679C-\u504F\u79FB\u91CF | number | - |  |
| maxHeight | \u8868\u683C\u6EDA\u52A8\u6700\u5927\u9AD8\u5EA6 | number | - |  |
| rowKey | \u8868\u683C\u884C key \u7684\u53D6\u503C\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u51FD\u6570 | \`string\` | \`((record: Recordable) =&gt; string)\` | - |  |
| titleHelpMessage | \u6807\u9898\u53F3\u4FA7\u63D0\u793A | string \\| \`string[]\` | - |  |
| title | \u8868\u683C\u6807\u9898 | string | - |  |
| size | \u8868\u683C\u7D27\u5BC6\u5EA6 | [SizeType](./src/types/table.ts#L94) | default |  |
| tableSetting | \u8BBE\u7F6E\u53F3\u4E0A\u89D2\u663E\u793A\u7684 icon | [TableSetting](./src/types/table.ts#L143) | - | - |
| sortFn | \u81EA\u5B9A\u4E49\u6392\u5E8F\u65B9\u6CD5 | Function | - |  |
| filterFn | \u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5 | Function | - |  |
| summaryFunc | \u8BA1\u7B97\u5408\u8BA1\u884C\u7684\u65B9\u6CD5 | Function | - |  |
| beforeFetch | \u8BF7\u6C42\u4E4B\u524D\u5904\u7406\u53C2\u6570 | Function | - |  |
| afterFetch | \u81EA\u5B9A\u4E49\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u53C2\u6570 | Function | - |  |
| handleSearchInfoFn | \u67E5\u8BE2\u6761\u4EF6\u8BF7\u6C42\u4E4B\u524D\u5904\u7406 | Function | - |  |
| totalRender | \u5206\u9875\u603B\u6570\u7684\u914D\u7F6E | \`(total: number, range: [number, number]) =&gt; any\` | - |  |
| fetchSetting | \u8BF7\u6C42\u63A5\u53E3\u914D\u7F6E | [FetchSetting](./src/types/table.ts#L132) | - |  |
| api | \u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; void\` | - |  |
| summaryData | \u81EA\u5B9A\u4E49\u5408\u8BA1\u8868\u683C\u5185\u5BB9 | object[] | - |  |
| dataSource | \u8868\u683C\u6570\u636E | object[] | - |  |
| searchInfo | \u989D\u5916\u7684\u8BF7\u6C42\u63A5\u53E3\u7684\u6570\u636E | object | - |  |
| scroll | \u8868\u683C\u6EDA\u52A8\u6761\u8BBE\u7F6E | \`{ x?: number | true; y?: number }\` | - |  |
| formConfig | \u67E5\u8BE2\u6761\u4EF6\u7684\u914D\u7F6E | [\`Partial&lt;FormProProps&gt;\`](../form-pro/src/props.ts) | - |  |
| columns | \u8868\u683C\u5217\u7684\u914D\u7F6E | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33) | - |  |
| indexColumnProps | \u5E8F\u53F7\u5217\u914D\u7F6E | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33) | - |  |
| actionColumn | \u64CD\u4F5C\u5217\u7684\u914D\u7F6E | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33) | - |  |
| rowClassName | row \u7684 class \u540D\u5B57 | \`(record: TableCustomRecord&lt;T&gt;) =&gt; string\` | - |  |
| rowSelection | row \u7684 selection \u914D\u7F6E | [TableRowSelection](./src/types/table.ts#21) | - |  |
| emptyPlaceholderClassName | \u7A7A\u6570\u636E\u7684\u65F6\u5019\u5B9A\u5236\u5C55\u793A\u7684 class \u540D | () =&gt; string | () =&gt; &#39;&#39; | 3.39.0 |
| expandIcon | \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807 | Function(props):VNode \\| v-slot:expandIcon=&quot;props&quot; | - | 4.0 |
| inputEnterSubmit | \u4E3A \`true\` \u65F6\u8F93\u5165\u6846\u6309\u56DE\u8F66\u81EA\u52A8\u89E6\u53D1 submit \u65B9\u6CD5 | boolean | true | 4.24.0 |

&gt; \u66F4\u591A\u53C2\u6570\u53C2\u8003 [TableProProps](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33)

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- | --- | --- |
| register | \u4F7F\u7528 useTable \u7684\u56DE\u8C03 | Function([formActionType](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29)) |  |
| fetch-success | api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u7684\u56DE\u8C03 | Function({ items: \u7ED3\u679C\u6570\u636E, total: \u603B\u6570, params: \u53C2\u6570 }, res: \u6240\u6709\u6570\u636E) |  |
| fetch-error | api \u53C2\u6570\u8BF7\u6C42\u5931\u8D25\u7684\u56DE\u8C03 | Function(error: any) |  |
| fetch-finally | api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u5931\u8D25\u90FD\u4F1A\u56DE\u8C03 | Function() |  |
| selection-change | \u8868\u683C rowSelection \u7684 change \u56DE\u8C03 | \`Function(keys\uFF1A string[] | number[]\uFF0Crows: any[])\` |  |
| row-click | \u8868\u683C row-click \u7684\u56DE\u8C03 | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-dbClick | \u8868\u683C row-dbClick \u7684\u56DE\u8C03 | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-contextmenu | \u8868\u683C row-contextmenu \u7684\u56DE\u8C03 | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-mouseenter | \u8868\u683C row-mouseenter \u7684\u56DE\u8C03 | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-mouseleave | \u8868\u683C row-mouseleave \u7684\u56DE\u8C03 | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |

### useTable \u8FD4\u56DE\u7684\u65B9\u6CD5 ( TableActionType )

&gt; \u66F4\u591A\u53C2\u6570\u53C2\u8003 [TableProProps](./src/types/table.ts#102)

| \u4E8B\u4EF6\u540D\u79F0             | \u8BF4\u660E             | \u56DE\u8C03\u53C2\u6570                                               |
| -------------------- | ---------------- | ------------------------------------------------------ |
| reload               | \u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3     | Function(opt?: [FetchParams](./src/types/table.ts#79)) |
| getSelectRows        | \u83B7\u53D6\u9009\u4E2D\u884C       | -                                                      |
| clearSelectedRowKeys | \u6E05\u7A7A\u9009\u4E2D\u884C       | -                                                      |
| getSelectRowKeys     | \u83B7\u53D6\u9009\u4E2D\u884C Key   | -                                                      |
| deleteSelectRowByKey | \u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A | Function(keys: string[])                               |
| setPagination        | \u8BBE\u7F6E\u5206\u9875         | -                                                      |
| setTableData         | \u8BBE\u7F6E\u8868\u683C\u6570\u636E     | -                                                      |
| getColumns           | \u83B7\u53D6\u8868\u5934\u914D\u7F6E     | -                                                      |
| setColumns           | \u8BBE\u7F6E\u8868\u5934\u914D\u7F6E     | -                                                      |
| getDataSource        | \u83B7\u53D6\u8868\u683C\u6570\u636E     | -                                                      |
| setLoading           | \u8BBE\u7F6E\u8868\u683C\u52A0\u8F7D\u72B6\u6001 | -                                                      |
| getLoading           | \u83B7\u53D6\u8868\u683C\u52A0\u8F7D\u72B6\u6001 | -                                                      |
| setProps             | \u8BBE\u7F6E\u8868\u683C\u914D\u7F6E     | -                                                      |
| setSelectedRowKeys   | \u8BBE\u7F6E\u9009\u4E2D\u7684\u8868\u683C\u884C | Function(keys: string[])                               |
| getPaginationRef     | \u83B7\u53D6\u8868\u683C\u5206\u9875\u5B9E\u4F8B | -                                                      |
| getSize              | \u83B7\u53D6\u8868\u683C\u7D27\u5BC6\u5EA6   | -                                                      |

### a-table-image API

| \u53C2\u6570    | \u8BF4\u660E       | \u7C7B\u578B     | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ------- | ---------- | -------- | ------ | ---- |
| imgList | \u56FE\u7247\u7684\u6570\u636E | string[] | -      |      |

### a-table-card API

| \u53C2\u6570           | \u8BF4\u660E             | \u7C7B\u578B           | \u9ED8\u8BA4\u503C | \u7248\u672C   |
| -------------- | ---------------- | -------------- | ------ | ------ |
| imgSize        | \u56FE\u7247\u7684\u5C3A\u5BF8       | number         | 80     | 3.33.0 |
| imgUrl         | \u56FE\u7247\u7684\u5730\u5740       | string         | &#39;&#39;     | 3.33.0 |
| imgBorderd     | \u56FE\u7247\u7684\u8FB9\u6846       | boolean        | true   | 3.33.0 |
| imgPreview     | \u56FE\u7247\u7684\u9884\u89C8       | boolean        | false  | 3.33.0 |
| imgErrorImage  | \u56FE\u7247\u52A0\u8F7D\u9519\u8BEF\u5C55\u793A | string         | -      | 3.33.0 |
| title          | \u6807\u9898             | string         | -      | 3.33.0 |
| titleMaxLength | \u6807\u9898\u6700\u5927\u5C55\u793A\u957F\u5EA6 | number         | 14     | 3.33.0 |
| desc           | \u63CF\u8FF0             | string         | -      | 3.33.0 |
| descMaxLength  | \u63CF\u8FF0\u6700\u5927\u5C55\u793A\u957F\u5EA6 | number         | 14     | 3.34.0 |
| cardable       | \u5361\u7247\u8868\u683C         | boolean        | false  | 3.35.0 |
| cardTitle      | \u5361\u7247\u6807\u9898         | string \\| slot | -      | 3.35.0 |

### a-table-card slots

| \u540D\u79F0        | \u8BF4\u660E           | \u53C2\u6570 | \u9ED8\u8BA4\u503C | \u7248\u672C   |
| ----------- | -------------- | ---- | ------ | ------ |
| titleSuffix | \u6807\u9898\u672B\u5C3E\u7684\u8FFD\u52A0 |      | -      | 3.33.0 |
`,html:`<p>\u666E\u901A\u8868\u683C\u53EA\u80FD\u4E00\u70B9\u70B9\u5199\uFF0C\u52A0\u5F3A\u7248\u8868\u683C\u914D\u4E00\u4E0B\u5C31\u884C</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u60F3\u5077\u61D2\u7684\u65F6\u5019</li>
<li>\u52A0\u901F\u8FED\u4EE3\u9879\u76EE\u7684\u65F6\u5019</li>
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
<td>clickToRowSelect</td>
<td>\u70B9\u51FB\u884C\u9009\u4E2D</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>isTreeTable</td>
<td>\u662F\u5426\u662F\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u6570\u636E\u91CC\u9762\u6709 <strong><em>children</em></strong> \u5B57\u6BB5\uFF0C\u8868\u683C\u81EA\u52A8\u4E3A\u6811\u5F62\u8868\u683C\u3002\u5F53 isTreeTable = true \u7684\u65F6\u5019\uFF0C\u6570\u636E\u4E2D\u8BBE\u7F6E <code>flag: 'INDEX'</code> \u4E0D\u8D77\u4F5C\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showIndexColumn</td>
<td>\u662F\u5426\u663E\u793A\u5E8F\u53F7\u5217</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>inset</td>
<td>\u53D6\u6D88\u8868\u683C\u5916\u90E8\u7684\u9ED8\u8BA4 <code>padding</code></td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>autoCreateKey</td>
<td>\u662F\u5426\u81EA\u52A8\u751F\u6210 rowKey \u914D\u7F6E</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showTableSetting</td>
<td>\u662F\u5426\u663E\u793A\u8868\u683C\u53F3\u4E0A\u89D2\u7684\u8BBE\u7F6E\u548C\u5237\u65B0\u6309\u94AE</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showSummary</td>
<td>\u662F\u5426\u663E\u793A\u5408\u8BA1\u884C</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>immediate</td>
<td>\u662F\u5426\u7ACB\u5373\u8BF7\u6C42\u63A5\u53E3</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>useSearchForm</td>
<td>\u662F\u5426\u4F7F\u7528\u641C\u7D22\u8868\u5355</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>ellipsis</td>
<td>\u6587\u672C\u8D85\u8FC7\u5BBD\u5EA6\u662F\u5426\u663E\u793A <code>...</code></td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>draggable</td>
<td>\u62D6\u62FD</td>
<td>boolean</td>
<td>-</td>
<td>3.17.0</td>
</tr>
<tr>
<td>canResize</td>
<td>\u662F\u5426\u53EF\u4EE5\u81EA\u9002\u5E94\u9AD8\u5EA6</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>pagination</td>
<td>\u5206\u9875\u914D\u7F6E</td>
<td><a href="./src/types/pagination.ts.html#15"><code>PaginationProps</code></a> | boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>clearSelectOnPageChange</td>
<td>\u5728\u5206\u9875\u6539\u53D8\u7684\u65F6\u5019\u6E05\u7A7A\u9009\u9879</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>\u662F\u5426\u52A0\u8F7D</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>emptyDataIsShowTable</td>
<td>\u5728\u5F00\u8D77\u641C\u7D22\u8868\u5355\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u662F\u5426\u663E\u793A\u8868\u683C</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>resizeHeightOffset</td>
<td>\u81EA\u9002\u5E94\u9AD8\u5EA6\u504F\u79FB\uFF0C\u8BA1\u7B97\u7ED3\u679C-\u504F\u79FB\u91CF</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxHeight</td>
<td>\u8868\u683C\u6EDA\u52A8\u6700\u5927\u9AD8\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rowKey</td>
<td>\u8868\u683C\u884C key \u7684\u53D6\u503C\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u51FD\u6570</td>
<td><code>string</code></td>
<td><code>((record: Recordable) =&gt; string)</code></td>
<td>-</td>
</tr>
<tr>
<td>titleHelpMessage</td>
<td>\u6807\u9898\u53F3\u4FA7\u63D0\u793A</td>
<td>string | <code>string[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u8868\u683C\u6807\u9898</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u8868\u683C\u7D27\u5BC6\u5EA6</td>
<td><a href="./src/types/table.ts.html#L94">SizeType</a></td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>tableSetting</td>
<td>\u8BBE\u7F6E\u53F3\u4E0A\u89D2\u663E\u793A\u7684 icon</td>
<td><a href="./src/types/table.ts.html#L143">TableSetting</a></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>sortFn</td>
<td>\u81EA\u5B9A\u4E49\u6392\u5E8F\u65B9\u6CD5</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>filterFn</td>
<td>\u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>summaryFunc</td>
<td>\u8BA1\u7B97\u5408\u8BA1\u884C\u7684\u65B9\u6CD5</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>beforeFetch</td>
<td>\u8BF7\u6C42\u4E4B\u524D\u5904\u7406\u53C2\u6570</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>afterFetch</td>
<td>\u81EA\u5B9A\u4E49\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u53C2\u6570</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>handleSearchInfoFn</td>
<td>\u67E5\u8BE2\u6761\u4EF6\u8BF7\u6C42\u4E4B\u524D\u5904\u7406</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>totalRender</td>
<td>\u5206\u9875\u603B\u6570\u7684\u914D\u7F6E</td>
<td><code>(total: number, range: [number, number]) =&gt; any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fetchSetting</td>
<td>\u8BF7\u6C42\u63A5\u53E3\u914D\u7F6E</td>
<td><a href="./src/types/table.ts.html#L132">FetchSetting</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; void</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>summaryData</td>
<td>\u81EA\u5B9A\u4E49\u5408\u8BA1\u8868\u683C\u5185\u5BB9</td>
<td>object[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dataSource</td>
<td>\u8868\u683C\u6570\u636E</td>
<td>object[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>searchInfo</td>
<td>\u989D\u5916\u7684\u8BF7\u6C42\u63A5\u53E3\u7684\u6570\u636E</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>scroll</td>
<td>\u8868\u683C\u6EDA\u52A8\u6761\u8BBE\u7F6E</td>
<td><code>{ x?: number | true; y?: number }</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>formConfig</td>
<td>\u67E5\u8BE2\u6761\u4EF6\u7684\u914D\u7F6E</td>
<td><a href="./../form-pro/src/props.ts.html"><code>Partial&lt;FormProProps&gt;</code></a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>columns</td>
<td>\u8868\u683C\u5217\u7684\u914D\u7F6E</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>indexColumnProps</td>
<td>\u5E8F\u53F7\u5217\u914D\u7F6E</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>actionColumn</td>
<td>\u64CD\u4F5C\u5217\u7684\u914D\u7F6E</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rowClassName</td>
<td>row \u7684 class \u540D\u5B57</td>
<td><code>(record: TableCustomRecord&lt;T&gt;) =&gt; string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rowSelection</td>
<td>row \u7684 selection \u914D\u7F6E</td>
<td><a href="./src/types/table.ts.html#21">TableRowSelection</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>emptyPlaceholderClassName</td>
<td>\u7A7A\u6570\u636E\u7684\u65F6\u5019\u5B9A\u5236\u5C55\u793A\u7684 class \u540D</td>
<td>() =&gt; string</td>
<td>() =&gt; ''</td>
<td>3.39.0</td>
</tr>
<tr>
<td>expandIcon</td>
<td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</td>
<td>Function(props):VNode | v-slot:expandIcon=&quot;props&quot;</td>
<td>-</td>
<td>4.0</td>
</tr>
<tr>
<td>inputEnterSubmit</td>
<td>\u4E3A <code>true</code> \u65F6\u8F93\u5165\u6846\u6309\u56DE\u8F66\u81EA\u52A8\u89E6\u53D1 submit \u65B9\u6CD5</td>
<td>boolean</td>
<td>true</td>
<td>4.24.0</td>
</tr>
</tbody>
</table>
<blockquote>
<p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">TableProProps</a></p>
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
<td>register</td>
<td>\u4F7F\u7528 useTable \u7684\u56DE\u8C03</td>
<td>Function(<a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29" target="_blank" rel="noopener noreferrer">formActionType</a>)</td>
</tr>
<tr>
<td>fetch-success</td>
<td>api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u7684\u56DE\u8C03</td>
<td>Function({ items: \u7ED3\u679C\u6570\u636E, total: \u603B\u6570, params: \u53C2\u6570 }, res: \u6240\u6709\u6570\u636E)</td>
</tr>
<tr>
<td>fetch-error</td>
<td>api \u53C2\u6570\u8BF7\u6C42\u5931\u8D25\u7684\u56DE\u8C03</td>
<td>Function(error: any)</td>
</tr>
<tr>
<td>fetch-finally</td>
<td>api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u5931\u8D25\u90FD\u4F1A\u56DE\u8C03</td>
<td>Function()</td>
</tr>
<tr>
<td>selection-change</td>
<td>\u8868\u683C rowSelection \u7684 change \u56DE\u8C03</td>
<td><code>Function(keys\uFF1A string[] | number[]\uFF0Crows: any[])</code></td>
</tr>
<tr>
<td>row-click</td>
<td>\u8868\u683C row-click \u7684\u56DE\u8C03</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-dbClick</td>
<td>\u8868\u683C row-dbClick \u7684\u56DE\u8C03</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>\u8868\u683C row-contextmenu \u7684\u56DE\u8C03</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-mouseenter</td>
<td>\u8868\u683C row-mouseenter \u7684\u56DE\u8C03</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-mouseleave</td>
<td>\u8868\u683C row-mouseleave \u7684\u56DE\u8C03</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
</tbody>
</table>
<h3 id="useTable-\u8FD4\u56DE\u7684\u65B9\u6CD5-TableActionType">useTable \u8FD4\u56DE\u7684\u65B9\u6CD5 ( TableActionType ) <a class="header-anchor" href="#useTable-\u8FD4\u56DE\u7684\u65B9\u6CD5-TableActionType">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./src/types/table.ts.html#102">TableProProps</a></p>
</blockquote>
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
<td>reload</td>
<td>\u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3</td>
<td>Function(opt?: <a href="./src/types/table.ts.html#79">FetchParams</a>)</td>
</tr>
<tr>
<td>getSelectRows</td>
<td>\u83B7\u53D6\u9009\u4E2D\u884C</td>
<td>-</td>
</tr>
<tr>
<td>clearSelectedRowKeys</td>
<td>\u6E05\u7A7A\u9009\u4E2D\u884C</td>
<td>-</td>
</tr>
<tr>
<td>getSelectRowKeys</td>
<td>\u83B7\u53D6\u9009\u4E2D\u884C Key</td>
<td>-</td>
</tr>
<tr>
<td>deleteSelectRowByKey</td>
<td>\u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A</td>
<td>Function(keys: string[])</td>
</tr>
<tr>
<td>setPagination</td>
<td>\u8BBE\u7F6E\u5206\u9875</td>
<td>-</td>
</tr>
<tr>
<td>setTableData</td>
<td>\u8BBE\u7F6E\u8868\u683C\u6570\u636E</td>
<td>-</td>
</tr>
<tr>
<td>getColumns</td>
<td>\u83B7\u53D6\u8868\u5934\u914D\u7F6E</td>
<td>-</td>
</tr>
<tr>
<td>setColumns</td>
<td>\u8BBE\u7F6E\u8868\u5934\u914D\u7F6E</td>
<td>-</td>
</tr>
<tr>
<td>getDataSource</td>
<td>\u83B7\u53D6\u8868\u683C\u6570\u636E</td>
<td>-</td>
</tr>
<tr>
<td>setLoading</td>
<td>\u8BBE\u7F6E\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td>
<td>-</td>
</tr>
<tr>
<td>getLoading</td>
<td>\u83B7\u53D6\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td>
<td>-</td>
</tr>
<tr>
<td>setProps</td>
<td>\u8BBE\u7F6E\u8868\u683C\u914D\u7F6E</td>
<td>-</td>
</tr>
<tr>
<td>setSelectedRowKeys</td>
<td>\u8BBE\u7F6E\u9009\u4E2D\u7684\u8868\u683C\u884C</td>
<td>Function(keys: string[])</td>
</tr>
<tr>
<td>getPaginationRef</td>
<td>\u83B7\u53D6\u8868\u683C\u5206\u9875\u5B9E\u4F8B</td>
<td>-</td>
</tr>
<tr>
<td>getSize</td>
<td>\u83B7\u53D6\u8868\u683C\u7D27\u5BC6\u5EA6</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="a-table-image-API">a-table-image API <a class="header-anchor" href="#a-table-image-API">
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
<td>imgList</td>
<td>\u56FE\u7247\u7684\u6570\u636E</td>
<td>string[]</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="a-table-card-API">a-table-card API <a class="header-anchor" href="#a-table-card-API">
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
<td>imgSize</td>
<td>\u56FE\u7247\u7684\u5C3A\u5BF8</td>
<td>number</td>
<td>80</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgUrl</td>
<td>\u56FE\u7247\u7684\u5730\u5740</td>
<td>string</td>
<td>''</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgBorderd</td>
<td>\u56FE\u7247\u7684\u8FB9\u6846</td>
<td>boolean</td>
<td>true</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgPreview</td>
<td>\u56FE\u7247\u7684\u9884\u89C8</td>
<td>boolean</td>
<td>false</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgErrorImage</td>
<td>\u56FE\u7247\u52A0\u8F7D\u9519\u8BEF\u5C55\u793A</td>
<td>string</td>
<td>-</td>
<td>3.33.0</td>
</tr>
<tr>
<td>title</td>
<td>\u6807\u9898</td>
<td>string</td>
<td>-</td>
<td>3.33.0</td>
</tr>
<tr>
<td>titleMaxLength</td>
<td>\u6807\u9898\u6700\u5927\u5C55\u793A\u957F\u5EA6</td>
<td>number</td>
<td>14</td>
<td>3.33.0</td>
</tr>
<tr>
<td>desc</td>
<td>\u63CF\u8FF0</td>
<td>string</td>
<td>-</td>
<td>3.33.0</td>
</tr>
<tr>
<td>descMaxLength</td>
<td>\u63CF\u8FF0\u6700\u5927\u5C55\u793A\u957F\u5EA6</td>
<td>number</td>
<td>14</td>
<td>3.34.0</td>
</tr>
<tr>
<td>cardable</td>
<td>\u5361\u7247\u8868\u683C</td>
<td>boolean</td>
<td>false</td>
<td>3.35.0</td>
</tr>
<tr>
<td>cardTitle</td>
<td>\u5361\u7247\u6807\u9898</td>
<td>string | slot</td>
<td>-</td>
<td>3.35.0</td>
</tr>
</tbody>
</table>
<h3 id="a-table-card-slots">a-table-card slots <a class="header-anchor" href="#a-table-card-slots">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>titleSuffix</td>
<td>\u6807\u9898\u672B\u5C3E\u7684\u8FFD\u52A0</td>
<td></td>
<td>-</td>
<td>3.33.0</td>
</tr>
</tbody>
</table>
`,lastUpdated:1710997117478}},Ps={class:"markdown"},zs=L('<p>\u666E\u901A\u8868\u683C\u53EA\u80FD\u4E00\u70B9\u70B9\u5199\uFF0C\u52A0\u5F3A\u7248\u8868\u683C\u914D\u4E00\u4E0B\u5C31\u884C</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u60F3\u5077\u61D2\u7684\u65F6\u5019</li><li>\u52A0\u901F\u8FED\u4EE3\u9879\u76EE\u7684\u65F6\u5019</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>clickToRowSelect</td><td>\u70B9\u51FB\u884C\u9009\u4E2D</td><td>boolean</td><td>-</td><td></td></tr><tr><td>isTreeTable</td><td>\u662F\u5426\u662F\u6811\u5F62\u8868\u683C\uFF0C\u5982\u679C\u6570\u636E\u91CC\u9762\u6709 <strong><em>children</em></strong> \u5B57\u6BB5\uFF0C\u8868\u683C\u81EA\u52A8\u4E3A\u6811\u5F62\u8868\u683C\u3002\u5F53 isTreeTable = true \u7684\u65F6\u5019\uFF0C\u6570\u636E\u4E2D\u8BBE\u7F6E <code>flag: &#39;INDEX&#39;</code> \u4E0D\u8D77\u4F5C\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showIndexColumn</td><td>\u662F\u5426\u663E\u793A\u5E8F\u53F7\u5217</td><td>boolean</td><td>-</td><td></td></tr><tr><td>inset</td><td>\u53D6\u6D88\u8868\u683C\u5916\u90E8\u7684\u9ED8\u8BA4 <code>padding</code></td><td>boolean</td><td>-</td><td></td></tr><tr><td>autoCreateKey</td><td>\u662F\u5426\u81EA\u52A8\u751F\u6210 rowKey \u914D\u7F6E</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showTableSetting</td><td>\u662F\u5426\u663E\u793A\u8868\u683C\u53F3\u4E0A\u89D2\u7684\u8BBE\u7F6E\u548C\u5237\u65B0\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showSummary</td><td>\u662F\u5426\u663E\u793A\u5408\u8BA1\u884C</td><td>boolean</td><td>-</td><td></td></tr><tr><td>immediate</td><td>\u662F\u5426\u7ACB\u5373\u8BF7\u6C42\u63A5\u53E3</td><td>boolean</td><td>true</td><td></td></tr><tr><td>useSearchForm</td><td>\u662F\u5426\u4F7F\u7528\u641C\u7D22\u8868\u5355</td><td>boolean</td><td>true</td><td></td></tr><tr><td>ellipsis</td><td>\u6587\u672C\u8D85\u8FC7\u5BBD\u5EA6\u662F\u5426\u663E\u793A <code>...</code></td><td>boolean</td><td>-</td><td></td></tr><tr><td>draggable</td><td>\u62D6\u62FD</td><td>boolean</td><td>-</td><td>3.17.0</td></tr><tr><td>canResize</td><td>\u662F\u5426\u53EF\u4EE5\u81EA\u9002\u5E94\u9AD8\u5EA6</td><td>boolean</td><td>-</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>boolean</td><td>-</td><td></td></tr><tr><td>pagination</td><td>\u5206\u9875\u914D\u7F6E</td><td><a href="./src/types/pagination.ts.html#15"><code>PaginationProps</code></a> | boolean</td><td>-</td><td></td></tr><tr><td>clearSelectOnPageChange</td><td>\u5728\u5206\u9875\u6539\u53D8\u7684\u65F6\u5019\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u662F\u5426\u52A0\u8F7D</td><td>boolean</td><td>-</td><td></td></tr><tr><td>emptyDataIsShowTable</td><td>\u5728\u5F00\u8D77\u641C\u7D22\u8868\u5355\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u662F\u5426\u663E\u793A\u8868\u683C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resizeHeightOffset</td><td>\u81EA\u9002\u5E94\u9AD8\u5EA6\u504F\u79FB\uFF0C\u8BA1\u7B97\u7ED3\u679C-\u504F\u79FB\u91CF</td><td>number</td><td>-</td><td></td></tr><tr><td>maxHeight</td><td>\u8868\u683C\u6EDA\u52A8\u6700\u5927\u9AD8\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>rowKey</td><td>\u8868\u683C\u884C key \u7684\u53D6\u503C\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u51FD\u6570</td><td><code>string</code></td><td><code>((record: Recordable) =&gt; string)</code></td><td>-</td></tr><tr><td>titleHelpMessage</td><td>\u6807\u9898\u53F3\u4FA7\u63D0\u793A</td><td>string | <code>string[]</code></td><td>-</td><td></td></tr><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td>-</td><td></td></tr><tr><td>size</td><td>\u8868\u683C\u7D27\u5BC6\u5EA6</td><td><a href="./src/types/table.ts.html#L94">SizeType</a></td><td>default</td><td></td></tr><tr><td>tableSetting</td><td>\u8BBE\u7F6E\u53F3\u4E0A\u89D2\u663E\u793A\u7684 icon</td><td><a href="./src/types/table.ts.html#L143">TableSetting</a></td><td>-</td><td>-</td></tr><tr><td>sortFn</td><td>\u81EA\u5B9A\u4E49\u6392\u5E8F\u65B9\u6CD5</td><td>Function</td><td>-</td><td></td></tr><tr><td>filterFn</td><td>\u81EA\u5B9A\u4E49\u7B5B\u9009\u65B9\u6CD5</td><td>Function</td><td>-</td><td></td></tr><tr><td>summaryFunc</td><td>\u8BA1\u7B97\u5408\u8BA1\u884C\u7684\u65B9\u6CD5</td><td>Function</td><td>-</td><td></td></tr><tr><td>beforeFetch</td><td>\u8BF7\u6C42\u4E4B\u524D\u5904\u7406\u53C2\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>afterFetch</td><td>\u81EA\u5B9A\u4E49\u5904\u7406\u63A5\u53E3\u8FD4\u56DE\u53C2\u6570</td><td>Function</td><td>-</td><td></td></tr><tr><td>handleSearchInfoFn</td><td>\u67E5\u8BE2\u6761\u4EF6\u8BF7\u6C42\u4E4B\u524D\u5904\u7406</td><td>Function</td><td>-</td><td></td></tr><tr><td>totalRender</td><td>\u5206\u9875\u603B\u6570\u7684\u914D\u7F6E</td><td><code>(total: number, range: [number, number]) =&gt; any</code></td><td>-</td><td></td></tr><tr><td>fetchSetting</td><td>\u8BF7\u6C42\u63A5\u53E3\u914D\u7F6E</td><td><a href="./src/types/table.ts.html#L132">FetchSetting</a></td><td>-</td><td></td></tr><tr><td>api</td><td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; void</code></td><td>-</td><td></td></tr><tr><td>summaryData</td><td>\u81EA\u5B9A\u4E49\u5408\u8BA1\u8868\u683C\u5185\u5BB9</td><td>object[]</td><td>-</td><td></td></tr><tr><td>dataSource</td><td>\u8868\u683C\u6570\u636E</td><td>object[]</td><td>-</td><td></td></tr><tr><td>searchInfo</td><td>\u989D\u5916\u7684\u8BF7\u6C42\u63A5\u53E3\u7684\u6570\u636E</td><td>object</td><td>-</td><td></td></tr><tr><td>scroll</td><td>\u8868\u683C\u6EDA\u52A8\u6761\u8BBE\u7F6E</td><td><code>{ x?: number | true; y?: number }</code></td><td>-</td><td></td></tr><tr><td>formConfig</td><td>\u67E5\u8BE2\u6761\u4EF6\u7684\u914D\u7F6E</td><td><a href="./../form-pro/src/props.ts.html"><code>Partial&lt;FormProProps&gt;</code></a></td><td>-</td><td></td></tr><tr><td>columns</td><td>\u8868\u683C\u5217\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>indexColumnProps</td><td>\u5E8F\u53F7\u5217\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>actionColumn</td><td>\u64CD\u4F5C\u5217\u7684\u914D\u7F6E</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>rowClassName</td><td>row \u7684 class \u540D\u5B57</td><td><code>(record: TableCustomRecord&lt;T&gt;) =&gt; string</code></td><td>-</td><td></td></tr><tr><td>rowSelection</td><td>row \u7684 selection \u914D\u7F6E</td><td><a href="./src/types/table.ts.html#21">TableRowSelection</a></td><td>-</td><td></td></tr><tr><td>emptyPlaceholderClassName</td><td>\u7A7A\u6570\u636E\u7684\u65F6\u5019\u5B9A\u5236\u5C55\u793A\u7684 class \u540D</td><td>() =&gt; string</td><td>() =&gt; &#39;&#39;</td><td>3.39.0</td></tr><tr><td>expandIcon</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</td><td>Function(props):VNode | v-slot:expandIcon=&quot;props&quot;</td><td>-</td><td>4.0</td></tr><tr><td>inputEnterSubmit</td><td>\u4E3A <code>true</code> \u65F6\u8F93\u5165\u6846\u6309\u56DE\u8F66\u81EA\u52A8\u89E6\u53D1 submit \u65B9\u6CD5</td><td>boolean</td><td>true</td><td>4.24.0</td></tr></tbody></table><blockquote><p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">TableProProps</a></p></blockquote><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>register</td><td>\u4F7F\u7528 useTable \u7684\u56DE\u8C03</td><td>Function(<a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29" target="_blank" rel="noopener noreferrer">formActionType</a>)</td></tr><tr><td>fetch-success</td><td>api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u7684\u56DE\u8C03</td><td>Function({ items: \u7ED3\u679C\u6570\u636E, total: \u603B\u6570, params: \u53C2\u6570 }, res: \u6240\u6709\u6570\u636E)</td></tr><tr><td>fetch-error</td><td>api \u53C2\u6570\u8BF7\u6C42\u5931\u8D25\u7684\u56DE\u8C03</td><td>Function(error: any)</td></tr><tr><td>fetch-finally</td><td>api \u53C2\u6570\u8BF7\u6C42\u6210\u529F\u5931\u8D25\u90FD\u4F1A\u56DE\u8C03</td><td>Function()</td></tr><tr><td>selection-change</td><td>\u8868\u683C rowSelection \u7684 change \u56DE\u8C03</td><td><code>Function(keys\uFF1A string[] | number[]\uFF0Crows: any[])</code></td></tr><tr><td>row-click</td><td>\u8868\u683C row-click \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-dbClick</td><td>\u8868\u683C row-dbClick \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-contextmenu</td><td>\u8868\u683C row-contextmenu \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-mouseenter</td><td>\u8868\u683C row-mouseenter \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-mouseleave</td><td>\u8868\u683C row-mouseleave \u7684\u56DE\u8C03</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr></tbody></table><h3 id="useTable-\u8FD4\u56DE\u7684\u65B9\u6CD5-TableActionType">useTable \u8FD4\u56DE\u7684\u65B9\u6CD5 ( TableActionType ) <a class="header-anchor" href="#useTable-\u8FD4\u56DE\u7684\u65B9\u6CD5-TableActionType"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>\u66F4\u591A\u53C2\u6570\u53C2\u8003 <a href="./src/types/table.ts.html#102">TableProProps</a></p></blockquote><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>reload</td><td>\u91CD\u65B0\u8BF7\u6C42\u63A5\u53E3</td><td>Function(opt?: <a href="./src/types/table.ts.html#79">FetchParams</a>)</td></tr><tr><td>getSelectRows</td><td>\u83B7\u53D6\u9009\u4E2D\u884C</td><td>-</td></tr><tr><td>clearSelectedRowKeys</td><td>\u6E05\u7A7A\u9009\u4E2D\u884C</td><td>-</td></tr><tr><td>getSelectRowKeys</td><td>\u83B7\u53D6\u9009\u4E2D\u884C Key</td><td>-</td></tr><tr><td>deleteSelectRowByKey</td><td>\u5220\u9664\u9009\u4E2D\u7684\u67D0\u51E0\u4E2A</td><td>Function(keys: string[])</td></tr><tr><td>setPagination</td><td>\u8BBE\u7F6E\u5206\u9875</td><td>-</td></tr><tr><td>setTableData</td><td>\u8BBE\u7F6E\u8868\u683C\u6570\u636E</td><td>-</td></tr><tr><td>getColumns</td><td>\u83B7\u53D6\u8868\u5934\u914D\u7F6E</td><td>-</td></tr><tr><td>setColumns</td><td>\u8BBE\u7F6E\u8868\u5934\u914D\u7F6E</td><td>-</td></tr><tr><td>getDataSource</td><td>\u83B7\u53D6\u8868\u683C\u6570\u636E</td><td>-</td></tr><tr><td>setLoading</td><td>\u8BBE\u7F6E\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td><td>-</td></tr><tr><td>getLoading</td><td>\u83B7\u53D6\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td><td>-</td></tr><tr><td>setProps</td><td>\u8BBE\u7F6E\u8868\u683C\u914D\u7F6E</td><td>-</td></tr><tr><td>setSelectedRowKeys</td><td>\u8BBE\u7F6E\u9009\u4E2D\u7684\u8868\u683C\u884C</td><td>Function(keys: string[])</td></tr><tr><td>getPaginationRef</td><td>\u83B7\u53D6\u8868\u683C\u5206\u9875\u5B9E\u4F8B</td><td>-</td></tr><tr><td>getSize</td><td>\u83B7\u53D6\u8868\u683C\u7D27\u5BC6\u5EA6</td><td>-</td></tr></tbody></table><h3 id="a-table-image-API">a-table-image API <a class="header-anchor" href="#a-table-image-API"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>imgList</td><td>\u56FE\u7247\u7684\u6570\u636E</td><td>string[]</td><td>-</td><td></td></tr></tbody></table><h3 id="a-table-card-API">a-table-card API <a class="header-anchor" href="#a-table-card-API"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>imgSize</td><td>\u56FE\u7247\u7684\u5C3A\u5BF8</td><td>number</td><td>80</td><td>3.33.0</td></tr><tr><td>imgUrl</td><td>\u56FE\u7247\u7684\u5730\u5740</td><td>string</td><td>&#39;&#39;</td><td>3.33.0</td></tr><tr><td>imgBorderd</td><td>\u56FE\u7247\u7684\u8FB9\u6846</td><td>boolean</td><td>true</td><td>3.33.0</td></tr><tr><td>imgPreview</td><td>\u56FE\u7247\u7684\u9884\u89C8</td><td>boolean</td><td>false</td><td>3.33.0</td></tr><tr><td>imgErrorImage</td><td>\u56FE\u7247\u52A0\u8F7D\u9519\u8BEF\u5C55\u793A</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>titleMaxLength</td><td>\u6807\u9898\u6700\u5927\u5C55\u793A\u957F\u5EA6</td><td>number</td><td>14</td><td>3.33.0</td></tr><tr><td>desc</td><td>\u63CF\u8FF0</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>descMaxLength</td><td>\u63CF\u8FF0\u6700\u5927\u5C55\u793A\u957F\u5EA6</td><td>number</td><td>14</td><td>3.34.0</td></tr><tr><td>cardable</td><td>\u5361\u7247\u8868\u683C</td><td>boolean</td><td>false</td><td>3.35.0</td></tr><tr><td>cardTitle</td><td>\u5361\u7247\u6807\u9898</td><td>string | slot</td><td>-</td><td>3.35.0</td></tr></tbody></table><h3 id="a-table-card-slots">a-table-card slots <a class="header-anchor" href="#a-table-card-slots"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>titleSuffix</td><td>\u6807\u9898\u672B\u5C3E\u7684\u8FFD\u52A0</td><td></td><td>-</td><td>3.33.0</td></tr></tbody></table>',17),Us=[zs];function Es(s,c,e,a,r,k){return d(),x("article",Ps,Us)}var js=C(Ds,[["render",Es]]);const Os={pageData:{title:"TablePro",description:"",frontmatter:{category:"Components",cols:1,type:"Data Display",title:"TablePro",cover:"https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg"},headers:[{level:2,title:"When to use",slug:"When-to-use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Events",slug:"Events",content:""},{level:3,title:"useTable methods ( TableActionType )",slug:"useTable-methods-TableActionType",content:""},{level:3,title:"a-table-image API",slug:"a-table-image-API",content:""},{level:3,title:"a-table-card API",slug:"a-table-card-API",content:""},{level:3,title:"a-table-card slots",slug:"a-table-card-slots",content:""}],relativePath:"components/table-pro/index.en-US.md",content:`
The ordinary form can only be written a little, and the enhanced form can be matched with it

## When to use

- When you want to be lazy
- When accelerating iterative projects

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| clickToRowSelect | Click selected | boolean | - |  |
| isTreeTable | Tree table | boolean | - |  |
| showIndexColumn | Show index column | boolean | - |  |
| inset | Cancel \`padding\` | boolean | - |  |
| autoCreateKey | Auto create row key | boolean | - |  |
| showTableSetting | Show table setting | boolean | - |  |
| showSummary | Show summary | boolean | - |  |
| immediate | Immediate | boolean | true |  |
| useSearchForm | Show search form | boolean | true |  |
| ellipsis | Ellipsis \`...\` | boolean | - |  |
| draggable | Drag | boolean | - | 3.17.0 |
| canResize | Auto resize | boolean | - |  |
| bordered | Border | boolean | - |  |
| pagination | Pagination config | [\`PaginationProps\`](./src/types/pagination.ts#15) \\| boolean | - |  |
| clearSelectOnPageChange | option in page empty | boolean | - |  |
| loading | \u662F\u5426\u52A0\u8F7D | boolean | - |  |
| emptyDataIsShowTable | Empty data is show table | boolean | true |  |
| resizeHeightOffset | Resize height offset | number | - |  |
| maxHeight | Max height | number | - |  |
| rowKey | Table key | \`string\` | \`((record: Recordable) =&gt; string)\` | - |  |
| titleHelpMessage | Table title tooltip | string \\| \`string[]\` | - |  |
| title | Table title | string | - |  |
| size | Table size | [SizeType](./src/types/table.ts#L94) | default |  |
| tableSetting | Setting config | [TableSetting](./src/types/table.ts#L143) | - | - |
| sortFn | Sort function | Function | - |  |
| filterFn | Filter function | Function | - |  |
| summaryFunc | Summary function | Function | - |  |
| beforeFetch | Before fetch | Function | - |  |
| afterFetch | After fetch | Function | - |  |
| handleSearchInfoFn | Before search | Function | - |  |
| totalRender | Total render | \`(total: number, range: [number, number]) =&gt; any\` | - |  |
| fetchSetting | Fetch config | [FetchSetting](./src/types/table.ts#L132) | - |  |
| api | Ajax method | \`(...arg: any) =&gt; void\` | - |  |
| summaryData | Summary content | object[] | - |  |
| dataSource | Table data | object[] | - |  |
| searchInfo | Ajax options | object | - |  |
| scroll | Scroll config | \`{ x?: number | true; y?: number }\` | - |  |
| formConfig | Search form config | [\`Partial&lt;FormProProps&gt;\`](../form-pro/src/props.ts) | - |  |
| columns | Columns config | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33) | - |  |
| indexColumnProps | Index config | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33) | - |  |
| actionColumn | Action config | [BasicColumn](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33) | - |  |
| rowClassName | Row&#39;s&#39; class name | \`(record: TableCustomRecord&lt;T&gt;) =&gt; string\` | - |  |
| rowSelection | Row&#39;s selection config | [TableRowSelection](./src/types/table.ts#21) | - |  |
| emptyPlaceholderClassName | Empty data class name | () =&gt; string | () =&gt; &#39;&#39; | 3.39.0 |
| expandIcon | Customize row expand Icon. | Function(props):VNode \\| v-slot:expandIcon=&quot;props&quot; | - | 4.0 |

&gt; More [TableProProps](https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33)

### Events

| Events Name | Description | Arguments |
| --- | --- | --- | --- | --- |
| register | UseTable register callback | Function([formActionType](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29)) |  |
| fetch-success | Api success callback | Function({ items: result Data, total: total, params: arguments }) |  |
| fetch-error | Api error callback | Function(error: any) |  |
| fetch-finally | Api all callback | Function() |  |
| selection-change | RowSelection&#39;s change callback | \`Function(keys\uFF1A string[] | number[]\uFF0Crows: any[])\` |  |
| row-click | row-click callback | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-dbClick | row-dbClick callback | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-contextmenu | row-contextmenu callback | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-mouseenter | row-mouseenter callback | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |
| row-mouseleave | row-mouseleave callback | \`Function(record: Recordable&lt;any&gt;, index: number, e: Event)\` |  |

### useTable methods ( TableActionType )

&gt; More [TableProProps](./src/types/table.ts#102)

| Events Name | Description | Arguments |
| --- | --- | --- |
| reload | Reload table | Function(opt?: [FetchParams](./src/types/table.ts#79)) |
| getSelectRows | Get select rows | - |
| clearSelectedRowKeys | Clear selected row | - |
| getSelectRowKeys | Get select row keys Key | - |
| deleteSelectRowByKey | Delete select row by key | Function(keys: string[]) |
| setPagination | Set pagination | - |
| setTableData | Set data | - |
| getColumns | Get table columns | - |
| setColumns | Set table columns | - |
| getDataSource | Get data | - |
| setLoading | Set loading status | - |
| getLoading | Get loading status | - |
| setProps | Set table props | - |
| setSelectedRowKeys | Set seleected row keys | Function(keys: string[]) |
| getPaginationRef | Get pagination | - |
| getSize | Get size | - |

### a-table-image API

| Property | Description | Type     | Default | Version |
| -------- | ----------- | -------- | ------- | ------- |
| imgList  | Image data  | string[] | -       |         |

### a-table-card API

| Property       | Description             | Type           | Default | Version |
| -------------- | ----------------------- | -------------- | ------- | ------- |
| imgSize        | Image size              | number         | 80      | 3.33.0  |
| imgUrl         | Image url               | string         | &#39;&#39;      | 3.33.0  |
| imgBorderd     | Image border            | boolean        | true    | 3.33.0  |
| imgPreview     | Image preview           | boolean        | false   | 3.33.0  |
| imgErrorImage  | Image error placeholder | string         | -       | 3.33.0  |
| title          | Title                   | string         | -       | 3.33.0  |
| titleMaxLength | Title max length        | number         | 14      | 3.33.0  |
| desc           | Description             | string         | -       | 3.33.0  |
| descMaxLength  | Description max length  | number         | 14      | 3.34.0  |
| cardable       | Card mode               | boolean        | false   | 3.35.0  |
| cardTitle      | Card title              | string \\| slot | -       | 3.35.0  |

### a-table-card slots

| Name        | Description  | Arguments | Default | Version |
| ----------- | ------------ | --------- | ------- | ------- |
| titleSuffix | title suffix |           | -       | 3.33.0  |
`,html:`<p>The ordinary form can only be written a little, and the enhanced form can be matched with it</p>
<h2 id="When-to-use">When to use <a class="header-anchor" href="#When-to-use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When you want to be lazy</li>
<li>When accelerating iterative projects</li>
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
<td>clickToRowSelect</td>
<td>Click selected</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>isTreeTable</td>
<td>Tree table</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showIndexColumn</td>
<td>Show index column</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>inset</td>
<td>Cancel <code>padding</code></td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>autoCreateKey</td>
<td>Auto create row key</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showTableSetting</td>
<td>Show table setting</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showSummary</td>
<td>Show summary</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>immediate</td>
<td>Immediate</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>useSearchForm</td>
<td>Show search form</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>ellipsis</td>
<td>Ellipsis <code>...</code></td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>draggable</td>
<td>Drag</td>
<td>boolean</td>
<td>-</td>
<td>3.17.0</td>
</tr>
<tr>
<td>canResize</td>
<td>Auto resize</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>Border</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>pagination</td>
<td>Pagination config</td>
<td><a href="./src/types/pagination.ts.html#15"><code>PaginationProps</code></a> | boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>clearSelectOnPageChange</td>
<td>option in page empty</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>\u662F\u5426\u52A0\u8F7D</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>emptyDataIsShowTable</td>
<td>Empty data is show table</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>resizeHeightOffset</td>
<td>Resize height offset</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>maxHeight</td>
<td>Max height</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rowKey</td>
<td>Table key</td>
<td><code>string</code></td>
<td><code>((record: Recordable) =&gt; string)</code></td>
<td>-</td>
</tr>
<tr>
<td>titleHelpMessage</td>
<td>Table title tooltip</td>
<td>string | <code>string[]</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>Table title</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Table size</td>
<td><a href="./src/types/table.ts.html#L94">SizeType</a></td>
<td>default</td>
<td></td>
</tr>
<tr>
<td>tableSetting</td>
<td>Setting config</td>
<td><a href="./src/types/table.ts.html#L143">TableSetting</a></td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>sortFn</td>
<td>Sort function</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>filterFn</td>
<td>Filter function</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>summaryFunc</td>
<td>Summary function</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>beforeFetch</td>
<td>Before fetch</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>afterFetch</td>
<td>After fetch</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>handleSearchInfoFn</td>
<td>Before search</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>totalRender</td>
<td>Total render</td>
<td><code>(total: number, range: [number, number]) =&gt; any</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fetchSetting</td>
<td>Fetch config</td>
<td><a href="./src/types/table.ts.html#L132">FetchSetting</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>Ajax method</td>
<td><code>(...arg: any) =&gt; void</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>summaryData</td>
<td>Summary content</td>
<td>object[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dataSource</td>
<td>Table data</td>
<td>object[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>searchInfo</td>
<td>Ajax options</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>scroll</td>
<td>Scroll config</td>
<td><code>{ x?: number | true; y?: number }</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>formConfig</td>
<td>Search form config</td>
<td><a href="./../form-pro/src/props.ts.html"><code>Partial&lt;FormProProps&gt;</code></a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>columns</td>
<td>Columns config</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>indexColumnProps</td>
<td>Index config</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>actionColumn</td>
<td>Action config</td>
<td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rowClassName</td>
<td>Row's' class name</td>
<td><code>(record: TableCustomRecord&lt;T&gt;) =&gt; string</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rowSelection</td>
<td>Row's selection config</td>
<td><a href="./src/types/table.ts.html#21">TableRowSelection</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>emptyPlaceholderClassName</td>
<td>Empty data class name</td>
<td>() =&gt; string</td>
<td>() =&gt; ''</td>
<td>3.39.0</td>
</tr>
<tr>
<td>expandIcon</td>
<td>Customize row expand Icon.</td>
<td>Function(props):VNode | v-slot:expandIcon=&quot;props&quot;</td>
<td>-</td>
<td>4.0</td>
</tr>
</tbody>
</table>
<blockquote>
<p>More <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">TableProProps</a></p>
</blockquote>
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
<td>register</td>
<td>UseTable register callback</td>
<td>Function(<a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29" target="_blank" rel="noopener noreferrer">formActionType</a>)</td>
</tr>
<tr>
<td>fetch-success</td>
<td>Api success callback</td>
<td>Function({ items: result Data, total: total, params: arguments })</td>
</tr>
<tr>
<td>fetch-error</td>
<td>Api error callback</td>
<td>Function(error: any)</td>
</tr>
<tr>
<td>fetch-finally</td>
<td>Api all callback</td>
<td>Function()</td>
</tr>
<tr>
<td>selection-change</td>
<td>RowSelection's change callback</td>
<td><code>Function(keys\uFF1A string[] | number[]\uFF0Crows: any[])</code></td>
</tr>
<tr>
<td>row-click</td>
<td>row-click callback</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-dbClick</td>
<td>row-dbClick callback</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>row-contextmenu callback</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-mouseenter</td>
<td>row-mouseenter callback</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
<tr>
<td>row-mouseleave</td>
<td>row-mouseleave callback</td>
<td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td>
</tr>
</tbody>
</table>
<h3 id="useTable-methods-TableActionType">useTable methods ( TableActionType ) <a class="header-anchor" href="#useTable-methods-TableActionType">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>More <a href="./src/types/table.ts.html#102">TableProProps</a></p>
</blockquote>
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
<td>reload</td>
<td>Reload table</td>
<td>Function(opt?: <a href="./src/types/table.ts.html#79">FetchParams</a>)</td>
</tr>
<tr>
<td>getSelectRows</td>
<td>Get select rows</td>
<td>-</td>
</tr>
<tr>
<td>clearSelectedRowKeys</td>
<td>Clear selected row</td>
<td>-</td>
</tr>
<tr>
<td>getSelectRowKeys</td>
<td>Get select row keys Key</td>
<td>-</td>
</tr>
<tr>
<td>deleteSelectRowByKey</td>
<td>Delete select row by key</td>
<td>Function(keys: string[])</td>
</tr>
<tr>
<td>setPagination</td>
<td>Set pagination</td>
<td>-</td>
</tr>
<tr>
<td>setTableData</td>
<td>Set data</td>
<td>-</td>
</tr>
<tr>
<td>getColumns</td>
<td>Get table columns</td>
<td>-</td>
</tr>
<tr>
<td>setColumns</td>
<td>Set table columns</td>
<td>-</td>
</tr>
<tr>
<td>getDataSource</td>
<td>Get data</td>
<td>-</td>
</tr>
<tr>
<td>setLoading</td>
<td>Set loading status</td>
<td>-</td>
</tr>
<tr>
<td>getLoading</td>
<td>Get loading status</td>
<td>-</td>
</tr>
<tr>
<td>setProps</td>
<td>Set table props</td>
<td>-</td>
</tr>
<tr>
<td>setSelectedRowKeys</td>
<td>Set seleected row keys</td>
<td>Function(keys: string[])</td>
</tr>
<tr>
<td>getPaginationRef</td>
<td>Get pagination</td>
<td>-</td>
</tr>
<tr>
<td>getSize</td>
<td>Get size</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="a-table-image-API">a-table-image API <a class="header-anchor" href="#a-table-image-API">
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
<td>imgList</td>
<td>Image data</td>
<td>string[]</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="a-table-card-API">a-table-card API <a class="header-anchor" href="#a-table-card-API">
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
<td>imgSize</td>
<td>Image size</td>
<td>number</td>
<td>80</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgUrl</td>
<td>Image url</td>
<td>string</td>
<td>''</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgBorderd</td>
<td>Image border</td>
<td>boolean</td>
<td>true</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgPreview</td>
<td>Image preview</td>
<td>boolean</td>
<td>false</td>
<td>3.33.0</td>
</tr>
<tr>
<td>imgErrorImage</td>
<td>Image error placeholder</td>
<td>string</td>
<td>-</td>
<td>3.33.0</td>
</tr>
<tr>
<td>title</td>
<td>Title</td>
<td>string</td>
<td>-</td>
<td>3.33.0</td>
</tr>
<tr>
<td>titleMaxLength</td>
<td>Title max length</td>
<td>number</td>
<td>14</td>
<td>3.33.0</td>
</tr>
<tr>
<td>desc</td>
<td>Description</td>
<td>string</td>
<td>-</td>
<td>3.33.0</td>
</tr>
<tr>
<td>descMaxLength</td>
<td>Description max length</td>
<td>number</td>
<td>14</td>
<td>3.34.0</td>
</tr>
<tr>
<td>cardable</td>
<td>Card mode</td>
<td>boolean</td>
<td>false</td>
<td>3.35.0</td>
</tr>
<tr>
<td>cardTitle</td>
<td>Card title</td>
<td>string | slot</td>
<td>-</td>
<td>3.35.0</td>
</tr>
</tbody>
</table>
<h3 id="a-table-card-slots">a-table-card slots <a class="header-anchor" href="#a-table-card-slots">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Arguments</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>titleSuffix</td>
<td>title suffix</td>
<td></td>
<td>-</td>
<td>3.33.0</td>
</tr>
</tbody>
</table>
`,lastUpdated:1710997117477}},Ms={class:"markdown"},Qs=L('<p>The ordinary form can only be written a little, and the enhanced form can be matched with it</p><h2 id="When-to-use">When to use <a class="header-anchor" href="#When-to-use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When you want to be lazy</li><li>When accelerating iterative projects</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>clickToRowSelect</td><td>Click selected</td><td>boolean</td><td>-</td><td></td></tr><tr><td>isTreeTable</td><td>Tree table</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showIndexColumn</td><td>Show index column</td><td>boolean</td><td>-</td><td></td></tr><tr><td>inset</td><td>Cancel <code>padding</code></td><td>boolean</td><td>-</td><td></td></tr><tr><td>autoCreateKey</td><td>Auto create row key</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showTableSetting</td><td>Show table setting</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showSummary</td><td>Show summary</td><td>boolean</td><td>-</td><td></td></tr><tr><td>immediate</td><td>Immediate</td><td>boolean</td><td>true</td><td></td></tr><tr><td>useSearchForm</td><td>Show search form</td><td>boolean</td><td>true</td><td></td></tr><tr><td>ellipsis</td><td>Ellipsis <code>...</code></td><td>boolean</td><td>-</td><td></td></tr><tr><td>draggable</td><td>Drag</td><td>boolean</td><td>-</td><td>3.17.0</td></tr><tr><td>canResize</td><td>Auto resize</td><td>boolean</td><td>-</td><td></td></tr><tr><td>bordered</td><td>Border</td><td>boolean</td><td>-</td><td></td></tr><tr><td>pagination</td><td>Pagination config</td><td><a href="./src/types/pagination.ts.html#15"><code>PaginationProps</code></a> | boolean</td><td>-</td><td></td></tr><tr><td>clearSelectOnPageChange</td><td>option in page empty</td><td>boolean</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u662F\u5426\u52A0\u8F7D</td><td>boolean</td><td>-</td><td></td></tr><tr><td>emptyDataIsShowTable</td><td>Empty data is show table</td><td>boolean</td><td>true</td><td></td></tr><tr><td>resizeHeightOffset</td><td>Resize height offset</td><td>number</td><td>-</td><td></td></tr><tr><td>maxHeight</td><td>Max height</td><td>number</td><td>-</td><td></td></tr><tr><td>rowKey</td><td>Table key</td><td><code>string</code></td><td><code>((record: Recordable) =&gt; string)</code></td><td>-</td></tr><tr><td>titleHelpMessage</td><td>Table title tooltip</td><td>string | <code>string[]</code></td><td>-</td><td></td></tr><tr><td>title</td><td>Table title</td><td>string</td><td>-</td><td></td></tr><tr><td>size</td><td>Table size</td><td><a href="./src/types/table.ts.html#L94">SizeType</a></td><td>default</td><td></td></tr><tr><td>tableSetting</td><td>Setting config</td><td><a href="./src/types/table.ts.html#L143">TableSetting</a></td><td>-</td><td>-</td></tr><tr><td>sortFn</td><td>Sort function</td><td>Function</td><td>-</td><td></td></tr><tr><td>filterFn</td><td>Filter function</td><td>Function</td><td>-</td><td></td></tr><tr><td>summaryFunc</td><td>Summary function</td><td>Function</td><td>-</td><td></td></tr><tr><td>beforeFetch</td><td>Before fetch</td><td>Function</td><td>-</td><td></td></tr><tr><td>afterFetch</td><td>After fetch</td><td>Function</td><td>-</td><td></td></tr><tr><td>handleSearchInfoFn</td><td>Before search</td><td>Function</td><td>-</td><td></td></tr><tr><td>totalRender</td><td>Total render</td><td><code>(total: number, range: [number, number]) =&gt; any</code></td><td>-</td><td></td></tr><tr><td>fetchSetting</td><td>Fetch config</td><td><a href="./src/types/table.ts.html#L132">FetchSetting</a></td><td>-</td><td></td></tr><tr><td>api</td><td>Ajax method</td><td><code>(...arg: any) =&gt; void</code></td><td>-</td><td></td></tr><tr><td>summaryData</td><td>Summary content</td><td>object[]</td><td>-</td><td></td></tr><tr><td>dataSource</td><td>Table data</td><td>object[]</td><td>-</td><td></td></tr><tr><td>searchInfo</td><td>Ajax options</td><td>object</td><td>-</td><td></td></tr><tr><td>scroll</td><td>Scroll config</td><td><code>{ x?: number | true; y?: number }</code></td><td>-</td><td></td></tr><tr><td>formConfig</td><td>Search form config</td><td><a href="./../form-pro/src/props.ts.html"><code>Partial&lt;FormProProps&gt;</code></a></td><td>-</td><td></td></tr><tr><td>columns</td><td>Columns config</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>indexColumnProps</td><td>Index config</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>actionColumn</td><td>Action config</td><td><a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">BasicColumn</a></td><td>-</td><td></td></tr><tr><td>rowClassName</td><td>Row&#39;s&#39; class name</td><td><code>(record: TableCustomRecord&lt;T&gt;) =&gt; string</code></td><td>-</td><td></td></tr><tr><td>rowSelection</td><td>Row&#39;s selection config</td><td><a href="./src/types/table.ts.html#21">TableRowSelection</a></td><td>-</td><td></td></tr><tr><td>emptyPlaceholderClassName</td><td>Empty data class name</td><td>() =&gt; string</td><td>() =&gt; &#39;&#39;</td><td>3.39.0</td></tr><tr><td>expandIcon</td><td>Customize row expand Icon.</td><td>Function(props):VNode | v-slot:expandIcon=&quot;props&quot;</td><td>-</td><td>4.0</td></tr></tbody></table><blockquote><p>More <a href="https://github.com/fe6/water-pro/blob/next/components/table-pro/src/types/column.ts#L33" target="_blank" rel="noopener noreferrer">TableProProps</a></p></blockquote><h3 id="Events">Events <a class="header-anchor" href="#Events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>register</td><td>UseTable register callback</td><td>Function(<a href="https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29" target="_blank" rel="noopener noreferrer">formActionType</a>)</td></tr><tr><td>fetch-success</td><td>Api success callback</td><td>Function({ items: result Data, total: total, params: arguments })</td></tr><tr><td>fetch-error</td><td>Api error callback</td><td>Function(error: any)</td></tr><tr><td>fetch-finally</td><td>Api all callback</td><td>Function()</td></tr><tr><td>selection-change</td><td>RowSelection&#39;s change callback</td><td><code>Function(keys\uFF1A string[] | number[]\uFF0Crows: any[])</code></td></tr><tr><td>row-click</td><td>row-click callback</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-dbClick</td><td>row-dbClick callback</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-contextmenu</td><td>row-contextmenu callback</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-mouseenter</td><td>row-mouseenter callback</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr><tr><td>row-mouseleave</td><td>row-mouseleave callback</td><td><code>Function(record: Recordable&lt;any&gt;, index: number, e: Event)</code></td></tr></tbody></table><h3 id="useTable-methods-TableActionType">useTable methods ( TableActionType ) <a class="header-anchor" href="#useTable-methods-TableActionType"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>More <a href="./src/types/table.ts.html#102">TableProProps</a></p></blockquote><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>reload</td><td>Reload table</td><td>Function(opt?: <a href="./src/types/table.ts.html#79">FetchParams</a>)</td></tr><tr><td>getSelectRows</td><td>Get select rows</td><td>-</td></tr><tr><td>clearSelectedRowKeys</td><td>Clear selected row</td><td>-</td></tr><tr><td>getSelectRowKeys</td><td>Get select row keys Key</td><td>-</td></tr><tr><td>deleteSelectRowByKey</td><td>Delete select row by key</td><td>Function(keys: string[])</td></tr><tr><td>setPagination</td><td>Set pagination</td><td>-</td></tr><tr><td>setTableData</td><td>Set data</td><td>-</td></tr><tr><td>getColumns</td><td>Get table columns</td><td>-</td></tr><tr><td>setColumns</td><td>Set table columns</td><td>-</td></tr><tr><td>getDataSource</td><td>Get data</td><td>-</td></tr><tr><td>setLoading</td><td>Set loading status</td><td>-</td></tr><tr><td>getLoading</td><td>Get loading status</td><td>-</td></tr><tr><td>setProps</td><td>Set table props</td><td>-</td></tr><tr><td>setSelectedRowKeys</td><td>Set seleected row keys</td><td>Function(keys: string[])</td></tr><tr><td>getPaginationRef</td><td>Get pagination</td><td>-</td></tr><tr><td>getSize</td><td>Get size</td><td>-</td></tr></tbody></table><h3 id="a-table-image-API">a-table-image API <a class="header-anchor" href="#a-table-image-API"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>imgList</td><td>Image data</td><td>string[]</td><td>-</td><td></td></tr></tbody></table><h3 id="a-table-card-API">a-table-card API <a class="header-anchor" href="#a-table-card-API"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>imgSize</td><td>Image size</td><td>number</td><td>80</td><td>3.33.0</td></tr><tr><td>imgUrl</td><td>Image url</td><td>string</td><td>&#39;&#39;</td><td>3.33.0</td></tr><tr><td>imgBorderd</td><td>Image border</td><td>boolean</td><td>true</td><td>3.33.0</td></tr><tr><td>imgPreview</td><td>Image preview</td><td>boolean</td><td>false</td><td>3.33.0</td></tr><tr><td>imgErrorImage</td><td>Image error placeholder</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>title</td><td>Title</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>titleMaxLength</td><td>Title max length</td><td>number</td><td>14</td><td>3.33.0</td></tr><tr><td>desc</td><td>Description</td><td>string</td><td>-</td><td>3.33.0</td></tr><tr><td>descMaxLength</td><td>Description max length</td><td>number</td><td>14</td><td>3.34.0</td></tr><tr><td>cardable</td><td>Card mode</td><td>boolean</td><td>false</td><td>3.35.0</td></tr><tr><td>cardTitle</td><td>Card title</td><td>string | slot</td><td>-</td><td>3.35.0</td></tr></tbody></table><h3 id="a-table-card-slots">a-table-card slots <a class="header-anchor" href="#a-table-card-slots"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>titleSuffix</td><td>title suffix</td><td></td><td>-</td><td>3.33.0</td></tr></tbody></table>',17),_s=[Qs];function $s(s,c,e,a,r,k){return d(),x("article",Ms,_s)}var qs=C(Os,[["render",$s]]);const na=m({CN:js,US:qs,components:{Basic:bn,Action:rn,Origin:Lt,Toolbar:Is,UseMethods:Ts,CustomerCell:_n,Search:_t,Search2:cs,Drag:ot,Empty:Zt,EmptyDiy:dt,WHeader:Xt,Card:Fn,Ellipsis:Sn,Num:Dn},setup(){return{}}});function ta(s,c,e,a,r,k){const u=l("Basic"),i=l("Action"),A=l("Origin"),w=l("Toolbar"),y=l("UseMethods"),g=l("CustomerCell"),f=l("Search"),W=l("Search2"),Z=l("Drag"),F=l("WHeader"),R=l("Empty"),Y=l("EmptyDiy"),X=l("Card"),V=l("Ellipsis"),K=l("Num"),v=l("demo-sort");return d(),I(v,{cols:1},{default:o(()=>[p(u),p(i),p(A),p(w),p(y),p(g),p(f),p(W),p(Z),p(F),p(R),p(Y),p(X),p(V),p(K)]),_:1})}var oa=C(na,[["render",ta]]);export{oa as default};

import{d as A,k,aq as c,J as m,bN as v,bO as e,e as o,G as n,H as t,o as H,at as x,w as N,bP as f,ca as y,E as W,cb as Z}from"./vendor.0f0e4632.js";import{_ as h}from"./index.f6b32fa6.js";const J=({params:a,success:s})=>{setTimeout(()=>{s([{label:`water-${a.id}`,disabled:!0,value:90},{label:`antd-${a.page}`,value:80}])},1e3)},K=A({setup(){const a=k("");return{getSelectForOptions:J,selectApiValue:a}}}),P=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":api-params"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      id: 1,
      page: 2,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectApiValue"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getSelectForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" params"),n("span",{class:"token punctuation"},","),t(" success "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" AjaxApi")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"water-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("params"),n("span",{class:"token punctuation"},"."),t("id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"antd-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("params"),n("span",{class:"token punctuation"},"."),t("page"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectApiValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),t(`
      selectApiValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),R=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":api-params"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      id: 1,
      page: 2,
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectApiValue"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getSelectForOptions"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
  params`),n("span",{class:"token punctuation"},","),t(`
  success`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"water-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("params"),n("span",{class:"token punctuation"},"."),t("id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"antd-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("params"),n("span",{class:"token punctuation"},"."),t("page"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectApiValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),t(`
      selectApiValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function X(a,s,l,r,I,b){const p=c("a-select-api"),i=c("demo-box");return m(),v(i,{jsfiddle:{us:"Basic Usage",cn:"\u57FA\u672C\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic Usage</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},relativePath:"components/select-api/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgOmFwaS1wYXJhbXM9InsKICAgICAgaWQ6IDEsCiAgICAgIHBhZ2U6IDIsCiAgICB9IgogICAgdi1tb2RlbDp2YWx1ZT0ic2VsZWN0QXBpVmFsdWUiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHBhcmFtcywgc3VjY2VzcyB9OiBBamF4QXBpKSA9PiB7CiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBzdWNjZXNzKFsKICAgICAgewogICAgICAgIGxhYmVsOiBgd2F0ZXItJHtwYXJhbXMuaWR9YCwKICAgICAgICBkaXNhYmxlZDogdHJ1ZSwKICAgICAgICB2YWx1ZTogOTAsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBsYWJlbDogYGFudGQtJHtwYXJhbXMucGFnZX1gLAogICAgICAgIHZhbHVlOiA4MCwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHNlbGVjdEFwaVZhbHVlID0gcmVmKCcnKTsKICAgIHJldHVybiB7CiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHNlbGVjdEFwaVZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgOmFwaS1wYXJhbXM9InsKICAgICAgaWQ6IDEsCiAgICAgIHBhZ2U6IDIsCiAgICB9IgogICAgdi1tb2RlbDp2YWx1ZT0ic2VsZWN0QXBpVmFsdWUiCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgcGFyYW1zLAogIHN1Y2Nlc3MsCn0pID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IHsKICAgIHN1Y2Nlc3MoW3sKICAgICAgbGFiZWw6IGB3YXRlci0ke3BhcmFtcy5pZH1gLAogICAgICBkaXNhYmxlZDogdHJ1ZSwKICAgICAgdmFsdWU6IDkwLAogICAgfSwgewogICAgICBsYWJlbDogYGFudGQtJHtwYXJhbXMucGFnZX1gLAogICAgICB2YWx1ZTogODAsCiAgICB9XSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc2VsZWN0QXBpVmFsdWUgPSByZWYoJycpOwogICAgcmV0dXJuIHsKICAgICAgZ2V0U2VsZWN0Rm9yT3B0aW9ucywKICAgICAgc2VsZWN0QXBpVmFsdWUsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[o(p,{style:{width:"200px"},api:a.getSelectForOptions,"api-params":{id:1,page:2},value:a.selectApiValue,"onUpdate:value":s[0]||(s[0]=u=>a.selectApiValue=u)},null,8,["api","value"])]),htmlCode:e(()=>[P]),jsVersionHtml:e(()=>[R]),_:1},8,["jsfiddle"])}var j=h(K,[["render",X]]);const L=[{label:"water",value:90,options:[{label:"select",disabled:!0,value:901},{label:"input",value:902}]},{label:"vant",value:80,options:[{label:"good",value:801},{label:"best",value:802}]},{label:"antd",disabled:!0,value:80}],D=A({setup(){const a=k(""),s=k([]);return H(()=>{s.value=L}),{group:s,selectApiValue:a}}}),z=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("group"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectApiValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" defGroup "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
    options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"901"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"902"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'vant'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'good'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"801"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'best'"),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"802"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
    disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectApiValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" group "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      group`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" defGroup"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      group`),n("span",{class:"token punctuation"},","),t(`
      selectApiValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),T=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("group"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectApiValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" defGroup "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
  options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
    disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"901"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"902"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'vant'"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
  options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'good'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"801"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'best'"),n("span",{class:"token punctuation"},","),t(`
    value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"802"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
  disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectApiValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" group "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      group`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" defGroup"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      group`),n("span",{class:"token punctuation"},","),t(`
      selectApiValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function U(a,s,l,r,I,b){const p=c("a-select-api"),i=c("demo-box");return m(),v(i,{jsfiddle:{us:"Group",cn:"\u5206\u7EC4\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5206\u7EC4\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Group</p>
`,order:0,title:{"zh-CN":"\u5206\u7EC4","en-US":"Group"},relativePath:"components/select-api/demo/group.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkgc3R5bGU9IndpZHRoOiAyMDBweCIgOm9wdGlvbnM9Imdyb3VwIiB2LW1vZGVsOnZhbHVlPSJzZWxlY3RBcGlWYWx1ZSIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZGVmR3JvdXAgPSBbCiAgewogICAgbGFiZWw6ICd3YXRlcicsCiAgICB2YWx1ZTogOTAsCiAgICBvcHRpb25zOiBbCiAgICAgIHsKICAgICAgICBsYWJlbDogJ3NlbGVjdCcsCiAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgICAgdmFsdWU6IDkwMSwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAnaW5wdXQnLAogICAgICAgIHZhbHVlOiA5MDIsCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgbGFiZWw6ICd2YW50JywKICAgIHZhbHVlOiA4MCwKICAgIG9wdGlvbnM6IFsKICAgICAgewogICAgICAgIGxhYmVsOiAnZ29vZCcsCiAgICAgICAgdmFsdWU6IDgwMSwKICAgICAgfSwKICAgICAgewogICAgICAgIGxhYmVsOiAnYmVzdCcsCiAgICAgICAgdmFsdWU6IDgwMiwKICAgICAgfSwKICAgIF0sCiAgfSwKICB7CiAgICBsYWJlbDogJ2FudGQnLAogICAgZGlzYWJsZWQ6IHRydWUsCiAgICB2YWx1ZTogODAsCiAgfSwKXTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzZWxlY3RBcGlWYWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBncm91cCA9IHJlZihbXSk7CgogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZ3JvdXAudmFsdWUgPSBkZWZHcm91cDsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgZ3JvdXAsCiAgICAgIHNlbGVjdEFwaVZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkgc3R5bGU9IndpZHRoOiAyMDBweCIgOm9wdGlvbnM9Imdyb3VwIiB2LW1vZGVsOnZhbHVlPSJzZWxlY3RBcGlWYWx1ZSIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IGRlZkdyb3VwID0gW3sKICBsYWJlbDogJ3dhdGVyJywKICB2YWx1ZTogOTAsCiAgb3B0aW9uczogW3sKICAgIGxhYmVsOiAnc2VsZWN0JywKICAgIGRpc2FibGVkOiB0cnVlLAogICAgdmFsdWU6IDkwMSwKICB9LCB7CiAgICBsYWJlbDogJ2lucHV0JywKICAgIHZhbHVlOiA5MDIsCiAgfV0sCn0sIHsKICBsYWJlbDogJ3ZhbnQnLAogIHZhbHVlOiA4MCwKICBvcHRpb25zOiBbewogICAgbGFiZWw6ICdnb29kJywKICAgIHZhbHVlOiA4MDEsCiAgfSwgewogICAgbGFiZWw6ICdiZXN0JywKICAgIHZhbHVlOiA4MDIsCiAgfV0sCn0sIHsKICBsYWJlbDogJ2FudGQnLAogIGRpc2FibGVkOiB0cnVlLAogIHZhbHVlOiA4MCwKfV07CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzZWxlY3RBcGlWYWx1ZSA9IHJlZignJyk7CiAgICBjb25zdCBncm91cCA9IHJlZihbXSk7CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBncm91cC52YWx1ZSA9IGRlZkdyb3VwOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBncm91cCwKICAgICAgc2VsZWN0QXBpVmFsdWUsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[o(p,{style:{width:"200px"},options:a.group,value:a.selectApiValue,"onUpdate:value":s[0]||(s[0]=u=>a.selectApiValue=u)},null,8,["options","value"])]),htmlCode:e(()=>[z]),jsVersionHtml:e(()=>[T]),_:1},8,["jsfiddle"])}var O=h(D,[["render",U]]);const q=({success:a})=>{setTimeout(()=>{a([{label:"water",value:90},{label:"antd",value:80}])},1e3)},E=A({setup(){const a=k(80);return{filterOption:(s,{label:l})=>l.indexOf(s)>-1,getSelectForOptions:q,selectApiValue:a}}}),Q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectApiValue"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token attr-name"},"optionFilterProp"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filterOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" AjaxApi "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

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

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectApiValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function-variable function"},"filterOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("inpValue"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" label "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("inpValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),t(`
      selectApiValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":api"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getSelectForOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectApiValue"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token attr-name"},"optionFilterProp"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filterOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

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

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectApiValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function-variable function"},"filterOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("inpValue"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("inpValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      getSelectForOptions`),n("span",{class:"token punctuation"},","),t(`
      selectApiValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function _(a,s,l,r,I,b){const p=c("a-select-api"),i=c("demo-box");return m(),v(i,{jsfiddle:{us:"Search",cn:"\u641C\u7D22\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u641C\u7D22\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Search</p>
`,order:0,title:{"zh-CN":"\u641C\u7D22","en-US":"Search"},relativePath:"components/select-api/demo/search.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgdi1tb2RlbDp2YWx1ZT0ic2VsZWN0QXBpVmFsdWUiCiAgICBzaG93LXNlYXJjaAogICAgb3B0aW9uRmlsdGVyUHJvcD0idmFsdWUiCiAgICA6ZmlsdGVyT3B0aW9uPSJmaWx0ZXJPcHRpb24iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgQWpheEFwaSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7IHN1Y2Nlc3MgfTogQWpheEFwaSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbCiAgICAgIHsKICAgICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgICB2YWx1ZTogOTAsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBsYWJlbDogJ2FudGQnLAogICAgICAgIHZhbHVlOiA4MCwKICAgICAgfSwKICAgIF0pOwogIH0sIDEwMDApOwp9OwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHNlbGVjdEFwaVZhbHVlID0gcmVmKDgwKTsKICAgIHJldHVybiB7CiAgICAgIGZpbHRlck9wdGlvbjogKGlucFZhbHVlOiBzdHJpbmcsIHsgbGFiZWwgfTogYW55KSA9PiB7CiAgICAgICAgcmV0dXJuIGxhYmVsLmluZGV4T2YoaW5wVmFsdWUpID4gLTE7CiAgICAgIH0sCiAgICAgIGdldFNlbGVjdEZvck9wdGlvbnMsCiAgICAgIHNlbGVjdEFwaVZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA6YXBpPSJnZXRTZWxlY3RGb3JPcHRpb25zIgogICAgdi1tb2RlbDp2YWx1ZT0ic2VsZWN0QXBpVmFsdWUiCiAgICBzaG93LXNlYXJjaAogICAgb3B0aW9uRmlsdGVyUHJvcD0idmFsdWUiCiAgICA6ZmlsdGVyT3B0aW9uPSJmaWx0ZXJPcHRpb24iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKY29uc3QgZ2V0U2VsZWN0Rm9yT3B0aW9ucyA9ICh7CiAgc3VjY2VzcywKfSkgPT4gewogIHNldFRpbWVvdXQoKCkgPT4gewogICAgc3VjY2VzcyhbewogICAgICBsYWJlbDogJ3dhdGVyJywKICAgICAgdmFsdWU6IDkwLAogICAgfSwgewogICAgICBsYWJlbDogJ2FudGQnLAogICAgICB2YWx1ZTogODAsCiAgICB9XSk7CiAgfSwgMTAwMCk7Cn07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc2VsZWN0QXBpVmFsdWUgPSByZWYoODApOwogICAgcmV0dXJuIHsKICAgICAgZmlsdGVyT3B0aW9uOiAoaW5wVmFsdWUsIHsKICAgICAgICBsYWJlbCwKICAgICAgfSkgPT4gewogICAgICAgIHJldHVybiBsYWJlbC5pbmRleE9mKGlucFZhbHVlKSA+IC0xOwogICAgICB9LAogICAgICBnZXRTZWxlY3RGb3JPcHRpb25zLAogICAgICBzZWxlY3RBcGlWYWx1ZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[o(p,{style:{width:"200px"},api:a.getSelectForOptions,value:a.selectApiValue,"onUpdate:value":s[0]||(s[0]=u=>a.selectApiValue=u),"show-search":"",optionFilterProp:"value",filterOption:a.filterOption},null,8,["api","value","filterOption"])]),htmlCode:e(()=>[Q]),jsVersionHtml:e(()=>[M]),_:1},8,["jsfiddle"])}var $=h(E,[["render",_]]);let nn=0;const tn=A({components:{IconBytedPlus:x,VNodes:(a,{attrs:s})=>s.vnodes},setup(){const a=k(["jack","lucy"]),s=k("lucy");return{items:a,value:s,addItem:()=>{console.log("addItem"),a.value.push(`New item ${nn++}`)}}}}),an=t(" Add item "),sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("items.map((item) => ({ value: item }))"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#dropdownRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ menuNode: menu }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("v-nodes")]),t(),n("span",{class:"token attr-name"},":vnodes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-divider")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 4px 0")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 4px 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer")]),n("span",{class:"token punctuation"},'"')])]),t(`
        `),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(e) => e.preventDefault()"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addItem"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedPlus")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Add item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function-variable function"},"VNodes"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" attrs "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" attrs"),n("span",{class:"token punctuation"},"."),t("vnodes"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"addItem"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'addItem'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      items`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"New item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      items`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      addItem`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("items.map((item) => ({ value: item }))"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#dropdownRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ menuNode: menu }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("v-nodes")]),t(),n("span",{class:"token attr-name"},":vnodes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-divider")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 4px 0")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 4px 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer")]),n("span",{class:"token punctuation"},'"')])]),t(`
        `),n("span",{class:"token attr-name"},"@mousedown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(e) => e.preventDefault()"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("addItem"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedPlus")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Add item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function-variable function"},"VNodes"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      attrs`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" attrs"),n("span",{class:"token punctuation"},"."),t("vnodes"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"addItem"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'addItem'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      items`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"New item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      items`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      addItem`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function en(a,s,l,r,I,b){const p=c("v-nodes"),i=c("a-divider"),u=c("IconBytedPlus"),C=c("a-select-api"),d=c("demo-box");return m(),v(d,{jsfiddle:{us:"Customize the dropdown menu via `dropdownRender`.",cn:"\u4F7F\u7528 `dropdownRender` \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize the dropdown menu via <code>dropdownRender</code>.</p>
`,order:13,title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"},relativePath:"components/select-api/demo/custom-dropdown-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgIDpvcHRpb25zPSJpdGVtcy5tYXAoKGl0ZW0pID0+ICh7IHZhbHVlOiBpdGVtIH0pKSIKICA+CiAgICA8dGVtcGxhdGUgI2Ryb3Bkb3duUmVuZGVyPSJ7IG1lbnVOb2RlOiBtZW51IH0iPgogICAgICA8di1ub2RlcyA6dm5vZGVzPSJtZW51IiAvPgogICAgICA8YS1kaXZpZGVyIHN0eWxlPSJtYXJnaW46IDRweCAwIiAvPgogICAgICA8ZGl2CiAgICAgICAgc3R5bGU9InBhZGRpbmc6IDRweCA4cHg7IGN1cnNvcjogcG9pbnRlciIKICAgICAgICBAbW91c2Vkb3duPSIoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpIgogICAgICAgIEBjbGljaz0iYWRkSXRlbSIKICAgICAgPgogICAgICAgIDxJY29uQnl0ZWRQbHVzIDpjb2xvcnM9IlsnY3VycmVudENvbG9yJ10iIC8+CiAgICAgICAgQWRkIGl0ZW0KICAgICAgPC9kaXY+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1zZWxlY3QtYXBpPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IEljb25CeXRlZFBsdXMgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtcGx1cyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmxldCBpbmRleCA9IDA7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkUGx1cywKICAgIFZOb2RlczogKF8sIHsgYXR0cnMgfSkgPT4gewogICAgICByZXR1cm4gYXR0cnMudm5vZGVzOwogICAgfSwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgaXRlbXMgPSByZWYoWydqYWNrJywgJ2x1Y3knXSk7CiAgICBjb25zdCB2YWx1ZSA9IHJlZignbHVjeScpOwoKICAgIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdhZGRJdGVtJyk7CiAgICAgIGl0ZW1zLnZhbHVlLnB1c2goYE5ldyBpdGVtICR7aW5kZXgrK31gKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBpdGVtcywKICAgICAgdmFsdWUsCiAgICAgIGFkZEl0ZW0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgIDpvcHRpb25zPSJpdGVtcy5tYXAoKGl0ZW0pID0+ICh7IHZhbHVlOiBpdGVtIH0pKSIKICA+CiAgICA8dGVtcGxhdGUgI2Ryb3Bkb3duUmVuZGVyPSJ7IG1lbnVOb2RlOiBtZW51IH0iPgogICAgICA8di1ub2RlcyA6dm5vZGVzPSJtZW51IiAvPgogICAgICA8YS1kaXZpZGVyIHN0eWxlPSJtYXJnaW46IDRweCAwIiAvPgogICAgICA8ZGl2CiAgICAgICAgc3R5bGU9InBhZGRpbmc6IDRweCA4cHg7IGN1cnNvcjogcG9pbnRlciIKICAgICAgICBAbW91c2Vkb3duPSIoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpIgogICAgICAgIEBjbGljaz0iYWRkSXRlbSIKICAgICAgPgogICAgICAgIDxJY29uQnl0ZWRQbHVzIDpjb2xvcnM9IlsnY3VycmVudENvbG9yJ10iIC8+CiAgICAgICAgQWRkIGl0ZW0KICAgICAgPC9kaXY+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1zZWxlY3QtYXBpPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgSWNvbkJ5dGVkUGx1cyBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1wbHVzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpsZXQgaW5kZXggPSAwOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFBsdXMsCiAgICBWTm9kZXM6IChfLCB7CiAgICAgIGF0dHJzLAogICAgfSkgPT4gewogICAgICByZXR1cm4gYXR0cnMudm5vZGVzOwogICAgfSwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGl0ZW1zID0gcmVmKFsnamFjaycsICdsdWN5J10pOwogICAgY29uc3QgdmFsdWUgPSByZWYoJ2x1Y3knKTsKCiAgICBjb25zdCBhZGRJdGVtID0gKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnYWRkSXRlbScpOwogICAgICBpdGVtcy52YWx1ZS5wdXNoKGBOZXcgaXRlbSAke2luZGV4Kyt9YCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGl0ZW1zLAogICAgICB2YWx1ZSwKICAgICAgYWRkSXRlbSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[o(C,{value:a.value,"onUpdate:value":s[2]||(s[2]=g=>a.value=g),style:{width:"120px"},options:a.items.map(g=>({value:g}))},{dropdownRender:e(({menuNode:g})=>[o(p,{vnodes:g},null,8,["vnodes"]),o(i,{style:{margin:"4px 0"}}),n("div",{style:{padding:"4px 8px",cursor:"pointer"},onMousedown:s[0]||(s[0]=w=>w.preventDefault()),onClick:s[1]||(s[1]=(...w)=>a.addItem&&a.addItem(...w))},[o(u,{colors:["currentColor"]}),an],32)]),_:1},8,["value","options"])]),htmlCode:e(()=>[sn]),jsVersionHtml:e(()=>[on]),_:1},8,["jsfiddle"])}var cn=h(tn,[["render",en]]);const pn=A({setup(){const a=k([{value:"jack",label:"Jack (100)"},{value:"lucy",label:"Lucy (101)"}]),s=l=>{console.log(l)};return{value:k({value:"lucy"}),options:a,handleChange:s}}}),ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-in-value"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" SelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"Value"),t(),n("span",{class:"token punctuation"},"{"),t(`
  value`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  label`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Jack (100)'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy (101)'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" Value")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},'// { key: "lucy", label: "Lucy (101)" }'),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(" ref"),n("span",{class:"token operator"},"<"),t("Value"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),un=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label-in-value"),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Jack (100)'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy (101)'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},'// { key: "lucy", label: "Lucy (101)" }'),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function kn(a,s,l,r,I,b){const p=c("a-select-api"),i=c("demo-box");return m(),v(i,{jsfiddle:{us:`As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.
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
`,order:4,title:{"zh-CN":"\u83B7\u5F97\u9009\u9879\u7684\u6587\u672C","en-US":"Get value of selected item"},relativePath:"components/select-api/demo/label-in-value.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgbGFiZWwtaW4tdmFsdWUKICAgIHN0eWxlPSJ3aWR0aDogMTIwcHgiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdC1hcGk+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgppbnRlcmZhY2UgVmFsdWUgewogIHZhbHVlPzogc3RyaW5nOwogIGxhYmVsPzogc3RyaW5nOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgb3B0aW9ucyA9IHJlZjxTZWxlY3RQcm9wc1snb3B0aW9ucyddPihbCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2phY2snLAogICAgICAgIGxhYmVsOiAnSmFjayAoMTAwKScsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICAgIGxhYmVsOiAnTHVjeSAoMTAxKScsCiAgICAgIH0sCiAgICBdKTsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogVmFsdWUpID0+IHsKICAgICAgY29uc29sZS5sb2codmFsdWUpOyAvLyB7IGtleTogImx1Y3kiLCBsYWJlbDogIkx1Y3kgKDEwMSkiIH0KICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmPFZhbHVlPih7IHZhbHVlOiAnbHVjeScgfSksCiAgICAgIG9wdGlvbnMsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgbGFiZWwtaW4tdmFsdWUKICAgIHN0eWxlPSJ3aWR0aDogMTIwcHgiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdC1hcGk+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoW3sKICAgICAgdmFsdWU6ICdqYWNrJywKICAgICAgbGFiZWw6ICdKYWNrICgxMDApJywKICAgIH0sIHsKICAgICAgdmFsdWU6ICdsdWN5JywKICAgICAgbGFiZWw6ICdMdWN5ICgxMDEpJywKICAgIH1dKTsKCiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTsgLy8geyBrZXk6ICJsdWN5IiwgbGFiZWw6ICJMdWN5ICgxMDEpIiB9CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoewogICAgICAgIHZhbHVlOiAnbHVjeScsCiAgICAgIH0pLAogICAgICBvcHRpb25zLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[o(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),"label-in-value":"",style:{width:"120px"},options:a.options,onChange:a.handleChange},null,8,["value","options","onChange"])]),htmlCode:e(()=>[ln]),jsVersionHtml:e(()=>[un]),_:1},8,["jsfiddle"])}var rn=h(pn,[["render",kn]]);const dn=A({setup(){return{handleChange:s=>{console.log(`selected ${s}`)},value:k(["a1","b2"])}}}),gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function In(a,s,l,r,I,b){const p=c("a-select-api"),i=c("demo-box");return m(),v(i,{jsfiddle:{us:"Multiple selection, selecting from existing items (scroll the menu).",cn:"\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF08scroll the menu\uFF09",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF08scroll the menu\uFF09</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Multiple selection, selecting from existing items (scroll the menu).</p>
`,order:5,title:{"zh-CN":"\u591A\u9009","en-US":"Multiple selection"},relativePath:"components/select-api/demo/multiple.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgbW9kZT0ibXVsdGlwbGUiCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIDpvcHRpb25zPSJbLi4uQXJyYXkoMjUpXS5tYXAoKF8sIGkpID0+ICh7IHZhbHVlOiAoaSArIDEwKS50b1N0cmluZygzNikgKyAoaSArIDEpIH0pKSIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdC1hcGk+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgdmFsdWU6IHJlZihbJ2ExJywgJ2IyJ10pLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgbW9kZT0ibXVsdGlwbGUiCiAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICBwbGFjZWhvbGRlcj0iUGxlYXNlIHNlbGVjdCIKICAgIDpvcHRpb25zPSJbLi4uQXJyYXkoMjUpXS5tYXAoKF8sIGkpID0+ICh7IHZhbHVlOiAoaSArIDEwKS50b1N0cmluZygzNikgKyAoaSArIDEpIH0pKSIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdC1hcGk+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgdmFsdWU6IHJlZihbJ2ExJywgJ2IyJ10pLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[o(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),mode:"multiple",style:{width:"100%"},placeholder:"Please select",options:[...Array(25)].map((u,C)=>({value:(C+10).toString(36)+(C+1)})),onChange:a.handleChange},null,8,["value","options","onChange"])]),htmlCode:e(()=>[gn]),jsVersionHtml:e(()=>[Cn]),_:1},8,["jsfiddle"])}var mn=h(dn,[["render",In]]);const hn=A({setup(){const a=k(["china"]),s=k([{value:"china",label:"China (\u4E2D\u56FD)",icon:"\u{1F1E8}\u{1F1F3}"},{value:"usa",label:"USA (\u7F8E\u56FD)",icon:"\u{1F1FA}\u{1F1F8}"},{value:"japan",label:"Japan (\u65E5\u672C)",icon:"\u{1F1EF}\u{1F1F5}"},{value:"korea",label:"Korea (\u97E9\u56FD)",icon:"\u{1F1E8}\u{1F1F0}"}]);return N(a,l=>{console.log("selected:",l)}),{options:s,value:a}}}),bn=n("span",{role:"img","aria-label":"China"},"\u{1F1E8}\u{1F1F3}",-1),An=t(" \xA0\xA0China (\u4E2D\u56FD) "),vn=n("span",{role:"img","aria-label":"USA"},"\u{1F1FA}\u{1F1F8}",-1),wn=t(" \xA0\xA0USA (\u7F8E\u56FD) "),fn=n("span",{role:"img","aria-label":"Japan"},"\u{1F1EF}\u{1F1F5}",-1),yn=t(" \xA0\xA0Japan (\u65E5\u672C) "),Wn=n("span",{role:"img","aria-label":"Korea"},"\u{1F1F0}\u{1F1F7}",-1),Zn=t(" \xA0\xA0Korea (\u97E9\u56FD) "),Gn=["aria-label"],Bn=n("span",null,"Note: v-slot:option support from v2.2.5",-1),Sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select one country"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("label"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("china"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1E8}\u{1F1F3}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`China (\u4E2D\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("usa"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1FA}\u{1F1F8}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`USA (\u7F8E\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("japan"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1EF}\u{1F1F5}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`Japan (\u65E5\u672C)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("korea"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1F0}\u{1F1F7}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`Korea (\u97E9\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select one country"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("label"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, label, icon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`{{ label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("Note: v-slot:option support from v2.2.5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'China (\u4E2D\u56FD)'"),n("span",{class:"token punctuation"},","),t(`
        icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F3}'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'usa'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'USA (\u7F8E\u56FD)'"),n("span",{class:"token punctuation"},","),t(`
        icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1FA}\u{1F1F8}'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'japan'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Japan (\u65E5\u672C)'"),n("span",{class:"token punctuation"},","),t(`
        icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1EF}\u{1F1F5}'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'korea'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Korea (\u97E9\u56FD)'"),n("span",{class:"token punctuation"},","),t(`
        icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F0}'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected:"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select one country"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("label"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("china"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("China"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1E8}\u{1F1F3}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`China (\u4E2D\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("usa"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("USA"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1FA}\u{1F1F8}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`USA (\u7F8E\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("japan"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Japan"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1EF}\u{1F1F5}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`Japan (\u65E5\u672C)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-option")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("korea"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Korea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F1F0}\u{1F1F7}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`Korea (\u97E9\u56FD)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-option")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("select one country"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"option-label-prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("label"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ value: val, label, icon }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("img"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":aria-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("val"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ icon }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`{{ label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("Note: v-slot:option support from v2.2.5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'china'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'China (\u4E2D\u56FD)'"),n("span",{class:"token punctuation"},","),t(`
      icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F3}'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'usa'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'USA (\u7F8E\u56FD)'"),n("span",{class:"token punctuation"},","),t(`
      icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1FA}\u{1F1F8}'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'japan'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Japan (\u65E5\u672C)'"),n("span",{class:"token punctuation"},","),t(`
      icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1EF}\u{1F1F5}'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'korea'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Korea (\u97E9\u56FD)'"),n("span",{class:"token punctuation"},","),t(`
      icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u{1F1E8}\u{1F1F0}'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token parameter"},"val"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected:"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Yn(a,s,l,r,I,b){const p=c("a-select-option"),i=c("a-select-api"),u=c("a-space"),C=c("demo-box");return m(),v(C,{jsfiddle:{us:"Spacified the prop name of Option which will be rendered in select box.",cn:"\u4F7F\u7528 `optionLabelProp` \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 `Option` \u5C5E\u6027\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>optionLabelProp</code> \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 <code>Option</code> \u5C5E\u6027\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Spacified the prop name of Option which will be rendered in select box.</p>
`,order:14,title:{"zh-CN":"\u5B9A\u5236\u56DE\u586B\u5185\u5BB9","en-US":"Custom selection render"},relativePath:"components/select-api/demo/option-label-prop.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0ic2VsZWN0IG9uZSBjb3VudHJ5IgogICAgICBvcHRpb24tbGFiZWwtcHJvcD0ibGFiZWwiCiAgICA+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImNoaW5hIiBsYWJlbD0iQ2hpbmEiPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iQ2hpbmEiPvCfh6jwn4ezPC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO0NoaW5hICjkuK3lm70pCiAgICAgIDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJ1c2EiIGxhYmVsPSJVU0EiPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iVVNBIj7wn4e68J+HuDwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDtVU0EgKOe+juWbvSkKICAgICAgPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImphcGFuIiBsYWJlbD0iSmFwYW4iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iSmFwYW4iPvCfh6/wn4e1PC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO0phcGFuICjml6XmnKwpCiAgICAgIDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJrb3JlYSIgbGFiZWw9IktvcmVhIj4KICAgICAgICA8c3BhbiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IktvcmVhIj7wn4ew8J+Htzwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDtLb3JlYSAo6Z+p5Zu9KQogICAgICA8L2Etc2VsZWN0LW9wdGlvbj4KICAgIDwvYS1zZWxlY3QtYXBpPgoKICAgIDxhLXNlbGVjdC1hcGkKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJzZWxlY3Qgb25lIGNvdW50cnkiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJsYWJlbCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJ7IHZhbHVlOiB2YWwsIGxhYmVsLCBpY29uIH0iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgaWNvbiB9fTwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDt7eyBsYWJlbCB9fQogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdC1hcGk+CiAgICA8c3Bhbj5Ob3RlOiB2LXNsb3Q6b3B0aW9uIHN1cHBvcnQgZnJvbSB2Mi4yLjU8L3NwYW4+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZihbJ2NoaW5hJ10pOwoKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoWwogICAgICB7CiAgICAgICAgdmFsdWU6ICdjaGluYScsCiAgICAgICAgbGFiZWw6ICdDaGluYSAo5Lit5Zu9KScsCiAgICAgICAgaWNvbjogJ/Cfh6jwn4ezJywKICAgICAgfSwKICAgICAgewogICAgICAgIHZhbHVlOiAndXNhJywKICAgICAgICBsYWJlbDogJ1VTQSAo576O5Zu9KScsCiAgICAgICAgaWNvbjogJ/Cfh7rwn4e4JywKICAgICAgfSwKICAgICAgewogICAgICAgIHZhbHVlOiAnamFwYW4nLAogICAgICAgIGxhYmVsOiAnSmFwYW4gKOaXpeacrCknLAogICAgICAgIGljb246ICfwn4ev8J+HtScsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB2YWx1ZTogJ2tvcmVhJywKICAgICAgICBsYWJlbDogJ0tvcmVhICjpn6nlm70pJywKICAgICAgICBpY29uOiAn8J+HqPCfh7AnLAogICAgICB9LAogICAgXSk7CiAgICB3YXRjaCh2YWx1ZSwgKHZhbCkgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQ6YCwgdmFsKTsKICAgIH0pOwoKICAgIHJldHVybiB7CiAgICAgIG9wdGlvbnMsCiAgICAgIHZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0ic2VsZWN0IG9uZSBjb3VudHJ5IgogICAgICBvcHRpb24tbGFiZWwtcHJvcD0ibGFiZWwiCiAgICA+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImNoaW5hIiBsYWJlbD0iQ2hpbmEiPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iQ2hpbmEiPvCfh6jwn4ezPC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO0NoaW5hICjkuK3lm70pCiAgICAgIDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJ1c2EiIGxhYmVsPSJVU0EiPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iVVNBIj7wn4e68J+HuDwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDtVU0EgKOe+juWbvSkKICAgICAgPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9ImphcGFuIiBsYWJlbD0iSmFwYW4iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iSmFwYW4iPvCfh6/wn4e1PC9zcGFuPgogICAgICAgICZuYnNwOyZuYnNwO0phcGFuICjml6XmnKwpCiAgICAgIDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJrb3JlYSIgbGFiZWw9IktvcmVhIj4KICAgICAgICA8c3BhbiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IktvcmVhIj7wn4ew8J+Htzwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDtLb3JlYSAo6Z+p5Zu9KQogICAgICA8L2Etc2VsZWN0LW9wdGlvbj4KICAgIDwvYS1zZWxlY3QtYXBpPgoKICAgIDxhLXNlbGVjdC1hcGkKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJzZWxlY3Qgb25lIGNvdW50cnkiCiAgICAgIG9wdGlvbi1sYWJlbC1wcm9wPSJsYWJlbCIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+CiAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPSJ7IHZhbHVlOiB2YWwsIGxhYmVsLCBpY29uIH0iPgogICAgICAgIDxzcGFuIHJvbGU9ImltZyIgOmFyaWEtbGFiZWw9InZhbCI+e3sgaWNvbiB9fTwvc3Bhbj4KICAgICAgICAmbmJzcDsmbmJzcDt7eyBsYWJlbCB9fQogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdC1hcGk+CiAgICA8c3Bhbj5Ob3RlOiB2LXNsb3Q6b3B0aW9uIHN1cHBvcnQgZnJvbSB2Mi4yLjU8L3NwYW4+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoWydjaGluYSddKTsKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoW3sKICAgICAgdmFsdWU6ICdjaGluYScsCiAgICAgIGxhYmVsOiAnQ2hpbmEgKOS4reWbvSknLAogICAgICBpY29uOiAn8J+HqPCfh7MnLAogICAgfSwgewogICAgICB2YWx1ZTogJ3VzYScsCiAgICAgIGxhYmVsOiAnVVNBICjnvo7lm70pJywKICAgICAgaWNvbjogJ/Cfh7rwn4e4JywKICAgIH0sIHsKICAgICAgdmFsdWU6ICdqYXBhbicsCiAgICAgIGxhYmVsOiAnSmFwYW4gKOaXpeacrCknLAogICAgICBpY29uOiAn8J+Hr/Cfh7UnLAogICAgfSwgewogICAgICB2YWx1ZTogJ2tvcmVhJywKICAgICAgbGFiZWw6ICdLb3JlYSAo6Z+p5Zu9KScsCiAgICAgIGljb246ICfwn4eo8J+HsCcsCiAgICB9XSk7CiAgICB3YXRjaCh2YWx1ZSwgdmFsID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkOmAsIHZhbCk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIG9wdGlvbnMsCiAgICAgIHZhbHVlLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[o(u,{direction:"vertical",style:{width:"100%"}},{default:e(()=>[o(i,{value:a.value,"onUpdate:value":s[0]||(s[0]=d=>a.value=d),mode:"multiple",style:{width:"100%"},placeholder:"select one country","option-label-prop":"label"},{default:e(()=>[o(p,{value:"china",label:"China"},{default:e(()=>[bn,An]),_:1}),o(p,{value:"usa",label:"USA"},{default:e(()=>[vn,wn]),_:1}),o(p,{value:"japan",label:"Japan"},{default:e(()=>[fn,yn]),_:1}),o(p,{value:"korea",label:"Korea"},{default:e(()=>[Wn,Zn]),_:1})]),_:1},8,["value"]),o(i,{value:a.value,"onUpdate:value":s[1]||(s[1]=d=>a.value=d),mode:"multiple",style:{width:"100%"},placeholder:"select one country","option-label-prop":"label",options:a.options},{option:e(({value:d,label:g,icon:w})=>[n("span",{role:"img","aria-label":d},f(w),9,Gn),t(" \xA0\xA0"+f(g),1)]),_:1},8,["value","options"]),Bn]),_:1})]),htmlCode:e(()=>[Sn]),jsVersionHtml:e(()=>[Vn]),_:1},8,["jsfiddle"])}var Fn=h(hn,[["render",Yn]]);const Hn=A({setup(){const a=k([]);for(let r=10;r<36;r++){const I=r.toString(36)+r;a.value.push({label:`Long Label: ${I}`,value:I})}const s=k(2),l=k(10);return{value:k(["a10","c12","h17","j19","k20"]),options:a,maxTagCount:s,maxTagTextLength:l}}}),xn=t("maxTagCount++"),Nn=t("maxTagCount--"),Jn=n("h2",null,"maxTagCount: responsive",-1),Kn=t("maxTagTextLength++"),Pn=t("maxTagTextLength--"),Rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagCount++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagCount++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagCount--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagCount--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("maxTagCount: {{ maxTagCount }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Select Item..."),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagCount"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("maxTagCount: responsive"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Select Item..."),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("responsive"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagTextLength++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagTextLength++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagTextLength--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagTextLength--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("maxTagTextLength: {{ maxTagTextLength }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Select Item..."),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-tag-text-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagTextLength"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" SelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},";"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Long Label: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" maxTagCount "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" maxTagTextLength "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a10'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'c12'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'h17'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'j19'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'k20'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      maxTagCount`),n("span",{class:"token punctuation"},","),t(`
      maxTagTextLength`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagCount++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagCount++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagCount--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagCount--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("maxTagCount: {{ maxTagCount }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Select Item..."),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagCount"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("maxTagCount: responsive"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Select Item..."),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("responsive"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagTextLength++"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagTextLength++"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagTextLength--"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("maxTagTextLength--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("maxTagTextLength: {{ maxTagTextLength }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Select Item..."),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-tag-text-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("maxTagTextLength"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},";"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Long Label: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        value`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" maxTagCount "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" maxTagTextLength "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a10'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'c12'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'h17'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'j19'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'k20'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      maxTagCount`),n("span",{class:"token punctuation"},","),t(`
      maxTagTextLength`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function jn(a,s,l,r,I,b){const p=c("a-button"),i=c("a-space"),u=c("a-select-api"),C=c("demo-box");return m(),v(C,{jsfiddle:{us:"Set a number and automatically fold after exceeding.",cn:"\u8BBE\u7F6E\u4E00\u4E2A\u6570\u5B57\uFF0C\u8D85\u8FC7\u540E\u81EA\u52A8\u6298\u53E0\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E\u4E00\u4E2A\u6570\u5B57\uFF0C\u8D85\u8FC7\u540E\u81EA\u52A8\u6298\u53E0\u3002</p>
<p>maxTagCount \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u6210\u54CD\u5E94\u5F0F\uFF0C\u4F46\u54CD\u5E94\u5F0F\u5BF9\u6027\u80FD\u6709\u6240\u6D88\u8017\uFF0C\u4E0D\u63A8\u8350\u5728\u5927\u8868\u5355\u573A\u666F\u4E0B\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Set a number and automatically fold after exceeding.</p>
<p><code>maxTagCount</code> can also be set to responsive, but responsive consumes performance and is not recommended for use in large-form scenarios.</p>
`,order:24,title:{"zh-CN":"\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A\u9009\u9879\u53CA\u9009\u9879\u6700\u5927\u957F\u5EA6","en-US":"set maxTagCount or maxTagTextLength"},relativePath:"components/select-api/demo/responsive.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnQ291bnQrKyI+bWF4VGFnQ291bnQrKzwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im1heFRhZ0NvdW50LS0iPm1heFRhZ0NvdW50LS08L2EtYnV0dG9uPgogICAgPC9hLXNwYWNlPgoKICAgIDxoMj5tYXhUYWdDb3VudDoge3sgbWF4VGFnQ291bnQgfX08L2gyPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgbW9kZT0ibXVsdGlwbGUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgcGxhY2Vob2xkZXI9IlNlbGVjdCBJdGVtLi4uIgogICAgICA6bWF4LXRhZy1jb3VudD0ibWF4VGFnQ291bnQiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3QtYXBpPgogICAgPGgyPm1heFRhZ0NvdW50OiByZXNwb25zaXZlPC9oMj4KICAgIDxhLXNlbGVjdC1hcGkKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJTZWxlY3QgSXRlbS4uLiIKICAgICAgbWF4LXRhZy1jb3VudD0icmVzcG9uc2l2ZSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+PC9hLXNlbGVjdC1hcGk+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnVGV4dExlbmd0aCsrIj5tYXhUYWdUZXh0TGVuZ3RoKys8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJtYXhUYWdUZXh0TGVuZ3RoLS0iPm1heFRhZ1RleHRMZW5ndGgtLTwvYS1idXR0b24+CiAgICA8L2Etc3BhY2U+CiAgICA8aDI+bWF4VGFnVGV4dExlbmd0aDoge3sgbWF4VGFnVGV4dExlbmd0aCB9fTwvaDI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IEl0ZW0uLi4iCiAgICAgIDptYXgtdGFnLXRleHQtbGVuZ3RoPSJtYXhUYWdUZXh0TGVuZ3RoIgogICAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgID48L2Etc2VsZWN0LWFwaT4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcHRpb25zID0gcmVmPFNlbGVjdFByb3BzWydvcHRpb25zJ10+KFtdKTsKCiAgICBmb3IgKGxldCBpID0gMTA7IGkgPCAzNjsgaSsrKSB7CiAgICAgIGNvbnN0IHZhbHVlID0gaS50b1N0cmluZygzNikgKyBpOwogICAgICBvcHRpb25zLnZhbHVlLnB1c2goewogICAgICAgIGxhYmVsOiBgTG9uZyBMYWJlbDogJHt2YWx1ZX1gLAogICAgICAgIHZhbHVlLAogICAgICB9KTsKICAgIH0KICAgIGNvbnN0IG1heFRhZ0NvdW50ID0gcmVmKDIpOwogICAgY29uc3QgbWF4VGFnVGV4dExlbmd0aCA9IHJlZigxMCk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFsnYTEwJywgJ2MxMicsICdoMTcnLCAnajE5JywgJ2syMCddKSwKICAgICAgb3B0aW9ucywKICAgICAgbWF4VGFnQ291bnQsCiAgICAgIG1heFRhZ1RleHRMZW5ndGgsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnQ291bnQrKyI+bWF4VGFnQ291bnQrKzwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im1heFRhZ0NvdW50LS0iPm1heFRhZ0NvdW50LS08L2EtYnV0dG9uPgogICAgPC9hLXNwYWNlPgoKICAgIDxoMj5tYXhUYWdDb3VudDoge3sgbWF4VGFnQ291bnQgfX08L2gyPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgbW9kZT0ibXVsdGlwbGUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgcGxhY2Vob2xkZXI9IlNlbGVjdCBJdGVtLi4uIgogICAgICA6bWF4LXRhZy1jb3VudD0ibWF4VGFnQ291bnQiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3QtYXBpPgogICAgPGgyPm1heFRhZ0NvdW50OiByZXNwb25zaXZlPC9oMj4KICAgIDxhLXNlbGVjdC1hcGkKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgIG1vZGU9Im11bHRpcGxlIgogICAgICBzdHlsZT0id2lkdGg6IDEwMCUiCiAgICAgIHBsYWNlaG9sZGVyPSJTZWxlY3QgSXRlbS4uLiIKICAgICAgbWF4LXRhZy1jb3VudD0icmVzcG9uc2l2ZSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMiCiAgICA+PC9hLXNlbGVjdC1hcGk+CiAgICA8YS1zcGFjZT4KICAgICAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0ibWF4VGFnVGV4dExlbmd0aCsrIj5tYXhUYWdUZXh0TGVuZ3RoKys8L2EtYnV0dG9uPgogICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJtYXhUYWdUZXh0TGVuZ3RoLS0iPm1heFRhZ1RleHRMZW5ndGgtLTwvYS1idXR0b24+CiAgICA8L2Etc3BhY2U+CiAgICA8aDI+bWF4VGFnVGV4dExlbmd0aDoge3sgbWF4VGFnVGV4dExlbmd0aCB9fTwvaDI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgc3R5bGU9IndpZHRoOiAxMDAlIgogICAgICBwbGFjZWhvbGRlcj0iU2VsZWN0IEl0ZW0uLi4iCiAgICAgIDptYXgtdGFnLXRleHQtbGVuZ3RoPSJtYXhUYWdUZXh0TGVuZ3RoIgogICAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgID48L2Etc2VsZWN0LWFwaT4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9wdGlvbnMgPSByZWYoW10pOwoKICAgIGZvciAobGV0IGkgPSAxMDsgaSA8IDM2OyBpKyspIHsKICAgICAgY29uc3QgdmFsdWUgPSBpLnRvU3RyaW5nKDM2KSArIGk7CiAgICAgIG9wdGlvbnMudmFsdWUucHVzaCh7CiAgICAgICAgbGFiZWw6IGBMb25nIExhYmVsOiAke3ZhbHVlfWAsCiAgICAgICAgdmFsdWUsCiAgICAgIH0pOwogICAgfQoKICAgIGNvbnN0IG1heFRhZ0NvdW50ID0gcmVmKDIpOwogICAgY29uc3QgbWF4VGFnVGV4dExlbmd0aCA9IHJlZigxMCk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFsnYTEwJywgJ2MxMicsICdoMTcnLCAnajE5JywgJ2syMCddKSwKICAgICAgb3B0aW9ucywKICAgICAgbWF4VGFnQ291bnQsCiAgICAgIG1heFRhZ1RleHRMZW5ndGgsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[o(i,{direction:"vertical",style:{width:"100%"}},{default:e(()=>[o(i,null,{default:e(()=>[o(p,{type:"primary",onClick:s[0]||(s[0]=d=>a.maxTagCount++)},{default:e(()=>[xn]),_:1}),o(p,{type:"primary",onClick:s[1]||(s[1]=d=>a.maxTagCount--)},{default:e(()=>[Nn]),_:1})]),_:1}),n("h2",null,"maxTagCount: "+f(a.maxTagCount),1),o(u,{value:a.value,"onUpdate:value":s[2]||(s[2]=d=>a.value=d),mode:"multiple",style:{width:"100%"},placeholder:"Select Item...","max-tag-count":a.maxTagCount,options:a.options},null,8,["value","max-tag-count","options"]),Jn,o(u,{value:a.value,"onUpdate:value":s[3]||(s[3]=d=>a.value=d),mode:"multiple",style:{width:"100%"},placeholder:"Select Item...","max-tag-count":"responsive",options:a.options},null,8,["value","options"]),o(i,null,{default:e(()=>[o(p,{type:"primary",onClick:s[4]||(s[4]=d=>a.maxTagTextLength++)},{default:e(()=>[Kn]),_:1}),o(p,{type:"primary",onClick:s[5]||(s[5]=d=>a.maxTagTextLength--)},{default:e(()=>[Pn]),_:1})]),_:1}),n("h2",null,"maxTagTextLength: "+f(a.maxTagTextLength),1),o(u,{value:a.value,"onUpdate:value":s[6]||(s[6]=d=>a.value=d),mode:"multiple",style:{width:"100%"},placeholder:"Select Item...","max-tag-text-length":a.maxTagTextLength,options:a.options},null,8,["value","max-tag-text-length","options"])]),_:1})]),htmlCode:e(()=>[Rn]),jsVersionHtml:e(()=>[Xn]),_:1},8,["jsfiddle"])}var Ln=h(Hn,[["render",jn]]);const Dn=A({setup(){return{popupScroll:()=>{console.log("popupScroll")},size:k("default"),value1:k("a1"),value2:k(["a1","b2"]),value3:k(["a1","b2"]),options:[...Array(25)].map((s,l)=>({value:(l+10).toString(36)+(l+1)}))}}}),zn=t("Large"),Tn=t("Default"),Un=t("Small"),On=n("br",null,null,-1),qn=n("br",null,null,-1),En=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-group")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-button")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-button")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("default"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-button")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@popupScroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("popupScroll"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tags"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"popupScroll"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'popupScroll'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      popupScroll`),n("span",{class:"token punctuation"},","),t(`
      size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-group")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-button")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-button")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("default"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-radio-button")]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@popupScroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("popupScroll"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tags"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Please select"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"popupScroll"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'popupScroll'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      popupScroll`),n("span",{class:"token punctuation"},","),t(`
      size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'b2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Mn(a,s,l,r,I,b){const p=c("a-radio-button"),i=c("a-radio-group"),u=c("a-select-api"),C=c("a-space"),d=c("demo-box");return m(),v(d,{jsfiddle:{us:"The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.",cn:"\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A `large` \u548C `small` \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A `40px` \u548C `24px` \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A `32px`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A <code>large</code> \u548C <code>small</code> \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A <code>40px</code> \u548C <code>24px</code> \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A <code>32px</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.</p>
`,order:1,title:{"zh-CN":"\u4E09\u79CD\u5927\u5C0F","en-US":"Sizes"},relativePath:"components/select-api/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJkZWZhdWx0Ij5EZWZhdWx0PC9hLXJhZGlvLWJ1dHRvbj4KICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ic21hbGwiPlNtYWxsPC9hLXJhZGlvLWJ1dHRvbj4KICA8L2EtcmFkaW8tZ3JvdXA+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtc3BhY2UgZGlyZWN0aW9uPSJ2ZXJ0aWNhbCI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOnNpemU9InNpemUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3QtYXBpPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgOnNpemU9InNpemUiCiAgICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICBAcG9wdXBTY3JvbGw9InBvcHVwU2Nyb2xsIgogICAgPjwvYS1zZWxlY3QtYXBpPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICBtb2RlPSJ0YWdzIgogICAgICA6c2l6ZT0ic2l6ZSIKICAgICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA+PC9hLXNlbGVjdC1hcGk+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgcG9wdXBTY3JvbGwgPSAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdwb3B1cFNjcm9sbCcpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBwb3B1cFNjcm9sbCwKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICAgIHZhbHVlMTogcmVmKCdhMScpLAogICAgICB2YWx1ZTI6IHJlZihbJ2ExJywgJ2IyJ10pLAogICAgICB2YWx1ZTM6IHJlZihbJ2ExJywgJ2IyJ10pLAogICAgICBvcHRpb25zOiBbLi4uQXJyYXkoMjUpXS5tYXAoKF8sIGkpID0+ICh7IHZhbHVlOiAoaSArIDEwKS50b1N0cmluZygzNikgKyAoaSArIDEpIH0pKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJkZWZhdWx0Ij5EZWZhdWx0PC9hLXJhZGlvLWJ1dHRvbj4KICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ic21hbGwiPlNtYWxsPC9hLXJhZGlvLWJ1dHRvbj4KICA8L2EtcmFkaW8tZ3JvdXA+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtc3BhY2UgZGlyZWN0aW9uPSJ2ZXJ0aWNhbCI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOnNpemU9InNpemUiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgPjwvYS1zZWxlY3QtYXBpPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgOnNpemU9InNpemUiCiAgICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgICBAcG9wdXBTY3JvbGw9InBvcHVwU2Nyb2xsIgogICAgPjwvYS1zZWxlY3QtYXBpPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICBtb2RlPSJ0YWdzIgogICAgICA6c2l6ZT0ic2l6ZSIKICAgICAgcGxhY2Vob2xkZXI9IlBsZWFzZSBzZWxlY3QiCiAgICAgIHN0eWxlPSJ3aWR0aDogMjAwcHgiCiAgICA+PC9hLXNlbGVjdC1hcGk+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBwb3B1cFNjcm9sbCA9ICgpID0+IHsKICAgICAgY29uc29sZS5sb2coJ3BvcHVwU2Nyb2xsJyk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHBvcHVwU2Nyb2xsLAogICAgICBzaXplOiByZWYoJ2RlZmF1bHQnKSwKICAgICAgdmFsdWUxOiByZWYoJ2ExJyksCiAgICAgIHZhbHVlMjogcmVmKFsnYTEnLCAnYjInXSksCiAgICAgIHZhbHVlMzogcmVmKFsnYTEnLCAnYjInXSksCiAgICAgIG9wdGlvbnM6IFsuLi5BcnJheSgyNSldLm1hcCgoXywgaSkgPT4gKHsKICAgICAgICB2YWx1ZTogKGkgKyAxMCkudG9TdHJpbmcoMzYpICsgKGkgKyAxKSwKICAgICAgfSkpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[o(i,{value:a.size,"onUpdate:value":s[0]||(s[0]=g=>a.size=g)},{default:e(()=>[o(p,{value:"large"},{default:e(()=>[zn]),_:1}),o(p,{value:"default"},{default:e(()=>[Tn]),_:1}),o(p,{value:"small"},{default:e(()=>[Un]),_:1})]),_:1},8,["value"]),On,qn,o(C,{direction:"vertical"},{default:e(()=>[o(u,{value:a.value1,"onUpdate:value":s[1]||(s[1]=g=>a.value1=g),size:a.size,style:{width:"200px"},options:a.options},null,8,["value","size","options"]),o(u,{value:a.value2,"onUpdate:value":s[2]||(s[2]=g=>a.value2=g),options:a.options,mode:"multiple",size:a.size,placeholder:"Please select",style:{width:"200px"},onPopupScroll:a.popupScroll},null,8,["value","options","size","onPopupScroll"]),o(u,{value:a.value3,"onUpdate:value":s[3]||(s[3]=g=>a.value3=g),options:a.options,mode:"tags",size:a.size,placeholder:"Please select",style:{width:"200px"}},null,8,["value","options","size"])]),_:1})]),htmlCode:e(()=>[En]),jsVersionHtml:e(()=>[Qn]),_:1},8,["jsfiddle"])}var _n=h(Dn,[["render",Mn]]),$n=y("byted-send-email",!1,function(a){return o("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[o("path",{d:"M44 24V9H24H4V24V39H24",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M44 34L30 34",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M39 29L44 34L39 39",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M4 9L24 24L44 9",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null)])}),nt=$n,tt=y("byted-abnormal",!1,function(a){return o("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[o("path",{d:"M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M16 14H29",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap},null),o("path",{d:"M16 21H21",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap},null),o("circle",{cx:"34",cy:"34",r:"10",transform:"rotate(90 34 34)",fill:a.colors[1],stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M34 36L34 39",stroke:a.colors[2],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap},null),o("circle",{cx:"34",cy:"30",r:"2",fill:a.colors[2]},null)])}),at=tt,st=y("byted-open-an-account",!1,function(a){return o("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[o("path",{d:"M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M39.0508 33L39.0508 43",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M44 37.9497L34 37.9497",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("circle",{cx:"24",cy:"18",r:"5",fill:a.colors[1],stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),o("path",{d:"M33 31C33 26.5817 28.9706 23 24 23C19.0294 23 15 26.5817 15 31",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null)])}),ot=st;const et=A({components:{IconBytedSendEmail:nt,IconBytedAbnormal:at,IconBytedOpenAnAccount:ot},setup(){const a=r=>{console.log(`selected ${r}`)},s=k([{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",label:"Disabled",disabled:!0},{value:"yiminghe",label:"Yiminghe"}]),l=k([{value:"lucy",label:"Lucy"}]);return{handleChange:a,value1:k("lucy"),value2:k("lucy"),options1:s,options2:l}}}),ct=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedOpenAnAccount")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#clearIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedAbnormal")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"disabled"),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSendEmail")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#clearIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedAbnormal")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedSendEmail "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-send-email'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedAbnormal "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-abnormal'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedOpenAnAccount "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-open-an-account'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" SelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedSendEmail`),n("span",{class:"token punctuation"},","),t(`
    IconBytedAbnormal`),n("span",{class:"token punctuation"},","),t(`
    IconBytedOpenAnAccount`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),pt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedOpenAnAccount")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#clearIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedAbnormal")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 120px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"disabled"),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedSendEmail")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#clearIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedAbnormal")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("currentColor"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedSendEmail "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-send-email'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedAbnormal "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-abnormal'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedOpenAnAccount "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-open-an-account'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedSendEmail`),n("span",{class:"token punctuation"},","),t(`
    IconBytedAbnormal`),n("span",{class:"token punctuation"},","),t(`
    IconBytedOpenAnAccount`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
      label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function lt(a,s,l,r,I,b){const p=c("IconBytedOpenAnAccount"),i=c("IconBytedAbnormal"),u=c("a-select-api"),C=c("IconBytedSendEmail"),d=c("a-space"),g=c("demo-box");return m(),v(g,{jsfiddle:{us:"Icon",cn:"\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Icon</p>
`,order:11,title:{"zh-CN":"\u56FE\u6807","en-US":"Icon"},relativePath:"components/select-api/demo/icon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTIwcHgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zMSIKICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgICBhbGxvdy1jbGVhcgogICAgPgogICAgICA8dGVtcGxhdGUgI3N1ZmZpeEljb24+PEljb25CeXRlZE9wZW5BbkFjY291bnQgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2NsZWFySWNvbj48SWNvbkJ5dGVkQWJub3JtYWwgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdC1hcGk+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIKICAgICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgICAgZGlzYWJsZWQKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMyIgogICAgICBhbGxvdy1jbGVhcgogICAgPgogICAgICA8dGVtcGxhdGUgI3N1ZmZpeEljb24+PEljb25CeXRlZFNlbmRFbWFpbCA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjY2xlYXJJY29uPjxJY29uQnl0ZWRBYm5vcm1hbCA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICA8L2Etc2VsZWN0LWFwaT4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgSWNvbkJ5dGVkU2VuZEVtYWlsIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXNlbmQtZW1haWwnOwppbXBvcnQgSWNvbkJ5dGVkQWJub3JtYWwgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtYWJub3JtYWwnOwppbXBvcnQgSWNvbkJ5dGVkT3BlbkFuQWNjb3VudCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1vcGVuLWFuLWFjY291bnQnOwppbXBvcnQgdHlwZSB7IFNlbGVjdFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFNlbmRFbWFpbCwKICAgIEljb25CeXRlZEFibm9ybWFsLAogICAgSWNvbkJ5dGVkT3BlbkFuQWNjb3VudCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIGNvbnN0IG9wdGlvbnMxID0gcmVmPFNlbGVjdFByb3BzWydvcHRpb25zJ10+KFsKICAgICAgewogICAgICAgIHZhbHVlOiAnamFjaycsCiAgICAgICAgbGFiZWw6ICdKYWNrJywKICAgICAgfSwKICAgICAgewogICAgICAgIHZhbHVlOiAnbHVjeScsCiAgICAgICAgbGFiZWw6ICdMdWN5JywKICAgICAgfSwKICAgICAgewogICAgICAgIHZhbHVlOiAnZGlzYWJsZWQnLAogICAgICAgIGxhYmVsOiAnRGlzYWJsZWQnLAogICAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgICB9LAogICAgICB7CiAgICAgICAgdmFsdWU6ICd5aW1pbmdoZScsCiAgICAgICAgbGFiZWw6ICdZaW1pbmdoZScsCiAgICAgIH0sCiAgICBdKTsKICAgIGNvbnN0IG9wdGlvbnMyID0gcmVmPFNlbGVjdFByb3BzWydvcHRpb25zJ10+KFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbHVjeScsCiAgICAgICAgbGFiZWw6ICdMdWN5JywKICAgICAgfSwKICAgIF0pOwogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICB2YWx1ZTE6IHJlZignbHVjeScpLAogICAgICB2YWx1ZTI6IHJlZignbHVjeScpLAogICAgICBvcHRpb25zMSwKICAgICAgb3B0aW9uczIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTIwcHgiCiAgICAgIDpvcHRpb25zPSJvcHRpb25zMSIKICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgICBhbGxvdy1jbGVhcgogICAgPgogICAgICA8dGVtcGxhdGUgI3N1ZmZpeEljb24+PEljb25CeXRlZE9wZW5BbkFjY291bnQgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2NsZWFySWNvbj48SWNvbkJ5dGVkQWJub3JtYWwgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPC9hLXNlbGVjdC1hcGk+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIKICAgICAgc3R5bGU9IndpZHRoOiAxMjBweCIKICAgICAgZGlzYWJsZWQKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMyIgogICAgICBhbGxvdy1jbGVhcgogICAgPgogICAgICA8dGVtcGxhdGUgI3N1ZmZpeEljb24+PEljb25CeXRlZFNlbmRFbWFpbCA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjY2xlYXJJY29uPjxJY29uQnl0ZWRBYm5vcm1hbCA6Y29sb3JzPSJbJ2N1cnJlbnRDb2xvciddIiAvPjwvdGVtcGxhdGU+CiAgICA8L2Etc2VsZWN0LWFwaT4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWRTZW5kRW1haWwgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtc2VuZC1lbWFpbCc7CmltcG9ydCBJY29uQnl0ZWRBYm5vcm1hbCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1hYm5vcm1hbCc7CmltcG9ydCBJY29uQnl0ZWRPcGVuQW5BY2NvdW50IGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLW9wZW4tYW4tYWNjb3VudCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRTZW5kRW1haWwsCiAgICBJY29uQnl0ZWRBYm5vcm1hbCwKICAgIEljb25CeXRlZE9wZW5BbkFjY291bnQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApOwogICAgfTsKCiAgICBjb25zdCBvcHRpb25zMSA9IHJlZihbewogICAgICB2YWx1ZTogJ2phY2snLAogICAgICBsYWJlbDogJ0phY2snLAogICAgfSwgewogICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICBsYWJlbDogJ0x1Y3knLAogICAgfSwgewogICAgICB2YWx1ZTogJ2Rpc2FibGVkJywKICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsCiAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgfSwgewogICAgICB2YWx1ZTogJ3lpbWluZ2hlJywKICAgICAgbGFiZWw6ICdZaW1pbmdoZScsCiAgICB9XSk7CiAgICBjb25zdCBvcHRpb25zMiA9IHJlZihbewogICAgICB2YWx1ZTogJ2x1Y3knLAogICAgICBsYWJlbDogJ0x1Y3knLAogICAgfV0pOwogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICB2YWx1ZTE6IHJlZignbHVjeScpLAogICAgICB2YWx1ZTI6IHJlZignbHVjeScpLAogICAgICBvcHRpb25zMSwKICAgICAgb3B0aW9uczIsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[o(d,null,{default:e(()=>[o(u,{value:a.value1,"onUpdate:value":s[0]||(s[0]=w=>a.value1=w),style:{width:"120px"},options:a.options1,onChange:a.handleChange,"allow-clear":""},{suffixIcon:e(()=>[o(p,{colors:["currentColor"]})]),clearIcon:e(()=>[o(i,{colors:["currentColor"]})]),_:1},8,["value","options","onChange"]),o(u,{value:a.value2,"onUpdate:value":s[1]||(s[1]=w=>a.value2=w),style:{width:"120px"},disabled:"",options:a.options2,"allow-clear":""},{suffixIcon:e(()=>[o(C,{colors:["currentColor"]})]),clearIcon:e(()=>[o(i,{colors:["currentColor"]})]),_:1},8,["value","options"])]),_:1})]),htmlCode:e(()=>[ct]),jsVersionHtml:e(()=>[pt]),_:1},8,["jsfiddle"])}var ut=h(et,[["render",lt]]);const it=A({setup(){const a=s=>{console.log(`selected ${s}`)};return{value:k([]),handleChange:a,options:[...Array(25)].map((s,l)=>({value:(l+10).toString(36)+(l+1)}))}}}),kt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tags"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Tags Mode"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),rt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tags"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Tags Mode"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-select-api")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("_"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"36"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function dt(a,s,l,r,I,b){const p=c("a-select-api"),i=c("demo-box");return m(),v(i,{jsfiddle:{us:"Select with tags, transform input to tag (scroll the menu)",cn:"tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Select with tags, transform input to tag (scroll the menu)</p>
`,order:2,title:{"zh-CN":"\u6807\u7B7E","en-US":"Tags"},relativePath:"components/select-api/demo/tags.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgbW9kZT0idGFncyIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIHBsYWNlaG9sZGVyPSJUYWdzIE1vZGUiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdC1hcGk+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKFtdKSwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBvcHRpb25zOiBbLi4uQXJyYXkoMjUpXS5tYXAoKF8sIGkpID0+ICh7IHZhbHVlOiAoaSArIDEwKS50b1N0cmluZygzNikgKyAoaSArIDEpIH0pKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNlbGVjdC1hcGkKICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgbW9kZT0idGFncyIKICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgIHBsYWNlaG9sZGVyPSJUYWdzIE1vZGUiCiAgICA6b3B0aW9ucz0ib3B0aW9ucyIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+PC9hLXNlbGVjdC1hcGk+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWYoW10pLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIG9wdGlvbnM6IFsuLi5BcnJheSgyNSldLm1hcCgoXywgaSkgPT4gKHsKICAgICAgICB2YWx1ZTogKGkgKyAxMCkudG9TdHJpbmcoMzYpICsgKGkgKyAxKSwKICAgICAgfSkpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[o(p,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",options:a.options,onChange:a.handleChange},null,8,["value","options","onChange"])]),htmlCode:e(()=>[kt]),jsVersionHtml:e(()=>[rt]),_:1},8,["jsfiddle"])}var gt=h(it,[["render",dt]]);const Ct=[{id:"jack",name:"Jack"},{id:"lucy",name:"Lucy"},{id:"disabled",name:"Disabled",disabled:!0},{id:"yiminghe",name:"Yiminghe"}],It=[{name:"water",id:90,children:[{name:"select",disabled:!0,id:901},{name:"input",id:902}]},{name:"vant",id:80,children:[{name:"good",id:801},{name:"best",id:802}]},{name:"antd",disabled:!0,id:80}],mt=A({setup(){const a=r=>{console.log(`selected ${r}`)},s=k(Ct),l=k(It);return{handleChange:a,fieldNames:{value:"id",label:"name",options:"children"},value1:k("lucy"),value2:k([801]),options1:s,options2:l}}}),ht=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},":fieldNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fieldNames"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},":fieldNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fieldNames"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" SelectProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" opt1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),t(`
    disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" opt2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
    children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
        disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"901"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"902"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'vant'"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
    children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'good'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"801"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'best'"),n("span",{class:"token punctuation"},","),t(`
        id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"802"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
    disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("opt1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("SelectProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'options'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("opt2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      fieldNames`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'children'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"801"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),bt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},":fieldNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fieldNames"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-select-api")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multiple"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"allow-clear"),t(`
      `),n("span",{class:"token attr-name"},":fieldNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fieldNames"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" opt1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jack'"),n("span",{class:"token punctuation"},","),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Jack'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},","),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lucy'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},","),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Disabled'"),n("span",{class:"token punctuation"},","),t(`
  disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yiminghe'"),n("span",{class:"token punctuation"},","),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yiminghe'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" opt2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'water'"),n("span",{class:"token punctuation"},","),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),t(`
  children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
    disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"901"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"902"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'vant'"),n("span",{class:"token punctuation"},","),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
  children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'good'"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"801"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'best'"),n("span",{class:"token punctuation"},","),t(`
    id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"802"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'antd'"),n("span",{class:"token punctuation"},","),t(`
  disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
  id`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"value"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"selected "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("opt1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("opt2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      fieldNames`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'id'"),n("span",{class:"token punctuation"},","),t(`
        label`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),t(`
        options`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'children'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'lucy'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"801"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function At(a,s,l,r,I,b){const p=c("a-select-api"),i=c("a-space"),u=c("demo-box");return m(),v(u,{jsfiddle:{us:"FieldNames",cn:"\u81EA\u5B9A\u4E49option\u9009\u9879\u7684\u5B57\u6BB5\u540D\u5B57\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49option\u9009\u9879\u7684\u5B57\u6BB5\u540D\u5B57\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>FieldNames</p>
`,order:11,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5B57\u6BB5","en-US":"FieldNames"},relativePath:"components/select-api/demo/field-names.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHN0eWxlPSJ3aWR0aDogMTAwJSIgZGlyZWN0aW9uPSJ2ZXJ0aWNhbCI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMxIgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgYWxsb3ctY2xlYXIKICAgICAgOmZpZWxkTmFtZXM9ImZpZWxkTmFtZXMiCiAgICAvPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMyIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgYWxsb3ctY2xlYXIKICAgICAgOmZpZWxkTmFtZXM9ImZpZWxkTmFtZXMiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgU2VsZWN0UHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmNvbnN0IG9wdDEgPSBbCiAgewogICAgaWQ6ICdqYWNrJywKICAgIG5hbWU6ICdKYWNrJywKICB9LAogIHsKICAgIGlkOiAnbHVjeScsCiAgICBuYW1lOiAnTHVjeScsCiAgfSwKICB7CiAgICBpZDogJ2Rpc2FibGVkJywKICAgIG5hbWU6ICdEaXNhYmxlZCcsCiAgICBkaXNhYmxlZDogdHJ1ZSwKICB9LAogIHsKICAgIGlkOiAneWltaW5naGUnLAogICAgbmFtZTogJ1lpbWluZ2hlJywKICB9LApdOwoKY29uc3Qgb3B0MiA9IFsKICB7CiAgICBuYW1lOiAnd2F0ZXInLAogICAgaWQ6IDkwLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIG5hbWU6ICdzZWxlY3QnLAogICAgICAgIGRpc2FibGVkOiB0cnVlLAogICAgICAgIGlkOiA5MDEsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBuYW1lOiAnaW5wdXQnLAogICAgICAgIGlkOiA5MDIsCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgbmFtZTogJ3ZhbnQnLAogICAgaWQ6IDgwLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIG5hbWU6ICdnb29kJywKICAgICAgICBpZDogODAxLAogICAgICB9LAogICAgICB7CiAgICAgICAgbmFtZTogJ2Jlc3QnLAogICAgICAgIGlkOiA4MDIsCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgbmFtZTogJ2FudGQnLAogICAgZGlzYWJsZWQ6IHRydWUsCiAgICBpZDogODAsCiAgfSwKXTsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CgogICAgY29uc3Qgb3B0aW9uczEgPSByZWY8U2VsZWN0UHJvcHNbJ29wdGlvbnMnXT4ob3B0MSk7CiAgICBjb25zdCBvcHRpb25zMiA9IHJlZjxTZWxlY3RQcm9wc1snb3B0aW9ucyddPihvcHQyKTsKICAgIHJldHVybiB7CiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgZmllbGROYW1lczogewogICAgICAgIHZhbHVlOiAnaWQnLAogICAgICAgIGxhYmVsOiAnbmFtZScsCiAgICAgICAgb3B0aW9uczogJ2NoaWxkcmVuJywKICAgICAgfSwKICAgICAgdmFsdWUxOiByZWYoJ2x1Y3knKSwKICAgICAgdmFsdWUyOiByZWYoWzgwMV0pLAogICAgICBvcHRpb25zMSwKICAgICAgb3B0aW9uczIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHN0eWxlPSJ3aWR0aDogMTAwJSIgZGlyZWN0aW9uPSJ2ZXJ0aWNhbCI+CiAgICA8YS1zZWxlY3QtYXBpCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMxIgogICAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgYWxsb3ctY2xlYXIKICAgICAgOmZpZWxkTmFtZXM9ImZpZWxkTmFtZXMiCiAgICAvPgogICAgPGEtc2VsZWN0LWFwaQogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICAgIHN0eWxlPSJ3aWR0aDogMTAwJSIKICAgICAgOm9wdGlvbnM9Im9wdGlvbnMyIgogICAgICBtb2RlPSJtdWx0aXBsZSIKICAgICAgYWxsb3ctY2xlYXIKICAgICAgOmZpZWxkTmFtZXM9ImZpZWxkTmFtZXMiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBvcHQxID0gW3sKICBpZDogJ2phY2snLAogIG5hbWU6ICdKYWNrJywKfSwgewogIGlkOiAnbHVjeScsCiAgbmFtZTogJ0x1Y3knLAp9LCB7CiAgaWQ6ICdkaXNhYmxlZCcsCiAgbmFtZTogJ0Rpc2FibGVkJywKICBkaXNhYmxlZDogdHJ1ZSwKfSwgewogIGlkOiAneWltaW5naGUnLAogIG5hbWU6ICdZaW1pbmdoZScsCn1dOwpjb25zdCBvcHQyID0gW3sKICBuYW1lOiAnd2F0ZXInLAogIGlkOiA5MCwKICBjaGlsZHJlbjogW3sKICAgIG5hbWU6ICdzZWxlY3QnLAogICAgZGlzYWJsZWQ6IHRydWUsCiAgICBpZDogOTAxLAogIH0sIHsKICAgIG5hbWU6ICdpbnB1dCcsCiAgICBpZDogOTAyLAogIH1dLAp9LCB7CiAgbmFtZTogJ3ZhbnQnLAogIGlkOiA4MCwKICBjaGlsZHJlbjogW3sKICAgIG5hbWU6ICdnb29kJywKICAgIGlkOiA4MDEsCiAgfSwgewogICAgbmFtZTogJ2Jlc3QnLAogICAgaWQ6IDgwMiwKICB9XSwKfSwgewogIG5hbWU6ICdhbnRkJywKICBkaXNhYmxlZDogdHJ1ZSwKICBpZDogODAsCn1dOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4gewogICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTsKICAgIH07CgogICAgY29uc3Qgb3B0aW9uczEgPSByZWYob3B0MSk7CiAgICBjb25zdCBvcHRpb25zMiA9IHJlZihvcHQyKTsKICAgIHJldHVybiB7CiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgZmllbGROYW1lczogewogICAgICAgIHZhbHVlOiAnaWQnLAogICAgICAgIGxhYmVsOiAnbmFtZScsCiAgICAgICAgb3B0aW9uczogJ2NoaWxkcmVuJywKICAgICAgfSwKICAgICAgdmFsdWUxOiByZWYoJ2x1Y3knKSwKICAgICAgdmFsdWUyOiByZWYoWzgwMV0pLAogICAgICBvcHRpb25zMSwKICAgICAgb3B0aW9uczIsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[o(i,{style:{width:"100%"},direction:"vertical"},{default:e(()=>[o(p,{value:a.value1,"onUpdate:value":s[0]||(s[0]=C=>a.value1=C),options:a.options1,onChange:a.handleChange,style:{width:"100%"},"allow-clear":"",fieldNames:a.fieldNames},null,8,["value","options","onChange","fieldNames"]),o(p,{value:a.value2,"onUpdate:value":s[1]||(s[1]=C=>a.value2=C),style:{width:"100%"},options:a.options2,mode:"multiple","allow-clear":"",fieldNames:a.fieldNames},null,8,["value","options","fieldNames"])]),_:1})]),htmlCode:e(()=>[ht]),jsVersionHtml:e(()=>[bt]),_:1},8,["jsfiddle"])}var vt=h(mt,[["render",At]]);const wt={pageData:{title:"SelectApi",description:"",frontmatter:{category:"Components",subtitle:"\u9009\u62E9\u5668 API",type:"\u6570\u636E\u5F55\u5165",title:"SelectApi",cover:"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:"Select props"},{level:3,title:"Select props",slug:"Select-props",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Select Methods",slug:"Select-Methods",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u70B9\u51FB `dropdownRender` \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F"},{level:3,title:"\u70B9\u51FB dropdownRender \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F",slug:"\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F",content:"\u770B\u4E0B [dropdownRender \u4F8B\u5B50](/components/select-cn/#components-select-demo-custom-dropdown) \u91CC\u7684\u8BF4\u660E\u3002"},{level:3,title:"\u4E3A\u4EC0\u4E48 placeholder \u4E0D\u663E\u793A \uFF1F",slug:"\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F",content:"`placeholder` \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001'' \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002"}],relativePath:"components/select-api/index.zh-CN.md",content:`
Drop down selector with interface request.

## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u63A5\u53E3\u3002
- \u8868\u5355

## API

### Select props

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| value(v-model) | \u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE | string\\|string\\[]\\|number\\|number\\[] | - |  |
| allowClear | \u652F\u6301\u6E05\u9664 | boolean | false |  |
| autoClearSearchValue | \u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 \`mode\` \u4E3A \`multiple\` \u6216 \`tags\` \u65F6\u6709\u6548\u3002 | boolean | true |  |
| autofocus | \u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| bordered | \u662F\u5426\u6709\u8FB9\u6846 | boolean | true |  |
| defaultActiveFirstOption | \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002 | boolean | true |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |
| dropdownClassName | \u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027 | string | - |  |
| dropdownMatchSelectWidth | \u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E \`min-width\`\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean \\| number | true |  |
| dropdownRender | \u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9 | ({menuNode: VNode, props}) =&gt; VNode \\| v-slot | - |  |
| dropdownStyle | \u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027 | object | - |  |
| dropdownMenuStyle | dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F | object | - |  |
| filterOption | \u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 \`inputValue\` \`option\` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 \`option\` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE \`true\`\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE \`false\`\u3002 | boolean or function(inputValue, option) | true |  |
| firstActiveValue | \u9ED8\u8BA4\u9AD8\u4EAE\u7684\u9009\u9879 | string\\|string\\[] | - |  |
| getPopupContainer | \u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002 | Function(triggerNode) | () =&gt; document.body |  |
| labelInValue | \u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE \`string\` \u53D8\u4E3A \`{key: string, label: vNodes}\` \u7684\u683C\u5F0F | boolean | false |  |
| maxTagCount | \u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag | number | - |  |
| maxTagPlaceholder | \u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9 | slot/function(omittedValues) | - |  |
| maxTagTextLength | \u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6 | number | - |  |
| mode | \u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E | &#39;multiple&#39; \\| &#39;tags&#39; \\| &#39;combobox&#39; | - |  |
| notFoundContent | \u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9 | string\\|slot | &#39;Not Found&#39; |  |
| optionFilterProp | \u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 option \u5C5E\u6027\uFF0C\u4E0D\u652F\u6301 children | string | value |  |
| optionLabelProp | \u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A \`value\`\u3002 | string | \`children\` \\| \`label\`(\u8BBE\u7F6E options \u65F6) |  |
| placeholder | \u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57 | string\\|slot | - |  |
| showSearch | \u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22 | boolean | false |  |
| showArrow | \u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934 | boolean | true |  |
| size | \u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 \`large\` \`small\` | string | default |  |
| suffixIcon | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | VNode \\| slot | - |  |
| removeIcon | \u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807 | VNode \\| slot | - |  |
| clearIcon | \u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807 | VNode \\| slot | - |  |
| menuItemSelectedIcon | \u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807 | VNode \\| slot | - |  |
| tokenSeparators | \u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26 | string\\[] |  |  |
| options | options \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 selectOption \u8282\u70B9 | array&amp;lt;{value, label, [disabled, key, title]}&gt; | \\[] |  |
| option | \u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9 | v-slot:option=&quot;{value, label, [disabled, key, title]}&quot; | - | 2.2.5 |
| defaultOpen | \u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355 | boolean | - |  |
| open | \u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355 | boolean | - |  |
| loading | \u52A0\u8F7D\u72B6\u6001 | Boolean | false |  |
| api | \u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03 | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| apiParams | \u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570 | object | {} |
| loopGetOptions | \u662F\u5426\u5FAA\u73AF\u8BF7\u6C42 api \uFF0C\u83B7\u53D6\u4E0B\u62C9\u9009\u9879 | boolean | false |
| loadingPlaceholder | \u52A0\u8F7D\u4E2D\u7684\u6587\u6848 | string | - | 4.0.0 |
| fieldNames | \u66FF\u6362 options \u4E2D label,value,key,options \u5B57\u6BB5\u4E3A options \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5 | {options:&#39;options&#39;, label:&#39;label&#39;, key:&#39;key&#39;, value:&#39;value&#39; } | - | 4.0.0 |

&gt; \u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 \`getPopupContainer={triggerNode =&gt; triggerNode.parentNode}\` \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| blur | \u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03 | function |
| change | \u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\uFF08combobox \u6A21\u5F0F\u4E0B\uFF09\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570 | function(value, option:Option/Array&amp;lt;Option&gt;) |
| deselect | \u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 multiple \u6216 tags \u6A21\u5F0F\u4E0B\u751F\u6548 | function(value\uFF0Coption:Option) |
| focus | \u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03 | function |
| inputKeyDown | \u952E\u76D8\u6309\u4E0B\u65F6\u56DE\u8C03 | function |
| mouseenter | \u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03 | function |
| mouseleave | \u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03 | function |
| popupScroll | \u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03 | function |
| search | \u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03 | function(value: string) |
| select | \u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C | function(value, option:Option) |
| dropdownVisibleChange | \u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03 | function(open) |

### Select Methods

| \u540D\u79F0    | \u8BF4\u660E     |
| ------- | -------- |
| blur()  | \u53D6\u6D88\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

## FAQ

### \u70B9\u51FB \`dropdownRender\` \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F

\u770B\u4E0B [dropdownRender \u4F8B\u5B50](/components/select-cn/#components-select-demo-custom-dropdown) \u91CC\u7684\u8BF4\u660E\u3002

### \u4E3A\u4EC0\u4E48 \`placeholder\` \u4E0D\u663E\u793A \uFF1F

\`placeholder\` \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001&#39;&#39; \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002

\u4F60\u53EF\u4EE5\u67E5\u770B [JS \u8BED\u8A00\u89C4\u8303](https://262.ecma-international.org/5.1/#sec-4.3.9) \u8FDB\u4E00\u6B65\u4E86\u89E3\u8BE6\u60C5\u3002

\u4E5F\u53EF\u4EE5\u67E5\u770B [antd issue](https://github.com/ant-design/ant-design/issues/2367) \u67E5\u770B\u8BA8\u8BBA\u60C5\u51B5\u3002
`,html:`<p>Drop down selector with interface request.</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u9700\u8981\u63A5\u53E3\u3002</li>
<li>\u8868\u5355</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
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
<td>value(v-model)</td>
<td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string|string[]|number|number[]</td>
<td>-</td>
<td></td>
</tr>
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
<td>defaultActiveFirstOption</td>
<td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td>
<td>boolean</td>
<td>true</td>
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
<td>dropdownMenuStyle</td>
<td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>filterOption</td>
<td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td>
<td>boolean or function(inputValue, option)</td>
<td>true</td>
<td></td>
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
<td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{key: string, label: vNodes}</code> \u7684\u683C\u5F0F</td>
<td>boolean</td>
<td>false</td>
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
<td>slot/function(omittedValues)</td>
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
<td>placeholder</td>
<td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td>
<td>string|slot</td>
<td>-</td>
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
<td>showArrow</td>
<td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td>
<td>boolean</td>
<td>true</td>
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
<td>removeIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
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
<td>menuItemSelectedIcon</td>
<td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tokenSeparators</td>
<td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td>
<td>string[]</td>
<td></td>
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
<td>option</td>
<td>\u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9</td>
<td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td>
<td>-</td>
<td>2.2.5</td>
</tr>
<tr>
<td>defaultOpen</td>
<td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td>
<td>boolean</td>
<td>-</td>
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
<td>loading</td>
<td>\u52A0\u8F7D\u72B6\u6001</td>
<td>Boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
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
<td>loopGetOptions</td>
<td>\u662F\u5426\u5FAA\u73AF\u8BF7\u6C42 api \uFF0C\u83B7\u53D6\u4E0B\u62C9\u9009\u9879</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>loadingPlaceholder</td>
<td>\u52A0\u8F7D\u4E2D\u7684\u6587\u6848</td>
<td>string</td>
<td>-</td>
<td>4.0.0</td>
</tr>
<tr>
<td>fieldNames</td>
<td>\u66FF\u6362 options \u4E2D label,value,key,options \u5B57\u6BB5\u4E3A options \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td>
<td>{options:'options', label:'label', key:'key', value:'value' }</td>
<td>-</td>
<td>4.0.0</td>
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
<tr>
<td>dropdownVisibleChange</td>
<td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td>
<td>function(open)</td>
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
`,lastUpdated:1701878243867}},ft={class:"markdown"},yt=Z('<p>Drop down selector with interface request.</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u9700\u8981\u63A5\u53E3\u3002</li><li>\u8868\u5355</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Select-props">Select props <a class="header-anchor" href="#Select-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</td><td>string|string[]|number|number[]</td><td>-</td><td></td></tr><tr><td>allowClear</td><td>\u652F\u6301\u6E05\u9664</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autoClearSearchValue</td><td>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548\u3002</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultActiveFirstOption</td><td>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\u3002</td><td>boolean</td><td>true</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownClassName</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</td><td>string</td><td>-</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean | number</td><td>true</td><td></td></tr><tr><td>dropdownRender</td><td>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</td><td>({menuNode: VNode, props}) =&gt; VNode | v-slot</td><td>-</td><td></td></tr><tr><td>dropdownStyle</td><td>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</td><td>object</td><td>-</td><td></td></tr><tr><td>dropdownMenuStyle</td><td>dropdown \u83DC\u5355\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>filterOption</td><td>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>boolean or function(inputValue, option)</td><td>true</td><td></td></tr><tr><td>firstActiveValue</td><td>\u9ED8\u8BA4\u9AD8\u4EAE\u7684\u9009\u9879</td><td>string|string[]</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>labelInValue</td><td>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A <code>{key: string, label: vNodes}</code> \u7684\u683C\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>maxTagCount</td><td>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag</td><td>number</td><td>-</td><td></td></tr><tr><td>maxTagPlaceholder</td><td>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>slot/function(omittedValues)</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>mode</td><td>\u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E</td><td>&#39;multiple&#39; | &#39;tags&#39; | &#39;combobox&#39;</td><td>-</td><td></td></tr><tr><td>notFoundContent</td><td>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</td><td>string|slot</td><td>&#39;Not Found&#39;</td><td></td></tr><tr><td>optionFilterProp</td><td>\u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 option \u5C5E\u6027\uFF0C\u4E0D\u652F\u6301 children</td><td>string</td><td>value</td><td></td></tr><tr><td>optionLabelProp</td><td>\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A <code>value</code>\u3002</td><td>string</td><td><code>children</code> | <code>label</code>(\u8BBE\u7F6E options \u65F6)</td><td></td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>showSearch</td><td>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showArrow</td><td>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</td><td>boolean</td><td>true</td><td></td></tr><tr><td>size</td><td>\u9009\u62E9\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>small</code></td><td>string</td><td>default</td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>removeIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>clearIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>menuItemSelectedIcon</td><td>\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>tokenSeparators</td><td>\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</td><td>string[]</td><td></td><td></td></tr><tr><td>options</td><td>options \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 selectOption \u8282\u70B9</td><td>array&lt;{value, label, [disabled, key, title]}&gt;</td><td>[]</td><td></td></tr><tr><td>option</td><td>\u901A\u8FC7 option \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8282\u70B9</td><td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td><td>-</td><td>2.2.5</td></tr><tr><td>defaultOpen</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>open</td><td>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</td><td>boolean</td><td>-</td><td></td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u72B6\u6001</td><td>Boolean</td><td>false</td><td></td></tr><tr><td>api</td><td>\u63A5\u53E3\u8BF7\u6C42\uFF0C\u4E0D\u652F\u6301 async \u548C Promise \uFF0C\u53EA\u652F\u6301\u56DE\u8C03</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>apiParams</td><td>\u63A5\u53E3\u9644\u5E26\u7684\u53C2\u6570</td><td>object</td><td>{}</td><td></td></tr><tr><td>loopGetOptions</td><td>\u662F\u5426\u5FAA\u73AF\u8BF7\u6C42 api \uFF0C\u83B7\u53D6\u4E0B\u62C9\u9009\u9879</td><td>boolean</td><td>false</td><td></td></tr><tr><td>loadingPlaceholder</td><td>\u52A0\u8F7D\u4E2D\u7684\u6587\u6848</td><td>string</td><td>-</td><td>4.0.0</td></tr><tr><td>fieldNames</td><td>\u66FF\u6362 options \u4E2D label,value,key,options \u5B57\u6BB5\u4E3A options \u4E2D\u5BF9\u5E94\u7684\u5B57\u6BB5</td><td>{options:&#39;options&#39;, label:&#39;label&#39;, key:&#39;key&#39;, value:&#39;value&#39; }</td><td>-</td><td>4.0.0</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 <code>getPopupContainer={triggerNode =&gt; triggerNode.parentNode}</code> \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002</p></blockquote><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9\u7684\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>change</td><td>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\uFF08combobox \u6A21\u5F0F\u4E0B\uFF09\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</td><td>function(value, option:Option/Array&lt;Option&gt;)</td></tr><tr><td>deselect</td><td>\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 multiple \u6216 tags \u6A21\u5F0F\u4E0B\u751F\u6548</td><td>function(value\uFF0Coption:Option)</td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>inputKeyDown</td><td>\u952E\u76D8\u6309\u4E0B\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>mouseenter</td><td>\u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>mouseleave</td><td>\u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03</td><td>function</td></tr><tr><td>popupScroll</td><td>\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03</td><td>function</td></tr><tr><td>search</td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td>function(value: string)</td></tr><tr><td>select</td><td>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C</td><td>function(value, option:Option)</td></tr><tr><td>dropdownVisibleChange</td><td>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</td><td>function(open)</td></tr></tbody></table><h3 id="Select-Methods">Select Methods <a class="header-anchor" href="#Select-Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>blur()</td><td>\u53D6\u6D88\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F">\u70B9\u51FB <code>dropdownRender</code> \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F <a class="header-anchor" href="#\u70B9\u51FB-dropdownRender-\u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u770B\u4E0B <a href="/components/select-cn/#components-select-demo-custom-dropdown">dropdownRender \u4F8B\u5B50</a> \u91CC\u7684\u8BF4\u660E\u3002</p><h3 id="\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F">\u4E3A\u4EC0\u4E48 <code>placeholder</code> \u4E0D\u663E\u793A \uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-placeholder-\u4E0D\u663E\u793A-\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>placeholder</code> \u53EA\u6709\u5728 value = undefined \u624D\u4F1A\u663E\u793A\uFF0C\u5BF9\u4E8E\u5176\u5B83\u7684 null\u30010\u3001&#39;&#39; \u7B49\u7B49\u5BF9\u4E8E JS \u8BED\u8A00\u90FD\u662F\u6709\u610F\u4E49\u7684\u503C\u3002</p><p>\u4F60\u53EF\u4EE5\u67E5\u770B <a href="https://262.ecma-international.org/5.1/#sec-4.3.9" target="_blank" rel="noopener noreferrer">JS \u8BED\u8A00\u89C4\u8303</a> \u8FDB\u4E00\u6B65\u4E86\u89E3\u8BE6\u60C5\u3002</p><p>\u4E5F\u53EF\u4EE5\u67E5\u770B <a href="https://github.com/ant-design/ant-design/issues/2367" target="_blank" rel="noopener noreferrer">antd issue</a> \u67E5\u770B\u8BA8\u8BBA\u60C5\u51B5\u3002</p>',18),Wt=[yt];function Zt(a,s,l,r,I,b){return m(),W("article",ft,Wt)}var Gt=h(wt,[["render",Zt]]);const Bt={pageData:{title:"SelectApi",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"SelectApi",cover:"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:"Select props"},{level:3,title:"Select props",slug:"Select-props",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Select Methods",slug:"Select-Methods",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"The dropdown is closed when click `dropdownRender` area?"},{level:3,title:"The dropdown is closed when click dropdownRender area?",slug:"The-dropdown-is-closed-when-click-dropdownRender-area",content:"See the [dropdownRender example](/components/select/#components-select-demo-custom-dropdown)."},{level:3,title:"Why is placeholder not displayed?",slug:"Why-is-placeholder-not-displayed",content:"`placeholder` will only be displayed when `value = undefined`, and other values such as null, 0,'', etc. are meaningful values for the JS language."}],relativePath:"components/select-api/index.en-US.md",content:`
Select component to select value from options.

## When To Use

- Interface required.
- Form

## API

### Select props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| value(v-model) | Current selected option. | string\\|number\\|string\\[]\\|number\\[] | - |  |
| allowClear | Show clear button. | boolean | false |  |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when \`mode\` is set to \`multiple\` or \`tags\`. | boolean | true |  |
| autofocus | Get focus by default | boolean | false |  |
| bordered | Whether has border style | boolean | true |  |
| defaultActiveFirstOption | Whether active first option by default | boolean | true |  |
| disabled | Whether disabled select | boolean | false |  |
| dropdownClassName | className of dropdown menu | string | - |  |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set \`min-width\` same as input. Will ignore when value less than select width. \`false\` will disable virtual scroll | boolean \\| number | true |  |
| dropdownRender | Customize dropdown content | ({menuNode: VNode, props}) =&gt; VNode \\| v-slot | - |  |
| dropdownStyle | style of dropdown menu | object | - |  |
| dropdownMenuStyle | additional style applied to dropdown menu | object | - |  |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, \`inputValue\` and \`option\`, if the function returns \`true\`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option) | true |  |
| firstActiveValue | Value of action option by default | string\\|string\\[] | - |  |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to \`body\`. When position issues happen, try to modify it into scrollable content and position it relative. | function(triggerNode) | () =&gt; document.body |  |
| labelInValue | whether to embed label in value, turn the format of value from \`string\` to \`{key: string, label: vNodes}\` | boolean | false |  |
| maxTagCount | Max tag count to show | number | - |  |
| maxTagPlaceholder | Placeholder for not showing tags | slot/function(omittedValues) | - |  |
| maxTagTextLength | Max text length to show | number | - |  |
| mode | Set mode of Select | &#39;multiple&#39; \\| &#39;tags&#39; | - |  |
| notFoundContent | Specify content to show when no result matches.. | string\\|slot | &#39;Not Found&#39; |  |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true | string | value |  |
| optionLabelProp | Which prop value of option will render as content of select. | string | \`children\` \\| \`label\`(when use options) |  |
| placeholder | Placeholder of select | string\\|slot | - |  |
| showSearch | Whether show search input in single mode. | boolean | false |  |
| showArrow | Whether to show the drop-down arrow | boolean | true |  |
| size | Size of Select input. \`default\` \`large\` \`small\` | string | default |  |
| suffixIcon | The custom suffix icon | VNode \\| slot | - |  |
| removeIcon | The custom remove icon | VNode \\| slot | - |  |
| clearIcon | The custom clear icon | VNode \\| slot | - |  |
| menuItemSelectedIcon | The custom menuItemSelected icon | VNode \\| slot | - |  |
| tokenSeparators | Separator used to tokenize on tag/multiple mode | string\\[] |  |  |
| options | Data of the selectOption, manual construction work is no longer needed if this property has been set | array&amp;lt;{value, label, [disabled, key, title]}&gt; | \\[] |  |
| option | custom render option by slot | v-slot:option=&quot;{value, label, [disabled, key, title]}&quot; | - | 2.2.5 |
| defaultOpen | Initial open state of dropdown | boolean | - |  |
| open | Controlled open state of dropdown | boolean | - |  |
| loading | Indicate loading state | Boolean | false |  |
| api | Interface request. Async and promise are not supported. Only callback is supported | \`(...arg: any) =&gt; Promise&lt;any&gt;\` | - |  |
| apiParams | Parameters attached to the interface | object | {} |
| loopGetOptions | Whether to cycle the request API and get the drop-down options | boolean | false |
| loadingPlaceholder | Loading placeholder | string | - | 4.0.0 |
| fieldNames | Replace the label, value, key and options fields in options with the corresponding fields in options | {options:&#39;options&#39;, label:&#39;label&#39;, key:&#39;key&#39;, value:&#39;value&#39; } | - | 4.0.0 |

&gt; Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use \`getPopupContainer={triggerNode =&gt; triggerNode.parentElement}\` to fix the drop-down popup rendering node in the parent element of the trigger .

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| blur | Called when blur | function |
| change | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option/Array&amp;lt;Option&gt;) |
| deselect | Called when a option is deselected, the params are option&#39;s value (or key) . only called for multiple or tags, effective in multiple or tags mode only. | function(value, option:Option) |
| focus | Called when focus | function |
| inputKeyDown | Called when key pressed | function |
| mouseenter | Called when mouse enter | function |
| mouseleave | Called when mouse leave | function |
| popupScroll | Called when dropdown scrolls | function |
| search | Callback function that is fired when input changed. | function(value: string) |
| select | Called when a option is selected, the params are option&#39;s value (or key) and option instance. | function(value, option:Option) |
| dropdownVisibleChange | Call when dropdown open | function(open) |

### Select Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |

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
<li>Interface required.</li>
<li>Form</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
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
<td>value(v-model)</td>
<td>Current selected option.</td>
<td>string|number|string[]|number[]</td>
<td>-</td>
<td></td>
</tr>
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
<td>defaultActiveFirstOption</td>
<td>Whether active first option by default</td>
<td>boolean</td>
<td>true</td>
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
<td>dropdownMenuStyle</td>
<td>additional style applied to dropdown menu</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>filterOption</td>
<td>If true, filter options by input, if function, filter options against it. The function will receive two arguments, <code>inputValue</code> and <code>option</code>, if the function returns <code>true</code>, the option will be included in the filtered set; Otherwise, it will be excluded.</td>
<td>boolean or function(inputValue, option)</td>
<td>true</td>
<td></td>
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
<td>whether to embed label in value, turn the format of value from <code>string</code> to <code>{key: string, label: vNodes}</code></td>
<td>boolean</td>
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
<td>placeholder</td>
<td>Placeholder of select</td>
<td>string|slot</td>
<td>-</td>
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
<td>showArrow</td>
<td>Whether to show the drop-down arrow</td>
<td>boolean</td>
<td>true</td>
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
<td>removeIcon</td>
<td>The custom remove icon</td>
<td>VNode | slot</td>
<td>-</td>
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
<td>menuItemSelectedIcon</td>
<td>The custom menuItemSelected icon</td>
<td>VNode | slot</td>
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
<td>options</td>
<td>Data of the selectOption, manual construction work is no longer needed if this property has been set</td>
<td>array&lt;{value, label, [disabled, key, title]}&gt;</td>
<td>[]</td>
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
<td>defaultOpen</td>
<td>Initial open state of dropdown</td>
<td>boolean</td>
<td>-</td>
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
<td>loading</td>
<td>Indicate loading state</td>
<td>Boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>api</td>
<td>Interface request. Async and promise are not supported. Only callback is supported</td>
<td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td>
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
<td>loopGetOptions</td>
<td>Whether to cycle the request API and get the drop-down options</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>loadingPlaceholder</td>
<td>Loading placeholder</td>
<td>string</td>
<td>-</td>
<td>4.0.0</td>
</tr>
<tr>
<td>fieldNames</td>
<td>Replace the label, value, key and options fields in options with the corresponding fields in options</td>
<td>{options:'options', label:'label', key:'key', value:'value' }</td>
<td>-</td>
<td>4.0.0</td>
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
<tr>
<td>dropdownVisibleChange</td>
<td>Call when dropdown open</td>
<td>function(open)</td>
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
`,lastUpdated:1701878243866}},St={class:"markdown"},Vt=Z('<p>Select component to select value from options.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>Interface required.</li><li>Form</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Select-props">Select props <a class="header-anchor" href="#Select-props"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>value(v-model)</td><td>Current selected option.</td><td>string|number|string[]|number[]</td><td>-</td><td></td></tr><tr><td>allowClear</td><td>Show clear button.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>autoClearSearchValue</td><td>Whether the current search will be cleared on selecting an item. Only applies when <code>mode</code> is set to <code>multiple</code> or <code>tags</code>.</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>Get focus by default</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>Whether has border style</td><td>boolean</td><td>true</td><td></td></tr><tr><td>defaultActiveFirstOption</td><td>Whether active first option by default</td><td>boolean</td><td>true</td><td></td></tr><tr><td>disabled</td><td>Whether disabled select</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dropdownClassName</td><td>className of dropdown menu</td><td>string</td><td>-</td><td></td></tr><tr><td>dropdownMatchSelectWidth</td><td>Determine whether the dropdown menu and the select input are the same width. Default set <code>min-width</code> same as input. Will ignore when value less than select width. <code>false</code> will disable virtual scroll</td><td>boolean | number</td><td>true</td><td></td></tr><tr><td>dropdownRender</td><td>Customize dropdown content</td><td>({menuNode: VNode, props}) =&gt; VNode | v-slot</td><td>-</td><td></td></tr><tr><td>dropdownStyle</td><td>style of dropdown menu</td><td>object</td><td>-</td><td></td></tr><tr><td>dropdownMenuStyle</td><td>additional style applied to dropdown menu</td><td>object</td><td>-</td><td></td></tr><tr><td>filterOption</td><td>If true, filter options by input, if function, filter options against it. The function will receive two arguments, <code>inputValue</code> and <code>option</code>, if the function returns <code>true</code>, the option will be included in the filtered set; Otherwise, it will be excluded.</td><td>boolean or function(inputValue, option)</td><td>true</td><td></td></tr><tr><td>firstActiveValue</td><td>Value of action option by default</td><td>string|string[]</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>Parent Node which the selector should be rendered to. Default to <code>body</code>. When position issues happen, try to modify it into scrollable content and position it relative.</td><td>function(triggerNode)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>labelInValue</td><td>whether to embed label in value, turn the format of value from <code>string</code> to <code>{key: string, label: vNodes}</code></td><td>boolean</td><td>false</td><td></td></tr><tr><td>maxTagCount</td><td>Max tag count to show</td><td>number</td><td>-</td><td></td></tr><tr><td>maxTagPlaceholder</td><td>Placeholder for not showing tags</td><td>slot/function(omittedValues)</td><td>-</td><td></td></tr><tr><td>maxTagTextLength</td><td>Max text length to show</td><td>number</td><td>-</td><td></td></tr><tr><td>mode</td><td>Set mode of Select</td><td>&#39;multiple&#39; | &#39;tags&#39;</td><td>-</td><td></td></tr><tr><td>notFoundContent</td><td>Specify content to show when no result matches..</td><td>string|slot</td><td>&#39;Not Found&#39;</td><td></td></tr><tr><td>optionFilterProp</td><td>Which prop value of option will be used for filter if filterOption is true</td><td>string</td><td>value</td><td></td></tr><tr><td>optionLabelProp</td><td>Which prop value of option will render as content of select.</td><td>string</td><td><code>children</code> | <code>label</code>(when use options)</td><td></td></tr><tr><td>placeholder</td><td>Placeholder of select</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>showSearch</td><td>Whether show search input in single mode.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showArrow</td><td>Whether to show the drop-down arrow</td><td>boolean</td><td>true</td><td></td></tr><tr><td>size</td><td>Size of Select input. <code>default</code> <code>large</code> <code>small</code></td><td>string</td><td>default</td><td></td></tr><tr><td>suffixIcon</td><td>The custom suffix icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>removeIcon</td><td>The custom remove icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>clearIcon</td><td>The custom clear icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>menuItemSelectedIcon</td><td>The custom menuItemSelected icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>tokenSeparators</td><td>Separator used to tokenize on tag/multiple mode</td><td>string[]</td><td></td><td></td></tr><tr><td>options</td><td>Data of the selectOption, manual construction work is no longer needed if this property has been set</td><td>array&lt;{value, label, [disabled, key, title]}&gt;</td><td>[]</td><td></td></tr><tr><td>option</td><td>custom render option by slot</td><td>v-slot:option=&quot;{value, label, [disabled, key, title]}&quot;</td><td>-</td><td>2.2.5</td></tr><tr><td>defaultOpen</td><td>Initial open state of dropdown</td><td>boolean</td><td>-</td><td></td></tr><tr><td>open</td><td>Controlled open state of dropdown</td><td>boolean</td><td>-</td><td></td></tr><tr><td>loading</td><td>Indicate loading state</td><td>Boolean</td><td>false</td><td></td></tr><tr><td>api</td><td>Interface request. Async and promise are not supported. Only callback is supported</td><td><code>(...arg: any) =&gt; Promise&lt;any&gt;</code></td><td>-</td><td></td></tr><tr><td>apiParams</td><td>Parameters attached to the interface</td><td>object</td><td>{}</td><td></td></tr><tr><td>loopGetOptions</td><td>Whether to cycle the request API and get the drop-down options</td><td>boolean</td><td>false</td><td></td></tr><tr><td>loadingPlaceholder</td><td>Loading placeholder</td><td>string</td><td>-</td><td>4.0.0</td></tr><tr><td>fieldNames</td><td>Replace the label, value, key and options fields in options with the corresponding fields in options</td><td>{options:&#39;options&#39;, label:&#39;label&#39;, key:&#39;key&#39;, value:&#39;value&#39; }</td><td>-</td><td>4.0.0</td></tr></tbody></table><blockquote><p>Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use <code>getPopupContainer={triggerNode =&gt; triggerNode.parentElement}</code> to fix the drop-down popup rendering node in the parent element of the trigger .</p></blockquote><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>blur</td><td>Called when blur</td><td>function</td></tr><tr><td>change</td><td>Called when select an option or input value change, or value of input is changed in combobox mode</td><td>function(value, option:Option/Array&lt;Option&gt;)</td></tr><tr><td>deselect</td><td>Called when a option is deselected, the params are option&#39;s value (or key) . only called for multiple or tags, effective in multiple or tags mode only.</td><td>function(value, option:Option)</td></tr><tr><td>focus</td><td>Called when focus</td><td>function</td></tr><tr><td>inputKeyDown</td><td>Called when key pressed</td><td>function</td></tr><tr><td>mouseenter</td><td>Called when mouse enter</td><td>function</td></tr><tr><td>mouseleave</td><td>Called when mouse leave</td><td>function</td></tr><tr><td>popupScroll</td><td>Called when dropdown scrolls</td><td>function</td></tr><tr><td>search</td><td>Callback function that is fired when input changed.</td><td>function(value: string)</td></tr><tr><td>select</td><td>Called when a option is selected, the params are option&#39;s value (or key) and option instance.</td><td>function(value, option:Option)</td></tr><tr><td>dropdownVisibleChange</td><td>Call when dropdown open</td><td>function(open)</td></tr></tbody></table><h3 id="Select-Methods">Select Methods <a class="header-anchor" href="#Select-Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>blur()</td><td>Remove focus</td></tr><tr><td>focus()</td><td>Get focus</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="The-dropdown-is-closed-when-click-dropdownRender-area">The dropdown is closed when click <code>dropdownRender</code> area? <a class="header-anchor" href="#The-dropdown-is-closed-when-click-dropdownRender-area"><span aria-hidden="true" class="anchor">#</span></a></h3><p>See the <a href="/components/select/#components-select-demo-custom-dropdown">dropdownRender example</a>.</p><h3 id="Why-is-placeholder-not-displayed">Why is <code>placeholder</code> not displayed? <a class="header-anchor" href="#Why-is-placeholder-not-displayed"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>placeholder</code> will only be displayed when <code>value = undefined</code>, and other values such as null, 0,&#39;&#39;, etc. are meaningful values for the JS language.</p><p>You can check <a href="https://262.ecma-international.org/5.1/#sec-4.3.9" target="_blank" rel="noopener noreferrer">JS Language Specification</a> for further details.</p><p>You can also check <a href="https://github.com/ant-design/ant-design/issues/2367" target="_blank" rel="noopener noreferrer">antd issue</a> to view the discussion.</p>',18),Yt=[Vt];function Ft(a,s,l,r,I,b){return m(),W("article",St,Yt)}var Ht=h(Bt,[["render",Ft]]);const xt=A({CN:Gt,US:Ht,components:{Basic:j,Group:O,Search:$,CustomDropdownMenu:cn,LabelInValue:rn,Multiple:mn,OptionLabelProp:Fn,Responsive:Ln,Size:_n,Icon:ut,Tags:gt,FieldNames:vt},setup(){return{}}});function Nt(a,s,l,r,I,b){const p=c("Basic"),i=c("Group"),u=c("Search"),C=c("CustomDropdownMenu"),d=c("LabelInValue"),g=c("Multiple"),w=c("OptionLabelProp"),G=c("Responsive"),B=c("Size"),S=c("Icon"),V=c("Tags"),Y=c("FieldNames"),F=c("demo-sort");return m(),v(F,null,{default:e(()=>[o(p),o(i),o(u),o(C),o(d),o(g),o(w),o(G),o(B),o(S),o(V),o(Y)]),_:1})}var Pt=h(xt,[["render",Nt]]);export{Pt as default};
